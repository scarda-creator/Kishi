# D6 — Come si tiene una costituzione allineata a un sistema che cambia

## Risposta in tre righe

Il buco più grosso non è "docs vs codice", è un terzo livello che il mandato non aveva
misurato: il registro degli agenti che il runtime espone in questa stessa sessione non
corrisponde né alla costituzione né ai file v2 su disco — mostra i nomi v1 archiviati sei
settimane fa. La causa meccanica più probabile, verificata riga per riga: tutti e 8 i file
`.claude/agents/*.md` attuali non hanno il campo `name` nel frontmatter, che la
documentazione ufficiale dichiara **obbligatorio**; Claude Code scansiona
`.claude/agents/` **ricorsivamente**, quindi trova comunque `legacy-v1/*.md`, che il campo
`name` ce l'ha. Nessun meccanismo esistente — né generico né di Anthropic — rende questo
visibile all'apertura sessione senza che qualcuno lo chieda: il candidato che lo farebbe
esiste già nell'infrastruttura hook della navicella (`SessionStart` + campo JSON
`systemMessage`) ma oggi non è usato in quella forma.

## Candidati (ordinati per utilità reale, non per fama)

**1. Root-cause diagnosticato su questa sessione — frontmatter `name` mancante +
scansione ricorsiva di `legacy-v1/`**
· non è un tool esterno, è la diagnosi diretta del sintomo di Mnemosyne · fonte: lettura
diretta di tutti gli 8 file in `.claude/agents/*.md` (nessuno ha `name:`) contro i 7 file in
`.claude/agents/legacy-v1/*.md` (tutti hanno `name:` con i vecchi nomi), incrociata con
`code.claude.com/docs/en/sub-agents` (fetch 31/7/2026): "Only `name` and `description` are
required" e "Claude Code scans `.claude/agents/` and `~/.claude/agents/` **recursively**...
identity comes only from the `name` frontmatter field" · risolverebbe: spiega esattamente
perché l'Argonauta non esisteva quando Mnemosyne l'ha convocato oggi, senza bisogno di
inventare una teoria — 8/8 agenti mancanti nel registro runtime hanno il frontmatter
incompleto, e i 4 che non hanno un equivalente `legacy-v1` (architetto, demiurgo-creativo,
ermete, ierofante) sono infatti **del tutto assenti** dalla lista che il runtime mi ha
esposto in questa sessione — coerenza totale con l'ipotesi · costo: zero, è una lettura ·
rischio: **non è una certezza, è un'ipotesi ad alta confidenza** — vedi Non confermato ·
fonte del giudizio: lettura diretta dei file (livello 1) + doc ufficiale datata (livello 1)
+ due issue GitHub che confermano il comportamento della classe di errore (livello 2).

**2. `SessionStart` hook con output JSON `systemMessage`** (Claude Code, ufficiale)
· https://code.claude.com/docs/en/hooks (fetch 31/7/2026) · nessuna versione minima
dichiarata, è nello schema-base · fa: un hook può restituire `{"systemMessage": "..."}` e
quel testo è **mostrato come avviso all'utente nella UI**, a differenza dello stdout normale
di `SessionStart` che diventa solo contesto per Claude ("stdout is added as context that
Claude can see and act on" — non un messaggio che l'utente vede necessariamente) · risolverebbe:
è l'unico meccanismo documentato che soddisfa alla lettera il criterio del mandato — un
errore che appare **senza che Claude decida di riportarlo**. La navicella ha già l'hook
`SessionStart` cablato in `.claude/settings.json` (`promemoria-coda.py`,
`memoria-cerca.py --cheatsheet`): oggi entrambi stampano testo semplice, che diventa
contesto per Mnemosyne — esattamente il meccanismo "innesco condizionato" che la
retrospettiva del 22/7 ha già diagnosticato come fallimentare altrove nel sistema, qui
ritrovato al livello degli strumenti · costo: zero, è un cambio di formato di output di
uno script Python già esistente · rischio: nessuno tecnico; il rischio è di scrivere un
controllo che produce falsi positivi e viene ignorato per abitudine (vedi Contro) · fonte:
doc ufficiale, fetch diretto, nessuna data di versione ma pagina corrente.

**3. `/doctor` (alias `/checkup`) — diagnostica di Claude Code**
· https://code.claude.com/docs/en/sub-agents e /commands (fetch 31/7/2026) · fa: dal
v2.1.205, segnala file **nella stessa cartella** con lo stesso `name` e propone di
rinominarne/rimuoverne uno; da terminale, `claude doctor` stampa diagnostica di
installazione senza aprire sessione · risolverebbe: in teoria la classe di errore
"frontmatter non valido" — due issue pubbliche (#6377, aperta 22/8/2025; #17154, aperta
9/1/2026, chiusa "not planned") mostrano `/doctor` che produce l'errore esatto `Agent Parse
Errors → Failed to parse N agent file(s): Missing required "name" field in frontmatter`
quando lo si lancia a mano · MA non risolverebbe il caso della navicella da solo: (a) è
**on-demand**, non gira all'apertura sessione — fallisce il criterio del mandato
esplicitamente; (b) il rilevamento dei duplicati è dichiarato **per singola cartella**, e
qui non c'è un duplicato di nome — c'è un file senza nome affatto, in una cartella diversa
da quella del suo equivalente storico valido, quindi non è garantito che `/doctor`
colleghi le due cose come lo stesso problema · costo: zero · rischio: la issue #17154 mostra
utenti che segnalano lo stesso bug su versioni diverse per mesi senza fix confermato —
diagnostica non affidabile al 100% anche quando invocata · fonte del giudizio: doc ufficiale
+ due issue GitHub lette per intero (livello 2, non solo il titolo).

**4. Architecture fitness functions / evolutionary architecture** (Ford, Parsons, Kua)
· concetto, non un singolo repo · fa: funzioni automatiche eseguite in CI che falliscono
quando un vincolo architetturale (inclusa la coerenza docs↔codice) viene violato, girano
come test ordinari · risolverebbe: il principio è esattamente quello richiesto — non
osservare passivamente, bloccare · costo: n/a (pattern, non prodotto) · rischio: **l'intero
paradigma presuppone una pipeline CI o almeno un repository git con hook di commit/push**.
Verificato sul disco: `AgentsAI/` **non è un repository git** (`git rev-parse
--is-inside-work-tree` → `fatal: not a git repository`). Ogni variante di questo pattern
(driftcheck, fiberplane/drift, ADR-lint-in-CI, pre-commit) richiede un evento git che nella
navicella non esiste per l'albero principale — solo le sotto-repo dei quiz
(`Quiz-Sapienza/quiz-*`) sono git. Il pattern è valido come principio, inapplicabile come
prodotto senza prima decidere di dare a `AgentsAI/` una storia git, decisione strutturale
fuori mandato · fonte: dev.to/platformtoolsmith (fetch 31/7/2026, blog tecnico con esempio
di codice, livello 3) + verifica diretta sul disco (livello 1).

**5. `driftcheck`** (deichrenner)
· https://github.com/deichrenner/driftcheck · MIT · ~6 stelle, data ultimo commit non
dichiarata nella pagina resa, autore singolo apparente · fa: pre-push hook che usa un LLM
per confrontare il diff con la documentazione e segnalare contraddizioni esplicite (non
omissioni) · risolverebbe: nulla nella navicella finché non è un repo git — vedi candidato
4 · costo: richiede un endpoint LLM compatibile OpenAI a pagamento (viola zero-portafoglio
salvo puntarlo a un modello locale, non testato dall'autore) · rischio: progetto giovane,
un solo manutentore, bypassabile con `--no-verify`, richiede `ripgrep` · fonte: README via
WebFetch (livello 2).

**6. GitHub `spec-kit`**
· https://github.com/github/spec-kit · MIT · 124.7k stelle, 1666+ commit, attivamente
mantenuto · fa: sviluppo spec-driven con comandi `/speckit.constitution`,
`/speckit.specify`, `/speckit.plan`, `/speckit.tasks`, `/speckit.implement` — il parallelo
concettuale con `CLAUDE.md`-come-costituzione è diretto, il nome stesso lo dice ·
risolverebbe: la struttura del pensiero ("una costituzione dichiarata esplicitamente, con
comandi dedicati"), non il rilevamento della deriva · il comando più vicino,
`/speckit.converge`, "assesses the codebase against spec/plan/tasks and append remaining
work as new tasks" — **è manuale, on-demand, fallisce lo stesso criterio del mandato di
`/doctor`** · costo: zero, ma è un framework da adottare, non un innesto puntuale — coerente
con l'art. 4 del mandato ("la navicella non si riscrive su un framework") · rischio: nessuno
tecnico, ma adottarlo per intero sarebbe un trapianto di scheletro, non un organo · fonte:
repo ufficiale via WebFetch (livello 1 per i numeri, livello 2 per la funzionalità).

**7. Vale (prose linter) / `docs-as-tests`**
· https://vale.sh · fa: valida stile e terminologia della prosa in CI, non la corrispondenza
struttura-codice · risolverebbe: nulla di specifico a questo buco — è per tono e
terminologia, non per "questo agente esiste davvero" · scartato senza approfondire oltre:
dominio sbagliato per D6.

## Il meccanismo, spiegato bene

La domanda del mandato assume che il problema sia "la documentazione non descrive più il
codice", e su questo la misura è confermata: `.claude/agents/` ha 8 file (architetto,
argonauta, capitano, demiurgo-accademico, demiurgo-creativo, ermete, ierofante, rapsodo)
contro i 6 disegnati nell'organigramma di `architettura-v2.md`; `.claude/commands/` ha 17
file contro i 12 elencati nello stesso documento (mancano `atlante-fisica`,
`genera-manuale`, `intake`, `oroboro`, `riflessione` — tutti costruiti dopo la stesura di
quel file e mai riportati nell'albero). Ma la prova raccolta da Mnemosyne il 31/7 non è
questo: è che il **runtime** — il pannello "Available agent types" che questa stessa
sessione mi ha esposto — non corrisponde né alla costituzione né agli 8 file v2. Mostra
`argonauta-accademico`, `argonauta-personale`, `demiurgo-personale`, `rapsodo-accademico`,
`rapsodo-personale`: cinque nomi che esistono solo dentro `.claude/agents/legacy-v1/`,
la cartella che `CLAUDE.md` dichiara archiviata dal 17 giugno. Questo è un terzo livello di
deriva, più profondo di "docs vs codice": è "codice dichiarato attivo vs codice
effettivamente caricato", ed è quello che ha rotto la ricerca di oggi.

Ho letto tutti gli 8 file v2 riga per riga: nessuno ha il campo `name` nel frontmatter YAML.
Hanno `description`, `model`, `tools` — non `name`. Ho letto i 7 file legacy: tutti hanno
`name:` esplicito (`name: argonauta-accademico`, `name: capitano`, eccetera). La
documentazione ufficiale di Claude Code, alla pagina `sub-agents` (verificata il 31/7/2026,
riscontrando marcatori di versione fino a 2.1.219, quindi corrente), è inequivocabile su tre
punti che insieme spiegano il sintomo:

Primo, `name` è un campo obbligatorio — "Only `name` and `description` are required" — non
opzionale come `model` o `tools`. Secondo, la scansione è **ricorsiva**: "Claude Code scans
`.claude/agents/` and `~/.claude/agents/` recursively, so you can organize definitions into
subfolders... The subdirectory path doesn't affect how a subagent is identified or invoked,
because identity comes only from the `name` frontmatter field." Questo significa che
`legacy-v1/` non è invisibile al loader per il solo fatto di essere una sottocartella con un
nome che suggerisce "archivio" — Claude Code non ha un concetto di cartella-cimitero, ha
solo file con o senza `name` valido. Terzo, quando due file nello stesso albero
dichiarerebbero lo stesso nome, "Claude Code loads only one of them, chosen by filesystem
read order rather than a documented precedence" — ma qui non è nemmeno il caso: non ci sono
due file con lo stesso nome che competono, c'è un file (v2) che non dichiara nome affatto e
quindi — per una classe di errore che due issue pubbliche di GitHub documentano con lo
stesso messaggio esatto (`Missing required "name" field in frontmatter`, issue #6377 del
22/8/2025 e #17154 del 9/1/2026, quest'ultima chiusa "not planned" nonostante segnali il
bug come ricorrente su più versioni) — semplicemente non viene caricato. Il file legacy con
lo stesso ruolo semantico, `name` valido, resta l'unico candidato trovato dal loader per
quel compito, e viene proposto al suo posto. Le quattro entità che in v2 non hanno un
antenato in `legacy-v1/` (architetto, demiurgo-creativo, ermete, ierofante) non hanno nulla
che le sostituisca: e infatti sono **del tutto assenti** dal registro che questa sessione mi
ha mostrato. Otto file su otto senza `name`, cinque sostituiti da un fantasma valido,
quattro spariti senza sostituto: è una corrispondenza perfetta con l'ipotesi, non una
coincidenza parziale.

Nessuno di questi tre fatti, da soli, produce un avviso a chi apre la sessione. `/doctor`
sa produrre il messaggio esatto — le due issue lo dimostrano — ma è un comando che Giuseppe
deve digitare; non gira mai da solo. Questo è precisamente il fallimento che il mandato
descrive per L5, per `pattern-longitudinali/`, per i riepiloghi settimanali: **la soglia
funziona per le capacità, fallisce per le osservazioni** (retrospettiva 22/7). `/doctor`
è una capacità che esiste, funziona, ed è ferma finché nessuno la invoca — lo stesso identico
guasto, ritrovato allo strato degli strumenti invece che a quello della memoria. Il
meccanismo che romperebbe questo schema esiste già, documentato, nella stessa pagina hook di
Claude Code: un evento `SessionStart` può restituire JSON con `hookSpecificOutput` e, in più,
un campo universale `systemMessage`, descritto come "Warning message shown to the user" —
non "aggiunto al contesto perché Claude lo legga e decida", ma mostrato, punto. La navicella
ha già `SessionStart` cablato in `.claude/settings.json` per due script Python
(`promemoria-coda.py`, `memoria-cerca.py --cheatsheet`): oggi entrambi scrivono testo
semplice su stdout, che per la documentazione ufficiale "is added as context that Claude can
see and act on" — cioè arriva a Mnemosyne, non necessariamente a Giuseppe. È di nuovo
l'innesco condizionato: il segnale c'è, ma la sua visibilità dipende da una decisione
dell'agente, non da un contratto con l'interfaccia.

## Contro

- **L'ipotesi del `name` mancante non è verificata end-to-end.** Non ho potuto eseguire
  `claude doctor` da questa sessione (sono un sub-agente dentro una sessione già avviata, non
  ho un terminale Claude Code indipendente da riavviare) né osservare il banner "Agent Parse
  Errors" dal vivo sui file della navicella. La catena logica è coerente al 100% con ogni
  dato osservabile, ma resta un'inferenza, non una riproduzione diretta.
- **Il runtime di questa sessione non è dimostrabilmente il Claude Code CLI vanilla.** Il
  pannello "Available agent types" che mi è stato esposto include voci come `claude`
  ("FleetView's default when no agent name is typed") e `claude-code-guide` in una
  combinazione che non compare nella documentazione ufficiale che ho consultato. "FleetView"
  non è un nome che appare in nessuna pagina `code.claude.com` o `docs.claude.com` raggiunta
  in questa ricerca. È plausibile — ma non confermato dalla fonte primaria — che la navicella
  giri sopra uno strato (il backend "plancia"/crew citato nel `settings.json`, porta 8000)
  che replica ma non necessariamente duplica byte-per-byte la logica di scansione descritta
  nei docs ufficiali.
- **`/doctor` stesso è dichiarato inaffidabile su questa esatta classe di errore** dalle due
  issue citate: utenti su piattaforme e versioni diverse segnalano falsi negativi e falsi
  positivi sullo stesso messaggio, per mesi, senza fix confermato pubblicamente. Anche
  costruendo un controllo equivalente in proprio, non c'è garanzia che replichi esattamente
  la logica di parsing interna del loader — solo che intercetta la causa più probabile
  (`name` assente) con una lettura diretta dello YAML.
- **Un controllo che grida sempre smette di essere ascoltato.** Se il futuro script di
  `SessionStart` produce un `systemMessage` a ogni sessione per una deriva minore e mai
  sanata (es. i 5 comandi non documentati, che potrebbero essere accettabili), il segnale si
  degrada a rumore — lo stesso rischio che l'ablation di Ratchet segnala per il ritiro
  automatico delle competenze (D1): la soglia di cosa conta come "errore da mostrare" va
  scelta con cura, non ogni singolo disallineamento merita di interrompere l'apertura
  sessione.
- **Nessun candidato di questa lista rileva la causa radice da solo.** Fitness function,
  ADR-lint, driftcheck, spec-kit: tutti presuppongono un evento (commit, push, PR) che
  l'albero principale della navicella non genera, essendo `AgentsAI/` non un repository git.
  Il candidato 1+2 (diagnosi + hook) è l'unico costruibile subito, ma è specifico della
  navicella, non un prodotto trapiantabile da fuori.

## Innesto proposto

Non lo eseguo — è una proposta per Dedalo/Mnemosyne, coerente con l'art. 6 del mandato.

File/script toccati, in ordine di necessità:

1. **I due file più urgenti da controllare a mano, non da questa ricerca**: aggiungere il
   campo `name:` mancante agli 8 file in `.claude/agents/*.md` (es. `name: argonauta`,
   `name: capitano`, eccetera — coerente con l'identità già usata nei testi). Questo è
   l'esperimento a costo zero che conferma o smentisce l'ipotesi del meccanismo: se dopo la
   modifica il registro runtime espone i nomi v2 al posto dei legacy, la diagnosi di questa
   ricerca è confermata sul campo. Non è un innesto di ricerca, è la correzione stessa — la
   segnalo perché è precondizione di qualunque script di controllo costruito sopra.
2. Un nuovo script, es. `00-capitano/scripts/verifica-costituzione.py`, sul modello di
   `promemoria-coda.py` già presente: legge `.claude/agents/*.md` e `.claude/commands/*.md`
   (compresi eventuali `legacy-v1/`), estrae il frontmatter di ognuno, segnala (a) file senza
   `name` o `description`, (b) nomi duplicati nell'intero albero — non solo nella stessa
   cartella come fa `/doctor` —, (c) lo scarto fra il conteggio trovato e un elenco atteso
   dichiarato a mano in un file di riferimento (es. `00-capitano/registro-atteso.yaml`, da
   aggiornare quando si aggiunge/rimuove un agente deliberatamente).
3. Modifica a `.claude/settings.json`: lo script del punto 2 va aggiunto come hook
   `SessionStart`, e deve restituire JSON con `systemMessage` popolato **solo quando trova
   una discrepanza**, non ad ogni sessione — per non degradarsi in rumore (vedi Contro). Il
   formato esatto dell'oggetto hook è già documentato e già in uso nella navicella per gli
   altri hook `SessionStart` presenti nello stesso file.
4. `00-capitano/architettura-v2.md` andrebbe aggiornato per includere Ermete e Ierofante
   nell'organigramma (oggi assenti dal diagramma, presenti solo in memoria) e i 5 comandi non
   documentati — ma questa è la correzione di contenuto, non l'innesto di rilevamento: la
   registro come fatto utile a chi deciderà, non la eseguo.

Quanto lavoro: il punto 1 è minuti. Il punto 2 è la parte non banale — un parser YAML di
frontmatter più un formato per il "registro atteso" che qualcuno deve mantenere a mano (lo
stesso problema meta-ricorsivo di ogni sistema anti-deriva: il registro di riferimento può
esso stesso andare fuori sincrono, per questo va tenuto minimo — nomi e conteggi, non prosa).
Il punto 3 è meccanico una volta pronto il punto 2.

Cosa si romperebbe: nulla se il `systemMessage` resta silenzioso quando non c'è discrepanza.
Rischio reale unico: uno script SessionStart che fallisce silenziosamente (es. errore di
parsing non gestito) e blocca l'avvio sessione — va scritto con un blocco try/except che, in
caso di propria rottura, produce comunque un `systemMessage` che dice "il controllo di
coerenza è fallito", mai un silenzio totale.

## Non confermato

- Che il runtime di questa sessione applichi esattamente la logica di scansione descritta in
  `code.claude.com/docs/en/sub-agents` — non riscontrato un nome "FleetView" in nessuna
  pagina ufficiale consultata.
- Che aggiungere `name:` agli 8 file v2 risolva davvero il sintomo — inferenza logica da
  documentazione e due issue GitHub, non riprodotta direttamente in questa sessione.
- Data dell'ultimo commit di `driftcheck` — non dichiarata nella resa README via WebFetch.
- Numero di manutentori/contributori di `spec-kit` oltre l'attività aggregata (1666+ commit)
  — non specificato nella pagina consultata.
- Se `/doctor`, se invocato oggi sui file della navicella, produrrebbe davvero il banner
  "Agent Parse Errors" citato nelle issue — non eseguito, perché questo sub-agente non ha
  accesso a un terminale Claude Code indipendente da riavviare per il test.
- Se la logica di rilevamento duplicati "stessa cartella" di `/doctor` (v2.1.205+) considera
  `legacy-v1/` come "stessa cartella" di `.claude/agents/` o come cartella distinta — il testo
  ufficiale dice "files in the same directory" senza chiarire esplicitamente se le
  sottocartelle contano come stessa cartella ai fini di *questo* controllo specifico (mentre
  per lo scanning generale sì, sono esplicitamente incluse).

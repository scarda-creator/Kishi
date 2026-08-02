# D4 — Il battito: agenti che esistono mentre l'utente non c'è

## Risposta in tre righe

Il tick non manca per assenza del primitivo: esiste, è ufficiale, gira senza toccare i ToS
(Claude Code Routines nel cloud di Anthropic, Windows Task Scheduler + `claude -p` in
locale, GitHub Actions + `claude-code-action` con token OAuth). Manca perché ogni forma di
tick che vale la pena costruire pesca dalla stessa piscina di sessione che si è appena
esaurita ieri notte uccidendo tre agenti — e l'unica via che non pesca da quella piscina
(fatturazione API separata) è denaro reale, vietato dal patto zero-portafoglio salvo un
numero che lo giustifichi. Sul confine costituzionale: nessun sistema trovato, oroboro
compreso, lo applica in codice — lo applica in prosa di prompt, la stessa classe di
fragilità che la retrospettiva del 22/7 ha già diagnosticato per le soglie L5; l'unico
meccanismo che lo farebbe rispettare *tecnicamente* (hook `PreToolUse` con
`permissionDecision:"deny"` sui path L4/L5) esiste in Claude Code ma ha un bug aperto e
documentato che lo rende inaffidabile proprio sul tool Edit.

## Candidati (ordinati per utilità reale, non per fama)

**1. Claude Code Routines** · code.claude.com/docs/en/scheduled-tasks ·
prodotto Anthropic, non open source · lanciato aprile 2026, ancora attivamente
documentato a fine luglio 2026 · fa: un prompt + repo + trigger salvati girano su
container cloud di Anthropic, senza dipendere dal PC — trigger schedulati (minimo un'ora),
webhook con token, eventi GitHub · risolverebbe: il vincolo fisico dichiarato da oroboro
stesso ("laptop acceso e sessione viva") sparirebbe — è la forma di tick più vicina a un
vero battito indipendente da Giuseppe · costo: **non confermato con certezza** — la
politica di fatturazione per l'uso "programmatico" (Agent SDK, `claude -p`, e per estensione
le Routines) è stata annunciata separata dalla piscina abbonamento il 13/5/2026 per
il 15/6/2026, poi la modifica risulta cancellata secondo alcune fonti secondarie e di nuovo
in vigore dal 10/7 secondo altre — fonti fra loro discordanti, nessuna primaria consultabile
in questa sessione (vedi Non confermato) · rischio: se conta sulla piscina abbonamento,
compete direttamente con l'uso diretto di Giuseppe (il vincolo che ha ucciso tre agenti la
notte scorsa); se conta sulla piscina separata, è un costo in euro reale e ricorrente ·
fonte del giudizio: pagina doc ufficiale via ricerca (fetch diretto bloccato dall'ambiente,
sintesi di terzi corroborata da più fonti concordanti sul meccanismo, discordanti sulla
fatturazione).

**2. Windows Task Scheduler + `claude -p --dangerously-skip-permissions`** · nessun
progetto, è composizione di due strumenti già presenti sulla macchina di Giuseppe ·
fa: Task Scheduler avvia un processo `claude` headless a orario fisso, il flag `-p`
lo rende non interattivo (un prompt, un'esecuzione, uscita) · risolverebbe esattamente
la stessa cosa di oroboro oggi fa a mano dentro una sessione viva, ma a livello di
sistema operativo: la sessione non deve restare aperta, il "ri-armarsi a ogni reset"
diventa un semplice trigger orario di Windows invece di un `create_trigger` self-bind
dentro una conversazione che deve esistere per funzionare · costo: zero se conta come
uso abbonamento (è il client ufficiale, uso automatizzato esplicitamente consentito dai
Consumer Terms — Sezione 3, verificato alla fonte primaria: vietato l'accesso "through
automated or non-human means... except when accessing via an Anthropic API Key or where
we otherwise explicitly permit it" — Claude Code è il caso esplicitamente permesso) ·
rischio: stesso della piscina condivisa del candidato 1 se lo status di fatturazione
programmatica del 31/7 è quello "in vigore dal 10/7"; inoltre `--dangerously-skip-permissions`
ha un incidente documentato (21/10/2025, cancellazione ricorsiva da filesystem-root
interrotta a metà da un utente) — mai testato dentro un ciclo *scheduled* non
supervisionato, solo dentro sessioni interattive · fonte: Consumer Terms (primaria,
effective date 8/10/2025, fetch diretto riuscito) + resoconti secondari sull'incidente
skip-permissions.

**3. GitHub Actions + `anthropics/claude-code-action` con token OAuth** ·
github.com/anthropics/claude-code-action · azione ufficiale Anthropic, repo attivo ·
fa: workflow schedulato (`cron:` nello YAML) che invoca Claude Code dentro un runner
GitHub, autenticato con `CLAUDE_CODE_OAUTH_TOKEN` generato da `claude setup-token` —
usa esplicitamente la quota abbonamento Pro/Max, non l'API key a pagamento ·
risolverebbe: la navicella ha già un repo GitHub privato provisionato (il riversamento
di `riversa.py`, 28/7) — l'infrastruttura di destinazione esiste, mancherebbe solo il
workflow file · costo: GitHub Actions è gratis fino a 2.000 minuti/mese su repo privati
(runner Linux, tariffa $0,006/min oltre soglia, tagliata dall'1/1/2026) — trascurabile
per un tick orario o giornaliero leggero; il costo Claude resta lo stesso dilemma dei
candidati 1-2 · rischio: stessa incertezza di fatturazione; in più, un token OAuth
generato da `claude setup-token` scade e va rigenerato a mano — repo di terzi hanno
dovuto costruire un refresh automatico non ufficiale (`Issue #727` sul repo, ancora
aperta), quindi il meccanismo di ripristino ha un punto di rottura manuale che nessuna
fonte dichiara risolto lato Anthropic · fonte: repo ufficiale + issue tracker, verificato.

**4. `watchexec` (o equivalente file-watcher) + `claude -p`** · github.com/watchexec/watchexec
· Apache-2.0/MIT, attivo · fa: binario Rust che osserva una cartella e lancia un comando
quando qualcosa cambia, con coalescenza degli eventi (non rispara su una raffica di
scritture ravvicinate) · risolverebbe specificamente il pezzo D2: invece di un tick a
orario fisso che spesso non trova nulla di nuovo, un tick **a evento** che si attiva solo
quando arriva un nuovo export di `quiz_attempt` (il record proposto da D2, oggi manuale
via pulsante "esporta" dal quiz statico) — zero cicli sprecati, zero chiamate quando non
c'è segnale da aggregare · costo: il binario è gratis e locale; il costo Claude si paga
solo sui trigger reali, quindi è il candidato con il rapporto costo/utilità migliore per
la funzione di aggregazione segnale, non per l'esecuzione di task generici · rischio:
richiede comunque che il processo `watchexec` sia in esecuzione permanente sulla
macchina — stesso vincolo fisico di oroboro ("sessione viva"), solo spostato da una
conversazione Claude a un processo di sistema; se il PC è spento, l'evento si perde
finché non riparte e osserva lo stato corrente (non è un problema se il file resta sul
disco, lo è se il segnale doveva essere "fresco") · fonte: repo ufficiale, changelog
verificato per licenza e attività.

**5. Ralph loop (Geoffrey Huntley)** · ghuntley.com/ralph/ · tecnica, non software: un
loop bash che rilancia l'agente con contesto fresco ad ogni iterazione, leggendo le
specifiche da disco invece di accumulare in una sessione lunga · risolverebbe nulla
di infrastrutturale (non è uno scheduler) ma offre il pattern giusto per il *corpo* di
qualunque tick: contesto pulito ad ogni sparo invece di far crescere una sessione,
coerente con "architettura a frammenti" già cementata nella navicella · costo: quello
del modello per iterazione, variabile; la critica pubblica è unanime sul fatto che
**senza un tetto esplicito a iterazioni o spesa non c'è fine** — "no budget cap = no
end" · rischio: rumore che cresce con la lunghezza del loop (context rot), mitigato
proprio dal fatto che ogni iterazione riparte pulita — è la ragione per cui il pattern
serve, non un difetto suo · fonte: sito dell'autore + tre resoconti tecnici indipendenti
concordanti sulla meccanica.

**6. Temporal** · temporal.io · open source (server) + hosted a pagamento · fa:
esecuzione durevole con checkpoint automatico, pensata per workflow che durano giorni o
mesi sopravvivendo a crash · risolverebbe in teoria l'affidabilità di un ciclo lungo, ma
è infrastruttura pesante (un server Temporal da gestire) per un solo utente con carico
saltuario — sproporzionato rispetto al problema · costo: server self-hosted gratis ma
richiede manutenzione propria, hosted a pagamento · rischio: nessuno specifico per la
navicella, semplicemente fuori scala · **il pezzo riusabile senza installare nulla**: la
regola esplicita della documentazione Temporal, "ogni loop deve avere un tetto massimo di
iterazioni imposto nel codice, mai lasciato al giudizio del modello" — è un principio di
design, non uno strumento, e si applica a qualunque candidato sopra · fonte: doc ufficiale
Temporal, verificata.

**7. Letta — sleep-time compute** · già candidato primario di D3, non riprodotto qui per
intero · rilevante per D4 solo per un punto: è l'unico sistema trovato in tutta la
ricerca (D1-D4) in cui il "battito" non è generico ma è specificamente un secondo agente
dedicato alla memoria che gira nei momenti di inattività — il battito più vicino, nella
letteratura, a "aggregare segnale mentre l'utente non c'è" invece che "eseguire task
mentre l'utente non c'è" · costo: un secondo agente = doppio consumo per ciclo, non
quantificato in cifra assoluta dagli autori · rischio verificato ostilmente in D3: issue
del repo lo descrivono come uno dei componenti più difficili da far girare in modo
affidabile fuori da OpenAI · fonte: ripresa da D3, non un nuovo fetch.

**8. n8n self-hosted + trigger cron** · github.com/n8n-io/n8n · fair-code (Sustainable
Use License, non OSI-approved in senso stretto) · attivo · fa: piattaforma di
automazione con nodo cron nativo e nodo "AI Agent" che chiama un modello via API key ·
risolverebbe l'orchestrazione se la navicella volesse un dispacciatore visuale invece di
script — ma il nodo AI deve autenticarsi con una API key Anthropic a pagamento, non con
l'abbonamento (i Consumer Terms permettono l'automazione solo per Claude Code/claude.ai o
via API key esplicita — un nodo n8n non è né l'uno né l'altro) · costo, calcolato: un
tick leggero (lettura di un piccolo diff, ~2.000 token input + 200 output) su Sonnet 4.6
a tariffa API ($3/$15 per milione di token) costa **~0,009 USD a giro**; a un tick
orario, 24/giorno, 30 giorni: **~6,5 USD/mese** — piccolo in assoluto ma è un costo
ricorrente reale, non coperto dall'abbonamento, e il patto zero-portafoglio lo vieta
salvo un numero che lo giustifichi (questo è quel numero, portato a Giuseppe/Dedalo, non
deciso qui) · rischio: nessuno tecnico, il rischio è di principio (vedi sopra) · fonte:
repo ufficiale + calcolo proprio su tariffe API pubblicate, verificate.

**9. CrewAI / AutoGen scheduled crew** · stesso vincolo ToS di n8n (serve API key, non
abbonamento) · costo per esecuzione dichiarato dalla letteratura di settore:
0,08-0,25 USD a esecuzione con modelli GPT-4-class comparabili — più caro del calcolo
sopra perché orchestrano più agenti per giro invece di un tick singolo leggero ·
risolverebbe l'orchestrazione multi-agente se servisse, ma per un singolo tick
periodico è sovradimensionato · rischio: nessuno nuovo rispetto a n8n · fonte: cifre di
settore aggregate, non un benchmark diretto — livello 3, trattare come ordine di
grandezza non come misura precisa.

**10. OpenHands** · github.com/all-hands-ai/openhands · MIT, 70k+ stelle, attivo · fa:
agente di codifica autonomo in sandbox Docker · risolverebbe poco per un battito: la
schedulazione/automazione a eventi è una feature della sola offerta Enterprise a
pagamento; la versione self-hosted gratuita non ha uno scheduler nativo e andrebbe
comunque avvolta in Task Scheduler o cron esterno, il che la rende equivalente al
candidato 2 ma con un sandbox Docker in più da mantenere per nessun beneficio aggiuntivo
misurato in questa ricerca · costo: gratis self-hosted, a pagamento per lo scheduler
nativo · rischio: nessuno specifico, solo basso valore marginale · fonte: sito ufficiale
del progetto, verificato.

## Il meccanismo, spiegato bene

Il problema che il mandato chiama "il tick" ha, sul disco della navicella, già una
risposta parziale: oroboro. `create_trigger` arma un cron orario **dentro la sessione
corrente**, e ad ogni sparo il protocollo (non il codice) controlla se Giuseppe è
attivo, se il limite è esaurito, se resta un task nella lista AUTONOMI, e se sì ne
esegue esattamente uno, additivo, reversibile. È, in miniatura, esattamente il pattern
che Park et al. userebbero per la riflessione: una soglia (task pronto/non pronto)
valutata a ogni tick da un processo che gira comunque. La differenza fra oroboro e i
candidati 1-3 di questa lista non è nella logica — è in *dove vive il tick*. Oroboro
vive dentro una conversazione Claude che deve restare viva perché il trigger è
self-bound a quella sessione: se il laptop va in stand-by, il ciclo muore con lui,
ed è esplicitamente accettato come limite nel file `oroboro.md` ("nessun ambiente cloud
provisionato"). Task Scheduler di Windows (candidato 2) e le Routines cloud di Anthropic
(candidato 1) spostano lo stesso ciclo fuori dalla sessione: il primo lo tiene sulla
macchina di Giuseppe ma indipendente da una conversazione aperta, il secondo lo toglie
anche dalla macchina. Tecnicamente, la differenza fra "oroboro con Task Scheduler al
posto di `create_trigger`" e "oroboro-cloud su Routines" è un dettaglio di trasporto: il
corpo del ciclo — leggi il cantiere, controlla la finestra, esegui un task additivo,
consuntiva — resta identico, e potrebbe essere scritto oggi come script Python in
`00-capitano/scripts/` invocato da `claude -p` con un prompt che riproduce esattamente
i quattro passi già scritti in `oroboro.md`.

Il vincolo che decide quale di questi tre trasporti è realmente usabile non è tecnico,
è la fatturazione. I Consumer Terms di Anthropic, letti alla fonte primaria (Sezione 3,
effective date 8 ottobre 2025), vietano l'accesso automatizzato **salvo** via API key o
permesso esplicito — e Claude Code è esplicitamente il caso permesso: usarlo in un
task schedulato, sia con Task Scheduler sia con un'Actions/Routine autenticata via
`CLAUDE_CODE_OAUTH_TOKEN`, non è una zona grigia, è l'uso previsto. Il problema è un
altro: nella seconda metà di maggio 2026 Anthropic ha annunciato di voler spostare
l'uso "programmatico" (Agent SDK, `claude -p`, e per estensione qualunque invocazione
non interattiva) fuori dalla piscina abbonamento e dentro un credito separato fatturato
a tariffa API piena — poi, secondo alcune fonti, ha cancellato la modifica il 15 giugno,
per poi farla rientrare in vigore secondo altre fonti dal 10 luglio. Queste fonti sono
tutte secondarie (blog di settore, non una pagina Anthropic aperta con successo in questa
sessione — il dominio `anthropic.com` è risultato bloccato dall'ambiente di questa
ricerca) e si contraddicono fra loro sullo stato al 31 luglio 2026. Questo è, insieme
alla scarsità di sessione dimostrata ieri notte, **il fatto più importante di questa
domanda**: qualunque battito costruito oggi rischia di finire, a seconda di quale fonte
ha ragione, in uno di due scenari opposti — competere per la stessa piscina già esaurita
(se conta ancora come abbonamento) o generare un costo ricorrente in euro non coperto
dal patto zero-portafoglio (se è finito nel credito separato). Non è verificabile con
certezza da questa sessione quale dei due sia vero oggi; è verificabile, ed è già stato
misurato ieri notte senza bisogno di ricerca, che la prima ipotesi basta da sola a
rendere rischioso qualunque battito frequente.

Sul confine costituzionale — esecuzione sì, direzione no — nessun candidato lo applica
davvero in codice. Oroboro lo applica nel modo più esplicito trovato ovunque in questa
ricerca: due liste dichiarate (AUTONOMI / RICHIEDE CONSENSO) e un prompt che istruisce
di leggere solo dalla prima. Ma è un'istruzione in linguaggio naturale seguita da un
agente che la legge ad ogni sparo — la stessa classe di meccanismo (innesco condizionato
a un giudizio, non a un vincolo strutturale) che la retrospettiva del 22/7 ha già
diagnosticato come il motivo per cui le soglie L5 non hanno mai innescato. L'unico
punto trovato in cui Claude Code offre un vincolo realmente **eseguito dal sistema e non
dal giudizio del modello** è l'hook `PreToolUse` con uscita JSON `permissionDecision:
"deny"`: un hook shell che intercetta ogni chiamata a Write/Edit e nega quelle dirette a
`L4-fondazionale.md` o a `L5-subconscio/psicologica/` durante un run schedulato
sarebbe, letteralmente, la rotta chiusa a chiave invece che scritta sulla mappa. Ma è
un meccanismo relativamente giovane e già documentato come inaffidabile su almeno un
caso concreto: l'issue #37210 sul repo ufficiale riporta `permissionDecision:"deny"`
ignorato per il tool Edit, il tool esegue comunque. Un kill switch che a volte non
uccide non è un kill switch — è un'illusione di uno, e per l'ambito L4/L5 l'illusione è
peggiore dell'assenza dichiarata, perché sposta la sfiducia da "non c'è protezione" a
"c'è ma non è detto che tenga".

## Contro

- **Collisione di piscina, misurata non stimata**: questa stessa ricerca ha esaurito il
  limite di sessione la notte scorsa, uccidendo tre agenti in volo — è la prova diretta,
  non un'inferenza, che il vincolo dominante di qualunque battito su questo sistema è la
  scarsità condivisa, non la disponibilità tecnica del tick.
- **Fatturazione programmatica in stato contraddittorio**: tre fonti secondarie
  concordanti sull'annuncio del 13-14 maggio 2026, discordanti sull'esito al 31 luglio
  (cancellato vs. rientrato in vigore dal 10/7). Nessuna fonte primaria aperta con
  successo in questa sessione per dirimere.
- **`--dangerously-skip-permissions` ha un incidente documentato**: cancellazione
  ricorsiva da filesystem-root il 21/10/2025, fermata da un utente presente — nessuna
  fonte conferma cosa sarebbe successo con nessuno davanti allo schermo, che è
  esattamente lo scenario di un battito.
- **`PreToolUse deny` non è affidabile su Edit** (issue #37210 aperta sul repo
  ufficiale): il meccanismo di enforcement in codice più vicino trovato in questa
  ricerca ha un buco noto proprio dove servirebbe di più.
- **Ralph loop senza tetto esplicito è runaway per design**: la critica pubblica è
  unanime — "no budget cap = no end" — e nessun candidato schedulatore (Task Scheduler,
  GitHub Actions, Routines) impone un tetto di iterazioni o di spesa di default; va
  scritto a mano in ogni caso, non viene dato gratis dallo strumento.
- **Il token OAuth per GitHub Actions scade** e il ripristino automatico non è
  ufficiale (fork di terzi, issue #727 ancora aperta) — un punto di rottura silenzioso:
  il workflow fallisce senza preavviso finché qualcuno non nota i run rossi.
- **Il costo minimo misurato per la via API-key (n8n) è piccolo ma reale**: ~6,5
  USD/mese per un tick orario leggero — sotto la soglia dell'abbonamento Max in valore
  assoluto, ma è comunque la prima violazione tecnica del principio "zero-portafoglio
  per l'operare" se mai venisse scelta, non un'estensione naturale di esso.

## Innesto proposto

Non deciso qui — competenza di Dedalo/Mnemosyne, art. 6. I punti di innesto, se la
direzione scelta fosse "estendere oroboro fuori dalla sessione":

- `oroboro.md` (il protocollo) andrebbe riscritto per separare il **corpo del ciclo**
  (Passi 0-4, già scritti, già testati nel design) dal **trasporto** (oggi `create_trigger`
  self-bind, in futuro Task Scheduler o Routine) — il corpo non cambierebbe, solo chi lo
  invoca e da dove.
- Un nuovo script in `00-capitano/scripts/` (es. `battito.py` o equivalente PowerShell)
  che implementi i Passi 0-4 come programma invocabile da `claude -p`, leggibile sia da
  Task Scheduler sia da un futuro workflow GitHub Actions senza duplicare la logica.
- Se si sceglie la via evento (candidato 4, `watchexec`): un piccolo processo di
  osservazione su `02-accademico/**/quiz_attempt*.jsonl` (il formato proposto da D2, non
  ancora esistente) che invoca il battito solo quando arriva un nuovo export — coerente
  con "raccogliere e aggregare il segnale mentre Giuseppe non c'è", il compito che
  l'addendum assegna esplicitamente a questa domanda.
- Un hook `PreToolUse` dedicato ai run schedulati (attivo solo quando una variabile
  d'ambiente marca la sessione come "battito", non nelle sessioni interattive normali)
  che nega scritture su `L4-fondazionale.md` e `L5-subconscio/psicologica/` — sapendo,
  per il Contro sopra, che la garanzia non è assoluta.

Cosa si romperebbe: nulla di strutturale se il corpo del ciclo resta quello di oroboro
(un task per sparo, solo AUTONOMI, mai giudizio). Il rischio reale è di governance del
costo: senza un tetto esplicito scritto nel trasporto stesso (non nel prompt), un
battito su Routines o GitHub Actions che fallisce silenziosamente in loop (retry
automatico mal configurato) potrebbe consumare piscina o credito senza che nessuno se
ne accorga fino al consuntivo — lo stesso punto cieco che ha permesso alla ricorsione
L5 di restare vuota per otto settimane, spostato dalla memoria al consumo.

## Non confermato

- Stato esatto, al 31 luglio 2026, della fatturazione programmatica (piscina abbonamento
  vs. credito Agent SDK separato): fonti secondarie discordanti, nessuna fonte primaria
  Anthropic aperta con successo in questa sessione (dominio `anthropic.com` bloccato
  dall'ambiente di ricerca per motivi di sicurezza/rete).
- Se le Claude Code Routines specificamente (non solo `claude -p` headless) rientrano
  nella stessa politica di fatturazione programmatica o hanno un trattamento a parte —
  non trovato in nessuna fonte, primaria o secondaria.
- Dettaglio dei safeguard di "auto mode" (successore più sicuro di
  `--dangerously-skip-permissions`) oltre il titolo e i riassunti di terzi: il post
  tecnico ufficiale Anthropic non è stato apribile in questa sessione (stesso blocco di
  dominio); riportato solo per nome e per l'esistenza dichiarata, non per il meccanismo
  interno.
- Se watchexec gestisce in modo pienamente affidabile eventi filesystem su Windows 11
  (la macchina di Giuseppe) allo stesso livello di Linux/macOS — non verificato con un
  test diretto in questa ricerca, solo dichiarato multipiattaforma dal progetto.
- Numero esatto dei minuti gratuiti GitHub Actions su repo privati (riportato 2.000/mese)
  e la tariffa post-soglia ($0,006/min): fonti secondarie di calcolatori di costo
  terzi, concordanti fra loro ma non verificate sulla pagina pricing ufficiale GitHub
  (non tentata in questa sessione, fuori dal perimetro Anthropic del mandato).
- Se il bug dell'issue #37210 (`PreToolUse deny` ignorato su Edit) sia stato risolto fra
  la sua apertura e il 31/7/2026: verificato solo che l'issue esiste ed era aperta al
  momento del reperimento, non lo stato attuale esatto.

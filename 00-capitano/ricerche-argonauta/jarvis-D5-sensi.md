# D5 — I sensi: connettori oltre il filesystem

## Risposta in tre righe

Il buco "calendario" non si chiude con un MCP per Google Calendar: misurato sul disco, l'unica
menzione di calendario in tutta la navicella è "controllare su Infostud" (chat-archive,
pre-scelte terzo anno) — Giuseppe non tiene il suo orario su Google, lo consulta su Infostud, il
portale Sapienza autenticato che non ha un'API pubblica (nessuna fonte la documenta, verificato).
Il connettore che chiuderebbe davvero il divario file/vita non è quindi un OAuth ufficiale ma
un **browser locale automatizzabile con sessione persistente** (Playwright-MCP, Microsoft) — la
stessa classe di strumento che in questa stessa sessione ha appena rimpiazzato un WebFetch fallito
su github.com ("Unable to verify if domain github.com is safe to fetch", misurato in questa
ricerca, non riportato da fonte esterna). Gmail e Google Calendar restano connettori validi e
puliti sotto il nuovo gate del 31/7 (OAuth locale, token mai condiviso con terzi, flusso quasi
tutto in entrata) ma sono condizionati a un'adozione — portare l'agenda Sapienza su Google — che
oggi Giuseppe non ha fatto: vanno segnalati come opzione, non come soluzione pronta.

## Candidati (ordinati per utilità reale, non per fama)

**microsoft/playwright-mcp** · github.com/microsoft/playwright-mcp · Apache-2.0 · ultimo push
2026-07-25, 35,7k stelle, 12 issue aperte (basso per la dimensione — segno di manutenzione attiva,
non di abbandono) · server MCP ufficiale Microsoft che pilota Chromium/Firefox/WebKit passando al
modello l'albero di accessibilità della pagina invece di uno screenshot · risolverebbe: dà
all'Argonauta un secondo strumento per pagine che WebFetch non riesce a leggere (autenticate,
pesanti di JS, o bloccate come "dominio non verificabile" — verificato empiricamente in questa
sessione su github.com) — è l'organo Argonauta che ne uscirebbe più intelligente, non un organo
nuovo · costo: zero, gira interamente in locale, apre un browser sulla macchina di Giuseppe ·
rischio: bug reali aperti sul tracker — `browser_navigate` va in crash con "Connection closed" su
pagine che chiamano metodi console, `ensureTab()` può restare bloccato su "Page crashed" fino al
riavvio del server · fonte: repo ufficiale + ricerca issue tracker via `gh api search/issues`,
verificato ostilmente.

**taylorwilsdon/google_workspace_mcp** · github.com/taylorwilsdon/google_workspace_mcp · MIT ·
ultimo push 2026-07-30 (il più attivo fra tutti i candidati Google trovati), 2944 stelle, 166
issue aperte · un solo server MCP per Gmail + Calendar + Drive + Docs + Sheets + Tasks, OAuth con
token salvato localmente, nessun intermediario vede il contenuto · risolverebbe, condizionatamente:
darebbe al Capitano/Rapsodo visibilità su cosa arriva per posta e cosa c'è in agenda — ma solo se
Giuseppe usa davvero Gmail/Google Calendar come fonte di verità, cosa non misurata (per il
calendario, anzi, misurata come falsa: vedi sopra) · costo: zero, self-hosted · rischio: 166 issue
aperte includono bug non cosmetici (parsing HTML dei corpi email, gestione charset, crash su
riavvio rapido in modalità streamable-http) — repo giovane e in rapida crescita, non ancora
assestato · fonte: GitHub API (stelle/licenza/data) + ricerca issue diretta.

**GongRzhe/Gmail-MCP-Server** · 1165 stelle, MIT · **archiviato dal 2025-08-06** (`archived: true`,
verificato via API) · cimitero elegante citato per completezza: era il risultato più popolare per
"Gmail MCP" nella prima onda di ricerca, è morto da un anno · scartato.

**SurfSense** · github.com/MODSetter/SurfSense · Apache-2.0 sul core, Business Source License 1.1
sulla sola cartella `surfsense_backend/app/proprietary/` (licenza letta direttamente dal file,
non dedotta) · ultimo push 2026-07-31, 15,7k stelle, attivissimo · assistente assemblato che
cattura pagine web tramite estensione browser e documenti caricati in una base di conoscenza
personale con **core a grafo Neo4j** · non è un innesto diretto (richiede il proprio stack Docker
completo), ma è il segnale utile che il mandato chiede dagli assistenti già assemblati: mostra
come si fa "cattura passiva di ciò che Giuseppe legge fuori dalla navicella" dentro un grafo — è
concettualmente il parente più stretto di `anima-grafo.py` (133 documenti, 1010 archi) fra tutti i
candidati trovati · organo che ne trarrebbe l'idea, non il codice: Rapsodo (cattura episodica di
letture esterne, es. paper per la tesi) o l'anima-grafo stesso · costo: self-hosted, richiede
Neo4j · rischio: le integrazioni opzionali (Slack, Notion, Confluence, Tavily/LinkUp per la
ricerca) chiamano servizi terzi — da disattivare esplicitamente per restare nel gate, il progetto
di default non lo fa da solo · fonte: repo ufficiale, LICENSE letto in chiaro via `gh api`.

**khoj-ai/khoj** · AGPL-3.0 · ultimo push 2026-06-24, 36,1k stelle, 131 issue aperte · "secondo
cervello" self-hostabile: RAG su file locali, PDF, Markdown, repo GitHub, con LLM locale o cloud a
scelta · non riportato come innesto (sarebbe un trapianto di scheletro: sostituirebbe indice
SQLite + grafo che la navicella si è già costruita) ma utile per il catalogo di connettori che
offre di serie — Notion, GitHub, Obsidian, messaggistica (WhatsApp/Telegram/Slack) — che conferma
un pattern: nella pratica le combinazioni che convergono sono "file + chat esterna + ricerca web",
calendario ed email compaiono solo come plugin marginali, poco citati nella documentazione ·
rischio misurato: la cronologia issue mostra una ricorrenza pluriennale di bug sulla connessione a
LLM locali/Ollama in self-hosting (#1100, #1208, #777, #796, chiusi ma ricorrenti nel tempo) — il
self-hosting "fully local" ha attrito storico, non è plug-and-play · fonte: GitHub API + ricerca
issue mirata.

**reorproject/reor** · AGPL-3.0 · 8,6k stelle · **archiviato dal 2025-05-13** (verificato) · app
di note AI locale in stile Obsidian, esplicitamente citata nel mandato come pista · morta da oltre
un anno: seconda vittima trovata nella stessa categoria di Gmail-MCP-Server · scartata, riportata
come dato negativo (la nicchia "note AI locali stile Obsidian" ha già due cimiteri eleganti).

**onyx-dot-app/onyx** (ex Danswer) · MIT sul core, licenza Enterprise separata sulle cartelle `ee/`
(letta in chiaro) · 31,3k stelle, push a 2026-07-31 · hub con 40+ connettori incluso Gmail/Calendar
· non riportato come innesto: stack pesante (Postgres + Vespa + Redis + frontend web), pensato per
team, è il tipo di "trapianto di scheletro" che il mandato esclude esplicitamente · riportato solo
come prova che il pattern maturo "un hub unico per tutte le fonti" richiede un'infrastruttura che
la navicella non ha né dovrebbe assumere per un solo utente.

**ItzCrazyKns/Vane** (ex Perplexica — stesso autore, stesso repo rinominato, scoperto in questa
ricerca via redirect GitHub) · MIT · 35,9k stelle, ultimo push 2026-04-11 · motore di ricerca
privacy-oriented su SearxNG con supporto LLM locale · sovrapposizione quasi totale con il tool
WebSearch che l'Argonauta ha già nativo — utilità marginale bassa · non riportato come innesto.

**leon-ai/leon** · MIT · 17,4k stelle, push a 2026-07-31 (molto attivo) · framework generico di
assistente vocale/testuale · troppo generico: adottarlo sarebbe un trapianto di intera architettura
conversazionale per un guadagno che Handy (dettatura locale, già scelta il 25/7) copre già in
parte · non riportato come innesto.

**Obsidian (coddingtonbear/obsidian-local-rest-api + MarkusPfundstein/mcp-obsidian)** e
**Notion (makenotion/notion-mcp-server)** — entrambi trovati maturi e attivi (rispettivamente MIT,
push 2026-07-30 e 2026-07-25), ma **esclusi deliberatamente dai candidati**: Giuseppe non usa né
Obsidian né Notion (verificato — zero occorrenze in tutto il repo della navicella al di fuori del
mandato stesso). Nessun organo ne beneficerebbe oggi. Il mandato chiede di non riportare un
connettore senza un organo che migliora: questo è quel caso, reso esplicito invece che taciuto.

**Composio / Rube** — scartato senza essere elencato come candidato utilizzabile: instrada
autenticazione e scambio dati con le app collegate attraverso l'infrastruttura cloud di Composio
(confermato dalla descrizione ufficiale del repo: "authentication... sandboxed workbench"), non
attraverso l'account nativo di Giuseppe. È esattamente il pattern "contesto della navicella verso
un cloud terzo" che il gate esclude a prescindere dal riframing del 31/7 — quel riframing riguarda
cosa esce verso servizi che Giuseppe già possiede e controlla (Google, Sapienza), non un
intermediario SaaS aggiuntivo.

## Il meccanismo, spiegato bene

Playwright-MCP funziona su un principio diverso da quello che ci si aspetterebbe da "un browser per
l'IA": non manda screenshot al modello, manda l'albero di accessibilità della pagina — la stessa
struttura semantica che uno screen reader userebbe (ruoli, etichette, stato dei controlli). Questo
risolve due problemi insieme. Primo, un problema di costo e affidabilità: interpretare uno
screenshot richiede un modello visivo e resta ambiguo su elementi piccoli o sovrapposti; l'albero
di accessibilità è testo strutturato, si passa al modello di linguaggio senza perdita e senza
chiamata a un secondo modello. Secondo, un problema che questa stessa ricerca ha incontrato in
diretta: il tool WebFetch nativo di questa sessione ha rifiutato di leggere pagine github.com con
"Unable to verify if domain github.com is safe to fetch" — un fallimento non ipotetico, è successo
qui, e ha richiesto un fallback su `gh` CLI. WebFetch passa il contenuto scaricato a un modello
piccolo che lo riassume: se il fetch stesso viene bloccato a monte da una policy di rete, non c'è
riassunto che tenga. Un browser reale, pilotato localmente, non passa da quella policy — apre la
pagina come la aprirebbe Giuseppe.

Per Infostud questo cambia la natura del problema, non lo risolve gratis. Infostud è dietro login:
un Playwright-MCP che ci arrivasse dovrebbe farlo con una sessione autenticata, il che significa un
profilo di Chromium con i cookie di sessione di Giuseppe salvati da qualche parte sul disco.
Quella non è più "una pagina web che si legge", è una credenziale — la stessa categoria di cose che
oggi la navicella cifra con Argon2id/XChaCha20 per L5 e per le code di apprendimento. Nessuno dei
protocolli esistenti (`cancello-L5-cifratura.md`, `riversa.py`) copre oggi un profilo-browser con
sessione universitaria: sarebbe un quarto tipo di segreto, non ancora previsto. Questo è il punto
in cui il mandato dice "non è locale sì/no, è cosa esce e verso chi" — qui la risposta corretta non
è "niente esce" (il profilo browser è locale) ma "qualcosa di sensibile e nuovo *esiste* sul disco
e va classificato", che è un problema diverso e non ancora affrontato da nessuna parte della
navicella.

## Contro

Playwright-MCP non risolve l'autenticazione da solo — richiede che qualcuno (Giuseppe, una tantum,
o un innesco a ogni scadenza di sessione) faccia login nel browser pilotato. Il tracker mostra bug
reali non cosmetici: crash su `browser_navigate` quando la pagina chiama metodi `console.*`,
`ensureTab()` che può restare bloccato su "Page crashed" fino al riavvio manuale del server MCP —
non è uno strumento a prova di lasciare-e-dimenticare, l'Argonauta lo userebbe a sessione, non in
background.

google_workspace_mcp è pulito sul piano del gate ma inutile sul piano pratico finché Giuseppe non
sposta la sua fonte di verità su Google: oggi non l'ha fatto (misurato, non stimato), quindi
proporlo come priorità sarebbe risolvere un problema che Giuseppe non ha, ignorando quello che ha
(Infostud). Le 166 issue aperte includono bug non banali (parsing HTML del corpo delle email,
gestione charset) — repo giovane, cresce in fretta ma non ancora assestato.

Nessuno degli assistenti assemblati (Khoj, Onyx, SurfSense, Vane, Leon) offre un innesto pulito:
sono tutti pensati per essere l'intera architettura di memoria/ricerca, non un organo aggiuntivo.
Adottarne uno per intero violerebbe l'esclusione esplicita del mandato ("la navicella non si
riscrive su [uno di questi], cerca organi, non trapianti di scheletro"). Il loro valore in questa
ricerca è interamente di segnale — quali combinazioni convergono in pratica — non di codice da
installare.

## Innesto proposto

**Playwright-MCP per l'Argonauta.** Toccherebbe `.claude/mcp.json` (aggiunta di un secondo server,
accanto a `filesystem`) e le tool-list in `.claude/agents/argonauta-*.md` (oggi hanno
`WebSearch`/`WebFetch` nativi, righe 4-12 del file argonauta letto per questo mandato) per
concedere l'uso del nuovo server. Lavoro piccolo per l'installazione (`npx @playwright/mcp`, nessun
altro passaggio). Lavoro non piccolo, e non mio da decidere, è dove persistere un eventuale profilo
di sessione Infostud — quella è una decisione di classificazione dati che spetta a Dedalo
(interpretazione) e Giuseppe (ratifica), non un dettaglio di configurazione. Senza sessione
persistita, Playwright-MCP resta comunque utile per tutto il resto: pagine JS-pesanti, siti di
dipartimento, portali di ammissione magistrale — territorio già dell'Argonauta, oggi limitato da
WebFetch. Non si romperebbe nulla di esistente: è additivo, non sostituisce WebSearch/WebFetch.

**google_workspace_mcp: non proposto ora.** Precondizione non soddisfatta (Giuseppe non usa Google
Calendar come fonte di verità). Va rivalutato solo se quella precondizione cambia — altrimenti è
uno strumento pulito in cerca di un problema che non esiste ancora.

**Pattern "cattura browser → grafo" ispirato a SurfSense: non un innesto, una proposta per
Dedalo.** Non installare SurfSense. Se in futuro emergesse davvero il bisogno di catturare
passivamente ciò che Giuseppe legge per la tesi (paper, thread, pagine di gruppi di ricerca), il
pattern da studiare — non da clonare — è "estensione browser leggera che scrive episodi nel grafo
esistente (`anima-grafo.py`)", non un secondo sistema di grafo parallelo (Neo4j) accanto a quello
SQLite già costruito.

## Non confermato

- Se Infostud abbia una policy anti-scraping/anti-bot esplicita che romperebbe un'automazione
  Playwright continuativa — nessuna fonte primaria Sapienza trovata su questo punto, solo assenza
  di documentazione di un'API pubblica.
- Se Giuseppe userebbe davvero Google Calendar/Gmail come fonte di verità se glielo si proponesse —
  inferenza negativa dal disco, non una sua dichiarazione diretta.
- Se Composio abbia una modalità self-hosted che eviti interamente il loro cloud — verificato solo
  a livello di descrizione ufficiale del repo, non aperta la documentazione di deployment per
  intero.
- Numero di manutentori attivi per ciascun repo — non misurabile dalla sola API pubblica dei
  repository (stelle, licenza, data di push, issue aperte sì; maintainer count no).
- Se la licenza "Enterprise" di Onyx nelle cartelle `ee/` implichi restrizioni che si estendono ad
  altre parti del codice in caso di modifica — letta la sola LICENSE root, non il contenuto delle
  cartelle `ee/`.

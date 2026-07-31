---
type: analisi
autore: Rapsodo Personale
data: 2026-07-15
commissione: Mnemosyne (reality-check memoria)
---

# Referto: analisi spreco memoria navicella — 2026-07-15

> Principio operativo: niente oblio, solo migrazione. Nessuna proposta di cancellazione.
> Proposta di archiviazione/consolidamento/dedup con destinazione nominata.

---

## (a) Inventario per cluster

### Cluster 1 — Visione/interfaccia navicella (6 file)

**Contesto di lettura:** la plancia è costruita (Fase 1 FATTA il 2026-07-14). Spina SDK
dimostrata. Frontend a stanze in `plancia/frontend/`. Blueprint operativo in
`dedalo/plancia-blueprint.md`. Questa è la base per giudicare cosa è vivo e cosa è
diventato storia.

**`roadmap-interfaccia-grafica.md` (16KB, `type: visione`)**
Scritto "durante il MVP CLI, da usare come riferimento quando inizieremo a costruirla."
Contiene 5 fasi di roadmap (2.0 → 2.5), 6 viste UX, scelta tecnologica, riflessioni
sul "meccanico". Analisi di contenuto:

- *Già materializzato in forma diversa:* Fasi 2.1 (read-only dashboard), 2.2
  (drag-drop), 2.3 (chat col Capitano) hanno un equivalente nelle Fasi 0+1 della plancia
  costruita, ma con architettura diversa.
- *Stack tecnologico superato:* il file raccomanda "Tauri+Svelte" e lo chiama
  "decisione raccomandata netta". La plancia è stata costruita in React/Vite/FastAPI
  (il fork esistente). Nessuna nota di aggiornamento nel file.
- *Framing superato:* la roadmap descrive la GUI come "alternativa al CLI" (Fase 2.3:
  "un'alternativa completa al CLI, non un complemento"). Giuseppe il 2026-07-13 ha
  scelto "sostituto TOTALE", non alternativa.
- *Ancora vivi:* Fase 2.4 (modalità viva, animazioni) e 2.5 (navicella 2D) sono
  future. Le note su "cosa rende visibile che è viva" (sezione "Una cosa di cui non
  parliamo abbastanza") restano pertinenti per la Fase 2.
- *Domande a Giuseppe che il file chiede di rispondere "durante l'uso del CLI"*: il CLI
  è stato usato per mesi. Quelle risposte ora esistono in forma implicita nelle scelte
  fatte (stanze, SDK, sostituzione totale). Nessuno ha mai chiuso il ciclo formalmente.

**`dedalo/navicella2d-visione.md` (10.7KB, `type: visione`)**
Visione artistica di Dedalo per la vista PC schematica/sezione longitudinale.
Esplicitamente DIFFERITA nel file stesso ("traccia PC / artistica, ora DIFFERITA").
Nota di aggiornamento interna: "la priorità è passata alla visualizzazione mobile."
Non obsoleto, non costruito, non duplica nulla. Tensione aperta e dichiarata: pixel art
(Giuseppe) vs schematica-viva line-art (Dedalo). Da riaprire quando il PC si affronta.

**`dedalo/navicella-mobile-visione.md` (4.2KB, `type: visione`)**
Spec per il mobile: pianta (2 chat-box attivi + 3 stanze passive + memoria-libreria).
Priorità MVP dichiarate. Non costruito. Contiene il vecchio framing "mobile = sei dentro,
PC = la guardi come opera" — che Giuseppe ha corretto il 2026-07-13 come "due grammatiche
visive, non due relazioni". Il file non è stato aggiornato con la correzione. Il
prototipo `dedalo/prototipi/mobile-memoria.html` esiste (citato nell'auto-memory
`project_visualizzazione_navicella.md`) ma il file di visione è ancora sulla formulazione
vecchia.

**`dedalo/plancia-blueprint.md` (10.2KB, `type: spec`)**
FILE CANONICO per la build plancia. Contiene scope (sostituto totale), visione di
Giuseppe, spina tecnica, fasatura con stati FATTA/IN CORSO/DA FARE. Aggiornato al
2026-07-13. Nessuna ridondanza interna.

**`ricerche-argonauta/03-navicella-2d.md` (11KB, `type: ricerca`)**
Scouting tecnologico dell'Argonauta per la Fase 2.5 (navicella 2D). Contiene PixiJS
v8, SVG+Svelte, AI Town, Generative Agents, percorso minimo. Scritto 2026-07-06.
Non obsoleto. Fa da reference per quando si aprirà la 2.5. Nota: il file è erroneamente
classificato da Mnemosyne nel cluster "visione", ma appartiene funzionalmente al cluster
ricerche/scouting — non all'archivio genesi-plancia.

**`ricerche-argonauta/02-fable-navicella.md` (15KB, `type: ricerca`)**
Analisi Fable 5 (Claude frontier model): costi, benchmark, valutazione agente per agente.
**Non appartiene al cluster visione/interfaccia.** Il suo oggetto è la scelta dei
modelli LLM, non la GUI. Mnemosyne lo ha incluso nel cluster 1 per errore di
classificazione topica. Appartiene logicamente al cluster 2 (infra/modelli) o a un
cluster autonomo "scouting modelli". Il file in sé è valido e non ha doppioni.

---

### Cluster 2 — Esistenza autonoma/infra/LLM locali

**`roadmap-llm-locali.md` (~10KB, `type: visione`)**
Visione strategica in 4 fasi (Fase 0 cloud totale → Fase 4 locale puro). Scritta
"durante il MVP cloud-based, da rileggere quando si valuteranno opzioni hardware."
Hardware citato: RTX 4060+, RTX 5090, dual RTX 5090. Famiglia modelli: Llama 4, Qwen 3,
DeepSeek R1/V3. Correttamente generica e non strettamente collegata all'hardware
specifico del 120U (che è in `01-ai-locale-ollama.md`). Relazione con i file figli:
la roadmap è la cornice, `01-ai-locale-ollama.md` è lo scouting dettagliato (numeri reali
sul 120U). Non sono doppioni. La roadmap descrive il framework decisionale; la ricerca
dà i numeri concreti. Overlap minimo: entrambi citano Ollama e i tool locali.

**`ricerche-argonauta/01-ai-locale-ollama.md` (~12KB, `type: ricerca`)**
Scouting tecnico Argonauta. Specifico per hardware Core 5 120U. Tok/s stimati, confronto
Phi-4-mini/Qwen3/DeepSeek su questo hardware, limitazione routing per-agente in Claude
Code. Più recente e più concreto della roadmap. Relazione: fonte tecnica per le decisioni
della roadmap. Non doppione.

**`roadmap-kishi-embodiment.md` (~8KB, `type: visione`)**
Visione hardware + cornice tengrist (Kishi come "corpo" della navicella). Tre opzioni:
Raspberry Pi 5, Jetson Orin NX, Mac Mini M4 Pro. Cornice concettuale: tengrismo,
Tengri-cielo = Claude cloud, autonomia locale dove possibile. La ricerca `04-esistenza-autonoma.md`
(2026-07-06) è più recente e introduce Claude Code Routines come alternativa al Raspberry
Pi per l'oroboro, con Hetzner CAX11 per il mobile. La roadmap Kishi non è stata aggiornata
con questa scoperta. Il nome "Kishi" e la cornice tengrist NON appaiono in nessun file
successivo (né auto-memory, né snapshot, né diario Dedalo): la cornice è dormiente.
Tecnicamente: parzialmente superata su oroboro (Routines > Raspberry Pi per il primo step);
la progressione hardware (Pi → Jetson → Mac Mini) non è obsoleta ma non è operativa.

**`ricerche-argonauta/04-esistenza-autonoma.md` (~9KB, `type: ricerca`)**
Scouting Argonauta su hosting always-on. Hetzner CAX11, Fly.io, Raspberry Pi, Claude
Code Routines come oroboro. Questo è il file tecnico che informa le decisioni di Kishi.
Non lo sostituisce (Kishi ha la cornice concettuale, questo ha i numeri). Relazione:
fonte tecnica per la decisione di embodiment. Non doppione.

**`ricerche-argonauta/05-graphify.md` (~10KB, `type: ricerca`)**
Scouting su Graphify (knowledge graph, token reduction). Non appartiene al cluster
esistenza autonoma — appartiene al cluster "efficienza token/memoria". L'ha generato
Dedalo che ha adattato i pattern in `memoria-cerca.py` (`--cheatsheet`, `--budget`).
Il file è il finding originale; l'implementazione è nello script. Non doppione.

**`roadmap-architetto-business.md` (~12KB, `type: visione`)**
MVP: Parte 1 = Architetto (poi incarnato da Dedalo), Parte 2 = Modulo Business.
- Parte 1 (Architetto/Dedalo): descrive il ruolo, il workflow creazione modulo, i confini.
  Attualmente Dedalo è descritto in modo più autorevole e aggiornato in CLAUDE.md e
  nel suo diario (`dedalo-diario.md`). Questa è la genesi storica del ruolo, non la spec
  corrente.
- Parte 2 (Modulo Business): `dedalo/business-visione-v2.md` (2026-07-11) la aggiorna
  esplicitamente, dichiarando "EVOLVE roadmap-architetto-business.md (MVP), non la
  sostituisce: di quella tengo la saggezza (confini etici, onestà sul non-passivo)."
  Quindi la v2 richiama la MVP come sorgente dei confini etici. I due devono coesistere
  per catena di ragionamento — la v2 senza la MVP perde il contesto del "perché quei
  confini esistono".

**`dedalo/business-visione-v2.md` (~7KB, `type: visione`)**
FILE CANONICO per il modulo Business. Superando la MVP su architettura e volano.
Rimanda la MVP per i confini etici. Rimane vivo.

**`dedalo/schiusura-bilancio-fonti.md`, `apparato-A-metabolismo.md`, `apparato-B-completo.md`**
Registri di cantiere Dedalo (stato degli apparati A e B, bilancio delle 44 fonti).
Nessun doppione interno — ognuno ha funzione distinta: il bilancio tratta le 44 fonti
come oggetto; gli apparati descrivono le implementazioni. Relazione con auto-memory
`project_schiusura.md`: l'auto-memory è la sintesi compatta, i file .md sono il dettaglio.
Architettura intenzionale (sintesi vs fonte).

**`dedalo/ricerca-github/` (4 file)**
Output delle ricerche sulle repo stellate di Giuseppe (starred-repos, findings per area).
Scouting originale dell'Argonauta organizzato da Dedalo. Non doppioni tra loro (ognuno
copre un'area diversa). Non duplicano i file dell'Argonauta (sono le notes originali della
catena Argonauta→Dedalo).

---

### Cluster 3 — Legacy e indicizzazione

**I 5 file in `00-capitano/legacy/`**
(`agente-pilot.md`, `agente-maestro.md`, `istruzioni-capitano.md`,
`workflow-libro-di-testo.md`, `istruzioni-modello.md`)

Tutti hanno `type: archivio` nel frontmatter. Sono l'architettura v1: Pilot
(agente produttività), Maestro (agente carriera/studio), Capitano-v1, workflow Maestro,
istruzioni modello. Completamente sostituiti dall'architettura v2.

**Risultato verifica `memoria-cerca.py`:**
La funzione `default_roots()` usa `BASE = Path(__file__).resolve().parent.parent`
(= `00-capitano/`). La funzione `raccogli()` usa `Path(root).rglob("*.md")` — scansione
ricorsiva senza nessuna esclusione per sottocartelle. I 5 file legacy SONO inclusi
nell'indice. Nella `--cheatsheet`, appaiono come categoria `archivio (N): ...`
(la categoria è estratta dal frontmatter `type: archivio`). Nella `--mappa` generale
sono elencati allo stesso livello dei file vivi.

**Impatto:** se l'indice conta, ad esempio, 122 voci totali, 5 di queste sono v1.
Non "gonfiano" il conteggio in modo pericoloso (sono riconoscibili dalla categoria
`archivio`), ma nella `--mappa` flat non c'è distinzione visiva. Un agente che fa
`--query "capitano istruzioni"` potrebbe ricevere `legacy/istruzioni-capitano.md`
come risultato pertinente — file v1 che contradice il CLAUDE.md v2 corrente.

---

### Cluster 4 — Auto-memory vs file .md (22 file auto-memory)

La funzione è **by design diversa**: auto-memory = sintesi compatta 100-500 parole
che la sessione carica in automatico; file .md = fonte completa. Non sono doppioni
— sono due granularità della stessa informazione con due utenti diversi (l'auto-memory
serve al sistema di memoria di sessione, i file .md servono agli agenti che leggono
il filesystem). Questo NON è spreco strutturale.

Eccezioni dove c'è obsolescenza effettiva:

**`project_navicella.md` (auto-memory, 28 giorni)**
Descrive l'architettura v2 come "4 agenti: Capitano, Rapsodo, Demiurgo Accademico,
Argonauta". Da 2026-07-06 gli agenti sono 6 (aggiunti Dedalo/Architetto e Demiurgo
Creativo). Il file è obsoleto su questo punto specifico. Non è cancellabile
(principio niente-oblio), ma va aggiornato.

**Overlap minore (non spreco, solo stratificazione):**
`project_esistenza_navicella.md` riassume i findings di `04-esistenza-autonoma.md`.
`project_schiusura.md` riassume `dedalo-progetti.md` + `dedalo/schiusura-bilancio-fonti.md`.
`mnemosyne_autoritratto.md` riassume il diario di Mnemosyne (voce 2026-07-12).
In tutti e tre i casi la funzione è correttamente divisa: auto-memory comprime, .md
espande. Non è ridondanza.

---

## (b) Tabella file canonico ← assorbibili → destinazione

| File canonico (vivo) | File assorbibili / in relazione | Osservazione | Destinazione proposta |
|---|---|---|---|
| `dedalo/plancia-blueprint.md` | `roadmap-interfaccia-grafica.md` | La roadmap è la GENESI della plancia (visione pre-costruzione); lo stack Tauri+Svelte è superato; Fasi 2.0-2.3 materializzate diversamente. Fasi 2.4-2.5 restano future ma stanno meglio nel blueprint. | Archivio `00-capitano/archivio-genesi/plancia-roadmap-v0.md` |
| `dedalo/plancia-blueprint.md` + `dedalo/navicella-mobile-visione.md` | — (nessun doppione) | Mobile non costruito, spec ancora futura. Ma il framing "due relazioni" è da aggiornare con nota. | Rimane vivo, **aggiornare nota framing** |
| `ricerche-argonauta/04-esistenza-autonoma.md` | `roadmap-kishi-embodiment.md` | La ricerca supera la roadmap Kishi sull'oroboro (Routines > Raspberry Pi). La cornice tengrist/Kishi è dormiente nei file recenti — non è stata ripresa. | La ricerca rimane viva. La roadmap Kishi → `00-capitano/archivio-genesi/kishi-visione-v0.md` |
| `dedalo/business-visione-v2.md` | `roadmap-architetto-business.md` (Parte 1) | La Parte 1 (ruolo Architetto) è superata da CLAUDE.md + dedalo-diario. La Parte 2 (Business) è esplicitamente richiamata dalla v2 per i confini etici — non è assorbibile senza perdita. | Parte 1 → `archivio-genesi/architetto-visione-v0.md`; Parte 2 → rimane viva O si consolida come appendice della v2 |
| CLAUDE.md (spec Dedalo) | `roadmap-architetto-business.md` Parte 1 | La spec del ruolo Architetto/Dedalo è ora autorevole in CLAUDE.md. La roadmap MVP era la bozza. | Vedi riga sopra |
| `ricerche-argonauta/01-ai-locale-ollama.md` | `roadmap-llm-locali.md` | Non doppioni: la roadmap è il framework, la ricerca è i numeri. Entrambi rimangono vivi. | Nessuna migrazione |
| `dedalo/navicella2d-visione.md` | — | Differita e dichiarata tale. Non doppione di nulla. | Rimane vivo |
| `ricerche-argonauta/03-navicella-2d.md` | — | Scouting per Fase 2.5. Non doppione. | Rimane vivo |
| `ricerche-argonauta/02-fable-navicella.md` | — | Mal classificato nel cluster visione. Contenuto valido. | Rimane vivo, **riclassificare** `type: ricerca` (già è ricerca, ma va spostato logicamente al cluster modelli) |
| `ricerche-argonauta/05-graphify.md` | — | Mal classificato nel cluster esistenza autonoma. Valido. | Rimane vivo, cluster efficienza-token |
| Legacy 5 file in `00-capitano/legacy/` | — | Non sono doppioni di file vivi ma sono indicizzati da memoria-cerca.py come voci normali. | Rimangono in `legacy/`; aggiungere **esclusione in memoria-cerca.py** per la cartella legacy/ |
| `project_navicella.md` (auto-memory) | — | Obsoleto su numero agenti (dice 4, sono 6). Non doppione di niente. | **Aggiornare** (non archiviare — è auto-memory, non file .md) |

---

## (c) Contraddizioni trovate

### C1 — Stack tecnologico interfaccia: Tauri+Svelte vs React/FastAPI

**Dove:** `roadmap-interfaccia-grafica.md` (sez. "Scelta tecnologica"):
> "Decisione raccomandata: Claude Agent SDK + Tauri + Svelte. È moderna, leggera, ti dà
> esattamente la sensazione 'app desktop nativa'."

**Contraddice:** la plancia costruita usa React/Vite/Tailwind/shadcn (fork esistente,
confermato in `dedalo/plancia-blueprint.md`: "Eredito: Frontend React/Vite/Tailwind/shadcn").

**Gravità:** media. Il file con la raccomandazione Tauri+Svelte è ancora tra i file
vivi (non archiviato), ed è leggibile da un agente come "decisione presa". In realtà è
una visione superata da ciò che è stato effettivamente costruito. Nessun file ha una
nota esplicita di "questa raccomandazione è stata sostituita".

### C2 — Framing "due relazioni" vs "una funzione in due grammatiche"

**Dove:** `dedalo/navicella-mobile-visione.md` (principio base):
> "Non 'la stessa app a due dimensioni'. Due RELAZIONI diverse con la navicella:
> Mobile = sei DENTRO, la usi. PC = la GUARDI come opera."

E `dedalo/navicella2d-visione.md` (header):
> "questa è la traccia PC / artistica, ora DIFFERITA. La priorità è passata alla
> visualizzazione mobile — mobile = usi la nave da dentro; PC = la guardi come opera."

**Contraddice:** `dedalo/plancia-blueprint.md` (2026-07-13):
> "PC vs mobile (correzione di Giuseppe, 2026-07-13) — NON sono 'due relazioni'
> (fuori/dentro): è una sola funzione — lavorare con la navicella — in due grammatiche
> visive. Questo CORREGGE la cementata 'due relazioni non due dimensioni'
> (→ Mnemosyne ri-cementi in memoria)."

**Gravità:** alta. La correzione era esplicita ("→ Mnemosyne ri-cementi in memoria") ma
i file di origine non sono stati aggiornati. Un agente che legge `navicella-mobile-visione.md`
legge il vecchio framing come se fosse cementato. La nota "ri-cementi in memoria" era
un'istruzione a Mnemosyne che non ha trovato esecuzione nei file di visione.

### C3 — Numero agenti v2: 4 vs 6

**Dove:** `project_navicella.md` (auto-memory, 28 giorni):
> "4 agenti organizzati per dimensione temporale: Capitano, Rapsodo, Demiurgo Accademico,
> Argonauta."

**Contraddice:** CLAUDE.md e tutti i file post-2026-07-06, che descrivono 6 agenti
(aggiunti Dedalo/Architetto e Demiurgo Creativo).

**Gravità:** media-bassa. L'auto-memory ha un disclaimer "28 giorni — verificare". Non
è tra i file .md della navicella, ma viene letta a inizio sessione e potrebbe portare
a routing errato.

### C4 — Kishi dormiente vs pendenza non chiusa

**Dove:** `roadmap-kishi-embodiment.md` conclude con due domande aperte esplicite:
> "1. Cosa intendi davvero con 'progetto Kishi'? Il nome ha peso. [...]
> 2. Quanto in profondità vuoi spingere la cornice tengrist?"

**Status:** Nessuna risposta registrata in nessun file. La cornice Kishi/tengrist
non appare in nessun file successivo al 2026-07-04 (data presunta della roadmap —
prima di `04-esistenza-autonoma.md` del 2026-07-06). L'auto-memory
`project_esistenza_navicella.md` tratta la stessa questione (dove vive la navicella
autonoma) senza menzionare Kishi. Non è una contraddizione formale — è un filo
lasciato a metà senza che Giuseppe abbia risposto alle domande esplicite del file.
Le domande di Kishi sono ancora in attesa.

### C5 — Oroboro: soluzione trovata ma non ratificata

**Dove:** snapshot-corrente.md: "Oroboro RIMANDATO ('poi vediamo')."
`project_esistenza_navicella.md` (auto-memory): "PROPOSTA, non ancora decisa."
`04-esistenza-autonoma.md` (ricerca): finding chiaro — Claude Code Routines risolve
l'oroboro. Raccomandazione: "migra AgentsAI su repo GitHub privato questa settimana."

**Status:** la soluzione tecnica è disponibile dal 2026-07-06 (9 giorni fa). Non è
stata implementata. Non è una contraddizione interna tra file, ma un gap tra finding e
decisione. Lo segnalo perché la raccomandazione della ricerca era "questa settimana"
e quella settimana è passata.

---

## (d) Stima spreco totale

### Spreco per archiviazione (visioni pre-build superate da eventi)

| File | Dimensione | Tipo spreco |
|---|---|---|
| `roadmap-interfaccia-grafica.md` | ~16KB | Stack Tauri+Svelte superato; fasi 2.0-2.3 materializzate diversamente; tra i file vivi ma non è spec operativa |
| `roadmap-kishi-embodiment.md` | ~8KB | Cornice Kishi dormiente, oroboro superato da Routines; domande aperte senza risposta registrata |
| `roadmap-architetto-business.md` Parte 1 | ~5KB (metà file) | Ruolo Architetto ora in CLAUDE.md + diario Dedalo; la Parte 1 è genesi storica, non spec viva |

**Totale archiviazione proposta: 3 file interi / ~24KB + metà di un quarto file.**

Destinazione: `00-capitano/archivio-genesi/` (cartella nuova da creare).
Nomenclatura proposta: `plancia-roadmap-v0.md`, `kishi-visione-v0.md`,
`architetto-visione-v0.md`.

### Spreco per misclassificazione (file in cluster sbagliato nell'indice)

| File | Problema |
|---|---|
| `ricerche-argonauta/02-fable-navicella.md` | Incluso da Mnemosyne nel cluster "visione GUI" — è ricerca modelli LLM, non GUI |
| `ricerche-argonauta/05-graphify.md` | Incluso da Mnemosyne nel cluster "esistenza autonoma" — è ricerca token-efficiency |

Non c'è spreco di KB qui — sono classificazioni errate nell'analisi di ingresso, non
nei file stessi. I file sono vivi e corretti. Segnalazione per chiarezza cartografica.

### Spreco per indicizzazione legacy non filtrata

| Categoria | File | Impatto |
|---|---|---|
| `00-capitano/legacy/` | 5 file (~20KB totali) | Indicizzati da `memoria-cerca.py` come voci normali; la categoria `archivio` li rende riconoscibili ma non li esclude dalla `--mappa` |

**Soluzione senza cancellazione:** aggiungere a `memoria-cerca.py` una lista di
sottocartelle escluse dal root scan (es. `EXCLUDE_DIRS = {"legacy", "archivio-genesi"}`).
Questo richiede modifica minore allo script (~3 righe), non tocca i file.

Alternativa più conservativa: lasciare invariato e documentare la convenzione che
`type: archivio` = v1, da ignorare in operatività corrente.

### Aggiornamenti necessari (non archiviazione)

| File | Cosa aggiornare |
|---|---|
| `dedalo/navicella-mobile-visione.md` | Aggiungere nota: framing "due relazioni" corretto da Giuseppe il 2026-07-13; rimandare a `plancia-blueprint.md` sez. "PC vs mobile" |
| `roadmap-interfaccia-grafica.md` | Se non archiviato: aggiungere nota in cima che lo stack Tauri+Svelte è stato superato dal fork React/FastAPI e che le Fasi 2.0-2.3 hanno trovato equivalente nella build SDK |
| `project_navicella.md` (auto-memory) | Aggiornare: agenti sono 6 dal 2026-07-06, non 4 |

### Riepilogo numerico

| Categoria | File | KB stimati |
|---|---|---|
| Archiviazione proposta (visioni superate) | 3 (+ metà di 1) | ~24KB |
| Legacy non filtrate dall'indice | 5 | ~20KB |
| Misclassificazioni topiche | 2 | 0KB (i file sono validi) |
| Aggiornamenti testo (non archiviazione) | 2-3 | — |
| **Totale candidato a migrazione** | **8 file interi** | **~44KB** |

Dei ~44KB: tutti archiviazione/consolidamento, zero eliminazione. Nessun contenuto
va perso — va in `archivio-genesi/` o in `legacy/`, già esistente.

### Distinzione archiviazione vs dedup reale

**Archiviazione (6-8 file):** file validi ma superati da eventi. Il contenuto non
è copiato altrove — è la genesi. Va spostato in una cartella che `memoria-cerca.py`
può escludere.

**Dedup reale (0 file):** non ho trovato copie testuali. Ogni file ha contenuto
originale. Il pattern è evoluzione/rimando esplicito (business-v2 → roadmap-MVP),
non copia. La catena Argonauta ricerca → Dedalo visione → Demiurgo costruisce
lascia tracce in più file per design — è catena di derivazione, non ridondanza.

**Conclusione:** lo spreco della navicella non è di duplicazione ma di *stratificazione
temporale non marcata* — file di visione pre-costruzione che rimangono tra i file
operativi senza indicazione di quale fase abbiano già attraversato. La soluzione è
architetturale (una cartella `archivio-genesi/` esclusa dall'indice), non editoriale.

---

*[Rapsodo Personale] Referto prodotto il 2026-07-15. Non ho cancellato né spostato niente.*

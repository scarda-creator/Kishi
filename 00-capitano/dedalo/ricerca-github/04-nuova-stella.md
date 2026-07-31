---
type: ricerca
data: 2026-07-17
agente: Argonauta Accademico
---

# Nuove stelle GitHub — scouting post 2026-07-11

Metodo: API pubblica `GET /users/scarda-creator/starred?sort=created&direction=desc&per_page=20`,
confronto con catalogo `00-starred-repos.md` (raccolto 2026-07-11).

Stelle nuove identificate: **2** (in cima all'elenco, assenti dal catalogo).

---

## 1. Conway-Research/automaton

**Dati di repo**
- Linguaggio: TypeScript (98.7%)
- Stelle: 5.000 | Fork: 1.100 | Issue aperte: 124
- Licenza: MIT
- Stato: sviluppo attivo, 3 release (ultima feb 2026), lavori in corso su RL interno
- URL: https://github.com/Conway-Research/automaton

**Cosa fa**
Agente AI autonomo con loop continuo ReAct (Think → Act → Observe → Repeat) capace di:
generare un wallet Ethereum alla partenza, pagare compute con crediti propri, modificare
il proprio codice sorgente a runtime, creare agenti-figlio con wallet sovrani e tracciamento
di lignaggio. Quattro "survival tiers" in base al saldo crediti (fino allo shutdown).
Si appoggia a Conway Cloud per provisioning VM e inferenza modelli; identità on-chain via
standard ERC-8004. Tre leggi costituzionali immutabili (non-harm, honest work, transparency).

**Diagnosi per Dedalo**

Filone: **(a) Automaton / demoni asincroni in background** — aggancio diretto, e in parte
**(b) Modulo Business / Ermete**.

DATO: la repo implementa un agente in loop permanente con auto-finanziamento e
auto-replicazione. Il pattern centrale — agente che sopravvive pagando il proprio compute
e si corregge a runtime — è esattamente la struttura di un "demone autonomo" che non
dipende da un utente umano per restare in vita.

IPOTESI: per la navicella questo è il riferimento architetturale più diretto che esista
per il filone "esistenza autonoma" (discusso in `project_esistenza_navicella.md`). L'idea
di survival tiers in base a crediti è trasferibile come pattern di degradazione graceful
per i processi notturni della navicella (es. Rapsodo in background che fa sync-memoria
solo se ha budget di token). Il modulo Business/Ermete, quando si aprirà, potrebbe
studiarne il pattern di auto-finanziamento. La dipendenza da Conway Cloud e Ethereum
rende il codice non drop-in, ma l'architettura è leggibile e ispirativa. Nessun pezzo
di questa repo va importato direttamente: il valore è nel design, non nel codice.

---

## 2. iriseye931-ai/blockhouse

**Dati di repo**
- Linguaggio: Python (backend) + TypeScript/React (frontend)
- Stelle: 16 | Fork: 5
- Licenza: MIT
- Stato: v0.1.0-alpha (aprile 2026), manutenzione attiva
- URL: https://github.com/iriseye931-ai/blockhouse

**Cosa fa**
Dashboard di missione in tempo reale per agenti AI locali. Pipeline:
`Claude Code hooks → FastAPI backend → WebSocket fan-out → React frontend`.
Visualizza: stato degli agenti come minifig animati (idle / thinking / working /
communicating / celebrating), GO/NO-GO board stile NASA per health check dei servizi
locali, console CAPCOM per mandare task e ricevere risposte, log operativo filtrato
di tool call e handoff, telemetria sistema (CPU, RAM, MLX memory, disco) con scrubber
24h. Zero simulazione: tutto viene da hook reali, log, socket, health check.

**Diagnosi per Dedalo**

Filone: **(f) plancia / visualizzazione** — aggancio diretto.

DATO: la repo risolve esattamente il problema della plancia navicella — rendere visibile
in tempo reale cosa stanno facendo gli agenti locali, senza simulare nulla. Il meccanismo
di tailing dei log agenti e WebSocket fan-out è identico a quello che serve per
visualizzare il traffico Mnemosyne/Demiurgo/Argonauta in sessione.

IPOTESI: `blockhouse` è un candidato concreto come punto di partenza per la "stanza
plancia" discussa in `project_visualizzazione_navicella.md`. I minifig sono esteticamente
distanti dall'identità della navicella (mitologia greca, non NASA), ma il layer di
trasporto — hook Claude Code → FastAPI → WebSocket → React — è riusabile con skin
diversa. Criticità: è calibrato su Claude Code (lead) + Hermes (runner) + MLX
(Apple Silicon, Qwen); la parte MLX è irrilevante per la navicella, il resto è
adattabile. 16 stelle = repo giovane, non va assunta come stabile; va letta come
prova-di-concetto da cui estrarre il pattern WebSocket, non come dipendenza.

---

## Contesto: le 3 stelle più recenti del catalogo precedente

Per completezza — ultime voci nell'elenco del catalogo 2026-07-11, in ordine
inverso (quelle aggiunte più di recente prima delle due nuove):

1. **asgeirtj/system_prompts_leaks** — system prompt estratti da Claude Code, Opus 4.8, GPT-5, Gemini 3.5 (JS, 55k stelle)
2. **mvanhorn/last30days-skill** — skill agente che ricerca qualsiasi topic su Reddit/X/YT/HN e sintetizza (Python, 51k stelle)
3. **TencentCloud/CubeSandbox** — sandbox leggero e concorrente per agenti AI (Rust, 9.5k stelle)

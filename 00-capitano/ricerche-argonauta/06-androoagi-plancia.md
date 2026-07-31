---
tipo: ricerca-argonauta
data: 2026-07-13
oggetto: AndrooAGI — ispirazione originale plancia navicella
richiedente: Dedalo
---

# AndrooAGI e la mission control OpenClaw

## Sintesi

AndrooAGI (@androoagi su TikTok) e' il creator americano che ha ispirato direttamente
la plancia della navicella: in `genesi-navicella.md` (sezione V) e `archivio-fondazione.md`
(voce 2026-06-06) e' scritto esplicitamente che la prima plancia HTML "era il prototipo
di quello che il canale TikTok di AndrooAGI mostrava con OpenClaw — una mission control."

OpenClaw non e' Claude Code: e' una piattaforma agent open-source model-agnostica che
da agli agenti capacita' di computer-use full (file system, browser, messaggistica).
E' comparabile a Claude Code per il registro d'uso (CLI + agenti autonomi), non per
lo stack tecnico. La sua dashboard e' cioe' esattamente il problema di Giuseppe:
come visualizzare un sistema di agenti vivo.

---

## 1. Chi e' AndrooAGI

- **Canale TikTok:** @androoagi
- **Piattaforma primaria:** TikTok (non ha repo pubblico identificabile, niente GitHub personale trovato)
- **Contenuto:** tutorial e demo di uso di OpenClaw — building autonomo, automazione business,
  creazione di contenuti via agenti. Non e' un developer open-source: e' un early adopter
  che costruisce per se e mostra il risultato.
- **Video virale:** "AI Agent Environment Tour #openclaw #ai" — 62.4K likes, 1389 commenti.
  Descrizione del video: mostra l'ambiente di lavoro degli agenti con la sua mission control.
  Commento chiave di AndrooAGI: *"Mission control is the first thing to build when you get
  OpenClaw. It's been by far the best thing I've built with open claw."*
- **Descrizione dell'estetica dal video:** "each desk represents an agent working in real-time"
  — metafora spaziale ufficio, ogni agente ha una postazione visiva. Usato per gestire il
  business day-to-day.

Limite hard: TikTok e' dietro login, i video non sono fetchabili. Nessun repo pubblico
trovato. Quello che sappiamo dell'estetica specifica viene da descrizioni nei commenti e
articoli secondari, non da screenshot diretti.

---

## 2. Cos'e' OpenClaw e perche' e' rilevante

OpenClaw e' un agent framework open-source che:
- Da agli LLM (model-agnostico) capacita' di computer-use complete
- Espone una **Gateway API** su porta 18789 (WebSocket/HTTP) come punto di integrazione
- Ha un ecosistema di dashboard community-built che si connettono alla Gateway
- Non e' un prodotto Anthropic: e' la versione OS del paradigma "agente autonomo sempre attivo"

L'analogia con la navicella: OpenClaw sta ad AndrooAGI come Claude Code sta a Giuseppe.
La mission control di AndrooAGI e' la sua plancia — costruita sopra le hook/API di OpenClaw,
esattamente come la plancia della navicella si connette agli hook di Claude Code via POST FastAPI.

---

## 3. Come e' fatta una mission control OpenClaw — ecosistema community

TikTok blocca i video. Compenso con l'ecosistema di dashboard community ispirati
direttamente ad AndrooAGI (tutti citano il suo video come trigger):

### 3a. Variante minimalista zero-dipendenze (mudrii/openclaw-dashboard)

- **Stack:** Go backend + HTML/CSS/JS puro embedded nel binario
- **Estetica:** glass morphism, 6 temi switchabili (Midnight, Nord, Catppuccin Mocha dark;
  GitHub, Solarized, Catppuccin Latte light)
- **12 pannelli principali:** barra metriche top (CPU/RAM/disk), banner bot (nome + status),
  alerts, system health, cost cards (oggi/totale/proiezione mensile), cron jobs, active sessions
  (con model badge e % context), token usage per modello, sub-agent activity, charts SVG,
  riga bottom (models grid / skills list / git log), chat AI embed
- **Real-time:** auto-refresh ogni 60s con countdown visibile
- **Nota:** nessun framework, nessuna dipendenza esterna — tutto inline

### 3b. Variante OS-desktop con 3D (carlosazaustre/TenacitOS)

- **Stack:** Next.js 15 + React 19 + Tailwind CSS v4 + **React Three Fiber + Drei** + Recharts + SQLite
- **Estetica:** interfaccia OS-style con topbar, dock, status bar; **ambiente ufficio 3D
  voxel con un avatar per agente** — ogni agente ha una postazione 3D nella stanza
- **Dati:** system metrics real-time, agent sessions + token usage, cost analytics giornalieri,
  activity feed con heatmap, file/memory browsing, ricerca semantica
- **Nota:** usa R3F come isaac-mason — lo spazio 3D e' integrato nell'UI, non e' il
  centro dell'esperienza

### 3c. Variante enterprise (abhi1693/openclaw-mission-control)

- **Stack:** Next.js + React (TypeScript 55%) + Python backend (42%) + Docker Compose
- **Estetica:** Kanban board, flussi di approvazione, org chart, audit log temporale
- **Dati:** stati agenti, task boards, approval queue, gateway status, timeline azioni
- **Connessione:** WebSocket a Gateway OpenClaw :18789 + auth bearer/JWT

### 3d. Variante local GUI senza CLI (robsannaa/openclaw-mission-control)

- **Stack:** Next.js + React + Tailwind + Playwright (test)
- **Layout:** dashboard multi-sezione con nav laterale
- **Features:** chat streaming agente, Kanban backlog→done, cron scheduler, usage tracking
  per modello, org chart interattivo degli agenti, memory management + vector search,
  terminal multi-tab integrato, gestione canali messaggeria
- **Filosofia:** "a window into OpenClaw" — zero storage proprio, tutto da OpenClaw

### 3e. Build prompt virale (bdennis-dev gist)

Il build prompt piu' circolato sui social descrive una dashboard con:
- Dark palette: `#0A0A0F` background, `#1A1A2E` cards, accent blue/green/purple/red
- 3 sezioni: Feed (timeline reverse-cronologica con filtri e color-coding), Calendar
  (grid weekly cron), Search (ricerca parallela su memories/files/conversations/tasks)
- Banner agente in header sempre visibile con pulsing dot per agenti attivi
- Auto-refresh 30s, gateway health polling 30s

---

## 4. Cosa si eredita per la plancia navicella

### Il registro estetico di AndrooAGI

Dal video virale e dalle ricostruzioni: spazio visivo dove **ogni agente e' una entita' con
presenza** — non un log testuale, non una card, ma una postazione. La mission control e' un
ambiente, non un cruscotto. Questo e' il salto rispetto a blockhouse (minifig pixel-art come
personaggi di un gioco, ma ancora bidimensionali e statiche).

Cosa vale la pena ereditare concretamente:

| Elemento | Da AndrooAGI/ecosystem | Applicazione navicella |
|---|---|---|
| Presenza spaziale degli agenti | ogni desk = un agente (TenacitOS voxel, AndrooAGI ufficio) | ogni nodo del grafo = un agente attivo/dormiente |
| Status visivo vivo | pulsing dot, countdown refresh, color badge | archi del grafo che si accendono durante output |
| Dark palette emissiva | #0A0A0F bg, accenti colorati per tipo | sfondo nero, connessioni al colore del modulo (blu accademico, verde personale) |
| Feed reverse-cronologico | activity timeline con color-coding | log di output degli agenti come impulso sul grafo |
| Costo visibile | cost card sempre in header | sessione corrente: token spesi / budget |
| Agent hierarchy come grafo | robsannaa ha org chart interattivo | la vis-network gia' costruita e' esattamente questo |

### Il delta rispetto alla plancia attuale

La plancia blockhouse ha: 6 minifig 2D, canvas pixel-art, POST a FastAPI, stato statico.
Quello che manca e che AndrooAGI ha (e che rispecchia la visione "cervello vivo"):
- Gli agenti *reagiscono* visivamente mentre lavorano (pulsing, animazione, colore)
- Lo spazio e' organizzato topologicamente (relazioni, non griglia)
- L'attivita' in corso e' leggibile a colpo d'occhio senza aprire log

---

## 5. Verdetto onesto per Dedalo

**AndrooAGI e' il riferimento giusto per il "cosa"** — il registro mission control,
la presenza spaziale degli agenti, la paletta dark emissiva, lo status vivo — e' esattamente
quello che Giuseppe aveva in mente quando ha detto "diversa da blockhouse".

**Il problema di AndrooAGI come fonte tecnica diretta:** nessun repo pubblico, nessun
codice, solo video TikTok inaccessibili senza login. Non si puo' forkare. Si eredita
la visione, non l'implementazione.

**Per il "come"**, l'ecosistema community (robsannaa, TenacitOS, mudrii) da' piu' materia
concreta. Il candidato piu' interessante per la navicella e' la via di mezzo tra:
- TenacitOS (estetica OS + 3D R3F + avatar agente) per il registro visivo
- robsannaa (Next.js + Tailwind + grafo org chart + zero cloud) per la struttura dati

**isaac-mason** (vedi `06-isaac-mason-plancia.md`) resta rilevante come sorgente di
*tecniche singole* se la decisione di Dedalo porta verso 3D — il suo sketch
`d3/force-directed-graph` (D3 + R3F) e il suo `boids` (flocking GPU) sono le
implementazioni piu' pulite disponibili per effetti "sinapsi animate" e "nodi che si
attraggono". Ma non e' il modello ispirazionale: AndrooAGI lo e'.

**La vis-network gia' costruita** (grafo memoria) e' il punto di continuita' piu' forte:
il passo naturale non e' buttarla via ma *animarla* — archi che si accendono via SSE/WebSocket
quando un agente scrive, nodi che pulsano, palette dark emissiva. Questo e' esattamente
il pattern che AndrooAGI ha mostrato, che TenacitOS ha implementato in 3D, e che la
plancia navicella puo' raggiungere restando su vis-network (2D) o migrando a R3F (3D).

---

## Fonti

- TikTok @androoagi — https://www.tiktok.com/@androoagi (login required, video: 7636984528522824991)
- github.com/abhi1693/openclaw-mission-control — enterprise Kanban + governance
- github.com/mudrii/openclaw-dashboard — zero-dep glass morphism, 12 pannelli
- github.com/robsannaa/openclaw-mission-control — local GUI Next.js + org chart
- github.com/carlosazaustre/tenacitOS — OS-style + React Three Fiber + voxel agents
- gist.github.com/bdennis-dev/6ddd4d0647a90d3f72db64825ed50d66 — build prompt virale
- genesi-navicella.md sezione V — contesto originale AndrooAGI nella navicella
- archivio-fondazione.md voce 2026-06-06 — decisione plancia 2D

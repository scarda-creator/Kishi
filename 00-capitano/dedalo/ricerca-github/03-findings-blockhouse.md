---
type: ricerca
---

# Findings — iriseye931-ai/blockhouse — 2026-07-11

Scouting su commissione di Dedalo. Domanda centrale: blockhouse è una base
praticabile per visualizzare la navicella su PC (Windows, no GPU), o è un
vicolo cieco?

---

## 1. Modello di eventi — LA domanda critica

**Protocollo:** push HTTP. I hook di Claude Code inviano un POST a
`http://127.0.0.1:8000/api/crew/hook` tramite curl, configurato in
`~/.claude/settings.json`. Blockhouse non fa polling — riceve.

**Formato JSON atteso** (tutti i campi opzionali, fallback su `.get()`):
```json
{
  "hook_event_name": "PreToolUse",
  "tool_name": "Bash",
  "tool_input": { ... },
  "cwd": "/path/to/project"
}
```

**Event types gestiti:**
- `SessionStart` → stato "thinking"
- `UserPromptSubmit` → stato "thought" (prompt ricevuto)
- `PreToolUse` → stato "working"
- `PostToolUse` → aggiorna timestamp, nessuna emissione visiva
- `Notification` → stato "waiting"
- `Stop` / `SubagentStop` / `SessionEnd` → stato "idle"

**Questo campo `hook_event_name` corrisponde esattamente al campo
`hook_event_name` che Claude Code inietta nativamente nei payload hook.**
Non serve adattatore per gli eventi base. Il curl command di configurazione è
copiabile letteralmente da settings.json.

**Log tailing:** separato e specifico. `run_hermes_feed()` fa polling ogni 2
secondi su `~/.hermes/logs/agent.log` con formato testuale proprietario
`timestamp source level [session] logger: message`. I nostri log JSONL non
combaciano — servirebbero un adattatore o il rimpiazzo di questa funzione.
Per i soli eventi hook (senza log tailing), zero adattamento.

**Verdetto modello eventi:** compatibile out-of-the-box per gli hook Claude
Code. Incompatibile per il log tailing (se serve).

---

## 2. Modello degli agenti / "crew"

**Hardcoded nel frontend.** Tre strutture dati in
`frontend/src/components/CrewStage.tsx`:

```typescript
const SKINS: Record<string, AgentSkin>   // colori, glow
const ANCHORS: Record<string, {x, y, flip}>  // posizione assoluta su canvas
const CALLSIGNS: [string, string][]       // id → label visiva
```

Agenti di riferimento: **due** (Claude + Hermes). Canvas loop esplicito:
`for (const id of ['claude', 'hermes'])`.

**Per mappare i 6 agenti della navicella** (Mnemosyne, Dedalo, Rapsodo,
Demiurgo Accademico, Demiurgo Creativo, Argonauta): occorre riscrivere
SKINS + ANCHORS + il loop di rendering + i click handler + la logica di
posizionamento delle speech bubble. Non è configurazione — è modifica del
codice React in più punti dello stesso file. Non data-driven, non
un'operazione di config.

**Quantificazione:** aggiungere 4 agenti richiede modifiche chirurgiche ma
distribuite su un singolo file. Non è una riscrittura dell'architettura, ma
non è neanche un parametro da cambiare.

---

## 3. La plancia GO/NO-GO

Pilotata da health check su servizi definiti nel backend (config.py + .env).
Labels di riferimento: VIKING, MEMORY, COMMS — hardcoded sulla nomenclatura
del mesh Hermes/OpenViking. Ogni cella è cliccabile per dettaglio live.

Lo stato GO/NO-GO per ogni servizio dipende da health check configurabili
(`backend/config.py`). Le label dei servizi in config.py sono modificabili
senza toccare il frontend. **Semi-configurabile:** i servizi si ridefiniscono
nel backend, ma se il frontend renderizza le label come testo dinamico (da
API) è adattabile senza codice; se sono hardcoded anche lì, servono due
modifiche. Non determinabile con certezza dai file pubblici se le label
arrivano da API o sono costanti frontend.

---

## 4. Rischio piattaforma — Windows / MLX

**MLX non è in `requirements.txt`.** Le dipendenze Python di blockhouse sono:
`fastapi`, `uvicorn[standard]`, `httpx`, `python-dotenv`, `psutil`,
`python-multipart` — tutte cross-platform, girano su Windows senza problemi.

**MLX riguarda il modello locale** (Qwen su Apple Silicon) usato dall'agente
Hermes che blockhouse monitora — è esterno a blockhouse stesso. Il README
cita esplicitamente Ollama e llama.cpp come sostituti swappabili. Per la
navicella, che usa Claude Code (non un LLM locale) e non ha Hermes, questa
componente non entra neanche in gioco.

**Frontend:** React 19 + Vite + npm. Gira su Windows senza problemi.

**Conclusione piattaforma:** il topic `mlx` nei metadati GitHub è fuorviante.
Blocca Hermes, non blockhouse. Nessuna dipendenza Apple-only nel codice di
blockhouse. **Non è un kill-switch.**

---

## 5. Adattabilità / accoppiamento — licenza

**Licenza: MIT.** Uso, modifica e distribuzione liberi con attribuzione.

**Accoppiamento:** basso a livello di protocollo (hook via curl, evento JSON
standard), medio-alto a livello di frontend (crew hardcoded, layout Canvas
per 2 agenti).

**Adattamento vs riscrittura:**

| Componente | Operazione |
|---|---|
| Hook receiver backend | Adattamento: zero codice, solo settings.json |
| Log tailing (Hermes) | Adattamento: rimpiazzare `run_hermes_feed()` con lettore JSONL |
| GO/NO-GO services | Adattamento: ridefinire in config.py |
| Crew frontend (2→6 agenti) | Riscrittura parziale: SKINS + ANCHORS + loop Canvas in CrewStage.tsx |
| Callsigns / labels | Adattamento: costanti nel file |
| Pixel-art rendering | Riscrittura se vuoi stile diverso; adattamento (colori/glow) se tieni il look |

Il backend è adattabile in poche ore. Il frontend richiede una sessione React
dedicata per portare i 6 agenti con posizionamento corretto.

---

## 6. Asset pixel-art

Il rendering minifig è interamente **Canvas 2D in TypeScript** — non sprite
PNG. Non ci sono asset bitmap da sostituire. Il "look" è parametrizzato via
`SKINS` (accent color, shade, glow CSS). Cambiare l'aspetto visivo di un
agente = cambiare 3 valori nel dizionario SKINS. Costruire un minifig
stilisticamente diverso = riscrivere le funzioni di disegno Canvas.

**Controllo estetico:** pieno a livello di colori/glow con modifiche minime.
Parziale se vuoi forme diverse (richiede Canvas code). Non dipendi da asset
esterni — non c'è un'art directory da sfogliare o sostituire.

---

## 7. Maturità

- **16 stelle, 5 fork.** Progetto personale/showcase, non un framework
  mantenuto dalla community.
- **0 issue** (e creazione issue disabilitata). Segnale ambivalente: o non
  ci sono bug noti, o non è in uso abbastanza da generare feedback.
- **Changelog presente** (`CHANGELOG.md`) — suggerisce iterazioni deliberate,
  non un dump unico.
- **Attività recente:** non determinabile dai file pubblici. Nessun badge
  "last commit" visibile nel fetch.
- **Usabilità:** il codice è strutturato (FastAPI con router separati,
  React con Zustand), non è spaghetti. Ma è costruito per un setup specifico
  (Claude Code + Hermes + OpenViking su Mac). Fuori da quel setup, funziona
  come base — non come strumento pronto all'uso.

---

## Verdetto di fattibilità su Windows

**GIALLO**

Blockhouse gira su Windows senza modifiche al codice base (backend
cross-platform, frontend npm standard, nessuna dipendenza Apple-only).
Il problema non è la piattaforma — è il **frontend hardcoded per 2 agenti**.
Portare i 6 agenti della navicella richiede una sessione di riscrittura React
(CrewStage.tsx), non un'installazione. Non è un vicolo cieco: è lavoro
frontend deliberato.

---

## Adattamento vs riscrittura — sintesi

**Adattamento (ore, non giorni):**
- Hook backend: settings.json con curl command già pronto
- Service labels GO/NO-GO: config.py
- Callsigns agenti: costanti in un file
- Log reader: rimpiazzare una funzione con lettore JSONL

**Riscrittura parziale (una sessione React):**
- CrewStage.tsx: aggiungere 4 agenti con SKINS + ANCHORS + loop Canvas

**Non determinabile dai file pubblici:**
- Se le label GO/NO-GO nel frontend arrivano da API (adattamento) o sono
  costanti hardcoded (seconda modifica frontend)
- Data dell'ultimo commit / attività recente del maintainer

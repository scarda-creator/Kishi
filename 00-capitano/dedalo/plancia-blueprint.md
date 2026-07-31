---
type: spec
---

# Blueprint — La plancia come sostituto totale del terminale

> Blueprint operativo di Dedalo. Aperto 2026-07-13 su "procedi" di Giuseppe, dopo che ha
> fissato la visione e lo scope. È la struttura della visualizzazione-PC. Il codice della
> Fase 0 (Agent SDK) va scritto dai doc ufficiali `code.claude.com/docs/en/agent-sdk`,
> NON a memoria.

## Scope (deciso da Giuseppe, non negoziabile)

La plancia-PC è il **sostituto TOTALE del terminale**, non un cruscotto che guarda il lavoro.
L'obiettivo è **spostare il lavoro effettivo** dal terminale alla plancia: si lavora lì. La
versione più ambiziosa, scelta consapevolmente.

## La visione (di Giuseppe)

Una **navicella 2D vista dall'alto** — la nave vera, in pianta. Divisa in **stanze** dedicate ai
vari scopi e ai vari agenti:
- Una stanza per ogni agente.
- Nella stanza dei due attivi (Mnemosyne + Dedalo) c'è anche lo **spazio chat**.
- In una **stanza sotto**, il **cervello della nave**: tutte le memorie e le linee guida, divise
  nei **5 livelli** (L1→L5). È l'**archivio sempre consultabile**.
- Registro alla **AndrooAGI**: mission control come *ambiente* dove ogni agente è una presenza
  spaziale, non una riga di log (rif. `ricerche-argonauta/06-androoagi-plancia.md`).

## PC vs mobile (correzione di Giuseppe, 2026-07-13)

NON sono "due relazioni" (fuori/dentro): è **una sola funzione — lavorare con la navicella — in
due grammatiche visive**. Sul PC la navicella spaziale con cui interagisci (stanze dall'alto); su
mobile la stessa cosa in verticale, pragmatica. Stessi usi, resa diversa. Questo **corregge** la
cementata "due relazioni non due dimensioni" (→ Mnemosyne ri-cementi in memoria).

## La spina tecnica — il pezzo che decide tutto

Sostituire il terminale = la plancia deve **ospitare una sessione vera di Claude Code e mostrarla
tutta**: chat, tool (Read/Write/Edit/Bash/Glob/Grep), permessi, streaming, dispaccio dei passivi.
Il ponte supportato è il **Claude Agent SDK** (`claude-agent-sdk`, Python — coerente col backend
FastAPI). NON è l'API Messages e NON sono i Managed Agents: è **Claude Code impacchettato come
libreria** — `query(prompt, options)` guida il loop dell'agente, i tool built-in, la gestione del
contesto, gli hook, i **sub-agenti**, i **permessi (incluso `bypassPermissions`)**, le sessioni, e
carica **CLAUDE.md** e il contesto del progetto. È letteralmente il terminale come libreria che
ospitiamo noi — l'equivalente della Gateway OpenClaw che AndrooAGI pilota.

```
[Frontend plancia — stanze dall'alto, React/Vite (fork esistente)]
   · Stanza dei due attivi: CHAT (input + output streamato di Mnemosyne/Dedalo)
   · Stanze dei passivi: si accendono quando un sub-agente (Task) è dispacciato; mostrano i suoi tool
   · Stanza-cervello (sotto): browser dei 5 livelli di memoria, sempre consultabile
   · Stato vivo: agente attivo, tool corrente, token/budget
        │  WebSocket (websocket_manager + event_bus GIÀ esistenti)
[Backend plancia — FastAPI :8000 (fork esistente)]
   · Guida una sessione Claude Agent SDK (carica CLAUDE.md, memoria, tool, bypass)
   · Strema messaggi/tool-use → frontend; instrada l'input chat → sessione
   · Rende il dispaccio di un sub-agente → nella stanza giusta
   · Espone i file di memoria L1-L5 alla stanza-cervello (lettura + ricerca)
        │
[Sessione Claude Agent SDK — il motore vero: tool, bypass, memoria, sub-agenti]
```

Le stanze non sono cosmetiche: ognuna mappa una cosa reale che la sessione produce. La stanza degli
attivi = la conversazione principale. La stanza di un passivo si accende quando parte un Task
(sub-agente), mostrando i suoi tool-use. La stanza-cervello = i file di memoria, vivi.

## Cosa si eredita dalla plancia esistente vs cosa si ricostruisce

**Eredito (fork `AgentsAI/plancia/`):**
- Backend FastAPI con router `chat`, `sessions`, `permissions`, `crew`; `websocket_manager.py` +
  `event_bus.py` (streaming già cablato); `state.py`, `config.py`.
- Frontend React/Vite/Tailwind/shadcn: `CrewStage.tsx` (i 6 minifig), `useWebSocket.ts`,
  `dashboardStore.ts` (zustand), `types/`.
- Gli hook di Claude Code che già postano gli eventi al backend (attribuzione Task funzionante).

**Ricostruisco:**
- Il *motore*: il router `chat` oggi è scaffolding; va cablato a una **sessione Agent SDK reale**
  (oggi non pilota Claude Code, è un guscio).
- Il *corpo*: da "stage a 6 minifig" a **stanze dall'alto** — pianta della nave, stanza-cervello,
  chat nella stanza degli attivi. Il pixel/minifig è motore, non pelle: lo stile lo ridisegno.

## Fasatura (la spina prima, non le stanze)

Raccomandazione forte e controintuitiva: **non costruire prima le stanze.** Le stanze sono sicure e
non possono fallire; il pezzo che può *uccidere* la visione è uno solo — la chat che pilota davvero
la sessione, con tool e bypass, dalla plancia.

- **Fase 0 — la spina — FATTA E DIMOSTRATA (2026-07-13).** `plancia/backend/spina.py`: classe
  `Spina` che pilota un `ClaudeSDKClient` (`cwd`=navicella, `bypassPermissions`,
  `setting_sources=["project","user"]`, model leva) e traduce i messaggi dell'SDK in eventi-stanza
  (`event_from`: 'attivi' vs 'passivo' via `parent_tool_use_id`). Test `spina_test.py` PASSATO:
  la sessione si connette sull'abbonamento, risponde CHI È la navicella citando il CLAUDE.md
  (= Mnemosyne/Dedalo con la navicella caricata), usa Bash e **crea un file senza chiedere permessi**
  (bypass reale), i veri hook della navicella girano, gli eventi escono etichettati per stanza.
  RESULT success, 2 turni, ~0.20$ API-equivalenti (budget abbonamento, non addebito). Il "sostituto
  totale" è dimostrato a livello di plumbing: restano le stanze (Fase 1), non più incognite.

  **Meccanismo CONFERMATO dai doc ufficiali (2026-07-13):**
  - Pacchetto Python: `claude-agent-sdk` (`pip install claude-agent-sdk`, Python ≥3.10).
  - Core: `from claude_agent_sdk import query, ClaudeAgentOptions`; `async for message in
    query(prompt=..., options=ClaudeAgentOptions(...))`. Per la persistenza della chat:
    `ClaudeSDKClient` o `query(..., options=ClaudeAgentOptions(resume=session_id))` — il
    `session_id` arriva nel `SystemMessage` subtype `init`.
  - Streaming: si itera il generatore async — `AssistantMessage` (testo + tool_use), `ResultMessage`
    (result). Si stremano al frontend via il `websocket_manager` esistente.
  - Permessi: `ClaudeAgentOptions(permission_mode="bypassPermissions")` — le mani libere del patto,
    native nell'SDK.
  - **La scoperta che avvicina tutto:** l'SDK carica la config filesystem di Claude Code dal
    `cwd` (`.claude/` + `~/.claude/`, controllabile con `setting_sources`). Girando la sessione con
    **cwd = `AgentsAI/`**, arrivano GRATIS: `CLAUDE.md` (chi è la navicella), i **passivi**
    (`.claude/agents/*.md` = Argonauta/Rapsodo/Demiurghi), le **skill** (`.claude/skills/`). La chat
    della plancia *è* già Mnemosyne/Dedalo con la navicella intera, non un'API spoglia.
  - Sub-agenti: i messaggi dentro un sub-agente portano `parent_tool_use_id` → è la chiave per
    accendere la stanza del passivo giusto.
  - **AUTH — VERIFICATA (2026-07-13), cancello VERDE:** l'Agent SDK gira **sull'abbonamento**, non a
    consumo. Prova empirica: `claude-agent-sdk` 0.2.116 nel venv della plancia, `query()` banale con
    `ANTHROPIC_API_KEY` NON impostata → ha risposto `ok` usando l'auth della CLI Claude Code (OAuth
    abbonamento). Nello stream è arrivato un `RateLimitEvent` = conteggio del rate-limit
    dell'abbonamento, non fatturazione API. Conclusione: la plancia consuma dagli **stessi token del
    terminale** (stesso portafoglio, stesso rate limit), zero spesa aggiuntiva. Condizione: nessuna
    chiave API in env + `claude` loggato. La policy "SDK usa API key" vale per chi *distribuisce* un
    prodotto a terzi, non per l'uso personale locale. Script prova: scratchpad/auth_probe.py.
- **Fase 1 — la nave prende forma. [IN CORSO]**
  - **[FATTO 2026-07-13] Cablaggio websocket.** `plancia/backend/spina_service.py`: una Spina
    condivisa (singleton, `_lock` = una conversazione per volta), broadcast ai client via
    `state._ws_clients`, `handle_user_message` che eco+strema. `main.py` `/ws` instrada i frame
    `{type:"user_message",text}` alla Spina (non blocca la ricezione); lifespan chiude la Spina.
    Test `plancia/ws_test.py` PASSATO: client ws → messaggio → risposta di **Mnemosyne in prima
    persona** (dal CLAUDE.md) streamata al client, RESULT success. La chat esce dal browser, non
    dal terminale. Model via env `PLANCIA_MODEL` (opus in produzione, sonnet nel test).
  - **[DA FARE] Le stanze dall'alto** (frontend React, riworkare `CrewStage.tsx`) + la
    **stanza-cervello** (i 5 livelli sfogliabili + ricerca via `memoria-cerca.py`) + stato vivo.
    Qui `parent_tool_use_id` accende la stanza del passivo dispacciato.
- **Fase 2 — inghiotte il terminale.** Tool renderizzati *dentro* le stanze (file toccati, bash,
  passivo che si accende), permessi nella GUI, finché non serve più il terminale per niente. Lì la
  sostituzione è totale — guadagnata, non dichiarata.

## Confini di ruolo

- **Forma/identità/senso = Giuseppe** (direttore creativo). Ha dato la visione; la lancia e la
  controlla lui.
- **Struttura/esecuzione = Dedalo.** Progetto e costruisco. Sotto `bypassPermissions`, mani libere
  sull'esecuzione — ma la direzione resta sua.
- **Memoria = Mnemosyne.** La stanza-cervello *legge e mostra* L1-L5; qualunque scrittura/ingestione
  in memoria resta protocollo di Mnemosyne. Io espongo, non canonizzo. L5 non va mai in chiaro fuori
  dalla macchina (patto).

## Rischi aperti (onesti)

- **La spina è il 20% difficile che vale l'80%.** Session management, streaming del tool-use nella
  GUI, gestione dei permessi in interfaccia: è lì il lavoro vero, non nelle stanze.
- **L'Agent SDK va verificato**, non assunto: la Fase 0 parte confermando il meccanismo dai doc.
- **Sostituzione totale = incrementale, non un flip.** Finché la spina non regge tutto (tool, edit,
  bypass, dispaccio), il terminale resta il motore e la plancia cresce fino a inghiottirlo.

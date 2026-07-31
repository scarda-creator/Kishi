---
type: stato
---

# Dedalo — registro di cantiere (la schiusura)

> Il file dove Dedalo accumula storia dei moduli/capacità costruiti. Aperto 2026-07-11
> quando Giuseppe ha chiesto la "schiusura dell'uovo": implementare il codice delle 44 fonti
> nella navicella, in profondità, su più sessioni. Ancorato alla presentazione v2
> (`dedalo/ricerca-github/presentazione-v2.html`) e alle roadmap.

## Principio di implementazione
Non droppare le repo così come sono: **adattarle native alla navicella**, informato dal
loro codice vero (come `token_diagnostica.js` è nato guardando codeburn). La navicella ha
già una sua architettura (5 livelli di memoria, agenti, protocolli): il codice esterno si
traduce nei suoi termini, non la sovrascrive. Confini di ruolo rispettati: dove tocca la
memoria/chi-è-Giuseppe guida Mnemosyne; io costruisco la struttura.

## Codice portato in casa
`C:/Users/ACER/Desktop/schiusura-repos/` (fuori dalla navicella, come i mirror quiz):
claude-reflect · NadirClaw · ask-local · claude-remember. (Altri via via.)

## Programma per apparati (dalla v2)

### Apparato A — Metabolismo (routing + delega locale)  ·  PARCHEGGIATO fino alla GPU (13-07)
> Disegno provato e funzionante, ma su CPU non ne vale la pena (lento, token-limitato, fragile
> sulle formule). Decisione di rotta di Giuseppe 13-07: default TUTTO CLAUDE; cloud-economico solo
> se c'è guadagno reale (corpus grande/ripetuto); riaccensione con la GPU. Dettaglio+regola in
> `dedalo/apparato-A-metabolismo.md` (sez. STATO). Non riaccendere il locale senza nuova direttiva.
- [x] Diagnostica nativa: `scripts/token_diagnostica.js` (fatto 07-11). Snapshot in `dedalo/apparato-A-metabolismo.md`.
- [x] Mappa di routing progettata dai dati (Opus 5,26M out domina; 386M cache-read).
- [x] **Giuseppe ha acceso il locale (07-11): Ollama + `qwen2.5:7b` e `deepseek-r1:7b`; API key OpenRouter (in env `OPENROUTER_API_KEY`, User registry, MAI su file/repo).**
- [x] **PROVA SUL CAMPO — due tier economici vivi e misurati (07-11):**
      - Tier LOCALE (Ollama qwen2.5:7b, **100% CPU, no GPU**): ~7000 ms/classificazione a caldo, 0 token Claude, privato. 6/6 corretti. → strumento da **batch/background** e per lavoro L5-adjacent (non lascia la macchina).
      - Tier CLOUD (OpenRouter qwen-2.5-7b): ~1600 ms/classificazione, costo frazioni di centesimo, veloce. 3/3 corretti. → per bulk **non sensibile** che vuole velocità (MAI L5: lascia la macchina).
      - Sintesi: il gate-privacy L5 mappa sui due tier (locale=privato+lento, cloud=veloce+esterno). Il pavimento 7s è hardware (CPU) → conferma «RTX 5090 quando il Business paga»: il metabolismo è reale ma latency-limited finché C non finanzia la GPU.
- [ ] Ruvidezza da smussare in `esegui-locale.py`: su errore HTTP (es. 401 cloud) il messaggio dice "avvia Ollama" — fuorviante, va distinto HTTP-status da endpoint-irraggiungibile.
- [ ] Costruire i profili-esecutore successivi (estrattore, normalizzatore, dedup) oltre al classificatore.
- [ ] Girare le stringhe-modello degli agenti secondo la mappa, un agente alla volta, misurando prima/dopo.

### Apparato B — Sistema nervoso (memoria che impara e comprime)  ·  IN CORSO
- [x] **Auto-apprendimento correzioni (da claude-reflect) — COSTRUITO E TESTATO (07-11).**
      Hook `cattura-apprendimento.py` (UserPromptSubmit, pattern italiani, coda grezza) +
      `promemoria-coda.py` (SessionStart). Registrati in `.claude/settings.json` (attivi al
      prossimo riavvio di Claude Code). Lato Mnemosyne: `protocollo-riflessione.md` + comando
      `/riflessione`. Confine rispettato: l'hook cattura il grezzo, Mnemosyne interpreta/scrive,
      L4/L5 solo con conferma di Giuseppe. Test: correzioni/preferenze/"ricorda" catturati,
      domande/comandi ignorati.
- [x] **Compressione — MOTORE COSTRUITO E TESTATO (07-11).** `comprimi.py` usa Haiku via
      `claude -p` (stesso account, centesimi): modo *compressione* (non distruttiva ~35-50%,
      testato 381→182 char) e *sintesi* (handoff lossy). `--archivio` = niente oblio. Diagnostica
      ha rivelato che il peso (386M cache-read) è delle SESSIONI lunghe, non dei file statici
      (leggeri). Protocollo `protocollo-compressione.md`: la applicazione alle sessioni è di
      Mnemosyne. Motore mio, policy sua.
- [x] **Instincts (da affaan-m/ECC) — COSTRUITO E TESTATO (07-11).** `scripts/instinct.py` +
      store `instincts.jsonl`. Asse apprendimento IMPLICITO: pattern ripetuti → confidenza (funzione
      pura del n° prove) → maturazione. Due fasi: `osserva` meccanico (Dedalo, sovra-divide di
      proposito) / `fondi`+`matura` interpretativo (Mnemosyne). Confine: non scrive mai in memoria,
      `ipotesi` null finché non la scrive lei. Test end-to-end OK.
- [x] **Progressive disclosure (da claude-mem) — COSTRUITO E TESTATO (07-11).** `scripts/memoria-cerca.py`:
      mappa indice→dettaglio. Misurato: mappa di TUTTA la memoria = 100 file → ~14KB. `--mappa/--query/--dettaglio`.
- [x] **Protocollo-riflessione CRESCIUTO (non sostituito, richiesta di Giuseppe):** sezione "Gli
      istinti — l'asse implicito" con la fase-Mnemosyne (lista/fondi/candidati/matura).
- [x] **#14 awesome-llm-token-optimization "preso tutto":** 5 tecniche mappate a leve (routing=A,
      compressione=comprimi, retrieval=memoria-cerca, cache-prefix=pratica, batching=pratica). Vedi `dedalo/apparato-B-completo.md`.
- [ ] **Frontiera:** iniezione della MAPPA (~3-4K token) a SessionStart invece del contesto pieno
      (aggancio: promemoria-coda.py). Tocca struttura (Dedalo) + policy (Mnemosyne). = la "mappa di contesto" di Giuseppe.
- [ ] Upgrade A↔B: raggruppatore semantico dei segnali via esecutore locale (quando la coda avrà dati veri).
- [ ] Reference→destino (risposta a Giuseppe): prompt-leak repos = miniere per i profili-locali; awesome-list = terreni di caccia dell'Argonauta. In `apparato-B-completo.md §5`.

### Apparato C — Business (il motore della libertà)  ·  DA APRIRE
- [ ] Modulo Business completo (Demiurgo Business, `03-business/`, comandi) — mio mandato,
      pronto per lo spec in `roadmap-architetto-business.md`. Struttura ora, "acceso" post-esame.
- [ ] Braccio contenuti (OpenMontage, viral-reel-maker) come tool del Demiurgo Business.

### Apparato D — Organi accademici  ·  DA APRIRE
- [ ] paper-qa come MCP dell'Argonauta. Stack fisica JAX come skill/agente-laboratorio.

### Apparato E — Il corpo  ·  DIFFERITO
- [ ] Esistenza autonoma (con Mnemosyne). GUI Tauri+Svelte. Godot MCP per il gioco.
- [DECISO 07-11] **Visualizzazione-PC = fork di iriseye931-ai/blockhouse** (MIT, scoutato dall'Argonauta:
  `dedalo/ricerca-github/03-findings-blockhouse.md`). Verdetto Windows GIALLO (gira, no dep Apple: mlx era
  di Hermes). Due strati: (a) NERVOUS SYSTEM adottato out-of-the-box — hook Claude Code via POST a
  localhost:8000, formato `{hook_event_name,tool_name,...}` combacia col nostro nativamente, eventi→stati
  agente già sensati; (b) CORPO ridisegnato da me — frontend cablato a 2 agenti (claude+hermes), i nostri 6
  richiedono una sessione React su CrewStage.tsx (SKINS/ANCHORS/loop Canvas); i minifig sono Canvas 2D non
  PNG → controllo estetico pieno, il pixel-art NON mi vincola (motore ≠ pelle). GO/NO-GO resemantizzato a
  stato-apparati/prontezza-sessione. Log-tailing Hermes = rimpiazzabile (opzionale, l'hook-push basta).
  Caveat: showcase non mantenuto → forkare e possedere. BUILD post-AV (apparato E, differito). Scioglie la
  tensione pixel-art vs line-art: eredito l'architettura, non lo stile.
- [COSTRUITO 07-12] **La PLANCIA gira** (Giuseppe ha anticipato: "costruisci fino al completamento").
  Fork in `AgentsAI/plancia/` (upstream in `schiusura-repos/blockhouse`). Backend FastAPI riscritto minimale
  (crew a 6 agenti + attribuzione Task + board apparati + telemetria psutil) su :8000; frontend React
  riscritto (CrewStage 6 minifig con etichette canvas, App minimale) su :3000 via `npm run dev`, proxy
  Vite→:8000. Tagliata la casa-Hermes (mesh/RAG/AMP/MLX). Hook curl→/api/crew/hook cablati in settings.json
  (7 eventi, async). VERIFICATO: backend gira su Windows, attribuzione hook 9/9, moduli transpilano puliti,
  proxy risponde, pipe-test hook accende l'equipaggio. NON verificato il rendering in browser (no headless
  qui) — prova visiva al 1° avvio. Doc: `plancia/PLANCIA.md`. Va RIAVVIATA a ogni sessione (processi non
  persistono). Restano: ridisegno estetico minifig, beam dispaccio, plancia come àncora oroboro.

## Log
- 2026-07-25 (notte) — **OmniRoute: visione d'incorporazione, non incorporazione.** Giuseppe (via
  Mnemosyne, che mi ha passato il timone) mi ha chiesto di prendere OmniRoute e incorporarlo in
  autonomia, dormendo. È un router LLM local-first (MIT, 29k★, `localhost:20128`, endpoint
  Anthropic-compat, routing selettivo per-request). Tocca 3 cementate (ToS abbonamento, gate-L5,
  apparato A parcheggiato da me il 13-07) → **non l'ho incorporato**: è rotta. Ho fatto il
  preparatorio pieno: studio architettura (senza clonare i 322 MB) + progetto la forma nativa
  (metabolismo SELETTIVO dei passivi/bulk col bisturi `X-Route-Model`, attivi su Claude vero, L5
  blindato). Aggancio alla traiettoria: è l'apparato A **senza il pavimento CPU** per cui l'avevo
  spento → scioglie il session-limit, il vincolo vero. Gate n.1 = ToS (proxy sull'OAuth
  abbonamento). Visione completa: `dedalo/omniroute-visione.md`. Decisione a Giuseppe.
- 2026-07-11 — Avvio schiusura. Diagnostica costruita e girata. Codice A/B clonato. Inizio da claude-reflect (apparato B).
- 2026-07-11 (seguito) — Mnemosyne ha confermato l'hook di auto-apprendimento vivo (test positivo, coda ripulita): apparato B schiuso per intero. Giuseppe ha acceso Ollama (2 modelli) + OpenRouter. Prima prova sul campo del metabolismo: esecutore-classificatore misurato su entrambi i tier (locale CPU ~7s/0-token; cloud ~1.6s/quasi-gratis), 9/9 corretti in totale. Apparato A passa da "aspetta Giuseppe" a "PROVATO". Hardware: Acer senza GPU → locale è batch/background.
- 2026-07-11 (seguito 3) — Branch parallelo: Mnemosyne ha ratificato il lato-memoria (`mnemosyne-revisione-apparatoB.md`), confine "regge su tutti e tre". 4 rifiniture applicate a instinct.py/protocollo: MIN_PROVE annotato come guardia secondaria (il vincolo vero e' conf>=0.75 => n>=5), decay 0.01->0.005 (pattern lenti di Giuseppe), fondi non eredita 'maturo' in silenzio (avverte + ri-valuta), nota L5 nel protocollo. Verificato il fix fondi-maturo.
- 2026-07-12 — Bilancio 44 fonti (`dedalo/schiusura-bilancio-fonti.md`). Business v2 (`dedalo/business-visione-v2.md`): volano dell'autonomia, verticale-fisica proposto (decisione di Giuseppe in sospeso). blockhouse scoutato+deciso+COSTRUITO (la plancia, apparato E, gira). **Patto di autonomia esecutiva CEMENTATO** (CLAUDE.md + memoria): bypassPermissions, ma direzione/identità/struttura restano di Giuseppe, mai meccaniche — "mani libere, rotta no". Oroboro: non esiste (fallito a luglio), da costruire = compito di Mnemosyne, con plancia come àncora + bypass come gamba-permessi. Bypass e hook-plancia si attivano al prossimo riavvio Claude Code.
- 2026-07-13 (seguito) — Visualizzazione-PC: Giuseppe fissa la visione (navicella 2D dall'alto, stanze
  per agente, chat nella stanza dei due attivi, stanza-cervello coi 5 livelli di memoria come archivio
  sempre consultabile, registro AndrooAGI) e lo SCOPE: **sostituto totale del terminale**. Corregge il
  PC/mobile: stessi usi, due grammatiche visive (→ Mnemosyne ri-cementi "due relazioni"). Spina tecnica
  identificata e verificata via skill: **Claude Agent SDK** (`claude-agent-sdk`, non l'API né i Managed
  Agents) = Claude Code come libreria (tool built-in, loop, hook, sub-agenti, bypassPermissions, carica
  CLAUDE.md). Blueprint scritto: `dedalo/plancia-blueprint.md`. Fasatura: Fase 0 = la spina (chat pilota
  una sessione SDK reale, brutta ma vera) PRIMA delle stanze. La plancia esistente (`AgentsAI/plancia/`,
  FastAPI + router chat/sessions/permissions + websocket_manager/event_bus + CrewStage React) è il
  substrato da estendere. Prossimo: leggere i doc Agent SDK e cablare il router chat a una sessione reale.
- 2026-07-13 (seguito 2) — **Fase 0 della plancia FATTA E DIMOSTRATA.** Auth verificata: l'Agent SDK gira
  sull'ABBONAMENTO (nessuna ANTHROPIC_API_KEY; RateLimitEvent = budget abbonamento, non fatturazione API) —
  zero spesa oltre l'abbonamento, vincolo di Giuseppe rispettato. Costruita `plancia/backend/spina.py`
  (classe Spina: ClaudeSDKClient con cwd=navicella + bypassPermissions + setting_sources project/user;
  event_from traduce i messaggi in eventi-stanza, 'attivi' vs 'passivo' via parent_tool_use_id) +
  `spina_test.py`. Test PASSATO: la sessione conosce la navicella (cita CLAUDE.md = è Mnemosyne/Dedalo con
  tutto caricato), usa Bash e crea un file SENZA chiedere permessi (bypass reale), i veri hook girano, eventi
  per stanza, RESULT success. `claude-agent-sdk` 0.2.116 nel venv della plancia. Prossimo: Fase 1 = cablare
  la spina al websocket_manager/router chat esistente + costruire le stanze dall'alto e la stanza-cervello.
- 2026-07-13 (seguito 3) — **Fase 1 avviata: cablaggio websocket FATTO.** `plancia/backend/spina_service.py`
  (Spina condivisa singleton, `_lock` una-conversazione-per-volta, broadcast via `state._ws_clients`,
  `handle_user_message` eco+strema) + `main.py` `/ws` che instrada i frame `{type:"user_message",text}` alla
  Spina senza bloccare la ricezione + shutdown in lifespan. Test `plancia/ws_test.py` PASSATO (TestClient in
  process): client ws → messaggio → **Mnemosyne risponde in prima persona dal CLAUDE.md**, streamato al client,
  RESULT success, ~0.08$ sonnet (abbonamento). La chat esce dal browser, non dal terminale. Model via env
  `PLANCIA_MODEL`. Prossimo (Fase 1, DA FARE): le stanze dall'alto (riworkare CrewStage.tsx) + la stanza-cervello
  (5 livelli sfogliabili) + stato vivo; `parent_tool_use_id` accende la stanza del passivo dispacciato.
- 2026-07-13 — Apparato A portato a compimento e poi PARCHEGGIATO su decisione di Giuseppe. Smussato
  `esegui-locale.py` (errori HTTP puliti, max-tokens, timeout gestito); costruiti profili `taggatore-esercizi-av`
  (poi superato), `analizzatore-esercizi-av`, `verificatore-matematico`; driver `tag-esami-av.py`; staging
  `esiti-locali/`. Misure sul campo: qwen2.5:7b ~60-140s/doc (usabile per estrazione fedele; ha corretto
  l'errore-Dini del taggatore), 14b e deepseek-r1 in timeout su CPU (impraticabili). Ruolo del locale CEMENTATO
  da Giuseppe = presa-informazioni fedele (non etichette lossy), ragionamento a Claude. Verdetto: disegno provato,
  ma su CPU non ne vale la pena → tutto cloud fino alla GPU. Mappa-checkpoint della navicella pubblicata come
  Artifact (bb33da3c) con vis-network inglobata.
- 2026-07-14 — **LE STANZE (Fase 1 della plancia) COSTRUITE.** Giuseppe scioglie il registro: pixel/blockhouse
  «prendi dalle 2 e crea te, ispirato ad AndrooAGI» → fusione delle due grammatiche (pixel motore + linea
  schematica), non scelta. Costruito il frontend a stanze in `plancia/frontend/src/components/nave/`: `theme.ts`
  (palette/skin/bande temporali — temperatura=tempo sottratta), `AgentFig.tsx` (minifig pixel compatto riusabile),
  `RoomFrame.tsx` (telaio blueprint), `PassiveRoom.tsx` (si accende sul dispaccio via crew_event), `ActivesRoom.tsx`
  (Ponte + chat viva + toggle capitano), `BrainRoom.tsx` (5 livelli sfogliabili/cercabili, sola lettura),
  `StatusStrip.tsx` (stato vivo), `Plancia.tsx` (pianta: ponte centrale, passivi in asse temporale, cervello in
  basso). `App.tsx`→`<Plancia/>`. Store/types/useWebSocket estesi per consumare i frame spina (`spina/user/assistant/
  result/error`) — prima uscivano dal backend e nessuno li legava. Backend: `routers/cervello.py` (sola lettura,
  mappa reale dei 5 livelli da memoria-profonda.md, L5/psicologica sensibile, no traversal), montato in main.py.
  VERIFICATO: `vite build` pulito (42 moduli); cervello serve i file veri (L2=16,L3=1,L4=3,L5=9), ricerca+file+
  traversal-block OK; hook Task→argonauta `working`; switch capitano; WS handshake. NON provata la chat viva
  end-to-end (per non spendere token di notte; contratto-frame già provato da ws_test) né il rendering (no browser
  headless) — al primo avvio di Giuseppe. La vecchia CrewStage resta nel repo, non montata.
- 2026-07-11 (seguito 2) — Giuseppe: "attua ora le idee di B tenute per dopo, soprattutto gli instincts". Costruiti e testati instinct.py (asse implicito) + memoria-cerca.py (progressive disclosure). Protocollo-riflessione fatto crescere (non sostituito). #14 preso tutto. Bilancio delle 44 fonti scritto (dedalo/schiusura-bilancio-fonti.md). MODO NUOVO autorizzato da Giuseppe: **branch parallelo fra i due attivi** (deroga cementata "non si relayano") — Mnemosyne dispacciata a ratificare il lato-memoria mentre Dedalo costruiva. Prima volta che i due attivi lavorano insieme, non a turno.

- 2026-07-15/17 — **PLANCIA VIVA + STANZA MEMORIA RI-SORGENTATA + OPERE + FORMULARIO AV COMPLETO.**
  Sessione lunga, plancia portata dal disegno all'uso reale. In ordine:
  - **Primo avvio reale**: la cache del browser mostrava la vecchia blockhouse; diagnosi alla fonte
    (App.tsx monta gia Plancia, dev server serve il nuovo, nessun service worker) → era cache + titolo tab
    residuo "Blockhouse", corretto in "Plancia — Navicella". La spina si e accesa: i miei tool reali
    accendono il minifig in tempo reale (attribuzione hook funziona).
  - **Bug risposta-doppia** (useWebSocket): StrictMode montava due socket, la stale su onclose riconnetteva
    → doppio ingest degli assistant. Fix: onclose non riconnette se wsRef.current !== ws.
  - **Dispaccio passivo invisibile dalla chat**: i frame room=passivo erano scartati e la sessione SDK non
    spara gli hook. Fix lato server: ponte spina→crew in spina_service (traccia i tool_use Task/Agent, accende
    il passivo via crew.light_passive_from_spina, rest a fine turno). Aggiunti crew.light_passive_from_spina/
    rest_passive.
  - **Bug tsc latente** (mai passato: la verifica girava vite build=esbuild): role literals allargati a string
    → `as const`. Ora `npm run build` (tsc && vite build) e verde.
  - **Stanza memoria = rete neurale**. Prima versione (MemoryNet.tsx canvas, concentrica) pescava dai 5 livelli
    (31 nodi, 0 link). Giuseppe: "poca densita e pochi collegamenti; Obsidian?" — verificato: memoria vera = 122
    voci con ~52 link [[ ]] (auto-memoria .claude = vault stile Obsidian). RI-SORGENTATA: aggiunto
    `memoria-cerca.py --grafo` (nodi=voci tipizzate, sinapsi=[[ ]] reali + archi associativi per parole-chiave);
    /rete chiama il motore (unica fonte di verita); esteso il confine sola-lettura anche a ~/.claude/...memory
    (ALLOWED_ROOTS, traversal fuori bloccato). Poi Giuseppe: "denso ma confuso, suddividi per profondita e topic"
    → aggiunto depth+topic al motore (DEPTH_MAP 4 fasce: nucleo/fondamenta/sapere/cronaca) e riscritto MemoryNet
    in **polare**: raggio=profondita, spicchio+colore=topic. Render markdown dei file (Markdown.tsx, no dep) al
    posto del `<pre>`; [[wikilink]] cliccabili navigano.
  - **Chat separate** (frontend-only, backend intatto per non troncare un run di Mnemosyne): chats per capitano,
    turnCaptain instrada i frame (la spina serializza), toggle cambia thread. Substrato condiviso (cementato),
    vista separata.
  - **Stanze passive che camminano**: PassiveRoom = pavimento con postazioni (riposo/pensa/archivio/scrittoio/
    vedetta); il minifig scivola alla postazione secondo tool/status; postazioni arredate (SVG mobili).
  - **Stanza OPERE** (nuova): /api/nave/opere (accademico 48, ricerche 7, creazioni 19), OpereRoom (porta) +
    OpereBrowser (sfoglia con render markdown). Fascia bassa = due porte MEMORIA | OPERE.
  - **Strumenti costruiti**: convertitore markdown→HTML stampabile (protegge la matematica, escapa < >), e
    pipeline conteggio-pagine PDF (Chrome headless --print-to-pdf + fitz) — usati per il formulario.
  - **Formulario AV** (esame 17 lug): iterato da compatto a **manuale completo dal percorso saper-fare**
    (criteri=L'idea + metodo=La mossa + esame svolto per tipo + smistatore + blocco serie-di-potenze esplicito),
    compresso a **4 pagine** misurate, 871 formule KaTeX 0 errori. LEZIONE: i `<` letterali dentro $...$ li mangia
    il parser HTML (il checker KaTeX non lo vede, il PDF si) → sempre \lt/\gt o build da convertitore che escapa.
    Curvatura assente di proposito (non nel modulo curve del corso). PDF su Desktop + nel repo AnalisiVettoriale
    (link scaricabile). File nuovi frontend: MemoryNet, MemoryRoom, Markdown, OpereRoom, OpereBrowser, +
    PassiveRoom riscritto. Backend: cervello.py (rete via motore, opere, root auto-memoria), spina_service (ponte),
    crew (helper). Motore: memoria-cerca.py --grafo (depth/topic).
  - DA FARE (prossima): la prova dell'occhio su rete polare/camminate/render (Giuseppe le ha viste, gli piacciono;
    restano rifiniture); **Fase 2** = i tool DENTRO le stanze (file che si apre, bash che scorre) = sostituzione
    totale del terminale; opzionale: due sessioni spina indipendenti (revisiona cementata), agganciare i quiz
    pubblicati alle OPERE, insegnare al checker-katex a de-escapare gli oggetti-dati JS.

- 2026-07-17 — **LA VOCE: la plancia parla e ascolta.** Richiesta di Giuseppe: mic sul web + noi due che
  rispondiamo a voce, due voci "che vi scegliete". Costruito bidirezionale, tutto LOCALE su CPU (zero spesa
  oltre l'abbonamento, coerente con la spina; cloud escluso). **STT** = faster-whisper (`small`, it) via
  MediaRecorder→webm/opus→`/api/voce/stt`; **TTS** = Piper neurale, `/api/voce/tts` con voce per attivo.
  **Voci**: Mnemosyne=it_IT-paola (femminile, PROPOSTA — sua da ratificare, non annetto la sua identità
  nemmeno su invito), Dedalo=it_IT-riccardo (maschile, mia scelta). File condivisi in
  `00-capitano/scripts/voci/`. Prima, come MVP standalone (parlare subito in QUESTO terminale): `voce.py` +
  `parla.ps1` in `00-capitano/scripts/` (venv dedicato `voce-venv`, push-to-talk→appunti). Poi il web:
  `backend/routers/voce.py` (singleton pigri, threadpool per non fermare la Spina), `frontend/src/hooks/
  useVoice.ts` (coda TTS + useMicRecorder), innesto in `ActivesRoom.tsx` (pulsante 🎤 + toggle ♪ voce).
  Deps nel venv backend: faster-whisper + piper-tts. VERIFICATO: round-trip TTS→STT via TestClient (200/200,
  cerchio chiuso); percorso webm/opus (transcodifica av = quello del browser) 200+trascrizione; `npm run build`
  (tsc&&vite) pulito 47 moduli. NON verificato (nessun browser/mic/casse qui): qualità sonora, getUserMedia
  dal vivo, autoplay. Doc: PLANCIA.md §"La voce". LEZIONE tenuta: ho PROVATO il percorso browser (webm/opus)
  invece di supporlo — la sbavatura "mitrofono/bowser" su voce sintetica ricompressa è segnale onesto, non
  bug: mitigazione = modello medium/initial_prompt se serve su termini di fisica.

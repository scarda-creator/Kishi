---
type: stato
---

# Bilancio delle 44 fonti — cosa è diventato organo, cosa no, perché

> Autocritica di Dedalo, 2026-07-11. Le 44 = 36 repo stellate da Giuseppe
> (`00-starred-repos.md`) + 8 trovate dall'Argonauta nel track infra/costi/gamedev
> (`01-findings-infra-costi-gamedev.md`). Il track fisica/math/DL
> (`02-findings-math-fisica-dl.md`, ~14 librerie) è separato → apparato D, non ha
> alimentato la schiusura A+B. Fedeltà: delle 6 USATE ho letto il sorgente (clonate);
> delle altre il giudizio poggia sui findings dell'Argonauta (seconda mano, dichiarato).

## Legenda
- **USATA** = tradotta in codice della navicella (non clonata-e-basta: adattata).
- **INFLUENTE** = ha plasmato una decisione/architettura, senza diventare codice.
- **DIFFERITA** = destinata a un apparato non ancora aperto (C Business, D accademico, E corpo/gioco). Non scartata: in coda.
- **MARGINALE** = reference o fuori scope della navicella; non prevista come organo.

---

## A. USATE — diventate codice (6)

| # | Repo | È diventata | Apparato | Adattamento |
|---|------|-------------|----------|-------------|
| 1 | BayramAnnakov/claude-reflect | `cattura-apprendimento.py` + `promemoria-coda.py` | B | pattern in italiano, coda di staging grezza, confine "interpreta Mnemosyne" |
| 2 | Digital-Process-Tools/claude-remember | `comprimi.py` (motore Haiku) | B | modi compressione/sintesi + `--archivio` (niente oblio) |
| 3 | NadirRouter/NadirClaw | design del router + ponte OpenRouter + `esegui-locale.py` (concetto proxy) | A | mappa di routing dai dati, non regola fissa |
| 4 | alisorcorp/ask-local | `esegui-locale.py` (motore esecutori locali) | A | principio "il file resta locale, torna solo la risposta" → due tier locale/cloud |
| 5 | getagentseal/codeburn | `token_diagnostica.js` | A (passo 0) | riscrittura nativa; "nato guardando codeburn" ma legge i nostri JSONL |
| 6 | x1xhlol/system-prompts-and-models-of-ai-tools | profilo `classificatore-task.md` | A | pattern Kiro estratto e cesellato sul nostro confine pensiero/esecuzione |

Sei fonti, cinque script + un profilo. Tutte **tradotte, non importate**: è il mio principio ("un architetto ridisegna la stanza attorno a chi ci vive, non importa mobili").

---

## B. INFLUENTI — hanno plasmato senza diventare codice (8)

| Repo | Cosa ha dato | Dove |
|------|--------------|------|
| nateherkai/token-dashboard | diagnostica alternativa; ha confermato l'approccio JSONL→analytics | A (codeburn ha vinto come ref) |
| li195111/claude-token-analyzer | tassonomia di 6 anomalie di spreco token | A (idea di categorie di spreco) |
| ypollak2/llm-router | concetto "quota protection" (preserva la quota Claude dai task banali) | A (filosofia di routing) |
| thedotmack/claude-mem | progressive disclosure nel retrieval (~10× saving) | B (segnato per evoluzione futura) |
| affaan-m/ECC | "instincts": apprende pattern impliciti, confidence, instinct→skill | B (idea per evoluzione, non ora) |
| multi-agent-ralph-loop | benchmark MemPalace 4-layer, wake-up ~818 token | B (metro di paragone per la nostra memoria) |
| rohitg00/awesome-claude-code-toolkit | catalogo (135 agenti, 20 hook, MCP) | mappa da consultare prima di progettare |
| awesome-llm-token-optimization | teoria: cache+routing+batch+compressione → 95-99% teorico | A/B (cornice del risparmio) |

Queste sono la parte scomoda del bilancio: **idee segnate "per dopo".** Legittimo — ma "per dopo" diventa "mai" se non lo traccio. Il guardiano è `dedalo-progetti.md`.

---

## C. DIFFERITE — in coda per apparati non ancora aperti (19)

### → C Business (il mio prossimo mandato)
- **calesthio/OpenMontage** — studio di produzione video agentico (52 tool). Braccio contenuti del Demiurgo Business.
- **DennisWei9898/viral-reel-maker** — long-video → reel 9:16 brandizzati. Tool del Demiurgo Business.
- **PacktPublishing/…Passive-Income** — playbook di monetizzazione GenAI. Materiale, non codice.
- **d4551/baobuildbuddy** — assistente carriera per l'industria dei videogiochi. Ponte business/gioco.

### → D Organi accademici
- **psi-oss/get-physics-done** — agente fisico dentro Claude Code. Da valutare collisione coi workflow accademici già nostri.
- **google-labs-code/stitch-skills** — Agent Skills open standard. Futuro-proofing delle skill della navicella.
- **Dicklesworthstone/model_guided_research** — 11 strutture matematiche esotiche + DL. Studio avanzato post-base.
- **Nebius-Academy/ai-in-math-course** — corso AI-in-math livello magistrale. Studio parallelo.
- **vinsis/math-and-ml-notes** — note ML in notebook. Lettura leggera.
- **ai4s-research/awesome-ai-for-science** — directory AI-for-science. Hub di aggiornamento.

### → E Corpo / gioco-fisica
- **hi-godot/godot-ai** — MCP Godot, 120 operazioni. Braccio del Demiurgo Creativo sul gioco.
- **HubDev-AI/godot-ai-builder** — "Director Protocol" a checkpoint. Pattern per build multi-sessione.
- **Donchitos/Claude-Code-Game-Studios** — 49 agenti gerarchia studio. Vocabolario di workflow.
- **CoplayDev/unity-mcp** — conferma il pattern MCP-bridge per game engine (ma target = Godot).
- **isaac-mason/sketches** — sketch physics/game-ai. Banco di riferimento design.
- **bocaletto-luca/Videogames-Database** — dati strutturati sui giochi. Fondamenta dati del gioco.

### → E Interfaccia / futuro
- **giulio333/ClaudeLens** — desktop app per esplorare i dati Claude locali. Candidato UI (apparato E).
- **textcortex/claude-code-sandbox** (archiviata) — Claude Code in Docker senza approvare permessi. Serve quando gli esecutori girano codice generato.
- **TencentCloud/CubeSandbox** — sandbox leggera per agenti. Stessa esigenza, quando arriverà.

---

## D. MARGINALI — reference o fuori scope (11)

| Repo | Perché non organo |
|------|-------------------|
| Piebald-AI/claude-code-system-prompts | reference: mineria di pattern dai prompt Claude Code, non codice da integrare |
| asgeirtj/system_prompts_leaks | reference: prompt estratti (anche i nostri). Materiale di studio |
| repowise-dev/claude-code-prompts | reference: template di prompt multi-agente |
| composio-community/awesome-claude-plugins | reference: lista di plugin. Da consultare, non integrare |
| golutra/golutra | orchestrazione multi-agente — abbiamo già la nostra (i 6 agenti) |
| MikeO-AI/claude-context-local | code-context Postgres+Ollama — si sovrappone alla memoria che già abbiamo |
| caiovicentino/claude-call | interfaccia vocale al terminale — fuori scope ora |
| vxcontrol/pentagi | pentesting autonomo — irrilevante per la navicella |
| mvanhorn/last30days-skill | ricerca social (Reddit/X/HN) — possibile tool futuro dell'Argonauta |
| GoDiao/Free-Way | gateway 14+ provider gratuiti — alternativa a OpenRouter, scartata (chiave diretta) |
| slyfox1186/claude-code-openrouter | MCP OpenRouter locale — alternativa, scartata (usiamo la chiave diretta nello script) |

---

## Il bilancio, onesto

**Autostima.** 6 fonti metabolizzate in codice che gira e che ho misurato oggi: il metabolismo (A) è provato, il sistema nervoso (B) è schiuso. Non ho droppato repo: le ho tradotte. Questo è mestiere fatto bene.

**Autocritica.** Tre cose vere:
1. **6 su 44 sono diventate codice.** Non è sotto-uso di per sé: 19 sono *correttamente* differite ad apparati non ancora aperti, 11 sono reference per natura (da una awesome-list non si "costruisce"). Ma è un numero che va guardato in faccia, non nascosto.
2. **Le 8 "influenti" sono il punto molle.** Sono idee buone parcheggiate ("instincts" di ECC, progressive disclosure di claude-mem). Parcheggiare è legittimo in una schiusura multi-sessione — ma è anche il travestimento con cui una buona idea muore. Vanno tenute vive nel registro, o non valgono.
3. **Fedeltà asimmetrica.** Delle 6 usate conosco il codice; delle 38 restanti mi fido dei findings dell'Argonauta. Se una "differita" nasconde un dettaglio che ne cambia il valore, oggi non lo saprei. Andrà letta prima di costruirci sopra.

**La cornice giusta.** "Schiusura dell'uovo", parola tua: multi-sessione. Un used-count basso *ora* è disegno, non fallimento — a patto che la coda (apparato C, D, E) resti una coda vera e non un cimitero. Il mio compito è che ci si torni.

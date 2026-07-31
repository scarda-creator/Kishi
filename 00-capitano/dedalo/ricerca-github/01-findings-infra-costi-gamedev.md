---
type: ricerca
---

# Findings — infra agenti, costi, gamedev (Argonauta)
2026-07-11. Recuperato da Dedalo: l'Argonauta non aveva salvato il file su disco
(solo nella risposta); ricostruito dal contesto prima del riavvio chat.

## Shortlist (8 più forti)
| # | Repo | Area | Valore | Sforzo |
|---|------|------|--------|--------|
| 1 | NadirRouter/NadirClaw | Costi | Molto alto | Basso |
| 2 | BayramAnnakov/claude-reflect | Infra | Molto alto | Basso |
| 3 | Digital-Process-Tools/claude-remember | Infra | Alto | Medio |
| 4 | hi-godot/godot-ai | Gamedev | Molto alto | Basso |
| 5 | affaan-m/ECC | Infra | Alto | Medio |
| 6 | Donchitos/Claude-Code-Game-Studios | Gamedev | Alto | Medio |
| 7 | rohitg00/awesome-claude-code-toolkit | Infra | Medio | Basso |
| 8 | getagentseal/codeburn | Costi | Medio | Minimo |

## AI Agents Infrastructure
- **claude-reflect** (1.2k★): auto-apprendimento — hook catturano correzioni → coda → /reflect sincronizza in CLAUDE.md. **[IMPLEMENTATO nativo, apparato B]**
- **claude-remember** (Digital-Process-Tools): compressione gerarchica sessioni via Haiku (now→today→recent→archive), iniezione a SessionStart, <1¢/sessione. **[MOTORE IMPLEMENTATO: comprimi.py, apparato B]**
- **affaan-m/ECC**: agent harness — "instincts" (apprende pattern impliciti dall'uso, confidence scoring, instinct→skill). Star anomale, da verificare. Idea da tenere per un'evoluzione dell'apparato B.
- **multi-agent-ralph-loop** (140★): MemPalace 4 layer, wake-up ~818 token (benchmark utile per il contesto navicella), 4 gate di validazione.
- **rohitg00/awesome-claude-code-toolkit** (2.3k★): catalogo (135 agenti, 20 hook production-tested, MCP) — mappa da consultare prima di progettare.
- **thedotmack/claude-mem**: progressive disclosure nel retrieval (search compact ~50-100 token → dettaglio on demand, ~10× saving). Pattern adottabile senza SQLite.
- **google-labs-code/stitch-skills** (6.7k★): Agent Skills open standard — futuro-proofing per le skill della navicella.

## Cost Savings / Token Optimization
- **NadirClaw** (575★): proxy locale, classifica prompt in ~10ms, smista 60-70% a modelli economici. Dato reale −57% ($24→$10/g). **[base dell'apparato A router]**
- **ypollak2/llm-router** (51★): catena free-first (Ollama→Gemini free→Claude), "quota protection" esplicita (preserva la quota Claude dai task banali).
- **codeburn** (8.6k★, npx) / **token-dashboard** (632★): diagnostica consumo. **[costruita nativa: token_diagnostica.js]**
- **ask-local** (LM Studio): delega grunt work a LLM locale, file restano in locale. **[base dell'apparato A: esegui-locale.py]**
- **GoDiao/Free-Way** (26★): gateway 14+ provider gratuiti.
- **awesome-llm-token-optimization**: cache prefix (90%) + routing (60-95%) + batch (50%) + prompt compression (LLMLingua 5-20×) → fino a 95-99% di riduzione teorica.

## Videogame Design (tooling)
- **hi-godot/godot-ai** (935★): MCP Godot, 120 operazioni — il braccio per il Demiurgo Creativo sul gioco-fisica. [apparato E / gioco]
- **Donchitos/Claude-Code-Game-Studios** (22.8k★): 49 agenti gerarchia studio, 73 skill/comandi — pattern di decomposizione + vocabolario workflow.
- **HubDev-AI/godot-ai-builder** (8★): "Director Protocol" a fasi con checkpoint — pattern per build multi-sessione.
- **isaac-mason/sketches** (338★): sketch physics/game-ai — banco di riferimento per il design del gioco.
- **CoplayDev/unity-mcp** (12.3k★): conferma che il pattern MCP-bridge per game engine è la strada (ma target = Godot).

## Nota trasversale
Il filo dei candidati più forti è la **compressione** (sessioni, routing, retrieval): ogni nuovo componente va progettato chiedendosi "come viene compresso?".

Fonti: github.com/{NadirRouter/NadirClaw, BayramAnnakov/claude-reflect, Digital-Process-Tools/claude-remember, hi-godot/godot-ai, affaan-m/ECC, Donchitos/Claude-Code-Game-Studios, getagentseal/codeburn, alisorcorp/ask-local, GoDiao/Free-Way, google-labs-code/stitch-skills, thedotmack/claude-mem, rohitg00/awesome-claude-code-toolkit}.

---
type: stato
allegato-a: 00-capitano/mandato-ricerca-jarvis-2026-07-31.md
autore: Mnemosyne (Capitano)
aggiornato: 2026-07-31 11:35
---

# Stato della ricerca Jarvis — punto di ripresa

Serve a riprendere senza rifare. Se una sessione muore, si riparte da qui.
Lanciare solo le righe marcate `da fare`, mai le `fatto`.

| D | Tema | Stato | File |
|---|------|-------|------|
| D1 | Auto-evoluzione | fatto (01:47) | `jarvis-D1-autoevoluzione.md` |
| D2 | Segnale di esito | fatto (01:49) | `jarvis-D2-segnale-esito.md` |
| D3 | Memoria autoscrivente | fatto (01:47) | `jarvis-D3-memoria-autoscrivente.md` |
| D4 | Il battito | in volo (2° tentativo) | `jarvis-D4-battito.md` |
| D5 | I sensi (MCP) | in volo (2° tentativo) | `jarvis-D5-sensi.md` |
| D6 | Deriva costituzione | in volo (2° tentativo) | `jarvis-D6-deriva-costituzione.md` |
| D7 | Economia e ToS | da fare | `jarvis-D7-economia.md` |
| D8 | Post-mortem altrui | da fare | `jarvis-D8-postmortem.md` |
| D9 | Domanda aperta (da sola, per ultima) | da fare | `jarvis-D9-aperta.md` |
| D10 | Grafo pubblicato + de-anonimizzazione | da fare | `jarvis-D10-grafo-pubblicato.md` |
| — | Sintesi (la scrive Mnemosyne) | da fare | `jarvis-sintesi-2026-07-31.md` |

## Regole di dispaccio

- Argonauta su Sonnet, **massimo tre in volo**. Il runtime non espone il nome
  `argonauta`: si dispaccia `general-purpose` istruito a caricare
  `.claude/agents/argonauta.md` come identità.
- Ogni brief passa mandato + `00-addendum-mnemosyne.md` come framework prompt.
- D9 va lanciata **da sola e per ultima**, per non ancorarla alle altre.

## Incidente 2026-07-31, 01:50 — limite di sessione

Sei Argonauti in circa venticinque minuti hanno esaurito il limite di sessione.
D4, D5 e D6 sono morti in volo senza scrivere nulla; D1-D3 erano già su disco e
si sono salvati **solo** perché la regola di output impone il file prima della
risposta. Senza quella regola avremmo perso tre ricerche complete.

Due fatti registrati, non interpretati:
- tre Argonauti Sonnet in parallelo con ricerca web pesante stanno dentro il
  limite; sei nella stessa finestra no.
- il limite ha colpito la ricerca sul battito mentre indagava il battito. È
  materia di D4 e gli è stata passata come dato.

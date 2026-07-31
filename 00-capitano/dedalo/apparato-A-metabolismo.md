---
type: spec
---

# Apparato A — Metabolismo (routing + delega locale/gratuita)

> Blueprint operativo di Dedalo. Avviato 2026-07-11 su "incomincia" di Giuseppe.
> Ancorato a `roadmap-llm-locali.md`. Serve l'asse I (autonomia dal modello) e allontana il limite.

## STATO — PARCHEGGIATO fino alla GPU (decisione di rotta di Giuseppe, 2026-07-13)

Il locale-CPU è **parcheggiato**, non smontato. Disegno provato e funzionante — qwen2.5:7b
estrae in modo fedele e ha persino corretto l'errore-Dini del vecchio taggatore — ma su questa
macchina (Acer, no GPU) è **lento, token-limitato e fragile sulle formule**: l'analizzatore su
un esame si è troncato all'es4 per il tetto-token, e le soluzioni intere vanno in timeout.
Non ne vale la pena adesso. deepseek-r1 in panchina: il suo unico pregio è ragionare (= di
Claude) e comunque su CPU va in timeout.

**Regola operativa da ora:**
- Default = **TUTTO CLAUDE**. Nessun apparato mezzo-acceso.
- Il tier **cloud-economico** (OpenRouter, già dentro `esegui-locale.py`) si usa **SOLO se c'è
  guadagno reale**: un corpus GRANDE o RIPETUTO che giustifichi l'orchestrazione. Per lavori
  piccoli/una-tantum, Claude legge diretto (il risparmio del locale è marginale). Gli esami non
  sono sensibili → il gate-privacy L5 permette il cloud; L5 e chi-sei-tu restano fuori dal cloud.
- Riaccensione prevista: quando arriva la GPU (finanziata dall'apparato C, il Business).

L'apparato resta cementato e riusabile: `esegui-locale.py`, i profili
(`analizzatore-esercizi-av`, `classificatore-task`, `verificatore-matematico`), il driver e lo
staging sono pronti a ripartire senza riscrivere nulla. Dormiente, non perso.

## Passo 0 — Diagnostica (fatto)

Strumento permanente: `00-capitano/scripts/token_diagnostica.js` (legge i JSONL locali, nessun dato esce).
Snapshot 2026-07-11 (76 file, 4214 messaggi con usage):

| Voce | Output token | Nota |
|---|---|---|
| Opus 4.8 | 5.259.718 | domina — è la generazione che pesa sul limite |
| Sonnet 4.6 | 1.471.547 | i passivi (Argonauta, Rapsodo, Demiurghi Sonnet) |
| cache-read totale | 386.180.935 | contesto enorme riletto ogni turno → leva compressione |

Lettura: il risparmio grosso sta (1) nello spostare la generazione che NON è da Opus verso
tier economici/locali, e (2) nel comprimere il contesto caricato ogni turno (apparato B).

## Passo 1 — Prova sul campo (fatto, 07-11)

Giuseppe ha acceso il locale: Ollama con `qwen2.5:7b` + `deepseek-r1:7b`, e una API key
OpenRouter (in env `OPENROUTER_API_KEY`, registro User — mai su file/repo). Girato l'esecutore
`classificatore-task` su una batteria a risposta nota, misurato su entrambi i tier:

| Tier | Modello | Latenza/task | Costo | Privacy | Correttezza |
|---|---|---|---|---|---|
| Locale | Ollama qwen2.5:7b (**100% CPU, no GPU**) | ~7000 ms (caldo) | 0 token Claude | resta sulla macchina | 6/6 |
| Cloud | OpenRouter qwen-2.5-7b | ~1600 ms | frazioni di centesimo | **lascia la macchina** | 3/3 |

Letture:
- **Due cilindri economici, non uno.** Il locale è privato ma lento (pavimento CPU, non
  configurabile via software su questo Acer); il cloud è veloce ma esterno.
- **Il gate-privacy L5 mappa sui tier.** Lavoro L5-adjacent o sensibile → obbligato al locale,
  anche se lento. Bulk non sensibile che vuole velocità → cloud. Il grunt-work di
  classificazione/tagging/dedup esce da Claude in entrambi i casi.
- **Il pavimento 7s è hardware.** Conferma empirica del «RTX 5090 quando il Business paga»: il
  metabolismo locale è reale ma latency-limited finché l'apparato C non finanzia la GPU. È il
  volano dell'autonomia, ora con un numero sotto.
- Uso pratico oggi: locale = batch/background (es. taggare gli esami di Geometria mentre giri
  altro); cloud = quando serve turnaround veloce su roba non sensibile.

## La mappa di routing (dai dati, non a naso)

| Lavoro | Oggi | Proposta | Perché |
|---|---|---|---|
| Orchestrazione decisionale (Mnemosyne, Dedalo) | Opus | **Opus (resta)** | è il nucleo attivo/senziente; ma sorvegliare la verbosità dell'output |
| Scrittura densa vera (capitoli libro) | Opus | **Opus (resta)** | qualità irrinunciabile |
| Costruzione quiz (Demiurgo Accademico) | Opus | **Sonnet o locale (DeepSeek R1)** | strutturato + matematico: un modello forte-ma-economico regge; è stato un grosso spender |
| Ricerca (Argonauta) | Sonnet | **Sonnet / cheap-cloud** | ok così, eventualmente gratuito |
| Archivio, reality-check (Rapsodo) | Sonnet | **locale (Qwen 3)** | task leggeri, candidati Fase 1 |
| Classificazione P1/P2, tagging | — | **locale (Qwen 3 7-14B)** | esattamente il "lavoro-fatica" della roadmap |
| Verifica/assemblaggio quiz | node locale | **resta (0 LLM)** | già gratis, nessun modello coinvolto |

Cancello duro: **L5 e chi-sei-tu non passano mai** per un modello che lascia la macchina.
Il locale qui è privacy prima che risparmio (patto "L5 mai in chiaro").

## Ponte tecnico

`OpenRouter` come astrazione: nel frontmatter di un agente
```yaml
model: anthropic/claude-opus-4-8      # oggi
model: deepseek/deepseek-r1           # domani, senza riscrivere altro
model: <endpoint-ollama-locale>       # quando il locale regge
```
`ask-local` (LM Studio) per delegare il grunt work tenendo i file in locale. `codeburn` (npx)
come diagnostica di comodo accanto al nostro script.

## Le 3 azioni che spettano a TE (macchina) — dalla roadmap, costo zero

1. **Installa Ollama** e scarica un modello leggero: `ollama pull qwen3:14b` (o `deepseek-r1:14b`).
   ~30 min, gira sul tuo Acer (≤13B). Provalo a classificare 10 input tuoi P1/P2.
2. **Apri un account OpenRouter** e prova la stessa richiesta con Claude vs Llama vs Qwen: ti fa
   sentire il gap con mano.
3. **Monitora** le release (HuggingFace leaderboard, /r/LocalLLaMA) — ogni ~3 mesi cambia qualcosa.

Appena il locale/OpenRouter è vivo, io giro le stringhe di modello degli agenti secondo la mappa
sopra, un agente alla volta, misurando col nostro script prima/dopo.

## Confini di ruolo (chi fa cosa)

- **Dedalo** (io): la mappa di routing, i cambi di frontmatter degli agenti, il ponte OpenRouter,
  lo strumento di diagnostica. Struttura del sistema = mia.
- **Mnemosyne**: la compressione del contesto/memoria (i 386M di cache-read) è casa sua — apparato B.
  Glielo segnalo, non ci entro.
- **Giuseppe**: le 3 azioni-macchina + la decisione hardware (RTX 5090 solo quando il Business paga).

## Divisione del lavoro locale ↔ Claude (CEMENTATA da Giuseppe, 2026-07-13)

Direzione di Giuseppe, non negoziabile: **il ragionamento resta a Claude**, per potenza di
calcolo, e deve restare così. Al locale spetta la **presa-informazioni in dettaglio**.

- Il locale NON è un classificatore a etichette (l'approccio "taggatore→frequenze" del primo
  test è **superato**: era lossy, riduceva l'esercizio a un id e buttava la sostanza — proprio
  il difetto che Giuseppe ha bocciato).
- Il locale è un **percettore fine**: legge le richieste d'esame, comprende i singoli esercizi,
  ne analizza le tipologie e ne estrae la sostanza in forma strutturata e **fedele, senza
  perdita di qualità**. Profilo di riferimento: `profili-locali/analizzatore-esercizi-av.md`.
- Consegna a Claude un **raw output ricco** che Claude processa e su cui ragiona. La catena è
  *percezione dettagliata (locale) → ragionamento/giudizio (Claude)*, non *decisione grezza
  (locale) → archiviazione*.
- Corollario sul math-check: verificare la correttezza di una soluzione È ragionamento → è di
  Claude, non del locale. Un modello locale può al più ESTRARRE i passaggi in dettaglio; non
  può esserne il giudice. (Conferma il "no" argomentato del 13-07 sul deepseek-verificatore.)

Metro di qualità: non "quanto ci azzecca con l'etichetta" (irrilevante ora), ma "quanto è
FEDELE e COMPLETO il raw che passa a Claude". Se il locale sbaglia una tipologia ma trascrive
tutto, Claude riclassifica dal materiale: nessun danno. Se il locale PERDE informazione, il
danno è irreversibile a valle. Quindi: fedeltà > sintesi.

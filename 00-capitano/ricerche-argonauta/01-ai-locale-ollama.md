---
type: ricerca
---

# Progetto Argonauta 01 — Navicella su AI locale (Ollama e modelli locali)

Fondato: 2026-07-03
Ruolo: Argonauta (dimensione futuro — esplorazione della traiettoria della navicella)
Stato: ricerca in corso

## Perché (frame strategico)
Primo progetto dell'Argonauta rivolto alla navicella stessa, non a un corso.
Tocca fili già cementati: autonomia, costo zero delle API, offline, privacy del
dataset Giuseppe, filosofia RSI-L1+ (il sistema che tende a reggersi da sé).
Domanda di fondo: **quanto della navicella può migrare su modelli locali, con
quale perdita di qualità, e a quali condizioni hardware.**

## Hardware target (laptop di Giuseppe)
- CPU: Intel Core 5 120U (serie U a basso consumo, ~10 core ibridi)
- RAM: 32 GB (asset principale)
- GPU: solo integrata Intel (no GPU dedicata, no CUDA, no VRAM discreta)
- OS: Windows 11 Home

Vincolo dominante: inferenza CPU-bound. La RAM ampia consente di *caricare*
modelli medi, ma la velocità di generazione la detta la CPU + iGPU.

## Domande di ricerca
1. Ollama: cos'è, come funziona, requisiti reali (RAM/VRAM, CPU vs GPU, quantizzazione).
2. Modelli locali all'altezza dei ruoli navicella (fine 2025/inizio 2026):
   - ruoli densi (Capitano, Demiurgo — oggi Opus): quali modelli locali si avvicinano, con che gap;
   - ruoli leggeri (Rapsodo, Argonauta — oggi Sonnet): quali modelli reggono davvero.
   Nominare famiglie concrete (Llama, Qwen, Mistral, DeepSeek, Gemma, Phi...) con taglie e quantizzazioni.
3. Gap di qualità reale vs Claude Opus/Sonnet su: scrittura tecnica densa,
   ragionamento multi-passo, gestione di contesto lungo e memoria.
4. Architettura ibrida: quali task migrare in locale (privacy/costo/offline) e
   quali tenere su Claude. Trade-off costo/qualità/privacy, con criterio di scelta.
5. Integrazione tecnica: Ollama si aggancia a Claude Code o serve un orchestratore
   diverso (framework agentico, app custom)? Come si interfaccerebbe alla struttura
   a file/agenti esistente.
6. Fattibilità sul laptop di Giuseppe (specs sopra): quali modelli girano a
   velocità *usabile* CPU-only con 32 GB, e quali sono fuori portata.
7. Costo: API Claude vs locale (hardware una tantum eventuale + energia + tempo).

## Vincoli di lavoro
- Fonti 2025-2026, citate. Distinguere fatto misurato da hype.
- Concretezza sull'hardware reale, non consigli generici da GPU-farm.
- Italiano. Denso, niente riempitivi.

## Findings

Data ricerca: 2026-07-03
Fonti: benchmark misurati 2025-2026, documentazione ufficiale Ollama/ipex-llm, leaderboard aggiornate.

---

### D1 — Ollama: architettura e requisiti reali

Ollama è un runtime locale che scarica, gestisce e serve modelli GGUF tramite un server HTTP locale (default `http://localhost:11434`). Implementa sia l'OpenAI API format che, dal v0.14 (gennaio 2026), il formato Anthropic Messages API — il che lo rende intercambiabile con l'API di Anthropic modificando una variabile d'ambiente. Il motore di inferenza sottostante è llama.cpp, che supporta quantizzazioni Q4/Q5/Q8 e gestisce automaticamente l'offloading dei layer su GPU se disponibile.

Requisiti RAM: la regola empirica è 1-2 GB per miliardo di parametri a 4-bit. Q4_K_M (il formato consigliato per il bilanciamento qualità/velocità) occupa circa 0.55 GB/B. Il sistema operativo si riserva ulteriori 2-4 GB, quindi con 32 GB si arriva comodamente fino ai 14B, con margine per i 20-24B a seconda della quantizzazione.

Fonti: [Ollama VRAM Requirements 2026](https://localllm.in/blog/ollama-vram-requirements-for-local-llms) · [RAM Requirements Local AI](https://localaimaster.com/blog/ram-requirements-local-ai)

---

### D2 — Modelli all'altezza dei ruoli navicella

**Premessa hardware.** I benchmark di riferimento disponibili riguardano l'Intel Ultra 5 125H (Arc Xe-LPG 112EU, 14 core, 120 GB/s bandwidth). Il Core 5 120U è ~32% più lento nell'aggregato (10 core, Iris Xe G7 80EU, architettura Alder Lake, LPDDR5-6400 con bandwidth inferiore). Le stime seguenti correggono i numeri misurati con questo delta.

**Ruoli pesanti — Capitano e Demiurgo (oggi su Opus).**
Non esiste un modello locale che reggesse confronto con Opus su scrittura tecnica densa e orchestrazione complessa entro le taglie girevoli sul 120U. I candidati parzialmente plausibili sono:

| Modello | Taglia | Quant | RAM | tok/s stimati su 120U CPU | Note |
|---|---|---|---|---|---|
| Qwen3 14B | 14B | Q4_K_M | ~9 GB | 3-4 | Miglior bilanciamento reasoning/qualità scrittura nelle sue taglia; 128K ctx |
| DeepSeek-R1-Distill-Qwen-14B | 14B | Q4_K_M | ~9 GB | 3-4 | Chain-of-thought visibile, forte su matematica/logica, 72% su MATH-500 |
| Qwen3 8B | 8B | Q4_K_M | ~5 GB | 6-8 | Più veloce, qualità leggermente inferiore |

A 3-4 tok/s l'uso interattivo è scomodo (soglia fluida ≥15 tok/s); usabile per task batch o asincroni dove il tempo di risposta non è critico. Su scrittura tecnica in italiano questi modelli reggono compiti strutturati ma perdono densità e coerenza su testi lunghi.

**Ruoli leggeri — Rapsodo e Argonauta (oggi su Sonnet).**
Qui il calcolo si fa più favorevole:

| Modello | Taglia | Quant | RAM | tok/s stimati su 120U CPU | Note |
|---|---|---|---|---|---|
| Qwen3 8B | 8B | Q4_K_M | ~5 GB | 6-8 | Ottimo per task strutturati, classificazione, estrazione |
| Phi-4-mini | 3.8B | Q4_K_M | ~2.5 GB | 15-25 | Veloce, 68% MMLU; adatto per pre-classificazione e task ripetitivi |
| Llama 3.2 3B | 3B | Q4_K_M | ~2 GB | 20+ | Qualità limitata ma reattivo; solo per task banali |
| DeepSeek-R1-Distill-Qwen-7B | 7B | Q4_K_M | ~4.5 GB | 7-10 | Chain-of-thought su task di ragionamento leggero |

Phi-4-mini e Qwen3 8B sono i candidati concreti per i ruoli leggeri. La velocità di Phi-4-mini (30-50 tok/s su laptop moderni, stimati 15-25 sul 120U più lento) lo rende usabile in real-time per task ripetitivi.

Fonti: [Best Local LLMs 2026](https://www.promptquorum.com/local-llms/best-local-llms-2026) · [iGPU Benchmark Computer Vision Lab](https://nikolasent.github.io/hardware/deeplearning/2025/02/09/iGPU-Benchmark-VLM.html) · [CPU comparison 120U vs 125H](https://www.cpu-monkey.com/en/compare_cpu-intel_core_5_processor_120u-vs-intel_core_ultra_5_125h)

---

### D3 — Gap qualitativo reale vs Claude Opus/Sonnet

**Benchmark oggettivi (luglio 2026):**
- Claude Opus 4.8: 88.6% SWE-bench Verified, 69.2% SWE-bench Pro.
- Claude Sonnet 4.6: 79.6% SWE-bench Verified.
- Migliore open-weight totale: DeepSeek-V4-Pro-Max 80.6% — ma gira su GPU cluster, non su laptop.
- Qwen3-30B-A3B: competitivo su coding su hardware adeguato.
- DeepSeek-R1-Distill-Qwen-32B: 83% MMLU, 72% MATH-500. Richiede ~20 GB RAM, e al 120U va a ~1.5-2 tok/s: non pratico in interattivo.

**Gap specifico per i ruoli navicella:**
Il gap non è uniforme — dipende fortemente dal task:

- *Scrittura tecnica densa (Demiurgo):* qui il divario è il più grande. I modelli da 7-14B producono output grammaticalmente corretti ma perdono coerenza su testi >1000 token, tendono alla ripetizione, e mancano della densità concettuale di Opus/Sonnet. Non è solo un problema di parametri: è il tipo di dato su cui sono stati addestrati. Nessun benchmark pubblico misura direttamente "scrittura tecnica densa in italiano su fisica teorica" — la valutazione è qualitativa.
- *Ragionamento multi-passo (Capitano):* le versioni distillate di R1 recuperano terreno su task logico-matematici strutturati, ma mancano sull'orchestrazione complessa e sul mantenimento del contesto tra step multipli. La catena di ragionamento esplicita (chain-of-thought) aiuta ma non chiude il gap.
- *Gestione contesto lungo:* Qwen3 14B ha ctx window di 128K, ma in CPU-only la performance degrada significativamente oltre i 4-8K token effettivi per il costo computazionale dell'attention. Questo penalizza il Capitano (che gestisce memoria profonda) e il Demiurgo (che lavora su testi lunghi).
- *Task strutturati e ripetitivi (Argonauta, Rapsodo):* qui il gap è accettabile. Classificazione di fonti, estrazione dati da testo, pre-processing di esami: un Qwen3 8B fa il lavoro a una qualità del 75-80% di Sonnet, sufficiente per task in cui l'output va comunque revisionato.

**Sintesi onesta:** i modelli locali girevoli sul 120U (max ~14B in batch) non sono sostituti di Opus per il Capitano né di Sonnet per il Demiurgo su testi densi. Sono candidati seri solo per i task strutturati dei ruoli leggeri.

Fonti: [LLM Leaderboard Vellum 2026](https://www.vellum.ai/llm-leaderboard) · [Best AI for Coding 2026](https://www.morphllm.com/best-ai-model-for-coding) · [DeepSeek-R1 paper](https://arxiv.org/html/2501.12948v1)

---

### D4 — Architettura ibrida concreta

**Principio di routing:** locale per task che hanno tre caratteristiche contemporaneamente — (a) qualità "buona abbastanza" da modello piccolo, (b) volume alto o frequenza alta (dove il costo API si accumula), (c) nessun requisito di densità narrativa. Claude per tutto ciò che richiede giudizio complesso, italiano tecnico denso, o orchestrazione.

**Proposta concreta:**

| Task | Agente navicella | Locale o Claude | Modello suggerito |
|---|---|---|---|
| Pre-classificazione materiali (inventario fonti) | Argonauta Accademico | Locale | Qwen3 8B Q4 |
| Quiz veloci / flashcard | Demiurgo (task leggero) | Locale | Phi-4-mini |
| Journaling / note brevi | Demiurgo (task leggero) | Locale | Phi-4-mini |
| Estratti strutturati da esami | Argonauta Accademico | Locale | Qwen3 8B Q4 |
| Scrittura capitoli libro di testo | Demiurgo Accademico | Claude Sonnet | Sonnet 4.6 |
| Orchestrazione sessione, memoria profonda | Capitano | Claude Opus | Opus 4.8 |
| Scouting bibliografico e sintesi | Argonauta | Claude Sonnet | Sonnet 4.6 |
| Ricostruzione memoria, reality check | Rapsodo | Claude Sonnet | Sonnet 4.6 |

**Criterio di scelta rapido:** se l'output locale va a un umano come prodotto finito, usa Claude; se l'output va come input a un altro processo (pre-classificazione, estrazione, preparazione dati), il locale regge.

**Risparmio stimato:** i task "locali" in tabella costituiscono forse il 20-30% dei token totali ma sono quelli più ripetitivi. Il risparmio effettivo in termini di costo API dipende dall'intensità d'uso; nell'uso attuale (moderato) probabilmente meno di $5-10/mese. Non è il risparmio la motivazione principale: lo è la privacy del dataset Giuseppe e la disponibilità offline.

---

### D5 — Integrazione tecnica con Claude Code

**Meccanismo nativo (dal blog Ollama, gennaio 2026):**
Dall'aggiornamento v0.14, Ollama espone un endpoint Anthropic-compatibile. Per puntare Claude Code a Ollama:

```
ANTHROPIC_BASE_URL=http://localhost:11434
ANTHROPIC_AUTH_TOKEN=ollama
ANTHROPIC_API_KEY=""
```

Poi `claude --model qwen3:8b` o il modello scelto. Funziona. È documentato ufficialmente su [Ollama docs](https://docs.ollama.com/integrations/claude-code).

**Limitazione critica:** il routing è **session-wide** — si sceglie un solo provider per tutta la sessione di Claude Code. Non è possibile, nell'architettura attuale, far orchestrare il Capitano su Claude mentre i subagenti girano su Ollama nella stessa sessione. La GitHub issue [#38698](https://github.com/anthropics/claude-code/issues/38698) ("Per-agent model provider routing") è aperta ma non implementata.

**Per un routing selettivo per ruolo** servono due strade:

1. *Sessioni separate:* Capitano/Demiurgo su sessione Claude normale; Argonauta/task leggeri su sessione Claude Code con ANTHROPIC_BASE_URL=localhost. Manuale e scomodo.
2. *Orchestratore Python custom:* uno script che legge il tipo di task dal file di stato, decide il provider, chiama l'API corretta (Anthropic SDK o `requests` verso Ollama), e scrive l'output nel filesystem della navicella. Compatibile con la struttura a file esistente. Complessità: media.

Il progetto [claude-ollama-agents](https://github.com/PratikHotchandani22/claude-ollama-agents) mostra un pattern di subagent delegation a Ollama da Claude Code, ma non risolve il routing nativo per-agente.

Fonti: [Ollama Claude Code docs](https://docs.ollama.com/integrations/claude-code) · [GitHub issue #38698](https://github.com/anthropics/claude-code/issues/38698) · [DataCamp tutorial](https://www.datacamp.com/tutorial/using-claude-code-with-ollama-local-models)

---

### D6 — Fattibilità sul 120U: numeri concreti

**Baseline hardware di riferimento (misurato):**
Intel Ultra 5 125H + Arc Xe-LPG 112EU + 64GB DDR5-5600:

| Modello | CPU (tok/s) | iGPU (tok/s) |
|---|---|---|
| llama3.1:8b | 9.76 | 12.69 |
| qwen2.5:7b | 10.26 | 13.06 |
| qwen2.5:32b | 2.46 | 3.44 |
| llama3.3:70b | 1.16 | 1.58 |

Fonte: [nikolasent.github.io, febbraio 2025](https://nikolasent.github.io/hardware/deeplearning/2025/02/09/iGPU-Benchmark-VLM.html)

**Correzione per Core 5 120U:**
- CPU ~32% più lenta del 125H (meno core, architettura più vecchia, meno bandwidth).
- iGPU: Iris Xe G7 80EU vs Arc Xe-LPG 112EU. L'Arc è significativamente più potente (più EU, architettura più recente, bandwidth maggiore). Il gain iGPU sulla 120U sarà modesto — forse 15-20% sopra CPU, non il 30% misurato sul 125H.
- Attivare l'iGPU richiede ipex-llm (Intel), driver grafici aggiornati (≥31.0.101.xxxx), e un setup non banale su Windows (DLL injection, variabili d'ambiente specifiche). Documentato come funzionante per Phi-3 Mini su Iris Xe, ma senza numeri di tok/s pubblicati.

**Stime realiste per il 120U (CPU-only, modalità default Ollama):**

| Modello | Quant | RAM | tok/s stimati | Usabilità |
|---|---|---|---|---|
| Phi-4-mini 3.8B | Q4_K_M | ~2.5 GB | 15-20 | Usabile in real-time |
| Qwen3 8B | Q4_K_M | ~5 GB | 6-8 | Lento ma accettabile per task non interattivi |
| Qwen3 14B | Q4_K_M | ~9 GB | 3-4 | Borderline: batch sì, interattivo no |
| DeepSeek-R1-Distill 14B | Q4_K_M | ~9 GB | 3-4 | Come sopra |
| Qwen3 30B-A3B (MoE) | Q4_K_M | ~18 GB | 4-6 | Sorpresa positiva: MoE attiva solo 3B param per token; da testare |
| Qualsiasi 32B+ dense | Q4_K_M | 20+ GB | <2 | Fuori portata per uso interattivo |
| 70B+ | qualsiasi | >35 GB | <1 | Impossibile (RAM insufficiente a pieno carico) |

**Nota su Qwen3-30B-A3B:** è un modello MoE (Mixture of Experts) da 30B parametri totali ma con ~3B attivi per token. Richiede ~18-20 GB in Q4 ma la velocità di inferenza si avvicina a quella di un modello 3B, non 30B. È il candidato più interessante da testare perché potrebbe offrire qualità da 30B a velocità da 3B sul 120U. Non ho benchmark misurati su questa CPU specifica.

---

### D7 — Confronto di costo

**API Claude (luglio 2026, prezzi standard):**

| Modello | Input $/MTok | Output $/MTok |
|---|---|---|
| Claude Sonnet 4.6 | $3.00 | $15.00 |
| Claude Opus 4.8 | $5.00 | $25.00 |
| Claude Haiku 4.5 | $1.00 | $5.00 |

Fonte: [Anthropic pricing docs](https://platform.claude.com/docs/en/about-claude/pricing) · [metacto.com 2026](https://www.metacto.com/blogs/anthropic-api-pricing-a-full-breakdown-of-costs-and-integration)

**Stima uso mensile navicella (scenario moderato):** 500k token input + 150k token output su Sonnet → $1.50 + $2.25 = **~$3.75/mese**. Scenario intensivo (studio pre-esame, capitoli lunghi): 3 MTok input + 0.5 MTok output → $9 + $7.50 = **~$16.50/mese**.

**Costo locale:** elettricità. Core 5 120U a carico pieno CPU ~15W. 10 ore/settimana di inference = 40 ore/mese × 0.015 kW = 0.6 kWh/mese. A ~0.25 €/kWh (Italia, tariffa domestica) → **€0.15/mese**. Trascurabile.

**Aggiornamento hardware:** non necessario per ciò che è fattibile (≤14B CPU). Un eventuale acquisto di GPU dedicata (es. RTX 4060 laptop, ~€400) sblocca 30B+ a velocità usabile, ma è una spesa che ha senso solo se l'uso locale diventa sistematico e il risparmio API supera i €50-100/anno.

**Conclusione costo:** il risparmio economico assoluto su un uso moderato è modesto (€3-15/mese). Il vero vantaggio del locale non è il costo ma la **privacy del dataset Giuseppe** e la **disponibilità offline** (studio senza connessione, treni, biblioteche). Il calcolo cambia se l'uso diventa molto intensivo (>10 MTok/mese).

---

### Raccomandazione sintetica

**Verdetto: parzialmente fattibile, con limite netto sulla qualità dei ruoli pesanti.**

Il 120U può girare in modo usabile solo modelli fino a 8B (real-time) o 14B (batch). Questi modelli coprono i task strutturati e ripetitivi dei ruoli leggeri (Argonauta, Rapsodo light tasks, quiz, journaling) a una qualità del 70-80% di Sonnet — accettabile quando l'output è intermedio, non quando è il prodotto finito consegnato a Giuseppe. Il Capitano e il Demiurgo Accademico restano su Claude senza alternative locali credibili su questo hardware.

Il Qwen3-30B-A3B (MoE) è l'incognita più interessante: la sua struttura MoE potrebbe sbloccare qualità da modello grande a velocità da modello piccolo sul 120U — ma mancano benchmark specifici su questa CPU.

L'integrazione con Claude Code esiste ed è funzionante (ANTHROPIC_BASE_URL), ma il routing per-agente non è ancora nativo: per un sistema ibrido vero serve un orchestratore Python custom che dispatchi sul provider giusto in base al tipo di task.

**Prossima mossa concreta:**
1. Installare Ollama su Windows (`winget install Ollama.Ollama`).
2. Pullare Phi-4-mini e Qwen3:8b: `ollama pull phi4-mini` / `ollama pull qwen3:8b`.
3. Misurare tok/s reali con `/api/generate` e cronometro — non fidarsi delle stime.
4. Testare Qwen3-30B-A3B:q4_k_m se la RAM lo consente (verificare occupazione effettiva).
5. Solo dopo i numeri reali: decidere se costruire l'orchestratore ibrido.

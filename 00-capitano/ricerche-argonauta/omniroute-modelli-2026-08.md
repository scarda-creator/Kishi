---
type: ricerca
autore: Argonauta
data: 2026-08-16
oggetto: Modelli gratuiti collegabili a OmniRoute — dati per Dedalo e Temi
stato: completo
fonti-base: D7-economia (31/7/2026), omniroute-integrazioni (25/7/2026), ricerca web 16/8/2026
---

# OmniRoute — modelli gratuiti, ban, prompt di sistema, routing per tipo di lavoro

Questo file è il deliverable del brief `00-capitano/dedalo/brief-omniroute.md`.
Scritto a sezioni: ogni sezione è autonoma, il file è utile anche parziale.

---

## SEZIONE 1 — Modelli gratuiti collegabili a OmniRoute oggi

Data di riferimento: 16/8/2026. Dati da fonti primarie e da D7-economia (31/7/2026)
dove indicato. I rate limit di tutti i provider gratuiti sono dichiarati "soggetti a
cambiare senza preavviso" — trattare come fotografia, non come garanzia.

OmniRoute (v3.8.49/50, 12 agosto 2026) dichiara 339 provider totali, 90+ gratuiti,
~1.53B token/mese documentati sui tier gratuiti stabili. La lista qui sotto riporta
solo i provider rilevanti per la navicella: tool-calling funzionante, privacy
compatibile con il vincolo "nessun dato personale esce", tier stabile (non crediti).

---

### 1. Groq

**Fornitore:** Groq Inc., piattaforma cloud proprietaria, hardware GroqChip.
**Autenticazione:** chiave API gratuita su console.groq.com, nessuna carta.
**Tier:** permanente stabile. Limiti all'organizzazione, non alla chiave: aggiungere
più chiavi non aumenta le quote.

Modelli disponibili su free tier (dalla pagina ufficiale console.groq.com/docs/rate-limits,
letta 16/8/2026; confermata anche in D7 su fonte primaria 31/7/2026):

| ID modello | RPM | RPD | TPM | TPD | Note |
|---|---|---|---|---|---|
| `llama-3.1-8b-instant` | 30 | 14.400 | 6.000 | 500.000 | ctx 128K |
| `llama-3.3-70b-versatile` | 30 | 1.000 | 12.000 | 100.000 | ctx 128K |
| `openai/gpt-oss-120b` | 30 | 1.000 | 8.000 | 200.000 | ctx stimato 128K+ |
| `openai/gpt-oss-20b` | 30 | 1.000 | 8.000 | 200.000 | ctx stimato 128K |
| `qwen/qwen3.6-27b` | 30 | 1.000 | 8.000 | 200.000 | ctx stimato 128K |
| `groq/compound` | 30 | 250 | 70.000 | — | orchestrato multi-step |
| `groq/compound-mini` | 30 | 250 | 70.000 | — | orchestrato, leggero |
| `meta-llama/llama-prompt-guard-2-86m` | 30 | 14.400 | 15.000 | 500.000 | classification only |

**Tool-calling:** confermato su fonte primaria Groq per `llama-3.3-70b-versatile`,
`openai/gpt-oss-120b`, `qwen/qwen3.6-27b` (console.groq.com/docs/tool-use, D7 31/7/2026).
Non confermato per `compound`/`compound-mini` su questa ricerca.

**Privacy:** "By default, Groq does not retain customer data for inference requests"
(fonte primaria console.groq.com/docs/your-data, D7 31/7/2026). Zero Data Retention
self-serve attivabile. Nessuna dichiarazione di training trovata. **Stato gate-privacy:
chiuso.**

**Finestra scorrevole Groq:** RPM su rolling 60 secondi; TPM su rolling 60 secondi.
Header di risposta: `x-ratelimit-remaining-requests`, `x-ratelimit-remaining-tokens`,
`x-ratelimit-reset-requests`, `x-ratelimit-reset-tokens` (dichiarati su GroqDocs).

**Modello consigliato per la navicella:** `llama-3.3-70b-versatile` (tool-calling
robusto, RPD 1K sufficiente per lavori meccanici a bassa cadenza, contesto 128K).
`llama-3.1-8b-instant` per passate di volume quando la qualità è meno critica (RPD
14.4K — il tetto più alto fra tutti i candidati).

---

### 2. Cerebras Inference

**Fornitore:** Cerebras Systems, hardware CS-3 proprietario.
**Autenticazione:** chiave API gratuita su inference.cerebras.ai, nessuna carta.
**Tier:** permanente stabile.

Modelli su free tier (inference-docs.cerebras.ai/support/rate-limits, D7 31/7/2026;
nota: la lista può essere cambiata da luglio a oggi — verificare prima di configurare):

| ID modello | RPM | TPM | TPH | TPD | Contesto free tier |
|---|---|---|---|---|---|
| `gpt-oss-120b` | 5 | 30.000 | 1.000.000 | 1.000.000 | **8.192 token** |
| `zai-glm-4.7` | 5 | 30.000 | 1.000.000 | 1.000.000 | **8.192 token** |
| (possibile terzo) | 5 | — | — | — | — |

**ATTENZIONE CONTESTO:** il free tier Cerebras limita la finestra a 8.192 token.
Un singolo file di testo di medie dimensioni può esaurire questo budget. Non adatto
a task che richiedono contesti lunghi.

**Tool-calling:** non confermato su fonte primaria Cerebras per i modelli del free
tier specificamente. Gli stessi modelli supportano tool-calling su Groq e SiliconFlow
(inferenza per analogia, non citazione Cerebras). Da verificare prima dell'uso.

**Privacy:** dichiarazione esplicita e datata — "We do not retain inputs and outputs
associated with our training, inference and chatbot Services" (cerebras.ai/privacy-policy,
effective 27 agosto 2024, D7 31/7/2026). Nessuna differenziazione free/paid.
**Stato gate-privacy: chiuso** — è il più pulito fra tutti i candidati.

**Velocità:** Cerebras è il provider più veloce in assoluto (benchmark: >2.600 tok/s
su Llama 4 Scout per alcuni configurazioni, fonti secondarie 2026). Utile per passate
di volume quando la velocità conta più del contesto.

---

### 3. Google AI Studio / Gemini

**Fornitore:** Google DeepMind.
**Autenticazione:** chiave API Google (aistudio.google.com), nessuna carta.
**Tier:** permanente stabile per la famiglia Flash; 2.5 Pro è fortemente limitato.

Modelli su free tier al 16/8/2026 (da OmniRoute FREE_TIERS.md + fonti secondarie
verificate; i modelli 2.0 Flash/Flash-Lite sono stati rimossi dal free tier giugno 2026):

| ID modello | RPM | RPD | TPM | Contesto |
|---|---|---|---|---|
| `gemini-2.5-flash` | 15 | 1.500 | 1.000.000 | 1M token |
| `gemini-2.5-flash-lite` | 30 | 1.500 | — | 1M token |
| `gemini-2.5-pro` | 5 | 25 | 250.000 | 1M token |
| Gemma (famiglia) | variabile | variabile | — | variabile |

**Tool-calling:** "partial support" su fonti secondarie. Da verificare per il task specifico.

**Privacy: GATE APERTO — da non usare per dati non-anonimi.** La policy Google AI
Studio dichiara che i prompt possono essere usati per migliorare i prodotti Google
se l'utente è fuori dall'EU/UK/EEA. Istruzioni in IT: l'account Google di Giuseppe
è probabilmente EU (Sapienza), ma la garanzia dipende dal paese dell'account. Da
verificare caso per caso. Per sicurezza: usare solo per testo completamente anonimo
e non-sensibile. **Ierofante deve chiudere questo punto prima di attivare Gemini.**

**Nota contesto:** il contesto da 1M token è la principale ragione per includere
Gemini nonostante il gate-privacy aperto — per task che richiedono finestre lunghissime
di testo anonimo, Gemini è l'unica opzione gratuita.

---

### 4. OpenRouter (suffisso `:free`)

**Fornitore:** OpenRouter Inc., aggregatore.
**Autenticazione:** chiave API gratuita su openrouter.ai, nessuna carta.
**Tier:** permanente con caveat; modelli gratuiti ruotano senza preavviso.

| Configurazione | RPM | RPD |
|---|---|---|
| Senza crediti | 20 | 50 |
| Con $10 una-tantum (crediti non scadono) | 20 | 1.000 |

Modelli al 16/8/2026: 28+ con suffisso `:free` (lista viva su openrouter.ai/models
con filtro free). Include: DeepSeek R1, Llama 4 Scout, Qwen3 Coder 480B. La lista
cambia senza preavviso.

**Tool-calling:** l'auto-router (feb 2026) seleziona modelli con tool-calling se
richiesto, ma la selezione non è deterministica — non è possibile garantire quale
modello risponde a quale richiesta.

**Privacy: GATE RICHIEDE AZIONE MANUALE.** Il default di OpenRouter per i modelli
free permette il routing verso provider che possono allenare sui dati utente. Va
disattivato esplicitamente nell'account settings ("Allow routing to providers that
may train on your data" → OFF per free models). Se non disattivato: qualsiasi testo
inviato può finire in training set di terzi. **Non attivare prima di verificare il
toggle.**

**Contesto:** varia per modello, fino a 1M per alcuni. Non garantito sul tier free.

---

### 5. Mistral La Plateforme (tier "Experiment")

**Fornitore:** Mistral AI.
**Autenticazione:** chiave API gratuita su console.mistral.ai, nessuna carta.
**Tier:** "Experiment" — dichiarato esplicitamente per valutazione, non produzione.

| Limite | Valore |
|---|---|
| RPM | 2 |
| TPM | 500.000 |
| Token/mese | ~1 miliardo |

Modelli inclusi: Mistral Small, Medium, Large, Codestral. Contesto 32K-256K per modello.

**2 RPM è il limite più stretto di tutti i candidati analizzati** — praticamente
inutilizzabile per qualunque loop agentivo. Equivale a una richiesta ogni 30 secondi.

**Tool-calling:** confermato per Mistral models.

**Privacy:** Mistral "opt-into data training" — la policy default potrebbe permettere
il training. Verifica account settings. Gate non chiuso di default. Mistral ha smesso
di pubblicare i limiti esatti pubblicamente: i numeri qui vengono da OmniRoute
FREE_TIERS.md (16/8/2026), non da fonte primaria Mistral diretta.

**Valutazione:** 2 RPM lo rende inadatto come provider primario. Utile solo come
fallback di riserva per task singoli, non per pipeline.

---

### 6. SambaNova

**Fornitore:** SambaNova Systems.
**Autenticazione:** chiave API gratuita su cloud.sambanova.ai.
**Tier:** "forever free" dichiarato da maggio 2026 per alcuni modelli.

| ID modello | RPM | RPD | TPD |
|---|---|---|---|
| `Meta-Llama-3.1-405B-Instruct` | 30 | — | — |
| `minimax/minimax-m2.7` | 20 | 20 | 200.000 |

**Nota:** i dati SambaNova sono parzialmente da D7 (31/7/2026, dove era ancora
classificato come crediti) e parzialmente da fonti secondarie (16/8/2026 "forever
free"). Da verificare su docs.sambanova.ai prima di configurare — la situazione
potrebbe essere cambiata.

**Tool-calling:** non confermato su questa ricerca per i modelli free specificamente.

**Privacy:** non verificata su fonte primaria in questa ricerca.

---

### 7. Cloudflare Workers AI

**Fornitore:** Cloudflare.
**Autenticazione:** account Cloudflare gratuito, nessuna carta.
**Tier:** permanente. Quota espressa in "Neurons" (unità proprietaria Cloudflare).

| Limite | Valore |
|---|---|
| Neurons/giorno | 10.000 |
| Contesto modelli | 2K–8K token |

**La finestra di contesto 2K-8K è proibitiva per quasi tutti i task della navicella.**
Adatto solo a classificazioni su testi cortissimi. Da non considerare come provider
primario.

**Privacy:** no data training dichiarato. **Tool-calling:** parziale.

---

### Riepilogo per Dedalo

| Provider | RPM | RPD | Contesto | Tool-call | Privacy gate | Raccomandazione |
|---|---|---|---|---|---|---|
| **Groq** | 30 | 1K–14.4K | 128K | Sì (confermato) | Chiuso | **Primo candidato** |
| **Cerebras** | 5 | — | **8K** | Non confermato | Chiuso (il più pulito) | Secondo candidato — solo task corti |
| **Google Gemini** | 15–30 | 1.5K | 1M | Parziale | Aperto (verifica EU) | Solo testo anonimo, dopo gate Ierofante |
| **OpenRouter :free** | 20 | 50–1K | variabile | Sì (non deterministico) | Manuale (toggle off) | Terzo, con toggle verificato |
| **Mistral** | **2** | — | 32K–256K | Sì | Non chiuso default | Solo fallback singolo |
| **SambaNova** | 20–30 | 20 | — | Non confermato | Non verificata | Da non usare prima di verifica |
| **Cloudflare** | — | — | **2K–8K** | Parziale | Chiuso | Inadatto per navicella |

---

## SEZIONE 2 — Condizioni che fanno scattare le sospensioni di account

Questa sezione serve a Temi come filtro preventivo. La distinzione centrale:

- **Rate limit (HTTP 429)** = temporaneo, auto-reset al termine della finestra.
  Non è una sospensione — è il comportamento normale quando si supera la quota.
  Va gestito con backoff, non con allarme.
- **Sospensione account** = manuale o automatica, richiede contatto col support
  per riaverla. È causata da violazioni ToS, non da singoli 429.

I trigger qui sotto sono quelli che portano alla sospensione, non al 429.

---

### Meccanismo di enforcement del rate limit (come funziona tecnicamente)

Tutti i provider analizzati usano **sliding window counter** (produzione standard,
Cloudflare dichiara 0.003% di errore su 400M request): la finestra scorre
continuamente, non si azzera di colpo a :00. Questo significa:

- Un burst di 30 request in 10 secondi esaurisce l'RPM e blocca per i successivi
  50 secondi, anche se tecnicamente il minuto non è finito.
- **Burst dopo silenzio**: se la navicella è ferma 10 minuti e poi lancia 30
  request in 5 secondi, il rolling window le conta tutte — nessun "credito
  accumulato". Il burst si comporta identicamente a qualsiasi altro burst.
- Il modo di sbagliare peggiore non è superare l'RPM, è farlo ignorando gli
  header di risposta. Groq dichiara: `x-ratelimit-remaining-requests`,
  `x-ratelimit-remaining-tokens`, `x-ratelimit-reset-requests`,
  `x-ratelimit-reset-tokens` in ogni risposta. Temi deve leggerli e frenare
  prima di azzerarli, non dopo aver ricevuto un 429.

**Concorrenza:** RPM e TPM si misurano su tutte le richieste simultanee
aggregate. Tre process che mandano 10 request/min ciascuno consumano 30 RPM
dall'unica quota dell'account. Su Groq i limiti sono "per organizzazione",
non "per chiave API" — aggiungere chiavi non moltiplica la quota.

---

### Trigger di sospensione per provider

#### Groq (da Groq Services Agreement, console.groq.com/docs/legal/services-agreement)

Trigger documentati che portano a sospensione:

1. **Account multipli per aggirare i limit** — "creating multiple accounts to
   circumvent rate limits" → sospensione immediata (dichiarato).
2. **Carico sproporzionato sull'infrastruttura** — "imposing an unreasonably
   large or disproportionate load on Groq infrastructure" → sospensione senza
   preavviso.
3. **Chiave condivisa tra organizzazioni** — i limiti sono per-organizzazione;
   condividere la chiave con utenti di altri account è violazione ToS.
4. **Scraping bulk automatizzato** — "automated scraping or bulk message
   generation" (dichiarato in fair-use policy). Attenzione: la navicella fa
   lavoro automatizzato ma non scraping di siti terzi; il rischio va valutato
   caso per caso per il tipo di task.
5. **Pattern anomali rilevati**: Groq si riserva di sospendere "at any time
   without prior notice" se necessario per proteggere l'infrastruttura o altri
   utenti. Nessun threshold numerico esplicito dichiarato per questo trigger.

**Non-trigger (solo 429):** superare RPM o TPM su rolling window → 429 con
`Retry-After`, auto-reset. Non è una sospensione.

**Dati che non ho trovato su fonte primaria Groq:**
- Soglia esatta di 429 consecutivi prima di escalation a sospensione
- Tempo di finestra per "unreasonable load" (nessun numero dichiarato)
- Se un pattern di picchi ripetuti (es: 30 req/min ogni ora esatta) sia
  classificato come abuso automatico

#### OpenRouter

Trigger di sospensione (da ToS e behavior documentato):

1. **Account multipli**: non dichiarato esplicitamente nei docs trovati, ma
   implicito nella struttura "per account".
2. **Routing non conforme**: se si bypassa il routing OpenRouter per accedere
   ai provider sottostanti direttamente con le loro chiavi (aggira il tracking
   OpenRouter) → potenzialmente segnalato.
3. **Gate training non impostato**: non è un trigger di sospensione, ma un
   rischio dati (training sui dati inviati). Da configurare, non da ignorare.

**Dati non trovati su fonte primaria:** OpenRouter non pubblica criteri di
sospensione dettagliati. I 429 sono la gestione standard.

#### Cerebras

- Non ha trovato documentazione esplicita di trigger di sospensione in questa
  ricerca (solo dati su rate limit / 429).
- Limite 5 RPM è stretto: qualunque loop agentivo senza throttle raggiungerà
  429 immediatamente. Questo non è sospensione — è operatività normale.

---

### Regole operative per Temi (da tradurre in codice)

**Regola 1 — Finestra scorrevole con cuscino:**
Non usare il rate limit come tetto da raggiungere; usarlo come tetto da non
superare. Target operativo: ≤ 80% dell'RPM disponibile. Su Groq: max 24
request/min invece di 30.

**Regola 2 — Leggi gli header prima di mandare:**
Prima di ogni request, controllare `x-ratelimit-remaining-requests` e
`x-ratelimit-remaining-tokens`. Se remaining ≤ 3 request o ≤ 10% dei token:
pausa fino a `x-ratelimit-reset-requests` (timestamp di reset dichiarato
nell'header).

**Regola 3 — Backoff esponenziale su 429:**
Su 429: aspettare `Retry-After` header (se presente) + jitter random (0.5-2s
aggiuntivi per evitare herd effect se più processi girano). Non ritentare
immediatamente.

**Regola 4 — Un solo processo per chiave:**
Non lanciare più process paralleli che condividono la stessa chiave API senza
contabilizzazione centralizzata. La quota è per-organizzazione: due Argonauti
simultanei su Groq consumano dal medesimo RPM=30. Se si vuole parallelismo,
Temi deve fare da semaforo con un contatore condiviso.

**Regola 5 — Burst dopo silenzio = trattare come burst normale:**
Non c'è "credito accumulato" nelle sliding window. Se la navicella è ferma 8
ore e poi un Argonauta parte, la prima raffica di request viene contata sulla
stessa finestra di 60 secondi come sempre. Nessuna logica di warm-up speciale
è necessaria — il throttle normale gestisce correttamente.

**Regola 6 — Nessuna chiave condivisa:**
Ogni provider deve avere la propria chiave API nella config di OmniRoute.
Groq vieta esplicitamente la condivisione tra organizzazioni.

**Numero da implementare come finestra scorrevole (Groq, modello primario):**
- Tetto effettivo: 24 RPM (80% di 30)
- Token/min: max 8.000 su `llama-3.3-70b-versatile` (ricalcola per 80%: 9.600)
- Controllo prima del burst: se negli ultimi 60s sono uscite ≥ 20 request, pausa

---

## SEZIONE 3 — La repo dei prompt di sistema

Giuseppe: "abbiamo una repo di GitHub con i prompt dei modelli, per cui se è possibile
magari utilizzare modelli gratuiti dandogli quelle istruzioni mi sembra intelligente."

Nelle 44 fonti stellate ci sono **tre repo di prompt**, con profili diversi:

| Repo | Stars | Contenuto | Rilevanza per l'idea |
|---|---|---|---|
| **x1xhlol/system-prompts-and-models-of-ai-tools** | 141.788 | Prompt estratti/reverse-engineered da Claude Code, Cursor, Windsurf, Devin, Kiro, ecc. | Alta per capire come pensano i tool; bassa per uso diretto su modello piccolo |
| **asgeirtj/system_prompts_leaks** | 55.830 | Prompt estratti da Claude Fable 5, Opus 4.8, Claude Code, ChatGPT GPT-5.6, Gemini 3.5 Flash, ecc. | Stessa categoria di x1xhlol |
| **Piebald-AI/claude-code-system-prompts** | 11.742 | Il system prompt di Claude Code per intero, con tutti i tool description e sub-agent prompts, aggiornato a ogni versione | Più preciso e più strutturato dei precedenti |
| **repowise-dev/claude-code-prompts** | 1.150 | Template di prompt indipendenti (non estratti) per agenti, delegazione, memoria, coordinazione multi-agente | Diverso: è un kit da costruire, non prompt da copiare |

**La repo che Giuseppe aveva in mente è quasi certamente x1xhlol o asgeirtj** — le
più grandi, le più condivise online, quelle che la gente cita per "i prompt dei
modelli AI". Contengono i prompt interni di Claude Code, Cursor, Windsurf e decine
di altri tool: sono emerse da reverse-engineering e leaks.

---

### Valutazione dell'idea: dare questi prompt a un modello piccolo

**Dove l'idea tiene:**

I prompt in x1xhlol/asgeirtj/Piebald-AI sono prompt comportamentali, non parametri
di training. Contengono istruzioni come:
- "Usa il tool di lettura file prima di modificare"
- "Dichiara sempre il path del file che scrivi"
- "Non inventare — se non sai, dillo"
- Strutture precise su come gestire tool-calls in sequenza

Un modello piccolo (es. Llama 3.3 70B su Groq) guidato da queste istruzioni si
comporta diversamente dal modello nudo: i vincoli comportamentali dichiarati nel
sistema prompt vengono seguiti anche da modelli open-weight di dimensioni medie,
perché è il tipo di istruzione per cui il fine-tuning RLHF è più efficace.
**Per task meccanici e strutturati, un system prompt preciso può alzare la resa
in modo misurabile.** Questo è documentato empiricamente nella letteratura sui
"prompt engineers" — non è magia, è il fatto che un modello segue vincoli espliciti
meglio di quanto generi i vincoli da sé.

Il caso d'uso concreto per la navicella: un Rapsodo leggero (classificazione di
note, pre-tagging di file) che gira su Groq con un system prompt che dice
"classifica solo tra le categorie X, Y, Z, non inventare categorie nuove, formato
output JSON, nessun testo fuori dal JSON" si comporta significativamente meglio
che lo stesso modello senza.

**Dove l'idea non regge:**

1. **Un prompt non compra capacità assenti.** Il system prompt di Claude Code è
   ottimizzato per Claude — un modello allenato con RLHF su migliaia di sessioni
   di coding reali e fine-tuned per seguire esattamente quel tipo di istruzioni.
   Applicare lo stesso prompt a Llama 3.3 70B produce un modello che *prova* a
   seguirle, ma manca del training specializzato. Il divario è più sottile per
   istruzioni semplici, più largo per catene di ragionamento complesse.

2. **Il prompt di Claude Code è lungo.** Piebald-AI documenta che il system prompt
   completo con tutti i tool description occupa ~8-15K token (stima dalla
   struttura della repo — non ho un conteggio esatto). Su Cerebras (8K contesto
   free tier), il solo system prompt potrebbe esaurire l'intera finestra. Su Groq
   con 6K TPM, un prompt lungo riduce drasticamente quanti token restano per la
   request effettiva.

3. **I prompt estratti descrivono il comportamento del modello host, non
   istruzioni universali.** Alcune frasi sono calibrate su come Claude interpreta
   certi costrutti ("use artifacts for...") — su un altro modello quelle stesse
   frasi possono essere ignorate, interpretate diversamente, o creare confusione.

4. **La repo asgeirtj contiene prompt estratti da Opus 4.8 e Claude Code della
   versione attuale** — hanno valore descrittivo per capire come Anthropic istruisce
   i suoi modelli, ma usarli come sistema prompt su Groq non replica il contesto
   di fine-tuning su cui sono stati costruiti.

---

### Raccomandazione operativa

**Usare repowise-dev/claude-code-prompts come punto di partenza**, non x1xhlol/asgeirtj.
Quella repo è un kit di prompt indipendenti progettati per funzionare con agenti
generici — non sono legati a Claude. Contiene template per:
- delegazione di task a sub-agenti
- gestione della memoria tra sessioni
- coordinazione multi-agente

**Per il task specifico del routing su Groq**, il system prompt dovrebbe essere
scritto apposta per la navicella (Dedalo lo può progettare in 20 minuti) seguendo
questo schema:
- ruolo: "sei un estrattore/classificatore strutturato"
- formato output: JSON rigido con schema fisso
- vincoli: "non inferire, non inventare, se non trovi il dato scrivi null"
- nessuna presa in carico di task fuori dalla categoria assegnata

Questo funziona su modelli medi. Non ha bisogno di copiare il prompt di Claude.

**Piebald-AI/claude-code-system-prompts** è utile per capire *come* Anthropic
struttura i tool-use prompt — può ispirare la struttura del prompt custom di Dedalo,
senza essere copiato letteralmente.

---

## SEZIONE 4 — Routing per tipo di lavoro e dati che escono dal computer

Il vincolo costituzionale è assoluto: nulla della memoria, di L5, del profilo di
Giuseppe, o dei suoi materiali d'esame può uscire dalla macchina verso un provider
esterno. Questa sezione valuta ogni tipo di task meccanico rispetto a due domande:
(a) un modello gratuito regge senza degradare?, (b) quali dati escono e verso chi?

---

### Task che possono girare su provider gratuito

**1. Estrazione di testo strutturato (da file già letti in locale)**

Descrizione: data una stringa di testo grezzo (es. output di pdf_estrai_testo.py),
identificare ed estrarre elementi con struttura predefinita (autori, titoli,
date, abstract, equazioni, numeri di pagina).

Modello minimo richiesto: qualsiasi modello con context 8K+ e istruzioni precise.
Llama 3.3 70B su Groq regge.

Dati che escono: il testo grezzo estratto dal PDF. Se il PDF è un paper scientifico
pubblico → accettabile. Se è un materiale d'esame di Giuseppe → **non esce.**

Filtro Temi: il path del file sorgente deve essere controllato contro una whitelist
di path "anonimi" (es. `/Materiali-studio/papers/` per paper pubblici). Qualunque
file in `/02-accademico/`, `/01-personale/`, o con pattern di nome che includa
"quiz", "esame", "prova", "voto", "Scarda" → rimane locale.

**2. Deduplica di liste**

Descrizione: data una lista di stringhe (es. lista di titoli di paper, lista di
keyword), identificare duplicati esatti o quasi-esatti.

Modello minimo: qualunque. Anche `llama-3.1-8b-instant` su Groq regge.

Dati che escono: le stringhe della lista. Se la lista è di titoli di paper pubblici
→ accettabile. Se la lista è di note personali → non esce.

Filtro Temi: valutare il contenuto, non solo il path. Se la stringa contiene un
nome proprio non-pubblico, numero di matricola, voto, riferimento personale → non esce.

**3. Normalizzazione di formato (JSON, CSV, markdown → struttura target)**

Descrizione: prendere testo con struttura informale e riformattarlo in schema fisso.
Es: una lista di voce-note trascritte → JSON con campi predefiniti.

Modello minimo: qualunque con buon following di istruzioni. Llama 3.3 70B.

Dati che escono: il testo da riformattare. Se il testo è corpus di paper → ok.
Se è output del Rapsodo o note personali → non esce.

**4. Classificazione coarse-grained**

Descrizione: assegnare ogni elemento di una lista a una categoria tra un insieme
predefinito e finito. Es: "questo paper appartiene alla categoria A, B, o C?".

Modello minimo: qualsiasi con buona capacità di seguire formati JSON. Su Groq anche
llama-3.1-8b-instant per categorie semplici.

Dati che escono: il testo da classificare. Stesso filtro del punto 3.

**5. Conteggio e statistiche su corpus di testo**

Descrizione: contare occorrenze di pattern, frequenza di parole, lunghezza di sezioni.

Nota: questo tipo di task non richiede un LLM — uno script Python locale è sempre
preferibile (zero dati escono). Usare un LLM per conteggio è spreco di RPM.

Temi deve segnalare quando un task di conteggio puro viene instradato verso un
provider — è inefficiente e rischio non necessario.

---

### Task che NON possono girare su provider gratuito

| Task | Motivo |
|---|---|
| **Generazione di capitoli, unità didattiche, spiegazioni dense** | "Opus va dove nasce l'idea" (regola cementata). La qualità degraderebbe in modo misurabile; Dedalo ha già la scommessa sull'Accademico-Opus. |
| **Qualunque task che tocca L5, L4, L3** | Dati psicologici, profilo, memoria — mai escono. Vincolo costituzionale, non negoziabile. |
| **Quiz d'esame (contenuto Demiurgo Accademico)** | I materiali d'esame di Giuseppe sono suoi. Mandare testo di quiz verso Groq/Cerebras è dati personali verso un cloud terzo. Non esce. |
| **Analisi della traiettoria, decisioni d'architettura** | Lavoro degli attivi (Mnemosyne, Dedalo) — richiedono giudizio e continuità di contesto, non meccanica. |
| **Note personali (Rapsodo input/output)** | Dati personali di Giuseppe — journal, riflessioni, stato emotivo. Non escono mai. |
| **Riepilogo settimanale** | Contiene stato accademico e personale di Giuseppe — dato identificativo. Non esce. |
| **Classificazione di documenti L4/L5** | Anche solo sapere *quali* temi compaiono in L5 è informazione sensibile. Non esce. |

---

### Filtro duro per Temi — implementazione

Prima di ogni routing verso provider esterno, Temi controlla:

**Check 1 — Path whitelist:**
Il file sorgente deve essere in una delle cartelle ammesse:
- Paper/libri pubblici scaricati (path da definire in config)
- Corpus di testo accademico anonimo
- File di sistema senza contenuto personale (es. log di token usage aggregato senza testo delle sessioni)

**Non ammesso** per routing esterno:
- `/01-personale/` (intero albero)
- `/02-accademico/` (qualunque file, inclusi materiali d'esame e note)
- `/00-capitano/memoria/` (qualunque file)
- Qualunque file con L3, L4, L5 nel path o nel nome

**Check 2 — Keyword scan sul testo:**
Prima di inviare, scansione rapida locale del testo per:
- Nome "Giuseppe" o "Scarda" o "giuse.scarda"
- Numeri che assomigliano a matricole o voti (pattern regex)
- Path di file interni alla navicella

Se trovati → blocco, il task resta locale (su Ollama se disponibile, altrimenti
informa il chiamante che non può essere eseguito fuori dalla macchina).

**Check 3 — Dimensione del testo:**
Groq ha 6K-12K TPM sul free tier. Un testo > 4K token occuperà la maggior parte
del budget. Temi deve stimare il token count prima di inviare e rifiutare se supera
l'80% del TPM disponibile nella finestra corrente.

---

### Schema decisionale per Dedalo

```
Task arriva a Temi
│
├─ È generazione sostanziale (testo denso, quiz, analisi)? → Claude locale (CLI)
│
├─ Tocca L3/L4/L5 o file personali? → Claude locale (CLI) o blocco
│
├─ È puro conteggio/normalizzazione su struttura senza testo? → Script Python locale
│
└─ È task meccanico su testo anonimo?
   │
   ├─ Contesto richiesto > 50K token? → Gemini Flash (se gate Ierofante chiuso per EU)
   │
   ├─ Tool-calling richiesto, task medio? → Groq llama-3.3-70b-versatile
   │
   ├─ Volume alto, qualità bassa accettabile? → Groq llama-3.1-8b-instant
   │
   └─ Groq quota esaurita? → OpenRouter :free (con toggle training OFF verificato)
```

---

## Fonti dichiarate

Fonti primarie (lette direttamente o verificate in D7-economia 31/7/2026):
- `console.groq.com/docs/rate-limits` (letta 16/8/2026 via WebFetch)
- `console.groq.com/docs/legal/services-agreement` (riferita da search results 16/8/2026)
- `inference-docs.cerebras.ai/support/rate-limits` (D7, 31/7/2026)
- `cerebras.ai/privacy-policy` (D7, 31/7/2026 — effective 27/8/2024)
- `openrouter.ai/docs/api-reference/limits` (D7, 31/7/2026)
- `openrouter.ai/docs/features/privacy-and-logging` (D7, 31/7/2026)
- `code.claude.com/docs/en/llm-gateway` (D7, 31/7/2026)
- OmniRoute FREE_TIERS.md e wiki Free-Tiers (letti via WebFetch 16/8/2026)
- OmniRoute PROVIDER_REFERENCE.md (letto via WebFetch 16/8/2026, generato 12/8/2026)
- `openrouter.ai/blog/tutorials/free-llm-apis-compared/` (letto via WebFetch 16/8/2026)

Fonti secondarie rilevanti (per verifica incrociata):
- tokenmix.ai/blog/groq-free-tier-limits-2026 (16/8/2026)
- costbench.com/software/llm-api-providers/groq/free-plan/ (16/8/2026)
- pinggy.io/blog/omniroute_ai_gateway_security/ (16/8/2026)
- OmniRoute wiki: Free Provider Rankings (16/8/2026)

Non confermato su fonte primaria in questa ricerca:
- Soglia esatta di 429 consecutivi prima di escalation a sospensione Groq
- Tool-calling Cerebras sui tre modelli free specifici
- Limiti SambaNova aggiornati ad agosto 2026 (situazione cambiata da D7 luglio)
- Mistral limiti RPM esatti su fonte primaria (numero 2 RPM da OmniRoute wiki, non da Mistral diretta)
- Contesto effettivo di Groq per `openai/gpt-oss-120b` e `qwen/qwen3.6-27b` (stimato, non misurato)

---

stato: completo al 16/8/2026

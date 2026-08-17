---
tipo: ricerca-operativa
autore: Argonauta
data: 2026-08-16
oggetto: Provider OmniRoute — dove si prende la chiave, cosa dà il gratuito, permanente o credito
basato-su:
  - omniroute-cosa-collegare.md (Argonauta, 16-08-2026)
  - omniroute-modelli-2026-08.md (Argonauta, 16-08-2026)
  - omniroute-gate-tos-2026-08.md (Ierofante, 16-08-2026)
  - ricerca web 16-08-2026 (fonti dichiarate per sezione)
stato: completo al 2026-08-16
---

# OmniRoute — chiavi, limiti, permanente vs credito

Questo file risponde a un'unica domanda operativa ripetuta per ogni provider: dove
prendo la chiave, mi serve la carta, quante richieste ho, quali modelli, e il tier
dura o muore? La distinzione permanente/credito è marcata in grassetto per ogni voce
perché è la variabile che ha già ucciso `kimi-coding`.

Ogni dato riporta la fonte. Dove la fonte primaria non era verificabile direttamente,
viene dichiarato — non si scrive "verificato" su dati che non lo sono.

---

## SEZIONE A — Provider da valutare uno per uno

---

### 1. `gemini` — Google AI Studio

**URL chiave:** https://aistudio.google.com/apikey
(Account Google esistente, zero clic aggiuntivi per creare il progetto se lo si fa
dall'interfaccia di AI Studio direttamente.)

**Carta di credito:** NO. Il tier gratuito di AI Studio non richiede carta.

**Cosa dà il gratuito (dati al 2026-08-16):**

| Modello | RPM | RPD | TPM | Contesto |
|---|---|---|---|---|
| `gemini-2.5-flash` | 15 | 1.500 | 1.000.000 | 1M token |
| `gemini-2.5-flash-lite` | 30 | 1.500 | — | 1M token |
| `gemini-2.5-pro` | 5 | 25 | 250.000 | 1M token |

Fonti: OmniRoute FREE_TIERS.md (letto 16-08-2026) + omniroute-modelli-2026-08.md.
I modelli 2.0 Flash/Flash-Lite sono stati rimossi dal free tier a giugno 2026 (fonte
secondaria, non verificata su Google direttamente).

**Modelli buoni:** `gemini-2.5-flash` è l'unica opzione free con contesto 1M. È capace
su task strutturati. `gemini-2.5-pro` ha 25 RPD — inutilizzabile come provider primario.

**Permanente o credito:** **PERMANENTE.** Il free tier di AI Studio non ha una scadenza
dichiarata e non è un pacchetto di crediti che si esaurisce. Le RPD si resettano.

**Vincolo critico (da Ierofante, gate-tos 16-08-2026):** Google usa i prompt del free
tier per training. Clausola in testo chiaro: "Do not submit sensitive, confidential,
or personal information to the Unpaid Services." Solo testo completamente anonimo. Non
collegare per task che toccano L3/L4/L5 o qualsiasi dato riconducibile a Giuseppe.
Per nav-cerca su corpus scientifici pubblici: accettabile dopo verifica del payload.

**Verdetto ToS (Ierofante):** AMBRA. Uso automatizzato permesso; blocco sui dati.

---

### 2. `github-models` — GitHub Models

**URL chiave:** https://github.com/settings/tokens
(Personal Access Token classico o fine-grained. Basta un account GitHub gratuito.)

**Carta di credito:** NO.

**Cosa dà il gratuito (dati al 2026-08-16):**

| Tier modello | RPM | RPD | Note |
|---|---|---|---|
| Low-tier (Llama, Mistral leggeri) | 15 | 150 | — |
| High-tier (GPT-4o, GPT-4.1, Llama 4 Scout) | 10 | 50 | — |
| Reasoning (o3, o4-mini) | custom | custom | per-modello |

Modelli disponibili: 45+, tra cui GPT-4.1, GPT-4o, o3, o4-mini, Llama 4 Scout,
Llama 4 Maverick, Mistral Large, DeepSeek, Cohere Command R+.
Fonte: freellm.net/providers/github-models (16-08-2026) + free-llm.com (16-08-2026).
Non verificato su docs.github.com/en/github-models in questa sessione — i numeri
sopra vengono da aggregatori, non dal documento primario GitHub. Verificare prima
di configurare come provider stabile.

**Modelli buoni:** GPT-4.1 e GPT-4o per task generali. Llama 4 Scout per volume.

**Permanente o credito:** **PERMANENTE.** Le quote si resettano (frequenza non
verificata — probabilmente mensile o giornaliera). Non ci sono crediti che muoiono.

**Vincolo:** 10 RPM / 50 RPD su modelli high-tier è basso per pipeline intensive.
Tool-calling supportato per GPT-4o (dichiarato da GitHub Models docs, D7 31-07-2026).
I limiti dipendono dal piano GitHub Copilot (Free/Pro/Pro+/Business) — con GitHub
Education (disponibile per studenti Sapienza) potrebbero essere più alti da verificare.

**Verdetto ToS:** non verificato da Ierofante al 16-08-2026 per uso automatizzato.
Priorità alta prima di usare in pipeline schedulate.

---

### 3. `mistral` — Mistral La Plateforme (tier Experiment)

**URL chiave:** https://console.mistral.ai/api-keys/

**Carta di credito:** NO.

**Cosa dà il gratuito (dati al 2026-08-16):**

| Limite | Valore |
|---|---|
| RPM | 2 |
| TPM | 500.000 |
| Token/mese | ~1 miliardo |

Modelli inclusi: Mistral Small, Mistral Medium, Mistral Large, Codestral.
Contesto per modello: 32K (Small) — 256K (Large/Codestral).
Fonte: OmniRoute FREE_TIERS.md (16-08-2026). I numeri RPM non sono stati
verificati su fonte primaria console.mistral.ai in questa sessione.

**Modelli buoni:** Codestral è il modello specializzato per codice (context 256K,
Fill-in-the-Middle). È il caso d'uso più forte di Mistral nel free tier.

**Permanente o credito:** **PERMANENTE.** Il tier Experiment non ha una scadenza.
Non sono crediti — è un rate limit mensile.

**Problema strutturale: 2 RPM = una richiesta ogni 30 secondi.** Inutilizzabile
per qualsiasi loop agentivo. Utile solo per chiamate singole manuali o task con
attesa esplicita tra richieste.

**Vincolo dati (da Ierofante):** il default Mistral addestra sui tuoi input. Opt-out
manuale richiesto: Admin Console → Settings → Privacy → disattivare "Allow Mistral
to use your data for model improvement." Farlo prima di qualsiasi chiamata.

**Verdetto ToS (Ierofante):** AMBRA con condizione sospensiva (testo ToS non
leggibile al 16-08-2026; opt-out training richiesto).

---

### 4. `cerebras` — Cerebras Inference

**URL chiave:** https://inference.cerebras.ai/
(Registrazione gratuita con email. Nessuna carta.)

**Carta di credito:** NO.

**Cosa dà il gratuito (dati al 2026-08-16):**

| Modello | RPM | TPM | TPH | TPD | Contesto free tier |
|---|---|---|---|---|---|
| `gpt-oss-120b` | 5 | 30.000 | 1.000.000 | 1.000.000 | **8.192 token** |
| `zai-glm-4.7` | 5 | 30.000 | 1.000.000 | 1.000.000 | **8.192 token** |

Fonte: inference-docs.cerebras.ai/support/rate-limits (D7, 31-07-2026).

**Modelli buoni:** `gpt-oss-120b` (il GPT-OSS di OpenAI) ha capacità di reasoning
forti. Ma il contesto a 8K token sul free tier lo rende inadatto a quasi tutti i
task della navicella che richiedono file o prompt medio-lunghi.

**Permanente o credito:** **PERMANENTE** (dichiarato "forever free" per i modelli
nel tier). Fonte secondaria (16-08-2026).

**Vincolo critico:** contesto 8.192 token. Un file di testo medio lo esaurisce.
Non adatto a nav-cerca. Adatto solo a classificazioni su testo cortissimo.

**Velocità:** il provider più veloce disponibile (>2.600 tok/s riportati su alcuni
configurazioni). Utile per burst veloci su testi corti.

**Verdetto ToS (Ierofante):** ROSSO condizionale. Il ToS del sito web vieta
"automated bots" e richieste superiori a quelle producibili da un umano via browser.
Non è chiaro se il ToS dell'API cloud (cloud.cerebras.ai/terms) abbia un regime
separato. Non usare per uso automatizzato finché non si verifica quel documento.
I dati privacy sono positivi (no training dichiarato nel ToS).

---

### 5. `nvidia` — NVIDIA NIM (build.nvidia.com)

**URL chiave:** https://build.nvidia.com/
(Iscrizione al NVIDIA Developer Program, gratuita. Genera API key nel profilo.)

**Carta di credito:** NO.

**Cosa dà il gratuito (dati al 2026-08-16):**

| Limite | Valore |
|---|---|
| RPM globale (tutte le chiamate sommate) | 40 |
| Crediti/mese | 1.000 (si rinnovano mensilmente) |
| Modelli disponibili | 100+ |

Modelli notevoli: DeepSeek V4 Pro, Llama serie, Qwen serie, Mistral NeMo/Large,
Nemotron (NVIDIA proprietario), varianti domain-specific.
Endpoint OpenAI-compatibile: api.nvidia.com/v1
Fonte: yangmao.ai/en/providers/nvidia-build/free-tier/ (16-08-2026),
agentdeals.dev/vendor/nvidia-nim (16-08-2026), decodethefuture.org (16-08-2026).

**Permanente o credito:** **PERMANENTE con reset mensile.** I 1.000 crediti si
rinnovano ogni mese — non è un one-time. Il tier stesso sembra stabile (nessuna
variazione di pricing registrata al giugno 2026 secondo costbench.com).
Nota: ogni modello consuma crediti a ritmo diverso. Un modello pesante come
DeepSeek V4 Pro consuma più crediti per richiesta di Llama 3.1 8B. I 1.000 crediti
mensili si esauriscono più o meno rapidamente a seconda del mix di modelli usati.
Non ho trovato la tabella di consumo crediti per modello su fonte primaria NVIDIA.

**Modelli buoni per la navicella:** DeepSeek V4 Pro per reasoning, Llama 3.3 70B
come alternativa a Groq quando le quote Groq sono esaurite, Qwen3 per coding.

**Contesto:** 128K+ per i modelli principali (stimato — non verificato su fonte
primaria NVIDIA al 16-08-2026).

---

### 6. `cohere` — Cohere Trial API

**URL chiave:** https://dashboard.cohere.com/api-keys
(Registrazione gratuita. Nessuna carta dichiarata.)

**Carta di credito:** NO (per il trial).

**Cosa dà il gratuito (dati al 2026-08-16):**

| Limite | Valore |
|---|---|
| Chiamate totali/mese | 1.000 (tutti gli endpoint) |
| RPM (chat) | 20 |
| RPM (embed) | 5 |

Modelli inclusi: Command A (111B), Command R, Command R+, Aya Expanse 32B/8B,
Embed v4, Rerank v3.5.
Fonte: freellm.net/providers/cohere (16-08-2026), pricepertoken.com (16-08-2026).

**Permanente o credito:** **PERMANENTE** (trial key permanente, non scade). Le
1.000 chiamate sono un limite mensile, non un one-time.

**Vincolo:** 1.000 chiamate/mese = ~33 al giorno. Basso per uso regolare ma stabile.
Cohere esplicita che il trial è "for testing and development only, not production use."

**Modelli buoni:** Command A (111B) è il modello principale — capace su task generali.
Command R+ per RAG (ha funzionalità di retrieval built-in). Embed v4 per embedding.

---

### 7. `cloudflare-ai` — Cloudflare Workers AI

**URL chiave:** https://dash.cloudflare.com/
(Account Cloudflare gratuito. Si genera un API token in "My Profile → API Tokens".)

**Carta di credito:** NO.

**Cosa dà il gratuito (dati al 2026-08-16):**

| Limite | Valore |
|---|---|
| Neurons/giorno | 10.000 |
| Contesto modelli | 2.048 – 8.192 token |

Fonte: omniroute-modelli-2026-08.md (Argonauta, 16-08-2026).

**Permanente o credito:** **PERMANENTE.** I 10.000 Neurons/giorno si resettano.

**Verdetto operativo: non collegare.** Il contesto 2K–8K è strutturalmente
insufficiente per qualsiasi task della navicella che vada oltre una frase breve.
Non è adatto a nessuno dei livelli della fila. Il provider esiste e funziona —
è la finestra di contesto che lo esclude, non i rate limit.

---

### 8. `sambanova` — SambaNova Cloud

**URL chiave:** https://cloud.sambanova.ai/
(Registrazione gratuita con email.)

**Carta di credito:** NO (dichiarato).

**Cosa dà il gratuito (dati al 2026-08-16):**

| Modello | RPM | RPD | TPD |
|---|---|---|---|
| `Meta-Llama-3.1-405B-Instruct` | 30 | — | — |
| `minimax/minimax-m2.7` | 20 | 20 | 200.000 |

Fonte: D7 (31-07-2026) e fonti secondarie (16-08-2026) che riportano "forever free"
dichiarato da maggio 2026. I dati al 31-07 classificavano SambaNova come crediti;
il cambiamento a "forever free" è post-luglio. Da verificare su docs.sambanova.ai
prima di configurare — la situazione è cambiata nel corso dell'estate.

**Permanente o credito:** **INCERTO.** Al 16-08-2026 diverse fonti secondarie citano
"forever free tier" ma la fonte primaria (docs.sambanova.ai) non è stata verificata
in questa sessione. Non trattare come garantito.

**Modelli buoni:** Llama-3.1-405B-Instruct è il modello più capace disponibile
gratuitamente nell'intera lista — 405 miliardi di parametri. Se il free tier è
confermato, è un'aggiunta di valore al livello medio della fila.

---

### 9. `openrouter` — OpenRouter (modelli `:free`)

**URL chiave:** https://openrouter.ai/settings/keys
(Registrazione con email o GitHub. Nessuna carta.)

**Carta di credito:** NO.

**Cosa dà il gratuito (dati al 2026-08-16):**

| Configurazione | RPM | RPD |
|---|---|---|
| Senza crediti | 20 | 50 |
| Con $10 lifetime | 20 | 1.000 |

Modelli :free al 16-08-2026: 28+ con suffisso `:free`. Lista viva e variabile.
Modelli notevoli: DeepSeek-R1, Llama 4 Scout, **Qwen3 Coder 480B**, Kimi K3 (1M ctx).
La lista cambia senza preavviso — un modello disponibile oggi può scomparire domani.

**Permanente o credito:** **PERMANENTE** (il tier senza carta rimane; i 50 RPD non
scadono). Ma è poco. I $10 che portano a 1.000 RPD sono un pagamento — fuori dal
perimetro della navicella.

**Vincolo:** 50 RPD è insufficiente per uso regolare. OpenRouter è un last-resort,
non un provider stabile. Il toggle "Allow routing to providers that may train on
your data" va disattivato manualmente nelle impostazioni account prima di qualsiasi
chiamata.

**Verdetto ToS (Ierofante):** AMBRA con due condizioni (toggle training OFF; risolvere
discrepanza Section 4.1 ToS vs realtà :free).

---

### 10. `moonshot` — Moonshot AI (Kimi API diretta)

**URL chiave:** https://platform.moonshot.cn/console/api-keys
(Per la piattaforma internazionale, potrebbe anche essere platform.moonshotai.com —
verificare al momento della registrazione.)

**Carta di credito:** Probabilmente NO per il signup iniziale, ma richiede ricarica
minima di $1 per attivare l'API. Non verificato su fonte primaria al 16-08-2026.

**Cosa dà il gratuito:**

Non esiste un free tier permanente. I nuovi account ricevono crediti di benvenuto
(¥15 o equivalente in USD, ~$5). Questi crediti si esauriscono. Dopo, il minimo
per attivare l'API è una ricarica di $1.

Rate limit al Tier 0 (saldo < $1): 1,5M token/giorno.
Fonte: yangmao.ai/en/providers/kimi/api-pricing/ (16-08-2026),
felloai.com/kimi-pricing/ (16-08-2026), kimi-ai.chat/docs/rate-limits/ (16-08-2026).

**Permanente o credito:** **CREDITO INIZIALE CHE SI ESAURISCE.** Non si rigenera.

**Modelli:** Kimi K2.5 e Kimi K3 (contesto 1M token).

**Verdetto: non collegare.** È la stessa struttura che ha già ucciso `kimi-coding`
(credits_exhausted). Collegare moonshot diretto risolverebbe il problema per qualche
giorno al massimo — poi si ripresenta identico. L'unico modo per avere Kimi in modo
stabile è pagare.

---

### 11. `chutes` — Chutes.ai

**URL chiave:** https://chutes.ai/
(Registrazione con email. Nessuna carta dichiarata.)

**Carta di credito:** NO.

**Cosa dà il gratuito (dati al 2026-08-16):**

Modelli gratuiti dichiarati: 2 (DeepSeek-R1, Llama 3.1 70B).
Rate limit: non pubblicati esplicitamente. L'infrastruttura è compute condiviso
della community. Disponibilità variabile in base al carico di rete.
Fonte: freellm.net/providers/chutes-ai (16-08-2026), free-model.com (16-08-2026).

**Permanente o credito:** **PERMANENTE** (non sono crediti). Ma la disponibilità
non è garantita — dipende dal compute donato dalla community.

**Verdetto operativo:** non adatto come provider stabile. L'infrastruttura comunitaria
non è affidabile come backend di una pipeline. Usabile per esperimenti manuali,
non per routing automatico.

---

### 12. `scaleway` — Scaleway Generative APIs

**URL chiave:** https://console.scaleway.com/
(Richiede registrazione a Scaleway. Quasi certamente richiede verifica del metodo
di pagamento per il signup al cloud — la documentazione non è stata verificata su
questo punto specifico al 16-08-2026.)

**Carta di credito:** **PROBABILMENTE SÌ** per la registrazione, anche se i 1M
token iniziali sono gratuiti. Non verificato su fonte primaria.

**Cosa dà il gratuito:**

1.000.000 token gratuiti per i nuovi account. Poi pay-as-you-go.
Modelli: Mistral, Llama, Qwen — infrastruttura europea (GDPR).
Rate limit: basati su TPM, QPM e richieste concorrenti. I limiti base si applicano
dopo registrazione con metodo di pagamento valido; si alzano con verifica identità.
Fonte: scaleway.com/en/docs/generative-apis/reference-content/rate-limits/ (16-08-2026).

**Permanente o credito:** **CREDITO INIZIALE CHE SI ESAURISCE.** 1M token una-tantum.
Fonte confermata: "start paying only from the 1,000,001st token."

**Verdetto: non collegare.** Stesso pattern di Nebius e DeepSeek — credito iniziale
che muore.

---

### 13. `nebius` — Nebius AI Studio

**URL chiave:** https://studio.nebius.ai/ oppure https://console.nebius.com/
(Il brand "Nebius Token Factory" appare nelle fonti 2026. Registrazione con email.)

**Carta di credito:** NO per il trial iniziale (da fonti secondarie).

**Cosa dà il gratuito:**

~$1 di crediti iniziali di prova. Modelli: 60+ open-source (Llama, DeepSeek, Qwen,
Mistral) con contesto 128K. Datacenter europei.
Fonte: pricepertoken.com/endpoints/nebius/free (16-08-2026),
freellm.net/providers/nebius (16-08-2026).

**Permanente o credito:** **CREDITO INIZIALE CHE SI ESAURISCE.** ~$1 non sono molto.

**Verdetto: non collegare.** I crediti si esauriscono nel giro di poche chiamate
intensive. Non è un tier gratuito permanente.

---

### 14. `deepseek` — DeepSeek Platform

**URL chiave:** https://platform.deepseek.com/api-keys

**Carta di credito:** NO per il signup iniziale.

**Cosa dà il gratuito:**

5 milioni di token iniziali, validi 30 giorni. Poi pay-as-you-go.
Modelli: DeepSeek V4 Flash, DeepSeek V4 Pro.
Rate limit free: non trovati su fonte primaria in questa sessione.
Fonte: pricepertoken.com/endpoints/deepseek/free (16-08-2026),
mydeepseekapi.com/blog/deepseek-api-free-tiers (16-08-2026).

**Permanente o credito:** **CREDITO INIZIALE CON SCADENZA 30 GIORNI.** Non si rigenera.

**Nota geopolitica:** DeepSeek è cinese. Stesso avvertimento già nella lista
"non collegare" dell'analisi precedente — leggi cinesi sui dati possono essere
incompatibili con la riservatezza della navicella.

**Verdetto: non collegare.** Due motivi indipendenti: credito a 30 giorni + geopolitica.

---

### 15. `alibaba` — Alibaba DashScope / Model Studio

**URL chiave:** https://bailian.aliyun.com/ (regione internazionale: Singapore/Frankfurt)
oppure https://dashscope.aliyun.com/

**Carta di credito:** Non chiaro per il signup base. L'account Alibaba Cloud
internazionale in genere richiede verifica — potrebbe richiedere carta.
Non verificato su fonte primaria al 16-08-2026.

**Cosa dà il gratuito:**

Account internazionale (regione Singapore): 1M input token + 1M output token,
validi 90 giorni. Account cinese: 70M token signup. OAuth via Qwen è stato
discontinuato il 15 aprile 2026 — solo API key ora.
Modelli: Qwen3.5 serie, Qwen-Long (1M ctx), Qwen3 Coder.
Fonte: yangmao.ai/en/providers/qwen/free-api/ (16-08-2026).

**Permanente o credito:** **CREDITO INIZIALE CON SCADENZA 90 GIORNI.**

**Verdetto: non collegare.** Due motivi indipendenti:
1. Credito temporaneo, non tier permanente.
2. Alibaba è soggetta a leggi cinesi sui dati (Cybersecurity Law, Data Security Law)
   — già nella lista "non collegare" per geopolitica.

---

## SEZIONE B — Cursor, Windsurf, Codex, Grok-CLI

---

### Cursor

**C'è una API key ufficiale?** Sì. Cursor ha una API documentata su cursor.com/docs/api
con autenticazione Basic Auth (la chiave API diventa lo username, password vuota).
La documentazione include un endpoint "Cloud Agents API" (cursor.com/docs/cloud-agent/api/endpoints).

**Ma questa API espone modelli per completamento arbitrario?** No. La Cloud Agents API
di Cursor serve per lanciare e gestire agent workflow di Cursor — non è un endpoint
LLM generico. Non si può puntare OmniRoute su Cursor e aspettarsi di ricevere
completamenti da Claude/GPT come se fosse un provider standard.

**Cosa vede Giuseppe quando OmniRoute chiede una chiave:** OmniRoute registra "cursor"
come provider ma ciò che sta dietro è quasi certamente una chiave che autentica
verso l'API interna di Cursor — e quella API non è progettata per essere un relay
LLM generico. In assenza di documentazione ufficiale di Cursor che dichiari "puoi
usare questa chiave per fare completamenti in un gateway di terze parti", non esiste
una via ufficiale.

**Piano gratuito:** Cursor Hobby (gratuito) dichiara 500 richieste veloci/mese.
Questo è uso interattivo nell'editor — non è quota API.

**Verdetto:** Non esiste una API key di Cursor usabile come provider LLM in OmniRoute
nel senso normale del termine. Se OmniRoute chiede una chiave per "cursor", la
documentazione non è chiara su cosa ci vada. Verificare nel repository OmniRoute
i docs specifici del provider "cursor" prima di procedere.

---

### Windsurf

**C'è una API key ufficiale?** Non più. Windsurf (Codeium IDE) è stata acquisita da
Cognition AI ed è stata rinominata **Devin Desktop** il 2 giugno 2026.
windsurf.com ora redireziona permanentemente a devin.ai/desktop.

**Questo spiega l'errore nel gateway.** Il provider `windsurf` in OmniRoute punta a
un servizio che ha cambiato identità e architettura. Non c'è una chiave da ottenere
perché non esiste più un "Windsurf" come prodotto standalone.

**Cosa fare:** rimuovere o disabilitare il provider `windsurf` dalla configurazione
OmniRoute. Non c'è una via da seguire — il prodotto non esiste più con quel nome.
Se si vuole un piano alternativo gratuito basato su questo tipo di IDE, Devin Desktop
(Cognition) ha un piano gratuito limitato ma i ToS per uso agentico via gateway
non sono stati verificati.

Fonte: infoworld.com (2026), aiwiki.ai/wiki/windsurf (2026),
devin.ai/blog/windsurfs-next-chapter (2026).

---

### Codex (ChatGPT Plus)

**C'è una API key usabile da un gateway di terze parti?** La risposta dipende
da come si autentica.

Scenario 1 — OAuth con ChatGPT Plus: `codex login` con credenziali ChatGPT
autentica verso OpenAI con le credenziali dell'abbonamento. L'uso è incluso nel
piano Plus ($20/mese, ~$700 di capacità Codex mensile stimata). Questo è il canale
che usa il provider `codex` in OmniRoute — OAuth, non API key separata.

Scenario 2 — API key OpenAI standard: Una API key da platform.openai.com funziona
su qualsiasi gateway OpenAI-compatibile, ma si paga separatamente dal Plus. Le
API key NON consumano il credito dell'abbonamento Plus.

**Cosa chiede OmniRoute per il provider `codex`:** l'analisi del file precedente
(omniroute-cosa-collegare.md) lo classifica come OAuth. Se OmniRoute sta chiedendo
una chiave invece di redirezionare a OAuth, potrebbe significare che il flusso
prevede una API key OpenAI standard (pay-per-token) — non l'abbonamento.

**Piano gratuito Codex:** non esiste. Per ChatGPT Plus: $20/mese. Per API key
OpenAI: pay-per-token, nessun free tier permanente (crediti iniziali per nuovi
account, poi a pagamento).

**Verdetto:** se OmniRoute per "codex" chiede una chiave API e non fa OAuth, quella
chiave è una OpenAI API key standard — che si paga. Non ha senso nel perimetro della
navicella. Se fa OAuth con ChatGPT Plus, l'abbonamento di Giuseppe lo copre solo se
lo ha attivo.

---

### Grok-CLI (xAI)

**C'è una API key ufficiale?** Sì. https://console.x.ai — chiave API xAI standard.
Non richiede X Premium+ (contrariamente a quanto si pensava). È una piattaforma
developer standalone. Nessun waitlist, nessuna approvazione manuale.

**Piano gratuito:** NO permanente. I nuovi account ricevono $25 di crediti validi
30 giorni. Scaduti, pay-as-you-go. Nessun free tier che si rinnova.
Fonte: aitoolsrecap.com (16-08-2026), ai-toolbox.co/grok-models/grok-pricing-plans-api-2026 (16-08-2026).

**Verdetto: non collegare.** Fuori dal perimetro economico della navicella — stessa
categoria di Together e DeepSeek. I $25 di crediti muoiono in 30 giorni.

---

## SEZIONE C — Kimi / Moonshot: il credito si rigenera?

**Risposta breve: No.**

Moonshot AI (il provider che sta dietro a Kimi, kimi-coding, e il provider diretto
`moonshot`) non ha un free tier ricorrente. I crediti di benvenuto (¥15 o ~$5)
sono one-time. Dopo, ogni ricarica è reale denaro.

`kimi-coding` è già a `credits_exhausted` — conferma empirica dello stesso pattern.
Collegare il provider diretto `moonshot` non risolve il problema: riparte con i
crediti di signup, li esaurisce, e si trova nella stessa situazione.

**Modelli Kimi in modo gratuito stabile:** su OpenRouter :free, a volte compaiono
modelli Kimi con suffisso `:free`. Ma la lista :free è volatile — potrebbero
scomparire senza preavviso. Non è un replacement affidabile.

**Conclusione pratica:** per avere Kimi K3 (1M ctx) in modo stabile serve pagarlo
direttamente o aspettare che OpenRouter li tenga nel tier :free. Oggi non c'è una
via gratuita permanente per Kimi.

---

## SEZIONE D — I due gap: nav-cerca e nav-codice

### Gap 1: nav-cerca — nessun modello a contesto lungo

**Il buco:** nessun provider già connesso offre finestra di contesto oltre 128K.
Groq `llama-3.3-70b-versatile` ha 128K ma con 1K RPD. opencode ha Kimi (1M ctx)
ma i crediti sono esauriti.

**Provider gratuito permanente che riempie meglio questo gap:**

**`gemini-2.5-flash` su Google AI Studio.**

- Contesto: 1.000.000 token
- RPD: 1.500 (il più alto tra i provider con contesto lungo)
- RPM: 15
- Tier: permanente, non crediti

Non c'è alternativa gratuita permanente con contesto comparabile. L'unico secondo
candidato sarebbe OpenRouter :free con modelli come `kimi/kimi-k3:free` (1M ctx)
se disponibile, ma la lista :free è volatile.

**Condizione prima di connettere:** solo testo anonimo (vincolo ToS Google AI Studio).
Verdetto Ierofante: AMBRA. Non attivare per task che contengono dati di Giuseppe.
Per nav-cerca su corpus scientifici pubblici (paper, libri di testo), è il candidato
corretto.

**Gesto:** URL chiave → https://aistudio.google.com/apikey. Nessuna carta.
Modello da puntare: `google/gemini-2.5-flash`.

---

### Gap 2: nav-codice — nessun modello specializzato in codice

**Il buco:** Groq ha `llama-3.3-70b-versatile` e `openai/gpt-oss-120b`, capaci
su codice ma non specializzati. Nessun modello specificamente fine-tuned per coding.

**Provider gratuito permanente che riempie meglio questo gap:**

**`qwen/qwen3-coder-480b:free` su OpenRouter.**

- Modello: Qwen3 Coder 480B — addestrato specificamente per coding, 480B parametri
- Contesto: non pubblicato su fonte primaria per il tier :free (probabilmente 128K+)
- RPD: 50 senza crediti ($10 lifetime → 1.000 RPD, fuori perimetro)
- Tier: :free, lista volatile

È il modello più specializzato per codice tra quelli gratuiti permanenti. Il vincolo
è la disponibilità (i :free models spariscono senza preavviso) e il basso RPD.

**Alternativa più stabile ma meno specializzata:**

**`openai/gpt-oss-120b` su Groq** — non è un modello di codice dedicato, ma
GPT-OSS 120B ha capacità di coding solide (GPT-4-class per codice). RPD 1.000,
stabile, verificato.

**Alternativa specializzata con vincolo RPM:**

**`codestral` su Mistral** — il modello di codice di Mistral (256K ctx, Fill-in-the-Middle,
pensato per codice). Gratuito permanente su console.mistral.ai. Il vincolo è 2 RPM —
solo per chiamate manuali o task con lunga pausa tra richieste.

**Raccomandazione pratica:**

Per nav-codice, l'approccio a due livelli:
1. **Primario:** `openai/gpt-oss-120b` su Groq — stabile, 1K RPD, capace su codice.
2. **Specializzato (quando disponibile):** `qwen/qwen3-coder-480b:free` su OpenRouter
   come provider di secondo livello, con il toggle training disattivato.
3. **Fallback lento:** `codestral` su Mistral per task singoli non urgenti.

---

## Riepilogo decisioni operative

| Provider | URL chiave | Carta | Tier | Tipo | Collegare? |
|---|---|---|---|---|---|
| `gemini` | aistudio.google.com/apikey | NO | 15 RPM / 1.500 RPD / 1M ctx | Permanente | SÌ (solo testo anonimo) |
| `github-models` | github.com/settings/tokens | NO | 10-15 RPM / 50-150 RPD | Permanente | SÌ (verificare ToS primo) |
| `mistral` | console.mistral.ai/api-keys/ | NO | 2 RPM / 1B tok/mese | Permanente | SÌ solo fallback; opt-out training prima |
| `cerebras` | inference.cerebras.ai | NO | 5 RPM / 8K ctx | Permanente | NO (ToS incerto automatizzato) |
| `nvidia` | build.nvidia.com | NO | 40 RPM / 1K crediti/mese | Permanente (reset) | SÌ (dopo verifica tabella crediti) |
| `cohere` | dashboard.cohere.com/api-keys | NO | 20 RPM / 1K call/mese | Permanente | SÌ (basso volume, testing) |
| `cloudflare-ai` | dash.cloudflare.com | NO | 10K Neurons/gg / 8K ctx | Permanente | NO (ctx insufficiente) |
| `sambanova` | cloud.sambanova.ai | NO | 20-30 RPM | Incerto (verificare) | DA VERIFICARE |
| `openrouter` | openrouter.ai/settings/keys | NO | 20 RPM / 50 RPD | Permanente | SÌ (last-resort; toggle training OFF) |
| `moonshot` | platform.moonshot.cn | NO | Crediti iniziali | **CREDITO** | NO |
| `chutes` | chutes.ai | NO | 2 modelli, limiti non pubbl. | Permanente instabile | NO (infrastruttura non garantita) |
| `scaleway` | console.scaleway.com | PROB. SÌ | 1M token one-time | **CREDITO** | NO |
| `nebius` | studio.nebius.ai | NO | ~$1 crediti | **CREDITO** | NO |
| `deepseek` | platform.deepseek.com/api-keys | NO | 5M tok / 30 gg | **CREDITO 30gg** | NO |
| `alibaba` | bailian.aliyun.com | ? | 1M+1M tok / 90 gg | **CREDITO 90gg** + geopolitica | NO |

**Cursor:** nessuna API key standard per uso in gateway LLM. Verificare docs OmniRoute
specifici prima di procedere.

**Windsurf:** non esiste più. Rimosso/rinominato Devin Desktop (Cognition) dal 2 giugno 2026.
Disabilitare il provider.

**Codex:** se OmniRoute chiede una chiave (non OAuth), quella chiave è una OpenAI API
key pay-per-token. Non gratuita.

**Grok-CLI:** $25 crediti 30 giorni poi pay-as-you-go. Fuori perimetro.

---

## Fonti dichiarate

Fonti primarie o semi-primarie usate in questa ricerca (16-08-2026):
- aistudio.google.com + OmniRoute FREE_TIERS.md via omniroute-modelli-2026-08.md
- github.com/settings/tokens (path noto)
- console.mistral.ai/api-keys/ (path noto)
- inference.cerebras.ai (path noto)
- build.nvidia.com (path noto)
- dashboard.cohere.com/api-keys (path noto)
- console.x.ai (path noto)
- platform.deepseek.com (path noto)
- cursor.com/docs/api (letto da search result)
- devin.ai/blog/windsurfs-next-chapter (acquisizione Windsurf)

Fonti secondarie (aggregatori, verificate per coerenza incrociata, non citate come testo contrattuale):
- yangmao.ai/en/providers/nvidia-build/free-tier/
- yangmao.ai/en/providers/kimi/api-pricing/
- agentdeals.dev/vendor/nvidia-nim
- freellm.net/providers/ (per Cohere, GitHub Models, Nebius, Chutes, Cerebras)
- pricepertoken.com/endpoints/ (per Nebius, DeepSeek)
- free-llm.com/provider/ (per Scaleway, Chutes, Nebius)
- felloai.com (per Kimi, Grok pricing)
- aitoolsrecap.com (per Grok free tier)
- ai-toolbox.co (per Grok pricing)
- scaleway.com/en/docs/generative-apis/ (rate limits Scaleway)
- infoworld.com, aiwiki.ai (acquisizione Windsurf/Cognition)
- costbench.com/software/llm-api-providers/nvidia-nim/free-plan/

Non verificato su fonte primaria in questa ricerca:
- Tabella di consumo crediti per modello NVIDIA NIM (non trovata)
- ToS Cursor per uso in gateway di terze parti
- Requisito carta per Scaleway (probabile ma non confermato)
- Limiti esatti GitHub Models su fonte primaria docs.github.com
- Stato free tier SambaNova post-luglio 2026 su docs.sambanova.ai

---

*Data ricerca: 2026-08-16. I ToS e le quote dei provider gratuiti cambiano senza
preavviso. Prima di configurare qualsiasi provider stabile, verificare la fonte
primaria dichiarata sopra per quella voce.*

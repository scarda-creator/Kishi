# D7 — L'economia: fare tutto questo senza pagare e senza rischiare il ban

## Risposta in tre righe

Il gate si chiude, e si chiude più permissivo di quanto la scottatura del 25/7 avesse
concluso. Su fonte primaria (`code.claude.com/docs/en/legal-and-compliance`, sezione
"Authentication and credential use", più Consumer Terms §3.7, `authentication`, `headless`,
`llm-gateway-connect`, `costs`, tutte lette il 31/7/2026): (a) `claude -p` headless/schedulato
sull'abbonamento è esplicitamente previsto e fatturato come uso ordinario, stesso monte
settimanale dell'uso interattivo — nessuna piscina separata, il che chiude anche il
"non confermato" più pesante di D4; (b) l'Agent SDK per costruire un "prodotto" dovrebbe
usare API key, ma il testo non distingue esplicitamente un tool mono-utente sul proprio
abbonamento da un prodotto offerto a terzi — resta zona grigia dichiarata, non chiusa; (c) un
gateway locale che si limita a inoltrare a `api.anthropic.com` **senza** impostare una
credenziale-gateway è un caso normativamente descritto e trattato come comportamento
ordinario ("Subscriptions and gateways") — instradare le stesse richieste verso modelli
non-Claude tramite lo stesso gateway resta invece "not supported" (non certificato, non
vietato per iscritto). Sul fronte gratis: il candidato principale del 25/7 — "DeepSeek V3 su
SiliconFlow gratis per sempre" — è **falso oggi**: la pagina prezzi ufficiale (istantanea
22/7/2026) mostra DeepSeek a pagamento in ogni versione; il vero free tier SiliconFlow è tre
modelli diversi (gpt-oss-120b, GLM-4.7, Gemma-4-31b) a 5 richieste/minuto, un limite che
rende inutilizzabile qualunque agente multi-turno.

## Candidati (ordinati per utilità reale, non per fama)

**1. `claude -p` / `claude setup-token` (headless CLI, non Agent SDK separato)** ·
`code.claude.com/docs/en/headless`, `.../authentication`, `.../costs` · prodotto Anthropic,
documentazione viva, letta 31/7/2026 · fa: esegue Claude Code in modo non interattivo con lo
stesso motore, gli stessi hook, la stessa autenticazione dell'uso interattivo; `claude
setup-token` genera un token OAuth di un anno per script/CI, esplicitamente "requires a Pro,
Max, Team, or Enterprise plan" · risolverebbe: è la via per un battito/tick che non tocca
l'Agent SDK e non richiede una API key a pagamento — copre gran parte di ciò che D4 cercava ·
costo: **zero oltre l'abbonamento**, confermato — vedi meccanismo sotto · rischio: nessuno
identificato su fonte primaria per questo specifico percorso · fonte del giudizio: pagine
ufficiale, citazioni verbatim sotto.

**2. Gateway locale in modalità pass-through (`ANTHROPIC_BASE_URL` senza credenziale
gateway)** · `code.claude.com/docs/en/llm-gateway`, `.../llm-gateway-connect` · meccanismo
Anthropic documentato, non un prodotto · fa: instrada il traffico di Claude Code attraverso
un proxy locale (es. OmniRoute, LiteLLM) che si limita a inoltrare a `api.anthropic.com`,
lasciando attivo il login OAuth dell'abbonamento — "Setting only that variable, without a
gateway credential, doesn't replace the subscription. Requests still route through the
gateway, but a saved claude.ai login remains the active credential, so its usage limits and
billing apply." · risolverebbe: il punto d'aggancio tecnico esatto che la visione di Dedalo
del 25/7 cercava per il routing selettivo, con un fondamento documentale che allora mancava ·
costo: zero, stesso abbonamento · rischio: **instradare le stesse richieste verso modelli
non-Claude tramite lo stesso gateway è esplicitamente "not supported"** — non è scritto come
violazione contrattuale, è scritto come "non auditato, non garantito"; il provider "Claude
Web" di OmniRoute (cookie di sessione claude.ai, non OAuth Claude Code) resta un caso diverso
e più grave, perché bypassa Claude Code come client — coerente con quanto già scartato da P7
il 25/7 · fonte: pagine gateway ufficiali, citazioni sotto.

**3. Groq (free tier)** · `console.groq.com/docs/rate-limits`, `.../your-data`,
`.../tool-use` · piattaforma commerciale, non open source, documentazione letta 31/7/2026 ·
fa: inferenza su Llama 3.1/3.3, GPT-OSS 120B/20B, Qwen3.6-27B, MiniMax-M2.7 · limiti free
esatti per modello: `llama-3.1-8b-instant` 30 RPM / 14.400 RPD / 6K TPM / 500K TPD;
`llama-3.3-70b-versatile` 30 RPM / 1K RPD / 12K TPM / 100K TPD; `gpt-oss-120b` 30 RPM / 1K
RPD / 8K TPM / 200K TPD · tool-calling: **confermato su fonte primaria** per tutti e tre più
`qwen/qwen3.6-27b`, `minimaxai/minimax-m2.7`, `groq/compound[-mini]` · privacy: "By default,
Groq does not retain customer data for inference requests" salvo log temporanei per abuso/
troubleshooting fino a 30 giorni, Zero Data Retention self-serve attivabile; nessuna
dichiarazione di training sui dati trovata (assenza di ritenzione implica assenza di
training, ma non è una frase esplicita "we don't train") · risolverebbe: bulk leggero e
classificazione con tool-calling reale, TPD abbastanza alto da reggere una giornata di lavoro
meccanico · costo: zero · rischio: RPM 30 è stretto per un loop agentivo multi-step (un
Argonauta consuma ~100K token di input in pochi minuti su Sonnet; qui satura in secondi) ·
fonte: pagine ufficiali, citazioni sotto.

**4. Cerebras (free tier)** · `inference-docs.cerebras.ai/support/rate-limits`,
`cerebras.ai/privacy-policy` · fa: inferenza ad alta velocità su hardware proprietario ·
free tier reale confermato su fonte primaria: **tre modelli** — `gpt-oss-120b`,
`zai-glm-4.7`, `gemma-4-31b` — non gli stessi che le fonti secondarie (free-llm.com,
getaiperks.com) attribuivano a Cerebras nel 2026 (Llama4 Scout, 1M tok/giorno "flat") — a
5 RPM / 30K TPM / 1M TPH / 1M TPD · privacy: dichiarazione esplicita e pulita — "We do not
retain inputs and outputs associated with our training, inference and chatbot Services",
effective 27 agosto 2024, **nessuna differenziazione fra tier gratuito e a pagamento** ·
tool-calling: non verificato su questa pagina per lo specifico free tier (i tre modelli
sono generalmente tool-capable altrove, ma non è una citazione Cerebras) · risolverebbe:
poco di più di Groq, con lo stesso collo di bottiglia RPM · costo: zero · rischio: 5 RPM è
il limite più stretto fra tutti i candidati misurati · fonte: pagina rate-limit ufficiale +
privacy policy ufficiale.

**5. SiliconFlow (free tier, corretto rispetto al 25/7)** · `docs.siliconflow.com`,
`siliconflow.com/pricing` (istantanea 22/7/2026), `docs.siliconflow.com/en/legals/privacy-
policy` (aggiornata 31/3/2025) · **correzione a P3 (findings Argonauta 25/7): "DeepSeek V3
via SiliconFlow gratis per sempre" non è più vero, e forse non lo è mai stato per la
versione internazionale** — la pagina prezzi ufficiale datata 22 luglio 2026 elenca
DeepSeek-V3, V3.2, V4-Pro, V4-Flash tutti a pagamento, $0.13–$1.50/M token · il free tier
reale, dalla pagina rate-limit ufficiale: `gpt-oss-120b`, `zai-glm-4.7`, `gemma-4-31b` a
5 RPM / 30K TPM / 1M TPH / 1M TPD — "Free Trial tier", nessun RPD dichiarato · tool-calling:
confermato per gpt-oss-120b (nativo, "function calling, browsing, structured output") e
GLM-4.7 ("Tools support: Supported") · privacy: **gate aperto** — la privacy policy
ufficiale non contiene alcuna frase esplicita su training sui dati di input/output,
gratuiti o a pagamento; si descrive come "neutral technology service provider" che processa
"strictly in accordance with your instructions", che non è una garanzia di non-training ·
risolverebbe: stesso ruolo di Groq/Cerebras, con privacy meno chiara · costo: zero, ma
verificare caso per caso · rischio: privacy non dichiarata esplicitamente è un gate-privacy
aperto, non chiuso · fonte: pagine ufficiali, citazioni sotto.

**6. OpenRouter (free, suffisso `:free`)** · `openrouter.ai/docs/api-reference/limits`,
`.../docs/features/privacy-and-logging` · aggregatore, non provider proprio · limiti
confermati su fonte primaria: **20 RPM / 50 RPD** sotto i 10 USD di credito acquistato
one-time, **20 RPM / 1000 RPD** sopra — conferma esatta di quanto D4/omniroute-integrazioni
avevano già misurato da brainroad.com, ora su fonte primaria · privacy: **gate esplicito e
configurabile, non di default sicuro** — "you can set whether you would like to allow
routing to providers that may train on your data" con "separate settings for paid and free
models": significa che i modelli gratuiti possono instradare verso provider che *allenano
sui dati* se l'interruttore non è disattivato esplicitamente per il tier free · tool-calling:
dipendente dal modello instradato (routing non deterministico su `openrouter/free`, come già
misurato il 25/7) · risolverebbe: la copertura più ampia di modelli, ma con l'incognita
peggiore delle sei per il gate-privacy · costo: zero sotto soglia · rischio: privacy
**non passiva**, va disattivata a mano; instradamento non deterministico rende impossibile
promettere tool-calling affidabile · fonte: pagine ufficiali, citazioni sotto.

**7. Together AI — scartato come "free tier reale"** · `together.ai/pricing` (pagina
ufficiale letta 31/7/2026) · non esiste un free tier generale: un solo modello sperimentale
a $0.00 (PrismML Ternary Bonsai 27B), nessun limite di richieste dichiarato in pagina,
nessuna clausola su training. Riportato solo per escluderlo esplicitamente dalla mappa —
le fonti terze che lo elencano come "free tier" fanno riferimento al credito di benvenuto
una tantum, non a un tier permanente.

## Il meccanismo, spiegato bene

Il nodo centrale, quello che la scottatura del 25/7 aveva lasciato "da confermare", è la
distinzione fra tre superfici che condividono la parola "Claude Code" ma non condividono le
stesse regole: la CLI in modalità `-p`, l'Agent SDK come libreria, e un gateway interposto.
La CLI in modalità `-p` non è un prodotto diverso dalla CLI interattiva — è lo stesso
binario, la stessa autenticazione, la stessa fattura. La pagina `authentication` elenca
l'ordine di precedenza delle credenziali e al sesto e ultimo posto mette "Subscription OAuth
credentials from `/login`. This is the default for Claude Pro, Max, Team, and Enterprise
users", specificando poi per l'`ANTHROPIC_API_KEY` che "In non-interactive mode (`-p`), the
key is always used when present" — la simmetria implica che in assenza di una API key
esplicita, `-p` eredita esattamente la stessa credenziale OAuth di sessione che useresti
interattivamente. La pagina `costs`, letta per intero, non introduce mai una categoria di
spesa separata per l'uso automatizzato: parla di "seat-based usage window on a subscription
plan" condivisa fra Claude chat, Cowork e Claude Code, e quando arriva a spiegare perché il
consumo di una sessione lunga sale, elenca "scheduled tasks" nello stesso paragrafo di
"long context" e "cache misses" — un fattore che aumenta il consumo dentro lo stesso monte,
non un monte diverso. Questo chiude, su fonte primaria, il "non confermato" più pesante che
D4 aveva lasciato aperto: la voce di maggio 2026 su una fatturazione programmatica separata,
rientrata o cancellata a seconda della fonte secondaria, oggi — 31/7/2026, sulla pagina viva
— semplicemente non esiste nella documentazione corrente. Non è una prova che non sia mai
esistita; è la prova che lo stato attuale del prodotto non la applica a Pro/Max.

Il gateway locale funziona diversamente e la pagina `llm-gateway` lo spiega con una frase
che vale più di mille secondarie: quando imposti `ANTHROPIC_BASE_URL` per puntare Claude
Code a un proxy locale ma **non** imposti anche una credenziale-gateway
(`ANTHROPIC_AUTH_TOKEN` o `ANTHROPIC_API_KEY`), Claude Code continua a usare il login
claude.ai salvato — il proxy si limita a essere un salto di rete in più sulla strada verso
`api.anthropic.com`, non un sostituto di identità. È esattamente la forma "bisturi" che
Dedalo aveva proposto il 25/7 senza poterla fondare su un testo ufficiale: un router locale
(OmniRoute, LiteLLM) che per le richieste dirette a Claude si limita a fare da tubo, mentre
per le richieste dirette a modelli gratuiti prende in carico la parte che gli compete. Il
limite dichiarato è che Anthropic "doesn't endorse, maintain, or audit third-party gateway
products, and doesn't support routing Claude Code to non-Claude models through any
gateway" — una clausola di irresponsabilità tecnica, non un divieto contrattuale: se il
proxy rompe una feature futura di Claude Code, non è un problema di Anthropic; se il proxy
smista lo stesso traffico verso Llama o Qwen, quella parte del flusso non ha alcuna garanzia
di compatibilità, ma non risulta vietata da nessun testo letto in questa ricerca.

Il caso diverso, e quello dove il rischio resta reale, è quando l'identità stessa cambia
mano: il provider "Claude Web" di OmniRoute non usa il token OAuth di Claude Code, usa i
cookie di sessione del sito claude.ai (`sessionKey`, `cf_clearance` e altri) per far
credere ai server di Anthropic che sta parlando con un browser autenticato, mentre in realtà
sta parlando con un tool terzo. Qui il client che accede al servizio non è più "Claude
Code" in nessun senso tecnico — è OmniRoute che si spaccia per una sessione web. Questo
scenario collima con la lettura più severa di `legal-and-compliance` ("third-party
developers... route requests through Free, Pro, or Max plan credentials on behalf of their
users") anche nell'interpretazione più stretta possibile, perché non c'è alcuna ambiguità
sul "chi" sta accedendo: non è l'utente con il proprio client ufficiale, è un tool
intermedio che finge di esserlo. Rimane il candidato da non toccare, per le stesse ragioni
già scritte da Argonauta il 25/7 in P7 — solo che ora la ragione ha un fondamento testuale
diretto, non solo una deduzione da articoli di terzi.

Resta aperta, e va dichiarata aperta, la zona grigia dell'Agent SDK per uso personale
mono-utente. Il testo che la riguarda compare due volte, in forma leggermente diversa. Su
`agent-sdk/overview`: "Unless previously approved, Anthropic does not allow third party
developers to offer claude.ai login or rate limits for their products, including agents
built on the Claude Agent SDK. Use the API key authentication methods described in the
Quickstart instead." Su `legal-and-compliance`: "Developers building products or services
that interact with Claude's capabilities, including those using the Agent SDK, should use
API key authentication... Anthropic does not permit third-party developers to offer
Claude.ai login or to route requests through Free, Pro, or Max plan credentials **on behalf
of their users**." Entrambe le frasi sono costruite intorno a "prodotti", "servizi",
"third-party developers" e "on behalf of their users" — linguaggio che descrive un
developer che rivende o redistribuisce accesso ad altri utenti finali usando le proprie
credenziali di abbonamento. La navicella di Giuseppe non fa questo: è mono-utente, non
distribuita, non offerta a nessun altro. Ma nessuna delle due pagine scrive esplicitamente
"tranne se sei l'unico utente del tuo stesso abbonamento" — l'assenza di quella clausola è
un vuoto, non una conferma. Contemporaneamente, `authentication` elenca l'Agent SDK come uno
dei percorsi di login OAuth validi e ne discute l'enforcement di `forceLoginOrgUUID` come se
fosse un caso d'uso normale, non un'eccezione tollerata. La tensione fra questi due registri
— "should use API key" da un lato, "login funziona e viene gestito" dall'altro — è reale e
non si scioglie leggendo altre pagine: va portata a Dedalo/Mnemosyne come fatto, non come
raccomandazione.

## Contro

- La zona grigia sull'Agent SDK mono-utente non si chiude con questa ricerca: il testo non
  lo vieta esplicitamente ma nemmeno lo assolve. Chi userà l'Agent SDK sull'abbonamento della
  navicella lo fa sapendo che la lettura più severa possibile del linguaggio ufficiale lo
  classificherebbe come il caso descritto, anche se lo scopo è diverso da quello che il testo
  sembra voler colpire.
- "Not supported" per il routing verso modelli non-Claude attraverso un gateway non è una
  garanzia di stabilità: una futura versione di Claude Code potrebbe introdurre un campo o un
  header che un gateway non aggiorna in tempo, rompendo silenziosamente la sessione — il
  rischio è tecnico (rottura), non legale.
- Ogni free tier misurato ha un RPM fra 5 e 30 — nessuno regge il pattern reale di un
  Argonauta (decine di migliaia di token di input in pochi minuti, come misurato da
  Mnemosyne il 31/7). Sono utilizzabili solo per passate meccaniche a bassa cadenza, non per
  ragionamento agentivo continuo.
- SiliconFlow non ha una dichiarazione esplicita di non-training: è un gate-privacy aperto,
  non uno chiuso, nonostante il tono rassicurante del marketing ("zero data retention")
  trovato solo in fonti secondarie, mai nella privacy policy ufficiale stessa.
- OpenRouter free ha un default di routing che *può* permettere il training sui dati salvo
  disattivazione esplicita — è l'unico dei sei candidati dove il gate-privacy richiede
  un'azione attiva dell'utente, non è già chiuso di default.
- I numeri di rate limit su tutti i provider commerciali (Groq, Cerebras, SiliconFlow,
  OpenRouter) sono dichiarati "soggetti a cambiare senza preavviso" nella prassi di settore;
  nessuno di essi porta una data di validità sulla pagina stessa — sono fotografie del
  31/7/2026, non garanzie.

## Innesto proposto

Non deciso qui — competenza di Dedalo/Mnemosyne, art. 6 del mandato. Punti di aggancio, se
la direzione scelta fosse "usare quanto verificato qui":

- Se si vuole un battito/tick (D4) che non tocchi l'Agent SDK: `claude -p` con
  `claude setup-token` per generare un `CLAUDE_CODE_OAUTH_TOKEN` di lungo periodo, invocabile
  da Task Scheduler senza login interattivo — copre esattamente il candidato 2 di D4 con la
  base legale ora confermata.
- Se si vuole la forma "bisturi" di OmniRoute proposta da Dedalo il 25/7: configurare
  `ANTHROPIC_BASE_URL` verso il proxy locale **senza** impostare `ANTHROPIC_AUTH_TOKEN` o
  `ANTHROPIC_API_KEY` per il traffico diretto a Claude — il login OAuth resta attivo e la
  fattura resta l'abbonamento. Il resto del traffico (passivi/bulk verso Groq, Cerebras,
  SiliconFlow) passa dallo stesso proxy con credenziali proprie di quei provider.
  File toccato: la configurazione del proxy, non gli agenti stessi — zero refactoring,
  coerente con quanto già scoperto da Argonauta il 25/7 (P1).
- Provider consigliato per un primo innesto bulk, in ordine di preferenza sui dati misurati
  qui: Cerebras (privacy più pulita, dichiarazione esplicita e datata) o Groq (tool-calling
  ampiamente confermato, retention zero di default) — non SiliconFlow finché non arriva una
  dichiarazione di training esplicita, non OpenRouter free finché l'interruttore
  anti-training non è verificato attivo.
- Il provider "Claude Web" di OmniRoute va escluso per iscritto da qualunque configurazione
  — punto fermo, non negoziabile su questa ricerca.

## Non confermato

- Se la lettura permissiva di "Agent SDK mono-utente non è il target del divieto" regga in
  pratica — nessuna pagina Anthropic la conferma né la smentisce esplicitamente; è
  un'interpretazione a partire dal linguaggio "on behalf of their users" / "third-party
  developers... for their products", non un fatto scritto.
- Se il meccanismo di gateway pass-through descritto in `llm-gateway` sia inteso anche per
  utenti individuali Pro/Max al di fuori di un contesto "organizzazione" — le pagine sono
  scritte con linguaggio da amministratore IT, ma il meccanismo tecnico (`ANTHROPIC_BASE_URL`
  senza credenziale) non è condizionato a nessun controllo di piano nel testo letto.
- Tool-calling per Cerebras sui suoi tre modelli free specificamente (gpt-oss-120b, GLM-4.7,
  Gemma-4-31b) non è stato confermato su una pagina Cerebras dedicata al tool-use — solo
  inferito dal fatto che gli stessi modelli lo supportano su SiliconFlow e Groq.
- Se le tabelle di rate-limit di Groq, Cerebras, SiliconFlow, OpenRouter cambino prima che
  Dedalo agisca su questa ricerca — nessuna porta una data di ultimo aggiornamento visibile.
- Se `code.claude.com/docs/en/legal-and-compliance` porti una data di ultima revisione della
  sezione "Authentication and credential use" — la pagina non mostra un changelog o una data
  di modifica; è stata letta come stato corrente al 31/7/2026, non come testo stabile da una
  data nota.

---

## Fonti primarie consultate (tutte lette 31/7/2026)

- `anthropic.com/legal/consumer-terms` — Effective Date: 8 ottobre 2025, §3.7
- `anthropic.com/legal/commercial-terms`, `anthropic.com/legal/aup` — consultate, nessuna
  clausola specifica trovata sul nodo OAuth/Agent SDK
- `code.claude.com/docs/en/legal-and-compliance` — sezione "Authentication and credential use"
- `code.claude.com/docs/en/agent-sdk/overview` — nota sui third-party developer
- `code.claude.com/docs/en/authentication` — precedenza credenziali, `claude setup-token`
- `code.claude.com/docs/en/headless` — meccanica `-p`
- `code.claude.com/docs/en/llm-gateway` — "Subscriptions and gateways"
- `code.claude.com/docs/en/llm-gateway-connect` — configurazione gateway per superficie
- `code.claude.com/docs/en/costs` — fatturazione, finestre di utilizzo, scheduled tasks
- `code.claude.com/docs/en/scheduled-tasks` — Routines/Desktop/`/loop`, confronto
- `console.groq.com/docs/rate-limits`, `.../your-data`, `.../tool-use`
- `inference-docs.cerebras.ai/support/rate-limits`, `cerebras.ai/privacy-policy`
- `docs.siliconflow.com/en/userguide/rate-limits/rate-limit-and-upgradation`,
  `siliconflow.com/pricing` (istantanea 22/7/2026),
  `docs.siliconflow.com/en/legals/privacy-policy` (Update Date: 31/3/2025)
- `openrouter.ai/docs/api-reference/limits`, `.../docs/features/privacy-and-logging`
- `together.ai/pricing`

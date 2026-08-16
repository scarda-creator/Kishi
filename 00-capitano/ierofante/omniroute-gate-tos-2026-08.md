---
tipo: gate-tos
autore: Ierofante
data: 2026-08-16
oggetto: Verdetti ToS per i provider gratuiti candidati a OmniRoute
stato: completato
fonti-verificate-al: 2026-08-16
---

# Gate ToS — OmniRoute provider gratuiti (agosto 2026)

Questo documento è il verdetto di Ierofante sui termini di servizio dei provider
gratuiti candidati a essere collegati a OmniRoute. Non è una rassegna: è un gate
con verdetti vincolanti (fino a revisione). Ogni sezione dichiara la fonte e la
data a cui si riferisce la clausola citata. I ToS cambiano; un divieto letto oggi
non è eterno e un permesso di ieri non è garantito oggi.

**Uso reale da validare:** chiamate automatizzate e schedulate, lanciate da script
e agenti, senza un umano davanti, anche di notte. Nessun contenuto personale
(memoria, L5, profilo Giuseppe, materiali d'esame) esce dal computer verso questi
provider — è un vincolo già cementato che questo documento assume come fisso.

---

## 1. Google Gemini — Free Tier (AI Studio)

**Fonti verificate:** Gemini API Additional Terms of Service (ai.google.dev/gemini-api/terms),
lette il 2026-08-16.

### 1.1 Uso automatizzato e agentico

Il ToS affronta esplicitamente i «servizi agentici»: la clausola dice che il
cliente «è il solo responsabile delle azioni e dei compiti eseguiti dal servizio»
e che «non si bypassa automaticamente nessuna richiesta di conferma umana».
La seconda parte è una restrizione di comportamento (l'agente non deve aggirare
checkpoint di conferma), non un divieto di uso non interattivo in sé. Chiamate
schedulate da script su task puramente meccanici (estrazione, normalizzazione,
conteggi) non violano questa clausola, a condizione che non simulino interazione
umana per aggirare safeguard.

**Stato:** uso agentico/automatizzato — PERMESSO con condizioni.

### 1.2 Dati — la clausola critica

Il ToS del free tier dice esplicitamente: Google usa i contenuti inviati per
«fornire, migliorare e sviluppare prodotti e servizi Google e tecnologie di
machine learning». E poi, con linguaggio direttivo: **«Non inviare informazioni
sensibili, confidenziali o personali ai Servizi non a pagamento.»**

Questa è una restrizione in testo chiaro, non un'ambiguità interpretabile. Qualsiasi
contenuto che includa memoria personale, L5, profilo, materiali d'esame — o anche
testo estratto da quel corpus — non può transitare verso Gemini free tier senza
violare questa clausola. Dati verificati al 2026-08-16.

### 1.3 Account multipli, condivisione chiavi

Il ToS non proibisce esplicitamente gli account multipli con linguaggio dedicato,
ma i termini applicabili alle "API Clients" implicano un rapporto uno-a-uno
applicazione/account. Non verificato testo esplicito di ban — il rischio è basso
per uso singolo account.

### 1.4 Verdetto

**AMBRA.** L'uso automatizzato e agentico è tecnicamente permesso. Il blocco è
sui dati: solo task con contenuto anonimo e non personale (conteggi di token,
riformattazione di strutture puramente formali senza testo di Giuseppe) possono
transitare. La domanda pratica per ogni tipo di lavoro che Dedalo voglia ruotare
su Gemini free è: «in questo payload c'è qualcosa che identifica Giuseppe o
proviene dalla sua memoria?» Se sì, non va. Se no, può andare.

Condizione aggiuntiva: non inviare mai prompt di sistema che contengano il profilo
utente, istruzioni personalizzate o contesto di sessione con dati personali.

---

## 2. Groq — Free Developer Tier

**Fonti verificate:** Groq Services Agreement (console.groq.com/docs/legal/services-agreement),
Groq Acceptable Use & Responsible AI Policy (console.groq.com/docs/legal/ai-policy),
lette il 2026-08-16.

### 2.1 Uso automatizzato e agentico

Il Services Agreement, Section 4.6, riconosce esplicitamente l'uso agentico e
ne pone la responsabilità sul cliente. Non esiste un divieto di uso non interattivo
o schedulato. I rate limit si applicano a livello di organizzazione (non per chiave
API), quindi aggiungere chiavi non moltiplica la capacità — Groq ha già gestito
questo vettore tecnicamente.

**Stato:** uso automatizzato — PERMESSO, entro i rate limit.

### 2.2 Dati

Section 4.2 del Services Agreement è esplicita: «Groq non è autorizzata a usare
Input o Output per l'addestramento o il fine-tuning di qualsiasi AI Model Service
o altri modelli, salvo esplicita concessione di permesso o istruzione da parte del
Customer.» Questo è il ToS più favorevole fra i provider analizzati sul punto dei
dati: il default è non-training, e serve un atto positivo del cliente per cambiarlo.

**Stato dati:** VERDE — Groq non addestra sui tuoi dati per default.

### 2.3 Account multipli — la linea rossa

L'Acceptable Use Policy dice espressamente che è vietato usare il servizio «oltre
i parametri pubblicati, i rate limit o i limiti di utilizzo, anche tramite la
registrazione di account multipli o l'orchestrazione dell'uso fra più organizzazioni».

Questa clausola è redatta con precisione per chiudere esattamente il vettore
di aggancio che un sistema automatizzato potrebbe usare. È un divieto esplicito,
non implicito. Un solo account, un solo set di chiavi.

**Stato account multipli:** ROSSO — vietato esplicitamente, sospensione immediata.

### 2.4 Condivisione chiavi API

Section 3.2: il cliente è responsabile della sicurezza delle chiavi API. La
condivisione di chiavi con terzi viola questa obbligazione di sicurezza.

### 2.5 Verdetto

**VERDE** per uso singolo account, automatizzato, con contenuto non personale.
La linea rossa unica è il divieto di account multipli per aggirare i limiti — è
esplicita e il rischio di sospensione è reale. Per la navicella: un account, una
organizzazione, rate limit rispettati strutturalmente dal filtro di Temi.

Rate limit free tier al 2026-08-16 (da fonti terze, non dal ToS ufficiale):
30 RPM / 6.000 TPM / 1.000 RPD per i modelli principali. Non verificati
direttamente dalla console — Dedalo dovrebbe leggere console.groq.com/settings/limits
prima di configurare il filtro di Temi, perché variano per modello.

---

## 3. Mistral AI — Experiment Tier (gratuito)

**Fonti verificate:** ricerca web su legal.mistral.ai (il documento terms API non era
raggiungibile direttamente il 2026-08-16; il ToS principale reindirizza a una pagina
indice senza testo delle clausole). Alcune informazioni vengono da fonti secondarie
(pricepertoken.com, spheron.network, meetily.ai) — da considerarsi orientative, non
citate come testo ufficiale.

### 3.1 Uso automatizzato e agentico

Non è emerso un divieto esplicito di uso automatizzato nell'Experiment tier. Le
fonti secondarie descrivono il tier come «per valutazione, non produzione», ma
questa è una qualificazione dell'intento dichiarato, non un divieto legale formale
verificato. Non posso citare il testo ufficiale perché non era accessibile.

**Stato uso automatizzato:** non verificato al livello di testo di clausola. Non
posso dare verde senza leggere il contratto.

### 3.2 Dati — training opt-out

Su questo punto le fonti secondarie concordano: il free tier Experiment include di
default gli input e gli output nei programmi di training; l'opt-out esiste ma deve
essere attivato manualmente via Admin Console (Settings → Privacy → «Allow Mistral
to use your data for model improvement» → off). Una denuncia alla CNIL francese del
febbraio 2025 ha portato Mistral ad aggiungere un opt-out email per gli utenti free.

Il default è dunque training attivo. Senza opt-out esplicito, i prompt inviati al
free tier di Mistral vengono usati per addestrare modelli.

### 3.3 Verdetto

**AMBRA con condizione sospensiva.** Prima di usare Mistral:

1. Leggere il testo delle API Terms su legal.mistral.ai (cercarne il link diretto
   al documento, non la pagina indice) e verificare se l'uso automatizzato è
   esplicitamente permesso o ristretto.
2. Se il punto 1 non blocca, attivare l'opt-out training prima di qualsiasi chiamata.
3. Solo contenuto senza dati personali (stesso vincolo di Gemini).

Non è verde perché il testo del contratto non era accessibile per verifica diretta.
Non è rosso perché non c'è evidenza di un divieto esplicito.

---

## 4. Cerebras Inference — Free Developer Tier

**Fonti verificate:** cerebras.ai/terms-of-service (caricato il 2026-08-16;
il documento PDF del 27 agosto 2024 su cloud.cerebras.ai/terms restituiva
contenuto vuoto o 404).

### 4.1 Uso automatizzato — clausola critica

Il Terms of Use di Cerebras, letto il 2026-08-16, contiene due clausole rilevanti:

Prima: vieta «Use any robot, spider, scraper, off-line reader, data mining tool,
data gathering or extraction tool, or any other automated means to access the
Service».

Seconda: vieta l'invio di «more request messages to the servers running the Service
than a human can reasonably produce in the same period of time by using a
conventional online web browser».

**Queste clausole sono problematiche.** La seconda in particolare definisce un
tetto comportamentale (volume di richieste producibile da un umano via browser)
che è strutturalmente incompatibile con chiamate schedulate, notturne o a burst.

Il dubbio interpretativo: queste clausole sembrano redatte per il sito web e
l'interfaccia, non per l'API. Un'API per sviluppatori ha senso solo se è
chiamabile programmaticamente. Ma il testo non distingue: dice «the Service»
in modo generico. Il documento letto (cerebras.ai/terms-of-service) potrebbe
essere i website terms, non i cloud/API terms specifici. Non sono riuscito a
leggere il documento specifico del cloud (cloud.cerebras.ai/terms) per
verificare se esiste un regime separato.

**Stato uso automatizzato:** INCERTO con bandiera rossa. Il testo disponibile vieta
uso automatizzato in modo esplicito, ma potrebbe non applicarsi all'API. Finché
non si verifica il documento cloud specifico, il rischio di sospensione legittima
non può essere escluso.

### 4.2 Dati

Il ToS esclude esplicitamente il training: «the foregoing does not grant Cerebras
the right to use Service Content for the purpose of training or fine-tuning models.»
Questo è un punto favorevole.

### 4.3 Verdetto

**ROSSO condicionale.** Cerebras non si usa per uso automatizzato dalla navicella
finché non si legge e cita il testo delle cloud/API terms specifiche
(cloud.cerebras.ai/terms o il documento API separato). Se le API terms hanno un
regime distinto che permette l'uso programmatico, il verdetto può diventare AMBRA
o VERDE con una verifica diretta. Il blocco non è definitivo — è un blocco a
conoscenza incompleta.

Azione richiesta: recuperare il testo completo delle API terms Cerebras (non i
website terms) e riportarlo a Ierofante per un secondo verdetto. Il ToS PDF del
2024 su cloud.cerebras.ai/terms non era accessibile al momento della verifica.

---

## 5. OpenRouter — Modelli `:free`

**Fonti verificate:** openrouter.ai/terms (letto il 2026-08-16),
openrouter.ai/docs/guides/privacy/provider-logging (ricerca web 2026-08-16).

### 5.1 La questione dei modelli :free

C'è una discrepanza tra il testo del ToS (Section 4.1: «Currently, OpenRouter
requires users to purchase Credits to make API calls and access the Service») e la
realtà operativa documentata (modelli con ID che terminano in `:free`, accessibili
senza carta e con saldo zero). Questa discrepanza è reale e non è stata risolta
nella verifica. Possibili spiegazioni: il testo del ToS è datato rispetto alla
realtà commerciale, oppure i :free models sono coperti da termini supplementari
non inclusi nel documento principale. Non posso dichiarare i :free models
«autorizzati dai ToS» finché questa contraddizione non è risolta.

### 5.2 Uso automatizzato e agentico

OpenRouter è una piattaforma di routing progettata per uso programmatico: sarebbe
contraddittorio in sé vietare le chiamate API automatizzate. Il ToS, Section 7
(Prohibited Conduct, Item 5), vieta l'uso di «automated technology to scrape or
copy any information on the Site or the Services» — questa è una clausola
anti-scraping del sito web, non un divieto di chiamate API programmatiche. L'uso
agentico non è esplicitamente trattato nei termini come restrizione.

**Stato uso automatizzato:** PERMESSO per chiamate API legittime (non scraping del
sito web).

### 5.3 Account multipli

Section 7, Item 3 del ToS: «create a false identity, misrepresent your identity,
or create multiple accounts as a single user, for purposes of bypassing or
circumventing use limits on the Site or Service or for any other reason».

Il divieto è esplicito e include «any other reason» — quindi anche account multipli
non nati per aggirare limiti sarebbero problematici se usati per questo scopo. Un
solo account.

### 5.4 Dati — il punto critico di OpenRouter

OpenRouter non addestra sui tuoi dati. Il problema sono i provider sottostanti:
OpenRouter dichiara esplicitamente di «non controllare e non essere responsabile
per la gestione degli Input/Output da parte degli LLM, incluso per l'uso nel loro
model training». Ogni modello :free usa il ToS del proprio provider. OpenRouter
offre il parametro ZDR (Zero Data Retention) per instradare solo verso endpoint
con policy ZDR — ma questo va configurato per richiesta o a livello di account,
e i modelli :free potrebbero non avere endpoint ZDR disponibili.

**Stato dati:** AMBRA — OpenRouter è un passthrough verso provider con politiche
dati proprie. Usare ZDR dove disponibile. Per ogni modello :free candidato,
verificare se ha endpoint ZDR su openrouter.ai/docs/guides/privacy/provider-logging.

### 5.5 Verdetto

**AMBRA** con due condizioni:
1. Risolvere la discrepanza ToS Section 4.1 vs. realtà :free (chiedere conferma
   scritta a OpenRouter support, o trovare i termini supplementari specifici dei
   :free models).
2. Prima di instradare qualsiasi tipo di task, verificare la policy dati del
   provider sottostante del modello specifico e usare ZDR dove disponibile.

Il cap di 50 req/day senza crediti ($10 lifetime) è operativamente insufficiente
per uso regolare. Il $10 una-tantum (crediti non scadono) porterebbe a 1.000 req/day
— ma questo sarebbe un pagamento, che per la navicella non è ammesso. Questo rende
OpenRouter :free genuinamente limitato senza quel $10.

---

## 6. Together AI

**Fonti verificate:** together.ai/terms-of-service (letto il 2026-08-16).

### 6.1 Tier gratuito — non esiste

Together AI non ha un free tier permanente. Offre $100 di crediti iniziali che
esauriscono nel giro di settimane con uso regolare. Non è un provider candidato
per il vincolo economico della navicella (nessuna API a pagamento per operarla).

**Verdetto: FUORI PERIMETRO.** Together non rientra nei candidati gratuiti
permanenti. La verifica ToS è moot — il problema è economico, non legale.

Per completezza: Together supporta ZDR (opt-out storage e training disponibile
nei settings), e il ToS non contiene divieti espliciti di uso automatizzato.
Se il vincolo economico cambiasse, il ToS non sarebbe l'ostacolo.

---

## 7. Riepilogo verdetti

| Provider | Verdetto | Uso automatizzato | Training dati | Account multipli |
|---|---|---|---|---|
| Gemini free | AMBRA | Permesso | SÌ (training attivo) | Non verificato |
| Groq free | VERDE | Permesso | NO (default sicuro) | VIETATO esplicito |
| Mistral Experiment | AMBRA* | Non verificato dal testo | SÌ (opt-out disponibile) | Non verificato |
| Cerebras free | ROSSO cond. | INCERTO (testo vieta) | NO | Non verificato |
| OpenRouter :free | AMBRA | Permesso (API) | Dipende dal provider | VIETATO esplicito |
| Together AI | Fuori perimetro | — | NO (ZDR dispo.) | — |

(*) Ambra con condizione sospensiva: il testo del contratto non era leggibile.

---

## 8. Verdetti operativi per Dedalo

**Usa subito, senza ulteriori verifiche:** Groq. È l'unico provider con:
- Uso automatizzato non vietato
- Default non-training verificato da clausola
- Testo del contratto letto e citato

**Usa con restrizione dati (solo task anonimi):** Gemini free tier, se e solo se
il payload non contiene nessun dato riconducibile a Giuseppe o alla sua memoria.
«Do not submit sensitive, confidential, or personal information to the Unpaid
Services» è un'istruzione esplicita di Google, non una sfumatura.

**Non usare finché non si completano le verifiche mancanti:**
- Mistral: leggere il testo effettivo dell'API ToS (non la pagina indice di
  legal.mistral.ai) e attivare opt-out training.
- Cerebras: leggere le cloud/API terms specifiche (cloud.cerebras.ai/terms o
  documento equivalente). Se il testo vieta l'uso automatizzato anche sull'API,
  diventa rosso definitivo. Se ha un regime separato che lo permette, può diventare
  verde sui dati (perché non addestra).
- OpenRouter :free: risolvere la discrepanza Section 4.1 del ToS e verificare ZDR
  per ogni modello candidato.

**Non usare:** Together AI (fuori perimetro economico).

---

## 9. Regole trasversali — valide per tutti i provider

Queste non variano da provider a provider; derivano dalla natura del sistema e
dai vincoli cementati della navicella.

**Account multipli:** vietato su Groq (esplicito) e OpenRouter (esplicito). Per
gli altri non ho trovato testo esplicito, ma la pratica è contraria allo spirito
di tutti i free tier e costituisce il vettore di sospensione più comune. Regola
operativa: un solo account per provider, un solo set di chiavi.

**Condivisione chiavi:** vietata su Groq (obbligazione di sicurezza esplicita).
Regola operativa: le chiavi API non escono dall'ambiente locale, non vanno in
variabili d'ambiente condivise, non vanno in repo pubblici.

**Spike di burst:** nessun ToS lo nomina esplicitamente come causa di sospensione
(a differenza dei rate limit), ma il filtro di Temi va progettato con finestra
scorrevole per non produrre burst che sembrino abuso. La differenza fra
«rate-limit temporaneo» e «sospensione account» è che la sospensione scatta quando
il provider conclude che il comportamento è sistematicamente abusivo, non casuale.

**Uso degli output:** nessun provider analizzato vieta esplicitamente l'uso
commerciale degli output in sé (con la riserva che i modelli e il contesto dello
specifico modello potrebbero avere restrizioni aggiuntive non verificate qui). La
clausola di Gemini «non sviluppare modelli che competano con i Servizi» si applica
all'uso degli output per addestrare modelli concorrenti, non alla pubblicazione di
contenuti generati.

---

*Prossima revisione consigliata: quando Dedalo seleziona i modelli specifici da
collegare, Ierofante verifica le clausole del modello specifico (non solo del
provider) su OpenRouter, e legge i ToS mancanti di Mistral e Cerebras.*

*Questo documento non sostituisce consulenza legale. Segnala le clausole;
l'autorità finale su come procedere è di Giuseppe.*

---

## 10. Provider senza autenticazione — secondo giro (2026-08-16)

Questo secondo giro riguarda tre provider che OmniRoute raggiunge senza chiave API:
`duckduckgo-web`, `felo-web`, `veoaifree-web`. Il punto legale è strutturalmente
diverso dai free tier del primo giro.

**La distinzione che cambia tutto.** Un free tier contrattuale è un contratto: il
provider ti dà accesso, tu accetti i termini, la sospensione colpisce il tuo account.
Qui non c'è contratto, perché non c'è autenticazione. OmniRoute pilota
programmaticamente un'interfaccia che il servizio ha aperto per l'uso umano
interattivo. Non esiste un account da sospendere. La sanzione che scatta — se il
provider rileva il pattern automatizzato — è il blocco dell'indirizzo IP da cui
arrivano le richieste. Per Giuseppe, che usa questi servizi anche come utente umano,
un ban IP cancella entrambi gli usi in un colpo solo.

---

### 10.1 DuckDuckGo AI Chat (`duckduckgo-web`)

**Fonte verificata:** duck.ai Privacy Terms (duckduckgo.com/aichat/privacy-terms),
letta il 2026-08-16.

#### Clausola rilevante — testo diretto

La clausola di Duck.ai che vieta esattamente l'uso che OmniRoute farebbe:

> «Interfering with or negatively impacting Duck.ai or other DuckDuckGo Services,
> including circumventing rate limits, safeguards, or other restrictions, or
> **automated querying** and developing or offering AI services, such as training
> an AI model.»

«Automated querying» è nel testo, senza ambiguità. Non è una clausola generica
anti-scraping: è specificamente rivolta all'uso programmatico del servizio AI.
Il prefisso `duckduckgo-web` in OmniRoute fa esattamente questo.

#### Esiste un'API ufficiale?

DuckDuckGo ha una Instant Answer API per le ricerche, ma **non ha nessuna API
ufficiale per AI Chat**. Duck.ai non è un servizio progettato per l'accesso
programmatico — è un frontend anonimo per uso umano che si appoggia a modelli di
terzi (GPT, Claude, Llama). L'assenza di una via ufficiale non rende lecita quella
non ufficiale: la rafforza come abuso, perché non c'è canale alternativo a cui
rimandare.

#### Struttura della sanzione

Duck.ai non richiede account. Il testo dice che DuckDuckGo «may suspend or
terminate your access to Duck.ai at any time». Senza account, l'accesso è
identificato dall'IP. Un ban colpisce l'IP di Giuseppe e lo esclude da duck.ai
anche quando lo usa come umano.

#### Verdetto: ROSSO

Stop duro. Il testo vieta esplicitamente «automated querying». Non c'è
interpretazione che permetta a OmniRoute di usare duck.ai. Il rischio non è solo
la perdita del nodo in OmniRoute — è il ban dell'IP di casa di Giuseppe da un
servizio che probabilmente usa anche fuori dalla navicella.

---

### 10.2 Felo (`felo-web`)

**Fonte verificata:** felo.ai/en/enterprise/terms (letta il 2026-08-16; testo in
giapponese, clausole tradotte e citate con numero di sezione). Il ToS consumer
su account.felo.ai/policies/terms-of-use non era caricabile in questa sessione
(pagina restituiva solo JavaScript non renderizzato). Il testo delle enterprise
terms è lo strumento più vicino al testo contrattuale verificato disponibile.

#### Clausole rilevanti

Section 7-6: vieta «atti che impongono un carico eccessivo sulla rete o sui sistemi
del servizio».

Section 7-8: vieta «atti che rischiano di ostacolare l'operazione del servizio».

Section 7-9: vieta «l'accesso non autorizzato alla rete o ai sistemi».

Section 11-1: il provider può «cancellare contenuti, sospendere l'accesso al
servizio o terminare la registrazione senza preavviso» per violazioni.

Non c'è una clausola esplicita che nomini bot o scraper, ma le clausole sopra
coprono il comportamento in modo sufficiente: chiamate schedulate e automatizzate
su un'interfaccia web non sono «accesso autorizzato» (7-9) e producono carico non
umano (7-6).

#### Esiste un'API ufficiale?

Sì, e questo è il punto più pesante. Felo ha una piattaforma API ufficiale a
openapi.felo.ai, documentata e con chiave API dedicata. La documentazione dice
esplicitamente di non esporre la chiave in codice frontend o log pubblici — è
un'API progettata per l'accesso programmatico. L'esistenza di questo canale ufficiale
rende l'accesso all'interfaccia web via OmniRoute molto più difficile da difendere:
Felo ha separato la via umana (web) dalla via programmatica (API), e la via
programmatica richiede autenticazione. Usare la via web automaticamente bypassa
questa separazione intenzionale.

#### Struttura della sanzione

Il ToS consumer (non verificato direttamente per inaccessibilità della pagina)
presumibilmente richiede account per l'accesso normale. Se l'integrazione
`felo-web` accede all'interfaccia senza autenticazione, la sanzione è IP-based.
Se accede con un account, la sanzione è la sospensione dell'account. In entrambi
i casi, Section 11-1 permette la terminazione senza preavviso.

#### Verdetto: ROSSO

Stop duro. L'API ufficiale esiste. Usare l'interfaccia web in modo automatico
quando esiste una via programmatica ufficiale non è una scelta neutrale — è
aggiramento deliberato del canale contrattuale. Le clausole 7-6, 7-8 e 7-9
coprono il comportamento. Non c'è condizione che renda questa via verde.

**Via legittima alternativa:** se Giuseppe vuole usare Felo in modo automatizzato,
il canale è openapi.felo.ai con chiave API propria. Quel canale ha i suoi termini
e andrebbe valutato separatamente da Ierofante prima dell'attivazione.

---

### 10.3 VeoAI Free (`veoaifree-web`)

**Fonti verificate:** veoaifree.com/terms-and-conditions/ (letta il 2026-08-16);
ricerca web su natura del sito (2026-08-16).

#### Cosa è veoaifree.com — e perché conta

Prima di arrivare al ToS, c'è un problema a monte. veoaifree.com non è un servizio
di Google. È un sito terzo indipendente che offre accesso (gratuito, senza account)
alla tecnologia Google Veo AI Video Generator. Dai risultati di ricerca: «VeoAIFree
is a third-party wrapper service»; «VeoAIFree shall not be held liable for losses,
delays, or inconveniences caused by third-party service failures». Il sito stesso
ammette di appoggiarsi a un servizio di terza parte (Google Veo) su cui non ha
controllo.

Questo crea una struttura a due livelli:
- **Livello 1:** veoaifree.com probabilmente accede a Google Veo in modi che
  possono violare i ToS di Google (uso non autorizzato di un servizio come wrapper
  gratuito per conto terzi senza contratto API ufficiale). La stabilità del servizio
  dipende da questa relazione opaca con Google.
- **Livello 2:** OmniRoute automatizza l'interfaccia di veoaifree.com, che è già
  essa stessa un'interfaccia web non programmatica.

#### Clausole rilevanti del ToS di veoaifree.com

Dal terms-and-conditions (testo informale, letto il 2026-08-16):

> «Don't try to break the site. No hacking attempts, no trying to bypass security,
> no running bots to overload the servers.»

> «Overloading the servers: Don't run automated bots or scripts that generate
> content at inhuman speeds just to stress-test our system.»

> «If you do any of this, we'll block your access.»

#### Struttura della sanzione

Nessun account richiesto per veoaifree.com. «We'll block your access» si traduce
in blocco IP. Nessuna procedura di appeal documentata nel testo.

Strato aggiuntivo: se Google rileva che veoaifree.com fa uso non autorizzato del
suo modello, può disabilitare l'accesso al servizio intero — e OmniRoute perde
il nodo senza preavviso e senza che Giuseppe abbia fatto nulla.

#### Verdetto: ROSSO

Stop duro, con due motivazioni indipendenti:

1. Il ToS di veoaifree.com proibisce esplicitamente «automated bots or scripts» e
   «inhuman speeds». OmniRoute automatizza le chiamate: è esattamente quello che
   vieta. La sanzione è blocco IP, che copre anche l'uso umano normale.

2. veoaifree.com è un wrapper non ufficiale di un servizio Google. Fare affidamento
   su di esso per l'infrastruttura della navicella significa appoggiarsi a un anello
   la cui stabilità dipende da una relazione che può essere interrotta da Google in
   qualsiasi momento senza preavviso a Giuseppe. Non è un rischio legale in senso
   stretto — è rischio di stabilità infrastrutturale, che Ierofante segnala perché
   pertinente alla decisione.

---

### 10.4 Riepilogo del secondo giro

| Provider | Verdetto | Clausola violata | Tipo di sanzione |
|---|---|---|---|
| `duckduckgo-web` | ROSSO | «automated querying» — duck.ai privacy-terms | Blocco IP (no account) |
| `felo-web` | ROSSO | §7-6, §7-8, §7-9 + API ufficiale esistente | Blocco IP o account (da verificare) |
| `veoaifree-web` | ROSSO | «automated bots or scripts» — veoaifree.com T&C | Blocco IP (no account) + instabilità upstream |

Tutti e tre: **non si attivano**.

La distinzione con il primo giro vale di nuovo in chiusura: qui il rosso non è
«ti sospendono l'account». È «ti bloccano l'IP». La casa di Giuseppe. Per Giuseppe
questa non è la stessa cosa di perdere un nodo nel router.

**Autorità finale su questi tre provider è di Giuseppe.** Ierofante blocca;
le motivazioni per intero sono qui sopra. Se Giuseppe vuole procedere comunque,
la decisione è sua e va presa con questa documentazione davanti.

---

*Aggiornamento secondo giro: 2026-08-16. Provider coperti in questo giro:
duckduckgo-web, felo-web, veoaifree-web.*

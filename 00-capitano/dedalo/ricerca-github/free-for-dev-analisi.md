# free-for-dev — Analisi per la navicella
**Argonauta Personale — 2026-07-19**
Fonte base: github.com/ripienaar/free-for-dev (master branch, ~57 categorie)

---

## 1. MAPPA DELLE CATEGORIE

57 categorie totali. Le raggruppo per area funzionale.

**Compute e hosting**
Major Cloud Providers' Always-Free Limits · PaaS · IaaS · Web Hosting · Docker Related

**Dati**
Managed Data Services · BaaS · Storage and Media Processing · Artifact Repos

**Codice e CI/CD**
Source Code Repos · CI and CD · Code Quality · Code Search and Browsing · Package Build System

**Automazione e scheduling**
(distribuito tra CI/CD, Miscellaneous, e BaaS — non esiste una sezione "Cron" dedicata; i servizi di scheduling sono sparsi)

**Rete e infrastruttura**
CDN and Protection · DNS · Tunneling, WebRTC, Web Socket Servers and Other Routers · Security and PKI

**Comunicazione**
Email · Messaging and Streaming · Tools for Teams and Collaboration · Forms

**Business e marketing**
Analytics, Events, and Statistics · Payment and Billing Integration · Translation Management · Visitor Session Recording · Commenting Platforms

**Sviluppo app**
APIs, Data and ML · Generative AI · IDE and Code Editing · Code Generation · Low-code Platform · Feature Toggles Management Platforms · Search · Testing · Mobile App Distribution and Feedback · Flutter Related and Building IOS Apps without Mac

**Altro**
CMS · Design and UI · Dev Blogging Sites · Domain · Education and Career Development · Font · IaaS · International Mobile Number Verification API and SDK · Issue Tracking and Project Management · Log Management · Management Systems · Miscellaneous · Monitoring · Privacy Management · Remote Desktop Tools · Screenshot APIs · Authentication, Authorization, and User Management · Other Free Resources · Crash and Exception Handling · Data Visualization on Maps

---

## 2. DEEP DIVE — Categorie rilevanti per la navicella

Le priorità operative sono quattro: oroboro/scheduler, backend always-on, storage/database, modulo business.

---

### A. Scheduler / Oroboro (buco aperto prioritario)

**Cloudflare Workers Cron Triggers**
URL: developers.cloudflare.com/workers/configuration/cron-triggers/
Free tier reale:
- 100.000 request/giorno totali (Workers)
- 3–5 cron trigger per Worker [DA VERIFICARE: fonti divergono su 3 vs 5]
- Granularità minima: 1 minuto
- 10ms CPU per invocazione sul free tier (ok per HTTP call, non per calcolo pesante)
- Zero costo, nessuna carta di credito
Uso per la navicella: un Worker in cron ogni N minuti che manda un HTTP POST a un endpoint — sveglia un processo dormiente, logga uno snapshot, o triggera una GitHub Action. Non serve nessun server.
Limite reale: 10ms CPU. Non può eseguire logica pesante inline, solo trigger. È uno svegliatore, non un motore.

**cron-job.org**
URL: cron-job.org
Free tier reale:
- Illimitato: job illimitati, frequenza fino a 1 minuto
- Manda HTTP request (GET/POST) a un URL sul schedule
- Nessun account a pagamento, nessuna carta di credito
- Storico esecuzioni e notifiche di fallimento inclusi
Uso per la navicella: il caso d'uso più diretto per l'oroboro. Configuri un job che ogni X minuti pinga un endpoint della navicella (es. un Cloudflare Worker, o un endpoint su Render). Zero infrastruttura.
Limite reale: è solo un HTTP pinger — non esegue codice, non gestisce output, non può fare retry intelligente.

**GitHub Actions (cron scheduler)**
URL: docs.github.com/en/actions
Free tier reale:
- Repository pubbliche: minuti illimitati, gratis
- Repository private: 2.000 minuti Linux/mese (free plan)
- Granularità cron: 5 minuti minimo in pratica (1 minuto in sintassi ma GH può schedulare con ritardo)
- Avvertenza documentata: su repository poco attive, GitHub può ritardare o saltare i job cron schedulati
Uso per la navicella: già usiamo GitHub per i quiz. Si può aggiungere un workflow `.github/workflows/oroboro.yml` con schedule cron che esegue uno script Python — es. genera uno snapshot, aggiorna un file, invia una richiesta. Per repo pubblica è completamente gratis e senza limite di minuti.
Limite reale: puntualità non garantita. Non usarlo come clock critico (es. alert reale-time). Usarlo per task periodici tolleranti a qualche minuto di ritardo.

---

### B. Hosting / Backend always-on (alternativa a Hetzner CAX11)

**Oracle Cloud Always Free**
URL: oracle.com/cloud/free/
Free tier reale (stato luglio 2026):
- ARM VM: **2 OCPU + 12 GB RAM** (ridotto da 4 OCPU/24 GB il 15 giugno 2026, senza comunicazione pubblica)
- 2 VM x86 AMD (1/8 OCPU, 1 GB RAM ciascuna)
- 200 GB block storage totale
- 10 TB egress/mese
- Permanente, senza scadenza
Uso per la navicella: un VM ARM always-on che gira n8n self-hosted, o un backend Python leggero, o un'istanza Redis. Era la proposta più appetibile. Resta la più generosa tra i free tier VPS.
TRAPPOLA: Oracle ha dimezzato silenziosamente i limiti il 15/06/2026 senza blog post né notifiche. Nessun SLA, nessuna garanzia di stabilità futura del free tier. Non trattarlo come backbone critico; usarlo come layer sperimentale o backup.

**Render (Web Services)**
URL: render.com
Free tier reale:
- 512 MB RAM, shared CPU
- 750 ore istanza/mese per workspace
- Spin-down dopo **15 minuti di inattività** (cold start ~60 secondi)
- Custom domains inclusi
Uso per la navicella: deployare un endpoint Python/Node. Con cron-job.org che pinga ogni 14 minuti, resta sveglio. È un hack, non una soluzione pulita.
TRAPPOLA: 750 ore/mese = ~31 giorni a ~24h. Se si tiene sveglio con pinging, le ore si consumano. Per always-on vero serve il piano Starter a $7/mese.

**Railway**
Free tier reale: $1/mese di credito. Con un servizio base, dura qualche giorno al mese. Non è un'opzione per always-on gratuito.

**Fly.io**
Free tier: eliminato nel 2024. Non disponibile.

**Koyeb**
Free tier reale (luglio 2026): solo database Postgres free. Il compute (web service) non ha più tier gratuito. Non utilizzabile per backend always-on.

**Verdetto hosting**: nessuna alternativa gratis batte Hetzner CAX11 (~6€/mese) in affidabilità. Oracle Cloud è l'unica opzione truly-free per always-on, ma con rischio-provider concreto e documentato. Per la navicella: Oracle Cloud come ambiente sperimentale; Hetzner come backbone se il progetto esiste-autonoma viene ratificato.

---

### C. Storage e Database

**Cloudflare R2 (Object Storage)**
URL: developers.cloudflare.com/r2/
Free tier reale:
- 10 GB storage/mese
- 1.000.000 Class A operations/mese (write)
- 10.000.000 Class B operations/mese (read)
- **Zero egress** (nessun costo per bandwidth in uscita, mai)
- S3-compatible API
- Nessuna scadenza del free tier
Uso per la navicella: archiviare snapshot di memoria, quiz HTML, PDF estratti, asset statici. Con zero egress è pratico anche per servire file direttamente. Compatibile con AWS SDK (drop-in replacement S3).
Limite: 10 GB coprono parecchio per la navicella nella fase attuale.

**Cloudflare D1 (Database SQLite)**
URL: developers.cloudflare.com/d1/
Free tier reale:
- 5 GB storage
- 5.000.000 righe lette/giorno
- 100.000 righe scritte/giorno
Uso per la navicella: dati strutturati leggeri — log di sessioni, indici di quiz, metadati. Integrato con Workers, query SQL standard.
Limite: SQLite, non Postgres. Per query complesse o JOIN pesanti è meno flessibile.

**Neon (Serverless Postgres)**
URL: neon.com
Free tier reale:
- 1 progetto, 0.5 GB storage
- 100 CU-hours/mese (100 ore compute a 0.25 CU = 1 vCPU + 4 GB RAM)
- Scale-to-zero automatico
- Branching illimitato nei limiti di compute
- 6-hour history per point-in-time restore
Uso per la navicella: Postgres reale per dati strutturati. I 100 CU-hours sono sufficienti per un uso sporadico (non always-on).
Limite: 0.5 GB storage è stretto per corpora di testo denso. E scale-to-zero aggiunge cold start.

**Supabase**
Free tier reale:
- 500 MB database, 1 GB file storage
- 50.000 MAU auth
- 2 progetti attivi
- TRAPPOLA CRITICA: i progetti vengono **messi in pausa automaticamente dopo 1 settimana senza richieste API**. Il dato è conservato ma il progetto va offline finché non lo riattivi manualmente.
Uso per la navicella: sconsigliato come layer dati primario per qualsiasi cosa that needs to stay alive. Utile solo come backend BaaS di supporto (auth, storage) se si mantiene attivo artificialmente.

**Google Cloud Firestore**
Free tier reale:
- 1 GB storage
- 50.000 reads/giorno, 20.000 writes/giorno, 20.000 deletes/giorno
- Permanente (non scade dopo 12 mesi a differenza di altri servizi GCP)
Uso per la navicella: NoSQL, buono per dati flessibili (profili, log eventi). Sempre-on senza pausa automatica.

**AWS DynamoDB**
Free tier reale: 25 GB storage, 25 WCU + 25 RCU. Permanente.
Note: più complesso da usare rispetto a Firestore per il modello di accesso.

---

### D. Email (Modulo Business)

**Brevo (ex Sendinblue)**
URL: brevo.com
Free tier reale:
- 300 email/giorno (9.000/mese) — permanente, senza scadenza
- Contatti illimitati
- API completa inclusa
- Transactional email + marketing automation base
Uso per la navicella / business: notifiche, distribuzione materiali, newsletter. 300/giorno copre la fase attuale del modulo business ampiamente.

**Resend**
URL: resend.com
Free tier reale: 3.000 email/mese (100/giorno), 1 dominio custom. Developer-focused, ottima DX, integrazione React Email.
Uso: per invii transazionali via API in contesti web/app.

**Mailtrap**
Free tier: 4.000 email/mese. Buono per dev/test.

**SendGrid**: free tier eliminato il 27 maggio 2025. Non disponibile.

---

### E. Web Hosting Statico

**GitHub Pages** — già in uso per quiz (una repo per corso). Semplicissimo, zero config.

**Cloudflare Pages**
Free tier reale:
- Bandwidth illimitata (nessun cap)
- 500 build/mese, 1 build concorrente
- CDN globale su 300+ edge locations
- Custom domains inclusi con HTTPS automatico
Uso per la navicella: upgrade naturale di GitHub Pages quando serve più CDN, bandwidth maggiore, o preview deployments per branch. Identica esperienza di push-to-deploy. La navicella non ha ancora un bisogno urgente di migrare, ma CF Pages è il next step naturale.

**Vercel**
Free tier: 1M edge requests/mese, 100 GB bandwidth, unlimited deployments.
Note: ottimo se la navicella sviluppa un'interfaccia Next.js. Per HTML statico, Cloudflare Pages è più semplice.

**Netlify**
Free tier: 100 GB bandwidth, 300 min build, 125K function invocations/mese.
Note: utile per le form submissions native (senza backend) e per Functions semplici.

---

### F. Workflow Automation

**Cloudflare Workers**
(già nella sezione scheduler) — è il layer di automation più potente nel free tier: 100K req/day, cron, KV, D1, R2, code eseguito sul edge.

**Make.com**
Free tier: 1.000 operazioni/mese, 2 scenari attivi, intervallo minimo 15 minuti.
Uso: ok per automazioni semplici e sporadiche. 15-min minimum è un limite serio per l'oroboro.

**Pipedream**
Free tier: 100 credits/mese, 3 workflow attivi.
Uso: troppo limitato per uso continuativo. I credit si esauriscono in pochi giorni se il workflow gira frequentemente.

**n8n self-hosted (Community Edition)**
Free tier: illimitato — nessun cap su esecuzioni, workflow, integrazioni.
Richiede: un server su cui girare (Oracle Cloud Free, o locale).
Uso per la navicella: il più potente dei tre se si ha un server. Può orchestrare l'intero modulo business (email, scheduling, trasformazioni dati) senza limiti.

---

### G. Tunneling (per esporre servizi locali)

**Cloudflare Tunnel**
Free tier: gratuito, tunnel persistente con dominio personalizzato, nessun server esposto direttamente.
Richiede: dominio su Cloudflare DNS + installazione cloudflared.
Uso per la navicella: esporre il PC di Giuseppe come backend temporaneo senza aprire porte. Utile per test e demo dell'interfaccia mobile.

**localtunnel / localhost.run**
Gratis, zero config, zero account. URL temporanei. Solo per sviluppo/test.

---

### H. Monitoring / Uptime

**UptimeRobot**
Free tier: 50 monitor [DA VERIFICARE: alcune fonti luglio 2026 citano una riduzione a 10 — verificare su uptimerobot.com], check ogni 5 minuti.
Uso per la navicella: monitorare uptime dei servizi deployati + pingare Render ogni 5 minuti per tenerlo sveglio (con il workaround sopra). Note: i ToS dicono che il free plan è solo per uso personale non-commerciale.

**BetterStack (Better Uptime)**
Free tier: 10 monitor, check ogni 3 minuti.

---

### I. CDN e DNS

**Cloudflare (DNS + CDN)**
Free tier DNS e CDN: illimitato, incluso nel free plan. Già il miglior provider DNS gratuito in assoluto, con protezione DDoS e caching inclusi.

---

## 3. CLASSIFICAZIONE — Da incorporare, dal più al meno prezioso

### #1 — Cloudflare Workers + Cron Triggers (PRIORITÀ MASSIMA)
Risolve il buco aperto: l'oroboro. Un Worker in cron pinga un endpoint, triggera uno script, o esegue logica leggera. Non serve nessun server, nessuna carta di credito, zero costo permanente. Il free tier è robusto (100K req/day). Il limite 10ms CPU è reale ma gestibile (il Worker fa trigger, non compute).
**Azione**: creare un account Cloudflare (se non esiste), deployer un Worker minimale con cron trigger che pinga il sistema.

### #2 — cron-job.org (PRIORITÀ ALTA, complementare a #1)
Il più semplice scheduler HTTP in assoluto. Zero infrastruttura. Per pingare Render, svegliare un endpoint, o tenere vivo qualsiasi servizio. Complementare a Cloudflare Workers: dove Workers fa logica, cron-job.org fa pure ping.
**Azione**: registrare un account (gratuito), configurare un job che pinga i servizi della navicella.

### #3 — Cloudflare R2 (PRIORITÀ ALTA)
Zero egress + 10GB + S3-compat. Naturale come storage per snapshot della navicella, quiz HTML, PDF. Se si usa già Cloudflare per DNS/Pages, R2 è nel medesimo account. Non c'è nulla di comparabile nel free tier.
**Azione**: creare un bucket R2, spostare lì gli asset statici pesanti.

### #4 — Cloudflare D1 (PRIORITÀ MEDIA-ALTA)
5GB SQLite gratuito, integrato con Workers. Per dati strutturati leggeri (indici quiz, log, metadati sessioni). Non Postgres, ma SQL standard. Se la navicella sviluppa una interfaccia con stato, D1 è il database naturale nell'ecosistema CF.

### #5 — Brevo per email (PRIORITÀ MEDIA — modulo business)
300 email/giorno permanente. Il modulo business ha obiettivo ~100€/mese vendendo materiali. Brevo copre la distribuzione via email senza costi. Il passo dopo il free tier (300→1000/giorno) costa ~9€/mese — comparabile all'abbonamento Max come investimento.
**Azione**: creare account Brevo, configurare dominio mittente.

### #6 — GitHub Actions come runner periodico (PRIORITÀ MEDIA)
Già in uso l'infrastruttura GitHub. Aggiungere workflow cron per task periodici (es. build quiz, aggiornamento snapshot, push a Pages) è costo zero per repo pubbliche. Compatibile con script Python già scritti.
CAVEAT: non affidabile per scheduling critico (ritardi possibili). Usare per task tolleranti.
**Azione**: nessuna infrastruttura aggiuntiva. Solo scrivere un `.github/workflows/oroboro.yml`.

### #7 — Cloudflare Pages (PRIORITÀ BASSA — upgrade futuro)
Non urgente (GitHub Pages funziona). Ma bandwidth illimitata e CDN globale sono il next step naturale quando i quiz si moltiplicano o serve preview per branch. Migrazione è un pomeriggio.

### #8 — Oracle Cloud Always Free VM (PRIORITÀ BASSA — con riserva)
2 OCPU/12GB ARM è ancora generoso. Ma il comportamento di Oracle in giugno 2026 (dimezza i limiti senza comunicarlo) è un segnale di rischio-provider. Trattare come sandbox/sperimentazione, non come backbone dell'oroboro. Se il progetto esiste-autonoma viene ratificato, Hetzner resta la scelta produzione.

### #9 — Neon Postgres (PRIORITÀ BASSA — per esigenze Postgres specifiche)
100 CU-hours/mese, 0.5GB. Utile se emerge una necessità di Postgres reale (relazioni complesse, migrazioni). Per ora D1 o Firestore coprono.

### #10 — n8n self-hosted su Oracle (PRIORITÀ BASSA — dipende da #8)
Se Oracle VM viene attivata, n8n self-hosted è gratis e illimitato. È la soluzione di automation più potente possibile. Ma dipende dall'avere un server affidabile.

---

## TRAPPOLE — Servizi da NON usare o usare con attenzione

| Servizio | Problema |
|---|---|
| **Supabase** | Pausa automatica dopo 1 settimana inattività. FATALE per any-always-on. |
| **Fly.io** | Free tier eliminato nel 2024. Non esiste. |
| **Railway** | $1/mese credito non copre always-on. |
| **SendGrid** | Free tier eliminato maggio 2025. |
| **Render gratuito** | Spin-down 15 min. Per always-on serve $7/mese. |
| **Oracle Cloud** | Rischio provider: ha dimezzato silenziosamente i limiti (4→2 OCPU) giugno 2026. |
| **GitHub Actions cron** | Ritardi possibili su repo poco attive. Non usare per scheduling critico. |
| **Make.com free** | 15-min minimum, 2 scenari. Troppo limitato per oroboro. |
| **Pipedream free** | 100 credits/mese, 3 workflow. Si esaurisce rapidamente. |
| **UptimeRobot free** | ToS: solo uso personale non-commerciale. Limite monitor [DA VERIFICARE luglio 2026]. |

---

## NOTE FONTI

Dati triangolati su ≥2 fonti indipendenti per ogni claim sostanziale.
Voci marcate [DA VERIFICARE] richiedono conferma diretta sul sito del provider prima di fare affidamento.

Fonti principali:
- github.com/ripienaar/free-for-dev (README master, luglio 2026)
- developers.cloudflare.com (Workers, R2, D1, Pages — documentazione ufficiale)
- infoq.com/news/2026/07/oracle-cloud-free-tier-limits/ (riduzione Oracle giugno 2026)
- uptimerobot.com (free tier attuale — DA VERIFICARE direttamente)
- neon.com/pricing (documentazione ufficiale)
- supabase.com/pricing (documentazione ufficiale)
- brevo.com (piano free)
- resend.com (piano free)
- cron-job.org (documentazione free plan)

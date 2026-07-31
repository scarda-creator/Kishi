---
type: ricerca
---

# Esistenza autonoma della navicella — scouting tecnologico

> Ricerca Argonauta, 2026-07-06. Brief di Dedalo (Architetto).
> Oggetto: come dare alla navicella un "cuore" always-on, indipendente dal PC di Giuseppe acceso.
> Fonti accedute: 2026-07-06.

---

## Quadro

Il problema si sdoppia in due assi ortogonali. Asse 1: la **memoria** (i file .md) deve
vivere in cloud, non solo sul disco locale. Asse 2: i **processi** (agenti) devono poter
girare senza il laptop acceso. I due assi si risolvono con strumenti diversi — confonderli
porta a sovra-ingegnerizzare il primo pensando di risolvere il secondo.

---

## Fronte 1 — Host always-on: costi reali (luglio 2026)

### Hetzner Cloud CAX11
**Spec:** 2 vCPU ARM (Ampere Altra), 4 GB RAM, 40 GB SSD, 20 TB traffico incluso.
**Prezzo:** €5.99/mese dopo l'adeguamento tariffario del 15 giugno 2026 (era €3.29 fino ad
aprile, poi €4.49 fino a giugno).
**Disponibilità:** solo Germania e Finlandia.
**Setup:** ~1-2 ore per un VPS Linux base con Docker. Manutenzione bassa.
**Affidabilità:** datacenter Hetzner, uptime storico >99.9%. GDPR tedesco.
**Fonte:** [Hetzner Price Adjustment 15 June 2026](https://docs.hetzner.com/general/infrastructure-and-availability/price-adjustment/)
| [CAX11 spec — Spare Cores](https://sparecores.com/server/hcloud/cax11)

### Fly.io
**Prezzo:** ~$2-5/mese per il minimo always-on (shared-cpu-1x, 256 MB RAM).
**Nessun free tier dal 2026** — trial limitato a 2 ore VM o 7 giorni.
**Gotcha:** costi nascosti da IPv4, bandwidth, volumi; bill reali 2-4x del previsto.
**Fonte:** [Fly.io Free Tier 2026](https://www.saaspricepulse.com/tools/flyio)

### Railway / Render
**Railway:** ~$10-15/mese per web service + database. Setup più semplice di Fly.io, ma
nessun free tier. La comodità ha un costo.
**Render:** $7/mese Starter (always-on, no sleep). Per un servizio singolo è competitivo,
ma si moltiplica per ogni componente aggiunto.
**Fonte:** [Railway vs Render vs Fly.io 2026 — devtoolpicks](https://devtoolpicks.com/blog/railway-vs-render-vs-fly-io-solo-developers-2026)

### Raspberry Pi 5 (home server)
**Costo hardware:** €60-100 una tantum (Pi 5 + alimentatore + scheda SD).
**Elettricità:** ~3W idle → ~€7-8/anno (~€0.60-0.70/mese).
**Accesso remoto:** Cloudflare Tunnel (gratuito) — tunnel outbound cifrato, nessun port
forwarding, nessun IP statico necessario, funziona anche dietro CGNAT. Installazione
~1 ora, servizio systemd permanente.
**Pro:** privacy assoluta (dati non lasciano casa), costo operativo quasi zero.
**Contro:** dipende da connessione internet domestica e alimentazione elettrica; in caso
di blackout o cambio provider il cuore cade.
**Fonte:** [Cloudflare Tunnel Raspberry Pi — raspberry.tips](https://raspberry.tips/en/raspberrypi-einsteiger/raspberry-pi-cloudflare-tunnel-en)
| [Raspberry Pi Power Consumption 2026](https://raspberry.tips/en/raspberrypi-tutorials/raspberry-pi-power-consumption-update-2026-all-models-compared)

---

## Fronte 2 — Connettività mobile: come una PWA parla al cuore e sincronizza i .md

Architettura standard verificata da più implementazioni:

```
PWA mobile (browser)
  ├── Service Worker → cache locale + offline
  ├── IndexedDB → storage .md in locale (offline-first)
  └── Background Sync API → quando torna la connessione, POST al backend

Backend (cuore always-on)
  └── REST API (es. FastAPI Python) → legge/scrive file .md su disco cifrato
```

La PWA accede al cuore via HTTPS, usa JWT per autenticazione. Le modifiche offline
vengono accodate nel Service Worker e flushate al ritorno della connessione.
Il backend è un processo leggero (FastAPI su Raspberry Pi o VPS): serve i file .md come
risorse, accetta PUT/PATCH per aggiornamenti, mantiene log di versione.

**Fonte:** [PWA Offline Caching: Service Workers with Python Backend Sync](https://johal.in/pwa-offline-caching-service-workers-with-python-backend-sync-for-mobile-like-experiences/)
| [Building a PWA with Service Workers, IndexedDB, and a REST API — Medium](https://rabmcmenemy.medium.com/building-a-progressive-web-app-pwa-with-service-workers-indexeddb-and-a-rest-api-4f93310711bc)

---

## Fronte 3 — Sicurezza e privacy dei dati L5

I file di memoria psicologica (L5/psicologica/) sono i più sensibili. Requisiti minimi:

**In transito:** TLS obbligatorio. Con Cloudflare Tunnel è automatico (Cloudflare termina
TLS). Con VPS basta Let's Encrypt (gratuito, autorinnovato via certbot).

**At rest:** cifratura a livello applicativo prima dello storage. Opzione minima: i file .md
sensibili vengono cifrati con AES-256 dalla chiave derivata dalla passphrase di Giuseppe
prima di essere scritti su disco. Nemmeno l'host (Hetzner) può leggerli. Opzione più
semplice ma meno granulare: LUKS full-disk encryption sul VPS.

**Auth:** JWT con scadenza breve (es. 1 ora), refresh token su HTTPS-only cookie. Solo
Giuseppe ha le credenziali. FastAPI + python-jose copre questo stack senza dipendenze
esterne.
**Fonte:** [FastAPI JWT Authentication — testdriven.io](https://testdriven.io/blog/fastapi-jwt-auth/)
| [VPS Hardening Guide 2026 — DoHost](https://dohost.us/index.php/2026/07/02/the-essential-vps-hardening-guide-protecting-your-data-in-2026/)

**Distinzione critica per il profilo di Giuseppe:**
- **GitHub privato (repo):** dati visibili a Microsoft/GitHub. Non è zero-knowledge. Per
  L3-L4 è accettabile (nessuna informazione identificante ad alto rischio). Per L5
  psicologico è un rischio reale che va nominato, non ignorato.
- **VPS Hetzner cifrato:** dati in Germania (GDPR), cifrati → Hetzner non può leggere.
  Accettabile per L5 se cifratura at-rest è applicata correttamente.
- **Raspberry Pi a casa:** zero terze parti, privacy assoluta. Il rischio è la robustezza
  operativa (vedi fronte 1).

---

## Fronte 4 — Oroboro: finding critico

**Claude Code Routines** (Anthropic, research preview dal 14 aprile 2026):
agenti Claude Code che girano su infrastruttura Anthropic cloud su schedule (oraria,
giornaliera, settimanale, cron personalizzato), trigger via API o GitHub webhook. Il
laptop può essere completamente spento. Accedono a repo GitHub privati via Personal
Access Token (secret Kubernetes). Possono leggere e scrivere file nel repo e committare
i risultati.

Questo **risolve direttamente il fallimento dell'oroboro del 2026-07-02** (log:
"trigger cloud non raggiungono la sessione locale"). La Routine gira su infrastruttura
Anthropic, non su sessione locale.

**Requisiti per usarlo:**
1. File di memoria navicella migrati su un repo GitHub privato (oggi vivono su disco
   locale `C:\Users\ACER\Desktop\AgentsAI\`).
2. Piano Claude Pro/Max/Team/Enterprise (il free tier non include le Routines).
3. Configurazione della Routine: prompt oroboro + repo target + schedule notturno.

**Limite:** le Routines non forniscono un endpoint REST per una PWA mobile. Risolvono
il problema "agente che gira di notte senza laptop", non il problema "client mobile che
legge la memoria da ovunque". Sono due problemi separati.

**Fonte:** [Run Claude Code Agents on a Schedule in the Cloud — dev.to](https://dev.to/oscdev/run-claude-code-agents-on-a-schedule-in-the-cloud-2lcl)
| [Claude Code Routines — pasqualepillitteri.it](https://pasqualepillitteri.it/en/news/851/claude-code-routines-cloud-automation-guide)
| [Automate work with routines — Claude Code Docs](https://code.claude.com/docs/en/web-scheduled-tasks)

---

## Fronte 5 — Trade-off e raccomandazione netta

### Matrice dei trade-off

| Opzione | Costo mensile | Oroboro | PWA mobile | Privacy L5 | Affidabilità | Setup |
|---|---|---|---|---|---|---|
| GitHub + Routines | €0 extra | Risolto | No (serve ancora backend) | Rischio (Microsoft) | Alta | Basso |
| Hetzner CAX11 | €5.99 | Risolto (cron+Claude API) | Sì | Alta (cifrato) | Alta | Medio |
| Raspberry Pi | €0.60+hw | Risolto (cron locale) | Sì | Massima | Media (dipende internet) | Medio-alto |
| Fly.io/Railway | $2-15 | Risolto | Sì | Media | Alta | Medio |

### Raccomandazione

**Primo passo questa settimana: migra AgentsAI su repo GitHub privato.**

È l'azione con il ROI più alto perché sblocca Claude Code Routines (oroboro) a costo zero
e in ~2 ore. Giuseppe usa già GitHub per i quiz (GitHub Pages). Il pattern è familiare.
La migrazione trasforma il filesystem locale in una memoria esternalizzata con versioning
git — vantaggio indipendente dall'oroboro.

Per i file L5 psicologici (contenuto più sensibile): tenerli in una sottocartella con
`.gitignore` locale e gestirli separatamente, oppure cifrarli con git-crypt prima del
push. Non caricare L5 in chiaro su GitHub.

**Secondo passo (quando si costruisce la PWA mobile): Hetzner CAX11 a €5.99/mese.**

Non il Raspberry Pi come secondo passo: il vantaggio di privacy del Pi non giustifica la
dipendenza da internet domestica e hardware fisico per l'unico studente-utente. Hetzner
Germania dà le stesse garanzie GDPR a €5.99/mese con uptime datacenter, e il setup è
automatizzabile. Il Pi torna in gioco solo se emerge una ragione forte di privacy (es.
l'idea di avere L5 su server non italiano/tedesco diventa inaccettabile).

**Cosa NON fare ora:** costruire subito un backend completo (FastAPI + VPS + PWA) prima
di aver risolto il problema più semplice e urgente (oroboro). L'ordine conta.

---

## Sintesi per Dedalo

Il "cuore" always-on si costruisce in due mosse sequenziali, non in una soluzione
monolitica. GitHub (memoria esternalizzata) + Claude Code Routines (processi autonomi)
è il minimo vitale, già disponibile, costo zero. Il VPS con REST API è il passo successivo
quando serve effettivamente un client mobile. Il Raspberry Pi è una terza via valida
solo se la privacy fisica diventa priorità esplicita.

La navicella oggi non ha "esistenza autonoma" perché i file sono locali e non ci sono
trigger cloud. GitHub + Routines risolve entrambi senza nuova infrastruttura.

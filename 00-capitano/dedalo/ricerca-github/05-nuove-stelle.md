---
type: ricerca
data: 2026-07-21
agente: Argonauta Personale
---

# Nuove stelle GitHub — ricognizione 2026-07-21

Metodo: API pubblica `GET /users/scarda-creator/starred?sort=created&direction=desc`,
confronto con catalogo `00-starred-repos.md` (36 repo, 2026-07-11) + `04-nuova-stella.md`
(2 repo, 2026-07-17). Totale noto al confronto: 38 repo.

**Stelle totali correnti: 43. Stelle nuove: 5. Repo sparite (unstar): 0.**
**Da schiudere: 0. Da tenere d'occhio: 3. Ornamentali: 2.**
**La più interessante: canopyai/Orpheus-TTS — TTS locale senza GPU, completa
il pipeline voce già parzialmente presente con `claude-call` (STT). Nessun
cantiere aperto lo richiede ora, ma quando la voce si aprirà è la prima
referenza da leggere.**

---

## Nuove stelle identificate (in ordine dalla più recente alla meno)

---

### 1. ripienaar/free-for-dev
**URL:** https://github.com/ripienaar/free-for-dev
**Linguaggio:** HTML | **Stelle:** 130.000 | **Ultimo push:** 2026-07-20
**Stato:** attivissimo — 7.155 commit, aggiornato ieri.

**Cos'è.** Lista curata di servizi SaaS/PaaS/IaaS con tier gratuito rilevanti
per sviluppatori. Copre cloud, storage, database, CI/CD, monitoring, auth, CDN,
e-mail transazionale.

**A cosa servirebbe.** Nessun cantiere aperto ne ha bisogno come codice. Come
reference è utile per la scelta di infra della navicella (es. database gratuito
per la plancia, storage per le sessioni, email per Ermete). Giuseppe l'ha stellata
probabilmente come "consulta qui prima di pagare qualcosa."

**Verdetto:** `da tenere d'occhio` (reference infra, non codice).

---

### 2. canopyai/Orpheus-TTS
**URL:** https://github.com/canopyai/Orpheus-TTS
**Linguaggio:** Python | **Stelle:** 6.251 | **Ultimo push:** 2025-12-05
**Stato:** sviluppo rallentato (ultimi aggiornamenti aprile-maggio 2025), 91 commit.

**Cos'è.** Sistema TTS open-source costruito su backbone Llama-3b. Caratteristiche
rilevanti: può girare localmente senza GPU via llama.cpp, latenza streaming ~200ms,
controllo emozione/intonazione via tag (`<laugh>`, `<sigh>`), zero-shot voice cloning.
Sette lingue nella versione multilingua.

**A cosa servirebbe.** Cantiere (b) plancia / interfaccia voce. `caiovicentino/claude-call`
(già in catalogo, classificata MARGINALE) risolve la metà STT (whisper locale) +
loop di conversazione col terminale. Orpheus-TTS risolverebbe la metà TTS —
la voce che risponde. La combo farebbe un pipeline voce completo senza API a pagamento.
La rilevanza si aggancia al feedback "output pronunciabile in modalità voce"
(MEMORY.md): Giuseppe usa già la voce in qualche misura.

Limite reale: il modello da 3B parametri richiede RAM sufficiente per llama.cpp;
su CPU pura la latenza aumenta. Da testare prima di costruirci sopra.

**Verdetto:** `da tenere d'occhio` — quando il cantiere voce si aprirà, questa
è la prima referenza TTS da leggere. Non è prioritario adesso.

---

### 3. coqui-ai/TTS
**URL:** https://github.com/coqui-ai/TTS
**Linguaggio:** Python | **Stelle:** 45.787 | **Ultimo push:** 2024-08-16
**Stato:** de facto abbandonato. L'organizzazione Coqui-AI ha chiuso a inizio 2024,
l'ultima versione significativa è dicembre 2023 (v0.22.0), nessuno sviluppo attivo.

**Cos'è.** Toolkit TTS deep learning maturo con molti modelli e lingue. Era il
riferimento del settore prima della chiusura.

**A cosa servirebbe.** In teoria lo stesso cantiere di Orpheus-TTS (pipeline voce).
In pratica: Orpheus-TTS è più recente, gira localmente con meno infrastruttura,
e il suo mantenitore è ancora presente. Coqui va usato solo se si cercano modelli
pre-addestrati specifici non disponibili altrove.

**Verdetto:** `ornamentale` — abbandonato; Orpheus-TTS lo sostituisce come referenza TTS.

---

### 4. abhinavssram/STT-deepgram-twillio
**URL:** https://github.com/abhinavssram/STT-deepgram-twillio
**Linguaggio:** JavaScript | **Stelle:** 1 | **Ultimo push:** 2024-07-22
**Stato:** progetto test personale, 8 commit totali, mai rilasciato.

**Cos'è.** Esperimento di integrazione Deepgram (STT) + Twilio (telefonia). Nessuna
funzionalità propria: è uno scaffold di test per verificare che le API dei due
servizi si parlino.

**A cosa servirebbe.** Niente. Nessun cantiere della navicella usa Twilio o
Deepgram. Stellata probabilmente come promemoria temporaneo durante esplorazione
del topic voce.

**Verdetto:** `ornamentale`.

---

### 5. HBAI-Ltd/Toonflow-app
**URL:** https://github.com/HBAI-Ltd/Toonflow-app
**Linguaggio:** TypeScript | **Stelle:** 11.838 | **Ultimo push:** 2026-07-09
**Stato:** attivo, v1.1.8 (giugno 2026), 20 release.

**Cos'è.** Strumento open-source, self-hostable, per convertire storie/script in
cortometraggi animati. Flusso: scriptwriting AI → storyboard → generazione video.
Stack: TypeScript, Express, SQLite, Electron (desktop) o Docker. Richiede API esterne
per LLM (OpenAI/Anthropic/DeepSeek) e per generazione video (Sora, ByteDance) —
quest'ultima è la parte costosa.

**A cosa servirebbe.** Cantiere (d) modulo business — pipeline contenuti video.
MEMORY.md descrive tre pipeline contenuti nel modulo business: quiz / clip-film / scifi.
Toonflow potrebbe essere il motore del filone "clip-film" o "scifi". Il limite è la
dipendenza da API di video generation (Sora ecc.) che non sono gratuite: contraddice
il constraint "a costo zero" del modulo business attuale.

Il modulo business è in pausa/ricerca, quindi il timing non è urgente.

**Verdetto:** `da tenere d'occhio` — candidato concreto per pipeline video del
modulo business, ma il costo delle API video generation va verificato prima di
aprire quel cantiere.

---

## Lettura del segnale

Le 5 nuove stelle disegnano un pattern: 3 su TTS/STT (Orpheus-TTS, coqui-ai/TTS,
STT-deepgram-twillio) + 1 produzione video (Toonflow) + 1 reference infra (free-for-dev).
Giuseppe ha esplorato il tema voce in un'unica sessione di ricerca, poi è tornato
al business e all'infra. Nessuna di queste repo accelera i cantieri aperti ora
(percorso-matematica, plancia, memoria). Segnale da tenere ma non da attivare.

---
type: ricerca
data: 2026-07-22
---

# Strumenti per la produzione di contenuti — findings

Argonauta Personale, 2026-07-22.
Tema: strumenti gratuiti per creare e distribuire contenuti nel modulo Business (Fase 0).

---

## Verdetto in cinque righe

**Catena minima consigliata:** quiz_video.py (già fatto) + faster-whisper per SRT + Pillow hardsub
nel frame_at esistente (zero dipendenze nuove) + google-api-python-client per upload automatico a
YouTube Shorts + YouTube Analytics API per chiudere il ciclo darwiniano.

**Pezzo mancante più grave:** l'upload automatico a YouTube non è scritto. Senza di esso ogni video
richiede la mano di Giuseppe, e il ciclo darwiniano non può girare in autonomia.

**Cosa non si può fare gratis:** distribuzione automatizzata su Instagram (richiede Meta Business
+ app review 2-4 settimane); analytics profondi su TikTok (retention, FYP impressions, completion
rate — non esposti via API, solo in TikTok Studio); voce italiana di alta qualità oltre Piper
(Kokoro Italian è Grade C: due voci sole, meno training data degli English Grade A).

---

## Stack già in casa — da non rimuovere

Lettura dei tre script in `03-business/produzione/` prima di ogni proposta.

| Libreria | Pipeline che la usa | Funzione |
|---|---|---|
| **Pillow** | tutte e tre | compositing frame, testo, alpha, overlay |
| **PyAV** | tutte e tre | encode h264, mux audio, decode video — niente ffmpeg |
| **matplotlib mathtext** | quiz_video.py | rendering LaTeX → PNG trasparente |
| **Piper** (it_IT-riccardo-x_low) | scifi_video.py | TTS locale, narrazione italiana |
| **yt-dlp** | clip_film.py | download sorgenti (dietro il cancello Ierofante) |
| **numpy** | clip_film.py, scifi_video.py | frame-diff scene detection, audio stretching |

Nessuna di queste va sostituita per moda. Le proposte sotto aggiungono solo ciò che manca.

---

## Fronte 1 — Video e montaggio programmatico

**Verdetto: già risolto. Non aggiungere nulla.**

Lo stack Pillow + PyAV + matplotlib copre la composizione frame-by-frame, le dissolvenze,
i timer, il testo, le formule LaTeX, la traccia audio e l'encode h264. Le pipeline lo dimostrano
in produzione.

**Alternativa esaminata e scartata: MoviePy.**
MoviePy (v2.x, attivo, ultimo commit maggio 2025) semplifica le concatenazioni ma introduce
imageio-ffmpeg (wrapper ffmpeg separato) come dipendenza obbligatoria. Aggiunge overhead senza
risolvere nulla che il trio Pillow+PyAV+matplotlib non risolva già. Non inserire.

**Unico gap reale:** le pipeline non generano ancora sottotitoli embedded. Questo appartiene al
Fronte 2.

---

## Fronte 2 — Voce e sottotitoli

### 2a. TTS in italiano

**Scelta: Piper (già in casa), non sostituire con Kokoro per l'italiano.**

Motivazione: Kokoro-82M ha due sole voci italiane (if_sara, im_nicola), entrambe Grade C nel
dataset di training — significa meno dati, qualità inferiore alle voci Grade A inglesi. Piper
it_IT-riccardo-x_low è già configurato in scifi_video.py, è RTF ~0.03 su CPU (80-100ms per clip
da 10s), pesa meno di 100 MB RAM. Per quiz_video.py, se si vuole aggiungere narrazione, si riusa
Piper: zero setup aggiuntivo.

**Kokoro-82M vale comunque una nota per il futuro:** RTF 0.47-0.51 su CPU (più lento di Piper),
pesa 327 MB, licenza Apache 2.0, vince la TTS Arena per le voci inglesi. Se il verticale si
espande all'inglese, Kokoro Grade A è la scelta migliore. Per l'italiano, oggi, Piper vince.

### 2b. Sottotitoli — il gap più rilevante

**Scelta: faster-whisper (pip install faster-whisper).**

Perché è la scelta:
- **Zero ffmpeg** — usa PyAV internamente, che è già installato.
- Velocità: 4x rispetto a openai-whisper su CPU, modello `small` gira a velocità vicina al
  real-time su un laptop moderno (modello ~244 MB).
- Output: segmenti con timestamp a livello di parola o di frase — input diretto per generare
  l'hardsub nel frame_at().
- Italiano supportato (script Latino, modello small è sufficiente).

**Come integrarlo senza nuove dipendenze per l'hardsub:**
Le pipeline usano già Pillow per testo overlay frame-by-frame. La tecnica è:
1. faster-whisper trascrive l'audio → lista di `(start, end, text)`.
2. La funzione `frame_at(t)` interroga la lista e chiama `_ctext()` (già presente) con il
   testo attivo al tempo `t`.
3. Nessun MoviePy, nessun ffmpeg, nessun ass2py. Il Pillow già presente brucia la caption.

**Alternativa esaminata: whisper.cpp.**
Binario C a zero dipendenze Python, output SRT diretto, velocissimo su CPU. Ma richiede
compilazione dal sorgente o un binario pre-compilato per Windows — attrito maggiore di
`pip install faster-whisper`. Scartato per la fase attuale; utile se la pipeline viene
spostata su un server Linux.

**Attrito di adozione:** `pip install faster-whisper`, ~244 MB per il modello small (scaricato
al primo run). Una funzione di 20 righe. Mezza giornata inclusa l'integrazione nel frame_at.

---

## Fronte 3 — Immagini e grafica

**Verdetto: già risolto per il bisogno attuale. Nessuna dipendenza da aggiungere.**

Pillow genera sfondi, gradienti, testo, badge e overlay — tutto ciò che serve per i formati
social 9:16. matplotlib genera LaTeX → PNG trasparente. Insieme coprono thumbnail, copertine
di serie, frame titolo.

**Gap onesto: immagini artistiche/fotorealistiche.**
Se il verticale richiedesse thumbnail fotorealistiche (sfondo generato, scene), servirebbero
modelli di diffusione. Su CPU senza GPU, Stable Diffusion richiederebbe 5-15 minuti per immagine
con modelli tiny (SDXL-Turbo, modello base ~2 GB). Non è una soluzione pratica in Fase 0.
La raccomandazione: usare sfondi geometrici programmatici (già in casa) e copertine con
tipografia forte — un limite che la fisica short-form non sente, perché la formula è il visual.

**svgwrite** (pip install svgwrite, libreria pura Python, attiva) è utile solo se si devono
consegnare thumbnail in formato vettoriale a piattaforme che lo richiedono. Per social media
(JPEG/PNG) Pillow è sufficiente. Non aggiungere adesso.

---

## Fronte 4 — Distribuzione e pubblicazione

Questo è il buco più grave nella catena. Nessuna delle tre pipeline tocca la pubblicazione.

### YouTube — il canale da automatizzare per primo

**Scelta: YouTube Data API v3 + google-api-python-client.**

Perché YouTube prima:
- API gratuita, 10.000 unità quota/giorno + bucket separato ~100 upload/giorno da giugno 2026.
- `pip install google-api-python-client google-auth-oauthlib`.
- OAuth2 setup una-tantum (genera token, salva in file, riusa). Nessun cost.
- YouTube Shorts = video verticale 9:16 < 60s con `#Shorts` nel titolo: zero configurazione
  speciale sul canale, viene trattato come Shorts automaticamente.
- Upload programmatico: `videos.insert()` con multipart upload. Libreria ufficiale Google,
  esempi Python ufficiali disponibili su github.com/youtube/api-samples.

**Attrito di adozione:** ~2h. Creare un Google Cloud Project, abilitare YouTube Data API v3,
generare credenziali OAuth, scrivere ~50 righe di Python. Il refresh token dura 6 mesi
(con riuso regolare, dura più a lungo).

**Limite reale:** i video caricati da account personali non vanno in review automatica,
ma Google può richiedere verifica dell'account per upload programmatico frequente su canali nuovi.
Iniziare con 1-3 upload/settimana riduce il rischio.

### TikTok — fattibile ma con frizione iniziale non trascurabile

**Stato:** Content Posting API gratuita, ma richiede app review manuale TikTok. Finché l'app
non è approvata (processo da giorni a settimane), **tutti i post vanno in privato** e solo 5
account/giorno possono autorizzare l'app. Nella Fase 0 questo è un blocco pratico.

**Raccomandazione:** posticipare l'automazione TikTok. Pubblicare manualmente da TikTok Studio
mentre si accumula contenuto; avviare il processo di review quando si è pronti a pubblicare
con cadenza regolare (almeno 3-5 video/settimana). Il 25 video/giorno non è un vincolo reale
per la Fase 0.

**Nota watermark (settembre 2025):** TikTok declassa i contenuti con watermark di altre
piattaforme. Se lo stesso video viene caricato su YouTube e TikTok, vanno serviti senza
watermark sovrapposto. La pipeline attuale non aggiunge watermark, quindi il problema non esiste.

### Instagram Reels — non automatizzabile in Fase 0

Richiede: account Instagram Business/Creator + Facebook Page collegata + Meta Developer app +
permesso `instagram_business_content_publish` approvato (review 2-4 settimane). La review
richiede dimostrare un caso d'uso business. Per uno studente di fisica che inizia: attrito
sproporzionato rispetto al guadagno. Instagram va tenuto per la mano umana finché il canale
non è abbastanza grande da giustificare il processo di review.

### I «no» espliciti su distribuzione

| Canale | Perché non si può automatizzare gratis in Fase 0 |
|---|---|
| **Instagram Reels** | Business account + Meta app review 2-4 settimane + Facebook Page: troppo attrito per una fase 0 |
| **TikTok (Fase 0)** | App review obbligatoria; finché non approvata, ogni post è privato. Mano umana più veloce |
| **Qualsiasi terzo servizio** (Buffer, Later ecc.) | I piani gratuiti non includono API access; i piani paganti partono da $15-18/mese |

---

## Fronte 5 — Misura

Il ciclo darwiniano del modulo Business seleziona i contenuti su numeri reali. Senza misura,
nessuna selezione è possibile.

**Scelta: YouTube Analytics API.**

- Gratis, incluso nella stessa Google Cloud quota del Data API v3.
- Endpoint `reports.query`: per video_id, restituisce views, watchTime, averageViewDuration,
  likes, shares, subscribersGained.
- Con una query giornaliera automatica (GitHub Action o cron-job.org + script Python), i dati
  di ogni video vengono salvati localmente in SQLite (o nel post-mortem.db già previsto in
  business-modello-v3.md).
- `google-api-python-client` già installato per l'upload: zero dipendenze aggiuntive.

**Come chiudere il ciclo darwiniano:**
1. Upload automatico → salva `video_id` + `spec.json` associata nella tabella `cadaveri`.
2. Job giornaliero legge `video_id` dalla tabella, chiama Analytics API, aggiorna `views`,
   `watch_time`, `completion_rate`.
3. Ermete (quando attivato) legge la tabella, confronta le spec (tipo domanda, lunghezza,
   format) con le performance → decide cosa produrre dopo.

**TikTok Analytics:** views e likes disponibili via API, ma non retention né FYP impressions
né completion rate. Per il ciclo darwiniano è parziale. Utile come segnale secondario se e
quando TikTok viene automatizzato.

**Strumenti self-hosted aggiuntivi:** non necessari. YouTube Analytics API è l'oracolo esterno
sufficiente per la Fase 0. Aggiungere Umami o Plausible ha senso solo se si aggiunge un sito
web con traffico misurabile (fuori dalla Fase 0).

---

## Catena minima end-to-end

Da un quiz (spec.json dalla banca-esercizi) a un contenuto pubblicabile e misurabile:

```
spec.json (da 02-accademico/*/banca-esercizi)
    ↓
quiz_video.py → out.mp4  (già funzionante)
    ↓
[opzionale] Piper narrazione → wav → faster-whisper → segmenti timestamp
    ↓
[opzionale] captions in frame_at() via Pillow (nessuna dipendenza nuova)
    ↓
google-api-python-client → YouTube Shorts upload  [DA SCRIVERE]
    ↓
salva video_id in post-mortem.db
    ↓
job giornaliero: YouTube Analytics API → aggiorna performance nel db
    ↓
Ermete legge db → decide prossima spec
```

**Dipendenze da installare, nell'ordine:**
1. `pip install faster-whisper` — per sottotitoli (opzionale ma consigliato: metà della resa social)
2. `pip install google-api-python-client google-auth-oauthlib` — per upload + analytics (obbligatorio per chiudere il ciclo)

Tutto il resto è già in casa.

---

## I «no» espliciti — riepilogo

| Bisogno | Perché non è automatizzabile gratis |
|---|---|
| Distribuzione Instagram | Richiede Business account + Meta app review; attrito sproporzionato in Fase 0 |
| TikTok da subito automatizzato | App review obbligatoria + post privati durante la review |
| Analytics TikTok profondi | Retention, FYP, completion rate: non esposti via API ufficiale |
| Voce italiana di alta qualità | Kokoro Grade C per l'italiano; Piper è meccanico ma già in casa; non esiste una terza opzione gratis con qualità documentata |
| Thumbnail fotorealistiche | Stable Diffusion su CPU richiede 5-15 min/immagine; non pratico in Fase 0 |
| Scheduling automatico della pubblicazione | YouTube Data API non supporta scheduled_publish_time; TikTok nemmeno |

---

## Note fonti

Dati triangolati su ≥2 fonti indipendenti per ogni claim sostanziale.

Fonti principali:
- huggingface.co/hexgrad/Kokoro-82M VOICES.md (voci italiane if_sara, im_nicola, grade C — verificato direttamente)
- localaimaster.com/blog/faster-whisper-guide (velocità CPU, dipendenza PyAV — non ffmpeg)
- deepwiki.com/SYSTRAN/faster-whisper/2-installation (conferma zero ffmpeg, usa PyAV)
- getphyllo.com/post/is-the-youtube-api-free-in-2026-quota-limits-costs (quota upload YouTube, giugno 2026)
- postproxy.dev/blog/youtube-upload-api-guide (upload Shorts, OAuth, limiti)
- sociavault.com/blog/tiktok-api-free-2026 (stato TikTok API 2026, costo app review)
- tokportal.com/learn/post-to-tiktok-via-api (post privati durante review TikTok)
- getphyllo.com/post/a-complete-guide-to-the-instagram-reels-api (requisiti Business account)
- developers.google.com/youtube/analytics (YouTube Analytics API, metriche disponibili)
- gigagpu.com/self-hosted-tts-comparison (Piper vs Kokoro qualità su CPU)
- contracollective.com/blog/kokoro-vs-piper-vs-xtts-local-text-to-speech-m5-max-2026 (RTF Piper 0.008, Kokoro 0.47-0.51)

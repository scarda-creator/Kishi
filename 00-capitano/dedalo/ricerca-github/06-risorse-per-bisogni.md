---
type: ricerca
---

# Risorse gratuite incrociate coi bisogni aperti della navicella

Ricognizione dell'Argonauta Personale, 2026-07-22, su richiesta di Giuseppe. **Trascritta da Dedalo**:
l'agente ha prodotto i findings ma non ha scritto il file — la regola della navicella dice che chi
produce output sostanziale lo persiste, quindi il salvataggio l'ho fatto io. I giudizi in *corsivo*
sono miei e si distinguono dai findings.

## Verdetto in cinque righe

**5 bisogni su 7** hanno una soluzione gratuita credibile. Il più urgente da accendere è il
**backup** (attrito 30 minuti, rischio alto se rimandato: la navicella vive su un disco solo).
Quello senza soluzione semplice è l'**hosting privato**: esiste solo con workaround tecnici, perché
i provider gratuiti vivono del traffico pubblico. Il **calcolo per la tesi** è coperto per la fase
attuale ($N \le 16$ non richiede nemmeno una GPU), ma i limiti di sessione dei notebook cloud
diventeranno un vincolo vero quando la tesi entrerà in produzione.

---

## 1 · Sincronizzazione dei progressi fra dispositivi

**Soluzione: GitHub Gist API.** Un Gist privato usato come archivio chiave-valore. L'app fa due
chiamate: una in lettura all'avvio, una in scrittura al salvataggio. Il token (scope `gist`) sta nel
`localStorage` di ogni dispositivo, inserito una volta sola. Zero server, gratuito per sempre.

- **Attrito:** ~50 righe di JavaScript in `percorso-app.html`. Un'ora.
- **Limite:** serve un token personale; è un segreto leggero, da non mettere in un URL pubblico.
- **Alternativa:** Cloudflare D1 (SQLite 5 GB) dietro un Worker — più robusto, mezza giornata di setup.
- **Scartati:** Supabase (sospende il progetto dopo una settimana di inattività), Firebase (account
  Google e regole non banali), Neon (sovradimensionato per un JSON di pochi KB).

*Mio giudizio: il Gist è la scelta giusta — è l'unica che non introduce un nuovo fornitore nella
vita della navicella. Da fare quando Giuseppe può generare il token: il codice senza token resta
inerte e non rompe nulla.*

## 2 · Calcolo numerico per la tesi

**Librerie.** **QuSpin** (Python, attivo) è la scelta d'ingresso: `pip install quspin`, pensata per
catene di spin, diagonalizzazione sparsa e Lanczos. **QuTiP 5** è complementare se la tesi tocca i
sistemi aperti (Lindblad, decoerenza). **XDiag** (C++/Julia, 2025) è più performante ma costa
l'apprendimento di un altro linguaggio: da valutare solo oltre $N=18$.

**Taglie reali.** $N=14$ → $16\,384$ stati, spettro completo in secondi su un portatile.
$N=16$ → $65\,536$, Lanczos in secondi, spettro completo in minuti. **Per questa fascia non serve
GPU.**

**Compute gratuito, per quando servirà.** Kaggle Notebooks (30 h GPU/settimana garantite, sessioni
9 h, senza carta di credito) è più affidabile di Google Colab (quota non garantita, disconnessione
dopo 90 minuti di inattività).

**Il «no» onesto:** per $N > 18$ con spettro completo, o per simulazioni lunghe, i tier gratuiti non
bastano. Serve HPC universitario. **Da verificare: l'accesso ai cluster tramite la convenzione
Sapienza-CINECA per studenti di triennale.** *Questa verifica vale più di tutto il resto della
sezione: se l'accesso esiste, cambia cosa è fattibile in tesi.*

## 3 · Esecuzione pianificata senza il PC acceso (l'oroboro)

**Soluzione: cron-job.org + GitHub Actions.** Il primo è un pinger HTTP gratuito e illimitato (fino
a un minuto di frequenza) ma non esegue codice; il secondo esegue Python sui runner GitHub (2000
minuti/mese sui repo privati, illimitato sui pubblici). Combinati: cron-job.org chiama l'API GitHub,
GitHub Actions esegue.

- **Attrito:** un file `.github/workflows/oroboro.yml` più un job su cron-job.org. Due-tre ore.
- **Limite noto:** i cron di GitHub Actions ritardano sui repo poco attivi — inadatti a scheduling
  critico al minuto.

## 4 · Voce: sintesi vocale locale su CPU

**Soluzione: Kokoro-82M.** 82 milioni di parametri, 327 MB di pesi, licenza Apache 2.0, italiano
nativo, più veloce del tempo reale su CPU. Primo posto sulla TTS Arena a gennaio 2026, davanti a
modelli dieci volte più grandi.

- **Contro Orpheus-TTS** (segnalato il 21 luglio): Orpheus è più espressivo (tag di risata, sospiro)
  ma pesa 3-5 GB di RAM. Per la narrazione su portatile **Kokoro vince**.
- **Contro Piper:** Piper è più leggero e a latenza minima, ma più sintetico.
- **Limite:** 54 voci fisse, nessun cloning nel tier libero. Non esiste «la voce di Giuseppe».

## 5 · Ricerca bibliografica per la tesi

**Triade: arXiv API + OpenAlex + Zotero.**

| strumento | chiave | a cosa serve |
|---|---|---|
| **arXiv API** | nessuna | la fonte primaria per quello che ti serve: `cond-mat.str-el`, `quant-ph`. 3 richieste/sec |
| **OpenAlex** | nessuna | reti di citazione: chi cita Deutsch 1991, chi cita Marinari. 100k richieste/giorno |
| **Semantic Scholar** | opzionale | impatto e «citato da»; complementare a OpenAlex |
| **Zotero** | account gratuito | raccolta con un clic, collezioni, esportazione BibTeX per LaTeX. 300 MB di storage |

**Da tenere d'occhio:** `openags/paper-search-mcp` — un server MCP che unifica arXiv, PubMed e
bioRxiv. *Candidato diretto come strumento dell'Argonauta nella fase tesi: gli darebbe ricerca
bibliografica vera invece della sola ricerca web.*

## 6 · Hosting privato — il «no»

**Non esiste** un equivalente privato e a configurazione zero di GitHub Pages. Il vincolo è
strutturale: i fornitori gratuiti monetizzano l'esistenza pubblica del sito.

Le vie possibili, tutte con attrito: Cloudflare Pages con un Worker che aggiunge autenticazione
Basic (password in chiaro nella variabile d'ambiente — accettabile per materiale di studio, **non**
per L5); Cloudflare Access con dominio proprio (più solido, richiede il dominio); self-hosting su
VM gratuita (più controllo, fornitore fragile).

*Mio giudizio: per il percorso-matematica il pubblico va bene ed è già così. Questo bisogno diventa
reale solo il giorno in cui si volesse pubblicare qualcosa di personale — e quel giorno la risposta
giusta probabilmente non è «renderlo privato», è «non pubblicarlo».*

## 7 · Backup cifrato fuori sede — il più urgente

**Soluzione: restic + Backblaze B2.** Restic cifra con AES-256-GCM **prima** che i dati lascino il
disco: sul remoto arriva solo testo cifrato, e la chiave resta locale. **Il vincolo su L5 è
rispettato per costruzione.** B2 dà 10 GB gratuiti; la navicella intera sta in poche centinaia di MB
e restic deduplica gli snapshot.

- **Attrito: 30 minuti.** Installare restic, creare l'account B2, `restic init`, primo backup, e uno
  script pianificato con l'Utilità di pianificazione di Windows.
- **Alternativa:** Cloudflare R2 (10 GB, nessun costo di egress) via backend S3.
- **Nessuna alternativa senza installare nulla:** la cifratura lato client deve girare sulla macchina.

*Mio giudizio: è la cosa da fare per prima, e non per la tesi — per il fatto che tre mesi di
navicella vivono su un disco solo di un portatile che quest'anno si è già spento da solo. Script
pronto in `00-capitano/scripts/backup-navicella.ps1`; mancano solo le credenziali B2, che sono di
Giuseppe.*

---

## Risorse già censite che vale la pena riconsiderare adesso

- **`ai4s-research/awesome-ai-for-science`** (era differita) — hub di aggiornamento con sezioni su
  fisica e sistemi quantistici. Da sfogliare prima di aprire il cantiere tesi.
- **`psi-oss/get-physics-done`** (era differita) — framework agentico per workflow di calcolo
  fisico. Non sostituisce QuSpin; interessa se si automatizzano le campagne di simulazione.
- **`openags/paper-search-mcp`** (nuova) — vedi bisogno 5.

## Estratto ragionato di free-for-dev

Dell'analisi del 19 luglio restano pertinenti solo: **Cloudflare R2** (backup, alternativa a B2),
**Cloudflare D1** (sync, alternativa al Gist), **cron-job.org** e **GitHub Actions** (scheduling).
Il resto della lista — email, analytics, CI/CD, hosting generico — non tocca i sette bisogni.
*La lezione da tenere: free-for-dev è enorme ma la sua utilità reale per noi si riduce a quattro
voci. Non serve rileggerla: serve tornarci quando nasce un bisogno nuovo e preciso.*

## I due «no» espliciti

| bisogno | perché non c'è una soluzione gratuita semplice |
|---|---|
| **hosting privato** | i fornitori gratuiti vivono del traffico pubblico; la privacy vera richiede un workaround o un server proprio |
| **calcolo illimitato** | sessioni a tempo e quote non garantite sui notebook gratuiti; oltre $N=18$ serve HPC universitario (verificare CINECA via Sapienza) |

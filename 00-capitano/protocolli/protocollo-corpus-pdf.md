---
type: spec
---

# Protocollo corpus-PDF — estrazione testo prima della lettura agentica

> Definisce come la navicella ingerisce un CORPUS di PDF (esami, dispense, slide)
> che un agente deve leggere/analizzare. Nato il 2026-07-05 dai fallimenti
> ripetuti dell'Argonauta sul corpus Geometria (~100 esami).

---

## Il problema — perché non si leggono i PDF direttamente

Il tool di lettura PDF degli agenti rende ogni pagina come **immagine**. Costo in
token enorme: ~12 PDF bastano a sfondare il contesto standard (errore "1M context
required · usage credits"). Non è un limite di credito da alzare: è il modo
sbagliato di far entrare il contenuto. Il testo di un esame pesa pochi KB; la sua
resa-immagine pesa megabyte-equivalenti di token.

## Il principio — sposta il costo FUORI dal contesto

Estrarre il testo dei PDF con un tool locale (nessun token LLM speso), scrivere
`.txt` leggeri su disco, e far leggere agli agenti quelli. Un corpus di 100 esami
passa da "impossibile" a ~150k token totali di puro testo: 2-3 passate leggere
invece di 9 che esplodono.

## La pipeline (ordine fisso)

1. **Estrazione** — il Capitano/Mnemosyne (ha Bash; gli agenti passivi no) esegue:
   ```
   python 00-capitano/scripts/pdf_estrai_testo.py <corso>/01-banca-dati <corso>/01-banca-dati/_txt
   ```
   Lo script (PyMuPDF): estrae il testo, preserva la struttura relativa, è
   **idempotente** (salta i file invariati via stamp `.sha1`), riconosce i
   **PDF-scansione** (testo sotto soglia) e li marca `[SCAN/OCR]` invece di
   scrivere file vuoti ingannevoli, e produce `_txt/manifest.md` con i conteggi
   e la lista scansioni.

2. **Dedup per contenuto** — se il corpus ha duplicati (copie "(1)", stesso file
   in cartelle diverse), Mnemosyne li elimina per **hash md5** del PDF, non per
   nome. Rappresentante preferito: la versione CON soluzione. Le coppie
   testo/soluzione dello stesso esame (hash diversi) le fonde l'agente in lettura.

3. **Lettura agentica batched** — Mnemosyne partiziona i `.txt` unici in passate
   dimensionate al contesto (regola pratica: ~40-50k token di lettura a passata) e
   dispatcha l'**Argonauta** (Read-only) a leggere SOLO i `.txt` della sua passata,
   scrivendo in un file dedicato `bNN.md` (file separati = niente race, passate
   parallelizzabili). Nessun agente legge mai PDF grezzi in massa.

4. **Fusione** — a passate concluse, Mnemosyne fonde i `bNN.md` nell'artefatto
   comprensivo (mappa-esercizi / banca-esercizi) e lo passa al Demiurgo.

## Divisione del lavoro (invariante)

- **Estrazione + dedup + batching + fusione = Capitano/Mnemosyne** (unico con Bash).
- **Lettura + catalogazione = Argonauta** (Read-only, mai sui PDF, solo sui `.txt`).

## Fallback scansioni

I file marcati `[SCAN/OCR]` nel manifest non hanno testo affidabile: richiedono
OCR o lettura manuale mirata. Vanno trattati fuori da questa pipeline, uno a uno,
non forzati dentro le passate.

## Artefatti persistenti

`_txt/` (specchio testuale), `_txt/manifest.md`, stamp `.sha1`,
`banca-esercizi/bNN.md`. Il `_txt/` è cache rigenerabile: se cancellato, lo script
lo ricostruisce. Non versionare `_txt/` nei mirror GitHub dei quiz.

Legato a [[protocollo-intake]] (cernita del grezzo dall'intake/) — questo
protocollo è il passo di preprocessing quando il grezzo è un corpus PDF pesante.

# Primo esercizio con Pilot (versione 2)

Test guidato di **25-30 minuti** per provare le tre modalità di Pilot.

## Prerequisito

In Claude (Cowork) la cartella `C:\Users\ACER\Desktop\AgentsAI` deve essere **collegata**. Se hai aperto la chat senza, collegala prima.

---

## Step 1 — Avvia il capitano

Nuova chat. Scrivi esattamente:

> Leggi `C:\Users\ACER\Desktop\AgentsAI\00-capitano\istruzioni-capitano.md` e `00-capitano\profilo-giuseppe.md`. Da ora segui quelle regole.

Atteso: `[Capitano] Navicella attiva. Moduli pronti: Pilot. Cosa ti serve?`

Se invece riassume il file → ripeti: "non riassumere, **segui** quelle istruzioni".

---

## Step 2 — Attiva Pilot in Modalità Operativa

> Attiva Pilot in modalità Operativa.

Atteso: `[Pilot · Operativa] Sono attivo. …`

### Sub-step 2a — Apri la nota di oggi

> Apri la nota di oggi.

Pilot legge `2026-06-06.md`, te la mostra, chiede se aggiungere.

### Sub-step 2b — Aggiungi qualcosa di reale

Pensa a una cosa vera che hai in mente adesso (anche una riga su Meccanica). Dilla:

> Aggiungi in "Appunti durante il giorno": *(la tua cosa)*

Pilot scrive nel file, conferma con `[Pilot · Operativa] Salvato in <path>.`

**Apri il file `.md` sul Desktop per verificare** che ci sia davvero.

---

## Step 3 — Modalità Quiz su Meccanica

> Passa a Modalità Quiz. Quiz su Meccanica, sezione lavoro ed energia, 8 domande, mix.

Atteso: `[Pilot · Quiz]` + prima domanda numerata (`Q1/8`).

### Cosa fare durante il quiz
- Una risposta per messaggio
- Per multiple choice basta la lettera (A/B/C/D)
- Per le aperte, rispondi a parole tue, niente di lungo
- Pilot dà feedback secco in 1 riga e va alla Q successiva

### A fine quiz
Pilot ti dà:
- Punteggio (es. 6/8)
- 3 punti deboli emersi
- Una proposta di prossimo passo

E salva due cose: la sessione in `quiz/2026-06-06-meccanica.md` + i punti deboli vanno in coda a `studio/meccanica.md`.

**Verifica:** apri `studio/meccanica.md` → la sezione "Punti deboli emersi" deve essere stata aggiornata.

---

## Step 4 — Test del confine

Chiedi qualcosa fuori dominio:

> Pilot, scrivimi una caption Instagram per il mio brand.

Atteso: `[Pilot → Capitano] Fuori dominio. Passo al capitano.`

Se invece risponde → il confine non funziona, dimmelo che lo sistemo.

---

## Step 5 — Modalità Riepilogo (test parziale)

Hai solo un giorno di note, quindi il riepilogo settimanale "vero" non si può ancora fare. Ma puoi testarne la struttura:

> Passa a Modalità Riepilogo. Fai un riepilogo solo di oggi 2026-06-06.

Atteso: `[Pilot · Riepilogo]` + analisi con le 7 sezioni (anche se brevi, vista la giornata sola).

Salva in `riepilogo-settimanale/` con nome diverso (es. `2026-06-06-test.md`) per non confonderlo coi futuri riepiloghi reali.

---

## A fine esercizio

Nella nota di oggi (sezione "Cosa è successo"), rispondi a queste domande:

1. Pilot ha capito subito la differenza tra le modalità?
2. Il quiz era al livello giusto (troppo facile / giusto / troppo difficile)?
3. I file sono stati salvati e aggiornati correttamente?
4. Cosa rifaresti diversamente nel design di Pilot?

Domani, in base alle risposte, decidi:
- Tarare meglio Pilot (es. taglio domande quiz, tono feedback)
- Aggiungere il modulo **Business** (BizOps)
- Aggiungere un secondo file studio (es. preparazione per Astrofisica al terzo anno)

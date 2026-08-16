---
type: inventario
corso: metodi-e-modelli
data: 2026-08-15
autore: run notturno (Mnemosyne)
fonte-conteggi: file su disco + estratti `_txt` verificati (pipeline corpus-PDF)
---

# Inventario fonti — Modelli e Metodi Matematici della Fisica

Scritto: **9 settembre 2026**, primo tentativo. 25 giorni all'appello alla data di questo
inventario.

Il corso ha **51 file sorgente** (48 prima dei tre scritti stanotte), più 62 file di
servizio — estratti `_txt` e `.sha1` della pipeline corpus-PDF, esclusi dal conteggio.
Non i 37 che risultavano dalla voce in coda. Il conteggio dei quiz in `stato-studente.md`
era invece sbagliato per davvero — vedi §6.

---

## 1. `01-banca-dati/` — la fonte di verità

### Esami scritti: 19 file, **18 appelli unici**

`Scritto 20241106 (1).pdf` è identico byte per byte a `Scritto 20241106.pdf`. Va cancellato
o lasciato con la consapevolezza che è un doppione — è già segnalato in `b01.md`.

| finestra | appelli | docenti | censita in |
|---|---:|---|---|
| giu 2023 – gen 2024 | 5 | Esposito / Riccioni, canale Pf-Z | `banca-esercizi/b01.md` |
| giu 2024 – nov 2024 | 4 | Caprini / Esposito, canale P-Z | `banca-esercizi/b01.md` |
| gen 2025 – feb 2026 | 9 | Caprini / Esposito (2026 senza firma) | `banca-esercizi/b02.md` ← **scritta stanotte** |

**Tutti e 18 hanno le soluzioni nello stesso PDF.** Verificato per marcatore: in ogni file
il testo degli esercizi occupa il 20-30% iniziale e il resto sono svolgimenti. Questo è il
fatto che rende la banca dati sufficiente (vedi §4).

Struttura invariata su tutti e 18: **4 esercizi, 30 punti**, esercizi 1-2 di analisi
complessa e 3-4 di analisi funzionale, su fogli protocollo separati (dichiarato in
copertina dal 09/2024).

### Eserciziari del docente: 5 file, 65 esercizi tutti risolti

| file | esercizi | pagine | contenuto |
|---|---:|---:|---|
| `Set 1 - Finite dimension.pdf` | 13 | 9 | spazi di Hilbert finito-dimensionali, matrici, proiettori, funzioni di matrice |
| `Set 2 - Infinite dimension.pdf` | 12 | 10 | $L^2$, operatori, autoaggiunzione, spettro, autofunzioni generalizzate |
| `Set 3 - Fourier analysis.pdf` | 8 | 10 | serie e trasformata di Fourier |
| `Set 4 - Differential equations.pdf` | 11 | 15 | ODE, Green, **calore, onde, separazione di variabili, Laplace, propagatori ritardati** |
| `More problems.pdf` | 21 | 11 | miscellanea: **6 PDE per separazione**, Gram-Schmidt, matrice non diagonalizzabile |

Autore: Angelo Esposito, cioè uno dei due docenti che scrivono i compiti. Censiti in
`banca-esercizi/b03-eserciziari.md`.

## 2. `02-libro-di-testo/` — testi di riferimento

| file | pagine | testo estratto | giudizio |
|---|---:|---:|---|
| `DISPENSE CALOGERO.pdf` | 335 | 752 KB | **usabile**, è il corpo teorico più esteso |
| `AnalisiComplessaBonciani.pdf` | 84 | 123 KB | usabile, copre bene il blocco 1-2 d'esame |
| `Note al 24042026 (1).pdf` | 55 | 110 KB | **le note del corso di Giuseppe, ma si fermano al 24 aprile** |
| `CALOGERO-161-Prima.pdf` | 269 | **6,6 KB** | **INUTILIZZABILE — PDF di sole immagini, l'OCR non ha estratto nulla** |
| `CALOGERO-161Seconda.pdf` | 243 | **6,0 KB** | **INUTILIZZABILE — stesso motivo** |

Due problemi da registrare.

**(a) 512 pagine cieche.** I due `CALOGERO-161` sono scansioni: 512 pagine complessive che
producono 12 KB di testo, cioè intestazioni e numeri di pagina. Nessun agente può leggerli.
Non è urgente — `DISPENSE CALOGERO` copre lo stesso autore in forma testuale — ma finché
restano lì gonfiano il conteggio dei file e simulano una copertura che non c'è.

**(b) Le note del corso sono monche.** `Note al 24042026` copre polinomi ortogonali
(Legendre, Laguerre, Hermite), Gram-Schmidt, operatori lineari, Pauli, diagonalizzazione,
proiettori, autoaggiunzione, Hilbert, distribuzioni, spettro discreto e continuo. Si
fermano lì. **Zero occorrenze di «calore», «Green», e due sole di «Fourier».** Sono le
note di due terzi di corso: la parte che alimenta l'esercizio 4 dell'esame di oggi non c'è.

## 3. `03-note-mie/` — materiale prodotto dalla navicella

| file | pagine | cosa è |
|---|---:|---|
| `libro_metodi.tex/pdf` | 54 | manuale in 21 capitoli, con `.tex` sorgente |
| `formulario.tex/pdf` | 5 | formulario da stampare fronte-retro, con `.tex` sorgente |
| `DOVE-VIVE-IL-QUIZ.md` | — | puntatore: il quiz montato sta in `percorso-matematica/metodi/` |

`libro_metodi` copre l'intero arco d'esame, **PDE incluse**: cap. 18 (separazione di
variabili e nucleo del calore), 19 (onde 1D d'Alembert, Schrödinger libera), 20 (propagatori
e Green per EDP), 21 (quadro sinottico e strategia d'esame). È l'unico documento della
banca dati che copre la parte in cui l'esame si è spostato. Il `.tex` c'è, quindi è
estendibile senza rifare il lavoro.

## 4. `banca-esercizi/` — lavorato

- `b01.md` — esami 2023-2024, 9 appelli (2 agosto)
- `b02.md` — esami 2025-2026, 9 appelli (**15 agosto, mancava**)
- `b03-eserciziari.md` — i 5 Set, 65 esercizi (2 agosto)
- `frags/*.js` — 8 frammenti di pool quiz, 248 domande, montati in
  `percorso-matematica/metodi/Quiz_MetodiModelli_v1.html` (12-14 agosto)

## 5. Gap dichiarati

| gap | gravità | rimedio |
|---|---|---|
| **nessun pool quiz sulle PDE**, che sono l'esercizio 4 degli ultimi 6 appelli su 6 | **alta** | costruibile con la banca dati esistente: `libro_metodi` cap. 18-20 + Set 4 es. 4-11 + More problems es. 2-5,8-10 + i 6 esercizi d'esame con soluzione |
| nessun pool su armoniche / Cauchy-Riemann / armonica coniugata (3 appelli su 18, tutti 2024-25) | media | `AnalisiComplessaBonciani` + i 3 esercizi d'esame |
| nessun pool su distribuzioni fuori dal contesto Green (delta composta, $\delta'$ in integrali multipli — 20/01/2026 Es.3) | media | `Note al 24042026` (67 occorrenze di «distribuzion») + `libro_metodi` cap. 12 |
| note del corso ferme al 24/04/2026 | media | non risolvibile da qui: **serve che Giuseppe carichi le note fino a fine corso**, se esistono |
| 512 pagine Calogero non estraibili (PDF-immagine) | bassa | OCR vero, oppure cancellare i due file e tenere `DISPENSE CALOGERO` |
| duplicato `Scritto 20241106 (1).pdf` | bassa | cancellare |
| **espansioni asintotiche** (Laplace, fase stazionaria, punto di sella): nel programma ufficiale, **mai chieste in 18 scritti e 65 esercizi** | nulla per lo scritto | ignorare fino all'orale |

## 6. Conteggio: perché `stato-studente.md` diceva 37 file e 0 quiz

Due difetti indipendenti in `00-capitano/scripts/stato-studente.py`, entrambi riparati il
2026-08-15 (vedi il paper notturno di quella data):

1. **i quiz erano contati solo dentro la cartella del corso**, ma dal 12 agosto i quiz
   montati vivono in `percorso-matematica/<corso>/`. Risultato: `metodi-e-modelli: 0 quiz`
   e `analisi-vettoriale: 0 quiz` mentre entrambi i quiz esistevano;
2. **i file di lavoro erano fuori dal conteggio** (`banca-esercizi/`, `programma-ufficiale.md`,
   `03-note-mie/`), che è la cartella dove sta il lavoro fatto.

Il risultato combinato faceva sembrare Metodi il corso più scoperto della sessione mentre
era, in numero di domande di quiz, il secondo più coperto.

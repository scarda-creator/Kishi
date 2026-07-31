# Mappa esercizi — Analisi Vettoriale (secondo esonero, Sapienza Fisica)

Sintesi delle due passate Argonauta (`b01.md` 2022-2023, `b02.md` 2024-2025) incrociata
con la classificazione "Tipologie d'esame Sapienza" del manuale `analvett.tex` (cap. Tipi A-H).
Questo file è il **piano-pool** per il Demiurgo: il dettaglio (istanze reali, dati numerici,
trappole) vive in `b01.md`/`b02.md`; la teoria/ricette/trappole in `02-libro-di-testo/analvett.tex`.

## Struttura quasi invariante del compito (da b01)
Es.1 = Dini **o** differenziabilità (alternano) · Es.2 = serie **o** Lagrange ·
Es.3 = volume+flusso (Gauss) · Es.4 = Stokes+area · Es.5 = Cauchy (EDO).
Cinque esercizi, cinque famiglie: il quiz deve coprirle tutte.

## Pool definitivi (10) — con frequenza e priorità

Frequenza = quota di compiti in cui appare (unione delle due passate).
Priorità ALTA = punto debole dichiarato da Giuseppe → più domande + hint mirati.

| # | Pool | Freq | Priorità | Manuale | Teorema/criterio |
|---|------|------|----------|---------|------------------|
| 1 | **EDO / Cauchy — taglio QUALITATIVO** | ~100% | **ALTA** | Tipo F + cap. EDO | esistenza-unicità (Cauchy-Lipschitz), intervallo massimale, prolungabilità, monotonia/segno, asintotico, stabilità |
| 2 | **Parametrizzazione di superfici + area + bordo/flusso** | ~95% | **ALTA** | Tipo B, cap. Superfici | superficie parametrica, elemento d'area, orientazione normale |
| 3 | **Parametrizzazione di curve + integrali di linea** | ~75% | **ALTA** | cap. Curve | I e II specie, ascissa curvilinea, lavoro |
| 4 | Volume + flusso (Teorema della divergenza / Gauss) | ~100% | media | Tipo A + H | Teorema della divergenza; "tappare e Gauss" per superfici aperte |
| 5 | Stokes / circuitazione | ~80% | media | Tipo B | Teorema di Stokes, rotore |
| 6 | Ottimizzazione: max/min liberi e vincolati | ~85% | media | Tipo D | Hessiano, moltiplicatori di Lagrange, Weierstrass |
| 7 | Serie e successioni di funzioni | ~65% | media | cap. Successioni e serie | conv. puntuale/uniforme/totale (Weierstrass), serie di potenze, scambio limite-integrale |
| 8 | Campi conservativi / potenziale / forme esatte | ~50% | media | Tipo E | irrotazionalità + dominio semplicemente connesso, calcolo del potenziale |
| 9 | Differenziabilità in un punto con parametro (α/β) | ~55% | media | Tipo C | limite del rapporto incrementale, continuità delle derivate, soglie del parametro |
| 10 | Funzioni implicite / Dini + retta tangente | ~45% | media | Tipo G | teorema del Dini, gradiente, retta/piano tangente |

## Enfasi trasversale (correzione Giuseppe 07-07)
- **Parametrizzazioni** (pool 2, 3): scelta della parametrizzazione, dominio dei parametri,
  ORIENTAZIONE (segno della normale, verso di percorrenza), coerenza bordo↔superficie in Stokes.
- **EDO teoriche** (pool 1): il peso va sul RAGIONAMENTO QUALITATIVO senza risolvere —
  esiste/è unica la soluzione? fin dove si prolunga? cresce/decresce? dove va all'infinito?
  è stabile? — non sul solo calcolo esplicito di y(x).

## Trappole ricorrenti già identificate (per gli hint — dettaglio in b01/b02)
- Segno/verso della normale in flusso e area; orientazione bordo in Stokes.
- Superficie aperta: dimenticare di "tappare" prima di applicare Gauss.
- Campi conservativi: irrotazionale ≠ conservativo se il dominio non è semplicemente connesso (buco).
- Differenziabilità: soglie diverse del parametro per continuità vs differenziabilità; il limite
  del rapporto incrementale va fatto lungo TUTTE le direzioni, non solo gli assi.
- Serie: convergenza puntuale ≠ uniforme; Weierstrass dà l'uniforme ma non è necessaria.
- EDO: applicare Cauchy-Lipschitz dove l'ipotesi di lipschitzianità cade (soluzioni che si toccano).

## Composizione di ogni pool (build completo — Giuseppe 07-07)

Target ~30 domande per pool, bilanciato in DUE nature:
- **~metà concettuali**: comprensione teorica (come la v1). Distrattori = misconcezioni.
  Servono a "capire le cose teoriche" ragionando.
- **~metà esercizi**: problemi di CALCOLO reali (calcola questo integrale/flusso/area/
  potenziale, risolvi/analizza questa EDO). Scelta multipla, ma la risposta è il
  risultato del procedimento. La `sol` SPIEGA i passaggi in modo utile (la strada, non
  solo il nome del teorema) — pur citando comunque il teorema/criterio.
Esercizi calibrati sui compiti reali (b01/b02) e sul manuale. Priorità (parametrizzazioni,
EDO qualitative) → più esercizi e più graduati.

## Nota di build
Motore del quiz: clonare `03-note-mie/Quiz_Geometria_v1.html` (stessa UX: pool, "mischia tutto",
hint sul trabocchetto, soluzione che cita il teorema). Differenza: la matematica di AV è pesante
(integrali multipli, ∇, ∮, ∂), quindi rendere le formule con **KaTeX** (LaTeX vero) invece che
con entità HTML — più leggibile e più affidabile da generare. Il quiz gira su GitHub Pages, KaTeX
via CDN è compatibile.

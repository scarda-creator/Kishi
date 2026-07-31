# Percorso saper-fare — Analisi Vettoriale (secondo esonero)

> **SOSTANZA DA VERIFICARE — generata autonomamente** (Demiurgo Accademico, dispaccio Dedalo, 2026-07-13).
> La correttezza matematica dei singoli blocchi va ratificata da Giuseppe. Questo file-guida (struttura,
> smistatore, ordine) è materiale d'architettura, non matematica da verificare.

Corso: Analisi Vettoriale · La Sapienza, Fisica. Base: `banca-esercizi/mappa-esercizi.md` (10 pool),
`banca-esercizi/b01.md` (2022–2023, 11 esami) e `b02.md` (2024–2025, 10 esami). Lo **scritto del 17 luglio
2026** è sul **secondo esonero**: i tipi sono pesati su quel corpus.

## Cos'è — e cosa NON è

Non è un quiz (non ti interroga) e non è il libro di testo (non ri-spiega la teoria da zero). È il
**gemello operativo**: per ciascun tipo d'esame distilla il *gesto* — come lo riconosci in cinque secondi,
perché il metodo funziona, come lo esegui senza esitare, un esame vero svolto per intero, le varianti negli
anni, un collaudo per provartelo addosso. Obiettivo: **fluenza procedurale**. Non "so cos'è il rotore" ma
"leggo *circuitazione lungo il bordo* e la mano parte con Stokes".

## Struttura di ogni blocco (sei sezioni fisse)

1. **La firma** — riconoscerlo dal testo in cinque secondi: parole-spia, oggetti-spia, cosa NON confondere.
2. **L'idea** — il principio first-principles su cui poggia il metodo, con la deduzione breve se è breve.
3. **La mossa** — il procedimento passo-passo, con le **Trappole** inline al passo esatto dove si cade
   (rif. esame reale).
4. **Un esame, per intero** — un problema vero della banca-dati svolto con tutto il calcolo, fonte citata.
5. **Le varianti** — la famiglia di come il tipo è comparso negli anni.
6. **Collaudo** — uno-tre sotto-problemi reali, solo con la risposta.

## La struttura quasi-invariante del compito

Cinque esercizi, cinque famiglie. Negli ultimi anni:

- **Es.1** = Differenziabilità in un punto **oppure** Dini (alternano) → **02 / 03**
- **Es.2** = Serie/successioni **oppure** Ottimizzazione Lagrange → **04 / 05**
- **Es.3** = Volume + flusso (divergenza) → **08** (spesso con **06/07** come sotto-punti)
- **Es.4** = Stokes + area + campo conservativo, fusi in un esercizio → **07 / 09 / 10**
- **Es.5** = Problema di Cauchy (EDO) → **01**

Il quiz dovrà coprirle tutte. Le **parametrizzazioni** (curve 06, superfici 07) e le **EDO qualitative**
(01) sono i punti dichiarati deboli: più esercizi, più trappole, più graduati.

## Lo smistatore — dal problema al saper-fare

Leggi il testo e cerca l'oggetto-spia. La colonna destra è il file da aprire.

| Nel testo vedi… | È… | Saper-fare |
|---|---|---|
| $y'=f(t,y)$, $y(t_0)=y_0$, "problema di Cauchy", "monotonia / limiti / prolungabilità / globalità" | EDO scalare del I ordine | **01 · EDO / Cauchy** |
| $f(x,y)=\dfrac{\text{numeratore}}{(x^2+y^2)^\alpha}$, $f(0,0)=0$, "continua / derivabile / differenziabile", parametro $\alpha,\beta$ | analisi locale in un punto | **02 · Differenziabilità** |
| $F(x,y)=0$ o $F(x,y,z)=0$, "definisce implicitamente", "Dini", "retta / piano tangente", $g'(x_0)$ | funzione implicita | **03 · Dini** |
| "massimo e minimo di $f$ su $D$", vincolo $g=0$, "moltiplicatori di Lagrange", Hessiano | ottimizzazione | **04 · Ottimizzazione** |
| $\sum_k f_k(x)$, $f_n(x)$, "converge puntualmente / uniformemente / totalmente", serie di potenze, scambio $\int$–$\lim$ | successioni/serie di funzioni | **05 · Serie** |
| curva $=$ intersezione di due superfici, "parametrizzare", "regolare / semplice", $\int_\gamma f\,ds$, lavoro | curva 1D in $\mathbb{R}^3$ | **06 · Curve** |
| superficie $z=f(x,y)$ o di rotazione o sferica, "area", "bordo $\partial\Sigma$", "versore normale" | superficie 2D in $\mathbb{R}^3$ | **07 · Superfici** |
| "flusso uscente da $E$", $\iiint$, "volume del dominio", $\operatorname{div}F$, Gauss | flusso da dominio 3D | **08 · Divergenza** |
| "circuitazione", "lavoro lungo curva chiusa", $\operatorname{rot}F$, Stokes, Green | circuitazione | **09 · Stokes** |
| "conservativo", "potenziale / primitiva", "forma esatta", $\operatorname{rot}F=0$, "semplicemente connesso" | campo conservativo | **10 · Conservativi** |

Ambiguità frequenti risolte:

- **Es.1: Differenziabilità o Dini?** Se c'è un *quoziente* con $(x^2+y^2)^\alpha$ al denominatore e
  $f(0,0)=0$ definito a parte, è **02**. Se c'è un'equazione $F(\cdots)=0$ da risolvere per una variabile
  (trovare $y=g(x)$ o $z=g(x,y)$) e studiarne tangente/monotonia, è **03**.
- **Es.4 fuso: Stokes o Conservativi?** Se ti chiedono il lavoro/circuitazione lungo una curva, controlla
  **prima** se il campo è conservativo (**10**): se lo è, su curva chiusa il lavoro è $0$ e su curva aperta è
  $U(B)-U(A)$, e hai finito senza integrare. Se non lo è, applichi **Stokes** (**09**).
- **Curva o superficie?** Un sistema di *due* equazioni in $\mathbb{R}^3$ definisce una **curva** (06); una
  *sola* equazione $z=f(x,y)$ o $g(x,y,z)=0$ definisce una **superficie** (07). Il *bordo* di una superficie
  è una curva (06) e questo è il ponte fra i due.

## Ordine consigliato di percorrenza

**01** (EDO) è indipendente da tutto il resto (analisi in una variabile) ed è al 100% negli esami: prima.
**02 → 03** sono la coppia dell'Es.1 (analisi locale / funzione implicita). **04 → 05** sono la coppia
dell'Es.2 (ottimizzazione / serie). **06 → 07 → 08 → 09 → 10** sono il **blocco dei teoremi integrali** in
ordine di dipendenza: parametrizzi curve, poi superfici, poi il flusso da un volume (Gauss), poi la
circuitazione (Stokes), infine il caso in cui tutto collassa a differenza di potenziale (conservativi).
Le tre priorità dichiarate — 01, 06, 07 — vanno sapute *senza esitazione*: lì un errore di segno/orientazione
o di dominio invalida l'intero esercizio.

## Stato di costruzione

**Percorso COMPLETO** — 10/10 saper-fare a terra (2026-07-13). Tutti portano la marca "SOSTANZA DA
VERIFICARE": la correttezza matematica va ratificata da Giuseppe.

**Ampliamento «Le varianti» (2026-07-13, dispaccio Dedalo).** La sezione #5 di tutti e 10 i saper-fare è stata
portata da elenco breve a **mappa delle famiglie**: organizzata per assi (dominio / vincolo / orientazione /
campo / condizione al bordo / dimensione), con per ogni variante gli esami concreti in cui è comparsa e una
riga "come la riconosci / cosa cambia nel metodo". Fonti: `banca-esercizi/b01.md` (2022–2023) e `b02.md`
(2024–2025), estratte dagli esami reali del secondo esonero. Le altre 5 sezioni (firma / idea / mossa / esame /
collaudo) sono rimaste invariate. La marca "SOSTANZA DA VERIFICARE" resta su tutti i file.

| File | Pool mappa | Esame svolto (fonte) | Priorità | Verifica |
|---|---|---|---|---|
| `01-edo-cauchy.md` | #1 EDO | `20220124` Es.5 (trap segno di $y'$) | **ALTA** | da ratificare |
| `02-differenziabilita.md` | #9 Diff | `20220622` Es.1 (soglie continuità≠diff) | **ALTA** | da ratificare |
| `03-dini.md` | #10 Dini | `20220124` Es.1 (trap formula $g''$) | media | da ratificare |
| `04-ottimizzazione.md` | #6 Lagrange | `20230504` Es.5 (trap punto interno) | media | da ratificare |
| `05-serie.md` | #7 Serie | `20220124` Es.2 (unif. su compatti) | media | da ratificare |
| `06-curve.md` | #3 Curve | `20220124` Es.4-i (regolarità per disug.) | **ALTA** | da ratificare |
| `07-superfici.md` | #2 Superfici | `20240704` Es.3 (trap dominio traslato) | **ALTA** | da ratificare |
| `08-divergenza.md` | #4 Gauss | `20230210` Es.4 (flusso per differenza) | **ALTA** | da ratificare |
| `09-stokes.md` | #5 Stokes | `20250127` Es.1-vi (trap orientazione) | media | da ratificare |
| `10-conservativi.md` | #8 Conserv | `20230907` Es.2 (trap dominio bucato) | media | da ratificare |

Priorità di ratifica: prima 01, 06, 07, 08 (alta frequenza e alto costo di un errore di segno/orientazione/
dominio); poi 02, 09; infine 03, 04, 05, 10.

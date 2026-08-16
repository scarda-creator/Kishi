---
type: mappa-esercizi
corso: metodi-e-modelli
data: 2026-08-15
autore: run notturno (Mnemosyne)
base: 18 appelli unici (giu 2023 – feb 2026), 72 esercizi; 65 esercizi risolti degli eserciziari
prerequisito: 02-libro-di-testo/00-inventario.md
---

# Mappa esercizi — Modelli e Metodi

## 0. La forma dell'esame, che non cambia mai

Quattro esercizi, 30 punti, ripartizione fra 5 e 10 punti per esercizio. **La bipartizione
è rigida su tutti e 18 gli appelli**: esercizi 1-2 analisi complessa, esercizi 3-4 analisi
funzionale, consegnati su fogli separati.

Questo è più di una curiosità organizzativa: significa che **la copertura va misurata in
due metà indipendenti**, non sul totale. Chi ha 15 punti tutti nella prima metà non passa
diversamente da chi ne ha 15 sparsi — ma il rischio si accumula in modo diverso, perché
la seconda metà è quella che si è mossa.

## 1. Frequenze — tutta la banca dati (18 appelli, 72 esercizi)

### Metà A — analisi complessa (esercizi 1 e 2, sempre 36 esercizi)

| # | tipo | freq | diff | concetti | trabocchetti dichiarati negli scritti |
|---|---|---:|:---:|---|---|
| A1 | **integrale reale per contorno** | 17/18 | 4 | residui, lemma di Jordan, stime sugli archi, parametrizzazione esplicita | Caprini **pretende** la parametrizzazione di ogni curva e la giustificazione dei contributi nulli: punti persi anche col risultato giusto. Keyhole con potenza non intera: il fattore $(1-e^{2\pi i\alpha})$ va scritto, non evocato |
| A2 | **Laurent, singolarità, residui** | 14/18 | 3 | corona di validità, parte principale, classificazione, residuo all'infinito | «Lo sviluppo di Laurent» senza corona è mal posto: due appelli (20240618, 20262001) chiedono **due** sviluppi diversi attorno allo stesso centro. Il residuo all'infinito ha il segno opposto e la somma dei residui deve fare zero (20250909 lo chiede esplicitamente) |
| A3 | **polidrome: tagli e determinazioni** | 11/18 | 4 | punti di diramazione, scelta del ramo, valore sopra/sotto taglio | Tre appelli chiedono **come cambia il taglio cambiando la convenzione angolare** (20250120, 20250505, 20260212). Non basta saper integrare: bisogna saper riscrivere il taglio per $[0,2\pi)$, $[-\pi,\pi]$, $(-\pi/2,3\pi/2]$ |
| A4 | integrale trigonometrico $\int_0^{2\pi}$ | 3/18 | 3 | $z=e^{i\theta}$, riduzione a circonferenza unitaria | Due volte su tre l'integrando contiene una **singolarità essenziale** dopo la sostituzione (20230704, 20251105): non si applica la formula del polo, si sviluppa |
| A5 | armoniche / Cauchy-Riemann / coniugata | 3/18 | 2 | $\Delta u=0$, CR, ricostruzione di $f(z)$ | Tutte e tre nel 2024-25, sempre come esercizio 1 a punteggio basso. Chiede anche di esprimere $g$ **in funzione di $z$ e $\bar z$** e concludere sull'analiticità |
| A6 | singolarità non isolate | 2/18 | 5 | accumulazione di poli, $\cosh(1/z)$, $\sin(z^{-2})$ | 20240910 e 20260212. Il punto è riconoscere che **non** si può classificare come polo/essenziale isolata, e che il residuo all'infinito può essere l'unica via |

### Metà B — analisi funzionale (esercizi 3 e 4, sempre 36 esercizi)

| # | tipo | freq | freq **2025-26** | diff | concetti |
|---|---|---:|---:|:---:|---|
| B1 | **matrici, funzioni di matrice, proiettori** | 8/18 | 5/9 | 3 | teorema spettrale, $P_iP_j=\delta_{ij}P_i$, $f(A)=\sum f(\lambda_i)P_i$, $A^n$, $(1-xA)^{-1}$, cambio di base |
| B2 | **PDE / equazione delle onde** | **6/18** | **6/9** | 4 | separazione di variabili, serie di Fourier dai dati iniziali, nucleo del calore, d'Alembert, Green per EDP con sorgente $\delta$, base di Hermite |
| B3 | spettro e autoaggiunzione di operatori differenziali | 6/18 | 3/9 | 4 | dominio come parte dell'operatore, BC che determinano lo spettro, spettro continuo e autofunzioni generalizzate |
| B4 | Fourier (serie o trasformata) a sé | 7/18 | 2/9 | 3 | Parseval per sommare serie numeriche, valore nei punti di salto, decadimento legato ai poli |
| B5 | **funzione di Green per ODE** | 5/18 | **1/9** | 4 | due soluzioni omogenee adattate al bordo, salto della derivata, sorgente $\delta$ e $\delta'$ |
| B6 | distribuzioni fuori dalla Green | 4/18 | 2/9 | 4 | $\delta$ composta con funzione, $\delta'$ sotto integrale multiplo, limiti distribuzionali |
| B7 | ODE: variazione costanti / riduzione d'ordine | 2/18 | 0/9 | 3 | Wronskiano, soluzione nota data in traccia |
| B8 | Gram-Schmidt / ortonormalizzazione | 1/18 | 1/9 | 2 | in $L^2$ su dominio illimitato |

## 2. Le tre priorità per il Demiurgo

Ordinate non per frequenza storica ma per **frequenza recente × scopertura attuale**.

**1. PDE (B2) — priorità assoluta.** 6 appelli su 6 dal giugno 2025. Zero domande nel quiz.
È l'unico tipo che sta a 100% di frequenza recente e 0% di copertura. Vale 6-9 punti sui 30
del 9 settembre, con probabilità prossima a 1.

**2. Integrali per contorno + polidrome (A1, A3) — mantenimento.** Già coperti da due pool
(`integrali`, `polidrome`, 60 domande). Non serve altro contenuto: serve controllare che
i pool chiedano **la parametrizzazione e la giustificazione dei contributi nulli**, perché
è lì che Caprini toglie punti a chi ha il risultato giusto.

**3. Armoniche (A5) + distribuzioni composte (B6) — riempimento.** Insieme fanno 7 esercizi
su 72, entrambi scoperti, entrambi a bassa difficoltà per unità di punto. Un pool misto da
~25 domande è l'investimento a ROI più alto dopo le PDE.

## 3. Copertura del quiz esistente, tipo per tipo

`percorso-matematica/metodi/Quiz_MetodiModelli_v1.html`, 8 pool, 248 domande.

| pool | domande | tipo coperto | freq. del tipo | freq. 2025-26 | giudizio |
|---|---:|---|---:|---:|---|
| `integrali` | 30 | A1 | 17/18 | 7/9 | **giusto** |
| `laurent` | 32 | A2 | 14/18 | 8/9 | **giusto** |
| `polidrome` | 30 | A3 | 11/18 | 5/9 | **giusto** |
| `matrici` | 30 | B1 | 8/18 | 5/9 | **giusto** |
| `spettro` | 32 | B3 | 6/18 | 3/9 | giusto |
| `fourier` | 30 | B4 | 7/18 | 2/9 | sovrappesato, ma Fourier serve **dentro** le PDE |
| `green` | 33 | B5 | 5/18 | 1/9 | **sovrappesato** |
| `greendelta` | 31 | B5+B6 | 5/18 | 1/9 | **sovrappesato** |
| — | **0** | **B2 (PDE)** | **6/18** | **6/9** | **buco** |
| — | 0 | A5 (armoniche) | 3/18 | 1/9 | buco minore |
| — | 0 | A6 (sing. non isolate) | 2/18 | 1/9 | parziale via `laurent` |

**64 domande su 248 (26%) stanno su un tipo comparso una volta negli ultimi nove appelli.
Zero domande stanno sul tipo comparso in tutti e sei gli appelli più recenti.**

Non è un errore di chi ha costruito i pool: è la conseguenza meccanica di aver costruito
sulle fonti disponibili — `b01` (esami 2023-2024) e `b03` (eserciziari) — mentre `b02`, la
passata sui nove esami 2025-2026, non era mai stata fatta. **La deriva viveva interamente
nella finestra non censita.**

## 4. Il materiale per il pool mancante esiste

Per costruire un pool PDE della stessa qualità degli altri otto non serve nulla dall'esterno:

| serve | c'è, dove |
|---|---|
| teoria (separazione, nucleo del calore, d'Alembert, propagatori) | `03-note-mie/libro_metodi.tex` cap. 18, 19, 20 — con sorgente `.tex` |
| esercizi svolti dal docente | `Set 4 - Differential equations` es. 4-11 (calore su sbarra infinita e finita con Dirichlet/Neumann misti, onde con pacchetto gaussiano, advezione-diffusione per cambio di variabili, separazione in 2D, Laplace, Green ritardata del calore e di Schrödinger) |
| esercizi svolti aggiuntivi | `More problems` es. 2-5, 8-10 (sei PDE per separazione, incluse $\partial_t u = t\,\partial_x^2u$ e $\partial_tu=t^2\partial_x^2u$ — cioè **esattamente la forma dell'appello 12/02/2026**) |
| esercizi in forma d'esame, con soluzione | i 6 esercizi 4 degli appelli 20250623, 20250707, 20250909, 20251105, 20262001, 20260212 — le soluzioni stanno nello stesso PDF |
| trabocchetti | tutti ricavabili dalle soluzioni: BC di Neumann → serie di **coseni**, non seni; coefficiente dipendente dal tempo ($\sin t$, $t^2$) → si integra $\int_0^t$ nella parte temporale, non si tratta come costante; sorgente $\delta(t/3-1)$ → **fattore 3** dallo scaling della delta; dati iniziali che sono già combinazione finita di modi → nessun integrale, si legge il coefficiente |

## 5. Nota sulla traiettoria

Le PDE risolte per separazione + il nucleo del calore + i propagatori sono lo stesso
apparato del path integral in tempo immaginario. È l'unico blocco d'esame di Metodi che
tocca direttamente la direzione tesi (meccanica statistica, decoerenza): il tipo di
esercizio più scoperto è anche quello che serve dopo. Il pool mancante è l'unico investimento
di questa sessione che non si esaurisce col 9 settembre.

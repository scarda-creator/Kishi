# Carta delle rotte — PREANNUNCI (nuclei non ancora scritti)

> Le rotte-fisica dei nuclei ancora da costruire: dove il percorso *andrà*. Scritte da Dedalo
> (2026-07-20) al posto dell'Argonauta, fermato dal limite di sessione — corrispondenze VERE,
> le più forti; da rifinire/estendere quando l'Argonauta potrà girare. `carta-rotte.py` le fonde
> nella carta distinguendole (tratteggiate) dagli archi dei nuclei già fatti.

## Nucleo 6 — Teoremi integrali (Green/Gauss/Stokes → Stokes generalizzato)
- → Elettromagnetismo: Gauss $\oint\mathbf E\cdot d\mathbf S=Q/\varepsilon_0$ e Ampère $\oint\mathbf B\cdot d\mathbf r=\mu_0 I$ SONO Gauss e Stokes; le Maxwell in forma integrale ⟷ differenziale sono questo teorema. Lo Stokes generalizzato $\int_{\partial\Omega}\omega=\int_\Omega d\omega$ unifica tutti e tre e prepara il gauge $F=dA$.
- → Meccanica quantistica: lo Stokes generalizzato e $d\omega$ sono il seme della coomologia di de Rham; la fase di Berry e l'effetto Aharonov–Bohm sono integrali di una 1-forma su cammini — la stessa macchina.
- → Tesi (domanda aperta): un integrale conservato su un bordo dipende solo dalla topologia del dominio (invariante). Nei sistemi complessi, quali "cariche topologiche" restano invarianti sotto la dinamica caotica? (ergodicità vs quantità conservate → ETH).

## Nucleo 7 — EDO qualitative (esistenza/unicità, ritratto di fase)
- → Meccanica classica: ogni sistema $\dot x=f(x)$ è un campo di velocità nello spazio delle fasi; il ritratto di fase È la dinamica. Punti fissi/stabilità = equilibri; cicli limite = oscillazioni.
- → Meccanica statistica: il flusso hamiltoniano conserva il volume delle fasi (Liouville, $\nabla\cdot v=0$); da qui l'ergodicità e la misura microcanonica.
- → Tesi (domanda aperta): quando un sistema deterministico "dimentica" le condizioni iniziali? Sensibilità (esponenti di Lyapunov) → mescolamento → il ponte tra reversibilità microscopica e irreversibilità termodinamica (Loschmidt → ETH/decoerenza).

## Nucleo 8 — Serie di funzioni (conv. uniforme, serie di potenze)
- → Meccanica quantistica: la convergenza uniforme è ciò che *autorizza* a scambiare $\sum$ e $\int$/$\partial$ — legittima gli sviluppi perturbativi e le serie di stati.
- → Tesi: quando una serie perturbativa converge davvero vs è solo asintotica? (raggio di convergenza → transizioni, non-analiticità → criticità: il filo del nucleo 1).

## Nucleo 9 — Spazi normati / Banach (completezza)
- → Meccanica quantistica: la completezza è ciò che rende $L^2$ uno spazio *chiuso* dove i limiti di stati sono ancora stati — la base rigorosa dello spazio di Hilbert.
- → Tesi: negli spazi di dimensione infinita l'intuizione finita cade (compattezza persa); è lì che vivono i fenomeni collettivi dei sistemi con molti gradi di libertà.

## Nucleo 10 — Hilbert & Fourier (ortogonalità, sviluppo ortogonale)
- → Meccanica quantistica: $L^2$ È lo spazio degli stati; le serie di Fourier sono lo sviluppo su una base ortonormale ($|\psi\rangle=\sum c_n|n\rangle$); Parseval = conservazione della norma/probabilità.
- → Meccanica statistica: i modi di Fourier diagonalizzano i sistemi invarianti per traslazione (fononi, modi normali) → equipartizione.
- → Tesi: la base "giusta" (autostati) è quella che diagonalizza l'evoluzione; l'ETH è un'affermazione sugli elementi di matrice degli osservabili in quella base.

## Nucleo 11 — Lebesgue & Lᵖ  [+]
- → Meccanica quantistica: serve l'integrale di Lebesgue perché $L^2$ sia completo (Riesz–Fischer); senza, lo spazio degli stati "avrebbe buchi".
- → Tesi: la teoria della misura è il linguaggio delle probabilità sui grandi sistemi (misura di Gibbs, insiemi statistici).

## Nucleo 12 — Olomorfe, Cauchy–Riemann
- → Elettromagnetismo: parte reale e immaginaria di una funzione olomorfa sono armoniche coniugate → problemi 2D di potenziale (elettrostatica, flusso ideale) risolti con mappe conformi.
- → Tesi: l'analiticità come *rigidità* (un valore locale determina il tutto) ⟷ la non-analiticità come luogo delle transizioni di fase (funzione di partizione, zeri di Lee–Yang).

## Nucleo 13 — Cauchy (teorema/formula, analiticità = serie)
- → Meccanica quantistica: la formula di Cauchy dà i valori dentro dal bordo — il seme dei propagatori e delle relazioni di dispersione (Kramers–Kronig = causalità come analiticità).
- → Tesi: le funzioni di risposta dei sistemi complessi sono analitiche nel semipiano superiore *perché* causali; i loro poli sono i modi collettivi.

## Nucleo 14 — Residui e integrazione per contorni
- → Meccanica quantistica: i residui SONO il cavallo da lavoro — propagatori, funzioni di Green, integrali di anello; ogni polo è un modo/una particella, il residuo la sua ampiezza.
- → Meccanica statistica: somme su frequenze di Matsubara = somme di residui; la fisica a temperatura finita si calcola così.
- → Tesi: chiudere il contorno "dalla parte giusta" È scegliere la causalità/lo stato; i poli sullo spettro sono i tempi di rilassamento (decoerenza).

## Nucleo 15 — Continuazione analitica, funzioni speciali (Gamma)  [+]
- → Meccanica statistica: la continuazione analitica in $\beta$ o in dimensione (regolarizzazione zeta, $\Gamma$) È lo strumento con cui si domano gli infiniti; l'energia di Casimir ne è un caso.
- → Tesi: continuare analiticamente la funzione di partizione nel piano complesso rivela le transizioni (zeri di Lee–Yang che pizzicano l'asse reale).

## Nucleo 16 — Distribuzioni & Fourier rigorosa (la delta)
- → Meccanica quantistica: la $\delta$ È la sorgente puntiforme e la normalizzazione degli stati del continuo; la trasformata di Fourier scambia posizione e impulso (il principio di indeterminazione È una proprietà della trasformata).
- → Elettromagnetismo: la carica puntiforme È una $\delta$, il potenziale la funzione di Green di Laplace.
- → Tesi: le distribuzioni sono il linguaggio delle risposte e delle correlazioni ($\langle\phi(x)\phi(y)\rangle$) — la materia prima della meccanica statistica dei campi.

## Nucleo 17 — Operatori & spettrale, Sturm–Liouville, Green  [+]
- → Meccanica quantistica: gli osservabili SONO operatori autoaggiunti; lo spettro È l'insieme dei valori misurabili; la funzione di Green risolve l'equazione con una sorgente.
- → Tesi: l'ETH è un'ipotesi sullo spettro e sugli autostati di sistemi caotici; la statistica dei livelli (GOE/GUE) distingue integrabile da caotico.

## Nucleo 18 — EDP della fisica (Laplace/calore/onde)  [+]
- → Meccanica statistica: l'equazione del calore È la diffusione; con un termine di deriva diventa Fokker–Planck — il ponte diretto tra dinamica stocastica e distribuzioni d'equilibrio.
- → Tesi: dal moto microscopico (Langevin) all'equazione macroscopica (Fokker–Planck) c'è tutto il tema del coarse-graining e dell'emergere dell'irreversibilità — il cuore della tua tesi.

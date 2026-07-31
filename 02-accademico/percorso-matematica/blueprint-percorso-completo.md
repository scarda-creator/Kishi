# Blueprint del percorso completo — la mappa mentale per scrivere i 13 nuclei mancanti

> **STATO al 2026-07-21, sera — PERCORSO COMPLETO, 18/18 costruiti.**
> Movimento I (00–06), Movimento II (07–10), Movimento III (11–14), Movimento IV (15–17): tutti
> scritti, verificati (JS+KaTeX, 6833 formule, 0 errori) e illustrati. Questo blueprint resta come
> **documento di progetto**: descrive l'intenzione con cui ogni nucleo è stato scritto, utile per
> rivederli o estenderli, non più come lista di cose da fare.
> **Nota di calibrazione mantenuta:** il nucleo 16 (operatori e spettro) era marcato [+] ma è stato
> scritto con la profondità di un [C], perché la mappa degli scritti dà «spettro 19/19». La
> riclassificazione formale del tag resta una decisione di Giuseppe.
> Procedura di scrittura: `nuclei/plot-integrazione.md`, sezione «Come si scrive un nucleo nuovo»
> — si scrive il solo contenuto e si monta con `assembla-nucleo.js`.

> Costruita da Dedalo il 2026-07-21 su direttiva di Giuseppe («costruisci una mappa mentale per
> tutto il percorso e scrivi tutti i nuclei, riempiendoli uno a uno coi grafici»). È lo **scheletro
> operativo**: per ogni nucleo da scrivere — le tappe, i risultati-cardine, gli esercizi d'esame, e
> **le figure da costruire** col motore (ora ricco). Fonti: `00-scheletro.md`, `01-mappa-argonauta.md`,
> `carta-rotte-preannunci.md`, `forma-e-regole.md`, `forma-prolessi.md`.

## Regole di scrittura (invarianti, da rispettare in OGNI nucleo)
- **Studio silenzioso**: si attraversa leggendo e facendo. No voce, no favola, no metafore gratuite.
- **Grammatica matematica DENTRO le formule**: ogni passaggio motivato, ogni simbolo spiegato. La
  matematica lavorata, non prosa attorno.
- **Esercizi multipli di livello d'esame per ogni sezione** (non uno): attingere ai trabocchetti reali.
- **Figure dove il concetto ha forma** (blocco `plot`): non decorazione, evidenza. Motore disponibile:
  `func2d` `curve` `curve3d` `field2d` (con `rings`) `phase` (con `seeds`) `contour` (con `overlays`,
  `grad`, `marks`) `surface3d` (con `tangent`, camera `yaw/pitch/zscale`). Ogni plot porta la sua
  chiave di lettura (`leggi`). Ricetta: `nuclei/plot-integrazione.md`.
- **I tre strati + prolessi**: rigore dimostrato · profondità (varianti/trabocchetti) · senso (fisica,
  NON metafora) · prolessi (dizionario simbolo↔simbolo verso EM/StatMech/QM + una domanda aperta
  verso la tesi ETH/decoerenza/stat-mech).
- **Ogni nucleo**: file `NN-nome.html` (NN = id_scheletro − 1, zero-padded), infra motore inclusa,
  deep-link `#tappa`, verificato con `00-capitano/scripts/verifica-nucleo.js` (JS + KaTeX = 0 errori)
  PRIMA di considerarlo consegnato. Poi `python mappa-percorso.py` e `python carta-rotte.py` per
  aggiornare mappa e carta delle rotte.
- **KaTeX**: mai `<` `>` nudi nelle formule (usa `\lt \gt \le \ge \neq`); entità HTML come `«` `»`
  fuori da `\text{}`; niente `\*` (usa `*`); apostrofi nelle stringhe JS via `String.raw` o escape.

## Mappa d'insieme (file → id → titolo → stato)
Esistenti e ILLUSTRATI: `00`(1 Topologia) `01`(2 Differenziale) `02`(3 Dini/ottim) `03`(4 Curve/sup,
figure parziali) `04`(5 Campi). **Da scrivere: 13 nuclei, `05`→`17`.**

---

# MOVIMENTO I — resta da scrivere: 6 (Teoremi integrali), 7 (EDO qualitative)

## Nucleo `05` = id 6 — Teoremi integrali: Green, Gauss, Stokes  [C]  ★ vertice di AV
**Idea portante:** un solo teorema in tre vesti — l'integrale di una derivata su una regione = la
funzione sul bordo. $\int_\Omega d\omega=\int_{\partial\Omega}\omega$ (Stokes generalizzato).
**Tappe:**
- 00 Perché: i due esercizi-tipo (AV Terracina Parte II: Green nel piano; flusso/divergenza in 3D).
- 01 **Green nel piano**: $\oint_{\partial D}(P\,dx+Q\,dy)=\iint_D(Q_x-P_y)\,dA$. Derivazione per
  rettangoli, cancellazione dei lati interni. Le due forme (circuitazione = flusso del rotore; flusso
  uscente = integrale della divergenza, teorema della divergenza nel piano).
- 02 **Divergenza / Gauss in 3D**: $\iiint_V \nabla\!\cdot\!\mathbf F\,dV=\iint_{\partial V}\mathbf F\!\cdot\!\mathbf n\,dS$.
  Significato: bilancio di sorgenti = flusso totale. Esempio $\mathbf F=(x,y,z)$ attraverso la sfera.
- 03 **Stokes classico**: $\iint_S(\nabla\times\mathbf F)\!\cdot\!\mathbf n\,dS=\oint_{\partial S}\mathbf F\!\cdot\!d\mathbf r$.
  Orientazione bordo↔normale (regola della mano destra). Il campo-vortice: circuitazione = flusso del rotore.
- 04 **Unificazione — forme differenziali e $d$**: $0$-,$1$-,$2$-forme in $\mathbb R^3$; $d$ manda
  grad→rot→div; $d^2=0$ ricodifica rot·grad=0 e div·rot=0 (nucleo 4). Stokes generalizzato.
- 05 Esercizi (multipli): Green per area $\tfrac12\oint(x\,dy-y\,dx)$; flusso sfera/paraboloide con
  orientazione (trabocchetto segno normale); circuitazione via Stokes vs diretta; campo con singolarità
  (togli l'origine → il buco conta, aggancio nucleo 4/6-di-campi).
- 06 Senso + prolessi.
**FIGURE:**
1. Green: `field2d` di un campo + `rings` (il bordo $\partial D$) → circuitazione = area×rotore medio.
2. Divergenza: `surface3d` o `field2d` 2D di $(x,y)$ dentro un cerchio (`rings`) → flusso uscente.
3. Stokes: `field2d` del rotore-campo con `rings` come bordo di una superficie.
4. (Se utile) `contour` di una regione $D$ con bordo evidenziato.
**Prolessi (da `carta-rotte-preannunci` nucleo 6):** Gauss/Ampère integrali ⟷ Maxwell; Stokes gen. →
de Rham, fase di Berry, Aharonov–Bohm ($F=dA$). Domanda→tesi: cariche topologiche invarianti sotto
dinamica caotica (ergodicità vs conservate → ETH).

## Nucleo `06` = id 7 — EDO qualitative: esistenza/unicità, ritratto di fase  [C]  ★ punto debole dichiarato
**Idea portante:** un'equazione $\dot x=f(x)$ È un campo di velocità nello spazio delle fasi; il
ritratto di fase È la dinamica, anche senza risolvere.
**Tappe:**
- 00 Perché: gli esercizi-tipo AV (Cauchy, separabili, Bernoulli, lineari a coeff. cost., **Eulero**,
  autonome/ritratto di fase).
- 01 **Cauchy: esistenza e unicità** (Picard–Lindelöf): $f$ Lipschitz in $x$ ⇒ soluzione locale unica.
  Controesempio $\dot x=\sqrt{|x|}$ (non-unicità) e $\dot x=x^2$ (esplosione in tempo finito).
- 02 **Metodi risolutivi** (la cassetta d'esame): separabili; lineari del 1° ordine (fattore
  integrante); **Bernoulli** (sostituzione); lineari a coeff. costanti (equazione caratteristica);
  **Eulero** $x^2y''+\dots$ (il PONTE 7↔17 verso la Green di Metodi — farlo QUI, una volta, in profondità).
- 03 **Sistemi lineari 2×2 e ritratto di fase**: autovalori della matrice → nodo/sella/fuoco/centro.
  Classificazione (traccia-determinante). Stabilità.
- 04 **Autonome non lineari**: punti fissi, linearizzazione (Hartman–Grobman a livello operativo),
  cicli limite (cenno). Il pendolo smorzato.
- 05 Esercizi multipli: risolvi e classifica; ritratto di fase da disegnare; Eulero completo.
- 06 Senso + prolessi.
**FIGURE (terreno NATIVO per `phase`):**
1. `phase` del pendolo $\dot x=y,\ \dot y=-\sin x-0.2y$ con `seeds` → spirali verso i fuochi (aggancio
   alla spirale del nucleo 0!).
2. `phase` di una **sella** (autovalori reali opposti) e di un **centro/fuoco** (complessi) affiancati.
3. `phase` di $\dot x=x^2$ o campo 1D come `field2d` per esplosione/non-unicità.
4. `func2d` di soluzioni che si biforcano (non-unicità $\sqrt{|x|}$).
**Prolessi (nucleo 7):** $\dot x=f(x)$ = campo di velocità (Meccanica); Liouville $\nabla\!\cdot v=0$
(StatMech, ergodicità, misura microcanonica). Domanda→tesi: quando un sistema deterministico
"dimentica" le condizioni iniziali? Lyapunov → mescolamento → reversibilità micro vs irreversibilità
termodinamica (Loschmidt → ETH/decoerenza).

---

# MOVIMENTO II — Ponte: successioni, spazi, spazio di funzioni

## Nucleo `07` = id 8 — Serie di funzioni: convergenza uniforme, potenze  [C]
**Idea portante:** la convergenza uniforme è la licenza per scambiare $\lim/\sum$ con $\int/\partial$.
**Tappe:** 00 perché; 01 puntuale vs uniforme (la distinzione, il $\sup$); 02 **criterio di
Weierstrass** (M-test); 03 conseguenze (continuità/integrabilità/derivabilità del limite); 04 **serie
di potenze** (raggio di convergenza, Cauchy–Hadamard, derivazione termine a termine, Taylor/analitiche);
05 esercizi multipli (studio di convergenza; raggio; somma via manipolazione); 06 senso + prolessi.
**FIGURE:** `func2d` di somme parziali che convergono uniformemente vs no (es. $x^n$ su $[0,1]$:
puntuale non uniforme, il "gradino" che si forma); `func2d` di una serie di potenze e del suo raggio.
**Prolessi (nucleo 8):** conv. uniforme legittima gli sviluppi perturbativi e le serie di stati (QM).
Domanda→tesi: serie perturbativa convergente vs solo asintotica? (raggio → non-analiticità → criticità,
filo del nucleo 1). PONTE 8↔10 (verso Fourier/Hilbert).

## Nucleo `08` = id 9 — Spazi metrici/normati, completezza, Banach  [C]
**Idea portante:** la completezza è ciò che rende uno spazio un posto dove i limiti "restano dentro".
**Tappe:** 00 perché; 01 metrica/norma (assiomi; esempi $\mathbb R^n$, $C[a,b]$ con $\|\cdot\|_\infty$,
$\ell^p$); 02 successioni di Cauchy e **completezza**; 03 **Banach** (spazi completi normati) + esempi/
controesempi ($C[a,b]$ con $\|\cdot\|_1$ NON completo); 04 **teorema delle contrazioni** (punto fisso,
aggancio a Picard del nucleo 7); 05 esercizi; 06 senso + prolessi.
**FIGURE:** `contour`/`field2d` illustrando una contrazione che converge a un punto fisso (iterate come
`marks` che si stringono); le tre palle unitarie (richiamo nucleo 0) per norme diverse in dim finita vs
il fallimento in dim infinita.
**Prolessi (nucleo 9):** completezza → $L^2$ chiuso (base di Hilbert). Domanda→tesi: in dim infinita la
compattezza si perde; è lì che vivono i fenomeni collettivi dei sistemi a molti gradi di libertà.

## Nucleo `09` = id 10 — Hilbert & Fourier: ortogonalità, sviluppo ortogonale  [C]  ★ "il perché di Fourier"
**Idea portante:** Fourier È lo sviluppo su una base ortonormale di $L^2$; Parseval = conservazione
della norma.
**Tappe:** 00 perché; 01 prodotto scalare, ortogonalità, proiezione (best approx); 02 basi
ortonormali, disuguaglianza di Bessel, identità di Parseval; 03 **serie di Fourier** come sviluppo su
$\{e^{inx}\}/\{\sin,\cos\}$; convergenza ($L^2$ vs puntuale, Dirichlet, fenomeno di Gibbs); 04 esempi
(onda quadra, dente di sega) e coefficienti; 05 esercizi multipli (calcola coefficienti; Parseval per
sommare serie numeriche; il PONTE 8↔10 conv. uniforme→Fourier); 06 senso + prolessi.
**FIGURE:** `func2d` di somme parziali di Fourier di un'onda quadra (Gibbs visibile!); proiezione
ortogonale come `field2d`/`contour`. Aggancio conv. uniforme (nucleo 8).
**Prolessi (nucleo 10):** $L^2$ = spazio degli stati QM; $|\psi\rangle=\sum c_n|n\rangle$; Parseval =
conservazione probabilità. Modi di Fourier diagonalizzano i sistemi invarianti per traslazione (fononi,
StatMech). Domanda→tesi: la base "giusta" (autostati) diagonalizza l'evoluzione; ETH = affermazione
sugli elementi di matrice degli osservabili in quella base.

## Nucleo `10` = id 11 — Lebesgue & $L^p$  [+]  (oltre agosto)
**Idea:** perché serve Lebesgue (Riesz–Fischer: $L^2$ completo). Misura essenziale, convergenza
dominata, spazi $L^p$. Tappe brevi (è [+]). FIGURE: minime (partizione dominio vs codominio).
**Prolessi (nucleo 11):** teoria della misura = linguaggio delle probabilità sui grandi sistemi (Gibbs).

---

# MOVIMENTO III — Analisi complessa (metà esame di Metodi, peso 50%)

## Nucleo `11` = id 12 — Olomorfe, Cauchy–Riemann  [C]  ★ "il miracolo della derivabilità complessa"
**Idea portante:** derivabilità complessa (una condizione, non due) impone rigidità totale.
**Tappe:** 00 perché (Metodi 50/50, complessa metà); 01 derivata complessa e **Cauchy–Riemann**
($u_x=v_y,\ u_y=-v_x$); 02 conseguenze: **armoniche coniugate** ($u,v$ armoniche; costruire $v$ da $u$
— trabocchetto d'esame in crescita con Caprini); 03 funzioni elementari complesse ($e^z$, $\log$
polidromo, potenze, tagli); 04 mappe conformi (cenno, EM 2D); 05 esercizi multipli (verifica CR;
costruisci coniugata; tagli e rami); 06 senso + prolessi.
**FIGURE:** `field2d` del gradiente di $u$ e $v$ (ortogonali → mappe conformi); `contour` di parte
reale/immaginaria (armoniche coniugate = famiglie ortogonali di livelli).
**Prolessi (nucleo 12):** parti reale/immag olomorfe = armoniche coniugate → potenziale 2D (EM, flusso
ideale, mappe conformi). Domanda→tesi: analiticità come rigidità ⟷ non-analiticità = transizioni di
fase (Lee–Yang).

## Nucleo `12` = id 13 — Teorema e formula di Cauchy; analiticità = serie  [C]
**Idea portante:** l'integrale su un cammino chiuso di una olomorfa è zero; il valore dentro è
determinato dal bordo.
**Tappe:** 00 perché; 01 **teorema di Cauchy** ($\oint_\gamma f=0$ per $f$ olomorfa, dominio semplic.
connesso — aggancio al buco del nucleo 4/6!); 02 **formula di Cauchy** $f(z_0)=\frac{1}{2\pi i}\oint
\frac{f(z)}{z-z_0}dz$; 03 conseguenze: formula per le derivate, **analiticità** (olomorfa ⇒ sviluppabile
in serie di potenze), Liouville, teorema fondamentale dell'algebra; 04 **serie di Laurent** (anelli,
parte principale) — preludio ai residui; 05 esercizi multipli; 06 senso + prolessi.
**FIGURE:** `field2d`/`rings` di un contorno attorno o meno a una singolarità (aggancio vortice nucleo
4); `contour` del modulo $|f|$.
**Prolessi (nucleo 13):** formula di Cauchy → propagatori, relazioni di dispersione (Kramers–Kronig =
causalità come analiticità). Domanda→tesi: funzioni di risposta analitiche nel semipiano sup. PERCHÉ
causali; poli = modi collettivi.

## Nucleo `13` = id 14 — Residui e integrazione per contorni  [C]  ★ "il cavallo da lavoro", 19/19 negli scritti
**Idea portante:** l'integrale è $2\pi i\sum$ residui; ogni polo è un modo, il residuo la sua ampiezza.
**Tappe:** 00 perché (peso massimo d'esame: integrale reale via residui, 4 sottotipi); 01 **residuo**
(coeff. $a_{-1}$ di Laurent; formule per poli semplici e multipli); 02 **teorema dei residui**; 03 **i
4 sottotipi d'esame di integrali reali**: (a) razionali su $\mathbb R$; (b) $\int R(\cos,\sin)$ sul
cerchio; (c) $\int f(x)e^{ikx}$ (Jordan, chiusura semipiano — TRABOCCHETTO segno/semipiano per $k\gtrless0$);
(d) tagli/funzioni polidrome (contorno a buco della serratura); 04 poli sull'asse (valore principale,
mezzo residuo); 05 esercizi multipli su tutti i sottotipi; 06 senso + prolessi.
**FIGURE:** `rings`/`field2d` del contorno (semicerchio, keyhole) con poli come `marks`; scelta del
semipiano.
**Prolessi (nucleo 14):** residui = propagatori, funzioni di Green, integrali di anello (QM); somme di
Matsubara = somme di residui (StatMech T finita). Domanda→tesi: chiudere il contorno "dalla parte
giusta" = scegliere causalità; poli sullo spettro = tempi di rilassamento (decoerenza).

## Nucleo `14` = id 15 — Continuazione analitica, funzioni speciali (Gamma)  [+]
**Idea:** l'analiticità è rigida → un valore locale determina il tutto → continuazione. $\Gamma$,
riflessione, regolarizzazione zeta. [+], tappe brevi. FIGURE: `contour` di $|\Gamma|$ coi poli.
**Prolessi (nucleo 15):** continuazione in $\beta$/dimensione (zeta, $\Gamma$) doma gli infiniti
(Casimir). Domanda→tesi: continuare la funzione di partizione rivela le transizioni (zeri di Lee–Yang).

---

# MOVIMENTO IV — Funzionale e Metodi applicati (l'altra metà di Metodi, 50%)

## Nucleo `15` = id 16 — Distribuzioni & Fourier rigorosa: la delta  [C]  ★ Green con δ', 4° esercizio
**Idea portante:** la $\delta$ non è una funzione, è un funzionale; la trasformata di Fourier scambia
posizione e impulso.
**Tappe:** 00 perché (funzionale = metà Metodi; TRABOCCHETTO Green con **δ'**); 01 **distribuzioni**
(funzionali su funzioni test; $\delta$, derivata distribuzionale, $\delta'$); 02 **trasformata di
Fourier** rigorosa (su $L^1$, $L^2$/Plancherel, temperate); proprietà (derivata↔moltiplicazione,
convoluzione↔prodotto); 03 **funzioni di Green per EDO** ($\mathcal L G=\delta$; il caso δ' con
condizioni di giunzione sui salti — trabocchetto n.1); 04 **EDP per separazione + Fourier** (calore/
onde, ponte 16↔10); 05 esercizi multipli (Green EDO con δ e δ'; Fourier con chiusura contorno — segno
del residuo, trabocchetto n.3; EDP); 06 senso + prolessi.
**FIGURE:** `func2d` di approssimanti della $\delta$ (gaussiane che si stringono); `func2d` di una
funzione di Green; coppia Fourier posizione↔impulso (indeterminazione = proprietà della trasformata).
**Prolessi (nucleo 16):** $\delta$ = sorgente puntiforme, normalizzazione stati del continuo; Fourier
scambia $x\leftrightarrow p$ (indeterminazione È proprietà della trasformata); carica puntiforme = δ,
potenziale = Green di Laplace (EM). Domanda→tesi: distribuzioni = linguaggio di risposte e correlazioni
$\langle\phi(x)\phi(y)\rangle$ (StatMech dei campi).

## Nucleo `16` = id 17 — Operatori & spettrale, Sturm–Liouville, Green  [+]  ★ spettro 19/19 (ma marcato [+] nello scheletro; valutare [C])
**Idea:** osservabili = operatori autoaggiunti; spettro = valori misurabili; Green risolve con sorgente.
**NB CALIBRAZIONE:** la mappa-argonauta dà "spettro di operatori 19/19" e "proiettori spettrali con
autovettori non ortonormali" come TRABOCCHETTO n.2 → in pratica è peso d'esame ALTO. Lo scheletro lo
marca [+]; da scrivere comunque con cura (è mezzo esame funzionale). Tappe: 00 perché; 01 operatori
lineari, autovalori/autovettori, aggiunto, autoaggiunto; 02 **teorema spettrale** (base ortonormale di
autovettori; proiettori; TRABOCCHETTO base NON ortonormale → cambio base esplicito, non $|v\rangle\langle v|$);
03 **Sturm–Liouville** (problema ai limiti, autofunzioni ortogonali); 04 **funzione di Green via
spettro** ($G=\sum \phi_n\phi_n/\lambda_n$); 05 esercizi multipli; 06 senso + prolessi.
**FIGURE:** `func2d` di autofunzioni Sturm–Liouville (modi di una corda); spettro come `marks` su una retta.
**Prolessi (nucleo 17):** osservabili = operatori autoaggiunti; spettro = misurabili; statistica dei
livelli (GOE/GUE) distingue integrabile da caotico → **ETH** è ipotesi sullo spettro e sugli autostati
di sistemi caotici. (Questo nucleo tocca la tesi PIÙ DA VICINO.)

## Nucleo `17` = id 18 — EDP della fisica: Laplace, calore, onde  [+]
**Idea:** le tre EDP archetipe risolte con gli strumenti costruiti (Fourier, Green, separazione).
Tappe: 00 perché; 01 **Laplace/Poisson** (armoniche, Green, EM); 02 **calore** (semigruppo, gaussiana,
irreversibilità); 03 **onde** (d'Alembert, propagazione); 04 metodo di separazione + Fourier come filo
comune; 05 esercizi; 06 senso + prolessi. FIGURE: `surface3d` di soluzioni (gaussiana del calore che si
allarga; modo di membrana); `field2d` del gradiente per Laplace.
**Prolessi (nucleo 18):** calore = diffusione/irreversibilità (freccia del tempo, StatMech); Laplace =
equilibrio; onde = propagazione. Domanda→tesi: l'equazione del calore come limite macroscopico di
dinamica reversibile (il cuore del problema Loschmidt → decoerenza/ETH).

---

## Workflow di scrittura (template — collaudato sul nucleo 05)
Per ogni nuovo nucleo `NN`:
1. `cp nuclei/_template-nucleo.html nuclei/NN-nome.html` (il template ha già motore, CSS, tutte le
   funzioni-blocco incl. `sectionPlot`, deep-link, e i marcatori `__BANNER__` `__NN__` `/*__TAPPE__*/`
   fra `var TAPPE = [` e `];` — il `];` è PRESERVATO, non rimuoverlo).
2. Sostituisci `__BANNER__` (titolo nucleo), `__NN__` (numero a 2 cifre), e `/*__TAPPE__*/` col
   contenuto TAPPE (gli oggetti-tappa separati da virgola; NON includere `[` o `]` esterni).
3. `node 00-capitano/scripts/verifica-nucleo.js nuclei/NN-nome.html` → deve dare 0 errori.
   Trappole KaTeX/JS: mai `<` `>` nudi in formule; `«»` fuori da `\text{}`; niente `\*`; attento a
   `${` (interpolazione anche in raw). **TRAPPOLA RICORRENTE (nuclei 05, 06):** i campi
   `title/label/tag/src/dove` sono a **singoli apici** — un apostrofo/primo matematico dentro (es.
   `$y'$`, `$x''$`, `$f'$`) CHIUDE la stringa e rompe il JS. Nei campi a singoli apici usa
   `^{\prime}` (KaTeX lo rende identico); gli apostrofi grezzi vanno bene SOLO nei corpi `R\`…\``.
4. Prova d'occhio: screenshot Chrome headless su `#tappa` con figura; verifica le figure.
5. `python mappa-percorso.py` + `python carta-rotte.py` (mappa e carta crescono da sole).
6. Checkpoint: `00-capitano/diario-di-bordo.md` + `snapshot-corrente.md`.

## Ordine di scrittura (per questo run autonomo)
Spina [C] prima, in ordine di dipendenza e peso d'esame:
1. `05` Teoremi integrali (chiude Movimento I, vertice AV).
2. `06` EDO qualitative (punto debole; terreno nativo `phase`).
3. `07` Serie di funzioni · `08` Spazi/Banach · `09` Hilbert & Fourier (ponte, cuore concettuale).
4. `11` Olomorfe · `12` Cauchy · `13` Residui (metà Metodi, complessa).
5. `15` Distribuzioni/Fourier · `16` Operatori/spettrale (l'altra metà; il 16 tocca la tesi).
6. I `[+]`: `10` Lebesgue · `14` Continuazione · `17` EDP — più leggeri, oltre agosto.

Dopo OGNI nucleo: `verifica-nucleo.js` verde → `mappa-percorso.py` → `carta-rotte.py` → checkpoint in
`00-capitano/diario-di-bordo.md` e `snapshot-corrente.md`.

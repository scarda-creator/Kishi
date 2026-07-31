# Saper-fare 02 · Differenziabilità in un punto (con parametro)

> **SOSTANZA DA VERIFICARE — generata autonomamente** (Demiurgo Accademico, 2026-07-13). Correttezza
> matematica da ratificare da Giuseppe. Pool mappa #9 · freq **5/11 e 6/10** · priorità **ALTA** (punto
> debole dichiarato).

## La firma

È spesso l'**Es.1**. Riconoscibile: una funzione $f:\mathbb{R}^2\to\mathbb{R}$ (a volte $\mathbb{R}^3$)
definita **a tratti** — una formula con un quoziente $\dfrac{\text{numeratore}}{(x^2+y^2)^\alpha}$ per
$(x,y)\neq(0,0)$ e $f(0,0)=0$ a parte — con un **parametro** $\alpha$ o $\beta$, e la richiesta a catena:
"studiare continuità, derivabilità, differenziabilità, derivate direzionali (al variare del parametro)".
Parole-spia: *continua, derivabile, differenziabile, derivate direzionali, al variare di $\alpha$*.

Cosa NON confondere: se invece c'è un'equazione $F(\cdots)=0$ da risolvere per una variabile, è Dini (03).
Qui la funzione è **data esplicitamente** e il gioco è la gerarchia locale nell'origine.

## L'idea

La gerarchia è a senso unico:
$$C^1\text{ vicino a }0\ \Longrightarrow\ \text{differenziabile in }0\ \Longrightarrow\ \begin{cases}\text{continua in }0\\ \exists\,\partial_\nu f(0)\ \forall\nu,\ \text{e } \partial_\nu f=\nabla f\cdot\nu\end{cases}$$
e **nessuna** freccia si inverte. Le tre proprietà si testano con tre limiti distinti, tutti nell'origine:

- **Continuità:** $\lim_{(x,y)\to0}f=f(0)=0$. Si prova stimando $|f|\le C\rho^{p}$ con $\rho=\sqrt{x^2+y^2}$,
  usando $|x|,|y|\le\rho$: se $p>0$, continua.
- **Derivabilità (parziali):** $f_x(0)=\lim_{h\to0}\frac{f(h,0)}{h}$, $f_y(0)=\lim_{k\to0}\frac{f(0,k)}{k}$.
  Quasi sempre $f$ è nulla sugli assi ⇒ $\nabla f(0)=(0,0)$.
- **Differenziabilità:** il resto normalizzato tende a zero,
  $$\lim_{(x,y)\to0}\frac{f(x,y)-f(0)-\nabla f(0)\cdot(x,y)}{\sqrt{x^2+y^2}}=0.$$
  Con $\nabla f(0)=0$ è $\lim f/\rho=0$: una stima $|f|\le C\rho^{q}$ con $q>1$ la dà, un limite non nullo
  lungo una retta $y=mx$ la nega.

Con il quoziente $(x^2+y^2)^\alpha$, tutto diventa aritmetica di esponenti: se il numeratore si comporta come
$\rho^{p}$, allora $|f|\sim\rho^{p-2\alpha}$ per la continuità e $|f|/\rho\sim\rho^{p-2\alpha-1}$ per la
differenziabilità. Le **soglie** del parametro escono da $p-2\alpha>0$ e $p-2\alpha-1>0$: due soglie diverse.

## La mossa

1. **Continuità.** Stima il numeratore in potenze di $\rho$ (sviluppi notevoli: $\sin t\sim t$,
   $1-\cos t\sim t^2/2$, $e^t-1\sim t$, $\log(1+t)\sim t$). Ottieni $|f|\le C\rho^{p-2\alpha}$: continua sse
   $p-2\alpha>0$.
   > **Trappola** (`20230504`): la soglia di continuità ($\beta<5/2$) è **diversa** da quella di
   > differenziabilità ($\beta<2$). Non riusare la stessa disuguaglianza per entrambe.
2. **Derivabilità.** Calcola $f(h,0)$ e $f(0,k)$ **dalla definizione** (rapporto incrementale), non con le
   regole di derivazione.
   > **Trappola** (`10feb22`, `14feb25`): se $f$ è definita a tratti con $f(0,0)=0$ separato, le regole della
   > catena **non valgono in $0$** — la formula esplicita esiste solo fuori dall'origine. Sempre dal limite.
3. **Differenziabilità.** Con $\nabla f(0)=(0,0)$, studia $f/\rho$ in polari. Se $|f|/\rho\le C\rho^{q}$ con
   $q>0$ **uniformemente in $\theta$**: differenziabile. Altrimenti cerca un controesempio lungo $y=x$ o
   $y=mx$: se il limite dipende da $\theta$ o è $\neq0$, non differenziabile.
   > **Trappola** (`20230123`): $f$ può essere **derivabile ma non differenziabile** — lungo $y=x$ il resto
   > normalizzato tende a una costante $\neq0$. È il caso più frequente dell'esame: parziali esistenti non
   > bastano.
   > **Trappola** (in polari): $|f|\le C\rho^{q}$ vale solo se $C$ **non dipende da $\theta$**. Verifica che la
   > stima sia uniforme, altrimenti è illusoria.
4. **Derivate direzionali.** $\partial_\nu f(0)=\lim_{t\to0}\frac{f(t\nu_1,t\nu_2)}{t}$. Se compare $|t|$ al
   denominatore con esponente netto $0$, il limite **non esiste** (destra $\neq$ sinistra). Ricorda:
   $\lim_{t\to0}\frac{|t|^\alpha}{t}$ vale $0$ se $\alpha>1$, $\pm1$ (non esiste unico) se $\alpha=1$, diverge
   se $\alpha<1$.
   > **Trappola** (concettuale, `20220622`): la formula $\partial_\nu f=\nabla f\cdot\nu$ vale **solo se $f$ è
   > differenziabile**. Se non lo è, le direzionali possono esistere ma non essere lineari in $\nu$ — vanno
   > calcolate una per una dalla definizione.

## Un esame, per intero

**Prova 22/06/2022, Es. 1** (`20220622`). $f(x,y)=\dfrac{|y|^{\alpha}\tan(x^4)}{(x^2+y^2)^{2}}$ per
$(x,y)\neq(0,0)$, $f(0,0)=0$, con $\alpha>0$. Studiare continuità, derivabilità, differenziabilità e derivate
direzionali al variare di $\alpha$.

**Continuità.** $\tan(x^4)\sim x^4$ vicino a $0$, e $|x^4|\le\rho^4$, $|y|^\alpha\le\rho^\alpha$,
$(x^2+y^2)^2=\rho^4$. Quindi
$$|f|\le\frac{\rho^{\alpha}\cdot\rho^{4}}{\rho^{4}}=\rho^{\alpha}\xrightarrow{\rho\to0}0\quad\text{sse }\alpha>0.$$
Continua per ogni $\alpha>0$ (l'ipotesi del problema).

**Derivabilità.** Sugli assi: $f(x,0)=\dfrac{0\cdot\tan(x^4)}{x^4}=0$ e $f(0,y)=\dfrac{|y|^\alpha\cdot0}{y^4}=0$.
Dunque $f_x(0,0)=f_y(0,0)=0$ e $\nabla f(0,0)=(0,0)$ per ogni $\alpha>0$.

**Differenziabilità.** Studio $\dfrac{|f|}{\rho}$:
$$\frac{|f|}{\rho}\le\frac{\rho^{\alpha}\cdot\rho^{4}}{\rho^{4}\cdot\rho}=\rho^{\alpha-1}\xrightarrow{\rho\to0}0\quad\text{sse }\alpha>1.$$
Differenziabile sse $\alpha>1$. Per $0<\alpha\le1$: **non** differenziabile pur essendo derivabile — la soglia
della differenziabilità ($\alpha>1$) è più alta di quella della continuità ($\alpha>0$).

**Derivate direzionali.** Lungo $\nu=(\nu_1,\nu_2)$ con $\nu_1\nu_2\neq0$:
$$\frac{f(t\nu_1,t\nu_2)}{t}=\frac{|t\nu_2|^{\alpha}\tan(t^4\nu_1^4)}{(t^2)^{2}\,t}\sim\frac{|t|^{\alpha}|\nu_2|^{\alpha}\cdot t^{4}\nu_1^{4}}{t^{4}\cdot t}=|t|^{\alpha}\,\frac{|\nu_2|^{\alpha}\nu_1^{4}}{t}.$$
Netto: $\frac{|t|^{\alpha}}{t}\to0$ sse $\alpha>1$. Quindi per $\alpha>1$ tutte le direzionali esistono (e
valgono $0=\nabla f\cdot\nu$, coerente con la differenziabilità); per $\alpha\le1$ non esistono lungo le
direzioni con $\nu_1\nu_2\neq0$ (destra $\neq$ sinistra), pur esistendo quelle assiali. $\blacksquare$

Nota: le tre soglie ($\alpha>0$ continua, $\alpha>1$ differenziabile e direzionali) sono **scalate**: la
differenziabilità è la condizione più forte, come prevede la gerarchia.

## Le varianti

La forma del **numeratore** decide tutto: fissa l'esponente $p$ (comportamento $\sim\rho^{p}$), e da $p$ e da
$\alpha$ escono le soglie. Le famiglie si distinguono per *com'è fatto il numeratore* e *se c'è un parametro*.

**Numeratore prodotto di potenze / valori assoluti, con parametro.**

- `20220622` Es.1 (svolto): $\frac{|y|^\alpha\tan(x^4)}{(x^2+y^2)^2}$ — cont. sse $\alpha>0$, diff. sse $\alpha>1$.
  *Riconosci:* potenze pure e $|\cdot|$. *Cosa cambia:* $p=\alpha+4$, denominatore $\rho^4$; le soglie sono
  pura aritmetica di esponenti.

**Numeratore con sviluppi notevoli** ($\sin t\sim t$, $1-\cos t\sim\frac{t^2}2$, $e^t-1\sim t$, $\log(1+t)\sim t$).

- `20230504` Es.1: $\frac{\sin y\,(1-\cos xy)}{(x^2+y^2)^\beta}$ — cont. sse $\beta<\frac52$, diff. sse $\beta<2$.
- `05mar24` Es.1: $\frac{xy\sin y\,(1-\cos x)}{(x^2+y^2)^\alpha}$ — cont. sse $\alpha<2$, diff. sse $\alpha<\frac52$.
- `10feb22` Es.1: $\frac{e^{x^4y^2}-1}{(x^2+y^2)^a}+xy$ — via $\frac{e^t-1}t\to1$ ci si riduce a
  $\frac{x^4y^2}{(x^2+y^2)^a}$: cont. sse $a<3$, diff. sse $a<\frac52$.
  *Riconosci:* funzioni trascendenti al numeratore. *Cosa cambia:* **prima** sviluppi il numeratore per leggere
  $p$, **poi** conti le soglie; l'errore è saltare lo sviluppo e sbagliare $p$.

**Due termini con soglie diverse** (`20230621` Es.1): $\frac{x^2\log(1+x^2y^2)}{(x^2+y^2)^\beta}+|xy|^\beta$.
*Riconosci:* somma di due quozienti con lo stesso parametro. *Cosa cambia:* studi i due addendi
**separatamente** (primo diff. sse $\beta<\frac52$, secondo sse $\beta>\frac12$) e **intersechi**:
$\frac12<\beta<\frac52$. La condizione più restrittiva vince.

**Denominatore a esponente FISSO (nessun parametro) — il caso "derivabile ma non differenziabile".**

- `20230123` Es.1: $\frac{(x^2+2xy)\sin(xy)}{(x^2+y^2)^{3/2}}$ — continua, ma lungo $y=x$ il resto normalizzato
  $\to3\neq0$: non differenziabile.
- `20230907` Es.1: $\frac{x^4+y^4-\sin(xy^2)}{x^2+y^2}$ — continua, parziali nulle, ma il limite del resto
  dipende da $\theta$: non differenziabile, pur avendo tutte le direzionali.
  *Riconosci:* niente parametro da ottimizzare, esponente al denominatore già scelto. *Cosa cambia:* non cerchi
  soglie — cerchi il **controesempio** lungo $y=mx$ che nega la differenziabilità.

**Gradiente NON nullo nell'origine** (`14feb25` Es.2): $\frac{\sin(x^3y^2)+x^3+2y^3}{x^2+y^2}$, $f(0,0)=0$.
*Riconosci:* le parziali sugli assi **non** sono zero ($f_x(0,0)=1$, $f_y(0,0)=2$, da $\frac{h^3}{h^3}$ e
$\frac{2k^3}{k^3}$). *Cosa cambia:* il resto va scritto col **gradiente completo**
$f-f_x\,x-f_y\,y$, non con $\nabla f=0$ come nei casi standard.

**Punto diverso dall'origine** (`19giu24`): stessa procedura, ma il rapporto incrementale è centrato in $(5,0)$
o $(0,1)$. *Cosa cambia:* solo il centro; l'aritmetica delle soglie è identica.

**Funzione ovunque $C^1$ (nessuna patologia)** (`22gen24` Es.1): $\sqrt{x^2+y^2+z^2+1}+x-z$, differenziabile
su tutto $\mathbb{R}^3$, $\nabla f(0)=(1,0,-1)$, $\partial_\nu f=\nu_1-\nu_3$. *Riconosci:* argomento della
radice sempre $>0$, composizione liscia. *Cosa cambia:* il test serve solo a **giustificare Dini** al punto
successivo (ponte con 03) — nessuna soglia, nessun controesempio.

## Collaudo

1. $f=\dfrac{|y|^\alpha\tan(x^4)}{(x^2+y^2)^2}$: per quali $\alpha$ è differenziabile in $0$ e per quali solo
   continua? *(Risposta: differenziabile sse $\alpha>1$; continua sse $\alpha>0$; nella fascia $0<\alpha\le1$
   continua e derivabile ma non differenziabile.)*
2. $f=\dfrac{\sin(x^3y^2)+x^3+2y^3}{x^2+y^2}$, $f(0,0)=0$: quanto valgono $f_x(0,0)$ e $f_y(0,0)$? *(Risposta:
   $f_x=1$, $f_y=2$, dal rapporto incrementale $h^3/h^3$ e $2k^3/k^3$; trappola evitata: non usare le regole di
   derivazione.)*
3. Una funzione ha tutte le derivate direzionali in $0$: è differenziabile lì? *(Risposta: no — l'esistenza di
   tutte le direzionali non implica differenziabilità né continuità; serve il limite del resto normalizzato.)*

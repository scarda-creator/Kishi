# Saper-fare 10 · Campi conservativi, potenziale, forme esatte

> **SOSTANZA DA VERIFICARE — generata autonomamente** (Demiurgo Accademico, 2026-07-13). Correttezza
> matematica da ratificare da Giuseppe. Pool mappa #8 · freq **7/11 e 3/10** · spesso il sotto-punto che
> **precede** Stokes nell'Es.4 (se il campo è conservativo, la circuitazione è gratis).

## La firma

"Stabilire se $F$ è conservativo", "trovare il parametro $a$ che rende $F$ conservativo", "calcolare il
potenziale / la primitiva", "trovare $\Psi$ affinché la forma $\omega$ sia esatta", "calcolare il lavoro
lungo una curva". Parole-spia: *conservativo, potenziale, primitiva, forma differenziale esatta,
irrotazionale, semplicemente connesso*.

Cosa NON confondere: $\operatorname{rot}F=0$ (irrotazionale, condizione per la conservatività) con
$\operatorname{div}F=0$ (solenoidale, riguarda il flusso, 08). E soprattutto: **irrotazionale $\neq$
conservativo** se il dominio ha buchi.

## L'idea

$F$ è **conservativo** se esiste un potenziale $U$ con $F=\nabla U$; allora il lavoro dipende solo dagli
estremi:
$$\int_\gamma F\cdot T\,ds=U(B)-U(A),\qquad\text{e }\oint F\cdot T\,ds=0\text{ su ogni curva chiusa}.$$
La condizione locale necessaria è $\operatorname{rot}F=0$ (in 2D: $\partial_yF_1=\partial_xF_2$). È anche
**sufficiente** — ma solo se il dominio è **semplicemente connesso** (senza buchi): lì ogni curva chiusa si
contrae a un punto e Stokes forza a $0$ la circuitazione. Se il dominio ha un buco (es.
$\mathbb{R}^2\setminus\{0\}$), esistono campi irrotazionali **non** conservativi: la loro circuitazione
attorno al buco è un multiplo non nullo di una costante caratteristica. Ragione: la curva che avvolge il buco
non borda alcuna superficie contenuta nel dominio, quindi Stokes non si applica.

## La mossa

1. **Calcola $\operatorname{rot}F$** (2D: $\partial_xF_2-\partial_yF_1$). Se $\neq0$: **non** conservativo,
   fine (per il lavoro userai Stokes/Green, 09). Se $=0$: prosegui.
2. **Guarda il dominio.** Se è semplicemente connesso e $\operatorname{rot}F=0$: conservativo.
   > **Trappola** (`20230907`): $\operatorname{rot}F=0$ **non basta** su un dominio bucato. Con
   > $\mathbb{R}^2\setminus\{0\}$, un campo irrotazionale può avere circuitazione $\neq0$ attorno all'origine.
   > Verifica sempre la connessione semplice prima di dichiararlo conservativo.
3. **Parametro.** Se c'è un parametro $a$, imponi $\operatorname{rot}F=0$ per trovarne il valore, poi
   costruisci il potenziale.
4. **Costruisci $U$.** Integra $U_x=F_1$ rispetto a $x$ (compare una "costante" $c(y,z)$ funzione delle altre
   variabili); imponi $U_y=F_2$ per determinare $c$; infine $U_z=F_3$.
   > **Trappola** (`b02`): la "costante" d'integrazione dipende dalle **altre variabili** ($c(y,z)$, non un
   > numero). Dimenticarlo perde termini misti.
   > **Trappola** (segno/termini misti, `b01`): quando $F_1$ dipende sia da $x$ sia da $y$, deriva con cura il
   > risultato parziale prima di confrontarlo con $F_2$.
5. **Lavoro.** Se conservativo: $U(B)-U(A)$ (chiuso ⇒ $0$). Se irrotazionale ma su dominio bucato: calcola la
   circuitazione lungo una curva **equivalente** semplice (il cerchio unitario) attorno al buco, poi
   moltiplica per il **numero di giri con segno** della curva data.
   > **Trappola** (verso): un giro **orario** cambia il segno; una parametrizzazione può fare più giri —
   > contali. In `20230907` il cerchio antiorario dà $-2\pi$, ma la curva $\gamma(t)=(\sin2t,\cos2t)$,
   > $t\in[0,\pi]$, fa un giro **orario**, quindi il lavoro è $+2\pi$.

## Un esame, per intero

**Prova 07/09/2023, Es. 2** (`20230907`). $F=\Bigl(\dfrac{-\alpha x+y}{x^2+y^2},\ \dfrac{\alpha y-x}{x^2+y^2}\Bigr)$
su $\mathbb{R}^2\setminus\{0\}$. (i) Per quale $\alpha$ è irrotazionale? (ii) È conservativo? (iii) Lavoro
lungo il cerchio unitario antiorario, e lungo $\gamma(t)=(\sin2t,\cos2t)$, $t\in[0,\pi]$.

**(i) Irrotazionalità.** Serve $\partial_xF_2=\partial_yF_1$. Con denominatore comune $(x^2+y^2)$, il conto
(quoziente) dà che i termini si bilanciano **solo per $\alpha=0$**: per $\alpha=0$,
$F=\Bigl(\dfrac{y}{x^2+y^2},\ \dfrac{-x}{x^2+y^2}\Bigr)$ e si verifica
$\partial_yF_1=\dfrac{(x^2+y^2)-y\cdot2y}{(x^2+y^2)^2}=\dfrac{x^2-y^2}{(x^2+y^2)^2}=\partial_xF_2$. Dunque
irrotazionale **sse $\alpha=0$**.

**(ii) Conservativo?** No, nemmeno per $\alpha=0$. Il dominio $\mathbb{R}^2\setminus\{0\}$ **non è
semplicemente connesso** (buco nell'origine): $\operatorname{rot}F=0$ non implica conservatività. Lo si vede
dal punto seguente, dove la circuitazione attorno all'origine è $\neq0$.

**(iii) Lavoro sul cerchio unitario antiorario.** $\gamma(t)=(\cos t,\sin t)$, $t\in[0,2\pi]$,
$\gamma'=(-\sin t,\cos t)$; su $x^2+y^2=1$ il campo è $F=(\sin t,-\cos t)$. Allora
$$\oint F\cdot T\,ds=\int_0^{2\pi}(\sin t,-\cos t)\cdot(-\sin t,\cos t)\,dt=\int_0^{2\pi}(-\sin^2t-\cos^2t)\,dt=\int_0^{2\pi}(-1)\,dt=-2\pi.$$
La circuitazione attorno al buco è $-2\pi\neq0$: conferma la non-conservatività.

**Lungo $\gamma(t)=(\sin2t,\cos2t)$, $t\in[0,\pi]$.** È il cerchio unitario percorso **una volta in senso
orario** (all'aumentare di $t$ il punto gira in verso opposto a $(\cos,\sin)$). Un giro orario = $-1$ giri
antiorari, quindi
$$L=(-1)\cdot(-2\pi)=\boxed{+2\pi}.$$
$\blacksquare$

Nota di metodo: irrotazionale ma non conservativo è **il** trabocchetto del tipo. La circuitazione non nulla
attorno all'origine è la firma del dominio bucato; una volta nota su una curva-campione, si trasporta a
qualunque curva contando i giri con segno.

## Le varianti

L'asse decisivo è il **dominio**: semplicemente connesso (allora $\operatorname{rot}F=0$ basta) oppure bucato
(allora no, e serve la circuitazione-campione). Il secondo asse è **cosa si cerca**: verifica, il parametro $a$,
una funzione incognita $f$, la $\Psi$ per l'esattezza, oppure il lavoro.

**Dominio semplicemente connesso — verifica diretta + potenziale.**

- `20220706` Es.4: $\operatorname{rot}F=(0,2z-2az,0)$; conservativo sse $a=1$; $U=xy^2+xy+xz^2$.
- `20230504` Es.4 (verifica + costruzione): $U=\frac{x^2}2+xe^y+xz^2$.
  *Cosa cambia:* $\operatorname{rot}F=0$ su dominio senza buchi ⇒ costruisci $U$ integrando $U_x=F_1$, poi
  imponendo $U_y=F_2$, $U_z=F_3$ (la "costante" dipende dalle **altre variabili**).

**Trovare il parametro / la funzione che rende conservativo.**

- **Parametro $a$** (`22gen24` Es.3: $F=(2x\cos(x^2+y)+axy,\ \cos(x^2+y)+x^2+1)$ ⇒ $a=2$,
  $U=\sin(x^2+y)+x^2y+y+k$; `20230705` Es.3 ⇒ $a=-1$, $U=-\frac{y}{1+x^2}$).
- **Funzione incognita $f(y)$** (`20230504` Es.4: $F=(x+f(y)+z^2,\ xf(y),\ 2xz)$;
  $\operatorname{rot}F=(0,0,f-f')$, nullo sse $f'=f$, cioè $f(y)=e^y$).
  *Riconosci:* c'è un'incognita nel campo. *Cosa cambia:* imponi $\operatorname{rot}F=0$; con un parametro è
  un'equazione algebrica, con una funzione è una **piccola EDO** ($f'=f$).

**Forma differenziale esatta con $\Psi$** (`21lug25` Es.5): $\omega=(z-2y)dx+(z-2x)dy+(x+y+\Psi(y))dz$; le
condizioni d'esattezza (le tre $\partial_iF_j=\partial_jF_i$) danno $\Psi'(y)=0$ ⇒ $\Psi$ costante;
$U=xz-2xy+yz$. *Riconosci:* linguaggio di 1-forme, incognita $\Psi$ in una componente. *Cosa cambia:* imponi
**tutte** le uguaglianze incrociate delle componenti; una di esse determina $\Psi$.

**Dominio BUCATO — irrotazionale $\neq$ conservativo** (`20230907` Es.2 svolto): su $\mathbb{R}^2\setminus\{0\}$,
per $\alpha=0$ il campo è irrotazionale ma **non** conservativo; circuitazione attorno all'origine $-2\pi$.
*Riconosci:* denominatore $x^2+y^2$ (singolarità nell'origine), dominio con un buco. *Cosa cambia:*
$\operatorname{rot}F=0$ non conclude; calcoli la circuitazione su una **curva-campione** (cerchio unitario) e la
trasporti alle altre curve **contando i giri con segno** (un giro orario cambia segno).

**Campo 3D non conservativo ⇒ passa a Stokes** (`19giu24` Es.3): $\operatorname{rot}F=(0,1-3x^2,x^2)\neq0$.
*Cosa cambia:* niente potenziale; per il lavoro usi Stokes (09).

**Lavoro su curva APERTA via potenziale** (`20230210` Es.3: semiellisse da $(2,0)$ a $(-2,0)$,
$L=U(-2,0)-U(2,0)=1-1=0$; `20220124` Es.4-ii non conservativo). *Riconosci:* curva non chiusa, campo
conservativo. *Cosa cambia:* nessun integrale — solo la **differenza di potenziale** agli estremi (su curva
chiusa sarebbe $0$).

## Collaudo

1. $F=\bigl(\tfrac{y}{x^2+y^2},\tfrac{-x}{x^2+y^2}\bigr)$ su $\mathbb{R}^2\setminus\{0\}$: è irrotazionale? è
   conservativo? *(Risposta: irrotazionale sì; conservativo no — dominio bucato; circuitazione attorno a $0$
   vale $-2\pi$ (cerchio antiorario).)*
2. Lo stesso campo lungo $\gamma(t)=(\sin2t,\cos2t)$, $t\in[0,\pi]$: quanto vale il lavoro? *(Risposta: $+2\pi$
   — è un giro orario, segno opposto al cerchio antiorario.)*
3. $F=(x+f(y)+z^2,\ xf(y),\ 2xz)$: quale $f$ lo rende conservativo e qual è il potenziale? *(Risposta:
   $f(y)=e^y$ (da $f'=f$); $U=\tfrac{x^2}{2}+xe^y+xz^2$.)*

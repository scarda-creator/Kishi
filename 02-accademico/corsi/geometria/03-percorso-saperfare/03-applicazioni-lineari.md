# Saper-fare 03 · Applicazioni lineari

> **SOSTANZA DA VERIFICARE — generata in notte autonoma** (Dedalo, 2026-07-12). Correttezza matematica
> da ratificare da svegli (Giuseppe / Demiurgo Accademico).
> Tipo mappa #5 · freq 11/28 · diff 3–4/5 · 2013–2024.

## La firma

Una mappa $f:V\to W$ (spesso $V=W$, un *endomorfismo*) data da una formula, e ti chiede: **matrice
associata** in basi assegnate, $\ker f$, $\operatorname{im}f$, iniettività/suriettività, se è un
isomorfismo, o la matrice dopo un **cambio di base**. Parole-spia: *applicazione/operatore lineare,
nucleo, immagine, matrice associata, isomorfismo, $[f]_B$*. Sotto-caso ricorrente e insidioso: $f$ è un
**operatore su polinomi** ($\mathbb{R}[t]_{\le2}$, $\mathbb{C}_2[t]$), tipicamente con derivate.

Cosa NON confondere: se dopo aver costruito $f$ ti chiede autovalori/diagonalizzabilità, prosegui nel
saper-fare 04. Se $f$ è un *operatore su matrici* con un prodotto scalare $\langle A,B\rangle=\operatorname{tr}(A^\top B)$
e chiede "simmetrico/isometria", è il 09.

## L'idea

Una mappa lineare è **completamente determinata da cosa fa a una base**: se conosci $f(e_1),\dots,f(e_n)$,
conosci $f$ ovunque per linearità. La **matrice associata** $[f]_{B\to C}$ è esattamente questo, incolonnato:
la $j$-esima colonna sono le **coordinate di $f(e_j)$ rispetto alla base $C$** del codominio. Da lì tutto è
lettura di quella matrice $A$:
$$\ker f=\{x:Ax=0\},\qquad \operatorname{im}f=\text{spazio-colonna di }A,\qquad \underbrace{\dim\ker f+\dim\operatorname{im}f=\dim V}_{\text{teorema del rango}}.$$
$f$ è iniettiva $\iff\ker f=\{0\}\iff\operatorname{rk}A=n$; suriettiva $\iff\operatorname{rk}A=\dim W$;
isomorfismo $\iff A$ quadrata invertibile.

## La mossa

1. **Costruisci la matrice.** Fissa la base del dominio (di solito la canonica, o $1,t,t^2$ per i polinomi).
   Applica $f$ a ciascun vettore base, esprimi il risultato **in coordinate** nella base del codominio, e
   mettilo **in colonna**.
   > **Trappola** (errore classico di cambio base): le colonne di $[f]_B$ sono $f(e_j)$ *in coordinate
   > rispetto a $B$*, non $f(e_j)$ scritto in coordinate standard, se $B$ non è la canonica. Nella canonica
   > coincidono; appena la base è un'altra, coordinatizza.
2. **$\ker$ e non-isomorfismo a colpo d'occhio.** Se due colonne di $A$ sono **proporzionali** (o una è
   nulla), $A$ è singolare → $f$ non è isomorfismo, e hai già un vettore di $\ker$ dalla dipendenza. Altrimenti
   risolvi $Ax=0$.
3. **$\operatorname{im}$:** una base è data dalle colonne pivot di $A$ (le colonne indipendenti). $\dim\operatorname{im}=\operatorname{rk}A$.
4. **Cambio di base.** Se $A=[f]$ nella base vecchia e $P$ ha per colonne i nuovi vettori base (in coordinate
   vecchie), allora $[f]_{\text{nuova}}=P^{-1}AP$.
5. **Operatori su polinomi:** coordinatizza $p=a+bt+ct^2\leftrightarrow(a,b,c)$, calcola $f(1),f(t),f(t^2)$,
   incolonna. Da quel momento è identico a $\mathbb{R}^3$.
   > **Trappola**: $\ker T\neq\ker T^2$ in generale. Se la domanda è su $T^2$ (o su nilpotenza), calcola la
   > matrice di $T^2=A^2$, non riusare $\ker T$.

## Un esame, per intero

**Appello 21/01/2019, Es. 2** (`prova20190121`, ufficiale). $T:\mathbb{R}[t]_{\le2}\to\mathbb{R}[t]_{\le2}$,
$$T(p)(t)=p(\sqrt2)\,t^2+p(0)\,t+p'(t).$$
Verificare che $T$ non è un isomorfismo e determinare una base di $\ker T$.

**Coordinatizzo** con la base $1,t,t^2$ e calcolo le immagini dei tre vettori base:
- $p=1$: $p(\sqrt2)=1,\ p(0)=1,\ p'=0\Rightarrow T(1)=1\cdot t^2+1\cdot t+0=t+t^2\leftrightarrow(0,1,1)$.
- $p=t$: $p(\sqrt2)=\sqrt2,\ p(0)=0,\ p'=1\Rightarrow T(t)=\sqrt2\,t^2+0+1=1+\sqrt2\,t^2\leftrightarrow(1,0,\sqrt2)$.
- $p=t^2$: $p(\sqrt2)=2,\ p(0)=0,\ p'=2t\Rightarrow T(t^2)=2t^2+0+2t=2t+2t^2\leftrightarrow(0,2,2)$.

Matrice (colonne = immagini in coordinate):
$$A=\begin{pmatrix}0&1&0\\ 1&0&2\\ 1&\sqrt2&2\end{pmatrix}.$$
**La prima e la terza colonna sono proporzionali** ($(0,2,2)=2\,(0,1,1)$), quindi $A$ è singolare: $T$
**non è un isomorfismo**. La dipendenza colonna-3 $=2\cdot$colonna-1 dà subito un elemento di $\ker$:
$2\,e_1-e_3$ nelle coordinate, cioè risolvo $Ax=0$. Da $A$: la 2ª riga dà $x_1+2x_3=0$, la 1ª riga dà
$x_2=0$. Ponendo $x_3=1$: $x_1=-2,\ x_2=0$. **$\ker T=\operatorname{Span}\{-2+t^2\}$**, base $\{-2+t^2\}$
(coordinate $(-2,0,1)$). $\dim\ker T=1$, dunque $\dim\operatorname{im}T=3-1=2$: $T$ non è iniettiva né
suriettiva. $\blacksquare$

## Le varianti

- **Operatore differenziale con ker = EDO** (`Prova23_01_23_sol` Es.4, `Autov_23_11_21`):
  $T(p)=(t+1)p''-2tp'+2p$ su $\mathbb{C}_2[t]$. Due letture equivalenti: (a) *algebrica* — coordinatizza,
  ottieni la matrice $\left(\begin{smallmatrix}2&0&2\\0&0&2\\0&0&-2\end{smallmatrix}\right)$, da cui
  $\ker T=\operatorname{Span}\{t\}$, $\operatorname{im}T=\operatorname{Span}\{1,\,1+t-t^2\}$, autovalori
  $2,0,-2$; (b) *analitica* — $\ker T$ sono i polinomi con $(t+1)p''-2tp'+2p=0$, un'EDO da risolvere nello
  spazio dei polinomi. Per un esame la via (a) è più sicura e veloce.
  > **Trappola** segnalata in mappa: non confondere $\ker T$ con $\ker T^2$; qui gli autovalori includono
  > lo $0$ (c'è nucleo) ma $T$ ha tre autovalori distinti $\Rightarrow$ è diagonalizzabile.
- **Endomorfismo di $\mathbb{R}^3$ da diagonalizzare** (`soluzioniesame20200204` Es.3): $F$ data per
  componenti, se ne costruisce la matrice canonica e si prosegue nel saper-fare 04.
- **Composizione / cambio base**: dati $[f]_B$ e una nuova base, calcolare $[f]_C=P^{-1}[f]_BP$.

## Collaudo

1. $f:\mathbb{R}^3\to\mathbb{R}^3$, $f(x,y,z)=(x+z,\,0,\,x+z)$. Trova $\dim\ker f$ e $\dim\operatorname{im}f$.
   *(Risposta: la matrice ha rango 1 → $\dim\operatorname{im}=1$, $\dim\ker=2$.)*
2. Nell'esame svolto, quanto vale $\dim\operatorname{im}T$ e perché $T$ non è suriettiva? *(Risposta:
   $\dim\operatorname{im}T=2<3$; non suriettiva perché l'immagine è un piano proprio.)*
3. $T(p)=p'$ su $\mathbb{R}[t]_{\le2}$: qual è $\ker T$ e $\ker T^2$? *(Risposta: $\ker T=$ costanti
   $\operatorname{Span}\{1\}$; $\ker T^2=\operatorname{Span}\{1,t\}$ — diversi, come da trappola.)*

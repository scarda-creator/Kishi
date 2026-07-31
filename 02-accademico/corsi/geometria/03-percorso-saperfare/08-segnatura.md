# Saper-fare 08 · Forme bilineari, segnatura, Sylvester

> **SOSTANZA DA VERIFICARE — generata in notte autonoma** (Dedalo, 2026-07-12). Correttezza matematica
> da ratificare da svegli (Giuseppe / Demiurgo Accademico).
> Tipo mappa #8 · freq 7/28 · diff 4/5 · 2016–2024 · **in forte salita**: la *segnatura parametrica* è il
> formato ricorrente di tutti gli esami 2022–2024.

## La firma

Una **forma bilineare simmetrica** $\varphi$ (o la sua forma quadratica $q(x)=\varphi(x,x)$), spesso con un
**parametro $\alpha$**, e la richiesta di: matrice associata, **segnatura**, valori di $\alpha$ per cui è
**degenere**, un **vettore isotropo**, o una base ortonormale generalizzata. Parole-spia: *forma bilineare
simmetrica, segnatura, definita/indefinita, isotropo, degenere, indice di Witt, al variare di $\alpha$*.

Cosa NON confondere: se la forma è **definita positiva** e chiede solo di ortogonalizzare, è il saper-fare 06.
Se la matrice simmetrica va **diagonalizzata come operatore** (autovettori ortonormali), è il 07. Qui la
forma può essere **indefinita**, e il punto è contare i segni, non diagonalizzare metricamente.

## L'idea

Una forma bilineare simmetrica su $\mathbb{R}^n$ è rappresentata da una **matrice simmetrica** $A$ tramite
$\varphi(x,y)=x^\top A y$. La **legge d'inerzia di Sylvester**: comunque scelga una base che diagonalizza la
forma, il numero di coefficienti positivi $p$, negativi $q$, e nulli $r$ è **invariante**. La coppia $(p,q)$
(a volte la terna $(p,q,r)$) è la **segnatura**. Tre modi di leggerla, tutti validi:
- **segni degli autovalori** di $A$ (Sylvester): $p=\#\{\lambda>0\}$, $q=\#\{\lambda<0\}$, $r=\#\{\lambda=0\}$;
- **completamento dei quadrati** della forma quadratica: conta i segni dei coefficienti dei quadrati;
- **minori principali di testa** (criterio di Sylvester per la definitezza; più delicato in presenza di zeri).

Due nozioni da tenere **distinte**:
- **Radicale (nucleo della forma):** $\{x:\varphi(x,y)=0\ \forall y\}=\ker A$. La forma è **degenere** $\iff\ker A\neq\{0\}\iff\det A=0$; $r=\dim\ker A$ è l'indice di nullità.
- **Vettore isotropo:** $x\neq0$ con $q(x)=\varphi(x,x)=0$. Esiste $\iff$ la forma **non è definita** (né
  positiva né negativa). L'indice di Witt (dimensione di un sottospazio totalmente isotropo massimale) è $\min(p,q)$.
> **Trappola** (documentata, `soluzioniesame20200204` Es.5): radicale e isotropi sono cose diverse. Un
> vettore può essere isotropo ($q(x)=0$) senza stare nel radicale ($\varphi(x,\cdot)\not\equiv0$).

## La mossa

1. **Scrivi la matrice simmetrica $A$** della forma. Attento ai termini misti: il coefficiente di $x_ix_j$
   ($i\neq j$) nella forma quadratica si **divide per due** e va in $a_{ij}=a_{ji}$.
2. **Se c'è un parametro $\alpha$:** calcola $\det A(\alpha)$. Gli zeri sono i **valori critici** dove la
   forma degenera e la segnatura può cambiare. La segnatura è **costante su ogni intervallo** tra due valori
   critici (varia con continuità e salta solo quando un autovalore attraversa lo zero).
   > **Trappola** (`prova...`): calcola il **rango prima della segnatura**. Il numero di autovalori nulli
   > ($r$) fissa quanto "spazio" resta per $p+q$; senza il rango puoi sbagliare la partizione.
3. **Segnatura su ciascun tratto:** valuta i segni. In pratica: o gli autovalori (se la matrice è piccola e
   fattorizzabile), o la **regola di Cartesio/Descartes** sui segni del polinomio caratteristico, o i minori
   principali. Su ogni intervallo di $\alpha$ prendi un valore-campione e conta.
4. **Vettore isotropo:** se la forma è indefinita, cercane uno "leggero": spesso una direzione coordinata dà
   $q(e_k)=$ coefficiente, e se manca il quadrato di una variabile ($a_{kk}=0$) allora $e_k$ è isotropo subito.
5. **Radicale (se degenere):** risolvi $A(\alpha_{\text{crit}})\,x=0$.

## Un esame, per intero

**Prova 09/07/2024, Es. 3** (`scritto Geometria 2024-07-09`, ufficiale). In $\mathbb{R}^3$,
$$\varphi(x,y)=\alpha x_1y_1+x_2y_2+5x_3y_3-2x_1y_3-2x_3y_1+x_2y_3+x_3y_2.$$
(1) valori di $\alpha$ per cui $\varphi$ è degenere; (2) $\ker\varphi$ per tali valori; (3) segnatura al
variare di $\alpha$.

**Matrice** (termini misti divisi per due: $-2x_1x_3\to a_{13}=a_{31}=-2$; $x_2x_3\to a_{23}=a_{32}=\tfrac12$…
qui il testo tiene $1$ perché conta il termine simmetrizzato $x_2y_3+x_3y_2$ già simmetrico, dando $a_{23}=1$):
$$A=\begin{pmatrix}\alpha&0&-2\\0&1&1\\-2&1&5\end{pmatrix}.$$

**(1) Degenere.** $\det A=\alpha(5-1)-0+(-2)(0+2)=4\alpha-4=4(\alpha-1)$. Si annulla per **$\alpha=1$**: lì
la forma è degenere.

**(2) $\ker\varphi$ per $\alpha=1$.** Risolvo $\left(\begin{smallmatrix}1&0&-2\\0&1&1\\-2&1&5\end{smallmatrix}\right)x=0$:
dalla 1ª $x_1=2x_3$, dalla 2ª $x_2=-x_3$; la 3ª è dipendente. **$\ker\varphi=\operatorname{Span}\{(2,-1,1)\}$**,
dimensione 1 (indice di nullità $r=1$).

**(3) Segnatura al variare di $\alpha$.** Cambia solo al valore critico $\alpha=1$. Con un conteggio dei segni
(regola di Cartesio sul polinomio caratteristico):
- $\alpha<1$: segnatura $(2,1)$ — due positivi, uno negativo (indefinita);
- $\alpha>1$: segnatura $(3,0)$ — definita positiva;
- $\alpha=1$: segnatura $(2,0)$ con indice di nullità $1$ (la forma degenera, un autovalore passa per lo zero).

$\blacksquare$ Il quadro è coerente: attraversando $\alpha=1$ un autovalore va da negativo a positivo passando
per $0$ — ecco perché la degenerazione e il salto di segnatura coincidono.

## Le varianti

- **Forma su polinomi con derivate** (`prova20240207` Es.4): $\langle p,q\rangle=p(0)q(0)-p'(0)q''(0)-q'(0)p''(0)+p''(0)q(0)+p(0)q''(0)$
  su $\mathbb{R}[t]_{\le2}$. Matrice $A=\left(\begin{smallmatrix}1&0&2\\0&0&-2\\2&-2&0\end{smallmatrix}\right)$;
  $\det A=-4\neq0$ (non degenere), e poiché $\langle1,1\rangle=1>0$ la segnatura è $(2,1)$ (non $(0,3)$). Base
  ortonormale generalizzata via **Gram–Schmidt generalizzato** (con un accorgimento quando $\langle t,t\rangle=0$
  ferma il processo: si scambia l'ordine dei vettori). Ufficiale: $u_1=1,\ u_2=2(t-\tfrac12),\ u_3=\tfrac{t^2-2}{2}$.
- **Segnatura da matrice simmetrica già diagonalizzata** (`geomefis24.1.22` Es.3): $A=\left(\begin{smallmatrix}4&-2&-2\\-2&4&-2\\-2&-2&4\end{smallmatrix}\right)$
  ha autovalori $0$ e $6$ (doppio) → segnatura $(2,0)$ con nullità $1$ (indici $2,0,1$): letta *direttamente
  dai segni degli autovalori*, senza altro calcolo. È il ponte col saper-fare 07.
- **Isotropo immediato** (`soluzioniesame20200204` Es.5): $q(x)=3x_1^2+x_2^2+x_3^2+2x_1x_4$ manca il quadrato
  $x_4^2$ → $e_4=(0,0,0,1)$ dà $q=0$: **isotropo** trovato senza calcoli; e $x=(1,0,0,-2)$ dà $q=-1<0$ → non
  definita positiva.

## Collaudo

1. $q(x)=x_1^2+2x_2^2-3x_3^2$: segnatura? esiste un isotropo? *(Risposta: $(2,1)$; sì, es. $x_1=\sqrt3,x_2=0,x_3=1$
   dà $3-3=0$.)*
2. Nell'esame svolto, perché la segnatura salta esattamente in $\alpha=1$ e non altrove? *(Risposta: è l'unico
   $\alpha$ con $\det A=0$; solo lì un autovalore attraversa lo zero.)*
3. Distingui: per $q(x)=x_1x_2$ in $\mathbb{R}^2$, qual è il radicale e quali gli isotropi? *(Risposta:
   radicale $=\{0\}$ (non degenere, $\det=-\tfrac14\neq0$); isotropi $=\{x_1=0\}\cup\{x_2=0\}$, gli assi.)*

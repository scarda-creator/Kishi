# Saper-fare 02 · Sistemi lineari parametrici

> **SOSTANZA DA VERIFICARE — generata in notte autonoma** (Dedalo, 2026-07-12). Correttezza matematica
> da ratificare da svegli (Giuseppe / Demiurgo Accademico).
> Tipo mappa #4 · freq 12/28 · diff 3/5 · 2013–2024.

## La firma

Un sistema lineare in cui compare un **parametro** ($k$, $t$, $a$, $\alpha$) nei coefficienti, e la
domanda è "per quali valori del parametro il sistema **ammette soluzioni** / ha soluzione unica / infinite
soluzioni". Parole-spia: *al variare di, per quali valori, discutere la compatibilità*. L'oggetto è un
sistema $Ax=b$ dove $A=A(k)$ e/o $b=b(k)$.

Cosa NON confondere: se il parametro è dentro una **forma bilineare** e si chiede la *segnatura*, è il
saper-fare 08, non questo. Qui si parla di *compatibilità di un sistema*, governata dai **ranghi**.

## L'idea

**Rouché–Capelli:** $Ax=b$ ha soluzioni $\iff \operatorname{rk}A=\operatorname{rk}(A\,|\,b)$. E se sono
compatibili, lo spazio delle soluzioni è affine di dimensione $n-\operatorname{rk}A$ (una soluzione
particolare + tutto $\ker A$). Tutto il metodo è: *seguire come i due ranghi cambiano al variare del
parametro*. I ranghi cambiano solo in un numero finito di **valori critici** — quelli che annullano un
determinante. Fuori dai critici il comportamento è "generico" (di solito rango pieno, soluzione unica);
sui critici va guardato caso per caso.

## La mossa

1. **Trova i valori critici.** Per un sistema $n\times n$ (matrice quadrata), calcola $\det A(k)$ e
   **fattorizzalo**; le sue radici sono i candidati valori critici. Fuori da essi $\operatorname{rk}A=n$,
   quindi $\operatorname{rk}(A|b)=n$ pure e c'è **soluzione unica**.
   > **Trappola** (perdi un valore): fattorizza bene $\det A(k)$. Se raccogli male, salti una radice e
   > l'intera discussione di quel valore sparisce. Es. ufficiale: $\det=-k(1-k)(2k-1)$ → tre critici
   > $0,\tfrac12,1$, non due.
2. **Per ogni valore critico, sostituisci e ricontrolla i due ranghi separatamente.** Non basta sapere
   che $\det A=0$: devi confrontare $\operatorname{rk}A$ e $\operatorname{rk}(A|b)$ *in quel punto*.
   > **Trappola** (la firma di questo tipo): $\det A=0$ **non implica** che il sistema sia risolubile. Se
   > $\operatorname{rk}A$ scende ma $\operatorname{rk}(A|b)$ resta più alto di 1, il sistema è
   > **incompatibile** proprio nel valore critico. È il cuore del problema — vedi l'esame sotto, $k=\tfrac12$.
3. **Per i critici compatibili, scrivi le soluzioni in forma affine:** soluzione particolare $+ \ker A$.
   Se il sistema è omogeneo la parte affine sparisce; se è non-omogeneo e compatibile, **non dimenticarla**.
   > **Trappola**: omettere la parte affine (soluzione particolare) quando il sistema è compatibile ma
   > non omogeneo. La soluzione non è solo $\operatorname{Span}(\ldots)$, è *punto* $+\operatorname{Span}(\ldots)$.
4. **Sistemi non quadrati o con due parametri:** salta il determinante, vai di **Gauss diretto** trascinando
   i parametri, e imponi le condizioni di annullamento dei pivot man mano (vedi variante $a,b$).

## Un esame, per intero

**Appello 21/01/2019, Es. 1** (`prova20190121`, ufficiale). Per quali $k\in\mathbb{R}$ il sistema ammette
soluzioni:
$$\begin{cases} kx+y-2z=1\\ (1-k^2)x+3kz=2k-1\\ (k^2+1)x+(k+1)y-2z=0\end{cases}$$

Matrice dei coefficienti $A$ e completa $B=(A|b)$. **Determinante** (riduco la 3ª riga sottraendo la 1ª,
poi sviluppo):
$$\det A=\det\begin{pmatrix}k&1&-2\\1-k^2&0&3k\\ 1&0&2k\end{pmatrix}=-\det\begin{pmatrix}1-k^2&3k\\ 1&2k\end{pmatrix}=-\big(2k(1-k^2)-3k\big)=-k(1-k)(2k-1).$$
Si annulla per $k=0,\ \tfrac12,\ 1$. **Per $k\notin\{0,\tfrac12,1\}$: $\operatorname{rk}A=3$, soluzione unica.**

*$k=0$:* $A=\left(\begin{smallmatrix}0&1&-2\\1&0&0\\1&1&-2\end{smallmatrix}\right)$: la terza riga è somma
delle prime due, e lo stesso vale nella completa. Quindi $\operatorname{rk}A=\operatorname{rk}B=2$:
**compatibile** (infinite soluzioni, $\infty^1$).

*$k=\tfrac12$:* $A$ perde rango ($\operatorname{rk}A=2$), **ma** il minore $3\times3$ di destra di $B$ ha
determinante $-\tfrac94\neq0$, quindi $\operatorname{rk}B=3$. Ranghi diversi → **il sistema NON ha
soluzioni per $k=\tfrac12$.** È il trabocchetto: $\det A=0$ ma incompatibile.

*$k=1$:* $B=\left(\begin{smallmatrix}1&1&-2&1\\0&0&3&1\\2&2&-2&0\end{smallmatrix}\right)$, Gauss →
$\left(\begin{smallmatrix}1&1&-2&1\\0&0&1&-1\\0&0&0&4\end{smallmatrix}\right)$: l'ultima riga $0=4$ è
impossibile. **Nessuna soluzione per $k=1$.**

**Risposta:** il sistema ammette soluzioni per $k\notin\{\tfrac12,1\}$, cioè per tutti i $k\neq\tfrac12,1$
(unica se $k\neq 0,\tfrac12,1$; infinite se $k=0$). $\blacksquare$

## Le varianti

- **Due parametri** (`prova20240207` Es.3): $\begin{cases}x-2y+z=b\\2x-ay+2z=7b\\-x+3y+az=0\end{cases}$.
  Gauss diretto porta al pivot $(a-4)(a+1)$ sull'ultima riga con termine noto $\propto b$: unica soluzione
  per $a\neq4,-1$; per $a=4$ dipende da $b$ (infinite se $b=0$, nessuna se $b\neq0$); per $a=-1$ analogo. Con
  $a=b=1$ l'ultima equazione svanisce → $\infty$ soluzioni, e la particolare è $x=\tfrac{14}{3},y=\tfrac53,z=-\tfrac13$.
- **Parametro solo nel termine noto / in una riga** (`Prova23_01_23_sol` Es.3): sistema $4\times4$ con $t$;
  unica soluzione per $t\neq3$, e per $t=3$ compatibile con soluzione affine
  $\left(-\tfrac32,\tfrac12,\tfrac32,0\right)+\operatorname{Span}(3,0,-1,1)$. Qui si vede bene la **forma
  affine** (punto + retta).

## Collaudo

1. $\begin{cases}x+y+z=1\\x+ky+z=2\\x+y+kz=k\end{cases}$: per quali $k$ ha soluzione unica? *(Risposta:
   $k\neq1$; il critico $k=1$ collassa le tre equazioni e rende $\operatorname{rk}A=1$, sistema
   incompatibile perché i termini noti $1,2,1$ differiscono.)*
2. Nel sistema dell'esame svolto, quante soluzioni per $k=0$? *(Risposta: $\infty^1$ — una retta affine.)*
3. Vero o falso: se $\det A(k_0)=0$ allora il sistema è incompatibile in $k_0$. *(Risposta: falso — può
   essere compatibile con infinite soluzioni, come $k=0$ sopra. Dipende dal confronto dei due ranghi.)*

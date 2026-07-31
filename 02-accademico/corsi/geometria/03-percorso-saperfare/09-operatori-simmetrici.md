# Saper-fare 09 · Operatori simmetrici e isometrie su spazi di matrici

> **SOSTANZA DA VERIFICARE — generata in notte autonoma** (Dedalo, 2026-07-12). Correttezza matematica
> da ratificare da svegli (Giuseppe / Demiurgo Accademico).
> Tipo mappa #9 · freq 7/28 · diff 4/5 · 2013–2024.

## La firma

Lo spazio ambiente è $M_n(\mathbb{R})$ (o $M_n(\mathbb{C})$) munito del prodotto scalare
$\langle A,B\rangle=\operatorname{tr}(A^\top B)$, e un **operatore** $f$ su di esso — tipicamente
$f(A)=\pm A^\top$, $f(A)=AX$, $f(A)=XA$, o $f(A)=XAX^{-1}$ — con la richiesta di verificare che $f$ è
**simmetrico** (autoaggiunto) e/o un'**isometria**. Parole-spia: *$\operatorname{tr}(A^\top B)$, operatore
simmetrico/autoaggiunto, isometria lineare, $\|f(A)\|=\|A\|$, trasposta*.

Cosa NON confondere: non è diagonalizzazione di una matrice simmetrica (quello è il 07); qui la *matrice*
gioca il ruolo di **vettore** in uno spazio di dimensione $n^2$, e l'operatore agisce su di essa. Simmetrico
e isometria sono **proprietà diverse**: vanno dimostrate separatamente.

## L'idea

Il prodotto $\langle A,B\rangle=\operatorname{tr}(A^\top B)=\sum_{i,j}a_{ij}b_{ij}$ è il **prodotto di
Frobenius**: identifica $M_n$ con $\mathbb{R}^{n^2}$ e coincide col prodotto scalare canonico sulle entrate. È
definito positivo, con $\|A\|^2=\operatorname{tr}(A^\top A)=\sum a_{ij}^2$. Tutto il saper-fare poggia su due
**proprietà della traccia** che evitano calcoli espliciti a entrate:
$$\operatorname{tr}(C)=\operatorname{tr}(C^\top),\qquad \operatorname{tr}(CD)=\operatorname{tr}(DC)\ \text{(ciclicità)}.$$
Con esse:
- $f$ **simmetrico (autoaggiunto)** $\iff\langle f(A),B\rangle=\langle A,f(B)\rangle$ per ogni $A,B$;
- $f$ **isometria** $\iff\langle f(A),f(B)\rangle=\langle A,B\rangle$ per ogni $A,B$ (equivale a $\|f(A)\|=\|A\|$
  per polarizzazione).

## La mossa

1. **Scrivi il prodotto interno esplicito** che devi verificare, come traccia: $\langle f(A),B\rangle=\operatorname{tr}(f(A)^\top B)$.
2. **Sostituisci la definizione di $f$** e **manovra con le due proprietà della traccia** — trasposizione e
   ciclicità — per far comparire dall'altra parte $\langle A,f(B)\rangle$ (simmetria) o $\langle A,B\rangle$
   (isometria).
   > **Trappola** (efficienza, `Prova23_01_23_sol` Es.5): non espandere $\langle f(A),B\rangle$ entrata per
   > entrata — porta a calcoli lunghissimi. Usa $\operatorname{tr}(CD)=\operatorname{tr}(DC)$ e
   > $\operatorname{tr}(C)=\operatorname{tr}(C^\top)$ per spostare i fattori: due o tre passaggi e hai finito.
3. **Simmetria e isometria vanno provate separatamente.** Sono indipendenti: esistono operatori simmetrici che
   non sono isometrie e viceversa.
   > **Trappola** (concettuale): "simmetrico" (rispetto a $\langle\cdot,\cdot\rangle$) non implica "isometria",
   > e non basta mostrarne una per l'altra. Due dimostrazioni distinte.
   > **Trappola** (campo complesso): in $M_n(\mathbb{C})$ il prodotto giusto è hermitiano
   > $\langle A,B\rangle=\operatorname{tr}(\bar A^\top B)$, e "simmetrica" ($A^\top=A$) va distinta da
   > "hermitiana" ($\bar A^\top=A$).

## Un esame, per intero

**Prova 23/01/2023, Es. 5** (`Prova23_01_23_sol`, ufficiale). In $M_2(\mathbb{R})$ con
$\langle A,B\rangle=\operatorname{tr}(A^\top B)$, sia $f(A)=-A^\top$. (i) $f$ è simmetrico; (ii) $f$ è
un'isometria.

Ricordo: $\operatorname{tr}(C)=\operatorname{tr}(C^\top)$ e $\operatorname{tr}(CD)=\operatorname{tr}(DC)$.

**(i) Simmetria.** Uso $f(A)^\top=(-A^\top)^\top=-A$:
$$\langle f(A),B\rangle=\operatorname{tr}\!\big((-A^\top)^\top B\big)=\operatorname{tr}(-AB)\overset{\text{trasp.}}{=}\operatorname{tr}\!\big((-AB)^\top\big)=\operatorname{tr}(-B^\top A^\top)\overset{\text{cicl.}}{=}\operatorname{tr}(-A^\top B^\top).$$
D'altra parte $\langle A,f(B)\rangle=\operatorname{tr}\!\big(A^\top(-B^\top)\big)=\operatorname{tr}(-A^\top B^\top)$.
Le due coincidono: $\langle f(A),B\rangle=\langle A,f(B)\rangle$, quindi **$f$ è simmetrico**. ✓

**(ii) Isometria.** Con $f(A)^\top=-A$:
$$\langle f(A),f(B)\rangle=\operatorname{tr}\!\big((-A)(-B^\top)\big)=\operatorname{tr}(AB^\top)\overset{\text{trasp.}}{=}\operatorname{tr}\!\big((AB^\top)^\top\big)=\operatorname{tr}(BA^\top)\overset{\text{cicl.}}{=}\operatorname{tr}(A^\top B)=\langle A,B\rangle.$$
Quindi $\langle f(A),f(B)\rangle=\langle A,B\rangle$ per ogni $A,B$, e in particolare $\|f(A)\|=\|A\|$: **$f$
è un'isometria lineare**. $\blacksquare$

Il gesto vincente: mai toccato le entrate. Solo trasposizione (sposta il $^\top$) e ciclicità (ruota i
fattori dentro la traccia).

## Le varianti

- **Il commutante come sottospazio** (`soluzioniesame20200204` Es.2): $U=\{X:AX=XA\}$, $V=\{X:AX=-XA\}$ per
  $A=\left(\begin{smallmatrix}1&1\\0&1\end{smallmatrix}\right)$. Non è un problema di operatore-isometria ma di
  *sottospazio* (saper-fare 01): svolgi i due prodotti $AX$, $XA$, uguaglia componente a componente, ottieni le
  equazioni ($U:x_3=0,x_1=x_4$, $\dim 2$; $V=\{0\}$). Menzionato qui perché condivide l'ambiente $M_2$ e i
  prodotti riga-colonna.
- **$f(A)=AX$ o $f(A)=XAX^{-1}$**: stessa tecnica — porta tutto dentro una traccia e usa ciclicità.
  $\langle XAX^{-1},\,XBX^{-1}\rangle$ si semplifica se $X$ è ortogonale ($X^{-1}=X^\top$), dando un'isometria.
- **Classificazione** (`soluzioniesame20200204` Es.4): "$A$ è simmetrica/hermitiana/unitaria?" — verifica
  diretta $A^\top\overset?=A$, $\bar A^\top\overset?=A$, $A\bar A^\top\overset?=I$. Da tenere distinta dalle
  proprietà dell'*operatore* $f$.

## Collaudo

1. In $M_n(\mathbb{R})$ con Frobenius, l'operatore $f(A)=A^\top$ (senza il segno meno) è simmetrico? è
   isometria? *(Risposta: sì a entrambe — stessi conti dell'esame senza il segno; $\|A^\top\|=\|A\|$.)*
2. Nell'esame svolto, quale proprietà della traccia trasforma $\operatorname{tr}(-B^\top A^\top)$ in
   $\operatorname{tr}(-A^\top B^\top)$? *(Risposta: la ciclicità $\operatorname{tr}(CD)=\operatorname{tr}(DC)$.)*
3. Perché $\|A\|^2=\operatorname{tr}(A^\top A)$ è sempre $\ge0$? *(Risposta: $\operatorname{tr}(A^\top A)=\sum_{i,j}a_{ij}^2$,
   somma di quadrati.)*

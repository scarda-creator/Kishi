# Saper-fare 05 · Jordan, triangolarizzabilità, non-diagonalizzabilità

> **SOSTANZA DA VERIFICARE — generata in notte autonoma** (Dedalo, 2026-07-12). Correttezza matematica
> da ratificare da svegli (Giuseppe / Demiurgo Accademico).
> Tipo mappa #10 · freq 6/28 · diff 4–5/5 · 2014–2024 · **in salita** (direzione attuale del corso).

## La firma

Compare quando la diagonalizzazione **fallisce** o non è il punto: autovalore ripetuto con $m_g<m_a$,
domanda "le matrici $A$ e $B$ sono **simili**?", "è **triangolarizzabile**?", o richiesta esplicita di
**forma di Jordan**/confronto di blocchi. Parole-spia: *simili, forma canonica di Jordan, triangolarizzabile,
nilpotente, blocchi*. Spesso è il seguito naturale del saper-fare 04 quando $m_g<m_a$.

Cosa NON confondere: **triangolarizzabile** ($\neq$) **diagonalizzabile**. Su $\mathbb{C}$ *ogni* matrice è
triangolarizzabile (il polinomio caratteristico si spezza sempre); la diagonalizzabilità è molto più
restrittiva. Confonderle è la trappola-madre di questo tipo.

## L'idea

Due matrici con lo **stesso polinomio caratteristico possono NON essere simili**: il polinomio vede solo gli
autovalori con le loro $m_a$, non la struttura fine degli autospazi. Ciò che distingue matrici con lo stesso
spettro è la **sequenza dei ranghi** $\operatorname{rk}(A-\lambda I)^k$ per $k=1,2,\dots$, che conta e
dimensiona i blocchi di Jordan relativi a $\lambda$. In particolare:
$$m_g(\lambda)=n-\operatorname{rk}(A-\lambda I)=\text{numero di blocchi di Jordan per }\lambda.$$
Due matrici sono simili $\iff$ hanno gli stessi autovalori **e** la stessa struttura di blocchi, cioè la
stessa sequenza di ranghi $\operatorname{rk}(A-\lambda I)^k$ per ogni $\lambda$.

## La mossa

1. **Polinomio caratteristico e $m_a$** (come nel 04). Se già gli spettri differiscono, non sono simili — fine.
2. **Per l'autovalore ripetuto, calcola $m_g=n-\operatorname{rk}(A-\lambda I)$.** Se $m_g<m_a$: **non
   diagonalizzabile**.
3. **Per confrontare due matrici con stesso spettro:** confronta $\operatorname{rk}(A-\lambda I)$ (e se serve
   $\operatorname{rk}(A-\lambda I)^2$, ecc.) con gli stessi ranghi di $B$. **Ranghi diversi ⇒ non simili.**
   > **Trappola** (documentata, `prova20240207`): lo stesso polinomio caratteristico **non basta** a
   > concludere la similitudine. Serve il rango di $(A-\lambda I)$, non solo $p_A$.
4. **Forma di Jordan $n\le3$.** Con un solo autovalore $\lambda$ di $m_a=3$: $m_g=3$→ diagonale (tre blocchi
   $1\times1$); $m_g=2$→ un blocco $2\times2$ + un $1\times1$; $m_g=1$→ un unico blocco $3\times3$. Il numero
   di blocchi è $m_g$, la loro taglia si legge dai ranghi delle potenze.
   > **Trappola** (`ex_Fis8`, `Esonero23_1_14`): la base che triangolarizza **non è ortogonale** in generale —
   > non applicare Gram–Schmidt per trovarla, cerca gli autovettori generalizzati $\ker(A-\lambda I)^k$.

## Un esame, per intero

**Prova 07/02/2024, Es. 1** (`prova20240207`, ufficiale). $A=\begin{pmatrix}1&0&1\\0&-1&4\\0&-1&3\end{pmatrix}$.
(a) autovalori; (b) $A$ diagonalizzabile? (c) $A$ e $B=\begin{pmatrix}1&0&0\\0&1&1\\0&0&1\end{pmatrix}$ sono simili?

**(a) Polinomio caratteristico.**
$p_A(t)=\det(A-tI)=\det\begin{pmatrix}1-t&0&1\\0&-1-t&4\\0&-1&3-t\end{pmatrix}=(1-t)\big[(-1-t)(3-t)+4\big]$.
Ora $(-1-t)(3-t)+4=t^2-2t-3+4=t^2-2t+1=(t-1)^2$. Quindi $p_A(t)=(1-t)(t-1)^2=-(t-1)^3$:
**unico autovalore $\lambda=1$ con $m_a=3$.**

**(b) Diagonalizzabile?** $A-I=\begin{pmatrix}0&0&1\\0&-2&4\\0&-1&2\end{pmatrix}$. Le ultime due righe sono
proporzionali ($(0,-2,4)=2(0,-1,2)$) e la prima è $(0,0,1)$: rango $2$. Quindi $m_g=3-2=1<3=m_a$: **$A$ NON è
diagonalizzabile** (un solo autovettore indipendente → un unico blocco di Jordan $3\times3$).

**(c) $A$ e $B$ simili?** $B$ ha anch'essa autovalore unico $\lambda=1$ ($m_a=3$): stesso polinomio
caratteristico $-(t-1)^3$. Ma $B-I=\begin{pmatrix}0&0&0\\0&0&1\\0&0&0\end{pmatrix}$ ha rango $1$, quindi
$m_g(B)=3-1=2$. Poiché $\operatorname{rk}(A-I)=2\neq1=\operatorname{rk}(B-I)$ (equivalentemente $m_g(A)=1\neq2=m_g(B)$),
**$A$ e $B$ NON sono simili**: hanno strutture di Jordan diverse (un blocco $3\times3$ contro un blocco
$2\times2$ + un $1\times1$), pur avendo lo stesso polinomio caratteristico. $\blacksquare$

## Le varianti

- **Confronto di blocchi via rango delle potenze** (`prova20240207`, sopra): il cuore del tipo. Quando
  $\operatorname{rk}(A-\lambda I)$ coincide ma i blocchi potrebbero differire in taglia, si sale a
  $\operatorname{rk}(A-\lambda I)^2$.
- **Triangolarizzazione esplicita** (`ex_Fis8`, `Esonero23_1_14`): trovare una base che rende $A$ triangolare
  superiore su $\mathbb{C}$ — sempre possibile; si usano autovettori e autovettori generalizzati, **non** GS.
- **"Non diagonalizzabile" con scorciatoia** (`soluzioniesame20200204` Es.4): $2\times2$ con $\operatorname{tr}=\det=0$
  e $A\neq0$ → $\lambda=0$ doppio, un solo blocco $2\times2$, non diagonalizzabile senza calcoli.

## Collaudo

1. $A=\left(\begin{smallmatrix}1&1&0\\0&1&0\\0&0&1\end{smallmatrix}\right)$: qual è $m_g(1)$ e quanti blocchi
   di Jordan? *(Risposta: $A-I$ ha rango 1, $m_g=2$ → due blocchi, uno $2\times2$ e uno $1\times1$.)*
2. Due $3\times3$ con lo stesso $p(t)=-(t-1)^3$ sono sempre simili? *(Risposta: no — dipende da
   $\operatorname{rk}(A-I)$; è esattamente l'esame svolto.)*
3. Su $\mathbb{C}$, $\left(\begin{smallmatrix}0&1\\-1&0\end{smallmatrix}\right)$ è triangolarizzabile?
   diagonalizzabile? *(Risposta: entrambe — autovalori $\pm i$ distinti, quindi diagonalizzabile su
   $\mathbb{C}$, dunque anche triangolarizzabile.)*

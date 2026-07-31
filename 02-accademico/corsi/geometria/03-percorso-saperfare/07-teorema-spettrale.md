# Saper-fare 07 · Teorema spettrale e diagonalizzazione ortogonale

> **SOSTANZA DA VERIFICARE — generata in notte autonoma** (Dedalo, 2026-07-12). Correttezza matematica
> da ratificare da svegli (Giuseppe / Demiurgo Accademico).
> Tipo mappa #3 (parte b) · freq 14/28 · diff 3–4/5 · 2013–2024.

## La firma

Una matrice **simmetrica reale** ($A=A^\top$), e la richiesta di una **base ortonormale di autovettori**,
oppure "diagonalizzare ortogonalmente" (trovare $Q$ ortogonale con $Q^\top A Q$ diagonale). Parole-spia:
*simmetrica, base ortonormale di autovettori, $Q^\top AQ$, teorema spettrale, ortogonale*.

Cosa NON confondere: se la matrice **non è simmetrica**, è diagonalizzazione ordinaria (saper-fare 04) e la
base di autovettori in generale **non** è ortogonale. Se ti danno una *forma bilineare* simmetrica e chiedono
la **segnatura** (che può essere indefinita), è il 08 — lì la matrice simmetrica rappresenta una forma, non
un operatore da diagonalizzare metricamente.

## L'idea

**Teorema spettrale (reale):** ogni matrice simmetrica reale $A$ è diagonalizzabile, e — di più — ammette una
**base ortonormale di autovettori** rispetto al prodotto scalare canonico. Due conseguenze operative che
fanno risparmiare quasi tutto il lavoro:
- **La diagonalizzabilità è garantita a priori:** non devi verificare $m_g=m_a$. Se $A=A^\top$, diagonalizza.
- **Autovettori di autovalori distinti sono automaticamente ortogonali.** Dimostrazione in due righe: se
  $Av=\lambda v$, $Aw=\mu w$ con $\lambda\neq\mu$, allora $\lambda\langle v,w\rangle=\langle Av,w\rangle=\langle v,Aw\rangle=\mu\langle v,w\rangle$
  (usando $A=A^\top$), quindi $(\lambda-\mu)\langle v,w\rangle=0$ e $\langle v,w\rangle=0$. Perciò se gli
  autovalori sono tutti distinti, basta **normalizzare** e la ONB è fatta, senza Gram–Schmidt.

## La mossa

1. **Verifica $A=A^\top$** (spesso è dato). Da qui la diagonalizzabilità è certa: non perdere tempo con $m_g$.
2. **Polinomio caratteristico → autovalori.**
3. **Autovettori** risolvendo $(A-\lambda I)x=0$ per ciascun $\lambda$.
4. **Ortonormalizza:**
   - autovalori **distinti** → gli autovettori sono già ortogonali fra loro: basta **normalizzare** ciascuno.
   - autovalore **ripetuto** → gli autovettori del *suo* autospazio non sono automaticamente ortogonali tra
     loro: applica **Gram–Schmidt dentro l'autospazio**, poi normalizza. (Autospazi di autovalori diversi
     restano comunque ortogonali fra loro.)
   > **Trappola** (`soluzioniesame20200204` Es.5): "ortogonale" $\neq$ "ortonormale". Il teorema ti dà
   > autovettori ortogonali per autovalori distinti *senza calcoli*, ma la consegna chiede la **ONB**:
   > normalizza dividendo per la lunghezza. Consegnare la base non normalizzata è risposta incompleta.
5. **Matrice $Q$:** metti gli autovettori normalizzati in colonna; $Q$ è ortogonale ($Q^\top=Q^{-1}$) e
   $Q^\top AQ=\operatorname{diag}(\lambda_i)$.

## Un esame, per intero

**Appello 04/02/2020, Es. 5** (`soluzioniesame20200204`, ufficiale).
$A=\begin{pmatrix}3&1&0\\1&3&1\\0&1&3\end{pmatrix}$. Dire perché è diagonalizzabile e trovare una base
ortonormale (canonica di $\mathbb{R}^3$) di autovettori.

$A$ è **simmetrica**, quindi per il teorema spettrale è diagonalizzabile con autovettori ortonormalizzabili
— nessun test di molteplicità serve.

**Polinomio caratteristico** (sviluppo lungo la prima riga):
$$p_A(t)=\det\begin{pmatrix}3-t&1&0\\1&3-t&1\\0&1&3-t\end{pmatrix}=(3-t)\big[(3-t)^2-1\big]-1\cdot(3-t)=(3-t)\big[(3-t)^2-2\big].$$
Quindi gli autovalori sono $\lambda_1=3$, e $(3-t)^2=2\Rightarrow t=3\pm\sqrt2$: $\lambda_2=3-\sqrt2$,
$\lambda_3=3+\sqrt2$. **Tre autovalori distinti** → autovettori automaticamente ortogonali.

**Autovettori.** Per $\lambda_1=3$: $(A-3I)x=0$ dà $x_2=0$ e $x_1+x_3=0$ (dalle righe $x_2=0$,
$x_1+x_3=0$) → $v_1=(1,0,-1)$. Per $\lambda=3\pm\sqrt2$: $(A-\lambda I)x=0$ con $3-\lambda=\mp\sqrt2$ dà
$\mp\sqrt2\,x_1+x_2=0$ e $x_1=x_3$ → $v_2=(1,-\sqrt2,1)$ (per $3-\sqrt2$), $v_3=(1,\sqrt2,1)$ (per $3+\sqrt2$).
Si verifica a colpo d'occhio che $v_1,v_2,v_3$ sono a due a due ortogonali (come promesso dal teorema).

**Normalizzo** ($\|v_1\|=\sqrt2$, $\|v_2\|=\|v_3\|=2$):
$$u_1=\tfrac{1}{\sqrt2}(1,0,-1),\quad u_2=\tfrac12(1,-\sqrt2,1),\quad u_3=\tfrac12(1,\sqrt2,1).$$
Questa è la base ortonormale di autovettori richiesta. $\blacksquare$

## Le varianti

- **Autovalore ripetuto in matrice simmetrica**: l'autospazio ha dimensione $\ge2$; gli autovettori vanno
  ortogonalizzati con Gram–Schmidt *internamente*, poi normalizzati. Il caso a spettro distinto (sopra) è il
  più frequente e non richiede GS.
- **$W^\perp$ e proiezioni ortogonali**: spesso lo stesso esame che diagonalizza chiede anche il complemento
  ortogonale di un sottospazio (ponte col saper-fare 06).
- **"È simmetrica / hermitiana / unitaria?"** (`soluzioniesame20200204` Es.4): domanda di classificazione da
  non confondere con la diagonalizzazione — in campo complesso il teorema spettrale vale per matrici
  *hermitiane* ($\bar A^\top=A$), non simmetriche.

## Collaudo

1. $A=\left(\begin{smallmatrix}2&1\\1&2\end{smallmatrix}\right)$: autovalori e ONB di autovettori. *(Risposta:
   $\lambda=1,3$; $u_1=\tfrac1{\sqrt2}(1,-1)$, $u_2=\tfrac1{\sqrt2}(1,1)$.)*
2. Nell'esame svolto, perché gli autovettori sono ortogonali senza fare Gram–Schmidt? *(Risposta: autovalori
   distinti + matrice simmetrica → ortogonalità automatica.)*
3. Vero o falso: una matrice diagonalizzabile ha sempre una base ortonormale di autovettori. *(Risposta:
   falso — solo se simmetrica/normale; una diagonalizzabile qualunque ha base di autovettori non ortogonale.)*

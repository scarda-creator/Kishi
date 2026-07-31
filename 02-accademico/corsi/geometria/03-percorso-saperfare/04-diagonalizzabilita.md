# Saper-fare 04 · Diagonalizzabilità e autostruttura

> **SOSTANZA DA VERIFICARE — generata in notte autonoma** (Dedalo, 2026-07-12). Correttezza matematica
> da ratificare da svegli (Giuseppe / Demiurgo Accademico). Approfondimento: `capitoli/02-diagonalizzabilita.md`.
> Tipo mappa #2 · freq 19/28 · diff 3–4/5 · 2014–2024.

## La firma

Una matrice o un endomorfismo, e la richiesta "**è diagonalizzabile?**", oppure "determina autovalori,
autovettori, e una matrice $C$ tale che $C^{-1}AC$ sia diagonale". Parole-spia: *autovalori, autovettori,
diagonalizzabile, molteplicità, matrice diagonalizzante*. Oggetto: una matrice $n\times n$ (spesso data
direttamente, a volte da costruire come $[f]$ dal saper-fare 03).

Cosa NON confondere: se un autovalore è **ripetuto e la matrice risulta NON diagonalizzabile**, o si chiede
"sono simili?" / forma di Jordan, prosegui nel saper-fare 05. Se la matrice è **simmetrica** e si chiede una
base **ortonormale** di autovettori, è il 07 (teorema spettrale). Qui: diagonalizzabilità generale.

## L'idea

$A$ è diagonalizzabile $\iff$ esiste una **base di autovettori**. Il criterio operativo passa dalle due
molteplicità di ciascun autovalore $\lambda$:
- **molteplicità algebrica** $m_a(\lambda)$ = molteplicità di $\lambda$ come radice del polinomio
  caratteristico $p_A(t)=\det(A-tI)$;
- **molteplicità geometrica** $m_g(\lambda)=\dim\ker(A-\lambda I)=n-\operatorname{rk}(A-\lambda I)$ = numero
  di autovettori indipendenti per $\lambda$.

Vale sempre $1\le m_g\le m_a$. Il teorema:
$$\boxed{A\text{ diagonalizzabile}\iff m_g(\lambda)=m_a(\lambda)\ \text{per ogni autovalore }\lambda\ \text{(su un campo in cui } p_A \text{ si spezza)}.}$$
Corollario che risolve metà dei casi in una riga: se $A$ ($n\times n$) ha **$n$ autovalori distinti**, è
automaticamente diagonalizzabile (ogni $m_a=1$ forza $m_g=1$).

## La mossa

1. **Polinomio caratteristico** $p_A(t)=\det(A-tI)$, fattorizzalo, leggi autovalori e loro $m_a$.
2. **Autovalori distinti?** Se sono $n$ distinti → diagonalizzabile, salta al passo 4. Fine del dubbio.
3. **Autovalore ripetuto ($m_a\ge2$): calcola $m_g=n-\operatorname{rk}(A-\lambda I)$.**
   > **Trappola** (l'errore più comune, `soluzioniesame20200204` Es.3): non fermarti dopo aver visto
   > $m_a=2$. La diagonalizzabilità si decide *solo* dopo aver calcolato $m_g$. Se per **anche un solo**
   > $\lambda$ risulta $m_g<m_a$, **non è diagonalizzabile** (e sei nel saper-fare 05).
   > **Scorciatoia** (`soluzioniesame20200204` Es.4): se $\operatorname{tr}A=\det A=0$ per una $2\times2$
   > **non nulla**, allora $\lambda_1=\lambda_2=0$ (somma e prodotto nulli) e $A\neq0$ non è simile alla
   > matrice nulla → **non diagonalizzabile**, senza calcolare nulla.
4. **Autovettori e matrice $C$.** Per ogni $\lambda$ risolvi $(A-\lambda I)x=0$, prendi una base
   dell'autospazio. Impila tutti gli autovettori come **colonne** di $C$: allora $C^{-1}AC=\operatorname{diag}(\lambda_i)$,
   con gli autovalori nell'ordine delle colonne.
   > **Trappola**: se la consegna chiede una base **ortonormale** (caso simmetrico), non dimenticare di
   > normalizzare alla fine — ma quello è il saper-fare 07.

## Un esame, per intero

**Appello 04/02/2020, Es. 3** (`soluzioniesame20200204`, ufficiale). $F:\mathbb{R}^3\to\mathbb{R}^3$,
$F(x_1,x_2,x_3)=(-x_1-3x_2-3x_3,\ 5x_2+6x_3,\ -3x_2-4x_3)$. Verificare che $F$ è diagonalizzabile e trovare
$C$ con $C^{-1}AC$ diagonale.

**Matrice canonica** (colonne = immagini di $e_1,e_2,e_3$):
$A=\begin{pmatrix}-1&-3&-3\\0&5&6\\0&-3&-4\end{pmatrix}$.

**Polinomio caratteristico** (sviluppo lungo la prima colonna, un solo termine):
$$p_A(\lambda)=(-1-\lambda)\det\begin{pmatrix}5-\lambda&6\\-3&-4-\lambda\end{pmatrix}=(-1-\lambda)\big[(5-\lambda)(-4-\lambda)+18\big]=(-1-\lambda)(\lambda^2-\lambda-2).$$
$\lambda^2-\lambda-2=(\lambda-2)(\lambda+1)$, quindi $p_A(\lambda)=-(\lambda+1)^2(\lambda-2)$: autovalori
$\lambda_1=-1$ con $m_a=2$, $\lambda_2=2$ con $m_a=1$.

**Molteplicità geometriche.** Per $\lambda_1=-1$: $A+I=\left(\begin{smallmatrix}0&-3&-3\\0&6&6\\0&-3&-3\end{smallmatrix}\right)$
ha rango 1 (tutte le righe multiple di $(0,1,1)$), quindi $m_g=3-1=2=m_a$. ✓ L'autospazio:
$-3x_2-3x_3=0\Rightarrow x_2=-x_3$, $x_1$ libera → base $\{(1,0,0),\ (0,1,-1)\}$.
Per $\lambda_2=2$: $A-2I$ ha rango 2, $m_g=1=m_a$ ✓, autospazio $\operatorname{Span}\{(1,-2,1)\}$.

Poiché $m_g=m_a$ per entrambi, **$F$ è diagonalizzabile**. Matrice diagonalizzante (autovettori in colonna,
nell'ordine $-1,-1,2$):
$$C=\begin{pmatrix}1&0&1\\0&1&-2\\0&-1&1\end{pmatrix},\qquad C^{-1}AC=\begin{pmatrix}-1&0&0\\0&-1&0\\0&0&2\end{pmatrix}.\qquad\blacksquare$$

## Le varianti

- **Autovalori distinti, caso rapido** (`Prova23_01_23_sol` Es.2): $S=\left(\begin{smallmatrix}1&3&1\\0&1&0\\2&0&0\end{smallmatrix}\right)$,
  $p_S(t)=-(t-1)(t+1)(t-2)$ → tre distinti → diagonalizza subito; autovettori $(3,-2,6),(1,0,1),(-1,0,2)$.
- **Il trabocchetto tr = det = 0** (`soluzioniesame20200204` Es.4): $A=\left(\begin{smallmatrix}1&i\\i&-1\end{smallmatrix}\right)$,
  $\operatorname{tr}A=0,\ \det A=-1-i^2=0$ → $\lambda_1=\lambda_2=0$; $A\neq0$ non è simile a $0$ → **non
  diagonalizzabile**. (E la questione hermitiana/unitaria è a parte: $A$ è simmetrica ma non hermitiana.)
- **Endomorfismo dato per formula** (`soluzioniesame20200204` Es.3, sopra) o **su polinomi**
  (`Prova23_01_23_sol` Es.4): prima costruisci la matrice (saper-fare 03), poi applichi questa procedura.

## Collaudo

1. $A=\left(\begin{smallmatrix}2&1\\0&2\end{smallmatrix}\right)$: diagonalizzabile? *(Risposta: no —
   $\lambda=2$ con $m_a=2$ ma $A-2I=\left(\begin{smallmatrix}0&1\\0&0\end{smallmatrix}\right)$ ha rango 1,
   $m_g=1<2$.)*
2. Nell'esame svolto, perché non basta aver visto $m_a(-1)=2$ per concludere? *(Risposta: la
   diagonalizzabilità dipende da $m_g$; poteva essere $1$, e allora sarebbe stata non-diag. Serviva il rango.)*
3. Una $3\times3$ con autovalori $1,2,3$: quanti conti servono per diagonalizzarla? *(Risposta: nessun test
   di $m_g$ — tre distinti bastano; restano solo i tre autospazi da esibire per la $C$.)*

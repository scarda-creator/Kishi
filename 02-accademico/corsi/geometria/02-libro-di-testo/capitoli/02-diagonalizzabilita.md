# Capitolo 2 — Diagonalizzabilità e autostruttura

Corso: Geometria (Algebra Lineare) · docente Diverio · La Sapienza
Tipo mappa coperto: #2 Diagonalizzabilità e autostruttura (freq 19/28, 2014–2024).

---

## 1. Aggancio operativo

**Esercizio A — il formato dominante (Compito 02/02/2016, es. 2; identico in `Compito_23_02_16`, `Compito24_06_16`, `Prova23_01_23_sol`).**
Data la matrice
$$
A=\begin{pmatrix} 1 & 1 & 0\\ 0 & 2 & 0\\ 0 & -1 & 1\end{pmatrix},
$$
stabilire se è diagonalizzabile e, in caso affermativo, trovare una matrice invertibile $C$ e una diagonale $D$ tali che $C^{-1}AC=D$.

**Esercizio B — il caso rapido, dove non serve il polinomio (soluzioniesame 04/02/2020, es. 4).**
Sia $A\in M_2(\mathbb{C})$ con $\operatorname{tr}A=0$, $\det A=0$ e $A\neq0$. Dire se è diagonalizzabile.

L'esercizio A è la procedura completa: polinomio, autovalori, autospazi, matrice diagonalizzante. È lungo e un errore a metà invalida il finale. L'esercizio B si chiude in due righe se riconosci la struttura, e in mezza pagina inutile se parti col polinomio a testa bassa. Questo capitolo dà la procedura ordinata *e* le scorciatoie legittime.

---

## 2. Cosa devi saper fare

Davanti agli esercizi A e B devi eseguire senza esitazione:

1. Calcolare il polinomio caratteristico $p_A(\lambda)=\det(A-\lambda I)$ e le sue radici (gli autovalori), con le rispettive molteplicità algebriche.
2. Per ogni autovalore $\lambda$, trovare l'autospazio $V_\lambda=\ker(A-\lambda I)$ e la sua dimensione, la molteplicità geometrica.
3. Applicare il criterio di diagonalizzabilità: $\text{m.a.}(\lambda)=\text{m.g.}(\lambda)$ per *ogni* $\lambda$ (e, su $\mathbb{R}$, che il polinomio si spezzi tutto).
4. Montare $C$ (autovettori in colonna) e $D$ (autovalori in diagonale, nello stesso ordine).
5. Riconoscere i casi rapidi: autovalori distinti $\Rightarrow$ diagonalizzabile senza calcolare gli autospazi; $\operatorname{tr}=\det=0$ con $A\neq0$ $\Rightarrow$ non diagonalizzabile senza polinomio.

---

## 3. Perché funziona (i principi)

### Cosa significa strutturalmente "diagonalizzabile"

Una matrice $A$ è la rappresentazione di un operatore lineare $f:V\to V$ nella base standard. Le colonne di $A$ dicono dove finiscono i vettori base. In una base generica l'azione di $f$ mescola le coordinate. **Diagonalizzare** significa cercare una base in cui $f$ agisce nel modo più semplice possibile: su ogni vettore di base, $f$ si limita a *riscalare*, $f(v_i)=\lambda_i v_i$. In quella base la matrice è diagonale, $D=\operatorname{diag}(\lambda_1,\dots,\lambda_n)$, e ogni direzione della base è invariante.

Un vettore $v\neq0$ con $f(v)=\lambda v$ è un **autovettore** di **autovalore** $\lambda$. Diagonalizzare $=$ trovare una base di $V$ fatta interamente di autovettori. Se questa base esiste, la formula del cambio di base dà
$$
C^{-1}AC=D,
\tag{2.1}
$$
dove $C$ ha per colonne gli autovettori (le nuove coordinate) e $D$ gli autovalori corrispondenti. La (2.1) non è una manipolazione: è la traduzione matriciale di "$A$ e $D$ sono lo stesso operatore visto in due basi". Matrici che soddisfano $C^{-1}AC=D$ si dicono **simili**; matrici simili condividono polinomio caratteristico, autovalori con molteplicità, traccia, determinante, rango.

### Autovalori, autospazi, le due molteplicità

Gli autovalori sono le radici del **polinomio caratteristico**
$$
p_A(\lambda)=\det(A-\lambda I).
\tag{2.2}
$$
Perché: $\lambda$ è autovalore $\iff$ esiste $v\neq0$ con $(A-\lambda I)v=0$ $\iff$ $A-\lambda I$ è singolare $\iff$ $\det(A-\lambda I)=0$. L'**autospazio** relativo a $\lambda$ è il nucleo
$$
V_\lambda=\ker(A-\lambda I)=\{v: Av=\lambda v\},
\tag{2.3}
$$
un sottospazio (cap. 1, formula 1.3): si trova risolvendo il sistema omogeneo $(A-\lambda I)v=0$ con Gauss.

A ogni autovalore si associano due numeri:
- **molteplicità algebrica** $\text{m.a}(\lambda)$: la molteplicità di $\lambda$ come radice di $p_A$.
- **molteplicità geometrica** $\text{m.g.}(\lambda)=\dim V_\lambda$: quanti autovettori indipendenti dà.

Vale sempre la catena
$$
1\le \text{m.g.}(\lambda)\le \text{m.a.}(\lambda).
\tag{2.4}
$$
La disuguaglianza a destra è il fatto strutturale che governa tutto: un autovalore può "promettere" $\text{m.a.}$ autovettori ma consegnarne meno.

### Il criterio

Ipotesi: $V$ di dimensione finita $n$, $K=\mathbb{R}$ o $\mathbb{C}$.

$A$ è diagonalizzabile su $K$ $\iff$ valgono entrambe:
$$
\text{(D1)}\ \ p_A\ \text{si fattorizza completamente in } K;\qquad
\text{(D2)}\ \ \text{m.a.}(\lambda)=\text{m.g.}(\lambda)\ \text{per ogni autovalore }\lambda.
\tag{2.5}
$$

Perché funziona: autospazi relativi ad autovalori distinti sono in somma diretta. La somma delle dimensioni degli autospazi è $\sum_\lambda \text{m.g.}(\lambda)$. Per avere una base di autovettori serve $\sum_\lambda \text{m.g.}(\lambda)=n$. Poiché $\sum_\lambda \text{m.a.}(\lambda)=n$ quando (D1) vale, e $\text{m.g.}\le\text{m.a.}$, l'uguaglianza globale $\sum\text{m.g.}=n$ equivale a $\text{m.g.}(\lambda)=\text{m.a.}(\lambda)$ per ogni singolo $\lambda$. Basta *un* autovalore con $\text{m.g.}<\text{m.a.}$ per far fallire tutto.

Due conseguenze operative che risparmiano lavoro:
- **Autovalori tutti distinti** ($\text{m.a.}=1$ ovunque): la (2.4) forza $\text{m.g.}=1=\text{m.a.}$, quindi diagonalizzabile. Non serve calcolare gli autospazi per *decidere*.
- Su $\mathbb{C}$ la (D1) è automatica (teorema fondamentale dell'algebra): resta solo la (D2).

---

## 4. Connessioni

**A monte.** Autospazio $=$ nucleo $=$ sottospazio: tutto il cap. 1 (Gauss, rango, dimensione via 1.4) è il motore per calcolare $\text{m.g.}=\dim\ker(A-\lambda I)$. Il determinante serve per (2.2).

**A valle.** Il teorema spettrale (cap. 3) è questo capitolo con una garanzia in più: le matrici *simmetriche* sono sempre diagonalizzabili, con base di autovettori *ortonormale*. Quando la diagonalizzazione fallisce (D2 violata), il rimedio è la forma di Jordan (cap. 8), che sostituisce $D$ con blocchi triangolari; il confronto $\text{m.a.}$ vs $\text{m.g.}$ di qui diventa là il conteggio dei blocchi via $\operatorname{rk}(A-\lambda I)^k$. La costruzione della matrice associata a un operatore definito per immagini (esercizi tipo `Geometria 2024-01-22`) usa il cambio di base del cap. 5.

**Cross-domain.** In meccanica quantistica gli osservabili sono operatori autoaggiunti, sempre diagonalizzabili in base ortonormale (versione infinito-dimensionale del teorema spettrale): autovalori $=$ risultati di misura, autospazi $=$ stati con valore definito, molteplicità geometrica $=$ degenerazione. La distinzione $\text{m.a.}$ vs $\text{m.g.}$ è la differenza fra degenerazione nominale e stati fisicamente indipendenti. In meccanica statistica dei sistemi complessi (la traiettoria tesi) la struttura spettrale di matrici aleatorie e la statistica delle degenerazioni sono il pane quotidiano.

---

## 5. Metodi risolutivi (le ricette)

### R1 — Procedura completa: autovalori → autospazi → matrice diagonalizzante $C$

*Obiettivo: data $A\in M_n$, decidere la diagonalizzabilità e produrre $C,D$ con $C^{-1}AC=D$.*

1. **Polinomio caratteristico.** Calcola $p_A(\lambda)=\det(A-\lambda I)$. Sfrutta la struttura: se $A$ è triangolare (o a blocchi), gli autovalori sono sulla diagonale, niente conto (Attenzione 1).
2. **Autovalori e m.a.** Fattorizza $p_A$; leggi radici e molteplicità algebriche. Somma delle m.a. $=n$ (se non torna, hai sbagliato il polinomio).
3. **Autospazi e m.g.** Per ogni $\lambda$: risolvi $(A-\lambda I)v=0$ con Gauss. $\text{m.g.}(\lambda)=\dim V_\lambda=n-\operatorname{rk}(A-\lambda I)$. Trova una base di ogni $V_\lambda$.
4. **Criterio.** Verifica $\text{m.a.}(\lambda)=\text{m.g.}(\lambda)$ per ogni $\lambda$ (su $\mathbb{R}$ controlla anche che $p_A$ si spezzi tutto). Se una sola uguaglianza fallisce: **non diagonalizzabile**, stop.
5. **Montaggio.** $C=$ autovettori in colonna (tutte le basi degli autospazi affiancate); $D=$ diagonale con gli autovalori **nello stesso ordine delle colonne di $C$**. Controllo veloce: $C$ deve essere invertibile (le $n$ colonne indipendenti — garantito se il criterio è passato).

**Attenzione 1.** Per matrici triangolari gli autovalori si leggono in diagonale, ma questo **non** rende la matrice automaticamente diagonalizzabile: devi comunque controllare le m.g. degli autovalori ripetuti.

**Attenzione 2 (base ONB).** Se la consegna chiede una base *ortonormale* di autovettori (caso simmetrico, cap. 3), non basta $C$: devi **normalizzare** ogni autovettore ($v/\|v\|$) e, dentro un autospazio di dimensione $\ge2$, prima ortogonalizzare con Gram–Schmidt. Dimenticare la normalizzazione finale è l'errore più frequente su questo tipo (mappa #2/#3). Se la consegna chiede solo $C$ diagonalizzante, **non** normalizzare: perdi tempo e sporchi i conti.

*Applicazione — esercizio A.* $A-\lambda I$ è triangolare a meno della colonna centrale; $p_A(\lambda)=(1-\lambda)^2(2-\lambda)$. Autovalori: $\lambda=1$ (m.a. $2$), $\lambda=2$ (m.a. $1$). Per $\lambda=2$: m.a. $1\Rightarrow$ m.g. $1$ (automatico). Il nodo è $\lambda=1$:
$$
A-I=\begin{pmatrix}0&1&0\\0&1&0\\0&-1&0\end{pmatrix},\quad \operatorname{rk}=1,\quad \text{m.g.}(1)=3-1=2=\text{m.a.}(1).
$$
Criterio soddisfatto: **diagonalizzabile**. Autospazio $V_1=\ker(A-I)$: $x_2=0$, $x_1,x_3$ liberi $\Rightarrow$ base $\{(1,0,0),(0,0,1)\}$. Per $\lambda=2$: $A-2I=\begin{psmallmatrix}-1&1&0\\0&0&0\\0&-1&-1\end{psmallmatrix}$, da cui $x_1=x_2$, $x_3=-x_2$, autovettore $(1,1,-1)$. Montaggio:
$$
C=\begin{pmatrix}1&0&1\\0&0&1\\0&1&-1\end{pmatrix},\qquad D=\begin{pmatrix}1&0&0\\0&1&0\\0&0&2\end{pmatrix}.
$$

### R2 — Test di diagonalizzabilità: m.a. vs m.g. con lo stop-and-check

*Obiettivo: rispondere solo "diagonalizzabile sì/no", senza necessariamente costruire $C$.*

1. Trova autovalori e m.a. (passi 1–2 di R1).
2. **Se tutti gli autovalori sono distinti** (tutte m.a. $=1$): diagonalizzabile, fine. Nessun autospazio da calcolare.
3. **Per ogni autovalore con m.a. $\ge2$**: calcola $\text{m.g.}=n-\operatorname{rk}(A-\lambda I)$. Confronta con la m.a.
4. Diagonalizzabile $\iff$ m.g. $=$ m.a. per *ognuno* di questi (e $p_A$ spezzato, su $\mathbb{R}$).

**Attenzione 3 (il trabocchetto principale del tipo #2).** Non fermarti dopo aver trovato m.a. $=2$ dichiarando la matrice diagonalizzabile. La m.a. da sola **non decide nulla**: devi calcolare la m.g. Fonte: `soluzioniesame20200204` es. 3, dove $\lambda=-1$ ha m.a. $2$ e va verificato che m.g. $=2$ (lì torna, ma il conto è obbligatorio, non deducibile). Il caso opposto — m.a. $2$ ma m.g. $1$ — è esattamente ciò che rende una matrice non diagonalizzabile, e non lo vedi se salti il passo 3.

### R3 — Potenze $A^n$ via diagonalizzazione

*Obiettivo: calcolare $A^n$ (spesso $A^{10}$, tipo `ex_Fis8`) sfruttando $A=CDC^{-1}$.*

1. Diagonalizza (R1): $A=CDC^{-1}$.
2. Usa $A^n=CD^nC^{-1}$, che vale perché i fattori $C^{-1}C$ si cancellano a telescopio: $A^n=(CDC^{-1})(CDC^{-1})\cdots=CD^nC^{-1}$.
3. $D^n=\operatorname{diag}(\lambda_1^n,\dots,\lambda_n^n)$ è immediato.
4. Moltiplica $C\,D^n\,C^{-1}$. Serve $C^{-1}$: calcolalo una volta sola.

**Attenzione 4.** Il metodo richiede che $A$ sia diagonalizzabile. Se non lo è, $A^n$ si fa con Jordan (cap. 8) o, per nilpotenti, direttamente ($A^2=0\Rightarrow A^n=0$ per $n\ge2$; vedi `Prova 8_2_23`, dove $A^2=0$ dà $(I+A)^{-1}=I-A$).

### R4 — Caso rapido: $\operatorname{tr}A=\det A=0$, $A\neq0$ ($2\times2$)

*Obiettivo: decidere la diagonalizzabilità senza polinomio.*

1. Per una $2\times2$: $p_A(\lambda)=\lambda^2-(\operatorname{tr}A)\lambda+\det A$. Con $\operatorname{tr}A=\det A=0$ diventa $p_A(\lambda)=\lambda^2$, quindi $\lambda=0$ con m.a. $2$.
2. $A\neq0\Rightarrow \operatorname{rk}A\ge1\Rightarrow \text{m.g.}(0)=2-\operatorname{rk}A\le1<2=\text{m.a.}(0)$.
3. Conclusione immediata: **non diagonalizzabile**. (È simile al blocco di Jordan $\begin{psmallmatrix}0&1\\0&0\end{psmallmatrix}$.)

**Attenzione 5.** Riconosci il pattern *prima* di lanciarti nei conti. Fonte `soluzioniesame20200204` es. 4: la matrice complessa con $\operatorname{tr}=\det=0$ e $\neq0$ è non diagonalizzabile in tre righe. Chi calcola il polinomio, lo fattorizza, imposta $(A-0I)v=0$... arriva alla stessa risposta con dieci volte il lavoro. In sede d'esame il tempo è punteggio.

*Applicazione — esercizio B.* $\operatorname{tr}A=0$, $\det A=0$, $A\neq0$: per R4, $\lambda=0$ doppio, $\text{m.g.}(0)=2-\operatorname{rk}A\le1<2$. Non diagonalizzabile. (Nota: pur essendo su $\mathbb{C}$, non è nemmeno hermitiana — è simmetrica ma non autoaggiunta; cap. 7.)

---

## 6. Domande di comprensione profonda

1. Perché vale sempre $\text{m.g.}\le\text{m.a.}$ e mai il contrario? Cosa vieta a un autovalore di avere più autovettori indipendenti della sua molteplicità come radice?
2. Due matrici con lo stesso polinomio caratteristico sono necessariamente simili? E se in più hanno le stesse molteplicità geometriche per ogni autovalore? (Pensa $3\times3$ prima di rispondere; anticipa il cap. 8.)
3. La matrice $C$ diagonalizzante non è unica. Quali libertà hai nel costruirla, e come si riflettono su $D$?
4. Su $\mathbb{R}$ una rotazione del piano di angolo $\theta\neq0,\pi$ non è diagonalizzabile; su $\mathbb{C}$ sì. Cosa cambia strutturalmente passando da $\mathbb{R}$ a $\mathbb{C}$, e perché la (D1) è la condizione che cattura questa differenza?
5. Se $A$ è diagonalizzabile e invertibile, cosa puoi dire di $A^{-1}$ e dei suoi autovalori/autovettori senza rifare alcun conto?

---

## 7. Esercizi di verifica

**Esercizio 1 (standard).** Stabilire se
$$
A=\begin{pmatrix}2&0&0\\1&2&0\\0&0&3\end{pmatrix}
$$
è diagonalizzabile. In caso affermativo esibire $C$ e $D$ con $C^{-1}AC=D$.

**Esercizio 2 (trabocchetto).** Sia $A=\begin{pmatrix}3&1\\-1&1\end{pmatrix}$. Un compagno osserva che $\operatorname{tr}A=4$, $\det A=4$, quindi $p_A(\lambda)=\lambda^2-4\lambda+4=(\lambda-2)^2$: autovalore $2$ con m.a. $2$, e conclude "diagonalizzabile perché ho un autovalore doppio". Dov'è l'errore? Qual è la risposta corretta?

---

### Soluzioni

**Esercizio 1.** $A$ è triangolare inferiore a blocchi: autovalori in diagonale, $\lambda=2$ (m.a. $2$), $\lambda=3$ (m.a. $1$). Per $\lambda=3$: m.a. $1\Rightarrow$ m.g. $1$. Per $\lambda=2$ (Attenzione 1, va controllato):
$$
A-2I=\begin{pmatrix}0&0&0\\1&0&0\\0&0&1\end{pmatrix},\quad \operatorname{rk}=2,\quad \text{m.g.}(2)=3-2=1<2=\text{m.a.}(2).
$$
Il criterio (D2) fallisce su $\lambda=2$: **non diagonalizzabile**. (Trappola dell'Attenzione 1: triangolare con autovalori letti in diagonale non implica diagonalizzabile.)

**Esercizio 2.** L'errore è l'Attenzione 3: m.a. $=2$ **non** implica diagonalizzabile; va calcolata la m.g. Qui
$$
A-2I=\begin{pmatrix}1&1\\-1&-1\end{pmatrix},\quad \operatorname{rk}=1,\quad \text{m.g.}(2)=2-1=1<2=\text{m.a.}(2).
$$
La m.g. è $1$, minore della m.a.: la matrice **non** è diagonalizzabile. Un solo autovalore con difetto geometrico basta a chiudere in negativo. (Struttura: $A$ è simile al blocco di Jordan $\begin{psmallmatrix}2&1\\0&2\end{psmallmatrix}$.)

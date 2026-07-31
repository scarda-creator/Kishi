# Capitolo 1 — Sottospazi vettoriali

Corso: Geometria (Algebra Lineare) · docente Diverio · La Sapienza
Tipo mappa coperto: #1 Sottospazi vettoriali (freq 19/28, 2013–2024). Base tecnica per #4 (sistemi parametrici).

---

## 1. Aggancio operativo

Due esercizi reali della banca-dati fissano cosa questo capitolo ti mette in condizione di fare.

**Esercizio A — struttura "standard" (Compito 23/09/2014, es. 1; ricorre identico in `Compito_23_02_16`, `Compito24_06_16`, `Compito050219`).**
Siano dati due sottospazi di $\mathbb{R}^4$:
$$U = \operatorname{Span}\{(1,1,0,1),\,(2,1,1,0),\,(3,2,1,1)\}, \qquad W = \{(x_1,x_2,x_3,x_4)\in\mathbb{R}^4 : x_1 - x_2 + x_3 = 0,\ x_2 + x_4 = 0\}.$$
Determinare $\dim U$, $\dim W$, una base di $U+W$, la dimensione di $U\cap W$, e stabilire se $\mathbb{R}^4 = U\oplus W$.

**Esercizio B — struttura "non standard", il trabocchetto d'esame (prova 21/01/2019, es. 3).**
Per ciascuno dei seguenti sottoinsiemi di $M_{2,2}(\mathbb{C})$ stabilire se è un sottospazio vettoriale:
$$
S_1=\{A: \operatorname{tr}A=0\},\quad
S_2=\{A: \det A=0\},\quad
S_3=\{A: a_{12}=a_{21}=0\},\quad
$$
$$
S_4=\{A: p_A(\lambda)\ \text{ha tutte le radici reali}\},\quad
S_5=\{A: C^{-1}AC\ \text{è triangolare per qualche } C\}.
$$

L'esercizio A è meccanico se hai un motore di calcolo ordinato. L'esercizio B è dove ci si gioca i punti: due dei cinque insiemi *non* sono sottospazi, e il motivo non è calcolo ma la proprietà di chiusura. Questo capitolo dà entrambe le cose.

---

## 2. Cosa devi saper fare

Al termine del capitolo, davanti agli esercizi A e B devi eseguire senza esitazione:

1. Passare da un insieme di generatori a una **base** eliminando la ridondanza (Gauss), e leggere la dimensione dal numero di pivot.
2. Passare dalla descrizione **per Span** (elenco di generatori) a quella **per equazioni cartesiane** e viceversa, sapendo quante equazioni indipendenti aspettarti.
3. Calcolare $\dim(U+W)$ montando i generatori dei due sottospazi e riducendo; ricavare $\dim(U\cap W)$ dalla **formula di Grassmann** senza calcolare l'intersezione se ti serve solo la dimensione.
4. Decidere se una somma è **diretta** e se riempie tutto lo spazio, verificando le due condizioni corrette e non solo una.
5. Stabilire se un sottoinsieme è un sottospazio applicando la **chiusura** — anche quando l'ambiente è $M_{2,2}$ o uno spazio di polinomi, dove l'intuizione geometrica non aiuta e serve un controesempio.

Le prime quattro sono procedure. La quinta è un giudizio strutturale: è quella che separa chi ha capito da chi ha imparato a memoria.

---

## 3. Perché funziona (i principi)

### Cosa cattura strutturalmente un sottospazio

Uno spazio vettoriale $V$ è un insieme in cui puoi fare due operazioni — sommare vettori e moltiplicarli per scalari — e restare dentro. Un **sottospazio** $U\subseteq V$ è un sottoinsieme che è *chiuso rispetto a queste stesse due operazioni*: qualunque combinazione lineare di elementi di $U$ è ancora in $U$. Non è un dettaglio tecnico. È la traduzione algebrica dell'idea geometrica di "oggetto lineare passante per l'origine": una retta per $0$, un piano per $0$, un iperpiano per $0$. La chiusura è ciò che rende $U$ *piatto* e *centrato in $0$*. Togli l'origine (traslando) e perdi la chiusura per somma: ottieni un sottospazio *affine*, che non è un sottospazio vettoriale.

Formalmente, $U\subseteq V$ è sottospazio se e solo se valgono tre condizioni:

$$
\text{(i)}\ \ 0\in U;\qquad
\text{(ii)}\ \ u,u'\in U \Rightarrow u+u'\in U;\qquad
\text{(iii)}\ \ u\in U,\ \lambda\in K \Rightarrow \lambda u\in U.
\tag{1.1}
$$

Le tre si comprimono in una sola: $U\neq\varnothing$ e per ogni $u,u'\in U$, $\lambda,\mu\in K$ vale $\lambda u+\mu u'\in U$. La condizione (i) non è ridondante nella pratica d'esame: è il test più rapido per *bocciare* un insieme (se $0\notin U$, hai finito).

### Le due facce di un sottospazio: Span ed equazioni

Ogni sottospazio si può descrivere in due modi duali, e saper passare dall'uno all'altro è metà del lavoro d'esame.

**Descrizione generativa (Span).** Dato un insieme di vettori $v_1,\dots,v_k\in V$,
$$
\operatorname{Span}\{v_1,\dots,v_k\} = \Big\{\textstyle\sum_{i=1}^k \lambda_i v_i : \lambda_i\in K\Big\}
\tag{1.2}
$$
è il più piccolo sottospazio che li contiene. È l'insieme di *tutto ciò che puoi costruire* da quei generatori. La descrizione è *dall'interno*: dici come produrre gli elementi.

**Descrizione per equazioni cartesiane.** Un sottospazio di $K^n$ è anche l'insieme delle soluzioni di un sistema lineare omogeneo:
$$
U = \{x\in K^n : Ax = 0\}
\tag{1.3}
$$
per una opportuna matrice $A$. La descrizione è *dall'esterno*: dici quali vincoli un vettore deve soddisfare per appartenere. Questo insieme è sempre un sottospazio perché è il nucleo di $x\mapsto Ax$, e il nucleo è chiuso per linearità: se $Ax=0$ e $Ay=0$ allora $A(\lambda x+\mu y)=0$.

Il legame quantitativo fra le due descrizioni è il **teorema del rango** applicato ad $A$:
$$
\dim U = n - \operatorname{rk}A = n - (\text{numero di equazioni indipendenti}).
\tag{1.4}
$$
La (1.4) ha una conseguenza operativa che userai in continuazione: un sottospazio di dimensione $d$ in $K^n$ si descrive con esattamente $n-d$ equazioni cartesiane indipendenti (la sua *codimensione*). Se ne scrivi di più, alcune sono dipendenti; se ne scrivi di meno, stai descrivendo un sottospazio più grande.

### La formula di Grassmann

Dati due sottospazi $U,W$ di uno spazio a dimensione finita:
$$
\boxed{\ \dim(U+W) = \dim U + \dim W - \dim(U\cap W)\ }
\tag{1.5}
$$

Ipotesi di validità: $U,W$ sottospazi di uno stesso spazio $V$ di dimensione finita. Nient'altro.

Derivazione (passaggi-cardine). Sia $\{z_1,\dots,z_d\}$ una base di $U\cap W$, con $d=\dim(U\cap W)$. La estendo a una base di $U$ aggiungendo $s$ vettori: $\{z_1,\dots,z_d,\,u_1,\dots,u_s\}$, quindi $\dim U = d+s$. La estendo *anche* a una base di $W$ aggiungendo $t$ vettori: $\{z_1,\dots,z_d,\,w_1,\dots,w_t\}$, quindi $\dim W = d+t$. Ora dimostro che l'unione
$$
B=\{z_1,\dots,z_d,\,u_1,\dots,u_s,\,w_1,\dots,w_t\}
$$
è una base di $U+W$. Che $B$ generi $U+W$ è immediato (genera sia $U$ sia $W$). Resta l'indipendenza. Supponi $\sum a_i z_i + \sum b_j u_j + \sum c_k w_k = 0$. Isolo: $\sum c_k w_k = -\sum a_i z_i - \sum b_j u_j \in U$. Ma $\sum c_k w_k\in W$, quindi appartiene a $U\cap W$: si scrive nella base $\{z_i\}$, cioè i $w_k$ combinati stanno in $U\cap W$. Poiché $\{z_1,\dots,z_d,w_1,\dots,w_t\}$ è base di $W$, i $w_k$ sono indipendenti dagli $z_i$: forza $c_k=0$ per ogni $k$. Restano gli $z_i$ e $u_j$, indipendenti perché base di $U$: forza $a_i=b_j=0$. Quindi $B$ è base e
$$
\dim(U+W)=d+s+t=(d+s)+(d+t)-d=\dim U+\dim W-\dim(U\cap W). \qquad\blacksquare
$$

La forza pratica della (1.5): $\dim(U+W)$ si calcola direttamente (riduci i generatori accatastati), $\dim U$ e $\dim W$ pure. L'intersezione, che è la parte fastidiosa da esibire, la ottieni per differenza *senza costruirla*, se l'esame chiede solo la dimensione.

### Somma diretta

La somma $U+W$ è **diretta**, scritta $U\oplus W$, quando ogni elemento della somma si scrive in *un solo modo* come $u+w$. Questo equivale a
$$
U\cap W=\{0\}.
\tag{1.6}
$$
Per Grassmann, se $U\cap W=\{0\}$ allora $\dim(U\oplus W)=\dim U+\dim W$. E $U\oplus W=V$ (somma diretta che riempie tutto, cioè $W$ è un *complementare* di $U$) equivale alle **due** condizioni
$$
U\cap W=\{0\}\quad\text{e}\quad \dim U+\dim W=\dim V.
\tag{1.7}
$$
Quando $\dim U+\dim W=\dim V$ è già verificata, le due condizioni $U\cap W=\{0\}$ e $U+W=V$ diventano *equivalenti* fra loro (di nuovo per Grassmann): ne basta una. Questo risparmio ricorre in ogni esercizio di decomposizione diretta.

---

## 4. Connessioni

**A monte.** Servono solo i prerequisiti del biennio: combinazione lineare, indipendenza, base, dimensione, eliminazione di Gauss e rango. Il capitolo li ricompatta come *motore*, non li riespone da zero.

**A valle, dentro il corso.** Questo è il capitolo-radice. La (1.3)–(1.4) è la spina dorsale dei sistemi parametrici (cap. 4): "quante soluzioni ha $Ax=b$" è la versione affine di "quant'è grande $\ker A$". Nucleo e immagine di un'applicazione lineare (cap. 5) *sono* sottospazi, e il teorema del rango là è la (1.4) qui. Autospazi (cap. 2) sono nuclei di $A-\lambda I$: sottospazi, si trovano con la (1.3). Il complemento ortogonale $W^\perp$ (cap. 3) è un caso speciale di complementare, con la geometria in più del prodotto scalare. La segnatura (cap. 6) userà la decomposizione in sottospazi su cui la forma è definita di segno costante.

**Cross-domain.** La dualità Span/equazioni è la stessa dualità che in geometria differenziale (III anno, II sem) separa la descrizione *parametrica* di una sottovarietà (immagine di una mappa) da quella *implicita* (zero-luogo di una funzione), col teorema della funzione implicita a fare da ponte non lineare. Il teorema del rango (1.4) è il modello lineare di quel ponte. In meccanica quantistica gli autospazi degenri sono sottospazi e la loro dimensione è la molteplicità: la (1.4) è già lì.

---

## 5. Metodi risolutivi (le ricette)

Questo è il cuore operativo. Cinque ricette, ognuna passo-passo, con i trabocchetti documentati come **punti d'attenzione numerati dentro la procedura** — dove effettivamente ti fregano.

### R1 — Da Span a base (via Gauss)

*Obiettivo: dato $U=\operatorname{Span}\{v_1,\dots,v_k\}$, trovare una base e $\dim U$.*

1. Scrivi i generatori **come righe** di una matrice $M$ ($k$ righe, $n$ colonne).
2. Riduci $M$ a scala (Gauss). Le operazioni sulle righe non cambiano lo *spazio riga*, quindi non cambiano $\operatorname{Span}$.
3. Le **righe non nulle** della matrice ridotta formano una base di $U$.
4. $\dim U =$ numero di pivot = numero di righe non nulle.

**Attenzione 1.** Metti i vettori come *righe*, non come colonne, se vuoi che lo spazio generato sia lo spazio riga. Se li metti come colonne, la riduzione ti dà una base dello *spazio colonna* (che ha la stessa dimensione, ma i vettori di base non sono più i tuoi generatori originali riscalati — cambia cosa consegni).

**Attenzione 2.** In ambienti non standard — $M_{2,2}(K)$, $K[x]_{\le d}$ — non lavori sui "vettori" astratti: prima **coordinatizzi** rispetto a una base canonica dell'ambiente, poi applichi Gauss alle coordinate. Esempio: in $M_{2,2}$ la base canonica è $E_{11},E_{12},E_{21},E_{22}$, e $\begin{psmallmatrix}a&b\\c&d\end{psmallmatrix}\leftrightarrow(a,b,c,d)$. Da quel momento è identico a $\mathbb{R}^4$.

*Applicazione all'esercizio A.* Genero $U$ da $(1,1,0,1),(2,1,1,0),(3,2,1,1)$. Osservo subito: $(3,2,1,1)=(1,1,0,1)+(2,1,1,0)$. Il terzo è somma dei primi due, quindi ridondante. Riducendo restano due righe indipendenti: $\dim U=2$, base $\{(1,1,0,1),(2,1,1,0)\}$.

### R2 — Da Span a equazioni cartesiane (e ritorno)

**Direzione A → (Span a cartesiane).** *Obiettivo: dato $U=\operatorname{Span}\{v_1,\dots,v_d\}$ (già base, $\dim U=d$) in $K^n$, trovare le equazioni.*

1. Aspettati esattamente $n-d$ equazioni indipendenti (codimensione, dalla (1.4)).
2. Metodo diretto: $x=(x_1,\dots,x_n)\in U$ se e solo se $x$ è combinazione dei $v_i$, cioè il sistema $\big[\,v_1\,|\,\cdots\,|\,v_d\,|\,x\,\big]$ (vettori come colonne) è compatibile in $x$. Imponi che il rango non aumenti aggiungendo la colonna $x$: riduci $[\,v_1|\cdots|v_d\,]$ a scala, trascinando $x$, e annulla le componenti nelle righe che diventano nulle a sinistra. Ogni riga nulla a sinistra dà un'equazione in $x$.
3. Verifica il conteggio: devono venire $n-d$ equazioni indipendenti. Se ne vengono di meno, hai perso un vincolo; di più, ne hai una dipendente.

**Direzione ← (cartesiane a Span/base).** *Obiettivo: dato $W=\{x:Ax=0\}$, trovare base e dimensione.*

1. Riduci $A$ a scala. Identifica variabili **pivot** (legate) e **libere**.
2. $\dim W = n - \operatorname{rk}A =$ numero di variabili libere.
3. Per ogni variabile libera poni $=1$ e le altre libere $=0$, risolvi le pivot: ottieni un vettore di base. I vettori così costruiti sono automaticamente indipendenti.

**Attenzione 3.** Il numero di equazioni cartesiane indipendenti è $n-\dim W$, non $\dim W$. Confondere i due è l'errore classico: in $\mathbb{R}^4$ un piano ($\dim 2$) ha $2$ equazioni, non $2$ come dimensione dello spazio delle equazioni... conta la codimensione.

*Applicazione all'esercizio A.* $W=\{x_1-x_2+x_3=0,\ x_2+x_4=0\}$: due equazioni indipendenti in $\mathbb{R}^4$, quindi $\dim W=4-2=2$. Variabili libere $x_3,x_4$: da $x_1=x_2-x_3=(-x_4)-x_3$ e $x_2=-x_4$ ottengo la base $\{(-1,0,1,0),\,(-1,-1,0,1)\}$.

### R3 — $\dim(U+W)$ e $\dim(U\cap W)$ via Grassmann

*Obiettivo: date descrizioni di $U$ e $W$, trovare le dimensioni della somma e dell'intersezione.*

1. Porta entrambi in forma di Span (con R1/R2 se uno è dato per equazioni: risolvi e prendi la base).
2. $\dim(U+W)$: accatasta *tutti* i generatori di $U$ e $W$ come righe di un'unica matrice, riduci, conta i pivot.
3. $\dim(U\cap W)$: applica Grassmann (1.5), $\dim(U\cap W)=\dim U+\dim W-\dim(U+W)$. **Non** risolvere sistemi per l'intersezione se ti serve solo la dimensione.
4. Se l'esame chiede una *base* di $U\cap W$ (non solo la dimensione): un vettore $z\in U\cap W$ si scrive $z=\sum\lambda_i v_i=\sum\mu_j w_j$; imponi l'uguaglianza, risolvi il sistema omogeneo nelle $(\lambda,\mu)$, sostituisci le soluzioni in $\sum\lambda_i v_i$.

**Attenzione 4.** Grassmann dà la dimensione *gratis*. Il calcolo esplicito dell'intersezione (passo 4) è più lungo e più esposto a errori: fallo solo se richiesto. Molti perdono tempo costruendo $U\cap W$ quando bastava la sottrazione.

*Applicazione all'esercizio A.* $\dim U=2$, $\dim W=2$. Accatasto i 4 vettori base di $U$ e $W$: $(1,1,0,1),(2,1,1,0),(-1,0,1,0),(-1,-1,0,1)$. Riducendo si trovano $4$ pivot, quindi $\dim(U+W)=4$, cioè $U+W=\mathbb{R}^4$. Grassmann: $\dim(U\cap W)=2+2-4=0$.

### R4 — Verifica di somma diretta $U\oplus W$

*Obiettivo: stabilire se $U\oplus W$ è diretta e/o se riempie $V$.*

1. Calcola $\dim U$, $\dim W$, $\dim(U+W)$ (R3).
2. Somma diretta $\iff U\cap W=\{0\}\iff \dim(U\cap W)=0\iff \dim(U+W)=\dim U+\dim W$.
3. Se la domanda è "$V=U\oplus W$?", servono **due** cose: $U\cap W=\{0\}$ **e** $\dim U+\dim W=\dim V$. Quando la seconda è già vera, la prima equivale a $U+W=V$: ne basta una.

**Attenzione 5.** Mostrare solo $\dim U+\dim W=\dim V$ **non basta** per concludere $V=U\oplus W$: due piani distinti in $\mathbb{R}^4$ possono avere dimensioni che sommano a $4$ ma intersecarsi in una retta ($U\cap W\neq\{0\}$), quindi $U+W\neq\mathbb{R}^4$. Devi verificare *anche* l'intersezione nulla (o equivalentemente $U+W=V$).

*Applicazione all'esercizio A.* $\dim(U\cap W)=0$ e $\dim U+\dim W=2+2=4=\dim\mathbb{R}^4$: entrambe le condizioni valgono, quindi $\mathbb{R}^4=U\oplus W$. Risposta completa all'intero esercizio A.

### R5 — "È un sottospazio?" (il test di chiusura, anche su strutture non standard)

*Obiettivo: dato $S\subseteq V$, decidere se è sottospazio.*

1. **Test dello zero.** $0\in S$? Se no, non è sottospazio — finito. (Elimina in un colpo i sottospazi affini: "$\{p:p(0)=2018\}$" non contiene il polinomio nullo.)
2. **Test di chiusura per combinazione.** Presi $u,u'\in S$ generici e $\lambda,\mu$ scalari, verifica $\lambda u+\mu u'\in S$ manipolando la *condizione che definisce $S$*. Se la condizione è lineare (uguaglianze omogenee: tracce, componenti, valutazioni omogenee), la chiusura passa e $S$ è sottospazio.
3. **Se la condizione non è lineare** (contiene un prodotto, un determinante, una disuguaglianza, un quantificatore su radici), **cerca un controesempio**: due elementi di $S$ la cui somma esce da $S$. Un solo controesempio esplicito chiude la questione.

**Attenzione 6.** Le trappole ricorrenti (prova 21/01/2019 es. 3; `autovalutativa` 23/11/2018; `soluzioniesame20200204` es. 5). Le condizioni *non lineari mascherate* che sembrano innocue:

- $\{A:\det A=0\}$ — **non** sottospazio. $\det$ non è lineare. Controesempio in $M_{2,2}$: $A=\begin{psmallmatrix}1&0\\0&0\end{psmallmatrix}$, $B=\begin{psmallmatrix}0&0\\0&1\end{psmallmatrix}$ hanno $\det=0$, ma $A+B=I$ ha $\det=1\neq0$. Fuori.
- $\{A:\ A\ \text{è diagonalizzabile}\}$ — **non** sottospazio. Somma di diagonalizzabili può non esserlo. Controesempio esplicito: $A=\begin{psmallmatrix}1&1\\0&0\end{psmallmatrix}$ e $B=\begin{psmallmatrix}0&0\\0&1\end{psmallmatrix}$ sono entrambe diagonalizzabili (triangolari con autovalori $0,1$ distinti). Ma $A+B=\begin{psmallmatrix}1&1\\0&1\end{psmallmatrix}$ ha autovalore $1$ doppio e $(A+B)-I=\begin{psmallmatrix}0&1\\0&0\end{psmallmatrix}$ ha rango $1$, quindi $\text{m.g.}=2-1=1<2=\text{m.a.}$: **non** diagonalizzabile. Il punto strutturale: la diagonalizzabilità è una condizione sugli autospazi, non chiusa per somma.
- $\{A:\ p_A(\lambda)\ \text{ha tutte le radici reali}\}$ — **non** sottospazio (prova 21/01/2019, es. 3.vii). La proprietà "spettro reale" non sopravvive alla somma: puoi sommare due matrici a spettro reale e ottenerne una con autovalori complessi.
- $\{A:\ C^{-1}AC\ \text{triangolare per qualche }C\}$ — questo insieme **è tutte** le matrici triangolarizzabili $=$ (su $\mathbb{C}$) tutte le matrici; ma inteso come "diagonalizzabili per coniugio" ricade nel caso precedente: **non** sottospazio (prova 21/01/2019, es. 3.vi).
- $\{p\in\mathbb{R}[x]_{\le2}: p(0)^2=2\}$ — **non** sottospazio (`autovalutativa` 23/11/2018): condizione quadratica, e per giunta $0\notin S$ (il polinomio nullo dà $0\neq2$).

Le condizioni che **sì** danno sottospazi negli stessi esami: $\{A:\operatorname{tr}A=0\}$ (traccia è lineare), $\{A:a_{12}=a_{21}=0\}$ (componenti nulle: lineare), $\{p:p(1)=0\}$ (valutazione è lineare, e $0(1)=0$), $\{p\ \text{divisibile per }x-1\}$ (equivale a $p(1)=0$).

*Applicazione all'esercizio B.* $S_1$ (traccia nulla): lineare, sottospazio, $\dim=3$. $S_2$ ($\det=0$): non sottospazio (controesempio sopra). $S_3$ ($a_{12}=a_{21}=0$): lineare, sottospazio, $\dim=2$. $S_4$ (radici reali): non sottospazio. $S_5$ (diagonalizzabile per coniugio): non sottospazio. Due bocciati su cinque — esattamente i due non lineari.

---

## 6. Domande di comprensione profonda

1. La (1.4) dice $\dim U=n-\operatorname{rk}A$. Se scrivo lo *stesso* sottospazio $U$ con due sistemi cartesiani diversi $Ax=0$ e $A'x=0$, che relazione lega $A$ e $A'$? Cosa è invariante e cosa no?
2. Perché $\{A:\det A=0\}$ non è chiuso per somma ma $\{A:\operatorname{tr}A=0\}$ sì? Cos'hanno di strutturalmente diverso $\det$ e $\operatorname{tr}$, oltre al fatto empirico che uno "funziona"?
3. Grassmann dà $\dim(U\cap W)$ senza costruire l'intersezione. Esiste un motivo per cui la *dimensione* dell'intersezione è determinata dalle dimensioni di $U,W,U+W$ ma la *base* dell'intersezione no?
4. La condizione $U\cap W=\{0\}$ garantisce l'unicità della scrittura $u+w$. Riesci a ricostruire la dimostrazione che unicità di scrittura $\iff$ intersezione nulla, senza rileggere la sezione 3?
5. In $M_{2,2}(\mathbb{C})$ visto come spazio su $\mathbb{C}$ ha dimensione $4$; visto come spazio su $\mathbb{R}$ ha dimensione $8$. Un sottoinsieme può essere sottospazio su $\mathbb{R}$ ma non su $\mathbb{C}$? (Anticipa il cap. 9.)

---

## 7. Esercizi di verifica

**Esercizio 1 (standard).** In $\mathbb{R}^4$ siano
$$
U=\operatorname{Span}\{(1,0,1,0),(0,1,0,1),(1,1,1,1)\},\qquad
W=\{x: x_1-x_3=0\}.
$$
Determinare $\dim U$, $\dim W$, $\dim(U+W)$, $\dim(U\cap W)$, e stabilire se $U+W=\mathbb{R}^4$.

**Esercizio 2 (trabocchetto).** In $M_{2,2}(\mathbb{R})$ stabilire, con dimostrazione o controesempio, quali dei seguenti sono sottospazi e, per quelli che lo sono, calcolarne la dimensione:
$$
T_1=\{A: A=A^\top\},\qquad
T_2=\{A: \det A=0\},\qquad
T_3=\{A: \operatorname{tr}A=1\}.
$$

---

### Soluzioni

**Esercizio 1.**
$\dim U$: il terzo generatore è somma dei primi due, $(1,1,1,1)=(1,0,1,0)+(0,1,0,1)$. I primi due sono indipendenti. Quindi $\dim U=2$, base $\{(1,0,1,0),(0,1,0,1)\}$.

$\dim W$: una sola equazione indipendente $x_1-x_3=0$ in $\mathbb{R}^4$, quindi $\dim W=4-1=3$. Base (variabili libere $x_2,x_3,x_4$, con $x_1=x_3$): $\{(0,1,0,0),(1,0,1,0),(0,0,0,1)\}$.

$\dim(U+W)$: accatasto i $2+3=5$ generatori come righe e riduco. Osservo che $(1,0,1,0)$ è già in $W$ (soddisfa $x_1=x_3$), come $(1,1,1,1)$; l'unico generatore di $U$ che *forse* esce da $W$ è $(0,1,0,1)$: verifica $x_1-x_3=0-0=0$ — anche questo sta in $W$. Quindi $U\subseteq W$, da cui $U+W=W$ e $\dim(U+W)=3$.

$\dim(U\cap W)$: Grassmann, $2+3-3=2$. Coerente con $U\subseteq W$, che dà $U\cap W=U$, $\dim=2$.

$U+W=\mathbb{R}^4$? No: $\dim(U+W)=3\neq4$. (Punto d'attenzione R4/A5 rovesciato: qui $\dim U+\dim W=5>4$, quindi la somma delle dimensioni non dice nulla; conta $\dim(U+W)$.)

**Esercizio 2.**
$T_1$ (matrici simmetriche $A=A^\top$): la condizione è lineare — se $A=A^\top$ e $B=B^\top$ allora $(\lambda A+\mu B)^\top=\lambda A^\top+\mu B^\top=\lambda A+\mu B$. Contiene $0$. **Sottospazio.** Dimensione: elementi $\begin{psmallmatrix}a&b\\b&d\end{psmallmatrix}$, tre parametri liberi, $\dim T_1=3$.

$T_2$ ($\det A=0$): **non sottospazio.** Controesempio: $A=\begin{psmallmatrix}1&0\\0&0\end{psmallmatrix}$, $B=\begin{psmallmatrix}0&0\\0&1\end{psmallmatrix}$ hanno entrambe $\det=0$, ma $A+B=I$ ha $\det=1\neq0$. La chiusura per somma fallisce (Attenzione 6). Nota: $\det$ non essendo lineare, non c'era da aspettarsi che passasse.

$T_3$ ($\operatorname{tr}A=1$): **non sottospazio.** Due modi di vederlo, entrambi validi. (i) Test dello zero: $\operatorname{tr}0=0\neq1$, quindi $0\notin T_3$ — fuori subito. (ii) Chiusura: se $\operatorname{tr}A=\operatorname{tr}B=1$ allora $\operatorname{tr}(A+B)=2\neq1$. È un sottospazio *affine* (traslato di $\{\operatorname{tr}=0\}$), non vettoriale. Trappola classica: la traccia è lineare, ma il vincolo è $=1$, non $=0$ — la costante non nulla rompe tutto.

# Saper-fare 01 · Sottospazi vettoriali

> **SOSTANZA DA VERIFICARE — generata in notte autonoma** (Dedalo, 2026-07-12). Correttezza matematica
> da ratificare da svegli (Giuseppe / Demiurgo Accademico). Approfondimento teorico: `capitoli/01-sottospazi-vettoriali.md`.
> Tipo mappa #1 · freq 19/28 · diff 2–3/5 · 2013–2024 · base di tutto il corso.

## La firma

Riconosci il tipo quando il testo contiene **oggetti lineari da mettere in relazione**: uno o due
sottospazi dati per `Span{…}` (dall'interno, generatori) o per **equazioni cartesiane** `{x : Ax=0}`
(dall'esterno, vincoli), e ti chiede `dim`, una base, `U+W`, `U∩W`, o se `V=U⊕W`. Oppure la variante-giudizio:
"stabilire se il sottoinsieme $S$ è un sottospazio". Parole-spia: *Span, dimensione, somma, intersezione,
somma diretta, complemento, è un sottospazio*.

Cosa NON confondere: l'ambiente può essere $\mathbb{R}^n$, ma anche $M_{2,2}$, $\mathbb{R}[t]_{\le 2}$,
spazi su $\mathbb{C}$ — la logica è **identica**, cambia solo che prima devi *coordinatizzare*. Se vedi
matrici o polinomi, non spaventarti: scegli la base canonica dell'ambiente e sei tornato in $\mathbb{R}^n$.

## L'idea

Un sottospazio è un sottoinsieme **chiuso per combinazione lineare** — traduzione algebrica di "oggetto
piatto passante per l'origine". Tutto il saper-fare poggia su due fatti:

- **Dualità Span ↔ equazioni.** Ogni sottospazio di $\mathbb{R}^n$ si scrive in due modi: come immagine
  (Span di generatori) o come nucleo (soluzioni di $Ax=0$). Passare dall'uno all'altro è metà del lavoro.
- **Teorema del rango come contabilità:** $\dim U = n - (\text{numero di equazioni cartesiane indipendenti})$.
  Un sottospazio di dimensione $d$ in $\mathbb{R}^n$ ha esattamente $n-d$ equazioni indipendenti (la sua
  codimensione). Questo conteggio ti dice sempre in anticipo quanti vincoli aspettarti.

Sopra c'è la **formula di Grassmann** $\dim(U+W)=\dim U+\dim W-\dim(U\cap W)$: ti dà la dimensione
dell'intersezione *gratis*, senza costruirla.

## La mossa

**A) Da Span a base e dimensione.** Metti i generatori come **righe**, riduci a scala (Gauss): le
operazioni di riga non cambiano lo spazio-riga. Le righe non nulle sono una base; il numero di pivot è $\dim$.

**B) Da equazioni a base.** Riduci $A$ a scala, conta le variabili libere ($=\dim$). Per ogni variabile
libera poni $=1$ e le altre $=0$, risolvi le pivot: ottieni un vettore di base.

**C) Somma e intersezione.** Accatasta *tutti* i generatori di $U$ e $W$ in un'unica matrice, riduci,
conta i pivot: quello è $\dim(U+W)$. Poi Grassmann per $\dim(U\cap W)$.
> **Trappola** (spreco di tempo): non costruire l'intersezione con un sistema se ti serve solo la sua
> *dimensione*. Grassmann te la dà per sottrazione. Costruiscila solo se chiedono una *base* di $U\cap W$.

**D) Somma diretta.** $U\oplus W$ (diretta) $\iff U\cap W=\{0\}\iff \dim(U+W)=\dim U+\dim W$. Per
$V=U\oplus W$ servono **due** condizioni: $U\cap W=\{0\}$ **e** $\dim U+\dim W=\dim V$.
> **Trappola** (la più frequente): mostrare solo $\dim U+\dim W=\dim V$ **non basta**. Due piani in
> $\mathbb{R}^4$ possono avere dimensioni che sommano a 4 e intersecarsi in una retta. Verifica *anche*
> l'intersezione nulla (o equivalentemente $U+W=V$).

**E) "È un sottospazio?"** Prima il **test dello zero**: $0\in S$? Se no, hai finito (bocciato). Poi la
**chiusura**: se la condizione che definisce $S$ è lineare-omogenea (tracce, componenti nulle, valutazioni
$p(1)=0$) passa; se contiene un **prodotto, un determinante, una disuguaglianza, o un quantificatore su
autovalori/radici**, cerca un **controesempio**.
> **Trappola** (dove si giocano i punti): $\{A:\det A=0\}$, $\{A:\ A\text{ diagonalizzabile}\}$,
> $\{A:\ p_A\text{ ha tutte radici reali}\}$ **non** sono sottospazi — le condizioni non sono lineari.
> $\{A:\operatorname{tr}A=0\}$, $\{A:a_{12}=a_{21}=0\}$ **sì**. E $\{\operatorname{tr}A=1\}$ **no** (la
> costante non nulla esclude lo zero: è affine).

## Un esame, per intero

**prova 07/02/2024, Es. 2** (`prova20240207`). In $M_{2,2}(\mathbb{R})$: $V=\operatorname{Span}\left\{
\left(\begin{smallmatrix}1&0\\1&1\end{smallmatrix}\right),\left(\begin{smallmatrix}1&0\\1&2\end{smallmatrix}\right)\right\}$;
$W=\left\{\left(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\right): c-b+a=0,\ 2a-c+d=0,\ a+3b-5c+2d=0\right\}$.
Trovare equazioni cartesiane di $V$; $\dim V$ e $\dim W$; verificare $M_{2,2}(\mathbb{R})=V+W$.

**Coordinatizzo** con la base canonica $E_{11},E_{12},E_{21},E_{22}$, cioè
$\left(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\right)\leftrightarrow(a,b,c,d)$. Allora
$V=\operatorname{Span}\{(1,0,1,1),(1,0,1,2)\}$.

*Equazioni di $V$.* Entrambi i generatori hanno $b=0$ e $a=c$; sono due vincoli, e $\dim V=2$ (i due
generatori sono indipendenti: differiscono nella quarta coordinata), quindi in $\mathbb{R}^4$ servono
$4-2=2$ equazioni — tornano. **Equazioni cartesiane di $V$: $b=0,\ a-c=0$.**

*Dimensione di $W$.* Le tre equazioni, ridotte a scala, hanno la terza combinazione delle prime due:
$a+3b-5c+2d = -2(c-b+a)+ \ldots$ (dipendente). Restano due equazioni indipendenti, quindi $\dim W=4-2=2$.

*$V+W=M_{2,2}$?* Uso Grassmann. L'intersezione $V\cap W$ soddisfa tutte le equazioni insieme:
$b=0,\ a-c=0$ (da $V$) e $c-b+a=0,\ 2a-c+d=0$ (da $W$). Da $b=0$ e $a=c$: la terza dà $c-0+a=2a=0\Rightarrow a=c=0$;
la quarta dà $d=0$. Unica soluzione $(0,0,0,0)$: **$\dim(V\cap W)=0$.** Grassmann:
$\dim(V+W)=\dim V+\dim W-\dim(V\cap W)=2+2-0=4=\dim M_{2,2}(\mathbb{R})$. Quindi $V+W=M_{2,2}(\mathbb{R})$, ed
essendo l'intersezione nulla è pure **somma diretta**. $\blacksquare$

Nota di metodo: la vittoria è stata *non* costruire $V\cap W$ come Span — bastavano le sue equazioni per
vedere che dà solo lo zero. Grassmann fa il resto.

## Le varianti

- **Standard $\mathbb{R}^4$** (`Compito23_9_14`, `Compito_23_02_16`, `Compito24_06_16`, `Compito050219`):
  $U$ per Span, $W$ per equazioni, chiede tutte le dimensioni e se $\mathbb{R}^4=U\oplus W$. Lo svolgimento
  canonico è nel capitolo 1.
- **Su $M_{2,2}$** (`prova20240207` Es.2, sopra): identico previa coordinatizzazione.
- **Il commutante** (`soluzioniesame20200204` Es.2): $U=\{X:AX=XA\}$, $V=\{X:AX=-XA\}$ — sono sottospazi
  (condizioni lineari in $X$); si trovano le equazioni svolgendo i due prodotti e uguagliando componente a
  componente. Ponte verso il saper-fare 09.
- **Il giudizio non-standard** (`prova20190121` Es.3, `autovalutativa`): lista di 5–7 insiemi di matrici o
  polinomi, "quali sono sottospazi?". Qui la matematica è il *controesempio*, non il calcolo. Ufficiale
  (`prova20190121`): $U_2=\{\det=0\}$ e $U_6=\{$diag. per coniugio$\}$ e $U_7=\{$radici reali$\}$ **non** lo
  sono; controesempi espliciti $\left(\begin{smallmatrix}1&1\\-1&-1\end{smallmatrix}\right)+\left(\begin{smallmatrix}0&1\\0&0\end{smallmatrix}\right)$ per $\det=0$.
- **Polinomi con Ruffini** (`prova20190121` Es.4): $W=\{p:p(1)=p(2)=0\}=\operatorname{Span}\{(x-1)(x-2)\}$,
  $\dim W=1$. Le valutazioni $p(a)=0$ sono equazioni lineari nei coefficienti.

## Collaudo

1. In $\mathbb{R}^4$: $U=\operatorname{Span}\{(1,0,1,0),(0,1,0,1),(1,1,1,1)\}$, $W=\{x_1-x_3=0\}$. Quanto vale
   $\dim(U+W)$? È $U+W=\mathbb{R}^4$? *(Risposta: $\dim(U+W)=3$; no, perché $U\subseteq W$.)*
2. In $M_{2,2}(\mathbb{R})$, quali sono sottospazi: $\{A=A^\top\}$, $\{\det A=0\}$, $\{\operatorname{tr}A=1\}$?
   *(Risposta: solo il primo, $\dim 3$; il secondo no — controesempio $\det$; il terzo no — non contiene $0$.)*
3. $W=\{p\in\mathbb{R}[x]_{\le 2}: p(1)=0\}$: qual è $\dim W$ e una base? *(Risposta: $\dim 2$, base
   $\{x-1,\ x^2-1\}$.)*

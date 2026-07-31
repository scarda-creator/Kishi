# Saper-fare 04 · Ottimizzazione libera e vincolata (Lagrange)

> **SOSTANZA DA VERIFICARE — generata autonomamente** (Demiurgo Accademico, 2026-07-13). Correttezza
> matematica da ratificare da Giuseppe. Pool mappa #6 · freq **9/11 e 8/10** · una delle due opzioni
> dell'Es.2 (con le serie, 05).

## La firma

"Determinare massimo e minimo (assoluti) di $f$ su $D$", oppure "trovare e classificare i punti critici di
$f$". Il dominio $D$ è dato da **disuguaglianze** (compatto) o è tutto $\mathbb{R}^n$; il bordo è dato da
**uguaglianze** $g=0$. Parole-spia: *massimo, minimo, punti critici, Hessiana, moltiplicatori di Lagrange,
vincolo, compatto*.

Cosa NON confondere: se il vincolo è **un'equazione da esplicitare** e si chiede la tangente, è Dini (03).
Qui si cercano gli **estremi** di una funzione, dentro il dominio e sul bordo.

## L'idea

Due meccanismi, uno per l'interno e uno per il bordo.

- **Interno — Fermat + Hessiana.** Gli estremi interni annullano il gradiente. In un punto critico, in 2D:
  $\det H>0$ e $f_{xx}>0$ ⇒ minimo; $\det H>0$ e $f_{xx}<0$ ⇒ massimo; $\det H<0$ ⇒ sella. In dimensione
  maggiore si guardano tutti gli autovalori (o i minori principali).
- **Bordo — Lagrange.** In un estremo vincolato su $\{g=0\}$ il gradiente di $f$ è **parallelo** a quello del
  vincolo: $\nabla f=\lambda\nabla g$. Ragione geometrica: se $\nabla f$ avesse una componente **tangente** al
  vincolo, potresti muoverti lungo il vincolo aumentando $f$ — non saresti in un estremo. Quindi $\nabla f$ è
  ortogonale al vincolo, cioè parallelo a $\nabla g$. Con **due** vincoli $g_1=g_2=0$ (curva in $\mathbb{R}^3$)
  la condizione è che i tre gradienti $\nabla f,\nabla g_1,\nabla g_2$ siano dipendenti:
  $\det[\nabla f\,;\nabla g_1\,;\nabla g_2]=0$.
- **Esistenza — Weierstrass.** Se $D$ è **compatto** ($f$ continua) il massimo e il minimo esistono, e stanno
  fra i candidati (critici interni $\cup$ punti di Lagrange sul bordo). Se $D=\mathbb{R}^n$ e $f$ è
  **coerciva** ($f\to+\infty$ per $|x|\to\infty$), esiste il minimo assoluto.

## La mossa

1. **Esistenza.** Verifica che $D$ è **chiuso e limitato** (Weierstrass) — o, su $\mathbb{R}^n$, la coercività.
   > **Trappola** (`b02`): non applicare Weierstrass senza aver controllato la compattezza. Un dominio aperto o
   > illimitato può non avere massimo.
2. **Critici interni.** Risolvi $\nabla f=0$; tieni solo le soluzioni **interne** a $D$.
   > **Trappola** (`20230621`): verifica che il punto critico interno **appartenga** a $D$. In quell'esame
   > $P=(3,0)$ ma $2\cdot3^2=18>1$ ⇒ $P\notin D$: va scartato.
   > **Trappola** (`20230504`): al contrario, se $P$ è dentro $D$ va **incluso** fra i candidati — dimenticarlo
   > fa perdere il vero minimo (è proprio il caso dell'esame svolto sotto).
3. **Bordo con un vincolo.** Sistema $\nabla f=\lambda\nabla g$ (equivalente in 2D a
   $f_xg_y-f_yg_x=0$, cioè $\nabla f\times\nabla g=0$) insieme a $g=0$. Risolvi.
4. **Bordo con due vincoli** (curva 3D): $\det[\nabla f;\nabla g_1;\nabla g_2]=0$ con $g_1=0,g_2=0$. Tre
   equazioni in tre incognite; spesso escono casi $x=y$, $x=0$, ecc. da trattare separatamente.
5. **Classifica per confronto.** Valuta $f$ in **tutti** i candidati (interni + di bordo) e confronta i
   numeri: il più grande è il max, il più piccolo il min.
   > **Trappola** (2D): $\det H>0$ non distingue max da min — serve il segno di $f_{xx}$. In 3D $\det H>0$ non
   > basta affatto: guarda gli autovalori.

## Un esame, per intero

**Prova 04/05/2023, Es. 5** (`20230504`). $F(x,y)=x^2+y^2-5y$ su $D=\{1\le x^2+y^2\le16\}$ (corona
circolare). Trovare massimo e minimo assoluti.

**Esistenza.** $D$ è chiuso e limitato (corona), $F$ continua: Weierstrass ⇒ max e min esistono.

**Critici interni.** $\nabla F=(2x,\,2y-5)=(0,0)\iff x=0,\ y=\tfrac52$. Il punto $P=(0,\tfrac52)$: verifico
$x^2+y^2=\tfrac{25}{4}=6.25\in[1,16]$ ✓, quindi $P$ è **interno** a $D$ (non sui due cerchi). È un candidato:
$F(P)=0+\tfrac{25}{4}-\tfrac{25}{2}=-\tfrac{25}{4}$.

**Bordo interno $x^2+y^2=1$.** Con $g=x^2+y^2$: $\nabla F=\lambda\nabla g$ dà $(2x,2y-5)=\lambda(2x,2y)$. Dalla
prima, $x=0$ oppure $\lambda=1$; se $\lambda=1$ la seconda dà $-5=0$, impossibile. Quindi $x=0$, e da
$x^2+y^2=1$: $y=\pm1$. Candidati $(0,1)$, $(0,-1)$: $F(0,1)=1-5=-4$, $F(0,-1)=1+5=6$.

**Bordo esterno $x^2+y^2=16$.** Stesso conto: $x=0$, $y=\pm4$. $F(0,4)=16-20=-4$, $F(0,-4)=16+20=36$.

**Confronto.** Valori candidati: $-\tfrac{25}{4}=-6.25$ (interno $P$), $-4$, $6$, $-4$, $36$. Dunque
$$\boxed{\ \min_D F=F\Bigl(0,\tfrac52\Bigr)=-\tfrac{25}{4},\qquad \max_D F=F(0,-4)=36.\ }$$
$\blacksquare$

Nota di metodo: la vittoria è stata **non dimenticare il critico interno** $P$. Chi guarda solo il bordo trova
$\min=-4$, che è sbagliato: il vero minimo sta dentro la corona.

## Le varianti

La famiglia è governata dal **dominio**: quanti vincoli, se compatto o tutto $\mathbb{R}^n$, e se la richiesta
è "assoluti su $D$" oppure "classifica i critici". Ogni riga cambia lo strumento (Weierstrass vs coercività;
$\nabla f=\lambda\nabla g$ vs determinante $3\times3$; Hessiana vs confronto di valori).

**Compatto 2D: critici interni + Lagrange sul bordo.**

- `20230504` Es.5 (svolto): $x^2+y^2-5y$ su una **corona** $1\le x^2+y^2\le16$; il minimo è nel critico
  **interno** $(0,\frac52)$, non sul bordo.
- `10feb22` Es.2: $f$ su $\{3x^2+4y^2\le9\}$ (ellisse piena); interno solo $(0,0)$, poi Lagrange su
  $g=3x^2+4y^2=9$.
  *Riconosci:* dominio dato da una disuguaglianza in $\mathbb{R}^2$. *Cosa cambia:* la **corona ha due bordi**
  ($r=1$ e $r=16$) da trattare separatamente con Lagrange; l'insidia è dimenticare il critico interno.

**Critico interno da includere / da scartare (verifica di appartenenza).**

- `20230504`: $P=(0,\frac52)$ **dentro** $D$ → è il vero minimo, va incluso.
- `20230621`: $P=(3,0)$ ma $2\cdot3^2=18>1$ → $P\notin D$, va scartato.
  *Riconosci:* $\nabla f=0$ dà un punto. *Cosa cambia:* devi **sempre** verificare $P\in\operatorname{int}(D)$
  prima di tenerlo o buttarlo — è la sorgente più comune di errore assoluto.

**Curva in $\mathbb{R}^3$, DUE vincoli (determinante $3\times3$).**

- `20230705` Es.2: $f=4-z$ su $\{x^2+y^2=8,\ x+y+z=1\}$; $\det[\nabla f;\nabla g_1;\nabla g_2]=0$ dà $-x+y=0$;
  candidati $(2,2,-3),(-2,-2,5)$; $\max=7$, $\min=-1$.
- `20230210` Es.2: $f=y^2+z^2-(x-1)^2$ su $\{4x^2+y^2+z^2=1,\ 2x-z=1\}$; il determinante dà $4(5x-1)y=0$,
  quattro candidati; $\min=-\frac14$, $\max=\frac15$.
  *Riconosci:* due uguaglianze in $\mathbb{R}^3$ = curva. *Cosa cambia:* non $\nabla f=\lambda\nabla g$ ma
  l'annullamento del **determinante $3\times3$** dei tre gradienti; escono casi ($x=y$, $y=0$, …) da trattare
  a parte.

**Vincolo a potenze superiori ($\nabla g$ non lineare).**

- `20220504` Es.2: $f=x^2+y^2-z^2$ su $x^4+y^4+2z^4\le1$; interno $O$, bordo con $\nabla g=(4x^3,4y^3,8z^3)$;
  $\max=\sqrt2$, $\min=-\frac1{\sqrt2}$.
  *Riconosci:* il vincolo ha esponenti $>2$. *Cosa cambia:* il sistema di Lagrange è algebricamente più pesante;
  spesso i candidati stanno sugli assi ($x=0$ o $y=0$ o $z=0$).

**Solo punti critici liberi + test dell'Hessiana (nessun bordo).**

- `27gen25` Es.2: $x^2-2xy+y^3+1$; $(0,0)$ sella ($\det H=-4$), $(\frac23,\frac23)$ minimo ($\det H=4>0$,
  $f_{xx}>0$).
- `09feb24` Es.2: $2x^3+yx^2+y^2z-9z$ in $\mathbb{R}^3$; $\nabla f=0$ dà un sistema di 3 equazioni, carattere
  dall'Hessiana $3\times3$.
  *Riconosci:* "trovare e classificare i punti critici", nessun dominio compatto. *Cosa cambia:* in 2D basta
  $(\det H,\ f_{xx})$; in 3D $\det H>0$ **non basta** — servono tutti gli autovalori / minori principali.

**Su tutto $\mathbb{R}^n$: coercività o campo degenere.**

- `21lug25` Es.1: $x^2e^{yz}$; $F_x=2xe^{yz}=0\Rightarrow x=0$; tutti i $(0,y,z)$ sono critici con $F=0$; essendo
  $F\ge0$ il minimo assoluto è $0$, il **massimo non esiste**.
  *Riconosci:* dominio non limitato. *Cosa cambia:* Weierstrass non si applica — usi la **coercività**
  ($f\to+\infty$ ⇒ esiste il min) o studi direttamente il segno/estremo del campo.

**Ottimizzazione embedded in una funzione implicita** (`22gen24`, `14feb25`): l'estremo appare come punto
critico di una $g$ del Dini. *Cosa cambia:* è il **ponte con 03** — il test dell'Hessiana si fa sull'implicita.

## Collaudo

1. $F=x^2+y^2-5y$ su $\{1\le x^2+y^2\le16\}$: dove stanno max e min? *(Risposta: $\min=-25/4$ nel punto interno
   $(0,5/2)$; $\max=36$ in $(0,-4)$. Trappola evitata: includere il critico interno.)*
2. $f=4-z$ su $\{x^2+y^2=8,\ x+y+z=1\}$: max e min? *(Risposta: $\max=7$ in $(-2,-2,5)$, $\min=-1$ in
   $(2,2,-3)$.)*
3. In 2D un critico ha $\det H=9>0$ e $f_{xx}=-3$: minimo, massimo o sella? *(Risposta: massimo — $\det H>0$ e
   $f_{xx}<0$.)*

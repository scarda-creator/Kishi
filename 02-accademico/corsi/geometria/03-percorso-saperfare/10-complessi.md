# Saper-fare 10 · Numeri complessi e strutture su ℂ

> **SOSTANZA DA VERIFICARE — generata in notte autonoma** (Dedalo, 2026-07-12). Correttezza matematica
> da ratificare da svegli (Giuseppe / Demiurgo Accademico).
> Tipo mappa #6 · freq 9/28 · diff 3/5 · 2019–2024 · **in salita** (assente fino al 2018, stabile dal 2019).

## La firma

Compaiono $z$, $\bar z$, il campo $\mathbb{C}$, lo spazio $M_{2,2}(\mathbb{C})$, o la domanda "indipendenti
**su $\mathbb{C}$** o **su $\mathbb{R}$**?". Tipi ricorrenti: risolvere un'equazione in $z,\bar z$ (es.
$z^2=\pm\bar z^2$); stabilire se un sottoinsieme di $M_{2,2}(\mathbb{C})$ è sottospazio; confrontare la
dimensione di uno spazio complesso visto su $\mathbb{C}$ e su $\mathbb{R}$. Parole-spia: *coniugato,
$\mathbb{C}$, hermitiana, indipendenti su $\mathbb{C}$/su $\mathbb{R}$, $M_{2,2}(\mathbb{C})$*.

Cosa NON confondere: un sottoinsieme di $M_{2,2}(\mathbb{C})$ "è sottospazio?" resta il saper-fare 01 (test di
chiusura); qui aggiungi solo gli avvertimenti specifici del complesso. "Simmetrica vs hermitiana" tocca il 09.

## L'idea

Tre fatti generano tutto il tipo:
- **Fattorizza invece di sviluppare.** Un'equazione in $z,\bar z$ come $z^2-\bar z^2$ si spezza:
  $z^2-\bar z^2=(z+\bar z)(z-\bar z)$, e $z+\bar z=2\operatorname{Re}z$, $z-\bar z=2i\operatorname{Im}z$. La
  fattorizzazione traduce l'equazione in **condizioni geometriche sul piano** (assi, bisettrici) senza sviluppare
  $(a+ib)^2$.
- **$\mathbb{C}$-spazio vs $\mathbb{R}$-spazio.** Uno spazio vettoriale complesso di dimensione $n$ su
  $\mathbb{C}$, visto come spazio su $\mathbb{R}$, ha dimensione $2n$ (ogni coordinata complessa vale due reali).
  $M_{2,2}(\mathbb{C})$ ha $\dim_{\mathbb{C}}=4$, $\dim_{\mathbb{R}}=8$. L'indipendenza **su $\mathbb{C}$** è più
  debole (permetti coefficienti complessi): vettori indipendenti su $\mathbb{R}$ possono essere dipendenti su
  $\mathbb{C}$ (es. $1$ e $i$ in $\mathbb{C}$: indipendenti su $\mathbb{R}$, dipendenti su $\mathbb{C}$).
- **Le condizioni non-lineari mascherate** (già viste nel 01) sono le stesse trappole in ambiente complesso.

## La mossa

1. **Equazioni in $z,\bar z$:** porta tutto a un membro e **fattorizza** in fattori del tipo $z\pm\bar z$,
   $z\pm i\bar z$. Ogni fattore uguagliato a zero dà una retta nel piano di Gauss; l'insieme soluzione è la loro
   unione.
   > **Trappola** (mappa): non sviluppare $(a+ib)^2$ in parte reale e immaginaria come primo istinto — è più
   > lungo ed espone a errori di segno. La fattorizzazione è la via.
2. **Sottospazi di $M_{2,2}(\mathbb{C})$:** coordinatizza sulle 4 entrate complesse, applica il test di chiusura
   del saper-fare 01. Le condizioni lineari-omogenee ($\operatorname{tr}=0$, entrate nulle) danno sottospazi; la
   dimensione si conta su $\mathbb{C}$ salvo diversa richiesta.
   > **Trappola** (documentata, `prova20190121` Es.3): $\{A:\ p_A\text{ ha tutte radici reali}\}$ e $\{A:\
   > C^{-1}AC\text{ diagonale per qualche }C\}$ **non** sono sottospazi. Controesempi con matrici a spettro
   > reale la cui somma ha spettro complesso.
3. **Indipendenza su $\mathbb{C}$ vs su $\mathbb{R}$:** se ti chiedono "su $\mathbb{C}$", i coefficienti della
   combinazione lineare sono complessi; imposta il sistema con incognite complesse. Se "su $\mathbb{R}$", tratta
   ogni entrata complessa come due reali.

## Un esame, per intero

**Appello 04/02/2020, Es. 1** (`soluzioniesame20200204`, ufficiale). In $\mathbb{C}$ risolvere
$$z^2=\bar z^2\qquad\text{e}\qquad z^2=-\bar z^2,\qquad z=a+ib.$$

**Riscrivo come prodotti nulli** (fattorizzazione, non sviluppo):
$$z^2-\bar z^2=(z+\bar z)(z-\bar z)=0,\qquad z^2+\bar z^2=(z+i\bar z)(z-i\bar z)=0.$$
Esplicito con $z=x+iy$, $\bar z=x-iy$, $i\bar z=y+ix$:
$$z+\bar z=2x,\quad z-\bar z=2iy,\quad z+i\bar z=(x+y)+i(x+y),\quad z-i\bar z=(x-y)+i(x-y).$$

**Prima equazione:** $(2x)(2iy)=0\iff x=0\ \text{oppure}\ y=0$. L'insieme soluzione è **la coppia degli assi
coordinati** ($x=0$: immaginari puri; $y=0$: reali puri).

**Seconda equazione:** $\big[(x+y)+i(x+y)\big]\big[(x-y)+i(x-y)\big]=0$. Ciascun fattore si annulla quando
$x+y=0$ o $x-y=0$: l'insieme soluzione è **la coppia delle bisettrici** dei quadranti, $x+y=0$ e $x-y=0$.
$\blacksquare$

Il punto: nessun quadrato sviluppato. La fattorizzazione $z^2\mp\bar z^2=(z\pm\bar z)(z\mp\bar z)$ /
$(z\pm i\bar z)(z\mp i\bar z)$ ha reso l'equazione una lettura geometrica immediata.

## Le varianti

- **Sottospazio di $M_{2,2}(\mathbb{C})$ con base e complementare** (`scritto Geometria 2024-07-09` Es.1):
  $U=\{A: a_{11}=a_{12},\ a_{21}=0\}$ è sottospazio (equazioni omogenee), base
  $\left\{\left(\begin{smallmatrix}1&1\\0&0\end{smallmatrix}\right),\left(\begin{smallmatrix}0&0\\0&1\end{smallmatrix}\right)\right\}$;
  dato $W$ per Span, si trova $U+W$ con Gauss sulle 4 matrici e un complementare di $W$ (qui $U$ stesso).
- **Il giudizio a 7 sottoinsiemi** (`prova20190121` Es.3): $U_1,\dots,U_7\subseteq M_{2,2}(\mathbb{C})$; sono
  sottospazi $U_1(\operatorname{tr}=0)$, $U_4(a_{12}=a_{21}=0)$ e le loro intersezioni; **non** lo sono
  $U_2(\det=0)$, $U_6$ (diagonalizzabile per coniugio), $U_7$ (spettro reale). Ponte diretto col saper-fare 01.
- **Matrice complessa: hermitiana/unitaria?** (`soluzioniesame20200204` Es.4): $A=\left(\begin{smallmatrix}1&i\\i&-1\end{smallmatrix}\right)$
  è simmetrica ($A^\top=A$) ma **non** hermitiana ($\bar A^\top\neq A$) né unitaria; e $\operatorname{tr}=\det=0$
  la rende non diagonalizzabile (ponte col 04).

## Collaudo

1. Risolvi $z=\bar z$ in $\mathbb{C}$. *(Risposta: $z-\bar z=2iy=0\Rightarrow y=0$: l'asse reale.)*
2. In $M_{2,2}(\mathbb{C})$, qual è $\dim_{\mathbb{C}}$ e $\dim_{\mathbb{R}}$? *(Risposta: 4 e 8.)*
3. $1$ e $i$ come vettori di $\mathbb{C}$: indipendenti su $\mathbb{R}$? su $\mathbb{C}$? *(Risposta: su
   $\mathbb{R}$ sì (base di $\mathbb{C}\cong\mathbb{R}^2$); su $\mathbb{C}$ no, $i=i\cdot1$.)*

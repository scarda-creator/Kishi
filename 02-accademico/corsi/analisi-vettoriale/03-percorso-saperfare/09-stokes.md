# Saper-fare 09 · Circuitazione: Teorema di Stokes (e Green)

> **SOSTANZA DA VERIFICARE — generata autonomamente** (Demiurgo Accademico, 2026-07-13). Correttezza
> matematica da ratificare da Giuseppe. Pool mappa #5 · freq **8/11 e 8/10** · di norma accoppiato a 07
> (stessa superficie) nell'Es.4.

## La firma

Una **curva chiusa** $\gamma$ (spesso il bordo di una superficie già parametrizzata), un campo $F$, e la
richiesta del **lavoro / circuitazione** $\oint_\gamma F\cdot T\,ds$. In $\mathbb{R}^2$ la stessa cosa si
chiama **Green**. Parole-spia: *circuitazione, lavoro lungo la curva chiusa, teorema di Stokes, rotore, verso
di percorrenza, orientazione*.

Cosa NON confondere: se la superficie è chiusa e si chiede il **flusso** ($\iint F\cdot\mathbf n$), è Gauss
(08). Se il campo risulta **conservativo**, la circuitazione su curva chiusa è $0$ e hai finito (10): sempre
quel controllo prima.

## L'idea

Stokes trasforma un integrale di linea lungo il bordo in un integrale di **flusso del rotore** attraverso
qualunque superficie che abbia quel bordo:
$$\oint_{\partial\Sigma}F\cdot T\,ds=\iint_\Sigma(\operatorname{rot}F)\cdot\mathbf n\,dS,\qquad
\operatorname{rot}F=\begin{vmatrix}\mathbf e_1&\mathbf e_2&\mathbf e_3\\ \partial_x&\partial_y&\partial_z\\ F_1&F_2&F_3\end{vmatrix},$$
valido se $F\in C^1$, $\Sigma$ è regolare e orientabile, e l'orientazione del bordo è **compatibile** con
quella della normale (regola della mano destra). Le componenti del rotore, cicliche:
$$(\operatorname{rot}F)_1=\partial_yF_3-\partial_zF_2,\quad (\operatorname{rot}F)_2=\partial_zF_1-\partial_xF_3,\quad (\operatorname{rot}F)_3=\partial_xF_2-\partial_yF_1.$$
La libertà di scegliere $\Sigma$ è l'arma: il bordo determina $\Sigma$, non viceversa, quindi scegli la
superficie **più semplice** con quel bordo (di solito il disco/piano, non la superficie complicata originale).
In 2D il rotore si riduce a $\partial_xF_2-\partial_yF_1$ e Stokes diventa
$\oint_{\partial D}F\cdot T\,ds=\iint_D(\partial_xF_2-\partial_yF_1)\,dx\,dy$ (**Green**).

## La mossa

1. **Conservativo?** Se $\operatorname{rot}F=0$ su un dominio semplicemente connesso, la circuitazione è $0$
   (10): fermati. Altrimenti procedi.
2. **Scegli $\Sigma$** con bordo $\gamma$: la più semplice possibile (piano/disco su cui $\gamma$ giace).
   > **Trappola** (`b02`): se il bordo è un cerchio in un piano, prendi il **disco piano**, non la superficie
   > originaria curva. Stessa circuitazione, calcolo molto più facile.
3. **Calcola $\operatorname{rot}F$** con il determinante, esplicitamente.
   > **Trappola** (`b02`): l'errore classico è invertire la differenza (segno) o sbagliare la 2ª componente.
   > Scrivi sempre il determinante; verifica se qualche componente si annulla per simmetria (risparmia
   > calcoli).
4. **Orienta.** Con $\Sigma$ grafico e $\mathbf n$ non normalizzata $(-f_x,-f_y,1)$ (3ª comp. $+$), il bordo va
   percorso **antiorario visto dall'alto**. Se il testo impone la 3ª componente **negativa**, il verso è
   orario e l'integrale cambia **segno**.
   > **Trappola** (`20250127`): "normale con 3ª componente negativa" ⇒ usi $-(-f_x,-f_y,1)$, e l'intera
   > circuitazione prende un segno meno. Tienine conto una volta sola, con coerenza.
5. **Integra sul dominio.** Per $\Sigma$ grafico:
   $\iint_D\operatorname{rot}F(x,y,f(x,y))\cdot(-f_x,-f_y,1)\,dx\,dy$ (non normalizzare: il $dS$ è già
   compensato).
   > **Trappola** (`b02`): **sostituisci** $z=f(x,y)$ dentro $\operatorname{rot}F$ **prima** di integrare su
   > $D$; dimenticarlo lascia una $z$ libera nell'integrando.
   > **Trappola** (simmetria): su un disco centrato in $0$, $\iint_D x\,dx\,dy=\iint_D y\,dx\,dy=0$: i termini
   > lineari in $x,y$ spariscono, resta solo la costante $\times$ area.

## Un esame, per intero

**Prova 27/01/2025, Es. 1-vi** (`20250127`). $F=(y^2+z^2+e^{x},\ xy+z+\cos y,\ 2xz+3yz+z^2)$; $\Sigma$ è il
piano $z=-2x-y+2$ sul disco $D=\{x^2+y^2\le9\}$ (raggio $3$), con normale a **3ª componente negativa**.
Calcolare la circuitazione lungo $\partial\Sigma$.

**Rotore.**
$$(\operatorname{rot}F)_1=\partial_yF_3-\partial_zF_2=3z-1,\quad (\operatorname{rot}F)_2=\partial_zF_1-\partial_xF_3=2z-2z=0,$$
$$(\operatorname{rot}F)_3=\partial_xF_2-\partial_yF_1=y-2y=-y.\qquad\Rightarrow\quad \operatorname{rot}F=(3z-1,\ 0,\ -y).$$

**Superficie e orientazione.** $\Sigma$ è il grafico $z=f(x,y)=-2x-y+2$, $f_x=-2$, $f_y=-1$. Normale grezza
$(-f_x,-f_y,1)=(2,1,1)$ (3ª comp. $+1$). Il testo vuole la 3ª componente **negativa**: uso quindi $-(2,1,1)$ e
la circuitazione prende un segno meno.

**Sostituisco** $z=-2x-y+2$ nel rotore: $3z-1=3(-2x-y+2)-1=-6x-3y+5$. Allora
$$\operatorname{rot}F\big|_\Sigma\cdot(2,1,1)=(-6x-3y+5)\cdot2+0\cdot1+(-y)\cdot1=-12x-6y+10-y=-12x-7y+10.$$
Con l'orientazione richiesta (segno meno):
$$\oint_{\partial\Sigma}F\cdot T\,ds=-\iint_D(-12x-7y+10)\,dx\,dy.$$
Su $D$ disco centrato nell'origine, $\iint_D x=\iint_D y=0$ (simmetria), resta $\iint_D 10\,dx\,dy=10\cdot9\pi=90\pi$:
$$\oint_{\partial\Sigma}F\cdot T\,ds=-\,90\pi=\boxed{-90\pi}.$$
$\blacksquare$

Nota di metodo: due sole cose potevano rovinare il conto — sbagliare il segno della 2ª componente del rotore
(qui $0$, per fortuna verificabile a vista) e ignorare la 3ª componente negativa della normale. Il resto muore
per simmetria.

## Le varianti

Tre assi: la **dimensione** (Green 2D vs Stokes 3D), la **superficie** su cui applichi Stokes (grafico piano
semplice, superficie curva, oppure il disco piano scelto perché più comodo), e l'**orientazione** (3ª componente
$+$ o $-$, che porta il segno). Un asse trasversale: il **campo** (con parametro, o conservativo ⇒ $0$).

**Green nel piano (Stokes 2D).**

- `22gen24` Es.3: settore circolare $D=\{0\le y\le x,\ x^2+y^2\le4\}$, campo con parametro $a$;
  $\oint F\cdot T=\iint_D(\partial_xF_2-\partial_yF_1)=(a-2)\iint_D=(a-2)\frac{4\sqrt2}3$ (polari, $\theta\in[0,\frac\pi4]$).
  *Riconosci:* tutto vive in $\mathbb{R}^2$. *Cosa cambia:* rotore ridotto a $\partial_xF_2-\partial_yF_1$; il
  dominio (settore) fissa gli estremi in polari.

**Stokes su grafico piano — 3ª componente della normale POSITIVA.**

- `20220124` Es.4-iv: $z=x+3y+4$ su disco raggio $2$; $(-f_x,-f_y,1)=(-1,-3,1)$; circuitazione $100\pi$.
- `20230705` Es.2-iii: $z=1-x-y$ su $x^2+y^2\le8$; $\operatorname{rot}F=(-y^2,-z,-x^2)$; lavoro $-40\pi$.
  *Cosa cambia:* bordo percorso **antiorario visto dall'alto**; sostituisci $z=f(x,y)$ nel rotore prima di
  integrare.

**Stokes su grafico piano — 3ª componente NEGATIVA (il segno!).**

- `20250127` Es.1-vi (svolto): normale a 3ª comp. negativa ⇒ usi $-(-f_x,-f_y,1)$, circuitazione $-90\pi$.
- `05mar24` Es.3-v: $z=\sqrt3\,x+1$, normale 3ª comp. negativa, bordo orario.
  *Riconosci:* il testo impone il verso della normale. *Cosa cambia:* un **segno meno** globale, da applicare
  una volta sola con coerenza (bordo orario).

**Stokes su superficie CURVA (normale non costante)** (`20230123` Es.3): spicchio di sfera, bordo = due
semicirconferenze con verso opposto; $\operatorname{rot}F=(0,1+z,0)$, lavoro $\frac{9\pi}2$. *Riconosci:* $\Sigma$
è parte di sfera/cilindro. *Cosa cambia:* $\mathbf n$ varia punto per punto — parametrizzazione sferica
esplicita; il bordo può essere **unione di archi** con segni da comporre.

**Scelta della superficie più semplice (Stokes "inverso").** *Riconosci:* il bordo è un cerchio in un piano,
ma la superficie originaria è complicata. *Cosa cambia:* il bordo determina $\Sigma$, non viceversa — prendi il
**disco piano** bordato da quel cerchio, stessa circuitazione con calcolo minimo.

**Campo con parametro / conservativo** (`20220706` Es.4): $\operatorname{rot}F=(0,2z-2az,0)$; se $a=1$ è
conservativo (circuitazione $0$), altrimenti $2(a-1)\pi$. *Cosa cambia:* prima del calcolo controlla se per
qualche valore del parametro $\operatorname{rot}F=0$ — lì la circuitazione è gratis (ponte con 10).

## Collaudo

1. $F=(y^2+z^2+e^x,\ xy+z+\cos y,\ 2xz+3yz+z^2)$, $\Sigma:\ z=-2x-y+2$ su $x^2+y^2\le9$, normale 3ª comp.
   negativa: circuitazione? *(Risposta: $-90\pi$; i termini in $x,y$ muoiono per simmetria, resta $\pm10\cdot9\pi$
   col segno dell'orientazione.)*
2. $\operatorname{rot}F=(0,2z-2az,0)$, curva su un piano: per quale $a$ la circuitazione è $0$ e perché?
   *(Risposta: $a=1$, il campo diventa conservativo (rotore nullo).)*
3. Il bordo di $\Sigma$ è un cerchio in un piano: quale superficie conviene usare in Stokes? *(Risposta: il
   disco piano bordato da quel cerchio, non la superficie originaria.)*

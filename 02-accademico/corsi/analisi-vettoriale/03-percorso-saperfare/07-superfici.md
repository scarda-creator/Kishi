# Saper-fare 07 · Superfici: parametrizzazione, area, versore normale, bordo

> **SOSTANZA DA VERIFICARE — generata autonomamente** (Demiurgo Accademico, 2026-07-13). Correttezza
> matematica da ratificare da Giuseppe. Pool mappa #2 · freq **≥10/11 e 9/10** · priorità **ALTA** (punto
> debole dichiarato: scelta della parametrizzazione, dominio, orientazione).

## La firma

Una **superficie** data come *una sola equazione*: un grafico $z=f(x,y)$, una superficie di rotazione, un
pezzo di sfera/cilindro con un vincolo. La richiesta: "parametrizzare, calcolare l'**area**, scrivere il
**versore normale**, descrivere il **bordo** $\partial\Sigma$". È il cuore dell'Es.3/Es.4. Parole-spia:
*parametrizzare la superficie, area, versore normale, orientazione, bordo, terza componente positiva*.

Cosa NON confondere: **una** equazione ⇒ superficie (qui); **due** ⇒ curva (06). Il dominio $D$ nel piano
$(x,y)$ è la *proiezione* della superficie, non la superficie stessa.

## L'idea

Una superficie parametrizzata è una mappa $X(u,v)$ da un dominio piano $D_{uv}\subset\mathbb{R}^2$ a
$\mathbb{R}^3$. Le due derivate parziali $X_u,X_v$ sono i vettori tangenti; il loro prodotto vettoriale è il
vettore normale (non normalizzato), la cui **lunghezza è il fattore di dilatazione d'area**:
$$dS=|X_u\times X_v|\,du\,dv,\qquad A(\Sigma)=\iint_{D_{uv}}|X_u\times X_v|\,du\,dv,\qquad \mathbf n=\frac{X_u\times X_v}{|X_u\times X_v|}.$$
Per un **grafico** $z=f(x,y)$, con $X(x,y)=(x,y,f(x,y))$, si calcola una volta per tutte:
$$X_x=(1,0,f_x),\quad X_y=(0,1,f_y),\quad X_x\times X_y=(-f_x,-f_y,1),\quad |X_x\times X_y|=\sqrt{1+f_x^2+f_y^2}.$$
La terza componente di $(-f_x,-f_y,1)$ è $+1$: la normale "grezza" del grafico punta **sempre verso l'alto**.
Il **bordo** è l'immagine della frontiera del dominio: $\partial\Sigma=X(\partial D_{uv})$.

## La mossa

1. **Riconosci il tipo** (grafico, rotazione, sferica) e scrivi $X(u,v)$ con il suo dominio $D_{uv}$.
2. **Trova il dominio $D$ giusto.** Per un grafico, $D$ è la proiezione: leggila dai vincoli.
   > **Trappola** (`20240704`): il vincolo "$x^2+y^2\le z$" con $z=4y+5$ **non** è un disco centrato
   > nell'origine: $x^2+y^2\le4y+5\iff x^2+(y-2)^2\le9$, disco di **centro $(0,2)$, raggio $3$**. Ignorare la
   > traslazione sbaglia area e bordo.
   > **Trappola** (`20250127`): "$x^2+y^2\le9$" come proiezione è il disco di raggio $3$ — non confondere il
   > numero $9$ (che è $R^2$) con il raggio.
3. **Area.** Grafico: $\iint_D\sqrt{1+f_x^2+f_y^2}\,dx\,dy$. Se $\sqrt{1+f_x^2+f_y^2}$ è costante (piano), è
   quella costante per l'area di $D$. Se il disco è traslato, passa a polari **centrate nel centro del disco**
   ($x=x_0+\rho\cos\theta$, $y=y_0+\rho\sin\theta$, Jacobiano $\rho$).
4. **Versore normale con il verso richiesto.** $(-f_x,-f_y,1)$ punta in alto. Se serve la 3ª componente
   negativa (o la normale *uscente* da un solido dove la superficie sta sotto), prendi $(f_x,f_y,-1)$.
   > **Trappola** (flusso/Gauss, `20230210`): "verso l'alto" $\neq$ "uscente". Per una calotta inferiore o un
   > paraboloide che chiude il solido da sotto, la normale uscente ha 3ª componente $<0$: cambia segno.
5. **Bordo.** $\partial\Sigma=X(\partial D)$. Per $D=\{x^2+y^2\le R^2\}$:
   $\gamma(t)=(R\cos t,R\sin t,f(R\cos t,R\sin t))$, una curva in $\mathbb{R}^3$ (ponte con 06).
6. **Non-grafici.** Sfera $X=(R\sin\phi\cos\theta,R\sin\phi\sin\theta,R\cos\phi)$, $|X_\phi\times X_\theta|=R^2\sin\phi$;
   rotazione attorno a $z$ del profilo $\gamma(v)$: $X=(\gamma(v)\cos\theta,\gamma(v)\sin\theta,v)$,
   $X_\theta\times X_v=(\gamma\cos\theta,\gamma\sin\theta,-\gamma\gamma')$.
   > **Trappola** (`b02`): per sfera/cilindro **non** usare $\sqrt{1+f_x^2+f_y^2}$ (vale solo per i grafici):
   > calcola $|X_u\times X_v|$ direttamente.

## Un esame, per intero

**Prova 04/07/2024, Es. 3** (`20240704`). $\Sigma:\ z=4y+5,\ x^2+y^2\le z$. Parametrizzare, trovare il
dominio, calcolare l'area, scrivere il bordo.

**Dominio.** La superficie è il grafico $z=f(x,y)=4y+5$ ristretto ai punti dove $x^2+y^2\le z=4y+5$:
$$x^2+y^2\le 4y+5\iff x^2+y^2-4y-5\le0\iff x^2+(y-2)^2\le 9.$$
Dunque $D$ è il **disco di centro $(0,2)$ e raggio $3$** — non centrato nell'origine.

**Parametrizzazione.** $X(x,y)=(x,\,y,\,4y+5)$, $(x,y)\in D$.

**Area.** $f_x=0$, $f_y=4$, quindi $\sqrt{1+f_x^2+f_y^2}=\sqrt{1+0+16}=\sqrt{17}$ (costante). Allora
$$A(\Sigma)=\iint_D\sqrt{17}\,dx\,dy=\sqrt{17}\cdot\text{Area}(D)=\sqrt{17}\cdot\pi\cdot3^2=\boxed{\,9\pi\sqrt{17}\,}.$$

**Versore normale.** $(-f_x,-f_y,1)=(0,-4,1)$, quindi $\mathbf n=\dfrac{(0,-4,1)}{\sqrt{17}}$ (3ª componente
positiva).

**Bordo.** $\partial D$ è il cerchio $x^2+(y-2)^2=9$, cioè $x=3\cos t$, $y=2+3\sin t$. Immagine sotto $X$:
$$\partial\Sigma:\ \gamma(t)=\bigl(3\cos t,\ 2+3\sin t,\ 4(2+3\sin t)+5\bigr)=\bigl(3\cos t,\ 2+3\sin t,\ 8+12\sin t+5\bigr),$$
cioè $\gamma(t)=(3\cos t,\,2+3\sin t,\,13+12\sin t)$, $t\in[0,2\pi]$. $\blacksquare$

Nota di metodo: l'unico passaggio delicato è il **dominio**. Chi legge "$x^2+y^2\le z$" e disegna un disco
centrato nell'origine sbaglia sia il raggio dell'area sia il centro del bordo. La chiave è portare il vincolo
alla forma $(x-x_0)^2+(y-y_0)^2\le R^2$.

## Le varianti

Due assi: il **tipo di superficie** (grafico piano, grafico curvo, rotazione, sfera, mantello) fissa la formula
d'area; il **dominio** (centrato, traslato, settoriale, non-standard) fissa il cambio di coordinate e il bordo.

**Grafico piano $z=$ lineare — il fattore d'area è costante.**

- Su **disco centrato**: `20250127` Es.1 ($z=-2x-y+2$, $x^2+y^2\le9$, $\sqrt6$, area $9\sqrt6\,\pi$); `20220124`
  Es.4 ($z=x+3y+4$, $\sqrt{11}$); `20220706` Es.4 ($z=4x+y+1$, $3\sqrt2$).
- Su **disco traslato**: `20240704` Es.3 (svolto, centro $(0,2)$); `04lug24` Es.3 (stesso); `27giu25` Es.1
  ($z=2x+4y-4$ su $(x-1)^2+(y-2)^2\le1$, $\sqrt{21}$).
  *Riconosci:* $\sqrt{1+f_x^2+f_y^2}$ è un numero. *Cosa cambia:* area $=$ quel numero $\times$ Area$(D)$; se $D$
  è traslato, il **centro** si legge portando il vincolo alla forma $(x-x_0)^2+(y-y_0)^2\le R^2$ (l'errore è
  disegnarlo nell'origine).

**Grafico curvo (paraboloide) — il fattore d'area è variabile.**

- `20220622` Es.4: $z=1+\frac{x^2+y^2}2$ su $x^2+y^2\le16$; area
  $\int_0^{2\pi}\!\int_0^4\sqrt{1+\rho^2}\,\rho\,d\rho\,d\theta=\frac{2\pi}3(17\sqrt{17}-1)$.
- `20230907` Es.4: $z=2+x^2+(y-1)^2$ su $x^2+(y-1)^2\le1$ (centro $(0,1)$); area $\frac{\pi}6(5\sqrt5-1)$.
  *Riconosci:* $f$ quadratica ⇒ $\sqrt{1+4\rho^2}$ o $\sqrt{1+\rho^2}$ sotto integrale. *Cosa cambia:* passi a
  **polari centrate nel centro del disco** (traslate se serve) e integri $\sqrt{1+c\rho^2}\,\rho\,d\rho$.

**Dominio non-standard (più curve di frontiera)** (`09feb24` Es.4): $z=2x+2y+5$ su un dominio delimitato da
tre curve, bordo formato da 4 archi regolari. *Cosa cambia:* l'area element è ancora costante ($=3$), ma il
**bordo $\partial\Sigma$ è un'unione di archi** — vanno elencati e orientati uno per uno.

**Superficie di rotazione** (`22gen24` Es.4 intercapedine $\gamma_1=1+z^2,\gamma_2=3-z^2$; `20220907` Es.4
profilo $1-\sqrt{1-z^2}$; `27gen25` Es.5 profilo $x=1+t^2$): $X=(\gamma(v)\cos\theta,\gamma(v)\sin\theta,v)$,
normale $(\gamma\cos\theta,\gamma\sin\theta,-\gamma\gamma')$. *Riconosci:* un profilo ruotato di $2\pi$.
*Cosa cambia:* **non** usi $\sqrt{1+|\nabla f|^2}$; e il segno della 3ª componente $-\gamma\gamma'$ **non è
uniforme** in $v$ — per il flusso uscente (ponte con 08) verifichi il verso caso per caso.

**Pezzo di sfera / mantello cilindrico (non-grafici).**

- Sfera con settore (`14feb25` Es.5: $0\le y\le x$ ⇒ $\theta\in[0,\frac\pi4]$; `20230123` Es.3 spicchio
  $x\ge0,y\ge0$): $|X_\phi\times X_\theta|=R^2\sin\phi$; bordo = archi (+ eventuale polo singolare).
- Mantello cilindrico (`20230210` $\Sigma_3$: $x^2+y^2=9$, $z\in[-4,4]$): $X=(R\cos\theta,R\sin\theta,z)$.
  *Riconosci:* la superficie è definita da $x^2+y^2+z^2=R^2$ o $x^2+y^2=R^2$, non da $z=f(x,y)$. *Cosa cambia:*
  la formula cartesiana **non vale** — calcoli $|X_u\times X_v|$ direttamente ($R^2\sin\phi$ per la sfera, $R$
  per il mantello); i vincoli settoriali fissano gli estremi di $\theta,\phi$.

## Collaudo

1. $z=4y+5$ con $x^2+y^2\le z$: qual è il dominio $D$ e l'area di $\Sigma$? *(Risposta: $D$ disco di centro
   $(0,2)$ raggio $3$; area $9\pi\sqrt{17}$. Trappola evitata: non è centrato nell'origine.)*
2. $z=1+\tfrac{x^2+y^2}{2}$ su $x^2+y^2\le16$: area? *(Risposta: $\tfrac{2\pi}{3}(17\sqrt{17}-1)$, via polari e
   $\int\sqrt{1+\rho^2}\,\rho\,d\rho$.)*
3. Per una calotta sferica di raggio $R$, il fattore d'area è $\sqrt{1+f_x^2+f_y^2}$? *(Risposta: no — quella
   formula vale solo per i grafici cartesiani; per la sfera $|X_\phi\times X_\theta|=R^2\sin\phi$.)*

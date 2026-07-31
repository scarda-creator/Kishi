# Saper-fare 08 · Volume e flusso: Teorema della divergenza (Gauss)

> **SOSTANZA DA VERIFICARE — generata autonomamente** (Demiurgo Accademico, 2026-07-13). Correttezza
> matematica da ratificare da Giuseppe. Pool mappa #4 · freq **11/11 e 9/10** (invariante) · priorità **ALTA**
> per frequenza (è l'Es.3, sempre presente).

## La firma

Un **dominio 3D** $E$ delimitato da superfici (paraboloide + piano, sfera ∩ cilindro, cono + calotta…), un
**campo** $F$, e la richiesta: "calcolare il **volume** di $E$ e il **flusso uscente** di $F$ dalla frontiera
$\partial E$", spesso con "e il flusso attraverso la singola superficie $\Sigma_i$". Parole-spia: *flusso
uscente, volume del dominio, teorema della divergenza, $\operatorname{div}F$, frontiera $\partial E$*.

Cosa NON confondere: se la curva è chiusa e si chiede la **circuitazione** ($\oint F\cdot T$), è Stokes (09).
Qui l'oggetto è il flusso attraverso una **superficie chiusa** che borda un solido.

## L'idea

Il teorema della divergenza converte un integrale di superficie (difficile) in uno di volume (facile):
$$\iint_{\partial E}F\cdot\mathbf n\,dS=\iiint_E\operatorname{div}F\,dx\,dy\,dz,\qquad \operatorname{div}F=\partial_xF_1+\partial_yF_2+\partial_zF_3,$$
valido se $F\in C^1(\overline E)$ e $\mathbf n$ è la normale **uscente**. La divergenza misura la "sorgente"
puntuale del campo; sommandola sul volume si ottiene il flusso netto attraverso il guscio. Il vantaggio: la
$\operatorname{div}F$ è spesso **costante o semplice**, così il flusso è $(\operatorname{div}F)\cdot\text{Vol}(E)$
e resta solo un calcolo di volume. Il volume, a sua volta, si fa per **fette/fili** in coordinate adattate
(cilindriche per simmetria di rotazione, sferiche per palle).

## La mossa

1. **Verifica $F\in C^1$** su $\overline E$ (altrimenti Gauss non si applica).
2. **Calcola $\operatorname{div}F$ subito.** È spesso costante: se lo è, il flusso sarà semplicemente
   $\operatorname{div}F\cdot\text{Vol}(E)$.
   > **Trappola** (`b02`): errore di segno in una parziale (frequente con $\sin,\cos,e^x$): spesso i termini
   > si **cancellano** e la divergenza è costante — un segno sbagliato la fa sembrare variabile. Ricontrolla.
3. **Descrivi $E$ come dominio normale** e scegli le coordinate: cilindriche
   ($x=\rho\cos\theta,y=\rho\sin\theta,z=z$, $J=\rho$) per rotazione attorno a $z$; sferiche ($J=r^2\sin\phi$)
   per palle; traslate se il solido è decentrato.
   > **Trappola** (`27giu25`): un cilindro **traslato** $(x-z)^2+y^2\le4$ non si parametrizza con cilindriche
   > centrate nell'origine — per ogni $z$ fisso è un disco di centro $(z,0)$: integra per fette in $z$.
   > **Trappola** (Jacobiano): non dimenticare il fattore $\rho$ (cilindriche) o $r^2\sin\phi$ (sferiche).
4. **Trova le superfici d'intersezione** eguagliando le equazioni di frontiera (per $z$ o $\rho$): definiscono
   il dominio proiettato $D$ e gli estremi d'integrazione.
5. **Volume:** $\text{Vol}(E)=\iint_D(z_{\sup}-z_{\inf})\,dx\,dy$, oppure per fette
   $\int(\text{area della fetta})\,dz$.
6. **Flusso:** $\iiint_E\operatorname{div}F$. Se $\operatorname{div}F$ è dispari in una variabile e $D$ è
   simmetrico, quei termini si annullano ($\int_0^{2\pi}\cos\theta\,d\theta=\int_0^{2\pi}\sin\theta\,d\theta=0$).
7. **Flusso su una singola superficie:** calcola direttamente il flusso sulla superficie **più semplice**
   (spesso una faccia piana/cartesiana), poi ottieni l'altra per **differenza** dal flusso totale.
   > **Trappola** (segno della normale, `20230210`): sulla singola superficie il verso uscente va imposto a
   > mano. Per un grafico $z=g(x,y)$ la normale grezza $(-g_x,-g_y,1)$ punta in alto: è uscente se la
   > superficie chiude $E$ **dall'alto**, entrante (⇒ cambia segno) se lo chiude dal basso.

## Un esame, per intero

**Prova 10/02/2023, Es. 4** (`20230210`). $E=\{x^2+y^2+z^2\le25,\ x^2+y^2\le9\}$ (palla di raggio $5$
intersecata col cilindro di raggio $3$), $F=(x,y,z)$. Calcolare il flusso uscente da $\partial E$ e il flusso
attraverso il mantello cilindrico $\Sigma_3$.

**Divergenza.** $\operatorname{div}F=\partial_x x+\partial_y y+\partial_z z=1+1+1=3$ (costante). Quindi il
flusso totale è $3\,\text{Vol}(E)$.

**Geometria.** Il cilindro $x^2+y^2\le9$ taglia la palla; la frontiera è composta da tre pezzi: calotta
superiore $\Sigma_1:\ z=\sqrt{25-x^2-y^2}$, calotta inferiore $\Sigma_2:\ z=-\sqrt{25-x^2-y^2}$ (entrambe su
$D=\{x^2+y^2\le9\}$), e il mantello $\Sigma_3:\ x^2+y^2=9,\ -4\le z\le4$ (dove $z=\pm\sqrt{25-9}=\pm4$).

**Volume** (cilindriche, $\rho\in[0,3]$): per ogni $(\rho,\theta)$ la quota va da $-\sqrt{25-\rho^2}$ a
$+\sqrt{25-\rho^2}$, altezza $2\sqrt{25-\rho^2}$:
$$\text{Vol}(E)=\int_0^{2\pi}\!\!\int_0^3 2\sqrt{25-\rho^2}\,\rho\,d\rho\,d\theta=2\pi\Bigl[-\tfrac23(25-\rho^2)^{3/2}\Bigr]_0^3=2\pi\cdot\tfrac23\bigl(125-16^{3/2}\bigr)=\tfrac{4\pi}{3}(125-64)=\tfrac{244\pi}{3}.$$
Flusso totale: $\Phi(\partial E)=3\,\text{Vol}(E)=3\cdot\tfrac{244\pi}{3}=244\pi$.

**Flusso sulle calotte** (le più semplici da calcolare direttamente). Su $\Sigma_1$, $z=\sqrt{25-x^2-y^2}$,
normale uscente $\propto(-z_x,-z_y,1)$ (verso l'alto = uscente). Con $F=(x,y,z)$:
$F\cdot(-z_x,-z_y,1)=-xz_x-yz_y+z$; usando $z_x=-x/z$, $z_y=-y/z$ si ha
$F\cdot\mathbf n\,dS=\bigl(\tfrac{x^2}{z}+\tfrac{y^2}{z}+z\bigr)dx\,dy=\tfrac{x^2+y^2+z^2}{z}\,dx\,dy=\tfrac{25}{z}\,dx\,dy=\tfrac{25}{\sqrt{25-\rho^2}}\,dx\,dy$.
$$\Phi(\Sigma_1)=\int_0^{2\pi}\!\!\int_0^3\frac{25}{\sqrt{25-\rho^2}}\,\rho\,d\rho\,d\theta=2\pi\cdot25\Bigl[-\sqrt{25-\rho^2}\Bigr]_0^3=50\pi(5-4)=50\pi.$$
Per simmetria $\Phi(\Sigma_2)=50\pi$ (la calotta inferiore, con normale uscente verso il basso, dà lo stesso
contributo positivo perché anche $F$ punta all'ingiù lì).

**Mantello per differenza.**
$$\Phi(\Sigma_3)=\Phi(\partial E)-\Phi(\Sigma_1)-\Phi(\Sigma_2)=244\pi-50\pi-50\pi=\boxed{144\pi}.$$
$\blacksquare$

Verifica diretta (facoltativa): sul mantello $x^2+y^2=9$, la normale uscente è radiale orizzontale
$\mathbf n=(x,y,0)/3$; $F\cdot\mathbf n=(x^2+y^2)/3=3$; area del mantello $=2\pi\cdot3\cdot8=48\pi$; flusso
$=3\cdot48\pi=144\pi$ ✓. Coerente.

## Le varianti

Due assi comandano: la **divergenza** (costante / semplice-dispari / variabile) decide quanto lavoro resta dopo
Gauss; la **geometria del dominio** decide le coordinate. Un terzo asse è la richiesta: flusso totale oppure
flusso su una **singola** superficie (per differenza).

**La divergenza.**

- **Costante ⇒ flusso $=\operatorname{div}F\cdot\text{Vol}(E)$** (`20230210` svolto, div $=3$; `20220706` Es.2
  div $=8$; `19giu24` div $=2$; `22gen24` Es.4 div $=1$). *Cosa cambia:* tutto il lavoro diventa un **calcolo di
  volume**; controlla che i termini si cancellino davvero (un segno sbagliato in $\sin,\cos,e^x$ la fa sembrare
  variabile).
- **Semplice ma dispari ⇒ flusso nullo per simmetria** (`20220124` Es.3, div $=y-1$ su dominio simmetrico ⇒ $0$).
  *Cosa cambia:* prima di integrare, guarda la **parità**: $\int_0^{2\pi}\cos\theta=\int_0^{2\pi}\sin\theta=0$
  uccide i termini lineari.
- **Variabile ⇒ integra il campo con la stessa parametrizzazione del volume** (`20230907` div $=4x$; `05mar24`
  div $=2x+y$; `27giu25` div $=2e^z+2$). *Cosa cambia:* non basta il volume; porti $\operatorname{div}F$ nelle
  coordinate del dominio e integri.

**La geometria del dominio.**

- **Paraboloide + sfera/piano** (`20220706` $z\ge\frac{x^2+y^2}2,\ x^2+y^2+z^2\le3$; `05mar24` paraboloide
  $\cap$ cono): cilindriche, **proiezione $D$ da risolvere** eguagliando le due frontiere.
- **Sfera $\cap$ cilindro (tre superfici)** (`20230210` svolto): calotte + mantello; flusso su una calotta
  diretto, mantello **per differenza**.
- **Solido di rotazione / per fette** (`20230907` Es.3: cono decentrato $(x-(1-z))^2+y^2\le(1-z)^2$, area fetta
  $\pi(1-z)^2$, Vol $=\frac\pi3$): quando la sezione a $z$ fisso ha area nota, integri
  $\int(\text{area fetta})\,dz$ (o Guldino).
- **Intercapedine iperboloide–paraboloide** (`20230621` Es.4: $z^2+3\le x^2+y^2\le3z+1$, cilindriche $z\in[1,2]$).
- **Cilindro traslato** (`27giu25` Es.3: $(x-z)^2+y^2\le4$, $0\le z\le4$; `09feb24` calotta sferica + cono):
  per ogni $z$ la sezione è un disco di **centro $(z,0)$** ⇒ integri per fette, non con cilindriche centrate.
  *Cosa cambia:* leggi la simmetria per scegliere cilindriche/sferiche/fette; se il centro dipende da $z$, le
  cilindriche standard non servono.

**La richiesta: flusso su una singola superficie** (`20230210`). *Riconosci:* "flusso attraverso $\Sigma_i$".
*Cosa cambia:* calcoli il flusso sulla superficie **più facile** con la definizione e ottieni l'altra come
$\Phi(\partial E)-\Phi(\text{facile})$; imponi a mano il verso **uscente** (la normale grezza $(-g_x,-g_y,1)$ di
un grafico punta in alto: uscente se chiude $E$ dall'alto, da invertire se lo chiude dal basso).

## Collaudo

1. $E=\{x^2+y^2+z^2\le25,\ x^2+y^2\le9\}$, $F=(x,y,z)$: flusso totale e flusso sul mantello? *(Risposta:
   totale $244\pi$ ($=3\,\text{Vol}$, $\text{Vol}=244\pi/3$); mantello $144\pi$, meglio per differenza.)*
2. $\operatorname{div}F=8$ su un solido di volume $V$: quanto vale il flusso uscente? *(Risposta: $8V$;
   nessun integrale di superficie necessario.)*
3. Perché per il cilindro traslato $(x-z)^2+y^2\le4$ non uso cilindriche centrate nell'origine? *(Risposta:
   il centro del disco dipende da $z$ ($=(z,0)$); si integra per fette, disco per disco.)*

# Saper-fare 03 · Teorema di Dini (funzione implicita)

> **SOSTANZA DA VERIFICARE — generata autonomamente** (Demiurgo Accademico, 2026-07-13). Correttezza
> matematica da ratificare da Giuseppe. Pool mappa #10 · freq **5/11 e 4/10** · l'**alternativa dell'Es.1**
> quando non c'è la differenziabilità (02).

## La firma

Un'**equazione** $F(x,y)=0$ (o $F(x,y,z)=0$), la richiesta di mostrare che essa **definisce implicitamente**
una funzione $y=g(x)$ (o $z=g(x,y)$) in un intorno di un punto, e poi di studiarne derivata, monotonia,
punti critici, retta/piano tangente. Parole-spia: *definisce implicitamente, Teorema del Dini, funzione
implicita, retta tangente, punto critico di $g$*.

Cosa NON confondere: se la funzione è data esplicitamente come quoziente con $f(0,0)=0$, è differenziabilità
(02). Qui c'è un'equazione da *risolvere localmente* per una variabile che **non si sa esplicitare**.

## L'idea

Un luogo $\{F=0\}$ è, vicino a un suo punto, il grafico di una funzione **se la tangente non è verticale
rispetto alla variabile che vuoi esplicitare**. Formalmente, se $F\in C^1$, $F(P_0)=0$ e la derivata parziale
rispetto alla variabile-incognita è **non nulla** in $P_0$, allora esiste un'unica $g$ di classe $C^1$, con
$F(x,g(x))=0$ localmente. La derivata di $g$ si ricava **derivando l'identità** $F(x,g(x))=0$:
$$F_x+F_y\,g'(x)=0\ \Longrightarrow\ g'(x)=-\frac{F_x}{F_y},\qquad\text{e in 3D}\quad g_x=-\frac{F_x}{F_z},\ g_y=-\frac{F_y}{F_z}.$$
Non serve conoscere $g$: la sua pendenza (e la tangente) escono dalle derivate di $F$ nel punto.

Nei **punti critici** ($g'=0$, cioè $F_x=0$) la natura si legge dalla derivata seconda. Derivando ancora
$F(x,g(x))=0$ e usando $g'=0$:
$$g''(x_0)=-\frac{F_{xx}(P_0)}{F_y(P_0)}\qquad\text{(valida SOLO se }g'(x_0)=0).$$

## La mossa

1. **Trova i punti sul luogo.** Sostituisci il valore "libero" (es. $x=0$) e risolvi l'equazione numerica
   $F(0,y)=0$: dà i candidati $y_0,y_1,\dots$
   > **Trappola** (`20230210`): controlla sempre per calcolo diretto che $F(P_0)=0$ prima di applicare il
   > teorema. Il punto deve stare sul luogo.
2. **Verifica l'ipotesi di Dini.** Calcola $F_y(P_0)$ (o $F_z$ in 3D): se $\neq0$, il teorema si applica e
   $y=g(x)$ esiste localmente.
   > **Trappola** (`27giu25`, correzione 2026-07-08): l'errore tipico è sbagliare la derivata parziale e
   > concludere erroneamente $F_y=0$. Deriva con cura ogni addendo (regola del prodotto sugli esponenziali).
   > Se davvero $F_y(P_0)=0$ ma $F_x\neq0$, allora Dini vale nell'*altra* direzione: $x=h(y)$.
3. **Calcola $g'(P_0)=-F_x/F_y$.** Se $g'\neq0$: monotonia (segno di $g'$) e retta tangente
   $y=g(x_0)+g'(x_0)(x-x_0)$.
4. **Se $g'=0$ (punto critico):** usa $g''=-F_{xx}/F_y$. Segno $>0$ ⇒ minimo, $<0$ ⇒ massimo.
   > **Trappola** (`20220124`): la formula $g''=-F_{xx}/F_y$ è corretta **solo nei punti critici**. In
   > generale compaiono anche $F_{xy}g'$ e $F_{yy}(g')^2$; usarla dove $g'\neq0$ dà un risultato sbagliato.
5. **Caso 3D** ($z=g(x,y)$): $\nabla g=(-F_x/F_z,-F_y/F_z)$; il piano tangente è
   $z=g(x_0,y_0)+g_x(x-x_0)+g_y(y-y_0)$. Per la natura di un punto critico di $g$ serve l'Hessiana di $g$
   (formule più lunghe, si semplificano solo dove $\nabla g=0$).
   > **Trappola** (`22gen24`): non confondere il **piano tangente al grafico di $g$** con il piano tangente a
   > $\partial E$ se $E$ è un dominio 3D — hanno equazioni diverse.

## Un esame, per intero

**Prova 24/01/2022, Es. 1** (`20220124`). $F(x,y)=y^3\sin x+y^2-2y\,e^{x}-3-x=0$. Mostrare che vicino a
$x=0$ il luogo è grafico di funzioni $y=g(x)$; studiarne i punti critici e la natura.

**Punti sul luogo.** In $x=0$: $\sin0=0$, $e^0=1$, quindi $F(0,y)=y^2-2y-3=0\iff(y-3)(y+1)=0$: candidati
$y_0=-1$, $y_1=3$.

**Ipotesi di Dini.** $F_y=3y^2\sin x+2y-2e^{x}$. In $(0,-1)$: $F_y=0+(-2)-2=-4\neq0$. In $(0,3)$:
$F_y=0+6-2=4\neq0$. Dini si applica in entrambi: esistono $g_0,g_1\in C^1$ con $g_0(0)=-1$, $g_1(0)=3$.

**Derivata prima.** $F_x=y^3\cos x-2y\,e^{x}-1$. In $(0,-1)$: $F_x=(-1)(1)-2(-1)(1)-1=-1+2-1=0$. In $(0,3)$:
$F_x=27\cdot1-2\cdot3\cdot1-1=27-6-1=20$. Quindi
$$g_0'(0)=-\frac{F_x(0,-1)}{F_y(0,-1)}=-\frac{0}{-4}=0\ \text{(punto critico)},\qquad g_1'(0)=-\frac{20}{4}=-5\neq0.$$
$g_1$ è decrescente in $0$ (nessun punto critico lì). $g_0$ ha un punto critico: ne studio la natura.

**Derivata seconda in $(0,-1)$** (lecito perché $g_0'(0)=0$). Serve $F_{xx}=-y^3\sin x-2y\,e^{x}$; in
$(0,-1)$: $F_{xx}=0-2(-1)(1)=2$. Allora
$$g_0''(0)=-\frac{F_{xx}(0,-1)}{F_y(0,-1)}=-\frac{2}{-4}=\frac12>0.$$
$g_0$ ha un **minimo locale** in $x=0$, con valore $g_0(0)=-1$. La retta tangente a $g_1$ in $0$ è
$y=3-5x$. $\blacksquare$

Nota: tutto il ritratto (esistenza, monotonia di $g_1$, minimo di $g_0$) è uscito da valori di $F$ e delle
sue derivate in due punti — mai si è dovuto esplicitare $g$.

## Le varianti

Tre assi organizzano le famiglie: **quale variabile** si esplicita (chi ha la parziale $\neq0$), la
**dimensione** (2D grafico di $g(x)$, 3D grafico di $g(x,y)$), e **cosa si chiede** (monotonia / natura del
critico / retta o piano tangente).

**2D, incognita $y=g(x)$, con punto critico → $g''$.**

- `20220124` Es.1 (svolto): $y^3\sin x+y^2-2ye^x-3-x=0$; in $x=0$ i punti $(0,-1)$ e $(0,3)$; in $(0,-1)$
  $g'=0$, $g''=\frac12>0$ ⇒ **minimo**.
- `20220504` Es.1: $y^2+x(e^y-e^2)-x^2-4=0$; in $x=0$ si ha $y=\pm2$; $F_x(0,2)=e^2-e^2=0$ ⇒ $g_1'(0)=0$,
  $g_1''=\frac12>0$ ⇒ **minimo**.
  *Riconosci:* $F_x(P_0)=0$ nel punto sul luogo. *Cosa cambia:* scatta la formula $g''=-F_{xx}/F_y$, valida
  **solo** perché $g'=0$.

**2D, incognita $x=h(y)$ (attenzione a chi è l'incognita).**

- `20230210` Es.1: $x^3+ye^{x^2y^2}-3x^2=0$; qui si pone $y=0$ e si trova $x_0=0,\ x_1=3$; $F_y(x,0)=1\neq0$
  garantisce $y=g(x)$... ma il punto $x_1=3$ ha $g'(3)=-9\neq0$ (decrescente), mentre $x_0=0$ è critico con
  minimo.
  *Riconosci:* l'equazione si annulla più naturalmente ponendo $y=0$ anziché $x=0$. *Cosa cambia:* guardi
  **quale** parziale è non nulla per decidere se esplicitare $y$ o $x$; confondere i ruoli scambia le formule.

**2D con parametro/funzione, $g'\neq0$ → monotonia e retta tangente.**

- `27giu25` Es.2: $F=(x^2+2y^2)e^{-x-y^2}$; in $(1,1)$, $F_y=-2e^{-2}\neq0$, $g'(1)=-\frac12$ (retta tangente).
- `05mar24` Es.4: $\frac{\sin(\pi y)}{\pi}+e^{x^2-4}-y^2+(3+x)\arctan(y-1)=0$; prima si **trovano** i punti
  $P_1,P_2$ sul luogo ($x=\pm2$), poi si verifica $F_y(P_i)\neq0$.
  *Riconosci:* si chiede pendenza/monotonia, non natura di un critico. *Cosa cambia:* ti fermi a
  $g'=-F_x/F_y$; **non** usi la formula di $g''$ (sarebbe illecita dove $g'\neq0$).

**3D, $z=g(x,y)$: piano tangente e natura del critico.**

- `22gen24` Es.1: $\sqrt{x^2+y^2+z^2+1}+x-z=1$; $F_z(0,0,0)=-1\neq0$ ⇒ $z=g(x,y)$, piano tangente $z=x$.
  Qui il Dini arriva **a valle** dell'analisi di regolarità di $f$ (ponte con 02).
- `20220907` Es.2: $e^z+x^2y^2z-e^{xy}+x^4-y^4=0$; $F_z(0,0,0)=1\neq0$ ⇒ $z=g(x,y)$; $\nabla g(0,0)=(0,0)$;
  Hessiana $g_{xx}=g_{yy}=0$, $g_{xy}=1$, $\det H_g=-1<0$ ⇒ **sella**.
  *Riconosci:* una sola equazione in tre variabili, $F_z\neq0$. *Cosa cambia:* $\nabla g=(-F_x/F_z,-F_y/F_z)$;
  per la natura del critico serve l'**Hessiana di $g$** (formule lunghe, si semplificano solo dove $\nabla g=0$),
  non la formula 2D di $g''$.

## Collaudo

1. $F(x,y)=y^3\sin x+y^2-2ye^x-3-x$: quali sono i due punti su $x=0$ e qual è la natura del punto critico?
   *(Risposta: $(0,-1)$ e $(0,3)$; in $(0,-1)$ minimo ($g''=1/2>0$); in $(0,3)$ nessun critico, $g'=-5$.)*
2. In $(0,3)$ del punto precedente, posso usare $g''=-F_{xx}/F_y$? *(Risposta: no — vale solo dove $g'=0$; in
   $(0,3)$ è $g'=-5\neq0$, la formula darebbe un valore privo di senso.)*
3. $F(x,y,z)=e^z+x^2y^2z-e^{xy}+x^4-y^4=0$ in $(0,0,0)$: che tipo di punto critico è di $g$? *(Risposta:
   sella, $\det H_g=-1<0$.)*

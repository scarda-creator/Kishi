# Saper-fare 06 · Curve: parametrizzazione, regolarità, integrali di linea

> **SOSTANZA DA VERIFICARE — generata autonomamente** (Demiurgo Accademico, 2026-07-13). Correttezza
> matematica da ratificare da Giuseppe. Pool mappa #3 · freq **8/11 (+ ovunque come sotto-punto)** · priorità
> **ALTA** (parametrizzazioni, punto debole dichiarato).

## La firma

Un **sostegno di curva** dato come *sistema di due equazioni* in $\mathbb{R}^3$ (tipicamente un cilindro
$x^2+y^2=R^2$ intersecato con un piano $z=\text{lineare}$), o come mappa $(x(t),y(t),z(t))$ già scritta, con
la richiesta: "parametrizzare, verificare regolare/semplice, calcolare $\int_\gamma f\,ds$ (I specie) o il
lavoro $\int_\gamma F\cdot T\,ds$ (II specie)". Compare quasi sempre come **primo sotto-punto** dell'Es.4
(quello che prosegue con area/Stokes). Parole-spia: *sostegno, parametrizzare, regolare, semplice, ascissa
curvilinea, lunghezza, lavoro, integrale di linea*.

Cosa NON confondere: **due** equazioni ⇒ curva (qui); **una** equazione $z=f(x,y)$ ⇒ superficie (07). Il
*bordo* di una superficie è una curva: è il ponte fra 06 e 07.

## L'idea

Una curva è l'immagine di un intervallo sotto una mappa $\gamma:[a,b]\to\mathbb{R}^3$. Due proprietà la
rendono maneggiabile:

- **Regolare:** $\gamma'(t)\neq0$ su $(a,b)$. Significa che ha in ogni punto un **vettore tangente** ben
  definito — niente spigoli o arresti. Basta che *una* componente di $\gamma'$ non si annulli.
- **Semplice:** $\gamma$ iniettiva su $(a,b)$ (non si autointerseca). Per curve chiuse si accetta
  $\gamma(a)=\gamma(b)$: iniettiva su $[a,b)$.

Gli integrali di linea pesano lungo la curva con l'elemento d'arco $ds=|\gamma'(t)|\,dt$:
$$\int_\gamma f\,ds=\int_a^b f(\gamma(t))\,|\gamma'(t)|\,dt\quad(\text{I specie, scalare}),\qquad
\int_\gamma F\cdot T\,ds=\int_a^b F(\gamma(t))\cdot\gamma'(t)\,dt\quad(\text{II specie, lavoro}).$$
La I specie non dipende dall'orientazione (c'è $|\gamma'|$); la II specie **sì** (c'è $\gamma'$, cambia segno
col verso). La ricetta per il cilindro: $x^2+y^2=R^2$ obbliga $x=R\cos t$, $y=R\sin t$, e la terza equazione
dà $z(t)$ per sostituzione.

## La mossa

1. **Leggi il sostegno.** Due equazioni in $\mathbb{R}^3$ = curva 1D. Se una è $x^2+y^2=R^2$ (cerchio) o
   $x^2/a^2+y^2/b^2=1$ (ellisse), parametrizza subito la parte $(x,y)$ con $(\cos,\sin)$ scalato.
2. **Ricava $z(t)$.** Sostituisci $x(t),y(t)$ nella terza equazione (di solito un piano $z=$ lineare in
   $x,y$).
3. **Regolarità.** Calcola $\gamma'(t)$; verifica $\gamma'\neq0$ su $(a,b)$. Per il cilindro,
   $(x',y')=(-R\sin t,R\cos t)$ non si annulla mai (seno e coseno non simultaneamente nulli), quindi
   $|\gamma'|^2\ge R^2>0$.
   > **Trappola** (`20220124`): non serve calcolare $|z'(t)|^2$. Usa la **disuguaglianza**
   > $|\gamma'|^2\ge (x')^2+(y')^2=R^2>0$: la parte planare già garantisce la regolarità, anche se $z'$ si
   > annulla in qualche $t$.
   > **Trappola** (curve chiuse): la regolarità si chiede su $(0,2\pi)$, **non** agli estremi che coincidono.
4. **Semplicità.** Verifica l'iniettività su $(a,b)$. Per $t\mapsto(\cos t,\sin t)$ è iniettiva su $[0,2\pi)$
   ma non su $[0,2\pi]$ (gli estremi coincidono): per curve chiuse è lecito.
5. **Integrale di linea.**
   - I specie: $\int_a^b f(\gamma(t))|\gamma'(t)|\,dt$.
   - II specie (lavoro): $\int_a^b F(\gamma(t))\cdot\gamma'(t)\,dt$. **Prima** verifica se $F$ è conservativo
     (10): se lo è, il lavoro è $U(B)-U(A)$ e su curva chiusa è $0$ — niente integrale.
   > **Trappola** (bordo di superficie): il bordo di $\Sigma=\{(x,y,f(x,y)):(x,y)\in D\}$ è la curva
   > $\{(x,y,f(x,y)):(x,y)\in\partial D\}$ **in $\mathbb{R}^3$**, non la frontiera $\partial D$ nel piano. Se
   > $D$ è il disco di raggio $R$, il bordo è $\gamma(t)=(R\cos t,R\sin t,f(R\cos t,R\sin t))$.

## Un esame, per intero

**Prova 24/01/2022, Es. 4-i** (`20220124`). Parametrizzare e verificare regolare la curva
$\gamma:\ z=x+3y+4,\ x^2+y^2=4$.

**Parametrizzazione.** Il vincolo $x^2+y^2=4$ è il cerchio di raggio $2$: pongo
$$x(t)=2\cos t,\qquad y(t)=2\sin t,\qquad t\in[0,2\pi].$$
Sostituisco nel piano: $z(t)=x+3y+4=2\cos t+6\sin t+4$. Dunque
$$\gamma(t)=\bigl(2\cos t,\ 2\sin t,\ 2\cos t+6\sin t+4\bigr),\qquad t\in[0,2\pi].$$

**Regolarità.** Derivo:
$$\gamma'(t)=\bigl(-2\sin t,\ 2\cos t,\ -2\sin t+6\cos t\bigr).$$
Uso la disuguaglianza sulle prime due componenti:
$$|\gamma'(t)|^2=4\sin^2 t+4\cos^2 t+(\cdots)^2\ge 4\sin^2 t+4\cos^2 t=4>0\quad\forall t.$$
Il vettore tangente non si annulla mai (basta la parte planare), quindi $\gamma$ è **regolare** su
$(0,2\pi)$. È **semplice**: la mappa $t\mapsto(2\cos t,2\sin t)$ è iniettiva su $[0,2\pi)$, e la curva è chiusa
($\gamma(0)=\gamma(2\pi)$). $\blacksquare$

Nota di metodo: non ho toccato $z'(t)=-2\sin t+6\cos t$ (che *si annulla* per qualche $t$): la regolarità è già
salva grazie a $(x')^2+(y')^2=4$. Questo è esattamente il trucco che l'esame premia.

## Le varianti

Le famiglie si distinguono per **come è dato il sostegno**: già pronto per la parametrizzazione trigonometrica,
da ricavare per intersezione, oppure già esplicito. In parallelo cambia *cosa garantisce la regolarità* e *su
quale intervallo* (curva chiusa vs arco).

**Sostegno = quadrica $\cap$ piano, direttamente parametrizzabile.**

- **Cilindro circolare $x^2+y^2=R^2$** (`20220124` Es.4 svolto; `20220504` Es.3 $\{x^2+y^2=9,z=x+y\}$;
  `20220706` Es.4 $\{x^2+y^2=1,z=4x+y+1\}$): $x=R\cos t$, $y=R\sin t$, $z$ dal piano; curva **chiusa**,
  $t\in[0,2\pi)$.
- **Cilindro ellittico / arco** (`20230210` Es.3): $\frac{x^2}4+y^2=1$, $y\ge0$ ⇒ $x=2\cos\phi$, $y=\sin\phi$,
  $\phi\in[0,\pi]$ (**semiellisse**, arco aperto).
  *Riconosci:* una delle due equazioni è $x^2+y^2=R^2$ o $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$. *Cosa cambia:*
  cilindro circolare → $R(\cos,\sin)$; ellittico → $(a\cos,b\sin)$; un vincolo di semipiano ($y\ge0$) taglia
  l'intervallo del parametro e rende l'iniettività ovvia.

**Sostegno = intersezione da RISOLVERE prima** (`10feb22` Es.3): paraboloide $\cap$ piano; sostituendo si
riduce a $x^2+y^2=\frac14$ ⇒ $x=\frac12\cos t$, $y=\frac12\sin t$, $z$ dal piano. *Riconosci:* nessuna delle due
equazioni è già un cerchio. *Cosa cambia:* **prima** elimini $z$ ed estrai il cerchio nel piano $(x,y)$, **poi**
parametrizzi; saltare il primo passo dà un sostegno sbagliato.

**Sostegno già ESPLICITO $(x(t),y(t),z(t))$.**

- Spaziale (`20230504` Es.4): $(1+e^{t^2},\log(t^4+1),\sin((\pi t)^6))$, $t\in[0,1]$; regolare perché
  $x'(t)=2te^{t^2}\neq0$ su $(0,1)$ — **basta una componente**.
- Piana (`20230705` Es.3): $(t^2+1,\arcsin t)$, $t\in[-\frac12,\frac12]$; **semplice** perché $\arcsin t$ è
  iniettiva; regolare perché $(\arcsin t)'=\frac1{\sqrt{1-t^2}}\neq0$.
  *Riconosci:* la mappa è data, niente da parametrizzare. *Cosa cambia:* la regolarità si prova esibendo **una**
  derivata non nulla; la semplicità sfruttando l'iniettività di una componente monotona.

**Sostegno = BORDO di una superficie** (`20240704` Es.3): $\partial\Sigma$ del piano $z=4y+5$ su
$x^2+(y-2)^2\le9$ è $\gamma(t)=(3\cos t,\,2+3\sin t,\,8+12\sin t)$. *Riconosci:* la curva nasce come frontiera di
un dominio 2D. *Cosa cambia:* è l'**immagine del cerchio-frontiera** sotto la parametrizzazione della
superficie, una curva in $\mathbb{R}^3$ (non il cerchio nel piano). È il **ponte con 07 e 09**.

**Nota sull'orientazione (I vs II specie).** L'integrale di **I specie** $\int_\gamma f\,ds$ ($ds=|\gamma'|dt$)
è insensibile al verso; quello di **II specie** (lavoro, $\int F\cdot\gamma'\,dt$) **cambia segno** col verso.
*Cosa cambia nel metodo:* per il lavoro controlla prima se $F$ è conservativo (10) — se sì, la curva chiusa dà
$0$ e quella aperta $U(B)-U(A)$, senza integrare.

## Collaudo

1. $z=x+3y+4$, $x^2+y^2=4$: parametrizza e prova la regolarità. *(Risposta:
   $\gamma=(2\cos t,2\sin t,2\cos t+6\sin t+4)$; $|\gamma'|^2\ge4>0$; regolare e semplice su $[0,2\pi)$.)*
2. Perché per la regolarità di $\gamma$ del punto 1 non serve calcolare $z'(t)$? *(Risposta: perché
   $|\gamma'|^2\ge(x')^2+(y')^2=4>0$; la parte planare basta, anche se $z'$ si annulla.)*
3. Il bordo del grafico $z=4y+5$ sopra il disco $x^2+(y-2)^2\le9$: che curva è? *(Risposta:
   $\gamma(t)=(3\cos t,\,2+3\sin t,\,8+12\sin t)$, una curva in $\mathbb{R}^3$, non il cerchio nel piano.)*

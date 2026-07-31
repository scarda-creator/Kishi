# Saper-fare 01 · EDO / Problema di Cauchy (analisi qualitativa + risoluzione)

> **SOSTANZA DA VERIFICARE — generata autonomamente** (Demiurgo Accademico, 2026-07-13). Correttezza
> matematica da ratificare da Giuseppe. Pool mappa #1 · freq **10/10 e 11/11** (sempre presente) · priorità
> **ALTA** (peso sul ragionamento qualitativo, non sul solo calcolo di $y(x)$).

## La firma

È l'esercizio quasi sempre **ultimo** (Es.5, talvolta Es.2). Riconoscibile all'istante: un'equazione
$y'(t)=f(t,y)$ del **primo ordine scalare** con un **dato iniziale** $y(t_0)=y_0$, e una lista di domande del
tipo "esiste ed è unica la soluzione? è prolungabile a tutto $\mathbb{R}$? è monotona? qual è il limite a
$\pm\infty$?", spesso seguite da "risolvere esplicitamente". Parole-spia: *problema di Cauchy, soluzione
massimale, prolungabilità, monotonia, limite, separazione di variabili, Bernoulli*.

Cosa NON confondere: qui la variabile indipendente è $t$ e la funzione incognita è $y(t)$ (una sola
funzione di una sola variabile). Non è il calcolo differenziale in più variabili (quello è 02/03). Il cuore
non è la formula risolutiva: è il **ritratto qualitativo** ottenuto *senza* risolvere.

## L'idea

Tre teoremi fanno tutto il lavoro pesante, e nessuno richiede di conoscere $y(t)$.

- **Cauchy–Lipschitz (esistenza e unicità locali).** Se $f(t,u)$ è di classe $C^1$ (o localmente
  lipschitziana in $u$) in un intorno di $(t_0,y_0)$, il problema ha **una e una sola** soluzione locale.
  L'unicità è l'arma vera: due soluzioni distinte non si toccano mai.
- **Soluzioni costanti come barriere.** Se $f(t,\bar u)=0$ per ogni $t$, allora $y\equiv\bar u$ è soluzione.
  Per l'unicità, **nessun'altra** soluzione può attraversare la retta $y=\bar u$. Il dato iniziale, incastrato
  fra due costanti, resta intrappolato lì per sempre — e questo, da solo, dà limitatezza e segno di $y'$.
- **Teorema dell'asintoto.** Se $y$ è monotona e limitata, il limite $\ell=\lim_{t\to+\infty}y(t)$ esiste
  finito; e se esiste anche $\lim y'(t)$, allora $\lim y'=0$. Uguagliando $f(t,\ell)\to0$ si legge *quale*
  costante è il limite (di solito quella che fa da barriera più vicina).

Sopra: la **globalità** (prolungabilità a tutto $\mathbb{R}$) segue dalla **sublinearità**
$|f(t,u)|\le L_1(t)|u|+L_2(t)$ con $L_i$ continue — la soluzione non può esplodere in tempo finito.

## La mossa

1. **Forma normale e $C^1$.** Scrivi $y'=f(t,y)$; verifica $f\in C^1$ nell'intorno di $(t_0,y_0)$ ⇒
   esistenza-unicità locale.
   > **Trappola** (`22gen24` sol.): la condizione è su $f(t,u)$ **come funzione delle due variabili
   > indipendenti** $(t,u)$, *non* su $f(t,y(t))$ (che presuppone la soluzione già nota). Scrivere
   > "$f(t,y(t))\in C^1$" è un errore concettuale segnalato in correzione.
2. **Soluzioni costanti.** Risolvi $f(t,\bar u)=0$ in $\bar u$: sono le barriere. Colloca $y_0$ rispetto a
   esse.
3. **Segno di $y'$ e monotonia.** Nella striscia fra due barriere il segno di $f$ è costante: leggilo. Dà
   crescente/decrescente **senza risolvere**.
   > **Trappola** (`20220124`): $y'=4t^3(1-e^{y})$ con $y>0$ dà $1-e^y<0$, ma $4t^3$ **cambia segno con $t$**.
   > La monotonia non è globale: $y$ cresce per $t<0$, decresce per $t>0$, ha un massimo in $t=0$. Non
   > semplificare frettolosamente.
4. **Limiti.** Se $y$ è monotona e limitata da una barriera, il limite esiste; il **teorema dell'asintoto** dà
   il valore (tipicamente la barriera).
   > **Trappola** (`21lug25`): il teorema dell'asintoto **non prova l'esistenza** del limite, dà solo il
   > valore *supposta* l'esistenza. L'esistenza va da monotonia + limitatezza. Non invertire l'ordine.
5. **Globalità.** Cerca una stima $|f(t,u)|\le L_1(t)|u|+L_2(t)$: se c'è, la soluzione è definita su tutto
   l'intervallo dei $t$. Se $y$ è già intrappolata fra due barriere è limitata, e ciò basta.
6. **Risoluzione esplicita.** Separazione di variabili ($\int\frac{dy}{g(y)}=\int h(t)\,dt$); **Bernoulli**
   $y'+p(t)y=q(t)y^\alpha$ con la sostituzione $z=y^{1-\alpha}$ (lineare in $z$); lineare del I ordine con
   fattore integrante $e^{\int p}$. Trova l'**intervallo massimale** dall'espressione esplicita (dove il
   denominatore si annulla o l'argomento di un log/radice esce dal dominio).
   > **Trappola** (`20230705`): dopo Bernoulli/separazione ottieni spesso $y$ da un'equazione di 2° grado o
   > da una radice — **scegli il ramo** compatibile col dato iniziale e col segno imposto ai passi 2–3.

## Un esame, per intero

**Prova 24/01/2022, Es. 5** (`20220124`). $y'(t)=4t^3\bigl(1-e^{y(t)}\bigr)$, $y(0)=\log 2$. Studiare
esistenza/unicità, segno e monotonia, il massimo, e risolvere.

**Esistenza-unicità.** $f(t,u)=4t^3(1-e^{u})$ è $C^1$ su tutto $\mathbb{R}^2$ (polinomiale ed esponenziale):
Cauchy–Lipschitz ⇒ soluzione locale unica per $(0,\log 2)$.

**Barriere.** $f(t,\bar u)=0\iff 1-e^{\bar u}=0\iff \bar u=0$. Unica soluzione costante $y\equiv0$. Il dato
$y_0=\log2>0$ sta **sopra** la barriera; per unicità $y(t)>0$ per ogni $t$ nel dominio.

**Segno di $y'$.** Con $y>0$ si ha $1-e^{y}<0$, quindi $y'(t)=4t^3\cdot(\text{negativo})$ ha il segno di
$-t^3$: $y'>0$ per $t<0$, $y'<0$ per $t>0$, $y'(0)=0$. Dunque $y$ **cresce** su $(-\infty,0)$ e **decresce**
su $(0,+\infty)$: massimo assoluto in $t=0$, valore $y(0)=\log2$.

**Risoluzione (separazione).** $\dfrac{dy}{1-e^{y}}=4t^3\,dt$. A sinistra, con $u=e^{y}$ ($du=e^y dy$):
$$\int\frac{dy}{1-e^{y}}=\int\frac{du}{u(1-u)}=\log\Bigl|\frac{u}{1-u}\Bigr|+C=\log\frac{e^{y}}{e^{y}-1}+C$$
(essendo $e^y>1$). A destra $\int 4t^3dt=t^4$. Imponendo $y(0)=\log2$ (quindi $e^y=2$, $\frac{e^y}{e^y-1}=2$):
la costante si fissa e, isolando, si ottiene
$$\boxed{\,y(t)=-\log\!\Bigl(1-\tfrac12 e^{-t^4}\Bigr)\,}.$$
**Verifica di coerenza.** $y(0)=-\log(1-\tfrac12)=-\log\tfrac12=\log2$ ✓. Per $t\to\pm\infty$, $e^{-t^4}\to0$,
quindi $y\to-\log 1=0^+$: la soluzione **scende verso la barriera $y=0$** da sopra, mai la tocca (coerente con
l'unicità), ed è definita su tutto $\mathbb{R}$ (l'argomento del log è sempre in $(0,1]$, mai $\le0$). Il
massimo in $t=0$ vale $\log2$ come previsto qualitativamente. $\blacksquare$

Nota di metodo: il ritratto qualitativo (barriera, segno di $y'$, massimo in $0$, limiti $\to0$) era **già
completo prima** di calcolare l'integrale. La formula esplicita serve solo a confermarlo.

## Le varianti

Il tipo si muove lungo **due assi indipendenti**: *come si risolve* (tecnica esplicita) e *cosa si chiede*
(ritratto qualitativo). Un esame ne combina uno di ciascuno. Ecco le famiglie viste negli anni.

**Asse A — tecnica di risoluzione esplicita.**

- **Variabili separabili con soluzione esplicita** (la maggioranza: `20220124` Es.5 svolto, `04lug24` Es.5
  $y'=\frac{y(y-2)}{1+t}$, `27gen25` Es.3 $y'=\frac{t(y-1)}{1+3y^2}$, `21lug25` Es.2). *Riconosci:* $f(t,y)$ si
  fattorizza $g(y)\,h(t)$. *Cosa cambia:* dopo $\int\frac{dy}{g(y)}=\int h(t)\,dt$ si isola $y$ direttamente;
  l'unica insidia è il dominio massimale (dove il denominatore o l'argomento di log/radice degenera).
- **Separabili con soluzione *implicita*** (`22gen24` Es.5: $y'=\frac{y^2}{1+y^2}e^{t}$, $y(0)=2$). *Riconosci:*
  l'integrale a sinistra non si inverte in forma chiusa e resta un'identità come $y-\frac1y=e^{t}+\frac12$.
  *Cosa cambia:* per estrarre $y$ risolvi un'**equazione di 2° grado in $y$** e scegli il ramo compatibile col
  dato iniziale (qui $y>0$).
- **Bernoulli** $y'+p(t)y=q(t)y^\alpha$ (`20230705` Es.5 $z=y^{-2}$; `10feb22` Es.5 $6y'+y=e^{t}y^{-5}$ ⇒ $z=y^6$).
  *Riconosci:* potenza $y^\alpha$ con $\alpha\neq0,1$. *Cosa cambia:* la sostituzione $z=y^{1-\alpha}$ **lineare
  in $z$**; poi si torna a $y$ scegliendo il ramo. In `10feb22` la richiesta prosegue con lo **sviluppo di
  Taylor al 2° ordine** della soluzione: non basta risolvere, serve espandere.
- **Lineare del I ordine** $y'+p(t)y=q(t)$ (fattore integrante $e^{\int p}$). *Riconosci:* $y$ compare solo a
  potenza $1$. *Cosa cambia:* formula chiusa, nessuna scelta di ramo.

**Asse B — la domanda qualitativa (senza risolvere).**

- **Monotonia da barriere costanti** (schema base ovunque: `04lug24`, `27gen25`, `21lug25`). *Riconosci:*
  $f(t,\bar u)=0$ ha soluzioni costanti che intrappolano $y_0$. *Cosa cambia:* il segno di $f$ nella striscia
  fra due barriere è costante ⇒ monotonia gratis.
- **Segno di $y'$ che dipende da $t$** (`20220124` Es.5, `27giu25` Es.5). *Riconosci:* $f=A(t)\,B(y)$ con
  $A(t)$ che **cambia segno** (es. $4t^3$). *Cosa cambia:* la monotonia **non è globale** — massimo/minimo
  interno dove $A(t)=0$. È la trappola più insidiosa: le barriere fissano il segno di $B(y)$, non di $y'$.
- **Limite a $\pm\infty$ via teorema dell'asintoto** (`21lug25` Es.2). *Riconosci:* $y$ monotona e limitata da
  una barriera. *Cosa cambia:* l'esistenza del limite viene da monotonia+limitatezza; il **valore** dalla
  barriera più vicina ($f(t,\ell)\to0$). Non invertire i due passi.
- **Globalità / prolungabilità** — due strade. *Sublinearità* $|f|\le L_1(t)|y|+L_2(t)$ (`22gen24` Es.5-ii,
  `27gen25`): serve quando $y$ **cresce illimitata**. *Limitatezza a priori* fra barriere: basta quando $y$ è
  già intrappolata. *Cosa cambia:* se la soluzione non è limitata, le stime a priori non aiutano — devi avere la
  sublinearità.
- **Singolarità di $f$ sull'asse** (`27giu25` Es.5: $y'=\frac{(y^2+1)y}{t}$). *Riconosci:* $f\notin C^1$ sulla
  retta $t=t_0$ del dato. *Cosa cambia:* l'esistenza locale va **argomentata a parte** prima di separare
  (Cauchy–Lipschitz non è automatico lì).

**Asse C — l'oggetto non è una singola EDO ma una successione.**

- **Successione di problemi $\{y_n\}$** (`20230123` Es.5: $y_n'=x^3(y_n-3)\arctan y_n$, $y_n(0)=\frac1n$).
  *Riconosci:* il dato iniziale $\frac1n$ dipende dall'indice. *Cosa cambia:* le barriere $0,3$ danno
  $0<y_n<3$; poi $\sup_\mathbb{R}|y_n|=y_n(0)=\frac1n\to0$ ⇒ convergenza **uniforme** a $0$, e infine scambio
  limite-integrale. È il **ponte col saper-fare 05** (serie/successioni).

## Collaudo

1. $y'=\dfrac{y(y-2)}{1+t}$, $y(0)=1$, $t>-1$. Fra quali costanti resta $y$? È monotona? *(Risposta: barriere
   $0$ e $2$; $y(0)=1\in(0,2)$ ⇒ $0<y<2$ sempre; $y'<0$ nella striscia ⇒ decrescente.)*
2. $y'=4t^3(1-e^y)$, $y(0)=\log2$: dove sta il massimo e quanto vale? *(Risposta: $t=0$, valore $\log2$;
   errore da evitare: dire "sempre decrescente" ignorando il segno di $t^3$.)*
3. $y'=\ln(1+y^2)(3-y)$, $y(0)=2$: quanto vale $\lim_{t\to+\infty}y(t)$ e con quale argomento? *(Risposta:
   $3$; esistenza da monotonia+limitatezza, valore dal teorema dell'asintoto.)*

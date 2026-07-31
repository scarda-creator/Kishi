# Saper-fare 05 · Serie e successioni di funzioni

> **SOSTANZA DA VERIFICARE — generata autonomamente** (Demiurgo Accademico, 2026-07-13). Correttezza
> matematica da ratificare da Giuseppe. Pool mappa #7 · freq **6/11 e 7/10** · l'altra opzione dell'Es.2
> (con l'ottimizzazione, 04).

## La firma

Una **successione** $f_n(x)$ o una **serie** $\sum_k f_k(x)$ di funzioni, con la richiesta a catena:
"studiare convergenza puntuale, uniforme, totale; passare al limite sotto il segno di integrale (o di
derivata)". Spesso c'è un cambio di variabile che smaschera una **serie di potenze**. Parole-spia:
*converge puntualmente / uniformemente / totalmente, raggio di convergenza, scambio limite-integrale,
Weierstrass, Leibniz, Abel*.

Cosa NON confondere: qui l'oggetto è una *famiglia* di funzioni indicizzata da $n$; il gioco è **in quale
senso** converge, non calcolare un estremo (04).

## L'idea

Tre nozioni di convergenza, sempre più forti, e un teorema che le usa.

- **Puntuale:** per ogni $x$ fissato, $f_n(x)\to f(x)$ come successione numerica. È debole: non basta per
  scambiare limiti con integrali.
- **Uniforme** su $I$: $\sup_{x\in I}|f_n(x)-f(x)|\to0$. La velocità di convergenza non dipende da $x$. È
  quella che **autorizza lo scambio** $\lim\int=\int\lim$ e $\lim f_n'=(\lim f_n)'$.
- **Totale** (serie): $\sum_k\sup_{x\in I}|f_k(x)|<\infty$. Per il **criterio di Weierstrass** implica
  uniforme (e assoluta). È sufficiente, non necessaria.

Il ponte operativo: quasi mai c'è uniforme su tutto $\mathbb{R}$; la si ottiene su **compatti** $[a,b]$ o su
$[a,+\infty)$ con $a>0$. Per una serie di potenze $\sum c_k y^k$ il **raggio** $\rho$ (rapporto o radice) dà
uniforme su ogni $[-\rho+\delta,\rho-\delta]$ (Abel), e gli **estremi** $y=\pm\rho$ vanno studiati a mano
(Leibniz, confronto con l'armonica). Lo **scambio** $\lim\int=\int\lim$ vale se c'è uniforme sull'intervallo
di integrazione, oppure (termini $\ge0$) per convergenza monotona.

## La mossa

1. **Puntuale.** Fissa $x$, calcola $\lim_n f_n(x)$ (o studia la serie numerica $\sum_k f_k(x)$). Determina
   l'insieme di $x$ dove converge e la funzione limite $f$.
2. **Uniforme su $I$.** Stima $\sup_{x\in I}|f_n(x)-f(x)|$ (derivando $f_n-f$ o maggiorando) e controlla se
   $\to0$.
   > **Trappola** (`20240704`, `20240127`): la convergenza uniforme su tutto $\mathbb{R}$ è quasi sempre
   > **falsa**. Per negarla, esibisci un $x_n$ dipendente da $n$ dove il resto resta grande: es.
   > $f_n(n)\to\cos(1)/3\neq0$ in `27gen25`, oppure $x_n=\sqrt n$. La si recupera solo su compatti.
3. **Totale** (serie). Calcola $M_k=\sup_{x\in I}|f_k(x)|$ e controlla $\sum M_k<\infty$ (Weierstrass): se sì,
   uniforme. Se no, non concludere nulla di negativo — la totale è solo sufficiente.
4. **Serie di potenze mascherata.** Se compare $\log^k x$, $e^{-kx}$, ecc., **sostituisci** $y=\log x$,
   $y=e^{-x}$… per ridurti a $\sum c_k y^k$; trova $\rho$; studia gli estremi $y=\pm\rho$ separatamente; poi
   **torna alla $x$** per descrivere l'insieme di convergenza.
   > **Trappola** (`20220706`, `20230621`): dimenticare di ritradurre l'intervallo in $x$ dopo aver trovato
   > quello in $y$. E: gli **estremi del raggio** vanno sempre analizzati a parte (Leibniz da un lato,
   > confronto con $\sum1/k$ dall'altro).
5. **Scambio limite/integrale (o derivata).** Se c'è uniforme su $[a,b]$: $\lim_n\int_a^b f_n=\int_a^b f$.
   Alternativa per termini $\ge0$: convergenza monotona / confronto, che scambiano $\int\sum=\sum\int$.
   > **Trappola** (`20240704`): puoi scambiare su $[0,\tfrac12]$ anche se non c'è uniforme su tutto $[0,1]$ —
   > basta l'uniforme sul compatto d'integrazione, non su tutto il dominio.
   > **Trappola** (Leibniz): applicalo solo dopo aver verificato le **tre** condizioni $a_k>0$, $a_k$
   > decrescente, $a_k\to0$.

## Un esame, per intero

**Prova 24/01/2022, Es. 2** (`20220124`). $f_n(x)=\dfrac{x}{1+2^{-n}+x^2/n^2}$. Studiare convergenza
puntuale su $\mathbb{R}$, uniforme su $\mathbb{R}$ e su $[1,2]$, e calcolare $\lim_n\int_1^2 f_n$.

**Puntuale.** Per $x$ fissato, $2^{-n}\to0$ e $x^2/n^2\to0$, quindi
$$f_n(x)\to\frac{x}{1+0+0}=x=:f(x)\qquad\text{per ogni }x\in\mathbb{R}.$$

**Uniforme su $\mathbb{R}$?** No. Stimo il resto:
$$f_n(x)-x=\frac{x-x(1+2^{-n}+x^2/n^2)}{1+2^{-n}+x^2/n^2}=\frac{-x\bigl(2^{-n}+x^2/n^2\bigr)}{1+2^{-n}+x^2/n^2}.$$
Il termine $x\cdot x^2/n^2=x^3/n^2$ al numeratore cresce con $x$: prendendo $x_n=n$ si ottiene un resto che non
tende a $0$. Dunque $\sup_{\mathbb{R}}|f_n-f|\not\to0$: **non uniforme** su tutto $\mathbb{R}$.

**Uniforme su $[1,2]$?** Sì. Su un compatto $|x|\le2$ e $1+2^{-n}+x^2/n^2\ge1$, quindi
$$|f_n(x)-x|=\frac{|x|\bigl(2^{-n}+x^2/n^2\bigr)}{1+2^{-n}+x^2/n^2}\le 2\Bigl(2^{-n}+\frac{4}{n^2}\Bigr)\xrightarrow{n\to\infty}0,$$
stima **indipendente da $x\in[1,2]$**: convergenza uniforme su $[1,2]$.

**Scambio.** Per l'uniforme su $[1,2]$:
$$\lim_{n\to\infty}\int_1^2 f_n(x)\,dx=\int_1^2 \lim_n f_n(x)\,dx=\int_1^2 x\,dx=\Bigl[\tfrac{x^2}{2}\Bigr]_1^2=\frac{4-1}{2}=\frac32.$$
$\blacksquare$

Nota: l'uniforme cade su $\mathbb{R}$ per colpa del termine $x^3/n^2$ (grande per $x$ grande), ma resiste su
$[1,2]$ perché lì $x$ è limitato — è il pattern ricorrente "uniforme sui compatti, non su tutto $\mathbb{R}$".

## Le varianti

Prima divisione: **successione** $f_n$ oppure **serie** $\sum f_k$. Poi il trucco che apre l'esercizio
(sostituzione che smaschera una serie di potenze, positività per lo scambio, derivazione termine a termine).

**Successioni $f_n\to f$.**

- **Con parametro $a$** (`20220907` Es.1): $n^a\sin(x^2/n)$; limite $0$ se $a<1$, $x^2$ se $a=1$, $+\infty$ se
  $a>1$; scambio (caso $a=1$) $n\int_0^2\sin(x^2/n)\to\int_0^2 x^2=\frac83$. *Cosa cambia:* il parametro sposta
  la **funzione limite** stessa, non solo la velocità di convergenza.
- **Senza parametro, scambio su compatto** (`20220124` Es.2 svolto; `04lug24` Es.4: $x^n(1-x^n)$ su
  $[0,+\infty)$; `27gen25` Es.4: $\cos(x/n)\frac{nx+3}{n^2+2x^2}$). *Riconosci:* si chiede
  $\lim\int$ su un intervallo. *Cosa cambia:* l'uniforme cade su tutto $\mathbb{R}$ (test $x_n=n$, $f_n(n)\to\cos1/3\neq0$
  in `27gen25`; oppure $x_n=\sqrt n$) ma tiene sul compatto d'integrazione: **basta l'uniforme lì**, non ovunque.

**Serie di potenze mascherate (sostituzione $y=\phi(x)$).**

- **Log al numeratore** (`20220124`/`22gen24` Es.2): $\sum\frac{\log^k x}{3^{k+1}(k+e^{-k})}$; con $y=\frac{\log x}{3}$,
  raggio $\rho=1$; in $y=1$ diverge (armonica), in $y=-1$ converge (Leibniz); insieme in $x$: $[e^{-3},e^3)$.
- **Esponenziale $e^{-kx}$** (`20230621` Es.2): $\sum\frac{1+k}{k^2}e^{-kx}$; con $y=e^{-x}>0$, raggio $1$;
  converge per $x>0$, totale su $[a,+\infty)$ per ogni $a>0$; l'estremo $y=1$ (cioè $x=0$) diverge.
  *Riconosci:* $\log^k x$, $e^{-kx}$, potenze $k$-esime di una stessa espressione. *Cosa cambia:* trovi $\rho$ in
  $y$, **studi gli estremi $y=\pm\rho$ a mano**, poi **ritraduci** l'intervallo in $x$ (l'errore è fermarsi a $y$).

**Serie alternante con Leibniz + Weierstrass $M_n$** (`14feb25` Es.4): $\sum\frac{(-1)^n[\arctan(x^2)]^n}{\sqrt{n+3}}$.
*Riconosci:* segno $(-1)^n$ e termine positivo decrescente. *Cosa cambia:* Leibniz per la puntuale (verificando
le **tre** condizioni), Weierstrass $M_n$ per l'uniforme; le due convergenze si giustificano con criteri diversi.

**Scambio $\int\sum$ per positività / convergenza monotona** (`22gen24` Es.2-ii): con $f_k\ge0$ su $[1,10]$,
$\int_1^{10}\sum f_k=\sum\int_1^{10}f_k$ **senza** passare per l'uniforme. *Cosa cambia:* la giustificazione non
è Abel/Weierstrass ma il TCM — utile quando l'uniforme è dura da provare ma i termini sono non negativi.

**Derivazione termine a termine** (`19giu24` Es.4): $S(x)=\sum\frac{\log^n x}{n^2+1}$, si chiede $S'(1)$.
*Riconosci:* si deriva la somma. *Cosa cambia:* prima verifichi l'**uniforme della serie derivata** in un
intorno di $x=1$, poi $S'(1)=\sum\frac{d}{dx}(\cdot)|_{x=1}$.

## Collaudo

1. $f_n(x)=\dfrac{x}{1+2^{-n}+x^2/n^2}$: converge uniformemente su $\mathbb{R}$? E su $[1,2]$? *(Risposta: no
   su $\mathbb{R}$ (termine $x^3/n^2$); sì su $[1,2]$; $\lim\int_1^2 f_n=3/2$.)*
2. $\sum_{k\ge1}\frac{1+k}{k^2}e^{-kx}$: per quali $x$ converge, e dove totalmente? *(Risposta: puntuale e
   assoluta per $x>0$; totale su $[a,+\infty)$ per ogni $a>0$; l'estremo $y=1$ (cioè $x=0$) diverge.)*
3. $f_n=\cos(x/n)\frac{nx+3}{n^2+2x^2}$: converge uniformemente su $\mathbb{R}$? *(Risposta: no —
   $f_n(n)\to\cos(1)/3\neq0$; sì su ogni compatto $[0,2]$.)*

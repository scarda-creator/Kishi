/*META
{ "nn":"15",
  "file":"15-distribuzioni.html",
  "titolo":"Nucleo 15 — Distribuzioni, delta di Dirac, Fourier rigorosa e funzioni di Green",
  "nome":"Distribuzioni, delta e funzioni di Green",
  "banner":"PERCORSO-MATEMATICA · Movimento IV · Nucleo <b>15 — Distribuzioni, delta di Dirac, trasformata di Fourier, funzioni di Green</b> · Metodi Matematici della Fisica" }
META*/

/* ---------------- 00 · PERCHÉ QUESTO NUCLEO ---------------- */
{ num:'00', title:'Perché questo nucleo', meta:'Metodi · metà dell’esame è funzionale, e il suo esercizio-cardine è la Green — col trabocchetto della $\\delta^{\\prime}$',
  blocchi:[
  {t:'prosa', title:'Il cambio di prospettiva', tag:'first principles', html:R`
  <p>Il nucleo 10 ha lasciato una crepa: in $L^2$ il <b>valore in un punto</b> non ha senso. Eppure la fisica parla continuamente di sorgenti puntiformi — una carica in un punto, un urto istantaneo, una densità concentrata. La conciliazione è cambiare l&rsquo;oggetto: non funzioni che hanno valori, ma <b>funzionali</b> che hanno <i>effetti</i> su funzioni di prova.</p>
  <p>La $\delta$ di Dirac non è una funzione &laquo;infinita in $0$ e nulla altrove&raquo; — nessuna funzione così ha integrale $1$ (per Lebesgue, un valore su un insieme di misura nulla non contribuisce). È la <b>regola</b>
  $$\langle\delta,\varphi\rangle=\varphi(0):$$
  &laquo;dammi una funzione di prova, ti restituisco il suo valore nell&rsquo;origine&raquo;. Definita così è un oggetto perfettamente rigoroso, e si può <b>derivare infinite volte</b> — cosa che sblocca l&rsquo;intero apparato: si deriva ciò che non è derivabile, si trasforma secondo Fourier ciò che non è integrabile, e si risolvono equazioni differenziali con sorgenti singolari.</p>`},
  {t:'prosa', title:'Cosa saprai fare, uscendo di qui', tag:'performance attesa', html:R`
  <ul>
  <li>Maneggiare $\delta$, $\delta^{\prime}$, $H$ (Heaviside) come <b>distribuzioni</b>: derivate, cambi di scala, composizione con funzioni.</li>
  <li>Calcolare <b>trasformate di Fourier</b> con le proprietà (derivata $\leftrightarrow$ moltiplicazione, convoluzione $\leftrightarrow$ prodotto, traslazione $\leftrightarrow$ fase) e conoscere Plancherel.</li>
  <li>Costruire la <b>funzione di Green</b> di un problema ai limiti per EDO, imponendo le <b>condizioni di giunzione</b> corrette — <b>compreso il caso con $\delta^{\prime}$, dove a saltare è la funzione e non la derivata</b>. È il trabocchetto numero uno dell&rsquo;esame.</li>
  <li>Risolvere calore/onde/Laplace su domini semplici per <b>separazione di variabili</b> e Fourier.</li>
  </ul>`}
]},

/* ---------------- 01 · DISTRIBUZIONI ---------------- */
{ num:'01', title:'Distribuzioni: funzionali, non funzioni', meta:'funzioni di prova · $\\delta$ e $H$ · la derivata distribuzionale scarica sulla test',
  blocchi:[
  {t:'prosa', title:'Definizione e i due esempi che bastano', tag:'grammatica', html:R`
  <p>Si fissa uno spazio di <b>funzioni di prova</b>: $\mathcal{D}$ = funzioni $C^\infty$ a supporto compatto, oppure $\mathcal{S}$ = funzioni $C^\infty$ a decrescita rapida (Schwartz). Una <b>distribuzione</b> è un funzionale lineare e continuo $T:\varphi\mapsto\langle T,\varphi\rangle$.</p>
  <ul>
  <li>Ogni funzione localmente integrabile $f$ <b>è</b> una distribuzione: $\langle T_f,\varphi\rangle=\int f\varphi$. Le distribuzioni <b>estendono</b> le funzioni, non le sostituiscono.</li>
  <li>La <b>delta</b>: $\langle\delta_a,\varphi\rangle=\varphi(a)$. Non proviene da nessuna funzione: è genuinamente nuova (si dice <b>singolare</b>).</li>
  </ul>
  <p><b>La derivata, e il trucco che la rende possibile.</b> Per $f$ liscia, integrando per parti con $\varphi$ a supporto compatto (i termini di bordo muoiono): $\int f'\varphi=-\int f\varphi'$. Si <b>promuove questa identità a definizione</b>:
  $$\langle T',\varphi\rangle:=-\langle T,\varphi'\rangle.$$
  La derivata viene <b>scaricata sulla funzione di prova</b>, che è $C^\infty$ e la sopporta sempre. Conseguenza: <b>ogni distribuzione è derivabile infinite volte</b>, e con essa ogni funzione localmente integrabile — anche quelle con salti e angoli.</p>`},
  {t:'reveal', title:'Le identità da avere in mano', tag:'derivazione', steps:[
   {label:'$H^{\\prime}=\\delta$', body:R`<p>Con $H$ la Heaviside ($0$ per $x\lt0$, $1$ per $x\gt0$):
   $$\langle H',\varphi\rangle=-\langle H,\varphi'\rangle=-\int_0^{\infty}\varphi'(x)dx=-\big[\varphi\big]_0^{\infty}=\varphi(0)=\langle\delta,\varphi\rangle.$$
   Il salto di ampiezza $1$ ha prodotto una $\delta$ di peso $1$. <b>Regola generale:</b> derivando una funzione regolare a tratti si ottiene la derivata ordinaria <b>più</b> una $\delta$ in ogni salto, di peso pari all&rsquo;ampiezza del salto.</p>`},
   {label:'$\\delta^{\\prime}$ e le sue proprietà', body:R`<p>$\langle\delta',\varphi\rangle=-\langle\delta,\varphi'\rangle=-\varphi'(0)$. Da tenere:</p>
   <ul>
   <li>$x\,\delta(x)=0$ e $x\,\delta'(x)=-\delta(x)$ (si verificano su una $\varphi$ generica).</li>
   <li><b>Riscalamento:</b> $\delta(ax)=\dfrac{1}{|a|}\delta(x)$.</li>
   <li><b>Composizione:</b> $\delta\big(g(x)\big)=\displaystyle\sum_{k}\frac{\delta(x-x_k)}{|g'(x_k)|}$, somma sugli <b>zeri semplici</b> $x_k$ di $g$. Esempio d&rsquo;uso continuo: $\delta(x^2-a^2)=\frac{1}{2|a|}\big[\delta(x-a)+\delta(x+a)\big]$.</li>
   </ul>`},
   {label:'La $\\delta$ come limite (e perché non è un limite di funzioni)', body:R`<p>Le gaussiane $g_\varepsilon(x)=\frac{1}{\varepsilon\sqrt\pi}e^{-x^2/\varepsilon^2}$ hanno integrale $1$ per ogni $\varepsilon$ e si stringono. Non convergono a nessuna <b>funzione</b> (puntualmente vanno a $0$ fuori dall&rsquo;origine e a $+\infty$ in $0$), ma convergono <b>come distribuzioni</b>: $\int g_\varepsilon\varphi\to\varphi(0)$. È la successione del nucleo 10 che &laquo;sfuggiva alla dominata&raquo;: vista come funzionale, il suo limite esiste ed è la $\delta$. <b>La convergenza debole è la nozione giusta</b>, e l&rsquo;oggetto limite vive in uno spazio più grande di quello di partenza.</p>`}
  ]},
  {t:'plot', title:'La $\\delta$ come limite di gaussiane che si stringono',
   intro:R`$g_\varepsilon(x)=\frac{1}{\varepsilon\sqrt\pi}e^{-x^2/\varepsilon^2}$ per $\varepsilon=1;\ 0{,}5;\ 0{,}25$: l&rsquo;area resta $1$, l&rsquo;altezza cresce come $1/\varepsilon$.`,
   plots:[
    {kind:'func2d', xr:[-2.2,2.2], yr:[-0.3,2.6], height:340,
     title:'approssimanti della delta: area 1, larghezza -> 0',
     curves:[
      {f:'exp(-x*x)/sqrt(PI)', col:'#5eead4', width:2, label:'eps=1'},
      {f:'exp(-x*x/0.25)/(0.5*sqrt(PI))', col:'#4c8dff', width:2, label:'eps=0.5'},
      {f:'exp(-x*x/0.0625)/(0.25*sqrt(PI))', col:'#b98cff', width:2.2, label:'eps=0.25'}
     ]}
   ],
   leggi:R`Nessuna di queste curve <i>è</i> la $\delta$, e la successione non converge a una funzione: fuori dall&rsquo;origine tende a $0$, nell&rsquo;origine diverge. Ciò che converge è l&rsquo;<b>effetto</b>: $\int g_\varepsilon\varphi\to\varphi(0)$ per ogni funzione di prova $\varphi$, perché la massa si concentra dove $\varphi$ vale $\varphi(0)$. <b>La $\delta$ è quel limite, e vive nello spazio dei funzionali.</b> Nota che la famiglia scelta è irrilevante: lorentziane, rettangoli, $\frac{\sin(x/\varepsilon)}{\pi x}$ danno tutte la stessa $\delta$ — e in fisica questo si traduce nel fatto che la forma dettagliata di una sorgente &laquo;puntiforme&raquo; o di un impulso &laquo;istantaneo&raquo; non conta, purché sia piccola rispetto alle scale del problema. <b>La $\delta$ è l&rsquo;idealizzazione resa esatta.</b>`}
]},

/* ---------------- 02 · FOURIER RIGOROSA ---------------- */
{ num:'02', title:'Trasformata di Fourier: proprietà e Plancherel', meta:'da $L^1$ a $L^2$ alle temperate · derivata ↔ moltiplicazione · convoluzione ↔ prodotto · indeterminazione',
  blocchi:[
  {t:'gram', title:'Convenzione e proprietà (il formulario)', rows:[
   [R`definizione`, R`$\hat f(k)=\displaystyle\int_{-\infty}^{+\infty}f(x)e^{-ikx}dx$, inversa $f(x)=\frac{1}{2\pi}\displaystyle\int\hat f(k)e^{ikx}dk$. <b>Dichiarare la convenzione</b>: i fattori $2\pi$ cambiano da testo a testo.`],
   [R`dominî`, R`su $L^1$: $\hat f$ continua e infinitesima (Riemann–Lebesgue). Su $L^2$: si estende per densità, ed è un&rsquo;<b>isometria</b> a meno di $2\pi$ (<b>Plancherel</b>): $\int|f|^2=\frac{1}{2\pi}\int|\hat f|^2$. Su $\mathcal{S}'$ (temperate): definita per dualità, $\langle\hat T,\varphi\rangle=\langle T,\hat\varphi\rangle$ — è così che si trasformano $\delta$, costanti, polinomi.`],
   [R`derivata`, R`$\widehat{f'}=ik\,\hat f$ e $\widehat{xf}=i\,\dfrac{d\hat f}{dk}$. <b>La derivazione diventa moltiplicazione</b>: è la ragione per cui Fourier risolve le equazioni differenziali lineari a coefficienti costanti.`],
   [R`convoluzione`, R`$\widehat{f*g}=\hat f\,\hat g$, con $(f*g)(x)=\int f(y)g(x-y)dy$. E viceversa: prodotto $\to$ convoluzione. <b>Cardine</b>: la risposta di un sistema lineare invariante per traslazioni è una convoluzione con la Green.`],
   [R`traslazione`, R`$\widehat{f(x-a)}=e^{-ika}\hat f(k)$: traslare è moltiplicare per una fase.`],
   [R`coppie notevoli`, R`$\hat\delta=1$; $\hat1=2\pi\delta$; $\widehat{e^{-ax^2}}=\sqrt{\pi/a}\,e^{-k^2/4a}$ (la gaussiana è autofunzione per $a=1/2$); $\widehat{H(x)e^{-\alpha x}}=\frac{1}{\alpha+ik}$.`]
  ]},
  {t:'plot', title:'Indeterminazione: stringere in $x$ è allargare in $k$',
   intro:R`Gaussiane $e^{-ax^2}$ e le loro trasformate $\sqrt{\pi/a}\,e^{-k^2/4a}$ per $a=0{,}5$ (larga) e $a=4$ (stretta). Le due colonne sono lo stesso oggetto in due basi.`,
   plots:[
    {kind:'func2d', xr:[-4,4], yr:[-0.2,1.15], height:300, w:430,
     title:'in x: stretta (a=4) contro larga (a=0.5)',
     curves:[{f:'exp(-0.5*x*x)', col:'#5eead4', width:2.2, label:'a=0.5 (larga)'},
             {f:'exp(-4*x*x)', col:'#b98cff', width:2.2, label:'a=4 (stretta)'}]},
    {kind:'func2d', xr:[-8,8], yr:[-0.5,2.7], height:300, w:430,
     title:'in k: le larghezze si scambiano',
     curves:[{f:'sqrt(PI/0.5)*exp(-x*x/2)', col:'#5eead4', width:2.2, label:'trasf. di a=0.5'},
             {f:'sqrt(PI/4)*exp(-x*x/16)', col:'#b98cff', width:2.2, label:'trasf. di a=4'}]}
   ],
   leggi:R`La gaussiana viola è <b>stretta in $x$</b> e la sua trasformata è <b>larga in $k$</b>; per la verde è l&rsquo;opposto. Quantitativamente: larghezza in $x$ $\sim1/\sqrt a$, larghezza in $k$ $\sim\sqrt a$, quindi il <b>prodotto è costante</b> — non si possono stringere entrambe. Questo non è un fatto quantistico: è una <b>proprietà della trasformata di Fourier</b>, vera per qualunque segnale. Diventa il <b>principio di indeterminazione</b> nel momento in cui si postula che $\psi$ e la sua trasformata descrivano posizione e impulso, con $p=\hbar k$: allora $\Delta x\,\Delta p\ge\hbar/2$, e la gaussiana è il caso di <b>uguaglianza</b> (stato di minima indeterminazione). Da tenere per il nucleo 16: la stessa struttura riappare come non-commutatività degli operatori $\hat x$ e $\hat p$.`},
  {t:'collaudo', title:'Controllo lampo', items:[
   {q:R`Perché $\hat1=2\pi\delta$, e in che senso, visto che la costante $1$ non sta in $L^1$ né in $L^2$?`,
    a:R`In senso <b>distribuzionale</b>: $1$ è una distribuzione <b>temperata</b>, e la sua trasformata si definisce per dualità. Il conto: $\langle\hat1,\varphi\rangle=\langle1,\hat\varphi\rangle=\int\hat\varphi(k)dk=2\pi\varphi(0)$ per la formula di inversione, quindi $\hat1=2\pi\delta$. <b>È il motivo per cui le distribuzioni servono</b>: senza, le onde piane $e^{ikx}$ — che non sono normalizzabili — resterebbero fuori dalla teoria, e con esse gli stati del continuo della meccanica quantistica.`}
  ]}
]},

/* ---------------- 03 · FUNZIONI DI GREEN ---------------- */
{ num:'03', title:'Funzioni di Green per EDO: e il trabocchetto della $\\delta^{\\prime}$', meta:'$\\mathcal{L}G=\\delta$ · condizioni di giunzione · con $\\delta^{\\prime}$ salta la FUNZIONE, non la derivata',
  blocchi:[
  {t:'prosa', title:'L&rsquo;idea: risolvere una volta per tutte le sorgenti', tag:'costruzione', html:R`
  <p>Data un&rsquo;equazione lineare $\mathcal{L}u=f$ con condizioni al bordo, la <b>funzione di Green</b> $G(x,\xi)$ è la soluzione con sorgente puntiforme:
  $$\mathcal{L}_x\,G(x,\xi)=\delta(x-\xi),\qquad G\ \text{soddisfa le stesse condizioni al bordo}.$$
  Per <b>linearità</b>, la soluzione con sorgente qualunque è allora una sovrapposizione:
  $$u(x)=\int G(x,\xi)\,f(\xi)\,d\xi.$$
  Si risolve <b>una volta</b> il problema con la sorgente elementare, e si ottengono tutte le altre per integrazione. In fisica: il potenziale di una carica puntiforme dà quello di ogni distribuzione di carica.</p>`},
  {t:'reveal', title:'Le condizioni di giunzione — la parte che si sbaglia', tag:'il cuore tecnico', steps:[
   {label:'Il caso $\\mathcal{L}=d^2/dx^2$ con sorgente $\\delta$', body:R`<p>Fuori da $\xi$, $G''=0$: si risolve l&rsquo;omogenea a sinistra e a destra, imponendo le condizioni al bordo. Le due metà si raccordano in $\xi$ con due condizioni, che si ottengono <b>integrando l&rsquo;equazione</b> attorno a $\xi$:
   <ul>
   <li>$G$ <b>continua</b>: $\ [G]_{\xi^-}^{\xi^+}=0$;</li>
   <li>la derivata <b>salta di 1</b>: $\ [G']_{\xi^-}^{\xi^+}=1$ (perché $\int_{\xi^-}^{\xi^+}G''=\int\delta=1$).</li>
   </ul>
   Funzione di controllo: $u=(x-\xi)H(x-\xi)$ (una rampa) ha $u'=H$, $u''=\delta$. Infatti è continua e la sua derivata salta di $1$. $\blacksquare$</p>`},
   {label:'Il caso con sorgente $\\delta^{\\prime}$ — TRABOCCHETTO', body:R`<div class="note warn">Se la sorgente è $\delta'(x-\xi)$ le condizioni si <b>scambiano di ruolo</b>:
   <ul>
   <li>$G$ <b>salta di 1</b>: $\ [G]=1$;</li>
   <li>la derivata è <b>continua</b>: $\ [G']=0$.</li>
   </ul>
   <b>Con $\delta^{\prime}$ è la funzione a saltare, non la derivata.</b> Chi applica meccanicamente «continua + salto della derivata» sbaglia l&rsquo;intero esercizio.</div>
   <p>Verifica con la funzione di controllo: $u=H(x-\xi)$ ha $u'=\delta$ e $u''=\delta'$. E infatti $H$ <b>salta di 1</b> mentre la sua derivata (nulla da entrambi i lati, a parte la $\delta$ concentrata) non ha salto. La regola generale: si integra $\mathcal{L}u=\delta^{(n)}$ attorno al punto tante volte quanto serve, e si legge cosa salta.</p>`},
   {label:'Attenzione al coefficiente principale', body:R`<p>Se l&rsquo;operatore è $\mathcal{L}=a(x)\frac{d^2}{dx^2}+\dots$ con $a(\xi)\ne1$, il salto della derivata è $\dfrac{1}{a(\xi)}$, non $1$: si integra $a(x)G''=\delta$ attorno a $\xi$ e si usa la continuità di $a$. In forma di <b>Sturm&ndash;Liouville</b> $\big(p(x)u'\big)'+q u=\delta$, il salto giusto è $\ [\,p\,G'\,]=1$, cioè $[G']=1/p(\xi)$. <b>Dimenticare $p$ è il secondo errore più comune</b> dopo quello della $\delta'$.</p>`}
  ]},
  {t:'esercizio', title:'Green di $-u^{\\prime\\prime}=f$ su $[0,1]$ con $u(0)=u(1)=0$',
   src:'esercizio-tipo — la costruzione da saper rifare a memoria',
   testo:R`Costruire la funzione di Green del problema $-u''(x)=f(x)$ su $[0,1]$ con condizioni di Dirichlet $u(0)=u(1)=0$, e usarla per risolvere il caso $f\equiv1$.`,
   steps:[
    {label:'Le due metà', body:R`<p>Per $x\ne\xi$ vale $G''=0$, quindi $G$ è <b>affine</b> in ciascun tratto. Imponendo le condizioni al bordo:
    $$G(x,\xi)=\begin{cases}A\,x,& x\lt\xi\\ B\,(1-x),& x\gt\xi\end{cases}$$
    (la prima si annulla in $0$, la seconda in $1$).</p>`},
    {label:'Le condizioni di giunzione', body:R`<p><b>Continuità:</b> $A\xi=B(1-\xi)$. <b>Salto della derivata:</b> l&rsquo;equazione è $-G''=\delta$, quindi $[G']=-1$: $\ -B-A=-1$, cioè $A+B=1$. Risolvendo: $A=1-\xi$, $B=\xi$, dunque
    $$G(x,\xi)=\begin{cases}x(1-\xi),& x\le\xi\\ \xi(1-x),& x\ge\xi\end{cases}=x_{\lt}\,(1-x_{\gt}),$$
    con $x_\lt=\min(x,\xi)$ e $x_\gt=\max(x,\xi)$. <b>Notare la simmetria $G(x,\xi)=G(\xi,x)$</b>: vale sempre per operatori autoaggiunti (nucleo 16) ed è un controllo gratuito del risultato.</p>`},
    {label:'Uso: la soluzione con $f\\equiv1$', body:R`<p>$$u(x)=\int_0^1G(x,\xi)d\xi=\int_0^x\xi(1-x)d\xi+\int_x^1x(1-\xi)d\xi=\frac{x^2}{2}(1-x)+x\frac{(1-x)^2}{2}=\frac{x(1-x)}{2}.$$
    Verifica: $-u''=1$ e $u(0)=u(1)=0$. $\blacksquare$ È la parabola che risolve il problema — la corda tesa sotto carico uniforme, o il potenziale fra due piastre a terra con densità di carica costante.</p>`}
   ],
   nota:R`Schema riusabile: <b>(1)</b> risolvi l&rsquo;omogenea nei due tratti imponendo ciascuna condizione al bordo; <b>(2)</b> imponi continuità; <b>(3)</b> imponi il salto giusto <i>letto dall&rsquo;equazione</i> (segno, coefficiente $p$, e — se la sorgente è $\delta^{\prime}$ — salto sulla funzione anziché sulla derivata); <b>(4)</b> controlla la simmetria.`},
  {t:'plot', title:'La Green del problema: un triangolo con la punta nella sorgente',
   intro:R`$G(x,\xi)$ per tre posizioni della sorgente: $\xi=0{,}25$, $0{,}5$, $0{,}75$.`,
   plots:[
    {kind:'func2d', xr:[0,1], yr:[-0.03,0.3], height:320,
     title:'G(x,xi): continua, con angolo (salto della derivata) in x=xi',
     curves:[
      {f:'min(x,0.25)*(1-max(x,0.25))', col:'#5eead4', width:2.2, label:'xi=0.25'},
      {f:'min(x,0.5)*(1-max(x,0.5))', col:'#4c8dff', width:2.2, label:'xi=0.5'},
      {f:'min(x,0.75)*(1-max(x,0.75))', col:'#b98cff', width:2.2, label:'xi=0.75'}
     ],
     marks:[{x:0.5, y:0.25, label:'punta in x=xi', col:'#d8a13a', up:true}]}
   ],
   leggi:R`Tre proprietà si leggono a colpo d&rsquo;occhio, e sono <b>tutte</b> le condizioni imposte. <b>(1)</b> Ogni curva si annulla agli estremi: sono le condizioni al bordo. <b>(2)</b> Ogni curva è <b>continua</b> ma ha un <b>angolo</b> in $x=\xi$: la funzione non salta, la sua derivata sì — esattamente $[G']=-1$, l&rsquo;effetto della sorgente puntiforme. <b>(3)</b> Fuori da $\xi$ i tratti sono <b>rettilinei</b>, perché lì $G''=0$: la sorgente agisce in un punto solo. Se la sorgente fosse $\delta^{\prime}$, il disegno cambierebbe in modo inconfondibile: la curva si <b>spezzerebbe</b> in $\xi$ con un salto verticale, e le due pendenze sarebbero uguali. <b>Se all&rsquo;esame disegni la tua Green e non vedi la caratteristica giusta, hai imposto la condizione sbagliata</b> — è il controllo più veloce che esista.`}
]},

/* ---------------- 04 · EDP PER SEPARAZIONE ---------------- */
{ num:'04', title:'EDP per separazione di variabili: il ponte con Fourier', meta:'calore e onde su un intervallo · i modi sono la base del nucleo 09 · il dato iniziale sono i suoi coefficienti',
  blocchi:[
  {t:'reveal', title:'Il metodo, sull’equazione del calore', tag:'derivazione', steps:[
   {label:'Separa', body:R`<p>Problema: $u_t=\alpha u_{xx}$ su $[0,L]$, con $u(0,t)=u(L,t)=0$ e dato iniziale $u(x,0)=u_0(x)$. Cerca soluzioni <b>fattorizzate</b> $u=X(x)T(t)$. Sostituendo e dividendo per $XT$:
   $$\frac{T'}{\alpha T}=\frac{X''}{X}=-\lambda,$$
   costante perché il primo membro dipende solo da $t$ e il secondo solo da $x$: se sono uguali, sono entrambi costanti. Una EDP è diventata <b>due EDO</b> (nucleo 06).</p>`},
   {label:'Risolvi le due EDO e usa il bordo', body:R`<p>$X''+\lambda X=0$ con $X(0)=X(L)=0$ ha soluzioni non banali <b>solo</b> per $\lambda_n=\left(\frac{n\pi}{L}\right)^2$, con $X_n=\sin\frac{n\pi x}{L}$. È un <b>problema agli autovalori</b> — il nucleo 16 lo generalizzerà (Sturm&ndash;Liouville). Poi $T_n'=-\alpha\lambda_nT_n$ dà $T_n=e^{-\alpha\lambda_nt}$.</p>`},
   {label:'Sovrapponi, e riconosci Fourier', body:R`<p>$$u(x,t)=\sum_{n\ge1}c_n\sin\frac{n\pi x}{L}\;e^{-\alpha(n\pi/L)^2t},\qquad c_n=\frac{2}{L}\int_0^{L}u_0(x)\sin\frac{n\pi x}{L}dx.$$
   I $c_n$ sono i <b>coefficienti di Fourier</b> del dato iniziale (nucleo 09): la base è quella dei modi, e il dato iniziale si scompone su di essa. $\blacksquare$</p>
   <div class="note">Da leggere: il modo $n$-esimo decade come $e^{-\alpha n^2\pi^2t/L^2}$, cioè <b>tanto più in fretta quanto più è oscillante</b>. Dopo un tempo breve sopravvive quasi solo $n=1$: il calore <b>liscia</b> i dettagli, e lo fa in modo irreversibile. Per l&rsquo;equazione delle <b>onde</b> lo stesso metodo dà $T_n''=-c^2\lambda_nT_n$, cioè $\cos,\sin$ invece di esponenziali decrescenti: i modi <b>oscillano</b> senza smorzarsi, e nulla si perde. <b>La stessa struttura, un&rsquo;equazione a coefficienti diversi, e due fisiche opposte: irreversibile contro reversibile.</b></div>`}
  ]},
  {t:'collaudo', title:'Controllo lampo', items:[
   {q:R`Perché la separazione delle variabili &laquo;funziona&raquo;, se la maggior parte delle soluzioni non è affatto fattorizzata?`,
    a:R`Perché le soluzioni fattorizzate formano una <b>base</b>: ogni soluzione è una loro sovrapposizione (per la completezza del sistema trigonometrico, nucleo 09). Il metodo non trova tutte le soluzioni una per una — trova i mattoni giusti, e la linearità fa il resto. Ecco perché fallisce sulle equazioni <b>non lineari</b>: lì la sovrapposizione non è permessa, e conoscere i mattoni non basta.`},
   {q:R`Che relazione c&rsquo;è fra questo metodo e la funzione di Green?`,
    a:R`Sono due modi di sfruttare la stessa linearità. La <b>Green</b> decompone la <b>sorgente</b> in impulsi puntiformi; la <b>separazione</b> decompone il <b>dato</b> in modi propri dell&rsquo;operatore. Nel nucleo 16 si uniscono: la Green si <b>scrive nella base degli autovettori</b>, $G=\sum_n\frac{\phi_n(x)\phi_n(\xi)}{\lambda_n}$ — la sovrapposizione di impulsi e quella di modi diventano la stessa formula.`}
  ]}
]},

/* ---------------- 05 · ESERCIZI ---------------- */
{ num:'05', title:'Esercizi — tocca a te', meta:'Green con $\\delta^{\\prime}$ · trasformata con chiusura di contorno · derivata distribuzionale',
  blocchi:[
  {t:'esercizio', title:'Green con sorgente $\\delta^{\\prime}$: $-u^{\\prime\\prime}=\\delta^{\\prime}(x-\\xi)$ su $[0,1]$',
   src:'IL trabocchetto n.1 dell’esame',
   testo:R`Risolvere $-u''(x)=\delta'(x-\xi)$ su $[0,1]$ con $u(0)=u(1)=0$, imponendo le condizioni di giunzione corrette.`,
   steps:[
    {label:'Struttura e condizioni', body:R`<p>Fuori da $\xi$: $u''=0$, quindi $u=Ax$ per $x\lt\xi$ e $u=B(1-x)$ per $x\gt\xi$ (già compatibili col bordo). Le giunzioni, per una sorgente $\delta^{\prime}$, sono: <b>salto della funzione</b> e <b>continuità della derivata</b>.</p>`},
    {label:'Imponi', body:R`<p>Integrando $-u''=\delta'$ una volta: $-u'=\delta+\text{cost}$, quindi $u$ <b>salta</b>; integrando due volte, $[u']=-\int\delta'=0$.
    <ul>
    <li>$[u]=u(\xi^+)-u(\xi^-)=B(1-\xi)-A\xi=-1$ (il segno viene da $-u''=\delta'$: si ricava confrontando con la soluzione di controllo $u=-H(x-\xi)$);</li>
    <li>$[u']=-B-A=0$, cioè $B=-A$.</li>
    </ul>
    Sostituendo: $-A(1-\xi)-A\xi=-1$, cioè $-A=-1$, $A=1$ e $B=-1$:
    $$u(x)=\begin{cases}x,& x\lt\xi\\ -(1-x),& x\gt\xi\end{cases}$$</p>`},
    {label:'Controlla il disegno', body:R`<p>Le due rette hanno la <b>stessa pendenza</b> ($1$ da entrambe le parti: derivata continua ✓) e la funzione <b>salta</b> di $-1$ attraversando $\xi$ ✓. Ai bordi: $u(0)=0$ ✓, $u(1)=0$ ✓. $\blacksquare$
    <p>Confronta col disegno della tappa 03 (sorgente $\delta$): lì angolo senza salto, qui salto senza angolo. <b>Sono le due firme grafiche da riconoscere a colpo d&rsquo;occhio.</b></p>`}
   ],
   nota:R`Se all&rsquo;esame ti trovi a imporre «continuità + salto della derivata» su una sorgente $\delta^{\prime}$, fermati: stai risolvendo l&rsquo;esercizio dell&rsquo;anno scorso. La regola sicura è <b>integrare l&rsquo;equazione attorno al punto</b> e leggere cosa salta, invece di ricordare a memoria.`},
  {t:'esercizio', title:'Derivata distribuzionale di una funzione a tratti',
   src:'esercizio guidato',
   testo:R`Calcolare, in senso distribuzionale, la derivata prima e seconda di $f(x)=|x|$ e di $g(x)=e^{-|x|}$.`,
   steps:[
    {label:'$|x|$', body:R`<p>$f'=\mathrm{sgn}(x)$ (derivata ordinaria, nessun salto in $f$: è continua). Poi $\mathrm{sgn}=2H-1$, quindi $f''=2\delta$. <b>L&rsquo;angolo produce una $\delta$ nella derivata seconda</b>, con peso pari al salto della pendenza ($+1-(-1)=2$).</p>`},
    {label:'$e^{-|x|}$', body:R`<p>$g'=-\mathrm{sgn}(x)e^{-|x|}$ (continua a tratti, con salto $-1-(+1)=-2$ in $0$). Quindi
    $$g''=e^{-|x|}-2\delta(x),$$
    dove il primo pezzo è la derivata ordinaria e il secondo viene dal salto. Riscritto: $\ -g''+g=2\delta$. $\blacksquare$</p>
    <div class="note">Quindi $\frac12e^{-|x|}$ è la <b>funzione di Green</b> dell&rsquo;operatore $-\frac{d^2}{dx^2}+1$ su tutta la retta. In fisica è il <b>potenziale di Yukawa</b> in una dimensione: il termine di massa nell&rsquo;operatore diventa il decadimento esponenziale della risposta. È lo stesso conto che, in tre dimensioni, dà $\frac{e^{-mr}}{4\pi r}$.</div>`}
   ]},
  {t:'collaudo', title:'Diagnostica rapida', items:[
   {q:R`$\int_{-\infty}^{+\infty}\delta(x^2-4)\,x^2\,dx$?`,
    a:R`$\delta(x^2-4)=\frac{1}{|2x|}\big[\delta(x-2)+\delta(x+2)\big]=\frac14\big[\delta(x-2)+\delta(x+2)\big]$. Quindi l&rsquo;integrale vale $\frac14(4+4)=2$. <b>Errore tipico:</b> dimenticare il fattore $1/|g'(x_k)|$ e rispondere $8$.`},
   {q:R`Perché la soluzione dell&rsquo;equazione del calore è liscia anche partendo da un dato iniziale discontinuo, mentre quella delle onde no?`,
    a:R`Perché il calore smorza il modo $n$ come $e^{-\alpha n^2t}$: per $t\gt0$ le alte frequenze — quelle che costruiscono le discontinuità — sono <b>schiacciate</b>, e la somma diventa $C^\infty$ (regolarizzazione istantanea). Le onde invece moltiplicano i modi per $\cos,\sin$: <b>i moduli restano invariati</b>, quindi le irregolarità non si perdono, viaggiano. È lo stesso fatto visto nel nucleo 09 (decadimento dei coefficienti = regolarità), qui in evoluzione temporale — e la ragione per cui il calore non si può integrare all&rsquo;indietro nel tempo.`}
  ]}
]},

/* ---------------- 06 · SENSO E ROTTE ---------------- */
{ num:'06', title:'Il senso e le rotte fisiche', meta:'l’oggetto giusto non è la funzione, è il funzionale',
  blocchi:[
  {t:'prosa', title:'Cosa hai davvero imparato', tag:'sintesi', html:R`
  <p><b>A monte.</b> Il nucleo 10 aveva tolto il valore puntuale; qui quel prezzo si rivela un guadagno: rinunciando alle funzioni si ottengono oggetti derivabili infinite volte e trasformabili sempre. Fourier del nucleo 09 (serie, dominio limitato) diventa trasformata (retta intera, spettro continuo); le EDO del nucleo 06 riappaiono come i pezzi separati di una EDP; i residui del nucleo 13 sono lo strumento con cui si antitrasforma.</p>
  <p><b>Il punto.</b> Tre idee che d&rsquo;ora in poi useranno tutti i corsi di fisica teorica: <b>(1)</b> la sorgente puntiforme come oggetto legittimo, <b>(2)</b> Fourier che trasforma la derivazione in moltiplicazione, <b>(3)</b> la risposta di un sistema lineare come <b>convoluzione con la sua Green</b>.</p>
  <p><b>A valle.</b> Il nucleo 16 riformula tutto in linguaggio di operatori (la Green diventa $\mathcal{L}^{-1}$, e si scrive nella base spettrale); il nucleo 17 applica il metodo alle tre EDP archetipe.</p>`},
  {t:'prolessi', title:'Dove riappare questo nucleo, nella fisica che farai',
   oggetto:R`<b>La distribuzione</b> ($\delta$, $\delta^{\prime}$), la <b>trasformata di Fourier</b> e la <b>funzione di Green</b> come risposta all&rsquo;impulso.`,
   rotte:[
    {dove:'Elettromagnetismo', txt:R`Una carica puntiforme è $\rho=q\delta^3(\mathbf r)$, e il potenziale coulombiano $\frac{1}{4\pi\varepsilon_0 r}$ è la <b>Green del laplaciano</b>: $-\Delta\frac{1}{4\pi r}=\delta^3$. Ogni distribuzione di carica si risolve per sovrapposizione — cioè per convoluzione con quella Green. Il dipolo, non a caso, è una $\delta^{\prime}$.`},
    {dove:'Meccanica<br>quantistica', txt:R`Gli stati del continuo si normalizzano con $\langle x|x'\rangle=\delta(x-x')$, le onde piane vivono nelle temperate, e $\hat x,\hat p$ sono coniugati <b>di Fourier</b>: l&rsquo;indeterminazione è la proprietà della trasformata vista nella tappa 02. Il <b>propagatore</b> è la Green dell&rsquo;equazione di Schrödinger.`},
    {dove:'Risposta lineare', txt:R`Un sistema lineare invariante nel tempo è completamente descritto dalla sua <b>risposta all&rsquo;impulso</b> $G(t)$: $u=G*f$. In frequenza diventa un prodotto, $\hat u=\hat G\hat f$, e $\hat G$ è la <b>suscettività</b> — la stessa funzione analitica del nucleo 12 (Kramers–Kronig). Tre nuclei, un solo oggetto.`},
    {dove:'Teoria<br>dei campi', txt:R`I <b>propagatori</b> sono le funzioni di Green dell&rsquo;operatore cinetico, le linee interne dei diagrammi di Feynman <b>sono</b> Green, e i vertici sono $\delta$ che impongono la conservazione dell&rsquo;impulso. Il formalismo perturbativo è, tecnicamente, un&rsquo;algebra di convoluzioni.`}
   ],
   domanda:R`L&rsquo;equazione del calore <b>liscia</b> e non si può invertire nel tempo; quella delle onde no. Eppure entrambe descrivono sistemi fatti di particelle la cui dinamica microscopica è <b>reversibile</b>. La freccia del tempo, in questo linguaggio, entra quando si passa dai gradi di libertà microscopici a una descrizione ridotta — e si manifesta come uno <b>smorzamento delle alte frequenze</b>. <b>Domanda che porti avanti:</b> l&rsquo;irreversibilità è una proprietà dell&rsquo;equazione effettiva o della <i>scelta</i> di quali modi osservare? La decoerenza dice: le informazioni non si distruggono, migrano in modi che non guardiamo — cioè nelle alte frequenze dell&rsquo;ambiente. Se è così, l&rsquo;equazione del calore non è un&rsquo;approssimazione sbagliata della meccanica: è la meccanica <b>proiettata</b> sui modi che un osservatore può risolvere. Il nucleo 16 ti darà il linguaggio dei proiettori per formularlo con precisione.`}
]}

/*META
{ "nn":"19",
  "file":"19-asintotica.html",
  "titolo":"Nucleo 14-bis — Espansioni asintotiche: Laplace, fase stazionaria, punto di sella",
  "nome":"Espansioni asintotiche",
  "banner":"PERCORSO-MATEMATICA · Movimento III · Nucleo <b>14-bis — Espansioni asintotiche: Laplace, fase stazionaria, punto di sella</b> · Metodi · nel programma ufficiale, mai negli scritti: materia da orale" }
META*/

/* ---------------- 00 · PERCHÉ QUESTO NUCLEO ---------------- */
{ num:'00', title:'Perché questo nucleo (e perché era rimasto fuori)', meta:'nel programma ufficiale di Metodi · in nessuno dei 18 scritti esaminati · ma è il cavallo da lavoro della meccanica statistica',
  blocchi:[
  {t:'prosa', title:'La situazione, detta com’è', tag:'onestà prima del contenuto', html:R`
  <p>Il programma ufficiale del canale 3 elenca quattro voci, e la quarta è: <i>«espansioni asintotiche: metodo di Laplace, fase stazionaria, punto di sella»</i>. Il conteggio sugli scritti reali dice però un&rsquo;altra cosa: <b>in nessuno dei 18 compiti esaminati (2023-2026) compare un esercizio di asintotica</b>. Per questo il percorso l&rsquo;aveva lasciata fuori: è calibrato su ciò che l&rsquo;esame chiede davvero.</p>
  <p>Resta un fatto: il programma è ciò che il docente <b>può</b> chiedere all&rsquo;<b>orale</b>, e lì la statistica sugli scritti non protegge. Questo nucleo copre quel rischio con la profondità giusta — non un capitolo di manuale, i tre metodi e il perché funzionano.</p>
  <p>E c&rsquo;è una seconda ragione, che per te pesa più della prima. Queste tecniche sono il <b>cavallo da lavoro</b> della meccanica statistica e degli integrali di cammino: il limite termodinamico, l&rsquo;approssimazione di sella della funzione di partizione, la WKB e la formula di Stirling sono tutte questo nucleo. È materia di tesi travestita da tecnica di calcolo.</p>`},
  {t:'prosa', title:'L’idea unica sotto i tre metodi', tag:'first principles', html:R`
  <p>Tutti e tre rispondono alla stessa domanda: <b>quanto vale $I(N)=\displaystyle\int g(x)\,e^{N\,h(x)}dx$ quando $N$ è grande?</b> E tutti e tre danno la stessa risposta strutturale: <b>l&rsquo;integrale è dominato da un punto solo</b>, e attorno a quel punto basta sviluppare al secondo ordine.</p>
  <ul>
  <li>Se $h$ è <b>reale</b>, l&rsquo;esponenziale è enorme dove $h$ è massima e trascurabile altrove: domina il <b>massimo</b> → <b>metodo di Laplace</b>.</li>
  <li>Se $h$ è <b>immaginaria</b> ($e^{iN\varphi}$), il modulo è $1$ ovunque ma la fase gira così in fretta che i contributi si <b>cancellano</b> — tranne dove la fase è ferma: domina il punto <b>stazionario</b> → <b>fase stazionaria</b>.</li>
  <li>Se $h$ è <b>complessa</b>, si <b>deforma il cammino</b> (nucleo 12!) fino a farlo passare per un punto di <b>sella</b> nella direzione in cui la parte reale scende più ripida: lì il problema torna a essere di Laplace → <b>punto di sella</b>.</li>
  </ul>
  <p>Il terzo <b>contiene</b> i primi due: è il motivo per cui questo nucleo sta nel Movimento III e non altrove — senza la libertà di deformare i contorni del teorema di Cauchy, il metodo di sella non esiste.</p>`}
]},

/* ---------------- 01 · SERIE ASINTOTICHE ---------------- */
{ num:'01', title:'Cosa vuol dire «asintotico»', meta:'$f\\sim g$ · le serie asintotiche divergono e restano utili · il troncamento ottimo',
  blocchi:[
  {t:'prosa', title:'La definizione, e la sorpresa che contiene', tag:'grammatica', html:R`
  <p>$f(x)\sim g(x)$ per $x\to x_0$ significa $\lim f/g=1$. Una <b>serie asintotica</b> $f(x)\sim\sum_{n} a_nx^n$ per $x\to0$ significa qualcosa di più debole di una serie convergente:
  $$f(x)-\sum_{n=0}^{N}a_nx^n=o(x^N)\qquad\text{per ogni }N\ \text{fissato, quando }x\to0.$$
  <b>Attenzione all&rsquo;ordine dei limiti.</b> In una serie <b>convergente</b> si fissa $x$ e si manda $N\to\infty$. In una serie <b>asintotica</b> si fissa $N$ e si manda $x\to0$. Sono richieste diverse, e la seconda <b>non</b> implica la prima: una serie asintotica può <b>divergere per ogni $x\ne0$</b> ed essere ugualmente utilissima.</p>
  <div class="note">Esempio classico: $\displaystyle\int_0^\infty\frac{e^{-t}}{1+xt}dt\sim\sum_n(-1)^nn!\,x^n$. I coefficienti $n!$ esplodono, il raggio di convergenza è <b>zero</b> — eppure i primi termini danno il valore con precisione eccellente per $x$ piccolo. Il nucleo 07 chiedeva «serie convergente o solo asintotica?» e il nucleo 12 spiegava il raggio con le singolarità: qui si vede il caso limite in cui il raggio è nullo e la serie serve lo stesso.</div>`},
  {t:'prosa', title:'Il troncamento ottimo — la regola pratica', tag:'saper fare', html:R`
  <p>Se la serie diverge, aggiungere termini prima <b>migliora</b> e poi <b>peggiora</b>. Il punto di svolta è dove il termine è <b>più piccolo</b>: si tronca lì, e l&rsquo;errore è dell&rsquo;ordine del primo termine trascurato. Per una serie con $a_n\sim n!\,x^n$ il minimo è attorno a $n\approx1/x$, e l&rsquo;errore migliore ottenibile va come $e^{-1/x}$.</p>
  <p>Quel $e^{-1/x}$ è significativo: è una quantità <b>invisibile a ogni ordine</b> della serie (tutte le sue derivate in $0$ sono nulle, nucleo 12). Le serie asintotiche non vedono i contributi <b>non perturbativi</b> — istantoni, effetto tunnel, ampiezze $e^{-S/\hbar}$. <b>Il limite della serie perturbativa non è un difetto di calcolo: è fisica che vive fuori dalla perturbazione.</b></p>`}
]},

/* ---------------- 02 · LAPLACE ---------------- */
{ num:'02', title:'Il metodo di Laplace', meta:'$\\int g\\,e^{-N f}$ · domina il minimo di $f$ · la gaussiana attorno al punto · Stirling',
  blocchi:[
  {t:'reveal', title:'La formula, in tre mosse', tag:'derivazione', steps:[
   {label:'Dove si concentra', body:R`<p>Sia $I(N)=\displaystyle\int_a^b g(x)e^{-Nf(x)}dx$ con $f$ che ha un <b>minimo interno</b> non degenere in $x_0$ ($f'(x_0)=0$, $f''(x_0)\gt0$). Per $N$ grande il rapporto fra il valore in $x_0$ e quello in un altro punto è $e^{-N[f(x)-f(x_0)]}$: <b>esponenzialmente piccolo</b>. Tutto il contributo viene da un intorno di $x_0$ che si stringe come $1/\sqrt N$.</p>`},
   {label:'Sviluppa e integra la gaussiana', body:R`<p>Vicino a $x_0$: $f(x)\approx f(x_0)+\tfrac12f''(x_0)(x-x_0)^2$ e $g(x)\approx g(x_0)$. Quindi
   $$I(N)\approx g(x_0)e^{-Nf(x_0)}\int_{-\infty}^{+\infty}e^{-\frac{N f''(x_0)}{2}u^2}du
   = g(x_0)\,e^{-Nf(x_0)}\sqrt{\frac{2\pi}{N f''(x_0)}}.$$
   Gli estremi si sono potuti mandare all&rsquo;infinito perché l&rsquo;integranda è già trascurabile lì (l&rsquo;errore commesso è esponenzialmente piccolo). <b>L&rsquo;integrale gaussiano usato è quello calcolato nel nucleo 02-bis in coordinate polari.</b> $\blacksquare$</p>`},
   {label:'Le varianti che servono', body:R`<ul>
   <li><b>Massimo al bordo</b> ($f$ monotona): il contributo è metà gaussiana o, se $f'(a)\ne0$, si integra per parti e si ottiene $\dfrac{g(a)e^{-Nf(a)}}{Nf'(a)}$ — ordine $1/N$ invece di $1/\sqrt N$.</li>
   <li><b>Minimo degenere</b> ($f''(x_0)=0$, $f^{(4)}\gt0$): l&rsquo;ampiezza va come $N^{-1/4}$. La potenza di $N$ <b>legge l&rsquo;ordine di degenerazione</b> — è lo stesso meccanismo degli esponenti critici.</li>
   </ul>`}
  ]},
  {t:'plot', title:'La concentrazione: perché al crescere di $N$ conta solo il massimo',
   intro:R`$e^{-N f(x)}$ normalizzata al suo massimo, con $f(x)=x^2/2+x^4/10$, per $N=1,\ 5,\ 25$.`,
   plots:[
    {kind:'func2d', xr:[-2.6,2.6], yr:[-0.15,1.15], height:340,
     title:'piu N cresce, piu l\'integrale e deciso da un solo punto',
     curves:[
      {f:'exp(-1*(x*x/2+pow(x,4)/10))', col:'#5eead4', width:2, label:'N=1'},
      {f:'exp(-5*(x*x/2+pow(x,4)/10))', col:'#4c8dff', width:2, label:'N=5'},
      {f:'exp(-25*(x*x/2+pow(x,4)/10))', col:'#b98cff', width:2.2, label:'N=25'}
     ],
     marks:[{x:0,y:1,label:'il minimo di f',col:'#d8a13a',up:true}]}
   ],
   leggi:R`La stessa funzione $f$, tre valori di $N$: la campana si <b>stringe come $1/\sqrt N$</b> e tutto ciò che non sta nel picco smette di contare. Tre conseguenze da leggere qui. <b>(1)</b> Serve solo $f$ <b>vicino al minimo</b>: il resto della funzione è irrilevante, ed è per questo che basta lo sviluppo al secondo ordine. <b>(2)</b> La larghezza $\propto N^{-1/2}$ moltiplicata per l&rsquo;altezza $e^{-Nf(x_0)}$ dà il prefattore $\sqrt{2\pi/(Nf'')}$: la formula è area = base × altezza, fatta bene. <b>(3)</b> Il termine di quarto grado in $f$ deforma visibilmente la campana a $N=1$ e diventa invisibile a $N=25$ — è il motivo per cui l&rsquo;approssimazione <b>migliora</b> al crescere di $N$, al contrario di quasi tutte le altre. <b>In meccanica statistica $N$ è il numero di particelle:</b> ecco perché il limite termodinamico rende esatta l&rsquo;approssimazione di sella, e perché le fluttuazioni relative vanno come $1/\sqrt N$.`},
  {t:'esercizio', title:'La formula di Stirling da $\\Gamma$',
   src:'l’applicazione classica — e il ponte col nucleo 14',
   testo:R`Ricavare $n!\sim\sqrt{2\pi n}\,\left(\dfrac{n}{e}\right)^{n}$ applicando il metodo di Laplace a $\Gamma(n+1)=\displaystyle\int_0^{\infty}t^{n}e^{-t}dt$.`,
   steps:[
    {label:'Portalo nella forma giusta', body:R`<p>$t^ne^{-t}=e^{n\ln t-t}$. Il grande parametro è $n$, ma l&rsquo;esponente non è ancora $-n f$: si <b>riscala</b> $t=n s$, ottenendo $dt=n\,ds$ e
    $$\Gamma(n+1)=n^{n+1}\int_0^\infty e^{-n(s-\ln s)}ds,\qquad f(s)=s-\ln s.$$
    <b>Il riscalamento è la mossa chiave</b>: senza, il massimo si sposta con $n$ e l&rsquo;espansione non parte.</p>`},
    {label:'Applica Laplace', body:R`<p>$f'(s)=1-1/s=0$ dà $s_0=1$; $f(1)=1$; $f''(s)=1/s^2$, quindi $f''(1)=1$. Allora
    $$\Gamma(n+1)\approx n^{n+1}e^{-n}\sqrt{\frac{2\pi}{n}}=\sqrt{2\pi n}\;\frac{n^n}{e^n}.\qquad\blacksquare$$</p>`},
    {label:'Il controllo numerico', body:R`<p>Per $n=10$: $10!=3\,628\,800$ contro $\sqrt{20\pi}\,(10/e)^{10}\approx3\,598\,696$ — errore $0{,}83\%$. Per $n=100$ l&rsquo;errore scende a $0{,}083\%$: va come $\frac{1}{12n}$, il primo termine della correzione. <b>Verifica sempre così un&rsquo;asintotica</b>: un numero contro un numero, non l&rsquo;impressione che la formula sia elegante.</p>
    <div class="note">Questa formula è ovunque in meccanica statistica: $\ln n!\approx n\ln n-n$ è ciò che trasforma il conteggio delle configurazioni nell&rsquo;<b>entropia di Boltzmann</b>. Il termine $\sqrt{2\pi n}$, trascurabile nel logaritmo, è invece essenziale quando serve la distribuzione e non solo il suo logaritmo.</div>`}
   ]}
]},

/* ---------------- 03 · FASE STAZIONARIA E SELLA ---------------- */
{ num:'03', title:'Fase stazionaria e punto di sella', meta:'oscillazioni che si cancellano · deformare il cammino nel piano complesso · steepest descent',
  blocchi:[
  {t:'reveal', title:'Fase stazionaria: dove la fase si ferma', tag:'derivazione', steps:[
   {label:'Il meccanismo', body:R`<p>Per $I(N)=\displaystyle\int g(x)e^{iN\varphi(x)}dx$ il modulo dell&rsquo;integranda è $|g|$ ovunque: nessun punto domina in <b>ampiezza</b>. Ma la fase $N\varphi(x)$ ruota velocissima, e contributi con fasi opposte si <b>elidono</b>. L&rsquo;unico posto dove non si elidono è dove la fase è <b>stazionaria</b>: $\varphi'(x_0)=0$.</p>`},
   {label:'La formula', body:R`<p>Sviluppando $\varphi\approx\varphi(x_0)+\tfrac12\varphi''(x_0)(x-x_0)^2$ e usando l&rsquo;integrale di Fresnel $\int e^{i\alpha u^2}du=\sqrt{\pi/|\alpha|}\,e^{i\frac{\pi}{4}\mathrm{sgn}\alpha}$:
   $$I(N)\approx g(x_0)\,e^{iN\varphi(x_0)}\sqrt{\frac{2\pi}{N|\varphi''(x_0)|}}\;e^{\,i\frac{\pi}{4}\mathrm{sgn}\varphi''(x_0)}.$$
   Stessa struttura di Laplace, con in più una <b>fase di $\pm\pi/4$</b>. $\blacksquare$</p>
   <div class="note">Quella fase non è un dettaglio: accumulata lungo una traiettoria, dà l&rsquo;<b>indice di Maslov</b> della WKB, e in ottica lo sfasamento del fronte d&rsquo;onda che attraversa un fuoco. In assenza di punti stazionari l&rsquo;integrale è più piccolo di <b>qualunque</b> potenza di $1/N$ (Riemann–Lebesgue): la cancellazione è totale.</div>`}
  ]},
  {t:'plot', title:'Cancellazione ovunque, tranne dove la fase è ferma',
   intro:R`$\cos\!\big(N\varphi(x)\big)$ con $\varphi(x)=x^2$ e $N=14$: le oscillazioni si infittiscono allontanandosi da $x=0$, dove $\varphi'=0$.`,
   plots:[
    {kind:'func2d', xr:[-2.2,2.2], yr:[-1.3,1.3], height:320,
     title:'attorno al punto stazionario le oscillazioni rallentano: li l\'area non si cancella',
     curves:[{f:'cos(14*x*x)', col:'#b98cff', width:1.8, label:'cos(14 x²)'},
             {f:'0', col:'#4d5a6b', width:1, dash:true}],
     marks:[{x:0,y:1,label:'fase stazionaria',col:'#d8a13a',up:true}]}
   ],
   leggi:R`Lontano da $x=0$ le creste e le valli si susseguono così fitte che ogni contributo positivo trova subito il suo negativo: <b>l&rsquo;area si annulla a coppie</b>. Vicino a $x=0$, invece, la fase $14x^2$ varia lentamente (la sua derivata si annulla), l&rsquo;oscillazione «rallenta» e resta una regione larga $\sim1/\sqrt N$ dove l&rsquo;integranda ha segno costante: <b>tutto l&rsquo;integrale viene da lì</b>. È lo stesso identico meccanismo di Laplace, con la concentrazione prodotta dalla cancellazione invece che dal decadimento. <b>In fisica</b> questa figura è il <b>principio di minima azione</b>: nell&rsquo;integrale sui cammini di Feynman ogni traiettoria contribuisce con $e^{iS/\hbar}$, e per $\hbar$ piccolo tutte si cancellano tranne quelle attorno alla traiettoria di azione <b>stazionaria</b> — cioè quella classica. La meccanica classica come punto di fase stazionaria della quantistica.`},
  {t:'prosa', title:'Il punto di sella: quando l’esponente è complesso', tag:'il metodo che li unifica', html:R`
  <p>Se $h$ è <b>complessa</b>, non c&rsquo;è né un massimo reale né una fase stazionaria: c&rsquo;è entrambe le cose mescolate. La mossa è quella del nucleo 12: <b>deformare il cammino d&rsquo;integrazione</b> — lecito, perché l&rsquo;integranda è olomorfa e l&rsquo;integrale non cambia purché non si attraversino singolarità.</p>
  <p>Si cerca un punto $z_0$ con $h'(z_0)=0$: un <b>punto di sella</b> (per le funzioni olomorfe non esistono massimi interni — principio del massimo, nucleo 12 — quindi <i>ogni</i> punto critico è una sella). Attraverso una sella passano due direzioni notevoli: quella in cui $\mathrm{Re}\,h$ <b>sale</b> più ripida e quella in cui <b>scende</b> più ripida. Si deforma il cammino perché passi per $z_0$ <b>lungo la discesa più ripida</b>; su quel cammino $\mathrm{Im}\,h$ resta costante — niente più oscillazioni — e il problema torna a essere di <b>Laplace</b>:
  $$I(N)\approx g(z_0)\,e^{N h(z_0)}\sqrt{\frac{2\pi}{N\,|h''(z_0)|}}\;e^{i\theta},$$
  con $\theta$ l&rsquo;angolo della direzione di discesa. <b>Fase stazionaria e Laplace sono i due casi particolari</b> in cui la sella cade sull&rsquo;asse reale o su quello immaginario.</p>`},
  {t:'plot', title:'La sella e le due direzioni',
   intro:R`Livelli di $\mathrm{Re}(z^2)=x^2-y^2$: il punto critico in $0$ non è né massimo né minimo. Le frecce indicano la direzione di <b>massima discesa</b>, quella su cui si deforma il cammino.`,
   plots:[
    {kind:'contour', f:'x*x-y*y', xr:[-2,2], yr:[-2,2], height:360,
     levels:[-3,-2,-1,-0.3,0.3,1,2,3], col:'#4c8dff', label:'Re(z²) = costante',
     segs:[{x1:-1.7,y1:-1.7,x2:1.7,y2:1.7,col:'#5eead4',width:1.6,dash:true},
           {x1:0,y1:0,x2:0,y2:1.5,col:'#ff9b6b',width:2.6,arrow:true,label:'discesa piu ripida',lx:0.85,ly:1.2},
           {x1:0,y1:0,x2:0,y2:-1.5,col:'#ff9b6b',width:2.6,arrow:true},
           {x1:0,y1:0,x2:1.5,y2:0,col:'#d8a13a',width:2.2,arrow:true,label:'salita',lx:1.15,ly:0.22},
           {x1:0,y1:0,x2:-1.5,y2:0,col:'#d8a13a',width:2.2,arrow:true}],
     marks:[{x:0,y:0,label:'sella',col:'#ffffff',up:true,left:true}]}
   ],
   leggi:R`Le curve di livello di $\mathrm{Re}(z^2)$ formano il disegno tipico della sella: lungo l&rsquo;asse reale (oro) la parte reale <b>cresce</b>, lungo l&rsquo;asse immaginario (arancione) <b>scende</b>. Il cammino d&rsquo;integrazione va deformato per passare di qui <b>nella direzione arancione</b>: lì $e^{Nh}$ decade il più rapidamente possibile allontanandosi dal punto, e l&rsquo;integrale si concentra come nel metodo di Laplace. La linea tratteggiata verde è dove $\mathrm{Re}\,h$ resta costante: attraversarla in quella direzione non concentrerebbe nulla. <b>Due fatti che chiudono il Movimento III.</b> Primo: la libertà di scegliere questo cammino è <b>esattamente</b> il teorema di Cauchy — senza deformazione dei contorni, niente metodo di sella. Secondo: che il punto critico sia una sella e non un massimo è il <b>principio del massimo modulo</b> del nucleo 12 — le funzioni olomorfe non hanno picchi interni. <b>Il metodo di sella non usa l&rsquo;analisi complessa come strumento: ne è una conseguenza.</b>`}
]},

/* ---------------- 04 · SENSO E ROTTE ---------------- */
{ num:'04', title:'Il senso e le rotte fisiche', meta:'un solo punto decide tutto: il limite termodinamico, la traiettoria classica, il livello WKB',
  blocchi:[
  {t:'prosa', title:'Cosa hai davvero imparato', tag:'sintesi', html:R`
  <p><b>A monte.</b> L&rsquo;integrale gaussiano viene dal nucleo 02-bis (polari); la deformazione dei cammini e il principio del massimo dal nucleo 12; la domanda «convergente o solo asintotica?» era rimasta aperta dal nucleo 07 e trova qui la sua risposta.</p>
  <p><b>Il punto.</b> Quando un parametro è grande, un integrale è deciso da <b>un punto solo</b> — il massimo, il punto stazionario, la sella — e attorno a quel punto basta il secondo ordine. La potenza di $N$ nel prefattore misura <b>quanto</b> è dominante quel punto ($N^{-1/2}$ generico, $N^{-1/4}$ degenere, $N^{-1}$ al bordo).</p>
  <p><b>A valle.</b> È il linguaggio del limite termodinamico, dell&rsquo;approssimazione semiclassica e dell&rsquo;integrale sui cammini.</p>`},
  {t:'prolessi', title:'Dove riappare questo nucleo, nella fisica che farai',
   oggetto:R`<b>L&rsquo;approssimazione di sella</b>: per parametro grande, l&rsquo;integrale vale il suo integrando nel punto dominante, per la larghezza gaussiana attorno.`,
   rotte:[
    {dove:'Meccanica<br>statistica', txt:R`Il <b>limite termodinamico</b> è un&rsquo;approssimazione di sella con $N$ = numero di particelle: $Z=\int e^{-N\beta f}$ è dominata dal minimo dell&rsquo;energia libera, e le fluttuazioni relative vanno come $1/\sqrt N$. L&rsquo;equivalenza degli insiemi statistici <b>è</b> questo teorema. E quando due selle diventano degeneri, l&rsquo;approssimazione si rompe: è la <b>transizione di fase</b>.`},
    {dove:'Integrali<br>di cammino', txt:R`$\int\mathcal{D}x\,e^{iS/\hbar}$: per $\hbar\to0$ la fase stazionaria seleziona la traiettoria di azione stazionaria, cioè quella <b>classica</b>. Le correzioni al secondo ordine sono le fluttuazioni quantistiche; la fase di Maslov è il $\pi/4$ di questa tappa.`},
    {dove:'WKB e<br>tunnel', txt:R`L&rsquo;approssimazione semiclassica per l&rsquo;equazione di Schrödinger è un&rsquo;espansione asintotica in $\hbar$. L&rsquo;effetto <b>tunnel</b> corrisponde a una sella complessa (istantone) e produce $e^{-S/\hbar}$: la quantità <b>non perturbativa</b>, invisibile a ogni ordine della serie — la stessa che la tappa 01 ha incontrato come limite del troncamento ottimo.`},
    {dove:'Teoria dei<br>campi', txt:R`La serie perturbativa in QED è <b>asintotica e non convergente</b> (argomento di Dyson): a un certo ordine i termini ricominciano a crescere. Non è un fallimento del metodo, è l&rsquo;informazione che esiste fisica non perturbativa fuori dalla portata della serie.`}
   ],
   domanda:R`L&rsquo;approssimazione di sella dice che, per $N$ grande, un sistema «sta» nella configurazione che minimizza l&rsquo;energia libera, e tutto il resto è soppresso come $e^{-N\Delta}$. È il motivo per cui la termodinamica funziona: un solo stato macroscopico conta. <b>Domanda che porti avanti:</b> se il sistema è grande ma <b>finito</b>, quella soppressione è enorme ma non infinita — le altre configurazioni ci sono ancora, con peso $e^{-10^{23}}$. Sono «impossibili» o solo «trascurabili»? È la stessa distinzione incontrata nel nucleo 10 con la misura nulla, e la stessa del nucleo 14 con la non-analiticità che appare solo al limite. <b>Tre nuclei diversi, la stessa frattura:</b> le proprietà su cui poggia la fisica macroscopica — irreversibilità, transizioni di fase, termalizzazione — sono <b>esatte solo all&rsquo;infinito</b>, e ciò che osserviamo è sempre finito. Studiare l&rsquo;ETH significa scegliere di prendere sul serio quel «quasi».`}
]}

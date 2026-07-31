/*META
{ "nn":"12",
  "file":"12-cauchy.html",
  "titolo":"Nucleo 12 — Teorema e formula di Cauchy: il bordo determina l’interno",
  "nome":"Teorema e formula di Cauchy",
  "banner":"PERCORSO-MATEMATICA · Movimento III · Nucleo <b>12 — Teorema e formula di Cauchy; analiticità e serie di Laurent</b> · Metodi Matematici della Fisica" }
META*/

/* ---------------- 00 · PERCHÉ QUESTO NUCLEO ---------------- */
{ num:'00', title:'Perché questo nucleo', meta:'Metodi · il teorema che rende l’analisi complessa uno strumento di calcolo, non solo una teoria',
  blocchi:[
  {t:'prosa', title:'Una frase, e tutto il resto ne discende', tag:'first principles', html:R`
  <p>Il nucleo 11 ha stabilito che l&rsquo;olomorfia è una condizione rigida. Qui quella rigidità produce il suo risultato più sorprendente:
  $$\oint_\gamma f(z)\,dz=0\quad\text{per ogni cammino chiuso, se }f\text{ è olomorfa dentro.}$$
  Da questo, in poche mosse, segue che il valore di $f$ in un punto <b>interno</b> è calcolabile da un integrale sui <b>soli valori al bordo</b> (formula di Cauchy) — e quindi che $f$ è infinitamente derivabile, che coincide con la propria serie di Taylor, che se è limitata su tutto il piano è costante, e che ogni polinomio ha una radice.</p>
  <p>C&rsquo;è un filo che riconosci: nel nucleo 04 avevi visto che un campo irrotazionale ha circuitazione nulla <b>se il dominio non ha buchi</b>, e che con un buco compare la circuitazione $2\pi$ del vortice. Qui è la stessa struttura, in veste complessa: $\oint f=0$ <b>se</b> il dominio è semplicemente connesso e $f$ olomorfa; e quando c&rsquo;è un buco — una singolarità — l&rsquo;integrale non è zero e <b>vale esattamente $2\pi i$ per il residuo</b>. Il nucleo 13 vive tutto dentro quel non-zero.</p>`},
  {t:'prosa', title:'Cosa saprai fare, uscendo di qui', tag:'performance attesa', html:R`
  <ul>
  <li>Calcolare un integrale di linea complesso con la parametrizzazione, e riconoscere quando <b>non serve calcolarlo</b> (Cauchy).</li>
  <li>Applicare la <b>formula di Cauchy</b> e la sua versione per le derivate, che è il modo più rapido per certi integrali su cerchi.</li>
  <li>Dire perché olomorfa $\Rightarrow$ <b>analitica</b> (sviluppabile in serie di potenze) e usare il <b>raggio di convergenza</b> = distanza dalla singolarità più vicina.</li>
  <li>Sviluppare in <b>serie di Laurent</b> in una corona assegnata (attenzione: la corona cambia lo sviluppo!) e classificare una singolarità isolata in <b>eliminabile / polo di ordine $m$ / essenziale</b>.</li>
  </ul>`}
]},

/* ---------------- 01 · INTEGRALE DI LINEA E TEOREMA DI CAUCHY ---------------- */
{ num:'01', title:'L’integrale complesso e il teorema di Cauchy', meta:'$\\int_\\gamma f\\,dz$ per parametrizzazione · stima ML · $\\oint f=0$ su domini senza buchi',
  blocchi:[
  {t:'prosa', title:'Definizione e strumenti minimi', tag:'grammatica', html:R`
  <p>Se $\gamma:[a,b]\to\mathbb{C}$ è un cammino regolare a tratti,
  $$\int_\gamma f(z)\,dz:=\int_a^b f\big(\gamma(t)\big)\,\gamma'(t)\,dt.$$
  È un integrale di una funzione complessa di variabile reale: si calcola come nel nucleo 03, ma il &laquo;$dz$&raquo; porta il fattore $\gamma'(t)$. Separando $f=u+iv$ e $dz=dx+i\,dy$ si vede che è la combinazione di due integrali di linea reali — <b>gli stessi</b> del nucleo 04:
  $$\int_\gamma f\,dz=\int_\gamma(u\,dx-v\,dy)+i\int_\gamma(v\,dx+u\,dy).$$</p>
  <p>Due strumenti che servono sempre:</p>
  <ul>
  <li><b>Stima ML:</b> $\left|\int_\gamma f\,dz\right|\le \max_{\gamma}|f|\cdot L(\gamma)$. È come si dimostra che un contributo &laquo;svanisce&raquo; (l&rsquo;arco all&rsquo;infinito del nucleo 13).</li>
  <li><b>L&rsquo;integrale fondamentale:</b> su $|z-z_0|=r$ percorso una volta in senso antiorario,
  $$\oint\frac{dz}{(z-z_0)^n}=\begin{cases}2\pi i,& n=1\\ 0,& n\in\mathbb{Z},\ n\ne1.\end{cases}$$
  Si verifica in due righe con $z=z_0+re^{i\theta}$, $dz=ire^{i\theta}d\theta$. <b>Tutto il calcolo dei residui è questo integrale, più la linearità.</b></li>
  </ul>`},
  {t:'reveal', title:'Il teorema di Cauchy, e perché la topologia è l’ipotesi vera', tag:'enunciato e senso', steps:[
   {label:'Enunciato', body:R`<p><b>Teorema di Cauchy&ndash;Goursat.</b> Se $f$ è olomorfa in un aperto <b>semplicemente connesso</b> $\Omega$ (nessun buco) e $\gamma\subset\Omega$ è un cammino <b>chiuso</b>, allora
   $$\oint_\gamma f(z)\,dz=0.$$
   Conseguenza immediata: in $\Omega$ l&rsquo;integrale fra due punti <b>non dipende dal cammino</b>, e $f$ ammette una primitiva olomorfa $F$ con $F'=f$.</p>`},
   {label:'Da dove viene (via Green)', body:R`<p>Ammettendo $f'$ continua, basta il teorema di Green del nucleo 05. Con $f=u+iv$:
   $$\oint_\gamma f\,dz=\oint(u\,dx-v\,dy)+i\oint(v\,dx+u\,dy)=\iint_D\big(-v_x-u_y\big)dA+i\iint_D\big(u_x-v_y\big)dA,$$
   e <b>entrambi gli integrandi sono nulli per Cauchy&ndash;Riemann</b> (nucleo 11). L&rsquo;olomorfia è esattamente la condizione che annulla i due rotori. $\blacksquare$</p>
   <div class="note">Goursat ha poi dimostrato lo stesso senza assumere $f'$ continua: un dettaglio tecnico con una conseguenza enorme, perché è ciò che permette di <b>dedurre</b> la regolarità invece di assumerla (tappa 03).</div>`},
   {label:'Il buco cambia tutto', body:R`<p>Se $\Omega$ ha un buco, il teorema <b>non</b> si applica e in generale $\oint f\ne0$: l&rsquo;esempio è $f=1/z$ sul cerchio unitario, che dà $2\pi i$. Ma vale la <b>deformazione dei cammini</b>: se due cammini chiusi si possono deformare l&rsquo;uno nell&rsquo;altro <b>restando</b> nel dominio di olomorfia, i loro integrali coincidono. Questo autorizza la mossa che userai sempre nel nucleo 13: sostituire un contorno complicato con un cerchietto attorno a ciascuna singolarità.</p>
   <p>È letteralmente il vortice del nucleo 04 ($\mathbf F=(-y,x)/r^2$, irrotazionale ma con circuitazione $2\pi$ attorno all&rsquo;origine): $1/z$ è la sua versione complessa, e la circuitazione non nulla è la stessa ostruzione topologica.</p>`}
  ]},
  {t:'plot', title:'Il campo di $1/z$ e i due destini di un contorno',
   intro:R`A sinistra il campo associato a $1/z$ (le sue linee sono i cerchi attorno all&rsquo;origine); a destra due cammini chiusi: quello che <b>non</b> racchiude la singolarità dà zero, quello che la racchiude dà $2\pi i$.`,
   plots:[
    {kind:'field2d', fx:'x/(x*x+y*y+1e-9)', fy:'-y/(x*x+y*y+1e-9)', xr:[-2,2], yr:[-2,2], n:15, height:330, w:430,
     title:'il campo di 1/z: singolare solo nell\'origine',
     marks:[{x:0, y:0, label:'z=0', col:'#ff6b6b', hollow:true, up:true}]},
    {kind:'field2d', fx:'x/(x*x+y*y+1e-9)', fy:'-y/(x*x+y*y+1e-9)', xr:[-2,2], yr:[-2,2], n:13, height:330, w:430,
     title:'contorno che esclude (verde, =0) e che include (arancio, =2 pi i)',
     rings:[{r:0.62, x:0.98, y:0.75, col:'#5eead4', width:2.4, label:'esclude'},
            {r:1.35, x:0, y:0, col:'#ff9b6b', width:2.6, label:'include'}],
     marks:[{x:0, y:0, col:'#ff6b6b', hollow:true}]}
   ],
   leggi:R`Il campo disegnato è $(\mathrm{Re}\,\overline{1/z},\ \mathrm{Im}\,\overline{1/z})$: fuori dall&rsquo;origine è perfettamente regolare, e <b>ogni</b> proprietà locale (derivabilità, irrotazionalità) vale ovunque tranne in un punto. Eppure i due cerchi hanno destini opposti. Il cerchio verde sta in una regione <b>semplicemente connessa</b> in cui $1/z$ è olomorfa: Cauchy si applica, l&rsquo;integrale è $0$. Il cerchio arancione racchiude il buco: l&rsquo;integrale vale $2\pi i$, e <b>non dipende dal raggio</b> — si può gonfiare o sgonfiare il cerchio senza cambiarne il valore, purché non si attraversi la singolarità. <b>Questa invarianza è il meccanismo del nucleo 13</b>: un contorno qualunque si deforma nella somma di cerchietti attorno alle singolarità, e ogni cerchietto contribuisce $2\pi i$ per il coefficiente $a_{-1}$ del suo sviluppo. L&rsquo;informazione non sta nel cammino: sta in <b>quali buchi</b> il cammino circonda, e quante volte.`},
  {t:'collaudo', title:'Controllo lampo', items:[
   {q:R`$\displaystyle\oint_{|z|=3}\frac{e^z}{z^2+16}\,dz$ quanto vale, e perché senza fare conti?`,
    a:R`Vale $0$. Le singolarità sono in $z=\pm4i$, che stanno <b>fuori</b> dal cerchio $|z|=3$; dentro e sul cerchio la funzione è olomorfa, e il disco è semplicemente connesso: teorema di Cauchy. La domanda dell&rsquo;esame è quasi sempre &laquo;dove sono le singolarità rispetto al contorno&raquo;: guarda quello <b>prima</b> di calcolare.`},
   {q:R`Perché $\oint\frac{dz}{z^2}=0$ sul cerchio unitario, mentre $\oint\frac{dz}{z}=2\pi i$? Entrambe sono singolari in $0$.`,
    a:R`Perché $1/z^2$ ha una <b>primitiva</b> su $\mathbb{C}\setminus\{0\}$, cioè $-1/z$, che è monodroma: l&rsquo;integrale su un cammino chiuso di una funzione con primitiva è sempre zero. $1/z$ invece avrebbe come primitiva $\log z$, che <b>non</b> è monodroma (nucleo 11): dopo un giro l&rsquo;argomento è cresciuto di $2\pi$, e resta il $2\pi i$. <b>Solo la potenza $-1$ produce il salto</b> — ed è per questo che nel nucleo 13 conta solo il coefficiente $a_{-1}$.`}
  ]}
]},

/* ---------------- 02 · FORMULA DI CAUCHY ---------------- */
{ num:'02', title:'La formula di Cauchy: il valore interno è scritto sul bordo', meta:'$f(z_0)=\\frac{1}{2\\pi i}\\oint\\frac{f(z)}{z-z_0}dz$ · e la versione per le derivate',
  blocchi:[
  {t:'reveal', title:'Enunciato e dimostrazione in tre mosse', tag:'derivazione', steps:[
   {label:'Enunciato', body:R`<p><b>Formula integrale di Cauchy.</b> Sia $f$ olomorfa in un aperto contenente il disco chiuso di bordo $\gamma$ (percorso una volta, in senso antiorario), e $z_0$ interno. Allora
   $$f(z_0)=\frac{1}{2\pi i}\oint_\gamma\frac{f(z)}{z-z_0}\,dz.$$
   In parole: <b>i valori sul bordo determinano tutti i valori dentro</b>. Nessun analogo reale: due funzioni reali possono coincidere sul bordo e differire dentro quanto vogliono.</p>`},
   {label:'Riduci a un cerchietto', body:R`<p>La funzione $\dfrac{f(z)}{z-z_0}$ è olomorfa in tutto il dominio <b>tranne</b> $z_0$. Per la deformazione dei cammini (tappa 01) l&rsquo;integrale su $\gamma$ è uguale a quello su un cerchietto $|z-z_0|=\varepsilon$ arbitrariamente piccolo.</p>`},
   {label:'Passa al limite sul cerchietto', body:R`<p>Su quel cerchietto scrivi $f(z)=f(z_0)+\big(f(z)-f(z_0)\big)$. Il primo pezzo dà $f(z_0)\displaystyle\oint\frac{dz}{z-z_0}=f(z_0)\cdot2\pi i$ (l&rsquo;integrale fondamentale). Il secondo si stima con ML: $|f(z)-f(z_0)|\le\eta(\varepsilon)\to0$ per continuità, e la lunghezza è $2\pi\varepsilon$, quindi il modulo è $\le\frac{\eta(\varepsilon)}{\varepsilon}2\pi\varepsilon=2\pi\eta(\varepsilon)\to0$. Resta $2\pi i f(z_0)$. $\blacksquare$</p>`}
  ]},
  {t:'prosa', title:'La formula per le derivate — e il salto di qualità', tag:'conseguenza', html:R`
  <p>Derivando sotto il segno di integrale rispetto a $z_0$ (operazione lecita, si giustifica con le stime uniformi):
  $$f^{(n)}(z_0)=\frac{n!}{2\pi i}\oint_\gamma\frac{f(z)}{(z-z_0)^{\,n+1}}\,dz.$$
  Il contenuto non è la formula, è la sua <b>esistenza</b>: il membro destro ha senso per ogni $n$ purché $f$ sia solo continua sul bordo e olomorfa dentro. Quindi <b>una funzione derivabile una volta in senso complesso è automaticamente derivabile infinite volte</b>. Nel caso reale una tale affermazione è falsa in modo clamoroso.</p>
  <div class="note"><b>Uso pratico d&rsquo;esame.</b> Letta al contrario, la formula calcola integrali: $\displaystyle\oint_{|z|=2}\frac{e^z}{(z-1)^3}dz=\frac{2\pi i}{2!}\,\frac{d^2}{dz^2}e^z\Big|_{z=1}=\pi i\,e$. Quando l&rsquo;integrando è &laquo;olomorfa diviso $(z-z_0)^{n+1}$&raquo; e il contorno racchiude solo $z_0$, questa è la via più rapida — più della decomposizione in fratti semplici.</div>`},
  {t:'reveal', title:'Le conseguenze che vale la pena ricordare a memoria', tag:'catena di corollari', steps:[
   {label:'Stime di Cauchy e Liouville', body:R`<p>Dalla formula per le derivate su un cerchio di raggio $R$, con $|f|\le M$: $|f^{(n)}(z_0)|\le\dfrac{n!\,M}{R^n}$. Se $f$ è <b>intera e limitata</b>, si fa tendere $R\to\infty$ con $n=1$ e si ottiene $f'\equiv0$: <b>ogni funzione intera limitata è costante</b> (<b>Liouville</b>).</p>`},
   {label:'Il teorema fondamentale dell’algebra', body:R`<p>Se un polinomio $p$ di grado $\ge1$ non avesse radici, $1/p$ sarebbe intera; e poiché $|p|\to\infty$ all&rsquo;infinito, $1/p$ sarebbe anche limitata, dunque costante per Liouville — assurdo. <b>Ogni polinomio complesso non costante ha una radice</b>. Un teorema di algebra dimostrato da un fatto di analisi, in quattro righe.</p>`},
   {label:'Principio del massimo modulo', body:R`<p>Il valore in un punto è la <b>media</b> dei valori su un cerchio che lo circonda (prendi $\gamma$ circolare nella formula e parametrizza: $f(z_0)=\frac{1}{2\pi}\int_0^{2\pi}f(z_0+re^{i\theta})d\theta$). Da qui: $|f|$ <b>non</b> può avere un massimo interno stretto — il massimo del modulo sta sul <b>bordo</b>. Corollario fisico: un potenziale armonico non ha estremi nell&rsquo;interno di una regione priva di sorgenti (teorema di Earnshaw: nessuna trappola elettrostatica statica).</p>`}
  ]},
  {t:'collaudo', title:'Controllo lampo', items:[
   {q:R`$\displaystyle\oint_{|z|=1}\frac{\cos z}{z}\,dz$?`,
    a:R`$2\pi i\cos 0=2\pi i$. È la formula di Cauchy con $f=\cos z$ (intera) e $z_0=0$ interno al contorno. Riconoscere la forma &laquo;$f(z)/(z-z_0)$&raquo; evita ogni calcolo.`},
   {q:R`Esiste una funzione intera con $|f(z)|\le\sqrt{|z|}$ per ogni $z$?`,
    a:R`Solo $f\equiv0$. Le stime di Cauchy con $n=1$ danno $|f'(z_0)|\le\frac{\max_{|z-z_0|=R}|f|}{R}\le\frac{\sqrt{|z_0|+R}}{R}\to0$ per $R\to\infty$: quindi $f'\equiv0$, $f$ costante, e la costante deve essere $0$ (per $z\to0$ il vincolo dà $|f(0)|\le0$). Stesso schema per ogni crescita <b>sub-lineare</b>: è la versione quantitativa di Liouville.`}
  ]}
]},

/* ---------------- 03 · ANALITICITÀ ---------------- */
{ num:'03', title:'Olomorfa = analitica: la serie di Taylor complessa', meta:'sviluppo in serie di potenze · raggio = distanza dalla singolarità più vicina · perché $1/(1+x^2)$ non converge oltre $1$',
  blocchi:[
  {t:'reveal', title:'Ogni olomorfa è somma della propria serie di potenze', tag:'derivazione', steps:[
   {label:'Il trucco: la serie geometrica dentro il nucleo di Cauchy', body:R`<p>Sia $f$ olomorfa nel disco $|z-z_0|\lt R$ e $\gamma$ un cerchio di raggio $r\lt R$ centrato in $z_0$. Per $|w-z_0|\lt r$ scrivi
   $$\frac{1}{z-w}=\frac{1}{(z-z_0)-(w-z_0)}=\frac{1}{z-z_0}\cdot\frac{1}{1-\frac{w-z_0}{z-z_0}}=\sum_{n\ge0}\frac{(w-z_0)^n}{(z-z_0)^{n+1}},$$
   serie geometrica che converge <b>uniformemente</b> su $\gamma$ perché il rapporto ha modulo $|w-z_0|/r\lt1$ costante.</p>`},
   {label:'Scambia serie e integrale', body:R`<p>La convergenza uniforme <b>autorizza</b> lo scambio (nucleo 07 — è esattamente il teorema che serviva). Sostituendo nella formula di Cauchy:
   $$f(w)=\frac{1}{2\pi i}\oint\frac{f(z)}{z-w}dz=\sum_{n\ge0}\left(\frac{1}{2\pi i}\oint\frac{f(z)}{(z-z_0)^{n+1}}dz\right)(w-z_0)^n=\sum_{n\ge0}\frac{f^{(n)}(z_0)}{n!}(w-z_0)^n.$$
   <b>Olomorfa $\Rightarrow$ analitica</b>: la serie di Taylor non solo esiste, ma converge a $f$ in tutto il disco. $\blacksquare$</p>
   <div class="note">Nel reale questo è falso: $e^{-1/x^2}$ (estesa con $0$) è $C^\infty$ con tutte le derivate nulle in $0$, quindi la sua serie di Taylor è identicamente $0$ e non la rappresenta. In complesso una tale funzione non può essere olomorfa in un intorno di $0$ — infatti $e^{-1/z^2}$ ha in $0$ una singolarità <b>essenziale</b> (tappa 04).</div>`}
  ]},
  {t:'prosa', title:'Il raggio di convergenza, spiegato una volta per tutte', tag:'il perché che mancava', html:R`
  <p>Il raggio di convergenza della serie di Taylor di $f$ centrata in $z_0$ è la <b>distanza da $z_0$ alla singolarità più vicina</b> nel piano complesso. Questo chiude una domanda che nel corso reale resta senza risposta.</p>
  <p>La serie $\dfrac{1}{1+x^2}=1-x^2+x^4-\cdots$ ha raggio $1$, ma la funzione reale è liscia e limitata su tutta $\mathbb{R}$: <b>nulla, sull&rsquo;asse reale, spiega perché la serie smette di funzionare in $x=\pm1$</b>. La spiegazione è fuori dall&rsquo;asse: $\frac{1}{1+z^2}$ ha poli in $z=\pm i$, a distanza $1$ dall&rsquo;origine. Il raggio di convergenza &laquo;vede&raquo; una singolarità che sull&rsquo;asse reale è invisibile.</p>
  <div class="note">È un fatto con un peso fisico diretto: quando una serie perturbativa in $\lambda$ ha raggio di convergenza finito, c&rsquo;è una <b>singolarità nel piano complesso</b> del parametro che lo impone. E quando il raggio è <b>zero</b> — come nella teoria delle perturbazioni in QED, dove Dyson mostrò che la serie non può convergere — la serie resta utile solo in senso <b>asintotico</b>. Il nucleo 07 aveva posto la domanda; questa è la risposta.</div>`},
  {t:'plot', title:'Il modulo $|1/(z^2+1)|$: due montagne dove il reale non vede nulla',
   intro:R`Curve di livello di $\left|\frac{1}{z^2+1}\right|$. Sull&rsquo;asse reale la funzione è tranquilla; i due poli stanno <b>fuori</b> dall&rsquo;asse, in $\pm i$.`,
   plots:[
    {kind:'contour', f:'1/hypot(x*x-y*y+1, 2*x*y)', xr:[-2.4,2.4], yr:[-2,2], height:380,
     levels:[0.35,0.55,0.8,1.2,2,4], col:'#4c8dff', label:'|1/(z²+1)| = costante',
     rings:[{r:1, col:'#5eead4', width:1.8, dash:true, label:'raggio di convergenza = 1'}],
     marks:[{x:0, y:1, label:'polo z=i', col:'#ff6b6b', up:true},
            {x:0, y:-1, label:'polo z=-i', col:'#ff6b6b'}]}
   ],
   leggi:R`I livelli si stringono attorno a $\pm i$: lì il modulo esplode. Percorrendo l&rsquo;<b>asse reale</b> (la riga orizzontale centrale) non si incontra nulla di anomalo — la funzione reale $1/(1+x^2)$ è liscia e limitata — eppure la serie di Taylor in $0$ ha raggio esattamente $1$, il cerchio tratteggiato, che tocca i due poli. <b>Il raggio di convergenza è la distanza dal guaio più vicino, anche quando il guaio non sta sulla retta su cui stai lavorando.</b> Questa figura è la risposta visiva alla domanda lasciata aperta nel nucleo 07, e il modello mentale da riusare ogni volta che una serie fisica smette di convergere senza una ragione apparente: cercare la singolarità nel piano complesso del parametro.`},
  {t:'collaudo', title:'Controllo lampo', items:[
   {q:R`Qual è il raggio di convergenza della serie di Taylor di $\frac{1}{z^2-2z+5}$ centrata in $z_0=0$? E centrata in $z_0=1$?`,
    a:R`Le radici del denominatore sono $z=1\pm2i$. Da $z_0=0$ la distanza è $|1\pm2i|=\sqrt5$, quindi $R=\sqrt5$. Da $z_0=1$ la distanza è $2$, quindi $R=2$. Nessun calcolo di coefficienti: <b>si localizzano le singolarità e si misura</b>.`},
   {q:R`Due funzioni olomorfe su un aperto connesso coincidono su un segmentino. Coincidono ovunque?`,
    a:R`Sì — <b>principio di identità</b>: se coincidono su un insieme con un punto di accumulazione interno (un segmento, una successione convergente), coincidono su tutto il connesso. È la rigidità nella forma più estrema: un frammento di informazione locale determina il tutto. È la base della <b>continuazione analitica</b> (nucleo 14), e il motivo per cui in fisica una funzione di risposta misurata su un intervallo di frequenze è, in linea di principio, determinata ovunque.`}
  ]}
]},

/* ---------------- 04 · LAURENT E SINGOLARITÀ ---------------- */
{ num:'04', title:'Serie di Laurent e classificazione delle singolarità', meta:'sviluppo in una corona · parte principale · eliminabile, polo di ordine $m$, essenziale',
  blocchi:[
  {t:'prosa', title:'Quando c&rsquo;è un buco, servono anche le potenze negative', tag:'costruzione', html:R`
  <p>Taylor sviluppa in un <b>disco</b>. Se la funzione ha una singolarità nel centro, il disco non è disponibile: si lavora in una <b>corona</b> $r\lt|z-z_0|\lt R$, e lo sviluppo giusto è quello di <b>Laurent</b>:
  $$f(z)=\sum_{n=-\infty}^{+\infty}a_n(z-z_0)^n,\qquad a_n=\frac{1}{2\pi i}\oint_\gamma\frac{f(z)}{(z-z_0)^{n+1}}\,dz,$$
  con $\gamma$ un qualunque cerchio dentro la corona. La parte con $n\lt0$ si chiama <b>parte principale</b>: è ciò che Taylor non può avere e che misura la gravità della singolarità.</p>
  <p><b>Il coefficiente $a_{-1}$ ha uno statuto speciale:</b> integrando termine a termine, tutti i termini danno zero tranne quello di $n=-1$ (l&rsquo;integrale fondamentale della tappa 01), quindi
  $$\oint_\gamma f(z)\,dz=2\pi i\,a_{-1}.$$
  Quel numero si chiama <b>residuo</b>, ed è tutto il nucleo 13.</p>
  <div class="note warn"><b>Trabocchetto classico.</b> Lo sviluppo di Laurent <b>dipende dalla corona</b>. $f=\frac{1}{z(z-1)}$ ha uno sviluppo in $0\lt|z|\lt1$ e uno <b>diverso</b> in $|z|\gt1$: nella prima si espande $\frac{1}{z-1}=-\sum z^n$, nella seconda $\frac{1}{z-1}=\frac1z\frac{1}{1-1/z}=\sum z^{-n-1}$. Un esercizio che chiede &laquo;lo sviluppo di Laurent&raquo; senza specificare la corona è mal posto: <b>la corona va sempre dichiarata</b>.</div>`},
  {t:'gram', title:'Le tre singolarità isolate — come si riconoscono', rows:[
   [R`<b>eliminabile</b>`, R`parte principale <b>assente</b>. Equivalente: $\lim_{z\to z_0}f(z)$ esiste finito, oppure $f$ è limitata vicino a $z_0$ (teorema di Riemann). Esempio: $\frac{\sin z}{z}$ in $0$. Si &laquo;ripara&raquo; ridefinendo $f(z_0)$. Residuo $=0$.`],
   [R`<b>polo di ordine $m$</b>`, R`parte principale <b>finita</b>, che si ferma a $(z-z_0)^{-m}$. Equivalente: $|f|\to+\infty$, e $(z-z_0)^mf(z)$ ha limite finito non nullo. Esempio: $\frac{e^z}{z^3}$ ha polo di ordine $3$ in $0$.`],
   [R`<b>essenziale</b>`, R`parte principale con <b>infiniti</b> termini. Esempio: $e^{1/z}=\sum\frac{1}{n!z^n}$. Il limite non esiste in nessun senso: per <b>Casorati&ndash;Weierstrass</b> l&rsquo;immagine di ogni intorno è densa in $\mathbb{C}$, e per il <b>grande teorema di Picard</b> assume ogni valore complesso (tranne al più uno) infinite volte.`],
   [R`<b>zeri</b>`, R`$f$ ha uno zero di ordine $k$ in $z_0$ se $f=(z-z_0)^k g$ con $g(z_0)\ne0$. Regola d&rsquo;oro: <b>zero di ordine $k$ al denominatore = polo di ordine $k$</b>, salvo cancellazioni col numeratore. Come si contano gli ordini in un quoziente: $\frac{\text{zero di ordine }p}{\text{zero di ordine }q}$ dà polo di ordine $q-p$ se $q\gt p$, zero di ordine $p-q$ altrimenti.`]
  ]},
  {t:'esercizio', title:'Sviluppo di Laurent nelle due corone di $\\frac{1}{z(z-1)}$',
   src:'tipo standard — la domanda è sempre «in quale corona»',
   testo:R`Sviluppare $f(z)=\dfrac{1}{z(z-1)}$ in serie di Laurent centrata in $z_0=0$, in ciascuna delle due corone $0\lt|z|\lt1$ e $|z|\gt1$. Classificare la singolarità in $0$ e dare il residuo.`,
   steps:[
    {label:'Fratti semplici', body:R`<p>$\dfrac{1}{z(z-1)}=\dfrac{1}{z-1}-\dfrac1z$ (si verifica riducendo allo stesso denominatore). Il termine $-1/z$ è già una potenza negativa; tutto dipende da come si espande $\frac{1}{z-1}$, e questo dipende dalla corona.</p>`},
    {label:'Corona interna $0\\lt|z|\\lt1$', body:R`<p>Qui $|z|\lt1$, quindi $\dfrac{1}{z-1}=-\dfrac{1}{1-z}=-\sum_{n\ge0}z^n$ (geometrica). Dunque
    $$f(z)=-\frac1z-1-z-z^2-\cdots$$
    Parte principale: il solo termine $-1/z$. Quindi in $0$ c&rsquo;è un <b>polo semplice</b> con <b>residuo $a_{-1}=-1$</b>.</p>`},
    {label:'Corona esterna $|z|\\gt1$', body:R`<p>Ora $|1/z|\lt1$, quindi $\dfrac{1}{z-1}=\dfrac1z\cdot\dfrac{1}{1-1/z}=\sum_{n\ge0}z^{-n-1}=\frac1z+\frac1{z^2}+\cdots$. Sommando il $-1/z$:
    $$f(z)=\frac{1}{z^2}+\frac{1}{z^3}+\frac{1}{z^4}+\cdots$$
    <b>Nessun termine in $z^{-1}$</b>: in questa corona il &laquo;coefficiente $a_{-1}$&raquo; è nullo. $\blacksquare$</p>
    <div class="note">Nessuna contraddizione, e vale la pena capirla bene: il <b>residuo</b> è definito dallo sviluppo nella corona che tocca la singolarità ($0\lt|z|\lt1$), e vale $-1$. Il coefficiente $a_{-1}$ della corona esterna misura invece l&rsquo;integrale su un cerchio grande, che racchiude <b>entrambi</b> i poli $0$ e $1$: infatti $\mathrm{Res}_0+\mathrm{Res}_1=-1+1=0$, coerente con l&rsquo;assenza del termine $1/z$. Lo sviluppo esterno conosce la somma dei residui, non i singoli.</div>`}
   ],
   nota:R`Metodo generale: scomponi in fratti semplici, poi espandi ogni pezzo con la <b>serie geometrica</b> nella direzione giusta — $\frac{1}{1-w}$ con $|w|\lt1$, dove $w$ è $z/a$ oppure $a/z$ a seconda che la corona sia interna o esterna al polo $a$.`},
  {t:'collaudo', title:'Controllo lampo', items:[
   {q:R`Che tipo di singolarità ha $\frac{1-\cos z}{z^3}$ in $z=0$?`,
    a:R`Polo <b>semplice</b>. Da $\cos z=1-\frac{z^2}{2}+\frac{z^4}{24}-\cdots$ segue $1-\cos z=\frac{z^2}{2}-\frac{z^4}{24}+\cdots$, zero di ordine <b>2</b>. Diviso $z^3$ (zero di ordine 3) resta $\frac{1}{2z}-\frac{z}{24}+\cdots$: parte principale con il solo $z^{-1}$, residuo $\frac12$. <b>Il metodo generale è questo</b>: sviluppa numeratore e denominatore, conta gli ordini, e il residuo si legge dallo sviluppo.`},
   {q:R`$e^{1/z}$ in $0$: perché non è un polo, per quanto alto sia l&rsquo;ordine?`,
    a:R`Perché nessuna potenza $z^m$ la rende limitata: $z^me^{1/z}\to\infty$ lungo l&rsquo;asse reale positivo per ogni $m$. Lo sviluppo $1+\frac1z+\frac{1}{2z^2}+\cdots$ ha <b>infiniti</b> termini negativi — singolarità <b>essenziale</b>. Nota il comportamento selvaggio: lungo l&rsquo;asse reale positivo $e^{1/z}\to+\infty$, lungo il negativo $\to0$, lungo l&rsquo;asse immaginario oscilla senza limite. Il residuo esiste comunque e vale $1$: si legge dallo sviluppo, ed è l&rsquo;unica cosa che serve per integrare.`}
  ]}
]},

/* ---------------- 05 · ESERCIZI ---------------- */
{ num:'05', title:'Esercizi — tocca a te', meta:'contorni e formula di Cauchy · ordini di zeri e poli · Laurent nella corona giusta',
  blocchi:[
  {t:'esercizio', title:'Tre integrali sullo stesso contorno',
   src:'esercizio guidato — riconoscere la forma prima di calcolare',
   testo:R`Calcolare, con $\gamma=\{|z|=2\}$ percorso in senso antiorario: (a) $\displaystyle\oint_\gamma\frac{z}{z^2+9}dz$; (b) $\displaystyle\oint_\gamma\frac{\sin z}{z-1}dz$; (c) $\displaystyle\oint_\gamma\frac{e^{2z}}{(z+1)^2}dz$.`,
   steps:[
    {label:'(a) guarda dove sono le singolarità', body:R`<p>I poli sono in $z=\pm3i$, con $|{\pm}3i|=3\gt2$: <b>fuori</b> dal contorno. L&rsquo;integrando è olomorfo su un aperto semplicemente connesso contenente $\gamma$ e il suo interno, quindi per <b>Cauchy</b> l&rsquo;integrale è $\,0$. Nessun conto.</p>`},
    {label:'(b) forma $f(z)/(z-z_0)$', body:R`<p>$z_0=1$ è dentro, $f=\sin z$ è intera: <b>formula di Cauchy</b>, $\ \oint=2\pi i\sin1$.</p>`},
    {label:'(c) forma con derivata', body:R`<p>$z_0=-1$ è dentro, esponente $2=n+1$ con $n=1$: formula per la derivata prima con $f=e^{2z}$:
    $$\oint_\gamma\frac{e^{2z}}{(z+1)^2}dz=\frac{2\pi i}{1!}\,\frac{d}{dz}e^{2z}\Big|_{z=-1}=2\pi i\cdot2e^{-2}=4\pi i\,e^{-2}.\qquad\blacksquare$$</p>`},
    {label:'Lo schema da portarsi all&rsquo;esame', body:R`<p><b>(1)</b> localizza le singolarità e confrontale col contorno; <b>(2)</b> se sono tutte fuori: zero, e hai finito; <b>(3)</b> se dentro ce n&rsquo;è una sola e l&rsquo;integrando è &laquo;olomorfa$/(z-z_0)^{n+1}$&raquo;: formula di Cauchy; <b>(4)</b> se ce n&rsquo;è più d&rsquo;una o la forma non è quella: residui (nucleo 13).</p>`}
   ]},
  {t:'esercizio', title:'Ordini di zeri e poli: $\\dfrac{z^2\\sin z}{(1-\\cos z)^2}$ in $z=0$',
   src:'esercizio guidato',
   testo:R`Classificare la singolarità in $z=0$ di $f(z)=\dfrac{z^2\sin z}{(1-\cos z)^2}$ e calcolarne il residuo.`,
   steps:[
    {label:'Conta gli ordini', body:R`<p>Numeratore: $z^2$ dà ordine $2$, $\sin z$ ordine $1$ $\Rightarrow$ zero di ordine <b>3</b>. Denominatore: $1-\cos z\sim\frac{z^2}{2}$ ha ordine $2$, elevato al quadrato dà ordine <b>4</b>. Quindi $f$ ha in $0$ un <b>polo di ordine $4-3=1$</b>: polo semplice.</p>`},
    {label:'Residuo via sviluppo', body:R`<p>$z^2\sin z=z^3-\frac{z^5}{6}+\cdots$; $1-\cos z=\frac{z^2}{2}\left(1-\frac{z^2}{12}+\cdots\right)$, quindi $(1-\cos z)^2=\frac{z^4}{4}\left(1-\frac{z^2}{6}+\cdots\right)$. Dunque
    $$f=\frac{z^3\left(1-\frac{z^2}{6}+\cdots\right)}{\frac{z^4}{4}\left(1-\frac{z^2}{6}+\cdots\right)}=\frac{4}{z}\big(1+O(z^2)\big),$$
    e il residuo è $\boxed{4}$. $\blacksquare$ (I due fattori correttivi si semplificano al primo ordine: un piccolo regalo di questo esercizio, ma il conto va comunque scritto.)</p>`}
   ],
   nota:R`Regola operativa che vale per tutto il Movimento III: <b>non</b> cercare di &laquo;semplificare&raquo; l&rsquo;espressione. Sviluppa numeratore e denominatore in serie fino al primo termine non nullo, conta gli ordini, e leggi il risultato. È più rapido e non sbaglia.`},
  {t:'collaudo', title:'Diagnostica rapida', items:[
   {q:R`Una funzione intera che vale $n$ su ogni intero $n$: quante ce ne sono?`,
    a:R`Infinite (per esempio $f(z)=z$, ma anche $z+\sin(\pi z)$, o $z+c\sin(\pi z)$ per ogni $c$): gli interi sono un insieme <b>senza punti di accumulazione</b> al finito, quindi il principio di identità non si applica. Se invece i dati fossero su una successione convergente — per esempio $f(1/n)=1/n$ — allora sarebbe forzata $f(z)=z$. <b>Ciò che conta non è quanti dati hai, ma se si accumulano.</b>`},
   {q:R`Perché il teorema di Cauchy dice, in fondo, la stessa cosa del &laquo;campo conservativo&raquo; del nucleo 04?`,
    a:R`Perché $\oint_\gamma f\,dz=0$ per ogni chiusa equivale a: l&rsquo;integrale non dipende dal cammino, cioè $f$ ha una <b>primitiva</b> $F$ con $F'=f$ — esattamente come un campo irrotazionale su un dominio semplicemente connesso ha un potenziale. Le due componenti reali dell&rsquo;integrando sono campi irrotazionali <b>perché</b> valgono le CR, e l&rsquo;ipotesi topologica (niente buchi) è la stessa in entrambi gli enunciati. Il vortice $1/r^2$ del nucleo 04 e la funzione $1/z$ sono lo stesso controesempio scritto in due alfabeti.`}
  ]}
]},

/* ---------------- 06 · SENSO E ROTTE ---------------- */
{ num:'06', title:'Il senso e le rotte fisiche', meta:'il bordo che determina l’interno, e la sua eco nella fisica',
  blocchi:[
  {t:'prosa', title:'Cosa hai davvero imparato', tag:'sintesi', html:R`
  <p><b>A monte.</b> Green del nucleo 05 dimostra Cauchy; la convergenza uniforme del nucleo 07 autorizza lo scambio serie-integrale che dà l&rsquo;analiticità; il buco del nucleo 04 riappare come ostruzione topologica, e la circuitazione del vortice diventa il $2\pi i$ di $1/z$.</p>
  <p><b>Il punto.</b> L&rsquo;olomorfia è così rigida che l&rsquo;informazione al <b>bordo</b> determina l&rsquo;<b>interno</b>. Da qui: derivabilità infinita, analiticità, Liouville, principio del massimo, principio d&rsquo;identità. E il residuo — il coefficiente $a_{-1}$ — è l&rsquo;unica cosa che sopravvive all&rsquo;integrazione su una chiusa.</p>
  <p><b>A valle.</b> Il nucleo 13 trasforma questo in un metodo di calcolo per integrali <b>reali</b>. Il nucleo 14 spinge il principio d&rsquo;identità fino alla continuazione analitica.</p>`},
  {t:'prolessi', title:'Dove riappare questo nucleo, nella fisica che farai',
   oggetto:R`<b>Il valore interno determinato dal bordo</b> ($f(z_0)=\frac{1}{2\pi i}\oint\frac{f}{z-z_0}$) e la <b>circuitazione non nulla attorno a una singolarità</b>.`,
   rotte:[
    {dove:'Relazioni di<br>dispersione', txt:R`Se $\chi(\omega)$ è olomorfa nel semipiano superiore (causalità), applicare la formula di Cauchy a un contorno che chiude quel semipiano dà le <b>relazioni di Kramers&ndash;Kronig</b>: $\mathrm{Re}\,\chi$ è un integrale di $\mathrm{Im}\,\chi$ su tutte le frequenze, e viceversa. Assorbimento e dispersione sono due facce dello stesso oggetto analitico.`},
    {dove:'Propagatori e<br>funzioni di Green', txt:R`Un propagatore è un&rsquo;espressione del tipo $\frac{1}{\omega-\omega_0+i\epsilon}$: il suo <b>polo</b> individua il modo, e il segno di $i\epsilon$ (cioè da quale parte il polo sta rispetto al contorno) sceglie la prescrizione <b>ritardata</b> o <b>avanzata</b> — la causalità è una decisione topologica su come aggirare un polo.`},
    {dove:'Fase di Berry<br>e topologia', txt:R`Un integrale su un cammino chiuso che non dipende dal cammino ma solo da <b>cosa racchiude</b> è la struttura della fase di Berry, dell&rsquo;effetto Aharonov&ndash;Bohm e dei numeri di Chern. Il $2\pi i$ di $\oint dz/z$ è il progenitore elementare di ogni quantità quantizzata di origine topologica.`},
    {dove:'Principio del<br>massimo', txt:R`Un potenziale armonico non ha massimi interni: nessuna configurazione di cariche statiche può intrappolare una carica di prova in equilibrio stabile (<b>Earnshaw</b>). È il motivo per cui le trappole reali (Paul, Penning) usano campi <b>oscillanti</b> o magnetici — un teorema di analisi complessa che detta il progetto di un apparato.`}
   ],
   domanda:R`Se il valore interno è già scritto sul bordo, dov&rsquo;è &laquo;l&rsquo;informazione&raquo; di un sistema descritto da funzioni analitiche? Il principio d&rsquo;identità dice che un frammento arbitrariamente piccolo determina il tutto — e in fisica ciò significa che misurare una risposta su una finestra di frequenze determina, in linea di principio, la risposta a <b>tutte</b> le frequenze. Ma la ricostruzione è notoriamente <b>instabile</b>: piccoli errori sul frammento esplodono nella continuazione. <b>Domanda che porti avanti:</b> quando un sistema complesso &laquo;dimentica&raquo; il suo stato iniziale (termalizzazione, decoerenza), sta perdendo informazione oppure la sta rendendo <i>praticamente</i> irrecuperabile, come una continuazione analitica che esiste ma è mal condizionata? La distinzione fra impossibile e mal posto è, forse, il nodo di tutta la faccenda.`}
]}

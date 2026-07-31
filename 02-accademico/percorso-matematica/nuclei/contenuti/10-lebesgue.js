/*META
{ "nn":"10",
  "file":"10-lebesgue.html",
  "titolo":"Nucleo 10 — Lebesgue e gli spazi Lᵖ: perché serve un altro integrale",
  "nome":"Integrale di Lebesgue e spazi Lᵖ",
  "banner":"PERCORSO-MATEMATICA · Movimento II · Nucleo <b>10 — Integrale di Lebesgue, convergenza dominata, spazi L<sup>p</sup></b> · approfondimento [+], chiude il debito del nucleo 09" }
META*/

/* ---------------- 00 · PERCHÉ QUESTO NUCLEO ---------------- */
{ num:'00', title:'Perché questo nucleo', meta:'[+] · il debito lasciato aperto dal nucleo 09: chi garantisce che $L^2$ sia completo',
  blocchi:[
  {t:'prosa', title:'Il debito, detto con precisione', tag:'first principles', html:R`
  <p>Nel nucleo 09 hai usato due volte un fatto senza dimostrarlo: che $L^2$ è uno spazio di Hilbert, cioè <b>completo</b>. Serviva per dire che le somme parziali di Fourier convergono a <i>qualcosa dello spazio</i>, e quindi che il sistema trigonometrico è una base. Nel nucleo 08 avevi visto il rovescio della medaglia: lo spazio delle funzioni <b>continue</b> con la norma integrale <b>non</b> è completo — la successione di rampe convergeva alla funzione segno, che sta fuori.</p>
  <p>La soluzione a quel difetto è <b>allargare lo spazio</b>: ammettere anche funzioni discontinue, ma con un integrale abbastanza robusto da restare definito su di esse. L&rsquo;integrale di Riemann non basta. Quello di <b>Lebesgue</b> sì, e il teorema che chiude il cerchio (<b>Riesz&ndash;Fischer</b>) dice esattamente che gli spazi $L^p$ così costruiti sono <b>completi</b>.</p>
  <p>È un nucleo <b>[+]</b>: non serve saperlo costruire, serve sapere <b>cosa garantisce</b> e quali tre teoremi di passaggio al limite autorizzano le manipolazioni che farai continuamente (scambiare limite e integrale, derivare sotto il segno, sommare serie sotto integrale).</p>`}
]},

/* ---------------- 01 · L'IDEA ---------------- */
{ num:'01', title:'L’idea: partizionare il codominio, non il dominio', meta:'Riemann affetta l’asse $x$, Lebesgue affetta l’asse $y$ · misura · «quasi ovunque»',
  blocchi:[
  {t:'prosa', title:'La differenza, in una frase', tag:'costruzione', html:R`
  <p><b>Riemann</b> divide il <b>dominio</b> in intervallini e somma $f(\xi_i)\Delta x_i$: funziona finché $f$ non oscilla troppo, perché su ogni intervallino i valori devono essere quasi uguali.</p>
  <p><b>Lebesgue</b> divide il <b>codominio</b>: fissa una fascia di valori $[y,y+\Delta y]$, <b>misura</b> l&rsquo;insieme dei punti dove $f$ ci cade dentro, e somma $y\cdot\mu\big(\{x:f(x)\approx y\}\big)$. L&rsquo;insieme misurato può essere complicatissimo — sparso, frammentato — e non importa: basta saperne la <b>misura</b>.</p>
  <p>L&rsquo;esempio che separa i due mondi è la funzione di Dirichlet: $f=1$ sui razionali, $0$ sugli irrazionali, su $[0,1]$. <b>Non</b> è Riemann-integrabile (ogni intervallino contiene sia razionali che irrazionali: somme superiori $=1$, inferiori $=0$). È Lebesgue-integrabile con integrale <b>zero</b>: i razionali sono numerabili, quindi hanno misura nulla, e la funzione vale $0$ <b>quasi ovunque</b>.</p>
  <div class="note">La costruzione richiede di dire quali insiemi sono <b>misurabili</b> e quanto misurano (teoria della misura). Il punto operativo: <b>ogni funzione ragionevole che incontrerai è misurabile</b> — continue, a tratti, limiti di successioni di misurabili. Gli insiemi non misurabili esistono ma richiedono l&rsquo;assioma della scelta per essere costruiti: non compaiono in fisica.</div>`},
  {t:'gram', title:'Il vocabolario minimo', rows:[
   [R`<b>misura nulla</b>`, R`$E$ si copre con intervalli di lunghezza totale piccola a piacere. Esempi: un punto, un insieme numerabile ($\mathbb{Q}$), una curva nel piano. <b>Ciò che accade su un insieme di misura nulla non cambia nessun integrale.</b>`],
   [R`<b>quasi ovunque</b> (q.o.)`, R`una proprietà vale q.o. se l&rsquo;insieme dove fallisce ha misura nulla. È l&rsquo;avverbio che compare in ogni enunciato di questo nucleo.`],
   [R`$L^p(\Omega)$`, R`funzioni misurabili con $\lVert f\rVert_p=\left(\int_\Omega|f|^p\right)^{1/p}\lt\infty$, con la convenzione che due funzioni uguali q.o. sono lo <b>stesso</b> elemento. Per $p=\infty$: $\lVert f\rVert_\infty=$ estremo superiore essenziale.`],
   [R`<b>Riesz–Fischer</b>`, R`$L^p$ è <b>completo</b> per ogni $1\le p\le\infty$. In particolare $L^2$ è di Hilbert col prodotto scalare $\int f\bar g$ — <b>è il teorema che il nucleo 09 stava usando</b>.`],
   [R`<b>densità</b>`, R`le funzioni continue (e i polinomi trigonometrici) sono <b>dense</b> in $L^2$: ogni $f\in L^2$ è limite in norma di funzioni buone. È così che i teoremi si dimostrano prima sul caso liscio e poi si estendono.`]
  ]},
  {t:'collaudo', title:'Controllo lampo', items:[
   {q:R`Perché in $L^2$ &laquo;due funzioni diverse&raquo; possono essere lo stesso elemento?`,
    a:R`Perché la norma non distingue funzioni uguali q.o.: se $f=g$ tranne che in un punto, $\lVert f-g\rVert_2=0$. Se non si identificassero, la norma sarebbe solo una <b>semi</b>norma (norma nulla con vettore non nullo) e la geometria del nucleo 09 crollerebbe. Conseguenza da tenere a mente: in $L^2$ <b>non ha senso chiedere il valore in un punto</b>. Ecco perché la convergenza di Fourier è naturale in norma e non puntuale — e perché la $\delta$ (nucleo 15) non può essere una funzione di $L^2$.`}
  ]}
]},

/* ---------------- 02 · I TRE TEOREMI ---------------- */
{ num:'02', title:'I tre teoremi di passaggio al limite', meta:'convergenza monotona · lemma di Fatou · convergenza dominata — la licenza per scambiare $\\lim$ e $\\int$',
  blocchi:[
  {t:'prosa', title:'Perché sono il vero contenuto del nucleo', tag:'sintesi', html:R`
  <p>Il nucleo 07 dava una licenza per scambiare $\lim$ e $\int$: la convergenza <b>uniforme</b>. È una condizione forte e spesso falsa. Lebesgue la sostituisce con ipotesi molto più deboli, e sono queste che si usano davvero.</p>
  <ul>
  <li><b>Convergenza monotona (Beppo Levi).</b> Se $0\le f_1\le f_2\le\cdots$ e $f_n\to f$ q.o., allora $\int f_n\to\int f$ (anche se il limite è $+\infty$). Serve per le serie a termini positivi: si può integrare termine a termine senza altre ipotesi.</li>
  <li><b>Lemma di Fatou.</b> Se $f_n\ge0$ e $f_n\to f$ q.o., allora $\int f\le\liminf\int f_n$. Non dà l&rsquo;uguaglianza, ma è la disuguaglianza sempre disponibile: <b>l&rsquo;integrale non può crescere di colpo al limite</b> (può però calare: la massa può &laquo;scappare all&rsquo;infinito&raquo;).</li>
  <li><b>Convergenza dominata (Lebesgue).</b> Se $f_n\to f$ q.o. e <b>esiste</b> $g$ integrabile con $|f_n|\le g$ per ogni $n$, allora $\int f_n\to\int f$. <b>È il teorema che userai il 90% delle volte.</b> Nessuna uniformità richiesta: basta un &laquo;cappello&raquo; integrabile che tiene ferma tutta la successione.</li>
  </ul>
  <div class="note warn"><b>Perché serve la dominante.</b> Senza, l&rsquo;enunciato è falso: prendi $f_n=n$ su $[0,1/n]$ e $0$ altrove. $f_n\to0$ puntualmente ovunque, ma $\int f_n=1$ per ogni $n$: il limite degli integrali è $1\ne0$. La massa non sparisce, si concentra — è lo stesso meccanismo che nel nucleo 15 produrrà la $\delta$. Qui nessuna $g$ integrabile può dominare la successione, e infatti il teorema non si applica.</div>`},
  {t:'plot', title:'La successione che sfugge alla dominata',
   intro:R`$f_n=n$ su $[0,1/n]$: tende a zero in ogni punto, ma la sua area resta $1$. Guardare questa figura è capire perché la dominante non è un tecnicismo.`,
   plots:[
    {kind:'func2d', xr:[-0.05,1.05], yr:[-0.4,6.4], height:340,
     title:'f_2, f_4, f_6: piu alte e piu strette, area sempre 1',
     curves:[
      {f:'(x>0 && x<0.5)? 2 : 0', col:'#5eead4', width:2, label:'f2'},
      {f:'(x>0 && x<0.25)? 4 : 0', col:'#4c8dff', width:2, label:'f4'},
      {f:'(x>0 && x<0.1667)? 6 : 0', col:'#b98cff', width:2, label:'f6'}
     ],
     marks:[{x:0.75, y:0, label:'qui f_n = 0 gia da n=2', col:'#8fa0b5', up:true}]}
   ],
   leggi:R`Fissa un punto $x_0\gt0$ qualunque: da un certo $n$ in poi il rettangolo non lo copre più, e $f_n(x_0)=0$. Quindi $f_n\to0$ <b>in ogni punto</b>. Ma l&rsquo;area di ogni rettangolo è $n\cdot\frac1n=1$, costante: $\int f_n=1\not\to0=\int\lim f_n$. <b>Il limite puntuale non basta mai, da solo, a scambiare limite e integrale</b> — serve un controllo uniforme dall&rsquo;alto, ed è la funzione dominante $g$. Qui una $g$ integrabile che stia sopra tutte le $f_n$ dovrebbe valere almeno $1/x$ vicino all&rsquo;origine, che non è integrabile: nessuna dominante esiste, e il teorema correttamente non si applica. <b>Lettura in avanti:</b> questa stessa successione, vista come <i>funzionale</i> anziché come funzione, converge alla $\delta$ di Dirac — la massa non si annulla, si concentra in un punto. È il ponte diretto verso il nucleo 15.`},
  {t:'collaudo', title:'Controllo lampo', items:[
   {q:R`Puoi derivare sotto il segno di integrale $F(t)=\int_0^\infty e^{-x}\cos(tx)\,dx$?`,
    a:R`Sì. Il candidato derivato è $-\int_0^\infty x e^{-x}\sin(tx)dx$, e il modulo dell&rsquo;integrando è dominato da $g(x)=xe^{-x}$, <b>indipendente da $t$</b> e integrabile su $[0,\infty)$. La convergenza dominata (applicata ai rapporti incrementali) autorizza lo scambio. <b>Questo è lo schema standard:</b> per derivare sotto il segno si esibisce una dominante per la derivata, uniforme nel parametro. Senza quella riga, il passaggio è un atto di fede.`},
   {q:R`$\int_0^1\frac{dx}{\sqrt x}$ esiste? E in che senso?`,
    a:R`Vale $2$. Come integrale di Riemann è <b>improprio</b> (l&rsquo;integrando è illimitato in $0$) e va definito con un limite; come integrale di <b>Lebesgue</b> è un integrale ordinario di una funzione positiva misurabile, e la convergenza monotona lo calcola direttamente. È uno dei vantaggi pratici: Lebesgue assorbe gli integrali impropri <b>assolutamente</b> convergenti nella teoria generale. Attenzione però: quelli solo <b>condizionatamente</b> convergenti (come $\int_0^\infty\frac{\sin x}{x}dx$ del nucleo 13) <b>non</b> sono integrali di Lebesgue — restano limiti, e vanno trattati come tali.`}
  ]}
]},

/* ---------------- 03 · GLI SPAZI Lp ---------------- */
{ num:'03', title:'Gli spazi $L^p$ e cosa li distingue', meta:'Hölder e Minkowski · perché solo $L^2$ è di Hilbert · inclusioni su domini finiti',
  blocchi:[
  {t:'gram', title:'Le disuguaglianze che servono', rows:[
   [R`<b>Hölder</b>`, R`$\displaystyle\int|fg|\le\lVert f\rVert_p\lVert g\rVert_q$ con $\frac1p+\frac1q=1$. Per $p=q=2$ è <b>Cauchy–Schwarz</b> (nucleo 09). È lo strumento per stimare integrali di prodotti.`],
   [R`<b>Minkowski</b>`, R`$\lVert f+g\rVert_p\le\lVert f\rVert_p+\lVert g\rVert_p$: è la disuguaglianza triangolare, cioè ciò che rende $\lVert\cdot\rVert_p$ una <b>norma</b>.`],
   [R`<b>inclusioni</b>`, R`su un dominio di <b>misura finita</b>: $p\lt q\Rightarrow L^q\subset L^p$ (più integrabilità in alto). Su $\mathbb{R}$ <b>nessuna inclusione</b>: $1/\sqrt{|x|}$ vicino a $0$ e $1/|x|$ all&rsquo;infinito rompono le cose in direzioni opposte.`],
   [R`<b>solo $p=2$</b>`, R`è l&rsquo;unico $L^p$ la cui norma viene da un <b>prodotto scalare</b> (si riconosce con l&rsquo;identità del parallelogramma, che vale solo per $p=2$). Per questo la fisica quantistica vive in $L^2$ e non altrove: <b>servono angoli e ortogonalità</b>, non solo distanze.`]
  ]},
  {t:'prosa', title:'Il conto che chiude il nucleo 09', tag:'il debito saldato', html:R`
  <p>Ora la catena è completa, e vale la pena vederla tutta insieme:</p>
  <ol>
  <li>Lebesgue costruisce un integrale robusto sotto limite (i tre teoremi della tappa 02).</li>
  <li><b>Riesz&ndash;Fischer</b>: con quell&rsquo;integrale, $L^2$ è <b>completo</b> — ogni successione di Cauchy in norma quadratica converge a un elemento di $L^2$.</li>
  <li>Con il prodotto scalare $\langle f,g\rangle=\int f\bar g$, $L^2$ è dunque uno spazio di <b>Hilbert</b> (nucleo 09, tappa 01).</li>
  <li>Il sistema trigonometrico è ortonormale e <b>completo</b> in esso: le somme parziali di Fourier sono di Cauchy, quindi convergono, e convergono a $f$. <b>Parseval</b> vale.</li>
  </ol>
  <p>Senza il passo 2, il passo 4 sarebbe stato una speranza: le somme parziali avrebbero potuto puntare a un buco, come le rampe del nucleo 08 puntavano alla funzione segno. <b>Lebesgue è ciò che tappa quel buco</b> — e il prezzo pagato è che gli elementi di $L^2$ non sono funzioni ma classi di equivalenza, con la rinuncia al valore puntuale.</p>`},
  {t:'collaudo', title:'Controllo lampo', items:[
   {q:R`Perché la meccanica quantistica sceglie $L^2$ e non, per dire, $L^1$ o $L^4$?`,
    a:R`Perché serve la <b>struttura di Hilbert</b>: sovrapposizione (struttura lineare), probabilità come modulo quadro (norma), ortogonalità fra stati distinguibili e sviluppo su una base di autostati (prodotto scalare), e completezza perché i limiti di stati siano stati. Solo $p=2$ ha il prodotto scalare, e la scelta è quindi forzata dalla fisica, non convenzionale. $\lVert\psi\rVert_2^2=1$ <b>è</b> la conservazione della probabilità.`}
  ]}
]},

/* ---------------- 04 · SENSO E ROTTE ---------------- */
{ num:'04', title:'Il senso e le rotte fisiche', meta:'cosa cambia sapere che l’integrale è quello giusto',
  blocchi:[
  {t:'prosa', title:'Cosa hai davvero imparato', tag:'sintesi', html:R`
  <p><b>A monte.</b> Il controesempio del nucleo 08 (spazio di continue non completo) chiedeva un rimedio; il nucleo 09 lo ha usato senza averlo; qui è dimostrato di cosa si tratta. Lo scambio $\lim/\int$ del nucleo 07, che richiedeva convergenza uniforme, ha ora la sua versione utilizzabile: la <b>convergenza dominata</b>.</p>
  <p><b>Il punto.</b> Cambiare integrale non è un raffinamento tecnico: è ciò che rende gli spazi di funzioni <b>chiusi rispetto ai limiti</b>, e quindi utilizzabili come spazi di stati. Il prezzo — rinunciare al valore puntuale — è esattamente ciò che apre la porta al nucleo 15, dove gli oggetti buoni non sono più funzioni ma <b>funzionali</b>.</p>`},
  {t:'prolessi', title:'Dove riappare questo nucleo, nella fisica che farai',
   oggetto:R`<b>L&rsquo;integrale di Lebesgue e la misura</b>: la nozione di &laquo;quanto pesa un insieme&raquo; e la robustezza dell&rsquo;integrale sotto limite.`,
   rotte:[
    {dove:'Meccanica<br>quantistica', txt:R`Gli stati sono elementi di $L^2$, cioè <b>classi</b> di funzioni: il valore in un punto non è osservabile, solo gli integrali lo sono. La normalizzazione $\int|\psi|^2=1$ è una misura di probabilità, e la convergenza dominata è ciò che autorizza gran parte dei passaggi al limite nei conti.`},
    {dove:'Meccanica<br>statistica', txt:R`La teoria della misura <b>è</b> il linguaggio della probabilità (Kolmogorov): uno stato macroscopico è una misura sullo spazio delle fasi, la misura di Liouville è invariante sotto il flusso hamiltoniano (nucleo 06), e l&rsquo;ipotesi ergodica è un enunciato sulla misura degli insiemi invarianti.`},
    {dove:'Processi<br>stocastici', txt:R`Moto browniano, cammini aleatori, integrale sui cammini: tutti definiti come <b>misure su spazi di funzioni</b>. Qui l&rsquo;integrale di Riemann non è nemmeno pensabile — le traiettorie tipiche sono continue ma non derivabili in nessun punto.`}
   ],
   domanda:R`La misura è ciò che permette di dire che un insieme di configurazioni è &laquo;trascurabile&raquo; pur essendo infinito — i razionali in $[0,1]$, le traiettorie che tornano indietro spontaneamente. La meccanica statistica poggia interamente su questo tipo di affermazione: le configurazioni che violano il secondo principio <b>esistono</b>, ma hanno misura ridicolmente piccola. <b>Domanda che porti avanti:</b> «misura nulla» è una proprietà matematica esatta, mentre «misura $10^{-10^{23}}$» è una proprietà fisica di tutt&rsquo;altra natura — eppure le trattiamo allo stesso modo. Quando studierai la termalizzazione, la distinzione fra <i>impossibile</i> e <i>trascurabile</i> tornerà come questione centrale, e questo nucleo ti dà il vocabolario per porla con precisione.`}
]}

/*META
{ "nn":"20",
  "file":"20-spazio-fasi.html",
  "titolo":"Nucleo 20 — Spazio delle fasi e teorema di Liouville",
  "nome":"Spazio delle fasi e Liouville",
  "banner":"PERCORSO-MATEMATICA · Movimento V · Nucleo <b>20 — Spazio delle fasi e teorema di Liouville: dove il moto diventa geometria</b> · ponte Meccanica → meccanica statistica" }
META*/

/* ---------------- 00 · PERCHÉ QUESTO NUCLEO ---------------- */
{ num:'00', title:'Perché questo nucleo', meta:'il primo dei tre che portano dalla Meccanica alla tesi · qui il moto smette di essere una traiettoria e diventa un flusso',
  blocchi:[
  {t:'prosa', title:'Il cambio di sguardo', tag:'first principles', html:R`
  <p>In Meccanica un sistema è una <b>traiettoria</b>: si dà $x(t)$ e si è detto tutto. Ma se le particelle sono $10^{23}$, nessuno scriverà mai quelle traiettorie, e soprattutto non servono: ciò che si misura sono poche grandezze macroscopiche.</p>
  <p>Il passaggio che rende possibile la meccanica statistica è cambiare oggetto: non più una traiettoria nello spazio ordinario, ma <b>un punto in uno spazio più grande</b> — lo <b>spazio delle fasi</b>, dove le coordinate sono <i>tutte</i> le posizioni e <i>tutti</i> gli impulsi. Un sistema di $N$ particelle è <b>un solo punto</b> in $6N$ dimensioni, e la sua evoluzione è il moto di quel punto: un <b>flusso</b>, esattamente come i campi vettoriali del nucleo 04.</p>
  <p>Da questo cambio di sguardo esce un teorema che sembra tecnico e invece decide tutto: il flusso hamiltoniano <b>non comprime i volumi</b>. È il teorema di Liouville, e ogni difficoltà concettuale della freccia del tempo nasce da lì.</p>`},
  {t:'prosa', title:'Cosa saprai fare, uscendo di qui', tag:'performance attesa', html:R`
  <ul>
  <li>Scrivere le <b>equazioni di Hamilton</b> e riconoscere l&rsquo;evoluzione come un <b>campo vettoriale</b> nello spazio delle fasi.</li>
  <li>Dimostrare il <b>teorema di Liouville</b> nei due modi (divergenza nulla; jacobiano unitario) e dire quale ipotesi serve davvero.</li>
  <li>Ricavare le tre conseguenze che contano: niente attrattori, <b>ricorrenza di Poincaré</b>, e l&rsquo;equazione di continuità per la densità $\rho$.</li>
  <li>Spiegare perché tutto ciò rende <b>problematica</b> l&rsquo;irreversibilità — che è la domanda del nucleo 22.</li>
  </ul>`}
]},

/* ---------------- 01 · LO SPAZIO DELLE FASI ---------------- */
{ num:'01', title:'Lo spazio delle fasi e il flusso hamiltoniano', meta:'stato = punto · evoluzione = campo vettoriale · le equazioni di Hamilton',
  blocchi:[
  {t:'prosa', title:'Costruzione', tag:'grammatica', html:R`
  <p>Per un sistema con $n$ gradi di libertà si prendono le coordinate $q_1..q_n$ e i <b>momenti coniugati</b> $p_1..p_n$: lo spazio delle fasi $\Gamma$ ha dimensione $2n$. Data l&rsquo;<b>hamiltoniana</b> $H(q,p)$ — per i sistemi meccanici, l&rsquo;energia espressa in queste variabili — l&rsquo;evoluzione è
  $$\dot q_i=\frac{\partial H}{\partial p_i},\qquad \dot p_i=-\frac{\partial H}{\partial q_i}.$$</p>
  <p>Due differenze sostanziali rispetto a Newton, e sono il motivo per cui si passa a Hamilton. <b>(1)</b> Il sistema è del <b>primo ordine</b>: assegnato il punto $(q,p)$, il futuro è determinato — non serve altro. Quindi per ogni punto passa <b>una sola</b> traiettoria, e le traiettorie <b>non si incrociano mai</b>. <b>(2)</b> Il membro destro è un <b>campo vettoriale</b> $\mathbf v=(\partial_pH,\,-\partial_qH)$ su $\Gamma$: l&rsquo;evoluzione è il suo flusso, e tutto il linguaggio del nucleo 04 (divergenza, flusso, linee di campo) si applica di peso.</p>
  <div class="note">Per l&rsquo;oscillatore armonico $H=\frac{p^2}{2m}+\frac12m\omega^2q^2$: le curve di livello di $H$ sono <b>ellissi</b>, e poiché $H$ si conserva ogni traiettoria <b>è</b> una di quelle ellissi. È il ritratto di fase del nucleo 06, riletto: lì era un trucco per studiare un&rsquo;EDO, qui è la geometria fondamentale della meccanica.</div>`},
  {t:'plot', title:'Il flusso dell’oscillatore: ellissi percorse a velocità costante',
   intro:R`Campo $(\dot q,\dot p)=(p,\,-q)$ (unità con $m=\omega=1$): le traiettorie sono le curve di livello di $H$, cioè circonferenze.`,
   plots:[
    {kind:'phase', fx:'y', fy:'-x', xr:[-2.6,2.6], yr:[-2.6,2.6], n:15, height:340,
     seeds:[[1,0],[1.8,0],[2.4,0]],
     title:'spazio delle fasi dell oscillatore: q in ascissa, p in ordinata'}
   ],
   leggi:R`Ogni traiettoria è una curva <b>chiusa</b>: il moto è periodico e il sistema torna esattamente dov&rsquo;era. Le curve <b>non si intersecano</b> — se lo facessero, da un punto partirebbero due futuri diversi, impossibile per un sistema del primo ordine. Il verso è orario: a $p\gt0$ la posizione cresce, e la forza di richiamo fa calare $p$. <b>La cosa da portare via</b> è che il ritratto di fase contiene tutta la dinamica <i>senza risolvere l&rsquo;equazione</i>: energia, periodo, ampiezza si leggono dalla forma delle orbite. In un sistema a $10^{23}$ particelle non potrai disegnarlo, ma il ragionamento resterà lo stesso — ed è per questo che vale la pena impararlo qui, dove si vede.`},
  {t:'collaudo', title:'Controllo lampo', items:[
   {q:R`Perché nello spazio delle fasi le traiettorie non possono incrociarsi, mentre nello spazio ordinario sì?`,
    a:R`Perché il sistema di Hamilton è del <b>primo ordine</b>: il campo vettoriale assegna a ogni punto <b>una</b> velocità, e per il teorema di esistenza e unicità (nucleo 06, Picard) per ogni punto passa una sola soluzione. Nello spazio ordinario due traiettorie possono passare per lo stesso punto <b>con velocità diverse</b>: l&rsquo;informazione mancante è proprio l&rsquo;impulso, che nello spazio delle fasi è una coordinata. <b>Lo spazio delle fasi è lo spazio in cui il moto diventa deterministico punto per punto.</b>`}
  ]}
]},

/* ---------------- 02 · LIOUVILLE ---------------- */
{ num:'02', title:'Il teorema di Liouville', meta:'il flusso hamiltoniano ha divergenza nulla · il volume nello spazio delle fasi si conserva · jacobiano = 1',
  blocchi:[
  {t:'reveal', title:'Due dimostrazioni, una riga ciascuna', tag:'derivazione', steps:[
   {label:'Via la divergenza (nucleo 04)', body:R`<p>Il campo che genera il flusso è $\mathbf v=\left(\dfrac{\partial H}{\partial p},\,-\dfrac{\partial H}{\partial q}\right)$. La sua divergenza nello spazio delle fasi:
   $$\nabla\cdot\mathbf v=\frac{\partial}{\partial q}\!\left(\frac{\partial H}{\partial p}\right)+\frac{\partial}{\partial p}\!\left(-\frac{\partial H}{\partial q}\right)=\frac{\partial^2H}{\partial q\,\partial p}-\frac{\partial^2H}{\partial p\,\partial q}=0,$$
   perché le derivate miste commutano (Schwarz, nucleo 01). <b>Il flusso hamiltoniano è incomprimibile.</b> $\blacksquare$</p>
   <p>Il segno meno nelle equazioni di Hamilton — che sembra una convenzione — è <b>esattamente</b> ciò che fa cancellare i due termini. Cambialo e il teorema muore.</p>`},
   {label:'Via il jacobiano (nucleo 02-bis)', body:R`<p>Sia $\Phi_t$ la mappa che porta lo stato iniziale nello stato al tempo $t$. Per un tempo infinitesimo $dt$: $q\mapsto q+\dot q\,dt$, $p\mapsto p+\dot p\,dt$, quindi
   $$\det J=1+\left(\frac{\partial\dot q}{\partial q}+\frac{\partial\dot p}{\partial p}\right)dt+O(dt^2)=1+(\nabla\cdot\mathbf v)\,dt=1.$$
   E il cambio di variabili del nucleo 02-bis dice che il volume si trasforma con $|\det J|$: <b>volume invariato</b>. Componendo tanti passi infinitesimi, vale per ogni $t$. $\blacksquare$</p>`},
   {label:'Cosa NON dice', body:R`<div class="note warn">Liouville dice che il <b>volume</b> si conserva, <b>non</b> che la forma si conserva. Una regione può allungarsi in filamenti sottilissimi e attorcigliarsi ovunque mantenendo volume costante — ed è esattamente quello che fa nei sistemi caotici (nucleo 21). <b>Confondere «volume conservato» con «la nuvola resta compatta» è l&rsquo;errore che rende incomprensibile la termodinamica.</b></div>`}
  ]},
  {t:'plot', title:'Volume conservato, forma distrutta: lo shear',
   intro:R`La particella <b>libera</b> ($H=p^2/2m$) ha flusso $q\mapsto q+pt$, $p\mapsto p$. Un disco di condizioni iniziali diventa un&rsquo;ellisse inclinata: <b>stessa area</b>, forma irriconoscibile.`,
   plots:[
    {kind:'curve', x:'cos(t)', y:'sin(t)', tr:[0,6.2832], xr:[-3.4,3.4], yr:[-1.6,1.6], height:250, w:430,
     title:'t=0: il disco delle condizioni iniziali'},
    {kind:'curve', x:'cos(t)+2*sin(t)', y:'sin(t)', tr:[0,6.2832], xr:[-3.4,3.4], yr:[-1.6,1.6], height:250, w:430,
     title:'t dopo: stessa area, allungata (shear)'}
   ],
   leggi:R`La trasformazione è $\begin{pmatrix}1&t\\0&1\end{pmatrix}$, che ha <b>determinante 1</b>: area invariata, come impone Liouville. Ma la figura si <b>allunga</b> senza limite: le particelle più veloci scappano avanti, le più lente restano indietro. Dopo un tempo lungo il disco è un filamento lunghissimo e sottilissimo, che attraversa tutto lo spazio disponibile. <b>Qui c&rsquo;è in nuce tutta la questione dell&rsquo;irreversibilità:</b> se guardi con precisione infinita, l&rsquo;insieme occupa sempre lo stesso volume e nulla è andato perso — l&rsquo;evoluzione è invertibile. Se guardi con una risoluzione finita, quel filamento appare <b>sparso ovunque</b>, indistinguibile da una nuvola uniforme. Il nucleo 22 è tutto qui dentro.`},
  {t:'collaudo', title:'Controllo lampo', items:[
   {q:R`Un sistema con attrito ha un attrattore (per esempio il punto fisso dell&rsquo;oscillatore smorzato). Contraddice Liouville?`,
    a:R`No: l&rsquo;attrito <b>non è hamiltoniano</b>. Un attrattore è una regione verso cui i volumi si <b>contraggono</b>, quindi $\nabla\cdot\mathbf v\lt0$, il che è incompatibile con Hamilton. Il punto profondo è che l&rsquo;attrito è una descrizione <b>efficace</b>: i gradi di libertà del mezzo sono stati eliminati dalla descrizione, e con essi il volume che si è trasferito lì. <b>Nel sistema completo (corpo + mezzo) il volume si conserva</b>; nella descrizione ridotta sembra sparire. È la stessa mossa concettuale della decoerenza, e la incontrerai di nuovo.`},
   {q:R`Che cos&rsquo;è la <b>ricorrenza di Poincaré</b>, e perché segue da Liouville?`,
    a:R`Se il moto è confinato in una regione di volume <b>finito</b> (energia limitata) e il flusso conserva il volume, allora quasi ogni stato <b>ritorna arbitrariamente vicino</b> a se stesso, dopo un tempo abbastanza lungo. Argomento: se le immagini successive di una regione non tornassero mai a sovrapporsi, avendo tutte lo stesso volume ne servirebbe di infinito. <b>Conseguenza scomoda:</b> un gas che si è espanso in una stanza tornerà, prima o poi, tutto in un angolo. Il tempo di ricorrenza però cresce come $e^{N}$: per $N\sim10^{23}$ è inimmaginabilmente più lungo dell&rsquo;età dell&rsquo;universo. <b>L&rsquo;irreversibilità non è impossibilità: è improbabilità estrema</b> — ed è la tensione che porti nel nucleo 22.`}
  ]}
]},

/* ---------------- 03 · LA DENSITÀ ---------------- */
{ num:'03', title:'La densità nello spazio delle fasi', meta:'da un punto a una distribuzione · equazione di continuità · $\\rho$ costante lungo il moto',
  blocchi:[
  {t:'prosa', title:'Perché serve una densità', tag:'costruzione', html:R`
  <p>Di un sistema reale non conosci mai lo stato esatto: conosci temperatura, pressione, energia — poche grandezze compatibili con un&rsquo;<b>enormità</b> di microstati. La descrizione onesta non è un punto ma una <b>distribuzione di probabilità</b> $\rho(q,p,t)$ sullo spazio delle fasi: la probabilità di trovarsi in $d^{n}q\,d^{n}p$ è $\rho\,d^nq\,d^np$.</p>
  <p>Come evolve $\rho$? I punti non si creano né si distruggono (le traiettorie non nascono né muoiono), quindi vale un&rsquo;<b>equazione di continuità</b> identica a quella dei fluidi (nucleo 04):
  $$\frac{\partial\rho}{\partial t}+\nabla\cdot(\rho\,\mathbf v)=0.$$
  Ma $\nabla\cdot\mathbf v=0$ per Liouville, quindi il termine si semplifica in $\mathbf v\cdot\nabla\rho$, e si ottiene l&rsquo;<b>equazione di Liouville</b>:
  $$\frac{\partial\rho}{\partial t}+\{\rho,H\}=0\qquad\Longleftrightarrow\qquad \frac{d\rho}{dt}=0,$$
  dove $\{\cdot,\cdot\}$ è la parentesi di Poisson. <b>La densità è costante lungo il moto</b>: viaggiando con il flusso, la nuvola attorno a te non si dirada mai.</p>`},
  {t:'prosa', title:'Le tre conseguenze che contano', tag:'sintesi', html:R`
  <ul>
  <li><b>Equilibrio = $\rho$ funzione delle sole quantità conservate.</b> Se $\rho$ dipende da $(q,p)$ solo attraverso $H$, allora $\{\rho,H\}=0$ e la distribuzione è <b>stazionaria</b>. Da qui l&rsquo;insieme <b>microcanonico</b> ($\rho$ costante sulla superficie di energia) e il <b>canonico</b> ($\rho\propto e^{-\beta H}$): non sono postulati arbitrari, sono le soluzioni stazionarie di questa equazione.</li>
  <li><b>L&rsquo;entropia di Gibbs non cambia mai.</b> $S=-k\!\int\rho\ln\rho$ è costante nel tempo, perché $\rho$ è trasportata rigidamente. <b>Il secondo principio non può derivare da qui</b> senza un ingrediente in più: è il problema del nucleo 22.</li>
  <li><b>Il ponte quantistico è immediato:</b> $\frac{d\rho}{dt}=0$ diventa $i\hbar\,\partial_t\hat\rho=[\hat H,\hat\rho]$ (equazione di von Neumann) sostituendo la parentesi di Poisson col commutatore. <b>Anche lì l&rsquo;entropia resta costante</b>, per lo stesso motivo — e la decoerenza dovrà spiegare come mai osserviamo il contrario.</li>
  </ul>`}
]},

/* ---------------- 04 · SENSO E ROTTE ---------------- */
{ num:'04', title:'Il senso e le rotte fisiche', meta:'la geometria che rende possibile la meccanica statistica',
  blocchi:[
  {t:'prosa', title:'Cosa hai davvero imparato', tag:'sintesi', html:R`
  <p><b>A monte.</b> Il campo vettoriale e la divergenza vengono dal nucleo 04; il jacobiano e il cambio di variabili dal 02-bis; l&rsquo;unicità delle traiettorie da Picard (nucleo 06); l&rsquo;uguaglianza delle derivate miste dal nucleo 01. <b>Questo nucleo non introduce quasi nulla di nuovo: riusa</b> — ed è il segno che il ponte regge.</p>
  <p><b>Il punto.</b> Lo spazio delle fasi trasforma la dinamica in geometria di un flusso incomprimibile. Da lì: niente attrattori, ricorrenza, distribuzioni stazionarie come funzioni dell&rsquo;energia, entropia di Gibbs costante.</p>
  <p><b>A valle.</b> Il nucleo 21 chiede se una traiettoria <i>visita</i> davvero tutto lo spazio accessibile (ergodicità); il 22 chiede come possa emergere l&rsquo;irreversibilità da un flusso che conserva tutto.</p>`},
  {t:'prolessi', title:'Dove riappare questo nucleo, nella fisica che farai',
   oggetto:R`<b>Lo spazio delle fasi con la sua misura invariante</b>: il volume $d^nq\,d^np$ che il flusso hamiltoniano non comprime.`,
   rotte:[
    {dove:'Meccanica<br>statistica', txt:R`La misura di Liouville è ciò che rende <b>ben definito</b> «contare gli stati»: il volume nello spazio delle fasi diviso $h^{3N}$ è il numero di microstati, e da lì l&rsquo;entropia di Boltzmann $S=k\ln\Omega$. Senza l&rsquo;invarianza, «contare» dipenderebbe dall&rsquo;istante in cui conti.`},
    {dove:'Meccanica<br>quantistica', txt:R`L&rsquo;equazione di Liouville diventa quella di von Neumann per la <b>matrice densità</b>, con il commutatore al posto della parentesi di Poisson. Lo spazio delle fasi diventa lo spazio di Hilbert (nucleo 09), e il volume invariante diventa l&rsquo;unitarietà dell&rsquo;evoluzione (nucleo 16).`},
    {dove:'Caos e<br>sistemi dinamici', txt:R`L&rsquo;incomprimibilità è ciò che costringe un sistema caotico a <b>stirare e ripiegare</b>: non potendo comprimere, per mescolare deve allungare in una direzione e assottigliare nell&rsquo;altra. Gli esponenti di Lyapunov misurano quella velocità, e la loro somma è nulla proprio per Liouville.`},
    {dove:'Simulazione<br>numerica', txt:R`Gli integratori <b>simplettici</b> (Verlet, leapfrog) sono costruiti per conservare esattamente il volume delle fasi: per questo restano stabili su miliardi di passi dove un Runge–Kutta accumula deriva sull&rsquo;energia. <b>Il teorema di questo nucleo detta il progetto del codice.</b>`}
   ],
   domanda:R`Liouville dice che l&rsquo;informazione sullo stato iniziale <b>non si perde mai</b>: il volume che la contiene resta identico per sempre, e il flusso è invertibile. Eppure ogni sistema macroscopico che osservi dimentica il proprio passato. <b>Domanda che porti avanti — ed è letteralmente l&rsquo;inizio della tua tesi:</b> se nulla si perde, che cosa esattamente cambia quando un sistema «raggiunge l&rsquo;equilibrio»? Le due risposte candidate sono nei prossimi due nuclei: che la traiettoria <b>visiti</b> tutto lo spazio accessibile rendendo le medie temporali uguali a quelle d&rsquo;insieme (ergodicità), oppure che l&rsquo;informazione <b>migri</b> in dettagli sempre più fini che nessun osservatore risolve (coarse-graining, decoerenza). Non sono la stessa cosa, e distinguerle è il mestiere.`}
]}

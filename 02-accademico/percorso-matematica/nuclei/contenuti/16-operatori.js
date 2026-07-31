/*META
{ "nn":"16",
  "file":"16-operatori-spettrale.html",
  "titolo":"Nucleo 16 — Operatori, teorema spettrale, Sturm–Liouville e Green spettrale",
  "nome":"Operatori e teoria spettrale",
  "banner":"PERCORSO-MATEMATICA · Movimento IV · Nucleo <b>16 — Operatori autoaggiunti, teorema spettrale, Sturm–Liouville, Green via spettro</b> · Metodi · peso d’esame ALTO" }
META*/

/* ---------------- 00 · PERCHÉ QUESTO NUCLEO ---------------- */
{ num:'00', title:'Perché questo nucleo', meta:'Metodi · «spettro» compare in 19 scritti su 19 · e il trabocchetto dei proiettori con autovettori non ortonormali',
  blocchi:[
  {t:'prosa', title:'Dove converge tutto il percorso', tag:'first principles', html:R`
  <p>Nel nucleo 09 la base ortonormale era data (le armoniche di Fourier). Qui si capisce <b>da dove viene una base</b>: non si sceglie, si <b>trova</b> — è la base degli autovettori dell&rsquo;operatore che governa il problema. Fourier funziona sulle EDP a coefficienti costanti perché $e^{ikx}$ sono le autofunzioni di $d^2/dx^2$; cambia l&rsquo;operatore e cambia la base giusta (Legendre, Bessel, Hermite: tutte autofunzioni di qualche operatore).</p>
  <p>Il teorema che rende questo possibile è il <b>teorema spettrale</b>: un operatore <b>autoaggiunto</b> ha autovalori <b>reali</b> e una base <b>ortonormale</b> di autovettori, e si scrive come somma pesata di <b>proiettori</b>. In meccanica quantistica non è un teorema di servizio: è la struttura stessa della teoria — osservabili = operatori autoaggiunti, valori misurabili = spettro, probabilità = proiezioni.</p>
  <div class="note warn"><b>Calibrazione d&rsquo;esame.</b> Lo scheletro del percorso marcava questo nucleo come approfondimento, ma la mappa degli scritti dice <b>&laquo;spettro di operatori: 19 su 19&raquo;</b>, con il trabocchetto dei <b>proiettori costruiti su autovettori non ortonormali</b>. È materia centrale, ed è scritta qui come tale.</div>`}
]},

/* ---------------- 01 · OPERATORI E AGGIUNTO ---------------- */
{ num:'01', title:'Operatori, aggiunto, autoaggiunto', meta:'$\\langle Af,g\\rangle=\\langle f,A^\\dagger g\\rangle$ · autovalori reali · autovettori ortogonali',
  blocchi:[
  {t:'prosa', title:'Le definizioni, e cosa forzano', tag:'grammatica', html:R`
  <p>Sia $H$ uno spazio di Hilbert (nucleo 09) e $A:H\to H$ lineare. L&rsquo;<b>aggiunto</b> $A^\dagger$ è definito da
  $$\langle Af,g\rangle=\langle f,A^\dagger g\rangle\qquad\forall f,g.$$
  $A$ è <b>autoaggiunto</b> (hermitiano) se $A=A^\dagger$. In dimensione finita: matrice uguale alla propria trasposta coniugata. In dimensione infinita c&rsquo;è una sottigliezza che conta — <b>autoaggiunto</b> richiede anche che i domini coincidano; un operatore solo &laquo;simmetrico&raquo; può non esserlo, e le <b>condizioni al bordo</b> fanno parte della definizione dell&rsquo;operatore, non sono un accessorio.</p>
  <p>Due conseguenze immediate, ed è per queste che la fisica usa proprio questi operatori:</p>
  <ul>
  <li><b>Autovalori reali:</b> da $A\phi=\lambda\phi$ segue $\lambda\lVert\phi\rVert^2=\langle A\phi,\phi\rangle=\langle\phi,A\phi\rangle=\bar\lambda\lVert\phi\rVert^2$, quindi $\lambda=\bar\lambda$. <b>I risultati di una misura sono numeri reali</b> perché le osservabili sono autoaggiunte.</li>
  <li><b>Autovettori di autovalori distinti sono ortogonali:</b> $\lambda\langle\phi,\psi\rangle=\langle A\phi,\psi\rangle=\langle\phi,A\psi\rangle=\mu\langle\phi,\psi\rangle$, e se $\lambda\ne\mu$ resta $\langle\phi,\psi\rangle=0$. <b>Stati con esiti di misura diversi sono perfettamente distinguibili.</b></li>
  </ul>
  <div class="note">Nota sull&rsquo;<b>unitario</b>: $U^\dagger U=\mathbb{1}$, cioè $U$ conserva il prodotto scalare. L&rsquo;evoluzione temporale $e^{-iHt/\hbar}$ è unitaria <b>perché</b> $H$ è autoaggiunto — la conservazione della probabilità (Parseval, nucleo 09) è l&rsquo;unitarietà. Autoaggiunto e unitario stanno fra loro come reale e di modulo uno.</div>`},
  {t:'collaudo', title:'Controllo lampo', items:[
   {q:R`$-i\frac{d}{dx}$ su $[0,L]$: è autoaggiunto?`,
    a:R`<b>Dipende dalle condizioni al bordo</b>, ed è tutto il punto. Integrando per parti, $\langle -i f',g\rangle-\langle f,-ig'\rangle=-i\big[f\bar g\big]_0^L$: l&rsquo;operatore è autoaggiunto solo se quel termine di bordo si annulla, per esempio con condizioni <b>periodiche</b> $f(0)=f(L)$. Con Dirichlet $f(0)=f(L)=0$ l&rsquo;operatore è simmetrico ma <b>non</b> autoaggiunto (i domini di $A$ e $A^\dagger$ differiscono) e non ha autovettori. È la ragione per cui &laquo;l&rsquo;impulso in una scatola&raquo; è un oggetto delicato, mentre l&rsquo;energia no.`},
   {q:R`Un operatore con autovalori reali è necessariamente autoaggiunto?`,
    a:R`No. $\begin{pmatrix}1&1\\0&2\end{pmatrix}$ ha autovalori $1,2$ reali ma non è simmetrica, e i suoi autovettori <b>non</b> sono ortogonali. È esattamente la situazione del trabocchetto della tappa 02: si può diagonalizzare, ma non con una base ortonormale — e i proiettori spettrali <b>non</b> sono $|v\rangle\langle v|$.`}
  ]}
]},

/* ---------------- 02 · TEOREMA SPETTRALE ---------------- */
{ num:'02', title:'Il teorema spettrale e i proiettori', meta:'$A=\\sum\\lambda_nP_n$ · funzioni di operatori · TRABOCCHETTO: autovettori non ortonormali',
  blocchi:[
  {t:'prosa', title:'Enunciato e uso', tag:'il teorema', html:R`
  <p><b>Teorema spettrale (caso con spettro discreto).</b> Se $A$ è autoaggiunto (e compatto, o con risolvente compatto — è il caso dei problemi ai limiti su domini limitati), esiste una <b>base ortonormale</b> $\{\phi_n\}$ di $H$ fatta di autovettori, $A\phi_n=\lambda_n\phi_n$ con $\lambda_n\in\mathbb{R}$, e
  $$A=\sum_n\lambda_n P_n,\qquad P_n=|\phi_n\rangle\langle\phi_n|,\qquad P_nP_m=\delta_{nm}P_n,\qquad \sum_nP_n=\mathbb{1}.$$
  In pratica: nella base giusta $A$ è <b>diagonale</b>, e agisce su ogni componente moltiplicandola per $\lambda_n$.</p>
  <p><b>Perché è potente:</b> permette di definire <b>funzioni di operatori</b>. Se $f$ è una funzione ordinaria,
  $$f(A):=\sum_n f(\lambda_n)\,P_n.$$
  Da qui $e^{-iHt/\hbar}=\sum_ne^{-iE_nt/\hbar}P_n$ (l&rsquo;evoluzione quantistica), $e^{-\beta H}$ (il peso di Boltzmann), $A^{-1}=\sum\lambda_n^{-1}P_n$ (la funzione di Green, tappa 04). <b>Nella base spettrale ogni funzione dell&rsquo;operatore è banale</b>: agisce numero per numero.</p>
  <p>Quando lo spettro non è discreto (l&rsquo;operatore posizione, l&rsquo;hamiltoniana libera) la somma diventa un integrale su una <b>misura spettrale</b>: gli &laquo;autovettori&raquo; non stanno nello spazio (le onde piane non sono normalizzabili) e vivono nelle distribuzioni del nucleo 15. La struttura resta la stessa.</p>`},
  {t:'reveal', title:'Il trabocchetto: proiettori con autovettori NON ortonormali', tag:'errore d’esame n.2', steps:[
   {label:'Il caso buono', body:R`<p>Se gli autovettori sono ortonormali ($\langle v_i,v_j\rangle=\delta_{ij}$), allora $P_n=|v_n\rangle\langle v_n|$ e tutto funziona: $P_n^2=P_n$, $P_nP_m=0$, $\sum P_n=\mathbb{1}$.</p>`},
   {label:'Il caso in cui la formula è FALSA', body:R`<div class="note warn">Se l&rsquo;operatore <b>non</b> è autoaggiunto, gli autovettori in generale <b>non sono ortogonali</b>, e $|v_n\rangle\langle v_n|$ <b>non è il proiettore spettrale</b>: non è nemmeno idempotente nella direzione giusta, e la somma non fa l&rsquo;identità. Applicare la formula per abitudine è l&rsquo;errore n.2 segnalato negli scritti.</div>
   <p>La via corretta è il <b>cambio di base esplicito</b>. Se $S$ è la matrice che ha per colonne gli autovettori $v_n$, allora $A=S\Lambda S^{-1}$ e
   $$P_n=S\,E_{nn}\,S^{-1},$$
   con $E_{nn}$ la matrice che ha $1$ nel posto $(n,n)$ e $0$ altrove. Equivalentemente si introduce la <b>base duale</b> (biortogonale) $\{w_n\}$, le righe di $S^{-1}$, con $\langle w_i,v_j\rangle=\delta_{ij}$, e allora
   $$P_n=|v_n\rangle\langle w_n|\qquad\text{— autovettore a destra, DUALE a sinistra.}$$</p>`},
   {label:'Esempio minimo da tenere a mente', body:R`<p>$A=\begin{pmatrix}1&1\\0&2\end{pmatrix}$: autovalori $1,2$; autovettori $v_1=\binom{1}{0}$, $v_2=\binom{1}{1}$ — <b>non ortogonali</b>. La formula sbagliata darebbe $|v_2\rangle\langle v_2|=\begin{pmatrix}1&1\\1&1\end{pmatrix}$, che non è nemmeno idempotente ($P^2=2P$). Con $S=\begin{pmatrix}1&1\\0&1\end{pmatrix}$, $S^{-1}=\begin{pmatrix}1&-1\\0&1\end{pmatrix}$, i proiettori corretti sono
   $$P_1=\begin{pmatrix}1&-1\\0&0\end{pmatrix},\qquad P_2=\begin{pmatrix}0&1\\0&1\end{pmatrix},$$
   che verificano $P_1+P_2=\mathbb{1}$, $P_i^2=P_i$, $P_1P_2=0$ e $A=1\cdot P_1+2\cdot P_2$. $\blacksquare$ <b>Nota che non sono simmetrici</b>: sono proiettori <b>obliqui</b>, e va bene così — la proiezione ortogonale del nucleo 09 esiste solo quando la base lo è.</p>`}
  ]},
  {t:'plot', title:'Lo spettro come insieme di punti — e la firma del caos',
   intro:R`Lo spettro di un operatore è un insieme di numeri reali su una retta. <b>Come sono spaziati</b> è un&rsquo;informazione fisica: due sistemi con la stessa densità di livelli possono avere statistiche di spaziatura opposte.`,
   plots:[
    {kind:'func2d', xr:[0,10], yr:[-1.5,1.5], height:280, ticks:false,
     title:'sopra: livelli di un sistema integrabile - sotto: caotico (repulsione)',
     curves:[{f:'0*x-9', col:'#0e1117', width:0.1}],
     segs:[{x1:0.2, y1:0.6, x2:9.8, y2:0.6, col:'#4d5a6b', width:1.2},
           {x1:0.2, y1:-0.6, x2:9.8, y2:-0.6, col:'#4d5a6b', width:1.2},
           {x1:0.2, y1:1.15, x2:0.2, y2:1.15, col:'#5eead4', label:'integrabile: livelli che si accalcano e si incrociano', lx:4.6, ly:1.15},
           {x1:0.2, y1:-1.25, x2:0.2, y2:-1.25, col:'#b98cff', label:'caotico: livelli che si respingono (spaziature regolari)', lx:4.6, ly:-1.25}],
     marks:[{x:0.6,y:0.6,col:'#5eead4'},{x:0.75,y:0.6,col:'#5eead4'},{x:1.9,y:0.6,col:'#5eead4'},
            {x:2.05,y:0.6,col:'#5eead4'},{x:2.12,y:0.6,col:'#5eead4'},{x:3.8,y:0.6,col:'#5eead4'},
            {x:4.6,y:0.6,col:'#5eead4'},{x:4.7,y:0.6,col:'#5eead4'},{x:6.2,y:0.6,col:'#5eead4'},
            {x:6.9,y:0.6,col:'#5eead4'},{x:7.0,y:0.6,col:'#5eead4'},{x:8.5,y:0.6,col:'#5eead4'},
            {x:9.3,y:0.6,col:'#5eead4'},{x:9.45,y:0.6,col:'#5eead4'},
            {x:0.7,y:-0.6,col:'#b98cff'},{x:1.5,y:-0.6,col:'#b98cff'},{x:2.35,y:-0.6,col:'#b98cff'},
            {x:3.0,y:-0.6,col:'#b98cff'},{x:3.75,y:-0.6,col:'#b98cff'},{x:4.55,y:-0.6,col:'#b98cff'},
            {x:5.2,y:-0.6,col:'#b98cff'},{x:6.0,y:-0.6,col:'#b98cff'},{x:6.75,y:-0.6,col:'#b98cff'},
            {x:7.4,y:-0.6,col:'#b98cff'},{x:8.2,y:-0.6,col:'#b98cff'},{x:8.95,y:-0.6,col:'#b98cff'},
            {x:9.6,y:-0.6,col:'#b98cff'}]}
   ],
   leggi:R`Le due righe hanno <b>lo stesso numero di livelli nello stesso intervallo</b> — stessa densità media — ma una statistica di spaziatura completamente diversa. Sopra i livelli si <b>accalcano</b> a coppie e lasciano vuoti: è la firma di un sistema <b>integrabile</b>, dove i livelli provengono da numeri quantici indipendenti e possono incrociarsi liberamente (statistica di Poisson). Sotto le distanze sono <b>sorprendentemente regolari</b>, nessuna coppia troppo vicina: i livelli si <b>respingono</b>, ed è la firma del <b>caos quantistico</b> (statistiche GOE/GUE delle matrici casuali). <b>Questa figura è il punto in cui la matematica del percorso tocca la tua tesi:</b> la congettura di Bohigas&ndash;Giannoni&ndash;Schmit dice che i sistemi il cui limite classico è caotico hanno statistica da matrici casuali, e l&rsquo;<b>ETH</b> è l&rsquo;affermazione gemella sugli <b>autostati</b> — non solo i livelli, ma anche gli elementi di matrice delle osservabili in quella base si comportano come quantità pseudo-casuali. Guardare uno spettro è, letteralmente, guardare se un sistema termalizzerà.`}
]},

/* ---------------- 03 · STURM–LIOUVILLE ---------------- */
{ num:'03', title:'Sturm–Liouville: da dove vengono le basi della fisica', meta:'$(pu^{\\prime})^{\\prime}+qu+\\lambda wu=0$ · autofunzioni ortogonali col peso $w$ · Fourier, Legendre, Bessel come casi',
  blocchi:[
  {t:'prosa', title:'La forma, e perché è quella giusta', tag:'costruzione', html:R`
  <p>Un problema di <b>Sturm&ndash;Liouville</b> è un problema agli autovalori per una EDO del secondo ordine scritta in forma <b>autoaggiunta</b>:
  $$\frac{d}{dx}\!\left(p(x)\frac{du}{dx}\right)+q(x)\,u+\lambda\,w(x)\,u=0,\qquad x\in[a,b],$$
  con condizioni al bordo separate (Dirichlet, Neumann, Robin) e $p,w\gt0$. <b>Ogni</b> EDO lineare del secondo ordine si può portare in questa forma moltiplicandola per un fattore integrante — non è un caso particolare, è una forma normale.</p>
  <p>Il motivo della forma è che rende l&rsquo;operatore <b>autoaggiunto rispetto al prodotto scalare con peso</b> $\langle f,g\rangle_w=\int_a^b f\,\bar g\,w\,dx$. Da lì, per la tappa 01:</p>
  <ul>
  <li>gli autovalori $\lambda_n$ sono <b>reali</b>, discreti, e $\lambda_n\to+\infty$;</li>
  <li>le autofunzioni sono <b>ortogonali col peso</b>: $\int_a^b\phi_n\phi_m\,w\,dx=0$ per $n\ne m$;</li>
  <li>formano una <b>base</b> di $L^2_w[a,b]$: ogni $f$ si sviluppa in serie di autofunzioni, con Parseval.</li>
  </ul>
  <div class="note">È la <b>generalizzazione di Fourier</b>. Con $p=w=1$, $q=0$ su $[0,L]$ e Dirichlet si riottengono $\sin\frac{n\pi x}{L}$ e la serie di Fourier del nucleo 09. Con altri coefficienti si ottengono i <b>polinomi di Legendre</b> (peso $1$ su $[-1,1]$, dal laplaciano in coordinate sferiche), le <b>funzioni di Bessel</b> (peso $x$, dal laplaciano in coordinate cilindriche), i <b>polinomi di Hermite</b> (peso $e^{-x^2}$, dall&rsquo;oscillatore armonico quantistico). <b>Tutte le &laquo;funzioni speciali&raquo; della fisica sono autofunzioni di qualche Sturm&ndash;Liouville</b>, e la loro ortogonalità — che sui libri appare come una tabella da memorizzare — è un corollario di questa struttura.</div>`},
  {t:'plot', title:'Le prime autofunzioni: i modi di una corda',
   intro:R`Il caso più semplice: $-u''=\lambda u$ su $[0,1]$ con $u(0)=u(1)=0$. Autovalori $\lambda_n=(n\pi)^2$, autofunzioni $\sin(n\pi x)$.`,
   plots:[
    {kind:'func2d', xr:[0,1], yr:[-1.35,1.35], height:320,
     title:'phi_n = sin(n pi x): n-1 nodi interni, ortogonali fra loro',
     curves:[
      {f:'sin(PI*x)', col:'#5eead4', width:2.2, label:'n=1 (fondamentale)'},
      {f:'sin(2*PI*x)', col:'#4c8dff', width:2.2, label:'n=2'},
      {f:'sin(3*PI*x)', col:'#b98cff', width:2.2, label:'n=3'}
     ],
     marks:[{x:0.5,y:0,label:'nodo di n=2',col:'#8fa0b5',up:true},
            {x:0.3333,y:0,col:'#8fa0b5'},{x:0.6667,y:0,col:'#8fa0b5'}]}
   ],
   leggi:R`Tre fatti generali si vedono in questo caso particolare, e valgono per <b>ogni</b> problema di Sturm&ndash;Liouville. <b>(1) Teorema dei nodi:</b> la $n$-esima autofunzione ha esattamente $n-1$ zeri interni — l&rsquo;autofunzione fondamentale non cambia mai segno. In meccanica quantistica: lo stato fondamentale non ha nodi, e contare i nodi <b>è</b> contare il livello. <b>(2) Ortogonalità:</b> $\int_0^1\sin(n\pi x)\sin(m\pi x)dx=0$ per $n\ne m$ — la stessa cancellazione di aree vista nel nucleo 09, qui come conseguenza dell&rsquo;autoaggiuntezza invece che di un&rsquo;identità trigonometrica. <b>(3) Autovalori crescenti:</b> $\lambda_n=(n\pi)^2\to\infty$, cioè più nodi = più &laquo;energia&raquo;. Nel calore del nucleo 15 è il motivo per cui i modi alti muoiono per primi; in una corda è il motivo per cui le armoniche acute si smorzano prima.`},
  {t:'esercizio', title:'La particella nella scatola: quella figura È la funzione d’onda',
   src:'il problema di Sturm–Liouville più famoso della fisica',
   testo:R`Risolvere l&rsquo;equazione di Schrödinger stazionaria per una particella libera di massa $m$ confinata in $[0,L]$ con pareti impenetrabili:
   $$-\frac{\hbar^2}{2m}\,\psi''(x)=E\,\psi(x),\qquad \psi(0)=\psi(L)=0.$$
   Determinare i livelli di energia e le funzioni d&rsquo;onda normalizzate, e dire quale struttura di questo nucleo si sta usando.`,
   steps:[
    {label:'Riconoscere il problema', body:R`<p>Riscritta come $\psi''=-\dfrac{2mE}{\hbar^2}\psi$, cioè $\psi''+\lambda\psi=0$ con $\lambda=\dfrac{2mE}{\hbar^2}$, <b>è esattamente il problema di Sturm&ndash;Liouville della tappa 03</b>: $p=1$, $q=0$, peso $w=1$, condizioni di Dirichlet. L&rsquo;operatore $\hat H=-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}$ con quelle condizioni al bordo è <b>autoaggiunto</b> (tappa 01) — ed è per questo che ci si aspetta autovalori reali e autofunzioni ortogonali.</p>`},
    {label:'Autovalori: l’energia è quantizzata', body:R`<p>La soluzione generale è $\psi=A\sin(\sqrt\lambda x)+B\cos(\sqrt\lambda x)$. La condizione $\psi(0)=0$ impone $B=0$; la condizione $\psi(L)=0$ impone $\sin(\sqrt\lambda L)=0$, cioè $\sqrt\lambda L=n\pi$ con $n=1,2,3,\dots$ Quindi $\lambda_n=\left(\frac{n\pi}{L}\right)^2$ e
    $$\boxed{\ E_n=\frac{\hbar^2\pi^2}{2mL^2}\,n^2\ }$$
    <b>La quantizzazione non è un postulato aggiuntivo</b>: è la stessa cosa che rende discreti i modi di una corda. Le condizioni al bordo selezionano un insieme <b>discreto</b> di autovalori, e quegli autovalori sono le energie misurabili — lo <b>spettro</b> dell&rsquo;operatore, nel senso letterale della tappa 02.</p>`},
    {label:'Autofunzioni normalizzate', body:R`<p>$\psi_n(x)=A\sin\frac{n\pi x}{L}$, con $A$ fissato dalla <b>normalizzazione</b> $\int_0^L|\psi_n|^2dx=1$: poiché $\int_0^L\sin^2\frac{n\pi x}{L}dx=\frac L2$, si ha $A=\sqrt{2/L}$ e
    $$\psi_n(x)=\sqrt{\frac2L}\,\sin\frac{n\pi x}{L}.$$
    <b>Sono le curve della figura qui sopra</b>, riscalate. E le tre proprietà lette lì diventano fisica, una per una: gli $n-1$ <b>nodi</b> contano il livello (lo stato fondamentale non ha nodi); l&rsquo;<b>ortogonalità</b> $\int_0^L\psi_n\psi_m=0$ dice che stati con energie diverse sono perfettamente distinguibili; gli autovalori <b>crescenti</b> sono lo spettro che sale come $n^2$.</p>`},
    {label:'Dove entra tutto il resto del percorso', body:R`<p>La <b>completezza</b> del sistema $\{\psi_n\}$ (nucleo 09) dice che ogni stato iniziale si scrive $\psi(x,0)=\sum_nc_n\psi_n(x)$ con $c_n=\langle\psi_n,\psi\rangle$ — è una <b>serie di Fourier</b>, con $\sum|c_n|^2=1$ per <b>Parseval</b>, cioè la conservazione della probabilità. E l&rsquo;evoluzione temporale, per il teorema spettrale (tappa 02), è
    $$\psi(x,t)=\sum_n c_n\,\psi_n(x)\,e^{-iE_nt/\hbar}:$$
    ogni componente ruota di fase con la <b>propria</b> frequenza $E_n/\hbar$, e nient&rsquo;altro accade. $\blacksquare$</p>
    <div class="note">Confronta col nucleo 17: l&rsquo;equazione del calore sullo stesso intervallo dà $e^{-\alpha\lambda_nt}$ (moduli che <b>calano</b>, irreversibile), Schrödinger dà $e^{-iE_nt/\hbar}$ (moduli <b>costanti</b>, unitario). Stessa base, stesso spettro, due destini — e la differenza è un solo fattore $i$.</div>`}
   ],
   nota:R`Vale la pena fermarsi su cosa è successo: non abbiamo &laquo;applicato la meccanica quantistica&raquo;, abbiamo risolto un problema agli autovalori di Sturm&ndash;Liouville e poi <b>letto i risultati in linguaggio fisico</b>. La quantizzazione dell&rsquo;energia, la distinguibilità degli stati, la conservazione della probabilità e l&rsquo;evoluzione per fasi sono tutte conseguenze della struttura matematica di questo nucleo. È il punto in cui il percorso smette di preparare l&rsquo;esame e comincia a preparare la tesi.`},
]},

/* ---------------- 04 · GREEN SPETTRALE ---------------- */
{ num:'04', title:'La funzione di Green nella base spettrale', meta:'$G=\\sum\\frac{\\phi_n(x)\\phi_n(\\xi)}{\\lambda_n}$ · il risolvente e i suoi poli · il ponte col nucleo 13',
  blocchi:[
  {t:'reveal', title:'Costruzione, e cosa rivela', tag:'derivazione', steps:[
   {label:'Sviluppa tutto nella base', body:R`<p>Vuoi risolvere $\mathcal{L}u=f$ con $\mathcal{L}$ autoaggiunto e autofunzioni ortonormali $\phi_n$, $\mathcal{L}\phi_n=\lambda_n\phi_n$. Scrivi $u=\sum_nu_n\phi_n$ e $f=\sum_nf_n\phi_n$ (nucleo 09). L&rsquo;equazione diventa <b>numerica</b>, modo per modo:
   $$\lambda_nu_n=f_n\ \Longrightarrow\ u_n=\frac{f_n}{\lambda_n}.$$
   Ricomponendo e usando $f_n=\int\phi_n(\xi)f(\xi)d\xi$:
   $$u(x)=\int\left[\sum_n\frac{\phi_n(x)\,\phi_n(\xi)}{\lambda_n}\right]f(\xi)\,d\xi\ \Longrightarrow\ \boxed{\ G(x,\xi)=\sum_n\frac{\phi_n(x)\phi_n(\xi)}{\lambda_n}\ }$$
   La Green del nucleo 15, <b>scritta nella base spettrale</b>. $\blacksquare$</p>`},
   {label:'Le due letture', body:R`<p><b>Simmetria gratis:</b> la formula è manifestamente simmetrica in $x\leftrightarrow\xi$ — la reciprocità che nel nucleo 15 andava verificata a mano è qui una conseguenza dell&rsquo;autoaggiuntezza.</p>
   <p><b>Il pericolo:</b> se $\lambda_n=0$ per qualche $n$ la formula esplode. Significa che l&rsquo;omogenea ha soluzione non banale, e allora $\mathcal{L}u=f$ è risolubile <b>solo</b> se $f$ è ortogonale a quel modo (<b>alternativa di Fredholm</b>). In fisica è la <b>risonanza</b>: forzare un sistema esattamente su un suo modo proprio non dà una risposta stazionaria.</p>`},
   {label:'Il risolvente: qui torna il nucleo 13', body:R`<p>Più in generale si studia il <b>risolvente</b> $R(z)=(\mathcal{L}-z)^{-1}=\sum_n\dfrac{P_n}{\lambda_n-z}$, funzione della variabile <b>complessa</b> $z$. Guardalo con gli occhi del Movimento III: è una funzione meromorfa i cui <b>poli sono esattamente gli autovalori</b>, e cui residui sono i <b>proiettori</b>:
   $$P_n=-\frac{1}{2\pi i}\oint_{\gamma_n}R(z)\,dz,$$
   con $\gamma_n$ un cerchietto attorno a $\lambda_n$. <b>Il teorema dei residui del nucleo 13 estrae i proiettori spettrali.</b> È così che il teorema spettrale si dimostra nei casi generali, ed è il motivo per cui lo spettro si chiama così: è l&rsquo;insieme dei punti dove il risolvente <b>non</b> è olomorfo.</p>
   <div class="note">Da qui si vede anche perché uno spettro <b>continuo</b> non è fatto di poli ma di un <b>taglio</b> (nucleo 11): infiniti poli che si addensano diventano una linea di non-analiticità. La distinzione fra stati legati (poli) e stati di scattering (tagli) è, in questo linguaggio, la distinzione fra le due specie di singolarità.</div>`}
  ]},
  {t:'collaudo', title:'Controllo lampo', items:[
   {q:R`Per $-u''=f$ su $[0,1]$ con Dirichlet, la Green spettrale è $\sum_n\frac{2\sin(n\pi x)\sin(n\pi\xi)}{(n\pi)^2}$. È la stessa del nucleo 15?`,
    a:R`Sì: la serie converge alla funzione triangolare $x_\lt(1-x_\gt)$ trovata lì. Sono due rappresentazioni dello stesso oggetto — una <b>chiusa</b> (utile per i conti e per il disegno) e una <b>spettrale</b> (utile per capire quali modi rispondono e con che peso). Nota il decadimento $1/n^2$ dei coefficienti: è la firma di una funzione continua con derivata discontinua (nucleo 09) — l&rsquo;angolo della Green si legge nello spettro.`},
   {q:R`Perché in meccanica quantistica si insiste tanto sull&rsquo;autoaggiuntezza e non basta &laquo;simmetrico&raquo;?`,
    a:R`Perché il <b>teorema spettrale</b> vale per gli autoaggiunti, non per i simmetrici, e con esso tutto ciò che serve: spettro reale, base di autostati, e soprattutto l&rsquo;evoluzione <b>unitaria</b> $e^{-iHt/\hbar}$ (teorema di Stone). Un&rsquo;hamiltoniana solo simmetrica può ammettere estensioni autoaggiunte <b>diverse</b> — fisiche diverse dallo stesso &laquo;operatore&raquo;. Concretamente: le <b>condizioni al bordo</b> non sono un dettaglio tecnico, sono parte della definizione del sistema fisico.`}
  ]}
]},

/* ---------------- 05 · ESERCIZI ---------------- */
{ num:'05', title:'Esercizi — tocca a te', meta:'diagonalizzazione con proiettori · autovettori non ortogonali · Sturm–Liouville con peso',
  blocchi:[
  {t:'esercizio', title:'Proiettori spettrali di una matrice simmetrica, e di una che non lo è',
   src:'esercizio-tipo — la coppia da saper distinguere',
   testo:R`(a) Per $A=\begin{pmatrix}2&1\\1&2\end{pmatrix}$ trovare autovalori, proiettori spettrali e scrivere $A=\sum\lambda_nP_n$; calcolare $e^{A}$. (b) Ripetere per $B=\begin{pmatrix}3&1\\0&2\end{pmatrix}$, facendo attenzione ai proiettori.`,
   steps:[
    {label:'(a) il caso simmetrico', body:R`<p>$\det(A-\lambda)=(2-\lambda)^2-1=0$ dà $\lambda=1,3$. Autovettori: $v_1=\frac{1}{\sqrt2}\binom{1}{-1}$ e $v_3=\frac{1}{\sqrt2}\binom{1}{1}$, <b>ortonormali</b> (come garantisce la tappa 01). Quindi
    $$P_1=v_1v_1^{T}=\frac12\begin{pmatrix}1&-1\\-1&1\end{pmatrix},\qquad P_3=\frac12\begin{pmatrix}1&1\\1&1\end{pmatrix},$$
    con $P_1+P_3=\mathbb{1}$ e $A=1\cdot P_1+3\cdot P_3$ (verificare svolgendo). E per il teorema spettrale
    $$e^{A}=e^{1}P_1+e^{3}P_3=\frac{1}{2}\begin{pmatrix}e+e^3&e^3-e\\ e^3-e& e+e^3\end{pmatrix}.$$
    <b>Nessuna serie da sommare</b>: le funzioni di operatori si calcolano sugli autovalori.</p>`},
    {label:'(b) il caso non simmetrico', body:R`<p>Autovalori $3,2$; autovettori $v_3=\binom{1}{0}$ e $v_2=\binom{1}{-1}$: <b>non ortogonali</b> ($\langle v_3,v_2\rangle=1\ne0$). Qui $|v\rangle\langle v|$ <b>è sbagliato</b>. Con $S=\begin{pmatrix}1&1\\0&-1\end{pmatrix}$, $S^{-1}=\begin{pmatrix}1&1\\0&-1\end{pmatrix}$:
    $$P_3=S\begin{pmatrix}1&0\\0&0\end{pmatrix}S^{-1}=\begin{pmatrix}1&1\\0&0\end{pmatrix},\qquad P_2=\begin{pmatrix}0&-1\\0&1\end{pmatrix}.$$
    Controlli: $P_3+P_2=\mathbb{1}$ ✓, $P_i^2=P_i$ ✓, $3P_3+2P_2=\begin{pmatrix}3&1\\0&2\end{pmatrix}=B$ ✓. <b>I proiettori non sono simmetrici</b> — sono obliqui, e questo è corretto. $\blacksquare$</p>`},
    {label:'La morale', body:R`<p>Prima di scrivere $P_n=|v_n\rangle\langle v_n|$, <b>controlla che gli autovettori siano ortonormali</b>. Lo sono automaticamente se l&rsquo;operatore è autoaggiunto (o normale); altrimenti serve il cambio di base $S\,E_{nn}\,S^{-1}$. Il controllo $\sum_nP_n=\mathbb{1}$ costa dieci secondi e smaschera l&rsquo;errore sempre.</p>`}
   ],
   nota:R`Caso limite da conoscere: se la matrice non è <b>diagonalizzabile</b> (autovalore con molteplicità geometrica minore di quella algebrica, es. $\begin{pmatrix}1&1\\0&1\end{pmatrix}$) non esistono affatto proiettori spettrali che la ricostruiscano: serve la forma di <b>Jordan</b>, e $f(A)$ acquista termini con le derivate di $f$. Non può succedere per operatori autoaggiunti.`},
  {t:'collaudo', title:'Diagnostica rapida', items:[
   {q:R`L&rsquo;equazione di Legendre $\big((1-x^2)u'\big)'+\lambda u=0$ su $[-1,1]$: che peso ha, e cosa ne segue?`,
    a:R`È già in forma di Sturm&ndash;Liouville con $p=1-x^2$, $q=0$, <b>peso $w=1$</b>. Ne segue che le autofunzioni — i <b>polinomi di Legendre</b> $P_n$, con $\lambda_n=n(n+1)$ — sono ortogonali <b>senza peso</b>: $\int_{-1}^{1}P_nP_m\,dx=0$ per $n\ne m$. Nota che $p$ si annulla agli estremi: è un problema <b>singolare</b>, e lì le condizioni al bordo diventano semplicemente la richiesta di limitatezza. È il caso che nasce dal laplaciano in coordinate sferiche — da cui le armoniche sferiche e i numeri quantici $\ell,m$.`},
   {q:R`Perché la base &laquo;giusta&raquo; per un problema è quella degli autovettori dell&rsquo;operatore, e non una qualunque?`,
    a:R`Perché in quella base l&rsquo;operatore è <b>diagonale</b>: il problema si spezza in equazioni indipendenti, una per modo, e le funzioni dell&rsquo;operatore (evoluzione, inversa, esponenziale) si calcolano numero per numero. È lo stesso principio del nucleo 09 (Fourier diagonalizza $d^2/dx^2$) portato al caso generale: <b>diagonalizzare è disaccoppiare</b>. E quando due operatori commutano, esiste una base che li diagonalizza <b>entrambi</b> — in meccanica quantistica è la ragione per cui gli osservabili compatibili hanno autostati comuni e numeri quantici simultanei.`}
  ]}
]},

/* ---------------- 06 · SENSO E ROTTE ---------------- */
{ num:'06', title:'Il senso e le rotte fisiche', meta:'il nucleo che tocca la tesi più da vicino',
  blocchi:[
  {t:'prosa', title:'Cosa hai davvero imparato', tag:'sintesi', html:R`
  <p><b>A monte.</b> Il nucleo 09 dava la geometria (proiezioni, basi ortonormali); il 15 dava la Green come risposta all&rsquo;impulso; il 13 dava i residui. Qui i tre si saldano: la Green è $\mathcal{L}^{-1}$ scritta nella base spettrale, e i proiettori spettrali sono <b>residui del risolvente</b>.</p>
  <p><b>Il punto.</b> Un operatore autoaggiunto porta con sé la propria base. Trovare quella base è <b>risolvere</b> il problema, perché lì l&rsquo;operatore è un numero per ogni modo. Tutta la fisica lineare è la ricerca della base giusta.</p>
  <p><b>A valle.</b> Il nucleo 17 applica questa macchina alle tre EDP archetipe della fisica.</p>`},
  {t:'prolessi', title:'Dove riappare questo nucleo, nella fisica che farai',
   oggetto:R`<b>L&rsquo;operatore autoaggiunto e il suo spettro</b>: $A=\sum\lambda_nP_n$, con la base di autovettori come base &laquo;giusta&raquo;.`,
   rotte:[
    {dove:'Meccanica<br>quantistica', txt:R`È il dizionario completo: osservabile = operatore autoaggiunto; valori misurabili = <b>spettro</b>; probabilità dell&rsquo;esito $n$ = $\lVert P_n\psi\rVert^2$; collasso = applicazione del proiettore; evoluzione = $e^{-iHt/\hbar}$, funzione dell&rsquo;operatore. Osservabili compatibili = operatori che <b>commutano</b> = base comune.`},
    {dove:'Modi normali<br>e stabilità', txt:R`Piccole oscillazioni attorno a un equilibrio: diagonalizzare la matrice hessiana dà i <b>modi normali</b> e le frequenze proprie. Autovalore negativo = direzione instabile. È lo stesso conto che nel nucleo 06 classificava i punti fissi del ritratto di fase, qui in $N$ dimensioni.`},
    {dove:'Meccanica<br>statistica', txt:R`$Z=\mathrm{Tr}\,e^{-\beta H}=\sum_ne^{-\beta E_n}$: la funzione di partizione è una funzione dell&rsquo;operatore, calcolata sullo spettro. Tutta la termodinamica di un sistema quantistico è contenuta nella <b>lista dei suoi autovalori</b> e nel loro addensamento (densità degli stati).`},
    {dove:'Caos quantistico<br>e ETH', txt:R`La <b>statistica delle spaziature</b> distingue integrabile (Poisson) da caotico (GOE/GUE): è la figura della tappa 02. L&rsquo;<b>ETH</b> aggiunge l&rsquo;affermazione sugli autostati — $\langle m|\hat O|n\rangle$ si comporta come una matrice casuale con una parte liscia diagonale — e da lì deriva che un singolo autostato contiene già l&rsquo;informazione termica. <b>È il tuo terreno di tesi, scritto nel linguaggio di questo nucleo.</b>`}
   ],
   domanda:R`Se l&rsquo;evoluzione è $\psi(t)=\sum_nc_ne^{-iE_nt/\hbar}\phi_n$, allora nella base spettrale <b>non succede nulla</b>: solo fasi che ruotano, moduli $|c_n|$ costanti per sempre. Un sistema quantistico chiuso non termalizza mai, in senso stretto. Eppure le osservabili macroscopiche si stabilizzano. La risposta dell&rsquo;ETH è che la termalizzazione non sta nello <b>stato</b> ma nelle <b>osservabili</b>: se gli elementi di matrice $\langle m|\hat O|n\rangle$ fuori diagonale sono minuscoli e pseudo-casuali, le fasi che ruotano si cancellano fra loro e $\langle\hat O\rangle(t)$ si assesta sul valore microcanonico. <b>Domanda che porti avanti:</b> quali proprietà dello <i>spettro</i> (spaziature, degenerazioni, risonanze) rendono quella cancellazione robusta invece che accidentale — e quanto a lungo regge, prima che le ricorrenze di Poincaré la smentiscano? Tutto ciò che serve per porre la domanda con precisione — base ortonormale, proiettori, funzioni di operatori, spettro — è in questo nucleo.`}
]}

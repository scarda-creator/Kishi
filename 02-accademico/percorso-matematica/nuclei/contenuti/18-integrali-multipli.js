/*META
{ "nn":"18",
  "file":"18-integrali-multipli.html",
  "titolo":"Nucleo 02-bis — Integrali multipli: domini, Fubini, cambio di variabili",
  "nome":"Integrali multipli e cambio di variabili",
  "banner":"PERCORSO-MATEMATICA · Movimento I · Nucleo <b>02-bis — Integrali doppi e tripli: domini normali, Fubini, cambio di variabili</b> · Analisi Vettoriale (Terracina) · Esercizio 1 del secondo esonero" }
META*/

/* ---------------- 00 · PERCHÉ QUESTO NUCLEO ---------------- */
{ num:'00', title:'Perché questo nucleo', meta:'AV Terracina, Parte II.7 · è l’Esercizio 1 del secondo esonero, sistematico · e la macchina che regge tutti i teoremi integrali',
  blocchi:[
  {t:'prosa', title:'Il pezzo che mancava, e perché pesa', tag:'first principles', html:R`
  <p>Fin qui il percorso ha trattato l&rsquo;integrazione come <b>risultato</b>: Green, Gauss e Stokes trasformano un integrale in un altro. Ma in ogni compito, prima di applicare un teorema, bisogna <b>calcolare</b> un integrale doppio o triplo — e lì si vince o si perde l&rsquo;esercizio, non sul teorema.</p>
  <p>Il calcolo di un integrale multiplo è, quasi sempre, <b>una scelta e due mestieri</b>: la scelta è <i>in che coordinate</i> guardare il dominio; i mestieri sono <b>descrivere il dominio</b> (in che ordine si integra, con che estremi) e <b>applicare il fattore di distorsione</b> (il modulo del jacobiano). Nessuna delle due difficoltà è concettuale: sono difficoltà di <i>disciplina</i>, ed è per questo che si sbagliano.</p>
  <p>Un avvertimento che vale tutto il nucleo: <b>l&rsquo;integrale non dipende dalle coordinate, il lavoro sì.</b> Lo stesso integrale in cartesiane può costare due pagine e in polari tre righe. Riconoscere quale sistema di coordinate «vede» la simmetria del problema è la vera abilità richiesta.</p>`},
  {t:'prosa', title:'Cosa saprai fare, uscendo di qui', tag:'performance attesa', html:R`
  <ul>
  <li>Riconoscere un <b>dominio normale</b> rispetto a un asse, scriverne gli estremi e applicare <b>Fubini</b> nell&rsquo;ordine giusto — e <b>scambiare l&rsquo;ordine</b> quando il primo non si integra.</li>
  <li>Applicare la formula del <b>cambio di variabili</b> con il <b>modulo</b> del determinante jacobiano, senza dimenticarlo e senza sbagliarne il verso.</li>
  <li>Usare a memoria le tre trasformazioni d&rsquo;esame: <b>polari</b> ($r$), <b>cilindriche</b> ($r$), <b>sferiche</b> ($\rho^2\sin\varphi$).</li>
  <li>Calcolare aree, volumi, masse e baricentri, e riconoscere quando conviene <b>Gauss</b> invece del calcolo diretto.</li>
  </ul>`}
]},

/* ---------------- 01 · DOMINI NORMALI E FUBINI ---------------- */
{ num:'01', title:'Domini normali e teorema di Fubini', meta:'l’integrale doppio come integrale iterato · scegliere l’ordine · scambiarlo quando serve',
  blocchi:[
  {t:'prosa', title:'Dal volume all’integrale iterato', tag:'costruzione', html:R`
  <p>L&rsquo;integrale doppio $\displaystyle\iint_D f(x,y)\,dA$ è, per $f\ge0$, il <b>volume</b> sotto il grafico sopra $D$. Il modo di calcolarlo è ridurlo a due integrazioni in cascata, e per farlo il dominio va descritto come <b>normale</b>.</p>
  <p><b>Dominio normale rispetto a $x$</b> (si «taglia» con rette verticali):
  $$D=\{(x,y):\ a\le x\le b,\ \ g_1(x)\le y\le g_2(x)\}\ \Longrightarrow\ \iint_Df\,dA=\int_a^b\!\!\left(\int_{g_1(x)}^{g_2(x)}f(x,y)\,dy\right)dx.$$
  <b>Rispetto a $y$</b> è la stessa cosa a ruoli scambiati. <b>Teorema di Fubini</b> (per $f$ continua su un dominio limitato e regolare): i due ordini danno lo <b>stesso</b> risultato.</p>
  <div class="note warn"><b>Il metodo che non sbaglia.</b> <b>(1)</b> Disegna il dominio, sempre — anche brutto. <b>(2)</b> Decidi la variabile «esterna» e falla variare in un intervallo di <b>numeri</b>. <b>(3)</b> A quella fissata, guarda il segmento che il dominio ritaglia: gli estremi della variabile interna sono <b>funzioni</b> di quella esterna. <b>Errore n.1 d&rsquo;esame: estremi interni costanti quando dovrebbero dipendere dall&rsquo;altra variabile.</b> Se ti escono tutti e quattro gli estremi numerici, o il dominio è un rettangolo, o hai sbagliato.</div>`},
  {t:'plot', title:'Lo stesso dominio, due ordini di integrazione',
   intro:R`Il dominio fra la parabola $y=x^2$ e la retta $y=x$. A sinistra tagliato in verticale (normale rispetto a $x$), a destra in orizzontale (rispetto a $y$).`,
   plots:[
    {kind:'func2d', xr:[-0.15,1.15], yr:[-0.15,1.15], equal:true, height:320, w:430,
     title:'verticale: x da 0 a 1, y da x^2 a x',
     curves:[{f:'x*x', col:'#4c8dff', width:2.2, label:'y = x²'},
             {f:'x', col:'#d8a13a', width:2.2, label:'y = x'}],
     segs:[{x1:0.25,y1:0.0625,x2:0.25,y2:0.25,col:'#5eead4',width:2.4},
           {x1:0.5,y1:0.25,x2:0.5,y2:0.5,col:'#5eead4',width:2.4},
           {x1:0.75,y1:0.5625,x2:0.75,y2:0.75,col:'#5eead4',width:2.4}]},
    {kind:'func2d', xr:[-0.15,1.15], yr:[-0.15,1.15], equal:true, height:320, w:430,
     title:'orizzontale: y da 0 a 1, x da y a radice(y)',
     curves:[{f:'x*x', col:'#4c8dff', width:2.2, label:'y = x²'},
             {f:'x', col:'#d8a13a', width:2.2, label:'y = x'}],
     segs:[{x1:0.25,y1:0.25,x2:0.5,y2:0.25,col:'#b98cff',width:2.4},
           {x1:0.5,y1:0.5,x2:0.7071,y2:0.5,col:'#b98cff',width:2.4},
           {x1:0.75,y1:0.75,x2:0.866,y2:0.75,col:'#b98cff',width:2.4}]}
   ],
   leggi:R`A sinistra fissi $x$ e leggi il <b>segmento verticale</b> che il dominio ritaglia: va da $y=x^2$ (parabola, sotto) a $y=x$ (retta, sopra). Quindi $\int_0^1\!\int_{x^2}^{x}f\,dy\,dx$. A destra fissi $y$ e leggi il <b>segmento orizzontale</b>: va da $x=y$ a $x=\sqrt y$ — nota che i ruoli si invertono, perché per $0\lt y\lt1$ è $y\lt\sqrt y$. Quindi $\int_0^1\!\int_{y}^{\sqrt y}f\,dx\,dy$. <b>Le due scritture valgono lo stesso numero</b> (Fubini) ma <b>non costano lo stesso</b>: con $f=e^{y/x}$ il primo ordine è impossibile in forma chiusa e il secondo pure; con $f$ funzione della sola $y$ conviene il secondo. <b>La mossa d&rsquo;esame</b> è proprio questa: se l&rsquo;integrale interno non si fa, non insistere — <b>riscrivi il dominio nell&rsquo;altro ordine</b>. Un integrale come $\int_0^1\!\int_{y}^{1}e^{-x^2}dx\,dy$ sembra impossibile ($e^{-x^2}$ non ha primitiva elementare) e diventa immediato scambiando: $\int_0^1\!\int_0^{x}e^{-x^2}dy\,dx=\int_0^1xe^{-x^2}dx$.`},
  {t:'collaudo', title:'Controllo lampo', items:[
   {q:R`Come riconosci, guardando il disegno, se conviene integrare prima in $y$ o prima in $x$?`,
    a:R`Guarda quale famiglia di segmenti (verticali o orizzontali) taglia il dominio con <b>una sola</b> coppia di estremi. Se tagliando in verticale il segmento entra ed esce dalla stessa curva per ogni $x$, il dominio è normale rispetto a $x$ e quell&rsquo;ordine è pulito; se invece per certe $x$ il segmento si spezza in due tratti, quell&rsquo;ordine ti obbliga a <b>spezzare il dominio</b> in più pezzi — prova l&rsquo;altro. Secondo criterio, indipendente: <b>quale integrale interno so effettivamente calcolare</b>.`}
  ]}
]},

/* ---------------- 02 · CAMBIO DI VARIABILI ---------------- */
{ num:'02', title:'Il cambio di variabili e il jacobiano', meta:'$dA=|\\det J|\\,du\\,dv$ · perché il MODULO · le polari',
  blocchi:[
  {t:'reveal', title:'La formula, e da dove viene il fattore', tag:'derivazione', steps:[
   {label:'Enunciato', body:R`<p>Sia $\Phi:(u,v)\mapsto(x,y)$ di classe $C^1$, <b>iniettiva</b> con jacobiano non nullo (salvo insiemi trascurabili), che manda $D'$ su $D$. Allora
   $$\iint_D f(x,y)\,dx\,dy=\iint_{D'}f\big(\Phi(u,v)\big)\,\big|\det J_\Phi(u,v)\big|\,du\,dv,\qquad
   J_\Phi=\begin{pmatrix}x_u & x_v\\ y_u & y_v\end{pmatrix}.$$</p>`},
   {label:'Perché compare il determinante', body:R`<p>È il nucleo 01 applicato all&rsquo;area. Vicino a un punto, $\Phi$ è approssimata dalla sua <b>applicazione lineare</b> $J_\Phi$ (differenziabilità). Un&rsquo;applicazione lineare manda il quadratino $du\times dv$ in un <b>parallelogramma</b>, e l&rsquo;area di quel parallelogramma è $|\det J|\,du\,dv$ — è il significato geometrico del determinante. Sommando i contributi, l&rsquo;elemento d&rsquo;area si trasforma con quel fattore. $\blacksquare$</p>`},
   {label:'Perché il MODULO', body:R`<div class="note warn">Il determinante può essere <b>negativo</b>: significa che $\Phi$ inverte l&rsquo;orientazione (come uno specchio). Ma l&rsquo;<b>area</b> è positiva, quindi nella formula compare $|\det J|$. <b>È l&rsquo;errore n.2 d&rsquo;esame</b>, e non è pignoleria: scambiando l&rsquo;ordine dei parametri il segno cambia, e senza modulo l&rsquo;integrale esce negativo.
   <p>Attenzione a non confondere due situazioni che si somigliano: qui il modulo <b>ci va</b>; nel <b>flusso</b> attraverso una superficie (nucleo 03) il modulo <b>non</b> ci va, perché lì il verso della normale è parte del risultato. Area e massa non hanno segno; il flusso sì.</p></div>`}
  ]},
  {t:'gram', title:'Le tre trasformazioni da sapere a memoria', rows:[
   [R`<b>polari</b> (2D)`, R`$x=r\cos\theta,\ y=r\sin\theta$; $\ \det J=r$, quindi $dA=r\,dr\,d\theta$. Dominio tipico: cerchi, corone, settori. <b>La $r$ dimenticata è l&rsquo;errore più comune in assoluto.</b>`],
   [R`<b>cilindriche</b> (3D)`, R`$x=r\cos\theta,\ y=r\sin\theta,\ z=z$; $\ dV=r\,dr\,d\theta\,dz$. Per solidi con simmetria attorno a un asse (cilindri, coni, paraboloidi).`],
   [R`<b>sferiche</b> (3D)`, R`$x=\rho\sin\varphi\cos\theta,\ y=\rho\sin\varphi\sin\theta,\ z=\rho\cos\varphi$; $\ dV=\rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta$, con $\varphi\in[0,\pi]$ colatitudine. Per sfere, calotte, coni pieni.`],
   [R`<b>lineari</b>`, R`$\Phi$ lineare: $|\det J|$ è <b>costante</b> e si porta fuori. Utile per ellissi ($x=a u$, $y=b v$ dà $|\det J|=ab$ e il cerchio unitario) e per domini delimitati da rette come $x+y=c$, $x-y=c$ (si pone $u=x+y$, $v=x-y$).`],
   [R`<b>il verso comodo</b>`, R`Spesso è più facile scrivere $u,v$ in funzione di $x,y$: allora si calcola $\det J_{(u,v)/(x,y)}$ e si usa $|\det J_\Phi|=1/|\det J_{(u,v)/(x,y)}|$ (jacobiano dell&rsquo;inversa). Legittimo e più rapido.`]
  ]},
  {t:'plot', title:'La mappa polare: come un rettangolo diventa una corona',
   intro:R`La trasformazione $\Phi(r,\theta)=(r\cos\theta,\ r\sin\theta)$ vista come <b>superficie parametrica</b>: il rettangolo $[0{,}4;1]\times[0;2\pi]$ del piano dei parametri diventa la corona circolare. <b>Trascina per ruotare.</b>`,
   plots:[
    {kind:'param3d', x:'u*cos(v)', y:'u*sin(v)', z:'0*u+0*v', ur:[0.4,1], vr:[0,6.28319],
     nu:10, nv:40, w:560, height:330, yaw:0.2, pitch:1.35, alpha:0.9,
     title:'la maglia si allarga verso l\'esterno: e il fattore r'}
   ],
   leggi:R`Guarda la <b>maglia</b>: i quadrilateri vicino al bordo interno sono <b>stretti</b>, quelli verso il bordo esterno <b>larghi</b>. Eppure nel piano dei parametri erano tutti uguali — passi identici in $r$ e in $\theta$. <b>Quello stiramento è esattamente il fattore $r$</b>: a raggio doppio, lo stesso $\Delta\theta$ copre un arco doppio, quindi la stessa cella dei parametri copre area doppia. Ecco perché $dA=r\,dr\,d\theta$ e non $dr\,d\theta$: <b>il jacobiano non è una formula da ricordare, è la misura di quanto la mappa stira</b>. Nota anche il caso limite: in $r=0$ le celle collassano, il jacobiano si annulla e la trasformazione non è iniettiva (tutti i $\theta$ danno lo stesso punto) — è il «salvo insiemi trascurabili» dell&rsquo;enunciato, e non dà problemi perché un punto non contribuisce all&rsquo;area. Stessa lettura in 3D per $\rho^2\sin\varphi$: il fattore è grande all&rsquo;equatore e si annulla ai poli, dove i meridiani si stringono.`},
  {t:'esercizio', title:'Esercizio guidato: $\\iint_D e^{-(x^2+y^2)}dA$ sul cerchio di raggio $R$',
   src:'tipo standard — la polare che salva la vita',
   testo:R`Calcolare $\displaystyle\iint_{D}e^{-(x^2+y^2)}\,dx\,dy$ con $D=\{x^2+y^2\le R^2\}$, e dedurne il valore dell&rsquo;integrale di Gauss $\int_{-\infty}^{+\infty}e^{-x^2}dx$.`,
   steps:[
    {label:'Perché le polari', body:R`<p>In cartesiane l&rsquo;integrale interno $\int e^{-x^2}dx$ <b>non ha primitiva elementare</b>: la strada è chiusa. Ma il dominio è un cerchio e l&rsquo;integranda dipende solo da $x^2+y^2=r^2$: in polari <b>entrambe</b> le difficoltà spariscono.</p>`},
    {label:'Il conto', body:R`<p>$$\iint_De^{-(x^2+y^2)}dA=\int_0^{2\pi}\!\!\int_0^{R}e^{-r^2}\,\underbrace{r\,dr}_{\text{jacobiano}}\,d\theta=2\pi\int_0^Re^{-r^2}r\,dr=2\pi\left[-\tfrac12e^{-r^2}\right]_0^R=\pi\big(1-e^{-R^2}\big).$$
    <b>È la $r$ del jacobiano a rendere l&rsquo;integrale elementare</b> (senza, $\int e^{-r^2}dr$ sarebbe di nuovo impossibile): un caso in cui il fattore dimenticato non solo sbaglia il risultato, ma nasconde la soluzione.</p>`},
    {label:'L’integrale di Gauss', body:R`<p>Per $R\to\infty$ il risultato tende a $\pi$. D&rsquo;altra parte, su tutto il piano l&rsquo;integrale si fattorizza:
    $$\iint_{\mathbb{R}^2}e^{-(x^2+y^2)}dA=\left(\int_{-\infty}^{+\infty}e^{-x^2}dx\right)^{\!2}=\pi\ \Longrightarrow\ \int_{-\infty}^{+\infty}e^{-x^2}dx=\sqrt\pi.\qquad\blacksquare$$
    Lo stesso $\sqrt\pi$ che il nucleo 14 ottiene da $\Gamma(1/2)$: due strade, un numero.</p>`}
   ],
   nota:R`Questo è <b>il</b> conto da avere in tasca: la gaussiana normalizzata della meccanica statistica, della teoria degli errori e del pacchetto d&rsquo;onda esce da qui.`}
]},

/* ---------------- 03 · TRIPLI ---------------- */
{ num:'03', title:'Integrali tripli: cilindriche e sferiche', meta:'descrivere un solido · scegliere le coordinate che vedono la simmetria · volumi e masse',
  blocchi:[
  {t:'prosa', title:'Il metodo, identico ma con un ordine in più', tag:'saper fare', html:R`
  <p>Per $\displaystyle\iiint_V f\,dV$ valgono le stesse regole, con una scelta in più. Due strategie di descrizione:</p>
  <ul>
  <li><b>Per fili</b> (dominio normale rispetto al piano $xy$): $V=\{(x,y)\in D,\ h_1(x,y)\le z\le h_2(x,y)\}$, e si integra prima in $z$, poi sul dominio piano $D$ con le tecniche della tappa 01-02. <b>È la strada standard</b>: solidi «fra due superfici».</li>
  <li><b>Per fette</b> (normale rispetto a un asse): $\displaystyle\iiint_VfdV=\int_{z_1}^{z_2}\left(\iint_{D_z}f\,dA\right)dz$, con $D_z$ la sezione a quota $z$. Conviene quando le sezioni sono figure semplici di area nota — per il volume, $V=\int A(z)\,dz$.</li>
  </ul>
  <p><b>Come si sceglie il sistema di coordinate:</b> guarda le <b>superfici che delimitano</b> il solido. Se compaiono $x^2+y^2$ (cilindri, coni, paraboloidi) → <b>cilindriche</b>. Se compare $x^2+y^2+z^2$ (sfere, calotte) → <b>sferiche</b>. Se il solido è un poliedro o un parallelepipedo deformato → <b>lineari</b>. La scelta giusta rende gli estremi <b>costanti</b>, ed è quello il segnale che hai scelto bene.</p>`},
  {t:'esercizio', title:'Esercizio guidato: volume della calotta e momento d’inerzia',
   src:'tipo standard — sferiche con estremi non banali',
   testo:R`(a) Calcolare il volume del solido racchiuso fra il cono $z=\sqrt{x^2+y^2}$ e la sfera $x^2+y^2+z^2=a^2$ (la «coppa di gelato»). (b) Calcolarne il momento d&rsquo;inerzia rispetto all&rsquo;asse $z$ per densità costante $\mu$.`,
   steps:[
    {label:'Le coordinate e gli estremi', body:R`<p>Ci sono sia $x^2+y^2$ sia $x^2+y^2+z^2$, ma la sfera domina: <b>sferiche</b>. La sfera dà $\rho\le a$. Il cono $z=\sqrt{x^2+y^2}$ in sferiche diventa $\rho\cos\varphi=\rho\sin\varphi$, cioè $\tan\varphi=1$, cioè $\varphi=\pi/4$: <b>una superficie coordinata</b> — ecco perché queste coordinate sono le giuste. Quindi
    $$\rho\in[0,a],\qquad \varphi\in[0,\pi/4],\qquad \theta\in[0,2\pi],$$
    tutti <b>costanti</b>: il segnale che la scelta è quella buona.</p>`},
    {label:'(a) il volume', body:R`<p>$$V=\int_0^{2\pi}\!\!\int_0^{\pi/4}\!\!\int_0^{a}\rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta
    =2\pi\cdot\frac{a^3}{3}\cdot\big[-\cos\varphi\big]_0^{\pi/4}=\frac{2\pi a^3}{3}\left(1-\frac{\sqrt2}{2}\right).$$
    <b>Controllo di plausibilità:</b> il fattore $(1-\frac{\sqrt2}{2})\approx0{,}29$ dice che la coppa è circa il $29\%$ della semisfera piena — plausibile per un cono a $45°$.</p>`},
    {label:'(b) il momento d’inerzia', body:R`<p>Serve $I_z=\mu\displaystyle\iiint_V(x^2+y^2)\,dV$, e $x^2+y^2=\rho^2\sin^2\varphi$:
    $$I_z=\mu\int_0^{2\pi}\!\!\int_0^{\pi/4}\!\!\int_0^{a}\rho^2\sin^2\varphi\cdot\rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta
    =2\pi\mu\,\frac{a^5}{5}\int_0^{\pi/4}\sin^3\varphi\,d\varphi.$$
    Con $\int\sin^3=\int(1-\cos^2)\sin=-\cos\varphi+\frac{\cos^3\varphi}{3}$, valutato fra $0$ e $\pi/4$ dà $\frac23-\frac{5\sqrt2}{12}$. Quindi $I_z=\frac{2\pi\mu a^5}{5}\left(\frac23-\frac{5\sqrt2}{12}\right)$. $\blacksquare$</p>
    <div class="note">Da notare, perché torna in Meccanica: il momento d&rsquo;inerzia è un integrale con peso $x^2+y^2$ = <b>distanza al quadrato dall&rsquo;asse</b>. Cambiare asse cambia il peso, non il metodo. Baricentro, massa, momento: sono tutti $\iiint$ della densità per un peso diverso.</div>`}
   ],
   nota:R`Schema riusabile: <b>(1)</b> quali superfici delimitano il solido → quali coordinate; <b>(2)</b> traduci ogni superficie in un&rsquo;equazione nelle coordinate scelte e leggi gli estremi; <b>(3)</b> non dimenticare il jacobiano ($r$ o $\rho^2\sin\varphi$); <b>(4)</b> controlla che il risultato abbia le dimensioni giuste (un volume va come $a^3$, un momento d&rsquo;inerzia come $\mu a^5$).`},
  {t:'collaudo', title:'Controllo lampo', items:[
   {q:R`In sferiche l&rsquo;angolo $\varphi$ va da $0$ a $\pi$ e $\theta$ da $0$ a $2\pi$, e non viceversa. Perché?`,
    a:R`Perché $\varphi$ è la <b>colatitudine</b> (l&rsquo;angolo dal polo nord) e basta mezzo giro per andare da polo a polo; $\theta$ è la <b>longitudine</b> e serve il giro intero. Se li scambi ottieni una copertura doppia della sfera e un volume <b>doppio</b>. Controllo rapido: la sfera piena deve dare $\frac43\pi a^3$; se ti esce $\frac83\pi a^3$, hai invertito i ruoli.`},
   {q:R`Quando conviene calcolare un flusso con <b>Gauss</b> invece che direttamente?`,
    a:R`Quasi sempre, se la superficie è <b>chiusa</b>: $\oiint_{\partial V}\mathbf F\cdot\mathbf n\,dS=\iiint_V\nabla\cdot\mathbf F\,dV$ (nucleo 05) sostituisce un integrale di superficie — spesso su più facce, ognuna con la sua parametrizzazione — con <b>un solo</b> integrale triplo. La convenienza si ribalta solo se $\nabla\cdot\mathbf F$ è complicata e la superficie è una sola faccia semplice. <b>È la ragione per cui questo nucleo e il 05 vanno usati insieme:</b> l&rsquo;Esercizio 1 del secondo esonero spesso chiede proprio «flusso via Gauss», cioè un triplo travestito da flusso.`}
  ]}
]},

/* ---------------- 04 · ESERCIZI ---------------- */
{ num:'04', title:'Esercizi — tocca a te', meta:'scambio dell’ordine · area con trasformazione lineare · solido di rotazione',
  blocchi:[
  {t:'esercizio', title:'Scambiare l’ordine per rendere possibile l’integrale',
   src:'esercizio guidato — la mossa che sblocca',
   testo:R`Calcolare $\displaystyle\int_0^1\!\!\int_{\sqrt y}^{1}\frac{\sin x}{x}\,dx\,dy$.`,
   steps:[
    {label:'Perché così non si può', body:R`<p>$\int\frac{\sin x}{x}dx$ non è elementare (è il seno integrale $\mathrm{Si}$, nucleo 13): l&rsquo;integrale interno, così com&rsquo;è scritto, è un vicolo cieco. Quando succede, la mossa è <b>una sola</b>: riscrivere il dominio.</p>`},
    {label:'Il dominio', body:R`<p>Le condizioni sono $0\le y\le1$ e $\sqrt y\le x\le1$, cioè $y\le x^2$ con $0\le x\le 1$. Letto per fili verticali: <b>$x$ da $0$ a $1$, $y$ da $0$ a $x^2$</b>.</p>`},
    {label:'Il conto', body:R`<p>$$\int_0^1\!\!\int_0^{x^2}\frac{\sin x}{x}\,dy\,dx=\int_0^1\frac{\sin x}{x}\cdot x^2\,dx=\int_0^1 x\sin x\,dx=\big[\sin x-x\cos x\big]_0^1=\sin1-\cos1.$$
    $\blacksquare$ La $x$ del dominio ha <b>cancellato</b> la $x$ al denominatore: è il motivo per cui l&rsquo;esercizio è costruito così.</p>`}
   ],
   nota:R`Riconoscimento: <b>se l&rsquo;integranda dipende dalla variabile INTERNA in modo non integrabile, scambia.</b> È un tipo d&rsquo;esame classico, e la difficoltà è tutta nel riscrivere correttamente il dominio — disegnalo.`},
  {t:'collaudo', title:'Diagnostica rapida', items:[
   {q:R`Area della regione delimitata da $x+y=1$, $x+y=3$, $x-y=0$, $x-y=2$: come la calcoli in tre righe?`,
    a:R`Con la trasformazione <b>lineare</b> $u=x+y$, $v=x-y$: la regione diventa il rettangolo $[1,3]\times[0,2]$. Il jacobiano dell&rsquo;inversa: $\det\frac{\partial(u,v)}{\partial(x,y)}=\begin{vmatrix}1&1\\1&-1\end{vmatrix}=-2$, quindi $|\det J_\Phi|=\frac12$ e l&rsquo;area è $\frac12\cdot(2\cdot2)=2$. <b>Quando il dominio è delimitato da quattro rette a due a due parallele, le nuove variabili sono le equazioni stesse delle rette.</b>`},
   {q:R`Perché il volume di un solido di rotazione si può scrivere sia come $\pi\int f(x)^2dx$ sia come integrale triplo?`,
    a:R`Perché sono lo stesso conto a due livelli di dettaglio. L&rsquo;integrale triplo in <b>cilindriche</b> del solido ottenuto ruotando il grafico di $f$ attorno all&rsquo;asse: $\int\!\!\int\!\!\int r\,dr\,d\theta\,dz=\int dz\int_0^{2\pi}\!d\theta\int_0^{f(z)}\!r\,dr=\int 2\pi\frac{f(z)^2}{2}dz=\pi\int f(z)^2dz$. La formula dei «dischi» che conosci da Analisi 1 <b>è</b> l&rsquo;integrale triplo con le integrazioni banali già svolte.`}
  ]}
]},

/* ---------------- 05 · SENSO E ROTTE ---------------- */
{ num:'05', title:'Il senso e le rotte fisiche', meta:'integrare su un dominio è sommare una densità: da qui in poi, ovunque',
  blocchi:[
  {t:'prosa', title:'Cosa hai davvero imparato', tag:'sintesi', html:R`
  <p><b>A monte.</b> Il jacobiano non è una regola mnemonica: è l&rsquo;<b>approssimazione lineare</b> del nucleo 01 applicata all&rsquo;area, e il determinante è il fattore di dilatazione di una mappa lineare. Il modulo c&rsquo;è perché l&rsquo;area non ha segno.</p>
  <p><b>Il punto.</b> Un integrale multiplo è <b>una densità sommata su un dominio</b>. Tutta la difficoltà pratica sta in due gesti: descrivere il dominio (Fubini, l&rsquo;ordine giusto) e scegliere le coordinate che ne vedono la simmetria.</p>
  <p><b>A valle.</b> I teoremi integrali (nucleo 05) trasformano questi integrali gli uni negli altri, e la scelta fra calcolo diretto e Gauss è una decisione di convenienza. Il nucleo 10 (Lebesgue) dirà <i>perché</i> l&rsquo;integrale è ben definito anche su domini brutti.</p>`},
  {t:'prolessi', title:'Dove riappare questo nucleo, nella fisica che farai',
   oggetto:R`<b>L&rsquo;integrale multiplo</b>: sommare una densità su un dominio, nelle coordinate che ne vedono la simmetria.`,
   rotte:[
    {dove:'Meccanica', txt:R`Massa, <b>baricentro</b> e <b>momento d&rsquo;inerzia</b> di un corpo esteso sono tre integrali della stessa densità con pesi diversi ($1$, $\mathbf r$, $d^2$). Il tensore d&rsquo;inerzia è la matrice di tutti questi integrali insieme.`},
    {dove:'Elettromagnetismo', txt:R`Il potenziale di una distribuzione di carica è $\int\frac{\rho\,dV}{4\pi\varepsilon_0|\mathbf r-\mathbf r'|}$: un integrale triplo, quasi sempre da fare in sferiche o cilindriche sfruttando la simmetria — che è anche ciò che rende utilizzabile Gauss.`},
    {dove:'Meccanica<br>statistica', txt:R`La funzione di partizione è un integrale su tutto lo <b>spazio delle fasi</b>: $Z=\frac{1}{h^{3N}}\int e^{-\beta H}d^{3N}q\,d^{3N}p$ — un integrale multiplo in $6N$ dimensioni. Il cambio di variabili verso le coordinate normali (nucleo 16) è ciò che lo rende calcolabile, e il jacobiano di quel cambio è parte del risultato.`},
    {dove:'Probabilità', txt:R`Una densità di probabilità congiunta si integra su una regione per dare la probabilità di quell&rsquo;evento; il cambio di variabili con $|\det J|$ è <b>esattamente</b> la formula di trasformazione delle densità di variabili aleatorie. Stessa matematica, altro nome.`}
   ],
   domanda:R`Il fattore $|\det J|$ dice quanto una trasformazione <b>comprime o dilata</b> il volume. In meccanica hamiltoniana c&rsquo;è un teorema che dice che l&rsquo;evoluzione temporale ha jacobiano <b>esattamente 1</b> (Liouville, nucleo 06): il volume nello spazio delle fasi non si comprime mai. <b>Domanda che porti avanti:</b> se il volume si conserva esattamente, come può un sistema «occupare tutto lo spazio accessibile» e termalizzare? La risposta è che il volume si conserva ma si <b>deforma</b>, allungandosi in filamenti sempre più sottili che si intrecciano ovunque — e a quel punto la domanda diventa: su quale scala smetti di distinguere un filamento sottile da una nuvola uniforme? Quella scala, e non la dinamica, è dove nasce l&rsquo;irreversibilità.`}
]}

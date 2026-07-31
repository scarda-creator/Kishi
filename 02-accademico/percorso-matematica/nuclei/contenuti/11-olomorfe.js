/*META
{ "nn":"11",
  "file":"11-olomorfe.html",
  "titolo":"Nucleo 11 — Funzioni olomorfe: Cauchy–Riemann, armoniche coniugate, funzioni elementari",
  "nome":"Funzioni olomorfe e Cauchy–Riemann",
  "banner":"PERCORSO-MATEMATICA · Movimento III · Nucleo <b>11 — Funzioni olomorfe: Cauchy–Riemann, armoniche coniugate, polidromia</b> · Metodi Matematici della Fisica" }
META*/

/* ---------------- 00 · PERCHÉ QUESTO NUCLEO ---------------- */
{ num:'00', title:'Perché questo nucleo', meta:'Metodi · l’analisi complessa è metà dell’esame · una sola condizione di derivabilità impone una rigidità totale',
  blocchi:[
  {t:'prosa', title:'Il miracolo, detto subito', tag:'first principles', html:R`
  <p>In una variabile reale, derivabile una volta non dice quasi nulla: esistono funzioni derivabili con derivata discontinua, derivabili una volta e non due, $C^\infty$ che non sono somma della propria serie di Taylor. La derivabilità reale è una condizione <b>debole</b>.</p>
  <p>In campo complesso accade l&rsquo;opposto. Chiedere che esista il limite
  $$f'(z_0)=\lim_{h\to0}\frac{f(z_0+h)-f(z_0)}{h},\qquad h\in\mathbb{C},$$
  è chiedere <b>molto</b>: $h$ può tendere a zero da <i>qualunque</i> direzione del piano, e il rapporto incrementale deve dare sempre lo stesso numero. Da questa singola richiesta segue una cascata che non ha analogo reale: la funzione è automaticamente <b>infinitamente derivabile</b>, è <b>analitica</b> (somma della propria serie di potenze), le sue parti reale e immaginaria sono <b>armoniche</b>, il suo valore dentro un dominio è determinato dai <b>soli valori sul bordo</b> (nucleo 12), e se è limitata su tutto $\mathbb{C}$ è <b>costante</b>.</p>
  <p>Il nome tecnico di questa condizione è <b>olomorfia</b>, e la sua traduzione in coordinate sono le equazioni di <b>Cauchy&ndash;Riemann</b>. Tutto il Movimento III è lo srotolamento di questa singola idea: <b>derivabilità complessa = rigidità</b>.</p>`},
  {t:'prosa', title:'Cosa saprai fare, uscendo di qui', tag:'performance attesa', html:R`
  <ul>
  <li>Verificare l&rsquo;olomorfia di una funzione con <b>Cauchy&ndash;Riemann</b>, e dire dove fallisce (tipico: $\bar z$, $|z|^2$, $\mathrm{Re}\,z$).</li>
  <li>Data una funzione <b>armonica</b> $u$, costruirne la <b>coniugata</b> $v$ e ricomporre $f=u+iv$ come funzione di $z$ — l&rsquo;esercizio in crescita nei compiti.</li>
  <li>Maneggiare $e^z$, $\sin z$, $\cos z$, e soprattutto $\log z$ e $z^\alpha$ con la loro <b>polidromia</b>: scegliere una determinazione, tracciare il <b>taglio</b>, sapere di quanto salta la funzione attraversandolo.</li>
  <li>Riconoscere che una mappa olomorfa con $f'\ne0$ è <b>conforme</b> (conserva gli angoli), e perché questo la rende lo strumento dei problemi piani di elettrostatica e fluidodinamica.</li>
  </ul>`}
]},

/* ---------------- 01 · DERIVATA COMPLESSA E CAUCHY–RIEMANN ---------------- */
{ num:'01', title:'La derivata complessa e le equazioni di Cauchy–Riemann', meta:'una condizione, non due · $u_x=v_y$, $u_y=-v_x$ · perché $\\bar z$ non è derivabile in nessun punto',
  blocchi:[
  {t:'prosa', title:'La definizione, e la trappola che contiene', tag:'first principles', html:R`
  <p>$f$ è <b>derivabile in senso complesso</b> in $z_0$ se esiste $f'(z_0)=\lim_{h\to0}\frac{f(z_0+h)-f(z_0)}{h}$ con $h\in\mathbb{C}$. Si dice <b>olomorfa</b> in un aperto $\Omega$ se è derivabile in ogni punto di $\Omega$ (attenzione: derivabile in un <i>singolo</i> punto non basta a nulla; l&rsquo;olomorfia è una proprietà d&rsquo;aperto).</p>
  <p>La formula è identica al caso reale, ma $h$ è un <b>numero complesso</b>: può avvicinarsi a $0$ lungo l&rsquo;asse reale, lungo l&rsquo;asse immaginario, a spirale. Il limite deve esistere ed essere lo stesso in tutti i casi. Confrontare due sole di queste direzioni basta a produrre le equazioni di Cauchy&ndash;Riemann.</p>`},
  {t:'reveal', title:'Derivazione di Cauchy–Riemann, in due direzioni', tag:'derivazione', steps:[
   {label:'Avvicinarsi lungo l&rsquo;asse reale', body:R`<p>Scrivi $f=u(x,y)+iv(x,y)$, $z=x+iy$. Con $h=t$ reale, $t\to0$:
   $$f'(z)=\lim_{t\to0}\frac{f(x+t+iy)-f(x+iy)}{t}=u_x+iv_x.$$
   La derivata complessa, calcolata per direzione orizzontale, è la derivata parziale in $x$.</p>`},
   {label:'Avvicinarsi lungo l&rsquo;asse immaginario', body:R`<p>Con $h=it$, $t\to0$ reale — e ricordando che dividere per $i$ significa moltiplicare per $-i$:
   $$f'(z)=\lim_{t\to0}\frac{f(x+i(y+t))-f(x+iy)}{it}=\frac1i\big(u_y+iv_y\big)=v_y-iu_y.$$</p>`},
   {label:'Uguagliare parte reale e immaginaria', body:R`<p>I due valori devono coincidere, quindi $u_x=v_y$ e $v_x=-u_y$:
   $$\boxed{\ u_x=v_y,\qquad u_y=-v_x\ }\qquad\text{(Cauchy–Riemann)}$$
   e la derivata si scrive in quattro modi equivalenti: $f'=u_x+iv_x=v_y-iu_y=u_x-iu_y=v_y+iv_x$. $\blacksquare$</p>
   <div class="note"><b>Attenzione all&rsquo;implicazione.</b> CR è <b>necessaria</b>, non da sola sufficiente: servono anche $u,v$ <b>differenziabili</b> (nucleo 01!). Se $u,v$ hanno derivate parziali <b>continue</b> in un intorno e valgono CR, allora $f$ è olomorfa (teorema di Goursat&ndash;Looman): è il criterio che si usa all&rsquo;esame. Un controesempio classico di CR verificate senza olomorfia esiste, ma vive solo in un punto isolato.</div>`}
  ]},
  {t:'gram', title:'Il repertorio da riconoscere a colpo d’occhio', rows:[
   [R`$z^n$, polinomi`, R`olomorfe su tutto $\mathbb{C}$ (<b>intere</b>). $(z^n)'=nz^{n-1}$: le regole di derivazione reali valgono tutte (somma, prodotto, quoziente, catena).`],
   [R`$e^z,\ \sin z,\ \cos z$`, R`intere. $e^z=e^x(\cos y+i\sin y)$; $\sin z=\frac{e^{iz}-e^{-iz}}{2i}$. <b>Non sono limitate</b>: $\sin(iy)=i\sinh y\to\infty$. È un&rsquo;abitudine reale da perdere.`],
   [R`$1/z$, funzioni razionali`, R`olomorfe fuori dagli zeri del denominatore. I punti esclusi sono le <b>singolarità</b> — l&rsquo;oggetto dei nuclei 12 e 13.`],
   [R`$\bar z$`, R`<b>mai</b> olomorfa: $u=x,\ v=-y$ danno $u_x=1\ne v_y=-1$. Il prototipo del non-olomorfo.`],
   [R`$|z|^2=z\bar z$`, R`derivabile <b>solo</b> in $z=0$ (dove CR valgono, ma isolatamente), quindi <b>olomorfa in nessun aperto</b>. Classico d&rsquo;esame.`],
   [R`$\mathrm{Re}\,z$, $|z|$, $\arg z$`, R`non olomorfe: dipendono da $\bar z$. <b>Regola pratica:</b> se nell&rsquo;espressione compare $\bar z$ (anche mascherato da $x$, $y$, $|z|$), quasi certamente non è olomorfa.`]
  ]},
  {t:'prosa', title:'La forma che spiega tutto: $\\partial f/\\partial\\bar z=0$', tag:'sintesi', html:R`
  <p>Introducendo gli operatori di Wirtinger $\dfrac{\partial}{\partial z}=\dfrac12\left(\partial_x-i\partial_y\right)$ e $\dfrac{\partial}{\partial\bar z}=\dfrac12\left(\partial_x+i\partial_y\right)$, un conto di due righe mostra che Cauchy&ndash;Riemann equivale a
  $$\frac{\partial f}{\partial\bar z}=0.$$
  <b>Una funzione è olomorfa quando non dipende da $\bar z$</b>: dipende da $z$ &laquo;soltanto&raquo;. È il modo più veloce per giudicare a occhio, ed è il senso profondo della rigidità — le funzioni olomorfe sono la metà &laquo;analitica&raquo; delle funzioni di due variabili reali, quelle che si scrivono nella sola combinazione $x+iy$.</p>`},
  {t:'collaudo', title:'Controllo lampo', items:[
   {q:R`$f(z)=z\,\mathrm{Re}\,z$: dove è derivabile in senso complesso?`,
    a:R`Solo in $z=0$, e quindi olomorfa in nessun aperto. Con $f=(x+iy)x=x^2+ixy$: $u=x^2$, $v=xy$, quindi $u_x=2x$, $v_y=x$, $u_y=0$, $v_x=y$. CR chiede $2x=x$ e $0=-y$, cioè $x=y=0$. Alternativa più rapida: $f=z\frac{z+\bar z}{2}$ dipende da $\bar z$, quindi $\partial_{\bar z}f=z/2$, che si annulla solo in $0$.`},
   {q:R`Se $f$ è olomorfa su un aperto connesso e $f'\equiv0$, cosa puoi dire?`,
    a:R`Che $f$ è <b>costante</b>. Da $f'=u_x+iv_x=0$ e CR seguono $u_x=u_y=v_x=v_y=0$, quindi $u,v$ costanti su un connesso. Vale anche in versioni più forti e sorprendenti: se $|f|$ è costante, oppure se $\mathrm{Re}\,f$ è costante, allora $f$ è costante. La rigidità in azione — nel caso reale nulla di simile.`}
  ]}
]},

/* ---------------- 02 · ARMONICHE CONIUGATE ---------------- */
{ num:'02', title:'Armoniche coniugate: da $u$ ricostruire $f$', meta:'$u,v$ armoniche · l’algoritmo d’esame per costruire $v$ · le due famiglie di livelli sono ortogonali',
  blocchi:[
  {t:'reveal', title:'Perché parte reale e immaginaria sono armoniche', tag:'derivazione', steps:[
   {label:'Deriva le CR una seconda volta', body:R`<p>Da $u_x=v_y$ deriva in $x$: $u_{xx}=v_{yx}$. Da $u_y=-v_x$ deriva in $y$: $u_{yy}=-v_{xy}$. Sommando, e usando l&rsquo;uguaglianza delle derivate miste (lecita: $f$ olomorfa è $C^\infty$, lo si dimostra nel nucleo 12):
   $$\Delta u=u_{xx}+u_{yy}=v_{yx}-v_{xy}=0.$$
   Stessa cosa per $v$. <b>Le parti reale e immaginaria di una funzione olomorfa sono funzioni armoniche</b> — soluzioni dell&rsquo;equazione di Laplace. $\blacksquare$</p>`},
   {label:'Il rovescio: ogni armonica è la parte reale di qualcosa', body:R`<p>Localmente vale anche il viceversa: data $u$ armonica su un aperto <b>semplicemente connesso</b>, esiste $v$ (unica a meno di costante additiva) tale che $f=u+iv$ sia olomorfa. $v$ si chiama <b>armonica coniugata</b> di $u$.</p>
   <div class="note warn"><b>L&rsquo;ipotesi topologica non è decorativa.</b> Su un dominio con un buco può fallire: $u=\log|z|=\frac12\log(x^2+y^2)$ è armonica su $\mathbb{C}\setminus\{0\}$, ma la sua coniugata sarebbe $v=\arg z$, che <b>non</b> è una funzione a un solo valore su tutta la corona. È lo stesso buco che nel nucleo 04 impediva a un campo irrotazionale di essere conservativo — e non è un&rsquo;analogia: è lo stesso teorema in un altro linguaggio.</div>`}
  ]},
  {t:'prosa', title:'L&rsquo;algoritmo d&rsquo;esame, in quattro mosse', tag:'saper fare', html:R`
  <p>Dato $u$, per trovare $v$ e ricomporre $f(z)$:</p>
  <ol>
  <li><b>Verifica che $u$ sia armonica</b> ($\Delta u=0$). Se non lo è, nessuna coniugata esiste: fermati e dillo.</li>
  <li><b>Integra la prima CR:</b> da $v_y=u_x$ ricava $v=\displaystyle\int u_x\,dy+\varphi(x)$, con $\varphi$ funzione incognita della sola $x$ (non una costante!).</li>
  <li><b>Imponi la seconda CR:</b> $v_x=-u_y$ determina $\varphi'(x)$, che si integra dando $\varphi$ a meno di una costante reale $c$.</li>
  <li><b>Ricomponi in $z$:</b> scrivi $f=u+iv$ e riconosci l&rsquo;espressione in $z$. Trucco rapido e legittimo (valido quando $f$ è olomorfa in un intorno dell&rsquo;asse reale): $f(z)=2u\!\left(\frac z2,\frac z{2i}\right)-u(0,0)+ic$; oppure, più artigianalmente, poni $y=0$: $f(x)=u(x,0)+iv(x,0)$ e sostituisci $x\to z$.</li>
  </ol>`},
  {t:'esercizio', title:'Esercizio guidato: $u=x^2-y^2+2y$',
   src:'tipo standard — Metodi, prima parte',
   testo:R`Verificare che $u(x,y)=x^2-y^2+2y$ è armonica, determinarne l&rsquo;armonica coniugata $v$ e scrivere $f=u+iv$ come funzione della sola $z$, con $f(0)=0$.`,
   steps:[
    {label:'Armonicità', body:R`<p>$u_x=2x$, $u_{xx}=2$; $u_y=-2y+2$, $u_{yy}=-2$. Quindi $\Delta u=2-2=0$: <b>armonica</b>. (Se questo passo fallisce, l&rsquo;esercizio non ha soluzione — vale la pena scriverlo.)</p>`},
    {label:'Integra $v_y=u_x$', body:R`<p>$v_y=u_x=2x\ \Rightarrow\ v=\displaystyle\int2x\,dy=2xy+\varphi(x)$, con $\varphi$ da determinare.</p>`},
    {label:'Imponi $v_x=-u_y$', body:R`<p>$v_x=2y+\varphi'(x)$ e $-u_y=2y-2$. Uguagliando: $\varphi'(x)=-2$, quindi $\varphi(x)=-2x+c$ e
    $$v(x,y)=2xy-2x+c.$$</p>`},
    {label:'Ricomponi in $z$', body:R`<p>$f=(x^2-y^2+2y)+i(2xy-2x+c)$. Riconosci i pezzi: $x^2-y^2+2ixy=z^2$; e $2y-2ix=-2i(x+iy)=-2iz$. Dunque
    $$f(z)=z^2-2iz+ic.$$
    La condizione $f(0)=0$ dà $c=0$, quindi $f(z)=z^2-2iz$. <b>Controllo:</b> $f$ è un polinomio, dunque intera — coerente. $\blacksquare$</p>
    <div class="note">Il metodo &laquo;$y=0$&raquo;: $u(x,0)=x^2$, $v(x,0)=-2x+c$, quindi $f(x)=x^2+i(-2x+c)$ e sostituendo $x\to z$ si ottiene subito $z^2-2iz+ic$. Più rapido, stesso risultato — comodo quando la ricomposizione a occhio non viene.</div>`}
   ],
   nota:R`Errore ricorrente: scrivere $v=\int u_x\,dy+\,$<i>costante</i> invece di $+\varphi(x)$. Integrando in $y$, la &laquo;costante&raquo; è una funzione arbitraria di $x$ — e il passo successivo serve proprio a determinarla. Chi scrive una costante perde il termine $-2x$ e sbaglia tutto il resto.`},
  {t:'plot', title:'Le due famiglie di livelli sono ortogonali',
   intro:R`Per $f(z)=z^2$: $u=x^2-y^2$ e $v=2xy$. Le curve $u=\text{cost}$ e $v=\text{cost}$ sono due famiglie di iperboli — e si incontrano <b>ad angolo retto</b>.`,
   plots:[
    {kind:'contour', f:'x*x-y*y', xr:[-2.2,2.2], yr:[-2.2,2.2], height:380,
     levels:[-3,-2,-1,-0.35,0.35,1,2,3], col:'#4c8dff', label:'u = x² - y² costante',
     overlays:[{f:'2*x*y', levels:[-3,-2,-1,-0.35,0.35,1,2,3], col:'#d8a13a', label:'v = 2xy costante'}]}
   ],
   leggi:R`Ogni iperbole blu incrocia ogni iperbole oro <b>perpendicolarmente</b>. Il motivo è una riga di conto: per Cauchy&ndash;Riemann $\nabla u=(u_x,u_y)$ e $\nabla v=(v_x,v_y)=(-u_y,u_x)$ sono <b>ruotati di 90°</b> l&rsquo;uno rispetto all&rsquo;altro, quindi $\nabla u\cdot\nabla v=0$; e poiché il gradiente è ortogonale ai livelli (nucleo 01), le due famiglie si tagliano ad angolo retto. <b>Perché conta in fisica.</b> Se $u$ è il <b>potenziale</b> elettrostatico di un problema piano, allora $u=$ cost sono le <b>equipotenziali</b> e $v=$ cost sono le <b>linee di campo</b>: una sola funzione olomorfa contiene entrambe, e trovarne una dà l&rsquo;altra gratis. In fluidodinamica ideale $u$ è il potenziale di velocità e $v$ la <b>funzione di corrente</b>. L&rsquo;unico punto in cui la griglia degenera è l&rsquo;origine, dove $f'(z)=2z$ si annulla: lì l&rsquo;ortogonalità si perde, e gli angoli vengono <b>raddoppiati</b> — il preludio alla tappa 04.`},
  {t:'collaudo', title:'Controllo lampo', items:[
   {q:R`$u=x^3-3xy^2$ è armonica? E se sì, di quale $f$ è la parte reale?`,
    a:R`$u_{xx}=6x$, $u_{yy}=-6x$: sì, armonica. È $\mathrm{Re}(z^3)$, poiché $z^3=(x+iy)^3=x^3-3xy^2+i(3x^2y-y^3)$. Coniugata: $v=3x^2y-y^3+c$. In generale $\mathrm{Re}(z^n)$ e $\mathrm{Im}(z^n)$ sono i <b>polinomi armonici</b> di grado $n$ (in coordinate polari $r^n\cos n\theta$ e $r^n\sin n\theta$): la base con cui si risolve Laplace nel disco.`},
   {q:R`Perché $u$ e $v$ non giocano un ruolo simmetrico? Se $v$ è coniugata di $u$, $u$ è coniugata di $v$?`,
    a:R`No: se $f=u+iv$ è olomorfa, l&rsquo;armonica coniugata di $v$ è $-u$ (non $u$), perché $v+i(-u)=-i(u+iv)=-if$ è olomorfa mentre $v+iu$ in generale non lo è. Il segno viene dall&rsquo;asimmetria delle CR ($u_y=-v_x$) ed è un errore d&rsquo;esame frequente.`}
  ]}
]},

/* ---------------- 03 · FUNZIONI ELEMENTARI E POLIDROMIA ---------------- */
{ num:'03', title:'Esponenziale, logaritmo, potenze: la polidromia e i tagli', meta:'$e^z$ periodico in $i2\\pi$ · $\\log z$ ha infinite determinazioni · scegliere un ramo e tracciare il taglio',
  blocchi:[
  {t:'prosa', title:'L&rsquo;esponenziale complesso e le sue conseguenze', tag:'costruzione', html:R`
  <p>$$e^z=e^{x+iy}=e^x(\cos y+i\sin y).$$
  È intera, non si annulla mai, e $|e^z|=e^{x}$. Ma la novità che cambia tutto è la <b>periodicità immaginaria</b>: $e^{z+2\pi i}=e^z$. L&rsquo;esponenziale complesso <b>non è iniettivo</b>: manda ogni striscia orizzontale di altezza $2\pi$ su tutto $\mathbb{C}\setminus\{0\}$, infinite volte.</p>
  <p>Da qui, meccanicamente: <b>l&rsquo;inversa non può essere una funzione a un valore solo</b>. Il logaritmo complesso è <b>polidromo</b>:
  $$\log z=\ln|z|+i\arg z,\qquad \arg z\ \text{definito a meno di }2k\pi,\ k\in\mathbb{Z}.$$
  Ogni scelta coerente di $k$ è una <b>determinazione</b> (o ramo). La scelta $\arg z\in(-\pi,\pi]$ è la <b>determinazione principale</b>, $\mathrm{Log}\,z$.</p>
  <p>Un ramo non può essere continuo su tutto $\mathbb{C}\setminus\{0\}$: girando una volta attorno all&rsquo;origine, $\arg z$ cresce di $2\pi$ e non torna al valore di partenza. Bisogna <b>tagliare</b> il piano lungo una semiretta uscente dall&rsquo;origine (il <b>taglio</b>, o <i>branch cut</i>) e lavorare fuori dal taglio, dove il ramo scelto è olomorfo con $(\log z)'=1/z$. L&rsquo;origine, dove nessun taglio evita il problema, è un <b>punto di diramazione</b>.</p>`},
  {t:'gram', title:'Il repertorio polidromo — e come si tratta all’esame', rows:[
   [R`$\log z$`, R`$=\ln|z|+i\arg z$. Taglio standard: semiasse reale <b>negativo</b> ($\arg\in(-\pi,\pi]$). Attraversandolo la funzione salta di $2\pi i$. Punti di diramazione: $0$ e $\infty$.`],
   [R`$z^\alpha$`, R`$:=e^{\alpha\log z}$. Se $\alpha\in\mathbb{Z}$: monodroma. Se $\alpha=p/q$ razionale: $q$ determinazioni. Se $\alpha$ irrazionale o complesso: <b>infinite</b>. Esempio d&rsquo;effetto: $i^{\,i}=e^{i\log i}=e^{i(i\pi/2+2ik\pi)}=e^{-\pi/2-2k\pi}$, tutti <b>reali</b>.`],
   [R`$\sqrt{z}$`, R`due rami, $\pm$. Con taglio su $\mathbb R^-$: $\sqrt z=\sqrt{|z|}\,e^{i\arg z/2}$. Girando attorno a $0$ si passa da un ramo all&rsquo;altro; servono <b>due</b> giri per tornare al valore iniziale.`],
   [R`$\sqrt{z^2-1}$`, R`punti di diramazione in $\pm1$: si può tagliare il <b>segmento</b> $[-1,1]$ (e allora la funzione è olomorfa fuori, anche all&rsquo;infinito) oppure le due semirette esterne. <b>La scelta del taglio è parte della risposta.</b>`],
   [R`$\sin z,\cos z$`, R`intere, monodrome, ma <b>illimitate</b>: $\cos z=\cos x\cosh y-i\sin x\sinh y$. L&rsquo;equazione $\cos z=5$ ha soluzioni. Gli zeri restano solo quelli reali.`]
  ]},
  {t:'plot', title:'Il taglio, visto: i livelli di $\\arg z$',
   intro:R`$\mathrm{Im}\,\mathrm{Log}\,z=\arg z$ con determinazione principale. Le curve di livello sono le semirette uscenti dall&rsquo;origine; il salto sta dove i livelli si accalcano.`,
   plots:[
    {kind:'contour', f:'atan2(y,x)', xr:[-2.2,2.2], yr:[-2.2,2.2], height:380,
     levels:[-2.9,-2.4,-1.8,-1.2,-0.6,0,0.6,1.2,1.8,2.4,2.9], col:'#b98cff', label:'arg z = costante',
     rings:[{r:1, col:'#5eead4', width:1.6, dash:true, label:'cerchio unitario'}],
     segs:[{x1:-2.15, y1:0, x2:0, y2:0, col:'#ff6b6b', width:3.2}],
     marks:[{x:0, y:0, label:'diramazione', col:'#ff9b6b', up:false},
            {x:-1.2, y:0, label:'TAGLIO (arg salta di 2π)', col:'#ff6b6b', up:true, left:true}]}
   ],
   leggi:R`Ogni semiretta è un livello di $\arg z$: la funzione cresce con continuità girando in senso antiorario. Ma percorrendo il cerchio tratteggiato si arriva al semiasse reale negativo con $\arg\to+\pi$ da sopra e $\arg\to-\pi$ da sotto: <b>due valori diversi nello stesso punto</b>, salto $2\pi$. Nessuna scelta di determinazione elimina il salto — si può solo <b>spostarlo</b> scegliendo un altro taglio (l&rsquo;asse immaginario positivo, per esempio). Ciò che <b>non</b> si può spostare è l&rsquo;origine: qualunque cerchio che la circondi produce il salto, ed è per questo che si chiama <b>punto di diramazione</b>. All&rsquo;esame la sequenza è sempre questa: <b>(1)</b> trova i punti di diramazione; <b>(2)</b> scegli il taglio e dichiaralo; <b>(3)</b> scrivi la determinazione con $\arg$ nell&rsquo;intervallo scelto; <b>(4)</b> se il contorno d&rsquo;integrazione attraversa il taglio, cambia contorno (nucleo 13, keyhole).`},
  {t:'plot', title:'La superficie su cui $\\log z$ diventa una funzione vera',
   intro:R`L&rsquo;<b>elicoide</b> $\Phi(u,v)=(u\cos v,\ u\sin v,\ v)$: la quota è $v=\arg z$, e continua a crescere girando. È la <b>superficie di Riemann</b> del logaritmo. <b>Trascina per ruotare.</b>`,
   plots:[
    {kind:'param3d', x:'u*cos(v)', y:'u*sin(v)', z:'v*0.42', ur:[0.06,1.25], vr:[0,12.566],
     nu:12, nv:70, w:560, height:400, yaw:0.85, pitch:0.42, alpha:0.9,
     title:'due giri: chi torna sopra il punto di partenza e su un foglio piu alto'}
   ],
   leggi:R`La polidromia smette di essere un difetto e diventa <b>geometria</b>. Nel piano, girando attorno all&rsquo;origine, $\arg z$ cresce di $2\pi$ e si è costretti a un salto: il <b>taglio</b>. Qui invece la quota <b>sale</b> di $2\pi$ a ogni giro, e non c&rsquo;è nessun salto da fare: dopo un giro completo non sei tornato al punto di partenza, sei un <b>piano più su</b>. Ogni avvolgimento è una <b>determinazione</b>, e su questa superficie $\log z=\ln|z|+i\,(\text{quota})$ è una funzione <b>a un solo valore, continua e olomorfa</b>. Tre letture. <b>(1)</b> Il <b>taglio</b> del piano è semplicemente il gesto di tagliare l&rsquo;elicoide lungo una semiretta verticale per stenderlo su un foglio solo: utile, ma è una nostra mutilazione, non una proprietà della funzione. <b>(2)</b> L&rsquo;asse verticale — la retta $u=0$ — è il <b>punto di diramazione</b>: è l&rsquo;unico posto dove i fogli si toccano tutti, e infatti è dove $\log$ non può essere definito. <b>(3)</b> Per $\sqrt z$ la superficie ha <b>due</b> soli fogli, incollati: girando due volte si torna davvero al punto di partenza — e questo è il motivo geometrico per cui $\sqrt z$ ha due determinazioni e $\log z$ infinite. <b>Nota per dopo:</b> lo stesso oggetto tornerà quando incontrerai le funzioni polidrome sotto integrale (nucleo 13, contorno keyhole): il cammino che gira attorno alla diramazione non si richiude, ed è esattamente per questo che il calcolo funziona.`},
  {t:'collaudo', title:'Controllo lampo', items:[
   {q:R`Vale $\log(z_1z_2)=\log z_1+\log z_2$?`,
    a:R`Come <b>uguaglianza fra insiemi</b> di valori, sì; come uguaglianza fra determinazioni <b>principali</b>, no. Esempio: $z_1=z_2=-1+i\varepsilon$ con $\varepsilon$ piccolo hanno $\mathrm{Arg}\approx\pi$, ma il prodotto ha $\mathrm{Arg}\approx-2\pi+2\pi=0^-$… la somma degli argomenti esce dall&rsquo;intervallo $(-\pi,\pi]$ e va riportata dentro con un $2\pi$. È l&rsquo;errore più comune sui logaritmi complessi.`},
   {q:R`Quanti valori ha $(1+i)^{\sqrt2}$?`,
    a:R`Infiniti: l&rsquo;esponente è irrazionale, quindi $e^{\sqrt2\log(1+i)}=e^{\sqrt2(\ln\sqrt2+i(\pi/4+2k\pi))}$ dà valori distinti per ogni $k\in\mathbb{Z}$ (i fattori $e^{i2\sqrt2 k\pi}$ non si ripetono mai perché $\sqrt2$ è irrazionale). Con esponente $p/q$ i valori sarebbero $q$; con esponente intero, uno solo.`}
  ]}
]},

/* ---------------- 04 · MAPPE CONFORMI ---------------- */
{ num:'04', title:'Mappe conformi: perché gli angoli si conservano', meta:'derivata non nulla ⇒ rotazione + dilatazione locale, uguali in ogni direzione · lo strumento dei problemi piani',
  blocchi:[
  {t:'reveal', title:'La derivata come rotazione e dilatazione', tag:'derivazione', steps:[
   {label:'Cosa fa $f$ vicino a $z_0$', body:R`<p>Se $f$ è olomorfa e $f'(z_0)\ne0$, vicino a $z_0$ vale $f(z)\approx f(z_0)+f'(z_0)(z-z_0)$. L&rsquo;azione locale è la moltiplicazione per il numero complesso $f'(z_0)=\rho e^{i\theta}$: cioè una <b>dilatazione</b> di fattore $\rho=|f'(z_0)|$ composta con una <b>rotazione</b> di angolo $\theta=\arg f'(z_0)$.</p>`},
   {label:'Perché gli angoli restano', body:R`<p>Rotazione e dilatazione sono le stesse <b>per tutte le direzioni</b> uscenti da $z_0$ — è esattamente ciò che dice l&rsquo;olomorfia (il limite non dipende dalla direzione). Se due curve si incrociano in $z_0$ formando un angolo $\alpha$, le immagini si incrociano formando lo stesso angolo $\alpha$, con lo stesso verso: la mappa è <b>conforme</b>. $\blacksquare$</p>
   <p>Dove invece $f'(z_0)=0$ la conformità <b>salta</b>: se $f$ ha uno zero di ordine $k$ per $f'$, gli angoli in quel punto vengono <b>moltiplicati per $k+1$</b>. Per $f=z^2$ in $0$: gli angoli raddoppiano, ed è ciò che si vede nella figura della tappa 02, dove la griglia ortogonale degenera nell&rsquo;origine.</p>`}
  ]},
  {t:'prosa', title:'A cosa serve, concretamente', tag:'rotte', html:R`
  <p>Un problema di Laplace piano ($\Delta u=0$ con dati al bordo) è <b>invariante</b> per mappe conformi: se $w=f(z)$ è conforme e $U$ è armonica in $w$, allora $U\circ f$ è armonica in $z$. Quindi si può <b>deformare la geometria</b> finché il problema diventa banale — risolverlo su un semipiano o su un disco — e poi riportare indietro la soluzione. È il metodo standard per: campo elettrico attorno a spigoli e lamine, flusso ideale attorno a un profilo alare (trasformazione di Joukowski), capacità di geometrie non banali.</p>
  <div class="note">Il limite: funziona in <b>due</b> dimensioni. In $\mathbb{R}^3$ le mappe conformi sono pochissime (teorema di Liouville) e il metodo perde potenza. È uno dei casi in cui la fisica bidimensionale è <b>strutturalmente</b> più risolubile — lo stesso privilegio, non per caso, di cui gode l&rsquo;Ising 2D in meccanica statistica, e da cui nasce la teoria conforme dei campi.</div>`}
]},

/* ---------------- 05 · ESERCIZI ---------------- */
{ num:'05', title:'Esercizi — tocca a te', meta:'olomorfia da verificare · coniugata da costruire · rami e tagli da dichiarare',
  blocchi:[
  {t:'esercizio', title:'Dove è olomorfa $f(z)=e^{\\bar z}$? E $g(z)=z^2\\bar z$?',
   src:'esercizio guidato — provaci prima di rivelare',
   testo:R`Studiare l&rsquo;olomorfia di $f(z)=e^{\bar z}$ e di $g(z)=z^2\bar z$ usando Cauchy&ndash;Riemann; per $g$ dire in quali punti la derivata complessa esiste comunque.`,
   steps:[
    {label:'$f=e^{\\bar z}$: la strada rapida', body:R`<p>$\partial_{\bar z}f=e^{\bar z}\ne0$ ovunque: <b>mai olomorfa</b>, in nessun punto. Verifica con CR: $e^{\bar z}=e^{x}(\cos y-i\sin y)$, quindi $u=e^x\cos y$, $v=-e^x\sin y$; $u_x=e^x\cos y$, $v_y=-e^x\cos y$. CR chiederebbe $e^x\cos y=-e^x\cos y$, cioè $\cos y=0$; e la seconda equazione dà $\sin y=0$. Le due non possono valere insieme: <b>nessun punto</b>.</p>`},
    {label:'$g=z^2\\bar z$: il conto in Wirtinger', body:R`<p>$\partial_{\bar z}g=z^2$, che si annulla solo in $z=0$. Quindi $g$ è derivabile in senso complesso <b>solo</b> in $z=0$ (con $g'(0)=0$), e <b>olomorfa in nessun aperto</b>: l&rsquo;olomorfia richiede la derivabilità in tutto un intorno, non in un punto.</p>`},
    {label:'La morale operativa', body:R`<p>Riscrivere l&rsquo;espressione in termini di $z$ e $\bar z$ e derivare rispetto a $\bar z$ è quasi sempre più rapido che separare $u$ e $v$. Se il testo chiede esplicitamente &laquo;verificare le CR&raquo;, si fa il conto lungo; ma il controllo in $\bar z$ resta il modo per <b>sapere in anticipo</b> il risultato e non sbagliare i segni. $\blacksquare$</p>`}
   ],
   nota:R`Nota di linguaggio: &laquo;derivabile in $z_0$&raquo; e &laquo;olomorfa in $z_0$&raquo; non sono sinonimi — la seconda significa &laquo;derivabile in un intorno di $z_0$&raquo;. Nei compiti la distinzione è spesso il punto della domanda.`},
  {t:'esercizio', title:'Coniugata e ricomposizione: $u=e^x\\cos y$',
   src:'esercizio guidato',
   testo:R`Verificare che $u=e^x\cos y$ è armonica su $\mathbb{R}^2$, trovarne l&rsquo;armonica coniugata e ricomporre $f=u+iv$ in funzione di $z$.`,
   steps:[
    {label:'Armonicità', body:R`<p>$u_x=e^x\cos y$, $u_{xx}=e^x\cos y$; $u_y=-e^x\sin y$, $u_{yy}=-e^x\cos y$. Somma nulla: <b>armonica</b>.</p>`},
    {label:'Costruzione di $v$', body:R`<p>$v_y=u_x=e^x\cos y\ \Rightarrow\ v=e^x\sin y+\varphi(x)$. Poi $v_x=e^x\sin y+\varphi'(x)$ deve valere $-u_y=e^x\sin y$, quindi $\varphi'=0$, $\varphi=c$:
    $$v=e^x\sin y+c.$$</p>`},
    {label:'Ricomposizione', body:R`<p>$f=e^x\cos y+i(e^x\sin y+c)=e^x(\cos y+i\sin y)+ic=e^z+ic$. Con la normalizzazione $f(0)=1$ si ha $c=0$ e $f(z)=e^z$. $\blacksquare$</p>
    <p>Osservazione che vale l&rsquo;esercizio: $e^x\cos y$ è armonica <b>perché</b> è la parte reale di $e^z$. Ogni identità trigonometrico-esponenziale della fisica ($e^{x}\cos y$, $\cos(kx)e^{-ky}$ nei problemi di Laplace su una striscia) è la parte reale di una funzione olomorfa — e questa è la ragione strutturale per cui quelle combinazioni, e non altre, risolvono i problemi al bordo.</p>`}
   ]},
  {t:'collaudo', title:'Diagnostica rapida', items:[
   {q:R`Una funzione olomorfa e <b>reale</b> (cioè con $v\equiv0$) su un aperto connesso: che aspetto ha?`,
    a:R`È costante. Con $v\equiv0$ le CR danno $u_x=v_y=0$ e $u_y=-v_x=0$, quindi $u$ è costante. Conseguenza: <b>nessuna funzione olomorfa non costante prende solo valori reali</b>. È il primo assaggio del principio del massimo e di Liouville (nucleo 12), e spiega perché in fisica le funzioni di risposta olomorfe hanno sempre parte immaginaria non nulla — quella parte è la <b>dissipazione</b> (Kramers&ndash;Kronig).`},
   {q:R`Quanti tagli servono per rendere monodroma $\sqrt{(z-1)(z+1)}$, e dove?`,
    a:R`I punti di diramazione sono $\pm1$. Basta <b>un</b> taglio: il segmento $[-1,1]$. Motivo: un cammino chiuso che li circonda <b>entrambi</b> fa cambiare segno a ciascuno dei due fattori, e il prodotto dei due cambi di segno riporta la funzione al valore iniziale — quindi fuori dal segmento la funzione è monodroma. In alternativa si tagliano le due semirette $(-\infty,-1]$ e $[1,+\infty)$: scelta diversa, funzione diversa, entrambe legittime purché <b>dichiarate</b>. È il tipo di ragionamento richiesto nel nucleo 13 per i contorni con tagli.`}
  ]}
]},

/* ---------------- 06 · SENSO E ROTTE ---------------- */
{ num:'06', title:'Il senso e le rotte fisiche', meta:'la rigidità dell’analiticità, e cosa significa quando la si incontra in fisica',
  blocchi:[
  {t:'prosa', title:'Cosa hai davvero imparato', tag:'sintesi', html:R`
  <p><b>A monte.</b> Tutto il calcolo differenziale del Movimento I torna qui, ma con un vincolo in più: la differenziabilità in $\mathbb{R}^2$ (nucleo 01) più le due equazioni di Cauchy&ndash;Riemann. Quel vincolo &laquo;in più&raquo; costa poco a scriversi e produce una teoria incomparabilmente più rigida. E il buco del nucleo 04 riappare identico: senza semplice connessione, la coniugata armonica e il logaritmo perdono l&rsquo;unicità.</p>
  <p><b>Il punto.</b> Olomorfia = indipendenza da $\bar z$ = rigidità. Le conseguenze — parti armoniche, ortogonalità dei livelli, conformità, e nel nucleo 12 l&rsquo;analiticità e il valore determinato dal bordo — sono tutte facce di questa singola condizione.</p>
  <p><b>A valle.</b> Il nucleo 12 mostra che una olomorfa è determinata dai valori sul bordo (Cauchy) e coincide con la propria serie di Taylor; il nucleo 13 sfrutta le <b>singolarità</b> — i punti dove l&rsquo;olomorfia cade — per calcolare integrali reali che con metodi reali sono proibitivi. La polidromia introdotta qui diventa lì la tecnica dei contorni con taglio.</p>`},
  {t:'prolessi', title:'Dove riappare questo nucleo, nella fisica che farai',
   oggetto:R`<b>L&rsquo;olomorfia</b>: dipendenza da $z$ e non da $\bar z$, con le sue conseguenze — parti armoniche coniugate, conformità, rigidità globale.`,
   rotte:[
    {dove:'Elettrostatica e<br>fluidi 2D', txt:R`Potenziale ed equipotenziali/linee di campo sono $\mathrm{Re}$ e $\mathrm{Im}$ della stessa funzione olomorfa (<i>potenziale complesso</i>). Le <b>mappe conformi</b> trasportano un problema di Laplace da una geometria difficile a una banale: è il metodo per spigoli, lamine, profili alari (Joukowski).`},
    {dove:'Risposta lineare<br>e causalità', txt:R`Una funzione di risposta $\chi(\omega)$ è <b>olomorfa nel semipiano superiore</b> <i>perché</i> il sistema è causale (nessuna risposta prima dello stimolo). Da questa sola analiticità discendono le relazioni di <b>Kramers&ndash;Kronig</b>, che legano parte reale (dispersione) e parte immaginaria (assorbimento): due quantità misurabili separatamente, vincolate l&rsquo;una all&rsquo;altra da un fatto di analisi complessa.`},
    {dove:'Meccanica<br>quantistica', txt:R`Le <b>ampiezze di scattering</b> sono funzioni analitiche dell&rsquo;energia complessa; i loro <b>poli</b> sono stati legati e risonanze, i <b>tagli</b> corrispondono all&rsquo;apertura di canali (soglie). L&rsquo;analiticità è talmente vincolante da essere stata usata, negli anni &rsquo;60, come principio costitutivo di una teoria (matrice S analitica).`},
    {dove:'Meccanica<br>statistica', txt:R`La funzione di partizione di un sistema <b>finito</b> è analitica: nessuna transizione di fase è possibile. Le transizioni sono <b>punti di non analiticità</b> che compaiono solo nel limite termodinamico — e nel piano complesso appaiono come <b>zeri di Lee&ndash;Yang</b> che si addensano sull&rsquo;asse reale. La singolarità, qui, è il fenomeno fisico.`}
   ],
   domanda:R`Se l&rsquo;analiticità è rigidità — un valore locale determina il tutto — allora un sistema descritto da funzioni analitiche non può <b>sorprendere</b>: il comportamento a grandi scale è già scritto nel comportamento locale. Ma i sistemi complessi fanno esattamente il contrario: emergono transizioni, criticità, comportamenti collettivi che nessuna analisi locale prevede. La conciliazione è che quei fenomeni vivono <b>esattamente dove l&rsquo;analiticità si rompe</b> — al limite termodinamico, nei punti critici, sui tagli. <b>Domanda che porti avanti:</b> la non-analiticità è un artefatto del limite infinito, o è il <i>modo</i> in cui la novità entra in una teoria altrimenti rigida? E per un sistema quantistico finito ma grande — quelli della decoerenza e dell&rsquo;ETH — dove si nasconde la quasi-singolarità che imita una transizione vera?`}
]}

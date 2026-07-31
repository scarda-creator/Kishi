/*META
{ "nn":"14",
  "file":"14-continuazione.html",
  "titolo":"Nucleo 14 — Continuazione analitica e funzioni speciali: Gamma, riflessione, regolarizzazione",
  "nome":"Continuazione analitica e funzioni speciali",
  "banner":"PERCORSO-MATEMATICA · Movimento III · Nucleo <b>14 — Continuazione analitica, funzione Gamma, regolarizzazione zeta</b> · approfondimento [+], oltre agosto" }
META*/

/* ---------------- 00 · PERCHÉ QUESTO NUCLEO ---------------- */
{ num:'00', title:'Perché questo nucleo', meta:'[+] approfondimento · la rigidità dell’analiticità portata alle sue conseguenze estreme',
  blocchi:[
  {t:'prosa', title:'Il punto di arrivo del Movimento III', tag:'first principles', html:R`
  <p>Il principio di identità (nucleo 12) dice che due funzioni olomorfe che coincidono su un frammento coincidono ovunque. Letto al contrario è una <b>procedura</b>: se conosco una funzione su un pezzetto, la sua estensione olomorfa — se esiste — è <b>unica</b>. Non c&rsquo;è scelta, non c&rsquo;è arbitrarietà: la funzione &laquo;sa già&raquo; come continuare.</p>
  <p>Questo cambia lo statuto di certe formule della fisica. Una serie che converge solo per $|z|\lt1$, o un integrale che converge solo per $\mathrm{Re}\,s\gt1$, <b>non definiscono</b> la funzione: sono soltanto una <i>finestra</i> su un oggetto più grande, che esiste anche dove la formula fallisce. Da qui viene la pratica — che in fisica sembra un trucco e non lo è — di dare senso a espressioni divergenti: si continua analiticamente in un parametro fino al valore che interessa.</p>
  <p>Questo nucleo è marcato <b>[+]</b>: non è materia d&rsquo;esame nella sua parte finale (regolarizzazione), ma la prima metà (continuazione, $\Gamma$) compare nei compiti come sfondo delle funzioni speciali, e la seconda è ciò che rende il Movimento III uno strumento di fisica teorica e non solo di calcolo.</p>`}
]},

/* ---------------- 01 · CONTINUAZIONE ANALITICA ---------------- */
{ num:'01', title:'Continuazione analitica: la formula non è la funzione', meta:'unicità dell’estensione · la serie geometrica e $1/(1-z)$ · il cerchio di convergenza non è un confine della funzione',
  blocchi:[
  {t:'prosa', title:'Definizione e unicità', tag:'grammatica', html:R`
  <p>Siano $f_1$ olomorfa su $\Omega_1$ e $f_2$ olomorfa su $\Omega_2$, con $\Omega_1\cap\Omega_2$ aperto e connesso. Se $f_1=f_2$ sull&rsquo;intersezione, $f_2$ si dice <b>continuazione analitica</b> di $f_1$. Per il principio di identità la continuazione, <b>se esiste, è unica</b>.</p>
  <p>L&rsquo;esempio minimo dice già tutto. La serie $\sum_{n\ge0}z^n$ converge <b>solo</b> per $|z|\lt1$ e lì vale $\frac{1}{1-z}$. Ma $\frac{1}{1-z}$ è olomorfa su tutto $\mathbb{C}\setminus\{1\}$. La serie non &laquo;sbaglia&raquo; fuori dal disco: semplicemente <b>smette di essere una rappresentazione</b> della funzione, che invece continua a esistere. Chiedere &laquo;quanto vale $\sum(-2)^n$?&raquo; è mal posto come domanda sulla serie, ma ha una risposta perfettamente definita come domanda sulla funzione: $\frac{1}{1-(-2)}=\frac13$.</p>
  <div class="note">Il cerchio di convergenza è determinato dalla <b>singolarità più vicina</b> (nucleo 12), non dai limiti della funzione. Nel caso sopra la singolarità è in $z=1$: la serie centrata in $0$ non può superarla, ma una serie centrata in $z_0=-1$ ha raggio $2$ e copre regioni che la prima non vedeva. <b>Iterando questo spostamento di centro si continua la funzione</b>: è la costruzione originale di Weierstrass.</div>`},
  {t:'plot', title:'La serie muore, la funzione no',
   intro:R`Somme parziali di $\sum z^n$ (fino a $N=6$ e $N=14$) confrontate con $\frac{1}{1-x}$ sull&rsquo;asse reale.`,
   plots:[
    {kind:'func2d', xr:[-2.2,0.95], yr:[-1.5,4], height:360,
     title:'oltre |x|=1 le somme parziali divergono; 1/(1-x) prosegue tranquilla',
     curves:[
      {f:'1/(1-x)', col:'#8fa0b5', width:2.4, dash:true, label:'1/(1-x)'},
      {f:'1+x+pow(x,2)+pow(x,3)+pow(x,4)+pow(x,5)+pow(x,6)', col:'#5eead4', width:1.8, label:'S6'},
      {f:'1+x+pow(x,2)+pow(x,3)+pow(x,4)+pow(x,5)+pow(x,6)+pow(x,7)+pow(x,8)+pow(x,9)+pow(x,10)+pow(x,11)+pow(x,12)+pow(x,13)+pow(x,14)', col:'#b98cff', width:1.8, label:'S14'}
     ],
     segs:[{x1:-1, y1:-1.5, x2:-1, y2:4, col:'#ff6b6b', dash:true, width:1.6, label:'|x|=1', lx:-1, ly:3.6}],
     marks:[{x:-2, y:0.3333, label:'valore vero: 1/3', col:'#ff9b6b', up:true}]}
   ],
   leggi:R`Dentro il cerchio di convergenza ($|x|\lt1$) le somme parziali si stringono alla curva grigia: più termini, meglio è. <b>Oltre $x=-1$ il comportamento si rovescia</b>: $S_{14}$ è <i>peggiore</i> di $S_6$, e aumentando $N$ le oscillazioni esplodono. Eppure la funzione $\frac{1}{1-x}$ in $x=-2$ vale tranquillamente $\frac13$ (punto arancione): <b>il valore esiste, è la serie a non saperlo raggiungere</b>. La morale è metodologica e vale per tutta la fisica teorica: quando una serie perturbativa diverge, la prima domanda non è &laquo;come sommo meglio&raquo;, è <b>&laquo;qual è la funzione che questa serie stava approssimando, e come la raggiungo per un&rsquo;altra strada&raquo;</b>. Le due strade classiche sono la continuazione analitica (questo nucleo) e le somme asintotiche.`},
  {t:'collaudo', title:'Controllo lampo', items:[
   {q:R`$\sum_{n\ge0}z^n$ converge in $|z|\lt1$; la funzione $\frac{1}{1-z}$ è definita su $\mathbb{C}\setminus\{1\}$. Perché non si può continuare oltre $z=1$?`,
    a:R`Perché $z=1$ è una <b>singolarità vera</b> (un polo): nessuna funzione olomorfa può estendersi attraverso di essa. La continuazione aggira gli ostacoli, non li elimina. Esistono anche casi peggiori, in cui il cerchio di convergenza è tutto fatto di singolarità (<b>frontiera naturale</b>): per esempio $\sum z^{2^n}$, che non si può continuare in nessun punto di $|z|=1$. La rigidità taglia in entrambi i sensi.`},
   {q:R`In che senso la continuazione è &laquo;unica&raquo; se la funzione è polidroma (nucleo 11)?`,
    a:R`È unica <b>lungo un cammino</b>: continuando $\log z$ lungo cammini diversi che aggirano l&rsquo;origine in modi diversi si arriva a determinazioni diverse. L&rsquo;unicità vale su domini semplicemente connessi; con un buco, la continuazione dipende dalla <b>classe di omotopia</b> del cammino. È la stessa struttura del nucleo 04 (potenziale multivoco attorno a un buco) e la ragione per cui la superficie giusta su cui vive $\log$ non è il piano ma una <b>superficie di Riemann</b> a infiniti fogli.`}
  ]}
]},

/* ---------------- 02 · LA FUNZIONE GAMMA ---------------- */
{ num:'02', title:'La funzione Gamma: il fattoriale continuato', meta:'$\\Gamma(z)=\\int_0^\\infty t^{z-1}e^{-t}dt$ per $\\mathrm{Re}\\,z\\gt0$ · l’equazione funzionale continua tutto il piano · poli negli interi $\\le0$',
  blocchi:[
  {t:'prosa', title:'Definizione, e come si estende', tag:'costruzione', html:R`
  <p>Per $\mathrm{Re}\,z\gt0$ si definisce
  $$\Gamma(z)=\int_0^{\infty}t^{\,z-1}e^{-t}\,dt.$$
  L&rsquo;integrale converge lì e definisce una funzione olomorfa (si deriva sotto il segno). Integrando per parti si ottiene l&rsquo;<b>equazione funzionale</b>
  $$\Gamma(z+1)=z\,\Gamma(z),$$
  e poiché $\Gamma(1)=1$ segue $\Gamma(n+1)=n!$ per $n$ intero: <b>Gamma interpola il fattoriale</b>.</p>
  <p>La stessa equazione, letta al contrario come $\Gamma(z)=\dfrac{\Gamma(z+1)}{z}$, è lo strumento di <b>continuazione</b>: il membro destro ha senso per $\mathrm{Re}\,z\gt-1$ (tranne $z=0$), e itererando $n$ volte
  $$\Gamma(z)=\frac{\Gamma(z+n)}{z(z+1)\cdots(z+n-1)}$$
  si copre tutto il piano. Ne risulta una funzione <b>meromorfa su $\mathbb{C}$</b>, con <b>poli semplici</b> in $z=0,-1,-2,\dots$ e residuo $\mathrm{Res}(\Gamma,-n)=\dfrac{(-1)^n}{n!}$. Notevole: $\Gamma$ <b>non ha zeri</b> — quindi $1/\Gamma$ è una funzione intera.</p>`},
  {t:'plot', title:'Gamma sull’asse reale: il fattoriale, e i poli sugli interi negativi',
   intro:R`$\Gamma(x)$ calcolata con la formula di continuazione più Stirling: liscia e crescente a destra, con un polo a ogni intero $\le0$ e segni alternati fra un polo e l&rsquo;altro.`,
   plots:[
    {kind:'func2d', xr:[-3.6,4.4], yr:[-6,6], height:380,
     title:'Gamma(x): Gamma(n+1)=n! e poli semplici in 0,-1,-2,-3',
     curves:[{f:'sqrt(2*PI/(x+8))*pow((x+8)/E,(x+8))*(1+1/(12*(x+8))+1/(288*(x+8)*(x+8)))/(x*(x+1)*(x+2)*(x+3)*(x+4)*(x+5)*(x+6)*(x+7))', col:'#5eead4', width:2.4, label:'Gamma(x)'}],
     segs:[{x1:-3.6, y1:0, x2:4.4, y2:0, col:'#4d5a6b', width:1}],
     marks:[{x:1, y:1, label:'G(1)=0!=1', col:'#d8a13a', up:true, left:true},
            {x:3, y:2, label:'G(3)=2!=2', col:'#d8a13a', up:true, left:true},
            {x:4, y:6, label:'G(4)=3!=6', col:'#d8a13a', left:true},
            {x:1.4616, y:0.8856, label:'minimo', col:'#b98cff'}]}
   ],
   leggi:R`Sui punti oro la curva passa esattamente per i fattoriali — è il senso di &laquo;interpolare&raquo;. Fra un intero negativo e l&rsquo;altro la funzione cambia <b>segno</b>, perché ogni polo è semplice e il denominatore $z(z+1)\cdots$ cambia segno a ogni fattore che attraversa lo zero. Il minimo a $x\approx1{,}46$ (dove $\Gamma\approx0{,}886$) è il punto in cui il &laquo;fattoriale continuo&raquo; smette di scendere e comincia la crescita più-che-esponenziale: non c&rsquo;è nulla del genere nei fattoriali interi, ed è visibile solo continuando. <b>Attenzione a non leggere i poli come un difetto</b>: sono il modo in cui la funzione registra che $\Gamma(z)=\Gamma(z+1)/z$ divide per zero. E servono: nella regolarizzazione dimensionale della teoria dei campi, le divergenze dei diagrammi compaiono <b>esattamente</b> come poli di $\Gamma$ nel parametro dimensionale.`},
  {t:'prosa', title:'La formula di riflessione — e dove l’hai già incontrata', tag:'collegamento', html:R`
  <p>$$\Gamma(z)\,\Gamma(1-z)=\frac{\pi}{\sin\pi z},\qquad z\notin\mathbb{Z}.$$
  Il membro destro ha poli semplici in tutti gli interi: a destra dello zero li fornisce $\Gamma(1-z)$, a sinistra $\Gamma(z)$. Ponendo $z=\frac12$ si ottiene $\Gamma\!\left(\frac12\right)^2=\pi$, cioè
  $$\Gamma\!\left(\tfrac12\right)=\sqrt\pi\quad\Longleftrightarrow\quad\int_{-\infty}^{+\infty}e^{-t^2}dt=\sqrt\pi,$$
  l&rsquo;integrale gaussiano. <b>Questa formula l&rsquo;hai già dimostrata</b>: è l&rsquo;integrale $\int_0^\infty\frac{x^{\alpha-1}}{1+x}dx=\frac{\pi}{\sin\pi\alpha}$ del nucleo 13 (sottotipo keyhole), che coincide con $\Gamma(\alpha)\Gamma(1-\alpha)$. Il contorno a buco della serratura non era un esercizio di stile: produceva un&rsquo;identità fra funzioni speciali.</p>`}
]},

/* ---------------- 03 · REGOLARIZZAZIONE ---------------- */
{ num:'03', title:'Regolarizzazione: dare un valore a ciò che diverge', meta:'$\\zeta(s)$ oltre $\\mathrm{Re}\\,s\\gt1$ · «$1+2+3+\\cdots=-1/12$» detto con precisione · l’effetto Casimir',
  blocchi:[
  {t:'prosa', title:'La zeta di Riemann e la sua continuazione', tag:'costruzione', html:R`
  <p>$$\zeta(s)=\sum_{n=1}^{\infty}\frac{1}{n^{s}},\qquad \mathrm{Re}\,s\gt1.$$
  La serie converge solo in quel semipiano (per $s=1$ è la serie armonica). Ma $\zeta$ si <b>continua</b> a tutto $\mathbb{C}$ tranne $s=1$, dove ha un polo semplice di residuo $1$. La continuazione si costruisce con l&rsquo;equazione funzionale
  $$\zeta(s)=2^{s}\pi^{\,s-1}\sin\!\left(\frac{\pi s}{2}\right)\Gamma(1-s)\,\zeta(1-s),$$
  che lega i valori in $s$ a quelli in $1-s$ e usa proprio la $\Gamma$ della tappa precedente.</p>
  <p>Da qui i valori famosi: $\zeta(-1)=-\frac1{12}$, $\zeta(0)=-\frac12$, $\zeta(-2n)=0$ (gli &laquo;zeri banali&raquo;, dovuti al $\sin$). E l&rsquo;affermazione da bar &laquo;$1+2+3+\cdots=-\frac1{12}$&raquo; va detta con precisione: la <b>serie</b> $\sum n$ diverge, punto. Ciò che vale $-\frac1{12}$ è il <b>valore in $s=-1$ della continuazione analitica della funzione</b> che, per $\mathrm{Re}\,s\gt1$, è rappresentata da $\sum n^{-s}$. La formula $\sum n=\zeta(-1)$ è un abuso di notazione per una procedura precisa; il numero, però, è fisicamente misurabile.</p>`},
  {t:'prosa', title:'Perché la fisica se ne serve: l&rsquo;effetto Casimir', tag:'rotta', html:R`
  <p>Due piastre conduttrici parallele, distanti $a$, nel vuoto. L&rsquo;energia di punto zero del campo elettromagnetico fra le piastre è $E=\frac{\hbar}{2}\sum_n\omega_n$ con $\omega_n\propto n$: una somma <b>divergente</b>. Regolarizzandola con la zeta si ottiene un termine finito e la <b>forza attrattiva</b>
  $$\frac{F}{A}=-\frac{\pi^2\hbar c}{240\,a^4},$$
  misurata in laboratorio (Lamoreaux, 1997) con accordo di pochi percento. Il $240$ contiene proprio $\zeta(-3)=\frac{1}{120}$.</p>
  <div class="note">La lettura corretta non è &laquo;la matematica ha addomesticato l&rsquo;infinito con un trucco&raquo;. È: <b>la somma divergente non era la quantità fisica</b>. L&rsquo;osservabile è la <i>differenza</i> di energia fra la configurazione con le piastre e quella senza, e in quella differenza gli infiniti si cancellano; la continuazione analitica è il modo tecnicamente più pulito di eseguire la cancellazione. La stessa logica regge la <b>rinormalizzazione</b> in teoria dei campi, e la <b>regolarizzazione dimensionale</b> — dove si continua analiticamente nella <i>dimensione dello spazio-tempo</i>, e le divergenze appaiono come poli di $\Gamma$ in $d=4$.</div>`},
  {t:'collaudo', title:'Controllo lampo', items:[
   {q:R`Perché la continuazione analitica dà un risultato &laquo;giusto&raquo; e non uno dei tanti possibili?`,
    a:R`Per <b>unicità</b>: se un&rsquo;estensione olomorfa esiste, è una sola (principio di identità). Non si sta scegliendo un valore fra molti, si sta calcolando l&rsquo;unico compatibile con l&rsquo;analiticità. La domanda fisica seria non è &laquo;perché quel numero&raquo;, ma <b>&laquo;perché l&rsquo;analiticità è la proprietà giusta da imporre&raquo;</b> — e la risposta, come nel nucleo 11, è che analiticità in un parametro fisico corrisponde di solito a causalità o a località della teoria.`},
   {q:R`Che rapporto c&rsquo;è fra i valori $\zeta(2)=\frac{\pi^2}{6}$ e $\zeta(4)=\frac{\pi^4}{90}$ e il nucleo 09?`,
    a:R`Sono esattamente le somme ottenute con <b>Parseval</b> dalle serie di Fourier di $x$ e $x^2$. Due strade indipendenti: là un&rsquo;identità geometrica in uno spazio di Hilbert, qui una funzione analitica di variabile complessa. Il fatto che convergano sugli stessi numeri non è un caso: entrambe stanno leggendo la struttura degli interi, e questa doppia lettura è ciò che rende $\zeta$ l&rsquo;oggetto centrale che è.`}
  ]}
]},

/* ---------------- 04 · SENSO E ROTTE ---------------- */
{ num:'04', title:'Il senso e le rotte fisiche', meta:'chiusura del Movimento III: cosa lascia in mano per la fisica teorica',
  blocchi:[
  {t:'prosa', title:'Cosa chiude questo nucleo', tag:'sintesi', html:R`
  <p><b>A monte.</b> Il principio d&rsquo;identità (nucleo 12) diventa un metodo; l&rsquo;integrale keyhole (nucleo 13) diventa la formula di riflessione; le singolarità del nucleo 11 diventano i poli di $\Gamma$ e di $\zeta$, che in fisica sono le divergenze da rinormalizzare.</p>
  <p><b>Il punto.</b> Una formula è una finestra, non l&rsquo;oggetto. Se la funzione dietro è analitica, essa esiste anche dove la formula tace, e ci si arriva in un solo modo possibile. È l&rsquo;idea che trasforma l&rsquo;analisi complessa da tecnica di calcolo a <b>principio costruttivo</b> della fisica teorica.</p>
  <p><b>A valle.</b> Il Movimento IV (nuclei 15&ndash;18) riporta tutto sul terreno operativo: distribuzioni, trasformata di Fourier rigorosa, funzioni di Green, operatori e spettro, EDP della fisica. Le antitrasformate si calcoleranno con i residui, le funzioni di Green avranno i poli di questo nucleo, e la $\delta$ sarà il limite regolarizzato di famiglie analitiche.</p>`},
  {t:'prolessi', title:'Dove riappare questo nucleo, nella fisica che farai',
   oggetto:R`<b>La continuazione analitica</b>: l&rsquo;estensione unica di una funzione oltre il dominio in cui la sua formula converge.`,
   rotte:[
    {dove:'Rinormalizzazione', txt:R`La <b>regolarizzazione dimensionale</b> continua analiticamente nella dimensione $d$ dello spazio-tempo: gli integrali divergenti diventano funzioni di $d$, e le divergenze compaiono come <b>poli di $\Gamma$</b> in $d=4$. La struttura tecnica dell&rsquo;intera teoria quantistica dei campi perturbativa poggia su questo nucleo.`},
    {dove:'Statistica<br>a $T$ finita', txt:R`La <b>rotazione di Wick</b> $t\to-i\tau$ è una continuazione analitica che trasforma l&rsquo;evoluzione quantistica $e^{-iHt}$ nel peso di Boltzmann $e^{-\beta H}$: meccanica quantistica e meccanica statistica sono la <b>stessa</b> teoria continuata analiticamente nel tempo, con $\beta$ come tempo immaginario. È forse il ponte concettuale più profondo fra i due campi che ti interessano.`},
    {dove:'Transizioni<br>di fase', txt:R`La funzione di partizione di un sistema finito è analitica in $\beta$ e nel campo: <b>nessuna transizione</b> è possibile. Gli <b>zeri di Lee&ndash;Yang</b> nel piano complesso si avvicinano all&rsquo;asse reale al crescere del sistema, e nel limite termodinamico lo toccano: <b>la transizione di fase è l&rsquo;arrivo di una singolarità sull&rsquo;asse fisico</b>.`},
    {dove:'Scattering', txt:R`L&rsquo;ampiezza continuata nell&rsquo;energia complessa ha poli (stati legati, risonanze) e tagli (soglie). La <b>continuazione al secondo foglio</b> è dove vivono le risonanze instabili — oggetti che sull&rsquo;asse reale fisico non appaiono come stati, ma governano ciò che si misura.`}
   ],
   domanda:R`Se la funzione di partizione di un sistema <b>finito</b> è analitica, allora nessun sistema reale — che è sempre finito — ha vere transizioni di fase, vere singolarità, vera irreversibilità: sono tutte proprietà del <i>limite</i>. Eppure le osserviamo. <b>Domanda che porti avanti, ed è la stessa dei nuclei 06 e 13 in un&rsquo;altra veste:</b> qual è la quantità che misura <i>quanto vicino all&rsquo;asse reale</i> sono arrivate le singolarità di un sistema grande ma finito — e vale la pena studiare la termalizzazione (ETH, decoerenza) proprio come la <b>migrazione degli zeri e dei poli verso l&rsquo;asse fisico</b>, invece che come proprietà delle traiettorie? Se sì, gli strumenti per porla bene sono tutti in questo Movimento.`}
]}

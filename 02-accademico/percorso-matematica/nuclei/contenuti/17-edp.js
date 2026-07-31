/*META
{ "nn":"17",
  "file":"17-edp.html",
  "titolo":"Nucleo 17 — Le EDP della fisica: Laplace, calore, onde",
  "nome":"EDP della fisica: Laplace, calore, onde",
  "banner":"PERCORSO-MATEMATICA · Movimento IV · Nucleo <b>17 — Laplace, calore, onde: le tre equazioni archetipe con gli strumenti costruiti</b> · chiude il percorso" }
META*/

/* ---------------- 00 · PERCHÉ QUESTO NUCLEO ---------------- */
{ num:'00', title:'Perché questo nucleo', meta:'chiusura del percorso · tre equazioni, tre fisiche, un solo metodo',
  blocchi:[
  {t:'prosa', title:'Tre equazioni e nient’altro', tag:'first principles', html:R`
  <p>Quasi tutta la fisica dei mezzi continui — elettromagnetismo, conduzione del calore, diffusione, acustica, corde e membrane, meccanica quantistica non relativistica — si scrive con tre equazioni lineari del secondo ordine:
  $$\underbrace{\Delta u=0}_{\text{Laplace}},\qquad \underbrace{u_t=\alpha\Delta u}_{\text{calore}},\qquad \underbrace{u_{tt}=c^2\Delta u}_{\text{onde}}.$$
  Sono <b>lo stesso operatore</b> $\Delta$ con un diverso trattamento del tempo: nessuna derivata temporale (equilibrio), una (evoluzione irreversibile), due (propagazione reversibile). La classificazione matematica le chiama <b>ellittica</b>, <b>parabolica</b>, <b>iperbolica</b>, e le tre categorie corrispondono a tre comportamenti fisici che non si somigliano affatto.</p>
  <p>Questo nucleo non introduce strumenti nuovi: <b>usa quelli costruiti</b>. Separazione di variabili e Fourier (nuclei 09 e 15), autofunzioni di Sturm&ndash;Liouville (nucleo 16), funzioni di Green (nucleo 15), e per le antitrasformate i residui (nucleo 13). È la verifica che il percorso serviva a qualcosa.</p>`}
]},

/* ---------------- 01 · LAPLACE ---------------- */
{ num:'01', title:'Laplace e Poisson: l’equilibrio', meta:'$\\Delta u=0$ · proprietà della media e principio del massimo · Green del laplaciano = potenziale coulombiano',
  blocchi:[
  {t:'prosa', title:'Cosa dice l’equazione', tag:'costruzione', html:R`
  <p>$\Delta u=0$ descrive uno stato <b>stazionario</b>: potenziale elettrostatico in assenza di cariche, temperatura all&rsquo;equilibrio, flusso incomprimibile irrotazionale. Con sorgente diventa <b>Poisson</b>: $\Delta u=-\rho/\varepsilon_0$.</p>
  <p>Due proprietà, che sono la stessa vista due volte:</p>
  <ul>
  <li><b>Proprietà della media:</b> il valore in un punto è la media dei valori su ogni sfera centrata lì. In $2$D è la formula di Cauchy del nucleo 12, e non è un&rsquo;analogia: le funzioni armoniche piane <b>sono</b> parti reali di funzioni olomorfe (nucleo 11).</li>
  <li><b>Principio del massimo:</b> niente massimi o minimi interni; gli estremi stanno sul <b>bordo</b>. Conseguenza fisica: nessuna trappola elettrostatica statica (Earnshaw), e la temperatura di equilibrio in una regione senza sorgenti non supera mai quella al contorno.</li>
  </ul>
  <p><b>La Green:</b> $-\Delta G=\delta^3$ ha soluzione $G=\dfrac{1}{4\pi r}$ in tre dimensioni ($-\frac{1}{2\pi}\log r$ in due). È il <b>potenziale coulombiano</b>: la soluzione di Poisson per una distribuzione qualunque è la convoluzione
  $$u(\mathbf r)=\frac{1}{4\pi\varepsilon_0}\int\frac{\rho(\mathbf r')}{|\mathbf r-\mathbf r'|}d^3r',$$
  che è la formula del potenziale che usi da sempre — qui derivata invece che postulata (nucleo 15).</p>`},
  {t:'plot', title:'Laplace su una striscia: il bordo detta, l’interno si smorza',
   intro:R`Soluzione di $\Delta u=0$ su $0\le x\le1$, $y\ge0$, con $u(x,0)=\sin(\pi x)$ e $u\to0$ per $y$ grande: per separazione $u=\sin(\pi x)e^{-\pi y}$.`,
   plots:[
    {kind:'contour', f:'sin(PI*x)*exp(-PI*y)', xr:[0,1], yr:[0,1.2], height:360, equal:false,
     levels:[0.03,0.07,0.15,0.3,0.5,0.75,0.95], col:'#4c8dff', label:'u = costante',
     grad:{fx:'PI*cos(PI*x)*exp(-PI*y)', fy:'-PI*sin(PI*x)*exp(-PI*y)', label:'grad u (linee di campo)', n:9}}
   ],
   leggi:R`Il dato al bordo (la sinusoide sul lato $y=0$) si <b>smorza esponenzialmente</b> entrando nel dominio: già a $y=1$ l&rsquo;ampiezza è ridotta di $e^{-\pi}\approx0{,}04$. È il comportamento tipico delle equazioni <b>ellittiche</b>: l&rsquo;interno è determinato dal bordo, ma <b>i dettagli del bordo si dimenticano in fretta</b>. Un dato al bordo più oscillante ($\sin(n\pi x)$) decade come $e^{-n\pi y}$, cioè <b>ancora più in fretta</b> — la stessa gerarchia vista nel calore, ma qui nello spazio invece che nel tempo. Le frecce sono $\nabla u$, ortogonali alle equipotenziali (nucleo 01) — se $u$ è il potenziale elettrostatico, sono le linee di campo. Conseguenza pratica in laboratorio: una schermatura o una rugosità di dimensione $a$ produce effetti che svaniscono su una distanza $\sim a$, ed è il motivo per cui il campo &laquo;lontano&raquo; non ricorda i dettagli della sorgente.`}
]},

/* ---------------- 02 · CALORE ---------------- */
{ num:'02', title:'Il calore: irreversibilità e regolarizzazione', meta:'nucleo gaussiano · smorzamento $e^{-\\alpha k^2t}$ delle alte frequenze · non si integra all’indietro',
  blocchi:[
  {t:'reveal', title:'La soluzione fondamentale, via Fourier', tag:'derivazione', steps:[
   {label:'Trasforma in $x$', body:R`<p>Da $u_t=\alpha u_{xx}$, trasformando secondo Fourier in $x$ (nucleo 15: $\widehat{u_{xx}}=-k^2\hat u$):
   $$\hat u_t=-\alpha k^2\hat u\ \Longrightarrow\ \hat u(k,t)=\hat u_0(k)\,e^{-\alpha k^2t}.$$
   L&rsquo;EDP è diventata una EDO in $t$, una per ogni $k$: <b>Fourier ha diagonalizzato l&rsquo;operatore</b> (nucleo 16).</p>`},
   {label:'Antitrasforma: il nucleo del calore', body:R`<p>L&rsquo;antitrasformata di una gaussiana è una gaussiana (nucleo 15), quindi la soluzione è la <b>convoluzione</b> con
   $$K_t(x)=\frac{1}{\sqrt{4\pi\alpha t}}\,e^{-x^2/4\alpha t},\qquad u(x,t)=(K_t*u_0)(x).$$
   $K_t$ è la soluzione con dato iniziale $\delta$: <b>il calore inizialmente concentrato in un punto</b>. È una gaussiana che si allarga come $\sqrt{t}$ — la legge di scala della diffusione, $\langle x^2\rangle=2\alpha t$, la stessa del moto browniano.</p>`},
   {label:'Le tre conseguenze che contano', body:R`<ul>
   <li><b>Regolarizzazione istantanea:</b> per ogni $t\gt0$ la soluzione è $C^\infty$, anche partendo da un dato discontinuo: il fattore $e^{-\alpha k^2t}$ schiaccia tutte le alte frequenze.</li>
   <li><b>Velocità di propagazione infinita:</b> $K_t(x)\gt0$ per <b>ogni</b> $x$, appena $t\gt0$. Un&rsquo;anomalia fisica (l&rsquo;equazione non è relativistica) e il prezzo del modello diffusivo.</li>
   <li><b>Irreversibilità:</b> tornare indietro significa moltiplicare per $e^{+\alpha k^2t}$, che <b>esplode</b> sulle alte frequenze: il problema all&rsquo;indietro è <b>mal posto</b> (una perturbazione minuscola del dato finale produce variazioni illimitate del dato iniziale). <b>Non è che l&rsquo;informazione non ci sia: è che è mescolata in modi sempre più fini.</b></li>
   </ul>`}
  ]},
  {t:'plot', title:'Il nucleo del calore nello spazio-tempo',
   intro:R`$u(x,t)$ con dato iniziale concentrato: la superficie mostra come una &laquo;punta&raquo; si abbassa e si allarga. Asse orizzontale $x$, asse di profondità $t$. <b>Trascina per ruotare.</b>`,
   plots:[
    {kind:'surface3d', f:'exp(-x*x/(4*0.15*(y+0.07)))/sqrt(4*PI*0.15*(y+0.07))', xr:[-2.2,2.2], yr:[0,1.6], n:44,
     yaw:0.95, pitch:0.62, zscale:1.35, height:400,
     title:'u(x,t): la gaussiana si allarga come radice di t, il picco cala come 1/radice di t'}
   ],
   leggi:R`La cresta alta e stretta a $t$ piccolo è il calore concentrato; scorrendo lungo l&rsquo;asse del tempo si abbassa e si allarga, <b>conservando l&rsquo;area</b> (l&rsquo;energia termica totale si conserva: nessuna dispersione ai bordi in questo dominio infinito). Due letture. <b>(1)</b> La larghezza cresce come $\sqrt{t}$, non come $t$: è la firma della <b>diffusione</b> contro la propagazione balistica — quattro volte il tempo per il doppio della distanza. <b>(2)</b> Guardando la superficie a $t$ fissato si ha una gaussiana; guardandola a $x$ fissato si ha un impulso che sale e poi decade: è la <b>risposta all&rsquo;impulso</b> del mezzo, cioè la funzione di Green del nucleo 15, qui vista come oggetto spazio-temporale. Nota che a $t=0^+$ la superficie è già positiva ovunque: la velocità di propagazione infinita è visibile nel disegno.`},
  {t:'collaudo', title:'Controllo lampo', items:[
   {q:R`Perché il problema del calore all&rsquo;indietro è mal posto, mentre quello delle onde no?`,
    a:R`Perché il calore moltiplica il modo $k$ per $e^{-\alpha k^2t}$: invertendo si moltiplica per $e^{+\alpha k^2t}$, e un errore di misura di ampiezza $\varepsilon$ sul modo $k$ diventa $\varepsilon e^{\alpha k^2t}$ — illimitato al crescere di $k$. Le onde invece moltiplicano per $e^{\pm ickt}$, di <b>modulo 1</b>: invertire è altrettanto stabile che andare avanti. <b>La differenza fra reversibile e irreversibile, in Fourier, è la differenza fra moltiplicare per una fase e moltiplicare per un fattore che smorza.</b>`}
  ]}
]},

/* ---------------- 03 · ONDE ---------------- */
{ num:'03', title:'Le onde: propagazione, d’Alembert, cono di luce', meta:'$u=F(x-ct)+G(x+ct)$ · dominio di dipendenza · energia conservata, reversibile',
  blocchi:[
  {t:'prosa', title:'La formula di d’Alembert e cosa insegna', tag:'costruzione', html:R`
  <p>In una dimensione $u_{tt}=c^2u_{xx}$ si fattorizza: $\big(\partial_t-c\partial_x\big)\big(\partial_t+c\partial_x\big)u=0$, da cui la soluzione generale
  $$u(x,t)=F(x-ct)+G(x+ct)$$
  — due profili rigidi che viaggiano in verso opposto a velocità $c$, <b>senza deformarsi</b>. Con dati iniziali $u(x,0)=f$, $u_t(x,0)=g$:
  $$u(x,t)=\frac{f(x-ct)+f(x+ct)}{2}+\frac{1}{2c}\int_{x-ct}^{x+ct}g(s)\,ds.$$</p>
  <p>Da leggere con attenzione: il valore in $(x,t)$ dipende <b>solo</b> dai dati nell&rsquo;intervallo $[x-ct,x+ct]$ — il <b>dominio di dipendenza</b>. Fuori da lì, nulla può influenzare quel punto: è la <b>velocità finita di propagazione</b>, e in relatività diventa il <b>cono di luce</b>. Confronta col calore, dove il dominio di dipendenza è <b>tutta</b> la retta.</p>
  <p>L&rsquo;<b>energia</b> $E=\frac12\int\big(u_t^2+c^2u_x^2\big)dx$ si conserva: nessuno smorzamento, nessuna regolarizzazione. Un dato iniziale con uno spigolo mantiene lo spigolo per sempre, trasportandolo — le <b>singolarità viaggiano</b> lungo le caratteristiche $x\pm ct=$ cost. È il motivo per cui si sentono le consonanti e si vedono le ombre nette.</p>`},
  {t:'plot', title:'Un impulso che si sdoppia e viaggia',
   intro:R`Dato iniziale $f(x)=e^{-8x^2}$ con velocità iniziale nulla: si divide in due metà che partono in direzioni opposte. Istantanee a $t=0$, $0{,}6$, $1{,}2$ (con $c=1$).`,
   plots:[
    {kind:'func2d', xr:[-2.6,2.6], yr:[-0.25,1.15], height:330,
     title:'d Alembert: meta ampiezza a sinistra, meta a destra, profilo intatto',
     curves:[
      {f:'exp(-8*x*x)', col:'#8fa0b5', width:1.8, dash:true, label:'t=0'},
      {f:'0.5*exp(-8*(x-0.6)*(x-0.6))+0.5*exp(-8*(x+0.6)*(x+0.6))', col:'#4c8dff', width:2, label:'t=0.6'},
      {f:'0.5*exp(-8*(x-1.2)*(x-1.2))+0.5*exp(-8*(x+1.2)*(x+1.2))', col:'#b98cff', width:2.2, label:'t=1.2'}
     ]}
   ],
   leggi:R`Il profilo iniziale si separa in <b>due copie di ampiezza metà</b> che viaggiano a velocità $\pm c$ mantenendo <b>forma identica</b>: nessun allargamento, nessuna perdita. Confronta con la figura del calore: là un solo bozzo che si abbassa e si allarga, qui due bozzi rigidi che si allontanano. <b>La stessa condizione iniziale, due operatori diversi, due mondi.</b> Il dato è recuperabile in ogni istante — basta far girare l&rsquo;equazione all&rsquo;indietro, perché il tempo compare al quadrato e $t\to-t$ è una simmetria. <b>Attenzione a una sottigliezza del caso 3D:</b> in tre dimensioni spaziali vale il <b>principio di Huygens</b> forte, e il segnale passa lasciando dietro di sé il silenzio esatto — mentre in 2D (onde sull&rsquo;acqua) resta una coda. È il motivo per cui il suono in aria è nitido: viviamo in un numero <b>dispari</b> di dimensioni, e non è un dettaglio matematico.`}
]},

/* ---------------- 04 · IL FILO COMUNE ---------------- */
{ num:'04', title:'Il filo comune: separazione, spettro, classificazione', meta:'un solo metodo per tutte e tre · ellittico/parabolico/iperbolico · dove si è già visto tutto',
  blocchi:[
  {t:'gram', title:'Le tre equazioni a confronto', rows:[
   [R`<b>Laplace</b> $\Delta u=0$`, R`<b>ellittica</b>. Nessun tempo: equilibrio. Dati sul <b>bordo</b> di un dominio. Soluzioni $C^\infty$ (anzi analitiche). Principio del massimo. Il dato al bordo si smorza entrando.`],
   [R`<b>Calore</b> $u_t=\alpha\Delta u$`, R`<b>parabolica</b>. Dato <b>iniziale</b> + bordo. Regolarizza istantaneamente; velocità di propagazione infinita; <b>irreversibile</b>. Modo $k$: $e^{-\alpha k^2t}$.`],
   [R`<b>Onde</b> $u_{tt}=c^2\Delta u$`, R`<b>iperbolica</b>. Dato iniziale su $u$ <b>e</b> $u_t$. Propagazione a velocità <b>finita</b> (cono di luce); energia conservata; <b>reversibile</b>; le singolarità viaggiano. Modo $k$: $e^{\pm ickt}$.`],
   [R`<b>Il metodo unico</b>`, R`separazione $\Rightarrow$ problema agli autovalori in $x$ (Sturm–Liouville, nucleo 16) $\Rightarrow$ EDO in $t$ (nucleo 06) $\Rightarrow$ sovrapposizione coi coefficienti del dato iniziale (Fourier, nucleo 09). <b>Cambia solo l&rsquo;EDO temporale</b>: $T=$ cost, $e^{-\alpha\lambda t}$, oppure $\cos,\sin(\sqrt\lambda\,ct)$.`],
   [R`<b>Con sorgente</b>`, R`funzione di Green (nucleo 15) e sovrapposizione; nella base spettrale $G=\sum\phi_n\phi_n/\lambda_n$ (nucleo 16). Le antitrasformate si calcolano coi <b>residui</b> (nucleo 13), e la scelta del contorno è la scelta della <b>prescrizione causale</b>.`]
  ]},
  {t:'prosa', title:'La riga che riassume il percorso', tag:'sintesi', html:R`
  <p>Le tre EDP hanno lo <b>stesso</b> operatore spaziale, quindi la <b>stessa base</b> di autofunzioni. Ciò che le distingue è come ogni modo evolve nel tempo: <b>fermo</b> (Laplace), <b>smorzato</b> (calore), <b>oscillante</b> (onde). Equilibrio, dissipazione, propagazione sono tre destini dello stesso spettro.</p>
  <p>Ed è, letteralmente, la sintesi del percorso: trovare la base giusta (nuclei 09 e 16), scrivere il dato su quella base (Fourier), lasciar evolvere ogni componente da sola (EDO, nucleo 06), risommare. Tutto il resto — completezza (10), distribuzioni (15), residui (13) — serve a garantire che ciascuno di questi passi sia lecito.</p>`}
]},

/* ---------------- 05 · ESERCIZI ---------------- */
{ num:'05', title:'Esercizi — tocca a te', meta:'calore su un segmento · onde con dato a tratti · Laplace nel disco',
  blocchi:[
  {t:'esercizio', title:'Calore su $[0,\\pi]$ con dato iniziale $\\sin x+\\tfrac12\\sin3x$',
   src:'esercizio-tipo — la separazione applicata',
   testo:R`Risolvere $u_t=u_{xx}$ su $[0,\pi]$ con $u(0,t)=u(\pi,t)=0$ e $u(x,0)=\sin x+\frac12\sin3x$. Dire dopo quanto tempo il secondo modo è trascurabile rispetto al primo.`,
   steps:[
    {label:'Riconosci che il dato è già sviluppato', body:R`<p>Le autofunzioni sono $\sin(nx)$ con $\lambda_n=n^2$ (nucleo 16). Il dato iniziale è <b>già</b> una combinazione di autofunzioni: $c_1=1$, $c_3=\frac12$, tutti gli altri nulli. <b>Nessun integrale da calcolare</b> — è il regalo di questo tipo di esercizio, e va riconosciuto subito.</p>`},
    {label:'Evolvi ogni modo', body:R`<p>Ogni modo si smorza con $e^{-n^2t}$:
    $$u(x,t)=e^{-t}\sin x+\tfrac12e^{-9t}\sin 3x.$$</p>`},
    {label:'Il confronto fra i modi', body:R`<p>Il rapporto fra le ampiezze è $\dfrac{\frac12e^{-9t}}{e^{-t}}=\dfrac12e^{-8t}$. Scende sotto l&rsquo;$1\%$ quando $e^{-8t}\lt0{,}02$, cioè $t\gtrsim\frac{\ln50}{8}\approx0{,}49$. <b>Dopo un tempo dell&rsquo;ordine di $1/(n^2\alpha)$ sopravvive solo il modo fondamentale</b>: qualunque dato iniziale, per tempi lunghi, si appiattisce sulla stessa forma $\sin x$ — ed è l&rsquo;equivalente elementare di ciò che in meccanica statistica si chiama <b>termalizzazione</b>: perdita di memoria del dettaglio iniziale. $\blacksquare$</p>`}
   ],
   nota:R`Variante frequente: dato iniziale <b>non</b> combinazione finita di autofunzioni (per esempio $u_0=x(\pi-x)$). Allora i $c_n$ vanno calcolati con l&rsquo;integrale di Fourier del nucleo 09 — ed è l&rsquo;unico passo in più.`},
  {t:'collaudo', title:'Diagnostica rapida', items:[
   {q:R`Onde su $[0,L]$ con estremi fissi: perché una corda produce armoniche <b>esatte</b> e un tamburo no?`,
    a:R`Perché per la corda gli autovalori sono $\lambda_n=(n\pi/L)^2$, quindi le frequenze $\omega_n=cn\pi/L$ sono <b>multipli interi</b> della fondamentale: il suono è armonico e ha un&rsquo;altezza definita. Per una membrana circolare gli autovalori vengono dagli <b>zeri delle funzioni di Bessel</b> (Sturm–Liouville in coordinate polari, nucleo 16), che <b>non</b> sono in rapporto intero: il suono è inarmonico, percussivo. <b>La geometria del dominio decide lo spettro, e lo spettro decide il timbro</b> — «si può sentire la forma di un tamburo?» è una domanda matematica famosa (la risposta è: non del tutto).`},
   {q:R`In che senso l&rsquo;equazione di Schrödinger $i\hbar\psi_t=-\frac{\hbar^2}{2m}\psi_{xx}$ sta fra il calore e le onde?`,
    a:R`È formalmente l&rsquo;equazione del calore con coefficiente <b>immaginario</b>. Il modo $k$ evolve come $e^{-i\hbar k^2t/2m}$: modulo $1$ come le onde (unitaria, reversibile, nessuna dissipazione), ma con la <b>dipendenza $k^2$</b> del calore invece della $k$ lineare — quindi le componenti viaggiano a velocità diverse e il pacchetto si <b>allarga</b> (dispersione) pur conservando la norma. Il legame è esatto e si chiama <b>rotazione di Wick</b> $t\to-i\tau$ (nucleo 14): trasforma Schrödinger nel calore e il propagatore quantistico nel peso di Boltzmann. È il ponte formale fra meccanica quantistica e meccanica statistica.`}
  ]}
]},

/* ---------------- 06 · SENSO E ROTTE ---------------- */
{ num:'06', title:'Il senso e le rotte fisiche — e la fine del percorso', meta:'dove arriva tutto questo, e la domanda che resta aperta',
  blocchi:[
  {t:'prosa', title:'Cosa chiude il percorso', tag:'sintesi', html:R`
  <p><b>A monte c&rsquo;è tutto.</b> Topologia e differenziale (nuclei 00&ndash;01) per dire cosa significa liscio; Dini e ottimizzazione (02) per i vincoli; curve, superfici e campi (03&ndash;04) per il linguaggio vettoriale; i teoremi integrali (05) che diventano le leggi di conservazione; le EDO (06) che qui sono la parte temporale; serie, spazi, Hilbert (07&ndash;10) per avere una base e potersi fidare dei limiti; la complessa (11&ndash;14) per i residui, le antitrasformate e l&rsquo;analiticità come causalità; distribuzioni e operatori (15&ndash;16) per le sorgenti puntiformi e lo spettro.</p>
  <p><b>Il punto d&rsquo;arrivo.</b> Il metodo è uno solo: <b>trova la base in cui l&rsquo;operatore è diagonale, scrivici il dato, lascia evolvere ogni componente, risomma.</b> Tutto il percorso serve a rendere ciascuno di quei quattro verbi legittimo.</p>`},
  {t:'prolessi', title:'Dove riappare questo nucleo, nella fisica che farai',
   oggetto:R`<b>Le tre EDP archetipe</b> e la loro distinzione: equilibrio, dissipazione, propagazione — tre destini dello stesso spettro.`,
   rotte:[
    {dove:'Elettromagnetismo', txt:R`Elettrostatica e magnetostatica sono Laplace/Poisson; le onde EM nel vuoto sono l&rsquo;equazione delle onde con $c$ la velocità della luce, e i potenziali ritardati sono la sua funzione di Green. Le condizioni al bordo dei conduttori sono, letteralmente, il problema al bordo di questo nucleo.`},
    {dove:'Meccanica<br>statistica', txt:R`L&rsquo;equazione di diffusione emerge come limite macroscopico di un cammino aleatorio microscopico: $\langle x^2\rangle=2\alpha t$ è la relazione di Einstein, e $\alpha$ si lega alla temperatura dal <b>teorema di fluttuazione-dissipazione</b>. La freccia del tempo del calore <b>nasce</b> da una dinamica microscopica reversibile.`},
    {dove:'Meccanica<br>quantistica', txt:R`Schrödinger è il calore con coefficiente immaginario: unitaria come le onde, dispersiva come il calore. L&rsquo;equazione stazionaria $H\psi=E\psi$ è il problema agli autovalori del nucleo 16, e la buca di potenziale è il problema al bordo di questo.`},
    {dove:'Relatività', txt:R`Il <b>dominio di dipendenza</b> dell&rsquo;equazione delle onde è il <b>cono di luce</b>: la struttura causale dello spaziotempo è, matematicamente, l&rsquo;iperbolicità dell&rsquo;equazione. Un&rsquo;equazione parabolica come il calore viola la causalità relativistica, ed è per questo che le teorie relativistiche della diffusione sono più delicate.`}
   ],
   domanda:R`Ecco la domanda che ha percorso tutto il percorso, e con cui è giusto chiuderlo. L&rsquo;equazione del calore è <b>irreversibile</b>: $t\to-t$ la rompe, e il problema all&rsquo;indietro è mal posto. Ma i costituenti microscopici obbediscono a equazioni <b>reversibili</b> — Newton, o Schrödinger, che sono simmetriche nel tempo. È il paradosso di <b>Loschmidt</b>, e non si scioglie dicendo «statisticamente». <b>Domanda che porti avanti:</b> l&rsquo;irreversibilità è (a) un&rsquo;approssimazione che nasconde un&rsquo;informazione conservata ma inaccessibile — le alte frequenze del nucleo 15, i modi microscopici in cui la memoria migra; (b) una proprietà della <b>proiezione</b> che scegliamo, cioè di quali osservabili guardiamo (nucleo 16); oppure (c) qualcosa di genuinamente nuovo che emerge nel limite di infiniti gradi di libertà, come le singolarità del nucleo 14 che compaiono solo al limite termodinamico? La decoerenza propende per (a)+(b), l&rsquo;ETH dà la formulazione precisa di (b), e (c) resta il territorio meno battuto. <b>Il percorso finisce qui perché da qui in avanti non è più matematica da imparare: è la tua domanda.</b>`}
]}

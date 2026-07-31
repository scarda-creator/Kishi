/*META
{ "nn":"21",
  "file":"21-ergodicita.html",
  "titolo":"Nucleo 21 — Ergodicità e mescolamento: la traiettoria visita tutto?",
  "nome":"Ergodicità e mescolamento",
  "banner":"PERCORSO-MATEMATICA · Movimento V · Nucleo <b>21 — Ergodicità e mescolamento: medie temporali contro medie d’insieme</b> · ponte Meccanica → meccanica statistica" }
META*/

/* ---------------- 00 · PERCHÉ QUESTO NUCLEO ---------------- */
{ num:'00', title:'Perché questo nucleo', meta:'la prima risposta candidata alla domanda del nucleo 20 · e perché da sola non basta',
  blocchi:[
  {t:'prosa', title:'La domanda, posta con precisione', tag:'first principles', html:R`
  <p>La meccanica statistica calcola le medie <b>d&rsquo;insieme</b>: si pesa ogni microstato con $\rho$ e si integra. Il laboratorio misura invece medie <b>temporali</b>: uno strumento osserva <i>un</i> sistema per un certo tempo e restituisce la media di quel che è successo. Che le due coincidano non è ovvio — <b>è un&rsquo;ipotesi</b>, e si chiama ipotesi ergodica:
  $$\lim_{T\to\infty}\frac1T\int_0^T A\big(q(t),p(t)\big)\,dt \;=\; \int_\Gamma A(q,p)\,\rho(q,p)\,d\Gamma.$$</p>
  <p>A sinistra <b>una traiettoria</b> seguita a lungo; a destra <b>tutto lo spazio</b> pesato in un istante. L&rsquo;uguaglianza dice che, col tempo, una singola traiettoria «campiona» l&rsquo;intero spazio accessibile con le frequenze giuste. <b>Se è vera, il calcolo teorico e la misura parlano della stessa cosa.</b> Se è falsa, la meccanica statistica non ha fondamento — e in molti sistemi è falsa.</p>`}
]},

/* ---------------- 01 · ERGODICITÀ ---------------- */
{ num:'01', title:'Ergodicità: la definizione seria', meta:'insiemi invarianti di misura zero o uno · il teorema di Birkhoff · il ruolo della misura',
  blocchi:[
  {t:'prosa', title:'Perché «passa per ogni punto» è la definizione sbagliata', tag:'grammatica', html:R`
  <p>La formulazione ingenua — «la traiettoria passa per <b>tutti</b> i punti della superficie di energia» — è <b>falsa per ragioni di dimensione</b>: una curva ha dimensione 1, la superficie di energia ne ha $2n-1$. Una linea non può riempire un volume.</p>
  <p>La definizione corretta è insiemistica: il sistema è <b>ergodico</b> se ogni insieme <b>invariante</b> sotto il flusso ha misura <b>zero</b> oppure <b>uno</b>. In parole: <b>non esistono regioni non banali in cui il moto resti intrappolato</b>. Non «passa ovunque», ma «non c&rsquo;è nessun pezzo che può fare a meno del resto».</p>
  <p><b>Teorema di Birkhoff.</b> Per un sistema che conserva una misura di probabilità, la media temporale esiste per quasi ogni condizione iniziale; ed è <b>uguale alla media d&rsquo;insieme</b> per quasi ogni condizione iniziale <b>se e solo se</b> il sistema è ergodico. Il «quasi ogni» è quello del nucleo 10: le eccezioni hanno misura nulla.</p>
  <div class="note">Qui la misura di Liouville (nucleo 20) fa un lavoro decisivo: è <b>lei</b> a dire quali insiemi sono trascurabili. Cambiando misura cambierebbero le eccezioni. L&rsquo;invarianza della misura non è un dettaglio tecnico: è ciò che rende l&rsquo;enunciato indipendente dall&rsquo;istante in cui lo si formula.</div>`},
  {t:'collaudo', title:'Controllo lampo', items:[
   {q:R`L&rsquo;oscillatore armonico è ergodico sulla sua superficie di energia?`,
    a:R`<b>Sì, ma banalmente</b>: la superficie di energia è una singola ellisse (curva chiusa) e la traiettoria la percorre tutta. Il caso interessante è l&rsquo;opposto: due oscillatori <b>indipendenti</b> con frequenze in rapporto razionale danno traiettorie <b>chiuse</b> che coprono solo una curva sul toro — <b>non ergodico</b>; con rapporto irrazionale la traiettoria è densa sul toro — ergodico. <b>Un&rsquo;intera proprietà fisica che dipende dall&rsquo;irrazionalità di un numero</b>: è il primo segnale che l&rsquo;ergodicità è una nozione delicata, non generica.`},
   {q:R`Perché un sistema <b>integrabile</b> (tante costanti del moto quanti gradi di libertà) non può essere ergodico?`,
    a:R`Perché ogni costante del moto ulteriore all&rsquo;energia <b>ritaglia</b> la superficie di energia in sottoinsiemi invarianti di misura né 0 né 1: il moto resta confinato su un <b>toro</b> di dimensione $n$ dentro una superficie di dimensione $2n-1$. Le medie temporali dipendono allora da <b>quale</b> toro, cioè dai valori iniziali delle costanti — e non coincidono con la media d&rsquo;insieme. <b>Le leggi di conservazione sono nemiche dell&rsquo;ergodicità</b>, e per questo i sistemi molto simmetrici termalizzano male.`}
  ]}
]},

/* ---------------- 02 · TORI E CAOS ---------------- */
{ num:'02', title:'Tori che sopravvivono e mare caotico', meta:'KAM · la transizione non è brusca · una figura che è un esperimento numerico',
  blocchi:[
  {t:'prosa', title:'Cosa succede accendendo una perturbazione', tag:'il fatto sperimentale', html:R`
  <p>Se un sistema integrabile viene perturbato, l&rsquo;aspettativa ingenua è che diventi subito ergodico. Il <b>teorema KAM</b> (Kolmogorov&ndash;Arnold&ndash;Moser) dice il contrario: per perturbazione piccola, <b>la maggior parte dei tori sopravvive</b>, deformati ma intatti. Il sistema resta intrappolato, e l&rsquo;ergodicità non c&rsquo;è.</p>
  <p>Crescendo la perturbazione i tori si rompono <b>uno alla volta</b> — prima quelli con frequenze «quasi razionali», resistono più a lungo quelli più irrazionali — e fra i tori superstiti si apre un <b>mare caotico</b>. Lo spazio delle fasi diventa un misto: isole di regolarità immerse nel disordine. <b>La transizione all&rsquo;ergodicità non è un interruttore, è un&rsquo;erosione.</b></p>`},
  {t:'plot', title:'La mappa standard: la stessa dinamica, due intensità',
   intro:R`Iterazione di $p_{n+1}=p_n+K\sin q_n$, $q_{n+1}=q_n+p_{n+1}$ (mappa standard di Chirikov), su un toro. Ogni colore è <b>una sola</b> condizione iniziale, seguita per 600 passi.`,
   plots:[
    {kind:'iter2d', fq:'x + (y + 0.4*sin(x))', fp:'y + 0.4*sin(x)',
     xr:[0,6.28319], yr:[0,6.28319], wrapx:true, wrapy:true, iter:600, equal:true, ticks:false,
     w:400, height:380, title:'K=0.4: quasi ogni orbita resta su una curva (toro KAM)',
     seeds:[[0.1,0.55],[0.1,1.1],[0.1,1.65],[0.1,2.2],[0.1,2.75],[0.1,3.3],[0.1,3.85],[0.1,4.4],[0.1,4.95],[0.1,5.5],[0.1,6.0],[3.14159,3.14159],[3.34,3.14159],[3.54,3.14159]]},
    {kind:'iter2d', fq:'x + (y + 1.1*sin(x))', fp:'y + 1.1*sin(x)',
     xr:[0,6.28319], yr:[0,6.28319], wrapx:true, wrapy:true, iter:600, equal:true, ticks:false,
     w:400, height:380, title:'K=1.1: una sola orbita riempie il mare caotico',
     seeds:[[0.1,0.55],[0.1,1.1],[0.1,1.65],[0.1,2.2],[0.1,2.75],[0.1,3.3],[0.1,3.85],[0.1,4.4],[0.1,4.95],[0.1,5.5],[0.1,6.0],[3.14159,3.14159],[3.34,3.14159],[3.54,3.14159]]}
   ],
   leggi:R`<b>Questa figura non è un disegno: è un esperimento numerico</b>, gli stessi semi iterati con due valori del parametro. A sinistra ogni colore resta su una <b>curva</b>: sono i tori KAM, e ciascuna orbita conosce solo la propria — <b>il sistema non è ergodico</b>, perché quelle curve sono insiemi invarianti di misura né 0 né 1. A destra, con perturbazione più forte, la maggior parte dei colori si sparpaglia in una <b>nube</b> che riempie la stessa regione: lì una singola orbita visita quasi tutto, e le medie temporali cominciano ad avere senso. Ma guarda bene: <b>restano le isole</b>, piccole zone regolari attorno ai punti fissi stabili, dove un&rsquo;orbita è ancora intrappolata. <b>Ecco perché l&rsquo;ergodicità è delicata:</b> nello stesso sistema, alla stessa energia, alcune condizioni iniziali termalizzano e altre no. Non è una proprietà del sistema soltanto: è una proprietà di <i>dove</i> parti.`},
  {t:'collaudo', title:'Controllo lampo', items:[
   {q:R`Se il mare caotico e le isole convivono, il sistema è ergodico o no?`,
    a:R`<b>Non</b> ergodico in senso stretto: le isole sono insiemi invarianti di misura positiva e minore di uno, che è esattamente la negazione della definizione. Ma il mare caotico può essere ergodico <b>al suo interno</b>, e se occupa gran parte del volume le previsioni statistiche funzionano <i>in pratica</i> per quasi tutte le condizioni iniziali. <b>È il primo esempio serio di una distinzione che ti seguirà</b>: la proprietà matematica esatta è falsa, la sua versione approssimata regge — e ciò che si misura in laboratorio è la seconda.`}
  ]}
]},

/* ---------------- 03 · MESCOLAMENTO ---------------- */
{ num:'03', title:'Il mescolamento è più forte dell’ergodicità', meta:'ergodico ≠ mescolante · perché serve il mixing per l’equilibrio · i tempi',
  blocchi:[
  {t:'prosa', title:'Due proprietà che si confondono sempre', tag:'la distinzione che conta', html:R`
  <p><b>Ergodico</b> significa che le medie temporali convergono a quelle d&rsquo;insieme. <b>Mescolante</b> (mixing) è più forte: per ogni coppia di regioni $A,B$,
  $$\mu\big(\Phi_t(A)\cap B\big)\ \xrightarrow[t\to\infty]{}\ \mu(A)\,\mu(B).$$
  Cioè: dopo un tempo lungo, la frazione dell&rsquo;insieme $A$ che si trova in $B$ è la stessa <b>ovunque</b> — $A$ si è spalmato uniformemente, e sapere di essere partiti in $A$ non dice più nulla su dove ci si trova.</p>
  <p><b>Mescolante ⟹ ergodico</b>, ma non il viceversa. Il controesempio è pulito: una <b>rotazione irrazionale</b> del cerchio è ergodica (l&rsquo;orbita è densa, le medie temporali funzionano) ma <b>non mescola</b> — un arco ruota rigidamente e resta un arco, non si spalma mai. <b>Il gas che si diffonde in una stanza richiede il mescolamento, non la sola ergodicità</b>: l&rsquo;ergodicità garantisce le medie su tempi infiniti, il mescolamento garantisce che il sistema <i>si avvicini</i> all&rsquo;equilibrio e ci resti.</p>
  <div class="note">Il meccanismo del mescolamento è quello della figura del nucleo 20: <b>stirare e ripiegare</b>. Non potendo comprimere il volume (Liouville), l&rsquo;unico modo di spalmare una regione ovunque è allungarla in filamenti sempre più sottili che si intrecciano. Il tasso di allungamento è l&rsquo;<b>esponente di Lyapunov</b>: dove è positivo, due condizioni iniziali vicine si separano esponenzialmente, ed è la definizione operativa di <b>caos</b>.</div>`},
  {t:'plot', title:'Stirare e ripiegare: l’unico modo di mescolare senza comprimere',
   intro:R`Un segmento di condizioni iniziali vicine <b>nel mare caotico</b>, seguito per 3, 30 e 300 passi della mappa standard ($K=1.1$). Il seme è stato scelto <b>misurando</b>: su una griglia 20×20, quest&rsquo;orbita passa da 3 celle a 26 a 106.`,
   plots:[
    {kind:'iter2d', fq:'x + (y + 1.1*sin(x))', fp:'y + 1.1*sin(x)',
     xr:[0,6.28319], yr:[0,6.28319], wrapx:true, wrapy:true, iter:3, equal:true, ticks:false,
     w:270, height:260, title:'dopo 3 passi: ancora insieme',
     seeds:[[2.094,4.189],[2.095,4.189],[2.096,4.189],[2.097,4.189],[2.098,4.189],[2.099,4.189],[2.100,4.189],[2.101,4.189],[2.102,4.189],[2.103,4.189],[2.104,4.189]]},
    {kind:'iter2d', fq:'x + (y + 1.1*sin(x))', fp:'y + 1.1*sin(x)',
     xr:[0,6.28319], yr:[0,6.28319], wrapx:true, wrapy:true, iter:30, equal:true, ticks:false,
     w:270, height:260, title:'dopo 30: il filamento si allunga',
     seeds:[[2.094,4.189],[2.095,4.189],[2.096,4.189],[2.097,4.189],[2.098,4.189],[2.099,4.189],[2.100,4.189],[2.101,4.189],[2.102,4.189],[2.103,4.189],[2.104,4.189]]},
    {kind:'iter2d', fq:'x + (y + 1.1*sin(x))', fp:'y + 1.1*sin(x)',
     xr:[0,6.28319], yr:[0,6.28319], wrapx:true, wrapy:true, iter:300, equal:true, ticks:false,
     w:270, height:260, title:'dopo 300: sparsi ovunque',
     seeds:[[2.094,4.189],[2.095,4.189],[2.096,4.189],[2.097,4.189],[2.098,4.189],[2.099,4.189],[2.100,4.189],[2.101,4.189],[2.102,4.189],[2.103,4.189],[2.104,4.189]]}
   ],
   leggi:R`Undici condizioni iniziali che all&rsquo;inizio distano <b>un millesimo</b> l&rsquo;una dall&rsquo;altra, prese nel mare caotico. Dopo pochi passi sono ancora un gruppetto; dopo trenta si sono distese; dopo trecento sono <b>indistinguibili da una nuvola casuale</b> sparsa su tutta la regione caotica. <b>Eppure il volume non è cambiato di un&rsquo;unghia</b> (Liouville) e la dinamica è perfettamente <b>deterministica e invertibile</b>: dando i valori esatti finali e girando il tempo all&rsquo;indietro, i punti tornerebbero al segmentino di partenza. <b>La perdita è nella nostra risoluzione, non nella fisica</b> — e la scala di tempo su cui avviene è fissata dall&rsquo;esponente di Lyapunov: una precisione iniziale migliorata di un fattore mille compra soltanto un tempo di predizione più lungo di $\ln1000/\lambda$. <b>È il motivo per cui il caos non è imprecisione, ma amplificazione dell&rsquo;imprecisione.</b>`}
]},

/* ---------------- 04 · SENSO E ROTTE ---------------- */
{ num:'04', title:'Il senso e le rotte fisiche', meta:'perché l’ergodicità non basta, e cosa la sostituisce nel caso quantistico',
  blocchi:[
  {t:'prosa', title:'Cosa hai davvero imparato', tag:'sintesi', html:R`
  <p><b>A monte.</b> La misura invariante e il flusso incomprimibile vengono dal nucleo 20; il «quasi ovunque» dal nucleo 10; l&rsquo;idea che una proprietà valga per <i>quasi tutte</i> le condizioni iniziali è la stessa distinzione fra impossibile e trascurabile incontrata lì.</p>
  <p><b>Il punto.</b> L&rsquo;ergodicità giustifica il calcolo statistico, ma è <b>rara e fragile</b>: le costanti del moto la distruggono, KAM mostra che i tori resistono, e nei sistemi reali convivono isole regolari e mare caotico. Il <b>mescolamento</b> è ciò che serve davvero per l&rsquo;equilibrio, ed è più forte.</p>
  <p><b>A valle.</b> Il nucleo 22 mostra che nemmeno il mescolamento basta a produrre irreversibilità <i>vera</i>: serve dire cosa un osservatore non risolve. E in meccanica quantistica l&rsquo;intera impalcatura va rifatta, perché l&rsquo;evoluzione unitaria non mescola nulla nel senso classico: lì il ruolo dell&rsquo;ergodicità è preso dall&rsquo;<b>ETH</b>.</p>`},
  {t:'prolessi', title:'Dove riappare questo nucleo, nella fisica che farai',
   oggetto:R`<b>L&rsquo;ergodicità e il mescolamento</b>: quando una traiettoria sola può parlare per l&rsquo;intero insieme.`,
   rotte:[
    {dove:'Fondamenti della<br>meccanica statistica', txt:R`È la giustificazione dell&rsquo;insieme microcanonico: se il sistema è ergodico sulla superficie di energia, la media temporale che misuri coincide con l&rsquo;integrale che calcoli. Boltzmann la propose come ipotesi; un secolo dopo è dimostrata solo per pochi modelli (biliardi di Sinai, sfere dure).`},
    {dove:'Caos<br>hamiltoniano', txt:R`Esponenti di Lyapunov, KAM, transizione al caos: la figura della mappa standard è il ritratto standard del campo. La domanda «quanto è grande il mare caotico?» è quantitativa e si misura.`},
    {dove:'Caos<br>quantistico', txt:R`Nei sistemi quantistici non esistono traiettorie, quindi l&rsquo;ergodicità classica non si trasporta. Il suo posto è preso dalla <b>statistica dei livelli</b> (nucleo 16: Poisson contro GOE/GUE) e dalla struttura degli autostati: sistemi il cui limite classico è caotico hanno spettri con repulsione dei livelli.`},
    {dove:'ETH', txt:R`L&rsquo;<b>eigenstate thermalization hypothesis</b> è l&rsquo;analogo quantistico dell&rsquo;ipotesi ergodica, ma sposta l&rsquo;affermazione: non sulle traiettorie, bensì sugli <b>elementi di matrice</b> delle osservabili negli autostati dell&rsquo;energia. Se quelli si comportano come quantità pseudo-casuali, <b>un singolo autostato contiene già i valori termici</b> — e non serve alcuna media temporale.`}
   ],
   domanda:R`L&rsquo;ipotesi ergodica chiede che <i>una</i> traiettoria visiti tutto. Ma i tempi per farlo crescono come $e^N$, e nessun esperimento dura così: il gas nella stanza raggiunge l&rsquo;equilibrio in <b>secondi</b>, non in tempi di ricorrenza. <b>Quindi l&rsquo;ergodicità, anche quando è vera, spiega la cosa sbagliata</b> — spiega le medie su tempi infiniti, mentre l&rsquo;equilibrio è un fatto rapidissimo. <b>Domanda che porti avanti:</b> qual è la proprietà che rende l&rsquo;equilibrio <i>veloce</i>? Il candidato è il mescolamento con il suo tasso di Lyapunov, ma anche lì la scala giusta è quella su cui <b>l&rsquo;osservatore</b> smette di distinguere il filamento dalla nuvola. La risposta, se c&rsquo;è, non riguarda solo il sistema: riguarda la coppia sistema-osservabile. Ed è precisamente ciò che l&rsquo;ETH mette al centro.`}
]}

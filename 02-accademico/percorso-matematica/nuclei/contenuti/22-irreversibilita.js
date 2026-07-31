/*META
{ "nn":"22",
  "file":"22-irreversibilita.html",
  "titolo":"Nucleo 22 — Irreversibilità: Loschmidt, coarse-graining, decoerenza",
  "nome":"Irreversibilità e freccia del tempo",
  "banner":"PERCORSO-MATEMATICA · Movimento V · Nucleo <b>22 — Irreversibilità: il paradosso di Loschmidt, il coarse-graining, la decoerenza</b> · qui il percorso consegna la domanda di tesi" }
META*/

/* ---------------- 00 · PERCHÉ QUESTO NUCLEO ---------------- */
{ num:'00', title:'Perché questo nucleo', meta:'l’ultimo del percorso · la domanda che tutti i nuclei hanno preparato',
  blocchi:[
  {t:'prosa', title:'Il conto che non torna', tag:'first principles', html:R`
  <p>Mettiamo in fila tre fatti dimostrati, ciascuno solido per conto suo:</p>
  <ul>
  <li>le equazioni microscopiche sono <b>invarianti per inversione temporale</b> (Newton e Schrödinger: $t\to-t$ manda soluzioni in soluzioni);</li>
  <li>il flusso conserva il <b>volume</b> nello spazio delle fasi e l&rsquo;evoluzione è <b>invertibile</b> (nucleo 20);</li>
  <li>l&rsquo;entropia di Gibbs $S=-k\!\int\rho\ln\rho$ è <b>costante nel tempo</b>, e nel caso quantistico lo è quella di von Neumann.</li>
  </ul>
  <p>E poi c&rsquo;è il quarto fatto, che è il più solido di tutti: <b>i sistemi macroscopici vanno in una direzione sola</b>. Il caffè si raffredda, il gas si espande, l&rsquo;uovo non si ricompone. Nessuno ha mai osservato il contrario.</p>
  <p>Le due obiezioni storiche sono precise e non sono state <i>confutate</i>: sono state <b>ricollocate</b>. <b>Loschmidt</b> (1876): se inverti tutte le velocità, il sistema ripercorre a ritroso la propria storia, e l&rsquo;entropia diminuisce — quindi il secondo principio non può essere un teorema di meccanica. <b>Zermelo</b> (1896): per la ricorrenza di Poincaré (nucleo 20) il sistema <i>ritorna</i>, quindi l&rsquo;entropia non può crescere per sempre. <b>Entrambi hanno ragione. E il caffè si raffredda lo stesso.</b></p>`}
]},

/* ---------------- 01 · COARSE-GRAINING ---------------- */
{ num:'01', title:'Il coarse-graining: dove entra l’osservatore', meta:'entropia di Gibbs contro entropia di Boltzmann · la risoluzione finita come ingrediente fisico',
  blocchi:[
  {t:'prosa', title:'Due entropie, non una', tag:'la distinzione decisiva', html:R`
  <p>La contraddizione si scioglie riconoscendo che le due entropie <b>non sono la stessa quantità</b>.</p>
  <ul>
  <li><b>Entropia di Gibbs</b> $S_G=-k\!\int\rho\ln\rho\,d\Gamma$: proprietà della distribuzione <b>esatta</b>. È costante, come dimostrato — il flusso trasporta $\rho$ rigidamente (nucleo 20).</li>
  <li><b>Entropia di Boltzmann</b> $S_B=k\ln\Omega$: il logaritmo del <b>volume dei microstati compatibili con il macrostato</b> in cui ti trovi. Dipende da come hai deciso di suddividere lo spazio delle fasi in macrostati, cioè da <b>cosa sai misurare</b>.</li>
  </ul>
  <p>La seconda <b>cresce</b>, e cresce per una ragione geometrica, non dinamica: il filamento del nucleo 21 si allunga finché <b>tocca celle che prima non toccava</b>. Il volume del filamento resta identico (Liouville), ma il volume delle <b>celle che lo contengono</b> esplode. Coarse-graining significa esattamente questo: sostituire la distribuzione fine con la sua media su celle di risoluzione finita, e misurare l&rsquo;entropia di quella.</p>
  <div class="note warn"><b>Il punto che non va addolcito.</b> Il coarse-graining non è un&rsquo;approssimazione fatta per pigrizia: <b>senza di esso l&rsquo;entropia non cresce, punto</b>. La freccia del tempo, in questa lettura, non è una proprietà della dinamica ma della <b>coppia dinamica-osservabile</b>. Chi trova questa risposta insoddisfacente ha buoni motivi — sembra che l&rsquo;irreversibilità del mondo dipenda da noi. La replica moderna è che ciò che conta non è l&rsquo;osservatore umano ma <b>quali gradi di libertà sono accessibili</b>, il che è un fatto fisico: è la strada della decoerenza (tappa 03).</div>`},
  {t:'plot', title:'Lo stesso insieme, due risoluzioni',
   intro:R`Il mare caotico della mappa standard, con sopra una griglia di celle: è la risoluzione con cui un osservatore distingue gli stati. Il filamento è <b>lo stesso</b> — cambia solo quante celle tocca.`,
   plots:[
    {kind:'iter2d', fq:'x + (y + 1.1*sin(x))', fp:'y + 1.1*sin(x)',
     xr:[0,6.28319], yr:[0,6.28319], wrapx:true, wrapy:true, iter:12, equal:true, ticks:false,
     w:400, height:380, title:'poco dopo l inizio: il filamento tocca poche celle',
     seeds:[[2.0,3.10],[2.0,3.12],[2.0,3.14],[2.0,3.16],[2.0,3.18],[2.0,3.20]],
     segs:[{x1:0,y1:1.57,x2:6.28,y2:1.57,col:'#3a4557',width:1},{x1:0,y1:3.14,x2:6.28,y2:3.14,col:'#3a4557',width:1},
           {x1:0,y1:4.71,x2:6.28,y2:4.71,col:'#3a4557',width:1},{x1:1.57,y1:0,x2:1.57,y2:6.28,col:'#3a4557',width:1},
           {x1:3.14,y1:0,x2:3.14,y2:6.28,col:'#3a4557',width:1},{x1:4.71,y1:0,x2:4.71,y2:6.28,col:'#3a4557',width:1}]},
    {kind:'iter2d', fq:'x + (y + 1.1*sin(x))', fp:'y + 1.1*sin(x)',
     xr:[0,6.28319], yr:[0,6.28319], wrapx:true, wrapy:true, iter:400, equal:true, ticks:false,
     w:400, height:380, title:'molto dopo: le tocca quasi tutte (S_B cresciuta)',
     seeds:[[2.0,3.10],[2.0,3.12],[2.0,3.14],[2.0,3.16],[2.0,3.18],[2.0,3.20]],
     segs:[{x1:0,y1:1.57,x2:6.28,y2:1.57,col:'#3a4557',width:1},{x1:0,y1:3.14,x2:6.28,y2:3.14,col:'#3a4557',width:1},
           {x1:0,y1:4.71,x2:6.28,y2:4.71,col:'#3a4557',width:1},{x1:1.57,y1:0,x2:1.57,y2:6.28,col:'#3a4557',width:1},
           {x1:3.14,y1:0,x2:3.14,y2:6.28,col:'#3a4557',width:1},{x1:4.71,y1:0,x2:4.71,y2:6.28,col:'#3a4557',width:1}]}
   ],
   leggi:R`Gli stessi sei punti di partenza, la stessa dinamica invertibile, la stessa misura di Liouville: <b>il volume occupato non è cambiato</b>. Ciò che cambia è il numero di <b>celle</b> toccate, e $S_B=k\ln(\text{volume delle celle toccate})$ cresce di conseguenza. <b>Tre letture, in ordine di importanza.</b> <b>(1)</b> L&rsquo;aumento di entropia è un fatto sulla <b>griglia</b>, non sui punti: raffinandola all&rsquo;infinito, $S_B$ tornerebbe costante e uguale a $S_G$. <b>(2)</b> Il processo è <b>reversibile</b>: invertendo esattamente le velocità i punti ripercorrerebbero la loro storia e l&rsquo;entropia calerebbe — ma «esattamente» significa con precisione infinita, e un errore piccolissimo viene amplificato dal Lyapunov fino a distruggere il ritorno. <b>Loschmidt ha ragione in linea di principio e torto in ogni laboratorio.</b> <b>(3)</b> La ricorrenza di Zermelo c&rsquo;è, ma su tempi $\sim e^{N}$: per un gas reale, più lunghi dell&rsquo;età dell&rsquo;universo per un fattore che non ha nome. <b>Il secondo principio non è una legge assoluta: è una legge di probabilità con margini così larghi da sembrare assoluta.</b>`}
]},

/* ---------------- 02 · IL CASO QUANTISTICO ---------------- */
{ num:'02', title:'Il caso quantistico: unitarietà, decoerenza, ETH', meta:'l’evoluzione unitaria non perde nulla · l’informazione migra nell’ambiente · l’ETH sposta la domanda sugli osservabili',
  blocchi:[
  {t:'prosa', title:'Lo stesso problema, con un aggravante', tag:'costruzione', html:R`
  <p>In meccanica quantistica il problema non si attenua, peggiora. L&rsquo;evoluzione $|\psi(t)\rangle=e^{-iHt/\hbar}|\psi(0)\rangle$ è <b>unitaria</b> (nucleo 16): conserva i prodotti scalari, è invertibile, e nella base degli autostati (nucleo 16, tappa 02) <b>non succede assolutamente nulla</b> — solo fasi che ruotano, con $|c_n|$ costanti per sempre. L&rsquo;entropia di von Neumann di uno stato puro è <b>zero e resta zero</b>. Un sistema quantistico chiuso <b>non termalizza mai</b>, in senso stretto.</p>
  <p>Eppure i sistemi quantistici isolati, in laboratorio, termalizzano: dopo un transiente le osservabili si assestano su valori d&rsquo;equilibrio e ci restano. Le due risposte moderne sono complementari.</p>
  <ul>
  <li><b>Decoerenza.</b> Nessun sistema è davvero isolato: interagendo con l&rsquo;ambiente, lo stato del sistema <b>più</b> ambiente resta puro, ma quello del <i>solo</i> sistema (traccia parziale sull&rsquo;ambiente) diventa misto e la sua entropia <b>cresce</b>. L&rsquo;informazione non è distrutta: è <b>migrata</b> nelle correlazioni con gradi di libertà che nessuno guarda. <b>È il coarse-graining della tappa 01, con l&rsquo;ambiente al posto della griglia</b> — e stavolta chi decide cosa è trascurabile non è l&rsquo;osservatore, è la fisica dell&rsquo;interazione.</li>
  <li><b>ETH.</b> Anche per un sistema perfettamente chiuso, l&rsquo;<b>eigenstate thermalization hypothesis</b> dice che la termalizzazione non riguarda lo <i>stato</i> ma le <b>osservabili</b>: se gli elementi di matrice $\langle m|\hat O|n\rangle$ hanno una parte diagonale liscia nell&rsquo;energia e una parte fuori diagonale piccola e pseudo-casuale, allora le fasi che ruotano si <b>cancellano</b> fra loro e $\langle\hat O\rangle(t)$ si assesta sul valore microcanonico. <b>Un singolo autostato contiene già l&rsquo;informazione termica.</b></li>
  </ul>
  <div class="note">Nota la simmetria con il caso classico, ed è la cosa che vale la pena portare via da tutto il Movimento V: in entrambi i mondi la dinamica non perde nulla, e l&rsquo;irreversibilità nasce quando si <b>restringe l&rsquo;attenzione</b> — a celle di risoluzione finita, a un sottosistema, a un&rsquo;osservabile. <b>L&rsquo;equilibrio non è una proprietà dello stato, è una proprietà della coppia stato-osservabile.</b></div>`},
  {t:'plot', title:'Le fasi che si cancellano: come un’osservabile si stabilizza',
   intro:R`Somma di molte componenti $\sum_n c_n e^{-iE_nt/\hbar}$ con energie irregolari: la parte reale, che è ciò che un&rsquo;osservabile «vede», parte da un valore alto e si assesta attorno a zero senza che nessuna ampiezza $|c_n|$ sia cambiata.`,
   plots:[
    {kind:'func2d', xr:[0,60], yr:[-0.55,1.05], height:330,
     title:'nessuna ampiezza cambia, eppure la somma si stabilizza (e a volte ritorna)',
     curves:[{f:'(cos(1*x)+cos(1.7*x)+cos(2.3*x)+cos(3.1*x)+cos(4.3*x)+cos(5.1*x)+cos(6.7*x)+cos(7.3*x))/8',
              col:'#5eead4', width:1.6, label:'8 componenti'},
             {f:'0', col:'#4d5a6b', width:1.2, dash:true}]}
   ],
   leggi:R`A $t=0$ tutte le componenti sono in fase e la somma vale 1: è lo stato iniziale, ben lontano dall&rsquo;equilibrio. Poi le fasi si separano — ognuna ruota alla propria frequenza — e la somma <b>collassa</b> attorno a zero, che è il valore «termico». <b>Nulla è andato perso</b>: ogni componente ha ancora la stessa ampiezza, e infatti si vedono le <b>ricorrenze parziali</b>, momenti in cui molte fasi tornano ad allinearsi e il segnale risale. Con 8 componenti le ricorrenze sono frequenti e vistose; con $10^{23}$ diventano tanto rare quanto i tempi di Poincaré classici, e la stabilizzazione appare <b>definitiva</b>. <b>Questa è, in una figura, la termalizzazione quantistica secondo l&rsquo;ETH</b>: non un processo che distrugge informazione, ma un&rsquo;interferenza distruttiva fra fasi che nessuno può più riallineare. E la domanda tecnica che ne segue — <i>quanto</i> devono essere irregolari le $E_n$ e <i>quanto</i> piccoli gli elementi fuori diagonale perché la cancellazione sia robusta e duri — è esattamente il tipo di domanda su cui si scrive una tesi.`}
]},

/* ---------------- 03 · LA CONSEGNA ---------------- */
{ num:'03', title:'La consegna: cosa il percorso ti lascia in mano', meta:'la stessa frattura vista da cinque punti diversi · e la domanda che resta tua',
  blocchi:[
  {t:'prosa', title:'Le cinque volte in cui hai già incontrato questa frattura', tag:'sintesi del percorso', html:R`
  <p>Non è un tema che arriva alla fine: è tornato in tutto il percorso, ogni volta travestito.</p>
  <ul>
  <li><b>Nucleo 10 (Lebesgue).</b> «Misura nulla» è esatto, «misura $10^{-10^{23}}$» è fisica: trattarli allo stesso modo è comodo e non è la stessa cosa.</li>
  <li><b>Nucleo 14 (continuazione).</b> Le transizioni di fase sono <b>non-analiticità</b> che esistono solo nel limite infinito: un sistema finito non ne ha, eppure le misuriamo.</li>
  <li><b>Nucleo 14-bis (asintotica).</b> L&rsquo;approssimazione di sella è esatta per $N\to\infty$; le configurazioni soppresse come $e^{-N}$ ci sono ancora.</li>
  <li><b>Nucleo 16 (spettro).</b> Nella base giusta l&rsquo;evoluzione è banale: solo fasi. La termalizzazione va cercata negli <b>elementi di matrice</b>, non nello stato.</li>
  <li><b>Nuclei 20-22.</b> Il flusso conserva tutto; l&rsquo;irreversibilità nasce dal restringere l&rsquo;attenzione.</li>
  </ul>
  <p><b>La forma comune:</b> le proprietà su cui poggia la fisica macroscopica sono <b>esatte solo a un limite</b>, e ciò che osserviamo è sempre finito. Il percorso non chiude quella frattura — la rende <b>precisa</b>, che è il massimo che la matematica possa fare per una domanda fisica.</p>`},
  {t:'prolessi', title:'Dove va, da qui',
   oggetto:R`<b>L&rsquo;irreversibilità come proprietà della coppia dinamica-osservabile</b>, non della sola dinamica.`,
   rotte:[
    {dove:'Meccanica<br>statistica', txt:R`Il secondo principio come enunciato probabilistico; l&rsquo;entropia di Boltzmann come conteggio di microstati compatibili col macrostato; il teorema H e le sue ipotesi nascoste (il <i>Stosszahlansatz</i>, che introduce a mano l&rsquo;asimmetria temporale).`},
    {dove:'Informazione<br>quantistica', txt:R`Entropia di entanglement, traccia parziale, e la sua crescita nel tempo come misura della migrazione dell&rsquo;informazione. Il paradosso dell&rsquo;informazione dei buchi neri è questa stessa domanda, portata dove fa più male.`},
    {dove:'Sistemi a molti<br>corpi', txt:R`ETH e le sue <b>violazioni</b>: la localizzazione a molti corpi (MBL), dove il disordine impedisce la termalizzazione e il sistema <b>ricorda</b> il proprio stato iniziale per sempre. È il contro-esempio che rende ETH una vera ipotesi fisica e non una tautologia.`},
    {dove:'Esperimenti', txt:R`Atomi freddi e simulatori quantistici misurano oggi la termalizzazione di sistemi isolati con decine di particelle: il campo non è più solo teorico, ed è la ragione per cui una tesi qui ha materiale reale con cui confrontarsi.`}
   ],
   domanda:R`<b>La domanda con cui il percorso finisce, ed è la tua.</b> Un sistema quantistico chiuso e finito non termalizza: lo spettro è discreto, l&rsquo;evoluzione unitaria, le ricorrenze esistono. Eppure, per certe osservabili e su certe scale di tempo, si comporta esattamente come se lo facesse. La domanda non è <i>se</i> termalizza — è: <b>quali proprietà dello spettro e degli elementi di matrice rendono quella finzione robusta, e per quanto tempo regge prima che le ricorrenze la smentiscano?</b><br><br>Posta così, è una domanda a cui si può <b>rispondere</b>: si misurano le spaziature dei livelli (nucleo 16), si guarda la struttura degli elementi di matrice, si stimano i tempi. E gli strumenti per porla ci sono tutti nei venti nuclei che hai alle spalle — Hilbert e le basi ortonormali, lo spettro e i proiettori, la misura e il «quasi ovunque», la sella e il limite $N\to\infty$, il flusso incomprimibile e il coarse-graining. <b>Il percorso finisce qui perché da qui in avanti non è più matematica da imparare: è una domanda da lavorare.</b>`}
]}

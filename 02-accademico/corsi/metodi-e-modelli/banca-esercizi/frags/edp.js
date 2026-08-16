/* edp.js — pool B2 (PDE) per il quiz di Modelli e Metodi Matematici della Fisica.
   Lotto 1 (8 unita'). Costruito sul censimento che ha trovato l'esercizio 4
   PDE negli ultimi sei appelli su sei, con zero copertura nei pool esistenti.

   Fonti: Scritto 20260212 Es.4 (calore con coefficiente t^2, Neumann),
   Scritto 20262001 Es.4 (onde su corda fissata, dato di velocita'),
   libro_metodi.tex cap. 18-20, Set 4 - Differential equations, More problems.

   Verifiche fatte ricalcolando, non copiando: i coefficienti di Fourier di x^2
   sui coseni in [0,pi]; l'integrale di x(L-x) sui seni in [0,L]; la somma
   sum (-1)^k/(2k+1)^3 = pi^3/32; la normalizzazione del nucleo gaussiano;
   la varianza della convoluzione di due gaussiane. Dove il ricalcolo non
   chiudesse con la stampa ufficiale, la discrepanza sarebbe dichiarata in `sol`.
   Nel lotto 1 non ci sono discrepanze: le due stampe ufficiali tornano. */

Q.edp = [

  /* ---------------------------------------------------------------- 1 ----
     Appello 12/02/2026, Es.4 [9 pt]. Il conto intero, sette passi.
     E' il trabocchetto del coefficiente dipendente dal tempo unito a Neumann. */
  { pool:"edp", src:"20260212 Es.4", steps:[

    { t:"Appello 12/02/2026. Si deve risolvere $\\partial_t u(t,x)=t^2\\,\\partial_x^2 u(t,x)$ su $x\\in[0,\\pi)$, $t\\ge 0$, con $u(0,x)=g(x)$ e $\\partial_x u|_{x=0}=\\partial_x u|_{x=\\pi}=0$. Il coefficiente $t^2$ dipende dal tempo: la separazione di variabili &egrave; ancora lecita?",
      opts:[
        {x:"S&igrave;: il coefficiente dipende dalla sola $t$, quindi ponendo $u=\\varphi(t)\\psi(x)$ le variabili restano separate, $\\dot\\varphi/(t^2\\varphi)=\\psi''/\\psi=\\lambda$", c:true},
        {x:"No: la separazione richiede coefficienti costanti, qui serve una trasformata di Laplace in $t$"},
        {x:"S&igrave;, ma solo dopo aver riassorbito $t^2$ in una variabile spaziale riscalata $\\xi=x/t$"},
        {x:"No: con coefficiente variabile la soluzione non &egrave; pi&ugrave; sviluppabile in serie di autofunzioni"}
      ],
      hint:"Il criterio di separabilit&agrave; non chiede coefficienti costanti; chiede che dopo la divisione per $\\varphi\\psi$ ogni membro dipenda da una sola variabile.",
      sol:"Separabile. Sostituendo $u=\\varphi(t)\\psi(x)$ si ottiene $\\dot\\varphi\\,\\psi=t^2\\varphi\\,\\psi''$ e, dividendo per $t^2\\varphi\\psi$, $$\\frac{\\dot\\varphi(t)}{t^2\\varphi(t)}=\\frac{\\psi''(x)}{\\psi(x)}=\\lambda .$$ Il membro sinistro dipende solo da $t$, il destro solo da $x$: per il lemma di separazione (due funzioni di variabili indipendenti che coincidono sono entrambe costanti) esiste $\\lambda$ costante. Tutta la dipendenza temporale del coefficiente finisce nel membro temporale e non ostacola nulla. Sarebbe invece fatale un coefficiente misto $a(t,x)$ non fattorizzabile, o un termine di derivata mista $\\partial_t\\partial_x u$. La base spaziale, poi, resta quella del problema di Sturm-Liouville $\\psi''=\\lambda\\psi$ con le BC assegnate: il coefficiente $t^2$ non la tocca.",
      cont:"Risolvi la parte temporale" },

    { t:"Con $\\dot\\varphi(t)=\\lambda\\,t^2\\,\\varphi(t)$ e $\\varphi(0)=\\varphi_0$, quanto vale $\\varphi(t)$?",
      opts:[
        {x:"$\\varphi(t)=\\varphi_0\\,e^{\\lambda t^3/3}$", c:true},
        {x:"$\\varphi(t)=\\varphi_0\\,e^{\\lambda t}$"},
        {x:"$\\varphi(t)=\\varphi_0\\,e^{\\lambda t^2/2}$"},
        {x:"$\\varphi(t)=\\varphi_0\\,t^2\\,e^{\\lambda t}$"}
      ],
      hint:"&Egrave; il trabocchetto centrale di questo appello: la parte temporale va integrata, non copiata dal caso a coefficiente costante.",
      sol:"Equazione del primo ordine a variabili separabili: $d\\varphi/\\varphi=\\lambda\\,t^2\\,dt$, e integrando fra $0$ e $t$, $$\\ln\\frac{\\varphi(t)}{\\varphi_0}=\\lambda\\int_0^t s^2\\,ds=\\frac{\\lambda t^3}{3}\\ \\Longrightarrow\\ \\varphi(t)=\\varphi_0\\,e^{\\lambda t^3/3}.$$ Regola generale da portare all'esame: per $\\partial_t u=a(t)\\,\\partial_x^2u$ l'esponente del modo $n$ &egrave; $\\lambda_n\\int_0^t a(s)\\,ds$. Con $a(t)=t$ si ottiene $e^{\\lambda t^2/2}$, con $a(t)=t^2$ si ottiene $e^{\\lambda t^3/3}$, con $a(t)=\\sin t$ si ottiene $e^{\\lambda(1-\\cos t)}$. Scrivere $e^{\\lambda t}$ equivale ad aver trattato $a(t)$ come una costante: &egrave; l'errore che l'appello sta cercando. L'estremo inferiore $0$ non &egrave; decorativo: serve a far valere $\\varphi(0)=\\varphi_0$, cio&egrave; a far coincidere i $c_n$ con i coefficienti del dato iniziale.",
      cont:"Passa alle condizioni al bordo" },

    { t:"L'equazione spaziale &egrave; $\\psi''(x)=\\lambda\\,\\psi(x)$ con $\\psi'(0)=\\psi'(\\pi)=0$. Quale famiglia di autofunzioni si ottiene, e con quali indici?",
      opts:[
        {x:"$\\psi_n(x)=\\cos(nx)$, $\\lambda_n=-n^2$, con $n=0,1,2,\\dots$: il modo costante $n=0$ &egrave; ammesso", c:true},
        {x:"$\\psi_n(x)=\\sin(nx)$, $\\lambda_n=-n^2$, con $n=1,2,\\dots$"},
        {x:"$\\psi_n(x)=\\cos(nx)$, $\\lambda_n=-n^2$, con $n=1,2,\\dots$: la costante non &egrave; un'autofunzione accettabile"},
        {x:"$\\psi_n(x)=\\cos\\!\\big((n+\\tfrac12)x\\big)$, $\\lambda_n=-(n+\\tfrac12)^2$"}
      ],
      hint:"Due errori diversi sono in agguato qui: la famiglia sbagliata, e la perdita del modo costante.",
      sol:"Con $\\lambda=-k^2<0$ la generale &egrave; $\\psi=A\\cos(kx)+B\\sin(kx)$, dunque $\\psi'=-Ak\\sin(kx)+Bk\\cos(kx)$. Da $\\psi'(0)=0$ segue $B=0$; da $\\psi'(\\pi)=0$ segue $Ak\\sin(k\\pi)=0$, cio&egrave; $k=n$ intero. Restano i coseni. Il modo $n=0$ &egrave; legittimo: la costante soddisfa $\\psi''=0$ e ha derivata nulla ovunque, quindi $\\lambda_0=0$ &egrave; autovalore. Questo &egrave; il contenuto del problema di Sturm-Liouville con condizioni di Neumann omogenee: spettro $\\{-n^2\\}_{n\\ge0}$, autofunzioni i coseni, e lo zero appartiene allo spettro. Nel caso Dirichlet ($\\psi(0)=\\psi(\\pi)=0$) la costante viene uccisa dalle BC e restano i soli seni con $n\\ge1$: la regola mnemonica &egrave; che <em>Neumann d&agrave; coseni, Dirichlet d&agrave; seni</em>, e va usata all'ingresso, non a met&agrave; conto. Da escludere anche $\\lambda>0$: $\\psi=Ae^{kx}+Be^{-kx}$ con derivata nulla ai due estremi forza $A=B=0$.",
      cont:"Scrivi la soluzione generale" },

    { t:"Sommando i modi, qual &egrave; la soluzione generale del problema?",
      opts:[
        {x:"$u(t,x)=\\sum_{n=0}^{\\infty}c_n\\,e^{-n^2t^3/3}\\cos(nx)$", c:true},
        {x:"$u(t,x)=\\sum_{n=1}^{\\infty}c_n\\,e^{-n^2t^3/3}\\cos(nx)$"},
        {x:"$u(t,x)=\\sum_{n=0}^{\\infty}c_n\\,e^{-n^2t/3}\\cos(nx)$"},
        {x:"$u(t,x)=\\sum_{n=1}^{\\infty}c_n\\,e^{-n^2t^3/3}\\sin(nx)$"}
      ],
      hint:"Incolla i due risultati precedenti ponendo $\\lambda_n=-n^2$, e controlla da quale indice parte la somma.",
      sol:"Si moltiplica il fattore temporale per l'autofunzione e si somma su tutti i modi ammessi, per linearit&agrave; e completezza del sistema $\\{\\cos(nx)\\}_{n\\ge0}$ in $L^2(0,\\pi)$: $$u(t,x)=\\sum_{n=0}^{\\infty}c_n\\,e^{-n^2t^3/3}\\cos(nx).$$ Il termine $n=0$ vale semplicemente $c_0$, costante in $t$ e in $x$: &egrave; l'unico che non decade, e ci&ograve; ha un significato fisico preciso, la conservazione della massa totale sotto Neumann.",
      cont:"Ricava i coefficienti" },

    { t:"Imponendo $u(0,x)=g(x)$ si ha $g(x)=c_0+\\sum_{n\\ge1}c_n\\cos(nx)$. Quali sono $c_0$ e $c_{n>0}$?",
      opts:[
        {x:"$c_0=\\frac{1}{\\pi}\\int_0^{\\pi}\\!g(x)\\,dx$ e $c_{n>0}=\\frac{2}{\\pi}\\int_0^{\\pi}\\!g(x)\\cos(nx)\\,dx$", c:true},
        {x:"$c_n=\\frac{2}{\\pi}\\int_0^{\\pi}\\!g(x)\\cos(nx)\\,dx$ per ogni $n\\ge0$, modo costante incluso"},
        {x:"$c_0=\\frac{2}{\\pi}\\int_0^{\\pi}\\!g\\,dx$ e $c_{n>0}=\\frac{1}{\\pi}\\int_0^{\\pi}\\!g\\cos(nx)\\,dx$"},
        {x:"$c_n=\\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi}\\!g(x)e^{-inx}\\,dx$, come nella serie di Fourier complessa"}
      ],
      hint:"Il fattore di normalizzazione non &egrave; lo stesso per il modo costante e per gli altri: viene da $\\int_0^\\pi\\cos^2(nx)\\,dx$, che vale una cosa per $n=0$ e un'altra per $n\\ge1$.",
      sol:"Relazione di ortogonalit&agrave; su $[0,\\pi]$: $\\int_0^{\\pi}\\cos(nx)\\cos(mx)\\,dx=\\frac{\\pi}{2}\\delta_{nm}$ per $n,m\\ge1$, mentre $\\int_0^{\\pi}\\cos^2(0\\cdot x)\\,dx=\\int_0^\\pi dx=\\pi$. Proiettando $g$ su $\\cos(mx)$ si isola $c_m\\cdot\\frac{\\pi}{2}$ per $m\\ge1$ e $c_0\\cdot\\pi$ per $m=0$: da qui il $2/\\pi$ negli uni e il $1/\\pi$ nell'altro. Il modo costante ha norma al quadrato doppia degli altri, e questo &egrave; esattamente il motivo per cui in molti testi la serie si scrive con $a_0/2$: &egrave; la stessa asimmetria, spostata dalla formula del coefficiente alla formula della serie. Lettura utile: $c_0$ &egrave; il valor medio di $g$ su $[0,\\pi]$.",
      cont:"Specializza a $g(x)=x^2$" },

    { t:"Per $g(x)=x^2$ su $[0,\\pi]$, quanto valgono $c_0$ e $c_{n>0}$?",
      opts:[
        {x:"$c_0=\\dfrac{\\pi^2}{3}$ e $c_n=\\dfrac{4(-1)^n}{n^2}$", c:true},
        {x:"$c_0=\\dfrac{\\pi^2}{3}$ e $c_n=-\\dfrac{4(-1)^n}{n^2}$"},
        {x:"$c_0=\\dfrac{\\pi^2}{2}$ e $c_n=\\dfrac{4}{n^2}$"},
        {x:"$c_0=\\dfrac{\\pi^2}{3}$ e $c_n=\\dfrac{2\\pi(-1)^n}{n^3}$"}
      ],
      hint:"Due integrazioni per parti. Il segno si controlla in dieci secondi valutando la serie risultante in $x=\\pi$.",
      sol:"Media: $c_0=\\frac{1}{\\pi}\\int_0^{\\pi}x^2dx=\\frac{1}{\\pi}\\cdot\\frac{\\pi^3}{3}=\\frac{\\pi^2}{3}$. Per $n\\ge1$, la primitiva &egrave; $$\\int x^2\\cos(nx)\\,dx=\\frac{x^2\\sin(nx)}{n}+\\frac{2x\\cos(nx)}{n^2}-\\frac{2\\sin(nx)}{n^3},$$ e valutandola fra $0$ e $\\pi$ i termini in $\\sin(n\\pi)$ si annullano, restando $\\frac{2\\pi(-1)^n}{n^2}$. Dunque $c_n=\\frac{2}{\\pi}\\cdot\\frac{2\\pi(-1)^n}{n^2}=\\frac{4(-1)^n}{n^2}$, in accordo con la stampa ufficiale dell'appello (ricalcolato, non copiato). Controllo del segno: in $x=\\pi$ si ha $\\cos(n\\pi)=(-1)^n$, quindi $$g(\\pi)=\\frac{\\pi^2}{3}+\\sum_{n\\ge1}\\frac{4(-1)^n}{n^2}(-1)^n=\\frac{\\pi^2}{3}+4\\sum_{n\\ge1}\\frac{1}{n^2}=\\frac{\\pi^2}{3}+4\\cdot\\frac{\\pi^2}{6}=\\pi^2,$$ che &egrave; proprio $\\pi^2$ come deve essere. Col segno opposto si sarebbe ottenuto $\\pi^2/3-2\\pi^2/3<0$, assurdo per $x^2$. La soluzione completa &egrave; quindi $u(t,x)=\\frac{\\pi^2}{3}+\\sum_{n\\ge1}\\frac{4(-1)^n}{n^2}e^{-n^2t^3/3}\\cos(nx)$.",
      cont:"Ultimo controllo" },

    { t:"Sempre con $g(x)=x^2$, a che cosa tende $u(t,x)$ per $t\\to+\\infty$?",
      opts:[
        {x:"A $\\pi^2/3$, il valor medio del dato iniziale, uniformemente in $x$", c:true},
        {x:"A $0$: tutte le soluzioni dell'equazione del calore si spengono"},
        {x:"A $\\pi^2$, cio&egrave; al valore massimo del dato iniziale"},
        {x:"Non tende ad alcun limite, perch&eacute; il coefficiente $t^2$ diverge"}
      ],
      hint:"Con Neumann il flusso attraverso gli estremi &egrave; nullo: c'&egrave; una quantit&agrave; che si conserva, e il limite non pu&ograve; che essere lei.",
      sol:"Ogni modo $n\\ge1$ porta $e^{-n^2t^3/3}\\to0$, quindi sopravvive solo $c_0=\\pi^2/3$. Non &egrave; un accidente del dato: integrando l'equazione su $[0,\\pi]$, $$\\frac{d}{dt}\\int_0^{\\pi}u\\,dx=t^2\\big[\\partial_xu\\big]_0^{\\pi}=0$$ per le condizioni di Neumann omogenee, dunque $\\int_0^\\pi u\\,dx$ &egrave; un integrale primo e il calore, non potendo uscire dalla sbarra, si redistribuisce uniformemente sul valor medio. Con Dirichlet omogenee, invece, non c'&egrave; alcun modo costante e il limite &egrave; $0$, perch&eacute; il calore esce dagli estremi tenuti a temperatura fissa. Si noti infine che il decadimento &egrave; in $e^{-n^2t^3/3}$: a tempi lunghi &egrave; enormemente pi&ugrave; rapido del calore ordinario, perch&eacute; la diffusivit&agrave; efficace cresce nel tempo." }
  ]},

  /* ---------------------------------------------------------------- 2 ----
     Appello 20/01/2026, Es.4 [8 pt]. Onde su corda fissata, dato di velocita',
     e la deduzione della somma numerica. Sei passi. */
  { pool:"edp", src:"20262001 Es.4", steps:[

    { t:"Appello 20/01/2026. Corda di lunghezza $L$ fissata agli estremi, $\\partial_t^2y=c^2\\partial_x^2y$, con $y(x,0)=0$ e $\\partial_ty|_{t=0}=\\frac{4V}{L^2}x(L-x)$. Quale forma generale si pu&ograve; scrivere <em>gi&agrave; dalle sole condizioni al bordo</em>, prima di guardare i dati iniziali?",
      opts:[
        {x:"$y(x,t)=\\sum_{n\\ge1}\\big[a_n\\cos(\\omega_nt)+b_n\\sin(\\omega_nt)\\big]\\sin\\!\\big(\\tfrac{n\\pi x}{L}\\big)$, con $\\omega_n=\\tfrac{n\\pi c}{L}$", c:true},
        {x:"$y(x,t)=\\sum_{n\\ge0}\\big[a_n\\cos(\\omega_nt)+b_n\\sin(\\omega_nt)\\big]\\cos\\!\\big(\\tfrac{n\\pi x}{L}\\big)$"},
        {x:"$y(x,t)=F(x-ct)+G(x+ct)$ con $F,G$ arbitrarie e nessun vincolo"},
        {x:"$y(x,t)=\\sum_{n\\ge1}b_n\\,e^{-\\omega_n t}\\sin\\!\\big(\\tfrac{n\\pi x}{L}\\big)$"}
      ],
      hint:"Sono le condizioni al bordo, non i dati iniziali, a scegliere la famiglia spaziale. E l'equazione &egrave; del secondo ordine in $t$: la parte temporale non pu&ograve; essere un solo esponenziale.",
      sol:"$y(0,t)=y(L,t)=0$ per ogni $t$ obbliga $\\psi(0)=\\psi(L)=0$: &egrave; il problema di Sturm-Liouville con Dirichlet omogenee, che d&agrave; autofunzioni $\\sin(n\\pi x/L)$ e autovalori $\\lambda_n=-(n\\pi/L)^2$, $n\\ge1$. Sostituendo nella parte temporale, $\\ddot\\varphi=c^2\\lambda_n\\varphi=-\\omega_n^2\\varphi$ con $\\omega_n=cn\\pi/L$, la cui generale &egrave; $a_n\\cos(\\omega_nt)+b_n\\sin(\\omega_nt)$: due costanti per modo, perch&eacute; l'equazione &egrave; del secondo ordine in $t$ e infatti servono <em>due</em> dati iniziali, posizione e velocit&agrave;. La rappresentazione di d'Alembert $F(x-ct)+G(x+ct)$ resta vera, ma su dominio limitato con estremi fissi va costruita per riflessioni successive del dato prolungato in modo dispari e $2L$-periodico: pi&ugrave; lunga da scrivere della separazione. Regola pratica: dominio finito con BC omogenee, si separa; retta intera, d'Alembert.",
      cont:"Usa la prima condizione iniziale" },

    { t:"La condizione $y(x,0)=0$ per ogni $x\\in(0,L)$ che cosa impone sui coefficienti?",
      opts:[
        {x:"$a_n=0$ per ogni $n$: resta la sola parte in $\\sin(\\omega_nt)$", c:true},
        {x:"$b_n=0$ per ogni $n$: resta la sola parte in $\\cos(\\omega_nt)$"},
        {x:"$a_n=-b_n$ per ogni $n$"},
        {x:"$a_0=0$ soltanto, gli altri restano liberi"}
      ],
      hint:"Poni $t=0$ nella forma generale e guarda quale delle due funzioni temporali sopravvive; poi ricorda che una serie di Fourier nulla ha tutti i coefficienti nulli.",
      sol:"A $t=0$ si ha $\\cos(0)=1$, $\\sin(0)=0$, quindi $y(x,0)=\\sum_n a_n\\sin(n\\pi x/L)$. Per l'unicit&agrave; dei coefficienti di Fourier (il sistema $\\{\\sin(n\\pi x/L)\\}_{n\\ge1}$ &egrave; ortogonale e completo in $L^2(0,L)$, quindi la funzione identicamente nulla ha proiezioni tutte nulle) segue $a_n=0$ per ogni $n$. Firma da riconoscere a colpo d'occhio: corda che parte in quiete e viene messa in moto da un impulso di velocit&agrave; $\\Rightarrow$ seni nel tempo; corda pizzicata e lasciata andare ($y(x,0)=f(x)$, $\\partial_ty|_0=0$) $\\Rightarrow$ coseni nel tempo. Le due condizioni iniziali si spartiscono le due famiglie temporali.",
      cont:"Proietta la velocit&agrave; iniziale" },

    { t:"Da $\\partial_ty|_{t=0}=\\sum_n b_n\\omega_n\\sin\\!\\big(\\tfrac{n\\pi x}{L}\\big)=\\frac{4V}{L^2}x(L-x)$, quale relazione fissa i $b_n$?",
      opts:[
        {x:"$b_n\\omega_n=\\dfrac{2}{L}\\displaystyle\\int_0^{L}\\!\\frac{4V}{L^2}x(L-x)\\sin\\!\\big(\\tfrac{n\\pi x}{L}\\big)dx$", c:true},
        {x:"$b_n\\omega_n=\\dfrac{1}{L}\\displaystyle\\int_0^{L}\\!\\frac{4V}{L^2}x(L-x)\\sin\\!\\big(\\tfrac{n\\pi x}{L}\\big)dx$"},
        {x:"$b_n\\omega_n=\\dfrac{2}{\\pi}\\displaystyle\\int_0^{L}\\!\\frac{4V}{L^2}x(L-x)\\sin\\!\\big(\\tfrac{n\\pi x}{L}\\big)dx$"},
        {x:"$b_n=\\dfrac{2}{L}\\displaystyle\\int_0^{L}\\!\\frac{4V}{L^2}x(L-x)\\sin\\!\\big(\\tfrac{n\\pi x}{L}\\big)dx$, senza $\\omega_n$"}
      ],
      hint:"La normalizzazione viene da $\\int_0^L\\sin^2(n\\pi x/L)\\,dx$, e l'intervallo qui &egrave; $[0,L]$, non $[0,\\pi]$. Occhio anche a non perdere il fattore $\\omega_n$, che va portato a destra alla fine.",
      sol:"Ortogonalit&agrave; su $[0,L]$: $\\int_0^{L}\\sin\\!\\big(\\tfrac{n\\pi x}{L}\\big)\\sin\\!\\big(\\tfrac{m\\pi x}{L}\\big)dx=\\frac{L}{2}\\delta_{nm}$. Moltiplicando per $\\sin(m\\pi x/L)$ e integrando si isola $b_m\\omega_m\\frac{L}{2}$, da cui il fattore $2/L$. Il $2/\\pi$ &egrave; il fattore giusto solo quando l'intervallo &egrave; $[0,\\pi]$: &egrave; l'errore pi&ugrave; comune quando si ricicla a memoria la formula di un altro esercizio. Il $2/L$ &egrave; la scrittura generale, e $2/\\pi$ ne &egrave; il caso $L=\\pi$.",
      cont:"Calcola l'integrale" },

    { t:"Quanto vale $\\displaystyle\\int_0^{L}x(L-x)\\sin\\!\\big(\\tfrac{n\\pi x}{L}\\big)dx$?",
      opts:[
        {x:"$\\dfrac{2L^3}{n^3\\pi^3}\\big[1-(-1)^n\\big]$, cio&egrave; $4L^3/(n^3\\pi^3)$ per $n$ dispari e $0$ per $n$ pari", c:true},
        {x:"$\\dfrac{4L^3}{n^3\\pi^3}\\big[1-(-1)^n\\big]$"},
        {x:"$\\dfrac{2L^3}{n^2\\pi^2}\\big[1-(-1)^n\\big]$"},
        {x:"$\\dfrac{2L^3}{n^3\\pi^3}\\big[1+(-1)^n\\big]$"}
      ],
      hint:"Il dato &egrave; simmetrico rispetto a $x=L/2$, mentre i modi pari sono antisimmetrici rispetto a quel punto: qualcosa deve annullarsi. E conta le integrazioni per parti per fissare la potenza di $n$.",
      sol:"Sia $f(x)=x(L-x)$, con $f(0)=f(L)=0$ e $f''=-2$, e $k=n\\pi/L$ (cos&igrave; $\\sin(kL)=0$). Due integrazioni per parti: $$\\int_0^Lf\\sin(kx)dx=\\Big[-\\frac{f\\cos(kx)}{k}\\Big]_0^L+\\frac1k\\int_0^Lf'\\cos(kx)dx=0+\\frac1k\\Big(\\Big[\\frac{f'\\sin(kx)}{k}\\Big]_0^L-\\frac1k\\int_0^Lf''\\sin(kx)dx\\Big),$$ e i termini di bordo cadono ($f$ si annulla agli estremi, $\\sin(kL)=0$). Resta $\\frac{2}{k^2}\\int_0^L\\sin(kx)dx=\\frac{2}{k^3}\\big[1-\\cos(kL)\\big]=\\frac{2L^3}{n^3\\pi^3}\\big[1-(-1)^n\\big]$. Verifica numerica indipendente con $L=1$, $n=1$: $\\int_0^1x(1-x)\\sin(\\pi x)dx=\\frac1\\pi-\\big(\\frac1\\pi-\\frac{4}{\\pi^3}\\big)=\\frac{4}{\\pi^3}$, che &egrave; ci&ograve; che d&agrave; la formula. La stampa ufficiale scrive il prodotto gi&agrave; moltiplicato per $4V/L^2$, cio&egrave; $\\frac{8LV}{n^3\\pi^3}[1-(-1)^n]$: coincide, perch&eacute; $\\frac{4V}{L^2}\\cdot\\frac{2L^3}{n^3\\pi^3}=\\frac{8LV}{n^3\\pi^3}$. L'annullarsi dei modi pari &egrave; la parit&agrave; annunciata: rispetto a $x=L/2$ il dato &egrave; pari e $\\sin(n\\pi x/L)$ &egrave; dispari per $n$ pari.",
      cont:"Metti tutto insieme" },

    { t:"Sopravvivono i soli $n=2k+1$. Qual &egrave; la soluzione finale $y(x,t)$?",
      opts:[
        {x:"$y=\\displaystyle\\sum_{k\\ge0}\\frac{32LV}{c\\,\\pi^4(2k+1)^4}\\sin\\!\\Big[\\frac{(2k+1)\\pi ct}{L}\\Big]\\sin\\!\\Big[\\frac{(2k+1)\\pi x}{L}\\Big]$", c:true},
        {x:"$y=\\displaystyle\\sum_{k\\ge0}\\frac{32V}{\\pi^3(2k+1)^3}\\sin\\!\\Big[\\frac{(2k+1)\\pi ct}{L}\\Big]\\sin\\!\\Big[\\frac{(2k+1)\\pi x}{L}\\Big]$"},
        {x:"$y=\\displaystyle\\sum_{n\\ge1}\\frac{32LV}{c\\,\\pi^4n^4}\\sin\\!\\Big[\\frac{n\\pi ct}{L}\\Big]\\sin\\!\\Big[\\frac{n\\pi x}{L}\\Big]$"},
        {x:"$y=\\displaystyle\\sum_{k\\ge0}\\frac{16LV}{c\\,\\pi^4(2k+1)^4}\\sin\\!\\Big[\\frac{(2k+1)\\pi ct}{L}\\Big]\\sin\\!\\Big[\\frac{(2k+1)\\pi x}{L}\\Big]$"}
      ],
      hint:"L'ultima divisione per $\\omega_n$ &egrave; quella che alza la potenza di $n$ da 3 a 4: se la dimentichi resti a $n^3$ e sbagli anche le dimensioni.",
      sol:"Per $n$ dispari, $b_n\\omega_n=\\frac{2}{L}\\cdot\\frac{4V}{L^2}\\cdot\\frac{4L^3}{n^3\\pi^3}=\\frac{32V}{n^3\\pi^3}$; dividendo per $\\omega_n=n\\pi c/L$ si ottiene $$b_n=\\frac{32V}{n^3\\pi^3}\\cdot\\frac{L}{n\\pi c}=\\frac{32LV}{c\\,\\pi^4n^4},$$ in accordo con la stampa ufficiale (ricalcolato). Controllo dimensionale, sempre da fare: $[LV/c]=\\mathrm{lunghezza}\\cdot(\\mathrm{lunghezza/tempo})/(\\mathrm{lunghezza/tempo})=\\mathrm{lunghezza}$, ed &egrave; giusto perch&eacute; $y$ &egrave; uno spostamento trasverso; l'opzione con $32V/\\pi^3$ avrebbe le dimensioni di una velocit&agrave; e si scarta senza fare conti. La somma su tutti gli $n$ &egrave; sbagliata perch&eacute; i pari sono nulli, e mantenerli formalmente non &egrave; un errore di valore ma di forma.",
      cont:"Somma la serie numerica" },

    { t:"Il testo chiede poi di dedurre $\\sum_{k\\ge0}\\frac{(-1)^k}{(2k+1)^3}=\\frac{\\pi^3}{32}$. Quale mossa lo produce?",
      opts:[
        {x:"Valutare in $x=L/2$ l'identit&agrave; per la velocit&agrave; iniziale, $\\sum_k\\frac{32V}{\\pi^3(2k+1)^3}\\sin\\!\\big[\\tfrac{(2k+1)\\pi x}{L}\\big]=\\frac{4V}{L^2}x(L-x)$", c:true},
        {x:"Applicare l'identit&agrave; di Parseval alla velocit&agrave; iniziale"},
        {x:"Valutare la soluzione $y(x,t)$ in $x=L/2$ e $t=L/(2c)$"},
        {x:"Derivare rispetto a $x$ la serie e porre $x=0$"}
      ],
      hint:"Serve il punto in cui $\\sin[(2k+1)\\pi x/L]$ produce esattamente $(-1)^k$; e serve una serie con $(2k+1)^3$ al denominatore, non $(2k+1)^4$.",
      sol:"In $x=L/2$ si ha $\\sin[(2k+1)\\pi/2]=(-1)^k$, e il membro destro vale $\\frac{4V}{L^2}\\cdot\\frac{L}{2}\\cdot\\frac{L}{2}=V$. Dunque $\\frac{32V}{\\pi^3}\\sum_k\\frac{(-1)^k}{(2k+1)^3}=V$, cio&egrave; $\\sum_k\\frac{(-1)^k}{(2k+1)^3}=\\frac{\\pi^3}{32}$ (verificato numericamente: $1-1/27+1/125-\\dots\\approx0{,}9689$, e $\\pi^3/32\\approx0{,}9689$). Il risultato invocato &egrave; il <em>teorema di convergenza puntuale</em> di Dirichlet per le serie di Fourier: $x(L-x)$ &egrave; continua e $C^1$ a tratti sul prolungamento dispari, quindi la serie converge al valore della funzione in ogni punto di regolarit&agrave;, e $x=L/2$ lo &egrave;. Parseval &egrave; la strada sbagliata per questo bersaglio: darebbe una somma di quadrati, cio&egrave; $\\sum(2k+1)^{-6}$. Partire dalla $y$ anzich&eacute; dalla $\\partial_ty$ porterebbe a $(2k+1)^4$ al denominatore, di nuovo un altro bersaglio." }
  ]},

  /* ---------------------------------------------------------------- 3 ----
     Modus operandi: la sequenza d'attacco. */
  { pool:"edp", src:"modus operandi", steps:[

    { t:"Ti trovi davanti all'esercizio 4 di un appello, che &egrave; una PDE. Prima di scrivere qualunque cosa, qual &egrave; il dato da leggere per primo?",
      opts:[
        {x:"Il dominio spaziale insieme alle condizioni al bordo: sono loro a scegliere la base di autofunzioni, e quindi la forma di tutto il resto", c:true},
        {x:"Il dato iniziale, perch&eacute; &egrave; da l&igrave; che si calcolano i coefficienti"},
        {x:"L'ordine in $t$: se &egrave; primo &egrave; calore, se &egrave; secondo sono onde"},
        {x:"La presenza o meno di una sorgente al membro destro"}
      ],
      hint:"Chiediti quale informazione, se cambiasse, ti costringerebbe a rifare l'esercizio da capo anzich&eacute; a rifare solo un integrale.",
      sol:"Il dominio e le BC. Se cambia il dato iniziale, cambiano solo i coefficienti, cio&egrave; un integrale; se cambiano le BC, cambia la <em>base</em>, e con essa lo spettro, la forma dei modi, la normalizzazione, tutto. La gerarchia di lettura corretta &egrave;: (1) dominio e BC $\\to$ base di autofunzioni, via problema di Sturm-Liouville; (2) ordine in $t$ e coefficiente $a(t)$ $\\to$ fattore temporale di ciascun modo; (3) dato iniziale $\\to$ coefficienti, per proiezione; (4) eventuale sorgente $\\to$ Duhamel o funzione di Green. Le quattro tabelle da avere in testa: Dirichlet omogenee su $[0,L]$ $\\to\\sin(n\\pi x/L)$, $n\\ge1$; Neumann omogenee $\\to\\cos(n\\pi x/L)$, $n\\ge0$; miste (Dirichlet in $0$, Neumann in $L$) $\\to\\sin\\!\\big[(n+\\tfrac12)\\pi x/L\\big]$, cio&egrave; mezzi interi; periodiche $\\to$ seni e coseni insieme, ovvero $e^{2\\pi inx/L}$.",
      cont:"Secondo passo: scegliere il metodo" },

    { t:"Come si sceglie fra separazione di variabili, trasformata di Fourier e propagatore?",
      opts:[
        {x:"Dominio limitato con BC omogenee $\\to$ separazione e serie discreta; retta intera $\\to$ trasformata di Fourier, che per il calore d&agrave; il nucleo gaussiano e per le onde la formula di d'Alembert; sorgente presente $\\to$ Green o Duhamel sopra la soluzione omogenea", c:true},
        {x:"La separazione funziona sempre, la trasformata &egrave; solo una scorciatoia equivalente"},
        {x:"La trasformata di Fourier &egrave; sempre preferibile perch&eacute; evita di imporre le condizioni al bordo"},
        {x:"Si sceglie in base all'ordine dell'equazione: primo ordine $\\to$ trasformata, secondo ordine $\\to$ separazione"}
      ],
      hint:"La domanda vera &egrave;: lo spettro dell'operatore spaziale &egrave; discreto o continuo? &Egrave; il dominio a deciderlo.",
      sol:"&Egrave; una scelta dettata dallo spettro dell'operatore $\\partial_x^2$ sul dominio con quelle BC. Su intervallo limitato con BC omogenee l'operatore &egrave; autoaggiunto a risolvente compatto: spettro discreto, autofunzioni numerabili, e la soluzione &egrave; una <em>serie</em>. Su tutta la retta lo spettro &egrave; continuo, le autofunzioni sono generalizzate ($e^{ikx}$, non normalizzabili), e la somma diventa un <em>integrale</em>: la trasformata di Fourier &egrave; letteralmente lo stesso sviluppo, con $\\sum_n\\to\\int dk$. Il propagatore &egrave; poi il risultato di quell'integrale eseguito una volta per tutte sul dato $\\delta(x-y)$: per il calore $K(t,x-y)=\\frac{1}{\\sqrt{4\\pi Dt}}e^{-(x-y)^2/4Dt}$. Con una sorgente $f(t,x)$ si usa il principio di Duhamel: la soluzione &egrave; l'omogenea con lo stesso dato iniziale, pi&ugrave; $\\int_0^tds$ del propagatore applicato a $f(s,\\cdot)$. La separazione, per inciso, non &egrave; universale: fallisce se le BC non sono omogenee (ma si riconducono, sottraendo una soluzione stazionaria) o se il dominio non &egrave; un prodotto di intervalli nelle coordinate scelte." }
  ]},

  /* ---------------------------------------------------------------- 4 ----
     Neumann -> coseni. Domanda secca sul trabocchetto piu' frequente. */
  { pool:"edp", src:"teoria — Sturm-Liouville, cap. 19", steps:[
    { t:"Sbarra $[0,L]$ con estremi termicamente isolati, $\\partial_tu=D\\partial_x^2u$ e $\\partial_xu(t,0)=\\partial_xu(t,L)=0$. Su quale sistema si sviluppa il dato iniziale?",
      opts:[
        {x:"Serie di soli coseni, $\\;\\frac{a_0}{2}+\\sum_{n\\ge1}a_n\\cos\\!\\big(\\tfrac{n\\pi x}{L}\\big)$, con $\\lambda_n=-\\big(\\tfrac{n\\pi}{L}\\big)^2$ e $n\\ge0$", c:true},
        {x:"Serie di soli seni, $\\sum_{n\\ge1}b_n\\sin\\!\\big(\\tfrac{n\\pi x}{L}\\big)$"},
        {x:"Serie di Fourier completa con seni e coseni, perch&eacute; nessuna delle due famiglie si annulla al bordo"},
        {x:"Serie di coseni con indici semi-interi, $\\cos\\!\\big[(n+\\tfrac12)\\pi x/L\\big]$"}
      ],
      hint:"Non chiederti quale funzione si annulla al bordo, ma quale ha <em>derivata</em> nulla al bordo.",
      sol:"Le BC di Neumann vincolano la derivata, non il valore: $\\psi'(0)=\\psi'(L)=0$ &egrave; soddisfatta da $\\cos(n\\pi x/L)$ e non da $\\sin(n\\pi x/L)$, la cui derivata agli estremi vale $\\pm n\\pi/L\\ne0$. Il problema di Sturm-Liouville $\\psi''=\\lambda\\psi$ con Neumann omogenee ha dunque autofunzioni i coseni e spettro $\\lambda_n=-(n\\pi/L)^2$ con $n\\ge0$, <em>zero incluso</em>. Lettura fisica: estremi isolati significa flusso nullo, $\\int_0^Lu\\,dx$ conservato, e il modo $\\lambda_0=0$ che non decade &egrave; esattamente quella conservazione. I casi da tenere allineati in memoria: Dirichlet $\\to$ seni con $n\\ge1$; Neumann $\\to$ coseni con $n\\ge0$; misto Dirichlet-Neumann $\\to$ mezzi interi. Gli indici semi-interi compaiono solo nel caso misto." }
  ]},

  /* ---------------------------------------------------------------- 5 ----
     Coefficiente dipendente dal tempo, forma generale + conseguenza qualitativa. */
  { pool:"edp", src:"More problems, es. 2-5 / famiglia 20260212", steps:[

    { t:"Sia $\\partial_tu=\\sin t\\;\\partial_x^2u$ su $[0,\\pi]$ con Dirichlet omogenee. Qual &egrave; il fattore temporale del modo $n$?",
      opts:[
        {x:"$e^{-n^2(1-\\cos t)}$", c:true},
        {x:"$e^{-n^2\\sin t}$"},
        {x:"$e^{-n^2 t\\sin t}$"},
        {x:"$e^{-n^2(1+\\cos t)}$"}
      ],
      hint:"L'esponente &egrave; $\\lambda_n\\int_0^t a(s)\\,ds$, e l'estremo inferiore $0$ non &egrave; ornamentale: garantisce che a $t=0$ il fattore valga $1$.",
      sol:"Con $u=\\varphi(t)\\psi(x)$ e Dirichlet si ha $\\psi_n=\\sin(nx)$, $\\lambda_n=-n^2$, e la parte temporale &egrave; $\\dot\\varphi=-n^2\\sin t\\,\\varphi$. Separando, $$\\ln\\varphi(t)-\\ln\\varphi(0)=-n^2\\int_0^t\\sin s\\,ds=-n^2\\big[1-\\cos t\\big],$$ da cui $\\varphi(t)=\\varphi_0e^{-n^2(1-\\cos t)}$. La primitiva scelta con estremo inferiore $0$ &egrave; ci&ograve; che fa valere $\\varphi(0)=\\varphi_0$: prendendo $\\int\\sin=-\\cos t$ senza costante si otterrebbe $e^{n^2\\cos t}$, che a $t=0$ vale $e^{n^2}$ e sballa tutti i coefficienti di un fattore diverso per ogni modo. La regola &egrave; una sola, con $a(t)$ qualunque: $\\varphi_n(t)=c_n\\exp\\!\\big[\\lambda_n\\int_0^ta(s)ds\\big]$.",
      cont:"Che cosa cambia qualitativamente" },

    { t:"Rispetto al calore ordinario ($a=D>0$ costante), che cosa ha di anomalo questa soluzione?",
      opts:[
        {x:"Non &egrave; monotona: dove $\\sin t<0$ i modi ricrescono, e a $t=2k\\pi$ si ritrova esattamente $u(2k\\pi,x)=g(x)$ — la soluzione &egrave; periodica in $t$", c:true},
        {x:"Nulla di anomalo: poich&eacute; $1-\\cos t\\ge0$, il decadimento resta monotono"},
        {x:"Diverge per $t>\\pi$, perch&eacute; l&igrave; il coefficiente &egrave; negativo e l'equazione diventa il calore all'indietro, che &egrave; mal posto"},
        {x:"Decade pi&ugrave; in fretta del calore ordinario, perch&eacute; l'oscillazione del coefficiente accelera la diffusione"}
      ],
      hint:"Studia la funzione $t\\mapsto 1-\\cos t$: &egrave; sempre non negativa, ma non &egrave; crescente. E guarda che cosa succede ai multipli di $2\\pi$.",
      sol:"L'esponente $-n^2(1-\\cos t)$ ha $1-\\cos t\\in[0,2]$: il fattore resta sempre in $(0,1]$, quindi nessuna divergenza, ma non &egrave; monotono. Su $t\\in(0,\\pi)$ il coefficiente $\\sin t$ &egrave; positivo, l'equazione &egrave; parabolica in avanti e i modi decadono; su $t\\in(\\pi,2\\pi)$ il coefficiente &egrave; negativo e l'equazione &egrave; letteralmente il calore <em>all'indietro</em>, con i modi che ricrescono. Non c'&egrave; catastrofe perch&eacute; la crescita restituisce esattamente il credito accumulato: a $t=2k\\pi$ si ha $1-\\cos t=0$ e $u(2k\\pi,x)=g(x)$ per ogni dato. Il punto teorico &egrave; che l'irreversibilit&agrave; del calore non &egrave; nell'operatore $\\partial_x^2$ ma nel segno del coefficiente davanti: se il segno oscilla, il semigruppo perde la propriet&agrave; di contrazione stretta e la freccia del tempo svanisce. Con $a(t)=t^2\\ge0$ (il caso dell'appello 12/02/2026) questo non accade e il decadimento resta monotono." }
  ]},

  /* ---------------------------------------------------------------- 6 ----
     Dato iniziale gia' combinazione finita di modi: nessun integrale. */
  { pool:"edp", src:"Set 4 - Differential equations", steps:[

    { t:"Sia $\\partial_tu=D\\partial_x^2u$ su $[0,\\pi]$ con $u(t,0)=u(t,\\pi)=0$ e $u(0,x)=3\\sin(2x)-\\sin(5x)$. Quanti integrali servono per trovare i coefficienti?",
      opts:[
        {x:"Nessuno: il dato &egrave; gi&agrave; scritto nella base, quindi $c_2=3$, $c_5=-1$ e tutti gli altri sono nulli", c:true},
        {x:"Due, uno per ciascuno dei due coefficienti non nulli"},
        {x:"Infiniti, uno per ogni $n$, e poi si verifica che quasi tutti si annullano"},
        {x:"Nessuno, ma solo perch&eacute; il dato &egrave; dispari: con un dato pari servirebbero gli integrali"}
      ],
      hint:"L'unicit&agrave; dei coefficienti di Fourier &egrave; un teorema, non un'osservazione: se una funzione &egrave; gi&agrave; scritta come combinazione della base, quella <em>&egrave;</em> la sua serie.",
      sol:"Per l'unicit&agrave; dello sviluppo su una base ortogonale completa, se $g$ &egrave; gi&agrave; una combinazione lineare finita degli elementi della base, i coefficienti si leggono. Nessun conto: $c_2=3$, $c_5=-1$, tutti gli altri zero. Volendo, l'integrale $\\frac2\\pi\\int_0^\\pi[3\\sin 2x-\\sin 5x]\\sin(nx)dx$ restituirebbe esattamente questo per ortogonalit&agrave;, ma farlo &egrave; puro spreco di minuti d'esame. Questo &egrave; uno dei quattro trabocchetti classificati di questa famiglia di esercizi, e ha un sintomo di riconoscimento immediato: il dato iniziale contiene funzioni trigonometriche <em>degli stessi argomenti delle autofunzioni</em>. Se invece il dato fosse $\\sin(2{,}5\\,x)$, oppure $x^2$, oppure $x(\\pi-x)$, gli integrali servirebbero eccome. Attenzione anche al caso ibrido, tipo $\\sin^3x$: non &egrave; nella base, ma un'identit&agrave; trigonometrica lo riduce a una combinazione finita ($\\sin^3x=\\frac34\\sin x-\\frac14\\sin 3x$), e di nuovo non serve alcun integrale.",
      cont:"Scrivi la soluzione" },

    { t:"Quindi qual &egrave; $u(t,x)$?",
      opts:[
        {x:"$u(t,x)=3e^{-4Dt}\\sin(2x)-e^{-25Dt}\\sin(5x)$", c:true},
        {x:"$u(t,x)=3e^{-2Dt}\\sin(2x)-e^{-5Dt}\\sin(5x)$"},
        {x:"$u(t,x)=e^{-4Dt}\\big[3\\sin(2x)-\\sin(5x)\\big]$"},
        {x:"$u(t,x)=3e^{-4D t^2}\\sin(2x)-e^{-25Dt^2}\\sin(5x)$"}
      ],
      hint:"Ogni modo ha il <em>proprio</em> tasso di decadimento, e il tasso va come il quadrato del numero d'onda.",
      sol:"Il modo $\\sin(nx)$ &egrave; autofunzione di $\\partial_x^2$ con autovalore $-n^2$, quindi la sua ampiezza evolve secondo $\\dot c_n=-Dn^2c_n$, cio&egrave; $c_n(t)=c_n(0)e^{-Dn^2t}$. Con $n=2$: $e^{-4Dt}$; con $n=5$: $e^{-25Dt}$. Il fatto strutturale &egrave; che l'equazione del calore &egrave; un <em>filtro passa-basso</em>: il rapporto fra le due ampiezze evolve come $e^{-21Dt}$, cio&egrave; il modo a lunghezza d'onda corta muore molto pi&ugrave; in fretta, ed &egrave; il motivo per cui la soluzione diventa liscia istantaneamente per $t>0$ qualunque sia la rugosit&agrave; del dato. Il tempo caratteristico del modo $n$ &egrave; $\\tau_n=1/(Dn^2)$: quadratico, non lineare. Un fattore comune $e^{-4Dt}$ a entrambi i modi corrisponderebbe a un operatore che non distingue le scale, cio&egrave; non a $\\partial_x^2$." }
  ]},

  /* ---------------------------------------------------------------- 7 ----
     Sbarra infinita: nucleo gaussiano e allargamento del pacchetto. */
  { pool:"edp", src:"teoria — nucleo del calore, cap. 20", steps:[

    { t:"Sia $\\partial_tu=D\\partial_x^2u$ su tutta la retta con $u(0,x)=g(x)$ regolare e integrabile. Qual &egrave; la soluzione?",
      opts:[
        {x:"$u(t,x)=\\displaystyle\\int_{-\\infty}^{+\\infty}\\!\\!dy\\;\\frac{e^{-(x-y)^2/(4Dt)}}{\\sqrt{4\\pi Dt}}\\,g(y)$", c:true},
        {x:"$u(t,x)=\\displaystyle\\int_{-\\infty}^{+\\infty}\\!\\!dy\\;\\frac{e^{-(x-y)^2/(2Dt)}}{\\sqrt{2\\pi Dt}}\\,g(y)$"},
        {x:"$u(t,x)=\\displaystyle\\int_{-\\infty}^{+\\infty}\\!\\!dy\\;\\frac{e^{-(x-y)^2/(4Dt)}}{\\sqrt{2\\pi Dt}}\\,g(y)$"},
        {x:"$u(t,x)=\\displaystyle\\sum_{n\\ge1}c_n e^{-Dn^2t}\\sin(nx)$, con i $c_n$ presi da $g$"}
      ],
      hint:"La normalizzazione si fissa in un colpo solo: il nucleo deve avere integrale $1$ in $y$, cos&igrave; che per $t\\to0^+$ diventi $\\delta(x-y)$ e restituisca $g$.",
      sol:"Trasformando in $x$: $\\partial_t\\hat u=-Dk^2\\hat u$, cio&egrave; $\\hat u(t,k)=\\hat g(k)e^{-Dk^2t}$. Per il <em>teorema di convoluzione</em> il prodotto in $k$ diventa convoluzione in $x$, e l'antitrasformata di una gaussiana &egrave; una gaussiana: $\\mathcal{F}^{-1}[e^{-Dk^2t}](s)=\\frac{1}{\\sqrt{4\\pi Dt}}e^{-s^2/(4Dt)}$. Da qui $u=K_t*g$ con $K_t(s)=\\frac{1}{\\sqrt{4\\pi Dt}}e^{-s^2/(4Dt)}$. Controllo della normalizzazione, che &egrave; il modo veloce di non sbagliare i fattori: $\\int_{-\\infty}^{+\\infty}e^{-s^2/(4Dt)}ds=\\sqrt{4\\pi Dt}$ per la gaussiana di Gauss $\\int e^{-\\alpha s^2}ds=\\sqrt{\\pi/\\alpha}$ con $\\alpha=1/(4Dt)$; quindi il prefattore $1/\\sqrt{4\\pi Dt}$ &egrave; l'unico che rende $\\int K_t=1$, cio&egrave; $K_t\\to\\delta$ per $t\\to0^+$. Lo sviluppo in serie di seni &egrave; sbagliato qui perch&eacute; su tutta la retta lo spettro di $\\partial_x^2$ &egrave; continuo: non ci sono BC che quantizzino $k$.",
      cont:"Dato gaussiano" },

    { t:"Se $g(x)=e^{-x^2/(2a^2)}$, la soluzione resta gaussiana. Quale?",
      opts:[
        {x:"$u(t,x)=\\dfrac{a}{\\sqrt{a^2+2Dt}}\\,e^{-x^2/[2(a^2+2Dt)]}$: le varianze si sommano, $\\sigma^2(t)=a^2+2Dt$", c:true},
        {x:"$u(t,x)=\\dfrac{a}{\\sqrt{a^2+4Dt}}\\,e^{-x^2/[2(a^2+4Dt)]}$"},
        {x:"$u(t,x)=e^{-x^2/[2(a^2+2Dt)]}$, con ampiezza di picco invariata"},
        {x:"$u(t,x)=\\dfrac{a}{\\sqrt{a^2+2Dt}}\\,e^{-x^2/(2a^2)}e^{-2Dt}$"}
      ],
      hint:"Non fare l'integrale: usa che la convoluzione di due gaussiane &egrave; gaussiana, e scrivi la varianza del nucleo nella convenzione $e^{-s^2/(2\\sigma^2)}$.",
      sol:"Riscrivendo il nucleo come $\\frac{1}{\\sqrt{2\\pi\\sigma_K^2}}e^{-s^2/(2\\sigma_K^2)}$ si legge $2\\sigma_K^2=4Dt$, cio&egrave; $\\sigma_K^2=2Dt$. Il dato ha varianza $a^2$ e massa $\\int g=a\\sqrt{2\\pi}$. Per il teorema di convoluzione, in Fourier le due gaussiane si moltiplicano e gli esponenti si sommano: le varianze si sommano, $\\sigma^2(t)=a^2+2Dt$, mentre la massa si conserva. Quindi $$u(t,x)=a\\sqrt{2\\pi}\\cdot\\frac{1}{\\sqrt{2\\pi(a^2+2Dt)}}e^{-x^2/[2(a^2+2Dt)]}=\\frac{a}{\\sqrt{a^2+2Dt}}\\,e^{-x^2/[2(a^2+2Dt)]}.$$ Tre controlli che valgono pi&ugrave; del conto: (i) $t\\to0^+$ restituisce $g$; (ii) $\\int u\\,dx=a\\sqrt{2\\pi}$ per ogni $t$, come dev'essere perch&eacute; $\\frac{d}{dt}\\int u=D[\\partial_xu]_{-\\infty}^{+\\infty}=0$; (iii) l'altezza del picco decresce come $t^{-1/2}$ mentre la larghezza cresce come $t^{1/2}$, ed &egrave; la firma diffusiva $\\sigma\\sim\\sqrt{2Dt}$, la stessa del moto browniano. Il $4Dt$ al posto del $2Dt$ &egrave; l'errore di chi confonde le due convenzioni: nel nucleo compare $4Dt$ perch&eacute; l&igrave; il denominatore &egrave; $2\\sigma_K^2$." }
  ]},

  /* ---------------------------------------------------------------- 8 ----
     Modus operandi: la checklist finale prima di consegnare. */
  { pool:"edp", src:"modus operandi", steps:[

    { t:"Hai scritto $u(t,x)=\\sum_nc_ne^{-\\lambda_nt}\\psi_n(x)$. Qual &egrave; il controllo che costa dieci secondi e salva l'esercizio?",
      opts:[
        {x:"Verificare che $u(0,x)$ riproduca il dato iniziale e che ogni singolo $\\psi_n$ soddisfi le BC assegnate", c:true},
        {x:"Verificare che la serie converga uniformemente su $[0,L]\\times[0,\\infty)$"},
        {x:"Verificare che $\\int_0^L u\\,dx$ sia finito"},
        {x:"Verificare che $\\lambda_n$ sia reale"}
      ],
      hint:"I due controlli utili sono quelli che intercettano gli errori che davvero si fanno: la famiglia sbagliata e la normalizzazione sbagliata.",
      sol:"Le BC vanno controllate <em>modo per modo</em>: se hai scritto seni dove servivano coseni, $\\partial_x\\psi_n(0)\\ne0$ salta all'occhio senza fare alcun conto. Il limite $t\\to0^+$ intercetta invece l'altro errore ricorrente, la normalizzazione dei coefficienti: se il fattore $2/L$ &egrave; sbagliato, la serie a $t=0$ non restituisce il dato. Sono i due errori che effettivamente compaiono nei compiti, mentre la convergenza uniforme e la realt&agrave; degli autovalori sono garantite a monte dal teorema spettrale per operatori di Sturm-Liouville autoaggiunti, e verificarle non fa guadagnare punti. Aggiungi, se hai tempo, la verifica che l'equazione sia soddisfatta modo per modo: basta derivare un termine.",
      cont:"Secondo controllo" },

    { t:"E il controllo dimensionale-asintotico?",
      opts:[
        {x:"$\\lambda_nt$ dev'essere adimensionale (per il calore $\\lambda_n\\sim Dn^2/L^2$, e $[D]=\\mathrm{lung}^2/\\mathrm{tempo}$), e il limite $t\\to\\infty$ dev'essere coerente con le BC: $\\to0$ con Dirichlet, $\\to$ valor medio con Neumann", c:true},
        {x:"Basta che i coefficienti $c_n$ decrescano, senza altro requisito"},
        {x:"Il limite $t\\to\\infty$ deve sempre essere $0$, qualunque siano le BC"},
        {x:"Le dimensioni non sono un criterio utile, perch&eacute; le PDE d'esame sono adimensionali"}
      ],
      hint:"Un esponente con le dimensioni sbagliate &egrave; un errore che si vede senza rifare il conto; e l'asintotica ha un significato fisico che dipende dalle BC.",
      sol:"Ogni esponente dev'essere puro: per il calore $\\lambda_nt=Dn^2\\pi^2t/L^2$ &egrave; adimensionale perch&eacute; $[D]=\\mathrm{lunghezza}^2/\\mathrm{tempo}$; per le onde $\\omega_nt=n\\pi ct/L$ lo &egrave; perch&eacute; $[c]=\\mathrm{lunghezza}/\\mathrm{tempo}$. Se compare $Dnt/L$ oppure $Dn^2t/L$, manca una potenza e il conto &egrave; sbagliato. Il secondo pezzo &egrave; il regime asintotico, che dipende dalle BC e non dal dato: Dirichlet omogenee $\\to u\\to0$, perch&eacute; il calore esce dagli estremi; Neumann omogenee $\\to u\\to$ media di $g$, perch&eacute; $\\int u$ &egrave; conservato; equazione delle onde $\\to$ nessun decadimento, l'energia $\\frac12\\int[(\\partial_ty)^2+c^2(\\partial_xy)^2]dx$ si conserva e la soluzione &egrave; quasi-periodica. Se il tuo risultato per un problema di Neumann tende a zero, hai perso il modo $n=0$; se un problema di onde ti decade, hai messo un esponenziale reale dove andava un'oscillazione." }
  ]},

  /* ---------------------------------------------------------------- 9 ----
     Appello 09/09/2025, Es.4 [8 pt]. Base di Hermite, oscillatore armonico. */
  { pool:"edp", src:"20250909 Es.4", steps:[

    { t:"Appello 09/09/2025. Si risolva $-\\partial_t^2u+\\partial_x^2u-x^2u=0$ per $t\\ge0$ e $x\\in\\mathbb{R}$, con $\\lim_{|x|\\to\\infty}u(t,x)=0$. Separando $u=\\varphi(t)\\psi(x)$, quale problema agli autovalori resta in $x$?",
      opts:[
        {x:"$\\big(-\\tfrac{d^2}{dx^2}+x^2\\big)\\psi=\\lambda\\psi$, l'oscillatore armonico: $\\lambda_n=2n+1$ e $\\psi_n(x)=H_n(x)e^{-x^2/2}$, con $n\\ge0$", c:true},
        {x:"$\\psi''=\\lambda\\psi$ con $\\psi(\\pm\\infty)=0$, che su tutta la retta non ha autovalori discreti"},
        {x:"$\\big(-\\tfrac{d^2}{dx^2}+x^2\\big)\\psi=\\lambda\\psi$ con $\\lambda_n=n+\\tfrac12$"},
        {x:"$\\psi''-x^2\\psi=\\lambda\\psi$ con $\\lambda_n=-n^2$ e autofunzioni $\\sin(nx)$"}
      ],
      hint:"La condizione al bordo qui non &egrave; un valore su due estremi, ma il decadimento all'infinito: &egrave; quella a quantizzare lo spettro. E attenzione alla convenzione degli autovalori.",
      sol:"Separando, $$\\frac{\\ddot\\varphi(t)}{\\varphi(t)}=\\frac{\\psi''(x)-x^2\\psi(x)}{\\psi(x)}=\\mu .$$ Il membro destro &egrave; $-A\\psi/\\psi$ con $A=-\\frac{d^2}{dx^2}+x^2$, l'operatore dell'oscillatore armonico, autoaggiunto su $L^2(\\mathbb{R})$ e con spettro puramente discreto grazie al potenziale confinante. Le sue autofunzioni sono le funzioni di Hermite $f_n(x)=H_n(x)e^{-x^2/2}$, con $-f_n''+x^2f_n=(2n+1)f_n$: la convenzione $2n+1$ &egrave; quella con l'operatore scritto <em>senza</em> il fattore $1/2$; il familiare $n+\\tfrac12$ della meccanica quantistica &egrave; lo stesso spettro diviso per due, perch&eacute; l&igrave; l'hamiltoniana &egrave; $\\frac12(-\\partial_x^2+x^2)$. Poich&eacute; qui il membro destro &egrave; $-\\lambda_n$, si ha $\\mu_n=-(2n+1)$. Il suggerimento del testo &egrave; la freccia: quando compare $x^2u$ su tutta la retta con decadimento a infinito, la base &egrave; Hermite.",
      cont:"Risolvi la parte temporale" },

    { t:"Con $\\mu_n=-(2n+1)$ l'equazione temporale &egrave; $\\ddot\\varphi_n=-(2n+1)\\varphi_n$. Che cosa resta dopo aver imposto $\\lim_{t\\to0}\\partial_tu(t,x)=0$?",
      opts:[
        {x:"$\\varphi_n=a_ne^{i\\sqrt{2n+1}\\,t}+b_ne^{-i\\sqrt{2n+1}\\,t}$, e la condizione impone $a_n=b_n$: resta $\\varphi_n\\propto\\cos\\!\\big(\\sqrt{2n+1}\\,t\\big)$", c:true},
        {x:"$\\varphi_n=a_ne^{-(2n+1)t}$, e la condizione impone $a_n=0$"},
        {x:"$\\varphi_n\\propto\\sin\\!\\big(\\sqrt{2n+1}\\,t\\big)$"},
        {x:"$\\varphi_n=a_n+b_nt$, perch&eacute; con $\\mu<0$ l'equazione degenera"}
      ],
      hint:"L'equazione temporale &egrave; del secondo ordine con costante negativa a destra: oscilla, non decade. E la condizione va imposta modo per modo, il che richiede un argomento.",
      sol:"$\\ddot\\varphi=-\\omega_n^2\\varphi$ con $\\omega_n=\\sqrt{2n+1}$ ha per generale $a_ne^{i\\omega_nt}+b_ne^{-i\\omega_nt}$. Derivando la serie e ponendo $t\\to0$: $\\sum_ni\\omega_n(a_n-b_n)f_n(x)=0$. Qui serve un risultato preciso, l'<em>indipendenza lineare</em> (anzi, la completezza ortogonale) della base di Hermite in $L^2(\\mathbb{R})$: una combinazione che si annulla identicamente ha tutti i coefficienti nulli, quindi $a_n=b_n$ per ogni $n$, non solo la somma. Con $a_n=b_n$ si ottiene $\\varphi_n=2a_n\\cos(\\omega_nt)$, coerente con l'idea fisica di un sistema che parte in quiete.",
      cont:"Leggi i coefficienti dal dato" },

    { t:"Il dato &egrave; $u(0,x)=(2+3x)e^{-x^2/2}$. Sapendo che $H_0(x)=1$ e $H_1(x)=2x$, quali coefficienti si leggono in $u(0,x)=\\sum_n2a_nH_n(x)e^{-x^2/2}$?",
      opts:[
        {x:"$a_0=1$ e $a_1=\\tfrac34$, tutti gli altri nulli", c:true},
        {x:"$a_0=2$ e $a_1=3$"},
        {x:"$a_0=1$ e $a_1=\\tfrac32$"},
        {x:"Nessuno si legge: servono gli integrali $a_n\\propto\\int f_n(x)u(0,x)dx$, perch&eacute; il dato non &egrave; una combinazione finita"}
      ],
      hint:"$H_1(x)=2x$ e non $x$: c'&egrave; un fattore 2 da scontare. E prima ancora ce n'&egrave; un altro, il $2a_n$ della scrittura.",
      sol:"Il dato &egrave; gi&agrave; una combinazione finita degli elementi della base, quindi per l'unicit&agrave; dello sviluppo su base ortogonale non serve alcun integrale. Termine per termine: $2a_0H_0e^{-x^2/2}=2a_0e^{-x^2/2}$ deve dare $2e^{-x^2/2}$, quindi $a_0=1$; $2a_1H_1e^{-x^2/2}=4a_1xe^{-x^2/2}$ deve dare $3xe^{-x^2/2}$, quindi $a_1=\\tfrac34$. Il doppio fattore 2 (uno dal $2a_n$, uno da $H_1=2x$) &egrave; esattamente ci&ograve; su cui l'esercizio conta; $a_1=3/2$ &egrave; l'errore di chi dimentica $H_1=2x$, $a_0=2$ quello di chi dimentica il $2a_n$.",
      cont:"Assembla la soluzione" },

    { t:"Qual &egrave; la soluzione finale?",
      opts:[
        {x:"$u(t,x)=\\big[2\\cos t+3x\\cos(\\sqrt3\\,t)\\big]e^{-x^2/2}$", c:true},
        {x:"$u(t,x)=\\big[2\\cos t+3x\\cos(3t)\\big]e^{-x^2/2}$"},
        {x:"$u(t,x)=\\big[2\\cos t+\\tfrac32x\\cos(\\sqrt3\\,t)\\big]e^{-x^2/2}$"},
        {x:"$u(t,x)=\\big[2\\cos t+3x\\cos(\\sqrt3\\,t)\\big]e^{-x^2}$"}
      ],
      hint:"La frequenza del modo $n$ &egrave; $\\sqrt{2n+1}$, non $2n+1$: la radice non si perde. E il controllo &egrave; immediato: poni $t=0$.",
      sol:"Con $a_0=1$, $\\omega_0=\\sqrt1=1$, e $a_1=3/4$, $\\omega_1=\\sqrt3$: $$u(t,x)=2\\cos(t)\\,H_0e^{-x^2/2}+2\\cdot\\tfrac34\\cos(\\sqrt3t)\\,H_1e^{-x^2/2}=\\big[2\\cos t+3x\\cos(\\sqrt3\\,t)\\big]e^{-x^2/2}.$$ Controllo a $t=0$: si ritrova $(2+3x)e^{-x^2/2}$, e $\\partial_tu|_{t=0}=[-2\\sin 0-3\\sqrt3x\\sin0]e^{-x^2/2}=0$: entrambi i dati sono soddisfatti. Osservazione che vale un commento all'orale: le frequenze $\\sqrt{2n+1}$ stanno fra loro in rapporto irrazionale ($1:\\sqrt3:\\sqrt5\\ldots$), quindi la soluzione &egrave; quasi-periodica ma non periodica in $t$ — a differenza della corda vibrante, dove le frequenze $n\\omega_1$ sono commensurabili e il moto ha periodo $2L/c$.",
      cont:"Perch&eacute; proprio Hermite" },

    { t:"Perch&eacute; qui la base giusta &egrave; quella di Hermite e non $e^{ikx}$, nonostante il dominio spaziale sia tutto $\\mathbb{R}$?",
      opts:[
        {x:"Perch&eacute; il termine $x^2u$ rompe l'invarianza per traslazione: $e^{ikx}$ non &egrave; autofunzione di $-\\partial_x^2+x^2$. &Egrave; il potenziale confinante, non la limitatezza del dominio, a rendere lo spettro discreto", c:true},
        {x:"Perch&eacute; $e^{ikx}$ non &egrave; a quadrato sommabile, e quindi non si pu&ograve; mai usare"},
        {x:"Perch&eacute; il dominio temporale $t\\ge0$ &egrave; una semiretta"},
        {x:"Perch&eacute; il dato iniziale contiene una gaussiana, e le gaussiane si sviluppano solo su Hermite"}
      ],
      hint:"Chiediti quale simmetria dell'equazione &egrave; responsabile del fatto che, di solito, su $\\mathbb{R}$ si usa Fourier.",
      sol:"Su $\\mathbb{R}$ la trasformata di Fourier &egrave; la scelta giusta quando l'operatore spaziale commuta con le traslazioni, perch&eacute; allora $e^{ikx}$ ne &egrave; autofunzione. Il termine $x^2$ distrugge quella simmetria e con essa la diagonalizzabilit&agrave; in $k$: infatti in Fourier $x^2\\to-\\partial_k^2$, e l'equazione resta differenziale invece di diventare algebrica. Il potenziale $x^2$ confina, e il confinamento (non la limitatezza del dominio) &egrave; ci&ograve; che discretizza lo spettro: la lezione generale &egrave; che <em>lo spettro discreto viene dagli stati legati</em>, che li produca una scatola con pareti o una buca di potenziale. La stessa equazione, letta in fisica, &egrave; un campo di Klein-Gordon in un potenziale armonico, e le frequenze $\\sqrt{2n+1}$ sono le radici delle energie dell'oscillatore quantistico." }
  ]},

  /* --------------------------------------------------------------- 10 ----
     Appello 05/11/2025, Es.4 [6 pt]. Condizioni periodiche, dato gia' modale. */
  { pool:"edp", src:"20251105 Es.4", steps:[

    { t:"Appello 05/11/2025. $\\partial_tf=\\partial_x^2f$ per $t>0$ e $0\\le x<2\\pi$, con $f$ <em>periodica</em> in $x$. Quale base di autofunzioni impongono le condizioni periodiche?",
      opts:[
        {x:"$\\{e^{inx}\\}_{n\\in\\mathbb{Z}}$, equivalentemente $\\{1,\\cos(nx),\\sin(nx)\\}_{n\\ge1}$: le periodiche non selezionano n&eacute; i soli seni n&eacute; i soli coseni", c:true},
        {x:"I soli $\\sin(nx)$ con $n\\ge1$"},
        {x:"I soli $\\cos(nx)$ con $n\\ge0$"},
        {x:"$e^{i(n+1/2)x}$, per antiperiodicit&agrave;"}
      ],
      hint:"Le condizioni periodiche sono due, $\\psi(0)=\\psi(2\\pi)$ e $\\psi'(0)=\\psi'(2\\pi)$, ma non fissano alcun valore: quante autofunzioni indipendenti possono coesistere con lo stesso autovalore?",
      sol:"Le BC periodiche $\\psi(0)=\\psi(2\\pi)$, $\\psi'(0)=\\psi'(2\\pi)$ sono soddisfatte da $\\cos(nx)$ e $\\sin(nx)$ allo stesso modo, per ogni $n$ intero. La differenza strutturale con Dirichlet e Neumann &egrave; la <em>degenerazione</em>: qui ogni autovalore $\\lambda_n=-n^2$ con $n\\ge1$ ha molteplicit&agrave; due, mentre nei problemi di Sturm-Liouville regolari su un intervallo con BC separate lo spettro &egrave; sempre semplice. Il motivo &egrave; la simmetria: il problema periodico &egrave; invariante per traslazione lungo il cerchio, e la degenerazione &egrave; l'ombra di quella simmetria continua. Il modo $n=0$ (costante) &egrave; presente e non degenere. Le autofunzioni antiperiodiche compaiono solo se il testo impone $\\psi(2\\pi)=-\\psi(0)$, che non &egrave; questo caso.",
      cont:"Risolvi col dato assegnato" },

    { t:"Con $f(x,0)=\\sin(2x)-\\cos(x)$, qual &egrave; la soluzione?",
      opts:[
        {x:"$f(x,t)=e^{-4t}\\sin(2x)-e^{-t}\\cos(x)$", c:true},
        {x:"$f(x,t)=e^{-2t}\\sin(2x)-e^{-t}\\cos(x)$"},
        {x:"$f(x,t)=e^{-4t}\\big[\\sin(2x)-\\cos(x)\\big]$"},
        {x:"$f(x,t)=c_0+e^{-4t}\\sin(2x)-e^{-t}\\cos(x)$, con $c_0$ da determinare"}
      ],
      hint:"Ogni modo porta il suo tasso $e^{-n^2t}$, e $n$ si legge dall'argomento. Verifica poi sostituendo: costa dieci secondi.",
      sol:"Il dato &egrave; gi&agrave; combinazione finita di autofunzioni: $c$ del modo $\\sin(2x)$ vale $1$, quello di $\\cos(x)$ vale $-1$, tutti gli altri sono zero. Il modo $n$ evolve con $e^{-n^2t}$, quindi $n=2$ d&agrave; $e^{-4t}$ e $n=1$ d&agrave; $e^{-t}$. Verifica diretta: $\\partial_tf=-4e^{-4t}\\sin(2x)+e^{-t}\\cos x$ e $\\partial_x^2f=-4e^{-4t}\\sin(2x)+e^{-t}\\cos x$: coincidono, e a $t=0$ si ritrova il dato. Il termine costante $c_0$ &egrave; nullo perch&eacute; il valor medio del dato su un periodo &egrave; zero, e sotto BC periodiche $\\int_0^{2\\pi}f\\,dx$ si conserva ($\\frac{d}{dt}\\int f=[\\partial_xf]_0^{2\\pi}=0$ per periodicit&agrave;): non pu&ograve; nascere dal nulla.",
      cont:"Riconoscere l'esercizio corto" },

    { t:"Questo esercizio vale 6 punti, meno degli altri esercizi 4 del 2025-26. Da che cosa si riconosce <em>prima di iniziare</em> che &egrave; il caso corto?",
      opts:[
        {x:"Dal dato iniziale scritto direttamente negli argomenti delle autofunzioni del dominio: nessun integrale di proiezione, solo l'attribuzione dei tassi $e^{-n^2t}$", c:true},
        {x:"Dal fatto che il dominio &egrave; $[0,2\\pi)$ e non un generico $[0,L]$"},
        {x:"Dal fatto che l'equazione &egrave; il calore puro, senza coefficienti variabili n&eacute; sorgenti"},
        {x:"Dal punteggio: sotto gli 8 punti non compaiono mai serie infinite"}
      ],
      hint:"Confronta gli argomenti del dato con gli argomenti delle autofunzioni: se coincidono, met&agrave; dell'esercizio &egrave; gi&agrave; fatta.",
      sol:"La spia &egrave; la coincidenza fra gli argomenti del dato ($\\sin 2x$, $\\cos x$) e quelli delle autofunzioni ammesse dalle BC ($\\sin nx$, $\\cos nx$ con $n$ intero, perch&eacute; il periodo &egrave; $2\\pi$). Quando accade, il dato &egrave; gi&agrave; sviluppato e si legge; quando non accade — dato $x^2$, oppure $x(L-x)$, oppure $e^{-x}$ — serve la proiezione e l'esercizio si allunga di un'integrazione per parti o due. Corollario utile: se il dato <em>non</em> fosse periodico su $[0,2\\pi)$ (per esempio $\\sin(2{,}5\\,x)$) il problema sarebbe mal posto, perch&eacute; il dato dev'essere compatibile con le BC. La compatibilit&agrave; dato-BC &egrave; sempre la prima cosa da controllare: in un esercizio ben posto o coincide (caso corto) o richiede la proiezione (caso lungo), mai nessuna delle due." }
  ]},

  /* --------------------------------------------------------------- 11 ----
     Appello 08/07/2025, Es.4 [8 pt]. Sorgente delta con scaling, propagatore
     dell'operatore advezione-diffusione-decadimento. Il fattore 3. */
  { pool:"edp", src:"20250707 Es.4", steps:[

    { t:"Appello 08/07/2025. $\\partial_tf=\\partial_x^2f-\\partial_xf-f+\\delta(x)\\,\\delta\\!\\big(\\tfrac t3-1\\big)$ su $x\\in\\mathbb{R}$, con $f(t=-\\tfrac12,x)=0$. Prima mossa: come si riscrive $\\delta(t/3-1)$?",
      opts:[
        {x:"$3\\,\\delta(t-3)$", c:true},
        {x:"$\\delta(t-3)$"},
        {x:"$\\tfrac13\\,\\delta(t-3)$"},
        {x:"$3\\,\\delta(t-1)$"}
      ],
      hint:"Vale $\\delta(g(t))=\\sum_i\\delta(t-t_i)/|g'(t_i)|$ sugli zeri semplici: qui c'&egrave; un solo zero e la derivata vale $1/3$, quindi si <em>divide</em> per $1/3$.",
      sol:"$g(t)=t/3-1$ si annulla in $t=3$ e ha $g'=1/3$, dunque $\\delta(t/3-1)=\\delta(t-3)/|1/3|=3\\,\\delta(t-3)$. Controllo indipendente in una riga, che &egrave; il modo pi&ugrave; sicuro di non sbagliare il verso del fattore: $\\int_{-\\infty}^{+\\infty}\\delta(t/3-1)\\,dt$, con $s=t/3$ e $dt=3\\,ds$, vale $3\\int\\delta(s-1)ds=3$; e infatti $\\int 3\\delta(t-3)dt=3$. La sorgente &egrave; dunque un impulso puntiforme in $x=0$ acceso all'istante $t=3$ con <em>peso 3</em>. Nota per chi legge la stampa ufficiale: nell'equazione trasformata il testo scrive per refuso $3\\delta(t-1)$, ma nella riga immediatamente successiva dichiara $\\delta(t/3-1)=3\\delta(t-3)$ e da l&igrave; in avanti usa coerentemente $\\theta(t-3)$; il refuso &egrave; nell'argomento, non nel fattore.",
      cont:"Semplifica l'operatore" },

    { t:"Per l'omogenea associata, quali sostituzioni riducono $\\partial_tf=\\partial_x^2f-\\partial_xf-f$ al calore puro?",
      opts:[
        {x:"$f=e^{-t}h$ elimina il termine $-f$ lasciando $\\partial_th=\\partial_x^2h-\\partial_xh$; poi il passaggio al sistema mobile $\\xi=x-t$ elimina l'advezione e resta $\\partial_tH=\\partial_\\xi^2H$", c:true},
        {x:"$f=e^{-x}h$ elimina entrambi i termini in un colpo solo"},
        {x:"$f=e^{+t}h$ elimina il termine $-f$"},
        {x:"Nessuna sostituzione elementare: i due termini vanno trattati perturbativamente"}
      ],
      hint:"Il termine di ordine zero si assorbe in un fattore che dipende solo da $t$; il termine del primo ordine si assorbe cambiando riferimento.",
      sol:"Con $f=e^{-t}h$: $\\partial_tf=e^{-t}(\\dot h-h)$ e il membro destro vale $e^{-t}(h''-h'-h)$; uguagliando, i due $-h$ si cancellano e resta $\\dot h=h''-h'$. Poi, ponendo $\\xi=x-ct$ e $h(t,x)=H(t,\\xi)$: $\\partial_th=H_t-cH_\\xi$, $\\partial_xh=H_\\xi$, $\\partial_x^2h=H_{\\xi\\xi}$, e l'equazione diventa $H_t-cH_\\xi=H_{\\xi\\xi}-H_\\xi$: scegliendo $c=1$ resta $H_t=H_{\\xi\\xi}$. Il segno &egrave; quello che dice il verso della deriva: il termine $-\\partial_xf$ trasporta verso <em>destra</em> con velocit&agrave; $+1$. La lettura fisica dei tre termini &egrave; diffusione, advezione, decadimento — l'equazione di un inquinante che diffonde in un fiume e nel frattempo si degrada.",
      cont:"Scrivi il propagatore" },

    { t:"Qual &egrave; il propagatore ritardato $G(t,x)$ dell'operatore $\\partial_t-\\partial_x^2+\\partial_x+1$, cio&egrave; la soluzione con sorgente $\\delta(x)\\delta(t)$ e nulla per $t<0$?",
      opts:[
        {x:"$G(t,x)=\\theta(t)\\,\\dfrac{e^{-t}}{\\sqrt{4\\pi t}}\\,e^{-(x-t)^2/(4t)}$", c:true},
        {x:"$G(t,x)=\\theta(t)\\,\\dfrac{e^{-t}}{\\sqrt{4\\pi t}}\\,e^{-x^2/(4t)}$"},
        {x:"$G(t,x)=\\theta(t)\\,\\dfrac{e^{-t}}{\\sqrt{4\\pi t}}\\,e^{-(x+t)^2/(4t)}$"},
        {x:"$G(t,x)=\\theta(t)\\,\\dfrac{1}{\\sqrt{4\\pi t}}\\,e^{-(x-t)^2/(4t)}$"}
      ],
      hint:"Tre ingredienti, uno per termine dell'operatore: la gaussiana per la diffusione, lo spostamento del centro per l'advezione, il fattore esponenziale globale per il decadimento.",
      sol:"Nel riferimento mobile e con la sostituzione esponenziale il problema &egrave; il calore puro con $D=1$, il cui nucleo &egrave; $\\frac{1}{\\sqrt{4\\pi t}}e^{-\\xi^2/(4t)}$; tornando indietro, $\\xi=x-t$ e il fattore $e^{-t}$: $$G(t,x)=\\theta(t)\\,\\frac{e^{-t}}{\\sqrt{4\\pi t}}\\,e^{-(x-t)^2/(4t)} .$$ Il centro del pacchetto &egrave; in $x=t$, non in $x=0$ n&eacute; in $x=-t$: la deriva &egrave; verso destra, come si &egrave; visto dal segno di $c$. Verifica in Fourier, che &egrave; il modo pi&ugrave; rapido per convincersene: $\\partial_t\\hat f=-(k^2+ik+1)\\hat f$ d&agrave; $\\hat G=\\theta(t)e^{-k^2t}e^{-ikt}e^{-t}$, e il fattore $e^{-ikt}$ &egrave; per il teorema di traslazione lo spostamento $x\\to x-t$. Il fattore $e^{-t}$ dice che la massa totale non si conserva: $\\int G\\,dx=e^{-t}$.",
      cont:"Componi la soluzione" },

    { t:"Qual &egrave; allora $f(t,x)$?",
      opts:[
        {x:"$f(t,x)=\\theta(t-3)\\,\\dfrac{3\\,e^{-(t-3)}}{\\sqrt{4\\pi(t-3)}}\\,\\exp\\!\\Big[-\\dfrac{(x-t+3)^2}{4(t-3)}\\Big]$", c:true},
        {x:"$f(t,x)=\\theta(t-3)\\,\\dfrac{e^{-(t-3)}}{\\sqrt{4\\pi(t-3)}}\\,\\exp\\!\\Big[-\\dfrac{(x-t+3)^2}{4(t-3)}\\Big]$"},
        {x:"$f(t,x)=\\theta(t)\\,\\dfrac{3\\,e^{-t}}{\\sqrt{4\\pi t}}\\,\\exp\\!\\Big[-\\dfrac{(x-t)^2}{4t}\\Big]$"},
        {x:"$f(t,x)=\\theta(t+\\tfrac12)\\,\\dfrac{3\\,e^{-(t+1/2)}}{\\sqrt{4\\pi(t+\\tfrac12)}}\\,\\exp\\!\\Big[-\\dfrac{(x-t-\\tfrac12)^2}{4(t+\\tfrac12)}\\Big]$"},
        {x:"$f(t,x)=3\\,\\theta(t-3)\\,\\dfrac{e^{-(t-3)}}{\\sqrt{4\\pi(t-3)}}\\,\\exp\\!\\Big[-\\dfrac{(x-t-3)^2}{4(t-3)}\\Big]$"}
      ],
      hint:"L'invarianza per traslazioni temporali dice che l'unica cosa che conta &egrave; il tempo trascorso dall'accensione. E il peso della sorgente non &egrave; 1.",
      sol:"L'operatore ha coefficienti costanti, quindi &egrave; invariante per traslazione in $t$ e in $x$: una sorgente $3\\,\\delta(x)\\delta(t-3)$ produce $3\\,G(t-3,x)$, cio&egrave; $$f(t,x)=\\theta(t-3)\\,\\frac{3\\,e^{-(t-3)}}{\\sqrt{4\\pi(t-3)}}\\exp\\!\\Big[-\\frac{(x-t+3)^2}{4(t-3)}\\Big].$$ La costante dell'omogenea &egrave; nulla perch&eacute; il dato $f(-\\tfrac12,x)=0$ &egrave; assegnato <em>prima</em> dell'accensione, in $t=-1/2<3$: prima dell'impulso non succede nulla, ed &egrave; il significato del $\\theta(t-3)$. Il centro si trova in $x=t-3$, cio&egrave; parte da $x=0$ all'accensione e deriva a destra con velocit&agrave; 1: l'argomento della gaussiana &egrave; $x-(t-3)=x-t+3$. La stampa ufficiale scrive lo stesso risultato nella forma $3\\theta(t-3)e^{-(t-3)}e^{-[x-t+3]^2/4(t-3)}/\\big(\\sqrt{2\\pi}\\sqrt{2(t-3)}\\big)$: coincide, perch&eacute; $\\sqrt{2\\pi}\\sqrt{2(t-3)}=\\sqrt{4\\pi(t-3)}$.",
      cont:"Il controllo che smaschera il fattore 3" },

    { t:"Quale controllo mostra immediatamente se il fattore 3 &egrave; stato perso?",
      opts:[
        {x:"Integrare l'equazione in $x$: la massa $M(t)=\\int f\\,dx$ obbedisce a $\\dot M=-M+3\\delta(t-3)$, quindi salta esattamente di 3 all'accensione e poi vale $M(t)=3e^{-(t-3)}$", c:true},
        {x:"Il limite $t\\to+\\infty$, che deve dare 3"},
        {x:"La verifica che $f\\to0$ per $|x|\\to\\infty$"},
        {x:"La verifica dimensionale dell'esponente $(x-t+3)^2/[4(t-3)]$"}
      ],
      hint:"C'&egrave; una quantit&agrave; scalare che si legge dalla soluzione e si calcola indipendentemente dall'equazione: confrontale.",
      sol:"Integrando l'equazione su tutto $x$, i termini $\\int\\partial_x^2f$ e $\\int\\partial_xf$ si annullano perch&eacute; $f$ e $\\partial_xf$ svaniscono a $\\pm\\infty$, e $\\int\\delta(x)dx=1$: resta $\\dot M=-M+3\\delta(t-3)$. Dunque $M$ &egrave; nulla fino a $t=3$, salta di $3$ e poi decade: $M(t)=3\\,\\theta(t-3)e^{-(t-3)}$. Dalla soluzione trovata si ottiene lo stesso, perch&eacute; la gaussiana &egrave; normalizzata a $1$ e resta il prefattore $3e^{-(t-3)}$: torna. Se avessi perso il fattore 3 troveresti $M=e^{-(t-3)}$ contro il salto di ampiezza $3$ imposto dalla sorgente, e lo scarto sarebbe evidente senza rifare un solo integrale. Il limite $t\\to\\infty$ non serve (tutto tende a zero per il decadimento) e la verifica delle BC nemmeno, perch&eacute; il fattore moltiplicativo non le tocca." }
  ]},

  /* --------------------------------------------------------------- 12 ----
     Appello 23/06/2025, Es.4 [7 pt]. Semiretta con Neumann + coefficiente
     sin(t): estensione pari e trasformata coseno. */
  { pool:"edp", src:"20250623 Es.4", steps:[

    { t:"Appello 23/06/2025. $\\partial_tu-\\sin t\\,\\partial_x^2u+u=0$ per $x>0$, con $u(0,x)=e^{-x}$ e $\\partial_xu|_{x=0}=0$. Come si tratta la semiretta?",
      opts:[
        {x:"Si estende il problema a tutta la retta per <em>parit&agrave;</em>, $u(t,-x)=u(t,x)$: il dato diventa $e^{-|x|}$ e la condizione di Neumann in $0$ risulta automaticamente soddisfatta", c:true},
        {x:"Si estende per <em>disparit&agrave;</em>, $u(t,-x)=-u(t,x)$: il dato diventa $\\mathrm{sgn}(x)\\,e^{-|x|}$"},
        {x:"Si separa e si usano le autofunzioni $\\sin(nx)$ con $n$ intero"},
        {x:"Non si estende: sulla semiretta l'unico strumento &egrave; la trasformata di Laplace in $x$"}
      ],
      hint:"Quale delle due estensioni ha derivata nulla in $x=0$? E quale sarebbe comunque incompatibile col dato, che in $x=0$ vale $1$?",
      sol:"L'estensione pari di una funzione regolare ha derivata dispari, e una funzione dispari continua si annulla in $0$: dunque la parit&agrave; <em>impone</em> $\\partial_xu(t,0)=0$, cio&egrave; esattamente la condizione di Neumann. L'estensione dispari imporrebbe invece $u(t,0)=0$, cio&egrave; Dirichlet, incompatibile con $e^{-x}\\big|_{x=0}=1$ e per di pi&ugrave; discontinua nell'origine. La regola generale sulla semiretta &egrave; il gemello di quella sull'intervallo: Neumann in $0$ $\\to$ estensione pari $\\to$ trasformata coseno; Dirichlet in $0$ $\\to$ estensione dispari $\\to$ trasformata seno. L'equazione &egrave; invariante sotto $x\\to-x$ (contiene solo $\\partial_x^2$), il che &egrave; ci&ograve; che rende lecita l'estensione: con un termine $\\partial_xu$ non lo sarebbe.",
      cont:"Trasforma in Fourier" },

    { t:"Trasformando in Fourier rispetto a $x$, quale ODE resta?",
      opts:[
        {x:"$\\partial_t\\hat u(t,k)=-\\big(1+k^2\\sin t\\big)\\hat u(t,k)$", c:true},
        {x:"$\\partial_t\\hat u=-\\big(1-k^2\\sin t\\big)\\hat u$"},
        {x:"$\\partial_t\\hat u=-\\big(1+k^2\\big)\\sin t\\;\\hat u$"},
        {x:"$\\partial_t\\hat u=-\\big(1+ik\\sin t\\big)\\hat u$"}
      ],
      hint:"$\\widehat{\\partial_x^2u}=-k^2\\hat u$, e nell'equazione quel termine compare gi&agrave; con un segno meno davanti: i due segni si compongono.",
      sol:"L'equazione &egrave; $\\partial_tu=\\sin t\\,\\partial_x^2u-u$. Con $\\widehat{\\partial_x^2u}=-k^2\\hat u$ si ottiene $\\partial_t\\hat u=-k^2\\sin t\\,\\hat u-\\hat u=-(1+k^2\\sin t)\\hat u$. La trasformata converte l'operatore differenziale in un moltiplicatore, e la PDE in una ODE del primo ordine in cui $k$ &egrave; un semplice parametro: &egrave; il vantaggio strutturale del dominio illimitato con coefficienti indipendenti da $x$. Il doppio segno meno &egrave; il punto in cui si sbaglia: $-\\sin t\\,\\partial_x^2\\to+k^2\\sin t$ dentro la parentesi.",
      cont:"Integra nel tempo" },

    { t:"Integrando quella ODE con dato $\\hat u(0,k)$:",
      opts:[
        {x:"$\\hat u(t,k)=\\hat u(0,k)\\,e^{-t-(1-\\cos t)\\,k^2}$", c:true},
        {x:"$\\hat u(t,k)=\\hat u(0,k)\\,e^{-t-k^2\\sin t}$"},
        {x:"$\\hat u(t,k)=\\hat u(0,k)\\,e^{-t(1+k^2)}$"},
        {x:"$\\hat u(t,k)=\\hat u(0,k)\\,e^{-t+(1-\\cos t)k^2}$"}
      ],
      hint:"&Egrave; di nuovo l'integrale $\\int_0^t a(s)\\,ds$ del coefficiente dipendente dal tempo, con $a(s)=\\sin s$.",
      sol:"$\\ln\\frac{\\hat u(t,k)}{\\hat u(0,k)}=-\\int_0^t\\!\\big(1+k^2\\sin s\\big)ds=-t-k^2\\big(1-\\cos t\\big)$, da cui la tesi. Il pezzo $-t$ &egrave; il decadimento uniforme di tutti i modi (viene dal termine $+u$ nell'equazione), il pezzo $-k^2(1-\\cos t)$ &egrave; la diffusione con intensit&agrave; modulata. Si ritrova la struttura gi&agrave; incontrata: con coefficiente $a(t)$ l'esponente diffusivo &egrave; $-k^2\\int_0^ta$, ed &egrave; non monotono quando $a$ cambia segno. Nei tratti in cui $\\sin t<0$ i modi alti ricrescono, ma $1-\\cos t\\ge0$ garantisce che non superino mai il valore iniziale.",
      cont:"Trasforma il dato" },

    { t:"Quanto vale $\\hat u(0,k)=\\int_{-\\infty}^{+\\infty}e^{-|x|}e^{-ikx}dx$?",
      opts:[
        {x:"$\\dfrac{2}{1+k^2}$", c:true},
        {x:"$\\dfrac{1}{1+k^2}$"},
        {x:"$\\dfrac{1}{1+ik}$"},
        {x:"$\\dfrac{2}{(1+k^2)^2}$"}
      ],
      hint:"Spezza in $(-\\infty,0]$ e $[0,+\\infty)$ e somma i due esponenziali; poi controlla ponendo $k=0$.",
      sol:"$\\int_{-\\infty}^{0}e^{(1-ik)x}dx+\\int_{0}^{+\\infty}e^{-(1+ik)x}dx=\\frac{1}{1-ik}+\\frac{1}{1+ik}=\\frac{2}{1+k^2}$. Controllo istantaneo: in $k=0$ la trasformata deve valere $\\int e^{-|x|}dx=2$, e infatti $2/(1+0)=2$. La coppia $e^{-|x|}\\leftrightarrow$ lorentziana $2/(1+k^2)$ &egrave; da avere in memoria: &egrave; la stessa che compare nella funzione d'onda dello stato fondamentale idrogenoide, e la sua reciproca (lorentziana in $x$, esponenziale in $k$) &egrave; il propagatore di Yukawa in una dimensione. Il fatto che la trasformata sia reale e pari discende dal dato reale e pari, come dev'essere per una estensione fatta bene.",
      cont:"Antitrasforma" },

    { t:"Qual &egrave; la soluzione finale, che il testo ammette di poter lasciare in forma integrale?",
      opts:[
        {x:"$u(t,x)=\\dfrac{2e^{-t}}{\\pi}\\displaystyle\\int_0^{\\infty}\\!dk\\;\\dfrac{e^{-(1-\\cos t)k^2}}{1+k^2}\\cos(kx)$", c:true},
        {x:"$u(t,x)=\\dfrac{e^{-t}}{\\pi}\\displaystyle\\int_0^{\\infty}\\!dk\\;\\dfrac{e^{-(1-\\cos t)k^2}}{1+k^2}\\cos(kx)$"},
        {x:"$u(t,x)=\\dfrac{2e^{-t}}{\\pi}\\displaystyle\\int_{-\\infty}^{+\\infty}\\!dk\\;\\dfrac{e^{-(1-\\cos t)k^2}}{1+k^2}\\cos(kx)$"},
        {x:"$u(t,x)=\\dfrac{e^{-t}}{2\\pi}\\displaystyle\\int_0^{\\infty}\\!dk\\;\\dfrac{e^{-(1-\\cos t)k^2}}{1+k^2}e^{ikx}$"}
      ],
      hint:"L'integrando &egrave; pari in $k$: sostituisci $e^{ikx}$ con $\\cos(kx)$ e dimezza il dominio raddoppiando. Poi controlla il caso $t=0$.",
      sol:"Antitrasformando, $u=\\int\\frac{dk}{2\\pi}\\hat u\\,e^{ikx}$ con $\\hat u=\\frac{2e^{-t}}{1+k^2}e^{-(1-\\cos t)k^2}$. L'integrando &egrave; pari in $k$, quindi la parte in $\\sin(kx)$ si cancella e $\\int_{-\\infty}^{+\\infty}=2\\int_0^{+\\infty}$: $$u=\\frac{1}{2\\pi}\\cdot 2\\cdot 2e^{-t}\\int_0^{\\infty}\\frac{e^{-(1-\\cos t)k^2}}{1+k^2}\\cos(kx)\\,dk=\\frac{2e^{-t}}{\\pi}\\int_0^{\\infty}\\frac{e^{-(1-\\cos t)k^2}}{1+k^2}\\cos(kx)\\,dk,$$ in accordo con la stampa ufficiale. Verifica in $t=0$, che &egrave; il controllo decisivo: resta $\\frac{2}{\\pi}\\int_0^{\\infty}\\frac{\\cos(kx)}{1+k^2}dk$, integrale noto (si fa per residui chiudendo nel semipiano superiore sul polo $k=i$) che vale $\\frac{\\pi}{2}e^{-|x|}$; il prodotto d&agrave; $e^{-|x|}$, cio&egrave; proprio il dato esteso. Notare infine che nessuna primitiva elementare esiste per $t>0$: il testo lo dice esplicitamente, ed &egrave; una licenza da usare — portare il conto fino all'integrale unidimensionale &egrave; la risposta completa." }
  ]},

  /* --------------------------------------------------------------- 13 ----
     Scaling della delta: drill secco su tre forme. */
  { pool:"edp", src:"trabocchetto ricorrente — scaling della delta", steps:[
    { t:"In sorgenti di PDE compaiono, in appelli diversi, le scritture $\\delta\\!\\big(\\tfrac t3-1\\big)$, $\\delta(2t-4)$ e $\\delta(t^2-4)$ con $t\\ge0$. Quale terna di riscritture &egrave; corretta?",
      opts:[
        {x:"$3\\delta(t-3)$;  $\\tfrac12\\delta(t-2)$;  $\\tfrac14\\delta(t-2)$", c:true},
        {x:"$\\tfrac13\\delta(t-3)$;  $2\\delta(t-2)$;  $4\\delta(t-2)$"},
        {x:"$3\\delta(t-3)$;  $2\\delta(t-2)$;  $\\tfrac14\\delta(t-2)$"},
        {x:"$3\\delta(t-1)$;  $\\tfrac12\\delta(t-4)$;  $\\tfrac14\\delta(t-4)$"},
        {x:"$3\\delta(t-3)$;  $\\tfrac12\\delta(t-2)$;  $\\tfrac14\\big[\\delta(t-2)+\\delta(t+2)\\big]$"}
      ],
      hint:"Il coefficiente &egrave; l'<em>inverso</em> del modulo della derivata, non la derivata. E nell'ultimo caso conta quali zeri cadono davvero nel dominio.",
      sol:"Regola invocata: $\\delta(g(t))=\\sum_i\\frac{\\delta(t-t_i)}{|g'(t_i)|}$, somma sugli zeri <em>semplici</em> di $g$ (se $g'(t_i)=0$ la composizione non &egrave; definita come distribuzione in questo modo). Caso per caso: $g=t/3-1$ ha zero in $3$ e $|g'|=1/3$, quindi $3\\delta(t-3)$; $g=2t-4$ ha zero in $2$ e $|g'|=2$, quindi $\\tfrac12\\delta(t-2)$; $g=t^2-4$ ha zeri in $\\pm2$ con $|g'(\\pm2)|=4$, ma il dominio &egrave; $t\\ge0$ e sopravvive solo $\\tfrac14\\delta(t-2)$. Verifica indipendente sul primo, che &egrave; il pi&ugrave; insidioso perch&eacute; il fattore &egrave; maggiore di uno: $\\int\\delta(t/3-1)dt=3$ per sostituzione diretta. Il modo di ricordare il verso: comprimere l'argomento (moltiplicarlo per un numero grande) <em>stringe</em> il picco e quindi ne riduce il peso; dilatarlo (dividerlo per 3) allarga e quindi aumenta il peso." }
  ]},

  /* --------------------------------------------------------------- 14 ----
     d'Alembert su tutta la retta e contrasto col calore. */
  { pool:"edp", src:"teoria — onde su dominio illimitato, cap. 20", steps:[

    { t:"Onde su tutta la retta, $\\partial_t^2y=c^2\\partial_x^2y$ con $y(x,0)=f(x)$ e $\\partial_ty(x,0)=g(x)$. Qual &egrave; la formula di d'Alembert?",
      opts:[
        {x:"$y=\\tfrac12\\big[f(x-ct)+f(x+ct)\\big]+\\dfrac{1}{2c}\\displaystyle\\int_{x-ct}^{x+ct}\\!g(s)\\,ds$", c:true},
        {x:"$y=\\tfrac12\\big[f(x-ct)+f(x+ct)\\big]+\\tfrac12\\displaystyle\\int_{x-ct}^{x+ct}\\!g(s)\\,ds$"},
        {x:"$y=f(x-ct)+f(x+ct)+\\dfrac{1}{2c}\\displaystyle\\int_{x-ct}^{x+ct}\\!g(s)\\,ds$"},
        {x:"$y=\\tfrac12\\big[f(x-ct)-f(x+ct)\\big]+\\dfrac{1}{2c}\\displaystyle\\int_{x-ct}^{x+ct}\\!g(s)\\,ds$"}
      ],
      hint:"Verifica i due dati iniziali sulla formula candidata: a $t=0$ deve dare $f$, e la sua derivata temporale a $t=0$ deve dare $g$. Il $1/(2c)$ esce proprio da l&igrave;.",
      sol:"La generale dell'equazione delle onde &egrave; $y=F(x-ct)+G(x+ct)$ (si vede fattorizzando l'operatore come $(\\partial_t-c\\partial_x)(\\partial_t+c\\partial_x)$). Imponendo i dati: $F+G=f$ e $-cF'+cG'=g$, da cui $G-F=\\frac1c\\int^xg+\\mathrm{cost}$; risolvendo si ottiene la formula. Verifica: a $t=0$ i due argomenti coincidono e l'integrale &egrave; vuoto, quindi $y=f$; derivando in $t$, $\\partial_ty=\\frac c2[-f'(x-ct)+f'(x+ct)]+\\frac{1}{2c}\\cdot c\\,[g(x+ct)+g(x-ct)]$, che a $t=0$ vale $g(x)$ — ed &egrave; il fattore $1/(2c)$ a farlo tornare. Lettura strutturale: $y(x,t)$ dipende solo dal segmento $[x-ct,\\,x+ct]$, il <em>dominio di dipendenza</em>, ed &egrave; l'espressione matematica della causalit&agrave; a velocit&agrave; finita.",
      cont:"Confronta col calore" },

    { t:"Qual &egrave; la differenza strutturale fra la formula di d'Alembert e il nucleo del calore?",
      opts:[
        {x:"d'Alembert ha dominio di dipendenza <em>finito</em> $[x-ct,x+ct]$ e non regolarizza (una cuspide nel dato resta cuspide); il nucleo del calore &egrave; strettamente positivo ovunque, quindi il dominio di dipendenza &egrave; tutta la retta e la soluzione &egrave; $C^\\infty$ per ogni $t>0$", c:true},
        {x:"Sono equivalenti: entrambe sono convoluzioni con un nucleo, solo con nuclei diversi"},
        {x:"d'Alembert vale solo per dati a supporto compatto, il nucleo del calore per dati qualunque"},
        {x:"Il nucleo del calore ha dominio di dipendenza finito, quello delle onde infinito"}
      ],
      hint:"Guarda dove i due nuclei si annullano. Uno &egrave; supportato su un segmento, l'altro non si annulla mai.",
      sol:"Il nucleo del calore $\\frac{1}{\\sqrt{4\\pi Dt}}e^{-(x-y)^2/4Dt}$ &egrave; positivo per ogni $y$: un dato a supporto compatto produce, un istante dopo, una soluzione non nulla ovunque. La velocit&agrave; di propagazione &egrave; dunque infinita, e l'equazione del calore &egrave; incompatibile con la relativit&agrave; (&egrave; il difetto che l'equazione dei telegrafisti corregge). In compenso il nucleo &egrave; analitico e la convoluzione regolarizza istantaneamente qualunque dato $L^1$. Per le onde &egrave; l'opposto: il supporto &egrave; il cono di luce, le singolarit&agrave; del dato viaggiano intatte lungo le caratteristiche $x\\pm ct=\\mathrm{cost}$, e non c'&egrave; alcuna regolarizzazione. Terza differenza, che &egrave; la pi&ugrave; profonda: le onde sono reversibili ($t\\to-t$ lascia l'equazione invariata e il problema resta ben posto), il calore no — il calore all'indietro amplifica i modi alti come $e^{+Dk^2|t|}$ e viola la dipendenza continua dai dati." }
  ]},

  /* --------------------------------------------------------------- 15 ----
     Condizioni miste: gli indici semi-interi. */
  { pool:"edp", src:"teoria — Sturm-Liouville, BC miste", steps:[

    { t:"$\\partial_tu=D\\partial_x^2u$ su $[0,L]$ con $u(t,0)=0$ (estremo a temperatura fissa) e $\\partial_xu(t,L)=0$ (estremo isolato). Quali sono le autofunzioni?",
      opts:[
        {x:"$\\sin\\!\\Big[\\dfrac{(2m+1)\\pi x}{2L}\\Big]$ con $m\\ge0$, e $\\lambda_m=-\\Big[\\dfrac{(2m+1)\\pi}{2L}\\Big]^2$", c:true},
        {x:"$\\sin\\!\\big(\\tfrac{m\\pi x}{L}\\big)$ con $m\\ge1$"},
        {x:"$\\cos\\!\\Big[\\dfrac{(2m+1)\\pi x}{2L}\\Big]$ con $m\\ge0$"},
        {x:"$\\sin\\!\\Big[\\dfrac{(2m+1)\\pi x}{L}\\Big]$ con $m\\ge0$"}
      ],
      hint:"La prima condizione sceglie la famiglia, la seconda quantizza. Imponi $\\psi'(L)=0$ su $\\sin(kx)$ e guarda dove si annulla il coseno.",
      sol:"$\\psi(0)=0$ elimina il coseno e lascia $\\psi=\\sin(kx)$; poi $\\psi'(L)=k\\cos(kL)=0$ richiede $kL=\\frac\\pi2+m\\pi$, cio&egrave; $k_m=\\frac{(2m+1)\\pi}{2L}$: da qui gli <em>indici semi-interi</em>, firma inconfondibile delle BC miste. Verifica sul modo fondamentale $m=0$: $\\sin\\!\\big(\\frac{\\pi x}{2L}\\big)$ si annulla in $x=0$ e ha derivata $\\frac{\\pi}{2L}\\cos\\!\\big(\\frac{\\pi}{2}\\big)=0$ in $x=L$. Il quadro completo delle quattro BC: Dirichlet-Dirichlet $\\to\\sin(m\\pi x/L)$, $m\\ge1$; Neumann-Neumann $\\to\\cos(m\\pi x/L)$, $m\\ge0$; miste $\\to$ semi-interi; periodiche $\\to$ seni e coseni insieme, con degenerazione doppia.",
      cont:"Conseguenza sul modo fondamentale" },

    { t:"Rispetto al caso Dirichlet-Dirichlet sullo stesso intervallo, il modo fondamentale:",
      opts:[
        {x:"Ha lunghezza d'onda $4L$ invece di $2L$, e tempo di rilassamento quattro volte pi&ugrave; lungo: $\\tau_0=4L^2/(D\\pi^2)$ invece di $L^2/(D\\pi^2)$", c:true},
        {x:"&Egrave; identico: le BC cambiano le autofunzioni ma non il fondamentale"},
        {x:"Ha lunghezza d'onda $L$ invece di $2L$, e rilassa quattro volte pi&ugrave; in fretta"},
        {x:"Ha la stessa lunghezza d'onda ma tempo di rilassamento doppio"}
      ],
      hint:"$\\lambda=2\\pi/k$ e $\\tau=1/(Dk^2)$: il rapporto fra i due tempi &egrave; il quadrato del rapporto fra i due $k$.",
      sol:"Dirichlet-Dirichlet: $k_0=\\pi/L$, lunghezza d'onda $2\\pi/k_0=2L$, $\\tau_0=1/(Dk_0^2)=L^2/(D\\pi^2)$. Misto: $k_0=\\pi/(2L)$, lunghezza d'onda $4L$, $\\tau_0=4L^2/(D\\pi^2)$. Il fattore 4 &egrave; il quadrato del fattore 2 fra i numeri d'onda, perch&eacute; nel calore il tasso va come $k^2$. Il fatto fisico &egrave; che nella sbarra mista il calore pu&ograve; uscire da un solo estremo, quindi ci mette pi&ugrave; tempo a spegnersi. C'&egrave; un analogo acustico esatto e vale la pena tenerlo in mente per l'orale: una canna d'organo chiusa a un'estremit&agrave; (BC miste) suona un'ottava sotto la canna aperta della stessa lunghezza (BC uguali ai due capi), ed &egrave; lo stesso raddoppio della lunghezza d'onda fondamentale. Un identico raddoppio compare nella buca di potenziale con una parete infinita e una condizione di derivata nulla." }
  ]},

  /* --------------------------------------------------------------- 16 ----
     BC non omogenee: sottrarre la stazionaria. */
  { pool:"edp", src:"metodo — riduzione a BC omogenee", steps:[

    { t:"$\\partial_tu=D\\partial_x^2u$ su $[0,L]$ con $u(t,0)=T_1$ e $u(t,L)=T_2$ costanti non entrambe nulle. Perch&eacute; la separazione diretta fallisce, e come si rimedia?",
      opts:[
        {x:"Fallisce perch&eacute; con BC non omogenee le combinazioni lineari di soluzioni non soddisfano pi&ugrave; le BC, e l'insieme delle soluzioni non &egrave; uno spazio vettoriale. Si sottrae la stazionaria $u_s(x)=T_1+(T_2-T_1)\\frac{x}{L}$: allora $w=u-u_s$ risolve la stessa equazione con BC omogenee", c:true},
        {x:"Fallisce perch&eacute; l'equazione diventa non lineare; si linearizza attorno a $T_1$"},
        {x:"Non fallisce affatto: basta separare e imporre le BC modo per modo"},
        {x:"Fallisce perch&eacute; lo spettro diventa continuo; si passa alla trasformata di Fourier"}
      ],
      hint:"Il punto &egrave; la struttura algebrica, non la difficolt&agrave; del conto: due soluzioni che valgono $T_1$ al bordo, sommate, valgono $2T_1$.",
      sol:"La separazione produce soluzioni della forma $\\varphi\\psi$ e poi le somma: il passaggio &egrave; lecito solo se l'insieme delle funzioni che soddisfano le BC &egrave; chiuso per combinazioni lineari, il che accade se e solo se le BC sono <em>omogenee</em>. Con $u(t,0)=T_1\\ne0$ non lo &egrave;. Il rimedio standard: si cerca la soluzione stazionaria, cio&egrave; $u_s''=0$ con $u_s(0)=T_1$ e $u_s(L)=T_2$, che &egrave; il profilo lineare $u_s(x)=T_1+(T_2-T_1)x/L$; poi $w=u-u_s$ soddisfa $\\partial_tw=D\\partial_x^2w$ (perch&eacute; $\\partial_tu_s=0$ e $\\partial_x^2u_s=0$) con $w(t,0)=w(t,L)=0$, e su $w$ la separazione &egrave; legittima. Il dato iniziale si trasferisce: $w(0,x)=g(x)-u_s(x)$. Lo stesso trucco copre le BC non omogenee <em>dipendenti dal tempo</em>, ma allora $u_s$ dipende da $t$ e nell'equazione per $w$ compare una sorgente $-\\partial_tu_s$, che si tratta con Duhamel.",
      cont:"Fai il conto" },

    { t:"Con $T_1=0$, $T_2=T$ e $u(0,x)=0$ (sbarra fredda, estremo destro portato di colpo a $T$), qual &egrave; la soluzione?",
      opts:[
        {x:"$u(t,x)=\\dfrac{Tx}{L}+\\displaystyle\\sum_{n\\ge1}\\frac{2T(-1)^n}{n\\pi}\\,e^{-Dn^2\\pi^2t/L^2}\\sin\\!\\Big(\\frac{n\\pi x}{L}\\Big)$", c:true},
        {x:"$u(t,x)=\\dfrac{Tx}{L}+\\displaystyle\\sum_{n\\ge1}\\frac{2T(-1)^{n+1}}{n\\pi}\\,e^{-Dn^2\\pi^2t/L^2}\\sin\\!\\Big(\\frac{n\\pi x}{L}\\Big)$"},
        {x:"$u(t,x)=\\displaystyle\\sum_{n\\ge1}\\frac{2T(-1)^n}{n\\pi}\\,e^{-Dn^2\\pi^2t/L^2}\\sin\\!\\Big(\\frac{n\\pi x}{L}\\Big)$, senza termine stazionario"},
        {x:"$u(t,x)=\\dfrac{Tx}{L}\\Big(1-e^{-D\\pi^2t/L^2}\\Big)$"}
      ],
      hint:"Il segno dei coefficienti si controlla verificando che a $t=0$ la somma cancelli esattamente il profilo lineare. Serve la serie notevole di $x$ sui seni.",
      sol:"Qui $u_s=Tx/L$ e $w(0,x)=-Tx/L$, da cui $$b_n=\\frac2L\\int_0^L\\!\\Big(-\\frac{Tx}{L}\\Big)\\sin\\!\\Big(\\frac{n\\pi x}{L}\\Big)dx .$$ Con $\\int_0^Lx\\sin(n\\pi x/L)dx=-\\frac{L^2(-1)^n}{n\\pi}$ (una integrazione per parti; il termine in $\\sin(n\\pi)$ &egrave; nullo) si ottiene $b_n=\\frac{2T(-1)^n}{n\\pi}$, e il modo $n$ decade con $e^{-D(n\\pi/L)^2t}$. Verifica del segno a $t=0$: si usa la serie notevole $\\sum_{n\\ge1}\\frac{(-1)^{n+1}}{n}\\sin\\!\\big(\\frac{n\\pi x}{L}\\big)=\\frac{\\pi x}{2L}$ per $0<x<L$, quindi $\\sum_n\\frac{2T(-1)^n}{n\\pi}\\sin(\\cdot)=-\\frac{2T}{\\pi}\\cdot\\frac{\\pi x}{2L}=-\\frac{Tx}{L}$, che cancella esattamente il termine stazionario e d&agrave; $u(0,x)=0$: torna. Col segno opposto si otterrebbe $2Tx/L$, assurdo. Per $t\\to\\infty$ resta il profilo lineare $Tx/L$: &egrave; il regime stazionario, e il tempo per raggiungerlo &egrave; governato dal modo pi&ugrave; lento, $\\tau_1=L^2/(D\\pi^2)$." }
  ]},

  /* --------------------------------------------------------------- 17 ----
     Corda pizzicata: l'altra meta' del 20262001, e il ponte con d'Alembert. */
  { pool:"edp", src:"variante di 20262001 Es.4", steps:[

    { t:"Stessa corda dell'appello 20/01/2026 (estremi fissi, lunghezza $L$), ma con i dati scambiati: $y(x,0)=f(x)$ e $\\partial_ty|_{t=0}=0$ — corda pizzicata e lasciata andare. Quale forma prende la soluzione?",
      opts:[
        {x:"$y=\\displaystyle\\sum_{n\\ge1}a_n\\cos\\!\\Big(\\frac{n\\pi ct}{L}\\Big)\\sin\\!\\Big(\\frac{n\\pi x}{L}\\Big)$ con $a_n=\\frac2L\\int_0^L\\!f(x)\\sin\\!\\Big(\\frac{n\\pi x}{L}\\Big)dx$", c:true},
        {x:"$y=\\displaystyle\\sum_{n\\ge1}b_n\\sin\\!\\Big(\\frac{n\\pi ct}{L}\\Big)\\sin\\!\\Big(\\frac{n\\pi x}{L}\\Big)$ con $b_n\\frac{n\\pi c}{L}=\\frac2L\\int_0^L\\!f\\sin$"},
        {x:"$y=\\displaystyle\\sum_{n\\ge1}a_n\\cos\\!\\Big(\\frac{n\\pi ct}{L}\\Big)\\cos\\!\\Big(\\frac{n\\pi x}{L}\\Big)$"},
        {x:"$y=\\displaystyle\\sum_{n\\ge1}a_n\\,e^{-n\\pi ct/L}\\sin\\!\\Big(\\frac{n\\pi x}{L}\\Big)$"}
      ],
      hint:"Le BC non sono cambiate, quindi la famiglia spaziale &egrave; la stessa: cambia solo quale delle due funzioni temporali sopravvive, e quale integrale d&agrave; i coefficienti.",
      sol:"Le condizioni al bordo sono identiche, quindi la base spaziale resta $\\sin(n\\pi x/L)$. Nella parte temporale, $\\partial_ty|_{t=0}=\\sum_n b_n\\omega_n\\sin(n\\pi x/L)=0$ impone ora $b_n=0$: sopravvivono i coseni. I coefficienti si leggono direttamente dalla posizione iniziale, senza dividere per $\\omega_n$ — ed &egrave; la differenza pratica pi&ugrave; importante rispetto al caso del dato di velocit&agrave;: l&igrave; la potenza di $n$ al denominatore sale di uno, qui no. Regola generale: <em>il dato di posizione va sui coseni temporali e non si divide per $\\omega_n$; il dato di velocit&agrave; va sui seni temporali e si divide per $\\omega_n$</em>. Se il testo d&agrave; entrambi i dati non nulli, si sommano i due contributi, perch&eacute; l'equazione &egrave; lineare.",
      cont:"Il ponte con d'Alembert" },

    { t:"La stessa soluzione si riscrive come somma di due onde progressive. Come?",
      opts:[
        {x:"$y=\\tfrac12\\big[\\tilde f(x-ct)+\\tilde f(x+ct)\\big]$, dove $\\tilde f$ &egrave; il prolungamento <em>dispari</em> e $2L$-periodico di $f$", c:true},
        {x:"$y=\\tfrac12\\big[\\tilde f(x-ct)+\\tilde f(x+ct)\\big]$, dove $\\tilde f$ &egrave; il prolungamento <em>pari</em> e $2L$-periodico di $f$"},
        {x:"$y=\\tilde f(x-ct)+\\tilde f(x+ct)$, con $\\tilde f$ dispari e $2L$-periodico"},
        {x:"Non si riscrive: su dominio limitato d'Alembert non vale"}
      ],
      hint:"Applica la formula di prostaferesi $\\cos A\\,\\sin B=\\tfrac12[\\sin(B+A)+\\sin(B-A)]$ a ogni termine della serie e guarda che cosa resta.",
      sol:"Con $\\omega_n=n\\pi c/L$, l'identit&agrave; $\\cos(\\omega_nt)\\sin\\!\\big(\\tfrac{n\\pi x}{L}\\big)=\\tfrac12\\Big[\\sin\\!\\big(\\tfrac{n\\pi(x+ct)}{L}\\big)+\\sin\\!\\big(\\tfrac{n\\pi(x-ct)}{L}\\big)\\Big]$ trasforma la serie in $$y=\\tfrac12\\Big[\\tilde f(x+ct)+\\tilde f(x-ct)\\Big],\\qquad \\tilde f(\\xi)\\equiv\\sum_{n\\ge1}a_n\\sin\\!\\Big(\\frac{n\\pi\\xi}{L}\\Big),$$ e la funzione a destra &egrave; per costruzione il prolungamento dispari e $2L$-periodico di $f$: dispari perch&eacute; &egrave; una serie di soli seni, $2L$-periodica perch&eacute; ogni seno lo &egrave;. &Egrave; esattamente la formula di d'Alembert con $g=0$, applicata al dato prolungato. La lettura fisica &egrave; il metodo delle immagini: la corda finita si comporta come una corda infinita su cui viaggiano, oltre all'onda vera, le sue immagini riflesse con segno invertito agli estremi; l'inversione di segno &egrave; la disparit&agrave; del prolungamento, ed &egrave; ci&ograve; che tiene $y=0$ nei punti fissi. Con estremi liberi (Neumann) il prolungamento sarebbe pari e la riflessione avverrebbe senza cambio di segno." }
  ]},

  /* --------------------------------------------------------------- 18 ----
     Laplace su rettangolo: separazione 2D e mal-posizione del Cauchy. */
  { pool:"edp", src:"Set 4 - Differential equations (separazione 2D, Laplace)", steps:[

    { t:"Sia $\\Delta u=\\partial_x^2u+\\partial_y^2u=0$ sul rettangolo $[0,a]\\times[0,b]$, con $u=0$ sui tre lati $x=0$, $x=a$, $y=0$, e $u(x,b)=F(x)$. Quale forma ha la soluzione?",
      opts:[
        {x:"$u=\\displaystyle\\sum_{n\\ge1}c_n\\,\\sinh\\!\\Big(\\frac{n\\pi y}{a}\\Big)\\sin\\!\\Big(\\frac{n\\pi x}{a}\\Big)$, con $c_n\\sinh\\!\\big(\\tfrac{n\\pi b}{a}\\big)=\\frac2a\\int_0^a\\!F(x)\\sin\\!\\big(\\tfrac{n\\pi x}{a}\\big)dx$", c:true},
        {x:"$u=\\displaystyle\\sum_{n\\ge1}c_n\\,\\sin\\!\\Big(\\frac{n\\pi y}{a}\\Big)\\sin\\!\\Big(\\frac{n\\pi x}{a}\\Big)$"},
        {x:"$u=\\displaystyle\\sum_{n\\ge1}c_n\\,e^{-n\\pi y/a}\\sin\\!\\Big(\\frac{n\\pi x}{a}\\Big)$"},
        {x:"$u=\\displaystyle\\sum_{n\\ge1}c_n\\,\\cosh\\!\\Big(\\frac{n\\pi y}{a}\\Big)\\sin\\!\\Big(\\frac{n\\pi x}{a}\\Big)$"}
      ],
      hint:"Nell'equazione di Laplace la costante di separazione compare con segni <em>opposti</em> nelle due variabili: se una direzione oscilla, l'altra non pu&ograve; oscillare. E la condizione $u(x,0)=0$ sceglie fra $\\sinh$ e $\\cosh$.",
      sol:"Con $u=X(x)Y(y)$: $\\frac{X''}{X}=-\\frac{Y''}{Y}=-k^2$. Il segno opposto &egrave; la firma delle equazioni ellittiche: le tre BC omogenee stanno sui lati verticali e su quello basso, quindi &egrave; la direzione $x$ a doversi quantizzare, $X=\\sin(n\\pi x/a)$ con $k_n=n\\pi/a$, e allora $Y''=k_n^2Y$ ha soluzioni <em>iperboliche</em> $\\sinh$ e $\\cosh$, non trigonometriche. La condizione $u(x,0)=0$ elimina il $\\cosh$ e lascia $\\sinh(n\\pi y/a)$; l'esponenziale puro $e^{-n\\pi y/a}$ sarebbe la scelta giusta su una striscia semi-infinita $y>0$ con decadimento a infinito, non su un rettangolo con $u=0$ in $y=0$. Il coefficiente si fissa proiettando il dato sul lato alto: $c_n\\sinh(n\\pi b/a)$ &egrave; il coefficiente di Fourier di $F$, e la divisione per $\\sinh(n\\pi b/a)$ (che cresce esponenzialmente in $n$) rende la soluzione all'interno straordinariamente liscia, come dev'essere per una funzione armonica.",
      cont:"Perch&eacute; non c'&egrave; alcun dato iniziale" },

    { t:"Perch&eacute; per Laplace non si assegnano un valore <em>e</em> una derivata normale sullo stesso lato, come si farebbe con le onde?",
      opts:[
        {x:"Perch&eacute; il problema di Cauchy per Laplace &egrave; <em>mal posto</em> (Hadamard): la soluzione non dipende con continuit&agrave; dai dati. Laplace &egrave; un problema al contorno — un dato per ogni punto dell'<em>intero</em> bordo — non un problema a valori iniziali", c:true},
        {x:"Perch&eacute; il problema sarebbe sovradeterminato: due dati per un'equazione del secondo ordine sono uno di troppo"},
        {x:"Perch&eacute; la derivata normale non &egrave; definita sui vertici del rettangolo"},
        {x:"Non c'&egrave; alcun motivo: si pu&ograve; fare, ed &egrave; il problema di Robin"}
      ],
      hint:"Costruisci una successione di dati che tende a zero mentre le soluzioni corrispondenti esplodono: basta un seno molto oscillante con ampiezza piccola.",
      sol:"Controesempio di Hadamard, che vale la pena saper esibire: si prenda $u(x,0)=0$ e $\\partial_yu(x,0)=\\tfrac1n\\sin(nx)$. La soluzione &egrave; $u=\\tfrac{1}{n^2}\\sin(nx)\\sinh(ny)$. Il dato tende uniformemente a zero come $1/n$, ma per ogni $y>0$ fissato la soluzione diverge come $e^{ny}/n^2$: la dipendenza continua dai dati &egrave; violata, e il problema &egrave; mal posto nel senso di Hadamard. La ragione strutturale &egrave; che nelle equazioni ellittiche non esistono direzioni caratteristiche reali — non c'&egrave; alcun 'tempo' lungo cui propagare — e la classificazione parabolica/iperbolica/ellittica non &egrave; una tassonomia decorativa: dice quale <em>tipo</em> di problema &egrave; ben posto. Iperbolico $\\to$ Cauchy (dato e derivata a $t=0$); parabolico $\\to$ dato a $t=0$ pi&ugrave; BC laterali; ellittico $\\to$ un solo dato su tutto il bordo, Dirichlet oppure Neumann oppure Robin, mai Cauchy." }
  ]},

  /* --------------------------------------------------------------- 19 ----
     Sorgente distribuita: Duhamel e la risonanza. */
  { pool:"edp", src:"metodo — Duhamel", steps:[

    { t:"Sia $\\partial_tu=D\\partial_x^2u+S(t,x)$ su $[0,L]$ con Dirichlet omogenee e $u(0,x)=0$. Sviluppando $u=\\sum_nu_n(t)\\sin\\!\\big(\\tfrac{n\\pi x}{L}\\big)$ e $S=\\sum_nS_n(t)\\sin\\!\\big(\\tfrac{n\\pi x}{L}\\big)$, quanto vale $u_n(t)$?",
      opts:[
        {x:"$u_n(t)=\\displaystyle\\int_0^t\\!ds\\;e^{-Dk_n^2(t-s)}S_n(s)$, con $k_n=\\tfrac{n\\pi}{L}$", c:true},
        {x:"$u_n(t)=e^{-Dk_n^2t}\\displaystyle\\int_0^t\\!ds\\;S_n(s)$"},
        {x:"$u_n(t)=\\dfrac{S_n(t)}{Dk_n^2}\\big(1-e^{-Dk_n^2t}\\big)$ per ogni $S_n$"},
        {x:"$u_n(t)=\\displaystyle\\int_0^t\\!ds\\;e^{-Dk_n^2 s}S_n(s)$"}
      ],
      hint:"Ogni modo obbedisce a una ODE lineare del primo ordine non omogenea: la formula di variazione delle costanti pesa la sorgente con il propagatore del <em>tempo trascorso</em>, non del tempo assoluto.",
      sol:"Proiettando l'equazione sul modo $n$ si ottiene $\\dot u_n=-Dk_n^2u_n+S_n(t)$, ODE lineare del primo ordine. Con fattore integrante $e^{Dk_n^2t}$: $\\frac{d}{dt}\\big(e^{Dk_n^2t}u_n\\big)=e^{Dk_n^2t}S_n(t)$, e integrando da $0$ a $t$ con $u_n(0)=0$, $$u_n(t)=\\int_0^t e^{-Dk_n^2(t-s)}S_n(s)\\,ds .$$ &Egrave; il <em>principio di Duhamel</em>: la soluzione forzata &egrave; la sovrapposizione delle risposte libere a impulsi accesi a ogni istante $s$, propagate per il tempo residuo $t-s$. Il nucleo dipende da $t-s$ e non da $s$ o da $t$ separatamente perch&eacute; l'operatore ha coefficienti indipendenti dal tempo: se $D$ dipendesse da $t$ il nucleo diventerebbe $\\exp[-k_n^2\\int_s^tD(\\sigma)d\\sigma]$. Se invece la sorgente &egrave; costante, $S_n(t)=S_n$, l'integrale si fa e d&agrave; proprio $\\frac{S_n}{Dk_n^2}(1-e^{-Dk_n^2t})$: quella formula &egrave; corretta, ma solo in quel caso.",
      cont:"E per le onde?" },

    { t:"Per le onde, $\\partial_t^2y=c^2\\partial_x^2y+S$, il modo $n$ obbedisce a $\\ddot y_n+\\omega_n^2y_n=S_n(t)$. Che cosa succede se $S_n(t)=\\sin(\\omega_nt)$, cio&egrave; se la sorgente &egrave; in risonanza col modo?",
      opts:[
        {x:"L'ampiezza cresce linearmente in $t$: la soluzione particolare &egrave; $-\\dfrac{t}{2\\omega_n}\\cos(\\omega_nt)$, e la serie non converge pi&ugrave; a un moto limitato", c:true},
        {x:"L'ampiezza cresce esponenzialmente, come $e^{\\omega_nt}$"},
        {x:"Non succede nulla di speciale: la soluzione resta limitata perch&eacute; l'equazione &egrave; conservativa"},
        {x:"L'ampiezza satura al valore $S_n/\\omega_n^2$, come nel caso del calore"}
      ],
      hint:"Prova $y_n=\\alpha\\,t\\cos(\\omega_nt)$ e determina $\\alpha$ sostituendo: la crescita &egrave; algebrica, non esponenziale.",
      sol:"Con $y_n=-\\frac{t}{2\\omega}\\cos(\\omega t)$ si ha $\\dot y_n=-\\frac{1}{2\\omega}\\cos\\omega t+\\frac t2\\sin\\omega t$ e $\\ddot y_n=\\sin\\omega t+\\frac{t\\omega}{2}\\cos\\omega t$; sommando $\\omega^2y_n=-\\frac{t\\omega}{2}\\cos\\omega t$ resta esattamente $\\sin(\\omega t)$: la soluzione particolare &egrave; verificata. La crescita &egrave; <em>lineare</em> in $t$, non esponenziale — l'errore comune &egrave; immaginare un'esplosione esponenziale, che nasce invece da autovalori con parte reale positiva, non dalla risonanza. La differenza col calore &egrave; strutturale ed &egrave; il punto da portare all'orale: il propagatore del calore $e^{-Dk_n^2(t-s)}$ dimentica il passato, quindi nessuna sorgente limitata pu&ograve; accumularsi e la risposta satura; il propagatore delle onde &egrave; oscillante e di modulo costante, quindi una forzante in fase si somma coerentemente per sempre. In una corda reale la risonanza &egrave; limitata dallo smorzamento, che aggiunge un termine $\\gamma\\dot y_n$ e sostituisce la crescita lineare con una saturazione a $S_n/(\\gamma\\omega_n)$." }
  ]},

  /* --------------------------------------------------------------- 20 ----
     Schrodinger libera, rotazione di Wick, aggancio alla meccanica statistica. */
  { pool:"edp", src:"teoria — propagatori, cap. 20", steps:[

    { t:"Sia $i\\partial_t\\psi=-\\tfrac12\\partial_x^2\\psi$ su tutta la retta. Qual &egrave; il propagatore, cio&egrave; la soluzione con $\\psi(0,x)=\\delta(x)$?",
      opts:[
        {x:"$K(t,x)=\\dfrac{1}{\\sqrt{2\\pi i t}}\\,e^{\\,i x^2/(2t)}$", c:true},
        {x:"$K(t,x)=\\dfrac{1}{\\sqrt{2\\pi t}}\\,e^{-x^2/(2t)}$"},
        {x:"$K(t,x)=\\dfrac{1}{\\sqrt{2\\pi i t}}\\,e^{-x^2/(2t)}$"},
        {x:"$K(t,x)=\\dfrac{1}{\\sqrt{4\\pi i t}}\\,e^{\\,i x^2/(4t)}$"}
      ],
      hint:"&Egrave; lo stesso conto del nucleo del calore, ma con $D$ immaginario. L'integrale gaussiano $\\int e^{-\\alpha k^2+ikx}dk=\\sqrt{\\pi/\\alpha}\\,e^{-x^2/4\\alpha}$ vale anche per $\\alpha$ complesso con parte reale non negativa.",
      sol:"In Fourier: $i\\partial_t\\hat\\psi=\\tfrac12k^2\\hat\\psi$, dunque $\\hat K(t,k)=e^{-ik^2t/2}$. Antitrasformando con $\\alpha=it/2$: $$K=\\frac{1}{2\\pi}\\int\\! e^{-\\alpha k^2+ikx}dk=\\frac{1}{2\\pi}\\sqrt{\\frac{\\pi}{\\alpha}}e^{-x^2/(4\\alpha)}=\\frac{1}{2\\pi}\\sqrt{\\frac{2\\pi}{it}}\\,e^{ix^2/(2t)}=\\frac{1}{\\sqrt{2\\pi i t}}e^{ix^2/(2t)} .$$ Differenza cruciale rispetto al calore: qui $|K|=1/\\sqrt{2\\pi t}$ non decade in $x$, cio&egrave; il nucleo non &egrave; concentrato ma oscilla su tutta la retta con fase stazionaria; e $\\int|K|^2dx$ non converge, come dev'essere per un dato $\\delta$ non normalizzabile. La norma $L^2$ del pacchetto, invece, si conserva esattamente (unitariet&agrave;), a differenza del calore dove decade.",
      cont:"La rotazione di Wick" },

    { t:"Sostituendo $t=-i\\tau$ nel propagatore di Schr&ouml;dinger si ottiene il nucleo del calore. Perch&eacute; questa non &egrave; una curiosit&agrave; formale?",
      opts:[
        {x:"Perch&eacute; l'operatore di evoluzione $e^{-iHt}$ diventa $e^{-\\tau H}$, che per $\\tau=\\beta$ &egrave; l'operatore di Gibbs: la funzione di partizione $Z=\\mathrm{Tr}\\,e^{-\\beta H}$ &egrave; letteralmente un propagatore in tempo immaginario, ed &egrave; il ponte fra meccanica quantistica e meccanica statistica", c:true},
        {x:"Perch&eacute; permette di calcolare integrali reali con metodi complessi, come nel lemma di Jordan"},
        {x:"Perch&eacute; dimostra che l'equazione del calore &egrave; reversibile, come Schr&ouml;dinger"},
        {x:"&Egrave; una curiosit&agrave; formale: la sostituzione non ha alcun contenuto fisico, perch&eacute; il tempo &egrave; reale"}
      ],
      hint:"Guarda che cosa diventa l'esponente dell'operatore di evoluzione quando il tempo diventa immaginario, e con che cosa coincide se il tempo immaginario vale $\\beta=1/k_BT$.",
      sol:"Con $t=-i\\tau$: $\\frac{1}{\\sqrt{2\\pi it}}e^{ix^2/2t}=\\frac{1}{\\sqrt{2\\pi\\tau}}e^{-x^2/(2\\tau)}$, che &egrave; il nucleo del calore con $D=1/2$ (infatti $\\frac{1}{\\sqrt{4\\pi D\\tau}}e^{-x^2/4D\\tau}$ con $D=1/2$ d&agrave; proprio quello). A livello di operatori, $e^{-iHt}\\to e^{-\\tau H}$, e ponendo $\\tau=\\beta=1/k_BT$ si ottiene la matrice densit&agrave; non normalizzata: la traccia &egrave; la funzione di partizione. Da qui il path integral euclideo, in cui l'ampiezza di transizione a tempo immaginario &egrave; una somma su cammini pesata da $e^{-S_E}$ e la meccanica quantistica in $d$ dimensioni si mappa sulla meccanica statistica classica in $d+1$. &Egrave; l'apparato che regge la decoerenza e le questioni di termalizzazione: le PDE risolte per separazione e i propagatori gaussiani di questo corso sono lo stesso oggetto, letti in un altro riferimento. Attenzione a non trarne la conclusione sbagliata: la rotazione di Wick non rende reversibile il calore, perch&eacute; la continuazione analitica &egrave; ben definita in una sola direzione — verso $\\mathrm{Re}\\,\\tau>0$." }
  ]},

  /* --------------------------------------------------------------- 21 ----
     Modus operandi: quale trasformata, su quale variabile. */
  { pool:"edp", src:"modus operandi", steps:[

    { t:"Quando conviene trasformare (Fourier) invece di separare, e soprattutto: su quale delle due variabili si trasforma?",
      opts:[
        {x:"Su quella il cui dominio &egrave; illimitato o periodico <em>e</em> in cui i coefficienti dell'operatore sono costanti: quella variabile diventa un parametro algebrico e la PDE si riduce a una ODE nell'altra", c:true},
        {x:"Sempre sul tempo, perch&eacute; l'obiettivo &egrave; eliminare le derivate temporali"},
        {x:"Sempre sullo spazio, perch&eacute; le condizioni al bordo sono spaziali"},
        {x:"Su quella in cui compare la derivata di ordine pi&ugrave; alto"}
      ],
      hint:"La trasformata converte $\\partial$ in moltiplicazione solo se il coefficiente davanti non dipende dalla variabile che stai trasformando. Rileggi le soluzioni dei sei appelli con questo criterio.",
      sol:"La trasformata di Fourier diagonalizza $\\partial_x$ perch&eacute; $e^{ikx}$ &egrave; autofunzione delle traslazioni: funziona quando l'operatore commuta con le traslazioni nella variabile trasformata, cio&egrave; quando i coefficienti non dipendono da quella variabile e il dominio &egrave; $\\mathbb{R}$ (spettro continuo) o un cerchio (spettro discreto, serie di Fourier). Il criterio si vede all'opera nei sei appelli: nel 08/07/2025 e nel 23/06/2025 il dominio spaziale &egrave; $\\mathbb{R}$ (o riducibile per estensione) e i coefficienti sono costanti in $x$ — si trasforma in $x$ e resta una ODE in $t$, anche col coefficiente $\\sin t$ che dipende dal tempo, perch&eacute; il tempo l&igrave; &egrave; solo un parametro. Nel 12/02/2026 e nel 20/01/2026 il dominio spaziale &egrave; limitato con BC omogenee: si separa e si ottiene una serie. Nel 09/09/2025 il dominio &egrave; $\\mathbb{R}$ ma compare $x^2u$, che rompe l'invarianza per traslazione: la trasformata non aiuta in $x$, e si usa la base di Hermite.",
      cont:"Il caso limite" },

    { t:"Nell'appello 12/02/2026 il coefficiente &egrave; $t^2$: perch&eacute; non conviene trasformare rispetto a $t$?",
      opts:[
        {x:"Perch&eacute; il coefficiente dipende proprio da $t$, quindi in $\\omega$ diventerebbe $-\\partial_\\omega^2$ e l'equazione resterebbe differenziale invece di diventare algebrica; inoltre il dominio &egrave; $t\\ge0$ con dato in $t=0$, cio&egrave; una semiretta", c:true},
        {x:"Perch&eacute; la trasformata di Fourier non si applica mai al tempo"},
        {x:"Perch&eacute; il dato iniziale non &egrave; a quadrato sommabile"},
        {x:"Perch&eacute; l'equazione &egrave; del primo ordine in $t$, e Fourier richiede il secondo ordine"}
      ],
      hint:"Che cosa diventa il fattore $t^2$ nello spazio delle frequenze? E che tipo di dominio &egrave; $t\\ge0$?",
      sol:"Moltiplicare per $t^2$ diventa, in trasformata, $-\\partial_\\omega^2$: si scambierebbe una PDE con un'altra PDE, senza guadagno. In generale la trasformata paga solo dove i coefficienti sono costanti nella variabile trasformata. Il secondo ostacolo &egrave; il dominio: $t\\ge0$ &egrave; una semiretta con un dato assegnato all'estremo, che &egrave; la situazione della trasformata di <em>Laplace</em>, non di Fourier (e infatti Laplace incorpora automaticamente i dati iniziali nel termine $sF(s)-f(0)$). La soluzione ufficiale del 09/09/2025 fa vedere il prezzo di forzare Fourier nel tempo: per usarla estende prima il dominio temporale a tutto $\\mathbb{R}$, e il risultato vive solo nello spazio delle distribuzioni, con $\\hat u\\propto\\delta(\\omega\\pm\\sqrt{2n+1})$ — corretto, ma pi&ugrave; laborioso della separazione diretta. Morale operativa: la trasformata &egrave; uno strumento, non un riflesso." }
  ]},

  /* --------------------------------------------------------------- 22 ----
     Dato incompatibile con le BC: buona posizione, Dirichlet puntuale, Gibbs. */
  { pool:"edp", src:"teoria — compatibilit&agrave; dato/BC", steps:[

    { t:"Calore su $[0,\\pi]$ con $u(t,0)=u(t,\\pi)=0$ e dato iniziale $u(0,x)=1$, costante. Il dato non si annulla agli estremi: il problema &egrave; mal posto?",
      opts:[
        {x:"No, &egrave; ben posto: l'incompatibilit&agrave; sta su un insieme di misura nulla, la serie converge in $L^2$ e per ogni $t>0$ la soluzione &egrave; $C^\\infty$ e rispetta le BC. La discontinuit&agrave; vive solo nell'angolo $t=0$, $x\\in\\{0,\\pi\\}$", c:true},
        {x:"S&igrave;: il dato dev'essere compatibile con le BC, altrimenti la soluzione non esiste"},
        {x:"S&igrave;, ma si aggiusta modificando il dato in un intorno degli estremi"},
        {x:"No, ma la soluzione esiste solo per $t$ maggiore di un certo $t_0>0$"}
      ],
      hint:"La regolarizzazione parabolica &egrave; istantanea: chiediti che cosa vale $u(t,0)$ per $t>0$ nella serie di seni, indipendentemente dal dato.",
      sol:"La serie di seni $u(t,x)=\\sum_nb_ne^{-Dn^2t}\\sin(nx)$ soddisfa $u(t,0)=u(t,\\pi)=0$ <em>termine per termine</em>, quindi per ogni $t>0$ le BC sono rispettate qualunque siano i $b_n$. La convergenza in $L^2$ del dato basta per la buona posizione, e il fattore $e^{-Dn^2t}$ rende la serie e tutte le sue derivate assolutamente convergenti per $t>0$: la soluzione &egrave; $C^\\infty$ nell'aperto. La singolarit&agrave; &egrave; confinata negli angoli $(t,x)=(0,0)$ e $(0,\\pi)$ del dominio spazio-temporale, dove il limite dipende dalla direzione: lungo $t=0$ la soluzione tende a $1$, lungo $x=0$ tende a $0$. I coefficienti: $b_n=\\frac2\\pi\\int_0^\\pi\\sin(nx)dx=\\frac{2}{\\pi}\\frac{1-(-1)^n}{n}$, cio&egrave; $\\frac{4}{\\pi n}$ per $n$ dispari e $0$ per $n$ pari — la classica onda quadra. La lettura fisica &egrave; una sbarra a temperatura uniforme immersa di colpo in due bagni a zero.",
      cont:"E il fenomeno di Gibbs" },

    { t:"A $t=0$ la serie di soli seni di una costante manifesta il fenomeno di Gibbs. Che cosa succede per $t>0$?",
      opts:[
        {x:"Sparisce: a $t=0$ le somme parziali sovraoscillano di circa il 9% del salto e la serie converge a $0$ negli estremi (media del salto), ma il fattore $e^{-Dn^2t}$ smorza i modi alti pi&ugrave; che esponenzialmente e le sovraoscillazioni si spengono immediatamente", c:true},
        {x:"Persiste identico per ogni $t$, perch&eacute; Gibbs &egrave; una propriet&agrave; della base e non del dato"},
        {x:"Si amplifica, perch&eacute; i modi alti sono quelli che portano l'oscillazione"},
        {x:"Resta ma si sposta verso il centro dell'intervallo"}
      ],
      hint:"Gibbs vive nei modi alti; il calore li uccide come $e^{-Dn^2t}$. Chiediti anche a quale valore converge la serie <em>esattamente</em> negli estremi a $t=0$.",
      sol:"Il fenomeno di Gibbs &egrave; una propriet&agrave; delle somme parziali in presenza di un salto: l'overshoot vale circa il 9% dell'ampiezza del salto e non si attenua all'aumentare del numero di termini, si limita a stringersi attorno alla discontinuit&agrave;. Il risultato invocato per il valore nel punto di salto &egrave; il <em>teorema di convergenza puntuale di Dirichlet</em>: la serie converge alla semisomma dei limiti destro e sinistro, che qui vale $\\frac{1+(-1)}{2}=0$ agli estremi, perch&eacute; il prolungamento dispari salta da $-1$ a $+1$ attraverso l'origine. Per $t>0$ il quadro cambia radicalmente: il coefficiente effettivo del modo $n$ diventa $\\frac{4}{\\pi n}e^{-Dn^2t}$, che decade come una gaussiana in $n$, e la serie &egrave; dominata da $\\sum n^{-1}e^{-Dn^2t}<\\infty$ con tutte le derivate. Gibbs &egrave; un fenomeno dei modi alti, e il calore &egrave; un filtro passa-basso: si spengono a vicenda. Con l'equazione delle onde, invece, i modi alti non decadono e la discontinuit&agrave; sopravvive, viaggiando lungo le caratteristiche." }
  ]},

  /* ================================================================= *
   *  LOTTO 2 — unita' 23-44.  Copre i vuoti lasciati dal lotto 1:
   *  Green ritardate (calore e Schrodinger), cambi di variabile
   *  (riferimento mobile, sostituzione esponenziale), coordinate polari,
   *  Laplace su rettangolo, separazione 2D, mal-posizione, caratteristiche
   *  e quasi-lineari.  Le idee di variante vengono in parte da MIT 18.303
   *  (sei problem set con soluzioni) e da HELM Workbook 25: sono IDEE,
   *  non testi — ogni esercizio e' generato nuovo, e il campo `src` lo
   *  dichiara.  Conti ricalcolati e dichiarati nelle `sol`.
   * ================================================================= */

  /* --------------------------------------------------------------- 23 ----
     Funzione di Green ritardata del calore: theta(t) e causalita'. */
  { pool:"edp", src:"Green ritardata del calore &middot; da MIT 18.303 PS6 &middot; manuale", steps:[

    { t:"Si cerca la funzione di Green <em>ritardata</em> del calore su tutta la retta: $\\big(\\partial_t-D\\partial_x^2\\big)G(t,x)=\\delta(t)\\,\\delta(x)$ con $G\\equiv0$ per $t<0$. Quale espressione &egrave;?",
      opts:[
        {x:"$G(t,x)=\\theta(t)\\,\\dfrac{1}{\\sqrt{4\\pi Dt}}\\,e^{-x^2/(4Dt)}$", c:true},
        {x:"$G(t,x)=\\dfrac{1}{\\sqrt{4\\pi Dt}}\\,e^{-x^2/(4Dt)}$, senza alcun fattore $\\theta$"},
        {x:"$G(t,x)=\\theta(-t)\\,\\dfrac{1}{\\sqrt{4\\pi D|t|}}\\,e^{-x^2/(4D|t|)}$"},
        {x:"$G(t,x)=\\theta(t)\\,\\dfrac{1}{\\sqrt{4\\pi Dt}}\\,e^{-x^2/(4Dt)}\\,e^{-Dt}$"}
      ],
      hint:"&Egrave; il nucleo del calore moltiplicato per qualcosa che vale zero prima dell'accensione. Chiediti anche se, senza quel fattore, l'espressione avrebbe senso per $t<0$.",
      sol:"La Green ritardata &egrave; il nucleo del calore troncato dal gradino: $G(t,x)=\\theta(t)K_t(x)$ con $K_t(x)=\\frac{1}{\\sqrt{4\\pi Dt}}e^{-x^2/(4Dt)}$. Il fattore $\\theta(t)$ non &egrave; cosmetico e fa tre lavori distinti. Primo, rende $G$ definita ovunque: per $t<0$ il nucleo scritto senza $\\theta$ non &egrave; nemmeno una funzione ragionevole, perch&eacute; $e^{-x^2/(4Dt)}$ con $t<0$ diverge in $|x|$. Secondo, seleziona la soluzione <em>causale</em>: nulla accade prima dell'impulso. Terzo, ed &egrave; il punto tecnico, &egrave; proprio la sua derivata a generare il $\\delta(t)$ al membro destro. La versione con $\\theta(-t)$ &egrave; la Green <em>avanzata</em>: risolve la stessa equazione con la condizione imposta a tempi futuri, ed &egrave; la scelta giusta in altri contesti (per esempio nei problemi aggiunti), ma per il calore non ha senso fisico perch&eacute; l'equazione all'indietro &egrave; mal posta.",
      cont:"Verifica che produca la delta" },

    { t:"Verificando per sostituzione, da dove nasce esattamente il $\\delta(t)\\delta(x)$ al membro destro?",
      opts:[
        {x:"Da $\\partial_t\\big[\\theta(t)K_t(x)\\big]=\\delta(t)K_t(x)+\\theta(t)\\partial_tK_t$: il primo termine vale $\\delta(t)\\delta(x)$ perch&eacute; $K_t\\to\\delta$ per $t\\to0^+$, il secondo cancella $D\\partial_x^2G$ perch&eacute; $K$ risolve gi&agrave; l'omogenea", c:true},
        {x:"Da $\\partial_x^2$ applicato alla gaussiana, che nel limite $t\\to0$ produce una delta in $x$"},
        {x:"Dal prefattore $1/\\sqrt{4\\pi Dt}$, che diverge per $t\\to0^+$"},
        {x:"Non nasce da nessun termine: $G$ risolve l'equazione omogenea e la delta si impone a mano come condizione iniziale"}
      ],
      hint:"L'unica derivata che pu&ograve; produrre una distribuzione singolare &egrave; quella che cade sul gradino. Poi serve un fatto sul nucleo del calore a tempo piccolo.",
      sol:"Regola di Leibniz nel senso delle distribuzioni: $\\partial_t(\\theta K)=\\theta'(t)K_t+\\theta(t)\\partial_tK_t$, e $\\theta'=\\delta$. Nel termine $\\delta(t)K_t(x)$ il nucleo va valutato a $t=0$, dove $K_t\\to\\delta(x)$ in senso distribuzionale — &egrave; la propriet&agrave; di identit&agrave; approssimata del nucleo del calore, quella che segue dalla normalizzazione $\\int K_t\\,dx=1$ per ogni $t$ e dalla concentrazione $\\sigma^2=2Dt\\to0$. Restano poi $\\theta(t)\\big[\\partial_tK_t-D\\partial_x^2K_t\\big]=0$, perch&eacute; il nucleo risolve l'equazione omogenea per $t>0$. Totale: $\\delta(t)\\delta(x)$, come richiesto. Il messaggio generale, che vale per ogni operatore di evoluzione del primo ordine in $t$: <em>la Green ritardata &egrave; il propagatore moltiplicato per $\\theta(t)$, e il salto del gradino &egrave; ci&ograve; che fabbrica la sorgente istantanea</em>. Per un operatore del secondo ordine in $t$ (le onde) il conto &egrave; analogo ma la condizione da imporre &egrave; sul salto della <em>derivata</em>, e infatti la Green delle onde in 1D &egrave; $\\frac{1}{2c}\\theta(ct-|x|)$, continua ma con derivata discontinua.",
      cont:"Usala con una sorgente" },

    { t:"Con sorgente $f(t,x)$ accesa da $t=0$ e dato iniziale $u(0,x)=g(x)$, qual &egrave; la soluzione?",
      opts:[
        {x:"$u(t,x)=\\displaystyle\\int\\!dy\\,K_t(x-y)g(y)+\\int_0^t\\!\\!ds\\!\\int\\!dy\\;K_{t-s}(x-y)\\,f(s,y)$", c:true},
        {x:"$u(t,x)=\\displaystyle\\int\\!dy\\,K_t(x-y)g(y)+\\int_0^t\\!\\!ds\\!\\int\\!dy\\;K_{s}(x-y)\\,f(s,y)$"},
        {x:"$u(t,x)=\\displaystyle\\int\\!dy\\,K_t(x-y)g(y)+K_t*\\!\\int_0^t\\!\\!f(s,\\cdot)\\,ds$"},
        {x:"$u(t,x)=\\displaystyle\\int_0^t\\!\\!ds\\!\\int\\!dy\\;K_{t-s}(x-y)\\,f(s,y)$, e il dato iniziale entra come valore della sorgente in $s=0$"}
      ],
      hint:"Il nucleo deve propagare per il tempo <em>residuo</em> fra l'accensione e l'osservazione. Controlla la formula candidata nel caso $f=0$ e nel caso $g=0$ con $f=\\delta(s)\\delta(y)$.",
      sol:"&Egrave; il principio di Duhamel in forma integrale: l'omogenea con dato $g$, pi&ugrave; la sovrapposizione delle risposte a tutti gli impulsi $f(s,y)\\,ds\\,dy$ accesi in $(s,y)$ e propagati per il tempo residuo $t-s$. L'argomento $t-s$ (e non $s$, e non $t$) discende dall'invarianza per traslazione temporale dell'operatore: la risposta dipende solo da quanto tempo &egrave; passato dall'accensione. Controlli: con $f=0$ resta la formula del propagatore; con $g=0$ e $f=\\delta(s)\\delta(y)$ l'integrale doppio collassa su $K_t(x)$, che &egrave; per definizione la Green. L'opzione con $K_s$ &egrave; l'errore pi&ugrave; frequente e si smaschera cos&igrave;: darebbe, per una sorgente accesa un istante fa, una risposta gi&agrave; diffusa su una larghezza $\\sqrt{2Ds}$ arbitraria. Nota di struttura: la stessa formula, scritta su un dominio limitato, ha come nucleo $G(t,x,y)=\\sum_n\\frac2L\\sin(k_nx)\\sin(k_ny)e^{-Dk_n^2t}$ invece della gaussiana — cambia il nucleo, non l'architettura di Duhamel." }
  ]},

  /* --------------------------------------------------------------- 24 ----
     Green ritardata di Schrodinger: il fattore -i. */
  { pool:"edp", src:"Green ritardata di Schr&ouml;dinger &middot; da MIT 18.303 PS6 &middot; manuale", steps:[

    { t:"Si vuole $G$ tale che $\\big(i\\partial_t+\\tfrac12\\partial_x^2\\big)G(t,x)=\\delta(t)\\delta(x)$ con $G=0$ per $t<0$. Sapendo che il propagatore libero &egrave; $K(t,x)=\\frac{1}{\\sqrt{2\\pi it}}e^{ix^2/(2t)}$, qual &egrave; $G$?",
      opts:[
        {x:"$G(t,x)=-i\\,\\theta(t)\\,K(t,x)$", c:true},
        {x:"$G(t,x)=\\theta(t)\\,K(t,x)$"},
        {x:"$G(t,x)=+i\\,\\theta(t)\\,K(t,x)$"},
        {x:"$G(t,x)=-i\\,\\theta(t)\\,K(t,x)\\,e^{-t}$"}
      ],
      hint:"Ripeti il conto del caso parabolico: poni $G=\\theta(t)h(t,x)$, isola il termine con $\\delta(t)$ e guarda quale condizione iniziale su $h$ serve. Qui davanti a $\\partial_t$ c'&egrave; una $i$.",
      sol:"Posto $G=\\theta(t)h(t,x)$ con $h$ soluzione dell'omogenea, $$\\big(i\\partial_t+\\tfrac12\\partial_x^2\\big)G=i\\,\\delta(t)\\,h(0,x)+\\theta(t)\\underbrace{\\big(i\\partial_th+\\tfrac12\\partial_x^2h\\big)}_{=0}.$$ Perch&eacute; il risultato sia $\\delta(t)\\delta(x)$ serve $i\\,h(0,x)=\\delta(x)$, cio&egrave; $h(0,x)=-i\\,\\delta(x)$: la condizione iniziale &egrave; la delta <em>divisa per $i$</em>. Poich&eacute; $K$ &egrave; per definizione la soluzione con dato $\\delta(x)$, si ha $h=-iK$ e dunque $G=-i\\theta(t)K(t,x)$. Il fattore $-i$ &egrave; esattamente ci&ograve; che distingue il <em>propagatore</em> $K$ (soluzione con dato iniziale $\\delta$) dalla <em>Green</em> $G$ (soluzione con sorgente $\\delta$ nello spazio-tempo): sono due oggetti diversi che in letteratura si chiamano spesso con lo stesso nome. Con la convenzione $\\big(i\\partial_t-H\\big)G=\\delta$ si trova sempre $G=-i\\theta(t)e^{-iHt}$, ed &egrave; il $-i$ che compare in ogni vertice della serie perturbativa di Dyson.",
      cont:"Confronta col calore" },

    { t:"Che cosa distingue $|G|$ di Schr&ouml;dinger da $|G|$ del calore, a parit&agrave; di sorgente puntiforme?",
      opts:[
        {x:"Il modulo di Schr&ouml;dinger vale $\\theta(t)/\\sqrt{2\\pi t}$ e non dipende da $x$: il disturbo &egrave; ovunque con la stessa ampiezza, e l'informazione sta tutta nella fase $e^{ix^2/2t}$; nel calore il modulo &egrave; gaussiano e decade in $x$", c:true},
        {x:"Nessuna differenza sostanziale: entrambi sono gaussiani con la stessa larghezza $\\sqrt{2Dt}$"},
        {x:"Il modulo di Schr&ouml;dinger decade come $e^{-x^2/2t}$, quello del calore come $e^{-x^2/4Dt}$: cambiano solo i fattori numerici"},
        {x:"Il modulo di Schr&ouml;dinger cresce con $|x|$, perch&eacute; l'equazione non &egrave; dissipativa"}
      ],
      hint:"Calcola il modulo dell'esponenziale $e^{ix^2/(2t)}$ con $x$ e $t$ reali.",
      sol:"Con $x,t$ reali l'esponente $ix^2/(2t)$ &egrave; puramente immaginario, dunque $\\big|e^{ix^2/2t}\\big|=1$ e $|G|=\\theta(t)\\,\\big|2\\pi it\\big|^{-1/2}=\\theta(t)/\\sqrt{2\\pi t}$, indipendente da $x$. La struttura spaziale non sta nell'ampiezza ma nella <em>fase quadratica</em>, e riemerge solo quando si integra contro un dato iniziale, per interferenza: il metodo della fase stazionaria mostra che il punto $y$ che contribuisce di pi&ugrave; a $u(t,x)$ &egrave; quello con $ (x-y)/t=$ velocit&agrave; del pacchetto, cio&egrave; la propagazione classica emerge dall'interferenza. Tre conseguenze da tenere insieme. (i) Anche Schr&ouml;dinger ha velocit&agrave; di propagazione infinita, come il calore: la coda &egrave; istantanea. (ii) A differenza del calore, non c'&egrave; regolarizzazione: l'evoluzione &egrave; unitaria e invertibile, e $\\|\\psi(t)\\|_{L^2}$ si conserva mentre nel calore decade. (iii) L'equazione di Schr&ouml;dinger all'indietro &egrave; ben posta, mentre il calore all'indietro non lo &egrave;: &egrave; l'unica $i$ nell'esponente $e^{-ik^2t/2}$ contro $e^{-Dk^2t}$ a fare tutta la differenza — modulo uno contro decadimento.",
      cont:"Il caso con potenziale" },

    { t:"Se all'equazione si aggiunge un potenziale, $\\big(i\\partial_t+\\tfrac12\\partial_x^2-V(x)\\big)G=\\delta(t)\\delta(x)$, e $V$ &egrave; 'piccolo', quale struttura si genera?",
      opts:[
        {x:"L'identit&agrave; risolvente $G=G_0+G_0\\,V\\,G$, che iterata d&agrave; la serie $G=G_0+G_0VG_0+G_0VG_0VG_0+\\dots$: ogni termine &egrave; una sequenza di propagazioni libere separate da interazioni, ed &egrave; la serie di Born-Dyson", c:true},
        {x:"Il propagatore libero moltiplicato per $e^{-i\\int V\\,dt}$, esattamente e senza approssimazioni"},
        {x:"Nessuna struttura utile: con un potenziale la Green si calcola solo numericamente"},
        {x:"La Green diventa $G_0/(1-V)$, per somma della serie geometrica puntuale"}
      ],
      hint:"Porta il termine $V G$ al membro destro e trattalo come una sorgente, poi usa la formula di Duhamel gi&agrave; nota. La 'sorgente' contiene l'incognita: da l&igrave; l'iterazione.",
      sol:"Scrivendo $\\big(i\\partial_t+\\tfrac12\\partial_x^2\\big)G=\\delta+VG$ e applicando la Green libera $G_0$ come si fa con una sorgente qualunque, si ottiene $G=G_0+G_0VG$, dove il prodotto &egrave; una convoluzione in spazio e tempo. Sostituendo ripetutamente $G$ nel membro destro nasce la serie perturbativa. Non &egrave; un artificio di questo corso: &egrave; la struttura dei diagrammi di Feynman, in cui la linea &egrave; $G_0$, il vertice &egrave; $V$, e l'ordine $n$-esimo &egrave; $n$ interazioni intervallate da propagazioni libere. L'esponenziale $e^{-i\\int V}$ sarebbe esatto solo se $V$ commutasse con il termine cinetico, cosa falsa perch&eacute; $V(x)$ e $\\partial_x^2$ non commutano — l'errore &egrave; il primo termine della formula di Baker-Campbell-Hausdorff, ed &egrave; esattamente il motivo per cui in fisica numerica si usa lo splitting di Trotter con passi piccoli." }
  ]},

  /* --------------------------------------------------------------- 25 ----
     Advezione-diffusione su R: riferimento mobile. */
  { pool:"edp", src:"advezione-diffusione, riferimento mobile &middot; da MIT 18.303 PS4/PS6 &middot; manuale", steps:[

    { t:"Un inquinante in un fiume obbedisce a $\\partial_tu+v\\,\\partial_xu=D\\,\\partial_x^2u$ su $x\\in\\mathbb{R}$, con $u(0,x)=g(x)$ e $v>0$ costante. Quale cambio di variabile elimina il termine di trasporto?",
      opts:[
        {x:"$\\xi=x-vt$, cio&egrave; il riferimento che viaggia con la corrente: posto $w(t,\\xi)=u(t,x)$ resta $\\partial_tw=D\\partial_\\xi^2w$", c:true},
        {x:"$\\xi=x+vt$, cio&egrave; il riferimento che risale la corrente"},
        {x:"$\\tau=t-x/v$, il tempo ritardato"},
        {x:"$u=e^{-vt}w$, che assorbe il trasporto in un fattore esponenziale"}
      ],
      hint:"Scrivi la regola della catena per $\\partial_tu$ quando $u(t,x)=w(t,x-ct)$: compare un termine $-c\\,\\partial_\\xi w$ che deve cancellare $+v\\partial_xu$.",
      sol:"Con $u(t,x)=w(t,\\xi)$ e $\\xi=x-ct$: $\\partial_tu=\\partial_tw-c\\,\\partial_\\xi w$, $\\partial_xu=\\partial_\\xi w$, $\\partial_x^2u=\\partial_\\xi^2w$. Sostituendo, $\\partial_tw-c\\partial_\\xi w+v\\partial_\\xi w=D\\partial_\\xi^2w$, e la scelta $c=v$ cancella i due termini del primo ordine lasciando il calore puro. Il verso &egrave; il punto delicato: $\\xi=x-vt$ &egrave; la coordinata di un osservatore che si sposta <em>con</em> la corrente, ed &egrave; nel suo riferimento che il fenomeno &egrave; pura diffusione. Il fattore esponenziale $e^{-vt}$ non funziona qui perch&eacute; assorbe termini di ordine <em>zero</em> (cio&egrave; $\\pm\\alpha u$), non del primo ordine: le due sostituzioni sono complementari e in un problema con tutti e tre i termini (come l'appello del 08/07/2025) si usano entrambe.",
      cont:"Scrivi la soluzione" },

    { t:"Qual &egrave; allora $u(t,x)$?",
      opts:[
        {x:"$u(t,x)=\\displaystyle\\int_{-\\infty}^{+\\infty}\\!\\!dy\\;\\frac{e^{-(x-vt-y)^2/(4Dt)}}{\\sqrt{4\\pi Dt}}\\,g(y)$", c:true},
        {x:"$u(t,x)=\\displaystyle\\int_{-\\infty}^{+\\infty}\\!\\!dy\\;\\frac{e^{-(x+vt-y)^2/(4Dt)}}{\\sqrt{4\\pi Dt}}\\,g(y)$"},
        {x:"$u(t,x)=e^{-vt}\\displaystyle\\int_{-\\infty}^{+\\infty}\\!\\!dy\\;\\frac{e^{-(x-y)^2/(4Dt)}}{\\sqrt{4\\pi Dt}}\\,g(y)$"},
        {x:"$u(t,x)=g(x-vt)$, perch&eacute; il trasporto domina"}
      ],
      hint:"Risolvi il calore in $\\xi$ e poi torna indietro sostituendo $\\xi=x-vt$ nell'argomento del nucleo.",
      sol:"In $\\xi$ il problema &egrave; il calore puro con dato $w(0,\\xi)=g(\\xi)$, dunque $w(t,\\xi)=\\int K_t(\\xi-y)g(y)dy$ con $K_t$ il nucleo gaussiano. Tornando, $\\xi-y=x-vt-y$: il nucleo &egrave; centrato in $x=y+vt$, cio&egrave; la massa iniziale in $y$ si &egrave; spostata di $vt$ e nel frattempo si &egrave; allargata di $\\sqrt{2Dt}$. Se $g$ &egrave; gaussiana di varianza $a^2$ centrata in $0$, la soluzione &egrave; gaussiana con centro $vt$ e varianza $a^2+2Dt$: trasporto rigido del baricentro, diffusione della larghezza, e i due effetti non interferiscono perch&eacute; l'operatore &egrave; a coefficienti costanti. Il puro trasporto $g(x-vt)$ sarebbe la risposta con $D=0$: corretta come limite, non come soluzione. Verifica che vale sempre la pena fare: la massa $\\int u\\,dx$ si conserva (nessun termine di reazione), e $\\frac{d}{dt}\\int x\\,u\\,dx=v\\int u\\,dx$, cio&egrave; il baricentro avanza esattamente a velocit&agrave; $v$.",
      cont:"Quando domina che cosa" },

    { t:"Su una scala di lunghezza $L$, quale numero adimensionale dice se conta di pi&ugrave; il trasporto o la diffusione?",
      opts:[
        {x:"Il numero di P&eacute;clet $\\mathrm{Pe}=vL/D$: &egrave; il rapporto fra il tempo diffusivo $L^2/D$ e quello advettivo $L/v$; $\\mathrm{Pe}\\gg1$ significa trasporto dominante, $\\mathrm{Pe}\\ll1$ diffusione dominante", c:true},
        {x:"Il rapporto $v/D$, che ha le dimensioni di un inverso di lunghezza ed &egrave; gi&agrave; adimensionale"},
        {x:"Il numero di Reynolds $vL/\\nu$, che &egrave; lo stesso oggetto con $\\nu=D$"},
        {x:"Il prodotto $vDL$, grande quando entrambi gli effetti sono forti"}
      ],
      hint:"Costruisci i due tempi caratteristici del problema sulla scala $L$ e fanne il rapporto: uno va come $L$, l'altro come $L^2$.",
      sol:"I due tempi sono $\\tau_{\\rm adv}=L/v$ e $\\tau_{\\rm diff}=L^2/D$, e il loro rapporto $\\tau_{\\rm diff}/\\tau_{\\rm adv}=vL/D$ &egrave; il numero di P&eacute;clet, adimensionale perch&eacute; $[D]=\\mathrm{lung}^2/\\mathrm{tempo}$ e $[v]=\\mathrm{lung}/\\mathrm{tempo}$. Il solo $v/D$ non &egrave; adimensionale: &egrave; l'inverso di una lunghezza, e proprio quella lunghezza $\\ell=D/v$ &egrave; la scala sotto la quale la diffusione vince comunque. Il numero di Reynolds ha la stessa forma ma confronta inerzia e viscosit&agrave; nell'equazione di Navier-Stokes, non trasporto e diffusione di uno scalare passivo: nei fluidi reali il loro rapporto $\\mathrm{Pe}/\\mathrm{Re}=\\nu/D$ &egrave; il numero di Schmidt. Conseguenza numerica pratica, che vale la pena conoscere: discretizzando su passo $h$, se il P&eacute;clet di cella $vh/D$ supera $2$ gli schemi centrati producono oscillazioni spurie, ed &egrave; il motivo per cui si usano schemi upwind." }
  ]},

  /* --------------------------------------------------------------- 26 ----
     Reazione-diffusione: la sostituzione u = e^{alpha t} w e la soglia. */
  { pool:"edp", src:"reazione-diffusione, sostituzione esponenziale &middot; manuale", steps:[

    { t:"Sia $\\partial_tu=D\\partial_x^2u+\\alpha u$ su $[0,L]$ con $u(t,0)=u(t,L)=0$ e $\\alpha>0$ costante (diffusione con crescita locale). Quale sostituzione riduce il problema al calore puro?",
      opts:[
        {x:"$u(t,x)=e^{\\alpha t}w(t,x)$: si ottiene $\\partial_tw=D\\partial_x^2w$ con le stesse condizioni al bordo, perch&eacute; il fattore &egrave; non nullo e non dipende da $x$", c:true},
        {x:"$u(t,x)=e^{-\\alpha t}w(t,x)$"},
        {x:"$u(t,x)=e^{\\alpha x}w(t,x)$"},
        {x:"Nessuna: con un termine di reazione la separazione di variabili non &egrave; pi&ugrave; applicabile"}
      ],
      hint:"Sostituisci $u=e^{\\lambda t}w$ nell'equazione e determina $\\lambda$ chiedendo che il termine proporzionale a $w$ scompaia. Il segno esce dal conto, non dall'intuizione.",
      sol:"Con $u=e^{\\lambda t}w$: $\\partial_tu=e^{\\lambda t}(\\lambda w+\\partial_tw)$ e il membro destro vale $e^{\\lambda t}(D\\partial_x^2w+\\alpha w)$. Uguagliando, $\\partial_tw=D\\partial_x^2w+(\\alpha-\\lambda)w$, e la scelta $\\lambda=\\alpha$ elimina il termine di reazione: dunque $u=e^{+\\alpha t}w$. Il segno &egrave; quello che sembra 'sbagliato' a chi ragiona per analogia col decadimento: qui $\\alpha>0$ &egrave; una <em>crescita</em>, e il fattore che la riassorbe cresce a sua volta. Due osservazioni sulla legittimit&agrave;: il fattore non dipende da $x$, quindi non tocca $\\partial_x^2$ e non altera le condizioni al bordo omogenee ($u=0\\Leftrightarrow w=0$, perch&eacute; $e^{\\alpha t}\\ne0$); e la sostituzione funziona identicamente con $\\alpha$ dipendente dal tempo, purch&eacute; si prenda $\\lambda(t)=\\int_0^t\\alpha(s)ds$. La separazione, di per s&eacute;, funzionerebbe anche senza sostituzione: il termine $\\alpha u$ semplicemente sposta tutti gli autovalori della stessa quantit&agrave;.",
      cont:"Scrivi lo spettro effettivo" },

    { t:"Qual &egrave; la soluzione, e con quale tasso evolve il modo $n$?",
      opts:[
        {x:"$u=\\sum_{n\\ge1}c_n\\,e^{(\\alpha-Dk_n^2)t}\\sin(k_nx)$ con $k_n=\\tfrac{n\\pi}{L}$: la reazione trasla in blocco tutti i tassi di $+\\alpha$", c:true},
        {x:"$u=\\sum_{n\\ge1}c_n\\,e^{-Dk_n^2t}\\sin(k_nx)$: il fattore $e^{\\alpha t}$ si semplifica con quello della sostituzione"},
        {x:"$u=e^{\\alpha t}\\sum_{n\\ge1}c_n\\,e^{-Dk_n^2t}\\cos(k_nx)$"},
        {x:"$u=\\sum_{n\\ge1}c_n\\,e^{(\\alpha-Dk_n)t}\\sin(k_nx)$"}
      ],
      hint:"Risolvi il calore puro per $w$ con Dirichlet, poi rimoltiplica per $e^{\\alpha t}$ e raccogli gli esponenti. La potenza di $k_n$ nel tasso non pu&ograve; essere uno.",
      sol:"Per $w$ vale la soluzione standard con Dirichlet: $w=\\sum_nc_ne^{-Dk_n^2t}\\sin(k_nx)$, $k_n=n\\pi/L$, e $c_n=\\frac2L\\int_0^Lg\\sin(k_nx)dx$ perch&eacute; $w(0,x)=u(0,x)=g$. Rimoltiplicando, $u=\\sum_nc_ne^{(\\alpha-Dk_n^2)t}\\sin(k_nx)$. Lo spettro dell'operatore completo $D\\partial_x^2+\\alpha$ &egrave; dunque quello di $D\\partial_x^2$ traslato di $\\alpha$: un termine di ordine zero non cambia le autofunzioni, sposta solo tutti gli autovalori. Il tasso va come $k_n^2$ e non come $k_n$: le dimensioni lo confermano, $[Dk^2]=1/\\mathrm{tempo}$ mentre $[Dk]=\\mathrm{lung}/\\mathrm{tempo}$.",
      cont:"La soglia" },

    { t:"Per quali $L$ la soluzione cresce invece di spegnersi?",
      opts:[
        {x:"Per $L>L_c=\\pi\\sqrt{D/\\alpha}$: il modo fondamentale ha tasso $\\alpha-D\\pi^2/L^2$, positivo esattamente sopra quella soglia", c:true},
        {x:"Per ogni $L$, perch&eacute; il termine $\\alpha u$ con $\\alpha>0$ &egrave; sempre destabilizzante"},
        {x:"Per $L<L_c=\\pi\\sqrt{D/\\alpha}$: dominio piccolo, meno dispersione, quindi crescita"},
        {x:"Per nessun $L$: le condizioni di Dirichlet garantiscono il decadimento"}
      ],
      hint:"Il destino a tempi lunghi &egrave; deciso dal modo con il tasso pi&ugrave; grande, cio&egrave; da $n=1$. Imponi che quel tasso sia positivo e risolvi in $L$.",
      sol:"Il tasso del modo $n$ &egrave; $\\sigma_n=\\alpha-D n^2\\pi^2/L^2$, decrescente in $n$: il pi&ugrave; instabile &egrave; sempre il fondamentale. Da $\\sigma_1>0$ segue $\\alpha>D\\pi^2/L^2$, cio&egrave; $L>\\pi\\sqrt{D/\\alpha}$, e la verifica dimensionale torna perch&eacute; $\\sqrt{D/\\alpha}$ &egrave; una lunghezza. &Egrave; il fenomeno della <em>dimensione critica</em>: la diffusione porta materia ai bordi assorbenti a un ritmo $\\sim D/L^2$, la reazione la crea a ritmo $\\alpha$, e vince chi &egrave; pi&ugrave; veloce. Il modello &egrave; l'equazione di Fisher-KPP linearizzata: sotto $L_c$ una popolazione confinata in un habitat con bordi letali si estingue, sopra $L_c$ esplode (e la saturazione richiede il termine non lineare $-u^2$ che qui &egrave; stato trascurato). La stessa aritmetica d&agrave; la <em>massa critica</em> di un reattore nucleare, con $\\alpha$ il tasso netto di produzione di neutroni per fissione e le pareti che assorbono: la criticit&agrave; &egrave; letteralmente $\\sigma_1=0$. Con $\\alpha<0$ (decadimento) tutti i tassi sono negativi e non c'&egrave; alcuna soglia, coerentemente con l'opzione scartata." }
  ]},

  /* --------------------------------------------------------------- 27 ----
     Laplace sul disco: coordinate polari, periodicita', regolarita'. */
  { pool:"edp", src:"Laplace sul disco &middot; da MIT 18.303 PS5 &middot; manuale", steps:[

    { t:"Si risolve $\\Delta u=0$ sul disco $r<a$ con $u(a,\\theta)=f(\\theta)$. In polari $\\Delta u=\\partial_r^2u+\\frac1r\\partial_ru+\\frac{1}{r^2}\\partial_\\theta^2u$. Separando $u=R(r)\\Theta(\\theta)$, che cosa quantizza la costante di separazione?",
      opts:[
        {x:"La <em>periodicit&agrave;</em> $\\Theta(\\theta+2\\pi)=\\Theta(\\theta)$, che non &egrave; una condizione al bordo imposta dal problema ma un requisito di buona definizione della funzione: d&agrave; $\\Theta''=-n^2\\Theta$ con $n$ intero", c:true},
        {x:"La condizione $u(a,\\theta)=f(\\theta)$ sul bordo del disco"},
        {x:"La condizione di regolarit&agrave; in $r=0$"},
        {x:"Nulla: sul disco la costante di separazione resta continua e la somma diventa un integrale"}
      ],
      hint:"$\\theta$ e $\\theta+2\\pi$ sono lo stesso punto del piano: che cosa impone questo a $\\Theta$? E chiediti quale delle altre condizioni agisce invece sulla parte radiale.",
      sol:"Moltiplicando per $r^2/(R\\Theta)$ si separa: $\\frac{r^2R''+rR'}{R}=-\\frac{\\Theta''}{\\Theta}=\\mu$. La variabile angolare vive sul cerchio, e una funzione sul piano deve assumere lo stesso valore in $\\theta$ e $\\theta+2\\pi$ (e cos&igrave; la sua derivata): sono <em>condizioni periodiche</em>, che come nel caso dell'intervallo con BC periodiche danno $\\mu=n^2$ con $n=0,1,2,\\dots$ e autofunzioni $\\cos(n\\theta)$, $\\sin(n\\theta)$, con degenerazione doppia per $n\\ge1$. La differenza concettuale rispetto ai problemi su un intervallo &egrave; che qui la condizione non &egrave; imposta dalla fisica del bordo: &egrave; imposta dalla <em>geometria</em>, e dimenticarla &egrave; l'errore che produce soluzioni con $n$ non intero, cio&egrave; funzioni a pi&ugrave; valori. Le altre due condizioni hanno ruoli diversi e vanno tenute separate: la regolarit&agrave; in $r=0$ seleziona una delle due soluzioni radiali, il dato $f(\\theta)$ fissa i coefficienti.",
      cont:"Risolvi la parte radiale" },

    { t:"Con $\\mu=n^2$ la parte radiale &egrave; $r^2R''+rR'-n^2R=0$. Quali sono le soluzioni?",
      opts:[
        {x:"$R=r^{n}$ e $R=r^{-n}$ per $n\\ge1$; per $n=0$ le due soluzioni indipendenti sono $R=1$ e $R=\\ln r$", c:true},
        {x:"$R=\\cos(nr)$ e $R=\\sin(nr)$"},
        {x:"$R=J_n(nr)$ e $R=Y_n(nr)$, le funzioni di Bessel"},
        {x:"$R=e^{nr}$ e $R=e^{-nr}$"}
      ],
      hint:"&Egrave; un'equazione di Eulero: i coefficienti hanno grado pari all'ordine della derivata. Prova $R=r^s$ e ricava l'equazione indiciale; poi tratta a parte il caso in cui le due radici coincidono.",
      sol:"&Egrave; l'<em>equazione di Eulero</em> (o equidimensionale): il tentativo $R=r^s$ d&agrave; $s(s-1)+s-n^2=0$, cio&egrave; $s^2=n^2$ e $s=\\pm n$. Per $n\\ge1$ le due soluzioni indipendenti sono $r^n$ e $r^{-n}$. Per $n=0$ le radici coincidono ($s=0$ doppia) e la seconda soluzione si ottiene col metodo standard delle radici ripetute, moltiplicando per il logaritmo della variabile: $R=1$ e $R=\\ln r$. Il modo mnemonico &egrave; la sostituzione $r=e^{\\tau}$, che manda Eulero in $\\frac{d^2R}{d\\tau^2}-n^2R=0$ a coefficienti costanti, con soluzioni $e^{\\pm n\\tau}=r^{\\pm n}$ e, per $n=0$, $1$ e $\\tau=\\ln r$. Le funzioni di Bessel non compaiono qui: nascono dall'equazione di <em>Helmholtz</em> $\\Delta u+k^2u=0$ in polari, cio&egrave; nei problemi di calore e onde sul disco dove il termine $k^2r^2$ si aggiunge; per Laplace puro il conto &egrave; elementare. Il logaritmo, per inciso, &egrave; la soluzione fondamentale del Laplaciano in 2D e descrive il potenziale di una carica lineare.",
      cont:"Elimina le soluzioni cattive" },

    { t:"Che cosa impone la regolarit&agrave; nell'origine, e come si scrive la soluzione generale?",
      opts:[
        {x:"Scarta $r^{-n}$ e $\\ln r$, che divergono in $r=0$: resta $u=\\frac{a_0}{2}+\\sum_{n\\ge1}r^n\\big[a_n\\cos(n\\theta)+b_n\\sin(n\\theta)\\big]$, con i coefficienti fissati da $f$ attraverso i fattori $a^n$", c:true},
        {x:"Scarta $r^n$, perch&eacute; deve restare limitata al bordo"},
        {x:"Non scarta nulla: entrambe le soluzioni sono ammesse e le costanti si fissano col solo dato al bordo"},
        {x:"Scarta $r^{-n}$ ma conserva $\\ln r$, che &egrave; integrabile in due dimensioni"}
      ],
      hint:"Il punto $r=0$ &egrave; un punto interno del dominio come tutti gli altri, e l&igrave; non c'&egrave; alcuna sorgente: la soluzione deve essere finita. Poi imponi $r=a$ e riconosci una serie di Fourier.",
      sol:"L'origine &egrave; interna al dominio e il problema &egrave; omogeneo: la soluzione dev'essere limitata e liscia l&igrave; come altrove, quindi cadono $r^{-n}$ e $\\ln r$. Che $\\ln r$ sia integrabile non basta: la richiesta &egrave; che $\\Delta u=0$ <em>ovunque</em>, e $\\Delta\\ln r=2\\pi\\delta^{(2)}(\\mathbf{x})$, cio&egrave; conservarlo equivarrebbe a mettere di nascosto una carica puntiforme nel centro. Resta $$u(r,\\theta)=\\frac{a_0}{2}+\\sum_{n\\ge1}\\Big(\\frac{r}{a}\\Big)^{\\!n}\\big[\\alpha_n\\cos n\\theta+\\beta_n\\sin n\\theta\\big],$$ dove $\\alpha_n,\\beta_n$ sono i coefficienti di Fourier di $f(\\theta)$ su $[0,2\\pi)$ — scrivere $(r/a)^n$ &egrave; comodo perch&eacute; a $r=a$ il fattore vale $1$ e la serie diventa direttamente quella di $f$. Sul dominio complementare, la <em>corona</em> $a<r<b$ o l'esterno del disco, la conclusione si rovescia: l&igrave; l'origine non appartiene al dominio, $r^{-n}$ e $\\ln r$ sono ammesse, e servono due dati al bordo per fissare tutte le costanti.",
      cont:"Esempio e propriet&agrave; della media" },

    { t:"Con $a=1$ e $f(\\theta)=1+3\\cos\\theta-2\\sin(2\\theta)$, quanto valgono $u(r,\\theta)$ e $u$ al centro?",
      opts:[
        {x:"$u=1+3r\\cos\\theta-2r^2\\sin(2\\theta)$, e $u(0)=1$, che &egrave; la media di $f$ sul bordo", c:true},
        {x:"$u=1+3r\\cos\\theta-2r^2\\sin(2\\theta)$, e $u(0)=1+3-2=2$"},
        {x:"$u=r\\big[1+3\\cos\\theta-2\\sin(2\\theta)\\big]$, e $u(0)=0$"},
        {x:"$u=1+3r^2\\cos\\theta-2r^4\\sin(2\\theta)$, e $u(0)=1$"}
      ],
      hint:"Il dato &egrave; gi&agrave; scritto nella base angolare: nessun integrale, basta attaccare a ciascun modo la sua potenza di $r$. E quale potenza spetta a $\\cos\\theta$?",
      sol:"Il dato &egrave; una combinazione finita di $1$, $\\cos\\theta$, $\\sin2\\theta$, quindi per l'unicit&agrave; dello sviluppo di Fourier i coefficienti si leggono: $a_0/2=1$, $\\alpha_1=3$, $\\beta_2=-2$. A ciascun modo si attacca $r^n$ con $n$ pari all'<em>indice angolare</em> del modo, non alla sua posizione nella lista: $\\cos\\theta\\to r$, $\\sin2\\theta\\to r^2$. Dunque $u=1+3r\\cos\\theta-2r^2\\sin2\\theta$; a $r=1$ si ritrova $f$, come dev'essere. Al centro sopravvive il solo termine costante, $u(0)=1$, e non &egrave; un caso: &egrave; la <em>propriet&agrave; della media</em> delle funzioni armoniche, $u(\\mathbf{x}_0)=\\frac{1}{2\\pi}\\int_0^{2\\pi}u(\\mathbf{x}_0+a\\mathbf{e}_\\theta)\\,d\\theta$, che qui si vede in trasparenza perch&eacute; tutti i modi $n\\ge1$ hanno media angolare nulla e si annullano in $r=0$. Da questa propriet&agrave; discende in due righe il principio del massimo (una funzione armonica non pu&ograve; avere massimi interni stretti) e da esso l'unicit&agrave; del problema di Dirichlet. Sommando esplicitamente la serie con i coefficienti di $f$ si ottiene poi la formula integrale di Poisson, $u(r,\\theta)=\\frac{1}{2\\pi}\\int_0^{2\\pi}\\frac{a^2-r^2}{a^2-2ar\\cos(\\theta-\\phi)+r^2}f(\\phi)\\,d\\phi$: &egrave; la Green del disco, ed &egrave; la versione continua di questo stesso conto." }
  ]},

  /* --------------------------------------------------------------- 28 ----
     Laplace su rettangolo con dati su lati diversi: sovrapposizione. */
  { pool:"edp", src:"Laplace su rettangolo, dati su pi&ugrave; lati &middot; da MIT 18.303 PS5 &middot; manuale", steps:[

    { t:"Si vuole $\\Delta u=0$ su $[0,a]\\times[0,b]$ con $u(x,b)=F(x)$ sul lato alto, $u(a,y)=H(y)$ sul lato destro, e $u=0$ sugli altri due. Perch&eacute; la separazione diretta non funziona, e che cosa si fa?",
      opts:[
        {x:"Perch&eacute; con due dati non nulli su lati non paralleli nessuna delle due variabili ha entrambe le condizioni omogenee, quindi manca il problema di Sturm-Liouville. Si spezza per <em>linearit&agrave;</em> in $u=u_1+u_2$, con $u_1$ che porta $F$ e ha zero sugli altri tre lati, $u_2$ che porta $H$ e zero sugli altri tre", c:true},
        {x:"Perch&eacute; il rettangolo non &egrave; un dominio separabile; si passa alle coordinate polari"},
        {x:"Non serve fare nulla: si separa e si impongono i due dati sui coefficienti della stessa serie"},
        {x:"Perch&eacute; il problema &egrave; sovradeterminato: quattro condizioni per un'equazione del secondo ordine sono troppe"}
      ],
      hint:"Per separare serve <em>una</em> direzione con due condizioni omogenee agli estremi. Contale, direzione per direzione, nel problema come &egrave; posto.",
      sol:"La separazione richiede che, in almeno una delle due direzioni, le condizioni ai due estremi siano omogenee: solo allora quella direzione fornisce un problema di Sturm-Liouville con una base di autofunzioni su cui sviluppare. Qui in $x$ si ha $u(0,y)=0$ ma $u(a,y)=H(y)\\ne0$, e in $y$ si ha $u(x,0)=0$ ma $u(x,b)=F(x)\\ne0$: nessuna direzione &egrave; pulita. Il rimedio &egrave; il <em>principio di sovrapposizione</em>, lecito perch&eacute; l'equazione &egrave; lineare e omogenea: si risolvono due problemi, ciascuno con un solo lato attivo, e si sommano. In generale, un rettangolo con quattro dati non nulli si spezza in quattro sottoproblemi. Il rettangolo resta perfettamente separabile — quello che non &egrave; separabile &egrave; il modo in cui i dati sono distribuiti, e non c'&egrave; nulla di sovradeterminato: per un problema ellittico si assegna esattamente un dato su tutto il bordo, ed &egrave; ci&ograve; che si sta facendo.",
      cont:"Risolvi i due pezzi" },

    { t:"Nel pezzo $u_2$ (dato $H(y)$ sul lato $x=a$, zero sugli altri tre), quale base si usa?",
      opts:[
        {x:"Seni in $y$ e seni iperbolici in $x$: $u_2=\\sum_{n\\ge1}d_n\\sinh\\!\\big(\\tfrac{n\\pi x}{b}\\big)\\sin\\!\\big(\\tfrac{n\\pi y}{b}\\big)$, con $d_n\\sinh\\!\\big(\\tfrac{n\\pi a}{b}\\big)$ uguale al coefficiente di Fourier di $H$ su $[0,b]$", c:true},
        {x:"Seni in $x$ e seni iperbolici in $y$, come nel pezzo $u_1$: la base non cambia"},
        {x:"Seni in entrambe le variabili, $\\sin(n\\pi x/a)\\sin(m\\pi y/b)$"},
        {x:"Coseni in $y$ e esponenziali in $x$"}
      ],
      hint:"I ruoli delle due variabili si scambiano rispetto al primo pezzo: adesso &egrave; $y$ ad avere due condizioni omogenee. E occhio a quale lunghezza compare nei denominatori.",
      sol:"In $u_2$ le condizioni omogenee sono $u_2(x,0)=u_2(x,b)=0$, cio&egrave; sulla variabile $y$: &egrave; $y$ a quantizzarsi, con $\\sin(n\\pi y/b)$ e $k_n=n\\pi/b$ — nel denominatore va $b$, la lunghezza del lato lungo cui si annulla, non $a$. Allora $X''=k_n^2X$ ha soluzioni iperboliche, e $u_2(0,y)=0$ seleziona $\\sinh(k_nx)$ scartando $\\cosh$. Il coefficiente si fissa proiettando $H$ sul lato attivo: $d_n\\sinh(n\\pi a/b)=\\frac2b\\int_0^bH(y)\\sin\\!\\big(\\frac{n\\pi y}{b}\\big)dy$. La simmetria del conto rispetto al pezzo $u_1$ &egrave; una pura ridenominazione delle variabili, e riconoscerla fa risparmiare met&agrave; del tempo d'esame. Il prodotto $\\sin\\cdot\\sin$ nelle due variabili &egrave; invece la base giusta per il problema agli autovalori $\\Delta\\varphi=-\\lambda\\varphi$ sul rettangolo (calore e onde 2D), non per Laplace: qui la costante di separazione compare con segni opposti nelle due direzioni e una delle due <em>deve</em> essere iperbolica.",
      cont:"Il controllo sui vertici" },

    { t:"Che cosa succede nel vertice $(a,b)$ se $F(a)\\ne H(b)$?",
      opts:[
        {x:"Il dato al bordo &egrave; discontinuo in quel vertice: la soluzione resta armonica e ben definita all'interno, ma non si estende con continuit&agrave; fino al vertice, dove il limite dipende dalla direzione di avvicinamento", c:true},
        {x:"Il problema non ammette soluzione: i dati sono incompatibili"},
        {x:"La soluzione esiste ma non &egrave; unica, perch&eacute; nel vertice resta un grado di libert&agrave;"},
        {x:"Le serie divergono ovunque all'interno del rettangolo"}
      ],
      hint:"&Egrave; la stessa situazione dell'unit&agrave; sul dato costante incompatibile con le BC di Dirichlet nel calore: la singolarit&agrave; sta in un angolo del dominio, non dentro.",
      sol:"Una discontinuit&agrave; del dato in un punto del bordo non distrugge la buona posizione: il problema di Dirichlet ha soluzione unica per dati anche solo $L^2$ sul bordo, e la soluzione &egrave; analitica in <em>tutto l'interno</em> per la regolarit&agrave; ellittica (le funzioni armoniche sono analitiche dove l'equazione vale). Quello che si perde &egrave; la continuit&agrave; fino al bordo nel punto singolare: avvicinandosi al vertice lungo il lato alto si tende a $F(a)$, lungo il lato destro a $H(b)$, e il limite non esiste. &Egrave; la stessa struttura del calore con dato costante e BC di Dirichlet omogenee, dove la singolarit&agrave; vive nell'angolo $(t,x)=(0,0)$ dello spazio-tempo. Segno pratico della cosa: le serie convergono lentamente vicino al vertice, e una somma troncata mostra l&igrave; le sovraoscillazioni di Gibbs. In un problema d'esame, se i dati sono compatibili nei vertici la soluzione &egrave; continua sulla chiusura, e verificare quella compatibilit&agrave; costa dieci secondi." }
  ]},

  /* --------------------------------------------------------------- 29 ----
     Separazione in 2D: calore sul rettangolo, doppia serie, modo lento. */
  { pool:"edp", src:"separazione 2D &middot; da MIT 18.303 PS5 &middot; manuale", steps:[

    { t:"Calore su una piastra rettangolare: $\\partial_tu=D\\big(\\partial_x^2u+\\partial_y^2u\\big)$ su $[0,a]\\times[0,b]$ con $u=0$ su tutto il bordo. Quali sono i modi e gli autovalori?",
      opts:[
        {x:"$\\varphi_{mn}=\\sin\\!\\big(\\tfrac{m\\pi x}{a}\\big)\\sin\\!\\big(\\tfrac{n\\pi y}{b}\\big)$ con $\\lambda_{mn}=\\pi^2\\big(\\tfrac{m^2}{a^2}+\\tfrac{n^2}{b^2}\\big)$ e fattore temporale $e^{-D\\lambda_{mn}t}$, $m,n\\ge1$", c:true},
        {x:"$\\varphi_{mn}=\\sin\\!\\big(\\tfrac{m\\pi x}{a}\\big)\\sin\\!\\big(\\tfrac{n\\pi y}{b}\\big)$ con $\\lambda_{mn}=\\pi^2\\tfrac{(m+n)^2}{ab}$"},
        {x:"$\\varphi_{mn}=\\sin\\!\\big(\\tfrac{m\\pi x}{a}\\big)\\sin\\!\\big(\\tfrac{n\\pi y}{b}\\big)$ con $\\lambda_{mn}=\\pi^2\\big(\\tfrac{m}{a}+\\tfrac{n}{b}\\big)^2$"},
        {x:"$\\varphi_{mn}=\\sin\\!\\big(\\tfrac{m\\pi x}{a}\\big)\\cos\\!\\big(\\tfrac{n\\pi y}{b}\\big)$ con $\\lambda_{mn}=\\pi^2\\big(\\tfrac{m^2}{a^2}+\\tfrac{n^2}{b^2}\\big)$, $m\\ge1$, $n\\ge0$"}
      ],
      hint:"Separa due volte: $u=T(t)X(x)Y(y)$. Ogni direzione produce la sua costante, e la terza equazione le somma. Gli autovalori si sommano, non i numeri d'onda.",
      sol:"Con $u=T(t)X(x)Y(y)$ e divisione per $TXY$: $\\frac{\\dot T}{DT}=\\frac{X''}{X}+\\frac{Y''}{Y}$. Il primo addendo dipende solo da $x$, il secondo solo da $y$, e la somma da nessuna delle due: dunque ciascuno &egrave; costante, $X''/X=-\\alpha$ e $Y''/Y=-\\beta$. Dirichlet omogenee in entrambe le direzioni danno $X=\\sin(m\\pi x/a)$, $\\alpha_m=(m\\pi/a)^2$ e $Y=\\sin(n\\pi y/b)$, $\\beta_n=(n\\pi/b)^2$, con $m,n\\ge1$. L'autovalore del Laplaciano 2D &egrave; la <em>somma</em> $\\lambda_{mn}=\\alpha_m+\\beta_n$, perch&eacute; $\\Delta=\\partial_x^2+\\partial_y^2$ agisce additivamente sui prodotti: &egrave; il fatto strutturale che $-\\Delta$ su un rettangolo &egrave; la somma di due operatori 1D commutanti, e le autofunzioni sono i prodotti. Sommare i numeri d'onda invece degli autovalori (le opzioni con $(m/a+n/b)^2$ e $(m+n)^2/ab$) &egrave; l'errore tipico e si smaschera col caso $a=b$, dove i due criteri danno risultati diversi gi&agrave; per $(m,n)=(1,2)$.",
      cont:"Scrivi i coefficienti" },

    { t:"Con dato iniziale $u(0,x,y)=g(x,y)$, quanto vale $c_{mn}$?",
      opts:[
        {x:"$c_{mn}=\\dfrac{4}{ab}\\displaystyle\\int_0^a\\!\\!\\int_0^b g(x,y)\\sin\\!\\Big(\\frac{m\\pi x}{a}\\Big)\\sin\\!\\Big(\\frac{n\\pi y}{b}\\Big)dy\\,dx$", c:true},
        {x:"$c_{mn}=\\dfrac{2}{ab}\\displaystyle\\int_0^a\\!\\!\\int_0^b g\\,\\sin\\!\\Big(\\frac{m\\pi x}{a}\\Big)\\sin\\!\\Big(\\frac{n\\pi y}{b}\\Big)dy\\,dx$"},
        {x:"$c_{mn}=\\dfrac{4}{\\pi^2}\\displaystyle\\int_0^a\\!\\!\\int_0^b g\\,\\sin\\!\\Big(\\frac{m\\pi x}{a}\\Big)\\sin\\!\\Big(\\frac{n\\pi y}{b}\\Big)dy\\,dx$"},
        {x:"$c_{mn}=\\dfrac{4}{ab}\\displaystyle\\int_0^a\\!\\!\\int_0^b g\\,\\sin\\!\\Big(\\frac{m\\pi x}{a}\\Big)\\sin\\!\\Big(\\frac{n\\pi y}{b}\\Big)e^{-D\\lambda_{mn}t}\\,dy\\,dx$"}
      ],
      hint:"La normalizzazione &egrave; il prodotto delle due normalizzazioni 1D: $2/a$ per la prima variabile e $2/b$ per la seconda. E i coefficienti sono numeri, non funzioni del tempo.",
      sol:"Il sistema $\\{\\sin(m\\pi x/a)\\sin(n\\pi y/b)\\}$ &egrave; ortogonale e completo in $L^2$ del rettangolo, perch&eacute; prodotto tensoriale di due basi complete: $$\\int_0^a\\!\\!\\int_0^b\\varphi_{mn}\\varphi_{m'n'}\\,dx\\,dy=\\frac{a}{2}\\frac{b}{2}\\,\\delta_{mm'}\\delta_{nn'} .$$ Proiettando $g$ si isola $c_{mn}\\frac{ab}{4}$, da cui il fattore $4/(ab)$ — che &egrave; letteralmente $\\frac2a\\cdot\\frac2b$, il prodotto delle due normalizzazioni unidimensionali. La regola si generalizza: in $d$ dimensioni il fattore &egrave; $2^d/\\prod L_i$. Se $g$ &egrave; a variabili separate, $g=g_1(x)g_2(y)$, l'integrale doppio si fattorizza in due integrali semplici e $c_{mn}=c^{(1)}_mc^{(2)}_n$: &egrave; la scorciatoia che gli esercizi d'esame quasi sempre permettono. I coefficienti sono costanti: tutta la dipendenza temporale sta nel fattore $e^{-D\\lambda_{mn}t}$ della serie, non dentro l'integrale.",
      cont:"Chi governa il rilassamento" },

    { t:"Se la piastra &egrave; molto allungata, $a\\gg b$, quale scala di tempo governa il raffreddamento?",
      opts:[
        {x:"$\\tau=\\dfrac{1}{D\\lambda_{11}}=\\dfrac{1}{D\\pi^2\\big(\\tfrac{1}{a^2}+\\tfrac{1}{b^2}\\big)}\\;\\simeq\\;\\dfrac{b^2}{D\\pi^2}$: comanda la direzione <em>stretta</em>, perch&eacute; &egrave; quella con il numero d'onda pi&ugrave; grande", c:true},
        {x:"$\\tau\\simeq a^2/(D\\pi^2)$: comanda la direzione lunga, perch&eacute; il calore deve percorrerla tutta"},
        {x:"$\\tau\\simeq ab/(D\\pi^2)$, media geometrica delle due scale"},
        {x:"Nessuna: in 2D il decadimento non &egrave; esponenziale"}
      ],
      hint:"Il modo che sopravvive pi&ugrave; a lungo &egrave; quello con $\\lambda$ pi&ugrave; <em>piccolo</em>. Guarda quale dei due addendi domina la somma $1/a^2+1/b^2$ quando $a\\gg b$.",
      sol:"A tempi lunghi sopravvive il modo fondamentale $(1,1)$, con $\\lambda_{11}=\\pi^2(a^{-2}+b^{-2})$. Se $a\\gg b$ il termine $1/a^2$ &egrave; trascurabile e $\\lambda_{11}\\simeq\\pi^2/b^2$, cio&egrave; $\\tau\\simeq b^2/(D\\pi^2)$: la piastra si raffredda nel tempo che il calore impiega ad attraversare la <em>dimensione minore</em>. Il principio generale &egrave; che nel calore i tassi si sommano e vince il pi&ugrave; veloce: aggiungere una direzione di fuga non pu&ograve; che accelerare il raffreddamento, mai rallentarlo, e infatti $\\lambda_{11}^{2D}>\\lambda_1^{1D}$ sempre. &Egrave; la ragione per cui una lamina sottile si raffredda con la legge della sua spessore e non della sua estensione, ed &egrave; anche la giustificazione delle approssimazioni 'lubrificazione' o 'shallow water', dove si assume che nella direzione stretta l'equilibrio sia raggiunto istantaneamente. Nota collegata: se $a/b$ &egrave; razionale compaiono autovalori <em>degeneri</em>, ad esempio con $a=b$ i modi $(1,2)$ e $(2,1)$ hanno lo stesso $\\lambda$, e ogni loro combinazione lineare &egrave; ancora un modo — la degenerazione &egrave; sempre l'ombra di una simmetria, qui lo scambio dei due lati." }
  ]},

  /* --------------------------------------------------------------- 30 ----
     Il calore all'indietro: mal posto in tre sensi diversi. */
  { pool:"edp", src:"mal-posizione &middot; calore all'indietro &middot; manuale", steps:[

    { t:"Si assegna $u(T,x)$ e si vuole ricostruire $u(0,x)$ per l'equazione del calore su $[0,\\pi]$ con Dirichlet. In che senso il problema &egrave; mal posto?",
      opts:[
        {x:"Viene meno la <em>dipendenza continua dai dati</em>: risolvere all'indietro significa moltiplicare il modo $n$ per $e^{+Dn^2T}$, quindi una perturbazione del dato di ampiezza $\\varepsilon$ sul modo $n$ produce un errore $\\varepsilon e^{Dn^2T}$, non limitato uniformemente in $n$", c:true},
        {x:"Viene meno l'unicit&agrave;: due dati iniziali diversi possono produrre lo stesso $u(T,\\cdot)$"},
        {x:"Viene meno la linearit&agrave;, perch&eacute; l'inversione dell'operatore non &egrave; lineare"},
        {x:"Non &egrave; mal posto: basta cambiare $t\\to-t$ e si ottiene di nuovo l'equazione del calore"}
      ],
      hint:"Guarda che cosa diventa il fattore $e^{-Dn^2t}$ quando lo si inverte, e stima quanto vale per $n$ grande. Poi ricorda i tre requisiti di Hadamard.",
      sol:"I tre requisiti di Hadamard per un problema ben posto sono esistenza, unicit&agrave; e dipendenza continua dai dati. Qui l'unicit&agrave; c'&egrave; (se $u(T,\\cdot)$ coincide, coincidono tutti i coefficienti, e quindi anche a $t=0$), e la linearit&agrave; non &egrave; in discussione: l'operatore inverso &egrave; lineare, semplicemente non &egrave; <em>continuo</em>. Formalmente, $b_n(0)=b_n(T)e^{+Dn^2T}$, e l'operatore che manda $u(T,\\cdot)$ in $u(0,\\cdot)$ ha norma infinita: non esiste alcuna costante $C$ con $\\|u(0)\\|\\le C\\|u(T)\\|$. La sostituzione $t\\to-t$ non salva nulla, anzi lo dimostra: produce $\\partial_tu=-D\\partial_x^2u$, cio&egrave; un'equazione con diffusivit&agrave; negativa, l'archetipo dell'equazione instabile. Il contrasto con l'equazione delle onde &egrave; istruttivo: l&igrave; $t\\to-t$ lascia l'equazione invariata e il problema all'indietro &egrave; ben posto quanto quello in avanti, perch&eacute; i fattori temporali hanno modulo uno.",
      cont:"Quantifica" },

    { t:"Con $D=1$, $T=1$ e un errore di misura $\\varepsilon=10^{-10}$ sul modo $n=10$ del dato finale, quale errore ne risulta sul dato iniziale ricostruito?",
      opts:[
        {x:"Circa $10^{-10}\\,e^{100}\\approx3\\times10^{33}$: l'errore di misura, amplificato, seppellisce completamente il segnale", c:true},
        {x:"Circa $10^{-10}\\cdot100=10^{-8}$: l'amplificazione &egrave; polinomiale e resta trascurabile"},
        {x:"Circa $10^{-10}$: l'errore non viene amplificato perch&eacute; l'equazione &egrave; lineare"},
        {x:"Circa $10^{-10}e^{10}\\approx2\\times10^{-6}$"}
      ],
      hint:"Il fattore di amplificazione &egrave; $e^{Dn^2T}$, e l'esponente contiene $n$ al <em>quadrato</em>.",
      sol:"Il fattore &egrave; $e^{Dn^2T}=e^{1\\cdot100\\cdot1}=e^{100}\\approx2{,}7\\times10^{43}$, quindi l'errore ricostruito vale $\\approx2{,}7\\times10^{33}$ (calcolato, non stimato a occhio: $e^{100}=10^{100/\\ln10}=10^{43{,}4}$). &Egrave; una cifra priva di senso fisico, e la lezione &egrave; che l'instabilit&agrave; del calore all'indietro non &egrave; una sottigliezza matematica: dieci modi di risoluzione spaziale bastano a rendere il problema numericamente impossibile in aritmetica a doppia precisione, che ha circa sedici cifre. Nella pratica il problema si affronta <em>regolarizzando</em>: si tronca lo spettro a un $n_{\\max}$ tale che $e^{Dn_{\\max}^2T}$ resti confrontabile col rapporto segnale-rumore, oppure si aggiunge un termine di penalit&agrave; alla Tikhonov che sacrifica fedelt&agrave; per stabilit&agrave;. &Egrave; l'apparato di tutti i <em>problemi inversi</em>: deblurring di immagini, tomografia, ricostruzione di sorgenti termiche.",
      cont:"E l'esistenza?" },

    { t:"Oltre alla stabilit&agrave;, che cosa si perde se il dato finale $u(T,x)$ &egrave; una funzione soltanto continua, per esempio un profilo triangolare con una cuspide?",
      opts:[
        {x:"Si perde anche l'<em>esistenza</em>: ogni $u(T,\\cdot)$ raggiungibile &egrave; necessariamente $C^\\infty$ (anzi analitica), perch&eacute; il calore regolarizza istantaneamente; un dato con una cuspide non appartiene all'immagine dell'evoluzione e non ha alcuna preimmagine", c:true},
        {x:"Nulla di nuovo: l'esistenza &egrave; garantita, la soluzione sar&agrave; solo molto irregolare"},
        {x:"Si perde l'unicit&agrave;, perch&eacute; una cuspide pu&ograve; provenire da pi&ugrave; dati iniziali diversi"},
        {x:"Si perde la linearit&agrave; della mappa inversa"}
      ],
      hint:"Chiediti quali funzioni possono comparire come $u(T,\\cdot)$ per <em>qualche</em> dato iniziale: l'evoluzione in avanti ha un'immagine molto piccola.",
      sol:"Per ogni $t>0$ i coefficienti di $u(t,\\cdot)$ decadono come $e^{-Dn^2t}$ moltiplicato per i $b_n$ iniziali, che sono al pi&ugrave; limitati se il dato &egrave; in $L^2$: dunque decadono <em>pi&ugrave; rapidamente di ogni potenza</em>, il che equivale a dire che $u(t,\\cdot)$ &egrave; $C^\\infty$ (di fatto analitica). Il calore &egrave; un operatore fortemente regolarizzante e la sua immagine, a tempo $T>0$ fissato, &egrave; uno spazio molto piccolo di funzioni ultra-lisce. Una funzione con una cuspide non ci appartiene: non esiste alcun $u(0,\\cdot)$ in $L^2$ che a tempo $T$ produca quel profilo, e il problema all'indietro non ha proprio soluzione — non &egrave; una questione di stabilit&agrave;, &egrave; l'esistenza a cadere. Vale la pena tenere allineati i tre casi visti: il problema di Cauchy per Laplace perde la dipendenza continua (controesempio di Hadamard con $\\frac1n\\sin(nx)$); il calore all'indietro perde la dipendenza continua <em>e</em> l'esistenza; il calore in avanti e le onde in avanti o all'indietro sono ben posti. La tassonomia parabolico/iperbolico/ellittico dice quale problema &egrave; ben posto per quale equazione, ed &egrave; la vera domanda dietro ogni esercizio d'esame che chieda 'discutere la buona posizione'." }
  ]}

];

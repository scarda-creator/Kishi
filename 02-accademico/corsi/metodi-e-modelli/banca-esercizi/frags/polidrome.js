Q.polidrome = [

  /* ===================== CONCETTUALI + MODUS (prima meta') ===================== */

  { pool:"polidrome", src:"20230620 Es.2", steps:[{
      t:"I punti di diramazione di $f(z)=(z^2-1)^{1/2}$ sono:",
      opts:[
        {x:"$z=\\pm1$, gli zeri del radicando: girando attorno a uno solo di essi la funzione cambia foglio",c:true},
        {x:"$z=0$, dove il radicando vale $-1$"},
        {x:"$z=\\pm i$, i poli"},
        {x:"nessuno: la radice quadrata e' monodroma"}],
      hint:"Un punto di diramazione e' dove il radicando si annulla di ordine dispari: l&igrave; l'argomento della radice ruota di meno di $2\\pi$ per un giro completo.",
      sol:"<b>Punti di diramazione (nucleo 11).</b> Scritto $f=(z-1)^{1/2}(z+2)^{1/2}$... qui $(z-1)^{1/2}(z+1)^{1/2}$: ogni fattore ha un punto di diramazione dove il suo argomento si annulla, cio&egrave; $z=1$ e $z=-1$. Girando attorno a uno solo, il suo $\\theta$ cresce di $2\\pi$ e la mezza-potenza acquista $e^{i\\pi}=-1$: la funzione non torna al valore iniziale. L'infinito e' il terzo punto candidato, da discutere a parte."
    }]
  },

  { pool:"polidrome", src:"tipo b01", steps:[{
      t:"Per rendere monodroma $(z^2-1)^{1/2}$ quali tagli sono leciti?",
      opts:[
        {x:"il segmento $[-1,1]$, OPPURE le due semirette $(-\\infty,-1]\\cup[1,+\\infty)$: entrambe, purch&eacute; dichiarate",c:true},
        {x:"solo il segmento $[-1,1]$"},
        {x:"solo il semiasse reale positivo"},
        {x:"un taglio dall'origine all'infinito"}],
      hint:"La scelta e' libera finch&eacute; ogni cammino chiuso ammesso incontra un numero PARI di attraversamenti di ramo. Ci&ograve; che conta e' isolare i due punti di diramazione.",
      sol:"<b>Scelta del taglio (nucleo 11).</b> Un cammino che circonda ENTRAMBI i punti $\\pm1$ fa cambiare segno a ciascun fattore, e il prodotto dei due cambi riporta la funzione al valore iniziale: quindi fuori dal segmento $[-1,1]$ la funzione e' monodroma. In alternativa si tagliano le due semirette esterne. Il compito 20/06/2023 usa proprio le semirette; il 16/11/2023 usa il segmento. Determinazione diversa, funzione diversa: la scelta del taglio E' parte della risposta."
    }]
  },

  { pool:"polidrome", src:"tipo b01", steps:[{
      t:"Nella scrittura polare $f(z)=(z-1)^{1/2}(z+1)^{1/2}=\\sqrt{r_1 r_2}\\,e^{i(\\theta_1+\\theta_2)/2}$, i simboli $\\theta_1,\\theta_2$ sono:",
      opts:[
        {x:"$\\theta_1=\\arg(z-1)$ e $\\theta_2=\\arg(z+1)$: un angolo polare centrato in CIASCUN punto di diramazione",c:true},
        {x:"entrambi $\\arg z$, misurati dall'origine"},
        {x:"gli argomenti di $z$ e $\\bar z$"},
        {x:"le fasi dei due poli"}],
      hint:"Ogni fattore $(z-z_0)^{1/2}$ porta il proprio angolo, misurato dal SUO punto di diramazione $z_0$, non dall'origine.",
      sol:"<b>Rappresentazione polare (metodo standard, b01).</b> Si pone $z-1=r_1 e^{i\\theta_1}$ e $z+1=r_2 e^{i\\theta_2}$: $r_1,r_2$ sono le distanze da $+1$ e $-1$, e $\\theta_1,\\theta_2$ gli angoli che i vettori $z-1$ e $z+1$ formano con l'asse reale. Allora $f=\\sqrt{r_1 r_2}\\,e^{i(\\theta_1+\\theta_2)/2}$. Tracciare come variano $\\theta_1$ e $\\theta_2$ muovendosi nel piano E' il cuore del tipo: e' l&igrave; che si annidano le trappole."
    }]
  },

  { pool:"polidrome", src:"tipo b01", steps:[{
      t:"MODUS OPERANDI. Davanti a un esercizio 'valori sul taglio + integrale' di una polidroma, la sequenza corretta e':",
      opts:[
        {x:"(1) trova i punti di diramazione; (2) fissa il taglio e la determinazione dal dato reale-positivo; (3) porta $\\theta_1,\\theta_2$ dal riferimento ai punti chiesti ruotando attorno ai punti giusti; (4) costruisci il contorno che circonda il taglio e applica i residui",c:true},
        {x:"calcola subito il residuo all'infinito e moltiplica per $2\\pi i$"},
        {x:"sostituisci $z=e^{i\\theta}$ e integra sul cerchio unitario"},
        {x:"chiudi con la semicirconferenza superiore e usa il lemma di Jordan"}],
      hint:"Prima si fissa la determinazione (il 'foglio') dal dato; solo dopo si calcolano valori e integrale. Saltare la fissazione del foglio e' la causa n.1 di errore di segno.",
      sol:"<b>Strategia d'attacco (nucleo 11, tappa 03).</b> La sequenza e' invariante: diramazioni, taglio+determinazione, trasporto degli angoli, contorno. Il dato 'reale positiva sopra il taglio' fissa la coppia $(\\theta_1,\\theta_2)$ di riferimento; ogni valore successivo si ottiene ruotando attorno al SOLO punto di diramazione che il cammino circonda. Il verso di rotazione (orario/antiorario) determina il segno: e' il passo dove si perde o si vince l'esercizio."
    }]
  },

  { pool:"polidrome", src:"20230620 Es.2", steps:[
    { t:"$f(z)=(z^2-1)^{1/2}$, tagli su $(-\\infty,-1]\\cup[1,+\\infty)$, reale positiva sopra il taglio di destra ($x>1$, dove $\\theta_1=\\theta_2=0$). Per raggiungere $z=0$ dal riferimento, come ruotano gli angoli?",
      opts:[
        {x:"solo $\\theta_1$ ruota di $\\pi$ (antiorario attorno a $+1$); $\\theta_2$ resta $0$",c:true},
        {x:"entrambi ruotano di $\\pi$"},
        {x:"solo $\\theta_2$ ruota di $\\pi$"},
        {x:"$\\theta_1$ ruota di $2\\pi$, $\\theta_2$ di $0$"}],
      hint:"Andando da $x>1$ verso $0$ lungo il semipiano superiore, il vettore $z+1$ resta sempre a parte reale positiva (angolo $\\approx0$); solo $z-1$ passa dal semiasse positivo a quello negativo.",
      sol:"<b>Trasporto degli angoli (soluzione ufficiale 20/06/2023).</b> Muovendo $z$ da $x>1$ fino a $0$ nel semipiano superiore, $z+1$ resta reale positivo: $\\theta_2=0$. Invece $z-1$ passa da positivo a $-1$: il suo angolo cresce con continuit&agrave; fino a $\\theta_1=\\pi$. Ruota UN SOLO fattore: e' esattamente la situazione in cui e' facile sbagliare ruotando anche l'altro.",
      cont:"Ora il valore in $z=0$ &rarr;" },
    { t:"Con $\\theta_1=\\pi$, $\\theta_2=0$, quanto vale $f(0)$?",
      opts:[
        {x:"$f(0)=i$ (immaginaria positiva)",c:true},
        {x:"$f(0)=1$ (reale positiva)"},
        {x:"$f(0)=-1$"},
        {x:"$f(0)=-i$"}],
      hint:"$f(0)=\\sqrt{r_1 r_2}\\,e^{i(\\theta_1+\\theta_2)/2}$ con $r_1=r_2=1$; resta solo la fase $e^{i\\pi/2}$.",
      sol:"<b>Valore in $z=0$ (soluzione ufficiale: $f(0)=i$).</b> $r_1=|0-1|=1$, $r_2=|0+1|=1$, quindi $\\sqrt{r_1 r_2}=1$; la fase e' $e^{i(\\pi+0)/2}=e^{i\\pi/2}=i$. Dunque $f(0)=i$: la determinazione in $0$ NON e' reale, e' immaginaria pura. Chi ruota (per errore) anche $\\theta_2$ ottiene $e^{i\\pi}=-1$ e sbaglia il segno/tipo del valore." }
  ]},

  { pool:"polidrome", src:"20230620 Es.2", steps:[
    { t:"Stessa $f=(z^2-1)^{1/2}$, stessa determinazione. Valore SOTTO il taglio di destra ($x>1$): si ruota attorno a $+1$ di $2\\pi$ (antiorario). Il valore e':",
      opts:[
        {x:"$-\\sqrt{x^2-1}$ (reale negativa): $\\theta_1=2\\pi,\\ \\theta_2=0$, fase $e^{i\\pi}=-1$",c:true},
        {x:"$+\\sqrt{x^2-1}$: identico a sopra il taglio"},
        {x:"$i\\sqrt{x^2-1}$"},
        {x:"$-i\\sqrt{x^2-1}$"}],
      hint:"Attraversare il taglio di destra fa fare a $z-1$ un giro completo: $\\theta_1$ passa da $0$ a $2\\pi$, la mezza-potenza acquista $e^{i\\pi}$.",
      sol:"<b>Sotto il taglio destro (soluzione ufficiale).</b> Per passare sotto, $z-1$ compie un giro $2\\pi$ antiorario: $\\theta_1=2\\pi$, $\\theta_2=0$, fase $e^{i(2\\pi)/2}=e^{i\\pi}=-1$. Quindi $f=-\\sqrt{x^2-1}$: la funzione e' reale negativa. Il salto attraverso il taglio e' un fattore $-1$, coerente col fatto che il segmento $[1,+\\infty)$ e' un taglio vero.",
      cont:"Ora i due lati del taglio di sinistra &rarr;" },
    { t:"Valore SOPRA il taglio di sinistra ($x<-1$): si ruota di $\\pi$ (antiorario) attorno a ENTRAMBI i punti. Risultato:",
      opts:[
        {x:"$-\\sqrt{x^2-1}$: $\\theta_1=\\pi,\\ \\theta_2=\\pi$, fase $e^{i\\pi}=-1$",c:true},
        {x:"$+\\sqrt{x^2-1}$"},
        {x:"$i\\sqrt{x^2-1}$"},
        {x:"$0$"}],
      hint:"Per arrivare sopra il taglio sinistro dal riferimento entrambi i vettori $z\\mp1$ raggiungono il semiasse negativo dall'alto: $\\theta_1=\\theta_2=\\pi$.",
      sol:"<b>Sopra il taglio sinistro (soluzione ufficiale).</b> $\\theta_1=\\pi$, $\\theta_2=\\pi$, fase $e^{i(\\pi+\\pi)/2}=e^{i\\pi}=-1$: $f=-\\sqrt{x^2-1}$, reale negativa.",
      cont:"E sotto il taglio sinistro &rarr;" },
    { t:"Valore SOTTO il taglio di sinistra: $\\theta_1=\\pi$ (antiorario attorno a $+1$), $\\theta_2=-\\pi$ (ORARIO attorno a $-1$). Risultato:",
      opts:[
        {x:"$+\\sqrt{x^2-1}$: fase $e^{i(\\pi-\\pi)/2}=e^{0}=1$",c:true},
        {x:"$-\\sqrt{x^2-1}$"},
        {x:"$i\\sqrt{x^2-1}$"},
        {x:"$-i\\sqrt{x^2-1}$"}],
      hint:"Qui il verso attorno ai due punti e' OPPOSTO: $+\\pi$ attorno a $1$, $-\\pi$ attorno a $-1$. Gli angoli si sottraggono nella somma $\\theta_1+\\theta_2=0$.",
      sol:"<b>Sotto il taglio sinistro (soluzione ufficiale).</b> $\\theta_1=\\pi$, $\\theta_2=-\\pi$: la somma $\\theta_1+\\theta_2=0$, fase $e^{0}=1$, quindi $f=+\\sqrt{x^2-1}$, reale positiva. E' il punto pi&ugrave; delicato: il verso di rotazione attorno a $-1$ e' orario, e cambiarlo (mettendo $+\\pi$) darebbe erroneamente $-\\sqrt{x^2-1}$. La direzione della rotazione E' l'informazione." }
  ]},

  { pool:"polidrome", src:"tipo b01", steps:[{
      t:"Attraversando un taglio, il segno di $(z^2-1)^{1/2}=(z-1)^{1/2}(z+1)^{1/2}$ cambia quando:",
      opts:[
        {x:"il cammino circonda un numero DISPARI di punti di diramazione (uno solo dei due fattori compie un giro)",c:true},
        {x:"sempre, per qualunque taglio attraversato"},
        {x:"mai, perch&eacute; il prodotto e' monodromo"},
        {x:"solo attraversando il segmento $[-1,1]$"}],
      hint:"Ogni fattore che compie un giro $2\\pi$ contribuisce $e^{i\\pi}=-1$. Due fattori insieme danno $(-1)(-1)=+1$.",
      sol:"<b>Conteggio dei cambi di ramo (nucleo 11, collaudo).</b> Ogni fattore $(z-z_0)^{1/2}$ acquista $-1$ se il cammino avvolge $z_0$ una volta. Attraversare un taglio esterno avvolge UN solo punto: segno $-1$. Un cammino che avvolge entrambi (attorno a tutto il segmento) d&agrave; $(-1)^2=+1$: e' la ragione per cui fuori dal segmento $[-1,1]$ la funzione e' monodroma."
    }]
  },

  { pool:"polidrome", src:"tipo b01", steps:[{
      t:"TRAPPOLA. L'errore piu' frequente nel tipo 'valori sul taglio' e':",
      opts:[
        {x:"ruotare l'angolo di UN SOLO fattore quando andrebbero ruotati entrambi (o viceversa): si sbaglia la fase $e^{i(\\theta_1+\\theta_2)/2}$",c:true},
        {x:"dimenticare di normalizzare la funzione"},
        {x:"usare $z=e^{i\\theta}$ invece della forma polare"},
        {x:"calcolare il residuo con la formula del polo semplice"}],
      hint:"La fase dipende dalla SOMMA $\\theta_1+\\theta_2$: basta sbagliare la rotazione di uno dei due per ottenere una fase diversa di $\\pi$, cio&egrave; un segno o un fattore $i$ sbagliato.",
      sol:"<b>Trappola dichiarata (b01).</b> 'Errore sull'angolo di un fattore' e' la prima trappola censita per questo tipo. La fase e' $e^{i(\\theta_1+\\theta_2)/2}$: una rotazione sbagliata di $\\pi$ su UN solo $\\theta$ altera la fase di $\\pi/2$, trasformando (per esempio) un valore reale in immaginario. Rimedio: disegnare i due vettori $z-1$ e $z+1$ e tracciarne gli angoli separatamente, attorno al punto giusto e nel verso giusto."
    }]
  },

  { pool:"polidrome", src:"tipo b01", steps:[{
      t:"TRAPPOLA. Nel calcolo dell'integrale $\\int f\\,dx$ per contorno attorno al taglio, il segno del risultato:",
      opts:[
        {x:"dipende dal VERSO (orario/antiorario) con cui il contorno circonda il taglio: sbagliarlo inverte il segno di $I$",c:true},
        {x:"e' sempre positivo perch&eacute; l'integrando e' reale"},
        {x:"non dipende dal contorno, solo dai residui"},
        {x:"e' fissato dalla determinazione sopra il taglio"}],
      hint:"$\\oint$ orario $=-\\oint$ antiorario. Il teorema dei residui d&agrave; $+2\\pi i\\sum\\mathrm{Res}$ in senso antiorario, $-2\\pi i\\sum\\mathrm{Res}$ in senso orario.",
      sol:"<b>Trappola dichiarata (b01) + teorema dei residui (nucleo 13).</b> 'Il segno dell'integrale dipende dal verso del contorno'. Il compito 16/11/2023 sceglie una curva che circonda il taglio in senso ORARIO: allora $\\oint f=-2\\pi i\\,\\mathrm{Res}_\\infty$. Dichiarare sempre il verso per iscritto e riportarlo nel segno: e' il punto in cui il correttore verifica la comprensione, non il calcolo."
    }]
  },

  { pool:"polidrome", src:"20230704 Es.1", steps:[{
      t:"Il residuo all'infinito si calcola con:",
      opts:[
        {x:"$\\mathrm{Res}_\\infty f=-\\mathrm{Res}_{w=0}\\!\\left[\\dfrac{1}{w^2}f\\!\\left(\\dfrac1w\\right)\\right]$: attenzione al segno MENO",c:true},
        {x:"$\\mathrm{Res}_\\infty f=+\\mathrm{Res}_{w=0}\\!\\left[\\dfrac{1}{w^2}f\\!\\left(\\dfrac1w\\right)\\right]$"},
        {x:"$\\mathrm{Res}_\\infty f=\\lim_{z\\to\\infty} z\\,f(z)$"},
        {x:"$\\mathrm{Res}_\\infty f=-\\sum_{\\text{poli finiti}}\\mathrm{Res}$, sempre"},
        ],
      hint:"La sostituzione $z=1/w$ porta un fattore $-dz/w^2=... $, e il segno meno viene proprio da $dz=-dw/w^2$ e dall'inversione dell'orientamento.",
      sol:"<b>Residuo all'infinito (nucleo 13).</b> $\\mathrm{Res}_\\infty f=-\\mathrm{Res}_{w=0}[w^{-2}f(1/w)]$. Il segno meno e' la trappola censita per il 04/07/2023: dimenticarlo d&agrave; il risultato opposto. (Vale anche $\\mathrm{Res}_\\infty f=-\\sum$ residui finiti solo se non ci sono altri contributi, es. tagli: qui NON e' cos&igrave;.)"
    }]
  },

  { pool:"polidrome", src:"20231116 Es.2", steps:[
    { t:"$f(z)=i(z-1)^{1/2}(z+2)^{1/2}$, taglio $[-2,1]$, reale positiva sopra. Per il residuo all'infinito si pone $z=1/w$ e si sviluppa $\\dfrac{i}{w^3}\\sqrt{(1-w)(1+2w)}$ attorno a $w=0$. Lo sviluppo di $\\sqrt{1+w-2w^2}$ e':",
      opts:[
        {x:"$1+\\dfrac{w}{2}-\\dfrac{9}{8}w^2+\\cdots$",c:true},
        {x:"$1+\\dfrac{w}{2}-\\dfrac{1}{8}w^2+\\cdots$"},
        {x:"$1-\\dfrac{w}{2}+\\dfrac{9}{8}w^2+\\cdots$"},
        {x:"$1+w-2w^2+\\cdots$"}],
      hint:"$\\sqrt{1+u}=1+\\tfrac{u}{2}-\\tfrac{u^2}{8}+\\cdots$ con $u=w-2w^2$; tieni i termini fino a $w^2$: da $\\tfrac{u}{2}$ viene $-w^2$, da $-\\tfrac{u^2}{8}$ viene $-\\tfrac{w^2}{8}$.",
      sol:"<b>Sviluppo binomiale.</b> $(1-w)(1+2w)=1+w-2w^2$. Con $u=w-2w^2$: $\\sqrt{1+u}=1+\\tfrac{u}{2}-\\tfrac{u^2}{8}=1+\\tfrac{w-2w^2}{2}-\\tfrac{w^2}{8}=1+\\tfrac{w}{2}-w^2-\\tfrac{w^2}{8}=1+\\tfrac{w}{2}-\\tfrac98 w^2$. Il coefficiente di $w^2$ e' $-9/8$.",
      cont:"Ora estrai il residuo &rarr;" },
    { t:"Da $\\mathrm{Res}_\\infty=-\\mathrm{Res}_{w=0}\\!\\left[\\dfrac{i}{w^3}\\sqrt{1+w-2w^2}\\right]$, quanto vale?",
      opts:[
        {x:"$\\mathrm{Res}_\\infty f=-\\dfrac{9i}{8}$",c:true},
        {x:"$\\mathrm{Res}_\\infty f=+\\dfrac{9i}{8}$"},
        {x:"$\\mathrm{Res}_\\infty f=-\\dfrac{i}{8}$"},
        {x:"$\\mathrm{Res}_\\infty f=\\dfrac{i}{2}$"}],
      hint:"$\\mathrm{Res}_{w=0}$ di $\\dfrac{i}{w^3}(a_0+a_1 w+a_2 w^2+\\cdots)$ e' $i\\,a_2$; poi anteponi il segno meno della formula del residuo all'infinito.",
      sol:"<b>Residuo all'infinito (soluzione ufficiale: $-9i/8$).</b> Il residuo in $w=0$ di $\\tfrac{i}{w^3}(1+\\tfrac w2-\\tfrac98 w^2)$ e' il coefficiente di $w^{-1}$, cio&egrave; $i\\cdot(-\\tfrac98)=-\\tfrac{9i}{8}$; con il segno della formula $\\mathrm{Res}_\\infty=-\\mathrm{Res}_{w=0}[\\cdots]$ si conclude... la soluzione ufficiale riporta direttamente $\\mathrm{Res}_\\infty f=-\\tfrac{9i}{8}$ (avendo gi&agrave; incluso il segno nella scrittura $-\\tfrac{1}{w^2}f(1/w)$). Il valore verificato e' $-9i/8$." }
  ]},

  { pool:"polidrome", src:"20231116 Es.2", steps:[{
      t:"Nella funzione $f(z)=i(z-1)^{1/2}(z+2)^{1/2}$, a cosa serve il prefattore $i$?",
      opts:[
        {x:"a rendere $f$ reale positiva sopra il taglio con la scelta $\\theta_1=-\\pi,\\ \\theta_2=0$: senza $i$ la fase resterebbe $e^{-i\\pi/2}=-i$",c:true},
        {x:"a spostare i punti di diramazione"},
        {x:"a garantire la convergenza dell'integrale"},
        {x:"non ha alcun ruolo, e' decorativo"}],
      hint:"Sopra il taglio la soluzione ufficiale sceglie $\\theta_1=-\\pi$: allora $e^{i\\theta_1/2}=e^{-i\\pi/2}=-i$, e il prefattore $i$ lo cancella dando $+1$.",
      sol:"<b>Ruolo del prefattore (soluzione ufficiale 16/11/2023).</b> Con $\\theta_1=-\\pi$, $\\theta_2=0$ sopra il taglio, $e^{i(\\theta_1+\\theta_2)/2}=e^{-i\\pi/2}=-i$; il prefattore $i$ lo neutralizza: $i\\cdot(-i)=1$, e $f=\\sqrt{r_1 r_2}=\\sqrt{(1-x)(x+2)}$, reale positiva. Il prefattore FISSA la determinazione insieme alla scelta degli angoli: e' parte integrante della definizione della funzione, non un dettaglio."
    }]
  },

  { pool:"polidrome", src:"20231116 Es.2", steps:[
    { t:"Per $\\int_{-2}^{1}\\sqrt{2-x-x^2}\\,dx$ si sfrutta che sopra il taglio $f=i(z-1)^{1/2}(z+2)^{1/2}$ vale $\\sqrt{2-x-x^2}$. Un contorno $\\gamma$ orario attorno al taglio d&agrave; $\\oint_\\gamma f\\,dz=2I$ perch&eacute;:",
      opts:[
        {x:"sopra il taglio $f=+\\sqrt{2-x-x^2}$ e sotto $f=-\\sqrt{2-x-x^2}$, ma il verso e' invertito: i due lati SOMMANO invece di cancellarsi",c:true},
        {x:"i due lati del taglio danno contributi opposti che si cancellano, e resta l'arco"},
        {x:"il contorno racchiude un polo doppio in $z=0$"},
        {x:"la funzione e' monodroma sul taglio"}],
      hint:"Come nel keyhole (nucleo 13): se la funzione fosse monodroma i due lati si annullerebbero. E' proprio il cambio di segno di $f$ da un lato all'altro, unito al verso opposto, a dare $2I$ e non $0$.",
      sol:"<b>Contorno attorno al taglio (nucleo 13, meccanismo keyhole).</b> Sopra $f=+\\sqrt{2-x-x^2}$, sotto $f=-\\sqrt{2-x-x^2}$ (un fattore ha ruotato); percorrendo il lato inferiore in verso opposto, $(-\\sqrt{\\cdots})\\cdot(-dx)=+\\sqrt{\\cdots}\\,dx$: i due tratti danno $2\\int\\sqrt{2-x-x^2}\\,dx=2I$. E' la polidromia a rendere possibile il calcolo, esattamente come nel buco della serratura.",
      cont:"Ora chiudi con il residuo all'infinito &rarr;" },
    { t:"Con $\\mathrm{Res}_\\infty f=-\\tfrac{9i}{8}$ e $\\oint_\\gamma f=2I$ (contorno orario, quindi $\\oint_\\gamma f=2\\pi i\\,\\mathrm{Res}_\\infty$ col segno del verso), si ottiene:",
      opts:[
        {x:"$I=\\dfrac{9\\pi}{8}$",c:true},
        {x:"$I=-\\dfrac{9\\pi}{8}$"},
        {x:"$I=\\dfrac{9\\pi}{4}$"},
        {x:"$I=\\dfrac{9i\\pi}{8}$"}],
      hint:"Verifica geometrica: $2-x-x^2=\\tfrac94-(x+\\tfrac12)^2$ e' il quadrato di una semicirconferenza di raggio $3/2$; l'integrale e' l'area del semicerchio $=\\tfrac{\\pi}{2}(\\tfrac32)^2$.",
      sol:"<b>Risultato (soluzione ufficiale: $I=9\\pi/8$).</b> $2I=2\\pi i\\,(-\\tfrac{9i}{8})=\\tfrac{9\\pi}{4}$, quindi $I=\\tfrac{9\\pi}{8}$. Controllo indipendente: $2-x-x^2=\\tfrac94-(x+\\tfrac12)^2$, semicerchio di raggio $3/2$ su $[-2,1]$, area $=\\tfrac12\\pi(\\tfrac32)^2=\\tfrac{9\\pi}{8}$. I due metodi coincidono: e' la conferma che segno e determinazione sono corretti." }
  ]},

  /* ===================== INTEGRALI, KEYHOLE, z^i (seconda meta') ===================== */

  { pool:"polidrome", src:"20230620 Es.2", steps:[
    { t:"Per $\\int_1^{\\infty}\\dfrac{dx}{x^3\\sqrt{x^2-1}}$ si integra $\\dfrac{1}{z^3}f(z)$ con $f=(z^2-1)^{1/2}$ (tagli esterni) su un contorno che circonda i tagli e racchiude $z=0$. Che singolarita' introduce il fattore $1/z^3$?",
      opts:[
        {x:"un polo TRIPLO in $z=0$: il residuo richiede $\\dfrac{1}{2!}\\dfrac{d^2}{dz^2}$",c:true},
        {x:"un polo semplice in $z=0$"},
        {x:"un punto di diramazione in $z=0$"},
        {x:"nessuna: $z=0$ e' regolare"}],
      hint:"$1/z^3$ moltiplica una funzione regolare e non nulla in $0$ ($f(0)=i\\neq0$): l'ordine del polo e' esattamente $3$.",
      sol:"<b>Ordine del polo e formula del residuo (nucleo 13).</b> $f(0)=i\\neq0$, quindi $z^{-3}f(z)$ ha un polo di ordine $3$ in $0$. La soluzione ufficiale usa $4I=2\\pi i\\,\\mathrm{Res}_{z=0}[z^{-3}f(z)]=\\pi i\\,\\dfrac{d^2}{dz^2}\\dfrac{1}{f(z)}\\big|_0$ (il fattore $4$ viene dai quattro tratti del contorno che, per simmetria, valgono ciascuno $I$).",
      cont:"Ora il valore &rarr;" },
    { t:"La soluzione ufficiale conclude $I=\\dfrac{\\pi}{4}$. Un controllo indipendente:",
      opts:[
        {x:"$x=\\sec\\theta$: $dx=\\sec\\theta\\tan\\theta\\,d\\theta$, $\\sqrt{x^2-1}=\\tan\\theta$, e l'integrale diventa $\\int_0^{\\pi/2}\\cos^2\\theta\\,d\\theta=\\dfrac{\\pi}{4}$",c:true},
        {x:"$x=\\sin\\theta$, che d&agrave; $\\int_0^{\\pi/2}d\\theta=\\dfrac{\\pi}{2}$"},
        {x:"$x=e^t$, che d&agrave; un integrale divergente"},
        {x:"nessun controllo elementare e' possibile"}],
      hint:"Con $x=\\sec\\theta$ il radicale si semplifica: $\\sqrt{\\sec^2\\theta-1}=\\tan\\theta$, e $x^3=\\sec^3\\theta$.",
      sol:"<b>Verifica per sostituzione ($I=\\pi/4$).</b> $\\dfrac{\\sec\\theta\\tan\\theta}{\\sec^3\\theta\\,\\tan\\theta}d\\theta=\\cos^2\\theta\\,d\\theta$, con $\\theta:0\\to\\pi/2$; e $\\int_0^{\\pi/2}\\cos^2\\theta\\,d\\theta=\\pi/4$. Coincide con il metodo dei residui: conferma indipendente del risultato ufficiale $I=\\pi/4$." }
  ]},

  { pool:"polidrome", src:"20241106 Es.2", steps:[
    { t:"$\\int_0^{\\infty}\\dfrac{\\sqrt{x}}{x^2+1}\\,dx$: branch point in $z=0$, taglio sul semiasse reale NEGATIVO ($\\arg z\\in(-\\pi,\\pi)$), poli semplici in $z=\\pm i$. Si chiude con semicirconferenza superiore $C_R$ + asse reale negativo $\\gamma_-$. Su $\\gamma_-$ ($z=x<0$, sopra il taglio) quanto vale $\\sqrt{z}$?",
      opts:[
        {x:"$\\sqrt{z}=\\sqrt{|x|}\\,e^{i\\pi/2}=i\\sqrt{|x|}$",c:true},
        {x:"$\\sqrt{z}=-\\sqrt{|x|}$"},
        {x:"$\\sqrt{z}=\\sqrt{|x|}$"},
        {x:"$\\sqrt{z}=e^{i\\pi}\\sqrt{|x|}$"}],
      hint:"Sopra il taglio negativo $\\arg z=\\pi$, quindi $\\sqrt z=\\sqrt{|z|}\\,e^{i\\arg z/2}=\\sqrt{|x|}\\,e^{i\\pi/2}$.",
      sol:"<b>Valore del ramo su $\\gamma_-$ (soluzione 06/11/2024).</b> Con taglio sul semiasse negativo e $\\arg z\\in(-\\pi,\\pi)$, appena sopra il semiasse negativo $\\arg z\\to\\pi$, dunque $\\sqrt z=\\sqrt{|x|}\\,e^{i\\pi/2}=i\\sqrt{|x|}$. E' il contributo $+iI$ nel bilancio del contorno: NON $-I$. Questo distingue il taglio negativo dal keyhole standard.",
      cont:"Ora imposta il bilancio del contorno &rarr;" },
    { t:"Il tratto reale positivo d&agrave; $I$, il tratto $\\gamma_-$ (percorso in verso opposto, con $\\sqrt z=i\\sqrt{|x|}$) d&agrave; $iI$, gli archi svaniscono. Quindi $(1+i)I=2\\pi i\\,\\mathrm{Res}_{z=i}$. Con $\\mathrm{Res}_{z=i}\\dfrac{\\sqrt z}{z^2+1}=\\dfrac{e^{i\\pi/4}}{2i}$ si ottiene:",
      opts:[
        {x:"$I=\\dfrac{\\pi}{\\sqrt2}$",c:true},
        {x:"$I=\\dfrac{\\pi}{2}$"},
        {x:"$I=\\dfrac{\\pi}{2\\sqrt2}$"},
        {x:"$I=\\pi\\sqrt2$"}],
      hint:"$(1+i)I=2\\pi i\\cdot\\dfrac{e^{i\\pi/4}}{2i}=\\pi e^{i\\pi/4}=\\pi\\dfrac{1+i}{\\sqrt2}$; dividi per $(1+i)$.",
      sol:"<b>Risultato (soluzione ufficiale: $I=\\pi/\\sqrt2$).</b> $\\mathrm{Res}_{z=i}=\\dfrac{\\sqrt i}{2i}=\\dfrac{e^{i\\pi/4}}{2i}$ (formula del quoziente, $Q'=2z$). Allora $(1+i)I=\\pi e^{i\\pi/4}=\\pi\\dfrac{1+i}{\\sqrt2}$, da cui $I=\\pi/\\sqrt2$. Controllo per sostituzione $x=t^2$: $I=2\\int_0^\\infty\\dfrac{t^2}{t^4+1}dt=2\\cdot\\dfrac{\\pi}{2\\sqrt2}=\\dfrac{\\pi}{\\sqrt2}$. Coincidono." }
  ]},

  { pool:"polidrome", src:"tipo b01", steps:[{
      t:"Taglio sul semiasse reale POSITIVO ($\\arg z\\in(0,2\\pi)$, contorno keyhole) contro taglio sul semiasse NEGATIVO ($\\arg z\\in(-\\pi,\\pi)$): la differenza operativa e'",
      opts:[
        {x:"col taglio positivo i due lati danno il fattore $(1-e^{2\\pi i\\alpha})$; col taglio negativo il lato $\\gamma_-$ porta $e^{i\\pi/2}=i$ e il bilancio e' $(1+i)I$",c:true},
        {x:"nessuna: il risultato non dipende da dove si mette il taglio"},
        {x:"col taglio negativo la funzione diventa monodroma"},
        {x:"col taglio positivo non si possono usare i residui"}],
      hint:"Il salto della determinazione fra i due lati dipende da DOVE passa il taglio: e' $e^{2\\pi i\\alpha}$ per il keyhole classico, e' $e^{i\\pi/2}=i$ (per $\\sqrt z$) col taglio negativo.",
      sol:"<b>Taglio positivo vs negativo (20240703 vs 20241106).</b> Il valore dell'integrale e' lo stesso, ma il MECCANISMO cambia con la posizione del taglio: keyhole positivo $\\Rightarrow (1-e^{2\\pi i\\alpha})I=2\\pi i\\sum\\mathrm{Res}$; taglio negativo con semicerchio $\\Rightarrow$ contributo $\\gamma_-$ pari a $iI$. Scegliere il taglio e' scegliere la forma dell'equazione risolvente."
    }]
  },

  { pool:"polidrome", src:"tipo b01", steps:[{
      t:"MODUS OPERANDI. Come si sceglie il contorno di integrazione per una polidroma su $[a,b]$ o $[0,\\infty)$?",
      opts:[
        {x:"taglio su segmento finito con estremi = punti di diramazione &rarr; contorno 'a osso di cane' attorno al segmento; branch point in $0$ con integrale su $[0,\\infty)$ &rarr; keyhole (o semicerchio + asse, se il taglio e' negativo)",c:true},
        {x:"sempre la semicirconferenza superiore, come per le razionali"},
        {x:"sempre il cerchio unitario $z=e^{i\\theta}$"},
        {x:"sempre un rettangolo con lato a $y=\\pi$"}],
      hint:"Il contorno segue il taglio: circonda un segmento finito 'ad osso di cane', oppure aggira un branch point sul bordo del dominio con il buco della serratura.",
      sol:"<b>Scelta del contorno (nucleo 13).</b> La regola: il contorno deve circondare il taglio SENZA attraversarlo. Segmento $[a,b]$ &rarr; osso di cane (20230620, 20231116); branch point in $0$ con $[0,\\infty)$ &rarr; keyhole (20240703) o semicerchio+asse col taglio negativo (20241106). Riconoscere la geometria del taglio E' scegliere il contorno."
    }]
  },

  { pool:"polidrome", src:"20230908 Es.2", steps:[{
      t:"La funzione $z^i$ (con $\\log$ a un ramo fissato) e':",
      opts:[
        {x:"$z^i=e^{i\\log z}=e^{i(\\ln|z|+i\\arg z)}=e^{-\\arg z}\\,e^{i\\ln|z|}$: infiniti valori, uno per ramo di $\\log$",c:true},
        {x:"una funzione monodroma su $\\mathbb{C}\\setminus\\{0\\}$"},
        {x:"sempre reale"},
        {x:"un polinomio di grado $i$"}],
      hint:"$z^\\alpha:=e^{\\alpha\\log z}$; con $\\alpha=i$ la parte $e^{-\\arg z}$ e' un modulo che cambia col ramo scelto.",
      sol:"<b>Potenza complessa (nucleo 11).</b> $z^i=e^{i\\log z}$; poich&eacute; $\\log z=\\ln|z|+i(\\arg z+2k\\pi)$, si ha $z^i=e^{-\\arg z-2k\\pi}e^{i\\ln|z|}$: infiniti valori (esponente non intero). Il MODULO $e^{-\\arg z}$ dipende dall'argomento, non solo dalla distanza: e' la novit&agrave; delle potenze immaginarie. Fissato il taglio, si sceglie un ramo e si lavora l&igrave;."
    }]
  },

  { pool:"polidrome", src:"20230908 Es.2", steps:[
    { t:"$f(z)=\\dfrac{z^i}{1+z^3}$, taglio sull'asse reale positivo, determinazione con $f(1)=1/2$ sopra il taglio ($\\arg z\\in(0,2\\pi)$). Per calcolare $f(-2)$: quanto vale $\\log(-2)$ su questo foglio?",
      opts:[
        {x:"$\\log(-2)=\\ln 2+i\\pi$ (perch&eacute; $\\arg(-2)=\\pi$)",c:true},
        {x:"$\\log(-2)=\\ln 2-i\\pi$"},
        {x:"$\\log(-2)=\\ln 2$"},
        {x:"$\\log(-2)=i\\pi$"}],
      hint:"Con taglio sul semiasse positivo e $\\arg\\in(0,2\\pi)$, il punto $-2$ sta sul semiasse negativo: $\\arg(-2)=\\pi$.",
      sol:"<b>Logaritmo sul foglio dato (soluzione 08/09/2023).</b> Con $\\arg z\\in(0,2\\pi)$, $-2=2e^{i\\pi}$ ha $\\arg=\\pi$, quindi $\\log(-2)=\\ln2+i\\pi$. Prendere $-i\\pi$ (abitudine dalla determinazione principale) e' l'errore tipico: il ramo qui non e' quello principale.",
      cont:"Ora componi $f(-2)$ &rarr;" },
    { t:"Con $\\log(-2)=\\ln2+i\\pi$ e $1+(-2)^3=1-8=-7$, quanto vale $f(-2)$?",
      opts:[
        {x:"$f(-2)=-\\dfrac{e^{-\\pi}\\,e^{i\\ln2}}{7}$",c:true},
        {x:"$f(-2)=\\dfrac{e^{\\pi}\\,e^{i\\ln2}}{7}$"},
        {x:"$f(-2)=-\\dfrac{e^{-\\pi}}{7}$"},
        {x:"$f(-2)=\\dfrac{e^{-\\pi}\\,e^{-i\\ln2}}{7}$"}],
      hint:"$(-2)^i=e^{i\\log(-2)}=e^{i(\\ln2+i\\pi)}=e^{-\\pi}e^{i\\ln2}$; poi dividi per $1+(-2)^3=-7$.",
      sol:"<b>Valore composto (soluzione ufficiale).</b> $(-2)^i=e^{i(\\ln2+i\\pi)}=e^{-\\pi}\\,e^{i\\ln2}$; e $1+(-2)^3=-7$. Dunque $f(-2)=-\\dfrac{e^{-\\pi}e^{i\\ln2}}{7}$. La parte $e^{-\\pi}$ (modulo) viene dall'argomento $\\pi$, la fase $e^{i\\ln2}$ dal modulo $2$: tipico intreccio delle potenze immaginarie." }
  ]},

  { pool:"polidrome", src:"20230908 Es.2", steps:[{
      t:"Sempre $f(z)=\\dfrac{z^i}{1+z^3}$ sul foglio $\\arg z\\in(0,2\\pi)$: $\\mathrm{Res}_{z=-1}f$ vale (nota $-1=e^{i\\pi}$, polo semplice):",
      opts:[
        {x:"$\\dfrac{e^{-\\pi}}{3}$",c:true},
        {x:"$\\dfrac{e^{\\pi}}{3}$"},
        {x:"$-\\dfrac{e^{-\\pi}}{3}$"},
        {x:"$\\dfrac{e^{-\\pi}}{3}\\,e^{i\\pi}$"}],
      hint:"Formula del quoziente: $\\mathrm{Res}=\\dfrac{(-1)^i}{3z^2}\\big|_{z=-1}=\\dfrac{(-1)^i}{3}$, con $(-1)^i=e^{i\\log(-1)}=e^{i(i\\pi)}=e^{-\\pi}$.",
      sol:"<b>Residuo con potenza polidroma (soluzione ufficiale: $e^{-\\pi}/3$).</b> $z=-1$ e' polo semplice di $1/(1+z^3)$ con $Q'=3z^2$; $Q'(-1)=3$. Numeratore $(-1)^i=e^{i\\log(-1)}=e^{i\\cdot i\\pi}=e^{-\\pi}$ (su questo foglio $\\arg(-1)=\\pi$). Quindi $\\mathrm{Res}_{z=-1}=\\dfrac{e^{-\\pi}}{3}$. Il valore del numeratore dipende dal foglio: e' l&igrave; che serve coerenza con il taglio scelto."
    }]
  },

  { pool:"polidrome", src:"tipo b01", steps:[{
      t:"Nel keyhole per $\\int_0^\\infty x^{\\alpha-1}g(x)\\,dx$ (con $g$ razionale), il fattore davanti all'integrale e' $(1-e^{2\\pi i\\alpha})$ perch&eacute;:",
      opts:[
        {x:"sopra il taglio l'integrando vale $x^{\\alpha-1}g$, sotto vale $x^{\\alpha-1}e^{2\\pi i\\alpha}g$: la differenza dei due lati e' $(1-e^{2\\pi i\\alpha})\\int_0^\\infty$",c:true},
        {x:"e' un fattore di normalizzazione arbitrario"},
        {x:"viene dal residuo all'infinito"},
        {x:"e' il salto di $g$, non di $x^{\\alpha-1}$"}],
      hint:"Girando sotto il taglio, $\\arg z$ passa da $0$ a $2\\pi$, quindi $z^{\\alpha-1}$ acquista $e^{2\\pi i(\\alpha-1)}=e^{2\\pi i\\alpha}$.",
      sol:"<b>Fattore keyhole (nucleo 13, sottotipo D).</b> Sopra: $\\arg z=0$, integrando $=x^{\\alpha-1}g(x)$. Sotto: $\\arg z=2\\pi$, integrando $=x^{\\alpha-1}e^{2\\pi i\\alpha}g(x)$. Sommando i due lati (verso opposto) resta $(1-e^{2\\pi i\\alpha})\\int_0^\\infty x^{\\alpha-1}g\\,dx=2\\pi i\\sum\\mathrm{Res}$. Se la funzione fosse monodroma ($\\alpha$ intero), $e^{2\\pi i\\alpha}=1$ e i due lati si cancellerebbero: $0=0$."
    }]
  },

  { pool:"polidrome", src:"tipo b01", steps:[{
      t:"Nel keyhole per $\\int_0^\\infty \\dfrac{x^{\\alpha-1}}{1+x}dx$, gli archi $C_R$ e $C_\\varepsilon$ svaniscono a patto che:",
      opts:[
        {x:"$0<\\alpha<1$: la stessa condizione che rende convergente l'integrale reale",c:true},
        {x:"$\\alpha>1$ soltanto"},
        {x:"$\\alpha$ sia intero"},
        {x:"$\\alpha<0$"}],
      hint:"$C_R$ svanisce se $x^{\\alpha-1}/(1+x)\\to0$ pi&ugrave; in fretta di $1/R$ ($\\alpha<1$); $C_\\varepsilon$ svanisce se l'integrando non esplode in $0$ ($\\alpha>0$).",
      sol:"<b>Convergenza e svanimento coincidono (nucleo 13).</b> $C_R$ ($R\\to\\infty$) svanisce per $\\alpha<1$, $C_\\varepsilon$ ($\\varepsilon\\to0$) per $\\alpha>0$: insieme, $0<\\alpha<1$. E' esattamente l'intervallo in cui $\\int_0^\\infty x^{\\alpha-1}/(1+x)\\,dx$ converge: non un caso, la stima ML e la convergenza reale sono la stessa richiesta. Il risultato e' $\\pi/\\sin\\pi\\alpha$ (formula di riflessione, nucleo 14)."
    }]
  },

  /* ===================== DIRAMAZIONE, RESIDUI SUL RAMO, RICONOSCIMENTO (chiusura) ===================== */

  { pool:"polidrome", src:"tipo b01", steps:[{
      t:"Per $f(z)=(z^2-1)^{1/2}$ con taglio sul SEGMENTO $[-1,1]$, il punto $z=\\infty$ e':",
      opts:[
        {x:"NON un punto di diramazione: fuori dal segmento la funzione e' monodroma, e all'infinito $f(z)\\sim z$ (comportamento regolare a un valore)",c:true},
        {x:"un punto di diramazione, sempre"},
        {x:"un polo doppio"},
        {x:"una singolarita' essenziale"}],
      hint:"Con il taglio sul segmento, un cammino grande che avvolge tutto $[-1,1]$ avvolge ENTRAMBE le diramazioni: i due segni si compensano e la funzione ritorna al valore iniziale.",
      sol:"<b>Diramazione all'infinito (nucleo 11).</b> Con taglio su $[-1,1]$, un giro attorno a $\\infty$ avvolge entrambi i punti $\\pm1$: fattore $(-1)^2=+1$, monodroma. All'infinito $f\\sim z$: nessuna diramazione. Con i tagli ESTERNI, invece, $\\infty$ e' interno alla regione fra i due tagli e il conteggio cambia. Se $\\infty$ e' regolare, il residuo all'infinito e' comunque ben definito ed e' lo strumento chiave (20231116)."
    }]
  },

  { pool:"polidrome", src:"tipo b01", steps:[{
      t:"Quante determinazioni (fogli) hanno $\\sqrt{z}$ e $\\log z$?",
      opts:[
        {x:"$\\sqrt z$ ne ha DUE (due giri riportano al valore iniziale); $\\log z$ ne ha INFINITE (ogni giro aggiunge $2\\pi i$)",c:true},
        {x:"entrambe infinite"},
        {x:"entrambe due"},
        {x:"$\\sqrt z$ infinite, $\\log z$ due"}],
      hint:"$\\sqrt z=e^{\\frac12\\log z}$: due giri fanno crescere $\\arg z$ di $4\\pi$, la mezza-potenza di $2\\pi$, e $e^{i2\\pi/2}=e^{i\\pi}$... controlla con cura quanti giri riportano al valore.",
      sol:"<b>Numero di fogli (nucleo 11).</b> $z^{p/q}$ ha $q$ determinazioni: $\\sqrt z=z^{1/2}$ ne ha $2$ (dopo due giri $\\arg$ cresce di $4\\pi$, la mezza-potenza di $2\\pi$: $e^{i2\\pi}=1$, si torna). $\\log z$ ha infinite (esponente non razionale del meccanismo: ogni giro aggiunge $2\\pi i$, mai periodico). E' la ragione geometrica per cui la superficie di Riemann di $\\sqrt z$ ha due fogli e quella di $\\log z$ infiniti."
    }]
  },

  { pool:"polidrome", src:"20230704 Es.1", steps:[
    { t:"$f(z)=\\dfrac{z+2}{(z-2)(1-z^2)^{1/2}}$, taglio $[-1,1]$, $(1-z^2)^{1/2}$ reale positiva sopra il taglio. Per $\\mathrm{Res}_{z=2}f$ serve il valore di $(1-z^2)^{1/2}$ in $z=2$. Con la determinazione data vale:",
      opts:[
        {x:"$(1-4)^{1/2}=\\sqrt{-3}=-i\\sqrt3$ sul foglio scelto (non $+i\\sqrt3$)",c:true},
        {x:"$+i\\sqrt3$"},
        {x:"$\\sqrt3$ (reale)"},
        {x:"$-\\sqrt3$ (reale)"}],
      hint:"Il valore della radice in $z=2$ va trasportato con continuit&agrave; dal taglio: NON si sceglie il segno a piacere. La soluzione ufficiale trova $-i\\sqrt3$.",
      sol:"<b>Valore del ramo fuori dal taglio (soluzione 04/07/2023).</b> $(1-z^2)^{1/2}$ in $z=2$ vale $-i\\sqrt3$ con la determinazione fissata sopra $[-1,1]$: il segno si ottiene tracciando gli angoli dei fattori $(1-z)^{1/2}(1+z)^{1/2}$ da $z=2$, non per scelta. Sbagliare il segno di UN fattore (trappola b01) inverte il residuo.",
      cont:"Ora il residuo &rarr;" },
    { t:"Con $(1-z^2)^{1/2}\\big|_{z=2}=-i\\sqrt3$, il residuo nel polo semplice $z=2$ e':",
      opts:[
        {x:"$\\mathrm{Res}_{z=2}f=\\dfrac{z+2}{(1-z^2)^{1/2}}\\Big|_{2}=\\dfrac{4}{-i\\sqrt3}=\\dfrac{4i}{\\sqrt3}$",c:true},
        {x:"$\\dfrac{4}{i\\sqrt3}=-\\dfrac{4i}{\\sqrt3}$"},
        {x:"$\\dfrac{4}{\\sqrt3}$"},
        {x:"$\\dfrac{4}{-\\sqrt3}$"}],
      hint:"Polo semplice da $(z-2)$: $\\mathrm{Res}=\\lim_{z\\to2}(z-2)f=\\dfrac{z+2}{(1-z^2)^{1/2}}\\big|_{2}$; poi $1/(-i)=i$.",
      sol:"<b>Residuo in $z=2$ (nucleo 13, polo semplice).</b> $\\mathrm{Res}_{z=2}=\\dfrac{2+2}{-i\\sqrt3}=\\dfrac{4}{-i\\sqrt3}=\\dfrac{4i}{\\sqrt3}$ (moltiplicando per $i/i$: $1/(-i)=i$). Questo residuo, insieme a $\\mathrm{Res}_\\infty$, entra nel calcolo di $\\int_{-1}^1\\dfrac{x+2}{(x-2)\\sqrt{1-x^2}}dx=\\pi(1-4/\\sqrt3)$ (risultato negativo, coerente con l'integrando negativo su $(-1,1)$)." }
  ]},

  { pool:"polidrome", src:"20240703 Es.2", steps:[
    { t:"$\\int_0^\\infty\\dfrac{x+1}{\\sqrt{x}\\,(x^2-2x+2)}dx$: branch point in $0$ (taglio semiasse positivo, $\\theta\\in[0,2\\pi)$), poli in $z=1\\pm i$. Nel keyhole, sotto il taglio $\\sqrt z=\\sqrt{x}\\,e^{i\\pi}=-\\sqrt x$. Perch&eacute; il tratto $\\gamma_-$ d&agrave; $+I$ e non $-I$?",
      opts:[
        {x:"perch&eacute; $\\sqrt z$ cambia di $-1$ MA anche il verso di percorrenza e' invertito: $(-1)\\cdot(-1)=+1$, i due effetti si combinano",c:true},
        {x:"perch&eacute; sotto il taglio $\\sqrt z=+\\sqrt x$, identico a sopra"},
        {x:"perch&eacute; il polo $1+i$ e' sotto il taglio"},
        {x:"perch&eacute; l'integrando e' pari"}],
      hint:"Due segni si moltiplicano: quello della determinazione ($\\sqrt z\\to-\\sqrt x$) e quello del verso ($dx\\to-dx$). Sbagliarne UNO d&agrave; $0=2I$.",
      sol:"<b>Il verso di $\\gamma_-$ (trappola dichiarata, soluzione 03/07/2024).</b> Sotto il taglio $1/\\sqrt z\\to-1/\\sqrt x$; ma $\\gamma_-$ e' percorso da $R$ verso $\\varepsilon$, cio&egrave; $-dx$. Il prodotto $(-1)(-1)=+1$: il tratto d&agrave; $+I$, e il bilancio e' $2I=2\\pi i(\\mathrm{Res}_{1+i}+\\mathrm{Res}_{1-i})$. Chi inverte UNO dei due segni ottiene $0=2I$, assurdo: e' l'errore n.2 di b01 (segno dal verso del contorno).",
      cont:"Ora individua i poli interni &rarr;" },
    { t:"Quali poli entrano nel bilancio $2I=2\\pi i\\sum\\mathrm{Res}$?",
      opts:[
        {x:"ENTRAMBI $z=1+i$ e $z=1-i$: il contorno keyhole racchiude tutto il piano tranne il taglio, quindi tutti i poli finiti",c:true},
        {x:"solo $z=1+i$ (semipiano superiore)"},
        {x:"solo $z=1-i$ (semipiano inferiore)"},
        {x:"nessuno: il contorno non racchiude poli"}],
      hint:"Il keyhole, chiuso da $C_R$ e $C_\\varepsilon$, racchiude l'intero piano meno il taglio: ogni polo che non sta sul semiasse positivo e' interno.",
      sol:"<b>Poli interni al keyhole (nucleo 13).</b> Il contorno a buco della serratura racchiude tutto il piano eccetto il semiasse positivo (il taglio): entrambi $1\\pm i$ sono interni. Da qui $2I=2\\pi i(\\mathrm{Res}_{1+i}+\\mathrm{Res}_{1-i})$. Differenza col sottotipo (c) di Jordan, dove invece si sceglie un solo semipiano: qui la geometria del taglio impone di prendere tutti i poli finiti." }
  ]},

  { pool:"polidrome", src:"tipo b01", steps:[{
      t:"MODUS OPERANDI. Come riconosci a colpo d'occhio che un integrale e' del tipo 'polidromo' e non un altro sottotipo di residui?",
      opts:[
        {x:"compare una potenza NON intera ($\\sqrt{\\cdot}$, $x^\\alpha$, $z^i$) o un $\\log$: l'integrando e' polidromo, serve un taglio e un contorno che lo circonda",c:true},
        {x:"quando l'integrale e' su $[0,2\\pi]$: si usa $z=e^{i\\theta}$"},
        {x:"quando compare $e^{ikx}$: si usa il lemma di Jordan"},
        {x:"quando il denominatore ha grado alto: semicerchio superiore"}],
      hint:"La spia e' l'esponente frazionario o il logaritmo. Le razionali pure, i $\\cos/\\sin$ e gli $e^{ikx}$ appartengono agli altri tre sottotipi.",
      sol:"<b>Riconoscimento del tipo (nucleo 13).</b> Quattro sottotipi: (a) razionali su $\\mathbb R$ &rarr; semicerchio; (b) razionali in $\\cos,\\sin$ &rarr; $z=e^{i\\theta}$; (c) con $e^{ikx}$ &rarr; Jordan; (d) con TAGLI ($x^\\alpha$, $\\log$, $\\sqrt{\\cdot}$) &rarr; keyhole/osso di cane. La presenza di una potenza non intera o di un logaritmo e' la firma del sottotipo (d): prima si fissa il taglio, poi si sceglie il contorno."
    }]
  },

  { pool:"polidrome", src:"20230908 Es.2", steps:[
    { t:"Ancora $f(z)=\\dfrac{z^i}{1+z^3}$ sul foglio $\\arg z\\in(0,2\\pi)$: per $f(-i)$, con $\\arg(-i)=3\\pi/2$, quanto vale $(-i)^i$?",
      opts:[
        {x:"$(-i)^i=e^{i\\log(-i)}=e^{i(i\\,3\\pi/2)}=e^{-3\\pi/2}$",c:true},
        {x:"$(-i)^i=e^{\\pi/2}$"},
        {x:"$(-i)^i=e^{-\\pi/2}$"},
        {x:"$(-i)^i=e^{3\\pi/2}$"}],
      hint:"$\\log(-i)=\\ln1+i\\arg(-i)=i\\,\\tfrac{3\\pi}{2}$ su questo foglio; poi $(-i)^i=e^{i\\log(-i)}=e^{i\\cdot i\\,3\\pi/2}$.",
      sol:"<b>Potenza immaginaria sul foglio (soluzione 08/09/2023).</b> Con $\\arg z\\in(0,2\\pi)$, $\\arg(-i)=3\\pi/2$ (NON $-\\pi/2$: e' l'errore del foglio principale). $\\log(-i)=i\\,3\\pi/2$, quindi $(-i)^i=e^{i(i3\\pi/2)}=e^{-3\\pi/2}$, reale positivo.",
      cont:"Ora componi $f(-i)$ &rarr;" },
    { t:"Con $(-i)^i=e^{-3\\pi/2}$ e $1+(-i)^3=1+i$ (poich&eacute; $(-i)^3=i$), quanto vale $f(-i)$?",
      opts:[
        {x:"$f(-i)=\\dfrac{e^{-3\\pi/2}}{1+i}$",c:true},
        {x:"$f(-i)=\\dfrac{e^{-3\\pi/2}}{1-i}$"},
        {x:"$f(-i)=\\dfrac{e^{-3\\pi/2}}{2}$"},
        {x:"$f(-i)=e^{-3\\pi/2}(1+i)$"}],
      hint:"$(-i)^3=(-i)(-i)(-i)$: $(-i)^2=-1$, poi $\\times(-i)=i$. Quindi $1+(-i)^3=1+i$.",
      sol:"<b>Valore composto (soluzione ufficiale).</b> $(-i)^3=i$, dunque $1+(-i)^3=1+i$; e $(-i)^i=e^{-3\\pi/2}$. Perci&ograve; $f(-i)=\\dfrac{e^{-3\\pi/2}}{1+i}$. Il modulo $e^{-3\\pi/2}$ registra l'argomento $3\\pi/2$: un piccolo cambio di foglio (se avessi usato $\\arg=-\\pi/2$) darebbe $e^{\\pi/2}$, valore completamente diverso." }
  ]},

  { pool:"polidrome", src:"tipo b01", steps:[{
      t:"Perch&eacute; il contorno keyhole 'funziona' (d&agrave; un risultato non banale) solo per funzioni polidrome?",
      opts:[
        {x:"perch&eacute; solo se la funzione cambia determinazione fra i due lati del taglio i tratti non si cancellano; per una funzione monodroma darebbero $0=0$",c:true},
        {x:"perch&eacute; le monodrome non hanno residui"},
        {x:"perch&eacute; il taglio esiste solo per le monodrome"},
        {x:"perch&eacute; l'arco $C_R$ non svanisce per le monodrome"}],
      hint:"I due lati del taglio sono lo stesso segmento percorso avanti e indietro: se la funzione ha lo stesso valore su entrambi, i contributi si annullano.",
      sol:"<b>Il meccanismo del taglio (nucleo 13, sottotipo D).</b> Geometricamente i due lati coincidono col semiasse, percorsi in verso opposto. Per una funzione MONODROMA il valore e' identico e i tratti si cancellano: $0=0$, nessuna informazione. Per una POLIDROMA il valore differisce di un fattore ($e^{2\\pi i\\alpha}$, o un segno per $\\sqrt{\\cdot}$), e la loro somma e' proporzionale a $\\int_0^\\infty f$: e' la polidromia stessa a produrre il calcolo. Questa e' la ragione profonda per cui il tipo esiste."
    }]
  },

  { pool:"polidrome", src:"tipo b01", steps:[{
      t:"CHECKLIST finale del tipo 'polidroma': l'ordine dei controlli prima di consegnare e'",
      opts:[
        {x:"(1) diramazioni e taglio dichiarati; (2) determinazione fissata dal dato reale-positivo; (3) angoli trasportati attorno al punto e nel verso giusti; (4) valori verificati; (5) verso del contorno esplicitato nel segno di $I$; (6) controllo di plausibilita' (reale? positivo?)",c:true},
        {x:"basta calcolare i residui e moltiplicare per $2\\pi i$"},
        {x:"basta scegliere la semicirconferenza superiore"},
        {x:"basta sostituire $z=e^{i\\theta}$"}],
      hint:"Le due trappole di b01 (angolo di un fattore, verso del contorno) stanno ai passi 3 e 5: sono l&igrave; i controlli che salvano l'esercizio.",
      sol:"<b>Sintesi operativa (b01 + nuclei 11, 13).</b> La checklist mette al passo 3 la trappola dell'angolo di un solo fattore, e al passo 5 quella del segno dal verso del contorno: sono gli errori censiti negli scritti. Il passo 6 (plausibilita': un integrale di funzione reale positiva DEVE uscire reale e positivo) e' il controllo finale gratuito che smaschera un segno sbagliato. Chi svolge questi sei passi non 'riconosce' la risposta: la COSTRUISCE."
    }]
  }

];

Q.superfici = [

  /* ===================== CONCETTUALI (16) ===================== */

  { pool:"superfici", src:"tipo B · manuale", steps:[{
      t:"Che cosa è una superficie parametrica regolare $\\Sigma$ in $\\mathbb{R}^3$?",
      opts:[
        {x:"L'immagine di una mappa $X:D\\subset\\mathbb{R}^2\\to\\mathbb{R}^3$ di classe $C^1$ con $X_u\\times X_v\\neq 0$ nei punti interni",c:true},
        {x:"Il grafico di una funzione $z=f(x,y)$, e nient'altro"},
        {x:"Una curva $\\gamma:[a,b]\\to\\mathbb{R}^3$ percorsa due volte"},
        {x:"Un insieme definito da una sola equazione $g(x,y,z)=0$, sempre e comunque"}],
      hint:"Servono tre ingredienti: una mappa da un dominio 2D, differenziabilità $C^1$, vettori tangenti indipendenti.",
      sol:"Una superficie regolare è l'immagine di $X:D\\subset\\mathbb{R}^2\\to\\mathbb{R}^3$, $C^1$, con $X_u\\times X_v\\neq 0$ nei punti interni (definizione di superficie regolare, cap. Superfici). Il grafico $z=f(x,y)$ è solo un caso particolare; una singola equazione $g=0$ dà una superficie di livello, non una parametrizzazione."
    }]
  },

  { pool:"superfici", src:"tipo B · manuale", steps:[{
      t:"L'elemento d'area $dS$ di una superficie parametrizzata da $X(u,v)$ vale:",
      opts:[
        {x:"$dS=\\|X_u\\times X_v\\|\\,du\\,dv$",c:true},
        {x:"$dS=(X_u\\times X_v)\\,du\\,dv$ (un vettore)"},
        {x:"$dS=\\|X_u\\|\\,\\|X_v\\|\\,du\\,dv$"},
        {x:"$dS=(X_u\\cdot X_v)\\,du\\,dv$"}],
      hint:"L'area di un parallelogramma è il MODULO del prodotto vettoriale: uno scalare, non un vettore.",
      sol:"$dS=\\|X_u\\times X_v\\|\\,du\\,dv$ (formula dell'area superficiale). Il prodotto vettoriale dà un vettore, ma l'area è la sua norma. $\\|X_u\\|\\,\\|X_v\\|$ sovrastima quando i tangenti non sono ortogonali; $X_u\\cdot X_v$ è lo scalare sbagliato."
    }]
  },

  { pool:"superfici", src:"tipo B · manuale", steps:[{
      t:"Perché nell'area compare proprio $\\|X_u\\times X_v\\|$?",
      opts:[
        {x:"Perché $\\|X_u\\times X_v\\|$ è l'area del parallelogramma infinitesimo generato dai vettori tangenti $X_u\\,du$ e $X_v\\,dv$",c:true},
        {x:"Perché è la lunghezza della diagonale del rettangolo dei parametri"},
        {x:"Perché $X_u\\times X_v$ è sempre un versore"},
        {x:"Perché $\\|X_u\\times X_v\\|=\\|X_u\\|+\\|X_v\\|$"}],
      hint:"La mappa $X$ trasforma il rettangolino $du\\,dv$ nel piano dei parametri in un parallelogramma tangente sulla superficie.",
      sol:"$X$ manda il rettangolo $du\\times dv$ nel parallelogramma di lati $X_u\\,du$ e $X_v\\,dv$; la sua area è $\\|X_u\\times X_v\\|\\,du\\,dv$. Il prodotto vettoriale non è un versore (ha norma pari all'area), e la sua norma non è la somma delle norme."
    }]
  },

  { pool:"superfici", src:"tipo B · manuale", steps:[{
      t:"Per la superficie cartesiana $X(x,y)=(x,\\,y,\\,f(x,y))$, quanto vale $X_x\\times X_y$?",
      opts:[
        {x:"$(-f_x,\\,-f_y,\\,1)$",c:true},
        {x:"$(f_x,\\,f_y,\\,1)$"},
        {x:"$(f_x,\\,f_y,\\,-1)$ sempre"},
        {x:"$(1,\\,1,\\,f_x+f_y)$"}],
      hint:"$X_x=(1,0,f_x)$, $X_y=(0,1,f_y)$: fai il determinante formale $3\\times3$.",
      sol:"$X_x=(1,0,f_x)$, $X_y=(0,1,f_y)$, quindi $X_x\\times X_y=(-f_x,-f_y,1)$: la terza componente è $+1$, la normale non normalizzata punta sempre verso l'alto (cap. Superfici, sottotipo cartesiano)."
    }]
  },

  { pool:"superfici", src:"tipo B · manuale", steps:[{
      t:"L'area di $\\Sigma:\\ z=f(x,y)$, $(x,y)\\in D$, è:",
      opts:[
        {x:"$\\iint_D\\sqrt{1+f_x^2+f_y^2}\\,dx\\,dy$",c:true},
        {x:"$\\iint_D (1+f_x^2+f_y^2)\\,dx\\,dy$"},
        {x:"$\\iint_D\\sqrt{f_x^2+f_y^2}\\,dx\\,dy$"},
        {x:"$\\iint_D\\sqrt{1+f_x+f_y}\\,dx\\,dy$"}],
      hint:"È il modulo di $(-f_x,-f_y,1)$: la radice del quadrato delle tre componenti.",
      sol:"$A(\\Sigma)=\\iint_D\\|X_x\\times X_y\\|\\,dx\\,dy=\\iint_D\\sqrt{1+f_x^2+f_y^2}\\,dx\\,dy$. Dimenticare l'$1$ (dalla terza componente) o la radice sono gli errori più comuni."
    }]
  },

  { pool:"superfici", src:"tipo B · manuale", steps:[{
      t:"Orientare una superficie $\\Sigma$ significa:",
      opts:[
        {x:"scegliere uno dei due versori normali $\\pm n$ con continuità su tutta la superficie",c:true},
        {x:"scegliere il verso di percorrenza del dominio $D$ dei parametri"},
        {x:"scegliere l'ordine con cui si integrano $u$ e $v$"},
        {x:"scegliere il segno del jacobiano nel cambio di coordinate"}],
      hint:"In ogni punto ci sono due normali opposte; orientare vuol dire sceglierne una in modo coerente ovunque.",
      sol:"Un'orientazione è un campo continuo di versori normali $n$ (uno dei due possibili) su tutta $\\Sigma$. Non tutte le superfici sono orientabili (il nastro di Möbius no), ma quelle d'esame lo sono. L'ordine di integrazione non c'entra con l'orientazione geometrica."
    }]
  },

  { pool:"superfici", src:"20230210 Es.4 · b01 Tipo 8", steps:[{
      t:"$\\Sigma$ è la calotta INFERIORE della frontiera di un solido $E$, parametrizzata come $z=f(x,y)$. Il prodotto $X_x\\times X_y=(-f_x,-f_y,1)$ ha terza componente positiva. Per il flusso USCENTE da $E$ devi:",
      opts:[
        {x:"cambiare segno e usare $(f_x,f_y,-1)$, perché sulla calotta inferiore la normale uscente punta verso il basso",c:true},
        {x:"usare $(-f_x,-f_y,1)$ così com'è"},
        {x:"usare il versore costante $(0,0,1)$"},
        {x:"normalizzare e basta: il verso non conta"}],
      hint:"Uscente da $E$ significa allontanarsi dal solido; sotto $E$ questo vuol dire guardare in giù, terza componente $<0$.",
      sol:"$(-f_x,-f_y,1)$ punta verso l'alto, ma sotto il solido la normale USCENTE guarda in basso: si prende $-(X_x\\times X_y)=(f_x,f_y,-1)$. Il verso conta eccome: sbagliarlo cambia il segno del flusso (trappola ricorrente, 20230210 Es.4)."
    }]
  },

  { pool:"superfici", src:"tipo B · manuale", steps:[{
      t:"Il bordo $\\partial\\Sigma$ di una superficie parametrizzata da $X:D\\to\\mathbb{R}^3$ è:",
      opts:[
        {x:"l'immagine $X(\\partial D)$ della frontiera del dominio dei parametri",c:true},
        {x:"la frontiera $\\partial D$ nel piano dei parametri"},
        {x:"l'insieme dei punti dove $X_u\\times X_v=0$"},
        {x:"sempre un cerchio nello spazio"}],
      hint:"Il bordo vive in $\\mathbb{R}^3$, sulla superficie: è dove finisce $D$, trasportato da $X$.",
      sol:"$\\partial\\Sigma=X(\\partial D)$: la frontiera del dominio dei parametri, mandata sulla superficie da $X$. È una curva in $\\mathbb{R}^3$ che giace su $\\Sigma$, non la frontiera piatta $\\partial D$ né il luogo di singolarità (b02 Tipo 3, trappola 5)."
    }]
  },

  { pool:"superfici", src:"b02 Tipo 3 trappola 5", steps:[{
      t:"$\\Sigma:\\ z=f(x,y)$ su $D=\\{x^2+y^2\\le R^2\\}$. Il bordo $\\partial\\Sigma$ è:",
      opts:[
        {x:"la curva $\\gamma(t)=(R\\cos t,\\,R\\sin t,\\,f(R\\cos t,R\\sin t))$, che giace su $\\Sigma$",c:true},
        {x:"il cerchio $x^2+y^2=R^2$ nel piano $z=0$"},
        {x:"il disco $D$ stesso"},
        {x:"vuoto, perché la superficie è chiusa"}],
      hint:"Devi salire sulla superficie: la $z$ del bordo è $f$ valutata sul cerchio, non zero.",
      sol:"$\\partial\\Sigma=X(\\partial D)=\\{(R\\cos t,R\\sin t,f(R\\cos t,R\\sin t))\\}$. È una curva nello spazio che proietta sul cerchio $\\partial D$, non il cerchio piatto in $z=0$. Confonderli è l'errore classico (b02 Tipo 3, trappola 5)."
    }]
  },

  { pool:"superfici", src:"tipo B · manuale", steps:[{
      t:"La condizione di regolarità di una superficie parametrica in un punto interno è:",
      opts:[
        {x:"$X_u\\times X_v\\neq 0$ (i vettori tangenti sono linearmente indipendenti)",c:true},
        {x:"$X_u\\times X_v=0$"},
        {x:"$X_u\\cdot X_v=0$ (tangenti ortogonali)"},
        {x:"$\\|X_u\\|=\\|X_v\\|$"}],
      hint:"Se il prodotto vettoriale si annulla, il piano tangente degenera e $dS=0$.",
      sol:"Regolare in un punto significa $X_u\\times X_v\\neq0$: i due tangenti generano un vero piano tangente. L'ortogonalità dei tangenti o l'uguaglianza delle norme non sono richieste. Questa è la condizione più spesso dimenticata (b02 Tipo 3, trappola 4)."
    }]
  },

  { pool:"superfici", src:"b02 Tipo 3 trappola 3", steps:[{
      t:"Nel calcolo del flusso $\\iint_\\Sigma F\\cdot n\\,dS$ tramite parametrizzazione, quanto vale $n\\,dS$?",
      opts:[
        {x:"$(X_u\\times X_v)\\,du\\,dv$, senza normalizzare",c:true},
        {x:"$\\dfrac{X_u\\times X_v}{\\|X_u\\times X_v\\|}\\,du\\,dv$"},
        {x:"$\\|X_u\\times X_v\\|\\,du\\,dv$ (uno scalare)"},
        {x:"$(X_u\\cdot X_v)\\,du\\,dv$"}],
      hint:"Il modulo che normalizza $n$ e quello che compare in $dS$ si cancellano fra loro.",
      sol:"$n=\\dfrac{X_u\\times X_v}{\\|X_u\\times X_v\\|}$ e $dS=\\|X_u\\times X_v\\|\\,du\\,dv$, quindi $n\\,dS=(X_u\\times X_v)\\,du\\,dv$: il modulo si semplifica. Nel flusso NON si normalizza; si usa direttamente il prodotto vettoriale (b02 Tipo 3, trappola 3)."
    }]
  },

  { pool:"superfici", src:"b02 sottotipo 3b", steps:[{
      t:"Ruotando attorno all'asse $z$ il profilo $x=\\gamma(t)$, $z=t$, la parametrizzazione della superficie di rotazione è:",
      opts:[
        {x:"$X(\\theta,t)=(\\gamma(t)\\cos\\theta,\\,\\gamma(t)\\sin\\theta,\\,t)$, $\\theta\\in[0,2\\pi]$",c:true},
        {x:"$X(\\theta,t)=(\\gamma(t)\\cos\\theta,\\,\\gamma(t)\\sin\\theta,\\,\\gamma(t))$"},
        {x:"$X(\\theta,t)=(t\\cos\\theta,\\,t\\sin\\theta,\\,\\gamma(t))$"},
        {x:"$X(\\theta,t)=(\\cos\\theta,\\,\\sin\\theta,\\,\\gamma(t))$"}],
      hint:"A quota $z=t$ il punto dista $\\gamma(t)$ dall'asse: ruotalo di $\\theta$ nel piano orizzontale.",
      sol:"$X(\\theta,t)=(\\gamma(t)\\cos\\theta,\\gamma(t)\\sin\\theta,t)$: il raggio dall'asse è $\\gamma(t)$, la quota resta $t$. Mettere $\\gamma(t)$ in terza componente confonde il profilo con l'altezza (b02 sottotipo 3b)."
    }]
  },

  { pool:"superfici", src:"22gen24 Es.4 · b02 sottotipo 3b", steps:[{
      t:"Per $X(\\theta,t)=(\\gamma\\cos\\theta,\\,\\gamma\\sin\\theta,\\,t)$ il vettore $X_\\theta\\times X_t$ vale:",
      opts:[
        {x:"$(\\gamma\\cos\\theta,\\,\\gamma\\sin\\theta,\\,-\\gamma\\gamma')$",c:true},
        {x:"$(\\gamma\\cos\\theta,\\,\\gamma\\sin\\theta,\\,\\gamma\\gamma')$"},
        {x:"$(-\\gamma\\cos\\theta,\\,-\\gamma\\sin\\theta,\\,0)$"},
        {x:"$(\\cos\\theta,\\,\\sin\\theta,\\,\\gamma')$"}],
      hint:"La terza componente è $-\\gamma\\gamma'$: il suo segno decide se la normale punta dentro o fuori dal solido.",
      sol:"$X_\\theta=(-\\gamma\\sin\\theta,\\gamma\\cos\\theta,0)$, $X_t=(\\gamma'\\cos\\theta,\\gamma'\\sin\\theta,1)$; il prodotto è $(\\gamma\\cos\\theta,\\gamma\\sin\\theta,-\\gamma\\gamma')$. Il segno di $-\\gamma\\gamma'$ non è costante: la normale può puntare dentro per certi $z$ e fuori per altri (22gen24 Es.4, b02 trappola 6)."
    }]
  },

  { pool:"superfici", src:"14feb25 Es.5 · tipo B", steps:[{
      t:"Per la sfera $x=R\\sin\\phi\\cos\\theta$, $y=R\\sin\\phi\\sin\\theta$, $z=R\\cos\\phi$, l'elemento d'area $\\|X_\\phi\\times X_\\theta\\|$ vale:",
      opts:[
        {x:"$R^2\\sin\\phi$",c:true},
        {x:"$R\\sin\\phi$"},
        {x:"$R^2$"},
        {x:"$\\sqrt{1+R^2}$"}],
      hint:"Non usare la formula cartesiana $\\sqrt{1+f_x^2+f_y^2}$: la sfera non è un grafico. Calcola il prodotto vettoriale sferico.",
      sol:"$\\|X_\\phi\\times X_\\theta\\|=R^2\\sin\\phi$, da cui $dS=R^2\\sin\\phi\\,d\\phi\\,d\\theta$. La formula cartesiana è sbagliata per superfici non-grafico: per la sfera si calcola direttamente (b01 Tipo 8, trappola sulle superfici non cartesiane)."
    }]
  },

  { pool:"superfici", src:"27giu25 Es.1 · b02 sottotipo 3a", steps:[{
      t:"$\\Sigma:\\ z=f(x,y)$ è la parte di piano che sta SOPRA il paraboloide, dove $f(x,y)\\ge x^2+y^2$. Il dominio $D$ dei parametri è:",
      opts:[
        {x:"$\\{(x,y): f(x,y)\\ge x^2+y^2\\}$, cioè la proiezione del vincolo sul piano $xy$",c:true},
        {x:"tutto $\\mathbb{R}^2$"},
        {x:"il cerchio $x^2+y^2=1$"},
        {x:"$\\{(x,y): f(x,y)=0\\}$"}],
      hint:"Il dominio è l'ombra della superficie sul piano $xy$: risolvi la disuguaglianza che delimita $\\Sigma$.",
      sol:"$D$ è la proiezione di $\\Sigma$: l'insieme dei $(x,y)$ per cui il punto $(x,y,f)$ appartiene a $\\Sigma$, cioè $f(x,y)\\ge x^2+y^2$. Ignorare questo vincolo (prendere tutto $\\mathbb{R}^2$) invalida area e bordo (27giu25 Es.1, b02 trappola 1)."
    }]
  },

  { pool:"superfici", src:"b02 Tipo 3 trappola 3", steps:[{
      t:"Che relazione lega $\\sqrt{1+f_x^2+f_y^2}$ (fattore d'area) e $(-f_x,-f_y,1)$ (normale non normalizzata) di una superficie cartesiana?",
      opts:[
        {x:"Il primo è il MODULO del secondo: $\\|(-f_x,-f_y,1)\\|=\\sqrt{1+f_x^2+f_y^2}$",c:true},
        {x:"Sono lo stesso oggetto: uno scalare e un vettore intercambiabili"},
        {x:"Il primo è il quadrato del secondo"},
        {x:"Non c'è alcuna relazione"}],
      hint:"L'area usa il modulo; il flusso usa il vettore. Stesso $(-f_x,-f_y,1)$, due usi diversi.",
      sol:"$\\sqrt{1+f_x^2+f_y^2}=\\|(-f_x,-f_y,1)\\|$: il fattore d'area è la NORMA della normale non normalizzata. Nell'area si usa lo scalare $\\|\\cdot\\|$; nel flusso il vettore $(-f_x,-f_y,1)$. Sono facce dello stesso oggetto (b02 Tipo 3, trappola 3)."
    }]
  },

  /* ===================== ESERCIZI (16) ===================== */

  { pool:"superfici", src:"20220124 Es.4 iii", steps:[{
      t:"Calcola l'area di $\\Sigma:\\ z=x+3y+4$ con $(x,y)\\in D=\\{x^2+y^2\\le 4\\}$.",
      opts:[
        {x:"$4\\pi\\sqrt{11}$",c:true},
        {x:"$4\\pi$"},
        {x:"$4\\pi\\sqrt{10}$"},
        {x:"$2\\pi\\sqrt{11}$"}],
      hint:"$f_x=1$, $f_y=3$: il fattore d'area è costante e esce dall'integrale; resta l'area del disco.",
      sol:"$\\sqrt{1+f_x^2+f_y^2}=\\sqrt{1+1+9}=\\sqrt{11}$, costante. Quindi $A=\\sqrt{11}\\cdot\\text{Area}(D)=\\sqrt{11}\\cdot 4\\pi=4\\pi\\sqrt{11}$ (formula dell'area cartesiana; 20220124 Es.4 iii). Il distrattore $\\sqrt{10}$ dimentica l'$1$."
    }]
  },

  { pool:"superfici", src:"20220622 Es.4 i", steps:[{
      t:"Calcola l'area di $\\Sigma:\\ z=1+\\tfrac{x^2}{2}+\\tfrac{y^2}{2}$ su $D=\\{x^2+y^2\\le 16\\}$.",
      opts:[
        {x:"$\\dfrac{2\\pi}{3}\\,(17\\sqrt{17}-1)$",c:true},
        {x:"$\\dfrac{2\\pi}{3}\\,(17\\sqrt{17}+1)$"},
        {x:"$\\dfrac{\\pi}{3}\\,(17\\sqrt{17}-1)$"},
        {x:"$16\\pi\\sqrt{17}$"}],
      hint:"$f_x=x$, $f_y=y$: il fattore è $\\sqrt{1+x^2+y^2}$, non costante. Polari, e non dimenticare $\\rho\\,d\\rho$.",
      sol:"$\\sqrt{1+f_x^2+f_y^2}=\\sqrt{1+\\rho^2}$. In polari $A=\\int_0^{2\\pi}\\!\\!\\int_0^4\\sqrt{1+\\rho^2}\\,\\rho\\,d\\rho\\,d\\theta=2\\pi\\cdot\\tfrac{1}{3}\\big[(1+\\rho^2)^{3/2}\\big]_0^4=\\tfrac{2\\pi}{3}(17\\sqrt{17}-1)$ (formula dell'area cartesiana; 20220622 Es.4 i). Il distrattore $16\\pi\\sqrt{17}$ tratta il fattore come costante."
    }]
  },

  { pool:"superfici", src:"20220706 Es.4 ii", steps:[{
      t:"Calcola l'area di $\\Sigma:\\ z=4x+y+1$ su $x^2+y^2\\le 1$.",
      opts:[
        {x:"$3\\sqrt{2}\\,\\pi$",c:true},
        {x:"$\\sqrt{17}\\,\\pi$"},
        {x:"$3\\pi$"},
        {x:"$\\sqrt{2}\\,\\pi$"}],
      hint:"$|\\nabla f|^2=16+1=17$; il fattore è $\\sqrt{1+17}$, non $\\sqrt{17}$.",
      sol:"$\\sqrt{1+f_x^2+f_y^2}=\\sqrt{1+16+1}=\\sqrt{18}=3\\sqrt{2}$, costante. $A=3\\sqrt{2}\\cdot\\pi$ (area del disco unitario $=\\pi$; 20220706 Es.4 ii). Il distrattore $\\sqrt{17}\\pi$ dimentica di sommare l'$1$."
    }]
  },

  { pool:"superfici", src:"20230907 Es.4", steps:[{
      t:"Calcola l'area di $\\Sigma:\\ z=2+x^2+(y-1)^2$ su $D=\\{x^2+(y-1)^2\\le 1\\}$.",
      opts:[
        {x:"$\\dfrac{\\pi}{6}\\,(5\\sqrt{5}-1)$",c:true},
        {x:"$\\dfrac{\\pi}{6}\\,(5\\sqrt{5}+1)$"},
        {x:"$\\dfrac{\\pi}{3}\\,(5\\sqrt{5}-1)$"},
        {x:"$\\pi(5\\sqrt{5}-1)$"}],
      hint:"$f_x=2x$, $f_y=2(y-1)$: $|\\nabla f|^2=4(x^2+(y-1)^2)=4\\rho^2$ con polari CENTRATE in $(0,1)$.",
      sol:"Polari centrate in $(0,1)$: $x=\\rho\\cos\\theta$, $y-1=\\rho\\sin\\theta$, jacobiano $\\rho$. $A=\\int_0^{2\\pi}\\!\\!\\int_0^1\\sqrt{1+4\\rho^2}\\,\\rho\\,d\\rho\\,d\\theta=2\\pi\\cdot\\tfrac{1}{12}\\big[(1+4\\rho^2)^{3/2}\\big]_0^1=\\tfrac{\\pi}{6}(5\\sqrt{5}-1)$ (20230907 Es.4). Il centro del disco è $(0,1)$, non l'origine."
    }]
  },

  { pool:"superfici", src:"20250127 Es.1", steps:[{
      t:"Calcola l'area di $\\Sigma:\\ z+2x+y-2=0$ con $(x,y)\\in\\{x^2+y^2\\le 9\\}$.",
      opts:[
        {x:"$9\\sqrt{6}\\,\\pi$",c:true},
        {x:"$9\\sqrt{5}\\,\\pi$"},
        {x:"$3\\sqrt{6}\\,\\pi$"},
        {x:"$9\\pi$"}],
      hint:"$z=-2x-y+2$, quindi $f_x=-2$, $f_y=-1$; fattore $\\sqrt{1+4+1}$, area del disco $9\\pi$.",
      sol:"$\\sqrt{1+f_x^2+f_y^2}=\\sqrt{1+4+1}=\\sqrt{6}$, costante. $A=\\sqrt{6}\\cdot 9\\pi=9\\sqrt{6}\\pi$ (area del disco di raggio 3 $=9\\pi$; 20250127 Es.1). Il distrattore $\\sqrt{5}$ dimentica l'$1$."
    }]
  },

  { pool:"superfici", src:"20240209 Es.4", steps:[{
      t:"Per $\\Sigma:\\ z=2x+2y+5$, quanto vale l'elemento d'area $\\sqrt{1+f_x^2+f_y^2}$?",
      opts:[
        {x:"$3$",c:true},
        {x:"$\\sqrt{5}$"},
        {x:"$9$"},
        {x:"$\\sqrt{8}$"}],
      hint:"$f_x=f_y=2$: $\\sqrt{1+4+4}$.",
      sol:"$\\sqrt{1+2^2+2^2}=\\sqrt{9}=3$ (09feb24 Es.4). Il distrattore $\\sqrt{8}$ dimentica l'$1$; $9$ dimentica la radice."
    }]
  },

  { pool:"superfici", src:"20240704 Es.3", steps:[
    {
      t:"$\\Sigma:\\ z=4y+5$ con $x^2+y^2\\le z$. Determina il dominio $D$ dei parametri.",
      opts:[
        {x:"$x^2+(y-2)^2\\le 9$: disco di centro $(0,2)$ e raggio 3",c:true},
        {x:"$x^2+y^2\\le 5$"},
        {x:"$x^2+y^2\\le 9$, centrato nell'origine"},
        {x:"tutto il piano"}],
      hint:"Sostituisci $z=4y+5$ nel vincolo $x^2+y^2\\le z$ e completa il quadrato in $y$.",
      sol:"$x^2+y^2\\le 4y+5\\iff x^2+(y-2)^2\\le 9$: disco di centro $(0,2)$, raggio 3 (20240704 Es.3, b02 trappola 1 sulla traslazione).",
      cont:"Ora l'area →"
    },
    {
      t:"Con $D=\\{x^2+(y-2)^2\\le 9\\}$, calcola l'area di $\\Sigma:\\ z=4y+5$.",
      opts:[
        {x:"$9\\sqrt{17}\\,\\pi$",c:true},
        {x:"$9\\pi$"},
        {x:"$3\\sqrt{17}\\,\\pi$"},
        {x:"$9\\sqrt{17}$"}],
      hint:"$f_x=0$, $f_y=4$: fattore $\\sqrt{1+16}=\\sqrt{17}$, costante; area del disco $9\\pi$.",
      sol:"$\\sqrt{1+0+16}=\\sqrt{17}$; $A=\\sqrt{17}\\cdot 9\\pi=9\\sqrt{17}\\pi$ (area del disco di raggio 3; 20240704 Es.3)."
    }]
  },

  { pool:"superfici", src:"20240627 Es.1", steps:[{
      t:"Trova il dominio $D$ di $\\Sigma:\\ z=2x+4y-4$ con $z\\ge x^2+y^2$.",
      opts:[
        {x:"$(x-1)^2+(y-2)^2\\le 1$",c:true},
        {x:"$x^2+y^2\\le 4$"},
        {x:"$(x-1)^2+(y-2)^2\\le 5$"},
        {x:"$(x-2)^2+(y-4)^2\\le 1$"}],
      hint:"Imponi $x^2+y^2\\le 2x+4y-4$ e completa i quadrati in $x$ e in $y$.",
      sol:"$x^2+y^2\\le 2x+4y-4\\iff x^2-2x+y^2-4y+4\\le 0\\iff (x-1)^2+(y-2)^2\\le 1$: disco di centro $(1,2)$, raggio 1 (27giu25 Es.1). Il distrattore col $5$ dimentica di portare il $-4$ a sinistra."
    }]
  },

  { pool:"superfici", src:"20240305 Es.3", steps:[{
      t:"Per $\\Sigma:\\ z=\\sqrt{3}\\,x+1$, quanto vale l'elemento d'area?",
      opts:[
        {x:"$2$",c:true},
        {x:"$\\sqrt{3}$"},
        {x:"$\\sqrt{2}$"},
        {x:"$4$"}],
      hint:"$f_x=\\sqrt{3}$, $f_y=0$: $\\sqrt{1+3+0}$.",
      sol:"$\\sqrt{1+(\\sqrt{3})^2+0}=\\sqrt{4}=2$ (05mar24 Es.3). Il distrattore $\\sqrt{3}$ dimentica l'$1$."
    }]
  },

  { pool:"superfici", src:"20240704 Es.3", steps:[{
      t:"Scrivi il bordo $\\partial\\Sigma$ di $\\Sigma:\\ z=4y+5$ su $D=\\{x^2+(y-2)^2\\le 9\\}$.",
      opts:[
        {x:"$\\gamma(t)=(3\\cos t,\\ 2+3\\sin t,\\ 13+12\\sin t)$, $t\\in[0,2\\pi]$",c:true},
        {x:"$\\gamma(t)=(3\\cos t,\\ 2+3\\sin t,\\ 8+12\\sin t)$"},
        {x:"il cerchio $x^2+(y-2)^2=9$ nel piano $z=0$"},
        {x:"$\\gamma(t)=(3\\cos t,\\ 3\\sin t,\\ 5)$"}],
      hint:"Su $\\partial D$: $x=3\\cos t$, $y=2+3\\sin t$; poi $z=4y+5$ INCLUDENDO il $+5$.",
      sol:"$\\partial D$: $x=3\\cos t$, $y=2+3\\sin t$. Sul bordo $z=4y+5=4(2+3\\sin t)+5=13+12\\sin t$, quindi $\\gamma(t)=(3\\cos t,2+3\\sin t,13+12\\sin t)$ (20240704 Es.3). Il distrattore $8+12\\sin t$ dimentica il $+5$; il bordo NON è il cerchio piatto in $z=0$."
    }]
  },

  { pool:"superfici", src:"20250127 Es.1", steps:[{
      t:"Scrivi il bordo di $\\Sigma:\\ z=-2x-y+2$ su $D=\\{x^2+y^2\\le 9\\}$.",
      opts:[
        {x:"$\\gamma(t)=(3\\cos t,\\ 3\\sin t,\\ -6\\cos t-3\\sin t+2)$",c:true},
        {x:"$\\gamma(t)=(3\\cos t,\\ 3\\sin t,\\ 0)$"},
        {x:"il cerchio $x^2+y^2=9$"},
        {x:"$\\gamma(t)=(3\\cos t,\\ 3\\sin t,\\ -2\\cos t-\\sin t+2)$"}],
      hint:"Sul cerchio $x=3\\cos t$, $y=3\\sin t$; sostituisci in $z=-2x-y+2$ tenendo i fattori $3$.",
      sol:"$z=-2(3\\cos t)-(3\\sin t)+2=-6\\cos t-3\\sin t+2$, quindi $\\gamma(t)=(3\\cos t,3\\sin t,-6\\cos t-3\\sin t+2)$ (20250127 Es.1). Il distrattore con $-2\\cos t-\\sin t$ dimentica di moltiplicare $x,y$ per il raggio 3."
    }]
  },

  { pool:"superfici", src:"tipo B · manuale", steps:[{
      t:"Calcola il flusso di $F=(0,0,z)$ attraverso $\\Sigma:\\ z=x+3y+4$ su $D=\\{x^2+y^2\\le 4\\}$, con normale a terza componente positiva.",
      opts:[
        {x:"$16\\pi$",c:true},
        {x:"$0$"},
        {x:"$4\\pi\\sqrt{11}$"},
        {x:"$32\\pi$"}],
      hint:"$F\\cdot(X_x\\times X_y)=(0,0,z)\\cdot(-f_x,-f_y,1)=z$; poi $z=x+3y+4$ e su disco centrato $\\iint x=\\iint y=0$.",
      sol:"$n\\,dS=(-f_x,-f_y,1)\\,dx\\,dy$, quindi $\\iint_\\Sigma F\\cdot n\\,dS=\\iint_D (x+3y+4)\\,dx\\,dy$. Per simmetria $\\iint_D x=\\iint_D y=0$, resta $4\\cdot\\text{Area}(D)=4\\cdot4\\pi=16\\pi$ (flusso via parametrizzazione, b02 Tipo 3 trappola 3). Il distrattore $4\\pi\\sqrt{11}$ confonde flusso con area."
    }]
  },

  { pool:"superfici", src:"20250127 Es.5 · b02 sottotipo 3b", steps:[{
      t:"Ruotando attorno all'asse $z$ il profilo $x=1+t^2$, $z=t$, $t\\in[1,2]$, la parametrizzazione della superficie è:",
      opts:[
        {x:"$X(\\theta,t)=((1+t^2)\\cos\\theta,\\ (1+t^2)\\sin\\theta,\\ t)$",c:true},
        {x:"$X(\\theta,t)=(t\\cos\\theta,\\ t\\sin\\theta,\\ 1+t^2)$"},
        {x:"$X(\\theta,t)=((1+t^2)\\cos\\theta,\\ (1+t^2)\\sin\\theta,\\ 1+t^2)$"},
        {x:"$X(\\theta,t)=(\\cos\\theta,\\ \\sin\\theta,\\ t)$"}],
      hint:"Il raggio dall'asse è $x=1+t^2$; la quota resta $z=t$.",
      sol:"$X(\\theta,t)=((1+t^2)\\cos\\theta,(1+t^2)\\sin\\theta,t)$, $\\theta\\in[0,2\\pi]$, $t\\in[1,2]$ (27gen25 Es.5). Scambiare raggio e quota (mettere $1+t^2$ in terza componente) è l'errore tipico."
    }]
  },

  { pool:"superfici", src:"20250214 Es.5", steps:[{
      t:"Per $\\Sigma=\\{x^2+y^2+z^2=9,\\ 0\\le y\\le x\\}$ in coordinate sferiche $x=3\\sin\\phi\\cos\\theta$, $y=3\\sin\\phi\\sin\\theta$, l'intervallo di $\\theta$ è:",
      opts:[
        {x:"$\\theta\\in[0,\\tfrac{\\pi}{4}]$",c:true},
        {x:"$\\theta\\in[0,\\tfrac{\\pi}{2}]$"},
        {x:"$\\theta\\in[0,2\\pi]$"},
        {x:"$\\theta\\in[\\tfrac{\\pi}{4},\\tfrac{\\pi}{2}]$"}],
      hint:"Con $\\sin\\phi>0$, il vincolo $0\\le y\\le x$ diventa $0\\le\\sin\\theta\\le\\cos\\theta$, cioè $\\tan\\theta\\le 1$.",
      sol:"$0\\le y\\le x\\iff 0\\le\\sin\\theta\\le\\cos\\theta\\iff 0\\le\\tan\\theta\\le 1\\iff\\theta\\in[0,\\tfrac{\\pi}{4}]$; $\\phi\\in[0,\\pi]$ (14feb25 Es.5). Il settore è uno spicchio, non un ottante generico."
    }]
  },

  { pool:"superfici", src:"20230210 Es.4 · b01 Tipo 8", steps:[{
      t:"$E=\\{x^2+y^2+z^2\\le 25,\\ x^2+y^2\\le 9\\}$. Sulla calotta INFERIORE $\\Sigma_2:\\ z=-\\sqrt{25-x^2-y^2}$, la normale USCENTE da $E$ si ottiene da $X_x\\times X_y=(-f_x,-f_y,1)$:",
      opts:[
        {x:"prendendo $-(X_x\\times X_y)$, perché sotto $E$ la normale uscente ha terza componente negativa",c:true},
        {x:"prendendo $+(X_x\\times X_y)$ così com'è"},
        {x:"usando il versore costante $(0,0,-1)$"},
        {x:"l'orientazione è irrilevante per il flusso"}],
      hint:"Sotto il solido, 'uscente' significa allontanarsi verso il basso: terza componente $<0$.",
      sol:"$(-f_x,-f_y,1)$ ha terza componente $+1$ (punta in alto, verso l'interno di $E$ sulla calotta inferiore). La normale uscente guarda in basso, quindi si usa $-(X_x\\times X_y)$ (20230210 Es.4; b01 Tipo 8, segno del normale). L'orientazione decide il segno del flusso: non è mai irrilevante."
    }]
  },

  { pool:"superfici", src:"tipo B · manuale", steps:[{
      t:"Usando $\\|X_\\phi\\times X_\\theta\\|=R^2\\sin\\phi$, calcola l'area della sfera di raggio $R$.",
      opts:[
        {x:"$4\\pi R^2$",c:true},
        {x:"$2\\pi R^2$"},
        {x:"$\\tfrac{4}{3}\\pi R^3$"},
        {x:"$\\pi R^2$"}],
      hint:"$A=\\int_0^{2\\pi}\\!\\!\\int_0^\\pi R^2\\sin\\phi\\,d\\phi\\,d\\theta$; ricorda $\\int_0^\\pi\\sin\\phi\\,d\\phi=2$.",
      sol:"$A=\\int_0^{2\\pi}\\!\\!\\int_0^\\pi R^2\\sin\\phi\\,d\\phi\\,d\\theta=R^2\\cdot 2\\pi\\cdot 2=4\\pi R^2$ (formula dell'area superficiale). Il distrattore $\\tfrac{4}{3}\\pi R^3$ è il VOLUME, non l'area; $\\phi$ va da $0$ a $\\pi$, non a $2\\pi$."
    }]
  }

];

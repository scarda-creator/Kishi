/* ============================================================
   POOL 3 — CURVE & INTEGRALI DI LINEA
   Fonti: banca-esercizi/b01.md, b02.md; 02-libro-di-testo/analvett.tex (cap. Curve).
   16 unita' CONFERMATE da Giuseppe (verbatim) + 14 aggiunte (07-07):
   7 concettuali + 7 esercizi di calcolo. Totale 30 (15 conc + 15 es).
   ============================================================ */
Q.curve = [

  { pool:"curve", src:"20220124 Es.4",
    steps:[
     { t:"La curva $\\gamma=\\{x^2+y^2=4,\\ z=x+3y+4\\}$. Una parametrizzazione corretta è:",
       opts:[
         {x:"$(2\\cos t,\\,2\\sin t,\\,2\\cos t+6\\sin t+4)$, $t\\in[0,2\\pi]$", c:true},
         {x:"$(\\cos t,\\,\\sin t,\\,\\cos t+3\\sin t+4)$"},
         {x:"$(2\\cos t,\\,2\\sin t,\\,4)$"},
         {x:"$(t,\\,t,\\,2t+4)$"}
       ],
       hint:"Dal cilindro $x^2+y^2=4$ prendi $x=2\\cos t$, $y=2\\sin t$ (raggio $2$), poi sostituisci nel piano per $z$.",
       sol:"$x=2\\cos t$, $y=2\\sin t$ soddisfa $x^2+y^2=4$; nel piano $z=x+3y+4=2\\cos t+6\\sin t+4$. Il raggio è $2$, non $1$: usarne $1$ è l'errore tipico.",
       cont:"Continua &rarr; la regolarità"
     },
     { t:"La stessa $\\gamma$ è regolare su $(0,2\\pi)$?",
       opts:[
         {x:"Sì: $\\|\\gamma'\\|^2\\ge (x')^2+(y')^2=4>0$", c:true},
         {x:"No, si annulla in $t=\\pi$"},
         {x:"No, non è semplice"},
         {x:"Serve calcolare l'intero $\\|\\gamma'\\|^2$ per concludere"}
       ],
       hint:"Basta una minorazione: $\\|\\gamma'\\|^2\\ge (x')^2+(y')^2=4\\sin^2 t+4\\cos^2 t=4$, senza toccare $z'$.",
       sol:"$\\gamma'=(-2\\sin t,\\,2\\cos t,\\,\\ldots)$; già le prime due componenti danno $\\|\\gamma'\\|^2\\ge 4>0$. Vettore tangente mai nullo $\\Rightarrow$ curva regolare (definizione)."
     }
    ]
  },

  { pool:"curve", src:"tipo curve · manuale",
    steps:[{
      t:"Nell'integrale di PRIMA specie $\\int_\\gamma f\\,ds$, l'elemento d'arco è:",
      opts:[
        {x:"$ds=\\|\\gamma'(t)\\|\\,dt$", c:true},
        {x:"$ds=\\gamma'(t)\\,dt$ (vettoriale)"},
        {x:"$ds=dt$"},
        {x:"$ds=\\|\\gamma(t)\\|\\,dt$"}
      ],
      hint:"$ds$ è uno SCALARE positivo: la NORMA del vettore velocità per $dt$, non il vettore velocità.",
      sol:"L'ascissa curvilinea è $s(t)=\\int_a^t\\|\\gamma'(\\tau)\\|\\,d\\tau$, quindi $ds=\\|\\gamma'(t)\\|\\,dt$: indipendente dall'orientazione (la norma è positiva)."
    }]
  },

  { pool:"curve", src:"tipo curve · lavoro",
    steps:[{
      t:"Il lavoro $\\int_\\gamma F\\cdot d\\ell$ (integrale di SECONDA specie) come cambia se inverti il verso di percorrenza di $\\gamma$?",
      opts:[
        {x:"cambia SEGNO", c:true},
        {x:"resta invariato"},
        {x:"cambia solo se $F$ non è conservativo"},
        {x:"si annulla"}
      ],
      hint:"$d\\ell=\\gamma'(t)\\,dt$ è VETTORIALE: invertire l'orientazione manda $\\gamma'\\to-\\gamma'$.",
      sol:"L'integrale di seconda specie è ORIENTATO: $\\int_{-\\gamma}F\\cdot d\\ell=-\\int_{\\gamma}F\\cdot d\\ell$, perché il versore tangente cambia verso. (Quello di prima specie, con $ds$, resta invariato.)"
    }]
  },

  { pool:"curve", src:"tipo curve · trabocchetto orientazione",
    steps:[{
      t:"L'integrale di PRIMA specie $\\int_\\gamma f\\,ds$ dipende dal verso di percorrenza?",
      opts:[
        {x:"No: $ds=\\|\\gamma'\\|\\,dt>0$ è indipendente dall'orientazione", c:true},
        {x:"Sì, cambia segno come il lavoro"},
        {x:"Sì, solo se $f<0$"},
        {x:"Dipende dalla parametrizzazione scelta"}
      ],
      hint:"Distingui: l'elemento d'arco $ds$ usa la NORMA (sempre positiva); solo l'integrale di SECONDA specie è orientato.",
      sol:"$ds=\\|\\gamma'\\|\\,dt$ non cambia segno invertendo l'orientazione né riparametrizzando, quindi $\\int_\\gamma f\\,ds$ è invariante (misura massa/lunghezza). Confonderlo col lavoro è la trappola."
    }]
  },

  { pool:"curve", src:"20220706 Es.4",
    steps:[{
      t:"Per $\\gamma(t)=(\\cos t,\\,\\sin t,\\,4\\cos t+\\sin t+1)$, l'argomento standard di regolarità è:",
      opts:[
        {x:"$(x',y')=(-\\sin t,\\cos t)\\ne(0,0)$ perché seno e coseno non si annullano insieme", c:true},
        {x:"$z'(t)\\ne 0$ per ogni $t$"},
        {x:"è un cerchio, quindi regolare per definizione"},
        {x:"$\\|\\gamma(t)\\|$ è costante"}
      ],
      hint:"Basta che le prime due componenti di $\\gamma'$ non siano simultaneamente nulle: $\\sin^2 t+\\cos^2 t=1$.",
      sol:"$\\gamma'=(-\\sin t,\\cos t,-4\\sin t+\\cos t)$; già $(-\\sin t,\\cos t)$ ha norma $1\\ne 0$, quindi $\\gamma'\\ne 0$ e la curva è regolare. $z'$ può annullarsi senza comprometterla."
    }]
  },

  { pool:"curve", src:"tipo curve · trabocchetto semplicità",
    steps:[{
      t:"La mappa $t\\mapsto(\\cos t,\\sin t)$ è semplice (iniettiva) su quale insieme?",
      opts:[
        {x:"$[0,2\\pi)$ ma non su $[0,2\\pi]$ (gli estremi coincidono)", c:true},
        {x:"tutto $\\mathbb{R}$"},
        {x:"nessun intervallo"},
        {x:"solo $[0,\\pi]$"}
      ],
      hint:"Per una curva CHIUSA la semplicità si richiede sull'intervallo semiaperto: gli estremi $0$ e $2\\pi$ danno lo stesso punto.",
      sol:"$(\\cos 0,\\sin 0)=(\\cos 2\\pi,\\sin 2\\pi)$: su $[0,2\\pi]$ la mappa non è iniettiva; su $[0,2\\pi)$ sì. È la definizione corretta di curva chiusa semplice."
    }]
  },

  { pool:"curve", src:"20230210 Es.3",
    steps:[{
      t:"Se $F=\\nabla U$ è conservativo e $\\gamma$ va da $A$ a $B$, il lavoro $\\int_\\gamma F\\cdot d\\ell$ vale:",
      opts:[
        {x:"$U(B)-U(A)$, indipendente dal cammino", c:true},
        {x:"$U(A)-U(B)$"},
        {x:"$0$ sempre"},
        {x:"il flusso del rotore attraverso $\\gamma$"}
      ],
      hint:"Teorema fondamentale per campi conservativi: dipende solo dagli estremi, nell'ordine finale meno iniziale.",
      sol:"$\\int_\\gamma \\nabla U\\cdot d\\ell=U(\\gamma(b))-U(\\gamma(a))=U(B)-U(A)$. Su curva chiusa ($A=B$) dà $0$. L'ordine è finale meno iniziale: invertirlo cambia segno (distrattore)."
    }]
  },

  { pool:"curve", src:"tipo curve · riparametrizzazione",
    steps:[{
      t:"L'integrale di seconda specie $\\int_\\gamma F\\cdot d\\ell$ come dipende dalla parametrizzazione della curva?",
      opts:[
        {x:"È invariante per riparametrizzazioni che PRESERVANO l'orientazione; cambia solo di segno se l'orientazione si inverte", c:true},
        {x:"Dipende dalla velocità di percorrenza scelta"},
        {x:"Dipende dal dominio $[a,b]$ del parametro"},
        {x:"È sempre lo stesso, anche invertendo il verso"}
      ],
      hint:"Riparametrizzare significa comporre con un cambio di variabile monotono: se crescente conserva il verso, se decrescente lo inverte.",
      sol:"Per il teorema di invarianza dell'integrale di linea, $\\int_\\gamma F\\cdot d\\ell$ non cambia sotto riparametrizzazioni $C^1$ con derivata positiva (stesso verso); una riparametrizzazione con derivata negativa inverte l'orientazione e cambia il segno. La velocità di percorrenza è irrilevante: contano solo il sostegno e il verso."
    }]
  },

  /* ---- ESERCIZI DI CALCOLO (campione bilanciato, 07-07) ---- */

  { pool:"curve", src:"tipo curve · manuale (I specie)",
    steps:[{
      t:"Calcola la lunghezza dell'elica $\\gamma(t)=(\\cos t,\\ \\sin t,\\ t)$, $t\\in[0,2\\pi]$, cioè $\\int_\\gamma 1\\,ds$.",
      opts:[
        {x:"$2\\sqrt{2}\\,\\pi$", c:true},
        {x:"$2\\pi$"},
        {x:"$\\sqrt{2}\\,\\pi$"},
        {x:"$4\\pi$"}
      ],
      hint:"$ds=\\|\\gamma'(t)\\|\\,dt$: includi anche la componente $z'=1$, non solo le due del cerchio.",
      sol:"Imposta $\\gamma'=(-\\sin t,\\cos t,1)$, da cui $\\|\\gamma'\\|=\\sqrt{\\sin^2 t+\\cos^2 t+1}=\\sqrt{2}$ (costante). Allora $L=\\int_\\gamma ds=\\int_0^{2\\pi}\\sqrt{2}\\,dt=2\\sqrt{2}\\,\\pi$. Definizione: $ds=\\|\\gamma'\\|\\,dt$. Dimenticare $z'$ dà $\\|\\gamma'\\|=1$ e il valore errato $2\\pi$."
    }]
  },

  { pool:"curve", src:"tipo curve · manuale (I specie)",
    steps:[{
      t:"Calcola $\\int_\\gamma x\\,ds$ sul quarto di circonferenza $\\gamma(t)=(2\\cos t,\\ 2\\sin t)$, $t\\in[0,\\pi/2]$.",
      opts:[
        {x:"$4$", c:true},
        {x:"$2$"},
        {x:"$8$"},
        {x:"$4\\pi$"}
      ],
      hint:"$ds=\\|\\gamma'\\|\\,dt$ con $\\|\\gamma'\\|=2$ (raggio $2$), non $dt$. Sostituisci anche $x=2\\cos t$ nell'integranda.",
      sol:"Passi: $\\gamma'=(-2\\sin t,2\\cos t)$, $\\|\\gamma'\\|=2$; $x=2\\cos t$. Quindi $\\int_\\gamma x\\,ds=\\int_0^{\\pi/2}(2\\cos t)\\cdot 2\\,dt=4\\int_0^{\\pi/2}\\cos t\\,dt=4[\\sin t]_0^{\\pi/2}=4$. Formula dell'integrale di I specie $\\int_\\gamma f\\,ds=\\int_a^b f(\\gamma(t))\\|\\gamma'(t)\\|\\,dt$. Omettere il fattore $\\|\\gamma'\\|=2$ dà l'errore $2$."
    }]
  },

  { pool:"curve", src:"tipo curve · lavoro (II specie)",
    steps:[{
      t:"Calcola il lavoro $\\int_\\gamma F\\cdot d\\ell$ del campo $F=(-y,\\ x)$ lungo la circonferenza unitaria $\\gamma(t)=(\\cos t,\\sin t)$, $t\\in[0,2\\pi]$ (verso antiorario).",
      opts:[
        {x:"$2\\pi$", c:true},
        {x:"$0$"},
        {x:"$-2\\pi$"},
        {x:"$\\pi$"}
      ],
      hint:"Scrivi $d\\ell=\\gamma'(t)\\,dt$ e valuta $F$ SU $\\gamma(t)$: $F(\\gamma)=(-\\sin t,\\cos t)$.",
      sol:"Passi: $\\gamma'=(-\\sin t,\\cos t)$ e $F(\\gamma)=(-\\sin t,\\cos t)$, quindi $F\\cdot\\gamma'=\\sin^2 t+\\cos^2 t=1$. $\\int_\\gamma F\\cdot d\\ell=\\int_0^{2\\pi}1\\,dt=2\\pi$. Il campo $(-y,x)$ non è conservativo (il suo rotore vale $2$): il lavoro su un giro chiuso non è nullo. Invertire il verso darebbe $-2\\pi$."
    }]
  },

  { pool:"curve", src:"tipo curve · lavoro (II specie)",
    steps:[{
      t:"Calcola $\\int_\\gamma F\\cdot d\\ell$ con $F=(x^2,\\ xy)$ lungo l'arco di parabola $\\gamma(t)=(t,\\ t^2)$, $t\\in[0,1]$.",
      opts:[
        {x:"$\\dfrac{11}{15}$", c:true},
        {x:"$\\dfrac{1}{3}$"},
        {x:"$\\dfrac{2}{5}$"},
        {x:"$\\dfrac{13}{15}$"}
      ],
      hint:"$d\\ell=(1,\\ 2t)\\,dt$: la seconda componente porta un fattore $2t$ da non dimenticare. Sostituisci $x=t$, $y=t^2$.",
      sol:"Passi: $\\gamma'=(1,2t)$; $F(\\gamma)=(t^2,\\ t\\cdot t^2)=(t^2,t^3)$. Allora $F\\cdot\\gamma'=t^2+2t\\cdot t^3=t^2+2t^4$ e $\\int_0^1(t^2+2t^4)\\,dt=\\tfrac13+\\tfrac25=\\tfrac{11}{15}$. Definizione di II specie: $\\int_\\gamma F\\cdot d\\ell=\\int_a^b F(\\gamma)\\cdot\\gamma'\\,dt$. Tralasciare il secondo addendo (il contributo $2t\\,dy$) dà $\\tfrac13$."
    }]
  },

  { pool:"curve", src:"tipo curve · ascissa curvilinea",
    steps:[
     { t:"Per $\\gamma(t)=(3\\cos t,\\ 3\\sin t)$, $t\\in[0,2\\pi]$, l'ascissa curvilinea $s(t)=\\int_0^t\\|\\gamma'(\\tau)\\|\\,d\\tau$ vale:",
       opts:[
         {x:"$s(t)=3t$", c:true},
         {x:"$s(t)=t$"},
         {x:"$s(t)=9t$"},
         {x:"$s(t)=\\tfrac{3}{2}t^2$"}
       ],
       hint:"$\\|\\gamma'\\|$ è costante per un cerchio di raggio $3$: vale $3$, non $1$.",
       sol:"$\\gamma'=(-3\\sin t,3\\cos t)$, $\\|\\gamma'\\|=\\sqrt{9\\sin^2 t+9\\cos^2 t}=3$. Quindi $s(t)=\\int_0^t 3\\,d\\tau=3t$; la lunghezza totale è $s(2\\pi)=6\\pi$ (circonferenza di raggio $3$).",
       cont:"Continua &rarr; la riparametrizzazione"
     },
     { t:"Riparametrizzando $\\gamma$ con l'ascissa curvilinea (velocità unitaria), quale mappa $\\tilde\\gamma(s)$ si ottiene, $s\\in[0,6\\pi]$?",
       opts:[
         {x:"$\\tilde\\gamma(s)=(3\\cos(s/3),\\ 3\\sin(s/3))$", c:true},
         {x:"$\\tilde\\gamma(s)=(3\\cos(3s),\\ 3\\sin(3s))$"},
         {x:"$\\tilde\\gamma(s)=(3\\cos s,\\ 3\\sin s)$"},
         {x:"$\\tilde\\gamma(s)=(\\cos(s/3),\\ \\sin(s/3))$"}
       ],
       hint:"Da $s=3t$ ricava $t=s/3$ e sostituisci. Controlla poi che $\\|\\tilde\\gamma'(s)\\|=1$.",
       sol:"Invertendo $s=3t$ si ottiene $t=s/3$: $\\tilde\\gamma(s)=\\gamma(s/3)=(3\\cos(s/3),3\\sin(s/3))$. Verifica: $\\tilde\\gamma'=(-\\sin(s/3),\\cos(s/3))$, $\\|\\tilde\\gamma'\\|=1$. La riparametrizzazione per ascissa curvilinea dà sempre velocità unitaria (il raggio $3$ resta: gli estremi cambiano)."
     }
    ]
  },

  { pool:"curve", src:"tipo curve · coordinate polari",
    steps:[{
      t:"In coordinate polari, la curva $r=2\\cos\\theta$, $\\theta\\in[-\\pi/2,\\pi/2]$. La sua lunghezza, con $ds=\\sqrt{r^2+(dr/d\\theta)^2}\\,d\\theta$, vale:",
      opts:[
        {x:"$2\\pi$", c:true},
        {x:"$4\\pi$"},
        {x:"$\\pi$"},
        {x:"$2$"}
      ],
      hint:"Calcola $r'=-2\\sin\\theta$ e semplifica $r^2+r'^2$: la curva è in realtà una circonferenza di raggio $1$.",
      sol:"Passi: $r'=-2\\sin\\theta$, quindi $r^2+r'^2=4\\cos^2\\theta+4\\sin^2\\theta=4$ e $ds=\\sqrt{4}\\,d\\theta=2\\,d\\theta$. $L=\\int_{-\\pi/2}^{\\pi/2}2\\,d\\theta=2\\pi$. Coerente col fatto che $r=2\\cos\\theta$ è la circonferenza di centro $(1,0)$ e raggio $1$, lunghezza $2\\pi$. Usare $ds=r\\,d\\theta$ (formula dell'area, non della lunghezza) è l'errore."
    }]
  },

  { pool:"curve", src:"tipo curve · orientazione (calcolo)",
    steps:[{
      t:"Calcola il lavoro di $F=(-y,\\ x)$ lungo la semicirconferenza superiore di raggio $1$ percorsa da $(-1,0)$ a $(1,0)$ (verso ORARIO).",
      opts:[
        {x:"$-\\pi$", c:true},
        {x:"$\\pi$"},
        {x:"$2\\pi$"},
        {x:"$0$"}
      ],
      hint:"Il verso richiesto va da $(-1,0)$ a $(1,0)$ sull'arco superiore: parametrizza con $t$ da $\\pi$ a $0$, oppure calcola il verso antiorario e cambia segno.",
      sol:"Su $\\gamma(t)=(\\cos t,\\sin t)$ vale $F\\cdot\\gamma'=1$. Il verso antiorario ($t:0\\to\\pi$, da $(1,0)$ a $(-1,0)$) dà $\\int_0^{\\pi}1\\,dt=+\\pi$. Il verso RICHIESTO è opposto, quindi $\\int_{-\\gamma}F\\cdot d\\ell=-\\pi$: l'integrale di II specie è orientato. Ignorare il verso è l'errore che porta a $+\\pi$."
    }]
  },

  { pool:"curve", src:"tipo curve · conservativo (scorciatoia)",
    steps:[{
      t:"Calcola $\\int_\\gamma F\\cdot d\\ell$ con $F=(2xy+1,\\ x^2)$ lungo un cammino qualsiasi da $(0,0)$ a $(2,1)$ (ad es. l'arco $\\gamma(t)=(2t,\\ t^2)$, $t\\in[0,1]$).",
      opts:[
        {x:"$6$", c:true},
        {x:"$4$"},
        {x:"$8$"},
        {x:"$0$"}
      ],
      hint:"Verifica $\\partial_y F_1=\\partial_x F_2$: se il campo è conservativo, non serve integrare lungo l'arco, basta il potenziale valutato agli estremi.",
      sol:"Passi: $\\partial_y F_1=2x=\\partial_x F_2$, quindi su $\\mathbb{R}^2$ (semplicemente connesso) $F$ è conservativo. Potenziale: da $U_x=2xy+1$ segue $U=x^2y+x+c(y)$, e $U_y=x^2$ impone $c'=0$, dunque $U=x^2y+x$. Per il teorema fondamentale degli integrali di linea $\\int_\\gamma F\\cdot d\\ell=U(2,1)-U(0,0)=(4+2)-0=6$, indipendente dal cammino. Dimenticare il termine $+x$ del potenziale dà $4$."
    }]
  },

  /* ============================================================
     UNITA' AGGIUNTE (07-07) — 7 concettuali + 7 esercizi.
     ============================================================ */

  /* ---- CONCETTUALI ---- */

  { pool:"curve", src:"tipo curve · manuale (indipendenza dal cammino)",
    steps:[{
      t:"Per un campo $F\\in C^0$ su un aperto CONNESSO $\\Omega$, quali affermazioni sono EQUIVALENTI?",
      opts:[
        {x:"$F$ è conservativo $\\iff$ $\\int_\\gamma F\\cdot d\\ell$ dipende solo dagli estremi $\\iff$ $\\oint_\\gamma F\\cdot d\\ell=0$ su ogni curva chiusa in $\\Omega$", c:true},
        {x:"$F$ è conservativo $\\iff$ $\\operatorname{div}F=0$"},
        {x:"l'indipendenza dal cammino vale per ogni campo irrotazionale, senza ipotesi sul dominio"},
        {x:"$\\int_\\gamma F\\cdot d\\ell$ dipende solo dagli estremi $\\iff$ $\\|\\gamma'\\|$ è costante"}
      ],
      hint:"Esistenza del potenziale, indipendenza dal cammino e circuitazione nulla su OGNI ciclo sono la stessa proprietà. L'irrotazionalità è solo necessaria: diventa sufficiente col dominio semplicemente connesso.",
      sol:"Teorema di caratterizzazione dei campi conservativi: su $\\Omega$ connesso le tre condizioni sono equivalenti, perché $\\oint_\\gamma F\\cdot d\\ell$ su un cammino chiuso $=U(A)-U(A)=0$, e viceversa la circuitazione nulla permette di definire $U(P)=\\int_{P_0}^{P}F\\cdot d\\ell$ senza ambiguità. $\\operatorname{div}F=0$ (solenoidale) è tutt'altra proprietà; $\\operatorname{rot}F=0$ (irrotazionale) basta solo se $\\Omega$ è semplicemente connesso."
    }]
  },

  { pool:"curve", src:"tipo curve · manuale (regolare a tratti)",
    steps:[{
      t:"Una curva è REGOLARE A TRATTI se:",
      opts:[
        {x:"$[a,b]$ si partiziona in un numero finito di sottointervalli su ciascuno dei quali $\\gamma$ è $C^1$ e $\\gamma'\\ne 0$; nei punti di raccordo $\\gamma'$ può saltare", c:true},
        {x:"$\\gamma$ è $C^1$ su tutto $[a,b]$ e $\\gamma'\\ne 0$ ovunque"},
        {x:"$\\gamma$ è continua ma mai derivabile"},
        {x:"$\\gamma$ ha punti di non regolarità in cui $\\gamma$ stessa è discontinua"}
      ],
      hint:"Regolare a tratti = incollamento CONTINUO di archi regolari; nei vertici (es. di una spezzata) il versore tangente può cambiare bruscamente, ma la curva resta continua.",
      sol:"Definizione: $\\gamma$ continua su $[a,b]$ e $C^1$ con $\\gamma'\\ne 0$ su ciascun sottointervallo di una partizione finita. Gli integrali di linea si calcolano spezzando: $\\int_\\gamma=\\sum_i\\int_{\\gamma_i}$ sui singoli archi. La prima opzione senza salti descrive una curva regolare (più forte)."
    }]
  },

  { pool:"curve", src:"tipo curve · manuale (lunghezza e ascissa)",
    steps:[{
      t:"Per $\\gamma:[a,b]\\to\\mathbb{R}^n$ regolare, che relazione lega la lunghezza $L$ e l'ascissa curvilinea $s(t)=\\int_a^t\\|\\gamma'(\\tau)\\|\\,d\\tau$?",
      opts:[
        {x:"$s'(t)=\\|\\gamma'(t)\\|$ e $L=s(b)=\\int_a^b\\|\\gamma'\\|\\,dt$; riparametrizzando in $s$ la velocità diventa unitaria", c:true},
        {x:"$s'(t)=\\gamma'(t)$ e $L=\\gamma(b)-\\gamma(a)$"},
        {x:"$L=s(b)-s(a)$ con $s(a)\\ne 0$ in generale"},
        {x:"$s(t)=\\|\\gamma(t)\\|$, cioè la distanza dall'origine"}
      ],
      hint:"$s(t)$ è l'integrale della norma della velocità: per il teorema fondamentale del calcolo la sua derivata è la velocità scalare, e $s(a)=0$.",
      sol:"Per il teorema fondamentale del calcolo $s'(t)=\\|\\gamma'(t)\\|\\ge 0$, quindi $s$ è crescente e $L=s(b)-s(a)=s(b)$ (perché $s(a)=0$). Nella riparametrizzazione per ascissa $\\tilde\\gamma(s)=\\gamma(t(s))$ si ha $\\|\\tilde\\gamma'(s)\\|=1$: $s$ è il parametro naturale. Confondere $s(t)$ con $\\|\\gamma(t)\\|$ è l'errore."
    }]
  },

  { pool:"curve", src:"tipo curve · manuale (I vs II specie)",
    steps:[{
      t:"Come si scrive l'integrale di SECONDA specie $\\int_\\gamma F\\cdot d\\ell$ come integrale di PRIMA specie?",
      opts:[
        {x:"$\\int_\\gamma F\\cdot d\\ell=\\int_\\gamma (F\\cdot T)\\,ds$, con $T=\\gamma'/\\|\\gamma'\\|$ versore tangente", c:true},
        {x:"$\\int_\\gamma F\\cdot d\\ell=\\int_\\gamma \\|F\\|\\,ds$"},
        {x:"i due integrali coincidono sempre"},
        {x:"$\\int_\\gamma F\\cdot d\\ell=\\int_\\gamma (F\\cdot n)\\,ds$ con $n$ normale"}
      ],
      hint:"$d\\ell=\\gamma'\\,dt=\\dfrac{\\gamma'}{\\|\\gamma'\\|}\\,\\|\\gamma'\\|\\,dt=T\\,ds$: il lavoro è la componente TANGENZIALE di $F$ integrata rispetto all'arco.",
      sol:"$d\\ell=\\gamma'(t)\\,dt=T(t)\\,\\|\\gamma'(t)\\|\\,dt=T\\,ds$, quindi $\\int_\\gamma F\\cdot d\\ell=\\int_\\gamma(F\\cdot T)\\,ds$. Il lavoro misura quanto $F$ è allineato al moto. L'orientazione entra tramite $T$, che cambia verso invertendo $\\gamma$; l'elemento $ds$ da solo è invariante. La versione con la normale $n$ è il flusso 2D, oggetto diverso."
    }]
  },

  { pool:"curve", src:"20230907 Es.2 · analvett.tex cap.Curve",
    steps:[{
      t:"Il campo $F=\\left(\\dfrac{-y}{x^2+y^2},\\ \\dfrac{x}{x^2+y^2}\\right)$ su $\\mathbb{R}^2\\setminus\\{0\\}$ è irrotazionale ($\\partial_x F_2=\\partial_y F_1$). È conservativo?",
      opts:[
        {x:"No: $\\mathbb{R}^2\\setminus\\{0\\}$ non è semplicemente connesso; infatti $\\oint$ sul cerchio unitario vale $2\\pi\\ne 0$", c:true},
        {x:"Sì: irrotazionale implica sempre conservativo"},
        {x:"Sì, perché $F$ è $C^1$ su tutto il suo dominio"},
        {x:"No, perché in realtà non è irrotazionale"}
      ],
      hint:"Irrotazionale $\\Rightarrow$ conservativo SOLO su domini semplicemente connessi. Qui il dominio ha un buco nell'origine.",
      sol:"Il teorema inverso (irrotazionale $\\Rightarrow$ conservativo) richiede il dominio semplicemente connesso: $\\mathbb{R}^2\\setminus\\{0\\}$ ha un buco, quindi l'implicazione cade. La circuitazione lungo un cerchio che avvolge l'origine vale $2\\pi\\ne 0$: incompatibile con l'esistenza di un potenziale globale. È l'esempio-controesempio classico (esame 20230907, es.2)."
    }]
  },

  { pool:"curve", src:"tipo curve · manuale (massa e baricentro)",
    steps:[{
      t:"Un filo materiale ha sostegno $\\gamma$ e densità lineare $\\delta(x,y)$. Massa e ascissa $\\bar x$ del baricentro sono:",
      opts:[
        {x:"$m=\\int_\\gamma \\delta\\,ds$ e $\\bar x=\\dfrac{1}{m}\\int_\\gamma x\\,\\delta\\,ds$", c:true},
        {x:"$m=\\int_\\gamma \\delta\\,d\\ell$ (vettoriale) e $\\bar x=\\int_\\gamma x\\,ds$"},
        {x:"$m=\\int_\\gamma \\delta\\,dt$ e $\\bar x=\\int_\\gamma x\\,dt$"},
        {x:"$m=\\delta\\cdot L$ sempre, anche con $\\delta$ non costante"}
      ],
      hint:"Massa e momenti sono integrali di PRIMA specie: usano $ds=\\|\\gamma'\\|\\,dt$ (scalare, indipendente dal verso). Il baricentro è il momento diviso la massa.",
      sol:"Definizione: massa $m=\\int_\\gamma\\delta\\,ds$, momento $M_x=\\int_\\gamma x\\,\\delta\\,ds$, baricentro $\\bar x=M_x/m$ (analogamente $\\bar y$). Sono integrali di prima specie perché una proprietà fisica del filo non deve dipendere dal verso di percorrenza. Solo se $\\delta$ è costante $m=\\delta\\,L$; usare $d\\ell$ o $dt$ al posto di $ds$ è l'errore."
    }]
  },

  { pool:"curve", src:"analvett.tex cap.Teoremi · tabella decisionale",
    steps:[{
      t:"Davanti a $\\int_\\gamma F\\cdot d\\ell$, quale scorciatoia va valutata PRIMA di parametrizzare?",
      opts:[
        {x:"Se $F$ conservativo: $U(B)-U(A)$. Se $\\gamma$ chiusa in $\\mathbb{R}^2$ con $F\\in C^1$ dentro: Green. Se $\\gamma$ chiusa in $\\mathbb{R}^3$: Stokes.", c:true},
        {x:"Parametrizzare direttamente è sempre la via più rapida"},
        {x:"Usare il teorema della divergenza (Gauss) per ogni integrale di linea"},
        {x:"Se $F$ è conservativo l'integrale è sempre $0$, che $\\gamma$ sia chiusa o aperta"}
      ],
      hint:"Tre scorciatoie: potenziale (campo conservativo), Green (ciclo in $\\mathbb{R}^2$), Stokes (ciclo in $\\mathbb{R}^3$). Il potenziale dà $0$ solo se la curva è CHIUSA.",
      sol:"Tabella decisionale del manuale: campo conservativo su cammino aperto $\\to U(B)-U(A)$, su cammino chiuso $\\to 0$; ciclo in $\\mathbb{R}^2$ $\\to$ Green $\\oint=\\iint_D(Q_x-P_y)$; ciclo in $\\mathbb{R}^3$ $\\to$ Stokes $\\oint=\\iint_S\\operatorname{rot}F\\cdot n\\,d\\sigma$. Gauss riguarda i flussi da superfici chiuse, non i lavori. Dire che il conservativo dà sempre $0$ ignora che serve la chiusura."
    }]
  },

  /* ---- ESERCIZI DI CALCOLO (aggiunti) ---- */

  { pool:"curve", src:"tipo curve · massa I specie",
    steps:[{
      t:"Un filo ha sostegno la semicirconferenza $\\gamma(t)=(\\cos t,\\ \\sin t)$, $t\\in[0,\\pi]$, e densità lineare $\\delta(x,y)=y$. Calcola la massa $m=\\int_\\gamma \\delta\\,ds$.",
      opts:[
        {x:"$2$", c:true},
        {x:"$\\pi$"},
        {x:"$0$"},
        {x:"$\\dfrac{\\pi}{2}$"}
      ],
      hint:"$ds=\\|\\gamma'\\|\\,dt$ con $\\|\\gamma'\\|=1$; sostituisci $\\delta=y=\\sin t$ e integra su $[0,\\pi]$.",
      sol:"Passi: $\\gamma'=(-\\sin t,\\cos t)$, $\\|\\gamma'\\|=1$, quindi $ds=dt$; $\\delta(\\gamma)=\\sin t$. Allora $m=\\int_0^\\pi \\sin t\\,dt=[-\\cos t]_0^\\pi=1-(-1)=2$. Formula della massa (integrale di I specie) $m=\\int_\\gamma\\delta\\,ds$. Rispondere $\\pi$ significa aver integrato $\\delta\\equiv 1$ (la lunghezza) invece di $\\delta=\\sin t$."
    }]
  },

  { pool:"curve", src:"tipo curve · baricentro I specie",
    steps:[{
      t:"Per un filo OMOGENEO (densità costante) sulla semicirconferenza superiore di raggio $1$, $\\gamma(t)=(\\cos t,\\sin t)$, $t\\in[0,\\pi]$, l'ordinata del baricentro $\\bar y=\\dfrac{\\int_\\gamma y\\,ds}{\\int_\\gamma ds}$ vale:",
      opts:[
        {x:"$\\dfrac{2}{\\pi}$", c:true},
        {x:"$\\dfrac{1}{2}$"},
        {x:"$\\dfrac{\\pi}{2}$"},
        {x:"$1$"}
      ],
      hint:"Numeratore $\\int_\\gamma y\\,ds=\\int_0^\\pi \\sin t\\,dt=2$; denominatore = lunghezza della semicirconferenza $=\\pi$.",
      sol:"Passi: con $\\|\\gamma'\\|=1$, il momento $\\int_\\gamma y\\,ds=\\int_0^\\pi\\sin t\\,dt=2$ e la lunghezza $\\int_\\gamma ds=\\pi$. Quindi $\\bar y=2/\\pi\\approx 0{,}64$, che cade all'interno della semicirconferenza (coerente). Definizione di baricentro $\\bar y=M_x/m$ con integrali di I specie. Per simmetria $\\bar x=0$."
    }]
  },

  { pool:"curve", src:"tipo curve · lavoro a tratti (II specie)",
    steps:[{
      t:"Calcola il lavoro $\\int_\\gamma F\\cdot d\\ell$ del campo $F=(y,\\ 2x)$ lungo la spezzata da $(0,0)$ a $(1,0)$ a $(1,2)$.",
      opts:[
        {x:"$4$", c:true},
        {x:"$2$"},
        {x:"$0$"},
        {x:"$6$"}
      ],
      hint:"Spezza in due tratti. Sul primo (orizzontale, $y=0$) è $dy=0$; sul secondo (verticale, $x=1$) è $dx=0$. Somma i due contributi.",
      sol:"Curva regolare a tratti: $\\int_\\gamma=\\int_{\\gamma_1}+\\int_{\\gamma_2}$. Tratto 1 $(0,0)\\to(1,0)$: $y=0$, $dy=0$, contributo $\\int F_1\\,dx=\\int y\\,dx=0$. Tratto 2 $(1,0)\\to(1,2)$: $x=1$, $dx=0$, contributo $\\int F_2\\,dy=\\int_0^2 2x\\,dy=\\int_0^2 2\\,dy=4$. Totale $0+4=4$. Il campo non è conservativo ($\\partial_y F_1=1\\ne 2=\\partial_x F_2$), quindi il cammino conta. Dimenticare un tratto porta a $0$."
    }]
  },

  { pool:"curve", src:"analvett.tex cap.Curve · cardioide",
    steps:[{
      t:"Calcola la lunghezza della cardioide $r=1+\\cos\\theta$, $\\theta\\in[0,2\\pi]$, con $L=\\int_0^{2\\pi}\\sqrt{r^2+r'^2}\\,d\\theta$.",
      opts:[
        {x:"$8$", c:true},
        {x:"$2\\pi$"},
        {x:"$4$"},
        {x:"$4\\pi$"}
      ],
      hint:"$r^2+r'^2=2+2\\cos\\theta=4\\cos^2(\\theta/2)$, quindi $\\sqrt{\\cdot}=2\\,|\\cos(\\theta/2)|$: NON dimenticare il modulo.",
      sol:"Passi: $r'=-\\sin\\theta$; $r^2+r'^2=(1+\\cos\\theta)^2+\\sin^2\\theta=2+2\\cos\\theta=4\\cos^2(\\theta/2)$, dunque $\\sqrt{r^2+r'^2}=2\\,|\\cos(\\theta/2)|$. Poiché $\\cos(\\theta/2)\\ge 0$ su $[0,\\pi]$ e $\\le 0$ su $[\\pi,2\\pi]$, $L=\\int_0^{2\\pi}2\\,|\\cos(\\theta/2)|\\,d\\theta=2\\cdot 4=8$. Formula della lunghezza in polari $ds=\\sqrt{r^2+r'^2}\\,d\\theta$. Togliere il modulo fa cancellare i due semiarchi e dà $0$."
    }]
  },

  { pool:"curve", src:"tipo curve · spirale (I specie)",
    steps:[{
      t:"Calcola la lunghezza della spirale logaritmica $\\gamma(t)=(e^{-t}\\cos t,\\ e^{-t}\\sin t)$, $t\\in[0,+\\infty)$.",
      opts:[
        {x:"$\\sqrt{2}$", c:true},
        {x:"$+\\infty$"},
        {x:"$2$"},
        {x:"$1$"}
      ],
      hint:"$\\|\\gamma'\\|=\\sqrt{2}\\,e^{-t}$; l'integrale improprio $\\int_0^{+\\infty}e^{-t}\\,dt$ converge a $1$.",
      sol:"Passi: $x'=-e^{-t}(\\cos t+\\sin t)$, $y'=e^{-t}(\\cos t-\\sin t)$, quindi $\\|\\gamma'\\|^2=e^{-2t}[(\\cos t+\\sin t)^2+(\\cos t-\\sin t)^2]=2e^{-2t}$ e $\\|\\gamma'\\|=\\sqrt{2}\\,e^{-t}$. Allora $L=\\int_0^{+\\infty}\\sqrt{2}\\,e^{-t}\\,dt=\\sqrt{2}\\,[-e^{-t}]_0^{+\\infty}=\\sqrt{2}$. La spirale compie infiniti giri attorno all'origine ma ha lunghezza FINITA. Credere che l'esponenziale non pesi porta a $+\\infty$."
    }]
  },

  { pool:"curve", src:"20230907 Es.2 · scorciatoia con dominio problematico",
    steps:[{
      t:"Calcola $\\oint_\\gamma F\\cdot d\\ell$ con $F=\\left(\\dfrac{-y}{x^2+y^2},\\ \\dfrac{x}{x^2+y^2}\\right)$ lungo il cerchio unitario $\\gamma(t)=(\\cos t,\\sin t)$, $t\\in[0,2\\pi]$ (antiorario).",
      opts:[
        {x:"$2\\pi$", c:true},
        {x:"$0$"},
        {x:"$-2\\pi$"},
        {x:"$\\pi$"}
      ],
      hint:"$F$ è irrotazionale, ma il dominio $\\mathbb{R}^2\\setminus\\{0\\}$ ha un buco: NON puoi concludere $\\oint=0$ con la scorciatoia del potenziale. Calcola direttamente sul cerchio.",
      sol:"Passi: su $\\gamma$ vale $x^2+y^2=1$, quindi $F(\\gamma)=(-\\sin t,\\cos t)$ e $\\gamma'=(-\\sin t,\\cos t)$; $F\\cdot\\gamma'=\\sin^2 t+\\cos^2 t=1$. $\\oint=\\int_0^{2\\pi}1\\,dt=2\\pi$. Sebbene $\\partial_x F_2=\\partial_y F_1$ (irrotazionale), il dominio non è semplicemente connesso: la scorciatoia $U(B)-U(A)$ NON si applica e il risultato è $2\\pi\\ne 0$. Rispondere $0$ 'perché irrotazionale' è la trappola (esame 20230907)."
    }]
  },

  { pool:"curve", src:"tipo curve · Green come scorciatoia (II specie)",
    steps:[{
      t:"Calcola $\\oint_\\gamma (-y\\,dx+x\\,dy)$ lungo l'ellisse $\\gamma(t)=(a\\cos t,\\ b\\sin t)$, $t\\in[0,2\\pi]$ (antiorario).",
      opts:[
        {x:"$2\\pi ab$", c:true},
        {x:"$\\pi ab$"},
        {x:"$0$"},
        {x:"$2\\pi$"}
      ],
      hint:"Calcolo diretto: $-y\\,dx+x\\,dy=(ab\\sin^2 t+ab\\cos^2 t)\\,dt$. Oppure Green: $Q_x-P_y=2$ dà $2\\cdot\\text{Area}$.",
      sol:"Passi (diretto): $dx=-a\\sin t\\,dt$, $dy=b\\cos t\\,dt$; $-y\\,dx=ab\\sin^2 t\\,dt$, $x\\,dy=ab\\cos^2 t\\,dt$, somma $ab\\,dt$; $\\oint=\\int_0^{2\\pi}ab\\,dt=2\\pi ab$. Verifica con Green: con $P=-y$, $Q=x$, $Q_x-P_y=1-(-1)=2$, quindi $\\oint=\\iint_D 2\\,dx\\,dy=2\\,\\text{Area}(D)=2\\cdot\\pi ab=2\\pi ab$. È la formula dell'area via integrale di linea $\\text{Area}=\\tfrac12\\oint(x\\,dy-y\\,dx)$. Rispondere $\\pi ab$ è l'area, non l'integrale (manca il fattore $2$)."
    }]
  }

];

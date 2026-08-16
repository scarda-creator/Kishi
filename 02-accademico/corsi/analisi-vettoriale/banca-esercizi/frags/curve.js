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
  },

  /* ===== lotto innestato il 2026-08-16 — 19 unita' =====
Lotto 2 pool `curve` — Analisi Vettoriale. Demiurgo Accademico, 2026-08-16.
   Provenienza: idee da appelli Sapienza secondo esonero (20220706 Es.4 cilindro∩piano
   con verso "antiorario visto dall'alto"; 20230210 Es.3 semiellisse con verso imposto
   da (2,0) a (-2,0); 20250127 Es.1 bordo di Σ, Es.5 curva cartesiana x=1+t^2,z=t e
   superficie di rotazione) e varianti dalla sezione "Per il Demiurgo" §2 delle fonti
   (curve su sfera in coord. sferiche/cilindriche; intersezione implicita di due superfici;
   vettore tangente/normale e segno della curvatura). Nessun testo d'appello riprodotto:
   tutti gli esercizi sono generati ex novo con dati diversi.
   Coefficienti RICALCOLATI a mano (non presi da stampe): elica ∫z ds = 2√2·π^2;
   cicloide un arco L=8; astroide L=6 (con γ'=0 alle 4 cuspidi → solo regolare a tratti);
   cilindro∩piano F=(-y,x,1) lavoro=2π; sfera∩piano z=1 in x^2+y^2+z^2=4 → r=√3, L=2π√3;
   riparametrizzazione retta ‖γ'‖=3, s=3t; parallelo z=R/2 su sfera R → L=πR√3;
   curvatura di y=x^2 in 0 → κ=2; spezzata 3D F=(z,x,y) → lavoro=2. Nessuna discrepanza:
   non c'erano stampe ufficiali di questi (esercizi nuovi), le identità usate sono standard.
  ===== */

  { pool:"curve", src:"tipo curve · modus operandi (intersezione di superfici)", steps:[
    { t:"Una curva è data come intersezione di due superfici, $\\gamma=\\{F(x,y,z)=0\\}\\cap\\{G(x,y,z)=0\\}$ (es. $x^2+y^2=1$ e $z=2x+3$). Qual è la strategia CORRETTA per parametrizzarla?",
      opts:[
        {x:"Parametrizzare la superficie più semplice (di solito quella che fissa una proiezione: cilindro o cono $\\to$ angolo $t$), poi RICAVARE le altre coordinate sostituendo nell'altra equazione",c:true},
        {x:"Risolvere il sistema delle due equazioni in forma cartesiana esplicita $y=y(x)$ e $z=z(x)$ e porre $x=t$, sempre"},
        {x:"Scegliere tre funzioni $x(t),y(t),z(t)$ a caso e verificare a posteriori che soddisfino entrambe le equazioni"}
      ],
      hint:"Il vincolo che 'gira' (cerchio, ellisse, cardioide in una proiezione) suggerisce da solo l'angolo; l'altra equazione è ESPLICITA nella coordinata mancante.",
      sol:"Metodo standard per curve come intersezione: si parametrizza il vincolo con simmetria di rotazione (cilindro $x^2+y^2=1\\to x=\\cos t,\\ y=\\sin t$) e si usa l'ALTRA equazione, tipicamente esplicita in $z$ ($z=2\\cos t+3$), per la coordinata residua. Porre $x=t$ funziona solo se ENTRAMBE le altre coordinate sono funzioni univoche di $x$, il che quasi mai vale su un cerchio (due valori di $y$ per ogni $x$).",
      cont:"Perché non porre sempre x=t?" },
    { t:"Perché su $x^2+y^2=1$ la scelta $x=t$ NON dà una parametrizzazione regolare dell'intera curva?",
      opts:[
        {x:"Perché a ogni $x\\in(-1,1)$ corrispondono DUE valori $y=\\pm\\sqrt{1-x^2}$: la mappa non è iniettiva e $y'(x)\\to\\infty$ ai poli $x=\\pm1$, dove si perde la regolarità",c:true},
        {x:"Perché $x=t$ non è mai una funzione di classe $C^1$"},
        {x:"Perché il cerchio non è una curva ma una superficie"}
      ],
      hint:"Cosa succede al vettore tangente quando la curva è verticale nel piano $(x,y)$?",
      sol:"Il grafico $y=\\sqrt{1-x^2}$ copre solo mezza circonferenza e ha derivata infinita in $x=\\pm1$: la parametrizzazione $x=t$ perde regolarità ($\\gamma'$ esplode) e iniettività globale. L'uso dell'angolo $t$ evita entrambe: $\\gamma'(t)=(-\\sin t,\\cos t,\\dots)$ non si annulla mai." }
  ]},

  { pool:"curve", src:"tipo curve · sfera ∩ piano (calcolo completo)", steps:[
    { t:"Sia $\\gamma$ l'intersezione della sfera $x^2+y^2+z^2=4$ col piano $z=1$. Qual è il sostegno di $\\gamma$?",
      opts:[
        {x:"La circonferenza $x^2+y^2=3$ nel piano $z=1$, di raggio $\\sqrt3$",c:true},
        {x:"La circonferenza $x^2+y^2=4$ nel piano $z=1$, di raggio $2$"},
        {x:"L'ellisse $x^2+y^2+1=4$ proiettata sul piano $xy$"}
      ],
      hint:"Sostituisci $z=1$ NELL'equazione della sfera prima di leggere il raggio. Il raggio della sfera non è il raggio della sezione.",
      sol:"Sostituendo $z=1$: $x^2+y^2+1=4\\Rightarrow x^2+y^2=3$. È una circonferenza di raggio $\\sqrt3$ (non $2$: il piano non passa per il centro, quindi la sezione è più piccola dell'equatore). Errore tipico: tenere il raggio $2$ della sfera.",
      cont:"Parametrizza" },
    { t:"Una parametrizzazione regolare di $\\gamma$ e la sua lunghezza sono:",
      opts:[
        {x:"$\\gamma(t)=(\\sqrt3\\cos t,\\ \\sqrt3\\sin t,\\ 1)$, $t\\in[0,2\\pi]$; lunghezza $L=2\\pi\\sqrt3$",c:true},
        {x:"$\\gamma(t)=(2\\cos t,\\ 2\\sin t,\\ 1)$, $t\\in[0,2\\pi]$; lunghezza $L=4\\pi$"},
        {x:"$\\gamma(t)=(\\sqrt3\\cos t,\\ \\sqrt3\\sin t,\\ t)$, $t\\in[0,2\\pi]$; lunghezza $L=2\\pi\\sqrt{3+1}$"}
      ],
      hint:"La quota è COSTANTE ($z=1$), quindi $z'(t)=0$: non contribuisce a $\\|\\gamma'\\|$. Il raggio è $\\sqrt3$.",
      sol:"Con $\\gamma(t)=(\\sqrt3\\cos t,\\sqrt3\\sin t,1)$ si ha $\\gamma'=(-\\sqrt3\\sin t,\\sqrt3\\cos t,0)$, $\\|\\gamma'\\|=\\sqrt3$ costante. Per la definizione di lunghezza $L=\\int_0^{2\\pi}\\|\\gamma'(t)\\|\\,dt=2\\pi\\sqrt3$. Mettere $z=t$ è l'errore: renderebbe la curva un'elica, non la sezione piana." }
  ]},

  { pool:"curve", src:"20220706 Es.4 · cilindro∩piano, orientazione (lavoro completo)", steps:[
    { t:"Curva $\\gamma$: intersezione del cilindro $x^2+y^2=1$ col piano $z=2x+3$, percorsa in verso ANTIORARIO vista dall'alto. Campo $F=(-y,\\ x,\\ 1)$. La parametrizzazione coerente con l'orientazione richiesta è:",
      opts:[
        {x:"$\\gamma(t)=(\\cos t,\\ \\sin t,\\ 2\\cos t+3)$, $t:0\\to2\\pi$",c:true},
        {x:"$\\gamma(t)=(\\cos t,\\ -\\sin t,\\ 2\\cos t+3)$, $t:0\\to2\\pi$"},
        {x:"$\\gamma(t)=(\\sin t,\\ \\cos t,\\ 2\\sin t+3)$, $t:0\\to2\\pi$"}
      ],
      hint:"'Antiorario vista dall'alto' riguarda solo la proiezione $(x,y)$: deve girare in senso antiorario nel piano $xy$. Quale delle tre lo fa con $t$ crescente?",
      sol:"La proiezione $(\\cos t,\\sin t)$ con $t$ crescente ruota in senso antiorario (verso positivo standard): è quella richiesta. $(\\cos t,-\\sin t)$ gira in senso orario; $(\\sin t,\\cos t)$ pure orario. La quota si legge dal piano: $z=2x+3=2\\cos t+3$. È il criterio di orientazione delle curve piane.",
      cont:"Calcola il lavoro" },
    { t:"Calcola $\\int_\\gamma F\\cdot d\\ell$ con $F=(-y,x,1)$ lungo quella $\\gamma$.",
      opts:[
        {x:"$2\\pi$",c:true},
        {x:"$0$"},
        {x:"$-2\\pi$"}
      ],
      hint:"Scrivi $F(\\gamma(t))\\cdot\\gamma'(t)$: la terza componente di $F$ è $1$ e $z'(t)=-2\\sin t$, che integrata su un periodo dà $0$; restano i primi due termini.",
      sol:"$\\gamma'=(-\\sin t,\\cos t,-2\\sin t)$, $F(\\gamma)=(-\\sin t,\\cos t,1)$. Prodotto scalare: $\\sin^2t+\\cos^2t+(1)(-2\\sin t)=1-2\\sin t$. Per la definizione di integrale di II specie $\\int_\\gamma F\\cdot d\\ell=\\int_0^{2\\pi}(1-2\\sin t)\\,dt=2\\pi$ ($\\int_0^{2\\pi}\\sin t\\,dt=0$). Il termine $z$ non contribuisce proprio perché la sua primitiva è periodica." }
  ]},

  { pool:"curve", src:"tipo curve · modus operandi (quando conta l'orientazione)", steps:[
    { t:"Davanti a un integrale su una curva, come RICONOSCI se l'orientazione (verso di percorrenza) cambia il risultato?",
      opts:[
        {x:"Conta SOLO negli integrali di II specie $\\int_\\gamma F\\cdot d\\ell$ (cambia segno invertendo il verso); negli integrali di I specie $\\int_\\gamma f\\,ds$ NON conta (il risultato è invariante)",c:true},
        {x:"Conta in entrambi i tipi allo stesso modo: invertendo il verso cambiano segno sia $\\int f\\,ds$ sia $\\int F\\cdot d\\ell$"},
        {x:"Non conta mai: l'integrale su una curva è un numero geometrico indipendente da come la percorri"}
      ],
      hint:"$ds=\\|\\gamma'\\|dt>0$ è positivo comunque; $d\\ell=\\gamma'\\,dt$ è un VETTORE che punta nel verso di percorrenza.",
      sol:"In $\\int_\\gamma f\\,ds$ l'elemento d'arco $ds=\\|\\gamma'\\|dt\\ge0$ è indipendente dal verso, quindi il risultato è invariante per riparametrizzazione (anche invertente). In $\\int_\\gamma F\\cdot d\\ell$ compare il vettore tangente $\\gamma'$: invertendo il verso $\\gamma'\\to-\\gamma'$ e l'integrale cambia SEGNO. È la distinzione fondamentale I specie vs II specie.",
      cont:"E come fissi il segno?" },
    { t:"Il testo chiede il lavoro con $\\gamma$ percorsa 'in verso antiorario' ma la tua parametrizzazione risulta oraria. Cosa fai?",
      opts:[
        {x:"Calcolo con la mia parametrizzazione e CAMBIO segno al risultato finale (oppure inverto il parametro $t\\to-t$ prima di integrare)",c:true},
        {x:"Prendo il valore assoluto del risultato, tanto un lavoro è sempre positivo"},
        {x:"Il verso non è specificabile: lascio il risultato con doppio segno $\\pm$"}
      ],
      hint:"Invertire il verso in un integrale di II specie è un'operazione algebrica esatta, non un'ambiguità.",
      sol:"$\\int_{-\\gamma}F\\cdot d\\ell=-\\int_{\\gamma}F\\cdot d\\ell$: basta cambiare segno. Il lavoro NON è in generale positivo (può essere negativo), quindi il valore assoluto è sbagliato. Regola: si controlla il verso della propria parametrizzazione e si aggiusta il segno secondo la richiesta." }
  ]},

  { pool:"curve", src:"tipo curve · coordinate sferiche (parallelo su sfera)", steps:[
    { t:"Su una sfera di raggio $R$ centrata nell'origine, considera il 'parallelo' a quota $z=R/2$. Qual è il raggio di questa circonferenza?",
      opts:[
        {x:"$\\dfrac{R\\sqrt3}{2}$",c:true},
        {x:"$R/2$"},
        {x:"$R$"}
      ],
      hint:"In coordinate sferiche $z=R\\cos\\varphi$ (con $\\varphi$ colatitudine); il raggio del parallelo è $R\\sin\\varphi$. Trova prima $\\varphi$.",
      sol:"Da $z=R\\cos\\varphi=R/2$ segue $\\cos\\varphi=1/2$, $\\varphi=\\pi/3$, quindi $\\sin\\varphi=\\sqrt3/2$. Il raggio del parallelo (distanza dall'asse $z$) è $\\rho=R\\sin\\varphi=R\\sqrt3/2$. È l'uso diretto della parametrizzazione sferica $x=R\\sin\\varphi\\cos\\theta,\\ y=R\\sin\\varphi\\sin\\theta,\\ z=R\\cos\\varphi$.",
      cont:"Lunghezza e confronto" },
    { t:"La lunghezza di questo parallelo è $L=\\pi R\\sqrt3$. Un MERIDIANO completo (da polo a polo e ritorno, cioè un cerchio massimo) quanto è lungo, e quale dei due è una GEODETICA della sfera?",
      opts:[
        {x:"Il cerchio massimo ha lunghezza $2\\pi R>L$ ed è la geodetica; il parallelo (tranne l'equatore) NON è geodetica",c:true},
        {x:"Entrambi lunghi $2\\pi R$; entrambi geodetiche"},
        {x:"Il parallelo è più lungo perché sta più in basso; è lui la geodetica"}
      ],
      hint:"Le geodetiche della sfera sono i cerchi MASSIMI (raggio $=R$). Un parallelo ha raggio $<R$ salvo l'equatore.",
      sol:"Il parallelo ha $L=2\\pi\\cdot R\\sqrt3/2=\\pi R\\sqrt3\\approx1.73\\,\\pi R<2\\pi R$. I cerchi massimi (raggio $R$, lunghezza $2\\pi R$) sono le geodetiche della sfera: il cammino più corto tra due punti giace su un cerchio massimo. Aggancio cross-domain: è la stessa nozione di geodetica che in Geometria Differenziale (III anno) e in Relatività Generale governa il moto libero." }
  ]},

  { pool:"curve", src:"tipo curve · vettore tangente/normale e curvatura (segno)", steps:[
    { t:"Per una curva piana regolare, la curvatura $\\kappa$ misura:",
      opts:[
        {x:"Quanto rapidamente ruota il versore tangente $T$ rispetto alla lunghezza d'arco: $\\kappa=\\|dT/ds\\|$; il versore normale principale $N$ punta verso la concavità (il centro del cerchio osculatore)",c:true},
        {x:"La pendenza della curva, cioè $\\kappa=|y'(x)|$"},
        {x:"La lunghezza della curva per unità di parametro, $\\kappa=\\|\\gamma'(t)\\|$"}
      ],
      hint:"$T$ ha modulo costante $1$: la sua variazione è puramente rotazione. La curvatura è quel tasso di rotazione RISPETTO ALL'ARCO.",
      sol:"Per definizione la curvatura è $\\kappa=\\|dT/ds\\|$, con $T=\\gamma'/\\|\\gamma'\\|$ e $s$ ascissa curvilinea. Poiché $\\|T\\|=1$, $dT/ds\\perp T$ e definisce il versore normale principale $N=(dT/ds)/\\kappa$, orientato verso la concavità. Pendenza e velocità sono altra cosa.",
      cont:"Calcolo" },
    { t:"Calcola la curvatura della parabola $y=x^2$ nel punto $(0,0)$. (Formula per grafici: $\\kappa=\\dfrac{|y''|}{(1+y'^2)^{3/2}}$.)",
      opts:[
        {x:"$\\kappa=2$",c:true},
        {x:"$\\kappa=0$"},
        {x:"$\\kappa=1/2$"}
      ],
      hint:"In $x=0$ la parabola è orizzontale: $y'(0)=0$. Il denominatore vale $1$.",
      sol:"$y'=2x\\Rightarrow y'(0)=0$; $y''=2$. Quindi $\\kappa(0)=\\dfrac{|2|}{(1+0)^{3/2}}=2$. Il cerchio osculatore nell'origine ha raggio $1/\\kappa=1/2$ e $N$ punta verso l'alto (concavità), come dev'essere per una parabola aperta verso l'alto. La curvatura NON è zero: $(0,0)$ è il vertice, punto di massima curvatura." }
  ]},

  { pool:"curve", src:"tipo curve · astroide, cuspidi e regolarità a tratti", steps:[
    { t:"L'astroide $\\gamma(t)=(\\cos^3 t,\\ \\sin^3 t)$, $t\\in[0,2\\pi]$. È una curva REGOLARE su tutto $[0,2\\pi]$?",
      opts:[
        {x:"No: $\\gamma'(t)=0$ per $t=0,\\tfrac\\pi2,\\pi,\\tfrac{3\\pi}2$ (le quattro cuspidi), quindi è solo regolare A TRATTI",c:true},
        {x:"Sì, è regolare ovunque perché $\\cos^3 t,\\sin^3 t\\in C^\\infty$"},
        {x:"No, non è nemmeno continua nelle cuspidi"}
      ],
      hint:"$C^\\infty$ garantisce derivabilità, NON regolarità: regolare significa in più $\\gamma'\\neq0$. Calcola $\\gamma'$ e vedi dove si annulla.",
      sol:"$\\gamma'(t)=(-3\\cos^2t\\sin t,\\ 3\\sin^2t\\cos t)$ si annulla quando $\\sin t\\cos t=0$, cioè $t=0,\\pi/2,\\pi,3\\pi/2$: nelle quattro cuspidi il vettore tangente svanisce. La curva è continua e $C^\\infty$ ma NON regolare lì; è però regolare a tratti (definizione: regolare su ciascun sotto-intervallo aperto), dunque rettificabile.",
      cont:"Lunghezza" },
    { t:"Calcola la lunghezza totale dell'astroide.",
      opts:[
        {x:"$L=6$",c:true},
        {x:"$L=2\\pi$"},
        {x:"$L=0$ perché $\\gamma'$ si annulla"}
      ],
      hint:"$\\|\\gamma'\\|=3|\\cos t\\sin t|=\\tfrac32|\\sin 2t|$. Attento al valore assoluto: integrando su $[0,2\\pi]$ non puoi ignorarlo.",
      sol:"$\\|\\gamma'(t)\\|=\\sqrt{9\\cos^4t\\sin^2t+9\\sin^4t\\cos^2t}=3|\\cos t\\sin t|=\\tfrac32|\\sin2t|$. Per la definizione di lunghezza $L=\\int_0^{2\\pi}\\tfrac32|\\sin2t|\\,dt=\\tfrac32\\cdot4=6$ (l'integrale di $|\\sin2t|$ su un periodo pieno vale $4$). Le cuspidi non annullano la lunghezza: sono punti isolati di misura nulla. Dimenticare il valore assoluto dà $0$, che è l'errore." }
  ]},

  { pool:"curve", src:"tipo curve · cicloide, un arco (lunghezza completa)", steps:[
    { t:"La cicloide $\\gamma(t)=(t-\\sin t,\\ 1-\\cos t)$ descrive un arco per $t\\in[0,2\\pi]$. Il vettore velocità e la sua norma sono:",
      opts:[
        {x:"$\\gamma'=(1-\\cos t,\\ \\sin t)$, con $\\|\\gamma'\\|=\\sqrt{2-2\\cos t}=2\\left|\\sin\\tfrac t2\\right|$",c:true},
        {x:"$\\gamma'=(1-\\cos t,\\ \\sin t)$, con $\\|\\gamma'\\|=\\sqrt{2+2\\cos t}$"},
        {x:"$\\gamma'=(1,\\ 1)$ costante, con $\\|\\gamma'\\|=\\sqrt2$"}
      ],
      hint:"Usa l'identità di bisezione $1-\\cos t=2\\sin^2\\tfrac t2$ per togliere la radice. Su $[0,2\\pi]$, $\\sin\\tfrac t2\\ge0$.",
      sol:"$\\|\\gamma'\\|^2=(1-\\cos t)^2+\\sin^2t=1-2\\cos t+\\cos^2t+\\sin^2t=2-2\\cos t$. Con $1-\\cos t=2\\sin^2\\tfrac t2$: $\\|\\gamma'\\|=2|\\sin\\tfrac t2|=2\\sin\\tfrac t2$ su $[0,2\\pi]$. È il passo chiave: la formula di bisezione rende l'integrando elementare.",
      cont:"Lunghezza" },
    { t:"Calcola la lunghezza dell'arco di cicloide.",
      opts:[
        {x:"$L=8$",c:true},
        {x:"$L=2\\pi$"},
        {x:"$L=4\\pi$"}
      ],
      hint:"$\\int_0^{2\\pi}2\\sin\\tfrac t2\\,dt$: la primitiva di $\\sin\\tfrac t2$ è $-2\\cos\\tfrac t2$.",
      sol:"Per la definizione di lunghezza $L=\\int_0^{2\\pi}2\\sin\\tfrac t2\\,dt=2\\left[-2\\cos\\tfrac t2\\right]_0^{2\\pi}=2(-2)(\\cos\\pi-\\cos0)=2(-2)(-2)=8$. Risultato notevole: un arco di cicloide di raggio $1$ è lungo $8$ (quattro volte il diametro), indipendente da $\\pi$." }
  ]},

  { pool:"curve", src:"20230210 Es.3 · semiellisse con verso imposto (parametrizzazione e dominio)", steps:[
    { t:"Si vuole percorrere la semiellisse $\\Gamma=\\{\\tfrac{x^2}{4}+y^2=1,\\ y\\ge0\\}$ dal punto $(2,0)$ al punto $(-2,0)$. Quale parametrizzazione, con quale dominio, realizza esattamente questo?",
      opts:[
        {x:"$\\gamma(\\varphi)=(2\\cos\\varphi,\\ \\sin\\varphi)$, $\\varphi\\in[0,\\pi]$",c:true},
        {x:"$\\gamma(\\varphi)=(2\\cos\\varphi,\\ \\sin\\varphi)$, $\\varphi\\in[0,2\\pi]$"},
        {x:"$\\gamma(\\varphi)=(2\\cos\\varphi,\\ -\\sin\\varphi)$, $\\varphi\\in[0,\\pi]$"}
      ],
      hint:"Controlla i due estremi ($\\varphi=0$ e $\\varphi=\\pi$) e verifica che il punto intermedio $\\varphi=\\pi/2$ stia nel semipiano $y\\ge0$ richiesto.",
      sol:"$\\gamma(0)=(2,0)$, $\\gamma(\\pi)=(-2,0)$: estremi corretti. $\\gamma(\\pi/2)=(0,1)$ ha $y>0$, quindi il cammino sta nel semipiano richiesto (verso antiorario). Dominio $[0,2\\pi]$ percorrerebbe l'ELLISSE intera (anche $y<0$), violando $y\\ge0$; il segno $-\\sin\\varphi$ manderebbe la curva in $y\\le0$. La scelta del dominio è parte della parametrizzazione.",
      cont:"Perché il dominio conta?" },
    { t:"Se per distrazione si usasse $\\varphi\\in[0,2\\pi]$ in un integrale di II specie su questa $\\Gamma$, cosa si otterrebbe?",
      opts:[
        {x:"Si integrerebbe sull'INTERA ellisse (curva chiusa), non sulla semiellisse aperta: risultato in generale diverso, e per un campo conservativo darebbe $0$ invece di $U(-2,0)-U(2,0)$",c:true},
        {x:"Lo stesso risultato: il tratto $y<0$ si cancella sempre da solo"},
        {x:"Il risultato raddoppierebbe esattamente"}
      ],
      hint:"Un dominio $[0,2\\pi]$ chiude la curva. Su una curva chiusa l'integrale di un campo conservativo è nullo; su un arco aperto no.",
      sol:"Estendere a $[0,2\\pi]$ trasforma un arco aperto (da $(2,0)$ a $(-2,0)$) in una curva CHIUSA. Per un campo conservativo $F=\\nabla U$, sull'arco aperto $\\int_\\gamma F\\cdot d\\ell=U(-2,0)-U(2,0)$, mentre sulla chiusa $\\oint=0$: risultati diversi. Il dominio del parametro è tanto essenziale quanto la formula." }
  ]},

  { pool:"curve", src:"tipo curve · riparametrizzazione per ascissa curvilinea (calcolo completo)", steps:[
    { t:"La retta $\\gamma(t)=(1+2t,\\ 3-t,\\ 2t)$, $t\\ge0$. L'ascissa curvilinea $s(t)=\\int_0^t\\|\\gamma'(\\tau)\\|\\,d\\tau$ vale:",
      opts:[
        {x:"$s(t)=3t$",c:true},
        {x:"$s(t)=\\sqrt5\\,t$"},
        {x:"$s(t)=t$"}
      ],
      hint:"$\\gamma'$ è costante (è una retta): $\\|\\gamma'\\|$ non dipende da $\\tau$, quindi $s(t)=\\|\\gamma'\\|\\,t$.",
      sol:"$\\gamma'=(2,-1,2)$, $\\|\\gamma'\\|=\\sqrt{4+1+4}=3$. Essendo costante, $s(t)=\\int_0^t3\\,d\\tau=3t$. Ricorda: $\\|\\gamma'\\|$ è la VELOCITÀ scalare, e $s(t)$ la si costruisce da lì per definizione di ascissa curvilinea.",
      cont:"Riparametrizza" },
    { t:"La riparametrizzazione per lunghezza d'arco $\\delta(s)$ (velocità unitaria) è:",
      opts:[
        {x:"$\\delta(s)=\\left(1+\\tfrac{2s}{3},\\ 3-\\tfrac{s}{3},\\ \\tfrac{2s}{3}\\right)$, e $\\|\\delta'(s)\\|=1$",c:true},
        {x:"$\\delta(s)=(1+2s,\\ 3-s,\\ 2s)$, e $\\|\\delta'(s)\\|=1$"},
        {x:"$\\delta(s)=\\left(1+\\tfrac{2s}{3},\\ 3-\\tfrac{s}{3},\\ \\tfrac{2s}{3}\\right)$, e $\\|\\delta'(s)\\|=3$"}
      ],
      hint:"Inverti $s=3t\\Rightarrow t=s/3$ e sostituisci in $\\gamma$. Dopo, $\\|\\delta'\\|$ DEVE valere $1$: è la firma della parametrizzazione d'arco.",
      sol:"Invertendo $t=s/3$ e sostituendo: $\\delta(s)=\\gamma(s/3)=(1+\\tfrac{2s}{3},3-\\tfrac s3,\\tfrac{2s}3)$. Allora $\\delta'=(\\tfrac23,-\\tfrac13,\\tfrac23)$, $\\|\\delta'\\|=\\sqrt{\\tfrac49+\\tfrac19+\\tfrac49}=\\sqrt{\\tfrac99}=1$. Il teorema di riparametrizzazione per ascissa curvilinea garantisce $\\|\\delta'\\|\\equiv1$: se non torna $1$, l'inversione è sbagliata." }
  ]},

  { pool:"curve", src:"tipo curve · integrale di I specie su elica (calcolo completo)", steps:[
    { t:"Per l'elica $\\gamma(t)=(\\cos t,\\ \\sin t,\\ t)$, $t\\in[0,2\\pi]$, l'elemento d'arco è:",
      opts:[
        {x:"$ds=\\sqrt2\\,dt$",c:true},
        {x:"$ds=dt$"},
        {x:"$ds=\\sqrt{1+t^2}\\,dt$"}
      ],
      hint:"$\\gamma'=(-\\sin t,\\cos t,1)$: somma i quadrati. Le prime due componenti danno $1$ per l'identità fondamentale.",
      sol:"$\\|\\gamma'\\|=\\sqrt{\\sin^2t+\\cos^2t+1}=\\sqrt2$, quindi $ds=\\|\\gamma'\\|dt=\\sqrt2\\,dt$. È costante perché l'elica ha velocità scalare uniforme.",
      cont:"Calcola l'integrale" },
    { t:"Calcola $\\int_\\gamma z\\,ds$ (integrale di I specie della funzione $f(x,y,z)=z$).",
      opts:[
        {x:"$2\\sqrt2\\,\\pi^2$",c:true},
        {x:"$2\\pi\\sqrt2$"},
        {x:"$0$"}
      ],
      hint:"Sul sostegno $z=t$, quindi $f(\\gamma(t))=t$. Integra $t\\cdot\\sqrt2$ tra $0$ e $2\\pi$; non è nullo perché $z\\ge0$ lungo l'elica.",
      sol:"Per la formula dell'integrale di I specie $\\int_\\gamma f\\,ds=\\int_0^{2\\pi}f(\\gamma(t))\\|\\gamma'(t)\\|dt=\\int_0^{2\\pi}t\\cdot\\sqrt2\\,dt=\\sqrt2\\left[\\tfrac{t^2}{2}\\right]_0^{2\\pi}=\\sqrt2\\cdot2\\pi^2=2\\sqrt2\\,\\pi^2$. Non si annulla: a differenza di $\\int F\\cdot d\\ell$, l'integrale di I specie di una funzione positiva è positivo." }
  ]},

  { pool:"curve", src:"tipo curve · ellisse, il parametro non è l'angolo polare (trappola)", steps:[
    { t:"Nell'ellisse $\\gamma(t)=(a\\cos t,\\ b\\sin t)$ con $a\\ne b$, il parametro $t$ coincide con l'angolo polare $\\theta$ (l'angolo del raggio dall'origine al punto)?",
      opts:[
        {x:"No: in generale $\\tan\\theta=\\dfrac{b\\sin t}{a\\cos t}=\\dfrac ba\\tan t\\neq\\tan t$; $t$ è il parametro (angolo eccentrico), non l'angolo polare",c:true},
        {x:"Sì, $t$ è sempre l'angolo polare $\\theta$ del punto sull'ellisse"},
        {x:"Sì, ma solo se l'ellisse è percorsa in verso antiorario"}
      ],
      hint:"Calcola $\\tan\\theta=y/x$ e confrontalo con $\\tan t$. Coincidono solo se $a=b$ (cerchio).",
      sol:"L'angolo polare soddisfa $\\tan\\theta=y/x=\\tfrac ba\\tan t$: coincide con $t$ solo per $a=b$. Il parametro $t$ è l'anomalia eccentrica (angolo sul cerchio ausiliario), non la direzione geometrica del punto. Conseguenza pratica: per l'ellisse NON si può usare $ds=\\sqrt{r^2+r'^2}\\,d\\theta$ con $t$ al posto di $\\theta$; si usa $ds=\\|\\gamma'(t)\\|dt$." }
  ]},

  { pool:"curve", src:"tipo curve · dominio del parametro su un arco (giustificazione)", steps:[
    { t:"Vuoi parametrizzare l'ARCO di parabola $y=x^2$ dal punto $(-1,1)$ al punto $(2,4)$. Qual è la scelta corretta di parametrizzazione e dominio, con la relativa giustificazione?",
      opts:[
        {x:"$\\gamma(t)=(t,\\ t^2)$, $t\\in[-1,2]$: la curva è un grafico, $x=t$ la copre iniettivamente, e gli estremi fissano gli estremi del dominio",c:true},
        {x:"$\\gamma(t)=(t,\\ t^2)$, $t\\in[0,2]$: il parametro parte sempre da $0$"},
        {x:"$\\gamma(t)=(\\cos t,\\ \\cos^2 t)$, $t\\in[0,2\\pi]$: serve un angolo per ogni curva"}
      ],
      hint:"Un arco di grafico si parametrizza con $x=t$; il dominio si LEGGE dagli estremi richiesti, non parte per default da $0$ né da $-\\pi$.",
      sol:"Per un grafico $y=f(x)$ la parametrizzazione naturale è $\\gamma(t)=(t,f(t))$, regolare ($\\gamma'=(1,2t)\\ne0$) e iniettiva. Il dominio è imposto DAGLI ESTREMI: $x=-1\\to t=-1$, $x=2\\to t=2$, quindi $t\\in[-1,2]$. Partire da $0$ taglierebbe il tratto $[-1,0]$; l'angolo non serve (la curva non è chiusa né gira). Errore d'esame tipico: dominio 'automatico' scollegato dagli estremi del testo." }
  ]},

  { pool:"curve", src:"20250127 Es.5 · curva cartesiana in un piano (riconoscimento)", steps:[
    { t:"La curva $\\gamma(t)=(1+t^2,\\ t)$, $t\\in[1,2]$, nel piano $(x,z)$ (qui $x=1+t^2$, $z=t$). Come si riconosce subito che è semplice e regolare, senza calcoli lunghi?",
      opts:[
        {x:"È il grafico cartesiano $x=1+z^2$ letto come $z=t$, $x=f(t)$ con $f\\in C^1$: ogni curva cartesiana $t\\mapsto(f(t),t)$ è automaticamente semplice (la componente $z=t$ è iniettiva) e regolare ($\\gamma'=(f'(t),1)\\neq0$ sempre)",c:true},
        {x:"Bisogna calcolare $\\gamma'$, verificare che sia $\\neq0$ e poi provare l'iniettività risolvendo $\\gamma(t_1)=\\gamma(t_2)$: non c'è scorciatoia"},
        {x:"Non è regolare perché $x=1+t^2$ ha derivata nulla in $t=0$"}
      ],
      hint:"Una componente è esattamente $t$. Cosa garantisce ciò su iniettività e su una componente di $\\gamma'$?",
      sol:"Quando una componente è il parametro stesso ($z=t$), la mappa è iniettiva (a $t$ diversi corrispondono $z$ diversi) $\\Rightarrow$ semplice; e $\\gamma'=(f'(t),1)$ ha la seconda componente $=1\\neq0$ $\\Rightarrow$ non si annulla mai $\\Rightarrow$ regolare, purché $f\\in C^1$. Qui $f(t)=1+t^2\\in C^\\infty$. Nota: $t=0$ è FUORI da $[1,2]$, e comunque $\\gamma'=(2t,1)\\ne0$ anche in $0$. È il criterio 'curva cartesiana' che gli appelli usano per liquidare regolarità e semplicità in una riga." }
  ]},

  { pool:"curve", src:"tipo curve · elemento d'arco in coordinate cilindriche (concetto)", steps:[
    { t:"Una curva è data in coordinate cilindriche da $r(t),\\ \\theta(t),\\ z(t)$. Qual è l'elemento d'arco corretto $ds$?",
      opts:[
        {x:"$ds=\\sqrt{\\dot r^2+r^2\\dot\\theta^2+\\dot z^2}\\,dt$",c:true},
        {x:"$ds=\\sqrt{\\dot r^2+\\dot\\theta^2+\\dot z^2}\\,dt$"},
        {x:"$ds=\\sqrt{r^2\\dot r^2+r^2\\dot\\theta^2+\\dot z^2}\\,dt$"}
      ],
      hint:"Il termine angolare porta un fattore $r^2$: uno spostamento angolare $d\\theta$ percorre un arco di lunghezza $r\\,d\\theta$, non $d\\theta$.",
      sol:"Da $x=r\\cos\\theta,\\ y=r\\sin\\theta,\\ z=z$ si ottiene $\\dot x^2+\\dot y^2=\\dot r^2+r^2\\dot\\theta^2$ (i termini misti si cancellano), da cui $ds=\\sqrt{\\dot r^2+r^2\\dot\\theta^2+\\dot z^2}\\,dt$. Il fattore metrico $r^2$ davanti a $\\dot\\theta^2$ è il cuore della faccenda: dimenticarlo è l'errore classico nel passaggio a coordinate non cartesiane. Con $r$ costante si ritrova $ds=\\sqrt{r^2\\dot\\theta^2+\\dot z^2}\\,dt$ dell'elica su cilindro." }
  ]},

  { pool:"curve", src:"tipo curve · derivazione di ds in coordinate polari (first principles)", steps:[
    { t:"Da dove viene la formula $ds=\\sqrt{r^2+r'^2}\\,d\\theta$ per una curva piana $r=r(\\theta)$ in coordinate polari?",
      opts:[
        {x:"Da $x=r\\cos\\theta,\\ y=r\\sin\\theta$: derivando rispetto a $\\theta$ e sommando i quadrati, i termini misti si cancellano e resta $x'^2+y'^2=r'^2+r^2$",c:true},
        {x:"È una definizione data per convenzione, senza derivazione da $x,y$"},
        {x:"Da $ds^2=dr^2+d\\theta^2$, cioè trattando $r$ e $\\theta$ come coordinate cartesiane"}
      ],
      hint:"Parametrizza con $\\theta$: $x(\\theta)=r(\\theta)\\cos\\theta$. Applica la regola del prodotto e usa $\\cos^2+\\sin^2=1$.",
      sol:"$x=r\\cos\\theta\\Rightarrow x'=r'\\cos\\theta-r\\sin\\theta$; $y=r\\sin\\theta\\Rightarrow y'=r'\\sin\\theta+r\\cos\\theta$. Allora $x'^2+y'^2=r'^2(\\cos^2+\\sin^2)+r^2(\\sin^2+\\cos^2)+2r'r(-\\cos\\sin+\\sin\\cos)=r'^2+r^2$ (i doppi prodotti si elidono). Quindi $ds=\\sqrt{x'^2+y'^2}\\,d\\theta=\\sqrt{r^2+r'^2}\\,d\\theta$. NON è $\\sqrt{dr^2+d\\theta^2}$: la metrica polare non è euclidea in $(r,\\theta)$, c'è il fattore $r^2$." }
  ]},

  { pool:"curve", src:"tipo curve · lavoro su spezzata nello spazio (campo non conservativo)", steps:[
    { t:"Campo $F=(z,\\ x,\\ y)$. Prima di calcolare $\\int_\\gamma F\\cdot d\\ell$ su un cammino da $A$ a $B$, verifichi se $F$ è conservativo: cosa trovi?",
      opts:[
        {x:"$\\operatorname{rot}F=(1,1,1)\\neq0$: NON è irrotazionale, quindi non è conservativo e il lavoro DIPENDE dal cammino",c:true},
        {x:"$\\operatorname{rot}F=0$: è conservativo, quindi il lavoro dipende solo dagli estremi $A,B$"},
        {x:"$\\operatorname{rot}F=(0,0,0)$ ma il dominio è forato, quindi è ambiguo"}
      ],
      hint:"$\\operatorname{rot}F=(\\partial_yF_3-\\partial_zF_2,\\ \\partial_zF_1-\\partial_xF_3,\\ \\partial_xF_2-\\partial_yF_1)$. Calcola le sei derivate.",
      sol:"$\\operatorname{rot}F=(\\partial_y y-\\partial_z x,\\ \\partial_z z-\\partial_x y,\\ \\partial_x x-\\partial_y z)=(1-0,\\ 1-0,\\ 1-0)=(1,1,1)\\neq0$. La condizione necessaria di conservatività (irrotazionalità) FALLISCE, quindi va calcolato esplicitamente sul cammino: nessuna scorciatoia col potenziale.",
      cont:"Calcola sulla spezzata" },
    { t:"Calcola il lavoro lungo la spezzata $A=(0,0,0)\\to(1,0,0)\\to(1,1,0)\\to(1,1,1)=B$.",
      opts:[
        {x:"$2$",c:true},
        {x:"$0$"},
        {x:"$3$"}
      ],
      hint:"Somma i tre tratti. Su ciascuno solo UNA componente di $\\gamma'$ è non nulla, quindi sopravvive un solo termine di $F$.",
      sol:"Tratto 1 $(t,0,0)$: $F=(0,t,0)$, $\\gamma'=(1,0,0)$, $F\\cdot\\gamma'=0\\Rightarrow0$. Tratto 2 $(1,t,0)$: $F=(0,1,t)$, $\\gamma'=(0,1,0)$, prodotto $=1\\Rightarrow\\int_0^1 1=1$. Tratto 3 $(1,1,t)$: $F=(t,1,1)$, $\\gamma'=(0,0,1)$, prodotto $=1\\Rightarrow\\int_0^1 1=1$. Totale $=0+1+1=2$ (additività dell'integrale su curva regolare a tratti). Poiché $F$ non è conservativo, un altro cammino da $A$ a $B$ darebbe in generale un valore diverso." }
  ]},

  { pool:"curve", src:"tipo curve · lunghezza del sostegno vs curva con molteplicità (caso limite)", steps:[
    { t:"Considera $\\gamma(t)=(\\cos t,\\ \\sin t)$ con $t\\in[0,4\\pi]$. Quanto vale $\\int_0^{4\\pi}\\|\\gamma'(t)\\|\\,dt$, e coincide con la lunghezza del SOSTEGNO (la circonferenza unitaria)?",
      opts:[
        {x:"L'integrale vale $4\\pi$, ma il sostegno (la circonferenza) è lungo $2\\pi$: la parametrizzazione percorre il cerchio DUE volte, quindi $\\int\\|\\gamma'\\|dt$ conta la lunghezza con molteplicità",c:true},
        {x:"Entrambi valgono $4\\pi$: l'integrale è sempre la lunghezza del sostegno"},
        {x:"Entrambi valgono $2\\pi$: l'integrale non dipende dal dominio"}
      ],
      hint:"$\\|\\gamma'\\|=1$, quindi l'integrale è la misura del dominio, $4\\pi$. Ma la curva è iniettiva su $[0,4\\pi]$? Che punto è $\\gamma(0)$ vs $\\gamma(2\\pi)$?",
      sol:"$\\|\\gamma'\\|=1\\Rightarrow\\int_0^{4\\pi}1\\,dt=4\\pi$. La mappa NON è iniettiva ($\\gamma(t+2\\pi)=\\gamma(t)$): non è una curva semplice, percorre il cerchio due volte. La formula $L=\\int\\|\\gamma'\\|dt$ misura la lunghezza PERCORSA (con molteplicità), che coincide con la lunghezza del sostegno solo per curve semplici. Caso limite da tenere presente: la definizione di lunghezza è legata alla parametrizzazione, non al puro insieme immagine." }
  ]},

  { pool:"curve", src:"tipo curve · Viviani, intersezione sfera∩cilindro (parametrizzazione implicita)", steps:[
    { t:"Curva di Viviani: intersezione della sfera $x^2+y^2+z^2=4$ col cilindro $x^2+y^2=2x$. Primo passo: come si parametrizza la proiezione $(x,y)$ data dal cilindro?",
      opts:[
        {x:"$x^2+y^2=2x\\Leftrightarrow(x-1)^2+y^2=1$: cerchio di centro $(1,0)$ raggio $1$, quindi $x=1+\\cos t,\\ y=\\sin t$, $t\\in[0,2\\pi]$",c:true},
        {x:"$x^2+y^2=2x$ è già un cerchio centrato nell'origine: $x=\\cos t,\\ y=\\sin t$"},
        {x:"Il cilindro non si può parametrizzare, si deve usare $x=t$"}
      ],
      hint:"Completa il quadrato in $x$: $x^2-2x=(x-1)^2-1$. Il cilindro NON è centrato sull'asse $z$.",
      sol:"Completando il quadrato: $x^2-2x+y^2=0\\Rightarrow(x-1)^2+y^2=1$, cerchio traslato di centro $(1,0)$ e raggio $1$. Parametrizzazione $x=1+\\cos t,\\ y=\\sin t$. È il metodo standard per curve come intersezione: si parte dal vincolo con simmetria rotazionale (il cilindro), qui però decentrato — l'errore è trattarlo come centrato nell'origine.",
      cont:"Ricava z" },
    { t:"Ricava $z(t)$ dalla sfera. Cosa ne segue per il dominio del parametro?",
      opts:[
        {x:"$z^2=4-(x^2+y^2)=4-2x=2-2\\cos t=4\\sin^2\\tfrac t2$, quindi $z=\\pm2\\sin\\tfrac t2$: con $t\\in[0,2\\pi]$ e il segno $+$ si ottiene solo META' della curva (il tratto $z\\ge0$); serve anche il ramo $z\\le0$ per la Viviani completa",c:true},
        {x:"$z=4-2x$ direttamente, e $t\\in[0,2\\pi]$ dà tutta la curva"},
        {x:"$z=\\sqrt{4-2x}$ e la curva è regolare ovunque su $[0,2\\pi]$ senza altre cautele"}
      ],
      hint:"Dalla sfera $z^2=4-(x^2+y^2)$ e $x^2+y^2=2x$ sul cilindro, quindi $z^2=4-2x$. Attenzione: è $z^2$, non $z$: due rami di segno.",
      sol:"Sul cilindro $x^2+y^2=2x$, quindi dalla sfera $z^2=4-2x=4-2(1+\\cos t)=2-2\\cos t=4\\sin^2\\tfrac t2$, da cui $z=\\pm2|\\sin\\tfrac t2|$. Il ramo $z=+2\\sin\\tfrac t2$ ($t\\in[0,2\\pi]$) descrive solo la metà superiore ($z\\ge0$): la curva completa richiede entrambi i segni (o un dominio esteso con la giusta scelta di radice). Punto chiave: parametrizzare un'intersezione implicita $\\{F=0\\}\\cap\\{G=0\\}$ significa anche gestire i RAMI di segno e il dominio, non solo scrivere tre funzioni di $t$." }
  ]},

  /* ===== lotto innestato il 2026-08-16 — 4 unita' =====
Lotto 2 pool `curve` — Analisi Vettoriale. Demiurgo Accademico, 2026-08-16.
   Provenienza: idee da appelli Sapienza secondo esonero (20220706 Es.4 cilindro∩piano
   con verso "antiorario visto dall'alto"; 20230210 Es.3 semiellisse con verso imposto
   da (2,0) a (-2,0); 20250127 Es.1 bordo di Σ, Es.5 curva cartesiana x=1+t^2,z=t e
   superficie di rotazione) e varianti dalla sezione "Per il Demiurgo" §2 delle fonti
   (curve su sfera in coord. sferiche/cilindriche; intersezione implicita di due superfici;
   vettore tangente/normale e segno della curvatura). Nessun testo d'appello riprodotto:
   tutti gli esercizi sono generati ex novo con dati diversi.
   Coefficienti RICALCOLATI a mano (non presi da stampe): elica ∫z ds = 2√2·π^2;
   cicloide un arco L=8; astroide L=6 (con γ'=0 alle 4 cuspidi → solo regolare a tratti);
   cilindro∩piano F=(-y,x,1) lavoro=2π; sfera∩piano z=1 in x^2+y^2+z^2=4 → r=√3, L=2π√3;
   riparametrizzazione retta ‖γ'‖=3, s=3t; parallelo z=R/2 su sfera R → L=πR√3;
   curvatura di y=x^2 in 0 → κ=2; spezzata 3D F=(z,x,y) → lavoro=2. Nessuna discrepanza:
   non c'erano stampe ufficiali di questi (esercizi nuovi), le identità usate sono standard.
  ===== */

  { pool:"curve", src:"20220706 Es.4 · esercizio completo da 8 punti (cilindro∩piano, Stokes al variare di a)", steps:[
    { t:"[Es. da 8 punti] Dati il campo $F(x,y,z)=(y^2+z^2,\\ 2xy,\\ 2a\\,xz)$, $a\\in\\mathbb{R}$, e la curva $\\gamma=\\{x^2+y^2=1\\}\\cap\\{z=2x+y+3\\}$. Passo 1: parametrizzazione regolare di $\\gamma$.",
      opts:[
        {x:"$\\gamma(t)=(\\cos t,\\ \\sin t,\\ 2\\cos t+\\sin t+3)$, $t\\in[0,2\\pi]$; regolare perché $\\gamma\\in C^\\infty$ e $\\gamma'=(-\\sin t,\\cos t,-2\\sin t+\\cos t)\\neq0$ (seno e coseno non si annullano insieme)",c:true},
        {x:"$\\gamma(t)=(t,\\ \\sqrt{1-t^2},\\ 2t+\\sqrt{1-t^2}+3)$, $t\\in[-1,1]$"},
        {x:"$\\gamma(t)=(\\cos t,\\ \\sin t,\\ t)$, $t\\in[0,2\\pi]$"}
      ],
      hint:"Il vincolo che gira è il cilindro $\\to$ angolo $t$ per $(x,y)$; la quota si legge dal piano $z=2x+y+3$. Verifica che $\\gamma'$ non svanisca mai.",
      sol:"Metodo standard per intersezioni: $x=\\cos t,\\ y=\\sin t$ dal cilindro e $z=2\\cos t+\\sin t+3$ dal piano. Regolarità: $\\gamma'=(-\\sin t,\\cos t,-2\\sin t+\\cos t)$, e le prime due componenti non si annullano simultaneamente $\\Rightarrow\\gamma'\\neq0$ ovunque. La scelta $x=t$ (grafico) coprirebbe solo metà cilindro con derivata infinita ai poli.",
      cont:"Passo 2: area" },
    { t:"Passo 2: calcola l'AREA della porzione di piano $z=2x+y+3$ sul disco $D=\\{x^2+y^2\\le1\\}$ (la superficie che ha $\\gamma$ come bordo).",
      opts:[
        {x:"$\\sqrt6\\,\\pi$",c:true},
        {x:"$\\pi$"},
        {x:"$3\\pi$"}
      ],
      hint:"Superficie cartesiana $z=f(x,y)$: $\\text{Area}=\\iint_D\\sqrt{1+f_x^2+f_y^2}\\,dx\\,dy$, con $f_x=2,\\ f_y=1$.",
      sol:"Per la formula dell'area di una superficie cartesiana, $\\sqrt{1+f_x^2+f_y^2}=\\sqrt{1+4+1}=\\sqrt6$ costante, quindi $\\text{Area}=\\sqrt6\\cdot m_2(D)=\\sqrt6\\,\\pi$ (disco unitario, area $\\pi$).",
      cont:"Passo 3: rotore" },
    { t:"Passo 3: calcola $\\operatorname{rot}F$ e stabilisci per quale $a$ il campo è conservativo su $\\mathbb{R}^3$.",
      opts:[
        {x:"$\\operatorname{rot}F=(0,\\ 2(1-a)z,\\ 0)$; è irrotazionale sse $a=1$, e su $\\mathbb{R}^3$ (semplicemente connesso) irrotazionale $\\Rightarrow$ conservativo, dunque conservativo sse e solo se $a=1$",c:true},
        {x:"$\\operatorname{rot}F=(0,0,0)$ per ogni $a$: sempre conservativo"},
        {x:"$\\operatorname{rot}F=(2z,0,2ax)$; mai conservativo"}
      ],
      hint:"$\\operatorname{rot}F=(\\partial_yF_3-\\partial_zF_2,\\ \\partial_zF_1-\\partial_xF_3,\\ \\partial_xF_2-\\partial_yF_1)$. Solo la componente centrale dipende da $a$.",
      sol:"$\\partial_zF_1-\\partial_xF_3=2z-2az=2(1-a)z$; le altre due componenti sono nulle ($\\partial_yF_3=\\partial_zF_2=0$, $\\partial_xF_2-\\partial_yF_1=2y-2y=0$). Quindi $\\operatorname{rot}F=(0,2(1-a)z,0)$, che si annulla identicamente sse $a=1$. Su un aperto semplicemente connesso vale il teorema: irrotazionale $\\Rightarrow$ conservativo.",
      cont:"Passo 4: caso a=1" },
    { t:"Passo 4: per $a=1$ trova un potenziale e la circuitazione $\\oint_\\gamma F\\cdot d\\ell$.",
      opts:[
        {x:"$U(x,y,z)=xy^2+xz^2$; poiché $\\gamma$ è CHIUSA e $F$ è conservativo, $\\oint_\\gamma F\\cdot d\\ell=0$",c:true},
        {x:"$U=xy^2+xz^2$, ma $\\oint_\\gamma F\\cdot d\\ell=U(\\gamma(2\\pi))-U(\\gamma(0))\\neq0$"},
        {x:"Non esiste potenziale perché il piano non passa per l'origine"}
      ],
      hint:"Integra $\\partial_xU=y^2+z^2$; poi impone $\\partial_yU=2xy$ e $\\partial_zU=2xz$. Su una curva chiusa il lavoro di un campo conservativo è sempre lo stesso valore.",
      sol:"$\\partial_xU=y^2+z^2\\Rightarrow U=xy^2+xz^2+g(y,z)$; $\\partial_yU=2xy+g_y=2xy\\Rightarrow g_y=0$; $\\partial_zU=2xz+g_z=2xz\\Rightarrow g_z=0$; quindi $U=xy^2+xz^2$. Per il teorema fondamentale degli integrali di linea, su una curva CHIUSA $\\gamma(0)=\\gamma(2\\pi)$ e $\\oint=U(\\gamma(2\\pi))-U(\\gamma(0))=0$.",
      cont:"Passo 5: caso a≠1, Stokes" },
    { t:"Passo 5: per $a\\neq1$ il campo non è conservativo; imposta il calcolo di $\\oint_\\gamma F\\cdot d\\ell$ (verso antiorario visto dall'alto) col Teorema di Stokes.",
      opts:[
        {x:"$\\oint_\\gamma F\\cdot d\\ell=\\iint_\\Sigma\\operatorname{rot}F\\cdot N\\,d\\sigma$ con $\\Sigma:z=2x+y+3$ su $D$ e normale con terza componente positiva $N\\,d\\sigma=(-2,-1,1)\\,dx\\,dy$ (compatibile col verso antiorario)",c:true},
        {x:"$\\oint_\\gamma F\\cdot d\\ell=\\iint_\\Sigma\\operatorname{rot}F\\cdot N\\,d\\sigma$ con $N\\,d\\sigma=(2,1,1)\\,dx\\,dy$"},
        {x:"Non si può usare Stokes perché $\\gamma$ non è piana"}
      ],
      hint:"Per una superficie cartesiana $z=f$, $N\\,d\\sigma=(-f_x,-f_y,1)\\,dx\\,dy$. Terza componente $+1$ $\\leftrightarrow$ bordo antiorario visto dall'alto (regola della mano destra).",
      sol:"Il Teorema di Stokes lega la circuitazione al flusso del rotore. La superficie cartesiana $\\Sigma:z=2x+y+3$ ha $N\\,d\\sigma=(-f_x,-f_y,1)\\,dx\\,dy=(-2,-1,1)\\,dx\\,dy$; la terza componente positiva è orientata in accordo (mano destra) col verso antiorario del bordo visto dall'alto. La compatibilità orientazione bordo↔normale è la condizione del teorema.",
      cont:"Passo 6: calcolo" },
    { t:"Passo 6: completa il calcolo per $a\\neq1$.",
      opts:[
        {x:"$\\oint_\\gamma F\\cdot d\\ell=6(a-1)\\pi$",c:true},
        {x:"$\\oint_\\gamma F\\cdot d\\ell=0$ per ogni $a$"},
        {x:"$\\oint_\\gamma F\\cdot d\\ell=2(a-1)\\pi$"}
      ],
      hint:"$\\operatorname{rot}F\\cdot(-2,-1,1)=2(1-a)z\\cdot(-1)$ con $z=2x+y+3$ su $\\Sigma$. Poi $\\iint_D x=\\iint_D y=0$ per simmetria; resta il termine costante.",
      sol:"$\\operatorname{rot}F\\cdot N\\,d\\sigma=(0,2(1-a)z,0)\\cdot(-2,-1,1)\\,dx\\,dy=-2(1-a)z\\,dx\\,dy=-2(1-a)(2x+y+3)\\,dx\\,dy$. Integrando su $D$: $\\iint_D x=\\iint_D y=0$ (simmetria del disco), $\\iint_D 3=3\\pi$, quindi $\\oint=-2(1-a)\\cdot3\\pi=6(a-1)\\pi$. Coerente col caso $a=1$ (dà $0$). Verifica finale superata." }
  ]},

  { pool:"curve", src:"tipo curve · lavoro spaziale per via diretta con verifica Stokes (esercizio completo)", steps:[
    { t:"[Es. da 8 punti] Campo $F=(-y,\\ x,\\ z^2)$ e curva $\\gamma=\\{x^2+y^2=4\\}\\cap\\{z=y+1\\}$. Passo 1: parametrizza $\\gamma$ e giustifica la regolarità.",
      opts:[
        {x:"$\\gamma(t)=(2\\cos t,\\ 2\\sin t,\\ 2\\sin t+1)$, $t\\in[0,2\\pi]$; $\\gamma'=(-2\\sin t,2\\cos t,2\\cos t)\\neq0$, componenti $C^\\infty\\Rightarrow$ regolare",c:true},
        {x:"$\\gamma(t)=(2\\cos t,\\ 2\\sin t,\\ 2\\cos t+1)$, $t\\in[0,2\\pi]$"},
        {x:"$\\gamma(t)=(\\cos t,\\ \\sin t,\\ \\sin t+1)$, $t\\in[0,2\\pi]$ (il cilindro ha raggio $1$)"}
      ],
      hint:"Il cilindro $x^2+y^2=4$ ha raggio $2$, non $1$; la quota viene dal piano $z=y+1$, cioè $z=2\\sin t+1$.",
      sol:"Raggio $2$: $x=2\\cos t,\\ y=2\\sin t$; quota dal piano $z=y+1=2\\sin t+1$. $\\gamma'=(-2\\sin t,2\\cos t,2\\cos t)$ non si annulla (prime due componenti mai nulle insieme). Errore tipico: leggere raggio $1$ da $x^2+y^2=4$.",
      cont:"Passo 2: orientazione" },
    { t:"Passo 2: si vuole il verso antiorario visto dall'alto. La parametrizzazione scelta lo rispetta?",
      opts:[
        {x:"Sì: la proiezione $(2\\cos t,2\\sin t)$ con $t$ crescente ruota in senso antiorario, quindi si integra con $t:0\\to2\\pi$ senza cambiare segno",c:true},
        {x:"No: bisogna invertire, $t:2\\pi\\to0$"},
        {x:"L'orientazione è irrilevante perché $F$ è conservativo"}
      ],
      hint:"Antiorario visto dall'alto riguarda solo la proiezione nel piano $xy$. $(\\cos t,\\sin t)$ crescente = antiorario standard.",
      sol:"La proiezione $(2\\cos t,2\\sin t)$ percorsa con $t$ crescente è antioraria: coerente con la richiesta. $F=(-y,x,z^2)$ non è conservativo ($\\operatorname{rot}F=(0,0,2)\\neq0$), quindi il verso conta (integrale di II specie).",
      cont:"Passo 3: integranda" },
    { t:"Passo 3: scrivi $F(\\gamma(t))\\cdot\\gamma'(t)$ e semplifica.",
      opts:[
        {x:"$F\\cdot\\gamma'=4+2\\cos t\\,(2\\sin t+1)^2$",c:true},
        {x:"$F\\cdot\\gamma'=2\\cos t\\,(2\\sin t+1)^2$"},
        {x:"$F\\cdot\\gamma'=4\\cos2t$"}
      ],
      hint:"$F(\\gamma)=(-2\\sin t,\\ 2\\cos t,\\ (2\\sin t+1)^2)$. I primi due termini danno $4\\sin^2t+4\\cos^2t=4$.",
      sol:"$(-2\\sin t)(-2\\sin t)+(2\\cos t)(2\\cos t)+(2\\sin t+1)^2(2\\cos t)=4\\sin^2t+4\\cos^2t+2\\cos t(2\\sin t+1)^2=4+2\\cos t(2\\sin t+1)^2$. La parte $(-y,x)$ dà il termine costante $4$; la terza componente porta il resto.",
      cont:"Passo 4: integrale" },
    { t:"Passo 4: calcola $\\int_\\gamma F\\cdot d\\ell=\\int_0^{2\\pi}\\big[4+2\\cos t\\,(2\\sin t+1)^2\\big]dt$.",
      opts:[
        {x:"$8\\pi$",c:true},
        {x:"$0$"},
        {x:"$4\\pi$"}
      ],
      hint:"$\\int_0^{2\\pi}4\\,dt=8\\pi$. Ogni pezzo $\\int_0^{2\\pi}2\\cos t\\cdot(\\dots)\\,dt$ è nullo: sono derivate di funzioni periodiche (es. $2\\cos t\\cdot4\\sin^2 t=\\tfrac{d}{dt}(\\tfrac{8}{3}\\sin^3t)$).",
      sol:"$\\int_0^{2\\pi}4\\,dt=8\\pi$. Sviluppando $(2\\sin t+1)^2=4\\sin^2t+4\\sin t+1$, ciascun termine $2\\cos t\\cdot(\\cdot)$ integra a $0$ su un periodo (primitive $\\tfrac83\\sin^3t,\\ 4\\sin^2t/... ,\\ 2\\sin t$, tutte periodiche). Quindi $\\int_\\gamma F\\cdot d\\ell=8\\pi$.",
      cont:"Passo 5: verifica Stokes" },
    { t:"Passo 5: verifica il risultato col Teorema di Stokes sulla superficie $\\Sigma:z=y+1$ sul disco $x^2+y^2\\le4$.",
      opts:[
        {x:"$\\operatorname{rot}F=(0,0,2)$, $N\\,d\\sigma=(0,-1,1)\\,dx\\,dy$, quindi $\\iint_\\Sigma\\operatorname{rot}F\\cdot N=\\iint_D 2\\,dx\\,dy=2\\cdot4\\pi=8\\pi$: concorda",c:true},
        {x:"$\\operatorname{rot}F=(0,0,2)$ ma $\\iint_\\Sigma\\operatorname{rot}F\\cdot N=2\\cdot\\pi=2\\pi$: non concorda, c'è un errore"},
        {x:"Stokes non è applicabile perché $\\Sigma$ non è piana"}
      ],
      hint:"$\\operatorname{rot}F\\cdot(0,-1,1)=2$; l'integrale è $2$ per l'area del disco di raggio $2$, cioè $4\\pi$.",
      sol:"$\\operatorname{rot}F=(\\partial_yz^2-\\partial_zx,\\ \\partial_z(-y)-\\partial_xz^2,\\ \\partial_xx-\\partial_y(-y))=(0,0,2)$. Con $N\\,d\\sigma=(-f_x,-f_y,1)\\,dx\\,dy=(0,-1,1)\\,dx\\,dy$, $\\operatorname{rot}F\\cdot N=2$, e $\\iint_D 2\\,dx\\,dy=2\\cdot\\pi\\cdot2^2=8\\pi$. Coincide col calcolo diretto: la doppia via (parametrica e Stokes) è la verifica d'esame che blinda gli 8 punti." }
  ]},

  { pool:"curve", src:"tipo curve · massa e baricentro di un filo (I specie, calcolo completo)", steps:[
    { t:"[Es. da 8 punti] Un filo ha sostegno l'elica $\\gamma(t)=(\\cos t,\\ \\sin t,\\ t)$, $t\\in[0,2\\pi]$, e densità lineare $\\delta(x,y,z)=z^2$. Passo 1: elemento d'arco e densità in funzione di $t$.",
      opts:[
        {x:"$ds=\\sqrt2\\,dt$ e $\\delta(\\gamma(t))=t^2$",c:true},
        {x:"$ds=dt$ e $\\delta=t^2$"},
        {x:"$ds=\\sqrt2\\,dt$ e $\\delta=t$"}
      ],
      hint:"$\\|\\gamma'\\|=\\sqrt{\\sin^2t+\\cos^2t+1}=\\sqrt2$; sul sostegno $z=t$, quindi $\\delta=z^2=t^2$.",
      sol:"$\\gamma'=(-\\sin t,\\cos t,1)\\Rightarrow\\|\\gamma'\\|=\\sqrt2$, $ds=\\sqrt2\\,dt$. La densità va valutata SUL sostegno: $\\delta=z^2=t^2$. Questi due ingredienti alimentano tutti gli integrali di I specie successivi.",
      cont:"Passo 2: massa" },
    { t:"Passo 2: calcola la massa $M=\\int_\\gamma\\delta\\,ds$.",
      opts:[
        {x:"$M=\\dfrac{8\\sqrt2}{3}\\pi^3$",c:true},
        {x:"$M=\\dfrac{8}{3}\\pi^3$"},
        {x:"$M=2\\sqrt2\\,\\pi^2$"}
      ],
      hint:"$M=\\int_0^{2\\pi}t^2\\cdot\\sqrt2\\,dt=\\sqrt2\\cdot\\dfrac{(2\\pi)^3}{3}$.",
      sol:"Per la definizione di massa di un filo, $M=\\int_\\gamma\\delta\\,ds=\\int_0^{2\\pi}t^2\\sqrt2\\,dt=\\sqrt2\\left[\\tfrac{t^3}{3}\\right]_0^{2\\pi}=\\sqrt2\\cdot\\tfrac{8\\pi^3}{3}=\\tfrac{8\\sqrt2}{3}\\pi^3$.",
      cont:"Passo 3: quota del baricentro" },
    { t:"Passo 3: calcola la quota $\\bar z=\\dfrac1M\\int_\\gamma z\\,\\delta\\,ds$.",
      opts:[
        {x:"$\\bar z=\\dfrac{3\\pi}{2}$",c:true},
        {x:"$\\bar z=\\pi$"},
        {x:"$\\bar z=\\dfrac{4\\pi}{3}$"}
      ],
      hint:"$\\int_\\gamma z\\,\\delta\\,ds=\\int_0^{2\\pi}t\\cdot t^2\\cdot\\sqrt2\\,dt=\\sqrt2\\int_0^{2\\pi}t^3\\,dt$. Poi dividi per $M$.",
      sol:"$\\int_\\gamma z\\delta\\,ds=\\sqrt2\\int_0^{2\\pi}t^3\\,dt=\\sqrt2\\cdot\\tfrac{(2\\pi)^4}{4}=4\\sqrt2\\pi^4$. Quindi $\\bar z=\\dfrac{4\\sqrt2\\pi^4}{\\tfrac{8\\sqrt2}{3}\\pi^3}=\\dfrac{4\\pi^4\\cdot3}{8\\pi^3}=\\dfrac{3\\pi}{2}$. Coerente: $0<\\tfrac{3\\pi}{2}<2\\pi$, ma spostato verso l'alto perché la densità $z^2$ pesa di più le quote alte.",
      cont:"Passo 4: componenti orizzontali" },
    { t:"Passo 4: calcola $\\bar x=\\dfrac1M\\int_\\gamma x\\,\\delta\\,ds$ (serve $\\int_0^{2\\pi}t^2\\cos t\\,dt$, per parti).",
      opts:[
        {x:"$\\int_0^{2\\pi}t^2\\cos t\\,dt=4\\pi$, quindi $\\bar x=\\dfrac{3}{2\\pi^2}$",c:true},
        {x:"$\\int_0^{2\\pi}t^2\\cos t\\,dt=0$, quindi $\\bar x=0$"},
        {x:"$\\int_0^{2\\pi}t^2\\cos t\\,dt=2\\pi$, quindi $\\bar x=\\dfrac{3}{4\\pi^2}$"}
      ],
      hint:"Per parti due volte: $\\int t^2\\cos t\\,dt=t^2\\sin t+2t\\cos t-2\\sin t$. Valuta in $2\\pi$ e $0$.",
      sol:"Primitiva $t^2\\sin t+2t\\cos t-2\\sin t$; in $2\\pi$ vale $0+4\\pi\\cdot1-0=4\\pi$, in $0$ vale $0$. Quindi $\\int_\\gamma x\\delta\\,ds=\\sqrt2\\cdot4\\pi=4\\sqrt2\\pi$ e $\\bar x=\\dfrac{4\\sqrt2\\pi}{\\tfrac{8\\sqrt2}{3}\\pi^3}=\\dfrac{12\\pi}{8\\pi^3}=\\dfrac{3}{2\\pi^2}$. Non è nullo: la densità $z^2$ rompe la simmetria che per densità costante annullerebbe $\\bar x$.",
      cont:"Passo 5: baricentro completo" },
    { t:"Passo 5: analogamente $\\int_0^{2\\pi}t^2\\sin t\\,dt=-4\\pi^2$. Il baricentro del filo è:",
      opts:[
        {x:"$\\left(\\dfrac{3}{2\\pi^2},\\ -\\dfrac{3}{2\\pi},\\ \\dfrac{3\\pi}{2}\\right)$",c:true},
        {x:"$\\left(\\dfrac{3}{2\\pi^2},\\ \\dfrac{3}{2\\pi},\\ \\dfrac{3\\pi}{2}\\right)$"},
        {x:"$\\left(0,\\ 0,\\ \\dfrac{3\\pi}{2}\\right)$"}
      ],
      hint:"$\\bar y=\\dfrac1M\\int_\\gamma y\\delta\\,ds=\\dfrac{\\sqrt2\\cdot(-4\\pi^2)}{M}$. Il segno negativo viene dall'integrale, non è un errore.",
      sol:"$\\int_\\gamma y\\delta\\,ds=\\sqrt2\\int_0^{2\\pi}t^2\\sin t\\,dt=\\sqrt2(-4\\pi^2)$, quindi $\\bar y=\\dfrac{-4\\sqrt2\\pi^2}{\\tfrac{8\\sqrt2}{3}\\pi^3}=-\\dfrac{12\\pi^2}{8\\pi^3}=-\\dfrac{3}{2\\pi}$. Baricentro $\\left(\\tfrac{3}{2\\pi^2},-\\tfrac{3}{2\\pi},\\tfrac{3\\pi}{2}\\right)$. Verifica di coerenza: il baricentro NON sta sul sostegno (è interno al cilindro, distanza dall'asse $\\sqrt{\\bar x^2+\\bar y^2}<1$), come dev'essere per un baricentro di una curva non rettilinea." }
  ]},

  { pool:"curve", src:"20230210 Es.3 · esercizio completo (Green su semiellisse + potenziale)", steps:[
    { t:"[Es. da 8 punti] Per $\\alpha\\in\\mathbb{R}$, campo $F=(ye^{xy}-2x\\sin y,\\ xe^{xy}-x^2\\cos y+\\alpha x^3)$ e $D=\\{\\tfrac{x^2}{4}+y^2\\le1,\\ y\\ge0\\}$. Passo 1: per calcolare $\\oint_{+\\partial D}F\\cdot d\\ell$ (antiorario) col Teorema di Green, calcola $\\partial_xF_2-\\partial_yF_1$.",
      opts:[
        {x:"$\\partial_xF_2-\\partial_yF_1=3\\alpha x^2$",c:true},
        {x:"$\\partial_xF_2-\\partial_yF_1=0$ per ogni $\\alpha$"},
        {x:"$\\partial_xF_2-\\partial_yF_1=\\alpha x^3$"}
      ],
      hint:"I termini con $e^{xy}$ e $\\sin y$ si cancellano tra le due derivate; sopravvive solo la derivata di $\\alpha x^3$.",
      sol:"$\\partial_yF_1=e^{xy}+xye^{xy}-2x\\cos y$; $\\partial_xF_2=e^{xy}+xye^{xy}-2x\\cos y+3\\alpha x^2$. La differenza è $3\\alpha x^2$: tutta la parte 'conservativa' si elide, resta il termine di rottura $\\alpha x^3$.",
      cont:"Passo 2: Green" },
    { t:"Passo 2: calcola $\\oint_{+\\partial D}F\\cdot d\\ell=\\iint_D 3\\alpha x^2\\,dx\\,dy$ usando coordinate ellittiche $x=2\\rho\\cos\\varphi,\\ y=\\rho\\sin\\varphi$.",
      opts:[
        {x:"$3\\alpha\\pi$",c:true},
        {x:"$3\\alpha\\pi^2$"},
        {x:"$6\\alpha\\pi$"}
      ],
      hint:"Jacobiano $|J|=2\\rho$; il semidisco $y\\ge0$ dà $\\rho\\in[0,1],\\ \\varphi\\in[0,\\pi]$. Ricorda $\\int_0^\\pi\\cos^2\\varphi\\,d\\varphi=\\pi/2$.",
      sol:"$\\iint_D3\\alpha x^2=3\\alpha\\int_0^1\\!\\!\\int_0^\\pi(2\\rho\\cos\\varphi)^2\\cdot2\\rho\\,d\\varphi\\,d\\rho=3\\alpha\\cdot8\\int_0^1\\rho^3d\\rho\\int_0^\\pi\\cos^2\\varphi\\,d\\varphi=3\\alpha\\cdot8\\cdot\\tfrac14\\cdot\\tfrac\\pi2=3\\alpha\\pi$. Il Teorema di Green ha trasformato una circuitazione in un integrale doppio elementare.",
      cont:"Passo 3: parametrizza l'arco" },
    { t:"Passo 3: sia $\\Gamma=\\{\\tfrac{x^2}{4}+y^2=1,\\ y\\ge0\\}$ la semiellisse, da $(2,0)$ a $(-2,0)$. Una parametrizzazione regolare e semplice è:",
      opts:[
        {x:"$\\gamma(\\varphi)=(2\\cos\\varphi,\\ \\sin\\varphi)$, $\\varphi\\in[0,\\pi]$; $C^\\infty$, $\\gamma'=(-2\\sin\\varphi,\\cos\\varphi)\\neq0$, iniettiva su $(0,\\pi)$",c:true},
        {x:"$\\gamma(\\varphi)=(2\\cos\\varphi,\\ \\sin\\varphi)$, $\\varphi\\in[0,2\\pi]$"},
        {x:"$\\gamma(x)=(x,\\ \\sqrt{1-x^2/4})$, $x\\in[-2,2]$, sempre regolare"}
      ],
      hint:"Il dominio $[0,\\pi]$ dà l'arco superiore da $(2,0)$ a $(-2,0)$. Su $[0,2\\pi]$ chiuderesti l'ellisse; il grafico $y=\\sqrt{1-x^2/4}$ ha derivata infinita agli estremi.",
      sol:"$\\gamma(0)=(2,0),\\ \\gamma(\\pi)=(-2,0)$, e $\\gamma(\\pi/2)=(0,1)$ conferma il tratto $y\\ge0$. Regolare ($\\gamma'\\neq0$: seno e coseno non si annullano insieme) e semplice su $(0,\\pi)$. Il dominio è parte della risposta: $[0,2\\pi]$ darebbe l'ellisse intera.",
      cont:"Passo 4: caso conservativo" },
    { t:"Passo 4: per $\\alpha=0$ il campo è conservativo. Trova un potenziale $U$.",
      opts:[
        {x:"$U(x,y)=e^{xy}-x^2\\sin y$",c:true},
        {x:"$U(x,y)=e^{xy}+x^2\\cos y$"},
        {x:"Non esiste potenziale perché il dominio $y\\ge0$ non è aperto"}
      ],
      hint:"Integra $\\partial_xU=F_1=ye^{xy}-2x\\sin y$ rispetto a $x$, poi imponi $\\partial_yU=F_2$.",
      sol:"$\\partial_xU=ye^{xy}-2x\\sin y\\Rightarrow U=e^{xy}-x^2\\sin y+g(y)$; $\\partial_yU=xe^{xy}-x^2\\cos y+g'(y)$ deve uguagliare $F_2=xe^{xy}-x^2\\cos y$ (con $\\alpha=0$), quindi $g'=0$. $U=e^{xy}-x^2\\sin y$. Per $\\alpha=0$ il campo è irrotazionale su $\\mathbb{R}^2$ semplicemente connesso $\\Rightarrow$ conservativo.",
      cont:"Passo 5: lavoro finale" },
    { t:"Passo 5: per $\\alpha=0$ calcola $\\int_\\gamma F\\cdot d\\ell$ sull'arco aperto $\\Gamma$ (da $(2,0)$ a $(-2,0)$).",
      opts:[
        {x:"$\\int_\\gamma F\\cdot d\\ell=U(-2,0)-U(2,0)=1-1=0$",c:true},
        {x:"$\\int_\\gamma F\\cdot d\\ell=3\\alpha\\pi=0$, come al passo 2"},
        {x:"$\\int_\\gamma F\\cdot d\\ell=2$"}
      ],
      hint:"Su un arco APERTO vale $\\int=U(\\text{fine})-U(\\text{inizio})$, NON $0$ per default: qui torna $0$ solo perché i valori agli estremi coincidono.",
      sol:"Per il teorema fondamentale degli integrali di linea, $\\int_\\gamma F\\cdot d\\ell=U(-2,0)-U(2,0)$. Con $U=e^{xy}-x^2\\sin y$: $U(\\pm2,0)=e^0-4\\sin0=1$, quindi $1-1=0$. Attenzione: NON è il risultato di Green del passo 2 (quello era la curva CHIUSA $\\partial D$, che include il diametro sull'asse $x$); qui è solo l'arco. Distinguere curva chiusa e arco aperto è il punto in cui si perdono punti." }
  ]}
];

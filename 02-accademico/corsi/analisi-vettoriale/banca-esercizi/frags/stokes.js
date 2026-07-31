Q.stokes = [

  /* ===================== CONCETTUALI (15) ===================== */

  { pool:"stokes", src:"tipo B · manuale", steps:[{
      t:"Il teorema di Stokes afferma che, sotto le sue ipotesi, la circuitazione di $F$ lungo $\\partial S$ uguaglia:",
      opts:[
        {x:"$\\iint_S (\\nabla\\times F)\\cdot n\\,dS$", c:true},
        {x:"$\\iint_S (\\nabla\\cdot F)\\,dS$"},
        {x:"$\\iiint_V (\\nabla\\cdot F)\\,dV$"},
        {x:"$\\iint_S F\\cdot n\\,dS$"}
      ],
      hint:"Il secondo membro è il flusso del ROTORE, non della divergenza né di $F$ stesso.",
      sol:"Teorema di Stokes: $\\oint_{\\partial S} F\\cdot d\\ell=\\iint_S (\\nabla\\times F)\\cdot n\\,dS$. A sinistra la circuitazione, a destra il flusso del rotore attraverso una qualunque superficie $S$ che abbia $\\partial S$ come bordo."
    }]},

  { pool:"stokes", src:"tipo B · manuale", steps:[{
      t:"Quali ipotesi servono per applicare il teorema di Stokes a $\\oint_{\\partial S} F\\cdot d\\ell$?",
      opts:[
        {x:"$F$ di classe $C^1$ su un aperto contenente $S$, e $S$ superficie regolare orientabile con bordo", c:true},
        {x:"$F$ solo continuo e $S$ chiusa"},
        {x:"$F$ irrotazionale e $S$ piana"},
        {x:"$F$ di classe $C^1$ e $S$ superficie chiusa senza bordo"}
      ],
      hint:"Una superficie CHIUSA non ha bordo: la circuitazione non è definita. E serve $C^1$, non la sola continuità.",
      sol:"Il teorema di Stokes richiede $F\\in C^1$ su un aperto che contiene $S$, e $S$ superficie regolare, orientabile, con bordo $\\partial S$. La superficie deve avere bordo (non essere chiusa) e l'orientazione della normale deve essere coerente col verso di $\\partial S$."
    }]},

  { pool:"stokes", src:"tipo B · manuale", steps:[{
      t:"Come si sceglie il verso di percorrenza di $\\partial S$ una volta fissata la normale $n$ di $S$?",
      opts:[
        {x:"Regola della mano destra: pollice lungo $n$, le dita indicano il verso di $\\partial S$", c:true},
        {x:"Sempre antiorario, indipendentemente da $n$"},
        {x:"Sempre orario visto dall'alto"},
        {x:"Il verso è arbitrario e non influenza il segno"}
      ],
      hint:"Verso del bordo e verso della normale NON sono indipendenti: uno determina l'altro.",
      sol:"L'orientazione coerente è data dalla regola della mano destra: se il pollice punta come $n$, le dita danno il verso positivo di $\\partial S$. Scambiare uno dei due senza l'altro introduce un errore di segno nel teorema di Stokes."
    }]},

  { pool:"stokes", src:"tipo B · manuale", steps:[{
      t:"La prima componente di $\\nabla\\times F$ è:",
      opts:[
        {x:"$\\partial_y F_3 - \\partial_z F_2$", c:true},
        {x:"$\\partial_z F_2 - \\partial_y F_3$"},
        {x:"$\\partial_x F_2 - \\partial_y F_1$"},
        {x:"$\\partial_y F_2 - \\partial_z F_3$"}
      ],
      hint:"È la componente $x$: si ottiene ciclicamente da $y,z$ sulle componenti $F_3,F_2$.",
      sol:"Dal determinante formale del rotore: $(\\nabla\\times F)_1=\\partial_y F_3-\\partial_z F_2$, poi ciclicamente $x\\to y\\to z$. Invertire l'ordine della differenza cambia il segno dell'intera componente."
    }]},

  { pool:"stokes", src:"tipo B · manuale", steps:[{
      t:"La seconda componente del rotore è $\\partial_z F_1-\\partial_x F_3$. Perché è facile sbagliarla?",
      opts:[
        {x:"Perché l'ordine ciclico dà $z,x$ su $F_1,F_3$: scriverla come $\\partial_x F_3-\\partial_z F_1$ inverte il segno", c:true},
        {x:"Perché la componente $y$ del rotore è sempre nulla"},
        {x:"Perché va calcolata con la divergenza"},
        {x:"Perché richiede le derivate seconde"}
      ],
      hint:"L'errore tipico è invertire i due termini della differenza sulla componente centrale.",
      sol:"$(\\nabla\\times F)_2=\\partial_z F_1-\\partial_x F_3$. La regola ciclica $x\\to y\\to z\\to x$ fissa l'ordine; scriverla al contrario ($\\partial_x F_3-\\partial_z F_1$) è l'errore più frequente e falsa il segno della circuitazione via Stokes."
    }]},

  { pool:"stokes", src:"tipo B · manuale", steps:[{
      t:"Se $F$ è irrotazionale ($\\nabla\\times F=0$) su un aperto, quanto vale $\\oint_{\\partial S} F\\cdot d\\ell$ per una superficie $S$ tutta contenuta in quell'aperto?",
      opts:[
        {x:"Zero, perché il flusso di un rotore nullo è nullo", c:true},
        {x:"Sempre $2\\pi$"},
        {x:"Dipende solo dalla lunghezza di $\\partial S$"},
        {x:"Non è calcolabile senza il potenziale"}
      ],
      hint:"Se $\\nabla\\times F=0$ ovunque su $S$, l'integrando del secondo membro di Stokes è identicamente nullo.",
      sol:"Per Stokes $\\oint_{\\partial S} F\\cdot d\\ell=\\iint_S (\\nabla\\times F)\\cdot n\\,dS=\\iint_S 0=0$. Serve che TUTTA $S$ stia nell'aperto dove $\\nabla\\times F=0$: nessun buco del dominio deve essere attraversato."
    }]},

  { pool:"stokes", src:"tipo B · manuale", steps:[{
      t:"Perché per calcolare $\\oint_{\\partial S} F\\cdot d\\ell$ posso sostituire $S$ con un'altra superficie $S'$ avente lo stesso bordo?",
      opts:[
        {x:"Perché Stokes lega la circuitazione al bordo: ogni $S'$ con $\\partial S'=\\partial S$ dà lo stesso flusso del rotore", c:true},
        {x:"Perché due superfici hanno sempre lo stesso flusso del rotore"},
        {x:"Perché il rotore non dipende da $F$"},
        {x:"Non è lecito: la superficie è unica"}
      ],
      hint:"Il primo membro di Stokes dipende SOLO dal bordo, purché $F\\in C^1$ nella regione tra le due superfici.",
      sol:"Stokes: $\\oint_{\\partial S}F\\cdot d\\ell=\\iint_{S}(\\nabla\\times F)\\cdot n\\,dS$ dipende solo da $\\partial S$. Se $\\partial S'=\\partial S$ con la stessa orientazione e $F\\in C^1$ nella regione racchiusa, il flusso del rotore è identico. Si sceglie allora la $S'$ più comoda, tipicamente un disco piano."
    }]},

  { pool:"stokes", src:"tipo B · manuale", steps:[{
      t:"Il teorema di Green nel piano, $\\oint_{\\partial D} F\\cdot d\\ell=\\iint_D(\\partial_x F_2-\\partial_y F_1)\\,dx\\,dy$, è:",
      opts:[
        {x:"Il caso particolare di Stokes per $S$ piana nel piano $xy$ con $n=(0,0,1)$", c:true},
        {x:"Un teorema indipendente da Stokes"},
        {x:"Il teorema della divergenza in 2D"},
        {x:"Valido solo per campi conservativi"}
      ],
      hint:"$\\partial_x F_2-\\partial_y F_1$ è proprio la terza componente del rotore.",
      sol:"Green è Stokes con $S$ regione piana e $n=(0,0,1)$: allora $(\\nabla\\times F)\\cdot n=(\\nabla\\times F)_3=\\partial_x F_2-\\partial_y F_1$. Non è la divergenza (quello è il teorema di Gauss)."
    }]},

  { pool:"stokes", src:"tipo B · manuale", steps:[{
      t:"Se la normale $n$ di una superficie cartesiana ha terza componente NEGATIVA, il bordo $\\partial S$ orientato coerentemente è:",
      opts:[
        {x:"Percorso in senso orario visto dall'alto", c:true},
        {x:"Percorso in senso antiorario visto dall'alto"},
        {x:"Percorso due volte"},
        {x:"Indeterminato"}
      ],
      hint:"Mano destra: pollice verso il basso ribalta il verso rispetto al caso 'normale verso l'alto'.",
      sol:"Con $n_3>0$ (normale verso l'alto) il bordo è antiorario visto dall'alto; con $n_3<0$ è orario. Invertire la normale senza invertire il verso del bordo introduce un segno sbagliato in Stokes (cfr. esame 20250127, es.1)."
    }]},

  { pool:"stokes", src:"tipo B · manuale", steps:[{
      t:"Per una superficie cartesiana $z=f(x,y)$ si integra $\\iint_D (\\nabla\\times F)\\cdot(-f_x,-f_y,1)\\,dx\\,dy$ SENZA normalizzare $(-f_x,-f_y,1)$. Perché?",
      opts:[
        {x:"Perché $n\\,dS=(-f_x,-f_y,1)\\,dx\\,dy$: la norma nel $dS$ e quella nel versore si semplificano", c:true},
        {x:"Perché la normale è già un versore"},
        {x:"Perché il rotore è costante"},
        {x:"Perché l'area di $D$ vale $1$"}
      ],
      hint:"$dS=|X_x\\times X_y|\\,dx\\,dy$ e $n=(X_x\\times X_y)/|X_x\\times X_y|$: nel prodotto $n\\,dS$ la norma sparisce.",
      sol:"$n\\,dS=\\frac{X_x\\times X_y}{|X_x\\times X_y|}\\,|X_x\\times X_y|\\,dx\\,dy=(X_x\\times X_y)\\,dx\\,dy=(-f_x,-f_y,1)\\,dx\\,dy$. Si usa il vettore NON normalizzato: normalizzare e poi rimoltiplicare per $\\sqrt{1+f_x^2+f_y^2}$ è un doppio conteggio."
    }]},

  { pool:"stokes", src:"tipo B · manuale", steps:[{
      t:"Quanto vale $\\nabla\\times(\\nabla U)$ per un campo scalare $U\\in C^2$?",
      opts:[
        {x:"$0$: il rotore di un gradiente è sempre nullo", c:true},
        {x:"$\\nabla U$"},
        {x:"$\\nabla^2 U$"},
        {x:"Dipende da $U$"}
      ],
      hint:"Segue dall'uguaglianza delle derivate miste (teorema di Schwarz).",
      sol:"$\\nabla\\times(\\nabla U)=0$ perché ogni componente è una differenza di derivate miste uguali (Schwarz): $\\partial_y\\partial_z U-\\partial_z\\partial_y U=0$, ecc. Un campo conservativo è quindi irrotazionale, e per Stokes la sua circuitazione su ogni bordo di superficie contenuta nel dominio è nulla."
    }]},

  { pool:"stokes", src:"tipo B · manuale", steps:[{
      t:"Due superfici $S_1,S_2$ con lo stesso bordo danno lo stesso flusso del rotore. Qual è la ragione profonda?",
      opts:[
        {x:"$\\nabla\\cdot(\\nabla\\times F)=0$: chiudendo $S_1\\cup S_2$ e applicando Gauss, il flusso totale del rotore è nullo", c:true},
        {x:"Perché i rotori sono sempre uguali"},
        {x:"Perché le aree sono uguali"},
        {x:"È una coincidenza numerica"}
      ],
      hint:"Unisci le due superfici in una chiusa e usa che la divergenza del rotore è identicamente zero.",
      sol:"$\\nabla\\cdot(\\nabla\\times F)=0$ identicamente. Se $S_1$ e $S_2$ hanno lo stesso bordo, $S_1\\cup(-S_2)$ è chiusa e racchiude un volume $V$: per Gauss $\\iint_{\\partial V}(\\nabla\\times F)\\cdot n=\\iiint_V \\nabla\\cdot(\\nabla\\times F)=0$, cioè i due flussi coincidono. È la base per cambiare superficie in Stokes."
    }]},

  { pool:"stokes", src:"tipo B · manuale", steps:[{
      t:"Sul campo $F=\\frac{(-y,\\,x)}{x^2+y^2}$ (su $\\mathbb{R}^2\\setminus\\{0\\}$) si ha $\\nabla\\times F=0$, eppure la circuitazione su un cerchio attorno all'origine vale $2\\pi$. Contraddice Stokes?",
      opts:[
        {x:"No: nessuna superficie con quel bordo sta tutta nel dominio (l'origine è esclusa), quindi Stokes non si applica", c:true},
        {x:"Sì, Stokes è violato"},
        {x:"No, perché in realtà il rotore non è nullo"},
        {x:"Sì, perché il campo non è $C^1$"}
      ],
      hint:"Per applicare Stokes servirebbe una superficie CONTENUTA nel dominio: ma ogni disco con quel bordo contiene l'origine.",
      sol:"Nessuna contraddizione: Stokes richiede una superficie tutta nel dominio di $C^1$ di $F$. Ogni superficie col bordo attorno all'origine contiene il buco, dove $F$ non è definito. Irrotazionale su dominio NON semplicemente connesso non implica circuitazione nulla (cfr. esame 20230907)."
    }]},

  { pool:"stokes", src:"tipo B · manuale", steps:[{
      t:"Se inverto il verso di percorrenza di $\\partial S$, la circuitazione $\\oint_{\\partial S} F\\cdot d\\ell$:",
      opts:[
        {x:"Cambia segno", c:true},
        {x:"Resta invariata"},
        {x:"Si annulla"},
        {x:"Raddoppia"}
      ],
      hint:"$d\\ell$ cambia verso: l'integrale di linea di seconda specie è orientato.",
      sol:"L'integrale di linea di seconda specie è orientato: invertendo $\\partial S$ si ha $d\\ell\\to-d\\ell$ e la circuitazione cambia segno. Coerentemente, in Stokes cambia anche il verso di $n$ e quindi il segno del flusso del rotore."
    }]},

  { pool:"stokes", src:"tipo B · manuale", steps:[{
      t:"Perché spesso conviene passare da $\\oint_{\\partial S} F\\cdot d\\ell$ al flusso $\\iint_S(\\nabla\\times F)\\cdot n\\,dS$?",
      opts:[
        {x:"Perché $\\nabla\\times F$ è spesso più semplice di $F$ (componenti costanti o nulle) e $S$ si sceglie piana", c:true},
        {x:"Perché l'integrale di linea non è mai calcolabile"},
        {x:"Perché il flusso è sempre nullo"},
        {x:"Perché così si evita di calcolare il rotore"}
      ],
      hint:"Il vantaggio è doppio: rotore semplice + libertà di scegliere la superficie col medesimo bordo.",
      sol:"Il rotore dei campi da esame ha spesso componenti costanti o nulle (es. $(0,1+z,0)$, $(-1,2(x-z),0)$), e per Stokes si sceglie la superficie più comoda con lo stesso bordo (un disco su un piano). L'integrale doppio diventa elementare. A volte conviene il verso opposto: flusso difficile ridotto a circuitazione facile."
    }]},

  /* ===================== ESERCIZI (15) ===================== */

  { pool:"stokes", src:"20220124 · es.4", steps:[{
      t:"Curva $\\gamma$: $z=x+3y+4$ su $x^2+y^2=4$; per il campo $F$ si trova $\\nabla\\times F=(-1,\\,2(x-z),\\,0)$. Con $S$ il pezzo di piano ($X_x\\times X_y=(-1,-3,1)$), quanto vale $\\oint_\\gamma F\\cdot d\\ell$?",
      opts:[
        {x:"$100\\pi$", c:true},
        {x:"$0$"},
        {x:"$25\\pi$"},
        {x:"$-100\\pi$"}
      ],
      hint:"Sostituisci $z=x+3y+4$ nel rotore PRIMA di integrare; poi usa $\\iint_D y\\,dx\\,dy=0$ sul disco centrato.",
      sol:"Per Stokes $\\oint_\\gamma F\\cdot d\\ell=\\iint_D(\\nabla\\times F)\\cdot(-1,-3,1)\\,dx\\,dy$. Il prodotto scalare dà $1-6(x-z)$; con $z=x+3y+4$ si ha $x-z=-3y-4$, quindi l'integrando è $25+18y$. Su $D=\\{x^2+y^2\\le4\\}$: $\\iint 18y=0$ e $\\iint 25=25\\cdot4\\pi=100\\pi$."
    }]},

  { pool:"stokes", src:"20220706 · es.4", steps:[{
      t:"Per $F=(y^2+y+z^2,\\,2xy+x,\\,2axz)$, il rotore $\\nabla\\times F$ vale:",
      opts:[
        {x:"$(0,\\,2z-2az,\\,0)$", c:true},
        {x:"$(0,\\,2az-2z,\\,0)$"},
        {x:"$(2z,\\,0,\\,1)$"},
        {x:"$(0,\\,0,\\,2az)$"}
      ],
      hint:"Componente 2: $\\partial_z F_1-\\partial_x F_3=2z-2az$. Attento all'ordine della differenza.",
      sol:"Dal determinante formale: comp1 $=\\partial_y(2axz)-\\partial_z(2xy+x)=0$; comp2 $=\\partial_z(y^2+y+z^2)-\\partial_x(2axz)=2z-2az$; comp3 $=\\partial_x(2xy+x)-\\partial_y(y^2+y+z^2)=(2y+1)-(2y+1)=0$. Quindi $\\nabla\\times F=(0,2z-2az,0)$."
    }]},

  { pool:"stokes", src:"20220706 · es.4", steps:[{
      t:"Con $\\nabla\\times F=(0,\\,2z-2az,\\,0)$, per quale valore di $a$ la circuitazione $\\oint_\\gamma F\\cdot d\\ell$ è nulla su OGNI curva chiusa?",
      opts:[
        {x:"$a=1$: allora $\\nabla\\times F=0$ e il campo è irrotazionale (conservativo su dominio semplice)", c:true},
        {x:"$a=0$"},
        {x:"$a=-1$"},
        {x:"Nessun valore: dipende sempre dalla curva"}
      ],
      hint:"Circuitazione nulla su ogni bordo di superficie semplice richiede rotore identicamente nullo.",
      sol:"Per $a=1$: $\\nabla\\times F=(0,2z-2z,0)=0$. Per Stokes $\\oint_\\gamma F\\cdot d\\ell=\\iint_S 0=0$ su ogni bordo di superficie contenuta nel dominio; su $\\mathbb{R}^3$ (semplicemente connesso) $F$ è anche conservativo."
    }]},

  { pool:"stokes", src:"20230705 · es.2", steps:[{
      t:"Curva $\\Gamma$: $x^2+y^2=8$, $x+y+z=1$; $F=(x^2y,\\,y^2z,\\,xz)$. Usando il piano $z=1-x-y$ (con $X_x\\times X_y=(1,1,1)$), quanto vale $\\oint_\\Gamma F\\cdot d\\ell$?",
      opts:[
        {x:"$-40\\pi$", c:true},
        {x:"$40\\pi$"},
        {x:"$-8\\pi$"},
        {x:"$0$"}
      ],
      hint:"$\\nabla\\times F=(-y^2,-z,-x^2)$; sostituisci $z=1-x-y$ e integra su $D=\\{x^2+y^2\\le8\\}$ in coordinate polari.",
      sol:"Stokes: $\\oint_\\Gamma F\\cdot d\\ell=\\iint_D(-y^2,-z,-x^2)\\cdot(1,1,1)\\,dx\\,dy=\\iint_D(-x^2-y^2-z)$ con $z=1-x-y$, cioè $-x^2-y^2+x+y-1$. Su $D$ (raggio $\\sqrt8$): $\\iint(-x^2-y^2)=-32\\pi$, $\\iint(x+y)=0$, $\\iint(-1)=-8\\pi$. Totale $-40\\pi$."
    }]},

  { pool:"stokes", src:"20230123 · es.3", steps:[{
      t:"Per $F=(y^2-x,\\,2xy,\\,-xz-x)$ (bordo di uno spicchio di sfera), il rotore $\\nabla\\times F$ è:",
      opts:[
        {x:"$(0,\\,1+z,\\,0)$", c:true},
        {x:"$(0,\\,-1-z,\\,0)$"},
        {x:"$(2y,\\,0,\\,2y)$"},
        {x:"$(1+z,\\,0,\\,0)$"}
      ],
      hint:"Comp2 $=\\partial_z F_1-\\partial_x F_3=0-(-z-1)=z+1$.",
      sol:"comp1 $=\\partial_y(-xz-x)-\\partial_z(2xy)=0$; comp2 $=\\partial_z(y^2-x)-\\partial_x(-xz-x)=0-(-z-1)=1+z$; comp3 $=\\partial_x(2xy)-\\partial_y(y^2-x)=2y-2y=0$. Quindi $\\nabla\\times F=(0,1+z,0)$; via Stokes il lavoro sul bordo dello spicchio vale $9\\pi/2$."
    }]},

  { pool:"stokes", src:"20250127 · es.1", steps:[{
      t:"$\\nabla\\times F=(3z-1,\\,0,\\,-y)$ su $S$: piano $z=-2x-y+2$, $D=\\{x^2+y^2\\le9\\}$, normale con TERZA componente negativa. Quanto vale $\\oint_{\\partial S} F\\cdot d\\ell$?",
      opts:[
        {x:"$-90\\pi$", c:true},
        {x:"$90\\pi$"},
        {x:"$-10\\pi$"},
        {x:"$0$"}
      ],
      hint:"Normale con 3ª componente negativa: usa $(-2,-1,-1)$, opposto di $(2,1,1)$. Poi sostituisci $z=-2x-y+2$.",
      sol:"Con $n_3<0$ si ha $n\\,dS=(-2,-1,-1)\\,dx\\,dy$. $(\\nabla\\times F)\\cdot(-2,-1,-1)=-6z+2+y$; con $z=-2x-y+2$ diventa $12x+7y-10$. Su $D$ (raggio 3, centrato): $\\iint(12x+7y)=0$, $\\iint(-10)=-90\\pi$. Il segno della normale determina il verso del bordo (Stokes)."
    }]},

  { pool:"stokes", src:"20240704 · es.3", steps:[{
      t:"Per $F=(y+xz,\\,z+e^y,\\,x+e^z)$, il rotore $\\nabla\\times F$ è:",
      opts:[
        {x:"$(-1,\\,x-1,\\,-1)$", c:true},
        {x:"$(0,\\,0,\\,-1)$"},
        {x:"$(1,\\,1-x,\\,1)$"},
        {x:"$(-1,\\,1-x,\\,-1)$"}
      ],
      hint:"Comp1 $=\\partial_y F_3-\\partial_z F_2=0-1$; comp2 $=\\partial_z F_1-\\partial_x F_3=x-1$.",
      sol:"comp1 $=\\partial_y(x+e^z)-\\partial_z(z+e^y)=0-1=-1$; comp2 $=\\partial_z(y+xz)-\\partial_x(x+e^z)=x-1$; comp3 $=\\partial_x(z+e^y)-\\partial_y(y+xz)=0-1=-1$. Quindi $\\nabla\\times F=(-1,x-1,-1)$, da inserire nel flusso di Stokes."
    }]},

  { pool:"stokes", src:"tipo B · manuale", steps:[{
      t:"Calcola $\\oint_{\\partial D} F\\cdot d\\ell$ con $F=(-y,\\,x)$ e $D$ disco unitario, percorso antiorario, via Green.",
      opts:[
        {x:"$2\\pi$", c:true},
        {x:"$0$"},
        {x:"$\\pi$"},
        {x:"$-2\\pi$"}
      ],
      hint:"$\\partial_x F_2-\\partial_y F_1=1-(-1)=2$; l'integrale doppio è $2$ volte l'area.",
      sol:"Green (Stokes 2D): $\\oint_{\\partial D}F\\cdot d\\ell=\\iint_D(\\partial_x F_2-\\partial_y F_1)\\,dx\\,dy=\\iint_D 2\\,dx\\,dy=2\\cdot\\text{area}(D)=2\\pi$."
    }]},

  { pool:"stokes", src:"tipo B · manuale", steps:[{
      t:"Usando Green, $\\oint_{\\partial D} x\\,dy$ (cioè $F=(0,\\,x)$) lungo il cerchio di raggio $R$ antiorario vale:",
      opts:[
        {x:"$\\pi R^2$", c:true},
        {x:"$2\\pi R$"},
        {x:"$0$"},
        {x:"$2\\pi R^2$"}
      ],
      hint:"$\\partial_x F_2-\\partial_y F_1=1$: l'integrale doppio diventa l'area di $D$.",
      sol:"Green: $\\oint_{\\partial D} x\\,dy=\\iint_D(\\partial_x(x)-\\partial_y(0))\\,dx\\,dy=\\iint_D 1\\,dx\\,dy=\\text{area}(D)=\\pi R^2$. È la formula dell'area via circuitazione, caso 2D di Stokes."
    }]},

  { pool:"stokes", src:"tipo B · manuale", steps:[{
      t:"Calcola $\\nabla\\times F$ per $F=(xy,\\,yz,\\,zx)$.",
      opts:[
        {x:"$(-y,\\,-z,\\,-x)$", c:true},
        {x:"$(y,\\,z,\\,x)$"},
        {x:"$(z,\\,x,\\,y)$"},
        {x:"$(0,\\,0,\\,0)$"}
      ],
      hint:"comp1 $=\\partial_y(zx)-\\partial_z(yz)=0-y$.",
      sol:"comp1 $=\\partial_y(zx)-\\partial_z(yz)=0-y=-y$; comp2 $=\\partial_z(xy)-\\partial_x(zx)=0-z=-z$; comp3 $=\\partial_x(yz)-\\partial_y(xy)=0-x=-x$. Quindi $\\nabla\\times F=(-y,-z,-x)$."
    }]},

  { pool:"stokes", src:"tipo B · manuale", steps:[{
      t:"Per $F=(-y,\\,x,\\,0)$ si ha $\\nabla\\times F=(0,0,2)$. La circuitazione lungo il cerchio unitario nel piano $xy$ (antiorario, $n=(0,0,1)$) vale:",
      opts:[
        {x:"$2\\pi$", c:true},
        {x:"$0$"},
        {x:"$\\pi$"},
        {x:"$4\\pi$"}
      ],
      hint:"Flusso di $(0,0,2)$ attraverso il disco unitario $=2\\cdot$ area.",
      sol:"Stokes: $\\oint F\\cdot d\\ell=\\iint_S(0,0,2)\\cdot(0,0,1)\\,dS=2\\cdot\\text{area}(\\text{disco})=2\\pi$. Il rotore costante $2\\hat z$ misura la vorticità del campo rotante."
    }]},

  { pool:"stokes", src:"tipo B · manuale", steps:[{
      t:"Per $F=(0,\\,0,\\,z)$, la circuitazione $\\oint_{\\partial S} F\\cdot d\\ell$ su un qualunque bordo vale:",
      opts:[
        {x:"$0$, perché $\\nabla\\times F=0$", c:true},
        {x:"$z\\cdot$ lunghezza del bordo"},
        {x:"L'area di $S$"},
        {x:"Dipende dalla superficie scelta"}
      ],
      hint:"Calcola prima il rotore: tutte le derivate incrociate di $F=(0,0,z)$ si annullano.",
      sol:"comp1 $=\\partial_y z-\\partial_z 0=0$; comp2 $=\\partial_z 0-\\partial_x z=0$; comp3 $=\\partial_x 0-\\partial_y 0=0$. Quindi $\\nabla\\times F=0$ e per Stokes $\\oint_{\\partial S} F\\cdot d\\ell=0$ su ogni bordo (il campo $z\\hat z$ è un gradiente: $F=\\nabla(z^2/2)$)."
    }]},

  { pool:"stokes", src:"20220706 · es.4", steps:[{
      t:"Con $\\nabla\\times F=(0,\\,2z-2az,\\,0)$ e superficie $S$: $z=4x+y+1$ su $x^2+y^2\\le1$, la circuitazione risulta $2(a-1)\\pi$. Per $a=2$ quanto vale?",
      opts:[
        {x:"$2\\pi$", c:true},
        {x:"$0$"},
        {x:"$-2\\pi$"},
        {x:"$4\\pi$"}
      ],
      hint:"Sostituisci $a=2$ nella formula $2(a-1)\\pi$.",
      sol:"Per Stokes il flusso di $(0,2z-2az,0)$ attraverso $S$ si riduce, dopo l'integrazione sul disco, a $2(a-1)\\pi$; con $a=2$ vale $2\\pi$. Per $a=1$ tornerebbe $0$, coerente col campo irrotazionale."
    }]},

  { pool:"stokes", src:"tipo B · manuale", steps:[{
      t:"Devi calcolare $\\oint_\\gamma F\\cdot d\\ell$ dove $\\gamma$ è il cerchio $x^2+y^2=1$ che giace sul piano $z=x+2$. Quale superficie conviene per Stokes?",
      opts:[
        {x:"Il disco piano $\\{x^2+y^2\\le1,\\ z=x+2\\}$, di cui $\\gamma$ è il bordo", c:true},
        {x:"Una semisfera qualsiasi"},
        {x:"Il cilindro $x^2+y^2=1$"},
        {x:"Nessuna: si deve calcolare l'integrale di linea direttamente"}
      ],
      hint:"Il bordo determina la superficie: scegli la più semplice con quel bordo, cioè un pezzo di piano.",
      sol:"Per Stokes ogni superficie con $\\partial S=\\gamma$ va bene; si sceglie la più semplice, il disco piano $z=x+2$ sopra $D=\\{x^2+y^2\\le1\\}$, con $X_x\\times X_y=(-f_x,-f_y,1)=(-1,0,1)$. Cilindro e semisfera complicano l'integrale senza motivo."
    }]},

  { pool:"stokes", src:"20220124 · es.4", steps:[{
      t:"Superficie cartesiana con $X_x\\times X_y=(-1,-3,1)$ (terza componente $+1$). Per Stokes il bordo va percorso:",
      opts:[
        {x:"In senso antiorario visto dall'alto: coerente con $n_3>0$, nessun segno da aggiungere", c:true},
        {x:"In senso orario visto dall'alto"},
        {x:"In un verso qualunque"},
        {x:"Va sempre aggiunto un segno meno"}
      ],
      hint:"$n_3>0$ (normale verso l'alto) corrisponde a bordo antiorario, per la regola della mano destra.",
      sol:"$X_x\\times X_y=(-f_x,-f_y,1)$ ha terza componente positiva: la normale punta verso l'alto e il bordo coerente è antiorario visto dall'alto, senza correzioni di segno. Se il testo imponesse $n_3<0$, si userebbe $-(X_x\\times X_y)$ e bordo orario."
    }]}

];

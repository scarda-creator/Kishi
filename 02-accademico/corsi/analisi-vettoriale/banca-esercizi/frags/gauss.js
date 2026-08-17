Q.gauss = [

  /* ================= CONCETTUALI (15) ================= */

  { pool:"gauss", src:"tipo A · manuale", steps:[{
      t:"Il teorema della divergenza $\\iint_{\\partial V} F\\cdot n\\,dS=\\iiint_V \\nabla\\cdot F\\,dV$ si applica. Quale ipotesi NON puoi omettere?",
      opts:[
        {x:"$F\\in C^1$ su un aperto che contiene $\\overline V$, e $\\partial V$ regolare a tratti con normale uscente",c:true},
        {x:"$F$ soltanto continua su $V$"},
        {x:"$V$ semplicemente connesso"},
        {x:"$\\nabla\\cdot F$ costante"}],
      hint:"La regolarità richiesta è $C^1$; la semplice connessione riguarda i campi conservativi, non Gauss.",
      sol:"Il Teorema della divergenza richiede $F\\in C^1$ su un intorno del compatto $\\overline V$ e $\\partial V$ regolare a tratti con normale $n$ USCENTE. La semplice connessione è irrilevante qui; $\\nabla\\cdot F$ può essere una qualsiasi funzione continua."
    }]
  },

  { pool:"gauss", src:"tipo A · manuale", steps:[{
      t:"Nel teorema della divergenza la normale $n$ su $\\partial V$ deve essere:",
      opts:[
        {x:"uscente da $V$",c:true},
        {x:"entrante in $V$"},
        {x:"tangente a $\\partial V$"},
        {x:"quella con terza componente sempre positiva"}],
      hint:"Il segno del flusso dipende dal verso della normale; il teorema fissa un verso preciso.",
      sol:"$n$ è la normale USCENTE. Se usi quella entrante il flusso cambia segno: $\\iint_{\\partial V}F\\cdot n_{\\text{ent}}\\,dS=-\\iiint_V\\nabla\\cdot F\\,dV$. Teorema della divergenza."
    }]
  },

  { pool:"gauss", src:"tipo A · manuale", steps:[{
      t:"Se $\\nabla\\cdot F\\equiv 0$ su tutto $V$, quanto vale il flusso uscente attraverso $\\partial V$?",
      opts:[
        {x:"$0$",c:true},
        {x:"il volume di $V$"},
        {x:"non determinabile senza calcolo diretto"},
        {x:"dipende dalla forma di $V$"}],
      hint:"Integra la divergenza sul volume.",
      sol:"$\\iint_{\\partial V}F\\cdot n\\,dS=\\iiint_V 0\\,dV=0$. Un campo solenoidale ($\\nabla\\cdot F=0$) ha flusso nullo attraverso ogni superficie chiusa che borda un volume in cui $F\\in C^1$. Teorema della divergenza."
    }]
  },

  { pool:"gauss", src:"tipo A · manuale", steps:[{
      t:"Se $\\nabla\\cdot F=c$ costante, il flusso uscente da $V$ vale:",
      opts:[
        {x:"$c\\cdot\\operatorname{vol}(V)$",c:true},
        {x:"$c$"},
        {x:"$c\\cdot\\operatorname{area}(\\partial V)$"},
        {x:"$\\operatorname{vol}(V)$"}],
      hint:"L'integrale di una costante sul volume è la costante per il volume.",
      sol:"$\\iiint_V c\\,dV=c\\,\\operatorname{vol}(V)$. Quando la divergenza è costante il flusso si riduce a un volume: è il motivo per cui Gauss conviene. Teorema della divergenza."
    }]
  },

  { pool:"gauss", src:"tipo A · manuale", steps:[{
      t:"La frontiera $\\partial V$ è fatta di tre superfici e $\\nabla\\cdot F=2$. Conviene di più:",
      opts:[
        {x:"calcolare $\\iiint_V 2\\,dV=2\\operatorname{vol}(V)$ con Gauss",c:true},
        {x:"parametrizzare le tre superfici e sommare i tre flussi"},
        {x:"applicare Stokes al bordo"},
        {x:"costruire il potenziale scalare"}],
      hint:"Con divergenza semplice, un integrale di volume batte tre integrali di superficie.",
      sol:"Con $\\nabla\\cdot F$ costante o semplice, Gauss trasforma tre flussi di superficie in un unico integrale di volume $\\iiint_V\\nabla\\cdot F$. È il criterio di convenienza. Teorema della divergenza."
    }]
  },

  { pool:"gauss", src:"tipo H · manuale", steps:[{
      t:"$\\Sigma$ è una superficie APERTA (una calotta senza coperchio). Per calcolarne il flusso con Gauss devi:",
      opts:[
        {x:"aggiungere un tappo $T$ che chiuda $\\Sigma$, applicare Gauss al solido, poi sottrarre il flusso su $T$",c:true},
        {x:"applicare Gauss direttamente a $\\Sigma$"},
        {x:"usare Stokes"},
        {x:"il flusso è nullo perché $\\Sigma$ è aperta"}],
      hint:"Gauss vale solo per superfici CHIUSE; una superficie aperta va prima chiusa.",
      sol:"Gauss richiede una superficie chiusa. Chiudi $\\Sigma$ con un tappo $T$: $\\iint_\\Sigma+\\iint_T=\\iiint_V\\nabla\\cdot F$, quindi $\\iint_\\Sigma F\\cdot n\\,dS=\\iiint_V\\nabla\\cdot F\\,dV-\\iint_T F\\cdot n\\,dS$. È il trucco 'tappare e Gauss'. Teorema della divergenza (tipo A/H, manuale)."
    }]
  },

  { pool:"gauss", src:"tipo H · manuale", steps:[{
      t:"Chiudi $\\Sigma$ con un tappo $T$ e applichi Gauss al solido $V$. Con quale orientazione entra $T$ in $\\iint_\\Sigma=\\iiint_V\\nabla\\cdot F-\\iint_T$?",
      opts:[
        {x:"con la normale USCENTE da $V$",c:true},
        {x:"con la normale entrante in $V$"},
        {x:"con orientazione arbitraria"},
        {x:"con la normale di $\\Sigma$ cambiata di segno"}],
      hint:"Nel bilancio di Gauss ogni pezzo di $\\partial V$ è orientato verso l'esterno.",
      sol:"Applicando Gauss al solido chiuso, sia $\\Sigma$ sia $T$ vanno con normale uscente da $V$. Isolando $\\Sigma$: $\\iint_\\Sigma=\\iiint_V\\nabla\\cdot F-\\iint_T$ con $T$ uscente. Sbagliarne il verso è l'errore classico del metodo. Teorema della divergenza."
    }]
  },

  { pool:"gauss", src:"tipo H · manuale", steps:[{
      t:"Su una superficie cartesiana $z=f(x,y)$ si ha $r_x\\wedge r_y=(-f_x,-f_y,1)$ (terza componente positiva, punta in alto). Se questa è il tappo INFERIORE di un solido, la normale uscente da $V$ è:",
      opts:[
        {x:"$(f_x,f_y,-1)$, cioè verso il basso",c:true},
        {x:"$(-f_x,-f_y,1)$, invariata"},
        {x:"$(0,0,1)$"},
        {x:"$(0,0,-1)$"}],
      hint:"Sul fondo del solido, 'uscente' significa verso il basso.",
      sol:"$(-f_x,-f_y,1)$ punta in alto; sul tappo inferiore l'uscente da $V$ punta in basso, quindi si prende $(f_x,f_y,-1)$. Confondere i due segni è la trappola più frequente. Teorema della divergenza."
    }]
  },

  { pool:"gauss", src:"20230210 Es.4", steps:[{
      t:"$\\partial V=\\Sigma_1\\cup\\Sigma_2\\cup\\Sigma_3$. Conosci il flusso totale (via Gauss) e i flussi su $\\Sigma_1,\\Sigma_2$. Il flusso su $\\Sigma_3$ è:",
      opts:[
        {x:"$\\iiint_V\\nabla\\cdot F\\,dV-\\Phi_{\\Sigma_1}-\\Phi_{\\Sigma_2}$",c:true},
        {x:"$\\iiint_V\\nabla\\cdot F\\,dV+\\Phi_{\\Sigma_1}+\\Phi_{\\Sigma_2}$"},
        {x:"$\\Phi_{\\Sigma_1}+\\Phi_{\\Sigma_2}$"},
        {x:"$0$"}],
      hint:"Il flusso totale è la somma dei flussi sui pezzi, tutti uscenti.",
      sol:"Poiché $\\Phi_{\\partial V}=\\Phi_{\\Sigma_1}+\\Phi_{\\Sigma_2}+\\Phi_{\\Sigma_3}=\\iiint_V\\nabla\\cdot F$, si isola $\\Phi_{\\Sigma_3}=\\iiint_V\\nabla\\cdot F-\\Phi_{\\Sigma_1}-\\Phi_{\\Sigma_2}$. Tecnica del flusso 'per differenza', 20230210 Es.4. Teorema della divergenza."
    }]
  },

  { pool:"gauss", src:"tipo A · manuale", steps:[{
      t:"$F=\\dfrac{(x,y,z)}{(x^2+y^2+z^2)^{3/2}}$ ha $\\nabla\\cdot F=0$ dove definito. Il flusso uscente dalla sfera unitaria centrata nell'origine è $0$?",
      opts:[
        {x:"No: $F$ non è $C^1$ nell'origine, che sta dentro $V$; Gauss non si applica e il flusso vale $4\\pi$",c:true},
        {x:"Sì, perché $\\nabla\\cdot F=0$"},
        {x:"Sì, per ogni superficie chiusa"},
        {x:"No, ma il flusso è comunque $0$"}],
      hint:"Gauss richiede $F\\in C^1$ in TUTTO $V$, origine inclusa.",
      sol:"La divergenza è nulla solo fuori dall'origine, dove $F$ ha una singolarità. Con l'origine dentro $V$ l'ipotesi $F\\in C^1(\\overline V)$ cade e Gauss non vale: il flusso è $4\\pi$ (campo di Coulomb). Teorema della divergenza, ipotesi di regolarità."
    }]
  },

  { pool:"gauss", src:"tipo A · manuale", steps:[{
      t:"$\\nabla\\cdot F(P)>0$ in un punto $P$ significa che, localmente, $P$ si comporta come:",
      opts:[
        {x:"una sorgente (flusso netto uscente da un intorno di $P$ positivo)",c:true},
        {x:"un pozzo"},
        {x:"un punto di sella del potenziale"},
        {x:"un punto dove $F=0$"}],
      hint:"Il flusso su un piccolo volume attorno a $P$ è $\\approx\\nabla\\cdot F(P)\\cdot\\operatorname{vol}$.",
      sol:"$\\nabla\\cdot F(P)=\\lim_{V\\to P}\\frac{1}{\\operatorname{vol}(V)}\\iint_{\\partial V}F\\cdot n\\,dS$: è la densità di flusso uscente. Positiva = sorgente, negativa = pozzo. È la lettura fisica del Teorema della divergenza."
    }]
  },

  { pool:"gauss", src:"tipo A · manuale", steps:[{
      t:"Vuoi calcolare $\\operatorname{vol}(V)$ come integrale di flusso. Quale campo scegli?",
      opts:[
        {x:"un $F$ con $\\nabla\\cdot F=1$, per esempio $F=(0,0,z)$ o $F=\\tfrac13(x,y,z)$",c:true},
        {x:"un $F$ con $\\nabla\\cdot F=0$"},
        {x:"$F=(x,y,z)$ senza fattori"},
        {x:"un campo qualsiasi"}],
      hint:"Serve $\\iiint_V\\nabla\\cdot F=\\operatorname{vol}(V)$, cioè divergenza unitaria.",
      sol:"Se $\\nabla\\cdot F=1$ allora $\\iint_{\\partial V}F\\cdot n\\,dS=\\iiint_V 1\\,dV=\\operatorname{vol}(V)$. Con $F=(x,y,z)$ la divergenza è $3$, quindi $\\operatorname{vol}(V)=\\tfrac13\\iint_{\\partial V}(x,y,z)\\cdot n\\,dS$. Teorema della divergenza."
    }]
  },

  { pool:"gauss", src:"tipo H · manuale", steps:[{
      t:"Scrivi $\\iint_\\Sigma F\\cdot n=\\iiint_V\\nabla\\cdot F$ per una calotta APERTA $\\Sigma$. Cosa c'è di sbagliato?",
      opts:[
        {x:"$\\Sigma$ non è chiusa: non borda alcun volume, quindi Gauss non è applicabile senza prima tapparla",c:true},
        {x:"niente, è corretto"},
        {x:"$V$ va preso bidimensionale"},
        {x:"manca solo un fattore $2\\pi$"}],
      hint:"Gauss lega un volume alla sua frontiera CHIUSA.",
      sol:"Una superficie aperta non è la frontiera di un solido: $\\iiint_V\\nabla\\cdot F$ non ha nemmeno un $V$ ben definito. Bisogna chiudere $\\Sigma$ con un tappo e poi sottrarne il flusso. Teorema della divergenza."
    }]
  },

  { pool:"gauss", src:"tipo A · manuale", steps:[{
      t:"Per $F=(x,y,z)$ il flusso uscente da un qualunque solido $V$ (con $\\partial V$ regolare) vale:",
      opts:[
        {x:"$3\\operatorname{vol}(V)$",c:true},
        {x:"$\\operatorname{vol}(V)$"},
        {x:"$4\\pi$ sempre"},
        {x:"$0$"}],
      hint:"Calcola la divergenza di $(x,y,z)$.",
      sol:"$\\nabla\\cdot(x,y,z)=1+1+1=3$, quindi $\\iint_{\\partial V}(x,y,z)\\cdot n\\,dS=3\\operatorname{vol}(V)$ per ogni solido. Teorema della divergenza."
    }]
  },

  { pool:"gauss", src:"20240619 Es.1", steps:[{
      t:"$F=(e^x+2z,\\,2y,\\,5-z\\,e^x)$. Prima di parametrizzare, calcola $\\nabla\\cdot F$:",
      opts:[
        {x:"$2$ (i termini $e^x$ si cancellano)",c:true},
        {x:"$e^x+2-z\\,e^x$"},
        {x:"$2e^x+2$"},
        {x:"$0$"}],
      hint:"$\\partial_x(e^x+2z)=e^x$ e $\\partial_z(5-z\\,e^x)=-e^x$: si elidono.",
      sol:"$\\partial_x F_1=e^x$, $\\partial_y F_2=2$, $\\partial_z F_3=-e^x$; somma $=2$. Un campo dall'aspetto complicato ha spesso divergenza semplice: calcolarla subito rivela la convenienza di Gauss. 20240619 Es.1. Teorema della divergenza."
    }]
  },

  /* ================= ESERCIZI (15) ================= */

  { pool:"gauss", src:"20240122 Es.4", steps:[{
      t:"$F=(0,0,z)$ e il flusso uscente da un solido $E$ vale $\\tfrac{32}{3}\\pi$. Quanto vale $\\operatorname{vol}(E)$?",
      opts:[
        {x:"$\\tfrac{32}{3}\\pi$",c:true},
        {x:"$32\\pi$"},
        {x:"$\\tfrac{32}{9}\\pi$"},
        {x:"$\\tfrac{16}{3}\\pi$"}],
      hint:"$\\nabla\\cdot(0,0,z)=1$.",
      sol:"$\\nabla\\cdot F=1$, quindi per Gauss $\\Phi=\\iiint_E 1\\,dV=\\operatorname{vol}(E)$. Dal flusso $\\tfrac{32}{3}\\pi$ segue $\\operatorname{vol}(E)=\\tfrac{32}{3}\\pi$. 20240122 Es.4. Teorema della divergenza."
    }]
  },

  { pool:"gauss", src:"tipo A · manuale", steps:[{
      t:"Flusso uscente di $F=(x,y,z)$ dalla sfera $x^2+y^2+z^2\\le 4$:",
      opts:[
        {x:"$32\\pi$",c:true},
        {x:"$16\\pi$"},
        {x:"$\\tfrac{32}{3}\\pi$"},
        {x:"$4\\pi$"}],
      hint:"$\\nabla\\cdot F=3$ e $\\operatorname{vol}=\\tfrac43\\pi R^3$ con $R=2$.",
      sol:"$\\nabla\\cdot F=3$; $\\operatorname{vol}=\\tfrac43\\pi\\cdot 8=\\tfrac{32}{3}\\pi$; flusso $=3\\cdot\\tfrac{32}{3}\\pi=32\\pi$. Teorema della divergenza."
    }]
  },

  { pool:"gauss", src:"tipo A · manuale", steps:[{
      t:"Flusso uscente di $F=(x,y,z)$ dal cubo $[0,1]^3$:",
      opts:[
        {x:"$3$",c:true},
        {x:"$1$"},
        {x:"$6$"},
        {x:"$0$"}],
      hint:"$\\nabla\\cdot F=3$, $\\operatorname{vol}=1$.",
      sol:"$\\nabla\\cdot F=3$, $\\operatorname{vol}([0,1]^3)=1$, flusso $=3\\cdot 1=3$. Verificabile anche faccia per faccia: le tre coppie di facce danno $1$ ciascuna. Teorema della divergenza."
    }]
  },

  { pool:"gauss", src:"20220706 Es.2", steps:[{
      t:"$F=(z+x^2\\sin y,\\,2x\\cos y,\\,x^2+y^2+8z)$ sul solido $E$. Il flusso uscente vale:",
      opts:[
        {x:"$8\\operatorname{vol}(E)$",c:true},
        {x:"$\\operatorname{vol}(E)$"},
        {x:"$10\\operatorname{vol}(E)$"},
        {x:"$0$"}],
      hint:"$\\partial_x(x^2\\sin y)=2x\\sin y$ e $\\partial_y(2x\\cos y)=-2x\\sin y$ si elidono.",
      sol:"$\\nabla\\cdot F=2x\\sin y-2x\\sin y+8=8$; flusso $=\\iiint_E 8\\,dV=8\\operatorname{vol}(E)$. 20220706 Es.2. Teorema della divergenza."
    }]
  },

  { pool:"gauss", src:"20250627 Es.3", steps:[
    { t:"$F=(x^2z+4,\\,-2xyz-y\\,e^z,\\,e^z+2z+1)$ sul cilindro $\\{0\\le z\\le4,\\;(x-z)^2+y^2\\le4\\}$. Calcola $\\nabla\\cdot F$:",
      opts:[
        {x:"$2$",c:true},
        {x:"$2e^z+2$"},
        {x:"$2xz+e^z+2$"},
        {x:"$0$"}],
      hint:"$\\partial_y(-2xyz-y\\,e^z)=-2xz-e^z$: attento al segno di $e^z$.",
      sol:"$\\partial_x F_1=2xz$; $\\partial_y F_2=-2xz-e^z$; $\\partial_z F_3=e^z+2$. Somma $=2$: il termine $e^z$ si cancella. Sbagliarne il segno produce il falso $2e^z+2$. 20250627 Es.3. Teorema della divergenza.",
      cont:"Ora il flusso &rarr;" },
    { t:"Con $\\nabla\\cdot F=2$ e il cilindro traslato (per ogni $z$ un disco di raggio $2$, area $4\\pi$, con $z\\in[0,4]$), il flusso uscente vale:",
      opts:[
        {x:"$32\\pi$",c:true},
        {x:"$16\\pi$"},
        {x:"$8\\pi e^4+24\\pi$"},
        {x:"$64\\pi$"}],
      hint:"$\\operatorname{vol}=\\int_0^4 4\\pi\\,dz$; la traslazione $(x-z)$ non cambia l'area della sezione.",
      sol:"$\\operatorname{vol}(E)=\\int_0^4 4\\pi\\,dz=16\\pi$ (il disco ha sempre raggio $2$: la traslazione dipendente da $z$ non altera l'area). Flusso $=2\\cdot16\\pi=32\\pi$. Con il falso $\\nabla\\cdot F=2e^z+2$ otterresti $8\\pi e^4+24\\pi$. Teorema della divergenza." }
  ]},

  { pool:"gauss", src:"20220124 Es.3", steps:[{
      t:"$T=\\{x^2+y^2\\le z\\le 3+2y\\}$ (proiezione: disco $x^2+(y-1)^2\\le4$), con $\\nabla\\cdot F=y-1$. Il flusso uscente vale:",
      opts:[
        {x:"$0$",c:true},
        {x:"$4\\pi$"},
        {x:"$-\\pi$"},
        {x:"$16\\pi$"}],
      hint:"Centra le polari nel disco: $y-1=\\rho\\sin\\theta$, e $\\int_0^{2\\pi}\\sin\\theta\\,d\\theta=0$.",
      sol:"$\\Phi=\\iint_D(3+2y-x^2-y^2)(y-1)\\,dx\\,dy$. Con $y=1+\\rho\\sin\\theta$ il fattore $(y-1)=\\rho\\sin\\theta$ è dispari in $\\theta$ mentre l'altro fattore dipende da $\\rho$: l'integrale angolare $\\int_0^{2\\pi}\\sin\\theta\\,d\\theta=0$, quindi il flusso è $0$. 20220124 Es.3. Teorema della divergenza."
    }]
  },

  { pool:"gauss", src:"20230210 Es.4", steps:[{
      t:"$E=\\{x^2+y^2+z^2\\le25,\\;x^2+y^2\\le9\\}$ (sfera $\\cap$ cilindro), $F=(x,y,z)$. Per il flusso sul mantello cilindrico $\\Sigma_3$ la via più rapida è:",
      opts:[
        {x:"$\\Phi_{\\Sigma_3}=3\\operatorname{vol}(E)-\\Phi_{\\Sigma_1}-\\Phi_{\\Sigma_2}$ (Gauss per il totale, calotte dirette, mantello per differenza)",c:true},
        {x:"parametrizzare solo $\\Sigma_3$ e integrare $F\\cdot n$"},
        {x:"applicare Stokes al bordo di $\\Sigma_3$"},
        {x:"il flusso è $0$ per simmetria"}],
      hint:"Gauss dà il totale; le calotte sono cartesiane e semplici, il mantello si ottiene per differenza.",
      sol:"Gauss fornisce $\\Phi_{\\partial E}=3\\operatorname{vol}(E)$. Le calotte $\\Sigma_1,\\Sigma_2$ sono cartesiane e si integrano direttamente; sottraendole si isola $\\Phi_{\\Sigma_3}=3\\operatorname{vol}(E)-\\Phi_{\\Sigma_1}-\\Phi_{\\Sigma_2}=144\\pi$. 20230210 Es.4. Teorema della divergenza."
    }]
  },

  { pool:"gauss", src:"tipo A · manuale", steps:[{
      t:"Volume del solido $E=\\{x^2+y^2\\le z\\le 2-x^2-y^2\\}$ (fra i due paraboloidi):",
      opts:[
        {x:"$\\pi$",c:true},
        {x:"$2\\pi$"},
        {x:"$\\tfrac{\\pi}{2}$"},
        {x:"$\\tfrac{2\\pi}{3}$"}],
      hint:"Intersezione $x^2+y^2=1$; integra $(2-2\\rho^2)$ in polari con Jacobiano $\\rho$.",
      sol:"I paraboloidi si incontrano dove $\\rho^2=2-\\rho^2\\Rightarrow\\rho=1$. $\\operatorname{vol}=\\int_0^{2\\pi}\\!\\!\\int_0^1(2-2\\rho^2)\\rho\\,d\\rho\\,d\\theta=2\\pi[\\rho^2-\\tfrac{\\rho^4}{2}]_0^1=2\\pi\\cdot\\tfrac12=\\pi$. Volume come integrale triplo, $\\operatorname{vol}=\\iint_D(z_{sup}-z_{inf})$."
    }]
  },

  { pool:"gauss", src:"tipo H · manuale", steps:[
    { t:"$\\Sigma$ è il paraboloide $z=x^2+y^2$ con $0\\le z\\le1$ (coppa APERTA), normale uscente dal solido sottostante. Chiudi con il disco $T=\\{x^2+y^2\\le1,\\,z=1\\}$. Con $F=(x,y,z)$, quanto vale $\\iiint_V\\nabla\\cdot F\\,dV$ sul solido $V$ fra paraboloide e disco?",
      opts:[
        {x:"$\\tfrac{3\\pi}{2}$",c:true},
        {x:"$3\\pi$"},
        {x:"$\\tfrac{\\pi}{2}$"},
        {x:"$\\pi$"}],
      hint:"$\\nabla\\cdot F=3$; $\\operatorname{vol}(V)=\\int_0^{2\\pi}\\int_0^1(1-\\rho^2)\\rho\\,d\\rho\\,d\\theta$.",
      sol:"$\\operatorname{vol}(V)=\\int_0^{2\\pi}\\int_0^1(1-\\rho^2)\\rho\\,d\\rho\\,d\\theta=2\\pi(\\tfrac12-\\tfrac14)=\\tfrac{\\pi}{2}$. Con $\\nabla\\cdot F=3$: $\\iiint_V 3\\,dV=\\tfrac{3\\pi}{2}$. Teorema della divergenza.",
      cont:"Ora sottrai il tappo &rarr;" },
    { t:"Il flusso uscente attraverso il tappo $T$ (normale $(0,0,1)$, $F\\cdot n=z=1$) è l'area $\\pi$. Il flusso uscente attraverso la coppa $\\Sigma$ vale allora:",
      opts:[
        {x:"$\\tfrac{3\\pi}{2}-\\pi=\\tfrac{\\pi}{2}$",c:true},
        {x:"$\\tfrac{3\\pi}{2}$"},
        {x:"$\\tfrac{3\\pi}{2}+\\pi=\\tfrac{5\\pi}{2}$"},
        {x:"$\\pi$"}],
      hint:"$\\iint_\\Sigma=\\iiint_V\\nabla\\cdot F-\\iint_T$: sottrai il tappo, non sommarlo.",
      sol:"$\\iint_\\Sigma F\\cdot n\\,dS=\\iiint_V\\nabla\\cdot F\\,dV-\\iint_T F\\cdot n\\,dS=\\tfrac{3\\pi}{2}-\\pi=\\tfrac{\\pi}{2}$. Dimenticare il tappo (rispondere $\\tfrac{3\\pi}{2}$) è l'errore da evitare. Trucco 'tappare e Gauss' (tipo A/H). Teorema della divergenza." }
  ]},

  { pool:"gauss", src:"20230907 Es.3", steps:[{
      t:"$T=\\{(x-(1-z))^2+y^2\\le(1-z)^2,\\;0\\le z\\le1\\}$ (cono decentrato che si restringe), $\\nabla\\cdot F=4x$. Il flusso uscente vale:",
      opts:[
        {x:"$\\pi$",c:true},
        {x:"$\\tfrac{\\pi}{3}$"},
        {x:"$4\\pi$"},
        {x:"$0$"}],
      hint:"Per strati: $\\iint_{E_z}x\\,dA=(1-z)\\cdot\\pi(1-z)^2$ (baricentro del disco in $x=1-z$).",
      sol:"$\\iiint_T 4x\\,dV=\\int_0^1 4\\big(\\iint_{E_z}x\\,dA\\big)dz$. La sezione a quota $z$ è un disco di raggio $1-z$ centrato in $x=1-z$: $\\iint_{E_z}x\\,dA=(1-z)\\,\\pi(1-z)^2=\\pi(1-z)^3$. Flusso $=\\int_0^1 4\\pi(1-z)^3\\,dz=4\\pi\\cdot\\tfrac14=\\pi$. 20230907 Es.3. Teorema della divergenza."
    }]
  },

  { pool:"gauss", src:"tipo A · manuale", steps:[{
      t:"Flusso uscente di $F=(x,y,0)$ dal cilindro chiuso $\\{x^2+y^2\\le R^2,\\,0\\le z\\le h\\}$ (mantello più due basi):",
      opts:[
        {x:"$2\\pi R^2 h$",c:true},
        {x:"$\\pi R^2 h$"},
        {x:"$0$ (perché $F_z=0$)"},
        {x:"$2\\pi R h$"}],
      hint:"$\\nabla\\cdot F=2$; sulle basi $F\\cdot(0,0,\\pm1)=0$, ma Gauss dà comunque $2\\operatorname{vol}$.",
      sol:"$\\nabla\\cdot F=1+1+0=2$; $\\operatorname{vol}=\\pi R^2h$; flusso $=2\\pi R^2h$. Tutto passa dal mantello: sulle basi $F\\cdot n=0$. Rispondere $0$ confonde 'flusso nullo sulle basi' con 'flusso totale nullo'. Teorema della divergenza."
    }]
  },

  { pool:"gauss", src:"tipo A · manuale", steps:[{
      t:"Volume di $E=\\{x^2+y^2\\le4,\\;0\\le z\\le x^2+y^2\\}$ (sotto il paraboloide, entro il cilindro di raggio $2$):",
      opts:[
        {x:"$8\\pi$",c:true},
        {x:"$4\\pi$"},
        {x:"$16\\pi$"},
        {x:"$\\tfrac{8\\pi}{3}$"}],
      hint:"In cilindriche $z$ va da $0$ a $\\rho^2$; non dimenticare il Jacobiano $\\rho$.",
      sol:"$\\operatorname{vol}=\\int_0^{2\\pi}\\!\\!\\int_0^2\\!\\!\\int_0^{\\rho^2}\\rho\\,dz\\,d\\rho\\,d\\theta=\\int_0^{2\\pi}\\!\\!\\int_0^2\\rho^3\\,d\\rho\\,d\\theta=2\\pi\\cdot\\tfrac{16}{4}=8\\pi$. Il fattore $\\rho$ è il Jacobiano cilindrico: ometterlo darebbe $\\tfrac{8\\pi}{3}$ o simili. Volume come integrale triplo."
    }]
  },

  { pool:"gauss", src:"tipo H · manuale", steps:[{
      t:"Il tappo inferiore di un solido è il paraboloide $z=x^2+y^2$ (sotto), su $D=\\{x^2+y^2\\le1\\}$, con $F=(0,0,z)$. Per il flusso USCENTE da $V$: quale normale e quanto vale il flusso sul tappo?",
      opts:[
        {x:"$n\\,dS=(2x,2y,-1)\\,dx\\,dy$ (verso il basso); flusso $=-\\tfrac{\\pi}{2}$",c:true},
        {x:"$n\\,dS=(-2x,-2y,1)\\,dx\\,dy$; flusso $=+\\tfrac{\\pi}{2}$"},
        {x:"$n=(0,0,1)$; flusso $=\\tfrac{\\pi}{2}$"},
        {x:"flusso $=0$"}],
      hint:"Sul fondo del solido l'uscente punta in basso: terza componente negativa.",
      sol:"Uscente dal fondo = verso il basso: $n\\,dS=(f_x,f_y,-1)\\,dx\\,dy=(2x,2y,-1)\\,dx\\,dy$. $F\\cdot(2x,2y,-1)=-z=-\\rho^2$; $\\iint_D(-\\rho^2)\\,dA=-\\int_0^{2\\pi}\\!\\int_0^1\\rho^3\\,d\\rho\\,d\\theta=-\\tfrac{\\pi}{2}$. Usare $(-2x,-2y,1)$ (entrante) inverte il segno. Teorema della divergenza, orientazione uscente."
    }]
  },

  { pool:"gauss", src:"tipo A · manuale", steps:[{
      t:"Il flusso uscente di $F=(x,y,z)$ da un solido $V$ vale $12$. Allora $\\operatorname{vol}(V)$ è:",
      opts:[
        {x:"$4$",c:true},
        {x:"$12$"},
        {x:"$36$"},
        {x:"$3$"}],
      hint:"$\\nabla\\cdot(x,y,z)=3$, quindi flusso $=3\\operatorname{vol}$.",
      sol:"$\\nabla\\cdot F=3\\Rightarrow 12=3\\operatorname{vol}(V)\\Rightarrow\\operatorname{vol}(V)=4$. Volume ricavato dal flusso via Teorema della divergenza."
    }]
  },

  { pool:"gauss", src:"tipo A · manuale", steps:[{
      t:"Flusso uscente di $F=(x^3,y^3,z^3)$ dalla sfera unitaria $x^2+y^2+z^2\\le1$:",
      opts:[
        {x:"$\\tfrac{12\\pi}{5}$",c:true},
        {x:"$4\\pi$"},
        {x:"$4\\pi$ perché $\\nabla\\cdot F=3$"},
        {x:"$\\tfrac{3\\pi}{5}$"}],
      hint:"$\\nabla\\cdot F=3(x^2+y^2+z^2)=3r^2$, NON costante; in sferiche $dV=r^2\\sin\\phi\\,dr\\,d\\phi\\,d\\theta$.",
      sol:"$\\nabla\\cdot F=3x^2+3y^2+3z^2=3r^2$. $\\Phi=\\iiint 3r^2\\,dV=3\\int_0^1 r^2\\cdot 4\\pi r^2\\,dr=12\\pi\\int_0^1 r^4\\,dr=\\tfrac{12\\pi}{5}$. Con divergenza non costante si integra davvero il volume, non basta $3\\operatorname{vol}$. Teorema della divergenza."
    }]
  }

];

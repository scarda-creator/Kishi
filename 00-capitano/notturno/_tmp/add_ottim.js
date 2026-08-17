  /* ===== ESTENSIONE 2026-08-17 (run notturno) =====
     Buchi colmati: NON esistenza di max/min assoluti su insiemi non compatti per
     restrizione (4 apparizioni, nel quiz c'era solo la coercività = il caso opposto);
     Lagrange con DUE vincoli; compattezza di vincoli con potenze quarte. */

  { pool:"ottim", src:"20250127 Es.2 · assoluti su $\\mathbb{R}^2$ (negazione)", steps:[{
      t:"<span class=\"lbl\">ES</span> $F_\\alpha(x,y)=x^2-\\alpha xy+y^3+1$. Per quali $\\alpha\\in\\mathbb{R}$ la funzione ammette massimo o minimo assoluto su tutto $\\mathbb{R}^2$?",
      opts:[
        {x:"Per nessun $\\alpha$: la restrizione $F_\\alpha(0,y)=y^3+1$ è illimitata sopra e sotto",c:true},
        {x:"Per ogni $\\alpha$: $F_\\alpha$ è continua, quindi per Weierstrass ha max e min"},
        {x:"Solo per $\\alpha=0$, dove la funzione si spezza"},
        {x:"Ammette minimo per ogni $\\alpha$, perché il termine $x^2$ domina"}],
      hint:"Per negare l'esistenza basta UNA restrizione conveniente: scegli la retta che semplifica di più l'espressione.",
      sol:"<b>Negare per restrizione.</b> Weierstrass richiede un compatto e $\\mathbb{R}^2$ non lo è: senza compattezza il teorema non dice nulla, né in un senso né nell'altro. Per concludere davvero si esibisce una restrizione: su $x=0$, $F_\\alpha(0,y)=y^3+1$, che tende a $\\pm\\infty$; quindi $\\sup=+\\infty$ e $\\inf=-\\infty$, e nessun massimo o minimo assoluto esiste, per ogni $\\alpha$. Il metodo (restringere a una retta o a un asse e mostrare l'illimitatezza) è la risposta standard alla domanda «ammette max/min in tutto $\\mathbb{R}^n$?», che compare in 4 compiti su 15."
    }]
  },

  { pool:"ottim", src:"20240209 Es.2 · assoluti su $\\mathbb{R}^3$", steps:[{
      t:"<span class=\"lbl\">ES</span> $f(x,y,z)=2x^3+yx^2+y^2z-9z$ ammette massimo o minimo assoluto in $\\mathbb{R}^3$?",
      opts:[
        {x:"No: già su $y=z=0$ si ha $f(x,0,0)=2x^3$, illimitata in entrambi i sensi",c:true},
        {x:"Sì: i punti critici trovati da $\\nabla f=0$ sono estremi assoluti"},
        {x:"No, perché l'Hessiana è indefinita in ogni punto critico"},
        {x:"Sì, ammette minimo assoluto ma non massimo"}],
      hint:"La classificazione dei punti critici è LOCALE. Per gli assoluti su un insieme non compatto serve un argomento globale.",
      sol:"<b>Locale ≠ assoluto.</b> Anche se i punti critici fossero tutti minimi locali, nulla garantirebbe l'assoluto su un insieme non compatto. Qui basta la restrizione $y=z=0$: $f(x,0,0)=2x^3\\to\\pm\\infty$. Dunque $f$ non ha né massimo né minimo assoluto in $\\mathbb{R}^3$. La terza opzione dice una cosa forse vera ma insufficiente: l'indefinitezza dell'Hessiana esclude gli estremi <i>locali</i> in quei punti, non risponde alla domanda sugli assoluti."
    }]
  },

  { pool:"ottim", src:"20230621 Es.3 · chiuso non limitato, ma coercivo", steps:[{
      t:"<span class=\"lbl\">ES</span> $F(x,y)=x^2+3y^2-6x$ su $S=\\mathbb{R}\\times[-1,1]$ (chiuso, non limitato). Cosa esiste?",
      opts:[
        {x:"Esiste il minimo assoluto ($-9$ in $(3,0)$) ma non il massimo: $F\\to+\\infty$ per $|x|\\to\\infty$",c:true},
        {x:"Non esiste né massimo né minimo: $S$ non è compatto"},
        {x:"Esistono entrambi, perché $S$ è chiuso"},
        {x:"Esiste il massimo ma non il minimo"}],
      hint:"Riscrivi $F=(x-3)^2-9+3y^2$: che succede a $F$ quando ci si allontana? Un insieme non compatto non condanna automaticamente gli estremi.",
      sol:"<b>Coercività al posto di Weierstrass.</b> $F=(x-3)^2+3y^2-9$: su $S$ si ha $F\\to+\\infty$ quando $|x|\\to\\infty$, quindi il massimo assoluto non esiste. Ma la coercività dà il minimo: fuori da un rettangolo abbastanza grande $F$ supera il valore in $(3,0)$, quindi il minimo si cerca su un compatto e per Weierstrass c'è; vale $F(3,0)=-9$ (il punto sta in $S$ ed è punto critico libero). Morale: la mancanza di compattezza va discussa, non usata come risposta automatica — confronta con i due esercizi precedenti, dove invece nulla esiste."
    }]
  },

  { pool:"ottim", src:"20230210 Es.2 · Lagrange con DUE vincoli", steps:[{
      t:"Estremi di $f(x,y,z)$ su $E=\\{4x^2+y^2+z^2=1\\}\\cap\\{2x-z=1\\}$. Come si imposta il metodo dei moltiplicatori?",
      opts:[
        {x:"$\\nabla f=\\lambda\\nabla g+\\mu\\nabla h$ con i due vincoli: 5 equazioni scalari nelle 5 incognite $x,y,z,\\lambda,\\mu$",c:true},
        {x:"$\\nabla f=\\lambda\\nabla(g+h)$: un solo moltiplicatore per l'intersezione"},
        {x:"$\\nabla f=\\lambda\\nabla g$ e separatamente $\\nabla f=\\mu\\nabla h$"},
        {x:"Il metodo non si applica: l'intersezione di due superfici non è un vincolo regolare"}],
      hint:"L'intersezione di due superfici è una curva: il gradiente di $f$ deve stare nel piano generato dai due gradienti dei vincoli.",
      sol:"<b>Un moltiplicatore per vincolo.</b> Con $g=4x^2+y^2+z^2-1$ e $h=2x-z-1$ si scrive $\\nabla f=\\lambda\\nabla g+\\mu\\nabla h$ (3 equazioni) più $g=0$, $h=0$ (2 equazioni): 5 equazioni, 5 incognite. L'ipotesi di regolarità è che $\\nabla g,\\nabla h$ siano linearmente indipendenti nei punti di $E$ (il vincolo è una curva regolare). Geometricamente: $\\nabla f$ deve essere ortogonale alla curva, cioè combinazione dei due gradienti. La via alternativa, spesso più rapida, è parametrizzare la curva e ridurre a una funzione di una variabile."
    }]
  },

  { pool:"ottim", src:"20230705 Es.2 · riduzione e calcolo su sfera∩piano", steps:[{
      t:"<span class=\"lbl\">ES</span> Massimo e minimo di $f(x,y,z)=4-z$ su $\\Gamma=\\{x^2+y^2=8,\\;x+y+z=1\\}$.",
      opts:[
        {x:"$\\max=7$, $\\min=-1$: da $z=1-x-y$ si ha $f=3+x+y$, e su $x=2\\sqrt2\\cos t$, $y=2\\sqrt2\\sin t$ risulta $f=3+4\\sin(t+\\tfrac\\pi4)$",c:true},
        {x:"$\\max=4$, $\\min=-4$"},
        {x:"$\\max=3+2\\sqrt2$, $\\min=3-2\\sqrt2$"},
        {x:"Non esistono: $\\Gamma$ non è compatto"}],
      hint:"Elimina $z$ col vincolo lineare, poi parametrizza il cilindro. La somma $\\cos t+\\sin t$ si compatta in un solo seno con ampiezza $\\sqrt2$.",
      sol:"<b>Ridurre invece di moltiplicare.</b> $\\Gamma$ è chiuso e limitato (il cilindro fissa $x,y$; il piano determina $z$), dunque Weierstrass garantisce gli estremi. Da $x+y+z=1$: $z=1-x-y$ e $f=4-z=3+x+y$. Parametrizzando $x=2\\sqrt2\\cos t,\\;y=2\\sqrt2\\sin t$: $f=3+2\\sqrt2(\\cos t+\\sin t)=3+2\\sqrt2\\cdot\\sqrt2\\sin(t+\\tfrac\\pi4)=3+4\\sin(t+\\tfrac\\pi4)$, con $\\max=7$ e $\\min=-1$. L'opzione 3 è il risultato che si ottiene dimenticando il fattore $\\sqrt2$ della compattazione."
    }]
  },

  { pool:"ottim", src:"20250127 Es.2 · compattezza di un vincolo con quarte potenze", steps:[{
      t:"Perché $f$ continua ammette massimo e minimo assoluti su $E=\\{(x,y):4x^2+y^4\\le1\\}$?",
      opts:[
        {x:"Perché $E$ è compatto: chiuso (preimmagine di $(-\\infty,1]$ di una funzione continua) e limitato ($|x|\\le\\tfrac12$, $|y|\\le1$)",c:true},
        {x:"Perché $E$ è convesso"},
        {x:"Perché $E$ è simmetrico rispetto agli assi"},
        {x:"Perché $4x^2+y^4$ è un polinomio, e i polinomi hanno sempre estremi"}],
      hint:"Weierstrass chiede due cose e le chiede entrambe: la chiusura viene dal $\\le$, la limitatezza da una stima esplicita su ciascuna variabile.",
      sol:"<b>Verificare le ipotesi, non citarle.</b> $E=\\Phi^{-1}((-\\infty,1])$ con $\\Phi(x,y)=4x^2+y^4$ continua, quindi $E$ è chiuso. È limitato perché su $E$ vale $4x^2\\le1$ e $y^4\\le1$, cioè $|x|\\le\\tfrac12$ e $|y|\\le1$: $E$ sta in un rettangolo. Chiuso + limitato in $\\mathbb{R}^2$ = compatto, e Weierstrass conclude. La convessità e la simmetria non c'entrano con l'esistenza degli estremi; e nemmeno la natura polinomiale del vincolo (l'insieme $\\{y-x^2\\le0\\}$ è chiuso ma illimitato)."
    }]
  }

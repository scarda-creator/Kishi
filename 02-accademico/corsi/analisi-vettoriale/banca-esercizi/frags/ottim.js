Q.ottim = [

 /* ==================== CONCETTUALI (15) ==================== */

 {
  "pool": "ottim",
  "src": "20250116 Es.2 · Weierstrass",
  "steps": [
   {
    "t": "Per cercare max e min ASSOLUTI di $f$ continua su $D=\\{3x^2+4y^2\\le 9\\}$, cosa garantisce la loro ESISTENZA prima ancora di calcolarli?",
    "opts": [
     {"x": "Il teorema di Weierstrass: $D$ è chiuso e limitato (compatto) e $f$ è continua, quindi max e min esistono", "c": true},
     {"x": "Il teorema di Fermat, perché il gradiente si annulla in un punto interno"},
     {"x": "Nulla: l'esistenza va verificata caso per caso risolvendo il sistema $\\nabla f=0$"},
     {"x": "Il teorema di Lagrange, perché il dominio ha un bordo"}
    ],
    "hint": "L'esistenza di max/min assoluti dipende da due proprietà topologiche del dominio più la continuità di $f$, non dal calcolo dei punti critici.",
    "sol": "Teorema di Weierstrass: $f$ continua su un compatto (chiuso e limitato) ammette massimo e minimo assoluti. Verificare la compattezza è il PRIMO passo, prima di cercare candidati interni e di bordo."
   }
  ]
 },

 {
  "pool": "ottim",
  "src": "tipo D · manuale · Fermat",
  "steps": [
   {
    "t": "Sia $f$ differenziabile e $P_0$ un punto INTERNO al dominio. Quale relazione lega \"$P_0$ è di estremo locale\" e \"$\\nabla f(P_0)=0$\"?",
    "opts": [
     {"x": "$\\nabla f(P_0)=0$ è NECESSARIA (Fermat) ma non sufficiente: un punto critico può essere una sella", "c": true},
     {"x": "$\\nabla f(P_0)=0$ è sufficiente: ogni punto critico è un estremo"},
     {"x": "Le due condizioni sono equivalenti"},
     {"x": "$\\nabla f(P_0)=0$ non ha nulla a che vedere con gli estremi interni"}
    ],
    "hint": "Il gradiente nullo è la porta d'ingresso ai candidati, non la classificazione. Pensa a $f=x^2-y^2$ nell'origine.",
    "sol": "Teorema di Fermat: in un estremo locale interno il gradiente si annulla, quindi $\\nabla f=0$ è NECESSARIA. Non è sufficiente: la sella (es. $x^2-y^2$) ha $\\nabla f=0$ senza essere estremo. Serve un test del secondo ordine (Hessiana)."
   }
  ]
 },

 {
  "pool": "ottim",
  "src": "20250127 Es.2 · Hessiana",
  "steps": [
   {
    "t": "In un punto critico di $f(x,y)$ hai $\\det H>0$ e $f_{xx}>0$. Come lo classifichi?",
    "opts": [
     {"x": "Minimo locale: $\\det H>0$ dà autovalori concordi, $f_{xx}>0$ dice che sono positivi", "c": true},
     {"x": "Massimo locale"},
     {"x": "Sella, perché $\\det H\\ne 0$"},
     {"x": "Non classificabile senza calcolare gli autovalori"}
    ],
    "hint": "$\\det H=\\lambda_1\\lambda_2$: se è positivo gli autovalori hanno lo stesso segno; $f_{xx}$ (traccia parziale) dice quale.",
    "sol": "Test dell'Hessiana in 2D: $\\det H>0$ e $f_{xx}>0\\Rightarrow$ minimo; $\\det H>0$ e $f_{xx}<0\\Rightarrow$ massimo. Il segno di $f_{xx}$ discrimina solo quando $\\det H>0$."
   }
  ]
 },

 {
  "pool": "ottim",
  "src": "20250127 Es.2 · sella",
  "steps": [
   {
    "t": "In un punto critico si ha $\\det H<0$. Che punto è, e conta il segno di $f_{xx}$?",
    "opts": [
     {"x": "Sella: $\\det H<0$ dà autovalori di segno opposto; il segno di $f_{xx}$ è irrilevante", "c": true},
     {"x": "Minimo se $f_{xx}>0$, massimo se $f_{xx}<0$"},
     {"x": "Massimo, sempre"},
     {"x": "Degenere: il test non decide"}
    ],
    "hint": "$\\det H<0$ significa $\\lambda_1\\lambda_2<0$: una direzione sale, una scende. Nessun controllo aggiuntivo serve.",
    "sol": "Test dell'Hessiana: $\\det H<0\\Rightarrow$ sella, indipendentemente da $f_{xx}$. Il controllo di $f_{xx}$ serve solo a distinguere min da max nel caso $\\det H>0$."
   }
  ]
 },

 {
  "pool": "ottim",
  "src": "tipo D · manuale · TRAPPOLA",
  "steps": [
   {
    "t": "In un punto critico sai solo che $\\det H>0$. Puoi concludere che è un minimo?",
    "opts": [
     {"x": "No: $\\det H>0$ dice solo che è un estremo (autovalori concordi); serve il segno di $f_{xx}$ per sapere se min o max", "c": true},
     {"x": "Sì, $\\det H>0$ è sempre un minimo"},
     {"x": "No, con $\\det H>0$ è sempre una sella"},
     {"x": "Sì, se il punto è interno al dominio"}
    ],
    "hint": "Due autovalori NEGATIVI danno lo stesso $\\det H>0$ di due positivi: è un massimo, non un minimo.",
    "sol": "$\\det H>0\\Rightarrow$ autovalori dello stesso segno: minimo se $f_{xx}>0$, massimo se $f_{xx}<0$. Concludere \"minimo\" dal solo $\\det H>0$ è l'errore classico del test dell'Hessiana."
   }
  ]
 },

 {
  "pool": "ottim",
  "src": "tipo D · manuale · degenere",
  "steps": [
   {
    "t": "In un punto critico risulta $\\det H=0$. Cosa dice il test dell'Hessiana?",
    "opts": [
     {"x": "Nulla: il caso $\\det H=0$ è degenere, il test è inconcludente e serve un'analisi diretta di ordine superiore", "c": true},
     {"x": "È certamente una sella"},
     {"x": "È certamente un minimo se $f_{xx}\\ge 0$"},
     {"x": "È un punto di flesso, mai un estremo"}
    ],
    "hint": "$\\det H=0$ significa almeno un autovalore nullo: la forma quadratica è semidefinita e non decide. Guarda $f$ direttamente lungo le direzioni.",
    "sol": "Con $\\det H=0$ (Hessiana semidefinita) il test fallisce: $f=x^4+y^4$ e $f=x^2-y^4$ hanno entrambe $\\det H=0$ nell'origine ma sono rispettivamente un minimo e una sella. Si studia $f$ direttamente (segno lungo le direzioni, sviluppo di ordine superiore)."
   }
  ]
 },

 {
  "pool": "ottim",
  "src": "20230504 Es.5 · Lagrange",
  "steps": [
   {
    "t": "Sul vincolo $g(x,y)=c$, cosa impone geometricamente la condizione dei moltiplicatori $\\nabla f=\\lambda\\nabla g$?",
    "opts": [
     {"x": "Che $\\nabla f$ e $\\nabla g$ siano PARALLELI: nel candidato $f$ non ha componente lungo il vincolo", "c": true},
     {"x": "Che $\\nabla f$ e $\\nabla g$ siano ortogonali"},
     {"x": "Che $\\nabla f=0$ nel candidato"},
     {"x": "Che $\\nabla g=0$ nel candidato"}
    ],
    "hint": "Se $\\nabla f$ avesse una componente tangente al vincolo, potresti muoverti sul vincolo e far crescere $f$: non saresti in un estremo.",
    "sol": "Teorema di Lagrange: in un estremo vincolato $\\nabla f=\\lambda\\nabla g$, cioè i gradienti sono paralleli. Equivale a chiedere che la derivata di $f$ lungo il vincolo sia nulla: $\\nabla f$ è tutto normale al vincolo."
   }
  ]
 },

 {
  "pool": "ottim",
  "src": "20230504 Es.5 · Lagrange 2D",
  "steps": [
   {
    "t": "In 2D, la condizione $\\nabla f=\\lambda\\nabla g$ si riscrive senza il moltiplicatore come:",
    "opts": [
     {"x": "$f_x\\,g_y-f_y\\,g_x=0$: annullamento del minore $2\\times 2$ (gradienti paralleli)", "c": true},
     {"x": "$\\nabla f\\cdot\\nabla g=0$: prodotto scalare nullo"},
     {"x": "$f_x+f_y=g_x+g_y$"},
     {"x": "$f_x g_x+f_y g_y=\\lambda$"}
    ],
    "hint": "Paralleli $\\iff$ determinante dei due vettori nullo. Il prodotto scalare nullo è ortogonalità, l'opposto.",
    "sol": "$\\nabla f\\parallel\\nabla g\\iff\\det\\begin{pmatrix}f_x&f_y\\\\g_x&g_y\\end{pmatrix}=f_xg_y-f_yg_x=0$. Insieme a $g=c$ dà il sistema per i candidati di bordo, eliminando $\\lambda$."
   }
  ]
 },

 {
  "pool": "ottim",
  "src": "tipo D · manuale · necessaria vs sufficiente",
  "steps": [
   {
    "t": "Risolvendo il sistema di Lagrange trovi 4 candidati. Cosa sono, di per sé?",
    "opts": [
     {"x": "Candidati: la condizione è NECESSARIA. Per trovare max e min si confrontano i valori $f$ in tutti", "c": true},
     {"x": "Sono già i punti di massimo e minimo, uno per tipo"},
     {"x": "Sono selle del vincolo"},
     {"x": "Vanno scartati se $\\lambda<0$"}
    ],
    "hint": "Lagrange è come Fermat: dà i CANDIDATI. Il max è il candidato di valore più alto, il min quello più basso.",
    "sol": "$\\nabla f=\\lambda\\nabla g$ è condizione necessaria per gli estremi vincolati. Trovati i candidati, si calcola $f$ in ciascuno e si confrontano i valori; Weierstrass garantisce che max e min siano fra loro (su compatto). Il segno di $\\lambda$ non è un criterio di scarto."
   }
  ]
 },

 {
  "pool": "ottim",
  "src": "20230621 · punto critico fuori dominio",
  "steps": [
   {
    "t": "Il sistema $\\nabla f=0$ dà il candidato interno $P=(3,0)$, ma il dominio è $D=\\{2x^2+y^2\\le 1\\}$. $P$ va inserito fra i candidati?",
    "opts": [
     {"x": "No: $2\\cdot 3^2=18>1$, quindi $P\\notin D$; un punto critico interno conta solo se appartiene al dominio", "c": true},
     {"x": "Sì, i punti critici vanno sempre confrontati"},
     {"x": "Sì, ma solo il valore $f(P)$, non la posizione"},
     {"x": "Solo se $P$ giace sul bordo $\\partial D$"}
    ],
    "hint": "Prima di classificare, controlla l'appartenenza: un candidato interno fuori dal dominio non è ammissibile.",
    "sol": "$P=(3,0)$ non soddisfa $2x^2+y^2\\le 1$ (dà $18>1$): fuori da $D$, si scarta. I candidati interni sono i punti critici che CADONO nel dominio; poi si aggiunge il bordo via Lagrange."
   }
  ]
 },

 {
  "pool": "ottim",
  "src": "20230504 Es.5 · confronto interno/bordo",
  "steps": [
   {
    "t": "Devi trovare max e min ASSOLUTI di $f$ continua sul compatto $D$. Quali insiemi di candidati devi mettere in gara?",
    "opts": [
     {"x": "Punti critici interni ($\\nabla f=0$ in $\\mathrm{int}\\,D$) UNITI ai punti di Lagrange sul bordo $\\partial D$", "c": true},
     {"x": "Solo i punti critici interni: il bordo non conta"},
     {"x": "Solo i punti di Lagrange sul bordo"},
     {"x": "Tutti i punti dove $f$ è definita"}
    ],
    "hint": "Un estremo assoluto su un compatto sta o all'interno (allora $\\nabla f=0$) o sul bordo (allora Lagrange). Devi coprire entrambi.",
    "sol": "Su un compatto: candidati = {punti critici interni} $\\cup$ {punti di Lagrange su $\\partial D$}. Si valuta $f$ in tutti e si prende il massimo e il minimo. Dimenticare il bordo è la trappola più comune."
   }
  ]
 },

 {
  "pool": "ottim",
  "src": "tipo D · manuale · TRAPPOLA bordo",
  "steps": [
   {
    "t": "Su $D=\\{x^2+y^2\\le 1\\}$ trovi che $f=x+y$ non ha punti critici interni ($\\nabla f=(1,1)\\ne 0$). Che concludi?",
    "opts": [
     {"x": "Che max e min stanno sul BORDO: vanno cercati con Lagrange su $x^2+y^2=1$, non dichiarati inesistenti", "c": true},
     {"x": "Che $f$ non ha massimo né minimo su $D$"},
     {"x": "Che $f$ è costante su $D$"},
     {"x": "Che il minimo è $f(0,0)=0$"}
    ],
    "hint": "Nessun critico interno è un'informazione utile, non un vicolo cieco: gli estremi devono allora vivere sul bordo.",
    "sol": "$f$ è continua su un compatto: Weierstrass garantisce max e min. Se $\\nabla f\\ne 0$ ovunque all'interno, gli estremi sono sul bordo. Su $x^2+y^2=1$, Lagrange dà $(\\pm 1/\\sqrt2,\\pm 1/\\sqrt2)$: $\\max f=\\sqrt2$, $\\min f=-\\sqrt2$."
   }
  ]
 },

 {
  "pool": "ottim",
  "src": "tipo D · manuale · coercività",
  "steps": [
   {
    "t": "$f$ è continua su tutto $\\mathbb{R}^2$ (nessun bordo) e $f(x,y)\\to+\\infty$ quando $\\|(x,y)\\|\\to\\infty$. Cosa puoi affermare?",
    "opts": [
     {"x": "$f$ ammette minimo assoluto (coercività), ma non necessariamente massimo", "c": true},
     {"x": "$f$ ammette sia massimo sia minimo assoluti"},
     {"x": "$f$ non ammette estremi perché $\\mathbb{R}^2$ non è compatto"},
     {"x": "Il minimo è nel punto critico solo se $\\det H>0$"}
    ],
    "hint": "Coerciva verso $+\\infty$: fuori da una palla grande $f$ è alta, quindi il minimo (se c'è) è dentro, su un compatto. Il massimo scappa all'infinito.",
    "sol": "Coercività: $f$ continua e $f\\to+\\infty$ all'infinito ammette minimo assoluto. Su una palla $\\overline{B_R}$ abbastanza grande, Weierstrass dà il minimo interno; fuori $f$ è più grande. Il massimo tipicamente non esiste ($f\\to+\\infty$)."
   }
  ]
 },

 {
  "pool": "ottim",
  "src": "tipo D · manuale · Hessiana 3D",
  "steps": [
   {
    "t": "In un punto critico di $f(x,y,z)$ hai $\\det H>0$. Basta per concludere \"minimo\"?",
    "opts": [
     {"x": "No: in 3D $\\det H>0$ è il prodotto dei tre autovalori; serve il criterio di Sylvester (tutti i minori principali di testa $>0$)", "c": true},
     {"x": "Sì, come in 2D $\\det H>0$ e $f_{xx}>0$ bastano"},
     {"x": "Sì, $\\det H>0$ in 3D è sempre un minimo"},
     {"x": "No, in 3D è sempre una sella"}
    ],
    "hint": "In 3D $\\det H=\\lambda_1\\lambda_2\\lambda_3>0$ vale anche con DUE autovalori negativi (una sella): il solo determinante non basta.",
    "sol": "Criterio di Sylvester per un minimo in $n$ dimensioni: tutti i minori principali di testa positivi ($H_1=f_{xx}>0$, $H_2>0$, $H_3=\\det H>0$). Per un massimo i segni alternano ($-,+,-$). Il solo $\\det H>0$ in 3D è compatibile con una sella."
   }
  ]
 },

 {
  "pool": "ottim",
  "src": "20230210 Es.2 · regolarità vincolo",
  "steps": [
   {
    "t": "Il teorema di Lagrange scrive $\\nabla f=\\lambda\\nabla g$ nei punti del vincolo $g=c$. Quale ipotesi sul vincolo serve perché il moltiplicatore esista?",
    "opts": [
     {"x": "$\\nabla g\\ne 0$ sul vincolo (regolarità): dove $\\nabla g=0$ la formula può fallire e il punto va esaminato a parte", "c": true},
     {"x": "$g$ deve essere lineare"},
     {"x": "$f$ deve essere convessa"},
     {"x": "Il vincolo deve essere limitato"}
    ],
    "hint": "Se $\\nabla g=0$ il vincolo non ha una normale ben definita e $\\nabla f=\\lambda\\nabla g$ perde senso: sono punti singolari.",
    "sol": "Lagrange richiede la regolarità del vincolo, $\\nabla g\\ne 0$ (rango massimo della matrice dei gradienti). I punti con $\\nabla g=0$ non sono coperti dalla condizione e vanno aggiunti a mano ai candidati."
   }
  ]
 },

 /* ==================== ESERCIZI (15) ==================== */

 {
  "pool": "ottim",
  "src": "tipo D · manuale · classificazione",
  "steps": [
   {
    "t": "Trova i punti critici di $f(x,y)=x^3-3x+y^2$.",
    "opts": [
     {"x": "$(1,0)$ e $(-1,0)$", "c": true},
     {"x": "Solo $(0,0)$"},
     {"x": "$(1,0)$, $(-1,0)$ e $(0,0)$"},
     {"x": "$(\\pm 1,\\pm 1)$"}
    ],
    "hint": "Imponi $\\nabla f=0$: $3x^2-3=0$ e $2y=0$. La seconda forza $y=0$.",
    "sol": "$\\nabla f=(3x^2-3,\\;2y)=0\\Rightarrow x=\\pm 1,\\;y=0$. Punti critici $(1,0)$ e $(-1,0)$ (Fermat, condizione necessaria).",
    "cont": "Continua &rarr; classifica"
   },
   {
    "t": "Con $H=\\begin{pmatrix}6x&0\\\\0&2\\end{pmatrix}$, classifica $(1,0)$ e $(-1,0)$.",
    "opts": [
     {"x": "$(1,0)$ minimo ($\\det H=12>0$, $f_{xx}=6>0$); $(-1,0)$ sella ($\\det H=-12<0$)", "c": true},
     {"x": "Entrambi minimi, perché $f_{yy}=2>0$"},
     {"x": "$(1,0)$ sella, $(-1,0)$ minimo"},
     {"x": "Entrambi selle, perché $f_{xy}=0$"}
    ],
    "hint": "$\\det H=12x$: cambia segno tra i due punti. In $(-1,0)$ vale $-12<0$.",
    "sol": "Test dell'Hessiana: in $(1,0)$ $\\det H=12>0$ e $f_{xx}=6>0\\Rightarrow$ minimo; in $(-1,0)$ $\\det H=-12<0\\Rightarrow$ sella. $f_{xy}=0$ non implica sella."
   }
  ]
 },

 {
  "pool": "ottim",
  "src": "tipo D · manuale · classificazione",
  "steps": [
   {
    "t": "I punti critici di $f(x,y)=x^3+y^3-3xy$ sono:",
    "opts": [
     {"x": "$(0,0)$ e $(1,1)$", "c": true},
     {"x": "$(0,0)$ e $(-1,-1)$"},
     {"x": "Solo $(1,1)$"},
     {"x": "$(0,0)$, $(1,1)$ e $(-1,-1)$"}
    ],
    "hint": "Da $\\nabla f=0$: $x^2=y$ e $y^2=x$. Sostituendo, $x^4=x\\Rightarrow x(x^3-1)=0$.",
    "sol": "$\\nabla f=(3x^2-3y,\\,3y^2-3x)=0\\Rightarrow y=x^2,\\;x=y^2$. Allora $x^4=x$, cioè $x=0$ o $x=1$: candidati $(0,0)$ e $(1,1)$ (Fermat).",
    "cont": "Continua &rarr; natura di $(0,0)$"
   },
   {
    "t": "Con $H=\\begin{pmatrix}6x&-3\\\\-3&6y\\end{pmatrix}$, che punto è $(0,0)$?",
    "opts": [
     {"x": "Sella: $\\det H=0-9=-9<0$", "c": true},
     {"x": "Minimo, perché $f=x^3+y^3-3xy$ vale $0$ nell'origine"},
     {"x": "Massimo"},
     {"x": "Degenere, perché $f_{xx}=0$"}
    ],
    "hint": "In $(0,0)$: $f_{xx}=f_{yy}=0$, $f_{xy}=-3$, quindi $\\det H=-9$, non nullo.",
    "sol": "In $(0,0)$: $\\det H=(0)(0)-(-3)^2=-9<0\\Rightarrow$ sella (test dell'Hessiana). $f_{xx}=0$ non rende il test degenere: conta $\\det H$, qui $\\ne 0$."
   },
   {
    "t": "E $(1,1)$?",
    "opts": [
     {"x": "Minimo locale: $\\det H=36-9=27>0$ e $f_{xx}=6>0$", "c": true},
     {"x": "Massimo locale"},
     {"x": "Sella"},
     {"x": "Minimo assoluto su $\\mathbb{R}^2$"}
    ],
    "hint": "$\\det H=36x y-9$; in $(1,1)$ vale $27>0$. Il segno di $f_{xx}$ dice min o max.",
    "sol": "In $(1,1)$: $\\det H=27>0$ e $f_{xx}=6>0\\Rightarrow$ minimo LOCALE. Non è assoluto: $f(x,0)=x^3\\to-\\infty$, quindi $f$ è illimitata inferiormente su $\\mathbb{R}^2$."
   }
  ]
 },

 {
  "pool": "ottim",
  "src": "20250127 Es.2",
  "steps": [
   {
    "t": "Sia $f(x,y)=x^2-2xy+y^3+1$. Nel punto critico $(0,0)$ l'Hessiana ha $\\det H=-4<0$. Che punto è?",
    "opts": [
     {"x": "Sella: $\\det H<0$ classifica come sella, indipendentemente dal segno di $f_{xx}$", "c": true},
     {"x": "Minimo, perché $f_{xx}=2>0$"},
     {"x": "Massimo"},
     {"x": "Non classificabile col test dell'Hessiana"}
    ],
    "hint": "Con $\\det H<0$ gli autovalori hanno segni opposti: il segno di $f_{xx}$ è irrilevante.",
    "sol": "Test dell'Hessiana in 2D: $\\det H<0\\Rightarrow$ sella. Il controllo di $f_{xx}$ serve solo a distinguere min da max quando $\\det H>0$.",
    "cont": "Continua &rarr; l'altro punto critico"
   },
   {
    "t": "Stessa $f$, nel punto critico $(2/3,2/3)$ si ha $\\det H=4>0$ e $f_{xx}=2>0$. Che punto è?",
    "opts": [
     {"x": "Minimo locale: $\\det H>0$ e $f_{xx}>0$", "c": true},
     {"x": "Massimo locale"},
     {"x": "Sella"},
     {"x": "Serve calcolare esplicitamente gli autovalori"}
    ],
    "hint": "Con $\\det H>0$ gli autovalori sono concordi; il segno di $f_{xx}$ dice quale.",
    "sol": "$\\det H>0$ e $f_{xx}>0\\Rightarrow$ minimo locale ($f_{xx}<0\\Rightarrow$ massimo). Test dell'Hessiana in 2D."
   }
  ]
 },

 {
  "pool": "ottim",
  "src": "20230504 Es.5",
  "steps": [
   {
    "t": "Estremi assoluti di $F(x,y)=x^2+y^2-5y$ su $D=\\{1\\le x^2+y^2\\le 16\\}$. Primo passo: il punto critico interno.",
    "opts": [
     {"x": "$\\nabla F=(2x,2y-5)=0\\Rightarrow P=(0,5/2)$; sta in $D$ ($1\\le 25/4\\le 16$), $F(P)=-25/4$", "c": true},
     {"x": "$\\nabla F=0$ non ha soluzioni: nessun candidato interno"},
     {"x": "$P=(0,5/2)$ ma va scartato perché il gradiente non è nullo lì"},
     {"x": "$P=(0,0)$, con $F(P)=0$"}
    ],
    "hint": "Risolvi $\\nabla F=0$ e verifica che il punto cada DENTRO l'anello $1\\le x^2+y^2\\le 16$.",
    "sol": "$\\nabla F=0\\Rightarrow(0,5/2)$, con $|P|^2=25/4=6{,}25\\in[1,16]$: interno ammissibile. $F(0,5/2)=25/4-25/2=-25/4$. Va confrontato col bordo.",
    "cont": "Continua &rarr; i due bordi"
   },
   {
    "t": "Sui bordi $x^2+y^2=1$ e $x^2+y^2=16$ si sostituisce $x^2=R^2-y^2$: $F=R^2-5y$. Qual è il verdetto assoluto?",
    "opts": [
     {"x": "$\\min F=F(0,5/2)=-25/4$ (interno); $\\max F=F(0,-4)=36$ (bordo esterno)", "c": true},
     {"x": "$\\min$ e $\\max$ stanno entrambi sul bordo esterno"},
     {"x": "$\\max F=F(0,4)=-4$"},
     {"x": "$\\min F=-4$ sul bordo interno"}
    ],
    "hint": "Su ciascun cerchio $F=R^2-5y$ è massimo per $y$ minimo: $y=-4$ sull'esterno dà $16+20=36$. Confronta con l'interno.",
    "sol": "Bordo interno ($R=1$): $F=1-5y$, $y\\in[-1,1]$, valori in $[-4,6]$. Esterno ($R=4$): $F=16-5y$, $y\\in[-4,4]$, valori in $[-4,36]$. Con l'interno $-25/4$: $\\min=-25/4$, $\\max=36$. Weierstrass su compatto garantisce l'esistenza; il confronto dei candidati dà i valori."
   }
  ]
 },

 {
  "pool": "ottim",
  "src": "tipo D · manuale · Lagrange",
  "steps": [
   {
    "t": "Estremi di $f(x,y)=xy$ sul vincolo $g=x^2+y^2=1$. Lagrange $\\nabla f=\\lambda\\nabla g$ dà:",
    "opts": [
     {"x": "$y=x$ oppure $y=-x$; sul cerchio: $\\max f=1/2$ in $(\\tfrac1{\\sqrt2},\\tfrac1{\\sqrt2})$, $\\min f=-1/2$", "c": true},
     {"x": "Solo $(1,0)$ e $(0,1)$, con $f=0$"},
     {"x": "$\\max f=1$, $\\min f=-1$"},
     {"x": "Nessun candidato: $\\nabla f$ e $\\nabla g$ non sono mai paralleli"}
    ],
    "hint": "Da $(y,x)=\\lambda(2x,2y)$ ricavi $\\lambda^2=1/4$, cioè $y=\\pm x$. Poi imponi $x^2+y^2=1$.",
    "sol": "Lagrange: $y=2\\lambda x$, $x=2\\lambda y\\Rightarrow\\lambda=\\pm1/2$, quindi $y=x$ o $y=-x$. Sul cerchio $x=\\pm1/\\sqrt2$: $f=xy=\\pm1/2$. $\\max=1/2$, $\\min=-1/2$ (candidati confrontati, Weierstrass su compatto)."
   }
  ]
 },

 {
  "pool": "ottim",
  "src": "20230705 Es.2 · Lagrange 3D",
  "steps": [
   {
    "t": "Estremi di $f(x,y,z)=4-z$ sulla curva $\\Gamma=\\{x^2+y^2=8,\\;x+y+z=1\\}$. Come riduci il problema?",
    "opts": [
     {"x": "Da $z=1-x-y$: $f=3+x+y$; resta da estremizzare $x+y$ su $x^2+y^2=8$", "c": true},
     {"x": "$f$ è costante perché non dipende da $x,y$"},
     {"x": "Si annulla $\\nabla f=(0,0,-1)$: nessun candidato"},
     {"x": "Serve l'Hessiana $3\\times 3$ di $f$"}
    ],
    "hint": "Usa il vincolo lineare per eliminare $z$: $f=4-z=4-(1-x-y)=3+x+y$.",
    "sol": "Sostituendo $z=1-x-y$ dal piano, $f=3+x+y$. Il problema diventa: estremizzare $x+y$ sul cerchio $x^2+y^2=8$. Un vincolo lineare si elimina per sostituzione; resta un solo vincolo quadratico.",
    "cont": "Continua &rarr; risolvi"
   },
   {
    "t": "Estremizza $x+y$ su $x^2+y^2=8$ (Lagrange o Cauchy-Schwarz):",
    "opts": [
     {"x": "$x=y=2\\Rightarrow x+y=4$ (max) e $x=y=-2\\Rightarrow x+y=-4$ (min); quindi $\\max f=7$, $\\min f=-1$", "c": true},
     {"x": "$\\max f=4$, $\\min f=-4$"},
     {"x": "$\\max(x+y)=8$"},
     {"x": "$\\max f=3$, $\\min f=3$"}
    ],
    "hint": "$\\nabla(x+y)=(1,1)\\parallel(2x,2y)\\Rightarrow x=y$; poi $2x^2=8$. Ricorda $f=3+(x+y)$.",
    "sol": "Lagrange: $(1,1)=\\lambda(2x,2y)\\Rightarrow x=y$, e $2x^2=8\\Rightarrow x=\\pm2$. $x+y=\\pm4$, quindi $f=3\\pm4$: $\\max f=7$ in $(2,2,-3)$, $\\min f=-1$ in $(-2,-2,5)$. La curva è compatta: Weierstrass garantisce che questi siano gli estremi assoluti."
   }
  ]
 },

 {
  "pool": "ottim",
  "src": "20250721 Es.1",
  "steps": [
   {
    "t": "Per $F(x,y,z)=x^2 e^{yz}$: dal sistema $\\nabla F=0$ risulta che TUTTI i punti $(0,y,z)$ sono critici. Qual è il minimo assoluto su $\\mathbb{R}^3$?",
    "opts": [
     {"x": "$0$: $F\\ge 0$ ovunque e $F=0$ su tutto il piano $x=0$, un continuo di punti di minimo", "c": true},
     {"x": "Non esiste minimo perché i punti critici sono infiniti"},
     {"x": "$-\\infty$"},
     {"x": "$1$"}
    ],
    "hint": "Guarda il segno: $F$ è un quadrato per un esponenziale, quindi $F\\ge 0$. Infiniti punti critici non impediscono il minimo.",
    "sol": "$F=x^2e^{yz}\\ge 0$ e $F=0\\iff x=0$: l'insieme dei minimi è il piano $x=0$, il minimo assoluto è $0$. La classificazione via Hessiana è degenere qui (autovalori nulli lungo il piano critico), ma il segno di $F$ risolve direttamente."
   }
  ]
 },

 {
  "pool": "ottim",
  "src": "tipo D · manuale · degenere min",
  "steps": [
   {
    "t": "Classifica l'origine per $f(x,y)=x^4+y^4$. L'Hessiana in $(0,0)$ è nulla ($\\det H=0$).",
    "opts": [
     {"x": "Minimo assoluto: il test dell'Hessiana è muto, ma $f\\ge 0=f(0,0)$ direttamente", "c": true},
     {"x": "Sella, perché $\\det H=0$"},
     {"x": "Il test dell'Hessiana dice che è degenere, quindi non è un estremo"},
     {"x": "Massimo, perché $H=0$"}
    ],
    "hint": "$\\det H=0$ non classifica: torna alla definizione. Quanto vale $f$ fuori dall'origine rispetto a $f(0,0)=0$?",
    "sol": "$\\nabla f=(4x^3,4y^3)=0$ solo in $(0,0)$; l'Hessiana è la matrice nulla, test inconcludente ($\\det H=0$). Ma $f=x^4+y^4>0$ per $(x,y)\\ne(0,0)$ e $f(0,0)=0$: minimo assoluto. Il caso degenere si risolve con la definizione, non con l'Hessiana."
   }
  ]
 },

 {
  "pool": "ottim",
  "src": "tipo D · manuale · TRAPPOLA degenere",
  "steps": [
   {
    "t": "Per $f(x,y)=x^2-y^4$ l'Hessiana in $(0,0)$ è $\\mathrm{diag}(2,0)$, semidefinita positiva ($\\det H=0$). Che punto è davvero?",
    "opts": [
     {"x": "Sella: lungo l'asse $x$ $f=x^2>0$, lungo l'asse $y$ $f=-y^4<0$; l'Hessiana semidefinita non decideva", "c": true},
     {"x": "Minimo, perché l'Hessiana è semidefinita POSITIVA"},
     {"x": "Minimo, perché $f_{xx}=2>0$"},
     {"x": "Massimo"},
     {"x": "Non è un punto critico"}
    ],
    "hint": "Hessiana semidefinita con un autovalore nullo: NON garantisce estremo. Guarda $f$ lungo le direzioni deboli (asse $y$).",
    "sol": "$\\det H=0$: caso degenere, l'Hessiana semidefinita positiva NON implica minimo. Direttamente: $f(x,0)=x^2>0$ ma $f(0,y)=-y^4<0$ vicino all'origine: valori di entrambi i segni $\\Rightarrow$ sella. Trattare la semidefinita come definita è l'errore da evitare."
   }
  ]
 },

 {
  "pool": "ottim",
  "src": "tipo D · manuale · Lagrange ellisse",
  "steps": [
   {
    "t": "Estremi di $f(x,y)=x$ sul vincolo $g=x^2+4y^2=4$. Lagrange dà:",
    "opts": [
     {"x": "$y=0$, quindi $x=\\pm2$: $\\max f=2$ in $(2,0)$, $\\min f=-2$ in $(-2,0)$", "c": true},
     {"x": "$x=0$, quindi $\\max f=0$"},
     {"x": "$\\max f=4$, $\\min f=-4$"},
     {"x": "Nessun candidato: $\\nabla f=(1,0)$ non è mai parallelo a $\\nabla g$"}
    ],
    "hint": "$(1,0)=\\lambda(2x,8y)$: la seconda componente dà $8\\lambda y=0$. Con $\\lambda\\ne0$ resta $y=0$.",
    "sol": "Lagrange: $1=2\\lambda x$, $0=8\\lambda y$. La seconda forza $y=0$ (se $\\lambda=0$ la prima è impossibile). Sul vincolo $x^2=4\\Rightarrow x=\\pm2$: $\\max f=2$, $\\min f=-2$. Sono i vertici dell'ellisse sull'asse $x$."
   }
  ]
 },

 {
  "pool": "ottim",
  "src": "tipo D · manuale · sella",
  "steps": [
   {
    "t": "Classifica l'unico punto critico di $f(x,y)=x^2-y^2$.",
    "opts": [
     {"x": "$(0,0)$ è una sella: $H=\\mathrm{diag}(2,-2)$, $\\det H=-4<0$", "c": true},
     {"x": "$(0,0)$ è un minimo, perché $f_{xx}=2>0$"},
     {"x": "$(0,0)$ è un massimo, perché $f_{yy}=-2<0$"},
     {"x": "Non ci sono punti critici"}
    ],
    "hint": "Autovalori $2$ e $-2$: segni opposti. Una direzione sale, l'altra scende: prototipo di sella.",
    "sol": "$\\nabla f=(2x,-2y)=0\\Rightarrow(0,0)$. $H=\\mathrm{diag}(2,-2)$, $\\det H=-4<0\\Rightarrow$ sella (test dell'Hessiana). È il controesempio standard a \"$\\nabla f=0\\Rightarrow$ estremo\"."
   }
  ]
 },

 {
  "pool": "ottim",
  "src": "tipo D · manuale · assoluti su disco",
  "steps": [
   {
    "t": "Max e min ASSOLUTI di $f(x,y)=xy$ su $D=\\{x^2+y^2\\le 1\\}$. Interno: $\\nabla f=0$ dà $(0,0)$, una sella con $f=0$. Che fai di questo candidato?",
    "opts": [
     {"x": "Lo tengo comunque in gara col suo valore $f(0,0)=0$: sul compatto conto i VALORI, non la natura locale", "c": true},
     {"x": "Lo scarto perché è una sella, non un estremo locale"},
     {"x": "È già il minimo assoluto perché $f(0,0)=0$"},
     {"x": "Lo scarto perché $\\det H<0$"}
    ],
    "hint": "Per gli estremi ASSOLUTI su un compatto conta il valore di $f$ nei candidati, non se localmente sono min/max/sella.",
    "sol": "Sul bordo, Lagrange (come per $xy$ su $x^2+y^2=1$) dà $f=\\pm1/2$. Confronto: candidato interno $0$, candidati di bordo $\\pm1/2$. $\\max f=1/2$, $\\min f=-1/2$: entrambi sul bordo. Il punto interno, pur sella, entra col valore $0$ e semplicemente non vince."
   }
  ]
 },

 {
  "pool": "ottim",
  "src": "tipo D · manuale · min quadratica",
  "steps": [
   {
    "t": "Classifica l'unico punto critico di $f(x,y)=x^2+xy+y^2$.",
    "opts": [
     {"x": "$(0,0)$ minimo: $H=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$, $\\det H=3>0$ e $f_{xx}=2>0$", "c": true},
     {"x": "$(0,0)$ sella, perché c'è il termine misto $xy$"},
     {"x": "$(0,0)$ massimo"},
     {"x": "Nessun punto critico, perché $f>0$"}
    ],
    "hint": "Il termine $xy$ non implica sella: conta $\\det H=f_{xx}f_{yy}-f_{xy}^2=4-1=3>0$.",
    "sol": "$\\nabla f=(2x+y,\\,x+2y)=0\\Rightarrow(0,0)$. $\\det H=2\\cdot2-1^2=3>0$ e $f_{xx}=2>0\\Rightarrow$ minimo (test dell'Hessiana). La forma è definita positiva; il minimo è anche assoluto ($f$ coerciva)."
   }
  ]
 },

 {
  "pool": "ottim",
  "src": "20220504 Es.2 · assoluti 3D vincolati",
  "steps": [
   {
    "t": "Estremi assoluti di $f(x,y,z)=x^2+y^2-z^2$ su $D=\\{x^4+y^4+2z^4\\le 1\\}$. Il punto critico interno è $O=(0,0,0)$ con $f(O)=0$. È il minimo?",
    "opts": [
     {"x": "No: $O$ è una sella (autovalori $2,2,-2$); min e max stanno sul bordo, da cercare con Lagrange", "c": true},
     {"x": "Sì, $f(O)=0$ è il minimo assoluto"},
     {"x": "Sì, perché $O$ è l'unico punto critico interno"},
     {"x": "$O$ va scartato perché sul bordo"}
    ],
    "hint": "$H(O)=\\mathrm{diag}(2,2,-2)$: due positivi e uno negativo. È una sella, non un estremo: il bordo compatto ospita gli assoluti.",
    "sol": "$O$ ha $H=\\mathrm{diag}(2,2,-2)$: sella (autovalori discordi), non estremo. $D$ è compatto: Weierstrass dà max/min, che vanno cercati sul bordo $x^4+y^4+2z^4=1$ via Lagrange.",
    "cont": "Continua &rarr; il bordo"
   },
   {
    "t": "Sul bordo, i candidati di Lagrange danno tra gli altri $(0,0,\\pm 2^{-1/4})$ con $2z^4=1$. Quanto vale lì $f$, e chi è il minimo assoluto?",
    "opts": [
     {"x": "$f=-z^2=-1/\\sqrt2$: è il minimo assoluto (il massimo, $\\sqrt2$, sta dove $x^4+y^4=1$, $z=0$)", "c": true},
     {"x": "$f=0$, uguale al centro"},
     {"x": "$f=-1$, il minimo"},
     {"x": "$f=1$, il minimo"}
    ],
    "hint": "In $(0,0,2^{-1/4})$: $z^2=(2^{-1/4})^2=2^{-1/2}=1/\\sqrt2$, e $f=-z^2$. Il termine $-z^2$ tira $f$ verso il basso.",
    "sol": "In $(0,0,\\pm2^{-1/4})$: $f=-z^2=-1/\\sqrt2$, il valore più basso $\\Rightarrow\\min f=-1/\\sqrt2$. Il massimo si ha dove $z=0$ e $x^4+y^4=1$ è \"usato\" per $x^2+y^2$: es. $x=y=2^{-1/4}$ dà $f=2\\cdot2^{-1/2}=\\sqrt2$. Weierstrass + Lagrange sul bordo."
   }
  ]
 },

 {
  "pool": "ottim",
  "src": "20240209 Es.2 · critici liberi 3D",
  "steps": [
   {
    "t": "Per $f(x,y,z)=2x^3+yx^2+y^2z-9z$, quante equazioni scalari impone $\\nabla f=0$ e cosa sono?",
    "opts": [
     {"x": "Tre: $f_x=6x^2+2xy=0$, $f_y=x^2+2yz=0$, $f_z=y^2-9=0$ (sistema per i candidati)", "c": true},
     {"x": "Una sola: $f=0$"},
     {"x": "Due, perché $z$ compare linearmente"},
     {"x": "Tre, ma sono già i minimi essendo $f$ un polinomio"}
    ],
    "hint": "$\\nabla f=0$ è un sistema con tante equazioni quante le variabili: qui tre derivate parziali annullate.",
    "sol": "$\\nabla f=(6x^2+2xy,\\;x^2+2yz,\\;y^2-9)=0$: tre equazioni. Da $f_z=0$: $y=\\pm3$. Sono i CANDIDATI (Fermat, necessaria); la classificazione richiede poi l'Hessiana $3\\times3$ e il criterio di Sylvester, dove $\\det H>0$ da solo non basterebbe."
   }
  ]
 }

];

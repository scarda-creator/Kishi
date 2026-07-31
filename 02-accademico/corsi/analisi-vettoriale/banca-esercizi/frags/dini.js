Q.dini = [

 // ============================================================
 // ================  CONCETTUALI (15)  ========================
 // ============================================================

 {
  "pool": "dini",
  "src": "tipo G · manuale · ipotesi",
  "steps": [
   {
    "t": "Il teorema del Dini applicato a $F(x,y)=0$ per esplicitare $y=g(x)$ vicino a $(x_0,y_0)$ richiede:",
    "opts": [
     { "x": "$F\\in C^1$ in un intorno, $F(x_0,y_0)=0$ e $F_y(x_0,y_0)\\ne 0$", "c": true },
     { "x": "$F\\in C^1$ e $F_x(x_0,y_0)\\ne 0$" },
     { "x": "soltanto $F(x_0,y_0)=0$" },
     { "x": "$\\nabla F(x_0,y_0)=0$" }
    ],
    "hint": "La derivata che deve essere non nulla è quella rispetto alla variabile che vuoi ESPLICITARE ($y$), non l'altra.",
    "sol": "Teorema del Dini: se $F\\in C^1$, $F(x_0,y_0)=0$ (il punto sta sull'insieme di livello) e $F_y(x_0,y_0)\\ne 0$, allora esiste un'unica $y=g(x)$ di classe $C^1$ in un intorno di $x_0$ con $g(x_0)=y_0$ e $F(x,g(x))=0$. Se invece è $F_x\\ne 0$ si esplicita $x=h(y)$."
   }
  ]
 },

 {
  "pool": "dini",
  "src": "tipo G · manuale · scelta variabile",
  "steps": [
   {
    "t": "In un punto $P$ di $\\{F(x,y)=0\\}$ risulta $F_x(P)\\ne 0$ e $F_y(P)=0$. Cosa garantisce il Dini?",
    "opts": [
     { "x": "esplicitabilità di $x=h(y)$ (curva localmente grafico su $y$), NON di $y=g(x)$", "c": true },
     { "x": "esplicitabilità di $y=g(x)$" },
     { "x": "nulla: serve che entrambe le parziali siano non nulle" },
     { "x": "$P$ è un punto singolare, la curva non è regolare in $P$" }
    ],
    "hint": "Si esplicita sempre la variabile la cui derivata parziale è non nulla.",
    "sol": "Dini: la derivata parziale non nulla decide la variabile esplicitabile. $F_x(P)\\ne 0$ dà $x=h(y)$ con $h'=-F_y/F_x=0$: qui la curva ha tangente verticale (nel piano $xy$), quindi non è grafico di $y$ su $x$ ma lo è di $x$ su $y$. Il punto è regolare perché $\\nabla F(P)\\ne 0$."
   }
  ]
 },

 {
  "pool": "dini",
  "src": "tipo G · manuale · derivazione di $g'$",
  "steps": [
   {
    "t": "Derivando l'identità $F(x,g(x))\\equiv 0$ rispetto a $x$ si ottiene la formula della derivata implicita. Qual è?",
    "opts": [
     { "x": "$F_x+F_y\\,g'(x)=0\\ \\Rightarrow\\ g'(x)=-\\dfrac{F_x}{F_y}$", "c": true },
     { "x": "$F_x\\,g'(x)+F_y=0\\ \\Rightarrow\\ g'(x)=-\\dfrac{F_y}{F_x}$" },
     { "x": "$g'(x)=\\dfrac{F_x}{F_y}$" },
     { "x": "$g'(x)=F_x-F_y$" }
    ],
    "hint": "È la regola della catena su $x\\mapsto(x,g(x))$: la variabile $y=g(x)$ dipende da $x$, la $x$ da sé stessa.",
    "sol": "Teorema del Dini + regola della catena: $\\frac{d}{dx}F(x,g(x))=F_x\\cdot 1+F_y\\cdot g'(x)=0$. Isolando: $g'(x)=-F_x/F_y$, ben definita perché il Dini garantisce $F_y\\ne 0$. La $F_x$ sta al numeratore, non al denominatore."
   }
  ]
 },

 {
  "pool": "dini",
  "src": "tipo G · manuale · segno",
  "steps": [
   {
    "t": "Sia $F_x(x_0,y_0)=3$ e $F_y(x_0,y_0)=-2$. Quanto vale $g'(x_0)$ per $y=g(x)$?",
    "opts": [
     { "x": "$g'(x_0)=-\\dfrac{F_x}{F_y}=-\\dfrac{3}{-2}=\\dfrac{3}{2}$", "c": true },
     { "x": "$g'(x_0)=\\dfrac{F_x}{F_y}=-\\dfrac{3}{2}$" },
     { "x": "$g'(x_0)=-\\dfrac{3}{2}$" },
     { "x": "$g'(x_0)=\\dfrac{F_y}{F_x}=-\\dfrac{2}{3}$" }
    ],
    "hint": "Il segno meno sta DAVANTI alla frazione $F_x/F_y$; poi si porta dentro il segno di $F_y$.",
    "sol": "Dini: $g'=-F_x/F_y=-(3)/(-2)=+3/2$. L'errore tipico è dimenticare che $F_y$ è già negativo, e scrivere $-3/2$: il doppio segno negativo dà un risultato positivo."
   }
  ]
 },

 {
  "pool": "dini",
  "src": "20220124 Es.1 · trappola g''",
  "steps": [
   {
    "t": "La formula $g''(x_0)=-\\dfrac{F_{xx}}{F_y}$ per la funzione implicita $y=g(x)$ è corretta:",
    "opts": [
     { "x": "solo quando $g'(x_0)=0$; altrimenti compaiono termini con $F_{xy}$ e $F_{yy}$", "c": true },
     { "x": "sempre, in ogni punto" },
     { "x": "mai: la derivata seconda implicita non ha formula chiusa" },
     { "x": "solo se $F$ è un polinomio" }
    ],
    "hint": "Deriva due volte $F(x,g(x))=0$: i termini $F_{xy}g'$ e $F_{yy}(g')^2$ spariscono solo se $g'=0$.",
    "sol": "Derivando due volte l'identità del Dini: $F_{xx}+2F_{xy}g'+F_{yy}(g')^2+F_y\\,g''=0$. Se $g'=0$ resta $g''=-F_{xx}/F_y$; altrimenti servono anche $F_{xy},F_{yy}$. Usare la formula ridotta con $g'\\ne 0$ è la trappola più frequente. Src 20220124 es.1."
   }
  ]
 },

 {
  "pool": "dini",
  "src": "tipo G · manuale · Dini 3D",
  "steps": [
   {
    "t": "Per esplicitare $z=g(x,y)$ da $F(x,y,z)=0$ vicino a $P=(x_0,y_0,z_0)$, il Dini richiede:",
    "opts": [
     { "x": "$F\\in C^1$, $F(P)=0$ e $F_z(P)\\ne 0$", "c": true },
     { "x": "$F\\in C^1$, $F(P)=0$ e $F_x(P)\\ne 0$" },
     { "x": "$\\nabla F(P)=0$" },
     { "x": "solo $F(P)=0$ e $F$ continua" }
    ],
    "hint": "Per ottenere $z$ come funzione delle altre due, deve essere non nulla la parziale rispetto a $z$.",
    "sol": "Teorema del Dini in $\\mathbb{R}^3$: $F\\in C^1$, $F(P)=0$ e $F_z(P)\\ne 0$ danno un'unica $z=g(x,y)$ di classe $C^1$ vicino a $(x_0,y_0)$ con $F(x,y,g(x,y))=0$. Se fosse $F_z=0$ ma, ad esempio, $F_x\\ne 0$, si esplicita $x$ in funzione di $(y,z)$."
   }
  ]
 },

 {
  "pool": "dini",
  "src": "tipo G · manuale · gradiente di $g$ in 3D",
  "steps": [
   {
    "t": "Dal Dini $z=g(x,y)$ con $F(x,y,g)=0$. Le derivate parziali di $g$ sono:",
    "opts": [
     { "x": "$g_x=-\\dfrac{F_x}{F_z},\\quad g_y=-\\dfrac{F_y}{F_z}$", "c": true },
     { "x": "$g_x=-\\dfrac{F_z}{F_x},\\quad g_y=-\\dfrac{F_z}{F_y}$" },
     { "x": "$g_x=\\dfrac{F_x}{F_z},\\quad g_y=\\dfrac{F_y}{F_z}$" },
     { "x": "$g_x=-F_x,\\quad g_y=-F_y$" }
    ],
    "hint": "Deriva $F(x,y,g(x,y))=0$ rispetto a $x$ (poi $y$) tenendo $g$ funzione di entrambe: $F_x+F_z g_x=0$.",
    "sol": "Teorema del Dini + catena: $\\partial_x[F(x,y,g)]=F_x+F_z g_x=0\\Rightarrow g_x=-F_x/F_z$; analogamente $g_y=-F_y/F_z$. Al denominatore c'è sempre la parziale rispetto alla variabile esplicitata ($z$)."
   }
  ]
 },

 {
  "pool": "dini",
  "src": "tipo G · manuale · retta tangente",
  "steps": [
   {
    "t": "La retta tangente alla curva di livello $\\{F(x,y)=0\\}$ nel punto regolare $P=(x_0,y_0)$ ($\\nabla F(P)\\ne 0$) ha equazione:",
    "opts": [
     { "x": "$F_x(P)(x-x_0)+F_y(P)(y-y_0)=0$, cioè $\\nabla F(P)\\cdot(x-P)=0$", "c": true },
     { "x": "$F_y(P)(x-x_0)-F_x(P)(y-y_0)=0$" },
     { "x": "$F_x(P)(x-x_0)+F_y(P)(y-y_0)=1$" },
     { "x": "$y-y_0=\\nabla F(P)\\cdot(x-x_0)$" }
    ],
    "hint": "Il gradiente è ORTOGONALE alla curva di livello: la tangente è il luogo dei vettori perpendicolari a $\\nabla F$ uscenti da $P$.",
    "sol": "$\\nabla F(P)$ è normale alla linea di livello, quindi la tangente è $\\nabla F(P)\\cdot(x-P)=0$. Equivale al grafico linearizzato del Dini: $y-y_0=g'(x_0)(x-x_0)$ con $g'=-F_x/F_y$, che moltiplicato per $F_y$ dà la stessa equazione. La seconda opzione è la retta NORMALE (usa il gradiente come direzione, non come normale)."
   }
  ]
 },

 {
  "pool": "dini",
  "src": "22gen24 Es.1 · piano tangente",
  "steps": [
   {
    "t": "Il piano tangente alla superficie di livello $\\{F(x,y,z)=0\\}$ nel punto regolare $P$ è:",
    "opts": [
     { "x": "$\\nabla F(P)\\cdot(x-P)=0$, cioè $F_x(P)(x-x_0)+F_y(P)(y-y_0)+F_z(P)(z-z_0)=0$", "c": true },
     { "x": "$z-z_0=\\nabla F(P)\\cdot(x-x_0,y-y_0)$" },
     { "x": "$F_x(P)x+F_y(P)y+F_z(P)z=0$" },
     { "x": "$(x-P)=\\lambda\\nabla F(P)$" }
    ],
    "hint": "Il gradiente è il vettore normale al piano tangente; l'ultima opzione descrive invece la retta normale.",
    "sol": "$\\nabla F(P)$ è ortogonale alla superficie di livello, quindi il piano tangente ha equazione $\\nabla F(P)\\cdot(x-P)=0$. Se $F_z(P)\\ne 0$ questo coincide col piano tangente al grafico di $g$ dato dal Dini: $z-z_0=g_x(x-x_0)+g_y(y-y_0)$ con $g_x=-F_x/F_z$, $g_y=-F_y/F_z$. Src 22gen24 es.1."
   }
  ]
 },

 {
  "pool": "dini",
  "src": "tipo G · manuale · dove Dini NON si applica",
  "steps": [
   {
    "t": "In quale caso il teorema del Dini NON garantisce l'esplicitabilità (né $y=g(x)$ né $x=h(y)$) attorno a $P\\in\\{F=0\\}$?",
    "opts": [
     { "x": "quando $\\nabla F(P)=0$ (punto singolare): entrambe le parziali si annullano", "c": true },
     { "x": "quando $F_x(P)\\ne 0$" },
     { "x": "quando $F_y(P)\\ne 0$" },
     { "x": "quando $F(P)=0$" }
    ],
    "hint": "Il teorema fallisce solo se TUTTE le parziali si annullano; basta una parziale non nulla per esplicitare la variabile corrispondente.",
    "sol": "Se $\\nabla F(P)=0$ il punto è singolare: l'insieme di livello può non essere localmente un grafico (es. due rami che si incrociano, un punto isolato, una cuspide). Se anche solo una parziale è non nulla, il Dini esplicita la variabile corrispondente. $F(P)=0$ è invece un'ipotesi necessaria, non un ostacolo."
   }
  ]
 },

 {
  "pool": "dini",
  "src": "tipo G · manuale · gradiente ortogonale",
  "steps": [
   {
    "t": "Perché $\\nabla F(P)$ è ortogonale all'insieme di livello $\\{F=0\\}$ in $P$?",
    "opts": [
     { "x": "perché per ogni curva $\\gamma(t)$ dentro il livello, $\\frac{d}{dt}F(\\gamma)=\\nabla F\\cdot\\gamma'=0$, quindi $\\nabla F\\perp\\gamma'$", "c": true },
     { "x": "perché $\\nabla F$ punta nella direzione della curva di livello" },
     { "x": "perché $\\|\\nabla F\\|=0$ sul livello" },
     { "x": "perché $F$ è costante lungo il gradiente" }
    ],
    "hint": "Deriva $F(\\gamma(t))=0$ lungo una curva contenuta nell'insieme di livello.",
    "sol": "Ogni curva $\\gamma$ contenuta in $\\{F=0\\}$ soddisfa $F(\\gamma(t))\\equiv 0$, quindi $\\nabla F\\cdot\\gamma'=0$: il gradiente è perpendicolare a ogni vettore tangente, cioè all'intera curva/superficie di livello. Da qui l'equazione della tangente $\\nabla F\\cdot(x-P)=0$. Il gradiente punta nella direzione di massima crescita, TRASVERSALE al livello, non lungo di esso."
   }
  ]
 },

 {
  "pool": "dini",
  "src": "tipo G · manuale · carattere locale",
  "steps": [
   {
    "t": "Il teorema del Dini garantisce l'esistenza di $y=g(x)$:",
    "opts": [
     { "x": "solo in un intorno di $x_0$ (risultato locale); globalmente $\\{F=0\\}$ può non essere un grafico", "c": true },
     { "x": "su tutto $\\mathbb{R}$" },
     { "x": "su tutto l'insieme dove $F_y\\ne 0$, in modo unico e globale" },
     { "x": "solo nel singolo punto $x_0$, non in un intorno" }
    ],
    "hint": "Pensa alla circonferenza $x^2+y^2-1=0$: attorno a $(1,0)$ non è grafico di $y$ su $x$, e globalmente ha due rami.",
    "sol": "Il Dini è un teorema LOCALE: dà $g$ in un intorno di $x_0$, non oltre. Esempio: $F=x^2+y^2-1$; in $(0,1)$ ($F_y=2\\ne 0$) esiste $y=\\sqrt{1-x^2}$ localmente, ma la circonferenza intera non è grafico di una sola $g(x)$ (ha ramo superiore e inferiore). Nei punti $(\\pm 1,0)$ è $F_y=0$ e infatti lì la curva ha tangente verticale."
   }
  ]
 },

 {
  "pool": "dini",
  "src": "tipo G · manuale · regolarità $C^1$",
  "steps": [
   {
    "t": "L'ipotesi $F\\in C^1$ nel teorema del Dini serve a garantire:",
    "opts": [
     { "x": "che $g$ esista e sia essa stessa $C^1$, con la formula $g'=-F_x/F_y$ valida", "c": true },
     { "x": "che $F(P)=0$" },
     { "x": "che il gradiente sia nullo" },
     { "x": "solo la continuità di $F$, non la derivabilità di $g$" }
    ],
    "hint": "Senza la continuità delle derivate parziali non si può garantire né l'esistenza di $g$ né la sua derivabilità.",
    "sol": "La regolarità $C^1$ (derivate parziali continue) è ciò che, insieme a $F_y(P)\\ne 0$, produce una $g$ derivabile con continuità e legittima la formula $g'=-F_x/F_y$. La sola continuità di $F$ non basta: senza differenziabilità il rapporto $-F_x/F_y$ non ha senso e $g$ può non essere liscia."
   }
  ]
 },

 {
  "pool": "dini",
  "src": "tipo G · manuale · il punto sta sul livello",
  "steps": [
   {
    "t": "Prima di applicare il Dini in $P=(x_0,y_0)$ per $F(x,y)=0$, il controllo IMPRESCINDIBILE oltre a $F_y(P)\\ne 0$ è:",
    "opts": [
     { "x": "verificare che $F(x_0,y_0)=0$, cioè che $P$ appartiene all'insieme di livello", "c": true },
     { "x": "verificare che $F_x(P)=0$" },
     { "x": "verificare che $F$ sia un polinomio" },
     { "x": "verificare che $g'(x_0)=0$" }
    ],
    "hint": "Il teorema esplicita la curva $\\{F=0\\}$: ha senso solo in un punto che ci sta sopra.",
    "sol": "Il Dini parte dall'ipotesi $F(P)=0$: $P$ deve stare sull'insieme di livello. È il primo passo negli esercizi in cui si cercano i valori $y_0$ risolvendo $F(x_0,y)=0$. Applicare la formula $g'=-F_x/F_y$ in un punto con $F(P)\\ne 0$ non ha significato: non c'è curva da esplicitare lì."
   }
  ]
 },

 {
  "pool": "dini",
  "src": "tipo G · manuale · tangente al grafico vs alla superficie",
  "steps": [
   {
    "t": "Con $F_z(P)\\ne 0$, il piano tangente al GRAFICO di $g$ (dato dal Dini) e il piano tangente alla SUPERFICIE di livello $\\{F=0\\}$ in $P$:",
    "opts": [
     { "x": "coincidono: $z-z_0=g_x(x-x_0)+g_y(y-y_0)$ è la stessa equazione di $\\nabla F\\cdot(x-P)=0$", "c": true },
     { "x": "sono ortogonali fra loro" },
     { "x": "coincidono solo se $\\nabla F(P)=0$" },
     { "x": "sono diversi: il primo è un piano, il secondo una retta" }
    ],
    "hint": "Sostituisci $g_x=-F_x/F_z$, $g_y=-F_y/F_z$ nell'equazione del grafico e moltiplica per $F_z$.",
    "sol": "Sono lo stesso piano. Dal grafico: $z-z_0=-\\frac{F_x}{F_z}(x-x_0)-\\frac{F_y}{F_z}(y-y_0)$; moltiplicando per $F_z$ e riordinando si ottiene $F_x(x-x_0)+F_y(y-y_0)+F_z(z-z_0)=0$, cioè $\\nabla F(P)\\cdot(x-P)=0$. La superficie di livello è localmente proprio il grafico di $g$, quindi hanno lo stesso piano tangente."
   }
  ]
 },

 // ============================================================
 // ==================  ESERCIZI (15)  =========================
 // ============================================================

 {
  "pool": "dini",
  "src": "20220124 Es.1",
  "steps": [
   {
    "t": "Sia $F(x,y)=y^3\\sin x+y^2-2ye^x-3-x$, con $F(0,-1)=0$ e $F_y(0,-1)=-4\\ne 0$. Dini dà $y=g_0(x)$, $g_0(0)=-1$. Quanto vale $g_0'(0)$?",
    "opts": [
     { "x": "$g_0'(0)=-\\dfrac{F_x(0,-1)}{F_y(0,-1)}=0$ (il punto è critico per $g_0$)", "c": true },
     { "x": "$g_0'(0)=-\\dfrac{F_y(0,-1)}{F_x(0,-1)}$" },
     { "x": "$g_0'(0)=F_x(0,-1)$" },
     { "x": "$g_0'(0)=-4$" }
    ],
    "hint": "La formula del Dini è $g'=-F_x/F_y$, con $F_x$ al NUMERATORE. Calcola $F_x(0,-1)$.",
    "sol": "Teorema del Dini: $g'=-F_x/F_y$. Qui $F_x=y^3\\cos x-2ye^x-1$, e $F_x(0,-1)=(-1)(1)-2(-1)(1)-1=-1+2-1=0$. Dunque $g_0'(0)=0$: punto critico di $g_0$. Src 20220124 es.1.",
    "cont": "Continua &rarr; la natura del punto"
   },
   {
    "t": "Poiché $g_0'(0)=0$ si può usare $g_0''(0)=-\\dfrac{F_{xx}(0,-1)}{F_y(0,-1)}$. Con $F_{xx}(0,-1)=2$ si ha $g_0''(0)=1/2>0$: che punto è?",
    "opts": [
     { "x": "minimo locale di $g_0$: $g_0'(0)=0$ e $g_0''(0)>0$", "c": true },
     { "x": "massimo locale" },
     { "x": "flesso a tangente orizzontale" },
     { "x": "sella" }
    ],
    "hint": "Per una funzione di una variabile: $g'=0$ e $g''>0$ classificano il punto.",
    "sol": "$g_0'(0)=0$ e $g_0''(0)=1/2>0\\Rightarrow$ minimo locale. La formula $g''=-F_{xx}/F_y$ vale SOLO perché $g'=0$; in generale compaiono anche $F_{xy}$ e $F_{yy}$. Src 20220124 es.1."
   }
  ]
 },

 {
  "pool": "dini",
  "src": "20220504 Es.1",
  "steps": [
   {
    "t": "$F(x,y)=y^2+x(e^y-e^2)-x^2-4$. Per trovare i punti di $\\{F=0\\}$ sull'asse $x=0$ si risolve $F(0,y)=0$. Quali sono?",
    "opts": [
     { "x": "$y^2-4=0\\Rightarrow y_0=-2,\\ y_1=2$", "c": true },
     { "x": "$y=0$ soltanto" },
     { "x": "$y^2-e^2-4=0$" },
     { "x": "nessuno: $F(0,y)$ non si annulla" }
    ],
    "hint": "Sostituisci $x=0$: i termini con $x$ spariscono, resta un'equazione in $y$.",
    "sol": "Il Dini si applica in punti dell'insieme di livello: prima li si cerca. $F(0,y)=y^2+0-0-4=y^2-4=0\\Rightarrow y=\\pm 2$. I candidati sono $(0,-2)$ e $(0,2)$. Src 20220504 es.1.",
    "cont": "Continua &rarr; applica il Dini in $(0,2)$"
   },
   {
    "t": "In $(0,2)$: $F_y=2y+xe^y$, $F_y(0,2)=4\\ne 0$ (Dini ok), e $F_x=e^y-e^2-2x$, $F_x(0,2)=e^2-e^2=0$. Quanto vale $g_1'(0)$ e che punto è (con $F_{xx}=-2$)?",
    "opts": [
     { "x": "$g_1'(0)=0$ e, da $g_1''(0)=-F_{xx}/F_y=2/4=1/2>0$, è un minimo", "c": true },
     { "x": "$g_1'(0)=-2$, punto non critico" },
     { "x": "$g_1'(0)=0$ ma è un massimo" },
     { "x": "Dini non si applica perché $F_x(0,2)=0$" }
    ],
    "hint": "$F_x=0$ non blocca il Dini (basta $F_y\\ne 0$): significa solo $g'=0$. Poi usa $g''=-F_{xx}/F_y$ perché $g'=0$.",
    "sol": "Dini: $F_y(0,2)=4\\ne 0$ garantisce $y=g_1(x)$. $g_1'(0)=-F_x/F_y=-0/4=0$: punto critico. Essendo $g_1'=0$, vale $g_1''(0)=-F_{xx}/F_y=-(-2)/4=1/2>0\\Rightarrow$ minimo. Src 20220504 es.1."
   }
  ]
 },

 {
  "pool": "dini",
  "src": "20230210 Es.1",
  "steps": [
   {
    "t": "$F(x,y)=x^3+ye^{x^2y^2}-3x^2$. Sull'asse $y=0$ si cercano i punti di $\\{F=0\\}$ risolvendo $F(x,0)=0$, e si vuole esplicitare $y=g(x)$. Quali punti e Dini applicabile?",
    "opts": [
     { "x": "$x^2(x-3)=0\\Rightarrow x_0=0,\\ x_1=3$; $F_y(x,0)=e^{x^2y^2}|_{y=0}=1\\ne 0$, quindi Dini dà $y=g(x)$", "c": true },
     { "x": "$x=0$ soltanto; e Dini non si applica perché $F_y(x,0)=0$" },
     { "x": "nessun punto reale" },
     { "x": "$x=3$ soltanto; si esplicita $x=h(y)$" }
    ],
    "hint": "$F(x,0)=x^3-3x^2$. Per $F_y$ deriva rispetto a $y$: il termine $ye^{x^2y^2}$ dà $e^{x^2y^2}(1+2x^2y^2)$, che in $y=0$ vale $1$.",
    "sol": "$F(x,0)=x^3-3x^2=x^2(x-3)=0\\Rightarrow x_0=0,\\ x_1=3$. $F_y=e^{x^2y^2}(1+2x^2y^2)$, in $y=0$ vale $1\\ne 0$: il Dini garantisce $y=g(x)$ in entrambi i punti. Src 20230210 es.1.",
    "cont": "Continua &rarr; monotonia in $x_1=3$"
   },
   {
    "t": "In $(3,0)$: $F_x=3x^2-6x+2xy^3e^{x^2y^2}$, quindi $F_x(3,0)=27-18=9$ e $F_y(3,0)=1$. Segno di $g_1'(3)$?",
    "opts": [
     { "x": "$g_1'(3)=-\\dfrac{F_x}{F_y}=-\\dfrac{9}{1}=-9<0$: $g_1$ è decrescente in $x=3$", "c": true },
     { "x": "$g_1'(3)=+9>0$: crescente" },
     { "x": "$g_1'(3)=-\\dfrac{F_y}{F_x}=-1/9$" },
     { "x": "$g_1'(3)=0$: punto critico" }
    ],
    "hint": "Formula del Dini con il segno meno davanti: $g'=-F_x/F_y=-9/1$.",
    "sol": "Teorema del Dini: $g_1'(3)=-F_x(3,0)/F_y(3,0)=-9/1=-9<0$, quindi $g_1$ decresce in $x=3$. (Nell'altro punto $x_0=0$ risulta $F_x(0,0)=0$, dunque $g_0'(0)=0$: lì è critico.) Src 20230210 es.1."
   }
  ]
 },

 {
  "pool": "dini",
  "src": "20240122 Es.1 · piano tangente",
  "steps": [
   {
    "t": "$F(x,y,z)=\\sqrt{x^2+y^2+z^2+1}+x-z=1$ con $\\nabla F(0,0,0)=(1,0,-1)$ e $F_z(0,0,0)=-1\\ne 0$. Piano tangente in $(0,0,0)$ alla superficie $z=g(x,y)$ del Dini:",
    "opts": [
     { "x": "$z=x$: da $g_x=-F_x/F_z=1$ e $g_y=-F_y/F_z=0$", "c": true },
     { "x": "$z=-x$" },
     { "x": "$z=x-y$" },
     { "x": "non definito perché $\\nabla F=0$" }
    ],
    "hint": "$g_x=-F_x/F_z$, $g_y=-F_y/F_z$; il piano è $z=g(0,0)+g_x x+g_y y$ con $g(0,0)=0$.",
    "sol": "Dini: $g_x=-\\frac{1}{-1}=1$, $g_y=-\\frac{0}{-1}=0$, $g(0,0)=0$, quindi $z=x$. Equivale a $\\nabla F\\cdot(x,y,z)=0$ perché $\\nabla F=(1,0,-1)$ dà $x-z=0$. Src 20240122 es.1."
   }
  ]
 },

 {
  "pool": "dini",
  "src": "20220907 Es.2 · Dini 3D + Hessiana",
  "steps": [
   {
    "t": "$F(x,y,z)=e^z+x^2y^2z-e^{xy}+x^4-y^4=0$ con $F_z(0,0,0)=1\\ne 0$ definisce $z=g(x,y)$; risulta $\\nabla g(0,0)=0$ e $g_{xx}=g_{yy}=0$, $g_{xy}=1$. Che punto critico è $(0,0)$ per $g$?",
    "opts": [
     { "x": "sella: $\\det H_g=g_{xx}g_{yy}-g_{xy}^2=0-1=-1<0$", "c": true },
     { "x": "minimo" },
     { "x": "massimo" },
     { "x": "non è un punto critico" }
    ],
    "hint": "Con $\\nabla g=0$ applica il test dell'Hessiana a $g$: $\\det H_g=g_{xx}g_{yy}-g_{xy}^2$.",
    "sol": "$\\det H_g=(0)(0)-1^2=-1<0\\Rightarrow$ sella. Il Dini fornisce $g$ implicita ($F_z\\ne 0$), poi si studia $g$ come normale funzione di due variabili col test dell'Hessiana. Src 20220907 es.2."
   }
  ]
 },

 {
  "pool": "dini",
  "src": "27giu25 Es.2 · controllo parziale",
  "steps": [
   {
    "t": "$F(x,y)=(x^2+2y^2)e^{-x-y^2}$, punto $(1,1)$ sul livello $F=3e^{-2}$. Per esplicitare $y=g(x)$ si controlla $F_y(1,1)$. Quanto vale e Dini applicabile?",
    "opts": [
     { "x": "$F_y(1,1)=-2e^{-2}\\ne 0$: Dini applicabile, esiste $y=g(x)$", "c": true },
     { "x": "$F_y(1,1)=0$: Dini non applicabile" },
     { "x": "$F_y(1,1)=4e^{-2}$: applicabile" },
     { "x": "il Dini serve solo se $F=0$, qui $F=3e^{-2}\\ne 0$, non applicabile" }
    ],
    "hint": "$F_y=e^{-x-y^2}[4y-2y(x^2+2y^2)]$. Un livello $F=c$ si tratta come $\\tilde F=F-c=0$; ciò non cambia le parziali.",
    "sol": "$F_y=e^{-x-y^2}\\big(4y-2y(x^2+2y^2)\\big)$; in $(1,1)$: $e^{-2}(4-2\\cdot 3)=-2e^{-2}\\ne 0$. Il livello $F=3e^{-2}$ si riscrive $F-3e^{-2}=0$ senza alterare le derivate, quindi il Dini dà $y=g(x)$. Src 27giu25 es.2.",
    "cont": "Continua &rarr; calcola $g'(1)$"
   },
   {
    "t": "Con $F_x(1,1)=e^{-2}[2x-(x^2+2y^2)]|_{(1,1)}=e^{-2}(2-3)=-e^{-2}$ e $F_y(1,1)=-2e^{-2}$, quanto vale $g'(1)$?",
    "opts": [
     { "x": "$g'(1)=-\\dfrac{F_x}{F_y}=-\\dfrac{-e^{-2}}{-2e^{-2}}=-\\dfrac{1}{2}$", "c": true },
     { "x": "$g'(1)=+\\dfrac{1}{2}$" },
     { "x": "$g'(1)=-2$" },
     { "x": "$g'(1)=\\dfrac{F_x}{F_y}=\\dfrac{1}{2}$" }
    ],
    "hint": "Il fattore $e^{-2}$ si semplifica. Attento al doppio segno: $F_x$ e $F_y$ sono entrambi negativi.",
    "sol": "Dini: $g'(1)=-F_x/F_y=-\\frac{-e^{-2}}{-2e^{-2}}=-\\frac{1}{2}$. Il fattore comune $e^{-2}$ si elide; il segno meno esterno più il rapporto di due negativi dà $-1/2$. Src 27giu25 es.2."
   }
  ]
 },

 {
  "pool": "dini",
  "src": "tipo G · manuale · retta tangente curva",
  "steps": [
   {
    "t": "Scrivi la retta tangente alla curva di livello $F(x,y)=x^2+xy+y^2-3=0$ nel punto $(1,1)$ (verificato: $F(1,1)=0$).",
    "opts": [
     { "x": "$x+y=2$: da $\\nabla F(1,1)=(2x+y,\\,x+2y)=(3,3)$ e $3(x-1)+3(y-1)=0$", "c": true },
     { "x": "$x-y=0$: usando $\\nabla F$ come direzione della tangente" },
     { "x": "$y-1=3(x-1)$, cioè $y=3x-2$" },
     { "x": "$3x+3y=1$" }
    ],
    "hint": "La tangente è $\\nabla F(P)\\cdot(x-P)=0$: il gradiente è la NORMALE, non la direzione della retta.",
    "sol": "$\\nabla F=(2x+y,\\,x+2y)$, $\\nabla F(1,1)=(3,3)\\ne 0$ (punto regolare). Tangente: $\\nabla F\\cdot(x-1,y-1)=0\\Rightarrow 3(x-1)+3(y-1)=0\\Rightarrow x+y=2$. La retta $x-y=0$ userebbe il gradiente come direzione anziché come normale: è la normale, non la tangente. Coerente col Dini: $g'(1)=-F_x/F_y=-3/3=-1$, cioè $y-1=-(x-1)$."
   }
  ]
 },

 {
  "pool": "dini",
  "src": "20230210 Es.3 · tangente a ellisse",
  "steps": [
   {
    "t": "Retta tangente alla curva di livello $F(x,y)=\\dfrac{x^2}{4}+y^2-1=0$ nel punto $(0,1)$.",
    "opts": [
     { "x": "$y=1$: $\\nabla F(0,1)=(x/2,\\,2y)|_{(0,1)}=(0,2)$, quindi $2(y-1)=0$", "c": true },
     { "x": "$x=0$" },
     { "x": "$y=1+x$" },
     { "x": "Dini non applicabile: $F_x(0,1)=0$" }
    ],
    "hint": "$\\nabla F(0,1)=(0,2)$: la normale è verticale, quindi la tangente è orizzontale. $F_x=0$ non blocca il Dini se $F_y\\ne 0$.",
    "sol": "$\\nabla F=(x/2,\\,2y)$, $\\nabla F(0,1)=(0,2)$. Tangente $\\nabla F\\cdot(x-0,y-1)=0\\Rightarrow 0\\cdot x+2(y-1)=0\\Rightarrow y=1$. Il Dini dà $y=g(x)$ ($F_y=2\\ne 0$) con $g'(0)=-F_x/F_y=0$: tangente orizzontale, coerente. $F_x(0,1)=0$ significa solo $g'=0$, non che il teorema fallisca."
   }
  ]
 },

 {
  "pool": "dini",
  "src": "22gen24 Es.1 · piano tangente a sfera",
  "steps": [
   {
    "t": "Piano tangente alla superficie di livello $F(x,y,z)=x^2+y^2+z^2-3=0$ nel punto $(1,1,1)$.",
    "opts": [
     { "x": "$x+y+z=3$: da $\\nabla F(1,1,1)=(2,2,2)$ e $2(x-1)+2(y-1)+2(z-1)=0$", "c": true },
     { "x": "$x+y+z=0$" },
     { "x": "$z=1$" },
     { "x": "$(x,y,z)=(1,1,1)+t(2,2,2)$" }
    ],
    "hint": "Il piano tangente è $\\nabla F(P)\\cdot(x-P)=0$; l'ultima opzione è la retta normale, non il piano.",
    "sol": "$\\nabla F=(2x,2y,2z)$, $\\nabla F(1,1,1)=(2,2,2)\\ne 0$. Piano tangente: $2(x-1)+2(y-1)+2(z-1)=0\\Rightarrow x+y+z=3$. Il Dini ($F_z=2\\ne 0$) dà lo stesso piano tramite $z=g(x,y)$ con $g_x=g_y=-1$. La retta parametrica è la NORMALE alla superficie."
   }
  ]
 },

 {
  "pool": "dini",
  "src": "tipo G · manuale · piano tangente + scelta variabile",
  "steps": [
   {
    "t": "$F(x,y,z)=x^2+y^2-z^2=0$ nel punto $(1,0,1)$ (sul cono, $F(1,0,1)=0$). Piano tangente e variabile esplicitabile?",
    "opts": [
     { "x": "piano $x-z=0$; $F_z(1,0,1)=-2\\ne 0$ dà $z=g(x,y)$", "c": true },
     { "x": "piano $x+z=0$; si esplicita $z=g(x,y)$" },
     { "x": "Dini non applicabile: $\\nabla F(1,0,1)=0$" },
     { "x": "piano $y=0$" }
    ],
    "hint": "$\\nabla F=(2x,2y,-2z)$; in $(1,0,1)$ vale $(2,0,-2)\\ne 0$: punto regolare, $F_z\\ne 0$.",
    "sol": "$\\nabla F(1,0,1)=(2,0,-2)\\ne 0$: punto regolare del cono. Piano tangente $2(x-1)+0-2(z-1)=0\\Rightarrow x-z=0$. Poiché $F_z=-2\\ne 0$, il Dini esplicita $z=g(x,y)$. Attenzione: nel VERTICE $(0,0,0)$ è $\\nabla F=0$, lì il Dini fallisce e il cono è singolare."
   }
  ]
 },

 {
  "pool": "dini",
  "src": "tipo G · manuale · g'' con $g'\\ne 0$",
  "steps": [
   {
    "t": "Sulla circonferenza $F(x,y)=x^2+y^2-2=0$ nel punto $(1,1)$: $F_x=2,\\,F_y=2,\\,F_{xx}=F_{yy}=2,\\,F_{xy}=0$. Calcola $g''(1)$ per $y=g(x)$.",
    "opts": [
     { "x": "$g''(1)=-2$: prima $g'(1)=-F_x/F_y=-1$, poi la formula COMPLETA $g''=-\\dfrac{F_{xx}+2F_{xy}g'+F_{yy}(g')^2}{F_y}=-\\dfrac{2+0+2}{2}$", "c": true },
     { "x": "$g''(1)=-\\dfrac{F_{xx}}{F_y}=-1$ (formula ridotta)" },
     { "x": "$g''(1)=+2$" },
     { "x": "$g''(1)=0$" }
    ],
    "hint": "Qui $g'(1)=-1\\ne 0$: NON puoi usare $g''=-F_{xx}/F_y$. Servono i termini con $F_{xy}$ e $F_{yy}$.",
    "sol": "Dini: $g'(1)=-F_x/F_y=-2/2=-1\\ne 0$. Derivando due volte $F(x,g)=0$: $F_{xx}+2F_{xy}g'+F_{yy}(g')^2+F_y g''=0\\Rightarrow g''=-\\frac{2+2(0)(-1)+2(-1)^2}{2}=-\\frac{4}{2}=-2$. La formula ridotta $-F_{xx}/F_y=-1$ è la trappola: vale solo se $g'=0$. Verifica: $g(x)=\\sqrt{2-x^2}$, $g''(x)=-2/(2-x^2)^{3/2}$, $g''(1)=-2$."
   }
  ]
 },

 {
  "pool": "dini",
  "src": "21lug25 Es.1 · gradiente nullo",
  "steps": [
   {
    "t": "$F(x,y)=x^2-y^2=0$ (due rette $y=\\pm x$) nell'origine $(0,0)\\in\\{F=0\\}$. Il Dini permette di esplicitare una funzione lì?",
    "opts": [
     { "x": "no: $\\nabla F(0,0)=(0,0)$, punto singolare dove due rami si incrociano; il livello non è grafico di una funzione", "c": true },
     { "x": "sì, $y=g(x)$ con $g'(0)=0$" },
     { "x": "sì, $x=h(y)$" },
     { "x": "sì, perché $F\\in C^1$ e $F(0,0)=0$" }
    ],
    "hint": "Controlla $\\nabla F(0,0)$: se entrambe le parziali si annullano, il teorema non conclude nulla.",
    "sol": "$\\nabla F=(2x,-2y)$, $\\nabla F(0,0)=(0,0)$: ipotesi del Dini violate (nessuna parziale non nulla). L'insieme $\\{x^2-y^2=0\\}$ è l'unione di $y=x$ e $y=-x$: nell'origine i due rami si incrociano, quindi in nessun intorno è grafico di una singola funzione. $F\\in C^1$ e $F(P)=0$ da sole non bastano."
   }
  ]
 },

 {
  "pool": "dini",
  "src": "27giu25 Es.2 · controllo $F_z$ in 3D",
  "steps": [
   {
    "t": "$F(x,y,z)=xyz+x^2-z^3-1=0$ nel punto $(1,1,1)$ ($F(1,1,1)=1+1-1-1=0$). Per ottenere $z=g(x,y)$, quale parziale controlli e quanto vale?",
    "opts": [
     { "x": "$F_z=xy-3z^2$, $F_z(1,1,1)=1-3=-2\\ne 0$: Dini dà $z=g(x,y)$", "c": true },
     { "x": "$F_x=yz+2x$, $F_x(1,1,1)=3\\ne 0$: quindi $z=g(x,y)$" },
     { "x": "$F_z(1,1,1)=1\\ne 0$" },
     { "x": "basta $F(1,1,1)=0$, nessuna parziale da controllare" }
    ],
    "hint": "Per esplicitare $z$, la parziale rilevante è quella rispetto a $z$: $F_z\\ne 0$.",
    "sol": "Per $z=g(x,y)$ il Dini richiede $F_z\\ne 0$. $F_z=xy-3z^2$, $F_z(1,1,1)=1-3=-2\\ne 0$: applicabile. La seconda opzione usa $F_x$: quella controlla se si può esplicitare $x$, non $z$. Src 27giu25 es.2 (metodo)."
   }
  ]
 },

 {
  "pool": "dini",
  "src": "tipo G · manuale · folium",
  "steps": [
   {
    "t": "Curva $F(x,y)=x^3+y^3-6xy=0$ (folium) nel punto $(3,3)$ ($F=27+27-54=0$). Calcola $g'(3)$ per $y=g(x)$.",
    "opts": [
     { "x": "$g'(3)=-\\dfrac{F_x}{F_y}=-\\dfrac{3x^2-6y}{3y^2-6x}\\Big|_{(3,3)}=-\\dfrac{9}{9}=-1$", "c": true },
     { "x": "$g'(3)=-\\dfrac{F_y}{F_x}=-1$ (per caso stesso valore, formula sbagliata)" },
     { "x": "$g'(3)=+1$" },
     { "x": "Dini non applicabile: $F_y(3,3)=0$" }
    ],
    "hint": "$F_x=3x^2-6y$, $F_y=3y^2-6x$. Verifica $F_y(3,3)\\ne 0$, poi applica $g'=-F_x/F_y$.",
    "sol": "$F_x=3x^2-6y$, $F_x(3,3)=27-18=9$; $F_y=3y^2-6x$, $F_y(3,3)=27-18=9\\ne 0$ (Dini ok). $g'(3)=-9/9=-1$. La seconda opzione dà lo stesso numero solo perché $F_x=F_y$ qui, ma la formula $-F_y/F_x$ è concettualmente errata: in generale sbaglia."
   }
  ]
 },

 {
  "pool": "dini",
  "src": "05mar24 Es.4 · punto sul livello + $F_y=0$",
  "steps": [
   {
    "t": "$F(x,y)=x^2+y^2-2x=0$; verifica: $(0,0)\\in\\{F=0\\}$. Si può esplicitare $y=g(x)$ vicino a $(0,0)$?",
    "opts": [
     { "x": "no per $y=g(x)$ ($F_y(0,0)=0$), ma sì per $x=h(y)$ perché $F_x(0,0)=-2\\ne 0$", "c": true },
     { "x": "sì, $y=g(x)$ con $g'(0)=0$" },
     { "x": "no in assoluto: $\\nabla F(0,0)=0$" },
     { "x": "no: $(0,0)\\notin\\{F=0\\}$" }
    ],
    "hint": "$F(0,0)=0$ è vero. Calcola $\\nabla F(0,0)$: se $F_y=0$ ma $F_x\\ne 0$, si esplicita l'ALTRA variabile.",
    "sol": "$F(0,0)=0$: il punto sta sul livello (è la circonferenza $(x-1)^2+y^2=1$, che passa per l'origine). $\\nabla F=(2x-2,\\,2y)$, $\\nabla F(0,0)=(-2,0)$: $F_y=0$ blocca $y=g(x)$ (tangente verticale), ma $F_x=-2\\ne 0$ permette $x=h(y)$ col Dini, $h'(0)=-F_y/F_x=0$. Src 05mar24 es.4 (metodo)."
   }
  ]
 }

];

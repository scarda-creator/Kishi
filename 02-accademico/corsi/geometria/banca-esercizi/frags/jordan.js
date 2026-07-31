Q.jordan = [
 {
  "pool": "jordan",
  "src": "tipo 10 · numero di blocchi = m.g.",
  "steps": [
   {
    "t": "Per un autovalore &lambda; di A, il NUMERO di blocchi di Jordan relativi a &lambda; &egrave; uguale a:",
    "opts": [
     {
      "x": "la molteplicit&agrave; geometrica m.g.(&lambda;)=dim&#8202;ker(A&minus;&lambda;I)",
      "c": true
     },
     {
      "x": "la molteplicit&agrave; algebrica m.a.(&lambda;)"
     },
     {
      "x": "rk(A&minus;&lambda;I)"
     },
     {
      "x": "il grado del polinomio minimo"
     }
    ],
    "hint": "Ogni blocco di Jordan porta con s&eacute; esattamente UN autovettore. Il numero di autovettori indipendenti &egrave; m.g.(&lambda;)=dim&#8202;ker(A&minus;&lambda;I).",
    "sol": "Per il teorema sulla forma canonica di Jordan: numero di blocchi = m.g.(&lambda;)=n&minus;rk(A&minus;&lambda;I). Ogni blocco ha un solo autovettore; la SOMMA delle taglie dei blocchi di &lambda; &egrave; invece m.a.(&lambda;)."
   }
  ]
 },
 {
  "pool": "jordan",
  "src": "tipo 10 · taglia massima = indice = esponente nel p. minimo",
  "steps": [
   {
    "t": "La dimensione del blocco di Jordan PI&Ugrave; GRANDE relativo a &lambda; coincide con:",
    "opts": [
     {
      "x": "l&rsquo;esponente di (x&minus;&lambda;) nel polinomio minimo (indice di &lambda;)",
      "c": true
     },
     {
      "x": "la molteplicit&agrave; algebrica m.a.(&lambda;)"
     },
     {
      "x": "la molteplicit&agrave; geometrica m.g.(&lambda;)"
     },
     {
      "x": "sempre 1"
     }
    ],
    "hint": "Il polinomio minimo &egrave; &prod;(x&minus;&lambda;<sub>i</sub>)<sup>d<sub>i</sub></sup> con d<sub>i</sub> = taglia del blocco pi&ugrave; grande di &lambda;<sub>i</sub>.",
    "sol": "&Egrave; l&rsquo;indice di &lambda;: il minimo k con rk((A&minus;&lambda;I)<sup>k</sup>)=rk((A&minus;&lambda;I)<sup>k+1</sup>). Coincide con l&rsquo;esponente di (x&minus;&lambda;) nel polinomio minimo."
   }
  ]
 },
 {
  "pool": "jordan",
  "src": "tipo 10 · forma di Jordan 2&times;2 (input non triangolare)",
  "steps": [
   {
    "t": "La matrice A=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">4</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">&minus;1</span><span class=\"mcell\">2</span></div></span> ha polinomio caratteristico (&lambda;&minus;3)&sup2;. Qual &egrave; la sua forma canonica di Jordan?",
    "opts": [
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">3</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">3</span></div></span>",
      "c": true
     },
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">3</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">3</span></div></span>"
     },
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">3</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">3</span></div></span>"
     },
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">4</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">2</span></div></span>"
     }
    ],
    "hint": "m.a.(3)=2. Calcola m.g.(3)=2&minus;rk(A&minus;3I). Se m.g.=1 c&rsquo;&egrave; un solo blocco 2&times;2.",
    "sol": "Per il criterio m.a.=m.g. e il teorema di Jordan: A&minus;3I=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">&minus;1</span><span class=\"mcell\">&minus;1</span></div></span> ha rango 1 &rArr; m.g.(3)=1&lt;2, un unico blocco J&#8322;(3)=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">3</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">3</span></div></span>. Non diagonalizzabile. La forma di Jordan si legge dalla struttura, non dalla matrice di partenza."
   }
  ]
 },
 {
  "pool": "jordan",
  "src": "tipo 10 · autovalore triplo, m.g.=2 (blocchi 2+1)",
  "steps": [
   {
    "t": "Un endomorfismo di &#8477;&sup3; ha un solo autovalore &lambda;=2 con m.a.=3 e rk(A&minus;2I)=1. Qual &egrave; la forma di Jordan?",
    "opts": [
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">2</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">2</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">2</span></div></span>",
      "c": true
     },
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">2</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">2</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">2</span></div></span>"
     },
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">2</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">2</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">2</span></div></span>"
     },
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">2</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">2</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">&minus;2</span></div></span>"
     }
    ],
    "hint": "m.g.(2)=3&minus;rk(A&minus;2I)=3&minus;1=2 &rArr; DUE blocchi. Con m.a.=3 e 2 blocchi, le taglie sono 2+1.",
    "sol": "Due blocchi (m.g.=2) di taglie 2 e 1: J=J&#8322;(2)&oplus;J&#8321;(2)=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">2</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">2</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">2</span></div></span>. Il blocco 2&times;2 rende A non diagonalizzabile."
   }
  ]
 },
 {
  "pool": "jordan",
  "src": "prova20240207 · stesso p.c. non basta (trabocchetto b)",
  "steps": [
   {
    "t": "<span class=\"lbl\">L1</span> Due matrici A,B 4&times;4 hanno entrambe p.c.=(&lambda;&minus;2)&#8308; e m.g.(2)=2 (cio&egrave; rk(A&minus;2I)=rk(B&minus;2I)=2). Basta il polinomio caratteristico per dire se sono simili?",
    "opts": [
     {
      "x": "No: stesso p.c. e stessa m.g. non bastano, serve rk((A&minus;2I)&sup2;)",
      "c": true
     },
     {
      "x": "S&igrave;: stesso p.c. &rArr; simili"
     },
     {
      "x": "S&igrave;: stessa m.g. &rArr; simili"
     },
     {
      "x": "No: servono gli autovettori espliciti"
     }
    ],
    "hint": "Con m.a.=4 e m.g.=2 le partizioni possibili sono 2+2 e 3+1: stesso numero di blocchi, ma taglie diverse. Le distingue rk((A&minus;2I)&sup2;).",
    "sol": "No. Blocchi 2+2 e 3+1 hanno entrambi m.g.=2 e p.c.=(&lambda;&minus;2)&#8308;, ma sono strutture diverse (non simili). Serve la catena dei ranghi. Fonte: prova20240207.",
    "cont": "Continua &rarr; usa rk((A&minus;2I)&sup2;)"
   },
   {
    "t": "<span class=\"lbl\">L2</span> Se rk((A&minus;2I)&sup2;)=0 e rk((B&minus;2I)&sup2;)=1, quali sono le forme di Jordan di A e B?",
    "opts": [
     {
      "x": "A: 2+2 (due J&#8322;); B: 3+1 (un J&#8323; e un J&#8321;)",
      "c": true
     },
     {
      "x": "A: 3+1; B: 2+2"
     },
     {
      "x": "entrambe 2+2"
     },
     {
      "x": "entrambe un solo blocco J&#8324;"
     }
    ],
    "hint": "rk((A&minus;2I)&sup2;)=0 significa (A&minus;2I)&sup2;=0: nessun blocco di taglia &gt;2. rk=1 richiede un blocco di taglia 3.",
    "sol": "A: (A&minus;2I)&sup2;=0 &rArr; blocco massimo di taglia 2, con m.g.=2 &rArr; 2+2, J=J&#8322;(2)&oplus;J&#8322;(2). B: rk((B&minus;2I)&sup2;)=1 &rArr; c&rsquo;&egrave; un blocco di taglia 3 &rArr; 3+1, J=J&#8323;(2)&oplus;J&#8321;(2). Il p.c. da solo non le separa: decide la catena dei ranghi."
   }
  ]
 },
 {
  "pool": "jordan",
  "src": "tipo 10 · triangolarizzabile &ne; diagonalizzabile (trabocchetto a)",
  "steps": [
   {
    "t": "&Egrave; vero che ogni matrice complessa &egrave; diagonalizzabile, dato che su &#8450; &egrave; sempre triangolarizzabile?",
    "opts": [
     {
      "x": "No: triangolarizzabile su &#8450; sempre, diagonalizzabile solo se m.g.=m.a. per ogni &lambda;",
      "c": true
     },
     {
      "x": "S&igrave;: su &#8450; le due propriet&agrave; coincidono"
     },
     {
      "x": "S&igrave;: ogni matrice complessa &egrave; diagonalizzabile"
     },
     {
      "x": "No: nemmeno la triangolarizzabilit&agrave; &egrave; garantita su &#8450;"
     }
    ],
    "hint": "J&#8322;(0)=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div></span> &egrave; gi&agrave; triangolare (quindi triangolarizzabile) ma non diagonalizzabile. Le due nozioni non coincidono.",
    "sol": "No. Su &#8450; ogni matrice &egrave; triangolarizzabile (il p.c. si spezza sempre), ma la diagonalizzabilit&agrave; richiede m.g.=m.a. per ogni autovalore. Un blocco di Jordan non banale &egrave; triangolare e non diagonalizzabile."
   }
  ]
 },
 {
  "pool": "jordan",
  "src": "tipo 10 · triangolarizzabile su &#8450; sempre, su &#8477; no",
  "steps": [
   {
    "t": "La matrice A=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">&minus;1</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div></span> (autovalori &plusmn;i) &egrave; triangolarizzabile su &#8477;? E su &#8450;?",
    "opts": [
     {
      "x": "Su &#8450; s&igrave; (sempre), su &#8477; no (autovalori non reali)",
      "c": true
     },
     {
      "x": "S&igrave; su entrambi"
     },
     {
      "x": "No su entrambi"
     },
     {
      "x": "Su &#8477; s&igrave;, su &#8450; no"
     }
    ],
    "hint": "Triangolarizzabile su un campo &hArr; il p.c. si spezza in fattori lineari su quel campo. &lambda;&sup2;+1 si spezza su &#8450; ma non su &#8477;.",
    "sol": "p(&lambda;)=&lambda;&sup2;+1: nessuna radice reale &rArr; non triangolarizzabile su &#8477;. Su &#8450; le radici &plusmn;i sono distinte &rArr; addirittura diagonalizzabile, dunque a maggior ragione triangolarizzabile."
   }
  ]
 },
 {
  "pool": "jordan",
  "src": "tipo 10 · criterio di triangolarizzabilit&agrave; su &#8477;",
  "steps": [
   {
    "t": "Una matrice reale &egrave; triangolarizzabile su &#8477; se e solo se:",
    "opts": [
     {
      "x": "il suo polinomio caratteristico ha tutte le radici reali",
      "c": true
     },
     {
      "x": "ha determinante non nullo"
     },
     {
      "x": "&egrave; simmetrica"
     },
     {
      "x": "ha n autovalori distinti"
     }
    ],
    "hint": "Triangolarizzare = trovare una base in cui la matrice &egrave; triangolare, con gli autovalori sulla diagonale: servono tutti reali.",
    "sol": "&hArr; il p.c. si fattorizza in fattori lineari su &#8477;, cio&egrave; autovalori tutti reali (con molteplicit&agrave;). La simmetria &egrave; sufficiente (spettro reale) ma non necessaria; autovalori distinti &egrave; ancora pi&ugrave; forte (d&agrave; la diagonalizzabilit&agrave;)."
   }
  ]
 },
 {
  "pool": "jordan",
  "src": "ex_Fis8 / Esonero23_1_14 · base di triangolarizzazione non ortogonale (trabocchetto c)",
  "steps": [
   {
    "t": "Per triangolarizzare una matrice non diagonalizzabile costruisci una base che la porta in forma triangolare. Va resa ortonormale con Gram&ndash;Schmidt?",
    "opts": [
     {
      "x": "No: la base di triangolarizzazione (di Jordan) NON &egrave; in generale ortogonale",
      "c": true
     },
     {
      "x": "S&igrave;, sempre, come nel teorema spettrale"
     },
     {
      "x": "S&igrave;, altrimenti la matrice non risulta triangolare"
     },
     {
      "x": "No, ma va comunque normalizzata"
     }
    ],
    "hint": "Gram&ndash;Schmidt serve per basi ORTONORMALI (teorema spettrale, matrici simmetriche). La base di Jordan risolve (A&minus;&lambda;I)v<sub>k</sub>=v<sub>k&minus;1</sub>: non c&rsquo;&egrave; ortogonalit&agrave; da imporre.",
    "sol": "No. La base &egrave; fatta di autovettori e autovettori generalizzati (catene (A&minus;&lambda;I)v<sub>k</sub>=v<sub>k&minus;1</sub>): non &egrave; ortogonale n&eacute; va ortonormalizzata. Applicare GS l&igrave; &egrave; l&rsquo;errore tipico. Fonti: ex_Fis8, Esonero23_1_14."
   }
  ]
 },
 {
  "pool": "jordan",
  "src": "tipo 10 · (I+N)&#8315;&sup1;=I&minus;N per N nilpotente",
  "steps": [
   {
    "t": "Sia N=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div></span> (nilpotente, N&sup2;=0). Quanto vale (I+N)<sup>&minus;1</sup>?",
    "opts": [
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">&minus;1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div></span>",
      "c": true
     },
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div></span>"
     },
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">&minus;1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">&minus;1</span></div></span>"
     },
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div></span>"
     }
    ],
    "hint": "Serie geometrica finita: (I+N)<sup>&minus;1</sup>=I&minus;N+N&sup2;&minus;&hellip; Qui N&sup2;=0, quindi si arresta subito.",
    "sol": "Per la serie di Neumann (I+N)<sup>&minus;1</sup>=&sum;(&minus;N)<sup>k</sup>, che per N nilpotente (N&sup2;=0) si arresta: (I+N)<sup>&minus;1</sup>=I&minus;N=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">&minus;1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div></span>. Verifica: (I+N)(I&minus;N)=I&minus;N&sup2;=I."
   }
  ]
 },
 {
  "pool": "jordan",
  "src": "tipo 10 · potenza di un blocco di Jordan (A^n via Jordan)",
  "steps": [
   {
    "t": "Per il blocco di Jordan J=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">2</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">2</span></div></span>, qual &egrave; J<sup>n</sup>?",
    "opts": [
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">2<sup>n</sup></span><span class=\"mcell\">n&#8202;2<sup>n&minus;1</sup></span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">2<sup>n</sup></span></div></span>",
      "c": true
     },
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">2<sup>n</sup></span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">2<sup>n</sup></span></div></span>"
     },
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">2<sup>n</sup></span><span class=\"mcell\">n</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">2<sup>n</sup></span></div></span>"
     },
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">2<sup>n</sup></span><span class=\"mcell\">2<sup>n</sup></span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">2<sup>n</sup></span></div></span>"
     }
    ],
    "hint": "Scrivi J=2I+N con N=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div></span>, N&sup2;=0. Binomio di Newton: (2I+N)<sup>n</sup>=2<sup>n</sup>I+n&#8202;2<sup>n&minus;1</sup>N.",
    "sol": "J=2I+N, N&sup2;=0 &rArr; J<sup>n</sup>=2<sup>n</sup>I+n&#8202;2<sup>n&minus;1</sup>N=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">2<sup>n</sup></span><span class=\"mcell\">n&#8202;2<sup>n&minus;1</sup></span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">2<sup>n</sup></span></div></span>. Solo i primi due termini del binomio sopravvivono. Per A generica: A<sup>n</sup>=S&#8202;J<sup>n</sup>&#8202;S<sup>&minus;1</sup>."
   }
  ]
 },
 {
  "pool": "jordan",
  "src": "tipo 10 · indice di nilpotenza = taglia del blocco",
  "steps": [
   {
    "t": "Per N=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div></span>, qual &egrave; il minimo k con N<sup>k</sup>=0?",
    "opts": [
     {
      "x": "3",
      "c": true
     },
     {
      "x": "2"
     },
     {
      "x": "1"
     },
     {
      "x": "4"
     }
    ],
    "hint": "Calcola N&sup2; e N&sup3;: ogni potenza sposta la diagonale di 1 verso l&rsquo;alto a destra.",
    "sol": "N&sup2;=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div></span>&ne;0, N&sup3;=0. L&rsquo;indice di nilpotenza &egrave; 3 = taglia del blocco. In generale l&rsquo;indice di J<sub>m</sub>(0) &egrave; m."
   }
  ]
 },
 {
  "pool": "jordan",
  "src": "tipo 10 · diagonalizzabilit&agrave; dal polinomio minimo",
  "steps": [
   {
    "t": "Una matrice &egrave; diagonalizzabile se e solo se il suo polinomio MINIMO:",
    "opts": [
     {
      "x": "ha tutte radici semplici (fattori lineari distinti)",
      "c": true
     },
     {
      "x": "coincide col polinomio caratteristico"
     },
     {
      "x": "ha grado n"
     },
     {
      "x": "ha almeno una radice doppia"
     }
    ],
    "hint": "Il minimo &egrave; &prod;(x&minus;&lambda;<sub>i</sub>)<sup>d<sub>i</sub></sup> con d<sub>i</sub> = taglia del blocco pi&ugrave; grande. Diagonalizzabile &hArr; tutti i blocchi hanno taglia 1 &hArr; d<sub>i</sub>=1.",
    "sol": "Diagonalizzabile &hArr; tutti d<sub>i</sub>=1 &hArr; polinomio minimo &prod;(x&minus;&lambda;<sub>i</sub>) con radici semplici. Il caratteristico ha sempre grado n e non discrimina."
   }
  ]
 },
 {
  "pool": "jordan",
  "src": "tipo 10 · struttura dei blocchi dal rango (L1+L2)",
  "steps": [
   {
    "t": "<span class=\"lbl\">L1</span> Sia A=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">2</span><span class=\"mcell\">1</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">2</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">2</span></div></span>. Quanto vale rk(A&minus;2I)?",
    "opts": [
     {
      "x": "2",
      "c": true
     },
     {
      "x": "1"
     },
     {
      "x": "3"
     },
     {
      "x": "0"
     }
    ],
    "hint": "A&minus;2I=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div></span>: conta le righe non nulle indipendenti.",
    "sol": "rk(A&minus;2I)=2: due righe non nulle indipendenti, la terza &egrave; nulla.",
    "cont": "Continua &rarr; deduci la struttura dei blocchi"
   },
   {
    "t": "<span class=\"lbl\">L2</span> Con &lambda;=2 di m.a.=3 e rk(A&minus;2I)=2, quanti blocchi di Jordan ha A e di che taglia?",
    "opts": [
     {
      "x": "Un solo blocco J&#8323;(2) (m.g.=1)",
      "c": true
     },
     {
      "x": "Due blocchi (2+1)"
     },
     {
      "x": "Tre blocchi (diagonalizzabile)"
     },
     {
      "x": "Un blocco 2&times;2 e uno 1&times;1"
     }
    ],
    "hint": "m.g.(2)=3&minus;rk(A&minus;2I)=3&minus;2=1 &rArr; un solo blocco; con m.a.=3 la sua taglia &egrave; 3.",
    "sol": "m.g.(2)=1 &rArr; un solo blocco, di taglia 3: J&#8323;(2). Massimamente non diagonalizzabile. La catena dei ranghi (qui basta il primo) ricostruisce la struttura."
   }
  ]
 },
 {
  "pool": "jordan",
  "src": "tipo 10 · numero di blocchi di taglia &ge; k",
  "steps": [
   {
    "t": "Il numero di blocchi di Jordan di &lambda; di taglia &ge; k &egrave; dato da:",
    "opts": [
     {
      "x": "rk((A&minus;&lambda;I)<sup>k&minus;1</sup>) &minus; rk((A&minus;&lambda;I)<sup>k</sup>)",
      "c": true
     },
     {
      "x": "rk((A&minus;&lambda;I)<sup>k</sup>)"
     },
     {
      "x": "n &minus; rk((A&minus;&lambda;I)<sup>k</sup>)"
     },
     {
      "x": "sempre m.g.(&lambda;)"
     }
    ],
    "hint": "Le differenze successive dei ranghi delle potenze di (A&minus;&lambda;I) contano i blocchi per taglia. Per k=1 riottieni m.g.=n&minus;rk(A&minus;&lambda;I).",
    "sol": "#{blocchi di taglia &ge;k} = rk((A&minus;&lambda;I)<sup>k&minus;1</sup>)&minus;rk((A&minus;&lambda;I)<sup>k</sup>), con (A&minus;&lambda;I)<sup>0</sup>=I. La catena dei ranghi determina completamente le taglie dei blocchi."
   }
  ]
 },
 {
  "pool": "jordan",
  "src": "tipo 10 · p. caratteristico e minimo dalla forma di Jordan",
  "steps": [
   {
    "t": "La forma di Jordan J=J&#8322;(3)&oplus;J&#8321;(3)&oplus;J&#8321;(5) ha quali polinomi caratteristico e minimo?",
    "opts": [
     {
      "x": "p.c.=(&lambda;&minus;3)&sup3;(&lambda;&minus;5), p.min=(&lambda;&minus;3)&sup2;(&lambda;&minus;5)",
      "c": true
     },
     {
      "x": "p.c.=p.min=(&lambda;&minus;3)&sup2;(&lambda;&minus;5)"
     },
     {
      "x": "p.c.=p.min=(&lambda;&minus;3)&sup3;(&lambda;&minus;5)"
     },
     {
      "x": "p.c.=(&lambda;&minus;3)&sup2;(&lambda;&minus;5)&sup2;"
     }
    ],
    "hint": "Il caratteristico usa le m.a. (somma delle taglie). Il minimo usa, per ogni &lambda;, la taglia del blocco PI&Ugrave; GRANDE.",
    "sol": "m.a.(3)=2+1=3, m.a.(5)=1 &rArr; p.c.=(&lambda;&minus;3)&sup3;(&lambda;&minus;5). Blocco massimo di 3 &egrave; 2, di 5 &egrave; 1 &rArr; p.min=(&lambda;&minus;3)&sup2;(&lambda;&minus;5). p.c.&ne;p.min &rArr; non diagonalizzabile."
   }
  ]
 },
 {
  "pool": "jordan",
  "src": "tipo 10 · catena di autovettori generalizzati",
  "steps": [
   {
    "t": "In una base di Jordan si ha la catena v&#8321;,v&#8322; con (A&minus;&lambda;I)v&#8322;=v&#8321; e (A&minus;&lambda;I)v&#8321;=0. Cosa sono v&#8321; e v&#8322;?",
    "opts": [
     {
      "x": "v&#8321; autovettore, v&#8322; autovettore generalizzato di rango 2",
      "c": true
     },
     {
      "x": "entrambi autovettori"
     },
     {
      "x": "entrambi autovettori generalizzati di rango 2"
     },
     {
      "x": "v&#8321; generalizzato, v&#8322; autovettore"
     }
    ],
    "hint": "(A&minus;&lambda;I)v&#8321;=0 dice che v&#8321; &egrave; un autovettore. v&#8322; sta un livello sopra: (A&minus;&lambda;I)&sup2;v&#8322;=0 ma (A&minus;&lambda;I)v&#8322;&ne;0.",
    "sol": "v&#8321; &egrave; l&rsquo;autovettore (in ker(A&minus;&lambda;I)); v&#8322; &egrave; autovettore generalizzato di rango 2 (in ker((A&minus;&lambda;I)&sup2;) ma non in ker(A&minus;&lambda;I)). Su questa base A agisce come il blocco <span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">&lambda;</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">&lambda;</span></div></span>."
   }
  ]
 },
 {
  "pool": "jordan",
  "src": "Compito_23_02_16 Es. 5 · invertibilit&agrave; di kI+C",
  "steps": [
   {
    "t": "Sia C&isin;M&#8322;(&#8477;) diagonalizzabile con autovalori 1 e &minus;2. Per quali k&isin;&#8477; la matrice kI+C &egrave; invertibile?",
    "opts": [
     {
      "x": "k&ne;&minus;1 e k&ne;2",
      "c": true
     },
     {
      "x": "k&ne;1 e k&ne;&minus;2"
     },
     {
      "x": "ogni k"
     },
     {
      "x": "solo k=0"
     }
    ],
    "hint": "Gli autovalori di kI+C sono k+&lambda;<sub>i</sub>. Invertibile &hArr; nessun autovalore nullo, cio&egrave; k+&lambda;<sub>i</sub>&ne;0.",
    "sol": "<b>k&ne;&minus;1 e k&ne;2.</b> Per il teorema di mapping spettrale (gli autovalori di kI+C sono k+&lambda;): autovalori k+1 e k&minus;2, quindi det(kI+C)=(k+1)(k&minus;2), che si annulla per k=&minus;1 o k=2. Fuori da questi &egrave; invertibile: sommare kI trasla lo spettro di k."
   }
  ]
 },
 {
  "pool": "jordan",
  "src": "Prova 8_2_23sol Es. 5 · al pi&ugrave; un k per la similitudine",
  "steps": [
   {
    "t": "A(k) dipende linearmente da k e A&prime; &egrave; fissa. Perch&eacute; esiste AL PI&Ugrave; un valore di k per cui A(k) &egrave; simile ad A&prime;?",
    "opts": [
     {
      "x": "La similitudine impone tr&#8202;A(k)=tr&#8202;A&prime;, equazione lineare non banale in k",
      "c": true
     },
     {
      "x": "Perch&eacute; A(k) e A&prime; hanno sempre gli stessi autovalori"
     },
     {
      "x": "Perch&eacute; det&#8202;A(k) &egrave; costante"
     },
     {
      "x": "La similitudine non dipende da k"
     }
    ],
    "hint": "Matrici simili hanno la stessa traccia. Se tr&#8202;A(k) &egrave; un polinomio di grado 1 in k, l&rsquo;equazione tr&#8202;A(k)=tr&#8202;A&prime; ha al pi&ugrave; una soluzione.",
    "sol": "<b>La condizione tr&#8202;A(k)=tr&#8202;A&prime;.</b> La traccia &egrave; un invariante di similitudine; se tr&#8202;A(k) &egrave; affine e non costante in k, l&rsquo;uguaglianza fissa un unico k. Quel k va poi VERIFICATO (stessi autovalori e struttura di Jordan): la traccia &egrave; condizione necessaria, non ancora sufficiente."
   }
  ]
 },
 {
  "pool": "jordan",
  "src": "b03 straordinario-2018-nov-06 Es.3 · esponente del polinomio minimo",
  "steps": [
   {
    "t": "Il polinomio minimo di A &egrave; m(t)=(t&minus;3)&sup2;. Cosa dice sulla taglia dei blocchi di Jordan relativi a &lambda;=3?",
    "opts": [
     {
      "x": "Il blocco pi&ugrave; GRANDE ha taglia 2 (l&rsquo;esponente nel minimo)",
      "c": true
     },
     {
      "x": "Ci sono esattamente 2 blocchi"
     },
     {
      "x": "La molteplicit&agrave; algebrica di 3 &egrave; 2"
     },
     {
      "x": "A &egrave; diagonalizzabile"
     }
    ],
    "hint": "L&rsquo;esponente di (t&minus;&lambda;) nel polinomio minimo = taglia del blocco di Jordan PI&Ugrave; GRANDE relativo a &lambda;.",
    "sol": "<b>Il blocco pi&ugrave; grande di &lambda;=3 ha taglia 2.</b> Per il teorema sulla forma di Jordan, l&rsquo;esponente di (t&minus;&lambda;) nel polinomio minimo fissa la dimensione massima dei blocchi relativi a &lambda; &mdash; non il loro numero (che &egrave; la molteplicit&agrave; geometrica) n&eacute; la molteplicit&agrave; algebrica (grado nel caratteristico)."
   }
  ]
 },
 {
  "pool": "jordan",
  "src": "b02 Esonero22_01_16 Es.3 · triangolarizzabilit&agrave; su &#8477;",
  "steps": [
   {
    "t": "Un endomorfismo di &#8477;&sup3; ha polinomio caratteristico p(t)=&minus;t&sup3;+1, con un&rsquo;unica radice reale. &Egrave; triangolarizzabile su &#8477;?",
    "opts": [
     {
      "x": "No: il caratteristico non si fattorizza in fattori lineari su &#8477; (due radici complesse)",
      "c": true
     },
     {
      "x": "S&igrave;: ogni matrice reale lo &egrave;"
     },
     {
      "x": "No: perch&eacute; non &egrave; diagonalizzabile"
     },
     {
      "x": "S&igrave;: ha una radice reale"
     }
    ],
    "hint": "Triangolarizzabile su un campo &hArr; il polinomio caratteristico si spezza in fattori lineari SU QUEL campo. &minus;t&sup3;+1 ha 1 radice reale e 2 complesse coniugate.",
    "sol": "<b>No.</b> p(t)=&minus;(t&minus;1)(t&sup2;+t+1): su &#8477; il fattore t&sup2;+t+1 &egrave; irriducibile (radici complesse). Per il teorema di triangolarizzazione un operatore &egrave; triangolarizzabile su K &hArr; il caratteristico si spezza in fattori lineari su K: qui ci&ograve; accade su &#8450; ma non su &#8477;."
   }
  ]
 }
];

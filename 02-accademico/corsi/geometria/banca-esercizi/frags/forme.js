Q.forme = [
 {
  "pool": "forme",
  "src": "tipo 8 · matrice da forma quadratica (dimezzare il misto)",
  "steps": [
   {
    "t": "La forma quadratica q(x)=x&#8321;&sup2;+4x&#8321;x&#8322;+x&#8322;&sup2; su &#8477;&sup2; ha, rispetto alla base canonica, matrice simmetrica associata:",
    "opts": [
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">2</span></div><div class=\"mrow\"><span class=\"mcell\">2</span><span class=\"mcell\">1</span></div></span>",
      "c": true
     },
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">4</span></div><div class=\"mrow\"><span class=\"mcell\">4</span><span class=\"mcell\">1</span></div></span>"
     },
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">2</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div></span>"
     },
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span></div></span>"
     }
    ],
    "hint": "Il termine misto 4x&#8321;x&#8322; si ripartisce: a&#8321;&#8322;=a&#8322;&#8321;=&frac12;&middot;(coeff. di x&#8321;x&#8322;)=2. Sulla diagonale vanno i coefficienti dei quadrati.",
    "sol": "A=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">2</span></div><div class=\"mrow\"><span class=\"mcell\">2</span><span class=\"mcell\">1</span></div></span>. Per la definizione di matrice simmetrica associata a una forma quadratica (a<sub>ii</sub>=coeff. del quadrato, a<sub>ij</sub>=met&agrave; del coeff. del misto): diagonale = coefficienti di x&#8321;&sup2; e x&#8322;&sup2;, fuori diagonale = met&agrave; del termine misto. Mettere 4 (dimenticare di dimezzare) &egrave; l&rsquo;errore classico."
   }
  ]
 },
 {
  "pool": "forme",
  "src": "tipo 8 · matrice di g rispetto a base non canonica",
  "steps": [
   {
    "t": "Sia g il prodotto scalare su &#8477;&sup2; con g(x,y)=x&#8321;y&#8321;+2x&#8322;y&#8322;. Rispetto alla base B=(b&#8321;,b&#8322;) con b&#8321;=(1,0), b&#8322;=(1,1), la matrice di g &egrave;:",
    "opts": [
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">3</span></div></span>",
      "c": true
     },
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">2</span></div></span>"
     },
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span></div></span>"
     },
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">2</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">3</span></div></span>"
     }
    ],
    "hint": "L&rsquo;entrata (i,j) &egrave; g(b<sub>i</sub>,b<sub>j</sub>), non g(e<sub>i</sub>,e<sub>j</sub>). Calcola g(b&#8321;,b&#8321;), g(b&#8321;,b&#8322;), g(b&#8322;,b&#8322;).",
    "sol": "g(b&#8321;,b&#8321;)=1, g(b&#8321;,b&#8322;)=1&middot;1+2&middot;0&middot;1=1, g(b&#8322;,b&#8322;)=1+2=3, quindi A<sub>B</sub>=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">3</span></div></span>. Cambiando base cambia la matrice della forma: A<sub>B</sub>=P<sup>T</sup>A<sub>can</sub>P con P che ha per colonne i b<sub>i</sub>."
   }
  ]
 },
 {
  "pool": "forme",
  "src": "tipo 8 · completamento dei quadrati &rarr; segnatura",
  "steps": [
   {
    "t": "Completando i quadrati, la forma q(x)=x&#8321;&sup2;+4x&#8321;x&#8322;+x&#8322;&sup2; si riduce a somma di quadrati con segni. Qual &egrave; la sua segnatura (p,q,r)?",
    "opts": [
     {
      "x": "(1,1,0)",
      "c": true
     },
     {
      "x": "(2,0,0)"
     },
     {
      "x": "(0,2,0)"
     },
     {
      "x": "(1,0,1)"
     }
    ],
    "hint": "x&#8321;&sup2;+4x&#8321;x&#8322;+x&#8322;&sup2;=(x&#8321;+2x&#8322;)&sup2;&minus;3x&#8322;&sup2;. Un quadrato con segno + e uno con segno &minus;.",
    "sol": "Per il metodo di Lagrange (completamento dei quadrati): q=(x&#8321;+2x&#8322;)&sup2;&minus;3x&#8322;&sup2;, un coefficiente positivo, uno negativo, nessuno nullo. Segnatura (p,q,r)=(1,1,0): indefinita e non degenere."
   }
  ]
 },
 {
  "pool": "forme",
  "src": "tipo 8 · criterio di Sylvester (minori di testa)",
  "steps": [
   {
    "t": "Con il criterio di Sylvester (minori principali di testa), determina la segnatura di A=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">2</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">2</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">&minus;1</span></div></span>.",
    "opts": [
     {
      "x": "(2,1,0)",
      "c": true
     },
     {
      "x": "(3,0,0)"
     },
     {
      "x": "(2,0,1)"
     },
     {
      "x": "(1,2,0)"
     }
    ],
    "hint": "Minori di testa: D&#8321;=2, D&#8322;=3, D&#8323;=det&#8202;A=&minus;3. Conta permanenze (&rarr; p) e variazioni di segno (&rarr; q) nella successione 1, D&#8321;, D&#8322;, D&#8323;.",
    "sol": "D&#8321;=2&gt;0, D&#8322;=4&minus;1=3&gt;0, D&#8323;=3&middot;(&minus;1)=&minus;3&lt;0. Successione di segni +,+,+,&minus;: due permanenze e una variazione &rArr; p=2, q=1, r=0, segnatura (2,1,0). La regola vale perch&eacute; tutti i minori di testa sono non nulli."
   }
  ]
 },
 {
  "pool": "forme",
  "src": "tipo 8 · trovare un vettore isotropo",
  "steps": [
   {
    "t": "Per la forma q(x)=x&#8321;&sup2;&minus;x&#8322;&sup2; su &#8477;&sup2;, quale dei seguenti &egrave; un vettore isotropo non nullo (q(x)=0)?",
    "opts": [
     {
      "x": "(1,1)",
      "c": true
     },
     {
      "x": "(1,0)"
     },
     {
      "x": "(0,1)"
     },
     {
      "x": "(2,1)"
     }
    ],
    "hint": "Un vettore &egrave; isotropo se q(x)=0. Imposta x&#8321;&sup2;&minus;x&#8322;&sup2;=0, cio&egrave; x&#8321;=&plusmn;x&#8322;.",
    "sol": "Per la definizione di vettore isotropo (q(x)=0 con x&ne;0): q(1,1)=1&minus;1=0, isotropo. I vettori isotropi formano le rette x&#8321;=&plusmn;x&#8322;. Nota che (1,0) d&agrave; q=1&ne;0. Una forma indefinita non degenere ha sempre vettori isotropi non nulli."
   }
  ]
 },
 {
  "pool": "forme",
  "src": "soluzioniesame20200204 Es. 5 (matrice &rarr; isotropo immediato)",
  "steps": [
   {
    "t": "<span class=\"lbl\">L1</span> Scrivi la matrice simmetrica su &#8477;&#8308; della forma g(x)=3x&#8321;&sup2;+x&#8322;&sup2;+x&#8323;&sup2;+2x&#8321;x&#8324;.",
    "opts": [
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">3</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div></span>",
      "c": true
     },
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">3</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">2</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">2</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div></span>"
     },
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">3</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div></span>"
     },
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">3</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div></span>"
     }
    ],
    "hint": "Diagonale: coefficienti di x&#8321;&sup2;,x&#8322;&sup2;,x&#8323;&sup2;,x&#8324;&sup2; = 3,1,1,<b>0</b> (il termine x&#8324;&sup2; non compare). Il termine 2x&#8321;x&#8324; d&agrave; a&#8321;&#8324;=a&#8324;&#8321;=1.",
    "sol": "A=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">3</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div></span>. Manca x&#8324;&sup2; &rArr; a&#8324;&#8324;=0; il misto 2x&#8321;x&#8324; d&agrave; a&#8321;&#8324;=a&#8324;&#8321;=1 (met&agrave; del coefficiente).",
    "cont": "Continua &rarr; definita positiva? vettore isotropo?"
   },
   {
    "t": "<span class=\"lbl\">L2</span> La stessa g &egrave; definita positiva? E c&rsquo;&egrave; un vettore isotropo evidente?",
    "opts": [
     {
      "x": "No: manca x&#8324;&sup2;, e (0,0,0,1) d&agrave; g=0",
      "c": true
     },
     {
      "x": "S&igrave;: i coefficienti dei quadrati presenti sono positivi"
     },
     {
      "x": "No, ma non esistono vettori isotropi"
     },
     {
      "x": "S&igrave;, dopo aver completato i quadrati"
     }
    ],
    "hint": "Def. positiva richiede g(x,x)&gt;0 per OGNI x&ne;0. Prova x=e&#8324;=(0,0,0,1): quanto vale g(e&#8324;,e&#8324;)=a&#8324;&#8324;?",
    "sol": "No. g(e&#8324;,e&#8324;)=a&#8324;&#8324;=0 con e&#8324;=(0,0,0,1)&ne;0: subito un vettore isotropo, senza calcoli pesanti &rArr; g non &egrave; definita positiva. Il blocco <span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">3</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div></span> su x&#8321;,x&#8324; ha det=&minus;1 &rArr; contributo (1,1); con x&#8322;&sup2;,x&#8323;&sup2; la segnatura totale &egrave; (3,1,0). Fonte: soluzioniesame20200204 Es. 5."
   }
  ]
 },
 {
  "pool": "forme",
  "src": "tipo 8 · isotropo &ne; radicale (trabocchetto a)",
  "steps": [
   {
    "t": "Per q=x&#8321;&sup2;&minus;x&#8322;&sup2; (non degenere) il vettore (1,1) &egrave; isotropo. Appartiene al nucleo (radicale) della forma, cio&egrave; g((1,1),y)=0 per ogni y?",
    "opts": [
     {
      "x": "No: isotropo (g(x,x)=0) &ne; nel radicale (g(x,&middot;)&equiv;0)",
      "c": true
     },
     {
      "x": "S&igrave;: g(x,x)=0 implica x nel radicale"
     },
     {
      "x": "S&igrave;, perch&eacute; la forma &egrave; indefinita"
     },
     {
      "x": "No, perch&eacute; (1,1) non &egrave; isotropo"
     }
    ],
    "hint": "Calcola g((1,1),y)=x&#8321;y&#8321;&minus;x&#8322;y&#8322; con x=(1,1): ottieni y&#8321;&minus;y&#8322;. Si annulla per OGNI y?",
    "sol": "No. g((1,1),y)=y&#8321;&minus;y&#8322;, non identicamente nullo (y=(1,0) d&agrave; 1). Quindi (1,1) &egrave; isotropo ma NON sta nel radicale. Isotropo = g(x,x)=0; radicale = g(x,y)=0 &forall;y. Ogni vettore del radicale &egrave; isotropo, non viceversa: per g non degenere il radicale &egrave; {0} mentre gli isotropi sono infiniti."
   }
  ]
 },
 {
  "pool": "forme",
  "src": "tipo 8 · radicale = ker della matrice",
  "steps": [
   {
    "t": "La forma q=(x&#8321;+x&#8322;)&sup2; ha matrice <span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span></div></span>. Qual &egrave; il radicale (nucleo della forma) e la sua dimensione?",
    "opts": [
     {
      "x": "Span((1,&minus;1)), dimensione 1",
      "c": true
     },
     {
      "x": "{0}, dimensione 0"
     },
     {
      "x": "tutto &#8477;&sup2;, dimensione 2"
     },
     {
      "x": "Span((1,1)), dimensione 1"
     }
    ],
    "hint": "Il radicale &egrave; ker della matrice A: risolvi A&#8202;x=0. La dimensione &egrave; n&minus;rk(A)=2&minus;1.",
    "sol": "Per la definizione di radicale (= ker della matrice della forma, dim = n &minus; rk): rk(A)=1 &rArr; dim radicale =2&minus;1=1. A(x&#8321;,x&#8322;)<sup>T</sup>=0 d&agrave; x&#8321;+x&#8322;=0, cio&egrave; Span((1,&minus;1)). Il radicale coincide con la parte r della segnatura, qui (1,0,1)."
   }
  ]
 },
 {
  "pool": "forme",
  "src": "tipo 8 · ordine dei passi in una forma parametrica (trabocchetto b)",
  "steps": [
   {
    "t": "Devi determinare la segnatura (p,q,r) di una forma parametrica g<sub>&alpha;</sub>. Qual &egrave; l&rsquo;ordine corretto dei passi?",
    "opts": [
     {
      "x": "Prima il rango (r=n&minus;rk) ai valori critici di &alpha;, poi p e q",
      "c": true
     },
     {
      "x": "Prima p e q via minori, il rango non serve"
     },
     {
      "x": "Prima gli autovettori, poi il segno dei quadrati"
     },
     {
      "x": "L&rsquo;ordine &egrave; indifferente"
     }
    ],
    "hint": "r (dimensione del radicale) dipende da rk(A<sub>&alpha;</sub>): ai valori di &alpha; che annullano det&#8202;A il rango cala e la segnatura cambia struttura. Individuali PRIMA.",
    "sol": "Prima il rango. I valori critici (det&#8202;A<sub>&alpha;</sub>=0) fanno cadere il rango e vanno trattati a parte: per ciascuno r=n&minus;rk cambia e p+q=rk. Calcolare p,q ignorando dove il rango scende produce segnature sbagliate proprio nei casi d&rsquo;esame."
   }
  ]
 },
 {
  "pool": "forme",
  "src": "tipo 8 · segnatura parametrica (diagonale)",
  "steps": [
   {
    "t": "Per quali &alpha;&isin;&#8477; la forma con matrice <span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">&alpha;</span></div></span> &egrave; definita positiva? E qual &egrave; la segnatura per &alpha;&lt;0?",
    "opts": [
     {
      "x": "&alpha;&gt;0 def. positiva; per &alpha;&lt;0 segnatura (2,1,0)",
      "c": true
     },
     {
      "x": "&alpha;&ge;0 def. positiva; per &alpha;&lt;0 segnatura (2,0,1)"
     },
     {
      "x": "&alpha;&gt;0 def. positiva; per &alpha;&lt;0 segnatura (1,2,0)"
     },
     {
      "x": "def. positiva per ogni &alpha;"
     }
    ],
    "hint": "Matrice gi&agrave; diagonale: la segnatura &egrave; data dai segni degli elementi diagonali. Def. positiva &hArr; tutti &gt;0. &alpha;=0 d&agrave; un autovalore nullo (degenere).",
    "sol": "Per il teorema spettrale la segnatura si legge dai segni degli autovalori 1,1,&alpha;. Def. positiva &hArr; &alpha;&gt;0. Con &alpha;=0 la forma &egrave; degenere, segnatura (2,0,1). Per &alpha;&lt;0: due segni + e uno &minus;, segnatura (2,1,0)."
   }
  ]
 },
 {
  "pool": "forme",
  "src": "geomefis24.1.22 · segnatura parametrica (misto)",
  "steps": [
   {
    "t": "<span class=\"lbl\">L1</span> Sia A<sub>&alpha;</sub>=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">&alpha;</span></div><div class=\"mrow\"><span class=\"mcell\">&alpha;</span><span class=\"mcell\">1</span></div></span>. Per quali &alpha; la forma &egrave; degenere (rk&lt;2)?",
    "opts": [
     {
      "x": "&alpha;=&plusmn;1",
      "c": true
     },
     {
      "x": "solo &alpha;=1"
     },
     {
      "x": "&alpha;=0"
     },
     {
      "x": "nessun &alpha;"
     }
    ],
    "hint": "Degenere &hArr; det&#8202;A<sub>&alpha;</sub>=0. Calcola det=1&minus;&alpha;&sup2;.",
    "sol": "det&#8202;A<sub>&alpha;</sub>=1&minus;&alpha;&sup2;=0 &hArr; &alpha;=&plusmn;1: sono i valori critici dove rk cala a 1 (r=1).",
    "cont": "Continua &rarr; segnatura nei tre regimi"
   },
   {
    "t": "<span class=\"lbl\">L2</span> Segnatura di A<sub>&alpha;</sub> nei tre regimi |&alpha;|&lt;1, &alpha;=&plusmn;1, |&alpha;|&gt;1?",
    "opts": [
     {
      "x": "|&alpha;|&lt;1: (2,0,0); &alpha;=&plusmn;1: (1,0,1); |&alpha;|&gt;1: (1,1,0)",
      "c": true
     },
     {
      "x": "|&alpha;|&lt;1: (2,0,0); &alpha;=&plusmn;1: (2,0,0); |&alpha;|&gt;1: (0,2,0)"
     },
     {
      "x": "sempre (2,0,0)"
     },
     {
      "x": "|&alpha;|&lt;1: (1,1,0); &alpha;=&plusmn;1: (1,0,1); |&alpha;|&gt;1: (2,0,0)"
     }
    ],
    "hint": "Minori di testa: D&#8321;=1&gt;0 sempre; D&#8322;=1&minus;&alpha;&sup2;. D&#8322;&gt;0 def. pos; D&#8322;=0 degenere (rk 1, r=1); D&#8322;&lt;0 indefinita. Oppure autovalori 1&plusmn;&alpha;.",
    "sol": "Per il teorema spettrale (segni degli autovalori) o il criterio di Sylvester: autovalori 1+&alpha; e 1&minus;&alpha;. |&alpha;|&lt;1: entrambi &gt;0 &rArr; (2,0,0) def. positiva. &alpha;=&plusmn;1: uno si annulla &rArr; (1,0,1). |&alpha;|&gt;1: segni opposti &rArr; (1,1,0) indefinita. Aver trovato prima i valori critici &plusmn;1 rende immediata la discussione."
   }
  ]
 },
 {
  "pool": "forme",
  "src": "tipo 8 · indice di Witt (forma indefinita)",
  "steps": [
   {
    "t": "Una forma non degenere su &#8477;&sup3; ha segnatura (2,1). Qual &egrave; il suo indice di Witt, cio&egrave; la dimensione del massimo sottospazio totalmente isotropo?",
    "opts": [
     {
      "x": "1",
      "c": true
     },
     {
      "x": "2"
     },
     {
      "x": "3"
     },
     {
      "x": "0"
     }
    ],
    "hint": "Per una forma non degenere di segnatura (p,q), l&rsquo;indice di Witt &egrave; min(p,q).",
    "sol": "1 = min(2,1). Il massimo sottospazio su cui g &egrave; identicamente nulla ha dimensione min(p,q): con segnatura (2,1) esiste una retta totalmente isotropa, ma non un piano."
   }
  ]
 },
 {
  "pool": "forme",
  "src": "tipo 8 · indice di Witt (definita positiva)",
  "steps": [
   {
    "t": "Una forma definita positiva su &#8477;&#8319; (segnatura (n,0)) ha indice di Witt pari a:",
    "opts": [
     {
      "x": "0: l&rsquo;unico vettore isotropo &egrave; 0",
      "c": true
     },
     {
      "x": "n"
     },
     {
      "x": "1"
     },
     {
      "x": "n&minus;1"
     }
    ],
    "hint": "min(p,q)=min(n,0)=0. Def. positiva &rArr; g(x,x)&gt;0 per x&ne;0: nessun isotropo non nullo.",
    "sol": "0. min(n,0)=0: non esistono vettori isotropi non nulli, quindi nessun sottospazio totalmente isotropo di dimensione &ge;1. Presenza di isotropi non banali &hArr; forma indefinita o degenere."
   }
  ]
 },
 {
  "pool": "forme",
  "src": "tipo 8 · invariante di congruenza vs similitudine",
  "steps": [
   {
    "t": "Sotto congruenza A &#8614; P<sup>T</sup>AP (P invertibile), quale grandezza si conserva SEMPRE, a differenza di quanto accade con la similitudine P<sup>&minus;1</sup>AP?",
    "opts": [
     {
      "x": "La segnatura (p,q,r)",
      "c": true
     },
     {
      "x": "Gli autovalori"
     },
     {
      "x": "Il determinante"
     },
     {
      "x": "La traccia"
     }
    ],
    "hint": "Teorema di inerzia di Sylvester: due matrici simmetriche congruenti hanno la stessa segnatura. Gli autovalori invece cambiano, perch&eacute; P<sup>T</sup>AP&ne;P<sup>&minus;1</sup>AP in generale.",
    "sol": "La segnatura, per la legge di inerzia di Sylvester. La congruenza P<sup>T</sup>AP &egrave; un cambio di base per la FORMA: conserva p,q,r ma non gli autovalori (n&eacute; det, che diventa (det&#8202;P)&sup2;&middot;det&#8202;A, di cui resta invariato solo il segno). La similitudine P<sup>&minus;1</sup>AP conserva gli autovalori. Le due operazioni coincidono solo se P &egrave; ortogonale."
   }
  ]
 },
 {
  "pool": "forme",
  "src": "tipo 8 · congruenti ma non simili (trabocchetto Sylvester)",
  "steps": [
   {
    "t": "Le matrici diag(1,1,&minus;1) e diag(2,3,&minus;5) sono congruenti? E simili?",
    "opts": [
     {
      "x": "Congruenti (stessa segnatura (2,1)), ma NON simili (autovalori diversi)",
      "c": true
     },
     {
      "x": "Simili e congruenti"
     },
     {
      "x": "Simili ma non congruenti"
     },
     {
      "x": "N&eacute; simili n&eacute; congruenti"
     }
    ],
    "hint": "Congruenza &hArr; stessa segnatura (Sylvester); similitudine &hArr; stessi autovalori. Verifica i due criteri separatamente.",
    "sol": "Per la legge di inerzia di Sylvester (due simmetriche sono congruenti &hArr; stessa segnatura): entrambe hanno segnatura (2,1,0) &rArr; congruenti, esiste P con P<sup>T</sup>&#8202;diag(1,1,&minus;1)&#8202;P=diag(2,3,&minus;5). Ma gli autovalori {1,1,&minus;1} e {2,3,&minus;5} sono diversi &rArr; NON simili. Congruente non implica simile."
   }
  ]
 },
 {
  "pool": "forme",
  "src": "tipo 8 · segnatura dagli autovalori (matrice simmetrica)",
  "steps": [
   {
    "t": "Una matrice simmetrica reale ha autovalori 3, 0, &minus;2. Qual &egrave; la segnatura della forma associata?",
    "opts": [
     {
      "x": "(1,1,1)",
      "c": true
     },
     {
      "x": "(2,1,0)"
     },
     {
      "x": "(1,2,0)"
     },
     {
      "x": "(3,0,0)"
     }
    ],
    "hint": "Per una simmetrica reale la segnatura si legge dai segni degli autovalori: p = n. positivi, q = n. negativi, r = n. nulli.",
    "sol": "Autovalori 3(&gt;0), 0, &minus;2(&lt;0) &rArr; p=1, q=1, r=1: segnatura (1,1,1). Degenere (un autovalore nullo) e indefinita. Il teorema spettrale garantisce che i segni degli autovalori sono un invariante di congruenza."
   }
  ]
 },
 {
  "pool": "forme",
  "src": "tipo 8 · forma senza quadrati puri (trabocchetto)",
  "steps": [
   {
    "t": "La forma q=2x&#8321;x&#8322; su &#8477;&sup2; (nessun quadrato puro) &egrave; degenere? Qual &egrave; la sua segnatura?",
    "opts": [
     {
      "x": "Non degenere, segnatura (1,1,0)",
      "c": true
     },
     {
      "x": "Degenere, segnatura (0,0,2)"
     },
     {
      "x": "Definita positiva, (2,0,0)"
     },
     {
      "x": "Degenere, (1,0,1)"
     }
    ],
    "hint": "Matrice <span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div></span>, det=&minus;1&ne;0 &rArr; non degenere. Sostituisci x&#8321;=u+v, x&#8322;=u&minus;v: 2x&#8321;x&#8322;=2(u&sup2;&minus;v&sup2;).",
    "sol": "Per il criterio del determinante (non degenere &hArr; det della matrice &ne;0): A=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div></span> ha det=&minus;1&ne;0. Con la sostituzione x&#8321;=u+v, x&#8322;=u&minus;v (metodo di Lagrange) si ottiene q=2(u&sup2;&minus;v&sup2;): segnatura (1,1,0). L&rsquo;assenza di quadrati puri NON significa forma nulla n&eacute; degenere."
   }
  ]
 },
 {
  "pool": "forme",
  "src": "Prova 8_2_23sol Es. 3 · segnatura per restrizione",
  "steps": [
   {
    "t": "Una forma b su &#8477;&#8308; &egrave; definita positiva su Span(e&#8321;,e&#8322;) e definita negativa su Span(e&#8323;,e&#8324;). Cosa si conclude su rango e segnatura, senza altri conti?",
    "opts": [
     {
      "x": "n&#8330;&ge;2 e n&#8331;&ge;2, quindi rango 4 e segnatura (2,2)",
      "c": true
     },
     {
      "x": "segnatura (4,0)"
     },
     {
      "x": "segnatura (2,2) ma rango 2"
     },
     {
      "x": "nulla, servono gli autovalori"
     }
    ],
    "hint": "Se b &egrave; def. positiva su un sottospazio di dim 2, allora n&#8330;&ge;2; analogamente def. negativa &rArr; n&#8331;&ge;2. In &#8477;&#8308; vale n&#8330;+n&#8331;+n&#8320;&le;4.",
    "sol": "<b>Rango 4, segnatura (2,2).</b> La restrizione def. positiva su un piano forza n&#8330;&ge;2; quella def. negativa forza n&#8331;&ge;2. Ma n&#8330;+n&#8331;&le;4, quindi n&#8330;=n&#8331;=2 e n&#8320;=0. L&rsquo;argomento di restrizione evita di diagonalizzare."
   }
  ]
 },
 {
  "pool": "forme",
  "src": "geomefis24.1.22 Es. 4 · segnatura parametrica (misto)",
  "steps": [
   {
    "t": "<span class=\"lbl\">L1</span> Sia q(x)=&alpha;x&#8321;&sup2;+x&#8322;&sup2;+x&#8323;&sup2;+2x&#8321;x&#8322;&minus;4x&#8321;x&#8323;, matrice A&#8341;=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">&alpha;</span><span class=\"mcell\">1</span><span class=\"mcell\">&minus;2</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">&minus;2</span><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div></span>. Per quale &alpha; la forma &egrave; degenere?",
    "opts": [
     {
      "x": "&alpha;=5",
      "c": true
     },
     {
      "x": "&alpha;=0"
     },
     {
      "x": "&alpha;=1"
     },
     {
      "x": "nessun &alpha;"
     }
    ],
    "hint": "Degenere &hArr; det&#8202;A&#8341;=0. Sviluppa il determinante lungo la prima riga.",
    "sol": "det&#8202;A&#8341;=&alpha;(1&middot;1)&minus;1(1&middot;1)&minus;2(&minus;(&minus;2))=&alpha;&minus;1&minus;4=&alpha;&minus;5. Si annulla per &alpha;=5: unico valore critico (r=1).",
    "cont": "Continua &rarr; segnatura per &alpha;&gt;5 e &alpha;&lt;5"
   },
   {
    "t": "<span class=\"lbl\">L2</span> Segnatura della stessa q per &alpha;&gt;5 e per &alpha;&lt;5 (con D&#8321;,D&#8322;&gt;0)?",
    "opts": [
     {
      "x": "&alpha;&gt;5: (3,0,0); &alpha;&lt;5: (2,1,0)",
      "c": true
     },
     {
      "x": "&alpha;&gt;5: (2,1,0); &alpha;&lt;5: (3,0,0)"
     },
     {
      "x": "sempre (2,1,0)"
     },
     {
      "x": "&alpha;&gt;5: (2,0,1); &alpha;&lt;5: (1,2,0)"
     }
    ],
    "hint": "Minori di testa: D&#8321;=&alpha;, D&#8322;=&alpha;&minus;1, D&#8323;=&alpha;&minus;5. Per &alpha;&gt;5 tutti positivi; scendendo sotto 5 l&rsquo;ultimo cambia segno.",
    "sol": "Per il criterio di Sylvester (minori principali di testa): D&#8321;=&alpha;, D&#8322;=&alpha;&middot;1&minus;1=&alpha;&minus;1, D&#8323;=det&#8202;A&#8341;=&alpha;&minus;5. Per &alpha;&gt;5: +,+,+ &rArr; (3,0,0) def. positiva. Per &alpha;&lt;5 (con D&#8321;,D&#8322;&gt;0): segni +,+,&minus; &rArr; una variazione &rArr; (2,1,0). In &alpha;=5 la forma degenera: (2,0,1). Trovare prima il valore critico rende immediata la discussione."
   }
  ]
 },
 {
  "pool": "forme",
  "src": "b03 scritto-2017-06-30 Es.4 · max/min di q sulla sfera",
  "steps": [
   {
    "t": "q:&#8477;&sup3;&rarr;&#8477; ha matrice simmetrica con autovalori &minus;2, 1, 5. Qual &egrave; il massimo di q(x) su &#8741;x&#8741;=1?",
    "opts": [
     {
      "x": "5 (l&rsquo;autovalore massimo)",
      "c": true
     },
     {
      "x": "1"
     },
     {
      "x": "&minus;2"
     },
     {
      "x": "illimitato"
     }
    ],
    "hint": "Sul vincolo &#8741;x&#8741;=1, max e min di q=x<sup>T</sup>Ax sono l&rsquo;autovalore MASSIMO e MINIMO di A.",
    "sol": "<b>5.</b> Per il teorema spettrale q si diagonalizza ortogonalmente: q(x)=&lambda;&#8321;y&#8321;&sup2;+&lambda;&#8322;y&#8322;&sup2;+&lambda;&#8323;y&#8323;&sup2; con &Sigma;y&#8342;&sup2;=1. Per il principio di Rayleigh il massimo su &#8741;x&#8741;=1 &egrave; l&rsquo;autovalore pi&ugrave; grande (5), raggiunto sull&rsquo;autovettore, e il minimo il pi&ugrave; piccolo (&minus;2)."
   }
  ]
 },
 {
  "pool": "forme",
  "src": "b03 scritto-2017-09-18 Es.3 · diagonalizzare q via polarizzazione",
  "steps": [
   {
    "t": "Per diagonalizzare una forma quadratica q con una base (non necessariamente ortonormale euclidea), l&rsquo;ortogonalit&agrave; da usare &egrave; rispetto a:",
    "opts": [
     {
      "x": "la forma bilineare polarizzata g associata a q",
      "c": true
     },
     {
      "x": "il prodotto scalare euclideo standard"
     },
     {
      "x": "la traccia"
     },
     {
      "x": "il determinante"
     }
    ],
    "hint": "&laquo;Diagonalizzare q&raquo; significa g(v&#8342;,v&#8343;)=0 per i&ne;j, dove g &egrave; la polarizzazione di q. Il prodotto euclideo funziona solo se q &egrave; quello standard.",
    "sol": "<b>La polarizzazione g di q.</b> Per il teorema di Lagrange ogni forma quadratica ammette una base g-ortogonale: scelto v&#8321; non isotropo, si prende v&#8322;&isin;v&#8321;<sup>&#8869;g</sup>, ecc. In tale base la matrice di q &egrave; diagonale (elementi g(v&#8342;,v&#8342;)). &Egrave; diverso da Gram&ndash;Schmidt euclideo, che diagonalizza solo la forma standard."
   }
  ]
 },
 {
  "pool": "forme",
  "src": "b03 scritto Geometria 2024-07-09 Es.3 · segnatura al variare di &alpha;",
  "steps": [
   {
    "t": "Una forma bilineare simmetrica &phi;&#8341; su &#8477;&sup3; dipende da &alpha; e ha det della matrice pari a &alpha;&minus;2. Per quale &alpha; &egrave; degenere, e come si trova il radicale?",
    "opts": [
     {
      "x": "&alpha;=2; il radicale &egrave; ker della matrice, cio&egrave; le soluzioni di A(2)x=0",
      "c": true
     },
     {
      "x": "&alpha;=0; radicale = &#8477;&sup3;"
     },
     {
      "x": "&alpha;=2; radicale = {0}"
     },
     {
      "x": "mai degenere"
     }
    ],
    "hint": "Degenere &hArr; det=0 &hArr; &alpha;=2. Il radicale &egrave; il nucleo della matrice associata per quel valore.",
    "sol": "<b>&alpha;=2.</b> Per il criterio del determinante una forma &egrave; degenere &hArr; det della matrice associata =0, qui &alpha;&minus;2=0. Il radicale (rad&#8202;&phi;={x : A(2)x=0}) si trova risolvendo il sistema omogeneo. Per la legge di inerzia di Sylvester la segnatura resta costante su ciascun intervallo separato dal valore critico &alpha;=2."
   }
  ]
 },
 {
  "pool": "forme",
  "src": "b03 scritto-2018-07-09 Es.4 · &phi;(X)=tr(X<sup>T</sup>DX) su M&#8322;",
  "steps": [
   {
    "t": "Su M&#8322;(&#8477;) sia &phi;(X)=tr(X<sup>T</sup>DX) con D=diag(&lambda;&#8321;,&lambda;&#8322;). Da cosa dipendono gli indici n<sub>+</sub>, n<sub>&minus;</sub>?",
    "opts": [
     {
      "x": "dai segni di &lambda;&#8321; e &lambda;&#8322;, ciascuno con molteplicit&agrave; 2",
      "c": true
     },
     {
      "x": "solo dal segno del det&#8202;D"
     },
     {
      "x": "solo dalla traccia di D"
     },
     {
      "x": "sono sempre (4,0)"
     }
    ],
    "hint": "&phi;(X)=&lambda;&#8321;(x&#8321;&#8321;&sup2;+x&#8322;&#8321;&sup2;)+&lambda;&#8322;(x&#8321;&#8322;&sup2;+x&#8322;&#8322;&sup2;): forma diagonale con &lambda;&#8321; due volte e &lambda;&#8322; due volte.",
    "sol": "<b>Dai segni di &lambda;&#8321;,&lambda;&#8322;, ognuno con molteplicit&agrave; 2.</b> Sviluppando, &phi; &egrave; gi&agrave; diagonale con coefficienti &lambda;&#8321;,&lambda;&#8321;,&lambda;&#8322;,&lambda;&#8322;. Per il teorema di Sylvester (legge di inerzia) gli indici sono invarianti: n<sub>+</sub>=2&middot;#{&lambda;&#8342;&gt;0}, n<sub>&minus;</sub>=2&middot;#{&lambda;&#8342;&lt;0}, n<sub>0</sub>=2&middot;#{&lambda;&#8342;=0}."
   }
  ]
 },
 {
  "pool": "forme",
  "src": "b01 / b02 esame_soluzioni20210712 Es.3 · complemento b-ortogonale non def. positiva",
  "steps": [
   {
    "t": "Per una forma bilineare simmetrica b INDEFINITA e non degenere su &#8477;&sup3;, e U un sottospazio, vale sempre &#8477;&sup3;=U&oplus;U<sup>&#8869;b</sup>?",
    "opts": [
     {
      "x": "No: solo se b ristretta a U &egrave; non degenere (U senza vettori isotropi ortogonali a tutto U)",
      "c": true
     },
     {
      "x": "S&igrave;, sempre, come per il prodotto euclideo"
     },
     {
      "x": "No, mai"
     },
     {
      "x": "S&igrave;, se dim&#8202;U=1"
     }
    ],
    "hint": "Con b indefinita U pu&ograve; contenere vettori isotropi: allora U&#8745;U<sup>&#8869;b</sup>&ne;{0} e la somma non &egrave; diretta. Il caso euclideo (def. positivo) non ha isotropi.",
    "sol": "<b>No in generale.</b> Il teorema di decomposizione ortogonale V=U&oplus;U<sup>&#8869;b</sup> vale se e solo se b|<sub>U</sub> &egrave; non degenere. Con b indefinita ci&ograve; pu&ograve; fallire (U isotropo); per il prodotto euclideo (definito positivo) l&rsquo;ipotesi &egrave; sempre soddisfatta e la somma diretta &egrave; garantita."
   }
  ]
 },
 {
  "pool": "forme",
  "src": "b01 · prodotto scalare integrale su &#8477;[x] e non-degenerazione via Gram",
  "steps": [
   {
    "t": "Su &#8477;[x]<sub>&le;2</sub> con &#9001;p,q&#9002;=&int;<sub>&minus;1</sub><sup>1</sup>pq&#8202;dx, la forma &egrave; non degenere?",
    "opts": [
     {
      "x": "S&igrave;: &#9001;p,p&#9002;=&int;p&sup2;&gt;0 per p&ne;0 e la matrice di Gram &egrave; invertibile",
      "c": true
     },
     {
      "x": "No: la matrice di Gram &egrave; singolare"
     },
     {
      "x": "No: solo semidefinita"
     },
     {
      "x": "S&igrave; solo su un sottospazio"
     }
    ],
    "hint": "Non degenere &hArr; det della matrice di Gram &ne;0. Qui &#9001;p,p&#9002;=&int;<sub>&minus;1</sub><sup>1</sup>p&sup2;dx&ge;0, nullo solo se p&equiv;0.",
    "sol": "<b>S&igrave;, definita positiva.</b> Per il criterio di Gram la forma &egrave; non degenere &hArr; det della matrice di Gram &ne;0. Qui &#9001;p,p&#9002;=&int;<sub>&minus;1</sub><sup>1</sup>p&sup2;dx&ge;0, nullo solo per p&equiv;0 (un polinomio con integrale del quadrato nullo &egrave; nullo): la matrice di Gram nella base {1,x,x&sup2;} &egrave; definita positiva, dunque invertibile."
   }
  ]
 }
];

Q.applicazioni = [
 {
  "pool": "applicazioni",
  "src": "tipo 5 · teorema del rango",
  "steps": [
   {
    "t": "Sia f : &#8477;&#8308; &rarr; &#8477;&#179; lineare con dim&#8202;im&#8202;f = 2. Quanto vale dim&#8202;ker&#8202;f?",
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
    "hint": "Teorema del rango: dim&#8202;ker&#8202;f + dim&#8202;im&#8202;f = dim(dominio), qui 4.",
    "sol": "<b>2.</b> Per il teorema del rango (dim&#8202;ker&#8202;f + dim&#8202;im&#8202;f = dim del dominio): dim&#8202;ker&#8202;f = 4 &minus; 2 = 2. La dimensione del dominio &egrave; 4, non 3."
   }
  ]
 },
 {
  "pool": "applicazioni",
  "src": "tipo 5 · iniettivit&agrave; da rango",
  "steps": [
   {
    "t": "Una applicazione lineare f : V &rarr; W &egrave; iniettiva se e solo se...",
    "opts": [
     {
      "x": "ker&#8202;f = {0}, cio&egrave; rk&#8202;f = dim&#8202;V",
      "c": true
     },
     {
      "x": "im&#8202;f = W"
     },
     {
      "x": "dim&#8202;V = dim&#8202;W"
     },
     {
      "x": "rk&#8202;f = dim&#8202;W"
     }
    ],
    "hint": "L&rsquo;iniettivit&agrave; riguarda il nucleo; la suriettivit&agrave; riguarda l&rsquo;immagine.",
    "sol": "<b>ker&#8202;f={0}.</b> Equivalente a dim&#8202;ker&#8202;f=0, cio&egrave; rk&#8202;f=dim&#8202;V per il teorema del rango."
   }
  ]
 },
 {
  "pool": "applicazioni",
  "src": "tipo 5 · suriettivit&agrave; da rango",
  "steps": [
   {
    "t": "f : &#8477;&#179; &rarr; &#8477;&#8308; lineare pu&ograve; essere suriettiva?",
    "opts": [
     {
      "x": "No: rk&#8202;f &le; 3 &lt; 4 = dim del codominio",
      "c": true
     },
     {
      "x": "S&igrave;, se ker&#8202;f={0}"
     },
     {
      "x": "S&igrave;, se &egrave; iniettiva"
     },
     {
      "x": "Dipende dalla matrice"
     }
    ],
    "hint": "im&#8202;f &sub; &#8477;&#8308; ma dim&#8202;im&#8202;f = rk&#8202;f &le; dim(dominio) = 3.",
    "sol": "<b>No.</b> Per il teorema del rango dim&#8202;im&#8202;f = rk&#8202;f &le; dim del dominio = 3, quindi non pu&ograve; riempire &#8477;&#8308;. Una mappa da uno spazio pi&ugrave; piccolo a uno pi&ugrave; grande non &egrave; mai suriettiva."
   }
  ]
 },
 {
  "pool": "applicazioni",
  "src": "tipo 5 · endomorfismo non invertibile",
  "steps": [
   {
    "t": "f : &#8477;&#179; &rarr; &#8477;&#179; ha matrice di rango 2. Cosa si pu&ograve; dire?",
    "opts": [
     {
      "x": "Non iniettiva e non suriettiva: dim&#8202;ker=1",
      "c": true
     },
     {
      "x": "Iniettiva ma non suriettiva"
     },
     {
      "x": "Suriettiva ma non iniettiva"
     },
     {
      "x": "Bigettiva"
     }
    ],
    "hint": "Per un endomorfismo (dominio = codominio, dim finita) iniettivit&agrave; &hArr; suriettivit&agrave; &hArr; rango pieno.",
    "sol": "<b>N&eacute; iniettiva n&eacute; suriettiva.</b> Per il teorema del rango rk=2&lt;3 &rArr; dim&#8202;ker=1&ne;0 (non iniettiva) e dim&#8202;im=2&lt;3 (non suriettiva). Per endomorfismi in dimensione finita le due propriet&agrave; cadono insieme."
   }
  ]
 },
 {
  "pool": "applicazioni",
  "src": "tipo 5 · matrice associata &rarr; ker/im (L1+L2)",
  "steps": [
   {
    "t": "<span class=\"lbl\">L1</span> Sia f : &#8477;&#179;&rarr;&#8477;&#179;, f(x,y,z)=(x+y, y+z, x+2y+z). Qual &egrave; la matrice A=[f] nella base canonica e il suo rango?",
    "opts": [
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">2</span><span class=\"mcell\">1</span></div></span>, rango 2",
      "c": true
     },
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">2</span><span class=\"mcell\">1</span></div></span>, rango 3"
     },
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span><span class=\"mcell\">2</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">1</span></div></span>, rango 2"
     },
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span><span class=\"mcell\">1</span></div></span>, rango 1"
     }
    ],
    "hint": "Le colonne di A sono f(e&#8321;),f(e&#8322;),f(e&#8323;) in coordinate standard. Poi nota che la terza riga = prima + seconda.",
    "sol": "<b>rango 2.</b> A ha colonne (1,0,1),(1,1,2),(0,1,1); riga 3 = riga 1 + riga 2, quindi rk=2.",
    "cont": "Continua &rarr; determina ker e im"
   },
   {
    "t": "<span class=\"lbl\">L2</span> Per la stessa f (rk=2), quali sono dim&#8202;ker&#8202;f e una base di ker&#8202;f?",
    "opts": [
     {
      "x": "dim 1, ker = Span((&minus;1,1,&minus;1))",
      "c": true
     },
     {
      "x": "dim 0, ker = {0}"
     },
     {
      "x": "dim 2, ker = Span((1,0,&minus;1),(0,1,0))"
     },
     {
      "x": "dim 1, ker = Span((1,1,1))"
     }
    ],
    "hint": "dim&#8202;ker=3&minus;rk=1. Risolvi x+y=0, y+z=0 (la terza equazione &egrave; dipendente).",
    "sol": "<b>dim 1, Span((&minus;1,1,&minus;1)).</b> Per il teorema del rango dim&#8202;ker=3&minus;rk=1. Da x+y=0 e y+z=0: x=&minus;y, z=&minus;y, quindi (x,y,z)=y(&minus;1,1,&minus;1). L&rsquo;immagine ha dim 2, generata da due colonne indipendenti di A."
   }
  ]
 },
 {
  "pool": "applicazioni",
  "src": "Prova23_01_23_sol · cambio base (trabocchetto)",
  "steps": [
   {
    "t": "Le colonne della matrice [f]<sub>B</sub> di un endomorfismo f rispetto a una base B=(b&#8321;,b&#8322;,b&#8323;) sono...",
    "opts": [
     {
      "x": "le coordinate di f(b<sub>j</sub>) RISPETTO alla base B",
      "c": true
     },
     {
      "x": "i vettori f(e<sub>j</sub>) in coordinate standard"
     },
     {
      "x": "i vettori b<sub>j</sub> stessi"
     },
     {
      "x": "gli autovalori di f"
     }
    ],
    "hint": "La j-esima colonna &egrave; sempre l&rsquo;immagine del j-esimo vettore di base, ma espressa NELLE COORDINATE della base scelta, non in quelle canoniche.",
    "sol": "<b>Coordinate di f(b<sub>j</sub>) rispetto a B.</b> L&rsquo;errore tipico &egrave; scrivere f(e<sub>j</sub>) in coordinate standard quando la base non &egrave; quella canonica: si dimentica il cambio di coordinate. Vale [f]<sub>B</sub> = P&#8315;&sup1;[f]<sub>can</sub>P."
   }
  ]
 },
 {
  "pool": "applicazioni",
  "src": "tipo 5 · rango di una composizione",
  "steps": [
   {
    "t": "Per applicazioni lineari F : U&rarr;V e G : V&rarr;W, quale disuguaglianza vale sempre per G&#8728;F?",
    "opts": [
     {
      "x": "rk(G&#8728;F) &le; min(rk&#8202;F, rk&#8202;G)",
      "c": true
     },
     {
      "x": "rk(G&#8728;F) = rk&#8202;F + rk&#8202;G"
     },
     {
      "x": "rk(G&#8728;F) &ge; rk&#8202;G"
     },
     {
      "x": "rk(G&#8728;F) = rk&#8202;G &middot; rk&#8202;F"
     }
    ],
    "hint": "La composizione non pu&ograve; avere immagine pi&ugrave; grande di quella di G, n&eacute; pi&ugrave; ricca dei dati che F le passa.",
    "sol": "<b>rk(G&#8728;F) &le; min(rk&#8202;F,rk&#8202;G).</b> Per la disuguaglianza del rango di una composizione: im(G&#8728;F) &sub; im&#8202;G (da cui &le; rk&#8202;G) e G&#8728;F fattorizza attraverso im&#8202;F (da cui &le; rk&#8202;F)."
   }
  ]
 },
 {
  "pool": "applicazioni",
  "src": "tipo 5 · similitudine e cambio base",
  "steps": [
   {
    "t": "Due matrici A e B rappresentano lo STESSO endomorfismo in basi diverse. Come sono legate?",
    "opts": [
     {
      "x": "B = P&#8315;&sup1;AP, con P matrice del cambio di base",
      "c": true
     },
     {
      "x": "B = P<sup>T</sup>AP"
     },
     {
      "x": "B = A + P"
     },
     {
      "x": "B = PA"
     }
    ],
    "hint": "Il cambio di base per un endomorfismo &egrave; una similitudine; la congruenza P<sup>T</sup>AP riguarda invece le forme bilineari.",
    "sol": "<b>B = P&#8315;&sup1;AP (similitudine).</b> Conserva autovalori, traccia, determinante, rango. La forma P<sup>T</sup>AP (congruenza) &egrave; un&rsquo;altra cosa e riguarda le forme quadratiche."
   }
  ]
 },
 {
  "pool": "applicazioni",
  "src": "tipo 5 · operatore derivata su R[t]&le;2",
  "steps": [
   {
    "t": "Sia D : &#8477;[t]<sub>&le;2</sub> &rarr; &#8477;[t]<sub>&le;2</sub> l&rsquo;operatore derivata, D(p)=p&prime;. Quali sono ker&#8202;D e im&#8202;D?",
    "opts": [
     {
      "x": "ker = costanti (dim 1), im = &#8477;[t]<sub>&le;1</sub> (dim 2)",
      "c": true
     },
     {
      "x": "ker = {0}, im = tutto &#8477;[t]<sub>&le;2</sub>"
     },
     {
      "x": "ker = &#8477;[t]<sub>&le;1</sub>, im = costanti"
     },
     {
      "x": "ker = dim 2, im = dim 1"
     }
    ],
    "hint": "D(a+bt+ct&sup2;)=b+2ct. Quando &egrave; nullo? Quali polinomi si ottengono?",
    "sol": "<b>ker = costanti (dim 1), im = &#8477;[t]<sub>&le;1</sub> (dim 2).</b> D(p)=0 &hArr; b=c=0 &rArr; p costante. L&rsquo;immagine sono i polinomi di grado &le;1. Verifica col teorema del rango: 1+2=3=dim del dominio."
   }
  ]
 },
 {
  "pool": "applicazioni",
  "src": "Prova23_01_23_sol Es. 4 · ker come equazione differenziale (trabocchetto)",
  "steps": [
   {
    "t": "Sia T : &#8477;[t]<sub>&le;2</sub>&rarr;&#8477;[t]<sub>&le;2</sub>, T(p) = (t+1)p&Prime; &minus; 2t&#8202;p&prime; + 2p. Qual &egrave; ker&#8202;T?",
    "opts": [
     {
      "x": "Span(t)",
      "c": true
     },
     {
      "x": "Span(1)"
     },
     {
      "x": "{0}"
     },
     {
      "x": "Span(1, t)"
     }
    ],
    "hint": "Il ker si trova IMPONENDO T(p)=0 e risolvendo la relazione (differenziale), non applicando Gauss a una matrice di coefficienti scollegata. Poni p=a+bt+ct&sup2; e sostituisci p&prime;, p&Prime;.",
    "sol": "<b>Span(t).</b> Con p=a+bt+ct&sup2;: p&prime;=b+2ct, p&Prime;=2c. T(p) = &minus;2c&#8202;t&sup2; + 2c&#8202;t + (2a+2c). Annullando i coefficienti: c=0 e a=0, con b libero &rArr; p=bt. Il nucleo &egrave; generato da t."
   }
  ]
 },
 {
  "pool": "applicazioni",
  "src": "tipo 5 · ker&#8202;T vs ker&#8202;T&sup2; (trabocchetto)",
  "steps": [
   {
    "t": "Sia T : &#8477;&sup2;&rarr;&#8477;&sup2; con matrice <span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div></span>. &Egrave; vero che ker&#8202;T = ker&#8202;T&sup2;?",
    "opts": [
     {
      "x": "No: ker&#8202;T = Span(e&#8321;) &sub; ker&#8202;T&sup2; = &#8477;&sup2;",
      "c": true
     },
     {
      "x": "S&igrave;, coincidono sempre"
     },
     {
      "x": "No: ker&#8202;T&sup2; &sub; ker&#8202;T strettamente"
     },
     {
      "x": "S&igrave;, entrambi uguali a {0}"
     }
    ],
    "hint": "Calcola T&sup2;. Per un operatore nilpotente i nuclei delle potenze CRESCONO: ker&#8202;T &sube; ker&#8202;T&sup2; &sube; ...",
    "sol": "<b>No.</b> Per il teorema sulla catena dei nuclei di un operatore nilpotente (ker&#8202;T &sube; ker&#8202;T&sup2; &sube; &hellip;): T&sup2;=0, quindi ker&#8202;T&sup2;=&#8477;&sup2; (dim 2), mentre ker&#8202;T=Span(e&#8321;) (dim 1). Confondere i due &egrave; l&rsquo;errore classico: l&rsquo;inclusione &egrave; ker&#8202;T &sub; ker&#8202;T&sup2;, mai il contrario."
   }
  ]
 },
 {
  "pool": "applicazioni",
  "src": "tipo 5 · immagine come spazio colonne",
  "steps": [
   {
    "t": "Sia f : &#8477;&sup2;&rarr;&#8477;&#179; con matrice A=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">2</span></div><div class=\"mrow\"><span class=\"mcell\">2</span><span class=\"mcell\">4</span></div><div class=\"mrow\"><span class=\"mcell\">3</span><span class=\"mcell\">6</span></div></span>. Qual &egrave; dim&#8202;im&#8202;f?",
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
    "hint": "im&#8202;f = spazio generato dalle COLONNE di A. Le due colonne sono proporzionali?",
    "sol": "<b>1.</b> Per il teorema sull&rsquo;immagine (im&#8202;f = spazio generato dalle colonne di A): colonna 2 = 2&middot;colonna 1, quindi im&#8202;f = Span((1,2,3)), dimensione 1. Per il teorema del rango dim&#8202;ker&#8202;f = 2&minus;1 = 1."
   }
  ]
 },
 {
  "pool": "applicazioni",
  "src": "tipo 5 · ker come equazioni cartesiane",
  "steps": [
   {
    "t": "Sia f : &#8477;&#179;&rarr;&#8477;&sup2; con matrice <span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">1</span></div></span>. Una base di ker&#8202;f &egrave;:",
    "opts": [
     {
      "x": "Span((1,&minus;1,1))",
      "c": true
     },
     {
      "x": "Span((1,1,0),(0,1,1))"
     },
     {
      "x": "{0}"
     },
     {
      "x": "Span((1,0,0))"
     }
    ],
    "hint": "ker&#8202;f: risolvi x+y=0 e y+z=0. dim&#8202;ker = 3&minus;rk = 3&minus;2 = 1.",
    "sol": "<b>Span((1,&minus;1,1)).</b> Per il teorema del rango dim&#8202;ker=3&minus;rk=3&minus;2=1. Risolvendo x+y=0, y+z=0 &rArr; x=&minus;y, z=&minus;y; ponendo y=&minus;1 si ha (1,&minus;1,1)."
   }
  ]
 },
 {
  "pool": "applicazioni",
  "src": "tipo 5 · preimmagine di un vettore",
  "steps": [
   {
    "t": "Se f(x&#8320;)=y (con x&#8320; una soluzione), l&rsquo;insieme di TUTTE le preimmagini f&#8315;&sup1;(y) &egrave;:",
    "opts": [
     {
      "x": "x&#8320; + ker&#8202;f",
      "c": true
     },
     {
      "x": "ker&#8202;f"
     },
     {
      "x": "{x&#8320;}"
     },
     {
      "x": "im&#8202;f"
     }
    ],
    "hint": "Se f(x&#8320;)=f(x&#8321;)=y allora f(x&#8320;&minus;x&#8321;)=0: le differenze tra preimmagini stanno nel nucleo.",
    "sol": "<b>x&#8320; + ker&#8202;f.</b> Per il teorema di struttura delle controimmagini: sottospazio affine dato da una preimmagine particolare pi&ugrave; tutto il nucleo. Stessa struttura delle soluzioni di un sistema lineare non omogeneo."
   }
  ]
 },
 {
  "pool": "applicazioni",
  "src": "tipo 5 · iniettiva &hArr; suriettiva in dim finita",
  "steps": [
   {
    "t": "Per un endomorfismo f : V&rarr;V con dim&#8202;V finita, se f &egrave; iniettiva allora...",
    "opts": [
     {
      "x": "&egrave; anche suriettiva (quindi bigettiva)",
      "c": true
     },
     {
      "x": "pu&ograve; non essere suriettiva"
     },
     {
      "x": "ha determinante nullo"
     },
     {
      "x": "ker&#8202;f ha dimensione 1"
     }
    ],
    "hint": "Iniettiva &rArr; dim&#8202;ker=0 &rArr; rk&#8202;f=dim&#8202;V &rArr; im&#8202;f=V. Vale solo in dimensione finita.",
    "sol": "<b>&Egrave; suriettiva.</b> dim&#8202;ker=0 e teorema del rango danno dim&#8202;im=dim&#8202;V, quindi im&#8202;f=V. In dimensione infinita ci&ograve; pu&ograve; fallire (es. shift)."
   }
  ]
 },
 {
  "pool": "applicazioni",
  "src": "tipo 5 · rango di una matrice rettangolare",
  "steps": [
   {
    "t": "Sia f : &#8477;&#8308;&rarr;&#8477;&#179; con matrice 3&times;4 di rango 2. Quanto valgono dim&#8202;im&#8202;f e dim&#8202;ker&#8202;f?",
    "opts": [
     {
      "x": "dim&#8202;im = 2, dim&#8202;ker = 2",
      "c": true
     },
     {
      "x": "dim&#8202;im = 2, dim&#8202;ker = 1"
     },
     {
      "x": "dim&#8202;im = 3, dim&#8202;ker = 1"
     },
     {
      "x": "dim&#8202;im = 2, dim&#8202;ker = 3"
     }
    ],
    "hint": "dim&#8202;im = rk = 2. dim&#8202;ker = (n. colonne) &minus; rk = 4 &minus; 2.",
    "sol": "<b>dim&#8202;im = 2, dim&#8202;ker = 2.</b> Attenzione: il teorema del rango usa il numero di colonne (dominio &#8477;&#8308;), non di righe."
   }
  ]
 },
 {
  "pool": "applicazioni",
  "src": "tipo 5 · matrice dell&rsquo;identit&agrave; tra basi diverse",
  "steps": [
   {
    "t": "La matrice dell&rsquo;applicazione identit&agrave; id : V&rarr;V, letta con base B in partenza e base C in arrivo (B&ne;C), &egrave;...",
    "opts": [
     {
      "x": "la matrice del cambio di base da B a C (non l&rsquo;identit&agrave;)",
      "c": true
     },
     {
      "x": "sempre la matrice identit&agrave; I"
     },
     {
      "x": "la matrice nulla"
     },
     {
      "x": "sempre diagonale"
     }
    ],
    "hint": "La matrice dell&rsquo;identit&agrave; &egrave; I solo se la base in partenza coincide con quella in arrivo.",
    "sol": "<b>La matrice di cambio di base.</b> Le sue colonne sono le coordinate dei vettori di B rispetto a C. &Egrave; I solo quando B=C."
   }
  ]
 },
 {
  "pool": "applicazioni",
  "src": "1feb12soluz Es. 6 · T(A)=A+A<sup>T</sup> su M&#8322;",
  "steps": [
   {
    "t": "Sia T : M&#8322;(&#8477;)&rarr;M&#8322;(&#8477;), T(A)=A+A<sup>T</sup>. Cosa sono ker&#8202;T e im&#8202;T?",
    "opts": [
     {
      "x": "ker = antisimmetriche (dim 1), im = simmetriche (dim 3)",
      "c": true
     },
     {
      "x": "ker = {0}, im = tutto M&#8322;"
     },
     {
      "x": "ker = simmetriche, im = antisimmetriche"
     },
     {
      "x": "ker = diagonali, im = M&#8322;"
     }
    ],
    "hint": "T(A)=0 &hArr; A<sup>T</sup>=&minus;A (antisimmetrica). E A+A<sup>T</sup> &egrave; sempre simmetrica: dove vive l&rsquo;immagine?",
    "sol": "<b>ker = antisimmetriche (dim 1), im = simmetriche (dim 3).</b> A+A<sup>T</sup>=0 &hArr; A antisimmetrica. L&rsquo;immagine &egrave; fatta di matrici simmetriche (2A per A simmetrica le copre tutte). 1+3=4=dim&#8202;M&#8322;: teorema del rango verificato."
   }
  ]
 },
 {
  "pool": "applicazioni",
  "src": "9luglioconsoluz Es. 7 · T(A)=A&middot;A<sup>T</sup> (trabocchetto)",
  "steps": [
   {
    "t": "L&rsquo;operatore T(A)=A&middot;A<sup>T</sup> su M&#8322;(&#8477;) &egrave; lineare?",
    "opts": [
     {
      "x": "No: T(&lambda;A)=&lambda;&sup2;&#8202;A&middot;A<sup>T</sup>&ne;&lambda;&#8202;T(A)",
      "c": true
     },
     {
      "x": "S&igrave;, ed &egrave; anche iniettivo"
     },
     {
      "x": "S&igrave;, ma non suriettivo"
     },
     {
      "x": "No, ma &egrave; additivo"
     }
    ],
    "hint": "Prova l&rsquo;omogeneit&agrave;: T(&lambda;A)=(&lambda;A)(&lambda;A)<sup>T</sup>=&lambda;&sup2;&#8202;A&#8202;A<sup>T</sup>. &Egrave; uguale a &lambda;&#8202;T(A)?",
    "sol": "<b>No.</b> Per la definizione di applicazione lineare (additivit&agrave; + omogeneit&agrave;), l&rsquo;omogeneit&agrave; fallisce: T(&lambda;A)=&lambda;&sup2;&#8202;AA<sup>T</sup>&ne;&lambda;&#8202;T(A) (per &lambda;&ne;0,1). Nemmeno additivo: (A+B)(A+B)<sup>T</sup>=AA<sup>T</sup>+AB<sup>T</sup>+BA<sup>T</sup>+BB<sup>T</sup>. Non ha senso parlare di ker/im come per una lineare."
   }
  ]
 },
 {
  "pool": "applicazioni",
  "src": "b03 scritto-2017-06-30 Es.5 · proiettore p&sup2;=p",
  "steps": [
   {
    "t": "Sia p:V&rarr;V lineare con p&sup2;=p (proiettore). Quale decomposizione vale sempre?",
    "opts": [
     {
      "x": "V = ker&#8202;p &oplus; im&#8202;p",
      "c": true
     },
     {
      "x": "V = ker&#8202;p &oplus; ker(p&minus;I) con intersezione non banale"
     },
     {
      "x": "im&#8202;p = ker&#8202;p"
     },
     {
      "x": "V = im&#8202;p soltanto"
     }
    ],
    "hint": "Scrivi v = (v&minus;p(v)) + p(v). Verifica che v&minus;p(v)&isin;ker&#8202;p e p(v)&isin;im&#8202;p.",
    "sol": "<b>V=ker&#8202;p &oplus; im&#8202;p.</b> Teorema di decomposizione per proiettori (idempotenti): ogni v=(v&minus;p(v))+p(v), col primo addendo in ker&#8202;p (p(v&minus;p(v))=p(v)&minus;p&sup2;(v)=0) e il secondo in im&#8202;p, e ker&#8202;p&#8745;im&#8202;p={0}. In una base adattata p ha matrice diagonale di 0 e 1."
   }
  ]
 },
 {
  "pool": "applicazioni",
  "src": "b03 scritto-2017-06-30 Es.2 · grafo di f",
  "steps": [
   {
    "t": "Per f:V&rarr;W, il grafo &#915;={(v,f(v)) : v&isin;V}&sub;V&oplus;W &egrave; un sottospazio se e solo se...",
    "opts": [
     {
      "x": "f &egrave; lineare",
      "c": true
     },
     {
      "x": "f &egrave; iniettiva"
     },
     {
      "x": "f &egrave; suriettiva"
     },
     {
      "x": "sempre"
     }
    ],
    "hint": "&#915; sottospazio richiede chiusura per somma e scalari: (v,f(v))+(v&prime;,f(v&prime;))&isin;&#915; forza f(v+v&prime;)=f(v)+f(v&prime;).",
    "sol": "<b>f lineare.</b> Per il criterio di sottospazio (chiusura per combinazioni lineari): &#915; chiuso per somma impone f(v+v&prime;)=f(v)+f(v&prime;), per scalari f(&lambda;v)=&lambda;f(v), e 0&isin;&#915; d&agrave; f(0)=0; cio&egrave; esattamente la definizione di applicazione lineare. Viceversa, se f &egrave; lineare &#915; &egrave; chiaramente un sottospazio."
   }
  ]
 },
 {
  "pool": "applicazioni",
  "src": "b03 scritto-2017-07-13 Es.4 · rango di T(A)=A&middot;M su M&#8325;",
  "steps": [
   {
    "t": "M&isin;M&#8325;(&#8477;) ha rango 4 e T:A&#8614;A&middot;M su M&#8325;(&#8477;) (dim 25). Quanto vale rk&#8202;T?",
    "opts": [
     {
      "x": "20",
      "c": true
     },
     {
      "x": "25"
     },
     {
      "x": "5"
     },
     {
      "x": "4"
     }
    ],
    "hint": "A&middot;M agisce riga per riga: manda ogni riga r in r&middot;M, la cui immagine ha dimensione rk&#8202;M=4; con 5 righe indipendenti rk&#8202;T=5&middot;rk&#8202;M.",
    "sol": "<b>20.</b> Vista M&#8325; come 5 righe di &#8477;&#8309;, T manda ciascuna riga r in r&middot;M, la cui immagine &egrave; lo spazio righe di M (dim rk&#8202;M=4). Per il teorema del rango applicato a T: rk&#8202;T=5&middot;4=20 e dim&#8202;ker&#8202;T=25&minus;20=5."
   }
  ]
 },
 {
  "pool": "applicazioni",
  "src": "b03 scritto-2017-07-13 Es.2 · dimensione del quoziente",
  "steps": [
   {
    "t": "W&sub;&#8477;&#8309; ha dim 2. Qual &egrave; la dimensione dello spazio quoziente &#8477;&#8309;/W?",
    "opts": [
     {
      "x": "3",
      "c": true
     },
     {
      "x": "2"
     },
     {
      "x": "5"
     },
     {
      "x": "7"
     }
    ],
    "hint": "dim(V/W)=dim&#8202;V &minus; dim&#8202;W. Le classi sono i traslati v+W.",
    "sol": "<b>3.</b> Per il teorema sulla dimensione del quoziente, dim(V/W)=dim&#8202;V&minus;dim&#8202;W=5&minus;2=3. Una base di &#8477;&#8309;/W si ottiene completando una base di W a una base di &#8477;&#8309; e prendendo le classi dei 3 vettori aggiunti."
   }
  ]
 },
 {
  "pool": "applicazioni",
  "src": "b01 · decomposizione V=U&oplus;W per polinomi",
  "steps": [
   {
    "t": "In &#8477;[x]<sub>&le;2</sub> sia U={p : p(0)=0}. Un complemento W con &#8477;[x]<sub>&le;2</sub>=U&oplus;W &egrave;:",
    "opts": [
     {
      "x": "W=Span(1) (i polinomi costanti)",
      "c": true
     },
     {
      "x": "W=Span(x)"
     },
     {
      "x": "W=U"
     },
     {
      "x": "W=Span(x,x&sup2;)"
     }
    ],
    "hint": "dim&#8202;U=2 (base x,x&sup2;): serve W di dim 1 con U&#8745;W={0}, cio&egrave; un polinomio con termine noto non nullo.",
    "sol": "<b>W=Span(1).</b> U={p(0)=0}=Span(x,x&sup2;) (dim 2); la costante 1 ha 1(0)=1&ne;0, quindi 1&notin;U e Span(1)&#8745;U={0}. Per il criterio di somma diretta (U&#8745;W={0} e dim&#8202;U+dim&#8202;W=dim&#8202;V), &#8477;[x]<sub>&le;2</sub>=U&oplus;Span(1) con 2+1=3."
   }
  ]
 }
];

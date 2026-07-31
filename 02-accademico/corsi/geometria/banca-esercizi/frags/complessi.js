Q.complessi = [
 {
  "pool": "complessi",
  "src": "tipo 6 · parte reale dal coniugato",
  "steps": [
   {
    "t": "Per z &isin; &#8450;, quanto vale z + z&#773;?",
    "opts": [
     {
      "x": "2&#8202;Re(z)",
      "c": true
     },
     {
      "x": "2&#8202;Im(z)"
     },
     {
      "x": "|z|&sup2;"
     },
     {
      "x": "2i&#8202;Im(z)"
     }
    ],
    "hint": "Scrivi z=x+iy: allora z&#773;=x&minus;iy. Somma le due espressioni.",
    "sol": "<b>2&#8202;Re(z).</b> Per la definizione di coniugato (z=x+iy &rArr; z&#773;=x&minus;iy): (x+iy)+(x&minus;iy)=2x=2&#8202;Re(z). Analogamente z&minus;z&#773;=2i&#8202;Im(z)."
   }
  ]
 },
 {
  "pool": "complessi",
  "src": "tipo 6 · modulo quadro",
  "steps": [
   {
    "t": "Per z &isin; &#8450;, quanto vale z&middot;z&#773;?",
    "opts": [
     {
      "x": "|z|&sup2; (reale &ge; 0)",
      "c": true
     },
     {
      "x": "z&sup2;"
     },
     {
      "x": "2&#8202;Re(z)"
     },
     {
      "x": "un numero immaginario puro"
     }
    ],
    "hint": "z&middot;z&#773;=(x+iy)(x&minus;iy): usa (a+b)(a&minus;b).",
    "sol": "<b>|z|&sup2;=x&sup2;+y&sup2;.</b> Per la definizione di modulo (|z|&sup2;=z&middot;z&#773;): z&middot;z&#773;=x&sup2;+y&sup2; &isin; &#8477;<sub>&ge;0</sub>, sempre reale non negativo, a differenza di z&sup2;."
   }
  ]
 },
 {
  "pool": "complessi",
  "src": "prova20190121 · fattorizzare invece di sviluppare (trabocchetto)",
  "steps": [
   {
    "t": "Come conviene riscrivere l&rsquo;espressione z&sup2; &minus; z&#773;&sup2; per risolvere un&rsquo;equazione?",
    "opts": [
     {
      "x": "(z+z&#773;)(z&minus;z&#773;)",
      "c": true
     },
     {
      "x": "sviluppando (a+ib)&sup2;&minus;(a&minus;ib)&sup2; termine a termine"
     },
     {
      "x": "(z&minus;z&#773;)&sup2;"
     },
     {
      "x": "z&sup2;+z&#773;&sup2;"
     }
    ],
    "hint": "&Egrave; una differenza di quadrati: a&sup2;&minus;b&sup2;=(a+b)(a&minus;b). Fattorizzare evita di sviluppare le coordinate.",
    "sol": "<b>(z+z&#773;)(z&minus;z&#773;).</b> Differenza di quadrati con a=z, b=z&#773;. Sviluppare (a+ib)&sup2; a coordinate &egrave; pi&ugrave; lungo e nasconde la struttura."
   }
  ]
 },
 {
  "pool": "complessi",
  "src": "tipo 6 · luogo di z&sup2;=z&#773;&sup2; (L1+L2)",
  "steps": [
   {
    "t": "<span class=\"lbl\">L1</span> L&rsquo;equazione z&sup2; = z&#773;&sup2; equivale a quale condizione fattorizzata?",
    "opts": [
     {
      "x": "(z+z&#773;)(z&minus;z&#773;) = 0",
      "c": true
     },
     {
      "x": "(z+z&#773;)&sup2; = 0"
     },
     {
      "x": "z&sup2;+z&#773;&sup2; = 0"
     },
     {
      "x": "z&middot;z&#773; = 0"
     }
    ],
    "hint": "Porta tutto a primo membro: z&sup2;&minus;z&#773;&sup2;=0, poi fattorizza la differenza di quadrati.",
    "sol": "<b>(z+z&#773;)(z&minus;z&#773;)=0.</b> Cio&egrave; z+z&#773;=0 oppure z&minus;z&#773;=0.",
    "cont": "Continua &rarr; descrivi il luogo sul piano di Argand"
   },
   {
    "t": "<span class=\"lbl\">L2</span> Quale luogo del piano di Argand descrivono le soluzioni di z&sup2;=z&#773;&sup2;?",
    "svg": "<svg viewBox=\"0 0 200 200\" width=\"200\" height=\"200\"><line x1=\"10\" y1=\"100\" x2=\"190\" y2=\"100\" stroke=\"#4c8dff\" stroke-width=\"3\"/><line x1=\"100\" y1=\"10\" x2=\"100\" y2=\"190\" stroke=\"#4c8dff\" stroke-width=\"3\"/><text x=\"176\" y=\"94\" class=\"axislbl\">Re</text><text x=\"104\" y=\"20\" class=\"axislbl\">Im</text></svg>",
    "opts": [
     {
      "x": "l&rsquo;unione dell&rsquo;asse reale e dell&rsquo;asse immaginario",
      "c": true
     },
     {
      "x": "le due bisettrici y=&plusmn;x"
     },
     {
      "x": "solo l&rsquo;origine"
     },
     {
      "x": "una circonferenza"
     }
    ],
    "hint": "z+z&#773;=2Re(z)=0 &rArr; Re(z)=0 (asse immaginario); z&minus;z&#773;=2i&#8202;Im(z)=0 &rArr; Im(z)=0 (asse reale).",
    "sol": "<b>Asse reale &cup; asse immaginario.</b> z+z&#773;=0 &hArr; Re(z)=0 (asse immaginario), z&minus;z&#773;=0 &hArr; Im(z)=0 (asse reale). Sono i numeri z tali che z&sup2; &egrave; reale."
   }
  ]
 },
 {
  "pool": "complessi",
  "src": "tipo 6 · luogo di z&sup2;=&minus;z&#773;&sup2;",
  "steps": [
   {
    "t": "Quale luogo descrivono le soluzioni di z&sup2; = &minus;z&#773;&sup2;?",
    "svg": "<svg viewBox=\"0 0 200 200\" width=\"200\" height=\"200\"><line x1=\"10\" y1=\"100\" x2=\"190\" y2=\"100\" stroke=\"#3a4450\" stroke-width=\"1.5\"/><line x1=\"100\" y1=\"10\" x2=\"100\" y2=\"190\" stroke=\"#3a4450\" stroke-width=\"1.5\"/><line x1=\"25\" y1=\"175\" x2=\"175\" y2=\"25\" stroke=\"#4c8dff\" stroke-width=\"3\"/><line x1=\"25\" y1=\"25\" x2=\"175\" y2=\"175\" stroke=\"#4c8dff\" stroke-width=\"3\"/><text x=\"150\" y=\"40\" class=\"axislbl\">y=x</text><text x=\"150\" y=\"168\" class=\"axislbl\">y=&minus;x</text></svg>",
    "opts": [
     {
      "x": "le due bisettrici y=&plusmn;x",
      "c": true
     },
     {
      "x": "gli assi coordinati"
     },
     {
      "x": "solo l&rsquo;origine"
     },
     {
      "x": "la circonferenza unitaria"
     }
    ],
    "hint": "z&sup2;+z&#773;&sup2;=2(x&sup2;&minus;y&sup2;). Annullalo.",
    "sol": "<b>Le bisettrici y=&plusmn;x.</b> z&sup2;=&minus;z&#773;&sup2; &hArr; z&sup2;+z&#773;&sup2;=0 &hArr; 2(x&sup2;&minus;y&sup2;)=0 &hArr; y=&plusmn;x. Sono i z con z&sup2; immaginario puro."
   }
  ]
 },
 {
  "pool": "complessi",
  "src": "tipo 6 · natura di z&sup2;&minus;z&#773;&sup2;",
  "steps": [
   {
    "t": "Per z=x+iy generico, il numero z&sup2; &minus; z&#773;&sup2; &egrave;...",
    "opts": [
     {
      "x": "immaginario puro: 4i&#8202;xy",
      "c": true
     },
     {
      "x": "reale: x&sup2;&minus;y&sup2;"
     },
     {
      "x": "sempre nullo"
     },
     {
      "x": "|z|&sup2;"
     }
    ],
    "hint": "(z+z&#773;)(z&minus;z&#773;)=(2x)(2iy).",
    "sol": "<b>4i&#8202;xy, immaginario puro.</b> (2x)(2iy)=4ixy. In particolare z&sup2;&minus;z&#773;&sup2; ha parte reale nulla."
   }
  ]
 },
 {
  "pool": "complessi",
  "src": "tipo 6 · dimensioni di &#8450;&#8319;",
  "steps": [
   {
    "t": "Per &#8450;&#8319;, quali sono dim<sub>&#8450;</sub>(&#8450;&#8319;) e dim<sub>&#8477;</sub>(&#8450;&#8319;)?",
    "opts": [
     {
      "x": "n e 2n",
      "c": true
     },
     {
      "x": "n e n"
     },
     {
      "x": "2n e n"
     },
     {
      "x": "2n e 4n"
     }
    ],
    "hint": "Ogni componente complessa richiede 2 coordinate reali (parte reale + immaginaria).",
    "sol": "<b>dim<sub>&#8450;</sub>=n, dim<sub>&#8477;</sub>=2n.</b> Per il teorema sulla dimensione al variare del campo di scalari: come &#8450;-spazio la base &egrave; e&#8321;,...,e&#8319;; come &#8477;-spazio si aggiungono ie&#8321;,...,ie&#8319;, raddoppiando la dimensione."
   }
  ]
 },
 {
  "pool": "complessi",
  "src": "tipo 6 · &#8450;&sup2; come spazio reale",
  "steps": [
   {
    "t": "Qual &egrave; la dimensione di &#8450;&sup2; visto come spazio vettoriale su &#8477;?",
    "opts": [
     {
      "x": "4",
      "c": true
     },
     {
      "x": "2"
     },
     {
      "x": "8"
     },
     {
      "x": "1"
     }
    ],
    "hint": "dim<sub>&#8477;</sub>(&#8450;&sup2;)=2&middot;2.",
    "sol": "<b>4.</b> Base reale: e&#8321;, ie&#8321;, e&#8322;, ie&#8322;."
   }
  ]
 },
 {
  "pool": "complessi",
  "src": "prova20190121 Es. 3 vii · radici reali non &egrave; sottospazio (trabocchetto)",
  "steps": [
   {
    "t": "L&rsquo;insieme R = { A &isin; M&#8322;(&#8477;) : il polinomio caratteristico p<sub>A</sub> ha tutte radici reali } &egrave; un sottospazio?",
    "opts": [
     {
      "x": "No: somma di due tali matrici pu&ograve; avere autovalori complessi",
      "c": true
     },
     {
      "x": "S&igrave;, &egrave; chiuso per somma"
     },
     {
      "x": "S&igrave;, contiene tutte le simmetriche"
     },
     {
      "x": "No, non contiene 0"
     }
    ],
    "hint": "0&isin;R (autovalori 0,0). Cerca due matrici con autovalori reali la cui somma abbia autovalori &plusmn;i.",
    "sol": "<b>No.</b> Per il criterio di sottospazio serve chiusura per somma: A=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div></span> e B=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">&minus;1</span><span class=\"mcell\">0</span></div></span> hanno entrambe autovalori reali (0,0), ma A+B=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">&minus;1</span><span class=\"mcell\">0</span></div></span> ha autovalori &plusmn;i. Non chiuso per somma."
   }
  ]
 },
 {
  "pool": "complessi",
  "src": "prova20190121 Es. 3 vi · triangolarizzabili su &#8477; (trabocchetto)",
  "steps": [
   {
    "t": "Su &#8477;, l&rsquo;insieme T = { A &isin; M&#8322;(&#8477;) : A triangolarizzabile su &#8477; } &egrave; un sottospazio?",
    "opts": [
     {
      "x": "No: coincide con {autovalori tutti reali}, non chiuso per somma",
      "c": true
     },
     {
      "x": "S&igrave;, &egrave; tutto M&#8322;(&#8477;)"
     },
     {
      "x": "S&igrave;, coincide con le diagonalizzabili"
     },
     {
      "x": "No, perch&eacute; non contiene l&rsquo;identit&agrave;"
     }
    ],
    "hint": "Una matrice reale &egrave; triangolarizzabile su &#8477; &hArr; il suo polinomio caratteristico si spezza su &#8477; &hArr; autovalori tutti reali. Usa lo stesso controesempio di prima.",
    "sol": "<b>No.</b> Per il criterio di triangolarizzabilit&agrave; su &#8477; (&hArr; autovalori tutti reali), T coincide con {autovalori reali}; per il criterio di sottospazio non &egrave; chiuso per somma: <span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div></span> + <span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">&minus;1</span><span class=\"mcell\">0</span></div></span> d&agrave; autovalori &plusmn;i, non triangolarizzabile su &#8477;."
   }
  ]
 },
 {
  "pool": "complessi",
  "src": "tipo 6 · triangolarizzabilit&agrave; su &#8450;",
  "steps": [
   {
    "t": "Su &#8450;, l&rsquo;insieme { A &isin; M<sub>n</sub>(&#8450;) : A triangolarizzabile su &#8450; } &egrave;...",
    "opts": [
     {
      "x": "tutto M<sub>n</sub>(&#8450;) (quindi banalmente un sottospazio)",
      "c": true
     },
     {
      "x": "un sottospazio proprio non banale"
     },
     {
      "x": "non un sottospazio"
     },
     {
      "x": "uguale alle diagonalizzabili"
     }
    ],
    "hint": "Su &#8450; il polinomio caratteristico si spezza SEMPRE (teorema fondamentale dell&rsquo;algebra).",
    "sol": "<b>Tutto M<sub>n</sub>(&#8450;).</b> Per il teorema fondamentale dell&rsquo;algebra il polinomio caratteristico si spezza sempre su &#8450;, quindi ogni matrice complessa &egrave; triangolarizzabile: l&rsquo;insieme &egrave; l&rsquo;intero spazio. &Egrave; il caso REALE (autovalori non tutti reali) a dare un insieme che non &egrave; sottospazio."
   }
  ]
 },
 {
  "pool": "complessi",
  "src": "tipo 6/9 · simmetrica vs hermitiana (trabocchetto)",
  "steps": [
   {
    "t": "Quale condizione su una matrice complessa GARANTISCE che gli autovalori siano tutti reali?",
    "opts": [
     {
      "x": "hermitiana: A&#773;<sup>T</sup> = A",
      "c": true
     },
     {
      "x": "simmetrica: A<sup>T</sup> = A"
     },
     {
      "x": "triangolare superiore"
     },
     {
      "x": "a coefficienti reali"
     }
    ],
    "hint": "Nel complesso &egrave; la coniugata-trasposta a contare, non la sola trasposta. <span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">&minus;1</span><span class=\"mcell\">0</span></div></span> &egrave; reale (e antisimmetrica) con autovalori &plusmn;i.",
    "sol": "<b>Hermitiana (A&#773;<sup>T</sup>=A).</b> Per il teorema spettrale (complesso), le matrici hermitiane hanno spettro reale. Una simmetrica complessa (A<sup>T</sup>=A senza coniugio) pu&ograve; avere autovalori complessi: simmetrica &ne; hermitiana."
   }
  ]
 },
 {
  "pool": "complessi",
  "src": "tipo 6 · hermitiane non &egrave; un &#8450;-sottospazio",
  "steps": [
   {
    "t": "L&rsquo;insieme delle matrici hermitiane di M&#8322;(&#8450;) &egrave; un sottospazio VETTORIALE su &#8450;?",
    "opts": [
     {
      "x": "No: se A &egrave; hermitiana, iA in genere non lo &egrave;",
      "c": true
     },
     {
      "x": "S&igrave;, &egrave; un &#8450;-sottospazio di dimensione 4"
     },
     {
      "x": "No, non contiene la matrice nulla"
     },
     {
      "x": "S&igrave;, coincide con le simmetriche reali"
     }
    ],
    "hint": "Chiuso per somma s&igrave;. Ma prova a moltiplicare l&rsquo;identit&agrave; (hermitiana) per lo scalare i: (iI)&#773;<sup>T</sup> = &minus;iI &ne; iI.",
    "sol": "<b>No (su &#8450;).</b> Per il criterio di sottospazio (chiusura per prodotto per scalari): le hermitiane sono chiuse per somma e per scalari REALI, ma non complessi (iI non &egrave; hermitiana). Formano un &#8477;-spazio vettoriale (dim 4), non un &#8450;-spazio."
   }
  ]
 },
 {
  "pool": "complessi",
  "src": "tipo 6/2 · autovalori complessi coniugati",
  "steps": [
   {
    "t": "Una matrice REALE ha un autovalore &lambda; = 2+3i. Cosa si pu&ograve; concludere?",
    "opts": [
     {
      "x": "Anche 2&minus;3i &egrave; autovalore (stessa molteplicit&agrave;)",
      "c": true
     },
     {
      "x": "Tutti gli autovalori sono complessi"
     },
     {
      "x": "La matrice non &egrave; diagonalizzabile"
     },
     {
      "x": "&lambda; deve essere reale, contraddizione"
     }
    ],
    "hint": "Il polinomio caratteristico di una matrice reale ha coefficienti reali: le radici complesse vengono in coppie coniugate.",
    "sol": "<b>Anche 2&minus;3i &egrave; autovalore.</b> Per il teorema delle radici coniugate (un polinomio a coefficienti reali ha le radici non reali a coppie coniugate): p<sub>A</sub> ha coefficienti reali, quindi 2&minus;3i &egrave; radice con la stessa molteplicit&agrave;."
   }
  ]
 },
 {
  "pool": "complessi",
  "src": "tipo 6 · indipendenza in &#8450;&sup2; su &#8450;",
  "steps": [
   {
    "t": "In &#8450;&sup2;, i vettori (1, i) e (i, &minus;1) sono indipendenti su &#8450;?",
    "opts": [
     {
      "x": "No: (i,&minus;1) = i&middot;(1,i)",
      "c": true
     },
     {
      "x": "S&igrave;, sono indipendenti"
     },
     {
      "x": "Solo su &#8477; sono dipendenti"
     },
     {
      "x": "Formano una base di &#8450;&sup2;"
     }
    ],
    "hint": "Prova a moltiplicare il primo vettore per lo scalare i.",
    "sol": "<b>No.</b> Per la definizione di dipendenza lineare (un vettore multiplo scalare dell&rsquo;altro): i&middot;(1,i)=(i,i&sup2;)=(i,&minus;1), cio&egrave; il secondo vettore &egrave; i volte il primo. Dipendenti su &#8450;, quindi non formano una base di &#8450;&sup2;."
   }
  ]
 },
 {
  "pool": "complessi",
  "src": "tipo 6 · quando z&sup2; &egrave; reale",
  "steps": [
   {
    "t": "Per quali z &isin; &#8450; il quadrato z&sup2; &egrave; un numero reale?",
    "opts": [
     {
      "x": "z reale oppure z immaginario puro",
      "c": true
     },
     {
      "x": "solo z reale"
     },
     {
      "x": "solo z=0"
     },
     {
      "x": "per ogni z"
     }
    ],
    "hint": "z&sup2; &egrave; reale &hArr; z&sup2; = coniugato di z&sup2; = z&#773;&sup2;. Riconduciti al luogo gi&agrave; visto.",
    "sol": "<b>z reale o immaginario puro.</b> z&sup2;&isin;&#8477; &hArr; z&sup2;=z&#773;&sup2; &hArr; (z+z&#773;)(z&minus;z&#773;)=0 &hArr; Re(z)=0 o Im(z)=0."
   }
  ]
 },
 {
  "pool": "complessi",
  "src": "15febbraiosoluz Es. 1 · radici cubiche dell&rsquo;unit&agrave;",
  "steps": [
   {
    "t": "Quante e quali soluzioni ha l&rsquo;equazione z&sup3;=1 in &#8450;?",
    "opts": [
     {
      "x": "Tre: 1, e^(2&pi;i/3), e^(4&pi;i/3)",
      "c": true
     },
     {
      "x": "Una sola: z=1"
     },
     {
      "x": "Due: 1 e &minus;1"
     },
     {
      "x": "Infinite"
     }
    ],
    "hint": "z&#8319;=c ha esattamente n soluzioni distinte, ai vertici di un poligono regolare sul cerchio |z|=|c|<sup>1/n</sup>.",
    "sol": "<b>Tre radici.</b> Per la formula di De Moivre (radici n-esime dell&rsquo;unit&agrave;): z&#8342;=e^(2&pi;i&#8202;k/3), k=0,1,2, cio&egrave; 1, &minus;&frac12;+i&radic;3/2, &minus;&frac12;&minus;i&radic;3/2. Vertici di un triangolo equilatero sul cerchio unitario. Una sola &egrave; reale (z=1)."
   }
  ]
 },
 {
  "pool": "complessi",
  "src": "1appellosol Es. 2 · radici comuni via MCD",
  "steps": [
   {
    "t": "Quante soluzioni comuni hanno z&#8310;=1 e z&#8321;&#8320;=1 in &#8450;?",
    "opts": [
     {
      "x": "2 (le soluzioni di z&sup2;=1)",
      "c": true
     },
     {
      "x": "1 (solo z=1)"
     },
     {
      "x": "16"
     },
     {
      "x": "60"
     }
    ],
    "hint": "Le radici comuni a z&#8319;=1 e z&#8340;=1 sono le radici di z<sup>d</sup>=1 con d=MCD(n,m). Calcola MCD(6,10).",
    "sol": "<b>2.</b> Le radici n-esime dell&rsquo;unit&agrave; formano un gruppo ciclico; le comuni a z&#8310;=1 e z&#8321;&#8320;=1 sono le radici d-esime con d=MCD(6,10)=2, cio&egrave; z&sup2;=1: {1,&minus;1}."
   }
  ]
 },
 {
  "pool": "complessi",
  "src": "b01 · z&#8308;=1 e fattorizzazione",
  "steps": [
   {
    "t": "Quante e quali sono le soluzioni di z&#8308;=1 in &#8450;?",
    "opts": [
     {
      "x": "quattro: 1, i, &minus;1, &minus;i",
      "c": true
     },
     {
      "x": "due: 1 e &minus;1"
     },
     {
      "x": "una: 1"
     },
     {
      "x": "quattro: &plusmn;1&plusmn;i"
     }
    ],
    "hint": "Radici quarte dell&rsquo;unit&agrave;: z&#8308;&minus;1=(z&sup2;&minus;1)(z&sup2;+1)=(z&minus;1)(z+1)(z&minus;i)(z+i).",
    "sol": "<b>1, i, &minus;1, &minus;i.</b> Per la formula delle radici n-esime dell&rsquo;unit&agrave; (De Moivre), z&#8342;=e^{i&#8202;2&pi;k/4}, k=0,1,2,3: vertici di un quadrato sulla circonferenza unitaria. La fattorizzazione (z&sup2;&minus;1)(z&sup2;+1) le esibisce e il teorema fondamentale dell&rsquo;algebra assicura che sono esattamente 4."
   }
  ]
 },
 {
  "pool": "complessi",
  "src": "b01 · z&#8308;=&minus;1 e forma polare",
  "steps": [
   {
    "t": "Le soluzioni di z&#8308;=&minus;1 in &#8450; hanno modulo:",
    "opts": [
     {
      "x": "1, con argomenti (&pi;+2k&pi;)/4",
      "c": true
     },
     {
      "x": "1, e sono tutte reali"
     },
     {
      "x": "&minus;1"
     },
     {
      "x": "4"
     }
    ],
    "hint": "|z&#8308;|=|z|&#8308;=|&minus;1|=1 &rArr; |z|=1. L&rsquo;argomento risolve 4&theta;=&pi;+2k&pi;.",
    "sol": "<b>Modulo 1.</b> Per la formula di De Moivre applicata a &minus;1=e^{i&pi;}: |z|=1 e &theta;=(&pi;+2k&pi;)/4, cio&egrave; &pi;/4, 3&pi;/4, 5&pi;/4, 7&pi;/4. Nessuna &egrave; reale: stanno sulle bisettrici dei quadranti."
   }
  ]
 },
 {
  "pool": "complessi",
  "src": "b03 straordinario-2018-nov-06 Es.1 · radici seste",
  "steps": [
   {
    "t": "Le 6 radici seste di un numero complesso w&ne;0 sono disposte come:",
    "opts": [
     {
      "x": "vertici di un esagono regolare centrato nell&rsquo;origine, equispaziati di 60&deg;",
      "c": true
     },
     {
      "x": "tutte sull&rsquo;asse reale"
     },
     {
      "x": "tre coppie coniugate sull&rsquo;asse immaginario"
     },
     {
      "x": "in un unico punto"
     }
    ],
    "hint": "Le n radici n-esime hanno lo stesso modulo |w|<sup>1/n</sup> e argomenti che differiscono di 2&pi;/n.",
    "sol": "<b>Vertici di un esagono regolare.</b> Per la formula delle radici n-esime (De Moivre): stesso modulo |w|<sup>1/6</sup> e argomenti (arg&#8202;w+2k&pi;)/6, k=0..5, separati di 60&deg;. Per contare quante hanno Re&gt;0 si guarda quali argomenti cadono in (&minus;&pi;/2, &pi;/2)."
   }
  ]
 },
 {
  "pool": "complessi",
  "src": "b01 · endomorfismo f&#8341; su &#8450;&#8322;[t]",
  "steps": [
   {
    "t": "Su &#8450;[t]<sub>&le;2</sub> sia f&#8341;(p)=&alpha;&#8202;p(0)t&sup2;+p&prime;(t) con &alpha;&ne;0. La matrice in {1,t,t&sup2;} ha polinomio caratteristico &minus;&lambda;&sup3;+2&alpha;. f&#8341; &egrave; diagonalizzabile su &#8450;?",
    "opts": [
     {
      "x": "S&igrave;: &lambda;&sup3;=2&alpha; ha 3 radici distinte in &#8450;",
      "c": true
     },
     {
      "x": "No: unica radice"
     },
     {
      "x": "S&igrave; solo se &alpha; &egrave; reale"
     },
     {
      "x": "No: la matrice non &egrave; simmetrica"
     }
    ],
    "hint": "Le radici di &lambda;&sup3;=2&alpha; sono le 3 radici cubiche di 2&alpha;, distinte per &alpha;&ne;0.",
    "sol": "<b>S&igrave;.</b> &lambda;&sup3;=2&alpha; ha 3 radici cubiche distinte in &#8450; (per &alpha;&ne;0), per la formula delle radici n-esime. Con 3 autovalori distinti in dimensione 3, il criterio &laquo;autovalori tutti distinti &rArr; diagonalizzabile&raquo; garantisce la diagonalizzabilit&agrave; su &#8450;."
   }
  ]
 }
];

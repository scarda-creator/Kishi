Q.diag = [
 {
  "pool": "diag",
  "src": "tipo 2 · autovalori di matrice triangolare",
  "steps": [
   {
    "t": "Quali sono gli autovalori di A=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">3</span><span class=\"mcell\">7</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">3</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">&minus;2</span></div></span>?",
    "opts": [
     {
      "x": "3, 3, &minus;2",
      "c": true
     },
     {
      "x": "3, 7, &minus;2"
     },
     {
      "x": "3, 1, &minus;2"
     },
     {
      "x": "occorre il polinomio caratteristico"
     }
    ],
    "hint": "Per una matrice <b>triangolare</b> gli autovalori sono gli elementi sulla diagonale, qualunque cosa ci sia fuori diagonale.",
    "sol": "<b>3 (doppio) e &minus;2.</b> Per il teorema sugli autovalori di una matrice triangolare (sono gli elementi diagonali): det(A&minus;&lambda;I)=(3&minus;&lambda;)&sup2;(&minus;2&minus;&lambda;), gli elementi fuori diagonale non contano."
   }
  ]
 },
 {
  "pool": "diag",
  "src": "soluzioniesame20200204 Es. 3 (trabocchetto m.a. vs m.g.)",
  "steps": [
   {
    "t": "<span class=\"lbl\">L1</span> Sia A=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">2</span><span class=\"mcell\">1</span><span class=\"mcell\">3</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">2</span><span class=\"mcell\">5</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">4</span></div></span>. Quali sono i suoi autovalori con relativa molteplicit&agrave; algebrica?",
    "opts": [
     {
      "x": "&lambda;=2 (m.a. 2), &lambda;=4 (m.a. 1)",
      "c": true
     },
     {
      "x": "&lambda;=2, 4, 5 (tutti semplici)"
     },
     {
      "x": "&lambda;=2 (m.a. 3)"
     },
     {
      "x": "&lambda;=4 (m.a. 2), &lambda;=2 (m.a. 1)"
     }
    ],
    "hint": "Matrice triangolare: leggi la diagonale. Conta quante volte compare ciascun valore.",
    "sol": "<b>&lambda;=2 con m.a.=2, &lambda;=4 con m.a.=1.</b> Per il teorema sugli autovalori di una triangolare, si leggono sulla diagonale (2,2,4).",
    "cont": "Continua &rarr; calcola la m.g. e concludi"
   },
   {
    "t": "<span class=\"lbl\">L2</span> Per la stessa A, &egrave; diagonalizzabile? (m.a.(2)=2)",
    "opts": [
     {
      "x": "No: m.g.(2)=1 &lt; m.a.(2)=2",
      "c": true
     },
     {
      "x": "S&igrave;: m.a.(2)=2 e c&rsquo;&egrave; anche &lambda;=4"
     },
     {
      "x": "S&igrave;: ha due autovalori distinti"
     },
     {
      "x": "No: ha un autovalore negativo"
     }
    ],
    "hint": "<b>Non fermarti a m.a.=2.</b> Devi calcolare m.g.(2)=3&minus;rk(A&minus;2I) e confrontarla con m.a.",
    "sol": "<b>No.</b> Per il criterio di diagonalizzabilit&agrave; (m.a.=m.g. per ogni &lambda;): A&minus;2I=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">3</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">5</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">2</span></div></span> ha rango 2, quindi m.g.(2)=3&minus;2=1 &lt; 2=m.a.(2). La diagonalizzabilit&agrave; fallisce proprio su &lambda;=2."
   }
  ]
 },
 {
  "pool": "diag",
  "src": "soluzioniesame20200204 Es. 4 (tr=det=0)",
  "steps": [
   {
    "t": "Sia A=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">&minus;1</span><span class=\"mcell\">&minus;1</span></div></span> (tr&#8202;A=0, det&#8202;A=0, A&ne;0). &Egrave; diagonalizzabile?",
    "opts": [
     {
      "x": "No: &lambda;=0 doppio ma A non &egrave; la matrice nulla",
      "c": true
     },
     {
      "x": "S&igrave;: ogni matrice 2&times;2 lo &egrave;"
     },
     {
      "x": "S&igrave;: ha due autovalori distinti"
     },
     {
      "x": "Serve calcolare il polinomio caratteristico"
     }
    ],
    "hint": "tr=det=0 &rArr; entrambi gli autovalori sono 0, <b>senza fare il polinomio</b>. Se fosse diagonalizzabile sarebbe simile a diag(0,0)=0.",
    "sol": "<b>No.</b> Per le formule di Vi&egrave;te (tr=&lambda;&#8321;+&lambda;&#8322;, det=&lambda;&#8321;&lambda;&#8322;): tr=0 e det=0 &rArr; &lambda;&#8321;=&lambda;&#8322;=0. Per il criterio di diagonalizzabilit&agrave;, una matrice con soli autovalori 0 diagonalizzabile sarebbe C&#8315;&sup1;&middot;0&middot;C=0; ma A&ne;0. Non diagonalizzabile."
   }
  ]
 },
 {
  "pool": "diag",
  "src": "tipo 2 · necessario vs sufficiente (trabocchetto)",
  "steps": [
   {
    "t": "Avere n autovalori DISTINTI &egrave; condizione necessaria per la diagonalizzabilit&agrave; di una matrice n&times;n?",
    "opts": [
     {
      "x": "No, solo sufficiente: pensa a I&#8323;",
      "c": true
     },
     {
      "x": "S&igrave;, &egrave; necessaria e sufficiente"
     },
     {
      "x": "S&igrave;, &egrave; necessaria ma non sufficiente"
     },
     {
      "x": "No, non &egrave; n&eacute; necessaria n&eacute; sufficiente"
     }
    ],
    "hint": "I&#8323; ha un solo autovalore (1, m.a. 3) ed &egrave; gi&agrave; diagonale. Autovalori distinti &rArr; diagonalizzabile, ma non viceversa.",
    "sol": "<b>No, solo sufficiente.</b> n autovalori distinti garantiscono la diagonalizzabilit&agrave;, ma I&#8323; (autovalore 1 triplo) &egrave; diagonalizzabile pur avendo un solo autovalore. La condizione vera &egrave; m.g.=m.a. per ogni &lambda;."
   }
  ]
 },
 {
  "pool": "diag",
  "src": "tipo 2 · autovalore ripetuto, ma diagonalizzabile",
  "steps": [
   {
    "t": "Sia A=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">2</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">2</span></div></span>. &Egrave; diagonalizzabile?",
    "opts": [
     {
      "x": "S&igrave;: per &lambda;=2 vale m.g.=m.a.=2",
      "c": true
     },
     {
      "x": "No: &lambda;=2 ha m.a.=2"
     },
     {
      "x": "No: c&rsquo;&egrave; un 1 fuori diagonale"
     },
     {
      "x": "S&igrave;, ma solo su &#8450;"
     }
    ],
    "hint": "Autovalori 1, 2, 2. Solo &lambda;=2 &egrave; ripetuto: calcola m.g.(2)=3&minus;rk(A&minus;2I).",
    "sol": "<b>S&igrave;.</b> Per il criterio di diagonalizzabilit&agrave; (m.a.=m.g. per ogni &lambda;): A&minus;2I=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">&minus;1</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div></span> ha rango 1, quindi m.g.(2)=2=m.a.(2); &lambda;=1 &egrave; semplice. Diagonalizzabile nonostante l&rsquo;autovalore ripetuto."
   }
  ]
 },
 {
  "pool": "diag",
  "src": "tipo 2 · polinomio caratteristico 2&times;2",
  "steps": [
   {
    "t": "Sia A=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">2</span></div><div class=\"mrow\"><span class=\"mcell\">3</span><span class=\"mcell\">2</span></div></span>. Quali sono gli autovalori?",
    "opts": [
     {
      "x": "4 e &minus;1",
      "c": true
     },
     {
      "x": "1 e 2"
     },
     {
      "x": "3 e &minus;2"
     },
     {
      "x": "2 e &minus;2"
     }
    ],
    "hint": "p(&lambda;)=&lambda;&sup2;&minus;(tr)&lambda;+det = &lambda;&sup2;&minus;3&lambda;+(2&minus;6).",
    "sol": "<b>4 e &minus;1.</b> tr=3, det=2&minus;6=&minus;4: p(&lambda;)=&lambda;&sup2;&minus;3&lambda;&minus;4=(&lambda;&minus;4)(&lambda;+1). Distinti &rArr; diagonalizzabile."
   }
  ]
 },
 {
  "pool": "diag",
  "src": "tipo 2 · m.g. da rango",
  "steps": [
   {
    "t": "Sia A=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">5</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">5</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">5</span></div></span>. &Egrave; diagonalizzabile?",
    "opts": [
     {
      "x": "No: m.g.(5)=2 &lt; m.a.(5)=3",
      "c": true
     },
     {
      "x": "S&igrave;: &egrave; gi&agrave; quasi diagonale"
     },
     {
      "x": "S&igrave;: m.a.(5)=3 = dimensione"
     },
     {
      "x": "No: ha un solo autovalore"
     }
    ],
    "hint": "Un solo autovalore (5, m.a. 3) NON impedisce la diagonalizzabilit&agrave; (vedi 5I); ma qui c&rsquo;&egrave; un 1 fuori diagonale. Calcola rk(A&minus;5I).",
    "sol": "<b>No.</b> Per il criterio m.a.=m.g.: A&minus;5I=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div></span> ha rango 1, quindi m.g.(5)=3&minus;1=2 &lt; 3=m.a.(5). La differenza con 5I &egrave; proprio quell&rsquo;1."
   }
  ]
 },
 {
  "pool": "diag",
  "src": "tipo 2 · colonne della matrice diagonalizzante",
  "steps": [
   {
    "t": "Se A &egrave; diagonalizzabile e C&#8315;&sup1;AC = D &egrave; diagonale, cosa sono le colonne di C?",
    "opts": [
     {
      "x": "Una base di autovettori di A",
      "c": true
     },
     {
      "x": "Gli autovalori di A"
     },
     {
      "x": "Le righe della forma di Jordan"
     },
     {
      "x": "I vettori della base canonica"
     }
    ],
    "hint": "Da AC=CD, la j-esima colonna c<sub>j</sub> soddisfa A&#8202;c<sub>j</sub>=d<sub>jj</sub>&#8202;c<sub>j</sub>.",
    "sol": "<b>Autovettori.</b> AC=CD significa A&#8202;c<sub>j</sub>=&lambda;<sub>j</sub>c<sub>j</sub>: ogni colonna di C &egrave; un autovettore relativo all&rsquo;autovalore in posizione (j,j) di D. L&rsquo;ordine delle colonne di C e degli autovalori in D deve corrispondere."
   }
  ]
 },
 {
  "pool": "diag",
  "src": "tipo 10 · blocco di Jordan 2&times;2",
  "steps": [
   {
    "t": "Sia A=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">3</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">3</span></div></span>. &Egrave; diagonalizzabile?",
    "opts": [
     {
      "x": "No: m.g.(3)=1 &lt; m.a.(3)=2",
      "c": true
     },
     {
      "x": "S&igrave;: &egrave; triangolare con autovalori uguali"
     },
     {
      "x": "S&igrave;: tr=6, det=9"
     },
     {
      "x": "No: ha determinante non nullo"
     }
    ],
    "hint": "Autovalore 3 doppio. m.g.(3)=2&minus;rk(A&minus;3I).",
    "sol": "<b>No.</b> Per il criterio m.a.=m.g.: A&minus;3I=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div></span> ha rango 1, m.g.(3)=1&lt;2=m.a.(3). &Egrave; un blocco di Jordan: triangolarizzabile (gi&agrave; triangolare) ma non diagonalizzabile."
   }
  ]
 },
 {
  "pool": "diag",
  "src": "tipo 2 · ricostruire autovalori da tr e det",
  "steps": [
   {
    "t": "Una matrice 2&times;2 ha tr&#8202;A=6 e det&#8202;A=8. Quali sono i suoi autovalori?",
    "opts": [
     {
      "x": "2 e 4",
      "c": true
     },
     {
      "x": "6 e 8"
     },
     {
      "x": "3 e 3"
     },
     {
      "x": "1 e 8"
     }
    ],
    "hint": "Gli autovalori sono le radici di &lambda;&sup2;&minus;(tr)&lambda;+det.",
    "sol": "<b>2 e 4.</b> &lambda;&sup2;&minus;6&lambda;+8=(&lambda;&minus;2)(&lambda;&minus;4). Distinti &rArr; diagonalizzabile."
   }
  ]
 },
 {
  "pool": "diag",
  "src": "tipo 2 · autovalori complessi su &#8477; vs &#8450;",
  "steps": [
   {
    "t": "La matrice di rotazione A=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">&minus;1</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div></span> (autovalori &plusmn;i) &egrave; diagonalizzabile?",
    "opts": [
     {
      "x": "Su &#8450; s&igrave;, su &#8477; no",
      "c": true
     },
     {
      "x": "S&igrave;, sia su &#8477; sia su &#8450;"
     },
     {
      "x": "No, n&eacute; su &#8477; n&eacute; su &#8450;"
     },
     {
      "x": "Su &#8477; s&igrave;, su &#8450; no"
     }
    ],
    "hint": "p(&lambda;)=&lambda;&sup2;+1 non ha radici reali. Su &#8450; gli autovalori sono distinti.",
    "sol": "<b>Diagonalizzabile su &#8450;, non su &#8477;.</b> Su &#8477; non ci sono autovettori (nessun autovalore reale); su &#8450; gli autovalori &plusmn;i sono distinti &rArr; diagonalizzabile."
   }
  ]
 },
 {
  "pool": "diag",
  "src": "tipo 2 · disuguaglianza m.g. &le; m.a.",
  "steps": [
   {
    "t": "Per ogni autovalore &lambda; di una matrice, quale relazione vale SEMPRE?",
    "opts": [
     {
      "x": "1 &le; m.g.(&lambda;) &le; m.a.(&lambda;)",
      "c": true
     },
     {
      "x": "m.a.(&lambda;) &le; m.g.(&lambda;)"
     },
     {
      "x": "m.g.(&lambda;) = m.a.(&lambda;)"
     },
     {
      "x": "m.g.(&lambda;) &ge; 2"
     }
    ],
    "hint": "Un autovalore ha sempre almeno un autovettore (m.g.&ge;1) e l&rsquo;autospazio non pu&ograve; superare la molteplicit&agrave; algebrica.",
    "sol": "<b>1 &le; m.g.(&lambda;) &le; m.a.(&lambda;).</b> La diagonalizzabilit&agrave; equivale all&rsquo;uguaglianza m.g.=m.a. per ogni &lambda;."
   }
  ]
 },
 {
  "pool": "diag",
  "src": "tipo 2 · criterio globale di diagonalizzabilit&agrave;",
  "steps": [
   {
    "t": "Una matrice n&times;n (su &#8450;) &egrave; diagonalizzabile se e solo se...",
    "opts": [
     {
      "x": "la somma delle m.g. su tutti gli autovalori &egrave; n",
      "c": true
     },
     {
      "x": "la somma delle m.a. &egrave; n"
     },
     {
      "x": "ha determinante non nullo"
     },
     {
      "x": "&egrave; triangolare"
     }
    ],
    "hint": "La somma delle m.a. &egrave; sempre n su &#8450; (teorema fondamentale dell&rsquo;algebra): non discrimina nulla.",
    "sol": "<b>Somma delle m.g. = n.</b> Equivale a m.g.=m.a. per ogni &lambda;, cio&egrave; a poter costruire una base di n autovettori."
   }
  ]
 },
 {
  "pool": "diag",
  "src": "tipo 2 · diagonalizzabilit&agrave; parametrica",
  "steps": [
   {
    "t": "Per quali valori di k &isin; &#8477; la matrice A=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">k</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div></span> &egrave; diagonalizzabile?",
    "opts": [
     {
      "x": "Solo k=0",
      "c": true
     },
     {
      "x": "Per ogni k"
     },
     {
      "x": "Per ogni k&ne;0"
     },
     {
      "x": "Per nessun k"
     }
    ],
    "hint": "Autovalore 1 doppio per ogni k. m.g.(1)=2&minus;rk(A&minus;I): quando vale 2?",
    "sol": "<b>Solo k=0.</b> Per il criterio m.a.=m.g.: A&minus;I=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">k</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div></span>. Se k&ne;0 il rango &egrave; 1 e m.g.(1)=1&lt;2=m.a.(1) (blocco di Jordan); se k=0 allora A=I, gi&agrave; diagonale."
   }
  ]
 },
 {
  "pool": "diag",
  "src": "prova20240207 · parametro che NON salva il blocco (trabocchetto)",
  "steps": [
   {
    "t": "Per quali k &isin; &#8477; la matrice A=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">2</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">2</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">k</span></div></span> &egrave; diagonalizzabile?",
    "opts": [
     {
      "x": "Per nessun k",
      "c": true
     },
     {
      "x": "Solo k=2"
     },
     {
      "x": "Per ogni k&ne;2"
     },
     {
      "x": "Per ogni k"
     }
    ],
    "hint": "Il blocco 2&times;2 in alto a sinistra &egrave; gi&agrave; un blocco di Jordan per &lambda;=2: <b>nessuna scelta di k lo &ldquo;ripara&rdquo;</b>.",
    "sol": "<b>Per nessun k.</b> Se k&ne;2, &lambda;=2 ha m.a.=2 ma m.g.=1 (rk(A&minus;2I)=2). Se k=2, &lambda;=2 ha m.a.=3 e m.g.=2&lt;3. In ogni caso il blocco di Jordan impedisce la diagonalizzabilit&agrave;."
   }
  ]
 },
 {
  "pool": "diag",
  "src": "tipo 2 · verifica di autovettore",
  "steps": [
   {
    "t": "Il vettore (1,1) &egrave; autovettore di A=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">2</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">2</span></div></span>? Se s&igrave;, con quale autovalore?",
    "opts": [
     {
      "x": "S&igrave;, &lambda;=3",
      "c": true
     },
     {
      "x": "S&igrave;, &lambda;=1"
     },
     {
      "x": "No, non &egrave; autovettore"
     },
     {
      "x": "S&igrave;, &lambda;=2"
     }
    ],
    "hint": "Calcola A&middot;(1,1)<sup>T</sup> e verifica se &egrave; un multiplo di (1,1).",
    "sol": "<b>S&igrave;, &lambda;=3.</b> A(1,1)<sup>T</sup>=(3,3)<sup>T</sup>=3&middot;(1,1)<sup>T</sup>. (L&rsquo;altro autovalore &egrave; 1, con autovettore (1,&minus;1): A simmetrica &rArr; autospazi ortogonali.)"
   }
  ]
 },
 {
  "pool": "diag",
  "src": "tipo 2 · matrice nilpotente",
  "steps": [
   {
    "t": "Sia A=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div></span> (A&ne;0, A&sup2;=0). &Egrave; diagonalizzabile?",
    "opts": [
     {
      "x": "No: unico autovalore 0, ma A&ne;0",
      "c": true
     },
     {
      "x": "S&igrave;: ha autovalori 0 e 1"
     },
     {
      "x": "S&igrave;: &egrave; triangolare"
     },
     {
      "x": "No: non ha autovalori"
     }
    ],
    "hint": "Triangolare &rArr; autovalore 0 doppio. Una nilpotente diagonalizzabile sarebbe simile a 0, quindi nulla.",
    "sol": "<b>No.</b> &lambda;=0 con m.a.=2, ma m.g.(0)=2&minus;rk(A)=2&minus;1=1. Una nilpotente non nulla non &egrave; mai diagonalizzabile."
   }
  ]
 },
 {
  "pool": "diag",
  "src": "tipo 2 · proiettore",
  "steps": [
   {
    "t": "Un operatore P con P&sup2;=P (proiettore) &egrave; sempre diagonalizzabile?",
    "opts": [
     {
      "x": "S&igrave;: gli autovalori stanno in {0,1} e V=ker P &oplus; im P",
      "c": true
     },
     {
      "x": "No, mai"
     },
     {
      "x": "Solo se P &egrave; invertibile"
     },
     {
      "x": "Solo se P &egrave; simmetrico"
     }
    ],
    "hint": "Da P&sup2;=P segue P(P&minus;I)=0: il polinomio minimo divide &lambda;(&lambda;&minus;1), prodotto di fattori lineari distinti.",
    "sol": "<b>S&igrave;.</b> &lambda;(&lambda;&minus;1) annulla P ed ha radici semplici &rArr; diagonalizzabile. Gli autospazi sono ker&#8202;P (&lambda;=0) e im&#8202;P (&lambda;=1), e V = ker&#8202;P &oplus; im&#8202;P."
   }
  ]
 },
 {
  "pool": "diag",
  "src": "tipo 5/2 · invarianti per similitudine",
  "steps": [
   {
    "t": "Se B = P&#8315;&sup1;AP, quale tra questi &egrave; in generale DIVERSO tra A e B?",
    "opts": [
     {
      "x": "Gli autovettori (le coordinate cambiano)",
      "c": true
     },
     {
      "x": "Il polinomio caratteristico"
     },
     {
      "x": "Gli autovalori"
     },
     {
      "x": "Traccia e determinante"
     }
    ],
    "hint": "Similitudine conserva tutti gli invarianti spettrali; cambia il sistema di coordinate in cui esprimi gli autovettori.",
    "sol": "<b>Gli autovettori.</b> Matrici simili condividono polinomio caratteristico, autovalori (con m.a. e m.g.), traccia e determinante. Se A&#8202;v=&lambda;v allora B(P&#8315;&sup1;v)=&lambda;(P&#8315;&sup1;v): l&rsquo;autovettore &egrave; trasformato da P&#8315;&sup1;."
   }
  ]
 },
 {
  "pool": "diag",
  "src": "4appellosol Es. 5 · antisimmetrica 3&times;3",
  "steps": [
   {
    "t": "Sia A antisimmetrica reale 3&times;3 (A<sup>T</sup>=&minus;A). Cosa si pu&ograve; dire dei suoi autovalori e della diagonalizzabilit&agrave;?",
    "opts": [
     {
      "x": "det&#8202;A=0; autovalori 0 e &plusmn;&#8202;i&beta;: diag. su &#8450;, non su &#8477;",
      "c": true
     },
     {
      "x": "det&#8202;A&ne;0 e diagonalizzabile su &#8477;"
     },
     {
      "x": "tutti gli autovalori reali"
     },
     {
      "x": "sempre nilpotente"
     }
    ],
    "hint": "Ordine dispari: det&#8202;A=det&#8202;A<sup>T</sup>=det(&minus;A)=(&minus;1)&#179;det&#8202;A &rArr; det&#8202;A=0. Gli autovalori non nulli di un&rsquo;antisimmetrica reale sono immaginari puri.",
    "sol": "<b>det&#8202;A=0, autovalori 0, &plusmn;i&beta;.</b> det&#8202;A=0 &rArr; 0 &egrave; autovalore; gli altri due sono i&beta; e &minus;i&beta; (coppia coniugata). Distinti su &#8450; &rArr; diagonalizzabile su &#8450;; su &#8477; no, perch&eacute; i&beta; non &egrave; reale (per &beta;&ne;0)."
   }
  ]
 },
 {
  "pool": "diag",
  "src": "1appellosol Es. 5 · autovalori di A&#8319;",
  "steps": [
   {
    "t": "A &egrave; diagonalizzabile con autovalori 2 e &minus;3. Quali sono gli autovalori di A&sup3; e A&sup3; &egrave; diagonalizzabile?",
    "opts": [
     {
      "x": "8 e &minus;27; s&igrave;, con gli stessi autospazi",
      "c": true
     },
     {
      "x": "6 e &minus;9; s&igrave;"
     },
     {
      "x": "2 e &minus;3; no"
     },
     {
      "x": "8 e 27; s&igrave;"
     }
    ],
    "hint": "Se Av=&lambda;v allora A&#8319;v=&lambda;&#8319;v: stessi autovettori, autovalori elevati a n.",
    "sol": "<b>8 e &minus;27.</b> Da A=PDP&#8315;&sup1; segue A&sup3;=PD&sup3;P&#8315;&sup1;: gli autospazi restano gli stessi, gli autovalori diventano 2&sup3;=8 e (&minus;3)&sup3;=&minus;27. A&sup3; &egrave; diagonalizzata dalla stessa P."
   }
  ]
 },
 {
  "pool": "diag",
  "src": "27gen12consoluz Es. 9 · operatore derivata seconda",
  "steps": [
   {
    "t": "Sia T : &#8477;[t]<sub>&le;3</sub>&rarr;&#8477;[t]<sub>&le;3</sub>, T(p)=p&Prime; (derivata seconda). T &egrave; diagonalizzabile?",
    "opts": [
     {
      "x": "No: unico autovalore 0, m.a.=4 ma m.g.=2",
      "c": true
     },
     {
      "x": "S&igrave;: autovalori 0,0,2,6"
     },
     {
      "x": "No: T non &egrave; lineare"
     },
     {
      "x": "S&igrave;: &egrave; triangolare"
     }
    ],
    "hint": "La matrice di T nella base {1,t,t&sup2;,t&sup3;} &egrave; triangolare STRETTA (nilpotente): unico autovalore 0. ker&#8202;T sono i polinomi con p&Prime;=0, cio&egrave; grado &le;1.",
    "sol": "<b>No.</b> T &egrave; nilpotente, unico autovalore 0 con m.a.=4. ker&#8202;T={grado &le;1}, dim 2 &rArr; m.g.=2&lt;4. Una nilpotente non nulla non &egrave; mai diagonalizzabile."
   }
  ]
 },
 {
  "pool": "diag",
  "src": "3appellosol Es. 1 · matrice a&#8305;&#11388;=(&minus;1)&#8305;&#8314;&#11388;a",
  "steps": [
   {
    "t": "Sia A=a&middot;<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">&minus;1</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">&minus;1</span><span class=\"mcell\">1</span><span class=\"mcell\">&minus;1</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">&minus;1</span><span class=\"mcell\">1</span></div></span> (a&ne;0), cio&egrave; a&#8305;&#11388;=(&minus;1)&#8305;&#8314;&#11388;&#8202;a. Quali sono gli autovalori e A &egrave; diagonalizzabile?",
    "opts": [
     {
      "x": "0 (m.a. 2) e 3a (m.a. 1); s&igrave;, diagonalizzabile",
      "c": true
     },
     {
      "x": "a,a,a; no"
     },
     {
      "x": "0 tripla; no"
     },
     {
      "x": "&plusmn;a e 0; s&igrave;"
     }
    ],
    "hint": "Tutte le righe sono multiple della prima: rk(A)=1 &rArr; 0 &egrave; autovalore con m.g.=2. La traccia d&agrave; la somma degli autovalori.",
    "sol": "<b>0 (doppio) e 3a.</b> rk(A)=1 &rArr; m.g.(0)=3&minus;1=2=m.a.(0). L&rsquo;autovalore non nullo &egrave; tr&#8202;A=3a. m.g.=m.a. per ogni autovalore &rArr; diagonalizzabile (del resto A &egrave; simmetrica)."
   }
  ]
 },
 {
  "pool": "diag",
  "src": "b03 straordinario-2018-nov-06 Es.3 · polinomio minimo",
  "steps": [
   {
    "t": "Un endomorfismo f ha polinomio minimo m(t)=(t&minus;1)&sup2;(t+2). f &egrave; diagonalizzabile?",
    "opts": [
     {
      "x": "No: il polinomio minimo ha una radice multipla",
      "c": true
     },
     {
      "x": "S&igrave;: ha tre radici"
     },
     {
      "x": "No: il polinomio caratteristico ha grado 3"
     },
     {
      "x": "S&igrave;: le radici sono reali"
     }
    ],
    "hint": "f &egrave; diagonalizzabile &hArr; il polinomio MINIMO ha tutte radici SEMPLICI (molteplicit&agrave; 1).",
    "sol": "<b>No.</b> Criterio: diagonalizzabile &hArr; polinomio minimo a radici semplici. Qui (t&minus;1)&sup2; ha radice doppia, quindi esiste un blocco di Jordan J&#8322;(1) e f NON &egrave; diagonalizzabile. Radici reali non basta."
   }
  ]
 },
 {
  "pool": "diag",
  "src": "b03 scritto-2020-07-21 Es.3 · det(T&sup3;&minus;Id) via autovalori",
  "steps": [
   {
    "t": "T:&#8477;&sup3;&rarr;&#8477;&sup3; ha autovalori 3, 0, 0. T&sup3;&minus;Id &egrave; invertibile?",
    "opts": [
     {
      "x": "S&igrave;: gli autovalori di T&sup3;&minus;Id sono 26,&minus;1,&minus;1, tutti &ne;0",
      "c": true
     },
     {
      "x": "No: 0 &egrave; autovalore di T"
     },
     {
      "x": "No: det&#8202;T=0"
     },
     {
      "x": "S&igrave;: perch&eacute; T &egrave; diagonalizzabile"
     }
    ],
    "hint": "Gli autovalori di T&sup3;&minus;Id sono &mu;&sup3;&minus;1 al variare degli autovalori &mu; di T. Invertibile &hArr; nessuno &egrave; 0 &hArr; nessun &mu; ha &mu;&sup3;=1.",
    "sol": "<b>S&igrave;.</b> Per il teorema di mapping spettrale (gli autovalori di p(T) sono p(&lambda;)): da &mu;&isin;{3,0,0}, &mu;&sup3;&minus;1&isin;{26,&minus;1,&minus;1}, tutti non nulli, quindi det(T&sup3;&minus;Id)=26&middot;(&minus;1)&middot;(&minus;1)=26&ne;0. Che 0 sia autovalore di T non impedisce nulla, perch&eacute; 0&sup3;&minus;1=&minus;1&ne;0."
   }
  ]
 },
 {
  "pool": "diag",
  "src": "b03 scritto-2017-07-13 Es.5a · t per cui v &egrave; autovettore",
  "steps": [
   {
    "t": "Per quali t il vettore v=(2,2,1) &egrave; autovettore di M(t)? Come si imposta?",
    "opts": [
     {
      "x": "Si impone M(t)v = &lambda;v, cio&egrave; M(t)v proporzionale a v (incognite t,&lambda;)",
      "c": true
     },
     {
      "x": "Si impone det&#8202;M(t)=0"
     },
     {
      "x": "Si impone tr&#8202;M(t)=&lambda;"
     },
     {
      "x": "Si calcola il polinomio caratteristico in t"
     }
    ],
    "hint": "v &egrave; autovettore &hArr; M(t)v &egrave; PARALLELO a v. Basta imporre che M(t)v sia multiplo di v.",
    "sol": "<b>Si impone M(t)v proporzionale a v.</b> Le componenti di M(t)v=&lambda;v danno equazioni nelle due incognite t e &lambda;. Non serve n&eacute; il polinomio caratteristico n&eacute; det=0 (che riguarda l&rsquo;autovalore 0)."
   }
  ]
 },
 {
  "pool": "diag",
  "src": "b03 scritto_soluzioni20190205 Es.4iii · potenza A&sup2;&#8304;&sup1;&#8312;",
  "steps": [
   {
    "t": "A &egrave; diagonalizzabile, A=CDC&#8315;&sup1; con D=diag(1,&minus;1,2). Quanto vale A&sup2;&#8304;&sup1;&#8312;?",
    "opts": [
     {
      "x": "C&middot;diag(1,1,2&sup2;&#8304;&sup1;&#8312;)&middot;C&#8315;&sup1;",
      "c": true
     },
     {
      "x": "C&middot;diag(1,&minus;1,2&sup2;&#8304;&sup1;&#8312;)&middot;C&#8315;&sup1;"
     },
     {
      "x": "diag(1,1,2&sup2;&#8304;&sup1;&#8312;)"
     },
     {
      "x": "C&middot;diag(2018,&minus;2018,2&middot;2018)&middot;C&#8315;&sup1;"
     }
    ],
    "hint": "A&#8319;=CD&#8319;C&#8315;&sup1; e D&#8319; eleva ogni elemento diagonale alla n. Attenzione a (&minus;1)&sup2;&#8304;&sup1;&#8312; con esponente pari.",
    "sol": "<b>C&middot;diag(1,1,2&sup2;&#8304;&sup1;&#8312;)&middot;C&#8315;&sup1;.</b> A&#8319;=CD&#8319;C&#8315;&sup1; e D&sup2;&#8304;&sup1;&#8312;=diag(1,(&minus;1)&sup2;&#8304;&sup1;&#8312;,2&sup2;&#8304;&sup1;&#8312;)=diag(1,1,2&sup2;&#8304;&sup1;&#8312;) perch&eacute; 2018 &egrave; pari. Le colonne di C (autovettori) non cambiano."
   }
  ]
 },
 {
  "pool": "diag",
  "src": "b03 scritto-2020-07-01_2 Es.3 · F&sup3;&minus;4F invertibile",
  "steps": [
   {
    "t": "Un endomorfismo F ha autovalori 0, 1, &minus;1. F&sup3;&minus;4F &egrave; invertibile?",
    "opts": [
     {
      "x": "No: da &mu;=0 si ottiene 0&sup3;&minus;4&middot;0=0, quindi 0 &egrave; autovalore",
      "c": true
     },
     {
      "x": "S&igrave;: gli altri autovalori sono &minus;3 e 3"
     },
     {
      "x": "S&igrave;: perch&eacute; F &egrave; diagonalizzabile"
     },
     {
      "x": "No: perch&eacute; det&#8202;F=0 sempre"
     }
    ],
    "hint": "Gli autovalori di F&sup3;&minus;4F sono &mu;&sup3;&minus;4&mu;. Invertibile &hArr; nessuno &egrave; 0 &hArr; nessun &mu; annulla t(t&minus;2)(t+2).",
    "sol": "<b>No.</b> Per il teorema di mapping spettrale (autovalori di p(F) = p(&lambda;)): F&sup3;&minus;4F=F(F&sup2;&minus;4I) ha autovalori &mu;&sup3;&minus;4&mu; per &mu;&isin;{0,1,&minus;1}, cio&egrave; 0,&minus;3,3. Poich&eacute; 0 compare (da &mu;=0), F&sup3;&minus;4F ha nucleo non banale: NON invertibile."
   }
  ]
 },
 {
  "pool": "diag",
  "src": "modus operandi · sequenza di controllo",
  "steps": [
   {
    "t": "Per stabilire se una matrice A (n&times;n, su &#8450;) &egrave; diagonalizzabile, qual &egrave; la sequenza corretta di passi?",
    "opts": [
     {
      "x": "Polinomio caratteristico &rarr; autovalori con m.a. &rarr; per ogni &lambda; ripetuto calcolo m.g.=n&minus;rk(A&minus;&lambda;I) &rarr; diagonalizzabile &hArr; m.g.=m.a. su ogni &lambda;",
      "c": true
     },
     {
      "x": "Calcolo det&#8202;A: se &ne;0 allora &egrave; diagonalizzabile"
     },
     {
      "x": "Trovo gli autovettori e controllo che siano ortogonali"
     },
     {
      "x": "Verifico solo che la somma delle m.a. sia n"
     }
    ],
    "hint": "La diagonalizzabilit&agrave; si gioca sul confronto m.a. vs m.g. per OGNI autovalore, non sul determinante n&eacute; sull&rsquo;ortogonalit&agrave;.",
    "sol": "<b>Polinomio caratteristico &rarr; m.a. &rarr; m.g. &rarr; confronto.</b> Per il criterio di diagonalizzabilit&agrave; (m.a.=m.g. per ogni &lambda;) l&rsquo;unico controllo decisivo &egrave; il confronto delle molteplicit&agrave;. Il determinante non c&rsquo;entra (0 pu&ograve; essere autovalore di una diagonalizzabile); l&rsquo;ortogonalit&agrave; degli autovettori riguarda il teorema spettrale, non la sola diagonalizzabilit&agrave;; la somma delle m.a. &egrave; sempre n su &#8450; (teorema fondamentale dell&rsquo;algebra) e non discrimina nulla."
   }
  ]
 },
 {
  "pool": "diag",
  "src": "modus operandi · il controllo decisivo su m.a.=2",
  "steps": [
   {
    "t": "Calcolando il polinomio caratteristico trovi un autovalore &lambda; con molteplicit&agrave; algebrica 2. Qual &egrave; il controllo DECISIVO per la diagonalizzabilit&agrave; relativa a quel &lambda;?",
    "opts": [
     {
      "x": "Calcolare m.g.(&lambda;)=n&minus;rk(A&minus;&lambda;I) e verificare se vale 2",
      "c": true
     },
     {
      "x": "Verificare che esista un secondo autovalore distinto"
     },
     {
      "x": "Controllare che &lambda;&ne;0"
     },
     {
      "x": "Controllare che A sia triangolare"
     }
    ],
    "hint": "m.a.=2 da sola non decide nulla: serve la m.g. Il rischio &egrave; un blocco di Jordan con m.g.=1.",
    "sol": "<b>Calcolare m.g.(&lambda;)=n&minus;rk(A&minus;&lambda;I).</b> Per il criterio m.a.=m.g., su un autovalore con m.a.=2 la diagonalizzabilit&agrave; regge solo se m.g.=2. Se m.g.=1 esiste un blocco di Jordan J&#8322;(&lambda;) e A non &egrave; diagonalizzabile. L&rsquo;esistenza di altri autovalori o il valore di &lambda; sono irrilevanti per questo controllo."
   }
  ]
 },
 {
  "pool": "diag",
  "src": "modus operandi · concludere senza calcolare gli autospazi",
  "steps": [
   {
    "t": "Hai una matrice A reale 4&times;4 e vuoi evitare di calcolare i quattro autospazi. Quale singola osservazione, se vera, ti fa concludere SUBITO che A &egrave; diagonalizzabile su &#8477;?",
    "opts": [
     {
      "x": "Il polinomio caratteristico ha 4 radici reali DISTINTE",
      "c": true
     },
     {
      "x": "det&#8202;A&ne;0"
     },
     {
      "x": "tr&#8202;A &egrave; uguale alla somma degli autovalori"
     },
     {
      "x": "A ha almeno un autovalore con m.a.=1"
     }
    ],
    "hint": "Autovalori tutti distinti &rArr; m.g.=m.a.=1 su ognuno, senza calcolare nulla. Le altre opzioni non implicano la diagonalizzabilit&agrave;.",
    "sol": "<b>4 radici reali distinte.</b> n autovalori distinti sono condizione SUFFICIENTE: ogni m.g. vale 1 come la m.a., quindi diagonalizzabile senza toccare gli autospazi. det&#8202;A&ne;0 dice solo che 0 non &egrave; autovalore; tr=somma degli autovalori &egrave; sempre vero e non discrimina; un solo autovalore semplice non dice nulla sugli altri tre. (Altre scorciatoie legittime: A reale simmetrica &rArr; spettrale; oppure polinomio minimo a radici semplici.)"
   }
  ]
 },
 {
  "pool": "diag",
  "src": "prova · parametro e &#8477; vs &#8450; (multi-step)",
  "steps": [
   {
    "t": "<span class=\"lbl\">L1</span> Sia A(k)=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">k</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span></div></span> con k&isin;&#8477;. Quali sono i suoi autovalori?",
    "opts": [
     {
      "x": "1&plusmn;&radic;k",
      "c": true
     },
     {
      "x": "1 e k"
     },
     {
      "x": "k&plusmn;1"
     },
     {
      "x": "&plusmn;&radic;k"
     }
    ],
    "hint": "p(&lambda;)=(1&minus;&lambda;)&sup2;&minus;k. Risolvi (&lambda;&minus;1)&sup2;=k.",
    "sol": "<b>1&plusmn;&radic;k.</b> p(&lambda;)=(1&minus;&lambda;)&sup2;&minus;k=0 &rArr; (&lambda;&minus;1)&sup2;=k &rArr; &lambda;=1&plusmn;&radic;k.",
    "cont": "Continua &rarr; diagonalizzabilit&agrave; su &#8477;"
   },
   {
    "t": "<span class=\"lbl\">L2</span> Per quali k&isin;&#8477; la matrice A(k)=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">k</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span></div></span> &egrave; diagonalizzabile su &#8477;?",
    "opts": [
     {
      "x": "Solo k&gt;0",
      "c": true
     },
     {
      "x": "Per ogni k"
     },
     {
      "x": "Per ogni k&ge;0"
     },
     {
      "x": "Solo k=0"
     }
    ],
    "hint": "k&gt;0: due autovalori reali distinti. k=0: autovalore 1 doppio, ma A(0)=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span></div></span> &egrave; un blocco di Jordan. k&lt;0: &radic;k non &egrave; reale.",
    "sol": "<b>Solo k&gt;0.</b> Per k&gt;0 gli autovalori 1&plusmn;&radic;k sono reali distinti &rArr; diagonalizzabile. Per k=0, &lambda;=1 ha m.a.=2 ma A(0)&minus;I=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div></span> ha rango 1, m.g.=1&lt;2 (blocco di Jordan): non diagonalizzabile. Per k&lt;0 non ci sono autovalori reali.",
    "cont": "Continua &rarr; e su &#8450;?"
   },
   {
    "t": "<span class=\"lbl\">L3</span> Per k&lt;0, la stessa A(k) &egrave; diagonalizzabile su &#8450;?",
    "opts": [
     {
      "x": "S&igrave;: 1&plusmn;i&radic;|k| sono due autovalori complessi distinti",
      "c": true
     },
     {
      "x": "No: gli autovalori non sono reali"
     },
     {
      "x": "No: resta un blocco di Jordan"
     },
     {
      "x": "Solo se |k|=1"
     }
    ],
    "hint": "Su &#8450; l&rsquo;esistenza di due radici distinte basta, anche se immaginarie. Distinti &rArr; diagonalizzabile.",
    "sol": "<b>S&igrave;.</b> Per k&lt;0 vale &radic;k=i&radic;|k|, quindi gli autovalori 1&plusmn;i&radic;|k| sono complessi coniugati e DISTINTI. Autovalori distinti &rArr; diagonalizzabile su &#8450;. La non-realt&agrave; blocca solo la diagonalizzazione su &#8477;, non su &#8450;."
   }
  ]
 },
 {
  "pool": "diag",
  "src": "polinomio minimo vs caratteristico (combinazione di criteri)",
  "steps": [
   {
    "t": "Un endomorfismo A di &#8477;&#8308; ha polinomio caratteristico (t&minus;1)&sup2;(t&minus;2)&sup2; e si sa che (A&minus;I)(A&minus;2I)=0. A &egrave; diagonalizzabile?",
    "opts": [
     {
      "x": "S&igrave;: il polinomio minimo divide (t&minus;1)(t&minus;2), a radici semplici",
      "c": true
     },
     {
      "x": "No: il polinomio caratteristico ha due radici doppie"
     },
     {
      "x": "Non si pu&ograve; decidere senza calcolare gli autospazi"
     },
     {
      "x": "S&igrave;, ma solo su &#8450;"
     }
    ],
    "hint": "(A&minus;I)(A&minus;2I)=0 significa che (t&minus;1)(t&minus;2) ANNULLA A: il polinomio minimo lo divide. Conta il minimo, non il caratteristico.",
    "sol": "<b>S&igrave;.</b> Criterio: A diagonalizzabile &hArr; il polinomio MINIMO ha tutte radici semplici. Da (A&minus;I)(A&minus;2I)=0 il minimo divide (t&minus;1)(t&minus;2), che ha radici semplici 1 e 2: quindi il minimo &egrave; esattamente (t&minus;1)(t&minus;2) e A &egrave; diagonalizzabile. Le molteplicit&agrave; doppie del polinomio CARATTERISTICO non contano: dicono solo che i due autospazi hanno dimensione 2 ciascuno."
   }
  ]
 },
 {
  "pool": "diag",
  "src": "A diag &rArr; p(A) diag; la somma no (combinazione)",
  "steps": [
   {
    "t": "Sia A diagonalizzabile. Quale tra queste matrici potrebbe NON essere diagonalizzabile?",
    "opts": [
     {
      "x": "A+B, con B un&rsquo;altra matrice diagonalizzabile qualsiasi",
      "c": true
     },
     {
      "x": "A&sup3;"
     },
     {
      "x": "A<sup>T</sup>"
     },
     {
      "x": "A&#8315;&sup1; (se A &egrave; invertibile)"
     }
    ],
    "hint": "A diag &rArr; p(A) diag per ogni polinomio p (stessi autovettori); A<sup>T</sup> &egrave; simile ad A; ma la SOMMA di due diagonalizzabili pu&ograve; non esserlo.",
    "sol": "<b>A+B.</b> Se A=CDC&#8315;&sup1; allora A&sup3;=CD&sup3;C&#8315;&sup1; e A&#8315;&sup1;=CD&#8315;&sup1;C&#8315;&sup1; (stessi autovettori), mentre A<sup>T</sup> &egrave; simile ad A (stesso polinomio caratteristico e minimo): tutte diagonalizzabili. La somma no: A=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">&minus;1</span></div></span> (autovalori 1,&minus;1) e B=diag(&minus;1,1) sono diagonalizzabili, ma A+B=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div></span> &egrave; un blocco di Jordan. L&rsquo;insieme dei diagonalizzabili NON &egrave; chiuso per somma (gli addendi non condividono gli autovettori)."
   }
  ]
 },
 {
  "pool": "diag",
  "src": "matrici simili e diagonalizzabilit&agrave; (multi-step)",
  "steps": [
   {
    "t": "<span class=\"lbl\">L1</span> A e B sono simili (B=P&#8315;&sup1;AP) e A &egrave; diagonalizzabile. B &egrave; diagonalizzabile?",
    "opts": [
     {
      "x": "S&igrave;: la diagonalizzabilit&agrave; &egrave; invariante per similitudine",
      "c": true
     },
     {
      "x": "No: cambiando base si perde la diagonalizzabilit&agrave;"
     },
     {
      "x": "Solo se P &egrave; ortogonale"
     },
     {
      "x": "Solo se A &egrave; simmetrica"
     }
    ],
    "hint": "Se A=CDC&#8315;&sup1;, sostituisci: B=P&#8315;&sup1;CDC&#8315;&sup1;P=(P&#8315;&sup1;C)D(P&#8315;&sup1;C)&#8315;&sup1;. &Egrave; ancora una diagonalizzazione.",
    "sol": "<b>S&igrave;.</b> B=P&#8315;&sup1;AP=P&#8315;&sup1;CDC&#8315;&sup1;P=(P&#8315;&sup1;C)&#8202;D&#8202;(P&#8315;&sup1;C)&#8315;&sup1;: B &egrave; diagonalizzata da P&#8315;&sup1;C con la STESSA D. Matrici simili hanno gli stessi autovalori con le stesse m.a. e m.g., quindi sono diagonalizzabili o non lo sono insieme.",
    "cont": "Continua &rarr; il viceversa"
   },
   {
    "t": "<span class=\"lbl\">L2</span> A e B (3&times;3) hanno lo stesso polinomio caratteristico (t&minus;1)&sup3;. Sono necessariamente simili?",
    "opts": [
     {
      "x": "No: I&#8323; e il blocco di Jordan J&#8323;(1) hanno lo stesso caratteristico ma non sono simili",
      "c": true
     },
     {
      "x": "S&igrave;: stesso polinomio caratteristico &rArr; simili"
     },
     {
      "x": "S&igrave;: hanno gli stessi autovalori"
     },
     {
      "x": "No: (t&minus;1)&sup3; non &egrave; realizzabile da alcuna matrice"
     }
    ],
    "hint": "Lo stesso polinomio caratteristico NON basta per la similitudine: serve la stessa forma di Jordan (stesse m.g.). Confronta I&#8323; (diag.) con un blocco di Jordan.",
    "sol": "<b>No.</b> I&#8323; ha polinomio caratteristico (t&minus;1)&sup3; ed &egrave; diagonalizzabile (m.g.(1)=3); il blocco J&#8323;(1)=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div></span> ha lo stesso caratteristico ma m.g.(1)=1 e non &egrave; diagonalizzabile. Non possono essere simili, perch&eacute; la similitudine conserva la m.g. Lo stesso polinomio caratteristico &egrave; necessario ma non sufficiente per la similitudine."
   }
  ]
 }
];

Q.spettrale = [
 {
  "pool": "spettrale",
  "src": "tipo 3 · definitezza positiva (Sylvester)",
  "steps": [
   {
    "t": "La matrice simmetrica G=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">2</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">2</span></div></span> definisce un prodotto scalare su &#8477;&sup2; (cio&egrave; &egrave; definita positiva)?",
    "opts": [
     {
      "x": "S&igrave;: minori principali di testa 2&gt;0 e 3&gt;0",
      "c": true
     },
     {
      "x": "No: ha un elemento fuori diagonale"
     },
     {
      "x": "No: det=3&ne;1"
     },
     {
      "x": "S&igrave;, perch&eacute; &egrave; simmetrica"
     }
    ],
    "hint": "Criterio di Sylvester: tutti i minori principali di testa devono essere &gt; 0. La sola simmetria non basta.",
    "sol": "<b>S&igrave;.</b> Per il criterio di Sylvester (minori principali di testa &gt; 0): 2&gt;0 e det=4&minus;1=3&gt;0. Definita positiva &rArr; &egrave; un prodotto scalare."
   }
  ]
 },
 {
  "pool": "spettrale",
  "src": "tipo 3 · matrice indefinita",
  "steps": [
   {
    "t": "La matrice simmetrica G=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">2</span></div><div class=\"mrow\"><span class=\"mcell\">2</span><span class=\"mcell\">1</span></div></span> &egrave; definita positiva?",
    "opts": [
     {
      "x": "No: det=&minus;3&lt;0 (indefinita)",
      "c": true
     },
     {
      "x": "S&igrave;: il primo minore &egrave; 1&gt;0"
     },
     {
      "x": "S&igrave;: &egrave; simmetrica con diagonale positiva"
     },
     {
      "x": "No: non &egrave; invertibile"
     }
    ],
    "hint": "Avere diagonale positiva e primo minore positivo NON basta: controlla anche il determinante.",
    "sol": "<b>No.</b> Per il criterio di Sylvester il secondo minore di testa D&#8322;=det=1&minus;4=&minus;3&lt;0 &rArr; non definita positiva: segnatura (1,1), indefinita. Esiste un vettore con G(x,x)&lt;0, ad es. (1,&minus;1) d&agrave; 1&minus;4+1=&minus;2."
   }
  ]
 },
 {
  "pool": "spettrale",
  "src": "tipo 3 · completamento dei quadrati (semidefinita)",
  "steps": [
   {
    "t": "La forma q(x)=x&#8321;&sup2;+x&#8322;&sup2;+x&#8323;&sup2;+2x&#8321;x&#8322; definisce un prodotto scalare su &#8477;&sup3;?",
    "opts": [
     {
      "x": "No: &egrave; solo semidefinita, q(1,&minus;1,0)=0",
      "c": true
     },
     {
      "x": "S&igrave;: &egrave; somma di quadrati"
     },
     {
      "x": "No: manca il termine x&#8322;x&#8323;"
     },
     {
      "x": "S&igrave;: la matrice ha diagonale (1,1,1)"
     }
    ],
    "hint": "Completa i quadrati: x&#8321;&sup2;+2x&#8321;x&#8322;+x&#8322;&sup2; = (x&#8321;+x&#8322;)&sup2;. Cosa resta? E quando si annulla?",
    "sol": "<b>No.</b> Con il metodo di Lagrange (completamento dei quadrati): q=(x&#8321;+x&#8322;)&sup2;+x&#8323;&sup2;, semidefinita positiva. Si annulla su (1,&minus;1,0)&ne;0, quindi degenere: non &egrave; un prodotto scalare."
   }
  ]
 },
 {
  "pool": "spettrale",
  "src": "tipo 3 · Sylvester 3&times;3",
  "steps": [
   {
    "t": "La matrice G=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">2</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">2</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div></span> &egrave; definita positiva?",
    "opts": [
     {
      "x": "S&igrave;: minori di testa 2, 3, 3 tutti &gt;0",
      "c": true
     },
     {
      "x": "No: c&rsquo;&egrave; uno 0 sulla diagonale di blocco"
     },
     {
      "x": "No: non &egrave; diagonale"
     },
     {
      "x": "S&igrave;, ma solo perch&eacute; det=3"
     }
    ],
    "hint": "Calcola in ordine i tre minori di testa: 2, poi il 2&times;2, poi il 3&times;3.",
    "sol": "<b>S&igrave;.</b> Per il criterio di Sylvester i minori di testa sono 2&gt;0; det&#8202;<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">2</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">2</span></div></span>=3&gt;0; det&#8202;G=3&middot;1=3&gt;0. Tutti positivi: definita positiva."
   }
  ]
 },
 {
  "pool": "spettrale",
  "src": "Prova23_01_23_sol Es. 1 (GS su generatori dipendenti)",
  "steps": [
   {
    "t": "<span class=\"lbl\">L1</span> Siano v&#8321;,v&#8322;,v&#8323; &isin; &#8477;&#8308; con la relazione 2v&#8321;&minus;2v&#8322;+v&#8323;=0 (e v&#8321;,v&#8322; indipendenti). Quanto vale dim&#8202;Span(v&#8321;,v&#8322;,v&#8323;)?",
    "opts": [
     {
      "x": "2",
      "c": true
     },
     {
      "x": "3"
     },
     {
      "x": "1"
     },
     {
      "x": "4"
     }
    ],
    "hint": "La relazione 2v&#8321;&minus;2v&#8322;+v&#8323;=0 dice che v&#8323;=&minus;2v&#8321;+2v&#8322;: un generatore &egrave; ridondante.",
    "sol": "<b>2.</b> v&#8323;=2v&#8322;&minus;2v&#8321; dipende da v&#8321;,v&#8322;. Lo Span ha dimensione 2.",
    "cont": "Continua &rarr; come applicare Gram&ndash;Schmidt"
   },
   {
    "t": "<span class=\"lbl\">L2</span> Per ottenere una base ortonormale di W=Span(v&#8321;,v&#8322;,v&#8323;), come applichi Gram&ndash;Schmidt?",
    "opts": [
     {
      "x": "Estraggo prima una base ({v&#8321;,v&#8322;}), poi applico GS a quella",
      "c": true
     },
     {
      "x": "Applico GS direttamente a v&#8321;,v&#8322;,v&#8323; in ordine"
     },
     {
      "x": "Applico GS e poi scarto il vettore pi&ugrave; corto"
     },
     {
      "x": "Normalizzo v&#8321;,v&#8322;,v&#8323; e ho gi&agrave; la base"
     }
    ],
    "hint": "<b>GS si applica a una base, non a generatori dipendenti.</b> Su v&#8321;,v&#8322;,v&#8323; il terzo passo produrrebbe il vettore nullo (non normalizzabile).",
    "sol": "<b>Estrai prima una base.</b> Applicando GS a tutti e tre, al terzo passo v&#8323; meno le sue proiezioni d&agrave; 0: non normalizzabile. Si lavora su {v&#8321;,v&#8322;}, ottenendo una ONB di 2 vettori."
   }
  ]
 },
 {
  "pool": "spettrale",
  "src": "tipo 3 · passo di Gram&ndash;Schmidt",
  "steps": [
   {
    "t": "In &#8477;&#179; standard, parti da v&#8321;=(1,1,0) e v&#8322;=(1,0,1). Qual &egrave; il secondo vettore ORTOGONALE u&#8322; del processo di Gram&ndash;Schmidt (senza normalizzare)?",
    "opts": [
     {
      "x": "(&frac12;, &minus;&frac12;, 1)",
      "c": true
     },
     {
      "x": "(1, 0, 1)"
     },
     {
      "x": "(&frac12;, &frac12;, 0)"
     },
     {
      "x": "(0, &minus;1, 1)"
     }
    ],
    "hint": "u&#8322; = v&#8322; &minus; (&#9001;v&#8322;,v&#8321;&#9002;/&#9001;v&#8321;,v&#8321;&#9002;)&#8202;v&#8321;. Calcola &#9001;v&#8322;,v&#8321;&#9002;=1 e &#9001;v&#8321;,v&#8321;&#9002;=2.",
    "sol": "<b>(&frac12;, &minus;&frac12;, 1).</b> u&#8322;=(1,0,1)&minus;&frac12;(1,1,0)=(&frac12;,&minus;&frac12;,1). Verifica: u&#8322;&middot;v&#8321;=&frac12;&minus;&frac12;+0=0."
   }
  ]
 },
 {
  "pool": "spettrale",
  "src": "tipo 3 · ortogonale &ne; ortonormale (trabocchetto)",
  "steps": [
   {
    "t": "Una base &egrave; fatta dei vettori ortogonali w&#8321;=(1,1,0), w&#8322;=(1,&minus;1,0), w&#8323;=(0,0,3). La consegna chiede una base ORTONORMALE. &Egrave; gi&agrave; ortonormale?",
    "opts": [
     {
      "x": "No: vanno normalizzati (&#8741;w&#8321;&#8741;=&radic;2, &#8741;w&#8323;&#8741;=3)",
      "c": true
     },
     {
      "x": "S&igrave;: sono ortogonali a due a due"
     },
     {
      "x": "S&igrave;: formano una base di &#8477;&sup3;"
     },
     {
      "x": "No: w&#8323; non &egrave; ortogonale agli altri"
     }
    ],
    "hint": "Ortogonale significa solo &#9001;w<sub>i</sub>,w<sub>j</sub>&#9002;=0 per i&ne;j. Ortonormale richiede ANCHE &#8741;w<sub>i</sub>&#8741;=1.",
    "sol": "<b>No.</b> Sono ortogonali ma non unitari: &#8741;w&#8321;&#8741;=&#8741;w&#8322;&#8741;=&radic;2, &#8741;w&#8323;&#8741;=3. La ONB &egrave; w&#8321;/&radic;2, w&#8322;/&radic;2, w&#8323;/3. Dimenticare la normalizzazione &egrave; l&rsquo;errore tipico."
   }
  ]
 },
 {
  "pool": "spettrale",
  "src": "tipo 3 · complemento ortogonale in &#8477;&#8308;",
  "steps": [
   {
    "t": "In &#8477;&#8308; standard sia W=Span((1,1,0,0),(0,0,1,1)). Quanto vale dim&#8202;W<sup>&#8869;</sup> e da quali equazioni &egrave; descritto?",
    "opts": [
     {
      "x": "dim 2: { x&#8321;+x&#8322;=0, x&#8323;+x&#8324;=0 }",
      "c": true
     },
     {
      "x": "dim 1: { x&#8321;+x&#8322;+x&#8323;+x&#8324;=0 }"
     },
     {
      "x": "dim 2: { x&#8321;=x&#8322;, x&#8323;=x&#8324; }"
     },
     {
      "x": "dim 3"
     }
    ],
    "hint": "W<sup>&#8869;</sup> = vettori ortogonali a ENTRAMBI i generatori: imponi il prodotto scalare nullo con (1,1,0,0) e con (0,0,1,1).",
    "sol": "<b>dim 2, { x&#8321;+x&#8322;=0, x&#8323;+x&#8324;=0 }.</b> L&rsquo;ortogonalit&agrave; ai generatori d&agrave; queste due equazioni; per il teorema del complemento ortogonale dim&#8202;W<sup>&#8869;</sup>=n&minus;dim&#8202;W=4&minus;2=2, con base (1,&minus;1,0,0),(0,0,1,&minus;1)."
   }
  ]
 },
 {
  "pool": "spettrale",
  "src": "tipo 3 · teorema spettrale (diagonalizzazione ortogonale)",
  "steps": [
   {
    "t": "<span class=\"lbl\">L1</span> Sia A=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">2</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">2</span></div></span> simmetrica. Quali sono i suoi autovalori?",
    "opts": [
     {
      "x": "1 e 3",
      "c": true
     },
     {
      "x": "2 e 2"
     },
     {
      "x": "0 e 4"
     },
     {
      "x": "&minus;1 e 3"
     }
    ],
    "hint": "p(&lambda;)=&lambda;&sup2;&minus;4&lambda;+3.",
    "sol": "<b>1 e 3.</b> p(&lambda;)=(&lambda;&minus;1)(&lambda;&minus;3).",
    "cont": "Continua &rarr; base ortonormale di autovettori"
   },
   {
    "t": "<span class=\"lbl\">L2</span> Una base ORTONORMALE di autovettori di A=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">2</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">2</span></div></span> &egrave;:",
    "opts": [
     {
      "x": "(1,1)/&radic;2 per &lambda;=3 e (1,&minus;1)/&radic;2 per &lambda;=1",
      "c": true
     },
     {
      "x": "(1,1) per &lambda;=3 e (1,&minus;1) per &lambda;=1"
     },
     {
      "x": "(1,0) e (0,1)"
     },
     {
      "x": "(2,1) e (1,2)"
     }
    ],
    "hint": "Per matrice simmetrica gli autospazi di autovalori distinti sono gi&agrave; ortogonali: resta solo da NORMALIZZARE.",
    "sol": "<b>(1,1)/&radic;2 e (1,&minus;1)/&radic;2.</b> Autovettori (1,1) (&lambda;=3) e (1,&minus;1) (&lambda;=1) sono ortogonali (teorema spettrale); divisi per &radic;2 danno la ONB. La matrice ortogonale Q con queste colonne soddisfa Q<sup>T</sup>AQ=diag(3,1)."
   }
  ]
 },
 {
  "pool": "spettrale",
  "src": "tipo 3 · ortogonalit&agrave; automatica (spettrale)",
  "steps": [
   {
    "t": "Per una matrice reale SIMMETRICA, autovettori relativi ad autovalori distinti sono...",
    "opts": [
     {
      "x": "sempre ortogonali tra loro",
      "c": true
     },
     {
      "x": "sempre paralleli"
     },
     {
      "x": "ortogonali solo dopo Gram&ndash;Schmidt"
     },
     {
      "x": "in generale non ortogonali"
     }
    ],
    "hint": "&Egrave; il cuore del teorema spettrale: se A=A<sup>T</sup>, &lambda;&#9001;u,v&#9002;=&#9001;Au,v&#9002;=&#9001;u,Av&#9002;=&mu;&#9001;u,v&#9002;.",
    "sol": "<b>Sempre ortogonali.</b> Da (&lambda;&minus;&mu;)&#9001;u,v&#9002;=0 con &lambda;&ne;&mu; segue &#9001;u,v&#9002;=0. Per autospazi di dim &ge; 2 si applica GS solo DENTRO il singolo autospazio."
   }
  ]
 },
 {
  "pool": "spettrale",
  "src": "tipo 3 · spettrale richiede simmetria",
  "steps": [
   {
    "t": "La matrice A=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">&minus;1</span><span class=\"mcell\">0</span></div></span> &egrave; ortogonalmente diagonalizzabile su &#8477;?",
    "opts": [
     {
      "x": "No: non &egrave; simmetrica (autovalori &plusmn;i)",
      "c": true
     },
     {
      "x": "S&igrave;: &egrave; ortogonale, quindi diagonalizzabile"
     },
     {
      "x": "S&igrave;: ogni matrice 2&times;2 lo &egrave;"
     },
     {
      "x": "No: il determinante &egrave; 1"
     }
    ],
    "hint": "Il teorema spettrale (reale) vale per matrici SIMMETRICHE. Questa &egrave; antisimmetrica.",
    "sol": "<b>No.</b> A&ne;A<sup>T</sup>: non si applica lo spettrale reale. Gli autovalori sono &plusmn;i, nemmeno reali. (&Egrave; per&ograve; diagonalizzabile su &#8450; unitariamente.)"
   }
  ]
 },
 {
  "pool": "spettrale",
  "src": "tipo 3 · prodotto scalare di Frobenius su M&#8322;",
  "steps": [
   {
    "t": "Su M&#8322;(&#8477;), &#9001;A,B&#9002;=tr(A<sup>T</sup>B) &egrave; un prodotto scalare. Rispetto ad esso, la base canonica { E&#8321;&#8321;,E&#8321;&#8322;,E&#8322;&#8321;,E&#8322;&#8322; } &egrave;...",
    "opts": [
     {
      "x": "ortonormale",
      "c": true
     },
     {
      "x": "ortogonale ma non normalizzata"
     },
     {
      "x": "una base non ortogonale"
     },
     {
      "x": "non una base"
     }
    ],
    "hint": "&#9001;E<sub>ij</sub>,E<sub>kl</sub>&#9002;=tr(E<sub>ij</sub><sup>T</sup>E<sub>kl</sub>) vale 1 se (i,j)=(k,l) e 0 altrimenti.",
    "sol": "<b>Ortonormale.</b> &#9001;A,B&#9002;=tr(A<sup>T</sup>B)=&sum;<sub>ij</sub>a<sub>ij</sub>b<sub>ij</sub> &egrave; il prodotto scalare standard sulle 4 entrate; le E<sub>ij</sub> sono i versori coordinati."
   }
  ]
 },
 {
  "pool": "spettrale",
  "src": "tipo 3 · norma di Frobenius",
  "steps": [
   {
    "t": "Con &#9001;A,B&#9002;=tr(A<sup>T</sup>B), quanto vale la norma di A=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div></span>?",
    "opts": [
     {
      "x": "&radic;3",
      "c": true
     },
     {
      "x": "3"
     },
     {
      "x": "2"
     },
     {
      "x": "&radic;2"
     }
    ],
    "hint": "&#8741;A&#8741;&sup2;=tr(A<sup>T</sup>A)=somma dei quadrati di tutte le entrate.",
    "sol": "<b>&radic;3.</b> &#8741;A&#8741;&sup2;=1&sup2;+1&sup2;+0&sup2;+1&sup2;=3."
   }
  ]
 },
 {
  "pool": "spettrale",
  "src": "tipo 3 · prodotto scalare integrale",
  "steps": [
   {
    "t": "Su &#8477;[t]<sub>&le;2</sub> la formula &#9001;p,q&#9002;=&int;<sub>0</sub><sup>1</sup>p(t)q(t)&#8202;dt &egrave; un prodotto scalare?",
    "opts": [
     {
      "x": "S&igrave;: &egrave; bilineare, simmetrico e &#9001;p,p&#9002;&gt;0 per p&ne;0",
      "c": true
     },
     {
      "x": "No: l&rsquo;integrale pu&ograve; essere negativo"
     },
     {
      "x": "No: solo su funzioni continue, non su polinomi"
     },
     {
      "x": "S&igrave;, ma &egrave; degenere"
     }
    ],
    "hint": "&#9001;p,p&#9002;=&int;<sub>0</sub><sup>1</sup>p(t)&sup2;dt &ge; 0, e vale 0 solo se p&equiv;0 su [0,1], cio&egrave; (essendo polinomio) p=0.",
    "sol": "<b>S&igrave;.</b> Bilineare e simmetrico per linearit&agrave; dell&rsquo;integrale; &#9001;p,p&#9002;=&int;p&sup2;&ge;0, nullo solo se p si annulla su tutto [0,1], cio&egrave; p=0. Definito positivo."
   }
  ]
 },
 {
  "pool": "spettrale",
  "src": "tipo 3 · valutazioni in n+1 punti (nodi distinti)",
  "steps": [
   {
    "t": "Su &#8477;[t]<sub>&le;2</sub> si pone &#9001;p,q&#9002;=p(a&#8320;)q(a&#8320;)+p(a&#8321;)q(a&#8321;)+p(a&#8322;)q(a&#8322;). Quando &egrave; un prodotto scalare (non degenere)?",
    "opts": [
     {
      "x": "Se e solo se i tre nodi a&#8320;,a&#8321;,a&#8322; sono distinti",
      "c": true
     },
     {
      "x": "Sempre, qualunque siano i nodi"
     },
     {
      "x": "Solo se i nodi sono in [0,1]"
     },
     {
      "x": "Mai: con sole 3 valutazioni &egrave; degenere"
     }
    ],
    "hint": "&#9001;p,p&#9002;=&sum;p(a<sub>i</sub>)&sup2;=0 obbliga p a annullarsi nei nodi. Un polinomio di grado &le;2 con 3 radici distinte &egrave; nullo; con radici ripetute no.",
    "sol": "<b>Nodi distinti.</b> Per il principio di identit&agrave; dei polinomi (un polinomio di grado &le;2 con 3 radici distinte &egrave; nullo): con 3 nodi distinti &#9001;p,p&#9002;=0 &rArr; p ha 3 radici &rArr; p=0, forma non degenere. Se due nodi coincidono restano 2 valutazioni effettive: esiste p&ne;0 (grado 2) che si annulla in entrambi &rArr; degenere."
   }
  ]
 },
 {
  "pool": "spettrale",
  "src": "tipo 3 · proiezione e distanza (L1+L2)",
  "steps": [
   {
    "t": "<span class=\"lbl\">L1</span> In &#8477;&#179; standard sia W=Span((1,0,0),(0,1,0)). Qual &egrave; la proiezione ortogonale di x=(2,3,5) su W?",
    "opts": [
     {
      "x": "(2,3,0)",
      "c": true
     },
     {
      "x": "(0,0,5)"
     },
     {
      "x": "(2,3,5)"
     },
     {
      "x": "(1,1,0)"
     }
    ],
    "hint": "W &egrave; il piano z=0: la proiezione azzera la componente fuori da W (la coordinata z).",
    "sol": "<b>(2,3,0).</b> Proiettare sul piano z=0 conserva le prime due coordinate e annulla la terza.",
    "cont": "Continua &rarr; calcola la distanza"
   },
   {
    "t": "<span class=\"lbl\">L2</span> Qual &egrave; la distanza di x=(2,3,5) dal sottospazio W?",
    "opts": [
     {
      "x": "5",
      "c": true
     },
     {
      "x": "&radic;38"
     },
     {
      "x": "0"
     },
     {
      "x": "&radic;13"
     }
    ],
    "hint": "dist(x,W)=&#8741;x &minus; proj<sub>W</sub>x&#8741;, cio&egrave; la norma della componente in W<sup>&#8869;</sup>.",
    "sol": "<b>5.</b> x&minus;proj<sub>W</sub>x=(0,0,5), di norma 5. La distanza &egrave; sempre la norma della parte ortogonale, mai la norma di x."
   }
  ]
 },
 {
  "pool": "spettrale",
  "src": "tipo 3 · angolo tra vettori",
  "steps": [
   {
    "t": "In &#8477;&sup2; standard, qual &egrave; l&rsquo;angolo tra u=(1,0) e v=(1,1)?",
    "opts": [
     {
      "x": "45&deg;",
      "c": true
     },
     {
      "x": "90&deg;"
     },
     {
      "x": "30&deg;"
     },
     {
      "x": "60&deg;"
     }
    ],
    "hint": "cos&theta; = &#9001;u,v&#9002; / (&#8741;u&#8741;&#8741;v&#8741;). Calcola &#9001;u,v&#9002;=1, &#8741;u&#8741;=1, &#8741;v&#8741;=&radic;2.",
    "sol": "<b>45&deg;.</b> Per la disuguaglianza di Cauchy&ndash;Schwarz la formula cos&theta;=&#9001;u,v&#9002;/(&#8741;u&#8741;&#8741;v&#8741;) &egrave; ben posta (|cos&theta;|&le;1): qui cos&theta;=1/&radic;2 &rArr; &theta;=45&deg;."
   }
  ]
 },
 {
  "pool": "spettrale",
  "src": "tipo 3 · vettore unitario / normalizzazione",
  "steps": [
   {
    "t": "In &#8477;&#179; standard, il versore associato a v=(2,&minus;1,2) &egrave;:",
    "opts": [
     {
      "x": "(2,&minus;1,2)/3",
      "c": true
     },
     {
      "x": "(2,&minus;1,2)/&radic;3"
     },
     {
      "x": "(2,&minus;1,2)/5"
     },
     {
      "x": "(2,&minus;1,2)"
     }
    ],
    "hint": "&#8741;v&#8741;=&radic;(2&sup2;+(&minus;1)&sup2;+2&sup2;)=&radic;9.",
    "sol": "<b>(2,&minus;1,2)/3.</b> &#8741;v&#8741;=&radic;9=3: il versore &egrave; v/&#8741;v&#8741;. Numeri scelti per dare norma intera."
   }
  ]
 },
 {
  "pool": "spettrale",
  "src": "Compito24_06_16 Es. 1 · prodotto scalare non standard",
  "steps": [
   {
    "t": "Su &#8477;&sup3; si pone &#9001;X,Y&#9002;=x&#8321;y&#8321;+4x&#8322;y&#8322;+2x&#8323;y&#8323;+2x&#8322;y&#8323;+2x&#8323;y&#8322;, con matrice G=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">4</span><span class=\"mcell\">2</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">2</span><span class=\"mcell\">2</span></div></span>. &Egrave; un prodotto scalare (definito positivo)?",
    "opts": [
     {
      "x": "S&igrave;: minori di testa 1, 4, 4 tutti &gt;0",
      "c": true
     },
     {
      "x": "No: c&rsquo;&egrave; un termine misto x&#8322;x&#8323;"
     },
     {
      "x": "No: det&#8202;G=0"
     },
     {
      "x": "S&igrave;, ma &egrave; solo semidefinito"
     }
    ],
    "hint": "Criterio di Sylvester sui minori di testa di G. Il termine misto d&agrave; a&#8322;&#8323;=a&#8323;&#8322;=2. Calcola D&#8321;=1, D&#8322;, D&#8323;=det&#8202;G.",
    "sol": "<b>S&igrave;.</b> Per il criterio di Sylvester: D&#8321;=1&gt;0; D&#8322;=det<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">4</span></div></span>=4&gt;0; D&#8323;=det&#8202;G=1&middot;(4&middot;2&minus;2&middot;2)=4&gt;0. Tutti positivi &rArr; G definita positiva: &egrave; un prodotto scalare. Il termine misto NON impedisce la definitezza."
   }
  ]
 },
 {
  "pool": "spettrale",
  "src": "Compito29_1_14 Es. 1 · W&#8869; da un generatore",
  "steps": [
   {
    "t": "In &#8477;&#179; standard sia W=Span((1,1,1)). Da quali equazioni cartesiane &egrave; descritto W<sup>&#8869;</sup> e quanto vale dim&#8202;W<sup>&#8869;</sup>?",
    "opts": [
     {
      "x": "{ x&#8321;+x&#8322;+x&#8323;=0 }, dim 2",
      "c": true
     },
     {
      "x": "{ x&#8321;=x&#8322;=x&#8323; }, dim 1"
     },
     {
      "x": "{ x&#8321;+x&#8322;+x&#8323;=0 }, dim 1"
     },
     {
      "x": "dim 0"
     }
    ],
    "hint": "W<sup>&#8869;</sup> = vettori ortogonali al generatore (1,1,1): un&rsquo;unica equazione. dim&#8202;W<sup>&#8869;</sup>=3&minus;dim&#8202;W.",
    "sol": "<b>{ x&#8321;+x&#8322;+x&#8323;=0 }, dim 2.</b> L&rsquo;ortogonalit&agrave; a (1,1,1) d&agrave; la sola equazione x&#8321;+x&#8322;+x&#8323;=0; per il teorema del complemento ortogonale dim&#8202;W<sup>&#8869;</sup>=n&minus;dim&#8202;W=3&minus;1=2."
   }
  ]
 },
 {
  "pool": "spettrale",
  "src": "b03 scritto_soluzioni20190121 Es.4 · prodotto scalare per valutazioni",
  "steps": [
   {
    "t": "Su &#8477;[x]<sub>&le;2</sub> si pone &#9001;p,q&#9002;=p(0)q(0)+p(1)q(1)+p(2)q(2). &Egrave; definito positivo?",
    "opts": [
     {
      "x": "S&igrave;: &#9001;p,p&#9002;=0 &rArr; p(0)=p(1)=p(2)=0 &rArr; p=0 (3 radici, grado &le;2)",
      "c": true
     },
     {
      "x": "No: &egrave; solo semidefinito"
     },
     {
      "x": "S&igrave; solo su &#8450;"
     },
     {
      "x": "No: la matrice non &egrave; simmetrica"
     }
    ],
    "hint": "&#9001;p,p&#9002;=p(0)&sup2;+p(1)&sup2;+p(2)&sup2;&ge;0; &egrave; nullo solo se p si annulla in 3 punti distinti.",
    "sol": "<b>S&igrave;.</b> &Egrave; simmetrico e &#9001;p,p&#9002;=&Sigma;p(x&#8342;)&sup2;&ge;0, nullo &hArr; p(0)=p(1)=p(2)=0. Per il principio di identit&agrave; dei polinomi, un polinomio di grado &le;2 con 3 radici distinte &egrave; identicamente nullo: la forma &egrave; non degenere e definita positiva. Servono almeno 3 nodi distinti."
   }
  ]
 },
 {
  "pool": "spettrale",
  "src": "b03 scritto_soluzioni20190121 Es.4 · W&#8869; per prodotto non standard",
  "steps": [
   {
    "t": "Con &#9001;p,q&#9002;=p(0)q(0)+p(1)q(1)+p(2)q(2), sia U={p : p(0)=0}. Una base di U<sup>&#8869;</sup>?",
    "opts": [
     {
      "x": "Span((x&minus;1)(x&minus;2))",
      "c": true
     },
     {
      "x": "Span(x)"
     },
     {
      "x": "Span(1)"
     },
     {
      "x": "Span(x,x&sup2;)"
     }
    ],
    "hint": "q&isin;U<sup>&#8869;</sup> &hArr; &#9001;q,x&#9002;=0 e &#9001;q,x&sup2;&#9002;=0, cio&egrave; q(1)+2q(2)=0 e q(1)+4q(2)=0.",
    "sol": "<b>Span((x&minus;1)(x&minus;2)).</b> Imponendo &#9001;q,x&#9002;=q(1)+2q(2)=0 e &#9001;q,x&sup2;&#9002;=q(1)+4q(2)=0 si ricava q(1)=q(2)=0: q si annulla in 1 e 2, quindi q=c(x&minus;1)(x&minus;2). dim&#8202;U<sup>&#8869;</sup>=1=3&minus;dim&#8202;U."
   }
  ]
 },
 {
  "pool": "spettrale",
  "src": "b03 soluzioniesame20200623 Es.2 · prodotto di Frobenius su M&#8322;",
  "steps": [
   {
    "t": "Su M&#8322;(&#8477;) si pone &#9001;A,B&#9002;=tr(AB<sup>T</sup>). &Egrave; definito positivo, e quanto vale dim&#8202;N<sup>&#8869;</sup> con N={tr&#8202;A=0}?",
    "opts": [
     {
      "x": "&#9001;A,A&#9002;=&Sigma;a&#8342;&#8343;&sup2;&ge;0 (Frobenius); dim&#8202;N=3 &rArr; dim&#8202;N<sup>&#8869;</sup>=1",
      "c": true
     },
     {
      "x": "non &egrave; definito positivo; dim 2"
     },
     {
      "x": "&#9001;A,A&#9002; pu&ograve; essere negativo; dim 0"
     },
     {
      "x": "dim&#8202;N<sup>&#8869;</sup>=3"
     }
    ],
    "hint": "tr(AA<sup>T</sup>)=&Sigma;a&#8342;&#8343;&sup2; &egrave; la somma dei quadrati delle entrate. N={tr&#8202;A=0} &egrave; un iperpiano (dim 3).",
    "sol": "<b>&#9001;A,A&#9002;=&Sigma;a&#8342;&#8343;&sup2;&ge;0, nullo solo se A=0: prodotto di Frobenius, definito positivo.</b> N={tr&#8202;A=0} ha dim 3, quindi N<sup>&#8869;</sup> ha dim 4&minus;3=1, generato dall&rsquo;identit&agrave; I (poich&eacute; &#9001;A,I&#9002;=tr&#8202;A)."
   }
  ]
 },
 {
  "pool": "spettrale",
  "src": "b03 soluzioniesame20200713 Es.1 / b01 · base unitaria su &#8450;&sup3;",
  "steps": [
   {
    "t": "T:&#8450;&sup3;&rarr;&#8450;&sup3; &egrave; autoaggiunto (matrice hermitiana). Per una base unitaria di autovettori in un autospazio di dim 2 si usa:",
    "opts": [
     {
      "x": "Gram&ndash;Schmidt rispetto al prodotto HERMITIANO, con &#9001;u,v&#9002;=&Sigma;u&#8342;v&#8342;&#773;",
      "c": true
     },
     {
      "x": "Gram&ndash;Schmidt euclideo reale"
     },
     {
      "x": "la trasposta semplice"
     },
     {
      "x": "nessuna ortogonalizzazione"
     }
    ],
    "hint": "Su &#8450; il prodotto &egrave; hermitiano: coniuga uno dei due fattori. Autospazi di autovalori diversi sono gi&agrave; ortogonali; dentro l&rsquo;autospazio degenere si ortonormalizza.",
    "sol": "<b>Gram&ndash;Schmidt hermitiano.</b> Gli autovalori di un operatore autoaggiunto sono reali e gli autospazi di autovalori distinti sono ortogonali; nell&rsquo;autospazio di dim 2 si applica GS col prodotto &#9001;u,v&#9002;=&Sigma;u&#8342;v&#8342;&#773; e si normalizza (&#8741;v&#8741;&sup2;=&#9001;v,v&#9002;). La matrice degli autovettori risulta unitaria."
   }
  ]
 },
 {
  "pool": "spettrale",
  "src": "b03 soluzioniesame20200713 Es.3 · prodotto hermitiano su &#8450;&#8322;[z]",
  "steps": [
   {
    "t": "Su &#8450;[z]<sub>&le;2</sub> si pone &#9001;p,q&#9002;=p(0)&#8202;q(0)&#773;+p(1)&#8202;q(1)&#773;+p(i)&#8202;q(i)&#773;. &Egrave; definito positivo?",
    "opts": [
     {
      "x": "S&igrave;: i nodi 0,1,i sono 3 punti distinti",
      "c": true
     },
     {
      "x": "No: i &egrave; immaginario"
     },
     {
      "x": "S&igrave; solo per polinomi reali"
     },
     {
      "x": "No: non &egrave; hermitiano"
     }
    ],
    "hint": "&#9001;p,p&#9002;=|p(0)|&sup2;+|p(1)|&sup2;+|p(i)|&sup2;&ge;0; &egrave; nullo &hArr; p si annulla in 0,1,i (3 punti distinti).",
    "sol": "<b>S&igrave;.</b> &Egrave; hermitiano e &#9001;p,p&#9002;=|p(0)|&sup2;+|p(1)|&sup2;+|p(i)|&sup2;&ge;0, nullo solo se p(0)=p(1)=p(i)=0. Per il principio di identit&agrave; dei polinomi, un polinomio di grado &le;2 con 3 radici distinte (0,1,i) &egrave; nullo: definito positivo. Che i sia immaginario non conta, bastano nodi distinti."
   }
  ]
 },
 {
  "pool": "spettrale",
  "src": "tipo 3 · MODUS OPERANDI · diagonalizzazione ortogonale",
  "steps": [
   {
    "t": "<b>MODUS OPERANDI.</b> Per diagonalizzare ORTOGONALMENTE una matrice simmetrica A (trovare Q ortogonale con Q<sup>T</sup>AQ diagonale), qual &egrave; la sequenza corretta?",
    "opts": [
     {
      "x": "Autovalori &rarr; base di ogni autospazio &rarr; GS DENTRO ciascun autospazio &rarr; normalizzo &rarr; colonne in Q",
      "c": true
     },
     {
      "x": "Applico GS alle colonne di A, poi calcolo gli autovalori della matrice ortogonalizzata"
     },
     {
      "x": "Trovo gli autovettori e li metto come colonne di Q senza normalizzare"
     },
     {
      "x": "Diagonalizzo con C qualunque (C&#8315;&sup1;AC) e poi pongo Q=C<sup>T</sup>"
     }
    ],
    "hint": "Per il teorema spettrale gli autospazi di autovalori DISTINTI sono gi&agrave; ortogonali: GS serve solo DENTRO un autospazio di dim&#8202;&ge;2. La normalizzazione &egrave; obbligatoria, altrimenti Q non &egrave; ortogonale.",
    "sol": "<b>Autovalori &rarr; base di ogni autospazio &rarr; GS dentro ciascun autospazio &rarr; normalizzo &rarr; colonne in Q.</b> Per il teorema spettrale una matrice reale simmetrica &egrave; ortogonalmente diagonalizzabile: gli autospazi relativi ad autovalori distinti sono automaticamente ortogonali, quindi Gram&ndash;Schmidt si applica solo dentro un singolo autospazio degenere. Q ortogonale richiede colonne di norma 1: saltare la normalizzazione (opzione 3) d&agrave; solo C invertibile, non Q ortogonale. GS sulle colonne di A (opzione 1) non c&rsquo;entra con gli autovettori."
   }
  ]
 },
 {
  "pool": "spettrale",
  "src": "tipo 3 · MODUS OPERANDI · ordine di Gram&ndash;Schmidt",
  "steps": [
   {
    "t": "<b>MODUS OPERANDI.</b> Applichi Gram&ndash;Schmidt alla lista ordinata (v&#8321;,v&#8322;,v&#8323;) indipendente e hai gi&agrave; costruito u&#8321;,u&#8322; ortogonali. Qual &egrave; la formula corretta per u&#8323;?",
    "opts": [
     {
      "x": "u&#8323; = v&#8323; &minus; (&#9001;v&#8323;,u&#8321;&#9002;/&#9001;u&#8321;,u&#8321;&#9002;)u&#8321; &minus; (&#9001;v&#8323;,u&#8322;&#9002;/&#9001;u&#8322;,u&#8322;&#9002;)u&#8322;",
      "c": true
     },
     {
      "x": "u&#8323; = v&#8323; &minus; (&#9001;v&#8323;,v&#8321;&#9002;/&#9001;v&#8321;,v&#8321;&#9002;)v&#8321; &minus; (&#9001;v&#8323;,v&#8322;&#9002;/&#9001;v&#8322;,v&#8322;&#9002;)v&#8322;"
     },
     {
      "x": "u&#8323; = v&#8323; &minus; (&#9001;v&#8323;,u&#8322;&#9002;/&#9001;u&#8322;,u&#8322;&#9002;)u&#8322; (solo l&rsquo;ultimo costruito)"
     },
     {
      "x": "u&#8323; = v&#8323; &minus; (&#9001;v&#8323;,u&#8321;+u&#8322;&#9002;/&#9001;u&#8321;+u&#8322;,u&#8321;+u&#8322;&#9002;)(u&#8321;+u&#8322;)"
     }
    ],
    "hint": "Le proiezioni vanno sottratte sui vettori GI&Agrave; ORTOGONALIZZATI u&#8321;,u&#8322; (uno per uno), non sugli originali v&#8321;,v&#8322; e non solo sull&rsquo;ultimo.",
    "sol": "<b>u&#8323; = v&#8323; &minus; (&#9001;v&#8323;,u&#8321;&#9002;/&#9001;u&#8321;,u&#8321;&#9002;)u&#8321; &minus; (&#9001;v&#8323;,u&#8322;&#9002;/&#9001;u&#8322;,u&#8322;&#9002;)u&#8322;.</b> Nel processo di Gram&ndash;Schmidt ogni nuovo vettore si ottiene sottraendo a v&#8323; la sua proiezione su <i>tutti</i> i vettori gi&agrave; resi ortogonali. Proiettare sugli originali v&#8321;,v&#8322; (opzione 2) non garantisce &#9001;u&#8323;,u&#8322;&#9002;=0 perch&eacute; v&#8321;,v&#8322; non sono ortogonali; fermarsi a u&#8322; (opzione 3) lascia una componente lungo u&#8321;."
   }
  ]
 },
 {
  "pool": "spettrale",
  "src": "tipo 3 · Gram&ndash;Schmidt su 3 vettori (L1+L2)",
  "steps": [
   {
    "t": "<span class=\"lbl\">L1</span> In &#8477;&#179; standard applica Gram&ndash;Schmidt a v&#8321;=(1,1,1), v&#8322;=(1,1,0), v&#8323;=(1,0,0). Posto u&#8321;=v&#8321;, quanto vale u&#8322;?",
    "opts": [
     {
      "x": "(&#8531;, &#8531;, &minus;&#8532;)",
      "c": true
     },
     {
      "x": "(1, 1, 0)"
     },
     {
      "x": "(&#8532;, &#8532;, &#8531;)"
     },
     {
      "x": "(0, 0, &minus;1)"
     }
    ],
    "hint": "u&#8322; = v&#8322; &minus; (&#9001;v&#8322;,u&#8321;&#9002;/&#9001;u&#8321;,u&#8321;&#9002;)u&#8321;. Calcola &#9001;v&#8322;,u&#8321;&#9002;=2 e &#9001;u&#8321;,u&#8321;&#9002;=3.",
    "sol": "<b>(&#8531;, &#8531;, &minus;&#8532;).</b> Per Gram&ndash;Schmidt u&#8322;=(1,1,0)&minus;(2/3)(1,1,1)=(&#8531;,&#8531;,&minus;&#8532;). Verifica: u&#8322;&middot;u&#8321;=&#8531;+&#8531;&minus;&#8532;=0.",
    "cont": "Continua &rarr; calcola u&#8323;"
   },
   {
    "t": "<span class=\"lbl\">L2</span> Con u&#8321;=(1,1,1) e u&#8322;=(&#8531;,&#8531;,&minus;&#8532;), quanto vale u&#8323;?",
    "opts": [
     {
      "x": "(&frac12;, &minus;&frac12;, 0)",
      "c": true
     },
     {
      "x": "(1, 0, 0)"
     },
     {
      "x": "(&#8531;, &minus;&#8531;, 0)"
     },
     {
      "x": "(0, &minus;&frac12;, &frac12;)"
     }
    ],
    "hint": "u&#8323; = v&#8323; &minus; (&#9001;v&#8323;,u&#8321;&#9002;/&#9001;u&#8321;,u&#8321;&#9002;)u&#8321; &minus; (&#9001;v&#8323;,u&#8322;&#9002;/&#9001;u&#8322;,u&#8322;&#9002;)u&#8322;. Qui &#9001;v&#8323;,u&#8321;&#9002;=1, &#9001;v&#8323;,u&#8322;&#9002;=&#8531;, &#9001;u&#8322;,u&#8322;&#9002;=&#8532;.",
    "sol": "<b>(&frac12;, &minus;&frac12;, 0).</b> u&#8323;=(1,0,0)&minus;(1/3)(1,1,1)&minus;(&frac12;)(&#8531;,&#8531;,&minus;&#8532;)=(&frac12;,&minus;&frac12;,0). Per il processo di Gram&ndash;Schmidt vanno sottratte le proiezioni su ENTRAMBI u&#8321;,u&#8322;: fermarsi a u&#8321; (opzione 2) lascia u&#8323; non ortogonale a u&#8322;. Verifica: u&#8323;&middot;u&#8321;=0 e u&#8323;&middot;u&#8322;=0."
   }
  ]
 },
 {
  "pool": "spettrale",
  "src": "tipo 3 · MODUS OPERANDI · proiezione su base non ortogonale",
  "steps": [
   {
    "t": "<b>MODUS OPERANDI.</b> Devi proiettare x su W=Span(a,b) con a,b indipendenti ma NON ortogonali. Il coefficiente lungo a &egrave; &#9001;x,a&#9002;/&#9001;a,a&#9002; come nel caso di un solo vettore?",
    "opts": [
     {
      "x": "No: con base non ortogonale risolvi il sistema normale (o prima ortogonalizzi con GS)",
      "c": true
     },
     {
      "x": "S&igrave;: la formula &#9001;x,a&#9002;/&#9001;a,a&#9002; vale per ogni vettore della base"
     },
     {
      "x": "S&igrave;, purch&eacute; prima normalizzi a e b"
     },
     {
      "x": "No: se a,b non sono ortogonali la proiezione su W non esiste"
     }
    ],
    "hint": "La formula proj<sub>W</sub>x=&sum;(&#9001;x,e<sub>i</sub>&#9002;/&#9001;e<sub>i</sub>,e<sub>i</sub>&#9002;)e<sub>i</sub> vale SOLO se gli e<sub>i</sub> sono ortogonali tra loro. La sola normalizzazione non toglie l&rsquo;obliquit&agrave;.",
    "sol": "<b>No: sistema normale (o GS prima).</b> Per il teorema di proiezione ortogonale proj<sub>W</sub>x esiste sempre ed &egrave; unica (W di dim finita), ma la scrittura per coefficienti disaccoppiati &#9001;x,a&#9002;/&#9001;a,a&#9002; richiede base ORTOGONALE. Con a,b obliqui i coefficienti c&#8321;,c&#8322; risolvono il sistema normale (le equazioni &#9001;x&minus;c&#8321;a&minus;c&#8322;b, a&#9002;=0, &#9001;x&minus;c&#8321;a&minus;c&#8322;b, b&#9002;=0), matrice di Gram non diagonale. Normalizzare (opzione 3) cambia la lunghezza ma non annulla &#9001;a,b&#9002;."
   }
  ]
 },
 {
  "pool": "spettrale",
  "src": "tipo 3 · autospazio degenere e ortonormalizzazione (spettrale)",
  "steps": [
   {
    "t": "Diagonalizzi ortogonalmente A simmetrica 3&times;3 con &lambda;=5 (m.a.=2) e &lambda;=&minus;1 (m.a.=1). Per &lambda;=5 trovi due autovettori w&#8321;,w&#8322; NON ortogonali tra loro. Come costruisci la parte di Q relativa a &lambda;=5?",
    "opts": [
     {
      "x": "Applico GS a {w&#8321;,w&#8322;} DENTRO l&rsquo;autospazio, poi normalizzo",
      "c": true
     },
     {
      "x": "Scarto w&#8322; e tengo solo w&#8321; normalizzato"
     },
     {
      "x": "Sono autovettori dello stesso &lambda;: sono gi&agrave; ortogonali, normalizzo e basta"
     },
     {
      "x": "Applico GS mescolando w&#8321;,w&#8322; con l&rsquo;autovettore di &lambda;=&minus;1"
     }
    ],
    "hint": "Autovettori dello STESSO autovalore NON sono automaticamente ortogonali. GS va fatto solo dentro l&rsquo;autospazio di &lambda;=5; l&rsquo;autovettore di &lambda;=&minus;1 &egrave; gi&agrave; ortogonale ad essi per il teorema spettrale.",
    "sol": "<b>GS su {w&#8321;,w&#8322;} dentro l&rsquo;autospazio, poi normalizzo.</b> Il teorema spettrale garantisce l&rsquo;ortogonalit&agrave; tra autospazi di autovalori DISTINTI, non tra due autovettori dello stesso &lambda;: dentro l&rsquo;autospazio di dim&#8202;2 servono Gram&ndash;Schmidt e normalizzazione. Scartare w&#8322; (opzione 2) perde una dimensione; mescolare con l&rsquo;autovettore di &lambda;=&minus;1 (opzione 4) distrugge la struttura ad autovettori."
   }
  ]
 },
 {
  "pool": "spettrale",
  "src": "tipo 3 · Cauchy&ndash;Schwarz · caso di uguaglianza",
  "steps": [
   {
    "t": "In uno spazio con prodotto scalare vale |&#9001;u,v&#9002;| &le; &#8741;u&#8741;&#8741;v&#8741; (Cauchy&ndash;Schwarz). L&rsquo;uguaglianza |&#9001;u,v&#9002;|=&#8741;u&#8741;&#8741;v&#8741; vale se e solo se...",
    "opts": [
     {
      "x": "u e v sono linearmente dipendenti (paralleli)",
      "c": true
     },
     {
      "x": "u &egrave; ortogonale a v"
     },
     {
      "x": "&#8741;u&#8741;=&#8741;v&#8741;"
     },
     {
      "x": "sempre: &egrave; un&rsquo;uguaglianza"
     }
    ],
    "hint": "Nella disuguaglianza di Cauchy&ndash;Schwarz l&rsquo;uguaglianza &egrave; il caso estremo dei vettori PROPORZIONALI. L&rsquo;ortogonalit&agrave; d&agrave; &#9001;u,v&#9002;=0, l&rsquo;estremo opposto.",
    "sol": "<b>u,v linearmente dipendenti.</b> La disuguaglianza di Cauchy&ndash;Schwarz si dimostra da &#8741;v&#8741;&sup2;&#8741;u&minus;tv&#8741;&sup2;&ge;0 (con t=&#9001;u,v&#9002;/&#8741;v&#8741;&sup2;) e diventa uguaglianza esattamente quando u&minus;tv=0, cio&egrave; u&#8741;v proporzionali. Se u&perp;v allora &#9001;u,v&#9002;=0&lt;&#8741;u&#8741;&#8741;v&#8741; (per u,v&ne;0): disuguaglianza stretta."
   }
  ]
 },
 {
  "pool": "spettrale",
  "src": "tipo 3 · Cauchy&ndash;Schwarz · vincolo sul prodotto",
  "steps": [
   {
    "t": "In uno spazio con prodotto scalare &#8741;u&#8741;=2 e &#8741;v&#8741;=3. Pu&ograve; essere &#9001;u,v&#9002;=7?",
    "opts": [
     {
      "x": "No: |&#9001;u,v&#9002;| &le; &#8741;u&#8741;&#8741;v&#8741;=6 per Cauchy&ndash;Schwarz",
      "c": true
     },
     {
      "x": "S&igrave;: non c&rsquo;&egrave; alcun limite superiore per &#9001;u,v&#9002;"
     },
     {
      "x": "No: il prodotto scalare &egrave; sempre positivo"
     },
     {
      "x": "S&igrave;, purch&eacute; u e v siano paralleli"
     }
    ],
    "hint": "Per la disuguaglianza di Cauchy&ndash;Schwarz |&#9001;u,v&#9002;| non pu&ograve; superare &#8741;u&#8741;&#8741;v&#8741;=2&middot;3=6.",
    "sol": "<b>No.</b> Per la disuguaglianza di Cauchy&ndash;Schwarz |&#9001;u,v&#9002;|&le;&#8741;u&#8741;&#8741;v&#8741;=6, quindi &#9001;u,v&#9002;=7 &egrave; impossibile. Il massimo 6 si raggiungerebbe solo con u,v paralleli concordi. Il prodotto scalare NON &egrave; sempre positivo (opzione 3): &egrave; &#9001;u,u&#9002; ad esserlo, non &#9001;u,v&#9002;."
   }
  ]
 },
 {
  "pool": "spettrale",
  "src": "tipo 3 · lettura di Q<sup>T</sup>AQ=D (teorema spettrale)",
  "steps": [
   {
    "t": "A &egrave; reale simmetrica e Q ortogonale soddisfa Q<sup>T</sup>AQ=D con D diagonale. Le colonne di Q sono...",
    "opts": [
     {
      "x": "una base ortonormale di autovettori di A (con autovalori sulla diagonale di D)",
      "c": true
     },
     {
      "x": "gli autovalori di A"
     },
     {
      "x": "una base qualunque di autovettori, non necessariamente ortonormale"
     },
     {
      "x": "le righe di A normalizzate"
     }
    ],
    "hint": "Q ortogonale &hArr; le sue colonne sono ortonormali. Da AQ=QD, la k-esima colonna q<sub>k</sub> soddisfa Aq<sub>k</sub>=d<sub>kk</sub>q<sub>k</sub>: &egrave; autovettore.",
    "sol": "<b>Base ortonormale di autovettori.</b> Q ortogonale significa Q<sup>T</sup>Q=I, cio&egrave; colonne ortonormali; riscrivendo Q<sup>T</sup>AQ=D come AQ=QD, colonna per colonna Aq<sub>k</sub>=d<sub>kk</sub>q<sub>k</sub>, quindi ogni colonna &egrave; autovettore con autovalore l&rsquo;elemento diagonale di D. &Egrave; esattamente la tesi costruttiva del teorema spettrale. Gli autovalori stanno in D, non in Q (opzione 2)."
   }
  ]
 },
 {
  "pool": "spettrale",
  "src": "tipo 3 · Gram&ndash;Schmidt su vettori dipendenti (caso limite)",
  "steps": [
   {
    "t": "Applichi Gram&ndash;Schmidt a v&#8321;=(1,2,2), v&#8322;=(2,4,4). Cosa succede al secondo passo?",
    "opts": [
     {
      "x": "u&#8322;=0: v&#8322; &egrave; multiplo di v&#8321;, non normalizzabile (i vettori sono dipendenti)",
      "c": true
     },
     {
      "x": "u&#8322;=v&#8322;, perch&eacute; &egrave; gi&agrave; ortogonale a u&#8321;"
     },
     {
      "x": "u&#8322;=(1,2,2), uguale a u&#8321;"
     },
     {
      "x": "il processo restituisce comunque una base ortonormale di 2 vettori"
     }
    ],
    "hint": "v&#8322;=2v&#8321;. Nel passo GS u&#8322;=v&#8322;&minus;(&#9001;v&#8322;,u&#8321;&#9002;/&#9001;u&#8321;,u&#8321;&#9002;)u&#8321;: se v&#8322; &egrave; multiplo di v&#8321; la proiezione riproduce v&#8322; e la differenza &egrave; 0.",
    "sol": "<b>u&#8322;=0.</b> &#9001;v&#8322;,u&#8321;&#9002;=18, &#9001;u&#8321;,u&#8321;&#9002;=9, quindi u&#8322;=(2,4,4)&minus;2(1,2,2)=0: non normalizzabile. Il processo di Gram&ndash;Schmidt richiede vettori LINEARMENTE INDIPENDENTI; su una lista dipendente produce il vettore nullo, che segnala la dipendenza. Span(v&#8321;,v&#8322;) ha dim&#8202;1, non 2 (opzione 4)."
   }
  ]
 },
 {
  "pool": "spettrale",
  "src": "tipo 3 · proiezione su base ortonormale (coefficienti di Fourier)",
  "steps": [
   {
    "t": "{e&#8321;,e&#8322;} &egrave; una base ORTONORMALE di W. La proiezione ortogonale di x su W &egrave;:",
    "opts": [
     {
      "x": "&#9001;x,e&#8321;&#9002;e&#8321; + &#9001;x,e&#8322;&#9002;e&#8322;",
      "c": true
     },
     {
      "x": "&#9001;x,e&#8321;&#9002; + &#9001;x,e&#8322;&#9002; (uno scalare)"
     },
     {
      "x": "&#9001;x,e&#8321;+e&#8322;&#9002;(e&#8321;+e&#8322;)"
     },
     {
      "x": "&#9001;x,e&#8321;&#9002;e&#8322; + &#9001;x,e&#8322;&#9002;e&#8321;"
     }
    ],
    "hint": "Su base ortonormale i coefficienti sono i prodotti scalari (coefficienti di Fourier) &#9001;x,e<sub>i</sub>&#9002;, ciascuno moltiplicato per il PROPRIO versore e<sub>i</sub>.",
    "sol": "<b>&#9001;x,e&#8321;&#9002;e&#8321; + &#9001;x,e&#8322;&#9002;e&#8322;.</b> Per il teorema di proiezione ortogonale, su una base ortonormale la proiezione &egrave; la somma dei coefficienti di Fourier per i rispettivi versori: proj<sub>W</sub>x=&sum;<sub>i</sub>&#9001;x,e<sub>i</sub>&#9002;e<sub>i</sub> (i denominatori &#9001;e<sub>i</sub>,e<sub>i</sub>&#9002;=1 spariscono). La somma dei soli scalari (opzione 2) non &egrave; nemmeno un vettore; scambiare i versori (opzione 4) rompe l&rsquo;ortogonalit&agrave; x&minus;proj<sub>W</sub>x &perp; W."
   }
  ]
 }
];

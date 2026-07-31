Q.strutture = [
 {
  "pool": "strutture",
  "src": "b03 secondoesosol Q6 · endomorfismo prodotto vettoriale",
  "steps": [
   {
    "t": "Fissato x&#8320;&ne;0 in &#8477;&sup3;, sia T(x)=x&times;x&#8320; (prodotto vettoriale). Cosa sono ker&#8202;T e im&#8202;T?",
    "opts": [
     {
      "x": "ker&#8202;T=Span(x&#8320;), im&#8202;T=piano ortogonale a x&#8320;",
      "c": true
     },
     {
      "x": "ker&#8202;T={0}, im&#8202;T=&#8477;&sup3;"
     },
     {
      "x": "ker&#8202;T=piano ortogonale, im&#8202;T=Span(x&#8320;)"
     },
     {
      "x": "T &egrave; iniettivo"
     }
    ],
    "hint": "x&times;x&#8320;=0 &hArr; x parallelo a x&#8320;. Il prodotto vettoriale &egrave; sempre ortogonale a x&#8320;.",
    "sol": "<b>ker&#8202;T=Span(x&#8320;), im&#8202;T=(x&#8320;)<sup>&#8869;</sup> (dim 2).</b> x&times;x&#8320;=0 &hArr; x&#8741;x&#8320; (annullamento del prodotto vettoriale), e ogni x&times;x&#8320; &egrave; ortogonale a x&#8320;. Il teorema del rango chiude: dim&#8202;ker+dim&#8202;im=1+2=3. T non &egrave; n&eacute; iniettivo n&eacute; suriettivo."
   }
  ]
 },
 {
  "pool": "strutture",
  "src": "tipo 12 · prodotto vettoriale non associativo",
  "steps": [
   {
    "t": "Il prodotto vettoriale in &#8477;&sup3; &egrave; associativo, cio&egrave; (u&times;v)&times;w = u&times;(v&times;w)?",
    "opts": [
     {
      "x": "No: vale l&rsquo;identit&agrave; di Jacobi al posto dell&rsquo;associativit&agrave;",
      "c": true
     },
     {
      "x": "S&igrave;, sempre"
     },
     {
      "x": "S&igrave;, ma solo per vettori ortogonali"
     },
     {
      "x": "S&igrave;, perch&eacute; &egrave; bilineare"
     }
    ],
    "hint": "Prova u=v=e&#8321;, w=e&#8322;: (e&#8321;&times;e&#8321;)&times;e&#8322;=0, ma e&#8321;&times;(e&#8321;&times;e&#8322;)=e&#8321;&times;e&#8323;=&minus;e&#8322;&ne;0.",
    "sol": "<b>No, non &egrave; associativo.</b> Controesempio: (e&#8321;&times;e&#8321;)&times;e&#8322;=0&times;e&#8322;=0, mentre e&#8321;&times;(e&#8321;&times;e&#8322;)=e&#8321;&times;e&#8323;=&minus;e&#8322;. Il prodotto vettoriale &egrave; bilineare e antisimmetrico ma NON associativo: al suo posto vale l&rsquo;identit&agrave; di Jacobi u&times;(v&times;w)+v&times;(w&times;u)+w&times;(u&times;v)=0, che fa di (&#8477;&sup3;,&times;) un&rsquo;algebra di Lie. Utile anche la formula BAC&minus;CAB: u&times;(v&times;w)=v(u&middot;w)&minus;w(u&middot;v)."
   }
  ]
 },
 {
  "pool": "strutture",
  "src": "ex_Fis6 Es. 5 · L&#8354; moltiplicazione per z (&#8450; come &#8477;-spazio)",
  "steps": [
   {
    "t": "Sia z=a+ib e L&#8354;:&#8450;&rarr;&#8450;, L&#8354;(w)=z&middot;w. Vista &#8450; come &#8477;-spazio con base {1,i}, qual &egrave; la matrice di L&#8354;?",
    "opts": [
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">a</span><span class=\"mcell\">&minus;b</span></div><div class=\"mrow\"><span class=\"mcell\">b</span><span class=\"mcell\">a</span></div></span>",
      "c": true
     },
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">a</span><span class=\"mcell\">b</span></div><div class=\"mrow\"><span class=\"mcell\">b</span><span class=\"mcell\">a</span></div></span>"
     },
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">a</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">b</span></div></span>"
     },
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">a</span><span class=\"mcell\">b</span></div><div class=\"mrow\"><span class=\"mcell\">&minus;b</span><span class=\"mcell\">a</span></div></span>"
     }
    ],
    "hint": "Calcola L&#8354;(1)=z=a+bi e L&#8354;(i)=zi=&minus;b+ai. Le colonne sono le coordinate di queste immagini nella base {1,i}.",
    "sol": "A=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">a</span><span class=\"mcell\">&minus;b</span></div><div class=\"mrow\"><span class=\"mcell\">b</span><span class=\"mcell\">a</span></div></span>. L&#8354;(1)=a+bi &rarr; colonna (a,b); L&#8354;(i)=ai&minus;b &rarr; colonna (&minus;b,a). &Egrave; la rappresentazione reale della moltiplicazione complessa: rotazione-dilatazione di modulo |z| e angolo arg(z). La sottoalgebra { <span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">a</span><span class=\"mcell\">&minus;b</span></div><div class=\"mrow\"><span class=\"mcell\">b</span><span class=\"mcell\">a</span></div></span> } di M&#8322;(&#8477;) &egrave; isomorfa al campo &#8450; come &#8477;-algebra, e per z=i la matrice J=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">&minus;1</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div></span> soddisfa J&sup2;=&minus;I: &egrave; la struttura complessa su &#8477;&sup2;."
   }
  ]
 },
 {
  "pool": "strutture",
  "src": "tipo 12 · struttura complessa J&sup2;=&minus;Id",
  "steps": [
   {
    "t": "Su &#8477;&sup2; sia J=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">&minus;1</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div></span>. Quale ruolo gioca J nel rendere &#8477;&sup2; uno spazio su &#8450;?",
    "opts": [
     {
      "x": "J&sup2;=&minus;I, quindi &laquo;i&middot;v&raquo;:=Jv definisce una struttura di &#8450;-spazio su &#8477;&sup2;",
      "c": true
     },
     {
      "x": "J&sup2;=I, quindi J &egrave; una riflessione"
     },
     {
      "x": "J &egrave; diagonalizzabile su &#8477;"
     },
     {
      "x": "J non ha alcun legame con &#8450;"
     }
    ],
    "hint": "Verifica J&sup2;. Perch&eacute; &laquo;moltiplicare per i&raquo; abbia senso su &#8477;&sup2; serve un operatore che al quadrato dia &minus;Id, imitando i&sup2;=&minus;1.",
    "sol": "<b>J&sup2;=&minus;I.</b> Ponendo (a+ib)&middot;v:=av+bJv si dota &#8477;&sup2; di una struttura di spazio vettoriale complesso: la condizione J&sup2;=&minus;Id &egrave; esattamente ci&ograve; che serve perch&eacute; i&sup2;=&minus;1 sia rispettato. Gli autovalori di J sono &plusmn;i (non reali): J non &egrave; diagonalizzabile su &#8477;, ma lo &egrave; su &#8450;. Una &laquo;struttura complessa&raquo; su uno spazio reale &egrave; per definizione un endomorfismo J con J&sup2;=&minus;Id."
   }
  ]
 },
 {
  "pool": "strutture",
  "src": "27gen12consoluz Es. 6 · coniugio su M&#8322;(&#8450;) (semilineare)",
  "steps": [
   {
    "t": "Su M&#8322;(&#8450;) sia T(A)=A&#773; (coniugio entrata per entrata). Rispetto a quale struttura T &egrave; lineare?",
    "opts": [
     {
      "x": "Lineare come &#8477;-spazio, NON come &#8450;-spazio",
      "c": true
     },
     {
      "x": "Lineare come &#8450;-spazio"
     },
     {
      "x": "Lineare in entrambi"
     },
     {
      "x": "Non lineare in nessuno dei due"
     }
    ],
    "hint": "Verifica T(&lambda;A)=&lambda;&#773;&#8202;A&#773;. Per &lambda; reale &lambda;&#773;=&lambda;; per &lambda; complesso no.",
    "sol": "<b>&#8477;-lineare, non &#8450;-lineare.</b> T(&lambda;A)=&lambda;&#773;&#8202;A&#773;=&lambda;&#773;&#8202;T(A). Se &lambda;&isin;&#8477; allora &lambda;&#773;=&lambda; e T rispetta lo scalare; se &lambda;=i, T(iA)=&minus;i&#8202;T(A)&ne;i&#8202;T(A). Per definizione di applicazione semilineare (antilineare), T soddisfa T(&lambda;A)=&lambda;&#773;&#8202;T(A): &egrave; additiva ma coniuga lo scalare."
   }
  ]
 },
 {
  "pool": "strutture",
  "src": "tipo 6 · indipendenza su &#8477; vs su &#8450;",
  "steps": [
   {
    "t": "I vettori 1 e i, come elementi di &#8450; visto come spazio vettoriale, sono indipendenti?",
    "opts": [
     {
      "x": "Indipendenti su &#8477;, dipendenti su &#8450;",
      "c": true
     },
     {
      "x": "Indipendenti sia su &#8477; sia su &#8450;"
     },
     {
      "x": "Dipendenti su &#8477;"
     },
     {
      "x": "Dipendenti sia su &#8477; sia su &#8450;"
     }
    ],
    "hint": "Su &#8450; puoi moltiplicare per scalari complessi: i = i&middot;1. Su &#8477; no.",
    "sol": "<b>Indipendenti su &#8477;, dipendenti su &#8450;.</b> Per la definizione di indipendenza lineare, che dipende dal campo degli scalari: su &#8450; vale i&middot;1&minus;1&middot;i=0 con coefficienti non nulli (dipendenti); su &#8477; l&rsquo;uguaglianza a&middot;1+b&middot;i=0 con a,b&isin;&#8477; forza a=b=0 (indipendenti). &Egrave; il motivo per cui dim<sub>&#8477;</sub>&#8450;=2 e dim<sub>&#8450;</sub>&#8450;=1."
   }
  ]
 },
 {
  "pool": "strutture",
  "src": "b03 simulaz.nov2012 Q2 · matrici di Pauli",
  "steps": [
   {
    "t": "Le matrici di Pauli &sigma;&#8321;,&sigma;&#8322;,&sigma;&#8323; in M&#8322;(&#8450;) soddisfano &sigma;&#8342;&sup2;=I e &sigma;&#8321;&sigma;&#8322;=i&sigma;&#8323;. Sono linearmente indipendenti su &#8450;?",
    "opts": [
     {
      "x": "S&igrave;; con I formano una base di M&#8322;(&#8450;)",
      "c": true
     },
     {
      "x": "No: &sigma;&#8323;=&sigma;&#8321;&sigma;&#8322;"
     },
     {
      "x": "No: sono solo 3 in uno spazio di dim 4"
     },
     {
      "x": "S&igrave; ma solo su &#8477;"
     }
    ],
    "hint": "{I,&sigma;&#8321;,&sigma;&#8322;,&sigma;&#8323;} sono 4 matrici in M&#8322;(&#8450;) (dim 4): le &sigma;&#8342; hanno traccia 0, I no.",
    "sol": "<b>S&igrave;, indipendenti; {I,&sigma;&#8321;,&sigma;&#8322;,&sigma;&#8323;} &egrave; una base di M&#8322;(&#8450;).</b> Per il criterio di indipendenza lineare in dimensione 4: le tre &sigma;&#8342; hanno traccia nulla e I no, e nessuna &sigma; &egrave; combinazione delle altre. La relazione &sigma;&#8321;&sigma;&#8322;=i&sigma;&#8323; &egrave; un PRODOTTO, non una combinazione lineare, quindi non intacca l&rsquo;indipendenza. Le &sigma;&#8342; generano l&rsquo;algebra di Lie su(2) tramite i commutatori [&sigma;&#8342;,&sigma;&#8343;]=2i&#8202;&epsilon;&#8342;&#8343;&#8342;&#8342;&sigma;&#8342;."
   }
  ]
 },
 {
  "pool": "strutture",
  "src": "3appellosol Es. 2 · T(P)=P(0)+P(1)x+P(2)x&sup2; (Vandermonde)",
  "steps": [
   {
    "t": "Sia T : &#8477;[x]<sub>&le;2</sub>&rarr;&#8477;[x]<sub>&le;2</sub>, T(P)=P(0)+P(1)x+P(2)x&sup2;. T &egrave; un isomorfismo?",
    "opts": [
     {
      "x": "S&igrave;: la matrice &egrave; di Vandermonde nei nodi 0,1,2, rango 3",
      "c": true
     },
     {
      "x": "No: non &egrave; lineare"
     },
     {
      "x": "No: ha nucleo di dimensione 1"
     },
     {
      "x": "S&igrave;, ma solo su &#8450;"
     }
    ],
    "hint": "T(P)=0 &hArr; P(0)=P(1)=P(2)=0: un polinomio di grado &le;2 con 3 radici distinte &egrave; nullo. Nucleo banale &rArr; ?",
    "sol": "<b>S&igrave;.</b> ker&#8202;T: P si annulla in 0,1,2 (3 radici distinte, grado &le;2) &rArr; P=0. Nucleo {0} &rArr; T iniettiva, e su spazio di dimensione finita anche suriettiva: isomorfismo. La matrice nella base {1,x,x&sup2;} &egrave; la matrice di Vandermonde V(0,1,2), con det&nbsp;=&nbsp;&prod;<sub>i&lt;j</sub>(&alpha;<sub>j</sub>&minus;&alpha;<sub>i</sub>)&ne;0 perch&eacute; i nodi sono distinti."
   }
  ]
 }
];

Q.sistemi = [
 {
  "pool": "sistemi",
  "src": "tipo 4 · enunciato di Rouch&eacute;&ndash;Capelli",
  "steps": [
   {
    "t": "Il sistema Ax=b (A di tipo m&times;n, B=(A|b) la completa) &egrave; compatibile se e solo se...",
    "opts": [
     {
      "x": "rk(A) = rk(B)",
      "c": true
     },
     {
      "x": "det&#8202;A &ne; 0"
     },
     {
      "x": "rk(A) = n"
     },
     {
      "x": "m = n"
     }
    ],
    "hint": "La compatibilit&agrave; dipende dal confronto tra rango della incompleta e della completa, non dalla forma della matrice.",
    "sol": "<b>rk(A)=rk(B)</b> (teorema di Rouch&eacute;&ndash;Capelli). Il vettore b sta nello spazio colonne di A esattamente quando aggiungerlo non alza il rango."
   }
  ]
 },
 {
  "pool": "sistemi",
  "src": "tipo 4 · dimensione dello spazio delle soluzioni",
  "steps": [
   {
    "t": "Un sistema omogeneo Ax=0 con A di 4 colonne e rk(A)=2 ha spazio delle soluzioni di dimensione...",
    "opts": [
     {
      "x": "2",
      "c": true
     },
     {
      "x": "4"
     },
     {
      "x": "0"
     },
     {
      "x": "1"
     }
    ],
    "hint": "dim(soluzioni omogenee) = n &minus; rk(A), con n = numero di incognite (colonne).",
    "sol": "<b>2.</b> Per il teorema del rango (dim dello spazio delle soluzioni di un sistema omogeneo = n &minus; rk&#8202;A): dim = 4&minus;2 = 2."
   }
  ]
 },
 {
  "pool": "sistemi",
  "src": "tipo 4 · det=0 non implica infinite soluzioni (trabocchetto)",
  "steps": [
   {
    "t": "A &egrave; quadrata e det&#8202;A=0. Il sistema Ax=b ha sicuramente infinite soluzioni?",
    "opts": [
     {
      "x": "No: potrebbe essere incompatibile",
      "c": true
     },
     {
      "x": "S&igrave;, sempre"
     },
     {
      "x": "S&igrave;, se b&ne;0"
     },
     {
      "x": "No, ha esattamente una soluzione"
     }
    ],
    "hint": "det&#8202;A=0 abbassa rk(A), ma non dice nulla su rk(B). Se rk(B)&gt;rk(A) il sistema &egrave; incompatibile.",
    "sol": "<b>No.</b> Per il teorema di Rouch&eacute;&ndash;Capelli: det&#8202;A=0 &rArr; rk(A)&lt;n; poi due casi: se rk(B)=rk(A) infinite soluzioni, se rk(B)&gt;rk(A) nessuna. Il determinante nullo da solo non decide."
   }
  ]
 },
 {
  "pool": "sistemi",
  "src": "tipo 4 · omogeneo sempre compatibile",
  "steps": [
   {
    "t": "Un sistema omogeneo Ax=0 pu&ograve; essere incompatibile?",
    "opts": [
     {
      "x": "No: x=0 &egrave; sempre soluzione",
      "c": true
     },
     {
      "x": "S&igrave;, se rk(A)&lt;n"
     },
     {
      "x": "S&igrave;, se A non &egrave; quadrata"
     },
     {
      "x": "S&igrave;, se det&#8202;A=0"
     }
    ],
    "hint": "La completa di un sistema omogeneo ha ultima colonna nulla: rk(B)=rk(A) sempre.",
    "sol": "<b>No.</b> Il vettore nullo soddisfa sempre Ax=0. Per Rouch&eacute;&ndash;Capelli rk(A)=rk(B) sempre (la colonna dei termini noti &egrave; nulla), quindi un omogeneo &egrave; sempre compatibile; la domanda vera &egrave; solo se ha soluzioni oltre a 0."
   }
  ]
 },
 {
  "pool": "sistemi",
  "src": "tipo 4 · sistema di Cramer",
  "steps": [
   {
    "t": "Se A &egrave; quadrata n&times;n con det&#8202;A&ne;0, quante soluzioni ha Ax=b?",
    "opts": [
     {
      "x": "Esattamente una, per ogni b",
      "c": true
     },
     {
      "x": "Infinite"
     },
     {
      "x": "Nessuna se b&ne;0"
     },
     {
      "x": "Dipende da b"
     }
    ],
    "hint": "det&#8202;A&ne;0 &rArr; A invertibile &rArr; x=A&#8315;&sup1;b &egrave; l&rsquo;unica soluzione.",
    "sol": "<b>Una sola.</b> A invertibile: rk(A)=rk(B)=n, soluzione unica x=A&#8315;&sup1;b qualunque sia b."
   }
  ]
 },
 {
  "pool": "sistemi",
  "src": "tipo 4 · salto di rango tra incompleta e completa",
  "steps": [
   {
    "t": "Di quanto pu&ograve; superare rk(B) il valore rk(A), dove B=(A|b)?",
    "opts": [
     {
      "x": "Al massimo di 1",
      "c": true
     },
     {
      "x": "Di quanto si vuole"
     },
     {
      "x": "Mai, sono sempre uguali"
     },
     {
      "x": "Al massimo di 2"
     }
    ],
    "hint": "B ha una sola colonna in pi&ugrave; rispetto ad A: il rango pu&ograve; crescere al pi&ugrave; di 1.",
    "sol": "<b>Al massimo 1.</b> Aggiungere una colonna aumenta il rango di 0 (compatibile) o 1 (incompatibile)."
   }
  ]
 },
 {
  "pool": "sistemi",
  "src": "prova20190121 Es. 1 (valore critico &rarr; incompatibile)",
  "steps": [
   {
    "t": "<span class=\"lbl\">L1</span> Sia A&#8320;=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">&alpha;</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span><span class=\"mcell\">&alpha;</span></div></span>. Per quali valori di &alpha; il sistema A&#8320;x=b pu&ograve; NON avere soluzione unica?",
    "opts": [
     {
      "x": "Solo &alpha;=1",
      "c": true
     },
     {
      "x": "&alpha;=0 e &alpha;=1"
     },
     {
      "x": "Nessun &alpha;"
     },
     {
      "x": "&alpha;=1 e &alpha;=&minus;1"
     }
    ],
    "hint": "Con R&#8322;&minus;R&#8321; e R&#8323;&minus;R&#8321; ottieni una triangolare: det&#8202;A&#8320;=(&alpha;&minus;1)&sup2;. Annullalo.",
    "sol": "<b>Solo &alpha;=1.</b> det&#8202;A&#8320;=(&alpha;&minus;1)&sup2;: unico valore critico &alpha;=1 (doppio). Per &alpha;&ne;1 il sistema &egrave; di Cramer.",
    "cont": "Continua &rarr; discuti il caso critico &alpha;=1"
   },
   {
    "t": "<span class=\"lbl\">L2</span> Per &alpha;=1 e b=(1,2,3), il sistema A&#8320;x=b &egrave;...",
    "opts": [
     {
      "x": "incompatibile: rk(A)=1 ma rk(B)=2",
      "c": true
     },
     {
      "x": "compatibile con infinite soluzioni"
     },
     {
      "x": "compatibile con soluzione unica"
     },
     {
      "x": "omogeneo, quindi compatibile"
     }
    ],
    "hint": "Per &alpha;=1 tutte le righe di A sono (1,1,1): rk(A)=1. Ma i termini noti 1,2,3 sono diversi: la completa ha rango maggiore.",
    "sol": "<b>Incompatibile.</b> Per Rouch&eacute;&ndash;Capelli: A diventa la matrice di righe tutte (1,1,1), rk(A)=1; la completa ha righe (1,1,1|1),(1,1,1|2),(1,1,1|3), rk(B)=2&gt;1&rArr; nessuna soluzione. Ogni valore critico va discusso a s&eacute;: qui det=0 <i>non</i> d&agrave; infinite soluzioni."
   }
  ]
 },
 {
  "pool": "sistemi",
  "src": "tipo 4 · fattorizzare det senza perdere radici (trabocchetto)",
  "steps": [
   {
    "t": "Per una matrice A(&alpha;) risulta det&#8202;A(&alpha;)=&alpha;&sup3;&minus;&alpha;. Quali sono TUTTI i valori critici del parametro?",
    "opts": [
     {
      "x": "&alpha; = &minus;1, 0, 1",
      "c": true
     },
     {
      "x": "&alpha; = 0, 1"
     },
     {
      "x": "&alpha; = 0"
     },
     {
      "x": "&alpha; = 1"
     }
    ],
    "hint": "Fattorizza completamente: &alpha;&sup3;&minus;&alpha;=&alpha;(&alpha;&sup2;&minus;1). Non fermarti a &alpha;(&alpha;&minus;1): perderesti &alpha;=&minus;1.",
    "sol": "<b>&minus;1, 0, 1.</b> &alpha;&sup3;&minus;&alpha;=&alpha;(&alpha;&minus;1)(&alpha;+1). Dimenticare la differenza di quadrati fa perdere il valore critico &alpha;=&minus;1."
   }
  ]
 },
 {
  "pool": "sistemi",
  "src": "tipo 4 · struttura affine delle soluzioni (trabocchetto)",
  "steps": [
   {
    "t": "Un sistema Ax=b compatibile e NON omogeneo, con spazio delle soluzioni di dimensione 2, ha come insieme delle soluzioni...",
    "opts": [
     {
      "x": "un sottospazio AFFINE: x&#8320; + (soluzioni di Ax=0)",
      "c": true
     },
     {
      "x": "un sottospazio vettoriale di dimensione 2"
     },
     {
      "x": "un solo punto"
     },
     {
      "x": "l&rsquo;insieme vuoto"
     }
    ],
    "hint": "Le soluzioni di un sistema non omogeneo non contengono 0 (a meno che b=0): sono un traslato dello spazio omogeneo.",
    "sol": "<b>Sottospazio affine.</b> Per il teorema di struttura delle soluzioni di un sistema lineare: soluzione generale = una soluzione particolare x&#8320; PI&Ugrave; tutte le soluzioni dell&rsquo;omogeneo associato. Omettere x&#8320; (o la parte omogenea) &egrave; l&rsquo;errore tipico. Non &egrave; un sottospazio vettoriale."
   }
  ]
 },
 {
  "pool": "sistemi",
  "src": "tipo 4 · giacitura = omogeneo associato",
  "steps": [
   {
    "t": "Per un sistema compatibile Ax=b, lo spazio delle soluzioni dell&rsquo;omogeneo associato Ax=0 rappresenta...",
    "opts": [
     {
      "x": "la giacitura (direzione) dello spazio affine delle soluzioni",
      "c": true
     },
     {
      "x": "l&rsquo;unica soluzione del sistema"
     },
     {
      "x": "sempre solo il vettore nullo"
     },
     {
      "x": "un insieme diverso e scollegato"
     }
    ],
    "hint": "Se x&#8320; e x&#8321; risolvono Ax=b, allora x&#8320;&minus;x&#8321; risolve Ax=0: le differenze tra soluzioni vivono nell&rsquo;omogeneo.",
    "sol": "<b>La giacitura.</b> Le soluzioni sono x&#8320;+ker(A): l&rsquo;omogeneo d&agrave; la direzione, la soluzione particolare la traslazione."
   }
  ]
 },
 {
  "pool": "sistemi",
  "src": "tipo 4 · compatibilit&agrave; parametrica sul termine noto",
  "steps": [
   {
    "t": "Il sistema con matrice A=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">2</span></div><div class=\"mrow\"><span class=\"mcell\">2</span><span class=\"mcell\">4</span></div></span> e termine noto b=(1,c) &egrave; compatibile per quali c?",
    "opts": [
     {
      "x": "Solo c=2 (allora infinite soluzioni)",
      "c": true
     },
     {
      "x": "Per ogni c (soluzione unica)"
     },
     {
      "x": "Per ogni c&ne;2"
     },
     {
      "x": "Per nessun c"
     }
    ],
    "hint": "La seconda riga di A &egrave; il doppio della prima: rk(A)=1. Per compatibilit&agrave; anche il termine noto deve rispettare la stessa proporzione.",
    "sol": "<b>Solo c=2.</b> Per Rouch&eacute;&ndash;Capelli: R&#8322;=2R&#8321; in A, quindi serve c=2&middot;1=2 (rk(B)=rk(A)=1); allora resta l&rsquo;unica equazione x+2y=1 (infinite soluzioni, dim 1). Se c&ne;2, rk(B)=2&gt;1=rk(A): incompatibile."
   }
  ]
 },
 {
  "pool": "sistemi",
  "src": "tipo 4 · valore che d&agrave; infinite soluzioni",
  "steps": [
   {
    "t": "Per quale k il sistema { x+y=1 ; 2x+2y=k } ha infinite soluzioni?",
    "opts": [
     {
      "x": "k=2",
      "c": true
     },
     {
      "x": "k=1"
     },
     {
      "x": "k=0"
     },
     {
      "x": "nessun k"
     }
    ],
    "hint": "La seconda equazione &egrave; 2&times; la prima solo se k=2; altrimenti le due si contraddicono.",
    "sol": "<b>k=2.</b> Con k=2 le equazioni coincidono (una sola condizione): infinite soluzioni. Con k&ne;2 il sistema &egrave; incompatibile."
   }
  ]
 },
 {
  "pool": "sistemi",
  "src": "tipo 4 · forma esplicita delle soluzioni",
  "steps": [
   {
    "t": "Con k=2, l&rsquo;insieme delle soluzioni di { x+y=1 ; 2x+2y=2 } &egrave;:",
    "opts": [
     {
      "x": "(1,0) + Span((&minus;1,1))",
      "c": true
     },
     {
      "x": "Span((&minus;1,1))"
     },
     {
      "x": "{(1,0)}"
     },
     {
      "x": "tutto &#8477;&sup2;"
     }
    ],
    "hint": "Risolvi x+y=1: y libero, x=1&minus;y. Scrivi (x,y) come punto + parametro. NON dimenticare la soluzione particolare.",
    "sol": "<b>(1,0)+Span((&minus;1,1)).</b> Posto y=t: (x,y)=(1&minus;t,t)=(1,0)+t(&minus;1,1). Retta affine non passante per l&rsquo;origine."
   }
  ]
 },
 {
  "pool": "sistemi",
  "src": "tipo 4 · omogeneo con pi&ugrave; incognite che equazioni",
  "steps": [
   {
    "t": "Un sistema omogeneo con 3 equazioni e 5 incognite ha sempre soluzioni non banali?",
    "opts": [
     {
      "x": "S&igrave;: rk(A)&le;3&lt;5, quindi dim ker &ge; 2",
      "c": true
     },
     {
      "x": "No, potrebbe avere solo x=0"
     },
     {
      "x": "Solo se det&#8202;A=0"
     },
     {
      "x": "Solo se le equazioni sono indipendenti"
     }
    ],
    "hint": "dim(soluzioni)=n&minus;rk(A)&ge;5&minus;3=2&gt;0, qualunque sia il rango.",
    "sol": "<b>S&igrave;.</b> Per il teorema del rango (dim ker = n &minus; rk): con pi&ugrave; incognite che equazioni rk(A)&le;3&lt;5, quindi lo spazio delle soluzioni ha dim &ge; 2: sempre soluzioni non banali."
   }
  ]
 },
 {
  "pool": "sistemi",
  "src": "tipo 4 · parametro nel coefficiente, discussione completa",
  "steps": [
   {
    "t": "Per il sistema con A=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">k</span></div><div class=\"mrow\"><span class=\"mcell\">k</span><span class=\"mcell\">1</span></div></span> e b=(1,1), quando la soluzione &egrave; unica?",
    "opts": [
     {
      "x": "Per ogni k&ne;&plusmn;1",
      "c": true
     },
     {
      "x": "Per ogni k"
     },
     {
      "x": "Solo k=1"
     },
     {
      "x": "Per nessun k"
     }
    ],
    "hint": "det&#8202;A=1&minus;k&sup2;. Soluzione unica &hArr; det&ne;0.",
    "sol": "<b>k&ne;&plusmn;1.</b> det&#8202;A=1&minus;k&sup2;=0 per k=&plusmn;1 (valori critici); altrove &egrave; di Cramer. (Per k=1 le due equazioni coincidono &rarr; infinite; per k=&minus;1 si contraddicono &rarr; incompatibile.)"
   }
  ]
 },
 {
  "pool": "sistemi",
  "src": "tipo 4 · numero di parametri liberi",
  "steps": [
   {
    "t": "Un sistema compatibile con 4 incognite e rk(A)=3 ha soluzioni descritte da quanti parametri liberi?",
    "opts": [
     {
      "x": "1",
      "c": true
     },
     {
      "x": "3"
     },
     {
      "x": "4"
     },
     {
      "x": "0"
     }
    ],
    "hint": "Numero di parametri liberi = n &minus; rk(A).",
    "sol": "<b>1.</b> Per il teorema del rango il numero di parametri liberi = n &minus; rk = 4&minus;3=1: lo spazio affine delle soluzioni ha dimensione 1 (una retta affine)."
   }
  ]
 },
 {
  "pool": "sistemi",
  "src": "tipo 4 · lettura geometrica",
  "steps": [
   {
    "t": "Un sistema di due equazioni in &#8477;&sup3;, con rk(A)=2 e compatibile non omogeneo, ha come soluzioni...",
    "opts": [
     {
      "x": "una retta affine (dim 1)",
      "c": true
     },
     {
      "x": "un piano per l&rsquo;origine"
     },
     {
      "x": "un solo punto"
     },
     {
      "x": "un piano affine (dim 2)"
     }
    ],
    "hint": "dim soluzioni = 3&minus;rk(A)=1. Non omogeneo &rArr; non passa per l&rsquo;origine.",
    "sol": "<b>Retta affine.</b> Intersezione di due piani non paralleli in &#8477;&sup3;: dim 1, traslata dall&rsquo;origine perch&eacute; b&ne;0."
   }
  ]
 },
 {
  "pool": "sistemi",
  "src": "2appellosol Es. 3 · coefficienti irrazionali",
  "steps": [
   {
    "t": "Il sistema { x + &radic;2&#8202;y = 0 } in &#8477;&sup2; ha &#8734;&sup1; soluzioni. Quante di esse hanno ENTRAMBE le componenti razionali?",
    "opts": [
     {
      "x": "Una sola: (0,0)",
      "c": true
     },
     {
      "x": "Infinite"
     },
     {
      "x": "Nessuna"
     },
     {
      "x": "Esattamente due"
     }
    ],
    "hint": "Le soluzioni sono (x,y)=t(&minus;&radic;2,1). Perch&eacute; x=&minus;&radic;2&#8202;t sia razionale con y=t razionale?",
    "sol": "<b>Solo (0,0).</b> Soluzioni: (&minus;&radic;2&#8202;t, t). Se t&isin;&#8474;\\{0} allora &minus;&radic;2&#8202;t &egrave; irrazionale: non entrambe razionali. Resta solo t=0. Il coefficiente irrazionale filtra le soluzioni razionali."
   }
  ]
 },
 {
  "pool": "sistemi",
  "src": "Prova 8_2_23sol Es. 2 · vincolo su una coordinata",
  "steps": [
   {
    "t": "Un sistema compatibile ha soluzione generale (x,y,z)=(1,0,2)+t(&minus;1,1,3). Per quale valore di t la soluzione ha prima coordinata x=0?",
    "opts": [
     {
      "x": "t=1, dando (0,1,5)",
      "c": true
     },
     {
      "x": "t=0, dando (1,0,2)"
     },
     {
      "x": "t=&minus;1"
     },
     {
      "x": "nessun t"
     }
    ],
    "hint": "Imponi la condizione x=0 sulla forma parametrica: 1&minus;t=0.",
    "sol": "<b>t=1.</b> x=1&minus;t=0 &rArr; t=1, da cui (x,y,z)=(1,0,2)+1&middot;(&minus;1,1,3)=(0,1,5). Un vincolo su una coordinata seleziona un valore del parametro nella famiglia di soluzioni."
   }
  ]
 },
 {
  "pool": "sistemi",
  "src": "b02 Scritto3 / b03 soluzioniesame20200623 · parametro k&isin;&#8450;",
  "steps": [
   {
    "t": "Un sistema 3&times;3 a coefficienti in &#8450; ha det della matrice dei coefficienti uguale a k&sup2;+1. Per quali k il sistema NON &egrave; di Cramer?",
    "opts": [
     {
      "x": "k=&plusmn;i",
      "c": true
     },
     {
      "x": "k=&plusmn;1"
     },
     {
      "x": "k=0"
     },
     {
      "x": "nessun k"
     }
    ],
    "hint": "Non-Cramer &hArr; det=0. In &#8450; l&rsquo;equazione k&sup2;+1=0 ha due radici.",
    "sol": "<b>k=&plusmn;i.</b> In &#8450;, k&sup2;+1=0 &hArr; k=&plusmn;i (radici assenti in &#8477;). Per k&ne;&plusmn;i il sistema ha soluzione unica; per k=&plusmn;i si studia con Rouch&eacute;&ndash;Capelli."
   }
  ]
 },
 {
  "pool": "sistemi",
  "src": "b03 geomefis24.1.22 Es.1 · teorema di struttura",
  "steps": [
   {
    "t": "Ax=b &egrave; compatibile e l&rsquo;omogeneo associato Ax=0 ha spazio di soluzioni di dimensione 2. Com&rsquo;&egrave; fatto l&rsquo;insieme delle soluzioni di Ax=b?",
    "opts": [
     {
      "x": "x&#8320;+W: una soluzione particolare pi&ugrave; lo spazio W (dim 2) dell&rsquo;omogeneo",
      "c": true
     },
     {
      "x": "coincide con W"
     },
     {
      "x": "&egrave; un sottospazio vettoriale di dim 2"
     },
     {
      "x": "&egrave; un unico punto"
     }
    ],
    "hint": "Le soluzioni di un sistema compatibile formano un sottospazio AFFINE: un traslato del nucleo.",
    "sol": "<b>x&#8320;+W.</b> Una soluzione particolare pi&ugrave; tutte quelle dell&rsquo;omogeneo: sottospazio affine di dimensione 2, non vettoriale se b&ne;0 (non contiene 0). La differenza di due soluzioni sta in W."
   }
  ]
 },
 {
  "pool": "sistemi",
  "src": "b03 soluzioniesame20200713 Es.2 · sistema rettangolare 2&times;3",
  "steps": [
   {
    "t": "Un sistema di 2 equazioni in 3 incognite ha rk&#8202;A=2 ed &egrave; compatibile. Quante soluzioni ha?",
    "opts": [
     {
      "x": "&infin;&sup1; (una retta affine)",
      "c": true
     },
     {
      "x": "una sola"
     },
     {
      "x": "nessuna"
     },
     {
      "x": "&infin;&sup2;"
     }
    ],
    "hint": "dim dello spazio delle soluzioni = numero incognite &minus; rk&#8202;A = 3&minus;2.",
    "sol": "<b>&infin;&sup1;.</b> Per il teorema di Rouch&eacute;&ndash;Capelli, compatibile con rk&#8202;A=2 in 3 incognite: le soluzioni formano un sottospazio affine di dimensione 3&minus;2=1, una retta. Il numero di parametri liberi &egrave; n&minus;rk."
   }
  ]
 },
 {
  "pool": "sistemi",
  "src": "b02 esame1 Es.1 · due sistemi omogenei &rarr; U&#8745;W",
  "steps": [
   {
    "t": "U e W sono gli spazi delle soluzioni di due sistemi omogenei in &#8477;&#8308;. Come si trova U&#8745;W?",
    "opts": [
     {
      "x": "risolvendo l&rsquo;unico sistema che UNISCE tutte le equazioni dei due",
      "c": true
     },
     {
      "x": "sommando le dimensioni"
     },
     {
      "x": "intersecando solo le prime equazioni"
     },
     {
      "x": "U&#8745;W &egrave; sempre {0}"
     }
    ],
    "hint": "Un vettore sta in U&#8745;W &hArr; soddisfa TUTTE le equazioni di entrambi i sistemi.",
    "sol": "<b>Si impila un unico sistema con tutte le equazioni</b> di entrambi: le sue soluzioni sono esattamente U&#8745;W. Poi U+W si ottiene per Grassmann o unendo i generatori."
   }
  ]
 },
 {
  "pool": "sistemi",
  "src": "b01 / b02 esame2 Es.2 · teorema dell&rsquo;orlato (rango parametrico)",
  "steps": [
   {
    "t": "Per determinare il rango di A(k) al variare del parametro k, il teorema dell&rsquo;orlato afferma che rk&#8202;A=r quando:",
    "opts": [
     {
      "x": "esiste un minore r&times;r non nullo e TUTTI i suoi orlati (r+1)&times;(r+1) sono nulli",
      "c": true
     },
     {
      "x": "il determinante di A &egrave; non nullo"
     },
     {
      "x": "tutti i minori 2&times;2 sono nulli"
     },
     {
      "x": "la traccia vale r"
     }
    ],
    "hint": "Il teorema dell&rsquo;orlato riduce il calcolo del rango a un minore non nullo di ordine r e ai soli minori che lo &laquo;orlano&raquo;.",
    "sol": "<b>Esiste un minore r&times;r non nullo e tutti i suoi orlati (r+1)&times;(r+1) sono nulli.</b> Per il teorema dell&rsquo;orlato (dei minori orlati) non serve annullare TUTTI i minori di ordine r+1: bastano quelli che bordano un minore fondamentale non nullo. Al variare di k si studia dove questi si annullano, individuando i valori critici in cui il rango cala."
   }
  ]
 },
 {
  "pool": "sistemi",
  "src": "MODUS OPERANDI · discutere un sistema con parametro",
  "steps": [
   {
    "t": "<span class=\"lbl\">MODUS OPERANDI</span> Devi discutere Ax=b con un parametro t che compare nei coefficienti. Qual &egrave; la procedura corretta?",
    "opts": [
     {
      "x": "Studi rk(A) e rk(B) al variare di t, isoli i valori critici dove il rango cala, poi discuti a parte il caso generico e OGNI valore critico con Rouch&eacute;&ndash;Capelli",
      "c": true
     },
     {
      "x": "Sostituisci subito t=0, risolvi, e generalizzi il risultato agli altri t"
     },
     {
      "x": "Calcoli solo det&#8202;A: se det&#8202;A=0 il sistema ha infinite soluzioni, altrimenti nessuna"
     },
     {
      "x": "Riduci a scala la sola completa B e conti i pivot: quello &egrave; il numero di soluzioni"
     }
    ],
    "hint": "La compatibilit&agrave; si decide sempre confrontando rk(A) e rk(B). Il determinante da solo (quando A &egrave; quadrata) individua i valori critici, ma poi ciascuno va discusso singolarmente: det=0 non dice se le soluzioni sono infinite o assenti.",
    "sol": "<b>Prima procedura.</b> Impianto corretto per il teorema di Rouch&eacute;&ndash;Capelli: (1) calcola rk(A) al variare di t &mdash; se A &egrave; quadrata, det&#8202;A(t)=0 individua i valori critici; (2) per t generico (rango massimo) il sistema &egrave; di Cramer, soluzione unica; (3) per ciascun valore critico ricalcoli rk(A) e rk(B): se uguali, infinite soluzioni (dim n&minus;rk); se rk(B)&gt;rk(A), incompatibile. Sostituire un solo valore o guardare solo det&#8202;A salta casi."
   }
  ]
 },
 {
  "pool": "sistemi",
  "src": "MODUS OPERANDI · struttura affine e dimensione delle soluzioni",
  "steps": [
   {
    "t": "<span class=\"lbl\">MODUS OPERANDI</span> Come stabilisci se le soluzioni di Ax=b formano uno spazio affine e di che dimensione?",
    "opts": [
     {
      "x": "Verifichi la compatibilit&agrave; con Rouch&eacute;&ndash;Capelli; se compatibile e b&ne;0 sono un sottospazio affine di dimensione n&minus;rk(A) = (una soluzione particolare) + (nucleo di A)",
      "c": true
     },
     {
      "x": "Sono sempre un sottospazio vettoriale di dimensione n&minus;rk(A)"
     },
     {
      "x": "La dimensione &egrave; m&minus;rk(A), con m = numero di equazioni"
     },
     {
      "x": "La dimensione &egrave; rk(A): tanti parametri quanti i pivot"
     }
    ],
    "hint": "La dimensione dipende dal numero di INCOGNITE n (colonne), non dal numero di equazioni m. E un sistema non omogeneo (b&ne;0) NON contiene lo 0: &egrave; affine, non vettoriale.",
    "sol": "<b>Prima procedura.</b> Per il teorema di struttura: se il sistema &egrave; compatibile, l&rsquo;insieme delle soluzioni &egrave; x&#8320; + ker(A), un sottospazio affine di dimensione n&minus;rk(A) (parametri liberi = incognite meno rango). &Egrave; vettoriale solo se b=0 (contiene l&rsquo;origine); se b&ne;0 &egrave; un traslato del nucleo. Usare m al posto di n, o chiamarlo vettoriale, sono gli errori tipici."
   }
  ]
 },
 {
  "pool": "sistemi",
  "src": "MODUS OPERANDI · scrivere la soluzione generale (particolare + nucleo)",
  "steps": [
   {
    "t": "<span class=\"lbl\">MODUS OPERANDI</span> Un sistema Ax=b &egrave; compatibile con infinite soluzioni. Per scriverne la soluzione GENERALE, che fai?",
    "opts": [
     {
      "x": "Trovi una soluzione particolare x&#8320; di Ax=b e una base del nucleo di A (soluzioni di Ax=0); la generale &egrave; x&#8320; + (combinazioni lineari della base del nucleo)",
      "c": true
     },
     {
      "x": "Ti basta una base del nucleo di A: quella descrive gi&agrave; tutte le soluzioni"
     },
     {
      "x": "Trovi tutte le soluzioni particolari x&#8320;, x&#8321;, &hellip; e le sommi tra loro"
     },
     {
      "x": "Poni tutte le incognite uguali a un unico parametro t"
     }
    ],
    "hint": "Manca sempre un pezzo se dimentichi x&#8320; (la traslazione) OPPURE il nucleo (la direzione). Il nucleo da solo ti d&agrave; le soluzioni dell&rsquo;omogeneo, non del sistema con b&ne;0.",
    "sol": "<b>Prima procedura.</b> Teorema di struttura: soluzione generale = una soluzione particolare x&#8320; + soluzione generale dell&rsquo;omogeneo associato (una base del nucleo, con coefficienti liberi). Servono ENTRAMBI: x&#8320; colloca l&rsquo;affine nello spazio, il nucleo ne d&agrave; la giacitura. Sommare pi&ugrave; soluzioni particolari non ha senso (la loro differenza sta nel nucleo, la somma no)."
   }
  ]
 },
 {
  "pool": "sistemi",
  "src": "b03 · discussione completa 3&times;3 con due valori critici",
  "steps": [
   {
    "t": "<span class=\"lbl\">L1</span> Sia A=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">t</span><span class=\"mcell\">1</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">t</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span><span class=\"mcell\">t</span></div></span>. Quali sono i valori critici di t (dove il sistema Ax=b non &egrave; di Cramer)?",
    "opts": [
     {
      "x": "t=1 e t=&minus;2",
      "c": true
     },
     {
      "x": "solo t=1"
     },
     {
      "x": "t=1 e t=&minus;1"
     },
     {
      "x": "t=0 e t=1"
     }
    ],
    "hint": "det&#8202;A=t&sup3;&minus;3t+2. Fattorizza completamente: NON fermarti al fattore (t&minus;1), perch&eacute; resta un secondo fattore che d&agrave; un&rsquo;altra radice.",
    "sol": "<b>t=1 (doppio) e t=&minus;2.</b> det&#8202;A=t&sup3;&minus;3t+2=(t&minus;1)&sup2;(t+2). Per t&ne;1,&minus;2 il sistema &egrave; di Cramer (soluzione unica). I due valori critici vanno discussi separatamente.",
    "cont": "Continua &rarr; discuti il caso t=1"
   },
   {
    "t": "<span class=\"lbl\">L2</span> Per t=1 e b=(1,1,1), il sistema A&#8202;x=b &egrave;...",
    "opts": [
     {
      "x": "compatibile con &infin;&sup2; soluzioni: rk(A)=rk(B)=1",
      "c": true
     },
     {
      "x": "incompatibile: rk(A)=1 &lt; rk(B)=2"
     },
     {
      "x": "di Cramer, soluzione unica"
     },
     {
      "x": "compatibile con &infin;&sup1; soluzioni"
     }
    ],
    "hint": "Per t=1 tutte le righe di A diventano (1,1,1): rk(A)=1. Il termine noto (1,1,1) &egrave; coerente con questa unica riga? Confronta rk(A) e rk(B).",
    "sol": "<b>Compatibile, &infin;&sup2; soluzioni.</b> Per t=1 le tre righe coincidono con (1,1,1) e i termini noti sono tutti 1: la completa ha righe (1,1,1|1) ripetute, rk(B)=1=rk(A). Per Rouch&eacute;&ndash;Capelli compatibile; dim = n&minus;rk = 3&minus;1 = 2 (un piano affine).",
    "cont": "Continua &rarr; ora il caso t=&minus;2"
   },
   {
    "t": "<span class=\"lbl\">L3</span> Per t=&minus;2 e b=(1,1,1), lo stesso sistema &egrave;...",
    "opts": [
     {
      "x": "incompatibile: rk(A)=2 ma rk(B)=3",
      "c": true
     },
     {
      "x": "compatibile con &infin;&sup1; soluzioni: rk(A)=rk(B)=2"
     },
     {
      "x": "di Cramer"
     },
     {
      "x": "compatibile con &infin;&sup2; soluzioni"
     }
    ],
    "hint": "Per t=&minus;2 le COLONNE di A sommano a zero, quindi (1,1,1)&middot;(ogni colonna)=0: il vettore (1,1,1) sta nel nucleo sinistro di A. Perch&eacute; b sia nello spazio colonne serve (1,1,1)&middot;b=0. Vale per b=(1,1,1)?",
    "sol": "<b>Incompatibile.</b> Per t=&minus;2, det&#8202;A=0 con rk(A)=2 (un minore 2&times;2 &egrave; non nullo). Le colonne di A sommano a 0, cio&egrave; (1,1,1) &egrave; ortogonale allo spazio colonne; ma (1,1,1)&middot;b=3&ne;0, quindi b non vi appartiene: rk(B)=3&gt;2=rk(A). Per Rouch&eacute;&ndash;Capelli nessuna soluzione. Stesso det=0 di t=1, esito opposto: ecco perch&eacute; ogni valore critico va discusso a s&eacute;."
   }
  ]
 },
 {
  "pool": "sistemi",
  "src": "tipo 4 · omogeneo vs non omogeneo, stesso A (confronto struttura)",
  "steps": [
   {
    "t": "Sia A di rango 2 in 3 incognite. Confronta l&rsquo;omogeneo Ax=0 col non omogeneo Ax=b (compatibile, b&ne;0): come sono i due insiemi di soluzioni?",
    "opts": [
     {
      "x": "Entrambi di dimensione 1; l&rsquo;omogeneo &egrave; una retta per l&rsquo;origine (sottospazio vettoriale), il non omogeneo una retta affine traslata (non contiene 0)",
      "c": true
     },
     {
      "x": "L&rsquo;omogeneo ha dimensione 1, il non omogeneo dimensione 2"
     },
     {
      "x": "Sono lo stesso identico insieme"
     },
     {
      "x": "L&rsquo;omogeneo &egrave; solo {0}, il non omogeneo una retta"
     }
    ],
    "hint": "La dimensione dipende solo da n&minus;rk(A), UGUALE per i due sistemi (stessa A): 3&minus;2=1 in entrambi. Cambia solo la posizione: l&rsquo;omogeneo passa per 0, il non omogeneo no.",
    "sol": "<b>Stessa dimensione 1, posizione diversa.</b> Per il teorema del rango dim = n&minus;rk = 1 per entrambi. Per il teorema di struttura le soluzioni di Ax=b sono x&#8320;+ker(A): stesso nucleo (la retta dell&rsquo;omogeneo) traslato di x&#8320;. L&rsquo;omogeneo &egrave; vettoriale (contiene 0), il non omogeneo affine (b&ne;0 &rArr; 0 non &egrave; soluzione)."
   }
  ]
 },
 {
  "pool": "sistemi",
  "src": "b03 soluzioniesame20200713 · scrivere la soluzione generale",
  "steps": [
   {
    "t": "L&rsquo;insieme delle soluzioni del sistema { x+y+z=6 ; x&minus;y+z=2 } &egrave;:",
    "opts": [
     {
      "x": "(4,2,0) + Span((&minus;1,0,1))",
      "c": true
     },
     {
      "x": "Span((&minus;1,0,1))"
     },
     {
      "x": "(4,2,0) + Span((1,1,1))"
     },
     {
      "x": "il solo punto (4,2,0)"
     }
    ],
    "hint": "Sottraendo le due equazioni: 2y=4 &rArr; y=2. Resta x+z=4 con z libero. Scrivi (x,y,z) come soluzione particolare + parametro&middot;(direzione del nucleo). NON dimenticare x&#8320;.",
    "sol": "<b>(4,2,0)+Span((&minus;1,0,1)).</b> Da x&minus;y+z=2 e x+y+z=6 segue y=2; posto z=t: x=4&minus;t, quindi (x,y,z)=(4&minus;t,2,t)=(4,2,0)+t(&minus;1,0,1). Per il teorema di struttura: soluzione particolare (4,2,0) + nucleo Span((&minus;1,0,1)). Retta affine di dimensione n&minus;rk=3&minus;2=1."
   }
  ]
 },
 {
  "pool": "sistemi",
  "src": "b02 · sistema sovradeterminato incompatibile (trabocchetto rk A vs rk B)",
  "steps": [
   {
    "t": "Il sistema { x+y=1 ; x&minus;y=3 ; 2x+y=1 } (3 equazioni, 2 incognite) &egrave; compatibile?",
    "opts": [
     {
      "x": "No, incompatibile: rk(A)=2 ma rk(B)=3",
      "c": true
     },
     {
      "x": "S&igrave;, soluzione unica x=2, y=&minus;1"
     },
     {
      "x": "S&igrave;, infinite soluzioni"
     },
     {
      "x": "S&igrave;, perch&eacute; ci sono pi&ugrave; equazioni che incognite"
     }
    ],
    "hint": "Le prime due danno x=2, y=&minus;1. Ma DEVI verificare la terza: 2&middot;2+(&minus;1)=3&ne;1. Se una soluzione candidata non soddisfa TUTTE le equazioni, rk(B) supera rk(A).",
    "sol": "<b>Incompatibile.</b> Le prime due equazioni danno x=2, y=&minus;1, che per&ograve; viola la terza (2x+y=3&ne;1). Per Rouch&eacute;&ndash;Capelli: A ha 2 colonne, rk(A)=2; la completa B ha rk=3&gt;2, quindi nessuna soluzione. L&rsquo;errore &egrave; fermarsi alle prime due equazioni e non confrontare rk(A) con rk(B) su TUTTO il sistema."
   }
  ]
 },
 {
  "pool": "sistemi",
  "src": "tipo 4 · parametro sul termine noto con riga dipendente",
  "steps": [
   {
    "t": "Data A=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span><span class=\"mcell\">2</span></div></span> e b=(1,2,h), per quali h il sistema &egrave; compatibile?",
    "opts": [
     {
      "x": "Solo h=3, con &infin;&sup1; soluzioni",
      "c": true
     },
     {
      "x": "Per ogni h, soluzione unica"
     },
     {
      "x": "Solo h=3, con soluzione unica"
     },
     {
      "x": "Per ogni h&ne;3"
     }
    ],
    "hint": "La terza riga di A &egrave; la somma delle prime due: rk(A)=2. Per compatibilit&agrave; il termine noto deve rispettare la STESSA relazione: h = (primo)+(secondo).",
    "sol": "<b>Solo h=3.</b> R&#8323;=R&#8321;+R&#8322; in A &rArr; rk(A)=2. Per Rouch&eacute;&ndash;Capelli serve che la completa mantenga rk=2, cio&egrave; h=1+2=3 (altrimenti rk(B)=3&gt;2, incompatibile). Con h=3 le soluzioni sono &infin;&sup1; (dim = 3&minus;2 = 1), non uniche: rk(A)=2&lt;3."
   }
  ]
 },
 {
  "pool": "sistemi",
  "src": "tipo 4 · regola di Cramer, forma della soluzione",
  "steps": [
   {
    "t": "Per un sistema di Cramer Ax=b (A quadrata n&times;n, det&#8202;A&ne;0), la regola di Cramer d&agrave; la i-esima incognita come:",
    "opts": [
     {
      "x": "x&#8305; = det(A&#8305;)/det(A), dove A&#8305; &egrave; A con la i-esima colonna sostituita da b",
      "c": true
     },
     {
      "x": "x&#8305; = det(A)/det(A&#8305;)"
     },
     {
      "x": "x&#8305; = det(A&#8305;), senza dividere"
     },
     {
      "x": "x&#8305; = b&#8305;/det(A), con b&#8305; la i-esima componente di b"
     }
    ],
    "hint": "Si sostituisce la COLONNA i-esima di A col vettore b, si prende il determinante e si divide per det&#8202;A (non il contrario, e non senza dividere).",
    "sol": "<b>x&#8305;=det(A&#8305;)/det(A).</b> Per il teorema di Cramer, valido solo se det&#8202;A&ne;0: A&#8305; &egrave; la matrice ottenuta rimpiazzando la i-esima colonna di A col termine noto b. La divisione per det&#8202;A &egrave; essenziale &mdash; se det&#8202;A=0 la regola non si applica e serve Rouch&eacute;&ndash;Capelli."
   }
  ]
 },
 {
  "pool": "sistemi",
  "src": "tipo 4 · omogeneo quadrato singolare (trabocchetto dim = rk)",
  "steps": [
   {
    "t": "Un sistema omogeneo Ax=0 con A quadrata 3&times;3 e rk(A)=2 ha spazio delle soluzioni di dimensione...",
    "opts": [
     {
      "x": "1",
      "c": true
     },
     {
      "x": "2"
     },
     {
      "x": "0"
     },
     {
      "x": "3"
     }
    ],
    "hint": "dim delle soluzioni = n&minus;rk(A) = 3&minus;2, NON rk(A). Confondere la dimensione col rango &egrave; l&rsquo;errore classico.",
    "sol": "<b>1.</b> Per il teorema del rango dim(ker&#8202;A)=n&minus;rk(A)=3&minus;2=1. La dimensione dello spazio delle soluzioni &egrave; il numero di incognite meno il rango, non il rango stesso (che qui vale 2). C&rsquo;&egrave; una retta di soluzioni non banali."
   }
  ]
 },
 {
  "pool": "sistemi",
  "src": "tipo 4 · matrice rettangolare, il determinante non si usa (trabocchetto)",
  "steps": [
   {
    "t": "A &egrave; di tipo 3&times;4 (3 equazioni, 4 incognite). Per discutere la compatibilit&agrave; di Ax=b puoi usare det&#8202;A?",
    "opts": [
     {
      "x": "No: A non &egrave; quadrata, det&#8202;A non esiste; si usa il confronto rk(A) vs rk(B)",
      "c": true
     },
     {
      "x": "S&igrave;: se det&#8202;A&ne;0 il sistema &egrave; di Cramer"
     },
     {
      "x": "S&igrave;: se det&#8202;A=0 il sistema &egrave; incompatibile"
     },
     {
      "x": "S&igrave;, ma solo dopo aver aggiunto una riga di zeri per renderla quadrata"
     }
    ],
    "hint": "Il determinante &egrave; definito solo per matrici QUADRATE. Con m&ne;n non c&rsquo;&egrave; det&#8202;A: la compatibilit&agrave; passa sempre per i ranghi, non per il determinante.",
    "sol": "<b>No.</b> det&#8202;A esiste solo se A &egrave; quadrata. Per un sistema rettangolare 3&times;4 la discussione &egrave; solo via Rouch&eacute;&ndash;Capelli: rk(A)=rk(B) per la compatibilit&agrave;, e poi dim soluzioni = 4&minus;rk(A). Qui rk(A)&le;3&lt;4, quindi se compatibile ha sempre infinite soluzioni. Aggiungere righe di zeri lascia det=0 e non aggiunge informazione."
   }
  ]
 }
];

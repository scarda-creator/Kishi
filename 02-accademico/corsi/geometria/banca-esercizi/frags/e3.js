Q.e3 = [
 {
  "pool": "e3",
  "src": "tipo 7 · direttore da equazioni parametriche",
  "steps": [
   {
    "t": "La retta r ha equazioni (x,y,z)=(1,0,2)+t(2,1,&minus;1). Qual &egrave; un suo vettore direttore?",
    "opts": [
     {
      "x": "(2,1,&minus;1)",
      "c": true
     },
     {
      "x": "(1,0,2)"
     },
     {
      "x": "(2,1,1)"
     },
     {
      "x": "(1,2,&minus;1)"
     }
    ],
    "hint": "Nella forma P+t&#8202;v il direttore &egrave; v (i coefficienti di t), non il punto base P.",
    "sol": "Per la definizione di equazione parametrica di una retta (X=P+t&#8202;v, con v direttore): (2,1,&minus;1) sono i coefficienti del parametro t. Il punto (1,0,2) &egrave; solo un punto di passaggio, non la direzione."
   }
  ]
 },
 {
  "pool": "e3",
  "src": "tipo 7 · retta per due punti",
  "steps": [
   {
    "t": "Un vettore direttore della retta per A=(1,1,1) e B=(3,2,0) &egrave;:",
    "opts": [
     {
      "x": "(2,1,&minus;1)",
      "c": true
     },
     {
      "x": "(4,3,1)"
     },
     {
      "x": "(1,1,1)"
     },
     {
      "x": "(3,2,0)"
     }
    ],
    "hint": "Il direttore &egrave; la differenza B&minus;A, non la somma n&eacute; uno dei due punti.",
    "sol": "Per la definizione di direttore della retta per due punti (v=B&minus;A): B&minus;A=(3&minus;1,2&minus;1,0&minus;1)=(2,1,&minus;1). La somma (4,3,1) non ha significato geometrico qui."
   }
  ]
 },
 {
  "pool": "e3",
  "src": "tipo 7 · normale a un piano cartesiano",
  "steps": [
   {
    "t": "Il piano &pi;: 2x&minus;y+3z=5 ha come vettore normale:",
    "opts": [
     {
      "x": "(2,&minus;1,3)",
      "c": true
     },
     {
      "x": "(2,&minus;1,&minus;3)"
     },
     {
      "x": "(&minus;1,2,3)"
     },
     {
      "x": "(5,5,5)"
     }
    ],
    "hint": "Nell&rsquo;equazione ax+by+cz=d, il normale &egrave; n=(a,b,c). Il termine noto d non entra.",
    "sol": "Per l&rsquo;equazione cartesiana del piano (ax+by+cz=d ha vettore normale (a,b,c)): n=(2,&minus;1,3), i coefficienti di x,y,z. Il 5 &egrave; solo la quota del piano, non incide sulla direzione normale."
   }
  ]
 },
 {
  "pool": "e3",
  "src": "tipo 7 · distanza punto-piano",
  "steps": [
   {
    "t": "Qual &egrave; la distanza del punto P=(1,1,1) dal piano &pi;: x+2y+2z=0?",
    "opts": [
     {
      "x": "5/3",
      "c": true
     },
     {
      "x": "5"
     },
     {
      "x": "5/9"
     },
     {
      "x": "3/5"
     }
    ],
    "hint": "d(P,&pi;)=|a x&#8320;+b y&#8320;+c z&#8320;&minus;d| / &radic;(a&sup2;+b&sup2;+c&sup2;). Qui (a,b,c)=(1,2,2), d=0.",
    "sol": "Per la formula della distanza punto-piano d=|ax&#8320;+by&#8320;+cz&#8320;&minus;d|/&#8741;n&#8741;: d=|1+2+2&minus;0| / &radic;(1+4+4)=5/&radic;9=5/3. Il denominatore &egrave; la norma del normale, non la sua somma."
   }
  ]
 },
 {
  "pool": "e3",
  "src": "tipo 7 · piano per una retta e un punto esterno",
  "steps": [
   {
    "t": "Per costruire il piano che contiene la retta r (punto Q, direttore v) e un punto P non su r, il vettore normale &egrave;:",
    "opts": [
     {
      "x": "n = v &times; (P&minus;Q)",
      "c": true
     },
     {
      "x": "n = v"
     },
     {
      "x": "n = P&minus;Q"
     },
     {
      "x": "basta il punto P, senza normale"
     }
    ],
    "hint": "Il piano contiene due direzioni: v (lungo r) e P&minus;Q. Il normale &egrave; ortogonale a entrambe.",
    "sol": "n = v &times; (P&minus;Q): ortogonale sia alla retta sia al segmento QP. L&rsquo;equazione &egrave; n&middot;(X&minus;Q)=0. Da soli v o P&minus;Q non bastano a fissare il piano."
   }
  ]
 },
 {
  "pool": "e3",
  "src": "tipo 7 · rette parallele distinte",
  "steps": [
   {
    "t": "Siano r: (0,0,0)+t(1,2,3) e s: (1,0,0)+t(2,4,6). Qual &egrave; la loro posizione reciproca?",
    "opts": [
     {
      "x": "parallele e distinte",
      "c": true
     },
     {
      "x": "incidenti"
     },
     {
      "x": "sghembe"
     },
     {
      "x": "coincidenti"
     }
    ],
    "hint": "Direttori: (2,4,6)=2(1,2,3) &rArr; paralleli. Poi verifica se il punto (1,0,0) di s appartiene a r.",
    "sol": "Direttori proporzionali &rArr; parallele. Il punto (1,0,0) di s starebbe su r solo se (1,0,0)=t(1,2,3), impossibile. Quindi parallele e distinte (non coincidenti)."
   }
  ]
 },
 {
  "pool": "e3",
  "src": "tipo 7 · criterio incidenti vs sghembe",
  "steps": [
   {
    "t": "Due rette con direttori NON paralleli sono incidenti o sghembe a seconda che:",
    "opts": [
     {
      "x": "il prodotto misto (v<sub>r</sub>,v<sub>s</sub>,Q<sub>s</sub>&minus;Q<sub>r</sub>) sia =0 (incidenti) o &ne;0 (sghembe)",
      "c": true
     },
     {
      "x": "i punti base coincidano o no"
     },
     {
      "x": "le norme dei direttori siano uguali o no"
     },
     {
      "x": "il prodotto scalare v<sub>r</sub>&middot;v<sub>s</sub> sia 0 o no"
     }
    ],
    "hint": "Con direttori non paralleli le rette sono complanari &hArr; incidenti. La complanarit&agrave; si legge dal prodotto misto.",
    "sol": "Prodotto misto =0 &rArr; i tre vettori sono complanari &rArr; le rette stanno in un piano &rArr; incidenti. &ne;0 &rArr; non complanari &rArr; sghembe. Il prodotto scalare v<sub>r</sub>&middot;v<sub>s</sub> misura l&rsquo;angolo, non la posizione."
   }
  ]
 },
 {
  "pool": "e3",
  "src": "tipo 7 · sghembe = due condizioni (trabocchetto)",
  "steps": [
   {
    "t": "Due rette in &#8477;&sup3; che NON si intersecano sono necessariamente sghembe?",
    "opts": [
     {
      "x": "No: potrebbero essere parallele e distinte (non sghembe)",
      "c": true
     },
     {
      "x": "S&igrave;: nessun punto in comune &rArr; sghembe"
     },
     {
      "x": "S&igrave;, sempre in &#8477;&sup3;"
     },
     {
      "x": "No: senza punti comuni sono sempre incidenti"
     }
    ],
    "hint": "Le parallele distinte non hanno punti comuni, ma sono complanari, quindi NON sghembe. Sghembe = non complanari.",
    "sol": "No. Parallele distinte: nessun punto in comune, ma complanari &rArr; NON sghembe. Sghembe richiede DUE condizioni: direttori non paralleli E prodotto misto (v<sub>r</sub>,v<sub>s</sub>,Q<sub>s</sub>&minus;Q<sub>r</sub>)&ne;0. \"Non si intersecano\" da solo non basta."
   }
  ]
 },
 {
  "pool": "e3",
  "src": "tipo 7 · classificazione completa (L1+L2)",
  "steps": [
   {
    "t": "<span class=\"lbl\">L1</span> Siano r: (0,0,0)+t(1,0,0) e s: (0,1,0)+t(0,0,1). I direttori v<sub>r</sub>=(1,0,0) e v<sub>s</sub>=(0,0,1) sono paralleli?",
    "opts": [
     {
      "x": "No: non sono proporzionali",
      "c": true
     },
     {
      "x": "S&igrave;: sono proporzionali"
     },
     {
      "x": "Sono uguali"
     },
     {
      "x": "Sono opposti"
     }
    ],
    "hint": "Paralleli &hArr; v<sub>s</sub>=&lambda;v<sub>r</sub>. Esiste &lambda; con (0,0,1)=&lambda;(1,0,0)?",
    "sol": "No: nessun &lambda; d&agrave; (0,0,1)=&lambda;(1,0,0). Direttori indipendenti &rArr; le rette sono incidenti OPPURE sghembe: decide il prodotto misto.",
    "cont": "Continua &rarr; prodotto misto"
   },
   {
    "t": "<span class=\"lbl\">L2</span> Con Q<sub>s</sub>&minus;Q<sub>r</sub>=(0,1,0), il prodotto misto det[v<sub>r</sub>; v<sub>s</sub>; Q<sub>s</sub>&minus;Q<sub>r</sub>] vale &minus;1. Le rette sono:",
    "opts": [
     {
      "x": "sghembe (prodotto misto &ne;0)",
      "c": true
     },
     {
      "x": "incidenti"
     },
     {
      "x": "parallele"
     },
     {
      "x": "coincidenti"
     }
    ],
    "hint": "Prodotto misto &ne;0 &rArr; i tre vettori non sono complanari &rArr; le rette non stanno in uno stesso piano.",
    "sol": "Prodotto misto =&minus;1&ne;0 &rArr; non complanari &rArr; sghembe. Sono l&rsquo;asse x e una retta parallela all&rsquo;asse z per (0,1,0). Con gli stessi direttori, prodotto misto=0 avrebbe dato incidenti."
   }
  ]
 },
 {
  "pool": "e3",
  "src": "tipo 7 · distanza tra rette sghembe",
  "steps": [
   {
    "t": "La distanza tra due rette sghembe r,s (punti Q<sub>r</sub>,Q<sub>s</sub>, direttori v<sub>r</sub>,v<sub>s</sub>) &egrave;:",
    "opts": [
     {
      "x": "|det[v<sub>r</sub>,v<sub>s</sub>,Q<sub>s</sub>&minus;Q<sub>r</sub>]| / &#8741;v<sub>r</sub>&times;v<sub>s</sub>&#8741;",
      "c": true
     },
     {
      "x": "&#8741;Q<sub>s</sub>&minus;Q<sub>r</sub>&#8741;"
     },
     {
      "x": "|det[v<sub>r</sub>,v<sub>s</sub>,Q<sub>s</sub>&minus;Q<sub>r</sub>]|"
     },
     {
      "x": "sempre 0"
     }
    ],
    "hint": "&Egrave; l&rsquo;altezza del parallelepipedo di spigoli v<sub>r</sub>,v<sub>s</sub>,Q<sub>s</sub>&minus;Q<sub>r</sub>: volume diviso area di base.",
    "sol": "d=|det[v<sub>r</sub>,v<sub>s</sub>,Q<sub>s</sub>&minus;Q<sub>r</sub>]| / &#8741;v<sub>r</sub>&times;v<sub>s</sub>&#8741;. Numeratore = volume (|prodotto misto|), denominatore = area di base (&#8741;v<sub>r</sub>&times;v<sub>s</sub>&#8741;). Per rette parallele v<sub>r</sub>&times;v<sub>s</sub>=0 e la formula non si applica."
   }
  ]
 },
 {
  "pool": "e3",
  "src": "tipo 7 · piano per tre punti",
  "steps": [
   {
    "t": "Il vettore normale al piano per tre punti non allineati A,B,C &egrave;:",
    "opts": [
     {
      "x": "n=(B&minus;A)&times;(C&minus;A)",
      "c": true
     },
     {
      "x": "n=A+B+C"
     },
     {
      "x": "n=B&minus;A"
     },
     {
      "x": "n=(B&minus;A)+(C&minus;A)"
     }
    ],
    "hint": "Due vettori giacenti nel piano sono B&minus;A e C&minus;A; il normale &egrave; ortogonale a entrambi.",
    "sol": "n=(B&minus;A)&times;(C&minus;A): il prodotto vettoriale di due lati &egrave; ortogonale al piano. L&rsquo;equazione &egrave; n&middot;(X&minus;A)=0. La somma (B&minus;A)+(C&minus;A) giace NEL piano, non &egrave; normale."
   }
  ]
 },
 {
  "pool": "e3",
  "src": "tipo 7 · direttore da retta come intersezione di piani",
  "steps": [
   {
    "t": "La retta &egrave; l&rsquo;intersezione dei piani &pi;&#8321;: x+y+z=0 e &pi;&#8322;: x&minus;y=0. Un suo direttore &egrave;:",
    "opts": [
     {
      "x": "(1,1,&minus;2)",
      "c": true
     },
     {
      "x": "(1,1,1)"
     },
     {
      "x": "(1,&minus;1,0)"
     },
     {
      "x": "(2,0,1)"
     }
    ],
    "hint": "La retta giace in entrambi i piani &rArr; il direttore &egrave; ortogonale a ENTRAMBE le normali: v=n&#8321;&times;n&#8322;.",
    "sol": "v=n&#8321;&times;n&#8322;=(1,1,1)&times;(1,&minus;1,0)=(1,1,&minus;2). &Egrave; ortogonale sia a n&#8321;=(1,1,1) sia a n&#8322;=(1,&minus;1,0), quindi parallelo alla retta."
   }
  ]
 },
 {
  "pool": "e3",
  "src": "Compito 02_02_2016 Es. 4 · distanza punto-retta",
  "steps": [
   {
    "t": "La distanza del punto P dalla retta r (punto Q, direttore v) &egrave; data da:",
    "opts": [
     {
      "x": "&#8741;(P&minus;Q)&times;v&#8741; / &#8741;v&#8741;",
      "c": true
     },
     {
      "x": "&#8741;P&minus;Q&#8741;"
     },
     {
      "x": "|(P&minus;Q)&middot;v| / &#8741;v&#8741;"
     },
     {
      "x": "&#8741;(P&minus;Q)&times;v&#8741;"
     }
    ],
    "hint": "&Egrave; l&rsquo;altezza del parallelogramma di lati (P&minus;Q) e v: area diviso base. L&rsquo;area &egrave; la norma del prodotto vettoriale.",
    "sol": "<b>&#8741;(P&minus;Q)&times;v&#8741; / &#8741;v&#8741;.</b> Numeratore = area del parallelogramma su (P&minus;Q) e v; dividendo per la base &#8741;v&#8741; si ottiene l&rsquo;altezza = distanza. La formula col prodotto SCALARE d&agrave; invece la proiezione lungo r, non la distanza."
   }
  ]
 },
 {
  "pool": "e3",
  "src": "25sett_soluz Es. 3 · quattro punti e area",
  "steps": [
   {
    "t": "Dati A,B,C,D&isin;&#8477;&#179;, come si verifica che sono complanari e come si calcola l&rsquo;area del parallelogramma di lati AB e AC?",
    "opts": [
     {
      "x": "Complanari &hArr; det[B&minus;A, C&minus;A, D&minus;A]=0; area = &#8741;(B&minus;A)&times;(C&minus;A)&#8741;",
      "c": true
     },
     {
      "x": "Complanari &hArr; (B&minus;A)&middot;(C&minus;A)=0; area = &frac12; base&times;altezza"
     },
     {
      "x": "Sempre complanari; area = &#8741;B&minus;A&#8741;&middot;&#8741;C&minus;A&#8741;"
     },
     {
      "x": "Complanari &hArr; A+B+C+D=0"
     }
    ],
    "hint": "Complanarit&agrave; = i tre vettori B&minus;A, C&minus;A, D&minus;A stanno in un piano &hArr; prodotto misto (determinante) nullo. L&rsquo;area di un parallelogramma &egrave; la norma del prodotto vettoriale dei lati.",
    "sol": "<b>det[B&minus;A,C&minus;A,D&minus;A]=0 e area=&#8741;(B&minus;A)&times;(C&minus;A)&#8741;.</b> Prodotto misto nullo &hArr; i quattro punti sul medesimo piano. Il modulo del prodotto vettoriale di due lati adiacenti d&agrave; l&rsquo;area; il prodotto scalare misurerebbe invece l&rsquo;ortogonalit&agrave; dei lati."
   }
  ]
 },
 {
  "pool": "e3",
  "src": "15febbraiosoluz Es. 4 · posizione retta-piano",
  "steps": [
   {
    "t": "La retta r ha direttore v e passa per Q; il piano &alpha; ha normale n. Quando r &egrave; PARALLELA ad &alpha; (e non contenuta)?",
    "opts": [
     {
      "x": "v&middot;n=0 e Q&notin;&alpha;",
      "c": true
     },
     {
      "x": "v&times;n=0"
     },
     {
      "x": "v&middot;n&ne;0"
     },
     {
      "x": "v=n"
     }
    ],
    "hint": "r parallela al piano &hArr; il direttore &egrave; ortogonale alla normale (v&middot;n=0). Per NON essere contenuta serve che un punto di r non stia in &alpha;.",
    "sol": "<b>v&middot;n=0 e Q&notin;&alpha;.</b> v&middot;n=0 dice che r non \"buca\" il piano (parallela o contenuta). Se inoltre Q&notin;&alpha; &egrave; parallela e distinta; se Q&isin;&alpha; &egrave; contenuta. Invece v&#8741;n (v&times;n=0) &egrave; r perpendicolare al piano, e v&middot;n&ne;0 &egrave; r incidente."
   }
  ]
 },
 {
  "pool": "e3",
  "src": "b03 secondoesosol Q1 · distanza tra rette sghembe",
  "steps": [
   {
    "t": "Due rette r, s di &#8477;&sup3; non sono parallele e non si intersecano (sghembe). Come se ne calcola la distanza?",
    "opts": [
     {
      "x": "d = |(P&minus;Q)&middot;(v&times;w)| / &#8741;v&times;w&#8741;, con v,w direttori, P&isin;r, Q&isin;s",
      "c": true
     },
     {
      "x": "d = &#8741;P&minus;Q&#8741;"
     },
     {
      "x": "d = |v&middot;w|"
     },
     {
      "x": "d = 0"
     }
    ],
    "hint": "La distanza tra rette sghembe &egrave; la proiezione di P&minus;Q sulla direzione comune ortogonale v&times;w.",
    "sol": "<b>d=|(P&minus;Q)&middot;(v&times;w)|/&#8741;v&times;w&#8741;.</b> Per la formula del prodotto misto, il numeratore &egrave; il volume del parallelepipedo su P&minus;Q, v, w; diviso l&rsquo;area di base &#8741;v&times;w&#8741; d&agrave; l&rsquo;altezza, cio&egrave; la distanza. Se le rette fossero incidenti il prodotto misto sarebbe 0 (complanarit&agrave;)."
   }
  ]
 },
 {
  "pool": "e3",
  "src": "b03 secondoesosol Q2 · fascio di piani",
  "steps": [
   {
    "t": "Tre piani di &#8477;&sup3; appartengono allo STESSO FASCIO proprio quando:",
    "opts": [
     {
      "x": "le loro equazioni sono linearmente dipendenti e i piani hanno una retta comune",
      "c": true
     },
     {
      "x": "sono a due a due perpendicolari"
     },
     {
      "x": "hanno lo stesso vettore normale"
     },
     {
      "x": "non si intersecano mai"
     }
    ],
    "hint": "Un fascio proprio &egrave; l&rsquo;insieme dei piani contenenti una retta fissa: le equazioni sono combinazioni lineari di due di esse.",
    "sol": "<b>Quando un&rsquo;equazione &egrave; combinazione lineare delle altre due e i piani condividono una retta (l&rsquo;asse del fascio).</b> Per il teorema di Rouch&eacute;&ndash;Capelli il sistema delle tre equazioni ha rango 2 e soluzioni &infin;&sup1; (la retta comune). La perpendicolarit&agrave; a due a due si verifica coi prodotti scalari dei normali, ed &egrave; indipendente dall&rsquo;appartenenza al fascio."
   }
  ]
 },
 {
  "pool": "e3",
  "src": "b03 straordinario-2018-nov-06 Es.4 · proiezione ortogonale su piano",
  "steps": [
   {
    "t": "Il piano &Pi; passa per C ed &egrave; perpendicolare alla retta di direttore v. La proiezione ortogonale &pi;(x) su &Pi; &egrave;:",
    "opts": [
     {
      "x": "&pi;(x)=x &minus; [(x&minus;C)&middot;v / v&middot;v]&#8202;v",
      "c": true
     },
     {
      "x": "&pi;(x)=x+v"
     },
     {
      "x": "&pi;(x)=(x&middot;v)&#8202;v"
     },
     {
      "x": "&pi;(x)=C"
     }
    ],
    "hint": "Si sottrae ad x la sua componente lungo la normale v del piano, misurata a partire da C.",
    "sol": "<b>&pi;(x)=x&minus;[((x&minus;C)&middot;v)/(v&middot;v)]&#8202;v.</b> Per il teorema della proiezione ortogonale si rimuove la componente di x&minus;C lungo la normale v; il punto risultante sta su &Pi; (verifica: (&pi;(x)&minus;C)&middot;v=0). &Egrave; un&rsquo;applicazione affine, non lineare, per C&ne;0."
   }
  ]
 },
 {
  "pool": "e3",
  "src": "b03 scritto-2018-07-09 Es.1 / b01 · retta incidente due rette",
  "steps": [
   {
    "t": "Per trovare la retta passante per P&#8320; e incidente sia r&#8321; sia r&#8322; (sghembe), la strategia &egrave;:",
    "opts": [
     {
      "x": "intersecare il piano &alpha;&#8321;=Span(r&#8321;,P&#8320;) col piano &alpha;&#8322;=Span(r&#8322;,P&#8320;)",
      "c": true
     },
     {
      "x": "unire i direttori di r&#8321; e r&#8322;"
     },
     {
      "x": "prendere la parallela media"
     },
     {
      "x": "calcolare P&#8320;&minus;r&#8321;"
     }
    ],
    "hint": "La retta cercata sta nel piano che contiene r&#8321; e P&#8320;, e anche nel piano che contiene r&#8322; e P&#8320;: &egrave; la loro intersezione.",
    "sol": "<b>Si intersecano i piani &alpha;&#8321; (per r&#8321; e P&#8320;) e &alpha;&#8322; (per r&#8322; e P&#8320;).</b> Due piani distinti non paralleli si tagliano in una retta (Rouch&eacute;&ndash;Capelli, rango 2 in &#8477;&sup3;): entrambi contengono P&#8320;, quindi &alpha;&#8321;&#8745;&alpha;&#8322; passa per P&#8320; ed &egrave; incidente r&#8321; (giace in &alpha;&#8321;) e r&#8322; (giace in &alpha;&#8322;)."
   }
  ]
 },
 {
  "pool": "e3",
  "src": "b01 · volume del parallelepipedo",
  "steps": [
   {
    "t": "Il volume del parallelepipedo di lati u, v, w in &#8477;&sup3; &egrave;:",
    "opts": [
     {
      "x": "|u&middot;(v&times;w)| (modulo del prodotto misto)",
      "c": true
     },
     {
      "x": "&#8741;u&#8741;&middot;&#8741;v&#8741;&middot;&#8741;w&#8741;"
     },
     {
      "x": "u&middot;(v&times;w) senza modulo"
     },
     {
      "x": "&#8741;u&times;v&times;w&#8741;"
     }
    ],
    "hint": "Volume = area di base &#8741;v&times;w&#8741; per l&rsquo;altezza; equivale al valore assoluto del determinante 3&times;3 delle componenti.",
    "sol": "<b>|u&middot;(v&times;w)| = |det[u&#8202;v&#8202;w]|.</b> Per il teorema del prodotto misto, questo &egrave; il volume (con segno) del parallelepipedo; il volume geometrico ne &egrave; il valore assoluto. &Egrave; nullo &hArr; u,v,w sono complanari (det=0, colonne dipendenti)."
   }
  ]
 },
 {
  "pool": "e3",
  "src": "b01 · due rette complanari &rarr; piano comune",
  "steps": [
   {
    "t": "Due rette r, s di &#8477;&sup3; sono complanari (parallele o incidenti). Come si ottiene il piano che le contiene entrambe?",
    "opts": [
     {
      "x": "normale n=v&times;w (v,w direttori) se incidenti, oppure n=v&times;(P&minus;Q) se parallele",
      "c": true
     },
     {
      "x": "non esiste mai"
     },
     {
      "x": "come r&#8745;s"
     },
     {
      "x": "sommando le equazioni"
     }
    ],
    "hint": "Il piano comune ha normale ortogonale a entrambe le direzioni (o alla direzione e al segmento che unisce due punti, se parallele).",
    "sol": "<b>Se incidenti: n=v&times;w e piano per il punto d&rsquo;intersezione. Se parallele: n=v&times;(P&minus;Q) con P&isin;r, Q&isin;s.</b> La condizione di complanarit&agrave; (prodotto misto [v,w,P&minus;Q]=0) garantisce, per il teorema del prodotto misto, che un tale piano esista e contenga entrambe le rette."
   }
  ]
 }
];

Q.sottospazi = [
 {
  "pool": "sottospazi",
  "src": "tipo 1 · Span e dipendenza",
  "steps": [
   {
    "t": "In &#8477;&#8308; siano v&#8321;=(1,0,1,0), v&#8322;=(0,1,0,1), v&#8323;=(1,1,1,1). Quanto vale dim&#8202;Span(v&#8321;,v&#8322;,v&#8323;)?",
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
    "hint": "<b>Conta i generatori INDIPENDENTI, non i generatori.</b> Verifica se v&#8323; &egrave; combinazione di v&#8321; e v&#8322;.",
    "sol": "<b>dim = 2.</b> v&#8323; = v&#8321;+v&#8322;, quindi v&#8323; &egrave; ridondante: lo Span coincide con Span(v&#8321;,v&#8322;), che sono indipendenti. Per definizione, dim&#8202;Span = numero massimo di vettori linearmente indipendenti (rango del sistema di generatori)."
   }
  ]
 },
 {
  "pool": "sottospazi",
  "src": "tipo 1 · Grassmann (stima minima)",
  "steps": [
   {
    "t": "Siano U,&#8202;W sottospazi di &#8477;&#8309; con dim&#8202;U=3 e dim&#8202;W=4. Qual &egrave; il MINIMO valore possibile di dim(U&#8745;W)?",
    "opts": [
     {
      "x": "2",
      "c": true
     },
     {
      "x": "0"
     },
     {
      "x": "1"
     },
     {
      "x": "3"
     }
    ],
    "hint": "<b>U+W vive dentro &#8477;&#8309;</b>, quindi dim(U+W) &le; 5. Isola dim(U&#8745;W) dalla formula di Grassmann.",
    "sol": "<b>2.</b> Grassmann: dim(U&#8745;W)=dim&#8202;U+dim&#8202;W&minus;dim(U+W)=3+4&minus;dim(U+W) &ge; 7&minus;5 = 2."
   }
  ]
 },
 {
  "pool": "sottospazi",
  "src": "tipo 1 · Grassmann (stima massima)",
  "steps": [
   {
    "t": "Stessi dati: U,&#8202;W &sub; &#8477;&#8309;, dim&#8202;U=3, dim&#8202;W=4. Qual &egrave; il MASSIMO possibile di dim(U&#8745;W)?",
    "opts": [
     {
      "x": "3",
      "c": true
     },
     {
      "x": "4"
     },
     {
      "x": "2"
     },
     {
      "x": "7"
     }
    ],
    "hint": "L&rsquo;intersezione &egrave; contenuta sia in U sia in W: non pu&ograve; superare la dimensione del pi&ugrave; piccolo.",
    "sol": "<b>3.</b> Per la monotonia della dimensione rispetto all&rsquo;inclusione (U&#8745;W &sube; U e U&#8745;W &sube; W), dim(U&#8745;W) &le; min(dim&#8202;U,dim&#8202;W)=3, raggiunto quando U &sub; W."
   }
  ]
 },
 {
  "pool": "sottospazi",
  "src": "prova20190121 Es. 3 (trabocchetto esplicito)",
  "steps": [
   {
    "t": "L&rsquo;insieme S = { A &isin; M&#8322;(&#8477;) : det&#8202;A = 0 } &egrave; un sottospazio vettoriale di M&#8322;(&#8477;)?",
    "opts": [
     {
      "x": "No: non &egrave; chiuso per somma",
      "c": true
     },
     {
      "x": "S&igrave;, ha dimensione 3"
     },
     {
      "x": "S&igrave;, &egrave; il nucleo del det"
     },
     {
      "x": "S&igrave;, contiene 0 quindi basta"
     }
    ],
    "hint": "<b>Il determinante non &egrave; lineare.</b> Cerca due matrici singolari la cui somma sia invertibile.",
    "sol": "<b>No.</b> Per il criterio di sottospazio serve la chiusura per somma: prendi A=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div></span> e B=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div></span>: det&#8202;A=det&#8202;B=0, ma A+B=I con det=1&ne;0. S non &egrave; chiuso per somma. (Contenere 0 &egrave; necessario, non sufficiente.)"
   }
  ]
 },
 {
  "pool": "sottospazi",
  "src": "prova20190121 (analogia traccia)",
  "steps": [
   {
    "t": "L&rsquo;insieme T = { A &isin; M&#8322;(&#8477;) : tr&#8202;A = 0 } &egrave; un sottospazio? Se s&igrave;, di che dimensione?",
    "opts": [
     {
      "x": "S&igrave;, dimensione 3",
      "c": true
     },
     {
      "x": "No, non contiene 0"
     },
     {
      "x": "S&igrave;, dimensione 1"
     },
     {
      "x": "No, la traccia non &egrave; lineare"
     }
    ],
    "hint": "A differenza del determinante, la traccia <b>&egrave;</b> lineare: tr(A+B)=tr&#8202;A+tr&#8202;B e tr(&lambda;A)=&lambda;&#8202;tr&#8202;A.",
    "sol": "<b>S&igrave;, dim = 3.</b> T = ker della forma lineare tr : M&#8322;(&#8477;)&rarr;&#8477;, non nulla. Per il teorema del rango applicato al funzionale (il nucleo di una forma lineare non nulla &egrave; un iperpiano), dim = 4&minus;1 = 3."
   }
  ]
 },
 {
  "pool": "sottospazi",
  "src": "tipo 1 · {A diagonalizzabile} (trabocchetto)",
  "steps": [
   {
    "t": "L&rsquo;insieme D = { A &isin; M&#8322;(&#8477;) : A diagonalizzabile } &egrave; un sottospazio di M&#8322;(&#8477;)?",
    "opts": [
     {
      "x": "No: somma di diagonalizzabili pu&ograve; non esserlo",
      "c": true
     },
     {
      "x": "S&igrave;, &egrave; chiuso per somma e prodotto per scalare"
     },
     {
      "x": "S&igrave;, perch&eacute; contiene tutte le simmetriche"
     },
     {
      "x": "No, perch&eacute; non contiene la matrice nulla"
     }
    ],
    "hint": "La nulla &egrave; diagonalizzabile, quindi 0&isin;D. Il problema &egrave; la <b>chiusura per somma</b>. Cerca un controesempio con autovalori distinti.",
    "sol": "<b>No.</b> Il criterio di sottospazio richiede la chiusura per somma, che qui fallisce: A=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">2</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">&minus;1</span></div></span> (autovalori 1,&minus;1: diag.) e B=diag(&minus;1,1) (diag.) danno A+B=<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">2</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div></span>, che ha autovalore 0 doppio ma non &egrave; nulla: non diagonalizzabile."
   }
  ]
 },
 {
  "pool": "sottospazi",
  "src": "tipo 1 · sottospazi di R[t]",
  "steps": [
   {
    "t": "In &#8477;[t]<sub>&le;3</sub> (polinomi di grado &le; 3, dim 4) considera U = { p : p(1)=0 }. Quanto vale dim&#8202;U?",
    "opts": [
     {
      "x": "3",
      "c": true
     },
     {
      "x": "4"
     },
     {
      "x": "2"
     },
     {
      "x": "1"
     }
    ],
    "hint": "p &#8614; p(1) &egrave; un <b>funzionale lineare non nullo</b>. Il suo nucleo abbassa la dimensione di 1.",
    "sol": "<b>3.</b> La valutazione p&#8614;p(1) &egrave; un funzionale lineare non nullo; U &egrave; il suo nucleo. Per il teorema del rango (nucleo di una forma lineare non nulla = iperpiano), dim = 4&minus;1 = 3."
   }
  ]
 },
 {
  "pool": "sottospazi",
  "src": "tipo 1 · vincoli multipli su polinomi",
  "steps": [
   {
    "t": "In &#8477;[t]<sub>&le;2</sub> (dim 3) sia U = { p : p(0)=0 e p&prime;(0)=0 }. Quanto vale dim&#8202;U?",
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
    "hint": "Scrivi p = a+bt+ct&sup2;. Traduci p(0)=0 e p&prime;(0)=0 in condizioni su a,b,c.",
    "sol": "<b>1.</b> p(0)=a=0 e p&prime;(0)=b=0, quindi p = c&#8202;t&sup2;. U &egrave; intersezione dei nuclei di due funzionali lineari indipendenti: per il teorema del rango dim = 3&minus;2 = 1."
   }
  ]
 },
 {
  "pool": "sottospazi",
  "src": "tipo 1 · equazioni cartesiane &rarr; dim",
  "steps": [
   {
    "t": "In &#8477;&#8308; sia U = { (x,y,z,w) : x+y=0, z&minus;w=0 }. Quanto vale dim&#8202;U?",
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
    "hint": "Le due equazioni sono <b>indipendenti</b>: ognuna abbassa la dimensione di 1. dim = n &minus; (n. equazioni indipendenti).",
    "sol": "<b>2.</b> Per il teorema di Rouch&eacute;&ndash;Capelli (spazio delle soluzioni di un sistema omogeneo), dim = n &minus; rango = 4&minus;2 = 2: due equazioni cartesiane indipendenti abbassano la dimensione di 2."
   }
  ]
 },
 {
  "pool": "sottospazi",
  "src": "tipo 1 · somma diretta",
  "steps": [
   {
    "t": "In &#8477;&#179; siano U=Span((1,0,0),(0,1,0)) e W=Span((0,0,1)). &Egrave; vero che &#8477;&#179; = U &oplus; W?",
    "opts": [
     {
      "x": "S&igrave;: somma = &#8477;&#179; e intersezione = {0}",
      "c": true
     },
     {
      "x": "No: la somma non &egrave; tutto &#8477;&#179;"
     },
     {
      "x": "No: U&#8745;W ha dimensione 1"
     },
     {
      "x": "S&igrave;, ma solo perch&eacute; dim&#8202;U+dim&#8202;W=3"
     }
    ],
    "hint": "Somma diretta richiede DUE cose: U+W = &#8477;&#179; <b>e</b> U&#8745;W = {0}. La sola somma delle dimensioni non basta in generale.",
    "sol": "<b>S&igrave;.</b> Per il criterio di somma diretta (U+W=V e U&#8745;W={0}): U &egrave; il piano z=0, W l&rsquo;asse z, con U&#8745;W={0} e U+W=&#8477;&#179;. La condizione dimensionale qui &egrave; verificata e l&rsquo;intersezione &egrave; banale."
   }
  ]
 },
 {
  "pool": "sottospazi",
  "src": "tipo 1 · finta somma diretta (trabocchetto)",
  "steps": [
   {
    "t": "In &#8477;&#179; siano U=Span((1,1,0),(0,1,1)) e W=Span((1,0,&minus;1)). La somma U+W &egrave; diretta?",
    "opts": [
     {
      "x": "No: il generatore di W sta in U",
      "c": true
     },
     {
      "x": "S&igrave;: dim&#8202;U+dim&#8202;W=3=&#8477;&#179;"
     },
     {
      "x": "S&igrave;: i tre vettori sono indipendenti"
     },
     {
      "x": "No: U e W sono uguali"
     }
    ],
    "hint": "Prima di fidarti del conteggio dimensionale, <b>controlla se (1,0,&minus;1)&isin;U</b>. Prova (1,1,0)&minus;(0,1,1).",
    "sol": "<b>No, non &egrave; diretta.</b> Il criterio di somma diretta richiede U&#8745;W={0}: ma (1,1,0)&minus;(0,1,1)=(1,0,&minus;1), quindi W&sub;U e U&#8745;W=W&ne;{0}. Per Grassmann U+W=U ha dim 2 (non 3)."
   }
  ]
 },
 {
  "pool": "sottospazi",
  "src": "tipo 1 · complemento ortogonale",
  "steps": [
   {
    "t": "In &#8477;&#179; col prodotto scalare standard, sia U = { (x,y,z) : x+y+z=0 }. Quanto vale dim&#8202;U<sup>&#8869;</sup>?",
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
    "hint": "U &egrave; un piano (dim 2). U<sup>&#8869;</sup> &egrave; generato dal vettore normale al piano.",
    "sol": "<b>1.</b> Per il teorema del complemento ortogonale (dim&#8202;U + dim&#8202;U<sup>&#8869;</sup> = n): dim&#8202;U=2, quindi dim&#8202;U<sup>&#8869;</sup>=3&minus;2=1. U<sup>&#8869;</sup>=Span((1,1,1)), il vettore dei coefficienti dell&rsquo;equazione."
   }
  ]
 },
 {
  "pool": "sottospazi",
  "src": "tipo 1 · intersezione di due piani",
  "svg": "<svg viewBox=\"0 0 320 180\" width=\"320\" height=\"180\"><polygon points=\"40,40 200,20 280,80 120,100\" fill=\"#4c8dff\" opacity=\"0.20\" stroke=\"#4c8dff\"/><polygon points=\"60,140 230,150 250,70 80,60\" fill=\"#7aa2ff\" opacity=\"0.20\" stroke=\"#7aa2ff\"/><line x1=\"70\" y1=\"90\" x2=\"255\" y2=\"78\" stroke=\"#e6edf3\" stroke-width=\"2.5\"/><text x=\"205\" y=\"15\" class=\"axislbl\">U</text><text x=\"255\" y=\"62\" class=\"axislbl\">W</text><text x=\"258\" y=\"92\" class=\"axislbl\">U&#8745;W</text></svg>",
  "steps": [
   {
    "t": "In &#8477;&#179; siano U e W due piani DISTINTI passanti per l&rsquo;origine. Quanto vale dim(U&#8745;W)?",
    "opts": [
     {
      "x": "1 (una retta)",
      "c": true
     },
     {
      "x": "0 (solo l&rsquo;origine)"
     },
     {
      "x": "2"
     },
     {
      "x": "Dipende dai piani"
     }
    ],
    "hint": "Due piani distinti per l&rsquo;origine non possono intersecarsi solo in {0} in &#8477;&#179;. Usa Grassmann: la loro somma &egrave; tutto &#8477;&#179;.",
    "sol": "<b>1.</b> Distinti &rArr; U+W=&#8477;&#179; (dim 3). Grassmann: dim(U&#8745;W)=2+2&minus;3=1, una retta."
   }
  ]
 },
 {
  "pool": "sottospazi",
  "src": "tipo 1 · M&#8322; = Sym &oplus; Antisym",
  "steps": [
   {
    "t": "<span class=\"lbl\">L1</span> In M&#8322;(&#8477;) (dim 4), qual &egrave; la dimensione del sottospazio Sym = { A : A<sup>T</sup>=A } delle matrici simmetriche?",
    "opts": [
     {
      "x": "3",
      "c": true
     },
     {
      "x": "4"
     },
     {
      "x": "1"
     },
     {
      "x": "2"
     }
    ],
    "hint": "Una simmetrica 2&times;2 ha forma <span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">a</span><span class=\"mcell\">b</span></div><div class=\"mrow\"><span class=\"mcell\">b</span><span class=\"mcell\">c</span></div></span>: conta i parametri liberi.",
    "sol": "<b>3.</b> Tre parametri liberi (a, b, c). dim&#8202;Sym = 3.",
    "cont": "Continua &rarr; le antisimmetriche"
   },
   {
    "t": "<span class=\"lbl\">L2</span> Sia Antisym = { A : A<sup>T</sup>=&minus;A }. &Egrave; vero che M&#8322;(&#8477;) = Sym &oplus; Antisym?",
    "opts": [
     {
      "x": "S&igrave;: dim 3+1=4 e intersezione nulla",
      "c": true
     },
     {
      "x": "No: dim&#8202;Antisym = 3 anch&rsquo;essa"
     },
     {
      "x": "No: Sym e Antisym si intersecano in una retta"
     },
     {
      "x": "S&igrave;, ma vale solo su &#8450;"
     }
    ],
    "hint": "Antisym 2&times;2 ha forma <span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">b</span></div><div class=\"mrow\"><span class=\"mcell\">&minus;b</span><span class=\"mcell\">0</span></div></span> (dim 1). E A simmetrica E antisimmetrica &rArr; A=&minus;A &rArr; A=0.",
    "sol": "<b>S&igrave;.</b> Per il criterio di somma diretta: dim&#8202;Antisym=1, Sym&#8745;Antisym={0}, e ogni A si scrive A = &frac12;(A+A<sup>T</sup>) + &frac12;(A&minus;A<sup>T</sup>) (parte simmetrica + antisimmetrica). Quindi M&#8322;=Sym&oplus;Antisym, 3+1=4."
   }
  ]
 },
 {
  "pool": "sottospazi",
  "src": "tipo 1 · sottospazio affine (trabocchetto)",
  "steps": [
   {
    "t": "In &#8477;&#179; l&rsquo;insieme delle soluzioni di x+y+z=3 &egrave; un sottospazio vettoriale?",
    "opts": [
     {
      "x": "No: non contiene 0 (&egrave; un sottospazio AFFINE)",
      "c": true
     },
     {
      "x": "S&igrave;, dimensione 2"
     },
     {
      "x": "S&igrave;, &egrave; un piano quindi un sottospazio"
     },
     {
      "x": "No: non &egrave; chiuso per prodotto"
     }
    ],
    "hint": "Il termine noto &egrave; 3, non 0. Verifica se (0,0,0) soddisfa l&rsquo;equazione.",
    "sol": "<b>No.</b> Per il criterio di sottospazio ogni sottospazio deve contenere 0: qui (0,0,0) d&agrave; 0&ne;3, il piano non passa per l&rsquo;origine. &Egrave; un sottospazio <i>affine</i> di giacitura { x+y+z=0 }, non un sottospazio vettoriale."
   }
  ]
 },
 {
  "pool": "sottospazi",
  "src": "tipo 1 · insieme non lineare",
  "steps": [
   {
    "t": "In &#8477;&#179; l&rsquo;insieme S = { (x,y,z) : xyz = 0 } &egrave; un sottospazio?",
    "opts": [
     {
      "x": "No: non &egrave; chiuso per somma",
      "c": true
     },
     {
      "x": "S&igrave;: contiene 0 ed &egrave; simmetrico"
     },
     {
      "x": "S&igrave;: &egrave; unione di tre piani coordinati"
     },
     {
      "x": "No: non contiene 0"
     }
    ],
    "hint": "S contiene 0, ma &egrave; l&rsquo;unione dei tre piani coordinati. Somma un vettore di un piano con uno di un altro.",
    "sol": "<b>No.</b> Il criterio di sottospazio richiede la chiusura per somma: (1,1,0)&isin;S (xyz=0) e (0,0,1)&isin;S, ma la somma (1,1,1) ha xyz=1&ne;0. Non chiuso: S &egrave; unione di tre piani, non un sottospazio."
   }
  ]
 },
 {
  "pool": "sottospazi",
  "src": "tipo 1 · base di Span vs cartesiane",
  "steps": [
   {
    "t": "In &#8477;&#8308; sia U=Span((1,0,1,0),(0,1,0,1)). Da quante equazioni cartesiane INDIPENDENTI &egrave; descritto U?",
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
      "x": "4"
     }
    ],
    "hint": "Numero di equazioni cartesiane indipendenti = codimensione = n &minus; dim&#8202;U.",
    "sol": "<b>2.</b> Per il teorema del rango il numero di equazioni cartesiane indipendenti &egrave; la codimensione = n &minus; dim&#8202;U = 4&minus;2 = 2: U = { x&#8321;&minus;x&#8323;=0, x&#8322;&minus;x&#8324;=0 }."
   }
  ]
 },
 {
  "pool": "sottospazi",
  "src": "tipo 1 · polinomi pari",
  "steps": [
   {
    "t": "In &#8477;[t]<sub>&le;4</sub> (dim 5) sia U = { p : p(t)=p(&minus;t) } (polinomi pari). Quanto vale dim&#8202;U?",
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
      "x": "4"
     }
    ],
    "hint": "Un polinomio pari ha solo monomi di grado pari. Elencali fino al grado 4.",
    "sol": "<b>3.</b> La condizione p(t)=p(&minus;t) annulla i coefficienti dei monomi di grado dispari; per il criterio della dimensione (cardinalit&agrave; di una base) resta la base { 1, t&sup2;, t&#8308; }, dim = 3."
   }
  ]
 },
 {
  "pool": "sottospazi",
  "src": "tipo 1 · Grassmann con dati numerici",
  "steps": [
   {
    "t": "In &#8477;&#8308; siano U=Span((1,0,0,0),(0,1,0,0)) e W=Span((0,1,0,0),(0,0,1,0)). Quanto vale dim(U+W)?",
    "opts": [
     {
      "x": "3",
      "c": true
     },
     {
      "x": "4"
     },
     {
      "x": "2"
     },
     {
      "x": "1"
     }
    ],
    "hint": "Trova prima dim(U&#8745;W): quale vettore generatore &egrave; comune? Poi Grassmann.",
    "sol": "<b>3.</b> U&#8745;W=Span((0,1,0,0)) (dim 1). Grassmann: 2+2&minus;1=3."
   }
  ]
 },
 {
  "pool": "sottospazi",
  "src": "ex_Fis3 Es. 1 · completamento a base",
  "steps": [
   {
    "t": "In &#8477;&#8308; i vettori v&#8321;=(1,0,0,0) e v&#8322;=(1,1,0,0) sono indipendenti. Quali vettori della base canonica li completano a una base di &#8477;&#8308;?",
    "opts": [
     {
      "x": "e&#8323;=(0,0,1,0) ed e&#8324;=(0,0,0,1)",
      "c": true
     },
     {
      "x": "e&#8321; ed e&#8322;"
     },
     {
      "x": "solo e&#8323;"
     },
     {
      "x": "(1,1,1,1) e (0,0,1,1)"
     }
    ],
    "hint": "v&#8321;,v&#8322; coinvolgono solo le prime due coordinate. Aggiungi i versori delle direzioni MANCANTI.",
    "sol": "<b>e&#8323; ed e&#8324;.</b> Per il teorema del completamento a base (Steinitz): {v&#8321;,v&#8322;,e&#8323;,e&#8324;} ha matrice triangolare con un pivot su ogni colonna, rango 4, quindi &egrave; una base. Bastano i versori delle direzioni non ancora generate."
   }
  ]
 },
 {
  "pool": "sottospazi",
  "src": "9luglioconsoluz Es. 8 · dipendenza in &#8477;&#179;",
  "steps": [
   {
    "t": "In &#8477;&#179; sono dati 4 vettori il cui span ha dimensione 3. Quanti di essi sono necessariamente combinazione lineare degli altri?",
    "opts": [
     {
      "x": "Almeno 1",
      "c": true
     },
     {
      "x": "Esattamente 2"
     },
     {
      "x": "Nessuno"
     },
     {
      "x": "Tutti e 4"
     }
    ],
    "hint": "4 vettori in &#8477;&#179; sono sempre dipendenti. Se lo span &egrave; tutto &#8477;&#179; (dim 3), quanti pivot indipendenti bastano?",
    "sol": "<b>Almeno 1.</b> Per il teorema di Steinitz 4 vettori in &#8477;&#179; sono sempre dipendenti. Rango 3 &rArr; esistono 3 vettori indipendenti e il quarto &egrave; loro combinazione. La relazione di dipendenza (una, essendo 4&minus;3=1) esibisce almeno un vettore ridondante."
   }
  ]
 },
 {
  "pool": "sottospazi",
  "src": "1appellosol Es. 1 · matrici con somma di riga = h",
  "steps": [
   {
    "t": "In M&#8322;(&#8477;) sia W&#8341; = { A : la somma degli elementi di ciascuna riga vale h }. Per quali h &egrave; un sottospazio vettoriale?",
    "opts": [
     {
      "x": "Solo h=0",
      "c": true
     },
     {
      "x": "Per ogni h"
     },
     {
      "x": "Solo h=1"
     },
     {
      "x": "Per nessun h"
     }
    ],
    "hint": "Le condizioni \"somma riga = h\" sono lineari, ma OMOGENEE solo se h=0. La matrice nulla sta in W&#8341; solo per h=0.",
    "sol": "<b>Solo h=0.</b> Per il criterio di sottospazio le condizioni devono essere lineari OMOGENEE. Per h&ne;0 la matrice nulla non appartiene a W&#8341; (le sue righe sommano 0&ne;h): &egrave; un sottospazio affine, non vettoriale. Per h=0 le condizioni sono lineari omogenee, quindi W&#8320; &egrave; un sottospazio."
   }
  ]
 },
 {
  "pool": "sottospazi",
  "src": "ex_Fis3 Es. 4 · base di U&#8745;W",
  "steps": [
   {
    "t": "In &#8477;&#179; siano U=Span((1,0,1),(0,1,1)) e W={ (x,y,z) : x=y }. Quanto vale dim(U&#8745;W)?",
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
    "hint": "Un vettore di U &egrave; a(1,0,1)+b(0,1,1)=(a,b,a+b). Imponi la condizione di W (x=y).",
    "sol": "<b>1.</b> Elemento generico di U: (a,b,a+b). Imponendo la condizione cartesiana di W (x=y) si ottiene a=b, quindi (a,a,2a)=a(1,1,2): U&#8745;W=Span((1,1,2)), dimensione 1. (Verifica con Grassmann: dim&#8202;U+dim&#8202;W&minus;dim(U+W)=2+2&minus;3=1.)"
   }
  ]
 },
 {
  "pool": "sottospazi",
  "src": "b03 scritto-2020-07-21 Es.2 · equazione matriciale lineare",
  "steps": [
   {
    "t": "In M&#8323;(&#8477;) l&rsquo;insieme Z = { A : A &minus; 3A<sup>T</sup> = I } &egrave; un sottospazio?",
    "opts": [
     {
      "x": "&Egrave; un sottospazio AFFINE (non vettoriale): soluzioni di un&rsquo;equazione lineare non omogenea",
      "c": true
     },
     {
      "x": "&egrave; un sottospazio vettoriale"
     },
     {
      "x": "non &egrave; n&eacute; vettoriale n&eacute; affine"
     },
     {
      "x": "&egrave; vuoto"
     }
    ],
    "hint": "A&#8614;A&minus;3A<sup>T</sup> &egrave; lineare; il termine noto &egrave; I&ne;0. Le soluzioni di L(A)=I con L lineare formano un affine, se non vuoto.",
    "sol": "<b>Sottospazio affine.</b> L(A)=A&minus;3A<sup>T</sup> &egrave; lineare in A; per il teorema di struttura delle soluzioni di un&rsquo;equazione lineare, L(A)=I (non omogenea) ha per soluzioni un traslato x&#8320;+ker&#8202;L. Non contiene A=0 (darebbe 0&ne;I): per il criterio di sottospazio non &egrave; un sottospazio vettoriale."
   }
  ]
 },
 {
  "pool": "sottospazi",
  "src": "b03 scritto-2020-07-21 Es.2 · det e traccia insieme",
  "steps": [
   {
    "t": "In M&#8323;(&#8477;), W = { A : det&#8202;A = 0 e tr&#8202;A = 0 } &egrave; un sottospazio vettoriale?",
    "opts": [
     {
      "x": "No: la condizione det&#8202;A=0 non &egrave; lineare (non chiusa per somma)",
      "c": true
     },
     {
      "x": "S&igrave;: intersezione di due condizioni lineari"
     },
     {
      "x": "S&igrave;: contiene la matrice nulla"
     },
     {
      "x": "No: perch&eacute; tr&#8202;A=0 non &egrave; lineare"
     }
    ],
    "hint": "tr&#8202;A=0 &Egrave; lineare, ma det&#8202;A=0 NO. L&rsquo;intersezione con una condizione non lineare resta non lineare.",
    "sol": "<b>No.</b> Per il criterio di sottospazio serve chiusura per somma: tr&#8202;A=0 &egrave; lineare, ma det&#8202;A=0 non lo &egrave;, e due matrici singolari a traccia nulla possono sommarsi in una invertibile. Basta il controesempio sulla sola parte det. Contenere 0 non &egrave; sufficiente."
   }
  ]
 },
 {
  "pool": "sottospazi",
  "src": "b03 soluzioniesame20180625 Es.3 · prodotto di valutazioni",
  "steps": [
   {
    "t": "Nello spazio delle funzioni f:&#8477;&rarr;&#8477;, W = { f : f(0)&middot;f(1) = 0 } &egrave; un sottospazio?",
    "opts": [
     {
      "x": "No: condizione non lineare, non chiusa per somma",
      "c": true
     },
     {
      "x": "S&igrave;: contiene la funzione nulla"
     },
     {
      "x": "S&igrave;: &egrave; il nucleo di f&#8614;f(0)f(1)"
     },
     {
      "x": "No: non contiene 0"
     }
    ],
    "hint": "f(0)f(1)=0 &egrave; un PRODOTTO di valutazioni: non lineare. Somma una f con f(0)=0 e una g con g(1)=0.",
    "sol": "<b>No.</b> Il criterio di sottospazio richiede chiusura per somma: f(x)=x d&agrave; f(0)=0 (f&isin;W) e g(x)=x&minus;1 d&agrave; g(1)=0 (g&isin;W), ma (f+g)(0)=&minus;1, (f+g)(1)=1, prodotto &minus;1&ne;0: f+g&notin;W. Il prodotto di due valutazioni non &egrave; una condizione lineare."
   }
  ]
 }
];

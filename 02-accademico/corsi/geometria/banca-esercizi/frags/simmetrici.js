Q.simmetrici = [
 {
  "pool": "simmetrici",
  "src": "tipo 9 · ciclicit&agrave; della traccia",
  "steps": [
   {
    "t": "Per matrici quadrate C,D dello stesso ordine vale sempre:",
    "opts": [
     {
      "x": "tr(CD)=tr(DC)",
      "c": true
     },
     {
      "x": "tr(CD)=tr(C)&middot;tr(D)"
     },
     {
      "x": "CD=DC"
     },
     {
      "x": "tr(CD)=tr(C)+tr(D)"
     }
    ],
    "hint": "&Egrave; la ciclicit&agrave; della traccia: tr(CD)=&sum;<sub>i,j</sub>c<sub>ij</sub>d<sub>ji</sub>, simmetrica nello scambio C&harr;D.",
    "sol": "Per la ciclicit&agrave; della traccia: tr(CD)=&sum;<sub>i,j</sub>c<sub>ij</sub>d<sub>ji</sub>=tr(DC). In generale CD&ne;DC, ma le TRACCE coincidono. Non vale tr(CD)=tr(C)tr(D)."
   }
  ]
 },
 {
  "pool": "simmetrici",
  "src": "tipo 9 · traccia invariante per trasposizione",
  "steps": [
   {
    "t": "Per ogni matrice quadrata C, tr(C<sup>T</sup>) vale:",
    "opts": [
     {
      "x": "tr(C): la trasposta non tocca la diagonale",
      "c": true
     },
     {
      "x": "&minus;tr(C)"
     },
     {
      "x": "0"
     },
     {
      "x": "tr(C)&sup2;"
     }
    ],
    "hint": "La trasposizione lascia fissi gli elementi diagonali c<sub>ii</sub>.",
    "sol": "Per l&rsquo;invarianza della traccia per trasposizione: tr(C<sup>T</sup>)=&sum;<sub>i</sub>(C<sup>T</sup>)<sub>ii</sub>=&sum;<sub>i</sub>c<sub>ii</sub>=tr(C). La diagonale &egrave; invariante per trasposizione."
   }
  ]
 },
 {
  "pool": "simmetrici",
  "src": "tipo 9 · base canonica ONB per tr(A^T B)",
  "steps": [
   {
    "t": "Su M&#8322;(&#8477;) con &#9001;A,B&#9002;=tr(A<sup>T</sup>B), la base canonica {E&#8321;&#8321;,E&#8321;&#8322;,E&#8322;&#8321;,E&#8322;&#8322;} &egrave;:",
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
    "hint": "&#9001;E<sub>ij</sub>,E<sub>kl</sub>&#9002;=tr(E<sub>ij</sub><sup>T</sup>E<sub>kl</sub>)=1 se (i,j)=(k,l), 0 altrimenti.",
    "sol": "&#9001;A,B&#9002;=&sum;<sub>ij</sub>a<sub>ij</sub>b<sub>ij</sub> &egrave; il prodotto scalare standard sulle 4 entrate: le E<sub>ij</sub> sono i versori coordinati, dunque ONB. Comodo: la matrice di un operatore in questa base ne d&agrave; subito autovalori/segnatura."
   }
  ]
 },
 {
  "pool": "simmetrici",
  "src": "tipo 9 · trasposizione autoaggiunta",
  "steps": [
   {
    "t": "Rispetto a &#9001;A,B&#9002;=tr(A<sup>T</sup>B), l&rsquo;operatore T(A)=A<sup>T</sup> &egrave; autoaggiunto?",
    "opts": [
     {
      "x": "S&igrave;: &#9001;A<sup>T</sup>,B&#9002;=tr(AB)=&#9001;A,B<sup>T</sup>&#9002;",
      "c": true
     },
     {
      "x": "No, mai"
     },
     {
      "x": "S&igrave;, ma solo sulle matrici simmetriche"
     },
     {
      "x": "No: T non &egrave; lineare"
     }
    ],
    "hint": "&#9001;T(A),B&#9002;=tr((A<sup>T</sup>)<sup>T</sup>B)=tr(AB); &#9001;A,T(B)&#9002;=tr(A<sup>T</sup>B<sup>T</sup>). Usa tr(A<sup>T</sup>B<sup>T</sup>)=tr((BA)<sup>T</sup>)=tr(BA)=tr(AB).",
    "sol": "&#9001;T(A),B&#9002;=tr(AB) e &#9001;A,T(B)&#9002;=tr(A<sup>T</sup>B<sup>T</sup>)=tr((BA)<sup>T</sup>)=tr(BA)=tr(AB): uguali &rArr; autoaggiunto. La ciclicit&agrave; della traccia rende il conto immediato."
   }
  ]
 },
 {
  "pool": "simmetrici",
  "src": "tipo 9 · usare la ciclicit&agrave; invece di espandere (trabocchetto b)",
  "steps": [
   {
    "t": "Per mostrare che T(A)=XA &egrave; autoaggiunto, come conviene trattare &#9001;XA,B&#9002;=tr((XA)<sup>T</sup>B)?",
    "opts": [
     {
      "x": "tr(A<sup>T</sup>X<sup>T</sup>B)=&#9001;A,X<sup>T</sup>B&#9002;, quindi T*(B)=X<sup>T</sup>B",
      "c": true
     },
     {
      "x": "sviluppare tutte e 16 le entrate a mano"
     },
     {
      "x": "usare tr(CD)=tr(C)&middot;tr(D)"
     },
     {
      "x": "concludere subito T*=T senza calcoli"
     }
    ],
    "hint": "(XA)<sup>T</sup>=A<sup>T</sup>X<sup>T</sup>. Riconosci tr(A<sup>T</sup>(X<sup>T</sup>B))=&#9001;A,X<sup>T</sup>B&#9002; senza espandere componenti.",
    "sol": "&#9001;XA,B&#9002;=tr(A<sup>T</sup>X<sup>T</sup>B)=&#9001;A,X<sup>T</sup>B&#9002; &rArr; aggiunto T*(B)=X<sup>T</sup>B. Quindi T autoaggiunto &hArr; X=X<sup>T</sup>. Espandere le 16 entrate &egrave; l&rsquo;errore che allunga inutilmente il conto."
   }
  ]
 },
 {
  "pool": "simmetrici",
  "src": "tipo 9 · T(A)=AX autoaggiunto",
  "steps": [
   {
    "t": "L&rsquo;operatore T(A)=AX su M&#8322;(&#8477;) &egrave; autoaggiunto (per &#9001;A,B&#9002;=tr(A<sup>T</sup>B)) se e solo se:",
    "opts": [
     {
      "x": "X &egrave; simmetrica (X=X<sup>T</sup>)",
      "c": true
     },
     {
      "x": "X &egrave; invertibile"
     },
     {
      "x": "X &egrave; ortogonale"
     },
     {
      "x": "sempre, per ogni X"
     }
    ],
    "hint": "&#9001;AX,B&#9002;=tr(X<sup>T</sup>A<sup>T</sup>B)=tr(A<sup>T</sup>BX<sup>T</sup>)=&#9001;A,BX<sup>T</sup>&#9002;. Confronta T*(B)=BX<sup>T</sup> con T(B)=BX.",
    "sol": "T*(B)=BX<sup>T</sup>. Autoaggiunto &hArr; BX<sup>T</sup>=BX &forall;B &hArr; X<sup>T</sup>=X. Conta la simmetria di X, non l&rsquo;invertibilit&agrave;."
   }
  ]
 },
 {
  "pool": "simmetrici",
  "src": "tipo 9 · trasposizione &egrave; isometria",
  "steps": [
   {
    "t": "T(A)=A<sup>T</sup> conserva la norma di Frobenius &#8741;A&#8741;=&radic;tr(A<sup>T</sup>A)?",
    "opts": [
     {
      "x": "S&igrave;: &#8741;A<sup>T</sup>&#8741;&sup2;=tr(AA<sup>T</sup>)=tr(A<sup>T</sup>A)=&#8741;A&#8741;&sup2;",
      "c": true
     },
     {
      "x": "No: la trasposta cambia la norma"
     },
     {
      "x": "Solo sulle matrici simmetriche"
     },
     {
      "x": "Solo se A &egrave; invertibile"
     }
    ],
    "hint": "&#8741;A<sup>T</sup>&#8741;&sup2;=tr((A<sup>T</sup>)<sup>T</sup>A<sup>T</sup>)=tr(AA<sup>T</sup>). Usa tr(AA<sup>T</sup>)=tr(A<sup>T</sup>A).",
    "sol": "&#8741;A<sup>T</sup>&#8741;&sup2;=tr(AA<sup>T</sup>)=tr(A<sup>T</sup>A)=&#8741;A&#8741;&sup2; per ciclicit&agrave; &rArr; isometria. La trasposizione &egrave; sia autoaggiunta sia isometria: caso speciale, non regola generale."
   }
  ]
 },
 {
  "pool": "simmetrici",
  "src": "Prova23_01_23_sol Es. 5 · autoaggiunto &ne; isometria (trabocchetto a)",
  "steps": [
   {
    "t": "Essere autoaggiunto e essere un&rsquo;isometria sono la stessa propriet&agrave;?",
    "opts": [
     {
      "x": "No: sono condizioni distinte, da verificare separatamente",
      "c": true
     },
     {
      "x": "S&igrave;, coincidono sempre"
     },
     {
      "x": "S&igrave;: autoaggiunto &rArr; isometria"
     },
     {
      "x": "S&igrave;: isometria &rArr; autoaggiunto"
     }
    ],
    "hint": "Autoaggiunto: &#9001;T(A),B&#9002;=&#9001;A,T(B)&#9002;. Isometria: &#8741;T(A)&#8741;=&#8741;A&#8741;. Prova T(A)=2A: autoaggiunto ma non isometria.",
    "sol": "No. T(A)=2A: &#9001;2A,B&#9002;=2&#9001;A,B&#9002;=&#9001;A,2B&#9002; autoaggiunto, ma &#8741;2A&#8741;=2&#8741;A&#8741;&ne;&#8741;A&#8741;, non isometria. Viceversa una rotazione &egrave; isometria non autoaggiunta. Vanno dimostrate a parte. Fonte: Prova23_01_23_sol Es. 5."
   }
  ]
 },
 {
  "pool": "simmetrici",
  "src": "tipo 9 · T(A)=XA isometria",
  "steps": [
   {
    "t": "L&rsquo;operatore T(A)=XA &egrave; un&rsquo;isometria (norma di Frobenius) se e solo se:",
    "opts": [
     {
      "x": "X &egrave; ortogonale (X<sup>T</sup>X=I)",
      "c": true
     },
     {
      "x": "X &egrave; simmetrica"
     },
     {
      "x": "X ha determinante 1"
     },
     {
      "x": "sempre, per ogni X"
     }
    ],
    "hint": "&#8741;XA&#8741;&sup2;=tr((XA)<sup>T</sup>XA)=tr(A<sup>T</sup>X<sup>T</sup>XA). Perch&eacute; sia =tr(A<sup>T</sup>A) &forall;A serve X<sup>T</sup>X=I.",
    "sol": "&#8741;XA&#8741;&sup2;=tr(A<sup>T</sup>X<sup>T</sup>XA)=&#8741;A&#8741;&sup2; &forall;A &hArr; X<sup>T</sup>X=I, cio&egrave; X ortogonale. Simmetria &rArr; autoaggiunzione; ortogonalit&agrave; &rArr; isometria: propriet&agrave; diverse su X."
   }
  ]
 },
 {
  "pool": "simmetrici",
  "src": "tipo 9 · matrice di T(A)=A^T in base canonica (L1+L2)",
  "steps": [
   {
    "t": "<span class=\"lbl\">L1</span> Nella base canonica ordinata (E&#8321;&#8321;,E&#8321;&#8322;,E&#8322;&#8321;,E&#8322;&#8322;) di M&#8322;(&#8477;), qual &egrave; la matrice dell&rsquo;operatore T(A)=A<sup>T</sup>?",
    "opts": [
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div></span>",
      "c": true
     },
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div></span>"
     },
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div></span>"
     },
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div></span>"
     }
    ],
    "hint": "Le colonne sono le immagini T(E<sub>ij</sub>) in coordinate. T fissa E&#8321;&#8321;,E&#8322;&#8322; e scambia E&#8321;&#8322;&harr;E&#8322;&#8321;.",
    "sol": "T(E&#8321;&#8321;)=E&#8321;&#8321;, T(E&#8321;&#8322;)=E&#8322;&#8321;, T(E&#8322;&#8321;)=E&#8321;&#8322;, T(E&#8322;&#8322;)=E&#8322;&#8322; &rArr; matrice <span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></div><div class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">1</span></div></span>: permutazione che scambia le coordinate 2 e 3.",
    "cont": "Continua &rarr; autovalori e diagonalizzabilit&agrave;"
   },
   {
    "t": "<span class=\"lbl\">L2</span> Autovalori dell&rsquo;operatore T(A)=A<sup>T</sup> su M&#8322;(&#8477;) e diagonalizzabilit&agrave;?",
    "opts": [
     {
      "x": "+1 (m.a. 3, le simmetriche) e &minus;1 (m.a. 1, le antisimmetriche); diagonalizzabile",
      "c": true
     },
     {
      "x": "solo +1; non diagonalizzabile"
     },
     {
      "x": "+1 e &minus;1 ma non diagonalizzabile"
     },
     {
      "x": "0 e 1"
     }
    ],
    "hint": "T&sup2;(A)=(A<sup>T</sup>)<sup>T</sup>=A &rArr; T&sup2;=I. Il polinomio x&sup2;&minus;1=(x&minus;1)(x+1) annulla T: radici semplici.",
    "sol": "T&sup2;=I &rArr; il minimo divide (x&minus;1)(x+1): diagonalizzabile, autovalori &plusmn;1. Autospazio +1 = simmetriche (dim 3), &minus;1 = antisimmetriche (dim 1). &Egrave; la decomposizione M&#8322;=Sym&oplus;Antisym."
   }
  ]
 },
 {
  "pool": "simmetrici",
  "src": "tipo 9 · autospazi della trasposizione",
  "steps": [
   {
    "t": "Gli autospazi dell&rsquo;operatore di trasposizione T(A)=A<sup>T</sup> sono:",
    "opts": [
     {
      "x": "&lambda;=+1: matrici simmetriche; &lambda;=&minus;1: matrici antisimmetriche",
      "c": true
     },
     {
      "x": "&lambda;=+1: matrici diagonali; &lambda;=&minus;1: il resto"
     },
     {
      "x": "&lambda;=0: antisimmetriche"
     },
     {
      "x": "T non ha autospazi reali"
     }
    ],
    "hint": "T(A)=A &hArr; A<sup>T</sup>=A (simmetrica); T(A)=&minus;A &hArr; A<sup>T</sup>=&minus;A (antisimmetrica).",
    "sol": "&lambda;=+1: A<sup>T</sup>=A, le simmetriche (dim n(n+1)/2). &lambda;=&minus;1: A<sup>T</sup>=&minus;A, le antisimmetriche (dim n(n&minus;1)/2). La decomposizione A=&frac12;(A+A<sup>T</sup>)+&frac12;(A&minus;A<sup>T</sup>) &egrave; la proiezione sugli autospazi."
   }
  ]
 },
 {
  "pool": "simmetrici",
  "src": "tipo 9 · T(A)=&minus;A^T",
  "steps": [
   {
    "t": "Per T(A)=&minus;A<sup>T</sup> su M&#8322;(&#8477;), quali autovalori e molteplicit&agrave;?",
    "opts": [
     {
      "x": "&minus;1 sulle simmetriche (m.a. 3), +1 sulle antisimmetriche (m.a. 1)",
      "c": true
     },
     {
      "x": "+1 (m.a. 3), &minus;1 (m.a. 1)"
     },
     {
      "x": "solo &minus;1"
     },
     {
      "x": "0 e 1"
     }
    ],
    "hint": "T(A)=A &hArr; &minus;A<sup>T</sup>=A &hArr; A antisimmetrica. T(A)=&minus;A &hArr; A<sup>T</sup>=A simmetrica.",
    "sol": "T=&minus;(trasposizione). Autovalore +1 &hArr; A antisimmetrica (dim 1); &minus;1 &hArr; A simmetrica (dim 3). T&sup2;=I &rArr; diagonalizzabile. Rispetto alla trasposizione i due autospazi si scambiano di segno."
   }
  ]
 },
 {
  "pool": "simmetrici",
  "src": "tipo 9 · simmetrica vs hermitiana (trabocchetto c)",
  "steps": [
   {
    "t": "In contesto complesso, quale condizione garantisce spettro reale e autospazi ortogonali: A<sup>T</sup>=A oppure A&#773;<sup>T</sup>=A?",
    "opts": [
     {
      "x": "hermitiana: A&#773;<sup>T</sup>=A (coniugata-trasposta)",
      "c": true
     },
     {
      "x": "simmetrica: A<sup>T</sup>=A"
     },
     {
      "x": "sono equivalenti su &#8450;"
     },
     {
      "x": "nessuna delle due"
     }
    ],
    "hint": "Nel complesso il prodotto scalare &egrave; &#9001;A,B&#9002;=tr(A&#773;<sup>T</sup>B): conta il coniugio. La sola trasposta non basta.",
    "sol": "Hermitiana (A&#773;<sup>T</sup>=A). Il teorema spettrale complesso vale per le hermitiane: spettro reale, autospazi ortogonali. Una simmetrica complessa (A<sup>T</sup>=A senza coniugio) pu&ograve; avere autovalori non reali: simmetrica &ne; hermitiana."
   }
  ]
 },
 {
  "pool": "simmetrici",
  "src": "tipo 9 · prodotto scalare hermitiano su M(&#8450;)",
  "steps": [
   {
    "t": "Su M&#8322;(&#8450;), il prodotto scalare hermitiano standard &egrave;:",
    "opts": [
     {
      "x": "&#9001;A,B&#9002;=tr(A&#773;<sup>T</sup>B)",
      "c": true
     },
     {
      "x": "&#9001;A,B&#9002;=tr(A<sup>T</sup>B)"
     },
     {
      "x": "&#9001;A,B&#9002;=tr(AB)"
     },
     {
      "x": "&#9001;A,B&#9002;=tr(A)&middot;tr(B)"
     }
    ],
    "hint": "Per avere &#9001;A,A&#9002;=&sum;|a<sub>ij</sub>|&sup2;&gt;0 serve la coniugata-trasposta, non la sola trasposta.",
    "sol": "&#9001;A,B&#9002;=tr(A&#773;<sup>T</sup>B)=&sum;<sub>ij</sub>a&#773;<sub>ij</sub>b<sub>ij</sub>. Allora &#9001;A,A&#9002;=&sum;|a<sub>ij</sub>|&sup2;&ge;0: definito positivo. Senza coniugio la forma non sarebbe definita positiva su &#8450;."
   }
  ]
 },
 {
  "pool": "simmetrici",
  "src": "tipo 9 · isometria conserva il prodotto scalare",
  "steps": [
   {
    "t": "Se f &egrave; un&rsquo;isometria lineare (&#8741;f(A)&#8741;=&#8741;A&#8741; &forall;A), conserva anche &#9001;f(A),f(B)&#9002;=&#9001;A,B&#9002;?",
    "opts": [
     {
      "x": "S&igrave;: per l&rsquo;identit&agrave; di polarizzazione",
      "c": true
     },
     {
      "x": "No: conserva solo le norme, non il prodotto"
     },
     {
      "x": "Solo se f &egrave; anche autoaggiunta"
     },
     {
      "x": "Solo in dimensione infinita"
     }
    ],
    "hint": "&#9001;A,B&#9002; si ricostruisce dalle norme: &#9001;A,B&#9002;=&frac14;(&#8741;A+B&#8741;&sup2;&minus;&#8741;A&minus;B&#8741;&sup2;).",
    "sol": "S&igrave;. Polarizzazione: &#9001;A,B&#9002;=&frac14;(&#8741;A+B&#8741;&sup2;&minus;&#8741;A&minus;B&#8741;&sup2;). Conservare tutte le norme &rArr; conservare la combinazione &rArr; conservare prodotto scalare e angoli."
   }
  ]
 },
 {
  "pool": "simmetrici",
  "src": "tipo 9 · criterio di autoaggiunzione",
  "steps": [
   {
    "t": "Il criterio corretto perch&eacute; un operatore T (su spazio con prodotto scalare) sia autoaggiunto &egrave;:",
    "opts": [
     {
      "x": "&#9001;T(A),B&#9002;=&#9001;A,T(B)&#9002; per ogni A,B",
      "c": true
     },
     {
      "x": "T(A)=A per ogni A"
     },
     {
      "x": "&#8741;T(A)&#8741;=&#8741;A&#8741; per ogni A"
     },
     {
      "x": "T ha matrice simmetrica in QUALCHE base"
     }
    ],
    "hint": "Autoaggiunto = T coincide col proprio aggiunto: la definizione &egrave; sul prodotto scalare, per OGNI coppia A,B.",
    "sol": "&#9001;T(A),B&#9002;=&#9001;A,T(B)&#9002; &forall;A,B. Equivale ad avere matrice simmetrica in una base ORTONORMALE, non in una base qualsiasi. La conservazione delle norme &egrave; invece l&rsquo;isometria: altra propriet&agrave;."
   }
  ]
 },
 {
  "pool": "simmetrici",
  "src": "tipo 9 · matrice in base ONB",
  "steps": [
   {
    "t": "Rispetto a una base ORTONORMALE, la matrice di un operatore autoaggiunto &egrave;:",
    "opts": [
     {
      "x": "simmetrica",
      "c": true
     },
     {
      "x": "antisimmetrica"
     },
     {
      "x": "ortogonale"
     },
     {
      "x": "sempre diagonale"
     }
    ],
    "hint": "In base ONB, la matrice dell&rsquo;aggiunto T* &egrave; la trasposta della matrice di T. Autoaggiunto &rArr; le due coincidono.",
    "sol": "Simmetrica. In una base ortonormale l&rsquo;aggiunto corrisponde alla trasposta; T=T* &rArr; matrice = sua trasposta. In una base NON ortonormale questa equivalenza cade."
   }
  ]
 },
 {
  "pool": "simmetrici",
  "src": "4appellosol Es. 6 · operatore antisimmetrico",
  "steps": [
   {
    "t": "Sia T antisimmetrico su uno spazio euclideo V&#8345; (&#9001;T(v),w&#9002;=&minus;&#9001;v,T(w)&#9002;). Cosa vale per la matrice in base ONB e per gli autovalori?",
    "opts": [
     {
      "x": "Matrice antisimmetrica; autovalori in i&#8477;&cup;{0}; per n dispari det&#8202;T=0 &rArr; non iniettivo",
      "c": true
     },
     {
      "x": "Matrice simmetrica; autovalori reali"
     },
     {
      "x": "Sempre invertibile"
     },
     {
      "x": "Diagonalizzabile su &#8477;"
     }
    ],
    "hint": "In base ONB l&rsquo;aggiunto &egrave; la trasposta: T*=&minus;T d&agrave; A<sup>T</sup>=&minus;A. Per n dispari il det di un&rsquo;antisimmetrica &egrave; 0.",
    "sol": "<b>Antisimmetrica, autovalori 0 o &plusmn;i&beta;, non iniettivo per n dispari.</b> In ONB A<sup>T</sup>=&minus;A. Gli autovalori di un&rsquo;antisimmetrica reale sono 0 oppure immaginari puri. Per n dispari det&#8202;A=(&minus;1)&#8319;det&#8202;A=&minus;det&#8202;A &rArr; det=0 &rArr; ker&ne;{0}: T non iniettivo. Non diagonalizzabile su &#8477; se ha autovalori non nulli."
   }
  ]
 },
 {
  "pool": "simmetrici",
  "src": "1appellosol Es. 6 · conservare l&rsquo;ortogonalit&agrave;",
  "steps": [
   {
    "t": "A \"conserva l&rsquo;ortogonalit&agrave;\" se &#9001;x,y&#9002;=0 &rArr; &#9001;Ax,Ay&#9002;=0. Tra diag(k,k), diag(k,&minus;k) e diag(k,m) con m&ne;&plusmn;k (tutte con k&ne;0), quali la conservano?",
    "opts": [
     {
      "x": "diag(k,k) e diag(k,&minus;k) s&igrave;; diag(k,m) generica no",
      "c": true
     },
     {
      "x": "Solo diag(k,k)"
     },
     {
      "x": "Tutte e tre"
     },
     {
      "x": "Nessuna"
     }
    ],
    "hint": "Conservare l&rsquo;ortogonalit&agrave; &hArr; A<sup>T</sup>A=&lambda;I. Prova con e&#8321;&perp;e&#8322; e con (1,1)&perp;(1,&minus;1). Conservare l&rsquo;ortogonalit&agrave; NON significa essere ortogonale.",
    "sol": "<b>diag(k,k) e diag(k,&minus;k) s&igrave;.</b> diag(k,k)=kI e diag(k,&minus;k) danno A<sup>T</sup>A=k&sup2;I (mappe conformi): angoli retti preservati. diag(k,m) con m&ne;&plusmn;k ha A<sup>T</sup>A=diag(k&sup2;,m&sup2;)&ne;&lambda;I e rompe l&rsquo;ortogonalit&agrave; di (1,1),(1,&minus;1). Conservare l&rsquo;ortogonalit&agrave; &egrave; pi&ugrave; debole che essere ortogonale."
   }
  ]
 },
 {
  "pool": "simmetrici",
  "src": "Compito 02_02_2016 Es. 5 · simmetrico per prodotto non standard",
  "steps": [
   {
    "t": "Con &#9001;X,Y&#9002;=X<sup>T</sup>S&#8202;Y (S simmetrica def. positiva) e T di matrice A, T &egrave; autoaggiunto se e solo se:",
    "opts": [
     {
      "x": "A<sup>T</sup>S = S&#8202;A",
      "c": true
     },
     {
      "x": "A<sup>T</sup>=A"
     },
     {
      "x": "A<sup>T</sup>A=I"
     },
     {
      "x": "S<sup>T</sup>=S soltanto"
     }
    ],
    "hint": "&#9001;T(X),Y&#9002;=(AX)<sup>T</sup>S&#8202;Y=X<sup>T</sup>A<sup>T</sup>S&#8202;Y; &#9001;X,T(Y)&#9002;=X<sup>T</sup>S&#8202;A&#8202;Y. Uguaglia per ogni X,Y.",
    "sol": "<b>A<sup>T</sup>S=SA.</b> &#9001;T(X),Y&#9002;=X<sup>T</sup>(A<sup>T</sup>S)Y e &#9001;X,T(Y)&#9002;=X<sup>T</sup>(SA)Y: uguali &forall;X,Y &hArr; A<sup>T</sup>S=SA. Con S=I si ricade in A<sup>T</sup>=A; con S&ne;I la simmetria della sola A NON basta."
   }
  ]
 },
 {
  "pool": "simmetrici",
  "src": "b03 scritto-2017-09-18 Es.5 · riflessione ortogonale in &#8477;&sup2;",
  "steps": [
   {
    "t": "Una riflessione ortogonale rispetto a una retta per l&rsquo;origine in &#8477;&sup2; ha matrice A. Cosa vale per A?",
    "opts": [
     {
      "x": "A ortogonale con det&#8202;A=&minus;1; autovalori +1 (direzione retta) e &minus;1 (normale)",
      "c": true
     },
     {
      "x": "A=I, det&#8202;A=+1"
     },
     {
      "x": "det&#8202;A=+1 (&egrave; una rotazione)"
     },
     {
      "x": "A non &egrave; ortogonale"
     }
    ],
    "hint": "Una riflessione fissa il direttore della retta (autovalore +1) e inverte la normale (autovalore &minus;1). &Egrave; un&rsquo;isometria con det &minus;1.",
    "sol": "<b>A ortogonale, det&#8202;A=&minus;1, autovalori +1 e &minus;1.</b> Per il teorema di classificazione delle isometrie del piano, le riflessioni sono le isometrie lineari con det=&minus;1: Av=v sul direttore, An=&minus;n sulla normale, e A&sup2;=I (involuzione). Le rotazioni hanno invece det=+1."
   }
  ]
 },
 {
  "pool": "simmetrici",
  "src": "b02 scritto-2017-02-07 Es.3 · affinit&agrave; e test isometria",
  "steps": [
   {
    "t": "Un&rsquo;affinit&agrave; f(X)=AX+b del piano &egrave; determinata da 3 coppie punto-immagine. Quando f &egrave; un&rsquo;ISOMETRIA?",
    "opts": [
     {
      "x": "quando A &egrave; ortogonale (A<sup>T</sup>A=I)",
      "c": true
     },
     {
      "x": "quando b=0"
     },
     {
      "x": "quando det&#8202;A=1"
     },
     {
      "x": "sempre"
     }
    ],
    "hint": "f isometria &hArr; conserva le distanze &hArr; la parte lineare A &egrave; ortogonale. La traslazione b non influisce sulle distanze.",
    "sol": "<b>Quando A<sup>T</sup>A=I.</b> Per il teorema di caratterizzazione delle isometrie affini, f conserva le distanze &hArr; la sua parte lineare A &egrave; ortogonale: d(f(P),f(Q))=&#8741;A(P&minus;Q)&#8741;=&#8741;P&minus;Q&#8741; &forall;P,Q. Il vettore b (traslazione) preserva sempre le distanze; det&#8202;A=&plusmn;1 &egrave; necessario ma non sufficiente."
   }
  ]
 },
 {
  "pool": "simmetrici",
  "src": "b03 scritto-2017-06-30 Es.3 · affinit&agrave; e incidenza",
  "steps": [
   {
    "t": "Tre rette L&#8321;,L&#8322;,L&#8323; di &#8477;&sup2; sono concorrenti (un punto comune); M&#8321;,M&#8322;,M&#8323; NON lo sono. Esiste un&rsquo;affinit&agrave; &phi; con &phi;(L&#8342;)=M&#8342;?",
    "opts": [
     {
      "x": "No: un&rsquo;affinit&agrave; conserva l&rsquo;incidenza, non pu&ograve; separare rette concorrenti",
      "c": true
     },
     {
      "x": "S&igrave;: le affinit&agrave; sono sempre libere"
     },
     {
      "x": "S&igrave;: basta scegliere A invertibile"
     },
     {
      "x": "Dipende dagli angoli"
     }
    ],
    "hint": "Le affinit&agrave; mandano rette in rette e conservano le intersezioni: L&#8321;&#8745;L&#8322;&#8745;L&#8323;={P} andrebbe in {&phi;(P)}.",
    "sol": "<b>No.</b> Un&rsquo;affinit&agrave; &egrave; una biiezione che conserva l&rsquo;incidenza (teorema fondamentale della geometria affine): se le L&#8342; hanno un punto comune P, le immagini &phi;(L&#8342;) condividono &phi;(P). Ma le M&#8342; non sono concorrenti: contraddizione. L&rsquo;incidenza &egrave; un invariante affine."
   }
  ]
 },
 {
  "pool": "simmetrici",
  "src": "b01 · rotazione di angolo &theta;",
  "steps": [
   {
    "t": "La rotazione di angolo &theta; attorno all&rsquo;origine in &#8477;&sup2; ha matrice:",
    "opts": [
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">cos&theta;</span><span class=\"mcell\">&minus;sin&theta;</span></div><div class=\"mrow\"><span class=\"mcell\">sin&theta;</span><span class=\"mcell\">cos&theta;</span></div></span>",
      "c": true
     },
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">cos&theta;</span><span class=\"mcell\">sin&theta;</span></div><div class=\"mrow\"><span class=\"mcell\">sin&theta;</span><span class=\"mcell\">cos&theta;</span></div></span>"
     },
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">sin&theta;</span><span class=\"mcell\">cos&theta;</span></div><div class=\"mrow\"><span class=\"mcell\">cos&theta;</span><span class=\"mcell\">&minus;sin&theta;</span></div></span>"
     },
     {
      "x": "<span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">cos&theta;</span><span class=\"mcell\">&minus;sin&theta;</span></div><div class=\"mrow\"><span class=\"mcell\">&minus;sin&theta;</span><span class=\"mcell\">cos&theta;</span></div></span>"
     }
    ],
    "hint": "Le colonne sono le immagini di e&#8321; ed e&#8322;: R(e&#8321;)=(cos&theta;,sin&theta;), R(e&#8322;)=(&minus;sin&theta;,cos&theta;).",
    "sol": "<b><span class=\"matrix\"><div class=\"mrow\"><span class=\"mcell\">cos&theta;</span><span class=\"mcell\">&minus;sin&theta;</span></div><div class=\"mrow\"><span class=\"mcell\">sin&theta;</span><span class=\"mcell\">cos&theta;</span></div></span>.</b> &Egrave; ortogonale con det=cos&sup2;&theta;+sin&sup2;&theta;=1: per il teorema di classificazione delle isometrie piane &egrave; una rotazione. Autovalori e^{&plusmn;i&theta;}, reali solo per &theta;=0 (I) o &theta;=&pi; (&minus;I); la variante simmetrica con +sin&theta; sarebbe una riflessione (det=&minus;1)."
   }
  ]
 },
 {
  "pool": "simmetrici",
  "src": "b03 secondoesosol Q9 · matrice simmetrica solo in basi ortonormali",
  "steps": [
   {
    "t": "Un operatore autoaggiunto (simmetrico) T ha matrice simmetrica in una base B. Cosa garantisce la simmetria della matrice?",
    "opts": [
     {
      "x": "che B sia ORTONORMALE rispetto al prodotto scalare",
      "c": true
     },
     {
      "x": "che B sia una qualsiasi base"
     },
     {
      "x": "che T sia invertibile"
     },
     {
      "x": "che det&#8202;T&gt;0"
     }
    ],
    "hint": "La matrice di un operatore autoaggiunto &egrave; simmetrica SOLO in basi ortonormali; in una base generica pu&ograve; non esserlo.",
    "sol": "<b>B ortonormale.</b> Per il teorema di rappresentazione dell&rsquo;operatore autoaggiunto, la corrispondenza T autoaggiunto &hArr; matrice simmetrica vale nelle basi ortonormali. In una base qualsiasi la matrice di T pu&ograve; non essere simmetrica pur essendo T autoaggiunto (entra la matrice del prodotto scalare, non pi&ugrave; l&rsquo;identit&agrave;)."
   }
  ]
 }
];

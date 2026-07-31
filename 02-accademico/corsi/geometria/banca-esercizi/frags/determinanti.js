Q.determinanti = [
 {
  "pool": "determinanti",
  "src": "b01 · det(&lambda;A)=&lambda;&#8319;det A",
  "steps": [
   {
    "t": "Sia A &isin; M&#8323;(&#8477;) con det&#8202;A = 5. Quanto vale det(2A)?",
    "opts": [
     {
      "x": "40",
      "c": true
     },
     {
      "x": "10"
     },
     {
      "x": "20"
     },
     {
      "x": "80"
     }
    ],
    "hint": "det(&lambda;A)=&lambda;&#8319;det&#8202;A con n = ordine della matrice, NON &lambda;&middot;det&#8202;A.",
    "sol": "<b>40.</b> det(&lambda;A)=&lambda;&#8319;det&#8202;A; qui n=3 e &lambda;=2, quindi 2&sup3;&middot;5=40. Moltiplicare l&rsquo;intera matrice per &lambda; scala ciascuna delle n righe, da cui il fattore &lambda;&#8319;."
   }
  ]
 },
 {
  "pool": "determinanti",
  "src": "b01 · det antisimmetrica di ordine dispari",
  "steps": [
   {
    "t": "A &isin; M&#8323;(&#8477;) &egrave; antisimmetrica (A<sup>T</sup>=&minus;A). Quanto vale det&#8202;A?",
    "opts": [
     {
      "x": "0",
      "c": true
     },
     {
      "x": "1"
     },
     {
      "x": "&plusmn;1"
     },
     {
      "x": "non determinabile"
     }
    ],
    "hint": "Usa det&#8202;A<sup>T</sup>=det&#8202;A insieme a det(&minus;A)=(&minus;1)&#8319;det&#8202;A, con n dispari.",
    "sol": "<b>0.</b> det&#8202;A=det&#8202;A<sup>T</sup>=det(&minus;A)=(&minus;1)&sup3;det&#8202;A=&minus;det&#8202;A, quindi 2&#8202;det&#8202;A=0. Vale per ogni matrice antisimmetrica di ordine dispari."
   }
  ]
 },
 {
  "pool": "determinanti",
  "src": "b01 · det(A<sup>T</sup>)=det A",
  "steps": [
   {
    "t": "Come sono legati det&#8202;A e det&#8202;A<sup>T</sup> per A quadrata?",
    "opts": [
     {
      "x": "det&#8202;A<sup>T</sup>=det&#8202;A",
      "c": true
     },
     {
      "x": "det&#8202;A<sup>T</sup>=&minus;det&#8202;A"
     },
     {
      "x": "det&#8202;A<sup>T</sup>=1/det&#8202;A"
     },
     {
      "x": "dipende dalla matrice"
     }
    ],
    "hint": "Lo sviluppo di Laplace per righe di A coincide con quello per colonne di A<sup>T</sup>.",
    "sol": "<b>det&#8202;A<sup>T</sup>=det&#8202;A</b> sempre. Trasporre scambia righe e colonne, che il determinante tratta simmetricamente. Conseguenza: ogni propriet&agrave; sulle righe vale identica sulle colonne."
   }
  ]
 },
 {
  "pool": "determinanti",
  "src": "b01 · Binet e controesempio su det(A+B)",
  "steps": [
   {
    "t": "Per A,B &isin; M&#8322;(&#8477;), quale identit&agrave; &egrave; SEMPRE vera?",
    "opts": [
     {
      "x": "det(AB)=det&#8202;A&middot;det&#8202;B",
      "c": true
     },
     {
      "x": "det(A+B)=det&#8202;A+det&#8202;B"
     },
     {
      "x": "det(AB)=det&#8202;A+det&#8202;B"
     },
     {
      "x": "det(A+B)=det&#8202;A&middot;det&#8202;B"
     }
    ],
    "hint": "Il determinante &egrave; moltiplicativo sul PRODOTTO (Binet), non additivo sulla somma.",
    "sol": "<b>det(AB)=det&#8202;A&middot;det&#8202;B</b> (teorema di Binet). L&rsquo;additivit&agrave; &egrave; falsa: A=I, B=&minus;I danno det&#8202;A+det&#8202;B=2 ma det(A+B)=det(0)=0."
   }
  ]
 },
 {
  "pool": "determinanti",
  "src": "b01 · AA<sup>T</sup>=I &rArr; det=&plusmn;1",
  "steps": [
   {
    "t": "Se A &isin; M&#8319;(&#8477;) soddisfa AA<sup>T</sup>=I (A ortogonale), quali valori pu&ograve; assumere det&#8202;A?",
    "opts": [
     {
      "x": "+1 oppure &minus;1",
      "c": true
     },
     {
      "x": "solo +1"
     },
     {
      "x": "qualsiasi reale"
     },
     {
      "x": "0"
     }
    ],
    "hint": "Applica Binet e det&#8202;A<sup>T</sup>=det&#8202;A alla relazione AA<sup>T</sup>=I.",
    "sol": "<b>&plusmn;1.</b> Per il teorema di Binet e det&#8202;A<sup>T</sup>=det&#8202;A: da AA<sup>T</sup>=I segue det&#8202;A&middot;det&#8202;A<sup>T</sup>=(det&#8202;A)&sup2;=det&#8202;I=1, quindi det&#8202;A=&plusmn;1. Non necessariamente +1: le riflessioni hanno det=&minus;1."
   }
  ]
 },
 {
  "pool": "determinanti",
  "src": "b01 · scambio di righe cambia segno",
  "steps": [
   {
    "t": "B si ottiene da A &isin; M&#8323;(&#8477;) scambiando due righe. Se det&#8202;A=7, quanto vale det&#8202;B?",
    "opts": [
     {
      "x": "&minus;7",
      "c": true
     },
     {
      "x": "7"
     },
     {
      "x": "0"
     },
     {
      "x": "14"
     }
    ],
    "hint": "Uno scambio di due righe (o due colonne) moltiplica il determinante per &minus;1.",
    "sol": "<b>&minus;7.</b> Il determinante &egrave; una funzione alternante delle righe: ogni trasposizione di due righe ne cambia il segno."
   }
  ]
 },
 {
  "pool": "determinanti",
  "src": "b02 sol-scritto-2017-02-07 Es.2 · operazione elementare",
  "steps": [
   {
    "t": "Alla seconda riga di A si somma 3 volte la prima riga. Come cambia det&#8202;A?",
    "opts": [
     {
      "x": "resta invariato",
      "c": true
     },
     {
      "x": "si triplica"
     },
     {
      "x": "cambia segno"
     },
     {
      "x": "aumenta di 3"
     }
    ],
    "hint": "L&rsquo;operazione riga&#8342; &rarr; riga&#8342; + &lambda;&middot;riga&#8343; (con i&ne;j) NON altera il determinante.",
    "sol": "<b>Invariato.</b> Per multilinearit&agrave; e alternanza il contributo aggiuntivo &egrave; un determinante con due righe uguali, dunque nullo. Solo lo scambio (segno) e la moltiplicazione di una riga per &lambda; (fattore &lambda;) modificano det."
   }
  ]
 },
 {
  "pool": "determinanti",
  "src": "b02 sol-scritto-2017-02-07 Es.2 · sequenza di operazioni",
  "steps": [
   {
    "t": "det&#8202;A=5 (A di ordine 3). B si ottiene scambiando due colonne di A e poi moltiplicando una riga per 4. Quanto vale det&#8202;B?",
    "opts": [
     {
      "x": "&minus;20",
      "c": true
     },
     {
      "x": "20"
     },
     {
      "x": "60"
     },
     {
      "x": "&minus;60"
     }
    ],
    "hint": "Scambio di colonne &rarr; fattore &minus;1; moltiplicazione di una riga per 4 &rarr; fattore 4. Componi i fattori su det&#8202;A.",
    "sol": "<b>&minus;20.</b> Scambio colonne: 5 &rarr; &minus;5. Riga per 4: &minus;5 &rarr; &minus;20. Le operazioni elementari agiscono moltiplicativamente sul determinante."
   }
  ]
 },
 {
  "pool": "determinanti",
  "src": "b01 · det di matrice triangolare",
  "steps": [
   {
    "t": "Per A triangolare (superiore o inferiore), det&#8202;A vale:",
    "opts": [
     {
      "x": "il prodotto degli elementi diagonali",
      "c": true
     },
     {
      "x": "la somma della diagonale"
     },
     {
      "x": "il prodotto degli elementi fuori diagonale"
     },
     {
      "x": "sempre 0"
     }
    ],
    "hint": "Lo sviluppo di Laplace lungo la prima colonna lascia solo il contributo diagonale.",
    "sol": "<b>Il prodotto degli elementi diagonali.</b> Per una triangolare gli autovalori SONO gli elementi diagonali e det = prodotto degli autovalori. La somma della diagonale &egrave; invece la traccia."
   }
  ]
 },
 {
  "pool": "determinanti",
  "src": "b01 · det=0 e dipendenza delle colonne",
  "steps": [
   {
    "t": "Per A &isin; M&#8319;(&#8477;), la condizione det&#8202;A=0 equivale a:",
    "opts": [
     {
      "x": "le colonne di A sono linearmente dipendenti",
      "c": true
     },
     {
      "x": "A &egrave; antisimmetrica"
     },
     {
      "x": "A ha una riga nulla"
     },
     {
      "x": "A non &egrave; quadrata"
     }
    ],
    "hint": "det&#8202;A=0 &hArr; A non invertibile &hArr; rk&#8202;A &lt; n &hArr; colonne dipendenti.",
    "sol": "<b>Colonne linearmente dipendenti.</b> det&#8202;A=0 &hArr; rk&#8202;A&lt;n &hArr; ker&#8202;A&ne;{0} &hArr; A singolare. Una riga nulla &egrave; solo un caso particolare, non l&rsquo;equivalenza."
   }
  ]
 },
 {
  "pool": "determinanti",
  "src": "b01 · det(A&#8315;&sup1;)=1/det A",
  "steps": [
   {
    "t": "Se A &egrave; invertibile con det&#8202;A=&minus;3, quanto vale det(A&#8315;&sup1;)?",
    "opts": [
     {
      "x": "&minus;1/3",
      "c": true
     },
     {
      "x": "3"
     },
     {
      "x": "1/3"
     },
     {
      "x": "&minus;3"
     }
    ],
    "hint": "Da AA&#8315;&sup1;=I e Binet: det&#8202;A&middot;det(A&#8315;&sup1;)=1.",
    "sol": "<b>&minus;1/3.</b> Binet su AA&#8315;&sup1;=I d&agrave; det(A&#8315;&sup1;)=1/det&#8202;A. Il segno si conserva: 1/(&minus;3)=&minus;1/3."
   }
  ]
 },
 {
  "pool": "determinanti",
  "src": "b01 · permutazione ciclica di righe",
  "steps": [
   {
    "t": "In una matrice 3&times;3 le righe vengono permutate ciclicamente R&#8321;&rarr;R&#8322;&rarr;R&#8323;&rarr;R&#8321;. Se det=6, il nuovo determinante vale:",
    "opts": [
     {
      "x": "6",
      "c": true
     },
     {
      "x": "&minus;6"
     },
     {
      "x": "18"
     },
     {
      "x": "2"
     }
    ],
    "hint": "Il ciclo (1&#8202;2&#8202;3) si scrive come due trasposizioni: permutazione PARI, segno (&minus;1)&sup2;=+1.",
    "sol": "<b>6.</b> Una permutazione ciclica di 3 righe &egrave; pari (due scambi), quindi il determinante resta invariato. Cambierebbe segno solo con un numero DISPARI di scambi."
   }
  ]
 }
];

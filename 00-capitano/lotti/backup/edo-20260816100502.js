Q.edo = [

  /* ===================== CONCETTUALI (16) ===================== */

  { pool:"edo", src:"20240122 Es.5", steps:[{
      t:"Il problema $y'=f(t,y)$, $y(t_0)=y_0$ ha soluzione locale unica se, in un intorno di $(t_0,y_0)$:",
      opts:[
        {x:"$f(t,u)$ &egrave; continua ed &egrave; lipschitziana rispetto a $u$ (uniformemente in $t$)",c:true},
        {x:"$f(t,y(t))$ &egrave; di classe $C^1$ lungo la soluzione"},
        {x:"la soluzione $y(t)$ &egrave; lipschitziana"},
        {x:"$f$ &egrave; limitata in un intorno del dato"}],
      hint:"L'ipotesi &egrave; su $f$ come funzione delle DUE variabili indipendenti $(t,u)$, non sulla soluzione (che ancora non esiste).",
      sol:"<b>Teorema di Cauchy-Lipschitz.</b> La condizione si formula su $f(t,u)$ vista come funzione di due variabili indipendenti: continuit&agrave; in $(t,u)$ e lipschitzianit&agrave; in $u$. Scrivere '$f(t,y(t))\\in C^1$' &egrave; un errore concettuale segnalato nella soluzione ufficiale del compito 22/01/2024: la soluzione $y(t)$ non esiste ancora quando si verificano le ipotesi. In pratica basta $f\\in C^1$ in un intorno di $(t_0,y_0)$, che implica la lipschitzianit&agrave; locale."
    }]
  },

  { pool:"edo", src:"tipo F &middot; manuale", steps:[{
      t:"Per $y'=\\sqrt{|y|}$, $y(0)=0$, quante soluzioni massimali esistono?",
      opts:[
        {x:"Infinite: l'unicit&agrave; cade perch&eacute; $\\sqrt{|y|}$ non &egrave; lipschitziana in $y=0$",c:true},
        {x:"Una sola, per Cauchy-Lipschitz"},
        {x:"Nessuna: il campo non &egrave; continuo in $0$"},
        {x:"Esattamente due: $y\\equiv 0$ e $y=x^2/4$"}],
      hint:"Il campo &egrave; continuo (Peano d&agrave; esistenza) ma la sua derivata in $y$ esplode a $y=0$: senza Lipschitz l'unicit&agrave; non &egrave; garantita.",
      sol:"<b>Dove cade Cauchy-Lipschitz.</b> $f(y)=\\sqrt{|y|}$ &egrave; continua (Teorema di Peano: esiste almeno una soluzione) ma $f'(y)=\\tfrac{1}{2\\sqrt{|y|}}\\to\\infty$ per $y\\to0$: non &egrave; lipschitziana attorno a $0$. Oltre a $y\\equiv0$ e $y=\\tfrac{x^2}{4}$ ($x\\ge0$), si costruiscono infinite soluzioni che restano nulle fino a un istante $a\\ge0$ e poi partono come $\\tfrac{(x-a)^2}{4}$. L'unicit&agrave; richiede la lipschitzianit&agrave;, qui assente sull'asse $y=0$."
    }]
  },

  { pool:"edo", src:"tipo F &middot; manuale", steps:[{
      t:"La sola continuit&agrave; di $f(t,u)$ (senza lipschitzianit&agrave;) garantisce:",
      opts:[
        {x:"esistenza locale di almeno una soluzione, ma non l'unicit&agrave; (Teorema di Peano)",c:true},
        {x:"esistenza e unicit&agrave; locale"},
        {x:"n&eacute; esistenza n&eacute; unicit&agrave;"},
        {x:"unicit&agrave; ma non esistenza globale"}],
      hint:"Continuit&agrave; e lipschitzianit&agrave; giocano ruoli diversi: una d&agrave; l'esistenza, l'altra l'unicit&agrave;.",
      sol:"<b>Teorema di Peano.</b> Se $f$ &egrave; continua in un intorno di $(t_0,y_0)$ esiste almeno una soluzione locale. L'unicit&agrave; &egrave; un'informazione in pi&ugrave;, portata dalla lipschitzianit&agrave; in $u$ (Cauchy-Lipschitz). Il controesempio $y'=\\sqrt{|y|}$ mostra che senza Lipschitz l'unicit&agrave; pu&ograve; fallire pur restando l'esistenza."
    }]
  },

  { pool:"edo", src:"20240704 Es.5", steps:[{
      t:"$y'=f(t,y)$ ha $f$ localmente lipschitziana; $y\\equiv c$ &egrave; soluzione costante. Una soluzione con $y(t_0)>c$:",
      opts:[
        {x:"resta $>c$ su tutto il suo intervallo massimale (non pu&ograve; attraversare $y\\equiv c$)",c:true},
        {x:"pu&ograve; scendere sotto $c$ se $f$ diventa negativa"},
        {x:"tende necessariamente a $c$"},
        {x:"attraversa $y=c$ in un punto di tangenza"}],
      hint:"Se la attraversasse, nel punto d'incontro due soluzioni distinte passerebbero per lo stesso dato: contro l'unicit&agrave;.",
      sol:"<b>Barriere e unicit&agrave;.</b> Se una soluzione toccasse $y\\equiv c$ in un istante $t^\\ast$, per $(t^\\ast,c)$ passerebbero due soluzioni distinte (la costante e la nostra), violando Cauchy-Lipschitz. Quindi le soluzioni costanti (gli equilibri, zeri di $f$) fanno da barriere invalicabili: il segno di $y-c$ resta costante. &Egrave; l'argomento che confina la soluzione in una striscia, usato in quasi ogni compito d'esame."
    }]
  },

  { pool:"edo", src:"20240122 Es.5", steps:[{
      t:"$y'=g(t)\\,y\\,h(y)$ con $g,h$ continue e $h(0)$ finito; $y(0)=y_0>0$. Il segno di $y(t)$:",
      opts:[
        {x:"resta positivo: $y\\equiv0$ &egrave; soluzione e fa da barriera",c:true},
        {x:"pu&ograve; cambiare quando $g(t)$ cambia segno"},
        {x:"dipende dal segno di $h$"},
        {x:"&egrave; positivo solo finch&eacute; $g(t)>0$"}],
      hint:"$y=0$ annulla il campo: &egrave; una soluzione costante. Il dato positivo resta dalla stessa parte.",
      sol:"<b>Conservazione del segno.</b> $y\\equiv0$ annulla $y'=g\\,y\\,h(y)$: &egrave; equilibrio. Per unicit&agrave; la soluzione con $y_0>0$ non pu&ograve; raggiungere $0$, quindi $y(t)>0$ su tutto l'intervallo massimale, indipendentemente dal segno di $g$ o $h$. Il segno del dato iniziale &egrave; conservato dalla barriera $y=0$."
    }]
  },

  { pool:"edo", src:"20240704 Es.5", steps:[{
      t:"Per stabilire se una soluzione &egrave; crescente o decrescente SENZA risolvere $y'=f(t,y)$ si:",
      opts:[
        {x:"determina il segno di $f(t,y(t))$ usando le barriere per localizzare $y(t)$",c:true},
        {x:"risolve esplicitamente e si deriva"},
        {x:"calcola $f'(y)$ e se ne guarda il segno"},
        {x:"applica il teorema dell'asintoto"}],
      hint:"$y'=f$: il segno di $y'$ &egrave; il segno del campo valutato dove sta la soluzione. Le barriere dicono dove sta.",
      sol:"<b>Monotonia qualitativa.</b> Poich&eacute; $y'(t)=f(t,y(t))$, il segno di $y'$ coincide con quello di $f$ lungo la soluzione. Le soluzioni costanti confinano $y(t)$ in una striscia; in quella striscia si studia il segno di $f$. Se ha segno costante, la soluzione &egrave; monotona. Non serve la formula esplicita di $y$."
    }]
  },

  { pool:"edo", src:"20220124 Es.5", steps:[{
      t:"$y'=4t^3(1-e^{y})$, $y(0)=\\log2$. In $t=0$ la soluzione ha:",
      opts:[
        {x:"un punto di massimo: $y'>0$ per $t<0$ e $y'<0$ per $t>0$",c:true},
        {x:"un punto di minimo"},
        {x:"un flesso a tangente orizzontale"},
        {x:"un comportamento monotono, senza estremi"}],
      hint:"Il segno di $y'$ &egrave; il prodotto di $4t^3$ (che cambia segno in $0$) per $(1-e^y)$ (di segno costante). Non semplificare in fretta.",
      sol:"<b>Segno del campo (compito 24/01/2022).</b> Il dato $y(0)=\\log2>0$ e la barriera $y\\equiv0$ danno $y(t)>0$, quindi $1-e^{y}<0$ costante. Allora $\\operatorname{sgn}(y')=\\operatorname{sgn}(4t^3)\\cdot(-1)$: positivo per $t<0$, negativo per $t>0$. La soluzione cresce, raggiunge il massimo in $t=0$ e poi decresce. La monotonia si legge dal campo senza risolvere."
    }]
  },

  { pool:"edo", src:"tipo F &middot; manuale", steps:[{
      t:"Teorema dell'asintoto: se $y(t)\\to L$ finito per $t\\to+\\infty$ ED esiste $\\lim_{t\\to+\\infty}y'(t)$, allora:",
      opts:[
        {x:"$\\lim_{t\\to+\\infty}y'(t)=0$",c:true},
        {x:"$\\lim_{t\\to+\\infty}y'(t)=L$"},
        {x:"$y'(t)$ pu&ograve; tendere a un valore qualsiasi"},
        {x:"$L$ &egrave; necessariamente un equilibrio, per qualunque EDO"}],
      hint:"Se il grafico tende a una retta orizzontale, la pendenza deve appiattirsi a zero.",
      sol:"<b>Teorema dell'asintoto.</b> Se $y\\to L$ finito e $y'$ ammette limite, quel limite &egrave; $0$: altrimenti $y$ crescerebbe o decrescerebbe indefinitamente, contraddicendo $y\\to L$. Per un'EDO autonoma $y'=f(y)$ ci&ograve; forza $f(L)=0$, cio&egrave; $L$ &egrave; un equilibrio; per un'EDO non autonoma la conclusione &egrave; solo $y'\\to0$."
    }]
  },

  { pool:"edo", src:"20240122 Es.5", steps:[{
      t:"Il teorema dell'asintoto pu&ograve; essere usato per DIMOSTRARE che $\\lim_{t\\to+\\infty}y(t)$ esiste?",
      opts:[
        {x:"No: presuppone che il limite esista gi&agrave;; l'esistenza va provata a parte (di solito con monotonia + limitatezza)",c:true},
        {x:"S&igrave;, il teorema garantisce sempre l'esistenza del limite"},
        {x:"S&igrave;, se $f$ &egrave; continua"},
        {x:"No, ma la garantisce se la soluzione &egrave; globale"}],
      hint:"Il teorema calcola il VALORE del limite supponendolo esistente; non &egrave; un criterio di esistenza.",
      sol:"<b>Trappola d'esame.</b> Il teorema dell'asintoto ha come ipotesi l'esistenza del limite di $y$: ne deduce solo che $y'\\to0$. Per provare che il limite esiste serve un argomento indipendente: tipicamente la soluzione &egrave; monotona (segno costante di $y'$) e limitata (barriere), quindi converge per il teorema di monotonia. Solo dopo si usa l'asintoto per identificare il valore. Errore segnalato nelle soluzioni ufficiali."
    }]
  },

  { pool:"edo", src:"luglioAV Es.2", steps:[{
      t:"$y'=f(y)$ autonoma, $f$ localmente lipschitziana; $y$ monotona con $\\lim_{t\\to+\\infty}y(t)=L$ finito. Allora $L$:",
      opts:[
        {x:"&egrave; un equilibrio: $f(L)=0$",c:true},
        {x:"pu&ograve; essere qualsiasi valore del codominio"},
        {x:"coincide con il dato iniziale"},
        {x:"rende $f'(L)=0$"}],
      hint:"Applica l'asintoto: $y'=f(y)\\to f(L)$ e deve valere $0$.",
      sol:"<b>Il limite &egrave; un equilibrio.</b> Per continuit&agrave; $y'=f(y)\\to f(L)$; per l'asintoto $y'\\to0$; quindi $f(L)=0$. Una soluzione monotona e limitata di un'autonoma converge sempre a un equilibrio, mai a un valore intermedio. &Egrave; il meccanismo che nel compito 21/07/2025 forza $y\\to3$."
    }]
  },

  { pool:"edo", src:"20250127 Es.3", steps:[{
      t:"Quale condizione su $f$ garantisce che ogni soluzione di $y'=f(t,y)$ &egrave; definita su tutto $\\mathbb{R}$?",
      opts:[
        {x:"sublinearit&agrave;: $|f(t,u)|\\le L_1(t)|u|+L_2(t)$ con $L_1,L_2$ continue",c:true},
        {x:"$f$ limitata rispetto a $t$"},
        {x:"$f$ di classe $C^\\infty$"},
        {x:"$f(t,u)\\to0$ per $|u|\\to\\infty$"}],
      hint:"La crescita al pi&ugrave; lineare in $u$ impedisce l'esplosione in tempo finito.",
      sol:"<b>Teorema di esistenza globale.</b> Se $f$ &egrave; localmente lipschitziana e sublineare, $|f(t,u)|\\le L_1(t)|u|+L_2(t)$, per il lemma di Gronwall la soluzione non pu&ograve; divergere in tempo finito: l'intervallo massimale &egrave; tutto $\\mathbb{R}$. La regolarit&agrave; $C^\\infty$ da sola non basta ($y'=y^2$ &egrave; liscio ma esplode)."
    }]
  },

  { pool:"edo", src:"20240122 Es.5", steps:[{
      t:"Una soluzione &egrave; crescente e a priori NON limitata. Per provarne la globalit&agrave; conviene usare:",
      opts:[
        {x:"la sublinearit&agrave; di $f$: controlla la crescita anche se $y$ &egrave; illimitata",c:true},
        {x:"una stima a priori $|y|\\le M$"},
        {x:"il teorema dell'asintoto"},
        {x:"l'unicit&agrave; di Cauchy-Lipschitz"}],
      hint:"Se la soluzione non &egrave; limitata, una stima del tipo $|y|\\le M$ &egrave; falsa: serve controllare il TASSO di crescita.",
      sol:"<b>Due strade per la globalit&agrave;.</b> Se la soluzione resta in un compatto (barriere) basta la limitatezza a priori. Se invece &egrave; illimitata &mdash; come nel punto ii del compito 22/01/2024 &mdash; la limitatezza fallisce e si usa la sublinearit&agrave;: $|f(t,u)|\\le L_1(t)|u|+L_2(t)$ impedisce l'esplosione controllando la velocit&agrave; di crescita, non il valore."
    }]
  },

  { pool:"edo", src:"tipo F &middot; manuale", steps:[{
      t:"Perch&eacute; $y'=1+y^2$, $y(0)=0$ NON &egrave; definita su tutto $\\mathbb{R}$?",
      opts:[
        {x:"cresce pi&ugrave; che linearmente ($y^2$): esplode in tempo finito, intervallo $(-\\pi/2,\\pi/2)$",c:true},
        {x:"il campo non &egrave; continuo"},
        {x:"manca l'unicit&agrave;"},
        {x:"il dato iniziale &egrave; un equilibrio"}],
      hint:"La crescita quadratica viola la sublinearit&agrave;: la soluzione $\\tan t$ ha un asintoto verticale.",
      sol:"<b>Esplosione in tempo finito.</b> La soluzione &egrave; $y=\\tan t$, con asintoti in $\\pm\\pi/2$: l'intervallo massimale &egrave; $(-\\pi/2,\\pi/2)$, non $\\mathbb{R}$. Il campo $1+y^2$ cresce quadraticamente, viola la sublinearit&agrave;, e il teorema di esistenza globale non si applica. La superlinearit&agrave; &egrave; la causa tipica di un intervallo massimale limitato pur con campo liscio."
    }]
  },

  { pool:"edo", src:"tipo F &middot; manuale", steps:[{
      t:"Una soluzione massimale definita su $(a,b)$ con $b<+\\infty$ finito, per $t\\to b^-$:",
      opts:[
        {x:"esce da ogni compatto (esplode o raggiunge il bordo del dominio di $f$)",c:true},
        {x:"tende sempre a un limite finito in $b$"},
        {x:"&egrave; sempre prolungabile oltre $b$"},
        {x:"ha necessariamente $y'\\to0$ in $b$"}],
      hint:"Se la soluzione restasse in un compatto fino a $b$, la si potrebbe riattaccare oltre $b$: contro la massimalit&agrave;.",
      sol:"<b>Criterio di fuga dai compatti.</b> Se l'estremo destro $b$ dell'intervallo massimale &egrave; finito, la soluzione non pu&ograve; restare confinata in un compatto contenuto nel dominio di $f$: altrimenti il teorema locale la prolungherebbe oltre $b$. Quindi o $|y(t)|\\to\\infty$ (blow-up) o $(t,y(t))$ raggiunge il bordo dove $f$ perde regolarit&agrave;. &Egrave; il criterio che lega intervallo massimale finito ed esplosione."
    }]
  },

  { pool:"edo", src:"tipo F &middot; manuale", steps:[{
      t:"Per l'autonoma $y'=f(y)$ un equilibrio $y^\\ast$ (con $f(y^\\ast)=0$) &egrave; asintoticamente stabile se:",
      opts:[
        {x:"$f'(y^\\ast)<0$",c:true},
        {x:"$f'(y^\\ast)>0$"},
        {x:"$f'(y^\\ast)=0$"},
        {x:"$f(y^\\ast)>0$"}],
      hint:"Linearizza: vicino a $y^\\ast$, la perturbazione $\\eta$ soddisfa $\\eta'\\approx f'(y^\\ast)\\eta$.",
      sol:"<b>Stabilit&agrave; per linearizzazione.</b> Posto $y=y^\\ast+\\eta$, $\\eta'=f(y^\\ast+\\eta)\\approx f'(y^\\ast)\\eta$, quindi $\\eta\\sim e^{f'(y^\\ast)t}$. Se $f'(y^\\ast)<0$ le perturbazioni decadono: equilibrio stabile (pozzo); se $f'(y^\\ast)>0$ crescono: instabile (sorgente). Il caso $f'(y^\\ast)=0$ &egrave; ambiguo e va studiato col segno di $f$ ai due lati."
    }]
  },

  { pool:"edo", src:"prop_andrea Es.5", steps:[{
      t:"$y'=\\dfrac{(y^2+1)y}{t}$: il campo $f(t,y)=\\dfrac{(y^2+1)y}{t}$ NON &egrave; $C^1$ dove:",
      opts:[
        {x:"sull'asse $t=0$; l&igrave; Cauchy-Lipschitz non si applica, ma vale localmente per $t\\neq0$",c:true},
        {x:"sull'asse $y=0$"},
        {x:"ovunque, perch&eacute; $y^2+1$ non &egrave; lineare"},
        {x:"nei punti con $y=\\pm1$"}],
      hint:"Il denominatore $t$ si annulla solo su $t=0$: l&igrave; il campo esplode.",
      sol:"<b>Dominio di regolarit&agrave; (compito 27/06/2025).</b> $f$ &egrave; $C^1$ su ogni semipiano $t>0$ o $t<0$, ma non &egrave; definita su $t=0$. Cauchy-Lipschitz garantisce esistenza e unicit&agrave; locale in un intorno di un dato con $t_0\\neq0$; con dato su $t=0$ il teorema non si applica direttamente e l'esistenza va discussa a parte. Individuare la retta di singolarit&agrave; &egrave; il primo passo."
    }]
  },

  /* ===================== ESERCIZI (16) ===================== */

  { pool:"edo", src:"tipo F &middot; manuale", steps:[
      { t:"Risolvi $y'=xy^2$, $y(0)=1$ (separabile). La soluzione &egrave;:",
        opts:[
          {x:"$y(x)=\\dfrac{1}{1-x^2/2}$",c:true},
          {x:"$y(x)=\\dfrac{1}{1+x^2/2}$"},
          {x:"$y(x)=e^{x^2/2}$"},
          {x:"$y(x)=1+\\dfrac{x^2}{2}$"}],
        hint:"Separando: $\\int y^{-2}\\,dy=\\int x\\,dx$ d&agrave; $-1/y=x^2/2+c$; imponi $y(0)=1$.",
        sol:"<b>Variabili separabili.</b> $\\dfrac{dy}{y^2}=x\\,dx\\Rightarrow -\\dfrac1y=\\dfrac{x^2}{2}+c$. Da $y(0)=1$: $c=-1$, quindi $-\\dfrac1y=\\dfrac{x^2}{2}-1$ e $y=\\dfrac{1}{1-x^2/2}$.",
        cont:"Ora il dominio &rarr;" },
      { t:"Qual &egrave; l'intervallo massimale di $y=\\dfrac{1}{1-x^2/2}$?",
        opts:[
          {x:"$(-\\sqrt2,\\sqrt2)$: la soluzione esplode a $x=\\pm\\sqrt2$",c:true},
          {x:"$\\mathbb{R}$"},
          {x:"$(0,\\sqrt2)$"},
          {x:"$(-1,1)$"}],
        hint:"Il denominatore $1-x^2/2$ si annulla dove?",
        sol:"<b>Intervallo massimale.</b> Il denominatore si annulla in $x=\\pm\\sqrt2$: la soluzione ha asintoti verticali e l'intervallo massimale che contiene $x=0$ &egrave; $(-\\sqrt2,\\sqrt2)$. Blow-up in tempo finito dovuto alla non linearit&agrave; ($y^2$)." }
    ]
  },

  { pool:"edo", src:"tipo F &middot; manuale", steps:[{
      t:"Risolvi $y'+\\dfrac{1}{x}y=x^2$ su $x>0$, $y(1)=0$ (fattore integrante). La soluzione &egrave;:",
      opts:[
        {x:"$y(x)=\\dfrac{x^3}{4}-\\dfrac{1}{4x}$",c:true},
        {x:"$y(x)=\\dfrac{x^3}{4}+\\dfrac{1}{4x}$"},
        {x:"$y(x)=\\dfrac{x^4}{4}-\\dfrac14$"},
        {x:"$y(x)=x^3-1$"}],
      hint:"$\\mu=e^{\\int dx/x}=x$; allora $(xy)'=x^3$. Non dimenticare la costante e imponila con $y(1)=0$.",
      sol:"<b>Lineare del primo ordine.</b> Fattore integrante $\\mu=e^{\\int \\frac1x dx}=x$. Moltiplicando: $(xy)'=x\\cdot x^2=x^3$, quindi $xy=\\dfrac{x^4}{4}+c$ e $y=\\dfrac{x^3}{4}+\\dfrac{c}{x}$. Da $y(1)=0$: $\\dfrac14+c=0\\Rightarrow c=-\\dfrac14$. Risultato $y=\\dfrac{x^3}{4}-\\dfrac{1}{4x}$."
    }]
  },

  { pool:"edo", src:"tipo F &middot; manuale", steps:[{
      t:"Risolvi $y'+y=y^2$ (Bernoulli, $n=2$). La soluzione generale &egrave;:",
      opts:[
        {x:"$y=\\dfrac{1}{1+ce^{x}}$",c:true},
        {x:"$y=\\dfrac{1}{1+ce^{-x}}$"},
        {x:"$y=1+ce^{x}$"},
        {x:"$y=ce^{x}-x$"}],
      hint:"Sostituzione $z=y^{1-n}=y^{-1}$: l'equazione diventa LINEARE in $z$. Attento al segno di $z'$.",
      sol:"<b>Bernoulli.</b> Con $z=y^{-1}$ si ha $z'=-y^{-2}y'$; dividendo l'EDO per $y^2$: $z'-z=-1$. Lineare, $\\mu=e^{-x}$: $(e^{-x}z)'=-e^{-x}$, quindi $z=1+ce^{x}$. Tornando indietro: $y=1/z=\\dfrac{1}{1+ce^{x}}$."
    }]
  },

  { pool:"edo", src:"20230705 Es.5", steps:[
      { t:"$y'=\\dfrac{2}{t}y+4t^2y^3$, $y(1)=1$ (Bernoulli $n=3$). Con $z=y^{-2}$ l'equazione in $z$ &egrave;:",
        opts:[
          {x:"$z'=-\\dfrac{4}{t}z-8t^2$",c:true},
          {x:"$z'=\\dfrac{4}{t}z+8t^2$"},
          {x:"$z'=-\\dfrac{2}{t}z-4t^2$"},
          {x:"$z'=\\dfrac{4}{t}z-8t^2$"}],
        hint:"$z=y^{-2}\\Rightarrow z'=-2y^{-3}y'$. Dividi l'EDO per $y^3$ e moltiplica per $-2$.",
        sol:"<b>Bernoulli, riduzione a lineare.</b> $z=y^{-2}$, $z'=-2y^{-3}y'$. Dividendo $y'=\\frac2t y+4t^2y^3$ per $y^3$: $y^{-3}y'=\\frac2t y^{-2}+4t^2$, cio&egrave; $-\\frac12 z'=\\frac2t z+4t^2$. Moltiplicando per $-2$: $z'=-\\dfrac4t z-8t^2$.",
        cont:"Risolvi e trova il dominio &rarr;" },
      { t:"Risolta la lineare (con $z(1)=1$) si ottiene $y=\\sqrt{\\dfrac{7t^4}{15-8t^7}}$. Il dominio massimale &egrave;:",
        opts:[
          {x:"$\\left(0,\\ \\sqrt[7]{15/8}\\right)$",c:true},
          {x:"$(0,+\\infty)$"},
          {x:"$\\left(-\\sqrt[7]{15/8},\\ \\sqrt[7]{15/8}\\right)$"},
          {x:"$(1,+\\infty)$"}],
        hint:"Servono $t>0$ (dalla lineare, $\\mu=t^4$, e dato in $t=1$) e radicando positivo: $15-8t^7>0$.",
        sol:"<b>Dominio massimale.</b> Il fattore integrante $\\mu=t^4$ e il dato in $t=1$ collocano l'intervallo in $t>0$. Il radicando richiede $15-8t^7>0\\Rightarrow t<\\sqrt[7]{15/8}$, dove il denominatore si annulla (blow-up). Intervallo massimale: $\\left(0,\\sqrt[7]{15/8}\\right)$." }
    ]
  },

  { pool:"edo", src:"tipo F &middot; manuale", steps:[{
      t:"$y'=y(1-y)$, $y(0)=1/2$. Senza risolvere, individua equilibri e comportamento:",
      opts:[
        {x:"equilibri $0$ e $1$; $y$ cresce in $(0,1)$, con $y\\to1$ per $t\\to+\\infty$ e $y\\to0$ per $t\\to-\\infty$",c:true},
        {x:"equilibri $0$ e $1$; $y$ decresce verso $0$"},
        {x:"nessun equilibrio; $y$ esplode in tempo finito"},
        {x:"equilibrio solo in $1$; $y$ costante"}],
      hint:"$f(y)=y(1-y)$: zeri in $0$ e $1$; in $(0,1)$ &egrave; positivo. Stabilit&agrave; dal segno di $f'$.",
      sol:"<b>Modello logistico.</b> Zeri di $f=y(1-y)$: equilibri $0$ e $1$. Il dato $1/2\\in(0,1)$ vi resta per le barriere; l&igrave; $f>0$, quindi $y$ cresce. Monotona e limitata $\\Rightarrow$ converge a un equilibrio: $y\\to1$ (stabile, $f'(1)=-1<0$) per $t\\to+\\infty$ e $y\\to0$ (instabile) per $t\\to-\\infty$. Esplicitamente $y=\\dfrac{1}{1+e^{-x}}$."
    }]
  },

  { pool:"edo", src:"20240704 Es.5", steps:[{
      t:"$y'=\\dfrac{y(y-2)}{1+t}$, $y(0)=1$, $t>-1$. Il comportamento della soluzione &egrave;:",
      opts:[
        {x:"$0<y<2$ per sempre, e $y$ &egrave; strettamente decrescente",c:true},
        {x:"$y$ cresce verso $2$"},
        {x:"$y$ esce da $(0,2)$ quando $1+t$ diventa grande"},
        {x:"$y$ &egrave; costante uguale a $1$"}],
      hint:"Equilibri $y=0$ e $y=2$: il dato $1$ &egrave; in mezzo. In $(0,2)$ studia il segno di $y(y-2)$ e di $1+t$.",
      sol:"<b>Barriere e segno (compito 04/07/2024).</b> Zeri del campo: $y=0$ e $y=2$. Il dato $y(0)=1\\in(0,2)$ vi resta confinato per unicit&agrave;. In $(0,2)$: $y>0$, $(y-2)<0$, $(1+t)>0$, quindi $y'<0$: la soluzione &egrave; decrescente. Limitata in $(0,2)$ e monotona: definita su tutto $[0,+\\infty)$, poich&eacute; non pu&ograve; esplodere restando in $(0,2)$."
    }]
  },

  { pool:"edo", src:"luglioAV Es.2", steps:[
      { t:"$y'=\\ln(1+y^2)(3-y)$, $y(0)=2$. In quale intervallo resta $y$ e con quale monotonia?",
        opts:[
          {x:"$y\\in(0,3)$, strettamente crescente",c:true},
          {x:"$y\\in(0,3)$, decrescente"},
          {x:"$y>3$, crescente"},
          {x:"$y\\in(2,+\\infty)$, illimitata"}],
        hint:"Equilibri: $\\ln(1+y^2)=0\\Rightarrow y=0$ e $3-y=0\\Rightarrow y=3$. Il dato $2$ sta tra i due; controlla il segno del prodotto.",
        sol:"<b>Barriere e monotonia.</b> Equilibri $y=0$ e $y=3$. Il dato $y(0)=2\\in(0,3)$ vi resta. In $(0,3)$: $\\ln(1+y^2)>0$ e $(3-y)>0$, quindi $y'>0$: strettamente crescente, limitata sopra da $3$.",
        cont:"Verso quale limite? &rarr;" },
      { t:"Poich&eacute; $y$ &egrave; crescente e limitata da $3$, per $t\\to+\\infty$:",
        opts:[
          {x:"$y\\to3$: il limite esiste (monotonia+limitatezza) e deve essere un equilibrio (asintoto)",c:true},
          {x:"$y\\to+\\infty$"},
          {x:"$y$ pu&ograve; oscillare senza limite"},
          {x:"$y\\to2$, resta al dato iniziale"}],
        hint:"Prima l'ESISTENZA del limite (monotona e limitata), poi il VALORE con il teorema dell'asintoto.",
        sol:"<b>Comportamento asintotico.</b> Crescente e limitata da $3$: il limite $L\\le3$ esiste (teorema di monotonia). Per l'asintoto $y'\\to0$, quindi $\\ln(1+L^2)(3-L)=0$; poich&eacute; $\\ln(1+L^2)>0$ per $L>0$, deve essere $L=3$. Ordine corretto: monotonia+limitatezza per l'esistenza, asintoto per il valore." }
    ]
  },

  { pool:"edo", src:"20250127 Es.3", steps:[{
      t:"$y'=\\dfrac{t(y-1)}{1+3y^2}$, $y(0)=1/2$. La soluzione &egrave; definita su tutto $\\mathbb{R}$ perch&eacute;:",
      opts:[
        {x:"&egrave; sublineare: $|f|\\le|t||y|+|t|$, quindi vale il teorema di esistenza globale",c:true},
        {x:"&egrave; limitata a priori tra $0$ e $1$"},
        {x:"il campo &egrave; costante"},
        {x:"$y=1$ &egrave; l'unica soluzione"}],
      hint:"Stima $\\left|\\dfrac{t(y-1)}{1+3y^2}\\right|$: il denominatore &egrave; $\\ge1$, e $|y-1|\\le|y|+1$.",
      sol:"<b>Esistenza globale per sublinearit&agrave; (compito 27/01/2025).</b> Poich&eacute; $1+3y^2\\ge1$, $|f(t,y)|\\le|t|\\,|y-1|\\le|t|\\,|y|+|t|$: sublineare con $L_1(t)=L_2(t)=|t|$ continue. Il teorema di esistenza globale d&agrave; soluzione su tutto $\\mathbb{R}$. L'equilibrio $y=1$ con $y(0)=1/2<1$ dice inoltre $y<1$ sempre, ma la globalit&agrave; qui viene dalla sublinearit&agrave;."
    }]
  },

  { pool:"edo", src:"20240122 Es.5", steps:[{
      t:"$y'=\\dfrac{y^2}{1+y^2}e^{t}$, $y(0)=2$. Perch&eacute; la soluzione &egrave; globale (definita su tutto $\\mathbb{R}$)?",
      opts:[
        {x:"il campo &egrave; sublineare: $|f(t,u)|=\\dfrac{u^2}{1+u^2}e^t\\le e^t$, funzione continua di $t$",c:true},
        {x:"$y$ &egrave; limitata perch&eacute; $y^2/(1+y^2)<1$"},
        {x:"$y$ tende a un equilibrio finito"},
        {x:"il campo &egrave; costante in $t$"}],
      hint:"$\\dfrac{u^2}{1+u^2}<1$ per ogni $u$: il campo &egrave; maggiorato da $e^t$, indipendente da $u$. Non confondere questo con la limitatezza di $y$.",
      sol:"<b>Sublinearit&agrave; con maggiorante in $t$ (compito 22/01/2024).</b> $\\dfrac{u^2}{1+u^2}<1$, quindi $|f(t,u)|\\le e^t=L_2(t)$ continua (caso $L_1=0$): sublineare, dunque globale. Attenzione: la soluzione stessa NON &egrave; limitata (cresce), quindi una stima a priori $|y|\\le M$ sarebbe falsa; a controllare l'esplosione &egrave; il tasso di crescita del campo, non il valore di $y$."
    }]
  },

  { pool:"edo", src:"20220124 Es.5", steps:[{
      t:"$y'=4t^3(1-e^{y})$, $y(0)=\\log2$. Dove ha un estremo la soluzione e di che tipo?",
      opts:[
        {x:"massimo in $t=0$",c:true},
        {x:"minimo in $t=0$"},
        {x:"nessun estremo: &egrave; monotona"},
        {x:"massimo in $t=1$"}],
      hint:"$y(0)=\\log2>0$ e barriera $y=0$ danno $y>0$, quindi $1-e^y<0$ costante. Il segno di $y'$ segue $4t^3$.",
      sol:"<b>Estremo dal segno del campo.</b> $y(t)>0$ (dato positivo, barriera $y\\equiv0$), quindi $1-e^{y}<0$. Allora $y'=4t^3\\cdot(\\text{neg})$: $y'>0$ per $t<0$, $y'<0$ per $t>0$, $y'(0)=0$. La soluzione cresce fino a $t=0$ e poi decresce: massimo in $t=0$. Nessun calcolo esplicito richiesto."
    }]
  },

  { pool:"edo", src:"20230210 Es.5", steps:[
      { t:"$y'=\\dfrac{y(\\log y-n)}{t^2+1}$, $y(0)=1$ (con $n\\ge1$). Monotonia della soluzione:",
        opts:[
          {x:"decrescente: resta in $(0,e^n)$ dove $\\log y-n<0$",c:true},
          {x:"crescente verso $e^n$"},
          {x:"costante uguale a $1$"},
          {x:"cambia monotonia in $t=0$"}],
        hint:"Equilibri: $y=0$ e $\\log y=n\\Rightarrow y=e^n$. Il dato $1$ &egrave; tra $0$ e $e^n$; l&igrave; $\\log y-n<0$ e $t^2+1>0$.",
        sol:"<b>Segno del campo (compito 10/02/2023).</b> Equilibri $y=0$ e $y=e^n$. Il dato $y(0)=1\\in(0,e^n)$ vi resta. In $(0,e^n)$: $y>0$, $\\log y-n<0$, $t^2+1>0$, quindi $y'<0$: decrescente.",
        cont:"La retta tangente in $t=0$ &rarr;" },
      { t:"La retta tangente al grafico in $t=0$ &egrave;:",
        opts:[
          {x:"$y=1-nt$",c:true},
          {x:"$y=1+nt$"},
          {x:"$y=1$"},
          {x:"$y=e^n t$"}],
        hint:"$y'(0)=\\dfrac{y(0)(\\log y(0)-n)}{0+1}$ con $y(0)=1$, $\\log1=0$.",
        sol:"<b>Retta tangente.</b> $y'(0)=\\dfrac{1\\cdot(\\log1-n)}{1}=-n$. La tangente in $(0,1)$ &egrave; $y=1+y'(0)\\,t=1-nt$. Coerente con la decrescenza." }
    ]
  },

  { pool:"edo", src:"tipo F &middot; manuale", steps:[{
      t:"$y'=1+y^2$, $y(0)=0$. La soluzione e il suo intervallo massimale sono:",
      opts:[
        {x:"$y=\\tan t$, intervallo $(-\\pi/2,\\pi/2)$",c:true},
        {x:"$y=\\tan t$, intervallo $\\mathbb{R}$"},
        {x:"$y=\\arctan t$, intervallo $\\mathbb{R}$"},
        {x:"$y=e^{t}-1$, intervallo $\\mathbb{R}$"}],
      hint:"Separabile: $\\int\\dfrac{dy}{1+y^2}=\\int dt$ d&agrave; $\\arctan y=t$. Dove esplode $\\tan t$?",
      sol:"<b>Blow-up in tempo finito.</b> Separando, $\\arctan y=t+c$ con $y(0)=0\\Rightarrow c=0$, quindi $y=\\tan t$. La soluzione esplode agli asintoti $\\pm\\pi/2$: intervallo massimale $(-\\pi/2,\\pi/2)$. Il campo $1+y^2$ &egrave; superlineare: la sublinearit&agrave; fallisce e la soluzione non &egrave; globale, pur essendo il campo liscio ovunque."
    }]
  },

  { pool:"edo", src:"tipo F &middot; manuale", steps:[{
      t:"$y'=y^2-1$. Classifica gli equilibri:",
      opts:[
        {x:"$y=-1$ stabile ($f'=-2<0$), $y=1$ instabile ($f'=2>0$)",c:true},
        {x:"$y=-1$ instabile, $y=1$ stabile"},
        {x:"entrambi stabili"},
        {x:"entrambi instabili"}],
      hint:"Equilibri: $y^2-1=0\\Rightarrow y=\\pm1$. Stabilit&agrave;: segno di $f'(y)=2y$ nell'equilibrio.",
      sol:"<b>Stabilit&agrave; per linearizzazione.</b> $f(y)=y^2-1$, equilibri $\\pm1$. $f'(y)=2y$: $f'(-1)=-2<0\\Rightarrow y=-1$ asintoticamente stabile (pozzo); $f'(1)=2>0\\Rightarrow y=1$ instabile (sorgente). Coerente col segno di $f$: per $-1<y<1$ &egrave; $f<0$ (si scende verso $-1$), fuori &egrave; $f>0$ (ci si allontana da $1$)."
    }]
  },

  { pool:"edo", src:"20220706 Es.5", steps:[{
      t:"$y'=t^2y^2-y$, $y(0)=1$ (Bernoulli $n=2$). Con $z=y^{-1}$ l'equazione lineare &egrave;:",
      opts:[
        {x:"$z'=z-t^2$",c:true},
        {x:"$z'=-z+t^2$"},
        {x:"$z'=t^2 z-1$"},
        {x:"$z'+z=t^2$"}],
      hint:"$z=y^{-1}\\Rightarrow z'=-y^{-2}y'$. Dividi l'EDO per $y^2$: $y^{-2}y'=t^2-y^{-1}$.",
      sol:"<b>Bernoulli (compito 06/07/2022).</b> $z=y^{-1}$, $z'=-y^{-2}y'$. Dividendo $y'=t^2y^2-y$ per $y^2$: $y^{-2}y'=t^2-y^{-1}=t^2-z$, cio&egrave; $-z'=t^2-z\\Rightarrow z'=z-t^2$. Risolvendo con $z(0)=1$ si trova $z=t^2+2t+2-e^{t}$ e $y=1/z$; l'insieme di definizione non &egrave; tutto $\\mathbb{R}$ (dove $z=0$, $y$ esplode)."
    }]
  },

  { pool:"edo", src:"tipo F &middot; manuale", steps:[{
      t:"Per $y'=\\sqrt{|y|}$, $y(0)=0$, la soluzione &egrave; unica?",
      opts:[
        {x:"No: oltre a $y\\equiv0$ c'&egrave; $y=\\dfrac{x^2}{4}$ (e infinite altre); $\\sqrt{|y|}$ non &egrave; lipschitziana in $0$",c:true},
        {x:"S&igrave;, per Cauchy-Lipschitz"},
        {x:"No, perch&eacute; il campo non &egrave; continuo in $0$"},
        {x:"S&igrave;, ma solo per $x>0$"}],
      hint:"$\\sqrt{|y|}$ &egrave; continua (esiste soluzione) ma la derivata esplode a $y=0$: manca l'ipotesi di unicit&agrave;.",
      sol:"<b>Non unicit&agrave; (dove cade Cauchy-Lipschitz).</b> $f(y)=\\sqrt{|y|}$ &egrave; continua, quindi Peano d&agrave; esistenza. Ma $f$ non &egrave; lipschitziana in $y=0$: l'unicit&agrave; salta. Verifica diretta: $y\\equiv0$ risolve; anche $y=\\tfrac{x^2}{4}$ ($x\\ge0$) risolve, poich&eacute; $y'=\\tfrac x2=\\sqrt{x^2/4}=\\sqrt{y}$. Ritardando la partenza si ottengono infinite soluzioni."
    }]
  },

  { pool:"edo", src:"tipo F &middot; manuale", steps:[{
      t:"$y'=y^2$, $y(0)=1$. Soluzione e intervallo massimale:",
      opts:[
        {x:"$y=\\dfrac{1}{1-x}$, intervallo $(-\\infty,1)$",c:true},
        {x:"$y=\\dfrac{1}{1-x}$, intervallo $\\mathbb{R}$"},
        {x:"$y=e^{x}$, intervallo $\\mathbb{R}$"},
        {x:"$y=1+x^2$, intervallo $\\mathbb{R}$"}],
      hint:"Separabile: $-1/y=x+c$. Dove esplode la soluzione? Il dato &egrave; in $x=0$.",
      sol:"<b>Intervallo massimale e blow-up.</b> Separando: $\\int y^{-2}\\,dy=\\int dx\\Rightarrow -\\dfrac1y=x+c$; $y(0)=1\\Rightarrow c=-1$, quindi $y=\\dfrac{1}{1-x}$. Esplode a $x=1$; l'intervallo massimale che contiene $0$ &egrave; $(-\\infty,1)$. Campo superlineare $y^2$: nessuna globalit&agrave; a destra."
    }]
  }

];

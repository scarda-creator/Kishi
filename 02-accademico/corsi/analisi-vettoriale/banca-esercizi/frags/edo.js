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
  },

  /* ===== lotto innestato il 2026-08-16 — 17 unita' =====
Lotto 2 per il pool EDO di Analisi Vettoriale (18 unita').
   Provenienza: appelli Sapienza secondo esonero (20230210 Es.5, 20230621 Es.5,
   20220706 Es.5) + varianti generate ex novo su idee dalle fonti della ricognizione
   Argonauta (MIT 18.03SC ritratti di fase; Oxford Schekochihin ODE; Paul's Online DE).
   Nessun testo altrui riprodotto: gli esercizi sono nuovi, l'idea e' citata in `src`.

   Le 32 unita' gia' presenti coprono quasi solo risoluzione esplicita ed esistenza-
   unicita'; questo lotto porta i TIPI DI RICHIESTA che gli appelli chiedono e che il
   pool non aveva: retta tangente ricavata dall'equazione, concavita' via y'', forma
   implicita, ritratti di fase 2D (traccia-determinante, linearizzazione, Hartman-
   Grobman), convergenza uniforme della successione di soluzioni, e studi qualitativi
   completi multi-step (>=5). Ogni multi-step fa il conto intero.

   Coefficienti ricalcolati e verificati con le stampe ufficiali:
   - 20230210 Es.5: retta tangente y=1-nt (con n=2 -> y=1-2t), soluzione
     y_n=e^{n(1-e^{arctan t})}, sup su [1,+inf) = y_n(1)=e^{n(1-e^{pi/4})}. Concorda.
   - 20230621 Es.5: u''=-u(1+u^2)/(u^2-1)^3 ricalcolato passo-passo, concorda con la
     stampa; forma implicita u^2/2 - log|u| = t + c^2/2 - log|c|, concorda.
   - 20220706 Es.5 e 20250127: usati come sfondo, non come istanze dirette.
   Variante t^2 y^2 (unita' 17): -1/y = t^3/3 + C, y=3/(3-t^3), blow-up in t=cbrt(3);
   derivato qui, non su stampa. Nessuna discrepanza trovata.
  ===== */

  { pool:"edo", src:"20230210 Es.5", steps:[
      { t:"Per il problema di Cauchy $y'=\\dfrac{y(\\log y-2)}{t^2+1}$, $y(0)=1$, la retta tangente al grafico della soluzione in $t=0$ si trova senza risolvere l'equazione. Primo passo: quanto vale $y'(0)$?",
        opts:[{x:"$-2$",c:true},{x:"$0$"},{x:"$-1$"},{x:"$2$"}],
        hint:"$\\log(y(0))=\\log 1=0$: sostituisci il dato iniziale direttamente nel secondo membro, non serve la soluzione.",
        sol:"Per definizione di soluzione, l'EDO in forma normale d&agrave; $y'(0)=f(0,y(0))=\\dfrac{1\\cdot(\\log 1-2)}{0+1}=-2$.",
        cont:"Passo 2" },
      { t:"La retta tangente in $t=0$ &egrave; allora:",
        opts:[{x:"$y=1-2t$",c:true},{x:"$y=-2t$"},{x:"$y=1+2t$"},{x:"$y=2-t$"}],
        hint:"Retta tangente $y=y(0)+y'(0)\\,t$: il termine noto &egrave; il valore iniziale $y(0)=1$, non zero.",
        sol:"Sviluppo di Taylor al prim'ordine (retta tangente): $y=y(0)+y'(0)\\,t=1+(-2)t=1-2t$." }
  ]},
  { pool:"edo", src:"20230621 Es.5", steps:[
      { t:"Per $u'=\\dfrac{u}{u^2-1}$, $u(0)=2$, per studiare la concavit&agrave; della soluzione si ricava $u''$ derivando l'equazione. Si ottiene:",
        opts:[{x:"$u''=-\\dfrac{u(1+u^2)}{(u^2-1)^3}$",c:true},{x:"$u''=\\dfrac{u}{(u^2-1)^2}$"},{x:"$u''=-\\dfrac{2u\\,u'}{u^2-1}$"},{x:"$u''=\\dfrac{1+u^2}{(u^2-1)^2}$"}],
        hint:"Deriva $u'=u/(u^2-1)$ con la regola del quoziente, poi sostituisci di nuovo $u'=u/(u^2-1)$ per eliminare $u'$.",
        sol:"Differenziazione implicita dell'EDO: $u''=\\dfrac{u'(u^2-1)-u\\cdot 2u\\,u'}{(u^2-1)^2}=\\dfrac{-u'(1+u^2)}{(u^2-1)^2}$; sostituendo $u'=\\dfrac{u}{u^2-1}$ si ha $u''=-\\dfrac{u(1+u^2)}{(u^2-1)^3}$.",
        cont:"Passo 2" },
      { t:"Con $u(0)=2$ (e $u>1$ in un intorno, poich&eacute; per $c>1$ la soluzione &egrave; crescente e non pu&ograve; toccare $u=1$), in $t=0$ la soluzione &egrave;:",
        opts:[{x:"concava",c:true},{x:"convessa"},{x:"in un flesso"},{x:"costante"}],
        hint:"Valuta il segno di $u''=-\\dfrac{u(1+u^2)}{(u^2-1)^3}$ con $u>1$: numeratore e denominatore sono entrambi positivi.",
        sol:"Per $u>1$: $u>0$, $1+u^2>0$, $(u^2-1)^3>0$, quindi $u''<0$: soluzione concava (criterio di concavit&agrave; via segno di $u''$). Che $u$ non attraversi $u=1$ segue dall'unicit&agrave; di Cauchy-Lipschitz." }
  ]},
  { pool:"edo", src:"modus operandi &middot; manuale", steps:[
      { t:"Devi stabilire se la soluzione di $y'=f(t,y)$ (con $f\\in C^1$) &egrave; crescente o decrescente SENZA risolverla. Qual &egrave; la strategia corretta?",
        opts:[{x:"Studiare il segno di $f(t,y)$ lungo la soluzione, sfruttando che per unicit&agrave; essa non attraversa le soluzioni costanti (equilibri): cos&igrave; il segno di $y'$ si conserva",c:true},{x:"Calcolare $y''$ e studiarne il segno"},{x:"Integrare numericamente e guardare il grafico"},{x:"Non &egrave; possibile senza la formula esplicita di $y$"}],
        hint:"La monotonia &egrave; il segno di $y'=f(t,y)$; il punto delicato &egrave; garantire che questo segno non cambi, e a questo serve l'unicit&agrave;.",
        sol:"Il segno di $y'$ &egrave; il segno di $f(t,y)$. Perch&eacute; non cambi lungo la soluzione, gli equilibri $\\{f=0\\}$ fanno da barriere invalicabili (Teorema di unicit&agrave; di Cauchy-Lipschitz): la soluzione resta intrappolata in una regione a segno costante di $f$ e $y'$ mantiene il segno. &Egrave; il metodo qualitativo standard." }
  ]},
  { pool:"edo", src:"modus operandi &middot; manuale", steps:[
      { t:"Vuoi dimostrare che la soluzione massimale di $y'=f(t,y)$ &egrave; definita su tutto $\\mathbb{R}$ (globale). Qual &egrave; la mossa risolutiva?",
        opts:[{x:"Trovare una stima a priori che impedisca l'esplosione in tempo finito (limitatezza, sub/super-soluzioni, o crescita sublineare): per il teorema di fuga dai compatti, senza blow-up l'intervallo massimale &egrave; tutto $\\mathbb{R}$",c:true},{x:"Verificare che $f$ sia continua: la continuit&agrave; basta per la globalit&agrave;"},{x:"Verificare che $f$ sia limitata in $y$ a $t$ fissato"},{x:"Calcolare esplicitamente la soluzione: &egrave; l'unico modo"}],
        hint:"Una soluzione massimale su $(a,b)$ con $b<+\\infty$ deve lasciare ogni compatto (cio&egrave; $|y|\\to\\infty$): per escludere $b$ finito basta impedire l'esplosione.",
        sol:"Criterio di prolungabilit&agrave; (fuga dai compatti): se $b<+\\infty$ la soluzione esce da ogni compatto. Una stima a priori ($|y(t)|$ limitato, intrappolamento fra equilibri, oppure $|f|\\le a(t)|y|+b(t)$ con Gronwall) esclude il blow-up e forza $b=+\\infty$. La sola continuit&agrave; di $f$ NON basta: controesempio $y'=1+y^2$." }
  ]},
  { pool:"edo", src:"tipo F &middot; da MIT 18.03 &middot; manuale", steps:[
      { t:"Per l'EDO $y'=f(t,y)$, l'isoclina di livello $k$ &egrave; la curva $f(t,y)=k$. Su tale curva gli elementi del campo di direzioni:",
        opts:[{x:"hanno tutti pendenza $k$",c:true},{x:"sono tutti orizzontali"},{x:"sono tutti tangenti alla curva $f(t,y)=k$"},{x:"hanno pendenza $1/k$"}],
        hint:"Su $f(t,y)=k$ per definizione $y'=k$: la pendenza dell'elemento di linea &egrave; proprio $k$.",
        sol:"Definizione di isoclina / campo di direzioni: nei punti dove $f(t,y)=k$ ogni soluzione che vi transita ha $y'=k$, quindi tutti gli elementi di linea sull'isoclina hanno la stessa pendenza $k$. L'isoclina $k=0$ individua i punti a tangente orizzontale." }
  ]},
  { pool:"edo", src:"tipo &middot; da MIT 18.03 &middot; manuale", steps:[
      { t:"Il sistema lineare $\\mathbf{x}'=A\\mathbf{x}$ con $A=\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}$ ha nell'origine un punto fisso di tipo:",
        opts:[{x:"sella",c:true},{x:"nodo stabile"},{x:"fuoco (spirale)"},{x:"centro"}],
        hint:"Calcola traccia e determinante: $\\det A<0$ segnala autovalori reali discordi, cio&egrave; una sella.",
        sol:"Classificazione via traccia-determinante (autovalori di $A$): $\\mathrm{tr}\\,A=2$, $\\det A=1-4=-3<0$. Il polinomio caratteristico $\\lambda^2-2\\lambda-3=0$ d&agrave; $\\lambda=3,-1$, reali discordi $\\Rightarrow$ sella. Con $\\det A<0$ &egrave; sempre una sella." }
  ]},
  { pool:"edo", src:"tipo &middot; da MIT/Oxford ODE &middot; manuale", steps:[
      { t:"Il pendolo smorzato $\\theta''+\\theta'+\\sin\\theta=0$ si scrive come sistema $x'=y$, $y'=-\\sin x-y$ (con $x=\\theta$). La matrice jacobiana nel punto fisso $(0,0)$ &egrave;:",
        opts:[{x:"$\\begin{pmatrix}0&1\\\\-1&-1\\end{pmatrix}$",c:true},{x:"$\\begin{pmatrix}0&1\\\\-1&0\\end{pmatrix}$"},{x:"$\\begin{pmatrix}0&1\\\\1&-1\\end{pmatrix}$"},{x:"$\\begin{pmatrix}1&0\\\\-1&-1\\end{pmatrix}$"}],
        hint:"Jacobiana di $(y,\\,-\\sin x-y)$: la derivata di $-\\sin x$ rispetto a $x$ &egrave; $-\\cos x$, che in $x=0$ vale $-1$.",
        sol:"$J=\\begin{pmatrix}\\partial_x(y)&\\partial_y(y)\\\\\\partial_x(-\\sin x-y)&\\partial_y(-\\sin x-y)\\end{pmatrix}=\\begin{pmatrix}0&1\\\\-\\cos x&-1\\end{pmatrix}$; in $(0,0)$ vale $\\begin{pmatrix}0&1\\\\-1&-1\\end{pmatrix}$.",
        cont:"Passo 2" },
      { t:"L'origine, per il sistema linearizzato, &egrave; allora un:",
        opts:[{x:"fuoco stabile (spirale entrante)",c:true},{x:"nodo stabile"},{x:"sella"},{x:"centro"}],
        hint:"$\\mathrm{tr}=-1<0$, $\\det=1>0$, e $\\mathrm{tr}^2-4\\det=1-4<0$: autovalori complessi a parte reale negativa.",
        sol:"$\\mathrm{tr}\\,J=-1$, $\\det J=1$, $\\mathrm{tr}^2-4\\det=-3<0$ $\\Rightarrow$ $\\lambda=\\dfrac{-1\\pm i\\sqrt3}{2}$ complessi con $\\mathrm{Re}\\,\\lambda<0$: fuoco stabile. Essendo il punto fisso iperbolico, per Hartman-Grobman la classificazione vale anche per il sistema nonlineare." }
  ]},
  { pool:"edo", src:"modus operandi &middot; manuale", steps:[
      { t:"Siano $y$ soluzione di $y'=f(t,y)$, $y(t_0)=y_0$, e $z\\in C^1$ con $z'\\ge f(t,z)$ e $z(t_0)\\ge y_0$ (una super-soluzione). Allora per $t\\ge t_0$:",
        opts:[{x:"$z(t)\\ge y(t)$",c:true},{x:"$z(t)\\le y(t)$"},{x:"$z(t)=y(t)$"},{x:"nulla si pu&ograve; dire senza risolvere"}],
        hint:"La super-soluzione parte pi&ugrave; in alto e cresce almeno quanto il campo impone: resta sopra.",
        sol:"Teorema del confronto per EDO (disuguaglianze differenziali): se $z$ &egrave; super-soluzione ($z'\\ge f(t,z)$) e $z(t_0)\\ge y_0$, allora $z\\ge y$ per $t\\ge t_0$; simmetricamente una sub-soluzione sta sotto. &Egrave; lo strumento base per le stime a priori e la prolungabilit&agrave;." }
  ]},
  { pool:"edo", src:"tipo F &middot; manuale", steps:[
      { t:"Per $y'=t+y^2$, $y(0)=0$, la retta tangente alla soluzione in $t=0$ &egrave;:",
        opts:[{x:"$y=0$ (orizzontale)",c:true},{x:"$y=t$"},{x:"$y=t^2$"},{x:"$y=-t$"}],
        hint:"$y'(0)=0+y(0)^2=0$: pendenza nulla, tangente orizzontale.",
        sol:"$y'(0)=f(0,0)=0+0^2=0$, quindi tangente $y=y(0)+y'(0)t=0$. Il punto $t=0$ &egrave; stazionario per la soluzione.",
        cont:"Passo 2" },
      { t:"Il punto $t=0$ &egrave;, per la soluzione, un punto di:",
        opts:[{x:"minimo (poich&eacute; $y''(0)>0$)",c:true},{x:"massimo"},{x:"flesso"},{x:"non determinabile"}],
        hint:"Deriva l'equazione: $y''=1+2yy'$; valuta in $t=0$ con $y(0)=0$, $y'(0)=0$.",
        sol:"$y''=\\dfrac{d}{dt}(t+y^2)=1+2yy'$; in $t=0$: $y''(0)=1+0=1>0$. Con $y'(0)=0$ e $y''(0)>0$, il test della derivata seconda d&agrave; un minimo locale della soluzione in $t=0$." }
  ]},
  { pool:"edo", src:"20230621 Es.5", steps:[
      { t:"Risolvi $u'=\\dfrac{u}{u^2-1}$, $u(0)=c$ (con $c\\ne 0,\\pm1$) per separazione di variabili. Separando, l'integrale da calcolare &egrave;:",
        opts:[{x:"$\\int\\Big(u-\\dfrac{1}{u}\\Big)du=\\int dt$",c:true},{x:"$\\int\\dfrac{u}{u^2-1}\\,du=\\int dt$"},{x:"$\\int\\dfrac{u^2-1}{u}\\,dt=\\int du$"},{x:"$\\int\\dfrac{du}{u}=\\int(u^2-1)\\,dt$"}],
        hint:"Porta $\\dfrac{u^2-1}{u}$ dal lato di $du$: $\\dfrac{u^2-1}{u}=u-\\dfrac{1}{u}$.",
        sol:"Separazione delle variabili: $\\dfrac{u^2-1}{u}\\,du=dt$, e poich&eacute; $\\dfrac{u^2-1}{u}=u-\\dfrac1u$, si ha $\\int\\big(u-\\tfrac1u\\big)du=\\int dt$.",
        cont:"Passo 2" },
      { t:"Integrando e imponendo $u(0)=c$, la soluzione in forma implicita &egrave;:",
        opts:[{x:"$\\dfrac{u^2}{2}-\\log|u|=t+\\dfrac{c^2}{2}-\\log|c|$",c:true},{x:"$\\dfrac{u^2}{2}-\\log|u|=t$"},{x:"$\\log|u|-\\dfrac{u^2}{2}=t+\\log|c|-\\dfrac{c^2}{2}$"},{x:"$u^2-\\log|u|=t+c^2$"}],
        hint:"$\\int(u-1/u)\\,du=\\dfrac{u^2}{2}-\\log|u|$; la costante si fissa ponendo $t=0$, $u=c$.",
        sol:"Integrando: $\\dfrac{u^2}{2}-\\log|u|=t+k$; da $u(0)=c$ segue $k=\\dfrac{c^2}{2}-\\log|c|$. Soluzione implicita $\\dfrac{u^2}{2}-\\log|u|=t+\\dfrac{c^2}{2}-\\log|c|$ (non invertibile elementarmente: la forma implicita &egrave; la risposta attesa, come nella stampa d'esame)." }
  ]},
  { pool:"edo", src:"20230210 Es.5", steps:[
      { t:"La soluzione del problema $y'=\\dfrac{y(\\log y-n)}{t^2+1}$, $y(0)=1$ &egrave; $y_n(t)=e^{\\,n(1-e^{\\arctan t})}$. Su $[1,+\\infty)$ la successione $\\{y_n\\}$ converge puntualmente a:",
        opts:[{x:"$0$",c:true},{x:"$1$"},{x:"$e$"},{x:"non converge"}],
        hint:"Per $t\\ge1$ si ha $\\arctan t>0$, quindi $1-e^{\\arctan t}<0$: l'esponente $n(1-e^{\\arctan t})\\to-\\infty$.",
        sol:"Per $t\\ge1$, $e^{\\arctan t}>1$ dunque $1-e^{\\arctan t}<0$; allora $n(1-e^{\\arctan t})\\to-\\infty$ e $y_n(t)\\to 0$ puntualmente.",
        cont:"Passo 2" },
      { t:"La convergenza a $0$ su $[1,+\\infty)$ &egrave; anche uniforme? Il sup di $y_n$ su $[1,+\\infty)$:",
        opts:[{x:"vale $y_n(1)=e^{\\,n(1-e^{\\pi/4})}\\to 0$, quindi la convergenza &egrave; uniforme",c:true},{x:"vale $1$, quindi la convergenza NON &egrave; uniforme"},{x:"vale $+\\infty$, quindi non &egrave; uniforme"},{x:"non &egrave; calcolabile"}],
        hint:"$y_n(t)$ &egrave; decrescente in $t$ su $[1,+\\infty)$ (l'esponente decresce), quindi il suo massimo &egrave; in $t=1$.",
        sol:"Criterio del sup per la convergenza uniforme: $\\sup_{t\\ge1}|y_n(t)-0|=\\sup_{t\\ge1}y_n(t)$. Poich&eacute; $y_n$ decresce in $t$, il sup &egrave; in $t=1$: $y_n(1)=e^{\\,n(1-e^{\\pi/4})}$. Essendo $1-e^{\\pi/4}<0$, $y_n(1)\\to0$, quindi $\\sup\\to0$: convergenza uniforme." }
  ]},
  { pool:"edo", src:"tipo &middot; da MIT 18.03 &middot; manuale", steps:[
      { t:"Un sistema lineare $\\mathbf{x}'=A\\mathbf{x}$ ha nell'origine una sella (autovalori reali $\\lambda_1<0<\\lambda_2$). Il ritratto di fase presenta:",
        opts:[{x:"due semirette invarianti (autodirezioni): quella di $\\lambda_1<0$ entrante (variet&agrave; stabile), quella di $\\lambda_2>0$ uscente (instabile); le altre traiettorie sono rami iperbolici",c:true},{x:"traiettorie chiuse attorno all'origine"},{x:"tutte le traiettorie entrano nell'origine"},{x:"spirali entranti"}],
        hint:"Gli autovettori danno direzioni invarianti; il segno dell'autovalore dice se lungo quella direzione si entra ($\\lambda<0$) o si esce ($\\lambda>0$).",
        sol:"Per una sella gli autovettori di $A$ individuano due rette invarianti: lungo l'autovettore di $\\lambda_1<0$ le soluzioni $\\sim e^{\\lambda_1 t}$ entrano (variet&agrave; stabile), lungo quello di $\\lambda_2>0$ escono (variet&agrave; instabile). Le traiettorie generiche seguono rami iperbolici asintotici alle due direzioni: &egrave; la struttura dettata dagli autovalori." }
  ]},
  { pool:"edo", src:"tipo F &middot; da Paul's Online &middot; manuale", steps:[
      { t:"Per $y'=y\\cos(t^2)+t$, $y(0)=y_0$, quale osservazione garantisce che la soluzione massimale &egrave; definita su tutto $\\mathbb{R}$?",
        opts:[{x:"$|f(t,y)|=|y\\cos(t^2)+t|\\le|y|+|t|$: crescita al pi&ugrave; lineare in $y$, quindi per Gronwall nessun blow-up",c:true},{x:"$f$ &egrave; continua, e la continuit&agrave; basta"},{x:"$f$ &egrave; limitata"},{x:"l'equazione &egrave; separabile"}],
        hint:"Cerca una stima del tipo $|f(t,y)|\\le a(t)|y|+b(t)$ con $a,b$ continue: &egrave; l'ipotesi del criterio di crescita sublineare.",
        sol:"$|y\\cos(t^2)+t|\\le|y|+|t|$, cio&egrave; $|f|\\le a(t)|y|+b(t)$ con $a\\equiv1$, $b(t)=|t|$ continue. Per il Lemma di Gronwall la soluzione resta limitata su ogni intervallo limitato: niente esplosione, quindi per fuga dai compatti l'intervallo massimale &egrave; $\\mathbb{R}$.",
        cont:"Passo 2" },
      { t:"La stessa conclusione (globalit&agrave;) si applicherebbe a $y'=y^2+t$?",
        opts:[{x:"No: $y^2$ cresce pi&ugrave; che linearmente in $y$, la stima sublineare fallisce e c'&egrave; blow-up in tempo finito",c:true},{x:"S&igrave;, per lo stesso motivo"},{x:"S&igrave;, perch&eacute; $f$ &egrave; comunque continua"},{x:"Solo se $y_0=0$"}],
        hint:"Il criterio richiede crescita al pi&ugrave; lineare in $y$; $y^2$ non la soddisfa (confronta con $y'=y^2$, che esplode).",
        sol:"Il criterio di crescita sublineare richiede $|f|\\le a(t)|y|+b(t)$. Con $y^2$ la crescita &egrave; quadratica: il criterio non si applica e, per confronto con $y'=y^2$ (blow-up in tempo finito), la soluzione pu&ograve; avere intervallo massimale limitato." }
  ]},
  { pool:"edo", src:"modus operandi &middot; manuale", steps:[
      { t:"Sospetti che la soluzione di $y'=f(t,y)$ esploda in tempo finito. Qual &egrave; la strategia per dimostrarlo?",
        opts:[{x:"Minorare il campo con un'autonoma esplosiva: se $y'\\ge g(y)$ con $\\int^{+\\infty}\\frac{dy}{g(y)}<+\\infty$ (es. $g(y)=y^2$), per confronto la soluzione raggiunge $+\\infty$ in tempo finito",c:true},{x:"Verificare che $f$ non sia lipschitziana"},{x:"Mostrare che $f$ &egrave; illimitata: basta questo"},{x:"Calcolare la soluzione esplicita: &egrave; l'unico modo"}],
        hint:"Il blow-up si prova per confronto dal basso con un'equazione autonoma il cui tempo di esplosione &egrave; finito, cio&egrave; con $\\int^{\\infty}dy/g(y)$ convergente.",
        sol:"Teorema del confronto + criterio di esplosione: se $y'\\ge g(y)>0$ con $\\int_{y_0}^{+\\infty}\\frac{dy}{g(y)}<+\\infty$, il tempo per arrivare a $+\\infty$ &egrave; finito (per l'autonoma $t=\\int dy/g(y)$). Per confronto la soluzione vera esplode entro quel tempo. Prototipo: $y'=y^2$, con $\\int^\\infty dy/y^2<\\infty$." }
  ]},
  { pool:"edo", src:"tipo &middot; da MIT/Oxford ODE &middot; manuale", steps:[
      { t:"Il modello preda-predatore $x'=x(a-by)$, $y'=y(-c+dx)$ (parametri $>0$) ha un punto fisso interno in $(x^*,y^*)=\\big(\\tfrac{c}{d},\\tfrac{a}{b}\\big)$. La jacobiana in tale punto ha:",
        opts:[{x:"traccia nulla e determinante $=ac>0$",c:true},{x:"traccia $<0$ e determinante $>0$"},{x:"determinante $<0$"},{x:"traccia $>0$"}],
        hint:"Nel punto fisso i termini diagonali della jacobiana si annullano ($a-by^*=0$, $-c+dx^*=0$): resta una matrice antidiagonale.",
        sol:"Jacobiana generica $\\begin{pmatrix}a-by&-bx\\\\dy&-c+dx\\end{pmatrix}$; in $\\big(\\tfrac{c}{d},\\tfrac{a}{b}\\big)$ i termini diagonali si annullano e resta $\\begin{pmatrix}0&-bc/d\\\\da/b&0\\end{pmatrix}$: $\\mathrm{tr}=0$, $\\det=ac>0$.",
        cont:"Passo 2" },
      { t:"Il sistema LINEARIZZATO ha quindi nell'origine un centro (autovalori $\\pm i\\sqrt{ac}$). Cosa si conclude sul sistema NONLINEARE?",
        opts:[{x:"Nulla di diretto: il centro &egrave; un caso non iperbolico, Hartman-Grobman non si applica e la linearizzazione non decide (servono integrali primi)",c:true},{x:"&Egrave; senz'altro un centro anche il nonlineare"},{x:"&Egrave; un fuoco stabile"},{x:"&Egrave; una sella"}],
        hint:"Autovalori immaginari puri $\\Rightarrow$ punto fisso NON iperbolico: &egrave; il caso in cui la linearizzazione &egrave; muta.",
        sol:"Con $\\mathrm{Re}\\,\\lambda=0$ (centro) il punto fisso non &egrave; iperbolico: il Teorema di Hartman-Grobman non si applica e la linearizzazione non determina il ritratto nonlineare. Per Lotka-Volterra si conclude che &egrave; davvero un centro solo tramite l'integrale primo $H=dx-c\\log x+by-a\\log y$ conservato. &Egrave; la distinzione lineare vs nonlineare nel caso degenere." }
  ]},
  { pool:"edo", src:"tipo F &middot; manuale", steps:[
      { t:"Risolvi $y'=t^2y^2$, $y(0)=1$. Separando e integrando si ottiene:",
        opts:[{x:"$-\\dfrac{1}{y}=\\dfrac{t^3}{3}+C$",c:true},{x:"$\\log|y|=\\dfrac{t^3}{3}+C$"},{x:"$\\dfrac{1}{y}=\\dfrac{t^3}{3}+C$"},{x:"$y=\\dfrac{t^3}{3}+C$"}],
        hint:"$\\dfrac{dy}{y^2}=t^2\\,dt$; l'integrale di $y^{-2}$ &egrave; $-y^{-1}$, non $\\log|y|$.",
        sol:"Separazione delle variabili: $\\int y^{-2}\\,dy=\\int t^2\\,dt\\Rightarrow -\\dfrac{1}{y}=\\dfrac{t^3}{3}+C$.",
        cont:"Passo 2" },
      { t:"Imponendo $y(0)=1$ e ricavando $y(t)$:",
        opts:[{x:"$y(t)=\\dfrac{3}{3-t^3}$",c:true},{x:"$y(t)=\\dfrac{1}{1+t^3/3}$"},{x:"$y(t)=\\dfrac{3}{3+t^3}$"},{x:"$y(t)=1+\\dfrac{t^3}{3}$"}],
        hint:"$y(0)=1\\Rightarrow C=-1$; poi isola $y$ da $-1/y=t^3/3-1$.",
        sol:"Da $y(0)=1$: $-1=C$, quindi $-\\dfrac{1}{y}=\\dfrac{t^3}{3}-1=\\dfrac{t^3-3}{3}$, da cui $y=\\dfrac{3}{3-t^3}$.",
        cont:"Passo 3" },
      { t:"L'intervallo massimale della soluzione (che contiene $t=0$) &egrave;:",
        opts:[{x:"$(-\\infty,\\ \\sqrt[3]{3}\\,)$",c:true},{x:"$\\mathbb{R}$"},{x:"$(0,\\ \\sqrt[3]{3}\\,)$"},{x:"$(-\\sqrt[3]{3},\\ \\sqrt[3]{3}\\,)$"}],
        hint:"La soluzione esplode dove si annulla il denominatore $3-t^3$, cio&egrave; $t=\\sqrt[3]{3}$; prendi la componente connessa che contiene $0$.",
        sol:"$y=\\dfrac{3}{3-t^3}$ ha asintoto verticale in $t=\\sqrt[3]{3}$ (blow-up). L'intervallo massimale &egrave; la componente connessa del dominio contenente $t=0$: $(-\\infty,\\sqrt[3]{3})$. Esempio di soluzione NON globale bench&eacute; $f\\in C^1$ ovunque (fuga dai compatti realizzata in tempo finito)." }
  ]},
  { pool:"edo", src:"tipo F &middot; da Oxford ODE &middot; manuale", steps:[
      { t:"Studio qualitativo di $y'=y-y^3$, $y(0)=\\tfrac12$. Primo passo: esistenza-unicit&agrave; ed equilibri.",
        opts:[{x:"$f(y)=y-y^3\\in C^1$: unicit&agrave; locale (Cauchy-Lipschitz); equilibri $y=0,\\ \\pm1$",c:true},{x:"$f$ non lipschitziana in $0$: unicit&agrave; non garantita"},{x:"nessun equilibrio"},{x:"un solo equilibrio $y=0$"}],
        hint:"$f(y)=y-y^3=y(1-y^2)$: &egrave; un polinomio, dunque $C^1$; gli zeri sono $0,\\pm1$.",
        sol:"$f(y)=y(1-y)(1+y)$ &egrave; $C^1$ su $\\mathbb{R}$: Cauchy-Lipschitz d&agrave; esistenza e unicit&agrave; locale. Gli equilibri (soluzioni costanti) sono gli zeri di $f$: $y=0,\\pm1$.",
        cont:"Passo 2" },
      { t:"Con $y(0)=\\tfrac12\\in(0,1)$, monotonia e globalit&agrave; in avanti:",
        opts:[{x:"$f>0$ in $(0,1)$: soluzione crescente e intrappolata in $(0,1)$ fra gli equilibri $0$ e $1$, dunque globale su $[0,+\\infty)$",c:true},{x:"soluzione decrescente verso $0$"},{x:"la soluzione esce da $(0,1)$ ed esplode"},{x:"soluzione costante $\\equiv\\tfrac12$"}],
        hint:"Segno di $f(y)=y(1-y^2)$ per $y\\in(0,1)$: positivo; e per unicit&agrave; la soluzione non attraversa gli equilibri $0$ e $1$.",
        sol:"Per $y\\in(0,1)$, $f(y)>0$: soluzione crescente. Per unicit&agrave; non attraversa gli equilibri $y=0$ e $y=1$, quindi resta intrappolata in $(0,1)$: essendo limitata non esplode e per fuga dai compatti &egrave; definita su tutto $[0,+\\infty)$.",
        cont:"Passo 3" },
      { t:"Comportamento asintotico per $t\\to+\\infty$ e $t\\to-\\infty$:",
        opts:[{x:"$y\\to1^-$ per $t\\to+\\infty$ e $y\\to0^+$ per $t\\to-\\infty$",c:true},{x:"$y\\to+\\infty$ per $t\\to+\\infty$"},{x:"$y\\to0$ per $t\\to+\\infty$"},{x:"$y\\to1$ da entrambi i lati"}],
        hint:"Una soluzione monotona e limitata tende a un limite finito, che deve essere un equilibrio (teorema dell'asintoto); i bordi di $(0,1)$ sono $0$ e $1$.",
        sol:"Monotona crescente e limitata in $(0,1)$: per il teorema dell'asintoto i limiti agli estremi esistono e sono equilibri. Dunque $\\lim_{t\\to+\\infty}y=1$ ed $\\lim_{t\\to-\\infty}y=0$. Coerente con la stabilit&agrave;: $f'(1)=1-3=-2<0$ (stabile), $f'(0)=1>0$ (instabile)." }
  ]},

  /* ===== lotto innestato il 2026-08-16 — 3 unita' =====
Lotto 2 per il pool EDO di Analisi Vettoriale (18 unita').
   Provenienza: appelli Sapienza secondo esonero (20230210 Es.5, 20230621 Es.5,
   20220706 Es.5) + varianti generate ex novo su idee dalle fonti della ricognizione
   Argonauta (MIT 18.03SC ritratti di fase; Oxford Schekochihin ODE; Paul's Online DE).
   Nessun testo altrui riprodotto: gli esercizi sono nuovi, l'idea e' citata in `src`.

   Le 32 unita' gia' presenti coprono quasi solo risoluzione esplicita ed esistenza-
   unicita'; questo lotto porta i TIPI DI RICHIESTA che gli appelli chiedono e che il
   pool non aveva: retta tangente ricavata dall'equazione, concavita' via y'', forma
   implicita, ritratti di fase 2D (traccia-determinante, linearizzazione, Hartman-
   Grobman), convergenza uniforme della successione di soluzioni, e studi qualitativi
   completi multi-step (>=5). Ogni multi-step fa il conto intero.

   Coefficienti ricalcolati e verificati con le stampe ufficiali:
   - 20230210 Es.5: retta tangente y=1-nt (con n=2 -> y=1-2t), soluzione
     y_n=e^{n(1-e^{arctan t})}, sup su [1,+inf) = y_n(1)=e^{n(1-e^{pi/4})}. Concorda.
   - 20230621 Es.5: u''=-u(1+u^2)/(u^2-1)^3 ricalcolato passo-passo, concorda con la
     stampa; forma implicita u^2/2 - log|u| = t + c^2/2 - log|c|, concorda.
   - 20220706 Es.5 e 20250127: usati come sfondo, non come istanze dirette.
   Variante t^2 y^2 (unita' 17): -1/y = t^3/3 + C, y=3/(3-t^3), blow-up in t=cbrt(3);
   derivato qui, non su stampa. Nessuna discrepanza trovata.
  ===== */

  { pool:"edo", src:"20220706 Es.5", steps:[
      { t:"Problema di Cauchy $y'=t^2y^2-y$, $y(0)=1$. Riconosci il tipo e imposta la sostituzione. Si tratta di:",
        opts:[{x:"un'equazione di Bernoulli con $n=2$: sostituzione $z=y^{-1}$, che la linearizza",c:true},{x:"un'equazione lineare: fattore integrante diretto"},{x:"un'equazione a variabili separabili"},{x:"un'equazione esatta"}],
        hint:"$y'=t^2y^2-y$ ha il termine $y^2$ accanto al termine lineare: forma di Bernoulli $y'+p(t)y=q(t)y^n$ con $n=2$.",
        sol:"Forma di Bernoulli $y'+y=t^2y^2$ ($n=2$): la sostituzione standard &egrave; $z=y^{1-n}=y^{-1}$, che porta a un'equazione lineare in $z$.",
        cont:"Passo 2" },
      { t:"Prima di risolvere: esistenza-unicit&agrave; e segno della soluzione. Cosa puoi affermare?",
        opts:[{x:"$f(t,y)=t^2y^2-y\\in C^1$: unicit&agrave; locale (Cauchy-Lipschitz); inoltre $y\\equiv0$ &egrave; soluzione, quindi $y(0)=1>0\\Rightarrow y>0$ sul dominio",c:true},{x:"$f$ non &egrave; lipschitziana, l'unicit&agrave; non vale"},{x:"la soluzione pu&ograve; cambiare segno"},{x:"$y\\equiv1$ &egrave; soluzione costante"}],
        hint:"$y\\equiv0$ annulla $t^2y^2-y$: &egrave; una soluzione costante, e per unicit&agrave; nessun'altra la attraversa.",
        sol:"$f\\in C^1$ d&agrave; unicit&agrave; locale (Cauchy-Lipschitz). $y\\equiv0$ &egrave; soluzione; per unicit&agrave; la soluzione con $y(0)=1>0$ resta positiva, cosicch&eacute; $z=1/y$ &egrave; ben definita.",
        cont:"Passo 3" },
      { t:"Con $z=y^{-1}$ (quindi $z'=-y^{-2}y'$), l'equazione in $z$ diventa:",
        opts:[{x:"$z'-z=-t^2$",c:true},{x:"$z'+z=t^2$"},{x:"$z'-z=t^2$"},{x:"$z'=t^2z^2-z$"}],
        hint:"Dividi l'EDO per $-y^2$: $-y^{-2}y'=-t^2+y^{-1}$, e $-y^{-2}y'=z'$, $y^{-1}=z$.",
        sol:"Da $z'=-y^{-2}y'$ e $y'=t^2y^2-y$: $z'=-y^{-2}(t^2y^2-y)=-t^2+y^{-1}=-t^2+z$, cio&egrave; $z'-z=-t^2$ (lineare del prim'ordine).",
        cont:"Passo 4" },
      { t:"Risolvi la lineare $z'-z=-t^2$ (omogenea + particolare per somiglianza). La generale &egrave;:",
        opts:[{x:"$z=Ce^{t}+t^2+2t+2$",c:true},{x:"$z=Ce^{t}-t^2$"},{x:"$z=Ce^{-t}+t^2+2t+2$"},{x:"$z=Ce^{t}+t^2-2t$"}],
        hint:"Omogenea $Ce^{t}$; per la particolare prova $z_p=at^2+bt+c$ e imponi $z_p'-z_p=-t^2$.",
        sol:"Omogenea $z_h=Ce^{t}$. Particolare $z_p=at^2+bt+c$: $z_p'-z_p=-at^2+(2a-b)t+(b-c)=-t^2\\Rightarrow a=1,\\,b=2,\\,c=2$. Quindi $z=Ce^{t}+t^2+2t+2$.",
        cont:"Passo 5" },
      { t:"Imponi $z(0)=1/y(0)=1$ e scrivi la soluzione $y(t)$:",
        opts:[{x:"$y(t)=\\dfrac{1}{-e^{t}+t^2+2t+2}$",c:true},{x:"$y(t)=-e^{t}+t^2+2t+2$"},{x:"$y(t)=\\dfrac{1}{e^{t}+t^2+2t+2}$"},{x:"$y(t)=\\dfrac{1}{t^2+2t+2}$"}],
        hint:"$z(0)=C+2=1\\Rightarrow C=-1$; poi $y=1/z$.",
        sol:"$z(0)=C+2=1\\Rightarrow C=-1$, quindi $z(t)=-e^{t}+t^2+2t+2$ e $y(t)=\\dfrac{1}{z(t)}=\\dfrac{1}{-e^{t}+t^2+2t+2}$.",
        cont:"Passo 6" },
      { t:"Dominio massimale di esistenza: la soluzione &egrave; definita su tutto $\\mathbb{R}$?",
        opts:[{x:"No: $z(0)=1>0$ ma $z(t)\\to-\\infty$ per $t\\to+\\infty$, quindi $z$ si annulla in un $t^*>0$ dove $y$ esplode; l'intervallo massimale &egrave; limitato a destra",c:true},{x:"S&igrave;, $y$ &egrave; definita su tutto $\\mathbb{R}$"},{x:"No, ma solo perch&eacute; $f$ non &egrave; continua"},{x:"S&igrave;, perch&eacute; $z$ non si annulla mai"}],
        hint:"$y=1/z$ esplode dove $z=0$: studia il segno di $z(t)=-e^{t}+t^2+2t+2$ agli estremi.",
        sol:"$y=1/z$ ha asintoto verticale dove $z=0$. Poich&eacute; $z(0)=1>0$ e $\\lim_{t\\to+\\infty}z(t)=-\\infty$ (l'esponenziale domina il polinomio), per continuit&agrave; esiste $t^*>0$ con $z(t^*)=0$: l&igrave; $y$ esplode. Per il criterio di fuga dai compatti l'intervallo massimale &egrave; $(-\\infty,t^*)$, NON tutto $\\mathbb{R}$." }
  ]},

  { pool:"edo", src:"tipo F &middot; da Oxford ODE &middot; manuale", steps:[
      { t:"Studio qualitativo completo di $y'=(y-1)(3-y)$, $y(0)=2$ (autonoma). Esistenza-unicit&agrave; ed equilibri:",
        opts:[{x:"$f(y)=(y-1)(3-y)\\in C^1$: unicit&agrave; locale (Cauchy-Lipschitz); equilibri $y=1$ e $y=3$",c:true},{x:"$f$ non lipschitziana in $y=2$"},{x:"un solo equilibrio $y=2$"},{x:"nessun equilibrio"}],
        hint:"$f$ &egrave; un polinomio (dunque $C^1$); gli equilibri sono gli zeri di $f$.",
        sol:"$f(y)=(y-1)(3-y)$ &egrave; $C^1$: Cauchy-Lipschitz d&agrave; unicit&agrave; locale. Equilibri (soluzioni costanti) dove $f=0$: $y=1$ e $y=3$.",
        cont:"Passo 2" },
      { t:"Isocline e monotonia. L'equazione &egrave; autonoma, quindi le isocline $f(y)=k$ sono rette orizzontali; con $y(0)=2\\in(1,3)$ la soluzione:",
        opts:[{x:"&egrave; crescente, perch&eacute; $f(2)=(1)(1)=1>0$ e $f>0$ in tutto $(1,3)$",c:true},{x:"&egrave; decrescente"},{x:"&egrave; costante"},{x:"cambia monotonia dentro $(1,3)$"}],
        hint:"Segno di $f(y)=(y-1)(3-y)$ per $y\\in(1,3)$: entrambi i fattori positivi.",
        sol:"Per $y\\in(1,3)$ entrambi i fattori di $f$ sono positivi, quindi $f>0$: soluzione crescente. Le isocline orizzontali (tipiche dell'autonoma) danno pendenza costante lungo ogni livello $y=$cost.",
        cont:"Passo 3" },
      { t:"Prolungabilit&agrave;: su quale intervallo &egrave; definita la soluzione?",
        opts:[{x:"su tutto $\\mathbb{R}$: intrappolata fra gli equilibri $1$ e $3$ (per unicit&agrave; non li attraversa), quindi limitata e senza blow-up",c:true},{x:"solo su un intervallo limitato, perch&eacute; esplode"},{x:"solo per $t\\ge0$"},{x:"non &egrave; prolungabile oltre $t=0$"}],
        hint:"Una soluzione limitata (qui fra due equilibri, per unicit&agrave;) non pu&ograve; esplodere in tempo finito.",
        sol:"Per unicit&agrave; la soluzione non attraversa gli equilibri $1$ e $3$: resta in $(1,3)$, dunque limitata. Per il criterio di fuga dai compatti una soluzione limitata &egrave; globale: definita su tutto $\\mathbb{R}$.",
        cont:"Passo 4" },
      { t:"Comportamento asintotico:",
        opts:[{x:"$y\\to3^-$ per $t\\to+\\infty$ e $y\\to1^+$ per $t\\to-\\infty$",c:true},{x:"$y\\to+\\infty$ per $t\\to+\\infty$"},{x:"$y\\to2$ da entrambi i lati"},{x:"$y\\to1$ per $t\\to+\\infty$"}],
        hint:"Monotona e limitata $\\Rightarrow$ limiti finiti agli estremi, che devono essere equilibri (teorema dell'asintoto).",
        sol:"Crescente e limitata in $(1,3)$: per il teorema dell'asintoto i limiti agli estremi esistono e sono equilibri. Dunque $\\lim_{t\\to+\\infty}y=3$ e $\\lim_{t\\to-\\infty}y=1$.",
        cont:"Passo 5" },
      { t:"Convessit&agrave;. Derivando l'equazione, $y''=(4-2y)\\,y'$; con $y'>0$ in $(1,3)$, la soluzione:",
        opts:[{x:"&egrave; convessa per $y<2$ e concava per $y>2$, con un flesso in $y=2$ (cio&egrave; in $t=0$)",c:true},{x:"&egrave; sempre convessa"},{x:"&egrave; sempre concava"},{x:"non ha flessi"}],
        hint:"$y''=(4-2y)y'$: con $y'>0$, il segno di $y''$ &egrave; quello di $4-2y$, che cambia in $y=2$.",
        sol:"$y''=\\dfrac{d}{dt}f(y)=f'(y)y'=(4-2y)y'$. In $(1,3)$, $y'>0$, quindi $y''>0$ per $y<2$ (convessa) e $y''<0$ per $y>2$ (concava): flesso dove $y=2$, cio&egrave; in $t=0$ dato $y(0)=2$.",
        cont:"Passo 6" },
      { t:"Stabilit&agrave; degli equilibri (per collocare la soluzione nel ritratto):",
        opts:[{x:"$y=3$ asintoticamente stabile ($f'(3)=-2<0$), $y=1$ instabile ($f'(1)=2>0$)",c:true},{x:"entrambi stabili"},{x:"entrambi instabili"},{x:"$y=1$ stabile, $y=3$ instabile"}],
        hint:"Criterio di stabilit&agrave; per equilibri di autonome: $f'(y^*)<0$ stabile, $f'(y^*)>0$ instabile.",
        sol:"$f'(y)=4-2y$: $f'(1)=2>0\\Rightarrow y=1$ instabile; $f'(3)=-2<0\\Rightarrow y=3$ asintoticamente stabile. Coerente con la soluzione che parte in $2$ e sale verso $3$ allontanandosi da $1$." }
  ]},

  { pool:"edo", src:"tipo &middot; da MIT 18.03 &middot; manuale", steps:[
      { t:"Sistema lineare $\\mathbf{x}'=A\\mathbf{x}$ con $A=\\begin{pmatrix}-1&-2\\\\2&-1\\end{pmatrix}$: ritratto di fase completo. Primo, i punti fissi:",
        opts:[{x:"solo l'origine, perch&eacute; $\\det A=5\\ne0$",c:true},{x:"una retta di punti fissi"},{x:"nessun punto fisso"},{x:"due punti fissi isolati"}],
        hint:"I punti fissi risolvono $A\\mathbf{x}=0$; se $\\det A\\ne0$ l'unica soluzione &egrave; $\\mathbf{x}=0$.",
        sol:"$\\det A=(-1)(-1)-(-2)(2)=1+4=5\\ne0$, quindi $A$ &egrave; invertibile e l'unico punto fisso &egrave; l'origine.",
        cont:"Passo 2" },
      { t:"Autovalori di $A$. Il polinomio caratteristico e le radici sono:",
        opts:[{x:"$\\lambda^2+2\\lambda+5=0\\Rightarrow\\lambda=-1\\pm2i$",c:true},{x:"$\\lambda^2-2\\lambda+5=0\\Rightarrow\\lambda=1\\pm2i$"},{x:"$\\lambda^2+2\\lambda-3=0\\Rightarrow\\lambda=1,-3$"},{x:"$\\lambda^2+5=0\\Rightarrow\\lambda=\\pm i\\sqrt5$"}],
        hint:"$\\det(A-\\lambda I)=(-1-\\lambda)^2-(-2)(2)=\\lambda^2+2\\lambda+5$.",
        sol:"$\\det(A-\\lambda I)=(-1-\\lambda)^2+4=\\lambda^2+2\\lambda+5=0$, radici $\\lambda=\\dfrac{-2\\pm\\sqrt{4-20}}{2}=-1\\pm2i$ (complesse coniugate).",
        cont:"Passo 3" },
      { t:"Classificazione del punto fisso (traccia-determinante):",
        opts:[{x:"fuoco (spirale) stabile: $\\mathrm{tr}\\,A=-2<0$, $\\det A=5>0$, $\\mathrm{tr}^2-4\\det<0$ e $\\mathrm{Re}\\,\\lambda=-1<0$",c:true},{x:"centro"},{x:"nodo stabile"},{x:"sella"}],
        hint:"Autovalori complessi ($\\mathrm{tr}^2-4\\det<0$) con parte reale non nulla $\\Rightarrow$ fuoco; il segno di $\\mathrm{Re}\\,\\lambda$ ne d&agrave; la stabilit&agrave;.",
        sol:"$\\mathrm{tr}\\,A=-2$, $\\det A=5$, $\\mathrm{tr}^2-4\\det=4-20=-16<0$: autovalori complessi. $\\mathrm{Re}\\,\\lambda=-1<0\\Rightarrow$ fuoco asintoticamente stabile (spirale entrante). Non &egrave; un centro perch&eacute; $\\mathrm{Re}\\,\\lambda\\ne0$.",
        cont:"Passo 4" },
      { t:"Verso di rotazione. Valutando il campo in $(1,0)$ si ottiene $\\mathbf{x}'=A\\,(1,0)^{\\top}=(-1,2)$; dunque il verso &egrave;:",
        opts:[{x:"antiorario (in $(1,0)$ la velocit&agrave; ha componente verticale positiva, $y'=2>0$)",c:true},{x:"orario"},{x:"radiale entrante senza rotazione"},{x:"non determinabile"}],
        hint:"In $(1,0)$, sul semiasse $x$ positivo, il segno della seconda componente della velocit&agrave; dice se si sale (antiorario) o si scende (orario).",
        sol:"In $(1,0)$: $\\mathbf{x}'=(-1,2)$, componente verticale $+2>0$: la traiettoria sale girando a sinistra, quindi rotazione antioraria. &Egrave; il metodo standard per fissare il verso in un fuoco o centro.",
        cont:"Passo 5" },
      { t:"Comportamento delle traiettorie nel piano delle fasi:",
        opts:[{x:"tutte spirali antiorarie che convergono all'origine per $t\\to+\\infty$",c:true},{x:"traiettorie chiuse (orbite periodiche)"},{x:"traiettorie che divergono all'infinito"},{x:"rette che entrano nell'origine"}],
        hint:"Fuoco stabile: modulo che decade come $e^{-t}$ moltiplicato per una rotazione $e^{\\pm2it}$.",
        sol:"Con $\\lambda=-1\\pm2i$, le soluzioni combinano $e^{-t}(\\cos2t,\\sin2t)$: modulo $\\sim e^{-t}\\to0$ e fase che ruota (antioraria). Ogni traiettoria &egrave; quindi una spirale che converge all'origine.",
        cont:"Passo 6" },
      { t:"Conclusione sulla stabilit&agrave; dell'origine:",
        opts:[{x:"asintoticamente stabile: ogni soluzione tende a $0$ per $t\\to+\\infty$, essendo $\\mathrm{Re}\\,\\lambda<0$",c:true},{x:"stabile ma non asintoticamente (come un centro)"},{x:"instabile"},{x:"stabile solo lungo una direzione"}],
        hint:"Per sistemi lineari, $\\mathrm{Re}\\,\\lambda<0$ per tutti gli autovalori equivale a stabilit&agrave; asintotica.",
        sol:"Criterio di stabilit&agrave; per sistemi lineari: l'origine &egrave; asintoticamente stabile se e solo se tutti gli autovalori hanno parte reale negativa. Qui $\\mathrm{Re}\\,\\lambda=-1<0$: asintoticamente stabile." }
  ]}
];


/* ===================================================================
   ESTENSIONE edo — run notturno 2026-08-22
   Motivo: 5 sedute su 21 chiedono la CONVESSITA'/CONCAVITA' della
   soluzione di Cauchy senza risolverla (22/06/2022, 21/06/2023,
   05/07/2023, 09/02/2024, 04/07/2024), e due chiedono retta tangente o
   polinomio di Taylor della soluzione. Il pool a 52 unita' toccava la
   derivata seconda in 2-3 domande. Qui si allena la mossa: derivare
   l'equazione, non la soluzione.
   =================================================================== */
Q.edo = (Q.edo || []).concat([

{"pool":"edo","src":"modus operandi &middot; coda ricorrente","steps":[
 {"t":"Il testo chiede se la soluzione di $y'=f(t,y)$, $y(t_0)=y_0$ &egrave; convessa o concava in un intorno di $t_0$, SENZA risolvere. Qual &egrave; la mossa?",
  "opts":[
   {"x":"Derivare l'EQUAZIONE rispetto a $t$: $y''=f_t(t,y)+f_y(t,y)\\,y'=f_t+f_y\\cdot f$, e valutarla in $(t_0,y_0)$","c":true},
   {"x":"Derivare due volte la soluzione esplicita e valutare il segno"},
   {"x":"Guardare il segno di $y'(t_0)=f(t_0,y_0)$: se positivo la soluzione &egrave; convessa"},
   {"x":"Studiare il segno di $f_y$: se $f_y>0$ la soluzione &egrave; convessa"}],
  "hint":"La soluzione non ce l'hai, ma l'equazione s&igrave;. E l'equazione dice quanto vale $y'$ in OGNI punto: puoi sostituirla dentro la derivata.",
  "sol":"<b>Derivare l'equazione.</b> Da $y'(t)=f(t,y(t))$, derivando in $t$ con la regola della catena: $y''(t)=f_t(t,y(t))+f_y(t,y(t))\\cdot y'(t)=f_t+f_y\\cdot f$. Tutto il secondo membro &egrave; noto in $(t_0,y_0)$ perch&eacute; $f$ &egrave; data e $y(t_0)=y_0$. Il segno di $y''(t_0)$ d&agrave; convessit&agrave; ($>0$) o concavit&agrave; ($<0$) in un intorno, per permanenza del segno (che vale perch&eacute; $y''$ &egrave; continua se $f\\in C^1$). <b>L'opzione 3 confonde monotonia e convessit&agrave;</b>: &egrave; l'errore che il compito vuole intercettare."}]},

{"pool":"edo","src":"20240704 Es.5 iii","steps":[
 {"t":"$y'=\\dfrac{y(y-2)}{1+t}$, $y(0)=1$. La soluzione &egrave; convessa o concava in un intorno di $t_0=0$?",
  "opts":[
   {"x":"Convessa: $y''(0)=1>0$","c":true},
   {"x":"Concava: $y''(0)=-1<0$"},
   {"x":"N&eacute; l'una n&eacute; l'altra: $y''(0)=0$, c'&egrave; un flesso"},
   {"x":"Concava, perch&eacute; $y'(0)=-1<0$ e la soluzione decresce"}],
  "hint":"Calcola prima $y'(0)$ dall'equazione, poi deriva l'equazione e sostituisci ANCHE $y'(0)$, non solo $y(0)$.",
  "sol":"<b>Derivazione dell'equazione.</b> $f(t,u)=\\frac{u(u-2)}{1+t}=\\frac{u^2-2u}{1+t}$. In $(0,1)$: $y'(0)=\\frac{1-2}{1}=-1$. Poi $y''=\\frac{(2y-2)y'(1+t)-(y^2-2y)}{(1+t)^2}$. In $t=0$, $y=1$, $y'=-1$: numeratore $=(2-2)(-1)(1)-(1-2)=0+1=1$, denominatore $=1$. Quindi $y''(0)=1>0$: <b>convessa</b> in un intorno di $0$, pur essendo decrescente. Convessit&agrave; e monotonia sono indipendenti: qui la soluzione scende rallentando verso l'asintoto $y=0$ (soluzione costante che non pu&ograve; attraversare)."}]},

{"pool":"edo","src":"20230705 Es.5 iii","steps":[
 {"t":"$y'=\\dfrac2t y+4t^2y^3$, $y(1)=1$. Concava o convessa in un intorno di $t=1$?",
  "opts":[
   {"x":"Convessa: $y''(1)=90>0$","c":true},
   {"x":"Concava: $y''(1)<0$"},
   {"x":"Serve la soluzione esplicita (equazione di Bernoulli) per rispondere"},
   {"x":"Convessa perch&eacute; $y'(1)=6>0$ e $y$ &egrave; crescente"}],
  "hint":"Attenzione al termine $\\frac2t y$: derivando in $t$ produce sia $-\\frac{2}{t^2}y$ sia $\\frac2t y'$.",
  "sol":"<b>Conto.</b> $y'(1)=2\\cdot1+4\\cdot1\\cdot1=6$. Derivando l'equazione: $y''=-\\frac{2}{t^2}y+\\frac2t y'+8t\\,y^3+12t^2y^2y'$. In $t=1$, $y=1$, $y'=6$: $y''(1)=-2+12+8+72=90>0$. <b>Convessa</b>. Nota che l'equazione &egrave; di Bernoulli ed &egrave; risolubile (il testo lo chiede al punto iv), ma la domanda sulla convessit&agrave; arriva PRIMA proprio perch&eacute; non serve la formula: chi si mette a risolvere per rispondere a iii perde tempo e spesso sbaglia il conto pi&ugrave; lungo."}]},

{"pool":"edo","src":"20240209 Es.5 iv","steps":[
 {"t":"$y'=\\sqrt{4y^2+e^t+1}$, $y(0)=2$. Perch&eacute; $y$ &egrave; convessa su $[0,+\\infty)$?",
  "opts":[
   {"x":"Perch&eacute; $y''=\\dfrac{8yy'+e^t}{2\\sqrt{4y^2+e^t+1}}$ e su $[0,+\\infty)$ si ha $y>0$ e $y'>0$, quindi il numeratore &egrave; positivo","c":true},
   {"x":"Perch&eacute; $y'>0$: una funzione crescente &egrave; convessa"},
   {"x":"Perch&eacute; la radice quadrata &egrave; una funzione concava e cambia segno alla derivata seconda"},
   {"x":"Perch&eacute; $y$ &egrave; globale e i limiti a $+\\infty$ esistono"}],
  "hint":"Qui non basta il segno in un punto: il testo chiede la convessit&agrave; su tutta una semiretta, quindi serve il segno di $y''$ dove $y$ &egrave; positiva e crescente.",
  "sol":"<b>Convessit&agrave; su un intervallo.</b> Il secondo membro &egrave; sempre $\\ge1>0$, quindi $y'>0$ ovunque: $y$ &egrave; strettamente crescente e, partendo da $y(0)=2>0$, resta $y(t)\\ge2>0$ per $t\\ge0$ (punto iii del compito). Derivando l'equazione: $y''=\\frac{d}{dt}\\big(4y^2+e^t+1\\big)^{1/2}=\\frac{8y\\,y'+e^t}{2\\sqrt{4y^2+e^t+1}}$. Per $t\\ge0$: $y>0$, $y'>0$, $e^t>0$ $\\Rightarrow y''>0$. Dunque $y$ &egrave; convessa su $[0,+\\infty)$. <b>Struttura tipica</b>: i punti del compito sono in ordine perch&eacute; ciascuno serve al successivo (globalit&agrave; $\\to$ positivit&agrave; $\\to$ convessit&agrave; $\\to$ limite): saltarne uno rompe la catena."}]},

{"pool":"edo","src":"20220622 Es.5 iii","steps":[
 {"t":"$y'=y^4(t+e^t)$, $y(0)=1$. La soluzione &egrave; convessa in un intorno di $t=0$?",
  "opts":[
   {"x":"S&igrave;: $y''(0)=4\\cdot1\\cdot1\\cdot1+1\\cdot(1+1)=6>0$","c":true},
   {"x":"No: $y''(0)=-2<0$"},
   {"x":"$y''(0)=0$: c'&egrave; un flesso in $t=0$"},
   {"x":"Non si pu&ograve; dire senza risolvere l'equazione a variabili separabili"}],
  "hint":"$y''=4y^3y'(t+e^t)+y^4(1+e^t)$, e $y'(0)$ si legge dall'equazione.",
  "sol":"<b>Conto.</b> $y'(0)=1^4\\cdot(0+1)=1$. Derivando: $y''=4y^3y'(t+e^t)+y^4(1+e^t)$. In $t=0$, $y=1$, $y'=1$: $y''(0)=4\\cdot1\\cdot1\\cdot(0+1)+1\\cdot(1+1)=4+2=6>0$: <b>convessa</b>. Utile ricordare che qui $y\\equiv0$ &egrave; soluzione costante e il dato &egrave; $y(0)=1>0$: per unicit&agrave; la soluzione resta positiva, e questo garantisce che $y^3,y^4>0$ nel ragionamento sul segno."}]},

{"pool":"edo","src":"20220210 Es.5 ii &middot; Taylor della soluzione","steps":[
 {"t":"Per il problema $6y'+y=e^t y^{-5}$, $y(0)=1$, il testo chiede il polinomio di Taylor di ordine $2$ della soluzione in $t=0$. Come si ottiene?",
  "opts":[
   {"x":"$P_2(t)=y(0)+y'(0)t+\\frac{y''(0)}{2}t^2$, con $y(0)$ dal dato, $y'(0)$ dall'equazione in forma normale e $y''(0)$ derivando l'equazione","c":true},
   {"x":"Risolvendo l'equazione e sviluppando la soluzione esplicita"},
   {"x":"Sviluppando in serie il secondo membro $e^t y^{-5}$"},
   {"x":"Non si pu&ograve;: il polinomio di Taylor richiede la soluzione"}],
  "hint":"Il dato iniziale d&agrave; il termine di ordine zero; l'equazione valutata nel dato d&agrave; il coefficiente di primo grado; l'equazione derivata d&agrave; quello di secondo.",
  "sol":"<b>Taylor da un'equazione differenziale.</b> Forma normale: $y'=\\frac{e^ty^{-5}-y}{6}$. In $t=0,y=1$: $y'(0)=\\frac{1-1}{6}=0$. Derivando: $y''=\\frac{e^ty^{-5}-5e^ty^{-6}y'-y'}{6}$; in $t=0$ con $y=1,y'=0$: $y''(0)=\\frac{1-0-0}{6}=\\frac16$. Quindi $P_2(t)=1+0\\cdot t+\\frac{1}{12}t^2=1+\\frac{t^2}{12}$. <b>Stessa mossa</b> della retta tangente ($P_1$) e della convessit&agrave; (segno di $y''(0)$): il problema di Cauchy contiene tutte le derivate della soluzione nel dato iniziale, una alla volta, gratis."}]},

{"pool":"edo","src":"trappola &middot; monotonia vs convessit&agrave;","steps":[
 {"t":"La soluzione di un problema di Cauchy &egrave; strettamente decrescente in un intorno di $t_0$. Cosa se ne deduce sulla convessit&agrave;?",
  "opts":[
   {"x":"Nulla: monotonia e convessit&agrave; sono indipendenti, e i compiti chiedono spesso una soluzione decrescente E convessa","c":true},
   {"x":"&Egrave; concava, perch&eacute; la derivata &egrave; negativa"},
   {"x":"&Egrave; convessa, perch&eacute; la derivata negativa cresce verso zero"},
   {"x":"Ha un flesso in $t_0$"}],
  "hint":"$y=e^{-t}$ decresce ed &egrave; convessa; $y=-t^2$ decresce (per $t>0$) ed &egrave; concava. Due esempi bastano.",
  "sol":"<b>Indipendenza.</b> Il segno di $y'$ (monotonia) e il segno di $y''$ (convessit&agrave;) sono informazioni separate. Il caso ricorrente all'esame &egrave; proprio quello 'contro-intuitivo': soluzione decrescente e convessa, cio&egrave; che scende rallentando verso un asintoto orizzontale — che &egrave; poi il tipico comportamento di una soluzione confinata fra due soluzioni costanti (04/07/2024 Es.5). Riconoscerlo aiuta anche a rispondere alla domanda successiva, quella sul $\\lim_{t\\to+\\infty}y(t)$."}]},

{"pool":"edo","src":"20250721 Es.2","steps":[
 {"t":"$y'=\\ln(1+y^2)(3-y)$, $y(0)=2$. Senza risolvere: quanto vale $\\lim_{t\\to+\\infty}y(t)$?",
  "opts":[
   {"x":"$3$","c":true},
   {"x":"$+\\infty$"},
   {"x":"$0$"},
   {"x":"Il limite non esiste: la soluzione oscilla"}],
  "hint":"Cerca le soluzioni COSTANTI (gli zeri del secondo membro) e usa l'unicit&agrave;: sono barriere che il grafico non pu&ograve; attraversare.",
  "sol":"<b>Barriere + monotonia.</b> Il secondo membro si annulla per $y=0$ e $y=3$: $y\\equiv0$ e $y\\equiv3$ sono soluzioni costanti. Il dato $y(0)=2\\in(0,3)$ e l'unicit&agrave; (il campo &egrave; $C^1$) impediscono l'attraversamento: $0<y(t)<3$ per ogni $t$. In quella striscia $\\ln(1+y^2)>0$ e $3-y>0$, quindi $y'>0$: la soluzione &egrave; strettamente crescente e limitata superiormente da $3$, dunque ammette limite finito $L\\le3$ per $t\\to+\\infty$. Se fosse $L<3$, si avrebbe $y'\\to\\ln(1+L^2)(3-L)>0$, incompatibile con la convergenza a un limite finito (la derivata di una funzione con asintoto orizzontale deve tendere a $0$). Quindi $L=3$. <b>Schema in tre mosse</b>: barriere $\\to$ monotonia $\\to$ il limite &egrave; lo zero del campo pi&ugrave; vicino nel verso del moto."}]},

{"pool":"edo","src":"20250214 Es.3","steps":[
 {"t":"$y'=\\ln(1+y^4)(2-y)t^2$, $y(0)=1$. Intervalli di monotonia e limiti a $\\pm\\infty$?",
  "opts":[
   {"x":"Crescente su tutto $\\mathbb{R}$ (con $y'=0$ solo in $t=0$), e $\\lim_{t\\to+\\infty}y=2$, $\\lim_{t\\to-\\infty}y=0$","c":true},
   {"x":"Crescente per $t>0$ e decrescente per $t<0$; entrambi i limiti valgono $2$"},
   {"x":"Decrescente su $\\mathbb{R}$; i limiti valgono $0$ e $2$"},
   {"x":"Crescente su $\\mathbb{R}$; entrambi i limiti sono infiniti"}],
  "hint":"$t^2\\ge0$ non cambia mai segno: la monotonia dipende solo dal segno di $\\ln(1+y^4)(2-y)$, e $y$ resta intrappolata fra due soluzioni costanti.",
  "sol":"<b>Barriere.</b> Il campo si annulla per $y=0$ e $y=2$, che sono soluzioni costanti; $y(0)=1\\in(0,2)$ e per unicit&agrave; $0<y(t)<2$ sempre. In quella striscia $\\ln(1+y^4)>0$ e $2-y>0$, e $t^2\\ge0$: quindi $y'\\ge0$ ovunque, con uguaglianza solo in $t=0$. La soluzione &egrave; monotona crescente su tutto $\\mathbb{R}$ (il singolo punto a derivata nulla non interrompe la stretta monotonia). Essendo monotona e limitata, ha limiti finiti agli estremi; con lo stesso argomento del caso precedente essi devono essere zeri del campo: $\\lim_{t\\to-\\infty}y=0$ e $\\lim_{t\\to+\\infty}y=2$. <b>La globalit&agrave;</b> segue dalla limitatezza: una soluzione confinata in una striscia limitata non pu&ograve; esplodere in tempo finito."}]},

{"pool":"edo","src":"modus operandi &middot; ordine di attacco","steps":[
 {"t":"Le domande dell'esercizio di Cauchy arrivano quasi sempre in quest'ordine: (a) esistenza e unicit&agrave;, (b) globalit&agrave;/intervallo massimale, (c) segno/monotonia, (d) convessit&agrave;, (e) limiti, (f) soluzione esplicita. Perch&eacute; l'esplicita &egrave; ULTIMA?",
  "opts":[
   {"x":"Perch&eacute; ogni punto precedente si risolve dall'equazione e dal dato, senza formula: l'esplicita &egrave; il pezzo pi&ugrave; lungo e serve solo a s&eacute;. Chi la calcola per prima spende met&agrave; del tempo e rischia di sbagliare tutto a cascata","c":true},
   {"x":"Perch&eacute; l'esplicita vale pi&ugrave; punti degli altri quesiti messi insieme"},
   {"x":"Perch&eacute; senza l'esplicita non si possono calcolare i limiti"},
   {"x":"Perch&eacute; l'ordine &egrave; casuale e non ha significato"}],
  "hint":"Guarda cosa serve davvero per rispondere a (c) e (e): il segno del campo e le soluzioni costanti. Nessuna primitiva.",
  "sol":"<b>Struttura del quesito.</b> La sequenza &egrave; progettata come una scala: Cauchy-Lipschitz d&agrave; (a); una stima sublineare o il confinamento fra barriere d&agrave; (b); il segno del campo nella striscia d&agrave; (c); la derivazione dell'equazione d&agrave; (d); monotonia+limitatezza+zeri del campo danno (e). Solo (f) richiede l'integrazione (variabili separabili, lineare, Bernoulli, esatta). L'errore pi&ugrave; costoso all'esame &egrave; invertire l'ordine: si ottiene una formula implicita ingestibile e si perdono i punti facili. <b>Nel compito del 17/07 questa &egrave; esattamente la trappola su cui si va sotto tempo.</b>"}]}

]);

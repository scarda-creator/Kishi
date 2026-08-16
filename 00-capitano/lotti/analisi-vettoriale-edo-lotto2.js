/* Lotto 2 per il pool EDO di Analisi Vettoriale (18 unita').
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
   derivato qui, non su stampa. Nessuna discrepanza trovata. */
Q.edo = [
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

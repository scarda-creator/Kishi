Q.diff = [

 /* ===================== CONCETTUALI (16) ===================== */

 {
  "pool": "diff",
  "src": "tipo C · manuale · gerarchia",
  "steps": [
   {
    "t": "Nell'origine una funzione può essere continua e avere entrambe le derivate parziali, ma NON essere differenziabile?",
    "opts": [
     {"x": "Sì: l'esistenza delle parziali (derivabilità) non implica la differenziabilità", "c": true},
     {"x": "No: se le parziali esistono, $f$ è differenziabile"},
     {"x": "No: se $f$ è continua e derivabile è automaticamente differenziabile"},
     {"x": "Sì, ma solo se $f$ non è continua"}
    ],
    "hint": "La catena corretta è $C^1\\Rightarrow$ differenziabile $\\Rightarrow$ (continua $\\wedge$ derivabile). Le frecce non si invertono.",
    "sol": "Derivabile $\\not\\Rightarrow$ differenziabile. La differenziabilità chiede che il resto $\\dfrac{f(x,y)-f(0,0)-\\nabla f(0,0)\\cdot(x,y)}{\\|(x,y)\\|}\\to 0$: è più forte della sola esistenza delle due parziali. Controesempi tipici: 20230123, 20220622 con $\\alpha\\le 1$."
   }
  ]
 },
 {
  "pool": "diff",
  "src": "tipo C · manuale · diff ⇒ continua",
  "steps": [
   {
    "t": "$f$ è differenziabile in $(0,0)$. Cosa si può concludere sulla continuità?",
    "opts": [
     {"x": "$f$ è continua in $(0,0)$: la differenziabilità implica la continuità", "c": true},
     {"x": "Nulla: differenziabilità e continuità sono indipendenti"},
     {"x": "$f$ è continua solo se in più le parziali sono continue"},
     {"x": "$f$ potrebbe essere discontinua se $\\nabla f(0,0)=0$"}
    ],
    "hint": "Scrivi $f(h)-f(0,0)=\\nabla f(0,0)\\cdot h+o(\\|h\\|)$ e fai $h\\to 0$.",
    "sol": "Per definizione $f(h)=f(0,0)+\\nabla f(0,0)\\cdot h+o(\\|h\\|)$. Per $h\\to 0$ il termine lineare e il resto tendono a $0$, quindi $f(h)\\to f(0,0)$: continua. Differenziabile $\\Rightarrow$ continua. Il viceversa è falso."
   }
  ]
 },
 {
  "pool": "diff",
  "src": "tipo C · manuale · diff ⇒ direzionali",
  "steps": [
   {
    "t": "Se $f$ è differenziabile in $(0,0)$, cosa vale per le derivate direzionali $\\partial_v f(0,0)$?",
    "opts": [
     {"x": "Esistono per OGNI versore $v$ e valgono $\\partial_v f(0,0)=\\nabla f(0,0)\\cdot v$ (lineari in $v$)", "c": true},
     {"x": "Esistono solo lungo gli assi coordinati"},
     {"x": "Esistono ma in generale non sono legate a $\\nabla f$"},
     {"x": "Possono non esistere anche se $f$ è differenziabile"}
    ],
    "hint": "La differenziabilità dà l'approssimazione lineare $f(tv)-f(0)=t\\,\\nabla f\\cdot v+o(t)$; dividi per $t$.",
    "sol": "$f(tv)=f(0,0)+t\\,\\nabla f(0,0)\\cdot v+o(t)$, quindi $\\dfrac{f(tv)-f(0,0)}{t}\\to\\nabla f(0,0)\\cdot v$. Tutte le direzionali esistono e sono la funzione LINEARE $v\\mapsto\\nabla f\\cdot v$. È la forma forte del teorema: diff. $\\Rightarrow$ direzionali $=\\nabla f\\cdot v$."
   }
  ]
 },
 {
  "pool": "diff",
  "src": "20230907 Es.1 · direzionali ⇏ diff",
  "steps": [
   {
    "t": "In $(0,0)$ le derivate direzionali $\\partial_v f$ esistono per ogni versore $v$. Segue che $f$ è differenziabile?",
    "opts": [
     {"x": "No: l'esistenza di tutte le direzionali non implica la differenziabilità (né la continuità)", "c": true},
     {"x": "Sì: è la definizione di differenziabilità"},
     {"x": "Sì, se $\\partial_v f=\\nabla f\\cdot v$ per almeno due versori"},
     {"x": "Sì, purché $f$ sia continua in $(0,0)$"}
    ],
    "hint": "L'implicazione buona va nell'altro verso. Esistono funzioni con TUTTE le direzionali eppure non differenziabili, e persino non continue.",
    "sol": "Diff. $\\Rightarrow\\partial_v f=\\nabla f\\cdot v$ per ogni $v$; il viceversa è falso. Le direzionali possono esistere una per una senza essere lineari in $v$ e senza dare la vera approssimazione lineare. Es. 20230907: $f$ derivabile, con direzionali, ma non differenziabile."
   }
  ]
 },
 {
  "pool": "diff",
  "src": "tipo C · manuale · differenziale totale",
  "steps": [
   {
    "t": "Se le derivate parziali $f_x,f_y$ esistono in un intorno di $(0,0)$ e sono CONTINUE in $(0,0)$, allora:",
    "opts": [
     {"x": "$f$ è differenziabile in $(0,0)$ (Teorema del differenziale totale): è una condizione SUFFICIENTE", "c": true},
     {"x": "$f$ è differenziabile: è condizione necessaria e sufficiente"},
     {"x": "$f$ è solo continua, ma non necessariamente differenziabile"},
     {"x": "nulla, serve calcolare il limite del resto in ogni caso"}
    ],
    "hint": "$C^1$ è più forte della differenziabilità: la implica ma non è implicata. Esistono funzioni differenziabili con parziali discontinue.",
    "sol": "Teorema del differenziale totale: $f_x,f_y$ continue in un intorno $\\Rightarrow f$ differenziabile lì. È SUFFICIENTE, non necessaria: $f(x,y)=(x^2+y^2)\\sin\\frac{1}{\\sqrt{x^2+y^2}}$ è differenziabile in $0$ ma con parziali discontinue. In pratica: se la formula esplicita è $C^1$ vicino (ma fuori) all'origine, resta da controllare SOLO l'origine col limite del resto."
   }
  ]
 },
 {
  "pool": "diff",
  "src": "tipo C · manuale · continua ⇏ derivabile",
  "steps": [
   {
    "t": "Quali di queste implicazioni sono FALSE in generale, in un punto?",
    "opts": [
     {"x": "«continua $\\Rightarrow$ derivabile» e «derivabile $\\Rightarrow$ continua»: entrambe false", "c": true},
     {"x": "solo «continua $\\Rightarrow$ derivabile» è falsa"},
     {"x": "nessuna: sono tutte vere"},
     {"x": "«differenziabile $\\Rightarrow$ continua» è falsa"}
    ],
    "hint": "L'esistenza delle parziali guarda solo lungo gli assi: non vede cosa fa $f$ nelle altre direzioni, quindi non garantisce continuità.",
    "sol": "Continua $\\not\\Rightarrow$ derivabile (es. $|x|+|y|$ ha parziali non definite in $0$). Derivabile $\\not\\Rightarrow$ continua: $f=\\frac{xy}{x^2+y^2}$, $f(0,0)=0$, ha $f_x(0,0)=f_y(0,0)=0$ (è nulla sugli assi) ma NON è continua in $0$. Le uniche frecce sempre vere partono dalla differenziabilità."
   }
  ]
 },
 {
  "pool": "diff",
  "src": "tipo C · manuale · definizione",
  "steps": [
   {
    "t": "Qual è la definizione corretta di «$f$ differenziabile in $(0,0)$»?",
    "opts": [
     {"x": "$\\lim_{(x,y)\\to(0,0)}\\dfrac{f(x,y)-f(0,0)-f_x(0,0)x-f_y(0,0)y}{\\sqrt{x^2+y^2}}=0$", "c": true},
     {"x": "esistono $f_x(0,0)$ e $f_y(0,0)$"},
     {"x": "$f$ è continua e ammette derivate direzionali in ogni direzione"},
     {"x": "$\\lim_{(x,y)\\to(0,0)}\\big(f(x,y)-f(0,0)-f_x(0,0)x-f_y(0,0)y\\big)=0$"}
    ],
    "hint": "L'ultima opzione dimentica di dividere per $\\|(x,y)\\|$: senza quel denominatore chiedi solo la continuità, non la differenziabilità.",
    "sol": "$f$ è differenziabile in $(0,0)$ sse il resto dell'approssimazione lineare è $o(\\|(x,y)\\|)$, cioè il rapporto col $\\sqrt{x^2+y^2}$ tende a $0$. Il gradiente $\\big(f_x(0,0),f_y(0,0)\\big)$ va prima calcolato dalla definizione. Togliere il denominatore riduce tutto alla sola continuità."
   }
  ]
 },
 {
  "pool": "diff",
  "src": "tipo C · manuale · parziali dalla definizione",
  "steps": [
   {
    "t": "Per $f$ definita a tratti ($f(0,0)=0$ e una formula col quoziente per $(x,y)\\ne 0$), come si calcola $f_x(0,0)$?",
    "opts": [
     {"x": "dal rapporto incrementale $f_x(0,0)=\\lim_{h\\to 0}\\dfrac{f(h,0)-f(0,0)}{h}$", "c": true},
     {"x": "derivando la formula esplicita con la regola del quoziente e valutando in $(0,0)$"},
     {"x": "$f_x(0,0)=0$ perché $f(0,0)=0$"},
     {"x": "applicando la regola della catena all'espressione del numeratore"},
    ],
    "hint": "La formula esplicita vale solo FUORI dall'origine: derivarla e valutarla in $(0,0)$ è un errore, quel valore non è la derivata parziale nel punto.",
    "sol": "Nel punto di raccordo la parziale è per definizione il limite del rapporto incrementale lungo l'asse: $f_x(0,0)=\\lim_{h\\to 0}\\frac{f(h,0)-f(0,0)}{h}$. Le regole di derivazione presuppongono che valga la stessa formula in un intorno, cosa falsa in $(0,0)$ per una funzione spezzata (trappola 20230907, 14feb25)."
   }
  ]
 },
 {
  "pool": "diff",
  "src": "20230907 Es.1 · formula del gradiente",
  "steps": [
   {
    "t": "La formula $\\partial_v f(0,0)=\\nabla f(0,0)\\cdot v$ (derivata direzionale = gradiente per il versore):",
    "opts": [
     {"x": "vale SOLO se $f$ è differenziabile in $(0,0)$; se non lo è, va calcolata dalla definizione", "c": true},
     {"x": "vale sempre, appena esistono $f_x(0,0)$ e $f_y(0,0)$"},
     {"x": "vale se $f$ è continua in $(0,0)$"},
     {"x": "vale se esistono tutte le derivate direzionali"}
    ],
    "hint": "Usare $\\nabla f\\cdot v$ quando $f$ non è differenziabile è l'errore più insidioso: le direzionali possono esistere ma NON essere lineari in $v$.",
    "sol": "La linearità $\\partial_v f=\\nabla f\\cdot v$ è una CONSEGUENZA della differenziabilità, non della sola derivabilità. Senza differenziabilità le direzionali si calcolano una per una come $\\lim_{t\\to 0}\\frac{f(tv)-f(0,0)}{t}$ e in genere non seguono la formula del gradiente."
   }
  ]
 },
 {
  "pool": "diff",
  "src": "20230504 Es.1 · soglie diverse",
  "steps": [
   {
    "t": "Per la stessa funzione a parametro, la soglia del parametro per la DIFFERENZIABILITÀ rispetto a quella per la CONTINUITÀ è:",
    "opts": [
     {"x": "più restrittiva: la differenziabilità aggiunge un fattore $\\|(x,y)\\|$ al denominatore", "c": true},
     {"x": "identica: continuità e differenziabilità danno la stessa soglia"},
     {"x": "meno restrittiva: differenziabile è più facile che continuo"},
     {"x": "senza relazione fissa tra le due"}
    ],
    "hint": "Continuità: studi $|f|$. Differenziabilità: studi $|f|/\\rho$. Il $\\rho$ in più abbassa di uno l'esponente netto, quindi alza la richiesta sul parametro.",
    "sol": "In polari $|f|\\sim\\rho^{p-2\\beta}$: continua $\\iff p-2\\beta>0$. Per la differenziabilità (con $\\nabla f(0,0)=0$) si studia $\\frac{|f|}{\\rho}\\sim\\rho^{p-1-2\\beta}$: diff. $\\iff p-1-2\\beta>0$, soglia più stretta. Es. 20230504: continua $\\beta<5/2$, differenziabile $\\beta<2$. Non confondere le due soglie."
   }
  ]
 },
 {
  "pool": "diff",
  "src": "20230123 Es.1 · negare la differenziabilità",
  "steps": [
   {
    "t": "Per DIMOSTRARE che $f$ (con $\\nabla f(0,0)=0$) non è differenziabile in $(0,0)$, cosa basta e cosa NON basta?",
    "opts": [
     {"x": "Basta una direzione lungo cui $f/\\rho$ non tende a $0$; NON basta controllare solo gli assi", "c": true},
     {"x": "Basta verificare che $f$ è discontinua sugli assi"},
     {"x": "Bisogna verificare il limite lungo tutte le rette per concludere che è differenziabile"},
     {"x": "Basta che $f_x(0,0)\\ne f_y(0,0)$"}
    ],
    "hint": "Per NEGARE serve un solo controesempio di direzione. Per AFFERMARE serve invece una stima uniforme in $\\theta$: gli assi da soli non bastano mai.",
    "sol": "Il resto è $\\frac{f(x,y)-\\nabla f\\cdot(x,y)}{\\rho}$. Se lungo UNA direzione (tipicamente $y=x$) questo tende a una costante $\\ne 0$, il limite globale non è $0$: non differenziabile. Sugli assi $f$ è spesso nulla, quindi controllare solo gli assi non vede la patologia (trappola 20230123)."
   }
  ]
 },
 {
  "pool": "diff",
  "src": "20220622 Es.1 · dicotomia |t|^α/t",
  "steps": [
   {
    "t": "Studiando una derivata direzionale compare $\\lim_{t\\to 0}\\dfrac{|t|^\\alpha}{t}$ (con $\\alpha>0$). Quando esiste finito?",
    "opts": [
     {"x": "vale $0$ se $\\alpha>1$; se $\\alpha=1$ i limiti destro/sinistro sono $\\pm 1$ (finiti ma diversi); se $\\alpha<1$ diverge", "c": true},
     {"x": "esiste sempre e vale $0$"},
     {"x": "esiste finito solo se $\\alpha<1$"},
     {"x": "non esiste mai, per la presenza di $|t|$"}
    ],
    "hint": "Scrivi $\\frac{|t|^\\alpha}{t}=\\operatorname{sgn}(t)\\,|t|^{\\alpha-1}$: tutto dipende dal segno di $\\alpha-1$.",
    "sol": "$\\frac{|t|^\\alpha}{t}=\\operatorname{sgn}(t)\\,|t|^{\\alpha-1}$. Se $\\alpha>1\\Rightarrow 0$; se $\\alpha=1\\Rightarrow\\pm 1$ (esiste come limite unilaterale, non bilaterale); se $\\alpha<1\\Rightarrow\\pm\\infty$. Questa dicotomia governa l'esistenza delle derivate direzionali nei problemi a parametro (20220622)."
   }
  ]
 },
 {
  "pool": "diff",
  "src": "tipo C · manuale · stima uniforme in θ",
  "steps": [
   {
    "t": "In coordinate polari si ottiene $|f|\\le C(\\theta)\\,\\rho^{\\,p}$ con $p>0$. Quando questo garantisce $f\\to 0$?",
    "opts": [
     {"x": "se la costante $C(\\theta)$ è LIMITATA in $\\theta$ (stima uniforme); allora $|f|\\le C_{\\max}\\rho^p\\to 0$", "c": true},
     {"x": "sempre, perché $\\rho^p\\to 0$"},
     {"x": "mai: in polari non si può concludere nulla sui limiti"},
     {"x": "solo se $f$ non dipende da $\\theta$"}
    ],
    "hint": "Se $C(\\theta)$ potesse esplodere per certi $\\theta$, il prodotto $C(\\theta)\\rho^p$ non tenderebbe uniformemente a $0$ e il limite direzionale potrebbe cambiare.",
    "sol": "Il limite $(x,y)\\to 0$ è $\\rho\\to 0$ per OGNI $\\theta$: serve che il maggiorante $C(\\theta)\\rho^p$ vada a $0$ indipendentemente da $\\theta$. Se $\\sup_\\theta C(\\theta)=C_{\\max}<\\infty$, allora $|f|\\le C_{\\max}\\rho^p\\to 0$. Se invece il rapporto tende a $g(\\theta)\\ne$ cost., il limite NON esiste (dipende dalla direzione)."
   }
  ]
 },
 {
  "pool": "diff",
  "src": "14feb25 Es.2 · il gradiente all'origine",
  "steps": [
   {
    "t": "Prima di scrivere il quoziente della differenziabilità, il vettore $\\nabla f(0,0)=\\big(f_x(0,0),f_y(0,0)\\big)$:",
    "opts": [
     {"x": "va calcolato dalla definizione (rapporti incrementali sugli assi); solo dopo entra nel resto $f-\\nabla f\\cdot(x,y)$", "c": true},
     {"x": "è sempre $(0,0)$ per le funzioni spezzate"},
     {"x": "si legge dai coefficienti dei termini lineari della formula esplicita"},
     {"x": "non serve: la differenziabilità non usa il gradiente"}
    ],
    "hint": "Molte funzioni sono nulle sugli assi $\\Rightarrow\\nabla f(0,0)=0$, ma NON tutte: es. 14feb25 ha $f_x(0,0)=1$, $f_y(0,0)=2$.",
    "sol": "Il resto da studiare è $\\frac{f(x,y)-f(0,0)-f_x(0,0)x-f_y(0,0)y}{\\rho}$: servono i veri $f_x(0,0),f_y(0,0)$ dal limite del rapporto incrementale. Assumerli $=0$ è corretto solo se $f$ è nulla sugli assi. In 14feb25 valgono $1$ e $2$: sbagliarli falsa tutto il numeratore."
   }
  ]
 },
 {
  "pool": "diff",
  "src": "20230621 Es.1 · due termini",
  "steps": [
   {
    "t": "$f=g_1+g_2$, con $g_1$ differenziabile in $(0,0)$ sse $\\beta<5/2$ e $g_2$ differenziabile sse $\\beta>1/2$. Per quali $\\beta$ è differenziabile $f$?",
    "opts": [
     {"x": "$1/2<\\beta<5/2$: serve che ENTRAMBI i termini siano differenziabili (intersezione)", "c": true},
     {"x": "$\\beta<5/2$: basta il termine con la soglia più ampia"},
     {"x": "$\\beta>1/2$: basta un termine differenziabile"},
     {"x": "ogni $\\beta>0$: la somma è sempre differenziabile"}
    ],
    "hint": "La differenziabilità è stabile per somma: $f$ diff. se e solo se lo sono tutti gli addendi. Prendi l'intersezione, cioè la condizione più restrittiva.",
    "sol": "Somma di differenziabili è differenziabile; e se $g_1$ diff. e $f=g_1+g_2$ diff., allora $g_2=f-g_1$ diff. Quindi $f$ diff. $\\iff$ $g_1$ e $g_2$ entrambi diff. $\\iff 1/2<\\beta<5/2$. Non basta che uno solo lo sia (trappola 20230621)."
   }
  ]
 },
 {
  "pool": "diff",
  "src": "tipo C · manuale · significato geometrico",
  "steps": [
   {
    "t": "Che cosa aggiunge la differenziabilità in $(0,0)$ rispetto alla sola esistenza delle parziali?",
    "opts": [
     {"x": "l'esistenza di un piano tangente che approssima $f$ con errore $o(\\|(x,y)\\|)$ in TUTTE le direzioni", "c": true},
     {"x": "solo la continuità di $f$"},
     {"x": "l'esistenza delle derivate seconde"},
     {"x": "nulla di geometrico: è solo una condizione algebrica sulle parziali"}
    ],
    "hint": "Le parziali danno le pendenze lungo due direzioni. La differenziabilità chiede che il piano costruito con quelle pendenze approssimi bene $f$ ovunque intorno.",
    "sol": "Differenziabilità $=$ esistenza dell'applicazione lineare $L(h)=\\nabla f(0,0)\\cdot h$ (il piano tangente $z=f(0,0)+\\nabla f\\cdot h$) con $f(h)-f(0,0)-L(h)=o(\\|h\\|)$. Le parziali fissano i coefficienti di $L$; la differenziabilità certifica che $L$ approssima $f$ in ogni direzione, non solo lungo gli assi."
   }
  ]
 },

 /* ===================== ESERCIZI (16) ===================== */

 {
  "pool": "diff",
  "src": "20250214 / 14feb25 Es.2 · $f_x$ dalla definizione",
  "steps": [
   {
    "t": "Sia $f(x,y)=\\dfrac{\\sin(x^3y^2)+x^3+2y^3}{x^2+y^2}$ per $(x,y)\\ne(0,0)$, $f(0,0)=0$. Quanto vale $f_x(0,0)$?",
    "opts": [
     {"x": "$f_x(0,0)=\\lim_{h\\to 0}\\dfrac{f(h,0)}{h}=\\lim_{h\\to 0}\\dfrac{h^3/h^2}{h}=1$", "c": true},
     {"x": "si deriva la formula con la regola del quoziente e si valuta in $(0,0)$"},
     {"x": "$f_x(0,0)=0$ perché $f(0,0)=0$"},
     {"x": "$f_x(0,0)$ non esiste"}
    ],
    "hint": "Metti $y=0$: molti termini spariscono. La parziale nell'origine è il limite del rapporto incrementale lungo l'asse $x$, non la derivata della formula.",
    "sol": "$f(h,0)=\\frac{\\sin 0+h^3+0}{h^2}=\\frac{h^3}{h^2}=h$, quindi $\\frac{f(h,0)}{h}=1\\to 1$: $f_x(0,0)=1$. Definizione di derivata parziale come limite del rapporto incrementale; la regola del quoziente non vale in $(0,0)$ (formula spezzata). Src 14feb25 es.2."
   }
  ]
 },
 {
  "pool": "diff",
  "src": "14feb25 Es.2 · $f_y$ dalla definizione",
  "steps": [
   {
    "t": "Per la stessa $f(x,y)=\\dfrac{\\sin(x^3y^2)+x^3+2y^3}{x^2+y^2}$, $f(0,0)=0$, quanto vale $f_y(0,0)$?",
    "opts": [
     {"x": "$f_y(0,0)=\\lim_{k\\to 0}\\dfrac{f(0,k)}{k}=\\lim_{k\\to 0}\\dfrac{2k^3/k^2}{k}=2$", "c": true},
     {"x": "$f_y(0,0)=1$, come $f_x(0,0)$"},
     {"x": "$f_y(0,0)=0$"},
     {"x": "$f_y(0,0)=3$, dal coefficiente di $y^3$"}
    ],
    "hint": "Metti $x=0$: resta solo il termine $2y^3$ al numeratore. Poi rapporto incrementale sull'asse $y$.",
    "sol": "$f(0,k)=\\frac{0+0+2k^3}{k^2}=2k$, quindi $\\frac{f(0,k)}{k}=2\\to 2$: $f_y(0,0)=2$. Definizione di parziale lungo l'asse $y$. Quindi $\\nabla f(0,0)=(1,2)\\ne(0,0)$: attenzione, questa funzione NON è nulla sugli assi. Src 14feb25 es.2."
   }
  ]
 },
 {
  "pool": "diff",
  "src": "20220622 Es.1 · continuità (soglia $\\alpha$)",
  "steps": [
   {
    "t": "Sia $f(x,y)=\\dfrac{|y|^\\alpha\\tan(x^4)}{(x^2+y^2)^2}$, $f(0,0)=0$. Per quali $\\alpha>0$ è CONTINUA in $(0,0)$?",
    "opts": [
     {"x": "ogni $\\alpha>0$: $|f|\\le\\dfrac{\\rho^\\alpha\\,\\rho^4}{\\rho^4}=\\rho^\\alpha\\to 0$", "c": true},
     {"x": "$\\alpha>1$"},
     {"x": "$\\alpha>2$"},
     {"x": "$\\alpha>4$"}
    ],
    "hint": "Usa $\\tan(x^4)\\sim x^4$, $|y|\\le\\rho$, $x^4\\le\\rho^4$, $(x^2+y^2)^2=\\rho^4$. Conta gli esponenti netti di $\\rho$.",
    "sol": "Vicino all'origine $\\tan(x^4)\\sim x^4$, quindi $|f|\\le\\frac{|y|^\\alpha x^4}{\\rho^4}\\le\\frac{\\rho^\\alpha\\rho^4}{\\rho^4}=\\rho^\\alpha$. La stima è uniforme in $\\theta$ e $\\rho^\\alpha\\to 0$ per ogni $\\alpha>0$: continua. Criterio: $|f|\\le C\\rho^p$ con $p>0\\Rightarrow$ limite $0$. Src 20220622 es.1."
   }
  ]
 },
 {
  "pool": "diff",
  "src": "20220622 Es.1 · differenziabilità (soglia $\\alpha$)",
  "steps": [
   {
    "t": "Per la stessa $f=\\dfrac{|y|^\\alpha\\tan(x^4)}{(x^2+y^2)^2}$, sapendo che $f\\equiv 0$ sugli assi (quindi $\\nabla f(0,0)=0$), per quali $\\alpha$ è DIFFERENZIABILE in $(0,0)$?",
    "opts": [
     {"x": "$\\alpha>1$: si studia $\\dfrac{|f|}{\\rho}\\le\\dfrac{\\rho^\\alpha\\rho^4}{\\rho^5}=\\rho^{\\alpha-1}\\to 0\\iff\\alpha>1$", "c": true},
     {"x": "ogni $\\alpha>0$, come la continuità"},
     {"x": "$\\alpha>2$"},
     {"x": "$\\alpha>1/2$"}
    ],
    "hint": "Con $\\nabla f(0,0)=0$ il resto è $f/\\rho$: rispetto alla continuità c'è un $\\rho$ in più al denominatore, quindi la soglia sale.",
    "sol": "Con $\\nabla f(0,0)=0$ il quoziente della differenziabilità è $\\frac{|f-0|}{\\rho}=\\frac{|f|}{\\rho}\\le\\frac{\\rho^{\\alpha+4}}{\\rho^5}=\\rho^{\\alpha-1}\\to 0\\iff\\alpha>1$. Definizione di differenziabilità (resto $o(\\rho)$). Soglia $\\alpha>1$, più restrittiva della continuità $\\alpha>0$. Src 20220622 es.1."
   }
  ]
 },
 {
  "pool": "diff",
  "src": "20230504 Es.1 · continuità → differenziabilità",
  "steps": [
   {
    "t": "Sia $f(x,y)=\\dfrac{\\sin y\\,(1-\\cos(xy))}{(x^2+y^2)^\\beta}$, $f(0,0)=0$, con numeratore $\\sim\\tfrac12 x^2y^3$. Per quali $\\beta$ è CONTINUA in $(0,0)$?",
    "opts": [
     {"x": "$\\beta<5/2$: in polari $|f|\\sim\\rho^{\\,5-2\\beta}\\to 0\\iff 5-2\\beta>0$", "c": true},
     {"x": "$\\beta<2$"},
     {"x": "$\\beta<5$"},
     {"x": "ogni $\\beta>0$"}
    ],
    "hint": "Il numeratore è $O(\\rho^5)$, il denominatore $\\rho^{2\\beta}$: la continuità chiede esponente netto positivo.",
    "sol": "$\\sin y\\sim y$, $1-\\cos(xy)\\sim\\frac{(xy)^2}{2}$: numeratore $\\sim\\frac12 x^2y^3=O(\\rho^5)$. Quindi $|f|\\sim\\rho^{5-2\\beta}\\to 0\\iff\\beta<5/2$. Soglia di CONTINUITÀ $\\beta<5/2$. Src 20230504 es.1.",
    "cont": "Continua &rarr; ora la differenziabilità"
   },
   {
    "t": "Per la stessa $f$ (con $\\nabla f(0,0)=(0,0)$), la soglia di DIFFERENZIABILITÀ coincide con $\\beta<5/2$?",
    "opts": [
     {"x": "No: si studia $\\dfrac{|f|}{\\rho}\\sim\\rho^{\\,4-2\\beta}\\to 0\\iff\\beta<2$, soglia più restrittiva", "c": true},
     {"x": "Sì, coincidono: $\\beta<5/2$"},
     {"x": "Sì, $\\beta<5$"},
     {"x": "La differenziabilità vale ovunque c'è continuità"}
    ],
    "hint": "La differenziabilità aggiunge il $\\|(x,y)\\|=\\rho$ del resto al denominatore: l'esponente netto cala di $1$.",
    "sol": "Con $\\nabla f(0,0)=0$: $\\frac{|f|}{\\rho}\\sim\\rho^{4-2\\beta}\\to 0\\iff\\beta<2$. Soglia di DIFFERENZIABILITÀ $\\beta<2<5/2$: strettamente più piccola della continuità. Definizione del resto $o(\\rho)$. Src 20230504 es.1."
   }
  ]
 },
 {
  "pool": "diff",
  "src": "20230123 Es.1 · non differenziabile via $y=x$",
  "steps": [
   {
    "t": "Per mostrare che $f(x,y)=\\dfrac{(x^2+2xy)\\sin(xy)}{(x^2+y^2)^{3/2}}$ (con $\\nabla f(0,0)=0$) NON è differenziabile in $(0,0)$, la via più rapida è:",
    "opts": [
     {"x": "calcolare $\\lim\\frac{f}{\\rho}$ lungo $y=x$: dà una costante $\\ne 0$, quindi il resto non è $o(\\rho)$", "c": true},
     {"x": "verificare che $f$ è continua in $(0,0)$"},
     {"x": "controllare il limite solo lungo gli assi $x$ e $y$"},
     {"x": "calcolare $f_x(0,0)$ e $f_y(0,0)$"}
    ],
    "hint": "Per NEGARE la differenziabilità basta UNA direzione lungo cui $f/\\rho\\not\\to 0$: la diagonale $y=x$ è la scelta standard.",
    "sol": "Il quoziente $\\frac{f}{\\rho}$ lungo $y=x$: numeratore $\\sim (x^2+2x^2)(x^2)=3x^4$, denominatore $(2x^2)^{3/2}\\cdot(\\sqrt2|x|)=$ ordine $x^4$; il rapporto tende a una costante $\\ne 0$. Quindi il resto non è $o(\\rho)$: non differenziabile. Gli assi (dove $f=0$) non lo rivelano. Src 20230123 es.1."
   }
  ]
 },
 {
  "pool": "diff",
  "src": "10feb22 Es.1 · continuità (soglia $a$)",
  "steps": [
   {
    "t": "Sia $f(x,y)=\\dfrac{e^{x^4y^2}-1}{(x^2+y^2)^a}+xy$, $f(0,0)=0$. Per quali $a>0$ è CONTINUA in $(0,0)$?",
    "opts": [
     {"x": "$a<3$: usando $e^t-1\\sim t$, la parte con quoziente è $\\sim\\dfrac{x^4y^2}{\\rho^{2a}}\\le\\rho^{6-2a}\\to 0\\iff a<3$", "c": true},
     {"x": "$a<5/2$"},
     {"x": "$a<2$"},
     {"x": "ogni $a>0$"}
    ],
    "hint": "Limite notevole $\\frac{e^t-1}{t}\\to 1$ con $t=x^4y^2$: il numeratore si comporta come $x^4y^2$, di grado $6$. Il termine $xy$ è continuo e non pesa.",
    "sol": "$e^{x^4y^2}-1\\sim x^4y^2=O(\\rho^6)$, quindi la parte col quoziente è $\\le\\rho^{6-2a}\\to 0\\iff a<3$; $xy\\to 0$ è continuo. Continua $\\iff a<3$. Criterio: stima $|f|\\le C\\rho^p$, $p>0$. Src 10feb22 es.1."
   }
  ]
 },
 {
  "pool": "diff",
  "src": "10feb22 Es.1 · differenziabilità (soglia $a$)",
  "steps": [
   {
    "t": "Per la stessa $f=\\dfrac{e^{x^4y^2}-1}{(x^2+y^2)^a}+xy$: sapendo che $\\nabla f(0,0)=(0,0)$, per quali $a$ è DIFFERENZIABILE in $(0,0)$?",
    "opts": [
     {"x": "$a<5/2$: la parte col quoziente dà $\\dfrac{|\\cdot|}{\\rho}\\le\\rho^{5-2a}\\to 0\\iff a<5/2$ (il termine $xy$ è già differenziabile)", "c": true},
     {"x": "$a<3$, come la continuità"},
     {"x": "$a<2$"},
     {"x": "ogni $a$ dove è continua"}
    ],
    "hint": "$xy$ è liscio (differenziabile). Per la parte col quoziente aggiungi un $\\rho$ al denominatore: da $\\rho^{6-2a}$ passi a $\\rho^{5-2a}$.",
    "sol": "$\\nabla f(0,0)=(0,0)$ ($e^{x^4y^2}-1$ è nulla sugli assi e $\\partial(xy)$ è $0$ in $0$). Il resto della parte col quoziente è $\\frac{x^4y^2/\\rho^{2a}}{\\rho}\\le\\rho^{5-2a}\\to 0\\iff a<5/2$; $xy$ è polinomio quindi differenziabile. Diff. $\\iff a<5/2$, contro continuità $a<3$. Src 10feb22 es.1."
   }
  ]
 },
 {
  "pool": "diff",
  "src": "20230621 Es.1 · due termini, intersezione",
  "steps": [
   {
    "t": "Sia $f(x,y)=\\dfrac{x^2\\log(1+x^2y^2)}{(x^2+y^2)^\\beta}+|xy|^\\beta$. Il primo termine è differenziabile per $\\beta<5/2$, il secondo per $\\beta>1/2$. Per quali $\\beta$ è differenziabile $f$?",
    "opts": [
     {"x": "$1/2<\\beta<5/2$: l'intersezione delle due condizioni (servono ENTRAMBI differenziabili)", "c": true},
     {"x": "$\\beta<5/2$: domina il primo termine"},
     {"x": "$\\beta>1/2$: basta il secondo"},
     {"x": "ogni $\\beta>0$"}
    ],
    "hint": "$\\log(1+x^2y^2)\\sim x^2y^2$: primo termine $\\sim\\rho^{6-2\\beta}$, secondo $|xy|^\\beta\\sim\\rho^{2\\beta}$. Ogni addendo ha la sua soglia; prendi l'intersezione.",
    "sol": "Primo termine $\\sim\\frac{x^4y^2}{\\rho^{2\\beta}}$: diff. (con $\\nabla=0$) $\\iff\\rho^{5-2\\beta}\\to 0\\iff\\beta<5/2$. Secondo $|xy|^\\beta\\sim\\rho^{2\\beta}$: diff. $\\iff\\rho^{2\\beta-1}\\to 0\\iff\\beta>1/2$. La somma è differenziabile $\\iff$ entrambi lo sono $\\iff 1/2<\\beta<5/2$. Src 20230621 es.1."
   }
  ]
 },
 {
  "pool": "diff",
  "src": "21lug25 Es.3 · continuità (soglia $\\alpha$)",
  "steps": [
   {
    "t": "Sia $f(x,y)=\\dfrac{e^{x^2(y-1)}-e^{y^2}}{(x^2+y^2)^\\alpha}$ per $(x,y)\\ne(0,0)$, $f(0,0)=0$. Per quali $\\alpha>0$ è CONTINUA in $(0,0)$?",
    "opts": [
     {"x": "$\\alpha<1$: il numeratore $\\sim x^2(y-1)-y^2$ è $O(\\rho^2)$ (domina $-x^2-y^2$), quindi $|f|\\le\\rho^{2-2\\alpha}\\to 0\\iff\\alpha<1$", "c": true},
     {"x": "$\\alpha<2$"},
     {"x": "$\\alpha<5/2$"},
     {"x": "ogni $\\alpha>0$"}
    ],
    "hint": "Sviluppa $e^u\\sim 1+u$ separatamente sui due esponenti: la differenza $1+x^2(y-1)-(1+y^2)=x^2y-x^2-y^2$ ha parte dominante di grado $2$.",
    "sol": "$e^{x^2(y-1)}-e^{y^2}\\approx x^2(y-1)-y^2=x^2y-x^2-y^2$; i termini dominanti $-x^2-y^2$ danno numeratore $O(\\rho^2)$. Quindi $|f|\\le C\\frac{\\rho^2}{\\rho^{2\\alpha}}=C\\rho^{2-2\\alpha}\\to 0\\iff\\alpha<1$. Continua $\\iff\\alpha<1$. Src 21lug25 es.3."
   }
  ]
 },
 {
  "pool": "diff",
  "src": "20230907 Es.1 · derivabile ma non differenziabile",
  "steps": [
   {
    "t": "Sia $f(x,y)=\\dfrac{x^4+y^4-\\sin(xy^2)}{x^2+y^2}$, $f(0,0)=0$. Quanto valgono $f_x(0,0)$ e $f_y(0,0)$?",
    "opts": [
     {"x": "entrambe $0$: $f(x,0)=\\frac{x^4}{x^2}=x^2\\Rightarrow f_x(0,0)=\\lim\\frac{x^2}{x}=0$; analogamente $f_y(0,0)=0$", "c": true},
     {"x": "$f_x(0,0)=1$, $f_y(0,0)=1$"},
     {"x": "non esistono, perché il denominatore si annulla"},
     {"x": "$f_x(0,0)=4$, $f_y(0,0)=4$ dai coefficienti di $x^4,y^4$"}
    ],
    "hint": "Metti $y=0$ (poi $x=0$): $\\sin$ e potenze incrociate spariscono. Rapporto incrementale.",
    "sol": "$f(x,0)=\\frac{x^4}{x^2}=x^2$, quindi $\\frac{f(x,0)}{x}=x\\to 0$: $f_x(0,0)=0$. Simmetricamente $f(0,y)=\\frac{y^4}{y^2}=y^2\\Rightarrow f_y(0,0)=0$. Quindi $\\nabla f(0,0)=(0,0)$. Definizione di derivata parziale. Src 20230907 es.1.",
    "cont": "Continua &rarr; è differenziabile?"
   },
   {
    "t": "Con $\\nabla f(0,0)=0$, $f$ è differenziabile in $(0,0)$?",
    "opts": [
     {"x": "No: $\\dfrac{f}{\\rho}$ contiene $-\\dfrac{\\sin(xy^2)}{\\rho^3}\\sim-\\dfrac{xy^2}{\\rho^3}=-\\cos\\theta\\sin^2\\theta$, che dipende da $\\theta$", "c": true},
     {"x": "Sì: le parziali esistono, quindi è differenziabile"},
     {"x": "Sì, perché $f$ è continua in $(0,0)$"},
     {"x": "Non si può stabilire senza le derivate seconde"}
    ],
    "hint": "Il termine $x^4+y^4$ dà $\\rho^2\\to 0$, innocuo; è $\\sin(xy^2)\\sim xy^2$ (grado $3$) diviso $\\rho^3$ a lasciare una funzione di $\\theta$.",
    "sol": "$\\frac{f}{\\rho}=\\frac{x^4+y^4-\\sin(xy^2)}{\\rho^3}$. La parte $\\frac{x^4+y^4}{\\rho^3}\\sim\\rho\\to 0$; ma $\\frac{-\\sin(xy^2)}{\\rho^3}\\sim\\frac{-xy^2}{\\rho^3}=-\\cos\\theta\\sin^2\\theta$ dipende dalla direzione. Il limite del resto NON è $0$: non differenziabile, pur essendo continua e derivabile. Src 20230907 es.1."
   }
  ]
 },
 {
  "pool": "diff",
  "src": "20220622 Es.1 · derivate direzionali",
  "steps": [
   {
    "t": "Per $f=\\dfrac{|y|^\\alpha\\tan(x^4)}{(x^2+y^2)^2}$ ($f(0,0)=0$), la derivata direzionale $\\partial_v f(0,0)$ lungo $v=(v_1,v_2)$ con $v_1v_2\\ne 0$ esiste:",
    "opts": [
     {"x": "sse $\\alpha>1$: $\\dfrac{f(tv)}{t}=\\dfrac{|t|^\\alpha}{t}\\cdot\\dfrac{|v_2|^\\alpha v_1^4}{(v_1^2+v_2^2)^2}$, e $\\frac{|t|^\\alpha}{t}\\to 0\\iff\\alpha>1$", "c": true},
     {"x": "per ogni $\\alpha>0$"},
     {"x": "sse $\\alpha<1$"},
     {"x": "mai, perché compare $|t|$"}
    ],
    "hint": "Sostituisci $x=tv_1$, $y=tv_2$ e semplifica $t$: resta $\\frac{|t|^\\alpha}{t}$ per una costante direzionale. Applica la dicotomia di $\\frac{|t|^\\alpha}{t}$.",
    "sol": "$f(tv)=\\frac{|t|^\\alpha|v_2|^\\alpha\\,t^4v_1^4}{t^4(v_1^2+v_2^2)^2}$, quindi $\\frac{f(tv)}{t}=\\frac{|t|^\\alpha}{t}\\cdot\\frac{|v_2|^\\alpha v_1^4}{(v_1^2+v_2^2)^2}$. Poiché $\\frac{|t|^\\alpha}{t}\\to 0\\iff\\alpha>1$, la direzionale esiste (e vale $0$) sse $\\alpha>1$; sugli assi ($v_1v_2=0$) esiste sempre ed è $0$. Definizione $\\partial_v f=\\lim_{t\\to0}\\frac{f(tv)-f(0,0)}{t}$. Src 20220622 es.1."
   }
  ]
 },
 {
  "pool": "diff",
  "src": "tipo C · manuale · rette vs parabola",
  "steps": [
   {
    "t": "Per $f(x,y)=\\dfrac{x^2y}{x^4+y^2}$, $f(0,0)=0$, esiste $\\lim_{(x,y)\\to(0,0)}f$ (quindi $f$ continua in $0$)?",
    "opts": [
     {"x": "No: lungo ogni retta $y=mx$ il limite è $0$, ma lungo la parabola $y=x^2$ vale $\\tfrac12\\ne 0$", "c": true},
     {"x": "Sì, vale $0$: lungo tutte le rette $y=mx$ tende a $0$"},
     {"x": "Sì, vale $\\tfrac12$"},
     {"x": "No, perché $f$ non è definita in $(0,0)$"}
    ],
    "hint": "Il limite lungo tutte le RETTE non basta: prova un cammino di ordine diverso, come $y=x^2$, adattato al denominatore $x^4+y^2$.",
    "sol": "Lungo $y=mx$: $\\frac{x^2\\cdot mx}{x^4+m^2x^2}=\\frac{mx}{x^2+m^2}\\to 0$. Lungo $y=x^2$: $\\frac{x^2\\cdot x^2}{x^4+x^4}=\\frac12$. Due cammini danno limiti diversi $\\Rightarrow$ il limite non esiste, $f$ non è continua in $0$. Morale: controllare solo le rette è insufficiente."
   }
  ]
 },
 {
  "pool": "diff",
  "src": "tipo C · manuale · derivabile ma discontinua",
  "steps": [
   {
    "t": "Sia $f(x,y)=\\dfrac{xy}{x^2+y^2}$, $f(0,0)=0$. Cosa è vero in $(0,0)$?",
    "opts": [
     {"x": "$f_x(0,0)=f_y(0,0)=0$ ma $f$ NON è continua (lungo $y=x$ vale $\\tfrac12$): derivabile $\\not\\Rightarrow$ continua", "c": true},
     {"x": "$f$ è continua e differenziabile"},
     {"x": "$f_x(0,0)$ e $f_y(0,0)$ non esistono"},
     {"x": "$f$ è continua ma non derivabile"}
    ],
    "hint": "Sugli assi $f\\equiv 0$, quindi le parziali sono $0$. Ma lungo la diagonale $y=x$ la funzione è costante $\\ne 0$: guarda cosa fa fuori dagli assi.",
    "sol": "$f(x,0)=0$ e $f(0,y)=0\\Rightarrow f_x(0,0)=f_y(0,0)=0$: derivabile. Lungo $y=x$: $\\frac{x^2}{2x^2}=\\frac12$, mentre sugli assi $f=0$: limite inesistente, $f$ discontinua in $0$. Controesempio canonico: l'esistenza delle parziali (sguardo solo sugli assi) non vede la discontinuità."
   }
  ]
 },
 {
  "pool": "diff",
  "src": "22gen24 Es.1 · gradiente e derivata direzionale",
  "steps": [
   {
    "t": "Sia $f(x,y,z)=\\sqrt{x^2+y^2+z^2+1}+x-z$ (liscia: argomento sempre $\\ge 1$). Quanto vale $\\nabla f(0,0,0)$?",
    "opts": [
     {"x": "$(1,0,-1)$: $\\nabla f=\\Big(\\tfrac{x}{\\sqrt{\\cdots}}+1,\\ \\tfrac{y}{\\sqrt{\\cdots}},\\ \\tfrac{z}{\\sqrt{\\cdots}}-1\\Big)$ valutato in $0$, con $\\sqrt{\\cdots}=1$", "c": true},
     {"x": "$(0,0,0)$"},
     {"x": "$(1,1,-1)$"},
     {"x": "non definito, la radice non è derivabile in $0$"}
    ],
    "hint": "L'argomento della radice vale $1$ nell'origine, quindi $\\sqrt{\\cdots}=1$ e $f$ è $C^\\infty$ lì: usa le normali regole di derivazione.",
    "sol": "$\\partial_x=\\frac{x}{\\sqrt{x^2+y^2+z^2+1}}+1$, $\\partial_y=\\frac{y}{\\sqrt{\\cdots}}$, $\\partial_z=\\frac{z}{\\sqrt{\\cdots}}-1$. In $(0,0,0)$ la radice è $1$: $\\nabla f=(1,0,-1)$. Qui la formula esplicita è liscia in un intorno (non è spezzata), quindi le regole di derivazione valgono. Src 22gen24 es.1.",
    "cont": "Continua &rarr; la derivata direzionale"
   },
   {
    "t": "Poiché $f$ è differenziabile in $(0,0,0)$, quanto vale $\\partial_v f(0,0,0)$ lungo un versore $v=(v_1,v_2,v_3)$?",
    "opts": [
     {"x": "$\\partial_v f=\\nabla f\\cdot v=v_1-v_3$: la formula del gradiente vale perché $f$ è differenziabile", "c": true},
     {"x": "$\\partial_v f=v_1+v_3$"},
     {"x": "va calcolata dalla definizione, la formula del gradiente non si applica"},
     {"x": "$\\partial_v f=|v_1-v_3|$"}
    ],
    "hint": "$f$ è liscia $\\Rightarrow$ differenziabile $\\Rightarrow$ $\\partial_v f=\\nabla f\\cdot v$. Fai il prodotto scalare con $\\nabla f=(1,0,-1)$.",
    "sol": "Essendo $f$ differenziabile, $\\partial_v f(0,0,0)=\\nabla f(0,0,0)\\cdot v=(1,0,-1)\\cdot(v_1,v_2,v_3)=v_1-v_3$. Teorema: diff. $\\Rightarrow$ direzionali esistono e valgono $\\nabla f\\cdot v$. Qui è lecito proprio perché la differenziabilità è garantita dalla liscezza. Src 22gen24 es.1."
   }
  ]
 }

];

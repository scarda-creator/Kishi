Q.conserv = [

  /* ===================== CONCETTUALI (15) ===================== */

  { pool:"conserv", src:"tipo E · manuale (cap. Campi vettoriali)", steps:[{
      t:"Cosa significa, per definizione, che un campo $F$ è <b>conservativo</b> su un aperto $\\Omega$?",
      opts:[
        {x:"Esiste un campo scalare $U$ tale che $F=\\nabla U$",c:true},
        {x:"Vale $\\nabla\\times F=0$ in ogni punto di $\\Omega$"},
        {x:"Vale $\\nabla\\cdot F=0$ in ogni punto di $\\Omega$"},
        {x:"Il flusso di $F$ attraverso ogni superficie chiusa è nullo"}],
      hint:"Irrotazionale ($\\nabla\\times F=0$) e conservativo NON sono la definizione l'uno dell'altro: uno è conseguenza, non definizione.",
      sol:"<b>Conservativo = ammette potenziale.</b> Per definizione $F=\\nabla U$ per un opportuno scalare $U$ (il potenziale). Irrotazionalità e indipendenza dal cammino sono <i>caratterizzazioni</i> che ne seguono sotto ipotesi sul dominio, non la definizione. $\\nabla\\cdot F=0$ è la definizione di <i>solenoidale</i>, un'altra cosa."
    }]
  },

  { pool:"conserv", src:"tipo E · manuale (Teorema: conservativo $\\Rightarrow$ irrotazionale)", steps:[{
      t:"Perché ogni campo conservativo $F\\in C^1$ è necessariamente irrotazionale?",
      opts:[
        {x:"Perché $F=\\nabla U$ e vale l'identità $\\nabla\\times(\\nabla U)=0$",c:true},
        {x:"Perché il dominio è sempre semplicemente connesso"},
        {x:"Perché $\\nabla\\cdot(\\nabla U)=0$"},
        {x:"Non è vero: esistono campi conservativi con $\\nabla\\times F\\neq 0$"}],
      hint:"L'implicazione conservativo$\\Rightarrow$irrotazionale vale SEMPRE (per $F\\in C^1$), senza ipotesi sul dominio. È l'inversa che le richiede.",
      sol:"$F$ conservativo significa $F=\\nabla U$. Il rotore di un gradiente è identicamente nullo: $\\nabla\\times(\\nabla U)=0$ per il teorema di Schwarz sull'uguaglianza delle derivate miste ($U\\in C^2$). Quindi $\\nabla\\times F=0$. <b>Questa direzione non usa alcuna ipotesi sul dominio.</b> $\\nabla\\cdot(\\nabla U)=\\Delta U$ non è in generale nullo: quella è un'altra identità, sbagliata qui."
    }]
  },

  { pool:"conserv", src:"tipo E · manuale (trappola tipica) + 20230907 Es.2", steps:[{
      t:"Il campo $F(x,y)=\\dfrac{(-y,\\,x)}{x^2+y^2}$ su $\\mathbb{R}^2\\setminus\\{(0,0)\\}$ soddisfa $\\nabla\\times F=0$ ovunque. È conservativo?",
      opts:[
        {x:"No: il dominio $\\mathbb{R}^2\\setminus\\{0\\}$ non è semplicemente connesso, quindi $\\nabla\\times F=0$ non basta",c:true},
        {x:"Sì: $\\nabla\\times F=0$ è condizione necessaria e sufficiente per la conservatività"},
        {x:"Sì, ma solo perché $F$ è di classe $C^1$"},
        {x:"No, perché $\\nabla\\cdot F\\neq 0$"}],
      hint:"Irrotazionale $\\Rightarrow$ conservativo SOLO se il dominio è semplicemente connesso. Qui c'è un buco nell'origine.",
      sol:"<b>No.</b> È il controesempio-principe. $\\nabla\\times F=0$ in ogni punto del dominio, ma $\\mathbb{R}^2\\setminus\\{0\\}$ ha un buco: NON è semplicemente connesso. Il teorema inverso (irrotazionale $\\Rightarrow$ conservativo) richiede il dominio semplicemente connesso, quindi qui non si applica. Infatti la circolazione su un giro attorno all'origine vale $2\\pi\\neq 0$: incompatibile con l'esistenza di un potenziale."
    }]
  },

  { pool:"conserv", src:"tipo E · manuale + 20230907 Es.2", steps:[{
      t:"Qual è la prova <i>concreta</i> che $F(x,y)=\\dfrac{(-y,\\,x)}{x^2+y^2}$ non è conservativo, nonostante sia irrotazionale?",
      opts:[
        {x:"La sua circolazione lungo il cerchio unitario percorso in senso antiorario vale $2\\pi\\neq 0$",c:true},
        {x:"La sua divergenza è diversa da zero"},
        {x:"Non è definito nell'origine, quindi non è $C^1$"},
        {x:"Il suo rotore cambia segno lungo il cerchio"}],
      hint:"Se $F$ fosse conservativo, ogni integrale su una curva chiusa sarebbe zero. Basta esibirne uno diverso da zero.",
      sol:"Se $F=\\nabla U$, allora $\\oint_\\gamma F\\cdot d\\mathbf{r}=0$ su ogni curva chiusa (il potenziale torna al valore di partenza). Sul cerchio unitario $\\gamma(t)=(\\cos t,\\sin t)$, $t\\in[0,2\\pi]$: $F(\\gamma)=(-\\sin t,\\cos t)$, $\\gamma'=(-\\sin t,\\cos t)$, quindi $F\\cdot\\gamma'=\\sin^2 t+\\cos^2 t=1$ e $\\oint=\\int_0^{2\\pi}1\\,dt=2\\pi\\neq 0$. <b>Una circolazione non nulla su una curva chiusa dimostra che il potenziale non esiste.</b>"
    }]
  },

  { pool:"conserv", src:"tipo E · manuale (Teorema inverso su domini s.c.)", steps:[{
      t:"Quale insieme, tra i seguenti, NON è semplicemente connesso (e quindi può far fallire l'implicazione irrotazionale $\\Rightarrow$ conservativo)?",
      opts:[
        {x:"$\\mathbb{R}^2\\setminus\\{(0,0)\\}$",c:true},
        {x:"$\\mathbb{R}^3\\setminus\\{(0,0,0)\\}$"},
        {x:"Una palla aperta di $\\mathbb{R}^3$"},
        {x:"Tutto $\\mathbb{R}^2$"}],
      hint:"In $\\mathbb{R}^2$ togliere un punto crea un buco che i cammini non possono aggirare restando nel dominio. In $\\mathbb{R}^3$ togliere un punto no: si può scavalcare.",
      sol:"<b>$\\mathbb{R}^2\\setminus\\{0\\}$</b> non è semplicemente connesso: un laccio attorno all'origine non si contrae a un punto restando nel dominio. Invece $\\mathbb{R}^3\\setminus\\{0\\}$ SÌ lo è (un laccio si sfila scavalcando il punto nella terza dimensione); una palla e tutto $\\mathbb{R}^2$ sono convessi, quindi stellati, quindi semplicemente connessi. Su questi ultimi, irrotazionale $\\Rightarrow$ conservativo."
    }]
  },

  { pool:"conserv", src:"tipo E · manuale (Teorema inverso)", steps:[{
      t:"Su un aperto $\\Omega$ <b>semplicemente connesso</b>, quale condizione su $F\\in C^1$ garantisce che $F$ è conservativo?",
      opts:[
        {x:"$\\nabla\\times F=0$ su tutto $\\Omega$ (in $\\mathbb{R}^2$: $\\partial_y F_1=\\partial_x F_2$)",c:true},
        {x:"$\\nabla\\cdot F=0$ su tutto $\\Omega$"},
        {x:"$F$ limitato su $\\Omega$"},
        {x:"$F$ continuo su $\\Omega$"}],
      hint:"Su un dominio senza buchi, l'irrotazionalità diventa anche sufficiente, non solo necessaria.",
      sol:"Teorema inverso: se $\\Omega$ è semplicemente connesso e $\\nabla\\times F=0$, allora $F$ è conservativo su $\\Omega$. È la metà difficile della caratterizzazione: l'irrotazionalità è sempre necessaria, ma diventa <i>sufficiente</i> solo grazie all'ipotesi topologica sul dominio. La divergenza non c'entra: riguarda i campi solenoidali."
    }]
  },

  { pool:"conserv", src:"tipo E · manuale (indipendenza dal cammino)", steps:[{
      t:"Per un campo continuo $F$ su un aperto connesso, quale affermazione è <b>equivalente</b> all'essere conservativo?",
      opts:[
        {x:"$\\int_\\gamma F\\cdot d\\mathbf{r}$ dipende solo dagli estremi di $\\gamma$, non dal cammino",c:true},
        {x:"$\\int_\\gamma F\\cdot d\\mathbf{r}=0$ per ogni curva $\\gamma$, chiusa o aperta"},
        {x:"$\\int_\\gamma \\|F\\|\\,ds=0$ per ogni $\\gamma$"},
        {x:"$F$ ha modulo costante lungo ogni curva"}],
      hint:"L'indipendenza dal cammino non dice che ogni integrale è zero: dice che due cammini con gli stessi estremi danno lo stesso valore.",
      sol:"<b>Conservativo $\\iff$ integrale indipendente dal cammino.</b> Se $F=\\nabla U$, allora $\\int_\\gamma F\\cdot d\\mathbf{r}=U(B)-U(A)$, che dipende solo dagli estremi. Viceversa, se l'integrale dipende solo dagli estremi si costruisce $U(P)=\\int_{P_0}^{P}F\\cdot d\\mathbf{r}$. L'opzione sempre-zero è falsa per cammini aperti: vale zero solo sui cammini <i>chiusi</i>."
    }]
  },

  { pool:"conserv", src:"tipo E · manuale", steps:[{
      t:"$F$ è conservativo su un aperto connesso. Quanto vale $\\oint_\\gamma F\\cdot d\\mathbf{r}$ lungo una qualunque curva chiusa $\\gamma$ contenuta nel dominio?",
      opts:[
        {x:"$0$, perché gli estremi coincidono e $\\oint=U(B)-U(A)$ con $B=A$",c:true},
        {x:"$2\\pi$, come per ogni campo irrotazionale"},
        {x:"Dipende dalla lunghezza di $\\gamma$"},
        {x:"$U(A)$, valore del potenziale nel punto di partenza"}],
      hint:"Su una curva chiusa punto iniziale e finale coincidono: la differenza di potenziale è automaticamente nulla.",
      sol:"$\\oint_\\gamma F\\cdot d\\mathbf{r}=U(B)-U(A)$ e su una curva chiusa $B=A$, quindi il valore è $0$. È la firma dei campi conservativi. Il $2\\pi$ dell'esempio col buco NON contraddice questo: lì il campo <i>non</i> è conservativo, proprio perché il dominio non è semplicemente connesso e la circolazione non si annulla."
    }]
  },

  { pool:"conserv", src:"tipo E · manuale (forme differenziali)", steps:[{
      t:"Per una 1-forma $\\omega=P\\,dx+Q\\,dy$ (con $P,Q\\in C^1$), qual è la differenza tra <b>chiusa</b> ed <b>esatta</b>?",
      opts:[
        {x:"Chiusa: $\\partial_y P=\\partial_x Q$. Esatta: esiste $U$ con $dU=\\omega$. Esatta $\\Rightarrow$ chiusa, non viceversa in generale",c:true},
        {x:"Sono sinonimi: ogni forma chiusa è esatta"},
        {x:"Chiusa: esiste $U$ con $dU=\\omega$. Esatta: $\\partial_y P=\\partial_x Q$"},
        {x:"Esatta $\\Rightarrow$ chiusa è falso; vale solo il viceversa"}],
      hint:"Esatta = ha una primitiva (analogo di conservativo). Chiusa = passa il test delle derivate incrociate (analogo di irrotazionale).",
      sol:"<b>Esatta</b> $\\iff$ esiste il potenziale $U$ con $dU=\\omega$ (cioè $\\nabla U=(P,Q)$): è l'analogo di <i>conservativo</i>. <b>Chiusa</b> $\\iff$ $\\partial_y P=\\partial_x Q$: è l'analogo di <i>irrotazionale</i>. Esatta $\\Rightarrow$ chiusa sempre (derivate miste di $U$). Il viceversa vale solo su domini semplicemente connessi: $\\dfrac{-y\\,dx+x\\,dy}{x^2+y^2}$ è chiusa ma non esatta su $\\mathbb{R}^2\\setminus\\{0\\}$."
    }]
  },

  { pool:"conserv", src:"tipo E · manuale (Lemma di Poincaré)", steps:[{
      t:"Cosa afferma il <b>Lemma di Poincaré</b> per una 1-forma differenziale $\\omega$?",
      opts:[
        {x:"Su un aperto stellato, ogni forma chiusa è esatta",c:true},
        {x:"Ogni forma chiusa è esatta, su qualunque aperto"},
        {x:"Ogni forma esatta è chiusa, su qualunque aperto"},
        {x:"Su un aperto stellato, ogni forma esatta è chiusa"}],
      hint:"Esatta $\\Rightarrow$ chiusa è banale e non richiede ipotesi. Poincaré dà il verso difficile, con un'ipotesi geometrica.",
      sol:"<b>Poincaré:</b> su un aperto <i>stellato</i> (o più in generale semplicemente connesso) chiusa $\\Rightarrow$ esatta. È il verso non banale: fornisce la primitiva. Il verso opposto (esatta $\\Rightarrow$ chiusa) vale ovunque e non richiede alcuna ipotesi. L'ipotesi stellato è esattamente ciò che manca a $\\mathbb{R}^2\\setminus\\{0\\}$."
    }]
  },

  { pool:"conserv", src:"tipo E · manuale (caso 2D)", steps:[{
      t:"In $\\mathbb{R}^2$, per $F=(P,Q)$ su dominio semplicemente connesso, la conservatività equivale a una sola condizione scalare. Quale?",
      opts:[
        {x:"$\\partial_y P=\\partial_x Q$",c:true},
        {x:"$\\partial_x P=\\partial_y Q$"},
        {x:"$\\partial_x P+\\partial_y Q=0$"},
        {x:"$\\partial_y P=-\\partial_x Q$"}],
      hint:"In 2D il rotore ha una sola componente non banale, la terza: $(\\nabla\\times F)_3=\\partial_x Q-\\partial_y P$.",
      sol:"In 2D $\\nabla\\times F$ si riduce alla terza componente $\\partial_x Q-\\partial_y P$; annullarla dà <b>$\\partial_y P=\\partial_x Q$</b>. La scelta $\\partial_x P+\\partial_y Q=0$ è la condizione di <i>solenoidale</i> ($\\nabla\\cdot F=0$), da non confondere. Su dominio semplicemente connesso questa singola uguaglianza è necessaria e sufficiente."
    }]
  },

  { pool:"conserv", src:"tipo E · manuale (formula del potenziale)", steps:[{
      t:"$F$ è conservativo con potenziale $U$. Quanto vale il lavoro $\\int_\\gamma F\\cdot d\\mathbf{r}$ lungo una curva che va da $A$ a $B$?",
      opts:[
        {x:"$U(B)-U(A)$",c:true},
        {x:"$U(A)-U(B)$"},
        {x:"$\\tfrac12[U(B)+U(A)]$"},
        {x:"$\\int_\\gamma \\|\\nabla U\\|\\,ds$"}],
      hint:"È il teorema fondamentale del calcolo lungo le curve: il campo è il gradiente, l'integrale recupera la funzione agli estremi.",
      sol:"<b>$\\int_\\gamma F\\cdot d\\mathbf{r}=U(B)-U(A)$</b> (estremo finale meno iniziale): teorema fondamentale del calcolo per gli integrali di linea di un gradiente. Il segno conta: invertirlo è l'errore più comune. La formula col modulo $\\|\\nabla U\\|$ è l'integrale di <i>prima</i> specie, un oggetto diverso che non usa l'orientazione."
    }]
  },

  { pool:"conserv", src:"tipo E · manuale (trappola: conservativo vs solenoidale)", steps:[{
      t:"Un campo ha $\\nabla\\cdot F=0$ ovunque. Se ne può concludere che $F$ è conservativo?",
      opts:[
        {x:"No: $\\nabla\\cdot F=0$ è la condizione di campo solenoidale, che nulla dice sulla conservatività",c:true},
        {x:"Sì: divergenza nulla implica esistenza del potenziale"},
        {x:"Sì, ma solo se il dominio è semplicemente connesso"},
        {x:"No, perché serve anche $\\nabla\\cdot F>0$"}],
      hint:"Conservativo è controllato dal ROTORE ($\\nabla\\times F$), non dalla divergenza. Sono due proprietà indipendenti.",
      sol:"<b>No.</b> $\\nabla\\cdot F=0$ definisce i campi <i>solenoidali</i> (privi di sorgenti, flusso conservato). La conservatività dipende invece dal <i>rotore</i>: serve $\\nabla\\times F=0$ (più il dominio semplicemente connesso). Le due condizioni sono logicamente indipendenti: $F=(-y,x)$ ha $\\nabla\\cdot F=0$ ma non è conservativo, perché $\\nabla\\times F=(0,0,2)\\neq 0$."
    }]
  },

  { pool:"conserv", src:"tipo E · manuale", steps:[{
      t:"Se $U$ è un potenziale di $F$, quali altre funzioni sono ancora potenziali dello stesso $F$ (su un dominio connesso)?",
      opts:[
        {x:"Tutte e sole le $U+c$ con $c$ costante",c:true},
        {x:"Solo $U$ stessa: il potenziale è unico"},
        {x:"Tutte le $\\lambda U$ con $\\lambda$ costante"},
        {x:"Tutte le $U+g(x,y)$ con $g$ qualunque"}],
      hint:"Due potenziali dello stesso campo hanno gradiente uguale, quindi la loro differenza ha gradiente nullo. Su un connesso ciò forza una costante.",
      sol:"<b>$U$ è definito a meno di una costante additiva.</b> Se $\\nabla U_1=\\nabla U_2=F$, allora $\\nabla(U_1-U_2)=0$; su un dominio connesso una funzione a gradiente nullo è costante, quindi $U_1=U_2+c$. Per questo il potenziale si scrive sempre $+k$: la costante è irrilevante per il lavoro, che è una differenza."
    }]
  },

  { pool:"conserv", src:"tipo E · manuale (domini stellati)", steps:[{
      t:"Perché su un dominio <b>convesso</b> (es. una palla, un rettangolo) l'irrotazionalità basta per la conservatività?",
      opts:[
        {x:"Perché convesso $\\Rightarrow$ stellato $\\Rightarrow$ semplicemente connesso, quindi vale il Lemma di Poincaré",c:true},
        {x:"Perché su un convesso ogni campo è automaticamente conservativo"},
        {x:"Perché su un convesso $\\nabla\\times F=0$ implica $\\nabla\\cdot F=0$"},
        {x:"Non basta: serve comunque calcolare la circolazione"}],
      hint:"La catena di implicazioni topologiche: convesso $\\Rightarrow$ stellato rispetto a ogni suo punto $\\Rightarrow$ semplicemente connesso.",
      sol:"Un convesso è stellato rispetto a ogni suo punto, e ogni stellato è semplicemente connesso. Su un semplicemente connesso il teorema inverso (Poincaré) garantisce chiusa $\\Rightarrow$ esatta, cioè irrotazionale $\\Rightarrow$ conservativo. È il motivo per cui su tutto $\\mathbb{R}^n$ o su una palla non serve mai preoccuparsi del buco: non c'è."
    }]
  },

  /* ===================== ESERCIZI (15) ===================== */

  { pool:"conserv", src:"tipo E · manuale (esempio svolto cap.3)", steps:[{
      t:"Esercizio. Stabilisci se $F=(yz+2x,\\; xz+2y,\\; xy+2z)$ è conservativo su $\\mathbb{R}^3$.",
      opts:[
        {x:"Sì: $\\nabla\\times F=0$ e $\\mathbb{R}^3$ è semplicemente connesso",c:true},
        {x:"No: $\\nabla\\cdot F=6\\neq 0$"},
        {x:"Sì, ma solo perché $\\nabla\\cdot F=6>0$"},
        {x:"Non decidibile senza calcolare la circolazione"}],
      hint:"La conservatività si controlla col rotore, non con la divergenza. E su $\\mathbb{R}^3$ intero il dominio non ha buchi.",
      sol:"Calcolo il rotore. $(\\nabla\\times F)_1=\\partial_y(xy+2z)-\\partial_z(xz+2y)=x-x=0$; $(\\nabla\\times F)_2=\\partial_z(yz+2x)-\\partial_x(xy+2z)=y-y=0$; $(\\nabla\\times F)_3=\\partial_x(xz+2y)-\\partial_y(yz+2x)=z-z=0$. Dunque $\\nabla\\times F=0$. Poiché $\\mathbb{R}^3$ è semplicemente connesso, per il <b>teorema inverso</b> (irrotazionale + dominio s.c.) $F$ è conservativo. La divergenza $\\nabla\\cdot F=6$ è irrilevante per questa domanda."
    }]
  },

  { pool:"conserv", src:"tipo E · manuale (esempio svolto cap.3)", steps:[{
      t:"Esercizio (trabocchetto). Trova il potenziale $U$ di $F=(yz+2x,\\; xz+2y,\\; xy+2z)$.",
      opts:[
        {x:"$U=xyz+x^2+y^2+z^2+k$",c:true},
        {x:"$U=xyz+x^2+y^2+k$"},
        {x:"$U=xyz+2x+2y+2z+k$"},
        {x:"$U=xyz+x^2+y^2+z^2+xyz+k$"}],
      hint:"Dopo aver integrato $F_1$ in $x$, non dimenticare che le condizioni su $U_y$ e $U_z$ fanno emergere i termini $y^2$ E $z^2$: mancarne uno è l'errore tipico.",
      sol:"Integro $U_x=yz+2x$ in $x$: $U=xyz+x^2+g(y,z)$. Impongo $U_y=xz+g_y=xz+2y\\Rightarrow g_y=2y\\Rightarrow g=y^2+h(z)$. Impongo $U_z=xy+h'(z)=xy+2z\\Rightarrow h'=2z\\Rightarrow h=z^2+k$. Quindi <b>$U=xyz+x^2+y^2+z^2+k$</b>. Ricetta del potenziale: integra $F_1$, poi imponi $F_2$ e $F_3$ per ricostruire gli addendi mancanti. Fermarsi a $y^2$ dimentica il $z^2$."
    }]
  },

  { pool:"conserv", src:"22gen24 Es.3", steps:[{
      t:"Esercizio. Per quale valore di $a$ il campo $F=\\big(2x\\cos(x^2+y)+a\\,xy,\\; \\cos(x^2+y)+x^2+1\\big)$ è conservativo su $\\mathbb{R}^2$?",
      opts:[
        {x:"$a=2$",c:true},
        {x:"$a=0$"},
        {x:"$a=-2$"},
        {x:"$a=1$"}],
      hint:"Imponi la condizione 2D $\\partial_y F_1=\\partial_x F_2$ e confronta i termini. Il termine $-2x\\sin(x^2+y)$ compare da entrambi i lati e si cancella.",
      sol:"Su $\\mathbb{R}^2$ (semplicemente connesso) basta $\\partial_y F_1=\\partial_x F_2$. $\\partial_y F_1=-2x\\sin(x^2+y)+ax$; $\\partial_x F_2=-2x\\sin(x^2+y)+2x$. Uguagliando, i termini in $\\sin$ si elidono e resta $ax=2x$ per ogni $x$, cioè <b>$a=2$</b>. Criterio: irrotazionalità in 2D su dominio semplicemente connesso."
    }]
  },

  { pool:"conserv", src:"22gen24 Es.3", steps:[{
      t:"Esercizio. Con $a=2$, il campo $F=\\big(2x\\cos(x^2+y)+2xy,\\; \\cos(x^2+y)+x^2+1\\big)$ ammette potenziale. Qual è?",
      opts:[
        {x:"$U=\\sin(x^2+y)+x^2y+y+k$",c:true},
        {x:"$U=\\sin(x^2+y)+x^2y+k$"},
        {x:"$U=\\cos(x^2+y)+x^2y+y+k$"},
        {x:"$U=\\sin(x^2+y)+xy^2+y+k$"}],
      hint:"Integra $F_1$ in $x$ (nota $\\int 2x\\cos(x^2+y)\\,dx=\\sin(x^2+y)$), poi imponi $U_y=F_2$: il termine $+1$ di $F_2$ genera l'addendo $+y$.",
      sol:"$U_x=2x\\cos(x^2+y)+2xy\\Rightarrow U=\\sin(x^2+y)+x^2y+g(y)$. Impongo $U_y=\\cos(x^2+y)+x^2+g'(y)=\\cos(x^2+y)+x^2+1\\Rightarrow g'(y)=1\\Rightarrow g=y+k$. Quindi <b>$U=\\sin(x^2+y)+x^2y+y+k$</b>. L'addendo $+y$ nasce dal $+1$ in $F_2$: dimenticarlo è l'errore del primo distrattore."
    }]
  },

  { pool:"conserv", src:"19giu24 Es.3 iv", steps:[{
      t:"Esercizio. È conservativo il campo $F=(-x^2y+z,\\; y+z,\\; x^3+y+e^z)$ su $\\mathbb{R}^3$?",
      opts:[
        {x:"No: $\\nabla\\times F=(0,\\;1-3x^2,\\;x^2)\\neq 0$",c:true},
        {x:"Sì: $\\nabla\\times F=0$ e il dominio è $\\mathbb{R}^3$"},
        {x:"No: $\\nabla\\cdot F\\neq 0$"},
        {x:"Sì, perché $\\mathbb{R}^3$ è semplicemente connesso"}],
      hint:"Su $\\mathbb{R}^3$ il dominio è a posto: l'unico ostacolo possibile è che il rotore non sia nullo. Calcolalo componente per componente.",
      sol:"$(\\nabla\\times F)_1=\\partial_y(x^3+y+e^z)-\\partial_z(y+z)=1-1=0$; $(\\nabla\\times F)_2=\\partial_z(-x^2y+z)-\\partial_x(x^3+y+e^z)=1-3x^2$; $(\\nabla\\times F)_3=\\partial_x(y+z)-\\partial_y(-x^2y+z)=0-(-x^2)=x^2$. Il rotore $(0,\\,1-3x^2,\\,x^2)$ non è identicamente nullo, quindi <b>$F$ non è conservativo</b>: fallisce già la condizione necessaria (conservativo $\\Rightarrow$ irrotazionale). Il dominio, pur ottimo, non salva un rotore non nullo."
    }]
  },

  { pool:"conserv", src:"20220706 Es.4 iii", steps:[{
      t:"Esercizio. Per quale $a$ il campo $F=(y^2+y+z^2,\\; 2xy+x,\\; 2axz)$ è conservativo su $\\mathbb{R}^3$?",
      opts:[
        {x:"$a=1$",c:true},
        {x:"$a=0$"},
        {x:"$a=2$"},
        {x:"Per ogni $a$, perché il dominio è semplicemente connesso"}],
      hint:"Calcola il rotore: le componenti 1 e 3 si annullano da sole; è la seconda, $\\partial_z F_1-\\partial_x F_3$, a fissare $a$.",
      sol:"$(\\nabla\\times F)_1=\\partial_y(2axz)-\\partial_z(2xy+x)=0$; $(\\nabla\\times F)_3=\\partial_x(2xy+x)-\\partial_y(y^2+y+z^2)=(2y+1)-(2y+1)=0$; $(\\nabla\\times F)_2=\\partial_z(y^2+y+z^2)-\\partial_x(2axz)=2z-2az=2z(1-a)$. Nullo per ogni $z$ solo se <b>$a=1$</b>. L'ultima opzione è la trappola: il dominio semplicemente connesso rende l'irrotazionalità <i>sufficiente</i>, ma non la regala: va comunque imposta."
    }]
  },

  { pool:"conserv", src:"20220706 Es.4 iii", steps:[{
      t:"Esercizio. Con $a=1$, trova il potenziale di $F=(y^2+y+z^2,\\; 2xy+x,\\; 2xz)$.",
      opts:[
        {x:"$U=xy^2+xy+xz^2+k$",c:true},
        {x:"$U=xy^2+xy+k$"},
        {x:"$U=y^2+y+z^2+xz^2+k$"},
        {x:"$U=xy^2+xy+2xz^2+k$"}],
      hint:"Integra $F_1$ in $x$: ogni termine di $F_1$ (che non dipende da $x$) si moltiplica per $x$. Poi verifica che $U_y$ e $U_z$ tornino.",
      sol:"$U_x=y^2+y+z^2\\Rightarrow U=x(y^2+y+z^2)+g(y,z)=xy^2+xy+xz^2+g(y,z)$. $U_y=2xy+x+g_y=2xy+x\\Rightarrow g_y=0$; $U_z=2xz+g_z=2xz\\Rightarrow g_z=0$. Quindi <b>$U=xy^2+xy+xz^2+k$</b>. Attenzione al coefficiente: $\\int z^2\\,dx=xz^2$, non $2xz^2$ (ultimo distrattore)."
    }]
  },

  { pool:"conserv", src:"20230504 Es.4 i", steps:[{
      t:"Esercizio. Per quale funzione $f$ il campo $F=(x+f(y)+z^2,\\; x\\,f(y),\\; 2xz)$ è conservativo su $\\mathbb{R}^3$?",
      opts:[
        {x:"$f(y)=e^y$ (a meno di costante moltiplicativa), da $f'=f$",c:true},
        {x:"$f(y)=y$, da $f'=1$"},
        {x:"$f(y)=\\cos y$, da $f'=-f$"},
        {x:"Qualunque $f\\in C^1$, perché $\\mathbb{R}^3$ è s.c."}],
      hint:"Solo la terza componente del rotore è non banale: $\\partial_x F_2-\\partial_y F_1=f(y)-f'(y)$. Annullarla è un'equazione differenziale su $f$.",
      sol:"$(\\nabla\\times F)_1=0$ e $(\\nabla\\times F)_2=\\partial_z F_1-\\partial_x F_3=2z-2z=0$. $(\\nabla\\times F)_3=\\partial_x(x f(y))-\\partial_y(x+f(y)+z^2)=f(y)-f'(y)$. Annullando: $f'=f\\Rightarrow f(y)=Ce^y$. Con $f(y)=e^y$: <b>conservativo</b>. Criterio: irrotazionalità; qui produce una EDO sul parametro-funzione."
    }]
  },

  { pool:"conserv", src:"20230705 Es.3 ii", steps:[{
      t:"Esercizio. Il campo piano $F=\\Big(\\dfrac{2xy}{(1+x^2)^2},\\; \\dfrac{a}{1+x^2}\\Big)$ è conservativo su $\\mathbb{R}^2$: per quale $a$, e con quale potenziale?",
      opts:[
        {x:"$a=-1$, con $U=-\\dfrac{y}{1+x^2}+k$",c:true},
        {x:"$a=1$, con $U=\\dfrac{y}{1+x^2}+k$"},
        {x:"$a=-1$, con $U=\\dfrac{y}{(1+x^2)^2}+k$"},
        {x:"$a=2$, con $U=-\\dfrac{2y}{1+x^2}+k$"}],
      hint:"Imponi $\\partial_y F_1=\\partial_x F_2$. Calcola $\\partial_x\\big(a(1+x^2)^{-1}\\big)=-2ax(1+x^2)^{-2}$ e confronta.",
      sol:"$\\partial_y F_1=\\dfrac{2x}{(1+x^2)^2}$; $\\partial_x F_2=a\\cdot(-1)(1+x^2)^{-2}\\cdot 2x=\\dfrac{-2ax}{(1+x^2)^2}$. Uguali $\\Rightarrow 2x=-2ax\\Rightarrow a=-1$. Potenziale: $U_x=\\dfrac{2xy}{(1+x^2)^2}\\Rightarrow U=y\\int\\dfrac{2x}{(1+x^2)^2}dx=-\\dfrac{y}{1+x^2}+g(y)$; $U_y=-\\dfrac{1}{1+x^2}+g'(y)=F_2=-\\dfrac{1}{1+x^2}\\Rightarrow g'=0$. Quindi <b>$a=-1$, $U=-\\dfrac{y}{1+x^2}+k$</b>."
    }]
  },

  { pool:"conserv", src:"21lug25 Es.5 i", steps:[{
      t:"Esercizio. La 1-forma $\\omega=(z-2y)\\,dx+(z-2x)\\,dy+\\big(x+y+\\Psi(y)\\big)dz$ è esatta su $\\mathbb{R}^3$. Che condizione deve soddisfare $\\Psi$?",
      opts:[
        {x:"$\\Psi'(y)=0$, cioè $\\Psi$ costante",c:true},
        {x:"$\\Psi'(y)=1$"},
        {x:"$\\Psi(y)=y$"},
        {x:"Nessuna: è sempre esatta perché $\\mathbb{R}^3$ è s.c."}],
      hint:"Esatta su $\\mathbb{R}^3$ $\\iff$ chiusa: imponi tutte e tre le uguaglianze di derivate incrociate. Solo l'ultima coinvolge $\\Psi'$.",
      sol:"Con $P=z-2y$, $Q=z-2x$, $R=x+y+\\Psi(y)$: $\\partial_y P=\\partial_x Q$ dà $-2=-2$ (ok); $\\partial_z P=\\partial_x R$ dà $1=1$ (ok); $\\partial_z Q=\\partial_y R$ dà $1=1+\\Psi'(y)$, quindi <b>$\\Psi'(y)=0$</b>: $\\Psi$ costante. Su $\\mathbb{R}^3$ chiusa $\\iff$ esatta, ma la chiusura va comunque imposta: non è gratis (ultimo distrattore)."
    }]
  },

  { pool:"conserv", src:"21lug25 Es.5", steps:[{
      t:"Esercizio. Con $\\Psi\\equiv 0$, trova il potenziale $U$ ($dU=\\omega$) della forma $\\omega=(z-2y)dx+(z-2x)dy+(x+y)dz$.",
      opts:[
        {x:"$U=xz-2xy+yz+k$",c:true},
        {x:"$U=xz-2xy+k$"},
        {x:"$U=xz-2xy+yz+xy+k$"},
        {x:"$U=xz+2xy+yz+k$"}],
      hint:"Integra $U_x=z-2y$ in $x$, poi imponi $U_y$ ricostruendo l'addendo $yz$, infine controlla $U_z$.",
      sol:"$U_x=z-2y\\Rightarrow U=xz-2xy+g(y,z)$. $U_y=-2x+g_y=z-2x\\Rightarrow g_y=z\\Rightarrow g=yz+h(z)$. $U_z=x+y+h'(z)=x+y\\Rightarrow h'=0$. Quindi <b>$U=xz-2xy+yz+k$</b>. Verifica: $\\nabla U=(z-2y,\\,-2x+z,\\,x+y)=(P,Q,R)$. Il termine $yz$ emerge dalla condizione su $U_y$: ometterlo è l'errore del secondo distrattore."
    }]
  },

  { pool:"conserv", src:"20230907 Es.2", steps:[{
      t:"Esercizio (trabocchetto). Il campo $F=\\Big(\\dfrac{-\\alpha x+y}{x^2+y^2},\\; \\dfrac{\\alpha y-x}{x^2+y^2}\\Big)$ su $\\mathbb{R}^2\\setminus\\{0\\}$: per $\\alpha=0$ risulta irrotazionale. È conservativo?",
      opts:[
        {x:"No: il dominio $\\mathbb{R}^2\\setminus\\{0\\}$ non è semplicemente connesso, e la circolazione attorno all'origine è non nulla",c:true},
        {x:"Sì: per $\\alpha=0$ è irrotazionale, quindi conservativo"},
        {x:"Sì, ma solo lungo curve che non girano attorno all'origine"},
        {x:"No, perché non è irrotazionale nemmeno per $\\alpha=0$"}],
      hint:"Irrotazionale + dominio con un buco = non basta. Cerca la circolazione su un giro attorno all'origine: se è diversa da zero, il potenziale globale non esiste.",
      sol:"Per $\\alpha=0$: $F=\\big(\\tfrac{y}{x^2+y^2},\\,\\tfrac{-x}{x^2+y^2}\\big)$, irrotazionale. Ma $\\mathbb{R}^2\\setminus\\{0\\}$ non è semplicemente connesso, quindi il teorema inverso non si applica. Sul cerchio unitario antiorario $\\gamma(t)=(\\cos t,\\sin t)$: $F\\cdot\\gamma'=-1$, e $\\oint=-2\\pi\\neq 0$. <b>Non conservativo.</b> È la trappola del buco: irrotazionale creduto sempre conservativo."
    }]
  },

  { pool:"conserv", src:"20230907 Es.2", steps:[{
      t:"Esercizio. Con $\\alpha=0$, $F=\\Big(\\dfrac{y}{x^2+y^2},\\; \\dfrac{-x}{x^2+y^2}\\Big)$. Quanto vale la circolazione lungo il cerchio unitario percorso in senso antiorario?",
      opts:[
        {x:"$-2\\pi$",c:true},
        {x:"$0$"},
        {x:"$2\\pi$"},
        {x:"$-\\pi$"}],
      hint:"Parametrizza $\\gamma(t)=(\\cos t,\\sin t)$, $t\\in[0,2\\pi]$. Sul cerchio $x^2+y^2=1$, quindi $F(\\gamma)=(\\sin t,-\\cos t)$; poi fai $F\\cdot\\gamma'$.",
      sol:"$\\gamma(t)=(\\cos t,\\sin t)$, $\\gamma'=(-\\sin t,\\cos t)$; sul cerchio $x^2+y^2=1$ quindi $F(\\gamma)=(\\sin t,-\\cos t)$. $F\\cdot\\gamma'=-\\sin^2 t-\\cos^2 t=-1$, e $\\oint=\\int_0^{2\\pi}(-1)\\,dt=-2\\pi$. Il valore non nullo <b>certifica la non conservatività</b> e misura il flusso di rotore intrappolato nel buco (periodo della forma chiusa non esatta)."
    }]
  },

  { pool:"conserv", src:"tipo E · manuale (formula $L=U(B)-U(A)$)", steps:[{
      t:"Esercizio. $F=(yz+2x,\\,xz+2y,\\,xy+2z)$ ha potenziale $U=xyz+x^2+y^2+z^2$. Quanto vale il lavoro lungo una qualunque curva da $A=(0,0,0)$ a $B=(1,1,1)$?",
      opts:[
        {x:"$4$",c:true},
        {x:"$0$"},
        {x:"$-4$"},
        {x:"Dipende dalla curva scelta"}],
      hint:"Il campo è conservativo: usa $L=U(B)-U(A)$, senza parametrizzare nulla. Attento al segno e all'ordine (finale meno iniziale).",
      sol:"$F$ è conservativo, quindi $L=U(B)-U(A)$ indipendentemente dal cammino. $U(1,1,1)=1+1+1+1=4$, $U(0,0,0)=0$, dunque <b>$L=4$</b>. Dipende-dalla-curva è la trappola: proprio la conservatività elimina questa dipendenza. Invertire l'ordine darebbe $-4$ (secondo errore tipico)."
    }]
  },

  { pool:"conserv", src:"tipo E · manuale (forma esatta 2D con parametro)", steps:[{
      t:"Esercizio. Per quale $a$ la forma $\\omega=(a\\,xy+y)\\,dx+(x^2+x)\\,dy$ è esatta su $\\mathbb{R}^2$, e qual è la primitiva?",
      opts:[
        {x:"$a=2$, con $U=x^2y+xy+k$",c:true},
        {x:"$a=1$, con $U=\\tfrac12 x^2y+xy+k$"},
        {x:"$a=2$, con $U=x^2y+k$"},
        {x:"Per ogni $a$: ogni forma su $\\mathbb{R}^2$ è esatta"}],
      hint:"Esatta su $\\mathbb{R}^2$ $\\iff$ chiusa: $\\partial_y M=\\partial_x N$. Poi costruisci $U$ integrando $M$ in $x$ e imponendo $U_y=N$.",
      sol:"$M=axy+y$, $N=x^2+x$. Chiusura: $\\partial_y M=ax+1$, $\\partial_x N=2x+1$; uguali $\\Rightarrow a=2$. Con $a=2$: $U_x=2xy+y\\Rightarrow U=x^2y+xy+g(y)$; $U_y=x^2+x+g'(y)=x^2+x\\Rightarrow g'=0$. Quindi <b>$a=2$, $U=x^2y+xy+k$</b>. L'ultima opzione è falsa: nemmeno su $\\mathbb{R}^2$ ogni forma è esatta, serve la chiusura."
    }]
  }

];

Q.green = [

  /* ===================== CONCETTUALI + MODUS OPERANDI ===================== */

  { pool:"green", src:"tipo &middot; b01", steps:[{
      t:"La funzione di Green $G(x,\\xi)$ di un problema ai limiti $\\mathcal{L}u=f$ &egrave; definita da:",
      opts:[
        {x:"$\\mathcal{L}_x G(x,\\xi)=\\delta(x-\\xi)$ con $G$ che soddisfa le STESSE condizioni al bordo omogenee del problema",c:true},
        {x:"$\\mathcal{L}_x G=f$ con $G$ nulla al bordo"},
        {x:"$G=\\mathcal{L}^{-1}f$ calcolata per ogni singola $f$"},
        {x:"$G(x,\\xi)=u_1(x)u_2(\\xi)$ per due soluzioni qualsiasi dell'omogenea"}],
      hint:"La Green risponde alla sorgente ELEMENTARE $\\delta(x-\\xi)$, non alla $f$ data; le condizioni al bordo sono quelle omogenee.",
      sol:"<b>Definizione di funzione di Green.</b> $G(x,\\xi)$ risolve $\\mathcal{L}_x G(x,\\xi)=\\delta(x-\\xi)$ con le condizioni al bordo omogenee del problema. Per il <b>principio di sovrapposizione</b> (linearit&agrave; di $\\mathcal{L}$) la soluzione con sorgente qualunque &egrave; $u(x)=\\int G(x,\\xi)f(\\xi)\\,d\\xi$: si risolve UNA volta il problema con l'impulso e si ottengono tutte le altre per integrazione."
    }]
  },

  { pool:"green", src:"tipo &middot; b01", steps:[{
      t:"MODUS OPERANDI. Davanti a &laquo;costruire la Green di $\\mathcal{L}u=f$ su $[a,b]$ con date BC omogenee&raquo;, il PRIMO passo &egrave;:",
      opts:[
        {x:"risolvere l'omogenea $\\mathcal{L}u=0$ e costruire due soluzioni $u_1,u_2$ adattate ciascuna a UN estremo del bordo",c:true},
        {x:"calcolare subito $\\int G f$"},
        {x:"integrare $\\delta(x-\\xi)$ su tutto $[a,b]$"},
        {x:"imporre continuit&agrave; di $G$ prima di conoscere l'omogenea"}],
      hint:"Senza le due soluzioni omogenee adattate al bordo non hai i mattoni con cui costruire $G$: quello viene prima di qualunque condizione di raccordo.",
      sol:"<b>Strategia (equazione di Eulero / coeff. costanti).</b> Ordine invariante: (1) risolvi l'omogenea $\\mathcal{L}u=0$; (2) scegli $u_1$ che soddisfa la BC in $a$ e $u_2$ che soddisfa la BC in $b$; (3) poni $G=c\\,u_1(x_{<})u_2(x_{>})$; (4) imponi il salto della derivata letto dall'equazione. La continuit&agrave; &egrave; automatica nella struttura $x_{<},x_{>}$; l'unica costante $c$ si fissa dal salto."
    }]
  },

  { pool:"green", src:"20230620 Es.4", steps:[{
      t:"L'equazione $x^2u''+xu'-u=f$ &egrave; del tipo:",
      opts:[
        {x:"equazione di Eulero: si cercano soluzioni $u=x^{\\alpha}$",c:true},
        {x:"a coefficienti costanti: soluzioni $e^{\\alpha x}$"},
        {x:"di Bernoulli"},
        {x:"separabile"}],
      hint:"I coefficienti sono monomi $x^k$ davanti alla derivata $k$-esima: &egrave; la firma di Eulero.",
      sol:"<b>Equazione di Eulero.</b> Il coefficiente di $u^{(k)}$ &egrave; $\\propto x^k$: sostituendo $u=x^{\\alpha}$ si ottiene l'<b>equazione caratteristica</b> $\\alpha(\\alpha-1)+\\alpha-1=\\alpha^2-1=0$, quindi $\\alpha=\\pm1$ e base $\\{x,\\,1/x\\}$. Con coefficienti costanti si userebbe $e^{\\alpha x}$; qui no."
    }]
  },

  { pool:"green", src:"tipo &middot; b01", steps:[{
      t:"Il Wronskiano $W(u_1,u_2)=u_1u_2'-u_1'u_2$ di due soluzioni serve a stabilire che esse:",
      opts:[
        {x:"sono linearmente indipendenti ($W\\neq0$) e quindi formano una base per costruire $G$",c:true},
        {x:"sono ortogonali in $L^2$"},
        {x:"soddisfano le condizioni al bordo"},
        {x:"hanno lo stesso segno"}],
      hint:"Il Wronskiano misura l'indipendenza lineare, non l'ortogonalit&agrave; n&eacute; il bordo.",
      sol:"<b>Criterio del Wronskiano.</b> Due soluzioni di un'ODE lineare del 2&deg; ordine sono linearmente indipendenti su un intervallo se e solo se $W\\neq0$ in quell'intervallo. Servono indipendenti per generare tutte le soluzioni dell'omogenea e per far comparire $W$ a denominatore nella Green: se $W=0$ la costruzione salta."
    }]
  },

  { pool:"green", src:"tipo &middot; b01", steps:[{
      t:"Per l'<b>identit&agrave; di Abel</b>, il Wronskiano di due soluzioni di $u''+P(x)u'+Q(x)u=0$:",
      opts:[
        {x:"$W(x)=W(x_0)\\,e^{-\\int_{x_0}^x P}$: non cambia mai segno, o &egrave; identicamente nullo",c:true},
        {x:"pu&ograve; annullarsi in punti isolati restando altrove non nullo"},
        {x:"&egrave; costante per qualsiasi $P$"},
        {x:"cambia segno dove $Q$ cambia segno"}],
      hint:"Un esponenziale non si annulla mai: se $W$ vale zero in un punto, la costante $W(x_0)$ era zero, quindi $W\\equiv0$.",
      sol:"<b>Identit&agrave; di Abel-Liouville.</b> $W(x)=W(x_0)\\exp\\!\\big(-\\int_{x_0}^x P\\big)$. L'esponenziale &egrave; sempre positivo: dunque $W$ ha <b>segno costante</b> su tutto l'intervallo oppure &egrave; identicamente nullo. Non esistono zeri isolati del Wronskiano. Questo &egrave; il motivo per cui basta valutarlo in un punto per sapere se le soluzioni sono indipendenti ovunque."
    }]
  },

  { pool:"green", src:"20230620 Es.4", steps:[
    { t:"Base $\\{x,\\,1/x\\}$ dell'omogenea di Eulero. Il Wronskiano $W(x,1/x)$ vale:",
      opts:[
        {x:"$-2/x$",c:true},
        {x:"$2/x$"},
        {x:"$0$"},
        {x:"$-2$"}],
      hint:"$W(u_1,u_2)=u_1u_2'-u_1'u_2$ con $u_1=x$, $u_2=1/x$: attento ai segni delle derivate.",
      sol:"<b>Calcolo del Wronskiano.</b> $u_1=x$, $u_1'=1$; $u_2=1/x$, $u_2'=-1/x^2$. Quindi $W=x\\cdot(-1/x^2)-1\\cdot(1/x)=-1/x-1/x=-2/x$. Coerente con Abel: $P=1/x$ d&agrave; $W\\propto e^{-\\int dx/x}=1/x$. Non nullo per $x\\neq0$: base valida.",
      cont:"Ora costruiamo le soluzioni adattate al bordo &rarr;" },
    { t:"Su $[1,2]$ con $u(1)=u(2)=0$, le soluzioni adattate a ciascun estremo sono:",
      opts:[
        {x:"$u_1=x-1/x$ (annulla in $1$) e $u_2=x-4/x$ (annulla in $2$)",c:true},
        {x:"$u_1=x$ e $u_2=1/x$"},
        {x:"$u_1=x+1/x$ e $u_2=x+4/x$"},
        {x:"$u_1=x-1/x$ per entrambi gli estremi"}],
      hint:"$u_1$ deve annullarsi in $x=1$: cerca $c_1x+c_2/x$ con $c_1+c_2=0$. $u_2$ deve annullarsi in $x=2$.",
      sol:"<b>Adattamento al bordo.</b> $u_1=c_1x+c_2/x$ con $u_1(1)=c_1+c_2=0\\Rightarrow u_1=x-1/x$. $u_2(2)=2c_1+c_2/2=0\\Rightarrow c_2=-4c_1\\Rightarrow u_2=x-4/x$. Sono i due mattoni: $u_1$ porta la BC sinistra, $u_2$ quella destra. $W(u_1,u_2)=6/x\\neq0$: indipendenti, la Green esiste (per ora)." }
    ]
  },

  { pool:"green", src:"tipo &middot; b01", steps:[{
      t:"Nella struttura $G(x,\\xi)=c\\,u_1(x_{<})u_2(x_{>})$ con $x_{<}=\\min(x,\\xi)$, la CONTINUIT&Agrave; di $G$ in $x=\\xi$:",
      opts:[
        {x:"&egrave; automaticamente soddisfatta: da entrambi i lati $G(\\xi,\\xi)=c\\,u_1(\\xi)u_2(\\xi)$",c:true},
        {x:"va imposta come equazione separata"},
        {x:"vale solo se $u_1=u_2$"},
        {x:"non &egrave; richiesta per la Green"}],
      hint:"Scambiando $x$ e $\\xi$ nel punto $x=\\xi$, $x_{<}$ e $x_{>}$ coincidono entrambi con $\\xi$.",
      sol:"<b>Perch&eacute; si usa la forma $u_1(x_{<})u_2(x_{>})$.</b> In $x=\\xi$ i due rami danno lo stesso valore $c\\,u_1(\\xi)u_2(\\xi)$: la continuit&agrave; ([G]=0, richiesta dalla sorgente $\\delta$) &egrave; incorporata nella struttura. Resta da imporre solo il salto della derivata, che fissa l'unica costante $c$."
    }]
  },

  { pool:"green", src:"tipo &middot; b01", steps:[{
      t:"Integrando $\\mathcal{L}G=a_2(x)G''+a_1G'+a_0G=\\delta(x-\\xi)$ su $[\\xi^-,\\xi^+]$, le condizioni di raccordo per una sorgente $\\delta$ sono:",
      opts:[
        {x:"$[G]=0$ (continua) e $[G']=1/a_2(\\xi)$ (la derivata salta)",c:true},
        {x:"$[G]=1$ e $[G']=0$"},
        {x:"$[G]=0$ e $[G']=1$ sempre, indipendentemente da $a_2$"},
        {x:"$[G]=a_2(\\xi)$ e $[G']=0$"}],
      hint:"Solo il termine con la derivata pi&ugrave; alta $a_2G''$ sopravvive all'integrazione su un intervallo che si stringe; gli altri sono continui e danno contributo nullo.",
      sol:"<b>Condizioni di raccordo (sorgente $\\delta$).</b> $\\int_{\\xi^-}^{\\xi^+}a_2G''=a_2(\\xi)[G']$ (per continuit&agrave; di $a_2$), mentre $\\int a_1G'$ e $\\int a_0G\\to0$. Uguagliando a $\\int\\delta=1$: $[G']=1/a_2(\\xi)$. La $\\delta$ non forza salto in $G$ ($[G]=0$): con sorgente $\\delta$ salta la DERIVATA, non la funzione. Se $a_2(\\xi)\\neq1$ il coefficiente principale entra nel salto."
    }]
  },

  { pool:"green", src:"tipo &middot; b01", steps:[{
      t:"MODUS OPERANDI. PRIMA di costruire la Green conviene verificare se ESISTE. Il test decisivo &egrave;:",
      opts:[
        {x:"il problema OMOGENEO $\\mathcal{L}u=0$ con le stesse BC ha SOLO la soluzione nulla (equivalente: $W(u_1,u_2)\\neq0$)",c:true},
        {x:"la sorgente $f$ &egrave; integrabile"},
        {x:"i coefficienti sono continui su $[a,b]$"},
        {x:"l'intervallo $[a,b]$ &egrave; limitato"}],
      hint:"Se l'omogeneo con le BC ammette una soluzione non nulla, $0$ &egrave; autovalore dell'operatore e l'inverso (la Green) non pu&ograve; esistere.",
      sol:"<b>Alternativa di Fredholm.</b> La Green &egrave; l'inverso $\\mathcal{L}^{-1}$: esiste se e solo se il problema omogeneo $\\mathcal{L}u=0$ con quelle BC ha solo $u\\equiv0$. Se invece esiste $u_h\\neq0$ omogenea (cio&egrave; $u_1\\propto u_2$, dunque $W=0$), allora $0$ &egrave; autovalore e $\\mathcal{L}$ non &egrave; invertibile: la Green non esiste. &Egrave; il controllo da fare per PRIMO quando le BC sono insolite (miste)."
    }]
  },

  { pool:"green", src:"20230620 Es.4", steps:[
    { t:"TRAPPOLA. Stessa Eulero su $[1,2]$ ma con BC miste $u(1)+3u'(1)=0$ e $u(2)-6u'(2)=0$. La soluzione omogenea $u=c_1x+c_2/x$ che soddisfa la PRIMA BC &egrave;:",
      opts:[
        {x:"$u_1=x+2/x$ (da $4c_1-2c_2=0\\Rightarrow c_2=2c_1$)",c:true},
        {x:"$u_1=x-2/x$"},
        {x:"$u_1=x-1/x$"},
        {x:"$u_1=2x+1/x$"}],
      hint:"$u=c_1x+c_2/x$, $u'=c_1-c_2/x^2$. Imponi $u(1)+3u'(1)=0$: valuta in $x=1$.",
      sol:"<b>Imporre la BC mista sinistra.</b> $u(1)+3u'(1)=(c_1+c_2)+3(c_1-c_2)=4c_1-2c_2=0\\Rightarrow c_2=2c_1$. Scegliendo $c_1=1$: $u_1=x+2/x$. Il criterio da applicare &egrave; quello dell'<b>alternativa di Fredholm</b>: prima si guarda cosa selezionano le BC nell'omogenea.",
      cont:"Ora la seconda BC &rarr;" },
    { t:"La soluzione omogenea che soddisfa la SECONDA BC $u(2)-6u'(2)=0$ &egrave;:",
      opts:[
        {x:"ancora $u_2=x+2/x$: proporzionale a $u_1$, quindi $W=0$ e la Green NON esiste",c:true},
        {x:"$u_2=x-4/x$: indipendente da $u_1$, la Green esiste"},
        {x:"$u_2=x-2/x$"},
        {x:"$u_2=1/x$"}],
      hint:"Valuta $u(2)-6u'(2)=0$ con $u=c_1x+c_2/x$: se ritrovi di nuovo $c_2=2c_1$, le due BC selezionano la STESSA soluzione.",
      sol:"<b>La Green non esiste (trappola BC miste, compito 20/06/2023).</b> $u(2)-6u'(2)=(2c_1+c_2/2)-6(c_1-c_2/4)=-4c_1+2c_2=0\\Rightarrow c_2=2c_1$: identica condizione. Quindi $u_2\\propto u_1=x+2/x$: le due BC sono soddisfatte dalla STESSA funzione non nulla. Per l'<b>alternativa di Fredholm</b> l'omogeneo ha soluzione non banale, $W(u_1,u_2)=0$, e la funzione di Green non esiste. Riconoscerlo richiede di imporre le BC sull'omogenea PRIMA di costruire $G$."
    }]
  },

  { pool:"green", src:"20230620 Es.4", steps:[{
      t:"Con le BC di Dirichlet $u(1)=u(2)=0$ (non miste) la stessa Eulero HA Green perch&eacute;:",
      opts:[
        {x:"$u_1=x-1/x$ e $u_2=x-4/x$ sono indipendenti ($W=6/x\\neq0$): l'omogeneo ha solo $u\\equiv0$",c:true},
        {x:"la sorgente &egrave; regolare"},
        {x:"l'intervallo &egrave; corto"},
        {x:"$a_2(x)=x^2>0$"}],
      hint:"Con Dirichlet le due soluzioni adattate agli estremi sono diverse; il contrasto con le BC miste sta tutto nell'indipendenza.",
      sol:"<b>Esistenza via indipendenza.</b> Con $u(1)=u(2)=0$ le soluzioni adattate $u_1=x-1/x$ e $u_2=x-4/x$ NON sono proporzionali ($W=6/x\\neq0$): l'unica omogenea che soddisfa entrambe le BC &egrave; $u\\equiv0$. Per l'<b>alternativa di Fredholm</b> la Green esiste. La differenza con le BC miste &egrave; solo nella scelta delle BC, non nell'operatore."
    }]
  },

  { pool:"green", src:"tipo &middot; b01", steps:[{
      t:"Per un operatore in forma di <b>Sturm-Liouville</b> $\\mathcal{L}u=(p(x)u')'+q(x)u$, la Green &egrave; SIMMETRICA:",
      opts:[
        {x:"$G(x,\\xi)=G(\\xi,x)$, perch&eacute; l'operatore &egrave; autoaggiunto con quelle BC",c:true},
        {x:"solo se $p$ &egrave; costante"},
        {x:"mai, la Green non &egrave; mai simmetrica"},
        {x:"solo se la sorgente &egrave; pari"}],
      hint:"La simmetria del nucleo &egrave; l'ombra dell'autoaggiuntezza dell'operatore; &egrave; un controllo gratuito del risultato.",
      sol:"<b>Simmetria della Green (operatori autoaggiunti).</b> In forma di Sturm-Liouville, con BC che rendono $\\mathcal{L}$ autoaggiunto, vale $G(x,\\xi)=G(\\xi,x)$. &Egrave; conseguenza di $\\langle\\mathcal{L}u,v\\rangle=\\langle u,\\mathcal{L}v\\rangle$. Utile come verifica: se la $G$ calcolata non &egrave; simmetrica, c'&egrave; un errore (a meno di operatore non autoaggiunto, es. con termine $u'$ e $p$ non assorbito)."
    }]
  },

  { pool:"green", src:"tipo &middot; b01", steps:[{
      t:"In forma Sturm-Liouville $(pu')'+qu=\\delta(x-\\xi)$, il salto corretto della derivata &egrave;:",
      opts:[
        {x:"$[p\\,G']=1$, cio&egrave; $[G']=1/p(\\xi)$",c:true},
        {x:"$[G']=1$ sempre"},
        {x:"$[G']=p(\\xi)$"},
        {x:"$[G']=0$"}],
      hint:"&Egrave; il termine $(pG')'$ a integrarsi su $[\\xi^-,\\xi^+]$; il fattore $p(\\xi)$ resta attaccato alla derivata.",
      sol:"<b>Salto in forma di Sturm-Liouville.</b> $\\int_{\\xi^-}^{\\xi^+}(pG')'=[pG']=\\int\\delta=1$, quindi $[G']=1/p(\\xi)$. Dimenticare il coefficiente $p(\\xi)$ &egrave; uno degli errori pi&ugrave; comuni: con $p\\neq1$ il salto NON &egrave; $1$. Coincide col fatto che, in forma $a_2u''+\\dots$, il salto &egrave; $1/a_2(\\xi)$."
    }]
  },

  { pool:"green", src:"Set 4 es.9", steps:[{
      t:"Nel prodotto $u=\\int G(x,\\xi)f(\\xi)\\,d\\xi$, la funzione di Green va integrata:",
      opts:[
        {x:"contro la sorgente $f(\\xi)$ nella variabile $\\xi$, tenendo $x$ fisso",c:true},
        {x:"nella variabile $x$"},
        {x:"contro $\\delta(x-\\xi)$"},
        {x:"solo sull'intervallo dove $f=0$"}],
      hint:"$x$ &egrave; il punto in cui vuoi la soluzione; $\\xi$ scorre su tutte le posizioni della sorgente.",
      sol:"<b>Uso della Green (principio di sovrapposizione).</b> $u(x)=\\int_a^b G(x,\\xi)f(\\xi)\\,d\\xi$: si somma il contributo di ogni impulso $f(\\xi)\\delta(x-\\xi)$ pesato da $f(\\xi)$. La struttura $G=u_1(x_{<})u_2(x_{>})/(\\dots)$ spezza l'integrale in $\\int_a^x$ (dove $\\xi<x$, cio&egrave; $x_{>}=x$) e $\\int_x^b$."
    }]
  },

  { pool:"green", src:"20241106 Es.4", steps:[{
      t:"L'operatore radiale $u''+\\frac{2}{x}u'-\\frac{\\ell(\\ell+1)}{x^2}u$ ha base omogenea:",
      opts:[
        {x:"$\\{x^{\\ell},\\,x^{-\\ell-1}\\}$, dalla caratteristica $\\alpha^2+\\alpha-\\ell(\\ell+1)=0$",c:true},
        {x:"$\\{e^{\\ell x},\\,e^{-(\\ell+1)x}\\}$"},
        {x:"$\\{x^{\\ell},\\,x^{\\ell+1}\\}$"},
        {x:"$\\{\\sin(\\ell x),\\,\\cos(\\ell x)\\}$"}],
      hint:"Moltiplica per $x^2$: diventa Eulero. Sostituisci $u=x^{\\alpha}$ e risolvi $\\alpha(\\alpha-1)+2\\alpha-\\ell(\\ell+1)=0$.",
      sol:"<b>Eulero radiale (compito 06/11/2024).</b> Moltiplicando per $x^2$ si ha Eulero; $u=x^{\\alpha}$ d&agrave; $\\alpha(\\alpha-1)+2\\alpha-\\ell(\\ell+1)=\\alpha^2+\\alpha-\\ell(\\ell+1)=0$, radici $\\alpha=\\ell$ e $\\alpha=-\\ell-1$. Base $\\{x^{\\ell},x^{-\\ell-1}\\}$: $x^{\\ell}\\to0$ per $x\\to0$ (adatta alla BC in $0$), $x^{-\\ell-1}\\to0$ per $x\\to\\infty$ (adatta alla BC all'infinito)."
    }]
  },

  { pool:"green", src:"tipo &middot; b01", steps:[{
      t:"Un problema $-u''=f$ su $[0,1]$, $u(0)=u(1)=0$: quale segno ha il salto $[G']$?",
      opts:[
        {x:"$[G']=-1$, perch&eacute; l'equazione &egrave; $-G''=\\delta$ (segno meno davanti a $G''$)",c:true},
        {x:"$[G']=+1$ sempre"},
        {x:"$[G']=0$"},
        {x:"$[G']=-1/2$"}],
      hint:"Integra $-G''=\\delta$: il segno meno del coefficiente principale passa nel salto.",
      sol:"<b>Segno del salto.</b> Da $-G''=\\delta$: $\\int_{\\xi^-}^{\\xi^+}(-G'')=-[G']=1\\Rightarrow[G']=-1$. Il segno del coefficiente principale $a_2=-1$ determina il segno del salto. Dimenticarlo inverte la $G$: &egrave; l'errore-segno pi&ugrave; frequente."
    }]
  },

  { pool:"green", src:"Set 4 es.10", steps:[{
      t:"La Green di $-u''+u=f$ su tutta la retta con $u\\to0$ a $\\pm\\infty$ &egrave;:",
      opts:[
        {x:"$G(x,\\xi)=\\tfrac{1}{2}e^{-|x-\\xi|}$ (potenziale di Yukawa 1D)",c:true},
        {x:"$G=\\tfrac{1}{2}e^{-(x-\\xi)}$"},
        {x:"$G=x_{<}(1-x_{>})$"},
        {x:"$G=\\tfrac{1}{2}|x-\\xi|$"}],
      hint:"L'omogenea $-u''+u=0$ ha base $e^{x},e^{-x}$: scegli il ramo che decade a ciascun infinito.",
      sol:"<b>Green su retta infinita.</b> Base $\\{e^{x},e^{-x}\\}$; per $x<\\xi$ si prende $e^{x}$ (decade a $-\\infty$), per $x>\\xi$ si prende $e^{-x}$ (decade a $+\\infty$). Continuit&agrave; + salto $[G']=-1$ (da $-G''+G=\\delta$) danno $G=\\tfrac{1}{2}e^{-|x-\\xi|}$. In fisica &egrave; il potenziale di Yukawa unidimensionale: il termine di massa $+u$ diventa il decadimento esponenziale della risposta."
    }]
  },

  { pool:"green", src:"tipo &middot; b01", steps:[{
      t:"MODUS OPERANDI. Dopo aver calcolato una candidata $G(x,\\xi)$, i controlli rapidi da fare sono:",
      opts:[
        {x:"BC ai due estremi, continuit&agrave; in $\\xi$, salto della derivata corretto, e simmetria $G(x,\\xi)=G(\\xi,x)$ se autoaggiunto",c:true},
        {x:"solo che $G$ sia positiva"},
        {x:"solo la continuit&agrave;"},
        {x:"che $G$ risolva $\\mathcal{L}G=f$"},
        {x:"che $G$ sia limitata"}],
      hint:"Sono quattro firme indipendenti: se una manca, hai imposto una condizione sbagliata.",
      sol:"<b>Verifica di una Green.</b> Quattro controlli: (1) $G$ soddisfa le BC omogenee ai due estremi; (2) &egrave; continua in $x=\\xi$ (per sorgente $\\delta$); (3) $[G']=1/a_2(\\xi)$ col segno giusto; (4) $G(x,\\xi)=G(\\xi,x)$ per operatori autoaggiunti (Sturm-Liouville). La (4) &egrave; un controllo gratuito che scopre subito errori algebrici."
    }]
  },

  { pool:"green", src:"tipo &middot; b01", steps:[{
      t:"Nel problema $\\mathcal{L}u=f$ risolto via Green, la parte OMOGENEA della soluzione generale:",
      opts:[
        {x:"&egrave; gi&agrave; inglobata: $u=\\int Gf$ soddisfa AUTOMATICAMENTE le BC, non si aggiunge $c_1u_1+c_2u_2$",c:true},
        {x:"va aggiunta a parte con due costanti libere"},
        {x:"si sceglie per rendere $u$ pari"},
        {x:"coincide con la sorgente"}],
      hint:"La Green &egrave; costruita con le BC dentro: la soluzione $\\int Gf$ le eredita, non restano costanti da fissare.",
      sol:"<b>Green vs variazione delle costanti.</b> A differenza del metodo diretto (soluzione generale $c_1u_1+c_2u_2+u_p$, poi si impongono le BC), la Green incorpora gi&agrave; le BC omogenee: $u=\\int Gf$ &egrave; LA soluzione del problema ai limiti, senza costanti residue. Aggiungere $c_1u_1+c_2u_2$ &egrave; un errore concettuale: violerebbe le BC gi&agrave; imposte."
    }]
  },

  { pool:"green", src:"20240703 Es.4", steps:[{
      t:"Se una soluzione dell'omogenea $f_1(x)=\\tan x$ &egrave; nota, la seconda si trova con:",
      opts:[
        {x:"la formula di riduzione d'ordine (Wronskiano): $f_2=f_1\\int \\frac{1}{f_1^2}e^{-\\int a_1/a_2}\\,dy$",c:true},
        {x:"la trasformata di Fourier"},
        {x:"la formula di variazione delle costanti"},
        {x:"il teorema dei residui"}],
      hint:"Nota una soluzione, l'altra si ottiene abbassando l'ordine dell'equazione tramite il Wronskiano.",
      sol:"<b>Riduzione d'ordine (compito 03/07/2024).</b> Con $f_1$ nota, $f_2=f_1\\int f_1^{-2}\\,e^{-\\int a_1/a_2}\\,dy$: &egrave; la formula che ricostruisce la seconda soluzione dal Wronskiano ($f_1f_2'-f_1'f_2=e^{-\\int a_1/a_2}$). Attenzione al segno dell'esponente $-\\int a_1/a_2$: invertirlo d&agrave; una $f_2$ sbagliata. Per $\\cos^2x\\,f''-\\sin x\\cos x\\,f'-f=0$ si ottiene $f_2=1/\\cos x$."
    }]
  },

  { pool:"green", src:"tipo &middot; b01", steps:[{
      t:"Se la sorgente $\\xi$ della Green cadesse ESATTAMENTE su un estremo (es. $\\xi=a$):",
      opts:[
        {x:"il ramo $x<\\xi$ si annulla e la costruzione degenera: la Green va intesa come limite $\\xi\\to a^+$",c:true},
        {x:"$G$ raddoppia di valore"},
        {x:"$G$ cambia segno"},
        {x:"nulla cambia, la formula vale identica"}],
      hint:"$u_1(x_{<})$ con $\\xi=a$ costringe $x_{<}=a$, dove $u_1(a)=0$ per la BC: il prodotto collassa.",
      sol:"<b>Caso limite $\\xi$ al bordo.</b> Poich&eacute; $u_1(a)=0$ per costruzione, con $\\xi=a$ il fattore $u_1(x_{<})$ si annulla e $G\\equiv0$ nel ramo interno: la sorgente sul bordo non produce risposta interna (coerente con le BC di Dirichlet). La Green &egrave; ben definita per $\\xi\\in(a,b)$ e si estende per continuit&agrave;."
    }]
  },

  /* ===================== ESERCIZI (calcolo, multi-passo) ===================== */

  { pool:"green", src:"tipo &middot; b01", steps:[
    { t:"Costruisci la Green di $-u''=f$ su $[0,1]$, $u(0)=u(1)=0$. I due rami (soluzioni di $u''=0$ adattate al bordo) sono:",
      opts:[
        {x:"$u_1=x$ (annulla in $0$) e $u_2=1-x$ (annulla in $1$)",c:true},
        {x:"$u_1=1-x$ e $u_2=x$"},
        {x:"$u_1=x^2$ e $u_2=(1-x)^2$"},
        {x:"$u_1=\\sin\\pi x$ e $u_2=\\cos\\pi x$"}],
      hint:"$u''=0$ d&agrave; funzioni affini; scegli quella nulla in $0$ e quella nulla in $1$.",
      sol:"<b>Rami affini.</b> $u''=0\\Rightarrow u$ affine. $u_1(0)=0\\Rightarrow u_1=x$; $u_2(1)=0\\Rightarrow u_2=1-x$. Sono i due mattoni; $W(u_1,u_2)=x\\cdot(-1)-1\\cdot(1-x)=-1\\neq0$: indipendenti.",
      cont:"Imponi ora continuit&agrave; e salto &rarr;" },
    { t:"Con $G=A\\,x$ per $x<\\xi$ e $G=B(1-x)$ per $x>\\xi$, le condizioni ($-G''=\\delta$) danno:",
      opts:[
        {x:"$A\\xi=B(1-\\xi)$ (continuit&agrave;) e $-B-A=-1$ (salto), quindi $A=1-\\xi$, $B=\\xi$",c:true},
        {x:"$A=B$ e $A+B=1$"},
        {x:"$A\\xi=B(1-\\xi)$ e $B-A=1$"},
        {x:"$A=\\xi$, $B=1-\\xi$"}],
      hint:"Continuit&agrave;: uguaglia i due rami in $\\xi$. Salto: $[G']=G'(\\xi^+)-G'(\\xi^-)=-B-A$, e vale $-1$ perch&eacute; $-G''=\\delta$.",
      sol:"<b>Condizioni di raccordo.</b> Continuit&agrave;: $A\\xi=B(1-\\xi)$. Salto: $[G']=-B-A$; da $-G''=\\delta$ si ha $[G']=-1$, cio&egrave; $A+B=1$. Risolvendo: $A=1-\\xi$, $B=\\xi$. Quindi $G(x,\\xi)=x(1-\\xi)$ per $x\\le\\xi$ e $\\xi(1-x)$ per $x\\ge\\xi$, cio&egrave; $G=x_{<}(1-x_{>})$. Simmetrico ($G(x,\\xi)=G(\\xi,x)$): controllo superato.",
      cont:"Usa la Green con $f\\equiv1$ &rarr;" },
    { t:"La soluzione con $f\\equiv1$, $u(x)=\\int_0^1 G(x,\\xi)\\,d\\xi$, vale:",
      opts:[
        {x:"$u(x)=\\dfrac{x(1-x)}{2}$",c:true},
        {x:"$u(x)=x(1-x)$"},
        {x:"$u(x)=\\dfrac{x^2}{2}$"},
        {x:"$u(x)=1-x$"}],
      hint:"Spezza $\\int_0^1=\\int_0^x[\\xi(1-x)]d\\xi+\\int_x^1[x(1-\\xi)]d\\xi$: nel primo $\\xi<x$, nel secondo $\\xi>x$.",
      sol:"<b>Sovrapposizione.</b> $u=\\int_0^x\\xi(1-x)d\\xi+\\int_x^1x(1-\\xi)d\\xi=\\tfrac{x^2}{2}(1-x)+x\\tfrac{(1-x)^2}{2}=\\tfrac{x(1-x)}{2}$. Verifica: $-u''=1$, $u(0)=u(1)=0$. &Egrave; la parabola (corda tesa sotto carico uniforme)." }
    ]
  },

  { pool:"green", src:"20230620 Es.4", steps:[
    { t:"Metodo diretto per $x^2u''+xu'-u=x^2$ su $[1,2]$, $u(1)=u(2)=0$. Una soluzione particolare $u_p=Ax^2$ ha:",
      opts:[
        {x:"$A=1/3$, cio&egrave; $u_p=x^2/3$",c:true},
        {x:"$A=1$, $u_p=x^2$"},
        {x:"$A=1/2$"},
        {x:"$A=-1/3$"}],
      hint:"Sostituisci $u_p=Ax^2$: $x^2(2A)+x(2Ax)-Ax^2=3Ax^2$, uguaglia a $x^2$.",
      sol:"<b>Soluzione particolare.</b> $u_p=Ax^2\\Rightarrow x^2(2A)+x(2Ax)-Ax^2=3Ax^2=x^2\\Rightarrow A=1/3$. La generale &egrave; $u=c_1/x+c_2x+x^2/3$ (omogenea $\\{1/x,x\\}$ + particolare).",
      cont:"Imponi le BC &rarr;" },
    { t:"Imponendo $u(1)=u(2)=0$ su $u=c_1/x+c_2x+x^2/3$ si ottiene:",
      opts:[
        {x:"$u(x)=\\dfrac{4}{9x}-\\dfrac{7x}{9}+\\dfrac{x^2}{3}$",c:true},
        {x:"$u(x)=\\dfrac{1}{x}-x+\\dfrac{x^2}{3}$"},
        {x:"$u(x)=-\\dfrac{4}{9x}+\\dfrac{7x}{9}+\\dfrac{x^2}{3}$"},
        {x:"$u(x)=\\dfrac{x^2}{3}$"}],
      hint:"Sistema: $c_1+c_2+1/3=0$ e $c_1/2+2c_2+4/3=0$. Risolvi per $c_1,c_2$.",
      sol:"<b>Sistema per le costanti.</b> $u(1)=c_1+c_2+1/3=0$; $u(2)=c_1/2+2c_2+4/3=0$. Sottraendo: $c_2=-7/9$, quindi $c_1=4/9$. Risultato $u=\\tfrac{4}{9x}-\\tfrac{7x}{9}+\\tfrac{x^2}{3}$. La <b>variazione delle costanti</b> (o la Green) darebbe lo stesso; qui il metodo diretto &egrave; pi&ugrave; rapido perch&eacute; $u_p$ si indovina." }
    ]
  },

  { pool:"green", src:"20240910 Es.4", steps:[
    { t:"Eulero non-omogenea $x^3u''+2x^2u'-2xu=x^3+1$ su $[1,\\infty)$. Dividendo per $x$ si ottiene Eulero con caratteristica:",
      opts:[
        {x:"$\\alpha^2+\\alpha-2=0$, radici $\\alpha=1$ e $\\alpha=-2$: base $\\{x,\\,x^{-2}\\}$",c:true},
        {x:"$\\alpha^2-\\alpha-2=0$, base $\\{x^2,\\,x^{-1}\\}$"},
        {x:"$\\alpha^2+2\\alpha=0$, base $\\{1,\\,x^{-2}\\}$"},
        {x:"$\\alpha^2-2=0$"}],
      hint:"Dopo la divisione per $x$: $x^2u''+2xu'-2u=\\dots$; sostituisci $u=x^{\\alpha}$: $\\alpha(\\alpha-1)+2\\alpha-2=0$.",
      sol:"<b>Eulero, caratteristica (compito 10/09/2024).</b> $x^2u''+2xu'-2u$; $u=x^{\\alpha}$ d&agrave; $\\alpha(\\alpha-1)+2\\alpha-2=\\alpha^2+\\alpha-2=0$, radici $1,-2$. Base $\\{x,x^{-2}\\}$, Wronskiano $W=-3/x^2$.",
      cont:"Interpreta la BC all'infinito &rarr;" },
    { t:"La BC insolita $\\lim_{x\\to\\infty}(u(x)-x^2/4)=0$ (con soluzione particolare $u_p=x^2/4-1/(2x)$) impone:",
      opts:[
        {x:"il coefficiente del termine $\\propto x$ (che cresce) deve annullarsi: seleziona $A=0$",c:true},
        {x:"$u(\\infty)=0$"},
        {x:"il coefficiente di $x^{-2}$ nullo"},
        {x:"nessuna condizione"}],
      hint:"$u=Ax+Bx^{-2}+u_p$; per $x\\to\\infty$ il termine $Ax$ diverge mentre $x^2/4$ &egrave; gi&agrave; in $u_p$: cosa resta se $A\\neq0$?",
      sol:"<b>BC asintotica (trappola).</b> La condizione $\\lim(u-x^2/4)=0$ non dice $u(\\infty)=0$: dice che, tolto il termine $x^2/4$ (gi&agrave; in $u_p$), il resto svanisce. Il termine omogeneo $Ax$ crescerebbe linearmente $\\Rightarrow A=0$. Poi $u(1)=0$ fissa $B=1/4$: $u=x^2/4-1/(2x)+1/(4x^2)$." }
    ]
  },

  { pool:"green", src:"20241106 Es.4", steps:[
    { t:"Costruisci la Green radiale di $u''+\\frac{2}{x}u'-\\frac{\\ell(\\ell+1)}{x^2}u=\\delta(x-a)$ su $(0,\\infty)$, $u\\to0$ a $0$ e $\\infty$. I rami adattati sono:",
      opts:[
        {x:"$x^{\\ell}$ per $x<a$ (finito in $0$) e $x^{-\\ell-1}$ per $x>a$ (nullo a $\\infty$)",c:true},
        {x:"$x^{-\\ell-1}$ per $x<a$ e $x^{\\ell}$ per $x>a$"},
        {x:"$e^{\\ell x}$ e $e^{-\\ell x}$"},
        {x:"$x^{\\ell}$ per entrambi i rami"}],
      hint:"Ogni ramo deve soddisfare la BC dal suo lato: $x^{\\ell}\\to0$ in $0$, $x^{-\\ell-1}\\to0$ all'infinito.",
      sol:"<b>Rami radiali (compito 06/11/2024).</b> Base $\\{x^{\\ell},x^{-\\ell-1}\\}$. La BC in $0$ (regolarit&agrave;) seleziona $x^{\\ell}$ per $x<a$; la BC a $\\infty$ seleziona $x^{-\\ell-1}$ per $x>a$. Struttura $G=c\\,x_{<}^{\\ell}\\,x_{>}^{-\\ell-1}$.",
      cont:"Fissa la costante col Wronskiano &rarr;" },
    { t:"Con $W(x^{\\ell},x^{-\\ell-1})=-(2\\ell+1)/x^2$ e coefficiente principale $a_2=1$, la costante d&agrave;:",
      opts:[
        {x:"$G(x,a)=-\\dfrac{1}{2\\ell+1}\\Big[\\dfrac{x^{\\ell}}{a^{\\ell-1}}\\theta(a-x)+\\dfrac{a^{\\ell+2}}{x^{\\ell+1}}\\theta(x-a)\\Big]$",c:true},
        {x:"$G(x,a)=+\\dfrac{1}{2\\ell+1}x^{\\ell}a^{-\\ell-1}$"},
        {x:"$G(x,a)=x^{\\ell}a^{-\\ell-1}\\theta(a-x)$"},
        {x:"$G(x,a)=-(2\\ell+1)\\,x^{\\ell}x^{-\\ell-1}$"}],
      hint:"Il salto $[G']=1/a_2=1$ e $a_2 W=-(2\\ell+1)/x^2$ fissano $c=1/(a_2W)=-a^2/(2\\ell+1)$ valutato in $x=a$.",
      sol:"<b>Costante dal salto.</b> $c=1/(a_2(a)W(a))=-a^2/(2\\ell+1)$; moltiplicato per $x_{<}^{\\ell}x_{>}^{-\\ell-1}$ e riorganizzato d&agrave; $G(x,a)=-\\tfrac{1}{2\\ell+1}\\big[x^{\\ell}a^{-(\\ell-1)}\\theta(a-x)+a^{\\ell+2}x^{-\\ell-1}\\theta(x-a)\\big]$. La soluzione dell'equazione COINCIDE con $G$ perch&eacute; la sorgente &egrave; una $\\delta$ centrata in $a$." }
    ]
  },

  { pool:"green", src:"Set 4 es.6", steps:[{
      t:"Costante coefficienti: la Green di $u''-3u'+2u=f$ su $[0,2]$, $u(0)=u(2)=0$, parte dalla base:",
      opts:[
        {x:"$\\{e^{x},\\,e^{2x}\\}$, dalla caratteristica $\\alpha^2-3\\alpha+2=0$",c:true},
        {x:"$\\{x,\\,x^2\\}$"},
        {x:"$\\{e^{-x},\\,e^{-2x}\\}$"},
        {x:"$\\{\\cos x,\\,\\sin x\\}$"}],
      hint:"Coefficienti costanti: cerca $e^{\\alpha x}$ e risolvi $\\alpha^2-3\\alpha+2=0$.",
      sol:"<b>Base a coefficienti costanti.</b> $\\alpha^2-3\\alpha+2=(\\alpha-1)(\\alpha-2)=0\\Rightarrow\\alpha=1,2$: base $\\{e^{x},e^{2x}\\}$. Rami adattati: $u_1=e^{x}-e^{2x}$ ($u_1(0)=0$), $u_2=e^{x}-e^{2(x-1)}$... (adattata a $u(2)=0$ nella variante $\\delta'$). La firma di Eulero (monomi) &egrave; assente: qui si usano esponenziali."
    }]
  },

  { pool:"green", src:"Set 4 es.9", steps:[
    { t:"Eulero $x^2u''-2xu'+2u=x^{\\lambda}$ ($\\lambda>3$). Base omogenea e Wronskiano:",
      opts:[
        {x:"base $\\{x,\\,x^2\\}$ (radici $1,2$), $W=x^2$",c:true},
        {x:"base $\\{1,\\,x\\}$, $W=1$"},
        {x:"base $\\{x^{-1},\\,x^2\\}$, $W=3x$"},
        {x:"base $\\{x^2,\\,x^3\\}$"}],
      hint:"$u=x^{\\alpha}$: $\\alpha(\\alpha-1)-2\\alpha+2=\\alpha^2-3\\alpha+2=0$; poi $W(x,x^2)=x\\cdot2x-1\\cdot x^2$.",
      sol:"<b>Eulero (Set 4).</b> $\\alpha^2-3\\alpha+2=0\\Rightarrow\\alpha=1,2$: base $\\{x,x^2\\}$. $W(x,x^2)=x(2x)-1(x^2)=x^2$. Non nullo per $x>0$.",
      cont:"Soluzione particolare per variazione delle costanti &rarr;" },
    { t:"La particolare (variazione delle costanti) $u_p$ per sorgente $x^{\\lambda}$ &egrave;:",
      opts:[
        {x:"$u_p=\\dfrac{x^{\\lambda}}{(\\lambda-1)(\\lambda-2)}$",c:true},
        {x:"$u_p=\\dfrac{x^{\\lambda}}{\\lambda^2}$"},
        {x:"$u_p=x^{\\lambda}\\ln x$"},
        {x:"$u_p=\\dfrac{x^{\\lambda}}{\\lambda!}$"}],
      hint:"Cerca $u_p=Cx^{\\lambda}$: sostituendo, $C[\\lambda(\\lambda-1)-2\\lambda+2]=1$, cio&egrave; $C[(\\lambda-1)(\\lambda-2)]=1$.",
      sol:"<b>Variazione delle costanti / coefficienti indeterminati.</b> $u_p=Cx^{\\lambda}$ d&agrave; $C[\\lambda(\\lambda-1)-2\\lambda+2]=C(\\lambda-1)(\\lambda-2)=1\\Rightarrow C=1/[(\\lambda-1)(\\lambda-2)]$. Definito per $\\lambda\\neq1,2$ (altrimenti risonanza con l'omogenea, e serve un fattore $\\ln x$)." }
    ]
  },

  { pool:"green", src:"tipo &middot; b01", steps:[{
      t:"Caso di RISONANZA: se la sorgente $x^{\\lambda}$ ha $\\lambda$ uguale a una radice della caratteristica di Eulero, la particolare:",
      opts:[
        {x:"acquista un fattore $\\ln x$: $u_p\\propto x^{\\lambda}\\ln x$",c:true},
        {x:"non esiste"},
        {x:"resta $Cx^{\\lambda}$ con $C$ finito"},
        {x:"diventa costante"}],
      hint:"&Egrave; l'analogo del fattore $x$ (o $t$) nella risonanza a coefficienti costanti: qui la variabile giusta &egrave; $\\ln x$.",
      sol:"<b>Risonanza in Eulero.</b> Se $\\lambda$ coincide con una radice $\\alpha$, $Cx^{\\lambda}$ risolve l'omogenea e non pu&ograve; dare la particolare: il coefficiente indeterminato esplode. Si moltiplica per $\\ln x$ (la variabile naturale di Eulero, immagine di $x$ sotto $t=\\ln x$): $u_p\\propto x^{\\alpha}\\ln x$. Analogo di $t\\,e^{\\alpha t}$ a coefficienti costanti."
    }]
  },

  { pool:"green", src:"Set 4 es.2", steps:[{
      t:"Coefficienti costanti $u''-4u=f$ su $[0,1]$, $u(0)=u(1)=0$. La base omogenea &egrave;:",
      opts:[
        {x:"$\\{e^{2x},\\,e^{-2x}\\}$ (o equivalentemente $\\{\\sinh 2x,\\cosh 2x\\}$)",c:true},
        {x:"$\\{\\sin 2x,\\,\\cos 2x\\}$"},
        {x:"$\\{e^{4x},\\,e^{-4x}\\}$"},
        {x:"$\\{x,\\,x^{-1}\\}$"}],
      hint:"$\\alpha^2-4=0$: radici REALI $\\pm2$, quindi esponenziali reali (non trigonometriche).",
      sol:"<b>Radici reali vs immaginarie.</b> $\\alpha^2-4=0\\Rightarrow\\alpha=\\pm2$ reali: base $\\{e^{2x},e^{-2x}\\}$. Se fosse $u''+4u$ ($\\alpha=\\pm2i$) la base sarebbe $\\{\\sin2x,\\cos2x\\}$. Distinguere il segno del termine di ordine zero decide fra crescita esponenziale e oscillazione: errore frequente scambiarli."
    }]
  },

  { pool:"green", src:"20230620 Es.4", steps:[{
      t:"Perch&eacute; con BC di Dirichlet il segno di $W=6/x$ non &egrave; mai zero su $[1,2]$?",
      opts:[
        {x:"per Abel $W\\propto1/x$ non si annulla su $[1,2]$; segno costante positivo, base sempre indipendente",c:true},
        {x:"perch&eacute; $6>0$"},
        {x:"perch&eacute; l'intervallo &egrave; corto"},
        {x:"perch&eacute; le BC sono simmetriche"}],
      hint:"$1/x$ non si annulla per $x$ finito: l'identit&agrave; di Abel garantisce segno costante.",
      sol:"<b>Segno costante del Wronskiano.</b> Per Abel $W(x)=W(x_0)e^{-\\int dx/x}\\propto1/x$, positivo su $[1,2]$: mai nullo, dunque $u_1=x-1/x$ e $u_2=x-4/x$ restano indipendenti su tutto l'intervallo e la Green &egrave; ben definita. Il valore $6/x$ conferma: nessuno zero in $[1,2]$."
    }]
  },

  { pool:"green", src:"tipo &middot; b01", steps:[
    { t:"Problema completo: $-u''=f$ su $[0,\\pi]$, $u(0)=u(\\pi)=0$, con $f(x)=\\sin x$. Prima si verifica l'esistenza della Green:",
      opts:[
        {x:"l'omogeneo $-u''=0$ con Dirichlet ha solo $u\\equiv0$: la Green esiste",c:true},
        {x:"$0$ &egrave; autovalore: la Green non esiste"},
        {x:"non serve verificare"},
        {x:"$f=\\sin x$ garantisce l'esistenza"}],
      hint:"Le uniche soluzioni affini nulle a entrambi gli estremi sono la funzione nulla: applica l'alternativa di Fredholm.",
      sol:"<b>Esistenza (Fredholm).</b> $-u''=0$ d&agrave; $u$ affine; $u(0)=u(\\pi)=0\\Rightarrow u\\equiv0$. Nessuna omogenea non banale, quindi $0$ non &egrave; autovalore di $-d^2/dx^2$ con Dirichlet su $[0,\\pi]$: la Green esiste. (Attenzione: $-u''=\\lambda u$ ha autovalori $n^2$, il pi&ugrave; basso $1$, mai $0$.)",
      cont:"Risolvi direttamente e confronta &rarr;" },
    { t:"La soluzione di $-u''=\\sin x$, $u(0)=u(\\pi)=0$ &egrave;:",
      opts:[
        {x:"$u(x)=\\sin x$",c:true},
        {x:"$u(x)=-\\sin x$"},
        {x:"$u(x)=x\\sin x$"},
        {x:"$u(x)=1-\\cos x$"}],
      hint:"Cerca $u_p=C\\sin x$: $-u_p''=C\\sin x$, uguaglia a $\\sin x$. Poi controlla che soddisfi gi&agrave; le BC.",
      sol:"<b>Soluzione particolare che rispetta le BC.</b> $u_p=\\sin x\\Rightarrow-u_p''=\\sin x$ ✓, e $\\sin0=\\sin\\pi=0$: le BC sono gi&agrave; soddisfatte, nessuna omogenea da aggiungere. Coerente con $u=\\int G\\sin\\xi\\,d\\xi$. Qui $\\sin x$ &egrave; autofunzione con autovalore $1$: la Green agisce come $1/\\lambda=1$." }
    ]
  },

  { pool:"green", src:"tipo &middot; b01", steps:[{
      t:"Un operatore $\\mathcal{L}u=a_2(x)u''+\\dots$ con $a_2(x_0)=0$ in un punto INTERNO $x_0\\in(a,b)$:",
      opts:[
        {x:"ha un punto singolare: la costruzione standard della Green pu&ograve; fallire o richiedere condizioni extra in $x_0$",c:true},
        {x:"non cambia nulla, si procede come sempre"},
        {x:"ha sempre Green nulla"},
        {x:"ha Wronskiano infinito"}],
      hint:"Dividere per $a_2$ per portare in forma standard richiede $a_2\\neq0$: dove si annulla la teoria elementare non si applica direttamente.",
      sol:"<b>Punto singolare interno.</b> Il salto $[G']=1/a_2(\\xi)$ e la riduzione a forma standard richiedono $a_2\\neq0$. Uno zero interno di $a_2$ (es. Eulero $x^2u''$ con $0\\in(a,b)$) &egrave; un punto singolare: le soluzioni possono non essere limitate e servono condizioni di regolarit&agrave; l&igrave;. Negli esami l'intervallo esclude tipicamente il punto singolare (es. $[1,2]$ evita $x=0$)."
    }]
  },

  { pool:"green", src:"tipo &middot; b01", steps:[{
      t:"Riepilogo-strategia: per un problema ai limiti $\\mathcal{L}u=f$ con sorgente REGOLARE, l'ordine corretto delle mosse &egrave;:",
      opts:[
        {x:"omogenea &rarr; verifica esistenza (Fredholm/Wronskiano) &rarr; rami adattati al bordo &rarr; continuit&agrave; + salto &rarr; $u=\\int Gf$",c:true},
        {x:"$u=\\int Gf$ &rarr; omogenea &rarr; BC"},
        {x:"salto della derivata &rarr; sorgente &rarr; BC &rarr; omogenea"},
        {x:"si sceglie a caso una base e si impongono le BC alla fine"}],
      hint:"L'esistenza va controllata prima di costruire: se la Green non c'&egrave;, la costruzione &egrave; tempo perso.",
      sol:"<b>Sequenza operativa completa.</b> (1) risolvi l'omogenea; (2) verifica con l'<b>alternativa di Fredholm</b> che l'omogeneo con le BC dia solo $0$ (equivalente: $W\\neq0$); (3) costruisci $u_1,u_2$ adattate agli estremi; (4) imponi continuit&agrave; $[G]=0$ e salto $[G']=1/a_2(\\xi)$ col segno giusto; (5) integra $u=\\int Gf$. La verifica di simmetria chiude il controllo."
    }]
  }

];

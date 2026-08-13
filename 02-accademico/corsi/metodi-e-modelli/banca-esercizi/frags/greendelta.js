Q.greendelta = [

  /* ===================== CONCETTUALI + MODUS OPERANDI ===================== */

  { pool:"greendelta", src:"tipo &middot; b01", steps:[{
      t:"La distribuzione $\\delta'$ &egrave; definita, su una funzione di prova $\\varphi$, da:",
      opts:[
        {x:"$\\langle\\delta',\\varphi\\rangle=-\\varphi'(0)$",c:true},
        {x:"$\\langle\\delta',\\varphi\\rangle=\\varphi'(0)$"},
        {x:"$\\langle\\delta',\\varphi\\rangle=\\varphi(0)$"},
        {x:"$\\langle\\delta',\\varphi\\rangle=-\\varphi(0)$"}],
      hint:"La derivata distribuzionale scarica la derivata sulla test con un segno meno: $\\langle T',\\varphi\\rangle=-\\langle T,\\varphi'\\rangle$.",
      sol:"<b>Definizione di derivata distribuzionale.</b> $\\langle\\delta',\\varphi\\rangle=-\\langle\\delta,\\varphi'\\rangle=-\\varphi'(0)$: si scarica la derivata sulla funzione di prova (che &egrave; $C^\\infty$) col segno meno dell'integrazione per parti. La $\\delta'$ &egrave; un funzionale perfettamente rigoroso, non una funzione: legge la PENDENZA della test nell'origine."
    }]
  },

  { pool:"greendelta", src:"nucleo 15", steps:[{
      t:"L'identit&agrave; $x\\,\\delta'(x)$ vale:",
      opts:[
        {x:"$-\\delta(x)$",c:true},
        {x:"$0$"},
        {x:"$\\delta(x)$"},
        {x:"$\\delta'(x)$"}],
      hint:"Applica a una $\\varphi$: $\\langle x\\delta',\\varphi\\rangle=\\langle\\delta',x\\varphi\\rangle=-(x\\varphi)'|_0$.",
      sol:"<b>Identit&agrave; $x\\delta'=-\\delta$.</b> $\\langle x\\delta',\\varphi\\rangle=\\langle\\delta',x\\varphi\\rangle=-\\frac{d}{dx}(x\\varphi)\\big|_{0}=-(\\varphi+x\\varphi')\\big|_0=-\\varphi(0)=\\langle-\\delta,\\varphi\\rangle$. Quindi $x\\delta'(x)=-\\delta(x)$. &Egrave; la stessa struttura che, moltiplicando l'ODE per una potenza di $x$, fa comparire un termine $\\delta$ accanto alla $\\delta'$."
    }]
  },

  { pool:"greendelta", src:"nucleo 15", steps:[{
      t:"Per una funzione liscia $g$, il prodotto $g(x)\\,\\delta'(x-a)$ &egrave;:",
      opts:[
        {x:"$g(a)\\,\\delta'(x-a)-g'(a)\\,\\delta(x-a)$",c:true},
        {x:"$g(a)\\,\\delta'(x-a)$"},
        {x:"$g(a)\\,\\delta'(x-a)+g'(a)\\,\\delta(x-a)$"},
        {x:"$g'(a)\\,\\delta(x-a)$"}],
      hint:"Espandi $g$ intorno ad $a$: $g(x)=g(a)+g'(a)(x-a)+\\dots$ e usa $(x-a)\\delta'(x-a)=-\\delta(x-a)$.",
      sol:"<b>Regola del prodotto con $\\delta'$.</b> $g(x)\\delta'(x-a)=[g(a)+g'(a)(x-a)+\\dots]\\delta'(x-a)=g(a)\\delta'(x-a)+g'(a)(x-a)\\delta'(x-a)=g(a)\\delta'(x-a)-g'(a)\\delta(x-a)$, usando $(x-a)\\delta'(x-a)=-\\delta(x-a)$. Questa &egrave; l'origine ESATTA del termine $\\delta$ extra quando il coefficiente principale dell'operatore non &egrave; costante."
    }]
  },

  { pool:"greendelta", src:"tipo &middot; b03 Set 2", steps:[{
      t:"L'integrale $\\int_{-\\infty}^{+\\infty}(x-\\xi)\\,\\delta'(x-\\xi)\\,dx$ vale:",
      opts:[
        {x:"$-1$",c:true},
        {x:"$0$"},
        {x:"$+1$"},
        {x:"$\\xi$"}],
      hint:"Prendi come funzione di prova $\\varphi(x)=x-\\xi$: $\\int\\delta'(x-\\xi)\\varphi=-\\varphi'(\\xi)$.",
      sol:"<b>Azione di $\\delta'$ su una test lineare.</b> Con $\\varphi(x)=x-\\xi$, $\\int\\delta'(x-\\xi)\\varphi(x)\\,dx=-\\varphi'(\\xi)=-1$. &Egrave; il conto che &laquo;accende&raquo; la seconda condizione di raccordo: moltiplicando l'equazione per $(x-\\xi)$ e integrando, il membro con la sorgente d&agrave; $-1$."
    }]
  },

  { pool:"greendelta", src:"tipo &middot; b01", steps:[{
      t:"Con sorgente $\\delta(x-\\xi)$ (impulso semplice) in $\\mathcal{L}u=a_2u''+\\dots=\\delta$, le condizioni di raccordo sono:",
      opts:[
        {x:"$u$ CONTINUA ($[u]=0$) e la DERIVATA salta ($[u']=1/a_2(\\xi)$)",c:true},
        {x:"$u$ salta e la derivata &egrave; continua"},
        {x:"salta sia $u$ sia $u'$"},
        {x:"$[u]=1$ e $[u']=1$"}],
      hint:"Integrando una sola volta, sopravvive solo $a_2u''$; la funzione non salta, la sua derivata s&igrave;.",
      sol:"<b>Condizioni di raccordo (sorgente $\\delta$).</b> Integrando $a_2u''+\\dots=\\delta$ su $[\\xi^-,\\xi^+]$: $a_2(\\xi)[u']=1$, mentre $[u]=0$ (la funzione resta continua, altrimenti $u''$ conterrebbe una $\\delta'$ che qui non c'&egrave;). Con $\\delta$ salta la DERIVATA. &Egrave; il caso opposto a quello con $\\delta'$."
    }]
  },

  { pool:"greendelta", src:"nucleo 15", steps:[{
      t:"Nel caso pulito $-u''=\\delta'(x-\\xi)$, le condizioni di raccordo diventano:",
      opts:[
        {x:"la FUNZIONE salta ($[u]=-1$) e la DERIVATA &egrave; continua ($[u']=0$)",c:true},
        {x:"la funzione &egrave; continua e la derivata salta di $1$"},
        {x:"$[u]=1$ e $[u']=1$"},
        {x:"entrambe continue"}],
      hint:"Con $\\delta'$ i ruoli si scambiano rispetto a $\\delta$: qui integrando due volte trovi che &egrave; $u$ a saltare.",
      sol:"<b>Lo scambio di ruoli (nucleo 15).</b> Per $-u''=\\delta'(x-\\xi)$: integrando una volta $-[u']=\\int\\delta'=0\\Rightarrow[u']=0$ (derivata continua); moltiplicando per $(x-\\xi)$ e integrando, $[u]=-1$ (la funzione salta). <b>Con $\\delta'$ salta la funzione, non la derivata</b>: firma inversa rispetto alla $\\delta$. Vale cos&igrave; pulito SOLO per l'operatore $-d^2/dx^2$ puro."
    }]
  },

  { pool:"greendelta", src:"20230704 Es.4", steps:[{
      t:"TRAPPOLA n.1 di b01. Con una sorgente $\\delta'$ servono:",
      opts:[
        {x:"DUE condizioni di raccordo (una sul salto della funzione, una sulla derivata): il sistema per $a,b$ ha bisogno di entrambe",c:true},
        {x:"una sola condizione, come con $\\delta$"},
        {x:"nessuna condizione, si legge la soluzione direttamente"},
        {x:"tre condizioni"}],
      hint:"$\\delta'$ &egrave; pi&ugrave; singolare di $\\delta$: fermarsi a una condizione lascia il sistema per i coefficienti sottodeterminato.",
      sol:"<b>Due condizioni di raccordo (compito 03/07/2024).</b> La sorgente $\\delta'$ &egrave; la derivata di $\\delta$: contiene informazione su DUE ordini di salto. Servono entrambe le condizioni (tipicamente $[u]$ e $[u']$) per chiudere il sistema $2\\times2$ nei coefficienti $a,b$ dei due rami. Fermarsi alla prima &laquo;accensione&raquo; lascia il sistema sottodeterminato: errore segnalato nelle soluzioni ufficiali."
    }]
  },

  { pool:"greendelta", src:"20230704 Es.4", steps:[{
      t:"TRAPPOLA n.2 di b01. L'errore da NON fare con $\\delta'$ &egrave;:",
      opts:[
        {x:"confondere la continuit&agrave; di $f$ con quella di $f'$: applicare &laquo;continua + salto della derivata&raquo; (regola della $\\delta$) alla $\\delta'$",c:true},
        {x:"integrare per parti"},
        {x:"usare la base dell'omogenea"},
        {x:"imporre le condizioni al bordo"}],
      hint:"Chi ricorda a memoria lo schema della $\\delta$ e lo riusa sulla $\\delta'$ scambia esattamente il ruolo di $f$ e $f'$.",
      sol:"<b>Continuit&agrave; di $f$ vs $f'$ (trappola b01).</b> Con $\\delta$: $f$ continua, $f'$ salta. Con $\\delta'$: (nel caso $-u''$) $f$ salta, $f'$ continua. Applicare meccanicamente lo schema della $\\delta$ scambia i ruoli e sbaglia l'INTERO esercizio. La difesa &egrave; non ricordare a memoria ma <b>integrare l'equazione attorno al punto</b> e leggere cosa salta."
    }]
  },

  { pool:"greendelta", src:"tipo &middot; b01", steps:[{
      t:"MODUS OPERANDI. Il metodo ROBUSTO per trovare le condizioni di raccordo, valido anche con coefficienti variabili o termine $u'$, &egrave;:",
      opts:[
        {x:"scrivere $u''=\\{u''\\}+[u']\\delta+[u]\\delta'$, sostituire nell'equazione e UGUAGLIARE i coefficienti di $\\delta$ e $\\delta'$ separatamente",c:true},
        {x:"ricordare a memoria &laquo;$\\delta$: derivata salta, $\\delta'$: funzione salta&raquo;"},
        {x:"integrare una sola volta e leggere il risultato"},
        {x:"imporre solo la continuit&agrave;"}],
      hint:"Le regole a memoria valgono solo per $-u''$ puro; il match dei coefficienti distribuzionali funziona sempre.",
      sol:"<b>Match dei coefficienti distribuzionali.</b> Una funzione con salto $[u]$ e derivata con salto $[u']$ ha derivata seconda $u''=\\{u''\\}+[u']\\delta(x-\\xi)+[u]\\delta'(x-\\xi)$. Si sostituisce in $\\mathcal{L}u=$ sorgente e si uguagliano i coefficienti di $\\delta'$ e di $\\delta$: due equazioni, sempre corrette, anche quando la regola mnemonica fallisce (coeff. variabili, termine $u'$)."
    }]
  },

  { pool:"greendelta", src:"20231116 Es.4", steps:[{
      t:"In $u''-3u'+2u=\\delta'(x-\\xi)$, il termine $-3u'$ FA saltare anche la derivata? (Ricordando $u'=\\{u'\\}+[u]\\delta$.)",
      opts:[
        {x:"S&igrave;: il match d&agrave; $[u]=1$ (da $\\delta'$) e $[u']-3[u]=0\\Rightarrow[u']=3$: la derivata NON &egrave; continua",c:true},
        {x:"No, la derivata resta continua come in $-u''=\\delta'$"},
        {x:"No, salta solo la funzione di $1$"},
        {x:"S&igrave;, ma con $[u']=1$"}],
      hint:"$-3u'=-3\\{u'\\}-3[u]\\delta$: il termine $-3[u]\\delta$ si somma al $[u']\\delta$ da $u''$. Uguaglia il coefficiente di $\\delta$ a zero.",
      sol:"<b>Derivata che salta col termine $u'$ (compito 16/11/2024).</b> $u''-3u'+2u=\\{\\dots\\}+[u']\\delta+[u]\\delta'-3[u]\\delta=\\delta'$. Coefficiente di $\\delta'$: $[u]=1$. Coefficiente di $\\delta$: $[u']-3[u]=0\\Rightarrow[u']=3$. Quindi con questo operatore la derivata SALTA (di $3$): la regola pulita &laquo;$\\delta'\\Rightarrow$ derivata continua&raquo; vale solo per $-u''$ senza termine $u'$. Il match dei coefficienti coglie la differenza."
    }]
  },

  { pool:"greendelta", src:"20230704 Es.4", steps:[{
      t:"In $x^2u''=\\delta'(x-1)$ il coefficiente VARIABILE $x^2$ produce, oltre a $[u]=1$, anche:",
      opts:[
        {x:"un salto della derivata $[u']=2$, dal termine $-g'(a)\\delta$ con $g=x^2$, $g'(1)=2$",c:true},
        {x:"nessun effetto extra, $[u']=0$"},
        {x:"$[u']=1$"},
        {x:"un salto di $u''$"}],
      hint:"$x^2\\delta'(x-1)=1\\cdot\\delta'(x-1)-2\\cdot\\delta(x-1)$ per la regola del prodotto: il $-2\\delta$ costringe la derivata a saltare.",
      sol:"<b>Coefficiente variabile (compito 03/07/2024).</b> $x^2\\delta'(x-1)=g(1)\\delta'-g'(1)\\delta=\\delta'(x-1)-2\\delta(x-1)$ con $g=x^2$. Il match: $[u]=1$ (da $\\delta'$) e $[u']-2[u]=0\\Rightarrow[u']=2$. Anche qui la derivata salta, per il $-2\\delta$ generato dal coefficiente non costante. La regola mnemonica pulita non basta: serve la regola del prodotto $g\\delta'=g(a)\\delta'-g'(a)\\delta$."
    }]
  },

  { pool:"greendelta", src:"nucleo 15", steps:[{
      t:"Le due FIRME grafiche da riconoscere a colpo d'occhio sono:",
      opts:[
        {x:"sorgente $\\delta$: curva continua con ANGOLO (salto della pendenza); sorgente $\\delta'$: curva con SALTO verticale e pendenze uguali",c:true},
        {x:"$\\delta$: salto verticale; $\\delta'$: angolo"},
        {x:"entrambe: angolo"},
        {x:"entrambe: salto verticale"}],
      hint:"$\\delta$ &rarr; $u''$ ha una $\\delta$, quindi $u'$ salta: angolo. $\\delta'$ &rarr; $u$ salta: gradino.",
      sol:"<b>Firme grafiche (nucleo 15).</b> Con $\\delta$ la funzione &egrave; continua ma ha un ANGOLO in $\\xi$ (la derivata salta): $u=x_{<}(1-x_{>})$ per $-u''=\\delta$. Con $\\delta'$ (caso $-u''$) la funzione SALTA e le due pendenze coincidono. Se disegni la tua soluzione e non vedi la firma giusta, hai imposto la condizione sbagliata: &egrave; il controllo pi&ugrave; veloce."
    }]
  },

  { pool:"greendelta", src:"tipo &middot; b01", steps:[{
      t:"Quando la sorgente dell'ODE &egrave; una $\\delta(x-a)$ (non una $f$ regolare), la soluzione del problema ai limiti:",
      opts:[
        {x:"COINCIDE con la funzione di Green $G(x,a)$ valutata in quel $\\xi=a$",c:true},
        {x:"si ottiene solo integrando $\\int G f$"},
        {x:"non esiste"},
        {x:"&egrave; la derivata di $G$"}],
      hint:"La Green &egrave; per definizione la risposta a $\\delta(x-\\xi)$: se la sorgente &egrave; gi&agrave; $\\delta(x-a)$, la risposta &egrave; $G$ stessa.",
      sol:"<b>La soluzione con sorgente $\\delta$ &egrave; la Green.</b> Poich&eacute; $\\mathcal{L}_xG(x,\\xi)=\\delta(x-\\xi)$ per definizione, il problema $\\mathcal{L}u=\\delta(x-a)$ con le stesse BC ha soluzione $u(x)=G(x,a)$: non serve integrare. &Egrave; il caso del compito 06/11/2024 (Eulero radiale con $\\delta(x-a)$), dove &laquo;risolvere l'equazione&raquo; e &laquo;calcolare la Green&raquo; sono la stessa cosa."
    }]
  },

  { pool:"greendelta", src:"tipo &middot; b01", steps:[{
      t:"MODUS OPERANDI. Ricevuto un esercizio &laquo;ODE con sorgente distribuzionale&raquo;, come si riconosce il TIPO e si sceglie la strada?",
      opts:[
        {x:"si guarda se la sorgente &egrave; $\\delta$ (una condizione di salto sulla derivata) o $\\delta'$ (due condizioni): questo decide quante e quali giunzioni imporre",c:true},
        {x:"si integra sempre due volte a prescindere"},
        {x:"si applica sempre continuit&agrave; + salto della derivata"},
        {x:"si usa la trasformata di Fourier in ogni caso"}],
      hint:"Il grado della derivata della $\\delta$ nella sorgente = numero di condizioni di raccordo indipendenti da imporre.",
      sol:"<b>Riconoscere il tipo.</b> Primo passo: leggere l'ordine della sorgente. $\\delta^{(n)}$ richiede di far comparire $\\delta,\\delta',\\dots,\\delta^{(n)}$ nel match, cio&egrave; imporre condizioni fino all'ordine giusto. Per $\\delta$: una giunzione non banale ($[u']=1/a_2$, $[u]=0$). Per $\\delta'$: due ($[u]$ e $[u']$, con valori dettati dai coefficienti). Solo dopo si costruiscono i rami adattati al bordo."
    }]
  },

  { pool:"greendelta", src:"tipo &middot; b01", steps:[{
      t:"Il segno del salto (es. $[u]=+1$ oppure $-1$) si determina:",
      opts:[
        {x:"leggendolo dall'equazione tramite il match dei coefficienti, non a memoria",c:true},
        {x:"&egrave; sempre $+1$"},
        {x:"&egrave; sempre $-1$"},
        {x:"dal segno della soluzione al bordo"}],
      hint:"Un segno meno davanti a $u''$, o il coefficiente principale, cambia il segno del salto: va letto caso per caso.",
      sol:"<b>Segno del salto dall'equazione.</b> Il segno di $[u]$ o $[u']$ dipende dal segno del coefficiente principale e da quello della sorgente. Es.: $-u''=\\delta'$ d&agrave; $[u]=-1$; $x^2u''=\\delta'(x-1)$ d&agrave; $[u]=+1$. Va SEMPRE ricavato uguagliando i coefficienti di $\\delta'$ (e $\\delta$), mai assunto. &Egrave; l'errore-segno pi&ugrave; frequente dopo lo scambio $f\\leftrightarrow f'$."
    }]
  },

  { pool:"greendelta", src:"tipo &middot; b03 Set 2", steps:[{
      t:"Per la composizione, $\\delta(g(x))$ con $g$ a zeri semplici $x_k$ vale:",
      opts:[
        {x:"$\\displaystyle\\sum_k\\frac{\\delta(x-x_k)}{|g'(x_k)|}$",c:true},
        {x:"$\\displaystyle\\sum_k\\delta(x-x_k)$"},
        {x:"$\\displaystyle\\sum_k g'(x_k)\\,\\delta(x-x_k)$"},
        {x:"$\\delta(x)/|g'(0)|$"}],
      hint:"Ogni zero contribuisce con peso $1/|g'(x_k)|$: &egrave; il fattore che spesso si dimentica.",
      sol:"<b>Formula di composizione della $\\delta$.</b> $\\delta(g(x))=\\sum_k\\delta(x-x_k)/|g'(x_k)|$, somma sugli zeri semplici di $g$. Es.: $\\delta(x^2-a^2)=\\frac{1}{2|a|}[\\delta(x-a)+\\delta(x+a)]$. Dimenticare il fattore $1/|g'(x_k)|$ &egrave; l'errore tipico (d&agrave; un risultato scalato)."
    }]
  },

  /* ===================== ESERCIZI (calcolo + multi-passo) ===================== */

  { pool:"greendelta", src:"20230704 Es.4", steps:[
    { t:"Compito 03/07/2024: $x^2u''=\\delta'(x-1)$ su $[0,2]$, $u(0)=u(2)=0$. L'omogenea $x^2u''=0$ e i rami adattati al bordo sono:",
      opts:[
        {x:"base $\\{1,x\\}$; $u_1=x$ (annulla in $0$), $u_2=1-x/2$ (annulla in $2$)",c:true},
        {x:"base $\\{x,1/x\\}$; $u_1=x-1/x$, $u_2=x-4/x$"},
        {x:"base $\\{e^{x},e^{2x}\\}$"},
        {x:"base $\\{1,x^2\\}$"}],
      hint:"$x^2u''=0$ per $x\\neq0$ significa $u''=0$: funzioni affini. Scegli quella nulla in $0$ e quella nulla in $2$.",
      sol:"<b>Rami dall'omogenea.</b> $x^2u''=0\\Rightarrow u''=0$: base $\\{1,x\\}$. $u_1(0)=0\\Rightarrow u_1=x$; $u_2(2)=0\\Rightarrow u_2=1-x/2$. Struttura $u=a\\,x$ per $x<1$, $u=b(1-x/2)$ per $x>1$: due incognite $a,b$ da fissare con le DUE condizioni di raccordo della $\\delta'$.",
      cont:"Ricava le due condizioni di raccordo &rarr;" },
    { t:"Poich&eacute; $x^2\\delta'(x-1)=\\delta'(x-1)-2\\delta(x-1)$, il match dei coefficienti d&agrave;:",
      opts:[
        {x:"$[u]=1$ (da $\\delta'$) e $[u']=2$ (da $\\delta$, per il termine $-2\\delta$)",c:true},
        {x:"$[u]=1$ e $[u']=0$"},
        {x:"$[u]=0$ e $[u']=1$"},
        {x:"$[u]=-1$ e $[u']=-2$"}],
      hint:"Scrivi $u''=\\{u''\\}+[u']\\delta+[u]\\delta'$, moltiplica per $x^2$ (usando $x^2\\delta'=\\delta'-2\\delta$) e uguaglia al secondo membro, che &egrave; solo $\\delta'$.",
      sol:"<b>Match dei coefficienti distribuzionali.</b> $x^2u''=x^2\\{u''\\}+[u']\\,x^2\\delta+[u]\\,x^2\\delta'$. Usando $x^2\\delta(x-1)=\\delta(x-1)$ e $x^2\\delta'(x-1)=\\delta'(x-1)-2\\delta(x-1)$: il coefficiente di $\\delta'$ &egrave; $[u]$, quello di $\\delta$ &egrave; $[u']-2[u]$. Il secondo membro &egrave; $\\delta'(x-1)$ (nessun termine $\\delta$), quindi $[u]=1$ e $[u']-2[u]=0\\Rightarrow[u']=2$. Con coefficiente VARIABILE la derivata salta (di $2$): non &egrave; il caso pulito del $-u''$.",
      cont:"Risolvi il sistema per $a,b$ &rarr;" },
    { t:"Con $[u]=b/2-a=1$ e $[u']=-b/2-a=2$, la soluzione &egrave;:",
      opts:[
        {x:"$a=-3/2$, $b=-1$: $u=-\\dfrac{3x}{2}\\,\\theta(1-x)+\\Big(\\dfrac{x}{2}-1\\Big)\\theta(x-1)$",c:true},
        {x:"$a=3/2$, $b=1$"},
        {x:"$a=-1$, $b=-3/2$"},
        {x:"$a=0$, $b=-1$"}],
      hint:"Somma le due equazioni: $(b/2-a)+(-b/2-a)=-2a=3$.",
      sol:"<b>Sistema $2\\times2$ (compito 03/07/2024).</b> $[u]=b/2-a=1$; $[u']=-b/2-a=2$. Sommando: $-2a=3\\Rightarrow a=-3/2$; poi $b/2=1+a=-1/2\\Rightarrow b=-1$. Quindi $u=-\\tfrac{3x}{2}$ per $x<1$ e $u=x/2-1$ per $x>1$: $u=-\\tfrac{3x}{2}\\theta(1-x)+(\\tfrac{x}{2}-1)\\theta(x-1)$. Verifica: $u(0)=0$, $u(2)=0$, e in $x=1$ la funzione salta di $1$ e la derivata di $2$." }
    ]
  },

  { pool:"greendelta", src:"20231116 Es.4", steps:[
    { t:"Compito 16/11/2024: $u''-3u'+2u=\\delta'(x-1)$ su $[0,2]$, $u(0)=u(2)=0$. I rami adattati sono:",
      opts:[
        {x:"$u_1=e^{x}-e^{2x}$ ($u_1(0)=0$) e $u_2=e^{x}-e^{2x-2}$ ($u_2(2)=0$)",c:true},
        {x:"$u_1=e^{2x}$ e $u_2=e^{x}$"},
        {x:"$u_1=e^{x}+e^{2x}$ e $u_2=e^{x}+e^{2x-2}$"},
        {x:"$u_1=x$ e $u_2=2-x$"}],
      hint:"Base $\\{e^{x},e^{2x}\\}$ (caratteristica $\\alpha^2-3\\alpha+2=0$). Combina i due esponenziali per annullare a ciascun estremo.",
      sol:"<b>Rami a coefficienti costanti.</b> $\\alpha^2-3\\alpha+2=0\\Rightarrow\\alpha=1,2$. $u_1=e^{x}-e^{2x}$ ha $u_1(0)=1-1=0$; $u_2=e^{x}-e^{2x-2}$ ha $u_2(2)=e^{2}-e^{2}=0$. Wronskiano $W=(e^{2}-1)e^{3x-2}\\neq0$: indipendenti, la Green esiste.",
      cont:"Ricava le due condizioni &rarr;" },
    { t:"Il termine $-3u'$ (con $u'=\\{u'\\}+[u]\\delta$) fa s&igrave; che le condizioni siano:",
      opts:[
        {x:"$[u]=1$ (da $\\delta'$) e $[u']=3$ (da $\\delta$): il risultato &egrave; $u=\\dfrac{1-2e}{e^{3}-e}(e^{2x}-e^{x})\\theta(1-x)+\\dfrac{2-e}{e^{2}-1}(e^{x}-e^{2x-2})\\theta(x-1)$",c:true},
        {x:"$[u]=1$ e $[u']=0$ (derivata continua)"},
        {x:"$[u]=0$ e $[u']=1$"},
        {x:"$[u]=1$ e $[u']=-3$"}],
      hint:"Nel match, $-3u'$ porta $-3[u]\\delta$: sommato al $[u']\\delta$ da $u''$ e uguagliato a zero d&agrave; $[u']=3[u]$.",
      sol:"<b>Derivata che salta col termine $u'$ (compito 16/11/2024).</b> $u''-3u'+2u=\\{\\dots\\}+[u']\\delta+[u]\\delta'-3[u]\\delta=\\delta'$. Coefficiente di $\\delta'$: $[u]=1$. Coefficiente di $\\delta$: $[u']-3[u]=0\\Rightarrow[u']=3$. NON &egrave; il caso pulito $\\delta'\\Rightarrow$ derivata continua: qui il termine $-3u'$ fa saltare anche la derivata. Imponendo le due condizioni sui rami si ottiene il risultato di b01." }
    ]
  },

  { pool:"greendelta", src:"nucleo 15", steps:[
    { t:"Caso pulito: $-u''=\\delta'(x-\\tfrac12)$ su $[0,1]$, $u(0)=u(1)=0$. Le due condizioni di raccordo sono:",
      opts:[
        {x:"$[u']=0$ (derivata continua) e $[u]=-1$ (la funzione salta)",c:true},
        {x:"$[u']=1$ e $[u]=0$"},
        {x:"$[u']=-1$ e $[u]=0$"},
        {x:"$[u']=0$ e $[u]=1$"}],
      hint:"Integra $-u''=\\delta'$ una volta ($\\Rightarrow[u']$) e poi moltiplica per $(x-\\tfrac12)$ e integra ($\\Rightarrow[u]$).",
      sol:"<b>Condizioni pulite per $-u''=\\delta'$ (nucleo 15).</b> Integrando una volta: $-[u']=\\int\\delta'=0\\Rightarrow[u']=0$. Moltiplicando per $(x-\\tfrac12)$ e integrando: $-\\int(x-\\tfrac12)u''=[u]$ e $\\int(x-\\tfrac12)\\delta'=-1\\Rightarrow[u]=-1$. Con l'operatore $-d^2/dx^2$ puro la derivata &egrave; continua e la funzione salta.",
      cont:"Determina i due rami &rarr;" },
    { t:"Con $u=Ax$ per $x<\\tfrac12$ e $u=B(1-x)$ per $x>\\tfrac12$, imponendo $[u']=0$ e $[u]=-1$:",
      opts:[
        {x:"$B=-A$ (da $[u']=0$) e $-A=-1$ (da $[u]$), quindi $A=1$, $B=-1$",c:true},
        {x:"$A=B=1$"},
        {x:"$A=-1$, $B=1$"},
        {x:"$A=1$, $B=1$"}],
      hint:"$u'(x<)=A$, $u'(x>)=-B$: $[u']=-B-A=0$. Poi $[u]=B(1-\\tfrac12)-A\\tfrac12=-1$ con $B=-A$.",
      sol:"<b>Sistema per i rami.</b> $[u']=-B-A=0\\Rightarrow B=-A$. $[u]=B/2-A/2=-A=-1\\Rightarrow A=1$, $B=-1$. Quindi $u=x$ per $x<\\tfrac12$ e $u=-(1-x)=x-1$ per $x>\\tfrac12$.",
      cont:"Controlla il disegno &rarr;" },
    { t:"Il grafico di $u$ mostra:",
      opts:[
        {x:"due rette di pendenza $1$ (derivata continua) con un SALTO di $-1$ in $x=\\tfrac12$: la firma della $\\delta'$",c:true},
        {x:"un angolo senza salto (firma della $\\delta$)"},
        {x:"una parabola continua"},
        {x:"una funzione costante"}],
      hint:"Pendenza uguale ai due lati = derivata continua; il gradino verticale = salto della funzione.",
      sol:"<b>Firma grafica della $\\delta'$ (nucleo 15).</b> $u=x$ e $u=x-1$ hanno la STESSA pendenza $1$ (derivata continua, $[u']=0$) e differiscono per $-1$ ($[u]=-1$): gradino verticale. &Egrave; la firma opposta alla $\\delta$, che darebbe un angolo senza salto. Il disegno &egrave; il controllo pi&ugrave; rapido dell'esercizio." }
    ]
  },

  { pool:"greendelta", src:"tipo &middot; b01", steps:[
    { t:"CONTRASTO. $-u''=\\delta(x-\\tfrac12)$ su $[0,1]$, $u(0)=u(1)=0$ (sorgente $\\delta$, non $\\delta'$). La Green &egrave;:",
      opts:[
        {x:"$G(x,\\xi)=x_{<}(1-x_{>})$, cio&egrave; $u=x(1-\\tfrac12)$ per $x<\\tfrac12$ e $\\tfrac12(1-x)$ per $x>\\tfrac12$",c:true},
        {x:"$u=x$ per $x<\\tfrac12$, $x-1$ per $x>\\tfrac12$"},
        {x:"$u=\\tfrac12 e^{-|x-1/2|}$"},
        {x:"$u=\\sin\\pi x$"}],
      hint:"Con $\\delta$: continua ($[u]=0$) con derivata che salta ($[u']=-1$). &Egrave; il triangolo, non il gradino.",
      sol:"<b>Green con $\\delta$ (contrasto).</b> $[u]=0$, $[u']=-1$: $G=x_{<}(1-x_{>})$. Con $\\xi=\\tfrac12$: $u=\\tfrac{x}{2}$ per $x<\\tfrac12$ e $\\tfrac{1-x}{2}$ per $x>\\tfrac12$. Funzione continua con ANGOLO in $\\tfrac12$.",
      cont:"Confronta le due firme &rarr;" },
    { t:"La differenza col caso $\\delta'$ (stesso operatore) &egrave;:",
      opts:[
        {x:"$\\delta$ d&agrave; una funzione continua con angolo; $\\delta'$ d&agrave; una funzione con salto e pendenza continua: gli oggetti sono qualitativamente diversi",c:true},
        {x:"sono la stessa soluzione"},
        {x:"differiscono solo per una costante"},
        {x:"$\\delta$ non ha soluzione"}],
      hint:"Angolo vs gradino: &egrave; esattamente lo scambio del ruolo di $f$ e $f'$.",
      sol:"<b>Angolo vs gradino.</b> Con $\\delta$: $u$ continua, $u'$ salta (angolo, triangolo). Con $\\delta'$: $u$ salta, $u'$ continua (gradino). &Egrave; la manifestazione visiva della trappola n.2 di b01: non confondere la continuit&agrave; di $f$ con quella di $f'$. Stessa equazione, sorgenti diverse, firme opposte." }
    ]
  },

  { pool:"greendelta", src:"nucleo 15", steps:[
    { t:"Metodo robusto su $-u''=\\delta'(x-\\xi)$: scritto $u''=\\{u''\\}+[u']\\delta+[u]\\delta'$, sostituendo si ottiene:",
      opts:[
        {x:"$-\\{u''\\}-[u']\\delta-[u]\\delta'=\\delta'(x-\\xi)$",c:true},
        {x:"$\\{u''\\}+[u']\\delta+[u]\\delta'=\\delta'$"},
        {x:"$-\\{u''\\}+[u']\\delta=\\delta'$"},
        {x:"$[u]\\delta=\\delta'$"}],
      hint:"Basta moltiplicare la decomposizione per $-1$ (l'operatore &egrave; $-d^2/dx^2$).",
      sol:"<b>Decomposizione distribuzionale.</b> $u''=\\{u''\\}+[u']\\delta+[u]\\delta'$, quindi $-u''=-\\{u''\\}-[u']\\delta-[u]\\delta'$. Uguagliato a $\\delta'(x-\\xi)$: si confrontano i coefficienti termine per termine.",
      cont:"Uguaglia i coefficienti &rarr;" },
    { t:"Uguagliando i coefficienti di $\\delta'$ e di $\\delta$:",
      opts:[
        {x:"$\\delta'$: $-[u]=1\\Rightarrow[u]=-1$; $\\delta$: $-[u']=0\\Rightarrow[u']=0$",c:true},
        {x:"$[u]=1$ e $[u']=1$"},
        {x:"$[u]=0$ e $[u']=-1$"},
        {x:"$[u]=-1$ e $[u']=-1$"}],
      hint:"La sorgente $\\delta'$ non ha termine $\\delta$: quindi il coefficiente di $\\delta$ a sinistra deve annullarsi.",
      sol:"<b>Match (metodo robusto).</b> Coefficiente di $\\delta'$: $-[u]=1\\Rightarrow[u]=-1$. Coefficiente di $\\delta$: $-[u']=0\\Rightarrow[u']=0$. Ritroviamo, senza regole a memoria, che con $-u''=\\delta'$ la funzione salta ($-1$) e la derivata &egrave; continua. Il metodo del match &egrave; quello che non sbaglia anche con coefficienti variabili." }
    ]
  },

  { pool:"greendelta", src:"tipo &middot; b03 Set 2", steps:[
    { t:"$\\int_0^{\\infty}\\delta(x^2-1)\\,e^{x}\\,dx$. Prima si riscrive $\\delta(x^2-1)$ sugli zeri in $[0,\\infty)$:",
      opts:[
        {x:"solo $x=1$ &egrave; nell'intervallo: $\\delta(x^2-1)=\\dfrac{\\delta(x-1)}{|2x|}\\Big|_{x=1}=\\dfrac{\\delta(x-1)}{2}$",c:true},
        {x:"$\\delta(x^2-1)=\\delta(x-1)+\\delta(x+1)$"},
        {x:"$\\delta(x^2-1)=2\\delta(x-1)$"},
        {x:"$\\delta(x^2-1)=\\delta(x-1)$"}],
      hint:"Zeri di $x^2-1$: $x=\\pm1$; solo $x=1\\in[0,\\infty)$. Peso $1/|g'(1)|$ con $g'=2x$.",
      sol:"<b>Composizione della $\\delta$ (Set 2).</b> $\\delta(x^2-1)=\\sum\\delta(x-x_k)/|g'(x_k)|$; su $[0,\\infty)$ solo $x=1$, con $|g'(1)|=|2\\cdot1|=2$: $\\delta(x^2-1)=\\delta(x-1)/2$.",
      cont:"Valuta l'integrale &rarr;" },
    { t:"Quindi l'integrale vale:",
      opts:[
        {x:"$e/2$",c:true},
        {x:"$e$"},
        {x:"$2e$"},
        {x:"$e^{2}/2$"}],
      hint:"$\\int\\frac{\\delta(x-1)}{2}e^{x}dx=\\frac12 e^{1}$.",
      sol:"<b>Valutazione.</b> $\\int_0^{\\infty}\\frac{\\delta(x-1)}{2}e^{x}dx=\\frac12 e^{1}=e/2$. Il fattore $1/2$ viene dal $|g'(1)|$: dimenticarlo darebbe $e$ (errore tipico segnalato)." }
    ]
  },

  { pool:"greendelta", src:"20241106 Es.4", steps:[
    { t:"Eulero $x^2u''+xu'-u=\\delta(x-\\xi)$ su $[1,2]$, $u(1)=u(2)=0$. Con $u_1=x-1/x$, $u_2=x-4/x$ ($W=6/x$), il salto della derivata &egrave;:",
      opts:[
        {x:"$[G']=1/\\xi^{2}$, perch&eacute; il coefficiente principale &egrave; $a_2=x^2$",c:true},
        {x:"$[G']=1$"},
        {x:"$[G']=6/\\xi$"},
        {x:"$[G']=1/\\xi$"}],
      hint:"Integra $x^2G''+\\dots=\\delta$: sopravvive $x^2G''$, quindi $\\xi^2[G']=1$.",
      sol:"<b>Salto con coefficiente principale (sorgente $\\delta$).</b> Integrando $x^2G''+xG'-G=\\delta$ su $[\\xi^-,\\xi^+]$: $\\xi^2[G']=1\\Rightarrow[G']=1/\\xi^2$. La funzione resta continua ($[G]=0$): sorgente $\\delta$, salta la derivata.",
      cont:"Costruisci la Green &rarr;" },
    { t:"La costante nella struttura $G=c\\,u_1(x_{<})u_2(x_{>})$ vale:",
      opts:[
        {x:"$c=\\dfrac{1}{a_2(\\xi)W(\\xi)}=\\dfrac{1}{\\xi^2\\cdot(6/\\xi)}=\\dfrac{1}{6\\xi}$",c:true},
        {x:"$c=\\dfrac{1}{6}$"},
        {x:"$c=\\dfrac{1}{\\xi^2}$"},
        {x:"$c=6\\xi$"}],
      hint:"$[G']=c\\,W(\\xi)$ deve uguagliare $1/\\xi^2$; con $W(\\xi)=6/\\xi$ si ricava $c$.",
      sol:"<b>Costante dalla condizione di salto.</b> $[G']=c(u_1u_2'-u_1'u_2)|_\\xi=c\\,W(\\xi)=c\\cdot6/\\xi$. Uguagliando a $1/\\xi^2$: $c=1/(6\\xi)$. Quindi $G(x,\\xi)=\\dfrac{(x_{<}-1/x_{<})(x_{>}-4/x_{>})}{6\\xi}$. La soluzione con sorgente $\\delta(x-\\xi)$ COINCIDE con questa $G$." }
    ]
  },

  { pool:"greendelta", src:"tipo &middot; b01", steps:[
    { t:"Verifica di una candidata. Per $-u''=\\delta'(x-\\xi)$ ti propongono $u=Ax$ ($x<\\xi$), $u=B(1-x)$ ($x>\\xi$). Il PRIMO controllo &egrave; la derivata:",
      opts:[
        {x:"$u'(x<)=A$, $u'(x>)=-B$: la continuit&agrave; $[u']=0$ richiede $B=-A$",c:true},
        {x:"$[u']=1$ richiede $B=A+1$"},
        {x:"la derivata deve saltare di $1$"},
        {x:"$u'$ non serve controllarla"}],
      hint:"Con $\\delta'$ (operatore $-u''$) la derivata &egrave; CONTINUA: imponi $[u']=0$.",
      sol:"<b>Primo controllo: derivata continua.</b> Per $-u''=\\delta'$ vale $[u']=0$: $u'(x>)-u'(x<)=-B-A=0\\Rightarrow B=-A$. Chi qui imponesse $[u']=\\pm1$ starebbe applicando la regola della $\\delta$, non della $\\delta'$ (trappola n.2).",
      cont:"Secondo controllo: il salto della funzione &rarr;" },
    { t:"Il secondo controllo, $[u]=-1$, con $B=-A$ d&agrave;:",
      opts:[
        {x:"$B(1-\\xi)-A\\xi=-A(1-\\xi)-A\\xi=-A=-1\\Rightarrow A=1,\\,B=-1$: la candidata &egrave; corretta",c:true},
        {x:"$A=-1$, $B=1$"},
        {x:"$A=B=1$"},
        {x:"la candidata &egrave; incompatibile con le condizioni"}],
      hint:"Sostituisci $B=-A$ nel salto $[u]=B(1-\\xi)-A\\xi$ e uguaglia a $-1$.",
      sol:"<b>Secondo controllo: salto della funzione.</b> $[u]=B(1-\\xi)-A\\xi=-A(1-\\xi)-A\\xi=-A=-1\\Rightarrow A=1$, $B=-1$. Entrambe le condizioni ($[u']=0$ e $[u]=-1$) sono soddisfatte: la forma proposta &egrave; corretta. Una candidata &egrave; valida solo se supera ENTRAMBE le condizioni di raccordo della $\\delta'$." }
    ]
  },

  { pool:"greendelta", src:"tipo &middot; b03 Set 2", steps:[{
      t:"$\\int_{-\\infty}^{+\\infty}\\delta(x^2-4)\\,x^2\\,dx$ vale:",
      opts:[
        {x:"$2$",c:true},
        {x:"$8$"},
        {x:"$4$"},
        {x:"$16$"}],
      hint:"$\\delta(x^2-4)=\\frac{1}{2|x|}[\\delta(x-2)+\\delta(x+2)]$: valuta $x^2$ in $\\pm2$ col peso $1/4$.",
      sol:"<b>Composizione con due zeri.</b> $\\delta(x^2-4)=\\frac{1}{|2x|}[\\delta(x-2)+\\delta(x+2)]=\\frac14[\\delta(x-2)+\\delta(x+2)]$. Quindi $\\int x^2\\delta=\\frac14(4+4)=2$. Errore tipico: dimenticare $1/|g'|$ e rispondere $8$."
    }]
  },

  { pool:"greendelta", src:"tipo &middot; b01", steps:[{
      t:"Per $-u''=\\delta(x-\\xi)$ (impulso semplice) le condizioni di raccordo sono:",
      opts:[
        {x:"$[u]=0$ (continua) e $[u']=-1$ (dal segno meno davanti a $u''$)",c:true},
        {x:"$[u]=-1$ e $[u']=0$"},
        {x:"$[u]=0$ e $[u']=1$"},
        {x:"$[u]=1$ e $[u']=0$"}],
      hint:"Integra $-u''=\\delta$ una volta: $-[u']=1$; la funzione non salta.",
      sol:"<b>Raccordo per $\\delta$ (segno).</b> $\\int(-u'')=-[u']=\\int\\delta=1\\Rightarrow[u']=-1$; $[u]=0$. Con $\\delta$ salta la derivata (di $-1$ per il segno meno dell'operatore), la funzione resta continua. Opposto al caso $\\delta'$ dove salta la funzione."
    }]
  },

  { pool:"greendelta", src:"nucleo 15", steps:[{
      t:"$\\int_{-\\infty}^{+\\infty}\\delta'(x-2)\\,x^{3}\\,dx$ vale:",
      opts:[
        {x:"$-12$",c:true},
        {x:"$8$"},
        {x:"$12$"},
        {x:"$-8$"}],
      hint:"$\\int\\delta'(x-a)\\varphi=-\\varphi'(a)$ con $\\varphi=x^3$, $\\varphi'=3x^2$.",
      sol:"<b>Azione di $\\delta'$.</b> $\\int\\delta'(x-2)x^3\\,dx=-\\frac{d}{dx}(x^3)\\big|_{x=2}=-3(2)^2=-12$. Il segno meno &egrave; la definizione stessa di $\\delta'$ ($\\langle\\delta',\\varphi\\rangle=-\\varphi'$): scordarlo d&agrave; $+12$."
    }]
  },

  { pool:"greendelta", src:"nucleo 15", steps:[{
      t:"La derivata distribuzionale seconda di $e^{-|x|}$ &egrave;:",
      opts:[
        {x:"$e^{-|x|}-2\\delta(x)$, da cui $-\\tfrac12 e^{-|x|}$... anzi $\\tfrac12 e^{-|x|}$ &egrave; la Green di $-d^2/dx^2+1$",c:true},
        {x:"$e^{-|x|}$ senza termine $\\delta$"},
        {x:"$-e^{-|x|}+\\delta(x)$"},
        {x:"$2\\delta(x)$"}],
      hint:"$g'=-\\mathrm{sgn}(x)e^{-|x|}$ ha un salto $-2$ in $0$: la derivata seconda eredita un $-2\\delta$.",
      sol:"<b>Derivata distribuzionale con salto (nucleo 15).</b> $g'=-\\mathrm{sgn}(x)e^{-|x|}$, continua a tratti con salto $-2$ in $0$; quindi $g''=e^{-|x|}-2\\delta(x)$, cio&egrave; $-g''+g=2\\delta$. Perci&ograve; $\\tfrac12 e^{-|x|}$ risolve $(-d^2/dx^2+1)G=\\delta$: &egrave; il potenziale di Yukawa 1D, la Green su tutta la retta."
    }]
  },

  { pool:"greendelta", src:"20231116 Es.4", steps:[{
      t:"Nel compito 16/11/2024, la scelta $u_2=e^{x}-e^{2x-2}$ soddisfa la BC $u(2)=0$ perch&eacute;:",
      opts:[
        {x:"$u_2(2)=e^{2}-e^{2\\cdot2-2}=e^{2}-e^{2}=0$",c:true},
        {x:"$u_2(2)=e^{2}-e^{2x}$ si annulla per ogni $x$"},
        {x:"$u_2(0)=0$"},
        {x:"$u_2$ &egrave; costante"}],
      hint:"Sostituisci $x=2$ nell'esponente $2x-2$: quanto vale $2\\cdot2-2$?",
      sol:"<b>Adattamento al bordo destro.</b> $u_2(2)=e^{2}-e^{2(2)-2}=e^{2}-e^{2}=0$: l'esponente $2x-2$ &egrave; costruito apposta per far coincidere i due esponenziali in $x=2$. &Egrave; il modo standard di adattare la base $\\{e^{x},e^{2x}\\}$ alla condizione $u(2)=0$."
    }]
  },

  { pool:"greendelta", src:"20230704 Es.4", steps:[{
      t:"Verifica del prodotto: $x^2\\,\\delta'(x-1)$ riscritto sui generatori $\\delta',\\delta$ vale:",
      opts:[
        {x:"$\\delta'(x-1)-2\\,\\delta(x-1)$",c:true},
        {x:"$\\delta'(x-1)$"},
        {x:"$\\delta'(x-1)+2\\,\\delta(x-1)$"},
        {x:"$2\\,\\delta(x-1)$"}],
      hint:"Regola $g(x)\\delta'(x-a)=g(a)\\delta'(x-a)-g'(a)\\delta(x-a)$ con $g=x^2$, $a=1$.",
      sol:"<b>Regola del prodotto con $\\delta'$.</b> $g(x)\\delta'(x-a)=g(a)\\delta'-g'(a)\\delta$; con $g=x^2$, $g(1)=1$, $g'(1)=2$: $x^2\\delta'(x-1)=\\delta'(x-1)-2\\delta(x-1)$. &Egrave; il termine $-2\\delta$ che, nel compito 03/07/2024, fa saltare la derivata ($[u']=2$) accanto al salto della funzione."
    }]
  },

  { pool:"greendelta", src:"nucleo 15", steps:[{
      t:"La derivata distribuzionale seconda di $f(x)=|x|$ &egrave;:",
      opts:[
        {x:"$f''=2\\delta(x)$: l'angolo produce una $\\delta$ di peso pari al salto della pendenza",c:true},
        {x:"$f''=0$"},
        {x:"$f''=\\delta(x)$"},
        {x:"$f''=\\mathrm{sgn}(x)$"}],
      hint:"$f'=\\mathrm{sgn}(x)=2H(x)-1$; deriva di nuovo ricordando $H'=\\delta$.",
      sol:"<b>Regola derivata a tratti (nucleo 15).</b> $|x|$ &egrave; continua, $f'=\\mathrm{sgn}(x)$ (nessuna $\\delta$: $f$ non salta). Poi $\\mathrm{sgn}=2H-1$, quindi $f''=2H'=2\\delta$. La pendenza salta da $-1$ a $+1$ (salto $2$): l'angolo genera una $\\delta$ di peso $2$ nella derivata seconda. &Egrave; l'inverso della firma della $\\delta'$ (dove a saltare &egrave; la funzione)."
    }]
  }

];

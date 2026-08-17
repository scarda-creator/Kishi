  /* ===== ESTENSIONE 2026-08-17 (run notturno): sotto-tipi scoperti =====
     Buchi colmati: lim∫fn come esercizio di calcolo (12 apparizioni su 15 compiti,
     nel quiz c'era solo l'ipotesi teorica); convergenza uniforme su intervalli
     assegnati con sup mobile; insieme di convergenza TOTALE; derivata della somma. */

  { pool:"serie", src:"20220124 Es.2 · lim-integrale (calcolo)", steps:[{
      t:"<span class=\"lbl\">ES</span> Con $f_n(x)=\\dfrac{x}{1+2^{-n}+x^2/n^2}\\to f(x)=x$, calcola $\\displaystyle\\lim_{n\\to+\\infty}\\int_1^2 f_n(x)\\,dx$.",
      opts:[
        {x:"$\\tfrac{3}{2}$, perché su $[1,2]$ la convergenza è uniforme e il limite passa sotto il segno",c:true},
        {x:"$0$: il limite di $f_n$ è $0$"},
        {x:"$2$"},
        {x:"Non si può calcolare: su $\\mathbb{R}$ la convergenza non è uniforme"}],
      hint:"L'ostacolo su $\\mathbb{R}$ non è un ostacolo su $[1,2]$: l'ipotesi va verificata sull'intervallo di integrazione, non altrove.",
      sol:"<b>Scambio limite-integrale.</b> Su $[1,2]$ (compatto) $\\sup_{[1,2]}|f_n-f|\\to 0$, quindi $f_n\\to f$ uniformemente e vale $\\lim_n\\int_1^2 f_n=\\int_1^2\\lim_n f_n=\\int_1^2 x\\,dx=\\tfrac{4-1}{2}=\\tfrac32$. Che su tutto $\\mathbb{R}$ la convergenza NON sia uniforme è irrilevante: l'ipotesi si chiede sull'intervallo dove si integra. Questo terzo punto (i. puntuale, ii. uniforme, iii. $\\lim\\int$) è la struttura fissa dell'esercizio di successioni: compare in 12 compiti su 15."
    }]
  },

  { pool:"serie", src:"20230504 Es.2 · lim-integrale (gobba che scappa)", steps:[{
      t:"<span class=\"lbl\">ES</span> $f_n(x)=e^{-(n-x)^2}$, $x\\in\\mathbb{R}$. Quanto vale $\\displaystyle\\lim_{n\\to+\\infty}\\int_0^1 f_n(x)\\,dx$?",
      opts:[
        {x:"$0$: su $[0,1]$ si ha $\\sup|f_n|=e^{-(n-1)^2}\\to 0$, dunque convergenza uniforme e limite $\\int_0^1 0=0$",c:true},
        {x:"$\\sqrt{\\pi}$: l'integrale della gaussiana"},
        {x:"$1$: in ogni $n$ esiste un punto dove $f_n=1$"},
        {x:"Il limite non esiste, perché su $\\mathbb{R}$ la convergenza non è uniforme"}],
      hint:"La gobba di $f_n$ è centrata in $x=n$ e se ne va verso destra: su $[0,1]$ resta solo la coda, e la coda si schiaccia.",
      sol:"<b>Il punto di massimo esce dall'intervallo.</b> $f_n$ ha massimo $1$ in $x=n$: su tutto $\\mathbb{R}$ $\\sup|f_n-0|=1$ e la convergenza non è uniforme. Ma su $[0,1]$, $f_n$ è crescente e $\\sup_{[0,1]}f_n=f_n(1)=e^{-(n-1)^2}\\to0$: uniforme, quindi $\\lim_n\\int_0^1 f_n=0$. La distinzione «uniforme dove integro / non uniforme altrove» è il cuore del punto (iii)."
    }]
  },

  { pool:"serie", src:"20250627 Es.4 · non-uniforme per discontinuità del limite", steps:[{
      t:"$f_n(x)=\\sin\\!\\big(\\tfrac{\\pi}{2}e^{-nx}\\big)$ su $[0,+\\infty)$. Perché la convergenza NON è uniforme sull'insieme di convergenza puntuale?",
      opts:[
        {x:"Perché il limite puntuale è $f(0)=1$ e $f(x)=0$ per $x>0$: discontinuo, mentre le $f_n$ sono continue",c:true},
        {x:"Perché $f_n$ non è limitata"},
        {x:"Perché $e^{-nx}$ non converge uniformemente"},
        {x:"Perché il criterio di Weierstrass fallisce"}],
      hint:"Un limite uniforme di funzioni continue è continuo. Se il limite ha un salto, l'uniforme è esclusa senza fare stime.",
      sol:"<b>Argomento per continuità.</b> Per $x>0$, $e^{-nx}\\to0$ e $\\sin 0=0$; per $x=0$, $f_n(0)=\\sin\\tfrac{\\pi}{2}=1$ per ogni $n$. Il limite $f$ vale $1$ in $0$ e $0$ altrove: discontinuo in $0$. Poiché ogni $f_n$ è continua e il limite uniforme di continue è continuo, la convergenza non può essere uniforme su un insieme che contiene $0$. È la via più economica per negare l'uniforme: prima si guarda se il limite ha un salto, e solo se è continuo si passa alle stime del $\\sup$."
    }]
  },

  { pool:"serie", src:"20250627 Es.4 · lim-integrale lontano dal salto", steps:[{
      t:"<span class=\"lbl\">ES</span> Per la stessa $f_n(x)=\\sin\\!\\big(\\tfrac{\\pi}{2}e^{-nx}\\big)$, calcola $\\displaystyle\\lim_{n\\to+\\infty}\\int_2^5 f_n(x)\\,dx$.",
      opts:[
        {x:"$0$: su $[2,5]$ la convergenza è uniforme ($\\sup=\\sin(\\tfrac{\\pi}{2}e^{-2n})\\to0$), quindi il limite passa dentro",c:true},
        {x:"$3$: la lunghezza dell'intervallo, perché $f_n\\to1$"},
        {x:"Non si può scambiare: la convergenza non è uniforme su $[0,+\\infty)$"},
        {x:"$\\tfrac{\\pi}{2}$"}],
      hint:"Il salto sta in $x=0$, e $0\\notin[2,5]$. Su $[2,5]$ la funzione decresce in $x$: il $\\sup$ si prende all'estremo sinistro.",
      sol:"<b>Il difetto localizzato non blocca lo scambio.</b> Su $[2,5]$, $f_n$ è decrescente e $\\sup_{[2,5]}|f_n|=f_n(2)=\\sin(\\tfrac{\\pi}{2}e^{-2n})\\to0$: convergenza uniforme, quindi $\\lim_n\\int_2^5 f_n=\\int_2^5 0=0$. Morale operativa: la non-uniformità su $[0,+\\infty)$ vive tutta nel punto $x=0$; appena l'intervallo di integrazione se ne allontana, l'ostacolo scompare."
    }]
  },

  { pool:"serie", src:"20240704 Es.4 · «senza calcolare l'integrale»", steps:[{
      t:"<span class=\"lbl\">ES</span> $f_n(x)=x^n(1-x^n)$. Prova che $\\displaystyle\\lim_{n\\to+\\infty}\\int_0^{1/2} f_n(x)\\,dx=0$ SENZA calcolare l'integrale. Quale stima chiude la dimostrazione?",
      opts:[
        {x:"$0\\le f_n(x)\\le x^n\\le 2^{-n}$ su $[0,\\tfrac12]$, quindi $\\big|\\int_0^{1/2}f_n\\big|\\le \\tfrac12\\,2^{-n}\\to0$",c:true},
        {x:"$f_n\\to0$ puntualmente, e questo basta sempre a passare al limite nell'integrale"},
        {x:"$f_n$ è continua su un compatto, quindi l'integrale tende a $0$"},
        {x:"$\\int_0^{1/2}x^n\\,dx=\\tfrac{1}{(n+1)2^{n+1}}$, che tende a $0$"}],
      hint:"«Senza calcolare» chiede una stima uniforme del modulo: maggiora l'integrando con qualcosa che non dipende da $x$ e tende a zero.",
      sol:"<b>Maggiorazione uniforme.</b> Su $[0,\\tfrac12]$ vale $0\\le x^n\\le 2^{-n}$ e $0\\le 1-x^n\\le1$, dunque $0\\le f_n(x)\\le 2^{-n}$. Allora $\\big|\\int_0^{1/2}f_n\\big|\\le\\tfrac12\\cdot2^{-n}\\to0$. Equivalente a dire che $f_n\\to0$ uniformemente su $[0,\\tfrac12]$. La quarta opzione calcola l'integrale (quello che il testo vieta); la seconda è falsa in generale: la sola convergenza puntuale non autorizza lo scambio."
    }]
  },

  { pool:"serie", src:"20240209 Es.3 · sup mobile, intervalli assegnati", steps:[{
      t:"<span class=\"lbl\">ES</span> $f_n(x)=\\dfrac{nx}{1+n^2x^2}\\to 0$ puntualmente. La convergenza è uniforme su $[0,2]$?",
      opts:[
        {x:"No: il massimo è in $x_n=\\tfrac1n$ e vale $\\tfrac12$ per ogni $n$; poiché $x_n\\in[0,2]$, il $\\sup$ non tende a $0$",c:true},
        {x:"Sì: $[0,2]$ è compatto e le $f_n$ sono continue"},
        {x:"Sì: $f_n(x)\\le\\tfrac{1}{nx}\\to0$ per ogni $x$"},
        {x:"No, perché il limite puntuale è discontinuo in $0$"}],
      hint:"Cerca il punto di massimo di $f_n$: se si muove verso $0$ al crescere di $n$ ma resta dentro l'intervallo, l'altezza non cala.",
      sol:"<b>La gobba che non si abbassa.</b> $f_n'(x)=\\dfrac{n(1-n^2x^2)}{(1+n^2x^2)^2}=0$ dà $x_n=\\tfrac1n$, con $f_n(1/n)=\\tfrac{1}{2}$. Per ogni $n\\ge1$ si ha $x_n\\in[0,2]$, quindi $\\sup_{[0,2]}|f_n-0|=\\tfrac12\\not\\to0$: la convergenza non è uniforme. Attenzione: la compattezza dell'intervallo NON implica l'uniforme (opzione 2), e il limite qui è continuo (opzione 4 è falsa). Questa è la forma reale della domanda d'esame: «in quali fra gli intervalli assegnati la convergenza è uniforme?»."
    }]
  },

  { pool:"serie", src:"20240209 Es.3 · lo stesso $f_n$, intervallo lontano da 0", steps:[{
      t:"<span class=\"lbl\">ES</span> Per $f_n(x)=\\dfrac{nx}{1+n^2x^2}$, la convergenza a $0$ è uniforme su $[2,10]$?",
      opts:[
        {x:"Sì: per $n\\ge1$ il punto di massimo $\\tfrac1n$ sta fuori da $[2,10]$, lì $f_n$ decresce e $\\sup=f_n(2)=\\tfrac{2n}{1+4n^2}\\to0$",c:true},
        {x:"No: il $\\sup$ vale sempre $\\tfrac12$"},
        {x:"Sì, ma solo perché $[2,10]$ è limitato"},
        {x:"No: la convergenza uniforme su un intervallo che non contiene $0$ non si può stabilire"}],
      hint:"Fuori dalla gobba la funzione è monotona: il $\\sup$ si legge all'estremo, non nel punto critico.",
      sol:"<b>Dove la gobba non arriva.</b> $f_n$ cresce su $[0,\\tfrac1n]$ e decresce su $[\\tfrac1n,+\\infty)$. Per $n\\ge1$, $\\tfrac1n\\le1<2$, quindi su $[2,10]$ $f_n$ è decrescente e $\\sup_{[2,10]}f_n=f_n(2)=\\dfrac{2n}{1+4n^2}\\sim\\dfrac{1}{2n}\\to0$: convergenza uniforme. Lo stesso conto mostra l'uniforme su ogni $[a,+\\infty)$ con $a>0$. Confrontato con l'esercizio precedente: l'unico intervallo problematico è quello che contiene i punti di massimo mobili, cioè che ha $0$ come punto di accumulazione."
    }]
  },

  { pool:"serie", src:"20230621 Es.2 · insieme di convergenza TOTALE", steps:[{
      t:"<span class=\"lbl\">ES</span> Per $\\displaystyle\\sum_{k\\ge1}\\frac{1+k}{k^2}e^{-kx}$ (che converge puntualmente per $x>0$), dove c'è convergenza TOTALE?",
      opts:[
        {x:"Su ogni $[a,+\\infty)$ con $a>0$: $M_k=\\tfrac{1+k}{k^2}e^{-ka}$ e $\\sum M_k<\\infty$; NON su $(0,+\\infty)$",c:true},
        {x:"Su tutto $(0,+\\infty)$, perché lì la serie converge puntualmente",c:false},
        {x:"Su $[0,+\\infty)$",c:false},
        {x:"In nessun insieme: i termini non sono maggiorabili",c:false}],
      hint:"La totale si misura sul $\\sup$ del termine generale nell'insieme. Su $(0,+\\infty)$ il $\\sup$ si prende al limite $x\\to0^+$: cosa resta?",
      sol:"<b>Totale = Weierstrass con $M_k=\\sup_I|f_k|$.</b> Su $I=[a,+\\infty)$, $a>0$: il termine è decrescente in $x$, quindi $M_k=\\tfrac{1+k}{k^2}e^{-ka}$ e $\\sum_k M_k$ converge (decadimento geometrico). Su $I=(0,+\\infty)$: $M_k=\\sup_{x>0}\\tfrac{1+k}{k^2}e^{-kx}=\\tfrac{1+k}{k^2}\\sim\\tfrac1k$, e $\\sum\\tfrac1k$ diverge: nessuna convergenza totale. In $x=0$ la serie stessa diverge, quindi $[0,+\\infty)$ è escluso a monte. Il pattern «totale su ogni chiuso interno, non sull'aperto» è la risposta tipica quando la richiesta è «puntuale, assoluta, uniforme e totale»."
    }]
  },

  { pool:"serie", src:"20240619 Es.4 · derivata della somma $S'(1)$", steps:[{
      t:"<span class=\"lbl\">ES</span> Sia $S(x)=\\displaystyle\\sum_{n\\ge0}\\frac{\\log^n x}{n^2+1}$ (definita per $\\tfrac1e<x<e$). Quanto vale $S'(1)$?",
      opts:[
        {x:"$\\tfrac12$: derivando termine a termine, in $x=1$ sopravvive solo $n=1$, che dà $\\tfrac{1}{(1^2+1)\\cdot1}$",c:true},
        {x:"$0$, perché $\\log 1=0$ annulla tutti i termini"},
        {x:"$\\sum_{n\\ge1}\\tfrac{n}{n^2+1}$, che diverge"},
        {x:"Non esiste: la serie non è derivabile in $x=1$"}],
      hint:"$\\tfrac{d}{dx}\\dfrac{\\log^n x}{n^2+1}=\\dfrac{n\\log^{n-1}x}{(n^2+1)x}$. In $x=1$ quale esponente di $\\log x$ non annulla il termine?",
      sol:"<b>Scambio derivata-serie.</b> Ponendo $y=\\log x$ la serie è di potenze con raggio $1$: converge uniformemente sui compatti di $|y|<1$ insieme alla serie delle derivate, quindi $S$ è derivabile in un intorno di $x=1$ e si deriva termine a termine. $\\big(\\tfrac{\\log^n x}{n^2+1}\\big)'=\\tfrac{n\\log^{n-1}x}{(n^2+1)x}$: in $x=1$ il termine $n=0$ è nullo (costante), il termine $n=1$ dà $\\tfrac{1}{2}$, e per $n\\ge2$ compare $\\log^{n-1}1=0$. Dunque $S'(1)=\\tfrac12$. La seconda opzione confonde $S(1)=1$ con $S'(1)$."
    }]
  }

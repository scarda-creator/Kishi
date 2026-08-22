Q.serie = [

  /* ============================================================
     CONCETTUALI (15) — convergenza, M-test, scambi, serie di potenze
     ============================================================ */

  { pool:"serie", src:"manuale", steps:[{
      t:"Cosa distingue la convergenza <b>uniforme</b> di $f_n\\to f$ su $I$ dalla convergenza <b>puntuale</b>?",
      opts:[
        {x:"Nell'uniforme la velocit&agrave; con cui $f_n(x)\\to f(x)$ non dipende da $x$: un solo $N$ funziona per tutti gli $x\\in I$",c:true},
        {x:"Nell'uniforme il limite $f$ &egrave; per forza continuo, nella puntuale no"},
        {x:"Sono la stessa cosa: uniforme &egrave; solo un altro nome per puntuale su un intervallo"},
        {x:"Nell'uniforme si richiede $\\sum f_n<\\infty$, nella puntuale no"}],
      hint:"La continuit&agrave; del limite &egrave; una CONSEGUENZA dell'uniforme, non la sua definizione. Guarda la dipendenza di $N$ da $x$.",
      sol:"Puntuale: $\\forall x\\ \\forall\\varepsilon\\ \\exists N(x,\\varepsilon)$ con $|f_n(x)-f(x)|<\\varepsilon$ per $n>N$. Uniforme: lo stesso $N(\\varepsilon)$ vale per <b>tutti</b> gli $x\\in I$. Equivalente: $\\sup_{x\\in I}|f_n(x)-f(x)|\\to 0$. &Egrave; questa uniformit&agrave; di $N$ a far passare limite e integrale/continuit&agrave;."
    }]
  },

  { pool:"serie", src:"manuale", steps:[{
      t:"Il modo operativo per stabilire se $f_n\\to f$ uniformemente su $I$ &egrave;:",
      opts:[
        {x:"Calcolare $M_n=\\sup_{x\\in I}|f_n(x)-f(x)|$ e verificare $M_n\\to 0$",c:true},
        {x:"Verificare che $f_n(x)\\to f(x)$ per ogni $x$ fissato"},
        {x:"Verificare che ogni $f_n$ &egrave; continua"},
        {x:"Verificare che $\\int_I f_n\\to\\int_I f$"}],
      hint:"Il limite puntuale ti d&agrave; solo il candidato $f$. L'uniforme si misura sul RESTO $|f_n-f|$.",
      sol:"Convergenza uniforme $\\iff M_n=\\sup_{x\\in I}|f_n(x)-f(x)|\\to 0$. In pratica: si trova $f$ col limite puntuale, poi si studia il massimo di $|f_n-f|$ (derivando in $x$, oppure stimando dall'alto). Se $M_n\\to 0$ &egrave; uniforme; se $M_n\\not\\to 0$ non lo &egrave;."
    }]
  },

  { pool:"serie", src:"manuale", steps:[{
      t:"Criterio di Weierstrass (M-test) per $\\sum_{k} f_k(x)$ su $I$. L'ipotesi corretta &egrave;:",
      opts:[
        {x:"Esiste $M_k\\ge 0$ con $|f_k(x)|\\le M_k$ per ogni $x\\in I$, e $\\sum_k M_k<\\infty$",c:true},
        {x:"$f_k(x)\\to 0$ per ogni $x\\in I$"},
        {x:"$\\sum_k f_k(x)$ converge puntualmente su $I$"},
        {x:"Le $f_k$ sono derivabili e $\\sum_k f_k'$ converge"}],
      hint:"Il maggiorante $M_k$ deve essere NUMERICO (indipendente da $x$) e la sua serie deve convergere.",
      sol:"Criterio di Weierstrass: se $\\sup_{x\\in I}|f_k(x)|\\le M_k$ con $\\sum_k M_k<\\infty$, allora $\\sum_k f_k$ converge <b>totalmente</b>, quindi <b>uniformemente</b> e assolutamente su $I$. La forza sta nel dominare le funzioni con una serie numerica convergente."
    }]
  },

  { pool:"serie", src:"manuale", steps:[{
      t:"Se il criterio di Weierstrass <b>fallisce</b> su $\\sum_k f_k$ (non trovo $M_k$ sommabili), posso concludere che la serie NON converge uniformemente?",
      opts:[
        {x:"No: il M-test &egrave; sufficiente ma non necessario; la serie pu&ograve; convergere uniformemente senza convergere totalmente",c:true},
        {x:"S&igrave;: senza il M-test non c'&egrave; convergenza uniforme"},
        {x:"S&igrave;, ma solo se le $f_k$ cambiano segno"},
        {x:"No, perch&eacute; il M-test non ha mai nulla a che fare con l'uniforme"}],
      hint:"Weierstrass d&agrave; una condizione SUFFICIENTE. La sua negazione non nega l'uniforme.",
      sol:"Il M-test &egrave; <b>sufficiente ma non necessario</b>: implica addirittura la convergenza totale, pi&ugrave; forte dell'uniforme. Esistono serie uniformemente convergenti ma non totalmente (tipiche le alternanti $\\sum(-1)^k g_k(x)$ con $g_k\\downarrow 0$ uniformemente, dove $\\sum\\sup|f_k|$ diverge). Fallito Weierstrass, si prova con Leibniz/Abel o con la stima diretta del resto."
    }]
  },

  { pool:"serie", src:"manuale", steps:[{
      t:"Ordina le implicazioni corrette tra i tipi di convergenza di una serie di funzioni:",
      opts:[
        {x:"Totale $\\Rightarrow$ uniforme $\\Rightarrow$ puntuale; nessuna delle frecce si inverte in generale",c:true},
        {x:"Puntuale $\\Rightarrow$ uniforme $\\Rightarrow$ totale"},
        {x:"Uniforme $\\Rightarrow$ totale $\\Rightarrow$ puntuale"},
        {x:"Sono tre nomi equivalenti per la stessa nozione"}],
      hint:"La convergenza totale (Weierstrass) &egrave; la pi&ugrave; forte; la puntuale la pi&ugrave; debole.",
      sol:"Gerarchia: <b>totale $\\Rightarrow$ uniforme $\\Rightarrow$ puntuale</b>. Le frecce non si invertono: un'alternante pu&ograve; essere uniforme senza essere totale; $x^n$ su $[0,1)$ &egrave; puntuale non uniforme. Sapere quale serve evita di dimostrare troppo (o troppo poco)."
    }]
  },

  { pool:"serie", src:"manuale", steps:[{
      t:"Le $f_n$ sono continue su $I$ e $f_n\\to f$ <b>uniformemente</b>. Cosa puoi affermare su $f$?",
      opts:[
        {x:"$f$ &egrave; continua su $I$",c:true},
        {x:"$f$ &egrave; derivabile su $I$"},
        {x:"$f$ &egrave; limitata su $I$"},
        {x:"Nulla: il limite pu&ograve; essere discontinuo anche con l'uniforme"}],
      hint:"L'uniforme trasmette la continuit&agrave;, non la derivabilit&agrave; (per quella servono ipotesi sulle derivate).",
      sol:"Teorema: limite uniforme di funzioni continue &egrave; continuo. Idea: $|f(x)-f(x_0)|\\le|f(x)-f_n(x)|+|f_n(x)-f_n(x_0)|+|f_n(x_0)-f(x_0)|$; l'uniforme rende piccoli il primo e il terzo termine per ogni $x$ con lo stesso $n$, la continuit&agrave; di $f_n$ il centrale. La derivabilit&agrave; non passa cos&igrave;: serve l'uniforme delle DERIVATE."
    }]
  },

  { pool:"serie", src:"manuale", steps:[{
      t:"$f_n(x)=x^n$ su $[0,1]$ converge puntualmente a $f$ con $f(x)=0$ per $x<1$ e $f(1)=1$. Cosa deduci sull'uniforme?",
      opts:[
        {x:"La convergenza NON &egrave; uniforme: $f$ &egrave; discontinua mentre le $f_n$ sono continue",c:true},
        {x:"&Egrave; uniforme perch&eacute; converge in ogni punto"},
        {x:"&Egrave; uniforme su $[0,1]$ ma non su $[0,1)$"},
        {x:"Non si pu&ograve; dire nulla senza calcolare $\\sup|f_n-f|$"}],
      hint:"Usa il teorema al contrario: limite uniforme di continue sarebbe continuo.",
      sol:"Contronominale del teorema di continuit&agrave;: se il limite puntuale &egrave; discontinuo e le $f_n$ sono continue, la convergenza <b>non pu&ograve; essere uniforme</b>. Verifica diretta: $\\sup_{[0,1)}|x^n-0|=1\\not\\to 0$. La discontinuit&agrave; in $x=1$ &egrave; la firma della non uniformit&agrave;."
    }]
  },

  { pool:"serie", src:"20220124 Es.2 / manuale", steps:[{
      t:"Per scambiare limite e integrale, $\\lim_n\\int_a^b f_n=\\int_a^b\\lim_n f_n$ su $[a,b]$ compatto, l'ipotesi <b>sufficiente</b> pi&ugrave; usata all'esame &egrave;:",
      opts:[
        {x:"$f_n\\to f$ uniformemente su $[a,b]$",c:true},
        {x:"$f_n\\to f$ puntualmente su $[a,b]$"},
        {x:"Ogni $f_n$ &egrave; integrabile su $[a,b]$"},
        {x:"$f_n(a)\\to f(a)$ e $f_n(b)\\to f(b)$"}],
      hint:"La puntuale da sola non basta (controesempi con picchi che sfuggono). Serve l'uniforme sul compatto.",
      sol:"Teorema di passaggio al limite sotto integrale: se $f_n\\to f$ uniformemente su $[a,b]$ compatto (e $f_n$ integrabili) allora $\\int_a^b f_n\\to\\int_a^b f$. In alternativa vale la convergenza dominata (Lebesgue): $|f_n|\\le h$ sommabile. La sola puntuale non basta: massa che scivola via."
    }]
  },

  { pool:"serie", src:"20230123 Es.5 / manuale", steps:[{
      t:"Per derivare una serie termine a termine, $\\big(\\sum_k f_k\\big)'=\\sum_k f_k'$, l'ipotesi corretta &egrave;:",
      opts:[
        {x:"$\\sum_k f_k'$ converge uniformemente e $\\sum_k f_k$ converge in almeno un punto",c:true},
        {x:"$\\sum_k f_k$ converge uniformemente"},
        {x:"$\\sum_k f_k$ converge puntualmente e ogni $f_k$ &egrave; derivabile"},
        {x:"$\\sum_k f_k'$ converge puntualmente"}],
      hint:"L'ipotesi forte va sulle DERIVATE $f_k'$, non sulla serie di partenza.",
      sol:"Teorema di derivazione termine a termine: se $\\sum_k f_k'$ converge uniformemente su $I$ e $\\sum_k f_k$ converge in un punto $x_0$, allora $\\sum_k f_k$ converge uniformemente, la somma &egrave; derivabile e $(\\sum f_k)'=\\sum f_k'$. L'uniforme della serie originale NON basta: il limite uniforme di derivabili pu&ograve; non essere derivabile."
    }]
  },

  { pool:"serie", src:"manuale", steps:[{
      t:"Sia $R$ il raggio di convergenza di $\\sum_k c_k x^k$. Cosa &egrave; garantito?",
      opts:[
        {x:"Per $|x|<R$ converge assolutamente; per $|x|>R$ diverge; in $|x|=R$ dipende dal caso",c:true},
        {x:"Converge per ogni $x$ con $|x|\\le R$ e diverge altrove"},
        {x:"Converge per $|x|<R$ e converge anche in $x=\\pm R$"},
        {x:"Diverge per $|x|<R$ e converge per $|x|>R$"}],
      hint:"Il comportamento sui due estremi $x=\\pm R$ va studiato a parte, caso per caso.",
      sol:"Per una serie di potenze esiste $R\\in[0,\\infty]$ tale che: $|x|<R\\Rightarrow$ convergenza assoluta (e uniforme su ogni $[-r,r]$, $r<R$, per Abel); $|x|>R\\Rightarrow$ diverge. Sul bordo $|x|=R$ non c'&egrave; regola generale: si studiano separatamente $x=R$ e $x=-R$ con Leibniz, confronto, ecc."
    }]
  },

  { pool:"serie", src:"20220706 Es.1 / manuale", steps:[{
      t:"$\\sum_k \\dfrac{y^k}{k}$ ha raggio $R=1$. Sul bordo:",
      opts:[
        {x:"In $y=1$ diverge (serie armonica), in $y=-1$ converge (Leibniz)",c:true},
        {x:"Converge in entrambi $y=\\pm 1$"},
        {x:"Diverge in entrambi $y=\\pm 1$"},
        {x:"In $y=1$ converge, in $y=-1$ diverge"}],
      hint:"I due estremi danno serie numeriche diverse: una armonica, una armonica a segni alterni.",
      sol:"In $y=1$: $\\sum 1/k$ &egrave; l'armonica, <b>diverge</b>. In $y=-1$: $\\sum(-1)^k/k$ soddisfa Leibniz ($1/k\\downarrow 0$), <b>converge</b> (semplicemente, non assolutamente). Insieme di convergenza $y\\in[-1,1)$. &Egrave; l'esempio-modello che il bordo va sempre esaminato estremo per estremo."
    }]
  },

  { pool:"serie", src:"manuale", steps:[{
      t:"Formula di Cauchy-Hadamard per il raggio di $\\sum_k c_k x^k$:",
      opts:[
        {x:"$\\dfrac{1}{R}=\\limsup_{k}\\ |c_k|^{1/k}$",c:true},
        {x:"$R=\\lim_k |c_k|^{1/k}$"},
        {x:"$R=\\sum_k |c_k|$"},
        {x:"$\\dfrac{1}{R}=\\lim_k \\dfrac{c_k}{c_{k+1}}$"}],
      hint:"&Egrave; un LIMSUP della radice $k$-esima, e sta al denominatore di $R$.",
      sol:"Cauchy-Hadamard: $1/R=\\limsup_k|c_k|^{1/k}$ (con $1/0=\\infty$, $1/\\infty=0$). Quando il limite del rapporto $|c_{k+1}/c_k|\\to L$ esiste, allora $R=1/L$ (criterio del rapporto), pi&ugrave; comodo nei conti ma meno generale del limsup della radice."
    }]
  },

  { pool:"serie", src:"20220907 Es.1 / manuale", steps:[{
      t:"Perch&eacute; all'esame la convergenza uniforme di $f_n$ si dimostra quasi sempre su un compatto $[a,b]$ (o $[a,+\\infty)$) e quasi mai su tutto $\\mathbb{R}$?",
      opts:[
        {x:"Perch&eacute; su tutto $\\mathbb{R}$ spesso $\\sup_{\\mathbb{R}}|f_n-f|\\not\\to 0$: c'&egrave; un $x_n$ (crescente con $n$) dove il resto resta grande",c:true},
        {x:"Perch&eacute; su $\\mathbb{R}$ le funzioni non sono integrabili"},
        {x:"Perch&eacute; il teorema di Weierstrass vale solo sui compatti per definizione"},
        {x:"Perch&eacute; su $\\mathbb{R}$ la convergenza puntuale non esiste"}],
      hint:"Il problema non &egrave; l'integrabilit&agrave;: &egrave; che il sup su tutto $\\mathbb{R}$ non si abbassa.",
      sol:"Tipicamente $f_n$ ha un picco che si sposta all'infinito con $n$: si trova $x_n\\to\\infty$ con $|f_n(x_n)-f(x_n)|\\not\\to 0$, quindi $\\sup_{\\mathbb{R}}\\not\\to 0$. Restringendosi a un compatto (o $[a,+\\infty)$) il picco esce dall'intervallo e $\\sup\\to 0$. &Egrave; il pattern di $n^a\\sin(x^2/n)$ (picco in $x=\\sqrt{n}$) e simili."
    }]
  },

  { pool:"serie", src:"20230504 Es.1 / manuale", steps:[{
      t:"Per NEGARE la convergenza uniforme di $f_n\\to f$ su $I$, la strategia corretta &egrave;:",
      opts:[
        {x:"Esibire una successione $x_n\\in I$ tale che $|f_n(x_n)-f(x_n)|\\not\\to 0$",c:true},
        {x:"Mostrare che esiste $x$ dove $f_n(x)\\not\\to f(x)$"},
        {x:"Mostrare che $f$ non &egrave; continua"},
        {x:"Mostrare che $\\sum_n M_n=+\\infty$ con $M_n=\\sup|f_n|$"}],
      hint:"Basta una singola successione di punti mobili $x_n$ che tenga alto il resto: quello uccide il sup.",
      sol:"$\\sup_{x\\in I}|f_n-f|\\ge|f_n(x_n)-f(x_n)|$ per ogni scelta $x_n\\in I$. Se trovi $x_n$ con $|f_n(x_n)-f(x_n)|\\to c>0$ (o $\\to\\infty$), allora $\\sup\\not\\to 0$: niente uniforme. Trovare un punto FISSO dove non c'&egrave; convergenza negherebbe la puntuale, cosa diversa e pi&ugrave; forte."
    }]
  },

  { pool:"serie", src:"14feb25 Es.4 / manuale", steps:[{
      t:"Per una serie <b>alternante</b> $\\sum_k(-1)^k g_k(x)$, con $g_k(x)\\ge 0$, il criterio di Leibniz d&agrave; convergenza puntuale se:",
      opts:[
        {x:"$g_k(x)\\downarrow 0$ (decrescente in $k$ e tendente a $0$) per ogni $x$ fissato",c:true},
        {x:"$g_k(x)\\to 0$ per ogni $x$, senza altre richieste"},
        {x:"$\\sum_k g_k(x)<\\infty$"},
        {x:"$g_k(x)$ &egrave; limitata"}],
      hint:"Leibniz richiede DUE cose insieme: monotonia decrescente in $k$ E limite nullo.",
      sol:"Criterio di Leibniz (a $x$ fissato): se $g_k(x)\\ge 0$, $g_{k+1}(x)\\le g_k(x)$ e $g_k(x)\\to 0$, allora $\\sum_k(-1)^k g_k(x)$ converge. Il solo $g_k\\to 0$ non basta (serve la monotonia). Per l'uniforme si stima poi il resto: $|R_N(x)|\\le g_{N+1}(x)$, e se $\\sup_x g_{N+1}\\to 0$ la convergenza &egrave; anche uniforme."
    }]
  },

  /* ============================================================
     ESERCIZI (15) — calcolo su esempi reali d'esame
     ============================================================ */

  { pool:"serie", src:"20220124 Es.2", steps:[{
      t:"<span class=\"lbl\">ES</span> $f_n(x)=\\dfrac{x}{1+2^{-n}+x^2/n^2}$. Qual &egrave; il limite puntuale $f(x)$ su $\\mathbb{R}$?",
      opts:[
        {x:"$f(x)=x$",c:true},
        {x:"$f(x)=0$"},
        {x:"$f(x)=x/2$"},
        {x:"Il limite non esiste per $x\\ne 0$"}],
      hint:"Fissa $x$: cosa fanno $2^{-n}$ e $x^2/n^2$ quando $n\\to\\infty$?",
      sol:"Fissato $x$: $2^{-n}\\to 0$ e $x^2/n^2\\to 0$, quindi il denominatore $\\to 1$ e $f_n(x)\\to x/1=x$. Convergenza <b>puntuale</b> a $f(x)=x$ su tutto $\\mathbb{R}$."
    }]
  },

  { pool:"serie", src:"20220124 Es.2", steps:[{
      t:"<span class=\"lbl\">ES</span> Con $f_n(x)=\\dfrac{x}{1+2^{-n}+x^2/n^2}\\to f(x)=x$: la convergenza &egrave; uniforme su tutto $\\mathbb{R}$?",
      opts:[
        {x:"No: $\\sup_{\\mathbb{R}}|f_n-f|=+\\infty$, il resto cresce per $x$ grande",c:true},
        {x:"S&igrave;: converge in ogni punto quindi &egrave; uniforme"},
        {x:"S&igrave;, perch&eacute; $f$ &egrave; continua"},
        {x:"Non decidibile senza il valore di $x$"}],
      hint:"Guarda il resto $f_n(x)-x$ per $x$ molto grande (dell'ordine di $n$): non si abbassa.",
      sol:"$f_n(x)-x=x\\cdot\\dfrac{-(2^{-n}+x^2/n^2)}{1+2^{-n}+x^2/n^2}$. Per $x\\sim n$ questo termine &egrave; dell'ordine di $-x\\to-\\infty$: dunque $\\sup_{\\mathbb{R}}|f_n-f|=+\\infty\\not\\to 0$. <b>Non uniforme</b> su $\\mathbb{R}$: il picco del resto scappa all'infinito con $n$."
    }]
  },

  { pool:"serie", src:"20220124 Es.2", steps:[{
      t:"<span class=\"lbl\">ES</span> Stessa $f_n(x)=\\dfrac{x}{1+2^{-n}+x^2/n^2}$: sull'intervallo $[1,2]$ la convergenza a $f(x)=x$ &egrave; uniforme?",
      opts:[
        {x:"S&igrave;: $\\sup_{[1,2]}|f_n-f|\\le 2\\,(2^{-n}+4/n^2)\\to 0$",c:true},
        {x:"No, perch&eacute; non &egrave; uniforme su $\\mathbb{R}$"},
        {x:"No: il sup resta $\\ge 1$"},
        {x:"S&igrave;, ma solo perch&eacute; $[1,2]$ non contiene lo $0$"}],
      hint:"Su un compatto $x$ &egrave; limitato: stima $|f_n(x)-x|$ maggiorando numeratore e denominatore.",
      sol:"Su $[1,2]$: $|f_n(x)-x|=|x|\\dfrac{2^{-n}+x^2/n^2}{1+\\cdots}\\le 2\\,(2^{-n}+4/n^2)$, indipendente da $x$ e $\\to 0$. Quindi $\\sup_{[1,2]}|f_n-f|\\to 0$: convergenza <b>uniforme</b> sul compatto, anche se non su $\\mathbb{R}$. La non uniformit&agrave; globale non impedisce quella locale."
    }]
  },

  { pool:"serie", src:"20220907 Es.1", steps:[{
      t:"<span class=\"lbl\">ES</span> $f_n(x)=n^a\\sin\\!\\big(\\tfrac{x^2}{n}\\big)$, $x\\in\\mathbb{R}$, $a>0$ parametro. Limite puntuale per $x$ fissato:",
      opts:[
        {x:"$\\to 0$ se $a<1$; $\\to x^2$ se $a=1$; $\\to+\\infty$ (per $x\\ne 0$) se $a>1$",c:true},
        {x:"$\\to 0$ per ogni $a>0$"},
        {x:"$\\to x^2$ per ogni $a>0$"},
        {x:"$\\to+\\infty$ per ogni $a>0$"}],
      hint:"Per $n$ grande $\\sin(x^2/n)\\sim x^2/n$: resta $n^a\\cdot x^2/n=x^2\\,n^{a-1}$.",
      sol:"Sviluppo $\\sin(x^2/n)\\sim x^2/n$, quindi $f_n(x)\\sim x^2\\,n^{a-1}$. Il segno di $a-1$ decide: $a<1\\Rightarrow n^{a-1}\\to 0$ (limite $0$); $a=1\\Rightarrow$ limite $x^2$; $a>1\\Rightarrow n^{a-1}\\to\\infty$, diverge per $x\\ne 0$. Criterio: limite notevole $\\sin t\\sim t$ + confronto tra potenze di $n$."
    }]
  },

  { pool:"serie", src:"20220907 Es.1", steps:[{
      t:"<span class=\"lbl\">ES</span> Nel caso $a=1$, $f_n(x)=n\\sin\\!\\big(\\tfrac{x^2}{n}\\big)\\to x^2$ uniformemente su $[0,2]$. Quanto vale $\\displaystyle\\lim_{n\\to\\infty} n\\!\\int_0^2\\!\\sin\\!\\big(\\tfrac{x^2}{n}\\big)dx$?",
      opts:[
        {x:"$8/3$",c:true},
        {x:"$0$"},
        {x:"$4$"},
        {x:"Il limite non esiste"}],
      hint:"Uniforme su $[0,2]$ compatto: puoi portare il limite dentro l'integrale.",
      sol:"$n\\int_0^2\\sin(x^2/n)dx=\\int_0^2 f_n(x)\\,dx$. Poich&eacute; $f_n\\to x^2$ <b>uniformemente su $[0,2]$</b> (compatto), vale lo scambio limite-integrale: $\\to\\int_0^2 x^2\\,dx=\\big[x^3/3\\big]_0^2=8/3$. Criterio: teorema di passaggio al limite sotto integrale su convergenza uniforme."
    }]
  },

  { pool:"serie", src:"20220706 Es.1", steps:[{
      t:"<span class=\"lbl\">ES</span> Serie $\\displaystyle\\sum_{k=1}^\\infty\\frac{(\\log(x-1))^k}{k}$, $x>1$. Ponendo $y=\\log(x-1)$, quanto vale il raggio di convergenza in $y$?",
      opts:[
        {x:"$R=1$",c:true},
        {x:"$R=0$"},
        {x:"$R=+\\infty$"},
        {x:"$R=e$"}],
      hint:"&Egrave; $\\sum y^k/k$: applica il criterio del rapporto ai coefficienti $c_k=1/k$.",
      sol:"Con $y=\\log(x-1)$ la serie diventa $\\sum y^k/k$. Coefficienti $c_k=1/k$: $|c_{k+1}/c_k|=k/(k+1)\\to 1$, quindi (Cauchy-Hadamard / rapporto) $R=1$. Dentro $|y|<1$ converge assolutamente."
    }]
  },

  { pool:"serie", src:"20220706 Es.1", steps:[{
      t:"<span class=\"lbl\">ES</span> Per $\\sum_{k\\ge1}\\frac{y^k}{k}$ con $R=1$ e $y=\\log(x-1)$: qual &egrave; l'insieme di convergenza puntuale in $x$?",
      opts:[
        {x:"$x\\in\\big[1+e^{-1},\\,1+e\\big)$",c:true},
        {x:"$x\\in\\big(1+e^{-1},\\,1+e\\big)$"},
        {x:"$x\\in\\big[1+e^{-1},\\,1+e\\big]$"},
        {x:"$x\\in(1,\\,1+e)$"}],
      hint:"In $y$ converge su $[-1,1)$ (bordo: armonica diverge in $+1$, Leibniz converge in $-1$). Torna a $x$ con $x=1+e^{y}$.",
      sol:"In $y$: converge per $y\\in[-1,1)$ (in $y=-1$ Leibniz converge, in $y=1$ armonica diverge). Da $y=\\log(x-1)$: $x-1=e^{y}\\in[e^{-1},e)$, cio&egrave; $x\\in[1+e^{-1},1+e)$. <b>Trappola</b>: bisogna tornare alla variabile $x$ e riportare gli estremi con l'esponenziale."
    }]
  },

  { pool:"serie", src:"20220706 Es.1", steps:[{
      t:"<span class=\"lbl\">ES</span> Somma esplicita di $\\sum_{k=1}^\\infty\\frac{y^k}{k}$ per $|y|<1$ (poi si sostituisce $y=\\log(x-1)$):",
      opts:[
        {x:"$-\\log(1-y)$",c:true},
        {x:"$\\dfrac{1}{1-y}$"},
        {x:"$\\log(1+y)$"},
        {x:"$\\dfrac{y}{1-y}$"}],
      hint:"&Egrave; la serie di Taylor nota di un logaritmo. Deriva rispetto a $y$ e riconosci la geometrica.",
      sol:"Serie nota: $\\sum_{k\\ge1}y^k/k=-\\log(1-y)$ per $|y|<1$ (si ottiene integrando la geometrica $\\sum_{k\\ge0}y^k=1/(1-y)$). Quindi la somma in $x$ &egrave; $-\\log(1-\\log(x-1))$."
    }]
  },

  { pool:"serie", src:"20230621 Es.2", steps:[{
      t:"<span class=\"lbl\">ES</span> $\\displaystyle\\sum_{k=1}^\\infty\\frac{1+k}{k^2}\\,e^{-kx}$. Ponendo $y=e^{-x}$, dove converge puntualmente (in $x$)?",
      opts:[
        {x:"Per $x>0$ (cio&egrave; $0<y<1$); nel bordo $y=1$, cio&egrave; $x=0$, diverge",c:true},
        {x:"Per ogni $x\\in\\mathbb{R}$"},
        {x:"Per $x\\ge 0$, bordo incluso"},
        {x:"Per $x<0$"}],
      hint:"$\\frac{1+k}{k^2}\\sim\\frac1k$: raggio $R=1$ in $y$; poi $y=e^{-x}$ e studia il bordo $y=1$.",
      sol:"Con $y=e^{-x}>0$: serie di potenze $\\sum\\frac{1+k}{k^2}y^k$. Radice: $\\big(\\frac{1+k}{k^2}\\big)^{1/k}\\to 1$, dunque $R=1$. Per $y=1$ ($x=0$): $\\sum\\frac{1+k}{k^2}\\sim\\sum\\frac1k$ diverge. Quindi converge (assolutamente) per $0<y<1$, cio&egrave; $x>0$; totalmente su $[a,+\\infty)$ per ogni $a>0$ (Weierstrass con $M_k=\\frac{1+k}{k^2}e^{-ka}$)."
    }]
  },

  { pool:"serie", src:"20240704 Es.4", steps:[{
      t:"<span class=\"lbl\">ES</span> $f_n(x)=x^n(1-x^n)$ su $[0,+\\infty)$. Limite puntuale:",
      opts:[
        {x:"$\\to 0$ su $[0,1]$; diverge (a $-\\infty$) per $x>1$",c:true},
        {x:"$\\to 0$ su tutto $[0,+\\infty)$"},
        {x:"$\\to 1$ su $[0,1)$"},
        {x:"$\\to 1/4$ ovunque"}],
      hint:"Poni $t=x^n$: per $x<1$, $t\\to0$; per $x=1$, $t=1$; per $x>1$, $t\\to+\\infty$.",
      sol:"Con $t=x^n$: se $0\\le x<1$, $t\\to 0\\Rightarrow t(1-t)\\to 0$; se $x=1$, $t=1\\Rightarrow 1\\cdot0=0$; se $x>1$, $t\\to+\\infty\\Rightarrow t(1-t)\\to-\\infty$, diverge. Limite puntuale $0$ su $[0,1]$, divergenza per $x>1$."
    }]
  },

  { pool:"serie", src:"20240704 Es.4", steps:[{
      t:"<span class=\"lbl\">ES</span> $f_n(x)=x^n(1-x^n)\\to 0$ su $[0,1]$: la convergenza &egrave; uniforme su $[0,1]$?",
      opts:[
        {x:"No: $\\sup_{[0,1]}|f_n|=1/4$ per ogni $n$ (massimo dove $x^n=1/2$)",c:true},
        {x:"S&igrave;: converge a $0$ in ogni punto di $[0,1]$"},
        {x:"S&igrave;, perch&eacute; $[0,1]$ &egrave; compatto"},
        {x:"No, perch&eacute; $f_n(1)=1$"}],
      hint:"Scrivi $g(t)=t(1-t)$ con $t=x^n\\in[0,1]$ e trovane il massimo: dipende da $n$?",
      sol:"Posto $t=x^n$, $g(t)=t(1-t)$ ha massimo $1/4$ in $t=1/2$, raggiungibile con $x_n=(1/2)^{1/n}\\in[0,1]$. Quindi $\\sup_{[0,1]}|f_n-0|=1/4\\not\\to 0$: <b>non uniforme</b>. La compattezza da sola non garantisce l'uniforme; il picco resta di altezza fissa (scivola verso $x=1$)."
    }]
  },

  { pool:"serie", src:"20250127 Es.4", steps:[{
      t:"<span class=\"lbl\">ES</span> $f_n(x)=\\cos\\!\\big(\\tfrac{x}{n}\\big)\\dfrac{nx+3}{n^2+2x^2}$. Converge puntualmente a $0$ su $\\mathbb{R}$. &Egrave; uniforme su tutto $\\mathbb{R}$?",
      opts:[
        {x:"No: $f_n(n)=\\cos(1)\\dfrac{n^2+3}{3n^2}\\to\\dfrac{\\cos 1}{3}\\ne 0$",c:true},
        {x:"S&igrave;: converge a $0$ ovunque e $\\cos$ &egrave; limitato"},
        {x:"S&igrave;: $|f_n(x)|\\le 3/n\\to 0$"},
        {x:"No, perch&eacute; il limite puntuale non &egrave; $0$"}],
      hint:"Prova il punto mobile $x_n=n$: numeratore e denominatore sono entrambi $\\sim n^2$.",
      sol:"Punto mobile $x_n=n$: $f_n(n)=\\cos(1)\\dfrac{n^2+3}{n^2+2n^2}=\\cos(1)\\dfrac{n^2+3}{3n^2}\\to\\cos(1)/3\\ne 0$. Dunque $\\sup_{\\mathbb{R}}|f_n|\\not\\to 0$: <b>non uniforme</b> su $\\mathbb{R}$. Su $[0,2]$ invece $|f_n(x)|\\le\\frac{2n+3}{n^2}\\to 0$ uniformemente. <b>Trappola</b>: la puntuale a $0$ non implica l'uniforme."
    }]
  },

  { pool:"serie", src:"20240122 Es.2", steps:[{
      t:"<span class=\"lbl\">ES</span> $\\displaystyle\\sum_{k\\ge0}\\frac{(\\log x)^k}{3^{k+1}(k+e^{-k})}$. Con $y=\\frac{\\log x}{3}$ diventa $\\sim\\sum\\frac{y^k}{3(k+e^{-k})}$, raggio $R=1$ in $y$. Insieme di convergenza in $x$:",
      opts:[
        {x:"$x\\in[e^{-3},\\,e^{3})$",c:true},
        {x:"$x\\in(e^{-3},\\,e^{3})$"},
        {x:"$x\\in[e^{-3},\\,e^{3}]$"},
        {x:"$x\\in(0,\\,e^{3})$"}],
      hint:"In $y$ converge su $[-1,1)$ (armonica diverge in $+1$, Leibniz in $-1$). Poi $\\log x=3y$.",
      sol:"In $y$: coefficienti $\\sim\\frac{1}{3k}$, quindi in $y=1$ diverge (armonica), in $y=-1$ converge (Leibniz). Insieme $y\\in[-1,1)$. Da $y=\\frac{\\log x}{3}$: $\\log x\\in[-3,3)\\Rightarrow x\\in[e^{-3},e^{3})$. Criterio: Cauchy-Hadamard per $R$, poi Leibniz/armonica sul bordo."
    }]
  },

  { pool:"serie", src:"14feb25 Es.4", steps:[{
      t:"<span class=\"lbl\">ES</span> $f_n(x)=[\\arctan(x^2)]^n$. Dove converge puntualmente (e a quale limite)?",
      opts:[
        {x:"$\\to 0$ per $|x|<\\sqrt{\\tan 1}$; diverge per $|x|>\\sqrt{\\tan 1}$",c:true},
        {x:"$\\to 0$ per ogni $x\\in\\mathbb{R}$"},
        {x:"$\\to 1$ per ogni $x$"},
        {x:"$\\to 0$ solo in $x=0$"}],
      hint:"$\\arctan(x^2)\\in[0,\\pi/2)$: la base &egrave; $<1$, $=1$ o $>1$? Confronta con $1$.",
      sol:"La base $b=\\arctan(x^2)\\ge 0$. Se $b<1$ (cio&egrave; $x^2<\\tan 1$, $|x|<\\sqrt{\\tan 1}$) allora $b^n\\to 0$. Se $b>1$ ($|x|>\\sqrt{\\tan 1}$) allora $b^n\\to+\\infty$, diverge. Il valore $b=1$ si ha in $x^2=\\tan 1$, dove $f_n\\equiv 1$. Limite $0$ sull'aperto $|x|<\\sqrt{\\tan 1}$."
    }]
  },

  { pool:"serie", src:"manuale", steps:[{
      t:"<span class=\"lbl\">ES</span> Studia con Weierstrass la convergenza di $\\displaystyle\\sum_{k=1}^\\infty\\frac{\\sin(kx)}{k^2}$ su $\\mathbb{R}$.",
      opts:[
        {x:"Converge totalmente su $\\mathbb{R}$: $|\\sin(kx)/k^2|\\le 1/k^2$ e $\\sum 1/k^2<\\infty$",c:true},
        {x:"Converge solo puntualmente, non uniformemente"},
        {x:"Diverge perch&eacute; $\\sin(kx)$ non tende a $0$"},
        {x:"Converge solo su intervalli limitati"}],
      hint:"Cerca un maggiorante numerico $M_k$ indipendente da $x$ con $\\sum M_k<\\infty$.",
      sol:"$|\\sin(kx)/k^2|\\le 1/k^2=M_k$ per ogni $x\\in\\mathbb{R}$, e $\\sum_k 1/k^2=\\pi^2/6<\\infty$. Per il criterio di Weierstrass la serie converge <b>totalmente</b> su tutto $\\mathbb{R}$, dunque uniformemente e assolutamente; la somma &egrave; continua su $\\mathbb{R}$ (limite uniforme di continue)."
    }]
  }

];


/* ===================================================================
   ESTENSIONE serie — run notturno 2026-08-22
   Motivo: 9 sedute su 21 chiudono l'esercizio di serie/successioni con
   una domanda di SCAMBIO limite/serie <-> integrale, oppure con la somma
   della serie, oppure con la derivata della somma. Il pool a 30 unita'
   aveva 1 sola domanda che sfiorava "termine a termine" e 0 su "somma
   della serie". Qui si allena la coda dell'esercizio, non la testa.
   Carico da quiz_assembla.js insieme a serie.js (concat).
   =================================================================== */
Q.serie = (Q.serie || []).concat([

{"pool":"serie","src":"modus operandi &middot; coda ricorrente","steps":[
 {"t":"Il compito chiede $\\lim_{n\\to\\infty}\\int_1^2 f_n(x)\\,dx$ dopo aver studiato la convergenza di $f_n$. Qual &egrave; il primo passo?",
  "opts":[
   {"x":"Verificare che $f_n\\to f$ UNIFORMEMENTE su $[1,2]$: allora il limite entra nell'integrale e si calcola $\\int_1^2 f$","c":true},
   {"x":"Calcolare $\\int_1^2 f_n(x)\\,dx$ in funzione di $n$ e poi passare al limite"},
   {"x":"Verificare la convergenza puntuale su tutto $\\mathbb{R}$: basta quella"},
   {"x":"Applicare de l'H&ocirc;pital al rapporto fra integrali"}],
  "hint":"L'intervallo di integrazione &egrave; un COMPATTO scelto apposta dal testo: quasi mai coincide con l'insieme dove la convergenza &egrave; uniforme in senso globale.",
  "sol":"<b>Teorema di passaggio al limite sotto il segno di integrale.</b> Se $f_n\\to f$ uniformemente su un intervallo LIMITATO $[a,b]$ e le $f_n$ sono integrabili, allora $\\lim_n\\int_a^b f_n=\\int_a^b\\lim_n f_n=\\int_a^b f$. La domanda &egrave; costruita per essere risolta in trenta secondi citando il teorema: chi calcola $\\int_1^2 f_n$ esplicitamente fa il lavoro che il testo voleva risparmiargli e spesso non ci arriva. Il compito 24/01/2022 (Es.2), 04/05/2023 (Es.2), 05/07/2023 (Es.1), 09/02/2024 (Es.3), 04/07/2024 (Es.4), 27/01/2025 (Es.4), 27/06/2025 (Es.4) hanno TUTTI questa terza domanda."}]},

{"pool":"serie","src":"20220124 Es.2 iii","steps":[
 {"t":"Sia $f_n(x)=\\dfrac{x}{1+2^{-n}+\\frac{x^2}{n^2}}$. Quanto vale $\\lim_{n\\to\\infty}\\int_1^2 f_n(x)\\,dx$?",
  "opts":[
   {"x":"$\\frac{3}{2}$","c":true},
   {"x":"$0$"},
   {"x":"$\\log 2$"},
   {"x":"Il limite non esiste perch&eacute; la convergenza non &egrave; uniforme su $\\mathbb{R}$"}],
  "hint":"Su $[1,2]$ sia $2^{-n}$ sia $x^2/n^2$ sono infinitesimi CONTROLLATI uniformemente: $|x|\\le 2$ d&agrave; $x^2/n^2\\le 4/n^2$.",
  "sol":"<b>Passaggio al limite sotto integrale.</b> Puntualmente $f_n(x)\\to x$. Su $[1,2]$: $\\big|f_n(x)-x\\big|=|x|\\dfrac{2^{-n}+x^2/n^2}{1+2^{-n}+x^2/n^2}\\le 2\\big(2^{-n}+4/n^2\\big)\\to 0$ indipendentemente da $x$, quindi la convergenza &egrave; uniforme su $[1,2]$. Allora $\\lim_n\\int_1^2 f_n=\\int_1^2 x\\,dx=\\left[\\frac{x^2}{2}\\right]_1^2=\\frac{3}{2}$. Nota: la convergenza NON &egrave; uniforme su tutto $\\mathbb{R}$ (per $x$ grande il termine $x^2/n^2$ non &egrave; piccolo), e il testo lo chiede a parte: le due risposte sono diverse e non si contraddicono."}]},

{"pool":"serie","src":"20240704 Es.4 iii","steps":[
 {"t":"$f_n(x)=x^n(1-x^n)$ su $[0,+\\infty)$. Il testo chiede di provare, SENZA calcolare l'integrale, che $\\lim_n\\int_0^{1/2}f_n=0$. Qual &egrave; l'argomento?",
  "opts":[
   {"x":"Su $[0,\\frac12]$ vale $0\\le f_n(x)\\le x^n\\le 2^{-n}$, quindi $\\sup_{[0,1/2]}|f_n|\\to0$: convergenza uniforme a $0$ su un compatto","c":true},
   {"x":"$f_n\\to0$ puntualmente su $[0,\\frac12]$, e la convergenza puntuale basta per scambiare"},
   {"x":"$f_n$ &egrave; continua e $[0,\\frac12]$ &egrave; compatto: per Weierstrass l'integrale tende a $0$"},
   {"x":"$\\int_0^{1/2}f_n=\\frac{(1/2)^{n+1}}{n+1}-\\frac{(1/2)^{2n+1}}{2n+1}\\to0$"}],
  "hint":"'Senza calcolare l'integrale' significa: stima il SUP, non la primitiva. E l'ultima opzione, pur essendo vera, &egrave; esattamente quello che il testo vieta.",
  "sol":"<b>Stima uniforme sul compatto.</b> Per $x\\in[0,\\frac12]$ si ha $0\\le x^n\\le 2^{-n}$ e $0\\le 1-x^n\\le1$, quindi $0\\le f_n(x)\\le 2^{-n}$ per ogni $x$ dell'intervallo. Dunque $\\|f_n\\|_{\\infty,[0,1/2]}\\le 2^{-n}\\to0$: convergenza uniforme a $0$. Per il teorema di passaggio al limite, $\\lim_n\\int_0^{1/2}f_n=\\int_0^{1/2}0=0$. La convergenza puntuale da sola NON basta (opzione 2): serve un controluesempio in mente, e ce n'&egrave; uno nel pool."}]},

{"pool":"serie","src":"20230504 Es.2 &middot; controesempio","steps":[
 {"t":"$f_n(x)=e^{-(n-x)^2}$ su $\\mathbb{R}$. Quale affermazione &egrave; corretta?",
  "opts":[
   {"x":"$f_n\\to0$ puntualmente ma NON uniformemente su $\\mathbb{R}$ (la gobba trasla e non si abbassa); tuttavia $\\int_0^1 f_n\\to0$","c":true},
   {"x":"$f_n\\to0$ uniformemente su $\\mathbb{R}$ perch&eacute; l'esponenziale schiaccia tutto"},
   {"x":"$f_n$ non converge puntualmente: in $x=n$ vale sempre $1$"},
   {"x":"$\\int_0^1 f_n\\to1$ perch&eacute; il massimo di $f_n$ vale $1$"}],
  "hint":"Fissa $x$ e manda $n$: la distanza $|n-x|$ esplode. Ma il punto di massimo $x=n$ scappa a destra, e $\\sup_{\\mathbb{R}}f_n=1$ per ogni $n$.",
  "sol":"<b>La gobba viaggiante.</b> Per $x$ fissato $(n-x)^2\\to+\\infty$, quindi $f_n(x)\\to0$: convergenza puntuale. Ma $\\sup_{\\mathbb{R}}|f_n-0|=f_n(n)=1$ per ogni $n$: la convergenza non &egrave; uniforme su $\\mathbb{R}$. Su $[0,1]$ invece, per $n\\ge2$, $|n-x|\\ge n-1$ e quindi $\\sup_{[0,1]}f_n\\le e^{-(n-1)^2}\\to0$: uniforme, e $\\int_0^1f_n\\to0$. <b>Lezione</b>: 'non uniforme su $\\mathbb{R}$' e 'scambio lecito su $[0,1]$' convivono; il compito chiede spesso proprio questa coppia."}]},

{"pool":"serie","src":"20220907 Es.1 &middot; trappola dell'intervallo illimitato","steps":[
 {"t":"$f_n\\to f$ uniformemente su $[0,+\\infty)$. Si pu&ograve; concludere $\\lim_n\\int_0^{+\\infty}f_n=\\int_0^{+\\infty}f$?",
  "opts":[
   {"x":"No: il teorema di passaggio al limite richiede un intervallo LIMITATO; su un intervallo illimitato serve una dominazione (o una stima diretta della coda)","c":true},
   {"x":"S&igrave;, la convergenza uniforme basta sempre"},
   {"x":"S&igrave;, purch&eacute; le $f_n$ siano continue"},
   {"x":"No, perch&eacute; su un intervallo illimitato la convergenza uniforme non pu&ograve; mai valere"}],
  "hint":"Controesempio: $f_n=\\frac1n\\mathbf{1}_{[0,n]}$ tende a $0$ uniformemente ma $\\int_0^{+\\infty}f_n=1$ per ogni $n$.",
  "sol":"<b>Dove cade il teorema.</b> L'ipotesi $[a,b]$ limitato serve perch&eacute; la stima &egrave; $\\big|\\int_a^b(f_n-f)\\big|\\le(b-a)\\|f_n-f\\|_\\infty$: se $b-a=+\\infty$ il prodotto $\\infty\\cdot0$ non si controlla. Con $f_n=\\frac1n$ su $[0,n]$, $0$ altrove: $\\|f_n\\|_\\infty=\\frac1n\\to0$ ma l'integrale vale $1$ sempre. Su intervalli illimitati si usa la convergenza dominata (esiste $g$ integrabile con $|f_n|\\le g$) oppure si stima esplicitamente la coda."}]},

{"pool":"serie","src":"20240122 Es.2 ii &middot; scambio serie-integrale","steps":[
 {"t":"Perch&eacute; vale $\\displaystyle\\int_1^{10}\\sum_{k\\ge0}\\frac{e^{-kx}}{3^{k+1}(k+e^{-k})}dx=\\sum_{k\\ge0}\\int_1^{10}\\frac{e^{-kx}}{3^{k+1}(k+e^{-k})}dx$?",
  "opts":[
   {"x":"Perch&eacute; su $[1,10]$ la serie converge TOTALMENTE (i termini sono maggiorati da $\\frac{1}{3^{k+1}(k+e^{-k})}$, serie numerica convergente): la totale implica l'uniforme, e l'uniforme su un compatto autorizza l'integrazione termine a termine","c":true},
   {"x":"Perch&eacute; ogni addendo &egrave; integrabile su $[1,10]$"},
   {"x":"Perch&eacute; la serie converge puntualmente per ogni $x\\in[1,10]$"},
   {"x":"Perch&eacute; $[1,10]$ &egrave; compatto e le somme parziali sono continue"}],
  "hint":"Il criterio da citare per nome ha tre parole ed &egrave; quello che d&agrave; la convergenza TOTALE.",
  "sol":"<b>Integrazione per serie.</b> Su $[1,10]$, $0\\le e^{-kx}\\le e^{-k}\\le1$, quindi $\\sup_{[1,10]}\\big|u_k(x)\\big|\\le M_k=\\frac{1}{3^{k+1}(k+e^{-k})}$ e $\\sum M_k<\\infty$ (dominata da $\\sum 3^{-k-1}$). Per il <b>criterio di Weierstrass</b> la serie converge totalmente, quindi uniformemente, su $[1,10]$. Il teorema di integrazione termine a termine per serie uniformemente convergenti su un intervallo limitato d&agrave; l'uguaglianza. <b>Catena da ricordare</b>: totale $\\Rightarrow$ uniforme $\\Rightarrow$ (su compatto) scambio con l'integrale. La puntuale da sola non basta mai."}]},

{"pool":"serie","src":"20240619 Es.4 iii","steps":[
 {"t":"Sia $S(x)=\\sum_{n\\ge0}\\dfrac{\\log^n(x)}{n^2+1}$. Il testo chiede $S'(1)$. Quanto vale?",
  "opts":[
   {"x":"$\\tfrac12$","c":true},
   {"x":"$0$"},
   {"x":"$1$"},
   {"x":"$S$ non &egrave; derivabile in $x=1$: la serie delle derivate diverge"}],
  "hint":"Deriva termine a termine e poi valuta in $x=1$, dove $\\log x=0$: quasi tutti i termini muoiono. Sopravvive solo quello con esponente $n-1=0$.",
  "sol":"<b>Derivazione termine a termine.</b> Posto $u_n(x)=\\frac{\\log^n x}{n^2+1}$, si ha $u_n'(x)=\\frac{n\\log^{n-1}x}{(n^2+1)x}$. In un intorno di $x=1$ vale $|\\log x|\\le q<1$, e $\\sum\\frac{n q^{n-1}}{n^2+1}\\cdot\\frac1x$ converge totalmente: per il teorema di derivazione per serie $S$ &egrave; derivabile e $S'=\\sum u_n'$. In $x=1$: $\\log 1=0$, quindi $\\log^{n-1}(1)=0$ per $n\\ge2$ e $=1$ per $n=1$. Resta il solo $n=1$: $S'(1)=\\frac{1}{1^2+1}\\cdot\\frac11=\\frac12$. <b>Ipotesi da citare</b>: la serie delle derivate deve convergere uniformemente in un intorno, e la serie di partenza deve convergere in almeno un punto."}]},

{"pool":"serie","src":"20220706 Es.1 ii &middot; somma della serie","steps":[
 {"t":"$\\displaystyle\\sum_{k\\ge1}\\frac{\\big(\\log(x-1)\\big)^k}{k}$. Nell'insieme di convergenza puntuale, quanto vale la somma?",
  "opts":[
   {"x":"$-\\log\\!\\big(1-\\log(x-1)\\big)$","c":true},
   {"x":"$\\dfrac{\\log(x-1)}{1-\\log(x-1)}$"},
   {"x":"$e^{\\log(x-1)}-1=x-2$"},
   {"x":"$\\log\\!\\big(1+\\log(x-1)\\big)$"}],
  "hint":"Cambio di variabile $y=\\log(x-1)$: resta una serie di potenze notevole in $y$, quella il cui termine generale &egrave; $y^k/k$.",
  "sol":"<b>Riconduzione a una serie di potenze notevole.</b> Con $y=\\log(x-1)$ (definita per $x>1$) la serie diventa $\\sum_{k\\ge1}\\frac{y^k}{k}$, che ha raggio di convergenza $1$ e somma $-\\log(1-y)$ per $|y|<1$ (converge anche in $y=-1$ per Leibniz, dove d&agrave; $-\\log2$; diverge in $y=+1$, serie armonica). Tornando alla variabile $x$: la somma vale $-\\log\\big(1-\\log(x-1)\\big)$ sull'insieme $-1\\le\\log(x-1)<1$, cio&egrave; $1+e^{-1}\\le x<1+e$. <b>Mossa da riconoscere</b>: quando l'argomento &egrave; una funzione composta, il primo gesto &egrave; sempre la sostituzione che riporta a $\\sum y^k$, $\\sum y^k/k$ o $\\sum y^k/k!$."}]},

{"pool":"serie","src":"20250214 Es.4 ii &middot; segni alterni","steps":[
 {"t":"$f_n(x)=[\\arctan(x^2)]^n$ e la serie $\\sum_{n\\ge0}\\dfrac{(-1)^n f_n(x)}{\\sqrt{n+3}}$. Dove converge UNIFORMEMENTE ma non TOTALMENTE?",
  "opts":[
   {"x":"Su ogni insieme dove $\\arctan(x^2)$ resta $\\le1$, cio&egrave; su tutto $\\mathbb{R}$: la stima del resto di Leibniz d&agrave; l'uniforme, mentre $\\sum\\frac{1}{\\sqrt{n+3}}$ diverge e nega la totale","c":true},
   {"x":"Su nessun insieme: se converge uniformemente converge anche totalmente"},
   {"x":"Solo su $[-1,1]$, dove $\\arctan(x^2)<\\pi/4$"},
   {"x":"Su $\\mathbb{R}$, e converge anche totalmente perch&eacute; $\\frac{1}{\\sqrt{n+3}}\\to0$"}],
  "hint":"La convergenza totale chiede che $\\sum\\sup|u_n|$ converga: qui $\\sup|u_n|$ vale al pi&ugrave; $\\frac{1}{\\sqrt{n+3}}$ e quella serie diverge. Ma l'alternanza di segno d&agrave; comunque il controllo del resto.",
  "sol":"<b>Leibniz uniforme.</b> Con $t=\\arctan(x^2)\\in[0,\\pi/2)$, i termini $a_n(x)=\\frac{t^n}{\\sqrt{n+3}}$ sono decrescenti in $n$ e tendono a $0$; per il criterio di Leibniz la serie converge e il resto &egrave; maggiorato dal primo termine trascurato: $|R_N(x)|\\le\\frac{t^{N+1}}{\\sqrt{N+4}}\\le\\frac{1}{\\sqrt{N+4}}$ per $t\\le1$, stima INDIPENDENTE da $x$: convergenza uniforme. La totale invece richiederebbe $\\sum_n\\sup_x\\frac{t^n}{\\sqrt{n+3}}$, e su $x$ con $t\\to1$ il sup vale $\\frac{1}{\\sqrt{n+3}}$, la cui serie diverge. <b>Totale $\\Rightarrow$ uniforme, ma non viceversa</b>: questo &egrave; il controesempio che l'esame usa."}]},

{"pool":"serie","src":"modus operandi &middot; 20240209 Es.3","steps":[
 {"t":"Il testo chiede la convergenza uniforme di $f_n$ negli intervalli $[-2,2]$, $[2,+\\infty)$ e $[2,10]$. Perch&eacute; tre intervalli e non uno?",
  "opts":[
   {"x":"Perch&eacute; la risposta cambia: la convergenza uniforme &egrave; una propriet&agrave; DELL'INSIEME, e il compito verifica che si sappia dove si rompe (tipicamente dove il sup della differenza non si abbassa)","c":true},
   {"x":"Perch&eacute; su intervalli diversi il limite puntuale &egrave; diverso"},
   {"x":"Per far calcolare tre volte lo stesso integrale"},
   {"x":"Perch&eacute; su $[2,+\\infty)$ la convergenza puntuale non vale"}],
  "hint":"$[2,10]\\subset[2,+\\infty)$: se fosse uniforme sul grande lo sarebbe sul piccolo. Il caso interessante &egrave; l'inverso.",
  "sol":"<b>La convergenza uniforme non &egrave; ereditaria verso l'alto.</b> Se $f_n\\to f$ uniformemente su $A$ e $B\\subseteq A$, allora &egrave; uniforme su $B$. Il contrario &egrave; falso, ed &egrave; il motivo per cui l'esame elenca un compatto, una semiretta e un compatto contenuto nella semiretta. Ricetta operativa: calcola $M_n=\\sup_{x\\in A}|f_n(x)-f(x)|$ studiando la funzione $x\\mapsto f_n(x)-f(x)$ (punti critici o comportamento agli estremi) e guarda se $M_n\\to0$. Sulle semirette illimitate il sup &egrave; spesso realizzato 'all'infinito' o in un punto che dipende da $n$ e scappa: quello &egrave; il segnale che l'uniforme cade."}]},

{"pool":"serie","src":"20230123 Es.5 v-vi &middot; ibrido EDO x successioni","steps":[
 {"t":"$y_n$ &egrave; la soluzione massimale di $y'=x^3(y-3)\\arctan y$, $y(0)=\\frac1n$. Il testo chiede di provare che $y_n\\to0$ uniformemente su $\\mathbb{R}$. Con quale strumento, non avendo la formula esplicita?",
  "opts":[
   {"x":"Con le soluzioni costanti come barriere: $y\\equiv0$ &egrave; soluzione, l'unicit&agrave; impedisce l'attraversamento, quindi $0<y_n(x)\\le\\frac1n$ per ogni $x$ dove &egrave; definita $\\Rightarrow \\sup_{\\mathbb{R}}|y_n|\\le\\frac1n\\to0$","c":true},
   {"x":"Risolvendo l'equazione a variabili separabili e passando al limite nella formula"},
   {"x":"Applicando il criterio di Weierstrass alla serie $\\sum y_n$"},
   {"x":"Non si pu&ograve;: senza formula esplicita la convergenza uniforme non &egrave; dimostrabile"}],
  "hint":"La stima uniforme che serve non viene dal calcolo: viene dal fatto che due soluzioni distinte non si toccano mai.",
  "sol":"<b>Barriere + unicit&agrave;.</b> $f(x,y)=x^3(y-3)\\arctan y$ &egrave; $C^1$, quindi vale l'unicit&agrave; locale (Cauchy-Lipschitz) e due grafici di soluzione non si intersecano. $y\\equiv0$ e $y\\equiv3$ sono soluzioni costanti. Il dato $y_n(0)=\\frac1n\\in(0,3)$ per $n\\ge1$, quindi $0<y_n(x)<3$ ovunque. Inoltre per $\\frac1n<y<3$ si ha $y-3<0$ e $\\arctan y>0$, dunque $y_n'$ ha il segno di $-x^3$: $y_n$ cresce su $(-\\infty,0)$ e decresce su $(0,+\\infty)$, quindi il MASSIMO &egrave; in $x=0$ e vale $\\frac1n$. Ne segue $0<y_n(x)\\le\\frac1n$ per ogni $x\\in\\mathbb{R}$, cio&egrave; $\\|y_n\\|_\\infty\\le\\frac1n\\to0$: convergenza uniforme a $0$. <b>Il ponte fra i due capitoli &egrave; sempre questo</b>: la stima $\\sup$-uniforme la d&agrave; la teoria qualitativa delle EDO, non l'integrazione."}]},

{"pool":"serie","src":"modus operandi &middot; ordine delle domande","steps":[
 {"t":"In quale ordine logico vanno le quattro convergenze quando il testo chiede 'puntuale, assoluta, uniforme e totale'?",
  "opts":[
   {"x":"Prima puntuale e assoluta (dove ha senso la serie), poi totale (Weierstrass, la pi&ugrave; facile da verificare) e infine uniforme, che si deduce dalla totale dove c'&egrave; e va discussa a mano dove la totale manca","c":true},
   {"x":"Prima uniforme, poi totale: l'uniforme &egrave; pi&ugrave; forte"},
   {"x":"L'ordine &egrave; indifferente: le quattro nozioni sono indipendenti"},
   {"x":"Prima assoluta, poi puntuale: l'assoluta implica la puntuale"}],
  "hint":"Fra le quattro c'&egrave; una sola catena di implicazioni vera, e conviene percorrerla nel verso che fa risparmiare lavoro.",
  "sol":"<b>Le implicazioni.</b> totale $\\Rightarrow$ uniforme $\\Rightarrow$ puntuale; totale $\\Rightarrow$ assoluta $\\Rightarrow$ puntuale. Nessun'altra implicazione vale. Strategia da compito: (1) trova l'insieme di convergenza puntuale/assoluta, di solito con radice o rapporto (per serie di potenze, il raggio); (2) su ogni compatto interno prova Weierstrass, che &egrave; un conto sui $\\sup$ e chiude d'un colpo totale+uniforme; (3) resta solo la frontiera dell'insieme di convergenza, dove Weierstrass fallisce: l&igrave; si discute a mano (Leibniz, Abel, o negazione tramite $\\sup|R_N|\\not\\to0$). &Egrave; sempre l&igrave; che il compito mette il punto difficile."}]}

]);

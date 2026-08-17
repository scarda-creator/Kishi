  /* ===== ESTENSIONE 2026-08-17 (run notturno) =====
     Buchi colmati: convessità/concavità della soluzione in un intorno di $t_0$ portata
     fino al segno e alla conclusione (4 apparizioni su 15, nel quiz c'era solo «come si
     ricava $y''$»); calcolo dei DUE limiti $t\to\pm\infty$ con gli equilibri come livelli. */

  { pool:"edo", src:"20230705 Es.5 · convessità in $t_0$ (calcolo)", steps:[{
      t:"<span class=\"lbl\">ES</span> $y'=\\dfrac{2}{t}y+4t^2y^3$, $y(1)=1$. La soluzione è convessa o concava in un intorno di $t=1$?",
      opts:[
        {x:"Convessa: $y'(1)=6$ e $y''(1)=\\big(\\tfrac{2y'}{t}-\\tfrac{2y}{t^2}\\big)+\\big(8ty^3+12t^2y^2y'\\big)=10+80=90>0$",c:true},
        {x:"Concava: $y''(1)=-90<0$"},
        {x:"Né l'una né l'altra: $y''(1)=0$, c'è un flesso"},
        {x:"Serve la soluzione esplicita: $y''$ non è calcolabile dall'equazione"}],
      hint:"Deriva l'equazione rispetto a $t$ ricordando che $y$ è funzione di $t$ (regola del prodotto e della catena), poi sostituisci $t=1$, $y=1$ e il valore di $y'$ che l'equazione stessa fornisce.",
      sol:"<b>Convessità senza risolvere.</b> Dall'equazione, $y'(1)=2\\cdot1+4\\cdot1=6$. Derivando: $y''=\\dfrac{2y'}{t}-\\dfrac{2y}{t^2}+8ty^3+12t^2y^2y'$. In $t=1,\\;y=1,\\;y'=6$: $12-2+8+72=90>0$, dunque la soluzione è convessa in un intorno di $t=1$. Il punto di metodo: $y''$ si ottiene derivando l'equazione, mai risolvendola — e il valore di $y'$ nel punto lo fornisce l'equazione stessa. È il punto (iii) tipico dell'Es.5."
    }]
  },

  { pool:"edo", src:"20240704 Es.5 · convessità con quoziente", steps:[{
      t:"<span class=\"lbl\">ES</span> $y'=\\dfrac{y(y-2)}{1+t}$, $y(0)=1$. La soluzione è convessa o concava in un intorno di $t_0=0$?",
      opts:[
        {x:"Convessa: $y'(0)=-1$ e $y''(0)=\\dfrac{(2y-2)y'(1+t)-y(y-2)}{(1+t)^2}\\Big|_{0}=0+1=1>0$",c:true},
        {x:"Concava: $y''(0)=-1$"},
        {x:"Convessa perché $y'(0)<0$ e la soluzione decresce"},
        {x:"Non decidibile: $y(0)=1$ sta fra i due equilibri $0$ e $2$"}],
      hint:"Il fattore $(2y-2)$ si annulla in $y=1$: metà del conto sparisce. Il segno resta al solo termine $-y(y-2)$.",
      sol:"<b>Un termine si spegne.</b> $y'(0)=\\tfrac{1\\cdot(-1)}{1}=-1$. Derivando il quoziente: $y''=\\dfrac{(2y-2)y'\\,(1+t)-y(y-2)}{(1+t)^2}$. In $t=0$: $(2\\cdot1-2)=0$ annulla il primo addendo, e $-y(y-2)=-(1)(-1)=1$, quindi $y''(0)=1>0$: convessa. Attenzione all'opzione 3: monotonia e convessità sono indipendenti — decrescente e convessa è perfettamente possibile (ed è il caso qui: $y$ scende verso l'equilibrio $0$ appiattendosi)."
    }]
  },

  { pool:"edo", src:"20240209 Es.5 · convessità per segni, senza numeri", steps:[{
      t:"$y'=\\sqrt{4y^2+e^t+1}$, $y(0)=2$. Perché la soluzione è convessa su $[0,+\\infty)$?",
      opts:[
        {x:"Perché $y''=\\dfrac{8yy'+e^t}{2\\sqrt{4y^2+e^t+1}}$ e su $[0,+\\infty)$ si ha $y>0$ e $y'>0$: numeratore positivo",c:true},
        {x:"Perché $y'>0$, e ogni soluzione crescente è convessa"},
        {x:"Perché la radice è una funzione convessa"},
        {x:"Perché $y(0)=2>0$"}],
      hint:"Deriva l'equazione una volta e guarda solo i SEGNI: non serve nessun valore numerico. Prima però stabilisci che $y$ resta positiva.",
      sol:"<b>Convessità qualitativa.</b> Dall'equazione $y'\\ge1>0$ sempre, quindi $y$ è crescente e da $y(0)=2$ resta $y\\ge2>0$ su $[0,+\\infty)$. Derivando: $y''=\\dfrac{8yy'+e^t}{2\\sqrt{4y^2+e^t+1}}$, con numeratore e denominatore positivi, dunque $y''>0$: convessa. La seconda opzione è una falsa implicazione (crescente non dice niente sulla concavità); la terza confonde la convessità della funzione $\\sqrt{\\cdot}$ con quella della soluzione."
    }]
  },

  { pool:"edo", src:"20240305 Es.5 · i DUE limiti, con gli equilibri come livelli", steps:[{
      t:"<span class=\"lbl\">ES</span> $y'=\\dfrac{t\\,y\\,(e^y-e)}{1+y^2}$, $y(0)=\\tfrac12$. Quanto valgono $\\lim_{t\\to+\\infty}y$ e $\\lim_{t\\to-\\infty}y$?",
      opts:[
        {x:"Entrambi $0$: la soluzione resta in $(0,1)$, ha un massimo in $t=0$ e decresce da entrambe le parti verso l'equilibrio $0$",c:true},
        {x:"$0$ per $t\\to+\\infty$ e $1$ per $t\\to-\\infty$"},
        {x:"Entrambi $1$: l'equilibrio più vicino al dato iniziale"},
        {x:"Non esistono: la soluzione oscilla per il fattore $t$"}],
      hint:"Trova gli equilibri ($y=0$ e $y=1$), poi studia il segno di $y'$ separatamente per $t>0$ e per $t<0$: il fattore $t$ cambia segno, il resto no.",
      sol:"<b>Barriere, monotonia, limite = equilibrio.</b> Gli equilibri sono $y\\equiv0$ e $y\\equiv1$ (da $e^y=e$). Per unicità la soluzione con $y(0)=\\tfrac12$ resta in $(0,1)$ per ogni $t$: in particolare è limitata e globale. In $(0,1)$: $y>0$ e $e^y-e<0$, quindi il fattore $\\tfrac{y(e^y-e)}{1+y^2}$ è negativo e il segno di $y'$ è l'opposto del segno di $t$: $y'>0$ per $t<0$, $y'<0$ per $t>0$, con massimo in $t=0$. Dunque $y$ decresce su $(0,+\\infty)$ ed è limitata inferiormente: il limite $L_+$ esiste, e per il teorema dell'asintoto ($y'\\to0$) deve annullare il campo, cioè $L_+\\in\\{0,1\\}$; essendo $L_+<\\tfrac12$, $L_+=0$. Simmetricamente per $t\\to-\\infty$, $L_-=0$."
    }]
  },

  { pool:"edo", src:"luglioAV Es.2 · il limite all'indietro", steps:[{
      t:"<span class=\"lbl\">ES</span> $y'=\\ln(1+y^2)(3-y)$, $y(0)=2$ (soluzione globale, crescente, con $\\lim_{t\\to+\\infty}y=3$). Quanto vale $\\lim_{t\\to-\\infty}y(t)$?",
      opts:[
        {x:"$0$: andando all'indietro $y$ decresce restando $>0$, quindi il limite esiste e deve essere un equilibrio; l'unico disponibile sotto $2$ è $0$",c:true},
        {x:"$-\\infty$: nulla ferma la soluzione all'indietro"},
        {x:"$3$: lo stesso limite, per simmetria"},
        {x:"$2$: il dato iniziale è già un valore di equilibrio"},
        {x:"Non esiste"}],
      hint:"Gli equilibri sono $y\\equiv0$ e $y\\equiv3$: l'unicità impedisce di attraversarli, in avanti e all'indietro. Una funzione monotona e limitata ha limite, e quel limite deve azzerare $y'$.",
      sol:"<b>Le soluzioni costanti sono barriere anche nel passato.</b> Da $\\ln(1+y^2)(3-y)=0$: equilibri $y=0$ e $y=3$. Con $y(0)=2\\in(0,3)$ la soluzione resta in $(0,3)$ per ogni $t$ (attraversare un equilibrio violerebbe l'unicità), quindi è globale e limitata; in $(0,3)$ si ha $y'>0$, dunque $y$ è crescente su tutto $\\mathbb{R}$. Per $t\\to-\\infty$ decresce ed è limitata inferiormente da $0$: il limite $L_-$ esiste, sta in $[0,2)$, e per il teorema dell'asintoto azzera il campo: $L_-=0$. L'esame chiede spesso solo il limite in $+\\infty$, ma il ragionamento all'indietro è lo stesso e vale la metà del punto."
    }]
  }

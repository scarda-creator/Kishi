  /* ===== ESTENSIONE 2026-08-17 (run notturno) =====
     Buco colmato: la CHIUSURA del ragionamento richiesta dall'Es.1 di gennaio/febbraio —
     monotonia di g e natura dei suoi punti critici via g''. Il quiz aveva le formule
     ma nessuna catena portata fino alla conclusione «massimo o minimo». */

  { pool:"dini", src:"20220124 Es.1 · $g_0'(0)=0$ (catena completa i)", steps:[{
      t:"<span class=\"lbl\">ES</span> $F(x,y)=y^3\\sin x+y^2-2ye^x-3-x$, punto $(0,-1)$ (si verifica $F=0$, $F_y=-4\\ne0$). Dini dà $y=g_0(x)$. Quanto vale $g_0'(0)$, e cosa se ne deduce?",
      opts:[
        {x:"$g_0'(0)=0$: essendo $F_x(0,-1)=0$, il punto $x=0$ è critico per $g_0$",c:true},
        {x:"$g_0'(0)=-\\tfrac14$"},
        {x:"$g_0'(0)=1$: la retta tangente è la bisettrice"},
        {x:"$g_0'(0)$ non si può calcolare senza esplicitare $g_0$"}],
      hint:"$F_x=y^3\\cos x-2ye^x-1$. Valutalo in $(0,-1)$ prima di dividere.",
      sol:"<b>Derivata implicita.</b> $g_0'(x)=-\\dfrac{F_x(x,g_0(x))}{F_y(x,g_0(x))}$. In $(0,-1)$: $F_x=(-1)^3\\cdot1-2(-1)\\cdot1-1=-1+2-1=0$ e $F_y=3y^2\\sin x+2y-2e^x=0-2-2=-4$. Dunque $g_0'(0)=-\\tfrac{0}{-4}=0$: la tangente è orizzontale e $x=0$ è un punto critico di $g_0$. Non serve conoscere $g_0$ in forma esplicita — è esattamente il senso della richiesta d'esame «studiare il comportamento di $g_0$ in un intorno di $0$ senza risolvere»."
    }]
  },

  { pool:"dini", src:"20220124 Es.1 · natura del punto critico (catena completa ii)", steps:[{
      t:"<span class=\"lbl\">ES</span> Per la stessa $g_0$ (con $g_0'(0)=0$, $F_y=-4$, $F_{xx}(0,-1)=2$): che punto è $x=0$ per $g_0$?",
      opts:[
        {x:"Minimo locale: $g_0''(0)=-\\dfrac{F_{xx}}{F_y}=-\\dfrac{2}{-4}=\\tfrac12>0$",c:true},
        {x:"Massimo locale: $g_0''(0)=-\\tfrac12<0$"},
        {x:"Flesso: $g_0''(0)=0$"},
        {x:"Non si può decidere senza calcolare $F_{xy}$ e $F_{yy}$"}],
      hint:"La formula ridotta $g''=-F_{xx}/F_y$ vale solo quando $g'=0$ — ed è proprio il caso. Il segno di $g''$ chiude la classificazione.",
      sol:"<b>Secondo ordine implicito.</b> Derivando due volte $F(x,g(x))\\equiv0$: $F_{xx}+2F_{xy}g'+F_{yy}(g')^2+F_yg''=0$. Con $g'(0)=0$ i termini centrali cadono e resta $g''(0)=-\\dfrac{F_{xx}}{F_y}$. Qui $F_{xx}=-y^3\\sin x-2ye^x$, che in $(0,-1)$ vale $0+2=2$; quindi $g_0''(0)=-\\tfrac{2}{-4}=\\tfrac12>0$: <b>minimo locale</b>. La quarta opzione sarebbe corretta soltanto se $g'(0)\\ne0$."
    }]
  },

  { pool:"dini", src:"20220124 Es.1 · l'altro ramo $g_1$ (contrasto)", steps:[{
      t:"<span class=\"lbl\">ES</span> Stessa $F(x,y)=y^3\\sin x+y^2-2ye^x-3-x$, ma nel punto $(0,3)$ (da $F(0,y)=y^2-2y-3=0$). Come si comporta $g_1$ in un intorno di $0$?",
      opts:[
        {x:"Strettamente decrescente: $F_x(0,3)=20$, $F_y(0,3)=4$, quindi $g_1'(0)=-5\\ne0$ e non ci sono punti critici",c:true},
        {x:"Ha un massimo in $x=0$, come $g_0$ ha un minimo"},
        {x:"Strettamente crescente, con $g_1'(0)=5$"},
        {x:"Il Dini non si applica in $(0,3)$"}],
      hint:"Stessa equazione, punto diverso: non c'è motivo perché i due rami si comportino allo stesso modo. Ricalcola $F_x$ con $y=3$.",
      sol:"<b>Due rami, due comportamenti.</b> $F(0,y)=y^2-2y-3=(y-3)(y+1)$ dà i due punti $(0,-1)$ e $(0,3)$. In $(0,3)$: $F_y=3\\cdot9\\cdot0+6-2=4\\ne0$ (Dini applicabile) e $F_x=27\\cdot1-2\\cdot3\\cdot1-1=20$, quindi $g_1'(0)=-\\tfrac{20}{4}=-5<0$: $g_1$ è strettamente decrescente in un intorno di $0$ e non ha punti critici lì. Il compito chiede sempre <i>entrambi</i> i rami proprio per vedere se si ricalcola invece di trasportare la conclusione."
    }]
  },

  { pool:"dini", src:"tipo G · manuale · $g''$ nel caso generale", steps:[{
      t:"Se $g'(x_0)\\ne0$, la formula corretta per $g''(x_0)$ (con $y=g(x)$ da $F=0$) è:",
      opts:[
        {x:"$g''=-\\dfrac{F_{xx}+2F_{xy}g'+F_{yy}(g')^2}{F_y}$",c:true},
        {x:"$g''=-\\dfrac{F_{xx}}{F_y}$ sempre, indipendentemente da $g'$"},
        {x:"$g''=\\dfrac{F_{xx}}{F_{yy}}$"},
        {x:"$g''=-\\dfrac{F_{xx}+F_{yy}}{F_y}$"}],
      hint:"Deriva $F_x(x,g)+F_y(x,g)g'=0$ rispetto a $x$ trattando $g$ come funzione: ogni derivata seconda mista porta un $g'$ con sé.",
      sol:"<b>Da dove viene.</b> Derivando $F_x(x,g)+F_y(x,g)g'=0$: $\\big(F_{xx}+F_{xy}g'\\big)+\\big(F_{yx}+F_{yy}g'\\big)g'+F_yg''=0$, cioè $F_{xx}+2F_{xy}g'+F_{yy}(g')^2+F_yg''=0$ (con $F\\in C^2$, $F_{xy}=F_{yx}$). La versione ridotta $-F_{xx}/F_y$ è il caso particolare $g'=0$ — comodissima quando si classifica un punto critico di $g$, e sbagliata in ogni altro punto. È la trappola dichiarata nelle soluzioni ufficiali del 24/01/2022."
    }]
  },

  { pool:"dini", src:"20230210 Es.1 · catena completa sul ramo in $x_0=0$", steps:[{
      t:"<span class=\"lbl\">ES</span> $F(x,y)=x^3+ye^{x^2y^2}-3x^2$; sull'asse $y=0$ i punti del livello sono $x_0=0$ e $x_1=3$. Nel punto $(0,0)$ (dove $F_y=1$) come si comporta $g_0$?",
      opts:[
        {x:"Ha un minimo in $x=0$: $F_x(0,0)=0$ dà $g_0'(0)=0$, e $F_{xx}(0,0)=-6$ dà $g_0''(0)=6>0$",c:true},
        {x:"Ha un massimo in $x=0$, perché $F_{xx}<0$"},
        {x:"È strettamente crescente, con $g_0'(0)=3$"},
        {x:"Il Dini non si applica: $(0,0)$ annulla anche $F_x$"}],
      hint:"Sulla retta $y=0$ i termini con $y$ a fattore muoiono: $F_x(x,0)=3x^2-6x$ e $F_{xx}(x,0)=6x-6$. Il segno finale è quello di $-F_{xx}/F_y$, non di $F_{xx}$.",
      sol:"<b>Catena.</b> $F(x,0)=x^3-3x^2=x^2(x-3)$: punti $(0,0)$ e $(3,0)$. $F_y=e^{x^2y^2}(1+2x^2y^2)$ vale $1$ in entrambi, dunque il Dini si applica ($F_x=0$ non è un ostacolo: l'ipotesi riguarda $F_y$). In $(0,0)$: $F_x=3\\cdot0-0=0\\Rightarrow g_0'(0)=0$, punto critico; $F_{xx}(0,0)=-6\\Rightarrow g_0''(0)=-\\tfrac{-6}{1}=6>0$: <b>minimo</b>. Nota il doppio cambio di segno — è l'errore più comune. Per confronto, in $(3,0)$: $F_x=27-18=9\\Rightarrow g_1'(3)=-9$, decrescente."
    }]
  }

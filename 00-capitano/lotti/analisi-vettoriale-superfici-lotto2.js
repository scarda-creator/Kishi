/* Lotto 2 del pool `superfici` (Analisi Vettoriale). 22 unita'.
   PROVENIENZA:
   - U1  20250127 Es.1 (param+normale+area+bordo+rotF+Stokes, 6 passi) — conto INTERO.
   - U2  20240122 Es.4 (solido di rotazione: Guldino+divergenza+flusso Sigma_i, 6 passi).
   - U3  20230210 Es.4 (sfera cap cilindro: volume+3 superfici+flussi, 6 passi).
   - U4  Esame 27.06.2025 Es.5 (superficie di rotazione, flusso per divergenza a strati, 5 passi).
   - U5  variante da MIT 18.02SC: superficie IMPLICITA F=0, dS via ||grad F|| (5 passi).
   - U6  variante da LibreTexts: calotta sferica con apertura angolare non standard.
   - U7-U10, U17, U22: modus operandi / strategia (bordo determina Stokes, tappare per Gauss,
     orientazione normale-bordo, div F=0 e stesso flusso, Gauss vs diretto).
   - U11-U16, U18-U21: calcolo e concetti (aree cartesiane, cilindro, cono implicito, poli sferici).

   RICALCOLI (tutti tornano con le stampe):
   - 20250127: area 9*sqrt(6)*pi; circuitazione Stokes -90*pi. La normale a terza comp. negativa
     e' (-2,-1,-1); la stampa scrive (-2,-2,-1) come vettore di test, ma la comp. centrale di rotF
     e' 0, quindi il refuso non tocca il risultato. Inoltre la stampa scrive D={x^2+y^2<=3} ma usa
     m_2(D)=9*pi: il raggio e' 3, il "<=3" e' un refuso (sotto lo dichiaro nella sol).
   - 20240122: V=32*pi/3; Phi(dE)=32*pi/3 (divF=1); Phi(Sigma_2)=32*pi/5; Phi(Sigma_1)=64*pi/15.
   - 20230210: V=244*pi/3; Phi(Sigma_1)=Phi(Sigma_2)=50*pi; Phi(Sigma_3)=144*pi.
   - 27.06.2025: divF=2/(1+z^2); flusso 20*pi/3.
   - U5 verifica: calotta z in [1,2] su sfera R=2 -> area 4*pi = 2*pi*R*h con h=1. Torna.
   - U6: R=3, phi in [0,pi/3] -> area 9*pi = 2*pi*R*h con h=3/2. Torna. */
Q.superfici = [
  { pool:"superfici", src:"20250127 Es.1", steps:[
      { t:"$\\Sigma=\\{z+2x+y-2=0,\\ x^2+y^2\\le 9\\}$. Scrivi una parametrizzazione regolare e il dominio dei parametri.",
        opts:[{x:"cartesiana $X(x,y)=(x,\\,y,\\,-2x-y+2)$, $(x,y)\\in D=\\{x^2+y^2\\le 9\\}$",c:true},{x:"$X(x,y)=(x,\\,y,\\,2x+y-2)$, $(x,y)\\in D=\\{x^2+y^2\\le 9\\}$"},{x:"$X(x,y)=(x,\\,y,\\,-2x-y+2)$, $(x,y)\\in\\{x^2+y^2\\le 3\\}$"}],
        hint:"Isola $z$: il segno conta. Il vincolo sui parametri e' la proiezione di $\\Sigma$ sul piano $xy$, un cerchio di raggio $3$ perche' il raggio al quadrato e' $9$.",
        sol:"Superficie cartesiana $z=f(x,y)=-2x-y+2$, regolare perche' $f\\in C^1$. Il dominio dei parametri e' la proiezione $D=\\{x^2+y^2\\le 9\\}$, disco di raggio $3$. NB: la stampa ufficiale scrive $x^2+y^2\\le 3$, ma nel calcolo dell'area usa $m_2(D)=9\\pi$, cioe' raggio $3$: e' un refuso, il raggio corretto e' $3$.",
        cont:"normale" },
      { t:"Determina il versore normale a $\\Sigma$ con terza componente positiva.",
        opts:[{x:"$n=\\dfrac{1}{\\sqrt6}(2,\\,1,\\,1)$",c:true},{x:"$n=\\dfrac{1}{\\sqrt6}(-2,\\,-1,\\,1)$"},{x:"$n=\\dfrac{1}{\\sqrt6}(2,\\,1,\\,-1)$"}],
        hint:"Per $z=f(x,y)$ la normale non normalizzata e' $(-f_x,-f_y,1)$; qui $f_x=-2,\\ f_y=-1$, quindi la terza componente $+1$ e' gia' quella voluta.",
        sol:"La normale a una superficie cartesiana e' $\\pm(-f_x,-f_y,1)$. Con $f_x=-2,\\ f_y=-1$ si ha $(-f_x,-f_y,1)=(2,1,1)$, norma $\\sqrt{4+1+1}=\\sqrt6$; il versore a terza componente positiva e' $n=(2,1,1)/\\sqrt6$.",
        cont:"area" },
      { t:"Calcola l'area di $\\Sigma$.",
        opts:[{x:"$9\\sqrt6\\,\\pi$",c:true},{x:"$9\\pi$"},{x:"$6\\sqrt6\\,\\pi$"}],
        hint:"$dS=\\sqrt{1+f_x^2+f_y^2}\\,dx\\,dy$ e qui il fattore e' costante: esce dall'integrale e resta l'area di $D$.",
        sol:"Formula dell'area per superfici cartesiane: $A=\\iint_D\\sqrt{1+f_x^2+f_y^2}\\,dx\\,dy=\\sqrt{1+4+1}\\;m_2(D)=\\sqrt6\\cdot 9\\pi=9\\sqrt6\\,\\pi$ (disco di raggio $3$).",
        cont:"bordo" },
      { t:"Scrivi una parametrizzazione del bordo $\\partial\\Sigma$.",
        opts:[{x:"$\\gamma(t)=(3\\cos t,\\ 3\\sin t,\\ -6\\cos t-3\\sin t+2)$, $t\\in[0,2\\pi]$",c:true},{x:"$\\gamma(t)=(3\\cos t,\\ 3\\sin t,\\ 0)$, $t\\in[0,2\\pi]$"},{x:"$\\gamma(t)=(\\cos t,\\ \\sin t,\\ -2\\cos t-\\sin t+2)$, $t\\in[0,2\\pi]$"}],
        hint:"$\\partial\\Sigma$ e' l'immagine di $\\partial D$ (il cerchio di raggio $3$) tramite la parametrizzazione: la $z$ NON e' costante, si legge da $f$.",
        sol:"Il bordo $\\partial\\Sigma$ e' l'immagine di $\\partial D=\\{x^2+y^2=9\\}$ tramite $X$. Con $x=3\\cos t,\\ y=3\\sin t$ e $z=f(x,y)=-2x-y+2$ si ottiene $\\gamma(t)=(3\\cos t,\\,3\\sin t,\\,-6\\cos t-3\\sin t+2)$, $t\\in[0,2\\pi]$.",
        cont:"rotore" },
      { t:"Per $F=(y^2+z^2+e^x,\\ xy+z+\\cos y,\\ 2xz+3yz+z^2)$ calcola $\\operatorname{rot}F$.",
        opts:[{x:"$(3z-1,\\ 0,\\ -y)$",c:true},{x:"$(3z-1,\\ 2z,\\ -y)$"},{x:"$(1-3z,\\ 0,\\ y)$"}],
        hint:"Rotore come determinante formale. La componente $j$ e' $\\partial_z F_1-\\partial_x F_3=2z-2z=0$.",
        sol:"$\\operatorname{rot}F=(\\partial_yF_3-\\partial_zF_2,\\ \\partial_zF_1-\\partial_xF_3,\\ \\partial_xF_2-\\partial_yF_1)=(3z-1,\\ 2z-2z,\\ y-2y)=(3z-1,0,-y)$.",
        cont:"Stokes" },
      { t:"Calcola la circuitazione di $F$ lungo $\\partial\\Sigma$ orientato in modo compatibile con $\\Sigma$ orientata dalla normale a terza componente NEGATIVA.",
        opts:[{x:"$-90\\pi$",c:true},{x:"$90\\pi$"},{x:"$0$"}],
        hint:"Normale a terza componente negativa: usa il vettore $(f_x,f_y,-1)=(-2,-1,-1)$. Poi $\\iint_D x=\\iint_D y=0$ per simmetria, sopravvive solo il termine costante.",
        sol:"Teorema di Stokes: $\\oint_{+\\partial\\Sigma}F\\cdot T\\,ds=\\iint_\\Sigma\\operatorname{rot}F\\cdot n\\,d\\sigma$. Con normale a terza componente negativa $n\\,d\\sigma=(f_x,f_y,-1)\\,dx\\,dy=(-2,-1,-1)\\,dx\\,dy$. Allora $\\operatorname{rot}F\\cdot(-2,-1,-1)=-2(3z-1)+y=-6z+2+y$; con $z=-2x-y+2$ diventa $12x+7y-10$. Per simmetria del disco $\\iint_D x=\\iint_D y=0$, resta $-10\\,m_2(D)=-10\\cdot 9\\pi=-90\\pi$. (La stampa scrive il vettore di test come $(-2,-2,-1)$: refuso sulla comp. centrale, ininfluente perche' $\\operatorname{rot}F$ ha comp. centrale $0$.)" }
  ]},
  { pool:"superfici", src:"20240122 Es.4", steps:[
      { t:"$E=\\{(x,y,z):\\ 1+z^2\\le\\sqrt{x^2+y^2}\\le 3-z^2\\}$. Riconosci il solido e determina l'intervallo di $z$ ammesso.",
        opts:[{x:"solido di rotazione attorno a $z$, profilo $1+z^2\\le r\\le 3-z^2$, esiste per $z\\in[-1,1]$",c:true},{x:"solido di rotazione, esiste per ogni $z\\in\\mathbb{R}$"},{x:"non e' di rotazione, va integrato in cartesiane"}],
        hint:"Poni $r=\\sqrt{x^2+y^2}$: il profilo esiste solo dove $1+z^2\\le 3-z^2$.",
        sol:"E' un solido di rotazione attorno all'asse $z$: nel semipiano $(r,z)$ il profilo e' $\\{1+z^2\\le r\\le 3-z^2\\}$, non vuoto solo se $1+z^2\\le 3-z^2\\Rightarrow z^2\\le 1\\Rightarrow z\\in[-1,1]$.",
        cont:"volume" },
      { t:"Calcola il volume di $E$.",
        opts:[{x:"$\\dfrac{32}{3}\\pi$",c:true},{x:"$\\dfrac{16}{3}\\pi$"},{x:"$8\\pi$"}],
        hint:"$(3-z^2)^2-(1+z^2)^2=8-8z^2$; poi integra su $[-1,1]$.",
        sol:"Teorema di Guldino (Pappo): $V=2\\pi\\iint_{\\text{profilo}} r\\,dr\\,dz=\\pi\\int_{-1}^{1}\\big[(3-z^2)^2-(1+z^2)^2\\big]dz=\\pi\\int_{-1}^{1}(8-8z^2)\\,dz=8\\pi\\big[z-\\tfrac{z^3}{3}\\big]_{-1}^{1}=\\dfrac{32}{3}\\pi$.",
        cont:"flusso totale" },
      { t:"Calcola il flusso di $F=(0,0,z)$ uscente da tutta la frontiera di $E$.",
        opts:[{x:"$\\dfrac{32}{3}\\pi$",c:true},{x:"$0$"},{x:"$\\dfrac{32}{5}\\pi$"}],
        hint:"$\\operatorname{div}F=1$: il flusso uscente da una superficie chiusa eguaglia il volume racchiuso.",
        sol:"Teorema della divergenza (Gauss): $\\Phi_{\\partial E}=\\iiint_E\\operatorname{div}F\\,dV=\\iiint_E 1\\,dV=V=\\dfrac{32}{3}\\pi$.",
        cont:"parametrizzazione" },
      { t:"Parametrizza le due superfici di rotazione $\\Sigma_1,\\Sigma_2$ che delimitano $E$ ($\\gamma_1=1+z^2$, $\\gamma_2=3-z^2$).",
        opts:[{x:"$X_i(\\theta,z)=(\\gamma_i(z)\\cos\\theta,\\ \\gamma_i(z)\\sin\\theta,\\ z)$, $\\theta\\in[0,2\\pi]$, $z\\in[-1,1]$",c:true},{x:"$X_i(\\theta,z)=(\\gamma_i(z)\\cos\\theta,\\ \\gamma_i(z)\\sin\\theta,\\ \\gamma_i(z))$"},{x:"$X_i(\\theta,z)=(\\cos\\theta,\\ \\sin\\theta,\\ z)$"}],
        hint:"Rotazione attorno a $z$ del profilo $r=\\gamma_i(z)$: la $z$ resta il parametro, non la funzione.",
        sol:"Superficie di rotazione: $X_i(\\theta,z)=(\\gamma_i(z)\\cos\\theta,\\,\\gamma_i(z)\\sin\\theta,\\,z)$ con $\\gamma_1(z)=1+z^2$, $\\gamma_2(z)=3-z^2$, $\\theta\\in[0,2\\pi]$, $z\\in[-1,1]$.",
        cont:"vettore normale" },
      { t:"Calcola $X_\\theta\\times X_z$ per la parametrizzazione precedente (scrivi $\\gamma,\\gamma'$).",
        opts:[{x:"$(\\gamma\\cos\\theta,\\ \\gamma\\sin\\theta,\\ -\\gamma\\gamma')$",c:true},{x:"$(\\gamma\\cos\\theta,\\ \\gamma\\sin\\theta,\\ \\gamma\\gamma')$"},{x:"$(-\\gamma\\sin\\theta,\\ \\gamma\\cos\\theta,\\ 0)$"}],
        hint:"$X_\\theta=(-\\gamma\\sin\\theta,\\gamma\\cos\\theta,0)$, $X_z=(\\gamma'\\cos\\theta,\\gamma'\\sin\\theta,1)$; attenzione al segno della terza componente.",
        sol:"$X_\\theta\\times X_z=(-\\gamma\\sin\\theta,\\gamma\\cos\\theta,0)\\times(\\gamma'\\cos\\theta,\\gamma'\\sin\\theta,1)=(\\gamma\\cos\\theta,\\ \\gamma\\sin\\theta,\\ -\\gamma\\gamma')$.",
        cont:"flussi Sigma_i" },
      { t:"Calcola il flusso di $F=(0,0,z)$ uscente attraverso $\\Sigma_1$ e $\\Sigma_2$.",
        opts:[{x:"$\\Phi(\\Sigma_2)=\\dfrac{32}{5}\\pi,\\quad\\Phi(\\Sigma_1)=\\dfrac{64}{15}\\pi$",c:true},{x:"$\\Phi(\\Sigma_2)=\\dfrac{32}{3}\\pi,\\quad\\Phi(\\Sigma_1)=0$"},{x:"$\\Phi(\\Sigma_1)=\\Phi(\\Sigma_2)=\\dfrac{16}{3}\\pi$"}],
        hint:"Per $\\Sigma_2$ ($\\gamma_2=3-z^2$, $\\gamma_2'=-2z$) il vettore $X_\\theta\\times X_z$ punta all'esterno; poi $\\Phi(\\Sigma_1)=\\Phi(\\partial E)-\\Phi(\\Sigma_2)$.",
        sol:"$F\\cdot(X_\\theta\\times X_z)=-z\\gamma\\gamma'$. Per $i=2$: $-z(3-z^2)(-2z)=2z^2(3-z^2)$, e $\\Phi(\\Sigma_2)=\\int_0^{2\\pi}\\!\\!\\int_{-1}^{1}2z^2(3-z^2)\\,dz\\,d\\theta=\\dfrac{32}{5}\\pi$. Per additivita' del flusso su una frontiera chiusa: $\\Phi(\\Sigma_1)=\\Phi(\\partial E)-\\Phi(\\Sigma_2)=\\dfrac{32}{3}\\pi-\\dfrac{32}{5}\\pi=\\dfrac{64}{15}\\pi$." }
  ]},
  { pool:"superfici", src:"20230210 Es.4", steps:[
      { t:"$E=\\{x^2+y^2+z^2\\le 25,\\ x^2+y^2\\le 9\\}$. Calcola il volume di $E$.",
        opts:[{x:"$\\dfrac{244}{3}\\pi$",c:true},{x:"$\\dfrac{250}{3}\\pi$"},{x:"$36\\pi$"}],
        hint:"Dominio normale su $D=\\{x^2+y^2\\le 9\\}$: $-\\sqrt{25-x^2-y^2}\\le z\\le\\sqrt{25-x^2-y^2}$; integra in coordinate polari.",
        sol:"$V=\\iint_D 2\\sqrt{25-x^2-y^2}\\,dx\\,dy=\\int_0^{2\\pi}\\!\\!\\int_0^3 2\\sqrt{25-\\rho^2}\\,\\rho\\,d\\rho\\,d\\theta=2\\pi\\big[-\\tfrac{2}{3}(25-\\rho^2)^{3/2}\\big]_0^3=\\dfrac{244}{3}\\pi$.",
        cont:"tre superfici" },
      { t:"Parametrizza le tre superfici che compongono $\\partial E$.",
        opts:[{x:"$\\Sigma_{1,2}:\\ z=\\pm\\sqrt{25-x^2-y^2}$ su $D$; $\\Sigma_3:\\ (3\\cos\\theta,3\\sin\\theta,t)$, $t\\in[-4,4]$",c:true},{x:"$\\Sigma_{1,2}$ come detto; $\\Sigma_3:\\ (3\\cos\\theta,3\\sin\\theta,t)$, $t\\in[-5,5]$"},{x:"solo due superfici: le due calotte sferiche"}],
        hint:"Il cilindro $x^2+y^2=9$ interseca la sfera dove $z^2=25-9=16$, cioe' $z=\\pm4$: e' li' il taglio in $t$.",
        sol:"Le due calotte sferiche $\\Sigma_1:\\ z=\\sqrt{25-x^2-y^2}$ e $\\Sigma_2:\\ z=-\\sqrt{25-x^2-y^2}$ (cartesiane su $D=\\{x^2+y^2\\le 9\\}$, regolari), e il mantello cilindrico $\\Sigma_3:\\ r_3(\\theta,t)=(3\\cos\\theta,3\\sin\\theta,t)$, $\\theta\\in[0,2\\pi]$, $t\\in[-4,4]$.",
        cont:"bordi" },
      { t:"Individua i bordi delle tre superfici.",
        opts:[{x:"$\\partial\\Sigma_1=\\{x^2+y^2=9,z=4\\}$, $\\partial\\Sigma_2=\\{x^2+y^2=9,z=-4\\}$, $\\partial\\Sigma_3=\\partial\\Sigma_1\\cup\\partial\\Sigma_2$",c:true},{x:"tutte e tre hanno bordo vuoto (sono chiuse)"},{x:"$\\partial\\Sigma_3$ e' un solo cerchio"}],
        hint:"Le calotte hanno per bordo il cerchio di raccordo col cilindro; il cilindro e' aperto sopra e sotto.",
        sol:"$\\partial\\Sigma_1$ e $\\partial\\Sigma_2$ sono i due cerchi $\\{x^2+y^2=9,\\ z=\\pm4\\}$; il mantello $\\Sigma_3$ ha per bordo entrambi: $\\partial\\Sigma_3=\\partial\\Sigma_1\\cup\\partial\\Sigma_2$.",
        cont:"flusso calotta" },
      { t:"Con $F=(x,y,z)$, calcola il flusso uscente attraverso la calotta superiore $\\Sigma_1$.",
        opts:[{x:"$50\\pi$",c:true},{x:"$25\\pi$"},{x:"$\\dfrac{244}{3}\\pi$"}],
        hint:"$(r_1)_x\\times(r_1)_y=(-f_x,-f_y,1)$; nel prodotto $F\\cdot$ i termini $x^2,y^2$ e $z^2=25-x^2-y^2$ si combinano in $25$.",
        sol:"$(r_1)_x\\times(r_1)_y=\\big(\\tfrac{x}{\\sqrt{25-x^2-y^2}},\\tfrac{y}{\\sqrt{25-x^2-y^2}},1\\big)$ (terza comp. positiva = uscente). $F\\cdot(\\cdot)=\\tfrac{x^2+y^2}{\\sqrt{25-x^2-y^2}}+z=\\tfrac{25}{\\sqrt{25-x^2-y^2}}$; quindi $\\Phi(\\Sigma_1)=\\int_0^{2\\pi}\\!\\!\\int_0^3\\tfrac{25\\,\\rho}{\\sqrt{25-\\rho^2}}\\,d\\rho\\,d\\theta=50\\pi$. Per simmetria $\\Phi(\\Sigma_2)=50\\pi$.",
        cont:"flusso mantello" },
      { t:"Calcola il flusso uscente attraverso il mantello $\\Sigma_3$ nel modo piu' rapido.",
        opts:[{x:"$144\\pi$, via $\\Phi(\\Sigma_3)=3V-\\Phi(\\Sigma_1)-\\Phi(\\Sigma_2)$",c:true},{x:"$100\\pi$"},{x:"$\\dfrac{244}{3}\\pi$"}],
        hint:"$\\operatorname{div}F=3$: il flusso totale uscente e' $3V$; sottrai i due flussi gia' noti delle calotte.",
        sol:"Teorema della divergenza: $\\Phi(\\partial E)=\\iiint_E 3\\,dV=3V=244\\pi$. Quindi $\\Phi(\\Sigma_3)=244\\pi-\\Phi(\\Sigma_1)-\\Phi(\\Sigma_2)=244\\pi-100\\pi=144\\pi$.",
        cont:"verifica diretta" },
      { t:"Verifica $\\Phi(\\Sigma_3)$ con il calcolo diretto sul cilindro.",
        opts:[{x:"$(r_3)_\\theta\\times(r_3)_t=(3\\cos\\theta,3\\sin\\theta,0)$, $F\\cdot=9$, $\\ \\Phi=144\\pi$",c:true},{x:"$F\\cdot=t^2$, $\\ \\Phi=0$"},{x:"$F\\cdot=3$, $\\ \\Phi=48\\pi$"}],
        hint:"Sul cilindro $F=(3\\cos\\theta,3\\sin\\theta,t)$ e la normale radiale uscente e' $(\\cos\\theta,\\sin\\theta,0)$: il prodotto e' costante in $t$.",
        sol:"$(r_3)_\\theta\\times(r_3)_t=(-3\\sin\\theta,3\\cos\\theta,0)\\times(0,0,1)=(3\\cos\\theta,3\\sin\\theta,0)$ (uscente). $F\\cdot(\\cdot)=9\\cos^2\\theta+9\\sin^2\\theta=9$, e $\\Phi(\\Sigma_3)=\\int_0^{2\\pi}\\!\\!\\int_{-4}^{4}9\\,dt\\,d\\theta=9\\cdot 8\\cdot 2\\pi=144\\pi$: conferma il risultato di Gauss." }
  ]},
  { pool:"superfici", src:"Esame 27.06.2025 Es.5", steps:[
      { t:"$\\gamma:\\ x=1+t^2,\\ z=t,\\ t\\in[1,2]$. E' semplice e regolare?",
        opts:[{x:"si': e' cartesiana $x=f(z)=1+z^2$ con $f\\in C^1([1,2])$ e $z'(t)=1\\ne0$",c:true},{x:"no: si autointerseca"},{x:"no: $x'(t)=0$ in $t=1$"}],
        hint:"Curva cartesiana rispetto a $z$: la terza coordinata $z=t$ e' iniettiva, quindi semplice.",
        sol:"E' una curva cartesiana $x=f(z)=1+z^2$ con $f\\in C^1$; $z(t)=t$ iniettiva $\\Rightarrow$ semplice, $z'(t)=1\\ne0$ $\\Rightarrow$ regolare.",
        cont:"superficie" },
      { t:"Scrivi la parametrizzazione della superficie $\\Sigma$ ottenuta ruotando $\\gamma$ di $2\\pi$ attorno all'asse $z$.",
        opts:[{x:"$X(\\theta,t)=((1+t^2)\\cos\\theta,\\ (1+t^2)\\sin\\theta,\\ t)$, $\\theta\\in[0,2\\pi]$, $t\\in[1,2]$",c:true},{x:"$X(\\theta,t)=(\\cos\\theta,\\ \\sin\\theta,\\ 1+t^2)$"},{x:"$X(\\theta,t)=((1+t^2)\\cos\\theta,\\ (1+t^2)\\sin\\theta,\\ 1+t^2)$"}],
        hint:"Il raggio a quota $z=t$ e' $r=1+t^2$; la quota resta il parametro $t$.",
        sol:"Superficie di rotazione: $X(\\theta,t)=((1+t^2)\\cos\\theta,\\,(1+t^2)\\sin\\theta,\\,t)$, $\\theta\\in[0,2\\pi]$, $t\\in[1,2]$.",
        cont:"divergenza" },
      { t:"Sia $E$ il solido delimitato da $\\Sigma$ e dai piani $z=1$, $z=2$, e $F=\\big(\\tfrac{2x}{1+z^2},\\ \\sin(xz)+20,\\ e^x+y^3\\big)$. Calcola $\\operatorname{div}F$.",
        opts:[{x:"$\\dfrac{2}{1+z^2}$",c:true},{x:"$\\dfrac{2}{1+z^2}+3y^2$"},{x:"$0$"}],
        hint:"Solo $F_1$ dipende da $x$; $\\partial_yF_2$ e $\\partial_zF_3$ sono derivate rispetto a variabili che non compaiono in quelle componenti.",
        sol:"$\\operatorname{div}F=\\partial_x\\!\\big(\\tfrac{2x}{1+z^2}\\big)+\\partial_y(\\sin(xz)+20)+\\partial_z(e^x+y^3)=\\dfrac{2}{1+z^2}+0+0$.",
        cont:"strati" },
      { t:"A quota $z$ fissata, qual e' la sezione $E_z$ del solido?",
        opts:[{x:"disco $\\sqrt{x^2+y^2}\\le 1+z^2$, di area $\\pi(1+z^2)^2$",c:true},{x:"disco di raggio $1$, area $\\pi$"},{x:"corona $1\\le\\rho\\le 1+z^2$"}],
        hint:"Il bordo di $\\Sigma$ a quota $z$ e' a $r=1+z^2$: la sezione e' il disco pieno fino a quel raggio.",
        sol:"A quota $z\\in[1,2]$ la superficie e' a raggio $r=1+z^2$, quindi $E_z=\\{\\sqrt{x^2+y^2}\\le 1+z^2\\}$, disco di area $\\pi(1+z^2)^2$.",
        cont:"flusso" },
      { t:"Calcola il flusso uscente di $F$ da $E$.",
        opts:[{x:"$\\dfrac{20}{3}\\pi$",c:true},{x:"$\\dfrac{10}{3}\\pi$"},{x:"$20\\pi$"}],
        hint:"Integrazione per strati: $\\iiint_E\\tfrac{2}{1+z^2}\\,dV=\\int_1^2\\tfrac{2}{1+z^2}\\cdot\\pi(1+z^2)^2\\,dz$; il fattore $1+z^2$ si semplifica.",
        sol:"Teorema della divergenza + integrazione per strati: $\\Phi=\\iiint_E\\tfrac{2}{1+z^2}\\,dV=\\int_1^2\\tfrac{2}{1+z^2}\\,\\pi(1+z^2)^2\\,dz=2\\pi\\int_1^2(1+z^2)\\,dz=2\\pi\\big[z+\\tfrac{z^3}{3}\\big]_1^2=2\\pi\\cdot\\tfrac{10}{3}=\\dfrac{20}{3}\\pi$." }
  ]},
  { pool:"superfici", src:"variante · da MIT 18.02SC · manuale", steps:[
      { t:"$\\Sigma$ e' la parte di sfera $x^2+y^2+z^2=4$ con $z\\ge0$ che si proietta su $D=\\{x^2+y^2\\le 3\\}$. Scrivi $F$ e $\\nabla F$ per trattarla come superficie di livello.",
        opts:[{x:"$F=x^2+y^2+z^2-4$, $\\ \\nabla F=(2x,2y,2z)$",c:true},{x:"$F=\\sqrt{x^2+y^2+z^2}-2$, $\\ \\nabla F=(x,y,z)$"},{x:"$F=x^2+y^2+z^2$, $\\ \\nabla F=(x,y,z)$"}],
        hint:"Scegli $F$ che si annulla su $\\Sigma$; $\\nabla F$ e' normale (non tangente) alla superficie di livello.",
        sol:"$\\Sigma=\\{F=0\\}$ con $F=x^2+y^2+z^2-4$; $\\nabla F=(2x,2y,2z)$ e' normale a ogni superficie di livello di $F$.",
        cont:"formula implicita" },
      { t:"Per $\\Sigma:\\ F(x,y,z)=0$ proiettata sul piano $xy$, quale formula da' l'elemento d'area?",
        opts:[{x:"$dS=\\dfrac{\\|\\nabla F\\|}{|F_z|}\\,dA$",c:true},{x:"$dS=\\|\\nabla F\\|\\,dA$"},{x:"$dS=\\dfrac{|F_z|}{\\|\\nabla F\\|}\\,dA$"}],
        hint:"Deriva dal Dini: da $F=0$ si esplicita $z=g(x,y)$ con $g_x=-F_x/F_z$, e $\\sqrt{1+g_x^2+g_y^2}$ si riscrive con $\\nabla F$.",
        sol:"Teorema di Dini + area cartesiana: esplicitando $z=g(x,y)$ si ha $g_x=-F_x/F_z,\\ g_y=-F_y/F_z$, quindi $\\sqrt{1+g_x^2+g_y^2}=\\dfrac{\\sqrt{F_x^2+F_y^2+F_z^2}}{|F_z|}=\\dfrac{\\|\\nabla F\\|}{|F_z|}$: e' l'elemento d'area senza parametrizzazione esplicita.",
        cont:"calcolo dS" },
      { t:"Calcola $dS$ per la nostra sfera $R=2$.",
        opts:[{x:"$dS=\\dfrac{2}{\\sqrt{4-x^2-y^2}}\\,dA$",c:true},{x:"$dS=\\dfrac{4}{z}\\,dA$"},{x:"$dS=\\sqrt{4-x^2-y^2}\\,dA$"}],
        hint:"Sulla sfera $\\|\\nabla F\\|=2\\sqrt{x^2+y^2+z^2}=2R=4$; $|F_z|=|2z|=2z$ con $z=\\sqrt{4-x^2-y^2}$.",
        sol:"$\\|\\nabla F\\|=2\\sqrt{x^2+y^2+z^2}=2\\cdot2=4$ sulla sfera; $|F_z|=2z=2\\sqrt{4-x^2-y^2}$. Quindi $dS=\\dfrac{4}{2\\sqrt{4-x^2-y^2}}\\,dA=\\dfrac{2}{\\sqrt{4-x^2-y^2}}\\,dA$.",
        cont:"integrale" },
      { t:"Imposta l'integrale per l'area di $\\Sigma$ su $D=\\{x^2+y^2\\le 3\\}$.",
        opts:[{x:"$\\displaystyle\\int_0^{2\\pi}\\!\\!\\int_0^{\\sqrt3}\\frac{2\\rho}{\\sqrt{4-\\rho^2}}\\,d\\rho\\,d\\theta$",c:true},{x:"$\\displaystyle\\int_0^{2\\pi}\\!\\!\\int_0^{2}\\frac{2\\rho}{\\sqrt{4-\\rho^2}}\\,d\\rho\\,d\\theta$"},{x:"$\\displaystyle\\int_0^{2\\pi}\\!\\!\\int_0^{\\sqrt3}2\\rho\\sqrt{4-\\rho^2}\\,d\\rho\\,d\\theta$"}],
        hint:"$D$ ha raggio $\\sqrt3$ (proiezione richiesta): NON il raggio $2$ dell'equatore. In polari $dA=\\rho\\,d\\rho\\,d\\theta$.",
        sol:"$A=\\iint_D dS=\\int_0^{2\\pi}\\!\\!\\int_0^{\\sqrt3}\\dfrac{2\\rho}{\\sqrt{4-\\rho^2}}\\,d\\rho\\,d\\theta$: raggio $\\sqrt3$ perche' la proiezione richiesta e' $D=\\{x^2+y^2\\le3\\}$.",
        cont:"area" },
      { t:"Calcola l'area e verificala con la formula della calotta.",
        opts:[{x:"$A=4\\pi$, e $2\\pi R h=2\\pi\\cdot2\\cdot1=4\\pi$",c:true},{x:"$A=2\\pi$, e $2\\pi R h=2\\pi$"},{x:"$A=4\\pi(2-\\sqrt3)$"}],
        hint:"Primitiva di $\\rho/\\sqrt{4-\\rho^2}$ e' $-\\sqrt{4-\\rho^2}$. La calotta va da $z=1$ (a $\\rho=\\sqrt3$) a $z=2$: altezza $h=1$.",
        sol:"$A=2\\pi\\cdot 2\\big[-\\sqrt{4-\\rho^2}\\big]_0^{\\sqrt3}=4\\pi\\big(-1-(-2)\\big)=4\\pi$. Verifica con l'area della calotta sferica $2\\pi R h$: qui $h=2-1=1$, $2\\pi\\cdot2\\cdot1=4\\pi$. Coincidono." }
  ]},
  { pool:"superfici", src:"variante · da LibreTexts · manuale", steps:[
      { t:"Su una sfera di raggio $R$, qual e' l'elemento d'area in coordinate sferiche?",
        opts:[{x:"$dS=R^2\\sin\\phi\\,d\\phi\\,d\\theta$",c:true},{x:"$dS=R^2\\,d\\phi\\,d\\theta$"},{x:"$dS=R\\sin\\phi\\,d\\phi\\,d\\theta$"}],
        hint:"$\\|X_\\phi\\times X_\\theta\\|=R^2\\sin\\phi$ ($\\phi$ = angolo polare dal polo nord).",
        sol:"Con $X(\\phi,\\theta)=(R\\sin\\phi\\cos\\theta,R\\sin\\phi\\sin\\theta,R\\cos\\phi)$ si ha $\\|X_\\phi\\times X_\\theta\\|=R^2\\sin\\phi$, quindi $dS=R^2\\sin\\phi\\,d\\phi\\,d\\theta$.",
        cont:"area calotta" },
      { t:"Calcola l'area della calotta $x^2+y^2+z^2=9$ con apertura polare $\\phi\\in[0,\\pi/3]$.",
        opts:[{x:"$9\\pi$",c:true},{x:"$18\\pi$"},{x:"$\\tfrac{9}{2}\\pi$"}],
        hint:"$\\int_0^{\\pi/3}\\sin\\phi\\,d\\phi=1-\\cos(\\pi/3)=1-\\tfrac12=\\tfrac12$; poi $\\times 2\\pi\\times R^2$.",
        sol:"$A=R^2\\int_0^{2\\pi}\\!\\!\\int_0^{\\pi/3}\\sin\\phi\\,d\\phi\\,d\\theta=9\\cdot 2\\pi\\cdot\\tfrac12=9\\pi$. Verifica: $2\\pi R h$ con $h=R(1-\\cos\\tfrac{\\pi}{3})=3\\cdot\\tfrac12=\\tfrac32$, $2\\pi\\cdot3\\cdot\\tfrac32=9\\pi$." }
  ]},
  { pool:"superfici", src:"variante · da MIT 18.02SC · manuale", steps:[
      { t:"Due superfici $\\Sigma_1,\\Sigma_2$ hanno lo STESSO bordo orientato. Per quale campo $F$ il flusso e' uguale attraverso entrambe?",
        opts:[{x:"se $\\operatorname{div}F=0$ (campo solenoidale)",c:true},{x:"sempre, per qualunque $F$"},{x:"se $\\operatorname{rot}F=0$"}],
        hint:"Unisci $\\Sigma_1$ con $\\Sigma_2$ orientata all'incontrario: ottieni una superficie chiusa. Cosa dice Gauss sul solido racchiuso?",
        sol:"Se $\\operatorname{div}F=0$: $\\Sigma_1\\cup(-\\Sigma_2)$ e' una superficie chiusa e per il Teorema della divergenza il flusso uscente totale e' $\\iiint\\operatorname{div}F\\,dV=0$, da cui $\\Phi(\\Sigma_1)=\\Phi(\\Sigma_2)$. E' l'analogo, per il flusso, del fatto che in Stokes conta solo il bordo." }
  ]},
  { pool:"superfici", src:"modus operandi · manuale", steps:[
      { t:"Devi calcolare il flusso di $F$ attraverso una singola superficie di rotazione $\\Sigma$ (aperta), con $\\operatorname{div}F$ semplice. Qual e' la strategia piu' efficiente?",
        opts:[{x:"tappare $\\Sigma$ con superfici note, applicare Gauss al solido chiuso, poi sottrarre i flussi delle tappe",c:true},{x:"sempre l'integrale diretto $\\iint_\\Sigma F\\cdot n\\,dS$"},{x:"applicare Stokes al bordo"}],
        hint:"Sulle rotazioni $X_\\theta\\times X_z$ e' spesso pesante; se $\\operatorname{div}F$ e' semplice conviene chiudere e usare il volume.",
        sol:"Modus operandi: se $\\Sigma$ e' aperta e $\\operatorname{div}F$ e' semplice, la si chiude con superfici note (dischi, piani), si applica il Teorema della divergenza al solido, e $\\Phi(\\Sigma)=\\Phi_{\\text{tot}}-\\Phi_{\\text{tappe}}$. Il calcolo diretto resta corretto ma conviene solo quando $X_u\\times X_v$ e $F$ si semplificano (come nel mantello cilindrico)." }
  ]}
];

Q.integrali = [

  /* ===================== MODUS + CONCETTUALI DI BASE (Jordan, ML, semicerchio) ===================== */

  { pool:"integrali", src:"nucleo 13 &middot; b01", steps:[{
      t:"MODUS OPERANDI. Davanti a un integrale reale da calcolare per residui, il PRIMO passo &egrave; scegliere il contorno. Il criterio corretto e':",
      opts:[
        {x:"guardare la FORMA dell'integrando: razionale su $\\mathbb{R}$ &rarr; semicerchio; razionale in $\\cos,\\sin$ su $[0,2\\pi]$ &rarr; $z=e^{i\\theta}$ sul cerchio unitario; fattore $e^{ikx}$ &rarr; semicerchio + lemma di Jordan; potenza non intera o $\\log$ &rarr; keyhole; periodicit&agrave; in $e^x$ con infiniti poli allineati &rarr; rettangolo",c:true},
        {x:"usare sempre la semicirconferenza superiore, cambia solo il numero di residui"},
        {x:"scegliere il contorno che racchiude piu' poli, per massimizzare i residui"},
        {x:"provare un contorno a caso e verificare a posteriori se l'arco svanisce"}],
      hint:"Il contorno non si indovina: lo detta la forma dell'integrando. Ogni ingrediente (dominio, presenza di $e^{ikx}$, di una radice, di una periodicit&agrave;) seleziona una geometria precisa.",
      sol:"<b>Classificazione dei sottotipi (nucleo 13, tappa 03).</b> I quattro (+1) contorni canonici: (a) razionale su tutta la retta &rarr; semicerchio con stima ML; (b) razionale in $\\cos,\\sin$ &rarr; sostituzione $z=e^{i\\theta}$; (c) con $e^{ikx}$ &rarr; semicerchio + lemma di Jordan (semipiano scelto dal segno di $k$); (d) con taglio ($x^\\alpha,\\log,\\sqrt{\\cdot}$) &rarr; keyhole/settore; (e) periodicit&agrave; iperbolica ($e^x+e^{-x}$, infiniti poli) &rarr; rettangolo. La scelta E' l'esercizio: sbagliarla rende l'arco non-svanescente e il conto privo di senso."
    }]
  },

  { pool:"integrali", src:"nucleo 13", steps:[{
      t:"Il lemma di Jordan afferma che, se $f(z)\\to0$ uniformemente sull'arco per $|z|\\to\\infty$, allora per $k>0$:",
      opts:[
        {x:"$\\int_{C_R^{+}}f(z)e^{ikz}\\,dz\\to0$ sull'arco nel semipiano SUPERIORE, perche' $|e^{ikz}|=e^{-k\\,\\mathrm{Im}\\,z}$ e' esponenzialmente piccolo dove $\\mathrm{Im}\\,z>0$",c:true},
        {x:"$\\int_{C_R^{+}}f\\,dz\\to0$ senza bisogno del fattore $e^{ikz}$, per qualunque $f$ limitata"},
        {x:"l'arco svanisce solo se $|f|\\le M/R^2$, come per le razionali pure"},
        {x:"il fattore $e^{ikz}$ non influisce sul comportamento dell'arco"}],
      hint:"La forza di Jordan sta nel fattore oscillante $e^{ikz}$: nel semipiano giusto esso decade come esponenziale, e questo permette una condizione su $f$ piu' DEBOLE ($|f|\\to0$) di quella richiesta dal semplice ML.",
      sol:"<b>Lemma di Jordan (nucleo 13, sottotipo c).</b> Con $|e^{ikz}|=e^{-k\\,\\mathrm{Im}\\,z}$, per $k>0$ il fattore schiaccia l'arco superiore anche se $f$ cala solo come $1/R^{\\alpha}$, $\\alpha>0$. E' questa condizione indebolita a distinguere Jordan dalla stima ML pura (che richiede $|f|\\sim1/R^2$)."
    }]
  },

  { pool:"integrali", src:"nucleo 13 (sottotipo a)", steps:[{
      t:"Per $\\int_{-\\infty}^{+\\infty}\\frac{P(x)}{Q(x)}\\,dx$ con $Q$ senza zeri reali, l'arco $C_R$ della semicirconferenza svanisce quando:",
      opts:[
        {x:"$\\deg Q\\ge\\deg P+2$: allora $\\left|\\int_{C_R}\\right|\\le\\pi R\\cdot\\max_{C_R}\\left|\\tfrac PQ\\right|\\sim\\pi R\\cdot\\tfrac{C}{R^2}\\to0$",c:true},
        {x:"$\\deg Q\\ge\\deg P+1$ e' gia' sufficiente"},
        {x:"sempre, indipendentemente dai gradi"},
        {x:"solo se $Q$ ha grado pari"}],
      hint:"La stima ML da' lunghezza $\\times$ massimo $=\\pi R\\cdot\\max_{C_R}|P/Q|$. Perche' tenda a zero serve che $|P/Q|$ cali almeno come $1/R^2$.",
      sol:"<b>Stima ML / lemma del cerchio grande (nucleo 13).</b> $\\left|\\int_\\gamma f\\right|\\le L(\\gamma)\\cdot\\max_\\gamma|f|$. Sull'arco $L=\\pi R$; per una razionale $|P/Q|\\sim R^{\\deg P-\\deg Q}$, quindi il prodotto tende a $0$ se e solo se $\\deg Q-\\deg P\\ge2$. Con $\\deg Q=\\deg P+1$ il semicerchio nudo NON basta (e infatti l'integrale reale divergerebbe): serve il fattore $e^{ikx}$ e Jordan."
    }]
  },

  { pool:"integrali", src:"nucleo 13 &middot; 20240618 Es.2", steps:[{
      t:"Perche' $\\int\\frac{x\\sin x}{x^2+4}\\,dx$ (con $\\deg Q=\\deg P+1$) si calcola col semicerchio, mentre $\\int\\frac{x}{x^2+4}\\,dx$ (stessi gradi) no?",
      opts:[
        {x:"perche' il primo porta il fattore $e^{ix}$ e cade sotto il lemma di JORDAN (condizione $|f|\\to0$, piu' debole); il secondo e' razionale pura e richiede $\\deg Q\\ge\\deg P+2$, qui violata (infatti $\\int x/(x^2+4)\\,dx$ diverge)",c:true},
        {x:"perche' il seno rende l'integrando limitato e quindi convergente"},
        {x:"perche' il secondo ha un polo reale"},
        {x:"non c'e' differenza: entrambi si calcolano allo stesso modo"}],
      hint:"Confronta le due condizioni di svanimento dell'arco: ML pura chiede $1/R^2$, Jordan basta $1/R$ grazie all'esponenziale. Il fattore $e^{ikx}$ e' cio' che salva il caso $\\deg Q=\\deg P+1$.",
      sol:"<b>Jordan contro ML (nucleo 13).</b> $\\frac{z}{z^2+4}\\sim1/R\\to0$: sufficiente per Jordan (che sfrutta $e^{iz}$) ma NON per la stima ML nuda. Perci&ograve; $\\int\\frac{x\\sin x}{x^2+4}dx=\\pi/e^{2}$ esiste e si calcola, mentre $\\int\\frac{x}{x^2+4}dx$ diverge (solo il valore principale, nullo per disparit&agrave;, ha senso)."
    }]
  },

  { pool:"integrali", src:"nucleo 13 &middot; b01 (trappola)", steps:[{
      t:"TRAPPOLA. Per $\\int_{-\\infty}^{+\\infty}f(x)e^{ikx}\\,dx$ la scelta del semipiano di chiusura e':",
      opts:[
        {x:"$k>0$ &rarr; si chiude SOPRA (residui con $\\mathrm{Im}\\,z_j>0$); $k<0$ &rarr; si chiude SOTTO, e il verso orario introduce un segno: $-2\\pi i\\sum_{\\mathrm{Im}\\,z_j<0}\\mathrm{Res}$",c:true},
        {x:"sempre sopra, il segno di $k$ non conta"},
        {x:"$k>0$ sotto, $k<0$ sopra"},
        {x:"si sceglie il semipiano con piu' poli"}],
      hint:"$|e^{ikz}|=e^{-k\\,\\mathrm{Im}\\,z}$: perche' l'arco svanisca serve $k\\,\\mathrm{Im}\\,z>0$. Il segno di $k$ determina il semipiano; sbagliarlo fa ESPLODERE l'arco.",
      sol:"<b>Lemma di Jordan + trappola censita (b01).</b> La regola: $k>0\\Rightarrow$ sopra, $k<0\\Rightarrow$ sotto (contorno orario, segno meno). E' l'errore piu' frequente dell'intero corso: chiudere dalla parte sbagliata non da' un risultato meno preciso, lo rende privo di giustificazione (l'arco non tende a zero) e sbagliato di segno/parte immaginaria."
    }]
  },

  { pool:"integrali", src:"nucleo 13", steps:[{
      t:"Per calcolare $\\int f(x)\\cos(kx)\\,dx$ conviene:",
      opts:[
        {x:"calcolare $\\int f(x)e^{ikx}\\,dx$ chiudendo in UN solo semipiano e prendere alla fine la parte reale; NON spezzare $\\cos kz=\\tfrac{e^{ikz}+e^{-ikz}}{2}$ dentro il contorno",c:true},
        {x:"spezzare $\\cos kz=\\tfrac{e^{ikz}+e^{-ikz}}{2}$ e integrare i due pezzi sullo stesso semicerchio"},
        {x:"usare direttamente $\\cos kz$ sul semicerchio superiore"},
        {x:"sostituire $z=e^{i\\theta}$"}],
      hint:"I due esponenziali $e^{ikz}$ e $e^{-ikz}$ vogliono semipiani OPPOSTI: sullo stesso arco uno dei due esplode sempre.",
      sol:"<b>Regola dell'esponenziale unico (nucleo 13, sottotipo c).</b> $\\cos kz$ e $\\sin kz$ contengono $e^{-ikz}$, che nel semipiano superiore diverge: non si sostituiscono nel contorno. Si lavora con $\\int f e^{ikz}$ in un solo semipiano e si estraggono Re (per $\\cos$) o Im (per $\\sin$) alla fine. Bonus: si ottengono i due integrali (con $\\cos$ e con $\\sin$) in un colpo solo."
    }]
  },

  { pool:"integrali", src:"nucleo 13 (esempio canonico)", steps:[
    { t:"$\\int_{-\\infty}^{+\\infty}\\frac{\\cos x}{x^2+1}\\,dx$: come si imposta?",
      opts:[
        {x:"si considera $\\int\\frac{e^{ix}}{x^2+1}\\,dx$ con $k=1>0$, si chiude SOPRA (unico polo $z=i$), e alla fine si prende la parte reale",c:true},
        {x:"si chiude sotto, perche' $\\cos x>0$"},
        {x:"si usa $\\cos z$ direttamente sul semicerchio superiore"},
        {x:"si sostituisce $z=e^{i\\theta}$ sul cerchio unitario"}],
      hint:"Passa a $e^{ix}$ ($k=1>0$ &rarr; sopra); il polo superiore e' $z=i$, quello inferiore $z=-i$ resta fuori.",
      sol:"<b>Impostazione (nucleo 13, sottotipo c).</b> $\\cos x=\\mathrm{Re}\\,e^{ix}$; con $k=1>0$ Jordan chiude nel semipiano superiore, dove sta il solo polo $z=i$ di $\\frac{e^{iz}}{z^2+1}$.",
      cont:"Ora il residuo in $z=i$ &rarr;" },
    { t:"Il residuo in $z=i$ di $\\frac{e^{iz}}{z^2+1}$ vale (formula del quoziente, $Q'=2z$):",
      opts:[
        {x:"$\\dfrac{e^{i\\cdot i}}{2i}=\\dfrac{e^{-1}}{2i}$",c:true},
        {x:"$\\dfrac{e^{-1}}{2}$"},
        {x:"$\\dfrac{e}{2i}$"},
        {x:"$\\dfrac{e^{-1}}{i}$"}],
      hint:"$\\mathrm{Res}=\\frac{P(i)}{Q'(i)}$ con $P=e^{iz}$, $Q'=2z$; e $e^{i\\cdot i}=e^{-1}$.",
      sol:"<b>Residuo di un polo semplice (formula $P/Q'$, nucleo 13).</b> $\\mathrm{Res}_{z=i}=\\frac{e^{iz}}{2z}\\big|_{i}=\\frac{e^{-1}}{2i}$.",
      cont:"Ora chiudi il conto &rarr;" },
    { t:"Quindi l'integrale vale:",
      opts:[
        {x:"$2\\pi i\\cdot\\dfrac{e^{-1}}{2i}=\\dfrac{\\pi}{e}$ (gia' reale)",c:true},
        {x:"$\\dfrac{2\\pi}{e}$"},
        {x:"$\\dfrac{\\pi}{2e}$"},
        {x:"$\\pi e$"}],
      hint:"$2\\pi i\\cdot\\frac{e^{-1}}{2i}=\\pi e^{-1}$; e' gia' reale, quindi coincide con la parte reale cercata.",
      sol:"<b>Teorema dei residui (nucleo 13).</b> $\\int_{-\\infty}^{+\\infty}\\frac{\\cos x}{x^2+1}dx=\\mathrm{Re}\\,\\big[2\\pi i\\,\\mathrm{Res}_{z=i}\\big]=\\pi/e$. Valore verificato (nucleo 13). La parte immaginaria nulla da' anche $\\int\\frac{\\sin x}{x^2+1}dx=0$, corretto perche' l'integrando e' dispari." }
  ]},

  { pool:"integrali", src:"20240618 Es.2", steps:[
    { t:"$\\int_{-\\infty}^{+\\infty}\\frac{x\\sin x}{x^2+1}\\,dx$ (appello 18/06/2024): si prolunga con $\\frac{z\\,e^{iz}}{z^2+1}$, $k=1>0$, chiusura superiore, polo $z=i$. Il residuo e':",
      opts:[
        {x:"$\\dfrac{z\\,e^{iz}}{2z}\\Big|_{z=i}=\\dfrac{e^{i\\cdot i}}{2}=\\dfrac{e^{-1}}{2}$",c:true},
        {x:"$\\dfrac{e^{-1}}{2i}$"},
        {x:"$\\dfrac{i\\,e^{-1}}{2}$"},
        {x:"$\\dfrac{e}{2}$"}],
      hint:"Formula del quoziente su $\\frac{z e^{iz}}{z^2+1}$: $\\mathrm{Res}=\\frac{z e^{iz}}{2z}\\big|_{i}$; il fattore $z$ si semplifica.",
      sol:"<b>Residuo (soluzione ufficiale 18/06/2024).</b> $\\mathrm{Res}_{z=i}\\!\\left[\\frac{z e^{iz}}{z^2+1}\\right]=\\frac{z e^{iz}}{2z}\\big|_{i}=\\frac{e^{-1}}{2}$: il fattore $z$ del numeratore cancella $2z$ del denominatore lasciando $\\frac{e^{iz}}{2}$.",
      cont:"Ora l'integrale e la sua meta' su $[0,\\infty)$ &rarr;" },
    { t:"Con $\\mathrm{Res}_{z=i}=\\frac{e^{-1}}{2}$, quanto valgono $I=\\int_{-\\infty}^{+\\infty}$ e $I_+=\\int_0^{+\\infty}$?",
      opts:[
        {x:"$\\int\\frac{x e^{ix}}{x^2+1}dx=2\\pi i\\cdot\\frac{e^{-1}}{2}=i\\pi e^{-1}$; parte immaginaria $I=\\frac{\\pi}{e}$; e $I_+=\\frac{\\pi}{2e}$ perche' l'integrando reale e' pari",c:true},
        {x:"$I=\\frac{\\pi}{e}$ e $I_+=\\frac{\\pi}{e}$ (uguali)"},
        {x:"$I=\\frac{2\\pi}{e}$ e $I_+=\\frac{\\pi}{e}$"},
        {x:"$I=\\frac{\\pi}{2e}$ e $I_+=\\frac{\\pi}{4e}$"}],
      hint:"Prendi la parte IMMAGINARIA di $i\\pi e^{-1}$ per avere $I$; poi $\\frac{x\\sin x}{x^2+1}$ e' pari, quindi $I_+=I/2$.",
      sol:"<b>Teorema dei residui + parita' (soluzione ufficiale: $I=\\pi/e$, $I_+=\\pi/(2e)$).</b> $I=\\mathrm{Im}(i\\pi e^{-1})=\\pi/e$; e poiche' $\\frac{x\\sin x}{x^2+1}$ e' pari (prodotto di due dispari), $\\int_0^\\infty=\\tfrac12\\int_{-\\infty}^{\\infty}=\\pi/(2e)$. La parita' si applica alla funzione REALE, non al prolungamento con $e^{iz}$." }
  ]},

  { pool:"integrali", src:"nucleo 13 (sottotipo a)", steps:[
    { t:"$\\int_{-\\infty}^{+\\infty}\\frac{dx}{1+x^4}$: quali poli entrano nel conto e come si semplifica il residuo?",
      opts:[
        {x:"i poli sono le radici quarte di $-1$: $e^{i\\pi/4},e^{i3\\pi/4},e^{i5\\pi/4},e^{i7\\pi/4}$; i due SUPERIORI ($e^{i\\pi/4},e^{i3\\pi/4}$) contano, e $\\mathrm{Res}(z_j)=\\frac{1}{4z_j^3}=-\\frac{z_j}{4}$ usando $z_j^4=-1$",c:true},
        {x:"tutti e quattro i poli contano, il semicerchio li racchiude tutti"},
        {x:"il polo e' solo $z=i$, di ordine $4$"},
        {x:"non ci sono poli, $1+x^4>0$ sempre"}],
      hint:"$\\deg Q=4\\ge\\deg P+2=2$: l'arco svanisce e contano solo i poli con $\\mathrm{Im}\\,z>0$. Trucco: $z_j^3=z_j^4/z_j=-1/z_j$, quindi $\\frac{1}{4z_j^3}=-\\frac{z_j}{4}$.",
      sol:"<b>Sottotipo (a), formula del quoziente (nucleo 13).</b> $Q'=4z^3$; con $z_j^4=-1$ si scrive $\\mathrm{Res}=\\frac{1}{4z_j^3}=\\frac{z_j}{4z_j^4}=-\\frac{z_j}{4}$. E' il trucco che rende immediati i casi $1/(1+x^n)$.",
      cont:"Ora somma i due residui superiori &rarr;" },
    { t:"Con $e^{i\\pi/4}+e^{i3\\pi/4}=i\\sqrt2$, quanto vale l'integrale?",
      opts:[
        {x:"$\\sum\\mathrm{Res}=-\\frac{i\\sqrt2}{4}$, quindi $I=2\\pi i\\left(-\\frac{i\\sqrt2}{4}\\right)=\\frac{\\pi}{\\sqrt2}$",c:true},
        {x:"$I=\\frac{\\pi\\sqrt2}{4}$"},
        {x:"$I=\\frac{\\pi}{2\\sqrt2}$"},
        {x:"$I=\\pi\\sqrt2$"}],
      hint:"$\\sum\\mathrm{Res}=-\\tfrac14(e^{i\\pi/4}+e^{i3\\pi/4})=-\\tfrac{i\\sqrt2}{4}$; poi $2\\pi i\\cdot(-\\tfrac{i\\sqrt2}{4})=\\tfrac{\\pi\\sqrt2}{2}$.",
      sol:"<b>Teorema dei residui (nucleo 13, valore verificato $\\pi/\\sqrt2$).</b> $I=2\\pi i(-\\tfrac{i\\sqrt2}{4})=\\tfrac{\\pi\\sqrt2}{2}=\\tfrac{\\pi}{\\sqrt2}$. Controllo di plausibilit&agrave;: reale e positivo, come deve essere per un integrando positivo." }
  ]},

  { pool:"integrali", src:"nucleo 13 (tappa 04)", steps:[{
      t:"Aggirando un polo semplice sull'asse reale con una rientranza semicircolare di raggio $\\varepsilon$, il contributo del cerchietto per $\\varepsilon\\to0$:",
      opts:[
        {x:"NON svanisce: vale $\\pm i\\pi\\,\\mathrm{Res}$ (meta' del giro completo), col segno dato dal verso di percorrenza",c:true},
        {x:"svanisce sempre, come il cerchio grande"},
        {x:"vale $2\\pi i\\,\\mathrm{Res}$, come un giro intero"},
        {x:"diverge"}],
      hint:"Vicino a un polo semplice $f\\approx\\frac{a_{-1}}{z-x_0}$; su un arco di ampiezza $\\theta$ l'integrale da' $i\\theta a_{-1}$, indipendente da $\\varepsilon$. Per il semicerchio $\\theta=\\pi$.",
      sol:"<b>Lemma del cerchio piccolo / regola del mezzo residuo (nucleo 13, tappa 04).</b> Su un arco di ampiezza angolare $\\theta$ attorno a un polo semplice, $\\int\\frac{a_{-1}}{z-x_0}\\,dz=i\\theta\\,a_{-1}$: per il semicerchio $\\theta=\\pi$, dunque $\\pm i\\pi\\,\\mathrm{Res}$ (segno dal verso). A differenza del cerchio GRANDE (che svanisce per ML), questo contributo e' finito e va sommato."
    }]
  },

  /* ===================== VALORE PRINCIPALE + TRIGONOMETRICI ===================== */

  { pool:"integrali", src:"nucleo 13 (tappa 04)", steps:[{
      t:"Con un polo semplice in $x_0\\in\\mathbb{R}$ SUL cammino, chiudendo sopra, il valore principale di Cauchy vale:",
      opts:[
        {x:"$\\mathrm{P}\\!\\!\\int_{-\\infty}^{+\\infty}f=2\\pi i\\!\\!\\sum_{\\mathrm{Im}\\,z_j>0}\\!\\!\\mathrm{Res}+\\pi i\\!\\!\\sum_{x_j\\in\\mathbb{R}}\\!\\!\\mathrm{Res}$",c:true},
        {x:"$2\\pi i\\!\\!\\sum_{\\mathrm{Im}\\,z_j>0}\\mathrm{Res}$ soltanto"},
        {x:"$2\\pi i\\sum_{\\text{tutti i poli}}\\mathrm{Res}$"},
        {x:"il valore principale non esiste se un polo sta sul cammino"}],
      hint:"Il polo reale contribuisce con MEZZO residuo ($\\pi i$, non $2\\pi i$), perche' la rientranza lo aggira di mezzo giro.",
      sol:"<b>Valore principale + mezzo residuo (nucleo 13, tappa 04).</b> $\\mathrm{P}\\!\\int$ elimina simmetricamente un intorno $\\varepsilon$ del polo; la rientranza semicircolare aggiunge $\\pi i\\,\\mathrm{Res}$ per ciascun polo reale semplice, mentre i poli interni danno il $2\\pi i$ pieno. Vale solo per poli SEMPLICI sull'asse."
    }]
  },

  { pool:"integrali", src:"nucleo 13", steps:[{
      t:"Perche' la rientranza semicircolare da' esattamente META' del residuo, e non un'altra frazione?",
      opts:[
        {x:"perche' su un arco di ampiezza angolare $\\theta$ attorno a un polo semplice $\\int\\frac{a_{-1}}{z-x_0}\\,dz=i\\theta\\,a_{-1}$, indipendente dal raggio; per il semicerchio $\\theta=\\pi$, quindi $i\\pi\\,a_{-1}$",c:true},
        {x:"per convenzione di normalizzazione"},
        {x:"perche' meta' del polo e' fisicamente dentro il contorno"},
        {x:"perche' il residuo si dimezza vicino all'asse reale"}],
      hint:"La frazione di residuo e' la frazione di angolo giro: $\\theta/(2\\pi)$ del $2\\pi i\\,\\mathrm{Res}$ completo.",
      sol:"<b>Frazione di angolo (nucleo 13).</b> Parametrizzando $z-x_0=\\varepsilon e^{i\\vartheta}$, $dz=i\\varepsilon e^{i\\vartheta}d\\vartheta$ e $\\int\\frac{a_{-1}}{z-x_0}dz=a_{-1}\\int i\\,d\\vartheta=i\\theta\\,a_{-1}$: il raggio $\\varepsilon$ scompare. Semicerchio $\\Rightarrow\\theta=\\pi\\Rightarrow i\\pi a_{-1}$. L'argomento usa solo il termine $a_{-1}$: per un polo di ordine $\\ge2$ fallisce (compaiono potenze $\\varepsilon^{-1}$ divergenti)."
    }]
  },

  { pool:"integrali", src:"nucleo 13 &middot; integrale di Dirichlet", steps:[
    { t:"$\\int_0^{+\\infty}\\frac{\\sin x}{x}\\,dx$: come si prepara il calcolo per residui?",
      opts:[
        {x:"si simmetrizza ($\\frac{\\sin x}{x}$ e' pari): $\\int_0^\\infty=\\frac12\\,\\mathrm{Im}\\,\\mathrm{P}\\!\\!\\int_{-\\infty}^{+\\infty}\\frac{e^{ix}}{x}\\,dx$, notando che $\\frac{e^{ix}}{x}$ ha un polo semplice in $0$ (mentre $\\frac{\\sin x}{x}$ e' regolare l&igrave;)",c:true},
        {x:"si chiude subito nel semipiano inferiore"},
        {x:"si sostituisce $z=e^{i\\theta}$ sul cerchio unitario"},
        {x:"si usa il settore di angolo $\\pi/2$"}],
      hint:"Passa all'esponenziale $e^{ix}/x$: introduce un polo semplice in $0$ (da cui il valore principale) ma permette Jordan.",
      sol:"<b>Impostazione (integrale di Dirichlet, nucleo 13).</b> $\\frac{\\sin x}{x}$ e' pari e ha singolarit&agrave; eliminabile in $0$, ma $\\frac{e^{ix}}{x}$ ha polo semplice: da qui il valore principale e la rientranza.",
      cont:"Ora il contorno &rarr;" },
    { t:"Chiudendo sopra con una rientranza che scavalca l'origine, dentro il contorno:",
      opts:[
        {x:"NON c'e' alcun polo ($e^{iz}/z$ e' olomorfa l&igrave;): l'integrale sul cammino chiuso e' $0$, e l'arco grande svanisce per Jordan",c:true},
        {x:"c'e' il polo $z=0$, che da' $2\\pi i$"},
        {x:"c'e' un polo in $z=i$"},
        {x:"il contorno chiuso vale $2\\pi i\\,\\mathrm{Res}_{z=0}$"}],
      hint:"La rientranza esclude l'origine dal dominio racchiuso: dentro non resta nessuna singolarita', quindi Cauchy da' zero.",
      sol:"<b>Teorema di Cauchy (nessun polo interno).</b> La rientranza tiene $z=0$ FUORI dal contorno; $e^{iz}/z$ e' olomorfa nell'interno, quindi $\\oint=0$. L'arco grande svanisce per Jordan ($k=1>0$).",
      cont:"Ora la rientranza e il valore finale &rarr;" },
    { t:"La rientranza (percorsa in verso orario) da' $-i\\pi\\,\\mathrm{Res}(\\frac{e^{iz}}{z},0)=-i\\pi$. Concludendo:",
      opts:[
        {x:"$0=\\mathrm{P}\\!\\!\\int\\frac{e^{ix}}{x}dx-i\\pi\\Rightarrow\\mathrm{P}\\!\\!\\int\\frac{e^{ix}}{x}dx=i\\pi$; la parte immaginaria da' $\\int_{-\\infty}^{\\infty}\\frac{\\sin x}{x}=\\pi$, quindi $\\int_0^{\\infty}\\frac{\\sin x}{x}=\\frac{\\pi}{2}$",c:true},
        {x:"$\\int_0^\\infty\\frac{\\sin x}{x}=\\pi$"},
        {x:"$\\int_0^\\infty\\frac{\\sin x}{x}=\\frac{\\pi}{4}$"},
        {x:"$\\int_0^\\infty\\frac{\\sin x}{x}=1$"}],
      hint:"Somma i contributi del cammino chiuso: $0=\\mathrm{P}\\!\\int-i\\pi$. Poi prendi $\\mathrm{Im}$ e dimezza per la parita'.",
      sol:"<b>Regola del mezzo residuo (valore verificato $\\pi/2$, nucleo 13).</b> $\\mathrm{Res}(\\frac{e^{iz}}{z},0)=1$; rientranza oraria $\\Rightarrow-i\\pi$. Bilancio: $\\mathrm{P}\\!\\int\\frac{e^{ix}}{x}=i\\pi$, la cui parte immaginaria e' $\\int_{-\\infty}^\\infty\\frac{\\sin x}{x}=\\pi$; per parita' $\\int_0^\\infty=\\pi/2$. (La parte reale nulla da' $\\mathrm{P}\\!\\int\\frac{\\cos x}{x}=0$, coerente con l'integrando dispari.)" }
  ]},

  { pool:"integrali", src:"nucleo 13", steps:[{
      t:"CASO LIMITE. La regola del mezzo residuo per un polo sull'asse reale vale:",
      opts:[
        {x:"solo per poli SEMPLICI; per un polo doppio la rientranza diverge come $\\varepsilon^{-1}$ e il valore principale (in senso di Cauchy) non esiste",c:true},
        {x:"per poli di qualunque ordine"},
        {x:"solo per poli doppi"},
        {x:"solo se il polo e' nell'origine"}],
      hint:"L'argomento $\\int a_{-1}/(z-x_0)=i\\theta a_{-1}$ usa SOLO il termine $a_{-1}$; con un polo doppio compare anche $a_{-2}/(z-x_0)^2$, il cui integrale sull'arco va come $1/\\varepsilon$.",
      sol:"<b>Validit&agrave; del mezzo residuo (nucleo 13).</b> Solo per poli semplici: il termine $a_{-2}(z-x_0)^{-2}$ di un polo doppio integra ad $\\sim\\varepsilon^{-1}$ sull'arco e diverge quando $\\varepsilon\\to0$. Un polo doppio sull'asse rende non-definito anche il valore principale ordinario (serve una regolarizzazione piu' forte)."
    }]
  },

  { pool:"integrali", src:"nucleo 13 (sottotipo b)", steps:[{
      t:"Per $\\int_0^{2\\pi}R(\\cos\\theta,\\sin\\theta)\\,d\\theta$ la sostituzione $z=e^{i\\theta}$ da':",
      opts:[
        {x:"$\\cos\\theta=\\frac{z+z^{-1}}{2},\\ \\sin\\theta=\\frac{z-z^{-1}}{2i},\\ d\\theta=\\frac{dz}{iz}$; l'intervallo $[0,2\\pi]$ diventa il cerchio unitario percorso una volta, e contano i poli con $|z_j|<1$",c:true},
        {x:"$\\cos\\theta=\\frac{z-z^{-1}}{2},\\ d\\theta=z\\,dz$"},
        {x:"$\\cos\\theta=z,\\ d\\theta=dz$"},
        {x:"la sostituzione vale solo se $R$ e' pari in $\\theta$"}],
      hint:"$d(e^{i\\theta})=ie^{i\\theta}d\\theta=iz\\,d\\theta$; e $\\theta$ da $0$ a $2\\pi$ e' un giro completo del cerchio unitario.",
      sol:"<b>Sostituzione $z=e^{i\\theta}$ (nucleo 13, sottotipo b).</b> L'integrale diventa $\\oint_{|z|=1}$ di una razionale in $z$; per il teorema dei residui vale $2\\pi i$ per la somma dei residui dei poli INTERNI al cerchio unitario. E' la spia del sottotipo (b): dominio $[0,2\\pi]$ e razionale in $\\cos,\\sin$."
    }]
  },

  { pool:"integrali", src:"nucleo 13 (esempio canonico)", steps:[
    { t:"$\\int_0^{2\\pi}\\frac{d\\theta}{2+\\cos\\theta}$: dopo $z=e^{i\\theta}$ l'integrale diventa $\\oint\\frac{2\\,dz}{i\\,(z^2+4z+1)}$. Quale polo conta?",
      opts:[
        {x:"le radici sono $z=-2\\pm\\sqrt3$; solo $z_0=-2+\\sqrt3\\approx-0.27$ ha $|z_0|<1$, quindi e' l'unico interno",c:true},
        {x:"entrambe le radici $-2\\pm\\sqrt3$ sono interne"},
        {x:"il polo e' $z=0$, di ordine $2$"},
        {x:"nessun polo e' interno, l'integrale e' $0$"}],
      hint:"$2+\\frac{z+z^{-1}}{2}$ moltiplicato per $z$ da' $\\frac12(z^2+4z+1)$; le radici sono $-2\\pm\\sqrt3$. Confronta i moduli con $1$: $-2-\\sqrt3$ e' fuori.",
      sol:"<b>Sottotipo (b), poli interni (nucleo 13).</b> $z^2+4z+1=0\\Rightarrow z=-2\\pm\\sqrt3$; $|-2+\\sqrt3|<1$ (interno), $|-2-\\sqrt3|>1$ (esterno). Solo $z_0=-2+\\sqrt3$ entra nel conto.",
      cont:"Ora il residuo e il valore &rarr;" },
    { t:"Con la formula del quoziente, $\\mathrm{Res}_{z_0}\\frac{2}{i(z^2+4z+1)}=\\frac{2}{i(2z_0+4)}=\\frac{1}{i\\sqrt3}$. Quindi:",
      opts:[
        {x:"$I=2\\pi i\\cdot\\frac{1}{i\\sqrt3}=\\frac{2\\pi}{\\sqrt3}$",c:true},
        {x:"$I=\\frac{\\pi}{\\sqrt3}$"},
        {x:"$I=\\frac{2\\pi}{3}$"},
        {x:"$I=\\frac{4\\pi}{\\sqrt3}$"}],
      hint:"$2z_0+4=2(-2+\\sqrt3)+4=2\\sqrt3$, quindi $\\frac{2}{i\\cdot2\\sqrt3}=\\frac{1}{i\\sqrt3}$; poi $2\\pi i\\cdot\\frac{1}{i\\sqrt3}$.",
      sol:"<b>Teorema dei residui (valore verificato $2\\pi/\\sqrt3$, nucleo 13).</b> $I=2\\pi i\\cdot\\frac{1}{i\\sqrt3}=\\frac{2\\pi}{\\sqrt3}$. Plausibilit&agrave;: l'integrando sta fra $1/3$ e $1$, quindi $I\\in(2\\pi/3,\\,2\\pi)$; e $2\\pi/\\sqrt3\\approx3.6$ ci sta." }
  ]},

  { pool:"integrali", src:"20240115 Es.2", steps:[
    { t:"$\\int_0^{\\pi}\\frac{d\\theta}{3-2\\cos\\theta}$ (appello 15/01/2024). L'intervallo e' $[0,\\pi]$, meta' giro. Il primo passo corretto e':",
      opts:[
        {x:"sfruttare la parita' dell'integrando in $\\theta$: $\\int_0^\\pi=\\frac12\\int_{-\\pi}^{\\pi}$, cos&igrave; da coprire il cerchio unitario intero con $z=e^{i\\theta}$",c:true},
        {x:"applicare $z=e^{i\\theta}$ direttamente su $[0,\\pi]$, che gia' copre il cerchio"},
        {x:"raddoppiare: $\\int_0^\\pi=2\\int_{-\\pi}^{\\pi}$"},
        {x:"chiudere con la semicirconferenza superiore"}],
      hint:"Il cerchio unitario corrisponde a un giro INTERO ($[-\\pi,\\pi]$ o $[0,2\\pi]$); $[0,\\pi]$ e' mezzo giro. La parita' $\\theta\\to-\\theta$ (perche' $\\cos$ e' pari) permette di estendere con il fattore $\\frac12$.",
      sol:"<b>Estensione con parita' (trappola censita b01).</b> $3-2\\cos\\theta$ e' pari in $\\theta$, quindi $\\int_0^\\pi=\\frac12\\int_{-\\pi}^\\pi$: il fattore $\\frac12$ e' OBBLIGATORIO e va portato fino in fondo. E' la trappola n.1 del sottotipo (b): dimenticarlo raddoppia il risultato.",
      cont:"Ora il conto sul cerchio &rarr;" },
    { t:"Con $z=e^{i\\theta}$ si ottiene $\\frac{i}{2}\\oint\\frac{dz}{z^2-3z+1}$; radici $z=\\frac{3\\pm\\sqrt5}{2}$, interna solo $z_-$. Il valore finale e':",
      opts:[
        {x:"$\\mathrm{Res}_{z_-}=\\frac{1}{2z_--3}=-\\frac{1}{\\sqrt5}$, quindi $I=\\frac{i}{2}\\cdot2\\pi i\\left(-\\frac{1}{\\sqrt5}\\right)=\\frac{\\pi}{\\sqrt5}$",c:true},
        {x:"$I=\\frac{2\\pi}{\\sqrt5}$ (dimenticando il fattore $\\frac12$)"},
        {x:"$I=\\frac{\\pi}{5}$"},
        {x:"$I=\\frac{\\pi}{2\\sqrt5}$"}],
      hint:"$2z_--3=(3-\\sqrt5)-3=-\\sqrt5$, quindi $\\mathrm{Res}=-1/\\sqrt5$. Poi $\\frac{i}{2}\\cdot2\\pi i\\cdot(-1/\\sqrt5)=\\frac{\\pi}{\\sqrt5}$. Il distrattore $2\\pi/\\sqrt5$ e' esattamente l'errore da fattore $\\frac12$ dimenticato.",
      sol:"<b>Teorema dei residui + fattore $\\frac12$ (soluzione ufficiale: $\\pi/\\sqrt5$).</b> $\\mathrm{Res}_{z_-}=\\frac{1}{2z_--3}=-\\frac{1}{\\sqrt5}$; $I=\\frac{i}{2}(2\\pi i)(-\\frac{1}{\\sqrt5})=\\frac{\\pi}{\\sqrt5}$. Senza il $\\frac12$ iniziale uscirebbe $2\\pi/\\sqrt5$: la trappola dichiarata di questo appello." }
  ]},

  { pool:"integrali", src:"20230704 Es.2", steps:[{
      t:"TRAPPOLA. In $\\int_0^{2\\pi}\\frac{d\\theta}{\\sin(e^{2i\\theta}-1/4)}$ (appello 04/07/2023), dopo $z=e^{i\\theta}$ il denominatore diventa $\\sin(z^2-1/4)$, con poli dove $z^2-1/4=k\\pi$. L'insidia e':",
      opts:[
        {x:"per $k<0$ (quando $\\frac14+k\\pi<0$) le radici $z=\\pm\\sqrt{\\frac14+k\\pi}$ sono IMMAGINARIE pure: bisogna verificare $|z|<1$ prima di includerle; dentro il cerchio restano $z=0$ e $z=\\pm\\frac12$",c:true},
        {x:"tutte le radici $z^2=\\frac14+k\\pi$ cadono dentro il cerchio unitario"},
        {x:"$\\sin$ non si annulla mai, quindi non ci sono poli"},
        {x:"conta solo il polo $z=0$"}],
      hint:"$z^2=\\frac14+k\\pi$: per $k\\ge0$ radici reali, per $k<0$ radici immaginarie pure (radicando negativo). In ogni caso il criterio di inclusione e' $|z|<1$.",
      sol:"<b>Poli interni al cerchio unitario (trappola censita b01, sottotipo b).</b> La sostituzione esponenziale genera poli sia reali ($z=\\pm\\frac12$ da $k=0$) sia immaginari ($z=\\pm i\\sqrt{|{\\frac14+k\\pi}|}$ da $k<0$): questi ultimi possono cadere dentro o fuori, quindi il MODULO va controllato caso per caso. La soluzione ufficiale trova come interni $z=0,\\pm\\frac12$ e riporta $I=2\\pi\\big(4-\\frac{1}{\\sin(1/4)}\\big)$."
    }]
  },

  { pool:"integrali", src:"nucleo 13 &middot; 20230908 Es.1", steps:[{
      t:"MODUS OPERANDI. Quando conviene il percorso a SETTORE (cuneo di angolo $\\phi$) invece del semicerchio, per $\\int_0^\\infty f(x)\\,dx$?",
      opts:[
        {x:"quando $f$ ha una simmetria rotazionale $f(z e^{i\\phi})=c\\,f(z)$ per un angolo $\\phi=2\\pi/n$ (tipico di $1/(1+x^n)$): il raggio ruotato riproduce l'integrale a meno di una costante, e $(1-c\\,e^{i\\phi})I=2\\pi i\\sum\\mathrm{Res}$ chiude il conto con pochissimi poli interni",c:true},
        {x:"sempre, per qualunque integrale su $[0,\\infty)$"},
        {x:"quando l'integrando e' dispari"},
        {x:"quando compare un fattore $e^{ikx}$"}],
      hint:"Il settore sfrutta una simmetria rotazionale: $f$ costruita con $x^n$ si ripete ruotando di $2\\pi/n$. Cerca l'angolo che riporta l'integrando su se stesso a meno di un fattore.",
      sol:"<b>Percorso a settore (nucleo 13, variante del sottotipo d).</b> Se $f(ze^{i\\phi})=c\\,f(z)$, il raggio ruotato da' $c\\,e^{i\\phi}I$ e il contorno chiuso (raggio, arco, raggio ruotato) da' $(1-ce^{i\\phi})I=2\\pi i\\sum_{\\text{interni}}\\mathrm{Res}$. Il vantaggio: un settore stretto racchiude UN solo polo, contro i molti del semicerchio. Il keyhole con $\\log$ e' l'alternativa quando la simmetria non e' evidente."
    }]
  },

  { pool:"integrali", src:"20230908 Es.1", steps:[
    { t:"$\\int_0^\\infty\\frac{x^3}{1+x^6}\\,dx$ (appello 08/09/2023). Quale angolo di settore e come si riconosce?",
      opts:[
        {x:"$\\phi=\\pi/3$: perche' $f(z e^{i\\pi/3})=\\frac{z^3 e^{i\\pi}}{1+z^6 e^{i2\\pi}}=\\frac{-z^3}{1+z^6}=-f(z)$; il settore $[0,\\pi/3]$ racchiude il solo polo $z_1=e^{i\\pi/6}$",c:true},
        {x:"$\\phi=\\pi/6$, perche' i poli distano $\\pi/6$"},
        {x:"$\\phi=\\pi/2$, il primo quadrante"},
        {x:"$\\phi=2\\pi$, il keyhole completo"}],
      hint:"Prova $z\\to ze^{i\\pi/3}$: $z^3\\to z^3 e^{i\\pi}=-z^3$ e $z^6\\to z^6 e^{i2\\pi}=z^6$. La funzione torna cambiata di segno: il settore giusto e' $\\pi/3$, non $\\pi/6$.",
      sol:"<b>Simmetria del settore (soluzione ufficiale 08/09/2023).</b> La scelta $\\pi/3$ (non $\\pi/6$) e' la trappola: si identifica $f(ze^{i\\pi/3})=-f(z)$ PRIMA di scegliere il percorso. Nel settore $[0,\\pi/3]$ l'unico polo interno e' $z_1=e^{i\\pi/6}$ (radice di $z^6=-1$).",
      cont:"Ora la relazione risolvente e il valore &rarr;" },
    { t:"Con $\\mathrm{Res}_{z_1}\\frac{z^3}{1+z^6}=\\frac{z_1^3}{6z_1^5}=\\frac{1}{6z_1^2}=\\frac{e^{-i\\pi/3}}{6}$ e la relazione $(1+e^{i\\pi/3})I=2\\pi i\\,\\mathrm{Res}_{z_1}$, si ottiene:",
      opts:[
        {x:"$I=\\frac{\\pi}{3\\sqrt3}$",c:true},
        {x:"$I=\\frac{\\pi}{6\\sqrt3}$"},
        {x:"$I=\\frac{\\pi}{\\sqrt3}$"},
        {x:"$I=\\frac{2\\pi}{3\\sqrt3}$"}],
      hint:"$1+e^{i\\pi/3}=\\sqrt3\\,e^{i\\pi/6}$; quindi $I=\\frac{2\\pi i}{\\sqrt3 e^{i\\pi/6}}\\cdot\\frac{e^{-i\\pi/3}}{6}=\\frac{2\\pi i}{6\\sqrt3}e^{-i\\pi/2}=\\frac{2\\pi}{6\\sqrt3}$.",
      sol:"<b>Teorema dei residui su settore (soluzione ufficiale: $\\pi/(3\\sqrt3)$).</b> $1+e^{i\\pi/3}=\\tfrac32+i\\tfrac{\\sqrt3}{2}=\\sqrt3\\,e^{i\\pi/6}$; con $\\mathrm{Res}=\\frac{e^{-i\\pi/3}}{6}$, $I=\\frac{2\\pi i\\,e^{-i\\pi/3}}{6\\sqrt3\\,e^{i\\pi/6}}=\\frac{2\\pi i\\,e^{-i\\pi/2}}{6\\sqrt3}=\\frac{2\\pi}{6\\sqrt3}=\\frac{\\pi}{3\\sqrt3}$. Reale e positivo: coerente. (Il keyhole con $g(z)=f(z)\\log z$ da' lo stesso valore.)" }
  ]},

  /* ===================== RETTANGOLO, KEYHOLE, POLI MULTIPLI ===================== */

  { pool:"integrali", src:"nucleo 13 &middot; 20240910 Es.2", steps:[{
      t:"MODUS OPERANDI. Come si riconosce che il semicerchio NON chiude e serve il percorso RETTANGOLARE?",
      opts:[
        {x:"quando l'integrando contiene $e^x,\\cosh x,\\sinh x$ (es. $e^x+e^{-x}$ a denominatore): i poli sono INFINITI e allineati su rette $\\mathrm{Im}\\,z=$ cost, e il semicerchio ne racchiuderebbe infiniti (somma divergente); un rettangolo con lato alto a $\\mathrm{Im}\\,z=$ cost ne isola UNO, sfruttando la periodicit&agrave; $e^{z+iT}=e^z$",c:true},
        {x:"quando ci sono poli sull'asse reale"},
        {x:"quando l'integrando e' una razionale di grado alto"},
        {x:"quando compare $e^{ikx}$"}],
      hint:"La firma e' la periodicita' immaginaria: $e^{x+2\\pi i}=e^x$ genera poli equispaziati in verticale. Il semicerchio ne prende infiniti; il rettangolo ne prende uno e lega il lato alto al basso.",
      sol:"<b>Percorso rettangolare (nucleo 13, sottotipo periodico).</b> Le funzioni con $e^x,\\cosh,\\sinh$ hanno poli su $\\mathrm{Im}\\,z=$ cost, infiniti: il semicerchio fallisce (dovrebbe sommarne infiniti). Il rettangolo di altezza $T$ (il periodo immaginario) ne racchiude pochi, e il lato superiore, per periodicit&agrave;, e' PROPORZIONALE a quello inferiore: la loro combinazione da' l'equazione risolvente."
    }]
  },

  { pool:"integrali", src:"20240910 Es.2", steps:[
    { t:"$\\int_{-\\infty}^{+\\infty}\\frac{\\cos x}{e^x+e^{-x}}\\,dx=\\int\\frac{\\cos x}{2\\cosh x}\\,dx$ (appello 10/09/2024). Dove sono i poli e quale contorno?",
      opts:[
        {x:"$2\\cosh z=0\\Rightarrow z=i\\frac{\\pi}{2}+ik\\pi$: infiniti, verticali; si usa un rettangolo con lato superiore a $\\mathrm{Im}\\,z=\\pi$, che racchiude il solo $z=i\\frac{\\pi}{2}$",c:true},
        {x:"poli in $z=\\pm i$, semicirconferenza superiore"},
        {x:"nessun polo, integrando intero"},
        {x:"polo doppio in $z=0$"}],
      hint:"$\\cosh z=0$ per $z=i(\\frac{\\pi}{2}+k\\pi)$: infiniti poli sull'asse immaginario. Un rettangolo alto $\\pi$ ne cattura uno solo, $z=i\\pi/2$.",
      sol:"<b>Scelta del rettangolo (soluzione ufficiale 10/09/2024).</b> Si lavora con $\\frac{e^{iz}}{2\\cosh z}$ (poi $\\mathrm{Re}$). I poli sono $z=i(\\frac{\\pi}{2}+k\\pi)$; il rettangolo $[-R,R]\\times[0,\\pi]$ racchiude solo $z=i\\frac{\\pi}{2}$. I lati verticali svaniscono per $R\\to\\infty$.",
      cont:"Ora la periodicita' lega i due lati orizzontali &rarr;" },
    { t:"Sul lato superiore $z=x+i\\pi$ si trova $\\frac{e^{i(x+i\\pi)}}{2\\cosh(x+i\\pi)}=-e^{-\\pi}\\frac{e^{ix}}{2\\cosh x}$. Detto $K=\\int\\frac{e^{ix}}{2\\cosh x}dx$, la relazione risolvente e':",
      opts:[
        {x:"$K+K e^{-\\pi}=2\\pi i\\,\\mathrm{Res}_{i\\pi/2}$, cioe' $K(1+e^{-\\pi})=2\\pi i\\,\\mathrm{Res}_{i\\pi/2}$",c:true},
        {x:"$K-K e^{-\\pi}=2\\pi i\\,\\mathrm{Res}$ (i due lati si sottraggono)"},
        {x:"$K=2\\pi i\\,\\mathrm{Res}$ (il lato alto svanisce)"},
        {x:"$2K=0$, i due lati si cancellano"}],
      hint:"Il lato basso da' $K$; il lato alto, percorso in verso opposto, da' $-\\int(-e^{-\\pi}\\frac{e^{ix}}{2\\cosh x})dx=+e^{-\\pi}K$. I due si SOMMANO.",
      sol:"<b>Periodicit&agrave; iperbolica (soluzione ufficiale).</b> $\\cosh(x+i\\pi)=-\\cosh x$ e $e^{i(x+i\\pi)}=e^{-\\pi}e^{ix}$; il lato alto vale $-e^{-\\pi}\\frac{e^{ix}}{2\\cosh x}$, e percorso all'indietro contribuisce $+e^{-\\pi}K$. Somma: $K(1+e^{-\\pi})=2\\pi i\\,\\mathrm{Res}_{i\\pi/2}$.",
      cont:"Ora il residuo e il valore &rarr;" },
    { t:"Con $\\mathrm{Res}_{i\\pi/2}\\frac{e^{iz}}{2\\cosh z}=\\frac{e^{i\\cdot i\\pi/2}}{2\\sinh(i\\pi/2)}=\\frac{e^{-\\pi/2}}{2i}$, il risultato e':",
      opts:[
        {x:"$K(1+e^{-\\pi})=\\pi e^{-\\pi/2}\\Rightarrow K=\\frac{\\pi}{e^{\\pi/2}+e^{-\\pi/2}}=\\frac{\\pi}{2\\cosh(\\pi/2)}$, e $I=\\mathrm{Re}\\,K=\\frac{\\pi}{2\\cosh(\\pi/2)}$",c:true},
        {x:"$I=\\frac{\\pi}{\\cosh(\\pi/2)}$"},
        {x:"$I=\\frac{\\pi}{2}e^{-\\pi/2}$"},
        {x:"$I=\\frac{\\pi}{2\\sinh(\\pi/2)}$"}],
      hint:"$2\\pi i\\cdot\\frac{e^{-\\pi/2}}{2i}=\\pi e^{-\\pi/2}$; dividi per $(1+e^{-\\pi})$ e moltiplica sopra e sotto per $e^{\\pi/2}$: $\\frac{\\pi e^{-\\pi/2}}{1+e^{-\\pi}}\\cdot\\frac{e^{\\pi/2}}{e^{\\pi/2}}=\\frac{\\pi}{e^{\\pi/2}+e^{-\\pi/2}}$.",
      sol:"<b>Teorema dei residui su rettangolo (soluzione ufficiale: $I=\\pi/(2\\cosh(\\pi/2))$).</b> $\\frac{d}{dz}(2\\cosh z)=2\\sinh z$, $\\sinh(i\\pi/2)=i\\sin(\\pi/2)=i$; quindi $\\mathrm{Res}=\\frac{e^{-\\pi/2}}{2i}$ e $\\pi e^{-\\pi/2}=K(1+e^{-\\pi})$, da cui $K=\\frac{\\pi}{2\\cosh(\\pi/2)}$, gia' reale: $I=\\mathrm{Re}\\,K=\\frac{\\pi}{2\\cosh(\\pi/2)}$." }
  ]},

  { pool:"integrali", src:"20240910 Es.2", steps:[{
      t:"Nel percorso rettangolare per $\\int\\frac{\\cos x}{2\\cosh x}dx$ (lato alto a $y=\\pi$), il lato superiore NON cancella quello inferiore perche':",
      opts:[
        {x:"sostituendo $z\\to z+i\\pi$ si trova $\\frac{e^{i(x+i\\pi)}}{2\\cosh(x+i\\pi)}=-e^{-\\pi}\\frac{e^{ix}}{2\\cosh x}$: il lato alto e' PROPORZIONALE al basso (fattore $-e^{-\\pi}$), non uguale e opposto; sommando, $(1+e^{-\\pi})$ moltiplica l'integrale cercato",c:true},
        {x:"il lato alto svanisce, come un arco all'infinito"},
        {x:"il lato alto e' esattamente $-$ quello basso e si cancellano"},
        {x:"il lato alto racchiude un polo diverso"}],
      hint:"$\\cosh(x+i\\pi)=\\cosh x\\cos\\pi+i\\sinh x\\sin\\pi=-\\cosh x$; e $e^{i(x+i\\pi)}=e^{-\\pi}e^{ix}$. Metti insieme i due fattori.",
      sol:"<b>Perche' il rettangolo funziona (soluzione ufficiale 10/09/2024).</b> A differenza degli archi (che svaniscono) e dei due lati del taglio nel keyhole (uguali e opposti a meno della determinazione), qui il lato alto e' una COPIA RISCALATA del basso: $-e^{-\\pi}$ volte. E' proprio questa proporzionalit&agrave; (non cancellazione, non svanimento) a produrre il fattore $(1+e^{-\\pi})$ e a rendere risolubile un integrale con infiniti poli."
    }]
  },

  { pool:"integrali", src:"nucleo 13 (sottotipo d)", steps:[
    { t:"$\\int_0^{\\infty}\\frac{x^{\\alpha-1}}{1+x}\\,dx$ ($0<\\alpha<1$), keyhole con taglio sul semiasse reale positivo ($\\arg z\\in(0,2\\pi)$). Il bilancio dei due lati del taglio e':",
      opts:[
        {x:"sopra $\\arg z=0$ l'integrando vale $x^{\\alpha-1}g$, sotto $\\arg z=2\\pi$ vale $x^{\\alpha-1}e^{2\\pi i\\alpha}g$; sommando (verso opposto) resta $(1-e^{2\\pi i\\alpha})I=2\\pi i\\,\\mathrm{Res}_{z=-1}$",c:true},
        {x:"i due lati si cancellano e resta solo l'arco $C_R$"},
        {x:"i due lati sommano a $2I$, come per $\\sqrt{\\cdot}$ sul segmento"},
        {x:"sopra e sotto valgono entrambi $x^{\\alpha-1}g$: i lati si annullano"}],
      hint:"Girando sotto il taglio, $\\arg z$ passa da $0$ a $2\\pi$, quindi $z^{\\alpha-1}$ acquista $e^{2\\pi i(\\alpha-1)}=e^{2\\pi i\\alpha}$. Il fattore davanti all'integrale e' $(1-e^{2\\pi i\\alpha})$.",
      sol:"<b>Meccanismo del keyhole (nucleo 13, sottotipo d).</b> La polidromia rende i due lati diversi di $e^{2\\pi i\\alpha}$; se la funzione fosse monodroma ($\\alpha$ intero) i lati si cancellerebbero ($0=0$). Gli archi $C_R$ e $C_\\varepsilon$ svaniscono per $0<\\alpha<1$ (stessa condizione della convergenza reale).",
      cont:"Ora il residuo e il valore &rarr;" },
    { t:"Con l'unico polo $z=-1=e^{i\\pi}$ e $\\mathrm{Res}_{z=-1}=(e^{i\\pi})^{\\alpha-1}=-e^{i\\pi\\alpha}$, si ricava:",
      opts:[
        {x:"$I=\\frac{-2\\pi i\\,e^{i\\pi\\alpha}}{1-e^{2\\pi i\\alpha}}=\\frac{2\\pi i}{e^{i\\pi\\alpha}-e^{-i\\pi\\alpha}}=\\frac{\\pi}{\\sin\\pi\\alpha}$",c:true},
        {x:"$I=\\frac{\\pi}{\\cos\\pi\\alpha}$"},
        {x:"$I=\\frac{2\\pi}{\\sin\\pi\\alpha}$"},
        {x:"$I=\\pi\\sin\\pi\\alpha$"}],
      hint:"Dividi numeratore e denominatore per $e^{i\\pi\\alpha}$: $\\frac{-2\\pi i}{e^{i\\pi\\alpha}-e^{-i\\pi\\alpha}}\\cdot(-1)=\\frac{2\\pi i}{2i\\sin\\pi\\alpha}$.",
      sol:"<b>Teorema dei residui + formula di riflessione (valore verificato $\\pi/\\sin\\pi\\alpha$, nucleo 13).</b> $(1-e^{2\\pi i\\alpha})I=2\\pi i(-e^{i\\pi\\alpha})$; dividendo per $e^{i\\pi\\alpha}$ si ottiene $I=\\frac{2\\pi i}{2i\\sin\\pi\\alpha}=\\frac{\\pi}{\\sin\\pi\\alpha}$. E' la funzione beta / formula di riflessione $\\Gamma(\\alpha)\\Gamma(1-\\alpha)=\\pi/\\sin\\pi\\alpha$." }
  ]},

  { pool:"integrali", src:"nucleo 13 (esercizio guidato)", steps:[
    { t:"$\\int_{-\\infty}^{+\\infty}\\frac{x^2}{(x^2+1)(x^2+4)}\\,dx$: ammissibilita' e poli.",
      opts:[
        {x:"$\\deg Q=4\\ge\\deg P+2=4$: l'arco svanisce (ML); poli superiori $z=i$ e $z=2i$, entrambi semplici",c:true},
        {x:"l'arco NON svanisce, l'integrale diverge"},
        {x:"i poli sono $z=\\pm1,\\pm2$ sull'asse reale"},
        {x:"unico polo $z=i$, di ordine $2$"}],
      hint:"Numeratore grado $2$, denominatore grado $4$: differenza $2$, l'arco svanisce. I poli sono $\\pm i$ e $\\pm2i$; nel semipiano superiore stanno $i$ e $2i$.",
      sol:"<b>Sottotipo (a), ammissibilit&agrave; (nucleo 13).</b> $\\deg Q-\\deg P=2$: la stima ML ($\\sim\\pi R\\cdot R^2/R^4$) manda a zero l'arco. Poli interni: $z=i,\\,2i$, semplici.",
      cont:"Ora i due residui &rarr;" },
    { t:"I residui in $z=i$ e $z=2i$ (formula del quoziente) valgono:",
      opts:[
        {x:"$\\mathrm{Res}_i=\\frac{z^2}{(z+i)(z^2+4)}\\big|_i=\\frac{-1}{2i\\cdot3}=\\frac{i}{6}$; $\\mathrm{Res}_{2i}=\\frac{z^2}{(z^2+1)(z+2i)}\\big|_{2i}=\\frac{-4}{(-3)(4i)}=-\\frac{i}{3}$",c:true},
        {x:"$\\mathrm{Res}_i=\\frac{i}{6}$ e $\\mathrm{Res}_{2i}=+\\frac{i}{3}$"},
        {x:"$\\mathrm{Res}_i=\\frac{1}{6}$ e $\\mathrm{Res}_{2i}=\\frac{1}{3}$ (reali)"},
        {x:"entrambi nulli"}],
      hint:"In $z=i$: $z^2=-1$, denominatore residuo $(2i)(i^2+4)=(2i)(3)=6i$; $\\frac{-1}{6i}=\\frac{i}{6}$. In $z=2i$: $z^2=-4$, $((2i)^2+1)(4i)=(-3)(4i)=-12i$; $\\frac{-4}{-12i}=\\frac{1}{3i}=-\\frac{i}{3}$.",
      sol:"<b>Residui di poli semplici (nucleo 13, esercizio guidato).</b> Con $1/(-i)=i$: $\\mathrm{Res}_i=i/6$, $\\mathrm{Res}_{2i}=-i/3$.",
      cont:"Ora somma e valore &rarr;" },
    { t:"$\\sum\\mathrm{Res}=\\frac{i}{6}-\\frac{i}{3}=-\\frac{i}{6}$, quindi:",
      opts:[
        {x:"$I=2\\pi i\\left(-\\frac{i}{6}\\right)=\\frac{\\pi}{3}$",c:true},
        {x:"$I=\\frac{\\pi}{6}$"},
        {x:"$I=\\frac{2\\pi}{3}$"},
        {x:"$I=\\frac{\\pi}{3}i$"}],
      hint:"$2\\pi i\\cdot(-\\frac{i}{6})=\\frac{2\\pi}{6}=\\frac{\\pi}{3}$. Reale e positivo, come deve essere.",
      sol:"<b>Teorema dei residui (valore verificato $\\pi/3$, nucleo 13).</b> $I=2\\pi i(-i/6)=\\pi/3\\approx1.05$, reale e positivo: coerente con un integrando positivo." }
  ]},

  { pool:"integrali", src:"20240618 turno B Es.2", steps:[
    { t:"$\\int_{-\\infty}^{+\\infty}\\frac{dx}{(x^2+1)^2}$ (appello 18/06/2024, turno B): polo DOPPIO in $z=i$ (chiuso sopra). Il residuo e':",
      opts:[
        {x:"$\\frac{d}{dz}\\!\\left[\\frac{1}{(z+i)^2}\\right]_{z=i}=\\left[-\\frac{2}{(z+i)^3}\\right]_{z=i}=-\\frac{2}{(2i)^3}=\\frac{1}{4i}$",c:true},
        {x:"$\\frac{1}{(z+i)^2}\\big|_{i}=\\frac{1}{(2i)^2}=-\\frac14$ (senza derivare)"},
        {x:"$\\frac{1}{2i}$"},
        {x:"$-\\frac{1}{4i}$"}],
      hint:"Polo di ordine $2$: $\\mathrm{Res}=\\lim_{z\\to i}\\frac{d}{dz}\\big[(z-i)^2 f\\big]=\\frac{d}{dz}\\frac{1}{(z+i)^2}$. NON basta valutare senza derivare. E $(2i)^3=-8i$, quindi $-\\frac{2}{-8i}=\\frac{1}{4i}$.",
      sol:"<b>Residuo di un polo di ordine $m=2$ (nucleo 13).</b> $\\mathrm{Res}=\\frac{1}{(m-1)!}\\lim\\frac{d^{m-1}}{dz^{m-1}}[(z-i)^m f]$; con $m=2$, una derivata: $\\frac{d}{dz}(z+i)^{-2}=-2(z+i)^{-3}$, valutata in $i$ da' $-\\frac{2}{(2i)^3}=-\\frac{2}{-8i}=\\frac{1}{4i}$. Distrattore tipico: dimenticare la derivata e valutare $(z+i)^{-2}$.",
      cont:"Ora il valore &rarr;" },
    { t:"Quindi l'integrale vale:",
      opts:[
        {x:"$2\\pi i\\cdot\\frac{1}{4i}=\\frac{\\pi}{2}$",c:true},
        {x:"$\\pi$"},
        {x:"$\\frac{\\pi}{4}$"},
        {x:"$2\\pi$"}],
      hint:"$2\\pi i\\cdot\\frac{1}{4i}=\\frac{2\\pi}{4}=\\frac{\\pi}{2}$.",
      sol:"<b>Teorema dei residui (valore $\\pi/2$).</b> $I=2\\pi i\\cdot\\frac{1}{4i}=\\frac{\\pi}{2}$. Il valore numerico non compare nella stampa ufficiale del turno B (che ne enuncia solo il tipo), ma e' il classico $\\int\\frac{dx}{(x^2+1)^2}=\\pi/2$, qui ri-derivato per intero: reale e positivo, coerente." }
  ]},

  { pool:"integrali", src:"20240115 Es.2 (trappola b01)", steps:[{
      t:"TRAPPOLA (dichiarata b01). Estendere un integrale trigonometrico da $[0,\\pi]$ a $[-\\pi,\\pi]$ per usare $z=e^{i\\theta}$:",
      opts:[
        {x:"introduce il fattore $\\frac12$ ($\\int_0^\\pi=\\frac12\\int_{-\\pi}^\\pi$), VALIDO solo se l'integrando e' pari in $\\theta$; dimenticare il $\\frac12$ raddoppia il risultato (es. $\\frac{\\pi}{\\sqrt5}$ diventa $\\frac{2\\pi}{\\sqrt5}$)",c:true},
        {x:"non richiede alcun fattore: $[0,\\pi]$ e' gia' un giro completo del cerchio"},
        {x:"richiede di moltiplicare per $2$"},
        {x:"e' sempre lecito, anche se l'integrando e' dispari"}],
      hint:"Il cerchio unitario corrisponde a un giro INTERO. $[0,\\pi]$ e' mezzo giro: per chiudere il cerchio serve la parita' e il fattore $\\frac12$.",
      sol:"<b>Fattore $\\frac12$ nell'estensione (trappola censita b01, appello 15/01/2024).</b> $z=e^{i\\theta}$ percorre il cerchio in un giro $[-\\pi,\\pi]$; da $[0,\\pi]$ mancano gli angoli negativi, recuperati per parita' col fattore $\\frac12$. E' la trappola che trasforma $\\pi/\\sqrt5$ in $2\\pi/\\sqrt5$: il fattore va scritto subito e portato fino in fondo."
    }]
  },

  { pool:"integrali", src:"tipo b01", steps:[{
      t:"Per $\\int_0^\\infty f(x)\\,dx$ con $f$ PARI si scrive $\\int_0^\\infty f=\\frac12\\int_{-\\infty}^{\\infty}f$. Questo passaggio:",
      opts:[
        {x:"e' lecito SOLO se $f$ e' pari; consente di applicare il semicerchio (definito su tutta $\\mathbb{R}$) e poi dimezzare. Se $f$ non e' pari il passaggio e' falso e serve un altro contorno (settore o keyhole)",c:true},
        {x:"vale per qualunque $f$"},
        {x:"richiede che $f$ sia dispari"},
        {x:"raddoppia sempre il risultato del semicerchio"}],
      hint:"La simmetria $f(-x)=f(x)$ e' cio' che lega $\\int_0^\\infty$ a $\\int_{-\\infty}^\\infty$. Senza parita', il semicerchio (che copre tutta $\\mathbb{R}$) non e' applicabile.",
      sol:"<b>Riduzione per parita' (nucleo 13).</b> Il semicerchio calcola $\\int_{-\\infty}^{\\infty}$; per ricondurvi $\\int_0^\\infty$ serve $f$ pari ($\\int_0^\\infty=\\frac12\\int_{-\\infty}^\\infty$). Quando $f$ NON e' pari (es. $\\frac{x^3}{1+x^6}$, o $\\frac{x^{\\alpha-1}}{1+x}$) questa via si chiude e si passa al settore o al keyhole: e' un altro criterio che orienta la scelta del contorno."
    }]
  },

  { pool:"integrali", src:"nucleo 13 (sottotipo d)", steps:[{
      t:"Nel keyhole (o nel settore) il cerchietto $C_\\varepsilon$ attorno all'origine svanisce per $\\varepsilon\\to0$ quando:",
      opts:[
        {x:"$z\\,f(z)\\to0$ per $z\\to0$: per $x^{\\alpha-1}g(x)$ con $g$ regolare in $0$ cio' richiede $\\alpha>0$ (stima $\\left|\\int_{C_\\varepsilon}\\right|\\le2\\pi\\varepsilon\\cdot\\max|f|\\sim\\varepsilon^{\\alpha}\\to0$)",c:true},
        {x:"sempre, come il cerchio grande"},
        {x:"solo se $f$ ha un polo in $0$"},
        {x:"mai: $C_\\varepsilon$ contribuisce sempre con mezzo residuo"}],
      hint:"La stima ML sul cerchietto da' $2\\pi\\varepsilon\\cdot\\max_{C_\\varepsilon}|f|$; perche' tenda a $0$ serve che $|f|$ cresca piu' lentamente di $1/\\varepsilon$, cioe' $z f\\to0$.",
      sol:"<b>Lemma del cerchio piccolo (nucleo 13, sottotipo d).</b> $\\left|\\int_{C_\\varepsilon}f\\right|\\le L\\cdot\\max|f|=2\\pi\\varepsilon\\cdot\\max|f|$; per $x^{\\alpha-1}$ questo va come $\\varepsilon\\cdot\\varepsilon^{\\alpha-1}=\\varepsilon^\\alpha\\to0$ se $\\alpha>0$. Insieme alla condizione di $C_R$ ($\\alpha<1$) si ha $0<\\alpha<1$: gli stessi estremi in cui l'integrale reale converge. Diverso dalla rientranza attorno a un POLO semplice, che invece da' $\\pm i\\pi\\,\\mathrm{Res}$."
    }]
  },

  { pool:"integrali", src:"b01 &middot; nucleo 13", steps:[{
      t:"CHECKLIST. Prima di consegnare un integrale reale calcolato per residui, l'ordine dei controlli e':",
      opts:[
        {x:"(1) forma dell'integrando &rarr; contorno scelto e MOTIVATO; (2) verifica che archi e cerchietti svaniscano con la stima giusta (ML o Jordan); (3) poli INTERNI corretti e semipiano giusto per il segno di $k$; (4) residui; (5) fattori di simmetria (il $\\frac12$ per integrandi pari, il verso del contorno nel segno); (6) plausibilit&agrave;: un integrale di funzione reale positiva DEVE uscire reale e $\\ge0$",c:true},
        {x:"basta sommare i residui e moltiplicare per $2\\pi i$"},
        {x:"basta chiudere sempre con la semicirconferenza superiore"},
        {x:"basta sostituire $z=e^{i\\theta}$"}],
      hint:"Le trappole censite (semipiano sbagliato, fattore $\\frac12$ dimenticato, verso del contorno) stanno ai passi 3 e 5; il passo 6 e' il controllo gratuito che smaschera un segno sbagliato.",
      sol:"<b>Sintesi operativa (b01 + nucleo 13).</b> La checklist mette al passo 1 la scelta motivata del contorno (il vero contenuto del tipo), ai passi 3 e 5 le trappole degli scritti (semipiano di Jordan, fattore $\\frac12$, verso del contorno), al passo 6 il controllo di plausibilit&agrave;. Chi svolge questi sei passi non 'riconosce' la risposta: la COSTRUISCE, e sa dire dove ogni segno viene."
    }]
  }

  /* --- fine ripresa 3b: 30 unita' --- */
];

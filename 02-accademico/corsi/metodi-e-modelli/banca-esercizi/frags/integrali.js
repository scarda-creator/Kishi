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

  /* --- fine ripresa 1 --- */
];

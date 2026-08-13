Q.fourier = [

  /* ===================== CONCETTUALI + MODUS OPERANDI ===================== */

  { pool:"fourier", src:"20230704 Es.3", steps:[{
      t:"La trasformata di Fourier $\\hat f(k)=\\int_{-\\infty}^{+\\infty}f(x)\\,e^{-ikx}\\,dx$ di una funzione razionale si calcola:",
      opts:[
        {x:"prolungando l'integrando a $f(z)e^{-ikz}$ e chiudendo il cammino con un arco all'infinito in UNO dei due semipiani, poi teorema dei residui",c:true},
        {x:"sviluppando $f$ in serie di Taylor e integrando termine a termine"},
        {x:"con la formula di Parseval, sempre"},
        {x:"calcolando la primitiva reale di $f(x)e^{-ikx}$"}],
      hint:"L'integrale reale &egrave; un lato di un contorno chiuso: l'arco aggiunto deve svanire, e ci&ograve; seleziona il semipiano.",
      sol:"<b>Teorema dei residui applicato alla trasformata.</b> Si scrive $\\hat f(k)=\\int f(z)e^{-ikz}dz$ lungo l'asse reale, si chiude con una semicirconferenza in un semipiano e, se l'arco svanisce, $\\hat f(k)=\\pm2\\pi i\\sum\\mathrm{Res}$ sui poli racchiusi. La scelta del semipiano NON &egrave; libera: la fissa il segno di $k$ tramite $|e^{-ikz}|=e^{k\\,\\mathrm{Im}\\,z}$ (nucleo 13, sottotipo $c$)."
    }]
  },

  { pool:"fourier", src:"20230704 Es.3", steps:[{
      t:"MODUS OPERANDI. Con la convenzione $\\hat f(k)=\\int f(x)e^{-ikx}dx$, per $k>0$ si chiude il contorno:",
      opts:[
        {x:"nel semipiano INFERIORE ($\\mathrm{Im}\\,z<0$): l&igrave; $|e^{-ikz}|=e^{k\\,\\mathrm{Im}\\,z}$ &egrave; esponenzialmente piccolo e l'arco svanisce",c:true},
        {x:"nel semipiano superiore, sempre, indipendentemente dal segno di $k$"},
        {x:"nel semipiano superiore per $k>0$ (come per l'antitrasformata)"},
        {x:"a scelta: i due semipiani danno lo stesso risultato"}],
      hint:"$|e^{-ikz}|=|e^{-ik(x+iy)}|=e^{ky}$: con $k>0$ questo decade dove $y=\\mathrm{Im}\\,z<0$. L'esponenziale schiaccia l'arco solo l&igrave;.",
      sol:"<b>Lemma di Jordan e scelta obbligata del semipiano.</b> Con $e^{-ikx}$ e $k>0$, il fattore $e^{-ikz}$ decade nel semipiano inferiore: si chiude SOTTO. Per $k<0$ si chiude SOPRA. Chiudere dalla parte sbagliata &egrave; l'errore n.1 del corso: l'arco esplode e il risultato &egrave; privo di senso. Attenzione: l'antitrasformata ha $e^{+ikx}$, quindi la regola si INVERTE (nucleo 13). &Egrave; il punto dove si perde l'esercizio."
    }]
  },

  { pool:"fourier", src:"tipo &middot; nucleo 13", steps:[{
      t:"Il <b>lemma di Jordan</b> garantisce che l'arco svanisce sotto quale ipotesi?",
      opts:[
        {x:"$f(z)\\to0$ uniformemente sull'arco quando $R\\to\\infty$ (basta $|f|\\le M/R^{\\alpha}$, $\\alpha>0$): pi&ugrave; debole della stima ML pura",c:true},
        {x:"$f$ deve decadere come $1/R^{2}$, come per i razionali senza esponenziale"},
        {x:"$f$ deve essere pari"},
        {x:"$f$ deve essere olomorfa ovunque"}],
      hint:"&Egrave; il fattore $e^{-ikz}$, esponenzialmente piccolo nel semipiano giusto, ad aiutare: permette a $f$ di decadere pi&ugrave; lentamente che nel sottotipo dei razionali puri.",
      sol:"<b>Lemma di Jordan.</b> Se $f(z)\\to0$ uniformemente sull'arco per $R\\to\\infty$, allora $\\int_{C_R}f(z)e^{ikz}dz\\to0$ nel semipiano dove $e^{ikz}$ decade. La condizione &egrave; PIU DEBOLE di quella del sottotipo $(a)$ (razionali puri, che chiedono $\\deg Q\\ge\\deg P+2$): qui basta $\\deg Q\\ge\\deg P+1$, perch&eacute; l'esponenziale fa il resto. Per questo $\\frac{z}{z^2+4}$ va bene con $e^{ikz}$ ma non da solo."
    }]
  },

  { pool:"fourier", src:"20230704 Es.3", steps:[{
      t:"Chiudendo nel semipiano INFERIORE il contorno risulta percorso in senso orario. Conseguenza:",
      opts:[
        {x:"$\\hat f(k)=-2\\pi i\\sum_{\\mathrm{Im}\\,z_j<0}\\mathrm{Res}$: compare il segno meno dal verso orario",c:true},
        {x:"$\\hat f(k)=+2\\pi i\\sum\\mathrm{Res}$, il verso non conta"},
        {x:"$\\hat f(k)=-\\pi i\\sum\\mathrm{Res}$, mezzo residuo"},
        {x:"l'integrale &egrave; sempre nullo perch&eacute; il verso &egrave; orario"}],
      hint:"Il teorema dei residui d&agrave; $+2\\pi i\\sum\\mathrm{Res}$ in senso ANTIorario; il semipiano inferiore si percorre al contrario.",
      sol:"<b>Segno del verso (teorema dei residui).</b> $\\oint=2\\pi i\\sum\\mathrm{Res}$ vale in senso antiorario; chiudendo sotto il cammino &egrave; orario, quindi $\\hat f(k>0)=-2\\pi i\\sum_{\\mathrm{Im}\\,z_j<0}\\mathrm{Res}$. Dimenticare questo meno inverte il segno della trasformata: nella soluzione ufficiale del 04/07/2023 il $-2\\pi i$ &egrave; esattamente ci&ograve; che produce $\\hat f(k>0)=\\frac{i\\pi}{3}e^{-k}$ con il segno giusto."
    }]
  },

  { pool:"fourier", src:"tipo &middot; b01", steps:[{
      t:"MODUS OPERANDI. Riconosci il tipo &laquo;trasformata di Fourier via residui&raquo; e ne imposti l'attacco: la sequenza corretta &egrave;:",
      opts:[
        {x:"(1) prolunga a $f(z)e^{-ikz}$; (2) trova i poli e la loro parte immaginaria; (3) per OGNI segno di $k$ scegli il semipiano dove l'arco svanisce; (4) somma i residui racchiusi col segno del verso; (5) ricomponi con $\\theta(k)$",c:true},
        {x:"calcola una primitiva e valuti agli estremi $\\pm\\infty$"},
        {x:"sostituisci $z=e^{i\\theta}$ e integri sul cerchio unitario"},
        {x:"sviluppi in serie di Fourier e leggi i coefficienti"}],
      hint:"La distinzione $k>0$ / $k<0$ va fatta SEMPRE e per prima: sono due conti diversi che poi si fondono in una formula con la funzione gradino.",
      sol:"<b>Strategia d'attacco (mappa b01).</b> Il tipo si riconosce da un integrale $\\int_{-\\infty}^{+\\infty}$ di una razionale (o razionale$\\times$gaussiana) contro $e^{-ikx}$. Ordine invariante: prolungamento, poli, semipiano per ciascun segno di $k$ (lemma di Jordan), somma residui col verso, ricomposizione via $\\theta(k)$. Saltare la separazione dei segni &egrave; la causa n.1 di risposta incompleta."
    }]
  },

  { pool:"fourier", src:"tipo &middot; nucleo 13", steps:[{
      t:"Se un polo di $f$ cade ESATTAMENTE sull'asse reale (cammino), la trasformata:",
      opts:[
        {x:"si definisce col valore principale di Cauchy e il polo contribuisce con MEZZO residuo ($\\pm i\\pi\\,\\mathrm{Res}$)",c:true},
        {x:"non esiste in nessun senso"},
        {x:"contribuisce col residuo intero $2\\pi i\\,\\mathrm{Res}$"},
        {x:"si annulla per simmetria"}],
      hint:"Il polo si aggira con una rientranza semicircolare di raggio $\\varepsilon$: l'arco piccolo d&agrave; una FRAZIONE del giro, non zero.",
      sol:"<b>Valore principale e regola del mezzo residuo (Sokhotski-Plemelj).</b> Per un polo SEMPLICE $x_0\\in\\mathbb{R}$ la rientranza semicircolare contribuisce $\\pm i\\pi\\,\\mathrm{Res}(f,x_0)$ (segno dal verso). Formalmente $\\frac{1}{x-x_0\\pm i\\epsilon}=\\mathrm{P}\\frac{1}{x-x_0}\\mp i\\pi\\delta(x-x_0)$. Vale SOLO per poli semplici: con un polo doppio sull'asse la rientranza diverge e il valore principale non esiste (nucleo 13, tappa 04)."
    }]
  },

  { pool:"fourier", src:"20240910 Es.2", steps:[{
      t:"Per $\\int_{-\\infty}^{+\\infty}\\frac{\\cos x}{e^x+e^{-x}}dx$ la funzione ha INFINITI poli su $z=\\pm i\\pi/2+i2k\\pi$. Perch&eacute; NON si usa la semicirconferenza?",
      opts:[
        {x:"perch&eacute; il semicerchio racchiuderebbe infiniti poli: si usa un percorso RETTANGOLARE che ne cattura uno solo",c:true},
        {x:"perch&eacute; la funzione non &egrave; olomorfa"},
        {x:"perch&eacute; l'integrale diverge"},
        {x:"perch&eacute; $\\cos x$ non &egrave; limitato"}],
      hint:"I poli sono allineati verticalmente e spaziati di $2\\pi$: un arco che cresce ne inghiotte una quantit&agrave; infinita. Serve un cammino di altezza FISSA.",
      sol:"<b>Percorso rettangolare (compito 10/09/2024).</b> Con poli periodici lungo l'asse immaginario, la semicirconferenza racchiude infiniti residui e non chiude. Si sceglie un rettangolo di altezza $\\pi$: il lato superiore $z=x+i\\pi$ d&agrave; $f(x+i\\pi)=-e^{-\\pi}g(x)$, cio&egrave; $\\int_{\\gamma_3}=-e^{-\\pi}\\int_{\\gamma_1}$ (proporzionale, non opposto), e $K(1+e^{-\\pi})=2\\pi i\\,\\mathrm{Res}_{i\\pi/2}$. Risultato $I=\\frac{\\pi}{2\\cosh(\\pi/2)}$. La chiave &egrave; che i due lati orizzontali sono proporzionali per periodicit&agrave; dell'esponenziale."
    }]
  },

  { pool:"fourier", src:"Set 3 es.2", steps:[{
      t:"I coefficienti della serie di Fourier ESPONENZIALE di $f\\in L^2[-\\pi,\\pi]$ sono:",
      opts:[
        {x:"$f_n=\\frac{1}{\\sqrt{2\\pi}}\\int_{-\\pi}^{\\pi}f(x)e^{-inx}dx$, e $f(x)=\\frac{1}{\\sqrt{2\\pi}}\\sum_{n=-\\infty}^{\\infty}f_n e^{inx}$",c:true},
        {x:"$f_n=\\int_{-\\pi}^{\\pi}f(x)e^{inx}dx$, senza normalizzazione"},
        {x:"$f_n=f(n)$, il campionamento della funzione"},
        {x:"$f_n=\\frac{d^n f}{dx^n}(0)/n!$"}],
      hint:"La base $\\{e^{inx}/\\sqrt{2\\pi}\\}$ &egrave; ortonormale su $[-\\pi,\\pi]$: il coefficiente &egrave; il prodotto scalare $\\langle e^{inx}/\\sqrt{2\\pi}\\,|\\,f\\rangle$.",
      sol:"<b>Coefficienti di Fourier (proiezione su base ortonormale).</b> $\\{\\varphi_n=e^{inx}/\\sqrt{2\\pi}\\}$ &egrave; base ortonormale di $L^2[-\\pi,\\pi]$; $f_n=\\langle\\varphi_n,f\\rangle$. La forma trigonometrica $a_n,b_n$ &egrave; equivalente (combinazioni di $f_n,f_{-n}$): si sceglie l'esponenziale quando il calcolo dell'integrale &egrave; pi&ugrave; pulito, la trigonometrica quando $f$ &egrave; reale pari/dispari (met&agrave; dei coefficienti si annullano per simmetria)."
    }]
  },

  { pool:"fourier", src:"20240115 Es.4", steps:[{
      t:"In un punto $x_0$ di DISCONTINUIT&Agrave; a salto, la serie di Fourier $S(x_0)$ converge a:",
      opts:[
        {x:"la semisomma dei limiti destro e sinistro, $\\tfrac12\\big(f(x_0^+)+f(x_0^-)\\big)$, NON a $f(x_0)$",c:true},
        {x:"$f(x_0)$, sempre"},
        {x:"$\\max(f(x_0^+),f(x_0^-))$"},
        {x:"zero"}],
      hint:"Il valore puntuale $f(x_0)$ &egrave; irrilevante: la serie &laquo;non vede&raquo; il singolo punto, media i due rami.",
      sol:"<b>Teorema di Dirichlet.</b> Se $f$ &egrave; regolare a tratti, la serie di Fourier converge a $\\tfrac12(f(x_0^+)+f(x_0^-))$ in ogni punto; dove $f$ &egrave; continua ci&ograve; coincide con $f(x_0)$, ma in un salto d&agrave; la MEDIA. Usare $f(x_0)$ al posto della semisomma quando $f$ &egrave; discontinua &egrave; la trappola dominante delle identit&agrave; numeriche (mappa b01): produce un'equazione sbagliata per la somma della serie."
    }]
  },

  { pool:"fourier", src:"tipo &middot; b01", steps:[{
      t:"MODUS OPERANDI. Per estrarre un'IDENTIT&Agrave; numerica (tipo $\\sum 1/n^2$) da una serie di Fourier, la mossa &egrave;:",
      opts:[
        {x:"valutare la serie in un punto scelto ($x=0$ o $x=\\pm\\pi$) e uguagliarla al valore della funzione l&igrave;: $f(x_0)$ se continua, la semisomma se discontinua",c:true},
        {x:"derivare la serie termine a termine e porre $x=0$"},
        {x:"integrare la serie su tutto il periodo"},
        {x:"prendere il limite $n\\to\\infty$ dei coefficienti"}],
      hint:"L'identit&agrave; nasce uguagliando i DUE modi di scrivere lo stesso numero: la serie valutata in $x_0$ e il valore (o la semisomma) di $f$ in $x_0$. Il punto va scelto per far comparire la somma voluta.",
      sol:"<b>Strategia delle identit&agrave; (Set 3, compiti 2024).</b> Si sceglie $x_0$ in modo che i $\\cos(nx_0)$ o $e^{inx_0}$ producano la somma cercata: $x_0=0$ d&agrave; $\\sum a_n$ (segni tutti $+$ o alternati), $x_0=\\pi$ d&agrave; $\\sum(-1)^n a_n$. Poi si applica il <b>teorema di Dirichlet</b>: uguagliare a $f(x_0)$ (se continua) o alla semisomma (se salto). La distinzione continuit&agrave;/salto DECIDE il secondo membro: &egrave; il passo dove il conto vive o muore."
    }]
  },

  { pool:"fourier", src:"20231116 Es.3", steps:[{
      t:"L'antitrasformata $\\hat{\\hat f}(x)=\\int\\frac{dk}{2\\pi}\\hat f(k)e^{ikx}$ si calcola coi residui: per $x>0$ si chiude:",
      opts:[
        {x:"nel semipiano SUPERIORE ($\\mathrm{Im}\\,k>0$): con $e^{+ikx}$ e $x>0$ &egrave; l&igrave; che l'esponenziale decade &mdash; regola INVERTITA rispetto alla trasformata diretta",c:true},
        {x:"nel semipiano inferiore, come per la trasformata diretta con $k>0$"},
        {x:"a scelta, il risultato non dipende dal semipiano"},
        {x:"non si pu&ograve; chiudere: l'antitrasformata si fa solo numericamente"}],
      hint:"Ora l'esponente &egrave; $+ikx$: $|e^{ikx}|=e^{-x\\,\\mathrm{Im}\\,k}$; con $x>0$ decade dove $\\mathrm{Im}\\,k>0$. Il segno opposto rispetto a $e^{-ikx}$ inverte la regola.",
      sol:"<b>Antitrasformata (lemma di Jordan, segno invertito).</b> Il nucleo &egrave; ora $e^{+ikx}$: per $x>0$ si chiude SOPRA, per $x<0$ SOTTO &mdash; l'opposto della trasformata diretta, per via del segno dell'esponente. Nel 16/11/2023, $\\hat f(k)=\\frac{1}{1-ik}+\\frac{1}{(1+ik)^2}$: per $x>0$ contribuisce il polo doppio in $k=i$ (secondo termine) $\\to xe^{-x}$; per $x<0$ il polo semplice in $k=-i$ $\\to e^{x}$. Si riottiene $f(x)$ ovunque tranne il salto."
    }]
  },

  { pool:"fourier", src:"20231116 Es.3", steps:[{
      t:"Nel punto $x=0$, dove $f(x)=xe^{-x}\\theta(x)+e^x\\theta(-x)$ &egrave; discontinua, l'antitrasformata $\\hat{\\hat f}(0)$ vale:",
      opts:[
        {x:"$\\tfrac12\\big(f(0^+)+f(0^-)\\big)=\\tfrac12(0+1)=\\tfrac12$, per lo stesso teorema di Dirichlet delle serie",c:true},
        {x:"$f(0)=1$"},
        {x:"$0$, perch&eacute; $xe^{-x}$ si annulla in $0$"},
        {x:"diverge, l'integrale non converge"}],
      hint:"$f(0^+)=0\\cdot e^0=0$ (ramo $xe^{-x}$), $f(0^-)=e^0=1$ (ramo $e^x$): la trasformata inversa media i due, non prende un ramo solo.",
      sol:"<b>Dirichlet anche per la trasformata (compito 16/11/2023).</b> Nel salto l'integrale di antitrasformata converge alla semisomma $\\tfrac12(f(0^+)+f(0^-))=\\tfrac12$, in perfetta analogia col teorema di Dirichlet per le serie. La soluzione ufficiale lo dichiara senza calcolare l'integrale (che l&igrave; &egrave; divergente e va regolarizzato): il valore &egrave; imposto dalla struttura, non dal conto."
    }]
  },

  { pool:"fourier", src:"Set 3 es.6", steps:[{
      t:"Per $f\\in L^1(\\mathbb{R})$ con poli in $C$, la VELOCIT&Agrave; di decadimento di $\\hat f(k)$ per $k\\to+\\infty$ &egrave; controllata da:",
      opts:[
        {x:"la pi&ugrave; piccola $|\\mathrm{Im}|$ fra i poli del semipiano INFERIORE (quelli che contano per $k>0$): $\\hat f(k)\\sim e^{-|\\mathrm{Im}\\,z^-_{\\min}|\\,k}$",c:true},
        {x:"la parte reale del polo pi&ugrave; vicino all'origine"},
        {x:"il numero totale di poli"},
        {x:"il polo con parte immaginaria pi&ugrave; grande in modulo"}],
      hint:"Per $k>0$ si chiude sotto: ogni residuo porta $e^{k\\,\\mathrm{Im}\\,z^-}$ con $\\mathrm{Im}\\,z^-<0$; il termine che muore pi&ugrave; lentamente domina, ed &egrave; quello col polo pi&ugrave; VICINO all'asse reale.",
      sol:"<b>Decadimento e posizione dei poli (Set 3 es.6).</b> Chiudendo sotto per $k>0$, $\\hat f(k)=-2\\pi i\\sum_i c_i^- e^{k\\,\\mathrm{Im}\\,z_i^-}$: il decadimento pi&ugrave; lento (il polo pi&ugrave; vicino all'asse) domina. Simmetricamente, per $k\\to-\\infty$ contano i poli SUPERIORI. Verifica sulla lorentziana $\\frac{1}{x^2+a^2}$: poli in $\\pm ia$, $\\hat f(k)=\\frac{\\pi}{a}e^{-a|k|}$ &mdash; il tasso $a$ &egrave; proprio $|\\mathrm{Im}|$ del polo. &Egrave; il principio dietro al confronto $\\hat f$ vs $\\hat g$ del 04/07/2023."
    }]
  },

  /* ===================== ESERCIZI (calcolo, multi-passo) ===================== */

  { pool:"fourier", src:"20230704 Es.3", steps:[
    { t:"$f(x)=\\frac{1}{(x^2+1)(x-2i)}$: trasformata via residui. Poli e semipiano per $k>0$:",
      opts:[
        {x:"poli in $z=\\pm i$ e $z=2i$; per $k>0$ si chiude SOTTO, dentro sta solo $z=-i$",c:true},
        {x:"poli in $z=\\pm i,\\,2i$; per $k>0$ si chiude sopra, dentro $z=i$ e $z=2i$"},
        {x:"un solo polo in $z=2i$; si chiude sopra"},
        {x:"nessun polo: la trasformata &egrave; nulla"}],
      hint:"$x^2+1=(x-i)(x+i)$: tre poli, di cui $z=i$ e $z=2i$ nel semipiano superiore e $z=-i$ in quello inferiore. Con $k>0$ chiudi sotto.",
      sol:"<b>Poli e chiusura (compito 04/07/2023).</b> $\\hat f(k)=\\int\\frac{e^{-ikz}}{(z^2+1)(z-2i)}dz$; poli $\\pm i,2i$. Per $k>0$ il lemma di Jordan impone il semipiano inferiore: l'unico polo racchiuso &egrave; $z=-i$ (verso orario $\\Rightarrow$ segno $-2\\pi i$).",
      cont:"Calcola il residuo in $z=-i$ &rarr;" },
    { t:"Il residuo in $z=-i$ e quindi $\\hat f(k>0)$:",
      opts:[
        {x:"$\\mathrm{Res}_{-i}=-\\tfrac{e^{-k}}{6}$, quindi $\\hat f(k>0)=-2\\pi i\\cdot(-\\tfrac{e^{-k}}{6})=\\tfrac{i\\pi}{3}e^{-k}$",c:true},
        {x:"$\\hat f(k>0)=\\tfrac{\\pi}{3}e^{-k}$ (reale)"},
        {x:"$\\hat f(k>0)=-\\tfrac{i\\pi}{3}e^{k}$"},
        {x:"$\\hat f(k>0)=2\\pi i\\,e^{-k}$"}],
      hint:"$\\lim_{z\\to-i}(z+i)\\frac{e^{-ikz}}{(z-i)(z+i)(z-2i)}=\\frac{e^{-k}}{(-2i)(-3i)}$; poi moltiplica per $-2\\pi i$.",
      sol:"<b>Formula del quoziente + verso orario (verificato ufficialmente).</b> $\\mathrm{Res}_{-i}=\\frac{e^{-ik(-i)}}{(-i-i)(-i-2i)}=\\frac{e^{-k}}{(-2i)(-3i)}=\\frac{e^{-k}}{-6}$. Con il $-2\\pi i$ del verso orario: $\\hat f(k>0)=\\frac{i\\pi}{3}e^{-k}$. Il risultato &egrave; immaginario puro: coerente, perch&eacute; $f$ non &egrave; reale.",
      cont:"Ora $k<0$ e la forma compatta &rarr;" },
    { t:"Per $k<0$ (chiusura sopra, poli $i$ e $2i$) e ricomposizione con $\\theta$:",
      opts:[
        {x:"$\\hat f(k<0)=i\\pi\\big(e^{k}-\\tfrac{2}{3}e^{2k}\\big)$; compatto $\\hat f(k)=\\tfrac{i\\pi}{3}e^{-k}\\theta(k)+i\\pi(e^{k}-\\tfrac{2}{3}e^{2k})\\theta(-k)$",c:true},
        {x:"$\\hat f(k<0)=0$"},
        {x:"$\\hat f(k<0)=\\tfrac{i\\pi}{3}e^{k}$"},
        {x:"$\\hat f(k)=\\tfrac{i\\pi}{3}e^{-|k|}$ per ogni $k$"}],
      hint:"Per $k<0$ chiudi sopra (verso antiorario, $+2\\pi i$) e sommi i residui in $z=i$ e $z=2i$. La funzione gradino $\\theta$ incolla i due regimi.",
      sol:"<b>Ricomposizione via $\\theta(k)$ (verificato ufficialmente).</b> Per $k<0$: $+2\\pi i[\\mathrm{Res}_i+\\mathrm{Res}_{2i}]=i\\pi(e^{k}-\\tfrac{2}{3}e^{2k})$. La forma compatta $\\hat f(k)=\\frac{i\\pi}{3}e^{-k}\\theta(k)+i\\pi(e^{k}-\\frac{2}{3}e^{2k})\\theta(-k)$ &egrave; obbligatoria: il termine gradino NON &egrave; un dettaglio estetico, distingue i due semipiani (trappola b01). La parte $g$ dell'esercizio confronta i decadimenti via posizione dei poli."
    }]
  },

  { pool:"fourier", src:"20240910 Es.3", steps:[
    { t:"$f(x)=\\frac{1}{(x+i)(x-1+2i)}$: entrambi i poli sono $z=-i$ e $z=1-2i$, con $\\mathrm{Im}<0$. Cosa succede per $k<0$?",
      opts:[
        {x:"si chiude SOPRA, dove NON ci sono poli: $\\hat f(k<0)=0$",c:true},
        {x:"si chiude sopra e si prendono entrambi i residui"},
        {x:"si chiude sotto anche per $k<0$"},
        {x:"la trasformata diverge"}],
      hint:"Entrambi i poli stanno nel semipiano inferiore. Per $k<0$ si chiude nel superiore, che &egrave; vuoto: integrale nullo.",
      sol:"<b>Semipiano vuoto $\\Rightarrow$ trasformata nulla (compito 10/09/2024).</b> Con tutti i poli in $\\mathrm{Im}\\,z<0$, per $k<0$ (chiusura superiore, lemma di Jordan) non c'&egrave; nulla dentro il contorno: $\\hat f(k<0)=0$. La trasformata &egrave; supportata solo su $k>0$: $\\hat f(k)=[\\cdots]\\,\\theta(k)$.",
      cont:"Calcola il caso $k>0$ &rarr;" },
    { t:"Per $k>0$ (chiusura sotto, verso orario) la trasformata &egrave;:",
      opts:[
        {x:"$\\hat f(k)=-2\\pi i\\Big(\\tfrac{e^{-k}}{i-1}+\\tfrac{e^{-2k-ik}}{1-i}\\Big)\\theta(k)$",c:true},
        {x:"$\\hat f(k)=+2\\pi i\\big(\\mathrm{Res}_{-i}+\\mathrm{Res}_{1-2i}\\big)$"},
        {x:"$\\hat f(k)=-2\\pi i\\,\\mathrm{Res}_{-i}$ soltanto"},
        {x:"$\\hat f(k)=\\pi i\\,e^{-k}$"}],
      hint:"Entrambi i poli sono racchiusi; $\\mathrm{Res}_{-i}=\\frac{e^{-k}}{-i-1+2i}=\\frac{e^{-k}}{i-1}$ e $\\mathrm{Res}_{1-2i}=\\frac{e^{-2k-ik}}{1-i}$; poi $-2\\pi i$ per il verso.",
      sol:"<b>Somma dei residui col segno orario (verificato ufficialmente).</b> $\\mathrm{Res}_{-i}=\\frac{e^{-ik(-i)}}{(-i-1+2i)}=\\frac{e^{-k}}{i-1}$; $\\mathrm{Res}_{1-2i}=\\frac{e^{-ik(1-2i)}}{(1-2i+i)}=\\frac{e^{-2k-ik}}{1-i}$. Il verso orario d&agrave; $\\hat f(k)=-2\\pi i\\big(\\frac{e^{-k}}{i-1}+\\frac{e^{-2k-ik}}{1-i}\\big)\\theta(k)$. Il caso in cui i poli stanno tutti da un lato &egrave; il pi&ugrave; rapido: met&agrave; della retta d&agrave; zero."
    }]
  },

  { pool:"fourier", src:"20231116 Es.3", steps:[
    { t:"$f(x)=xe^{-x}\\theta(x)+e^x\\theta(-x)$: la trasformata si calcola come somma di due integrali elementari. $\\hat f(k)$ vale:",
      opts:[
        {x:"$\\hat f(k)=\\dfrac{1}{1-ik}+\\dfrac{1}{(1+ik)^2}$",c:true},
        {x:"$\\hat f(k)=\\dfrac{1}{1+ik}+\\dfrac{1}{1-ik}$"},
        {x:"$\\hat f(k)=\\dfrac{1}{(1-ik)^2}$"},
        {x:"$\\hat f(k)=\\dfrac{2}{1+k^2}$"}],
      hint:"$\\int_{-\\infty}^0 e^{(1-ik)x}dx=\\frac{1}{1-ik}$; $\\int_0^\\infty x e^{-(1+ik)x}dx=-\\frac{d}{d\\alpha}\\frac{1}{\\alpha}\\big|_{\\alpha=1+ik}=\\frac{1}{(1+ik)^2}$.",
      sol:"<b>Trasformata diretta via integrali (compito 16/11/2023).</b> Il ramo $e^x\\theta(-x)$ d&agrave; $\\frac{1}{1-ik}$; il ramo $xe^{-x}\\theta(x)$ si ottiene con il trucco $x\\,e^{-\\alpha x}=-\\frac{d}{d\\alpha}e^{-\\alpha x}$ valutato in $\\alpha=1+ik$, dando $\\frac{1}{(1+ik)^2}$ (polo DOPPIO, non semplice). Questi qui non richiedono nemmeno i residui, ma li richiede l'antitrasformata.",
      cont:"Verifica in $x=0$ &rarr;" },
    { t:"Antitrasformando, per $x=0$ (punto di discontinuit&agrave;) si trova:",
      opts:[
        {x:"$\\hat{\\hat f}(0)=\\tfrac12$, semisomma dei limiti $\\tfrac12(0+1)$",c:true},
        {x:"$\\hat{\\hat f}(0)=1$"},
        {x:"$\\hat{\\hat f}(0)=0$"},
        {x:"$\\hat{\\hat f}(0)=\\tfrac14$"}],
      hint:"L'antitrasformata ricostruisce $f$ per $x\\neq0$; nel salto d&agrave; la media dei due rami $f(0^+)=0$ e $f(0^-)=1$.",
      sol:"<b>Chiusura del conto via Dirichlet.</b> Per $x\\neq0$ l'antitrasformata riproduce $f$; in $x=0$, salto fra $0$ e $1$, d&agrave; la semisomma $\\tfrac12$. Non serve calcolare l'integrale divergente: il <b>teorema di Dirichlet</b> (esteso alla trasformata) fissa il valore. &Egrave; il gemello continuo dell'identit&agrave; delle serie."
    }]
  },

  { pool:"fourier", src:"Set 3 es.7", steps:[
    { t:"$f_2(x)=\\dfrac{x}{(1+x^2)^2}=\\dfrac{x}{(x-i)^2(x+i)^2}$: che natura hanno i poli e come si procede per $k>0$?",
      opts:[
        {x:"poli DOPPI in $\\pm i$; per $k>0$ si chiude sotto e si usa la formula del polo doppio (una derivata) in $z=-i$",c:true},
        {x:"poli semplici in $\\pm i$; residuo diretto"},
        {x:"un polo quadruplo in $0$"},
        {x:"nessun polo: si integra per parti"}],
      hint:"$(1+x^2)^2$ al denominatore raddoppia ogni zero: $\\pm i$ diventano poli di ordine 2. Il residuo di un polo doppio richiede $\\frac{d}{dz}$.",
      sol:"<b>Poli doppi (Set 3 es.7).</b> $\\mathrm{Res}(f_2 e^{-ikz},-i)=\\lim_{z\\to-i}\\frac{d}{dz}\\big[(z+i)^2 f_2 e^{-ikz}\\big]$: la formula del polo di ordine $m=2$ chiede UNA derivata. Chiudere sotto per $k>0$ (Jordan) porta il verso orario, quindi $-2\\pi i$.",
      cont:"Il risultato compatto &rarr;" },
    { t:"Il risultato per ogni $k$ &egrave;:",
      opts:[
        {x:"$\\hat f_2(k)=-\\dfrac{i\\pi}{4}\\,k\\,e^{-|k|}$",c:true},
        {x:"$\\hat f_2(k)=\\dfrac{\\pi}{4}e^{-|k|}$"},
        {x:"$\\hat f_2(k)=-\\dfrac{i\\pi}{4}e^{-|k|}$ (senza il fattore $k$)"},
        {x:"$\\hat f_2(k)=\\dfrac{i\\pi}{4}k^2 e^{-|k|}$"}],
      hint:"Per $k>0$ esce $-\\frac{i\\pi}{4}ke^{-k}$, per $k<0$ (polo $+i$) $-\\frac{i\\pi}{4}ke^{k}$: si fondono in $ke^{-|k|}$.",
      sol:"<b>Trasformata di un polo doppio (verificato ufficialmente).</b> $\\hat f_2(k)=-\\frac{i\\pi}{4}ke^{-|k|}$: il fattore lineare $k$ &egrave; la firma del polo doppio (deriva dalla derivata nel residuo). $f_2$ &egrave; dispari e reale $\\Rightarrow$ $\\hat f_2$ &egrave; immaginaria pura e dispari: due controlli di coerenza superati."
    }]
  },

  { pool:"fourier", src:"Set 3 es.7", steps:[
    { t:"$f_3(x)=\\dfrac{\\cos(ax)}{x^2+b^2}$ ($a,b>0$). Scrivendo $\\cos(ax)=\\tfrac12(e^{iax}+e^{-iax})$, quanti CASI in $k$ occorre distinguere?",
      opts:[
        {x:"tre: $k>a$, $-a<k<a$, $k<-a$ &mdash; perch&eacute; i due esponenziali cambiano semipiano a soglie diverse",c:true},
        {x:"uno solo: si chiude sempre sopra"},
        {x:"due: $k>0$ e $k<0$"},
        {x:"nessuno: la trasformata &egrave; costante"}],
      hint:"Ogni esponenziale $e^{\\pm iax}e^{-ikx}=e^{-i(k\\mp a)x}$ ha il proprio segno di frequenza $k\\mp a$: le due soglie sono $k=a$ e $k=-a$.",
      sol:"<b>Distinzione dei casi in $k$ (Set 3 es.7).</b> $\\frac12 e^{iax}$ porta frequenza $k-a$, $\\frac12 e^{-iax}$ porta $k+a$; ciascun termine si chiude nel proprio semipiano secondo il segno della SUA frequenza. Le soglie $k=\\pm a$ generano tre regioni. NON si forzano entrambi gli esponenziali nello stesso contorno: vogliono semipiani opposti quando $-a<k<a$.",
      cont:"La forma compatta &rarr;" },
    { t:"Ricomponendo i tre casi, la trasformata &egrave;:",
      opts:[
        {x:"$\\hat f_3(k)=\\dfrac{\\pi}{2b}\\big(e^{-b|k-a|}+e^{-b|a+k|}\\big)$",c:true},
        {x:"$\\hat f_3(k)=\\dfrac{\\pi}{b}e^{-b|k|}$"},
        {x:"$\\hat f_3(k)=\\dfrac{\\pi}{2b}e^{-b|k|}\\cos(ab)$"},
        {x:"$\\hat f_3(k)=\\dfrac{\\pi}{2b}\\big(e^{-b|k-a|}-e^{-b|a+k|}\\big)$"}],
      hint:"Ogni polo $\\pm ib$ d&agrave; un $\\frac{\\pi}{2b}$; i moduli $|k-a|$ e $|k+a|$ raccolgono i tre casi in una sola formula.",
      sol:"<b>Trasformata di $\\cos(ax)/(x^2+b^2)$ (verificato ufficialmente).</b> I tre regimi si fondono in $\\hat f_3(k)=\\frac{\\pi}{2b}(e^{-b|k-a|}+e^{-b|a+k|})$. La struttura a due lorentziane traslate a $\\pm a$ &egrave; la firma della modulazione $\\cos(ax)$: la moltiplicazione per $\\cos(ax)$ nello spazio $x$ trasla lo spettro di $\\pm a$ (teorema di modulazione)."
    }]
  },

  { pool:"fourier", src:"Set 3 es.2", steps:[
    { t:"$f_a(x)=e^{ax}$ su $[-\\pi,\\pi]$. I coefficienti esponenziali e la somma $s_1=\\sum_{n=1}^{\\infty}\\frac{(-1)^n}{n^2+a^2}$ si ottengono cos&igrave;: prima $f_n$, poi si valuta in $x=0$. I coefficienti sono:",
      opts:[
        {x:"$f_n=\\sqrt{\\tfrac{2}{\\pi}}\\,\\dfrac{(-1)^n\\sinh(a\\pi)}{a-in}$",c:true},
        {x:"$f_n=\\dfrac{\\sinh(a\\pi)}{a+in}$"},
        {x:"$f_n=\\dfrac{(-1)^n}{a^2+n^2}$"},
        {x:"$f_n=e^{an}$"}],
      hint:"$f_n=\\frac{1}{\\sqrt{2\\pi}}\\int_{-\\pi}^{\\pi}e^{(a-in)x}dx=\\frac{1}{\\sqrt{2\\pi}}\\frac{e^{(a-in)\\pi}-e^{-(a-in)\\pi}}{a-in}$; ricorda $e^{\\mp in\\pi}=(-1)^n$.",
      sol:"<b>Coefficienti di $e^{ax}$ (Set 3 es.2, verificato).</b> $f_n=\\frac{1}{\\sqrt{2\\pi}}\\frac{e^{(a-in)\\pi}-e^{-(a-in)\\pi}}{a-in}=\\sqrt{\\frac{2}{\\pi}}\\frac{(-1)^n\\sinh(a\\pi)}{a-in}$, usando $e^{\\pm in\\pi}=(-1)^n$ e la definizione di $\\sinh$. Questi coefficienti generano tutte e tre le somme $s_1,s_2,s_3$ dell'esercizio.",
      cont:"Valuta in $x=0$ (continuo) &rarr;" },
    { t:"In $x=0$ la funzione &egrave; CONTINUA ($f(0)=1$). Uguagliando $S_a(0)=f(0)$ si ottiene:",
      opts:[
        {x:"$s_1=\\dfrac{1}{2a}\\Big(\\dfrac{\\pi}{\\sinh(\\pi a)}-\\dfrac{1}{a}\\Big)$",c:true},
        {x:"$s_1=\\dfrac{\\pi}{a}\\coth(\\pi a)$"},
        {x:"$s_1=\\dfrac{\\pi^2}{6}$"},
        {x:"$s_1=\\dfrac{1}{a^2}$"}],
      hint:"$S_a(0)=\\frac{\\sinh(a\\pi)}{\\pi}\\big[\\frac1a+2a\\,s_1\\big]$ e va posto uguale a $f(0)=1$ perch&eacute; $e^{ax}$ &egrave; continua in $0$.",
      sol:"<b>Identit&agrave; via continuit&agrave; in $x=0$ (verificato ufficialmente).</b> $S_a(0)=\\frac{\\sinh(a\\pi)}{\\pi}(\\frac1a+2a\\,s_1)$; poich&eacute; $f$ &egrave; continua in $0$, il <b>teorema di Dirichlet</b> d&agrave; $S_a(0)=f(0)=1$, da cui $s_1=\\frac{1}{2a}(\\frac{\\pi}{\\sinh\\pi a}-\\frac1a)$. Il punto $x=0$ &egrave; scelto perch&eacute; l&igrave; $f$ &egrave; continua: nessuna semisomma, si usa $f(0)$ direttamente."
    }]
  },

  { pool:"fourier", src:"Set 3 es.2", steps:[
    { t:"Stessa $f_a(x)=e^{ax}$, ma ora si valuta in $x=\\pi$ per ottenere $s_2=\\sum_{n=-\\infty}^{\\infty}\\frac{1}{n^2+a^2}$. Quale valore prende la serie in $\\pi$?",
      opts:[
        {x:"la semisomma $\\tfrac12(f_a(\\pi)+f_a(-\\pi))=\\tfrac12(e^{a\\pi}+e^{-a\\pi})=\\cosh(a\\pi)$: in $\\pi$ la funzione periodica &egrave; DISCONTINUA",c:true},
        {x:"$f_a(\\pi)=e^{a\\pi}$, la funzione &egrave; continua"},
        {x:"$0$, per antisimmetria"},
        {x:"$1$, come in $x=0$"}],
      hint:"Estendendo $e^{ax}$ periodicamente, in $x=\\pi$ i due rami valgono $e^{a\\pi}$ (da sinistra) ed $e^{-a\\pi}$ (da destra, cio&egrave; $-\\pi$): salto.",
      sol:"<b>Identit&agrave; via DISCONTINUIT&Agrave; in $x=\\pi$ (verificato ufficialmente).</b> La periodicizzazione di $e^{ax}$ ha un salto in $\\pi$: per il <b>teorema di Dirichlet</b> $S_a(\\pi)=\\tfrac12(e^{a\\pi}+e^{-a\\pi})=\\cosh(a\\pi)$, NON $e^{a\\pi}$. &Egrave; il contrasto istruttivo con $s_1$: stessa funzione, punto continuo ($0$) vs punto di salto ($\\pi$) &mdash; il secondo membro cambia natura.",
      cont:"Concludi $s_2$ &rarr;" },
    { t:"Da $S_a(\\pi)=\\cosh(a\\pi)$ segue:",
      opts:[
        {x:"$s_2=\\dfrac{\\pi}{a}\\coth(\\pi a)=\\dfrac{\\pi}{a}\\dfrac{\\cosh(a\\pi)}{\\sinh(a\\pi)}$",c:true},
        {x:"$s_2=\\dfrac{\\pi}{a}\\tanh(\\pi a)$"},
        {x:"$s_2=\\dfrac{\\pi^2}{6}$"},
        {x:"$s_2=\\dfrac{1}{a^2}$"}],
      hint:"$S_a(\\pi)=\\frac{a\\sinh(a\\pi)}{\\pi}s_2$; poni uguale a $\\cosh(a\\pi)$ e isola $s_2$.",
      sol:"<b>Somma bilatera $s_2$ (verificato ufficialmente).</b> $S_a(\\pi)=\\frac{a\\sinh(a\\pi)}{\\pi}s_2=\\cosh(a\\pi)$ d&agrave; $s_2=\\frac{\\pi}{a}\\coth(\\pi a)$. Verifica di coerenza: ponendo $a=b$ in $s_3$ si riottiene $s_2$ (usando $\\sinh 2x=2\\sinh x\\cosh x$), come richiede l'esercizio."
    }]
  }

];

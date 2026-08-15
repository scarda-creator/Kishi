Q.laurent = [

  /* ===================== CONCETTUALI + MODUS (prima meta') ===================== */

  { pool:"laurent", src:"nucleo 12, tappa 04", steps:[{
      t:"La serie di Laurent di $f$ attorno a $z_0$, valida nella corona $r<|z-z_0|<R$, e':",
      opts:[
        {x:"$\\displaystyle\\sum_{n=-\\infty}^{+\\infty} a_n (z-z_0)^n$ con $a_n=\\dfrac{1}{2\\pi i}\\oint_\\gamma \\dfrac{f(z)}{(z-z_0)^{n+1}}dz$: ammette potenze NEGATIVE ed e' unica in quella corona",c:true},
        {x:"$\\displaystyle\\sum_{n=0}^{+\\infty} \\dfrac{f^{(n)}(z_0)}{n!}(z-z_0)^n$: e' la serie di Taylor, con i soli indici $n\\ge0$"},
        {x:"$\\displaystyle\\sum_{n=-\\infty}^{+\\infty} a_n (z-z_0)^n$ con coefficienti $a_n$ identici in ogni corona"},
        {x:"una serie di sole potenze negative di $(z-z_0)$"}],
      hint:"Taylor e' il caso particolare senza parte principale (nessuna potenza negativa), e vale in un DISCO; Laurent vale in una corona e i suoi coefficienti dipendono dalla corona scelta.",
      sol:"<b>Teorema di Laurent.</b> Se $f$ e' olomorfa nella corona $r<|z-z_0|<R$, vi si sviluppa in modo UNICO come $\\sum_{n=-\\infty}^{+\\infty}a_n(z-z_0)^n$, con $a_n=\\frac{1}{2\\pi i}\\oint_\\gamma f(z)(z-z_0)^{-n-1}dz$ su un qualunque cerchio $\\gamma$ interno alla corona. La parte con $n<0$ e' la <b>parte principale</b>: e' cio&egrave; che Taylor non pu&ograve; avere. L'unicit&agrave; e' PER corona, non globale."
    }]
  },

  { pool:"laurent", src:"nucleo 12, tappa 04 (trabocchetto dichiarato)", steps:[{
      t:"Quante serie di Laurent DISTINTE ha $f(z)=\\dfrac{1}{z(z-1)}$ centrate in $z_0=0$?",
      opts:[
        {x:"DUE: una nella corona $0<|z|<1$ e una diversa in $|z|>1$; e' la corona a determinare lo sviluppo",c:true},
        {x:"UNA sola, valida ovunque tranne nei due poli $0$ e $1$"},
        {x:"infinite, una per ogni punto del piano"},
        {x:"nessuna, perch&eacute; $f$ ha due poli e non e' sviluppabile"}],
      hint:"I due poli $0$ e $1$ dividono il piano in due corone attorno all'origine, $0<|z|<1$ e $|z|>1$: in ciascuna $\\frac{1}{z-1}$ si espande in modo diverso (serie geometrica in $z$ oppure in $1/z$).",
      sol:"<b>Teorema di Laurent (dipendenza dalla corona).</b> Le singolarit&agrave; $0$ e $1$ delimitano DUE corone centrate in $0$. In $0<|z|<1$ si espande $\\frac{1}{z-1}=-\\sum_{n\\ge0}z^n$; in $|z|>1$ si espande $\\frac{1}{z-1}=\\frac1z\\sum_{n\\ge0}z^{-n}$. Due corone, due serie. Un esercizio che chiede 'lo sviluppo di Laurent' senza dichiarare la corona e' mal posto: <b>la corona va sempre specificata</b>."
    }]
  },

  { pool:"laurent", src:"nucleo 12, tappa 04", steps:[{
      t:"Come si classifica una singolarit&agrave; ISOLATA $z_0$ guardando la parte principale della sua serie di Laurent?",
      opts:[
        {x:"parte principale assente &rarr; eliminabile; finita, fino a $(z-z_0)^{-m}$ &rarr; polo di ordine $m$; con infiniti termini &rarr; essenziale",c:true},
        {x:"si guarda solo il segno di $a_{-1}$: positivo &rarr; polo, negativo &rarr; essenziale"},
        {x:"si conta il numero di potenze POSITIVE: nessuna &rarr; polo, infinite &rarr; essenziale"},
        {x:"dipende dalla corona: la stessa singolarit&agrave; pu&ograve; essere polo o essenziale"}],
      hint:"La classificazione riguarda la parte NEGATIVA (principale) dello sviluppo nella corona che TOCCA la singolarit&agrave;, cio&egrave; $0<|z-z_0|<\\rho$; e' intrinseca, non dipende dalla corona.",
      sol:"<b>Classificazione delle singolarit&agrave; isolate.</b> Nello sviluppo nella corona forata $0<|z-z_0|<\\rho$: <i>eliminabile</i> = parte principale nulla (equivale a $\\lim_{z\\to z_0}f$ finito, teorema di Riemann); <i>polo di ordine $m$</i> = parte principale che si arresta a $(z-z_0)^{-m}$ (equivale a $(z-z_0)^m f$ con limite finito non nullo); <i>essenziale</i> = infiniti termini negativi. La classe e' intrinseca al punto."
    }]
  },

  { pool:"laurent", src:"nucleo 13, tappa 01 (modus)", steps:[{
      t:"MODUS OPERANDI. Davanti a una $f$ di cui serve il residuo in $z_0$, come si decide fra USARE LA FORMULA del residuo e SVILUPPARE IN SERIE?",
      opts:[
        {x:"quoziente con polo semplice &rarr; formula $P/Q'$; polo di ordine $2$ &rarr; formula con una derivata; polo di ordine $\\ge3$, funzioni trascendenti intrecciate o singolarit&agrave; essenziale &rarr; sviluppo in serie e lettura di $a_{-1}$",c:true},
        {x:"sempre la formula del polo di ordine $m$: e' universale e non sbaglia mai"},
        {x:"sempre lo sviluppo in serie: la formula del residuo e' solo un caso particolare inutile"},
        {x:"si sceglie a caso: i due metodi danno risultati diversi e si prende la media"}],
      hint:"Il criterio e' il COSTO: la formula del polo di ordine $m$ richiede $m-1$ derivate di un quoziente, che per $m$ grande o funzioni trascendenti diventa pesantissima; lo sviluppo legge direttamente il coefficiente di $(z-z_0)^{-1}$.",
      sol:"<b>Criterio di scelta del metodo (regola operativa del nucleo 13).</b> Le tre formule (polo semplice $\\lim(z-z_0)f$; quoziente $P/Q'$; polo di ordine $m$ con $\\frac{1}{(m-1)!}\\frac{d^{m-1}}{dz^{m-1}}[(z-z_0)^m f]$) coprono i casi facili. Ma per un polo di ordine $\\ge3$ o quando numeratore e denominatore sono serie trascendenti (es. $\\sin,\\cos,\\exp$), conviene SVILUPPARE e leggere $a_{-1}$. Per una singolarit&agrave; ESSENZIALE lo sviluppo e' l'UNICA via: nessuna formula d&agrave; $\\mathrm{Res}(e^{1/z},0)=1$."
    }]
  },

  { pool:"laurent", src:"nucleo 12, tappa 04", steps:[{
      t:"Perch&eacute; il coefficiente $a_{-1}$ (il residuo) ha uno statuto speciale fra tutti i coefficienti di Laurent?",
      opts:[
        {x:"perch&eacute; integrando la serie termine a termine su un cerchio, ogni potenza $(z-z_0)^n$ con $n\\ne-1$ d&agrave; zero, e sopravvive solo $2\\pi i\\,a_{-1}$",c:true},
        {x:"perch&eacute; e' sempre il coefficiente piu' grande in modulo"},
        {x:"perch&eacute; e' l'unico coefficiente reale"},
        {x:"perch&eacute; e' il primo termine della parte regolare"}],
      hint:"Ricorda l'integrale fondamentale $\\oint (z-z_0)^n dz = 2\\pi i$ se $n=-1$, e $0$ per ogni altro intero $n$.",
      sol:"<b>Definizione di residuo + integrale fondamentale (nucleo 12, tappa 01).</b> Da $\\oint_\\gamma (z-z_0)^n dz=2\\pi i\\,\\delta_{n,-1}$ segue $\\oint_\\gamma f\\,dz=2\\pi i\\,a_{-1}$: solo la potenza $-1$ sopravvive all'integrazione su una chiusa. Quel numero $a_{-1}$ e' il <b>residuo</b>, ed e' l'unica informazione dello sviluppo che il teorema dei residui usa."
    }]
  },

  { pool:"laurent", src:"nucleo 13, tappa 01", steps:[{
      t:"Le formule per il residuo in un polo. Quale terna e' corretta?",
      opts:[
        {x:"polo semplice: $\\lim_{z\\to z_0}(z-z_0)f$; quoziente $P/Q$ con $Q(z_0)=0,\\ Q'(z_0)\\ne0$: $\\dfrac{P(z_0)}{Q'(z_0)}$; polo di ordine $m$: $\\dfrac{1}{(m-1)!}\\lim_{z\\to z_0}\\dfrac{d^{m-1}}{dz^{m-1}}[(z-z_0)^m f]$",c:true},
        {x:"polo semplice: $\\lim (z-z_0)^2 f$; polo di ordine $m$: $\\dfrac{1}{m!}\\dfrac{d^m}{dz^m}[(z-z_0)^m f]$"},
        {x:"polo semplice: $f(z_0)$; polo di ordine $m$: $m!\\,f^{(m)}(z_0)$"},
        {x:"in ogni caso $\\mathrm{Res}=\\lim_{z\\to z_0}(z-z_0)f$, indipendentemente dall'ordine"}],
      hint:"Nel polo di ordine $m$ si moltiplica per $(z-z_0)^m$ per cancellare la parte principale, si deriva $m-1$ volte (non $m$) e si divide per $(m-1)!$.",
      sol:"<b>Formule del residuo (nucleo 13).</b> Per un polo di ordine $m$: $(z-z_0)^m f$ e' olomorfa in $z_0$, e la sua serie di Taylor ha in posizione $m-1$ proprio $a_{-1}$; da qui $\\mathrm{Res}=\\frac{1}{(m-1)!}\\lim \\frac{d^{m-1}}{dz^{m-1}}[(z-z_0)^m f]$. Il caso $m=1$ d&agrave; $\\lim(z-z_0)f$; la variante $P/Q'$ e' la piu' usata perch&eacute; evita di fattorizzare $Q$."
    }]
  },

  { pool:"laurent", src:"nucleo 12, tappa 04 (modus)", steps:[{
      t:"MODUS OPERANDI. Sequenza corretta per classificare la singolarit&agrave; in $z_0$ di un QUOZIENTE e trovarne il residuo:",
      opts:[
        {x:"(1) sviluppa numeratore e denominatore fino al primo termine non nullo; (2) conta l'ordine dello zero di ciascuno; (3) ordine del polo $=$ (zero denom.) $-$ (zero numer.), se positivo; (4) leggi $a_{-1}$ dallo sviluppo del quoziente",c:true},
        {x:"(1) calcola $f(z_0)$; (2) se e' infinito e' un polo, altrimenti eliminabile; (3) applica sempre la formula del polo semplice"},
        {x:"(1) fattorizza completamente; (2) applica il teorema dei residui a tutto il piano"},
        {x:"(1) sostituisci $z=e^{i\\theta}$; (2) integra sul cerchio unitario"}],
      hint:"Non semplificare l'espressione: sviluppa numeratore e denominatore in serie fino al primo termine non nullo e CONTA gli ordini. E' piu' rapido e non sbaglia l'ordine del polo.",
      sol:"<b>Criterio dell'ordine di zeri e poli (nucleo 12, riga 'zeri').</b> $\\frac{\\text{zero di ordine }p}{\\text{zero di ordine }q}$ d&agrave; polo di ordine $q-p$ se $q>p$ (zero di ordine $p-q$ altrimenti). Determinato l'ordine, se e' basso si applica la formula, se e' alto o intreccia trascendenti si legge $a_{-1}$ dallo sviluppo. <b>Verificare l'ordine PRIMA di usare la formula del residuo</b> e' la trappola dichiarata in b01: usare la formula del polo semplice su un polo doppio d&agrave; un risultato senza senso."
    }]
  },

  { pool:"laurent", src:"nucleo 12, tappa 04 (Casorati-Weierstrass)", steps:[{
      t:"Vicino a una singolarit&agrave; ESSENZIALE $z_0$, il comportamento di $f$ e' descritto da:",
      opts:[
        {x:"il teorema di Casorati-Weierstrass: l'immagine di ogni intorno forato di $z_0$ e' DENSA in $\\mathbb{C}$ (e per Picard $f$ assume ogni valore, tranne al piu' uno, infinite volte)",c:true},
        {x:"$|f(z)|\\to+\\infty$ come per un polo, solo piu' velocemente"},
        {x:"$f$ tende a un limite finito, come nel caso eliminabile"},
        {x:"$f$ e' limitata ma non ha limite"}],
      hint:"In una essenziale il limite NON esiste in alcun senso: avvicinandosi da direzioni diverse $f$ pu&ograve; tendere a valori diversi o non tendere affatto. $e^{1/z}$ in $0$: lungo l'asse reale positivo $\\to+\\infty$, lungo il negativo $\\to0$.",
      sol:"<b>Teorema di Casorati-Weierstrass.</b> Se $z_0$ e' essenziale, per ogni intorno forato $U$ di $z_0$ l'insieme $f(U)$ e' denso in $\\mathbb{C}$: $f$ si avvicina arbitrariamente a QUALSIASI valore complesso. Il grande teorema di Picard rafforza: $f$ assume ogni valore (al piu' uno escluso) infinite volte. E' l'opposto del polo, dove $|f|\\to\\infty$ in modo ordinato. Esempio: $e^{1/z}=\\sum_{n\\ge0}\\frac{1}{n!z^n}$, parte principale con INFINITI termini."
    }]
  },

  { pool:"laurent", src:"nucleo 13 (residuo all'infinito)", steps:[{
      t:"Il residuo all'infinito si calcola con:",
      opts:[
        {x:"$\\mathrm{Res}_\\infty f=-\\mathrm{Res}_{w=0}\\!\\left[\\dfrac{1}{w^2}f\\!\\left(\\dfrac1w\\right)\\right]$: attenzione al segno MENO",c:true},
        {x:"$\\mathrm{Res}_\\infty f=+\\mathrm{Res}_{w=0}\\!\\left[\\dfrac{1}{w^2}f\\!\\left(\\dfrac1w\\right)\\right]$"},
        {x:"$\\mathrm{Res}_\\infty f=\\lim_{z\\to\\infty} z\\,f(z)$"},
        {x:"$\\mathrm{Res}_\\infty f=+\\sum_{\\text{poli finiti}}\\mathrm{Res}$, sempre"}],
      hint:"La sostituzione $z=1/w$ porta $dz=-dw/w^2$: il segno meno viene da $dz$ e dall'inversione dell'orientamento del cerchio all'infinito.",
      sol:"<b>Formula del residuo all'infinito.</b> $\\mathrm{Res}_\\infty f=-\\mathrm{Res}_{w=0}[w^{-2}f(1/w)]$, cio&egrave; MENO il coefficiente di $z^{-1}$ nello sviluppo di Laurent attorno a $\\infty$. Teorema della somma dei residui: per una funzione con sole singolarit&agrave; isolate (poli finiti, nessun taglio) la somma di TUTTI i residui, incluso quello all'infinito, e' nulla; da qui $\\mathrm{Res}_\\infty=-\\sum(\\text{residui finiti})$, ma SOLO in assenza di tagli."
    }]
  },

  { pool:"laurent", src:"20240910 Es.1 (singolarita' non isolata)", steps:[{
      t:"$f(z)=\\dfrac{1}{\\sin(z^{-2})}$ ha in $z=0$:",
      opts:[
        {x:"una singolarit&agrave; NON isolata: un punto di accumulazione dei poli $z_{k}=\\pm(k\\pi)^{-1/2}\\to0$; il teorema dei residui NON si applica in $z=0$",c:true},
        {x:"un polo di ordine $2$, perch&eacute; compare $z^{-2}$"},
        {x:"una singolarit&agrave; essenziale isolata, con residuo leggibile dallo sviluppo"},
        {x:"un punto regolare, perch&eacute; $\\sin$ non si annulla mai"}],
      hint:"I poli sono dove $z^{-2}=k\\pi$, cio&egrave; $z=\\pm(k\\pi)^{-1/2}$ per $k=1,2,\\dots$: sono infiniti e si ADDENSANO verso $0$. Una singolarit&agrave; e' isolata solo se ha un intorno forato privo di altre singolarit&agrave;.",
      sol:"<b>Definizione di singolarit&agrave; isolata.</b> $z=0$ NON e' isolata: ogni suo intorno forato contiene infiniti poli $z_k=\\pm(k\\pi)^{-1/2}$. Non essendo isolata, non ha uno sviluppo di Laurent in una corona $0<|z|<\\rho$, e il teorema dei residui non e' applicabile in quel punto. E' la trappola censita per il 10/09/2024: applicare la formula del residuo a $z=0$ e' l'errore che l'appello chiede apposta di evitare."
    }]
  },

  { pool:"laurent", src:"nucleo 12, tappa 04", steps:[{
      t:"Che tipo di singolarit&agrave; ha $\\dfrac{\\sin z}{z}$ in $z=0$, e quale $\\dfrac{e^z}{z^3}$?",
      opts:[
        {x:"$\\frac{\\sin z}{z}$: eliminabile (residuo $0$); $\\frac{e^z}{z^3}$: polo di ordine $3$",c:true},
        {x:"entrambe poli semplici"},
        {x:"$\\frac{\\sin z}{z}$: polo semplice; $\\frac{e^z}{z^3}$: essenziale"},
        {x:"$\\frac{\\sin z}{z}$: essenziale; $\\frac{e^z}{z^3}$: eliminabile"}],
      hint:"$\\sin z=z-\\frac{z^3}{6}+\\cdots$ ha uno zero di ordine $1$ in $0$: diviso $z$ resta regolare. $e^z$ non si annulla in $0$: diviso $z^3$ d&agrave; esattamente un polo triplo.",
      sol:"<b>Criterio dell'ordine (nucleo 12).</b> $\\frac{\\sin z}{z}=1-\\frac{z^2}{6}+\\cdots$: parte principale assente, singolarit&agrave; ELIMINABILE, residuo $0$ (teorema di Riemann). $\\frac{e^z}{z^3}$: numeratore non nullo in $0$, denominatore zero di ordine $3$ &rarr; polo di ordine $3$; parte principale $\\frac{1}{z^3}+\\frac{1}{z^2}+\\frac{1}{2z}+\\cdots$, residuo $\\frac12$."
    }]
  },

  { pool:"laurent", src:"nucleo 12, tappa 03/04 (Taylor vs Laurent)", steps:[{
      t:"MODUS OPERANDI. Per ottenere la parte principale di un quoziente $\\dfrac{N(z)}{D(z)}$ in $z_0$, quando conviene la DIVISIONE fra serie e quando basta uno sviluppo diretto?",
      opts:[
        {x:"si sviluppano $N$ e $D$ in Taylor attorno a $z_0$, si mette in evidenza la potenza dominante di $D$ e si divide la serie residua come $\\frac{1}{1-u}=1+u+u^2+\\cdots$; e' necessario quando $D$ ha uno zero di ordine $\\ge2$",c:true},
        {x:"si deriva $N/D$ ripetutamente e si valuta in $z_0$, come nel Taylor reale"},
        {x:"si sostituisce $z_0$ direttamente nella frazione"},
        {x:"si usa sempre la regola di de l'Hopital fino a togliere l'indeterminazione"}],
      hint:"Metti in evidenza $z^{k}$ dal denominatore ($k=$ ordine dello zero), poi il fattore residuo e' $1+(\\text{serie che parte da }z)$: la si inverte con la serie geometrica $1/(1+u)=1-u+u^2-\\cdots$.",
      sol:"<b>Divisione fra serie (metodo standard, nucleo 12).</b> Scritto $D=c_k(z-z_0)^k[1+u(z)]$ con $u\\to0$, si ha $\\frac{1}{D}=\\frac{1}{c_k(z-z_0)^k}[1-u+u^2-\\cdots]$; moltiplicando per la serie di $N$ e raccogliendo le potenze fino a $(z-z_0)^{-1}$ si legge il residuo. E' la via robusta quando il polo ha ordine $\\ge2$ e le formule con le derivate diventano pesanti. Il 'Taylor iterato' del numeratore e del denominatore fino al primo termine non nullo serve solo a fissare gli ordini."
    }]
  },

  { pool:"laurent", src:"nucleo 12, tappa 04 (essenziale, R vs C)", steps:[{
      t:"La funzione reale $e^{-1/x^2}$ (con $e^{-1/0^2}:=0$) e' $C^\\infty$ con serie di Taylor identicamente nulla in $0$. La sua estensione complessa $e^{-1/z^2}$ in $z=0$:",
      opts:[
        {x:"ha una singolarit&agrave; ESSENZIALE: lungo l'asse immaginario $e^{-1/z^2}=e^{+1/y^2}\\to+\\infty$, quindi non e' olomorfa in alcun intorno di $0$",c:true},
        {x:"e' olomorfa e nulla in $0$, come nel caso reale"},
        {x:"ha un polo di ordine $2$"},
        {x:"ha una singolarit&agrave; eliminabile con valore $0$"}],
      hint:"Lungo l'asse reale $z=x$ la funzione tende a $0$, MA lungo l'asse immaginario $z=iy$ si ha $-1/z^2=+1/y^2$, e l'esponenziale esplode: nessun limite complesso in $0$.",
      sol:"<b>Distinzione reale/complesso (nucleo 12, tappa 03-04).</b> Nel reale una funzione pu&ograve; essere $C^\\infty$ con Taylor nullo e non rappresentativa. Nel complesso questo e' impossibile per una olomorfa (teorema: olomorfa $\\Rightarrow$ analitica). Infatti $e^{-1/z^2}$ ha in $0$ una singolarit&agrave; ESSENZIALE (per Casorati-Weierstrass l'immagine e' densa), non un punto di olomorfia. E' la ragione strutturale per cui l'analiticit&agrave; reale e complessa sono fenomeni diversi."
    }]
  },

  { pool:"laurent", src:"nucleo 12, tappa 04", steps:[{
      t:"Perch&eacute; il residuo (coefficiente $a_{-1}$) e' l'UNICA informazione dello sviluppo di Laurent che conta per integrare $f$ su una curva chiusa?",
      opts:[
        {x:"perch&eacute; $\\oint (z-z_0)^{n}dz=0$ per ogni $n\\in\\mathbb{Z}$ tranne $n=-1$: tutti gli altri coefficienti spariscono nell'integrazione",c:true},
        {x:"perch&eacute; $a_{-1}$ e' sempre il coefficiente dominante"},
        {x:"perch&eacute; gli altri coefficienti sono nulli per definizione"},
        {x:"perch&eacute; $a_{-1}$ e' l'unico che si pu&ograve; calcolare"}],
      hint:"Solo $(z-z_0)^{-1}$ ha primitiva NON monodroma ($\\log$): dopo un giro il suo integrale resta $2\\pi i$; ogni altra potenza ha primitiva monodroma e integrale nullo su una chiusa.",
      sol:"<b>Integrale fondamentale + teorema dei residui (nucleo 12).</b> Ogni potenza $(z-z_0)^n$ con $n\\ne-1$ ha primitiva $\\frac{(z-z_0)^{n+1}}{n+1}$ monodroma, quindi $\\oint=0$. La sola $(z-z_0)^{-1}$ avrebbe come primitiva $\\log(z-z_0)$, non monodroma: contribuisce $2\\pi i$. Perci&ograve; $\\oint_\\gamma f=2\\pi i\\sum a_{-1}$: e' tutta la potenza del metodo dei residui."
    }]
  },

  { pool:"laurent", src:"nucleo 13 (trappola b01: ordine del polo)", steps:[{
      t:"TRAPPOLA. Prima di applicare la formula del residuo, la cosa da verificare e':",
      opts:[
        {x:"l'ORDINE effettivo del polo, contando gli zeri di numeratore e denominatore: usare la formula del polo semplice su un polo doppio (o viceversa) d&agrave; un risultato errato",c:true},
        {x:"che la funzione sia reale sull'asse reale"},
        {x:"che il contorno sia percorso in senso antiorario"},
        {x:"che il residuo sia positivo"}],
      hint:"Un numeratore che si annulla in $z_0$ pu&ograve; ABBASSARE l'ordine del polo: es. $\\frac{\\sin z}{z^2}$ ha polo SEMPLICE, non doppio, perch&eacute; $\\sin z$ ha uno zero in $0$.",
      sol:"<b>Trappola dichiarata (b01) + criterio dell'ordine.</b> 'Non verificare l'ordine del polo prima di usare la formula del residuo' e' una delle trappole censite: chi sbaglia l'ordine del polo sbaglia poi anche integrali e trasformate che ci si appoggiano. Metodo sicuro: sviluppare $N$ e $D$ fino al primo termine non nullo, ordine del polo $=$ (zero di $D$) $-$ (zero di $N$). Esempio: $\\frac{\\sin z}{z^2}=\\frac{z-z^3/6+\\cdots}{z^2}=\\frac1z-\\frac z6+\\cdots$: polo SEMPLICE, residuo $1$, non doppio."
    }]
  },

  /* ===================== CALCOLO E MULTI-STEP (seconda meta') ===================== */

  { pool:"laurent", src:"nucleo 12, tappa 04 (esercizio guidato)", steps:[
    { t:"$f(z)=\\dfrac{1}{z(z-1)}$, sviluppo di Laurent centrato in $0$. Primo passo: la decomposizione in fratti semplici e'",
      opts:[
        {x:"$\\dfrac{1}{z-1}-\\dfrac1z$",c:true},
        {x:"$\\dfrac1z-\\dfrac{1}{z-1}$"},
        {x:"$\\dfrac1z+\\dfrac{1}{z-1}$"},
        {x:"$\\dfrac{1}{z-1}+\\dfrac{1}{z+1}$"}],
      hint:"Poni $\\frac{1}{z(z-1)}=\\frac Az+\\frac{B}{z-1}$ e riduci allo stesso denominatore: $1=A(z-1)+Bz$, da cui $A=-1$, $B=1$.",
      sol:"<b>Fratti semplici.</b> $\\frac{1}{z(z-1)}=\\frac{-1}{z}+\\frac{1}{z-1}$ (in $z=0$: $A=\\frac{1}{0-1}=-1$; in $z=1$: $B=\\frac11=1$). Il termine $-1/z$ e' gi&agrave; una potenza negativa; tutto lo sviluppo dipende da come si espande $\\frac{1}{z-1}$, e questo dipende dalla corona.",
      cont:"Ora la corona interna &rarr;" },
    { t:"Nella corona $0<|z|<1$ lo sviluppo e', e la singolarit&agrave; in $0$ e':",
      opts:[
        {x:"$f=-\\dfrac1z-1-z-z^2-\\cdots$: polo SEMPLICE, residuo $a_{-1}=-1$",c:true},
        {x:"$f=\\dfrac1z+1+z+\\cdots$: polo semplice, residuo $+1$"},
        {x:"$f=\\dfrac{1}{z^2}+\\cdots$: polo doppio, residuo $0$"},
        {x:"$f=-1-z-z^2-\\cdots$: eliminabile"}],
      hint:"Con $|z|<1$: $\\frac{1}{z-1}=-\\frac{1}{1-z}=-\\sum_{n\\ge0}z^n$; somma il $-1/z$.",
      sol:"<b>Serie geometrica nella corona interna.</b> $\\frac{1}{z-1}=-\\sum_{n\\ge0}z^n=-1-z-z^2-\\cdots$, quindi $f=-\\frac1z-1-z-z^2-\\cdots$. La parte principale e' il solo $-\\frac1z$: <b>polo semplice</b> con residuo $-1$. E' la corona che tocca la singolarit&agrave; $0$, quindi $\\mathrm{Res}(f,0)=-1$ (verificabile anche con $\\lim_{z\\to0}z f=\\frac{1}{0-1}=-1$).",
      cont:"Ora la corona esterna &rarr;" },
    { t:"Nella corona $|z|>1$ lo sviluppo diventa, e il coefficiente di $z^{-1}$ e':",
      opts:[
        {x:"$f=\\dfrac{1}{z^2}+\\dfrac{1}{z^3}+\\cdots$: NESSUN termine $z^{-1}$, coefficiente $a_{-1}=0$",c:true},
        {x:"$f=-\\dfrac1z-1-z-\\cdots$: identico alla corona interna"},
        {x:"$f=\\dfrac1z+\\dfrac{1}{z^2}+\\cdots$: coefficiente $a_{-1}=1$"},
        {x:"lo sviluppo non esiste in $|z|>1$"}],
      hint:"Con $|z|>1$: $\\frac{1}{z-1}=\\frac1z\\frac{1}{1-1/z}=\\sum_{n\\ge0}z^{-n-1}=\\frac1z+\\frac{1}{z^2}+\\cdots$; sommando $-\\frac1z$ il termine $z^{-1}$ si cancella.",
      sol:"<b>Serie geometrica nella corona esterna + teorema della somma dei residui.</b> $\\frac{1}{z-1}=\\frac1z+\\frac1{z^2}+\\cdots$, e con $-\\frac1z$ resta $f=\\frac{1}{z^2}+\\frac{1}{z^3}+\\cdots$: coefficiente $a_{-1}=0$. NON e' il residuo in $0$ (quello e' $-1$, nella corona interna): il coefficiente $a_{-1}$ della corona esterna misura l'integrale su un cerchio che racchiude ENTRAMBI i poli, e infatti $\\mathrm{Res}_0+\\mathrm{Res}_1=-1+1=0$. La corona esterna conosce la SOMMA dei residui, non i singoli." }
  ]},

  { pool:"laurent", src:"20240115 Es.1", steps:[
    { t:"$f(z)=\\dfrac{\\sin z}{\\cos(z^2)-1}$: qual e' l'ordine del polo in $z=0$?",
      opts:[
        {x:"polo di ordine $3$: $\\sin z$ ha zero di ordine $1$, $\\cos(z^2)-1$ ha zero di ordine $4$ &rarr; $4-1=3$",c:true},
        {x:"polo di ordine $2$, perch&eacute; $\\cos(z^2)-1\\sim -z^2/2$"},
        {x:"polo semplice"},
        {x:"singolarit&agrave; essenziale"}],
      hint:"ATTENZIONE all'argomento: $\\cos(z^2)-1=-\\frac{(z^2)^2}{2}+\\cdots=-\\frac{z^4}{2}+\\cdots$, zero di ordine $4$ (non $2$). Chi sviluppa $\\cos z-1$ invece di $\\cos(z^2)-1$ ottiene ordine sbagliato.",
      sol:"<b>Criterio dell'ordine (trappola dichiarata b01).</b> $\\cos(u)-1=-\\frac{u^2}{2}+\\cdots$ con $u=z^2$ d&agrave; $-\\frac{z^4}{2}+\\cdots$: zero di ordine $4$. Numeratore $\\sin z$: zero di ordine $1$. Polo di ordine $4-1=3$: <b>triplo</b>. La trappola e' esattamente sviluppare $\\cos z-1$ (ordine $2$) invece di $\\cos(z^2)-1$ (ordine $4$).",
      cont:"Ora la parte principale &rarr;" },
    { t:"Dividendo le serie, la parte principale di Laurent in $0$ e':",
      opts:[
        {x:"$f=-\\dfrac{2}{z^3}+\\dfrac{1}{3z}-\\dfrac{11}{60}z+\\cdots$, quindi residuo $=\\dfrac13$",c:true},
        {x:"$f=-\\dfrac{2}{z^3}-\\dfrac{1}{3z}+\\cdots$, residuo $-\\frac13$"},
        {x:"$f=\\dfrac{2}{z^3}+\\dfrac{1}{z}+\\cdots$, residuo $1$"},
        {x:"$f=-\\dfrac{1}{z^3}+\\dfrac{1}{6z}+\\cdots$, residuo $\\frac16$"}],
      hint:"Numeratore $z-\\frac{z^3}{6}+\\cdots$; denominatore $-\\frac{z^4}{2}(1-\\frac{z^4}{12}+\\cdots)$. Dividi: $f=\\frac{z-z^3/6+\\cdots}{-z^4/2}\\cdot(1+\\frac{z^4}{12}+\\cdots)$.",
      sol:"<b>Divisione fra serie (soluzione ufficiale 15/01/2024).</b> $\\frac{z-z^3/6+\\cdots}{-z^4/2\\,(1-z^4/12+\\cdots)}=-\\frac{2}{z^4}(z-\\frac{z^3}{6}+\\cdots)(1+\\frac{z^4}{12}+\\cdots)=-\\frac{2}{z^3}+\\frac{1}{3z}+\\cdots$. Il coefficiente di $z^{-1}$ e' $\\frac13$: <b>verificato</b> che $-2\\cdot(-\\frac16)=\\frac13$. La soluzione ufficiale riporta $-\\frac{2}{z^3}+\\frac{1}{3z}-\\frac{11}{60}z$; il termine $-\\frac{11}{60}z$ non l'ho ricalcolato indipendentemente, ma il residuo $\\frac13$ e' confermato dal mio conto.",
      cont:"Ora l'integrale &rarr;" },
    { t:"Per una curva $\\Gamma$ che circonda solo $z=0$ in senso antiorario, $\\oint_\\Gamma f\\,dz$ vale:",
      opts:[
        {x:"$\\dfrac{2\\pi i}{3}$",c:true},
        {x:"$-\\dfrac{4\\pi i}{3}$"},
        {x:"$4\\pi i$"},
        {x:"$0$"}],
      hint:"Teorema dei residui: $\\oint_\\Gamma f=2\\pi i\\,\\mathrm{Res}(f,0)$; solo $a_{-1}=\\frac13$ conta, non $a_{-3}$.",
      sol:"<b>Teorema dei residui.</b> $\\oint_\\Gamma f=2\\pi i\\,\\mathrm{Res}(f,0)=2\\pi i\\cdot\\frac13=\\frac{2\\pi i}{3}$. Il coefficiente $a_{-3}=-2$ della parte principale NON contribuisce all'integrale: solo $a_{-1}$ sopravvive. Valore ufficiale $\\frac{2\\pi i}{3}$, coerente col mio residuo $\\frac13$." }
  ]},

  { pool:"laurent", src:"20230620 Es.1", steps:[
    { t:"$f(z)=\\dfrac{1}{\\cos(e^z-1)-1}$: sviluppando $e^z-1=z+\\frac{z^2}{2}+\\cdots$ e poi $\\cos(w)-1=-\\frac{w^2}{2}+\\cdots$, l'ordine del polo in $z=0$ e':",
      opts:[
        {x:"DOPPIO: $\\cos(e^z-1)-1\\sim -\\frac{(e^z-1)^2}{2}\\sim-\\frac{z^2}{2}$, zero di ordine $2$; numeratore costante &rarr; polo di ordine $2$",c:true},
        {x:"triplo, per via del cubo nello sviluppo"},
        {x:"semplice"},
        {x:"quarto"}],
      hint:"$e^z-1$ ha uno zero SEMPLICE in $0$; elevato al quadrato dentro $\\cos(w)-1\\sim-w^2/2$ d&agrave; zero di ordine $2$. Serve svilupparlo fino a $z^3$ per estrarre ENTRAMBI i coefficienti della parte principale.",
      sol:"<b>Criterio dell'ordine + trappola b01.</b> $w=e^z-1=z+\\frac{z^2}{2}+\\frac{z^3}{6}+\\cdots$ (zero di ordine $1$); $\\cos w-1=-\\frac{w^2}{2}+\\frac{w^4}{24}-\\cdots$, dominante $-\\frac{w^2}{2}\\sim-\\frac{z^2}{2}$: zero di ordine $2$. Polo DOPPIO. La trappola censita: fermarsi troppo presto nello sviluppo d&agrave; solo $d_{-2}$ e perde $d_{-1}$; serve arrivare fino a $z^3$.",
      cont:"Ora i due coefficienti della parte principale &rarr;" },
    { t:"Spingendo lo sviluppo, la parte principale risulta:",
      opts:[
        {x:"$f=-\\dfrac{2}{z^2}+\\dfrac{2}{z}+\\cdots$, cio&egrave; $d_{-2}=-2$, $d_{-1}=2$",c:true},
        {x:"$f=-\\dfrac{2}{z^2}-\\dfrac{2}{z}+\\cdots$, $d_{-1}=-2$"},
        {x:"$f=\\dfrac{2}{z^2}+\\dfrac{1}{z}+\\cdots$"},
        {x:"$f=-\\dfrac{1}{z^2}+\\dfrac{1}{z}+\\cdots$"}],
      hint:"$w^2=z^2(1+z+\\frac{7}{12}z^2+\\cdots)$, quindi $\\cos w-1=-\\frac{z^2}{2}(1+z+\\frac12 z^2+\\cdots)$; poi $f=1/(\\cos w-1)=-\\frac{2}{z^2}(1-z+\\frac12 z^2+\\cdots)$.",
      sol:"<b>Divisione fra serie (soluzione ufficiale 20/06/2023).</b> $w^2=z^2+z^3+\\frac{7}{12}z^4+\\cdots$ e (con il termine $+\\frac{w^4}{24}$) $\\cos w-1=-\\frac{z^2}{2}-\\frac{z^3}{2}-\\frac{z^4}{4}+\\cdots=-\\frac{z^2}{2}(1+z+\\frac12 z^2+\\cdots)$. Invertendo: $f=-\\frac{2}{z^2}\\,(1-z+\\frac{z^2}{2}+\\cdots)=-\\frac{2}{z^2}+\\frac{2}{z}-1+\\cdots$. Quindi $d_{-2}=-2$, $d_{-1}=2$: <b>verificato</b>, coincide con la soluzione ufficiale.",
      cont:"Ora l'integrale &rarr;" },
    { t:"Su una curva antioraria che circonda solo $z=0$, $\\oint f\\,dz$ vale:",
      opts:[
        {x:"$4\\pi i$",c:true},
        {x:"$-4\\pi i$"},
        {x:"$2\\pi i$"},
        {x:"$0$"}],
      hint:"Solo $d_{-1}=2$ conta: $\\oint f=2\\pi i\\cdot d_{-1}$.",
      sol:"<b>Teorema dei residui.</b> $\\oint f=2\\pi i\\,\\mathrm{Res}(f,0)=2\\pi i\\cdot d_{-1}=2\\pi i\\cdot2=4\\pi i$. Il coefficiente $d_{-2}=-2$ non entra. Valore ufficiale $4\\pi i$, confermato dal mio conto." }
  ]},

  { pool:"laurent", src:"20240618 turno A Es.1", steps:[
    { t:"$f(z)=\\dfrac{3+z}{z^3+2z^2}=\\dfrac{3+z}{z^2(z+2)}$: fratti semplici. Quale decomposizione?",
      opts:[
        {x:"$-\\dfrac{1}{4z}+\\dfrac{3}{2z^2}+\\dfrac{1}{4(z+2)}$",c:true},
        {x:"$\\dfrac{1}{4z}+\\dfrac{3}{2z^2}-\\dfrac{1}{4(z+2)}$"},
        {x:"$\\dfrac{3}{2z^2}+\\dfrac{1}{z+2}$"},
        {x:"$-\\dfrac{1}{4z}+\\dfrac{1}{z^2}+\\dfrac{1}{4(z+2)}$"}],
      hint:"Poni $\\frac{3+z}{z^2(z+2)}=\\frac Az+\\frac{B}{z^2}+\\frac{C}{z+2}$: da $3+z=Az(z+2)+B(z+2)+Cz^2$. In $z=0$: $B=\\frac32$; in $z=-2$: $C=\\frac14$; confronto in $z^2$: $A+C=0$.",
      sol:"<b>Fratti semplici.</b> $3+z=Az(z+2)+B(z+2)+Cz^2$. $z=0\\Rightarrow 3=2B\\Rightarrow B=\\frac32$; $z=-2\\Rightarrow 1=4C\\Rightarrow C=\\frac14$; coeff. di $z^2$: $0=A+C\\Rightarrow A=-\\frac14$ (verifica coeff. di $z$: $2A+B=-\\frac12+\\frac32=1$ ✓). Quindi $f=-\\frac{1}{4z}+\\frac{3}{2z^2}+\\frac{1}{4(z+2)}$. <b>Verificato.</b>",
      cont:"Ora i residui in $0$ e $-2$ &rarr;" },
    { t:"I residui sono:",
      opts:[
        {x:"$\\mathrm{Res}(f,0)=-\\dfrac14$ (coefficiente di $\\frac1z$), $\\mathrm{Res}(f,-2)=\\dfrac14$",c:true},
        {x:"$\\mathrm{Res}(f,0)=\\dfrac32$ (dal termine $\\frac{1}{z^2}$), $\\mathrm{Res}(f,-2)=\\dfrac14$"},
        {x:"$\\mathrm{Res}(f,0)=0$, $\\mathrm{Res}(f,-2)=1$"},
        {x:"$\\mathrm{Res}(f,0)=-\\dfrac14$, $\\mathrm{Res}(f,-2)=-\\dfrac14$"}],
      hint:"Il residuo e' SEMPRE il coefficiente di $(z-z_0)^{-1}$: in $z=0$ e' $A=-\\frac14$, NON $B=\\frac32$ (che e' il coefficiente di $z^{-2}$). In $z=-2$ e' $C=\\frac14$.",
      sol:"<b>Residuo come coefficiente $a_{-1}$.</b> $\\mathrm{Res}(f,0)=A=-\\frac14$: il termine $\\frac{3}{2z^2}$ e' $a_{-2}$ e non e' il residuo. $\\mathrm{Res}(f,-2)=C=\\frac14$ (polo semplice). Trappola classica: prendere il coefficiente di $z^{-2}$ come residuo. Valori ufficiali $-\\frac14$ e $\\frac14$, <b>verificati</b>.",
      cont:"Ora lo sviluppo nelle due corone &rarr;" },
    { t:"Nella corona $0<|z|<2$ e nella corona $|z|>2$ il coefficiente di $z^{-1}$ e', rispettivamente:",
      opts:[
        {x:"$-\\frac14$ in $0<|z|<2$ (uguale a $\\mathrm{Res}(f,0)$), e $0$ in $|z|>2$ (uguale a $\\mathrm{Res}(f,0)+\\mathrm{Res}(f,-2)$)",c:true},
        {x:"$-\\frac14$ in entrambe le corone"},
        {x:"$0$ in $0<|z|<2$ e $-\\frac14$ in $|z|>2$"},
        {x:"$\\frac32$ in entrambe"}],
      hint:"In $0<|z|<2$: $\\frac{1}{z+2}=\\frac12\\sum(-z/2)^n$, che aggiunge solo potenze $\\ge0$: il termine $z^{-1}$ resta $A=-\\frac14$. In $|z|>2$: $\\frac{1}{z+2}=\\frac1z\\sum(-2/z)^n$ aggiunge $+\\frac{1}{4z}$, che cancella $A$.",
      sol:"<b>Serie geometrica nelle due corone + teorema della somma dei residui.</b> In $0<|z|<2$ il termine $\\frac{1}{4(z+2)}$ si espande in sole potenze non negative, quindi $a_{-1}=A=-\\frac14=\\mathrm{Res}(f,0)$. In $|z|>2$, $\\frac{1}{4(z+2)}=\\frac{1}{4z}-\\frac{1}{2z^2}+\\cdots$ aggiunge $+\\frac{1}{4z}$: con $-\\frac{1}{4z}$ il coefficiente $a_{-1}=0=\\mathrm{Res}(f,0)+\\mathrm{Res}(f,-2)=-\\frac14+\\frac14$. La corona esterna vede la SOMMA dei residui: coerente con la teoria." }
  ]},

  { pool:"laurent", src:"20240910 Es.1", steps:[
    { t:"$f(z)=\\dfrac{1}{\\sin(z^{-2})}$: stabilito che $z=0$ e' singolarit&agrave; non isolata, i poli finiti sono in $z_k=\\pm(k\\pi)^{-1/2}$, $k\\ge1$. Rispetto al cerchio unitario $\\gamma$ ($|z|=1$):",
      opts:[
        {x:"TUTTI i poli finiti sono dentro $\\gamma$, perch&eacute; $|z_k|=(k\\pi)^{-1/2}<1$ gi&agrave; da $k=1$",c:true},
        {x:"nessun polo e' dentro $\\gamma$"},
        {x:"solo i poli con $k$ pari sono dentro"},
        {x:"met&agrave; dentro e met&agrave; fuori"}],
      hint:"$(k\\pi)^{-1/2}$ per $k=1$ vale $(\\pi)^{-1/2}\\approx0.564<1$, e decresce con $k$: tutti i poli stanno nel disco unitario.",
      sol:"<b>Localizzazione dei poli.</b> $\\sin(z^{-2})=0\\iff z^{-2}=k\\pi\\iff z=\\pm(k\\pi)^{-1/2}$. Poich&eacute; $(k\\pi)^{-1/2}<1$ per ogni $k\\ge1$, tutti i (infiniti) poli finiti giacciono dentro $|z|=1$; si accumulano in $0$, che e' non isolata. Fuori da $\\gamma$, $f$ e' olomorfa fino all'infinito.",
      cont:"Ora l'integrale &rarr;" },
    { t:"$\\oint_\\gamma f\\,dz$ (cerchio unitario antiorario) vale, e con quale strumento si calcola?",
      opts:[
        {x:"$0$: non potendo usare i residui in $z=0$ (non isolata), si passa al residuo all'infinito, e $\\mathrm{Res}_\\infty f=0$ perch&eacute; lo sviluppo attorno a $\\infty$ e' $f=z^2+\\frac{1}{6z^2}+\\cdots$, privo del termine $z^{-1}$",c:true},
        {x:"$2\\pi i$, sommando i residui dei poli $z_k$ uno per uno"},
        {x:"diverge, perch&eacute; ci sono infiniti poli dentro"},
        {x:"$2\\pi i\\,\\mathrm{Res}(f,0)$ con la formula del polo semplice in $0$"}],
      hint:"Con $\\zeta=1/z\\to0$: $z^{-2}=\\zeta^2$, $\\sin(\\zeta^2)=\\zeta^2-\\frac{\\zeta^6}{6}+\\cdots$, quindi $f=\\frac{1}{\\zeta^2}(1+\\frac{\\zeta^4}{6}+\\cdots)=z^2+\\frac{1}{6z^2}+\\cdots$: nessuna potenza $z^{-1}$.",
      sol:"<b>Residuo all'infinito + definizione di singolarit&agrave; isolata (soluzione 10/09/2024).</b> Il teorema dei residui non e' applicabile in $z=0$ (non isolata). L'integrale sul cerchio, che racchiude tutti i poli finiti, vale $-2\\pi i\\,\\mathrm{Res}_\\infty f$. Lo sviluppo attorno a $\\infty$ e' $f=z^2+\\frac{1}{6z^2}+\\cdots$: il coefficiente di $z^{-1}$ e' $0$, quindi $\\mathrm{Res}_\\infty=0$ e $\\oint_\\gamma f=0$. Valore ufficiale $0$, <b>verificato</b> con lo sviluppo che ho ricalcolato." }
  ]},

  { pool:"laurent", src:"nucleo 12, tappa 04 (collaudo)", steps:[{
      t:"Che singolarit&agrave; ha $\\dfrac{1-\\cos z}{z^3}$ in $z=0$, e quanto vale il residuo?",
      opts:[
        {x:"polo SEMPLICE, residuo $\\dfrac12$: $1-\\cos z=\\frac{z^2}{2}-\\frac{z^4}{24}+\\cdots$ (zero di ordine $2$), diviso $z^3$ d&agrave; $\\frac{1}{2z}-\\frac{z}{24}+\\cdots$",c:true},
        {x:"polo di ordine $3$, residuo $0$"},
        {x:"polo doppio, residuo $\\frac12$"},
        {x:"eliminabile, residuo $0$"}],
      hint:"$1-\\cos z$ ha zero di ordine $2$ (non $3$): la potenza dominante e' $z^2/2$. Diviso $z^3$ resta $\\frac{1}{2}z^{-1}$ come termine dominante: polo semplice.",
      sol:"<b>Criterio dell'ordine + lettura di $a_{-1}$.</b> $1-\\cos z=\\frac{z^2}{2}-\\frac{z^4}{24}+\\cdots$: zero di ordine $2$. Diviso $z^3$ (zero di ordine $3$) d&agrave; polo di ordine $3-2=1$: SEMPLICE. Lo sviluppo $\\frac{1}{2z}-\\frac{z}{24}+\\cdots$ ha $a_{-1}=\\frac12$: residuo $\\frac12$. Verificabile con la formula del quoziente ma lo sviluppo e' immediato."
    }]
  },

  { pool:"laurent", src:"nucleo 13, tappa 01 (essenziale)", steps:[{
      t:"$\\mathrm{Res}(e^{1/z},0)$ vale, e con quale metodo si ottiene?",
      opts:[
        {x:"$1$, letto dallo sviluppo $e^{1/z}=1+\\frac1z+\\frac{1}{2!z^2}+\\cdots$: nessuna formula del residuo si applica a una essenziale",c:true},
        {x:"$0$, perch&eacute; l'esponenziale non ha poli"},
        {x:"$\\infty$, perch&eacute; la singolarit&agrave; e' essenziale"},
        {x:"$\\frac12$, dal termine $\\frac{1}{2z^2}$"}],
      hint:"Sostituisci $w=1/z$ nella serie di $e^w=\\sum\\frac{w^n}{n!}$; il coefficiente di $z^{-1}$ e' quello di $w^1$, cio&egrave; $\\frac{1}{1!}=1$.",
      sol:"<b>Residuo di una singolarit&agrave; essenziale via sviluppo.</b> $e^{1/z}=\\sum_{n\\ge0}\\frac{1}{n!}z^{-n}$: parte principale con infiniti termini (essenziale). Il coefficiente di $z^{-1}$ e' $\\frac{1}{1!}=1$, quindi $\\mathrm{Res}=1$. E' l'esempio-manifesto per cui lo sviluppo e' l'UNICA via: le formule del residuo presuppongono un polo di ordine finito."
    }]
  },

  { pool:"laurent", src:"nucleo 13, tappa 01", steps:[{
      t:"$\\mathrm{Res}\\!\\left(\\dfrac{e^z}{(z-2)^3},\\,2\\right)$ vale:",
      opts:[
        {x:"$\\dfrac{e^2}{2}$, dalla formula del polo di ordine $3$: $\\frac{1}{2!}\\lim_{z\\to2}\\frac{d^2}{dz^2}e^z=\\frac{e^2}{2}$",c:true},
        {x:"$e^2$, dalla formula del polo semplice"},
        {x:"$2e^2$"},
        {x:"$0$, perch&eacute; $e^z$ e' intera"}],
      hint:"Polo di ordine $m=3$: moltiplica per $(z-2)^3$ (resta $e^z$), deriva $m-1=2$ volte, dividi per $(m-1)!=2!$.",
      sol:"<b>Formula del residuo per polo di ordine $m$.</b> $\\mathrm{Res}=\\frac{1}{(3-1)!}\\lim_{z\\to2}\\frac{d^{2}}{dz^{2}}\\big[(z-2)^3\\frac{e^z}{(z-2)^3}\\big]=\\frac{1}{2}\\,e^{2}$. Qui la formula conviene (l'esponenziale ha derivata immediata); per un integrando piu' intrecciato allo stesso ordine converrebbe lo sviluppo."
    }]
  },

  { pool:"laurent", src:"nucleo 12, tappa 05 (esercizio guidato)", steps:[
    { t:"$f(z)=\\dfrac{z^2\\sin z}{(1-\\cos z)^2}$ in $z=0$: ordine del polo?",
      opts:[
        {x:"polo SEMPLICE: numeratore zero di ordine $3$ ($z^2\\cdot z$), denominatore zero di ordine $4$ ($(\\frac{z^2}{2})^2$) &rarr; $4-3=1$",c:true},
        {x:"polo di ordine $4$"},
        {x:"polo doppio"},
        {x:"eliminabile"}],
      hint:"$z^2$ d&agrave; ordine $2$, $\\sin z$ ordine $1$: numeratore ordine $3$. $1-\\cos z\\sim\\frac{z^2}{2}$ ha ordine $2$, al quadrato ordine $4$.",
      sol:"<b>Criterio dell'ordine.</b> Numeratore: $z^2\\sin z=z^3-\\frac{z^5}{6}+\\cdots$, ordine $3$. Denominatore: $(1-\\cos z)^2=(\\frac{z^2}{2}-\\cdots)^2=\\frac{z^4}{4}(1-\\frac{z^2}{6}+\\cdots)$, ordine $4$. Polo di ordine $4-3=1$: semplice.",
      cont:"Ora il residuo &rarr;" },
    { t:"Il residuo vale:",
      opts:[
        {x:"$4$: $f=\\dfrac{z^3(1-\\frac{z^2}{6}+\\cdots)}{\\frac{z^4}{4}(1-\\frac{z^2}{6}+\\cdots)}=\\dfrac{4}{z}(1+O(z^2))$",c:true},
        {x:"$2$"},
        {x:"$\\frac14$"},
        {x:"$1$"}],
      hint:"I fattori correttivi $(1-\\frac{z^2}{6}+\\cdots)$ di numeratore e denominatore si semplificano al primo ordine, lasciando $\\frac{z^3}{z^4/4}=\\frac4z$.",
      sol:"<b>Divisione fra serie.</b> $z^2\\sin z=z^3(1-\\frac{z^2}{6}+\\cdots)$ e $(1-\\cos z)^2=\\frac{z^4}{4}(1-\\frac{z^2}{6}+\\cdots)$; il rapporto e' $\\frac{4}{z}(1+O(z^2))$, quindi $a_{-1}=4$. I due fattori correttivi coincidono al primo ordine e si elidono: il conto va comunque scritto, ma il residuo e' $4$."
    }
  ]},

  { pool:"laurent", src:"nucleo 13, tappa 01", steps:[{
      t:"$\\mathrm{Res}\\!\\left(\\dfrac{z}{z^2+1},\\,i\\right)$ vale:",
      opts:[
        {x:"$\\dfrac12$, dalla formula del quoziente $\\dfrac{P(i)}{Q'(i)}=\\dfrac{i}{2i}$",c:true},
        {x:"$-\\dfrac12$"},
        {x:"$i$"},
        {x:"$0$"}],
      hint:"$P=z$, $Q=z^2+1$, $Q'=2z$; valuta in $z=i$: $\\frac{i}{2i}$.",
      sol:"<b>Formula del residuo per quoziente con polo semplice.</b> $Q(i)=0$, $Q'(i)=2i\\ne0$: $\\mathrm{Res}=\\frac{P(i)}{Q'(i)}=\\frac{i}{2i}=\\frac12$. E' la via piu' rapida: evita di fattorizzare $z^2+1=(z-i)(z+i)$."
    }]
  },

  { pool:"laurent", src:"20231116 Es.1", steps:[
    { t:"Per $\\dfrac{1}{\\sin z}$ i coefficienti di Laurent negli anelli attorno a $0$ si ottengono da $d_{-n}=\\frac{1}{2\\pi i}\\oint_{\\gamma}\\frac{z^{n-1}}{\\sin z}dz$. Nell'anello $0<|z|<\\pi$ (cerchio $\\gamma_1$ che contiene solo $z=0$), la parte principale e':",
      opts:[
        {x:"il solo termine $\\dfrac1z$: $\\frac{1}{\\sin z}=\\frac1z+\\frac z6+\\frac{7z^3}{360}+\\cdots$, polo semplice, residuo $1$",c:true},
        {x:"$\\frac1z+\\frac{1}{z^2}$, polo doppio"},
        {x:"$-\\frac1z$, residuo $-1$"},
        {x:"nessuna parte principale: eliminabile"}],
      hint:"In $0<|z|<\\pi$ l'unico polo di $1/\\sin z$ e' $z=0$, con $\\sin z\\sim z$: polo semplice, residuo $1$. Solo $\\gamma_1$ per $n=1$ d&agrave; contributo.",
      sol:"<b>Coefficienti di Laurent via integrale + teorema dei residui (soluzione 16/11/2023).</b> Nell'anello che contiene solo $z=0$, $\\frac{1}{\\sin z}$ ha polo semplice con $\\mathrm{Res}=\\frac{1}{\\cos0}=1$ (formula del quoziente su $\\sin$): parte principale $\\frac1z$. Lo sviluppo $\\frac{1}{\\sin z}=\\frac1z+\\frac z6+\\cdots$ conferma. Verificato.",
      cont:"Ora l'anello successivo &rarr;" },
    { t:"Nell'anello $\\pi<|z|<2\\pi$ (cerchio $\\gamma_2$ che contiene $0$ e $\\pm\\pi$) la parte principale CAMBIA: i poli $\\pm\\pi$ contribuiscono. La caratteristica dichiarata dalla soluzione ufficiale e':",
      opts:[
        {x:"per $n$ PARI i contributi di $+\\pi$ e $-\\pi$ si CANCELLANO; per $n$ dispari si sommano: la parte principale in $\\pi<|z|<2\\pi$ e' $-\\frac1z-\\sum_{n\\ \\mathrm{dispari},\\,n>1}\\frac{2\\pi^{n-1}}{z^n}$",c:true},
        {x:"i poli $\\pm\\pi$ danno lo stesso contributo per ogni $n$, senza dipendenza dalla parit&agrave;"},
        {x:"la parte principale e' identica a quella dell'anello interno"},
        {x:"i poli $\\pm\\pi$ si cancellano sempre, per ogni $n$"}],
      hint:"$\\mathrm{Res}(\\frac{1}{\\sin z},\\pm\\pi)=\\frac{1}{\\cos(\\pm\\pi)}=-1$; nel coefficiente $d_{-n}$ entra $z^{n-1}$ valutato in $\\pm\\pi$, cioe' $(\\pm\\pi)^{n-1}$: per $n$ pari $(\\pi)^{n-1}$ e $(-\\pi)^{n-1}$ hanno segno opposto e si elidono.",
      sol:"<b>Contributi multipli e parit&agrave; (soluzione ufficiale 16/11/2023).</b> $d_{-n}=\\frac{1}{2\\pi i}\\oint_{\\gamma_2}\\frac{z^{n-1}}{\\sin z}dz=\\sum_{z_j\\in\\{0,\\pm\\pi\\}}\\mathrm{Res}(z^{n-1}/\\sin z,z_j)$. In $\\pm\\pi$ il residuo di $\\frac{1}{\\sin z}$ e' $-1$, e il fattore $z^{n-1}$ vale $(\\pm\\pi)^{n-1}$: per $n$ PARI i due si cancellano, per $n$ dispari raddoppiano. Riporto la parte principale come da soluzione ufficiale ($-\\frac1z-\\sum_{n\\ \\mathrm{dispari}>1}\\frac{2\\pi^{n-1}}{z^n}$); non ho ricalcolato ogni coefficiente indipendentemente, ma il MECCANISMO (cancellazione per $n$ pari) e' quello che regge il risultato, e coincide con la trappola censita: dimenticarlo sbaglia la parte principale del secondo anello." }
  ]},

  { pool:"laurent", src:"nucleo 13, tappa 01", steps:[{
      t:"$\\mathrm{Res}\\!\\left(\\dfrac{\\cos z-1}{z^5},\\,0\\right)$ conviene calcolarlo:",
      opts:[
        {x:"per SVILUPPO: $\\cos z-1=-\\frac{z^2}{2}+\\frac{z^4}{24}-\\cdots$, quindi $\\frac{\\cos z-1}{z^5}=-\\frac{1}{2z^3}+\\frac{1}{24 z}-\\cdots$, residuo $\\frac{1}{24}$",c:true},
        {x:"con la formula del polo di ordine $5$, derivando $4$ volte $(z^5 f)$"},
        {x:"con la formula del polo semplice"},
        {x:"vale $0$ perch&eacute; $\\cos z-1$ e' pari"}],
      hint:"La formula del polo di ordine $5$ richiederebbe $4$ derivate; lo sviluppo legge il coefficiente di $z^{-1}$ in una riga.",
      sol:"<b>Lettura di $a_{-1}$ (criterio di scelta, nucleo 13).</b> $\\frac{\\cos z-1}{z^5}=\\frac{-z^2/2+z^4/24-\\cdots}{z^5}=-\\frac{1}{2z^3}+\\frac{1}{24z}-\\cdots$: il coefficiente di $z^{-1}$ e' $\\frac{1}{24}$. Nota che l'ordine del polo e' $3$ (numeratore zero di ordine $2$, denom. $5$), non $5$: la formula del polo di ordine $5$ funzionerebbe ma e' inutilmente pesante. Residuo $\\frac{1}{24}$."
    }]
  },

  { pool:"laurent", src:"nucleo 13, tappa 01 (polo doppio via derivata)", steps:[{
      t:"$\\mathrm{Res}\\!\\left(\\dfrac{1}{(z^2+1)^2},\\,i\\right)$ (polo doppio in $z=i$) vale:",
      opts:[
        {x:"$-\\dfrac{i}{4}$: scritto $\\frac{1}{(z-i)^2(z+i)^2}$, $\\mathrm{Res}=\\lim_{z\\to i}\\frac{d}{dz}\\frac{1}{(z+i)^2}=\\lim\\frac{-2}{(z+i)^3}=\\frac{-2}{(2i)^3}$",c:true},
        {x:"$\\dfrac{i}{4}$"},
        {x:"$\\dfrac14$"},
        {x:"$0$, perch&eacute; il residuo di un polo doppio e' sempre nullo"}],
      hint:"Polo di ordine $2$: $\\mathrm{Res}=\\frac{1}{1!}\\lim_{z\\to i}\\frac{d}{dz}[(z-i)^2 f]=\\frac{d}{dz}(z+i)^{-2}$. Poi $(2i)^3=8i^3=-8i$.",
      sol:"<b>Formula del residuo per polo di ordine $2$.</b> $(z-i)^2 f=\\frac{1}{(z+i)^2}$; $\\frac{d}{dz}(z+i)^{-2}=-2(z+i)^{-3}$; in $z=i$: $\\frac{-2}{(2i)^3}=\\frac{-2}{-8i}=\\frac{1}{4i}=-\\frac{i}{4}$. Il residuo di un polo doppio NON e' nullo in generale: dipende dalla derivata prima."
    }]
  },

  { pool:"laurent", src:"20230704 Es.1 (residuo all'infinito, esercizio guidato)", steps:[
    { t:"Per $g(z)=\\dfrac{z^2}{(z-1)(z-2)}$, il residuo all'infinito si trova ponendo $z=1/w$. Il modo piu' rapido, in assenza di tagli, e':",
      opts:[
        {x:"usare $\\mathrm{Res}_\\infty g=-[\\mathrm{Res}(g,1)+\\mathrm{Res}(g,2)]$: la somma di TUTTI i residui (finiti + infinito) e' nulla",c:true},
        {x:"$\\mathrm{Res}_\\infty g=+[\\mathrm{Res}(g,1)+\\mathrm{Res}(g,2)]$"},
        {x:"$\\mathrm{Res}_\\infty g=\\lim_{z\\to\\infty}g(z)=1$"},
        {x:"il residuo all'infinito e' sempre $0$ per una razionale"}],
      hint:"Per una razionale senza tagli vale il teorema della somma dei residui: $\\sum_{\\text{finiti}}\\mathrm{Res}+\\mathrm{Res}_\\infty=0$. Calcola i due residui finiti, poi cambia segno.",
      sol:"<b>Teorema della somma dei residui.</b> $\\mathrm{Res}(g,1)=\\frac{1}{1-2}=-1$, $\\mathrm{Res}(g,2)=\\frac{4}{2-1}=4$ (formula $P/Q'$ o polo semplice). Somma finiti $=3$, quindi $\\mathrm{Res}_\\infty g=-3$. Vale SOLO perch&eacute; $g$ e' razionale (nessun taglio): con funzioni polidrome il teorema della somma non basta e serve $\\mathrm{Res}_\\infty=-\\mathrm{Res}_{w=0}[w^{-2}g(1/w)]$.",
      cont:"Verifica con la sostituzione &rarr;" },
    { t:"Controllo diretto: $\\mathrm{Res}_\\infty g=-\\mathrm{Res}_{w=0}\\!\\left[\\frac{1}{w^2}g(1/w)\\right]$ con $g(1/w)=\\frac{w^{-2}}{(w^{-1}-1)(w^{-1}-2)}$. Il valore e':",
      opts:[
        {x:"$-3$, coerente col teorema della somma",c:true},
        {x:"$+3$"},
        {x:"$0$"},
        {x:"$-1$"}],
      hint:"$g(1/w)=\\frac{1}{(1-w)(1-2w)}$; $\\frac{1}{w^2}g(1/w)=\\frac{1}{w^2}(1+3w+7w^2+\\cdots)$; il coefficiente di $w^{-1}$ e' $3$, poi anteponi il segno meno.",
      sol:"<b>Residuo all'infinito per sviluppo.</b> $g(1/w)=\\frac{w^{-2}}{w^{-2}(1-w)(1-2w)}=\\frac{1}{(1-w)(1-2w)}=1+3w+7w^2+\\cdots$; diviso $w^2$: $\\frac{1}{w^2}+\\frac{3}{w}+\\cdots$, residuo in $w=0$ pari a $3$; con il segno, $\\mathrm{Res}_\\infty=-3$. I due metodi coincidono: conferma il valore $-3$." }
  ]},

  { pool:"laurent", src:"nucleo 12, tappa 04 (riconoscimento)", steps:[{
      t:"COMPLESSA. Quale delle seguenti classificazioni in $z=0$ e' corretta?",
      opts:[
        {x:"$\\frac{e^z-1}{z^2}$ ha polo semplice; $\\frac{1}{z}\\sin\\frac1z$ ha singolarit&agrave; essenziale; $\\frac{z}{e^z-1}$ e' eliminabile",c:true},
        {x:"$\\frac{e^z-1}{z^2}$ ha polo doppio; $\\frac{1}{z}\\sin\\frac1z$ ha polo semplice; $\\frac{z}{e^z-1}$ ha polo semplice"},
        {x:"tutte e tre hanno polo semplice"},
        {x:"tutte e tre sono essenziali"}],
      hint:"$e^z-1\\sim z$ (zero di ordine $1$): $\\frac{e^z-1}{z^2}\\sim\\frac1z$. $\\sin\\frac1z$ ha infiniti termini negativi: essenziale, e $\\frac1z$ non lo cambia. $e^z-1$ al denominatore con $z$ al numeratore: ordini uguali, limite finito.",
      sol:"<b>Criterio dell'ordine + definizione di essenziale.</b> (1) $\\frac{e^z-1}{z^2}=\\frac{z+z^2/2+\\cdots}{z^2}=\\frac1z+\\frac12+\\cdots$: polo SEMPLICE. (2) $\\frac1z\\sin\\frac1z=\\frac1z(\\frac1z-\\frac{1}{6z^3}+\\cdots)$: infiniti termini negativi, ESSENZIALE. (3) $\\frac{z}{e^z-1}\\to\\frac{z}{z}=1$ per $z\\to0$: limite finito, ELIMINABILE (teorema di Riemann; e' la funzione generatrice dei numeri di Bernoulli). Distinguere i tre casi e' proprio la competenza che l'esame verifica."
    }]
  },

  { pool:"laurent", src:"nucleo 13 (modus complessa)", steps:[{
      t:"MODUS OPERANDI (complessa). Per $\\oint_\\gamma f\\,dz$ con $f$ che ha in $z_0$ interno una singolarit&agrave; di natura ignota, la strategia robusta e':",
      opts:[
        {x:"(1) stabilire se $z_0$ e' ISOLATA; se s&igrave;, (2) classificarla via sviluppo; (3) se polo di ordine basso usare la formula, altrimenti leggere $a_{-1}$; se NON isolata, (4) rinunciare al residuo in $z_0$ e passare al residuo all'infinito o deformare il contorno",c:true},
        {x:"applicare direttamente $\\oint=2\\pi i\\sum\\mathrm{Res}$ con la formula del polo semplice, sempre"},
        {x:"sviluppare in Taylor (non Laurent) e integrare termine a termine"},
        {x:"chiudere con la semicirconferenza superiore e invocare il lemma di Jordan"}],
      hint:"Il primo bivio non e' 'quale formula' ma 'la singolarit&agrave; e' isolata?'. Un punto di accumulazione di poli (come $1/\\sin(z^{-2})$ in $0$) rende il teorema dei residui inapplicabile in quel punto.",
      sol:"<b>Strategia d'attacco (nucleo 13 + definizione di isolata).</b> La gerarchia decisionale: isolata? &rarr; classifica (eliminabile/polo $m$/essenziale) &rarr; scegli metodo (formula vs sviluppo, secondo l'ordine) &rarr; applica il teorema dei residui. Se NON isolata, il residuo in $z_0$ non esiste: si usa $\\mathrm{Res}_\\infty$ (con $\\oint_\\gamma=-2\\pi i\\,\\mathrm{Res}_\\infty$ se $\\gamma$ racchiude tutti i poli finiti) o si deforma. Saltare il primo controllo e' l'errore dell'appello 10/09/2024."
    }]
  },

  { pool:"laurent", src:"nucleo 12, tappa 04 (raggio/prossima singolarita')", steps:[{
      t:"COMPLESSA. Lo sviluppo di Laurent di $\\dfrac{1}{z(z-1)(z-3)}$ centrato in $z_0=0$ ammette quante corone, delimitate da quali raggi?",
      opts:[
        {x:"TRE corone: $0<|z|<1$, $1<|z|<3$, $|z|>3$; ogni singolarit&agrave; ($0,1,3$) e' un raggio di frontiera",c:true},
        {x:"una sola corona $0<|z|<\\infty$"},
        {x:"due corone, $0<|z|<1$ e $|z|>1$"},
        {x:"nessuna, perch&eacute; ci sono tre poli"}],
      hint:"Le singolarit&agrave; $|z|=1$ e $|z|=3$ (oltre a $z=0$ al centro) tagliano il piano in tre anelli concentrici; in ciascuno $\\frac{1}{z-1}$ e $\\frac{1}{z-3}$ si espandono in direzioni diverse.",
      sol:"<b>Teorema di Laurent (frontiere = singolarita').</b> I moduli delle singolarit&agrave; ($|0|$ al centro, $|1|=1$, $|3|=3$) delimitano tre corone: $0<|z|<1$, $1<|z|<3$, $|z|>3$. In ciascuna, ogni fratto $\\frac{1}{z-a}$ si sviluppa come $-\\frac1a\\sum(z/a)^n$ (se $|z|<|a|$) o $\\frac1z\\sum(a/z)^n$ (se $|z|>|a|$). Tre corone, tre serie: e' la generalizzazione del caso a due poli, e la conferma che la corona va SEMPRE dichiarata."
    }]
  }

];

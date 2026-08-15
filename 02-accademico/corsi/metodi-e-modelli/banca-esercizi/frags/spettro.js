Q.spettro = [

  /* ===================== CONCETTUALI + MODUS (prima meta') ===================== */

  { pool:"spettro", src:"nucleo 16, tappa 02", steps:[{
      t:"Il problema agli autovalori per un operatore differenziale $A$ consiste nel trovare:",
      opts:[
        {x:"gli scalari $\\lambda$ (autovalori) e le funzioni NON nulle $f$ del dominio tali che $Af=\\lambda f$; l'insieme degli autovalori e' lo SPETTRO",c:true},
        {x:"le sole funzioni $f$ con $Af=0$, cioe' il nucleo di $A$"},
        {x:"i punti $x$ in cui $A f$ diverge"},
        {x:"i coefficienti dello sviluppo di Taylor di $f$ in $x=0$"}],
      hint:"Un'autofunzione e' per definizione una soluzione NON banale: la funzione identicamente nulla soddisfa $Af=\\lambda f$ per ogni $\\lambda$, ma non individua nessun autovalore.",
      sol:"<b>Definizione di spettro (nucleo 16, tappa 02).</b> $\\lambda$ appartiene allo spettro se esiste $f\\neq0$ nel dominio con $Af=\\lambda f$. L'annullarsi del solo nucleo ($\\lambda=0$) e' un caso particolare; la funzione nulla e' esclusa PER DEFINIZIONE, ed e' proprio la richiesta $f\\neq0$ a rendere lo spettro un insieme discreto e non tutto $\\mathbb{C}$. Per un operatore differenziale il problema $Af=\\lambda f$ e' una ODE con condizioni al contorno."
    }]
  },

  { pool:"spettro", src:"nucleo 16 &middot; b01 (trappola dichiarata)", steps:[{
      t:"Lo STESSO operatore differenziale con condizioni al contorno DIVERSE ha:",
      opts:[
        {x:"spettri DIVERSI: le condizioni al contorno fanno parte della definizione dell'operatore, non sono un accessorio, e selezionano quali $\\lambda$ sono ammessi",c:true},
        {x:"sempre lo stesso spettro, perche' l'espressione differenziale e' la stessa"},
        {x:"spettro diverso solo se cambia l'intervallo, non se cambiano le BC"},
        {x:"nessuno spettro finche' non si fissano i valori iniziali di Cauchy"}],
      hint:"Su $[0,1]$ l'operatore $-d^2/dx^2$ con Dirichlet da' $\\{n^2\\pi^2\\}$, con Neumann da' $\\{n^2\\pi^2\\}\\cup\\{0\\}$: la sola $\\lambda=0$ gia' distingue i due spettri.",
      sol:"<b>Le condizioni al contorno definiscono l'operatore (nucleo 16, tappa 01).</b> Due espressioni differenziali identiche con domini diversi (BC diverse) sono operatori DIVERSI: hanno autofunzioni, spettro e talvolta persino autoaggiuntezza diversi. E' il punto che gli esami colpiscono piu' spesso: prima di risolvere si LEGGE il dominio. Esempio: $-i\\,d/dx$ e' autoaggiunto con BC periodiche, non lo e' con Dirichlet."
    }]
  },

  { pool:"spettro", src:"b01 &middot; nucleo 16 (modus)", steps:[{
      t:"MODUS OPERANDI. Sequenza corretta per trovare lo spettro di un operatore differenziale $A$ del secondo ordine a coefficienti costanti:",
      opts:[
        {x:"(1) scrivi $Af=\\lambda f$ come ODE; (2) equazione caratteristica e radici $\\alpha_\\pm(\\lambda)$; (3) soluzione generale; (4) IMPONI le BC ottenendo la condizione di quantizzazione su $\\lambda$; (5) tratta a parte i casi con radici coincidenti; (6) normalizza le autofunzioni",c:true},
        {x:"(1) calcola $\\det(A-\\lambda\\mathbb{1})$; (2) poni il determinante uguale a zero"},
        {x:"(1) sviluppa $f$ in serie di Fourier; (2) leggi gli autovalori dai coefficienti"},
        {x:"(1) integra $A$ su tutto l'intervallo; (2) i valori dell'integrale sono gli autovalori"}],
      hint:"Il determinante caratteristico e' lo strumento della dimensione FINITA (matrici). In dimensione infinita l'analogo e' la condizione che le BC impongono alle radici dell'equazione caratteristica.",
      sol:"<b>Strategia standard (nucleo 16 + trappole b01).</b> Per operatori differenziali NON esiste un determinante finito: la quantizzazione nasce dall'imporre le BC alla soluzione generale della ODE $Af=\\lambda f$. Ordine invariante: caratteristica $\\to$ soluzione generale $\\to$ BC $\\to$ condizione su $\\lambda$ (tipicamente $\\sinh(\\cdot)=0$ o $e^{(\\cdot)}=\\pm1$) $\\to$ casi degeneri a parte $\\to$ normalizzazione. Il passo (4) e' dove nasce lo spettro; il passo (5) e' dove si annidano gli errori."
    }]
  },

  { pool:"spettro", src:"b01 (trappole dichiarate, modus)", steps:[{
      t:"MODUS OPERANDI. Davanti a &laquo;trova lo spettro di $A$&raquo;, quali sono i casi da trattare SEPARATAMENTE, che la formula generale non copre?",
      opts:[
        {x:"il caso in cui l'equazione caratteristica ha radici COINCIDENTI (spesso $\\lambda=0$), che cambia la forma della soluzione; l'intervallo ILLIMITATO, dove puo' non esserci spettro discreto; e la verifica se $A$ e' autoaggiunto, che decide se attendersi autovalori reali",c:true},
        {x:"solo il caso in cui $\\lambda$ e' negativo"},
        {x:"solo il caso in cui l'intervallo ha lunghezza $1$"},
        {x:"nessuno: la formula generale copre sempre tutti i valori di $\\lambda$"}],
      hint:"Quando le due radici $\\alpha_\\pm$ dell'equazione caratteristica collassano in una sola, la coppia $\\{e^{\\alpha_+x},e^{\\alpha_-x}\\}$ degenera e serve $\\{e^{\\alpha x},x e^{\\alpha x}\\}$: la soluzione generale e' un'ALTRA.",
      sol:"<b>I tre casi-trappola censiti (b01).</b> (a) <i>Radici coincidenti / $\\lambda=0$</i>: la soluzione generale diventa $(A+Bx)e^{\\alpha x}$, va imposto a parte (20230620, 20250120). (b) <i>Intervallo illimitato</i> ($a\\to\\infty$): la BC puo' non essere soddisfacibile da alcun $\\lambda$, e l'operatore non ha spettro discreto (20240618). (c) <i>Autoaggiuntezza</i>: se $A$ non e' autoaggiunto gli autovalori possono essere COMPLESSI (20240618: $d/dx+1$). Saltare uno di questi e' l'errore tipico."
    }]
  },

  { pool:"spettro", src:"nucleo 16, tappa 01", steps:[{
      t:"L'operatore $A$ e' AUTOAGGIUNTO quando, dato $\\langle Af,g\\rangle=\\langle f,A^\\dagger g\\rangle$:",
      opts:[
        {x:"$A=A^\\dagger$ E i domini di $A$ e $A^\\dagger$ COINCIDONO; nell'integrazione per parti cio' equivale all'annullarsi del termine di bordo per tutte le $f,g$ del dominio",c:true},
        {x:"$A=A^\\dagger$ come espressione differenziale, senza alcuna condizione sui domini"},
        {x:"$A$ ha tutti gli autovalori reali, indipendentemente dalle BC"},
        {x:"$A$ commuta con la derivata prima"}],
      hint:"In dimensione infinita &laquo;simmetrico&raquo; (termine di bordo nullo sul dominio) NON basta: serve che anche il dominio dell'aggiunto sia lo stesso. E' la sottigliezza che distingue Metodi dall'algebra lineare finita.",
      sol:"<b>Definizione di operatore autoaggiunto (nucleo 16, tappa 01).</b> $A^\\dagger$ e' definito da $\\langle Af,g\\rangle=\\langle f,A^\\dagger g\\rangle$; $A$ e' autoaggiunto se $A=A^\\dagger$ con DOMINI uguali. Per un operatore differenziale l'integrazione per parti produce un termine di bordo $[\\,\\cdot\\,]_a^b$: le BC devono annullarlo (rendendo $A$ simmetrico) E fissare lo stesso dominio all'aggiunto. Un operatore solo simmetrico puo' non essere autoaggiunto e non avere una base di autofunzioni."
    }]
  },

  { pool:"spettro", src:"nucleo 16, tappa 01", steps:[{
      t:"Perche' un operatore autoaggiunto ha autovalori REALI?",
      opts:[
        {x:"da $A\\phi=\\lambda\\phi$ segue $\\lambda\\lVert\\phi\\rVert^2=\\langle A\\phi,\\phi\\rangle=\\langle\\phi,A\\phi\\rangle=\\bar\\lambda\\lVert\\phi\\rVert^2$, e con $\\phi\\neq0$ resta $\\lambda=\\bar\\lambda$",c:true},
        {x:"perche' la derivata di una funzione reale e' reale"},
        {x:"perche' ogni operatore differenziale ha autovalori reali per costruzione"},
        {x:"perche' gli autovalori sono i valori di $A$ sull'asse reale"}],
      hint:"Usa l'autoaggiuntezza sul prodotto scalare $\\langle A\\phi,\\phi\\rangle$ e sfrutta $\\lVert\\phi\\rVert^2>0$ per un'autofunzione non nulla.",
      sol:"<b>Realta' degli autovalori (proprieta' degli operatori autoaggiunti, nucleo 16, tappa 01).</b> Se $A=A^\\dagger$ allora $\\langle A\\phi,\\phi\\rangle=\\langle\\phi,A\\phi\\rangle$; sostituendo $A\\phi=\\lambda\\phi$ a sinistra e a destra si ottiene $\\lambda\\lVert\\phi\\rVert^2=\\bar\\lambda\\lVert\\phi\\rVert^2$, da cui $\\lambda\\in\\mathbb{R}$. E' il motivo per cui le osservabili quantistiche (autoaggiunte) hanno esiti reali. Il viceversa e' falso: autovalori reali NON implicano autoaggiuntezza."
    }]
  },

  { pool:"spettro", src:"20240618 turno A Es.4 &middot; nucleo 16", steps:[{
      t:"L'operatore $A=\\dfrac{d}{dx}+1$ su $[0,a)$ NON e' autoaggiunto. Cosa comporta per lo spettro?",
      opts:[
        {x:"gli autovalori possono essere COMPLESSI: la realta' non e' garantita, e infatti si trova $\\lambda_n=1+\\dfrac{i(2n+1)\\pi}{a}$, spettro puramente complesso",c:true},
        {x:"lo spettro e' comunque reale, come per ogni operatore differenziale"},
        {x:"l'operatore non ha spettro perche' non e' autoaggiunto"},
        {x:"gli autovalori sono reali ma le autofunzioni non sono normalizzabili"}],
      hint:"Il teorema che garantisce autovalori reali richiede l'autoaggiuntezza. Un operatore del primo ordine $d/dx+c$ tipicamente non lo e': niente vieta autovalori con parte immaginaria.",
      sol:"<b>Operatore non autoaggiunto (20240618 turno A, Es.4).</b> Il teorema &laquo;autoaggiunto $\\Rightarrow$ spettro reale&raquo; non e' invertibile: se $A$ non e' autoaggiunto, gli autovalori non hanno realta' garantita. Qui $f'+f=\\lambda f\\Rightarrow f=f(0)e^{(\\lambda-1)x}$; la BC $\\lim_{x\\to a}f=-f(0)$ da' $e^{(\\lambda-1)a}=-1$, cioe' $(\\lambda-1)a=i(2n+1)\\pi$ e $\\lambda_n=1+i(2n+1)\\pi/a$, PURAMENTE complessi. Re-derivato e coerente con la fonte b01."
    }]
  },

  { pool:"spettro", src:"nucleo 16, tappa 01 &middot; 20250707 Es.3", steps:[{
      t:"L'operatore $-i\\dfrac{d}{dx}$ su $[0,1]$ e' autoaggiunto:",
      opts:[
        {x:"solo per certe BC che annullano il termine di bordo $-i[f\\bar g]_0^1$: periodiche $f(1)=f(0)$ o antiperiodiche $f(1)=-f(0)$ vanno bene; Dirichlet $f(0)=f(1)=0$ lo rende simmetrico ma NON autoaggiunto",c:true},
        {x:"sempre, qualunque siano le BC, perche' contiene il fattore $-i$"},
        {x:"mai, perche' la derivata prima non e' autoaggiunta"},
        {x:"solo con BC di Cauchy $f(0)=f'(0)=0$"}],
      hint:"Integra per parti: $\\langle -if',g\\rangle-\\langle f,-ig'\\rangle=-i[f\\bar g]_0^1$. Serve che questo termine si annulli PER TUTTE le coppie del dominio; le antiperiodiche $f(1)=-f(0)$ lo fanno.",
      sol:"<b>Autoaggiuntezza dipendente dalle BC (nucleo 16, tappa 01; compito 08/07/2025 Es.3).</b> Il termine di bordo $-i[f\\bar g]_0^1$ si annulla con BC periodiche o antiperiodiche, rendendo $-i\\,d/dx$ autoaggiunto (spettro reale, base ortonormale). Con $f(1)=-f(0)$ (antiperiodiche) gli autovalori sono $\\lambda_n=(2n+1)\\pi\\in\\mathbb{R}$. Con Dirichlet l'operatore e' solo simmetrico e non ha autofunzioni: e' &laquo;l'impulso in una scatola&raquo;, oggetto delicato."
    }]
  },

  { pool:"spettro", src:"nucleo 16, tappa 03", steps:[{
      t:"Un problema di Sturm-Liouville e' un problema agli autovalori nella forma:",
      opts:[
        {x:"$\\dfrac{d}{dx}\\!\\big(p(x)u'\\big)+q(x)u+\\lambda\\,w(x)\\,u=0$ con $p,w>0$ e BC separate; e' la forma AUTOAGGIUNTA rispetto al prodotto scalare con peso $w$",c:true},
        {x:"$u''+\\lambda u=0$ e nient'altro, valida solo a coefficienti costanti"},
        {x:"$Au=\\lambda u$ con $A$ una matrice simmetrica"},
        {x:"un problema di Cauchy con dati iniziali assegnati"}],
      hint:"Ogni ODE lineare del secondo ordine si porta in questa forma con un fattore integrante: non e' un caso particolare, e' una forma NORMALE. Il peso $w$ compare davanti a $\\lambda$.",
      sol:"<b>Forma di Sturm-Liouville (nucleo 16, tappa 03).</b> $(pu')'+qu+\\lambda w u=0$ rende l'operatore autoaggiunto rispetto a $\\langle f,g\\rangle_w=\\int_a^b f\\bar g\\,w\\,dx$. Ne seguono: autovalori $\\lambda_n$ reali, discreti, $\\lambda_n\\to+\\infty$; autofunzioni ORTOGONALI col peso $w$; base di $L^2_w[a,b]$. Fourier ($p=w=1$), Legendre ($w=1$), Bessel ($w=x$), Hermite ($w=e^{-x^2}$) sono tutti casi di questa forma."
    }]
  },

  { pool:"spettro", src:"nucleo 16, tappa 03 &middot; b03 Set 2", steps:[{
      t:"Le autofunzioni $\\{\\phi_n\\}$ di un problema di Sturm-Liouville soddisfano:",
      opts:[
        {x:"ORTOGONALITA' col peso: $\\int_a^b\\phi_n\\phi_m\\,w\\,dx=0$ per $n\\neq m$, e formano una BASE di $L^2_w$, cosicche' ogni $f$ si sviluppa in serie di autofunzioni con Parseval",c:true},
        {x:"ortogonalita' senza peso, sempre, qualunque sia l'operatore"},
        {x:"non sono in generale ortogonali fra loro"},
        {x:"sono ortogonali solo se gli autovalori sono positivi"}],
      hint:"L'ortogonalita' nasce dall'autoaggiuntezza rispetto al prodotto scalare CON peso: e' $\\int\\phi_n\\phi_m w\\,dx$ ad annullarsi, non $\\int\\phi_n\\phi_m dx$ (a meno che $w=1$).",
      sol:"<b>Ortogonalita' col peso e completezza (nucleo 16, tappa 03).</b> Da $A\\phi_n=\\lambda_n\\phi_n$ e $A$ autoaggiunto in $L^2_w$ segue $(\\lambda_n-\\lambda_m)\\langle\\phi_n,\\phi_m\\rangle_w=0$: per autovalori distinti $\\langle\\phi_n,\\phi_m\\rangle_w=0$. Il teorema di Sturm-Liouville garantisce inoltre la COMPLETEZZA: $f=\\sum_n c_n\\phi_n$ con $c_n=\\langle\\phi_n,f\\rangle_w/\\lVert\\phi_n\\rVert_w^2$. E' la generalizzazione della serie di Fourier a operatori con peso non banale."
    }]
  },

  { pool:"spettro", src:"nucleo 16, tappa 03", steps:[{
      t:"Il teorema dei nodi per un problema di Sturm-Liouville afferma che la $n$-esima autofunzione ha:",
      opts:[
        {x:"esattamente $n-1$ zeri INTERNI (ordinando $\\lambda_1<\\lambda_2<\\cdots$): la fondamentale non cambia mai segno, e contare i nodi equivale a contare il livello",c:true},
        {x:"esattamente $n$ zeri interni"},
        {x:"un numero di zeri che dipende dal peso $w$"},
        {x:"nessuno zero, sempre"}],
      hint:"La prima autofunzione (autovalore piu' basso) non ha nodi interni; ogni autovalore successivo aggiunge esattamente un nodo. In una scatola: $\\sin(n\\pi x/L)$ ha $n-1$ zeri in $(0,L)$.",
      sol:"<b>Teorema dei nodi (nucleo 16, tappa 03).</b> Ordinando $\\lambda_1<\\lambda_2<\\cdots$, l'autofunzione $\\phi_n$ ha esattamente $n-1$ zeri nell'aperto $(a,b)$. In meccanica quantistica: lo stato fondamentale non ha nodi, e il numero di nodi identifica il livello. E' un enunciato QUALITATIVO potente: permette di ordinare gli autovalori senza calcolarli, semplicemente contando i cambi di segno delle autofunzioni."
    }]
  },

  { pool:"spettro", src:"20230620 Es.3 &middot; b01 (trappola dichiarata)", steps:[{
      t:"Nel risolvere $Af=\\lambda f$ per un operatore del secondo ordine a coefficienti costanti, il valore $\\lambda$ per cui l'equazione caratteristica ha radici COINCIDENTI:",
      opts:[
        {x:"va trattato SEPARATAMENTE: la soluzione generale non e' piu' $Ae^{\\alpha_+x}+Be^{\\alpha_-x}$ ma $(A+Bx)e^{\\alpha x}$, e le BC vanno reimposte su questa forma",c:true},
        {x:"si ottiene per continuita' dalla formula generale, ponendo $\\alpha_+=\\alpha_-$"},
        {x:"non puo' mai appartenere allo spettro, per principio"},
        {x:"da' sempre un'autofunzione, indipendentemente dalle BC"}],
      hint:"Quando $\\alpha_+=\\alpha_-=\\alpha$ le due esponenziali coincidono e $\\{e^{\\alpha x},e^{\\alpha x}\\}$ non e' piu' una base dello spazio delle soluzioni: la seconda soluzione indipendente e' $x e^{\\alpha x}$.",
      sol:"<b>Radici coincidenti dell'equazione caratteristica (metodo delle soluzioni esponenziali; trappola b01).</b> Per una ODE lineare a coefficienti costanti, se la caratteristica ha una radice doppia $\\alpha$, la soluzione generale e' $(A+Bx)e^{\\alpha x}$. Occorre imporre le BC su QUESTA e verificare se sopravvive un'autofunzione non nulla. In 20230620 ($A=d^2/dx^2-2d/dx+1$) e 20250120 ($A=d^2/dx^2+2$) il caso $\\lambda=0$ risp. $\\lambda=2$ forza $A=B=0$: nessuna autofunzione, quel valore NON e' nello spettro."
    }]
  },

  { pool:"spettro", src:"20240618 turno A Es.4 &middot; b01 (&laquo;a infinito non c'e' spettro&raquo;)", steps:[{
      t:"Passando dall'intervallo $[0,a)$ con $a$ finito al caso $a\\to\\infty$, per un operatore del primo ordine con BC che lega i due estremi:",
      opts:[
        {x:"la condizione al contorno puo' non essere soddisfacibile da ALCUN $\\lambda$ (salvo $f\\equiv0$): l'operatore perde lo spettro discreto e non ha autovalori",c:true},
        {x:"lo spettro resta identico, con gli stessi $\\lambda_n$"},
        {x:"lo spettro diventa automaticamente tutto $\\mathbb{R}$"},
        {x:"gli autovalori raddoppiano di numero"}],
      hint:"Con $a$ finito la BC $e^{(\\lambda-1)a}=-1$ ha infinite soluzioni $\\lambda_n$; mandando $a\\to\\infty$ quella condizione periodica sull'esponenziale non individua piu' alcun $\\lambda$ isolato.",
      sol:"<b>Intervallo illimitato senza spettro (20240618 turno A, Es.4).</b> Per $a$ finito la BC quantizza $\\lambda_n=1+i(2n+1)\\pi/a$; per $a\\to\\infty$ nessun $\\lambda$ soddisfa la BC a meno di $f(0)=0$, che da' $f\\equiv0$ (non autofunzione). L'operatore &laquo;non ha spettro&raquo; nel senso discreto: e' il caso-trappola dichiarato in b01. Attenzione a non confonderlo con la comparsa di spettro CONTINUO, che richiede autofunzioni generalizzate (onde piane) e un'analisi a parte."
    }]
  },

  { pool:"spettro", src:"nucleo 16, tappa 04", steps:[{
      t:"Su un intervallo ILLIMITATO lo spettro puo' diventare CONTINUO. Nel linguaggio del risolvente $R(z)=(A-z)^{-1}=\\sum_n\\dfrac{P_n}{\\lambda_n-z}$ cio' corrisponde a:",
      opts:[
        {x:"un TAGLIO di non-analiticita', non a poli isolati: infiniti autovalori che si addensano diventano una linea di non-olomorfia; le &laquo;autofunzioni&raquo; sono onde piane non normalizzabili",c:true},
        {x:"un polo di ordine infinito nell'origine"},
        {x:"una singolarita' essenziale del risolvente"},
        {x:"l'assenza totale di singolarita' del risolvente"}],
      hint:"Lo spettro e' l'insieme dei punti dove il risolvente NON e' olomorfo. Autovalori discreti = poli; un continuo = infiniti poli che si fondono in un taglio.",
      sol:"<b>Spettro continuo come taglio del risolvente (nucleo 16, tappa 04).</b> Per spettro discreto $R(z)$ ha poli negli autovalori con residui i proiettori $P_n$. Su domini illimitati (operatore posizione, hamiltoniana libera) gli autovettori non stanno in $L^2$ (onde piane) e la somma diventa un integrale su una misura spettrale: il risolvente sviluppa un TAGLIO. La distinzione stati legati (poli) / stati di scattering (tagli) e' la distinzione fra le due specie di singolarita' del Movimento III."
    }]
  },

  { pool:"spettro", src:"nucleo 16 &middot; b01 (modus)", steps:[{
      t:"Nel risolvere l'equazione caratteristica $\\alpha^2+c_1\\alpha+(c_0-\\lambda)=0$ associata a $Af=\\lambda f$, la forma della soluzione generale dipende dal discriminante. Quale corrispondenza e' corretta?",
      opts:[
        {x:"radici reali distinte $\\to Ae^{\\alpha_+x}+Be^{\\alpha_-x}$; radici complesse coniugate $\\to$ esponenziale per seni/coseni; radice doppia $\\to(A+Bx)e^{\\alpha x}$",c:true},
        {x:"la soluzione e' sempre $A\\cos(\\alpha x)+B\\sin(\\alpha x)$, qualunque sia il discriminante"},
        {x:"la soluzione e' sempre $Ae^{\\alpha x}$ con una sola costante"},
        {x:"radice doppia $\\to Ae^{\\alpha x}+Be^{-\\alpha x}$"}],
      hint:"E' proprio il caso della radice doppia (discriminante nullo) a produrre il termine $x e^{\\alpha x}$ e a richiedere il trattamento separato: e' li' che si nascondono i $\\lambda$ eccezionali.",
      sol:"<b>Struttura delle soluzioni di una ODE lineare a coefficienti costanti.</b> Il discriminante $\\Delta=c_1^2-4(c_0-\\lambda)$ decide: $\\Delta>0$ due esponenziali reali; $\\Delta<0$ $e^{\\mathrm{Re}\\,\\alpha\\,x}$ moltiplicato per $\\cos,\\sin$ della parte immaginaria; $\\Delta=0$ radice doppia con la coppia $\\{e^{\\alpha x},x e^{\\alpha x}\\}$. Nei problemi di spettro il valore di $\\lambda$ che annulla $\\Delta$ (radici coincidenti) e' il caso da isolare: coincide spesso con $\\lambda$ dell'autovalore nullo dell'operatore."
    }]
  },

  /* ===================== CALCOLO E MULTI-STEP (seconda meta') ===================== */

  { pool:"spettro", src:"20230620 Es.3", steps:[
    { t:"$A=\\dfrac{d^2}{dx^2}-2\\dfrac{d}{dx}+1$ su $[0,1]$, BC $f(0)=f(1)=0$. Scritta $Af=\\lambda f$ come $f''-2f'+(1-\\lambda)f=0$, l'equazione caratteristica e le radici sono:",
      opts:[
        {x:"$\\alpha^2-2\\alpha+(1-\\lambda)=0\\Rightarrow\\alpha_\\pm=1\\pm\\sqrt\\lambda$",c:true},
        {x:"$\\alpha^2-2\\alpha+1=0\\Rightarrow\\alpha=1$ doppio per ogni $\\lambda$"},
        {x:"$\\alpha^2+2\\alpha+(1-\\lambda)=0\\Rightarrow\\alpha_\\pm=-1\\pm\\sqrt\\lambda$"},
        {x:"$\\alpha=\\pm\\sqrt{\\lambda-1}$"}],
      hint:"Sostituisci $f=e^{\\alpha x}$: $\\alpha^2-2\\alpha+1-\\lambda=0$, cioe' $(\\alpha-1)^2=\\lambda$, da cui $\\alpha=1\\pm\\sqrt\\lambda$.",
      sol:"<b>Equazione caratteristica (metodo delle soluzioni esponenziali).</b> $f=e^{\\alpha x}$ da' $\\alpha^2-2\\alpha+(1-\\lambda)=0$, cioe' $(\\alpha-1)^2=\\lambda$, quindi $\\alpha_\\pm=1\\pm\\sqrt\\lambda$. Per $\\lambda\\neq0$ le due radici sono distinte e $f=e^{x}\\big(Ae^{\\sqrt\\lambda\\,x}+Be^{-\\sqrt\\lambda\\,x}\\big)$. Re-derivato, coerente con la soluzione ufficiale del 20/06/2023.",
      cont:"Ora imponi le BC e quantizza &rarr;" },
    { t:"Imponendo $f(0)=f(1)=0$ (con $\\lambda\\neq0$), la condizione di quantizzazione e lo spettro sono:",
      opts:[
        {x:"$\\sinh(\\sqrt\\lambda)=0\\Rightarrow\\sqrt\\lambda=in\\pi\\Rightarrow\\lambda_n=-n^2\\pi^2$, con autofunzioni $f_n(x)\\propto e^{x}\\sin(n\\pi x)$",c:true},
        {x:"$\\cosh(\\sqrt\\lambda)=0\\Rightarrow\\lambda_n=n^2\\pi^2$"},
        {x:"$\\sqrt\\lambda=n\\pi\\Rightarrow\\lambda_n=+n^2\\pi^2$, autofunzioni $\\sin(n\\pi x)$"},
        {x:"nessuna quantizzazione: ogni $\\lambda$ e' autovalore"}],
      hint:"$f(0)=0$ da' $B=-A$; $f(1)=0$ da' $A\\,e(e^{\\sqrt\\lambda}-e^{-\\sqrt\\lambda})=0$, cioe' $\\sinh(\\sqrt\\lambda)=0$. Gli zeri del $\\sinh$ sono $\\sqrt\\lambda=in\\pi$.",
      sol:"<b>Quantizzazione dalle BC.</b> $f(0)=0\\Rightarrow B=-A$; allora $f=Ae^{x}(e^{\\sqrt\\lambda x}-e^{-\\sqrt\\lambda x})=2Ae^{x}\\sinh(\\sqrt\\lambda x)$, e $f(1)=0\\Rightarrow\\sinh(\\sqrt\\lambda)=0\\Rightarrow\\sqrt\\lambda=in\\pi\\Rightarrow\\lambda_n=-n^2\\pi^2$. Poiche' $\\sinh(in\\pi x)=i\\sin(n\\pi x)$, le autofunzioni sono $f_n\\propto e^{x}\\sin(n\\pi x)$, $n\\in\\mathbb{Z}\\setminus\\{0\\}$. Re-derivato: coincide con la soluzione ufficiale.",
      cont:"Ora il caso escluso $\\lambda=0$ &rarr;" },
    { t:"Il caso $\\lambda=0$ (radici coincidenti $\\alpha=1$):",
      opts:[
        {x:"da' soluzione generale $(A+Bx)e^{x}$; le BC $f(0)=f(1)=0$ forzano $A=B=0$, quindi NON e' un autovalore",c:true},
        {x:"da' l'autofunzione $f_0=e^{x}$, quindi $\\lambda=0$ e' nello spettro"},
        {x:"si ottiene ponendo $n=0$ nella formula $\\lambda_n=-n^2\\pi^2$, ed e' un autovalore valido"},
        {x:"rende l'operatore non definito"}],
      hint:"Con $\\lambda=0$ la caratteristica ha radice DOPPIA $\\alpha=1$: la seconda soluzione indipendente e' $xe^{x}$, non $e^{-x}$. Imponi le BC su $(A+Bx)e^x$.",
      sol:"<b>Autovalore nullo trattato a parte (trappola b01).</b> Con $\\lambda=0$, $(\\alpha-1)^2=0$ da' $\\alpha=1$ doppio e soluzione $(A+Bx)e^{x}$. $f(0)=0\\Rightarrow A=0$; $f(1)=0\\Rightarrow Be=0\\Rightarrow B=0$: solo la funzione nulla. Dunque $\\lambda=0\\notin$ spettro, e correttamente $n\\in\\mathbb{Z}\\setminus\\{0\\}$. Formalmente $n=0$ nella formula $-n^2\\pi^2$ darebbe $0$, ma NON e' un autovalore: la formula generale non copre le radici coincidenti. Re-derivato." }
  ]},

  { pool:"spettro", src:"20250120 Es.4", steps:[
    { t:"$A=\\dfrac{d^2}{dx^2}+2$ su $[0,1]$, BC $f(0)=f(1)=0$. Scritta $Af=\\lambda f$ come $f''+(2-\\lambda)f=0$, le radici caratteristiche sono:",
      opts:[
        {x:"$\\alpha_\\pm=\\pm\\sqrt{\\lambda-2}$",c:true},
        {x:"$\\alpha_\\pm=\\pm\\sqrt{2-\\lambda}$ reali per ogni $\\lambda$"},
        {x:"$\\alpha=\\pm\\sqrt{\\lambda+2}$"},
        {x:"$\\alpha=2-\\lambda$"}],
      hint:"$f=e^{\\alpha x}$ da' $\\alpha^2+(2-\\lambda)=0$, cioe' $\\alpha^2=\\lambda-2$.",
      sol:"<b>Equazione caratteristica.</b> $\\alpha^2+2-\\lambda=0\\Rightarrow\\alpha_\\pm=\\pm\\sqrt{\\lambda-2}$. Per $\\lambda\\neq2$ le radici sono distinte e $f=A_+e^{\\sqrt{\\lambda-2}\\,x}+A_-e^{-\\sqrt{\\lambda-2}\\,x}$. Re-derivato, coerente con la soluzione ufficiale del 20/01/2025.",
      cont:"Ora quantizza con le BC &rarr;" },
    { t:"Le BC $f(0)=f(1)=0$ (con $\\lambda\\neq2$) danno:",
      opts:[
        {x:"$\\sinh(\\sqrt{\\lambda-2})=0\\Rightarrow\\sqrt{\\lambda-2}=in\\pi\\Rightarrow\\lambda_n=2-n^2\\pi^2$, con $n\\in\\mathbb{Z}\\setminus\\{0\\}$",c:true},
        {x:"$\\lambda_n=2+n^2\\pi^2$"},
        {x:"$\\lambda_n=n^2\\pi^2$"},
        {x:"$\\cosh(\\sqrt{\\lambda-2})=0$, nessuna soluzione"}],
      hint:"$f(0)=0\\Rightarrow A_-=-A_+$; $f(1)=0\\Rightarrow A_+(e^{\\sqrt{\\lambda-2}}-e^{-\\sqrt{\\lambda-2}})=0$, cioe' $\\sinh(\\sqrt{\\lambda-2})=0$.",
      sol:"<b>Quantizzazione (soluzione ufficiale 20/01/2025).</b> $f(0)=0\\Rightarrow A_-=-A_+$, quindi $f\\propto\\sinh(\\sqrt{\\lambda-2}\\,x)$ e $f(1)=0\\Rightarrow\\sinh(\\sqrt{\\lambda-2})=0\\Rightarrow e^{2\\sqrt{\\lambda-2}}=1\\Rightarrow\\sqrt{\\lambda-2}=in\\pi$. Dunque $\\lambda_n=2-n^2\\pi^2$. Re-derivato: coincide con la stampa ufficiale $\\lambda_n=2-n^2\\pi^2$, $n\\in\\mathbb{Z}/\\{0\\}$.",
      cont:"Perche' $n=0$ e' escluso? &rarr;" },
    { t:"Il valore $\\lambda=2$ (cioe' $n=0$):",
      opts:[
        {x:"da' radici coincidenti $\\alpha_+=\\alpha_-=0$, soluzione generale $A+Bx$; le BC forzano $A=B=0$, quindi $\\lambda=2\\notin$ spettro",c:true},
        {x:"da' l'autofunzione costante $f=1$, quindi $\\lambda=2$ e' nello spettro"},
        {x:"da' $f=x$, autofunzione valida"},
        {x:"e' un polo dell'operatore"}],
      hint:"Con $\\lambda=2$ si ha $\\alpha=0$ doppio: la soluzione generale e' un polinomio di primo grado $A+Bx$. Imponi $f(0)=f(1)=0$ su di esso.",
      sol:"<b>Autovalore degenere trattato a parte (soluzione ufficiale 20/01/2025).</b> $\\lambda=2\\Rightarrow\\alpha=0$ doppio $\\Rightarrow f=A+Bx$. $f(0)=0\\Rightarrow A=0$; $f(1)=0\\Rightarrow B=0$: autofunzione nulla, $\\lambda=2$ escluso. E' esattamente il caso &laquo;radici coincidenti&raquo; della trappola b01, e il motivo per cui lo spettro e' $\\{2-n^2\\pi^2: n\\in\\mathbb{Z}\\setminus\\{0\\}\\}$. Re-derivato." }
  ]},

  { pool:"spettro", src:"20240618 turno A Es.4", steps:[
    { t:"$A=\\dfrac{d}{dx}+1$ su $[0,a)$, dominio $\\{f:\\ \\lim_{x\\to a}f(x)=-f(0)\\}$. Risolta $Af=\\lambda f$, la soluzione e':",
      opts:[
        {x:"$f'=(\\lambda-1)f\\Rightarrow f(x)=f(0)\\,e^{(\\lambda-1)x}$",c:true},
        {x:"$f(x)=f(0)\\,e^{(\\lambda+1)x}$"},
        {x:"$f(x)=f(0)\\cos((\\lambda-1)x)$"},
        {x:"$f(x)=f(0)+(\\lambda-1)x$"}],
      hint:"$\\frac{df}{dx}+f=\\lambda f\\Rightarrow f'=(\\lambda-1)f$: ODE del primo ordine a variabili separabili, soluzione esponenziale.",
      sol:"<b>ODE del primo ordine.</b> $f'+f=\\lambda f\\Rightarrow f'=(\\lambda-1)f\\Rightarrow f(x)=f(0)e^{(\\lambda-1)x}$. Un operatore del PRIMO ordine ha una sola costante e richiede UNA sola condizione al contorno (a differenza del secondo ordine, che ne richiede due). Re-derivato, coerente con b01.",
      cont:"Imponi la BC e trova lo spettro &rarr;" },
    { t:"La condizione $\\lim_{x\\to a}f=-f(0)$ (con $a$ finito) da':",
      opts:[
        {x:"$e^{(\\lambda-1)a}=-1\\Rightarrow(\\lambda-1)a=i(2n+1)\\pi\\Rightarrow\\lambda_n=1+\\dfrac{i(2n+1)\\pi}{a}$: spettro PURAMENTE complesso",c:true},
        {x:"$e^{(\\lambda-1)a}=1\\Rightarrow\\lambda_n=1+\\dfrac{2in\\pi}{a}$"},
        {x:"$\\lambda_n=1-n^2\\pi^2/a^2$, reale"},
        {x:"nessun $\\lambda$ soddisfa la condizione"}],
      hint:"$f(0)e^{(\\lambda-1)a}=-f(0)\\Rightarrow e^{(\\lambda-1)a}=-1$. Gli zeri di $e^{w}+1$ sono $w=i(2n+1)\\pi$ (multipli DISPARI di $i\\pi$).",
      sol:"<b>Quantizzazione con BC non standard + operatore non autoaggiunto (20240618 turno A, Es.4).</b> $e^{(\\lambda-1)a}=-1\\Rightarrow(\\lambda-1)a=i\\pi(2n+1)$, quindi $\\lambda_n=1+i(2n+1)\\pi/a$. Gli autovalori hanno parte immaginaria: coerente col fatto che $d/dx+1$ NON e' autoaggiunto (il teorema di realta' non si applica). Re-derivato.",
      cont:"E il caso $a\\to\\infty$? &rarr;" },
    { t:"Per $a\\to\\infty$ (intervallo illimitato):",
      opts:[
        {x:"nessun $\\lambda$ soddisfa $e^{(\\lambda-1)a}=-1$ salvo $f(0)=0$, che da' $f\\equiv0$: l'operatore NON ha spettro (discreto)",c:true},
        {x:"lo spettro diventa denso ma resta discreto"},
        {x:"si ottiene $\\lambda=1$ come unico autovalore"},
        {x:"lo spettro diventa tutto l'asse reale"}],
      hint:"Facendo $a\\to\\infty$ i valori $\\lambda_n=1+i(2n+1)\\pi/a$ collassano tutti verso $1$, ma la condizione $e^{(\\lambda-1)a}=-1$ non ammette piu' soluzioni fisse per $f$ non nulla.",
      sol:"<b>Assenza di spettro su intervallo illimitato (trappola b01, &laquo;a infinito non c'e' spettro&raquo;).</b> Per $a=\\infty$ la BC $\\lim_{x\\to\\infty}f=-f(0)$ non e' soddisfacibile da $f(0)e^{(\\lambda-1)x}$ con $f(0)\\neq0$ (l'esponenziale non tende a $-f(0)$ per nessun $\\lambda$ fisso), e $f(0)=0$ da' $f\\equiv0$. Quindi nessun autovalore. E' il caso dichiarato esplicitamente in b01. Re-derivato." }
  ]},

  { pool:"spettro", src:"20250707 Es.3", steps:[
    { t:"$A=-i\\dfrac{d}{dx}$ su $[0,1]$, dominio $\\{f\\in C[0,1]:\\ f(1)=-f(0)\\}$ (antiperiodiche). Risolta $Af=\\lambda f$ e imposta la BC:",
      opts:[
        {x:"$-if'=\\lambda f\\Rightarrow f=f_0 e^{i\\lambda x}$; la BC $e^{i\\lambda}=-1$ da' $\\lambda_n=(2n+1)\\pi$, $n\\in\\mathbb{Z}$: autovalori REALI",c:true},
        {x:"$\\lambda_n=2n\\pi$, reali"},
        {x:"$\\lambda_n=in\\pi$, immaginari puri"},
        {x:"nessuna quantizzazione, spettro continuo"}],
      hint:"$-if'=\\lambda f\\Rightarrow f'=i\\lambda f\\Rightarrow f=f_0e^{i\\lambda x}$. La BC $f(1)=-f(0)$ da' $e^{i\\lambda}=-1$, cioe' $i\\lambda=i(2n+1)\\pi$.",
      sol:"<b>Spettro reale da operatore autoaggiunto (compito 08/07/2025 Es.3).</b> $f=f_0e^{i\\lambda x}$; $f(1)=-f(0)\\Rightarrow e^{i\\lambda}=-1\\Rightarrow\\lambda_n=(2n+1)\\pi$, $n\\in\\mathbb{Z}$. Gli autovalori sono REALI perche' $-i\\,d/dx$ con BC antiperiodiche e' autoaggiunto (il termine di bordo $-i[f\\bar g]_0^1$ si annulla). Contrasto netto con $d/dx+1$: la stessa aria di operatore del primo ordine, ma li' complesso, qui reale, e la differenza e' l'autoaggiuntezza. Re-derivato.",
      cont:"Ora sviluppa $f=1$ nella base &rarr;" },
    { t:"Le autofunzioni normalizzate sono $f_n(x)=e^{i(2n+1)\\pi x}$ (con $\\langle f_n,f_m\\rangle=\\delta_{nm}$). Lo sviluppo di $f(x)=1$ ha coefficienti:",
      opts:[
        {x:"$c_n=\\langle f_n,1\\rangle=\\displaystyle\\int_0^1 e^{-i(2n+1)\\pi x}dx=\\dfrac{2}{i\\pi(2n+1)}$",c:true},
        {x:"$c_n=\\delta_{n,0}$, cioe' $1$ e' gia' un'autofunzione"},
        {x:"$c_n=\\dfrac{1}{2n+1}$"},
        {x:"$c_n=0$ per ogni $n$"}],
      hint:"$c_n=\\int_0^1 \\overline{f_n(x)}\\cdot1\\,dx=\\int_0^1 e^{-i(2n+1)\\pi x}dx$; integra l'esponenziale e usa $e^{-i(2n+1)\\pi}=-1$.",
      sol:"<b>Sviluppo in serie di autofunzioni (compito 08/07/2025 Es.3).</b> Essendo $A$ autoaggiunto, $\\{f_n\\}$ e' una base ortonormale di $L^2[0,1]$ e $1=\\sum_n c_n f_n$ con $c_n=\\langle f_n,1\\rangle$. $c_n=\\int_0^1 e^{-i(2n+1)\\pi x}dx=\\dfrac{e^{-i(2n+1)\\pi}-1}{-i(2n+1)\\pi}=\\dfrac{-1-1}{-i(2n+1)\\pi}=\\dfrac{2}{i\\pi(2n+1)}$. La completezza della base e' garantita dal teorema spettrale per operatori autoaggiunti. Re-derivato, coincide con la stampa ufficiale." }
  ]},

  { pool:"spettro", src:"nucleo 16, tappa 03 (particella nella scatola)", steps:[
    { t:"$-u''=\\lambda u$ su $[0,L]$ con Dirichlet $u(0)=u(L)=0$. Soluzione generale $u=A\\sin(\\sqrt\\lambda x)+B\\cos(\\sqrt\\lambda x)$; imponendo le BC:",
      opts:[
        {x:"$B=0$ e $\\sin(\\sqrt\\lambda L)=0\\Rightarrow\\sqrt\\lambda L=n\\pi\\Rightarrow\\lambda_n=\\left(\\dfrac{n\\pi}{L}\\right)^2$, $n=1,2,\\dots$",c:true},
        {x:"$A=0$ e $\\lambda_n=\\left(\\dfrac{n\\pi}{L}\\right)^2$ con autofunzioni $\\cos$"},
        {x:"$\\lambda_n=\\dfrac{n\\pi}{L}$, lineare in $n$"},
        {x:"$\\lambda_n=-\\left(\\dfrac{n\\pi}{L}\\right)^2$"}],
      hint:"$u(0)=0\\Rightarrow B=0$; resta $u=A\\sin(\\sqrt\\lambda x)$, e $u(L)=0\\Rightarrow\\sin(\\sqrt\\lambda L)=0$, i cui zeri sono $\\sqrt\\lambda L=n\\pi$.",
      sol:"<b>Sturm-Liouville con $p=w=1$, Dirichlet (nucleo 16, tappa 03).</b> $u(0)=0\\Rightarrow B=0$; $u(L)=0\\Rightarrow\\sin(\\sqrt\\lambda L)=0\\Rightarrow\\lambda_n=(n\\pi/L)^2$. E' la particella in una scatola: $E_n=\\hbar^2\\pi^2 n^2/(2mL^2)$. Re-derivato. La quantizzazione e' la stessa dei modi di una corda: le BC selezionano un insieme DISCRETO di $\\lambda$.",
      cont:"Ora normalizza l'autofunzione &rarr;" },
    { t:"L'autofunzione $u_n=A\\sin(n\\pi x/L)$ normalizzata in $L^2[0,L]$ ha:",
      opts:[
        {x:"$A=\\sqrt{2/L}$, poiche' $\\displaystyle\\int_0^L\\sin^2(n\\pi x/L)\\,dx=\\dfrac{L}{2}$",c:true},
        {x:"$A=1/L$"},
        {x:"$A=\\sqrt{L/2}$"},
        {x:"$A=1$, gia' normalizzata"}],
      hint:"Imponi $\\int_0^L|u_n|^2dx=1$; l'integrale di $\\sin^2$ su un numero intero di semiperiodi vale meta' dell'intervallo, $L/2$.",
      sol:"<b>Normalizzazione delle autofunzioni.</b> $\\int_0^L\\sin^2(n\\pi x/L)dx=L/2$ (media di $\\sin^2$ pari a $1/2$ su un numero intero di semionde), quindi $A^2\\cdot L/2=1\\Rightarrow A=\\sqrt{2/L}$ e $u_n=\\sqrt{2/L}\\,\\sin(n\\pi x/L)$. Le autofunzioni sono ortonormali per il teorema di Sturm-Liouville: $\\int_0^L u_n u_m dx=\\delta_{nm}$. Re-derivato." }
  ]},

  { pool:"spettro", src:"b03 Set 2 (momento angolare)", steps:[
    { t:"L'operatore $L_z=-i\\dfrac{d}{d\\varphi}$ agisce su funzioni della variabile angolare $\\varphi\\in[0,2\\pi)$ con condizione di PERIODICITA' $\\psi(\\varphi+2\\pi)=\\psi(\\varphi)$. Le autofunzioni di $L_z\\psi=m\\psi$ sono:",
      opts:[
        {x:"$\\psi_m(\\varphi)=e^{im\\varphi}$, e la periodicita' forza $m\\in\\mathbb{Z}$",c:true},
        {x:"$\\psi_m(\\varphi)=e^{im\\varphi}$ con $m\\in\\mathbb{R}$ qualsiasi"},
        {x:"$\\psi_m(\\varphi)=\\cos(m\\varphi)$ con $m$ semi-intero"},
        {x:"$\\psi_m(\\varphi)=e^{-m\\varphi}$ con $m>0$"}],
      hint:"$-i\\psi'=m\\psi\\Rightarrow\\psi=e^{im\\varphi}$; la condizione $\\psi(2\\pi)=\\psi(0)$ da' $e^{2\\pi im}=1$, i cui zeri richiedono $m$ intero.",
      sol:"<b>Quantizzazione del momento angolare (b03 Set 2).</b> $-i\\psi'=m\\psi\\Rightarrow\\psi_m=e^{im\\varphi}$; la periodicita' $2\\pi$ impone $e^{2\\pi im}=1\\Rightarrow m\\in\\mathbb{Z}$. La BC periodica e' cio' che rende $L_z$ autoaggiunto e discreto: autovalori interi REALI. E' l'esatto analogo circolare di $-i\\,d/dx$ periodico. Valore $m\\in\\mathbb{Z}$ riportato dalla fonte b03 e coerente con la re-derivazione.",
      cont:"Normalizzazione su $[0,2\\pi)$ &rarr;" },
    { t:"L'autofunzione normalizzata in $L^2[0,2\\pi)$ e':",
      opts:[
        {x:"$\\psi_m(\\varphi)=\\dfrac{1}{\\sqrt{2\\pi}}e^{im\\varphi}$, poiche' $\\displaystyle\\int_0^{2\\pi}|e^{im\\varphi}|^2 d\\varphi=2\\pi$",c:true},
        {x:"$\\psi_m=\\dfrac{1}{2\\pi}e^{im\\varphi}$"},
        {x:"$\\psi_m=\\dfrac{1}{\\sqrt\\pi}e^{im\\varphi}$"},
        {x:"$\\psi_m=e^{im\\varphi}$, gia' normalizzata"}],
      hint:"$|e^{im\\varphi}|=1$, quindi l'integrale del modulo quadro e' semplicemente la lunghezza dell'intervallo, $2\\pi$.",
      sol:"<b>Normalizzazione (b03 Set 2).</b> $\\int_0^{2\\pi}|e^{im\\varphi}|^2 d\\varphi=2\\pi\\Rightarrow\\psi_m=\\frac{1}{\\sqrt{2\\pi}}e^{im\\varphi}$. Queste $\\{\\psi_m\\}$ formano una base ortonormale (le armoniche di Fourier sul cerchio): $\\langle\\psi_m,\\psi_{m'}\\rangle=\\delta_{mm'}$ per l'autoaggiuntezza di $L_z$. Re-derivato." }
  ]},

  { pool:"spettro", src:"b03 Set 4 (ODE con BC)", steps:[
    { t:"Per l'operatore $\\dfrac{d}{dx}$ su $[0,1]$ con BC $f(0)=f(1)$ (periodiche), l'equazione $f'=\\lambda f$ da' $f=f_0 e^{\\lambda x}$ e la quantizzazione:",
      opts:[
        {x:"$e^{\\lambda}=1\\Rightarrow\\lambda_n=2\\pi i\\,n$, $n\\in\\mathbb{Z}$: spettro immaginario puro",c:true},
        {x:"$\\lambda_n=n\\pi$, reale"},
        {x:"$\\lambda_n=(2n+1)\\pi i$"},
        {x:"nessuna quantizzazione"}],
      hint:"$f(0)=f(1)\\Rightarrow f_0=f_0 e^{\\lambda}\\Rightarrow e^{\\lambda}=1$, i cui zeri sono i multipli PARI di $i\\pi$: $\\lambda=2\\pi i n$.",
      sol:"<b>Operatore $d/dx$ periodico (b03 Set 4).</b> $e^{\\lambda}=1\\Rightarrow\\lambda_n=2\\pi i n$. Lo spettro e' immaginario puro: $d/dx$ da solo e' anti-autoaggiunto ($\\big(\\frac{d}{dx}\\big)^\\dagger=-\\frac{d}{dx}$ con BC periodiche), quindi $-i\\,d/dx$ e' autoaggiunto con spettro reale $2\\pi n$. Confronta con le BC ANTIperiodiche $f(1)=-f(0)$: li' $e^\\lambda=-1$ e $\\lambda_n=i(2n+1)\\pi$ (dispari). Le BC selezionano interi pari vs dispari. Valore riportato da b03, coerente con la re-derivazione.",
      cont:"Cosa cambia con BC antiperiodiche? &rarr;" },
    { t:"Cambiando la BC in $f(0)=-f(1)$ (antiperiodiche), lo spettro dello stesso $\\dfrac{d}{dx}$:",
      opts:[
        {x:"diventa $\\lambda_n=i\\pi(2n+1)$: gli stessi passaggi ma con $e^\\lambda=-1$, quindi multipli DISPARI di $i\\pi$ invece che pari",c:true},
        {x:"resta $\\lambda_n=2\\pi i n$, immutato"},
        {x:"diventa reale"},
        {x:"scompare"}],
      hint:"Solo la condizione finale cambia: $e^\\lambda=-1$ invece di $e^\\lambda=+1$. Gli zeri di $e^\\lambda+1$ sono i multipli dispari di $i\\pi$.",
      sol:"<b>Le BC cambiano lo spettro (b03 Set 4).</b> $f(0)=-f(1)\\Rightarrow e^\\lambda=-1\\Rightarrow\\lambda_n=i\\pi(2n+1)$. E' la dimostrazione operativa del principio della tappa 01: STESSA espressione differenziale $d/dx$, STESSO intervallo, ma BC diverse (periodiche vs antiperiodiche) danno spettri disgiunti ($2\\pi i n$ vs $i\\pi(2n+1)$). E' proprio la distinzione che ricompare in 20250707 col fattore $-i$. Re-derivato." }
  ]},

  { pool:"spettro", src:"20260212 Es.4 &middot; 20262001 Es.4", steps:[
    { t:"Per $-\\dfrac{d^2}{dx^2}$ su $[0,\\pi]$, si confrontino DIRICHLET $u(0)=u(\\pi)=0$ e NEUMANN $u'(0)=u'(\\pi)=0$. Gli spettri sono:",
      opts:[
        {x:"Dirichlet: $\\lambda_n=n^2$, $n=1,2,\\dots$, autofunzioni $\\sin(nx)$. Neumann: $\\lambda_n=n^2$, $n=0,1,2,\\dots$, autofunzioni $\\cos(nx)$ &mdash; Neumann include $\\lambda=0$ (la costante), Dirichlet no",c:true},
        {x:"identici in entrambi i casi, $\\lambda_n=n^2$ con $n\\geq1$"},
        {x:"Dirichlet $\\lambda_n=n^2$, Neumann $\\lambda_n=(n+1/2)^2$"},
        {x:"Neumann non ha spettro perche' $u'$ non e' fissata"}],
      hint:"La differenza chiave e' $n=0$: la costante ha derivata nulla (soddisfa Neumann) ma non e' nulla al bordo (viola Dirichlet). Quindi $\\lambda=0$ e' Neumann-ammesso e Dirichlet-escluso.",
      sol:"<b>Neumann vs Dirichlet: stesso operatore, spettri diversi (compiti 12/02/2026 e 20/01/2026, Es.4).</b> $-u''=\\lambda u$ da' $u=A\\cos(\\sqrt\\lambda x)+B\\sin(\\sqrt\\lambda x)$. Dirichlet: $B$-solo, $\\sin(\\sqrt\\lambda\\pi)=0\\Rightarrow\\lambda_n=n^2$, $n\\geq1$. Neumann: $A$-solo, $\\sin(\\sqrt\\lambda\\pi)=0$ dalla derivata $\\Rightarrow\\lambda_n=n^2$, $n\\geq0$, con $n=0$ la costante ($\\lambda=0$). La sola $\\lambda=0$ distingue i due spettri: e' l'esempio-manifesto che le BC definiscono l'operatore. Re-derivato.",
      cont:"Perche' la costante e' Neumann e non Dirichlet? &rarr;" },
    { t:"L'autofunzione $u_0=\\text{cost}$ con $\\lambda=0$:",
      opts:[
        {x:"soddisfa Neumann ($u_0'=0$ ovunque) ma viola Dirichlet ($u_0(0)\\neq0$): e' proprio la differenza fra i due spettri",c:true},
        {x:"soddisfa entrambe le BC"},
        {x:"non soddisfa nessuna delle due"},
        {x:"soddisfa Dirichlet ma non Neumann"}],
      hint:"Una funzione costante non nulla ha derivata identicamente nulla, quindi passa Neumann; ma non si annulla agli estremi, quindi fallisce Dirichlet.",
      sol:"<b>Il modo zero (compiti 2026).</b> $u_0=\\text{cost}\\neq0$ ha $u_0'\\equiv0$: soddisfa $u'(0)=u'(\\pi)=0$ (Neumann) ed e' autofunzione con $\\lambda=0$. Ma $u_0(0)\\neq0$ viola Dirichlet, quindi $\\lambda=0\\notin$ spettro-Dirichlet. In fisica: il modo uniforme (media conservata) esiste col flusso nullo al bordo (isolante, Neumann), non con estremi fissati a zero (Dirichlet). Re-derivato." }
  ]},

  { pool:"spettro", src:"20250909 Es.4 (base di Hermite)", steps:[{
      t:"L'operatore $A=-\\dfrac{d^2}{dx^2}+x^2$ su $\\mathbb{R}$ con la richiesta $f(x)\\to0$ per $|x|\\to\\infty$ ha:",
      opts:[
        {x:"spettro DISCRETO $\\lambda_n=2n+1$, $n=0,1,2,\\dots$, con autofunzioni la base di Hermite $f_n(x)=H_n(x)e^{-x^2/2}$",c:true},
        {x:"spettro continuo $\\lambda\\geq0$, perche' il dominio e' tutto $\\mathbb{R}$"},
        {x:"nessuno spettro, perche' l'intervallo e' illimitato"},
        {x:"spettro $\\lambda_n=n^2\\pi^2$"}],
      hint:"Su $\\mathbb{R}$ un intervallo illimitato NON implica automaticamente spettro continuo: il termine confinante $+x^2$ (potenziale che cresce all'infinito) rende lo spettro DISCRETO, come l'oscillatore armonico quantistico.",
      sol:"<b>Oscillatore armonico: spettro discreto su dominio illimitato (compito 09/09/2025 Es.4).</b> $-f_n''+x^2 f_n=(2n+1)f_n$ con $f_n=H_n(x)e^{-x^2/2}$ (polinomi di Hermite, peso $w=e^{-x^2}$ in forma di Sturm-Liouville). Lo spettro e' $\\lambda_n=2n+1$, DISCRETO nonostante il dominio $\\mathbb{R}$: e' il potenziale confinante $x^2$ a normalizzare le autofunzioni e a discretizzare. Contrasto con $-d^2/dx^2$ libero su $\\mathbb{R}$, che ha spettro continuo. Valore $\\lambda_n=2n+1$ riportato dalla soluzione ufficiale (base di Hermite standard), non ri-derivato indipendentemente."
    }]
  },

  { pool:"spettro", src:"b03 Set 2 (operatore non hermitiano)", steps:[{
      t:"L'operatore di annichilazione $a=\\dfrac{iP+X}{\\sqrt2}=\\dfrac{1}{\\sqrt2}\\!\\left(x+\\dfrac{d}{dx}\\right)$ NON e' hermitiano. Il suo problema agli autovalori $a\\,\\psi_\\alpha=\\alpha\\psi_\\alpha$:",
      opts:[
        {x:"ha soluzione per OGNI $\\alpha\\in\\mathbb{C}$ (stati coerenti), con $\\psi_\\alpha(x)\\propto e^{\\sqrt2\\,\\alpha x-x^2/2}$: essendo non hermitiano, gli autovalori NON sono reali ne' discreti",c:true},
        {x:"ha autovalori reali $\\alpha=n$ interi, come un operatore hermitiano"},
        {x:"non ha autofunzioni normalizzabili per nessun $\\alpha$"},
        {x:"ha spettro solo per $\\alpha$ immaginario puro"}],
      hint:"$a$ non e' autoaggiunto ($a^\\dagger\\neq a$): niente garantisce autovalori reali. Separando le variabili in $\\frac{1}{\\sqrt2}(x+d/dx)\\psi=\\alpha\\psi$ si trova una gaussiana traslata, normalizzabile per ogni $\\alpha$ complesso.",
      sol:"<b>Autovalori di un operatore non hermitiano (b03 Set 2).</b> Da $\\frac{1}{\\sqrt2}(\\psi'+x\\psi)=\\alpha\\psi$ segue $\\psi'=(\\sqrt2\\alpha-x)\\psi\\Rightarrow\\psi_\\alpha\\propto e^{\\sqrt2\\alpha x-x^2/2}$, in $L^2(\\mathbb{R})$ per OGNI $\\alpha\\in\\mathbb{C}$. Sono gli stati coerenti. La lezione: solo l'autoaggiuntezza garantisce spettro reale e discreto; un operatore non hermitiano puo' avere un intero piano complesso come spettro puntuale. Valori riportati da b03, coerenti con la struttura gaussiana."
    }]
  },

  { pool:"spettro", src:"nucleo 16, tappa 04 (alternativa di Fredholm)", steps:[{
      t:"Nella Green spettrale $G(x,\\xi)=\\sum_n\\dfrac{\\phi_n(x)\\phi_n(\\xi)}{\\lambda_n}$, la presenza di un autovalore NULLO ($\\lambda_n=0$):",
      opts:[
        {x:"fa esplodere la formula: $Au=f$ e' risolubile SOLO se $f$ e' ortogonale all'autofunzione di $\\lambda=0$ (alternativa di Fredholm); e' la risonanza",c:true},
        {x:"non ha alcun effetto sulla Green"},
        {x:"rende la Green identicamente nulla"},
        {x:"e' sempre proibito perche' $\\lambda=0$ non puo' essere autovalore"}],
      hint:"Un autovalore nullo significa che l'omogenea $Au=0$ ha soluzione non banale $\\phi_0$: il termine $1/\\lambda_0$ diverge. La compatibilita' richiede $\\langle\\phi_0,f\\rangle=0$.",
      sol:"<b>Alternativa di Fredholm (nucleo 16, tappa 04).</b> Se $\\lambda_n=0$ per qualche $n$, l'operatore $A$ non e' invertibile e la Green spettrale diverge nel modo corrispondente. $Au=f$ ha soluzione se e solo se $f\\perp\\phi_0$ (la sorgente non eccita il modo a frequenza nulla). Fisicamente e' la risonanza: forzare un sistema esattamente su un suo modo proprio non da' risposta stazionaria. E' il motivo per cui il caso $\\lambda=0$ va sempre esaminato a parte, sia nello spettro sia nella Green."
    }]
  },

  { pool:"spettro", src:"nucleo 16, tappa 02", steps:[{
      t:"La DEGENERAZIONE di un autovalore (piu' autofunzioni indipendenti con lo stesso $\\lambda$) per un problema di Sturm-Liouville REGOLARE su intervallo finito:",
      opts:[
        {x:"NON accade per BC separate: gli autovalori sono semplici (non degeneri); la degenerazione richiede simmetrie o BC periodiche (es. $\\pm m$ per $L_z$)",c:true},
        {x:"accade sempre, ogni autovalore e' doppio"},
        {x:"impedisce l'ortogonalita' delle autofunzioni"},
        {x:"rende lo spettro continuo"}],
      hint:"Con BC separate (Dirichlet/Neumann/Robin) a un autovalore corrisponde una sola autofunzione, a meno di costante. Le BC periodiche invece accoppiano gli estremi e possono raddoppiare i livelli.",
      sol:"<b>Semplicita' degli autovalori (teorema di Sturm-Liouville regolare).</b> Per un problema regolare con BC SEPARATE ogni autovalore e' semplice: una sola autofunzione (a meno di scalare). La degenerazione compare con BC periodiche o simmetrie: per $L_z=-i\\,d/d\\varphi$ gli autovalori $m$ e $-m$ danno modi indipendenti $e^{\\pm im\\varphi}$ ma con autovalori DIVERSI; la vera degenerazione (stesso $\\lambda$, piu' modi) nasce quando piu' numeri quantici indipendenti collassano sullo stesso $\\lambda$. Le autofunzioni restano ortogonali (teorema spettrale)."
    }]
  },

  { pool:"spettro", src:"nucleo 16, tappa 01 (modus/riconoscimento)", steps:[{
      t:"Ricevuto un operatore differenziale, come si distingue subito quante condizioni al contorno servono e quante costanti compaiono nello spettro?",
      opts:[
        {x:"l'ORDINE dell'operatore: primo ordine $\\to$ una costante, UNA BC (spettro tipicamente da una sola condizione); secondo ordine $\\to$ due costanti, DUE BC (condizione di quantizzazione da un sistema $2\\times2$)",c:true},
        {x:"la dimensione dello spazio, sempre $2$"},
        {x:"il numero di termini nell'espressione dell'operatore"},
        {x:"il grado del polinomio caratteristico meno uno"}],
      hint:"Un'ODE di ordine $k$ ha $k$ soluzioni indipendenti e $k$ costanti: servono $k$ condizioni al contorno per fissarle. Primo ordine = una, secondo ordine = due.",
      sol:"<b>Ordine dell'operatore e numero di BC (nucleo 16).</b> Un operatore di ordine $k$ produce una ODE di ordine $k$: $k$ costanti, $k$ condizioni. Primo ordine (es. $d/dx+1$, $-i\\,d/dx$): una costante, una BC, e la quantizzazione nasce da $e^{(\\cdot)}=\\pm1$. Secondo ordine (es. $d^2/dx^2+c$): due costanti, due BC, e la quantizzazione da $\\sinh(\\cdot)=0$ o $\\sin(\\cdot)=0$ (determinante $2\\times2$ nullo). Riconoscere l'ordine e' il primo gesto: fissa la struttura di tutto il problema."
    }]
  },

  { pool:"spettro", src:"nucleo 16, tappa 03 (Legendre)", steps:[{
      t:"L'equazione di Legendre $\\big((1-x^2)u'\\big)'+\\lambda u=0$ su $[-1,1]$ e' un problema di Sturm-Liouville. Che peso ha e cosa ne segue per le autofunzioni?",
      opts:[
        {x:"peso $w=1$: le autofunzioni (i polinomi di Legendre $P_n$, con $\\lambda_n=n(n+1)$) sono ortogonali SENZA peso, $\\int_{-1}^1 P_n P_m\\,dx=0$ per $n\\neq m$",c:true},
        {x:"peso $w=1-x^2$: ortogonalita' con quel peso"},
        {x:"peso $w=x$: come Bessel"},
        {x:"nessun peso definito, l'operatore non e' autoaggiunto"}],
      hint:"Nella forma $(pu')'+qu+\\lambda w u=0$ il peso e' il coefficiente di $\\lambda u$: qui $+\\lambda u$, dunque $w=1$. Il fattore $1-x^2=p$ e' il coefficiente $p$, non il peso.",
      sol:"<b>Legendre come Sturm-Liouville con $w=1$ (nucleo 16, tappa 03).</b> Confrontando $((1-x^2)u')'+\\lambda u=0$ con la forma normale: $p=1-x^2$, $q=0$, $w=1$. Ortogonalita' SENZA peso: $\\int_{-1}^1 P_n P_m dx=0$. Autovalori $\\lambda_n=n(n+1)$. Poiche' $p$ si annulla agli estremi ($x=\\pm1$), e' un problema SINGOLARE: le BC diventano la richiesta di limitatezza. E' il caso che nasce dal laplaciano in coordinate sferiche (armoniche sferiche). Valori $\\lambda_n=n(n+1)$ standard, non ri-derivati qui."
    }]
  },

  { pool:"spettro", src:"nucleo 16, tappa 02 (funzioni dell'operatore)", steps:[{
      t:"Noto lo spettro $\\{\\lambda_n,\\phi_n\\}$ di un operatore autoaggiunto $A$, l'evoluzione temporale $e^{-iAt}$ e la Green $A^{-1}$ si scrivono:",
      opts:[
        {x:"$e^{-iAt}=\\sum_n e^{-i\\lambda_n t}P_n$ e $A^{-1}=\\sum_n\\lambda_n^{-1}P_n$ con $P_n=|\\phi_n\\rangle\\langle\\phi_n|$: nella base spettrale ogni funzione dell'operatore agisce numero per numero",c:true},
        {x:"si sostituisce $A$ nella serie di Taylor e si somma la serie di operatori, senza usare lo spettro"},
        {x:"$e^{-iAt}=e^{-it\\sum_n\\lambda_n}$"},
        {x:"queste funzioni non sono definibili per operatori differenziali"}],
      hint:"E' lo stesso meccanismo delle funzioni di matrice: $f(A)=\\sum_n f(\\lambda_n)P_n$. Il vantaggio di trovare lo spettro e' proprio che ogni funzione dell'operatore diventa banale.",
      sol:"<b>Funzioni di operatore via spettro (teorema spettrale, nucleo 16, tappa 02).</b> Se $A=\\sum_n\\lambda_n P_n$ allora $f(A)=\\sum_n f(\\lambda_n)P_n$. Da qui l'evoluzione quantistica $e^{-iAt}=\\sum_n e^{-i\\lambda_n t}P_n$ (moduli costanti, unitaria), il peso di Boltzmann $e^{-\\beta A}$, la Green $A^{-1}=\\sum_n\\lambda_n^{-1}P_n$ (che esplode se $\\lambda_n=0$: alternativa di Fredholm). Trovare lo spettro E' risolvere il problema: nella base propria l'operatore e' un numero per ogni modo."
    }]
  },

  { pool:"spettro", src:"nucleo 16, tappa 03 &middot; b01 (distinzione tipi)", steps:[{
      t:"Un intervallo illimitato ($\\mathbb{R}$ o $[0,\\infty)$) da' spettro CONTINUO oppure DISCRETO? La distinzione corretta e':",
      opts:[
        {x:"dipende dal potenziale/coefficienti: $-d^2/dx^2$ libero su $\\mathbb{R}$ ha spettro CONTINUO (onde piane non normalizzabili); $-d^2/dx^2+x^2$ ha spettro DISCRETO (il termine confinante normalizza le autofunzioni)",c:true},
        {x:"illimitato implica sempre continuo, senza eccezioni"},
        {x:"illimitato implica sempre discreto"},
        {x:"illimitato implica sempre assenza di spettro"}],
      hint:"Non e' la sola illimitatezza a decidere: e' se le autofunzioni possono stare in $L^2$. Un potenziale che cresce all'infinito confina gli stati (discreto); uno piatto no (continuo).",
      sol:"<b>Discreto vs continuo su domini illimitati (nucleo 16, tappe 03-04).</b> La illimitatezza del dominio e' NECESSARIA ma non sufficiente per lo spettro continuo. Se il potenziale confina ($x^2$, oscillatore), le autofunzioni sono normalizzabili e lo spettro e' discreto ($\\lambda_n=2n+1$). Se non confina ($-d^2/dx^2$ libero), le &laquo;autofunzioni&raquo; sono onde piane $e^{ikx}\\notin L^2$ e lo spettro e' continuo ($\\lambda=k^2\\geq0$), rappresentato da un taglio del risolvente. Il caso 20240618 ($a=\\infty$, primo ordine) e' un terzo scenario: nessuno spettro affatto. Tre esiti distinti, da non confondere."
    }]
  },

  { pool:"spettro", src:"nucleo 16, tappa 01 (R vs C)", steps:[{
      t:"Due operatori del primo ordine su $[0,1]$: $A_1=-i\\,d/dx$ con BC antiperiodiche e $A_2=d/dx+1$ con BC $\\lim f=-f(0)$. Perche' $A_1$ ha spettro reale e $A_2$ complesso, pur essendo entrambi del primo ordine?",
      opts:[
        {x:"$A_1$ e' autoaggiunto (il fattore $-i$ e le BC annullano il termine di bordo), quindi spettro $\\subset\\mathbb{R}$; $A_2$ non lo e', quindi la realta' non e' garantita e infatti gli autovalori sono complessi",c:true},
        {x:"perche' $A_1$ ha coefficienti reali e $A_2$ no"},
        {x:"perche' $A_1$ agisce su $[0,1]$ e $A_2$ su un intervallo diverso"},
        {x:"per puro caso: entrambi potrebbero avere spettro reale o complesso"}],
      hint:"La discriminante e' l'autoaggiuntezza, non l'ordine ne' l'aspetto dell'operatore. Il $-i$ davanti a $d/dx$ e' esattamente cio' che serve a rendere reale lo spettro di un operatore anti-simmetrico.",
      sol:"<b>Autoaggiuntezza decide la realta' (nucleo 16, tappa 01).</b> $d/dx$ e' anti-autoaggiunto ($(d/dx)^\\dagger=-d/dx$ con BC che annullano il bordo), quindi $-i\\,d/dx$ e' autoaggiunto e ha spettro reale $\\lambda_n=(2n+1)\\pi$ (20250707). Invece $A_2=d/dx+1$ non e' autoaggiunto (manca il $-i$, e la BC non lo simmetrizza), e ha spettro $\\lambda_n=1+i(2n+1)\\pi/a$, complesso (20240618). Stesso ordine, esiti opposti: e' l'autoaggiuntezza, verificata sul termine di bordo, a decidere &mdash; non l'ordine dell'operatore. Re-derivato su entrambi."
    }]
  }

];

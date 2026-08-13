Q.matrici = [

  /* ===================== CONCETTUALI + MODUS OPERANDI ===================== */

  { pool:"matrici", src:"nucleo 16 &middot; b01", steps:[{
      t:"<b>Teorema spettrale.</b> Per un operatore $A$ autoaggiunto ($A=A^{\\dagger}$) su spazio di dimensione finita vale:",
      opts:[
        {x:"esiste una base ORTONORMALE di autovettori, gli autovalori sono REALI e $A=\\sum_k\\lambda_k P_k$ con $P_k=|v_k\\rangle\\langle v_k|$",c:true},
        {x:"gli autovalori sono reali ma la base di autovettori non &egrave; mai ortogonale"},
        {x:"$A$ &egrave; sempre diagonalizzabile ma con autovalori complessi"},
        {x:"$A$ ammette forma di Jordan non banale"}],
      hint:"Autoaggiunto forza DUE cose insieme: spettro reale e base ortonormale di autovettori. Da qui i proiettori sono i prodotti esterni.",
      sol:"<b>Teorema spettrale.</b> Se $A=A^{\\dagger}$ allora $A$ &egrave; diagonalizzabile con autovalori reali e una base ortonormale $\\{v_k\\}$ di autovettori: $A=\\sum_k\\lambda_k P_k$, $P_k=|v_k\\rangle\\langle v_k|$, con $P_kP_j=\\delta_{kj}P_k$ e $\\sum_k P_k=\\mathbb{1}$. L'ortonormalit&agrave; degli autovettori &egrave; ci&ograve; che rende leciti i proiettori come prodotti esterni; senza autoaggiuntezza questa scorciatoia salta (tappa 02 del nucleo 16)."
    }]
  },

  { pool:"matrici", src:"tipo &middot; nucleo 16", steps:[{
      t:"Una matrice $A$ &egrave; DIAGONALIZZABILE se e solo se, per ogni autovalore:",
      opts:[
        {x:"la molteplicit&agrave; geometrica (dim dell'autospazio) UGUAGLIA quella algebrica (ordine come radice del caratteristico)",c:true},
        {x:"la molteplicit&agrave; algebrica &egrave; $1$"},
        {x:"gli autovalori sono tutti reali"},
        {x:"la matrice &egrave; simmetrica"}],
      hint:"Non serve che gli autovalori siano distinti: serve che ogni autospazio sia grande quanto la molteplicit&agrave; algebrica dell'autovalore.",
      sol:"<b>Criterio di diagonalizzabilit&agrave; (m.a.=m.g.).</b> $A$ &egrave; diagonalizzabile $\\iff$ per ogni autovalore $\\lambda$ la molteplicit&agrave; geometrica $\\dim\\ker(A-\\lambda\\mathbb{1})$ eguaglia quella algebrica. Autovalori distinti sono sufficienti ma non necessari; una matrice simmetrica (reale) o hermitiana lo &egrave; sempre per il teorema spettrale, ma esistono matrici diagonalizzabili non simmetriche."
    }]
  },

  { pool:"matrici", src:"tipo &middot; b01", steps:[{
      t:"MODUS OPERANDI. Davanti a &laquo;calcolare $f(A)$ per una matrice $A$ data&raquo;, come si riconosce il tipo e qual &egrave; il PRIMO passo:",
      opts:[
        {x:"diagonalizzare $A$ (autovalori + autovettori) e controllare se gli autovettori sono ortonormali: decide QUALE formula per i proiettori usare",c:true},
        {x:"applicare subito la serie di Taylor di $f$ alla matrice"},
        {x:"calcolare $\\det A$ e $\\mathrm{tr}\\,A$"},
        {x:"invertire $A$ e poi valutare $f$"}],
      hint:"Tutto il metodo spettrale poggia sui proiettori; ma la loro forma dipende dall'ortonormalit&agrave; degli autovettori. Quella verifica va fatta per PRIMA.",
      sol:"<b>Strategia (rappresentazione spettrale).</b> Ordine invariante: (1) trova autovalori $\\lambda_k$ e autovettori $v_k$; (2) verifica se $\\{v_k\\}$ &egrave; ortonormale &mdash; automatico se $A$ &egrave; autoaggiunta/normale, da controllare altrimenti; (3) costruisci i proiettori $P_k$ (prodotto esterno se ortonormali, cambio di base $S E_{kk}S^{-1}$ se no); (4) $f(A)=\\sum_k f(\\lambda_k)P_k$. Il passo (2) &egrave; il bivio che separa la risposta giusta dalla trappola pi&ugrave; frequente dello scritto."
    }]
  },

  { pool:"matrici", src:"tipo &middot; b03 Set 1", steps:[{
      t:"Le tre propriet&agrave; che definiscono un insieme di proiettori spettrali $\\{P_k\\}$ sono:",
      opts:[
        {x:"$P_k^2=P_k$ (idempotenza), $P_kP_j=0$ per $k\\neq j$ (ortogonalit&agrave;), $\\sum_k P_k=\\mathbb{1}$ (completezza)",c:true},
        {x:"$P_k^2=\\mathbb{1}$, $\\det P_k=1$, $\\mathrm{tr}\\,P_k=0$"},
        {x:"$P_k=P_k^{\\dagger}$ e $\\det P_k\\neq0$"},
        {x:"$P_kP_j=P_j$ per ogni $k,j$"}],
      hint:"Idempotenza, ortogonalit&agrave; reciproca e risoluzione dell'identit&agrave;: il controllo $\\sum P_k=\\mathbb{1}$ smaschera quasi ogni errore.",
      sol:"<b>Definizione di proiettore spettrale.</b> $P_k^2=P_k$, $P_kP_j=\\delta_{kj}P_k$, $\\sum_k P_k=\\mathbb{1}$. Da queste segue $A=\\sum_k\\lambda_k P_k$ e $f(A)=\\sum_k f(\\lambda_k)P_k$. Nota: la simmetria $P_k=P_k^{\\dagger}$ vale SOLO se gli autovettori sono ortonormali; per autovettori non ortogonali i proiettori sono obliqui ($P_k\\neq P_k^{\\dagger}$) ma restano idempotenti e completi."
    }]
  },

  { pool:"matrici", src:"20240618 Es.3 &middot; nucleo 16", steps:[{
      t:"TRAPPOLA n.2 (segnalata negli scritti). Se gli autovettori NON sono ortonormali, il proiettore $P_k$:",
      opts:[
        {x:"NON &egrave; $|v_k\\rangle\\langle v_k|$; si costruisce come $P_k=S\\,E_{kk}\\,S^{-1}$, con $S=[v_1\\,v_2\\,\\dots]$ e $E_{kk}$ la matrice $1$ nel posto $(k,k)$",c:true},
        {x:"&egrave; comunque $|v_k\\rangle\\langle v_k|$, normalizzando $v_k$"},
        {x:"non esiste: la matrice non &egrave; diagonalizzabile"},
        {x:"&egrave; $|v_k\\rangle\\langle v_k|/\\det S$"}],
      hint:"Con autovettori obliqui, $|v_k\\rangle\\langle v_k|$ non &egrave; nemmeno idempotente nella direzione giusta e $\\sum_k|v_k\\rangle\\langle v_k|\\neq\\mathbb{1}$. Serve la base duale (righe di $S^{-1}$).",
      sol:"<b>Proiettori con autovettori non ortonormali.</b> La formula $|v_k\\rangle\\langle v_k|$ vale solo per basi ortonormali. In generale $P_k=S\\,E_{kk}\\,S^{-1}=|v_k\\rangle\\langle w_k|$, dove $\\{w_k\\}$ &egrave; la base DUALE (biortogonale), cio&egrave; le righe di $S^{-1}$, con $\\langle w_i,v_j\\rangle=\\delta_{ij}$. Sono proiettori OBLIQUI. &Egrave; l'errore n.2 del nucleo 16 e la trappola dell'Es.3 del 18/06/2024."
    }]
  },

  { pool:"matrici", src:"20241106 Es.3", steps:[{
      t:"Se gli autovettori $e^{(k)}$ sono ortonormali ma COMPLESSI ($e^{(i)}\\cdot(e^{(j)})^{*}=\\delta_{ij}$), il proiettore $P_k$ ha componenti:",
      opts:[
        {x:"$(P_k)_{jl}=e^{(k)}_j\\,(e^{(k)}_l)^{*}$ &mdash; con il CONIUGATO sull'indice di sinistra",c:true},
        {x:"$(P_k)_{jl}=e^{(k)}_j\\,e^{(k)}_l$ senza coniugio"},
        {x:"$(P_k)_{jl}=(e^{(k)}_j)^{*}\\,(e^{(k)}_l)^{*}$"},
        {x:"$(P_k)_{jl}=\\mathrm{Re}\\big(e^{(k)}_j e^{(k)}_l\\big)$"}],
      hint:"Il prodotto scalare hermitiano coniuga il fattore bra: $\\langle v|$ porta $(e_l)^{*}$. Senza coniugio $P_k$ non &egrave; idempotente e $\\sum P_k\\neq\\mathbb{1}$.",
      sol:"<b>Proiettori con autovettori complessi (compito 06/11/2024).</b> Nel prodotto scalare hermitiano $P_k=|e^{(k)}\\rangle\\langle e^{(k)}|$ significa $(P_k)_{jl}=e^{(k)}_j(e^{(k)}_l)^{*}$: il bra porta il coniugato. Dimenticare il $*$ &egrave; la trappola segnalata &mdash; produce una matrice che non soddisfa $P_k^2=P_k$. La struttura discende dalla <b>definizione di prodotto scalare hermitiano</b> $\\langle u,v\\rangle=\\sum_j u_j^{*}v_j$."
    }]
  },

  { pool:"matrici", src:"tipo &middot; nucleo 16", steps:[{
      t:"Il senso della formula $f(A)=\\sum_k f(\\lambda_k)P_k$ &egrave;:",
      opts:[
        {x:"nella base spettrale ogni funzione dell'operatore agisce numero per numero: si valuta $f$ sugli AUTOVALORI, non sulla matrice",c:true},
        {x:"si sostituisce $A$ dentro la serie di Taylor di $f$ e si somma la serie di matrici"},
        {x:"si calcola $f$ della traccia di $A$"},
        {x:"vale solo per $f$ polinomio"}],
      hint:"Diagonalizzare &egrave; disaccoppiare: sui modi propri $A$ &egrave; un numero, e $f$ agisce su quel numero.",
      sol:"<b>Funzioni di operatore (teorema spettrale).</b> Se $A=\\sum_k\\lambda_k P_k$ allora $f(A):=\\sum_k f(\\lambda_k)P_k$ per ogni $f$ definita sullo spettro. Non c'&egrave; nessuna serie di matrici da sommare: $e^{A}$, $\\log A$, $A^{1/2}$, $\\cos(A)$ si ottengono valutando $f$ sui singoli $\\lambda_k$. La definizione coincide con la serie di Taylor quando questa converge, ma vale anche per $\\log$, radici, ecc., dove la serie non aiuta."
    }]
  },

  { pool:"matrici", src:"tipo &middot; b01", steps:[{
      t:"MODUS OPERANDI. Per calcolare $f(A^2)$ (es. $e^{A^2}$) con $A=\\sum_k\\lambda_kP_k$, l'ordine corretto delle operazioni &egrave;:",
      opts:[
        {x:"prima elevare gli autovalori: $A^2=\\sum_k\\lambda_k^2 P_k$, poi $f(A^2)=\\sum_k f(\\lambda_k^2)P_k$",c:true},
        {x:"calcolare $f(A)=\\sum_k f(\\lambda_k)P_k$ e poi elevarlo al quadrato"},
        {x:"calcolare $\\big(f(A)\\big)^2$"},
        {x:"valutare $f$ su $\\lambda_k$ e poi elevare la matrice al quadrato"}],
      hint:"L'argomento della funzione &egrave; $A^2$, non $A$: sui modi propri l'autovalore che entra in $f$ &egrave; $\\lambda_k^2$.",
      sol:"<b>Composizione di funzioni sullo spettro (trappola del 08/09/2023).</b> $A$ e $A^2$ hanno gli STESSI proiettori $P_k$; cambiano gli autovalori: $A^2=\\sum_k\\lambda_k^2P_k$. Quindi $f(A^2)=\\sum_k f(\\lambda_k^2)P_k$ &mdash; si valuta $f$ su $\\lambda_k^2$. Confondere $f(A^2)$ con $f(A^2)$ mal ordinato (elevare dopo aver applicato $f$) &egrave; l'errore tipico: per esempio $e^{A^2}$ usa $e^{\\lambda_k^2}$, non $(e^{\\lambda_k})^2$."
    }]
  },

  { pool:"matrici", src:"nucleo 16 &middot; b03 Set 1", steps:[
    { t:"Sia $A=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$. Autovalori e natura degli autovettori:",
      opts:[
        {x:"$\\lambda=1,3$; autovettori $\\tfrac{1}{\\sqrt2}\\binom{1}{-1}$ e $\\tfrac{1}{\\sqrt2}\\binom{1}{1}$, ORTONORMALI (matrice simmetrica)",c:true},
        {x:"$\\lambda=1,3$; autovettori non ortogonali"},
        {x:"$\\lambda=2,2$; matrice non diagonalizzabile"},
        {x:"$\\lambda=\\pm1$; autovettori complessi"}],
      hint:"$\\det(A-\\lambda\\mathbb{1})=(2-\\lambda)^2-1$. La matrice &egrave; reale simmetrica: il teorema spettrale garantisce autovettori ortogonali.",
      sol:"<b>Diagonalizzazione (caso simmetrico).</b> $(2-\\lambda)^2-1=0\\Rightarrow\\lambda=1,3$. Per $\\lambda=1$: $v_1\\propto(1,-1)$; per $\\lambda=3$: $v_3\\propto(1,1)$. Ortogonali per il <b>teorema spettrale</b> (matrice reale simmetrica), normalizzati con $1/\\sqrt2$.",
      cont:"Costruisci i proiettori e $e^{A}$ &rarr;" },
    { t:"I proiettori e $e^{A}$ valgono:",
      opts:[
        {x:"$P_1=\\tfrac12\\begin{pmatrix}1&-1\\\\-1&1\\end{pmatrix}$, $P_3=\\tfrac12\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}$, $e^{A}=\\tfrac12\\begin{pmatrix}e+e^3&e^3-e\\\\e^3-e&e+e^3\\end{pmatrix}$",c:true},
        {x:"$e^{A}=\\begin{pmatrix}e^2&e\\\\e&e^2\\end{pmatrix}$"},
        {x:"$e^{A}=e^2\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}$"},
        {x:"$e^{A}=\\tfrac12\\begin{pmatrix}e+e^3&e-e^3\\\\e-e^3&e+e^3\\end{pmatrix}$"}],
      hint:"$P_k=|v_k\\rangle\\langle v_k|$ (ortonormali), poi $e^{A}=e^{1}P_1+e^{3}P_3$. Nessuna serie da sommare.",
      sol:"<b>Esponenziale via spettro.</b> $P_1=v_1v_1^{T}=\\tfrac12\\begin{pmatrix}1&-1\\\\-1&1\\end{pmatrix}$, $P_3=\\tfrac12\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}$ (verificano $P_1+P_3=\\mathbb{1}$). Per il <b>teorema spettrale</b> $e^{A}=e^{1}P_1+e^{3}P_3=\\tfrac12\\begin{pmatrix}e+e^3&e^3-e\\\\e^3-e&e+e^3\\end{pmatrix}$. Le funzioni di operatore si calcolano sugli autovalori, non sommando la serie." }
    ]
  },

  { pool:"matrici", src:"nucleo 16", steps:[
    { t:"Sia $B=\\begin{pmatrix}3&1\\\\0&2\\end{pmatrix}$ (triangolare, NON simmetrica). Autovalori e autovettori:",
      opts:[
        {x:"$\\lambda=3,2$; $v_3=\\binom{1}{0}$, $v_2=\\binom{1}{-1}$: NON ortogonali ($\\langle v_3,v_2\\rangle=1$)",c:true},
        {x:"$\\lambda=3,2$; autovettori ortonormali"},
        {x:"$\\lambda=2,2$; non diagonalizzabile"},
        {x:"$\\lambda=\\pm\\sqrt6$"}],
      hint:"Matrice triangolare: gli autovalori sono sulla diagonale. Non &egrave; simmetrica, quindi non aspettarti ortogonalit&agrave;: verificala.",
      sol:"<b>Diagonalizzazione (caso non simmetrico).</b> Triangolare $\\Rightarrow\\lambda=3,2$ (diagonale). $v_3=\\binom{1}{0}$, $v_2=\\binom{1}{-1}$. $\\langle v_3,v_2\\rangle=1\\neq0$: non ortogonali. Il <b>teorema spettrale</b> non si applica (matrice non normale): la formula $|v\\rangle\\langle v|$ per i proiettori sarebbe sbagliata.",
      cont:"Costruisci i proiettori corretti &rarr;" },
    { t:"Con $S=\\begin{pmatrix}1&1\\\\0&-1\\end{pmatrix}$, $S^{-1}=\\begin{pmatrix}1&1\\\\0&-1\\end{pmatrix}$, i proiettori spettrali sono:",
      opts:[
        {x:"$P_3=\\begin{pmatrix}1&1\\\\0&0\\end{pmatrix}$, $P_2=\\begin{pmatrix}0&-1\\\\0&1\\end{pmatrix}$: obliqui, con $P_3+P_2=\\mathbb{1}$ e $3P_3+2P_2=B$",c:true},
        {x:"$P_3=\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}$, $P_2=\\begin{pmatrix}0&0\\\\0&1\\end{pmatrix}$"},
        {x:"$P_3=\\tfrac12\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}$"},
        {x:"$P_3=\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}$"}],
      hint:"$P_k=S E_{kk}S^{-1}$. Controlla sempre $P_3+P_2=\\mathbb{1}$ e la ricostruzione $3P_3+2P_2=B$.",
      sol:"<b>Proiettori obliqui (cambio di base).</b> $P_3=S\\,\\mathrm{diag}(1,0)\\,S^{-1}=\\begin{pmatrix}1&1\\\\0&0\\end{pmatrix}$, $P_2=\\begin{pmatrix}0&-1\\\\0&1\\end{pmatrix}$. Controlli: $P_3+P_2=\\mathbb{1}$ (completezza), $P_i^2=P_i$, $3P_3+2P_2=\\begin{pmatrix}3&1\\\\0&2\\end{pmatrix}=B$. Non sono simmetrici, ed &egrave; corretto: sono proiettori OBLIQUI. La formula $|v\\rangle\\langle v|$ avrebbe dato $\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}$, che non &egrave; nemmeno idempotente." }
    ]
  },

  /* ===================== FUNZIONI DI MATRICE (calcolo, multi-passo) ===================== */

  { pool:"matrici", src:"20230908 Es.3", steps:[
    { t:"Matrice $A$ $3\\times3$ con autovettori ortonormali e autovalori $\\lambda_1=1$, $\\lambda_2=i$, $\\lambda_3=1-i$. Per calcolare $e^{A^2}$, gli autovalori di $A^2$ sono:",
      opts:[
        {x:"$\\lambda_1^2=1$, $\\lambda_2^2=-1$, $\\lambda_3^2=(1-i)^2=-2i$",c:true},
        {x:"$1$, $i$, $1-i$ (invariati)"},
        {x:"$1$, $-i$, $-2i$"},
        {x:"$e$, $e^i$, $e^{1-i}$"}],
      hint:"$A^2=\\sum_k\\lambda_k^2 P_k$: eleva al quadrato ogni autovalore. Attento a $(1-i)^2=1-2i+i^2$.",
      sol:"<b>Autovalori di $A^2$ (compito 08/09/2023).</b> $A^2=\\sum_k\\lambda_k^2P_k$: $1^2=1$, $i^2=-1$, $(1-i)^2=1-2i-1=-2i$. Gli stessi proiettori di $A$, autovalori al quadrato. &Egrave; il passo che decide l'esercizio: l'argomento &egrave; $A^2$, quindi in $f$ entra $\\lambda_k^2$.",
      cont:"Ora applica l'esponenziale &rarr;" },
    { t:"Segue $e^{A^2}=$",
      opts:[
        {x:"$e^{1}P_1+e^{-1}P_2+e^{-2i}P_3$, con $e^{-2i}=\\cos2-i\\sin2$",c:true},
        {x:"$e^{1}P_1+e^{i}P_2+e^{1-i}P_3$"},
        {x:"$(e P_1+e^i P_2+e^{1-i}P_3)^2$"},
        {x:"$e^{1}P_1+e^{i^2}P_2+e^{(1-i)}P_3$"}],
      hint:"$f(A^2)=\\sum_k f(\\lambda_k^2)P_k$ con $f=\\exp$. Valuta $\\exp$ su $1,-1,-2i$.",
      sol:"<b>Esponenziale via spettro.</b> $e^{A^2}=\\sum_k e^{\\lambda_k^2}P_k=e^{1}P_1+e^{-1}P_2+e^{-2i}P_3$. L'ultimo termine $e^{-2i}=\\cos2-i\\sin2$ ha modulo $1$: puramente oscillante. Chi calcola $(e^{\\lambda_k})^2$ o dimentica di quadrare gli autovalori sbaglia l'intera matrice." }
    ]
  },

  { pool:"matrici", src:"20240115 Es.3", steps:[{
      t:"Matrice $A$ $3\\times3$, autovettori ortonormali, autovalori $\\lambda_1=-1$, $\\lambda_2=1$, $\\lambda_3=2$. Allora $\\cos(A\\pi)=$",
      opts:[
        {x:"$-P_1-P_2+P_3$ (in base spettrale $\\mathrm{diag}(-1,-1,1)$)",c:true},
        {x:"$P_1+P_2+P_3=\\mathbb{1}$"},
        {x:"$\\cos(\\pi)\\,\\mathbb{1}$"},
        {x:"$-P_1+P_2+P_3$"}],
      hint:"Valuta $\\cos(\\lambda_k\\pi)$: $\\cos(-\\pi)$, $\\cos(\\pi)$, $\\cos(2\\pi)$.",
      sol:"<b>Coseno di matrice (compito 15/01/2024).</b> $\\cos(A\\pi)=\\sum_k\\cos(\\lambda_k\\pi)P_k$. $\\cos(-\\pi)=-1$, $\\cos(\\pi)=-1$, $\\cos(2\\pi)=1$: quindi $-P_1-P_2+P_3$, diagonale $\\mathrm{diag}(-1,-1,1)$ nella base degli autovettori. La funzione agisce sugli autovalori (<b>teorema spettrale</b>)."
    }]
  },

  { pool:"matrici", src:"20240618 turno B Es.3", steps:[
    { t:"Sia $A=\\begin{pmatrix}1&i\\\\i&1\\end{pmatrix}=\\mathbb{1}+i\\sigma_x$. Autovalori e natura:",
      opts:[
        {x:"$\\lambda_{\\pm}=1\\pm i=\\sqrt2\\,e^{\\pm i\\pi/4}$; $A$ &egrave; NORMALE ($AA^{\\dagger}=A^{\\dagger}A$), autovettori ortogonali",c:true},
        {x:"$\\lambda_{\\pm}=\\pm i$; autovettori non ortogonali"},
        {x:"$\\lambda=1$ doppio; non diagonalizzabile"},
        {x:"$\\lambda_{\\pm}=1\\pm i$; ma la matrice non &egrave; diagonalizzabile"}],
      hint:"$\\det(A-\\lambda\\mathbb{1})=(1-\\lambda)^2+1=0$. Sebbene non hermitiana, $A=\\mathbb{1}+i\\sigma_x$ commuta con $A^{\\dagger}=\\mathbb{1}-i\\sigma_x$: &egrave; normale.",
      sol:"<b>Matrice normale con autovalori complessi (compito 18/06/2024).</b> $(1-\\lambda)^2-i\\cdot i=(1-\\lambda)^2+1=0\\Rightarrow\\lambda_{\\pm}=1\\pm i=\\sqrt2\\,e^{\\pm i\\pi/4}$. $A$ non &egrave; hermitiana ma &egrave; NORMALE ($AA^{\\dagger}=A^{\\dagger}A=2\\mathbb{1}$): per il <b>teorema spettrale per operatori normali</b> ha autovettori ortogonali $v_{\\pm}=\\tfrac{1}{\\sqrt2}\\binom{1}{\\pm1}$, quindi proiettori semplici $P_{\\pm}=|v_{\\pm}\\rangle\\langle v_{\\pm}|$.",
      cont:"Calcola $\\log A$ &rarr;" },
    { t:"Con determinazione principale del logaritmo, $\\log A=$",
      opts:[
        {x:"$\\big(\\tfrac12\\log2+i\\tfrac{\\pi}{4}\\big)P_{+}+\\big(\\tfrac12\\log2-i\\tfrac{\\pi}{4}\\big)P_{-}$",c:true},
        {x:"$\\log(1)P_{+}+\\log(1)P_{-}=0$"},
        {x:"$\\log(\\sqrt2)\\,\\mathbb{1}$"},
        {x:"$i\\tfrac{\\pi}{4}P_{+}+i\\tfrac{\\pi}{4}P_{-}$"}],
      hint:"$\\log(re^{i\\theta})=\\log r+i\\theta$. Qui $r=\\sqrt2$, $\\theta=\\pm\\pi/4$ per i due autovalori.",
      sol:"<b>Logaritmo di matrice via spettro.</b> $\\log\\lambda_{\\pm}=\\log(\\sqrt2\\,e^{\\pm i\\pi/4})=\\tfrac12\\log2\\pm i\\tfrac{\\pi}{4}$. Quindi $\\log A=(\\tfrac12\\log2+i\\tfrac{\\pi}{4})P_{+}+(\\tfrac12\\log2-i\\tfrac{\\pi}{4})P_{-}$. La scelta della determinazione (taglio) fissa la fascia in cui cade $\\theta$; con la principale $\\theta\\in(-\\pi,\\pi]$ si prende $\\pm\\pi/4$." }
    ]
  },

  { pool:"matrici", src:"20241106 Es.3", steps:[
    { t:"Matrice $A$ diagonalizzata da $S$ con autovettori ortonormali COMPLESSI, autovalori $\\lambda_1=\\sqrt2$, $\\lambda_2=\\sqrt3$, $\\lambda_3=\\sqrt6\\,e^{i\\pi/4}$. Gli autovalori di $A^2$ sono:",
      opts:[
        {x:"$2$, $3$, $6e^{i\\pi/2}=6i$",c:true},
        {x:"$\\sqrt2$, $\\sqrt3$, $\\sqrt6\\,e^{i\\pi/2}$"},
        {x:"$4$, $9$, $36$"},
        {x:"$2$, $3$, $6$"}],
      hint:"$(\\sqrt6\\,e^{i\\pi/4})^2=6\\,e^{i\\pi/2}$: raddoppia il modulo al quadrato e l'argomento.",
      sol:"<b>Quadrato degli autovalori (compito 06/11/2024).</b> $\\lambda_1^2=2$, $\\lambda_2^2=3$, $\\lambda_3^2=6\\,e^{i\\pi/2}=6i$. Con $A^2=\\sum_k\\lambda_k^2P_k$: gli stessi proiettori, autovalori quadrati. Restano complessi: $6i$ non &egrave; reale.",
      cont:"Costruisci i proiettori (autovettori complessi) &rarr;" },
    { t:"I proiettori corretti per autovettori complessi ortonormali hanno la forma:",
      opts:[
        {x:"$(P_k)_{jl}=e^{(k)}_j\\,(e^{(k)}_l)^{*}$; e $A^2=2P_1+3P_2+6i\\,P_3$",c:true},
        {x:"$(P_k)_{jl}=e^{(k)}_j\\,e^{(k)}_l$ (senza coniugio)"},
        {x:"$P_k=S E_{kk}S^{-1}$ obliqui, perch&eacute; complessi"},
        {x:"$(P_k)_{jl}=\\mathrm{Re}(e^{(k)}_j e^{(k)}_l)$"}],
      hint:"Autovettori ORTONORMALI (anche se complessi) danno proiettori semplici, ma con il coniugato sul bra.",
      sol:"<b>Proiettori hermitiani con coniugio.</b> Poich&eacute; gli autovettori sono ortonormali, i proiettori sono $P_k=|e^{(k)}\\rangle\\langle e^{(k)}|$, cio&egrave; $(P_k)_{jl}=e^{(k)}_j(e^{(k)}_l)^{*}$. Il coniugio distingue questo caso da quello reale ed &egrave; la trappola dell'Es.3 del 06/11/2024. Risultato $A^2=2P_1+3P_2+6i\\,P_3$." }
    ]
  },

  { pool:"matrici", src:"20240618 turno A Es.3", steps:[
    { t:"Matrice $A$ $3\\times3$ con autovalori $\\lambda_1=\\lambda_2=1$ (degenere, m.a.$=2$) e $\\lambda_3=-1$. Per $\\lambda=1$ l'autospazio &egrave; descritto da una sola equazione indipendente $v_3=v_1-v_2$: come si scelgono gli autovettori?",
      opts:[
        {x:"due vettori $v^{(1)},v^{(2)}$ linearmente indipendenti dell'autospazio, in generale NON ortonormali fra loro",c:true},
        {x:"un solo autovettore, perch&eacute; l'autovalore &egrave; degenere"},
        {x:"si passa alla forma di Jordan"},
        {x:"si prendono due vettori ortogonali qualsiasi di $\\mathbb{R}^3$"}],
      hint:"m.a.=m.g.=2: l'autospazio ha dimensione 2, quindi due autovettori indipendenti. Ma nulla li rende automaticamente ortonormali.",
      sol:"<b>Autovalore degenere (compito 18/06/2024, turno A).</b> Le due equazioni per $\\lambda=1$ sono ridondanti: resta $v_3=v_1-v_2$, autospazio bidimensionale (m.g.$=2=$ m.a., quindi <b>diagonalizzabile</b> per il criterio m.a.=m.g.). Si scelgono due $v^{(1)},v^{(2)}$ indipendenti, ma tipicamente non ortonormali.",
      cont:"Come si costruiscono allora i proiettori? &rarr;" },
    { t:"I proiettori $P_k$ si ottengono:",
      opts:[
        {x:"come $P_k=S\\,P^{D}_k\\,S^{-1}$ (cambio di base), NON come $|v^{(k)}\\rangle\\langle v^{(k)}|$; si verifica $P_iP_j=\\delta_{ij}P_i$ e $\\sum_iP_i=\\mathbb{1}$",c:true},
        {x:"come $|v^{(1)}\\rangle\\langle v^{(1)}|+|v^{(2)}\\rangle\\langle v^{(2)}|$ senza altre cautele"},
        {x:"non esistono, perch&eacute; c'&egrave; degenerazione"},
        {x:"come $\\tfrac12(|v^{(1)}\\rangle\\langle v^{(1)}|+|v^{(2)}\\rangle\\langle v^{(2)}|)$"}],
      hint:"Con autovettori non ortonormali (anche nella degenerazione) la scorciatoia $|v\\rangle\\langle v|$ &egrave; falsa: serve il cambio di base o l'ortonormalizzazione preventiva.",
      sol:"<b>Proiettore su autospazio degenere non ortonormale.</b> Con $v^{(1)},v^{(2)}$ non ortonormali, $P_{\\lambda=1}\\neq|v^{(1)}\\rangle\\langle v^{(1)}|+|v^{(2)}\\rangle\\langle v^{(2)}|$: si usa $P_k=S P^{D}_k S^{-1}$ (colonne di $S$ = tutti gli autovettori). In alternativa si ortonormalizza l'autospazio con <b>Gram-Schmidt</b> e poi si usano i prodotti esterni. Verifica finale: $P_iP_j=\\delta_{ij}P_i$, $\\sum_iP_i=\\mathbb{1}$. &Egrave; l'errore frequentissimo del turno A del 18/06/2024." }
    ]
  },

  { pool:"matrici", src:"tipo &middot; nucleo 16", steps:[{
      t:"In presenza di un autovalore DEGENERE, la diagonalizzabilit&agrave; dipende da:",
      opts:[
        {x:"se la molteplicit&agrave; geometrica (dim dell'autospazio) raggiunge quella algebrica; se s&igrave; si diagonalizza, se no serve Jordan",c:true},
        {x:"il segno dell'autovalore"},
        {x:"la realt&agrave; dell'autovalore"},
        {x:"il valore del determinante"}],
      hint:"La degenerazione da sola non impedisce la diagonalizzazione: il problema nasce solo se l'autospazio &egrave; troppo piccolo.",
      sol:"<b>Degenerazione e criterio m.a.=m.g.</b> Un autovalore degenere &egrave; innocuo se genera un autospazio di dimensione pari alla sua molteplicit&agrave; algebrica (come nel 18/06/2024, dove m.g.$=2$). Diventa un problema solo quando m.g.$<$m.a.: allora $A$ NON &egrave; diagonalizzabile e si passa alla <b>forma di Jordan</b>. Per operatori autoaggiunti la degenerazione &egrave; sempre benigna (teorema spettrale)."
    }]
  },

  { pool:"matrici", src:"tipo &middot; nucleo 16", steps:[{
      t:"MODUS OPERANDI. Riconosci che una matrice NON &egrave; diagonalizzabile quando:",
      opts:[
        {x:"un autovalore ha molteplicit&agrave; algebrica $>$ geometrica; allora $f(A)$ NON &egrave; $\\sum f(\\lambda_k)P_k$ ma richiede Jordan (e derivate di $f$)",c:true},
        {x:"gli autovalori sono complessi"},
        {x:"$\\det A=0$"},
        {x:"la matrice non &egrave; simmetrica"}],
      hint:"Il segnale &egrave; l'autospazio troppo piccolo: meno autovettori indipendenti della molteplicit&agrave; dell'autovalore.",
      sol:"<b>Riconoscere la non-diagonalizzabilit&agrave;.</b> Sintomo: per qualche $\\lambda$, $\\dim\\ker(A-\\lambda\\mathbb{1})<$ molteplicit&agrave; algebrica. Non esistono proiettori spettrali che ricostruiscano $A$; si usa la <b>forma di Jordan</b> e $f(A)$ acquista termini con le derivate $f'(\\lambda),f''(\\lambda),\\dots$ (equivalente: <b>teorema di Cayley-Hamilton</b> con resto polinomiale e condizioni sulle derivate). Non pu&ograve; capitare per matrici autoaggiunte."
    }]
  },

  { pool:"matrici", src:"b03 Set 1", steps:[
    { t:"$A=\\begin{pmatrix}\\alpha&1&1\\\\0&\\alpha&1\\\\0&0&\\alpha\\end{pmatrix}$ ha $\\lambda=\\alpha$ triplo con un solo autovettore: NON diagonalizzabile. Per $e^{At}$ via Cayley-Hamilton si scrive $e^{At}=R(A)$ con:",
      opts:[
        {x:"$R(z)=a_0+a_1z+a_2z^2$ e le condizioni $f^{(k)}(\\alpha)=R^{(k)}(\\alpha)$ per $k=0,1,2$, con $f(z)=e^{zt}$",c:true},
        {x:"$R(z)=e^{\\alpha t}$ costante"},
        {x:"$R(z)=a_0+a_1z$ con una sola condizione"},
        {x:"la serie $\\sum_n A^n t^n/n!$ non converge"}],
      hint:"Il resto della divisione per il polinomio caratteristico $(z-\\alpha)^3$ ha grado $\\le2$. Le condizioni sono su $f$ e le sue derivate in $\\alpha$ (autovalore ripetuto).",
      sol:"<b>Cayley-Hamilton con autovalore ripetuto (b03 Set 1).</b> Il polinomio caratteristico &egrave; $(z-\\alpha)^3$; il <b>teorema di Cayley-Hamilton</b> dice $p(A)=0$, quindi $e^{At}=R(A)$ con $\\deg R\\le2$: $R(z)=a_0+a_1z+a_2z^2$. Poich&eacute; $\\alpha$ &egrave; radice tripla, le condizioni sono $f(\\alpha)=R(\\alpha)$, $f'(\\alpha)=R'(\\alpha)$, $f''(\\alpha)=R''(\\alpha)$ con $f(z)=e^{zt}$: tre equazioni per $a_0,a_1,a_2$. La comparsa delle DERIVATE di $f$ &egrave; la firma della non-diagonalizzabilit&agrave;.",
      cont:"Qual &egrave; il risultato finale? &rarr;" },
    { t:"Il risultato &egrave;:",
      opts:[
        {x:"$e^{At}=e^{\\alpha t}\\begin{pmatrix}1&t&t(2+t)/2\\\\0&1&t\\\\0&0&1\\end{pmatrix}$",c:true},
        {x:"$e^{At}=e^{\\alpha t}\\,\\mathbb{1}$"},
        {x:"$e^{At}=e^{\\alpha t}\\begin{pmatrix}1&t&t^2/2\\\\0&1&t\\\\0&0&1\\end{pmatrix}$"},
        {x:"$e^{At}=\\begin{pmatrix}e^{\\alpha t}&t&t^2\\\\0&e^{\\alpha t}&t\\\\0&0&e^{\\alpha t}\\end{pmatrix}$"}],
      hint:"La parte nilpotente $N=A-\\alpha\\mathbb{1}$ ha $N^3=0$: $e^{At}=e^{\\alpha t}(\\mathbb{1}+Nt+N^2t^2/2)$. Calcola $N^2$ (il termine $(1,3)$ non &egrave; solo $t^2/2$).",
      sol:"<b>Esponenziale di un blocco di Jordan.</b> $N=A-\\alpha\\mathbb{1}$ &egrave; nilpotente ($N^3=0$), quindi $e^{At}=e^{\\alpha t}\\big(\\mathbb{1}+Nt+\\tfrac12N^2t^2\\big)$. Con questo $N$ specifico l'elemento $(1,3)$ risulta $t+t^2/2=t(2+t)/2$ (contributo di $N$ e di $N^2$). Coincide col metodo di Cayley-Hamilton. Il termine $(1,3)$ NON &egrave; $t^2/2$ perch&eacute; anche $N$ contribuisce in quella posizione." }
    ]
  },

  { pool:"matrici", src:"More problems Ex 13", steps:[
    { t:"$A=\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}$ (non diagonalizzabile, $\\lambda=1$ doppio). Le potenze $A^n$ valgono:",
      opts:[
        {x:"$A^n=\\begin{pmatrix}1&2n\\\\0&1\\end{pmatrix}$",c:true},
        {x:"$A^n=\\begin{pmatrix}1&2^n\\\\0&1\\end{pmatrix}$"},
        {x:"$A^n=\\begin{pmatrix}1&2n\\\\0&2^n\\end{pmatrix}$"},
        {x:"$A^n=\\begin{pmatrix}n&2n\\\\0&n\\end{pmatrix}$"}],
      hint:"Scrivi $A=\\mathbb{1}+N$ con $N=\\begin{pmatrix}0&2\\\\0&0\\end{pmatrix}$, $N^2=0$: binomio con solo due termini.",
      sol:"<b>Potenze di $\\mathbb{1}+N$ nilpotente (More problems Ex 13).</b> $A=\\mathbb{1}+N$, $N^2=0$, e $\\mathbb{1}$ commuta con $N$: per il <b>binomio di Newton</b> $A^n=(\\mathbb{1}+N)^n=\\mathbb{1}+nN$ (tutti i termini con $N^2$ si annullano). Quindi $A^n=\\begin{pmatrix}1&2n\\\\0&1\\end{pmatrix}$.",
      cont:"Somma la serie per $e^{tA}$ &rarr;" },
    { t:"Segue $e^{tA}=$",
      opts:[
        {x:"$e^{t}\\begin{pmatrix}1&2t\\\\0&1\\end{pmatrix}$",c:true},
        {x:"$\\begin{pmatrix}e^t&2t\\\\0&e^t\\end{pmatrix}$"},
        {x:"$e^{t}\\begin{pmatrix}1&t^2\\\\0&1\\end{pmatrix}$"},
        {x:"$e^{2t}\\begin{pmatrix}1&2t\\\\0&1\\end{pmatrix}$"}],
      hint:"$e^{tA}=e^{t\\mathbb{1}}e^{tN}=e^t(\\mathbb{1}+tN)$ (lecito perch&eacute; $\\mathbb{1}$ e $N$ commutano).",
      sol:"<b>Esponenziale (parte scalare + nilpotente).</b> $A=\\mathbb{1}+N$ con $[\\mathbb{1},N]=0$, quindi $e^{tA}=e^{t}e^{tN}=e^{t}(\\mathbb{1}+tN)=e^{t}\\begin{pmatrix}1&2t\\\\0&1\\end{pmatrix}$. La fattorizzazione $e^{X+Y}=e^Xe^Y$ vale QUI solo perch&eacute; $[\\mathbb{1},N]=0$: in generale (matrici che non commutano) &egrave; falsa." }
    ]
  },

  { pool:"matrici", src:"More problems Ex 14", steps:[
    { t:"$A=\\begin{pmatrix}3&5\\\\1&-1\\end{pmatrix}$: autovalori (diagonalizzabile) e primo passo per $e^{tA}$:",
      opts:[
        {x:"$\\lambda_1=-2$, $\\lambda_2=4$ (distinti $\\Rightarrow$ diagonalizzabile); $e^{tA}=e^{-2t}P_1+e^{4t}P_2$",c:true},
        {x:"$\\lambda=\\pm\\sqrt{15}$"},
        {x:"$\\lambda=1$ doppio, serve Jordan"},
        {x:"$\\lambda_1=3,\\lambda_2=-1$ (dalla diagonale)"}],
      hint:"$\\det(A-\\lambda\\mathbb{1})=(3-\\lambda)(-1-\\lambda)-5=\\lambda^2-2\\lambda-8$. Non &egrave; triangolare: gli autovalori NON sono sulla diagonale.",
      sol:"<b>Autovalori e diagonalizzabilit&agrave; (More problems Ex 14).</b> $\\lambda^2-2\\lambda-8=(\\lambda+2)(\\lambda-4)=0\\Rightarrow\\lambda_1=-2,\\lambda_2=4$. Autovalori distinti $\\Rightarrow$ diagonalizzabile (criterio: autovalori distinti sono sufficienti). $e^{tA}=\\sum_k e^{\\lambda_k t}P_k$. Attenzione: $A$ non &egrave; triangolare, gli autovalori non si leggono dalla diagonale.",
      cont:"Risultato in forma matriciale &rarr;" },
    { t:"Con i proiettori spettrali, $e^{tA}=$",
      opts:[
        {x:"$\\tfrac16\\begin{pmatrix}e^{-2t}+5e^{4t}&-5e^{-2t}+5e^{4t}\\\\-e^{-2t}+e^{4t}&5e^{-2t}+e^{4t}\\end{pmatrix}$",c:true},
        {x:"$\\begin{pmatrix}e^{-2t}&0\\\\0&e^{4t}\\end{pmatrix}$"},
        {x:"$e^{-2t}\\mathbb{1}+e^{4t}\\mathbb{1}$"},
        {x:"$\\tfrac16\\begin{pmatrix}e^{4t}+5e^{-2t}&\\dots\\\\\\dots&\\dots\\end{pmatrix}$"}],
      hint:"$P_1=\\dfrac{A-\\lambda_2\\mathbb{1}}{\\lambda_1-\\lambda_2}$, $P_2=\\dfrac{A-\\lambda_1\\mathbb{1}}{\\lambda_2-\\lambda_1}$ (formula di interpolazione di Lagrange sui proiettori), poi $e^{-2t}P_1+e^{4t}P_2$.",
      sol:"<b>Proiettori via interpolazione + esponenziale.</b> Per due autovalori distinti i proiettori sono $P_1=(A-4\\mathbb{1})/(-6)$, $P_2=(A+2\\mathbb{1})/6$ (<b>formula di Lagrange/Sylvester</b> per le funzioni di matrice). Sostituendo in $e^{-2t}P_1+e^{4t}P_2$ si ottiene $\\tfrac16\\begin{pmatrix}e^{-2t}+5e^{4t}&-5e^{-2t}+5e^{4t}\\\\-e^{-2t}+e^{4t}&5e^{-2t}+e^{4t}\\end{pmatrix}$ (compito More problems Ex 14)." }
    ]
  },

  { pool:"matrici", src:"More problems Ex 17", steps:[{
      t:"Sia $A=\\begin{pmatrix}0&1\\\\\\alpha^2&0\\end{pmatrix}$, che soddisfa $A^2=\\alpha^2\\mathbb{1}$. Allora $A\\sinh(A)=$",
      opts:[
        {x:"$\\alpha\\sinh(\\alpha)\\,\\mathbb{1}$",c:true},
        {x:"$\\sinh(\\alpha^2)\\,\\mathbb{1}$"},
        {x:"$\\alpha^2\\sinh(\\alpha)\\,A$"},
        {x:"$\\sinh(\\alpha)\\,A$"}],
      hint:"Usa la serie $\\sinh A=\\sum_k A^{2k+1}/(2k+1)!$ e $A^{2k}=\\alpha^{2k}\\mathbb{1}$: raccogli.",
      sol:"<b>Funzione di matrice con $A^2=\\alpha^2\\mathbb{1}$ (More problems Ex 17).</b> $\\sinh A=\\sum_k\\dfrac{A^{2k+1}}{(2k+1)!}=A\\sum_k\\dfrac{(A^2)^k}{(2k+1)!}=A\\sum_k\\dfrac{\\alpha^{2k}}{(2k+1)!}=A\\,\\dfrac{\\sinh\\alpha}{\\alpha}$. Quindi $A\\sinh A=A^2\\dfrac{\\sinh\\alpha}{\\alpha}=\\alpha^2\\mathbb{1}\\cdot\\dfrac{\\sinh\\alpha}{\\alpha}=\\alpha\\sinh(\\alpha)\\,\\mathbb{1}$. La relazione $A^2\\propto\\mathbb{1}$ (tipica di $\\hat n\\cdot\\vec\\sigma$) chiude le serie senza diagonalizzare."
    }]
  },

  { pool:"matrici", src:"b03 Set 1", steps:[
    { t:"Per $\\hat n\\cdot\\vec\\sigma$ (versore reale) vale $(\\hat n\\cdot\\vec\\sigma)^2=\\mathbb{1}$, autovalori $\\pm1$. Allora $e^{i\\theta\\,\\hat n\\cdot\\vec\\sigma}=$",
      opts:[
        {x:"$\\cos\\theta\\,\\mathbb{1}+i\\sin\\theta\\,(\\hat n\\cdot\\vec\\sigma)$",c:true},
        {x:"$e^{i\\theta}\\,\\mathbb{1}$"},
        {x:"$\\cos\\theta\\,\\mathbb{1}+\\sin\\theta\\,(\\hat n\\cdot\\vec\\sigma)$"},
        {x:"$\\cosh\\theta\\,\\mathbb{1}+i\\sinh\\theta\\,(\\hat n\\cdot\\vec\\sigma)$"}],
      hint:"Autovalori $\\pm1$: il resto di Cayley-Hamilton &egrave; lineare $R(z)=a_0+a_1z$, con $e^{\\pm i\\theta}=a_0\\pm a_1$.",
      sol:"<b>Formula di Eulero per matrici (b03 Set 1).</b> Per il <b>teorema di Cayley-Hamilton</b> (grado 2, resto lineare) $e^{i\\theta M}=a_0\\mathbb{1}+a_1M$ con $M=\\hat n\\cdot\\vec\\sigma$; le condizioni sugli autovalori $\\pm1$ danno $e^{i\\theta}=a_0+a_1$, $e^{-i\\theta}=a_0-a_1$, quindi $a_0=\\cos\\theta$, $a_1=i\\sin\\theta$. Risultato $\\cos\\theta\\,\\mathbb{1}+i\\sin\\theta\\,(\\hat n\\cdot\\vec\\sigma)$. &Egrave; la rotazione di spin: l'analogo matriciale di $e^{i\\theta}=\\cos\\theta+i\\sin\\theta$.",
      cont:"Perch&eacute; il resto &egrave; lineare e non quadratico? &rarr;" },
    { t:"Il resto $R(z)$ ha grado $\\le1$ perch&eacute;:",
      opts:[
        {x:"il polinomio minimo di $\\hat n\\cdot\\vec\\sigma$ &egrave; $(z^2-1)$ di grado 2: il resto della divisione ha grado $\\le1$",c:true},
        {x:"la matrice &egrave; $2\\times2$, sempre resto lineare"},
        {x:"$\\theta$ &egrave; piccolo"},
        {x:"gli autovalori sono reali"}],
      hint:"Il grado del resto &egrave; strettamente minore del grado del polinomio minimo, non della dimensione.",
      sol:"<b>Grado del resto = grado del polinomio minimo meno uno.</b> Poich&eacute; $(\\hat n\\cdot\\vec\\sigma)^2=\\mathbb{1}$, il <b>polinomio minimo</b> &egrave; $z^2-1$ (grado 2); dividendo $e^{i\\theta z}$ per esso il resto ha grado $\\le1$. Se il polinomio minimo fosse di grado 3 (es. blocco di Jordan $3\\times3$) il resto sarebbe quadratico. &Egrave; il polinomio MINIMO, non il caratteristico, a fissare il grado quando ci sono ripetizioni/relazioni." }
    ]
  },

  { pool:"matrici", src:"More problems", steps:[{
      t:"Matrice $A$ $3\\times3$ hermitiana con $\\lambda_1=1$ e $\\lambda_2=\\lambda_3=3$ (degenere), proiettori ortogonali. Se $P_{(3)}=\\begin{pmatrix}1/2&0&1/2\\\\0&1&0\\\\1/2&0&1/2\\end{pmatrix}$ &egrave; il proiettore sull'autospazio di $\\lambda=3$, allora $\\log A=$",
      opts:[
        {x:"$\\log3\\begin{pmatrix}1/2&0&1/2\\\\0&1&0\\\\1/2&0&1/2\\end{pmatrix}$ (perch&eacute; $\\log1=0$ elimina il contributo di $\\lambda_1$)",c:true},
        {x:"$\\log3\\,\\mathbb{1}$"},
        {x:"$\\log1\\cdot P_1+\\log3\\cdot P_{(3)}=\\mathbb{1}+\\log3\\,P_{(3)}$"},
        {x:"$\\log3\\begin{pmatrix}1&0&1\\\\0&1&0\\\\1&0&1\\end{pmatrix}$"}],
      hint:"$\\log A=\\log(1)P_1+\\log(3)P_{(3)}$: il primo termine si annulla perch&eacute; $\\log1=0$.",
      sol:"<b>Logaritmo con autovalore degenere (More problems).</b> $\\log A=\\sum_k\\log(\\lambda_k)P_k=\\log(1)P_1+\\log(3)P_{(3)}=\\log3\\cdot P_{(3)}$, poich&eacute; $\\log1=0$ cancella il proiettore su $\\lambda_1$. La degenerazione $\\lambda_2=\\lambda_3$ &egrave; benigna (matrice hermitiana): il proiettore $P_{(3)}$ &egrave; l'unico oggetto che serve, gi&agrave; ortogonale per il <b>teorema spettrale</b>."
    }]
  },

  { pool:"matrici", src:"b03 Set 1 Ex 12", steps:[{
      t:"Per calcolare $\\log A$ o $A^{3/2}$ quando $A$ ha autovalori COMPLESSI, la scelta del taglio (branch cut) serve a:",
      opts:[
        {x:"fissare in quale fascia cade l'argomento $\\theta$ di ogni $\\lambda_k=r e^{i\\theta}$, rendendo $\\log$ (e le potenze non intere) una funzione a valore singolo",c:true},
        {x:"decidere se la matrice &egrave; diagonalizzabile"},
        {x:"garantire che gli autovalori siano reali"},
        {x:"normalizzare gli autovettori"}],
      hint:"$\\log$ e $z^{3/2}$ sono polidrome: senza fissare il foglio, $\\theta$ &egrave; definito a meno di $2\\pi$ e la funzione &egrave; ambigua.",
      sol:"<b>Branch cut nelle funzioni di matrice (b03 Set 1 Ex 12).</b> $\\log\\lambda=\\log r+i\\theta$ e $\\lambda^{3/2}=r^{3/2}e^{i\\tfrac32\\theta}$ dipendono dalla determinazione di $\\theta$. Il taglio fissa la fascia (es. $\\theta\\in[0,2\\pi)$ per taglio sul semiasse reale positivo, oppure $\\theta\\in(-\\pi,\\pi]$ per la principale). Ogni autovalore va scritto in forma polare CON la determinazione data prima di applicare la funzione."
    }]
  },

  { pool:"matrici", src:"b03 Set 1 Ex 12", steps:[
    { t:"Matrice $3\\times3$ con autovalori $\\lambda_1=2$, $\\lambda_2=1+i$, $\\lambda_3=1-i$ e autovettori NON ortogonali; taglio sul semiasse reale positivo, $\\theta\\in[0,2\\pi)$, log reale su $\\mathbb{R}^{+}$. I logaritmi degli autovalori sono:",
      opts:[
        {x:"$\\log2$; $\\tfrac12\\log2+i\\tfrac{\\pi}{4}$; $\\tfrac12\\log2+i\\tfrac{7\\pi}{4}$",c:true},
        {x:"$\\log2$; $\\tfrac12\\log2+i\\tfrac{\\pi}{4}$; $\\tfrac12\\log2-i\\tfrac{\\pi}{4}$"},
        {x:"$\\log2$; $\\log2+i\\pi/4$; $\\log2-i\\pi/4$"},
        {x:"$2$; $1+i$; $1-i$"}],
      hint:"$1+i=\\sqrt2 e^{i\\pi/4}$; $1-i=\\sqrt2 e^{i7\\pi/4}$ CON la determinazione $\\theta\\in[0,2\\pi)$ (non $-\\pi/4$). Il modulo &egrave; $\\sqrt2$, quindi $\\log\\sqrt2=\\tfrac12\\log2$.",
      sol:"<b>Logaritmo con taglio su $\\mathbb{R}^{+}$ (b03 Set 1 Ex 12).</b> $|1\\pm i|=\\sqrt2\\Rightarrow\\log\\sqrt2=\\tfrac12\\log2$. Argomenti nella fascia $[0,2\\pi)$: $\\arg(1+i)=\\pi/4$, $\\arg(1-i)=7\\pi/4$ (NON $-\\pi/4$: il taglio su $\\mathbb{R}^{+}$ impone $\\theta\\ge0$). Quindi $\\log\\lambda_2=\\tfrac12\\log2+i\\tfrac{\\pi}{4}$, $\\log\\lambda_3=\\tfrac12\\log2+i\\tfrac{7\\pi}{4}$. La scelta del foglio &egrave; ci&ograve; che rende $\\log\\lambda_3$ diverso dal complesso coniugato di $\\log\\lambda_2$.",
      cont:"Come si assemblano i proiettori? &rarr;" },
    { t:"Poich&eacute; gli autovettori NON sono ortogonali, $\\log A=\\sum_k(\\log\\lambda_k)P_k$ con:",
      opts:[
        {x:"$P_k=S\\,E_{kk}\\,S^{-1}$ (proiettori obliqui dal cambio di base), NON $|v_k\\rangle\\langle v_k|$",c:true},
        {x:"$P_k=|v_k\\rangle\\langle v_k|$ normalizzando"},
        {x:"$P_k=|v_k\\rangle\\langle v_k|^{*}$"},
        {x:"nessun proiettore: $A$ non &egrave; diagonalizzabile"}],
      hint:"Autovalori distinti $\\Rightarrow$ diagonalizzabile, ma autovettori obliqui $\\Rightarrow$ serve $S E_{kk}S^{-1}$.",
      sol:"<b>Funzione di matrice con autovettori obliqui.</b> $A$ &egrave; diagonalizzabile (tre autovalori distinti), ma gli autovettori non sono ortonormali: i proiettori sono $P_k=S E_{kk}S^{-1}$ (colonne di $S$ = autovettori). Poi $\\log A=\\log2\\,P_1+(\\tfrac12\\log2+i\\tfrac{\\pi}{4})P_2+(\\tfrac12\\log2+i\\tfrac{7\\pi}{4})P_3$. Doppia cautela dell'Ex 12: taglio per il logaritmo E cambio di base per i proiettori." }
    ]
  },

  { pool:"matrici", src:"b03 Set 1", steps:[{
      t:"Due matrici $A,B$ COMMUTANO ($[A,B]=0$). Cosa garantisce ci&ograve; sulla diagonalizzazione?",
      opts:[
        {x:"se entrambe sono diagonalizzabili, esiste una base COMUNE di autovettori che le diagonalizza simultaneamente",c:true},
        {x:"$A$ e $B$ hanno gli stessi autovalori"},
        {x:"$A+B$ non &egrave; diagonalizzabile"},
        {x:"$A$ e $B$ sono entrambe hermitiane"}],
      hint:"Commutare non significa avere gli stessi autovalori, ma poter condividere gli autovettori.",
      sol:"<b>Diagonalizzazione simultanea (b03 Set 1).</b> Due operatori diagonalizzabili che commutano ammettono una base comune di autovettori. In un autospazio degenere di $A$, $B$ agisce internamente e vi si diagonalizza: la degenerazione di uno &egrave; risolta dall'altro. In meccanica quantistica &egrave; il motivo per cui osservabili compatibili ($[A,B]=0$) hanno autostati comuni e numeri quantici simultanei."
    }]
  },

  { pool:"matrici", src:"tipo &middot; nucleo 16", steps:[{
      t:"Le potenze $A^n$ di una matrice diagonalizzabile si calcolano via spettro come:",
      opts:[
        {x:"$A^n=\\sum_k\\lambda_k^n P_k$: si elevano solo gli autovalori, i proiettori restano invariati",c:true},
        {x:"$A^n=n\\sum_k\\lambda_k P_k$"},
        {x:"$A^n=\\big(\\sum_k\\lambda_k P_k\\big)$ per ogni $n$"},
        {x:"si moltiplica $A$ per s&eacute; stessa $n$ volte, senza scorciatoie"}],
      hint:"$A^n$ &egrave; $f(A)$ con $f(z)=z^n$: applica la regola generale sugli autovalori.",
      sol:"<b>Potenze via spettro.</b> $A^n=f(A)$ con $f(z)=z^n$, quindi $A^n=\\sum_k\\lambda_k^nP_k$ (usando $P_kP_j=\\delta_{kj}P_k$). &Egrave; il caso polinomiale del <b>teorema spettrale</b>: se $\\lambda_k$ complessi, $\\lambda_k^n$ ruota di $n$ volte l'argomento. Per matrici non diagonalizzabili si passa a Jordan (compaiono coefficienti binomiali con le potenze del blocco nilpotente)."
    }]
  },

  { pool:"matrici", src:"b03 Set 1", steps:[
    { t:"Sia $A=\\begin{pmatrix}1&0&i\\\\0&1&0\\\\-i&0&1\\end{pmatrix}$ (hermitiana). Autovalori e loro natura:",
      opts:[
        {x:"$\\lambda=0,1,2$, tutti REALI (matrice hermitiana), con base ortonormale di autovettori garantita",c:true},
        {x:"$\\lambda=1,1,1$ triplo"},
        {x:"$\\lambda=\\pm i,1$"},
        {x:"$\\lambda=1\\pm i,\\,1$"}],
      hint:"$A=A^{\\dagger}$ (la trasposta coniugata ricopia $A$): autovalori reali per il teorema spettrale. Il blocco centrale disaccoppia $\\lambda=1$; il blocco $2\\times2$ su $(1,3)$ d&agrave; $1\\pm1$.",
      sol:"<b>Diagonalizzazione hermitiana $3\\times3$ (b03 Set 1).</b> $A^{\\dagger}=A$ (il coniugato di $i$ nell'angolo &egrave; $-i$, gi&agrave; presente): per il <b>teorema spettrale</b> gli autovalori sono reali. La riga/colonna centrale isola $\\lambda=1$; il sotto-blocco $\\begin{pmatrix}1&i\\\\-i&1\\end{pmatrix}$ ha autovalori $1\\pm1=0,2$. Spettro $\\{0,1,2\\}$, base ortonormale (anche se gli autovettori sono complessi).",
      cont:"Costruisci il proiettore su $\\lambda=2$ &rarr;" },
    { t:"L'autovettore di $\\lambda=2$ &egrave; $e_3=\\tfrac{1}{\\sqrt2}(i,0,1)$. Il proiettore $P_3=|e_3\\rangle\\langle e_3|$ vale:",
      opts:[
        {x:"$\\tfrac12\\begin{pmatrix}1&0&i\\\\0&0&0\\\\-i&0&1\\end{pmatrix}$ (con il coniugato sul bra: $(P_3)_{jl}=e_{3,j}\\,e_{3,l}^{*}$)",c:true},
        {x:"$\\tfrac12\\begin{pmatrix}1&0&i\\\\0&0&0\\\\i&0&1\\end{pmatrix}$ (senza coniugio)"},
        {x:"$\\tfrac12\\begin{pmatrix}-1&0&i\\\\0&0&0\\\\-i&0&-1\\end{pmatrix}$"},
        {x:"$\\begin{pmatrix}i&0&0\\\\0&0&0\\\\0&0&1\\end{pmatrix}$"}],
      hint:"$(P_3)_{jl}=e_{3,j}(e_{3,l})^{*}$ con $e_3=(i,0,1)/\\sqrt2$: l'elemento $(3,1)$ &egrave; $1\\cdot(i)^{*}=-i$, non $+i$.",
      sol:"<b>Proiettore hermitiano con autovettore complesso.</b> $(P_3)_{jl}=e_{3,j}(e_{3,l})^{*}$; con $e_3=(i,0,1)/\\sqrt2$: $(P_3)_{11}=i\\cdot(-i)/2=1/2$, $(P_3)_{13}=i\\cdot1/2=i/2$, $(P_3)_{31}=1\\cdot(-i)/2=-i/2$, $(P_3)_{33}=1/2$. Quindi $P_3=\\tfrac12\\begin{pmatrix}1&0&i\\\\0&0&0\\\\-i&0&1\\end{pmatrix}$, hermitiano ($P_3=P_3^{\\dagger}$) e idempotente. Il coniugio sul bra (<b>definizione di prodotto scalare hermitiano</b>) rende $(3,1)=-i$: dimenticarlo produce una matrice non hermitiana." }
    ]
  },

  { pool:"matrici", src:"tipo &middot; nucleo 16", steps:[{
      t:"MODUS OPERANDI. Controllo rapido degli autovalori PRIMA di proseguire: traccia e determinante devono soddisfare:",
      opts:[
        {x:"$\\mathrm{tr}\\,A=\\sum_k\\lambda_k$ e $\\det A=\\prod_k\\lambda_k$ (contando le molteplicit&agrave;)",c:true},
        {x:"$\\mathrm{tr}\\,A=\\prod_k\\lambda_k$ e $\\det A=\\sum_k\\lambda_k$"},
        {x:"$\\mathrm{tr}\\,A=\\det A$ sempre"},
        {x:"$\\mathrm{tr}\\,A=0$ per ogni matrice diagonalizzabile"}],
      hint:"La traccia &egrave; invariante per similitudine e uguaglia la somma della diagonale della forma diagonalizzata; il determinante ne &egrave; il prodotto.",
      sol:"<b>Relazioni di Vieta / invarianti spettrali.</b> Dal polinomio caratteristico $\\det(A-\\lambda\\mathbb{1})=\\prod_k(\\lambda_k-\\lambda)$ seguono $\\mathrm{tr}\\,A=\\sum_k\\lambda_k$ (coefficiente sub-principale) e $\\det A=\\prod_k\\lambda_k$ (termine noto). Sono invarianti per similitudine: si calcolano dalla matrice originale e devono coincidere con gli autovalori trovati. &Egrave; il controllo di dieci secondi che intercetta un autovalore sbagliato prima di costruire $f(A)$."
    }]
  },

  { pool:"matrici", src:"tipo &middot; b01 &middot; nucleo 16", steps:[{
      t:"MODUS OPERANDI (riepilogo-strategia). La sequenza completa per calcolare $f(A)$ allo scritto &egrave;:",
      opts:[
        {x:"autovalori $\\to$ verifica diagonalizzabilit&agrave; (m.a.=m.g.) $\\to$ autovettori e loro ortonormalit&agrave; $\\to$ proiettori (esterni o $SE_{kk}S^{-1}$) $\\to$ $f(A)=\\sum f(\\lambda_k)P_k$ $\\to$ controllo $\\sum P_k=\\mathbb{1}$",c:true},
        {x:"serie di Taylor di $f(A)$ e somma diretta"},
        {x:"$f$ della traccia, poi $\\times\\mathbb{1}$"},
        {x:"proiettori $|v\\rangle\\langle v|$ sempre, poi $f$ sugli autovalori"}],
      hint:"Tre bivi in ordine: diagonalizzabile o no; autovettori ortonormali o no; argomento $A$ o $A^2$/branch cut. Ogni bivio cambia la formula.",
      sol:"<b>Sequenza operativa completa (funzioni di matrice via teorema spettrale).</b> (1) autovalori dal polinomio caratteristico; (2) verifica m.a.=m.g. &mdash; se fallisce, forma di Jordan / Cayley-Hamilton con derivate di $f$; (3) autovettori e controllo di ortonormalit&agrave; &mdash; automatica se $A$ normale/autoaggiunta, altrimenti da verificare; (4) proiettori: $|v_k\\rangle\\langle v_k|$ se ortonormali (con coniugio se complessi), $SE_{kk}S^{-1}$ se obliqui; (5) $f(A)=\\sum_k f(\\lambda_k)P_k$, con $\\lambda_k^2$ se l'argomento &egrave; $A^2$ e con la determinazione giusta se $f$ &egrave; polidroma; (6) verifica finale $\\sum_kP_k=\\mathbb{1}$, $P_k^2=P_k$. I passi (2) e (3) sono i due bivi dove cadono gli scritti."
    }]
  }

];

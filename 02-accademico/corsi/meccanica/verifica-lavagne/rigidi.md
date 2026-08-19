# Lavagne del pool: rigidi

Ogni voce: la richiesta d'esame e la dimostrazione modello da verificare.

---

## L1

**Richiesta:** Enuncia e dimostra il teorema di Steiner $I=I_{CM}+Md^2$, precisando da dove viene la condizione che annulla il termine lineare.

**Argomento dichiarato:** Teorema di Huygens–Steiner

**Dimostrazione modello:**

<b>Enunciato.</b> Il momento d'inerzia di un corpo rispetto a un asse è uguale al momento d'inerzia rispetto all'asse parallelo passante per il centro di massa, più il prodotto della massa totale per il quadrato della distanza $d$ fra i due assi: $$I=I_{CM}+Md^2.$$ <b>Dimostrazione.</b> Prendo l'asse dato e l'asse parallelo per il CM. Per ogni elemento di massa $dm$, chiamo $\vec r_\perp$ il vettore (nel piano ortogonale agli assi) dalla proiezione dell'asse dato, e $\vec r'_\perp$ quello dalla proiezione dell'asse per il CM. Vale $\vec r_\perp=\vec d+\vec r'_\perp$, dove $\vec d$ congiunge i due assi. Allora: $$I=\int r_\perp^2\,dm=\int|\vec d+\vec r'_\perp|^2\,dm=\int\big(d^2+2\,\vec d\cdot\vec r'_\perp+r'^2_\perp\big)\,dm.$$ Separo i tre integrali: $$I=\underbrace{d^2\!\int dm}_{=\,Md^2}+\underbrace{2\,\vec d\cdot\!\int\vec r'_\perp\,dm}_{\text{termine lineare}}+\underbrace{\int r'^2_\perp\,dm}_{=\,I_{CM}}.$$ <b>Annullamento del termine lineare.</b> L'integrale $\int\vec r'_\perp\,dm=M\vec r'_{CM}$, dove $\vec r'_{CM}$ è la posizione del centro di massa misurata rispetto all'asse per il CM stesso. Per definizione di centro di massa questa è nulla: $\vec r'_{CM}=0$. Dunque il termine lineare svanisce e resta: $$I=I_{CM}+Md^2.\qquad\blacksquare$$ <b>Conseguenza.</b> Poiché $Md^2\geq0$, l'asse per il CM è quello di momento d'inerzia minimo tra tutti i paralleli: spostare l'asse costa sempre un $+Md^2$. La condizione-chiave è la stessa del termine misto di König: la 'media pesata delle posizioni relative al CM' è nulla per costruzione del CM.

---

## L2

**Richiesta:** Scrivi l'energia cinetica di un corpo rigido in rototraslazione (aggancio al primo teorema di König) e applicala al rotolamento puro.

**Argomento dichiarato:** Rototraslazione ed energia di rotolamento

**Dimostrazione modello:**

<b>Energia cinetica di un corpo rigido.</b> Per il primo teorema di König, $K=\tfrac12 Mv_{CM}^2+K'$, dove $K'$ è l'energia cinetica nel riferimento del CM. Per un corpo rigido, nel riferimento del CM il moto è una pura rotazione con velocità angolare $\vec\omega$, quindi $$K'=\tfrac12\sum_i m_i v'^2_i=\tfrac12\sum_i m_i(\omega r'_{i\perp})^2=\tfrac12\Big(\sum_i m_i r'^2_{i\perp}\Big)\omega^2=\tfrac12 I_{CM}\omega^2.$$ Dunque: $$\boxed{\ K=\tfrac12 Mv_{CM}^2+\tfrac12 I_{CM}\omega^2\ }.$$ Il primo termine è la traslazione del CM, il secondo la rotazione attorno al CM: due contributi indipendenti, grazie all'annullamento del termine misto di König.<br><br><b>Rotolamento puro.</b> Impongo il vincolo $v_{CM}=\omega R$, cioè $\omega=v_{CM}/R$: $$K=\tfrac12 Mv_{CM}^2+\tfrac12 I_{CM}\frac{v_{CM}^2}{R^2}=\tfrac12 Mv_{CM}^2\Big(1+\frac{I_{CM}}{MR^2}\Big).$$ Definendo $\beta=I_{CM}/(MR^2)$: $K=\tfrac12 Mv_{CM}^2(1+\beta)$. La frazione di energia in rotazione è $\dfrac{\beta}{1+\beta}$: per l'anello ($\beta=1$) è $1/2$, per la sfera ($\beta=2/5$) è $2/7$. <b>Interpretazione alternativa.</b> Nel rotolamento puro il punto di contatto è istantaneamente fermo, quindi si può vedere il moto come pura rotazione attorno all'asse di contatto: $K=\tfrac12 I_{contatto}\omega^2$ con $I_{contatto}=I_{CM}+MR^2$ (Steiner). Si ritrova lo stesso risultato. $\blacksquare$

---

## L3

**Richiesta:** Dimostra che l'accelerazione di un corpo che rotola giù da un piano inclinato è $a_{CM}=\dfrac{g\sin\theta}{1+I_{CM}/MR^2}$, e spiega perché una sfera piena arriva prima di un anello a parità di massa e raggio.

**Argomento dichiarato:** Gara di rotolamento sul piano inclinato

**Dimostrazione modello:**

<b>Impostazione dinamica.</b> Corpo di massa $M$, raggio $R$, momento d'inerzia $I_{CM}=\beta MR^2$, su un piano inclinato di angolo $\theta$. Forze lungo il piano: componente del peso $Mg\sin\theta$ (in discesa) e attrito statico $f$ (in salita). <b>Equazione traslazionale</b> (lungo il piano): $$Ma_{CM}=Mg\sin\theta-f.$$ <b>Equazione rotazionale</b> (rispetto al CM; solo l'attrito ha momento, braccio $R$): $$I_{CM}\,\alpha=fR.$$ <b>Vincolo di rotolamento puro:</b> $a_{CM}=\alpha R\Rightarrow\alpha=a_{CM}/R$. Sostituisco nella rotazionale: $$f=\frac{I_{CM}\,\alpha}{R}=\frac{I_{CM}\,a_{CM}}{R^2}=\beta M a_{CM}.$$ Inserisco nella traslazionale: $$Ma_{CM}=Mg\sin\theta-\beta Ma_{CM}\ \Longrightarrow\ a_{CM}(1+\beta)=g\sin\theta.$$ $$\boxed{\ a_{CM}=\frac{g\sin\theta}{1+\beta}=\frac{g\sin\theta}{1+I_{CM}/MR^2}\ }.$$ <b>Perché la sfera vince.</b> L'accelerazione dipende solo dal fattore di forma $\beta=I_{CM}/(MR^2)$, non da $M$ né da $R$ (che si semplificano): due sfere di massa e raggio diversi accelerano identicamente. Confronto: sfera piena $\beta=2/5$, cilindro pieno $\beta=1/2$, cilindro cavo $\beta\approx1$, anello $\beta=1$. Più $\beta$ è piccolo, più grande è $a_{CM}$: la sfera ($\beta=2/5$) accelera di più dell'anello ($\beta=1$) e arriva prima. Fisicamente: l'anello ha tutta la massa lontana dall'asse, quindi grande inerzia rotazionale; deve 'investire' più energia nella rotazione ($\tfrac{\beta}{1+\beta}$ della totale) e ne resta meno per la traslazione del CM. La sfera, con massa concentrata verso il centro, ruota 'più facilmente' e destina più energia all'avanzamento. La classifica sfera > cilindro pieno > anello è universale, indipendente da dimensioni e massa. $\blacksquare$

---

## L4

**Richiesta:** Ricava il periodo delle piccole oscillazioni di un pendolo fisico e definisci la lunghezza ridotta, confrontandolo col pendolo semplice.

**Argomento dichiarato:** Pendolo fisico e lunghezza ridotta

**Dimostrazione modello:**

<b>Impostazione.</b> Un corpo rigido di massa $M$ è imperniato su un asse orizzontale fisso, a distanza $d$ dal centro di massa. Sia $I$ il momento d'inerzia rispetto a quell'asse e $\theta$ l'angolo tra la verticale e la congiungente asse-CM. <b>Equazione del moto.</b> L'unica forza con momento non nullo rispetto all'asse è il peso $M\vec g$, applicato nel CM, con braccio $d\sin\theta$; il momento è di richiamo: $$I\ddot\theta=-Mgd\sin\theta.$$ <b>Piccole oscillazioni.</b> Per $\theta$ piccolo, $\sin\theta\approx\theta$: $$I\ddot\theta=-Mgd\,\theta\ \Longrightarrow\ \ddot\theta+\frac{Mgd}{I}\theta=0.$$ Oscillatore armonico con pulsazione e periodo $$\omega=\sqrt{\frac{Mgd}{I}},\qquad \boxed{\ T=2\pi\sqrt{\frac{I}{Mgd}}\ }.$$ <b>Lunghezza ridotta.</b> Confronto col pendolo semplice $T=2\pi\sqrt{\ell/g}$: i due periodi coincidono se $$\ell_{rid}=\frac{I}{Md}.$$ Un pendolo fisico oscilla come un pendolo semplice lungo $\ell_{rid}$. Usando Steiner $I=I_{CM}+Md^2$: $$\ell_{rid}=\frac{I_{CM}+Md^2}{Md}=\frac{I_{CM}}{Md}+d>d.$$ La lunghezza ridotta è sempre maggiore di $d$: il pendolo fisico è sempre 'più lento' del pendolo semplice che avesse la massa concentrata nel CM. Il termine $I_{CM}/(Md)$ misura quanto la distribuzione estesa della massa rallenta l'oscillazione. $\blacksquare$

---

## L5

**Richiesta:** Calcola per integrazione i momenti d'inerzia di asta, disco/cilindro pieno, anello e sfera piena rispetto agli assi di simmetria, evidenziando il ruolo del fattore di forma.

**Argomento dichiarato:** Momenti d'inerzia notevoli

**Dimostrazione modello:**

Definizione: $I=\int r_\perp^2\,dm$, con $r_\perp$ distanza dell'elemento dall'asse. <b>Asta</b> (lunghezza $L$, asse per il centro, ortogonale): densità lineare $\lambda=M/L$, $$I=\int_{-L/2}^{L/2}x^2\,\lambda\,dx=\lambda\,\frac{L^3}{12}=\frac{1}{12}ML^2.$$ Per un estremo, Steiner: $I=\tfrac{1}{12}ML^2+M(L/2)^2=\tfrac13 ML^2$. <b>Anello</b> (raggio $R$, asse per il centro ortogonale al piano): tutta la massa a distanza $R$, $$I=MR^2.$$ <b>Disco / cilindro pieno</b> (raggio $R$, asse): densità superficiale $\sigma=M/(\pi R^2)$, elemento anulare $dm=\sigma\,2\pi r\,dr$, $$I=\int_0^R r^2\,\sigma\,2\pi r\,dr=\sigma\,2\pi\,\frac{R^4}{4}=\frac12 MR^2$$ (la lunghezza del cilindro è irrilevante per questo asse). <b>Sfera piena</b> (raggio $R$, diametro): uso la simmetria $I_x=I_y=I_z=I$ e $I_x+I_y+I_z=2\int r^2\,dm$ (poiché $I_x=\int(y^2+z^2)dm$ e la somma ricostruisce $2\sum$ di $x^2+y^2+z^2$). Con $\rho=\dfrac{3M}{4\pi R^3}$: $$\int r^2\,dm=\int_0^R r^2\,\rho\,4\pi r^2\,dr=\rho\,4\pi\,\frac{R^5}{5}=\frac{3}{5}MR^2,$$ quindi $I=\tfrac23\cdot\tfrac35 MR^2=\tfrac25 MR^2$. $\blacksquare$<br><br><b>Significato fisico.</b> Riassumo con il fattore di forma $\beta=I/(MR^2)$: anello $\beta=1$, cilindro/disco pieno $\tfrac12$, guscio sferico $\tfrac23$, sfera piena $\tfrac25$. A parità di massa e raggio, ciò che conta è \emph{dove} sta la massa: più è lontana dall'asse (peso $r^2$), più grande $I$. È il principio del volano (massa alla periferia per grande inerzia) e la chiave delle gare di rotolamento.

---

## L6

**Richiesta:** Deriva l'equazione $M=I\alpha$ per la rotazione attorno a un asse fisso a partire dal teorema del momento angolare, e discuti l'analogia con $F=ma$.

**Argomento dichiarato:** Equazione del moto rotatorio I alpha = M

**Dimostrazione modello:**

Ipotesi: corpo rigido in rotazione attorno a un asse fisso (asse $z$) con velocità angolare $\omega$; tutte le particelle condividono lo stesso $\omega$. <b>Momento angolare assiale.</b> La particella $i$ percorre una circonferenza di raggio $r_{i\perp}$ con velocità $\omega r_{i\perp}$; il suo contributo al momento angolare lungo l'asse è $m_i r_{i\perp}\cdot(\omega r_{i\perp})=m_i r_{i\perp}^2\,\omega$. Sommando: $$L_z=\Big(\sum_i m_i r_{i\perp}^2\Big)\omega=I\omega,$$ dove $I=\sum_i m_i r_{i\perp}^2$ è il momento d'inerzia rispetto all'asse. <b>Equazione del moto.</b> Il teorema del momento angolare in componente assiale dà $\dfrac{dL_z}{dt}=M_z$. Poiché $I$ è costante (corpo rigido, asse fisso): $$\frac{dL_z}{dt}=I\frac{d\omega}{dt}=I\alpha\ \Longrightarrow\ \boxed{\ M_z=I\alpha\ }.\qquad\blacksquare$$ <b>Analogia con $F=ma$.</b> La corrispondenza è puntuale: forza $\vec F\leftrightarrow$ momento $M$, massa $m\leftrightarrow$ momento d'inerzia $I$, accelerazione $a\leftrightarrow$ accelerazione angolare $\alpha$. $I$ è la 'massa rotazionale', la misura dell'inerzia rispetto ai cambiamenti di rotazione: a parità di momento applicato, un corpo con $I$ grande accelera angolarmente meno. <b>Significato fisico.</b> È l'equazione fondamentale della dinamica rotatoria per asse fisso. La sua validità in forma scalare richiede un asse fisso o un asse di simmetria: nel caso generale $I$ diventa un tensore e $\vec L$ non è parallelo a $\boldsymbol\omega$.

---

## L7

**Richiesta:** Ricava l'energia cinetica di rotazione $\tfrac12 I\omega^2$ e, tramite il primo teorema di König, l'energia di un corpo rigido in rototraslazione.

**Argomento dichiarato:** Energia cinetica di rotazione

**Dimostrazione modello:**

<b>Rotazione pura.</b> Un corpo rigido ruota attorno a un asse con velocità angolare $\omega$: la particella $i$ ha velocità $v_i=\omega r_{i\perp}$. L'energia cinetica è $$K=\sum_i\tfrac12 m_i v_i^2=\tfrac12\Big(\sum_i m_i r_{i\perp}^2\Big)\omega^2=\tfrac12 I\omega^2.$$ La forma è l'analogo rotazionale di $\tfrac12 mv^2$: $I$ gioca il ruolo della massa, $\omega$ quello della velocità. <b>Rototraslazione (König).</b> Per il moto generale, il primo teorema di König separa la traslazione del CM dal moto rispetto al CM: $$K=\tfrac12 Mv_{CM}^2+K'.$$ Per un rigido il moto nel riferimento del CM è una pura rotazione, quindi $K'=\tfrac12 I_{CM}\omega^2$: $$\boxed{\ K=\tfrac12 Mv_{CM}^2+\tfrac12 I_{CM}\omega^2\ }.\qquad\blacksquare$$ <b>Significato fisico.</b> L'energia cinetica di un rigido è la somma di due serbatoi indipendenti — traslazione del CM e rotazione attorno al CM — resi separabili dall'annullamento del termine misto di König. Il momento d'inerzia $I$ misura quanta energia costa una data rotazione: un volano immagazzina energia proprio in $\tfrac12 I\omega^2$, tanto più efficacemente quanto più grande è $I$. È il termine che entra nel bilancio energetico del rotolamento e delle macchine rotanti.

---

## L8

**Richiesta:** Enuncia il vincolo di rotolamento puro, dimostra che l'attrito statico non compie lavoro e chiarisci perché il suo valore non è $\mu N$ ma è determinato dalle equazioni del moto.

**Argomento dichiarato:** Rotolamento puro e ruolo dell'attrito statico

**Dimostrazione modello:**

<b>Vincolo di rotolamento puro.</b> Il punto di contatto tra corpo e superficie è istantaneamente fermo: la velocità di traslazione del CM e quella di rotazione della periferia si cancellano lì. $$v_{contatto}=v_{CM}-\omega R=0\ \Longrightarrow\ v_{CM}=\omega R,\qquad a_{CM}=\alpha R.$$ <b>L'attrito statico non compie lavoro.</b> La forza d'attrito statico è applicata nel punto di contatto, che ha velocità istantanea nulla. La potenza da essa erogata è $$P=\vec f_s\cdot\vec v_{contatto}=\vec f_s\cdot\vec 0=0.$$ Non trasferendo energia, nel rotolamento puro l'energia meccanica si conserva. <b>Perché $f_s\neq\mu N$.</b> L'attrito statico è una forza di \emph{vincolo}, non data da una legge costitutiva: assume il valore — qualunque esso sia — necessario a far rispettare il vincolo di rotolamento, entro il limite $0\le f_s\le\mu_s N$. Lo si determina risolvendo insieme le equazioni di traslazione e rotazione, non ponendo $f=\mu N$ (che è il valore \emph{limite}, o quello dinamico se si striscia). Se il moto richiedesse $f_s>\mu_s N$, il vincolo si rompe e inizia lo strisciamento. $\blacksquare$<br><br><b>Significato fisico.</b> L'attrito statico nel rotolamento è come la tensione di un filo o la reazione normale: un'incognita fissata dalle equazioni, non un dato. Può puntare avanti o indietro a seconda del problema, e non dissipa mai energia (a differenza dell'attrito dinamico dello strisciamento). È questa la ragione per cui una ruota che rotola idealmente non si scalda e non rallenta: la dissipazione reale viene dall'attrito di rotolamento, un effetto diverso e minore.

---

## L9

**Richiesta:** Mostra che per la rotazione attorno a un asse di simmetria $\vec L=I\vec\omega$, e spiega perché in generale $\vec L$ non è parallelo a $\vec\omega$ (tensore d'inerzia).

**Argomento dichiarato:** Momento angolare L = I omega e caso L non parallelo a omega

**Dimostrazione modello:**

<b>Espressione generale.</b> Il momento angolare rispetto a un punto dell'asse è $$\vec L=\sum_i m_i\,\vec r_i\times\vec v_i=\sum_i m_i\,\vec r_i\times(\boldsymbol\omega\times\vec r_i).$$ Con la regola BAC-CAB, $\vec r_i\times(\boldsymbol\omega\times\vec r_i)=r_i^2\,\boldsymbol\omega-\vec r_i\,(\vec r_i\cdot\boldsymbol\omega)$, quindi $$\vec L=\sum_i m_i\big[r_i^2\,\boldsymbol\omega-\vec r_i(\vec r_i\cdot\boldsymbol\omega)\big].$$ Questa è un'applicazione lineare di $\boldsymbol\omega$: $\vec L=\mathbf{I}\,\boldsymbol\omega$, dove $\mathbf{I}$ è il \emph{tensore d'inerzia} (una matrice $3\times3$ simmetrica). <b>Asse di simmetria.</b> Se $\boldsymbol\omega$ è diretta lungo un asse di simmetria del corpo, i contributi trasversali di $\vec r_i(\vec r_i\cdot\boldsymbol\omega)$ si cancellano a coppie per simmetria, e resta solo la parte parallela a $\boldsymbol\omega$: $$\vec L=I\,\boldsymbol\omega,$$ con $I$ il momento d'inerzia rispetto a quell'asse. <b>Caso generale.</b> Se $\boldsymbol\omega$ non è lungo un asse principale (autovettore di $\mathbf{I}$), allora $\vec L=\mathbf{I}\boldsymbol\omega$ \emph{non} è parallelo a $\boldsymbol\omega$. $\blacksquare$<br><br><b>Significato fisico.</b> $\vec L\parallel\boldsymbol\omega$ solo lungo i tre assi principali d'inerzia. Fuori da essi, un corpo che ruota a $\boldsymbol\omega$ costante ha $\vec L$ che non è allineato e, se l'asse è forzato fisso, $\vec L$ ruota descrivendo un cono: serve un momento esterno oscillante, che si scarica sui supporti. È lo squilibrio dinamico delle ruote d'auto, corretto con i contrappesi (equilibratura). Sugli assi principali, invece, la rotazione libera è 'pulita': $\vec L$ e $\boldsymbol\omega$ vanno insieme.

---

## L10

**Richiesta:** Enuncia e giustifica le condizioni di equilibrio statico di un corpo rigido, e dimostra che se la risultante è nulla la condizione sui momenti è indipendente dal polo.

**Argomento dichiarato:** Statica del corpo rigido

**Dimostrazione modello:**

<b>Condizioni di equilibrio.</b> Un corpo rigido è in equilibrio statico quando il CM non accelera ($\vec a_{CM}=0$) e non ruota ($\alpha=0$). Dalle due equazioni cardinali questo equivale ad annullare risultante e momento risultante delle forze esterne: $$\boxed{\ \sum\vec F_{ext}=\vec 0,\qquad \sum\vec M_{ext}=\vec 0\ }.$$ Sono $6$ equazioni scalari nello spazio ($3+3$), $3$ nel piano ($\sum F_x=\sum F_y=0$, $\sum M=0$). <b>Indipendenza dal polo.</b> Calcolo il momento risultante rispetto a due poli $O$ e $O'$. Per ogni forza $\vec F_k$ applicata in $\vec r_k$: $$\sum_k(\vec r_k-\vec r_{O'})\times\vec F_k=\sum_k(\vec r_k-\vec r_O)\times\vec F_k+(\vec r_O-\vec r_{O'})\times\sum_k\vec F_k,$$ cioè $$\vec M_{O'}=\vec M_O+(\vec r_O-\vec r_{O'})\times\vec F_{tot}.$$ Se la risultante è nulla, $\vec F_{tot}=\vec 0$, il termine aggiuntivo svanisce e $\vec M_{O'}=\vec M_O$: la condizione sui momenti \emph{non dipende dal polo scelto}. $\blacksquare$<br><br><b>Significato fisico.</b> Quando la prima cardinale (bilancio delle forze) è soddisfatta, il momento è lo stesso rispetto a qualunque polo: si può allora scegliere il polo \emph{più conveniente} — tipicamente su una reazione vincolare incognita, per eliminarla dall'equazione dei momenti. È la strategia standard nei problemi di scala appoggiata, trave su due appoggi, mensola: si pone il polo dove agisce l'incognita che non interessa, riducendo il numero di equazioni da risolvere.

---

## L11

**Richiesta:** Con il metodo dell'energia ricava la velocità del CM di un corpo che rotola giù per un dislivello $h$, e determina il coefficiente d'attrito minimo perché il rotolamento resti puro.

**Argomento dichiarato:** Rotolamento sul piano inclinato: energia e condizione di rotolamento

**Dimostrazione modello:**

Ipotesi: corpo di massa $M$, raggio $R$, momento d'inerzia $I_{CM}=\beta MR^2$, che rotola senza strisciare giù da un piano inclinato di angolo $\theta$, scendendo di un dislivello $h$. <b>Metodo dell'energia.</b> Nel rotolamento puro l'attrito statico non compie lavoro, quindi l'energia meccanica si conserva: $$Mgh=\tfrac12 Mv_{CM}^2+\tfrac12 I_{CM}\omega^2.$$ Con il vincolo $\omega=v_{CM}/R$ e $I_{CM}=\beta MR^2$: $$Mgh=\tfrac12 Mv_{CM}^2(1+\beta)\ \Longrightarrow\ \boxed{\ v_{CM}=\sqrt{\frac{2gh}{1+\beta}}\ }.$$ Più grande $\beta$, minore la velocità a fondo discesa: l'anello ($\beta=1$) arriva più lento della sfera ($\beta=2/5$). <b>Condizione di rotolamento puro.</b> L'accelerazione del CM è $a_{CM}=\dfrac{g\sin\theta}{1+\beta}$; l'attrito statico necessario si ricava dall'equazione rotazionale, $f_s=\dfrac{I_{CM}\alpha}{R}=\beta M a_{CM}=\dfrac{\beta}{1+\beta}Mg\sin\theta$. Perché il rotolamento sia possibile serve $f_s\le\mu_s N=\mu_s Mg\cos\theta$: $$\frac{\beta}{1+\beta}Mg\sin\theta\le\mu_s Mg\cos\theta\ \Longrightarrow\ \mu_s\ge\frac{\beta}{1+\beta}\tan\theta.$$ Il coefficiente minimo è $\mu_{min}=\dfrac{\beta}{1+\beta}\tan\theta$. $\blacksquare$<br><br><b>Significato fisico.</b> Il metodo dell'energia dà la velocità in due righe, ma nasconde l'attrito: per la condizione di rotolamento occorre tornare alle equazioni del moto. L'attrito richiesto cresce con l'inclinazione e con $\beta$: su un piano abbastanza ripido, o con un corpo a $\beta$ grande, l'attrito disponibile non basta e il corpo inizia a strisciare, dissipando energia. La velocità finale non dipende da $M$ né da $R$, solo dal fattore di forma $\beta$: la classifica di arrivo è universale.

---

## L12

**Richiesta:** Ricava la velocit&agrave; angolare di precessione $\Omega_p$ di una trottola simmetrica appoggiata in un punto, partendo dalla seconda equazione cardinale. Spiega perch&eacute; il momento della forza peso cambia la direzione di $\vec L$ ma non il suo modulo, e dichiara esattamente che cosa si trascura nell'approssimazione giroscopica.

**Argomento dichiarato:** Moti giroscopici — precessione del giroscopio

**Dimostrazione modello:**

<b>Sistema e ipotesi.</b> Corpo a simmetria assiale vincolato in $O$: asse di figura principale d'inerzia con momento $I$, inclinato di $\theta$ sulla verticale $\hat z$, centro di massa sull'asse a distanza $d$ da $O$, spin $\omega$. <b>Ipotesi giroscopica:</b> si pone $\vec L\simeq I\omega\,\hat u$ lungo l'asse di figura, cio&egrave; si <b>trascura</b> il momento angolare generato dalla precessione stessa ($I_\perp\Omega_p\sin\theta\ll I\omega$), la nutazione e l'attrito in $O$.<br><b>Il momento &egrave; ortogonale a $\vec L$.</b> Il peso $-Mg\hat z$ applicato nel CM d&agrave; $$\vec M_O=d\,\hat u\times(-Mg\hat z)=Mgd\,(\hat z\times\hat u),\qquad|\vec M_O|=Mgd\sin\theta,$$ vettore orizzontale, ortogonale all'asse: $\vec M_O\cdot\vec L=0$.<br><b>Modulo fisso, direzione che ruota.</b> Da $d\vec L/dt=\vec M_O$ segue $$\frac{d}{dt}L^2=2\,\vec L\cdot\vec M_O=0,$$ e anche $\hat z\cdot d\vec L/dt=0$: restano costanti modulo e inclinazione, e la punta di $\vec L$ percorre un cerchio orizzontale di raggio $L\sin\theta$.<br><b>Conto della precessione.</b> In $dt$ la punta avanza di $|d\vec L|=Mgd\sin\theta\,dt$ lungo quel cerchio, quindi $$d\phi=\frac{|d\vec L|}{L\sin\theta}=\frac{Mgd\,dt}{I\omega}\ \Longrightarrow\ \boxed{\ \Omega_p=\frac{Mgd}{I\omega}\ }$$ indipendente da $\theta$. Coerenza a posteriori: $\Omega_p\ll\omega$ equivale a $\omega^2\gg Mgd/I$, cio&egrave; trottola veloce. $\blacksquare$<br><br><b>Significato fisico.</b> Un momento ortogonale a $\vec L$ ne ruota la direzione senza cambiarne il modulo, come la forza centripeta fa con $\vec p$. Di qui la <b>rigidit&agrave; giroscopica</b>: un momento agente per $\Delta t$ devia l'asse solo di $\Delta\phi\simeq M\Delta t/(I\omega)$, tanto meno quanto pi&ugrave; grande &egrave; $L$ &mdash; il giroscopio &laquo;resiste&raquo; (bussole giroscopiche, stabilizzazione di satelliti). La stessa struttura $d\vec L/dt=\vec\mu\times\vec B$ con $\vec\mu=\gamma\vec L$ d&agrave; la <b>precessione di Larmor</b> $\omega_L=\gamma B$: lo spin in campo magnetico precede con la medesima matematica, ed &egrave; il cuore della risonanza magnetica.

---

## L13

**Richiesta:** Un punto materiale urta un corpo rigido incernierato a un asse fisso. Discuti quali grandezze si conservano e rispetto a quale polo, spiegando perch&eacute; la quantit&agrave; di moto non si conserva, e ricava la posizione del <b>centro di percussione</b>, cio&egrave; il punto d'impatto per cui la cerniera non riceve alcun impulso.

**Argomento dichiarato:** Urti tra corpi estesi — centro di percussione

**Dimostrazione modello:**

<b>Impostazione e ipotesi.</b> Corpo rigido di massa $M$, in quiete, ruotabile attorno all'asse fisso per la cerniera $O$; momento d'inerzia $I$ rispetto a quell'asse, CM a distanza $d$ da $O$. Un punto di massa $m$ e velocit&agrave; $v$ lo colpisce a distanza $b$ da $O$, con $\vec v$ ortogonale alla congiungente e nel piano perpendicolare all'asse che contiene il CM. Ipotesi: urto <b>istantaneo</b> ($\Delta t\to0$), asse principale d'inerzia per $O$ (altrimenti la cerniera deve fornire anche coppie).<br><b>Che cosa si conserva.</b> Per $\Delta t\to0$ contano solo le forze impulsive (peso e attriti finiti danno $\vec F\Delta t\to0$). L'unica impulsiva esterna &egrave; la reazione $\vec R$ della cerniera, applicata <b>in $O$</b>: braccio nullo, dunque $\vec M_O^{\text{ext}}=0$ e $L_O$ si conserva. Ma $\vec R$ ha risultante non nulla: la quantit&agrave; di moto <b>non</b> si conserva, e con un polo diverso da $O$ il bilancio dei momenti si sporca.<br><b>Equazione dell'urto.</b> Proiettile conficcato: $$mvb=(I+mb^2)\,\Omega\ \Longrightarrow\ \Omega=\frac{mvb}{I+mb^2};$$ se rimbalza con $v'$, $mvb=mv'b+I\Omega$, e nel caso elastico si affianca l'energia.<br><b>Centro di percussione.</b> Siano $J$ l'impulso ricevuto nel punto d'urto e $J_O$ quello della cerniera: il teorema dell'impulso per il CM e il bilancio dei momenti danno $$J+J_O=M\Omega d,\qquad Jb=I\Omega\ \Longrightarrow\ J_O=\Omega\Big(Md-\frac{I}{b}\Big),$$ che si annulla se e solo se $$\boxed{\ b=\frac{I}{Md}\ }$$ Con Huygens-Steiner $I=I_{cm}+Md^2$: $b=d+k^2/d>d$ ($k$ raggio giratore rispetto al CM), il centro di percussione sta sempre <b>oltre</b> il CM. Asta omogenea incernierata a un estremo: $I=M\ell^2/3$, $d=\ell/2$, $b=\tfrac23\ell$. $\blacksquare$<br><br><b>Significato fisico.</b> $b=I/(Md)$ &egrave; anche la lunghezza ridotta del pendolo composto: centro di percussione e centro di oscillazione coincidono. &Egrave; lo <b>sweet spot</b> della mazza o della racchetta &mdash; colpendo l&agrave; la mano non sente contraccolpo; nell'attrezzo reale &egrave; un compromesso, perch&eacute; contano anche il nodo del primo modo di vibrazione e il coefficiente di restituzione, che il modello rigido ignora. Il metodo &mdash; isolare le impulsive e scegliere il polo che azzera il vincolo &mdash; ritorna nell'approssimazione impulsiva della teoria dell'urto.


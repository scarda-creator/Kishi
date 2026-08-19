# Lavagne del pool: onde

Ogni voce: la richiesta d'esame e la dimostrazione modello da verificare.

---

## L1

**Richiesta:** Deriva l'equazione delle onde per la corda vibrante tesa, dichiarando tutte le approssimazioni, e discuti la soluzione generale.

**Argomento dichiarato:** Equazione di d'Alembert per la corda vibrante

**Dimostrazione modello:**

<b>Sistema e ipotesi.</b> Corda flessibile di densità lineare $\mu$, tesa con tensione $T$, che compie piccole oscillazioni trasversali $y(x,t)$ attorno alla configurazione rettilinea. Approssimazioni: (i) piccola ampiezza / piccola pendenza ($|\partial y/\partial x|\ll1$); (ii) tensione $T$ uniforme in modulo (conseguenza di (i): niente moto longitudinale apprezzabile); (iii) corda perfettamente flessibile (nessuna rigidità flessionale) e gravità trascurabile rispetto a $T$.<br><br><b>Elemento di corda.</b> Isolo il tratto tra $x$ e $x+dx$, massa $dm=\mu\,dx$. Alle due estremità la tensione è tangente alla corda; siano $\theta(x)$ e $\theta(x+dx)$ gli angoli con l'orizzontale. <b>Componente orizzontale:</b> $T\cos\theta(x+dx)-T\cos\theta(x)\approx0$ per piccoli angoli ($\cos\theta\approx1$): nessun moto longitudinale, coerente con $T$ costante. <b>Componente verticale</b> (il richiamo): $$dF_y=T\sin\theta(x+dx)-T\sin\theta(x).$$ <b>Linearizzazione.</b> Per piccola pendenza $\sin\theta\approx\tan\theta=\dfrac{\partial y}{\partial x}$. Allora $$dF_y=T\left[\frac{\partial y}{\partial x}\Big|_{x+dx}-\frac{\partial y}{\partial x}\Big|_{x}\right]=T\,\frac{\partial^2 y}{\partial x^2}\,dx.$$ <b>Secondo principio</b> sull'elemento (moto verticale): $$dm\,\frac{\partial^2 y}{\partial t^2}=dF_y\ \Longrightarrow\ \mu\,dx\,\frac{\partial^2 y}{\partial t^2}=T\,\frac{\partial^2 y}{\partial x^2}\,dx.$$ Semplifico $dx$: $$\boxed{\ \frac{\partial^2 y}{\partial t^2}=\frac{T}{\mu}\,\frac{\partial^2 y}{\partial x^2}\ }\qquad v=\sqrt{\frac{T}{\mu}}.$$ <b>Soluzione generale.</b> Col cambio di variabili $\xi=x-vt,\ \eta=x+vt$ l'equazione diventa $\partial^2 y/\partial\xi\partial\eta=0$, la cui soluzione è $$y(x,t)=f(x-vt)+g(x+vt),$$ somma di un'onda progressiva $f$ (trasla a destra con velocità $v$) e una regressiva $g$. Qualunque profilo iniziale si propaga rigidamente senza deformarsi, perché $v=\sqrt{T/\mu}$ è indipendente da ampiezza e frequenza (mezzo non dispersivo). <b>Dove serve la linearità.</b> Se l'ampiezza fosse grande, $T$ varierebbe con l'allungamento locale e comparirebbero termini non lineari: l'onda si deformerebbe e cadrebbe il principio di sovrapposizione. La stessa struttura $\partial_{tt}=v^2\partial_{xx}$ governa il suono e le onde elettromagnetiche, con $v$ fissata dalle proprietà del mezzo. $\blacksquare$

---

## L2

**Richiesta:** Ricava le onde stazionarie e le frequenze dei modi normali per una corda fissa ai due estremi, spiegando l'origine della quantizzazione.

**Argomento dichiarato:** Onde stazionarie e quantizzazione dei modi

**Dimostrazione modello:**

<b>Sovrapposizione.</b> Su una corda vincolata, un'onda progressiva riflessa agli estremi genera un'onda regressiva di uguale ampiezza e frequenza. Le sommo: $$y=A\sin(kx-\omega t)+A\sin(kx+\omega t).$$ Con la formula $\sin\alpha+\sin\beta=2\sin\frac{\alpha+\beta}{2}\cos\frac{\alpha-\beta}{2}$: $$y(x,t)=2A\sin(kx)\cos(\omega t).$$ <b>Onda stazionaria:</b> la dipendenza spaziale $\sin(kx)$ e quella temporale $\cos(\omega t)$ sono \emph{separate}. Il profilo non trasla: ogni punto oscilla in $t$ con ampiezza $2A\sin(kx)$ fissata dalla sua posizione. I <b>nodi</b> (sempre fermi) stanno dove $\sin(kx)=0$; i <b>ventri</b> (ampiezza massima) dove $|\sin(kx)|=1$.<br><br><b>Condizioni al contorno.</b> Gli estremi fissi devono essere nodi. In $x=0$: $\sin(0)=0$, automatico. In $x=L$: $$\sin(kL)=0\ \Longrightarrow\ kL=n\pi,\quad n=1,2,3,\dots$$ Quindi $$k_n=\frac{n\pi}{L},\qquad \lambda_n=\frac{2\pi}{k_n}=\frac{2L}{n}.$$ La corda deve contenere un numero intero di semilunghezze d'onda: $L=n\lambda_n/2$. <b>Frequenze permesse.</b> Con $v=\sqrt{T/\mu}$ e $f=v/\lambda$: $$\boxed{\ f_n=\frac{nv}{2L}=n f_1\ },\qquad f_1=\frac{v}{2L}.$$ La fondamentale $f_1$ e le armoniche $f_n=nf_1$: multipli interi. <b>Origine della quantizzazione.</b> Le frequenze non sono arbitrarie ma discrete perché le condizioni al contorno (estremi fissi) selezionano solo certi $k$. È la quantizzazione classica: un'onda confinata in una regione finita ha spettro discreto. È il ponte diretto verso la meccanica quantistica: la particella nella buca di potenziale infinita ha esattamente le stesse $\sin(n\pi x/L)$ e le energie quantizzate $E_n\propto n^2$ nascono dalle stesse condizioni al contorno sulla funzione d'onda. Il timbro di uno strumento è la sovrapposizione delle armoniche con diverse ampiezze. $\blacksquare$

---

## L3

**Richiesta:** Ricava la formula generale dell'effetto Doppler per il suono, giustificando fisicamente i segni, e accenna al cono di Mach.

**Argomento dichiarato:** Effetto Doppler e regola dei segni

**Dimostrazione modello:**

<b>Riferimento.</b> Per un'onda meccanica il mezzo (aria) fornisce un riferimento privilegiato: la velocità del suono $v$ è fissata rispetto al mezzo. Tratto separatamente i due moti, perché agiscono con meccanismi diversi.<br><br><b>(A) Osservatore in moto, sorgente ferma.</b> La sorgente ferma emette fronti a distanza $\lambda=v/f$ (invariata). L'osservatore che si muove verso la sorgente con velocità $v_{oss}$ li incontra alla velocità relativa $v+v_{oss}$, quindi ne intercetta più al secondo: $$f'=\frac{v+v_{oss}}{\lambda}=f\,\frac{v+v_{oss}}{v}.$$ Cambia la <b>velocità di incontro</b>, non $\lambda$. (In allontanamento: $v-v_{oss}$.)<br><br><b>(B) Sorgente in moto, osservatore fermo.</b> Tra due emissioni successive (intervallo $1/f$) la sorgente avanza di $v_{sorg}/f$ verso l'osservatore: i fronti davanti a lei si addensano. La nuova lunghezza d'onda è $$\lambda'=\frac{v-v_{sorg}}{f}.$$ L'osservatore fermo li riceve alla velocità $v$: $$f'=\frac{v}{\lambda'}=f\,\frac{v}{v-v_{sorg}}.$$ Qui cambia la <b>lunghezza d'onda</b>, non la velocità di incontro. È la ragione dell'asimmetria delle due formule.<br><br><b>Formula generale.</b> Combinando i due effetti (moto lungo la congiungente): $$\boxed{\ f'=f\,\frac{v\pm v_{oss}}{v\mp v_{sorg}}\ }.$$ <b>Regola dei segni</b> (fisica, non mnemonica): si sceglie il segno che fa \emph{aumentare} $f'$ in avvicinamento e diminuire in allontanamento. Avvicinamento dell'osservatore ⇒ numeratore $+v_{oss}$ (incontra più fronti); avvicinamento della sorgente ⇒ denominatore $-v_{sorg}$ (comprime $\lambda$, quindi denominatore più piccolo, $f'$ più grande). I segni superiori valgono per l'avvicinamento.<br><br><b>Cono di Mach.</b> Se la sorgente supera la velocità del suono, $v_{sorg}>v$: il denominatore di (B) si annullerebbe e poi cambierebbe segno — la formula perde senso perché la sorgente 'sorpassa' i propri fronti. Questi si accumulano su una superficie conica, il <b>cono di Mach</b>, fronte dell'<b>onda d'urto</b> (boom sonico). Il semiangolo $\theta$ del cono soddisfa $$\sin\theta=\frac{v}{v_{sorg}}=\frac{1}{M},$$ con $M=v_{sorg}/v$ numero di Mach: più veloce la sorgente, più stretto il cono. $\blacksquare$

---

## L4

**Richiesta:** Ricava la potenza media trasportata da un'onda armonica su una corda e mostra che è proporzionale a $A^2\omega^2$; commenta l'intensità e la caduta $1/r^2$.

**Argomento dichiarato:** Energia e intensità di un'onda armonica

**Dimostrazione modello:**

<b>Ogni elemento è un oscillatore.</b> Consideri l'onda $y(x,t)=A\sin(kx-\omega t)$ su una corda di densità lineare $\mu$. Un elemento di massa $dm=\mu\,dx$ si muove trasversalmente con velocità $u=\partial y/\partial t=-A\omega\cos(kx-\omega t)$. La sua energia cinetica è $$dK=\tfrac12\,dm\,u^2=\tfrac12\mu\,dx\,A^2\omega^2\cos^2(kx-\omega t).$$ Per un oscillatore armonico l'energia totale (cinetica + potenziale elastica) è il doppio della cinetica media; l'energia per unità di lunghezza è $$\frac{dE}{dx}=\tfrac12\mu A^2\omega^2\big[\cos^2+\sin^2\big]=\tfrac12\mu A^2\omega^2\cdot(\text{struttura oscillante}),$$ con valor medio $\left\langle dE/dx\right\rangle=\tfrac12\mu A^2\omega^2$ (usando $\langle\cos^2\rangle=\tfrac12$ e sommando i due contributi). <b>Potenza media.</b> Questa energia viaggia con velocità $v$, quindi la potenza media trasmessa attraverso un punto è $$\boxed{\ \langle P\rangle=\tfrac12\mu\,v\,A^2\omega^2\ }.$$ <b>Il risultato-chiave</b> è la dipendenza $\langle P\rangle\propto A^2\omega^2$: l'energia trasportata cresce col \emph{quadrato} dell'ampiezza e col \emph{quadrato} della frequenza. Raddoppiare l'ampiezza quadruplica la potenza; raddoppiare la frequenza, a parità di ampiezza, pure. La ragione fisica: ogni elemento è un oscillatore, e l'energia di un oscillatore armonico va come (ampiezza)$^2\times$(pulsazione)$^2$. <b>Intensità e onde sferiche.</b> Per un'onda che si propaga in 3D l'intensità $I$ (potenza per unità di superficie) obbedisce alla stessa legge $I\propto A^2\omega^2$. Per una sorgente puntiforme che irradia in modo isotropo, la potenza totale si distribuisce su sfere di superficie $4\pi r^2$, quindi $$I(r)=\frac{\langle P\rangle}{4\pi r^2}\propto\frac{1}{r^2},$$ e di conseguenza l'ampiezza cala come $A\propto1/r$. È la stessa geometria $1/r^2$ della gravità e del campo elettrico: conseguenza della conservazione dell'energia su superfici sferiche crescenti, non di una legge di forza. $\blacksquare$

---

## L5

**Richiesta:** Ricava $v=\sqrt{T/\mu}$ con l'argomento dinamico dell'impulso su un arco di corda, nel riferimento che viaggia con l'onda.

**Argomento dichiarato:** Velocità dell'onda sulla corda: derivazione dinamica

**Dimostrazione modello:**

<b>Idea (Newton).</b> Considero un impulso di forma qualsiasi che viaggia con velocità $v$ lungo una corda di densità lineare $\mu$, tensione $T$. Mi pongo nel riferimento che si muove con l'impulso: lì la forma della corda è \emph{ferma}, e il materiale della corda scorre attraverso di essa con velocità $v$ (in verso opposto). <b>Elemento sulla cresta.</b> Approssimo un piccolo tratto in cima all'impulso con un arco di circonferenza di raggio $R$, che sottende al centro un angolo $2\theta$ (piccolo). La sua lunghezza è $\Delta\ell=2R\theta$, la sua massa $\Delta m=\mu\,\Delta\ell=2\mu R\theta$. <b>Forza centripeta.</b> La tensione agisce tangente alle due estremità dell'arco; le loro componenti radiali (verso il centro) si sommano: $$F=2T\sin\theta\approx 2T\theta.$$ Questa forza è la centripeta che tiene l'elemento sull'arco: esso, nel riferimento dell'onda, percorre la circonferenza di raggio $R$ a velocità $v$, quindi $$F=\frac{\Delta m\,v^2}{R}=\frac{2\mu R\theta\,v^2}{R}=2\mu\theta v^2.$$ <b>Uguaglio.</b> $$2T\theta=2\mu\theta v^2\ \Longrightarrow\ \boxed{\ v=\sqrt{\frac{T}{\mu}}\ }.\qquad\blacksquare$$ <b>Significato fisico.</b> La velocità nasce dalla competizione tra il \emph{richiamo} (la tensione $T$, che raddrizza la corda) e l'\emph{inerzia} (la densità $\mu$, che si oppone al moto): più tesa la corda, più veloce l'onda; più pesante, più lenta. Non dipende da ampiezza né forma dell'impulso (finché le pendenze sono piccole): il mezzo è non dispersivo, e ogni profilo trasla rigido. È lo stesso $v^2=T/\mu$ che compare come coefficiente nell'equazione di d'Alembert, qui ottenuto senza equazioni alle derivate parziali, con la sola seconda legge di Newton.

---

## L6

**Richiesta:** Dimostra che la soluzione generale di $\partial_{tt}y=v^2\partial_{xx}y$ è $y=f(x-vt)+g(x+vt)$, col cambio di variabili, e scrivi la formula di d'Alembert dalle condizioni iniziali.

**Argomento dichiarato:** Soluzione generale dell'equazione delle onde

**Dimostrazione modello:**

<b>Fattorizzazione dell'operatore.</b> L'equazione delle onde si scrive $$\frac{\partial^2 y}{\partial t^2}-v^2\frac{\partial^2 y}{\partial x^2}=\left(\frac{\partial}{\partial t}-v\frac{\partial}{\partial x}\right)\left(\frac{\partial}{\partial t}+v\frac{\partial}{\partial x}\right)y=0.$$ Suggerisce il <b>cambio di variabili</b> $$\xi=x-vt,\qquad \eta=x+vt.$$ Con la regola della catena: $\dfrac{\partial}{\partial x}=\dfrac{\partial}{\partial\xi}+\dfrac{\partial}{\partial\eta}$ e $\dfrac{\partial}{\partial t}=v\left(\dfrac{\partial}{\partial\eta}-\dfrac{\partial}{\partial\xi}\right)$. Sostituendo, l'equazione delle onde si riduce alla forma \emph{canonica} $$\frac{\partial^2 y}{\partial\xi\,\partial\eta}=0.$$ <b>Integrazione.</b> $\dfrac{\partial}{\partial\eta}\left(\dfrac{\partial y}{\partial\xi}\right)=0$ dice che $\dfrac{\partial y}{\partial\xi}$ non dipende da $\eta$: è una funzione del solo $\xi$. Integrando in $\xi$, e aggiungendo una funzione arbitraria di $\eta$: $$y=f(\xi)+g(\eta)=\boxed{\ f(x-vt)+g(x+vt)\ }.$$ <b>Formula di d'Alembert.</b> Fisso $f,g$ dalle condizioni iniziali $y(x,0)=\varphi(x)$ e $\partial_t y(x,0)=\psi(x)$. Da $f+g=\varphi$ e $v(g'-f')=\psi$ si ricava $$y(x,t)=\tfrac12\big[\varphi(x-vt)+\varphi(x+vt)\big]+\frac{1}{2v}\int_{x-vt}^{x+vt}\psi(s)\,ds.\qquad\blacksquare$$ <b>Significato fisico.</b> Ogni soluzione è la sovrapposizione di un profilo progressivo $f$ (trasla a destra) e uno regressivo $g$ (a sinistra), entrambi rigidi: è la firma dell'assenza di dispersione. La formula di d'Alembert è deterministica: noti \emph{profilo} $\varphi$ e \emph{velocità} $\psi$ iniziali, il moto è fissato ovunque e sempre. Il valore in $(x,t)$ dipende solo dai dati nell'intervallo $[x-vt,x+vt]$: è il \emph{dominio di dipendenza}, l'espressione della velocità finita di propagazione dell'informazione.

---

## L7

**Richiesta:** Determina la fase dell'onda riflessa a un estremo fisso e a un estremo libero, imponendo le condizioni al contorno, e spiega fisicamente l'inversione.

**Argomento dichiarato:** Riflessione a estremo fisso e a estremo libero

**Dimostrazione modello:**

Un impulso incidente $y_i=f(x-vt)$ raggiunge l'estremo in $x=0$ e genera un impulso riflesso regressivo $y_r=g(x+vt)$. La forma di $g$ è fissata dalla condizione al contorno. <b>Estremo fisso</b> ($x=0$ vincolato: $y(0,t)=0$ per ogni $t$). $$y(0,t)=f(-vt)+g(vt)=0\ \Longrightarrow\ g(vt)=-f(-vt).$$ L'onda riflessa è ribaltata (segno meno) oltre che invertita spazialmente: <b>inversione di fase di $\pi$</b>. Una cresta torna indietro come una valle. <b>Estremo libero</b> (l'estremo può scorrere trasversalmente senza forza: $\partial y/\partial x(0,t)=0$, perché la componente trasversa della tensione $\propto\partial y/\partial x$ deve annullarsi). $$\frac{\partial y}{\partial x}\Big|_{0}=f'(-vt)+g'(vt)=0\ \Longrightarrow\ g(vt)=f(-vt).$$ L'onda riflessa mantiene il segno: <b>nessuna inversione di fase</b>. Una cresta torna cresta. $\blacksquare$<br><br><b>Perché l'inversione all'estremo fisso.</b> L'impulso, arrivando, tira verso l'alto il punto vincolato; per il terzo principio il vincolo (il muro) reagisce tirando la corda verso il basso, e questa reazione lancia indietro un impulso invertito. All'estremo libero, invece, l'estremità non incontra resistenza: 'sovra-oscilla' oltre la posizione dell'impulso e rilancia indietro una perturbazione dello stesso segno. <b>Significato fisico.</b> È l'analogo meccanico della riflessione ottica: la luce che entra in un mezzo più denso (estremo 'rigido') si riflette con inversione di fase $\pi$; verso un mezzo meno denso (estremo 'libero') senza inversione. Queste condizioni al contorno, imposte a entrambi gli estremi di una corda, selezionano i modi normali e quantizzano le frequenze degli strumenti musicali.

---

## L8

**Richiesta:** Sovrapponendo due onde armoniche di frequenze vicine ricava il fenomeno dei battimenti e mostra che la frequenza di battimento è $|f_1-f_2|$.

**Argomento dichiarato:** Battimenti

**Dimostrazione modello:**

<b>Sovrapposizione in un punto.</b> Considero, in una posizione fissata, due onde di uguale ampiezza $A$ e frequenze vicine $\omega_1,\omega_2$ (con $\omega_1\gtrsim\omega_2$): $$y=A\cos\omega_1 t+A\cos\omega_2 t.$$ <b>Formula di prostaferesi.</b> Uso $\cos\alpha+\cos\beta=2\cos\dfrac{\alpha+\beta}{2}\cos\dfrac{\alpha-\beta}{2}$: $$y=2A\cos\!\left(\frac{\omega_1-\omega_2}{2}\,t\right)\cos\!\left(\frac{\omega_1+\omega_2}{2}\,t\right).$$ <b>Interpretazione.</b> Il secondo fattore oscilla alla frequenza \emph{media} $\bar\omega=\dfrac{\omega_1+\omega_2}{2}$ (la 'portante', udibile come tono medio). Il primo fattore, che varia \emph{lentamente} (perché $\omega_1-\omega_2$ è piccolo), modula l'ampiezza: $$A(t)=2A\cos\!\left(\frac{\omega_1-\omega_2}{2}\,t\right).$$ <b>Frequenza di battimento.</b> L'intensità sonora dipende da $|A(t)|$: poiché $|\cos|$ ha periodo dimezzato rispetto a $\cos$, si hanno \emph{due} massimi di intensità per ogni periodo dell'inviluppo. La frequenza con cui il suono 'pulsa' è quindi $$\boxed{\ f_{batt}=|f_1-f_2|\ }.\qquad\blacksquare$$ <b>Significato fisico.</b> Due suoni di frequenze vicine non danno un tono stabile ma una pulsazione periodica di volume: i battimenti. Sono la manifestazione udibile dell'andare 'in fase' e 'fuori fase' delle due onde. L'accordatore di strumenti li sfrutta: avvicina due corde finché i battimenti rallentano e scompaiono ($f_1=f_2$, $f_{batt}\to0$). Lo stesso principio, trasposto in frequenza, è alla base della rivelazione eterodina in radio e della misura di piccole differenze di frequenza.

---

## L9

**Richiesta:** A partire dalla linearità dell'equazione delle onde, ricava l'interferenza di due sorgenti coerenti: intensità in funzione della differenza di cammino e condizioni di massimo/minimo.

**Argomento dichiarato:** Interferenza e principio di sovrapposizione

**Dimostrazione modello:**

<b>Principio di sovrapposizione.</b> L'equazione delle onde è \emph{lineare}: se $y_1$ e $y_2$ sono soluzioni, lo è anche $y_1+y_2$. La perturbazione risultante in un punto è la somma algebrica delle singole. <b>Due sorgenti coerenti.</b> Due sorgenti in fase, di uguale ampiezza, inviano in un punto due onde che hanno percorso cammini $r_1,r_2$. La differenza di fase accumulata è $$\delta=k(r_2-r_1)=\frac{2\pi}{\lambda}\,\Delta,\qquad \Delta=r_2-r_1.$$ Le due oscillazioni nel punto sono $A\cos(\omega t)$ e $A\cos(\omega t-\delta)$. <b>Somma (metodo dei fasori).</b> Sommando due fasori di ugual modulo $A$ sfasati di $\delta$: $$y=A\cos\omega t+A\cos(\omega t-\delta)=2A\cos\!\frac{\delta}{2}\,\cos\!\left(\omega t-\frac{\delta}{2}\right).$$ L'ampiezza risultante è $A_R=2A\cos(\delta/2)$, e poiché l'intensità va come il quadrato dell'ampiezza: $$I=I_{max}\cos^2\!\frac{\delta}{2},\qquad I_{max}=4A^2\ \text{(in unità opportune)}.$$ <b>Condizioni.</b><br>— <b>Interferenza costruttiva</b> ($I$ massima): $\delta=2n\pi$, cioè $\Delta=n\lambda$ (differenza di cammino multipla intera di $\lambda$).<br>— <b>Interferenza distruttiva</b> ($I=0$): $\delta=(2n+1)\pi$, cioè $\Delta=(n+\tfrac12)\lambda$. $\blacksquare$<br><br><b>Significato fisico.</b> L'interferenza è possibile solo perché le onde si \emph{sommano} (linearità) e perché le sorgenti sono \emph{coerenti} (relazione di fase stabile): due torce non interferiscono visibilmente perché incoerenti. Dove le onde arrivano in fase ($\Delta=n\lambda$) si rinforzano; in opposizione ($\Delta=(n+\tfrac12)\lambda$) si annullano. È il meccanismo della doppia fenditura di Young, delle onde stazionarie (interferenza di onde contropropaganti) e, in MQ, dell'interferenza delle ampiezze di probabilità — dove la stessa matematica descrive un fenomeno di natura profondamente diversa.

---

## L10

**Richiesta:** Ricava la relazione di dispersione $\omega=vk$ sostituendo un'onda armonica nell'equazione di d'Alembert, definisci la velocità di fase e distingui mezzi dispersivi e non dispersivi.

**Argomento dichiarato:** Relazione di dispersione

**Dimostrazione modello:**

<b>Onda armonica di prova.</b> Cerco soluzioni dell'equazione delle onde $\partial_{tt}y=v^2\partial_{xx}y$ nella forma $$y(x,t)=A\sin(kx-\omega t),$$ con $k$ numero d'onda e $\omega$ pulsazione. <b>Sostituzione.</b> Le derivate seconde sono $$\frac{\partial^2 y}{\partial t^2}=-\omega^2 y,\qquad \frac{\partial^2 y}{\partial x^2}=-k^2 y.$$ Inserendo nell'equazione: $$-\omega^2 y=v^2(-k^2)y\ \Longrightarrow\ \omega^2=v^2 k^2\ \Longrightarrow\ \boxed{\ \omega=v\,k\ }.$$ È la <b>relazione di dispersione</b>: il legame tra pulsazione e numero d'onda imposto dal mezzo. <b>Velocità di fase.</b> La velocità con cui avanza un punto a fase costante ($kx-\omega t=\text{cost}$) è $$v_{fase}=\frac{\omega}{k}=v,$$ costante e indipendente da $k$ (e da $\lambda,f$). Con $k=2\pi/\lambda$ e $\omega=2\pi f$ si ritrova $v=\lambda f$. $\blacksquare$<br><br><b>Mezzo non dispersivo vs dispersivo.</b> Per la corda ideale (e per la luce nel vuoto) $\omega=vk$ è \emph{lineare} in $k$: tutte le frequenze viaggiano alla stessa velocità di fase, quindi un pacchetto d'onde (somma di molte armoniche) mantiene la forma — è il caso <b>non dispersivo</b>. Se invece la relazione $\omega(k)$ è \emph{non lineare} (onde in acqua profonda, luce nel vetro, onde di materia in MQ con $\omega=\hbar k^2/2m$), la velocità di fase dipende da $k$: le componenti di diversa frequenza si separano e il pacchetto si \emph{allarga} (dispersione). In quel caso l'energia e l'informazione viaggiano alla <b>velocità di gruppo</b> $v_g=d\omega/dk$, in generale diversa da $v_{fase}$. La distinzione fase/gruppo è centrale in ottica e in meccanica quantistica.

---

## L11

**Richiesta:** Parta dalla conservazione dell'energia attraverso superfici d'onda concentriche e ricavi l'andamento di intensit&agrave; e ampiezza di un'onda sferica; verifichi poi che $y(r,t)=(A_0/r)\sin(kr-\omega t)$ risolve l'equazione delle onde in simmetria sferica e confronti il caso dell'onda piana.

**Argomento dichiarato:** Onde piane e sferiche

**Dimostrazione modello:**

<b>Conservazione dell'energia.</b> Sorgente puntiforme in un mezzo omogeneo, isotropo e non dissipativo, di potenza media $P$ costante. Le superfici d'onda sono sfere concentriche e la stessa potenza attraversa ciascuna di esse: $$P=I(r)\,4\pi r^2\ \Longrightarrow\ I(r)=\frac{P}{4\pi r^2}\propto\frac{1}{r^2}.$$ <b>Dall'intensit&agrave; all'ampiezza.</b> Per un'onda armonica la densit&agrave; media di energia &egrave; $\bar u=\tfrac12\rho\,\omega^2A^2$ e $I=\bar u\,v$, dunque $I\propto A^2$; da $A^2\propto1/r^2$ segue $A(r)=A_0/r$. <b>Il laplaciano radiale: il cuore della verifica.</b> Per $y=y(r,t)$ vale $\nabla^2y=\frac{1}{r^2}\partial_r(r^2\partial_r y)$. Pongo $u=r\,y$: allora $\partial_r y=u'/r-u/r^2$, quindi $r^2\partial_r y=r\,u'-u$ e $$\partial_r\left(r^2\partial_r y\right)=u'+r\,u''-u'=r\,u''\ \Longrightarrow\ \nabla^2y=\frac{1}{r}\partial_{rr}(ry).$$ <b>Riduzione a d'Alembert unidimensionale.</b> Moltiplicando $\partial_{tt}y=v^2\nabla^2y$ per $r$ si ottiene $\partial_{tt}(ry)=v^2\partial_{rr}(ry)$: la funzione $u=ry$ obbedisce all'equazione delle onde in una dimensione. Le sue soluzioni progressive sono $u=f(r-vt)$; scegliendo l'armonica $u=A_0\sin(kr-\omega t)$ con $\omega=vk$, $$\boxed{\ y(r,t)=\frac{A_0}{r}\sin(kr-\omega t)\ },\qquad r>0.$$ Il fattore $1/r$ non &egrave; aggiunto a mano: lo impone l'equazione, in accordo col bilancio energetico. $\blacksquare$ <b>Onda piana.</b> Se i fronti sono piani paralleli l'area attraversata non cresce: $I$ e $A$ restano costanti e $y=A\sin(kx-\omega t)$ risolve d'Alembert senza fattore geometrico. &Egrave; un'idealizzazione, perch&eacute; un fronte piano infinito trasporterebbe potenza infinita.<br><br><b>Significato fisico.</b> Lontano dalla sorgente l'onda sferica &egrave; localmente piana: su un tratto radiale $\Delta r\ll r_0$ il fattore $1/r$ varia in relativo di $\Delta r/r_0\ll1$, e su un'apertura trasversa $D$ la freccia del fronte, $s=r_0-\sqrt{r_0^2-D^2/4}\simeq D^2/(8r_0)$, &egrave; trascurabile rispetto a $\lambda$ se $r_0\gg D^2/\lambda$ (campo lontano, o condizione di Fraunhofer): il fronte curvo si confonde col piano tangente. Il $1/r^2$ dell'intensit&agrave; &egrave; la stessa geometria del $1/r^2$ di Newton e Coulomb, un flusso conservato spalmato su $4\pi r^2$; e la forma $e^{ikr}/r$ ritorna nei potenziali ritardati e, in meccanica quantistica, nell'onda diffusa dello scattering, $\psi\sim e^{ikz}+f(\theta)\,e^{ikr}/r$.


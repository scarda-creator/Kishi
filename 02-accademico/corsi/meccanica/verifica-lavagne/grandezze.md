# Lavagne del pool: grandezze

Ogni voce: la richiesta d'esame e la dimostrazione modello da verificare.

---

## L1

**Richiesta:** Dimostra che la derivata temporale di un versore $\hat u(t)$ è perpendicolare a $\hat u$ stesso, e discuti il significato fisico nel moto circolare.

**Argomento dichiarato:** Derivata di un versore

**Dimostrazione modello:**

Un versore ha modulo unitario in ogni istante: $$|\hat u(t)|=1\quad\Longleftrightarrow\quad \hat u\cdot\hat u=1.$$ Derivo entrambi i membri rispetto al tempo. Il prodotto scalare è bilineare, quindi vale la regola di Leibniz: $$\frac{d}{dt}\big(\hat u\cdot\hat u\big)=\dot{\hat u}\cdot\hat u+\hat u\cdot\dot{\hat u}=2\,\hat u\cdot\dot{\hat u}.$$ Il membro di destra è la derivata della costante $1$, dunque nulla: $$2\,\hat u\cdot\dot{\hat u}=0\;\Longrightarrow\; \hat u\cdot\frac{d\hat u}{dt}=0.$$ Poiché il prodotto scalare è nullo con entrambi i vettori non nulli (quando $\dot{\hat u}\neq 0$), si ha $\dot{\hat u}\perp\hat u$. $\blacksquare$<br><br><b>Significato fisico.</b> Un versore non può cambiare modulo: la sua sola libertà è ruotare. La variazione istantanea è perciò puramente rotazionale, e una rotazione infinitesima sposta la punta del versore ortogonalmente ad esso. Nel moto circolare uniforme la velocità $\vec v=v\,\hat t$ ha modulo costante ma $\dot{\hat t}\perp\hat t$: nasce l'accelerazione centripeta $v^2/\rho\,\hat n$, diretta verso il centro, responsabile del cambiamento di direzione della velocità.

---

## L2

**Richiesta:** Enuncia e dimostra (per componenti) la regola del doppio prodotto vettoriale $\vec A\times(\vec B\times\vec C)=\vec B\,(\vec A\cdot\vec C)-\vec C\,(\vec A\cdot\vec B)$.

**Argomento dichiarato:** BAC-CAB

**Dimostrazione modello:**

<b>Enunciato.</b> Per tre vettori qualsiasi vale $$\vec A\times(\vec B\times\vec C)=\vec B\,(\vec A\cdot\vec C)-\vec C\,(\vec A\cdot\vec B).$$ <b>Dimostrazione (componente $x$).</b> Pongo $\vec D=\vec B\times\vec C$, con $D_x=B_yC_z-B_zC_y$, e analoghe. La componente $x$ di $\vec A\times\vec D$ è $$[\vec A\times\vec D]_x=A_yD_z-A_zD_y=A_y(B_xC_y-B_yC_x)-A_z(B_zC_x-B_xC_z).$$ Espando: $$=A_yB_xC_y-A_yB_yC_x-A_zB_zC_x+A_zB_xC_z.$$ Aggiungo e sottraggo $A_xB_xC_x$ per far comparire prodotti scalari completi: $$=B_x\,(A_xC_x+A_yC_y+A_zC_z)-C_x\,(A_xB_x+A_yB_y+A_zB_z)$$ $$=B_x(\vec A\cdot\vec C)-C_x(\vec A\cdot\vec B).$$ Le componenti $y$ e $z$ seguono per permutazione ciclica degli indici, identica nella struttura. Ricomponendo i tre risultati: $$\vec A\times(\vec B\times\vec C)=\vec B\,(\vec A\cdot\vec C)-\vec C\,(\vec A\cdot\vec B).\qquad\blacksquare$$ <b>Nota.</b> Il risultato giace nel piano di $\vec B$ e $\vec C$ (combinazione lineare dei due), coerentemente col fatto che è ortogonale a $\vec B\times\vec C$.

---

## L3

**Richiesta:** Dimostra che $|\vec A\cdot(\vec B\times\vec C)|$ è il volume del parallelepipedo costruito su $\vec A,\vec B,\vec C$, e spiega perché si annulla per vettori complanari.

**Argomento dichiarato:** Prodotto misto = volume

**Dimostrazione modello:**

Costruisco il parallelepipedo con spigoli $\vec A,\vec B,\vec C$ uscenti da un vertice. Prendo come base il parallelogramma di lati $\vec B$ e $\vec C$: la sua area è $$\mathcal A=|\vec B\times\vec C|,$$ e il vettore $\vec N=\vec B\times\vec C$ è ortogonale alla base. L'altezza del solido è la proiezione di $\vec A$ sulla normale alla base, cioè $$h=|\vec A|\,|\cos\phi|,$$ dove $\phi$ è l'angolo tra $\vec A$ e $\vec N$. Il volume è area di base per altezza: $$V=\mathcal A\,h=|\vec B\times\vec C|\,|\vec A||\cos\phi|=\big|\vec A\cdot(\vec B\times\vec C)\big|,$$ avendo riconosciuto nell'ultimo passaggio la definizione di prodotto scalare $\vec A\cdot\vec N=|\vec A||\vec N|\cos\phi$. $\blacksquare$<br><br><b>Complanarità.</b> Se $\vec A,\vec B,\vec C$ sono complanari, $\vec A$ giace nel piano di base, quindi è ortogonale a $\vec N=\vec B\times\vec C$: allora $\cos\phi=0$ e $V=0$. Il parallelepipedo degenera in una figura piatta di volume nullo. Equivalentemente, il prodotto misto è il determinante delle componenti: annullarsi significa righe linearmente dipendenti, cioè vettori complanari.

---

## L4

**Richiesta:** Dimostra la decomposizione dell'accelerazione in componente tangenziale e centripeta, $\vec a=\dot v\,\hat t+\dfrac{v^2}{\rho}\,\hat n$, partendo da $\vec v=v\,\hat t$.

**Argomento dichiarato:** Decomposizione dell'accelerazione

**Dimostrazione modello:**

Scrivo la velocità come prodotto del suo modulo per il versore tangente alla traiettoria: $$\vec v=v\,\hat t,\qquad v=|\vec v|.$$ Derivo rispetto al tempo con la regola di Leibniz: $$\vec a=\frac{d\vec v}{dt}=\dot v\,\hat t+v\,\frac{d\hat t}{dt}.$$ Il primo termine, $\dot v\,\hat t$, è tangente: descrive la variazione del modulo della velocità. Resta da valutare $\dfrac{d\hat t}{dt}$. Poiché $\hat t$ è un versore, $\dfrac{d\hat t}{dt}\perp\hat t$. Uso la regola della catena introducendo l'ascissa curvilinea $s$: $$\frac{d\hat t}{dt}=\frac{d\hat t}{ds}\,\frac{ds}{dt}=\frac{d\hat t}{ds}\,v.$$ Per definizione di raggio di curvatura $\rho$ e di normale principale $\hat n$ (prima formula di Frenet): $$\frac{d\hat t}{ds}=\frac{1}{\rho}\,\hat n,$$ dove $\hat n$ punta verso il centro di curvatura. Sostituendo: $$\vec a=\dot v\,\hat t+v\cdot\frac{v}{\rho}\,\hat n=\dot v\,\hat t+\frac{v^2}{\rho}\,\hat n.\qquad\blacksquare$$ La componente tangenziale $\dot v$ cambia la rapidità; la componente centripeta $v^2/\rho$ cambia la direzione. Nel moto circolare uniforme $\dot v=0$ e resta solo la centripeta.

---

## L5

**Richiesta:** Dimostra l'anticommutatività del prodotto vettoriale, $\vec a\times\vec b=-\,\vec b\times\vec a$, e che $|\vec a\times\vec b|$ è l'area del parallelogramma di lati $\vec a$ e $\vec b$.

**Argomento dichiarato:** Prodotto vettoriale: antisimmetria e area

**Dimostrazione modello:**

Definizione in base ortonormale destrorsa $\{\hat i,\hat j,\hat k\}$: $$\vec a\times\vec b=(a_yb_z-a_zb_y)\,\hat i+(a_zb_x-a_xb_z)\,\hat j+(a_xb_y-a_yb_x)\,\hat k.$$ <b>Anticommutatività.</b> Scambio $\vec a\leftrightarrow\vec b$: la prima componente diventa $b_ya_z-b_za_y=-(a_yb_z-a_zb_y)$, e analogamente le altre due. Ogni componente cambia segno, dunque $$\vec b\times\vec a=-\,\vec a\times\vec b.$$ In particolare $\vec a\times\vec a=-\vec a\times\vec a$, e quindi $\vec a\times\vec a=\vec 0$. <b>Modulo uguale all'area.</b> Calcolo $|\vec a\times\vec b|^2$ e uso l'identità di Lagrange (che si verifica espandendo le componenti): $$|\vec a\times\vec b|^2=|\vec a|^2|\vec b|^2-(\vec a\cdot\vec b)^2.$$ Sostituisco $\vec a\cdot\vec b=|\vec a||\vec b|\cos\theta$: $$|\vec a\times\vec b|^2=|\vec a|^2|\vec b|^2(1-\cos^2\theta)=|\vec a|^2|\vec b|^2\sin^2\theta.$$ Poiché $\theta\in[0,\pi]$ si ha $\sin\theta\ge0$, quindi $$|\vec a\times\vec b|=|\vec a|\,|\vec b|\sin\theta.$$ Il parallelogramma di lati $\vec a$ e $\vec b$ ha base $|\vec a|$ e altezza $|\vec b|\sin\theta$ (la proiezione di $\vec b$ ortogonale ad $\vec a$): la sua area vale $|\vec a||\vec b|\sin\theta$, che coincide con $|\vec a\times\vec b|$. $\blacksquare$<br><br><b>Significato fisico.</b> L'anticommutatività codifica l'orientazione: $\vec a\times\vec b$ e $\vec b\times\vec a$ individuano la stessa retta ortogonale al piano, ma versi opposti secondo la regola della mano destra. La lettura del modulo come area rende il prodotto vettoriale la misura naturale di 'quanto due vettori aprono un piano': massimo per vettori ortogonali, nullo per vettori paralleli. Momento di una forza, momento angolare e velocità areolare nascono tutti da questa stessa struttura.

---

## L6

**Richiesta:** Dimostra la regola di Leibniz per la derivata del prodotto scalare e del prodotto vettoriale: $\dfrac{d}{dt}(\vec a\cdot\vec b)=\dot{\vec a}\cdot\vec b+\vec a\cdot\dot{\vec b}$ e $\dfrac{d}{dt}(\vec a\times\vec b)=\dot{\vec a}\times\vec b+\vec a\times\dot{\vec b}$.

**Argomento dichiarato:** Regola di Leibniz per prodotti di vettori

**Dimostrazione modello:**

<b>Idea unificante.</b> Sia il prodotto scalare sia quello vettoriale sono applicazioni \emph{bilineari} $B(\vec a,\vec b)$: lineari in ciascun argomento separatamente. Per ogni applicazione bilineare vale la regola di Leibniz, con un'unica dimostrazione. <b>Dimostrazione dal rapporto incrementale.</b> Aggiungo e sottraggo $B(\vec a,\vec b(t+h))$ e uso la bilinearità: $$B(\vec a(t{+}h),\vec b(t{+}h))-B(\vec a,\vec b)=B\big(\vec a(t{+}h)-\vec a,\;\vec b(t{+}h)\big)+B\big(\vec a,\;\vec b(t{+}h)-\vec b\big).$$ Divido per $h$ e passo al limite $h\to0$: $$\frac{d}{dt}B(\vec a,\vec b)=B(\dot{\vec a},\vec b)+B(\vec a,\dot{\vec b}).$$ <b>Prodotto scalare</b> (bilineare e simmetrico): $$\frac{d}{dt}(\vec a\cdot\vec b)=\dot{\vec a}\cdot\vec b+\vec a\cdot\dot{\vec b}.$$ <b>Prodotto vettoriale</b> (bilineare ma antisimmetrico): $$\frac{d}{dt}(\vec a\times\vec b)=\dot{\vec a}\times\vec b+\vec a\times\dot{\vec b}.$$ Qui l'ordine dei fattori va conservato in ciascun termine: scrivere $\vec b\times\dot{\vec a}$ ne cambierebbe il segno. $\blacksquare$<br><br><b>Significato fisico.</b> Queste due regole sono il motore di quasi tutti i teoremi di conservazione. Dal prodotto scalare: $\frac{d}{dt}|\vec a|^2=2\,\vec a\cdot\dot{\vec a}$, da cui 'modulo costante $\Leftrightarrow$ derivata ortogonale'. Dal prodotto vettoriale nasce il teorema del momento angolare: $$\frac{d}{dt}(\vec r\times\vec p)=\dot{\vec r}\times\vec p+\vec r\times\dot{\vec p}=\vec v\times m\vec v+\vec r\times\vec F=\vec r\times\vec F,$$ cioè $\dot{\vec L}=\vec M$; il primo termine si annulla perché $\vec v$ è parallelo a $m\vec v$.

---

## L7

**Richiesta:** Ricava le espressioni di velocità e accelerazione in coordinate polari piane: $\vec v=\dot r\,\hat r+r\dot\theta\,\hat\theta$ e $\vec a=(\ddot r-r\dot\theta^2)\hat r+(r\ddot\theta+2\dot r\dot\theta)\hat\theta$.

**Argomento dichiarato:** Velocità e accelerazione in coordinate polari

**Dimostrazione modello:**

Ipotesi: moto piano descritto in coordinate polari $(r,\theta)$, con versori mobili $\hat r$ (radiale) e $\hat\theta$ (trasverso). <b>Derivate dei versori.</b> In base cartesiana $$\hat r=\cos\theta\,\hat i+\sin\theta\,\hat j,\qquad \hat\theta=-\sin\theta\,\hat i+\cos\theta\,\hat j.$$ Dipendono dal tempo solo tramite $\theta$, dunque derivando: $$\frac{d\hat r}{dt}=\dot\theta(-\sin\theta\,\hat i+\cos\theta\,\hat j)=\dot\theta\,\hat\theta,\qquad \frac{d\hat\theta}{dt}=\dot\theta(-\cos\theta\,\hat i-\sin\theta\,\hat j)=-\dot\theta\,\hat r.$$ <b>Velocità.</b> Da $\vec r=r\,\hat r$: $$\vec v=\frac{d\vec r}{dt}=\dot r\,\hat r+r\,\frac{d\hat r}{dt}=\dot r\,\hat r+r\dot\theta\,\hat\theta.$$ La componente radiale $\dot r$ misura l'allontanamento, quella trasversa $r\dot\theta$ il moto di rotazione. <b>Accelerazione.</b> Derivo $\vec v$: $$\vec a=\ddot r\,\hat r+\dot r\,\dot{\hat r}+(\dot r\dot\theta+r\ddot\theta)\,\hat\theta+r\dot\theta\,\dot{\hat\theta}.$$ Sostituisco $\dot{\hat r}=\dot\theta\,\hat\theta$ e $\dot{\hat\theta}=-\dot\theta\,\hat r$: $$\vec a=\ddot r\,\hat r+\dot r\dot\theta\,\hat\theta+\dot r\dot\theta\,\hat\theta+r\ddot\theta\,\hat\theta-r\dot\theta^2\,\hat r.$$ Raccolgo per versore: $$\vec a=(\ddot r-r\dot\theta^2)\,\hat r+(r\ddot\theta+2\dot r\dot\theta)\,\hat\theta.\qquad\blacksquare$$ <b>Significato fisico.</b> I quattro termini hanno nome proprio. $\ddot r$: accelerazione radiale pura. $-r\dot\theta^2$: termine centripeto, presente ogni volta che si ruota, diretto verso il centro. $r\ddot\theta$: accelerazione angolare, la rotazione che accelera. $2\dot r\dot\theta$: termine di Coriolis, dall'accoppiamento tra moto radiale e rotazione. Ritroverai gli stessi termini nel moto in campo centrale e nei sistemi di riferimento rotanti.

---

## L8

**Richiesta:** Dimostra che il raggio di curvatura di una traiettoria è $\rho=\dfrac{v^2}{a_n}$, con $a_n$ la componente normale dell'accelerazione, e ricava la formula operativa $\rho=\dfrac{v^3}{|\vec v\times\vec a|}$.

**Argomento dichiarato:** Raggio di curvatura e accelerazione normale

**Dimostrazione modello:**

Ipotesi: traiettoria regolare percorsa con velocità $\vec v=v\,\hat t$, dove $\hat t$ è il versore tangente e $v=|\vec v|$. <b>Definizione di curvatura.</b> Al variare dell'ascissa curvilinea $s$ il versore tangente ruota. Definisco il raggio di curvatura $\rho$ tramite $$\left|\frac{d\hat t}{ds}\right|=\frac{1}{\rho},$$ e la normale principale $\hat n$ come il versore di $\dfrac{d\hat t}{ds}$, che è ortogonale a $\hat t$ (perché $\hat t$ ha modulo unitario). Dunque $\dfrac{d\hat t}{ds}=\dfrac{1}{\rho}\,\hat n$. <b>Accelerazione normale.</b> Derivo la velocità con la regola della catena, usando $\dfrac{ds}{dt}=v$: $$\vec a=\dot v\,\hat t+v\,\frac{d\hat t}{dt}=\dot v\,\hat t+v\,\frac{d\hat t}{ds}\frac{ds}{dt}=\dot v\,\hat t+\frac{v^2}{\rho}\,\hat n.$$ La componente normale è $a_n=\dfrac{v^2}{\rho}$, da cui $$\rho=\frac{v^2}{a_n}.$$ <b>Formula operativa.</b> Isolo $\rho$ senza dover conoscere $\hat n$. Calcolo il prodotto vettoriale: $$\vec v\times\vec a=v\,\hat t\times\Big(\dot v\,\hat t+\frac{v^2}{\rho}\,\hat n\Big)=\frac{v^3}{\rho}\,(\hat t\times\hat n),$$ poiché $\hat t\times\hat t=\vec 0$. Prendo il modulo, con $|\hat t\times\hat n|=1$ essendo $\hat t\perp\hat n$: $$|\vec v\times\vec a|=\frac{v^3}{\rho}\;\Longrightarrow\;\rho=\frac{v^3}{|\vec v\times\vec a|}.\qquad\blacksquare$$ <b>Significato fisico.</b> $\rho$ è il raggio del cerchio osculatore, il cerchio che meglio approssima localmente la traiettoria: quanto più stretta la curva, tanto minore $\rho$ e tanto maggiore l'accelerazione normale richiesta a parità di velocità. Il termine $a_n=v^2/\rho$ è ciò che una forza deve fornire per curvare il moto: è la lettura cinematica della forza centripeta. Per una retta $\rho\to\infty$ e $a_n\to0$.


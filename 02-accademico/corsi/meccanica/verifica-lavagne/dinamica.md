# Lavagne del pool: dinamica

Ogni voce: la richiesta d'esame e la dimostrazione modello da verificare.

---

## L1

**Richiesta:** Enuncia e dimostra il teorema dell'impulso, poi spiega perché è lo strumento adatto a trattare le forze impulsive negli urti.

**Argomento dichiarato:** Teorema dell'impulso e forze impulsive

**Dimostrazione modello:**

<b>Enunciato.</b> L'impulso della forza risultante agente su un punto materiale, tra due istanti, eguaglia la variazione della sua quantità di moto: $$\vec J\equiv\int_{t_1}^{t_2}\vec F\,dt=\vec p_2-\vec p_1=\Delta\vec p.$$ <b>Dimostrazione.</b> Parto dal secondo principio nella forma generale $$\vec F=\frac{d\vec p}{dt}.$$ Moltiplico per $dt$ e separo i differenziali: $\vec F\,dt=d\vec p$. Integro tra $t_1$ e $t_2$: $$\int_{t_1}^{t_2}\vec F\,dt=\int_{\vec p_1}^{\vec p_2}d\vec p=\vec p_2-\vec p_1.$$ Il primo membro è per definizione l'impulso $\vec J$; dunque $\vec J=\Delta\vec p$. $\blacksquare$<br><br><b>Forze impulsive.</b> In un urto la forza di contatto $\vec F(t)$ raggiunge valori enormi per un tempo brevissimo $\Delta t$, con andamento temporale complicato e in pratica sconosciuto. Non è quindi conveniente (né possibile) usare $\vec F=m\vec a$ istante per istante. Tuttavia l'\emph{integrale} $\int\vec F\,dt$ resta finito e coincide con $\Delta\vec p$, ricavabile dalle velocità prima e dopo l'urto: la variazione di quantità di moto è ben definita e misurabile. Si definisce inoltre una forza media $\langle\vec F\rangle=\Delta\vec p/\Delta t$. Il teorema dell'impulso permette così di 'saltare' l'ignoto profilo di $\vec F(t)$ e lavorare solo con quantità nette. Durante l'urto, inoltre, le forze impulsive dominano su quelle ordinarie (peso, attrito): queste ultime, avendo impulso $\sim F\Delta t$ trascurabile nel tempo brevissimo, si possono ignorare nel bilancio.

---

## L2

**Richiesta:** Deriva la conservazione della quantità di moto totale di un sistema isolato di $N$ particelle a partire dal terzo principio, precisando quale forma del principio è necessaria.

**Argomento dichiarato:** Conservazione della quantità di moto dal terzo principio

**Dimostrazione modello:**

Considero $N$ particelle. Su ciascuna agiscono forze esterne $\vec F_i^{\,est}$ e forze interne $\vec F_{ij}$ esercitate dalle altre particelle $j$. Il secondo principio per la $i$-esima è: $$\frac{d\vec p_i}{dt}=\vec F_i^{\,est}+\sum_{j\neq i}\vec F_{ij}.$$ Sommo su tutte le particelle per ottenere la quantità di moto totale $\vec P=\sum_i\vec p_i$: $$\frac{d\vec P}{dt}=\sum_i\vec F_i^{\,est}+\sum_i\sum_{j\neq i}\vec F_{ij}.$$ <b>La doppia somma delle forze interne si annulla.</b> I termini si raggruppano in coppie $(i,j)$ e $(j,i)$: $$\vec F_{ij}+\vec F_{ji}.$$ Per il terzo principio nella forma \textbf{debole}, $\vec F_{ij}=-\vec F_{ji}$, quindi ogni coppia dà contributo nullo e l'intera doppia somma svanisce: $$\sum_i\sum_{j\neq i}\vec F_{ij}=\vec 0.$$ Resta $$\frac{d\vec P}{dt}=\sum_i\vec F_i^{\,est}=\vec F^{\,est}_{tot}.$$ <b>Sistema isolato.</b> Se non agiscono forze esterne, $\vec F^{\,est}_{tot}=\vec 0$, dunque $$\frac{d\vec P}{dt}=\vec 0\quad\Longrightarrow\quad \vec P=\text{costante}.\qquad\blacksquare$$ <b>Quale forma serve.</b> È sufficiente la forma \emph{debole} del terzo principio (forze uguali e opposte): per annullare la somma vettoriale delle forze interne non serve alcuna ipotesi sulla loro direzione. La forma forte (forze anche collineari con la congiungente) è invece necessaria per la conservazione del momento angolare totale, dove conta il momento — e non solo la risultante — delle coppie interne.

---

## L3

**Richiesta:** Discuti e deriva il rapporto tra le due forme del secondo principio, $\vec F=d\vec p/dt$ e $\vec F=m\vec a$, chiarendo quando la seconda non è applicabile.

**Argomento dichiarato:** Secondo principio: F=dp/dt contro F=ma

**Dimostrazione modello:**

La forma fondamentale del secondo principio lega la forza alla variazione della quantità di moto $\vec p=m\vec v$: $$\vec F=\frac{d\vec p}{dt}=\frac{d(m\vec v)}{dt}.$$ Applicando la regola di Leibniz al prodotto: $$\vec F=m\frac{d\vec v}{dt}+\vec v\frac{dm}{dt}=m\vec a+\vec v\,\dot m.$$ <b>Massa costante.</b> Se $\dot m=0$, il secondo termine sparisce e si recupera $$\vec F=m\vec a.$$ Questo è il caso della stragrande maggioranza dei problemi (un punto materiale di massa fissata).<br><br><b>Massa variabile.</b> Se $\dot m\neq0$ compare il termine $\vec v\,\dot m$. Attenzione però: per sistemi a massa variabile come il razzo, non basta scrivere ingenuamente $\vec F=d(m\vec v)/dt$ del solo corpo, perché la massa che entra o esce porta con sé la propria quantità di moto. La trattazione corretta considera il sistema \emph{completo} (razzo + gas espulso), che è isolato o soggetto a sole forze esterne, e conserva/bilancia la quantità di moto totale. Si ottiene l'equazione di Tsiolkovsky: $$m\frac{d\vec v}{dt}=\vec F_{est}+\vec u\,\frac{dm}{dt},$$ dove $\vec u$ è la velocità relativa dei gas espulsi e $\dot m<0$. $\blacksquare$<br><br><b>Morale.</b> $\vec F=d\vec p/dt$ è la legge fondamentale, ma va applicata a un sistema ben definito. $\vec F=m\vec a$ ne è il caso a massa costante. Per masse variabili non si scorcia: si torna a ragionare sulla quantità di moto dell'intero sistema.

---

## L4

**Richiesta:** Esponi in modo rigoroso la struttura logica dei tre principi della dinamica: cosa afferma ciascuno, come si concatenano e perché nessuno è ridondante.

**Argomento dichiarato:** Ruolo logico dei tre principi

**Dimostrazione modello:**

<b>Primo principio (inerzia).</b> Esiste (almeno) un riferimento — detto inerziale — in cui un punto materiale non soggetto a forze, o a risultante nulla, permane nel suo stato di quiete o di moto rettilineo uniforme. È un'affermazione di \emph{esistenza}: seleziona una classe di riferimenti privilegiati. Tutti i riferimenti in moto traslatorio rettilineo uniforme rispetto a uno inerziale sono anch'essi inerziali.<br><br><b>Secondo principio.</b> In un riferimento inerziale, la forza risultante su un punto è pari alla derivata temporale della sua quantità di moto: $$\vec F=\frac{d\vec p}{dt}\quad(\to\ \vec F=m\vec a\ \text{se}\ m=\text{cost}).$$ Fornisce l'\emph{equazione del moto}: nota la forza, si determina la traiettoria. Introduce implicitamente la massa inerziale come costante di proporzionalità tra forza e accelerazione.<br><br><b>Terzo principio (azione e reazione).</b> Le forze che due corpi si scambiano sono uguali in modulo e opposte in verso ($\vec F_{AB}=-\vec F_{BA}$, forma debole; anche collineari con la congiungente nella forma forte). Governa le \emph{interazioni} e fonda le leggi di conservazione: la quantità di moto (forma debole) e il momento angolare (forma forte).<br><br><b>Perché nessuno è ridondante.</b><br>— Il \textbf{primo} non discende dal secondo: il secondo presuppone già un riferimento inerziale, che è il primo a garantire esistere. Senza il primo, $\vec F=m\vec a$ non avrebbe un dominio di validità (in un riferimento accelerato è falsa nella forma pulita).<br>— Il \textbf{secondo} non discende dagli altri: quantifica il legame forza–moto e definisce la massa inerziale, informazione assente in primo e terzo.<br>— Il \textbf{terzo} non discende dai primi due: aggiunge una proprietà delle interazioni (simmetria azione-reazione) da cui seguono le conservazioni, non deducibile dalla sola $\vec F=m\vec a$ applicata al singolo corpo.<br><br>I tre assiomi sono quindi \emph{indipendenti e complementari}: il primo fissa l'arena (i riferimenti), il secondo la dinamica del singolo corpo, il terzo la reciprocità delle interazioni. $\blacksquare$

---

## L5

**Richiesta:** Enuncia e dimostra il teorema del momento angolare per un punto materiale, $\dfrac{d\vec L}{dt}=\vec M$, e discuti quando $\vec L$ si conserva.

**Argomento dichiarato:** Teorema del momento angolare del punto

**Dimostrazione modello:**

<b>Definizioni.</b> Rispetto a un polo fisso $O$ in un riferimento inerziale, il momento angolare di un punto materiale è $$\vec L=\vec r\times\vec p=\vec r\times m\vec v,$$ e il momento della forza risultante è $$\vec M=\vec r\times\vec F.$$ <b>Dimostrazione.</b> Derivo $\vec L$ nel tempo con la regola di Leibniz per il prodotto vettoriale: $$\frac{d\vec L}{dt}=\frac{d\vec r}{dt}\times\vec p+\vec r\times\frac{d\vec p}{dt}.$$ Il primo termine è $\vec v\times m\vec v=\vec 0$, perché $\vec v$ è parallelo a $m\vec v$. Nel secondo uso il secondo principio $d\vec p/dt=\vec F$: $$\frac{d\vec L}{dt}=\vec r\times\vec F=\vec M.\qquad\blacksquare$$ <b>Conservazione.</b> Se $\vec M=\vec 0$ allora $\vec L$ è costante. Ciò accade se $\vec F=\vec 0$, oppure — caso più ricco — se $\vec F$ è \emph{parallela} a $\vec r$ (forza centrale): allora $\vec r\times\vec F=\vec 0$ pur essendo $\vec F\neq\vec 0$.<br><br><b>Significato fisico.</b> Il momento angolare è, per le rotazioni, ciò che la quantità di moto è per le traslazioni: $\vec M=d\vec L/dt$ è l'analogo rotazionale di $\vec F=d\vec p/dt$. La dipendenza dal polo è essenziale: cambiando $O$ cambiano sia $\vec L$ sia $\vec M$. L'annullarsi di $\vec M$ per le forze centrali è la radice della seconda legge di Keplero e del carattere piano dei moti in campo centrale.

---

## L6

**Richiesta:** Dimostra che sotto una forza centrale il momento angolare si conserva e il moto è piano; ricavane la seconda legge di Keplero (velocità areolare costante).

**Argomento dichiarato:** Forza centrale: moto piano e L costante

**Dimostrazione modello:**

Ipotesi: forza centrale, sempre diretta lungo la congiungente col centro $O$: $$\vec F=f(r)\,\hat r,$$ con $\hat r=\vec r/|\vec r|$ e $f(r)$ scalare qualsiasi (attrattiva o repulsiva). <b>Momento nullo.</b> $$\vec M=\vec r\times\vec F=f(r)\,(\vec r\times\hat r)=\vec 0,$$ perché $\vec r$ e $\hat r$ sono paralleli. <b>Momento angolare costante.</b> Dal teorema del momento angolare $d\vec L/dt=\vec M=\vec 0$, quindi $$\vec L=\vec r\times m\vec v=\text{costante in modulo, direzione e verso}.$$ <b>Moto piano.</b> Per definizione $\vec L$ è ortogonale a $\vec r$ e a $\vec v$. Essendo $\vec L$ un vettore \emph{fisso}, $\vec r$ resta sempre ortogonale a una direzione costante: giace quindi in un piano fisso, quello per $O$ ortogonale a $\vec L$. Il moto è piano. $\blacksquare$<br><br><b>Velocità areolare e seconda legge di Keplero.</b> In coordinate polari nel piano, $|\vec L|=m r^2\dot\theta=\text{cost}$. L'area spazzata dal raggio vettore per unità di tempo è $$\frac{dA}{dt}=\frac12 r^2\dot\theta=\frac{|\vec L|}{2m}=\text{costante}.$$ Il raggio vettore spazza aree uguali in tempi uguali: seconda legge di Keplero, valida per \emph{ogni} forza centrale (non solo gravitazionale), perché discende solo dalla conservazione di $\vec L$. <b>Significato fisico.</b> Una simmetria (l'isotropia della forza centrale) genera una legge di conservazione ($\vec L$): è un caso concreto del legame simmetria-conservazione che, formalizzato, diventa il teorema di Noether. La riduzione a moto piano dimezza i gradi di libertà del problema.

---

## L7

**Richiesta:** Mostra come si integra il secondo principio quando la forza è funzione del solo tempo o è costante, evidenziando il ruolo delle condizioni iniziali e il legame con l'impulso.

**Argomento dichiarato:** Integrazione con forza costante o dipendente dal tempo

**Dimostrazione modello:**

Il secondo principio $\vec F=m\ddot{\vec r}$ è un'equazione differenziale del second'ordine. Quando $\vec F$ è nota come funzione del solo tempo (o è costante), si integra direttamente per quadrature. <b>Forza dipendente dal tempo $\vec F(t)$.</b> Da $m\dfrac{d\vec v}{dt}=\vec F(t)$ integro una prima volta: $$\vec v(t)=\vec v_0+\frac{1}{m}\int_0^t\vec F(t')\,dt'=\vec v_0+\frac{\vec J(t)}{m},$$ dove $\vec J(t)=\int_0^t\vec F\,dt'$ è l'impulso: ricompare il teorema dell'impulso. Integro una seconda volta: $$\vec r(t)=\vec r_0+\int_0^t\vec v(t')\,dt'.$$ <b>Forza costante.</b> Caso particolare: $\vec a=\vec F/m$ costante, e le due integrazioni danno $$\vec v(t)=\vec v_0+\frac{\vec F}{m}\,t,\qquad \vec r(t)=\vec r_0+\vec v_0 t+\frac{1}{2}\frac{\vec F}{m}\,t^2:$$ le leggi orarie del moto uniformemente accelerato, in forma vettoriale. $\blacksquare$<br><br><b>Significato fisico.</b> Le due costanti d'integrazione sono $\vec r_0$ e $\vec v_0$: lo stato iniziale determina univocamente il moto futuro — è il determinismo della meccanica classica. Ogni integrazione introduce una costante, fissata dallo stato a $t=0$. L'ordine è obbligato: dalla forza si ottiene prima la velocità (tramite l'impulso), poi la posizione. Lo schema funziona solo finché $\vec F$ non dipende da $\vec r$ o $\vec v$; se dipende dalla posizione (elastica, gravitazionale) l'equazione diventa un'ODE genuina, non due semplici quadrature.

---

## L8

**Richiesta:** Definisci l'impulso angolare e dimostra il teorema $\vec J_L=\Delta\vec L$; spiega perché è lo strumento adatto agli urti che imprimono rotazione.

**Argomento dichiarato:** Impulso angolare

**Dimostrazione modello:**

<b>Definizione.</b> In analogia con l'impulso lineare $\vec J=\int\vec F\,dt=\Delta\vec p$, l'impulso angolare (momento dell'impulso) è l'integrale nel tempo del momento della forza rispetto a un polo fisso $O$: $$\vec J_L\equiv\int_{t_1}^{t_2}\vec M\,dt.$$ <b>Teorema.</b> Parto dal teorema del momento angolare $\vec M=\dfrac{d\vec L}{dt}$, moltiplico per $dt$ e integro: $$\int_{t_1}^{t_2}\vec M\,dt=\int_{\vec L_1}^{\vec L_2}d\vec L=\vec L_2-\vec L_1=\Delta\vec L.$$ Dunque $$\vec J_L=\Delta\vec L.\qquad\blacksquare$$ <b>Significato fisico.</b> È l'analogo rotazionale del teorema dell'impulso. Come quello, è lo strumento adatto quando il momento $\vec M(t)$ è intenso e di brevissima durata (un urto che imprime una rotazione, una percussione su un corpo rigido): il dettaglio temporale di $\vec M(t)$ è ininfluente, conta solo il suo integrale, ricavabile dai momenti angolari prima e dopo. Se durante un urto il momento delle forze impulsive rispetto a un polo è nullo (per esempio forze impulsive che passano per il polo), allora $\Delta\vec L=\vec 0$: il momento angolare si conserva nell'urto. È il principio dietro il comportamento delle trottole colpite e del rinculo rotatorio.


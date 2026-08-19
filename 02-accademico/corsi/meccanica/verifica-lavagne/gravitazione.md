# Lavagne del pool: gravitazione

Ogni voce: la richiesta d'esame e la dimostrazione modello da verificare.

---

## L1

**Richiesta:** Deriva la seconda legge di Keplero (velocità areolare costante) dalla conservazione del momento angolare in un campo centrale.

**Argomento dichiarato:** Seconda legge di Keplero dal momento angolare

**Dimostrazione modello:**

<b>Forza centrale ⇒ momento angolare costante.</b> La gravità è centrale: $\vec F=-G\frac{mM}{r^2}\hat r$ è parallela al raggio vettore $\vec r$. Il momento rispetto al centro è dunque $$\vec M=\vec r\times\vec F=0\quad(\vec r\parallel\vec F).$$ Per il teorema del momento angolare $\frac{d\vec L}{dt}=\vec M=0$, quindi $\vec L=\vec r\times m\vec v$ è costante in modulo e direzione. La costanza della direzione confina il moto nel piano ortogonale a $\vec L$.<br><br><b>Area spazzata.</b> In un tempo $dt$ il raggio vettore passa da $\vec r$ a $\vec r+d\vec r$; l'area del triangolo infinitesimo è $$dA=\tfrac12|\vec r\times d\vec r|.$$ Dividendo per $dt$ e usando $d\vec r=\vec v\,dt$: $$\frac{dA}{dt}=\tfrac12|\vec r\times\vec v|=\frac{1}{2m}|\vec r\times m\vec v|=\frac{L}{2m}.$$ <b>Conclusione.</b> Poiché $L$ e $m$ sono costanti, $$\boxed{\ \frac{dA}{dt}=\frac{L}{2m}=\text{costante}\ }.$$ Il raggio vettore spazza aree uguali in tempi uguali: è la II legge di Keplero. <b>Significato.</b> Il pianeta accelera al perielio (piccolo $r$, grande $v$) e rallenta all'afelio (grande $r$, piccolo $v$), sempre in modo che $r\,v_\perp$ resti costante. La II legge non è specifica della gravità: vale per \emph{ogni} forza centrale, perché discende solo dalla conservazione di $L$. È il primo passo verso la riduzione a un problema radiale 1D. $\blacksquare$

---

## L2

**Richiesta:** Costruisci il potenziale efficace del problema gravitazionale e usalo per classificare le orbite in funzione dell'energia, spiegando la barriera centrifuga.

**Argomento dichiarato:** Potenziale efficace e classificazione delle orbite

**Dimostrazione modello:**

<b>Riduzione a 1D.</b> Il moto è piano (forza centrale); in coordinate polari $(r,\phi)$ l'energia è $$E=\tfrac12 m\dot r^2+\tfrac12 mr^2\dot\phi^2-G\frac{mM}{r}.$$ La conservazione del momento angolare $L=mr^2\dot\phi$ permette di eliminare $\dot\phi=L/(mr^2)$. Il termine angolare diventa $\tfrac12 mr^2\dot\phi^2=\frac{L^2}{2mr^2}$, e $$E=\tfrac12 m\dot r^2+\underbrace{\frac{L^2}{2mr^2}-G\frac{mM}{r}}_{V_{eff}(r)}.$$ Il problema è ora identico a un moto 1D di una particella di 'coordinata' $r$ nel potenziale $V_{eff}$.<br><br><b>Barriera centrifuga.</b> Il termine $\frac{L^2}{2mr^2}$ è positivo e per $r\to0$ diverge come $1/r^2$, più rapidamente del gravitazionale $-1/r$. Quindi $V_{eff}\to+\infty$ vicino all'origine: una parete repulsiva che, se $L\neq0$, impedisce la caduta sul centro. Non è una forza reale ma l'energia cinetica del moto angolare 'immagazzinata' nel problema radiale. A grandi $r$ domina invece il termine gravitazionale $-1/r$ (tende a $0^-$). La competizione crea un <b>minimo</b> in $$r_0=\frac{L^2}{GmM^2m}=\frac{L^2}{Gm^2M},\qquad V_{eff}'(r_0)=0.$$ <b>Classificazione per energia</b> (traccio la retta orizzontale $E$ sul grafico di $V_{eff}$; i moti hanno $\dot r^2\geq0$, cioè $E\geq V_{eff}$):<br>— $E=V_{eff,min}$: la retta tocca il fondo, $r=r_0$ fisso → <b>orbita circolare</b>;<br>— $V_{eff,min}<E<0$: due intersezioni $r_{min}$ (perielio) e $r_{max}$ (afelio), moto confinato → <b>ellisse</b>;<br>— $E=0$: $r_{max}\to\infty$, l'orbita si apre → <b>parabola</b> (arriva all'infinito con $v\to0$);<br>— $E>0$: una sola intersezione $r_{min}$, il corpo arriva dall'infinito e vi ritorna → <b>iperbole</b>.<br>Il segno di $E$ separa stati legati ($E<0$) da liberi ($E\geq0$): è lo stesso criterio della velocità di fuga. <b>Ponte.</b> Questa stessa costruzione — barriera centrifuga $\frac{L^2}{2mr^2}$, riduzione a un problema radiale, classificazione per energia — ricompare identica nell'atomo d'idrogeno in meccanica quantistica: là $E<0$ dà gli stati legati (righe spettrali), $E>0$ gli stati di diffusione. Il potenziale efficace è un ponte diretto verso la MQ e la meccanica analitica. $\blacksquare$

---

## L3

**Richiesta:** Dimostra la terza legge di Keplero $T^2=\dfrac{4\pi^2}{GM}a^3$ per l'orbita circolare, con cenno all'estensione ellittica.

**Argomento dichiarato:** Terza legge di Keplero

**Dimostrazione modello:**

<b>Orbita circolare.</b> Un pianeta di massa $m$ orbita in cerchio di raggio $r$ attorno a $M$. La forza gravitazionale fornisce la forza centripeta: $$G\frac{mM}{r^2}=\frac{mv^2}{r}.$$ La massa $m$ del pianeta si semplifica (equivalenza tra massa gravitazionale e inerziale): $$v^2=\frac{GM}{r}.$$ <b>Introduco il periodo.</b> Per il moto circolare uniforme $v=\frac{2\pi r}{T}$, quindi $v^2=\frac{4\pi^2 r^2}{T^2}$. Uguaglio: $$\frac{4\pi^2 r^2}{T^2}=\frac{GM}{r}\ \Longrightarrow\ T^2=\frac{4\pi^2}{GM}r^3.$$ $$\boxed{\ T^2=\frac{4\pi^2}{GM}\,r^3\ }.$$ <b>Interpretazione.</b> $T^2\propto r^3$, e la costante $\frac{4\pi^2}{GM}$ dipende \emph{solo} dalla massa centrale, non dal pianeta: tutti i corpi attorno allo stesso $M$ hanno lo stesso $T^2/r^3$. Questo permette di 'pesare' il Sole (o la Terra) misurando periodo e raggio di un satellite.<br><br><b>Cenno all'ellisse.</b> Per un'orbita ellittica di semiasse maggiore $a$, la legge vale identica con $r\to a$: $$T^2=\frac{4\pi^2}{GM}a^3.$$ La dimostrazione rigorosa integra la II legge di Keplero: l'area dell'ellisse $A=\pi ab$ è spazzata a velocità areolare costante $\frac{L}{2m}$, quindi $T=\frac{A}{dA/dt}=\frac{2m\pi ab}{L}$. Usando la relazione tra $L$, energia e parametri dell'ellisse ($b=a\sqrt{1-e^2}$, $L^2=GMm^2 a(1-e^2)$) si elimina $b$ ed $L$ e si ritrova esattamente $T^2=\frac{4\pi^2}{GM}a^3$: il semiasse minore scompare, resta solo $a$. $\blacksquare$

---

## L4

**Richiesta:** Ricava la velocità di fuga imponendo $E=0$ e collega il segno dell'energia meccanica alla natura legata o libera dell'orbita.

**Argomento dichiarato:** Velocità di fuga ed energia di legame

**Dimostrazione modello:**

<b>Energia totale.</b> Un corpo di massa $m$ lanciato dalla superficie ($r=R$) con velocità $v$ ha energia meccanica $$E=\tfrac12 mv^2-G\frac{mM}{R},$$ conservata perché la gravità è conservativa. <b>Condizione di fuga.</b> Sfuggire significa raggiungere $r\to\infty$; là $U\to0$ e la velocità residua è $v_\infty\geq0$, cioè $E=\tfrac12 mv_\infty^2\geq0$. La velocità \emph{minima} di fuga corrisponde ad arrivare all'infinito esattamente fermo, $v_\infty=0$, cioè $E=0$: $$\tfrac12 mv_{fuga}^2-G\frac{mM}{R}=0.$$ Semplifico $m$ (la velocità di fuga non dipende dalla massa del proiettile) e ricavo $$\boxed{\ v_{fuga}=\sqrt{\frac{2GM}{R}}\ }.$$ <b>Confronto orbitale.</b> La velocità di orbita circolare alla stessa quota è $v_{orb}=\sqrt{GM/R}$, quindi $v_{fuga}=\sqrt2\,v_{orb}$: basta aumentare del $41\%$ la velocità orbitale per sfuggire.<br><br><b>Segno dell'energia.</b> Con lo zero di $U$ all'infinito, il segno di $E$ classifica il moto:<br>— $E<0$: il corpo non raggiunge l'infinito (là servirebbe $K=E<0$, impossibile) → <b>orbita legata</b> (ellisse/cerchio);<br>— $E=0$: raggiunge l'infinito con velocità nulla → <b>parabola</b>, esattamente la fuga;<br>— $E>0$: raggiunge l'infinito con velocità residua → <b>orbita libera</b> (iperbole).<br>La velocità di fuga è quindi la soglia $E=0$: separare due corpi legati costa esattamente l'energia $|E|=G\frac{mM}{R}-\tfrac12 mv^2$, l'\emph{energia di legame}. È lo stesso concetto di energia di legame che ritroverai per l'atomo (ionizzazione) e per il nucleo. $\blacksquare$

---

## L5

**Richiesta:** Dimostra che sotto una forza $\propto 1/r^2$ l'orbita è una conica $r(\phi)=p/(1+e\cos\phi)$, usando l'equazione di Binet, e spiega perché serve proprio l'esponente $-2$.

**Argomento dichiarato:** Prima legge di Keplero: l'orbita è una conica

**Dimostrazione modello:**

Ipotesi: forza centrale attrattiva $\vec F=-\dfrac{GmM}{r^2}\hat r$; il moto è già piano (conservazione di $\vec L$). Uso coordinate polari $(r,\phi)$ con $L=mr^2\dot\phi$ costante. <b>Cambio di variabile.</b> Pongo $u=1/r$ e uso $\phi$ come variabile indipendente al posto di $t$. Da $\dot\phi=\dfrac{L}{mr^2}=\dfrac{Lu^2}{m}$: $$\dot r=\frac{dr}{d\phi}\dot\phi=-\frac{1}{u^2}\frac{du}{d\phi}\cdot\frac{Lu^2}{m}=-\frac{L}{m}\frac{du}{d\phi},$$ e derivando ancora $$\ddot r=-\frac{L}{m}\frac{d^2u}{d\phi^2}\dot\phi=-\frac{L^2u^2}{m^2}\frac{d^2u}{d\phi^2}.$$ <b>Equazione radiale.</b> Il secondo principio in direzione radiale è $m(\ddot r-r\dot\phi^2)=-GmMu^2$. Con $r\dot\phi^2=\dfrac{1}{u}\left(\dfrac{Lu^2}{m}\right)^2=\dfrac{L^2u^3}{m^2}$: $$m\left(-\frac{L^2u^2}{m^2}\frac{d^2u}{d\phi^2}-\frac{L^2u^3}{m^2}\right)=-GmMu^2.$$ Divido per $-\dfrac{L^2u^2}{m}$ e ottengo l'<b>equazione di Binet</b>, lineare: $$\frac{d^2u}{d\phi^2}+u=\frac{GMm^2}{L^2}.$$ <b>Soluzione.</b> È armonica con termine costante; la soluzione generale è $$u(\phi)=\frac{GMm^2}{L^2}\big(1+e\cos\phi\big),$$ con $e$ costante d'integrazione (origine di $\phi$ al perielio). Tornando a $r=1/u$: $$\boxed{\ r(\phi)=\frac{p}{1+e\cos\phi}\ },\qquad p=\frac{L^2}{GMm^2}.\qquad\blacksquare$$ <b>Significato fisico.</b> $r(\phi)=p/(1+e\cos\phi)$ è l'equazione polare di una \emph{conica} con un fuoco nell'origine (il corpo attraente): è la prima legge di Keplero. L'eccentricità $e$ ne fissa il tipo: $e=0$ cerchio, $0<e<1$ ellisse, $e=1$ parabola, $e>1$ iperbole. È decisivo che la forza vada come $1/r^2$: solo con quell'esponente l'equazione di Binet ha termine \emph{costante} e genera coniche chiuse. Una potenza diversa darebbe orbite non richiuse (precessione del perielio): la chiusura delle orbite è una firma della legge $1/r^2$ (teorema di Bertrand, con l'unica altra eccezione della forza elastica $\propto r$).

---

## L6

**Richiesta:** Dimostra il teorema del guscio: un guscio sferico omogeneo genera campo nullo all'interno e, all'esterno, un campo identico a quello di tutta la massa concentrata nel centro.

**Argomento dichiarato:** Teorema del guscio sferico

**Dimostrazione modello:**

Uso la legge di Gauss per la gravità, conseguenza diretta della forma $1/r^2$: il flusso del campo gravitazionale $\vec g$ attraverso una superficie chiusa vale $$\oint_S\vec g\cdot d\vec A=-4\pi G\,M_{int},$$ con $M_{int}$ la massa racchiusa (il segno meno perché la gravità è attrattiva). <b>Simmetria.</b> Per una distribuzione a simmetria sferica, $\vec g$ è radiale e ha modulo costante su ogni sfera concentrica di raggio $r$. Scelgo come superficie gaussiana una tale sfera: $$\oint\vec g\cdot d\vec A=-g(r)\,4\pi r^2\ \Longrightarrow\ g(r)=\frac{G\,M_{int}(r)}{r^2}.$$ <b>Esterno al guscio</b> ($r>R$): la sfera gaussiana racchiude tutta la massa, $M_{int}=M$, quindi $$g(r)=\frac{GM}{r^2},$$ identico al campo di una massa puntiforme $M$ nel centro. <b>Interno al guscio</b> ($r<R$): la sfera gaussiana non racchiude massa (il guscio è tutto fuori), $M_{int}=0$, quindi $$g(r)=0.$$ $\blacksquare$<br><br><b>Intuizione geometrica (interno).</b> Da un punto interno, due coni opposti di ugual angolo solido intercettano sul guscio due calotte di massa $\propto r^2$ (la distanza al quadrato) ma a distanze $r_1,r_2$: le attrazioni $\propto \text{massa}/r^2\propto r_i^2/r_i^2$ sono uguali e opposte e si cancellano. È l'esatta compensazione tra 'più massa lontana' e 'meno massa vicina', garantita dall'esponente $1/r^2$. <b>Significato fisico.</b> Il teorema giustifica il trattare Terra, Sole e stelle come masse puntiformi: senza di esso la legge $1/r^2$ non si applicherebbe a corpi estesi. Inoltre, dentro una sfera piena solo la massa \emph{interna} al raggio $r$ conta: il campo cresce linearmente, $g(r)\propto r$, e al centro è nullo.

---

## L7

**Richiesta:** Ricava la relazione tra eccentricità ed energia, $e=\sqrt{1+\dfrac{2EL^2}{G^2M^2m^3}}$, e usala per associare il segno di $E$ al tipo di conica.

**Argomento dichiarato:** Segno dell'energia e tipo di orbita

**Dimostrazione modello:**

<b>Punto di partenza.</b> Dall'orbita conica $r=\dfrac{p}{1+e\cos\phi}$ con $p=\dfrac{L^2}{GMm^2}$, e dalla relazione tra semiasse maggiore $a$ ed energia (vis-viva) $$E=-\frac{GMm}{2a}.$$ Per un'ellisse vale la relazione geometrica $p=a(1-e^2)$, cioè $a=\dfrac{p}{1-e^2}$. <b>Combino.</b> Sostituisco $a$ in $E$: $$E=-\frac{GMm}{2}\cdot\frac{1-e^2}{p}=-\frac{GMm(1-e^2)}{2}\cdot\frac{GMm^2}{L^2}=-\frac{G^2M^2m^3}{2L^2}\,(1-e^2).$$ Risolvo per $e^2$: $$1-e^2=-\frac{2EL^2}{G^2M^2m^3}\ \Longrightarrow\ \boxed{\ e=\sqrt{1+\frac{2EL^2}{G^2M^2m^3}}\ }.\qquad\blacksquare$$ <b>Classificazione.</b> Il segno di $E$ determina il termine sotto radice, quindi $e$ e il tipo di conica:<br>— $E<0$: $1-e^2>0$, cioè $e<1$ → <b>ellisse</b> (orbita legata); il minimo $E=-\dfrac{G^2M^2m^3}{2L^2}$ dà $e=0$, il <b>cerchio</b>;<br>— $E=0$: $e=1$ → <b>parabola</b> (limite, arriva all'infinito con velocità nulla);<br>— $E>0$: $e>1$ → <b>iperbole</b> (orbita libera, arriva dall'infinito e vi ritorna).<br><br><b>Significato fisico.</b> È il legame tra dinamica e geometria: l'energia dice se il moto è legato o libero, l'eccentricità dà la forma precisa dell'orbita, e le due sono la stessa informazione. Il segno di $E$ (con lo zero di $U$ all'infinito) è il criterio universale di legame — lo stesso che separa i pianeti dalle comete iperboliche di passaggio e, in meccanica quantistica, gli stati legati ($E<0$) dagli stati di diffusione ($E>0$).

---

## L8

**Richiesta:** Per un'orbita circolare gravitazionale ricava la velocità orbitale e dimostra le relazioni $E=\tfrac12 U=-K$, riconoscendovi il teorema del viriale.

**Argomento dichiarato:** Orbita circolare: velocità orbitale ed E = U/2

**Dimostrazione modello:**

<b>Velocità orbitale.</b> Su un'orbita circolare di raggio $r$ la forza gravitazionale fornisce la forza centripeta: $$\frac{GMm}{r^2}=\frac{mv^2}{r}\ \Longrightarrow\ \boxed{\ v_{orb}=\sqrt{\frac{GM}{r}}\ }.$$ La massa $m$ del corpo si semplifica: la velocità orbitale non dipende da essa. <b>Energie.</b> L'energia cinetica è $$K=\tfrac12 mv_{orb}^2=\tfrac12\frac{GMm}{r},$$ mentre l'energia potenziale (zero all'infinito) è $$U=-\frac{GMm}{r}.$$ Confrontando: $$K=-\tfrac12 U=\tfrac12|U|.$$ L'energia meccanica totale è $$E=K+U=\tfrac12\frac{GMm}{r}-\frac{GMm}{r}=-\tfrac12\frac{GMm}{r}=\tfrac12 U=-K.\qquad\blacksquare$$ <b>Significato fisico.</b> Le relazioni $E=\tfrac12 U=-K$ sono un caso del <b>teorema del viriale</b> per la forza $1/r^2$: mediamente $\langle K\rangle=-\tfrac12\langle U\rangle$. L'energia totale è negativa (orbita legata) e pari a metà del potenziale. Ne segue un fatto controintuitivo: per portare un satellite su un'orbita più alta bisogna \emph{fornire} energia ($E$ aumenta, diventando meno negativa), ma il satellite finisce per andare più \emph{lento} ($v_{orb}\propto1/\sqrt r$ cala). L'energia fornita va tutta e più che tutta nel potenziale, mentre la cinetica diminuisce. Il teorema del viriale, qui in forma elementare, è uno strumento centrale in astrofisica (masse delle galassie) e in meccanica statistica.

---

## L9

**Richiesta:** Ricava l'accelerazione di gravità $g=GM_T/R_T^2$ dalla legge di gravitazione, e mostra come la cancellazione della massa riveli l'equivalenza tra massa inerziale e gravitazionale.

**Argomento dichiarato:** g dalla gravitazione universale ed equivalenza delle masse

**Dimostrazione modello:**

<b>Peso alla superficie.</b> Un corpo di massa $m$ sulla superficie terrestre (massa $M_T$, raggio $R_T$) è attratto con forza $$F=G\frac{m\,M_T}{R_T^2}.$$ Per il teorema del guscio la Terra agisce come una massa puntiforme nel centro. Identificando questa forza col peso $P=m_i\,g$ (dove $m_i$ è la massa \emph{inerziale}, quella di $\vec F=m_i\vec a$): $$m_i\,g=G\frac{m_g\,M_T}{R_T^2},$$ avendo distinto la massa \emph{gravitazionale} $m_g$ (la 'carica' che sente la gravità) dalla inerziale $m_i$. <b>L'accelerazione.</b> $$g=\frac{m_g}{m_i}\cdot\frac{GM_T}{R_T^2}.$$ <b>L'osservazione cruciale.</b> Sperimentalmente tutti i corpi cadono con la stessa accelerazione $g$, indipendentemente da massa e composizione (Galileo, poi Eötvös con precisione altissima). Questo impone $$\frac{m_g}{m_i}=\text{costante universale}=1\ \Longrightarrow\ \boxed{\ g=\frac{GM_T}{R_T^2}\ }.$$ $\blacksquare$<br><br><b>Significato fisico.</b> La caduta libera è \emph{universale}: $g\approx9{,}81\ \mathrm{m/s^2}$ vale per una piuma o per una roccia (nel vuoto), perché la massa che compare come 'carica gravitazionale' e quella che compare come 'inerzia' sono la stessa. Non è un fatto ovvio: nulla nella meccanica newtoniana lo impone: è un dato sperimentale, il \emph{principio di equivalenza}. Einstein ne fece il fondamento della relatività generale, elevandolo a principio: localmente un campo gravitazionale è indistinguibile da un'accelerazione del riferimento. La cancellazione di $m$ che qui sembra un dettaglio algebrico è, letta in profondità, la porta verso la teoria della gravitazione come geometria dello spaziotempo.

---

## L10

**Richiesta:** Deduca la forza mareale come forza differenziale nel riferimento solidale con la Terra in caduta libera verso la Luna: ricavi il campo mareale al primo ordine in $R_T/d$ lungo la congiungente e in direzione trasversa, spieghi perch&eacute; i rigonfiamenti sono due e commenti la dipendenza $1/d^3$.

**Argomento dichiarato:** Maree

**Dimostrazione modello:**

<b>Riferimento in caduta libera.</b> Tutta la Terra cade verso la Luna con $a_0=GM_L/d^2$ ($d$ fra i centri). Nel riferimento del centro della Terra, traslante e non rotante, compare la forza apparente uniforme $-m\mathbf{a}_0$: ogni punto sente allora una forza <b>differenziale</b> $$\mathbf{F}_{tid}=m\left[\mathbf{g}_L(\mathbf{r})-\mathbf{g}_L(\mathbf{0})\right],$$ che sarebbe nulla se $\mathbf{g}_L$ fosse uniforme: la marea vive della sua disomogeneit&agrave;. <b>Lungo la congiungente.</b> Asse $x$ verso la Luna, origine nel centro; l'attrazione in $x$ ha modulo $GM_L/(d-x)^2$, quindi $$\Delta g_x=\frac{GM_L}{d^2}\left[\left(1-\frac{x}{d}\right)^{-2}-1\right]\simeq\frac{2GM_Lx}{d^3},$$ avendo sviluppato al primo ordine in $x/d$, lecito perch&eacute; $R_T/d\approx1/60$ (dato astronomico, non derivato qui). <b>Trasversalmente.</b> Per $\mathbf{r}=(0,y)$ la componente $y$ vale $-GM_Ly/(d^2+y^2)^{3/2}\simeq-GM_Ly/d^3$, mentre al centro era nulla. Sulla superficie: $$\boxed{\ a_{\parallel}=+\frac{2GM_LR_T}{d^3},\qquad a_{\perp}=-\frac{GM_LR_T}{d^3}\ }$$ <b>Perch&eacute; i bozzi sono due.</b> In $x=+R_T$ il campo punta verso la Luna; in $x=-R_T$ &egrave; negativo, cio&egrave; punta ancora <b>via dal centro</b>, stavolta in verso opposto alla Luna. Estensivo sulle due calotte, compressivo sull'anello trasverso: l'oceano si solleva in due rigonfiamenti opposti, agganciati alla direzione Terra-Luna mentre la Terra ruota sotto di essi. Un punto ne attraversa due per rotazione: <b>due alte maree</b> al giorno, a poco pi&ugrave; di dodici ore l'una dall'altra perch&eacute; intanto la Luna avanza in orbita. $\blacksquare$<br><br><b>Significato fisico.</b> La marea va come $1/d^3$ e non come $1/d^2$ perch&eacute; misura la <b>derivata</b> del campo, non il campo; di qui il confronto Luna-Sole, senza numeri inventati: $$\frac{a_{tid,L}}{a_{tid,S}}=\frac{a_{grav,L}}{a_{grav,S}}\cdot\frac{d_S}{d_L}.$$ Il Sole attrae la Terra molto pi&ugrave; della Luna, ma &egrave; circa quattrocento volte pi&ugrave; lontano (dato astronomico): il secondo fattore ribalta il primo e la Luna vince. Ipotesi dichiarate: Terra sferica, oceano in equilibrio istantaneo (teoria statica di Newton), primo ordine in $R_T/d$. La traccia nulla del campo, $2-1-1=0$, riflette $\nabla^2\Phi=0$ nel vuoto; in relativit&agrave; generale lo stesso tensore $\partial_i\partial_j\Phi$ &egrave; l'equazione di deviazione geodetica, e la marea diventa il modo operativo di misurare la curvatura.


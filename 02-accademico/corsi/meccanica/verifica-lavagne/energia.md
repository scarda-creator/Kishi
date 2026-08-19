# Lavagne del pool: energia

Ogni voce: la richiesta d'esame e la dimostrazione modello da verificare.

---

## L1

**Richiesta:** Enuncia e dimostra il teorema dell'energia cinetica $W_{tot}=\Delta K$ a partire dal secondo principio, e precisa per quali forze vale.

**Argomento dichiarato:** Teorema dell'energia cinetica

**Dimostrazione modello:**

<b>Enunciato.</b> Il lavoro della forza risultante agente su un punto materiale, lungo un qualsiasi cammino da $A$ a $B$, eguaglia la variazione della sua energia cinetica: $$W_{tot}=\int_A^B\vec F\cdot d\vec r=\tfrac12 m v_B^2-\tfrac12 m v_A^2=\Delta K.$$ <b>Dimostrazione.</b> Parto dal secondo principio $\vec F=m\,d\vec v/dt$. Nel lavoro elementare sostituisco $d\vec r=\vec v\,dt$: $$dW=\vec F\cdot d\vec r=m\frac{d\vec v}{dt}\cdot\vec v\,dt=m\,\vec v\cdot d\vec v.$$ Uso l'identità $\vec v\cdot d\vec v=\tfrac12\,d(\vec v\cdot\vec v)=\tfrac12\,d(v^2)$: $$dW=\tfrac12 m\,d(v^2).$$ Integro da $A$ a $B$: $$W_{tot}=\int_A^B\tfrac12 m\,d(v^2)=\tfrac12 m v_B^2-\tfrac12 m v_A^2=\Delta K.\qquad\blacksquare$$ <b>Validità.</b> La derivazione usa solo $\vec F=m\vec a$: il teorema vale per \emph{qualunque} forza risultante, conservativa o dissipativa. È un'identità generale, distinta dalla conservazione dell'energia meccanica (che richiede in più forze conservative). $\vec F$ è qui la risultante di \emph{tutte} le forze; $W_{tot}$ ne è il lavoro totale.

---

## L2

**Richiesta:** Dimostra l'equivalenza tra 'lavoro nullo su ogni cammino chiuso', 'lavoro indipendente dal percorso' ed 'esistenza di un'energia potenziale $U$ con $\vec F=-\vec\nabla U$'.

**Argomento dichiarato:** Equivalenza delle caratterizzazioni di forza conservativa

**Dimostrazione modello:**

Mostro il ciclo di implicazioni tra le tre proprietà (P1) lavoro nullo su ogni ciclo, (P2) lavoro indipendente dal percorso, (P3) esiste $U$ con $\vec F=-\vec\nabla U$.<br><br><b>(P1) ⇒ (P2).</b> Siano $\gamma_1,\gamma_2$ due cammini da $A$ a $B$. Il cammino $\gamma_1$ seguito da $\gamma_2$ percorso all'indietro è un ciclo chiuso $C$. Poiché invertire il verso cambia il segno del lavoro ($d\vec r\to-d\vec r$): $$0=\oint_C\vec F\cdot d\vec r=W_{\gamma_1}-W_{\gamma_2}\ \Longrightarrow\ W_{\gamma_1}=W_{\gamma_2}.$$ Il lavoro dipende solo dagli estremi.<br><br><b>(P2) ⇒ (P3).</b> Fisso un riferimento $O$ e definisco $$U(P)=-\int_O^P\vec F\cdot d\vec r.$$ Grazie a (P2) l'integrale non dipende dal cammino, quindi $U(P)$ è una funzione ben definita del solo punto. Per uno spostamento infinitesimo $d\vec r$: $dU=-\vec F\cdot d\vec r$. Ma per definizione di gradiente $dU=\vec\nabla U\cdot d\vec r$. Valendo per ogni $d\vec r$: $$\vec F=-\vec\nabla U.$$<br><b>(P3) ⇒ (P1).</b> Se $\vec F=-\vec\nabla U$, il lavoro su un ciclo chiuso è $$\oint\vec F\cdot d\vec r=-\oint\vec\nabla U\cdot d\vec r=-\oint dU=0,$$ perché l'integrale di un differenziale esatto su un cammino chiuso (stesso punto iniziale e finale) è nullo: $U$ ritorna al valore di partenza.<br><br>Il ciclo P1 ⇒ P2 ⇒ P3 ⇒ P1 chiude l'equivalenza. <b>Rotore.</b> Una quarta caratterizzazione locale è $\vec\nabla\times\vec F=0$: da $\vec F=-\vec\nabla U$ segue $\vec\nabla\times\vec F=-\vec\nabla\times\vec\nabla U=0$ (il rotore di un gradiente è nullo). Il viceversa (rotore nullo ⇒ esiste $U$) richiede però che il dominio sia \emph{semplicemente connesso}: in un dominio con buchi il rotore può annullarsi senza che il lavoro sui cicli che avvolgono il buco sia nullo. $\blacksquare$

---

## L3

**Richiesta:** Ricava il teorema dell'energia in presenza di forze non conservative, $W_{nc}=\Delta E$, e discuti il caso dell'attrito.

**Argomento dichiarato:** Teorema dell'energia generalizzato e attrito

**Dimostrazione modello:**

<b>Separazione delle forze.</b> La forza risultante si scompone in una parte conservativa e una non conservativa: $\vec F=\vec F_c+\vec F_{nc}$. Il teorema dell'energia cinetica (sempre valido) dà: $$W_{tot}=W_c+W_{nc}=\Delta K.$$ <b>Introduco il potenziale.</b> Per la parte conservativa vale, per definizione, $W_c=-\Delta U$. Sostituendo: $$-\Delta U+W_{nc}=\Delta K\ \Longrightarrow\ W_{nc}=\Delta K+\Delta U=\Delta(K+U).$$ Definendo l'energia meccanica $E=K+U$: $$\boxed{\ W_{nc}=\Delta E\ }.$$ Il lavoro delle sole forze non conservative misura la variazione dell'energia meccanica.<br><br><b>Attrito.</b> La forza d'attrito dinamico è sempre opposta alla velocità: $\vec F_{nc}\cdot\vec v<0$, quindi $W_{nc}=\int\vec F_{nc}\cdot d\vec r<0$ su ogni tratto di moto. Dunque $\Delta E<0$: l'energia meccanica \emph{diminuisce} monotonamente. Non si conserva perché l'attrito dipende dal verso del moto e il suo lavoro su un ciclo chiuso non è nullo (è negativo): non deriva da alcun potenziale.<br><br><b>Dove va l'energia.</b> L'energia meccanica persa non scompare: si trasforma in energia interna (calore) delle superfici a contatto, $|W_{nc}|=Q_{dissipato}$. La conservazione dell'energia \emph{totale} (meccanica + interna + \dots) resta valida; è solo la parte meccanica a non conservarsi. Questo è il ponte concettuale verso la termodinamica. $\blacksquare$

---

## L4

**Richiesta:** Spiega come si analizza il moto 1D da un diagramma di energia potenziale $U(x)$: regione accessibile, punti di inversione, equilibri e loro stabilità, piccole oscillazioni.

**Argomento dichiarato:** Diagrammi di energia potenziale e stabilità

**Dimostrazione modello:**

Considero un punto di massa $m$ in una dimensione, soggetto alla sola forza conservativa $F(x)=-dU/dx$. L'energia meccanica $E=\tfrac12 mv^2+U(x)$ è costante.<br><br><b>Regione accessibile.</b> Poiché $K=\tfrac12 mv^2=E-U(x)\geq0$, il moto è possibile solo dove $$U(x)\leq E.$$ Le zone con $U>E$ sono classicamente proibite.<br><br><b>Punti di inversione.</b> Sono le intersezioni $U(x)=E$: lì $K=0$, la velocità si annulla e il moto si inverte. Tra due punti di inversione che racchiudono una buca il moto è \emph{confinato} e oscillante; se da un lato non c'è punto di inversione (perché $U<E$ fino all'infinito) il moto è \emph{illimitato} e il corpo sfugge.<br><br><b>Equilibri.</b> Sono i punti a forza nulla: $$F=-\frac{dU}{dx}=0\ \Longrightarrow\ U'(x_0)=0,$$ cioè gli estremi di $U$. La stabilità si legge dalla concavità:<br>— $U''(x_0)>0$ (\emph{minimo}): uno spostamento produce una forza di richiamo verso $x_0$ → equilibrio \textbf{stabile};<br>— $U''(x_0)<0$ (\emph{massimo}): la forza allontana da $x_0$ → equilibrio \textbf{instabile};<br>— $U''(x_0)=0$: caso indifferente/marginale, da decidere agli ordini superiori.<br><br><b>Piccole oscillazioni.</b> Attorno a un minimo, sviluppo $$U(x)\approx U(x_0)+\tfrac12 U''(x_0)(x-x_0)^2,$$ (il termine lineare è nullo). La forza è $F\approx-U''(x_0)(x-x_0)$: oscillatore armonico con $k=U''(x_0)$ e pulsazione $$\omega=\sqrt{\frac{U''(x_0)}{m}}.$$ Ogni minimo liscio di potenziale, guardato da vicino, è una parabola: ecco perché il moto armonico è universale. La curvatura del minimo fissa la frequenza. $\blacksquare$

---

## L5

**Richiesta:** Calcola il lavoro della forza peso, della forza elastica e della forza gravitazionale, mostra che ciascuno dipende solo dagli estremi e ricavane il potenziale.

**Argomento dichiarato:** Lavoro di peso, forza elastica e forza gravitazionale

**Dimostrazione modello:**

Una forza è conservativa quando il suo lavoro dipende solo dagli estremi. Verifico i tre casi fondamentali calcolando direttamente $W=\int_A^B\vec F\cdot d\vec r$.<br><br><b>Forza peso.</b> $\vec F=-mg\,\hat j$ (asse $y$ verso l'alto). Solo la componente $y$ dello spostamento conta: $$W=\int_A^B(-mg)\,dy=-mg\,(y_B-y_A).$$ Dipende solo dalle quote: forza conservativa, con potenziale $$U=mgy.$$ <b>Forza elastica.</b> $\vec F=-kx\,\hat i$: $$W=\int_{x_A}^{x_B}(-kx)\,dx=-\tfrac12 k\,(x_B^2-x_A^2).$$ Dipende solo dagli estremi, con potenziale $$U=\tfrac12 kx^2.$$ <b>Forza gravitazionale.</b> $\vec F=-G\dfrac{mM}{r^2}\,\hat r$; lo spostamento radiale dà $\vec F\cdot d\vec r=-G\dfrac{mM}{r^2}\,dr$: $$W=\int_{r_A}^{r_B}-G\frac{mM}{r^2}\,dr=G mM\left(\frac{1}{r_B}-\frac{1}{r_A}\right).$$ Dipende solo dalle distanze, con potenziale (zero all'infinito) $$U=-G\frac{mM}{r}.$$ $\blacksquare$<br><br><b>Significato fisico.</b> In tutti e tre i casi la forza dipende solo dalla posizione e il lavoro si riduce alla differenza di una funzione di stato: è la firma di una forza conservativa. In ciascun caso vale $W_{A\to B}=-(U_B-U_A)=-\Delta U$: il lavoro positivo della forza abbassa il potenziale. La costante additiva di $U$ è arbitraria (scelgo $U=mgy$ da un piano di riferimento, $U=0$ a molla scarica, $U=0$ all'infinito per la gravità): solo le differenze hanno significato fisico. L'attrito, che dipende dal verso del moto, sfugge a questo schema e non ammette potenziale.

---

## L6

**Richiesta:** A partire dalla definizione di energia potenziale come lavoro cambiato di segno, dimostra la relazione locale $\vec F=-\vec\nabla U$.

**Argomento dichiarato:** F = -grad U dalla definizione di lavoro

**Dimostrazione modello:**

<b>Punto di partenza.</b> Per una forza conservativa il lavoro è indipendente dal cammino, quindi posso definire una funzione del solo punto — l'energia potenziale — fissando un riferimento $O$: $$U(P)=-\int_O^P\vec F\cdot d\vec r.$$ <b>Passaggio al locale.</b> Considero uno spostamento infinitesimo $d\vec r$ da $P$. La variazione di $U$ è, per la definizione appena data, $$dU=-\vec F\cdot d\vec r.$$ D'altra parte, per definizione di differenziale totale (gradiente), la variazione di una funzione scalare lungo $d\vec r$ è $$dU=\vec\nabla U\cdot d\vec r.$$ <b>Confronto.</b> Le due espressioni valgono per \emph{ogni} $d\vec r$: $$\vec\nabla U\cdot d\vec r=-\vec F\cdot d\vec r\quad\forall\,d\vec r\ \Longrightarrow\ \boxed{\ \vec F=-\vec\nabla U\ }.$$ In una dimensione: $F=-\dfrac{dU}{dx}$; in componenti $F_x=-\dfrac{\partial U}{\partial x}$, e analoghe. $\blacksquare$<br><br><b>Significato fisico.</b> La forza è meno il gradiente del potenziale: punta nella direzione di massima \emph{discesa} di $U$, 'giù per la collina di potenziale', con intensità pari alla pendenza. Dove $U$ è stazionario ($\vec\nabla U=0$) la forza si annulla: sono i punti di equilibrio. Il segno della curvatura di $U$ in quei punti (concavità verso l'alto = minimo = stabile) decide la stabilità. Questa relazione trasforma un problema vettoriale (tre componenti di $\vec F$) in uno scalare (una sola funzione $U$): è la ragione per cui in fisica si lavora quasi sempre con i potenziali.

---

## L7

**Richiesta:** Dimostra la conservazione dell'energia meccanica $E=K+U$ per un sistema soggetto a sole forze conservative, indicando esattamente le ipotesi necessarie.

**Argomento dichiarato:** Conservazione dell'energia meccanica

**Dimostrazione modello:**

<b>Due ingredienti.</b> (1) Il teorema dell'energia cinetica, valido \emph{sempre}: il lavoro della risultante eguaglia la variazione di energia cinetica, $W_{tot}=\Delta K$. (2) La definizione di energia potenziale per le forze conservative: $W_c=-\Delta U$.<br><br><b>Dimostrazione (integrale).</b> Se tutte le forze che compiono lavoro sono conservative, $W_{tot}=W_c=-\Delta U$. Uguagliando ai due membri con $W_{tot}=\Delta K$: $$\Delta K=-\Delta U\ \Longrightarrow\ \Delta K+\Delta U=0\ \Longrightarrow\ \Delta(K+U)=0.$$ Dunque $$E=K+U=\text{costante}.$$ <b>Dimostrazione (differenziale).</b> Equivalentemente, derivo $E$ nel tempo: $$\frac{dE}{dt}=\frac{dK}{dt}+\frac{dU}{dt}=\vec F\cdot\vec v+\vec\nabla U\cdot\vec v=\vec F\cdot\vec v-\vec F\cdot\vec v=0,$$ avendo usato $dK/dt=\vec F\cdot\vec v$ (potenza) e $\vec F=-\vec\nabla U$. $\blacksquare$<br><br><b>Ipotesi, con precisione.</b> Serve che tutte le forze che \emph{compiono lavoro} siano conservative. Sono ammesse forze non conservative che non lavorano (reazione normale, attrito statico nel rotolamento, tensione ortogonale): non entrano nel bilancio. Se anche una sola forza dissipativa compie lavoro (attrito dinamico), $E$ non si conserva e vale invece $W_{nc}=\Delta E$. <b>Significato fisico.</b> $E$ è un integrale primo del moto: una quantità che resta fissa mentre $K$ e $U$ si scambiano continuamente. Questo abbassa di un ordine il problema (da accelerazioni a velocità) e permette di leggere il moto dai diagrammi di energia senza risolvere l'equazione differenziale.

---

## L8

**Richiesta:** Dimostra che il moto attorno a un minimo stabile di un potenziale $U(x)$ è, al primo ordine, armonico con pulsazione $\omega=\sqrt{U''(x_0)/m}$.

**Argomento dichiarato:** Piccole oscillazioni attorno a un minimo

**Dimostrazione modello:**

Ipotesi: moto unidimensionale conservativo, forza $F(x)=-U'(x)$, con un punto di equilibrio stabile $x_0$. <b>Equilibrio.</b> In $x_0$ la forza è nulla, cioè $U'(x_0)=0$; la stabilità richiede $U''(x_0)>0$ (minimo). <b>Sviluppo di Taylor.</b> Attorno a $x_0$, posto $\xi=x-x_0$: $$U(x)=U(x_0)+U'(x_0)\,\xi+\tfrac12 U''(x_0)\,\xi^2+O(\xi^3).$$ Il termine costante è irrilevante (solo differenze contano) e quello lineare è nullo ($U'(x_0)=0$): $$U(x)\approx U(x_0)+\tfrac12 U''(x_0)\,\xi^2.$$ <b>Forza e equazione del moto.</b> $$F=-\frac{dU}{dx}=-U''(x_0)\,\xi.$$ È una forza di richiamo lineare, con $k_{eff}=U''(x_0)$. Il secondo principio $m\ddot\xi=-U''(x_0)\,\xi$ dà $$\ddot\xi+\frac{U''(x_0)}{m}\,\xi=0\ \Longrightarrow\ \boxed{\ \omega=\sqrt{\frac{U''(x_0)}{m}}\ }.\qquad\blacksquare$$ <b>Significato fisico.</b> Ogni minimo liscio di potenziale, osservato da vicino, è una parabola: questa è la ragione dell'ubiquità del moto armonico in fisica, dalle molecole ai reticoli cristallini ai campi. La \emph{curvatura} del potenziale nel minimo, non la sua profondità, fissa la frequenza: minimi più 'stretti' (grande $U''$) oscillano più rapidamente. Il termine cubico trascurato è responsabile dell'anarmonicità, che emerge alle grandi ampiezze (dipendenza del periodo dall'ampiezza, dilatazione termica).

---

## L9

**Richiesta:** Definisci la potenza istantanea, ricava $P=\vec F\cdot\vec v$, e collega la potenza media al lavoro e alla variazione di energia cinetica.

**Argomento dichiarato:** Potenza istantanea e potenza media

**Dimostrazione modello:**

<b>Definizione.</b> La potenza è la rapidità con cui una forza compie lavoro: $$P=\frac{dW}{dt}.$$ <b>Forma $\vec F\cdot\vec v$.</b> Il lavoro elementare è $dW=\vec F\cdot d\vec r$; dividendo per $dt$ e usando $d\vec r/dt=\vec v$: $$P=\vec F\cdot\frac{d\vec r}{dt}=\vec F\cdot\vec v=Fv\cos\theta.$$ Per moto rettilineo con forza lungo il moto, $P=Fv$. Unità: watt, $\mathrm{W=J/s=kg\,m^2\,s^{-3}}$. <b>Potenza media.</b> Su un intervallo $\Delta t$: $$\langle P\rangle=\frac{W}{\Delta t}=\frac{1}{\Delta t}\int_{t_1}^{t_2}\vec F\cdot\vec v\,dt.$$ Applicando il teorema dell'energia cinetica alla risultante ($W_{tot}=\Delta K$): $$\langle P\rangle_{tot}=\frac{\Delta K}{\Delta t},$$ e istantaneamente $P_{tot}=\dfrac{dK}{dt}$: la potenza della risultante è la rapidità di variazione dell'energia cinetica. $\blacksquare$<br><br><b>Significato fisico.</b> La potenza misura il flusso di energia nel tempo, distinto dal lavoro totale: uno stesso lavoro erogato più in fretta richiede più potenza. Un motore a potenza $P$ limitata ha forza motrice $F=P/v$ che \emph{cala} all'aumentare della velocità: ecco perché l'accelerazione di un'auto si riduce alle alte velocità pur a piena potenza. L'analogo rotazionale è $P=\vec M\cdot\boldsymbol\omega=M\omega$ (momento per velocità angolare), usato per motori e turbine.


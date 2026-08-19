# Lavagne del pool: fluidi

Ogni voce: la richiesta d'esame e la dimostrazione modello da verificare.

---

## L1

**Richiesta:** Deriva la legge di Stevino $p=p_0+\rho g h$ dall'equilibrio di una colonna di fluido, e spiega perché la pressione dipende solo dalla quota.

**Argomento dichiarato:** Legge di Stevino

**Dimostrazione modello:**

<b>Impostazione.</b> Fluido incomprimibile (densità $\rho$ costante) in quiete in campo gravitazionale uniforme $\vec g$. Asse $z$ verticale verso l'alto. Isolo un elemento di fluido a forma di colonnina di sezione orizzontale $A$ e altezza $dz$, tra le quote $z$ e $z+dz$. <b>Equilibrio verticale.</b> Le forze verticali sono: la pressione dal basso $p(z)A$ (verso l'alto), la pressione dall'alto $p(z+dz)A$ (verso il basso) e il peso $dW=\rho gA\,dz$ (verso il basso). All'equilibrio: $$p(z)A-p(z+dz)A-\rho gA\,dz=0.$$ Divido per $A\,dz$ e riconosco il rapporto incrementale: $$\frac{p(z+dz)-p(z)}{dz}=-\rho g\ \Longrightarrow\ \frac{dp}{dz}=-\rho g.$$ <b>Integrazione.</b> Con $\rho$ costante, integro dalla superficie (quota $z_0$, pressione $p_0$) a una profondità $h$ sotto di essa (quota $z_0-h$): $$p(z_0-h)-p_0=-\rho g\big[(z_0-h)-z_0\big]=\rho g h.$$ $$\boxed{\ p=p_0+\rho g h\ }.$$ <b>Perché solo la quota.</b> L'equilibrio orizzontale del fluido impone che non ci siano gradienti di pressione orizzontali: a quota fissata $p$ è la stessa in ogni punto (superfici isobare orizzontali). Quindi $p$ è funzione della sola $z$, e sul fondo dipende solo dall'altezza $h$ del liquido, mai dalla forma del recipiente o dal volume totale. È il <b>paradosso idrostatico</b>: un tubo sottile e un bacino largo con lo stesso livello esercitano la stessa pressione sul fondo. La spiegazione: le pareti inclinate esercitano forze normali con componenti verticali che 'reggono' il fluido in eccesso, senza alterare la pressione. $\blacksquare$

---

## L2

**Richiesta:** Deriva il principio di Archimede dalla distribuzione di pressione e discuti la condizione di galleggiamento.

**Argomento dichiarato:** Principio di Archimede

**Dimostrazione modello:**

<b>Origine della spinta.</b> Un corpo immerso è premuto dal fluido su tutta la superficie. Per Stevino la pressione cresce con la profondità: le facce più profonde subiscono pressioni maggiori. Le componenti orizzontali si annullano per simmetria (a ogni quota la spinta laterale è bilanciata dal lato opposto); resta uno squilibrio verticale, perché il fondo del corpo è premuto verso l'alto più forte di quanto la sommità sia premuta verso il basso. La risultante — la <b>spinta</b> — è diretta verso l'alto.<br><br><b>Calcolo per sostituzione.</b> La forza netta di pressione dipende solo dalla forma della superficie e dal campo di pressione esterno, non da cosa c'è dentro il volume. Immagino allora di sostituire il corpo con una porzione dello stesso fluido, di identico volume $V_{imm}$. Quella porzione era in quiete, in equilibrio: la risultante delle pressioni esterne su di essa bilanciava esattamente il suo peso. Quindi $$\vec S=-\vec P_{fluido}\ \Longrightarrow\ S=\rho_{fl}V_{imm}\,g,$$ diretta verso l'alto. Poiché il campo di pressione esterno è identico qualunque sia il contenuto del volume, questa spinta agisce \emph{immutata} su qualsiasi corpo occupi quel volume: $$\boxed{\ S=\rho_{fl}V_{imm}\,g\ }=\text{peso del fluido spostato}.$$ <b>Formalmente</b> è il teorema del gradiente: $\vec S=-\oint p\,d\vec A=-\int\vec\nabla p\,dV=-\int(-\rho_{fl}\vec g)\,dV=\rho_{fl}V_{imm}\vec g$ verso l'alto, avendo usato $\vec\nabla p=\rho_{fl}\vec g$ (Stevino in forma locale).<br><br><b>Galleggiamento.</b> Un corpo di densità $\rho_c$ e volume $V$ galleggia se il peso può essere bilanciato dalla spinta con immersione parziale: $\rho_c Vg=\rho_{fl}V_{imm}g$, cioè $$\frac{V_{imm}}{V}=\frac{\rho_c}{\rho_{fl}}.$$ La frazione immersa è il rapporto delle densità. Serve $\rho_c<\rho_{fl}$ (altrimenti $V_{imm}>V$ è impossibile e il corpo affonda). Il ghiaccio, con $\rho_c\approx0{,}9\,\rho_{acqua}$, emerge solo per il $10\%$: la punta dell'iceberg. $\blacksquare$

---

## L3

**Richiesta:** Deriva il teorema di Bernoulli dal teorema dell'energia lungo un tubo di flusso, dichiarando tutte le ipotesi sul fluido e dove servono.

**Argomento dichiarato:** Teorema di Bernoulli dal teorema dell'energia

**Dimostrazione modello:**

<b>Ipotesi.</b> Fluido (i) incomprimibile ($\rho$ costante), (ii) non viscoso (nessun attrito interno), (iii) in moto stazionario (campo di velocità indipendente dal tempo). Considero un tubo di flusso sottile e seguo una porzione di fluido tra due sezioni, $1$ (area $A_1$, velocità $v_1$, quota $h_1$, pressione $p_1$) e $2$ (idem con pedice 2), in un tempo $dt$.<br><br><b>Conservazione della massa.</b> In $dt$ entra da 1 il volume $dV_1=A_1v_1\,dt$ ed esce da 2 il volume $dV_2=A_2v_2\,dt$. L'incomprimibilità impone $dV_1=dV_2\equiv dV$ (equazione di continuità $A_1v_1=A_2v_2$). La massa spostata è $dm=\rho\,dV$.<br><br><b>Lavoro delle forze di pressione.</b> Il fluido a monte spinge la porzione con forza $p_1A_1$ per il tratto $v_1\,dt$: lavoro $+p_1A_1v_1\,dt=p_1\,dV$. A valle il fluido resistente compie lavoro $-p_2\,dV$. Lavoro netto delle pressioni: $$dW=p_1\,dV-p_2\,dV=(p_1-p_2)\,dV.$$ <b>Qui serve la non viscosità:</b> assumo che solo le forze di pressione (e la gravità, via energia potenziale) compiano lavoro; l'attrito interno viscoso è nullo.<br><br><b>Teorema dell'energia.</b> L'effetto netto nel tempo $dt$ è: la massa $dm$ 'scompare' dalla sezione 1 e 'appare' alla sezione 2 (il resto del tubo è invariato, per la stazionarietà). La variazione di energia meccanica è dunque $$dE=\underbrace{\big(\tfrac12 dm\,v_2^2-\tfrac12 dm\,v_1^2\big)}_{\Delta K}+\underbrace{\big(dm\,gh_2-dm\,gh_1\big)}_{\Delta U}.$$ Il teorema dell'energia $dW=dE$: $$(p_1-p_2)\,dV=\tfrac12\rho\,dV(v_2^2-v_1^2)+\rho\,dV\,g(h_2-h_1).$$ <b>Risultato.</b> Divido per $dV$ e raccolgo per sezione: $$\boxed{\ p_1+\tfrac12\rho v_1^2+\rho g h_1=p_2+\tfrac12\rho v_2^2+\rho g h_2\ }$$ cioè $p+\tfrac12\rho v^2+\rho g h=$ costante lungo la linea di flusso. <b>Significato e ipotesi.</b> È la conservazione dell'energia meccanica \emph{per unità di volume}: $p$ (lavoro delle pressioni), $\tfrac12\rho v^2$ (energia cinetica), $\rho g h$ (potenziale). L'incomprimibilità è servita per avere $dV_1=dV_2$ e $\rho$ costante; la stazionarietà per dire che il tubo interno resta invariato (solo gli estremi cambiano); la non viscosità perché nessun lavoro dissipativo entri nel bilancio. Se cade la non viscosità, la costante \emph{diminuisce} lungo il moto (perdita di carico), come l'attrito riduce $E$ in $W_{nc}=\Delta E$. $\blacksquare$

---

## L4

**Richiesta:** Usando continuità e Bernoulli, ricava la depressione nel tubo di Venturi e la velocità di efflusso di Torricelli.

**Argomento dichiarato:** Effetto Venturi ed efflusso di Torricelli

**Dimostrazione modello:**

<b>Effetto Venturi.</b> Un tubo orizzontale ($h$ costante) si restringe da area $A_1$ ad area $A_2<A_1$. La continuità impone $A_1v_1=A_2v_2$, quindi nel restringimento il fluido accelera: $v_2=v_1A_1/A_2>v_1$. Bernoulli con $h_1=h_2$: $$p_1+\tfrac12\rho v_1^2=p_2+\tfrac12\rho v_2^2\ \Longrightarrow\ p_1-p_2=\tfrac12\rho(v_2^2-v_1^2)>0.$$ Dove il fluido è più veloce la pressione è \emph{minore}: nel restringimento c'è una depressione. Sostituendo $v_2=v_1A_1/A_2$: $$p_1-p_2=\tfrac12\rho v_1^2\left(\frac{A_1^2}{A_2^2}-1\right).$$ Misurando $p_1-p_2$ (con un manometro differenziale) si ricava la portata: è il principio del <b>flussimetro di Venturi</b>. Lo stesso meccanismo — velocità alta ⇒ pressione bassa — spiega la portanza dell'ala e il tubo di Pitot (che misura la velocità dalla differenza tra pressione totale e statica).<br><br><b>Efflusso di Torricelli.</b> Serbatoio largo con un piccolo foro a profondità $h$ sotto il pelo libero. Applico Bernoulli tra il pelo libero (1) e il foro (2). Entrambi sono a contatto con l'atmosfera, quindi $p_1=p_2=p_{atm}$: i termini di pressione si elidono. Il serbatoio è largo, quindi per continuità la velocità di discesa del pelo è trascurabile, $v_1\approx0$. Con dislivello $h_1-h_2=h$: $$\cancel{p_{atm}}+0+\rho g h_1=\cancel{p_{atm}}+\tfrac12\rho v_2^2+\rho g h_2.$$ Resta $\rho g(h_1-h_2)=\tfrac12\rho v_2^2$, e semplificando $\rho$: $$\boxed{\ v=\sqrt{2gh}\ }.$$ È la stessa velocità di un corpo caduto liberamente da altezza $h$: l'energia potenziale della colonna di fluido si converte in energia cinetica del getto, indipendentemente dalla densità. Il getto poi cade come un proiettile: combinando $v$ orizzontale con la caduta si trova la gittata. $\blacksquare$

---

## L5

**Richiesta:** Deriva l'equazione di continuità per un fluido incomprimibile in moto stazionario, $A_1v_1=A_2v_2$, e discuti il significato di portata.

**Argomento dichiarato:** Equazione di continuità

**Dimostrazione modello:**

<b>Ipotesi.</b> Fluido incomprimibile ($\rho$ costante) in moto stazionario (campo di velocità indipendente dal tempo). Considero un tubo di flusso, delimitato da linee di corrente attraverso cui non passa fluido, con due sezioni trasversali $A_1$ e $A_2$. <b>Conservazione della massa.</b> Nel tempo $dt$ entra dalla sezione 1 il fluido contenuto in un cilindretto di base $A_1$ e lunghezza $v_1\,dt$: massa $$dm_1=\rho\,A_1 v_1\,dt.$$ Nello stesso $dt$ esce dalla sezione 2 la massa $dm_2=\rho\,A_2 v_2\,dt$. In regime stazionario la massa contenuta nel tratto di tubo non cambia (nulla si accumula), quindi ciò che entra eguaglia ciò che esce: $$dm_1=dm_2\ \Longrightarrow\ \rho A_1 v_1\,dt=\rho A_2 v_2\,dt.$$ Semplifico $\rho$ e $dt$: $$\boxed{\ A_1 v_1=A_2 v_2\ }=\text{costante}\equiv Q.$$ $\blacksquare$<br><br><b>Significato fisico.</b> La quantità $Q=Av$ è la <b>portata volumetrica</b> (volume per unità di tempo, $\mathrm{m^3/s}$): si conserva lungo il tubo. La conseguenza è immediata e controintuitiva: dove il tubo si \emph{restringe} il fluido \emph{accelera} ($v\propto1/A$). È il motivo per cui il getto d'acqua da un rubinetto strozzato schizza più veloce, e la premessa dell'effetto Venturi (dove l'aumento di velocità fa calare la pressione). Per un fluido comprimibile la forma corretta conserva $\rho A v$ (portata di massa); l'incomprimibilità è l'ipotesi che permette di semplificare $\rho$.

---

## L6

**Richiesta:** Deriva la variazione di pressione con la quota in un'atmosfera isoterma di gas ideale, ottenendo la legge esponenziale $p(z)=p_0\,e^{-z/H}$.

**Argomento dichiarato:** Formula barometrica (atmosfera isoterma)

**Dimostrazione modello:**

<b>Perché non vale Stevino lineare.</b> L'aria è \emph{comprimibile}: la sua densità $\rho$ non è costante ma cresce con la pressione. L'equilibrio idrostatico locale resta valido, $$\frac{dp}{dz}=-\rho g,$$ ma ora $\rho$ dipende da $p$. <b>Equazione di stato.</b> Per un gas ideale a temperatura $T$ costante (atmosfera isoterma), $pV=\dfrac{m}{M}RT$ dà $$\rho=\frac{m}{V}=\frac{M\,p}{RT},$$ con $M$ massa molare. <b>Equazione differenziale.</b> Sostituisco: $$\frac{dp}{dz}=-\frac{Mg}{RT}\,p.$$ È lineare a coefficienti costanti: la pressione è proporzionale alla propria derivata, quindi decade esponenzialmente. <b>Integrazione.</b> Separo le variabili, $\dfrac{dp}{p}=-\dfrac{Mg}{RT}\,dz$, e integro da $0$ (pressione $p_0$) a $z$: $$\ln\frac{p}{p_0}=-\frac{Mg}{RT}\,z\ \Longrightarrow\ \boxed{\ p(z)=p_0\,e^{-z/H}\ },\qquad H=\frac{RT}{Mg}.$$ $\blacksquare$<br><br><b>Significato fisico.</b> La pressione (e la densità, ad essa proporzionale) cala esponenzialmente con la quota, non linearmente come in un liquido: la comprimibilità cambia radicalmente il profilo. La <b>quota di scala</b> $H=RT/(Mg)$ è l'altezza in cui la pressione si riduce di un fattore $e$ (circa $8\ \mathrm{km}$ per l'aria terrestre a temperatura ambiente): dipende dalla temperatura (atmosfera più calda, più estesa) e dalla massa molare (gas più leggeri salgono più in alto). Il fattore $e^{-Mgz/RT}=e^{-mgz/k_BT}$ è il fattore di Boltzmann: la stessa legge esponenziale che governa la distribuzione delle energie in meccanica statistica — l'atmosfera è un gas nel campo di potenziale $mgz$.

---

## L7

**Richiesta:** Calcola la forza totale esercitata dall'acqua su una diga verticale e la profondità del suo punto d'applicazione (centro di spinta).

**Argomento dichiarato:** Spinta su una diga: forza e punto d'applicazione

**Dimostrazione modello:**

<b>Impostazione.</b> Diga verticale di larghezza $b$, acqua di densità $\rho$ fino all'altezza $H$; superficie libera a pressione atmosferica (che agisce anche sull'altra faccia della diga e si elide, quindi considero solo la sovrappressione idrostatica). A profondità $z$ sotto il pelo libero la pressione manometrica è $p(z)=\rho g z$ (Stevino). <b>Forza totale.</b> Su una striscia orizzontale a profondità $z$, alta $dz$ e larga $b$, agisce la forza $$dF=p(z)\,dA=\rho g z\,(b\,dz).$$ Integro su tutta l'altezza: $$F=\int_0^H\rho g z\,b\,dz=\rho g b\,\frac{H^2}{2}=\boxed{\ \tfrac12\rho g b H^2\ }.$$ Equivalentemente $F=p_{media}\cdot A$, con $p_{media}=\rho g H/2$ (pressione a metà altezza) e $A=bH$: la forza è la pressione media per l'area. <b>Punto d'applicazione.</b> Il centro di spinta $z_C$ è la profondità in cui una forza concentrata $F$ darebbe lo stesso momento della distribuzione reale. Uguaglio i momenti rispetto al pelo libero: $$z_C\,F=\int_0^H z\,dF=\int_0^H z\,\rho g z\,b\,dz=\rho g b\,\frac{H^3}{3}.$$ Divido per $F=\tfrac12\rho g bH^2$: $$z_C=\frac{\rho g bH^3/3}{\rho g bH^2/2}=\frac{2}{3}H.\qquad\blacksquare$$ <b>Significato fisico.</b> La forza cresce come $H^2$ (l'area cresce con $H$ e la pressione media pure con $H$): raddoppiare la profondità quadruplica la spinta — per questo le dighe sono molto più spesse alla base. Il centro di spinta è a $\tfrac23 H$, cioè nel \emph{terzo inferiore}, non a metà: la pressione, crescendo con la profondità, sposta il baricentro delle forze verso il basso. È lì che va applicata la reazione o calcolato il momento ribaltante, il punto critico per la stabilità della diga.

---

## L8

**Richiesta:** Spiega e dimostra il paradosso idrostatico: perché la forza sul fondo di un recipiente dipende solo dall'altezza del liquido e non dalla forma del recipiente né dal peso totale.

**Argomento dichiarato:** Paradosso idrostatico

**Dimostrazione modello:**

<b>L'affermazione.</b> Recipienti di forma diversa — cilindrico, svasato verso l'alto, ristretto a imbuto — riempiti dello stesso liquido fino alla stessa altezza $h$ e con lo stesso fondo di area $A$, esercitano sul fondo la \emph{stessa} forza, anche se contengono quantità (e pesi) di liquido molto diversi. <b>Dimostrazione.</b> La pressione sul fondo dipende solo dalla profondità, per Stevino: $$p_{fondo}=p_0+\rho g h,$$ indipendente dalla forma. La forza sul fondo (sovrappressione, tolto l'atmosferico che agisce anche sotto) è dunque $$F_{fondo}=\rho g h\,A,$$ funzione solo di $h$ e $A$, non del volume di liquido. $\blacksquare$<br><br><b>Risoluzione del paradosso (dov'è finito il peso?).</b> Sembra violare il fatto che il fondo 'regge il peso del liquido'. La chiave è che le \emph{pareti} partecipano al bilancio verticale tramite le forze normali che esercitano sul liquido.<br>— <b>Recipiente svasato verso l'alto</b> (più largo in cima): contiene più liquido di una colonna retta, ma le pareti inclinate spingono il liquido \emph{verso il basso e verso l'interno}; questa componente verticale verso il basso non grava sul fondo — anzi, è il fondo a reggere meno del peso totale. Il peso in eccesso è scaricato... no: le pareti spingono in giù, quindi il fondo regge esattamente $\rho ghA$, e il resto del peso è bilanciato dalla reazione verticale delle pareti sul supporto.<br>— <b>Recipiente a imbuto</b> (più stretto in cima): contiene meno liquido di una colonna retta, ma le pareti spingono il liquido \emph{verso l'alto}; per reazione (terzo principio) il liquido spinge le pareti in giù, e il fondo sopporta $\rho ghA$, \emph{più} del peso del liquido effettivamente presente.<br><br><b>Significato fisico.</b> La forza sul fondo è fissata dalla pressione, cioè dall'altezza; il peso totale del liquido si ripartisce tra fondo e componenti verticali delle reazioni delle pareti. È lo stesso principio dei vasi comunicanti: il livello si pareggia perché conta la quota, non la quantità. La pressione, non la massa, governa l'idrostatica.

---

## L9

**Richiesta:** Analizza la stabilità di un corpo galleggiante: definisci il metacentro e stabilisci il criterio di stabilità rispetto alle piccole inclinazioni.

**Argomento dichiarato:** Stabilità del galleggiamento e metacentro

**Dimostrazione modello:**

<b>Le due forze in gioco.</b> Su un corpo galleggiante agiscono il peso, applicato nel <b>baricentro</b> $G$ del corpo, e la spinta di Archimede, applicata nel <b>centro di spinta</b> $B$ (baricentro del volume di fluido spostato). All'equilibrio dritto $G$ e $B$ sono sulla stessa verticale e le due forze (uguali in modulo, $P=S$) si bilanciano. <b>Cosa succede a una piccola inclinazione.</b> Se il corpo ruota di un piccolo angolo $\theta$, la forma del volume immerso cambia: da un lato si immerge di più, dall'altro emerge. Il centro di spinta $B$ si sposta verso il lato più immerso, in una nuova posizione $B'$. Il peso resta applicato in $G$ (solidale al corpo). <b>Il metacentro.</b> La verticale passante per il nuovo centro di spinta $B'$ interseca l'asse di simmetria del corpo in un punto $M$, il <b>metacentro</b>. Per piccole inclinazioni $M$ è fisso. Peso (in $G$, verso il basso) e spinta (per $B'$, verso l'alto) formano ora una \emph{coppia}, con braccio $\overline{GM}\sin\theta$. <b>Criterio di stabilità.</b><br>— Se $M$ è \emph{sopra} $G$ ($\overline{GM}>0$): la coppia è <b>raddrizzante</b>, riporta il corpo dritto → equilibrio <b>stabile</b>.<br>— Se $M$ è \emph{sotto} $G$ ($\overline{GM}<0$): la coppia \emph{amplifica} l'inclinazione → equilibrio <b>instabile</b> (ribaltamento).<br>— $M\equiv G$: indifferente. $\blacksquare$<br><br><b>Significato fisico.</b> La stabilità del galleggiamento non richiede — come l'intuito suggerirebbe — che il baricentro $G$ sia sotto il centro di spinta $B$: una nave può avere $G$ sopra $B$ ed essere stabilissima, purché il metacentro $M$ resti sopra $G$. È lo spostamento di $B$ con l'inclinazione a creare la coppia raddrizzante. L'altezza metacentrica $\overline{GM}$ è il parametro-chiave della progettazione navale: grande $\overline{GM}$ dà una nave 'dura' (raddrizza in fretta, ma rolla bruscamente); piccola $\overline{GM}$ una nave 'tenera' (rollio dolce ma vicina al ribaltamento). La zavorra bassa abbassa $G$ e aumenta la stabilità.


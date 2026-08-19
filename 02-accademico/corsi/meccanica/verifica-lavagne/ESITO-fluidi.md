# ESITO verifica di merito — pool "fluidi" (quiz orale Meccanica, prof. Pisano)

Metodo: rifatto ogni conto e ogni deduzione. Verdetto secco in testa a ogni lavagna.
Conteggio: **7 OK, 2 ERRORE** (L2, L8). Note di prosa in fondo.

---

## L1 — Legge di Stevino
**OK**

Equilibrio verticale della colonnina: $p(z)A-p(z+dz)A-\rho gA\,dz=0$ dà $dp/dz=-\rho g$; integrando da $z_0$ ($p_0$) a $z_0-h$ si ha $p-p_0=-\rho g[(z_0-h)-z_0]=\rho gh$, quindi $p=p_0+\rho gh$: box corretto, dimensionalmente $[\rho g h]=$ Pa. La spiegazione "solo la quota" (isobare orizzontali dall'equilibrio orizzontale) e il paradosso idrostatico sono corretti.

---

## L2 — Principio di Archimede
**ERRORE** (passaggio vettoriale del teorema del gradiente; box e frazione immersa corretti)

Il box $S=\rho_{fl}V_{imm}g$ e la condizione $V_{imm}/V=\rho_c/\rho_{fl}$ (galleggiamento $\rho_c<\rho_{fl}$, iceberg 10%) sono corretti. L'errore è nella riga formale. La Stevino locale è $\vec\nabla p=\rho_{fl}\vec g$ (con $\vec g$ verso il basso), esattamente come dichiarato in coda alla riga. Allora
$$\vec S=-\oint p\,d\vec A=-\int\vec\nabla p\,dV=-\int\rho_{fl}\vec g\,dV=-\rho_{fl}V_{imm}\vec g=\rho_{fl}V_{imm}g\,\hat z\quad(\text{verso l'alto}).$$
Il testo scrive invece $-\int(-\rho_{fl}\vec g)\,dV=\rho_{fl}V_{imm}\vec g$: (i) sostituisce $\vec\nabla p=-\rho_{fl}\vec g$, contraddicendo la $\vec\nabla p=\rho_{fl}\vec g$ dichiarata sulla stessa riga; (ii) il vettore risultante $\rho_{fl}V_{imm}\vec g$, con $\vec g$ diretto in basso, punta **verso il basso**, non "verso l'alto". Doppia incoerenza di segno che si trova solo rifacendo la manipolazione vettoriale.

STRINGA ESATTA da sostituire:
`$\vec S=-\oint p\,d\vec A=-\int\vec\nabla p\,dV=-\int(-\rho_{fl}\vec g)\,dV=\rho_{fl}V_{imm}\vec g$ verso l'alto, avendo usato $\vec\nabla p=\rho_{fl}\vec g$ (Stevino in forma locale).`

CON:
`$\vec S=-\oint p\,d\vec A=-\int\vec\nabla p\,dV=-\int\rho_{fl}\vec g\,dV=-\rho_{fl}V_{imm}\vec g=\rho_{fl}V_{imm}g\,\hat z$ verso l'alto, avendo usato $\vec\nabla p=\rho_{fl}\vec g$ (Stevino in forma locale, con $\vec g$ diretto verso il basso).`

---

## L3 — Teorema di Bernoulli dal teorema dell'energia
**OK**

Le tre ipotesi (incomprimibile, non viscoso, stazionario) sono dichiarate e usate dove servono: incomprimibilità per $dV_1=dV_2$ e $\rho$ costante, stazionarietà per l'invarianza del tubo interno, non viscosità per escludere lavoro dissipativo. Lavoro netto delle pressioni $(p_1-p_2)\,dV$; $dW=\Delta K+\Delta U$ dà $(p_1-p_2)dV=\tfrac12\rho\,dV(v_2^2-v_1^2)+\rho\,dV\,g(h_2-h_1)$; diviso $dV$ è $p+\tfrac12\rho v^2+\rho gh=$ cost. lungo la linea di flusso. Fattore $\tfrac12\rho v^2$ corretto; "lungo la linea di flusso" e la nota sulla perdita di carico corrette.

---

## L4 — Effetto Venturi ed efflusso di Torricelli
**OK**

Venturi ($h_1=h_2$): $p_1-p_2=\tfrac12\rho(v_2^2-v_1^2)>0$, con $v_2=v_1A_1/A_2$ dà $p_1-p_2=\tfrac12\rho v_1^2(A_1^2/A_2^2-1)$: corretto, e $A_1^2/A_2^2>1$ garantisce depressione nel restringimento. Torricelli: Bernoulli tra pelo libero e foro, $p_1=p_2=p_{atm}$ (si elidono), $v_1\approx0$ (serbatoio largo, via continuità), $h_1-h_2=h$ dà $\rho gh=\tfrac12\rho v_2^2$, quindi $v=\sqrt{2gh}$. Approssimazioni giuste e dichiarate; $[\sqrt{gh}]=$ m/s.

---

## L5 — Equazione di continuità
**OK**

$dm_1=\rho A_1v_1\,dt=dm_2=\rho A_2v_2\,dt$ in regime stazionario (nulla si accumula); semplificando $\rho,dt$: $A_1v_1=A_2v_2\equiv Q$. Portata volumetrica $[Av]=$ m$^3$/s corretta; $v\propto1/A$ corretto; forma comprimibile $\rho Av$ corretta.

---

## L6 — Formula barometrica (atmosfera isoterma)
**OK**

$dp/dz=-\rho g$ con $\rho=Mp/(RT)$ dà $dp/dz=-(Mg/RT)p$; separando, $p(z)=p_0e^{-z/H}$, $H=RT/(Mg)$. Dimensioni: $[RT/(Mg)]=(\mathrm{J\,mol^{-1}})/(\mathrm{kg\,mol^{-1}\cdot m\,s^{-2}})=$ m. Valore numerico: $8.314\cdot288/(0.029\cdot9.8)\approx8.4\ \mathrm{km}$: coerente col "circa 8 km". Identificazione $Mg/RT=mg/(k_BT)$ (fattore di Boltzmann) corretta.

---

## L7 — Spinta su una diga
**OK**

$dF=\rho gz\,(b\,dz)$; $F=\int_0^H\rho gzb\,dz=\tfrac12\rho gbH^2$; $F=p_{media}A$ con $p_{media}=\rho gH/2$ corretto. Centro di spinta: $z_CF=\int_0^H z\,\rho gzb\,dz=\rho gbH^3/3$, quindi $z_C=(H^3/3)/(H^2/2)=\tfrac23H$: nel terzo inferiore, corretto. $F\propto H^2$ e osservazioni sulla base della diga corrette. $[\rho gbH^2]=$ N.

---

## L8 — Paradosso idrostatico
**ERRORE** (risoluzione: direzioni delle forze delle pareti invertite in entrambi i casi; formule corrette)

$p_{fondo}=p_0+\rho gh$ e $F_{fondo}=\rho ghA$ sono corretti. L'errore è fisico, nella "risoluzione". Bilancio verticale sul liquido (pressione manometrica): $N_{fondo}+F_{pareti,z}-W=0\Rightarrow F_{pareti,z}=W-\rho ghA$.
- Svasato (più largo in cima): $W>\rho ghA\Rightarrow F_{pareti,z}>0$, le pareti spingono il liquido **verso l'alto** (sostengono l'eccesso), perciò il fondo regge meno del peso totale. Il testo dice "verso il basso", poi si auto-contraddice ("è il fondo a reggere meno... le pareti spingono in giù": se spingessero in giù il fondo reggerebbe di più).
- Imbuto stretto in cima: $W<\rho ghA\Rightarrow F_{pareti,z}<0$, le pareti spingono il liquido **verso il basso**, perciò il fondo regge più del peso presente. Il testo dice "verso l'alto", incompatibile con "il fondo sopporta ρghA, più del peso".

STRINGA ESATTA da sostituire (svasato):
`— <b>Recipiente svasato verso l'alto</b> (più largo in cima): contiene più liquido di una colonna retta, ma le pareti inclinate spingono il liquido \emph{verso il basso e verso l'interno}; questa componente verticale verso il basso non grava sul fondo — anzi, è il fondo a reggere meno del peso totale. Il peso in eccesso è scaricato... no: le pareti spingono in giù, quindi il fondo regge esattamente $\rho ghA$, e il resto del peso è bilanciato dalla reazione verticale delle pareti sul supporto.`

CON:
`— <b>Recipiente svasato verso l'alto</b> (più largo in cima): contiene più liquido di una colonna retta, e le pareti inclinate spingono il liquido \emph{verso l'alto e verso l'interno}; questa componente verticale verso l'alto sostiene il liquido in eccesso, così il fondo regge esattamente $\rho ghA$, cioè meno del peso totale. Il peso in eccesso è scaricato sulle pareti: per reazione il liquido spinge le pareti in giù, e quella quota di peso raggiunge il supporto attraverso le pareti, non attraverso il fondo.`

STRINGA ESATTA da sostituire (imbuto):
`— <b>Recipiente a imbuto</b> (più stretto in cima): contiene meno liquido di una colonna retta, ma le pareti spingono il liquido \emph{verso l'alto}; per reazione (terzo principio) il liquido spinge le pareti in giù, e il fondo sopporta $\rho ghA$, \emph{più} del peso del liquido effettivamente presente.`

CON:
`— <b>Recipiente a imbuto</b> (più stretto in cima): contiene meno liquido di una colonna retta, ma le pareti spingono il liquido \emph{verso il basso}; per reazione (terzo principio) il liquido spinge le pareti in su, e il fondo sopporta $\rho ghA$, \emph{più} del peso del liquido effettivamente presente.`

---

## L9 — Stabilità del galleggiamento e metacentro
**OK**

Peso in $G$, spinta in $B$; su inclinazione $\theta$ il centro di spinta va in $B'$, la verticale per $B'$ taglia l'asse in $M$ (metacentro, fisso per piccoli $\theta$). Coppia con braccio $\overline{GM}\sin\theta$ (braccio di raddrizzamento standard $GZ=\overline{GM}\sin\theta$): corretto. Criterio $\overline{GM}>0$ stabile, $<0$ instabile, $=0$ indifferente: corretto. La discussione (G può stare sopra B purché M stia sopra G; altezza metacentrica, nave dura/tenera, zavorra) è corretta.

---

## Note di prosa (non ERRORE)

- **L4**: "Lo stesso meccanismo... spiega la portanza dell'ala" è la semplificazione da manuale (Bernoulli). È canone del Focardi ma la portanza non si spiega compiutamente così; accettabile a livello del corso, tienilo come semplificazione consapevole.
- **L8**: chiamare "imbuto" un recipiente "più stretto in cima" è terminologia infelice — un imbuto è tipicamente largo in alto e stretto in basso. La geometria operativa usata (più stretto in cima) è però quella dichiarata nella parentesi, quindi il conto resta coerente con la propria definizione; solo il nome è fuorviante.

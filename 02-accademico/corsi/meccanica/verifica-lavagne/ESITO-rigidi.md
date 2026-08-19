# ESITO verifica di merito — pool "rigidi" (13 lavagne)

Revisione fisica indipendente, senza Focardi cartaceo. Ogni verdetto è motivato
da controllo di: coefficienti canonici, dimensioni, logica della derivazione,
casi limite. Nessuna asserzione è dichiarata verificata senza il conto rifatto.

---

## L1 — Teorema di Steiner
**Verdetto: OK**
Espansione $|\vec d+\vec r'_\perp|^2$ corretta; il termine lineare è $2\vec d\cdot\int\vec r'_\perp dm=2\vec d\cdot M\vec r'_{CM,\perp}=0$ perché $\vec r'_\perp$ è misurato dall'asse per il CM (definizione di CM). Passaggio-chiave giusto e non aggirato.
La conseguenza "$Md^2\ge0\Rightarrow$ asse per il CM di momento minimo" è il caso limite richiesto ed è corretta.

## L2 — Rototraslazione ed energia di rotolamento
**Verdetto: OK**
König $K=\tfrac12 Mv_{CM}^2+\tfrac12 I_{CM}\omega^2$ corretto; annullamento del termine misto giustificato ($v_{CM}\cdot M\vec v'_{CM}=0$, implicito ma valido). Vincolo $v_{CM}=\omega R$ dà $K=\tfrac12 Mv^2(1+\beta)$.
Frazioni rotazionali verificate: anello $\beta=1\to 1/2$; sfera $\beta=2/5\to(2/5)/(7/5)=2/7$. $I_{contatto}=I_{CM}+MR^2$ (Steiner) coerente.

## L3 — Gara di rotolamento sul piano inclinato
**Verdetto: OK**
Sistema traslazionale $Ma=Mg\sin\theta-f$ e rotazionale $I_{CM}\alpha=fR$ con vincolo $a=\alpha R$ danno $f=\beta Ma$ e quindi $a=g\sin\theta/(1+\beta)$. Dimensioni e logica corrette.
Classifica sfera($2/5$)>cilindro pieno($1/2$)>anello($1$) esatta; $M$ e $R$ si semplificano davvero, l'accelerazione dipende solo da $\beta$.

## L4 — Pendolo fisico e lunghezza ridotta
**Verdetto: OK**
$I\ddot\theta=-Mgd\sin\theta$, linearizzazione, $T=2\pi\sqrt{I/(Mgd)}$: coefficiente canonico corretto, dimensioni $[\sqrt{kg\,m^2/(kg\,m/s^2\,m)}]=[s]$ ok. $\ell_{rid}=I/(Md)=I_{CM}/(Md)+d>d$ giusto.
Caso limite verificato: massa concentrata nel CM $\Rightarrow I_{CM}=0$, $I=Md^2$, $T=2\pi\sqrt{d/g}$ — degenera nel pendolo semplice di lunghezza $d$.

## L5 — Momenti d'inerzia notevoli per integrazione
**Verdetto: OK**
Rifatti tutti: asta centro $\lambda L^3/12=\tfrac1{12}ML^2$; estremo via Steiner $\tfrac1{12}+M(L/2)^2=\tfrac13ML^2$; anello $MR^2$; disco $\sigma 2\pi R^4/4=\tfrac12MR^2$. Corretti.
Sfera: $I_x+I_y+I_z=3I=2\int r^2dm$, con $\int r^2dm=\rho4\pi R^5/5=\tfrac35MR^2$, quindi $I=\tfrac23\cdot\tfrac35MR^2=\tfrac25MR^2$. Passaggio $3I=2\int r^2dm$ e valore finale esatti; guscio $2/3$ citato correttamente.

## L6 — Equazione $M=I\alpha$ per asse fisso
**Verdetto: OK**
$L_z=(\sum m_i r_{i\perp}^2)\omega=I\omega$; con $I$ costante (rigido, asse fisso) $dL_z/dt=I\alpha=M_z$. Derivazione dal teorema del momento angolare corretta e completa.
Cautela finale giusta: la forma scalare vale su asse fisso/di simmetria, altrimenti $I$ è tensore e $\vec L\nparallel\boldsymbol\omega$. Notazione $M$=momento coerente dentro la lavagna.

## L7 — Energia cinetica di rotazione
**Verdetto: OK**
$K=\sum\tfrac12 m_i(\omega r_{i\perp})^2=\tfrac12 I\omega^2$ corretto; estensione via König a $\tfrac12 Mv_{CM}^2+\tfrac12 I_{CM}\omega^2$ coerente con L2. Nessun salto logico.
Dimensioni $[I\omega^2]=[kg\,m^2\cdot s^{-2}]=[J]$ ok. Ridondante con L2/L3 nel merito ma internamente corretta.

## L8 — Rotolamento puro e attrito statico
**Verdetto: OK**
Vincolo $v_{CM}=\omega R$, $a_{CM}=\alpha R$ corretto. Potenza dell'attrito $P=\vec f_s\cdot\vec v_{contatto}=0$ perché il punto di contatto ha velocità istantanea nulla: argomento giusto e centrale.
$f_s$ come reazione di vincolo entro $0\le f_s\le\mu_s N$, determinata dalle equazioni e non da $\mu N$: fisica corretta, distinzione statico/dinamico esatta.

## L9 — $\vec L=I\vec\omega$ e tensore d'inerzia
**Verdetto: OK**
$\vec L=\sum m_i\vec r_i\times(\boldsymbol\omega\times\vec r_i)=\sum m_i[r_i^2\boldsymbol\omega-\vec r_i(\vec r_i\cdot\boldsymbol\omega)]$ (BAC-CAB) corretto; è l'applicazione lineare $\vec L=\mathbf I\boldsymbol\omega$.
Su asse di simmetria (che è asse principale) i termini trasversali si cancellano e $\vec L=I\boldsymbol\omega$; fuori dagli assi principali $\vec L\nparallel\boldsymbol\omega$. Argomento di simmetria qualitativo ma corretto per un asse di simmetria.

## L10 — Statica del corpo rigido
**Verdetto: OK**
$\sum\vec F=0,\ \sum\vec M=0$ dalle due cardinali; $6$ scalari nello spazio, $3$ nel piano: giusto. Trasporto del polo $\vec M_{O'}=\vec M_O+(\vec r_O-\vec r_{O'})\times\vec F_{tot}$ rifatto e confermato nei segni.
Se $\vec F_{tot}=0$ allora $\vec M_{O'}=\vec M_O$: indipendenza dal polo dimostrata correttamente, non assunta.

## L11 — Rotolamento: energia e condizione di attrito
**Verdetto: OK**
$Mgh=\tfrac12 Mv^2(1+\beta)\Rightarrow v=\sqrt{2gh/(1+\beta)}$ corretto, dimensioni ok. $f_s=\beta Ma=\tfrac{\beta}{1+\beta}Mg\sin\theta$ coerente con L3.
Condizione $f_s\le\mu_s Mg\cos\theta\Rightarrow\mu_{min}=\tfrac{\beta}{1+\beta}\tan\theta$: derivazione e risultato canonico esatti.

## L12 — Precessione della trottola
**Verdetto: OK**
$\vec M_O=(d\hat u)\times(-Mg\hat z)=Mgd(\hat z\times\hat u)$, modulo $Mgd\sin\theta$, ortogonale a $\vec L$: corretto. Da $dL^2/dt=2\vec L\cdot\vec M_O=0$ modulo e inclinazione fissi.
$d\phi=|d\vec L|/(L\sin\theta)=Mgd\,dt/(I\omega)\Rightarrow\Omega_p=Mgd/(I\omega)$, indipendente da $\theta$: formula canonica esatta. Ipotesi giroscopica dichiarata correttamente ($I_\perp\Omega_p\sin\theta\ll I\omega$, nutazione, attrito trascurati); analogia di Larmor $\omega_L=\gamma B$ corretta.

## L13 — Centro di percussione
**Verdetto: OK**
Conservazione di $L_O$ perché $\vec R$ della cerniera ha braccio nullo su $O$; quantità di moto non conservata per risultante di $\vec R\neq0$: corretto. $L_O$: $mvb=(I+mb^2)\Omega$ (proiettile conficcato) esatto.
Centro di percussione: $J+J_O=M\Omega d$ e $Jb=I\Omega$ danno $J_O=\Omega(Md-I/b)=0\iff b=I/(Md)$. Verificato $b=d+k^2/d>d$; asta a un estremo $I=M\ell^2/3,\ d=\ell/2\Rightarrow b=\tfrac23\ell$ (rifatto). Coincidenza con la lunghezza ridotta del pendolo composto corretta.

---

## Riepilogo

- **OK: 13** — L1, L2, L3, L4, L5, L6, L7, L8, L9, L10, L11, L12, L13
- **DUBBIO: 0**
- **ERRORE: 0**

Tutti i coefficienti canonici (asta $1/12$ e $1/3$, disco/cilindro $1/2$, anello $1$,
sfera piena $2/5$, guscio $2/3$), Steiner, il periodo del pendolo fisico
$T=2\pi\sqrt{I/(Mgd)}$, l'energia $\tfrac12 I\omega^2$ e la precessione
$\Omega_p=Mgd/(I\omega)$ sono corretti. Tutti i risultati finali sono
dimensionalmente coerenti. Le derivazioni non contengono salti logici né
petizioni di principio, e i casi limite richiesti (pendolo fisico → pendolo
semplice; Steiner → minimo sul CM) degenerano correttamente. Nessun risultato
dipende da una convenzione specifica del Focardi: la copia cartacea non è
necessaria per nessuna delle 13 lavagne. L'incertezza "da ricontrollare sul
Focardi" può essere rimossa su tutto il pool.

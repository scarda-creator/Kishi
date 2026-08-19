# ESITO verifica — pool "dinamica" (principi della dinamica)

Esame orale Meccanica, prof. Pisano, Sapienza (~10 settembre 2026).
Metodo: conti rifatti da zero, controllo di versi/segni, coerenza dimensionale,
statuto logico (definizione vs legge sperimentale vs teorema derivato).

Conteggio: **8 OK, 0 DUBBIO, 0 ERRORE.** Pool pulito.

---

## L1 — Teorema dell'impulso — OK

Conto rifatto: da $\vec F=d\vec p/dt$, moltiplicando per $dt$ e integrando,
$\int_{t_1}^{t_2}\vec F\,dt=\int_{\vec p_1}^{\vec p_2}d\vec p=\vec p_2-\vec p_1$;
il primo membro è per definizione $\vec J$, quindi $\vec J=\Delta\vec p$. Dimensioni
$[\vec J]=\mathrm{N\cdot s}=\mathrm{kg\,m/s}=[\vec p]$: coerente. Forza media
$\langle\vec F\rangle=\Delta\vec p/\Delta t$ ben posta; l'argomento sulle forze
ordinarie (impulso $\sim F\Delta t$ trascurabile nel $\Delta t$ brevissimo)
è corretto. Statuto: è un teorema, ed è derivato come tale, non spacciato per definizione.

## L2 — Conservazione della quantità di moto — OK

Conto rifatto: sommando $d\vec p_i/dt=\vec F_i^{est}+\sum_{j\neq i}\vec F_{ij}$ su
$i$, la doppia somma interna si raggruppa in coppie $\vec F_{ij}+\vec F_{ji}$ che
per la forma **debole** ($\vec F_{ij}=-\vec F_{ji}$) si annullano una a una,
lasciando $d\vec P/dt=\vec F^{est}_{tot}$. Corretta l'attribuzione: debole basta per
la risultante (nessuna ipotesi sulla direzione), forte serve per il momento
angolare. Nessun errore di segno nelle coppie.

## L3 — $\vec F=d\vec p/dt$ contro $\vec F=m\vec a$ — OK

Leibniz: $\vec F=\dfrac{d(m\vec v)}{dt}=m\vec a+\vec v\dot m$, corretto; $\dot m=0$
recupera $\vec F=m\vec a$. Verificata la Tsiolkovsky rifacendo il bilancio di
quantità di moto sul sistema razzo+gas: con $\vec u=\vec v_{gas}-\vec v_{razzo}$
(velocità relativa del gas espulso, diretta all'indietro) e $\dot m<0$, si ottiene
$m\,d\vec v/dt=\vec F_{est}+\vec u\,\dot m$; il termine $\vec u\,\dot m$ ha segno
positivo lungo il moto (all'indietro × negativo = in avanti): è la spinta, verso
corretto. Dimensioni $[\vec u\,\dot m]=\mathrm{(m/s)(kg/s)}=\mathrm{N}$: coerente.

## L4 — Ruolo logico dei tre principi — OK

Statuto corretto e non ridondante: il primo come affermazione di **esistenza** di
un riferimento inerziale (non caso particolare del secondo); il secondo valido in
riferimento inerziale, che definisce la massa inerziale; il terzo nelle due forme
con l'aggancio giusto (debole→quantità di moto, forte→momento angolare). L'argomento
di indipendenza è corretto: senza il primo, $\vec F=m\vec a$ non ha dominio di
validità. Nessuna forza in gioco, niente da controllare sui segni.

## L5 — Teorema del momento angolare del punto — OK

Conto rifatto con Leibniz sul prodotto vettoriale (ordine preservato):
$\dfrac{d\vec L}{dt}=\vec v\times m\vec v+\vec r\times\dfrac{d\vec p}{dt}$; il primo
termine è nullo perché $\vec v\parallel m\vec v$, il secondo dà $\vec r\times\vec F=\vec M$.
Dimensioni $[\vec L]=\mathrm{kg\,m^2/s}$, $[\vec M]=[d\vec L/dt]=\mathrm{kg\,m^2/s^2}$:
coerenti. Corretta la condizione di conservazione ($\vec M=0$ se $\vec F=0$ o
$\vec F\parallel\vec r$). Il teorema è derivato, non assunto.

## L6 — Forza centrale: moto piano e $\vec L$ costante — OK

$\vec M=\vec r\times f(r)\hat r=f(r)(\vec r\times\hat r)=\vec 0$ perché
$\vec r\parallel\hat r$: corretto. Da $d\vec L/dt=0$ segue $\vec L$ fisso, quindi
$\vec r\perp\vec L$ costante → moto piano. Verificata la velocità areolare in polari:
$\vec r\times\vec v=r^2\dot\theta\,\hat z$ dà $|\vec L|=mr^2\dot\theta$, e
$dA/dt=\tfrac12 r^2\dot\theta=|\vec L|/(2m)$; dimensioni $\mathrm{m^2/s}$ su entrambi
i membri. Corretta l'osservazione che la seconda legge di Keplero vale per ogni
forza centrale perché discende solo da $\vec L=$ cost. (Nota: $f(r)\hat r$ è sempre
conservativa, potenziale centrale rotazionalmente invariante, quindi anche il
richiamo a Noether nel commento è legittimo.)

## L7 — Integrazione con forza costante o $\vec F(t)$ — OK

Conto rifatto: da $m\,d\vec v/dt=\vec F(t)$ una prima quadratura dà
$\vec v(t)=\vec v_0+\tfrac1m\int_0^t\vec F\,dt'=\vec v_0+\vec J(t)/m$; una seconda
$\vec r(t)=\vec r_0+\int_0^t\vec v\,dt'$. Nel caso costante,
$\vec v=\vec v_0+(\vec F/m)t$ e $\vec r=\vec r_0+\vec v_0 t+\tfrac12(\vec F/m)t^2$:
moto uniformemente accelerato, segni corretti. Le due costanti $\vec r_0,\vec v_0$
sono le condizioni iniziali; corretto il limite di validità (fallisce se $\vec F$
dipende da $\vec r$ o $\vec v$).

## L8 — Impulso angolare — OK

$\vec J_L\equiv\int_{t_1}^{t_2}\vec M\,dt$; da $\vec M=d\vec L/dt$, moltiplicando per
$dt$ e integrando, $\int\vec M\,dt=\vec L_2-\vec L_1=\Delta\vec L$, quindi
$\vec J_L=\Delta\vec L$. Dimensioni $[\vec J_L]=\mathrm{kg\,m^2/s^2\cdot s}=\mathrm{kg\,m^2/s}=[\vec L]$:
coerente. Corretto l'analogo rotazionale col teorema dell'impulso e la condizione
di conservazione nell'urto ($\vec M$ impulsivo nullo rispetto al polo → $\Delta\vec L=0$).

---

## Note di prosa

Nessuna. Le formulazioni discorsive sono corrette anche nei dettagli
(inclusi il commento su Tsiolkovsky in L3 e il richiamo a Noether in L6, che
reggono al controllo).

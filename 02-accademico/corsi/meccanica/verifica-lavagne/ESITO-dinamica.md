# ESITO verifica — pool "dinamica" (principi della dinamica)

Esame orale Meccanica, prof. Pisano, ~10 settembre 2026. Verifica di merito fisico
delle 8 dimostrazioni-lavagna. Conti rifatti, versi controllati.

**Conteggio: 8 OK, 0 DUBBIO, 0 ERRORE.** Pool genuinamente pulito.

---

## L1 — Teorema dell'impulso e forze impulsive — OK

Derivazione da $\vec F=d\vec p/dt$: moltiplico per $dt$, integro tra $t_1$ e $t_2$,
$\int\vec F\,dt=\int_{\vec p_1}^{\vec p_2}d\vec p=\vec p_2-\vec p_1=\Delta\vec p$. Esatto.
Statuto corretto: è teorema derivato dal secondo principio, non definizione. Forza media
$\langle\vec F\rangle=\Delta\vec p/\Delta t$ dimensionalmente e concettualmente corretta;
argomento sul trascurare le forze ordinarie (impulso $\sim F\Delta t\to 0$) valido.

## L2 — Conservazione della quantità di moto dal terzo principio — OK

Somma dei secondi principi: $d\vec P/dt=\sum\vec F_i^{est}+\sum_{i}\sum_{j\neq i}\vec F_{ij}$.
Le coppie $\vec F_{ij}+\vec F_{ji}=\vec 0$ per la forma debole $\vec F_{ij}=-\vec F_{ji}$:
la doppia somma svanisce, resta $d\vec P/dt=\vec F^{est}_{tot}$. Esatto.
Statuto logico corretto e centrato sulla richiesta: forma **debole** sufficiente per la
risultante ($\vec P$), forma **forte** necessaria per il momento angolare. È la distinzione
che l'esame chiede.

## L3 — Secondo principio: F=dp/dt contro F=ma — OK

Leibniz su $\vec p=m\vec v$: $\vec F=m\dfrac{d\vec v}{dt}+\vec v\dfrac{dm}{dt}=m\vec a+\vec v\,\dot m$.
Esatto; per $\dot m=0$ si recupera $m\vec a$. Verificato il verso della spinta nell'equazione
del razzo, punto sensibile del pool: rifatto il bilancio di quantità di moto
$\vec F_{ext}\,dt=m\,d\vec v-\vec u\,dm$ (massa espulsa $-dm>0$ con velocità assoluta
$\vec v+\vec u$), da cui $m\,\dot{\vec v}=\vec F_{est}+\vec u\,\dot m$; con $\vec u$ diretta
all'indietro e $\dot m<0$ la spinta risulta in avanti. Segno e verso corretti, convenzione
coerente ($\vec u$ = velocità relativa dei gas). Corretto anche il rilievo che
$\vec F=d(m\vec v)/dt$ applicata al solo corpo è sbagliata: la massa uscente porta con sé
la propria quantità di moto.

## L4 — Ruolo logico dei tre principi — OK

Primo principio dato come **affermazione di esistenza** del riferimento inerziale, non come
corollario del secondo: è lo statuto richiesto. Secondo in $\vec F=d\vec p/dt$ (con $\to m\vec a$
se $m$ cost) valido nel riferimento inerziale, con la massa inerziale come costante di
proporzionalità. Terzo in forma debole/forte agganciato alle rispettive conservazioni.
Argomento di non-ridondanza corretto: il secondo presuppone l'arena che il primo garantisce;
il terzo aggiunge la reciprocità non deducibile da $m\vec a$ sul singolo corpo. Nessuna
definizione spacciata per teorema.

## L5 — Teorema del momento angolare del punto — OK

$\vec L=\vec r\times m\vec v$, $\vec M=\vec r\times\vec F$. Leibniz sul prodotto vettoriale
(ordine dei fattori preservato): $d\vec L/dt=\vec v\times m\vec v+\vec r\times d\vec p/dt$;
primo termine nullo ($\vec v\parallel m\vec v$), secondo $=\vec r\times\vec F=\vec M$. Esatto.
Conservazione discussa correttamente: $\vec M=\vec 0$ se $\vec F=\vec 0$ **oppure** $\vec F\parallel\vec r$
(centrale) — il caso ricco è segnalato.

## L6 — Forza centrale: moto piano e L costante — OK

$\vec F=f(r)\hat r\Rightarrow\vec M=f(r)(\vec r\times\hat r)=\vec 0$ ($\vec r\parallel\hat r$).
Quindi $\vec L$ costante e, essendo fisso, $\vec r\perp\vec L$ sempre: moto piano. Rifatta la
velocità areolare in polari: $\vec v=\dot r\,\hat r+r\dot\theta\,\hat\theta$, da cui
$\vec r\times\vec v=r^2\dot\theta\,\hat z$ e $|\vec L|=mr^2\dot\theta$; dunque
$dA/dt=\tfrac12 r^2\dot\theta=|\vec L|/(2m)=$ cost. Esatto. Corretta la portata: seconda legge
di Keplero valida per ogni forza centrale, discende dalla sola conservazione di $\vec L$.

## L7 — Integrazione con forza costante o dipendente dal tempo — OK

$m\,d\vec v/dt=\vec F(t)$: prima quadratura $\vec v(t)=\vec v_0+\tfrac1m\int_0^t\vec F\,dt'=\vec v_0+\vec J(t)/m$
(riappare l'impulso); seconda $\vec r(t)=\vec r_0+\int_0^t\vec v\,dt'$. Forza costante:
$\vec v=\vec v_0+(\vec F/m)t$, $\vec r=\vec r_0+\vec v_0 t+\tfrac12(\vec F/m)t^2$. Esatto,
coefficiente $\tfrac12$ corretto. Corretto il limite di validità: lo schema per quadrature
regge solo finché $\vec F$ non dipende da $\vec r$ o $\vec v$.

## L8 — Impulso angolare — OK

$\vec J_L\equiv\int_{t_1}^{t_2}\vec M\,dt$; da $\vec M=d\vec L/dt$, moltiplico per $dt$ e integro:
$\int\vec M\,dt=\int_{\vec L_1}^{\vec L_2}d\vec L=\vec L_2-\vec L_1=\Delta\vec L$. Esatto,
analogo rotazionale esatto del teorema dell'impulso. Corretto il corollario: se il momento
delle forze impulsive rispetto al polo è nullo, $\Delta\vec L=\vec 0$ e $\vec L$ si conserva
nell'urto.

---

## Note di prosa (non ERRORE)

- **L8**, terminologia. Il testo chiama $\vec J_L=\int\vec M\,dt$ anche "momento dell'impulso".
  L'uguaglianza esatta tra impulso angolare $\int\vec M\,dt$ e "momento dell'impulso"
  $\vec r\times\int\vec F\,dt=\vec r\times\vec J$ vale solo quando $\vec r$ è costante durante
  l'intervallo — ipotesi legittima nel limite impulsivo ($\Delta t\to 0$, la posizione non
  cambia), che è proprio il contesto della lavagna. La definizione primaria e sempre valida
  resta $\vec J_L\equiv\int\vec M\,dt$; il teorema $\vec J_L=\Delta\vec L$ è esatto in ogni caso.
  Nessuna correzione necessaria, solo consapevolezza della sfumatura se in orale si spinge
  sull'equivalenza dei due nomi.

- **L3**, convenzione. La forma dell'equazione del razzo $m\dot{\vec v}=\vec F_{est}+\vec u\,\dot m$
  con $\vec u$ velocità relativa dei gas e $\dot m<0$ è la convenzione standard (Focardi
  coerente). Il segno "+" davanti alla spinta è corretto proprio perché il segno negativo è
  assorbito da $\dot m<0$: vale la pena dirlo esplicitamente all'orale per non dare
  l'impressione che la spinta punti all'indietro.

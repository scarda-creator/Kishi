# ESITO verifica di merito — pool "sistemi di punti materiali"

Verifica fisica delle 12 dimostrazioni-lavagna. Metodo: risultati canonici e loro
fattori, coerenza dimensionale, correttezza logica (forma del terzo principio),
casi limite. Ogni conto rifatto a mano.

**Conteggi: 12 OK · 0 DUBBIO · 0 ERRORE.**

---

## L1 — Teorema del moto del CM — OK

Definizione $\vec r_{CM}=\frac1M\sum_i m_i\vec r_i$ e derivate corrette. Somma del
secondo principio: la doppia somma delle interne si raggruppa in coppie
$\vec F_{ij}+\vec F_{ji}=0$ per il terzo principio in **forma debole** — invocata
correttamente qui (per $\vec P$ non serve la collinearità). Box $M\vec a_{CM}=\vec F_{ext}$
dimensionalmente $[\text{kg}\cdot\text{m/s}^2]=[\text{N}]$: corretto. Corollario
$\vec F_{ext}=0\Rightarrow\vec P$ conservata: corretto.

## L2 — Primo teorema di König — OK

$\vec v_i=\vec v_{CM}+\vec v'_i$, quadrato $v_{CM}^2+2\vec v_{CM}\!\cdot\!\vec v'_i+v'^2_i$.
Termine misto $=\vec v_{CM}\cdot\sum_i m_i\vec v'_i$ (il $\tfrac12$ e il $2$ si elidono
correttamente); $\sum_i m_i\vec v'_i=M\vec v'_{CM}=0$ per definizione di CM, quindi si
annulla. Restano $\tfrac12 Mv_{CM}^2+K'$. Logica pulita, König **dimostrato** non asserito.

## L3 — Urto elastico 1D — OK

Trucco: $m_1(v_1-v'_1)=m_2(v'_2-v_2)$ e $m_1(v_1^2-v'^2_1)=m_2(v'^2_2-v_2^2)$; il
rapporto con $a^2-b^2=(a-b)(a+b)$ dà $v_1+v'_1=v_2+v'_2$, cioè inversione della velocità
relativa ($e=1$). Formule finali standard verificate. Casi limite ($v_2=0$): $m_1=m_2\to v'_1=0,v'_2=v_1$;
$m_2\to\infty\to v'_1=\frac{m_1-m_2}{m_1+m_2}v_1\to-v_1,\ v'_2\to0$; $m_1\gg m_2\to v'_2=\frac{2m_1}{m_1+m_2}v_1\to2v_1$.
Tutti corretti.

## L4 — Teorema del momento angolare e ruolo del polo — OK

$\frac{d\vec L}{dt}=\sum\vec v_i\times m_i\vec v_i+\sum\vec r_i\times m_i\vec a_i$, primo
termine nullo. Coppia interna $(\vec r_i-\vec r_j)\times\vec F_{ij}$, annulla se
$\vec F_{ij}\parallel(\vec r_i-\vec r_j)$: **forma forte** invocata correttamente (qui serve,
a differenza di L1). Polo mobile: rifatta la derivazione,
$\frac{d\vec L_Q}{dt}=\vec M_{ext}^Q-\vec v_Q\times\vec P$ (il termine viene da
$-\vec v_Q\times\sum m_i\vec v_i$); per $Q=CM$, $\vec v_{CM}\times M\vec v_{CM}=0$: corretto.

## L5 — Le due equazioni cardinali — OK

Prima cardinale con forma **debole**, seconda con forma **forte**: la distinzione è quella
giusta ed è esplicitata. Box $\frac{d\vec P}{dt}=\vec F_{ext}$ e $\frac{d\vec L}{dt}=\vec M_{ext}$
corretti. Nessun anello logico saltato.

## L6 — Secondo teorema di König — OK

Espansione di $\vec L=\sum(\vec r_{CM}+\vec r'_i)\times m_i(\vec v_{CM}+\vec v'_i)$ in
quattro termini: primo $\vec r_{CM}\times M\vec v_{CM}$; due misti nulli perché
$\sum m_i\vec v'_i=0$ e $\sum m_i\vec r'_i=0$; ultimo $\vec L'$. Verificato termine per
termine, tutti i fattori tornano.

## L7 — Conservazione di P e L per sistema isolato — OK

$\vec F_{ext}=0,\vec M_{ext}=0\Rightarrow\vec P,\vec L$ costanti. Ipotesi distinte
correttamente: forma debole per $\vec P$, forma forte più polo fisso/CM per $\vec L$.
Corretto.

## L8 — Urto completamente anelastico — OK

$\vec v'=\vec v_{CM}$ corretto. Via König: $\tfrac12 Mv_{CM}^2$ bloccata da $\vec P$,
$K'\to0$. Rifatto il calcolo di $K'$ nel CM: $\vec u_1=\frac{m_2}{M}(\vec v_1-\vec v_2)$,
$\vec u_2=-\frac{m_1}{M}(\vec v_1-\vec v_2)$, da cui
$K'=\tfrac12\frac{m_1m_2^2+m_2m_1^2}{M^2}(\vec v_1-\vec v_2)^2=\tfrac12\frac{m_1m_2}{M}(\vec v_1-\vec v_2)^2=\tfrac12\mu\,v_{rel}^2$.
Box $|\Delta K|=\tfrac12\frac{m_1m_2}{m_1+m_2}(\vec v_1-\vec v_2)^2$ corretto; caso
$\vec v_1=\vec v_2\Rightarrow\Delta K=0$ verificato. Forma $\tfrac12\mu v_{rel}^2$ confermata.

## L9 — Urto elastico nel sistema del CM — OK

$m_1\vec u_1+m_2\vec u_2=0$; da questa più conservazione di $K$ segue
$u'^2_1=u^2_1$ (rifatto: $K=\tfrac12 m_1u_1^2\frac{m_1+m_2}{m_2}$, invariante $\Rightarrow$
moduli invarianti). Caso 1D: $\vec u'_i=-\vec u_i$, $v'_i=2v_{CM}-v_i$; sostituendo
$v_{CM}$ si riottiene $v'_1=\frac{m_1-m_2}{m_1+m_2}v_1+\frac{2m_2}{m_1+m_2}v_2$. Verificato.

## L10 — Il CM come polo e riferimento privilegiato — OK

Riepilogo dei tre privilegi (dinamica disaccoppiata, separazione di König, teorema del
momento angolare con CM accelerato). Ogni sotto-risultato coincide con quelli già
verificati in L1, L2/L6, L4. La radice comune $\sum m_i\vec r'_i=0$ è quella corretta.

## L11 — Equazione del razzo di Tsiolkovsky — OK

Bilancio $mv=(m+dm)(v+dv)+(-dm)(v-u)$; espanso a primo ordine (scartato $dm\,dv$):
$mv+m\,dv+v\,dm-v\,dm+u\,dm=mv\Rightarrow m\,dv+u\,dm=0$. Il gas espulso ha massa
$-dm>0$ a velocità $v-u$: segno corretto. Integrazione
$\Delta v=-u\int_{m_0}^{m_f}\frac{dm}{m}=u\ln\frac{m_0}{m_f}$ corretta. Termine gravità
$m\,dv=-u\,dm-mg\,dt$ corretto.

## L12 — Due corpi: massa ridotta e separazione — OK

$M\ddot{\mathbf R}=0$; $\ddot{\mathbf r}=(\frac1{m_1}+\frac1{m_2})\mathbf F_{12}=\frac1\mu\mathbf F_{12}$
con $\frac1{m_1}+\frac1{m_2}=\frac{m_1+m_2}{m_1m_2}=\frac1\mu$: corretto. Inversione
$\mathbf r_1=\mathbf R+\frac{m_2}{M}\mathbf r$, $\mathbf r_2=\mathbf R-\frac{m_1}{M}\mathbf r$
verificata. Rifatto $T$: termini misti $\frac{m_1m_2}{M}\dot{\mathbf R}\!\cdot\!\dot{\mathbf r}$
si elidono, coefficiente di $\dot{\mathbf r}^2$ è $\frac{m_1m_2}{M^2}(m_1+m_2)=\mu$, quindi
$T=\tfrac12 M\dot{\mathbf R}^2+\tfrac12\mu\dot{\mathbf r}^2$: corretto; idem $\mathbf L$.
Kepler: $\ddot{\mathbf r}=-\frac{G(m_1+m_2)}{r^2}\hat{\mathbf r}$ e
$T^2=\frac{4\pi^2 a^3}{G(m_1+m_2)}$ corretti. Numeri: Sole-Terra $\sim3\cdot10^{-6}$;
idrogeno $\mu=m_e/(1+m_e/m_p)$, correzione $m_e/m_p=1/1836\simeq5{,}4\cdot10^{-4}$: corretti.

---

## Correzioni da applicare

Nessuna. Il pool non contiene errori: tutti i risultati in box, i passaggi intermedi
e i casi limite sono verificati.

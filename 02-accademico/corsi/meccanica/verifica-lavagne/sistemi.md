# Lavagne del pool: sistemi

Ogni voce: la richiesta d'esame e la dimostrazione modello da verificare.

---

## L1

**Richiesta:** Definisci il centro di massa e dimostra il teorema $\vec F_{ext}=M\vec a_{CM}$, spiegando perché le forze interne non contribuiscono.

**Argomento dichiarato:** Teorema del moto del centro di massa

**Dimostrazione modello:**

<b>Definizione.</b> Per un sistema di $N$ particelle di massa totale $M=\sum_i m_i$, il centro di massa è $$\vec r_{CM}=\frac{1}{M}\sum_i m_i\vec r_i.$$ Derivando due volte: $\vec v_{CM}=\frac1M\sum_i m_i\vec v_i$, $\vec a_{CM}=\frac1M\sum_i m_i\vec a_i$.<br><br><b>Dimostrazione.</b> Il secondo principio per la $i$-esima particella distingue forze esterne e interne: $$m_i\vec a_i=\vec F_i^{\,ext}+\sum_{j\neq i}\vec F_{ij}.$$ Sommo su tutte le particelle: $$\sum_i m_i\vec a_i=\sum_i\vec F_i^{\,ext}+\sum_i\sum_{j\neq i}\vec F_{ij}.$$ <b>Le forze interne si annullano.</b> La doppia somma si raggruppa in coppie $\vec F_{ij}+\vec F_{ji}$; per il terzo principio (forma debole) $\vec F_{ij}=-\vec F_{ji}$, quindi ogni coppia è nulla e l'intera doppia somma svanisce. <b>Il primo membro è $M\vec a_{CM}$</b> per definizione. Resta: $$\boxed{\ M\vec a_{CM}=\vec F_{ext}\ }.$$ <b>Significato.</b> Il CM si muove come un unico punto materiale di massa $M$ soggetto alla sola risultante delle forze esterne. Le forze interne — comunque violente (esplosioni, urti fra le parti) — non ne alterano il moto: possono cambiare le singole traiettorie e l'energia interna, mai il moto del CM. Corollario: se $\vec F_{ext}=0$, $\vec a_{CM}=0$ e $\vec P=M\vec v_{CM}$ si conserva. $\blacksquare$

---

## L2

**Richiesta:** Enuncia e dimostra il primo teorema di König $K=\tfrac12 M v_{CM}^2+K'$, e spiega perché il termine misto si annulla.

**Argomento dichiarato:** Primo teorema di König

**Dimostrazione modello:**

<b>Enunciato.</b> L'energia cinetica totale di un sistema, misurata in un riferimento inerziale, è la somma dell'energia cinetica di traslazione del centro di massa (come se tutta la massa fosse concentrata lì) e dell'energia cinetica del moto rispetto al centro di massa: $$K=\tfrac12 M v_{CM}^2+K',\qquad K'=\tfrac12\sum_i m_i v'^2_i.$$ <b>Dimostrazione.</b> Scrivo la velocità di ogni particella come somma della velocità del CM e della velocità \emph{relativa al CM}: $$\vec v_i=\vec v_{CM}+\vec v'_i.$$ Sostituisco nell'energia cinetica ed espando il quadrato: $$K=\tfrac12\sum_i m_i(\vec v_{CM}+\vec v'_i)^2=\tfrac12\sum_i m_i\Big(v_{CM}^2+2\,\vec v_{CM}\cdot\vec v'_i+v'^2_i\Big).$$ Separo i tre contributi: $$K=\underbrace{\tfrac12 v_{CM}^2\sum_i m_i}_{=\,\frac12 M v_{CM}^2}+\underbrace{\vec v_{CM}\cdot\sum_i m_i\vec v'_i}_{\text{termine misto}}+\underbrace{\tfrac12\sum_i m_i v'^2_i}_{=\,K'}.$$ <b>Il termine misto si annulla.</b> La quantità $\sum_i m_i\vec v'_i$ è la quantità di moto totale del sistema \emph{calcolata nel riferimento del CM}. Ma in quel riferimento il CM è, per definizione, in quiete: $\vec v'_{CM}=0$, quindi $$\sum_i m_i\vec v'_i=M\vec v'_{CM}=\vec 0.$$ Il termine misto è nullo (è il fattore $\vec v_{CM}$ moltiplicato per zero). Resta: $$K=\tfrac12 M v_{CM}^2+K'.\qquad\blacksquare$$ <b>Significato.</b> Il moto complicato di un sistema si scinde in due pezzi indipendenti: la traslazione del CM e il moto interno (rotazioni, vibrazioni) visto dal CM. È la scelta del CM come riferimento — l'unico in cui $\vec P'=0$ — a rendere la scomposizione pulita, senza accoppiamento tra i due moti.

---

## L3

**Richiesta:** Ricava le velocità finali di un urto elastico unidimensionale imponendo le conservazioni, e discuti i casi limite (masse uguali, bersaglio di massa infinita).

**Argomento dichiarato:** Urto elastico 1D: velocità finali e casi limite

**Dimostrazione modello:**

<b>Le due conservazioni.</b> Per l'urto elastico 1D (bersaglio con velocità $v_2$): $$m_1 v_1+m_2 v_2=m_1 v'_1+m_2 v'_2\quad(\vec P),$$ $$\tfrac12 m_1 v_1^2+\tfrac12 m_2 v_2^2=\tfrac12 m_1 v'^2_1+\tfrac12 m_2 v'^2_2\quad(K).$$ <b>Trucco algebrico.</b> Riscrivo entrambe raccogliendo per massa: $$m_1(v_1-v'_1)=m_2(v'_2-v_2),$$ $$m_1(v_1^2-v'^2_1)=m_2(v'^2_2-v_2^2).$$ Divido la seconda per la prima e uso $a^2-b^2=(a-b)(a+b)$: $$v_1+v'_1=v_2+v'_2\ \Longrightarrow\ v_1-v_2=-(v'_1-v'_2).$$ La velocità relativa si \emph{inverte} conservando il modulo (è $e=1$). <b>Soluzione.</b> Mettendo a sistema questa con la conservazione di $\vec P$: $$v'_1=\frac{m_1-m_2}{m_1+m_2}\,v_1+\frac{2m_2}{m_1+m_2}\,v_2,\qquad v'_2=\frac{2m_1}{m_1+m_2}\,v_1+\frac{m_2-m_1}{m_1+m_2}\,v_2.$$ <b>Casi limite</b> (bersaglio fermo, $v_2=0$):<br>— <b>Masse uguali</b> ($m_1=m_2$): $v'_1=0,\ v'_2=v_1$. Scambio completo: il proiettile si ferma, il bersaglio riparte con tutta la velocità (biliardo).<br>— <b>Bersaglio infinitamente massivo</b> ($m_2\to\infty$): $v'_1=-v_1,\ v'_2=0$. Il proiettile rimbalza indietro con velocità invariata in modulo, il muro resta fermo (rimbalzo elastico contro una parete).<br>— <b>Proiettile molto più pesante</b> ($m_1\gg m_2$): $v'_1\approx v_1$, $v'_2\approx 2v_1$. Il proiettile prosegue quasi indisturbato, il bersaglio leggero schizza via a velocità doppia. $\blacksquare$

---

## L4

**Richiesta:** Enuncia il teorema del momento angolare per un sistema, $d\vec L/dt=\vec M_{ext}$, spiega perché i momenti interni si annullano e perché il centro di massa è un polo privilegiato anche se accelerato.

**Argomento dichiarato:** Teorema del momento angolare e ruolo del polo

**Dimostrazione modello:**

<b>Definizione e teorema.</b> Rispetto a un polo $O$ fisso in un riferimento inerziale, il momento angolare totale è $\vec L=\sum_i\vec r_i\times m_i\vec v_i$. Derivando: $$\frac{d\vec L}{dt}=\sum_i\vec v_i\times m_i\vec v_i+\sum_i\vec r_i\times m_i\vec a_i.$$ Il primo termine è nullo ($\vec v_i\times\vec v_i=0$). Nel secondo uso $m_i\vec a_i=\vec F_i^{ext}+\sum_j\vec F_{ij}$: $$\frac{d\vec L}{dt}=\sum_i\vec r_i\times\vec F_i^{ext}+\sum_i\sum_{j\neq i}\vec r_i\times\vec F_{ij}.$$ <b>I momenti interni si annullano.</b> Raggruppo la coppia $(i,j)$: $$\vec r_i\times\vec F_{ij}+\vec r_j\times\vec F_{ji}=(\vec r_i-\vec r_j)\times\vec F_{ij},$$ avendo usato $\vec F_{ji}=-\vec F_{ij}$. Questo si annulla se $\vec F_{ij}$ è \emph{parallela} a $\vec r_i-\vec r_j$, cioè diretta lungo la congiungente: è la forma \textbf{forte} del terzo principio. Allora: $$\frac{d\vec L}{dt}=\sum_i\vec r_i\times\vec F_i^{ext}=\vec M_{ext}.$$ Se $\vec M_{ext}=0$, $\vec L$ si conserva.<br><br><b>Ruolo del polo.</b> Per un polo mobile $Q$ generico, la derivata acquista un termine correttivo $-\vec v_Q\times\vec P$. Questo termine si annulla in due casi: (i) polo fisso ($\vec v_Q=0$); (ii) polo che si muove parallelo a $\vec P=M\vec v_{CM}$. Il <b>centro di massa</b> soddisfa il secondo: $\vec v_Q=\vec v_{CM}$ è parallelo a $\vec P=M\vec v_{CM}$, quindi $\vec v_{CM}\times M\vec v_{CM}=0$. Perciò $d\vec L_{CM}/dt=\vec M_{ext}^{CM}$ vale \emph{anche se il CM accelera}: il CM è l'unico polo mobile per cui il teorema resta nella forma pulita. È la ragione per cui, per un corpo che rotola o cade ruotando, si sceglie sistematicamente il CM come polo. $\blacksquare$

---

## L5

**Richiesta:** Deriva le due equazioni cardinali della dinamica dei sistemi, $\vec F_{ext}=d\vec P/dt$ e $\vec M_{ext}=d\vec L/dt$, mostrando come si cancellano le forze interne e quale forma del terzo principio serve in ciascuna.

**Argomento dichiarato:** Le due equazioni cardinali dalle forze interne

**Dimostrazione modello:**

Considero $N$ particelle; sulla $i$-esima agiscono la forza esterna $\vec F_i^{ext}$ e le interne $\vec F_{ij}$. <b>Prima equazione cardinale.</b> Sommo il secondo principio $m_i\vec a_i=\vec F_i^{ext}+\sum_{j\neq i}\vec F_{ij}$ su tutte le particelle: $$\frac{d\vec P}{dt}=\sum_i\vec F_i^{ext}+\sum_i\sum_{j\neq i}\vec F_{ij}.$$ La doppia somma interna si raggruppa in coppie $\vec F_{ij}+\vec F_{ji}$; per il terzo principio in forma \textbf{debole} $\vec F_{ij}=-\vec F_{ji}$, ogni coppia è nulla. Resta $$\boxed{\ \frac{d\vec P}{dt}=\vec F_{ext}\ }.$$ <b>Seconda equazione cardinale.</b> Parto da $\vec L=\sum_i\vec r_i\times m_i\vec v_i$; derivando (il termine $\vec v_i\times m_i\vec v_i$ è nullo): $$\frac{d\vec L}{dt}=\sum_i\vec r_i\times\vec F_i^{ext}+\sum_i\sum_{j\neq i}\vec r_i\times\vec F_{ij}.$$ La coppia $(i,j)$ dei momenti interni dà $$\vec r_i\times\vec F_{ij}+\vec r_j\times\vec F_{ji}=(\vec r_i-\vec r_j)\times\vec F_{ij},$$ che si annulla se $\vec F_{ij}$ è \emph{parallela} alla congiungente $\vec r_i-\vec r_j$: è il terzo principio in forma \textbf{forte}. Allora $$\boxed{\ \frac{d\vec L}{dt}=\vec M_{ext}\ }.\qquad\blacksquare$$ <b>Significato fisico.</b> Due sole equazioni vettoriali governano un sistema di qualsiasi complessità: la risultante esterna determina il moto della quantità di moto totale, il momento risultante esterno quello del momento angolare. Le forze interne, per quanto violente, non alterano mai $\vec P$ né $\vec L$ totali. La prima cardinale richiede solo la forma debole; la seconda richiede la forma forte (forze centrali fra le particelle). Sono il ponte dalla meccanica del punto a quella dei corpi rigidi.

---

## L6

**Richiesta:** Enuncia e dimostra il secondo teorema di König, $\vec L=\vec r_{CM}\times M\vec v_{CM}+\vec L'$, e interpreta i due termini.

**Argomento dichiarato:** Secondo teorema di König

**Dimostrazione modello:**

<b>Enunciato.</b> Il momento angolare di un sistema rispetto a un polo fisso $O$ è la somma del momento angolare \emph{orbitale} (del centro di massa, come punto materiale di massa $M$) e del momento angolare \emph{intrinseco} $\vec L'$ (calcolato nel riferimento del CM): $$\vec L=\vec r_{CM}\times M\vec v_{CM}+\vec L',\qquad \vec L'=\sum_i\vec r'_i\times m_i\vec v'_i.$$ <b>Dimostrazione.</b> Decompongo posizione e velocità rispetto al CM: $\vec r_i=\vec r_{CM}+\vec r'_i$, $\vec v_i=\vec v_{CM}+\vec v'_i$. Sostituisco in $\vec L=\sum_i\vec r_i\times m_i\vec v_i$ ed espando: $$\vec L=\vec r_{CM}\times v_{CM}\!\sum_i m_i+\vec r_{CM}\times\!\sum_i m_i\vec v'_i+\Big(\sum_i m_i\vec r'_i\Big)\times\vec v_{CM}+\sum_i\vec r'_i\times m_i\vec v'_i.$$ <b>I due termini misti si annullano.</b> $\sum_i m_i\vec v'_i=M\vec v'_{CM}=\vec 0$ e $\sum_i m_i\vec r'_i=M\vec r'_{CM}=\vec 0$, perché la posizione e la velocità del CM viste dal CM sono nulle per definizione. Restano il primo e l'ultimo termine: $$\vec L=\vec r_{CM}\times M\vec v_{CM}+\vec L'.\qquad\blacksquare$$ <b>Significato fisico.</b> È la scomposizione orbitale + spin. Il termine orbitale dipende dal polo e descrive il 'moto d'insieme' del sistema; $\vec L'$ è intrinseco, indipendente dal polo, e per un rigido diventa $\vec L'=I_{CM}\,\vec\omega$. La Terra ne è l'esempio: momento angolare orbitale attorno al Sole più momento angolare di spin (rotazione giornaliera). Come per l'energia (primo König), è l'annullamento dei termini misti — garantito dalla definizione del CM — a rendere la separazione pulita.

---

## L7

**Richiesta:** Dimostra che per un sistema isolato si conservano sia la quantità di moto totale sia il momento angolare totale, precisando le ipotesi.

**Argomento dichiarato:** Conservazione di P e L per sistema isolato

**Dimostrazione modello:**

<b>Punto di partenza: le due equazioni cardinali.</b> $$\frac{d\vec P}{dt}=\vec F_{ext},\qquad \frac{d\vec L}{dt}=\vec M_{ext}.$$ <b>Sistema isolato.</b> Per definizione non agiscono forze esterne, quindi $\vec F_{ext}=\vec 0$ e $\vec M_{ext}=\vec 0$. Immediatamente: $$\frac{d\vec P}{dt}=\vec 0\ \Longrightarrow\ \vec P=\text{costante},\qquad \frac{d\vec L}{dt}=\vec 0\ \Longrightarrow\ \vec L=\text{costante}.$$ <b>Ipotesi, distinte.</b> La conservazione di $\vec P$ richiede solo il terzo principio in forma \textbf{debole} (forze interne uguali e opposte). La conservazione di $\vec L$ richiede la forma \textbf{forte} (forze interne anche collineari con la congiungente) e un polo fisso o coincidente col CM. $\blacksquare$<br><br><b>Significato fisico.</b> Sono le due leggi di conservazione più robuste della meccanica. Un'esplosione, un urto, una reazione interna redistribuiscono $\vec P$ e $\vec L$ tra le parti, ma i totali restano fissi: i frammenti di un proiettile che scoppia hanno CM che prosegue imperturbato, un pattinatore che chiude le braccia ruota più in fretta ($L=I\omega$ costante, $I$ cala). Nel linguaggio di Noether, discendono dalle simmetrie dello spazio: l'omogeneità (invarianza per traslazioni) dà $\vec P$, l'isotropia (invarianza per rotazioni) dà $\vec L$. Sopravvivono anche in relatività e in meccanica quantistica.

---

## L8

**Richiesta:** Per un urto completamente anelastico ricava la velocità finale comune e l'energia cinetica dissipata, esprimendola con massa ridotta e velocità relativa.

**Argomento dichiarato:** Urto completamente anelastico: energia dissipata

**Dimostrazione modello:**

Ipotesi: due corpi che dopo l'urto restano uniti (velocità finale comune $\vec v'$); sistema isolato durante l'urto, quindi $\vec P$ si conserva; l'energia cinetica no. <b>Velocità finale.</b> $$m_1\vec v_1+m_2\vec v_2=(m_1+m_2)\vec v'\ \Longrightarrow\ \vec v'=\frac{m_1\vec v_1+m_2\vec v_2}{m_1+m_2}=\vec v_{CM}.$$ I corpi uniti procedono con la velocità del centro di massa. <b>Energia dissipata.</b> Uso il primo teorema di König, $K=\tfrac12 Mv_{CM}^2+K'$: la parte $\tfrac12 Mv_{CM}^2$ è bloccata dalla conservazione di $\vec P$ (non cambia), mentre $K'$ (energia del moto relativo al CM) passa da un valore iniziale a \emph{zero}, perché dopo l'urto non c'è più moto relativo. Dunque si dissipa tutta e sola $K'$ iniziale. Calcolandola con la massa ridotta $\mu=\dfrac{m_1 m_2}{m_1+m_2}$: $$K'=\tfrac12\mu\,(\vec v_1-\vec v_2)^2,$$ e quindi $$\boxed{\ |\Delta K|=\tfrac12\,\frac{m_1 m_2}{m_1+m_2}\,(\vec v_1-\vec v_2)^2\ }.\qquad\blacksquare$$ <b>Significato fisico.</b> L'urto anelastico dissipa il \emph{massimo} compatibile con la conservazione della quantità di moto: solo l'energia del moto relativo può andar persa, quella del CM è intoccabile. La perdita dipende dalla velocità \emph{relativa} (non dalle singole velocità): due corpi che viaggiano insieme non dissipano nulla. La massa ridotta $\mu$ è la 'massa efficace' del moto relativo. L'energia sparita diventa deformazione permanente e calore — il ponte verso la termodinamica.

---

## L9

**Richiesta:** Analizza l'urto elastico nel riferimento del centro di massa: mostra che ogni velocità ruota conservando il modulo, e ritrova le velocità nel laboratorio.

**Argomento dichiarato:** Urto elastico nel sistema del centro di massa

**Dimostrazione modello:**

<b>Passaggio al CM.</b> Definisco le velocità relative al CM: $\vec u_i=\vec v_i-\vec v_{CM}$. Nel riferimento del CM la quantità di moto totale è nulla: $$m_1\vec u_1+m_2\vec u_2=\vec 0,$$ quindi i due impulsi sono sempre uguali e opposti, sia prima sia dopo l'urto. <b>Vincolo elastico.</b> L'energia cinetica si conserva e, per $\vec P'=0$, si riduce a una condizione sui moduli. Da $m_1\vec u_1=-m_2\vec u_2$ e dalla conservazione di $\tfrac12 m_1 u_1^2+\tfrac12 m_2 u_2^2$ segue che i \emph{moduli} $u_1,u_2$ restano invariati: l'urto elastico nel CM \emph{ruota} soltanto le velocità, senza cambiarne l'intensità. <b>Caso 1D.</b> In una dimensione la rotazione è un'inversione: $\vec u'_i=-\vec u_i$. Torno al laboratorio con $\vec v'_i=\vec v_{CM}+\vec u'_i=\vec v_{CM}-(\vec v_i-\vec v_{CM})$: $$v'_i=2v_{CM}-v_i.$$ Sostituendo $v_{CM}=\dfrac{m_1v_1+m_2v_2}{m_1+m_2}$ si ritrovano le formule standard, ad esempio $$v'_1=\frac{m_1-m_2}{m_1+m_2}v_1+\frac{2m_2}{m_1+m_2}v_2.\qquad\blacksquare$$ <b>Significato fisico.</b> Nel riferimento del CM l'urto elastico è la cosa più semplice possibile: le due velocità, uguali e opposte in quantità di moto, si limitano a ruotare rigidamente di un angolo di diffusione $\theta^*$, senza perdere energia. Tutta la complessità dell'urto è contenuta in quell'unico angolo, fissato dai dettagli dell'interazione (parametro d'impatto, potenziale). È il motivo per cui la fisica delle collisioni — dagli urti fra biglie alla diffusione di particelle — si tratta sempre nel sistema del centro di massa.

---

## L10

**Richiesta:** Riassumi e giustifica, con le relative dimostrazioni, perché il centro di massa è il riferimento e il polo privilegiato di tutta la dinamica dei sistemi.

**Argomento dichiarato:** Il centro di massa come polo e riferimento privilegiato

**Dimostrazione modello:**

Tre privilegi distinti, tutti radicati in un'unica proprietà: $\sum_i m_i\vec r'_i=\vec 0$ (e la sua derivata $\sum_i m_i\vec v'_i=\vec 0$), cioè posizione e velocità del CM viste dal CM sono nulle per definizione.<br><br><b>1) Dinamica disaccoppiata.</b> Il CM si muove come un punto materiale di massa $M$ soggetto alla sola risultante esterna: $$M\vec a_{CM}=\vec F_{ext},$$ indipendentemente dalle forze interne (che si elidono a coppie).<br><br><b>2) Separazione di König (energia e momento angolare).</b> Grazie all'annullamento dei termini misti: $$K=\tfrac12 Mv_{CM}^2+K',\qquad \vec L=\vec r_{CM}\times M\vec v_{CM}+\vec L'.$$ Il moto d'insieme (traslazione del CM) e il moto interno (rotazioni, vibrazioni) non si mescolano.<br><br><b>3) Teorema del momento angolare valido anche se il CM accelera.</b> Per un polo mobile $Q$ la derivata del momento angolare acquista un termine $-\vec v_Q\times\vec P$: $$\frac{d\vec L_Q}{dt}=\vec M_{ext}^Q-\vec v_Q\times\vec P.$$ Per $Q=CM$, $\vec v_Q=\vec v_{CM}$ è parallelo a $\vec P=M\vec v_{CM}$, quindi $\vec v_{CM}\times M\vec v_{CM}=\vec 0$ e $$\frac{d\vec L_{CM}}{dt}=\vec M_{ext}^{CM}$$ resta nella forma pulita, anche con CM accelerato. $\blacksquare$<br><br><b>Significato fisico.</b> Il CM è l'unico riferimento in cui la dinamica di un sistema esteso si spezza in 'moto del tutto' + 'moto interno' senza accoppiamenti. È per questo che ogni problema di corpo rigido si imposta come traslazione del CM più rotazione attorno al CM (teorema di Chasles): la scelta del CM non è una comodità qualsiasi, è l'unica che rende le equazioni separabili.

---

## L11

**Richiesta:** Deriva l'equazione del razzo $\Delta v=u\ln(m_0/m_f)$ dalla conservazione della quantità di moto, in assenza di forze esterne.

**Argomento dichiarato:** Equazione del razzo di Tsiolkovsky

**Dimostrazione modello:**

Ipotesi: razzo isolato (niente forze esterne); espelle gas a velocità $u$ \emph{relativa} al razzo; $u$ costante. Considero il sistema completo razzo + gas, la cui quantità di moto totale si conserva. <b>Bilancio in $dt$.</b> All'istante $t$: massa $m$, velocità $v$. Nell'intervallo $dt$ il razzo espelle una massa $-dm>0$ di gas (quindi $dm<0$) alla velocità $v-u$, e la propria massa diventa $m+dm$, la velocità $v+dv$. La conservazione della quantità di moto tra prima e dopo: $$mv=(m+dm)(v+dv)+(-dm)(v-u).$$ <b>Sviluppo.</b> Espando e trascuro l'infinitesimo di secondo ordine $dm\,dv$: $$mv=mv+m\,dv+v\,dm-v\,dm+u\,dm\ \Longrightarrow\ 0=m\,dv+u\,dm.$$ Ottengo l'equazione differenziale $$m\,dv=-u\,dm\ \Longrightarrow\ dv=-u\,\frac{dm}{m}.$$ <b>Integrazione.</b> Da $(v_i,m_0)$ a $(v_f,m_f)$: $$\Delta v=-u\int_{m_0}^{m_f}\frac{dm}{m}=u\,\ln\frac{m_0}{m_f}.\qquad\blacksquare$$ <b>Significato fisico.</b> L'incremento di velocità dipende dalla velocità di scarico $u$ e, \emph{logaritmicamente}, dal rapporto di massa $m_0/m_f$. La dipendenza logaritmica è severa: raddoppiare $\Delta v$ richiede di elevare al quadrato il rapporto di massa — è la 'tirannia dell'equazione del razzo', che impone la costruzione a stadi. Il principio è la conservazione della quantità di moto: il razzo accelera in avanti perché spinge gas all'indietro, e il CM del sistema completo (razzo + gas) resta imperturbato in assenza di forze esterne. Con la gravità si aggiunge un termine $-g\,dt$: $m\,dv=-u\,dm-mg\,dt$.

---

## L12

**Richiesta:** Mostra che il problema di due corpi isolati in interazione mutua si spezza nel moto libero del centro di massa e in un problema a un corpo di massa ridotta nella coordinata relativa; verifica che anche energia cinetica e momento angolare si separano.

**Argomento dichiarato:** Due corpi: massa ridotta e separazione del moto

**Dimostrazione modello:**

<b>Impostazione.</b> Due punti materiali isolati dall'esterno e in interazione mutua; per il terzo principio $\mathbf F_{21}=-\mathbf F_{12}$: $$m_1\ddot{\mathbf r}_1=\mathbf F_{12},\qquad m_2\ddot{\mathbf r}_2=-\mathbf F_{12}.$$ <b>Moto del centro di massa.</b> Posti $M=m_1+m_2$ e $\mathbf R=(m_1\mathbf r_1+m_2\mathbf r_2)/M$, sommo le due equazioni: le forze interne si cancellano a coppie, $$M\ddot{\mathbf R}=0\ \Longrightarrow\ \mathbf R(t)=\mathbf R_0+\mathbf V t.$$ Il CM &egrave; in moto rettilineo uniforme: tre gradi di libert&agrave; gi&agrave; risolti. <b>Moto relativo.</b> Con $\mathbf r=\mathbf r_1-\mathbf r_2$ divido ciascuna equazione per la propria massa e sottraggo: $$\ddot{\mathbf r}=\Big(\frac{1}{m_1}+\frac{1}{m_2}\Big)\mathbf F_{12}\ \Longrightarrow\ \boxed{\ \mu\,\ddot{\mathbf r}=\mathbf F_{12}\ },\qquad \mu=\frac{m_1m_2}{m_1+m_2}.$$ &Egrave; un problema a un corpo di massa $\mu$ soggetto alla sola forza di interazione. <b>Separazione di $T$ e $\mathbf L$.</b> Invertendo, $\mathbf r_1=\mathbf R+\frac{m_2}{M}\mathbf r$ e $\mathbf r_2=\mathbf R-\frac{m_1}{M}\mathbf r$; nei doppi prodotti i coefficienti $+m_1m_2/M$ e $-m_1m_2/M$ si elidono e restano $$T=\tfrac12 M\dot{\mathbf R}^2+\tfrac12\mu\dot{\mathbf r}^2,\qquad \mathbf L=M\,\mathbf R\times\dot{\mathbf R}+\mu\,\mathbf r\times\dot{\mathbf r}.$$ <b>Energia interna.</b> Se la forza &egrave; conservativa e centrale, $U=U(|\mathbf r|)$ e $E=\tfrac12M\dot{\mathbf R}^2+\big[\tfrac12\mu\dot{\mathbf r}^2+U(r)\big]$: la parentesi &egrave; l'energia interna, indipendente dal moto del CM. $\blacksquare$<br><br><b>Significato fisico.</b> Sei gradi di libert&agrave; si spezzano in due blocchi: il CM che vola libero (per il terzo principio) e la dinamica relativa, che nel caso centrale si integra con le sole leggi di conservazione. Nella gravitazione $\mu\ddot{\mathbf r}=-\frac{Gm_1m_2}{r^2}\hat{\mathbf r}$ diventa $\ddot{\mathbf r}=-\frac{G(m_1+m_2)}{r^2}\hat{\mathbf r}$: il moto relativo &egrave; kepleriano, ma con la massa <b>totale</b>, e la terza legge corretta &egrave; $T^2=4\pi^2a^3/[G(m_1+m_2)]$ con $a$ semiasse dell'orbita relativa. Per Sole-Terra la correzione vale $\sim3\cdot10^{-6}$ e si trascura; per una binaria di stelle simili no, ed &egrave; cos&igrave; che si pesano le stelle. Nell'idrogeno il nucleo non &egrave; fisso: i livelli vanno come $\mu=m_e/(1+m_e/m_p)$, con correzione relativa $\simeq m_e/m_p\simeq5{,}4\cdot10^{-4}$, piccola ma misurabile nello spostamento delle righe di Balmer fra idrogeno e deuterio.


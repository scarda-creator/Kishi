# Lavagne del pool: applicazioni

Ogni voce: la richiesta d'esame e la dimostrazione modello da verificare.

---

## L1

**Richiesta:** Imposta e risolvi l'oscillatore armonico semplice: equazione del moto, soluzione, pulsazione ed energia.

**Argomento dichiarato:** Oscillatore armonico semplice completo

**Dimostrazione modello:**

<b>Equazione del moto.</b> Una forza di richiamo elastica $F=-kx$ (Hooke) dà, per il secondo principio, $$m\ddot x=-kx\quad\Longrightarrow\quad \ddot x+\omega_0^2 x=0,\qquad \omega_0^2=\frac{k}{m}.$$ <b>Soluzione.</b> Cerco $x=e^{\lambda t}$: l'equazione caratteristica $\lambda^2+\omega_0^2=0$ dà radici immaginarie pure $\lambda=\pm i\omega_0$. La soluzione generale è oscillante: $$x(t)=A\cos(\omega_0 t+\varphi),$$ con ampiezza $A$ e fase $\varphi$ fissate dalle condizioni iniziali ($x_0,\ v_0$). La pulsazione propria $\omega_0=\sqrt{k/m}$ non dipende dall'ampiezza (isocronismo). Periodo $T=2\pi\sqrt{m/k}$, indipendente da $A$.<br><br><b>Energia.</b> La velocità è $\dot x=-A\omega_0\sin(\omega_0 t+\varphi)$. Energia cinetica e potenziale: $$K=\tfrac12 m\dot x^2=\tfrac12 m A^2\omega_0^2\sin^2(\cdot),\qquad U=\tfrac12 kx^2=\tfrac12 kA^2\cos^2(\cdot).$$ Poiché $m\omega_0^2=k$, la somma è $$E=K+U=\tfrac12 kA^2\big[\sin^2(\cdot)+\cos^2(\cdot)\big]=\tfrac12 kA^2=\text{costante}.$$ L'energia meccanica si conserva (forza conservativa) e oscilla tra le due forme: tutta potenziale agli estremi $x=\pm A$, tutta cinetica al passaggio per $x=0$, con $v_{max}=A\omega_0$. $\blacksquare$

---

## L2

**Richiesta:** Discuti l'oscillatore armonico smorzato: scrivi l'equazione, ricava le radici caratteristiche e classifica i tre regimi in base al discriminante, spiegando cosa avviene fisicamente in ciascuno.

**Argomento dichiarato:** Oscillatore smorzato: i tre regimi

**Dimostrazione modello:**

<b>Equazione.</b> Al richiamo elastico si aggiunge un attrito viscoso $-b\dot x$: $$m\ddot x+b\dot x+kx=0\ \Longrightarrow\ \ddot x+2\gamma\dot x+\omega_0^2 x=0,\quad \gamma=\frac{b}{2m},\ \omega_0^2=\frac{k}{m}.$$ <b>Equazione caratteristica.</b> Con $x=e^{\lambda t}$: $$\lambda^2+2\gamma\lambda+\omega_0^2=0\ \Longrightarrow\ \lambda=-\gamma\pm\sqrt{\gamma^2-\omega_0^2}.$$ Il segno del discriminante $\Delta=\gamma^2-\omega_0^2$ determina il regime.<br><br><b>1) Sottosmorzato</b> ($\gamma<\omega_0$, $\Delta<0$). Radici complesse coniugate $\lambda=-\gamma\pm i\omega$, $\omega=\sqrt{\omega_0^2-\gamma^2}$: $$x(t)=A\,e^{-\gamma t}\cos(\omega t+\varphi).$$ Il sistema oscilla alla pseudo-pulsazione $\omega<\omega_0$, dentro un inviluppo $e^{-\gamma t}$ che ne smorza l'ampiezza. L'energia decade come $e^{-2\gamma t}$.<br><br><b>2) Critico</b> ($\gamma=\omega_0$, $\Delta=0$). Radice reale doppia $\lambda=-\gamma$: $$x(t)=(A+Bt)\,e^{-\gamma t}.$$ Ritorno all'equilibrio nel \emph{minor tempo} senza oscillare né oltrepassare. È la condizione ottimale per sospensioni e strumenti di misura.<br><br><b>3) Sovrasmorzato</b> ($\gamma>\omega_0$, $\Delta>0$). Due radici reali negative distinte $\lambda_{1,2}=-\gamma\pm\sqrt{\gamma^2-\omega_0^2}$: $$x(t)=A\,e^{\lambda_1 t}+B\,e^{\lambda_2 t}.$$ Nessuna oscillazione; il ritorno è \emph{più lento} del critico, perché dominato dalla radice $\lambda_1$ (meno negativa, più vicina a zero).<br><br><b>Sintesi fisica.</b> Aumentando lo smorzamento da zero: le oscillazioni rallentano ($\omega\downarrow$) e si smorzano più in fretta, fino a sparire al critico; oltre il critico non c'è più oscillazione e il rientro torna a rallentare. Il critico è la frontiera ottimale tra i due comportamenti. $\blacksquare$

---

## L3

**Richiesta:** Per l'oscillatore forzato ricava l'ampiezza a regime $A(\omega)$ e dimostra che la frequenza di risonanza in ampiezza è $\omega_{ris}=\sqrt{\omega_0^2-2\gamma^2}$, minore di $\omega_0$. Spiega perché lo smorzamento la sposta.

**Argomento dichiarato:** Risonanza: derivazione di ω_ris

**Dimostrazione modello:**

<b>Equazione forzata.</b> $$\ddot x+2\gamma\dot x+\omega_0^2 x=\frac{F_0}{m}\cos\omega t.$$ <b>Regime stazionario.</b> Dopo l'estinzione del transiente ($\propto e^{-\gamma t}$), la soluzione oscilla alla frequenza imposta $\omega$: $x(t)=A(\omega)\cos(\omega t-\varphi)$. Sostituendo (o con il metodo dei fasori/complessi, $x=\mathrm{Re}\,[\,\tilde x\,e^{i\omega t}]$) si ottiene: $$A(\omega)=\frac{F_0/m}{\sqrt{(\omega_0^2-\omega^2)^2+(2\gamma\omega)^2}},\qquad \tan\varphi=\frac{2\gamma\omega}{\omega_0^2-\omega^2}.$$ <b>Massimo dell'ampiezza.</b> $A$ è massima dove il radicando al denominatore è minimo. Pongo $u=\omega^2$ e minimizzo $$D(u)=(\omega_0^2-u)^2+4\gamma^2 u.$$ $$\frac{dD}{du}=-2(\omega_0^2-u)+4\gamma^2=0\ \Longrightarrow\ u=\omega_0^2-2\gamma^2.$$ Poiché $d^2D/du^2=2>0$ è un minimo di $D$, dunque un massimo di $A$: $$\boxed{\ \omega_{ris}=\sqrt{\omega_0^2-2\gamma^2}\ }<\omega_0.$$ <b>Perché lo smorzamento la sposta.</b> Senza smorzamento ($\gamma=0$) il denominatore si annullerebbe esattamente a $\omega=\omega_0$: ampiezza infinita, risonanza a $\omega_0$. Il termine dissipativo $4\gamma^2\omega^2$ aggiunge al denominatore un contributo \emph{crescente} con $\omega$: sommato alla campana $(\omega_0^2-\omega^2)^2$, ne sposta il minimo verso frequenze più basse, di una quantità $\propto\gamma^2$. Il picco resta finito (ampiezza massima $\sim F_0/(2m\gamma\omega_0)$ per piccolo smorzamento) e cade a $\omega_{ris}<\omega_0$. Si noti l'ordinamento $\omega_{ris}=\sqrt{\omega_0^2-2\gamma^2}<\omega=\sqrt{\omega_0^2-\gamma^2}<\omega_0$: risonanza, pseudo-pulsazione e frequenza propria sono tre frequenze distinte. $\blacksquare$

---

## L4

**Richiesta:** Ricava l'equazione del moto del pendolo semplice, linearizzala per piccole oscillazioni e discuti l'isocronismo e i limiti della sua validità.

**Argomento dichiarato:** Pendolo semplice e isocronismo

**Dimostrazione modello:**

<b>Equazione esatta.</b> Massa $m$ appesa a un filo inestensibile di lunghezza $\ell$; $\theta$ è l'angolo con la verticale. La componente tangenziale del peso è la forza di richiamo: $$m\ell\ddot\theta=-mg\sin\theta\ \Longrightarrow\ \ddot\theta=-\frac{g}{\ell}\sin\theta.$$ Questa equazione è \emph{non lineare} (per il $\sin\theta$) e non ha soluzione in funzioni elementari.<br><br><b>Piccole oscillazioni.</b> Per $\theta$ piccolo, sviluppo $\sin\theta=\theta-\theta^3/6+\dots\approx\theta$. L'equazione si linearizza: $$\ddot\theta+\frac{g}{\ell}\theta=0,$$ che è un oscillatore armonico di pulsazione $$\omega_0=\sqrt{\frac{g}{\ell}},\qquad T=2\pi\sqrt{\frac{\ell}{g}}.$$ <b>Isocronismo.</b> Il periodo dipende solo da $\ell$ e $g$: \emph{non} dall'ampiezza né dalla massa. È l'isocronismo scoperto da Galileo, base del pendolo come orologio.<br><br><b>Limiti di validità.</b> L'isocronismo vale solo nell'approssimazione $\sin\theta\approx\theta$. Tenendo il termine cubico, il richiamo effettivo è \emph{più debole} del lineare (perché $\sin\theta<\theta$), quindi il pendolo impiega più tempo: il periodo cresce con l'ampiezza. La correzione al prim'ordine è $$T(\theta_0)\approx T_0\left(1+\frac{\theta_0^2}{16}+\dots\right).$$ Per $\theta_0=90^\circ$ lo scarto è già di alcuni punti percentuali. L'isocronismo è dunque una proprietà \emph{approssimata}, valida per piccole ampiezze; la non linearità di $\sin\theta$ lo rompe alle grandi. $\blacksquare$

---

## L5

**Richiesta:** Determina la condizione di distacco (inizio scivolamento) di un blocco su un piano inclinato con attrito, e l'accelerazione dopo il distacco.

**Argomento dichiarato:** Piano inclinato con attrito: condizione di distacco

**Dimostrazione modello:**

Ipotesi: blocco di massa $m$ su un piano inclinato di angolo $\theta$, con attrito statico $\mu_s$ e dinamico $\mu_d$. Assi: $x$ lungo il piano (verso il basso), $y$ ortogonale. <b>Scomposizione delle forze.</b> Il peso si scompone in $mg\sin\theta$ (lungo il piano, giù) e $mg\cos\theta$ (premuto sul piano). La reazione normale bilancia la seconda: $$N=mg\cos\theta.$$ Finché il blocco è fermo, l'attrito statico $f_s$ bilancia la componente lungo il piano, con il vincolo $f_s=mg\sin\theta\le\mu_s N$. <b>Condizione di distacco.</b> Il blocco resta fermo finché $$mg\sin\theta\le\mu_s\,mg\cos\theta\ \Longrightarrow\ \tan\theta\le\mu_s.$$ Comincia a scivolare all'angolo critico $$\boxed{\ \tan\theta_c=\mu_s\ }$$ indipendente dalla massa. <b>Dinamica dopo il distacco.</b> Superato $\theta_c$ subentra l'attrito dinamico $f_d=\mu_d N=\mu_d mg\cos\theta$, opposto al moto. Il secondo principio lungo il piano: $$m\ddot x=mg\sin\theta-\mu_d mg\cos\theta\ \Longrightarrow\ a=g(\sin\theta-\mu_d\cos\theta).\qquad\blacksquare$$ <b>Significato fisico.</b> L'angolo critico $\theta_c=\arctan\mu_s$ misura direttamente il coefficiente di attrito statico: si inclina finché l'oggetto scivola. La massa scompare da entrambe le condizioni perché spinta motrice e attrito sono entrambi $\propto mg$: si elidono nel rapporto. Poiché tipicamente $\mu_d<\mu_s$, appena il blocco si stacca l'attrito cala e il moto parte con un piccolo scatto — il classico 'strappo' iniziale.

---

## L6

**Richiesta:** Ricava la costante elastica equivalente di due molle in parallelo e in serie, e spiega perché la regola è opposta a quella dei resistori.

**Argomento dichiarato:** Molle in serie e in parallelo

**Dimostrazione modello:**

Ipotesi: molle ideali (senza massa), lineari ($F=kx$ in modulo), piccoli spostamenti. Cerco la $k_{eq}$ della molla singola equivalente. <b>Parallelo.</b> Due molle $k_1,k_2$ affiancate, agganciate alla stessa massa: subiscono lo \emph{stesso allungamento} $x$. Le forze di richiamo si sommano: $$F=F_1+F_2=k_1 x+k_2 x=(k_1+k_2)x\ \Longrightarrow\ \boxed{\ k_{eq}^{\parallel}=k_1+k_2\ }.$$ Il parallelo è più \emph{rigido} delle singole. <b>Serie.</b> Due molle in fila sopportano la \emph{stessa forza} $F$ (la tensione si trasmette lungo la catena), mentre gli allungamenti si sommano. Da $x_i=F/k_i$: $$x=x_1+x_2=\frac{F}{k_1}+\frac{F}{k_2}=F\left(\frac{1}{k_1}+\frac{1}{k_2}\right).$$ Poiché $x=F/k_{eq}$: $$\boxed{\ \frac{1}{k_{eq}^{serie}}=\frac{1}{k_1}+\frac{1}{k_2}\ }.$$ La serie è più \emph{cedevole} delle singole. $\blacksquare$<br><br><b>Significato fisico.</b> La regola è opposta a quella dei resistori (che si sommano in serie): qui è la \emph{cedevolezza} $1/k$ a sommarsi in serie, perché ciò che si somma sono gli allungamenti a parità di forza. In parallelo condividi lo spostamento e sommi le forze (più rigido); in serie condividi la forza e sommi gli spostamenti (più molle). La frequenza propria di una massa sulla combinazione è $\omega_0=\sqrt{k_{eq}/m}$: il parallelo la alza, la serie la abbassa.

---

## L7

**Richiesta:** Ricava l'accelerazione delle masse e la tensione del filo nella macchina di Atwood, con carrucola e filo ideali.

**Argomento dichiarato:** Macchina di Atwood

**Dimostrazione modello:**

Ipotesi: due masse $m_1>m_2$ ai capi di un filo inestensibile e senza massa, su una carrucola ideale (senza massa né attrito). L'inestensibilità impone alle due masse accelerazione di uguale modulo $a$ e versi opposti; l'idealità della carrucola impone tensione $T$ uguale sui due rami. <b>Equazioni del moto.</b> Verso positivo: giù per $m_1$, su per $m_2$. Per ciascuna massa: $$m_1 g-T=m_1 a,\qquad T-m_2 g=m_2 a.$$ <b>Soluzione.</b> Sommo membro a membro per eliminare $T$: $$m_1 g-m_2 g=(m_1+m_2)a\ \Longrightarrow\ \boxed{\ a=\frac{m_1-m_2}{m_1+m_2}\,g\ }.$$ Sostituisco in una delle due per la tensione: $$T=m_2(g+a)=\frac{2m_1 m_2}{m_1+m_2}\,g.\qquad\blacksquare$$ <b>Significato fisico.</b> L'accelerazione è una frazione di $g$ fissata dallo squilibrio relativo delle masse: se $m_1=m_2$, $a=0$ (equilibrio); se $m_2\to0$, $a\to g$ (caduta libera di $m_1$). Fu l'idea di Atwood: 'diluire' $g$ per renderla misurabile con gli orologi del Settecento, studiando un moto uniformemente accelerato lento. La tensione è sempre \emph{compresa} tra $m_2 g$ e $m_1 g$: il filo regge meno del peso maggiore (che scende) e più del minore (che sale). Vale $T=\frac{2m_1 m_2}{m_1+m_2}\,g$, la media armonica delle masse per $g$ a meno del fattore 2.

---

## L8

**Richiesta:** Per un corpo in caduta con resistenza viscosa lineare $-bv$, ricava la velocità limite e la legge oraria $v(t)$, discutendo la costante di tempo.

**Argomento dichiarato:** Velocità limite in caduta viscosa

**Dimostrazione modello:**

Ipotesi: corpo di massa $m$ in caduta verticale, soggetto al peso $mg$ e a una resistenza viscosa lineare $-bv$ (regime di Stokes). Asse verso il basso. <b>Equazione del moto.</b> $$m\dot v=mg-bv\ \Longrightarrow\ \dot v=g-\frac{b}{m}v.$$ <b>Velocità limite.</b> Il corpo smette di accelerare quando $\dot v=0$: $$0=g-\frac{b}{m}v_\infty\ \Longrightarrow\ \boxed{\ v_\infty=\frac{mg}{b}\ }.$$ A regime peso e attrito si bilanciano. <b>Soluzione temporale.</b> L'equazione è lineare del prim'ordine; con $\tau=m/b$ separo le variabili e integro da fermo: $$v(t)=v_\infty\left(1-e^{-t/\tau}\right).$$ La velocità cresce verso $v_\infty$ con costante di tempo $\tau=m/b$. $\blacksquare$<br><br><b>Significato fisico.</b> La velocità limite è un \emph{attrattore}: qualunque sia la velocità iniziale, il moto tende esponenzialmente a $v_\infty$, dove l'accelerazione si annulla. Il tempo caratteristico $\tau=m/b$ dice quanto rapidamente: corpi pesanti o poco frenati impiegano più tempo a stabilizzarsi. Dopo $\sim3\tau$ la velocità è al $95\%$ del limite. È il motivo per cui una goccia di pioggia o un paracadutista raggiungono una velocità costante invece di accelerare senza fine: l'attrito, crescendo con $v$, si autolimita fino a pareggiare il peso.

---

## L9

**Richiesta:** Ricava la velocità angolare, la tensione del filo e il periodo di un pendolo conico che descrive un cono di semiapertura $\theta$.

**Argomento dichiarato:** Pendolo conico

**Dimostrazione modello:**

Ipotesi: massa $m$ appesa a un filo di lunghezza $\ell$ che descrive un cono di semiapertura $\theta$ costante; la massa percorre una circonferenza orizzontale di raggio $r=\ell\sin\theta$ a velocità costante, con il filo a angolo $\theta$ fisso dalla verticale. <b>Forze.</b> Agiscono il peso $mg$ (giù) e la tensione $\vec T$ lungo il filo, scomposta in $T\cos\theta$ (verticale) e $T\sin\theta$ (orizzontale, verso il centro). <b>Equazioni.</b> Verticale (nessuna accelerazione verticale): $$T\cos\theta=mg.$$ Orizzontale (la componente radiale è la forza centripeta del moto circolare uniforme): $$T\sin\theta=m\omega^2 r=m\omega^2\ell\sin\theta.$$ <b>Soluzione.</b> Dalla seconda, semplificando $\sin\theta$: $T=m\omega^2\ell$. Sostituisco nella prima: $m\omega^2\ell\cos\theta=mg$, quindi $$\boxed{\ \omega=\sqrt{\frac{g}{\ell\cos\theta}}\ },\qquad T=\frac{mg}{\cos\theta},\qquad T_{per}=2\pi\sqrt{\frac{\ell\cos\theta}{g}}.\qquad\blacksquare$$ <b>Significato fisico.</b> Il periodo dipende da $\ell\cos\theta$, cioè dall'\emph{altezza} $h=\ell\cos\theta$ del punto di sospensione sopra il piano del moto: $T_{per}=2\pi\sqrt{h/g}$. Coni più larghi richiedono rotazioni più rapide. C'è un limite: per $\omega\to\infty$, $\cos\theta\to0$ e $\theta\to90^\circ$, ma il filo non può mai raggiungere l'orizzontale (servirebbe tensione infinita per reggere il peso). Per piccoli $\theta$, $\cos\theta\to1$ e si recupera il pendolo semplice $2\pi\sqrt{\ell/g}$: le due descrizioni si raccordano.

---

## L10

**Richiesta:** Con il metodo dei fasori ricava ampiezza $A(\omega)$ e fase $\varphi(\omega)$ della risposta stazionaria di un oscillatore smorzato forzato, e descrivi il comportamento della fase nei tre regimi.

**Argomento dichiarato:** Oscillatore forzato: ampiezza e fase a regime

**Dimostrazione modello:**

Ipotesi: oscillatore smorzato forzato da una sollecitazione armonica; cerco la risposta a regime (transiente estinto). $$\ddot x+2\gamma\dot x+\omega_0^2 x=\frac{F_0}{m}\cos\omega t.$$ <b>Metodo dei fasori.</b> Complessifico cercando la soluzione di $$\ddot z+2\gamma\dot z+\omega_0^2 z=\frac{F_0}{m}e^{i\omega t},\qquad x=\mathrm{Re}\,z.$$ A regime $z=\tilde x\,e^{i\omega t}$; ogni derivata porta un fattore $i\omega$: $$(-\omega^2+2i\gamma\omega+\omega_0^2)\,\tilde x=\frac{F_0}{m}\ \Longrightarrow\ \tilde x=\frac{F_0/m}{(\omega_0^2-\omega^2)+2i\gamma\omega}.$$ <b>Ampiezza e fase.</b> Modulo e argomento del denominatore danno $$A(\omega)=|\tilde x|=\frac{F_0/m}{\sqrt{(\omega_0^2-\omega^2)^2+(2\gamma\omega)^2}},\qquad \tan\varphi(\omega)=\frac{2\gamma\omega}{\omega_0^2-\omega^2},$$ con $x(t)=A(\omega)\cos(\omega t-\varphi)$: $\varphi$ è il \emph{ritardo} della risposta sulla forzante. $\blacksquare$<br><br><b>Comportamento della fase.</b> Tre regimi netti.<br>— $\omega\ll\omega_0$: $\varphi\to0$, la massa segue la forza \emph{in fase} (regime dominato dalla molla).<br>— $\omega=\omega_0$: denominatore reale nullo, $\varphi=\pi/2$, risposta in \emph{quadratura}; qui la potenza assorbita è massima e l'ampiezza vale $A=F_0/(2m\gamma\omega_0)$.<br>— $\omega\gg\omega_0$: $\varphi\to\pi$, la massa si muove in \emph{opposizione} di fase (regime dominato dall'inerzia).<br>Il salto $\varphi:0\to\pi$ attorno a $\omega_0$ è tanto più brusco quanto minore è $\gamma$. A differenza dell'ampiezza (il cui picco cade a $\omega_{ris}<\omega_0$), la fase vale sempre esattamente $\pi/2$ a $\omega=\omega_0$: è il criterio sperimentale più pulito per individuare la frequenza propria.

---

## L11

**Richiesta:** Definisci il fattore di qualità $Q$ dell'oscillatore smorzato, collegalo all'energia dissipata per ciclo e dimostra la relazione $Q=\omega_0/\Delta\omega$ con la larghezza della risonanza.

**Argomento dichiarato:** Fattore Q e larghezza della risonanza

**Dimostrazione modello:**

Ipotesi: oscillatore debolmente smorzato ($\gamma\ll\omega_0$). <b>Definizione.</b> $$Q\equiv\frac{\omega_0}{2\gamma},$$ equivalente a $Q=2\pi\times$ (energia immagazzinata)/(energia dissipata per ciclo). <b>Energia dissipata per ciclo.</b> Nell'oscillatore libero smorzato l'ampiezza va come $e^{-\gamma t}$, quindi l'energia (proporzionale all'ampiezza al quadrato) decade come $$E(t)=E_0\,e^{-2\gamma t}.$$ In un periodo $T=2\pi/\omega_0$ l'energia persa è $|\Delta E|\approx E\,(2\gamma T)=E\,\dfrac{4\pi\gamma}{\omega_0}$ (piccolo smorzamento). Dunque $$2\pi\frac{E}{|\Delta E|}=2\pi\frac{\omega_0}{4\pi\gamma}=\frac{\omega_0}{2\gamma}=Q,$$ coerente con la definizione. <b>Larghezza della risonanza.</b> Vicino al picco la curva della potenza assorbita (proporzionale a $\gamma\omega^2 A^2$) ha profilo lorentziano. La larghezza a metà altezza in frequenza, imponendo che la risposta in potenza scenda a metà del massimo, risulta $$\Delta\omega=2\gamma.$$ Combinando con la definizione di $Q$: $$\boxed{\ Q=\frac{\omega_0}{\Delta\omega}\ }.\qquad\blacksquare$$ <b>Significato fisico.</b> $Q$ misura quanto è 'appuntita' la risonanza e quanto a lungo il sistema oscilla libero: un $Q$ alto significa poca dissipazione, picco stretto e alto, molte oscillazioni prima di spegnersi (dell'ordine di $Q/\pi$ cicli). Un diapason ha $Q\sim10^3$, un buon circuito RLC $\sim10^2$, un atomo eccitato $\sim10^7$. La relazione $Q=\omega_0/\Delta\omega$ lega selettività in frequenza e persistenza nel tempo: sono la stessa proprietà vista nei due domini — un'anticipazione classica del legame indeterminazione tempo-energia.

---

## L12

**Richiesta:** Due masse uguali sono collegate fra due pareti da tre molle (parete-massa-massa-parete). Scrivi le equazioni del moto, disaccoppiale con le coordinate normali, ricava le frequenze proprie dei due modi e mostra che con accoppiamento debole compaiono i battimenti.

**Argomento dichiarato:** Oscillatori accoppiati e modi normali

**Dimostrazione modello:**

<b>Sistema ed equazioni del moto.</b> Due masse uguali $m$ su piano liscio: ciascuna legata alla sua parete da una molla di costante $k$, le due collegate fra loro da una molla di accoppiamento $k_c$. Con $x_1,x_2$ spostamenti dall'equilibrio, positivi verso destra, la molla centrale si allunga di $x_2-x_1$: $$m\ddot x_1=-kx_1+k_c(x_2-x_1),\qquad m\ddot x_2=-kx_2-k_c(x_2-x_1).$$ Sono accoppiate: nessuna delle due si integra da sola. <b>Coordinate normali.</b> Sommo e sottraggo membro a membro ponendo $q_\pm=x_1\pm x_2$; nella somma i termini di accoppiamento si elidono, nella differenza si raddoppiano: $$m\ddot q_+=-k\,q_+,\qquad m\ddot q_-=-(k+2k_c)\,q_-.$$ Due oscillatori armonici indipendenti, di pulsazioni $$\boxed{\ \omega_1=\sqrt{\tfrac{k}{m}}\ }\ \ \text{(simmetrico)},\qquad \boxed{\ \omega_2=\sqrt{\tfrac{k+2k_c}{m}}\ }\ \ \text{(antisimmetrico)}.$$ <b>Lettura dei modi.</b> Se $q_-=0$ le masse vanno in fase, $x_1=x_2$: la molla centrale non si deforma, non contribuisce, resta solo $k$. Se $q_+=0$ vanno in opposizione, $x_1=-x_2$: la molla centrale si deforma di $2x_1$ e irrigidisce il sistema, da cui $\omega_2>\omega_1$. <b>Moto generale.</b> $q_\pm=A_\pm\cos(\omega_{1,2}t+\varphi_\pm)$ e, invertendo, $x_1=\tfrac12(q_++q_-)$, $x_2=\tfrac12(q_+-q_-)$: ogni moto &egrave; sovrapposizione dei due modi normali, con quattro costanti fissate dai dati iniziali. <b>Battimenti.</b> Con $x_1(0)=a$, $x_2(0)=0$ e velocit&agrave; nulle si ha $q_+=a\cos\omega_1t$, $q_-=a\cos\omega_2t$, e per prostaferesi $$x_1=a\cos(\bar\omega t)\cos(\Delta t),\qquad x_2=a\sin(\bar\omega t)\sin(\Delta t),$$ con $\bar\omega=\tfrac{\omega_1+\omega_2}{2}$ e $\Delta=\tfrac{\omega_2-\omega_1}{2}$. $\blacksquare$<br><br><b>Significato fisico.</b> Con accoppiamento debole ($k_c\ll k$) si ha $\omega_2\simeq\omega_1(1+k_c/k)$, dunque $\Delta\ll\bar\omega$: le masse oscillano rapidamente a $\bar\omega$ dentro inviluppi lenti $|\cos\Delta t|$ e $|\sin\Delta t|$, in quadratura fra loro. L'energia migra tutta dalla prima alla seconda in $t=\pi/(2\Delta)$ e poi torna indietro: sono i battimenti (l'energia della singola massa &egrave; ben definita proprio perch&eacute; l'inviluppo resta quasi costante su un ciclo veloce). Il metodo &egrave; generale: si diagonalizza la matrice delle costanti elastiche, i modi normali sono i suoi autovettori e le $\omega^2$ i suoi autovalori. Di l&igrave; passano i fononi del solido, i modi normali del campo e lo scambio risonante fra sistemi quasi degeneri, che in meccanica quantistica &egrave; l'oscillazione fra due stati accoppiati.


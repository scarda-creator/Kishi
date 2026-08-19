# Lavagne del pool: relativa

Ogni voce: la richiesta d'esame e la dimostrazione modello da verificare.

---

## L1

**Richiesta:** Deriva il teorema di composizione delle velocità $\vec v_{abs}=\vec v_{O'}+\vec v_{rel}+\boldsymbol\omega\times\vec r_{rel}$ per un sistema mobile che trasla e ruota, chiarendo il significato di ciascun termine.

**Argomento dichiarato:** Teorema delle velocità relative

**Dimostrazione modello:**

Considero un riferimento fisso (assoluto) con origine $O$ e uno mobile con origine $O'$, che trasla con velocità $\vec v_{O'}$ e ruota con velocità angolare istantanea $\boldsymbol\omega$. Il punto $P$ ha posizione assoluta $$\vec r_{abs}=\vec r_{O'}+\vec r_{rel},$$ dove $\vec r_{rel}=\overrightarrow{O'P}$ è espresso nella base $\{\hat i',\hat j',\hat k'\}$ solidale al sistema mobile.<br><br><b>Strumento chiave.</b> Per un qualunque vettore $\vec A$ vale la relazione tra le derivate nei due riferimenti: $$\left(\frac{d\vec A}{dt}\right)_{fix}=\left(\frac{d\vec A}{dt}\right)_{rot}+\boldsymbol\omega\times\vec A.$$ Il termine $\boldsymbol\omega\times\vec A$ tiene conto della rotazione dei versori mobili: $\dot{\hat i}'=\boldsymbol\omega\times\hat i'$, ecc.<br><br><b>Derivazione.</b> Derivo $\vec r_{abs}$ nel riferimento fisso: $$\vec v_{abs}=\left(\frac{d\vec r_{O'}}{dt}\right)_{fix}+\left(\frac{d\vec r_{rel}}{dt}\right)_{fix}=\vec v_{O'}+\left(\frac{d\vec r_{rel}}{dt}\right)_{fix}.$$ Applico l'operatore a $\vec r_{rel}$: $$\left(\frac{d\vec r_{rel}}{dt}\right)_{fix}=\left(\frac{d\vec r_{rel}}{dt}\right)_{rot}+\boldsymbol\omega\times\vec r_{rel}=\vec v_{rel}+\boldsymbol\omega\times\vec r_{rel},$$ avendo definito $\vec v_{rel}=(d\vec r_{rel}/dt)_{rot}$ come la velocità misurata dall'osservatore mobile. Ricompongo: $$\boxed{\;\vec v_{abs}=\underbrace{\vec v_{O'}+\boldsymbol\omega\times\vec r_{rel}}_{\vec v_{tr}\ \text{(trascinamento)}}+\vec v_{rel}\;}\qquad\blacksquare$$ <b>Significato.</b> $\vec v_{rel}$ è come si muove $P$ per l'osservatore mobile; $\vec v_{O'}$ è la traslazione dell'origine; $\boldsymbol\omega\times\vec r_{rel}$ è la velocità dovuta alla rotazione del sistema. La velocità di trascinamento $\vec v_{tr}$ è quella che avrebbe $P$ se fosse rigidamente solidale al sistema mobile ($\vec v_{rel}=0$).

---

## L2

**Richiesta:** Deriva il teorema delle accelerazioni $\vec a_{abs}=\vec a_{rel}+\vec a_{tr}+2\boldsymbol\omega\times\vec v_{rel}$, mostrando esplicitamente da dove nasce il fattore 2 nel termine di Coriolis.

**Argomento dichiarato:** Teorema delle accelerazioni e Coriolis

**Dimostrazione modello:**

Parto dal teorema delle velocità $$\vec v_{abs}=\vec v_{O'}+\vec v_{rel}+\boldsymbol\omega\times\vec r_{rel}$$ e derivo nel riferimento fisso, termine per termine, usando $(d/dt)_{fix}=(d/dt)_{rot}+\boldsymbol\omega\times$.<br><br><b>Termine 1</b> — $\vec v_{O'}$: $$\left(\frac{d\vec v_{O'}}{dt}\right)_{fix}=\vec a_{O'}.$$ <b>Termine 2</b> — $\vec v_{rel}$ (è un vettore che vive nel sistema mobile, va trattato con l'operatore): $$\left(\frac{d\vec v_{rel}}{dt}\right)_{fix}=\left(\frac{d\vec v_{rel}}{dt}\right)_{rot}+\boldsymbol\omega\times\vec v_{rel}=\vec a_{rel}+\underline{\boldsymbol\omega\times\vec v_{rel}}.$$ Ecco il \emph{primo} $\boldsymbol\omega\times\vec v_{rel}$.<br><br><b>Termine 3</b> — $\boldsymbol\omega\times\vec r_{rel}$: $$\frac{d}{dt}(\boldsymbol\omega\times\vec r_{rel})=\dot{\boldsymbol\omega}\times\vec r_{rel}+\boldsymbol\omega\times\left(\frac{d\vec r_{rel}}{dt}\right)_{fix}.$$ Ma $(d\vec r_{rel}/dt)_{fix}=\vec v_{rel}+\boldsymbol\omega\times\vec r_{rel}$, quindi $$=\boldsymbol\alpha\times\vec r_{rel}+\underline{\boldsymbol\omega\times\vec v_{rel}}+\boldsymbol\omega\times(\boldsymbol\omega\times\vec r_{rel}),$$ con $\boldsymbol\alpha=\dot{\boldsymbol\omega}$. Ecco il \emph{secondo} $\boldsymbol\omega\times\vec v_{rel}$.<br><br><b>Somma.</b> Raccolgo tutti i contributi: $$\vec a_{abs}=\vec a_{rel}+\underbrace{\big[\vec a_{O'}+\boldsymbol\alpha\times\vec r_{rel}+\boldsymbol\omega\times(\boldsymbol\omega\times\vec r_{rel})\big]}_{\vec a_{tr}}+\underbrace{2\,\boldsymbol\omega\times\vec v_{rel}}_{\vec a_{Cor}}.\qquad\blacksquare$$ <b>Il fattore 2.</b> Nasce dalla somma di due contributi identici: uno dal derivare $\vec v_{rel}$ (Termine 2), uno dal derivare $\vec r_{rel}$ dentro $\boldsymbol\omega\times\vec r_{rel}$ (Termine 3). La velocità relativa entra due volte nella doppia derivazione in un sistema rotante, e i due $\boldsymbol\omega\times\vec v_{rel}$ si sommano.

---

## L3

**Richiesta:** A partire dal teorema delle accelerazioni, deriva l'equazione del moto in un riferimento non inerziale e identifica tutte le forze apparenti, discutendone il senso fisico.

**Argomento dichiarato:** Forze apparenti nei riferimenti non inerziali

**Dimostrazione modello:**

Nel riferimento inerziale vale il secondo principio con l'accelerazione assoluta: $$m\,\vec a_{abs}=\vec F,$$ dove $\vec F$ è la risultante delle forze \emph{reali} (con agente e reazione). Uso il teorema delle accelerazioni: $$\vec a_{abs}=\vec a_{rel}+\underbrace{\vec a_{O'}+\boldsymbol\alpha\times\vec r_{rel}+\boldsymbol\omega\times(\boldsymbol\omega\times\vec r_{rel})}_{\vec a_{tr}}+2\boldsymbol\omega\times\vec v_{rel}.$$ Sostituisco e isolo la quantità $m\vec a_{rel}$, che è ciò che l'osservatore non inerziale misura: $$\boxed{\;m\,\vec a_{rel}=\vec F\;\underbrace{-\,m\vec a_{O'}}_{\text{traslazione}}\;\underbrace{-\,m\,\boldsymbol\alpha\times\vec r_{rel}}_{\text{Euler}}\;\underbrace{-\,m\,\boldsymbol\omega\times(\boldsymbol\omega\times\vec r_{rel})}_{\text{centrifuga}}\;\underbrace{-\,2m\,\boldsymbol\omega\times\vec v_{rel}}_{\text{Coriolis}}\;}$$ <b>Le forze apparenti.</b><br>— <b>Traslazione</b> $-m\vec a_{O'}$: presente se l'origine mobile accelera (es. l'auto che frena).<br>— <b>Euler</b> $-m\,\boldsymbol\alpha\times\vec r_{rel}$: presente se la rotazione è non uniforme ($\boldsymbol\alpha\neq0$).<br>— <b>Centrifuga</b> $-m\,\boldsymbol\omega\times(\boldsymbol\omega\times\vec r_{rel})=+m\omega^2\vec r_\perp$: radiale verso l'esterno, modulo $m\omega^2 r_\perp$.<br>— <b>Coriolis</b> $-2m\,\boldsymbol\omega\times\vec v_{rel}$: ortogonale a $\vec v_{rel}$, presente solo se il corpo si muove nel sistema rotante.<br><br><b>Senso fisico.</b> Queste forze non hanno agente né reazione: non sono esercitate da alcun corpo. Nascono unicamente perché il riferimento è accelerato. Tuttavia i loro effetti sono reali e misurabili nel riferimento (deviazioni, spinte). L'osservatore non inerziale è \emph{costretto} a introdurle per poter continuare a scrivere il secondo principio nella forma $\vec F_{tot}=m\vec a_{rel}$: sono la correzione che ripristina la struttura di Newton in un mondo che accelera. $\blacksquare$

---

## L4

**Richiesta:** Deriva, al primo ordine in $\omega$, la deviazione verso est di un grave che cade da un'altezza $h$ nell'emisfero nord, usando la forza di Coriolis.

**Argomento dichiarato:** Deviazione verso est nella caduta

**Dimostrazione modello:**

Ipotesi: caduta da fermo da altezza $h$; $\omega$ velocità angolare terrestre, piccola, tratto la deviazione come perturbazione. Latitudine $\lambda$.<br><br><b>Moto all'ordine zero.</b> Senza Coriolis il grave cade verticalmente: $$v_{rel}(t)\simeq g t\quad(\text{verso il basso}),\qquad z\simeq h-\tfrac12 g t^2.$$ Il tempo di caduta è $t_c=\sqrt{2h/g}$.<br><br><b>Forza di Coriolis.</b> $$\vec F_{Cor}=-2m\,\boldsymbol\omega\times\vec v_{rel}.$$ Scelgo assi locali: $x$ verso est, $y$ verso nord, $z$ verso l'alto. La velocità angolare ha componenti $\boldsymbol\omega=(0,\ \omega\cos\lambda,\ \omega\sin\lambda)$; la velocità di caduta è $\vec v_{rel}=(0,0,-gt)$. Il prodotto vettoriale: $$\boldsymbol\omega\times\vec v_{rel}=\begin{vmatrix}\hat x&\hat y&\hat z\\0&\omega\cos\lambda&\omega\sin\lambda\\0&0&-gt\end{vmatrix}=\big(-\omega\cos\lambda\,gt\big)\hat x.$$ Quindi l'accelerazione di Coriolis è $$\vec a_{Cor}=-2\,\boldsymbol\omega\times\vec v_{rel}=+2\omega g t\cos\lambda\ \hat x,$$ diretta verso \textbf{est} ($+\hat x$).<br><br><b>Integrazione.</b> Integro due volte l'accelerazione verso est, con condizioni iniziali nulle: $$\dot x=\int_0^t 2\omega g t'\cos\lambda\,dt'=\omega g t^2\cos\lambda,$$ $$x(t)=\int_0^t \omega g t'^2\cos\lambda\,dt'=\tfrac13\,\omega g t^3\cos\lambda.$$ Valuto a $t_c=\sqrt{2h/g}$: $$x_{est}=\frac{1}{3}\,\omega g\cos\lambda\left(\frac{2h}{g}\right)^{3/2}=\frac{1}{3}\,\omega\cos\lambda\,\sqrt{\frac{8h^3}{g}}.\qquad\blacksquare$$ La deviazione è verso est, cresce come $h^{3/2}$, è massima all'equatore ($\cos\lambda=1$) e nulla ai poli. È un effetto piccolo (centimetri per torri di decine di metri) ma misurabile, e conferma la rotazione terrestre.

---

## L5

**Richiesta:** Dimostra la formula di Poisson $\dfrac{d\hat u}{dt}=\boldsymbol\omega\times\hat u$ per un versore solidale a un corpo rigido che ruota con velocità angolare $\boldsymbol\omega$.

**Argomento dichiarato:** Formula di Poisson

**Dimostrazione modello:**

Considero una terna di versori $\{\hat i',\hat j',\hat k'\}$ solidale a un corpo rigido (o a un riferimento) che ruota con velocità angolare $\boldsymbol\omega$. Cerco la derivata temporale di un generico versore $\hat u$ solidale al corpo. <b>Vincoli di rigidità.</b> I versori mantengono modulo unitario e angoli reciproci costanti: $$\hat u\cdot\hat u=1,\qquad \hat u_a\cdot\hat u_b=\text{cost}.$$ Derivando $\hat u\cdot\hat u=1$: $\hat u\cdot\dot{\hat u}=0$, dunque $\dot{\hat u}\perp\hat u$. <b>Struttura lineare e antisimmetrica.</b> La mappa che a $\hat u$ associa $\dot{\hat u}$ è lineare: scrivo $\dot{\hat u}=\Omega\,\hat u$ con $\Omega$ matrice. Derivando $\hat u_a\cdot\hat u_b=\text{cost}$: $$\dot{\hat u}_a\cdot\hat u_b+\hat u_a\cdot\dot{\hat u}_b=0\ \Longrightarrow\ \Omega_{ba}+\Omega_{ab}=0,$$ cioè $\Omega$ è \emph{antisimmetrica}. Una matrice $3\times3$ antisimmetrica ha tre sole componenti indipendenti e agisce esattamente come un prodotto vettoriale: esiste un vettore $\boldsymbol\omega$ tale che $\Omega\,\hat u=\boldsymbol\omega\times\hat u$ per ogni $\hat u$. Dunque $$\boxed{\ \frac{d\hat u}{dt}=\boldsymbol\omega\times\hat u\ }\qquad\blacksquare$$ <b>Significato fisico.</b> La variazione di un versore solidale a un corpo rigido è una rotazione pura, descritta dal prodotto vettoriale con la velocità angolare. Il modulo $|\dot{\hat u}|=\omega\sin\alpha$ (con $\alpha$ angolo tra $\hat u$ e $\boldsymbol\omega$) si annulla per i versori paralleli all'asse: quelli non ruotano. È il mattone su cui si costruisce l'operatore $(d/dt)_{fix}=(d/dt)_{rot}+\boldsymbol\omega\times$ e con esso tutta la cinematica relativa.

---

## L6

**Richiesta:** Dimostra che le velocità angolari si compongono additivamente: $\boldsymbol\omega_{2/0}=\boldsymbol\omega_{2/1}+\boldsymbol\omega_{1/0}$, e spiega perché ciò vale per le velocità angolari ma non per le rotazioni finite.

**Argomento dichiarato:** Composizione delle velocità angolari

**Dimostrazione modello:**

Considero tre riferimenti: fisso $S_0$; intermedio $S_1$ che ruota rispetto a $S_0$ con velocità angolare $\boldsymbol\omega_{1/0}$; $S_2$ che ruota rispetto a $S_1$ con $\boldsymbol\omega_{2/1}$. Cerco la velocità angolare di $S_2$ rispetto a $S_0$. <b>Strumento.</b> Per un qualunque vettore $\vec A$, tra due riferimenti in rotazione relativa $\boldsymbol\omega$: $$\left(\frac{d\vec A}{dt}\right)_{0}=\left(\frac{d\vec A}{dt}\right)_{1}+\boldsymbol\omega_{1/0}\times\vec A.$$ <b>Derivazione.</b> Prendo un versore $\hat u$ solidale a $S_2$ e ne calcolo la derivata vista da $S_0$: $$\left(\frac{d\hat u}{dt}\right)_0=\left(\frac{d\hat u}{dt}\right)_1+\boldsymbol\omega_{1/0}\times\hat u.$$ Essendo $\hat u$ solidale a $S_2$, per Poisson tra $S_2$ e $S_1$ vale $(d\hat u/dt)_1=\boldsymbol\omega_{2/1}\times\hat u$. Sostituisco: $$\left(\frac{d\hat u}{dt}\right)_0=\boldsymbol\omega_{2/1}\times\hat u+\boldsymbol\omega_{1/0}\times\hat u=(\boldsymbol\omega_{2/1}+\boldsymbol\omega_{1/0})\times\hat u.$$ Ma per Poisson tra $S_2$ e $S_0$ è anche $(d\hat u/dt)_0=\boldsymbol\omega_{2/0}\times\hat u$. Uguagliando per ogni $\hat u$: $$\boxed{\ \boldsymbol\omega_{2/0}=\boldsymbol\omega_{2/1}+\boldsymbol\omega_{1/0}\ }\qquad\blacksquare$$ <b>Significato fisico.</b> Le velocità angolari si sommano \emph{vettorialmente}, come le velocità lineari nelle traslazioni. È tutt'altro che ovvio: le rotazioni \emph{finite} non commutano e non si sommano (l'ordine con cui si ruota un oggetto attorno a due assi conta). Le velocità angolari — rotazioni infinitesime al secondo — invece sì, perché al primo ordine i termini di ordine superiore, i commutatori tra le rotazioni, svaniscono. Questa additività permette di trattare giroscopi e catene di corpi rotanti sommando i contributi asse per asse.

---

## L7

**Richiesta:** Deriva la forza centrifuga nel riferimento rotante, $\vec F_{cf}=-m\,\boldsymbol\omega\times(\boldsymbol\omega\times\vec r)=m\omega^2\vec r_\perp$, e discutine direzione, modulo e natura.

**Argomento dichiarato:** Forza centrifuga

**Dimostrazione modello:**

Ipotesi: riferimento che ruota con $\boldsymbol\omega$ costante attorno a un asse fisso per l'origine comune ($\vec v_{O'}=0$, $\boldsymbol\alpha=0$). Cerco la forza apparente centrifuga che l'osservatore rotante deve introdurre. <b>Dall'equazione del moto relativo.</b> Il teorema delle accelerazioni dà $$m\vec a_{rel}=\vec F-m\,\boldsymbol\omega\times(\boldsymbol\omega\times\vec r)-2m\,\boldsymbol\omega\times\vec v_{rel}.$$ Il termine di trascinamento rotatorio $-m\,\boldsymbol\omega\times(\boldsymbol\omega\times\vec r)$ è la forza centrifuga. <b>Sviluppo con BAC-CAB.</b> $$\boldsymbol\omega\times(\boldsymbol\omega\times\vec r)=\boldsymbol\omega(\boldsymbol\omega\cdot\vec r)-\vec r(\boldsymbol\omega\cdot\boldsymbol\omega)=\boldsymbol\omega(\boldsymbol\omega\cdot\vec r)-\omega^2\vec r.$$ Decompongo $\vec r=\vec r_\parallel+\vec r_\perp$ nelle parti parallela e ortogonale a $\boldsymbol\omega$. Poiché $\boldsymbol\omega(\boldsymbol\omega\cdot\vec r)=\omega^2\vec r_\parallel$: $$\boldsymbol\omega\times(\boldsymbol\omega\times\vec r)=\omega^2\vec r_\parallel-\omega^2\vec r=-\omega^2\vec r_\perp.$$ Dunque $$\vec F_{cf}=-m\,\boldsymbol\omega\times(\boldsymbol\omega\times\vec r)=+m\omega^2\vec r_\perp.\qquad\blacksquare$$ <b>Significato fisico.</b> La centrifuga è diretta radialmente verso l'esterno, ortogonale all'asse, con modulo $m\omega^2 r_\perp$ proporzionale alla distanza dall'asse. Non dipende dalla velocità del corpo (a differenza di Coriolis) ma solo dalla posizione: agisce anche su un corpo fermo nel riferimento rotante. Non ha agente né reazione: è la manifestazione, nel riferimento rotante, della tendenza inerziale del corpo a proseguire in linea retta. È la spinta verso la portiera che senti in curva.

---

## L8

**Richiesta:** Ricava come la rotazione terrestre modifica l'accelerazione di gravità apparente in funzione della latitudine $\lambda$, ottenendo $g_{eff}\approx g_0-\omega^2 R\cos^2\lambda$.

**Argomento dichiarato:** g efficace in funzione della latitudine

**Dimostrazione modello:**

Ipotesi: Terra sferica di raggio $R$, rotante con velocità angolare $\omega$ uniforme; corpo in quiete sulla superficie a latitudine $\lambda$. L'osservatore terrestre è in un riferimento rotante. <b>Composizione.</b> Sul corpo fermo ($\vec v_{rel}=0$, niente Coriolis) agiscono la gravità 'vera' $\vec g_0$ (verso il centro) e la centrifuga. L'accelerazione di gravità efficace è $$\vec g_{eff}=\vec g_0+\omega^2\vec r_\perp,$$ dove $\vec r_\perp$ punta dall'asse verso il corpo, con modulo $r_\perp=R\cos\lambda$: il termine centrifugo vale $\omega^2 R\cos\lambda$, diretto verso l'esterno e ortogonale all'asse. <b>Modulo lungo la verticale.</b> Proietto la centrifuga sulla verticale locale (radiale). L'angolo tra $\vec r_\perp$ e la verticale è $\lambda$, quindi la componente radiale (uscente) della centrifuga è $\omega^2 R\cos\lambda\cdot\cos\lambda$. Essa si oppone a $g_0$: $$g_{eff}\approx g_0-\omega^2 R\cos^2\lambda.\qquad\blacksquare$$ <b>Significato fisico.</b> La gravità apparente è \emph{minima all'equatore} ($\lambda=0$: riduzione piena $\omega^2 R\approx0{,}034\ \mathrm{m/s^2}$, circa lo $0{,}3\%$ di $g$) e \emph{massima ai poli} ($\lambda=90^\circ$: centrifuga nulla, $g_{eff}=g_0$). La componente della centrifuga lungo il meridiano, inoltre, devia il filo a piombo verso l'equatore: la verticale 'vera' non punta esattamente al centro della Terra (salvo a poli ed equatore). Sommato allo schiacciamento della Terra — a sua volta prodotto dalla rotazione — questo spiega la variazione misurata di $g$ con la latitudine.

---

## L9

**Richiesta:** Dimostra che il piano di oscillazione di un pendolo precede per effetto di Coriolis con velocità angolare $\Omega_F=-\omega\sin\lambda$, e ricavane il periodo alla latitudine $\lambda$.

**Argomento dichiarato:** Pendolo di Foucault

**Dimostrazione modello:**

Ipotesi: pendolo lungo, piccole oscillazioni, latitudine $\lambda$; $\omega$ (rotazione terrestre) piccola. <b>Impostazione.</b> Nel piano orizzontale locale $(x\ \text{est},\,y\ \text{nord})$ il pendolo è un oscillatore armonico $\ddot{\vec r}=-\omega_0^2\vec r$ con $\omega_0=\sqrt{g/\ell}$, cui si aggiunge la forza di Coriolis. Nel moto orizzontale conta la componente verticale della velocità angolare terrestre, $\omega_z=\omega\sin\lambda$. Le equazioni sono $$\ddot x=-\omega_0^2 x+2\omega_z\dot y,\qquad \ddot y=-\omega_0^2 y-2\omega_z\dot x.$$ <b>Variabile complessa.</b> Pongo $\zeta=x+iy$ e combino ($\ddot x+i\ddot y$): $$\ddot\zeta+2i\omega_z\dot\zeta+\omega_0^2\zeta=0.$$ <b>Soluzione.</b> Cerco $\zeta=e^{i\mu t}$: $-\mu^2-2\omega_z\mu+\omega_0^2=0$, cioè $\mu=-\omega_z\pm\sqrt{\omega_z^2+\omega_0^2}\approx-\omega_z\pm\omega_0$ (poiché $\omega_z\ll\omega_0$). Dunque $$\zeta(t)=e^{-i\omega_z t}\big(A\,e^{i\omega_0 t}+B\,e^{-i\omega_0 t}\big).$$ Il termine tra parentesi è una normale oscillazione lineare nel piano; il prefattore $e^{-i\omega_z t}$ ruota rigidamente quel piano con velocità angolare $$\boxed{\ \Omega_F=-\omega_z=-\omega\sin\lambda\ }\qquad\blacksquare$$ <b>Significato fisico.</b> Il piano di oscillazione precede con periodo $T_F=\dfrac{2\pi}{\omega\sin\lambda}=\dfrac{T_{giorno}}{\sin\lambda}$. Ai poli ($\lambda=90^\circ$) compie un giro in un giorno sidereo ($\approx23{,}93\ \mathrm{h}$): è la Terra a ruotare sotto il pendolo. All'equatore ($\lambda=0$) la precessione si annulla. Il segno negativo indica rotazione oraria nell'emisfero nord. È la prova da laboratorio, senza alcun riferimento astronomico, della rotazione terrestre: l'esperimento di Foucault del 1851.


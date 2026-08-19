# Lavagne del pool: cinematica

Ogni voce: la richiesta d'esame e la dimostrazione modello da verificare.

---

## L1

**Richiesta:** Deriva per integrazione le leggi orarie del moto uniformemente accelerato, $v(t)=v_0+at$ e $x(t)=x_0+v_0t+\tfrac12 at^2$, dichiarando le condizioni iniziali.

**Argomento dichiarato:** Leggi orarie del moto uniformemente accelerato

**Dimostrazione modello:**

Ipotesi: accelerazione costante $a=\text{cost}$, moto rettilineo lungo l'asse $x$. Condizioni iniziali: $x(0)=x_0$, $v(0)=v_0$.<br><br><b>Prima integrazione (velocità).</b> Per definizione $a=\dfrac{dv}{dt}$, quindi $dv=a\,dt$. Integro tra l'istante $0$ e $t$: $$\int_{v_0}^{v(t)}dv'=\int_0^t a\,dt'=a\int_0^t dt'\;\Longrightarrow\; v(t)-v_0=a\,t.$$ Dunque $$v(t)=v_0+at.$$ <b>Seconda integrazione (posizione).</b> Per definizione $v=\dfrac{dx}{dt}$, quindi $dx=v\,dt=(v_0+at)\,dt$. Integro tra $0$ e $t$: $$\int_{x_0}^{x(t)}dx'=\int_0^t (v_0+at')\,dt'=v_0\,t+\tfrac12 a t^2.$$ Dunque $$x(t)=x_0+v_0 t+\tfrac12 a t^2.\qquad\blacksquare$$ Le due costanti $x_0,v_0$ sono le condizioni iniziali: ogni integrazione ne introduce una, fissata dallo stato del sistema a $t=0$.

---

## L2

**Richiesta:** Deriva la traiettoria, il tempo di volo e la gittata di un proiettile lanciato da terra con velocità $v_0$ e angolo $\theta$, in assenza di attrito.

**Argomento dichiarato:** Moto del proiettile

**Dimostrazione modello:**

Ipotesi: unica forza la gravità, $\vec a=(0,-g)$; assi $x$ orizzontale, $y$ verticale; lancio dall'origine.<br><br><b>Leggi orarie.</b> Per il principio di indipendenza dei moti, i due assi si trattano separatamente. Lungo $x$ ($a_x=0$, moto uniforme) e lungo $y$ ($a_y=-g$, uniformemente accelerato): $$x(t)=v_0\cos\theta\,t,\qquad y(t)=v_0\sin\theta\,t-\tfrac12 g t^2.$$ <b>Traiettoria.</b> Elimino il tempo: da $x$ ottengo $t=\dfrac{x}{v_0\cos\theta}$; sostituisco in $y$: $$y=x\tan\theta-\frac{g}{2v_0^2\cos^2\theta}\,x^2.$$ È una parabola con la concavità verso il basso. <b>Tempo di volo.</b> Il proiettile torna a $y=0$ quando $v_0\sin\theta\,t-\tfrac12 g t^2=0$, cioè $t(v_0\sin\theta-\tfrac12 g t)=0$. Oltre a $t=0$: $$t_v=\frac{2v_0\sin\theta}{g}.$$ <b>Gittata.</b> È la $x$ raggiunta a $t=t_v$: $$G=v_0\cos\theta\,t_v=\frac{2v_0^2\sin\theta\cos\theta}{g}=\frac{v_0^2\sin 2\theta}{g}.\qquad\blacksquare$$ La gittata è massima per $2\theta=90^\circ$, cioè $\theta=45^\circ$.

---

## L3

**Richiesta:** Deriva l'espressione dell'accelerazione centripeta $a_c=v^2/r$ nel moto circolare uniforme, partendo dal vettore velocità.

**Argomento dichiarato:** Accelerazione centripeta nel moto circolare uniforme

**Dimostrazione modello:**

Considero un moto circolare uniforme di raggio $r$ e velocità angolare $\omega$ costante. Uso i versori polari: il versore radiale $\hat u_r$ e il tangenziale $\hat u_\theta$, che ruotano con angolo $\theta(t)=\omega t$.<br><br><b>Derivate dei versori.</b> Poiché ruotano con velocità angolare $\omega$: $$\frac{d\hat u_r}{dt}=\omega\,\hat u_\theta,\qquad \frac{d\hat u_\theta}{dt}=-\omega\,\hat u_r.$$ <b>Posizione e velocità.</b> Il punto è $\vec r=r\,\hat u_r$ con $r$ costante. Derivo: $$\vec v=\frac{d\vec r}{dt}=r\,\frac{d\hat u_r}{dt}=r\omega\,\hat u_\theta,$$ quindi $v=|\vec v|=\omega r$, tangente alla circonferenza. <b>Accelerazione.</b> Derivo ancora, ricordando che $r$ e $\omega$ sono costanti: $$\vec a=\frac{d\vec v}{dt}=r\omega\,\frac{d\hat u_\theta}{dt}=r\omega(-\omega\,\hat u_r)=-\omega^2 r\,\hat u_r.$$ Il segno $-$ indica direzione verso il centro (centripeta). Il modulo è $$a_c=\omega^2 r=\frac{v^2}{r},$$ avendo usato $v=\omega r$. $\blacksquare$ L'accelerazione è puramente centripeta perché $|\vec v|$ è costante: non c'è componente tangenziale.

---

## L4

**Richiesta:** Deriva la relazione di Torricelli $v^2=v_0^2+2a(x-x_0)$ per il moto uniformemente accelerato, senza usare esplicitamente il tempo nel risultato finale.

**Argomento dichiarato:** Relazione di Torricelli

**Dimostrazione modello:**

Ipotesi: $a$ costante. Metodo per eliminazione del tempo.<br><br>Parto dalle leggi orarie: $$v=v_0+at,\qquad x-x_0=v_0 t+\tfrac12 a t^2.$$ Dalla prima isolo il tempo: $$t=\frac{v-v_0}{a}.$$ Sostituisco nella seconda: $$x-x_0=v_0\,\frac{v-v_0}{a}+\tfrac12 a\left(\frac{v-v_0}{a}\right)^2 =\frac{v_0(v-v_0)}{a}+\frac{(v-v_0)^2}{2a}.$$ Metto a denominatore comune $2a$: $$x-x_0=\frac{2v_0(v-v_0)+(v-v_0)^2}{2a}=\frac{(v-v_0)\big[2v_0+(v-v_0)\big]}{2a}=\frac{(v-v_0)(v+v_0)}{2a}.$$ Il numeratore è una differenza di quadrati: $$x-x_0=\frac{v^2-v_0^2}{2a}.$$ Riordinando: $$v^2=v_0^2+2a\,(x-x_0).\qquad\blacksquare$$ Metodo alternativo (energia cinematica): da $a=v\dfrac{dv}{dx}$ segue $v\,dv=a\,dx$, che integrato dà lo stesso risultato.

---

## L5

**Richiesta:** Dimostra che la proiezione su un diametro di un moto circolare uniforme è un moto armonico semplice, con $x(t)=A\cos(\omega t+\varphi)$ e accelerazione $a=-\omega^2 x$.

**Argomento dichiarato:** Moto armonico come proiezione del moto circolare uniforme

**Dimostrazione modello:**

Ipotesi: un punto $Q$ percorre una circonferenza di raggio $A$ con velocità angolare $\omega$ costante; l'angolo è $\theta(t)=\omega t+\varphi$. <b>Proiezione.</b> Le coordinate di $Q$ sono $X=A\cos\theta$ e $Y=A\sin\theta$. Proietto sul diametro orizzontale: $$x(t)=A\cos(\omega t+\varphi).$$ <b>Velocità e accelerazione.</b> Derivo due volte rispetto al tempo: $$\dot x=-A\omega\sin(\omega t+\varphi),\qquad \ddot x=-A\omega^2\cos(\omega t+\varphi).$$ Riconosco nell'ultima espressione $-\omega^2$ moltiplicato per $x(t)$: $$\ddot x=-\omega^2\,x.$$ È l'equazione del moto armonico semplice: accelerazione proporzionale allo spostamento e diretta in senso opposto, cioè un richiamo verso l'origine. $\blacksquare$<br><br><b>Significato fisico.</b> Il moto armonico è 'l'ombra' del moto circolare uniforme: la stessa $\omega$ è la pulsazione dell'oscillazione e il periodo è $T=2\pi/\omega$. La relazione $\ddot x=-\omega^2 x$ è la firma di ogni oscillatore: ricompare ogni volta che un sistema è vicino a un minimo di energia potenziale, perché lì la forza di richiamo è, al primo ordine, proporzionale allo spostamento ($F\simeq-kx$, con $\omega=\sqrt{k/m}$). È il ponte tra cinematica rotatoria e piccole oscillazioni.

---

## L6

**Richiesta:** Per un moto circolare di raggio $R$ con velocità angolare variabile $\omega(t)$, deriva l'accelerazione e mostra la separazione in componente tangenziale $a_t=R\dot\omega$ e centripeta $a_n=\omega^2 R=v^2/R$.

**Argomento dichiarato:** Moto circolare vario: componenti tangenziale e centripeta

**Dimostrazione modello:**

Ipotesi: moto su circonferenza di raggio $R$ costante, con angolo $\theta(t)$ qualsiasi e velocità angolare $\omega=\dot\theta$ variabile. Uso i versori polari, con $\dfrac{d\hat u_r}{dt}=\omega\,\hat u_\theta$ e $\dfrac{d\hat u_\theta}{dt}=-\omega\,\hat u_r$. <b>Velocità.</b> Da $\vec r=R\,\hat u_r$ con $R$ costante: $$\vec v=R\,\frac{d\hat u_r}{dt}=R\omega\,\hat u_\theta,\qquad v=\omega R.$$ <b>Accelerazione.</b> Derivo, tenendo $R$ costante ma non $\omega$: $$\vec a=\frac{d}{dt}\big(R\omega\,\hat u_\theta\big)=R\dot\omega\,\hat u_\theta+R\omega\,\frac{d\hat u_\theta}{dt}=R\dot\omega\,\hat u_\theta-R\omega^2\,\hat u_r.$$ Le due componenti sono ortogonali: $$a_t=R\dot\omega\ \ (\text{tangenziale}),\qquad a_n=R\omega^2=\frac{v^2}{R}\ \ (\text{centripeta}).$$ Coerenza: poiché $v=\omega R$ con $R$ costante, $\dot v=R\dot\omega=a_t$, cioè la componente tangenziale è proprio la derivata del modulo della velocità. $\blacksquare$<br><br><b>Significato fisico.</b> La separazione è netta e generale: la componente tangenziale $a_t$ cambia la \emph{rapidità} (il modulo di $\vec v$), la componente centripeta $a_n$ cambia la \emph{direzione}. Il modulo totale è $a=\sqrt{a_t^2+a_n^2}$. Nel moto circolare uniforme $\dot\omega=0$ e sopravvive solo la centripeta; quando $\omega$ varia (una ruota che frena) compaiono entrambe. È lo stesso schema $\vec a=\dot v\,\hat t+(v^2/\rho)\,\hat n$ visto per una traiettoria qualsiasi, qui con $\rho=R$.

---

## L7

**Richiesta:** Data un'accelerazione funzione della sola velocità, $a=a(v)$, imposta la soluzione per separazione di variabili e ricava $v(t)$; applica poi al caso dell'attrito viscoso $a=-\gamma v$.

**Argomento dichiarato:** Integrazione del moto con accelerazione dipendente dalla velocità

**Dimostrazione modello:**

Ipotesi: accelerazione funzione della sola velocità, $a=a(v)$, in moto rettilineo. Il metodo del moto uniformemente accelerato non vale: serve separare le variabili. <b>Impostazione.</b> Da $a=\dfrac{dv}{dt}=a(v)$ separo $v$ e $t$: $$\frac{dv}{a(v)}=dt.$$ Integro tra lo stato iniziale $(0,v_0)$ e uno generico $(t,v)$: $$\int_{v_0}^{v}\frac{dv'}{a(v')}=\int_0^t dt'=t.$$ Questa relazione dà $t(v)$; invertendola si ottiene $v(t)$. <b>Variante in $x$.</b> Se serve $v(x)$, uso la regola della catena $a=\dfrac{dv}{dt}=\dfrac{dv}{dx}\dfrac{dx}{dt}=v\dfrac{dv}{dx}$, da cui $\dfrac{v\,dv}{a(v)}=dx$. <b>Esempio: attrito viscoso $a=-\gamma v$.</b> $$\int_{v_0}^{v}\frac{dv'}{-\gamma v'}=t\;\Longrightarrow\;-\frac{1}{\gamma}\ln\frac{v}{v_0}=t\;\Longrightarrow\;v(t)=v_0\,e^{-\gamma t}.$$ La velocità decade esponenzialmente con tempo caratteristico $\tau=1/\gamma$. $\blacksquare$<br><br><b>Significato fisico.</b> Quando la forza dipende dalla velocità (resistenza dell'aria, attrito viscoso) le leggi orarie del moto uniformemente accelerato non si applicano: la separazione delle variabili è lo strumento corretto. La scelta tra integrare in $dt$ o in $dx$ dipende da cosa si cerca. Se l'accelerazione è $a=g-\gamma v$ lo stesso metodo fornisce la velocità limite $v_\infty=g/\gamma$, raggiunta quando $a=0$.

---

## L8

**Richiesta:** Dimostra il principio di indipendenza dei moti — le componenti cartesiane evolvono separatamente — a partire dalla decomposizione vettoriale, e applicalo al moto del proiettile.

**Argomento dichiarato:** Indipendenza dei moti lungo gli assi

**Dimostrazione modello:**

Ipotesi: descrizione in coordinate cartesiane, i cui versori $\hat i,\hat j,\hat k$ sono costanti nel tempo e linearmente indipendenti. <b>Decomposizione.</b> Scrivo $\vec r(t)=x\,\hat i+y\,\hat j+z\,\hat k$. Poiché i versori non dipendono dal tempo, derivare due volte agisce solo sulle componenti: $$\vec a=\frac{d^2\vec r}{dt^2}=\ddot x\,\hat i+\ddot y\,\hat j+\ddot z\,\hat k.$$ <b>Unicità delle componenti.</b> Un'equazione vettoriale $\vec a=\vec f$, con $\vec f=f_x\hat i+f_y\hat j+f_z\hat k$, equivale — per l'indipendenza lineare della base — al sistema di tre equazioni scalari $$\ddot x=f_x,\qquad \ddot y=f_y,\qquad \ddot z=f_z.$$ Se ciascuna $f_i$ dipende solo dalla propria coordinata (o è costante), le tre equazioni sono \emph{disaccoppiate} e si integrano separatamente. $\blacksquare$<br><br><b>Applicazione: il proiettile.</b> Con $\vec a=(0,-g)$ si ottiene $\ddot x=0$ (moto uniforme) e $\ddot y=-g$ (uniformemente accelerato), integrati in modo indipendente. L'unico legame è il tempo $t$, parametro comune che, eliminato, ricompone la traiettoria parabolica. <b>Significato fisico.</b> È l'intuizione di Galileo: la gravità agisce solo in verticale e non tocca il moto orizzontale, che prosegue imperturbato. L'indipendenza vale finché la forza non accoppia le componenti: cade per la forza magnetica $q\,\vec v\times\vec B$ o per un attrito $\propto|\vec v|\,\vec v$, dove ogni componente della forza dipende da tutte le componenti della velocità.


# Esito verifica — pool "cinematica del punto" (8 lavagne)

Verifica di merito fisico. Conti rifatti, versi controllati. Undicesimo e ultimo pool.

Conteggio: **8 OK, 0 DUBBIO, 0 ERRORE.** Pool pulito.

---

## L1 — Leggi orarie del moto uniformemente accelerato

**OK.**

Prima integrazione: $\int_{v_0}^{v}dv'=a\int_0^t dt'=at\Rightarrow v(t)-v_0=at$, quindi $v=v_0+at$. Corretta.
Seconda: $\int_{x_0}^{x}dx'=\int_0^t(v_0+at')dt'=v_0t+\tfrac12 at^2\Rightarrow x=x_0+v_0t+\tfrac12 at^2$. Estremi d'integrazione e condizioni iniziali $x(0)=x_0$, $v(0)=v_0$ dichiarati ed usati correttamente. Le leggi sono integrate dalle definizioni, non scritte a memoria.

## L2 — Moto del proiettile

**OK.**

Leggi orarie $x=v_0\cos\theta\,t$, $y=v_0\sin\theta\,t-\tfrac12 gt^2$ coerenti con $\vec a=(0,-g)$ e lancio dall'origine (segno di $g$ corretto rispetto agli assi). Traiettoria: $t=x/(v_0\cos\theta)$ sostituito dà $y=x\tan\theta-\frac{g}{2v_0^2\cos^2\theta}x^2$, parabola concava verso il basso — corretto.
Tempo di volo per ritorno a $y=0$: $t_v=2v_0\sin\theta/g$. Gittata $G=v_0\cos\theta\,t_v=\frac{2v_0^2\sin\theta\cos\theta}{g}=\frac{v_0^2\sin2\theta}{g}$, massima a $\theta=45^\circ$. La gittata è ricavata imponendo il ritorno alla quota di partenza, come richiesto. Tutto corretto.

## L3 — Accelerazione centripeta nel moto circolare uniforme

**OK.**

Derivate dei versori $\dot{\hat u}_r=\omega\hat u_\theta$, $\dot{\hat u}_\theta=-\omega\hat u_r$: convenzione polare standard, coerente. $\vec v=r\dot{\hat u}_r=r\omega\hat u_\theta$, $v=\omega r$. $\vec a=r\omega\dot{\hat u}_\theta=-\omega^2 r\,\hat u_r$: segno negativo → verso il centro, corretto. Modulo $a_c=\omega^2 r=v^2/r$ con $v=\omega r$. Nessuna componente tangenziale perché $|\vec v|$ costante. Corretto.

## L4 — Relazione di Torricelli

**OK.**

$t=(v-v_0)/a$ sostituito nella legge oraria: $x-x_0=\frac{v_0(v-v_0)}{a}+\frac{(v-v_0)^2}{2a}$. Denominatore comune $2a$: numeratore $2v_0(v-v_0)+(v-v_0)^2=(v-v_0)[2v_0+(v-v_0)]=(v-v_0)(v+v_0)=v^2-v_0^2$. Quindi $x-x_0=\frac{v^2-v_0^2}{2a}$, cioè $v^2=v_0^2+2a(x-x_0)$. Fattorizzazione e differenza di quadrati corrette. Metodo alternativo $v\,dv=a\,dx$ da $a=v\,dv/dx$: valido. Tempo eliminato dal risultato finale, come richiesto.

## L5 — Moto armonico come proiezione del moto circolare uniforme

**OK.**

Proiezione $x(t)=A\cos(\omega t+\varphi)$. $\dot x=-A\omega\sin(\omega t+\varphi)$, $\ddot x=-A\omega^2\cos(\omega t+\varphi)=-\omega^2 x$. Segno di richiamo corretto (accelerazione opposta allo spostamento). Periodo $T=2\pi/\omega$ e legame $\omega=\sqrt{k/m}$ nel commento fisico corretti. Corretto.

## L6 — Moto circolare vario: componenti tangenziale e centripeta

**OK.**

$\vec v=R\omega\hat u_\theta$, $v=\omega R$. Derivando con $R$ costante ma $\omega$ variabile: $\vec a=R\dot\omega\hat u_\theta+R\omega\dot{\hat u}_\theta=R\dot\omega\hat u_\theta-R\omega^2\hat u_r$. Componenti $a_t=R\dot\omega$ (tangenziale), $a_n=R\omega^2=v^2/R$ (centripeta, verso $-\hat u_r$). Coerenza $\dot v=R\dot\omega=a_t$ verificata. Riduzione al caso uniforme ($\dot\omega=0$) e forma intrinseca $\vec a=\dot v\,\hat t+(v^2/\rho)\hat n$ corrette. Corretto.

## L7 — Integrazione con accelerazione dipendente dalla velocità

**OK.**

Separazione $dv/a(v)=dt$, $\int_{v_0}^v dv'/a(v')=t$: corretta. Variante in $x$ via $a=v\,dv/dx$: corretta. Attrito viscoso $a=-\gamma v$: $\int_{v_0}^v\frac{dv'}{-\gamma v'}=-\frac1\gamma\ln\frac{v}{v_0}=t\Rightarrow \ln(v/v_0)=-\gamma t\Rightarrow v(t)=v_0 e^{-\gamma t}$. Segni corretti, decadimento esponenziale con $\tau=1/\gamma$. Velocità limite $v_\infty=g/\gamma$ da $a=g-\gamma v=0$: corretta.

## L8 — Indipendenza dei moti lungo gli assi

**OK.**

Base cartesiana costante nel tempo: $\vec a=\ddot x\hat i+\ddot y\hat j+\ddot z\hat k$, derivare agisce solo sulle componenti. Per indipendenza lineare della base $\vec a=\vec f$ equivale al sistema scalare $\ddot x=f_x,\ \ddot y=f_y,\ \ddot z=f_z$; disaccoppiato se ogni $f_i$ dipende solo dalla propria coordinata. Applicazione al proiettile ($\ddot x=0$, $\ddot y=-g$) corretta, con il tempo come unico parametro comune. Controesempio del disaccoppiamento (forza magnetica $q\vec v\times\vec B$, attrito $\propto|\vec v|\vec v$) corretto. Corretto.

---

## Note di prosa (non ERRORE)

- **L4:** "Metodo alternativo (energia cinematica)" — la dicitura è impropria: il metodo $v\,dv=a\,dx$ è puramente cinematico (regola della catena), non energetico; e l'aggettivo "cinematica" riferito a "energia" è un refuso. Non tocca la correttezza del conto, che è giusto. Se si volesse, sostituire con "(metodo cinematico in $dx$)".

## Verdetto

Pool cinematica del punto: **8/8 corretto.** Nessuna sostituzione da applicare.

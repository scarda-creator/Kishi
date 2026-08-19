# Esito verifica — pool "applicazioni della dinamica"

Metodo: ogni risultato canonico, ogni fattore e ogni passaggio intermedio rifatto a mano; coerenza dimensionale e casi limite controllati. Verdetto secco in testa a ciascuna lavagna.

Conteggio finale: **12 OK, 0 DUBBIO, 0 ERRORE**. Due note di merito (L4, L7) su prosa qualitativa, non su formule: segnalate ma non declassano il verdetto.

---

## L1 — Oscillatore armonico semplice — **OK**

$\ddot x+\omega_0^2 x=0$ con $\omega_0^2=k/m$; radici $\pm i\omega_0$; $x=A\cos(\omega_0t+\varphi)$; $T=2\pi\sqrt{m/k}$: tutto corretto. Energia: $K=\tfrac12 mA^2\omega_0^2\sin^2$, $U=\tfrac12 kA^2\cos^2$, e poiché $m\omega_0^2=k$ la somma è $\tfrac12 kA^2$ costante, con $v_{max}=A\omega_0$. Dimensioni e limiti tutti coerenti.

## L2 — Oscillatore smorzato, tre regimi — **OK**

$\ddot x+2\gamma\dot x+\omega_0^2x=0$, $\gamma=b/2m$; radici $-\gamma\pm\sqrt{\gamma^2-\omega_0^2}$. Sottosmorzato: $\omega=\sqrt{\omega_0^2-\gamma^2}<\omega_0$, inviluppo $e^{-\gamma t}$, energia $e^{-2\gamma t}$ — corretto. Critico $\gamma=\omega_0$: radice doppia, $(A+Bt)e^{-\gamma t}$, ritorno nel minor tempo — corretto. Sovrasmorzato: due radici reali negative, rientro dominato dalla meno negativa, più lento del critico — corretto. Limite $\gamma\to0$ riproduce L1.

## L3 — Risonanza in ampiezza — **OK**

Con $u=\omega^2$, $D(u)=(\omega_0^2-u)^2+4\gamma^2u$ (il $4\gamma^2u$ è esattamente $(2\gamma\omega)^2$); $D'(u)=-2(\omega_0^2-u)+4\gamma^2=0$ dà $u=\omega_0^2-2\gamma^2$, con $D''=2>0$ (minimo del denominatore = massimo di $A$). Quindi $\omega_{ris}=\sqrt{\omega_0^2-2\gamma^2}$. Ampiezza di picco per piccolo smorzamento $\sim F_0/(2m\gamma\omega_0)$ — verificata come limite di $\frac{F_0/m}{2\gamma\sqrt{\omega_0^2-\gamma^2}}$. Ordinamento $\omega_{ris}<\omega<\omega_0$ corretto.

## L4 — Pendolo semplice e isocronismo — **OK**

$\ddot\theta=-\frac{g}{\ell}\sin\theta$, linearizzata $\ddot\theta+\frac{g}{\ell}\theta=0$, $\omega_0=\sqrt{g/\ell}$, $T=2\pi\sqrt{\ell/g}$: corretto. Correzione al prim'ordine $T\approx T_0(1+\theta_0^2/16)$: coefficiente esatto.
Nota (prosa, non formula): "per $\theta_0=90^\circ$ lo scarto è già di alcuni punti percentuali" **sottostima**. La formula stessa dà $\theta_0^2/16=(\pi/2)^2/16\approx0.154$, cioè 15%, e il valore esatto (integrale ellittico, $T/T_0=\tfrac{2}{\pi}K(\sin45^\circ)\approx1.18$) è 18%. È quasi un quinto, non "alcuni punti percentuali". La fisica e il fattore $1/16$ restano corretti; solo l'aggettivo è ottimista.

## L5 — Piano inclinato con attrito — **OK**

$N=mg\cos\theta$; condizione statica $mg\sin\theta\le\mu_s mg\cos\theta\Rightarrow\tan\theta_c=\mu_s$ (ricavata dal vincolo $f_s\le\mu_s N$, non asserita); dopo il distacco $a=g(\sin\theta-\mu_d\cos\theta)$. Massa elisa correttamente. Limite $\mu_d=0$ dà $a=g\sin\theta$ (piano liscio). Osservazione sullo "strappo" $\mu_d<\mu_s$ corretta.

## L6 — Molle serie e parallelo — **OK**

Parallelo: stesso allungamento, forze additive, $k_{eq}=k_1+k_2$. Serie: stessa forza, allungamenti additivi, $x=F(1/k_1+1/k_2)$ e da $x=F/k_{eq}$ segue $1/k_{eq}=1/k_1+1/k_2$. Corretto, incluso il confronto con i resistori (è la cedevolezza $1/k$ a sommarsi in serie) e $\omega_0=\sqrt{k_{eq}/m}$.

## L7 — Macchina di Atwood — **OK**

$m_1g-T=m_1a$, $T-m_2g=m_2a$; somma $\Rightarrow a=\frac{m_1-m_2}{m_1+m_2}g$. Tensione: $T=m_2(g+a)=m_2g+\frac{m_2(m_1-m_2)}{m_1+m_2}g=\frac{2m_1m_2}{m_1+m_2}g$ — rifatto, corretto. Limiti $m_1=m_2\Rightarrow a=0$ e $m_2\to0\Rightarrow a\to g$ corretti; $m_2g<T<m_1g$ corretto.
Nota (prosa, non formula): "$\frac{2m_1m_2}{m_1+m_2}g$, la media armonica delle masse per $g$ a meno del fattore 2" è terminologicamente **impreciso**. La media armonica di $m_1,m_2$ è *esattamente* $\frac{2m_1m_2}{m_1+m_2}$: il fattore 2 le appartiene già, quindi $T=g\times(\text{media armonica})$ senza alcun "a meno del fattore 2". Il fattore 2 comparirebbe solo se si usasse la massa ridotta $\mu=\frac{m_1m_2}{m_1+m_2}$, e allora $T=2\mu g$. La frase confonde media armonica e massa ridotta. Il box è corretto; è solo l'etichetta descrittiva a essere sbagliata.

## L8 — Caduta viscosa lineare — **OK**

$m\dot v=mg-bv$; $v_\infty=mg/b$ da $\dot v=0$; $v(t)=v_\infty(1-e^{-t/\tau})$ con $\tau=m/b$ (soluzione da fermo dell'equazione lineare del prim'ordine). Dopo $3\tau$: $1-e^{-3}=0.95$, corretto. Dimensioni: $[mg/b]=$ velocità, ok.

## L9 — Pendolo conico — **OK**

$r=\ell\sin\theta$; $T\cos\theta=mg$, $T\sin\theta=m\omega^2\ell\sin\theta\Rightarrow T=m\omega^2\ell$; sostituzione dà $\omega^2\ell\cos\theta=g$, quindi $\omega=\sqrt{g/(\ell\cos\theta)}$, $T=mg/\cos\theta$, $T_{per}=2\pi\sqrt{\ell\cos\theta/g}$. Tutto verificato. Limite $\theta\to0$ recupera il pendolo semplice $2\pi\sqrt{\ell/g}$; $\theta\to90^\circ$ richiede $T\to\infty$, corretto.

## L10 — Fasori: ampiezza e fase — **OK**

$\tilde x=\frac{F_0/m}{(\omega_0^2-\omega^2)+2i\gamma\omega}$; modulo e argomento danno $A(\omega)$ (identica a L3) e $\tan\varphi=\frac{2\gamma\omega}{\omega_0^2-\omega^2}$. Fase: $\varphi\to0$ per $\omega\ll\omega_0$, $\varphi=\pi/2$ esatto a $\omega=\omega_0$ (denominatore reale nullo), $\varphi\to\pi$ per $\omega\gg\omega_0$. $A(\omega_0)=F_0/(2m\gamma\omega_0)$ corretto. Distinzione picco-ampiezza a $\omega_{ris}$ vs fase-$\pi/2$ a $\omega_0$ corretta.

## L11 — Fattore Q e larghezza di risonanza — **OK**

$Q=\omega_0/2\gamma$; $E(t)=E_0e^{-2\gamma t}$; perdita per ciclo $|\Delta E|\approx E\cdot2\gamma T=E\cdot\frac{4\pi\gamma}{\omega_0}$; quindi $2\pi E/|\Delta E|=\frac{\omega_0}{2\gamma}=Q$ — coerente. FWHM: near $\omega_0$, $A^2\propto[4\omega_0^2(\delta^2+\gamma^2)]^{-1}$, metà altezza a $\delta=\pm\gamma$, dunque $\Delta\omega=2\gamma$ e $Q=\omega_0/\Delta\omega$ — rifatto, corretto. Numero di cicli $\sim Q/\pi$ verificato ($\frac{1/\gamma}{2\pi/\omega_0}=\frac{\omega_0}{2\pi\gamma}=Q/\pi$).

## L12 — Oscillatori accoppiati e modi normali — **OK**

EOM con segni corretti. Somma: i termini $\pm k_c(x_2-x_1)$ si elidono $\Rightarrow m\ddot q_+=-kq_+$. Differenza: si raddoppiano $\Rightarrow m\ddot q_-=-(k+2k_c)q_-$ — rifatto entrambi. $\omega_1=\sqrt{k/m}$ (simmetrico $q_-=0$, $x_1=x_2$, molla centrale ferma), $\omega_2=\sqrt{(k+2k_c)/m}$ (antisimmetrico). Inversione $x_1=\tfrac12(q_++q_-)$, $x_2=\tfrac12(q_+-q_-)$ corretta. Battimenti: con $x_1(0)=a,x_2(0)=0$, $q_\pm(0)=a$, prostaferesi dà $x_1=a\cos\bar\omega t\cos\Delta t$, $x_2=a\sin\bar\omega t\sin\Delta t$ con $\bar\omega=\tfrac{\omega_1+\omega_2}{2}$, $\Delta=\tfrac{\omega_2-\omega_1}{2}$ — verificato (segno di $x_2$ corretto: $\cos\omega_1t-\cos\omega_2t=2\sin\bar\omega t\sin\Delta t$). Debole accoppiamento $\omega_2\simeq\omega_1(1+k_c/k)$ e migrazione d'energia in $t=\pi/(2\Delta)$ corretti.

---

## Sintesi

Pool **genuinamente pulito** sui risultati verificabili: 12 lavagne, 12 formule/box corretti, nessun errore nei passaggi intermedi. Nessun ERRORE forzato.

Due imprecisioni di prosa qualitativa (non correzioni obbligate, decidi tu):
- **L4**: "alcuni punti percentuali" per $\theta_0=90^\circ$ sottostima (è ~18%).
- **L7**: "media armonica ... a meno del fattore 2" confonde media armonica (che include già il 2) e massa ridotta.

Nessuna delle due tocca box o passaggi: le lascio come note, non come sostituzioni di stringa.

# Esito verifica — pool "grandezze e calcolo vettoriale"

Metodo: conto rifatto da zero su ogni lavagna, controllo di segni, versi, coerenza
dimensionale, e correttezza logica (perpendicolarità dimostrata vs asserita, formule
polari ricavate vs a memoria). 8 lavagne verificate.

Conteggio: **8 OK, 0 DUBBIO, 0 ERRORE.**

---

## L1 — Derivata di un versore ⊥ al versore — OK

Da $\hat u\cdot\hat u=1$, Leibniz sul prodotto scalare (bilineare): $\frac{d}{dt}(\hat u\cdot\hat u)=2\,\hat u\cdot\dot{\hat u}=0\Rightarrow\hat u\cdot\dot{\hat u}=0$. La perpendicolarità è **dimostrata** derivando il vincolo di modulo unitario, non asserita — è esattamente il punto logico richiesto. La clausola "quando $\dot{\hat u}\neq0$" è corretta (se $\dot{\hat u}=0$ la perpendicolarità è vacua). Significato fisico corretto: modulo bloccato ⇒ variazione puramente rotazionale ⇒ centripeta nel moto circolare uniforme.

## L2 — BAC-CAB per componenti — OK

Rifatta la componente $x$. Con $\vec D=\vec B\times\vec C$: $D_z=B_xC_y-B_yC_x$, $D_y=B_zC_x-B_xC_z$. Allora $[\vec A\times\vec D]_x=A_yD_z-A_zD_y=A_yB_xC_y-A_yB_yC_x-A_zB_zC_x+A_zB_xC_z$. Aggiungendo/togliendo $A_xB_xC_x$ si raccoglie $B_x(\vec A\cdot\vec C)-C_x(\vec A\cdot\vec B)$: ogni termine torna. La nota (risultato nel piano di $\vec B,\vec C$, ortogonale a $\vec B\times\vec C$) è corretta.

## L3 — Prodotto misto = volume — OK

Area di base $\mathcal A=|\vec B\times\vec C|$, altezza $h=|\vec A||\cos\phi|$ con $\phi$ angolo fra $\vec A$ e $\vec N=\vec B\times\vec C$; il valore assoluto sul coseno è corretto (proiezione sulla normale, indipendente dal verso). $V=\mathcal A\,h=|\vec A\cdot(\vec B\times\vec C)|$. Complanarità: $\vec A\perp\vec N\Rightarrow\cos\phi=0\Rightarrow V=0$; lettura via determinante (righe dipendenti) corretta.

## L4 — Decomposizione tangenziale/centripeta — OK

Da $\vec v=v\,\hat t$: $\vec a=\dot v\,\hat t+v\,\dot{\hat t}$. Con $\dot{\hat t}=\frac{d\hat t}{ds}\frac{ds}{dt}=\frac{1}{\rho}\hat n\cdot v$ (prima formula di Frenet, $\hat n$ verso il centro di curvatura): $\vec a=\dot v\,\hat t+\frac{v^2}{\rho}\hat n$. Segni e versi corretti; la perpendicolarità di $\dot{\hat t}$ è richiamata coerentemente con L1.

## L5 — Antisimmetria e area del prodotto vettoriale — OK

Definizione per componenti corretta; scambio $\vec a\leftrightarrow\vec b$ cambia segno a ogni componente ⇒ $\vec b\times\vec a=-\vec a\times\vec b$, e $\vec a\times\vec a=\vec0$. Identità di Lagrange $|\vec a\times\vec b|^2=|\vec a|^2|\vec b|^2-(\vec a\cdot\vec b)^2$ corretta; con $\vec a\cdot\vec b=|\vec a||\vec b|\cos\theta$ dà $|\vec a\times\vec b|=|\vec a||\vec b|\sin\theta$ (segno positivo giustificato da $\theta\in[0,\pi]$). Area del parallelogramma coerente.

## L6 — Leibniz per prodotto scalare e vettoriale — OK

Argomento di bilinearità $B(\vec a,\vec b)$ corretto: aggiunta/sottrazione di $B(\vec a,\vec b(t+h))$, divisione per $h$, limite ⇒ $\frac{d}{dt}B=B(\dot{\vec a},\vec b)+B(\vec a,\dot{\vec b})$, valido per entrambi. L'avvertenza sull'ordine dei fattori nel prodotto vettoriale ($\vec b\times\dot{\vec a}$ cambierebbe segno) è corretta e non banale. Esempio $\dot{\vec L}=\vec M$ corretto: $\vec v\times m\vec v=\vec0$.

## L7 — Velocità e accelerazione in polari — OK

Derivate dei versori ricavate, non a memoria: $\dot{\hat r}=\dot\theta\,\hat\theta$, $\dot{\hat\theta}=-\dot\theta\,\hat r$ (verificati derivando $\hat r=\cos\theta\,\hat i+\sin\theta\,\hat j$, $\hat\theta=-\sin\theta\,\hat i+\cos\theta\,\hat j$). Velocità $\vec v=\dot r\,\hat r+r\dot\theta\,\hat\theta$. Accelerazione: raccolta $\hat r$: $\ddot r-r\dot\theta^2$; raccolta $\hat\theta$: $\dot r\dot\theta+\dot r\dot\theta+r\ddot\theta=2\dot r\dot\theta+r\ddot\theta$. Il **2 di Coriolis** e i segni (centripeto $-r\dot\theta^2$) sono corretti.

## L8 — Raggio di curvatura — OK

$|\frac{d\hat t}{ds}|=1/\rho$, $\hat n\perp\hat t$ (da modulo unitario). $\vec a=\dot v\,\hat t+\frac{v^2}{\rho}\hat n\Rightarrow a_n=v^2/\rho\Rightarrow\rho=v^2/a_n$. Formula operativa: $\vec v\times\vec a=v\,\hat t\times(\dot v\,\hat t+\frac{v^2}{\rho}\hat n)=\frac{v^3}{\rho}(\hat t\times\hat n)$ (il termine tangenziale muore per $\hat t\times\hat t=\vec0$), $|\hat t\times\hat n|=1$ ⇒ $\rho=v^3/|\vec v\times\vec a|$. Tutto corretto.

---

## Note di prosa

Nessuna imprecisione di prosa rilevante. Le sezioni "significato fisico" sono
accurate e coerenti con i risultati dimostrati.

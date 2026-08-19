# Esito verifica — pool "onde" (11 lavagne)

Verifica di merito fisico. Metodo: conti rifatti a mano, non rilettura. Verdetto secco in testa a ogni sezione.

Conteggio: **10 OK, 1 ERRORE (L4), 0 DUBBIO.**

---

## L1 — Equazione delle onde della corda vibrante

**OK.**

Bilancio di forze vero su un arco, non forma assunta. Componente orizzontale $T\cos\theta(x+dx)-T\cos\theta(x)\approx0$ giustifica $T$ costante; componente verticale $dF_y=T[\partial_x y|_{x+dx}-\partial_x y|_x]=T\,\partial_{xx}y\,dx$ con la linearizzazione $\sin\theta\approx\tan\theta=\partial_x y$. Newton: $\mu\,dx\,\partial_{tt}y=T\,\partial_{xx}y\,dx\Rightarrow\partial_{tt}y=(T/\mu)\partial_{xx}y$, $v=\sqrt{T/\mu}$. Dimensioni: $[T/\mu]=(\mathrm{N})/(\mathrm{kg/m})=\mathrm{m^2/s^2}$, radice $\mathrm{m/s}$. Approssimazioni dichiarate (piccola pendenza, $T$ uniforme, flessibilità, gravità trascurabile) bastano e sono tutte usate. Soluzione generale $f(x-vt)+g(x+vt)$ corretta.

## L2 — Onde stazionarie e quantizzazione

**OK.**

$A\sin(kx-\omega t)+A\sin(kx+\omega t)$: con $\sin\alpha+\sin\beta=2\sin\frac{\alpha+\beta}{2}\cos\frac{\alpha-\beta}{2}$ e $\frac{\alpha+\beta}{2}=kx$, $\frac{\alpha-\beta}{2}=-\omega t$, si ha $2\sin(kx)\cos(\omega t)$ (il segno di $\cos$ è pari, sparisce). BC $\sin(kL)=0\Rightarrow k_n=n\pi/L$, $\lambda_n=2L/n$, $f_n=v/\lambda_n=nv/(2L)=nf_1$. Tutti i fattori corretti. Analogia buca infinita $\sin(n\pi x/L)$, $E_n\propto n^2$ corretta.

## L3 — Effetto Doppler e cono di Mach

**OK.**

Osservatore in moto (cambia la velocità d'incontro, non $\lambda$): $f'=f(v+v_{oss})/v$. Sorgente in moto (cambia $\lambda$): $\lambda'=(v-v_{sorg})/f$, $f'=v/\lambda'=fv/(v-v_{sorg})$. Combinata $f'=f\frac{v\pm v_{oss}}{v\mp v_{sorg}}$ con segni superiori = avvicinamento: numeratore $+v_{oss}$ e denominatore $-v_{sorg}$ fanno entrambi crescere $f'$, coerente. Cono di Mach $\sin\theta=v/v_{sorg}=1/M$ corretto (geometria: in un tempo $t$ il fronte percorre $vt$, la sorgente $v_{sorg}t$, $\sin\theta=vt/(v_{sorg}t)$).

## L4 — Potenza media di un'onda armonica

**ERRORE** (passaggio intermedio; il risultato finale in box è corretto).

La velocità trasversa $u=\partial_t y=-A\omega\cos(kx-\omega t)$ e $dK/dx=\tfrac12\mu A^2\omega^2\cos^2$ sono corrette. Ma la riga sulla densità di energia totale è sbagliata nella struttura. Per un'onda **progressiva** la densità di energia potenziale è $dU/dx=\tfrac12 T(\partial_x y)^2=\tfrac12 T A^2k^2\cos^2$; usando $Tk^2=T\omega^2/v^2=\mu\omega^2$ si ottiene $dU/dx=\tfrac12\mu A^2\omega^2\cos^2$, **in fase** con la cinetica (entrambe $\propto\cos^2$, non $\cos^2$ e $\sin^2$). Quindi la densità istantanea è $dE/dx=\mu A^2\omega^2\cos^2(kx-\omega t)$, che **oscilla** tra $0$ e $\mu A^2\omega^2$ e non è costante. Scriverla come $\tfrac12\mu A^2\omega^2[\cos^2+\sin^2]=\tfrac12\mu A^2\omega^2$ (costante) è il quadro dell'oscillatore/onda stazionaria, non dell'onda progressiva: implica erroneamente $dU/dx\propto\sin^2$. Il **valor medio** $\langle dE/dx\rangle=\tfrac12\mu A^2\omega^2$ resta giusto (da $\langle\cos^2\rangle=\tfrac12$ e $\langle dE\rangle=2\langle dK\rangle$), e quindi $\langle P\rangle=\tfrac12\mu v A^2\omega^2$ è corretto — dimensioni $\mathrm{(kg/m)(m/s)(1/s^2)(m^2)=W}$. Corretto anche $I\propto A^2\omega^2$, $I(r)=\langle P\rangle/(4\pi r^2)\propto1/r^2$, $A\propto1/r$.

Correzione: la stringa da sostituire è
`$$\frac{dE}{dx}=\tfrac12\mu A^2\omega^2\big[\cos^2+\sin^2\big]=\tfrac12\mu A^2\omega^2\cdot(\text{struttura oscillante}),$$`
con qualcosa del tipo
`$$\frac{dE}{dx}=\mu A^2\omega^2\cos^2(kx-\omega t)\quad(\text{cinetica e potenziale in fase, entrambe }\propto\cos^2),$$`
mantenendo poi $\langle dE/dx\rangle=\tfrac12\mu A^2\omega^2$ come già scritto. Nulla da toccare nel box né nel resto.

## L5 — Velocità sulla corda: argomento dinamico dell'impulso

**OK.**

Arco $\Delta\ell=2R\theta$, massa $\Delta m=2\mu R\theta$; forza radiale netta $F=2T\sin\theta\approx2T\theta$; centripeta $F=\Delta m\,v^2/R=2\mu R\theta v^2/R=2\mu\theta v^2$. Uguagliando: $2T\theta=2\mu\theta v^2\Rightarrow v=\sqrt{T/\mu}$. Il fattore 2 e $\theta$ si cancellano correttamente. Coerente con L1.

## L6 — Soluzione generale e formula di d'Alembert

**OK.**

Fattorizzazione $(\partial_t-v\partial_x)(\partial_t+v\partial_x)=\partial_{tt}-v^2\partial_{xx}$ verificata (i termini misti $\pm v\partial_t\partial_x$ si elidono). Regole di catena $\partial_x=\partial_\xi+\partial_\eta$ e $\partial_t=v(\partial_\eta-\partial_\xi)$ corrette da $\partial_t\xi=-v,\ \partial_t\eta=+v$. Riduzione a $\partial_{\xi\eta}y=0$, soluzione $f(\xi)+g(\eta)$. Formula di d'Alembert: da $f+g=\varphi$ e $\partial_t y|_0=v(g'-f')=\psi$ segue $y=\tfrac12[\varphi(x-vt)+\varphi(x+vt)]+\frac{1}{2v}\int_{x-vt}^{x+vt}\psi\,ds$. Forma standard corretta, fattori $\tfrac12$ e $\frac{1}{2v}$ giusti.

## L7 — Riflessione a estremo fisso e libero

**OK.**

Estremo fisso $y(0,t)=0$: $f(-vt)+g(vt)=0\Rightarrow g(vt)=-f(-vt)$, inversione di fase $\pi$. Estremo libero $\partial_x y(0,t)=0$: da $\partial_x y=f'(x-vt)+g'(x+vt)$ in $x=0$, $f'(-vt)+g'(vt)=0\Rightarrow g(vt)=f(-vt)$, nessuna inversione. Segni corretti, condizioni al contorno imposte bene. Analogia ottica (mezzo più denso $\to$ sfasamento $\pi$) corretta.

## L8 — Battimenti

**OK — e il fattore 2 critico è gestito bene.**

$A\cos\omega_1 t+A\cos\omega_2 t=2A\cos\frac{\omega_1-\omega_2}{2}t\,\cos\frac{\omega_1+\omega_2}{2}t$. Portante alla semisomma $\frac{\omega_1+\omega_2}{2}$, inviluppo lento alla semidifferenza. L'inviluppo $\cos\frac{\omega_1-\omega_2}{2}t$ ha frequenza $\frac{f_1-f_2}{2}$, ma l'intensità dipende da $|\cos|$ che raddoppia la frequenza $\Rightarrow f_{batt}=|f_1-f_2|$. Qui il fattore 2 dell'inviluppo e il fattore 2 del $|\cos|$ sono trattati correttamente e si ottiene la differenza piena, non la semidifferenza. Nessuno scambio.

## L9 — Interferenza di due sorgenti coerenti

**OK.**

$\delta=k(r_2-r_1)=\frac{2\pi}{\lambda}\Delta$. $A\cos\omega t+A\cos(\omega t-\delta)=2A\cos\frac\delta2\cos(\omega t-\frac\delta2)$ (verificato con $\cos\alpha+\cos\beta$: $\frac{\alpha+\beta}{2}=\omega t-\frac\delta2$, $\frac{\alpha-\beta}{2}=\frac\delta2$). $A_R=2A\cos\frac\delta2$, $I=I_{max}\cos^2\frac\delta2$, $I_{max}=4A^2$. Costruttiva $\delta=2n\pi\Rightarrow\Delta=n\lambda$; distruttiva $\delta=(2n+1)\pi\Rightarrow\Delta=(n+\tfrac12)\lambda$. Tutto coerente.

## L10 — Relazione di dispersione

**OK.**

$y=A\sin(kx-\omega t)$: $\partial_{tt}y=-\omega^2 y$, $\partial_{xx}y=-k^2y$, sostituzione $-\omega^2=-v^2k^2\Rightarrow\omega=vk$. $v_{fase}=\omega/k=v$ costante, $v=\lambda f$ ritrovato. Distinzione non dispersivo (lineare in $k$) vs dispersivo con $v_g=d\omega/dk$ corretta; esempio onde di materia $\omega=\hbar k^2/2m$ corretto.

## L11 — Onde piane e sferiche

**OK.**

$P=I(r)4\pi r^2\Rightarrow I=P/(4\pi r^2)\propto1/r^2$; $I=\bar u\,v$ con $\bar u=\tfrac12\rho\omega^2A^2\Rightarrow I\propto A^2\Rightarrow A=A_0/r$. Laplaciano radiale $\nabla^2y=\frac{1}{r^2}\partial_r(r^2\partial_r y)$; posto $u=ry$: $\partial_r y=u'/r-u/r^2$, $r^2\partial_r y=ru'-u$, $\partial_r(ru'-u)=u'+ru''-u'=ru''\Rightarrow\nabla^2y=\frac1r\partial_{rr}(ry)$ (verificato passo per passo). Moltiplicando $\partial_{tt}y=v^2\nabla^2y$ per $r$: $\partial_{tt}(ry)=v^2\partial_{rr}(ry)$, quindi $u=ry$ risolve d'Alembert 1D; $u=A_0\sin(kr-\omega t)\Rightarrow y=(A_0/r)\sin(kr-\omega t)$. Il $1/r$ emerge dall'equazione, coerente col bilancio energetico. Fraunhofer: $s=r_0-\sqrt{r_0^2-D^2/4}\simeq D^2/(8r_0)$ (espansione $\sqrt{1-x}\approx1-x/2$ corretta), condizione $r_0\gg D^2/\lambda$ corretta. Onda piana con $I,A$ costanti corretta.

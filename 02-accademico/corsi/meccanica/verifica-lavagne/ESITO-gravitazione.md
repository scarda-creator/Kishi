# Esito verifica — pool "gravitazione" (quiz orale Meccanica, prof. Pisano)

Verifica di merito fisico delle 10 dimostrazioni-lavagna. Metodo: conto rifatto
da zero per ogni risultato canonico, controllo dimensionale del risultato finale,
controllo di segni e della catena logica (conservazioni usate, non asserite).
Nessun risultato è dichiarato corretto senza il conto sotto.

---

## L1 — Seconda legge di Keplero dal momento angolare — **OK**

Forza centrale $\Rightarrow \vec M=\vec r\times\vec F=0 \Rightarrow \dot{\vec L}=0$: corretto,
è il teorema del momento angolare. Area infinitesima $dA=\tfrac12|\vec r\times d\vec r|$
e $\frac{dA}{dt}=\tfrac12|\vec r\times\vec v|=\frac{1}{2m}|\vec r\times m\vec v|=\frac{L}{2m}$:
rifatto, corretto. Dimensioni di $L/2m$: $[\mathrm{kg\,m^2/s}]/[\mathrm{kg}]=\mathrm{m^2/s}$
= area/tempo. La costanza di $L$ dà la costante areolare. Corretto.

## L2 — Potenziale efficace e classificazione delle orbite — **ERRORE**

Riduzione a 1D corretta: $\frac12 mr^2\dot\phi^2=\frac{L^2}{2mr^2}$ con $\dot\phi=L/(mr^2)$,
quindi $V_{eff}=\frac{L^2}{2mr^2}-\frac{GmM}{r}$. Barriera centrifuga e classificazione
per segno di $E$ (retta $E\ge V_{eff}$, numero di intersezioni) corrette.

L'errore è nel raggio del minimo. $V_{eff}'(r)=-\frac{L^2}{mr^3}+\frac{GmM}{r^2}=0$
$\Rightarrow r_0=\frac{L^2}{Gm^2M}$ (dimensione: $L^2/(Gm^2M)$ ha unità di metri,
verificato). Il valore **finale** scritto, $\frac{L^2}{Gm^2M}$, è giusto; ma
l'espressione intermedia riportata, $\frac{L^2}{GmM^2m}$, ha un $M^2$ di troppo:
letta alla lettera vale $\frac{L^2}{Gm^2M^2}$, che è dimensionalmente sbagliata
(non è una lunghezza) e diversa dal risultato corretto per un fattore $M$.
**Correzione:** l'intermedio va scritto $r_0=\frac{L^2}{GmM\cdot m}=\frac{L^2}{Gm^2M}$
(il denominatore è $GmM$ per $m$, senza quadrato su $M$).

## L3 — Terza legge di Keplero — **OK**

$\frac{GmM}{r^2}=\frac{mv^2}{r}\Rightarrow v^2=\frac{GM}{r}$; con $v=2\pi r/T$:
$\frac{4\pi^2 r^2}{T^2}=\frac{GM}{r}\Rightarrow T^2=\frac{4\pi^2}{GM}r^3$. Fattore $4\pi^2$
corretto. Estensione ellittica rifatta: $T=\frac{2\pi m ab}{L}$, con $b=a\sqrt{1-e^2}$
e $L^2=GMm^2a(1-e^2)$ si ha $T^2=\frac{4\pi^2 m^2 a^2 b^2}{L^2}=\frac{4\pi^2 a^3}{GM}$;
$b$ ed $L$ si elidono, resta $a$. Corretto.

## L4 — Velocità di fuga ed energia di legame — **OK**

$E=\tfrac12 mv^2-\frac{GmM}{R}$, condizione $E=0$ (arrivo all'infinito con $v_\infty=0$)
$\Rightarrow v_{fuga}=\sqrt{2GM/R}$. Fattore 2 sotto radice corretto. $v_{fuga}=\sqrt2\,v_{orb}$
con $v_{orb}=\sqrt{GM/R}$, incremento $41\%$: corretto. Classificazione per segno di $E$
coerente con lo zero di $U$ all'infinito; energia di legame $|E|=\frac{GmM}{R}-\tfrac12 mv^2$
(per $E<0$) corretta. Segni tutti verificati.

## L5 — Prima legge di Keplero (Binet) — **OK**

$u=1/r$, $\dot\phi=Lu^2/m$; $\dot r=-\frac{L}{m}u'$; $\ddot r=-\frac{L^2u^2}{m^2}u''$: rifatti,
corretti. Equazione radiale $m(\ddot r-r\dot\phi^2)=-GmMu^2$ con $r\dot\phi^2=\frac{L^2u^3}{m^2}$;
dividendo per $-\frac{L^2u^2}{m}$ si ottiene $u''+u=\frac{GMm^2}{L^2}$ (verificato il
passaggio della divisione). Soluzione $u=\frac{GMm^2}{L^2}(1+e\cos\phi)$, quindi
$r=\frac{p}{1+e\cos\phi}$ con $p=\frac{L^2}{GMm^2}$. Motivazione dell'esponente $-2$
(termine costante nell'equazione, teorema di Bertrand) corretta.

## L6 — Teorema del guscio (Gauss) — **OK**

$\oint\vec g\cdot d\vec A=-4\pi G M_{int}$; simmetria sferica $\Rightarrow -g(r)4\pi r^2
=-4\pi GM_{int}\Rightarrow g(r)=\frac{GM_{int}(r)}{r^2}$. Esterno: $M_{int}=M$, $g=GM/r^2$.
Interno al guscio: $M_{int}=0$, $g=0$. Segno del flusso (attrattivo) coerente.
Intuizione dei coni ($m\propto r^2$, $g\propto m/r^2=$ cost, cancellazione) corretta;
sfera piena $g\propto r$ corretto.

## L7 — Eccentricità ed energia — **OK**

Da $E=-\frac{GMm}{2a}$, $a=\frac{p}{1-e^2}$, $p=\frac{L^2}{GMm^2}$: rifatto
$E=-\frac{GMm(1-e^2)}{2p}=-\frac{G^2M^2m^3}{2L^2}(1-e^2)$, quindi
$1-e^2=-\frac{2EL^2}{G^2M^2m^3}$ e $e=\sqrt{1+\frac{2EL^2}{G^2M^2m^3}}$. Esponenti
$G^2,M^2,m^3$ tutti verificati. Il minimo $E=-\frac{G^2M^2m^3}{2L^2}$ dà $e=0$
(cerchio); $E=0\Rightarrow e=1$; $E>0\Rightarrow e>1$. Classificazione corretta.

## L8 — Orbita circolare, $E=\tfrac12 U=-K$, viriale — **OK**

$v_{orb}=\sqrt{GM/r}$; $K=\tfrac12 mv^2=\tfrac12\frac{GMm}{r}$; $U=-\frac{GMm}{r}$.
Quindi $K=-\tfrac12 U$ e $E=K+U=-\tfrac12\frac{GMm}{r}=\tfrac12 U=-K$: rifatto,
segni corretti. Viriale per $U\propto 1/r$: $2\langle K\rangle=n\langle U\rangle$ con
$n=-1\Rightarrow\langle K\rangle=-\tfrac12\langle U\rangle$: corretto. Osservazione
sul satellite (orbita più alta = più energia ma meno veloce, $v\propto r^{-1/2}$)
corretta.

## L9 — $g=GM_T/R_T^2$ ed equivalenza delle masse — **OK**

$m_i g=G\frac{m_g M_T}{R_T^2}\Rightarrow g=\frac{m_g}{m_i}\frac{GM_T}{R_T^2}$; il dato
sperimentale $m_g/m_i=1$ dà $g=\frac{GM_T}{R_T^2}$. Uso corretto del teorema del guscio
per trattare la Terra come puntiforme. Distinzione $m_i/m_g$ e principio di equivalenza
enunciati correttamente (non è imposto dalla meccanica newtoniana: è dato sperimentale).

## L10 — Maree come forza differenziale — **OK**

Riferimento in caduta libera, forza differenziale $\vec F_{tid}=m[\vec g_L(\vec r)-\vec g_L(0)]$:
corretto. Lungo la congiungente: $\Delta g_x=\frac{GM_L}{d^2}[(1-x/d)^{-2}-1]\simeq\frac{2GM_Lx}{d^3}$
(sviluppo $(1-x/d)^{-2}\simeq1+2x/d$): verificato. Trasversa: componente $y$
$=-\frac{GM_Ly}{(d^2+y^2)^{3/2}}\simeq-\frac{GM_Ly}{d^3}$: verificato. Sulla superficie
$a_\parallel=+\frac{2GM_LR_T}{d^3}$, $a_\perp=-\frac{GM_LR_T}{d^3}$: corretti, con segni
giusti (estensivo lungo l'asse, compressivo trasverso). Due bozzi corretti. Traccia
$2-1-1=0=\nabla^2\Phi$ nel vuoto: corretta. Rapporto Luna/Sole
$\frac{a_{tid}}{a_{grav}}\propto 1/d$: rifatto, la formula
$\frac{a_{tid,L}}{a_{tid,S}}=\frac{a_{grav,L}}{a_{grav,S}}\frac{d_S}{d_L}$ è esatta e la
dipendenza $1/d^3$ è motivata correttamente (derivata del campo, non campo).

---

## Riepilogo conteggi

- **OK:** 9 — L1, L3, L4, L5, L6, L7, L8, L9, L10
- **DUBBIO:** 0
- **ERRORE:** 1 — L2

## Lista per categoria

**ERRORE**
- **L2** — espressione intermedia del raggio del minimo scritta $\frac{L^2}{GmM^2m}$
  (= $\frac{L^2}{Gm^2M^2}$, dimensionalmente errata); il risultato finale
  $r_0=\frac{L^2}{Gm^2M}$ è invece corretto. Correzione: scrivere l'intermedio
  $\frac{L^2}{GmM\cdot m}=\frac{L^2}{Gm^2M}$ (rimuovere il quadrato su $M$).

Nessun risultato dipende da una convenzione specifica del Focardi: zero di $U$
all'infinito e segno attrattivo sono le uniche convenzioni usate, entrambe standard
e coerenti in tutte le lavagne. Nessuna riga richiede la copia cartacea.

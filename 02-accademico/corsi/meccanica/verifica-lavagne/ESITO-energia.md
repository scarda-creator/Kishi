# Esito verifica — pool "energia e lavoro" (9 lavagne)

Verifica di merito fisico condotta rifacendo ogni conto. Metodo identico ai cinque
pool gemelli. Conteggio finale: **9 OK, 0 DUBBIO, 0 ERRORE.** Il pool è pulito.
Nessun errore forzato: non ne ho trovati nei passaggi intermedi né nei box.
In coda, alcune note di prosa (non errori).

---

## L1 — Teorema dell'energia cinetica — OK

Il conto regge passo per passo: $dW=m\,(d\vec v/dt)\cdot\vec v\,dt=m\,\vec v\cdot d\vec v$
e l'identità $\vec v\cdot d\vec v=\tfrac12 d(v^2)$ dà $dW=\tfrac12 m\,d(v^2)$, che
integrato produce $\tfrac12 m v_B^2-\tfrac12 m v_A^2$. Fattore $\tfrac12$ corretto,
box corretto. La clausola di validità (vale per qualunque risultante, distinta dalla
conservazione dell'energia) è esatta.

## L2 — Equivalenza delle caratterizzazioni — OK

Il ciclo P1⇒P2⇒P3⇒P1 è logicamente chiuso e ogni implicazione è dimostrata, non
elencata. P1⇒P2: il ciclo $\gamma_1$ seguito da $\gamma_2$ invertito dà lavoro
$W_{\gamma_1}-W_{\gamma_2}=0$ (il segno da $d\vec r\to-d\vec r$ è corretto). P2⇒P3
costruisce $U$ ben definito e ne ricava $\vec F=-\vec\nabla U$; P3⇒P1 usa l'integrale
del differenziale esatto su ciclo. La quarta caratterizzazione ($\vec\nabla\times\vec F=0$)
con la clausola del dominio semplicemente connesso è corretta e ben posta.

## L3 — Teorema generalizzato e attrito — OK

$W_{tot}=W_c+W_{nc}=\Delta K$ con $W_c=-\Delta U$ dà $-\Delta U+W_{nc}=\Delta K$,
quindi $W_{nc}=\Delta K+\Delta U=\Delta E$. Segni e passaggi corretti, box $W_{nc}=\Delta E$
corretto. La discussione dell'attrito ($\vec F_{nc}\cdot\vec v<0$ ⇒ $\Delta E<0$, non
deriva da potenziale, bilancio con l'energia interna) è fisicamente esatta.

## L4 — Diagrammi di energia potenziale e stabilità — OK

Regione accessibile $U(x)\le E$ da $K=E-U\ge0$: corretto. Punti di inversione a $U=E$,
equilibri a $U'(x_0)=0$, stabilità dal segno di $U''$ (minimo stabile, massimo instabile):
corretto. Piccole oscillazioni: sviluppo $U\approx U(x_0)+\tfrac12 U''(x_0)(x-x_0)^2$,
$F\approx -U''(x_0)(x-x_0)$, $\omega=\sqrt{U''(x_0)/m}$, con $k=U''(x_0)$. Tutto corretto.
(Vedi nota di prosa 1 sul termine "indifferente".)

## L5 — Lavoro di peso, forza elastica e gravità — OK

Peso: $W=\int(-mg)\,dy=-mg(y_B-y_A)$, $U=mgy$; verifica $W=-\Delta U$ torna, e i segni
danno correttamente $W<0$ in salita e $W>0$ in discesa. Elastica:
$\int_{x_A}^{x_B}(-kx)\,dx=-\tfrac12 k(x_B^2-x_A^2)$, $U=\tfrac12 kx^2$: fattore $\tfrac12$
corretto. Gravità: antiderivata di $-GmM/r^2$ è $+GmM/r$, valutata dà
$GmM(1/r_B-1/r_A)$, $U=-GmM/r$: segno e fattore corretti, e $W=-\Delta U$ verifica.
Tutte e tre le convenzioni di zero sono dichiarate correttamente.

## L6 — $\vec F=-\vec\nabla U$ dalla definizione — OK

Da $U(P)=-\int_O^P\vec F\cdot d\vec r$ segue $dU=-\vec F\cdot d\vec r$; confronto con
$dU=\vec\nabla U\cdot d\vec r$ valido $\forall\,d\vec r$ dà $\vec F=-\vec\nabla U$. Il
segno meno è giustificato (non assunto): nasce dalla definizione di $U$ come lavoro
cambiato di segno. Box corretto.

## L7 — Conservazione dell'energia meccanica — OK

Via integrale: $\Delta K=-\Delta U\Rightarrow\Delta(K+U)=0$: corretto. Via differenziale:
$dE/dt=\vec F\cdot\vec v+\vec\nabla U\cdot\vec v$, e poiché $\vec\nabla U=-\vec F$ il
secondo termine è $-\vec F\cdot\vec v$, così i due si cancellano a zero. Segno corretto.
Le ipotesi sono enunciate con la precisione giusta (conservative solo le forze *che
compiono lavoro*; le non conservative che non lavorano sono ammesse).

## L8 — Piccole oscillazioni attorno a un minimo — OK

Taylor con termine lineare nullo ($U'(x_0)=0$), $F=-U''(x_0)\,\xi$, $m\ddot\xi=-U''(x_0)\xi$,
$\ddot\xi+(U''(x_0)/m)\xi=0$, $\omega=\sqrt{U''(x_0)/m}$. Fattori e box corretti. Coerente
con L4 (nessuna discrepanza fra le due lavagne che trattano lo stesso sviluppo).

## L9 — Potenza istantanea e media — OK

$P=dW/dt=\vec F\cdot\vec v=Fv\cos\theta$: corretto. Unità $\mathrm{W=J/s=kg\,m^2\,s^{-3}}$
dimensionalmente corrette ($\mathrm{J=kg\,m^2\,s^{-2}}$, diviso $\mathrm{s}$). Potenza
media $\langle P\rangle=W/\Delta t$, e per la risultante $\langle P\rangle_{tot}=\Delta K/\Delta t$,
$P_{tot}=dK/dt$: corretto. Analogo rotazionale $P=\vec M\cdot\boldsymbol\omega$ esatto.

---

## Note di prosa (non errori)

1. **L4 — "caso indifferente/marginale".** Per $U''(x_0)=0$ il termine tecnico esatto
   è *marginale/degenere* (da decidere agli ordini superiori, come già scritto).
   "Indifferente" in senso stretto designa un equilibrio con $U$ costante in un intorno
   (es. sfera su piano orizzontale), che è un sottocaso, non il caso generale $U''=0$.
   La lavagna hedge correttamente con "da decidere agli ordini superiori", quindi non è
   un errore concettuale; è solo il primo aggettivo a essere leggermente improprio.

2. **Raccordo $-GMm/r \leftrightarrow mgh$ (assente).** Nessuna lavagna svolge il limite
   di piccola quota che collega il potenziale gravitazionale generale a $mgy$. Non è un
   errore (non è richiesto in nessuna delle nove domande), ma se all'orale Pisano lo
   chiede come naturale prosecuzione di L5, il ponte non è coperto dal pool.

3. **Convenzioni Focardi.** Tutti i risultati usano le convenzioni standard (zero del
   potenziale elastico a molla scarica, gravitazionale all'infinito, peso da un piano di
   riferimento con asse $y$ verso l'alto). Coincidono con quelle del Focardi; nessun
   risultato dipende da una scelta non dichiarata.

---

**Conteggio: 9 OK / 0 DUBBIO / 0 ERRORE.** Pool pulito.

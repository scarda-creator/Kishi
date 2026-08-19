# Esito verifica — pool "relativa" (cinematica relativa)

Meccanica, orale ~10 settembre 2026 (prof. Pisano, Sapienza). Verifica di merito
fisico delle 9 dimostrazioni-lavagna scritte da OCR del Focardi, mai ricontrollate.

**Conteggio:** 9 OK · 0 DUBBIO · 0 ERRORE.
Pool genuinamente pulito. Ogni conto rifatto a mano, con attenzione ai segni e ai
fattori dei termini apparenti (dove il pool era strutturalmente più esposto).

---

## L1 — Teorema di composizione delle velocità

**OK.**

L'operatore di derivazione nei due riferimenti è enunciato come strumento (non
ricavato qui, ma dichiarato tale e ricavato in L5, coerente). Derivando
$\vec r_{abs}=\vec r_{O'}+\vec r_{rel}$ nel fisso: $(\dot{\vec r}_{rel})_{fix}=\vec v_{rel}+\boldsymbol\omega\times\vec r_{rel}$,
quindi $\vec v_{abs}=\vec v_{O'}+\vec v_{rel}+\boldsymbol\omega\times\vec r_{rel}$. Box corretto; raggruppamento
in $\vec v_{tr}=\vec v_{O'}+\boldsymbol\omega\times\vec r_{rel}$ corretto. Poisson dei versori mobili citata giusta.

## L2 — Teorema delle accelerazioni e fattore 2 di Coriolis

**OK.**

Termine 2: $(\dot{\vec v}_{rel})_{fix}=\vec a_{rel}+\boldsymbol\omega\times\vec v_{rel}$ (primo Coriolis).
Termine 3: $\tfrac{d}{dt}(\boldsymbol\omega\times\vec r_{rel})=\dot{\boldsymbol\omega}\times\vec r_{rel}+\boldsymbol\omega\times(\vec v_{rel}+\boldsymbol\omega\times\vec r_{rel})=\boldsymbol\alpha\times\vec r_{rel}+\boldsymbol\omega\times\vec v_{rel}+\boldsymbol\omega\times(\boldsymbol\omega\times\vec r_{rel})$
(secondo Coriolis). Somma: $\vec a_{abs}=\vec a_{rel}+[\vec a_{O'}+\boldsymbol\alpha\times\vec r_{rel}+\boldsymbol\omega\times(\boldsymbol\omega\times\vec r_{rel})]+2\boldsymbol\omega\times\vec v_{rel}$.
Segno di Coriolis nell'accelerazione assoluta $+2\boldsymbol\omega\times\vec v_{rel}$: corretto. Spiegazione del fattore 2 giusta.

## L3 — Forze apparenti nel riferimento non inerziale

**OK.**

Isolando $m\vec a_{rel}=\vec F-m\vec a_{O'}-m\boldsymbol\alpha\times\vec r_{rel}-m\boldsymbol\omega\times(\boldsymbol\omega\times\vec r_{rel})-2m\boldsymbol\omega\times\vec v_{rel}$:
tutti i segni sono l'opposto dei termini di $\vec a_{tr}$ e di Coriolis di L2, come deve
essere. Punto critico del pool superato: la Coriolis percepita nel rotante è
$-2m\boldsymbol\omega\times\vec v_{rel}$, opposta al $+2\boldsymbol\omega\times\vec v_{rel}$ che compare in $\vec a_{abs}$ (L2). Centrifuga
$-m\boldsymbol\omega\times(\boldsymbol\omega\times\vec r)=+m\omega^2\vec r_\perp$: corretto (vedi L7).

## L4 — Deviazione verso est nella caduta

**OK.**

Assi $x$ est, $y$ nord, $z$ alto; $\boldsymbol\omega=(0,\omega\cos\lambda,\omega\sin\lambda)$ (giusto: verticale $\omega\sin\lambda$ ai poli, nord $\omega\cos\lambda$ all'equatore),
$\vec v_{rel}=(0,0,-gt)$. Determinante: $\boldsymbol\omega\times\vec v_{rel}=-\omega gt\cos\lambda\,\hat x$; quindi $\vec a_{Cor}=-2\boldsymbol\omega\times\vec v_{rel}=+2\omega gt\cos\lambda\,\hat x$ (est).
Integrando: $\dot x=\omega gt^2\cos\lambda$, $x=\tfrac13\omega gt^3\cos\lambda$. A $t_c=\sqrt{2h/g}$: $x=\tfrac13\omega g\cos\lambda(2h/g)^{3/2}=\tfrac13\omega\cos\lambda\sqrt{8h^3/g}$
(verificata l'identità $g(2h/g)^{3/2}=\sqrt{8h^3/g}$). Massima all'equatore, nulla ai poli: corretto.

## L5 — Formula di Poisson

**OK.**

Da $\hat u\cdot\hat u=1$: $\dot{\hat u}\perp\hat u$. Da $\hat u_a\cdot\hat u_b=$cost e dalla linearità $\dot{\hat u}=\Omega\hat u$ segue
$\Omega_{ba}+\Omega_{ab}=0$, cioè $\Omega$ antisimmetrica $3\times3$ $\Leftrightarrow$ esiste $\boldsymbol\omega$ con $\Omega\hat u=\boldsymbol\omega\times\hat u$.
Qui l'operatore $(d/dt)_{fix}=(d/dt)_{rot}+\boldsymbol\omega\times$ è propriamente ricavato (non assunto). $|\dot{\hat u}|=\omega\sin\alpha$ corretto.

## L6 — Composizione delle velocità angolari

**OK.**

$(\dot{\hat u})_0=(\dot{\hat u})_1+\boldsymbol\omega_{1/0}\times\hat u$ con $\hat u$ solidale a $S_2$; per Poisson $(\dot{\hat u})_1=\boldsymbol\omega_{2/1}\times\hat u$ e $(\dot{\hat u})_0=\boldsymbol\omega_{2/0}\times\hat u$.
Uguagliando per ogni $\hat u$: $\boldsymbol\omega_{2/0}=\boldsymbol\omega_{2/1}+\boldsymbol\omega_{1/0}$. Corretto, e la distinzione additività-velocità-angolari
vs non-commutatività delle rotazioni finite è giusta.

## L7 — Forza centrifuga

**OK.**

BAC-CAB: $\boldsymbol\omega\times(\boldsymbol\omega\times\vec r)=\boldsymbol\omega(\boldsymbol\omega\cdot\vec r)-\omega^2\vec r=\omega^2\vec r_\parallel-\omega^2\vec r=-\omega^2\vec r_\perp$.
Quindi $\vec F_{cf}=-m\boldsymbol\omega\times(\boldsymbol\omega\times\vec r)=+m\omega^2\vec r_\perp$: radiale uscente, modulo $m\omega^2 r_\perp$. Tutto corretto.

## L8 — g efficace in funzione della latitudine

**OK.**

Centrifuga $\omega^2 r_\perp$ con $r_\perp=R\cos\lambda$; proiezione sulla verticale locale (angolo $\lambda$ tra $\vec r_\perp$ e la
radiale) dà $\omega^2 R\cos^2\lambda$, opposta a $g_0$: $g_{eff}\approx g_0-\omega^2 R\cos^2\lambda$. Numeri verificati:
$\omega^2 R=(7{,}29\cdot10^{-5})^2\cdot6{,}37\cdot10^6\approx0{,}034\ \mathrm{m/s^2}\approx0{,}3\%\,g$. Minima all'equatore, massima ai poli:
corretto. La deviazione del filo a piombo verso l'equatore è corretta: la
componente meridiana della centrifuga punta verso l'equatore (rifatto il conto
geometrico con $\hat s=\sin\lambda\,\hat e_{eq}-\cos\lambda\,\hat z$, componente $\omega^2 R\cos\lambda\sin\lambda$ verso l'equatore).

## L9 — Pendolo di Foucault

**OK.**

Coriolis orizzontale con $\omega_z=\omega\sin\lambda$: $-2\boldsymbol\omega\times\vec v=2\omega_z\dot y\,\hat x-2\omega_z\dot x\,\hat y$, quindi le equazioni date sono corrette.
$\zeta=x+iy$: $\ddot\zeta+2i\omega_z\dot\zeta+\omega_0^2\zeta=0$ (verificato $2\omega_z\dot y-2i\omega_z\dot x=-2i\omega_z\dot\zeta$). $\zeta=e^{i\mu t}$: $\mu^2+2\omega_z\mu-\omega_0^2=0$,
$\mu\approx-\omega_z\pm\omega_0$, da cui $\zeta=e^{-i\omega_z t}(Ae^{i\omega_0 t}+Be^{-i\omega_0 t})$. Precessione $\Omega_F=-\omega\sin\lambda$: box corretto;
segno negativo = oraria nell'emisfero nord (guardando dall'alto), giusto. $T_F=2\pi/(\omega\sin\lambda)=T_{giorno}/\sin\lambda$, un giro/giorno sidereo ai poli, nulla all'equatore: corretto.

---

## Note di prosa (non ERRORE)

- **L4** — "centimetri per torri di decine di metri": leggermente ottimistico.
  Il conto dà ~5-6 mm per $h=50$ m ($\lambda=45^\circ$) e ~1,5 cm per $h=100$ m; l'ordine di
  grandezza (mm-cm) è giusto, ma i "centimetri" si raggiungono solo verso il
  centinaio di metri. Formulazione, non fisica.
- **L9** — "$\approx23{,}93$ h" per il giorno sidereo è corretto; nessun rilievo, segnalo solo
  che il valore usato è quello sidereo (giusto: la precessione si misura rispetto
  alle stelle fisse), coerente con "senza alcun riferimento astronomico".

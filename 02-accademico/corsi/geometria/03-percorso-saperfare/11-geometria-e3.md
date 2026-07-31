# Saper-fare 11 · Geometria analitica in E³

> **SOSTANZA DA VERIFICARE — generata in notte autonoma** (Dedalo, 2026-07-12). Correttezza matematica da
> ratificare da svegli. **Nota di corpus:** questo tipo è **uscito dagli esami dal 2017** (presente 2013–2016,
> zero occorrenze nei 13 esami 2019–2024). Nel corpus estratto non ci sono E³ svolti recenti: l'esame qui sotto
> è un **esempio ricostruito dal metodo canonico**, non tratto da un file della banca-dati. Blocco tenuto
> **asciutto, per completezza storica**; priorità bassa per la sessione attuale.
> Tipo mappa #7 · freq 7/28 · diff 2/5 · 2013–2016.

## La firma

Rette e piani in $\mathbb{R}^3$ (spazio euclideo $E^3$), con richieste metriche: equazione di un piano per una
retta e un punto, **distanza** punto-piano o **tra rette sghembe**, **posizione reciproca** di due rette.
Parole-spia: *retta, piano, distanza, rette sghembe/incidenti/parallele, prodotto vettoriale*.

Cosa NON confondere: è geometria *affine-metrica* in dimensione 3, non algebra lineare astratta. Gli strumenti
sono prodotto scalare (angoli, distanze), prodotto vettoriale (normali, aree) e prodotto misto (volumi,
complanarità).

## L'idea

- **Retta:** $r:\ P+t\,\vec v$ (parametrica, $\vec v$ direttore) oppure intersezione di due piani (cartesiana).
- **Piano:** $ax+by+cz+d=0$ con **normale** $\vec n=(a,b,c)$. Un piano è fissato da un punto e una normale, o da
  tre punti non allineati, o da una retta e un punto fuori di essa.
- **Prodotto vettoriale $\vec u\times\vec v$:** ortogonale a entrambi; serve per la normale a un piano (dai suoi
  due direttori) e per la distanza tra sghembe.
- **Prodotto misto $\det[\vec a,\vec b,\vec c]$:** è nullo $\iff$ i tre vettori sono **complanari**. È il test di
  complanarità che decide sghembe vs incidenti.

Formule metriche cardine:
$$\operatorname{dist}(P_0,\pi)=\frac{|a x_0+b y_0+c z_0+d|}{\sqrt{a^2+b^2+c^2}},\qquad
\operatorname{dist}(r_1,r_2)=\frac{\big|(P_2-P_1)\cdot(\vec v_1\times\vec v_2)\big|}{\|\vec v_1\times\vec v_2\|}.$$

## La mossa

1. **Posizione reciproca di due rette** $r_i:P_i+t\vec v_i$:
   - $\vec v_1\parallel\vec v_2$ (proporzionali)? → **parallele** (o coincidenti se $P_2-P_1$ è pure parallelo).
   - altrimenti guarda il prodotto misto $\det[\,P_2-P_1,\ \vec v_1,\ \vec v_2\,]$: se $=0$ → **incidenti**
     (complanari e non parallele, si intersecano in un punto); se $\neq0$ → **sghembe**.
   > **Trappola** (documentata, mappa): la sghembezza richiede **due** condizioni separate — non parallelismo
   > *e* non complanarità. Verificarne una sola sbaglia.
2. **Piano per una retta $r:P+t\vec v$ e un punto $Q\notin r$:** i due direttori del piano sono $\vec v$ e
   $Q-P$; la normale è $\vec n=\vec v\times(Q-P)$; imponi il passaggio per $P$ (o $Q$) per trovare $d$.
3. **Distanza punto-piano:** formula diretta sopra (ricorda il valore assoluto e la norma della normale).
4. **Distanza tra sghembe:** $\vec v_1\times\vec v_2$ dà la direzione della perpendicolare comune; proietta
   $P_2-P_1$ su di essa (formula del prodotto misto normalizzato).

## Un esame, per intero *(esempio ricostruito dal metodo — E³ assente dal corpus estratto)*

Date $r_1:\ (1,0,0)+t(1,1,0)$ e $r_2:\ (0,1,0)+s(0,1,1)$. (a) posizione reciproca; (b) se sghembe, la loro
distanza.

**(a)** Direttori $\vec v_1=(1,1,0)$, $\vec v_2=(0,1,1)$: non proporzionali → non parallele. Prodotto misto con
$P_2-P_1=(-1,1,0)$:
$$\det\begin{pmatrix}-1&1&0\\1&1&0\\0&1&1\end{pmatrix}=1\cdot\det\begin{pmatrix}-1&1\\1&1\end{pmatrix}=1\cdot(-1-1)=-2\neq0.$$
(sviluppo lungo la terza colonna, unico termine non nullo). Il prodotto misto è $\neq0$ → le rette sono
**sghembe**.

**(b)** $\vec v_1\times\vec v_2=\det\left[\begin{smallmatrix}\vec i&\vec j&\vec k\\1&1&0\\0&1&1\end{smallmatrix}\right]=(1\cdot1-0\cdot1,\ 0\cdot0-1\cdot1,\ 1\cdot1-1\cdot0)=(1,-1,1)$,
con $\|\vec v_1\times\vec v_2\|=\sqrt3$. Il prodotto misto $(P_2-P_1)\cdot(\vec v_1\times\vec v_2)=(-1,1,0)\cdot(1,-1,1)=-1-1+0=-2$.
$$\operatorname{dist}(r_1,r_2)=\frac{|-2|}{\sqrt3}=\frac{2}{\sqrt3}=\frac{2\sqrt3}{3}.\qquad\blacksquare$$

## Le varianti

- **Piano per tre punti**: normali via $(B-A)\times(C-A)$.
- **Retta come intersezione di due piani** → per averne un direttore, $\vec v=\vec n_1\times\vec n_2$.
- **Distanza punto-retta**: $\operatorname{dist}(Q,r)=\dfrac{\|(Q-P)\times\vec v\|}{\|\vec v\|}$.
- **Angolo** tra rette/piani: dal prodotto scalare dei direttori/normali (con valore assoluto per l'angolo acuto).

## Collaudo

1. Distanza del punto $(1,1,1)$ dal piano $x+y+z=0$. *(Risposta: $\tfrac{|3|}{\sqrt3}=\sqrt3$.)*
2. $r_1:(0,0,0)+t(1,0,0)$ e $r_2:(0,1,0)+s(1,0,0)$: che posizione? *(Risposta: parallele — stesso direttore —
   e distinte, distanza 1.)*
3. Il prodotto misto di $P_2-P_1,\vec v_1,\vec v_2$ vale $0$: le rette non parallele sono sghembe o incidenti?
   *(Risposta: incidenti — complanari e non parallele.)*

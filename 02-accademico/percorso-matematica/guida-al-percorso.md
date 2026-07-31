# Guida al percorso-matematica — cosa c'è dentro, nucleo per nucleo

> Scritta da Dedalo il 2026-07-21, a percorso completo (20 nuclei, 7295 formule verificate,
> 0 errori). Non è un indice: è il racconto di cosa contiene ogni nucleo, quale figura porta e
> quale domanda lascia aperta. Hub navigabile: `mappa-percorso.html`. Archi verso la fisica:
> `carta-delle-rotte.html` (78 archi).

---

## L'architettura, in tre frasi

Il percorso è **un solo organismo** che cuce Analisi Vettoriale e Metodi Matematici, non due corsi
affiancati. Diciotto nuclei in quattro movimenti, ognuno con la stessa anatomia: *perché questo
nucleo* → tappe di contenuto con derivazioni a rivelazione progressiva → figure che sono argomento
e non decorazione → esercizi d'esame svolti → *il senso e le rotte fisiche*.

Ogni nucleo finisce con una **domanda che non sai ancora rispondere**. Le diciotto convergono tutte
sullo stesso punto: la tesi.

Il metodo, che emerge solo alla fine: **trova la base in cui l'operatore è diagonale, scrivici il
dato, lascia evolvere ogni componente da sola, risomma.** Tutto il resto serve a rendere legittimo
ciascuno di quei quattro verbi.

---

# MOVIMENTO I — Calcolo multivariabile e vettoriale
*(il cuore di Analisi Vettoriale)*

### 00 — Topologia di ℝⁿ
Cosa vuol dire «vicino» in più variabili: palle, aperti, chiusi, limiti che non esistono perché
dipendono dalla direzione, continuità, compattezza e Weierstrass.
**Figure (6):** le palle unitarie delle tre norme sovrapposte (rombo, cerchio, quadrato); l'anello
semiaperto; la sella $xy/(x^2+y^2)$ in 3D coi suoi livelli-rette; la cresta $x^2y/(x^4+y^2)$ che
mostra il limite direzionale ingannevole.
**La domanda:** cosa resta di «vicino» quando i punti sono funzioni e le dimensioni sono infinite.

### 01 — Differenziabilità
Il salto concettuale del corso: derivabile lungo ogni direzione **non** basta. Differenziale come
approssimazione lineare, gradiente, jacobiana, regola della catena, Taylor multivariabile.
**Figure (3):** il piano tangente incollato alla sella (capacità `tangent` del motore, con
occlusione corretta); il gradiente ortogonale ai livelli su ellissi; il controesempio in cui il
piano candidato esiste ma la superficie lo buca.
**La domanda:** perché l'approssimazione lineare è il concetto giusto e non una comodità.

### 02 — Dini e ottimizzazione
Funzione implicita e inversa: quando un'equazione definisce una funzione senza risolverla.
Moltiplicatori di Lagrange, ottimi vincolati.
**Figure (2):** il folium di Cartesio col punto regolare e la singolarità nell'origine; le iperboli
di $f=xy$ tangenti al cerchio-vincolo nei quattro punti di Lagrange — la tangenza **è** la
condizione, disegnata.
**La domanda:** i vincoli come riduzione di dimensione, e cosa significa in meccanica analitica.

### 03 — Curve e superfici
Parametrizzazioni, lunghezza d'arco, integrali di linea e di superficie, versore normale,
orientazione.
**Figure (4):** l'elica 3D ruotabile; la **sfera** con la normale $\Phi_u\times\Phi_v$ accanto a un
**cilindro** — nessuna delle due è un grafico $z=f(x,y)$, ed è per questo che serve parametrizzare
(e il cilindro, parametrizzato come $(z,\varphi)$, ha la normale **entrante**: la trappola
dell'orientazione dimostrata invece che enunciata); la stessa sfera con **due campi**, il radiale
(flusso massimo) e il costante verticale (flusso **zero** senza calcolare nulla); il **nastro di
Möbius** con la normale che torna dal giro **rovesciata** — dove il flusso non è nemmeno definibile,
mentre l'area sì.

### 04 — Campi vettoriali
Gradiente, divergenza, rotore; lavoro e flusso; campi conservativi e il ruolo della topologia.
**Figure (3):** sorgente contro vortice, divergenza contro rotore in una sola immagine; il
**campo-trappola** $1/r$ — irrotazionale ovunque ma con circuitazione $2\pi$ attorno al buco; il
**toro** coi suoi **due** cappi non contraibili, perché il numero dei modi di girare è il numero di
circuitazioni indipendenti che sfuggono al potenziale (de Rham, Aharonov–Bohm, vortici quantizzati).
**La domanda:** il buco che rompe l'equivalenza «irrotazionale = conservativo» — e che nel
Movimento III tornerà identico come $\oint dz/z=2\pi i$.

### 05 — Teoremi integrali
Green, Gauss, Stokes, e poi la sorpresa: sono **un solo teorema**. Forme differenziali, operatore
$d$, Stokes generalizzato $\int_\Omega d\omega=\int_{\partial\Omega}\omega$, e $d^2=0$ che ricodifica
le due identità vettoriali che sembravano coincidenze.
**Figure (4):** Green, divergenza contro rotore, Stokes col cammino di bordo, e il **disco e la
calotta con lo stesso bordo** (disegnato in arancione su entrambe) — la figura che rende ovvia la
mossa d'esame: se il flusso attraverso una superficie è scomodo, la si sostituisce con qualunque
altra che abbia lo stesso orlo.
**La domanda:** verso Maxwell in forma differenziale, de Rham, la fase di Berry.

### 06 — EDO qualitative
Esistenza e unicità (Picard), i cinque tipi risolutivi con l'equazione di Eulero come ponte verso
Metodi, sistemi lineari e classificazione dei punti fissi, pendolo non lineare.
**Figure (4):** ritratti di fase veri, con traiettorie integrate numericamente — nodi, fuochi,
selle, e la separatrice del pendolo.
**La domanda:** Liouville → ergodicità → freccia del tempo. È il primo nucleo che punta dritto
alla tesi.

---

# MOVIMENTO II — Ponte: spazi di funzioni
*(dove Analisi Vettoriale diventa Metodi)*

### 07 — Serie di funzioni
Convergenza puntuale contro uniforme (col gradino di $x^n$ che si forma), criterio di Weierstrass,
conseguenze sul limite, serie di potenze e raggio di convergenza.
**Figure:** la famiglia $x^n$ che converge male, le somme parziali geometriche.
**La domanda:** serie perturbativa convergente o solo asintotica — e perché il raggio finito
segnala qualcosa che sull'asse reale non si vede. *(Risposta nel nucleo 12.)*

### 08 — Spazi normati e completezza
Metrica, norma, successioni di Cauchy, completezza, spazi di Banach, teorema delle contrazioni.
**Il controesempio cardine:** le funzioni continue con la norma integrale **non** formano uno
spazio completo — la successione di rampe converge alla funzione segno, che sta fuori.
**Figure (2):** le rampe che scivolano fuori dallo spazio; le iterate di una contrazione che si
stringono al punto fisso.
**La domanda:** in dimensione infinita si perde la compattezza — ed è lì che vivono i fenomeni
collettivi.

### 09 — Hilbert e Fourier ⭐
Il nucleo concettualmente più importante del ponte. **Fourier non è un trucco di calcolo: è lo
sviluppo di un vettore su una base ortonormale.** I coefficienti integrali sono proiezioni,
Parseval è la conservazione della norma, il teorema della proiezione dice che le somme parziali
sono *la* miglior approssimazione possibile — per Pitagora, non per un calcolo di minimo.
**Figure (4):** la geometria della proiezione con l'angolo retto disegnato (capacità `segs`);
l'ortogonalità di $\sin x$ e $\sin 2x$ come cancellazione di aree; il **fenomeno di Gibbs**
sull'onda quadra con l'overshoot del 9% che non si abbassa mai; il dente di sega.
**Ci cadono dentro come corollari:** $\sum 1/n^2=\pi^2/6$ (Basilea) e $\sum 1/n^4=\pi^4/90$.
**La domanda:** la base giusta diagonalizza l'evoluzione — ed ETH è un'affermazione sugli elementi
di matrice in quella base.

### 10 — Lebesgue e $L^p$ `[+]`
Salda il debito lasciato dal 09: **chi garantisce che $L^2$ sia completo.** Partizionare il
codominio invece del dominio, misura nulla, «quasi ovunque», e i tre teoremi di passaggio al
limite — monotona, Fatou, **dominata** (quella che userai il 90% delle volte).
**Figura:** la successione $f_n=n$ su $[0,1/n]$ che tende a zero in ogni punto ma ha area sempre 1
— perché la dominante non è un tecnicismo. *Vista come funzionale, quella stessa successione è la
delta: ponte diretto al nucleo 15.*
**La domanda:** «misura nulla» è esatto, «misura $10^{-10^{23}}$» è fisica — e li trattiamo uguale.

---

# MOVIMENTO III — Analisi complessa
*(metà dell'esame di Metodi)*

### 11 — Funzioni olomorfe
Il miracolo: **una sola condizione di derivabilità impone rigidità totale.** Cauchy–Riemann
derivate confrontando due direzioni; $\partial f/\partial\bar z=0$ come forma che spiega tutto;
armoniche coniugate con l'algoritmo d'esame in quattro mosse; polidromia, determinazioni, tagli.
**Figure (3):** le due famiglie di iperboli di $z^2$ che si incrociano ad angolo retto — se $u$ è
il potenziale, sono equipotenziali e linee di campo nella **stessa** funzione; i livelli di
$\arg z$ col taglio e il punto di diramazione; e l'**elicoide**, cioè la **superficie di Riemann**
del logaritmo: girando si sale di un foglio invece di saltare, e la polidromia da difetto diventa
geometria (il taglio si rivela per quello che è — una nostra mutilazione per stendere la superficie
su un foglio solo).
**La domanda:** la non-analiticità come modo in cui la novità entra in una teoria rigida
(Lee–Yang, transizioni di fase).

### 12 — Teorema e formula di Cauchy
$\oint f=0$ su domini senza buchi, e il valore interno determinato dai soli valori al bordo. Da lì
la cascata: derivabilità infinita, **analiticità**, Liouville, teorema fondamentale dell'algebra,
principio del massimo. Poi serie di Laurent e classificazione delle singolarità.
**Figure (2):** il campo di $1/z$ coi due contorni dai destini opposti (quello che esclude il buco
dà zero, quello che lo include dà $2\pi i$) — è il vortice del nucleo 04 in veste complessa; il
modulo di $1/(z^2+1)$ coi due poli **fuori** dall'asse reale.
**Qui trova risposta la domanda del nucleo 07:** il raggio di convergenza è la distanza dalla
singolarità più vicina *nel piano complesso*, anche quando sull'asse reale non si vede nulla.

### 13 — Residui ⭐ *(il cavallo da lavoro: peso d'esame massimo)*
Il teorema dei residui e i **quattro sottotipi** d'esame, tutti con contorno disegnato:
(a) razionali su ℝ; (b) razionali in $\cos,\sin$ sul cerchio unitario; (c) con $e^{ikx}$ e il
**lemma di Jordan** — col trabocchetto del semipiano dichiarato in chiaro ($k>0$ si chiude sopra,
$k<0$ sotto, e il segno cambia); (d) con tagli, contorno **keyhole**. Poi i poli sull'asse reale:
valore principale e regola del **mezzo residuo**, con l'integrale di Dirichlet svolto.
**Figure (2):** il semicerchio coi poli dentro e fuori; il keyhole coi due lati del taglio che non
si cancellano.
**La domanda:** ogni polo è un modo, ogni residuo un'ampiezza — e quando una selva di poli reali
imita un unico polo complesso, cioè come nasce un tempo di rilassamento.

### 14 — Continuazione analitica e Gamma `[+]`
La formula non è la funzione: una serie che converge in un disco è solo una *finestra* su un
oggetto più grande, e l'estensione è **unica**. Poi Γ, l'equazione funzionale come strumento di
continuazione, i poli sugli interi negativi, la formula di riflessione, la regolarizzazione zeta e
l'effetto Casimir.
**Figure (2):** le somme parziali che divergono mentre $1/(1-x)$ prosegue tranquilla; Γ sull'asse
reale coi fattoriali e i poli (approssimazione Stirling+ricorrenza, verificata a 5 cifre).
**Il regalo:** la formula di riflessione **l'avevi già dimostrata** — è l'integrale keyhole del 13.
**La domanda:** la transizione di fase come singolarità che arriva sull'asse fisico.

---

# MOVIMENTO IV — Funzionale e Metodi applicati
*(l'altra metà dell'esame)*

### 15 — Distribuzioni, delta, Fourier rigorosa, funzioni di Green ⭐
La delta **non** è una funzione: è la regola $\langle\delta,\varphi\rangle=\varphi(0)$. La derivata
si scarica sulla funzione di prova, quindi **tutto è derivabile infinite volte**. Poi la trasformata
di Fourier su $L^1$, $L^2$ (Plancherel) e sulle temperate, col formulario completo. Infine le
funzioni di Green per EDO, con le condizioni di giunzione.
**Il trabocchetto n.1 dell'esame, trattato per esteso:** con sorgente $\delta'$ **salta la funzione,
non la derivata** — e le due firme grafiche sono disegnate, così riconosci a colpo d'occhio se hai
imposto la condizione giusta (angolo senza salto ↔ salto senza angolo).
**Figure (3):** le gaussiane che si stringono verso la delta; l'indeterminazione come proprietà
della trasformata (stringere in $x$ è allargare in $k$); la Green triangolare con la punta nella
sorgente.
**La domanda:** l'irreversibilità come informazione che migra nelle alte frequenze.

### 16 — Operatori e teoria spettrale ⭐ *(il nucleo che tocca la tesi più da vicino)*
Da dove viene una base: non si sceglie, si **trova** — è quella degli autovettori dell'operatore.
Aggiunto e autoaggiunto, autovalori reali, teorema spettrale $A=\sum\lambda_nP_n$, funzioni di
operatori. Poi Sturm–Liouville, che spiega perché *tutte* le funzioni speciali della fisica
(Legendre, Bessel, Hermite) sono autofunzioni di qualcosa. Infine la Green nella base spettrale e
il **risolvente**, i cui poli sono lo spettro e i cui residui sono i proiettori — il teorema del
nucleo 13 che estrae la struttura spettrale.
**Il trabocchetto n.2:** con autovettori **non** ortonormali, $|v\rangle\langle v|$ è sbagliato;
serve $S E_{nn} S^{-1}$ o la base duale. Controesempio svolto e **verificato numericamente**.
**Figura:** due spettri con la stessa densità di livelli ma statistiche opposte — integrabile
(livelli che si accalcano) contro **caotico** (livelli che si respingono). È letteralmente la
firma che distingue un sistema che termalizzerà.
**L'esercizio che chiude il cerchio:** la **particella nella scatola**. L'equazione
$-\frac{\hbar^2}{2m}\psi''=E\psi$ con $\psi(0)=\psi(L)=0$ *è* il problema di Sturm–Liouville della
tappa precedente: le condizioni al bordo danno $E_n=\frac{\hbar^2\pi^2}{2mL^2}n^2$, e la
quantizzazione dell'energia si rivela essere la stessa cosa che rende discreti i modi di una corda.
Le curve della figura **sono** le funzioni d'onda; nodi, ortogonalità e Parseval diventano livello,
distinguibilità e conservazione della probabilità.
**La domanda:** nella base spettrale non succede nulla — solo fasi che ruotano. Come fa a
termalizzare? È ETH, formulata nel linguaggio del nucleo.

### 17 — EDP della fisica: Laplace, calore, onde
Le tre equazioni archetipe risolte con tutti gli strumenti costruiti. Laplace (proprietà della
media, principio del massimo, Green = potenziale coulombiano); calore (nucleo gaussiano via
Fourier, regolarizzazione istantanea, velocità infinita, irreversibilità come problema mal posto);
onde (d'Alembert, dominio di dipendenza = cono di luce, energia conservata, singolarità che
viaggiano).
**Figure (3):** Laplace su una striscia col dato al bordo che si smorza; il **nucleo del calore
nello spazio-tempo** in 3D ruotabile — la punta che si abbassa e si allarga come $\sqrt t$;
l'impulso d'onda che si sdoppia mantenendo forma intatta.
**La riga che riassume il percorso:** stesso operatore spaziale, stessa base — cambia solo come
ogni modo evolve nel tempo. **Fermo, smorzato, oscillante: equilibrio, dissipazione, propagazione
sono tre destini dello stesso spettro.**
**La domanda finale:** il paradosso di Loschmidt, con tre risposte candidate e nessuna scelta.

---

## Come è fatto, tecnicamente

- **Un nucleo = solo contenuto.** `nuclei/contenuti/NN-nome.js` (header META + array TAPPE), montato
  dal template con `node assembla-nucleo.js`. Nessun clone di file: è così che un difetto si
  propagava a tutti.
- **Motore grafico proprio** (`nuclei/motore-plot.js`): canvas puro, zero dipendenze. 2D (contour,
  curve, campo vettoriale, ritratto di fase, funzioni, overlays, marks, rings, segs, grad) e 3D
  (superficie ruotabile con piano tangente, curva parametrica).
- **Verifica obbligatoria:** `verifica-katex-file.js` controlla **JS e formule** insieme — perché in
  un'app data-driven il JS rotto significa pagina bianca anche con la matematica perfetta.
- **Prova dell'occhio:** ogni figura nuova è stata renderizzata con Chrome headless e **guardata**.
  I numeri delicati (Γ, i proiettori spettrali) sono stati verificati contro valori noti.
- **Mappa e carta si rigenerano da sole** dai file: `mappa-percorso.py`, `carta-rotte.py`.

**Stato finale: 23 nuclei in 5 movimenti · 103 archi verso la fisica · 0 errori.**

*(Aggiornata il 2026-07-21, sera: figure di superficie parametrica — sfera/cilindro/Möbius nel 03, toro nel 04, disco e calotta nel 05, elicoide nel 11 — e l'esercizio della funzione d'onda nel 16.)*

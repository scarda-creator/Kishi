# Memoria, vetri di spin e termalizzazione quantistica

## Un documento di lavoro per decidere una tesi

*Scritto da Dedalo per Giuseppe Scarda, 22 luglio 2026. Materiale grezzo verificato dall'Argonauta
in `hopfield-rsb-eth-findings.md`; l'inquadramento, i giudizi e le proposte sono miei e vanno
discussi, non presi per buoni.*

---

## 0. Il punto, prima di tutto il resto

C'è un buco preciso nella letteratura, e ha la forma giusta per una tesi.

Nel 2017 Baldwin, Laumann, Pal e Scardicchio hanno mostrato che nella fase vetrosa di un modello
$p$-spin quantistico l'ipotesi di termalizzazione degli autostati **viene violata**: gli autostati
si organizzano in *cluster*, e la violazione non è del tipo noto (non è localizzazione a molti
corpi). È il collegamento più diretto che esista fra la struttura gerarchica degli stati di un
vetro di spin e il modo in cui un sistema quantistico chiuso raggiunge — o non raggiunge —
l'equilibrio.

Quel lavoro riguarda i modelli con $p \ge 3$. Il modello di Hopfield, cioè il modello di **memoria
associativa**, è il caso $p = 2$. E i due casi non sono varianti dello stesso problema: hanno
strutture di rottura delle repliche **qualitativamente diverse** — un salto netto nel primo caso,
una gerarchia continua nel secondo.

**Per il caso $p=2$, l'analisi ETH non è stata fatta.**

Questo è il buco. Non è un buco perché nessuno ci ha pensato: è un buco perché richiede di tenere
insieme due tradizioni che parlano lingue diverse — la meccanica statistica dei sistemi disordinati
e la fisica quantistica dei molti corpi. Tu sei nella posizione di impararle entrambe, e sei nel
posto dove la prima è nata.

Il resto di questo documento serve a mettere quel buco a fuoco: cosa c'è da sapere prima, quanto è
grande, e quali domande ci si possono ritagliare dentro con quattro-sei mesi di lavoro.

---

# Parte I — Il modello di Hopfield è un vetro di spin

## 1.1 Il modello, in tre righe

Prendi $N$ neuroni binari $S_i = \pm 1$ e $p$ configurazioni da memorizzare (i *pattern*)
$\xi_i^\mu$, con $\mu = 1,\dots,p$, ognuna una stringa casuale di $\pm 1$. Costruisci i pesi
sinaptici con la regola di Hebb,

$$J_{ij} = \frac{1}{N}\sum_{\mu=1}^{p}\xi_i^\mu \xi_j^\mu ,$$

e definisci l'energia

$$H = -\frac{1}{2}\sum_{i \ne j} J_{ij} S_i S_j .$$

È un modello di Ising con interazioni a due corpi — quindi $p=2$ nel senso del numero di spin
accoppiati, da non confondere con $p$ = numero di pattern — con accoppiamenti costruiti dai
pattern. Hopfield (1982) osservò che ogni pattern è un **minimo locale** dell'energia: partendo da
una configurazione corrotta, la dinamica di discesa la ripara. È la memoria associativa: si
recupera il ricordo intero da un frammento.

La domanda quantitativa è: **quanti pattern si possono memorizzare prima che il sistema smetta di
funzionare?** Se ne metti troppi, i minimi si confondono e il recupero fallisce.

## 1.2 Perché serve la meccanica statistica

La risposta dipende dal rapporto
$$\alpha = \frac{p}{N},$$
e si ottiene trattando il modello come un sistema termodinamico: temperatura $T$ (rumore nella
dinamica neurale), energia libera, transizioni di fase. Ma c'è una complicazione seria: gli
accoppiamenti $J_{ij}$ sono **casuali**, perché costruiti da pattern casuali. Il sistema è
*disordinato*, e l'energia libera dipende dalla particolare realizzazione del disordine.

Quello che interessa è la media sul disordine dell'energia libera, cioè $\overline{\ln Z}$ e non
$\ln \overline{Z}$ — la media del logaritmo, non il logaritmo della media. Le due cose sono diverse,
e la prima è quella fisica (l'energia libera è *autoaverageante*: per $N$ grande ogni campione dà
lo stesso risultato).

Il **metodo delle repliche** serve esattamente a calcolare $\overline{\ln Z}$. Il trucco è
l'identità
$$\ln Z = \lim_{n \to 0}\frac{Z^n - 1}{n},$$
che permette di calcolare $\overline{Z^n}$ — la media su $n$ copie identiche del sistema, che è
fattibile — e poi continuare analiticamente a $n \to 0$.

*(Sì: è la continuazione analitica del nucleo 14 del tuo percorso, usata su un intero. Non è un
dettaglio pittoresco — è precisamente il punto in cui il metodo delle repliche è matematicamente
delicato, ed è da lì che nascono i suoi problemi e la sua bellezza.)*

## 1.3 Le quantità che descrivono le fasi

Dal calcolo emergono tre parametri d'ordine, e capire cosa significano è metà del lavoro.

**L'overlap col pattern**, $m^\mu = \frac{1}{N}\sum_i \xi_i^\mu \langle S_i\rangle$: quanto la
configurazione somiglia al ricordo $\mu$. Se $m \approx 1$ il ricordo è stato recuperato.

**Il parametro di Edwards–Anderson**, $q = \frac{1}{N}\sum_i \langle S_i\rangle^2$: quanto il
sistema è *congelato*. Se $q = 0$ gli spin fluttuano liberamente; se $q \ne 0$ ognuno ha una
direzione preferita, anche se globalmente non somiglia a nessun pattern. È il marchio della fase
vetrosa.

**La suscettività** $\chi = \beta(1-q)$: quanto il sistema risponde a una perturbazione.

Da qui il **diagramma di fase**, tre regioni:

| fase | $m$ | $q$ | cosa vuol dire |
|---|---|---|---|
| **recupero** | $\ne 0$ | $\ne 0$ | la memoria funziona: il sistema cade sul pattern |
| **vetro di spin** | $0$ | $\ne 0$ | congelato, ma su stati che **non** sono ricordi: memoria distrutta |
| **paramagnete** | $0$ | $0$ | troppo rumore: nessuna struttura |

E il numero che porta il peso di tutta la teoria:

$$\boxed{\ \alpha_c \approx 0{,}138\ }$$

Oltre $0{,}138\,N$ pattern, la memoria collassa **bruscamente** nella fase vetrosa. Non degrada:
crolla. È una transizione di fase del primo ordine nell'overlap, ed è il risultato di
Amit–Gutfreund–Sompolinsky (1985, 1987).

*Vale la pena fermarsi su cosa dice questo numero: un sistema di memoria associativa costruito con
la regola più semplice possibile ha una capacità **finita e universale**, indipendente dai dettagli
— circa il 14% del numero di neuroni. È il tipo di risultato per cui vale la pena fare fisica
statistica.*

## 1.4 Dove entra la rottura delle repliche, e perché è il punto interessante

Il calcolo AGS assume che le $n$ repliche siano **simmetriche**: l'overlap fra due repliche
qualsiasi, $q_{ab}$, è lo stesso per ogni coppia. È l'ansatz *replica-simmetrico* (RS).

Ma quell'ansatz può essere **instabile**. Il criterio è la linea di **de Almeida–Thouless**: si
calcola l'Hessiana dell'energia libera nello spazio delle repliche e si guarda l'autovalore detto
*replicon*. Dove diventa negativo, la soluzione RS è un punto di sella instabile e la fisica vera
richiede la **rottura della simmetria delle repliche** (RSB).

Nel modello di Hopfield la situazione è questa, ed è più interessante di quanto sembri:

- nella **fase di recupero** ($\alpha < \alpha_c$, $T$ bassa) la soluzione RS è AT-**stabile**.
  Per questo il valore $\alpha_c \approx 0{,}138$ resta corretto anche dopo aver introdotto RSB:
  la rottura non sposta la capacità di memoria;
- nella **fase vetrosa** ($\alpha > \alpha_c$) la soluzione RS è **instabile**: lì il sistema è
  formalmente un modello di Sherrington–Kirkpatrick con campi casuali, e la sua struttura è quella
  di Parisi — **full RSB**, con una funzione $q(x)$ continua.

E qui arriva la distinzione che regge l'intero documento:

> **$p = 2$ dà full RSB (gerarchia continua di stati); $p \ge 3$ dà 1RSB (un salto netto).**

Nel primo caso gli stati puri si organizzano in un albero **ultrametrico** con infiniti livelli di
ramificazione: la distanza fra tre stati qualsiasi soddisfa $d(A,C) \le \max\{d(A,B), d(B,C)\}$,
cioè non esistono triangoli "generici" — solo isosceli con la base corta. Nel secondo caso l'albero
ha un solo livello: cluster ben separati, senza sottostruttura.

**Questa differenza è il cuore di tutto ciò che segue.**

## 1.5 Le reti dense, e cosa si sa già

Krotov e Hopfield (2016) hanno generalizzato il modello sostituendo l'energia quadratica con termini
di ordine più alto, ottenendo capacità superlineari (e, in una variante, esponenziali). Sono le
"dense associative memories", oggi note anche perché la loro regola di aggiornamento è
sostanzialmente l'*attention* dei Transformer.

Per queste reti la struttura RSB è stata studiata: Albanese e collaboratori (2021, 2023) mostrano
che è **1RSB**, e ne hanno calcolato la linea AT. Il che è coerente: le reti dense sono $p \ge 3$.

Quindi: il caso $p \ge 3$ è coperto sia sul lato classico sia — grazie a Baldwin et al. — sul lato
quantistico. Il caso $p = 2$, cioè l'Hopfield originale, è coperto solo sul lato classico.

---

# Parte II — L'ipotesi di termalizzazione degli autostati

## 2.1 Il problema che risolve

Un sistema quantistico isolato evolve unitariamente: $|\psi(t)\rangle = e^{-iHt/\hbar}|\psi(0)\rangle$.
Nella base degli autostati dell'energia non succede nulla — solo fasi che ruotano, e i moduli
$|c_n|$ restano costanti per sempre. L'entropia di von Neumann di uno stato puro è zero e resta
zero. **Un sistema quantistico chiuso non termalizza**, in senso stretto.

Eppure i sistemi quantistici isolati, in laboratorio, termalizzano: le osservabili si assestano su
valori d'equilibrio e ci restano.

*(È esattamente la tensione del nucleo 22 del tuo percorso. Qui la si formula in modo che si possa
attaccare.)*

## 2.2 L'ansatz, scritto per esteso

La risposta di Deutsch (1991) e Srednicki (1994, 1999) sposta la domanda dallo **stato** alle
**osservabili**. L'ipotesi è che gli elementi di matrice di un'osservabile fisica ragionevole
$\hat O$ negli autostati dell'energia abbiano la forma

$$\langle m|\hat O|n\rangle \;=\; \mathcal{O}(\bar E)\,\delta_{mn} \;+\; e^{-S(\bar E)/2}\,f_O(\bar E,\omega)\,R_{mn},$$

dove $\bar E = (E_m+E_n)/2$, $\omega = E_n - E_m$, $S(\bar E) = \ln \rho(\bar E)$ è l'entropia
microcanonica, $\mathcal{O}$ e $f_O$ sono funzioni **lisce**, e $R_{mn}$ è una variabile
pseudo-casuale a media nulla e varianza uno.

Va letta un pezzo alla volta.

**Il termine diagonale** $\mathcal{O}(\bar E)$ dice che il valor medio dell'osservabile in un
singolo autostato è una funzione liscia dell'energia — cioè **coincide col valore microcanonico**.
Questa è l'affermazione forte: *un solo autostato contiene già l'informazione termica*. Non serve
una media d'insieme; l'insieme statistico è già dentro ogni singolo autostato.

**Il termine fuori diagonale** è soppresso da $e^{-S/2}$, cioè come l'inverso della radice della
dimensione dello spazio di Hilbert: esponenzialmente piccolo in $N$. Sono questi termini a
governare la *dinamica*: le fluttuazioni attorno all'equilibrio e il tempo che ci vuole a
raggiungerlo. La loro struttura pseudo-casuale è ciò che fa cancellare le fasi.

**Perché questo spiega la termalizzazione.** Se vale l'ansatz, il valor medio
$\langle\hat O\rangle(t)$ di uno stato iniziale che sovrappone molti autostati vicini in energia
converge al valore microcanonico, e le ricorrenze sono soppresse esponenzialmente. Non si è persa
informazione: le fasi si cancellano, ed è irreversibile solo perché nessuno può riallinearle.

## 2.3 Le violazioni: dove ETH non vale

L'ETH è un'ipotesi, non un teorema, ed è la sua **falsificabilità** a renderla fisica.

**Localizzazione a molti corpi (MBL).** Con disordine forte, *tutti* gli autostati violano l'ETH:
il sistema conserva memoria del proprio stato iniziale per sempre. Le firme sono nette: la statistica
delle spaziature dei livelli passa da Wigner–Dyson a Poisson, e l'entropia di entanglement degli
autostati segue una *area law* invece che una *volume law*. È una vera **fase** della materia.

**Cicatrici a molti corpi (quantum many-body scars).** Un numero $O(1)$ di autostati anomali immersi
in uno spettro per il resto termale. Non è una fase: è un'eccezione misura-quasi-nulla, ma
dinamicamente visibile.

**Frammentazione dello spazio di Hilbert.** Senza disordine: lo spazio degli stati si spezza in
settori dinamicamente disconnessi per via di vincoli. Ogni settore può termalizzare per conto suo,
ma non c'è termalizzazione globale.

## 2.4 Come si misura, in pratica

Tre diagnostiche, tutte numeriche, tutte alla portata di un calcolo su un computer normale:

1. **Rapporto $r$ delle spaziature** fra livelli consecutivi. Vale circa $0{,}386$ per uno spettro
   di Poisson (integrabile/localizzato) e circa $0{,}530$ per l'ensemble GOE (caotico/termale). È
   il primo test che si fa, e costa poche righe di codice. *(È la figura del nucleo 16 del tuo
   percorso, resa numero.)*
2. **Entropia di entanglement degli autostati**: volume law → termale, area law → localizzato.
3. **Scalatura degli elementi fuori diagonale**: si verifica che $|\langle m|\hat O|n\rangle|^2$
   decresca come $e^{-S(\bar E)}$ al crescere della taglia.

---

# Parte III — Il ponte: cosa c'è e cosa manca

## 3.1 Il lavoro che apre la strada

**Baldwin, Laumann, Pal, Scardicchio, *Phys. Rev. Lett.* 118, 127201 (2017)** — "Clustering of
nonergodic eigenstates in quantum spin glasses".

Modello: $p$-spin classico più un campo trasverso $\Gamma$, che è il modo standard di rendere
quantistico un vetro di spin (il campo trasverso introduce l'effetto tunnel fra configurazioni).
Risultati:

- a $\Gamma$ **grande** il sistema è ergodico, l'ETH vale, la statistica dei livelli è
  Wigner–Dyson: il termine quantistico mescola tutto;
- a $\Gamma$ **piccolo** compare una fase **non ergodica** in cui l'ETH è violata — ma **non** si
  tratta di MBL. Gli autostati si organizzano in **cluster**, caratterizzabili con un parametro di
  Edwards–Anderson *risolto per autostato*;
- esiste un **mobility edge** in energia: autostati ergodici e non ergodici coesistono nello stesso
  spettro, separati da una soglia.

La cosa che rende questo lavoro il punto di partenza giusto: la transizione in temperatura dentro
la fase non ergodica **ricorda la transizione di clustering del $p$-spin classico**. Cioè: la
struttura del paesaggio classico si vede negli autostati quantistici.

## 3.2 Cosa manca — e ha la forma di una tesi

Tre assenze, in ordine di quanto sono attaccabili.

**(a) Il caso $p = 2$, cioè Hopfield.** Il lavoro di Baldwin et al. è per $p \ge 3$, dove il
paesaggio classico è 1RSB — cluster netti, un solo livello. Nel caso $p=2$ il paesaggio è **full
RSB**, con una gerarchia continua e ultrametrica. La domanda naturale è:

> *La struttura ultrametrica continua del paesaggio classico produce, negli autostati del modello
> quantistico, una gerarchia di cluster invece di una singola separazione?*

Nessuno l'ha guardato. E non è una domanda ornamentale: è la differenza fra "gli autostati si
dividono in gruppi" e "gli autostati si organizzano ad albero".

**(b) La mappa fra $q(x)$ e la struttura degli autostati.** Il collegamento fra paesaggio RSB e
lentezza della termalizzazione è fisicamente motivato — e c'è un lavoro vicino (Rademaker e Abanin,
2020, su vetri di spin unidimensionali) — ma **non esiste una mappa formulata** che porti dalla
funzione di Parisi $q(x)$ del modello classico alla distribuzione degli overlap fra autostati del
modello quantistico. È il contributo che manca sul piano concettuale.

**(c) Il Hopfield quantistico esiste in letteratura, ma per altri scopi.** C'è una letteratura
crescente su memorie associative quantistiche, orientata al *quantum computing* e all'annealing:
si chiede quanto si può memorizzare e quanto velocemente si recupera, **non** come sono fatti gli
autostati. La domanda ETH su questo modello non è stata posta.

## 3.3 Il quadro onesto

Il ponte fra RSB e ETH **non è un campo consolidato**: è una frontiera con due o tre lavori vicini.
Questo taglia in due direzioni, e vanno viste entrambe.

*A favore*: lo spazio è reale, la domanda è ben posta, gli strumenti esistono, e chi ci lavora è
poca gente. Una tesi triennale non può risolvere il problema, ma può **misurare qualcosa che
nessuno ha misurato** — che è già un contributo vero.

*Contro*: nessuna guida pronta. Ogni passo va deciso, e senza un relatore che conosca il terreno si
rischiano mesi su una strada già chiusa. **Questa direzione richiede un relatore, non è
autodidattica.**

---

# Parte IV — Cinque domande, e quanto costano

Le ordino per fattibilità reale in quattro-sei mesi, non per bellezza.

## D1 — ETH nella fase vetrosa del Hopfield quantistico *(numerica; la consiglio)*

Si costruisce il modello di Hopfield con campo trasverso,
$$H = -\frac{1}{2}\sum_{i\ne j}J_{ij}\sigma^z_i\sigma^z_j \;-\; \Gamma\sum_i \sigma^x_i,$$
lo si diagonalizza esattamente per taglie accessibili, e si misurano le tre diagnostiche del
§2.4 al variare di $\alpha$ (carico di memoria) e $\Gamma$ (quantisticità).

**Cosa si ottiene:** una mappa nel piano $(\alpha,\Gamma)$ che dice dove l'ETH vale e dove no, per
il caso $p=2$ che nessuno ha guardato. Se le tre regioni classiche (recupero / vetro / paramagnete)
lasciano una traccia negli autostati, si vede lì.

**Onestà sui numeri, ed è la cosa che devi sapere prima di innamorartene.** La diagonalizzazione
*completa* di uno spin-$1/2$ a $N$ siti tratta matrici $2^N \times 2^N$: a $N=14$ sono $16\,384$
stati, gestibile su un portatile; a $N=16$ sono $65\,536$, pesante ma fattibile; a $N=20$ sono un
milione, e lo spettro completo **non** si ottiene con un portatile. Per $N$ grandi si usa Lanczos e
si prendono pochi autostati vicino a un'energia scelta. Chi ti dice "$N \le 20$" senza distinguere
i due casi non ha fatto il conto. Nel disordinato, in più, serve mediare su molte realizzazioni dei
pattern: il costo va moltiplicato per il numero di campioni.

**Strumenti:** Python con NumPy/SciPy (`scipy.sparse.linalg.eigsh`), oppure QuSpin che è fatto
apposta. Un mese-mese e mezzo per avere codice funzionante e testato, poi la produzione dei dati.

**Rischio:** le taglie accessibili sono piccole e il vetro di spin è un fenomeno di $N$ grande.
Molta della fatica sarà nell'analisi di *scaling*. È un rischio noto e gestibile, non un vicolo cieco.

## D2 — Analisi 1RSB del Hopfield quantistico *(analitica; serve un relatore stretto)*

Estendere il calcolo a repliche del Hopfield con campo trasverso oltre l'ansatz replica-simmetrico.
Serve il formalismo repliche + integrale sui cammini con decomposizione di Trotter: la parte
quantistica introduce una dimensione immaginaria in più, e i parametri d'ordine diventano funzioni.

Bella, tecnica, e **non si improvvisa**. Da tenere come possibile evoluzione se la triennale va bene
e il relatore ti segue.

## D3 — Parametro di Edwards–Anderson risolto per autostato *(numerica; estensione naturale di D1)*

È la misura che Baldwin et al. usano per i cluster, applicata al caso $p=2$: si guarda se gli
autostati si raggruppano in **una** separazione netta (come nel $p\ge3$) o in una **gerarchia** —
cioè se l'ultrametricità classica lascia una firma quantistica.

Concettualmente è la domanda più bella del documento. Operativamente è D1 più un'analisi di
clustering sugli autostati. **Se D1 funziona, questa è la sua continuazione, ed è dove la tesi
diventa una tesi con un'idea.**

## D4 — Linea AT nel Hopfield quantistico *(analitica)*

Estendere il calcolo della linea di de Almeida–Thouless al caso con campo trasverso. Circoscritta e
onesta, ma tecnica; stesso avvertimento di D2.

## D5 — Confronto $p=2$ contro $p=3$ *(esplorativa)*

Confronto sistematico fra i due casi nello stesso schema numerico: la differenza full-RSB contro
1RSB si traduce in una differenza visibile nella struttura degli autostati? È D1+D3 fatti due volte.
Il rischio è la dispersione: due modelli in quattro mesi sono tanti.

## La mia raccomandazione

**D1 come corpo della tesi, D3 come sua ultima sezione.** D1 garantisce un risultato consegnabile
anche se l'idea grossa non paga; D3 è dove c'è l'idea. È la struttura giusta per una tesi
ambiziosa che non rischia di finire senza niente in mano: *un lavoro che produce un risultato certo
e apre a uno incerto.*

---

# Parte V — Cosa studiare prima, e in quanto tempo

Il metodo delle repliche non si impara leggendo AGS: si impara su un testo che lo spiega, e poi si
legge AGS in un pomeriggio. Le stime sono per due-tre ore al giorno.

| # | lettura | costo | cosa ti porti via |
|---|---|---|---|
| 1 | Castellani–Cavagna, *Spin-glass theory for pedestrians* (2005) | 2 sett. | il metodo delle repliche fatto passo passo: è **il** testo da cui partire |
| 2 | Amit–Gutfreund–Sompolinsky, PRL 55, 1530 (1985) | 1 giorno | il risultato $\alpha_c$, letto dopo il #1 diventa leggibile |
| 3 | AGS, *Ann. Phys.* 173, 30 (1987) | 2 sett. | il calcolo completo, il diagramma di fase, la stabilità AT |
| 4 | Nishimori, *Statistical Physics of Spin Glasses*, capp. 2–4 | 2 sett. | l'inquadramento sistematico; utile come riferimento continuo |
| 5 | Mézard–Parisi–Virasoro (1987), capp. 5–8 | 2 sett. | ultrametricità e albero degli stati: la parte che ti interessa di più |
| 6 | D'Alessio, Kafri, Polkovnikov, Rigol, *Adv. Phys.* 65, 239 (2016) | 2 sett. | la rassegna standard su ETH: da qui si impara ETH per bene |
| 7 | Rigol–Dunjko–Olshanii, *Nature* 452, 854 (2008) | 1 giorno | la verifica numerica che ha reso ETH mainstream |
| 8 | Abanin–Altman–Bloch–Serbyn, RMP (2019) | 1 sett. | MBL: la violazione più studiata |
| 9 | **Baldwin–Laumann–Pal–Scardicchio, PRL 118, 127201 (2017)** | 2 giorni | il ponte. Cinque pagine che richiedono tutte le precedenti |
| 10 | Albanese et al., arXiv:2111.12997 e 2303.06375 | 1–2 sett. | RSB e linea AT nelle reti dense: lo stato dell'arte sul lato $p\ge3$ |

**Totale: otto-dieci settimane**, cioè un'estate o un semestre in parallelo ai corsi. Le prime tre
voci sono il minimo per poter parlare con un relatore da pari; le voci 6 e 9 sono ciò che rende la
proposta *tua* invece che generica.

Una nota pratica: le voci 1, 6 e 9 sono liberamente accessibili su arXiv. Nishimori e MPV sono
libri; MPV si trova in biblioteca a Fisica.

---

# Parte VI — Come si presenta questa cosa, senza bruciarsela

Hai detto che vuoi un progetto identitario, e che vorresti arrivare alla coscienza. Ti dico come
si tiene insieme l'ambizione con la credibilità, perché è una questione di forma e la forma qui
conta quanto il contenuto.

**Cosa NON promettere.** Non presentare una tesi che promette la coscienza e consegna un modello di
spin. Il pubblico che conta lo riconosce in tre secondi, e da quel momento non ti ascolta più.
Soprattutto: non appoggiarti alla via quantistica ingenua della coscienza (microtubuli e affini) —
ha contro un conto preciso sui tempi di decoerenza in ambiente biologico, e citarla come ispirazione
ti costa la fiducia di chiunque possa esserti utile.

**Cosa promettere invece.** La domanda vera che ti muove, e che regge:

> Come fa un ordine macroscopico coerente a emergere — o a non emergere — da un'enormità di gradi
> di libertà che interagiscono in modo disordinato?

La memoria associativa è il primo caso in cui questa domanda ha una risposta **quantitativa**: c'è
un numero, $\alpha_c$, che dice esattamente quando l'ordine collassa. La termalizzazione quantistica
è la stessa domanda in un mondo dove nulla si perde e tutto è unitario. **Metterle insieme non è
un'associazione poetica: è chiedersi se la gerarchia di stati che rende una memoria una memoria
sopravviva quando il sistema è quantistico.**

Detta così, la coscienza non compare — ma è chiaro a chiunque legga in che direzione stai andando.
È il modo di essere ambiziosi che non ti fa perdere la platea: **l'orizzonte si dichiara, l'oggetto
si delimita.**

**Con il relatore.** Ricci-Tersenghi e Agliari lavorano *adesso* su Hopfield e RSB. Presentarsi con
"vorrei fare qualcosa sui sistemi complessi" non porta lontano; presentarsi con *«ho letto AGS e
Baldwin et al., mi chiedo se la struttura full-RSB del $p=2$ dia clustering gerarchico degli
autostati, e vorrei provare a guardarlo numericamente»* è un'altra conversazione. La differenza fra
le due frasi sono le otto settimane della Parte V.

---

# Parte VII — Cosa è verificato e cosa no

Regola della navicella: chi legge deve sapere di cosa fidarsi.

**Verificato** (riferimento completo e reperibile): AGS 1985 e 1987; Baldwin et al. 2017 (PRL
118, 127201, arXiv:1611.02296); Albanese et al. 2021 (arXiv:2111.12997) e 2023 (arXiv:2303.06375);
Castellani–Cavagna 2005; D'Alessio et al. 2016 (arXiv:1509.06411); Rigol–Dunjko–Olshanii 2008;
Rademaker–Abanin 2020; Ramsauer et al. 2021; Nishimori 2001; MPV 1987.

**Non verificato**, da controllare prima di citarlo: l'attribuzione precisa dell'analisi 1RSB del
Hopfield (Crisanti–Amit–Gutfreund, 1986) — il risultato è noto e riportato in letteratura
secondaria, il riferimento primario va confermato; alcuni preprint recenti su memorie associative
quantistiche, che ho indicato come esistenti ma di cui non ho valutato la qualità; le stime di
tempo delle letture, che sono mie e non di qualcun altro.

**Mio, non della letteratura**: l'inquadramento del §0 e della Parte III (dove sta il buco e perché
ha la forma di una tesi); la scelta e l'ordinamento delle cinque domande; i conti sulle taglie di
diagonalizzazione; tutta la Parte VI. Sono giudizi, e come tali si discutono — soprattutto con un
relatore vero, che di questo terreno sa più di me.

---

## Un'ultima cosa

Il percorso di matematica che hai alle spalle non è preparazione generica a questo lavoro: ne è
**esattamente** il linguaggio. Gli spazi di Hilbert e le basi ortonormali (nucleo 09); il teorema
spettrale, i proiettori e la statistica delle spaziature dei livelli (16); la misura e il «quasi
ovunque» (10); la sella e il limite $N\to\infty$ (14-bis); il flusso incomprimibile, l'ergodicità e
il coarse-graining (20-22). E la continuazione analitica del nucleo 14, che è il trucco su cui
poggia il metodo delle repliche.

Non l'avevo progettato per questo. È venuto fuori così perché le domande che ti interessano hanno
tutte la stessa forma — e quella forma, adesso, ce l'hai in mano.

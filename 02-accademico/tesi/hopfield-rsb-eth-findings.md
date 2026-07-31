---
type: ricerca
data: 2026-07-22
autore: Argonauta Accademico
corso: tesi
---

# Hopfield / RSB / ETH — ricognizione tecnica

## Verdetto (6 righe)

Il ponte ETH ↔ RSB esiste, ma a livello di modelli p-spin quantistici (p≥3), non ancora di Hopfield
specificamente: il lavoro di Baldwin, Laumann, Pal, Scardicchio (PRL 2017) è l'ancora. Il modello
di Hopfield nel regime spin glass (α > α_c) è formalmente un modello p=2 (SK con campi random), e
la sua versione quantistica non ha ancora una analisi ETH sistematica — questo è il buco da cui
si può entrare. Le due letture da cui partire sono Castellani-Cavagna (2005) per le repliche e
D'Alessio-Rigol et al. (2016) per ETH. La domanda più promettente per una triennale è numerica:
diagonalizzazione esatta del modello di Hopfield quantistico (N ≤ 20, transverse field) con
misura della statistica degli autovalori e della distribuzione degli overlap tra autostati, per
verificare se e come il passaggio α < α_c → α > α_c si manifesta come transizione ETH → non-ETH.

---

## Blocco 1 — Il cuore tecnico di Hopfield/RSB

### 1.1 L'analisi AGS: quantità, ansatz, risultati

Amit, Gutfreund, Sompolinsky (1985a, PRL 55, 1530; 1985b, Phys. Rev. A 32, 1007; 1987,
Ann. Phys. 173, 30) mostrano che il modello di Hopfield con p = αN pattern memorizzati
è equivalente a un vetro di spin Sherrington-Kirkpatrick con campi random. L'Hamiltoniano:

    H = -∑_{i<j} J_{ij} σ_i σ_j,   J_{ij} = (1/N) ∑_{μ=1}^p ξ_i^μ ξ_j^μ

con ξ_i^μ ∈ {±1} pattern i.i.d., σ_i ∈ {±1} spin, diventa nel limite termodinamico un
sistema di spin glass con campi quenched nella direzione dei pattern.

**Quantità d'ordine nell'ansatz replica-simmetrico (RS):**

- m^μ = (1/N) ∑_i ⟨σ_i⟩ ξ_i^μ — overlap con il pattern μ (parametro d'ordine del recupero);
  nella fase di recupero si suppone m^1 ≡ m ≠ 0 e m^μ = 0 per μ ≥ 2
- q = (1/N) ∑_i ⟨σ_i⟩_a ⟨σ_i⟩_b — parametro di Edwards-Anderson, overlap tra due repliche
  a e b a campi quenched diversi (misura la "congelazione" degli spin)
- χ = β(1 - q) — suscettività lineare spin glass (diverge alla transizione in certi regimi)

**Ansatz RS:** q_{ab} = q per a ≠ b, q_{aa} = 1. Significa che il parametro d'ordine tra
tutte le coppie di repliche è lo stesso: la soluzione non distingue tra coppi distinte.

**Equazioni di autoconsistenza RS** (schematicamente, a temperatura T = 1/β):

    m = ⟨tanh(β(m + √(αq/(1-β(1-q))²) z))⟩_z
    q = ⟨tanh²(β(m + √(αq/(1-β(1-q))²) z))⟩_z

dove z è una variabile gaussiana. Risolte numericamente: danno m(T, α) e q(T, α).

**Diagramma di fase RS — tre fasi:**

1. Ferromagnetica/recupero: m ≠ 0, q ≠ 0. Esiste per α < α_c e T < T_retrieval(α).
2. Spin glass: m = 0, q ≠ 0. Appare sopra T_c o per α > α_c; i pattern non si recuperano
   ma gli spin sono "congelati" in configurazioni casuali.
3. Paramagnetica: m = 0, q = 0. Alta temperatura.

**Valori numerici chiave:**
- α_c^{RS}(T=0) ≈ 0.138: capacità critica a temperatura zero nella soluzione RS. Questo è
  il numero più importante di tutta l'analisi. (Nota: spesso citato 0.14 per arrotondamento.)
- T_c(α=0) = 1: temperatura critica del modello di Hopfield non carico (coincide con
  la transizione ferromagnetica del campo medio Ising, perché α=0 → singolo pattern).
- Punto triplo (m=0, spin glass-retrieval-para): a α ≈ 0.05, T ≈ 0.5 circa.

**Fonti verificate:**
- AGS 1985a: https://link.aps.org/doi/10.1103/PhysRevLett.55.1530
- AGS 1987: https://www.sciencedirect.com/science/article/abs/pii/0003491687900923

### 1.2 Dove entra RSB: la riga de Almeida-Thouless

La soluzione RS può essere instabile. L'instabilità si individua calcolando gli autovalori
della matrice Hessiana della free energy nello spazio delle repliche. Il "replicon" —
l'autovalore che segnala instabilità RS — è:

    λ_replicon = 1 - β²(1-q)² α/(1-β(1-q))² — qualcosa che dipende da m e q

Quando λ_replicon < 0, la soluzione RS non è un minimo della free energy: bisogna rompere
la simmetria replicale.

**La linea AT nel modello di Hopfield:**
- Nella fase spin glass (m=0, q≠0) la soluzione RS è tipicamente AT-instabile. La linea AT
  (de Almeida-Thouless, 1978) separa la regione dove RS regge da quella che richiede RSB.
- Nella fase di recupero (m≠0) a T non troppo bassa e α non troppo alto, la RS è stabile:
  il recupero dei pattern funziona senza RSB.
- A T=0 e α < α_c: la soluzione RS del recupero è AT-stabile, quindi α_c^{RS} ≈ 0.138 è
  il risultato corretto anche con RSB. Questo è un risultato non ovvio.

**Riferimento chiave (verificato):**
Albanese, Alessandrelli, Barra, Annibale (2023), "About the de Almeida-Thouless line in
neural networks", Physica A (doi: 10.1016/j.physa.2023.129158, su arXiv:2303.06375).
Il paper fornisce un metodo rigoroso per trovare la linea AT senza fare l'analisi RSB completa,
applicato al modello di Hopfield e alle reti dense. Non fornisce valori numerici esplici di T_AT
nell'abstract, ma ricava la condizione analitica e verifica che riproduce i risultati noti
per SK e p-spin.

### 1.3 Cosa succede a 1RSB e full RSB nel modello di Hopfield

**1RSB nel Hopfield standard:**
Crisanti, Amit, Gutfreund (1986, Z. Phys. B 65, 337 — non verificato DOI) eseguono l'analisi
1RSB. Il risultato principale: α_c^{1RSB} ≈ 0.138, essenzialmente identico al risultato RS.
RSB non migliora significativamente la capacità di storage del modello di Hopfield standard.
Questo perché la fase di recupero (l'unica fisicamente utile) è RS-stabile. La RSB corregge
solo la free energy nella fase spin glass, non sposta il confine di recupero.

Fonte Semantic Scholar (verificata):
https://www.semanticscholar.org/paper/Replica-symmetry-breaking-in-attractor-neural-Steffan-K%C3%BChn/2f7af7e53f4afa524a46fcd7b9cf51b6cf8845b2

**Full RSB nella fase spin glass di Hopfield:**
Il modello di Hopfield con α > α_c nella fase spin glass è formalmente equivalente al modello
SK con campi random (interazioni pairwise, p=2). Il modello SK ha full RSB — la funzione
q(x) di Parisi è continua su [0,1]. Quindi la fase spin glass di Hopfield ha full RSB,
non 1RSB. Questo è il punto tecnico più sottile: il modello di Hopfield nel regime di spin
glass è un caso full RSB, mentre i modelli p-spin (p≥3) che compaiono nei modelli densi
hanno tipicamente 1RSB.

**Non verificato (fonte secondaria):** il risultato specifico di Tokita sul RSB a T=0 della
capacità critica è citato su Semantic Scholar
(https://www.semanticscholar.org/paper/The-replica-symmetry-breaking-solution-of-the-model-Tokita/36e802d1e835559c70ebebaa969582fa9c29ba1f)
ma non ho verificato il DOI direttamente.

### 1.4 Ultrametricità: vale nel Hopfield carico?

**Risposta: sì, nella fase spin glass, ma con una precisione importante.**

La struttura ultrametrica degli stati puri di Parisi vale per il modello SK. Il modello di
Hopfield carico nella fase spin glass (α > α_c) è formalmente equivalente a SK (p=2) con
campi random — quindi la struttura ultrametrica si trasferisce direttamente. Gli stati puri
della fase spin glass di Hopfield si organizzano in un albero ultrametrico: dati tre stati
α, β, γ, gli overlap q_{αβ}, q_{αγ}, q_{βγ} soddisfano q_{αβ} ≥ min(q_{αγ}, q_{βγ}).

Nella fase di recupero (α < α_c), gli stati di recupero sono stati puri distinti (ognuno
centrato su un pattern diverso). La loro organizzazione non è descrivibile come full RSB
ma è più banale: sono separati da barriere finite che crescono con N, e le loro distanze
sono determinate dalla struttura dei pattern.

La dinamica fuori equilibrio nella fase spin glass di Hopfield mostra aging gerarchico
coerente con la struttura ultrametrica (Berthier et al., arXiv:cond-mat/0007036 — verificato
presenza su arXiv, autori e anno non verificati sul DOI; paper di aging out-of-equilibrium
in Hopfield spin glass phase).

### 1.5 Modello di Hopfield denso: la struttura RSB cambia?

Krotov e Hopfield (2016, Adv. Neural Inf. Proc. 28) — verifica: https://pdfs.semanticscholar.org/ed33/2c92664cd64843a7ba9373d992e9547230f6.pdf — introducono
la dense associative memory con energia polinomiale di ordine n ≥ 3, portando la capacità
a O(N^{n-1}).

**RSB nelle reti dense (risultato chiave, verificato):**
Albanese, Alemanno, Alessandrelli, Barra (2021, arXiv:2111.12997):
"Replica symmetry breaking in dense neural networks". Per le reti dense Hebbiane:
- A differenza del caso pairwise, dove la free energy combina contributi "hard" e "soft"
  spin glass, nelle reti dense sopravvive solo il contributo "hard" spin glass
- Questo cambia qualitativamente la struttura RSB: la fase spin glass delle reti dense
  è di tipo 1RSB (come il p-spin, p≥3), non full RSB come nel caso pairwise
- La capacità di storage con RSB (1RSB) viene corretta rispetto a RS
- Viene validato il "Gardner picture" per questi modelli

Per il legame con i Transformer (Ramsauer et al. 2021, arXiv:2008.02217, ICLR 2021):
il paper dimostra che la regola di aggiornamento del dense Hopfield continuo è la
softmax attention. **Non è noto se questa estensione continua abbia una struttura RSB
analizzata** — al momento non ho trovato paper che studino RSB nel Hopfield Transformer.
Questo è un punto aperto nella letteratura.

---

## Blocco 2 — Il cuore tecnico di ETH

### 2.1 L'ansatz di Srednicki

Formulazione precisa (Deutsch 1991, Phys. Rev. A 43, 2046; Srednicki 1994, Phys. Rev.
E 50, 888; Srednicki 1999, J. Phys. A 32, 1163):

Per un sistema quantistico isolato con Hamiltoniano H e autostati |n⟩, H|n⟩ = E_n|n⟩,
l'elemento di matrice di un'osservabile locale O vale:

    ⟨m|O|n⟩ = O(Ē) δ_{mn} + e^{-S(Ē)/2} f_O(Ē, ω) R_{mn}

dove:
- Ē = (E_m + E_n)/2 è l'energia media
- ω = E_n - E_m è la differenza di energia
- S(Ē) = ln ρ(Ē) è l'entropia microcanonica = logaritmo della densità degli stati
- O(Ē) è una funzione liscia di Ē che coincide con la media microcanonica ⟨O⟩_{mc}(Ē)
- f_O(Ē, ω) è una funzione liscia di entrambi gli argomenti (specifica all'osservabile)
- R_{mn} è una variabile "essenzialmente casuale", media nulla, varianza unitaria,
  hermitiana: R_{mn} = R_{nm}*

**Cosa implica ETH:**
- Parte diagonale: ⟨n|O|n⟩ ≈ O(E_n) — ogni autostato ha le stesse proprietà
  termodinamiche dell'ensemble microcanico alla stessa energia. La termalizzazione
  è già in ogni singolo autostato, non emerge dall'evoluzione temporale.
- Parte off-diagonale: gli elementi fuori diagonale sono esponenzialmente piccoli in
  dimensione del sistema (∝ e^{-S/2} ∝ 1/√(numero di stati)), ma la loro struttura
  è controllata dalla funzione liscia f_O. A ω → 0, f_O dà la risposta lineare
  (teorema fluttuazione-dissipazione quantistico).

**Il ruolo della densità degli stati:** il fattore e^{-S/2} è cruciale. Per un sistema di
L spin, S ~ L (volume law dell'entropia termica), quindi e^{-S/2} ~ e^{-L/2}: gli elementi
off-diagonali scalano come 1/√(dimensione Hilbert space), esponenzialmente piccoli.
Questo garantisce che la coerenza quantistica sia irrelevante nel limite termodinamico.

Fonte review completa: D'Alessio, Kafri, Polkovnikov, Rigol (2016, Adv. Phys. 65, 239;
arXiv:1509.06411). Verifica numerica fondativa: Rigol, Dunjko, Olshanii (2008, Nature 452,
854; arXiv:0708.1324) — 5 hard-core bosons su reticolo 5×5.

### 2.2 Violazioni di ETH

**Tre categorie distinte:**

**A. Many-body localization (MBL) — violazione forte**
Disordine quenched forte → localizzazione di Anderson in spazio di Fock. TUTTI gli autostati
violano ETH. Caratteristiche:
- Statistica degli autovalori Poissoniana (sistemi integrabili/localizzati)
- Entropia di entanglement degli autostati: area law S ~ costante (vs volume law per ETH)
- Nessuna diffusione di operatori locali
- Manca la termalizzazione anche per iniziali arbitrari a energia finita

Reviews verificate:
- Abanin, Altman, Bloch, Serbyn (2019, Rev. Mod. Phys. 91, 021001)
- Alet, Laflorencie (2018, Comptes Rendus Physique 19, 498)

**B. Quantum many-body scars (QMBS) — violazione debole**
Solo una frazione esponenzialmente piccola di autostati viola ETH. Gli autostati "scar"
sono non-termali, con entropia di entanglement sub-extensive, e si trovano immersi in uno
spettro altrimenti termale. Non è una fase: è una proprietà spettrale di modelli specifici.
- Prima osservazione sperimentale: Bernien et al. (2017, Nature) in simulatore Rydberg
  (modello PXP)
- Gli autostati scar hanno grande overlap con stati iniziali specifici → oscillazioni
  persistent
- Non è una violazione forte: quasi tutti gli autostati soddisfano ETH

**C. Hilbert space fragmentation — violazione per settori**
Meccanismo disorder-free. Leggi di conservazione frammentano lo spazio di Hilbert in
settori dinamicamente disconnessi. Alcuni settori termalizano (ETH dentro il settore),
altri no. Non richiede disordine e non è un insieme di stati isolati come gli scars.
- Strong fragmentation: numero di settori cresce esponenzialmente nella dimensione del sistema
- Weak fragmentation: numero di settori cresce polinomialmente
- Recenti: arXiv:2409.08320 (2024) su fragmentation nel modello di Schwinger

**Distinzione "forte" vs "debole":**
- Violazione forte (MBL): tutti gli autostati non termalizzano
- Violazione debole (QMBS): O(1) autostati non termalizzano su O(e^S) totali
- Fragmentation: dipende dal settore; globalmente ETH non vale, ma localmente può valere

### 2.3 Diagnostiche numeriche

**1. Rapporto di spaziatura r:**
Definito come r_n = min(δ_n, δ_{n+1}) / max(δ_n, δ_{n+1})
dove δ_n = E_{n+1} - E_n è la spaziatura tra autovalori consecutivi.
- ETH (sistemi caotici, GOE): ⟨r⟩ ≈ 0.530
- MBL / integrabili (Poissonian): ⟨r⟩ ≈ 0.386
Questa è la diagnostica più usata per distinguere ergodico vs non-ergodico.

**2. Entropia di entanglement degli autostati:**
Data una bipartizione A|B del sistema, S_A(|n⟩) = -Tr[ρ_A log ρ_A] con ρ_A = Tr_B[|n⟩⟨n|].
- ETH: S_A ~ s·|A| (volume law, s è l'entropia termica per sito)
- MBL: S_A ~ costante (area law)
- QMBS: S_A sub-extensive per gli stati scar (O(log L) o O(1))

**3. Fluttuazioni degli elementi di matrice:**
Per un'osservabile O, tracciare |⟨m|O|n⟩|² vs (E_m + E_n)/2 e vs ω = E_n - E_m.
- ETH: i punti collassano su una curva liscia e^{-S(Ē)} |f_O(Ē,ω)|²
- MBL: le fluttuazioni sono grandi, non scalano con e^{-S}
- Tracciare la varianza di ⟨n|O|n⟩ come funzione di N: deve decrescere come e^{-S(E_n)} ∝ 1/(dimensione Hilbert)

---

## Blocco 3 — Il ponte

### 3.1 Verdetto diretto: il ponte esiste o no?

**Il ponte esiste a livello di modelli p-spin quantistici (p≥3), ed è il lavoro di
Baldwin, Laumann, Pal, Scardicchio (2017). A livello del modello di Hopfield specifico
(p=2, full RSB) non è stato studiato sistematicamente. Il collegamento esplicito tra
la struttura RSB ultrametrica e la struttura degli autostati non è formulato in letteratura.
Questo è il buco.**

### 3.2 Modelli di spin glass quantistici: cosa si sa

**Risultato chiave (verificato):**
Baldwin, Laumann, Pal, Scardicchio (2017, Phys. Rev. Lett. 118, 127201; arXiv:1611.02296):
"Clustering of nonergodic eigenstates in quantum spin glasses"

Modello: p-spin glass quantistico = classico p-spin con campo trasverso Γ:
    H = H_{p-spin}(classico) - Γ ∑_i σ_i^x

Risultati:
- A Γ grande (regime quantistico dominante): fase ergodica, ETH soddisfatta, livelli
  con distribuzione Wigner-Dyson
- A Γ piccolo (classico dominante): fase NON ergodica. Gli autostati VIOLANO ETH.
  La violazione NON è MBL: non c'è localizzazione in spazio reale, non c'è area law
  dell'entanglement
- La fase non-ergodica ha autostati che si organizzano in cluster: ogni cluster ha
  una magnetizzazione media distinta, caratterizzata da un parametro di Edwards-Anderson
  eigenstate-risolto q_{EA}^{eigen} = (1/N)² ∑_i ∑_n |⟨n|σ_i^z|n⟩|²
- C'è un mobility edge: a una certa energia E*, gli autostati sotto E* sono non-ergodici,
  sopra E* sono ergodici (distinzione energetica, non solo parametro di disordine)
- La transizione in temperatura nella fase non-ergodica ricorda la "clustering transition"
  della teoria classica degli spin glass

**Il collegamento con RSB:** nel lavoro di Baldwin et al. il linguaggio RSB non è usato
esplicitamente per caratterizzare gli autostati, ma il parallelo è strutturale: come nel
sistema classico gli stati puri si organizzano in cluster con overlap distinti (la struttura
RSB), nel sistema quantistico gli autostati si organizzano in cluster con magnetizzazione
distinta. Non è dimostrato che la struttura sia ultrametrica.

**Rademaker e Abanin (2020, PRL 125, 260405; arXiv:1910.04421):**
Sistema: spin glass 1D con campo trasverso, realizzabile su trapped ions.
Risultato: "slow nonthermalizing dynamics" — a bassa densità di energia, spin glass order
è preservato e la termalizzazione non avviene. Il meccanismo è un gap di risonanza
(power-law soft gap) che sopprime il "resonance avalanche" tipico del thermalizing regime.
Questo è distinto da MBL (che richiede ogni sito localizzato) — è una non-termalizzazione
più debole, guidata dalla complessità del paesaggio energetico classico.

**Nota sul p=2 (modello SK quantistico = Hopfield quantistico in spin glass phase):**
Il p=2 è il caso full RSB, non 1RSB come per p≥3. L'analisi di Baldwin et al. è per p≥3.
Per il caso p=2 quantistico il problema è più complesso: la struttura degli autostati in
una fase full RSB non è stata analizzata con gli stessi strumenti.

### 3.3 Modello di Hopfield quantistico — esiste una letteratura?

Sì, ma orientata al calcolo quantistico / quantum annealing, non a ETH.

- Quantum Hopfield con campo trasverso: Usadel (1995), Nishimori & Nonomura (1996) —
  analisi RS della capacità di storage in presenza di fluttuazioni quantistiche.
- Quantum Hopfield with dilute memories (arXiv:2405.13240, 2024): transizione di fase
  quantistica da recupero a paramagnete, esponenti critici per quantum annealing.
- Observation of associative-memory retrieval and spin-glass phases on a photonic quantum
  simulator (arXiv:2605.22922, 2026): simulazione fisica del modello quantistico.
- High-capacity associative memory in quantum-optical spin glass (arXiv:2509.12202, 2025):
  in regime non-equilibrio quantistico, memoria può superare il limite classico.

**Cosa manca:** nessuno di questi paper studia se nella fase spin glass del Hopfield
quantistico (α > α_c, campo trasverso piccolo) gli autostati violano ETH e in che modo
la struttura RSB si manifesta a livello di spettro. Questo è il gap.

### 3.4 Paesaggio RSB e lentezza della termalizzazione

Il parallelo concettuale è chiaro e fisicamente motivato:

Lato classico: nella fase spin glass piena RSB, i minimi metastabili sono organizzati in
un albero gerarchico. Le barriere energetiche tra stati separati da un overlap q crescono
con N. Questo produce tempi di rilassamento che crescono con N (aging, separazione di
scale temporali esponenziali).

Lato quantistico: se una fase spin glass classica genera molti stati metastabili con
barriere grandi, la sua versione quantistica può produrre autostati non-termali con
grandi overlap con stati classici metastabili. La termalizzazione è lenta perché
i tunnel rate tra cluster di autostati sono esponenzialmente piccoli in N.

**Cosa c'è in letteratura:**
- Baldwin et al. (2017): gli autostati nel regime non-ergodico del p-spin quantistico
  sono "trapped" vicino a configurazioni classiche metastabili — connessione esplicita
  col paesaggio energetico classico
- Yin, Surace, Lucas (2025, Phys. Rev. X 15, 011064): teoria degli stati metastabili
  in sistemi quantistici a molti corpi. Risultato: gli stati metastabili short-range
  entangled sono autostati (scar) di un Hamiltoniano perturbato; la vita media scala
  come e^{1/ε^d} in d dimensioni. Non connette esplicitamente a RSB.

**Cosa NON è in letteratura:** una mappa quantitativa da q(x) (funzione d'ordine RSB
di Parisi) alla distribuzione degli overlap tra autostati energetici. Nessuno ha
dimostrato che il profilo ultrametrico di q(x) si riflette in una struttura ultrametrica
degli autostati quantistici.

### 3.5 Hilbert space fragmentation come analogo quantistico della RSB?

La frammentazione dello spazio di Hilbert (disorder-free) e la RSB (sistemi disordinati)
hanno un parallelo strutturale:

- Entrambe descrivono settori dello spazio degli stati che non si mescolano dinamicamente
- RSB classica: settori = stati puri separati da barriere libere, organizzati in albero
- Fragmentation: settori = sottospazi di Krylov dinamicamente disconnessi

**Ma il parallelo non è formulato come teorema.** Non esiste un paper che mappi
esplicitamente la struttura RSB del Hopfield a settori frammentati nel quantistico.
La frammentazione ha un'origine diversa (simmetrie emergenti, leggi di conservazione
approssimate) rispetto all'RSB (frustrazione da interazioni random). Sono meccanismi
distinti, con analogie superficiali.

### 3.6 Ultrametricità e struttura dello spettro

Il legame diretto ultrametricità ↔ spettro dell'Hamiltoniano NON è consolidato.

Quel che si sa:
- La Hessiana della free energy nello spazio di configurazione spin glass ha autovalori
  non negativi con un punto di accumulazione a zero (marginal stability al T → 0 in full RSB)
- La marginal stability correla con la RSB full: l'Hessiana del Hamiltoniano classico
  ha uno zero mode connesso alla struttura degli stati puri
- Questo implica che il Hamiltoniano classico spin glass ha una struttura spettrale
  connessa al RSB, ma non è una mappa sull'Hamiltoniano quantistico

Fonte (parzialmente verificata): risultati su marginal stability in low-T spherical spin
glasses, arXiv:2409.15728 (2024) — connette stabilità marginale e full RSB.

**Per Hopfield specificamente:** non esiste un paper che studi direttamente la relazione
tra la funzione q(x) di Parisi del Hopfield classico e lo spettro del corrispondente
Hamiltoniano quantistico. Questo sarebbe il contributo originale.

---

## Blocco 4 — Da dove si comincia davvero

### 4.1 Piano di lettura (ordine consigliato, verificato)

**Settimane 1-2: le repliche al livello RS**

1. **Castellani, Cavagna (2005)** — "Spin-glass theory for pedestrians",
   J. Stat. Mech. P05012.
   DOI: 10.1088/1742-5468/2005/05/P05012.
   PDF libero: https://www.if.ufrgs.br/~magusmao/FIP10604/RefsSemin/spinglass1.pdf
   Lunghezza: ~60 pagine. Difficoltà: media (richiede stat mech ma niente di magistrale).
   Cosa porta: il metodo delle repliche completo (RS e 1RSB) sul p-spin sferico, con tre
   approcci (termodinamica, dinamica, complessità). Il testo più adatto per partire senza
   prerequisiti RSB.

2. **Amit, Gutfreund, Sompolinsky (1985a)** — "Storing Infinite Numbers of Patterns in a
   Spin-Glass Model of Neural Networks", PRL 55, 1530.
   DOI verificato: https://link.aps.org/doi/10.1103/PhysRevLett.55.1530
   Lunghezza: 4 pagine. Difficoltà: alta per densità ma breve.
   Cosa porta: il ponte Hopfield → SK, l'enunciato del diagramma di fase, α_c ≈ 0.14.
   Da leggere dopo Castellani-Cavagna per avere il formalismo.

**Settimane 3-4: l'analisi completa AGS**

3. **Amit, Gutfreund, Sompolinsky (1987)** — "Statistical mechanics of neural networks
   near saturation", Ann. Phys. 173, 30.
   DOI verificato: https://www.sciencedirect.com/science/article/abs/pii/0003491687900923
   Lunghezza: ~70 pagine. Difficoltà: alta.
   Cosa porta: l'analisi completa del diagramma di fase RS con tutte le fasi, le equazioni
   di autoconsistenza, la derivazione delle linee di transizione.

4. **Nishimori (2001)** — "Statistical Physics of Spin Glasses and Information Processing",
   Oxford University Press.
   Link editoriale: https://academic.oup.com/book/5185
   Lunghezza: libro, ~230 pagine. Leggere capitoli 2-4 (replicas, SK, Hopfield).
   Difficoltà: media — è scritto per graduate students.
   Cosa porta: il contesto completo con il metodo delle repliche applicato a Hopfield,
   più sistematico di Castellani-Cavagna per la parte Hopfield.

**Settimane 5-6: RSB e ultrametricità**

5. **Mézard, Parisi, Virasoro (1987)** — "Spin Glass Theory and Beyond", World Scientific.
   Link: https://books.google.com/books/about/Spin_Glass_Theory_and_Beyond.html?id=ZIF9QgAACAAJ
   Lunghezza: libro. Leggere i capitoli sull'ultrametricità e sulla full RSB (capitoli 5-8).
   Difficoltà: alta.
   Cosa porta: la struttura ultrametrica degli stati puri, la funzione q(x) di Parisi,
   la prova dell'ultrametricità. È LA fonte primaria.

**Settimane 7-8: ETH**

6. **D'Alessio, Kafri, Polkovnikov, Rigol (2016)** — "From Quantum Chaos and Eigenstate
   Thermalization to Statistical Mechanics and Thermodynamics", Adv. Phys. 65, 239.
   arXiv verificato: https://arxiv.org/abs/1509.06411
   Lunghezza: ~70 pagine. Difficoltà: media-alta.
   Cosa porta: la review standard ETH — l'ansatz completo di Srednicki, le diagnostiche,
   il confronto con RMT, le violazioni (integrabili, MBL).

7. **Rigol, Dunjko, Olshanii (2008)** — "Thermalization and its mechanism for generic
   isolated quantum systems", Nature 452, 854.
   arXiv verificato: https://arxiv.org/abs/0708.1324
   Lunghezza: 5 pagine Nature + supplemental. Difficoltà: media.
   Cosa porta: la verifica numerica fondativa di ETH su hard-core bosons. Da leggere
   per capire cosa ETH predice concretamente.

8. **Abanin, Altman, Bloch, Serbyn (2019)** — "Colloquium: Many-body localization,
   thermalization, and entanglement", Rev. Mod. Phys. 91, 021001.
   Fonte verificata (citato in letteratura MBL): non ho il link DOI diretto verificato,
   ma il riferimento è consolidato. Cercarlo su journals.aps.org.
   Lunghezza: Colloquium ~30 pagine. Difficoltà: media.
   Cosa porta: il quadro completo MBL — livello di lettura ideale per capire le violazioni.

**Settimane 9-10: il ponte**

9. **Baldwin, Laumann, Pal, Scardicchio (2017)** — "Clustering of nonergodic eigenstates
   in quantum spin glasses", PRL 118, 127201.
   DOI verificato: https://link.aps.org/doi/10.1103/PhysRevLett.118.127201
   arXiv: https://arxiv.org/abs/1611.02296
   Lunghezza: 5 pagine PRL. Difficoltà: alta per densità.
   Cosa porta: il risultato chiave che collega spin glass classico → ETH violation nel
   quantistico. Il punto di ingresso al ponte.

10. **Albanese, Alessandrelli, Barra, Annibale (2023)** — "About the de Almeida-Thouless
    line in neural networks", Physica A.
    DOI: 10.1016/j.physa.2023.129158. arXiv: https://arxiv.org/abs/2303.06375
    Lunghezza: ~25 pagine. Difficoltà: media-alta.
    Cosa porta: la linea AT nel modello di Hopfield con metodo rigoroso — il paper più
    recente e tecnico sul tema, direttamente connesso al gruppo Barra/Agliari/Ricci-Tersenghi.

11. **Albanese, Alemanno, Alessandrelli, Barra (2021)** — "Replica symmetry breaking in
    dense neural networks", arXiv:2111.12997.
    Link: https://arxiv.org/abs/2111.12997
    Lunghezza: ~30 pagine. Difficoltà: alta.
    Cosa porta: RSB nelle reti dense — fondamentale per capire come cambia la struttura
    RSB quando si passa da Hopfield classico a Hopfield denso.

**Extra (opzionale, se il ponte si aprisse verso magistrale):**

12. **Yin, Surace, Lucas (2025)** — "Theory of metastable states in many-body quantum
    systems", Phys. Rev. X 15, 011064.
    arXiv: https://arxiv.org/abs/2408.05261
    Cosa porta: il framework per stati metastabili quantistici come scar — il collegamento
    più vicino tra metastabilità classica (spin glass) e non-termalizzazione quantistica.

### 4.2 Domande aperte attaccabili con 4-6 mesi

**D1 — Numerica: ETH nella fase spin glass del Hopfield quantistico (CONSIGLIATA)**

Definire il modello: Hopfield con campo trasverso Γ su N spin,
    H = -(1/N) ∑_{μ=1}^p ∑_{i<j} ξ_i^μ ξ_j^μ σ_i^z σ_j^z - Γ ∑_i σ_i^x

Variare α = p/N e Γ. Calcolare:
- r-ratio della statistica degli autovalori
- entropia di entanglement degli autostati (bipartizione N/2)
- distribuzione degli elementi di matrice di σ_i^z

Domanda: il passaggio α < α_c → α > α_c (a Γ fisso) produce una transizione ETH → non-ETH?
Come dipende dal campo trasverso Γ? Si forma un eigenstate EA order parameter (clustering
come in Baldwin et al.)?

Cosa serve: Python + numpy/scipy o Julia, exact diagonalization fino a N=16-20 spin
(dimensione Hilbert space 2^20 ≈ 10^6, computazionalmente fattibile). Qualche settimana
per scrivere il codice, poi si analizzano i dati.

**Portata per triennale:** completamente fattibile. Non è rivoluzionario, ma è un risultato
originale verificabile. Se emerge una transizione ETH chiara al variare di α, è un
contributo pubblicabile.

**D2 — Analitica (difficile ma circoscritta): analisi 1RSB del Hopfield quantistico**

L'analisi RS del Hopfield con campo trasverso è in letteratura (Nishimori 1999, approx).
L'analisi 1RSB con campo trasverso non è stata fatta sistematicamente per p=2.
Per p≥3 (dense) ci si può agganciare ad Albanese et al. (2021) come framework.

Cosa serve: padronanza del metodo delle repliche a 1RSB (Castellani-Cavagna + MPV);
saper calcolare la free energy replicata per un sistema con campo trasverso.
Strumento: algebra analitica, Mathematica per le integrazioni gaussiane.

**Portata per triennale:** ambiziosa ma circoscritta. Richiede relatore esperto (Ricci-
Tersenghi o Agliari sono i nomi giusti) che guidi i calcoli. Non è numerica ma il
calcolo, una volta impostato, è meccanico.

**D3 — Numerica: parametro di Edwards-Anderson degli autostati nel Hopfield quantistico**

Definire l'analogo eigenstato del parametro EA:
    Q_{EA}^{eigen} = (1/N) ∑_i [⟨n|σ_i^z|n⟩]²   (media su un cluster di autostati)

Verificare se questo parametro distingue la fase di recupero dalla fase spin glass nel
Hopfield quantistico, e se mostra la struttura a cluster prevista da Baldwin et al. per p≥3.

Differenza rispetto a D1: focus sul clustering degli autostati, non solo sulla statistica
degli autovalori. Si usa anche la IPR (inverse participation ratio) degli autostati
nella base dei pattern classici.

Cosa serve: stessa infrastruttura numerica di D1, più sofisticazione nell'analisi degli autostati.

**Portata per triennale:** fattibile dopo D1 come estensione naturale.

**D4 — Concettuale: la linea AT nel Hopfield quantistico**

Il paper Albanese et al. (2023) calcola la linea AT nel Hopfield classico. La domanda
è: si può estendere il loro metodo al caso quantistico (con campo trasverso)?
La linea AT quantistica indicherebbe dove la soluzione RS del Hopfield quantistico
diventa instabile, definendo la regione che richiede RSB quantistico.

Cosa serve: lettura profonda di Albanese et al. (2023) + Nishimori (1999); capacità
di generalizzare la condizione AT al caso quantistico con Trotter decomposition o
path integral. Analitico puro.

**Portata per triennale:** stimante, richiede fortemente un relatore. Come progetto
di tesi con Ricci-Tersenghi potrebbe essere molto naturale.

**D5 — Revisione critica: il p-spin Baldwin et al. vs il p=2 Hopfield**

Baldwin et al. lavorano su p≥3 (1RSB nel classico). La domanda: il risultato di
clustering degli autostati vale anche per p=2 (full RSB)? La differenza 1RSB vs full RSB
si traduce in una struttura più ricca degli autostati (gerarchia ultrametrica degli
cluster, non semplice clustering a due livelli)?

Questo è più concettuale: richiederebbe simulazioni a p=2 e confronto con p=3,4.

**Portata per triennale:** più esplorativa. Adatta se D1 produce risultati sorprendenti.

### 4.3 Cosa studiare prima: replica method, tempo, testi

**Prerequisiti di Giuseppe (dichiarati):** meccanica statistica, teoria degli autostati,
teoria spettrale. Manca: il metodo delle repliche.

**Piano realistico (8-10 settimane, 2-3h/giorno):**

Settimane 1-2: Castellani-Cavagna (tutto). Fare gli esercizi a mano.
Focus: capire perché si introduce la replica trick (n copie del sistema, poi n→0),
cosa significa RS, cosa calcola q.

Settimane 3-4: AGS 1985a (PRL) + AGS 1987 (Ann. Phys. capitoli 1-3 e 6-7).
Focus: derivare le equazioni di autoconsistenza per il Hopfield, tracciare il diagramma
di fase a mano.

Settimane 5-6: MPV 1987 (capitoli 5-8 sull'ultrametricità).
Focus: capire la struttura dell'albero di Parisi, cosa significa q(x) come funzione
continua, perché implica ultrametricità.

Settimane 7-8: D'Alessio et al. (2016) review ETH.
Focus: l'ansatz di Srednicki a memoria, i diagnostici numerici, il confronto con RMT.

Settimane 9-10: Baldwin et al. (2017) + Rademaker-Abanin (2020).
Focus: ricostruire il diagramma di fase del p-spin quantistico, capire il clustering.

Con questo studio si ha tutto il necessario per attaccare D1 numericamente e discutere
con un relatore a Sapienza.

---

## Note sulle fonti

**Verificate (DOI o arXiv confermati):**
- AGS 1985a: https://link.aps.org/doi/10.1103/PhysRevLett.55.1530
- AGS 1987: https://www.sciencedirect.com/science/article/abs/pii/0003491687900923
- Baldwin et al. (2017): https://link.aps.org/doi/10.1103/PhysRevLett.118.127201 — arXiv:1611.02296
- Albanese et al. (2023) AT line: https://arxiv.org/abs/2303.06375
- Albanese et al. (2021) RSB dense: https://arxiv.org/abs/2111.12997
- Castellani-Cavagna (2005): https://iopscience.iop.org/article/10.1088/1742-5468/2005/05/P05012
- D'Alessio et al. (2016): https://arxiv.org/abs/1509.06411
- Rigol-Dunjko-Olshanii (2008): https://arxiv.org/abs/0708.1324 — Nature 452, 854
- Rademaker-Abanin (2020): https://arxiv.org/abs/1910.04421 — PRL 125, 260405
- Yin-Surace-Lucas (2025): https://arxiv.org/abs/2408.05261 — PRX 15, 011064
- Nishimori (2001): https://academic.oup.com/book/5185
- Ramsauer et al. (2021): https://arxiv.org/abs/2008.02217
- Quantum Hopfield dilute (2024): https://arxiv.org/abs/2405.13240
- Quantum Hopfield optical (2025): https://arxiv.org/abs/2509.12202
- Krotov-Hopfield (2016): https://pdfs.semanticscholar.org/ed33/2c92664cd64843a7ba9373d992e9547230f6.pdf

**Non verificati (fonte secondaria o indiretta):**
- Crisanti, Amit, Gutfreund (1986) — analisi 1RSB Hopfield: citato ma DOI non verificato
- Tokita — RSB a T=0: pagina Semantic Scholar, DOI non verificato direttamente
- Berthier et al. — aging out-of-equilibrium Hopfield: trovato arXiv ma autori e anno
  non confermati con certezza
- Abanin-Altman-Bloch-Serbyn Rev. Mod. Phys. 91, 021001 (2019): riferimento consolidato
  ma link DOI non verificato direttamente in questa sessione
- Usadel (1995) e Nishimori-Nonomura (1996) sul Hopfield quantistico con campo trasverso:
  citati in letteratura secondaria, non verificati direttamente
- Titolo esatto Baldwin et al. su Hopfield p=2 (se esiste estensione al p=2): non trovato;
  il paper verificato è sul p-spin generico, non specificamente p=2

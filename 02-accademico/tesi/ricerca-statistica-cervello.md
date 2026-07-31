---
type: ricerca
data: 2026-07-21
autore: Argonauta Accademico
corso: tesi
---

# Vetri di spin, ultrametricità, cervello — carta del terreno

## Verdetto (5 righe)

Il filo esiste, è solido e ben documentato: passa per tre lavori cardine (Parisi 1979-83,
Mézard-Parisi-Virasoro 1984-87, Amit-Gutfreund-Sompolinsky 1985-87) e oggi è ancora vivo
in almeno due tradizioni separate. Le due direzioni più promettenti per Giuseppe sono:
(A) l'analisi teorica del modello di Hopfield esteso con strumenti RSB, e
(B) i modelli di massima entropia su dati neurali reali (Ising applicato al cervello).
La più realistica per una triennale è (A): usa meccanica statistica che conosce,
ha un gruppo attivo a Sapienza come possibile relatore, e ha una dimensione controllabile.
Il collegamento con ETH è affascinante ma NON ha ancora un ponte diretto consolidato
con la tradizione Hopfield/ultrametricità: è un'ambizione da magistrale, non da triennale.

---

## 1. Il filo storico

**1975 — Edwards-Anderson (EA) e Sherrington-Kirkpatrick (SK).**
Edwards e Anderson (1975, J. Phys. F 5, 965) introducono il primo modello di vetro di spin
con accoppiamenti random short-range. Sherrington e Kirkpatrick (1975, Phys. Rev. Lett. 35, 1792)
ne propongono la versione mean-field completamente connessa, esattamente risolvibile.

**1979-1983 — Parisi e la rottura della simmetria delle repliche (RSB).**
Giorgio Parisi dimostra che la soluzione replica-simmetrica è instabile e introduce la
rottura continua della simmetria delle repliche: il parametro d'ordine diventa una
funzione q(x) su [0,1]. Lavori: Parisi (1979, Phys. Rev. Lett. 43, 1754);
Parisi (1980, J. Phys. A 13, 1101 e 1887); Parisi (1983, Phys. Rev. Lett. 50, 1946).
Il risultato: la fase spin glass non è uno stato ma una gerarchia infinita di stati
puri organizzati in modo ultrametrico.

**1984-1985 — L'ultrametricità come struttura ad albero degli stati.**
Mézard, Parisi, Sourlas, Toulouse, Virasoro (1984, Phys. Rev. Lett. 52, 1156;
J. Phys. 45, 843) mostrano esplicitamente che i puri stati del modello SK soddisfano
la disuguaglianza ultrametrica: dati tre stati A, B, C, la loro distanza soddisfa
d(A,C) <= max{d(A,B), d(B,C)}. Gli stati si organizzano come foglie di un albero
(l'albero di Parisi). Mézard e Virasoro (1985, J. Phys. 46, 1293) ne studiano la
microstruttura. Il libro di sintesi: Mézard, Parisi, Virasoro,
"Spin Glass Theory and Beyond", World Scientific, 1987.

**1982 — Hopfield.**
J.J. Hopfield (1982, PNAS 79, 2554) propone un modello di memoria associativa come
minimizzazione di un'energia in un sistema di spin Ising completamente connesso con
pesi sinaptici hebbiani. L'attrattore della dinamica corrisponde al ricordo recuperato.
Formalmente è un sistema di spin, ma l'analogia con i vetri di spin non era ancora
esplicitata.

**1985-1987 — Amit, Gutfreund, Sompolinsky (AGS): il ponte.**
Amit, Gutfreund, Sompolinsky (1985a, Phys. Rev. Lett. 55, 1530) dimostrano che il
modello di Hopfield con p pattern è formalmente un vetro di spin SK con campi random.
(1985b, Phys. Rev. A 32, 1007) analizzano le fasi del sistema: fase di recupero
(alpha < alpha_c), fase spin glass, fase paramagnética, con alpha = p/N rapporto
di carica. (1987, Ann. Phys. 173, 30): analisi completa. Risultato chiave: alpha_c ≈ 0.14.
Questi tre lavori sono il ponte canonico tra la tradizione dei vetri di spin e la
memoria associativa neurale.

**1987-oggi — cosa ne è.**
Il modello di Hopfield con RSB (fase spin glass come rumore di fondo) è stato ripreso
da Amit nel libro "Modeling Brain Function" (Cambridge, 1989).
Da allora due correnti separate:
- Tradizione teorica/matematica: analisi rigorosa del modello e sue estensioni
  (Talagrand, Guerra, Toninelli; Agliari-Barra-Ricci-Tersenghi group).
- Tradizione empirica: uso di modelli di Ising/massima entropia su dati neurali reali
  (Schneidman, Berry, Segev, Bialek 2006; Tkacik et al. 2013-2015).

---

## 2. Lo stato attuale — 7 direzioni vive

### D1. Modelli di Hopfield densi e capacità superlineare/esponenziale
**Di cosa si occupa.** Krotov e Hopfield (2016, Adv. Neural Inf. Proc. 28) modificano
la funzione di energia con termini polinomiali di ordine n, portando la capacità a
O(N^{n-1}). Demircigil et al. (2017) usano energia esponenziale: capacità 2^{N/2}.
Ramsauer et al. (2021, ICLR) estendono al caso continuo e mostrano che la regola di
aggiornamento è matematicamente equivalente all'attention dei Transformer:
"Hopfield Networks is All You Need", arXiv:2008.02217.
**Quanto è vicino.** Matematicamente accessibile con meccanica statistica standard;
la fisica degli spin resta sullo sfondo, il focus è combinatoriale/approssimativo.
Non richiede RSB. Distanza: media — capisce il framework, manca la connessione
profonda con i vetri.

### D2. Analisi rigorosa del modello di Hopfield e RSB nelle reti neurali
**Di cosa si occupa.** Dimostrazione rigorosa dell'esistenza della fase di recupero,
del limite termodinamico, della struttura RSB nei modelli bipartiti (equivalenti a
Restricted Boltzmann Machines). Recenti: Agliari, Barra, Ricci-Tersenghi,
"Generalized hetero-associative neural networks", J. Stat. Mech. 2025
(IOPscience, doi: 10.1088/1742-5468/ada918);
Ricci-Tersenghi et al., "Daydreaming Hopfield networks and their surprising
effectiveness on correlated data", 2025 (non verificato titolo esatto: fonte
pagina PhD Sapienza, da verificare su arXiv);
Agliari et al., "The thermodynamic limit in mean field neural networks",
arXiv:2409.10145 (settembre 2024).
**Quanto è vicino.** Molto: usa meccanica statistica, repliche, limiti
termodinamici — esattamente il linguaggio AGS che Giuseppe può acquisire.
Il gruppo Agliari-Ricci-Tersenghi è a Sapienza.

### D3. Modelli di Ising e massima entropia su dati neurali reali
**Di cosa si occupa.** Inferire il modello di Ising (accoppiamenti J_{ij} e campi h_i)
da registrazioni di attività neurale reale (spike trains) usando il principio di massima
entropia vincolato alle correlazioni a coppie. Poi leggere le proprietà termodinamiche
(criticità, capacità di calore, ecc.). Lavori fondativi: Schneidman et al. (2006,
Nature 440, 1007). Recenti verificabili:
"Maximum entropy models of neuronal populations at and off criticality",
arXiv:2511.14872 (2025);
"Exactly solvable statistical physics models for large neuronal populations",
Phys. Rev. Research 7, L022039 (maggio 2025, doi: 10.1103/PhysRevResearch.7.L022039).
**Quanto è vicino.** La fisica è accessibile; la parte difficile è l'accesso ai dati
neurali e la dimensionalità del problema di inversione. Richiede contatti con
neuroscienziati sperimentali. Distanza: media-alta per una triennale.

### D4. Criticità e transizioni di fase nell'attività neurale
**Di cosa si occupa.** L'ipotesi che il cervello operi vicino a un punto critico
(Beggs & Plenz 2003) porta a cercare valanghe neurali, divergenza delle correlazioni,
scaling. Si collegano POT (power-law) e criticalità ai modelli di Ising con parametri
inferiti. Recente: "Maximum entropy models of neuronal populations at and off
criticality" (arXiv:2511.14872, 2025) — stessa fonte di D3, molto sovrapposto.
**Quanto è vicino.** Concettualmente vicino alla meccanica statistica delle transizioni
di fase, ma empiricamente richiede dati e strumenti di analisi delle serie temporali
neurali. Distanza: media per la teoria, alta per l'implementazione sperimentale.

### D5. Dinamiche stocastiche su strutture ultrametriche/ad albero
**Di cosa si occupa.** Studiare diffusioni e processi di Markov la cui struttura degli
stati è ultrametrica. Gli "Ultrametric Laplacians" diventano operatori con proprietà
spettrali che codificano la gerarchia dell'albero. Recente:
"Dynamic centrality of headwater sources in river networks: a stochastic approach
via ultrametric Laplacians", arXiv:2605.16328 (2026 — applicazione a reti fluviali,
stesso framework matematico). "Spectral Geometry and Heat Kernels on Phylogenetic Trees",
arXiv:2603.20922 (2026).
**Quanto è vicino.** Molto vicino alla matematica (spazi metrici, teoria spettrale,
ergodicità) — Giuseppe ha gli strumenti. Ma lontano dal cervello: la connessione
con la neuroscienze è indiretta. Il filo da Parisi → alberi ultrametrici → dinamica
neurale non esiste come campo autonomo e compatto: è un'inferenza, non un programma.

### D6. Paesaggi energetici, metastabilità e aging
**Di cosa si occupa.** Lo spin glass invecchia: risponde a perturbazioni con tempi
di scala che dipendono dall'età del campione. La struttura gerarchica degli stati
(l'albero) produce scale temporali esponenzialmente separate. Teoria:
Bouchaud et al. (1992, 1995). Simulazioni JANUS (Marinari, Ricci-Tersenghi, Martin-Mayor).
Recente: "Spin-glass dynamics: experiment, theory and simulation",
arXiv:2412.08381 (2024) — rassegna comprensiva con Marinari e Ricci-Tersenghi.
**Quanto è vicino.** Teoricamente accessibile; ma lontano dal cervello. È il cuore
della ricerca di Marinari, ma non è il ponte diretto con le neuroscienze.

### D7. ETH e sistemi disordinati quantistici / decoerenza
**Di cosa si occupa.** ETH spiega la termalizzazione nei sistemi quantistici isolati;
la sua violazione (MBL, many-body localization) corrisponde alla localizzazione degli
autostati per disordine. Il parallelo con i vetri di spin è questo: entrambi descrivono
sistemi con molti stati metastabili, ma ETH è quantistico e usa il formalismo degli
autostati dell'Hamiltoniano, mentre RSB è classico (o quantistico mean-field). Non
esiste un ponte diretto e sistematico tra ETH e la tradizione Hopfield/ultrametricità.
I lavori che cercano la connessione ETH-vetri di spin restano sul lato quantistico
(spin chain disordered, MBL vs ETH) senza toccare la memoria associativa.
Recente: "Eigenstate thermalization", arXiv:2604.11872 (2026 — survey).
**Quanto è vicino.** ETH è la direzione dichiarata di Giuseppe per la tesi → ma il
collegamento con la tradizione Hopfield/ultrametricità è un'APERTURA da costruire,
non un campo esistente. Non si può fare questa connessione in una triennale partendo
da zero: è materiale da magistrale con un relatore specifico.

---

## 3. Sapienza — chi lavora su questi temi

### Enzo Marinari (Dipartimento di Fisica, Sapienza)
Professore ordinario. ~320 pubblicazioni, h-index 60 (Google Scholar, fonte:
pagina PhD Sapienza, febbraio 2024). Focus: fisica statistica dei sistemi disordinati,
dinamica dei vetri di spin, aging, sistemi biologicamente rilevanti, apprendimento e
memoria. Il profilo recente esplicita: "statistical physics of disordered systems,
with special focus on biologically relevant systems and on learning and memory."
Pubblicazioni recenti verificate:
- "Multifractality in spin glasses" (2024, Journal of Statistical Mechanics,
  co-autori Parisi, Ricci-Tersenghi, Martin-Mayor)
- "Diffusion reconstruction for the diluted Ising model", Phys. Rev. E (2025),
  con Bae e Ricci-Tersenghi
- "Spin-glass dynamics: experiment, theory and simulation", arXiv:2412.08381 (2024)
La pagina personale è su chimera.roma1.infn.it — non verificata direttamente
(PDF bio non leggibile in formato testo).

### Federico Ricci-Tersenghi (Dipartimento di Fisica, Sapienza)
Professore ordinario, editor di Physical Review X. Il ricercatore più
attivo a Sapienza sul confine spin glass — reti neurali. Pubblicazioni recenti verificate
(fonte: pagina PhD Sapienza):
- "Generalized hetero-associative neural networks", J. Stat. Mech. 2025
  (con Agliari, Alessandrelli, Barra, Centonze; doi: 10.1088/1742-5468/ada918)
- "Daydreaming Hopfield networks and their surprising effectiveness on correlated data"
  (2025 — titolo non verificato su DOI, fonte: pagina PhD Sapienza)
- "Networks of Hebbian networks. More is different" (2026 — fonte: pagina PhD)
- "Diffusion reconstruction for the diluted Ising model", Phys. Rev. E 2025
- "Spin-glass dynamics: experiment, theory and simulation", arXiv:2412.08381 (2024)
E' il nome più direttamente rilevante per Giuseppe: lavora su Hopfield con RSB,
reti di Hopfield generalizzate, campionamento con reti neurali.

### Elena Agliari (Dipartimento di Matematica "G. Castelnuovo", Sapienza)
Professoressa associata dal 2022. Focus: meccanica statistica dei sistemi disordinati,
reti neurali mean-field, modelli di Hopfield, Restricted Boltzmann Machines, apprendimento.
Pubblicazioni recenti verificate:
- "The thermodynamic limit in mean field neural networks", arXiv:2409.10145 (2024)
- "Regularization, early-stopping and dreaming: A Hopfield-like setup", Neural Networks
  177 (2024)
- "Generalized hetero-associative neural networks" (2025, con Ricci-Tersenghi)
- "The Importance of Being Empty: A Spectral Approach to Hopfield Neural Networks
  with Diluted Examples" (2025)
Collabora strettamente con Adriano Barra (Chimera group) e con Ricci-Tersenghi.
E' un secondo nome concreto per un relatore o correlatore a Sapienza.

### Giorgio Parisi (Dipartimento di Fisica, Sapienza)
Premio Nobel 2021. Ancora attivo come co-autore su spin glass e sistemi complessi.
Non è realisticamente avvicinabile come relatore di triennale, ma la sua scuola
(Marinari, Ricci-Tersenghi) è il contesto diretto.

### Connessione fisica-neuroscienze sperimentali a Sapienza
Il Dipartimento di Neuroscienze Umane (neuma.web.uniroma1.it) esiste ma lavora su
neurologia clinica, psichiatria, neurobiologia sperimentale — lontano dagli strumenti
della meccanica statistica. Un recente risultato (non verificato con DOI, fonte:
ricerca italiana: Physical Review Letters, fotoni in circuiti ottici come Hopfield,
CNR-IIT-Sapienza) suggerisce che c'è interazione ma non un gruppo strutturato sul
confine fisica teorica — neuroscienze reali a Sapienza.
Verdetto: per il profilo di Giuseppe il punto di ingresso è Ricci-Tersenghi o Agliari,
non un gruppo interdisciplinare fisica-neuroscienze.

---

## 4. Il verdetto operativo per Giuseppe

### Cosa è fattibile in una triennale

**Opzione A (consigliata): Modello di Hopfield + RSB — analisi teorica con un twist.**
Rifare rigorosamente l'analisi AGS (1985-87) con il metodo delle repliche, poi estendere
su un punto preciso: ad esempio la capacità in presenza di pattern correlati (non i.i.d.),
oppure il confronto con i modelli densi (Krotov-Hopfield 2016) sul paesaggio energetico.
Cosa richiede: metodo delle repliche a livello di replica-simmetria + RSB a 1 step
(RS-1RSB), meccanica statistica mean-field, analisi delle fasi. Tempi: 4-6 mesi con
un buon relatore che indica la letteratura di partenza. Strumenti: Giuseppe ha il 70%
di quello che serve (Hilbert, teoria spettrale, meccanica statistica). Manca: la
tecnica specifica delle repliche (qualche settimana di studio mirato).
Relatore ideale: Ricci-Tersenghi o Agliari (Sapienza, attivi esattamente su questo).
Rischio: la letteratura è densa e richiede maturità tecnica. Ma è l'opzione con il
miglior rapporto ambizione/portata.

**Opzione B (alternativa, più empirica): Massima entropia e criticità su dati neurali.**
Implementare il fitting di un modello di Ising a dati neurali pubblici (ci sono dataset
open, es. Allen Brain Atlas, o dataset del paper Schneidman 2006) e studiare le proprietà
termodinamiche del modello inferito. Cosa richiede: teoria dell'informazione, metodo di
massima entropia, problemi di inversione (simili al problema inverso di Ising),
programmazione numerica. Tempi: 4-5 mesi. Strumenti: Giuseppe ha la base teorica;
manca la parte computazionale e l'accesso a dati. Rischio: deriva verso il data
analysis senza profondità fisica; da gestire con un relatore che mantiene la
prospettiva teorica.

### Cosa NON è fattibile in una triennale

- Dinamiche stocastiche su alberi ultrametrici come campo autonomo: richiede matematica
  probabilistica avanzata (processi di Markov su spazi ultrametrici, teoria dei coalberi)
  che non è nei prerequisiti di II anno. Distanza: 2 anni almeno.
- ETH + Hopfield/cervello: il ponte non esiste ancora come campo consolidato. Costruirlo
  richiederebbe sia la padronanza di ETH (formalismo degli autostati in sistemi quantistici
  estesi) sia quella RSB (sistemi disordinati classici) — e la capacità di vedere dove si
  toccano. E' un'idea forte per la magistrale, non per la triennale.
- Criticità neurale su dati reali con raccolta dati propria: fuori portata senza
  collaborazione sperimentale strutturata.

### Il ponte ultrametricità → cervello: regge?
Parzialmente. Il filo Parisi → AGS è solido e diretto: la soluzione RSB fornisce la
struttura degli stati dello spin glass che è FORMALMENTE lo stesso sistema del modello
di Hopfield carico. In questo senso l'ultrametricità è davvero nel cuore dei modelli
di memoria associativa. Ma l'implicazione inversa — che l'albero ultrametrico di Parisi
descriva la struttura della memoria biologica nel cervello reale — è un'ipotesi teorica,
non un fatto verificato sperimentalmente. La critica giusta è: il modello di Hopfield
cattura QUALCOSA del cervello (recupero pattern, capacità, robustezza al rumore), ma
il cervello non è un vetro di spin e l'ultrametricità degli stati di Hopfield non ha
un analogo neurale diretto misurabile. Il filo è vivo; la connessione biologica è
speculativa e onesta come tale.

---

## Note sulle fonti

Fonti primarie verificate con DOI o link:
- Amit, Gutfreund, Sompolinsky (1985a): https://link.aps.org/doi/10.1103/PhysRevLett.55.1530
- Amit, Gutfreund, Sompolinsky (1985b): Semantic Scholar https://www.semanticscholar.org/paper/Spin-glass-models-of-neural-networks.-Amit-Gutfreund/bd10cbddb8407ac2eaccf9ec4cf2de2524813552
- Amit, Gutfreund, Sompolinsky (1987): https://www.sciencedirect.com/science/article/abs/pii/0003491687900923
- Agliari et al. (2025) "Generalized hetero-associative": https://iopscience.iop.org/article/10.1088/1742-5468/ada918
- Agliari et al. (2024) thermodynamic limit: https://arxiv.org/abs/2409.10145
- Phys. Rev. Research 7, L022039 (2025): https://link.aps.org/doi/10.1103/PhysRevResearch.7.L022039
- arXiv:2511.14872 (max entropy neuronal 2025): https://arxiv.org/abs/2511.14872
- arXiv:2412.08381 (spin glass dynamics 2024): https://arxiv.org/abs/2412.08381
- Ramsauer et al. (2021): https://arxiv.org/abs/2008.02217
- Mézard, Parisi, Virasoro libro: https://books.google.com/books/about/Spin_Glass_Theory_and_Beyond.html?id=ZIF9QgAACAAJ
- "Spin Glass Theory and Far Beyond" (2023, review): https://www.worldscientific.com/worldscibooks/10.1142/13341
- Marinari pagina PhD Sapienza: https://phd.uniroma1.it/web/VINCENZO-MARINARI_nC45_EN.aspx
- Ricci-Tersenghi pagina PhD Sapienza: https://phd.uniroma1.it/web/FEDERICO-RICCI-TERSENGHI_nC148_EN.aspx
- Agliari ResearchGate: https://www.researchgate.net/profile/Elena-Agliari

Non verificati (fonte secondaria, da controllare su arXiv/DOI):
- Titoli esatti delle pubblicazioni 2025-2026 di Ricci-Tersenghi ("Daydreaming Hopfield",
  "Networks of Hebbian networks") — estratti dalla pagina PhD Sapienza, non verificati su DOI.
- Risultato fotoni-Hopfield a Sapienza in PRL — non trovato DOI preciso.

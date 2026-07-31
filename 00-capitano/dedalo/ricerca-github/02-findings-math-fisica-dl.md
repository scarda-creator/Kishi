---
type: ricerca
---

# Findings: Math & Fisica Research + Deep Learning
Argonauta Accademico — 2026-07-11

Seme: `00-starred-repos.md` (repos stellate da Giuseppe).
Metodo: WebSearch + WebFetch su GitHub, arxiv, documentazione ufficiale.
Aree coperte: (1) AI per la ricerca in fisica/matematica; (2) Deep learning per un fisico teorico.

---

## Shortlist per Dedalo — 8 candidati più forti

| # | Repo | Valore per Giuseppe | Sforzo di integrazione |
|---|------|--------------------|-----------------------|
| 1 | QuSpin | Diretto per ETH, MBL, termalizzazione — strumento di tesi | Basso (pip, Python puro) |
| 2 | NetKet | Neural quantum states + VMC, JAX — tesi su sistemi complessi | Medio (JAX ecosystem) |
| 3 | dynamiqs | Decoerenza + Lindblad, GPU, JAX — tesi su sistemi aperti | Medio |
| 4 | get-physics-done | Agente fisico che integra con Claude Code — navicella | Basso (già su Claude Code) |
| 5 | d2l-ai/d2l-en | Miglior libro interattivo DL con math, multi-framework | Basso (studio autonomo) |
| 6 | Diffrax + Equinox | Stack JAX per neural ODE e reti neurali scientifiche | Medio |
| 7 | PySR | Scoperta simbolica di leggi fisiche da dati, esporta in SymPy | Basso |
| 8 | paper-qa | RAG ad alta precisione su PDF scientifici, potenziale MCP | Medio |

---

## Area 1 — Math & Physics Research

### Strumenti computazionali per la ricerca (tesi e studio avanzato)

---

**QuSpin**
https://github.com/QuSpin/QuSpin
332 stelle — Python — ultima release v1.0.1 (aprile 2026)

Pacchetto Python per esatta diagonalizzazione (ED) e dinamica quantistica di sistemi
many-body arbitrari: spin, bosoni, fermioni. Supporta simmetrie di reticolo,
evoluzione temporale con driving arbitrario, spazi di Hilbert vincolati, algebra
lineare sparsa parallelizzata.

La documentazione cita esplicitamente come casi d'uso: ETH (Eigenstate
Thermalization Hypothesis), many-body localization (MBL), sistemi di Floquet,
quenches quantistici. Non è una coincidenza: è il codice usato in decine di
paper sull'argomento.

**Come serve a Giuseppe:** strumento diretto per la traiettoria di tesi. Vuole
capire ETH e decoerenza — QuSpin è il kit con cui si fanno quei calcoli
numericamente. Valore altissimo, sforzo basso (pip install, Python 3).
Candidato tesi-readiness immediata.

---

**NetKet**
https://github.com/netket/netket
690 stelle — JAX — ultima release v3.22.3 (giugno 2026)

Toolkit open-source per lo studio di sistemi many-body quantistici con reti
neurali artificiali. Implementa neural quantum states (NQS) e variational Monte
Carlo (VMC). Sviluppato dal Neural Quantum Group (Ecole Polytechnique / Collège de
France), attivamente mantenuto.

**Come serve a Giuseppe:** il collegamento diretto tra DL e meccanica quantistica
dei sistemi complessi — esattamente il vettore della sua tesi. NetKet è usato
in paper recenti su termalizzazione, gap spettrale, sistemi disordinati. Su JAX
quindi porta con sé GPU + autodiff. Candidato core per tesi magistrale.

---

**dynamiqs**
https://github.com/dynamiqs/dynamiqs
305 stelle — JAX + Diffrax — ultima release v0.3.6 (giugno 2026)

Libreria per simulazione GPU-accelerata e differenziabile di sistemi quantistici
aperti. Risolve equazione di Schrödinger, master equation di Lindblad (con
operatori di salto per i canali dissipativi), equazione stocastica master.
Supporta batching su Hamiltoniani/stati iniziali, calcolo di gradienti rispetto
a parametri arbitrari, controllo quantistico ottimale. API simile a QuTiP.

**Come serve a Giuseppe:** decoerenza = sistemi quantistici aperti = Lindblad.
dynamiqs è esattamente quel simulatore. Differenziabile via JAX, quindi si può
usare per ottimizzazione e DL applicato. Candidato tesi (decoerenza) e futuro
incrocio DL-fisica.

---

**PySR**
https://github.com/MilesCranmer/PySR
3.6k stelle — Python/Julia — ultima release v1.5.10 (marzo 2026)

Regressione simbolica ad alte prestazioni: trova espressioni analitiche
interpretabili da dati. Motore in Julia (SymbolicRegression.jl), API Python.
Esporta in SymPy, JAX, PyTorch. Usato in fisica: "symbolic distillation" di reti
neurali per problemi N-body, scoperta di leggi da simulazioni.

**Come serve a Giuseppe:** trasversale studio+ricerca. A breve termine: capire
come DL e interpretabilità si toccano. A lungo termine: tool per la tesi se
lavora su sistemi dove vuole estrarre leggi analitiche da simulazioni numeriche.
Sforzo basso, valore alto sul piano della comprensione della frontiera.

---

**PhySO** (Physical Symbolic Optimization)
https://github.com/WassimTenachi/PhySO
2k stelle — Python — attivo 2025

Regressione simbolica specializzata per leggi fisiche: integra analisi
dimensionale come vincolo diretto sulla ricerca, riducendo lo spazio di ipotesi.
Trova equazioni come l'oscillatore armonico smorzato da dati sperimentali.
State-of-the-art sul benchmark Feynman con rumore.

**Come serve a Giuseppe:** più fisicamente "cosciente" di PySR (unità di misura
come prior), quindi più adatto a un fisico che non vuole deduzioni
dimensionalmente inconsistenti. Complementare a PySR. Strumento di studio e
possibile tool per tesi computazionale.

---

**get-physics-done (PSI)**
https://github.com/psi-oss/get-physics-done
863 stelle — Python — v1.2.2 (maggio 2026) — STARRED da Giuseppe

Primo agente AI agentico open-source per la ricerca in fisica. Installa comandi
di ricerca (formulazione, pianificazione, esecuzione, verifica, scrittura
manoscritto) dentro Claude Code, Gemini CLI, Codex, Copilot CLI. Supporta 18
campi della fisica con notation locking. Già citato in paper pubblicati.

**Come serve a Giuseppe:** integrazione diretta con la navicella — già usa Claude
Code. GPD aggiunge un layer specializzato per workflow di ricerca fisica (derivare,
verificare dimensioni, gestire ipotesi parallele). Candidato integrabile in
navicella con sforzo basso. Dedalo dovrebbe valutare se esiste collisione o
complementarietà con i workflow accademici già costruiti.

---

**paper-qa (FutureHouse)**
https://github.com/future-house/paper-qa
8.8k stelle — Python — Apache 2.0

Sistema RAG ad alta precisione per rispondere a domande da PDF/testi scientifici
con citazioni in-text. Workflow agentico: ricerca iterativa, reranking LLM,
summarizzazione contestuale. Supporta multimodal (tabelle, immagini), MetaData
arricchiti (conteggio citazioni, check retrazioni). Richiede API key LLM +
opzionalmente Crossref/Semantic Scholar.

**Come serve a Giuseppe:** leggere paper in modo agentico — interrogare una
cartella di PDF di stat mech/quantum con domande precise. Potenziale componente
MCP della navicella per l'Argonauta: invece di leggere PDF a mano, delegare
a paper-qa. Valore alto per traiettoria tesi (lettura sistematica di letteratura).

---

**AI-Scientist-v2 (Sakana AI)**
https://github.com/SakanaAI/AI-Scientist-v2
6.8k stelle — Python

Sistema autonomo che genera ipotesi, esegue esperimenti, analizza dati e scrive
manoscritti senza intervento umano. Usa tree search agentica. Focus attuale su ML.
Richiede sandbox per sicurezza (esegue codice generato da LLM).

**Come serve a Giuseppe:** strumento da monitorare più che da usare ora. Rilevante
per capire dove va la ricerca automatizzata. Non applicabile direttamente a fisica
teorica senza adattamento significativo. Segnalo come awareness strategica per
la traiettoria futura (magistrale, tesi).

---

**Awesome-AI-for-Physics**
https://github.com/AI4Phys/Awesome-AI-for-Physics
65 stelle — lista curata, companion di paper survey

Companion del paper "Aligning Perception, Reasoning, Modeling and Interaction:
A Survey on Physical AI". Organizzato per sezioni: percezione fisica, ragionamento,
modellazione, interazione. Non è una libreria: è una mappa della letteratura.

**Come serve a Giuseppe:** orientamento iniziale sulla letteratura AI+fisica.
Utile per l'Argonauta come banca-dati survey, non come strumento operativo.

---

**awesome-ai-for-science**
https://github.com/ai4s-research/awesome-ai-for-science
1.8k stelle — lista curata — STARRED da Giuseppe

Lista curata di tool, librerie, paper, dataset per la scoperta scientifica.
Sezioni: AI research tools, PINNs, neural operators, symbolic regression, research
agents, foundation models per la scienza, computing frameworks.

**Come serve a Giuseppe:** hub di riferimento già stellato. Utile come directory
permanente per aggiornarsi. Non sostituisce nessun tool operativo ma è il posto
dove trovarne di nuovi. Già acquisito.

---

**jax-md**
https://github.com/jax-md/jax-md
1.4k stelle — JAX — v0.2.29 (giugno 2026)

Framework per molecular dynamics differenziabile e hardware-accelerato in JAX.
Spazi/boundary conditions, potenziali classici + neural network potentials,
NVE/NVT/NPT, partizioni spaziali per scalare a centinaia di migliaia di particelle.
End-to-end differenziabile: si possono differenziare intere traiettorie.

**Come serve a Giuseppe:** rilevante a lungo termine se la tesi tocca simulazioni
di sistemi disordinati o interagenti in spazio reale. Per ora è awareness:
mostra cosa si fa con JAX in fisica statistica computazionale.

---

**QuSpin documentazione ETH** (conferma esplicita dalla doc ufficiale):
https://quspin.github.io/QuSpin/
Cita testualmente: "well-suited to study...the Eigenstate Thermalisation
hypothesis, many-body localisation and other dynamical phase transitions."

---

## Area 2 — Deep Learning

### Percorso di studio (da zero a fisico che usa DL)

---

**d2l-ai/d2l-en** (Dive into Deep Learning)
https://github.com/d2l-ai/d2l-en
29.1k stelle — Jupyter Notebook — PyTorch / JAX / TF / Keras

Libro interattivo adottato a Stanford, MIT, Harvard, Cambridge. Multi-framework.
Integra math, codice, discussioni in notebook Jupyter. Capitolo dedicato
"appendix-mathematics-for-deep-learning". Copre da fondamentali a Gaussian
processes, RL, transformer, ML moderno.

**Come serve a Giuseppe:** miglior risorsa per imparare DL seriamente con
profondità matematica. Adatto a un fisico: non evita le derivazioni. Supporta JAX
(che è il framework naturale per la stack scientifica che Giuseppe sta costruendo).
Strumento di studio primario per DL.

---

**Diffrax**
https://github.com/patrick-kidger/diffrax
2.1k stelle — JAX — autodiff + GPU

Libreria JAX per ODE, SDE, CDE numeriche. Autodifferenziabile: si può fare
backprop attraverso la soluzione. Supporta Tsit5, Dopri8, symplectic, impliciti.
~100x più veloce di PyTorch equivalente. Usato in NetKet e dynamiqs come motore.

**Come serve a Giuseppe:** building block fondamentale dello stack JAX scientifico.
Se usa NetKet o dynamiqs, incontra Diffrax. Se studia neural ODE (che è un tema
importante nell'incrocio DL-fisica), Diffrax è il punto di riferimento in JAX.
Strumento di studio + capacità integrabile.

---

**Equinox**
https://github.com/patrick-kidger/equinox
2.9k stelle — JAX — dallo stesso autore di Diffrax

Libreria di reti neurali per JAX con sintassi PyTorch-like. I modelli sono pure
PyTree: passano attraverso jit/grad/vmap senza overhead. Ecosistema attorno:
Diffrax (ODE), Optimistix (ottimizzazione), Lineax (algebra lineare), regressione
simbolica.

**Come serve a Giuseppe:** se studia JAX (che è il framework di NetKet, dynamiqs,
jax-md, Diffrax), Equinox è il modo naturale per costruire reti neurali dentro
quel sistema. Stack unificato invece di mescolare Flax/Haiku. Strumento di studio
+ potenziale capacità navicella.

---

**mrdbourke/pytorch-deep-learning**
https://github.com/mrdbourke/pytorch-deep-learning
18.3k stelle — Jupyter — PyTorch

Corso "Learn PyTorch for Deep Learning: Zero to Mastery". 10 sezioni da
fondamentali a computer vision, transfer learning, deployment. Approccio
hands-on code-first. Book gratuito su learnpytorch.io.

**Come serve a Giuseppe:** onboarding rapido su PyTorch se sceglie quel framework
invece di JAX. Ottimo come riferimento parallelo. Meno matematicamente denso di
d2l ma più operativo. Strumento di studio alternativo/complementare.

---

**Nebius-Academy/ai-in-math-course**
https://github.com/Nebius-Academy/ai-in-math-course
115 stelle — Jupyter — STARRED da Giuseppe

Corso universitario avanzato (13 settimane): LLM come assistenti di ricerca,
ML per approssimazione e scoperta, modelli di linguaggio + agenti autonomi,
ricerca in spazi grandi. Copre PINNs, transformer, RL, dimostrazione automatica
di teoremi. Livello: magistrale/ricercatori, con matematica sofisticata
(geometria algebrica, curve ellittiche, gruppi di Galois).

**Come serve a Giuseppe:** ponte esplicito tra matematica avanzata, fisica, e
AI. Adatto esattamente al suo livello e alla sua direzione (fisica teorica +
magistrale). Contiene PINNs + theorem proving + agent-as-researcher. Candidato
forte per studio in parallelo alla magistrale. Già stellato = già nel radar.

---

**physics-based-deep-learning (TUM I15)**
https://github.com/thunil/Physics-Based-Deep-Learning
1.9k stelle — lista curata

Link a lavori su DL per problemi di fisica: differentiable simulations, PDE
transformers, neural operators, fluid dynamics. Companion a physicsbaseddeeplearning.org
(libro online). Focus su fluidi e Navier-Stokes, ma la metodologia è trasversale.

**Come serve a Giuseppe:** mappa della letteratura PBDL. Meno rilevante del d2l
per lo studio base, ma utile per orientarsi nella letteratura physics+DL.
Awareness strategica.

---

**model_guided_research (Dicklesworthstone)**
https://github.com/Dicklesworthstone/model_guided_research
116 stelle — Python/JAX/PyTorch — STARRED da Giuseppe

Indaga sistematicamente 11 strutture matematiche esotiche applicate al DL: Lie
groups/algebras, numeri p-adici, geometria tropicale, simplicial complexes,
quaternioni e ottonioni, IFS/frattali, teoria dei nodi, surreal numbers,
analisi non-standard. Implementazioni duali JAX+PyTorch. Documentazione con
derivazioni first-principles. Generato da GPT-5 Pro come esperimento di
AI-guided mathematical discovery.

**Come serve a Giuseppe:** altissima risonanza con la sua direzione (fisica
teorica + matematica non-ordinaria). I framework come Lie groups, p-adic,
geometria tropicale sono esattamente il tipo di struttura matematica che appare
in meccanica statistica e sistemi complessi avanzati. Non è un corso: è
esplorazione densa. Da approcciare dopo aver costruito la base DL.
Candidato per l'incrocio tesi-matematica esotica.

---

**vinsis/math-and-ml-notes**
https://github.com/vinsis/math-and-ml-notes
94 stelle — Jupyter — STARRED da Giuseppe

Note personali su paper ML/AI: transformer, representation learning, ricerca
recente. Aggiornato in modo non sistematico. Non è un corso strutturato.

**Come serve a Giuseppe:** risorsa leggera, utile per leggere interpretazioni
di paper in formato notebook. Non sostituisce d2l o il corso Nebius. Già stellato,
non necessita azione.

---

## Note cross-area

**Stack JAX per un fisico teorico:**
Il percorso coerente emerge chiaramente: JAX come framework unificante.
Equinox (reti neurali) + Diffrax (ODE/SDE) + NetKet (quantum NQS) +
dynamiqs (sistemi aperti) + jax-md (MD) formano un ecosistema scientifico
omogeneo. Tutto autodiff + GPU. Tutto componibile. Questo è lo stack naturale
per chi vuole incrocio DL+fisica senza cambiar paradigma.

**QuSpin vs NetKet:**
QuSpin = esatta diagonalizzazione classica, ottimo per sistemi piccoli (~20-30
siti), studio di ETH e MBL. NetKet = variational con reti neurali, scala a
sistemi grandi, ma approssimato. I due sono complementari, non alternativi.
Raccomando a Dedalo di presentarli insieme come "stack tesi fase 1 (QuSpin) +
fase 2 (NetKet)".

**paper-qa come MCP:**
FutureHouse (maker di paper-qa) ha un ecosistema di tool scientifici agentici.
Se Dedalo volesse integrare un lettore di paper nella navicella, paper-qa è il
candidato più solido (8.8k stelle, API LLM-agnostica). L'Argonauta potrebbe
usarlo come sotto-componente.

---

## Repos stellate di Giuseppe — classificazione per rilevanza aree coperte

| Repo | Area | Giudizio |
|------|------|----------|
| get-physics-done | Math/Fisica | Alta — candidato integrazione navicella |
| awesome-ai-for-science | Math/Fisica | Media — directory utile |
| model_guided_research | DL/Math esotica | Alta — studio avanzato post-base |
| ai-in-math-course | DL/Math | Alta — corso strutturato pertinente |
| math-and-ml-notes | DL | Bassa — note personali altrui, non sistematico |

Le altre stellate (baobuildbuddy, unity-mcp, pentagi, videogames, system-prompts,
viral-reel, claude-code varianti, codeburn, ECC, ecc.) non rientrano nelle due aree
di questa ricerca — appartengono al dominio navicella/tooling Claude Code/gioco.

---

*Argonauta Accademico — findings consegnati al Demiurgo / Dedalo per decisione.*

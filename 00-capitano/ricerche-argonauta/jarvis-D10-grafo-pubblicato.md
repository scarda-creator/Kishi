# D10 — Sicurezza del grafo pubblicato (grafo.json)

*Stato: completo per la parte obbligatoria (lettura codice + bibliografia de-anonimizzazione).
Metà 1 (GraphRAG/HippoRAG) accennata solo, per esplicito ordine di priorità del mandato.*

## Verdetto (dalla sola lettura del codice)

`esporta_json()` in `anima-grafo.py` e `grafo_step()` in `riversa.py` NON prevengono la
ricostruzione tematica dei nodi riservati — non ci provano nemmeno, per scelta esplicita
e dichiarata nel codice stesso (commento riga 92, "Revisione del cancello 3"). L'anonimizzazione
copre **solo l'identità del nodo** (nome, path, distinzione subconscio/coda collassata in
"riservato"): non tocca **la topologia**, che esce intatta — tutti gli archi, il grado (`g`)
e il timestamp (`mtime`) di ogni nodo riservato viaggiano in chiaro nel grafo pubblico, verso
nodi il cui testo è nello stesso repo in chiaro (L1-L4). Questo è un rischio residuo
**accettato consapevolmente** da Giuseppe il 28-07 ("i legami verso nodi noti possono far
intuire un tema anche senza nome" — testuale, dal codice), non un buco non visto. La domanda
utile quindi non è "esiste il rischio" — sì, ed è dichiarato — ma "quanto restringe il campo
davvero", cosa che il codice da solo non basta a dire: per quello serve la letteratura sulla
de-anonimizzazione di grafi (passo 3).

## Come funziona l'anonimizzazione (`esporta_json`, `anima-grafo.py` righe 85-116)

Un nodo è `sensibile` se appartiene alla famiglia `subconscio` o `coda`, oppure se il flag
`ris` (che viene dalla colonna `riservato` dell'indice — non ho letto `memoria-indice.py`,
quindi non so cosa altro possa marcare `ris=1` oltre a L5 e code: **non confermato**, da
verificare). Per i nodi sensibili l'export sostituisce `nome`→`"R-<id>"`, `path`→`""`,
`fam`→`"riservato"` (uniforme: un attaccante NON distingue più L5-psicologica da coda di
apprendimento solo dal campo `fam,` cosa che invece prima della revisione del 28-07 sarebbe
stata visibile). Restano però intatti, sullo stesso record esportato: `id` (invariato, usato
dagli archi), `g` (il grado — somma pesata di tutti gli archi del nodo, calcolata PRIMA
dell'anonimizzazione sul grafo completo) e `mtime`. La mappa etichetta→nome vero
(`mappa-grafo.enc`) è cifrata a parte con la stessa passphrase di L5: coerente, non è quello
il punto debole.

Gli archi (`fuori` → `archi` nell'export) sono esportati **senza alcun filtro**: il commento
a riga 106 lo dice esplicitamente — `"id invariati: teniamo tutti"`. Nessun arco fra un nodo
in chiaro e un nodo riservato viene rimosso, aggregato o rumorizzato. È la stessa scelta
architetturale dichiarata nel docstring di `grafo_step()` in `riversa.py`: *"il cervello
viaggia COMPLETO, protetto"* — protetto nel senso di "nomi coperti", non nel senso di
"struttura nascosta".

## Vettore 1 — citazione

Un arco di citazione fra i nodi A e B esiste se lo `stem` del filename di B (≥6 caratteri,
minuscolo, senza accenti — funzione `normale()`) appare come **sottostringa letterale**
(non a confini di parola: `chiave in corpo`, non regex `\b`) nel testo concatenato di A.
La lista dei nomi candidati (`nomi`) è costruita su **tutti** i nodi, riservati inclusi: cioè
il meccanismo di rilevazione usa il vero nome del file riservato, che l'attaccante non vede
— ma quello che l'attaccante vede è che un nodo pubblico P (path e testo in chiaro, nello
stesso repo) ha un arco di peso 1.0 (o più, se cumulato con altri tipi) verso un nodo `R-<id>`.
Siccome il meccanismo di citazione richiede che lo stem del nodo riservato compaia
letteralmente nel testo di P, e quel testo è leggibile dall'attaccante (è in chiaro sullo
stesso repo), l'attaccante può enumerare le sottostringhe di ≥6 caratteri di P — in pratica i
nomi propri, i termini composti, i titoli citati nel documento — e usarle come lista di
candidati per il vero nome/tema del nodo riservato. Non è una rottura garantita (il documento
può contenere molte sottostringhe candidate), ma se P è un documento breve o se cita
esplicitamente pochi "nomi" (com'è tipico di un diario o di un feedback: `mnemosyne-diario.md`
per esempio nomina spesso path e titoli per esteso), il campo dei candidati si restringe
drasticamente — in alcuni casi a una sola voce plausibile. Va notato che se lo stem è
letteralmente nel testo in chiaro, il tema del nodo riservato **è già leggibile senza il
grafo**: quello che il grafo aggiunge non è l'informazione grezza ma la CONFERMA STRUTTURALE
che quella menzione corrisponde esattamente a un vero nodo (distinto da rumore testuale) e
la sua posizione nella rete (con chi altro è connesso).

## Vettore 2 — risonanza

Un arco di risonanza nasce da parole rare condivise: un token (≥6 lettere, normalizzato, non
in `VUOTE`) conta se appare in almeno 2 documenti e al massimo `tetto = max(3, N/50)` documenti
(N = numero totale di nodi) — quindi realmente raro (era-`2%`-del-corpus nel docstring, in
pratica il tetto è ~N/50 con minimo 3). Ogni parola condivisa vale 0.34; la soglia di
esportazione è `p >= 0.5`, quindi **un arco puramente di risonanza richiede almeno 2 parole
rare condivise** (0.68), non una sola. Il peso `p` **è esportato** (arrotondato a 2 decimali,
non nascosto né quantizzato in fasce), quindi l'attaccante vede il valore preciso. Con soglie
note (0.34/parola, 0.18/cartella, 1.0/citazione) e un valore osservato, il campo delle
combinazioni possibili che generano quel valore è piccolo e spesso enumerabile a mano (es.
p=0.68 → quasi certamente 2 parole rare, perché nessun'altra combinazione di citazione/sangue
la produce esattamente; p=0.52 → 1 parola rara + stessa cartella, ambiguo con altre
combinazioni solo se ci sono più parole in gioco). Un attaccante che possiede il testo in
chiaro del nodo pubblico collegato può ricostruire il proprio elenco di parole rare (rare nel
sottoinsieme di corpus che vede, che è quasi tutto tranne i riservati) e usarlo come lista di
candidati per il vocabolario del nodo riservato. Se lo stesso nodo riservato ha risonanza con
**più** nodi pubblici, l'intersezione dei rispettivi vocabolari rari converge sulle parole
condivise vere — è esattamente il meccanismo con cui in letteratura di re-identificazione si
usano nodi "seed" multipli per restringere un candidato (da verificare alla fonte, passo 3).

## Vettore 3 — grado e mtime (non nella domanda originale, trovato leggendo)

`g` (il grado pesato) e `mtime` restano in chiaro su ogni nodo riservato. Il grado permette
fingerprinting strutturale puro (quanti nodi hanno esattamente quel grado, in quella famiglia
"riservato"? Se pochi, il nodo è isolabile solo dalla forma del grafo, indipendentemente dal
contenuto). `mtime` permette correlazione temporale con eventi noti dal materiale in chiaro
(es. un diario o una nota di feedback datata lo stesso giorno) — un vettore di
de-anonimizzazione classico (side-channel temporale) non menzionato nella domanda originale
ma presente nel codice e non mitigato.

## Cosa dice già il codice (non è un buco silenzioso)

Il commento a riga 92 di `anima-grafo.py` è esplicito: *"Rischio residuo accettato da
Giuseppe (28-07): i legami verso nodi noti possono far intuire un tema anche senza nome.
Revisione del cancello 3, ratificata da Mnemosyne."* Il rischio descritto in questa ricerca
non è quindi una scoperta — è la stessa cosa, ma **misurata meccanicamente** (quali soglie,
quanti bit di libertà, quali campi restano in chiaro) invece che affermata in una riga.

## Bibliografia — de-anonimizzazione di grafi

Due filoni distinti, e il caso della navicella assomiglia più al secondo che al primo.

**Filone 1 — seed-based re-identification fra due grafi separati.**
Narayanan & Shmatikov, *De-anonymizing Social Networks* (IEEE S&P 2009) —
[paper](https://www.freehaven.net/anonbib/cache/DBLP:conf/sp/NarayananS09.pdf). Modello: due
grafi (uno anonimo target, uno ausiliario noto all'attaccante), un piccolo numero di nodi
"seed" mappati a mano fra i due, poi propagazione automatica per sola topologia che
ri-identifica il resto. Risultato dichiarato: un terzo degli utenti con account sia su
Twitter sia su Flickr ri-identificati nel grafo Twitter anonimizzato, 12% di errore. Filone
proseguito con *De-anonymizing Social Networks with Overlapping Community Structure*
([arxiv 1712.04282](https://arxiv.org/pdf/1712.04282)), *De-anonymization of Social Networks
with Communities* ([arxiv 1703.09028](https://arxiv.org/pdf/1703.09028)), *Quantification of
De-anonymization Risks* ([arxiv 1703.04873](https://arxiv.org/pdf/1703.04873)), *An Automated
Social Graph De-anonymization Technique* ([arxiv 1408.1276](https://arxiv.org/pdf/1408.1276)).
Non è il caso della navicella: qui non ci sono due grafi separati da far combaciare — c'è un
solo grafo, con una parte già etichettata (i nodi pubblici) e una oscurata (i nodi
riservati), tutto nello stesso file.

**Filone 2 — inferenza su un solo grafo misto pubblico/privato (il caso pertinente).**
Zheleva & Getoor, *To Join or Not to Join: The Illusion of Privacy in Social Networks with
Mixed Public and Private User Profiles* (WWW 2009) —
[ACM](https://dl.acm.org/doi/10.1145/1526709.1526781). Modello: alcuni profili sono pubblici,
altri privati, tutti nello **stesso** grafo (esattamente come `grafo.json`: nodi in chiaro L1-L4
+ nodi anonimi L5/code nello stesso file). L'attaccante non deve far combaciare due grafi:
sfrutta i link fra profilo privato e profili pubblici (chi è "amico" di chi, chi appartiene a
quale gruppo pubblico) per inferire l'attributo nascosto del profilo privato, riformulando il
problema come classificazione relazionale collettiva. Risultato dichiarato: anche rendendo
privato l'intero profilo, l'appartenenza a un gruppo pubblico (o, nella navicella, un arco di
citazione/risonanza verso un documento pubblico) resta visibile e basta a inferire l'attributo.
Filone di "attribute inference via link/friend disclosure" proseguito in *Attribute Inference
Attacks in Online Social Networks* (Gong & Liu, ACM TOPS 2018) —
[ACM](https://dl.acm.org/doi/10.1145/3154793) — e *You Are Who You Know and How You Behave*
(USENIX Security 2016) — [paper](https://arxiv.org/pdf/1606.05893). Lavoro recente specifico
su come pubblicare grafi resistendo a inferenza su link sensibili: *Learning-based
Privacy-Preserving Graph Publishing Against Sensitive Link Inference Attacks* (2025) —
[arxiv 2507.21139](https://arxiv.org/pdf/2507.21139) — non aperto per intero in questa
sessione, citato solo come pista aggiornata: **non confermato in dettaglio**.

**Filone 3 — k-anonymity strutturale su grafi pubblicati.** *Towards identity anonymization on
graphs* (Liu & Terzi, SIGMOD 2008) — [ACM](https://dl.acm.org/doi/10.1145/1376616.1376629) —
introduce la k-degree anonymity: un grafo è k-degree-anonimo se ogni nodo condivide il proprio
grado con almeno k-1 altri nodi, proprio per impedire la re-identificazione da parte di un
attaccante che conosce a priori il grado di un nodo. La k-neighborhood anonymity (survey:
[ResearchGate](https://www.researchgate.net/publication/225125553_The_k-anonymity_and_l-diversity_approaches_for_privacy_preservation_in_social_networks_against_neighborhood_attacks))
estende l'attacco al vicinato immediato, non solo al grado.

**Applicazione diretta al caso `grafo.json`.** Nessuno di questi lavori è stato riletto
integralmente in questa sessione (limite di tempo, dichiarato): la lettura è su
abstract/introduzione dei risultati di ricerca, non sul paper intero — livello di fonte
"secondario" per l'affermazione puntuale, anche se il paper primario esiste ed è citato.
Il punto strutturale però regge senza bisogno del dettaglio: **Zheleva & Getoor descrivono
esattamente la topologia di `grafo.json`** — profili/nodi misti, alcuni in chiaro alcuni
oscurati, stesso grafo, link visibili fra le due categorie usati per inferire l'attributo
nascosto — e il loro risultato è che l'oscuramento del nodo NON basta se i suoi archi verso
nodi noti restano visibili. È la conferma, in letteratura accademica del 2009 (quindi matura,
non speculativa), del meccanismo descritto sopra dalla sola lettura del codice: il verdetto
del passo 2 non era un'ipotesi isolata, è un'istanza di una classe di attacco nota e
misurata. La `k-degree anonymity` di Liu & Terzi indica anche la contromisura standard che
NON è stata applicata qui: `grafo.json` non impone alcun vincolo sul grado dei nodi riservati
(il campo `g` esce con il valore esatto, non generalizzato in una fascia condivisa con k-1
altri nodi) — è una lacuna aggiuntiva rispetto allo stato dell'arte del 2008, non solo
rispetto a un ideale teorico.

## Metà 1 — cosa abilita un grafo (GraphRAG, HippoRAG 2, Zep/Graphiti, multi-hop)

Dichiarata **secondaria e non approfondita**, come da priorità del mandato — solo un accenno
raccolto in una ricerca, senza apertura dei paper: GraphRAG mostra vantaggio su domande
multi-hop e sintesi che attraversano segmenti di testo distanti, proprio dove un indice
vettoriale piatto perde il collegamento; HippoRAG2 usa il grafo come struttura ausiliaria che
guida il recupero dei chunk (non è il bersaglio primario del retrieval) con miglior
"evidence recall" su domande complesse. Non è stato letto nessun paper per intero, non è
stato confrontato con l'architettura reale della navicella (l'"anima" a 3 motori). **Non
fatto per la parte di merito** — dichiararlo qui è più corretto che riempirlo di plausibile.

## Non confermato

- Cosa altro (oltre a `L5-subconscio` e `coda-*.jsonl`) può marcare `ris=1` nella colonna
  `riservato` dell'indice — non ho letto `memoria-indice.py`.
- Se `anima.html` / `anima-dati.js` (versione locale, non quella pubblicata) applica soglie o
  filtri diversi — non richiesto dal mandato, non verificato.
- Stima quantitativa (quanti bit di entropia residua, quanti candidati medi per nodo
  riservato nel grafo reale di Giuseppe) — richiederebbe eseguire il generatore sul dataset
  vero, fuori mandato per un Argonauta (non costruisco, non eseguo).

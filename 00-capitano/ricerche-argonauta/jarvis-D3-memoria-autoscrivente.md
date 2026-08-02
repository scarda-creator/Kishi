# D3 — Memoria che si scrive da sola senza autorizzazione umana

## Risposta in tre righe

Misurato sul disco prima di cercare: la correzione che Mnemosyne ha già scritto il 22/7
(`politica-richiamo.md` §2.bis, "scrivo quando osservo, non quando N≥3") è ancora prosa, non
architettura — `L4-fondazionale.md` ha zero voci anche oggi, nove giorni dopo la correzione,
perché la scrittura resta condizionata al fatto che Mnemosyne se ne ricordi in sessione. Il
pattern che risolve davvero il problema esiste ed è misurato: **Zep/Graphiti** scrive ogni
episodio nel grafo senza soglia (nessun giudizio di qualità blocca l'ingest) e sposta il
controllo qualità a valle con **invalidazione bitemporale degli archi** — un fatto nuovo non
cancella quello vecchio, gli assegna `t_invalid` e lo lascia interrogabile per sempre. È
l'unico meccanismo trovato che soddisfa "niente oblio" per costruzione, non per disciplina.

## Candidati (ordinati per utilità reale, non per fama)

**Zep / Graphiti** · github.com/getzep/graphiti · Apache-2.0 · 29,4k stelle, ~930 commit,
sviluppo attivo (GetZep, azienda dietro il prodotto commerciale Zep) · grafo di conoscenza
temporale: ogni episodio ingerito diventa nodi/archi senza cancello di qualità in ingresso;
quando un fatto nuovo contraddice uno vecchio, l'arco vecchio riceve `t_invalid` e resta nel
grafo, interrogabile "as of" qualunque istante passato · risolverebbe esattamente il buco 1
del mandato: la scrittura smette di dipendere da un innesco manuale, il grafo che la
navicella ha già (`anima-grafo.py`, 133 documenti, 1010 archi) guadagnerebbe un quarto tipo
di legame (temporale/invalidante) accanto a citazione/risonanza/cartella · costo: self-hosted
su Neo4j o FalkorDB, gratuito, giro locale possibile (nessun obbligo cloud) · rischio: è un
motore per **fatti** (soggetto-predicato-oggetto con validità), non per prosa lunga — i diari
di Mnemosyne e L5/psicologica non sono fatti atomici, andrebbero prima ridotti a triple, che è
un lavoro extra e con perdita · fonte del giudizio: repo ufficiale + blog tecnico GetZep,
verificato via WebFetch diretto sulla pagina del repo.

**SAGE — A Novelty Gate for Efficient Memory Evolution** · arXiv:2605.30711 (Wang, Brahma,
Henao, sottomesso 29/5/2026, revisione 18/6/2026) · codice rivendicato ma URL non verificato
con certezza in questa ricerca · stima geometrica di novità (densità von Mises-Fisher sugli
embedding della memoria) che classifica ogni fatto candidato in ADD / NOOP / "manda a un LLM
per il merge" **senza mai bloccare la scrittura** — instrada solo il costo di ragionamento,
non il permesso di scrivere · risolverebbe la parte più fine del buco: oggi la navicella non
ha un "punteggio di sorpresa" a basso costo, ha o zero controllo o un controllo umano
(Rapsodo→Capitano→Giuseppe); SAGE è il meccanismo preciso che il mandato chiede di trovare per
"decadimento della rilevanza senza distruggere il dato" applicato al momento della scrittura,
non del recupero · costo: un embedding + confronto geometrico per candidato, nessun LLM nella
maggioranza dei casi (3,4× meno chiamate API rispetto a Mem0 su GPT-4o-mini, dichiarato dagli
autori) · rischio: paper di un mese fa, un solo benchmark (LoCoMo), zero adozione fuori dal
paper verificata · fonte: arXiv, nessuna verifica indipendente trovata — **non confermato
oltre il paper stesso**.

**Letta / MemGPT — sleep-time compute** · github.com/letta-ai/letta · Apache-2.0 · 24k stelle,
oltre 7400 commit, sviluppo attivo · un agente separato ("sleep-time agent") gira nei momenti
di inattività e riorganizza la memoria dell'agente primario: astrae pattern da esperienze
specifiche, risolve contraddizioni fra fatti memorizzati, pre-calcola associazioni — senza che
l'utente prema play · risolverebbe il buco 3 in combinazione col buco 1: è letteralmente un
processo periodico non innescato da Giuseppe, il tipo di "battito" che manca alla navicella,
applicato specificamente alla memoria e non al lavoro generico · costo: un secondo agente che
gira, quindi doppio consumo di token per ogni ciclo di sonno — non quantificato dagli autori
in cifra assoluta · rischio, verificato ostilmente: issue aperte sul repo (`letta-ai/letta`
#1776, #490) descrivono MemGPT come "una delle cose più difficili da far girare in modo
affidabile", specialmente fuori da OpenAI; la riscrittura v1 dell'agent loop ha rotto la
semantica dell'heartbeat originale, il sleep-time agent in v1 richiede prompting custom per
spiegargli l'ambiente · fonte: repo ufficiale, blog tecnico Letta, issue tracker GitHub.

**A-MEM — Agentic Memory (Zettelkasten)** · github.com/WujiangXu/A-mem e
github.com/agiresearch/A-mem · MIT · paper NeurIPS 2025 (arXiv:2502.12110) · ogni interazione
diventa una nota atomica con timestamp, parole chiave e tag generati dall'LLM, e l'agente
stesso decide i link verso note esistenti — il grafo evolve senza operazioni predeterminate,
proprio come lo Zettelkasten che ha ispirato la disciplina · è il candidato filosoficamente
più vicino a ciò che la navicella già fa a mano (voci datate, promozione per pattern) — la
differenza è che qui è l'agente a proporre i link, non un Rapsodo che deve essere convocato ·
costo: chiamata LLM per nota per generare metadata e proporre collegamenti — non quantificato
in valore assoluto dagli autori, dichiarato "risparmio di token" solo in termini relativi (2-6×
più efficiente in ragionamento multi-hop) · rischio: non gestisce esplicitamente la
contraddizione (nessun meccanismo di invalidazione trovato nel paper, solo linking); il
decadimento è assente — le note vecchie restano di peso pari alle nuove finché qualcosa non le
ricollega · fonte: paper arXiv + repo ufficiale, nessuna issue critica di rilievo trovata
(repo giovane, poco traffico di issue).

**Generative Agents (Park et al., Stanford, 2023)** · github.com/joonspk-research/generative_agents
· MIT-style (da verificare il file LICENSE esatto, non confermato) · **ultimo commit 13 agosto
2023, nessuna attività da quasi tre anni — è il cimitero elegante di cui parla il mandato,
riportato per il meccanismo, non per il codice** · il memory stream accumula osservazioni
senza filtro (scrittura incondizionata per costruzione: tutto ciò che l'agente percepisce
entra nel log), e la riflessione — che sintetizza osservazioni in intuizioni di ordine
superiore — scatta da sola quando il punteggio di importanza cumulato delle osservazioni
recenti supera una soglia numerica, circa 2-3 volte al giorno simulato · è la prova che un
innesco a soglia *può* funzionare, ma solo se qualcosa lo valuta a ogni ciclo: nella
simulazione di Park gira un loop continuo che controlla la soglia ad ogni tick — è la stessa
soglia che la navicella ha in `pattern-longitudinali/` (N≥3), ma lì nessun processo la valuta
mai, perché non c'è un tick. Conferma che il buco 1 del mandato non è la soglia, è l'assenza
di un dispacciatore che la controlli (territorio D4, non risolvibile da qui) · fonte: paper
ACM UIST 2023 + repo GitHub, verificato che il repo è fermo.

**Mem0** · github.com/mem0ai/mem0 · Apache-2.0 · 47-61k stelle (fonti discordanti sul numero
esatto), ultimo push 17-18 febbraio 2026, sviluppo attivo · **riportato come contro-esempio
utile**: il controller di routing classifica ogni fatto candidato come ADD/UPDATE/DELETE/NOOP,
e secondo il paper (arXiv:2504.19413) DELETE "rimuove le memorie contraddette da nuova
informazione" — cancellazione reale, non invalidazione. Verificato ostilmente sulla discussion
ufficiale #4787: un manutentore dichiara che in pratica "entrambe vengono tenute per design"
con `linked_memory_ids` a collegare la versione nuova alla vecchia — il che significa che il
comportamento dichiarato nel paper e il comportamento difeso in discussione non coincidono, e
la discussione stessa non chiarisce se il codice cancella davvero o no · **incompatibile con
"niente oblio" nella lettera del paper, ambiguo nella pratica dichiarata** — da scartare come
riferimento diretto, utile solo come esempio di cosa NON replicare · fonte: paper arXiv +
GitHub discussion ufficiale.

**LangMem** · github.com/langchain-ai/langmem · MIT/Apache (LangChain) · gestore di memoria in
background integrato con LangGraph: estrae, consolida e aggiorna la conoscenza fuori dal
flusso di conversazione, con un decadimento di salienza per le memorie non richiamate di
recente — dichiarato analogo al decadimento biologico, applicato al **punteggio di recupero**,
non al dato: la memoria non recuperata perde priorità di retrieval, non viene rimossa ·
risolverebbe in parte il buco 1 se innestato sopra l'indice SQLite già esistente
(`memoria-indice.py`) come motore di consolidamento periodico · costo: non quantificato nella
documentazione, dipende dal volume di conversazioni processate · rischio: SDK giovane,
documentazione descrive "best practice" più che comportamento garantito; nessuna verifica
indipendente di quanto il decadimento sia davvero non-distruttivo trovata oltre la
documentazione ufficiale · fonte: documentazione ufficiale LangChain, non verificata con
issue tracker.

**SSGM — Stability and Safety Governed Memory** (Lam, Li, Zhang, Zhao, arXiv:2603.11768,
marzo 2026) · nessun codice trovato, framework teorico · propone di disaccoppiare
l'evoluzione della memoria dall'esecuzione imponendo verifica di coerenza, modellazione del
decadimento temporale e controllo d'accesso dinamico **prima** di ogni consolidamento —
nomina esplicitamente i due rischi che riguardano la navicella (leakage per topologia,
deriva semantica da riassunti iterati) ma l'abstract non specifica se il decadimento
temporale cancella o solo declassa, e il full text non è stato aperto in questa ricerca ·
riportato per il vocabolario, non per un innesto: non c'è nulla da installare · **non
confermato oltre l'abstract**.

## Il meccanismo, spiegato bene

Il pezzo che risolve il problema è l'invalidazione bitemporale di Graphiti, e vale la pena
capire perché funziona dove la navicella si è incastrata. Il cancello attuale della navicella
sta a monte: un'osservazione deve superare una soglia (N≥3 occorrenze, o una decisione
esplicita del Capitano) prima di meritare la scrittura. Il problema misurato è che la soglia
non fallisce per essere sbagliata nel merito — fallisce perché nessun processo la valuta mai:
serve un umano che noti il pattern, lo scriva nel posto giusto, e poi un altro passaggio che
lo promuova. Ogni passaggio è un punto in cui la catena si può fermare, e infatti si è fermata
sempre, per otto settimane.

Graphiti capovolge l'ordine delle operazioni. Ogni "episodio" — un pezzo di testo, una
conversazione, un evento — viene ingerito **senza giudizio**: un estrattore LLM tira fuori
entità e triple soggetto-predicato-oggetto e le scrive nel grafo. Non c'è soglia di
importanza, non c'è conferma umana, non c'è un secondo agente che decide se vale la pena. La
qualità entra dopo, in due punti separati e entrambi automatici. Primo: quando una nuova
tripla si sovrappone a un'entità già nota, un passaggio di risoluzione (embedding + giudizio
LLM sul confronto) decide se è lo stesso nodo o uno nuovo — è deduplica, non filtro: anche se
decide "nodo nuovo" per errore, non perde niente, aggiunge ridondanza recuperabile. Secondo, e
questo è il pezzo cardine: ogni arco porta quattro timestamp — quando il fatto ha iniziato a
essere vero nel mondo, quando ha smesso, quando è stato scritto nel sistema, quando è stato
invalidato nel sistema. Quando arriva un fatto che contraddice un arco esistente, il sistema
non lo sovrascrive e non lo cancella: scrive il fatto nuovo come arco nuovo, e marca l'arco
vecchio con `t_invalid` = adesso. L'arco vecchio resta nel grafo, interrogabile per sempre con
"cosa era vero al 15 marzo" — semplicemente smette di essere restituito quando la domanda è
"cosa è vero adesso". La qualità del presente è garantita filtrando all'interrogazione, non
filtrando alla scrittura. Il dato non degrada mai; **la sua rilevanza per il "adesso" sì**, ed
è esattamente la distinzione che il mandato chiede di trovare.

Questo è strutturalmente identico, non per analogia ma per forma dei dati, a quello che la
politica del richiamo di Mnemosyne già dice a parole: "niente oblio — nessuna informazione
viene mai cancellata, solo migrata" e "L3 corrisponda a quello che è successo davvero" senza
seconde strutture parallele. Graphiti è quella regola resa eseguibile: la migrazione non è
un'operazione che qualcuno decide di fare, è la conseguenza automatica di scrivere un fatto
nuovo — il fatto vecchio migra da "vero ora" a "vero allora" da solo, per timestamp, non per
intervento.

## Contro

Nessuno di questi sistemi è pensato per prosa lunga interpretativa. Graphiti vuole triple
estraibili — un diario di Mnemosyne o una voce di L5/psicologica ("possibile lettura:
motivazione X, affidabilità media") non è un fatto atomico, è un giudizio con margine di
incertezza dichiarato nella forma stessa. Ridurlo a triple per entrare nel grafo o perde la
sfumatura o richiede un passaggio di estrazione che è esso stesso un giudizio — si
reintroduce un cancello, spostato ma non eliminato. Il candidato risolve bene i **fatti**
(decisioni, eventi, pattern osservati), non l'interpretazione psicologica che è il cuore di
L5. Per L5 il problema resta aperto: la correzione di Mnemosyne del 22/7 ("scrivo quando
osservo") è ancora la risposta migliore trovata, ma è una disciplina personale di un agente
attivo, non un meccanismo strutturale — nessuno dei candidati qui sopra offre un modo di
rendere *strutturalmente* incondizionata la scrittura interpretativa senza automatizzare
l'interpretazione stessa, cosa che il mandato di autonomia esecutiva vieta esplicitamente
("direzione/identità/struttura restano di Giuseppe"). Automatizzare la scrittura di
osservazioni psicologiche su una persona reale senza che un umano (Mnemosyne, con mandato
esplicito) le formuli sarebbe un salto qualitativo che nessuna fonte qui esaminata giustifica
e che il perimetro L5 della navicella non permette.

Letta/sleep-time-compute e Mem0 girano su LLM a ogni scrittura o ogni ciclo — costo per
episodio non gratuito, in tensione diretta con "scrivere è gratis" del criterio di
accettazione: se ogni episodio costa una chiamata LLM per l'estrazione più una per la
deduplica, il volume che la navicella genera (749 file solo in accademico, misurato nella
retrospettiva del 22/7) diventerebbe un costo ricorrente reale, non nascosto nell'abbonamento.
SAGE è pensato esattamente per questo (instrada la maggioranza dei casi senza LLM), ma è un
paper di un mese, senza adozione verificabile fuori dal proprio benchmark.

## Innesto proposto

Non un innesto sull'intero sistema di memoria — sul punto preciso dove la catena si rompe
oggi, che è **L2→L3**, non L3→L4 (quella resta giustamente gated da conferma umana per spec,
`memoria-profonda.md` riga 129: "mai automatica — richiede conferma", e questa ricerca non
propone di toccarla).

Toccherebbe: `00-capitano/scripts/anima-grafo.py` e la tabella `legami` che già scrive
nell'indice SQLite (`memoria-indice.py`, dentro `voce-venv`). Aggiungere due colonne
`t_valid`/`t_invalid` agli archi che il grafo già produce (citazione, risonanza, cartella)
sarebbe lavoro incrementale, non un trapianto: lo schema esiste, si estende. La parte nuova è
il comportamento di scrittura di `cattura-apprendimento.py` e `instinct.py` (quest'ultimo
citato nel mandato come "mai creato" — `instincts.jsonl` non esiste, verificato con Glob prima
di questa ricerca): oggi la cattura scrive un evento grezzo e si ferma, in attesa di un
innesco che non arriva mai. Il cambio proposto — non deciso qui, solo descritto — è che ogni
cattura scriva **subito** una riga in L3-strategica.md con un flag di confidenza bassa
(esattamente il pattern già ratificato in `politica-richiamo.md` §2.bis per L5, esteso a L3),
e che un passaggio periodico — che richiede un dispacciatore, cioè dipende da D4 — alzi la
confidenza quando la stessa osservazione si ripete, invece di aspettare N≥3 per scrivere la
prima volta.

Si romperebbe: la garanzia implicita che ogni riga di L3-strategica.md sia già stata
vagliata da un Rapsodo o dal Capitano — oggi lo è per costruzione (nessuna riga entra senza
passaggio umano), con questo cambio entrerebbero righe a bassa confidenza scritte da un
processo automatico. Va reso visibile (un campo `confidenza` in ogni riga), non nascosto —
altrimenti si sposta solo la sfiducia da "non scrive" a "scrive ma non ci si può fidare",
che non è un miglioramento.

Lavoro stimato: piccolo per la parte grafo (due colonne, una funzione di invalidazione),
medio per la parte cattura→L3 (riscrivere il trigger di `cattura-apprendimento.py` e
`instinct.py`, oggi condizionato, in scrittura diretta con campo di confidenza) — nessuna
delle due tocca L4, L5/psicologica o il perimetro di `riservato`.

## Non confermato

- URL esatto del codice SAGE (rivendicato via un post LinkedIn, non verificato su GitHub
  direttamente).
- Se il full text di SSGM specifica che il decadimento temporale declassa invece di
  cancellare — solo l'abstract è stato letto.
- Licenza esatta del repo `joonspk-research/generative_agents` (repo fermo dal 2023, non
  ha valore come codice da installare, riportato solo per il meccanismo di soglia+tick).
- Se in Mem0 il DELETE del paper corrisponde davvero a una `DELETE FROM` nel database o se
  in pratica — come sostenuto in discussione dai manutentori — non cancella mai: le due fonti
  (paper vs. discussione GitHub) si contraddicono e nessuna delle due è stata risolta aprendo
  il codice sorgente della funzione di routing.
- Costo per episodio di Letta sleep-time compute in cifra assoluta (token o euro): non
  dichiarato dagli autori in nessuna fonte trovata.

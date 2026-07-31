---
type: ricerca
data: 2026-07-22
autore: Argonauta
tema: memoria diretta per agenti — recupero semantico, push, GraphRAG, hook
---

# Memoria diretta per agenti — ricognizione tecnica

## Verdetto in cinque righe

**Architettura consigliata**: indice semantico locale con `static-similarity-mrl-multilingual-v1` + `sqlite-vec`, attivato da un hook `UserPromptSubmit` che inietta i frammenti rilevanti *prima* che l'agente risponda.

**Pezzo che dà più guadagno per ora di lavoro**: un secondo script sul hook `UserPromptSubmit` che legge il prompt, cerca nell'indice sqlite-vec, e ritorna `additionalContext` in JSON — trasforma la memoria da pull a push in ~3 ore di lavoro senza toccare nulla di esistente.

**Scartare senza rimpianti**: Mem0, Zep/Graphiti, Cognee, A-MEM, Letta — tutti assumono di dover estrarre relazioni da conversazioni grezze tramite un LLM. La navicella ha già struttura markdown tipizzata, wikilink espliciti, frontmatter: aggiungere un layer di estrazione LLM è complessità senza guadagno. Neo4j: pesante, serve un server, overkill per mille nodi. FAISS: velocissimo ma zero metadata filtering, non persiste, nessun vantaggio su 1000 frammenti rispetto a sqlite-vec. ChromaDB: HNSW corruption su exit brusco, già documentato.

---

## Fronte 1 — Architetture di memoria per agenti (stato dell'arte 2025-2026)

### Il campo

Le architetture principali in circolazione nel 2025-2026 sono: Mem0 (v3), Zep/Graphiti, Letta (ex MemGPT), A-MEM, Cognee. Tutte risolvono il problema generico di agenti che lavorano su conversazioni non strutturate e devono estrarne fatti memorizzabili. Il problema della navicella è diverso: l'archivio è già strutturato (markdown tipizzato, frontmatter, wikilink). Questa distinzione è il filtro più importante.

### Mem0 (mem0ai/mem0, Apache-2.0)

**Modello dati**: ibrido vettori + key-value. Il grafo relazionale era presente in v2 e rimosso in v3 open source.

**Come decide cosa ricordare**: chiama un LLM locale (Ollama) per estrarre "fatti" in forma (soggetto, predicato, oggetto) da ogni messaggio. Ogni fact viene embeddato e salvato nel vector store.

**Come recupera**: cosine similarity su vettori.

**Gira in locale**: sì, ma richiede Ollama attivo (llama3.1 o simile) + Qdrant o Chroma locale. Due servizi permanentemente accesi, ~4GB RAM solo per Ollama.

**Licenza**: Apache-2.0.

**Attrito reale**: 2-3 ore per configurazione locale. Il punto di attrito principale è mantenere Ollama attivo per l'estrazione, lento su CPU (~1 secondo per fact). Nessun dato esce dal computer.

**Perché non serve alla navicella**: l'estrazione LLM serve per trovare fatti in conversazioni non strutturate. La navicella ha già frontmatter `type:`, `description:`, wikilink, titoli. Il layer di estrazione duplicherebbe lavoro già fatto.

### Zep/Graphiti (getzep/graphiti, Apache-2.0)

**Modello dati**: grafo bi-temporale — ogni fatto ha una finestra di validità (valido dal X al Y). Deduplica automaticamente entità quando entrano fatti contraddittori.

**Come decide cosa ricordare**: LLM estrae entità e relazioni, le colloca sul grafo con timestamp.

**Come recupera**: cammino sul grafo + ricerca semantica ibrida.

**Gira in locale**: richiede Neo4j (o FalkorDB) come backend del grafo, più Ollama. Tre servizi attivi, ~6GB RAM.

**Licenza**: Apache-2.0 per Graphiti.

**Attrito reale**: alta. Neo4j è un database standalone non banale da configurare su Windows. Utile per agenti che ragionano su fatti che cambiano nel tempo (es. "Tizio era direttore fino al 2024, poi sostituito da Caio") — non è il caso della navicella.

**Perché non serve**: bi-temporalità è un'architettura per fatti del mondo reale che cambiano. La navicella gestisce memoria di Giuseppe, non un knowledge graph dell'enciclopedia.

### Letta / ex-MemGPT (letta-io/letta, Apache-2.0)

**Modello dati**: blocchi di testo in livelli ispirazione OS (core/recall/archival). L'agente decide autonomamente cosa spostare tra livelli.

**Come decide cosa ricordare**: l'agente stesso ha strumenti per leggere/scrivere i blocchi di memoria. Self-editing.

**Come recupera**: ricerca vettoriale sull'archivio + decisione dell'agente.

**Gira in locale**: sì, ma Letta è un *framework completo* che gestisce il loop agente. Non si bolt-on su Claude Code: prende il controllo del flusso.

**Attrito reale**: alta per integrazione. Non è una libreria, è un'applicazione che sostituisce l'agente.

**Perché non serve**: la navicella ha già il suo framework (Claude Code). Integrare Letta significherebbe dismettere Claude Code o fare un wrapper complesso. ROI negativo.

### A-MEM — Agentic Memory (agiresearch/a-mem, NeurIPS 2025, arxiv:2502.12110)

**Modello dati**: rete associativa ispirata a Zettelkasten. Ogni ricordo è una "nota" con keywords, tags, embedding, link espliciti ad altri ricordi con etichette di relazione. Quando entra un nuovo ricordo, un LLM aggiorna i link delle note esistenti correlate.

**Come decide cosa ricordare**: LLM genera attributi strutturati (keywords, context, links) per ogni nuova nota.

**Come recupera**: traversal della rete associativa partendo dai nodi più simili alla query.

**Gira in locale**: richiede un LLM per ogni inserimento (generazione link). Con Ollama: possibile ma lento su CPU.

**Licenza**: codice su GitHub (agiresearch/a-mem), licenza MIT presumibile per paper accademico.

**Attrito reale**: moderata per installazione, alta per integrazione (dipende da LLM call per inserimento).

**Nota di interesse**: l'idea Zettelkasten è la più affine alla struttura della navicella. Ma la navicella ha già i link wikilink `[[nome]]` che *sono* già Zettelkasten — A-MEM risolverebbe il problema sbagliato.

### Cognee (topoteretes/cognee, Apache-2.0)

**Modello dati**: triplo layer embedded — grafo (KuzuDB in-process), vettori (LanceDB), relazionale (SQLite).

**Come decide cosa ricordare**: LLM estrae ontologie e relazioni dai documenti in input.

**Come recupera**: GraphRAG ibrido — prima semantico poi traversal del grafo.

**Gira in locale**: sì, stack completamente embedded senza server. KuzuDB + LanceDB + SQLite + Ollama. È il più locale-friendly tra tutti.

**Licenza**: Apache-2.0.

**Attrito reale**: 3-4 ore. Dipende da Ollama per l'estrazione ontologica.

**La più interessante delle cinque** per prendere ispirazioni architetturali (triple store embedded), ma ancora: richiede LLM per costruire il grafo da documenti non strutturati.

### Sintesi fronte 1

Nessuna delle cinque architetture va adottata as-is per la navicella. Il motivo comune: tutte usano un LLM per estrarre struttura da testo non strutturato. La navicella ha già struttura. Ciò che manca è solo (a) la semantica nel retrieval e (b) il push automatico. Entrambi si ottengono con due pezzi nuovi molto più leggeri.

---

## Fronte 2 — Embedding locale, gratis, leggero, italiano

### I candidati verificati

**`static-similarity-mrl-multilingual-v1`** (sentence-transformers, HuggingFace)
- Architettura: embedding statici (lookup su tabella precomputata, nessuna attention a runtime)
- Velocità: ~125x più veloce di `multilingual-e5-small` su CPU. Latenza per singola query: < 5ms. Indicizzazione 1000 frammenti: < 500ms.
- Qualità: 92.3% delle performance di `multilingual-e5-small` su STS (Semantic Textual Similarity)
- Lingue: multilingue (include italiano)
- Dimensione: il modello ocupa pochi MB (è una tabella di lookup, non una rete transformer da caricare)
- Uso: `from sentence_transformers import SentenceTransformer; model = SentenceTransformer("sentence-transformers/static-similarity-mrl-multilingual-v1")`
- **Scelta primaria per la navicella**: latenza trascurabile anche in hook sincrono.

**`paraphrase-multilingual-MiniLM-L12-v2`** (sentence-transformers)
- Architettura: transformer MiniLM, 12 layer
- Velocità: ~5-10 secondi per 1000 frasi su CPU (indicizzazione one-shot); query singola ~20-50ms su CPU
- Qualità: superiore a static-similarity, coprendo sfumature semantiche più sottili
- Lingue: 50 lingue incluso italiano
- Dimensione: ~470MB
- **Alternativa** se la qualità del retrieval risultasse insufficiente con static-similarity

**`multilingual-e5-small`** (Microsoft)
- ~120MB, buona qualità multilingue
- Più lento di static-similarity, meno preciso di MiniLM-L12
- Non preferito: né il più veloce né il migliore

**BGE-M3** (BAAI)
- Multi-vector, multi-granularity, top performance su retrieval multilingue
- ~570MB, richiede più RAM
- Overkill per 1000 frammenti su CPU

### Raccomandazione fronte 2

Prima scelta: `static-similarity-mrl-multilingual-v1`. La perdita di qualità del 7.7% rispetto a MiniLM-L12 è trascurabile per un archivio di 1000 frammenti ben strutturati (titoli, frontmatter, descrizioni chiare) dove la query è in italiano. Il guadagno in velocità (< 5ms) è decisivo per usarlo in un hook sincrono senza rallentare ogni turno.

---

## Fronte 3 — Vector store locale per ~1000 frammenti

### Confronto verificato

**`sqlite-vec`** (asg017/sqlite-vec, MIT + Apache-2 dual license)
- Implementazione: estensione SQLite in C puro, zero dipendenze esterne
- Installazione: `pip install sqlite-vec`
- Performance su 1000 vettori KNN: < 1ms (brute force a questa scala; SIMD-accelerated)
- Tipi supportati: float32, int8, bit vectors
- Persistenza: automatica nel file `.db`
- Portabilità: Windows, Linux, macOS, WASM, Raspberry Pi
- Dimensione overhead: minima (è SQLite)
- **Scelta primaria**: zero server, zero dipendenze, convive con un SQLite esistente, 1ms è abbondantemente sufficiente.

**LanceDB** (lancedb/lancedb, Apache-2.0)
- Formato columnar Lance, disk-based IVF-PQ
- Scala a dataset più grandi della RAM (utile oltre il milione di vettori)
- Zero server, embedded Python
- Attrito: ~1 ora. Ottima alternativa se si vuole la stessa tecnologia usata da Cognee.

**ChromaDB** (chroma-core/chroma, Apache-2.0)
- API semplice, rapido prototipare
- Problema documentato: HNSW corruption su exit brusco (rilevante su Windows dove i processi vengono killati)
- Non consigliato per la navicella.

**FAISS** (facebookresearch/faiss, MIT)
- Velocissimo su grandi dataset, nessun overhead
- Manca metadata filtering nativo, nessuna persistenza nativa, no query miste (filtro + KNN)
- Per 1000 vettori non dà nessun vantaggio rispetto a sqlite-vec e aggiunge complessità

### Raccomandazione fronte 3

`sqlite-vec`. Per 1000 frammenti, brute force KNN è < 1ms — non serve alcun indice ANN. Il file `.db` è un singolo file portabile. Si integra in uno script Python di 30 righe. Zero infrastruttura.

---

## Fronte 4 — Hook Claude Code e iniezione di contesto

### Architettura hook esistente nella navicella

Dal `settings.json` verificato:
- `SessionStart`: inietta cheatsheet (memoria-cerca.py --cheatsheet) → contesto fisso a inizio sessione
- `UserPromptSubmit`: esegue cattura-apprendimento.py → non inietta nulla (silenzioso by design, exit 0 senza stdout)
- `PostToolUse Write|Edit`: on-banca-dati-write.ps1
- Tutti gli altri: curl alla plancia (asincrono, non bloccante)

### Come funziona UserPromptSubmit per l'iniezione

Il hook riceve via stdin un JSON con campo `"prompt"` (il messaggio utente) ed eventuali metadati. Se il processo hook emette su stdout un JSON con struttura:

```json
{
  "hookSpecificOutput": {
    "hookEventName": "UserPromptSubmit",
    "additionalContext": "testo da iniettare"
  }
}
```

Claude vede quel testo *prima* di generare la risposta, accanto al prompt dell'utente. Non appare in chat, ma è nel contesto del modello.

**Limite**: 10,000 caratteri per `additionalContext`. Eccesso → salvato in file, viene mostrato solo il path.

**Timing**: il hook è sincrono (blocca fino al completamento). Ogni millisecondo conta. Con static-similarity, la ricerca semantica su 1000 vettori richiede < 50ms totali: accettabile.

**Limite critico**: `UserPromptSubmit` non può sostituire il prompt, solo affiancarlo. Non c'è iniezione nel system prompt (solo `additionalContext` accanto al turno corrente).

**Più hook sullo stesso evento**: supportato. Si può aggiungere un secondo hook `UserPromptSubmit` che fa la ricerca semantica senza toccare `cattura-apprendimento.py`.

### Hook eventi rilevanti per la memoria

| Evento | Utilità per memoria |
|--------|---------------------|
| `SessionStart` | Già usato per cheatsheet. Potrebbe iniettare anche l'embedding recap se l'indice cambia |
| `UserPromptSubmit` | Il posto giusto per retrieval semantico just-in-time |
| `PostToolUse` dopo Write/Edit | Aggiornamento incrementale dell'indice quando un file di memoria viene scritto |
| `Stop` | Possibile per aggiornare snapshot-corrente.md in background |

### Cosa manca oggi e come colmarlo

Il `cattura-apprendimento.py` fa correttamente il suo lavoro (cattura segnali di apprendimento) e non inietta contesto per scelta ("silenzioso di proposito per non gonfiare il contesto a ogni turno"). Il problema è che questo principio di silenzio è corretto per la cattura, ma non per il retrieval. Sono due funzioni diverse che oggi stanno nello stesso slot.

Soluzione: un secondo hook `UserPromptSubmit` — `hook-memoria-semantica.py` — che:
1. Legge `"prompt"` da stdin
2. Genera l'embedding con static-similarity (< 5ms)
3. Cerca i top-5 frammenti nell'indice sqlite-vec (< 1ms)
4. Ritorna `additionalContext` con i frammenti rilevanti in formato compatto
5. Se il prompt è breve o non trova nulla di rilevante (cosine < 0.3): ritorna stdout vuoto e lascia lavorare il cheatsheet

Stima latenza totale aggiunta per turno: 20-50ms. Invisibile per l'utente.

---

## Fronte 3b — GraphRAG e spreading activation

### L'algoritmo (arxiv:2512.15922)

Spreading activation (SA) è un metodo della psicologia cognitiva applicato ai grafi di recupero. Funziona così:

1. Dato un query embedding, trova i top-k nodi seed per cosine similarity (nodi di partenza)
2. Assegna a ciascun seed attivazione = 1, a tutti gli altri = 0
3. BFS iterativo: ogni nodo target riceve `min(aj + Σ(ai × wij), 1)` dove `wij` è il peso dell'arco (cosine similarity tra embedding dell'arco e query)
4. Fattore di rescaling (c=0.4) per evitare overactivation
5. Dopo N iterazioni, si raccolgono i nodi con attivazione > soglia

Risultati su benchmark multi-hop: +39% su naive RAG, comparabile a metodi state-of-the-art.

**Non richiede Neo4j**: l'algoritmo è BFS con accumulo — 50 righe in Python con NetworkX. Il paper usa Neo4j per convenienza sull'infrastruttura, non per necessità algoritmica.

### Il grafo della navicella è già costruito

`memoria-cerca.py --grafo` emette già un JSON con:
- Nodi: tutti i file markdown con tipo, depth, descrizione
- Archi di tipo `link`: wikilink `[[nome]]` espliciti
- Archi di tipo `assoc`: overlap di keyword con ≥ 3 parole chiave comuni

**Il grafo ha già due tipi di connessioni**. Quello che manca è un terzo tipo di arco: similarità semantica (cosine > 0.6). Questo è l'upgrade che rende il grafo utile per il retrieval, non solo per la visualizzazione.

### Come si integra con la navicella

```
Query utente
    ↓
Embedding (static-similarity, < 5ms)
    ↓
Ricerca KNN nell'indice sqlite-vec → top-5 nodi seed
    ↓
Carico il grafo (JSON da --grafo o ricostruito in Python)
    ↓
Spreading activation da nodi seed (BFS, 2-3 hop)
    ↓
Unione: nodi raggiunti via SA + nodi semanticamente vicini
    ↓
Compressione in additionalContext (5-8 frammenti, formato compatto)
```

**Complessità per 1000 nodi**: NetworkX carica il grafo in < 100ms. BFS su 1000 nodi è O(V+E) ≈ millisecondi. L'intera pipeline aggiunge < 150ms per turno.

### Quando serve davvero

Lo spreading activation aggiunge valore quando il concetto cercato ha un *nome diverso* nei documenti ma è *collegato* ai documenti giusti tramite link. Esempio: cercare "post-mortem" e trovare tramite SA un documento che parla di "analisi degli errori" collegato via wikilink al documento "fallimenti" → che a sua volta è vicino semanticamente a "post-mortem". Questo è esattamente il difetto #2 della navicella (ricerca lessicale non trova sinonimi).

---

## Architettura minimale — quattro difetti, due pezzi nuovi

### I difetti da correggere

1. **Pull, non push**: la memoria risponde solo se interrogata esplicitamente
2. **Ricerca lessicale**: cerca "darwiniani", non trova "post-mortem"
3. **Grafo solo disegnato**: il grafo esiste in JSON ma non è usato per recuperare nulla
4. **Contesto fisso a SessionStart**: si rilegge tutto il cheatsheet anche quando non serve, e non cambia a metà sessione

### I due pezzi nuovi

**Pezzo 1 — Indice semantico** (`memoria-indice.py`, ~80 righe)
- Scansiona tutti i file markdown (come fa `raccogli()` già in memoria-cerca.py)
- Per ogni file: embedding di `titolo + description + primissime righe` con static-similarity
- Salva vettori in `00-capitano/memoria-indice.db` (sqlite-vec)
- Esecuzione incrementale: confronta mtime dei file con timestamp dell'ultima indicizzazione, embeda solo i nuovi
- Trigger: `PostToolUse` su Write/Edit di file `.md` (hook già esiste in settings.json — on-banca-dati-write.ps1 può invocare questo script)
- Anche eseguibile manualmente: `python memoria-indice.py --rebuild`

Stima tempo sviluppo: 2 ore (inclusi test).

**Pezzo 2 — Hook semantico** (`hook-memoria-semantica.py`, ~60 righe)
- Secondo hook sul `UserPromptSubmit` (aggiunto dopo cattura-apprendimento.py in settings.json)
- Legge il prompt da stdin JSON
- Se prompt < 10 caratteri o è un comando `/...`: exit 0 silenzioso
- Genera embedding del prompt
- KNN su sqlite-vec → top-5 cosine > 0.35
- Spreading activation sul grafo (optional: se il grafo è in cache)
- Stampa JSON con `additionalContext`: formato compatto (path + prima riga + score) per non superare 10,000 caratteri
- Se non trova nulla di rilevante (tutti cosine < 0.35): exit 0 silenzioso

Stima tempo sviluppo: 2 ore (inclusi test sul hook).

### Pezzi esistenti da estendere (non riscrivere)

**`memoria-cerca.py`**: aggiungere modalità `--semantic "query"` che usa sqlite-vec invece del matching a keyword. Due righe di argparse + call all'indice. Il cheatsheet a SessionStart resta invariato.

**Il grafo nel `--grafo`**: aggiungere un tipo di arco `sem` (similarità cosine > 0.6) oltre ai `link` e `assoc` esistenti. Si genera al momento dell'indicizzazione.

### Cosa NON costruire

- Nessun Ollama: l'embedding model gira direttamente in Python. Nessun servizio permanente.
- Nessuna estrazione ontologica LLM: la struttura è già nei file markdown.
- Nessun database grafo standalone (Neo4j, KuzuDB): il grafo da 1000 nodi vive in NetworkX in RAM.
- Nessun server vettoriale (Qdrant, Pinecone): sqlite-vec è un file `.db`.

### Stima totale di attrito

| Componente | Ore |
|------------|-----|
| `pip install sqlite-vec sentence-transformers` + test importazioni | 0.5h |
| `memoria-indice.py` (indicizzazione incrementale) | 2h |
| `hook-memoria-semantica.py` (hook sincrono) | 2h |
| Estensione `--semantic` in memoria-cerca.py | 0.5h |
| Test end-to-end con una query reale | 1h |
| **Totale** | **~6h** |

Costo ricorrente: 0€. Dati fuori dal computer: 0 byte. Pezzi nuovi: 2 script Python.

---

## I «no» espliciti

**Mem0**: richiede LLM per estrarre fatti. La navicella non ha bisogno di estrarre quello che è già strutturato. Overhead infrastrutturale (Ollama attivo) per zero guadagno netto.

**Zep/Graphiti**: bi-temporalità dei fatti è un problema sbagliato per la navicella. Neo4j su Windows è attrito alto. La complessità non è giustificata da 1000 nodi.

**Letta**: framework completo che sostituisce il loop agente. Incompatibile con Claude Code senza wrapper complesso.

**A-MEM**: l'idea Zettelkasten è la più affine, ma la navicella ha già i wikilink che sono Zettelkasten. Il layer di creazione LLM dei link è sovrapposizione. Utile come ispirazione, non come libreria.

**Cognee**: il più promettente dei cinque per uso locale (SQLite + LanceDB + KuzuDB embedded), ma lo stack è comunque più pesante di quanto serve. Il grafo embedded in KuzuDB risolve un problema che NetworkX + il grafo già esistente già risolvono.

**ChromaDB**: rischio corruption su Windows documentato. Sostituibile con sqlite-vec senza perdere funzionalità per questa scala.

**FAISS**: zero metadata filtering nativo, nessuna persistenza, codice più verboso. Nessun vantaggio rispetto a sqlite-vec a 1000 vettori.

**BGE-M3**: eccellente modello, ma 570MB e latenza su CPU non giustificata quando static-similarity a quasi zero latenza raggiunge 92% della qualità.

---

## Fonti

- [AI Agent Memory 2026 — Comparing Mem0, Zep, Graphiti, Letta, LangMem](https://medium.com/@wasowski.jarek/i-compared-5-ai-agent-memory-systems-across-6-dimensions-none-wins-6a658335ed0a)
- [Best AI Agent Memory Frameworks in 2026](https://atlan.com/know/best-ai-agent-memory-frameworks-2026/)
- [Agent Memory Systems and Knowledge Graphs: Letta, Mem0, Graphiti, and Cognee](https://codepointer.substack.com/p/agent-memory-systems-and-knowledge)
- [A-MEM: Agentic Memory for LLM Agents (arxiv:2502.12110)](https://arxiv.org/abs/2502.12110)
- [A-MEM GitHub](https://github.com/agiresearch/a-mem)
- [Cognee GitHub (Apache-2.0)](https://github.com/topoteretes/cognee)
- [Leveraging Spreading Activation for Knowledge-Graph-Based RAG (arxiv:2512.15922)](https://arxiv.org/abs/2512.15922)
- [Query-Aware Spreading Activation for Multi-Hop Retrieval](https://arxiv.org/pdf/2606.30133)
- [Train 400x faster Static Embedding Models — HuggingFace Blog](https://huggingface.co/blog/static-embeddings)
- [Best Local Embedding Models 2026](https://vucense.com/dev-corner/embedding-models-2026/)
- [paraphrase-multilingual-MiniLM-L12-v2 — HuggingFace](https://huggingface.co/sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2)
- [sqlite-vec stable release — Alex Garcia](https://alexgarcia.xyz/blog/2024/sqlite-vec-stable-release/index.html)
- [sqlite-vec su DEV Community](https://dev.to/aairom/embedded-intelligence-how-sqlite-vec-delivers-fast-local-vector-search-for-ai-3dpb)
- [Best Vector Databases in 2026 — Firecrawl](https://www.firecrawl.dev/blog/best-vector-databases)
- [Claude Code Hooks Reference](https://code.claude.com/docs/en/hooks)
- [Mem0 local configuration](https://localaimaster.com/blog/local-ai-agent-memory-mem0)
- [Mem0 GitHub (Apache-2.0)](https://github.com/mem0ai/mem0)

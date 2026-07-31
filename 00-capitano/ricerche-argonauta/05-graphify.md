---
type: ricerca
---

# Argonauta — Ricerca 05: Graphify
Data: 2026-07-12
Fonte principale: https://github.com/Graphify-Labs/graphify + blog tecnici

---

## 1. Identità del progetto

**Repository unica e certa:** `Graphify-Labs/graphify` — il nome "graphify" è comune su
GitHub Topics ma questa è l'unica con le firme richieste (knowledge graph + context/token
reduction + LLM memory). Nessun candidato alternativo credibile trovato durante la ricerca.

- URL: https://github.com/Graphify-Labs/graphify
- Stelle: 82.7k | Fork: 8.2k
- Licenza: MIT
- Lingua: Python 100%
- Ultima release: v0.9.13 (12 luglio 2026 — stesso giorno di questa ricerca)
- Package PyPI: `graphifyy` (doppia y — scelta editoriale strana, segnalata)
- Mantainer: Graphify-Labs (org GitHub; singola persona o piccolo team, non risulta
  corporate backing)

---

## 2. Meccanismo tecnico

### Come si costruisce il grafo

Pipeline a tre passate:

**Passata 1 — AST locale (deterministica, zero API)**
Tree-sitter con 36 grammatiche analizza i file di codice. Estrae: classi, funzioni,
variabili, call graph, import/inheritance, commenti rationale (`# WHY:`, `# NOTE:`,
`# HACK:`). Nulla esce dalla macchina.

**Passata 2 — Trascrizione locale (solo se audio/video)**
Faster-whisper con prompt domain-aware seeded sui "god nodes" del progetto. Locale.

**Passata 3 — Arricchimento semantico (LLM)**
Documenti, PDF, immagini vengono analizzati da un backend configurabile (Claude,
Gemini, OpenAI, Ollama, vLLM). Questo è l'unico punto con costo API.

**Output:**
- Nodi: entità codice + concetti doc + rationale design
- Archi: tipati come `EXTRACTED` (trovato), `INFERRED` (con score di confidenza),
  `AMBIGUOUS` (da revisionare)
- Community detection: algoritmo di Leiden (cluster semantici senza embeddings,
  senza vector DB — similarità = vicinanza nel grafo)
- Formati: `graph.json` (queryabile), `graph.html` (viz force-directed),
  `GRAPH_REPORT.md`

**Esempio dimensionale (repo MemMachine, dataset benchmark):**
7.441 nodi, 12.355 archi, 930 community. Setup iniziale: ~1.4M token in + 247k out
(costo unico). Payback: ~240 query medie.

### Come riduce i token al riavvio

Due meccanismi distinti:

**A. SessionStart hook (~150 token)**
Al lancio di una nuova chat, se esiste almeno un grafo, viene iniettata una "cheatsheet"
di ~150 token che elenca i comandi disponibili (graphify CLI o MCP tool). Se nessun grafo
esiste: zero overhead, hook silenzioso.

**B. PreToolUse hook (intercettazione grep/find)**
Quando l'agente sta per lanciare grep/find/glob, il hook intercetta, interroga il grafo
locale (JSON, sub-millisecondo), e restituisce i nodi rilevanti inline. Il grep non parte
se il grafo risponde. Routing per priorità: (1) grafo locale, (2) grafo cross-repo,
(3) registry globale.

**Subgraph selection — BFS con token budget:**
`graphify query "concetto" --budget 1500` fa BFS da depth=2 dal/i nodo/i corrispondente/i.
Budget default: 2000 token. Risultati: 87–378 nodi a seconda della specificità della query.
Query locali (entry point) → 713x reduction; query traversali (autenticazione) → 49x.
Media benchmark: 79x reduction (corpus naive ~496K token → media per query ~6.2K token).

### Stack e dipendenze

Python 3.10+, uv o pipx per l'install. Extra opzionali: `[office]` (PDF/Word), `[mcp]`
(MCP server), `[neo4j]` / `[falkordb]` (export graph a DB esterno), `[video]`.
Integrazione con Claude Code via `.claude/skills/graphify/` (path già scansionato da CC
senza configurazione manuale).

---

## 3. Confronto con apparato-B della navicella

### Cosa ha già l'apparato-B

| Componente | Funzione | Limite attuale |
|---|---|---|
| `memoria-cerca.py` | Progressive disclosure: mappa compatta (nome+desc ~14KB/100 file) poi `--dettaglio <path>` | Keyword scoring flat (stem a 4 caratteri), nessuna struttura a grafo, nessuna relazione fra file |
| `comprimi.py` | Compressione Haiku non-distruttiva o sintesi lossy per handoff | Riduce dimensione file, non riduce il problema "quale file caricare" |
| Frontiera aperta | Iniezione mappa a SessionStart invece del contesto pieno | Non implementata: `--mappa` già esiste ma non è hookato al SessionStart di CC |

### Tabella di confronto Graphify vs apparato-B

| Dimensione | Graphify | Apparato-B nostro |
|---|---|---|
| **Struttura dati** | Grafo tipato (nodi+archi con provenance EXTRACTED/INFERRED) | Flat list di file MD con keyword scoring |
| **Selezione sottocontesto** | BFS con token budget configurabile | Top-N per score keyword |
| **Token a SessionStart** | ~150 (cheatsheet strumenti) | 0 (non hookato) o ~14KB (mappa piena) |
| **Costo costruzione** | Alto una tantum (1.4M token per repo grande) | Zero (costruito a runtime, stateless) |
| **Relazioni fra documenti** | Esplicite: archi tipati tra nodi | Nessuna: ogni file è indipendente |
| **Community/clustering** | Leiden algorithm, automatico | Manuale (struttura cartelle L1-L5) |
| **Dominio** | Codice + docs + PDF + media | Memory files MD della navicella |
| **Costo infrastruttura** | pip install + passata LLM iniziale | Zero dipendenze esterne |
| **Manutenzione** | Git hook per rebuild incrementale | Stateless, nessuna manutenzione |
| **Adattabilità al contesto navicella** | Overbuilt per ~100 file MD; più utile su plancia/ | Costruito su misura, richiede estensione |

**Verdetto:** non è un doppione. L'apparato-B è memory-first (file MD, L1-L5), Graphify
è codebase-first (codice, schemi, doc strutturati). L'overlap reale è nel trattamento dei
file MD/PDF — Graphify li gestisce, ma con un overhead di setup sproporzionato per 50-100
file. Graphify diventa interessante se il perimetro si allarga a `plancia/` (backend
Python, routers, models) dove l'AST locale di tree-sitter darebbe un grafo di dipendenze
codice senza costo API.

---

## 4. Adattabilità alla navicella — spirito schiusura

La schiusura dice "non droppare le repo, tradurle native." Ciò che si può tradurre:

### A. Pattern SessionStart da 150 token (alta priorità, bassa difficoltà)
La frontiera aperta "iniezione mappa a SessionStart" ha già il meccanismo in `--mappa`,
manca solo il hook. Graphify mostra che il formato ottimale non è la mappa piena (~14KB)
ma una cheatsheet ultra-compatta (~150 token) che dice "ecco cosa puoi cercare e come."
Traduzione nativa: `memoria-cerca.py --cheatsheet` (nuova modalità) che stampa una testa
di ~100-150 token con sole categorie e conteggio file, più il comando da usare per
approfondire. Da hookare al SessionStart di CC.

### B. Token budget nel retrieval (media priorità, media difficoltà)
La logica BFS con budget è più sofisticata del top-N keyword, ma il principio è
trasportabile: invece di restituire top-8 voci per score, `memoria-cerca.py --query`
potrebbe avere un `--budget TOKEN` che accumula voci finché non supera la soglia,
permettendo a Mnemosyne di specificare quanto contesto vuole senza contare manualmente.

### C. Tipizzazione degli archi come modello concettuale (bassa priorità, alto valore a lungo termine)
La distinzione EXTRACTED/INFERRED/AMBIGUOUS è rilevante per i file di memoria: alcune
informazioni sono esplicite (Giuseppe ha detto X), altre inferite dal Capitano (pattern
comportamentale Z). Oggi la distinzione esiste solo in prosa. Traduzione nativa: tag
opzionali nel frontmatter dei file di memoria (es. `source: stated` / `source: inferred`).
Non richiede codice — è un protocollo di scrittura.

### D. Graphify su `plancia/` (opportunità futura, non urgente)
`plancia/backend/` ha già una struttura sufficientemente ricca (routers, models, websocket,
event bus) per cui un grafo AST sarebbe utile. Il costo iniziale (~1.4M token per una repo
grande) si ammortizza su progetti longevi. Da valutare quando plancia sarà in produzione
attiva.

### Cosa NON tradurre
- La passata LLM di arricchimento semantico: `comprimi.py` con Haiku è già il nostro
  equivalente minimale; duplicare su Graphify aggiungerebbe dipendenza esterna senza
  guadagno per file MD.
- Il formato JSON graph + HTML viz: overbuilt per la memoria navicella. Il valore è
  nella logica di traversal, non nel formato di storage.
- Leiden community detection: già simulato dalla struttura cartelle L1-L5 + naming
  convention. Automatizzarlo avrebbe ROI negativo per la scala attuale.

---

## Fonti

- https://github.com/Graphify-Labs/graphify
- https://stevescargall.com/blog/2026/05/graphify--memmachine-79-token-reduction-zero-vector-database/
- https://rajeevpentyala.com/2026/06/28/graphify-quick-start-reduce-token-usage-in-coding-agents/
- https://dev.to/mir_mursalin_ankur/graphify-code-review-graph-build-a-self-updating-knowledge-graph-for-claude-code-and-other-ai-j1m
- https://www.starlingelevate.com/blog/graphify-reducing-ai-token-costs-with-knowledge-graphs

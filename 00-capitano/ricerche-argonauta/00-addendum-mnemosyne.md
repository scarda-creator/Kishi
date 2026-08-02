---
type: addendum
allegato-a: 00-capitano/mandato-ricerca-jarvis-2026-07-31.md
autore: Mnemosyne (Capitano)
data: 2026-07-31
---

# Addendum al mandato Jarvis — correzione di stato e decima domanda

Il mandato è stato scritto da un'analisi esterna che ha fotografato il disco il
31 luglio. Fra la scrittura e il lancio, Giuseppe ha chiuso un pezzo che il mandato
dà per aperto. Questo addendum corregge lo stato e aggiunge una domanda.
**Ha lo stesso peso del mandato: leggilo prima di cercare.**

---

## A. Correzione di stato — il riversamento del grafo è FATTO

Il mandato non lo sa. Sul disco, al 31 luglio:

- `00-capitano/scripts/riversamento/riversa.py` (28/7) riversa la navicella su un repo
  GitHub privato: L1–L4 in chiaro, L5 cifrato (`L5.enc`), code di apprendimento cifrate
  (`coda.enc`) — Argon2id + XChaCha20-Poly1305, passphrase da `getpass`, mai su disco.
- Il TODO che il file stesso dichiarava («grafo: aggancio da collegare») **è stato chiuso**:
  `grafo_step()` invoca `anima-grafo.py` e produce sul remoto `grafo.json` — il grafo
  **completo**, dove i nodi riservati (L5 + code) sono presenti come **struttura** ma
  **anonimizzati nell'etichetta** — più `mappa-grafo.enc`, la corrispondenza
  etichetta→nome-vero, cifrata.
- `anima/anima-dati.js` (61 KB) rigenerato il 31/7. La versione locale contiene la forma
  di L5 in chiaro ed è in EXCLUDE: non esce mai dal PC.

Conseguenze per le tue ricerche, da tenere presenti:

- **D3** — la navicella non ha solo un indice piatto: ha un grafo di memoria a tre legami
  (citazione, risonanza lessicale, sangue/cartella) su ~133 documenti e ~1010 archi, ed è
  ora replicato fuori dal PC. Giudica i candidati anche su *cosa aggiungono a un grafo che
  già esiste*, non solo su *cosa sostituiscono di un archivio di file*.
- **D5 / D7** — il gate-privacy non è più «niente esce dal computer». Ora esce qualcosa, con
  regole precise. La domanda giusta non è più «locale sì/no», è «cosa esce e in che forma».

## B. D10 — il grafo pubblicato: cosa abilita, e cosa espone

Questa domanda è mia, non del mandato esterno. Ha due metà, entrambe obbligatorie.

**Metà 1 — cosa fa un grafo di memoria che un indice non fa.** Cerchi sistemi che
*ragionano* sul grafo invece di limitarsi a recuperare per somiglianza: GraphRAG e le sue
critiche, **HippoRAG / HippoRAG 2** (richiamo alla ippocampo, personalized PageRank),
**Zep / Graphiti** (grafo temporale: i fatti hanno validità nel tempo, invecchiano e
vengono invalidati), **A-MEM**, community detection applicata alla memoria, e il traversal
multi-hop come sostituto della ricerca semantica. Conta come risposta se dici quale
**operazione di ragionamento** il grafo rende possibile e che oggi la navicella non fa —
non «migliora il recupero», ma l'operazione precisa, con il costo per query.

**Metà 2 — verifica ostile sull'anonimizzazione strutturale.** Sul remoto i nodi sensibili
hanno etichetta anonima ma **struttura completa**: grado, vicinato, posizione nel grafo,
appartenenza alla famiglia «subconscio». Cerca la letteratura sulla **de-anonimizzazione di
grafi** (Narayanan & Shmatikov e successori, seed-based re-identification, attacchi su
structural anonymity, k-anonymity e differential privacy su grafi) e rispondi a una domanda
sola, senza addolcirla: **un attaccante che ottiene `grafo.json` senza la chiave, può
ricostruire quali documenti sono L5 e di cosa parlano, usando la sola topologia più il
materiale in chiaro dello stesso repo?** Se la risposta è sì o «probabilmente», è il
risultato più importante di tutta la ricerca e va scritto in cima al file.

Non proporre la correzione — il perimetro dell'articolo 6 vale anche qui. Riporta il fatto.

## C. Vincolo di realtà su tutte le domande

Il mandato ti chiede di misurare e non stimare. Aggiungo il rovescio: **non riportare come
mancante ciò che esiste**. Prima di scrivere «la navicella non ha X», verifica sul disco.
Il sistema è cresciuto più in fretta della sua documentazione — è esattamente il buco D6 —
e il mandato che stai eseguendo ne è già stato vittima una volta, su questo grafo.

Deliverable di D10: `00-capitano/ricerche-argonauta/jarvis-D10-grafo-pubblicato.md`,
stessa forma degli altri.

## D. D11 — l'inventario dei procedimenti: cosa doveva fare, cosa fa davvero

Domanda chiesta da Giuseppe il 31 luglio, e non è ricerca esterna: è un **audit interno**.
Nasce da una sua frase, che è il criterio con cui va giudicata la risposta:

> «Tutto il processo di creazione della navicella ho sempre tenuto come pilastro
> fondamentale il non oblio e il continuo migliorare della navicella su sé stessa. Io ho
> bisogno sempre di un modo in cui tutto quello che costruisco deve funzionare. Quando
> implemento un processo e poi dopo settimane mi rendo conto che viene totalmente ignorato
> per un singolo errore di cui non sono mai stato messo a corrente, è uno spreco.»

Il caso che l'ha innescata, misurato oggi: tutti e otto gli agenti v2 erano privi del campo
`name` nel frontmatter — obbligatorio per documentazione ufficiale. Claude Code non li ha
mai caricati e, scansionando ricorsivamente, ha esposto al loro posto i sette agenti v1
archiviati, che il campo ce l'avevano. Per sei settimane la costituzione ha descritto
un'architettura che non girava, e nessuno l'ha segnalato perché nulla lo controllava.

**Cosa devi produrre.** L'inventario esaustivo dei **procedimenti** della navicella —
protocolli in `00-capitano/protocolli/`, comandi in `.claude/commands/`, hook in
`.claude/settings.json` e `.claude/hooks/`, meccanismi automatici dichiarati nelle spec
(promozione di memoria, cattura, istinti, riemersione L5, intake, oroboro, riepiloghi).
Per **ognuno**, quattro colonne e nessuna scorciatoia:

1. **Obiettivo dichiarato** — citato dal file che lo dichiara, con il path. Non parafrasato.
2. **Cosa fa davvero** — misurato sul disco: esiste l'output che dovrebbe produrre? quante
   volte è stato prodotto? qual è la data dell'ultimo? Numeri, non impressioni.
3. **Verdetto** — una fra: `funziona` / `funziona a metà` / `mai partito` /
   `parte ma nessuno legge l'output` / `rotto per causa tecnica`. Se è rotto per causa
   tecnica, **trova la causa**, come è stata trovata quella del campo `name`.
4. **Può funzionare, e come** — se il meccanismo è realizzabile così com'è concepito, e cosa
   servirebbe perché parta. Se **non** può funzionare per come è concepito, dillo: è il
   risultato più utile, perché evita di ripararlo per la terza volta.

**Criterio di accettazione.** Un procedimento marcato `funziona` senza un file di output
con una data non è verificato: riclassificalo. Il mandato dice «misurare, non stimare»; qui
misurare significa `ls` e conteggi, non lettura del testo che descrive l'intenzione.

**Confine.** Vale l'articolo 6: rilevi e spieghi, **non proponi revisioni** delle cementate
e non modifichi nulla fuori dal tuo file. La riparazione è di Dedalo e di Giuseppe.

Deliverable: `00-capitano/ricerche-argonauta/jarvis-D11-inventario-procedimenti.md`.

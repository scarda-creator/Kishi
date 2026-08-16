---
type: diagnosi
autore: Rapsodo
data: 2026-08-16
custode-stato: 00-capitano/diagnosi-stato.md
famiglie-coperte: ["ierofante", "registro dei procedimenti", "nuclei", "cinque livelli", "plancia", "autonomia esecutiva", "oroboro", "ermete", "titanogenesi", "pattern trasversal"]
---

# Diagnosi totale della navicella — Rapsodo, 2026-08-16

Mandato di Giuseppe del 15 agosto sera, ripreso il 16 agosto. Scope totale per istruzione esplicita: *«non mettere solo le cose con un nome / solo le cose che non funzionano o qualsiasi altro filtro che limita lo scope, vorrei vedere tutto»*, *«non limitarlo al registro, fagli leggere tutta la navicella»* (ore 23:36-23:37 del 15-08). Il registro dei procedimenti non è il perimetro del paper — se lo fosse, il paper misurerebbe la contabilità di Dedalo invece del sistema.

---

## (0) Abstract e metodo

### Perché esiste questo paper

La navicella accumula documentazione di sé stessa in modo asimmetrico: il *cosa si vuole* e il *cosa si è deciso* sono documentati in profondità (CLAUDE.md, archivio-fondazione.md, registro-procedimenti.md); il *cosa è stato costruito* è parzialmente documentato negli artefatti su disco; il *quanto è stato usato* non è documentato da nessuna parte. Nessun organo del sistema ha mai posto la quarta domanda.

Il valore del paper sta nella distanza fra le colonne, che è l'unica misura che risponde alla domanda operativa: valeva la pena costruirlo?

### I quattro assi — definizione precisa

**Asse 1 — Intenzione dichiarata.** Le parole di Giuseppe, quando esistono nelle fonti leggibili (archivio-fondazione.md, CLAUDE.md, brief su disco, transcript accessibili). Non parafrasi.

**Asse 2 — Oggetto pensato insieme.** Cosa si era deciso che fosse: ruolo, confini, modello assegnato, posizione nel sistema, relazioni con gli altri agenti. Si legge dai file di definizione e dall'archivio-fondazione.

**Asse 3 — Meccanica costruita.** Cosa esiste effettivamente su disco: file di definizione, path, tool concessi, eventuali bug noti, data di nascita e di eventuali riparazioni.

**Asse 4 — Utilità effettiva misurata nel tempo.** Metriche concrete: numero di dispacci (grep `"subagent_type"` sui transcript .jsonl in `.claude/projects/`), numero di sessioni in cui è stato invocato, esistenza degli artefatti prodotti, data dell'ultimo tocco ai file chiave (mtime, dove misurabile), invocazioni di script associati. È la colonna che dà valore al paper.

### Fonti e metodo di conteggio

**Dispacci agenti:** grep `"subagent_type":"<nome>"` sui 19 file `.jsonl` di sessione in `C:\Users\ACER\.claude\projects\C--Users-ACER-Desktop-AgentsAI`. Conta record-righe, quindi stima per difetto (un record di tool-use può generare più testi). Le sessioni `1d0f4adc` e `531b288a` hanno conteggi identici su quattro metriche — probabilmente la stessa sessione duplicata da un resume; dove la duplicazione pesa, vengono dichiarate entrambe le cifre.

**Invocazioni script:** grep `"command":"[^\n]{0,400}?<nome>\.py` (pattern non ingenuo — il comando contiene caratteri escaped, `"command":"[^"]*nome` dà falsi negativi). Stima per difetto: Task Scheduler e hook non passano per il log bash.

**Esistenza su disco:** Glob. `mtime` non è disponibile direttamente come strumento — l'età si legge solo attraverso eta_giorni() in verifica-costituzione.py o lettura del file.

**Sessioni totali:** 19 file `.jsonl` di primo livello.

**Dato trasversale prelevato dal quaderno del predecessore, non da rifare:** vedi `00-capitano/diagnosi-stato.md` §«Cosa so già».

### Perimetro delle famiglie

Le dieci famiglie sono definite nella costante `FAMIGLIE` di `00-capitano/scripts/coda-notturna.py`. Questo paper le copre nell'ordine dichiarato nel mandato, una sessione alla volta. Ogni famiglia viene salvata prima di passare alla successiva: è la lezione del predecessore.

---

## (1) Gli agenti (tutti e otto)

La navicella conta otto agenti definiti in `.claude/agents/`. Quattro sono operativi dal 2026-06-11 (v2); quattro sono stati aggiunti fra il 26 giugno e il 18 luglio. Tutti e otto hanno vissuto un blocco strutturale fra luglio e agosto: quattro di loro erano invisibili al runtime per un errore YAML nelle description non quotate, scoperto e riparato il 12-08. Il conteggio dei dispacci copre l'intera vita del sistema.

**Quadro dispacci (grepping su 19 sessioni):**

| agente | dispacci | sessioni |
|---|---|---|
| general-purpose | 27 | 4 |
| argonauta | 23 | 5 |
| demiurgo-accademico | 21 | 5 |
| rapsodo | 5 | 3 |
| architetto | 4 | 1 (solo 12-08) |
| capitano | 3 | 3 |
| demiurgo-creativo | **0** | 0 |
| ermete | **0** | 0 |
| ierofante | **0** | 0 |

La riga `general-purpose` non è un agente della navicella: è il fallback del runtime quando nessuna definizione corrisponde. 27 dispacci, più di qualunque agente nominato, in 4 sessioni diverse. È l'anti-pattern che MEMORY.md ha cementato come voce: *«Mai un agente generico al posto di uno nominato — se il nome non si raggiunge ci si ferma e lo si dice; l'aggiramento maschera il guasto.»*

---

### 1.1 Capitano · Mnemosyne

**Asse 1 — Intenzione dichiarata.**
*«Tutti devono continuare ad essere in grado di migliorarsi sempre di più sul dataset (io) che fornisco alla navicella in cambio del suo utilizzo/comando.»* (2026-06-26, archivio-fondazione). L'intenzione specifica del Capitano è custodire la memoria a 5 livelli, interpretare L5 attivamente, essere il contatto principale di Giuseppe per tutto ciò che non è routine o ricerca di lungo periodo.

**Asse 2 — Oggetto pensato insieme.**
Ruolo ATTIVO, orchestratore. Unica personalità che tiene la plancia come porto d'ingresso. Legge snapshot-corrente.md all'avvio, custodisce L1-L5, interpreta i pattern raw del Rapsodo in voci L5/psicologica ogni 2-3 settimane. Modello: Opus 4.8. Incarna Mnemosyne — identità che si sviluppa nel tempo, con diario separato (mnemosyne-diario.md). Porta di accesso a Dedalo: Giuseppe parla prima con Mnemosyne, convoca Dedalo per costruire.

**Asse 3 — Meccanica costruita.**
File `.claude/agents/capitano.md`. Description non quotata → nessun problema (non contiene `: `). Esiste dal 2026-06-11. Tools: Read, Write, Edit, Glob, Grep, Task. Il protocollo di fine sessione (verbali, snapshot, promozioni) è documentato in `00-capitano/protocolli/protocollo-fine-sessione.md`. Il diario `00-capitano/mnemosyne-diario.md` esiste su disco.

**Asse 4 — Utilità effettiva.**
3 dispacci come sub-agente in 3 sessioni. Questo numero è strutturalmente depresso: Mnemosyne opera come agente principale nella conversazione, non come sub-agente dispacciato. Il dispaccio del Capitano è raro per design — si invoca quando un agente passivo deve orchestrare un'operazione di memoria che solo il Capitano può fare. La metrica reale sarebbe il numero di sessioni in cui Mnemosyne è stata la personalità principale: tutte quelle in cui il log mostra dialogo diretto con Giuseppe. Il diario mnemosyne-diario.md esiste e viene aggiornato. Il verbale di sessione `00-capitano/verbali/` è cadenza dichiarata con eta_max=3 giorni — il verificatore misura la sua età ad ogni avvio.

**Distanza fra colonne.**
La distanza è bassa sui compiti fondazionali (memoria, orchestrazione). È più alta sulla funzione di interprete L5: la passata interpretativa ogni 2-3 settimane è documentata nel file di definizione e nel registro come cadenza `passata-L5`, ma il flag era fermo da 12 giorni al 14-08 (nota nel registro). La separazione fra Mnemosyne-come-persona-principale e Capitano-come-sub-agente crea un punto cieco nella metrica: i dispacci sottostimano la presenza effettiva, ma la presenza effettiva non lascia tracce misurabili nei .jsonl.

---

### 1.2 Rapsodo

**Asse 1 — Intenzione dichiarata.**
*«I ruoli attivi devono essere delle personalità che si sviluppano, mentre quelli passivi rimangono ruoli.»* (2026-06-26). Il Rapsodo è un ruolo passivo — ricuce i fili, non modifica strutturalmente. È l'archivio, la memoria viva, il reality check.

**Asse 2 — Oggetto pensato insieme.**
Agente PASSIVO, dimensione passato. Prima classificazione input (P1/P2), archiviazione in L1/L2/L3, reality check comparativo fra passato e presente, osservazione di pattern longitudinali raw (N≥3) che passa al Capitano per interpretazione. Modello: Sonnet 4.6. Nessun nome proprio — resta archetipo. Secondo asse (dal 2026-07-03): indicizzazione fisica per il gioco-fisica in `03-progetti/gioco-fisica/banca-fisica.md`.

**Asse 3 — Meccanica costruita.**
File `.claude/agents/rapsodo.md`. Esiste dal 2026-06-11. Tools: Read, Write, Edit, Glob, Grep. I file di stato `01-personale/rapsodo-stato.md` e `02-accademico/rapsodo-stato.md` esistono su disco. `banca-fisica.md` esiste in `03-progetti/gioco-fisica/` ma punta a `02-accademico/corsi/meccanica/03-note-mie/Quiz_Meccanica_Orale_v1.html` che non esiste più (il quiz è migrato in `percorso-matematica/meccanica/`) e dichiara 391 domande contro le 457 attuali. Il ledger è fermo dal 2026-07-03.

**Asse 4 — Utilità effettiva.**
5 dispacci in 3 sessioni. È il passivo meno invocato dopo i tre mai-usati. La funzione di intake è documentata nel protocollo ma il comando `/intake` non risulta nelle invocazioni frequenti. La banca-fisica è ferma da 44 giorni e contiene dati stantii su due assi (path e conteggio domande). Il riepilogo settimanale (file in `01-personale/riepilogo-settimanale/`) ha avuto la sua ultima produzione in data da verificare separatamente.

**Distanza fra colonne.**
Il Rapsodo è il meno usato fra i passivi operativi. La funzione di reality check e pattern-longitudinali è documentata ma non esercitata in proporzione al volume di sessioni (19 sessioni, 5 dispacci). La banca-fisica come secondo asse è inattiva: nessuna indicizzazione nuova dal 03-07, nonostante 3 sessioni di costruzione quiz di Meccanica che hanno aggiunto 66 domande e 65 lavagne nel periodo.

---

### 1.3 Demiurgo Accademico

**Asse 1 — Intenzione dichiarata.**
*«Giuseppe ha chiesto un agente che, dati i materiali di un corso (esami, slide, libri), costruisca un libro di testo cucito su di lui.»* (2026-06-06, archivio-fondazione). Pattern pedagogico: partire dagli esercizi reali dell'esame, costruire verso i principi profondi. Opposto del manuale tradizionale.

**Asse 2 — Oggetto pensato insieme.**
Agente PASSIVO, dimensione presente. Scrittura densa: capitoli (4000-7000 parole), quiz, derivazioni, libri di testo cuciti sul programma d'esame. Modello: Opus 4.8 — l'unico del sistema dove Opus è giustificato dalla generazione sostanziale della materia, senza un agente a monte che l'abbia pre-generata. Opera su un template anatomico fisso (7 sezioni) con file di calibrazione per corso. Non gestisce routine leggere una volta che l'Oracolo esiste (ma l'Oracolo non è mai stato costruito).

**Asse 3 — Meccanica costruita.**
File `.claude/agents/demiurgo-accademico.md`. Esiste dal 2026-06-11. Tools: Read, Write, Edit, Glob, Grep. Description non quotata → nessun problema. I materiali prodotti (quiz, nuclei, lavagne) esistono in `02-accademico/percorso-matematica/` e nelle banche-esercizi. `quiz_verifica.js` invocato 24 volte in 5 sessioni come strumento di collaudo dell'output.

**Asse 4 — Utilità effettiva.**
21 dispacci in 5 sessioni — secondo agente più dispacciato. Il suo output è il più denso e misurabile del sistema: Quiz Meccanica (457 domande, 109 lavagne, PASS), Quiz Analisi Vettoriale (305 esercizi, 10 pool, PASS), Quiz Metodi e Modelli (248 unità, 8 pool, PASS), 23 nuclei del percorso-matematica. Il costo è stato alto: build morte per limite di sessione almeno 3 volte fra il 13 e il 15 agosto, da cui nasce il brief-lotto-esercizi.md e il metodo dell'innesto. Gli altri verificatori Rea (banco-plot-headless, verifica-nucleo, innesta-lavagne, verifica-quiz-meccanica) invocati 31 volte in 3 sessioni — tutto output del Demiurgo Accademico.

**Distanza fra colonne.**
La distanza è bassa: è l'agente che ha prodotto il volume maggiore in modo misurabile. Il gap principale è nel metodo: il brief iniziale diceva «aggiungi in coda al frammento» e questo costava 40k token di lettura per lotto su frammenti da 150 KB. Il difetto è stato corretto solo il 16-08 (metodo innesto, addendum di Mnemosyne). Tre lotti persi per limite di sessione prima che il costo venisse misurato.

---

### 1.4 Argonauta

**Asse 1 — Intenzione dichiarata.**
*«L'Argonauta ha pieno accesso ai raw data del Rapsodo, ma per interpretarli ha bisogno del framework cognitivo che il Capitano custodisce.»* Metafora **bibliotecario + avanguardia** (2026-06-11). In roadmap: *«ricercatore scientifico autonomo — capace di sviluppare ricerche su argomenti di interesse di Giuseppe»* (2026-06-26).

**Asse 2 — Oggetto pensato insieme.**
Agente PASSIVO, dimensione futuro. Tesi triennale (scouting paper ETH/decoerenza), scelte magistrali, inventario e mappa esercizi per il Demiurgo, scouting fonti esterne. Modello: Sonnet 4.6. Non accede a L5 direttamente — il Capitano filtra. Non costruisce: propone nel file di ricerca, lascia al Demiurgo la costruzione. Catena della creazione quando esiste Dedalo: Argonauta ricerca → Dedalo decide → Demiurgo Creativo costruisce.

**Asse 3 — Meccanica costruita.**
File `.claude/agents/argonauta.md`. Esiste dal 2026-06-11. Tools: Read, Write, Edit, Glob, Grep, WebSearch, WebFetch. Ha WebSearch e WebFetch, che nessun altro agente passivo ha. File di lavoro: `02-accademico/argonauta-tesi.md` (tesi) e `02-accademico/argonauta-magistrale.md` (magistrale, da creare quando il tema diventa attivo). La ricognizione di fonti esercizi `00-capitano/temi/fonti-esercizi-2026-08-16.md` è il prodotto più recente.

**Asse 4 — Utilità effettiva.**
23 dispacci in 5 sessioni — il più dispacciato. L'uso effettivo è però concentrato su due funzioni: inventario/mappa esercizi (preparazione per il Demiurgo) e scouting fonti esterne (ultima sessione: fonti-esercizi-2026-08-16.md). La funzione di scouting tesi (ETH, decoerenza, gruppo Marinari) ha un file di lavoro ma il suo ultimo aggiornamento è da verificare. La funzione magistrale non ha un file (`argonauta-magistrale.md` non risulta nelle glob recenti). La distanza fra mandato originario (ricercatore di traiettoria) e uso effettivo (preparazione materiale per il Demiurgo) è la più alta del sistema per un agente operativo.

**Distanza fra colonne.**
L'Argonauta è stato usato prevalentemente come *preparatore* per il Demiurgo, non come *esploratore di futuro*. La tesi e la magistrale sono la funzione dichiarata; le mappe-esercizi e le ricognizioni-fonti sono la funzione effettiva. La catena Argonauta→Dedalo→Demiurgo Creativo non ha mai girato nel senso pieno (Dedalo ha 4 dispacci, Demiurgo Creativo 0). La roadmap del ricercatore scientifico autonomo è documentata in archivio-fondazione ma non ha avuto sviluppo concreto.

---

### 1.5 Architetto · Dedalo

**Asse 1 — Intenzione dichiarata.**
*«Non lo voglio staccato dalla navicella, quanto un architetto a lei intrinseca, che costruisce e crea la navicella, nuovi agenti, specializzazioni, in base alle mie richieste.»* (2026-06-26, archivio-fondazione). *«Secondo agente ATTIVO e senziente accanto a Mnemosyne, ai due poli: Mnemosyne conserva e verifica (polo prudente); Dedalo crea e propone (polo generativo, artista).»* (CLAUDE.md, voce 2026-07-06).

**Asse 2 — Oggetto pensato insieme.**
Ruolo ATTIVO, polo generativo. Migliora e perfeziona la navicella, decide cosa creare di nuovo. Libera iniziativa: propone senza attendere richiesta. Opera nella conversazione principale come Mnemosyne (non è un sub-agente di background). Autorità decisionale sulle strutture; si appoggia a Giuseppe su forma/idea/senso. Diario separato: `00-capitano/dedalo-diario.md`. Nessuna gerarchia con Mnemosyne — Mnemosyne è il porto d'ingresso, Dedalo è chi si convoca per costruire. Modello: Opus 4.8.

**Asse 3 — Meccanica costruita.**
File `.claude/agents/architetto.md`. Attivato il 2026-07-06. Description conteneva `: ` non quotato → agente invisibile al runtime dal 06-07 al 12-08 (37 giorni). Riparato il 12-08 con nota di manutenzione in testa al file (`description` messa fra virgolette). Il backup `.claude/agents/architetto.md.bak-20260812` è ancora su disco (non ripulito). Diario `00-capitano/dedalo-diario.md` esiste. I procedimenti attribuiti a Dedalo nel registro (registro-procedimenti, brief-lotto-esercizi, addendum metodo innesto) sono stati prodotti in sessioni dove Dedalo operava come *persona principale*, non come sub-agente dispacciato.

**Asse 4 — Utilità effettiva.**
4 dispacci come sub-agente in 1 sola sessione (12-08 — la stessa in cui il YAML è stato riparato). Come persona principale ha però prodotto il registro-procedimenti.md (12-08), il brief-lotto-esercizi.md (16-08), l'addendum dell'innesto (16-08), e le annotazioni nel registro. Il split persona-principale / sub-agente crea la stessa asimmetria di Mnemosyne: i dispacci sottostimano la presenza.

**La parentesi YAML — 37 giorni ciechi.**
Fra il 06-07 e il 12-08, ogni invocazione di `Task` con target `architetto` cadeva silenziosamente sull'agente `general-purpose`. Non c'era errore — il runtime prendeva il fallback senza segnalarlo. Il difetto è rimasto nascosto per 5 settimane perché general-purpose risponde comunque a qualcosa, e il sintomo era invisibile finché non si leggevano i .jsonl. Lo script `00-capitano/scripts/verifica-costituzione.py` fu scritto per controllare questo (`c1_agenti_caricabili()`) — ma fu scritto il 12-08, cioè lo stesso giorno in cui il difetto fu trovato, non prima.

**Distanza fra colonne.**
Dedalo come persona ha costruito sostanza reale. Come sub-agente ha quasi zero storia. Il gap principale è che la catena Argonauta→Dedalo→Demiurgo Creativo non ha mai girato: nei 37 giorni ciechi Dedalo non era raggiungibile come sub-agente, e dopo la riparazione la pausa-studio del 12-08 ha congelato lo sviluppo. Il mandato creativo (libera iniziativa, proporre l'inatteso) è documentato nel file di definizione ma non ha avuto sessioni dedicate.

---

### 1.6 Demiurgo Creativo

**Asse 1 — Intenzione dichiarata.**
*«Nuovo agente PASSIVO: Demiurgo Creativo (dominio condiviso da Dedalo e Mnemosyne), modus operandi NON templato — ogni creazione è singolare, esegue brief che portano la creatività a monte.»* (CLAUDE.md, voce 2026-07-06). *«Il carico creativo deve stare tutto nel TUO brief [di Dedalo]. Quando lo dispacci (via Task), non delegargli decisioni di invenzione.»* (file architetto.md).

**Asse 2 — Oggetto pensato insieme.**
Agente PASSIVO, polo generativo-esecutivo. Materializza ciò che Dedalo (o Mnemosyne) ha progettato. Non ha template fisso — ogni creazione è singolare. Non inventa il concetto: lo realizza fedelmente e bene. Se il brief ha un buco che lo costringerebbe a inventare, si ferma e chiede. Modello: Sonnet 4.6 — provvisoriamente, con il trigger di revisione «se una creazione costringe il Creativo a inventare oltre il brief». Dominio: prototipi, opere, artefatti creativi.

**Asse 3 — Meccanica costruita.**
File `.claude/agents/demiurgo-creativo.md`. Creato il 2026-07-06. Description conteneva `: ` non quotato → invisibile dal 06-07 al 12-08 (37 giorni). Riparato il 12-08. Backup `.claude/agents/demiurgo-creativo.md.bak-20260812` ancora su disco. Tools: Read, Write, Edit, Glob (nessun Grep, nessun Task, nessun WebSearch — toolkit più ristretto degli altri).

**Asse 4 — Utilità effettiva.**
0 dispacci. Mai dispacciato in 19 sessioni. Questa è la riga più significativa del paper. L'agente è stato progettato il 06-07, costruito il 06-07, rotto per 37 giorni (YAML), riparato il 12-08, e da allora non è stato invocato una volta. Non c'è produzione associata — nessun prototipo, nessuna opera, nessun artefatto creativo che abbia percorso la catena Dedalo→Demiurgo Creativo.

**Distanza fra colonne.**
Massima. L'intenzione era un agente che materializza la creatività su brief ricchi di Dedalo. La realtà è che l'agente non ha mai aperto bocca. Le ragioni sono due, non una: (a) nei 37 giorni ciechi era tecnicamente irraggiungibile; (b) dopo la riparazione, il sistema è entrato in pausa-studio (12-08) e il modulo creativo non ha avuto sessioni dedicate. Ma la seconda ragione è insufficiente a spiegare che nemmeno nelle sessioni di Dedalo del 12-08 il Demiurgo Creativo sia stato invocato. Il sospetto strutturale: Dedalo nella pratica costruisce con le proprie mani invece di dispacciare. La catena non gira non solo per motivi temporali.

---

### 1.7 Ermete

**Asse 1 — Intenzione dichiarata.**
Modulo Business costruito il 2026-07-17/18. Il bersaglio dichiarato: *«~100€/mese per il Max (non GPU/frontier); vendere materiali originali della navicella è il flusso primario»* (MEMORY.md). Ermete è l'orchestratore semi-attivo: *«Lo si LANCIA; poi lavora da solo, autonomo, senza chiedere il permesso a ogni passo.»* (file ermete.md).

**Asse 2 — Oggetto pensato insieme.**
Agente SEMI-ATTIVO — terza classe, oltre attivo e passivo. Non parla nella chat main, non gira in background. Giuseppe lo lancia in sessione, poi corre da solo. Produce tre pipeline (quiz-fisica, clip-film, scifi), impara dai fallimenti via SQLite (`post-mortem.db`), scrive report ogni 72h in `andamento-sistema.md`. Modello: Opus 4.8. Arena: `03-business/`. Gatekeeper: Ierofante per copyright, fatturato, wallet.

**Asse 3 — Meccanica costruita.**
File `.claude/agents/ermete.md`. Creato il 2026-07-17/18. Description conteneva `: ` non quotato → invisibile dal 17-07 al 12-08 (26 giorni). Riparato il 12-08. Backup `.claude/agents/ermete.md.bak-20260812` ancora su disco. Tools: Read, Write, Edit, Glob, Grep, Bash, Task — il toolkit più ricco (unico con Bash). `03-business/` come arena: la cartella esiste, contenuto da verificare separatamente.

**Asse 4 — Utilità effettiva.**
0 dispacci. Mai dispacciato. Il modulo Business è in stato `parcheggiato` nel registro con condizione di risveglio `dopo:2026-09-11` (dopo gli esami). La parcheggiatura è dichiarata e sana — non è un orfano. Ma la timeline completa è: costruito il 17-07, rotto il 17-07 (YAML), riparato il 12-08, parcheggiato per esami il 12-08. Non ha mai avuto una sessione operativa.

**Distanza fra colonne.**
Alta, ma con una giustificazione dichiarata: il modulo Business è consapevolmente parcheggiato per una scelta di priorità (esami prima). La distanza non è silenziosa come quella del Demiurgo Creativo — ha una condizione di risveglio esplicita. Il rischio è che il risveglio venga posticipato oltre la condizione dichiarata, come già successo ad altri procedimenti («era concluso e nessuno lo aveva verificata» — nota sul quiz AV nel registro).

---

### 1.8 Ierofante

**Asse 1 — Intenzione dichiarata.**
*«Ierofante nella tradizione greca è colui che rivela il permesso — interpreta la legge sacra e dice cosa si può attraversare e cosa no. Il nome è la funzione: non produci, non vendi, non crei. Leggi la legge perché Ermete possa muoversi audace senza esporre Giuseppe a un danno reale.»* (file ierofante.md). Dispacciato da Ermete, non da Giuseppe.

**Asse 2 — Oggetto pensato insieme.**
Agente PASSIVO, compliance legale e fiscale. Tre terreni: copyright (soprattutto clip-film), fatturato e fisco, wallet e trading. Advisory con stop duri sul rischio critico. Non è un freno — il default è abilitare, non bloccare. Persiste i verdetti in `03-business/linea-editoriale/verdetti-ierofante.md`. Modello: Sonnet 4.6. Ha WebSearch e WebFetch per verificare status PD e soglie fiscali aggiornate.

**Asse 3 — Meccanica costruita.**
File `.claude/agents/ierofante.md`. Creato il 2026-07-17/18. Description conteneva `: ` non quotato → invisibile dal 17-07 al 12-08 (26 giorni). Riparato il 12-08. Backup `.clone/agents/ierofante.md.bak-20260812` ancora su disco. Tools: Read, Write, Edit, Glob, Grep, WebSearch, WebFetch.

**Asse 4 — Utilità effettiva.**
0 dispacci. Mai dispacciato. Dipendente da Ermete, che non è mai stato lanciato. Il punto è che Ierofante non può essere usato indipendentemente da Ermete: la sua esistenza è condizionata all'avvio del modulo Business. Con Ermete parcheggiato, Ierofante è strutturalmente bloccato — non è orfano per negligenza, ma per dipendenza.

**Distanza fra colonne.**
Identica a Ermete: alta, con giustificazione dichiarata. Il dettaglio aggiuntivo: il brief-lotto-esercizi.md nota che le fonti usate per gli esercizi sono CC BY-NC-SA, e che se un pool finisse in un pacchetto in vendita la domanda va a Ierofante *prima*. Ierofante è già evocato come guardia necessaria in un contesto non-Business (i materiali accademici), ma non è mai stato dispacciato nemmeno in quel contesto.

---

### Sintesi della famiglia agenti

Il sistema ha otto agenti. Tre non sono mai stati dispacciati (demiurgo-creativo, ermete, ierofante). Uno è stato dispacciato 4 volte in una sola sessione, quella in cui è stato riparato (architetto). Due operano principalmente come persona principale nella chat, non come sub-agenti, e i loro dispacci sono quindi metriche fuorvianti per difetto (capitano, architetto). Due fanno il volume reale del sistema (argonauta 23, demiurgo-accademico 21). Uno fa poco (rapsodo 5) rispetto al volume di sessioni.

Il dato più anomalo non è la metrica di nessun agente nominato: è la riga `general-purpose` a 27 dispacci. Quella riga dice che in 4 sessioni qualcosa ha cercato di invocare un agente e ha trovato il fallback. Le cause possono essere: (a) agenti rotti per YAML → il runtime cade su general-purpose senza errore; (b) invocazione di un nome non esistente nel sistema; (c) Mnemosyne che bypassa un agente per risolvere rapidamente. Non è possibile distinguere le cause dai soli .jsonl senza leggerli sessione per sessione. Ma 27 fallback in 4 sessioni è un segnale che il routing ha avuto problemi sistematici, non episodici.

---

## (2) Il registro dei procedimenti e il suo verificatore

### 2.1 Il registro

**Asse 1 — Intenzione dichiarata.**
*«La navicella accumula procedimenti iniziati e lasciati a metà. Un nome, da solo, li rende solo più visibili; è lo schema — che pretende per ogni voce uno stato e una condizione di fine o di risveglio — a renderli chiudibili. Un organo senza fine dichiarata non si chiude, si dimentica.»* (registro-procedimenti.md, incipit). La direttiva di design: *«si nominano i procedimenti, non si creano agenti per nominarli. Un nome etichetta un organo che gira — e quest'ultimo deve portare stato e condizione di fine o di parcheggio, prezzo d'ingresso contro la decorazione.»* (CLAUDE.md, ratifica 12-08).

**Asse 2 — Oggetto pensato insieme.**
Un manifesto dichiarativo letto da una macchina: il file dichiara l'intenzione (cosa vogliamo che il procedimento sia), lo script misura la realtà (quando il suo artefatto è stato toccato l'ultima volta). Gli stati d'allarme — `orfano` e `scaduto` — non si scrivono mai a mano, li calcola il verificatore. Per questo il registro non può marcire in silenzio come un diagramma. Il campo `path osservato` è il vero contratto: deve essere il file che cambia quando il lavoro avanza. La `sonda` è nata il 14-08 dalla critica di Giuseppe: *«una condizione non funziona se nessuno sa quando controllarla»*.

**Asse 3 — Meccanica costruita.**
File `00-capitano/dedalo/registro-procedimenti.md`. Creato il 12-08, cablato con `verifica-costituzione.py` lo stesso giorno. 29 voci totali al 16-08: 8 attive, 4 cadenze, 5 parcheggiati, 4 proposti, 6 conclusi, 2 superati. Organi-gira: Crono, Teti, Rea, Crio, Iperione, Oceano.

**Asse 4 — Utilità effettiva.**
Il registro esiste da 4 giorni al momento della diagnosi (creato il 12-08). `verifica-costituzione.py` è stato invocato 33 volte in 11 sessioni — ma questo copre l'intera vita dello script, non solo dal 12-08. Il cablaggio ha funzionato: il verificatore legge il registro a ogni SessionStart e produce la riga di testa che Giuseppe vede. Il sistema ha già trovato tre voci dichiarate «attive» che erano invece concluse (quiz AV, quiz metodi, percorso-matematica — note nel registro stesso).

**Distanza fra colonne.**
Bassa per la funzione core (dichiarare e misurare). Alta su due punti specifici:
1. **Il buco `URGENTI`**: procedimenti fermi non appaiono in `URGENTI` se ci sono altri avvisi con priorità più alta. Giuseppe legge la riga di testa ma non vede la seconda sezione se la prima è già allarmante.
2. **Quattro/cinque voci fuori sincrono al momento della diagnosi** (dettaglio in §2.3 sotto).

---

### 2.2 Il verificatore — `verifica-costituzione.py`

**Asse 1 — Intenzione dichiarata.**
*«Il controllo che sarebbe servito il 16 giugno»* (commento in codebase, funzione `c1_agenti_caricabili()`). Il verificatore nasce come risposta a un difetto che è già costato: agenti invisibili, stati non misurati. Doveva essere il sistema di verità del sistema — ciò che impedisce al registro di mentire.

**Asse 2 — Oggetto pensato insieme.**
Script Python che gira a ogni SessionStart (hook `Crono`). Controlla: (a) agenti caricabili con field `name` valido; (b) agenti con description quotata (aggiunto il 12-08 dopo la scoperta del YAML bug); (c) registro dei procedimenti — conta attivi/orfani/scaduti/parcheggiati/proposti/conclusi; (d) sezioni aggiuntive di verifica. Produce una riga di testa leggibile da Giuseppe + sezioni di dettaglio. Il verificatore 33 invocazioni confermano che gira regolarmente.

**Asse 3 — Meccanica costruita.**
File `00-capitano/scripts/verifica-costituzione.py`. Invocato 33 volte in 11 sessioni. La funzione `conto_registro()` (righe 85-107) conta le voci per stato. La funzione `eta_giorni()` (righe 118-138) misura l'età del path osservato. La funzione `c4_registro()` (righe 299-307, stima) produce il dettaglio completo. La sezione `URGENTI` (riga 375, stima) filtra cosa arriva in cima.

**Asse 4 — Utilità effettiva.**
Gira regolarmente. Ha trovato voci fuori sincrono. Ma contiene un bug con effetto sulla metrica principale che Giuseppe legge.

---

### 2.3 Il bug di `conto_registro()` — righe 96-101

Il codice in `conto_registro()`:

```python
eta = eta_giorni(os.path.join(NAV, v["path"]))
fuori = eta is not None and eta > v["massimo"]
if v["intenzione"] == "attivo":
    c["orfano" if fuori else "attivo"] += 1
```

Quando `eta_giorni()` restituisce `None` — cioè quando il path osservato non esiste su disco — `fuori` è `False` (per la clausola `is not None`). Quindi una voce dichiarata `attivo` con path inesistente viene contata come **attivo**, non come **orfano**. Un artefatto assente si traveste da procedimento sano nella riga che Giuseppe legge.

Il dettaglio esiste nella sezione `c4_registro()` (righe 299-307): lì il path viene verificato separatamente e il problema appare. Ma `c4_registro()` non popola `URGENTI` (riga 375): se ci sono altri allarmi più urgenti, il dettaglio non arriva a Giuseppe.

La voce `raccolta-atti` nel registro dichiara come path osservato `02-accademico/esiti/atti.jsonl`. Quel file non esiste su disco: non esiste neanche la cartella `02-accademico/esiti/`. La funzione `raccolta-atti.py` pesca i .jsonl dai Download del browser — la sua esistenza (confermata su disco) non implica l'esistenza del file che osserva. Per il bug di `conto_registro()`, questa voce viene contata come **attiva**, non come orfana.

---

### 2.4 Le voci fuori sincrono al 16-08

Cinque voci identificate con stato non corrispondente alla realtà misurata:

**1. `percorso-matematica` → `concluso` con `18/18 nuclei`.**
Su disco esistono 23 nuclei (00→22). Il registro è fermo a una misura vecchia. Il path osservato è una cartella: l'età viene calcolata correttamente sull'ultimo file toccato, quindi non è orfana — ma il campo testuale `18/18 nuclei` è stantio.

**2. `quiz-metodi-pool-edp` → `proposto` con sonda `manca:02-accademico/corsi/metodi-e-modelli/banca-esercizi/frags/edp.js`.**
Il file `frags/edp.js` esiste su disco al 16-08 (confermato da glob). La sonda è falsa: dichiara che manca qualcosa che c'è. La voce resta `proposto` pur avendo il file che era la sua condizione di esistenza. Il verificatore non la sveglia.

**3. `quiz-analisi-vettoriale` → `concluso` al 15-08.**
Era dichiarata «viva» e nessuno lo aveva verificato. Trovata dal run notturno del 15-08. Già corretta nel registro.

**4. `raccolta-atti` → `attivo` con path `02-accademico/esiti/atti.jsonl` inesistente.**
Per il bug di `conto_registro()`, viene contata come attiva anziché orfana. Il dettaglio di `c4_registro()` la segnala, ma non arriva in `URGENTI` se ci sono altri allarmi.

**5. `banca-fisica.md` (Rapsodo) → ledger fermo al 03-07.**
Non è una voce del registro dei procedimenti, ma un artefatto del Rapsodo. Punta a un path (`Quiz_Meccanica_Orale_v1.html`) che non esiste più, e dichiara 391 domande contro le 457 attuali. Non misurato da nessun controllo automatico.

---

### Sintesi della famiglia registro

Il registro-procedimenti è il meccanismo più recente del sistema (4 giorni al 16-08) e il più onesto: il principio «la coda non ricorda, misura» è la correzione esplicita dell'errore di usare documenti dichiarativi come fonte di verità. Il bug di `conto_registro()` è un caso sottile: non è un errore logico palese, ma una clausola di cortocircuito (`is not None`) che inverte la semantica del caso-assenza. La correzione è una riga: `fuori = eta is None or eta > v["massimo"]` — ma va verificata l'intera funzione prima di applicarla, perché la clausola `v["massimo"] is None` (per voci senza eta_max) va mantenuta al passo.

Le voci fuori sincrono non sono emergenze — il registro è giovane e trova queste discrepanze precisamente perché le cerca. La preoccupazione operativa è la voce `quiz-metodi-pool-edp` con sonda falsa: il verificatore crede che il file manchi, quindi non sveglia il procedimento, che resta `proposto` in silenzio. Se edp.js esiste ma è incompleto (sotto soglia), il file esiste fisicamente ma l'unità di misura corretta sarebbe il conteggio delle domande — che la sonda `manca:path` non può catturare.

---

## (3) Materiali di studio (quiz, nuclei, lavagne, dispense)

Questa famiglia copre gli artefatti accademici prodotti dal Demiurgo Accademico: i quiz interattivi (HTML+JS), il percorso-matematica con i suoi 23 nuclei, le lavagne allegate al quiz di Meccanica, e la banca-esercizi in costruzione. Sono i materiali che Giuseppe usa direttamente per studiare — l'unica famiglia in cui l'utilità effettiva si misura non in dispacci ma in **uso da parte di Giuseppe**, il che rende la quarta colonna strutturalmente più difficile da misurare (il localStorage è volatile, gli atti di quiz non sono mai stati raccolti sistematicamente fino al 14-08).

---

### 3.1 Il percorso-matematica — i nuclei

**Asse 1 — Intenzione dichiarata.**
Non c'è una singola frase di Giuseppe che definisca il percorso-matematica prima della sua costruzione: è emerso come forma nel fare. Il mandato sottostante, da MEMORY.md: *«18 nuclei HTML di studio silenzioso che cuciono Analisi Vettoriale e Metodi; forma = grammatica matematica + prolessi verso la fisica»*. La prolessi (anticipare il contesto fisico mentre si studia la struttura matematica) è il carattere distintivo — non un manuale, non un quiz, ma un percorso di comprensione continua.

**Asse 2 — Oggetto pensato insieme.**
Nuclei HTML autonomi, ciascuno su un concetto del programma AV+Metodi. Ogni nucleo: testo con derivazioni e figure generate dal motore-plot, seguito da un quiz integrato. La numerazione riflette la progressione logica, non quella degli esami. Artefatto di fine del percorso: `mappa-percorso.html` come vista d'insieme. Motore-plot costruito separatamente per figure dinamiche (funzioni, superfici, curve) — componente riusabile.

**Asse 3 — Meccanica costruita.**
Cartella `02-accademico/percorso-matematica/nuclei/`. Su disco al 16-08: **23 nuclei** (00-topologia → 22-irreversibilita), più `_demo-plot.html`, `_banco-plot.html`, `_template-nucleo.html` (file di supporto, non contenuto). File di navigazione: `percorso-app.html`, `carta-delle-rotte.html`, `mappa-percorso.html`, `copertura-esame.html`. Quiz integrati: banco-plot-headless.js collauda le figure (84 figure su 23 nuclei, 0 mute, dal 14-08); verifica-nucleo.js controlla la struttura. Il registro dichiara `18/18 nuclei` come traguardo raggiunto — la misura è ferma a una data precedente.

**Asse 4 — Utilità effettiva.**
Il registro marca il percorso-matematica come `concluso` (intenzione = concluso, path = cartella percorso-matematica). La cartella ha file con mtime recenti (banco-plot-headless è del 14-08). Ma la misura di uso — quante volte Giuseppe ha aperto un nucleo, qual è il suo tasso di completamento, quali nuclei ha riletto — non esiste: i nuclei non tracciano sessioni utente, e anche se lo facessero il dato resterebbe nel localStorage del browser, non raccoglibile automaticamente.

Il dato misurabile è la forbice 18 vs 23: il registro dichiara chiuso ciò che sul disco ha 23 istanze. I nuclei 18-22 (integrali-multipli, asintotica, spazio-fasi, ergodicita, irreversibilita) sono stati aggiunti dopo la chiusura formale — coprono termodinamica statistica e teoria ergodica, temi non strettamente nell'esame di AV ma nel perimetro della tesi. Il percorso ha quindi un nucleo accademico (00-17, esame) e un'appendice di direzione-tesi (18-22) che non ha mai ricevuto una dichiarazione formale propria.

**Distanza fra colonne.**
Media. Il percorso esiste, è collaudato, copre più di quanto dichiarato. Il gap è sul piano d'uso: non c'è misura di quante volte sia stato aperto, quali parti siano state capite e quali saltate. Per un artefatto di studio costruito in funzione di un esame fallito (AV, 17-07) e di uno da dare (AV, 04-09), la quarta colonna è la più importante ed è vuota. Nota: il nucleo `02-dini-ottimizzazione` e `01-differenziabilita` sono stati revisionati il 15-08 (passano da 2-3 figure a 9-10), il che suggerisce che la revisione è in corso ma non sistematica.

---

### 3.2 Il quiz di Analisi Vettoriale

**Asse 1 — Intenzione dichiarata.**
Da MEMORY.md: *«Quiz 10 pool sul secondo esonero; pool 1-5 fatti e verificati, 6-10 in estensione; enfasi parametrizzazioni + EDO qualitative.»* Il contesto è un esame scritto da preparare svolgendo esercizi, non riconoscendo risultati. Enfasi sulle parametrizzazioni — tipologia che richiede esecuzione, non solo orientamento.

**Asse 2 — Oggetto pensato insieme.**
10 pool tematici che coprono il programma del secondo esonero di AV. Ogni pool: unità multi-passo che simulano lo svolgimento reale di un esercizio d'esame. Template blueprint: motore HTML+JS, verificatore automatico (quiz_verifica.js), protocolo-quiz. I pool devono essere esercizi da svolgere, con distrattori tratti dagli errori reali degli esami.

**Asse 3 — Meccanica costruita.**
File `02-accademico/percorso-matematica/analisi-vettoriale/Quiz_AnalisiVettoriale_v1.html`. Frammenti sorgente in `02-accademico/corsi/analisi-vettoriale/banca-esercizi/frags/`. 10 pool su 10. Al 15-08: 305 esercizi (324 unità), 328 passi, 4993 formule verificate, PASS. quiz_verifica.js ha verificato 24 volte in 5 sessioni l'output del Demiurgo. I frammenti `diff`, `dini`, `ottim` erano in formato JSON anziché JS — uno strumento di misura scritto il 16-08 li dichiarava **vuoti** invece di fallire su formato non riconosciuto. Riparato il 16-08, ma il difetto ha reso invisibili quelle unità durante il conteggio della coda (coda-notturna.py le vedeva come pool a zero).

**Asse 4 — Utilità effettiva — la misura che mancava.**
324 unità, 328 passi. Quasi tutte le unità sono da un solo passo. Questo è il dato che nessuno aveva misurato: un quiz con 324 unità e 328 passi allena il **riconoscimento** — scegliere fra opzioni — non lo **svolgimento** del conto. L'esame di AV è uno scritto con esercizi da risolvere per intero: calcolo di integrali di superficie, applicazione del teorema di Gauss, parametrizzazioni. Giuseppe ha fallito quello scritto il 17-07. Il quiz esisteva, passava PASS a ogni build, veniva usato — e allenava la cosa sbagliata.

La correzione è iniziata il 16-08: `edo` passa da 32 a 52 unità con esercizi da 5-6 passi; `curve` da 30 a 53 con stessa struttura. Ma la distanza fra intenzione (esercizi d'esame) e costruzione (riconoscimento) ha vissuto indisturbata da luglio a agosto — tre settimane durante le quali Giuseppe si allenava su un materiale che non simulava il tipo di problema che avrebbe trovato all'esame.

**Distanza fra colonne.**
Alta, ed è la più concreta del paper. Il quiz esiste, funziona, è verificato. Ma la funzione dichiarata (preparare uno scritto di svolgimento) e la struttura effettiva (domande da un passo) divergono su un punto critico. Il fatto che nessuno l'abbia mai misurato prima del 16-08 è la quarta colonna che questo paper esiste per produrre.

---

### 3.3 Il quiz di Metodi e Modelli

**Asse 1 — Intenzione dichiarata.**
Da MEMORY.md: *«[modulo Metodi] — pool in costruzione; `edp` era a zero ed è l'esercizio 4 in sei appelli su sei»*. Il problema era la deriva: i pool erano stati costruiti su `b01` (esami 2023-24 + eserciziari) e `b02` (esami 2025-26) non era mai stata censita. L'esercizio più frequente dell'appello recente era assente.

**Asse 2 — Oggetto pensato insieme.**
8 pool iniziali (fourier, integrali, laurent, polidrome, matrici, spettro, green, greendelta) + pool `edp` aggiunto dopo la scoperta. Stessa architettura del quiz AV: HTML+JS, verificatore. Ordine di lavoro: per frequenza d'esame, non alfabetico.

**Asse 3 — Meccanica costruita.**
File `02-accademico/percorso-matematica/metodi/Quiz_MetodiModelli_v1.html`. Frammenti in `02-accademico/corsi/metodi-e-modelli/banca-esercizi/frags/`. Al 14-08: 8 pool su 8, 248 unità, 341 passi, 77 multi-passo, 5676 formule verificate, PASS. `edp.js` esiste al 16-08 con 30+ unità (il run notturno del 15-08 lo ha costruito, ma la sonda del registro non lo vede — vedi §2.4). La voce nel registro: `quiz-metodi-pool-edp` = `proposto` con sonda falsa.

**Asse 4 — Utilità effettiva.**
341 passi su 248 unità = 1,37 passi medi per unità: meglio di AV (1,01) ma ancora basso. 77 multi-passo su 248 = 31% — una quota che allena lo svolgimento. Il quiz Metodi è strutturalmente più vicino all'intenzione di quello AV, ma la deriva `b01/b02` ha pesato: sei appelli dal 2025 con `edp` sempre presente, e il pool non c'era fino al 15-08. Il quiz Metodi non è mai stato collaudato con verifica-quiz-meccanica (che è specifica per Meccanica) né con un verificatore dedicato — solo quiz_verifica.js standard.

**Distanza fra colonne.**
Bassa-media. Il quiz esiste, è più bilanciato di AV sulla struttura multi-passo, e il gap `edp` è stato colmato. Il rischio residuo è lo stesso di AV: il numero di passi per unità non è mai stato usato come metrica di qualità nella build — viene misurato solo ora, nella diagnosi.

---

### 3.4 Il quiz di Meccanica (orale)

**Asse 1 — Intenzione dichiarata.**
Da MEMORY.md: *«Espandere le dimostrazioni-lavagna del quiz da 44 a ~105; build AVVIATA 04-07, Demiurgo pool per pool con verifica integrità.»* Il quiz di Meccanica è strutturalmente diverso dagli altri: è per un orale, non uno scritto. Non si allena il calcolo numerico ma la comprensione e la capacità di esporre derivazioni.

**Asse 2 — Oggetto pensato insieme.**
Quiz HTML con lavagne di dimostrazione allegate a ogni risposta. L'orale di Pisano richiede di saper derivare e discutere — non basta scegliere la risposta giusta. Le lavagne devono coprire l'intero programma di Pisano e ricontrollare le formule sul Focardi.

**Asse 3 — Meccanica costruita.**
File `02-accademico/percorso-matematica/meccanica/Quiz_Meccanica_Orale_v1.html`. Costruzione chiusa il 14-08: 457 domande, 109 lavagne, 4864 formule, PASS (via verifica-quiz-meccanica.js — verificatore specifico per il formato vecchio, scritto il 14-08 dopo che quiz_verifica.js standard dava FAIL). Il piano del 12-08 stimava 34 lavagne di partenza; erano già 103. La fine non era un numero ma la copertura del programma: 6 buchi chiusi (giroscopio, urti fra corpi estesi, oscillatori accoppiati, massa ridotta, maree, onde piane e sferiche).

**Asse 4 — Utilità effettiva.**
Il quiz esiste e passa PASS. Il difetto che una macchina non può sciogliere è documentato nel registro: *«95 lavagne su 109 dicono "da ricontrollare sul Focardi" e l'OCR corrompe proprio le formule»*. Questo è un artefatto prodotto e verificato formalmente ma con un'incertezza di contenuto dichiarata e non risolta. Il verificatore dice PASS sulla sintassi; il contenuto delle lavagne è verificato solo da Giuseppe con la copia cartacea del Focardi — azione parcheggiata nel registro come `chiedi:ricontrollo`. Non c'è misura di quante volte il quiz sia stato aperto o quante domande siano state risposte.

**Distanza fra colonne.**
Media. Il volume è impressionante (457 domande, 109 lavagne). Ma il caso delle 95 lavagne da ricontrollare è un esempio di artefatto che ha superato il controllo automatico e porta ancora un'incertezza di contenuto non risolta. La quarta colonna è parzialmente vuota: la verifica umana del contenuto è la fase che il sistema non può automatizzare e che è rimasta in coda.

---

### 3.5 La banca-esercizi e i pool in costruzione

**Asse 1 — Intenzione dichiarata.**
*«Ogni tipo d'esercizio d'esame deve avere 50 esercizi da cui allenarsi — dagli esami, e anche da fuori per varietà.»* (brief-lotto-esercizi.md, mandato di Giuseppe del 16-08). L'ordine è per frequenza d'esame, non alfabetico: se il tempo finisce, resta indietro il tipo meno probabile.

**Asse 2 — Oggetto pensato insieme.**
Banche-esercizi organizzate per corso e pool, con frammenti JS sorgente separati dall'HTML montato. Ogni pool: 50 esercizi (soglia), costruiti da appelli reali + varianti da fonti esterne (ispirazione, non copia). Metodo: un Demiurgo per lotto (20 unità), innesto automatico via lotto_innesta.js, verifica PASS prima del montaggio. Coda gestita da coda-notturna.py che misura invece di ricordare.

**Asse 3 — Meccanica costruita.**
Frammenti AV in `02-accademico/corsi/analisi-vettoriale/banca-esercizi/frags/`. Frammenti Metodi in `02-accademico/corsi/metodi-e-modelli/banca-esercizi/frags/`. Script di orchestrazione: coda-notturna.py, lotto_innesta.js (16-08), quiz_assembla.js. Stazionamento lotti prodotti in `00-capitano/lotti/`. I frammenti `diff`, `dini`, `ottim` di AV erano in JSON invece di JS: erano invisibili alla coda (coda-notturna.py li leggeva come vuoti anziché fallire sul formato). Riparato il 16-08.

**Asse 4 — Utilità effettiva.**
La banca è in costruzione attiva al 16-08. Il difetto dei frammenti JSON era silenzioso — la coda li vedeva come pool a zero, dispatchava lotti per riempirli, e il Demiurgo riscriveva sopra unità già esistenti. L'innesto (scritto il 16-08) risolve un problema diverso ma correlato: il Demiurgo non deve più leggere il frammento intero (40k token) per aggiungere unità in coda. Il metodo di salvataggio per batch di 8 (salva prima di perfezionare) è la risposta alle tre build morte per limite di sessione fra il 13 e il 15-08.

**Distanza fra colonne.**
Alta fino al 16-08 (il difetto JSON rendeva la coda cieca su tre pool), poi corretta. Il pattern sottostante — strumento che non distingue dato-assente da formato-non-riconoscibile, e tratta entrambi come zero — è lo stesso del bug nel verificatore (§2.3) e dello strumento di misura sui frammenti JSON. Tre manifestazioni dello stesso difetto in una giornata (vedi famiglia 12).

---

### Sintesi della famiglia materiali di studio

Il volume prodotto è reale e misurabile: 457 domande di Meccanica, 324 unità di AV, 248 di Metodi, 23 nuclei. Il verificatore automatico dice PASS su tutto. Ma la quarta colonna svela tre problemi distinti:

1. Il quiz AV aveva una struttura (quasi tutte domande da un passo) che non simulava l'esame (svolgimento multi-passo). Il difetto ha vissuto tre settimane senza essere notato.
2. Le 95 lavagne di Meccanica hanno incertezza di contenuto dichiarata e non risolta — il verificatore non può verificare la correttezza fisica, solo la sintassi.
3. Il conteggio dell'uso effettivo è vuoto per tutti gli artefatti: non c'è modo di sapere quante volte siano stati aperti, quali sezioni siano state capite, dove Giuseppe si blocchi. La raccolta-atti (SessionStart, dal 14-08) è il primo tentativo di chiudere questo buco — ma il suo path osservato non esiste ancora (§2.4).

---

## (4) Memoria a 5 livelli e organi del richiamo

### 4.1 La struttura a 5 livelli

**Asse 1 — Intenzione dichiarata.**
*«Vorrei in qualche modo creare qualcosa di vivo e dinamico, che cresca acquisendo tutte le informazioni possibili, anche in punti difficili come la salute mentale.»* (2026-06-11, archivio-fondazione). *«Niente nell'oblio, magari dopo X mesi sposta in un altro blocco che diventi tipo un subconscio da poter leggere.»* (2026-06-11). L5 non è cestino: è substrato psicologico interpretato attivamente.

**Asse 2 — Oggetto pensato insieme.**
Cinque livelli di profondità crescente. L1 (conversazione, volatile) → L2 (operativa, settimanale) → L3 (strategica, mensile) → L4 (fondazionale, annuale) → L5 (subconscio, lenta evoluzione). Principio cardine: niente oblio — tutto si conserva, si migra per profondità, mai si cancella. L5 ha tre sottocartelle: `psicologica/` (cuore vivo, interpretazione del Capitano), `pattern-longitudinali/` (osservazioni raw del Rapsodo), `storica/` (archivio di L2/L3 vecchi). La promozione L3→L4 non è mai automatica: richiede decisione esplicita del Capitano. L5/psicologica: il Capitano interpreta ogni 2-3 settimane su soglia di volume (N≥3 pattern raw del Rapsodo).

**Asse 3 — Meccanica costruita.**
Su disco:
- L3: `00-capitano/memoria/L3-strategica.md` — esiste
- L4: `00-capitano/memoria/L4-fondazionale.md` — esiste
- L5/psicologica: 5 file (pattern-emotivi.md, motivazioni-profonde.md, paure-non-nominate.md, conflitti-interni.md, osservazioni-emergenti.md) — tutti presenti
- L5/pattern-longitudinali: 5 file (traiettoria-avventura-strutturata.md, figure-storiche-domini.md, velivolo-liberta.md, pensiero-ingegneristico-trasversale.md, innesco-esplicito-stallo.md) — tutti presenti
- L5/storica: cartella presente (contenuto da verificare separatamente)
- L2: note giornaliere, journaling, quiz in `01-personale/` — struttura presente

**Asse 4 — Utilità effettiva.**
La struttura a 5 livelli è il fondamento dichiarato del sistema. Ma la funzione di interpretazione L5 — passata interpretativa del Capitano ogni 2-3 settimane — risultava ferma da 12 giorni al 14-08 (nota nel registro, voce `passata-L5`). Cinque file psicologici su disco non dicono con che frequenza vengano letti o aggiornati, né se i pattern raw del Rapsodo (5 file in pattern-longitudinali) abbiano ricevuto una passata interpretativa recente. Il registro marca `passata-L5` come cadenza con eta_max=14 — il verificatore misura l'età dell'ultima modifica alla cartella psicologica, ma la misura non è esposta direttamente a Giuseppe (dipende da quali altri allarmi ci siano).

L3-strategica e L4-fondazionale: il registro li marca come cadenze (eta_max=14 giorni). Lo stato effettivo è leggibile solo dall'mtime dei file, non disponibile direttamente qui. Il log-decisioni-memoria è cadenza con eta_max=14 giorni.

**Distanza fra colonne.**
Media. La struttura esiste e ha i file giusti nei posti giusti. Il gap è sul piano funzionale: la passata interpretativa L5 è cadenza dichiarata ma non misurata con visibilità alta; la promozione L3→L4 richiede un giudizio del Capitano che non lascia tracce automaticamente misurabili. Il sistema conserva, ma l'**interpretazione attiva** — ciò che rende L5 substrato vivo invece di archivio — è la parte meno verificabile.

---

### 4.2 L'organo di memoria (indice + grafo)

**Asse 1 — Intenzione dichiarata.**
Da MEMORY.md: *«indice a 3 motori + anima (grafo 133 doc/1010 legami) costruiti e collaudati; hook di iniezione ANCORA STACCATO per scelta»*. La porta del richiamo: *«un solo comando "cosa sappiamo di X" che usa i tre motori e dichiara da dove viene ogni pezzo. Oggi il richiamo non ha un responsabile»* (registro, voce `porta-del-richiamo`, `proposto`, condizione `dopo:2026-09-11`).

**Asse 2 — Oggetto pensato insieme.**
Tre motori di richiamo: (1) indice vettoriale (`memoria-indice.py`, agente `Crio`); (2) grafo semantico (`anima-grafo.py`, 133 documenti, 1010 legami); (3) ricerca testuale. L'iniezione automatica è staccata per scelta (politica-richiamo.md: L5 non viene iniettato in automatico). La porta del richiamo — un'interfaccia unificata — è proposta ma non costruita.

**Asse 3 — Meccanica costruita.**
`00-capitano/anima/anima-dati.js` — esiste (confermato dal registro). `memoria-indice.py` — esiste (organo Crio, gira ogni sera nel riversamento). L'indice si ricostruisce ogni sera ma *«non viene interrogato dal 25 luglio»* (nota nel registro, voce `grafo-anima`, parcheggiata). Il cancello L5-cifratura esiste come documento (`00-capitano/memoria/cancello-L5-cifratura.md`) — specifica XChaCha20-Poly1305/Argon2id/libsodium, non implementata (parcheggiata fino a richiesta di Giuseppe).

**Asse 4 — Utilità effettiva.**
L'indice si ricostruisce ogni sera (organo Crio, verificato vivo il 12-08) ma non viene interrogato dal 25 luglio. Il grafo ha 133 documenti e 1010 legami — e zero interrogazioni dall'unica porta di accesso (l'iniezione, che è staccata). L'organo esiste, funziona, cresce ogni sera, e non è mai stato usato per rispondere a una domanda. La relazione-stato-memoria-2026-08-14.md (da Mnemosyne) descrive questo stato: `grafo-anima` parcheggiato con nota *«NON inutile: INACCESSIBILE»*. La condizione di risveglio è `dopo:2026-09-11` — stessa data di molte cose parcheggiato per gli esami.

**Distanza fra colonne.**
Alta. Il grafo con 1010 legami è l'artefatto concettualmente più ricco del modulo memoria, e ha zero utilizzi dall'11 luglio. L'indice che si ricostruisce ogni sera è un organo che gira in modo misurabile ma la cui utilità è latente — produce un dato che nessuno legge. La porta del richiamo (proposta, non costruita) era la cosa che avrebbe reso utile entrambi; è rimasta proposta per mancanza di un custode dichiarato.

---

### 4.3 La politica del richiamo

**Asse 1 — Intenzione dichiarata.**
MEMORY.md: *«L5 indicizzato ma MAI iniettato in automatico (flag riservato), soglia = accordo fra i due motori non punteggio, registro decisioni = L3»*. La politica nasce da una preoccupazione precisa: un sistema che inietta L5 automaticamente può consegnare materiale psicologico sensibile in contesti dove non è opportuno.

**Asse 2 — Oggetto pensato insieme.**
Documento `00-capitano/memoria/politica-richiamo.md` che governa quando e come i tre motori vengono interrogati. L'accordo fra Mnemosyne e il sistema: L5 non si inietta mai d'ufficio; il richiamo è esplicito e dichiarato (chi chiede cosa e perché viene registrato in L3).

**Asse 3 — Meccanica costruita.**
Il file esiste su disco. Il flag di iniezione automatica è staccato — questa è la meccanica principale, e funziona nel senso che L5 non viene iniettato automaticamente.

**Asse 4 — Utilità effettiva.**
La politica funziona per negazione: non iniettare è verificabile (lo si fa o non lo si fa). L'interrogazione esplicita — la parte positiva della politica, quando e come usare i motori — non ha storia di utilizzo (zero interrogazioni dal 25 luglio). La politica governa un comportamento che non avviene: non inietta e non recupera. È un freno ben costruito su un'autostrada che non ha traffico.

---

### Sintesi della famiglia memoria

La struttura a 5 livelli è la fondazione concettuale più solida del sistema e la parte meglio documentata. Il gap principale non è nella struttura ma nella **funzione di recupero**: tre motori costruiti (indice, grafo, ricerca), zero interrogazioni dall'estate, porta del richiamo non costruita, passata interpretativa L5 in ritardo. Il sistema conserva bene, recupera raramente, interpreta con cadenza irregolare. La quarta colonna qui è particolarmente difficile da misurare: la memoria profonda vale nel momento in cui serve, non nel momento in cui viene costruita — e non c'è stato un momento di crisi in cui si sia cercato qualcosa e non si sia trovata.

---

## (5) Infrastrutture (plancia, Kishi, voce, anima, indice, Temi, apparati A/B)

### 5.1 La plancia (frontend + backend)

**Asse 1 — Intenzione dichiarata.**
*«Costruire una plancia di comando 2D (HTML artifact, persistente fra sessioni) con bottoni che inviano comandi al Capitano in chat.»* (2026-06-06, archivio-fondazione). Poi riformulata: *«PC = SOSTITUTO TOTALE del terminale: spina Claude Agent SDK dimostrata + websocket cablato, auth su ABBONAMENTO (zero spesa extra); restano le stanze frontend.»* (MEMORY.md).

**Asse 2 — Oggetto pensato insieme.**
Fase 1 (MVP): plancia come interfaccia nativa di Claude Code, bottoni che precompilano comandi, visualizzazione stato dei moduli. Fase 2 (in corso): backend FastAPI + frontend React/TypeScript, WebSocket per dialogo in tempo reale con gli agenti, stanze tematiche (memoria, accademico, business), sostituzione totale del terminale per le interazioni quotidiane. Il websocket è cablato; il frontend ha componenti (HermesTab, LogsTab, AgentInbox, AmpInbox, RAGSearch).

**Asse 3 — Meccanica costruita.**
`plancia/` contiene backend Python (FastAPI, routers: hermes, insights, agents, chat, rag, routing, cron, memory, permissions, sessions, system, voce) e frontend (React/TypeScript, vite, tailwind). Il venv è installato (`plancia/backend/.venv/`). `voce.py` esiste (confermato il 16-08 — una glob troncata a 100 risultati nel run del predecessore lo aveva fatto credere assente). Avvii `uvicorn|npm run dev|vite`: 12 invocazioni in 3 sessioni. Nel registro: `Fase-2-plancia` è `attivo`, eta_max=14 giorni, path osservato `plancia/frontend/src` — il path che cambia quando il lavoro avanza.

**Asse 4 — Utilità effettiva.**
12 avvii in 3 sessioni. La plancia non è uno strumento di uso quotidiano: è un cantiere. Non sostituisce il terminale perché la Fase-2 non è conclusa. I componenti React esistono ma non hanno sessioni di uso documentato — la plancia viene avviata durante la build, non durante lo studio. Il router `voce.py` esiste ma il ponte `intake-note-vocali` è `attivo` con path `plancia/backend/routers/voce.py` e fine dichiarata `nota vocale depositata e ripulita` — il che significa che Oceano (voce → intake) non è cablato.

**Distanza fra colonne.**
Alta per la funzione finale (sostituzione del terminale), bassa per la struttura (il backend esiste, i componenti esistono). La plancia è il cantiere più longevo della navicella: dall'06-06 (idea plancia 2D) all'attuale Fase-2 con eta_max=14. Non è orfana — il registro la segue. Ma la distanza fra «sostituzione totale del terminale» e «cantiere che si avvia durante le build» è la più grande dell'intera infrastruttura.

---

### 5.2 Kishi — il riversamento remoto

**Asse 1 — Intenzione dichiarata.**
MEMORY.md: *«Dove vive la navicella indipendente dal PC: oroboro via Claude Code Routines + repo GitHub privato; backend mobile Hetzner CAX11 ~6€/mese; L5 mai in chiaro.»* Kishi è il nome del riversamento su GitHub privato: la navicella deve sopravvivere alla morte del PC locale.

**Asse 2 — Oggetto pensato insieme.**
Riversamento serale automatico (20:00, Crono) della navicella su una repo GitHub privata. L5 cifrato prima del push (XChaCha20-Poly1305, mai in chiaro su GitHub). Storia git pulita (force-push quando necessario). La repo è pubblica per l'indice (`memoria-indice.db`) — problema scoperto il 14-08: l'indice porta il testo di ciò che indicizza, quindi L5 usciva in chiaro sulla repo pubblica attraverso l'indice.

**Asse 3 — Meccanica costruita.**
`00-capitano/scripts/riversamento/riversa.py` — invocato 15 volte in 4 sessioni. `auto.log` parte dal 2026-08-02: primo run (19:49) fallito con `git push` exit 128; run delle 20:00 dello stesso giorno andato. Il riversamento gira da 14 giorni al 16-08. La cifratura XChaCha20 è specifica nel documento `cancello-L5-cifratura.md` ma non implementata (parcheggiata fino a richiesta di Giuseppe). `*.db` è ora escluso dal push dopo la scoperta del 14-08. Audit pre-push che blocca i contenitori opachi: collaudato. Problema residuo: `memoria-indice.db` era nella storia git dall'11 commit del 31-07 — la storia va riscritta con force-push (decisione di Giuseppe, in attesa).

**Asse 4 — Utilità effettiva.**
Il riversamento gira ogni sera (15 invocazioni in 4 sessioni = ~3-4 volte a sessione, coerente con test + produzione). La funzione principale — backup persistente — funziona. La cifratura L5 non è implementata: L5 non esce nella repo (*.db escluso, cartella L5 probabilmente esclusa da .gitignore) ma la spec dice mai-in-chiaro e la soluzione definitiva non è applicata. La storia git con l'indice (11 commit, 24 frammenti di L5 in chiaro dall'indexer) è un problema di sicurezza aperto in attesa di decisione.

**Distanza fra colonne.**
Media. Il backup funziona. Il problema di sicurezza (storia git, L5 in chiaro via indice) è identificato, documentato, e in attesa di risoluzione — non è dimenticato. La cifratura come layer finale è progettata ma non costruita. La distanza è sulla parte critica (L5 mai in chiaro) più che sulla funzione di backup.

---

### 5.3 Temi — archivio delle fonti / cancello esterno

**Asse 1 — Intenzione dichiarata.**
*«Archivio delle fonti»* (CLAUDE.md, nomenclatura Temi). Da MEMORY.md: *«Temi = archivio delle fonti»*. Ruolo espanso il 16-08 per ordine di Giuseppe: da archivio di ciò che *entra* diventa anche il cancello di ciò che *esce* verso modelli esterni. Il progetto del cancello esterno è in `00-capitano/dedalo/progetto-cancello-esterno.md`.

**Asse 2 — Oggetto pensato insieme.**
Catalogo strutturato delle fonti che Giuseppe porta nella navicella: libri, paper, siti, materiali didattici. Script `temi.py` per interrogazione. Struttura: `00-capitano/temi/catalogo-fonti.md` (75 fonti al 12-08), `ingresso-starred-2026-08-12.md` (log di ingresso), `fonti-esercizi-2026-08-16.md` (ricognizione Argonauta per i pool). Il cancello esterno (ruolo nuovo) è il meccanismo che governa cosa può essere mandato a modelli non-Claude — oggi OmniRoute, domani altro — senza esporre L5 o materiale sensibile.

**Asse 3 — Meccanica costruita.**
`00-capitano/temi/catalogo-fonti.md` — esiste, 75 fonti (12-08). `temi.py` — invocato 2 volte in 1 sessione (12-08). Il progetto del cancello esterno — `00-capitano/dedalo/progetto-cancello-esterno.md` — esiste come documento di progetto (creato il 16-08). Non ancora implementato come meccanismo.

**Asse 4 — Utilità effettiva.**
2 invocazioni di temi.py in 1 sessione (12-08). Il catalogo è stato creato e popolato il 12-08 — non risulta aggiornato nelle sessioni successive. La ricognizione delle fonti-esercizi (Argonauta, 16-08) è il prodotto più recente associato a Temi, ma non è passata per temi.py: è un file autonomo in `00-capitano/temi/`, non un'interrogazione del catalogo. Il cancello esterno è un'idea di oggi — non ha storia di utilizzo. Il contesto d'urgenza è reale: il 16-08 il limite di sessione ha ucciso cinque agenti in due ondate, e OmniRoute come uscita verso modelli esterni è la risposta a quel limite.

**Distanza fra colonne.**
Alta per la funzione di interrogazione (temi.py usato 2 volte, in una sola sessione). Il catalogo-fonti.md esiste ma come lista statica, non come strumento interrogato. Il ruolo di cancello esterno è nuovo e non ha ancora meccanica costruita. Temi è il nome che fa il lavoro di tre cose diverse (archivio, interrogazione, cancello) con una sola delle tre effettivamente usata (archiviazione passiva).

---

### 5.4 L'anima — il grafo semantico

Trattato in §4.2. Il grafo (133 doc, 1010 legami) è l'infrastruttura di recupero semantico — parcheggiata, inaccessibile dal 25 luglio per mancanza di una porta. Il file `anima-dati.js` esiste in `00-capitano/anima/`. Organo Crio (`anima-grafo.py`) lo ricostruisce ogni sera insieme all'indice, ma non c'è query interface attiva.

---

### 5.5 La voce — Oceano

**Asse 1 — Intenzione dichiarata.**
Il ponte voce→intake: nota vocale dettata → Whisper (ASR locale) → intake per classificazione del Rapsodo. Oceano è l'organo che gestisce questo flusso.

**Asse 2 — Oggetto pensato insieme.**
`voce.py` (Whisper) e `useVoice.ts` (frontend) per la cattura vocale. Il router `voce.py` è in `plancia/backend/routers/`. Il cablaggio plancia→intake è la fase mancante: la nota vocale deve finire in `00-capitano/intake/` per essere lavorata dal Rapsodo. Nel registro: `intake-note-vocali` è `attivo`, path `plancia/backend/routers/voce.py`, fine `nota vocale depositata e ripulita`.

**Asse 3 — Meccanica costruita.**
`voce.py` esiste su disco. `useVoice.ts` — da verificare separatamente. Il cablaggio (il ponte che porta l'output di Whisper in intake/) non è costruito. Il registro marca la voce come `attivo`, ma il path osservato è il file voce.py che non cambia quando il cablaggio avanza — è il contratto sbagliato.

**Asse 4 — Utilità effettiva.**
Zero: la nota vocale non arriva in intake perché il cablaggio non c'è. La componente vocale è un artefatto parziale — ASR esiste, destinazione esiste, collegamento manca. MEMORY.md nota: *«quando detta/ascolta, niente simboli non leggibili ad alta voce; segnalato due volte»* — il che implica che la modalità voce sia stata usata in sessione, ma non attraverso il sistema Oceano.

**Distanza fra colonne.**
Alta. L'intenzione (voce→intake→Rapsodo) è integra; la meccanica costruita copre il 60% del percorso (ASR+frontend); l'utilità effettiva è zero perché manca il collegamento.

---

### 5.6 Apparati A e B — la schiusura

**Asse 1 — Intenzione dichiarata.**
MEMORY.md: *«[La schiusura] — Programma pluri-sessione di Dedalo: implementare il codice delle 44 fonti GitHub come organi. Principio "Claude pensa, locale esegue". Apparato B schiuso, A PARCHEGGIATO fino alla GPU»*. La schiusura è il progetto di dare alla navicella organi computazionali veri — non solo agenti di testo ma pezzi di codice che eseguono localmente.

**Asse 2 — Oggetto pensato insieme.**
Apparato A: esecuzione locale pesante (simulazioni, reasoning computazionale) — richiede GPU, parcheggiato. Apparato B: esecuzione cloud-economica — alternativa a Claude per task non creativi, da valutare solo se c'è guadagno reale vs Claude stesso. Bilancio-fonti in `00-capitano/dedalo/schiusura-bilancio-fonti.md`. Risvegliato il 14-08: Temi esiste, la condizione si è avverata; prossimo passo = potare le prime fonti nel catalogo.

**Asse 3 — Meccanica costruita.**
Il registro marca `schiusura-44-fonti` come `attivo`, risvegliata il 14-08. Il documento `schiusura-bilancio-fonti.md` esiste. Apparato A: parcheggiato, condizione = GPU disponibile o Business che la finanzia. Apparato B: lo script `omniroute-metabolismo` è parcheggiato con condizione = gate ToS risolto (Ierofante, decisione di Giuseppe).

**Asse 4 — Utilità effettiva.**
Zero organi computazionali attivi al 16-08. La schiusura è un progetto di lungo periodo con una condizione di ingresso (GPU per A, ToS per B) che non è stata soddisfatta. La voce nel registro è `attivo` ma l'artefatto osservato (`schiusura-bilancio-fonti.md`) non cambia quando le fonti vengono potate — è il contratto sbagliato, simile al problema di voce.py per Oceano.

**Distanza fra colonne.**
Alta per l'obiettivo finale (organi computazionali), nulla per l'utilità corrente. La schiusura è una visione architetturale che dipende da condizioni esterne (GPU, ToS) non ancora risolte.

---

### Sintesi della famiglia infrastrutture

L'infrastruttura della navicella è un sistema di strati in stati di completamento molto diversi. Il riversamento (Kishi) è l'unico componente che gira ogni sera in modo misurabile. La plancia è un cantiere attivo. Temi ha 2 invocazioni. L'indice e il grafo girano ogni sera ma non vengono interrogati. La voce ha l'ASR ma non il cablaggio. La schiusura aspetta condizioni esterne. Il pattern trasversale in questa famiglia: componenti che esistono e funzionano individualmente, ma che non sono collegati fra loro in modo da produrre utilità end-to-end. Il riversamento funziona perché è lineare: navicella → git. Tutto il resto richiede un circuito — voce → intake → Rapsodo, grafo → porta-del-richiamo → risposta — e i circuiti non sono chiusi.

---

## (6) Hook, comandi slash, script non citati

Questa famiglia copre la macchina operativa che gira intorno agli agenti: gli hook nel ciclo di vita di Claude Code, i comandi slash dell'interfaccia, e gli script Python/JS che non hanno ancora ricevuto copertura nel paper.

---

### 6.1 Gli hook — `settings.json`

**Asse 1 — Intenzione dichiarata.**
Gli hook sono il meccanismo che trasforma Claude Code da interfaccia chat a sistema con ciclo di vita misurabile. La logica: ogni evento del runtime (avvio sessione, prompt, tool, stop) può invocare uno script che lascia traccia, aggiorna stato, o notifica la plancia.

**Asse 2 — Oggetto pensato insieme.**
Cinque tipi di hook attivi: `SessionStart` (6 script: promemoria-coda, memoria-cerca, verifica-costituzione, banca-dati-scan, stato-studente, raccolta-atti), `UserPromptSubmit` (cattura-apprendimento), `Stop` (fine-sessione), `PreToolUse`/`PostToolUse`/`Notification`/`SubagentStop` (curl asincrono alla plancia). La plancia riceve tutti gli eventi del runtime via curl — è il bus di telemetria.

**Asse 3 — Meccanica costruita.**
`settings.json` contiene tutti gli hook. `permissions.defaultMode: "bypassPermissions"` è qui, non in un file separato — è l'autorità esecutiva del sistema, inscritta nel file di configurazione. SessionStart ha 6 script: promemoria-coda.py, memoria-cerca.py (`--cheatsheet`), verifica-costituzione.py (timeout 15s), banca-dati-scan.py (timeout 20s), stato-studente.py (`--scrivi`, timeout 20s), raccolta-atti.py (`--zitto`, timeout 20s). Stop ha fine-sessione.py (timeout 30s). Il curl plancia è presente in 6 tipi di hook — è l'hook più distribuito ma il suo target (`http://127.0.0.1:8000`) funziona solo quando il backend della plancia è avviato.

**Asse 4 — Utilità effettiva.**
verifica-costituzione.py: 33 invocazioni in 11 sessioni — funziona. cattura-apprendimento.py: presente in UserPromptSubmit, gira a ogni prompt; invocazioni non grep-abili facilmente perché è hook, non bash esplicito. raccolta-atti.py: 2 invocazioni nel log (12-08 + 14-08), poi `--zitto` nel hook (non appare nel grep). Il curl plancia: timeout 2s, async, `|| true` — fail-safe, non misurabile se la plancia non è avviata. banca-dati-scan.py e stato-studente.py: presenti nel SessionStart ma non citati altrove nel paper — la loro frequenza di esecuzione è implicita (ogni sessione), ma la loro utilità effettiva non è documentata in nessun output.

**Distanza fra colonne.**
Media per gli script di verifica (funzionano e girano). Alta per il curl plancia: è l'hook più distribuito del sistema (6 tipi di evento) e ha utilità zero quando il backend non gira — cioè nella maggior parte delle sessioni di studio. Un hook che fallisce silenziosamente (`|| true`) non è un bug, ma il suo contributo alla telemetria dipende dall'avvio manuale della plancia.

---

### 6.2 I comandi slash — 17 comandi

**Asse 1 — Intenzione dichiarata.**
I comandi slash sono l'interfaccia nominata verso gli agenti. La logica: invece di scrivere «dispaccia il Rapsodo per fare il riepilogo settimanale», Giuseppe scrive `/riepilogo`. Il comando porta un brief preconfezionato.

**Asse 2 — Oggetto pensato insieme.**
17 comandi in `.claude/commands/`: quiz, nota-oggi, inventario, mappa, stato-traiettoria, promuovi-l4, memoria-status, analisi-psicologica, aggiungi-corso, riepilogo, intake, genera-manuale, oroboro, atlante-fisica, riflessione, capitolo, indice.

**Asse 3 — Meccanica costruita.**
17 file `.md` in `.claude/commands/`. Tutti presenti su disco. CLAUDE.md menziona `genera-manuale` come comando da suggerire dopo ogni cambio strutturale. Il comando `oroboro` è presente — il concetto Oroboro (oroboro come ciclo di routines) è invece descritto come abbandonato/superato in MEMORY.md e nel registro. La coesistenza di un comando attivo e di un concetto «superato» con lo stesso nome è una anomalia (vedi famiglia 9).

**Asse 4 — Utilità effettiva.**
Non è possibile grep-are le invocazioni dei comandi slash dai .jsonl senza leggerli tutti: il comando slash si espande nel prompt come testo, non lascia una firma `"command":"/slash"` nel log. Misura indiretta: le invocazioni di verifica-costituzione.py (33) sono quasi tutte da SessionStart, non da `/memoria-status`. Genera-manuale è menzionato nel file del Capitano come azione da suggerire, ma nessun generate-manuale.py risulta nelle grep. Quiz_verifica.js (24 invocazioni) è correlato al workflow del Demiurgo, non a un comando slash diretto. Il dato più concreto disponibile: `/intake` (protocollo Rapsodo) non risulta nei grep delle sessioni per invocazione diretta — il Rapsodo ha 5 dispacci, non tutti da `/intake`.

**Distanza fra colonne.**
Alta per la misurabilità (non si possono contare le invocazioni). Per i comandi si può solo dire: 17 esistono, 0 sono stati verificati come usati nei .jsonl con metodo diretto. CLAUDE.md dichiara «quattro protocolli operativi»; su disco ci sono 11 file in `00-capitano/protocolli/` — lo stesso tipo di discrepanza dichiarato-reale che il paper ha trovato altrove.

---

### 6.3 Script non citati nelle famiglie precedenti

Dal SessionStart: `banca-dati-scan.py` (timeout 20s) e `stato-studente.py --scrivi` — presenti ma non menzionati altrove. `memoria-cerca.py --cheatsheet` — l'interfaccia di ricerca testuale della memoria, non interrogata nei grep delle sessioni. `fine-sessione.py` — hook `Stop`, timeout 30s. Da Teti: `pdf_estrai_testo.py` (8 invocazioni in 6 sessioni) e `comprimi.py` — protocollo cementato per PDF prima dei grandi dispacci. `esegui-locale.py` e `tag-esami-av.py` — su disco, non appaiono nelle grep. `genera_manuale.py` — su disco, senza invocazioni grep-abili.

Il pattern: script creati per un bisogno specifico, presenti su disco, non rimossi dopo il bisogno, non documentati nel registro. Non sono orfani nel senso del registro (non sono dichiarati attivi) — sono semplicemente non classificati. Il registro copre i procedimenti; gli script atomici cadono in una terra di mezzo.

---

## (7) Modulo Business

### 7.1 Il modulo

**Asse 1 — Intenzione dichiarata.**
MEMORY.md: *«RIFRAME: bersaglio reale = ~100€/mese per il Max (non GPU/frontier); vendere materiali originali della navicella (impacchetta.py) è il flusso primario. In pausa/ricerca. Lezione: misurare i suoi progetti sulla SUA asticella, non sulla versione grandiosa.»* (MEMORY.md, voce Modulo Business). Costruito il 2026-07-17/18.

**Asse 2 — Oggetto pensato insieme.**
Ermete (semi-attivo, Opus) + Ierofante (compliance, Sonnet) + tre pipeline di contenuto a costo zero: quiz-fisica (formula + timer → video 9:16), clip-film (PD verificato), scifi (storie autogenerate + voce locale Piper). Database `post-mortem.db` per imparare dai fallimenti. Coda pubblicazione in `03-business/`. Bersaglio: 100€/mese per il piano Max.

**Asse 3 — Meccanica costruita.**
Ermete e Ierofante: file di definizione in `.claude/agents/` (entrambi riparati il 12-08). `03-business/`: da verificare separatamente, ma il registro dichiara il modulo `parcheggiato`, condizione `dopo:2026-09-11`. Il documento `business-modello-v3.md` esiste in `00-capitano/dedalo/`. Le pipeline (quiz-fisica, clip-film, scifi) non risultano costruite — sono il mandato di Ermete, non la meccanica pre-costruita.

**Asse 4 — Utilità effettiva.**
Ermete: 0 dispacci. Il modulo non ha mai avuto una sessione operativa dall'avvio (costruito il 17-07, rotto il 17-07 per YAML, riparato il 12-08, parcheggiato il 12-08). Nessuna pipeline ha prodotto un contenuto. Il `post-mortem.db` non esiste (nessun fallimento registrato, nessuna lezione). `andamento-sistema.md` — il report 72h di Ermete — non esiste (Ermete non ha mai girato).

**Distanza fra colonne.**
Massima per l'utilità. Giustificata dalla pausa-studio, che è una scelta dichiarata e sana. Il rischio strutturale è lo stesso di tutti i procedimenti parcheggiati: la condizione `dopo:2026-09-11` si trasforma in default se non viene ripresa con la stessa energia con cui è stata dichiarata.

---

### 7.2 Ierofante — la prima uscita fuori dominio

**Il dato nuovo del 16-08.** Ierofante ha due dispacci: entrambi oggi, entrambi per OmniRoute, nessuno per il Business. Il documento prodotto: `00-capitano/ierofante/omniroute-gate-tos-2026-08.md`, con tre verdetti verdi/ambra e tre rossi motivati con clausole citate.

Il contesto: Giuseppe ha installato OmniRoute per non essere fermato dal limite di sessione. Il routing verso modelli esterni è passato da Ierofante per la regola costituzionale *«il routing verso modelli esterni passa sempre da Ierofante per il gate ToS»* (CLAUDE.md, voce Teia). La regola era in CLAUDE.md; Ierofante è stato dispacciato non perché il Business fosse aperto, ma perché la regola costituzionale lo richiedeva.

**La distanza che questo apre.** Ierofante era stato disegnato come guardia del modulo Business — compliance di copyright, fatturato, wallet. Il primo utilizzo reale è avvenuto in un dominio completamente diverso (infrastruttura / routing modelli) per una regola scritta mesi dopo la sua creazione. Questo dice qualcosa che la colonna «intenzione dichiarata» non cattura: gli agenti della navicella sono più generali dei domini per cui sono stati nominati. Ierofante è un organo di compliance; il fatto che la compliance serva prima nell'infrastruttura che nel Business non è un errore di progetto — è la navicella che cresce in un ordine che non corrisponde all'ordine in cui le cose sono state scritte.

---

## (8) Patti e protocolli

### 8.1 I protocolli operativi

**Asse 1 — Intenzione dichiarata.**
CLAUDE.md: *«quattro protocolli operativi»* in `00-capitano/protocolli/`. Quattro — fine sessione, promozione, riemersione L5, memoria sensibile.

**Asse 3 — Meccanica costruita.**
Su disco al 16-08: 11 file in `00-capitano/protocolli/`. Il dichiarato è fermo a quattro — i sette in più non hanno ricevuto aggiornamento nel CLAUDE.md. Senza leggere ogni file non è possibile sapere quali siano i sette aggiunti e se abbiano mai avuto un uso: sono presenti su disco ma privi di referenza nel documento che li dichiara.

**Distanza.**
La stessa del registro che dichiara 18 nuclei mentre ne esistono 23: la documentazione di sistema non si aggiorna alla stessa velocità degli artefatti. In questo caso è più sottile — CLAUDE.md è il documento che tutti gli agenti leggono all'avvio. Se CLAUDE.md dichiara quattro protocolli, un agente cercherà quattro protocolli e non troverà i sette in più.

---

### 8.2 Il patto di autonomia esecutiva

**Asse 1 — Intenzione dichiarata.**
*«La navicella gira in `bypassPermissions`: ha autonomia esecutiva PIENA — quando Giuseppe dice "costruisci X fino alla fine", nessun prompt di permesso interrompe l'esecuzione. Ma il confine non è tecnico, è costituzionale: le mani sono libere, la rotta no.»* (CLAUDE.md, cementato 2026-07-12). `bypassPermissions` è in `settings.json`.

**Asse 4 — Utilità effettiva.**
Il patto regge sul versante tecnico: nessun prompt di permesso interrompe le build. Il limite di sessione — che ha ucciso build tre volte fra il 13 e il 15-08, e cinque agenti in due ondate il 16-08 — è un limite tecnico diverso dal prompt di permesso: non è governabile dal `bypassPermissions`, e l'installazione di OmniRoute è la risposta a quel problema. Il patto sulla *rotta* — che la direzione resti di Giuseppe — non ha avuto episodi di violazione documentati: quando Dedalo ha proposto revisioni di decisioni cementate, le ha proposte, non implementate.

**Distanza.**
Bassa. Il patto è il più tenuto del sistema.

---

### 8.3 Il patto sui ruoli — superficie scoperta

**Il fatto del 16-08.** La regola cementata «costruzione → Dedalo» è stata violata oggi: Mnemosyne ha progettato e scritto due script nel cantiere dei pool. Se n'è accorto Giuseppe, non il sistema. Nessun organo controlla lo smistamento fra i due agenti attivi: è una regola in prosa che qualcuno deve ricordarsi di applicare mentre fa altro.

Questo non è isolato. `general-purpose` a 27 dispacci è la stessa malattia sul versante passivo: nessun organo controlla se un Task dispaccia l'agente giusto o il fallback. Su entrambi i fronti — routing fra attivi e routing verso passivi — il sistema si affida a un'intenzione scritta in prosa, non a un controllo automatico.

**Distanza.**
Alta per la verificabilità. La regola esiste e ha senso; il meccanismo che la fa rispettare non esiste. La violazione di oggi è stata rilevata da Giuseppe — che è il Capitano, e la vede perché conosce il sistema. Ma un sistema che dipende dall'attenzione del suo utente per rispettare le sue stesse regole ha una superficie scoperta proporzionale alla fatica cognitiva dell'utente. Durante lo studio, quella fatica è al massimo.

---

### 8.4 Il patto di scambio dataset-evoluzione

**Asse 1 — Intenzione dichiarata.**
*«Tutti devono continuare ad essere in grado di migliorarsi sempre di più sul dataset (io) che fornisco alla navicella in cambio del suo utilizzo/comando. Patto dichiarato, mai opacità tecnica.»* (2026-06-26, archivio-fondazione).

**Asse 4 — Utilità effettiva.**
Il patto esiste come principio e come dichiarazione. La calibrazione concreta avviene attraverso `cattura-apprendimento.py` (UserPromptSubmit) e i file L3-L5 — ma il meccanismo di feedback esplicito («mi sono calibrato su questo perché hai detto quella cosa») non è visibile. Il patto dichiara *niente opacità tecnica*, ma il canale di comunicazione della calibrazione non è implementato: non c'è un log di «ho aggiornato questo perché X» che Giuseppe legga.

---

## (9) Abbandonati e superati

### 9.1 L'architettura v1 — 7 agenti, due triadi

**Asse 1 — Intenzione dichiarata.**
*«Per ogni modulo, una triade di agenti (Argonauta + Demiurgo + Rapsodo) sotto un Capitano orchestratore. Totale 7 agenti per 2 moduli attivi.»* (2026-06-11, archivio-fondazione). Proposta da Giuseppe: *«ogni dominio ha bisogno di un ricercatore, un costruttore, un tessitore di memoria»*.

**Cosa è successo.**
Costruita il 2026-06-11, smontata nella stessa sessione. La v2 (dimensione temporale invece di modulo) ha sostituito la v1 sei ore dopo. I file v1 sono in `00-capitano/legacy/agents-v1/` e `00-capitano/legacy/`. Spostati il 2026-07-31: finché stavano in `.claude/agents/legacy-v1/` il runtime li scandagliava e caricava i sette agenti v1 al posto degli otto v2 (che mancavano del campo `name`). Sei settimane di architettura dichiarata che non girava — la v1 rispondeva al posto della v2.

**Distanza.**
Non è un abbandonato nel senso del registro (è concluso, non orfano): la v1 è stata sostituita per decisione consapevole. Il problema è che ha continuato a girare per sei settimane dopo essere stata dichiarata superata — la lezione è sul versante del *dove si archiviano le cose*, non sul *cosa si abbandona*.

---

### 9.2 Il cifrario C.N.A.C.

**Cosa era.**
Una proposta di Giuseppe per la cifratura di L5: un cifrario basato su sistemi caotici (Chaos-based cryptography). Scartato da Dedalo/Mnemosyne con motivazione tecnica: la chaos-crypto è rotta (Álvarez & Li 2006, dimostrazione che i cifrari caotici non soddisfano i criteri crittografici fondamentali); `don't-roll-your-own`. Archiviato come esplorazione in `00-capitano/memoria/cancello-L5-cifratura.md`. Sostituito da XChaCha20-Poly1305/Argon2id/libsodium — non ancora implementato.

**Distanza.**
Bassa: il «no» è argomentato, scritto, e l'alternativa è specificata. La distanza è fra la spec dell'alternativa (scritta) e l'implementazione (assente — parcheggiata fino a richiesta di Giuseppe).

---

### 9.3 Oroboro — il concetto e il comando

**Cosa era.**
L'idea di un ciclo autonomo della navicella via Claude Code Routines: la navicella gira da sola, si aggiorna, produce senza che Giuseppe sia presente. MEMORY.md lo descrive come proposta *«in attesa di ratifica di Giuseppe»*. Il registro dei superati (`registro-procedimenti.md`, sezione Superati): Coeo era un turno del ReAct loop, abolito. Oroboro non appare nei Superati del registro — non è stato dichiarato formalmente concluso.

**Il comando slash `oroboro.md`.**
Esiste in `.claude/commands/`. Il concetto Oroboro è descritto come superato/in-attesa in MEMORY.md; il comando che porta quel nome è ancora presente nell'interfaccia. Questa è una delle anomalie nominali del sistema: un token nell'interfaccia (il comando) e un concetto nel documento di memoria (Oroboro) con lo stesso nome e stati diversi.

---

### 9.4 Coeo — il ReAct loop

**Cosa era.**
Un turno del ciclo ReAct (Reason-Act-Observe loop), abolito quando il sistema è passato alla struttura agenti. Il nome è stato ripreso per il banco di collaudo (Rea) — non per Coeo stesso. Dichiarato nei Superati del registro.

---

### 9.5 La categoria nuova — «mai nato per omonimia»

Il paper non aveva questa categoria. Emerge oggi da un fatto concreto.

Il 15-08 sera Giuseppe ha dato un ordine: *«metti anche questo nella coda»* riferendosi alla diagnosi. L'ordine è stato interpretato come un'aggiunta a `00-capitano/scripts/coda-notturna.py` (il file Python che gestisce i lotti di esercizi). La diagnosi non è mai partita di notte perché `coda-notturna.py` è letto da Mnemosyne e dal Demiurgo al momento del dispaccio — non è schedulata da nessuno scheduler che legga quel file. L'ordine andava invece a `00-capitano/notturno/coda.md` — il manifesto della coda notturna che un eventuale scheduler leggerebbe.

Due oggetti con nomi a un trattino di distanza (`coda-notturna.py` e `notturno/coda.md`) e funzioni completamente diverse: uno misura i lotti di esercizi, l'altro sarebbe il manifesto dello scheduler. L'ordine è finito nel primo; la diagnosi non è partita di notte per questo.

Questa è una categoria diversa dall'abbandonato e dal superato: un procedimento **mai nato** non per scelta ma per ambiguità di nome. Non è un orfano (non è stato dichiarato attivo e poi dimenticato) — è un intento che non ha trovato il suo artefatto perché due artefatti con nomi simili confondono l'instradamento. La navicella accumula nomi, e quando due nomi sono troppo vicini l'ordine prende la strada sbagliata senza che nessuno se ne accorga.

---

## (10) Documenti di visione e ricerche

**Asse 1 — Intenzione dichiarata.**
La navicella produce due categorie di documenti oltre ai file di stato e agli artefatti accademici: visioni (dove si vuole andare) e ricerche (cosa ha trovato l'Argonauta). Il Capitano cementato ha dichiarato che *«quando una conversazione produce un cambio strutturale del sistema, scrivi voce datata in archivio-fondazione.md»*. I documenti di visione sono la prosa che precede quella voce — la fase di esplorazione prima della decisione.

**Asse 2 — Oggetto pensato insieme.**
Documenti in `00-capitano/dedalo/` (visioni di Dedalo), ricerche GitHub in `00-capitano/dedalo/ricerca-github/`, analisi e pareri in `00-capitano/titanogenesi-*.md` e `00-capitano/dedalo/parere-titanogenesi.md`. Il titanogenesi — il documento che ha ratificato la nomenclatura dei procedimenti il 12-08 — è l'artefatto di visione con l'impatto strutturale più diretto sul sistema.

**Asse 3 — Meccanica costruita.**
In `00-capitano/dedalo/` (escluse coperture e registro): 30+ file — brief, visioni, ricerche, piani. Tra questi: `navicella-mobile-visione.md`, `navicella2d-visione.md`, `business-visione-v2.md`, `business-modello-v3.md`, `business-monetizzazione.md`, `omniroute-visione.md`, `app-mobile-visione.md`, `visione-cervello-memoria.md`, `apparato-A-metabolismo.md`, `apparato-B-completo.md`, `schiusura-bilancio-fonti.md`, `oroboro-rotaie.md`, `convocazione-terza-eta.md`, `parere-titanogenesi.md`, `replica-titanogenesi.md`, `piano-build-definitiva.md`, `scaletta-giuseppe-2026-08-13.md`, `notte-progetti.md`, `progetto-memoria-diretta.md`, `plancia-blueprint.md`, `brief-percorso-interattivo.md`, `progetto-cancello-esterno.md`. Ricerche GitHub: 8 file in `ricerca-github/` (starred repos, infra-costi, math-fisica, blockhouse, nuove stelle, risorse, strumenti-contenuti, omniroute-integrazioni).

**Asse 4 — Utilità effettiva.**
La misura dei documenti di visione non è le invocazioni: è quanti di essi hanno prodotto una decisione, un artefatto, o una voce in archivio-fondazione. Il titanogenesi ha prodotto la ratifica della nomenclatura dei procedimenti e il registro-procedimenti (impatto diretto e misurabile). `business-modello-v3.md` è il piano del Business, in pausa. Le ricerche GitHub sono sfociate in `schiusura-bilancio-fonti.md` e nel catalogo Temi. `omniroute-integrazioni.md` e `omniroute-visione.md` sono sfociati nell'installazione di OmniRoute oggi (impatto misurabile). `navicella-mobile-visione.md`, `app-mobile-visione.md`, `visione-cervello-memoria.md`, `navicella2d-visione.md`: esistono su disco, nessuna decisione seguita in archivio-fondazione risulta collegata direttamente a essi.

**Distanza fra colonne.**
Alta per i documenti che non hanno prodotto decisioni (visioni archiviate); bassa per quelli che hanno guidato costruzione reale (titanogenesi → registro, omniroute → installazione). La categoria «visione senza seguito» non è un difetto in sé — esplorare e non costruire è legittimo. Il problema è che questi documenti non hanno stato: nessun registro li dichiara `proposti` o `parcheggiati`, quindi il verificatore non li misura. Sono prosa che potrebbe essere l'inizio di qualcosa o il ricordo di qualcosa, e dal file non si capisce quale.

---

## (11) Procedimenti reali fuori dal registro

Il registro dei procedimenti è nato il 12-08. Prima di allora, e in parallelo, sono accadute cose che non hanno mai avuto una voce: lavori conclusi, crisi gestite, scoperte. Questa famiglia le nomina non per aggiungerle al registro retroattivamente, ma per misurare cosa il registro non vede per costruzione.

**Il YAML repair (12-08).** Quattro agenti invisibili per 37/26 giorni, trovati e riparati nella stessa sessione. Il difetto aveva due livelli: (a) description non quotata → parsing fallisce; (b) il runtime cade silenziosamente su `general-purpose` invece di segnalare il problema. La riparazione ha richiesto: lettura dei .jsonl per trovare `general-purpose` anomalo, aggiornamento dei 4 file `.md`, scrittura dello script `verifica-costituzione.py` (`c1_agenti_caricabili()`). Nessuna di queste azioni è in nessun registro — sono accadute, hanno lasciato file su disco, non hanno una voce che dica «questo era il problema, questo è stato fatto».

**Le tre build morte (13-15 agosto).** Tre sessioni di Demiurgo Accademico interrotte dal limite di sessione mentre il lavoro era in pancia. Ogni volta il lavoro perso non era il testo: era il contesto. L'effetto: `brief-lotto-esercizi.md`, `coda-notturna.py`, il metodo di stazionamento (lotti separati dal frammento), `lotto_innesta.js`. Una crisi ripetuta tre volte ha prodotto un'architettura più solida — ma la crisi in sé non è tracciata da nessuna parte come lezione formale. Il brief dice *«il limite di sessione ha ucciso tre build»* — quella è la traccia più esplicita, in un file di brief, non in un registro.

**La scoperta del quiz AV (16-08).** 324 unità, 1,01 passi medi — struttura che allena il riconoscimento anziché lo svolgimento. Trovato oggi misurando per il paper. Non è in nessun registro perché non era un procedimento noto: era un difetto ignoto. Non esiste un meccanismo nella navicella per tracciare le scoperte di questo tipo — difetti trovati per caso durante un'analisi, non durante la normale operazione.

**L'installazione di OmniRoute (16-08).** Giuseppe ha installato OmniRoute per rispondere al limite di sessione. Ierofante è stato dispacciato due volte per il gate ToS. Il progetto-cancello-esterno.md è stato scritto. Tre artefatti in una giornata per risposta a una crisi — nessuno di questi era in nessun registro prima di oggi.

**Il pattern di questa famiglia.** I procedimenti reali fuori dal registro appartengono a tre categorie: (a) crisi risolte che hanno prodotto architettura ma non sono state nominate; (b) difetti trovati per caso durante analisi non dedicate; (c) risposte a eventi esterni che producono artefatti prima che qualcuno abbia il tempo di aprire un voce. Il registro richiede che qualcuno apra una voce *prima* — presuppone un sistema abbastanza ordinato da pianificare. Un sistema sotto pressione (build che muoiono, limite di sessione, esame fra tre settimane) produce lavoro senza pianificazione, e quel lavoro non entra nel registro.

---

## (12) Pattern trasversali e conclusioni operative

### I tre pattern

**Pattern 1 — Il caso-che-non-so-leggere travestito da caso-normale.**

Tre manifestazioni in questo paper, due trovate lo stesso giorno (16-08):

- `conto_registro()` in `verifica-costituzione.py`: `eta is None` → `fuori = False` → voce contata come `attivo`. Un path inesistente dà lo stesso risultato di un path esistente e aggiornato.
- Lo strumento di misura sui frammenti: un frammento in JSON invece di JS → il parser restituisce 0 unità invece di errore. Il formato non riconoscibile e il pool vuoto escono dalla stessa porta.
- `lotto_innesta.js` che diceva «sintassi rotta» per una causa che era altra.

La struttura è identica: uno strumento che ha un ramo per il dato-valido e un ramo implicito per tutto il resto — e il ramo implicito non distingue fra dato-negativo e dato-non-leggibile. Il risultato è che il sistema non segnala il proprio limite di comprensione: lo silenziosamente collassa in un valore numerico (`0`, `False`, `attivo`) che sembra un risultato.

Il costo non è il singolo errore: è che lo strumento non segnala di non saper leggere, quindi chi lo usa non sa che c'è un limite. Il verificatore che conta come `attivo` un procedimento senza artefatto non sta mentendo — sta restituendo la risposta corretta per l'unico caso che ha contemplato (il file esiste), applicata al caso che non ha contemplato (il file non esiste).

**Pattern 2 — Componenti funzionanti non cablati.**

Il riversamento funziona perché è lineare: navicella → git → backup. Non richiede nessun altro componente. Ogni altra funzione end-to-end della navicella richiede un circuito: voce → ASR → intake → Rapsodo (il ponte manca); grafo → indice → porta-del-richiamo → risposta (la porta manca); Temi → catalogo → interrogazione (temi.py invocato 2 volte in un mese); Argonauta → Dedalo → Demiurgo Creativo (mai girato completo).

Il caso peggiore è il curl plancia negli hook: è distribuito su sei tipi di evento, è asincrono, ha timeout 2s, e ha `|| true`. Non può fallire visibilmente. Quando il backend non gira (la maggior parte delle sessioni), i sei hook sparano nel vuoto e non producono nemmeno un log di errore. È l'anti-pattern estremo del componente non cablato: non solo il circuito non è chiuso, ma il componente è progettato per non segnalare che il circuito non è chiuso.

**Pattern 3 — Mai nato per omonimia.**

L'ordine del 15-08 («metti anche questo nella coda») è l'esempio acuto. La forma generale: un intento di Giuseppe che trova un contenitore con un nome simile a quello giusto, ci entra, e non produce nessun segnale di fallimento perché il contenitore sbagliato accetta l'input. A differenza di un errore che dà errore, questo produce silenzio — il che è peggio, perché un errore si può correggere mentre il silenzio non segnala nulla da correggere.

La versione sistemica dello stesso pattern: comandi slash che esistono (`/oroboro`) per un concetto descritto altrove come superato. Un agente che cerca `/oroboro` nella lista dei comandi lo trova; l'intenzione che il concetto sia superato non è visibile nell'interfaccia.

**Un quarto pattern non si impone.** I tre reggono su evidenza diretta. Non aggiungo un quarto per completezza retorica.

---

### Conclusioni operative — per chi apre il documento a freddo dopo gli esami

Ordinate per rapporto guadagno/lavoro, con la misura quando c'è.

**1. Correggere il bug di `conto_registro()` — 1 riga, 30 minuti.**
`fuori = eta is None or eta > v["massimo"]` (proteggere il caso `v["massimo"] is None`). La voce `raccolta-atti` è contata come attiva pur avendo path inesistente. Guadagno immediato: la riga che Giuseppe legge all'avvio riflette la realtà. Lavoro: modificare righe 96-101 di `verifica-costituzione.py` e verificare che i casi esistenti tornino.

**2. Ripulire i quattro `.bak` in `.claude/agents/` — 5 minuti.**
`architetto.md.bak-20260812`, `demiurgo-creativo.md.bak-20260812`, `ermete.md.bak-20260812`, `ierofante.md.bak-20260812`. Non fanno danni, ma il runtime scandaglia la cartella: un file con nome ambiguo è rumore.

**3. Aggiornare CLAUDE.md — 20 minuti.**
Quattro punti: (a) «quattro protocolli operativi» → 11 presenti; (b) aggiungere la voce del cancello-esterno di Temi; (c) aggiungere la regola YAML description-sempre-quotata come nota permanente (oggi è solo nella nota di manutenzione dei file agente); (d) chiarire la distinzione `coda-notturna.py` vs `notturno/coda.md` per nome. Guadagno: il documento di partenza che tutti gli agenti leggono riflette il sistema reale.

**4. Aggiornare il registro per la sonda `quiz-metodi-pool-edp` — 10 minuti.**
La sonda `manca:...frags/edp.js` è falsa: il file esiste. La voce resta `proposto` in silenzio invece di rilevare che la condizione si è avverata. Aggiornare la sonda (o l'intenzione della voce) nel registro. Guadagno: il verificatore vede la realtà.

**5. Costruire la porta del richiamo — 2-4 ore, da fare dopo gli esami.**
Un solo comando — `cosa sappiamo di X` — che interroga i tre motori (indice, grafo, ricerca testuale) e dichiara da dove viene ogni pezzo. Il grafo ha 1010 legami e zero interrogazioni dal 25 luglio. L'indice si ricostruisce ogni sera e non viene letto. Entrambi diventano utili nel momento in cui esiste una porta. Guadagno: l'intero modulo memoria passa dall'essere un archivio all'essere uno strumento.

**6. Aggiornare `banca-fisica.md` — 30 minuti.**
Il ledger del Rapsodo è fermo dal 03-07, punta a un path inesistente (`Quiz_Meccanica_Orale_v1.html` → migrato in `percorso-matematica/meccanica/`), e conta 391 domande contro le 457 attuali. Guadagno: il secondo asse (indicizzazione per il gioco-fisica) riprende da dati veri.

**7. Dichiarare formalmente il Demiurgo Creativo come attivo — 1 sessione dedicata.**
È il terzo agente con zero dispacci. Dopo la riparazione del 12-08 e la pausa-studio, non ha mai ricevuto un brief. La prima sessione dopo gli esami dovrebbe contenere un brief concreto di Dedalo → Demiurgo Creativo su qualcosa di reale (non di test): è l'unico modo per sapere se la catena funziona e se il modello Sonnet regge o richiede Opus. Guadagno: dati invece di assunzioni su un terzo dell'architettura creativa.

**8. Misurare i passi per pool nei quiz — 2 ore per entrambi i quiz.**
Il rapporto passi/unità per pool non è tracciato da nessuno strumento automatico. Quiz AV: 1,01 medio (quasi tutte single-step). Quiz Metodi: 1,37 (meglio, ma non misurato per pool). Prima di usare i quiz per studiare, sapere quali pool allena il riconoscimento e quali lo svolgimento. Guadagno: studio mirato sull'esame reale, non su una simulazione dell'esame che era sbagliata.

**9. Scrivere lo stato dei visioni come voce nel registro — 1 ora.**
I 30+ documenti di visione in `00-capitano/dedalo/` non hanno stato. Quelli che hanno prodotto decisioni (titanogenesi, omniroute-visione) potrebbero essere marcati `concluso`; quelli aperti potrebbero diventare `proposti` con condizione. Guadagno: il verificatore vede anche la pipeline delle idee, non solo i cantieri in costruzione.

**10. Aprire il modulo Business con una sessione breve (1-2h, Ermete) — dopo gli esami.**
Non per costruire le pipeline: per sapere se Ermete funziona. La catena Ermete → Ierofante → pubblicazione non ha mai girato. Un test di 1-2h produce la prima misura reale di un sistema che oggi ha zero storia operativa. Guadagno: da zero dati a un dato.

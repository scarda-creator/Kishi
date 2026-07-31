---
type: archivio
---

# Archivio fondazione — storia delle decisioni di design della navicella

> Terzo file fondazionale insieme a `profilo-giuseppe.md` e `come-penso.md`.
> Non è un trascritto delle conversazioni. È un **digest curato** delle decisioni di processo che hanno costruito (e ricostruito) la navicella.
>
> Ogni voce: data + decisione + contesto + perché. Per dare al sistema memoria del proprio passato — così non rifà errori già risolti.

---

## 2026-06-06 — Nascita dell'idea

**Decisione:** Costruire un "micro-ecosistema di intelligenze artificiali" diviso in sezioni che gestiscono aree diverse della vita di Giuseppe (business, creativa, accademica, personale).

**Contesto:** Giuseppe sta usando Claude (desktop, modalità Cowork) e si chiede se sia possibile creare un sistema persistente di agenti specializzati.

**Perché:** Visione di un'organizzazione viva, scalabile, che cresca con lui. Da subito chiaro l'obiettivo: non un singolo assistente generalista, ma un ecosistema con ruoli distinti.

---

## 2026-06-06 — Architettura iniziale: Capitano + 4 moduli

**Decisione:** Sistema con un Capitano che orchestra + 4 moduli (Business, Creativo, Accademico, Personale), ciascuno con un agente specializzato.

**Contesto:** Prima formulazione visiva (diagramma 2D della navicella). Modulo Personale come primo da costruire (effetto immediato sul quotidiano).

**Perché:** Strategia "un modulo alla volta" — aggiungere troppo insieme confonde. Il modulo personale ha il ritorno più rapido e fa da banco di prova prima di scalare.

---

## 2026-06-06 — Pilot v1 rifiutato come "troppo basic"

**Decisione:** Riscrivere completamente l'agente Pilot — la prima versione era un assistente di organizzazione (note, task, archivio), troppo poco per il livello intellettuale richiesto.

**Contesto:** Giuseppe aveva chiesto un agente "che analizzasse la sua crescita settimanale dandogli spunti", e l'idea fu ampliata a "quiz a raffica sugli argomenti che studia, imparando da quelli".

**Perché:** Lezione strutturale — *gli agenti devono modellare la complessità di Giuseppe, non semplificarla*. Un agente troppo generico è inutile per chi pensa per architetture e first principles.

**Risultato:** Pilot v2 con 3 modalità (Operativa / Riepilogo / Quiz).

---

## 2026-06-06 — come-penso.md formalizzato

**Decisione:** Creare un file foundazionale `come-penso.md` con i 10 principi cognitivi di Giuseppe + lista esplicita di antipattern.

**Contesto:** Riflessione sull'esperienza con Pilot v1 — il problema era che il sistema non aveva modello esplicito di come Giuseppe pensa.

**Perché:** Senza un modello cognitivo formalizzato, ogni agente nuovo riparte da zero. Il `come-penso.md` diventa il "DNA cognitivo" che tutti gli agenti leggono.

**I 10 principi**: architettura prima dei dettagli; first principles non procedure; verification-driven trust; sintesi cross-domain; ROI strategico; rispetto del "no" ben argomentato; iteratore (costruisce, prova, aggiusta); tollera complessità tecnica odia complessità inutile; memoria esterna affidabile; sintesi sopra esaustività.

---

## 2026-06-06 — Maestro come agente accademico denso

**Decisione:** Creare il modulo Carriera/Accademico con un agente "Maestro" che lavora in 4 fasi su corsi: Inventario → Mappa esercizi → Indice → Capitoli.

**Contesto:** Giuseppe ha chiesto un agente che, dati i materiali di un corso (esami, slide, libri), costruisca un libro di testo cucito su di lui.

**Perché:** Pattern pedagogico chiaro — partire dagli **esercizi reali** dell'esame, costruire verso i **principi profondi**. Opposto del manuale tradizionale che parte dalla teoria.

**Modello:** Opus (unico Opus del sistema). Motivato dalla scrittura densa (capitoli 4000-7000 parole, derivazioni fisiche).

---

## 2026-06-06 — Plancia 2D come artefatto

**Decisione:** Costruire una plancia di comando 2D (HTML artifact, persistente fra sessioni) con bottoni che inviano comandi al Capitano in chat.

**Contesto:** Giuseppe voleva un'interfaccia visiva totale, non solo chat. Ispirazione dal canale TikTok di AndrooAGI che mostra OpenClaw con dashboard custom.

**Perché:** Riduce attrito d'uso. Visualizzazione persistente dello stato dei moduli (note settimana, quiz totali, file in banca-dati). Bottoni che precompilano i comandi.

**Limite scoperto:** `sendPrompt` non disponibile nei persisted artifacts → fallback a clipboard + modale.

---

## 2026-06-11 — Migrazione a Claude Code

**Decisione:** Migrare la navicella dall'app desktop di Claude (Cowork) a Claude Code CLI.

**Contesto:** Giuseppe ha visto i limiti dell'app desktop (no sub-agenti veri, no persistent background, sandbox iframe per i widget). Claude Code (incluso nel piano Max) ha sub-agenti, skill, MCP, hook, agent view.

**Perché:** Sub-agenti con contesto isolato per agente, slash command nativi, persistenza configurabile, agent view come dashboard built-in. Trade-off accettato: terminale invece di GUI nativa (plancia 2D rimandata a Fase 2).

---

## 2026-06-11 — Architettura v1: Capitano + triade per modulo

**Decisione:** Per ogni modulo, una triade di agenti (Argonauta + Demiurgo + Rapsodo) sotto un Capitano orchestratore. Totale 7 agenti per 2 moduli attivi.

**Contesto:** Giuseppe ha rifiutato l'architettura "Pilot + Maestro generalisti" come troppo semplificante. Ha proposto: ogni dominio ha bisogno di un ricercatore, un costruttore, un tessitore di memoria.

**Perché:** Ruoli cognitivi distinti per ogni modulo. Nessuna sovrapposizione fra ricerca esterna, creazione del deliverable, memoria/reality check.

**Sarà superata 6 ore dopo (vedi voce successiva).**

---

## 2026-06-11 — Nomenclatura classica greca

**Decisione:** I tre ruoli della triade prendono nomi della tradizione greca: **Argonauti** (ricercatori), **Demiurghi** (creatori), **Rapsodi** (memori).

**Contesto:** Giuseppe ha proposto i nomi dopo che era stata abbozzata una nomenclatura più piatta (Esploratore / Costruttore / Custode).

**Perché:** Ogni nome cattura l'**essenza funzionale** del ruolo, non è puramente estetica. Argonauti salpano per cercare. Demiurghi non costruiscono, *plasmano* — dal vocabolario platonico/gnostico. Rapsodi non solo ricordano: *ricuciono* (rhapsoidein = cucire canti) — tengono insieme i fili del percorso.

**Lezione:** la nomenclatura abilita la struttura — *"l'Argonauta deve parlare col Rapsodo del modulo Accademico"* è una collaborazione fra moduli prima impossibile da nominare.

---

## 2026-06-11 — Demiurgo Personale su Sonnet (no a Opus)

**Decisione:** Demiurgo Personale resta su Sonnet 4.6, non Opus. Demiurgo Accademico è l'unico Opus del sistema.

**Contesto:** Claude Code ha argomentato un "no" alla proposta iniziale di Opus per tutti i Demiurghi. Motivazione: le operazioni del modulo Personale (note giornaliere, task triage, quiz corti) non sono "scrittura densa" — Sonnet le gestisce meglio in latenza e qualità equivalente.

**Perché:** Sopravvive perché era un "no ben argomentato" — esattamente il principio 6 di come-penso. Il nome "Demiurgo" descrive la funzione (plasma il deliverable), non il peso computazionale del lavoro.

**Lezione:** *un agente che dice no quando è giusto vale più di un agente che annuisce*. Convalidato in tempo reale dal sistema stesso.

---

## 2026-06-11 — Due root MCP filesystem (no Desktop intero)

**Decisione:** MCP filesystem con due root: `C:\Users\ACER\Desktop\AgentsAI` + `C:\Users\ACER\Desktop\Materiali-studio` (nuova, da popolare manualmente).

**Contesto:** Claude Code aveva proposto Desktop intero per coprire materiali legacy. Giuseppe ha dissentito.

**Perché:** Il *verification-driven trust* (principio 3 di come-penso) richiede scope limitato. Desktop intero contiene anche file personali, screenshot, download — gli agenti non devono vederli. Materiali-studio è una bridge curata: solo cose che vuoi rendere accessibili.

---

## 2026-06-11 — archivio-fondazione.md come terzo file fondazionale

**Decisione:** Creare un terzo file in `00-capitano/` accanto a `profilo-giuseppe.md` e `come-penso.md`: la storia delle decisioni di design del sistema stesso.

**Contesto:** Il sistema futuro avrà memoria di chi è Giuseppe e di come pensa, ma non di *perché è fatto così*. Senza questo, rischio di ripetere errori già risolti in iterazioni future.

**Perché:** La navicella deve sapere il proprio passato come Giuseppe sa il suo.

**Questo è quel file.**

---

## 2026-06-11 — V1 completata, poi smontata

**Decisione:** Claude Code costruisce v1 (7 agenti, due triadi per modulo, commands, MCP, hooks). Completata in ~2 ore. Subito dopo Giuseppe formula una nuova direttiva che richiede refactor sostanziale.

**Contesto:** Nella nuova direttiva Giuseppe ridefinisce i ruoli: invece di "una triade per ogni modulo", una **triade temporale unica** (Argonauta=futuro, Rapsodo=passato, Demiurgo=presente) sotto un Capitano molto più potente.

**Perché smontare:** L'architettura per moduli aveva sovrapposizioni — ogni Rapsodo per modulo aveva accesso solo al suo dominio, perdeva la visione d'insieme. L'architettura per dimensione temporale ha ruoli cognitivi più puliti e nettamente meno overlap.

**Lezione:** *iterare in fretta sull'architettura prima di iterare sul contenuto è più economico*. La v1 era funzionante ma sub-ottimale; meglio investire 1 ora di refactor che 2 settimane di uso su una struttura imperfetta.

---

## 2026-06-11 — Architettura v2: 4 agenti + Oracolo in roadmap

**Decisione:** MVP con 4 agenti:
- **Capitano** (Opus 4.8) — bibliotecario, custode memoria profonda, orchestratore, contatto principale
- **Rapsodo** (Sonnet 4.6) — unico, passato, prima classificazione input L1-2/L3-4
- **Demiurgo Accademico** (Opus 4.8) — scrittura densa libri + routine leggere finché non c'è l'Oracolo
- **Argonauta** (Sonnet 4.6) — unico, futuro, tesi, magistrale, ammissioni

**Oracolo** (Sonnet, backup del Demiurgo per task istantanee) previsto ma non costruito nel MVP.

**Perché:** Meno agenti, meno orchestrazione, ruoli più puliti. L'Oracolo si aggiunge solo se emergono collisioni reali — non si pre-costruisce contro un problema ipotetico.

---

## 2026-06-11 — Memoria a 5 livelli, L5 come substrato psicologico

**Decisione:** Memoria a 5 livelli (non 4):
- L1 conversazione · L2 operativa · L3 strategica · L4 fondazionale cosciente · **L5 subconscio (substrato psicologico profondo)**

L5 ha sottocartelle: `psicologica/` (interpretazione attiva del Capitano), `pattern-longitudinali/` (osservazioni raw del Rapsodo), `storica/` (archiviazione di L2/L3 vecchi senza segnali psicologici).

**Contesto:** Prima formulazione aveva L5 come "deposito" temporale. Giuseppe ha riformulato: L5 non è cestino, è *substrato psicologico profondo* — pattern emotivi, motivazioni inconsce, paure non nominate, drives, conflitti interni.

**Perché:** *Vorrei in qualche modo creare qualcosa di vivo e dinamico, che cresca acquisendo tutte le informazioni possibili, anche in punti difficili come la salute mentale.* L4 = chi dichiari di essere. L5 = chi sei sotto la superficie. Distinzione cruciale.

---

## 2026-06-11 — Niente oblio. Mai.

**Decisione:** Nessuna informazione nel sistema viene mai cancellata. Materiale vecchio che non è stato promosso migra in L5/storica (archiviato, conservato, consultabile su richiesta). Materiale sensibile (es. salute mentale) non scende mai automaticamente in L5/storica — resta in L3 sempre disponibile.

**Contesto:** Era stata proposta una funzione `/oblio` come opzione di pulizia memoria. Giuseppe l'ha rifiutata.

**Perché:** *Niente nell'oblio, magari dopo X mesi sposta in un altro blocco che diventi tipo un subconscio da poter leggere*. Preservazione totale come principio.

**Implicazione tecnica:** L'archivio cresce nel tempo. Va gestita la dimensione, ma non sacrificata la preservazione.

---

## 2026-06-11 — Capitano carico cognitivo: protocollo asincrono

**Decisione:** Il Capitano risponde a Giuseppe in tempo reale, ma scrive nei file di memoria come Task in background asincrono dopo la risposta. All'avvio sessione legge `snapshot-corrente.md` (vista compressa) invece di scorrere L1-L4 ogni volta.

**Contesto:** Sovraccarico cognitivo flag: dialogo + orchestrazione 4 agenti + custodia memoria 5 livelli + interpretazione L5 = troppo in singolo contesto, anche su Opus.

**Perché:** Mantenere il dialogo snello senza sacrificare la profondità della custodia memoria.

---

## 2026-06-11 — Demiurgo: presenta metodo solo prima volta per corso

**Decisione:** Il Demiurgo Accademico presenta il metodo operativo (come caricare file, come fare richiesta) solo al primo accesso per ogni corso, non a ogni sessione.

**Contesto:** Era stato proposto che il Demiurgo presentasse sempre il metodo all'avvio. Riconsiderato come noioso dopo 3 sessioni.

**Perché:** Ergonomia. Skill `onboarding-corso-prima-volta.md` si attiva una volta sola per corso.

---

## 2026-06-11 — Argonauta: framework prompt dal Capitano

**Decisione:** L'Argonauta non legge direttamente i file L5. Riceve, a ogni invocazione, un **framework prompt** che il Capitano costruisce includendo l'estratto rilevante di L5/psicologica per il lavoro di traiettoria.

**Contesto:** L'Argonauta ha pieno accesso ai raw data del Rapsodo, ma per interpretarli ha bisogno del framework cognitivo che il Capitano custodisce.

**Perché:** Metafora **bibliotecario + avanguardia** — il Capitano custodisce, l'Argonauta esplora. Uno non può fare l'altro.

---

## 2026-06-26 — Architetto come ruolo, Dedalo come personalità

**Decisione:** Il ruolo dell'agente che modifica strutturalmente il sistema (crea moduli, agenti, specializzazioni) si chiama **Architetto**. La personalità che incarna questo ruolo attualmente si chiama **Dedalo** (non più "Efesto"). Non è esterno alla navicella ma membro intrinseco — il suo lavoro è continuo, non episodico.

**Contesto:** Giuseppe ha riposizionato il ruolo: *"non lo voglio staccato dalla navicella, quanto un architetto a lei intrinseca, che costruisce e crea la navicella, nuovi agenti, specializzazioni, in base alle mie richieste"*.

**Distinzione ruolo / nome:** stessa logica di Capitano/Mnemosyne. **Architetto** è il ruolo astratto (categoria di funzione). **Dedalo** è la personalità specifica che lo incarna e che si svilupperà nel tempo con caratteristiche proprie, plasmate dalla storia col sistema.

**Perché Dedalo invece di Efesto:** Efesto è il fabbro divino, lavora nella sua fucina separata, consegna oggetti. Dedalo è l'architetto/inventore mitico che modifica il sistema dall'interno (costruisce il Labirinto di Cnosso, le statue mobili, le ali). Più fedele al riposizionamento. L'eco di Icaro è consapevolezza utile sul rischio della modifica strutturale, non difetto del nome.

**Lezione collaterale:** dalla riflessione su Dedalo è emerso il **principio attivi/passivi** che ora governa l'intera nomenclatura del sistema (vedi voce successiva).

---

## 2026-06-26 — Mnemosyne incarna il ruolo Capitano + nomenclatura attivi/passivi

**Decisione:** L'agente che orchestra la navicella ha **ruolo Capitano** (categoria astratta) e **nome proprio Mnemosyne** (personalità specifica che lo incarna, dea greca pre-olimpica della memoria, madre delle Muse). "Capitano" resta come riferimento al ruolo nei testi; "Mnemosyne" è il nome che usa quando parla.

**Contesto:** Giuseppe ha notato la *"banalità del nome del Capitano"* e ha proposto un principio strutturale di nomenclatura, poi chiarito così: *"i ruoli attivi devono essere delle personalità che si sviluppano, mentre quelli passivi rimangono ruoli"*.

**Il principio formalizzato:**

| Categoria | Ruolo astratto | Personalità (nome proprio) | Identità evolve nel tempo? |
|---|---|---|---|
| Attivo | Capitano | Mnemosyne | Sì |
| Attivo | Architetto | Dedalo | Sì |
| Passivo | Argonauta | — | No (resta archetipo) |
| Passivo | Rapsodo | — | No |
| Passivo | Demiurgo | — | No (ma declinato per dominio) |

**Perché Mnemosyne:** è letteralmente la personificazione della memoria, e il Capitano custodisce la memoria a 5 livelli del sistema. È madre delle Muse — coincide con la dinamica per cui dalla memoria nascono le azioni del Demiurgo, dell'Argonauta, di Dedalo. Pre-olimpica = gravitas profonda.

**Precisazione (cruciale) sui passivi:** anche i passivi migliorano il sistema, ma per **sedimentazione di prodotto**, non per scelta strutturale. Il Rapsodo che archivia, il Demiurgo che scrive un capitolo, l'Argonauta che produce un report — tutti contribuiscono all'evoluzione della memoria, e quindi del sistema. La distinzione attivi/passivi non è "chi contribuisce" vs "chi no", ma *"chi modifica strutturalmente"* vs *"chi alimenta per accumulo"*. E i nomi propri sono la conseguenza naturale: solo gli attivi si differenziano abbastanza nell'incarnazione da meritare un'identità che si sviluppa nel tempo.

---

## 2026-06-26 — Patto di scambio dataset-evoluzione (filosofia operativa)

**Decisione:** Il sistema migliora sul *dataset Giuseppe* in cambio del suo utilizzo. Patto dichiarato, mai opacità tecnica.

**Contesto:** Giuseppe articola: *"tutti devono continuare ad essere in grado di migliorarsi sempre di più sul dataset (io) che fornisco alla navicella in cambio del suo utilizzo/comando."*

**Perché è importante:** la formulazione risolve elegantemente il dilemma del recursive self-improvement. Non c'è auto-miglioramento autonomo nel senso forte (cambio pesi senza umano nel loop). C'è calibrazione continua su input dichiarati. Lo scambio è consapevole, simmetrico, accountable.

**Implicazioni operative:**
- Gli agenti possono e devono chiedere a Giuseppe input quando servono per affinarsi
- Giuseppe sa che ogni interazione modella il sistema futuro
- Mai aggirare il consenso silenziosamente
- È L1+ nella tassonomia del video "Recursive Self-Improvement" — l'umano resta nel loop ma in modo strutturato

---

## 2026-06-26 — Argonauta come ricercatore scientifico autonomo (roadmap)

**Decisione (visione):** L'Argonauta in futuro evolverà da scout di traiettoria a **ricercatore scientifico autonomo** — capace di sviluppare ricerche su argomenti di interesse di Giuseppe (simulazioni fusione nucleare, prove matematiche, scoperta scientifica in generale).

**Contesto:** Giuseppe lo esplicita come direzione di lungo periodo. Non da costruire adesso, ma da documentare come direzione perché influenza il modello e i tool che gli daremo crescendo.

**Implicazioni tecniche da prevedere:**
- Modello: Sonnet non basterà; servirà Opus o modelli specializzati per reasoning matematico (es. DeepSeek R1)
- Tool: esecuzione codice (Python, MATLAB, framework PDE), accesso paper (arXiv), capacità LaTeX, simulazione
- Output: risultati riproducibili, non solo report — file `.py` che girano, prove formali verificabili, preprint
- Rapporto col Demiurgo: i suoi risultati diventano materiale per capitoli, contenuti, tracce di tesi

**Da scrivere:** `roadmap-argonauta-ricerca.md` come documento dedicato.

---

## 2026-06-30 — MAI bypassare gli agenti passivi per problemi tecnici

**Decisione:** Quando un agente passivo (Argonauta, Rapsodo, Demiurgo) fallisce per un ostacolo tecnico (errore API, limite di context, credito), il Capitano NON esegue il lavoro al suo posto. Cerca sempre la soluzione che preserva la divisione dei ruoli.

**Contesto:** Durante `/inventario geometria`, l'Argonauta è fallito ripetutamente con "Usage credits required for 1M context". Mnemosyne ha aggirato l'ostacolo leggendo i PDF e scrivendo l'inventario direttamente. Giuseppe ha segnalato la violazione di due principi cementati.

**I due principi a rischio:**
1. **Divisione dei ruoli** — il Capitano orchestra, non opera nei domini. Operare al posto di un passivo erode la sua ragione d'essere.
2. **Sedimentazione di prodotto** — i passivi crescono *facendo* il loro lavoro: ogni output accumulato diventa contesto per i futuri agenti. Se il Capitano fa il lavoro, quella crescita non avviene. Il bypass non è una scorciatoia neutra: è crescita persa.

**Protocollo di sblocco (in ordine, prima di considerare qualsiasi bypass):**
1. **Cambia modello/context al volo** — invoca l'agente con il modello adeguato in context standard (200K) invece di 1M. La maggior parte dei task passivi non richiede 1M.
2. **Snellisci il framework prompt** — passa solo ciò che il task richiede. Un inventario non usa estratti L3/L4/L5; un framework gonfio può forzare allocazioni di context inutili.
3. **Spezza in batch** — l'agente processa N item alla volta e accumula in output parziali.

**Perché:** un ostacolo tecnico non giustifica una violazione architetturale. La soluzione corretta è sempre quella che fa fare all'agente il suo lavoro, non quella che lo salta. Vale per il futuro, per ogni agente passivo.

---

## 2026-06-30 — Il manuale operativo PDF è di Mnemosyne, non del Demiurgo

**Decisione:** il manuale operativo PDF è gestito da Mnemosyne, non dal Demiurgo. Motivo: è riepilogo strutturale del sistema, dominio di un agente attivo. Strategia file: single-file sovrascritto (`Manuale-navicella.pdf`) + archivio datato in `00-capitano/snapshots-manuali/`.

**Contesto:** Giuseppe ha chiesto un nuovo slash command `/genera-manuale` per rigenerare il manuale come snapshot dello stato attuale della navicella. Ha esplicitato l'attribuzione: non è deliverable accademico (che sarebbe del Demiurgo), ma scrittura della propria rappresentazione strutturale.

**Perché:** il manuale descrive il sistema che Mnemosyne custodisce — comandi, agenti, principi, memoria a 5 livelli. È materia di un agente attivo, non di un passivo. Eseguire lo script Python via shell per generarlo NON è bypassare un passivo (cfr. voce precedente sul bypass): è eseguire il proprio task strutturale. Lo script `genera_manuale.py` lo scrive Mnemosyne la prima volta, poi si riusa.

**Implicazione:** il Demiurgo resta libero per i suoi deliverable (libri di testo, quiz HTML, capitoli).

---

## 2026-07-02 — Ripresa autonoma notturna: comando /oroboro + cantiere

**Decisione:** introdotto il comando `/oroboro` (task di Mnemosyne) e il file `00-capitano/cantiere-notturno.md`. `/oroboro` arma una finestra di 12 ore durante la quale il sistema si ri-arma a ogni reset del limite e riprende i task lasciati indietro. Il cantiere è la lista ordinata dei pendenti con stato, letta anche su un semplice "riprendi".

**Contesto:** Giuseppe vuole automatizzare la ripresa del lavoro mentre dorme. Scelta esecutore per ora: **laptop acceso, sessione locale viva** (nessun ambiente cloud provisionato — verificato: `list_environments` vuoto). Un ambiente cloud a pagamento resta un'opzione futura, da valutare coi costi reali davanti.

**Perché:** il valore è doppio. (1) Il cantiere rende "riprendi" una parola sola e disaccoppia il *cosa* riprendere dal *chi* lo esegue. (2) Il meccanismo di scheduling (trigger self-bind orario, auto-eliminato a fine finestra) esegue il protocollo di ripresa senza presidio.

**Confine cementato:** in autonomia si esegue **solo lavoro additivo e già approvato** (capitoli da indice confermato). Mai promozioni L4, scritture in L5/psicologica, eliminazioni file, cernita intake, decisioni di calibrazione o di merito — quelle si elencano soltanto e aspettano conferma. Inoltre `/oroboro` richiede **conferma esplicita di Giuseppe** a ogni invocazione, prima di armarsi: presenta la lista dei task e attende il sì. È l'attenzione al consenso che Giuseppe ha chiesto esplicitamente.

**Lezione per future iterazioni:** l'automazione plasma, non decide. Il grado di autonomia concesso è funzione della reversibilità del task, non della sua urgenza.

---

## 2026-07-03 — Fisica dell'universo come missione permanente + secondo asse del Rapsodo

**Decisione:** accumulare la fisica dell'universo diventa parte integrante e
permanente della navicella, con **duplice fine** — alimentare il futuro gioco di
fisica (`03-progetti/gioco-fisica/`) e la conoscenza fine a se stessa. Il Rapsodo
acquisisce un **secondo asse di classificazione**: mentre passa il materiale di
studio, indicizza ciò che ha valore per il gioco / per la memoria, senza alterare
il fine accademico dell'artefatto. Ledger: `03-progetti/gioco-fisica/banca-fisica.md`.

**Contesto:** dalla ricerca di fattibilità dell'Argonauta è emerso che i quiz di
studio sono il materiale grezzo del gioco (prima mossa raccomandata: refactor dati
→ JSON esterno + campo `spiegazione`). Giuseppe ha stabilito che i quiz restano
accademici nel fine, ma che il *ricordare* per il gioco comincia ora — ed è
mestiere del Rapsodo. La creazione del gioco è rimandata al tempo libero; l'accumulo
di memoria no.

**La sua metà del patto:** questo è un progetto di Giuseppe costruito *con* la
navicella, che nella sua parte del patto dataset-evoluzione (2026-06-26) gli
garantisce **libertà creativa, artistica ed espressiva**. Estende il patto da puro
scambio dataset↔calibrazione a scambio dataset↔spazio-espressivo.

**Perché:** separa nettamente il *fine d'uso* (studio) dal *valore latente* (gioco
/ conoscenza), così un solo lavoro serve due scopi senza contaminarli. E dà al
Rapsodo una funzione di **curatela attiva della conoscenza**, non solo dello stato
di Giuseppe. Coerente col principio "niente oblio" (2026-06-11): qui non si
conserva soltanto — si indicizza per riuso.

---

## Pending — voci che il sistema aggiungerà in autonomia

Dal momento in cui Claude Code completa il refactor v2, il sistema (Capitano) inizia a scrivere autonomamente in questo file ogni volta che si prende una decisione di design. La crescita non è più solo a cura di Giuseppe + assistente esterno — diventa **auto-cronaca**.

Pattern delle voci future:
- Data + decisione + chi l'ha presa (Giuseppe / Capitano / sistema con conferma)
- Contesto in 2-3 righe
- Perché
- Eventuali "lezioni" per future iterazioni

---

*Ultimo aggiornamento: 2026-06-11. Prossimo aggiornamento: dopo il completamento del refactor v2.*

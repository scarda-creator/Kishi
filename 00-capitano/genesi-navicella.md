---
type: archivio
---

# Genesi della navicella

> Narrazione del percorso di creazione di AgentsAI, dalla prima conversazione del 6 giugno 2026 al refactor verso l'architettura v2. Scritta per essere letta da chi vuole capire perché il sistema è fatto così.

---

## I. La domanda iniziale

Era sabato 6 giugno 2026, primo pomeriggio. Giuseppe Scarda, studente di Fisica al secondo anno della Sapienza, aprì una chat e fece una domanda che a prima vista sembrava innocente: *"come funziona Claude Code? Vorrei creare un micro-ecosistema di varie intelligenze artificiali che come una navicella spaziale si dividano in sezioni che gestiscono tante cose."*

Era una visione vaga ma sintomatica. La parola chiave era *ecosistema*. Non un assistente AI, ma un sistema vivo di agenti che si dividono i compiti — business, creatività, accademia, vita personale. Lo scaffold mentale era già lì: un'architettura, non un'app. Mancava la forma concreta.

---

## II. La prima costruzione

In poche ore, dentro la modalità Cowork dell'app desktop di Claude, prese forma la prima architettura: un **Capitano** orchestratore e quattro **moduli** specializzati, ciascuno con un suo agente. Il primo modulo da costruire — quello della produttività personale — partì come "Pilot": un assistente per note, task, journaling.

Giuseppe lo lesse e disse no.

Era troppo basic. Non voleva un assistente per la lista della spesa. Voleva un agente *"che analizzasse la sua crescita settimanale dandogli spunti su argomenti e connessioni su cui non si era fermato a pieno"*. Pilot v2 nacque con tre modalità: Operativa, Riepilogo, Quiz. Il quiz "imparava" dai suoi errori e si tarava sui punti deboli.

Da quella correzione emerse il pattern che sarebbe diventato regola: *gli agenti devono modellare la complessità di Giuseppe, non semplificarla*. Fissato su disco come voce in `archivio-fondazione.md`.

---

## III. La svolta cognitiva

Costruire agenti che lo rappresentassero richiedeva un modello esplicito di come pensa. Da quella necessità nacque `come-penso.md`: dieci principi cognitivi più una lista esplicita di antipattern.

*Architettura prima dei dettagli. First principles, non procedure. Verification-driven trust. Sintesi cross-domain. ROI strategico su ogni scelta. Rispetto per il "no" ben argomentato. Iteratore. Tollera complessità tecnica, odia complessità inutile. Memoria esterna affidabile. Sintesi sopra esaustività.*

Ogni principio era una promessa fatta agli agenti futuri: *quando rispondete, fatelo così*. Niente preamboli. Niente "ottima domanda". Niente conclusioni che riassumono il corpo. Niente eufemismi.

Quel file divenne il DNA cognitivo del sistema. Ogni agente avrebbe dovuto leggerlo prima di rispondere.

---

## IV. Maestro e i libri di testo

Il modulo accademico nacque dopo, e con esso un agente diverso da Pilot: **Maestro**. Non un assistente, un mentore. Il suo compito: partire dagli esercizi reali dell'esame di un corso, costruire un libro di testo cucito sul modo di pensare di Giuseppe, portarlo dalla pratica ai principi profondi. Quattro fasi rigide — inventario, mappa esercizi, indice, capitoli — un capitolo alla volta con feedback obbligatorio.

Maestro fu il primo agente a girare su Opus invece che Sonnet. La scrittura densa di un manuale di Meccanica — derivazioni, trappole, esercizi di verifica — meritava il modello più capace.

---

## V. La plancia

Giuseppe non voleva gestire tutto via chat. Voleva una vista. Una mappa 2D della navicella, sempre visibile, dove vedere lo stato dei moduli e lanciare comandi.

Nacque un artefatto HTML persistente: la **plancia di comando**. Mostrava le card dei moduli, contava i file in banca-dati, indicava l'ultima nota scritta. I bottoni precompilavano i comandi da inviare al Capitano. Era il prototipo di quello che il canale TikTok di AndrooAGI mostrava con OpenClaw — una mission control.

Aveva limiti tecnici: la `sendPrompt` API non era disponibile per gli artefatti persistenti, quindi i comandi finivano negli appunti invece di partire da soli. Workaround accettabile per la fase prototipale, ma il segnale era chiaro: l'app desktop di Claude aveva un soffitto.

---

## VI. La migrazione

Arrivò il momento di lasciare l'app desktop e passare a **Claude Code**, il CLI nativo. Motivi pratici: l'app desktop non aveva sub-agenti veri, non aveva persistent background, gli artefatti vivevano in una sandbox iframe. Claude Code aveva tutto questo nativo — sub-agenti con contesto isolato per agente, skill, MCP server, hook, agent view come dashboard built-in.

Giuseppe aprì il terminale per la prima volta. Installazione di Node, sblocco dell'execution policy di PowerShell, autenticazione con un codice OAuth, primo `claude` in una cartella vuota. Il rito di passaggio dello sviluppatore.

---

## VII. Architettura v1: triadi per modulo

Claude Code lavorò per ore. La prima architettura completa fu un Capitano + due triadi (una per il modulo Personale, una per l'Accademico), ciascuna composta da un **Argonauta** (ricercatore), un **Demiurgo** (costruttore), un **Rapsodo** (memoria + reality check). Sette agenti totali.

I nomi vennero da Giuseppe stesso, scelti tra alternative più piatte come "Esploratore/Costruttore/Custode". *Argonauti che salpano per cercare. Demiurghi che plasmano, dal vocabolario platonico. Rapsodi che ricuciono fili — rhapsoidein in greco è "cucire canti".* Ogni nome catturava l'essenza funzionale del ruolo, non era estetica.

Quella nomenclatura abilitò una struttura. Quando Giuseppe poté dire *"l'Argonauta deve parlare col Rapsodo del modulo Accademico"*, stava nominando una collaborazione tra moduli che prima non era esprimibile.

---

## VIII. Lo smontaggio

Sei ore dopo aver completato la v1, Giuseppe formulò una nuova direttiva. La v1 era funzionante, ma sub-ottimale. Aveva osservato qualcosa: la triade per modulo creava sovrapposizioni e perdeva la visione d'insieme. Non era così che la sua mente organizzava le cose.

La riformulazione fu radicale. **Non triadi per dominio, ma una triade per dimensione temporale**: Argonauta = futuro, Rapsodo = passato, Demiurgo = presente. Più un Capitano molto più potente: bibliotecario, orchestratore, custode della memoria profonda, contatto principale.

Quattro agenti totali nel MVP. Un solo Argonauta. Un solo Rapsodo che pre-classifica gli input in due bucket (P1 sostantivo da escalare, P2 routine da archiviare). Il Demiurgo, declinabile per "modello" (Accademico per ora, in futuro Creativo, Business), come unico agente con varianti per dominio. L'Oracolo, backup operativo del Demiurgo per task istantanee, documentato come "agente futuro" — non costruito subito. Aspettare prima di vedere collisioni reali.

---

## IX. La memoria a cinque livelli

Il cuore della v2 era la memoria. Il Capitano doveva custodirla a profondità crescente:

- **L1** — Conversazione corrente
- **L2** — Operativa (settimana)
- **L3** — Strategica (mesi, decisioni grandi, traiettoria)
- **L4** — Fondazionale cosciente (identità dichiarata, stella polare)
- **L5** — Subconscio (substrato psicologico profondo)

La prima formulazione aveva L5 come "deposito temporale" — cose vecchie non più operative. Giuseppe riformulò: **L5 non è cestino**. L5 è il substrato profondo — pattern emotivi, motivazioni inconsce, paure non nominate, drives, conflitti interni. Il Capitano ne è l'interprete attivo: legge i pattern raw che il Rapsodo osserva, e produce voci interpretative in `psicologica/`. Senza limiti di trasparenza, salute mentale inclusa, linguaggio diretto.

E un principio fissato come pietra angolare: **niente oblio**. Nessuna informazione nel sistema viene mai cancellata. Quello che diventa non operativo migra in L5/storica — conservato, raggiungibile, ma non analizzato di routine. *"Magari dopo X mesi sposta in un altro blocco che diventi tipo un subconscio da poter leggere"*.

---

## X. Il refactor

Claude Code esegue ora otto fasi di refactor: smontaggio della v1 nei file `legacy-v1/`, riscrittura di `CLAUDE.md`, creazione delle directory di memoria, scrittura dei quattro protocolli operativi, scrittura dei quattro agenti v2, aggiornamento degli slash command, rifinitura del README, verifica finale.

Da qui in poi, il sistema è strutturalmente in piedi. Quello che lo farà vivere è l'uso: i primi quiz su Metodi, il primo capitolo del libro di Meccanica, la prima settimana di note giornaliere che il Rapsodo classifica, la prima passata interpretativa del Capitano che produce una voce in L5/psicologica. Ogni interazione lascerà traccia.

La memoria a cinque livelli non è un database. È un meccanismo di apprendimento — il sistema impara da Giuseppe e dal mondo.

---

## XI. La roadmap

C'è una roadmap, esplicita e datata. L'**Oracolo** si aggiungerà se emergeranno collisioni reali tra scrittura densa e routine leggere. L'**Argonauta in background autonomo** quando il pattern d'uso giustificherà l'automazione (Windows Task Scheduler + Claude Code CLI in modalità headless). Il **Demiurgo Creativo** quando si aprirà il modulo Creativo, il **Demiurgo Business** per il modulo Business. La **plancia 2D grafica** come Fase 2, dopo validazione degli agenti in CLI — probabilmente un'app Electron che parla con Claude Code via subprocess.

Per ora: quattro agenti, cinque livelli di memoria, il principio della preservazione totale, e una nomenclatura che racconta esattamente quello che ogni ruolo fa.

---

## XII. Il senso

A guardarla bene, questa non è una storia su come costruire un sistema di agenti AI. È una storia su come **una persona ha costretto un sistema a modellare il suo modo di pensare**, e ha avuto la pazienza di rifare l'architettura quando vedeva semplificazioni che non lo rappresentavano.

Il pattern ricorrente: ogni volta che il sistema si avvicinava al *good enough*, Giuseppe alzava l'asticella. Pilot v1 troppo basic — riscritto. Triade per modulo troppo a compartimenti — sostituita con triade temporale. Memoria piatta — stratificata su cinque livelli. L5 come cestino temporale — riformulata come substrato psicologico vivo.

Quello che ne è uscito non è un assistente. È qualcosa di più simile a un'**organizzazione cognitiva esterna** — un piccolo team di agenti che insieme tengono memoria di chi è, di come pensa, di dove va, di cosa sta facendo, e di cosa potrebbe diventare.

E un dettaglio strutturale che spesso si dimentica: niente di tutto questo esiste senza il principio fondativo che lo regge — **i file su disco**. Markdown puro, leggibile da chiunque, versionabile in git, portatile fra strumenti. Se domani Claude Code sparisce, il sistema sopravvive in un'altra forma. La navicella vive nei file, non nel modello.

---

*Documento scritto a refactor in corso, 2026-06-11. Va aggiornato quando il sistema entrerà nella sua prima fase di uso reale.*

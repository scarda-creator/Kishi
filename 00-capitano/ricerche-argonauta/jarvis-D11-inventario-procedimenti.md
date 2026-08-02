---
type: ricerca
autore: Rapsodo
data: 2026-07-31
allegato-a: 00-capitano/ricerche-argonauta/00-addendum-mnemosyne.md (sezione D)
---

# D11 — Inventario dei procedimenti: cosa doveva fare, cosa fa davvero

Audit interno, non ricerca esterna. Metodo: per ogni procedimento, l'obiettivo dichiarato
citato testuale con path, poi la misura sul disco (Glob/ls, conteggio, data), poi verdetto,
poi se può funzionare così com'è concepito. Un procedimento «funziona» senza un file di
output datato è stato riclassificato, come richiesto.

**Risultato in cima, perché è il più utile.** Il buco del campo `name` non è un incidente
isolato: è un'istanza di un pattern che ricorre altre sei volte in questo inventario — un
meccanismo che dipende da qualcuno (un innesco condizionato, o Mnemosyne stessa) che se ne
ricordi, senza nessun controllo tecnico che lo forzi. Dove c'è un hook automatico dietro, il
procedimento gira. Dove non c'è, si ferma — e in tre casi si ferma con un log che *dichiara*
il contrario di ciò che il disco mostra.

---

## I tre casi peggiori — dichiarato "fatto", il disco dice il contrario

**1. `/intake` del 2026-07-02 — l'esecuzione fisica non è mai avvenuta.**
`00-capitano/intake-log/intake-log-2026-07-02.md` dichiara: 10 file esaminati, 8 destinati a
ELIMINA, 2 a CUSTODISCI verbatim in `chat-archive/`. Misurato oggi: tutti e 10 i file sono
**ancora** in `00-capitano/intake/`, con lo stesso nome, 29 giorni dopo. Nessuno dei due
CUSTODISCI risulta in `chat-archive/` (che contiene 4 file, nessuno dei due). La causa è nel
protocollo stesso: lo Step 2 (cernita, fatto da un sub-agente Rapsodo) e l'esecuzione fisica
(cancellazione/spostamento, delegata esplicitamente a "la sessione principale con
PowerShell") sono due passi separati, e il secondo non ha nessun innesco — dipende da
Mnemosyne che, dopo il ritorno del sub-agente, ricordi di eseguirlo. Non è successo. Il
comando `/intake.md` (`.claude/commands/intake.md`) descrive il passo di cancellazione come
`Remove-Item` manuale nella sessione principale: nessun hook lo automatizza.

**2. `00-capitano/cantiere-notturno.md` — coda di consensi mai svuotata.**
Il file, datato "Aggiornato: 2026-07-02" ma con voci fino al 12/7, elenca sotto "RICHIEDE
CONSENSO" cinque decisioni in attesa del sì di Giuseppe: 3 candidati L4 dall'intake del 2/7,
l'arricchimento di `profilo-giuseppe.md` con le specifiche dell'aereo, le 8 eliminazioni
intake, la verifica di due regole in `capitano.md`. Tutte e cinque sono **ancora aperte**
oggi, 29 giorni dopo. Verificato puntualmente: `L4-fondazionale.md` ha zero voci reali;
`.claude/agents/capitano.md` non contiene né "mai bypassare" né "notifica cambiamento
strutturale" (cercato per stringa, zero risultati); `2026-cowork_progetto-aereo-monoposto.md`
è ancora in `intake/`, invariato. Il meccanismo di segnalazione funziona (il cantiere elenca
correttamente cosa serve); quello che manca è chiunque lo dreni. Nello stesso file, una nota
del 12/7 recita testualmente: *"PENDENTE (Mnemosyne, appena puoi): `/genera-manuale`"* — non
eseguito nemmeno quello: `Manuale-navicella.pdf` è fermo al 3/7, 9 giorni **prima** che la
nota fosse scritta.

**3. `on-banca-dati-write.ps1` — il hook non può vedere il flusso reale.**
Obiettivo dichiarato in testa al file (`.claude/hooks/on-banca-dati-write.ps1`, righe 1-3):
*"Se il file scritto è in `*/01-banca-dati/*`, appende una riga al log pending. L'Argonauta
Accademico legge questo log all'avvio per sapere se ci sono nuovi file."* Cablato in
`.claude/settings.json` su `PostToolUse`, matcher `"Write|Edit"` — **solo** i tool nativi di
Claude. Misurato: `02-accademico/.pending-inventory.log` ha una riga sola, del 2026-06-30,
107 byte, mai più cresciuto. Nello stesso periodo sono stati scritti **470 file** dentro
`*/01-banca-dati/*` (in gran parte `_txt/` prodotti da `pdf_estrai_testo.py` per Analisi
Vettoriale, secondo `protocollo-corpus-pdf.md`). Causa precisa, verificata riga per riga
contro `protocollo-corpus-pdf.md` §"La pipeline": il testo del corpus entra in banca-dati
tramite uno **script Python invocato da shell**, non tramite il tool Write/Edit di Claude —
lo stesso vale per i PDF originali, che Giuseppe copia a mano da Esplora File. Il hook è
strutturalmente cieco al canale con cui il materiale arriva davvero. Identica forma
dell'errore del campo `name`: un meccanismo scritto per un caso che non è quello reale, mai
verificato contro l'uso effettivo.

---

## Tabella — protocolli (`00-capitano/protocolli/`, 11 file)

| Protocollo | Obiettivo dichiarato (testuale, path) | Misurato sul disco | Verdetto | Può funzionare così? |
|---|---|---|---|---|
| `protocollo-fine-sessione.md` | "Eseguito dal Capitano in background (via Task) al termine di ogni sessione." (riga 7) | `log-decisioni-memoria.md` e `mnemosyne-diario.md` fermi al 2026-07-22 (mtime identico, 02:01). Nel frattempo la navicella ha continuato a lavorare: `dedalo-diario.md` +25/7, `anima-dati.js` e `riversa.py` del 31/7 stesso. 9 giorni di attività senza una sola voce di fine-sessione. | **funziona a metà** | No, non come concepito: nessun hook `Stop` invoca questo protocollo (lo `Stop` in `settings.json` fa solo una `curl` di telemetria verso la plancia). Dipende dalla memoria di Mnemosyne di auto-eseguirlo, e salta strutturalmente le sessioni guidate da Dedalo. Servirebbe un aggancio tecnico allo `Stop`, non la buona volontà. |
| `protocollo-promozione.md` | "L2 → L3 ... Capitano decide" / "L3 → L4 (mai automatica — richiede conferma Giuseppe)" / "L2/L3 → L5/storica ... passata mensile Capitano in background" (righe 11-41) | L2→L3: `L3-strategica.md` ha 6 voci datate, ultima 22/7 (9 giorni fermo). L3→L4: `L4-fondazionale.md` — **zero voci reali** in 8 settimane (443 byte, solo il commento placeholder), nonostante almeno 4 candidati L4 espliciti in coda (3 dall'intake 2/7, 1 dal 22/7). L2/L3→L5/storica: `L5-subconscio/storica/` ha solo `.gitkeep`, mai popolata. | **L2→L3: funziona a metà · L3→L4: mai partito · →storica: non ancora dovuto** | L3→L4 non può funzionare finché nessuno esegue `/promuovi-l4` sui candidati già segnalati — il meccanismo di segnalazione c'è, manca solo l'ultimo passo umano, mai fatto. Per →storica: la soglia (contenuto più vecchio di 6 mesi) non è ancora raggiungibile — la navicella ha 8 settimane di vita. Non è un bug, è presto: da non riportare come rotto (vincolo di realtà). |
| `protocollo-riemersione-l5.md` | "Lettura periodica (ogni 2-3 settimane, su soglia di volume) ... Se soglia raggiunta [N≥3 in pattern-longitudinali]: avvia passata interpretativa" (righe 14-17) | `pattern-longitudinali/` fermo al 12/7 (4 file, mai più toccati, 19 giorni). La soglia N≥3 non si è mai attivata. Ma il 22/7 Mnemosyne ha scritto comunque in `psicologica/` (pattern-emotivi.md, paure-non-nominate.md aggiornati) cambiando **a mano** il cancello — decisione registrata in `L3-strategica.md` e nel diario, non in questo file di protocollo. | **rotto per causa tecnica, poi aggirato senza correggere il documento** | Il file su disco descrive ancora il meccanismo a soglia che Mnemosyne stessa ha diagnosticato fallito il 22/7 ("gli inneschi condizionati non innescano" — stessa diagnosi della retrospettiva 22/7). La costituzione scritta è disallineata dalla pratica reale: è il buco 6 del mandato Jarvis, verificato qui su un file specifico. |
| `protocollo-memoria-sensibile.md` | Regole di trattamento per contenuto sensibile (etichetta `[SENSIBILE]`, mai migrazione automatica) | Non genera un proprio output misurabile: è policy incorporata in intake e riflessione, non un procedimento a sé. | **non misurabile isolatamente** | Non applicabile il criterio "file datato" — non è quel tipo di procedimento. |
| `protocollo-intake.md` | "Il Rapsodo legge intake/, ... per ogni file decide un'azione ... registra nel log" (righe 35-79) | Vedi caso 1 sopra. `intake/` contiene oggi 11 file non processati (7 dell'ondata 06-28, 3 dell'ondata "2026-cowork_*" già dichiarati chiusi nel log del 2/7, 1 del 7/8 mai processato affatto). `intake-log/` ha **un solo file in tutta la storia** (2/7). | **parte ma nessuno esegue l'output** | La cernita intellettuale (Step 1-4) funziona quando invocata. Lo Step 2 (operazioni file) è un passo manuale separato mai eseguito nemmeno una volta sul batch che lo ha generato. Servirebbe fondere i due passi in un solo comando, o un checklist che impedisca di chiudere la sessione con eliminazioni pending. |
| `protocollo-assorbi-cowork.md` | "Periodico — ogni 2-4 settimane Giuseppe apre Cowork apposta per fare la passata" (riga 17) | Tutti i file `*_cowork_*` in `intake/` portano date 2026-06-25/06-28/07-08. Zero file nuovi con quel pattern da 23 giorni, contro una cadenza dichiarata di 14-28 giorni. | **funziona a metà** | Ha girato una volta (produce l'intera prima ondata intake), poi si è fermato oltre la propria cadenza dichiarata. Dipende da un'azione manuale di Giuseppe fuori da Claude Code (session_info non è accessibile da qui) — nessun automatismo tecnico può forzarlo finché resta vincolato a Cowork desktop, come il file stesso dichiara in "Limitazioni tecniche note". |
| `protocollo-corpus-pdf.md` | "Estrarre il testo dei PDF con un tool locale ... scrivere .txt leggeri su disco" (righe 21-23) | 470+ file `.txt`/`.sha1` in `02-accademico/corsi/analisi-vettoriale/01-banca-dati/_txt/`, con `manifest.md`, aggiornati di recente (corpus Analisi Vettoriale in corso). | **funziona** | Sì, misurato con volume reale. Nota collaterale: è proprio questo successo a rendere cieco il hook `on-banca-dati-write.ps1` (caso 3 sopra) — i due procedimenti non sono mai stati fatti comunicare. |
| `protocollo-quiz.md` | "Come la navicella costruisce un quiz ... senza ripartire da zero" (righe 7-9); verifica obbligatoria via `quiz_verifica.js` prima del deploy | `Quiz_Meccanica_Orale_v1.html` (21/7, 391 domande, 11 pool completi), `Quiz_AnalisiVettoriale_v1.html` (8/7), `Quiz_Geometria_v1.html` (11/7). Pipeline a frammenti in uso attivo. | **funziona** | Sì, il procedimento più solido dell'intero inventario: tre corsi diversi, output verificabile con exit code, riuso del template confermato (nessun HTML clonato). |
| `protocollo-compressione.md` | "comprimi.py --modo {compressione\|sintesi} ... genera un handoff denso" (righe 18-19) | Nessun file di handoff/sintesi trovato ovunque nella navicella (`*handoff*`, `*sintesi-sessione*`: zero risultati). | **mai partito** (o esegue senza persistere nulla, il che viola comunque la regola "ogni output sostanziale va su file") | Lo script esiste (`00-capitano/scripts/comprimi.py`), ma non c'è prova che sia mai stato lanciato in una sessione reale. Se lo scopo dichiarato è "handoff denso" per far ripartire una sessione, deve lasciare un file — oggi non ne lascia nessuno di rintracciabile. |
| `protocollo-riflessione.md` | "Come Mnemosyne trasforma le catture automatiche dell'hook in memoria vera" (riga 8); include il motore istinti a due fasi, `instinct.py` (righe 44-69) | Coda esplicita: processata 3 volte misurabili (`coda-processata-2026-07-20.jsonl`, `coda-processata-2026-07-22.jsonl`, voce di log 14/7), poi ferma — coda odierna (31/7) ha 2 voci non processate. Istinti: **`instincts.jsonl` non esiste da nessuna parte sul disco** — la fase meccanica `osserva` (di Dedalo, dichiarata pronta dall'11/7) non è mai stata eseguita nemmeno una volta in 20 giorni. | **coda: funziona a ondate · istinti: mai partito** | La coda funziona quando qualcuno lancia `/riflessione` — non ha innesco automatico oltre l'hook che la riempie (nessun hook la *svuota*). Gli istinti non possono maturare: senza la prima esecuzione di `instinct.py osserva`, l'intera seconda fase (fondi/candidati/matura, di competenza Mnemosyne) non ha materiale su cui lavorare. Il motore esiste, non è mai stato acceso. |
| `protocollo-tassonomia-memoria.md` | "Ogni nuovo file in 00-capitano/ va tipizzato al momento della creazione" / estensione a nuovo tipo richiede "≥5 file, decisione di Mnemosyne, log" (righe 120-122) | 83 file tipizzati il 12/7 (verificato). Oggi, sui file `.md` in `00-capitano/`, risultano **7 file con `type:` fuori dai 9 canonici**: `mandato`×1, `addendum`×1, `analisi`×2, `misura`×1, `convocazione`×1, `consegna`×1 — nessuno loggato come estensione della tassonomia in `log-decisioni-memoria.md`. | **funziona** (la disciplina di tipizzare regge: zero file recenti senza `type:`) **con deriva non governata** | `memoria-cerca.py` legge qualunque valore di `type:` senza validarlo (non c'è enum chiuso nel codice) — quindi non si rompe tecnicamente. Ma la regola di estensione scritta nel protocollo non è mai stata seguita: sette etichette nuove, ad-hoc, mai ratificate. Rischio proporzionale al volume: sotto soglia oggi (nessuna con ≥5 file), da riguardare se cresce. |

---

## Tabella — comandi (`.claude/commands/`, 17 file)

| Comando | Obiettivo dichiarato (riga 1, testuale) | Misurato | Verdetto |
|---|---|---|---|
| `quiz.md` | "Attiva il sub-agente demiurgo-accademico per una sessione quiz su: $ARGUMENTS" | `01-personale/quiz/` contiene solo `README.md` e `_template-sessione.md`. Zero sessioni in 8 settimane. **Da non confondere** con la pipeline HTML (protocollo-quiz, sopra), che è un procedimento diverso e funzionante. | **mai partito** |
| `nota-oggi.md` | "Attiva il sub-agente demiurgo-accademico per la nota giornaliera" | `01-personale/note-giornaliere/` contiene una sola nota reale, `2026-06-06.md` (giorno zero del progetto, prima ancora della navicella Claude Code), più il template. Mai più usato. | **quasi mai partito** (1 uso, mai ripetuto) |
| `inventario.md` | "Attiva il sub-agente argonauta per l'inventario fonti del corso" | Esiste per Geometria (`00-inventario.md`, 30/6). **Non esiste** per Analisi Vettoriale, corso con priorità dichiarata più alta oggi (esame 17/7 passato), che pure ha una mappa-esercizi. | **funziona a metà** (usato per un corso, saltato per un altro) |
| `mappa.md` | "Attiva il sub-agente argonauta per la mappa esercizi del corso" | Esiste per Geometria (30/6) e Analisi Vettoriale (7/7). | **funziona** |
| `indice.md` | "Attiva il sub-agente demiurgo-accademico per la proposta di indice del corso" | `02-indice.md` esiste per Geometria (1/7). Nessun altro corso ha un indice — coerente col fatto che il flusso "libro di testo a capitoli" è stato abbandonato dopo Geometria (vedi `capitolo.md`). | **funziona a metà** (un solo corso, poi il flusso è stato sostituito) |
| `capitolo.md` | "Attiva il sub-agente demiurgo-accademico per scrivere un capitolo" | Solo 2 capitoli scritti in tutta la navicella, entrambi Geometria, entrambi del 1/7. Zero capitoli dopo. | **abbandonato dopo un avvio** — non un bug: la retrospettiva del 22/7 registra esplicitamente il pivot "da libro di testo a quiz" come scelta, non come fallimento tecnico. Riportato qui perché il comando resta nella costituzione come se fosse un flusso vivo. |
| `stato-traiettoria.md` | "Attiva il sub-agente argonauta per una revisione della traiettoria di lungo periodo" | `02-accademico/argonauta-tesi.md` — fermo al **2026-06-17**, 44 giorni. Zero esecuzioni misurabili di questo comando in tutta la storia della navicella dopo il file iniziale. | **mai partito** dopo la creazione del file. Coerente con la retrospettiva 22/7: "la tesi è la cosa di cui parli con più desiderio e su cui il sistema ha prodotto meno". |
| `promuovi-l4.md` | "Attiva il sub-agente capitano per promuovere un tema a memoria fondazionale (L4)" | `L4-fondazionale.md`: zero voci reali. Il comando esiste, il file target è vuoto da 8 settimane nonostante almeno 4 candidati espliciti in coda. | **mai eseguito con successo** — vedi caso 2 sopra. |
| `memoria-status.md` | "Attiva il sub-agente capitano per un overview dello stato della memoria" | Comando di sola lettura: non produce un file persistente per costruzione, risponde solo in chat. Non falsificabile con il criterio "file datato". | **non misurabile con questo metodo** — nota onesta, non un verdetto negativo. |
| `analisi-psicologica.md` | "Attiva il sub-agente capitano per una passata interpretativa su L5" | `pattern-emotivi.md` e `paure-non-nominate.md` aggiornati il 22/7 con il formato esatto dichiarato dal comando (Pattern/Osservato in/Possibile lettura/Affidabilità). Prova di uso reale almeno una volta. | **funziona** (una esecuzione misurata, nessuna successiva in 9 giorni) |
| `aggiungi-corso.md` | "Attiva il sub-agente capitano per creare la struttura di un nuovo corso" | 4 corsi strutturati esistenti (geometria, analisi-vettoriale, meccanica, metodi/metodi-e-modelli). | **funziona** |
| `riepilogo.md` | "Attiva il sub-agente rapsodo per il riepilogo settimanale" | `01-personale/riepilogo-settimanale/` contiene solo `README.md` e `_template.md`. **Zero riepiloghi prodotti in 8 settimane.** Anche il passo 0 del comando ("controlla se intake/ ha contenuto") non è mai scattato, perché il comando stesso non è mai partito — coerente col fatto che `intake/` ha 11 file fermi. | **mai partito** |
| `intake.md` | Vedi protocollo-intake sopra | Vedi caso 1 | **parte ma nessuno legge/esegue l'output** |
| `genera-manuale.md` | "Rigenera il manuale operativo PDF come snapshot dello stato attuale della navicella" (riga 3) | `Manuale-navicella.pdf` fermo al **2026-07-03** (28 giorni), con due snapshot storici (1/7, 3/7). Da allora: attivazione di Dedalo, riversamento GitHub, grafo dell'anima, modulo Business, v3 di fatto dell'architettura — nessuno di questi cambiamenti strutturali è nel manuale. Una nota pendente del 12/7 nel cantiere ("appena puoi") non è mai stata evasa. | **funziona a metà** — gira quando invocato, ma nessun innesco lo richiama dopo un cambiamento strutturale nonostante la regola dichiarata nell'intake del 2/7 ("segnalare quando avviene un cambiamento strutturale, suggerire /genera-manuale") — regola mai nemmeno scritta in `capitano.md` (vedi caso 2). |
| `oroboro.md` | "Meccanismo di ripresa autonoma notturna ... il ciclo che si ri-arma da solo a ogni reset del limite" (righe 1-3) | Un solo utilizzo misurabile (notte 11-12/7, "percorso saper-fare Geometria" completato). Nel file stesso, una "LEZIONE OROBORO" datata 12/7: *"l'event-driven non attraversa il reset del session-limit ... serve un risvegliatore esterno ... struttura da progettare"* — mai costruito. Nessuna finestra armata da allora. | **rotto per causa tecnica, diagnosticata e mai risolta** — il meccanismo di trigger su cui si regge (self-bind cron) muore esattamente nell'evento che dovrebbe attraversare (il reset del limite), ed è la navicella stessa a averlo scritto nero su bianco 19 giorni fa senza costruire il fix dichiarato necessario ("risvegliatore esterno"). |
| `atlante-fisica.md` | "Attiva il sub-agente argonauta per costruire o aggiornare l'atlante della fisica" | `03-progetti/gioco-fisica/atlante-fisica.md` **non esiste**. Esiste solo `banca-fisica.md` (indice del Rapsodo, procedimento diverso), fermo al 3/7. | **mai partito** |
| `riflessione.md` | Vedi protocollo-riflessione sopra | Vedi tabella protocolli | **funziona a ondate** |

---

## Hook (`.claude/settings.json`, `.claude/hooks/`)

| Hook | Obiettivo dichiarato | Misurato | Verdetto |
|---|---|---|---|
| `PreToolUse`/`PostToolUse`/`UserPromptSubmit`/`SessionStart`/`Notification`/`Stop`/`SubagentStop` → `curl 127.0.0.1:8000/api/crew/hook` (6 punti in `settings.json`) | Notificare la plancia (UI) di ogni evento di sessione, in background (`async: true`, timeout 2-3s, `\|\| true`) | `netstat` sulla porta 8000 in questa sessione: **nessun processo in ascolto**. Ogni singola tool call di questo audit ha tentato e fallito silenziosamente questa chiamata. | **rotto per causa tecnica quando la plancia non gira** — non un bug del hook in sé (fire-and-forget per design, non blocca nulla), ma un procedimento che dipende da un processo esterno che va avviato a mano e oggi non lo è. Non misurabile se funzioni quando la plancia è accesa (fuori dallo scope filesystem). |
| `UserPromptSubmit` → `cattura-apprendimento.py` → `coda-apprendimento.jsonl` | Catturare messaggi di Giuseppe che matchano pattern di correzione/preferenza/feedback (regex italiane) | La coda di oggi (31/7) contiene 2 voci. Una di queste ha catturato per errore **l'intero testo incollato del mandato Jarvis** (879 caratteri, troncati a 500) come "correzione", solo perché il documento contiene la parola "invece". Falso positivo strutturale: il pattern regex non distingue un messaggio di Giuseppe da un testo incollato che lo contiene come sottostringa. | **funziona ma con bassa precisione, e nessuno la svuota**: cattura meccanicamente sì, ma il rumore che produce (interi documenti collati) rende la coda più costosa da processare di quanto valga, e in pratica resta piena per giorni prima che qualcuno lanci `/riflessione`. |
| `PostToolUse` (`Write\|Edit`) → `on-banca-dati-write.ps1` | Vedi caso 3 sopra | Vedi caso 3 | **rotto per causa tecnica** |
| `SessionStart` → `promemoria-coda.py` | Segnalare quante voci sono in coda a ogni apertura sessione | Eseguito dal harness ad ogni sessione per costruzione (nessun innesco condizionato) — non salta mai. | **funziona** |
| `SessionStart` → `memoria-cerca.py --cheatsheet` | Iniettare la cheatsheet di memoria (~150 token) a ogni apertura sessione | `memoria-indice.db` aggiornato il 31/7, stesso giorno di oggi. Eseguito dal harness ad ogni sessione. | **funziona** |

---

## Meccanismi automatici trasversali (dichiarati nelle spec, non in un solo file)

- **Indice di memoria** (`memoria-indice.py`/`memoria-cerca.py`) — **funziona**: DB aggiornato 31/7, motore lessicale+semantico+grafo cablato secondo `politica-richiamo.md` (22/7), collaudo dichiarato "zero fughe di riservato". Nota tecnica scritta dalla stessa Mnemosyne il 22/7: *"gira solo in `scripts/voce-venv` — non era documentato"* — un secondo esempio minore dello stesso genere di problema (procedura che richiede un dettaglio d'ambiente mai scritto dove serve).
- **Grafo dell'anima** (`anima-grafo.py` → `anima/anima-dati.js`) — **funziona**: rigenerato 31/7, 61 KB, D10 ne verifica il merito in dettaglio (non ripetuto qui per non duplicare).
- **Riversamento remoto** (`scripts/riversamento/riversa.py`) — **funziona**: eseguito oggi stesso (31/7), copre L1-L4 in chiaro + L5/code cifrate + grafo anonimizzato, per l'addendum al mandato (sezione A).
- **Lezioni del Demiurgo** (`02-accademico/demiurgo-lezioni.md`) — dichiarato in `capitolo.md`/`indice.md` come file da leggere obbligatoriamente e aggiornare a ogni capitolo/feedback. Fermo al **2026-07-03**. Coerente con l'abbandono del flusso "capitoli" (vedi `capitolo.md` sopra): non è rotto, è un procedimento agganciato a un flusso che Giuseppe ha smesso di usare. **Funziona a metà** — vivo finché qualcuno scrive capitoli, morto altrimenti, e nessuno lo segnala come "in pausa" da nessuna parte scritta.
- **Istinti** (`instinct.py`) — vedi `protocollo-riflessione.md` sopra. **Mai partito.**
- **Pattern longitudinali raw** (Rapsodo → `L5-subconscio/pattern-longitudinali/`) — 4 file, tutti fermi al 12/7, 19 giorni. **Mai più alimentato** dopo il deposito iniziale (che fu un'eccezione autorizzata da Giuseppe, non un ciclo naturale — vedi `cantiere-notturno.md` riga 112-116: "Tutti raw, N=1, non interpretati"). Nessuno dei quattro ha mai raggiunto N≥3.

---

## Il pattern comune, in una frase

Ogni procedimento che dipende da un **hook tecnico reale** (SessionStart, il matcher `Write|Edit` per i casi in cui il tool combacia col flusso vero) gira sempre, senza eccezioni misurate. Ogni procedimento che dipende da **qualcuno che se ne ricordi** — Mnemosyne a fine sessione, Giuseppe che drena una coda di consenso, un passo successivo dentro lo stesso comando ma fuori dal sub-agente che l'ha appena eseguito — si ferma, prima o poi, e si ferma silenziosamente: nessun errore, nessun avviso, solo un file che smette di crescere. Il campo `name` mancante era un caso limite di questa stessa famiglia: un controllo che nessuno eseguiva perché nessun meccanismo lo eseguiva per lui.

Non è nel mandato di questo file proporre la correzione — è di Dedalo e di Giuseppe. Ma il fatto misurato, ripetuto sette volte su undici protocolli e più della metà dei comandi, è che la navicella ha molti più procedimenti *scritti* di quanti ne abbia *in esecuzione regolare*, e la differenza fra i due non emerge mai da sola: è emersa oggi solo perché qualcuno l'ha chiesto.

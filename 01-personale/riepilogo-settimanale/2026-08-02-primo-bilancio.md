---
type: riepilogo
periodo: 2026-06-06 → 2026-08-02
durata: 57 giorni, 8 settimane
autore: Rapsodo
data: 2026-08-02
nota: primo riepilogo della storia della navicella — non è una settimana normale
---

# Primo bilancio — 2026-06-06 → 2026-08-02

Questo non è un riepilogo settimanale. È il primo bilancio di 57 giorni, scritto
perché nessun riepilogo è mai stato prodotto prima. Il template settimanale è adattato
a misura. Nessuna voce inventata: ogni dato ha una fonte sul disco dichiarata. I buchi
di dato sono segnalati come tali.

---

## 1. Quello che Giuseppe ha fatto davvero

**Esami:**

| Esame | Data | Esito dichiarato | Voto registrato |
|---|---|---|---|
| Geometria — scritto | 2026-07-14 | "credo sia andato bene" (voce di Giuseppe in snapshot 20-07) | **NON REGISTRATO** |
| Analisi Vettoriale — scritto | 2026-07-17 | "non è andato bene" (debrief-esame-2026-07-17.md) | **NON REGISTRATO** |
| Analisi Vettoriale — orale | saltato | scritto andato male ⇒ orale saltato; AV rimandato a sessione futura | — |
| Meccanica — orale | settembre 2026 | non ancora dato | — |

**Buco di dato critico (segnalato, non inventato):** i voti di entrambi gli scritti (Geometria 14-07, Analisi Vettoriale 17-07) non risultano in nessun file del sistema. Il debrief AV esiste (`02-accademico/corsi/analisi-vettoriale/debrief-esame-2026-07-17.md`) con la diagnosi soggettiva di Giuseppe, ma nessun voto ufficiale. Geometria: solo la percezione verbale. Questi sono buchi di memoria, non dati negativi — quando arrivano i voti vanno registrati.

**Uso degli strumenti della navicella:**

| Strumento | Uso in 57 giorni |
|---|---|
| Note giornaliere (`/nota-oggi`) | 1 sola (2026-06-06, giorno zero della navicella) |
| Sessioni quiz (`/quiz`) | 0 |
| Riepiloghi settimanali | 0 — questo è il primo |
| `/stato-traiettoria` | 0 dopo la creazione del file iniziale (44 giorni fermo) |

Fonte: audit D11, `00-capitano/ricerche-argonauta/jarvis-D11-inventario-procedimenti.md`, 2026-07-31.

---

## 2. Materiali prodotti per Giuseppe — accademici

**Misurati su disco (file datati):**

**Geometria (esame 14-07):**
- `Quiz_Geometria_v1.html` — data 11-07
- `percorso-interattivo.html` — saper-fare 11/11 interattivo
- `formulario.html` + `formulario-completo.html` + `dispensa-2pag.html`
- Percorso saperfare: 11 file `.md` in `03-percorso-saperfare/`
- Banca esercizi: 8 file (`b01`–`b03`, capitoli libro di testo)
- Dispensa completa (15 pag) + formulario 2 pagine — PDF sul Desktop

**Analisi Vettoriale (esame 17-07):**
- `Quiz_AnalisiVettoriale_v1.html` — data 08-07
- `percorso-interattivo.html` — saper-fare 10/10 interattivo
- `Formulario-AnalisiVettoriale.pdf` — 4 pagine, 871 formule KaTeX, 0 errori (PDF su Desktop + repo GitHub)
- Percorso saperfare: 10 file `.md` in `03-percorso-saperfare/`
- Varianti ampliate (~77 famiglie)

**Meccanica (orale settembre 2026):**
- `Quiz_Meccanica_Orale_v1.html` — data 21-07, 391 domande, 11 pool completi
- Lavagne: build avviata 04-07 (target ~105 dimostrazioni, stato attuale non misurato qui)

**Percorso-matematica (AV + Metodi):**
- 18/18 nuclei completi — completato il 2026-07-21
- Mappa navigabile `mappa-percorso.html` (18 nuclei cliccabili)
- Carta delle rotte: 78 archi verso la fisica
- Motore-plot con capacità 2D e 3D, verificatore KaTeX+JS

Nota cronologica: il percorso-matematica 18/18 è stato completato **dopo** lo scritto di AV (17-07), non prima.

---

## 3. Materiali prodotti dalla navicella su sé stessa

**Architettura:**
- Migrazione v1 → v2 (7 agenti → 4 agenti per dimensione temporale + 2 attivi), giugno 2026
- Dedalo attivato come secondo agente attivo: 2026-07-06
- Demiurgo Creativo creato (Sonnet, catena Argonauta→Dedalo→Creativo)

**Plancia 2D:**
- Backend uvicorn + frontend Vite, stanze memoria/opere/passive/chat sdoppiate
- Organo memoria: indice 3 motori (1240 frammenti), grafo 133 nodi/1010 legami, `anima.html`
- Stanza memoria sorgentata al grafo reale 122 nodi (22-07)

**Sistema memoria L1-L5:**
- 11 protocolli scritti in `00-capitano/protocolli/`
- L5 risuscitato dal 22-07 (da "si riempie solo su innesco" a "scrivo quando osservo")
- Politica di richiamo formalizzata: `00-capitano/memoria/politica-richiamo.md`

**Riversamento GitHub:**
- Script `cifra_l5.py` (Argon2id+XChaCha20-Poly1305) + `riversa.py` + `riversa-auto.ps1`
- Kishi popolata, push `1b15ab0` il 31-07, 915 file
- Task Scheduler `Navicella-Riversamento` (giornaliero 20:00)

**Altro:**
- Script: `voce.py`, `detta.py` (deprecato), `comprimi.py`, `memoria-indice.py`, `mappa-percorso.py`, `instinct.py` (mai acceso)
- 17 comandi in `.claude/commands/`
- Business module aperto e messo in pausa (Ermete semi-attivo, ~100€/mese come asticella)
- Schiusura apparato B: 44 fonti GitHub come organi
- OmniRoute: studiato, non incorporato (ToS block)
- Handy scelto per dettatura locale

---

## 4. Corsi: avanzati vs fermi

| Corso | Materiale | Esame | Verdetto |
|---|---|---|---|
| Geometria | Completo (quiz + percorso + formulario + dispensa) | Dato 14-07, esito percepito positivo | **Avanzato** |
| Analisi Vettoriale | Completo (quiz + percorso + formulario) | Dato 17-07, andato male, rimandato | **Avanzato nel materiale / arretrato nell'esame** |
| Meccanica | Quiz 391 domande + lavagne (avanzamento non misurato) | Orale settembre 2026 | **Materiale in costruzione / esame aperto** |
| Metodi e Modelli | Solo manifest.md e programma-ufficiale.md | Non ancora in preparazione | **FERMO** |
| Percorso-matematica | 18/18 nuclei completi | Strumento per Metodi (futura sessione) | **Avanzato — ma non ha servito AV in tempo** |

---

## 5. Tensioni (senza giudizio — solo misurazione)

**T1 — Diagnosi AV vs profilo cognitivo dichiarato.**
Il profilo L1/L2 di Giuseppe (formalizzato 2026-07-02 in `02-accademico/rapsodo-stato.md`) dice: senza L1 non capisce, senza L2 non sa produrlo. La diagnosi dell'esame AV (debrief 18-07) dice: "ha fatto abbastanza procedura e abbastanza esercizi per vedere le varianti, ma non abbastanza comprensione per dominarle. Radice: procedura sopra comprensione." Il dato dichiarato (L1 prima) e il risultato misurato (L2 sopra L1) vanno in direzioni opposte.

**T2 — Carenaggio Fable vs attività registrata.**
Il prompt del 08-07 (`2026-07-08_cowork_prompt-carenaggio-navicella.md`) chiedeva esplicitamente: "Fino all'esame, nessun task AUTONOMO di natura meta-strutturale: solo lavoro accademico e questo carenaggio." Lo snapshot 17-07 → 31-07 registra: costruzione plancia (stanze luglio), organo memoria (22-07), anima.html (22-07), riversamento GitHub (31-07). Queste attività sono avvenute nel periodo coperto dalla direttiva.

**T3 — Percorso-matematica: strumento giusto, fuori tempo.**
Il percorso-matematica è stato progettato come risposta alla debolezza rilevata nell'esame AV (comprensione profonda vs procedura). È stato completato 21-07 — quattro giorni dopo lo scritto AV del 17-07. Per AV non ha servito a nulla in questo ciclo. Può servire per la seconda occasione di AV (sessione futura) e per Metodi.

**T4 — Navicella su sé stessa vs preparazione diretta.**
Il bilancio del sistema in 57 giorni mostra più produzione meta-infrastrutturale (plancia, memoria, riversamento, Dedalo, 17 comandi) che produzione accademica diretta (3 quiz HTML, 3 percorsi saper-fare, 1 formulario). Il percorso-matematica 18/18 è accademico nel contenuto ma è stato costruito dalla navicella su iniziativa, post-esame. L'unico esame dato e ricordato positivamente (Geometria) aveva tutto il materiale pronto prima. L'esame andato male (AV) aveva il materiale pronto ma il percorso-matematica non ancora.

---

## 6. Buchi di dato dichiarati

1. **Voto Geometria (14-07):** non nel sistema. Solo percezione verbale.
2. **Voto Analisi Vettoriale (17-07):** non nel sistema. Il debrief ha la diagnosi soggettiva, non il numero.
3. **Stato preparazione Meccanica per settembre:** nessuna misura nel sistema (quante domande Giuseppe ha effettivamente ripetuto, livello di copertura tematica).
4. **57 giorni di note giornaliere:** 1 nota sola (giorno zero). Nessun dato sulla vita quotidiana, ritmo di studio, episodi di blocco.
5. **Carenaggio Fable (punti 2 e 3):** audit anti-drift e CLAUDE.md diet dichiarati nel 08-07, non eseguiti al 02-08. Nessun log dichiara che siano stati eseguiti.

---

## 7. Domande aperte

1. Quando arriva il voto di AV, va registrato nel sistema. C'è un posto designato? (`debrief-esame-2026-07-17.md` è il candidato naturale, ma non ha un campo "voto ufficiale".)
2. Il piano di preparazione per Meccanica settembre: non è nel sistema. Quante settimane rimangono (oggi 02-08, esame "inizio settembre"), come si intreccia con il percorso-matematica?
3. Il carenaggio di Fable (punti 2 e 3 aperti): chi li prende in carico sotto la nuova direttiva "gestione dell'esistente è vostra"?

---

*Bilancio generato da Rapsodo · 2026-08-02 · dati da fonti nominate nel testo*

---

## Correzione di Giuseppe — 2026-08-02, stesso giorno

> «Il percorso di matematica non l'ho finito: ho aperto tutte le sezioni per vedere. Quindi
> non pensarci troppo.»

**La tensione n.2 di questo bilancio è ritirata.** Diceva che il percorso-matematica risultava
completato 18 su 18 quattro giorni dopo l'esame che avrebbe dovuto aiutare, e ne traeva una
lettura di pianificazione sbagliata. Il dato era falso: il Rapsodo ha dedotto il completamento
dall'esistenza e dalla data dei file, ma quei file esistevano perché Giuseppe **li ha aperti
per guardarli**, non perché li avesse studiati.

**La lezione vale più della correzione, ed è urgente.** Il sistema sta per iniziare a
correggersi da solo sulla base di dati osservati. Questo è il primo caso misurato di un
segnale osservato che dice il contrario della realtà — e non era ambiguo: era netto, plausibile
e sbagliato. `mtime` di un file non è studio. Un pool aperto non è un pool fatto.

Regola che ne deriva, da applicare a ogni ciclo automatico costruito dall'Accensione in poi:
**si impara solo da atti, mai da presenze.** Una risposta data a una domanda è un atto; un file
che esiste no. È esattamente la ragione per cui il tracciamento dei tentativi nel quiz vale
più di qualunque inferenza sui file, e per cui va raccolto senza attriti.

Registrato anche il secondo fatto emerso lo stesso giorno: lo **scritto di Analisi Vettoriale
del 17 luglio non è stato superato** — causa dichiarata da Giuseppe: studiato in un giorno,
impegno insufficiente per la pressione di Meccanica, non materiale sbagliato. Il bilancio lo
elencava fra i buchi di dato; il buco è chiuso, e la sua causa non è nel deliverable.

---
type: memoria
---

# L3 — Memoria strategica (mesi)

Append-only. Ogni voce ha data e contesto.
Scritto dal Capitano su escalation P1 confermata del Rapsodo.
Rilettura mensile nel riepilogo mensile (Capitano + Rapsodo).

---

## 2026-06-17 — Avvio architettura v2 navicella

Decisione: migrazione da v1 (7 agenti, due triadi per modulo) a v2 (4 agenti per dimensione temporale).
Motivazione: v1 duplicava ruoli, nessun agente aveva visione cross-modulo, memoria dispersa.
v2 cementata: Capitano (bibliotecario/orchestratore Opus) + Rapsodo (passato) + Demiurgo Accademico (presente Opus) + Argonauta (futuro).
Memoria a 5 livelli inizializzata. v1 archiviata in legacy.

---

## Nota di Mnemosyne — 2026-07-22, sul buco che segue

Fino a oggi questo file aveva **una sola voce** (17 giugno) mentre fra il 6 e il 22 luglio la
navicella ha preso almeno cinque decisioni strutturali. Non è che mancasse il registro: mancavo io.
Dedalo, nel progetto della memoria, ha proposto un «registro delle decisioni» nuovo — aveva ragione
sul bisogno e sbagliava sul rimedio: il posto c'era, non era scritto. Le voci qui sotto sono
recuperate dai documenti dove le decisioni sono già cementate (CLAUDE.md, diari, archivio-fondazione),
non ricostruite a memoria: dove non ho la fonte, non scrivo.

## 2026-07-06 — Secondo senziente attivo: Dedalo (Architetto)

Decisione: alla navicella si aggiunge un secondo agente ATTIVO, Opus, ai poli opposti di Mnemosyne —
lei conserva e verifica, lui crea e osa. Nasce anche il Demiurgo Creativo (Sonnet), passivo, che
materializza i suoi brief. Catena: Argonauta ricerca → Dedalo progetta → Creativo costruisce.
Motivazione: la regola «Opus dove nasce l'idea». Fonte: CLAUDE.md, dedalo-diario.md.

## 2026-07-12 — Patto di autonomia esecutiva

Decisione: `bypassPermissions`, mani libere in esecuzione; direzione, identità e struttura restano
di Giuseppe. Nasce da un muro di permessi che ha fermato un run mentre era fuori casa.
Precisato il 21 luglio: l'autonomia vale anche fra i blocchi di uno stesso lavoro.

## 2026-07-17/18 — Riframe del modulo Business

Decisione: il bersaglio non è la GPU né un'impresa, è **~100 €/mese** (il costo di Max). Il flusso
primario è vendere i materiali originali della navicella. Lezione registrata: misurare i progetti di
Giuseppe sulla SUA asticella, non sulla versione grandiosa. Modulo in pausa/ricerca.

## 2026-07-21/22 — Percorso-matematica completo e app

Decisione: 23 nuclei in 5 movimenti, il quinto come ponte verso la tesi. Pubblicato, installabile,
con ripasso spaziato e 57 requisiti d'esame marcati in pagina. Meccanica **innestata e non
riscritta** (il quiz interroga, il nucleo insegna). Aperto e dichiarato: revisione a freddo dei
nuclei 00-04.

## 2026-07-22 — Politica del richiamo (memoria diretta)

Decisione di Mnemosyne, su consegna di Dedalo. L'indice semantico locale esiste e funziona
(1240 frammenti, 4-8 ms, nulla esce dal computer), ma **l'hook di iniezione resta staccato** finché
non sono nel codice: (1) contrassegno `riservato` su L5, mai iniettato in automatico; (2) soglia =
accordo fra motore lessicale e semantica, non punteggio; (3) taglio a paragrafo per diari e L5.
Misura che ha guidato la scelta: L5 non emerge su nessuna domanda psicologica — è debolezza di
recupero travestita da sicurezza, e l'attivazione sul grafo la toglierebbe.
Spec completa: `00-capitano/memoria/politica-richiamo.md`.

## Regola che adotto da oggi

Chi prende una decisione strutturale scrive **qui** la riga, nella stessa sessione. Io verifico a
fine sessione che L3 corrisponda a quello che è successo. Nessun registro parallelo: una memoria
che si sdoppia comincia a contraddirsi.

## 2026-07-22 (sera) — Terzo motore della memoria: il grafo, e l'anima

Decisione di Dedalo, eseguita. (a) La politica del richiamo di Mnemosyne è implementata in
`memoria-indice.py`: contrassegno `riservato` nel dato (per cartella e, nuovo, per sezione con
`<!-- riservato -->`), modalità `--iniezione` separata dalla ricerca, tetto duro 3 frammenti /
1200 caratteri intestazioni comprese, taglio a paragrafo per i narrativi. Collaudo: zero fughe
di sostanza riservata su sei domande psicologiche. (b) **Emendamento §3.bis alla soglia**,
in attesa di ratifica di Mnemosyne: l'accordo puro fra i due motori taceva sul caso fondativo
(«agenti darwiniani»); si aggiunge l'eccezione della parola rara (sotto il 2% del corpus) con
obbligo di un secondo termine di contenuto nello stesso frammento — condizione aggiunta perché
senza, «ricetta della carbonara» parlava. (c) **`00-capitano/anima/`**: il grafo dei legami
della navicella, vivo e navigabile, con attivazione diffusa. È il terzo motore resa visibile;
non è ancora cablata nel motore di ricerca. Reperto dal dato: il nodo più connesso della
navicella è `dedalo-diario` (95.1), `mnemosyne-diario` è decimo — i due diari tengono le
estremità del reticolo. Non pubblicabile: contiene la forma di L5.

## 2026-07-22 (tarda sera) — Terzo motore cablata, e dichiarata debole

Il grafo entra nell'indice (tabella `legami`) e in `iniezione()` con la regola dell'accordo
trasposta (≥2 semi). Zero fughe di riservato con il motore accesa — era il rischio principale.
**A/B: +1 documento su 9 domande.** Causa dichiarata: è stata messa a riempire i posti
avanzati invece di competere per essi. Ipotesi per il seguito (di Mnemosyne, è recupero): la
casa dell'associazione è la ricerca, non l'iniezione. Interruttore `GRAFO_ATTIVO` per
rimisurare. Nessuna decisione presa sul seguito: dichiarata e lasciata a lei.

## 2026-07-22 (notte) — Nomenclatura: motori, non gambe

Decisione di Giuseppe. Le tre vie di recupero della memoria si chiamano **motori** (lessicale,
semantico, grafo), non «gambe». Rinominate specifiche, codice, politica e stato; i diari NON
sono stati riscritti — sono voci già scritte, e il passato non si corregge a posteriori.

## 2026-08-12 — Titanogenesi: si nominano i procedimenti, non si creano agenti

Giuseppe porta un documento costruito con Gemini fra il 10 e il 12 agosto (v2.6, dodici Titani
come agenti; poi v3.0, Titani declassati a script e cron) e chiede una valutazione **a due
poli**. Metodo usato, da riusare: Mnemosyne per prima in cieco, Dedalo dopo con la lettura in
mano e il mandato esplicito di attaccarla, poi una replica diretta sui punti di scontro.

**Intento vero, che non stava nel documento:** la navicella ha molti procedimenti iniziati e
lasciati a metà; dare una faccia ai procedimenti serve a renderli aggiustabili. Rischio nominato
da lui: che l'iper-settorializzazione alzi il costo di ogni comando.

**Ratificato (ora in `CLAUDE.md`):** un nome etichetta un organo che gira e costa zero a runtime;
diventa caro solo se diventa un dispaccio. Un nome si guadagna con un organo che gira, un buco
deciso, o un procedimento in volo — e quest'ultimo paga con stato e condizione di fine. Nominare
abbassa il costo solo se il nome è un'asserzione che una macchina verifica (registro = dato letto
dal verificatore, non prosa). I nomi guardano all'interno: mai un token che Giuseppe deve
pronunciare. Stati: attivo, parcheggiato con condizione, concluso, **orfano** (lo stato-malattia,
individuato da Dedalo: era attivo, è andato muto senza decisione — nessun meccanismo lo sorveglia).

**Correzioni di Dedalo accettate da Mnemosyne:** la parola operativa è *fine*, non *nome*;
`SEGNI_VITALI` copre solo il periodico e non vedrebbe mai la Fase 2 morta; il registro va come
dato, non come codice; il costo ha tre superfici e quella che conta è la manutenzione.
**Scontro sciolto:** il banco di simulazione in C entra come `proposto` con la chiusura-sblocco
nominata — Dedalo concede («ho appeso un *voglio* alla tesi per farlo sembrare un *serve adesso*»).

**Decisioni di Giuseppe:** Titani = procedimenti, con promozione ad agente dove serve giudizio —
**Teia** (token, preventivo e consuntivo, routing gratuiti solo col vaglio ToS di Ierofante) e
**Giapeto** (ciclo darwiniano del business). Febe = Argonauta business, prima fase. Temi =
archivio delle fonti, «fondamentale». Oceano = note vocali via la plancia (Whisper già nel
backend). Memoria invariata; il grafo da valorizzare resta filo aperto. Nomi chiariti: Ierofante
legalità, Teia token, Temi fonti.

**Errori di fatto del documento, respinti da entrambi:** L4 rimpiazzato dal grafo (L4 è il
fondazionale); L1/L2 descritti come kernel su una memoria di Markdown; cifratura data come AES da
binario mentre gira XChaCha20-Poly1305 con Argon2id via libsodium (verificato nel codice da
Dedalo); «70% di token» mai misurato; amputazione dei due Demiurghi e del Rapsodo.

**Guasto scoperto nella stessa sessione:** quattro agenti su otto — Dedalo, Demiurgo Creativo,
Ermete, Ierofante — non erano dispacciabili perché la `description` del frontmatter non era
quotata e il `": "` interno rompeva il YAML; il runtime scartava la definizione in silenzio.
Seconda volta che la navicella gira con pezzi dichiarati e mai caricati (la prima fu la v1).
Riparato, controllo aggiunto al verificatore, regola in costituzione.

**Chiusura di fase:** Giuseppe chiude l'accensione e mette in pausa lo sviluppo per studiare
(tre esami fra il 4 e il 10 settembre). La mappa totale + il registro degli stati, chiesti a
Dedalo, sono la condizione della pausa: al ritorno il punto di ripresa è il conto degli stati.

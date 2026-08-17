---
type: stato
accensione: hook
aggiornato: 2026-08-02
---

# Coda notturna

Il lavoro che la navicella esegue mentre Giuseppe non c'è. Letta da
`00-capitano/scripts/notturno.py`, una voce per run.

**Regola costituzionale, cablata nel codice e non solo scritta qui:** il run notturno
esegue **soltanto** ciò che sta in questa coda. Non aggiunge voci, non riordina per proprio
conto, non decide cosa vale la pena fare. Le mani sono libere, la rotta no — e la rotta, qui,
è la coda. Chi la riempie: Giuseppe, o un agente attivo durante una sessione **con** Giuseppe.

Dentro l'esecuzione di una voce, invece, l'autonomia è piena: può leggere tutto, scrivere
file, modificare codice della navicella, riparare ciò che trova rotto. Il criterio della
riparazione non è «la soluzione giusta» ma **«la soluzione che avrebbe scelto Giuseppe»** —
per questo il brief carica `profilo-giuseppe.md`, `come-penso.md` e L4.

## Formato

Una voce per blocco `- [ ]`. La prima non spuntata è quella che parte. A fine run il
notturno la spunta e ci scrive accanto il path del paper prodotto.

---

- [x] **Metodi e Modelli: colmare il buco.** Esame scritto il 9 settembre, e il corso ha  
  → fatto il 2026-08-15: `00-capitano/notturno/papers/2026-08-15-metodi-e-modelli-colmare-il-buco.md`
  zero quiz e 37 file in banca dati, contro i 63 di Analisi Vettoriale. È il divario più
  netto fra scadenza e preparazione dell'intera sessione. Fai l'inventario delle fonti e la
  mappa degli esercizi secondo i protocolli esistenti, e dimmi nel paper se il materiale in
  banca dati basta per costruire un quiz o se manca qualcosa — con quali fonti riempiresti
  il buco.

- [ ] **Analisi Vettoriale, ripetizione del 4 settembre.** Lo scritto del 17 luglio non è
  stato superato; causa dichiarata da Giuseppe: studiato in un giorno, non materiale
  sbagliato. Il quiz esiste, 10 pool. Rileggi gli esami passati in banca dati e verifica se
  la copertura del quiz corrisponde a ciò che gli esami chiedono davvero: dove il quiz è
  scoperto rispetto alla frequenza reale degli esercizi, estendilo. Non riscrivere ciò che
  già copre bene.

- [ ] **Il cancello di Temi — finirlo.** Progetto completo in
  `00-capitano/dedalo/progetto-cancello-esterno.md`, deciso e non da rimettere in discussione.
  Un Demiurgo Creativo era a meta' del lavoro quando il limite l'ha ucciso il 16 agosto alle
  17:07. Due comandi in `temi.py`: `--puo-uscire <file>` (tre livelli in ordine — percorso,
  contenuto, dimensione — e il primo che dice no chiude, dichiarando **quale** livello e
  perche') e `--posso-mandare <provider>` (finestra scorrevole, tetto all'80%, contatore sul
  file e non in memoria perche' due processi paralleli che contano ciascuno per se' sfondano
  il tetto insieme). Il dato sta in `00-capitano/temi/cancello-esterno.md`, il registro delle
  chiamate in `chiamate-esterne.jsonl`. **Il cancello non tocca chiavi**: decide se e quando,
  mai con cosa. Prima di chiudere, esercita i cinque casi elencati nel progetto e riporta
  l'esito vero di ciascuno.

- [ ] **I pool di esercizi — arrivare a 50 su tutti e diciotto.** `python
  00-capitano/scripts/coda-notturna.py --prossimo` dice quale tocca; il metodo sta in
  `00-capitano/dedalo/brief-lotto-esercizi.md` e va letto per intero, incluso l'addendum
  sull'innesto. Al 16 agosto: `edo` 52, `curve` 53, gli altri sedici fermi a ~30. Regole che
  sono costate care e non vanno riscoperte: il numero chiesto e' un **pavimento**, se ne
  producono due in piu' perche' un Demiurgo sbaglia il proprio conto di uno; almeno tre unita'
  per lotto da **cinque passi o piu'**, perche' il quiz di Analisi Vettoriale stava a 324
  unita' e 328 passi, cioe' allenava il riconoscimento per un esame che si supera svolgendo;
  il conto vero lo fa `lotto_innesta.js` eseguendo il file, mai il rapporto dell'agente. Dopo
  ogni lotto: innesto, `quiz_assembla.js`, `quiz_verifica.js`, e se da' FAIL si corregge, non
  si monta.

- [x] **La diagnosi totale della navicella.** FATTA il 16 agosto:
  `00-capitano/diagnosi-procedimenti-2026-08-16.md` (902 righe, 13 famiglie su 13) e
  l'impaginato `...-2026-08-16.html`. Ordine di Giuseppe del 15 agosto, ore 23:33-23:37:
  un **paper** che per ogni oggetto costruito in questi mesi distingua quattro assi — (1) intenzione
  dichiarata da lui, con le sue parole; (2) oggetto pensato insieme; (3) meccanica effettivamente
  costruita; (4) **utilità effettiva misurata nel tempo**, la colonna che nessun organo ha mai posto.
  Il valore sta nella distanza fra le colonne. Scope **totale**, parole sue: «non solo le cose con un
  nome / solo le cose che non funzionano o qualsiasi altro filtro che limita lo scope, vorrei vedere
  tutto», «non limitarlo al registro, fagli leggere tutta la navicella». Custode: **Rapsodo** (non
  Teia — Teia è la guardia dei token; l'equivoco è nella domanda di Giuseppe e va sciolto così).
  Si scrive in `00-capitano/diagnosi-procedimenti-2026-08-16.md`, **una famiglia alla volta con
  salvataggio dopo ognuna**, aggiornando `00-capitano/diagnosi-stato.md` a ogni salvataggio: è
  l'unica cosa che chi riprende ha in mano. Stato con
  `python 00-capitano/scripts/coda-notturna.py --diagnosi`, che non ricorda ma misura.
  → 16-08 12:0x: un Rapsodo è in volo sulle famiglie 0-2 nella sessione diurna. Chi apre il run
  notturno **misuri prima** (`--diagnosi`) e riprenda dalla prima famiglia scoperta, senza
  ricominciare.

  **Perché questa voce nasce solo oggi, ed è il difetto da non ripetere.** Giuseppe aveva detto
  «metti anche questo nella coda» il 15 sera. È finita in `00-capitano/scripts/coda-notturna.py` —
  che è il *contatore degli esercizi*, non questa coda — e nessuno schedulatore la legge. I due
  nomi sono a un trattino di distanza e designano cose diverse: `notturno/coda.md` è la rotta,
  `scripts/coda-notturna.py` è una misura. Vanno separati anche nel nome, appena i lavori in volo
  atterrano (rinominarlo ora romperebbe gli agenti che lo stanno leggendo). (Dedalo, 16-08)

- [ ] **Il quiz deve tornare a casa da solo.** Oggi i tentativi restano nel browser e serve
  un click per esportarli: Giuseppe ha chiesto **zero gesti manuali**. Il quiz gira statico su
  GitHub Pages, senza backend. Studia le strade reali (endpoint gratuito, ingestione da
  cartella Download, altro che trovi), scegline una, **costruiscila**, e nel paper spiega
  perché quella e non le altre — inclusi i dati che escono dal computer e verso chi.

- [ ] **La memoria non registra la vita di Giuseppe.** La coda di apprendimento cattura le
  correzioni allo stile e ha perso che il 17 luglio ha bocciato un esame, benché ne avesse
  parlato in più conversazioni. Progetta e costruisci il pezzo che manca: come fa un fatto
  detto in chat a diventare un fatto in un file, senza che qualcuno debba ricordarsene.
  Guarda `cattura-apprendimento.py` — il problema è nei pattern, che cercano correzioni e non
  fatti.

---

## Il corso di matematica — programma lungo

Mandato completo: `02-accademico/percorso-matematica/MANDATO-CORSO.md`. Leggilo prima di
ogni voce di questo blocco. Una fase per notte; ogni fase riprende dalla precedente e lascia
il proprio paper.

- [ ] **Corso, fase 1: l'anatomia degli esami.** Leggi il testo estratto di TUTTI gli esami
  passati di Analisi Vettoriale e di Metodi in `01-banca-dati` (mai i PDF diretti — vale
  `protocollo-corpus-pdf.md`; se il testo non c'è per Metodi, estrailo). Produci per ciascun
  corso `anatomia-esame.md`: tipi di esercizio con **frequenza reale contata**, ordine
  ricorrente, notazioni dei docenti, dimostrazioni chieste. Numeri, non impressioni. È la
  fase che crea la competenza: senza, tutto il resto è matematica generica.

- [ ] **Corso, fase 2: giudicare ciò che esiste.** Confronta l'anatomia con i 23 nuclei di
  `percorso-matematica/nuclei/` e con `copertura-esame.md`. Dove copriamo cose che non escono
  mai, e dove non copriamo cose che escono sempre. Sii brutale: è la fase in cui si scopre di
  aver lavorato sulle cose sbagliate, ed è più utile di qualunque cosa costruita dopo.

- [ ] **Corso, fase 3: il filo.** Riscrivi `00-scheletro.md` come **corso e non come indice**:
  ogni nucleo introdotto dal problema che lo rende necessario, chiuso da ciò che apre. Giuseppe
  è stato esplicito: non «c'è questo che fa questo». Qui vive lo strato «senso» — significato
  fisico, metafora, idea aperta. Lo scheletro del 18 luglio porta ancora scritto «da
  ratificare»: quella ratifica non arriverà mai, decidi tu e motiva nel paper.

- [ ] **Corso, fase 5 (anticipata sul binario corto): Metodi non ha quiz.** Esame il 9
  settembre, zero quiz, 37 file in banca dati. Dopo la fase 1 hai l'anatomia: costruisci il
  quiz di Metodi secondo `protocollo-quiz.md`, partendo dai pool che l'anatomia dice più
  frequenti. Verifica con `quiz_verifica.js` prima di chiudere.

---

## I fili lasciati aperti

Giuseppe, 2026-08-04: «Sentiti libero di studiare tutti i campi che abbiamo lasciato aperti,
tutte le richieste non esplicite che ti ho fatto, tutti i miglioramenti che pensi si possano
fare.» Queste voci nascono da lì. Restano coda — quindi restano rotta sua — ma le ha aperte lui.

- [ ] **L'economia, che lui ha dichiarato non chiusa.** Parole sue del 2 agosto: «dobbiamo
  continuare a parlare di questa cosa, non mi è sufficiente come abbiamo applicato OmniRoute».
  D7 ha dato il perimetro legale (`claude -p` schedulato è previsto; gateway pass-through
  descritto; free tier veri a 5-30 richieste al minuto). Manca la soluzione operativa: come
  fare più lavoro con lo stesso monte. Studia il routing per TIPO di lavoro — cosa può davvero
  girare su un modello gratuito senza degradare (estrazione, deduplica, conteggi, normalizzazione)
  e cosa no — e **costruisci** il pezzo, non un altro documento. Vincolo: zero spesa ricorrente
  oltre l'abbonamento; nulla della navicella verso cloud terzi.

- [ ] **Il grafo: cifrare di più senza semplificare.** D10 ha misurato che l'anonimizzazione
  copre il nome e non la topologia: archi, grado e mtime dei nodi riservati escono in chiaro, e
  un attaccante può enumerare i candidati invece di indovinare. Ma Giuseppe ha chiarito il 2
  agosto che il grafo **non** serve a lui per guardarlo: è l'organo con cui noi accediamo alla
  memoria senza leggere tutto, e la sua utilità è proporzionale alla completezza. Quindi
  amputare gli archi è la soluzione sbagliata. Progetta e costruisci la strada opposta: grafo
  completo dove serve, illeggibile dove è esposto. Nel paper, l'analisi di cosa resta deducibile
  dopo la tua modifica — non «è sicuro», ma cosa resta.

- [ ] **La sintesi delle undici ricerche, mai scritta.** Il mandato Jarvis la prevedeva da
  Mnemosyne; Dedalo ha deciso di non scriverla prima del proprio report, e poi non l'ha scritta
  nessuno. Undici file in `00-capitano/ricerche-argonauta/` con dentro cose che nessuno ha più
  riletto. Scrivi `jarvis-sintesi.md` nella forma che il mandato chiede: le tre mosse che
  insieme chiudono più buchi con meno lavoro, la cosa che non farei, e ciò che la ricerca ha
  smentito del mandato. Con l'Accensione già in corso, dì anche cosa delle undici ricerche è
  rimasto **inutilizzato** e perché.

- [ ] **Il censimento dell'accensione.** Ogni procedimento della navicella dichiara nel proprio
  frontmatter cosa lo accende: `hook`, `fame`, o `parcheggiato` con data e motivo. Base di
  partenza: le tabelle di `jarvis-D11-inventario-procedimenti.md` e la classificazione proposta
  in `dedalo/accensione-piano.md` §2. Alcuni sono già marcati (capitolo, indice, libro di
  Geometria). Finiscilo, e fai in modo che `verifica-costituzione.py` legga quel campo invece
  della tabella scritta a mano dentro lo script.

- [ ] **Ermete e Ierofante: parcheggiare per davvero.** Giuseppe ha detto il 2 agosto: Business
  parcheggiato, si riprende a settembre a esami finiti. I due agenti esistono, non sono mai
  stati invocati, e `CLAUDE.md` non li nomina — il verificatore lo segnala a ogni apertura.
  Marcali `accensione: parcheggiato` con data di riapertura, e togli il rumore dal verificatore
  senza togliere il fatto: un agente parcheggiato non è un errore, un agente dimenticato sì.

- [ ] **La ricerca accademica come capacità, non come compito.** Richiesta esplicita di Giuseppe
  il 2 agosto: «se ti dico che ho bisogno che ti studi tutta la statistical field theory, in
  quanto tempo?». Oggi il sistema non sa rispondere. Costruisci l'organo: dato un dominio,
  trovare le fonti vere (banche dati accademiche, testi di riferimento, corsi aperti), stimare
  i prerequisiti che a Giuseppe mancano davvero — usando `stato-studente.md` e L4 — e produrre
  un piano con una **stima di tempo difendibile**, cioè con il metodo con cui è stata calcolata.
  Provalo su un dominio vero e mostra il risultato.

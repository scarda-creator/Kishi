---
type: registro
autore: Dedalo (Architetto)
data: 2026-08-12
oggetto: manifesto dei procedimenti della navicella — dato dichiarativo, non codice
stato: CABLATO. `00-capitano/scripts/verifica-costituzione.py` legge questo file a ogni
  SessionStart, misura le età sul disco e stampa il conto. Il file non può più mentire in
  silenzio: dichiara l'intenzione, la macchina dichiara la realtà.
regola: nessun nome di procedimento è una parola che Giuseppe deve pronunciare. I nomi
  guardano all'interno. Il registro è a lettura per lui, a scrittura per i due attivi.
---

# Registro dei procedimenti — manifesto

Perché esiste: la navicella accumula procedimenti iniziati e lasciati a metà. Un nome, da
solo, li rende solo più visibili; è lo **schema** — che pretende per ogni voce uno *stato* e
una *condizione di fine o di risveglio* — a renderli chiudibili. Un organo senza fine
dichiarata non si chiude, si dimentica.

**Come funziona, ed è il punto.** Questo file dichiara l'**intenzione**: cosa vogliamo che
un procedimento sia. Lo script misura la **realtà**: quando il suo artefatto è stato toccato
l'ultima volta. Gli stati d'allarme — `orfano` e `scaduto` — non si scrivono mai a mano: li
calcola la macchina confrontando le due cose. Per questo il registro non può marcire in
silenzio come marcisce un diagramma: nel momento in cui dichiaro «attivo» qualcosa che non
produce da un mese, è il verificatore a chiamarlo orfano al posto mio.

## Vocabolario

**Intenzioni — si dichiarano qui:**
- `attivo` — in lavorazione: ha un custode e un prossimo passo. Se il suo artefatto tace
  oltre `eta_max`, la macchina lo declassa a **orfano**.
- `cadenza` — organo che deve produrre a ritmo. Se tace oltre `eta_max` diventa **scaduto**.
- `parcheggiato` — fermo **per scelta**, sano: deve portare la condizione che lo risveglia.
  Non ha età d'allarme: dorme legittimamente.
- `proposto` — deciso ma non aperto: deve portare la condizione di apertura.
- `concluso` — fatto: ha un artefatto di fine.
- `gira` — organo-script vivo, senza ciclo di vita: non è un cantiere, è un pezzo di macchina.

**Stati derivati — li calcola il verificatore, mai la mano:**
- `orfano` — era dichiarato attivo, è andato muto oltre `eta_max`, nessuno ha deciso di
  fermarlo. È la malattia che Giuseppe ha nominato.
- `scaduto` — cadenza mancata.

## Procedimenti

Campi: `nome | intenzione | custode | eta_max(giorni) | path osservato | fine o condizione | sonda`.
La **sonda** e' la parte che una macchina puo' controllare, ed e' nata dalla critica di
Giuseppe del 14-08: *una condizione non funziona se nessuno sa quando controllarla*.
Forme ammesse: `esiste:<path>` · `manca:<path>` · `stato:<procedimento>=<intenzione>` ·
`dopo:<AAAA-MM-GG>` · `chiedi:<cosa>` per cio' che solo Giuseppe puo' decidere — e quelle
si ripropongono da sole ogni 30 giorni invece di tacere.
Il path è l'artefatto su cui si misura la vita: se il lavoro avanza, quel file cambia.

```dati
Fase-2-plancia          | attivo       | Dedalo           | 14 | plancia/frontend/src | tool renderizzati dentro le stanze -> terminale sostituito
Phi-uv-nucleo-03        | concluso     | Dedalo           |  - | 02-accademico/percorso-matematica/nuclei/03-curve-superfici.html | FATTO il 14-08, e in realta' era gia' fatto sul disco: sfera+cilindro con normale, campo/flusso, Mobius non orientabile. Collaudato headless (5 figure su 5 disegnano). Il path osservato era sbagliato — guardava il motore, che non cambia piu' perche' il lavoro e' finito
revisione-nuclei-00-04  | attivo       | Dedalo           | 14 | 02-accademico/percorso-matematica/nuclei/01-differenziabilita.html | rilettura con le capacita grafiche nate DOPO la scrittura dei nuclei, un agente per volta (metodo chiesto da Giuseppe il 13-08). Misura d'ingresso: 00=12 figure, 01=3, 02=2, 03=6, 04=4. FATTI il 15-08: **02** Dini/ottimizzazione (2->10 figure, 812 formule) e **01** differenziabilita' (3->9 figure, 617 formule), 0 mute al banco. Corretti due difetti del motore trovati strada facendo: yr degenere quando nessun campione e' finito, e `width` ignorato nel contour. Restano 04, 03, 00
intake-note-vocali      | attivo       | Dedalo->Rapsodo  | 14 | 00-capitano/intake | OCEANO COSTRUITO il 22-08, e la voce era descritta male: diceva «ponte plancia->intake», cioe' un tubo fra due stanze. Giuseppe l'ha corretta: Oceano e' il condotto che DISACCOPPIA il momento in cui ha un'idea da quello in cui la navicella ha capacita' - detta quando vuole, la navicella macina quando il limite lo consente. Costruiti e provati: `oceano_server.py` (stdlib, ascolta su 0.0.0.0:8077, si accende da solo al login dalla cartella Esecuzione automatica - il Task Scheduler voleva l'elevazione), la pagina `00-capitano/oceano/index.html` per il telefono (registra o usa il registratore nativo dove il browser nega il microfono su http, coda locale in IndexedDB che non perde nulla se il PC e' spento), e `oceano.py` agganciato al SessionStart che trascrive con Whisper locale e deposita in `intake/grezzo/`, spostando gli originali in `assorbiti/` (niente oblio). RESTA, ed e' la fine di questa voce: lo SMISTAMENTO a due rami - ramo lavoro verso la coda di Oroboro, ramo custodia verso L5 che solo Mnemosyne interpreta e che non va mai servito ai passivi; piu' i tre stati d'ingresso (eseguibile / da-raffinare / da-chiedere), perche' un vocale di trenta secondi non puo' decidere la rotta. Piano completo: 00-capitano/dedalo/oceano-piano.md | esiste:00-capitano/intake/grezzo
schiusura-44-fonti      | attivo       | Dedalo           | 21 | 00-capitano/dedalo/schiusura-bilancio-fonti.md | RISVEGLIATA il 14-08: Temi esiste, la condizione si e' avverata; prossimo passo = potare le prime fonti nel catalogo
registro-procedimenti   | attivo       | Dedalo+Mnemosyne | 21 | 00-capitano/dedalo/registro-procedimenti.md | manifesto letto dal verificatore -> fatto; resta la vista (plancia-cantiere)
Temi-catalogo-fonti     | attivo       | Dedalo           | 21 | 00-capitano/temi/catalogo-fonti.md | ogni fonte che Giuseppe da' entra e si puo' interrogare -> nato il 12-08 con 58 fonti
quiz-analisi-vettoriale | concluso     | Demiurgo Acc.    |  - | 02-accademico/percorso-matematica/analisi-vettoriale/Quiz_AnalisiVettoriale_v1.html | MISURATO il 15-08 ed era gia' finito: 10 pool su 10, 305 esercizi, 328 passi, 4993 formule, PASS. La condizione di fine («pool 6-10 estesi e verificati») era soddisfatta e nessuno l'aveva verificata — terza voce dichiarata viva che era conclusa. Quel che resta per il 4 settembre non e' costruire: e' usarlo, e depositare gli atti. RIMISURATO il 18-08: oggi 10 pool, 348 domande, 428 passi, 6420 formule, PASS - ed era rimasto NON PUBBLICATO. Caricato su PercorsoMatematica (commit 4fb6add, Pages `built`, HTTP 200 verificato) in `analisi-vettoriale/`, con la sua card nella home: il quiz dell'esame piu' vicino non era raggiungibile da nessuna parte se non dal disco di Giuseppe
quiz-meccanica-lavagne  | concluso     | Demiurgo Acc.    |  - | 02-accademico/corsi/meccanica/verifica-lavagne | CHIUSO il 22-08: verifica di merito COMPLETA, 11 pool su 11, 109 lavagne, un Demiurgo per pool. Artefatto di fine: gli 11 rapporti ESITO-*.md. Esito: 105 lavagne corrette, 4 ERRORE tutti in passaggi intermedi col risultato in box giusto (onde L4 densita' di energia scritta come costante = quadro dell'onda stazionaria; fluidi L2 Archimede col gradiente di segno sbagliato, spinta rivolta in basso; fluidi L8 forze delle pareti invertite in entrambi i recipienti; gravitazione L2 raggio del minimo sbagliato di un fattore M) piu' 3 imprecisioni numeriche o lessicali. Tutte corrette, collaudate (PASS) e PUBBLICATE. Le 101 etichette «da ricontrollare sul Focardi» sostituite: dopo la verifica erano false. VERDETTO DI SISTEMA, ed e' il punto: nessuna lavagna dipende da una convenzione del Focardi - la copia cartacea non e' mai servita, e la condizione «chiedi a Giuseppe» che bloccava questa voce era mal posta fin dall'inizio. --- storico: RISVEGLIATO il 18-08, e la condizione era mal posta. La descrizione qui sotto diceva «95 lavagne su 109 da ricontrollare perche' l'OCR corrompe le formule»: FALSO, misurato. Tutte e 109 dichiarano provenienza «canone universale / standard canonico»; nessuna dichiara di dipendere da una particolarita' della stampa, e otto citano il Focardi come fonte. Cio' che manca non e' la copia cartacea: e' che nessuno ha mai verificato il MERITO. Il canone si verifica con qualunque oracolo. Estratte le 109 lavagne in 11 file per pool (un file = un dispaccio) e avviata la verifica di merito dal Demiurgo Accademico, un pool per volta, con esito OK/DUBBIO/ERRORE per lavagna. Fine = 11 rapporti ESITO-*.md, e a Giuseppe resta solo cio' che e' marcato DUBBIO per convenzione del testo. NOTA di metodo: tre Demiurghi lanciati in parallelo il 18-08 sono morti tutti sul limite di sessione - lo schema era gia' in memoria/blocchi-limite.jsonl dal 13-08 e non era stato riletto. Uno per volta. --- storico: COSTRUZIONE CHIUSA il 14-08: 457 domande, 109 lavagne, 4864 formule, PASS. Erano gia' 103 e non 34 (il piano del 12-08 misurava male); la fine non era un numero ma la COPERTURA del programma di Pisano, e i 6 buchi sono coperti (giroscopio, urti fra corpi estesi, oscillatori accoppiati, massa ridotta, maree, onde piane e sferiche). Resta il difetto che una macchina non puo' sciogliere: 95 lavagne su 109 dicono «da ricontrollare sul Focardi» e l'OCR corrompe proprio le formule | esiste:02-accademico/corsi/meccanica/verifica-lavagne/ESITO-rigidi.md
quiz-metodi-e-modelli   | concluso     | Demiurgo Acc.    |  - | 02-accademico/percorso-matematica/metodi/Quiz_MetodiModelli_v1.html | FATTO il 14-08: 8 pool su 8, 248 unita', 341 passi, 77 multi-passo, 5676 formule verificate, PASS. PUBBLICATO il 18-08 su PercorsoMatematica (commit 4fb6add, Pages `built`, HTTP 200 verificato): `metodi/Quiz_MetodiModelli_v1.html`, oggi 9 pool/270 domande/6998 formule. La coda del caricamento e' chiusa
quiz-metodi-pool-edp    | concluso     | Demiurgo Acc.    |  - | 02-accademico/corsi/metodi-e-modelli/banca-esercizi/frags/edp.js | CHIUSO, e lo era gia': MISURATO il 18-08, `edp.js` esiste dal 16-08 (156 KB, il piu' grande dei frammenti) ed e' gia' INNESTATO nel quiz come PRIMO pool - 22 domande, status full, e il quiz passa da 8 pool/248 domande/5676 formule a 9/270/6998, PASS. La voce e' rimasta `proposto` con sonda `manca:edp.js` per due giorni mentre il file era li': quinta voce dichiarata da fare che era finita. Storico del buco: il run notturno del 15-08 aveva trovato che l'esercizio 4 e' una PDE negli ULTIMI SEI appelli su sei (dal 23-06-2025) e i pool non ne avevano una domanda: l'esercizio 4 e' una PDE negli ULTIMI SEI appelli su sei (dal 23-06-2025), e i pool non ne hanno una domanda; `green`+`greendelta` sono 64 domande su un tipo comparso 1 volta in 9 appelli. Causa: i pool furono costruiti su b01 (2023-24) + eserciziari, e b02 (i 9 esami 2025-26) non era mai stata censita — la deriva viveva tutta nella finestra non letta. Materiale gia' puntato, nulla serve da fuori: mappa in 02-libro-di-testo/01-mappa-esercizi.md §4. Apertura = prossima sessione di Demiurgo Accademico, prima del 9 settembre | manca:02-accademico/corsi/metodi-e-modelli/banca-esercizi/frags/edp.js
raccolta-atti           | attivo       | Rapsodo          | 10 | 02-accademico/esiti/atti.jsonl | CAUSA TROVATA il 14-08: il quiz e' una pagina statica, tracciava in localStorage e offriva un file da scaricare che nessuno spostava. Ora raccolta-atti.py pesca i .jsonl dai Download al SessionStart e deduplica -> resta UN click a Giuseppe, il bottone «esporta» in fondo al quiz. Fine = il primo atto depositato
percorso-matematica     | concluso     | Dedalo           |  - | 02-accademico/percorso-matematica | 18/18 nuclei, 6833 formule verificate; artefatto di fine = mappa-percorso.html
quiz-geometria-intake   | concluso     | Demiurgo Acc.    |  - | 02-accademico/corsi/geometria | decaduto per superamento dell'esame il 14 luglio: non si riapre
verbali-fine-sessione   | cadenza      | Mnemosyne        |  3 | 00-capitano/verbali | verbale scritto a fine sessione
L3-strategica           | cadenza      | Mnemosyne        | 14 | 00-capitano/memoria/L3-strategica.md | registro delle decisioni aggiornato
log-decisioni-memoria   | cadenza      | Mnemosyne        | 14 | 00-capitano/log-decisioni-memoria.md | decisioni di memoria annotate
diario-mnemosyne        | cadenza      | Mnemosyne        |  7 | 00-capitano/mnemosyne-diario.md | voce di continuita scritta
diario-dedalo           | cadenza      | Dedalo           |  7 | 00-capitano/dedalo-diario.md | voce di continuita scritta
passata-L5              | cadenza      | Mnemosyne        | 14 | 00-capitano/memoria/L5-subconscio/psicologica | i pattern raw del Rapsodo vengono interpretati invece di marcire: il flag era fermo da 12 giorni e nessuno lo leggeva (relazione 14-08)
potatura-memoria        | cadenza      | Mnemosyne        | 30 | 00-capitano/snapshot-corrente.md | snapshot potato a una pagina e verbali aggregati: cresce da solo (401 righe, 7 strati storici) e non e' di nessuno
grafo-anima             | parcheggiato | Mnemosyne+Dedalo |  - | 00-capitano/anima/anima-dati.js | NON inutile: INACCESSIBILE (0 interrogazioni dal 22 luglio, l'unica porta e' l'iniezione ed e' spenta). Risveglio = prova A/B nella RICERCA, dove compete per i posti invece di ereditarli; se fallisce esce dall'indice e anima.html resta come opera | dopo:2026-09-11
porta-del-richiamo      | proposto     | Mnemosyne        |  - | 00-capitano/memoria/politica-richiamo.md | apertura = dopo gli esami: un solo comando «cosa sappiamo di X» che usa i tre motori e dichiara da dove viene ogni pezzo. Oggi il richiamo non ha un responsabile | dopo:2026-09-11
ricostruzione-memoria   | proposto     | Mnemosyne+Dedalo |  - | 00-capitano/memoria/relazione-stato-memoria-2026-08-14.md | il cantiere unico in cui Giuseppe ha deciso il 16-08 di trattare INSIEME le tre scelte rimandate — storia git di Kishi (force-push), grafo.json sulla repo pubblica, confine di Temi — piu' la ratifica dei perimetri e la porta del richiamo. Rimandate per scelta, non dimenticate: sono decisioni di rotta e vanno prese in una sola seduta, non a pezzi a tarda sera | dopo:2026-09-11
apparato-A-metabolismo  | parcheggiato | Dedalo           |  - | 00-capitano/dedalo/apparato-A-metabolismo.md | risveglio = GPU disponibile, o Business che la finanzia | chiedi:GPU disponibile o Business che la finanzia
modulo-business         | parcheggiato | Ermete           |  - | 00-capitano/dedalo/business-modello-v3.md | risveglio = dopo gli esami, quando Giuseppe riapre; fase 1 = Febe | dopo:2026-09-11
protezione-ermetica-L5  | parcheggiato | Mnemosyne        |  - | 00-capitano/memoria/cancello-L5-cifratura.md | risveglio = se Giuseppe la vuole; il contenuto e gia cifrato | chiedi:solo se Giuseppe la vuole
storia-git-Kishi        | attivo       | Dedalo           |  7 | 00-capitano/scripts/riversamento/riversa.py | SCOPERTO il 14-08: la repo Kishi e' PUBBLICA (scelta confermata da Giuseppe) e memoria-indice.db ci finiva dentro con 24 frammenti di L5-subconscio IN CHIARO — l'indice porta il testo di cio' che indicizza, quindi aggirava L5.enc. Tolto dal riversamento, *.db escluso, audit pre-push che blocca i contenitori opachi (collaudato). RESTA: il file e' nella storia git dal 31-07 (11 commit) e chi clona lo recupera -> serve riscrittura della storia e force-push | chiedi:ripulire la storia git di Kishi (force-push, distruttivo) - decisione di Giuseppe
omniroute-metabolismo   | parcheggiato | Dedalo+Ierofante |  - | 00-capitano/dedalo/omniroute-visione.md | risveglio = gate ToS sciolto; gratuiti non-Claude liberi, Claude via proxy vietato | chiedi:gate ToS - decisione di Giuseppe
banco-simulazione-C     | proposto     | Dedalo           |  - | 00-capitano/dedalo/parere-titanogenesi.md | apertura = quando Fase-2-plancia passa a concluso | stato:Fase-2-plancia=concluso
Temi-libreria-fonti     | concluso     | Dedalo           |  - | 00-capitano/temi/catalogo-fonti.md | APERTO E FATTO il 12-08: la casa esiste, 75 fonti, motore temi.py
Teia-guardia-consumo    | attivo       | Dedalo           | 21 | 00-capitano/scripts/teia.py | misura del margine FATTA (12-08, dopo due build morte); resta il preventivo per lavoro e il routing, che passa da Ierofante per il ToS
Giapeto-agente          | proposto     | Ermete           |  - | 00-capitano/titanogenesi-confronto.md | apertura = con il Business; giudice darwiniano e kill-switch | stato:modulo-business=attivo
Febe-argonauta-business | proposto     | Ermete           |  - | 00-capitano/dedalo/business-modello-v3.md | apertura = fase 1 del Business | stato:modulo-business=attivo
```

## Organi che girano

Non hanno ciclo di vita né età d'allarme: sono macchina, verificata viva il 12-08.

```
Crono     | scheduler + hook | Navicella-Riversamento (20:00) · verifica-costituzione.py · cattura-apprendimento.py
          |                  | · raccolta-atti.py --zitto (dal 14-08: importa gli esiti dei quiz al SessionStart)
Teti      | sanitizzazione   | pdf_estrai_testo.py · comprimi.py
Rea       | collaudo         | quiz_verifica.js · verifica-nucleo.js · banco-plot-headless.js (nuovo 14-08:
          |                  | esegue il motore contro un canvas finto — 84 figure su 23 nuclei, 0 mute)
          |                  | · verifica-quiz-meccanica.js (nuovo 14-08: quiz_verifica.js parla solo il
          |                  | template nuovo e dava FAIL sul quiz di Meccanica da prima che lo toccassi —
          |                  | 457 domande senza collaudo. Questo parla il formato vecchio: PASS)
          |                  | · innesta-lavagne.js (monta i frammenti nel monolite, con ripristino se non gira).
          |                  | BATTEZZATA da Giuseppe il 16-08. Il nome era fra i superati (turno del ReAct
          |                  | loop, abolito) e torna qui accanto a Crono: e' cio' che impedisce che a
          |                  | Giuseppe arrivi materiale rotto. Niente si monta senza il suo PASS.
Crio      | indice + grafo   | memoria-indice.py · anima-grafo.py   (l'indice si ricostruisce ogni sera
          |                  | dentro il riversamento e non viene interrogato dal 25 luglio: il grafo e'
          |                  | ora una voce parcheggiata qui sopra, non una nota a margine)
Iperione  | telemetria       | token_diagnostica.js · auto.log
Oceano    | voce -> intake   | VIVO dal 22-08: oceano_server.py (bocca, 0.0.0.0:8077, si accende al login
          |                  | dalla cartella Esecuzione automatica) + 00-capitano/oceano/index.html (la
          |                  | pagina che Giuseppe apre dal telefono, con coda locale che non perde nulla
          |                  | a PC spento) + oceano.py al SessionStart (Whisper locale -> intake/grezzo,
          |                  | originali in assorbiti). Diario: 00-capitano/intake/oceano.log.
          |                  | Lezione pagata: lanciato da pythonw NON c'e' console, e un log su stderr
          |                  | rompe la RISPOSTA lasciando il socket in ascolto - netstat dice LISTENING
          |                  | e il telefono riceve zero. Il log va su file. Lo smistamento a due rami
          |                  | (lavoro/custodia) NON e' ancora cablato: vedi intake-note-vocali.
```

## Superati

```
Coeo      | era un turno LLM del ReAct loop, abolito. Non rientra.
Rea       | era l'altro turno, abolito — ma il NOME e' stato ripreso il 16-08 da Giuseppe
          | per gli organi di collaudo (vedi sopra). Superato l'organo, non il nome.
```

## Note di manutenzione

- Le età sono **misurate**, non ricordate: le legge lo script dal disco a ogni avvio. Non
  vanno trascritte qui, o il file ricomincerebbe a mentire.
- Il `path osservato` è il vero contratto di ogni voce: sceglierlo male rende il controllo
  cieco. Deve essere il file che *cambia quando il lavoro avanza*, non un documento di
  visione che nessuno riapre.
- `schiusura-44-fonti` era di fatto orfana a 30 giorni: torna attiva perché ha ricevuto una
  casa (Temi) e un metodo (Strict Pruning). Senza quella casa sarebbe rimasta orfana.
- Il grafo/anima non è un procedimento e non è un livello di memoria: è il terzo motore del
  richiamo. La proposta di elevarlo a organo di primo piano è un filo a parte.
- Chiudere una voce significa cambiarne l'intenzione **e** scrivere l'artefatto di fine.
  Cancellare la riga non è chiudere: è dimenticare con un'altra mano.
- Prossimo passo del registro stesso: la **plancia-cantiere**, la vista dove ogni voce è una
  scheda col colore del suo stato. Dopo il manifesto, non prima — e non «mai».
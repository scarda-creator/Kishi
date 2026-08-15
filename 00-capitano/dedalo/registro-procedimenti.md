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
revisione-nuclei-00-04  | attivo       | Dedalo           | 14 | 02-accademico/percorso-matematica/nuclei/contenuti | rilettura con le capacita grafiche nuove -> nuclei rivisti
intake-note-vocali      | attivo       | Dedalo->Rapsodo  | 14 | plancia/backend/routers/voce.py | ponte plancia->intake (cablaggio di Oceano) -> nota vocale depositata e ripulita
schiusura-44-fonti      | attivo       | Dedalo           | 21 | 00-capitano/dedalo/schiusura-bilancio-fonti.md | RISVEGLIATA il 14-08: Temi esiste, la condizione si e' avverata; prossimo passo = potare le prime fonti nel catalogo
registro-procedimenti   | attivo       | Dedalo+Mnemosyne | 21 | 00-capitano/dedalo/registro-procedimenti.md | manifesto letto dal verificatore -> fatto; resta la vista (plancia-cantiere)
Temi-catalogo-fonti     | attivo       | Dedalo           | 21 | 00-capitano/temi/catalogo-fonti.md | ogni fonte che Giuseppe da' entra e si puo' interrogare -> nato il 12-08 con 58 fonti
quiz-analisi-vettoriale | attivo       | Demiurgo Acc.    | 10 | 02-accademico/percorso-matematica/analisi-vettoriale/Quiz_AnalisiVettoriale_v1.html | pool 6-10 estesi e verificati -> scritto del 4 settembre
quiz-meccanica-lavagne  | parcheggiato | Demiurgo Acc.    |  - | 02-accademico/percorso-matematica/meccanica/Quiz_Meccanica_Orale_v1.html | COSTRUZIONE CHIUSA il 14-08: 457 domande, 109 lavagne, 4864 formule, PASS. Erano gia' 103 e non 34 (il piano del 12-08 misurava male); la fine non era un numero ma la COPERTURA del programma di Pisano, e i 6 buchi sono coperti (giroscopio, urti fra corpi estesi, oscillatori accoppiati, massa ridotta, maree, onde piane e sferiche). Resta il difetto che una macchina non puo' sciogliere: 95 lavagne su 109 dicono «da ricontrollare sul Focardi» e l'OCR corrompe proprio le formule | chiedi:ricontrollo delle lavagne sulla copia cartacea del Focardi - solo Giuseppe puo' farlo
quiz-metodi-e-modelli   | concluso     | Demiurgo Acc.    |  - | 02-accademico/percorso-matematica/metodi/Quiz_MetodiModelli_v1.html | FATTO il 14-08: 8 pool su 8, 248 unita', 341 passi, 77 multi-passo, 5676 formule verificate, PASS. Da fare: caricamento sulla repo del percorso
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
(?)       | collaudo         | quiz_verifica.js · verifica-nucleo.js · banco-plot-headless.js (nuovo 14-08:
          |                  | esegue il motore contro un canvas finto — 84 figure su 23 nuclei, 0 mute)
          |                  | · verifica-quiz-meccanica.js (nuovo 14-08: quiz_verifica.js parla solo il
          |                  | template nuovo e dava FAIL sul quiz di Meccanica da prima che lo toccassi —
          |                  | 457 domande senza collaudo. Questo parla il formato vecchio: PASS)
          |                  | · innesta-lavagne.js (monta i frammenti nel monolite, con ripristino se non gira).
          |                  | Organi di verifica senza un nome collettivo: nome da decidere con Giuseppe.
Crio      | indice + grafo   | memoria-indice.py · anima-grafo.py   (l'indice si ricostruisce ogni sera
          |                  | dentro il riversamento e non viene interrogato dal 25 luglio: il grafo e'
          |                  | ora una voce parcheggiata qui sopra, non una nota a margine)
Iperione  | telemetria       | token_diagnostica.js · auto.log
Oceano    | voce -> intake   | voce.py (Whisper) e useVoice.ts ESISTONO; il ponte plancia->intake e da cablare
```

## Superati

```
Coeo · Rea | erano i turni LLM del ReAct loop, abolito. Non rientrano.
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
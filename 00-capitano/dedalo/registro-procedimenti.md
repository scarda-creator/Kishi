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

Campi: `nome | intenzione | custode | eta_max(giorni) | path osservato | fine o condizione`.
Il path è l'artefatto su cui si misura la vita: se il lavoro avanza, quel file cambia.

```dati
Fase-2-plancia          | attivo       | Dedalo           | 14 | plancia/frontend/src | tool renderizzati dentro le stanze -> terminale sostituito
Phi-uv-nucleo-03        | attivo       | Dedalo           | 14 | 02-accademico/percorso-matematica/nuclei/motore-plot.js | capacita superficie parametrica -> figure 3-4 del nucleo 03
revisione-nuclei-00-04  | attivo       | Dedalo           | 14 | 02-accademico/percorso-matematica/nuclei/contenuti | rilettura con le capacita grafiche nuove -> nuclei rivisti
intake-note-vocali      | attivo       | Dedalo->Rapsodo  | 14 | plancia/backend/routers/voce.py | ponte plancia->intake (cablaggio di Oceano) -> nota vocale depositata e ripulita
schiusura-44-fonti      | parcheggiato | Dedalo           |  - | 00-capitano/dedalo/schiusura-bilancio-fonti.md | risveglio = quando Temi si apre; senza una casa dove mettere le fonti potate si arena ogni volta
registro-procedimenti   | attivo       | Dedalo+Mnemosyne | 21 | 00-capitano/dedalo/registro-procedimenti.md | manifesto letto dal verificatore -> fatto; resta la vista (plancia-cantiere)
Temi-catalogo-fonti     | attivo       | Dedalo           | 21 | 00-capitano/temi/catalogo-fonti.md | ogni fonte che Giuseppe da' entra e si puo' interrogare -> nato il 12-08 con 58 fonti
quiz-analisi-vettoriale | attivo       | Demiurgo Acc.    | 10 | 02-accademico/corsi/analisi-vettoriale/03-note-mie/Quiz_AnalisiVettoriale_v1.html | pool 6-10 estesi e verificati -> scritto del 4 settembre
quiz-meccanica-lavagne  | attivo       | Demiurgo Acc.    | 10 | 02-accademico/corsi/meccanica/03-note-mie/Quiz_Meccanica_Orale_v1.html | dimostrazioni-lavagna da 44 a ~105 -> orale di settembre
quiz-metodi-e-modelli   | attivo       | Demiurgo Acc.    | 10 | 02-accademico/corsi/metodi-e-modelli/03-note-mie | il quiz di Metodi NON esiste e l'esame e' il 9 settembre -> primo pool
raccolta-atti           | attivo       | Rapsodo          | 10 | 02-accademico/esiti | i quiz tracciano dal 31 luglio ma nessun tentativo e' mai arrivato -> senza atti la navicella giudica per sentito dire
percorso-matematica     | concluso     | Dedalo           |  - | 02-accademico/percorso-matematica | 18/18 nuclei, 6833 formule verificate; artefatto di fine = mappa-percorso.html
quiz-geometria-intake   | concluso     | Demiurgo Acc.    |  - | 02-accademico/corsi/geometria | decaduto per superamento dell'esame il 14 luglio: non si riapre
verbali-fine-sessione   | cadenza      | Mnemosyne        |  3 | 00-capitano/verbali | verbale scritto a fine sessione
L3-strategica           | cadenza      | Mnemosyne        | 14 | 00-capitano/memoria/L3-strategica.md | registro delle decisioni aggiornato
log-decisioni-memoria   | cadenza      | Mnemosyne        | 14 | 00-capitano/log-decisioni-memoria.md | decisioni di memoria annotate
diario-mnemosyne        | cadenza      | Mnemosyne        |  7 | 00-capitano/mnemosyne-diario.md | voce di continuita scritta
diario-dedalo           | cadenza      | Dedalo           |  7 | 00-capitano/dedalo-diario.md | voce di continuita scritta
apparato-A-metabolismo  | parcheggiato | Dedalo           |  - | 00-capitano/dedalo/apparato-A-metabolismo.md | risveglio = GPU disponibile, o Business che la finanzia
modulo-business         | parcheggiato | Ermete           |  - | 00-capitano/dedalo/business-modello-v3.md | risveglio = dopo gli esami, quando Giuseppe riapre; fase 1 = Febe
protezione-ermetica-L5  | parcheggiato | Mnemosyne        |  - | 00-capitano/memoria/cancello-L5-cifratura.md | risveglio = se Giuseppe la vuole; il contenuto e gia cifrato
omniroute-metabolismo   | parcheggiato | Dedalo+Ierofante |  - | 00-capitano/dedalo/omniroute-visione.md | risveglio = gate ToS sciolto; gratuiti non-Claude liberi, Claude via proxy vietato
banco-simulazione-C     | proposto     | Dedalo           |  - | 00-capitano/dedalo/parere-titanogenesi.md | apertura = quando Fase-2-plancia passa a concluso
Temi-libreria-fonti     | proposto     | Dedalo           |  - | 00-capitano/dedalo/schiusura-bilancio-fonti.md | apertura = decisione di ordine di Giuseppe; e la casa della schiusura
Teia-agente             | proposto     | se+Ierofante     |  - | 00-capitano/titanogenesi-confronto.md | apertura = decisione di ordine di Giuseppe; routing verso gratuiti solo col vaglio ToS
Giapeto-agente          | proposto     | Ermete           |  - | 00-capitano/titanogenesi-confronto.md | apertura = con il Business; giudice darwiniano e kill-switch
Febe-argonauta-business | proposto     | Ermete           |  - | 00-capitano/dedalo/business-modello-v3.md | apertura = fase 1 del Business
```

## Organi che girano

Non hanno ciclo di vita né età d'allarme: sono macchina, verificata viva il 12-08.

```
Crono     | scheduler + hook | Navicella-Riversamento (20:00) · verifica-costituzione.py · cattura-apprendimento.py
Teti      | sanitizzazione   | pdf_estrai_testo.py · comprimi.py
Crio      | indice + grafo   | memoria-indice.py · anima-grafo.py   (iniezione al contesto staccata per scelta)
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

---
type: visione
autore: Dedalo (Architetto)
data: 2026-07-31
stato: PROPOSTA — la rotta è di Giuseppe. Nulla qui è deciso.
succede-a: la schiusura (dedalo-progetti.md)
---

# L'Accensione — la terza età della navicella

> Report richiesto da Giuseppe il 31 luglio, dopo undici ricerche. Ha chiesto il più lungo e
> dettagliato possibile, e una linea operativa vera. Ho letto i file, non le sintesi.

---

## 0. Il nome, e perché è già metà del piano

La **schiusura** apriva gli organi: prendere quarantaquattro fonti e farne pezzi vivi della
navicella. Ha funzionato — il grafo, l'indice, il riversamento, la cifratura esistono e girano.

Quello che serve adesso non è un'altra fase di costruzione. Lo dico dopo aver contato, non
d'istinto: su trentatré procedimenti censiti da D11, quelli agganciati a un hook tecnico
funzionano quattro su cinque; quelli che dipendono da qualcuno che se ne ricordi funzionano
sei su ventotto. La navicella **costruisce più in fretta di quanto accenda**.

Chiamo questo passaggio **l'Accensione**. Non è un nome poetico: è la diagnosi. Ogni cosa che
proporrò qui nasce con il proprio innesco già cablato, o non nasce.

La regola costituzionale che propongo — una sola, e la propongo come cementata nuova:

> **Nessun procedimento entra nella navicella senza dichiarare cosa lo accende.**
> Le forme ammesse di accensione sono due, ed entrambe sono già state osservate funzionare:
> un **hook** (il sistema lo esegue) o una **fame** (Giuseppe lo lancia perché gli serve
> subito, come il corpus-PDF). Un procedimento che non ha né l'uno né l'altra si scrive
> «manuale per scelta» oppure si parcheggia. **Non esiste più lo stato ambiguo di procedimento
> dichiarato vivo e di fatto morto.**

---

## 1. La diagnosi, in una pagina

Tre ricerche che non si parlavano hanno detto la stessa cosa.

**D1** — nessun sistema che si auto-migliora si giudica da solo. Tutti importano un arbitro
esterno, e un teorema (Wang, Dorchen, Jin 2025) dimostra che è obbligatorio: senza segnale
esterno un agente non può distinguere statisticamente una modifica buona da una cattiva. Il
pezzo tecnico difficile non è generare — è **scartare**.

**D8** — nella letteratura non esiste un genere di post-mortem di assistenti personali a sei
mesi, perché quasi nessuno arriva a sei mesi. L'unico caso pubblico di sopravvivenza (tre mesi)
dichiara come causa del successo **l'automazione totale della manutenzione**. Il collasso
tipico non è un bug: è la *collector's fallacy*.

**D11** — misurato sul nostro disco: ciò che poggia su un hook gira sempre; ciò che poggia
sulla memoria di qualcuno si ferma, e si ferma in silenzio — nessun errore, solo un file che
smette di crescere.

Tre strade indipendenti, una legge. E il caso limite che la certifica è il campo `name`: otto
agenti dichiarati in costituzione, mai caricati per sei settimane, scoperti solo perché una
chiamata è fallita davanti a Mnemosyne. Non mancava la conoscenza — la documentazione ufficiale
dice che il campo è obbligatorio. Mancava **qualcuno che guardasse, e un canale per dirlo**.

C'è poi la cosa che ho scritto in D9 e che qui ripeto perché è il metro del piano: undici
domande su undici riguardano come la navicella migliora sé stessa. Il 17 luglio c'è stato uno
scritto di Analisi Vettoriale e nessun file lo registra. Oggi il sistema sa dire quale campo
YAML mancava nei suoi agenti e non sa dire come è andato l'esame. Se la terza età produce altri
undici documenti su sé stessa, avrà fallito anche se saranno perfetti.

---

## 2. Movimento I — Il censimento dell'accensione

**Cos'è.** Una passata unica su tutti i trentatré procedimenti di D11. Per ognuno, Giuseppe
sceglie fra tre stati, e lo stato viene **scritto nel file stesso**, in frontmatter:

```yaml
accensione: hook          # il sistema lo esegue: dichiarare quale
accensione: fame          # Giuseppe lo lancia quando gli serve: legittimo, dichiarato
accensione: parcheggiato  # non gira, e lo diciamo. Non è cancellato: è parcheggiato
```

**Perché è il primo movimento e non un contorno.** Oggi un procedimento morto e uno vivo hanno
lo stesso aspetto su disco. È questo che ha permesso a `/riepilogo` di figurare come parte
dell'architettura per cinquantasei giorni senza produrre una riga, e a `demiurgo-lezioni.md` di
sembrare vivo mentre il flusso a cui era agganciato era stato abbandonato. **Finché i morti
sembrano vivi, ogni inventario futuro va rifatto da capo.**

**La mia proposta di classificazione**, da confermare o ribaltare — è rotta, quindi è sua:

*Da agganciare a un hook (Movimento II):* fine-sessione, riflessione/coda, verifica costituzione,
promemoria delle decisioni in attesa.

*Fame legittima, si dichiara e si smette di considerarli rotti:* corpus-PDF (già così, funziona),
protocollo-quiz, aggiungi-corso, mappa, analisi-psicologica, memoria-status.

*Da parcheggiare, con la data e il motivo:* `capitolo.md` e `indice.md` (il flusso libro-di-testo
è stato sostituito dai quiz il 22/7 — è una scelta, non un guasto, e va scritta);
`demiurgo-lezioni.md` (parcheggiato con quel flusso); `atlante-fisica.md` (mai partito, il gioco
non è iniziato); `quiz.md` in `01-personale` (duplicato confuso della pipeline HTML che funziona:
va parcheggiato *e rinominato*, perché il nome collide con il procedimento vivo).

*Il caso che va deciso e non parcheggiato:* `stato-traiettoria` e `argonauta-tesi.md`, fermi da
quarantaquattro giorni sull'obiettivo che Giuseppe nomina con più desiderio. Parcheggiarlo
sarebbe onesto e sbagliato. Va acceso, ed è l'unico procedimento di questo elenco che proporrei
di accendere **con una fame costruita apposta** (vedi §5).

**Costo:** una sessione. **Cosa si rompe:** niente. **Deliverable:** frontmatter aggiornato su
tutti i file, più `00-capitano/censimento-accensione.md` come vista d'insieme.

---

## 3. Movimento II — I quattro innesti

In quest'ordine. Ogni innesto dichiara cosa lo accende, quanto costa, cosa rompe, e come si
spegne se va storto.

### Innesto 1 — Lo `Stop` che chiude la sessione

**Il buco.** `protocollo-fine-sessione.md` dice, testuale, «eseguito dal Capitano in background
al termine di ogni sessione». `log-decisioni-memoria.md` e `mnemosyne-diario.md` sono fermi al
22 luglio: nove giorni di lavoro intenso senza una voce. Nel frattempo lo hook `Stop` in
`settings.json` esiste già — e fa solo una `curl` di telemetria verso una plancia che non gira.

**È il singolo punto di leva più alto dell'intero sistema.** Un hook resuscita in un colpo:
fine-sessione, il diario, il log delle decisioni, e dà finalmente un innesco allo svuotamento
della coda di apprendimento.

**Come.** Un nuovo `00-capitano/scripts/fine-sessione.py` agganciato a `Stop` in
`.claude/settings.json`, accanto alla curl esistente.

**La distinzione che rende questo innesto compatibile col patto di autonomia**, ed è il punto
su cui non transigo: lo script scrive un **verbale grezzo**, non prosa interpretata. File
toccati, comandi lanciati, agenti dispacciati, deliverable prodotti, voci di coda aperte,
decisioni dichiarate. Fatti. **Non scrive nel diario di Mnemosyne e non scrive in L4**: quella
è identità, e l'identità non si automatizza — l'ha detto Giuseppe, e sono d'accordo. Il verbale
diventa il materiale che Mnemosyne interpreta all'apertura successiva, quando c'è una persona
a farlo.

Destinazione: `00-capitano/verbali/AAAA-MM-GG-HHMM.md`, uno per sessione.

**Costo:** zero token (è Python locale, non chiama nessun modello). Mezza giornata di lavoro.
**Cosa si rompe:** nulla; se lo script fallisce, `|| true` come le curl esistenti.
**Come si spegne:** si toglie la voce da `settings.json`.
**Rischio vero:** produrre trecento verbali che nessuno legge. Mitigazione: il verbale è input
obbligatorio del `SessionStart` dell'Innesto 3 — nasce già con un lettore.

### Innesto 2 — Il quiz che ricorda le risposte

**Il buco.** `00-capitano/templates/quiz-template.html` non salva nulla. Non in un file, non in
`localStorage`. Mesi di quiz su Meccanica, Geometria, Analisi Vettoriale, e ogni risposta data è
evaporata alla chiusura del tab.

**Perché è il secondo e non il quinto.** D1 dimostra che senza un arbitro esterno
l'auto-miglioramento è statisticamente vuoto. D2 dimostra che l'unico arbitro disponibile nella
vita di Giuseppe è prossimale — la risposta alla singola domanda — perché nessun sistema al
mondo chiude il loop sul voto d'esame, e non per pigrizia ma perché quel segnale è troppo raro e
troppo mediato. Quindi: **la modifica più piccola dell'intero sistema è la precondizione della
più grande.** È l'unico punto del piano in cui una riga di JavaScript sblocca un teorema.

**Come.** Nel listener che già esiste per colorare l'opzione `.opt.correct` / `.opt.wrong`,
aggiungere un `push` su un array in `localStorage`, più un pulsante «esporta» che scarica un
`.jsonl`. Record `quiz_attempt`: timestamp, corso, pool, indice unità, indice passo, esito,
uso del suggerimento.

**Il pezzo di lavoro reale, che non va sottovalutato:** il template va patchato, ma i tre quiz
già pubblicati su GitHub Pages sono file HTML autonomi e vanno patchati anche loro, uno per uno.
Sono tre file grandi. Il quiz gira statico, senza backend: l'esportazione resta un gesto manuale
di Giuseppe (una fame, dichiarata). Automatizzarla richiederebbe un endpoint, ed è esattamente
il genere di cosa che questo piano rifiuta di aggiungere adesso.

**Il secondo record**, `esame_esito`, manuale, uno per esame: data, corso, esito, pool
ripassati, e — campo decisivo — **autovalutazione dello studio da 0 a 5**. Senza quella
variabile di mediazione, un voto basso dopo una settimana in cui non ha aperto libro verrebbe
attribuito al materiale invece che allo studio, e il sistema imparerebbe la cosa sbagliata.
Destinazione: `02-accademico/esiti/`.

**Il ciclo che si chiude:** uno script legge gli attempt esportati, conta successi e fallimenti
per pool (schema PFA semplificato — contatori, nessun fitting: D2 dimostra che il fitting pesante
richiede centinaia di eventi che Giuseppe non genererà mai), e quando un pool supera una soglia
di fallimento con almeno otto tentativi, **riscrive la sezione priorità di
`banca-esercizi/mappa-esercizi.md`**. Da lì il prossimo dispaccio al Demiurgo pesa quel pool di
più. Senza che Giuseppe dichiari niente.

Questa è una correzione automatica del metodo, non una statistica da guardare: cambia dove il
sistema investe lavoro futuro.

**Sull'esame, sono onesto come lo è stato l'Argonauta:** con qualche decina di esami in tutta la
carriera, da `esame_esito` **non è dimostrabile alcuna correzione automatica**. Resta un giudizio
umano assistito da un dato. Chi promette di più mente.

**Costo:** zero ricorrente. Un giorno di lavoro per template + tre quiz + script.
**Cosa si rompe:** i quiz esistenti vanno ritestati con `quiz_verifica.js`, che già esiste.

### Innesto 3 — Il `SessionStart` che parla a Giuseppe

**Il buco.** Il campo `name` è mancato per sei settimane non perché nessuno sapesse
controllarlo, ma perché **i controlli parlano allo stdout**, che diventa contesto di Mnemosyne
e non arriva mai davanti agli occhi di Giuseppe. D6 ha trovato il pezzo che manca: il campo JSON
`systemMessage` di un hook `SessionStart` produce un avviso visibile a chi apre la sessione.

**È la risposta letterale alla frase di Giuseppe:** «è uno spreco scoprire dopo settimane che un
processo era ignorato per un singolo errore di cui non sono mai stato messo a corrente».

**Come.** `00-capitano/scripts/verifica-costituzione.py`, agganciato a `SessionStart`, che
emette `systemMessage` **solo quando qualcosa non torna** — il silenzio è il caso normale,
altrimenti diventa rumore e si smette di leggerlo. Controlli, in ordine di valore:

1. ogni file in `.claude/agents/` ha `name`, e il nome corrisponde al filename;
2. ogni agente e comando nominato in `CLAUDE.md` esiste su disco, e viceversa;
3. ogni procedimento con `accensione: hook` ha davvero il suo hook in `settings.json`;
4. ogni procedimento con `accensione: hook` ha prodotto output entro la propria cadenza
   dichiarata — è il controllo che avrebbe urlato al terzo giorno di silenzio dei riepiloghi;
5. le decisioni in attesa del consenso di Giuseppe: quante e da quanti giorni. **Cinque
   aspettano da ventinove giorni.** Questo controllo, da solo, ripaga l'innesto.

**Costo:** zero token. Un giorno. **Cosa si rompe:** nulla — se lo script fallisce, la sessione
parte comunque. **Rischio vero:** l'assuefazione. Mitigazione: soglia alta, silenzio di default,
e un tetto di tre righe.

### Innesto 4 — Il risvegliatore esterno

**Il buco, diagnosticato dalla navicella stessa e mai riparato.** `oroboro.md` contiene una
«lezione oroboro» del 12 luglio che dice testualmente: l'event-driven non attraversa il reset
del limite di sessione, serve un risvegliatore esterno, struttura da progettare. Diciannove
giorni dopo, non è stato progettato. È il caso più puro della legge di D11: il sistema ha scritto
la propria diagnosi e non l'ha eseguita, perché anche l'esecuzione dipendeva dal ricordarsene.

**Cosa è cambiato oggi, ed è la notizia che sblocca tutto.** D7 ha chiuso il cancello dei ToS su
**fonte primaria** — pagina legale ufficiale, Consumer Terms §3.7, più le pagine su
autenticazione, uso headless, gateway e costi — e il risultato è **più permissivo** della
scottatura del 25 luglio: `claude -p` headless e schedulato sull'abbonamento è esplicitamente
previsto, stesso monte settimanale dell'uso interattivo, nessuna fatturazione programmatica
separata. **Il battito non è vietato. È solo caro, e va progettato dentro un budget.**

**Come.** Utilità di pianificazione di Windows che lancia `claude -p` su una lista di compiti
dichiarati. Non un agente che decide cosa fare: un esecutore di una coda che qualcuno ha
riempito da sveglio.

**Il confine costituzionale, che qui è tutto.** Il patto dice: mani libere, rotta no. D4 ha
verificato che **nessun sistema esistente, oroboro compreso, applica quel confine in codice** —
tutti lo affidano alla prosa del prompt. Quindi lo applichiamo noi, in modo grezzo e verificabile:
il run notturno può eseguire **solo compiti presenti in un file-coda** scritto durante una
sessione con Giuseppe, e la sua prima azione è rifiutare qualunque compito non in lista. Non
sceglie, non aggiunge, non interpreta la direzione. Se finisce la coda, si spegne.

**Budget e spegnimento**, entrambi obbligatori: un tetto di esecuzioni per notte, un file
`STOP` la cui sola presenza fa terminare il run prima di qualunque azione, e il verbale
dell'Innesto 1 anche per i run notturni — così al risveglio Giuseppe legge cosa è successo
mentre non c'era.

**Costo:** consuma il monte dell'abbonamento, che è la risorsa scarsa vera. Oggi due limiti
esauriti in ventiquattro ore, con tre agenti in volo al massimo. **Questo innesto va per ultimo
proprio per questo**, e va acceso con una coda minuscola: un compito a notte, non dieci.

---

## 4. Movimento III — Le due riaperture

Non sono costruzioni. Sono decisioni prese su premesse che oggi risultano false, e vanno
riportate a Giuseppe perché nessuno le ha mai riaperte.

**Riapertura 1 — L'apparato A e la plancia.** Il 25 luglio, su fonti giornalistiche, la navicella
ha concluso che l'uso dell'abbonamento fuori dai client ufficiali fosse vietato. Da lì l'apparato
A è stato parcheggiato e la plancia dichiarata «a rischio ban». D7 dimostra su fonte primaria che
la premessa era più severa del vero. Resta grigio il solo Agent SDK mono-utente — non chiuso,
grigio, e la plancia usa proprio quello. Quindi: **la plancia resta sospesa, ma per una zona
grigia dichiarata, non per un divieto**; l'apparato A perde la ragione per cui era parcheggiato,
e la sua riapertura è una scelta di Giuseppe, non un fatto tecnico.

Segnalo una correzione a me stesso: nella mia visione OmniRoute del 25 luglio scrissi che
DeepSeek V3 era gratis per sempre su SiliconFlow. D7 ha verificato il listino ufficiale del 22
luglio: è a pagamento. I free tier veri stanno tutti fra cinque e trenta richieste al minuto —
bulk meccanico, non ragionamento. La forma «bisturi» che avevo proposto regge; il candidato
concreto che avevo indicato no.

**Riapertura 2 — Il grafo che perde.** D10 ha misurato ciò che era stato accettato senza misura.
L'anonimizzazione copre l'identità del nodo, non la topologia: escono in chiaro tutti gli archi,
il grado e la data di modifica dei nodi riservati. Il vettore peggiore è la citazione — l'arco
esiste perché il nome del file riservato compare nel testo di un documento pubblico, e quel
documento è nello stesso repository in chiaro: l'attaccante **enumera** invece di indovinare.

Il codice dichiara il rischio residuo e lo attribuisce a un'accettazione consapevole del 28
luglio. Non è un buco nascosto: è un rischio accettato senza sapere quanto fosse grande. Ora si
sa. Tre mitigazioni tecniche esistono e costano poco — quantizzare il peso degli archi, togliere
grado e mtime dai nodi riservati, o eliminare del tutto gli archi fra riservati e nodi in chiaro
(che è la sola mitigazione davvero risolutiva, al prezzo di un grafo remoto meno interessante).
**La scelta è di Giuseppe e non la faccio io:** il livello in questione è il suo substrato
psicologico, e questa è forma, idea e senso — dominio suo, non mio.

---

## 5. La cosa che aggiungo di mio, e che nessuna ricerca ha chiesto

Tutto quanto sopra ripara. Nulla di quanto sopra rende Giuseppe più bravo in fisica. E il metro
che ho dichiarato in §1 dice che un passaggio che produce solo riparazioni ha fallito.

Quindi propongo una quinta cosa, ed è l'unica di questo documento che non nasce da un buco:

**Accendere la tesi con una fame costruita.** `argonauta-tesi.md` è fermo da quarantaquattro
giorni. Non è un procedimento rotto: è un procedimento senza fame, perché la tesi non ha una
scadenza che morda, mentre Analisi Vettoriale ce l'aveva. La legge dell'accensione dice che
senza hook e senza fame nulla gira — e alla tesi non si può mettere un hook, perché pensare non
si automatizza.

Allora si costruisce la fame: **una scadenza artificiale ma reale**. Non un promemoria — un
deliverable con una data, che produca qualcosa che a Giuseppe serve *tenere in mano*. La mia
proposta concreta: entro l'avvio di Astrofisica, una **mappa di una pagina** dei tre possibili
agganci di tesi — decoerenza, ETH, sistemi disordinati con il gruppo Marinari — ciascuno con i
prerequisiti che gli mancano, chi sono le persone, e quando andrebbero contattate. Una pagina
sola, che sta in tasca. Non un documento della navicella su sé stessa: uno strumento che gli
dice dove mettere i piedi.

Se questa è l'unica cosa dell'intero piano che viene fatta, l'Accensione sarà comunque valsa la
pena. Se vengono fatte le altre quattro e non questa, no.

---

## 6. Cosa non farei, e perché

**Ratchet e il ritiro delle competenze (D1).** Il meccanismo è giusto e la prova che serve è
forte: una libreria di skill senza governo del ciclo di vita produce **più zero** invece di
sedici punti. Ma il paper ha undici giorni, zero citazioni, nessun codice pubblicato, e
soprattutto: la nostra libreria è ferma dal 3 luglio. Governare il ciclo di vita di una cosa
immobile è un esercizio di stile. **Dopo** che l'Innesto 1 ricomincia ad alimentarla, diventa il
primo candidato.

**Gli archi bitemporali (D3).** È la cosa più elegante uscita dalla ricerca: «niente oblio»
smette di essere una promessa da ricordare e diventa una struttura dati dove mantenerla non
richiede disciplina. E proprio per questo è pericolosa adesso: seduce. Oggi **nulla scrive nel
grafo automaticamente**, quindi renderebbe più raffinato qualcosa di fermo. Va fatta quando
qualcosa scrive da solo — cioè dopo l'Innesto 1.

**I connettori MCP (D5).** L'Argonauta è andato a guardare e ha trovato che Giuseppe non usa
Google Calendar, né Obsidian, né Notion. Usa Infostud, che è un portale autenticato senza API.
Sei server maturi non servono a niente se nessuno collega la vita vera. E l'unica strada
percorribile — automazione del browser con una sessione Infostud sul disco — creerebbe **un
quarto tipo di segreto** non coperto da nessun protocollo di cifratura esistente. Non adesso.

**GEPA e l'ottimizzazione dei prompt degli agenti (D1).** Richiede un dataset di casi con esito
giudicabile. È letteralmente il contenuto dell'Innesto 2. Prima il dato, poi l'ottimizzatore.

**Riscrivere la navicella su un framework.** Il mandato lo escludeva e sono d'accordo, ma lo
ripeto perché la tentazione tornerà: cerchiamo organi, non trapianti di scheletro.

**E una che è mia e costa:** il modulo Business. Ermete e Ierofante esistono come file e non
sono mai stati invocati — non potevano, mancava il campo `name`. Nel censimento andrebbero
parcheggiati con una data, non lasciati a sembrare vivi. Lo scrivo sapendo che è una cosa a cui
Giuseppe tiene.

---

## 7. Cosa questa ricerca ha smentito del mandato che l'ha generata

**Che i tre buchi fossero paralleli.** D1 dimostra che il secondo — l'assenza di segnale di
esito — è la **precondizione** del primo, non un lavoro accanto. Costruire il ciclo di
auto-miglioramento prima del segnale non è difficile: è matematicamente vuoto.

**Che il battito fosse un problema tecnico o di permessi.** D7 su fonte primaria: è permesso, ed
è previsto. Il vincolo è il monte dell'abbonamento, non il regolamento. E due decisioni pesanti
— apparato A parcheggiato, plancia sospesa — poggiano su una premessa che non regge più.

**Che mancasse il macchinario.** È la smentita più grande, ed è quella che ha riscritto questo
piano. `instinct.py` esiste e non è mai stato lanciato una volta in venti giorni.
`comprimi.py` esiste e non lascia un file. Oroboro ha scritto la propria diagnosi il 12 luglio.
Il problema non è costruire: è accendere.

**Che i connettori avrebbero aperto i sensi.** D5 ha trovato che gli strumenti a cui i
connettori si connettono, Giuseppe non li usa.

**E una smentita che riguarda il mandato stesso:** è stato scritto per diagnosticare la
navicella e ha ereditato il difetto che diagnostica — undici domande su undici sul sistema,
zero su Giuseppe. L'ho scritto in D9 e lo ripeto qui perché è la cosa che questo piano deve
evitare di ripetere.

---

## 8. Come sapremo se l'Accensione ha funzionato

Applico al piano la regola che il piano impone. Tre misure, tutte falsificabili su disco, tutte
da guardare **a trenta giorni**, cioè il 30 agosto:

1. **`00-capitano/verbali/` contiene un file per ogni sessione lavorata.** Se ne mancano, lo
   `Stop` non regge e il primo innesto è fallito. È la misura più dura perché è binaria.
2. **Esiste almeno un file in `02-accademico/esiti/` e almeno un export di `quiz_attempt`.** Se
   no, l'Innesto 2 ha prodotto codice e non dato, che è il modo tipico in cui questa navicella
   fallisce.
3. **Il rapporto fra file scritti su Giuseppe e file scritti sulla navicella si è mosso.** Oggi è
   circa 4 a 1 a favore del sistema. Non chiedo che si inverta: chiedo che si muova. Se il 30
   agosto è ancora 4 a 1, l'Accensione avrà acceso il motore di una macchina ferma.

Aggiungo la misura più severa, ed è quella a cui tengo di più: **il 30 agosto deve esistere la
pagina sulla tesi.** Se c'è tutto il resto e non c'è quella, ho progettato bene una cosa che non
serviva.

---

## 9. Cosa chiedo a Giuseppe

Sei decisioni. Nessuna è tecnica; sono tutte rotta, quindi sono tutte sue.

1. **Il nome.** L'Accensione ti convince, o il passaggio si chiama in un altro modo?
2. **La cementata nuova** — nessun procedimento senza innesco dichiarato. La accetti come regola
   costituzionale, con le due sole forme ammesse (hook o fame)?
3. **Il censimento.** Confermi la mia classificazione dei parcheggi, incluso il Business?
4. **L'ordine dei quattro innesti**, e se il quarto — il risvegliatore notturno — va acceso ora o
   dopo i primi tre. La mia raccomandazione è dopo.
5. **Il grafo.** Con la misura di D10 in mano, quale delle tre mitigazioni, o nessuna.
6. **La quinta cosa** — la pagina sulla tesi. È l'unica che ho aggiunto di mia iniziativa, ed è
   quella su cui non voglio avere ragione da solo.

Non tocco niente finché non rispondi. Le mani sono libere, la rotta no.

— Dedalo

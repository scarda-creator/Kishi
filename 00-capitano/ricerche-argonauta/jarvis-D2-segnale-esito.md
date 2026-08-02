# D2 — Il segnale di esito: come si misura se un deliverable ha funzionato

## Risposta in tre righe

Nessuno dei sistemi di produzione chiude il loop sull'esito finale (l'esame, settimane
dopo): lo chiudono su un proxy immediato e frequente (la singola risposta a una
domanda), e usano quel proxy come surrogato del risultato che conta davvero. FSRS e
SuperMemo hanno *due* cicli distinti — un aggiornamento leggero ad ogni tentativo e un
rifitting pesante periodico dei parametri — e il secondo richiede un volume di dati
(centinaia-migliaia di eventi) che la navicella, alla scala di un singolo studente con
un esame alla volta, non raggiungerà mai. La cosa costruibile subito non è "predire
l'esame": è instrumentare il tentativo-per-tentativo (oggi la navicella non lo fa
nemmeno: il template quiz non salva una singola risposta da nessuna parte) e usare quel
segnale, con un contatore semplice tipo PFA, per correggere automaticamente *dove* il
Demiurgo genera più contenuto. Il segnale-esame resta utile, ma solo come annotazione
manuale rara e come freno umano, non come dato su cui apprendere.

## Candidati (ordinati per utilità reale)

**Performance Factors Analysis (PFA)** · Pavlik, Cen & Koedinger, 2009, "Performance
Factors Analysis – A New Alternative to Knowledge Tracing" (ERIC/CMU, files.eric.ed.gov)
· nessuna licenza software, è un modello statistico pubblicato, reimplementazioni sparse
(pyPFA e simili) · in una riga: regressione logistica che predice la probabilità di
successo sulla prossima domanda di una skill da due contatori — successi e fallimenti
passati su quella skill, pesati per skill · risolverebbe: è l'unico meccanismo della
lista che funziona bene con **pochi dati per singolo item** e con un solo studente,
perché non stima una popolazione, conta eventi · costo: quasi zero, è aritmetica
· rischio: nessuno tecnico; il rischio è pedagogico (vedi Contro) · fonte del giudizio:
paper primario aperto e letto.

**FSRS — struttura a due cicli** · open-spaced-repetition/fsrs4anki, MIT, repo attivo
(4k+ stelle, integrato in Anki dalla 23.10, versione corrente FSRS-6) · in una riga:
aggiorna Difficoltà e Stabilità di una carta *ad ogni review* con pesi fissi, e
ri-allena quei pesi (w0…w20) *periodicamente* su tutto lo storico via gradient descent
· risolverebbe: non l'algoritmo — la sua **architettura**, il principio di separare
"aggiornamento leggero sempre" da "rifitting pesante ogni tanto", che è esattamente
ciò che manca alla navicella · costo: zero (open source, gira offline) · rischio: il
proprio team FSRS dichiara che sotto ~1000 review (poi abbassato a 400, poi "forse 16"
in discussione aperta) il rifitting sovra-adatta al rumore — soglia mai raggiungibile
per un singolo corso di Giuseppe · fonte del giudizio: wiki tecnica del progetto
(open-spaced-repetition/awesome-fsrs, "The Algorithm") e tutorial ufficiale
(fsrs4anki/docs/tutorial.md) aperti e letti; issue GitHub ankitects/anki#3094 per la
soglia minima.

**RemNote — Exam Scheduler** · prodotto commerciale, feature del piano a pagamento,
documentazione ufficiale (help.remnote.com) · in una riga: non è un algoritmo nuovo, è
un *riorientamento* dell'obiettivo di un algoritmo esistente — non "massimizza il
ricordo indefinito" ma "massimizza il ricordo a una data fissa", abbassando la
retention target lontano dall'esame e alzandola nell'ultima finestra prima · risolverebbe:
è la forma più vicina al problema reale di Giuseppe (quiz costruito per uno scritto con
data nota, non per ripasso a vita) — nessuno degli altri candidati ha un concetto di
"scadenza" incorporato · costo: la feature è a pagamento nel prodotto originale, ma il
*principio* (ancorare l'obiettivo alla data d'esame invece che a "ricorda per sempre")
è riproducibile gratis in una regola propria · rischio: nessuno, è solo un pattern di
progettazione · fonte del giudizio: pagina di documentazione ufficiale del vendor,
aperta e letta (non un post di terzi).

**Bayesian Knowledge Tracing (BKT)** · letteratura accademica, decine di
reimplementazioni (pyBKT, arxiv 2105.00385, licenza open) · in una riga: stima una
probabilità di padronanza latente per skill con quattro parametri (p-init, p-learn,
p-guess, p-slip) aggiornati con Bayes ad ogni risposta · risolverebbe: in teoria lo
stesso problema di PFA, con più struttura probabilistica · costo: basso se si usano i
quattro parametri di default della letteratura invece di fittarli · rischio: **alto per
questo caso d'uso** — BKT è nato e validato per stimare parametri su classi intere di
studenti (identifiability e "model degeneracy" sono problemi noti anche con dati
abbondanti: Beck & Chang 2007, van de Sande, e la discussione più recente su
"Misidentified Identifiability Problem", cs.cmu.edu/~shayand/papers/EDM2017.pdf); con un
solo studente e poche decine di tentativi per pool, fittare i quattro parametri da zero
è statisticamente vuoto · fonte del giudizio: paper pyBKT e le due analisi
sull'identificabilità, lette in sintesi via ricerca (non i paper per intero — vedi Non
confermato).

**Deep Knowledge Tracing (DKT)** · Piech et al. 2015, benchmark standard
(ASSISTments: 4417 studenti / 328k interazioni; ASSISTments 2015: quasi 20k studenti /
709k interazioni) · in una riga: LSTM che predice la prossima risposta da tutta la
sequenza di risposte passate · risolverebbe: nulla qui — richiede popolazioni di
migliaia di studenti per generalizzare, ha un bottleneck sequenziale noto su dati radi,
ed è meno interpretabile di BKT · costo/rischio: fuori scala di 3-4 ordini di grandezza
rispetto a un singolo studente con un esame alla volta · fonte del giudizio: survey e
paper secondari, non il paper originale aperto per intero — riportato solo perché il
mandato lo nomina esplicitamente e la risposta "è fuori scala" è essa stessa
un'informazione utile.

**Duolingo — Half-Life Regression (HLR)** · Settles & Meeder, ACL 2016, codice e dati
pubblicati (github.com/duolingo/halflife-regression) · in una riga: regressione che
stima l'emivita di ogni parola in memoria da un vettore di feature (storico corretto/
sbagliato, tempo trascorso) invece di un fattore di facilità unico · risolverebbe: è un
altro esempio della stessa famiglia di PFA/FSRS (feature osservabili → parametro di
memoria), utile come seconda fonte che conferma il pattern, non aggiunge un meccanismo
nuovo per il caso di Giuseppe · costo: basso, ma richiede comunque un log di eventi che
oggi non esiste · rischio: pensato per vocabolario ripetuto migliaia di volte per
utente, non per un esonero scritto una tantum · fonte del giudizio: paper ACL aperto in
sintesi via ricerca + repo di codice verificato.

**Credit assignment per reward ritardati in RL/agenti LLM** (Hindsight Credit
Assignment, RUDDER, "Latent Reward" arxiv 2412.11120, rassegna
github.com/xxzcc/Awesome-Credit-Assignment-in-LLM-RL) · in una riga: quando il segnale
arriva solo a fine episodio, questi metodi *ridistribuiscono* quel segnale scarso sulle
azioni intermedie stimando quale contributo ciascuna ha dato · risolverebbe: conferma
teorica che non esiste scorciatoia — o si ridistribuisce un segnale denso (il che
richiede comunque dati intermedi, cioè i tentativi-per-tentativo) o non si assegna
credito affatto · costo: non applicabile direttamente, è machine learning da RL su
scala industriale · rischio: nessuno perché non è innestabile — è qui solo come
inquadramento teorico che giustifica la scelta fatta sotto · fonte del giudizio:
abstract e sintesi via ricerca, **non i paper aperti per intero** — vedi Non confermato.

**Delayed feedback / attribuzione ritardata in ad-tech** (arxiv 1802.00255,
2202.06472, survey correlati) · in una riga: modellano la distribuzione del tempo di
attesa tra un click e una conversione per correggere etichette "ancora negative perché
non è ancora arrivata la conversione" · risolverebbe: è la letteratura più vicina in
forma alla situazione di Giuseppe (segnale ritardato, censura temporale) ma costruita
per milioni di eventi al giorno · costo/rischio: strumentazione (nonparametric delay
model, label correction) sproporzionata per un pugno di esami l'anno · fonte del
giudizio: abstract via ricerca, non aperti per intero.

**Framework di eval agentici** (Inspect AI/UK AISI, promptfoo, Braintrust, LangSmith,
Ragas, DeepEval, OpenAI Evals) · Inspect: UKGovernmentBEIS/inspect_ai, MIT, attivo,
adottato da AISI/Anthropic/DeepMind per i propri eval · in una riga: automatizzano il
giudizio "questa risposta del modello è corretta secondo un rubric", non "questo
deliverable ha cambiato qualcosa settimane dopo nel mondo" · risolverebbe: **niente per
D2** — sono nati per valutare l'output di un modello contro un dataset con verità nota
al momento stesso della generazione, il problema opposto al delayed reward · costo:
Inspect è gratis e locale, gli altri hanno tier a pagamento · rischio: nessuno, semplice
disallineamento di scopo · fonte del giudizio: documentazione ufficiale Inspect aperta;
gli altri solo per nome, coerentemente col fatto che non risolvono la domanda.

## Il meccanismo, spiegato bene

Il pezzo che vale la pena copiare non è una formula, è una scelta architetturale che
FSRS e SuperMemo condividono senza dichiararla come tale: separano due orologi. Il primo
gira ad ogni singolo evento — ogni volta che rispondi a una carta, Difficoltà e
Stabilità si aggiornano subito con i pesi *attuali* del modello, una moltiplicazione e
un esponente, costo computazionale nullo. Il secondo gira raramente — una volta al mese,
o dopo che si sono accumulate potenze di due di review (512, poi 1024, poi 2048, secondo
il tutorial ufficiale di fsrs4anki) — e in quella occasione i pesi stessi (i w0…w20 della
formula) vengono ristimati da zero su tutto lo storico con discesa del gradiente. Il
primo orologio non ha bisogno di molti dati: aggiorna uno stato con una regola fissa. Il
secondo ha fame di dati, ed è lì che il progetto FSRS dichiara pubblicamente una soglia —
in origine 1000 review, poi 400, con una discussione aperta su GitHub (issue #3094) se
si possa scendere fino a 16 — sotto la quale rifittare i pesi significa adattarsi al
rumore invece che al segnale. La distinzione conta perché la navicella, se copia questo
schema, deve copiarlo separando le due velocità: un aggiornamento leggero che può
girare fin dal primo tentativo di Giuseppe su un pool nuovo, e rimandare o abbandonare
del tutto qualunque ambizione di "rifittare pesi appresi", perché quella parte richiede
un volume di eventi che un singolo studente con un quiz per esame non genererà mai,
nemmeno in anni. L'errore da evitare — ed è l'errore che BKT e DKT commetterebbero se
importati di peso — è costruire la parte pesante prima di aver mai fatto girare quella
leggera: sarebbe rifare l'errore descritto nella retrospettiva del 22/7 sugli "inneschi
condizionati che non innescano", questa volta applicato a un modello statistico invece
che a una soglia di promozione L5.

## Contro

FSRS lo dichiara nero su bianco: sotto la soglia minima di review il rifitting
overfitta e "l'impatto si sente nel mese successivo, quando lo scheduler sbaglia le
previsioni su carte non ancora viste" (fsrs4anki tutorial). BKT ha un problema di
identificabilità discusso dal 2007 (Beck & Chang) e mai chiuso del tutto — con dati
abbondanti da centinaia di studenti, figuriamoci con uno. DKT richiede popolazioni di
migliaia di studenti (i dataset standard ASSISTments hanno 4400-20000 studenti) ed è per
sua natura un modello di popolazione, non di singolo individuo — usarlo per Giuseppe
sarebbe come allenare un transformer su una frase. Anche PFA, il candidato più
praticabile, ha un limite dichiarato nel proprio disegno: modella *skill*, non
*conoscenza profonda* — due domande sbagliate sullo stesso pool per ragioni
completamente diverse (un errore di calcolo vs un fraintendimento concettuale) vengono
contate uguale. Il paper originale lo ammette: PFA è "as predictive as DKT" sulle
metriche aggregate, non necessariamente più diagnostico. Infine, e più a monte di
tutti: nessuno di questi sistemi risolve mai il segnale-esame-settimane-dopo. Lo
aggirano, non lo chiudono — nessuna fonte trovata in questa ricerca chiude davvero il
loop tra "un contenuto studiato" e "un voto preso settimane dopo" con un meccanismo
appreso, per il motivo semplice che quel segnale è troppo raro e troppo mediato per
allenare qualunque cosa.

## Innesto proposto

Prima ancora del meccanismo, manca il dato: verificato sul disco, il template
`00-capitano/templates/quiz-template.html` gestisce correttezza/errore solo come
classe CSS temporanea sull'opzione cliccata (`.opt.correct` / `.opt.wrong`) — non
scrive né in `localStorage` né altrove. Chiuso il tab, il tentativo sparisce. Non è un
problema di modello statistico, è un problema di strumentazione a monte, ed è più
urgente di qualunque formula.

Due record minimi, entrambi da aggiungere fuori dal perimetro di questa ricerca
(competenza di Dedalo/Mnemosyne, non mia):

**`quiz_attempt`** — un record per ogni domanda risposta. Campi: `ts` (timestamp),
`corso`, `pool_id`, `unit_idx`, `step_idx`, `esito` (bool, se l'opzione scelta aveva
`c:true`), `hint_usato` (bool). Scritto da: il motore stesso, lato client, nel
listener che già esiste per mostrare `.opt.correct`/`.opt.wrong` in
`quiz-template.html` — basta aggiungere un `push` a un array salvato in
`localStorage` più un pulsante "esporta" che scarica un `.jsonl`. Quando: ad ogni
click su un'opzione, cioè decine di volte per sessione di studio. Perché serve
comunque un passo manuale (l'export/import nel repo) e non un flusso automatico:
il quiz gira su GitHub Pages, statico, senza backend — scriverlo automaticamente
richiederebbe un endpoint esterno, che è di nuovo un innesto, non una ricerca (l'ho
segnalato, non costruito).

**`esame_esito`** — un record per esame, manuale, scritto da Giuseppe (o dettato al
Rapsodo) subito dopo la prova. Campi: `ts`, `corso`, `data_esame`, `esito` (voto o
pass/fail), `pool_usati` (quali pool del quiz ha effettivamente ripassato),
`autovalutazione_studio` (0-5: quanto ha davvero studiato, la variabile di mediazione
che il Capitano ha chiesto di tenere presente), `note_libere`. È esattamente il file
che oggi non esiste per lo scritto del 17 luglio.

Con N nell'ordine delle decine per pool — la densità target che il
`protocollo-quiz.md` già impone (30-35 unità/pool) — da `quiz_attempt` si ricava una
correzione automatica **dimostrabile**: per ogni pool, contare successi e fallimenti
running (schema PFA semplificato, senza fitting, solo contatori); quando il tasso di
fallimento su un pool supera una soglia con almeno una manciata di tentativi (es. ≥8,
per non reagire al rumore dei primi 2-3), il prossimo dispatch al Demiurgo per quel
corso pesa quel pool più degli altri — la sezione "priorità pool" di
`banca-esercizi/mappa-esercizi.md`, che oggi il protocollo aggiorna solo "quando
cambiano l'esame, il programma o i punti deboli **dichiarati da Giuseppe**", si
aggiornerebbe anche da dato osservato, senza che Giuseppe debba dirlo. Questa è una
correzione automatica del metodo, non una statistica da guardare: cambia dove il
sistema investe lavoro futuro, non solo cosa mostra.

Da `esame_esito`, onestamente, **non è dimostrabile alcuna correzione automatica** con
i numeri reali di Giuseppe — due o tre esami a semestre, qualche decina in tutta la
triennale più magistrale. Nessuna fonte trovata in questa ricerca chiude il loop
misura→contenuto a quella scala: la letteratura che ci prova (ad-tech, credit
assignment RL) lavora con migliaia-milioni di eventi. Quello che resta possibile a
questo N non è apprendimento ma una regola dichiarativa a controllo umano: se
`esito` è basso e `autovalutazione_studio` è alta, è un segnale — non una prova — che
il deliverable specifico (non lo studio) ha probabilmente fallito, da portare a
Dedalo come proposta di revisione del formato, mai come correzione silenziosa. È un
risultato di questa ricerca, non un buco: al livello "esame", il segnale resta e
resterà per sempre un giudizio umano assistito da un dato, non un gradiente.

## Non confermato

- Formula esatta di aggiornamento di SM-18/SM-19 (Wozniak): `supermemo.guru` ha
  risposto 403 alla fetch diretta, quindi la distinzione precisa fra la formula
  E-Factor di SM-2 (verificata, primaria) e il modello di stabilizzazione più recente
  di SM-18 (dichiarato dal blog ufficiale SuperMemo come "approssimazione migliorata
  della funzione di stabilizzazione" e "nuovo calcolo della difficoltà", ma senza la
  formula esplicita davanti a me) resta a grana grossa.
- I meccanismi di Hindsight Credit Assignment, RUDDER e "Latent Reward" (RL per
  agenti LLM) sono riportati da abstract e sintesi di ricerca, non da lettura
  integrale dei paper — pesano come inquadramento teorico, non come fonte tecnica
  verificata in dettaglio.
- Lo stesso vale per la letteratura ad-tech sul delayed feedback (arxiv 1802.00255,
  2202.06472): citata per confermare che il problema esiste altrove a scala enorme,
  non aperta per intero.
- DKT: numeri di scala (dataset ASSISTments) confermati da più fonti secondarie
  concordanti, ma il paper originale di Piech et al. 2015 non è stato aperto
  direttamente.
- Non ho trovato, in tre onde di ricerca, nessun sistema in produzione che chiuda il
  loop usando **il voto d'esame stesso** come segnale di allenamento di un modello:
  tutto ciò che chiude il loop lo fa su un proxy prossimale (risposta corretta/
  sbagliata, ricordo sì/no), mai sull'evento distale che genuinamente interessa a
  Giuseppe. Se esiste, non l'ho trovato — e l'ho cercato esplicitamente in seconda e
  terza onda ("exam outcome feedback learning system", "post-exam model update
  spaced repetition"), senza risultati diversi da quanto riportato sopra.

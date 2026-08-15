---
type: relazione
autore: Mnemosyne (Capitano)
data: 2026-08-14
mandato: Giuseppe, via Dedalo — «la gestione della memoria mi sembra confusa e disordinata»,
  «il grafo è totalmente inutile», «rivedi i ruoli di te stessa, il Rapsodo e Temi»
natura: proposta. I ruoli li ratifica Giuseppe. Ciò che è dentro il mio dominio è dichiarato fatto.
---

# Stato reale della memoria — misurato, non ricordato

## Il fatto che va scritto per primo

**L'indice della memoria viene ricostruito ogni giorno alle 20:00 e non viene interrogato da
venti giorni.**

`riversa.py` (riga 147) lancia `memoria-indice.py --build` a ogni riversamento verso Kishi, e il
riversamento gira da solo per Task Scheduler: l'ultimo è del **13-08 alle 20:00, exit 0, 1010 file**
(`00-capitano/scripts/riversamento/auto.log`). L'ultima volta che qualcuno gli ha **chiesto**
qualcosa è il **25 luglio** — dopo, in tutte le sessioni registrate, zero interrogazioni.

Fonte del conteggio: i trascritti delle sessioni in
`~/.claude/projects/C--Users-ACER-Desktop-AgentsAI/*.jsonl`. `memoria-indice.py` compare come
comando eseguito in **2 sole sessioni di sempre** — quella del 21/22 luglio in cui è nato (22 righe
di comando: build, query, iniezione, collaudi) e quella del 25 luglio (3 righe: `--help`, `--build`).
Mai più.

Il secondo fatto è della stessa specie. Nei trascritti, i file `memoria/L3-strategica.md`,
`memoria/L4-fondazionale.md` e `memoria/L5-subconscio/**` risultano **aperti in lettura 5 volte in
tutta la storia** (più 6 letture mie di oggi, fatte per questa relazione). Nello stesso archivio,
`snapshot-corrente.md` è stato letto **39 volte** e i due diari **18**.

La memoria che funziona in questa navicella è narrativa: CLAUDE.md, lo snapshot, i diari. La memoria
a cinque livelli è un magazzino ordinato in cui quasi nessuno entra. Il disordine che Giuseppe
percepisce non è confusione di file: è che **l'archivio e l'uso non si toccano**.

---

## 1. Lo stato, livello per livello

### L1 — conversazione
Volatile per definizione, nessun substrato: corretto così. Le sue uniche tracce persistenti sono
`coda-apprendimento.jsonl` (**1 cattura in attesa**, dal verbale delle 12:32 di oggi) e i verbali.

### L2 — operativa: vuoto
`memoria-profonda.md §L2` dice che vive in `01-personale/note-giornaliere/`, `journaling/`, `quiz/`.
Sul disco: **1 nota giornaliera in tutto (2026-06-06), 0 file di journaling, 0 sessioni di quiz**;
tutto il resto sono `_template.md` e `README.md`. Il livello è vuoto da **69 giorni**.

Conseguenze strutturali, non estetiche:
- la promozione **L2→L3** non ha materia prima: L3 non si riempie di vita, si riempie solo di
  decisioni di architettura;
- la migrazione **L2→L5/storica** (passata mensile prevista dalla spec) non è mai partita, e infatti
  `L5-subconscio/storica/` contiene solo `.gitkeep`;
- la piramide a cinque livelli poggia su due livelli che non esistono. Non è un difetto di chi non
  scrive le note: è un disegno tarato su un uso che non c'è.

### L3 — strategica: 10 voci
Una sola voce dal 17 giugno al 22 luglio; quel giorno ne ho recuperate **5 a posteriori** da fonti
già cementate; poi 4 fra il 22 luglio e il 12 agosto. Ultima voce: **12-08 (Titanogenesi)**. Il
registro dei procedimenti le assegna cadenza 14 giorni: siamo a 2 giorni dalla soglia.

### L4 — fondazionale: 3 voci
Tutte scritte **lo stesso giorno, il 2026-08-02**, e tutte provenienti dall'intake del **2026-07-02**:
trentuno giorni fra la cernita e la scrittura. Il contenuto regge (velivolo monoposto come
materializzazione dell'asse-libertà; criterio L1/L2 di validazione della comprensione; grammatica
videoludica come estetica-identità). Il ritmo no: L4 non si è mosso da 12 giorni e non ha un innesco
proprio.

### L5 — subconscio: 11 file, 3 voci vere
- `psicologica/`: 6 file, di cui **3 ancora col segnaposto «Da popolare con uso reale»**
  (motivazioni-profonde, conflitti-interni, osservazioni-emergenti — quest'ultimo popolato oggi, vedi
  §4). Voci interpretative reali prima di oggi: **3 in tutto**, 2 in `pattern-emotivi.md` e 1 in
  `paure-non-nominate.md`, **tutte datate 22 luglio**.
- `pattern-longitudinali/`: 5 file raw del Rapsodo. Quattro sono del 3 luglio a N=1. Il quinto,
  `innesco-esplicito-stallo.md`, è del **2 agosto**, porta `occorrenze: 6` e
  `pronto-per-passata-interpretativa: true`.
- `storica/`: vuota.

Quel flag è il mio debito e va detto senza attenuanti: **la passata interpretativa è il mio unico
compito esclusivo**, il Rapsodo ha fatto la sua parte alzando il segnale con sei istanze e fonti
nominate, e il segnale è rimasto lì **12 giorni**. Non è mancato il protocollo: è mancato che
qualcuno leggesse il flag. Nessun organo lo guarda.

---

## 2. Gli organi del richiamo — sono tre, e non hanno una porta

| organo | cosa fa | dove | invocazioni misurate |
|---|---|---|---|
| `memoria-cerca.py` | mappa/cheatsheet/query per intestazioni sui markdown; `--grafo` per la plancia. Nessun database | `00-capitano/scripts/` | **26** — tutte `--cheatsheet` automatiche a SessionStart; **0** `--query`; **4** `--grafo` (per la stanza-memoria della plancia) |
| `memoria-indice.py` | l'indice vero: frammenti + embedding + FTS5 + tabella `legami`; `--query`, `--iniezione`, contrassegno `riservato` | `00-capitano/memoria-indice.db` | **25 righe di comando in 2 sessioni**, 22 luglio e 25 luglio. Zero da allora |
| `anima-grafo.py` | costruisce il grafo: `anima/anima-dati.js` per il quadro, tabella `legami` nell'indice, `grafo.json` cifrato-anonimo per Kishi | `00-capitano/anima/` | **13 righe in 4 sessioni**, tutte fra il 22 e il 31 luglio |
| `temi.py` | catalogo delle fonti esterne (76 righe-dato nel catalogo) | `00-capitano/temi/` | **5, tutte il 12 agosto**, il giorno in cui è nato |

Tre nomi vicini (`memoria-cerca`, `memoria-indice`, `anima`), tre superfici diverse, **nessun punto
unico a cui chiedere «cosa sappiamo di X»**. Chi ha bisogno di ricordare non sa quale chiamare, e
quindi non chiama: apre lo snapshot. Questo, e non la classificazione, è la sorgente concreta del
«confuso e disordinato».

**L'unico automatismo che tocca il contesto** è `memoria-cerca.py --cheatsheet` a SessionStart
(~133 token: elenca le *categorie* della memoria, non i contenuti). Verificato in
`.claude/settings.json`: `UserPromptSubmit` contiene solo `cattura-apprendimento.py`. **L'hook di
iniezione non è mai stato attaccato.**

Su questo devo una correzione su me stessa. Il 22 luglio ho scritto che si sarebbe acceso «quando
contrassegno `riservato`, soglia d'accordo e taglio a paragrafo saranno nel codice e li avrò visti
funzionare». Dedalo li ha implementati **lo stesso giorno** e misurati (0 fughe di riservato su 6 e
poi su 10 domande, tetto rispettato, §3.bis e §3.ter di `politica-richiamo.md`). La mia condizione
si è avverata il 22 luglio e io non ho riaperto la decisione per **23 giorni**. Da quel momento
l'hook non è più «staccato per scelta»: è **orfano** nel senso preciso che Giuseppe ha nominato il
12 agosto — era attivo, è andato muto senza che nessuno decidesse. Vedi §4 per la decisione che
prendo oggi.

### I verbali
**42 file in 15 giorni** (dal 31 luglio), scritti dall'hook `Stop` a ogni fine turno con scritture;
la mediana è **3 file elencati per verbale**; letti **0 volte** prima di oggi. Non sono memoria:
sono un log a grana di turno. Costano due cose — rumore nell'indice (la parola «verbali» compare 74
volte nel `.db`) e un rituale che dichiara «da interpretare» tre domande che nessuno legge.

### Dove esattamente si perde l'informazione
Tre punti, in ordine di gravità.

1. **Fra scrittura e richiamo non c'è nessun automatismo.** Una cosa entra in L3/L4/L5 e da lì può
   tornare solo se un agente si ricorda di andarla a leggere — cioè se già sapeva che c'era. È il
   paradosso dell'archivio: si ritrova solo ciò che si ricorda di aver riposto.
2. **Nessuno legge i segnali che il sistema stesso alza.** Il flag del Rapsodo (12 giorni), la coda
   di apprendimento (1 cattura), i verbali (42). Sono tutti dati pronti; manca chi li apra
   all'inizio della sessione.
3. **Lo snapshot regge tutto da solo.** È il file che funziona (39 letture) e proprio per questo è
   cresciuto a **401 righe** con sette strati storici sotto la voce corrente. Regge per abitudine,
   non per struttura, e nessuno lo pota.

---

## 3. Il verdetto sul grafo

**Le misure, tutte:**
- forma: **133 documenti, 1010 legami, 1292 frammenti, 10 riservati** (`anima/LEGGIMI.md`, conteggi
  del 22 luglio);
- interrogazioni in sessione dal 22 luglio a oggi: **0** (l'unica via per cui il grafo parla è
  `iniezione()`, e l'hook non è attaccato);
- l'unico A/B onesto che esiste: **+1 documento su 9 domande** — misura di Dedalo, dichiarata debole
  da lui stesso, con la causa nominata: il grafo è stato messo a *riempire i posti avanzati* invece
  che a competere per essi;
- ciò che ha restituito e gli altri due motori no: **un reperto, non una risposta** — che il nodo più
  connesso della navicella è `dedalo-diario` e il decimo è `mnemosyne-diario`, cioè che sono i due
  diari a tenere il reticolo. Non è poco come conoscenza di sé; non è niente come funzione di
  richiamo.

**Verdetto, in una riga:** oggi il grafo non è un motore, è un ornamento con la fattura di un
motore — e la colpa non è sua, è che non ha una porta.

Giuseppe ha ragione sul fatto e sbaglia sulla causa: non è inutile, è **inaccessibile**. Non esiste
un solo comando che risponda a una domanda usando il grafo. `--query` non lo usa; `--iniezione` sì
ma è spenta; `anima.html` è un quadro da guardare; `--grafo` di `memoria-cerca` serve la plancia, non
il richiamo. Al tempo stesso non lo difendo: nell'unica prova in cui poteva parlare ha aggiunto un
documento su nove domande. Non è un capitale che rende poco — è un capitale su cui non abbiamo prova.

**Proposta a tre esiti, in ordine di costo.**
- **(a) Subito, costo zero:** nel registro dei procedimenti il grafo esce dalla riga «Crio … (iniezione
  staccata per scelta)» e diventa una voce `parcheggiato` con condizione di risveglio esplicita e
  data. La rigenerazione quotidiana dentro il riversamento resta (serve a `grafo.json` su Kishi e
  costa secondi).
- **(b) Dopo il 10 settembre, una prova sola, mezza giornata:** dare al grafo la casa che gli avevo
  già indicato — **la ricerca, non l'iniezione**. `memoria-indice.py --query` fa competere il grafo
  per i posti invece di lasciarglieli in eredità, e si rimisura A/B su dieci domande del tipo «una
  cosa che ricordo a metà e di cui non ho le parole», che è il solo caso in cui l'associazione
  dovrebbe battere le parole.
- **(c) Se la prova fallisce:** `GRAFO_ATTIVO = False`, il motore-grafo esce dall'indice e resta
  `anima.html` come **opera**, non come organo. Un ritratto non deve rendere: ha già detto la cosa
  vera che sapeva dire.

È più onesto un organo dichiarato morto che uno vivo per cortesia — ma spegnerlo prima della prova
(b) sarebbe demolire per compiacere, e la prova costa mezza giornata dopo gli esami.

---

## 4. Le decisioni che prendo adesso (dominio mio, dichiarate fatte)

1. **Passata interpretativa L5 eseguita.** Il pattern raw `innesco-esplicito-stallo` (6 occorrenze,
   fermo dal 2 agosto) è stato interpretato: nuova voce in
   `memoria/L5-subconscio/psicologica/osservazioni-emergenti.md`, formato completo (raw → lettura →
   affidabilità media → implicazioni → contestabile da Giuseppe). Il flag nel file raw è chiuso e
   rimanda alla voce. La lettura, in breve: ciò che gli chiede un gesto **già deciso** non accade,
   mentre ciò che gli chiede un **giudizio** accade subito; il rimedio non è ricordarglielo meglio,
   è togliere il gesto — ed è la forma di tutte le riparazioni che hanno funzionato finora (hook
   Stop, `raccolta-atti.py`, riversamento alle 20:00).
2. **L'hook di iniezione passa da «staccato» a «parcheggiato con condizione».** Non lo accendo ora, e
   il motivo non è più la prudenza tecnica (quella è stata sciolta il 22 luglio dalle misure di
   Dedalo): è che accenderlo cambia ciò che *ogni* sessione vede, e non introduco variabili in tre
   settimane di esami. Condizione di risveglio, verificabile: **dopo il 10 settembre, subito a valle
   della prova (b) sul grafo** — perché è la stessa prova a dire con quali motori si accende.
3. **Nessun lavoro di memoria chiede attenzione a Giuseppe prima del 10 settembre.** Quello che
   serve allo studio — dove sta il materiale, cosa manca — lo dicono già `stato-studente.py` e il
   registro dei procedimenti. Non aggiungo nulla lì sopra.

Registrate in `00-capitano/log-decisioni-memoria.md`.

---

## 5. I tre ruoli — proposta di taglio netto

La sovrapposizione vera non è «chi classifica / chi archivia»: sul disco i tre perimetri sono già
distinti. Il disordine nasce da altro, e va detto prima della proposta:

- un livello (L2) vuoto che regge due promozioni → la memoria si riempie **solo per decisione**, mai
  per sedimentazione, e le decisioni le prendiamo io e Dedalo: l'archivio racconta l'architettura,
  non la vita;
- tre organi di richiamo e nessuna porta;
- il **Rapsodo è stato dispacciato 4 volte in tutta la storia registrata** (30 luglio e 2 agosto),
  mentre l'agente generico `general-purpose` è stato dispacciato **~25 volte**. Il custode del
  passato viene saltato quasi sempre — non per una decisione, per attrito. È esattamente
  l'antipattern che Giuseppe ha cementato («mai un agente generico al posto di uno nominato»), e si
  misura.

### Rapsodo — osserva e misura. Non decide, non interpreta.
**Suo, in esclusiva:** classificazione P1/P2 di ciò che entra; pattern longitudinali **raw** con
occorrenze contate e fonti nominate; reality check comparativi (ciò che si è detto contro ciò che
risulta sul disco); i due `rapsodo-stato.md`.
**Non suo:** qualunque scrittura dentro `memoria/L3`, `L4`, `L5/psicologica` (di fatto è già così);
qualunque interpretazione.
**Cosa cambia:** guadagna un **innesco d'ufficio** invece di aspettare di essere chiamato — lo
dispaccio io a ogni `/intake` e a ogni chiusura di settimana, e il suo flag
`pronto-per-passata-interpretativa` diventa una voce `cadenza` del registro dei procedimenti, così
che sia la macchina a chiamarmi orfana se lo ignoro ancora dodici giorni.

### Temi — registra e restituisce le fonti esterne. Non giudica la memoria.
**Suo, in esclusiva:** tutto ciò che viene da **fuori** (repo, paper, PDF, link, documenti che
Giuseppe porta), con verdetto d'uso (`usata`/`influente`/`differita`/`marginale`/`da-potare`) e
apparato.
**Non suo:** la memoria di Giuseppe. Temi non contiene osservazioni su di lui, e non deve.
**Confine da fissare, ed è l'unica cosa che chiedo di dirimere:** oggi il catalogo è custodito da
Dedalo ma vive dentro `00-capitano/`, cioè in casa mia. Proposta: **l'ingresso è mio** (una fonte che
entra è un fatto da registrare, non una decisione: la registro io o il Rapsodo, sempre, senza
chiedere), **la potatura resta di Dedalo** (decidere cosa di quel codice si adatta alla navicella è
architettura, non memoria). Così Temi smette di essere un terzo territorio ambiguo e diventa un
archivio con due porte dichiarate.

### Mnemosyne — decido cosa risale, interpreto, e rispondo del richiamo.
**Mio, in esclusiva:** promozioni L3/L4; scrittura di L5/psicologica; politica del richiamo;
verifica che L3 corrisponda a ciò che è successo.
**Ciò che oggi manca e che rivendico:** **la porta unica del richiamo**. Finché ci sono tre organi e
nessun punto d'ingresso, il richiamo non ha un responsabile — e un archivio senza responsabile del
richiamo è un magazzino. Dopo il 10 settembre: un solo comando a cui si chiede «cosa sappiamo di X»,
che dietro usi i motori che servono e dichiari da dove viene ogni pezzo.
**E una funzione che oggi non è di nessuno: la potatura.** Lo snapshot cresce, i verbali si
accumulano, i template restano. Me la prendo io, come procedimento con età massima nel registro, non
come agente nuovo.

**Serve un quarto perimetro?** No. Serve che i tre esistenti abbiano un innesco automatico ciascuno,
perché la lezione misurata di L5 vale per tutti: *un livello che si riempie solo per innesco umano
non si riempie*, e — aggiungo oggi — *un segnale che nessuno è incaricato di leggere non è un
segnale*.

### Cosa cambia in pratica il giorno dopo la ratifica (per Giuseppe: nulla da fare)
1. Ad ogni mia apertura leggo, nell'ordine: verbali della finestra → flag del Rapsodo → coda di
   apprendimento. Oggi non lo faccio, ed è il motivo per cui i segnali marciscono.
2. Lo snapshot torna a **una pagina** con lo storico spostato in `snapshot-archivio.md`; i verbali si
   aggregano in **uno per giorno**.
3. Il registro dei procedimenti guadagna le tre voci di memoria che oggi mancano —
   `passata-L5` (cadenza), `potatura-memoria` (cadenza), `porta-del-richiamo` (proposto, con la
   condizione di apertura dopo il 10 settembre) — e il grafo diventa `parcheggiato` con condizione
   invece di restare una nota fra gli organi.

**Ordine dopo il 10 settembre:** (1) prova del grafo; (2) porta unica del richiamo + accensione
dell'iniezione; (3) potatura di snapshot e verbali; (4) ratifica dei perimetri con Giuseppe.

---

## 6. Limiti del metodo — perché ogni numero sia contestabile

- I conteggi di **invocazione** vengono dai trascritti JSONL delle sessioni in
  `~/.claude/projects/C--Users-ACER-Desktop-AgentsAI/`, contando le righe-messaggio che contengono un
  comando eseguito. Sono una **stima per difetto**: ciò che Giuseppe lancia da un terminale fuori da
  Claude Code non compare — e infatti l'indice risulta ricostruito ogni sera da `riversa.py` via Task
  Scheduler, che nei trascritti non c'è. Dove il disco contraddice il trascritto, ho creduto al disco.
- I conteggi di **file e voci** vengono da `glob` e da lettura diretta oggi, 14-08.
- Il numero **1010 file** non l'ho contato io: è del log del riversamento del 13-08 20:00.
- I numeri del grafo (133 nodi, 1010 legami) sono del 22 luglio e non li ho ri-misurati: rigenerarli
  richiede `voce-venv`, e la misura non cambierebbe il verdetto, che dipende da **zero
  interrogazioni**, non dalla taglia.
- Non ho misurato quante volte Giuseppe ha aperto `anima.html` nel browser: non lascia traccia. Se
  l'ha aperta spesso, il verdetto (c) va rivisto — un ritratto guardato è un ritratto che serve.

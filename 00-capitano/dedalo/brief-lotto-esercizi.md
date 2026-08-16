---
type: spec
autore: Dedalo
data: 2026-08-16
oggetto: brief riusabile per i lotti di esercizi — vive su disco perche' la sessione muore
---

# Brief standard — un lotto di esercizi

**Perche' sta su un file e non in una chat.** Il limite di sessione ha ucciso tre build
fra il 13 e il 15 agosto. Ogni volta il lavoro perso non era il testo: era *sapere cosa
stavamo facendo*. Questo brief e la coda (`00-capitano/scripts/coda-notturna.py`) sono le
due cose che devono sopravvivere al limite. Chi riprende legge questi due file e sa tutto.

**Mandato di Giuseppe, 16 agosto:** ogni tipo d'esercizio d'esame deve avere **50 esercizi**
da cui allenarsi — dagli esami, e anche da fuori per varieta'. Ordine di lavorazione: per
**frequenza d'esame**, non alfabetico, cosi' che se il tempo finisce resti indietro il tipo
meno probabile.

## Come si dispaccia un lotto

1. `python 00-capitano/scripts/coda-notturna.py --prossimo` dice materia, pool, quante ne ha
   e quante ne mancano. La coda **riconta i file ogni volta**: non c'e' stato da aggiornare.
2. Si dispaccia **un solo** `demiurgo-accademico` (Opus) per lotto. Mai piu' di uno alla
   volta: e' cio' che fa scattare il limite.
3. Alla consegna: montare e verificare (sotto).

## Le tre regole che il brief deve sempre contenere

**(a) Salva prima di perfezionare.** Scrivi 8 unita' e salva; poi altre 8 e salva. Non
verificare tutto il materiale prima di scrivere: un predecessore l'ha fatto ed e' morto col
lavoro in pancia, senza lasciare una riga. Otto unita' buone su disco valgono piu' di
venticinque perfette che non esistono.

**(b) Non asserire cio' che non hai derivato.** Se ricalcoli un coefficiente e non torna con
la stampa ufficiale, scrivilo nella soluzione invece di allinearti alla stampa. Se un
esercizio e' internamente incoerente, dillo. Giuseppe ci studia sopra per un esame: una
soluzione dichiarata incerta vale piu' di un numero comodo e falso. I Demiurghi del 13
agosto hanno applicato questa regola contro il proprio interesse, ed e' il momento in cui la
navicella ha smesso di essere un solo controllore.

**(c) I distrattori sono trabocchetti veri**, ricavati dalle soluzioni degli esami, non
errori plausibili inventati. Un distrattore che nessuno sceglierebbe non insegna niente.

## Forma delle unita' (identica per Metodi e Analisi Vettoriale)

```
Q.<pool> = [
  { pool:'<pool>', src:'20260212 Es.4   oppure   Set 4 es.7 · manuale', steps:[
      { t:'testo della domanda',
        opts:[{x:'...',c:true},{x:'...'},{x:'...'}],
        hint:'punta all errore, NON ripete la domanda',
        sol:'soluzione che CITA il teorema o il criterio',
        cont:'(opz.) etichetta del bottone di avanzamento' },
      { ...passo successivo... }
  ]},
];
```
- `opts`: almeno 2 opzioni, **esattamente una** con `c:true` (lo verifica la macchina).
- Un solo `step` = domanda secca; piu' `steps` = il conto intero, ed e' li' che si impara.
- LaTeX con `$...$` e `$$...$$`. **Niente entita' HTML dentro la matematica** (la rende
  KaTeX); entita' solo per gli accenti del testo italiano.
- Stringhe a doppi apici, ogni backslash LaTeX **raddoppiato**: `"\\partial_t u"`.
- Un lotto **aggiunge in coda** al frammento esistente senza toccare le unita' gia' presenti.

## Dove vivono i frammenti

| materia | frammenti | quiz montato |
|---|---|---|
| Metodi e Modelli | `02-accademico/corsi/metodi-e-modelli/banca-esercizi/frags/<pool>.js` | `02-accademico/percorso-matematica/metodi/Quiz_MetodiModelli_v1.html` |
| Analisi Vettoriale | `02-accademico/corsi/analisi-vettoriale/banca-esercizi/frags/<pool>.js` | `02-accademico/percorso-matematica/analisi-vettoriale/Quiz_AnalisiVettoriale_v1.html` |

Le mappe dei tipi d'esercizio, con la frequenza reale negli appelli:
`metodi-e-modelli/02-libro-di-testo/01-mappa-esercizi.md` e
`analisi-vettoriale/banca-esercizi/mappa-esercizi.md`.

## La varieta' che viene da fuori

Mandato di Giuseppe: gli esercizi vanno presi dagli appelli **«ma anche online, per
aggiungere varieta'»**. Il difetto da curare e' preciso: un pool costruito solo sugli appelli
di un docente allena a riconoscere *quei testi*, non il tipo.

La ricognizione dell'Argonauta sta in `00-capitano/temi/fonti-esercizi-2026-08-16.md`, ed e'
organizzata per tipo. **La sezione da leggere prima di produrre e' «Per il Demiurgo»**: dice,
tipo per tipo, quali varianti quelle fonti suggeriscono e che i pool oggi non hanno.

Regola d'uso, non aggirabile: le fonti servono come **ispirazione per le varianti**, non come
testi da riprodurre. Gli esercizi si generano nuovi — contesto fisico diverso, notazione
diversa, geometria o caso limite diverso. Ogni unita' nata cosi' porta nel campo `src` la
provenienza dell'idea (`tipo F · da <fonte> · manuale`), mai il testo altrui copiato.

**Nota che vale per il futuro, non per stanotte.** La maggior parte delle fonti trovate e'
**CC BY-NC-SA**: NC vuol dire *non commerciale*. Per lo studio di Giuseppe non cambia nulla, e
un esercizio generato ex novo su un'idea non e' un'opera derivata. Ma il modulo Business
punta a vendere materiali originali della navicella: se un giorno un pool nato da queste
fonti finisse in un pacchetto in vendita, la domanda va posta a **Ierofante** prima, non dopo.
Lo scrivo qui perche' e' esattamente il genere di dettaglio che nessuno ricorda fra sei mesi.

## Montaggio e verifica — sempre, dopo ogni lotto

```
node 00-capitano/scripts/quiz_assembla.js <quiz.html> <frags-dir>
node 00-capitano/scripts/quiz_verifica.js <quiz.html>
```
`quiz_assembla` **scarta un frammento con meno di 8 unita'** (lo tratta come build fallito a
meta'): un lotto va sempre portato sopra quella soglia prima di montare. `quiz_verifica`
deve dare **PASS**: controlla sintassi, una sola risposta giusta per step, `$` bilanciati e
ogni formula contro KaTeX. Se da' FAIL, il frammento si corregge — non si monta e basta.

## L'altro lavoro nella stessa coda: la diagnosi (custode Rapsodo)

Mandato di Giuseppe del 16-08: un **paper di diagnosi totale del sistema**, dove per ogni
oggetto costruito in questi mesi siano distinti quattro assi — (1) intenzione dichiarata da
lui, con le sue parole; (2) oggetto pensato insieme; (3) meccanica costruita da Dedalo;
(4) **utilita' effettiva misurata nel tempo**. Il valore sta nella distanza fra le colonne,
e la quarta e' la domanda che nessun organo della navicella ha mai posto.

Scope **totale**, per sua istruzione esplicita: non solo cio' che ha un nome nel registro,
non solo cio' che non funziona. Dieci famiglie, elencate in `coda-notturna.py`. Il registro
non e' il perimetro — se lo fosse, il paper misurerebbe la contabilita' di Dedalo invece del
sistema.

**Perche' sta nella coda:** dura piu' di una sessione. Stato con
`python 00-capitano/scripts/coda-notturna.py --diagnosi`, che **non ricorda ma misura**:
legge quali famiglie il paper ha gia' coperto invece di fidarsi di un flag.

**Come si riprende.** Se la diagnosi non e' completa e nessun Rapsodo e' in volo, se ne
dispaccia uno (Opus: e' giudizio, non conteggio) dicendogli di:
- leggere `00-capitano/diagnosi-stato.md` — il file che chi lavora aggiorna a ogni
  salvataggio, e che e' l'unica cosa che chi riprende ha in mano;
- leggere il paper gia' scritto e **continuarlo**, mai ricominciarlo;
- salvare **una famiglia alla volta**, e aggiornare lo stato a ogni salvataggio;
- lasciare l'HTML impaginato per ultimo (si rigenera in cinque minuti; la misura no).

Un Rapsodo e un Demiurgo possono volare insieme: il vincolo di uno-alla-volta riguarda i
Demiurghi fra loro, che sono i piu' pesanti.

## Addendum operativo — l'innesto (Mnemosyne, 2026-08-16)

Aggiunta al metodo di Dedalo, non sostituzione. Il brief sopra diceva «un lotto **aggiunge
in coda** al frammento esistente»: eseguito alla lettera costa che il Demiurgo apra un
frammento da 150 KB (circa 40k token di sola lettura) prima di scrivere una riga, e a
diciannove lotti sono 700k token spesi per NON produrre nulla. Con il monte che e' il
vincolo vero, e' il difetto piu' caro del procedimento.

**Il Demiurgo non tocca piu' il frammento.** Scrive solo le unita' nuove in un file di
stazionamento, e l'innesto lo fa una macchina:

```
00-capitano/lotti/<materia>-<pool>-lotto<N>.js      <- lo scrive il Demiurgo
node 00-capitano/scripts/lotto_innesta.js <frags-dir>/<pool>.js 00-capitano/lotti/<...>.js
```

`lotto_innesta.js` taglia il corpo dell'array, lo splicia prima della quadra finale del
frammento, riesegue il risultato in una vm e **controlla che il conteggio torni**
(`prima + nuove = dopo`). Se la sintassi e' rotta o il conto non torna, esce con rc=1 e non
scrive: un innesto o riesce o non e' avvenuto. Backup in `<pool>.js.bak`. L'innesto e'
testuale, non un round-trip JSON: i commenti che documentano quali coefficienti sono stati
ricalcolati sopravvivono.

**Al posto della lettura del frammento:** `00-capitano/dedalo/coperture-attuali.md`, che per
ogni pool elenca le unita' gia' presenti con provenienza, numero di passi e apertura della
prima domanda. Circa 2k token per pool invece di 40k. Si rigenera con
`python 00-capitano/scripts/coperture.py --scrivi` — e' una misura, non si modifica a mano.

**Il file di stazionamento ha questa forma esatta**, altrimenti l'innesto lo rifiuta:

```js
/* commento di testata: da dove vengono le unita', cosa e' stato ricalcolato,
   e ogni discrepanza trovata con le stampe ufficiali. Viene conservato. */
Q.<pool> = [
  { pool:"<pool>", src:"...", steps:[ ... ] },
  ...
];
```

Il nome del pool dentro `Q.<pool>` deve coincidere col nome del frammento di destinazione.

**Il numero chiesto e' un PAVIMENTO: fanne sempre due in piu'.** Misurato il 16 agosto su due
Demiurghi indipendenti che lavoravano allo stesso brief: uno ha dichiarato 20 unita' e ne ha
consegnate 19, l'altro 18 e ne ha consegnate 17. Scarto di uno, in entrambi i casi, con
salvataggi a tranche («8+8+4», «8+8+2»). Non e' disattenzione di un agente: e' che **chi scrive
non sa contare cio' che ha appena scritto**, e la tranche finale e' dove il conto si perde. Non
si cura chiedendo piu' attenzione — si cura non credendo al rapporto. Il conto vero lo fa
`lotto_innesta.js` eseguendo il file (`Q.<pool>.length`), e il pavimento lo ricontrolla la coda.

**La profondita' e' un requisito, non un di piu'.** Misura del 16 agosto: tutto il quiz di
Analisi Vettoriale sta a 324 unita' e **360 passi** — quasi tutte domande da un passo, cioe'
riconoscimento. Il pool `edp` di Metodi ha unita' da sette passi che fanno il conto dall'inizio
alla fine. All'esame Giuseppe deve **svolgere**, non riconoscere. Ogni lotto porti almeno tre
unita' da **cinque passi o piu'**: impostazione, dominio, calcolo, caso limite, verifica — un
passo per ogni punto in cui si perdono punti.

**Come si salva ogni 8 unita' senza riscrivere il file.** Prima Write con le unita' 1-8 e la
quadra di chiusura; poi, per ogni gruppo successivo, Edit con `old_string` = `\n];` e
`new_string` = `,\n<unita' nuove>\n];`. Costa il solo testo nuovo. La regola (a) del brief —
salva prima di perfezionare — resta la piu' importante di tutte: e' cio' che ha permesso di
non perdere niente quando il limite e' arrivato.

**Dove leggere, per pool, senza sprecare monte.** Le sezioni di
`00-capitano/temi/fonti-esercizi-2026-08-16.md` (Read con `offset`/`limit`, mai il file intero):

| pool | righe | | pool | righe |
|---|---|---|---|---|
| edo | 30-42 | | green | 149-159 |
| curve | 43-53 | | greendelta | 160-171 |
| superfici | 54-64 | | polidrome | 172-183 |
| gauss | 65-75 | | integrali | 184-195 |
| stokes | 76-86 | | laurent | 196-206 |
| conserv | 87-96 | | fourier | 207-217 |
| diff | 97-109 | | matrici | 218-230 |
| dini | 110-120 | | spettro | **non c'e'** (vedi sotto) |
| ottim | 121-132 | | edp | 231-245 |
| serie | 133-144 | | (tutti) | 246-fine: «Per il Demiurgo» |

**Il buco di `spettro`.** La ricognizione dell'Argonauta ha diciotto sezioni e nessuna copre
lo spettro degli operatori differenziali (B3: dominio come parte dell'operatore, BC che
determinano lo spettro, autoaggiunzione, spettro continuo). La prima stesura di questa
tabella ci rimandava alle righe 218-245 — che sono *matrici* e *EDP*, cioe' altro. Un
rimando approssimato e' peggio di un buco dichiarato: il Demiurgo ci va, non trova il suo
tipo, e prende varieta' dal tipo sbagliato.

Quindi, per `spettro` e solo per lui: **la varieta' esterna non c'e'**, e il lotto si
costruisce sui soli appelli e sul `libro_metodi` finche' qualcuno non manda l'Argonauta a
colmare la sezione. Non e' un dettaglio da niente — B3 e' 6/18 storico e 3/9 recente. Chi
riprende: e' questa la voce da aprire prima di rifare il pool. (Dedalo, 16-08)

## Riscontri gia' fatti, da non ri-derivare

**Refuso nella stampa ufficiale, esame 20250127 Es.1** (confermato il 16-08 da un Demiurgo
sul pool `gauss`, prima di essere fermato). Il testo alla riga 11 scrive il dominio
$x^2+y^2\le 9$, raggio 3; la soluzione alla riga 27 lo ritrascrive come $x^2+y^2\le 3$, ma
poi usa $m_2(D)=9\pi$, dice «cerchio di raggio 3» e parametrizza il bordo come
$\gamma=(3\cos t,3\sin t,\dots)$. **Il refuso e' nel "$\le 3$" della ritrascrizione: il
raggio giusto e' 3.** Chi riprende `gauss` ci costruisca sopra un'unita': accorgersi che una
traccia e' internamente incoerente vale piu' di dieci esercizi che non lo sono, e all'esame
non lo insegna nessuno.

## Ordine delle due materie — corretto il 2026-08-16

La coda nasceva con Metodi davanti, e la ragione era scritta: `edp` era **a zero** ed e'
l'esercizio 4 in sei appelli su sei. Quella ragione e' scaduta la notte del 15: `edp` ha 30
unita'. Restano le date, e dicono il contrario — **Analisi Vettoriale il 4 settembre**,
Metodi il 9. Analisi Vettoriale e' anche la ripetizione di uno scritto non superato.
Quindi si lavora prima Analisi Vettoriale. L'ordine e' cambiato in `coda-notturna.py`, non
solo qui: un ordine dichiarato e non eseguito e' la malattia che questo file esiste per
curare.

## Quando la coda e' vuota

`coda-notturna.py` dice «CODA VUOTA». A quel punto il lavoro non e' finito: resta la parte
che Giuseppe ha chiesto e che nessuna soglia numerica copre — **la varieta' presa da fuori**
(esercizi non degli appelli) e il censimento dei tipi per **Meccanica**, che essendo un orale
ha una tassonomia diversa dai due scritti.

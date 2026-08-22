---
type: progetto
autore: Dedalo (Architetto)
data: 2026-08-22
oggetto: Oceano — il condotto che tiene la navicella al lavoro sulle idee di Giuseppe
stato: PIANO, non cantiere. Un bivio resta aperto e e' di Giuseppe (come arrivano gli audio dal telefono).
---

# Oceano

## Cos'e', nelle parole di Giuseppe (2026-08-22)

> «mi immaginavo oceano come gestione del flusso totale [...] c'e' uno spazio dove mando
> audio a ripetizione, cosicche' quando un eventuale rate limit o qualsiasi cosa che possa
> fermare la run viene meno, la navicella inizia a vedere la mia coda di idee»

Non e' una casella per gli appunti. E' il condotto che **disaccoppia il momento in cui
Giuseppe ha un'idea dal momento in cui la navicella ha capacita' per lavorarci.** Lui detta
quando l'idea arriva, anche lontano dal PC; la navicella macina quando il limite lo consente.
Il rate limit smette di essere una morte e diventa una pausa.

Il registro lo elencava come «voce -> intake», e l'orfano `intake-note-vocali` come «ponte
plancia->intake». Erano **descrizioni sbagliate**, ed e' anche il motivo per cui la voce e'
rimasta muta 35 giorni: descriveva un tubo fra due stanze invece di un ciclo.

## Cosa esiste gia' (misurato il 22-08, non ricordato)

- **Handy** installato: la dettatura di sistema funziona, il parlato diventa testo dove sta
  il cursore. La trascrizione, che sembrava il problema, non lo e' piu' sul PC.
- **`00-capitano/scripts/voce.py` + `voce-venv`**: faster-whisper locale su CPU, zero rete,
  zero spesa. Serve per l'audio grezzo (il caso telefono), non per la dettatura da PC.
- **Oroboro** (`scripts/oroboro.py`): attraversa `notturno/coda.md`, esegue una voce per
  volta, legge l'ora di reset dentro l'errore del limite, dorme e **riprende la stessa voce**.
  Lanciato dall'Utilita' di pianificazione ogni giorno alle 03:00 con budget 7 ore.
- **`notturno/coda.md`**: il formato che Oroboro consuma. Voci `- [ ]`, la prima non spuntata
  parte, a fine run viene spuntata col path del paper.
- **Protocollo di intake** e **Rapsodo**: la classificazione P1/P2 esiste gia' ed e' sua.

## Il guasto da riparare PRIMA (prerequisito, non optional)

**La coda non si chiude.** Log di Oroboro: la voce «Analisi Vettoriale, ripetizione del 4
settembre» e' stata eseguita il 17, il 18, il 20 e il 22 agosto. Quattro run sulla stessa
voce. Il paper del 18 e' un fallimento conclamato (ha cercato la banca dati in
`02-accademico/esami/analisi-vettoriale/banca-dati/`, che non esiste, e ha concluso che la
banca dati non c'era: sta in `02-accademico/corsi/analisi-vettoriale/01-banca-dati/`, 30 file).
Il run del 20 e' fallito. Il log ripete «Voci chiuse: 0 | Restano aperte: 15».

Finche' questo non e' riparato, versare idee nella coda peggiora il problema invece di
risolverlo: **si riempie un secchio bucato.** Il lavoro non e' aggiungere voci, e' capire
perche' la spunta non viene scritta e se una voce fallita debba essere ritentata, marcata o
scavalcata. Una voce che fallisce due volte per la stessa causa non e' da ritentare una terza:
va marcata, perche' altrimenti mangia ogni notte il turno di tutte le altre.

## Il disegno

Quattro stadi. I primi due sono meccanica, il terzo e' giudizio, il quarto e' costituzione.

**1. La bocca.** Uno spazio dove Giuseppe versa, a ripetizione e senza formato: audio dal
telefono, testo dettato con Handy dal PC, un file lasciato cadere. Nessun formato imposto,
perche' un formato imposto e' un motivo per non usarla. *(Il canale telefono e' il bivio
aperto: vedi sotto.)*

**2. Il flusso.** `oceano.py` agganciato al SessionStart, come gia' fa `raccolta-atti.py` che
pesca gli esiti dei quiz dai Download — un pattern gia' collaudato nella navicella, che non
richiede nessun processo acceso e funziona con la plancia spenta (che e' la condizione
normale: Giuseppe lavora in Windows Terminal). Se trova audio lo passa a Whisper nel venv che
esiste gia'; se trova testo lo prende com'e'. Deposita il grezzo con data e provenienza e
sposta l'originale in `assorbiti/`: niente oblio, mai.

**3. Lo smistamento — e qui Oceano ha DUE foci, non una.** Giuseppe ha dichiarato che ci
finiranno *idee sulla navicella e sui progetti* **e** *pensieri personali*. Sono materie
opposte e non possono seguire la stessa strada:
- ramo **lavoro** -> diventa una voce di `coda.md` che Oroboro esegue;
- ramo **custodia** -> materia di grado L5, che per regola cementata **non va mai servita ai
  sub-agenti passivi** e la interpreta solo Mnemosyne.
  Il Rapsodo pre-classifica (e' il suo mestiere); l'interpretazione resta di lei.
  **Nel dubbio si va in custodia, non in coda**: eseguire un pensiero personale come se fosse
  un compito e' il danno peggiore che questo organo possa fare.

**4. Il raffinamento, ed e' il vero collo di bottiglia.** Un'idea dettata in trenta secondi
non e' un compito eseguibile, e Oroboro **non decide**: esegue la coda com'e' scritta. Se una
voce e' vaga, la macina male per sette ore. Quindi fra il grezzo e la coda serve un passaggio
di giudizio, che e' di un attivo (io o Mnemosyne) durante una sessione.
Tre stati per una voce che entra:
- `eseguibile` — ha un compito chiaro e una condizione di fine: entra in coda;
- `da-raffinare` — l'intento si capisce ma manca il come: la trasformo io, poi entra;
- `da-chiedere` — **tocca la direzione della navicella**: non entra, aspetta Giuseppe.
Quest'ultimo stato non e' prudenza, e' la costituzione: le mani sono libere, la rotta no. Il
punto delicato di Oceano e' che un'idea dettata di corsa *sembra* un ordine ma spesso e' un
pensiero ad alta voce, e trasformarla in esecuzione automatica significherebbe far decidere la
rotta a un vocale di trenta secondi. La coda dichiara gia' oggi: «chi la riempie: Giuseppe, o
un agente attivo durante una sessione **con** Giuseppe». Oceano non viola questa regola —
perche' la sorgente e' la sua voce — ma la violerebbe se saltasse lo stadio 4.

## Il bivio aperto (di Giuseppe, non mio)

Come arrivano gli audio dal telefono al PC, con due vincoli duri:
- **zero costo** oltre l'abbonamento (patto cementato);
- **Kishi e' PUBBLICA**: non puo' essere il canale, perche' il ramo custodia porta materia
  personale. Servirebbe una repo privata dedicata, o una cartella sincronizzata, o un canale
  di messaggistica verso se stesso da cui il PC pesca.
Non lo decido io perche' dipende da cosa Giuseppe ha gia' sul telefono e da quanto attrito
tollera nel gesto di dettare: se il gesto costa piu' di dieci secondi, l'organo muore di
disuso come e' morto `detta.py`.

## Ordine di costruzione, se si apre

1. riparare la chiusura della coda (prerequisito, senza il quale il resto non ha senso);
2. la bocca locale + `oceano.py` al SessionStart (funziona da subito, solo PC);
3. lo smistamento a due rami con il Rapsodo;
4. il canale telefono, quando il bivio e' sciolto.

Lo stadio 2 da solo gia' vale: cattura le idee che oggi si perdono fra una sessione e l'altra.

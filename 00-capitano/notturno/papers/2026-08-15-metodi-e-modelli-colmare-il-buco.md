# Metodi e Modelli: colmare il buco

Run notturno del 2026-08-15, 10:25. Utilità di pianificazione, nessuno alla plancia.

**Stato: concluso.** Deliverable scritti: `b02.md`, `00-inventario.md`, `01-mappa-esercizi.md`,
riparazione di `stato-studente.py`. Il buco esiste, ma non è quello che la coda diceva.

---

## 1. Il problema

La voce in coda diceva: «Metodi e Modelli ha **zero quiz e 37 file** in banca dati, contro i
63 di Analisi Vettoriale; è il divario più netto fra scadenza e preparazione della sessione».

Prima cosa fatta: guardare il disco invece di fidarmi del numero. Al 2026-08-15, prima che
toccassi qualcosa:

- `percorso-matematica/metodi/Quiz_MetodiModelli_v1.html` esisteva, 360 KB, ultima scrittura
  **14 agosto 11:44** — cioè ieri. **8 pool tutti `status:"full"`, 248 unità, 341 passi.**
- Le sorgenti stavano in `corsi/metodi-e-modelli/banca-esercizi/frags/` (8 file `.js`,
  scritti fra il 12 e il 14 agosto).
- I file del corso erano 48, non 37, più 62 estratti `_txt` di servizio.

Metodi non era il corso più scoperto: era **il secondo più coperto della sessione** per
numero di domande. Il numero in coda veniva da `stato-studente.md`, che a sua volta veniva
da un contatore che guardava dentro la cartella del corso — mentre dal **12 agosto** i quiz
montati vivono nel percorso unico. È scritto, nero su bianco, in
`corsi/metodi-e-modelli/03-note-mie/DOVE-VIVE-IL-QUIZ.md`. Lo stesso difetto dava
`analisi-vettoriale: 0 quiz` con il quiz AV montato e funzionante.

Quindi la prima decisione del run è stata **cambiare il problema**, non eseguire la voce
alla lettera. Non «costruire un quiz per Metodi»: quello c'era. Ma:

> i 248 quesiti che esistono coprono quello che l'esame del 9 settembre chiederà davvero?

Domanda tutt'altro che oziosa, perché il corso porta una **discrepanza dichiarata e mai
sciolta** dal 18 luglio, in `programma-ufficiale.md`: il programma ufficiale del canale 3
(Caprini/Esposito) è analisi complessa + espansioni asintotiche, mentre gli eserciziari
caricati puntano a un Metodi funzionale (Hilbert, Fourier, EDO). Con una nota di chi
l'aveva scritta: «Verità = gli ~19 scritti passati. Prima di ricalibrare, l'Argonauta legge
gli scritti e dice cosa chiede DAVVERO l'esame di Giuseppe». Quella lettura non era mai
stata fatta.

**Il compito vero, tradotto:** fare inventario e mappa, usarli per sciogliere la
discrepanza, e dire se i pool esistenti reggono l'urto.

Reggono per metà. La risposta corta sta in §2.4.

---

## 2. Come ho ragionato

### 2.1 La mappa si fa sugli scritti, non sulle slide

Un inventario delle fonti dice cosa c'è; una mappa esercizi deve dire cosa viene *chiesto*.
Le due cose divergono sistematicamente, e in questo corso divergono in modo estremo — il
programma ufficiale elenca un argomento (le espansioni asintotiche) che l'esame non ha mai
chiesto in 18 appelli. Quindi ho letto i 18 scritti, non le dispense.

Ho letto gli estratti `_txt`, non i PDF: la pipeline corpus-PDF esiste per questo ed era già
girata su tutti e 24 i file della banca dati. Un mio script ha tagliato ogni file alla
prima occorrenza di «SOLUZIONI», riducendo 155 KB di PDF a 35 KB di sole tracce — il che ha
reso possibile leggere l'intera banca dati d'esame in una passata invece che a campione.
File di lavoro in `00-capitano/notturno/_work-metodi-testi.txt`.

### 2.2 Perché nessuno se n'era accorto: manca una passata

Guardando `banca-esercizi/` ho trovato `b01.md` (esami 2023-2024) e `b03-eserciziari.md`
(i 5 Set), entrambi del 2 agosto. **`b02` non c'era.** Per Analisi Vettoriale la convenzione
è esplicita e completa — `b01` = 2022-2023, `b02` = 2024-2025. Per Metodi la seconda finestra
non è mai stata censita: **nove appelli, da gennaio 2025 a febbraio 2026, mai letti da
nessuno.**

Gli otto pool sono stati costruiti su `b01` + `b03`. Cioè: su tutto tranne i nove esami più
recenti. Questa è la causa meccanica di tutto il resto, e la prima cosa che ho scritto è
stata la passata mancante (`banca-esercizi/b02.md`).

### 2.3 Cosa dicono i nove esami non letti

Ordinando i 18 appelli per data e guardando **solo l'esercizio 4**:

```
2023-06  Green            2024-09  ODE var. costanti     2025-06  PDE
2023-07  Green (δ')       2024-11  Green (δ)             2025-07  PDE (sorgente δ)
2023-09  spettro          2025-01  spettro               2025-09  PDE (Hermite)
2023-11  Green (δ')       2025-02  Green                 2025-11  PDE (calore)
2024-01  Fourier          2025-05  operatore/distrib.    2026-01  onde
2024-06  spettro                                          2026-02  PDE
```

**Sei appelli consecutivi, sei PDE.** L'ultima funzione di Green come esercizio a sé è del
12/02/2025 — diciotto mesi prima dell'appello di Giuseppe. L'ultimo Fourier a sé è del
05/05/2025.

Non è rumore. Fourier e Green non spariscono, **si spostano dentro le PDE**: la separazione
delle variabili produce serie di Fourier, e la PDE con sorgente $\delta$ si risolve con la
Green del calore. Chi sa fare Green e Fourier ha i mattoni; non ha l'esercizio.

### 2.4 Il verdetto sui pool esistenti

| pool | domande | freq. del tipo (18 app.) | freq. 2025-26 (9 app.) | giudizio |
|---|---:|---:|---:|---|
| `integrali` | 30 | 17/18 | 7/9 | giusto |
| `laurent` | 32 | 14/18 | 8/9 | giusto |
| `polidrome` | 30 | 11/18 | 5/9 | giusto |
| `matrici` | 30 | 8/18 | 5/9 | giusto |
| `spettro` | 32 | 6/18 | 3/9 | giusto |
| `fourier` | 30 | 7/18 | 2/9 | serve dentro le PDE |
| `green` | 33 | 5/18 | 1/9 | **sovrappesato** |
| `greendelta` | 31 | 5/18 | 1/9 | **sovrappesato** |
| — | **0** | **6/18** | **6/9** | **PDE: buco** |

**64 domande su 248 (26%) stanno su un tipo comparso una volta negli ultimi nove appelli.
Zero domande stanno sul tipo comparso in tutti e sei gli appelli più recenti.**

La metà A dell'esame (analisi complessa, esercizi 1-2) è coperta bene: i tre pool grossi
stanno esattamente sui tre tipi a frequenza più alta. **Il problema è tutto nella metà B**,
ed è concentrato in un punto solo.

Buchi minori, entrambi nella metà A o al confine: **armoniche / Cauchy-Riemann / armonica
coniugata** (3 appelli su 18, tutti 2024-25, nessuna domanda) e **distribuzioni fuori dal
contesto Green** — la delta composta $\delta'(x^2+y^2-1)\delta(x^2-y^2)$ del 20/01/2026 non
somiglia a niente di ciò che `greendelta` allena.

### 2.5 La discrepanza del 18 luglio, sciolta

Due metà, due risposte diverse.

**Espansioni asintotiche** (Laplace, fase stazionaria, punto di sella), punto 4 del programma
ufficiale: **zero occorrenze** in 18 scritti e 65 esercizi degli eserciziari, verificato per
pattern su tutti i `_txt`. Nel budget di preparazione dello scritto valgono zero. Se
compaiono, compaiono all'orale.

**Metodi funzionale contro analisi complessa**: non è un aut-aut, è la struttura fissa
dell'esame. Tutti e 18 gli appelli hanno 4 esercizi da 30 punti con **esercizi 1-2 di analisi
complessa e 3-4 di analisi funzionale, su fogli protocollo separati**. Gli eserciziari
alimentano la seconda metà, il programma ufficiale descrive la prima. Erano entrambi veri e
descrivevano metà del foglio ciascuno.

### 2.6 Strade scartate

**Costruire subito il pool PDE invece dei documenti.** Era la tentazione: è la cosa che
manca davvero, e il tempo stringe. Scartata per due motivi. Il primo è la lezione del run
del 2 agosto, che è morto senza scrivere una riga: un pool a metà non vale niente, un
paper e una mappa valgono anche se il run muore. Il secondo è che senza `b02` scritto, il
pool sarebbe stato costruito di nuovo sulla percezione invece che sul censimento — cioè
avrei ripetuto l'errore che stavo diagnosticando. Il pool resta come lavoro conseguente,
con le fonti già puntate (§3, ultima riga della tabella).

**Cercare fonti esterne per le PDE.** Scartata dopo verifica: non serve niente da fuori,
tutto il materiale è già in casa (§3). Andare a cercare eserciziari online quando ci sono
17 PDE risolte dal docente stesso nella cartella sarebbe stato lavoro-vetrina.

**Riscrivere `b01` con lo stesso livello di dettaglio di `b02`.** Scartata: `b01` è fatto
bene ed è già stato usato. Il valore stava nella finestra mancante, non nel rifare l'esistente.

**Ribilanciare i pool `green`/`greendelta` togliendo domande.** Scartata: togliere materiale
corretto per fare spazio è una scelta di rotta (è il metodo di studio di Giuseppe), non una
riparazione. E Green resta necessaria — è l'ossatura delle PDE con sorgente. Sta come
questione aperta in §5.

---

## 3. Cosa ho fatto

| file | cosa è |
|---|---|
| `02-accademico/corsi/metodi-e-modelli/banca-esercizi/b02.md` | **nuovo.** La passata mancante: 9 appelli 2025-2026, esercizio per esercizio con punteggio, tipo e contenuto; sintesi di frequenza; la sezione sulla deriva |
| `02-accademico/corsi/metodi-e-modelli/02-libro-di-testo/00-inventario.md` | **nuovo.** Inventario fonti secondo `/inventario`: 18 appelli unici, 5 eserciziari (65 esercizi risolti), 5 testi, il materiale prodotto dalla navicella; sette gap dichiarati con gravità e rimedio |
| `02-accademico/corsi/metodi-e-modelli/02-libro-di-testo/01-mappa-esercizi.md` | **nuovo.** Mappa esercizi secondo `/mappa`: 14 tipi ricorrenti su 72 esercizi, con frequenza storica **e frequenza recente separata**, difficoltà, concetti, trabocchetti dichiarati; copertura pool per pool; le tre priorità per il Demiurgo |
| `00-capitano/scripts/stato-studente.py` | **riparato.** Vedi sotto |
| `00-capitano/dedalo/registro-procedimenti.md` | **una voce nuova**, `quiz-metodi-pool-edp`, stato `proposto` con sonda `manca:.../frags/edp.js`. Verificatore rilanciato: la legge, e da ora la ripropone a ogni SessionStart finché il file non esiste |
| `00-capitano/notturno/_work-metodi-testi.txt`, `_work-eserciziari.txt` | scarti di lavoro, tenuti perché rendono rifacibile la lettura senza ri-estrarre |

Sul registro sono stato stretto di proposito: `proposto`, non `attivo`. Un buco trovato e
non aperto è quello che il vocabolario del registro chiama `proposto` — «deciso ma non
aperto, deve portare la condizione di apertura». Dichiararlo `attivo` con nessuno che ci
lavora significa fabbricare un orfano in tre giorni, che è la malattia che il registro
esiste per scovare. La sonda `manca:` fa sì che la voce si ripresenti da sola invece di
tacere: nessun token da pronunciare, il nome guarda all'interno.

### Cosa fa ora `stato-studente.py` che prima non faceva

1. **Trova i quiz dove stanno.** Nuova funzione `quiz_montati()`: scandaglia
   `02-accademico/percorso-matematica/*/Quiz_*.html` e accoppia la cartella del percorso al
   corso **per prefisso, sul match più lungo** (`metodi` → `metodi-e-modelli`), senza tabella
   di alias da tenere aggiornata a mano. Continua a contare anche i quiz rimasti dentro la
   cartella del corso (Geometria), senza doppioni.
2. **Dice quante domande, non solo quanti file.** Nuova `_domande_nel_quiz()`: legge pool e
   domande dal montato. Gestisce **entrambi** i motori in circolazione — quello a frammenti
   (`var POOLS = [...]` + unità JSON, Geometria/AV/Metodi) e quello dell'orale di Meccanica
   (`POOLS = {chiave: {...}}` con domande `q:"..."`), prendendo il massimo dei due conteggi
   invece di privilegiarne uno e restituire zero sull'altro.
3. **Dichiara dove ha guardato.** La tabella è seguita dall'elenco dei path dei quiz contati:
   il numero è verificabile senza rileggere il codice.

Prima e dopo:

```
| corso              | file | quiz |        | corso              | file | quiz | pool | domande |
| geometria          |  171 |    1 |        | geometria          |  171 |    1 |   12 |     310 |
| analisi-vettoriale |   63 |    0 |   →    | analisi-vettoriale |   63 |    1 |   10 |     328 |
| metodi-e-modelli   |   48 |    0 |        | metodi-e-modelli   |   51 |    1 |    8 |     341 |
| meccanica          |   16 |    0 |        | meccanica          |   16 |    1 |   11 |     457 |
```

Tre corsi su quattro risultavano senza quiz mentre tutti e quattro ce l'avevano.

I conteggi sono verificati contro una misura indipendente: il registro dei procedimenti
riporta «248 unità, **341 passi**» per Metodi (consuntivo del 14-08) e «**457** domande» per
Meccanica. Coincidono entrambi. Ci è voluto scartare i blocchi di commento del template —
l'unità di esempio che il Demiurgo deve cancellare veniva contata come domanda vera.

---

## 4. Perché così e non altrimenti

**Perché ho cambiato il problema invece di eseguire la voce.** La carta dell'Accensione dice
che un run notturno «se trova un problema lo risolve, cercando già di capire come lo avrei
voluto risolvere». Costruire un secondo quiz per un corso che ne aveva già uno montato ieri
sarebbe stato eseguire la lettera contro il senso. Il criterio non era «fai quello che c'è
scritto» ma «cosa avrebbe fatto lui davanti a questo disco» — e lui, davanti a un numero che
non torna, guarda il numero prima di lavorare.

**Perché ho scritto `b02` prima di tutto il resto.** Perché è la fonte, e le altre due sono
derivate. Inventario e mappa senza il censimento sotto sarebbero state prosa: la
nomenclatura dei procedimenti dice che un nome abbassa il costo solo se è un'asserzione
verificata contro la realtà, non prosa inerte. `b02` è il dato; la mappa lo interpreta.
Restano separati perché `b02` sopravvive a un ricalcolo della mappa.

**Perché la mappa ha due colonne di frequenza e non una.** È la scelta di forma su cui ho
esitato di più, e la giustifico. Una mappa esercizi standard ordina per frequenza
decrescente sull'intero corpus — e con quell'ordine le PDE finiscono ottave su otto tipi
(6/18) e la Green sesta (5/18), cioè il contrario della realtà d'esame. La frequenza
aggregata su tre anni **nasconde una derivata**. Due colonne — «freq» e «freq 2025-26» — sono
il minimo che rende visibile la deriva senza che qualcuno debba ricalcolarla a mano. È lo
stesso motivo per cui le tre priorità in §2 della mappa sono ordinate per *frequenza recente
× scopertura* e non per frequenza: la quantità che decide dove mettere il tempo non è quella
che il protocollo chiedeva di ordinare.

**Perché non un contatore di quiz col percorso scritto a mano.** La soluzione da due righe
era `{"metodi-e-modelli": "metodi"}`. L'ho scartata: è esattamente il tipo di procedura che
si ripete identica e non impara — quello che la carta dell'Accensione chiama il difetto, non
la garanzia. Un accoppiamento per prefisso continua a funzionare quando arriva Astrofisica
a ottobre; una tabella di alias va aggiornata a mano da qualcuno che si ricordi che esiste,
cioè non viene aggiornata. Stesso ragionamento per il doppio motore di conteggio: non
riconoscere il quiz di Meccanica avrebbe prodotto uno zero, e **uno zero da parsing fallito
è indistinguibile da un'assenza vera** — è precisamente il guasto che sto riparando, in
scala più piccola.

**Perché ho dichiarato inutilizzabili i due `CALOGERO-161` invece di ignorarli.** 512 pagine
che producono 12 KB di testo sono PDF-immagine: nessun agente può leggerli. Finché stanno lì
non fanno danno diretto, ma gonfiano il conteggio dei file e **simulano una copertura che non
esiste** — la stessa classe di errore del contatore dei quiz, da presenza scambiata per
sostanza. Non li ho cancellati: cancellare materiale di Giuseppe è una decisione sua.

**Perché non ho costruito il pool.** Spiegato in §2.6. Aggiungo il criterio: un pool di
qualità pari agli altri otto è un lavoro da Demiurgo Accademico su Opus, e lanciarlo alle
prime ore del run avrebbe messo a rischio i tre documenti — che sono la parte che non si
può rifare a partire da niente, mentre il pool si può costruire in qualunque momento
*avendo la mappa*. Ordine di priorità: prima ciò che rende possibile il resto.

---

## 5. Cosa resta aperto

**Il pool PDE va costruito, e il materiale c'è tutto.** Non serve niente dall'esterno. Le
fonti sono puntate in `01-mappa-esercizi.md` §4:

- teoria: `03-note-mie/libro_metodi.tex` cap. 18-20 (separazione di variabili, nucleo del
  calore, d'Alembert, Schrödinger libera, propagatori e Green per EDP) — con sorgente `.tex`;
- esercizi svolti dal docente: `Set 4 - Differential equations` es. 4-11 e `More problems`
  es. 2-5, 8-10 — fra cui $\partial_tu=t\,\partial_x^2u$ e $\partial_tu=t^2\partial_x^2u$,
  cioè **esattamente la forma dell'appello del 12/02/2026**;
- esercizi in forma d'esame con soluzione: i sei esercizi 4 degli appelli 2025-2026, le
  soluzioni stanno nello stesso PDF (verificato per tutti e sei);
- trabocchetti già estratti: Neumann → serie di **coseni** non di seni; coefficiente
  dipendente dal tempo → si integra $\int_0^t$, non si tratta come costante; sorgente
  $\delta(t/3-1)$ → **fattore 3** dallo scaling della delta; dati iniziali già combinazione
  finita di modi → nessun integrale, si legge il coefficiente.

Stimo un pool da ~30 domande sulla falsariga di `laurent.js`, più un pool misto da ~25 su
armoniche + distribuzioni composte. Un'unica sessione di Demiurgo Accademico per il primo.

### Questioni di rotta — non mi competono, le lascio scritte

1. **Ribilanciare o no `green` e `greendelta`.** 64 domande su un tipo comparso una volta in
   nove appelli. Aggiungere il pool PDE senza toccarli porta il quiz a ~280 domande con un
   quarto del peso ancora sulla Green. Non tocco: come si distribuisce il tempo di studio è
   una scelta sua, e c'è un argomento serio per tenerle (la Green è l'ossatura delle PDE con
   sorgente, e Giuseppe ha 25 giorni, non 5).

2. **Le note del corso si fermano al 24 aprile 2026.** `Note al 24042026 (1).pdf` copre
   polinomi ortogonali, operatori, autoaggiunzione, Hilbert, distribuzioni, spettro — e poi
   si ferma. Zero occorrenze di «calore» e «Green», due di «Fourier». Sono le note di due
   terzi di corso, e il terzo mancante è **esattamente** quello dove l'esame si è spostato.
   Se esistono note fino a giugno, caricarle è la singola azione con più ritorno di tutta la
   preparazione di Metodi. Se non esistono, `libro_metodi.tex` cap. 18-20 è il sostituto e
   va esteso invece che integrato.

3. **La discrepanza sul canale.** `programma-ufficiale.md` registra che il link portava
   `channel=2` ma la pagina rendeva «canale 3». Gli scritti in banca dati sono canale Pf-Z
   (2023) e P-Z (2024-25), e i tre appelli 2026 non riportano né canale né docenti. Non l'ho
   sciolta: dipende da quale canale ha seguito Giuseppe, che non è nei file. La struttura
   d'esame è comunque identica su tutti e 18, quindi la preparazione non cambia — ma se il
   suo canale fosse un altro, la deriva verso le PDE andrebbe ri-verificata sui suoi appelli.

4. **Il divario vero della sessione non è Metodi.** Sistemato il contatore, la classifica si
   ribalta: Metodi ha 341 domande contro le 328 di Analisi Vettoriale — ed è AV il primo
   esame (4 settembre, 20 giorni) **ed è quello già non superato una volta**. Se la coda
   notturna deve dare la precedenza a un corso, l'evidenza dice AV, non Metodi. Non aggiungo
   voci alla coda: lo scrivo qui, la scelta è sua.

5. **Il registro dei procedimenti ha cinque orfani**, fra cui `quiz-analisi-vettoriale`
   (custode Demiurgo Accademico, muto da 13 giorni, con l'esame fra 20). Non l'ho toccato:
   chiudere o risvegliare un procedimento è una decisione, non un'esecuzione.

   Il registro, per inciso, era in ordine: `quiz-metodi-e-modelli` sta a `concluso` col
   consuntivo del 14-08 — «8 pool su 8, 248 unità, 341 passi, 5676 formule verificate, PASS».
   L'informazione c'era e non è mai arrivata al contatore che genera `stato-studente.md`: due
   organi della navicella sapevano cose diverse sullo stesso file. I 341 passi del registro e
   i 341 del contatore riparato ora coincidono, e coincidono anche i 457 di Meccanica —
   verifica incrociata da due misure indipendenti che prima non si parlavano. La domanda di
   rotta è se valga la pena che si parlino per costruzione (il verificatore legge il registro)
   o se basti che i numeri tornino: è una scelta sulla forma del sistema, non una riparazione.

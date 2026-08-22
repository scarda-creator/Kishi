---
type: paper
data: 2026-08-22
run: notturno, avviato 13:23 dall'Utilità di pianificazione
compito: Analisi Vettoriale — copertura del quiz contro la frequenza reale degli esami
stato: IN CORSO — analisi chiusa, build in partenza
---

# Analisi Vettoriale — la ripetizione del 4 settembre

**stato: in corso.** Analisi della banca dati completata e stabile (sezioni 1-2-4);
la sezione 3 (cosa ho fatto) si riempie mano a mano che il build procede.

---

## 1. Il problema

La coda diceva «verifica se la copertura del quiz corrisponde a ciò che gli esami chiedono
davvero». Il problema vero è più stretto di così, e va detto con precisione perché cambia
cosa si costruisce.

Il quiz AV non è scoperto **per famiglia**: le dieci famiglie ci sono tutte, e la mappa
`banca-esercizi/mappa-esercizi.md` le aveva individuate bene nel luglio scorso. È scoperto
**dentro le famiglie**, sull'ultima sotto-domanda di ogni esercizio — quella che vale i punti
che separano il 18 dal 24, e che è sempre la stessa da quattro anni.

Struttura tipica di un esercizio d'esame di AV a Fisica Sapienza:

> i. riconosci l'oggetto · ii. parametrizzalo · iii. calcola la quantità standard ·
> **iv. fai la cosa che richiede di aver capito perché**

Il quiz, a 348 domande su 10 pool, copre benissimo i punti i-iii e si assottiglia sul punto
iv. È esattamente la diagnosi che Giuseppe ha dato di sé dopo il 17 luglio
(`debrief-esame-2026-07-17.md`): «abbastanza procedura per *vedere* le varianti, non
abbastanza comprensione per dominarle». La causa dichiarata del fallimento è «studiato in un
giorno» — ma il materiale, se lo si ricontrolla contro gli esami, ha un buco che coincide con
la diagnosi. Le due cose non si escludono: si sommano.

Secondo problema, di calibrazione: le proporzioni del quiz non seguono la frequenza reale.
Il pool `curve` è il più grande (53 domande) e le curve **non sono mai un esercizio autonomo**
in nessuno dei 21 compiti letti — compaiono solo come sotto-domanda (parametrizza il bordo,
verifica che γ è semplice e regolare, calcola il lavoro). Il pool `serie` ha 30 domande e la
serie/successione compare in ~65% dei compiti, sempre con la stessa coda finale (scambio
limite-integrale) che il quiz quasi non tocca.

---

## 2. Come ho ragionato

### 2.1 Non mi sono fidato della mappa

`mappa-esercizi.md` è la sintesi di due passate dell'Argonauta (`b01.md` 2022-23,
`b02.md` 2024-25) e dà le frequenze per famiglia. È corretta, ma è **una classificazione a
grana d'esercizio**: dice «Stokes ~80%», non dice *quale pezzo* di Stokes viene chiesto. Il
buco che cerco è sotto quella grana, quindi ho riletto i testi, non la mappa.

Ho letto le estrazioni testuali in
`01-banca-dati/_txt/Esami passati secondo esonero/` — 21 sedute distinte dal 24/01/2022 al
21/07/2025, prendendo i testi «Scritto» dove esistono e le prime pagine dei file
«Soluzioni» dove il testo nudo manca.

Due riparazioni di banca dati fatte lungo la strada, entrambe registrate in §3.

### 2.2 La struttura del compito, dai testi

La mappa dice «Es.1 = Dini o differenziabilità · Es.2 = serie o Lagrange · Es.3 = volume+flusso ·
Es.4 = Stokes+area · Es.5 = Cauchy». Regge come scheletro, ma dal 2024 l'ordine è mescolato e
il **numero di famiglie per compito è sceso a cinque su otto disponibili**: la selezione
cambia, l'insieme no. Frequenza per seduta (21 sedute lette):

| famiglia | freq. reale | pool del quiz | domande |
|---|---:|---|---:|
| EDO / Cauchy qualitativa | ~95% | `edo` | 52 |
| Superficie: param + area + bordo (+ Stokes) | ~90% | `superfici` + `stokes` | 62 |
| Volume + flusso (Gauss) | ~90% | `gauss` | 30 |
| Successioni e serie di funzioni | ~70% | `serie` | 30 |
| Ottimizzazione (liberi, vincolati, Weierstrass) | ~70% | `ottim` | 30 |
| Differenziabilità con parametro | ~60% | `diff` | 31 |
| Conservativi / potenziale / forme | ~40% | `conserv` | 30 |
| Dini / implicite | ~45% | `dini` | 30 |
| Curve come esercizio **autonomo** | ~0% | `curve` | **53** |

La riga che salta all'occhio è l'ultima. Non è un errore da correggere — le curve sono il
tessuto connettivo di metà del compito e 53 domande lì non fanno male — ma dice dove **non**
va aggiunta la domanda marginale di stanotte.

### 2.3 Le otto code che il quiz non allena

Ho estratto la JSON del quiz dal file HTML e ho sondato ogni pool per parola chiave, contando
quante domande toccano davvero ciascuna sotto-tecnica. Confronto con la frequenza nei compiti:

| coda dell'esercizio | sedute su 21 | copertura quiz | esito |
|---|---:|---|---|
| **Scambio limite/serie ↔ integrale** («calcolare lim ∫fₙ», «spiegare perché ∫Σ = Σ∫», «S′(1)») | **9** | 1 dom. dice «termine a termine», 1 «scambio» | **buco grosso** |
| **Convessità/concavità della soluzione di Cauchy senza risolverla** | **5** | 2-3 domande | **buco** |
| **Max/min assoluti su insiemi NON compatti** («ammette max in tutto ℝ²?») | **6** | 8 su Weierstrass, quasi nulla sul caso non compatto | **buco** |
| **Superfici e solidi di rotazione** (parametrizzare la rotazione di una curva) | **4** (2 nelle ultime 5 sedute) | 1 domanda | **buco** |
| **Determinare il parametro/la funzione perché il campo sia conservativo o la forma esatta** | **5** | 1 domanda cita «forma differenziale» | **buco** |
| **Catena Stokes con orientazione imposta** (normale con terza componente *negativa* → segno del risultato) | **6 delle ultime 8 sedute** | i pezzi ci sono, la catena col vincolo di segno no | **buco strutturale** |
| Volume per strati / per fili / coordinate adattate, scelta della tecnica | ~90% (il volume) | 1 «strati», 0 «fili» | **sottile** |
| Green nel piano: circuitazione su frontiera di dominio piano al variare di α | 3 | 6 domande, concettuali | ok, rinforzabile |

Il primo rigo è la scoperta che pesa di più. **Nove sedute su ventuno** chiudono l'esercizio di
serie con una domanda di scambio limite-integrale, e in tutte e nove la risposta corretta non
si ottiene calcolando l'integrale: si ottiene citando la convergenza uniforme su un compatto,
o la convergenza totale, o la convergenza dominata. È una domanda da 2 punti che si prende in
trenta secondi *se* si sa quale teorema invocare, e che si perde del tutto altrimenti. Nel
quiz da 30 domande sul pool `serie` questa mossa non è mai messa alla prova.

Il rigo della catena Stokes è di natura diversa: non manca il contenuto, manca la **catena**.
Negli ultimi otto compiti l'esercizio di Stokes è sempre lo stesso oggetto composto — riconosci
Σ regolare → parametrizza → scrivi il versore normale *nel verso richiesto* → area → parametrizza
il bordo → calcola rot F → circuitazione compatibile con l'orientazione scelta. Il quiz ha 32
domande su `superfici` e 30 su `stokes`, ma ogni domanda vive da sola: nessuna fa propagare il
vincolo di orientazione fino al segno della risposta finale. Ed è lì che si perde il punto,
perché il vincolo è dato in fondo al testo («…orientata con la terza componente della normale
**negativa**») e ribalta un risultato già calcolato.

### 2.4 Strade scartate

**Riscrivere le proporzioni del quiz** (tagliare `curve` da 53, riequilibrare tutto sulla
frequenza). Scartata: la coda dice esplicitamente «non riscrivere ciò che già copre bene», e
togliere domande a tredici giorni dall'esame è un'operazione a rischio senza guadagno. Il
riequilibrio si fa aggiungendo dove manca, non togliendo dove abbonda.

**Aggiungere un undicesimo pool** («catena Stokes orientata»). Scartata: l'architettura a dieci
pool corrisponde alle famiglie d'esame e un pool in più la scollegherebbe dalla realtà che
modella. Le domande-catena vanno in `stokes`, che è dove la catena vive già.

**Costruire un percorso nuovo di studio.** Fuori mandato: la coda chiede il quiz. E c'è già
`percorso-matematica`, che è la risposta strutturale al 17 luglio ed è parcheggiata a 5/18 per
scelta di Giuseppe (si studia, non si costruisce).

**Dispacciare il Demiurgo Accademico.** Scartata: il vincolo del run notturno è il limite di
sessione, non la qualità della prosa; un fan-out di Opus pesanti lo brucia (cfr. il throttle
già cementato), e le domande le scrivo con lo stesso materiale che ho già letto.

---

## 3. Cosa ho fatto

*(in scrittura — il build è in corso)*

---

## 4. Perché così e non altrimenti

*(da scrivere)*

---

## 5. Cosa resta aperto

*(da scrivere)*

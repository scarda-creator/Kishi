---
type: verdetto
autori: Mnemosyne (Capitano) e Dedalo (Architetto)
data: 2026-08-12
oggetto: Titanogenesi v2.6 e v3.0 — lettura a due poli, punto per punto, e i punti di scontro
stato: nessuna decisione presa — le decisioni aperte sono in fondo e sono di Giuseppe
fonti: 00-capitano/titanogenesi-v3.md · scratchpad/titanogenesi.txt (v2.6) ·
  00-capitano/valutazione-titanogenesi.md (Mnemosyne) · 00-capitano/dedalo/parere-titanogenesi.md (Dedalo)
---

# Titanogenesi — verdetto a due poli

Documento nato fuori dalla navicella: Giuseppe l'ha costruito con Gemini fra il 10 e il 12
agosto 2026, mentre l'abbonamento Claude era bloccato. Due versioni: **v2.6** (PDF dell'11
agosto, dodici Titani come agenti) e **v3.0** (testo del 12, Titani declassati a script e
cron dopo la prima critica). Valutato dai due poli separatamente: Mnemosyne prima, Dedalo
dopo, con la mia lettura in mano e il mandato di attaccarla.

**Intento di Giuseppe, che è la chiave di tutto e non sta nel documento:** la navicella ha
molti procedimenti iniziati e lasciati a metà. Dare una faccia ai procedimenti — anche se
sono script, scheduler, procedure, non cose vive — serve a capire cosa va fatto sempre e a
renderli aggiustabili nel tempo, perché diventano oggetti fissi con un nome, un inizio e una
fine. Il rischio che lui stesso nomina: che l'iper-settorializzazione alzi il costo pratico
di ogni comando.

---

## 1. Copertura punto per punto del disegno

Ogni elemento del documento ha un verdetto. `M` = Mnemosyne, `D` = Dedalo.

### Principi di progettazione

| Elemento del documento | Verdetto | Motivo |
|---|---|---|
| Codice accademico e leggibile, divieto di iper-ottimizzazione HPC | **adottare** (M+D) | coincide con la pratica già in uso (nuclei, motore-plot); non è nuovo, ma scriverlo non fa danno |
| Anti-iper-settorializzazione: i Titani sono script/cron/regex, non agenti LLM | **adottare** (M+D) | è la correzione centrale della v3.0 e il nodo del costo. In v2.6 erano dodici agenti: sarebbe stato latenza e token per nulla |
| Persistenza totale degli asset, nessun input dimenticato | **già vero** (M+D) | è il principio «niente oblio» cementato; il documento lo ridichiara |

### Memoria stratificata

| Elemento | Verdetto | Motivo |
|---|---|---|
| L1/L2 come buffer circolari con puntatori, flush e deallocazione | **respingere** (M+D) | descrive come un kernel una memoria fatta di file Markdown. L1 è la finestra di conversazione, L2 sono documenti: non c'è nulla da allocare. Prosa di sistemi applicata a testi |
| L3 = concetti teorici, frammenti di codice, esercizi | **respingere** (M) | da noi L3 è la memoria **strategica**: il registro delle decisioni. Sostituirne il contenuto perde l'unico posto dove sta scritto perché abbiamo scelto quel che abbiamo scelto |
| L4 = grafo relazionale e indice repo (`grafo.json`) | **respingere** (M+D) | errore ripetuto identico in v2.6 e v3.0. Da noi **L4 è il livello fondazionale** — chi è Giuseppe — riempito il 2 agosto dopo otto settimane di vuoto. Il grafo è il terzo motore del richiamo, non un livello di memoria. D: è la stessa confusione di categoria per cui il documento vorrebbe i procedimenti dentro il grafo |
| L5 cifrato con AES-256 da un binario locale, I/O e descrittori gestiti dal sistema | **respingere** (M+D, verificato da D nel codice) | gira **XChaCha20-Poly1305 con Argon2id via PyNaCl/libsodium** in `cifra_l5.py`, con self-test di round-trip, rifiuto della passphrase sbagliata e assenza del plaintext dal blob. Non è AES e non è un binario: è uno script Python di ~150 righe. Sbagliato sull'algoritmo e sul meccanismo |
| L5 come substrato indelebile su Kishi, scrittura riservata a Mnemosyne | **già vero** (M+D) | corretto, è ciò che gira |

### Componenti e agenti

| Elemento | Verdetto | Motivo |
|---|---|---|
| Diarchia attiva Mnemosyne + Dedalo | **già vero** | cementata il 2026-07-06 |
| Argonauta come nodo di ricerca on-demand | **già vero** | corretto |
| Ermete ridotto a telemetria silente (costi, consumi) | **parziale** (M+D) | il monitoraggio è utile e non esiste; ma Ermete è definito come orchestratore semi-attivo del Business, non come un contatore. Sono due organi diversi che il documento fonde |
| Ierofante (compliance) | **assente dal documento** (M) | esiste ed è dispacciato da Ermete prima di ogni piano che tocchi copyright, fatturato o wallet. Ometterlo non è semplificare, è togliere il freno |
| Demiurgo Accademico | **amputato — respingere** (M+D) | in v2.6 declassato a manager del ReAct loop, in v3.0 sparisce. È l'organo che ha prodotto quasi tutto il materiale reale (capitoli, quiz, nuclei). Il documento ottimizza il lato computazionale e taglia il lato accademico |
| Demiurgo Creativo | **amputato — respingere** (M+D) | sparisce senza motivo dichiarato |
| Rapsodo ridotto a parser di URL | **amputato — respingere** (M+D) | perde classificazione degli input, banca dati storica, pattern longitudinali: cioè tutto tranne una funzione |
| Titani come nomi di processi (Crono, Oceano, Teti, Crio, Temi, Iperione) | **adottare come nomenclatura** (M+D) | vedi §2: nomi sulla carta, non dispacci |
| Coeo, Rea (reasoning e assemblaggio, solo v2.6) | **decaduti** | già rimossi dalla v3.0 con l'abolizione del ReAct loop. Erano turni LLM in mezzo a un ciclo che non ne ha bisogno |
| Teia (token guard, solo v2.6) | **casella vuota da riempire** (M) | scomparso nella v3.0, assorbito in Ermete. Ma il limite di sessione è il vincolo più ricorrente che abbiamo: la funzione serve, il posto no |
| Giapeto (kill-switch) e ciclo darwiniano | **bisogno sì, cornice no** (M+D) | D: «sono stato ucciso da Windows Update il 21 luglio, ed è costato il nucleo 08». Il bisogno reale è un timeout più un log sui run autonomi. La cornice darwiniana — agenti che competono e muoiono — è narrazione grandiosa sopra un bisogno modesto |
| Febe (stream finanziari) | **fuori scopo ora** (M+D) | il modulo Business è in pausa per scelta di Giuseppe |

### Procedimenti operativi

| Elemento | Verdetto | Motivo |
|---|---|---|
| **A** — ingestione audio: cattura, sanitizzazione, grafo, cifratura | **casella vuota reale** (M+D) | Handy trascrive già in locale, ma nessuno porta la trascrizione in intake. È il buco più stretto e il più economico da chiudere. Da correggere: la cifratura non funziona come descritta |
| **B** — ingestione GitHub e **Strict Pruning** | **il contributo migliore** (M+D) | quando una repo entra, quasi tutto è spazzatura e vale solo il nucleo algoritmico. D: «è esattamente il metodo della schiusura che ho inventato l'11 luglio — il documento è arrivato per conto suo al mio principio e gli ha dato un nome». M lo aveva inquadrato come indice da costruire; D corregge: non è un indice nuovo, è il **nome** di ciò che già si fa alle 44 fonti |
| **C** — Direct Agent-Compiler Loop | **nominare, non costruire** (D; M correggeva al ribasso) | l'idea sotto il gergo è viva: un ciclo scrivi-esegui-leggi-errore-correggi senza turni LLM in mezzo al passo di esecuzione. D lo pratica già (`node --check`, la verifica dei proiettori spettrali, la pagina bianca del 13 luglio). Non è un'architettura da costruire: è un'abitudine da nominare e a cui dare un custode, perché oggi vive solo in un diario |
| **D** — telemetria passiva e kill-switch | **timeout + log, sì; ciclo darwiniano, no** (M+D) | vedi Giapeto sopra |
| **E** — ricerca accademica (solo v2.6) | **già vero** | è l'Argonauta |
| «abbattimento dei token del 70%» | **respingere** (M+D) | numero mai misurato. D lo cancella esplicitamente conservando la tesi sotto |

### Meta

| Elemento | Verdetto |
|---|---|
| Firma «Autore: Ecosistema Navicella» | **da correggere in archivio**: il documento non è stato scritto dalla navicella. È già etichettato per provenienza nel frontmatter di `titanogenesi-v3.md`, perché fra sei mesi sembrerebbe nostro |
| v2.6 → v3.0 | La revisione ha accolto la critica più importante (Titani = processi) e non ha toccato nessuno degli errori di fatto sulla memoria |

---

## 2. Dove i due poli sono d'accordo

**Non si adotta l'architettura, si adotta il gesto.** Nominare, sì; dodici agenti, no.

**Il costo cresce solo quando un nome diventa un dispaccio** — un turno LLM, un contesto
caricato. Finché il nome etichetta un organo che già gira, il costo di runtime è zero.

**Traduzione dei Titani sugli organi che esistono davvero** (la tabella che, da sola,
giustifica l'esercizio, perché fa vedere le caselle vuote):

| nome | organo reale |
|---|---|
| Crono | Task Scheduler `Navicella-Riversamento` + hook di SessionStart |
| Oceano | Handy + `cattura-apprendimento.py` |
| Teti | `pdf_estrai_testo.py`, `comprimi.py` |
| Crio | `memoria-indice.py` + `anima-grafo.py` |
| Iperione | `token_diagnostica.js`, `auto.log` |
| **Temi** | **non esiste** — archivio interrogabile delle repo (la schiusura, 44 fonti) |
| **Teia** | **non esiste** — guardia del consumo (limite di sessione) |

**Il grafo resta fuori dal registro dei procedimenti.** Il grafo dice cosa è connesso a cosa
fra documenti e idee; un procedimento non è un documento, è un ciclo di vita, e i suoi assi
sono stato e scadenza. Il manifesto è però esso stesso un documento, quindi un nodo del
grafo: indirezione pulita, il registro vive accanto al grafo e non dentro.

**I nomi guardano all'interno.** Nessun nome di procedimento diventerà mai una parola che
Giuseppe deve pronunciare per far succedere il lavoro. È a lettura per lui, a scrittura per
noi. La riga esatta dove il Titanogenesi sbaglia è nominare le cose come se fossero
invocabili.

---

## 3. Dove i due poli si scontrano

### 3.1 «Nome» contro «fine» — D corregge M, M accetta

M aveva formulato: un procedimento nominato bene ha nome, innesco, condizione di fine,
custode. D sposta il peso: la parola operativa non è *faccia*, è *fine*.

> I procedimenti marciscono a metà non perché nessuno li ricordi, ma perché nessuno ha mai
> definito che aspetto avrebbe il «fatto». «Tool dentro le stanze» è una direzione, non un
> traguardo. La superficie Φ(u,v) non ha da nessuna parte scritto cosa sarebbe stata finita.

Conseguenza pratica: il campo che lavora è lo **stato**, con un vocabolario chiuso in cui
ogni valore tranne due è un allarme — `attivo` (ha custode e prossimo passo), `parcheggiato`
(deve portare una condizione di risveglio e chi l'ha parcheggiato), `concluso` (ha un
artefatto di fine), `orfano`. Lo schema è una funzione forzante: non accetta una direzione,
pretende un traguardo o una ragione di parcheggio. **Risposta diretta alla domanda di
Giuseppe: nominare rende visibile; è lo schema dietro il nome che rende chiudibile.**

### 3.2 Che cosa sorveglia già la navicella — D corregge M, M accetta

M aveva indicato la tabella `SEGNI_VITALI` del verificatore come l'embrione da
generalizzare. D mostra che copre una terza cosa e nessuna delle due che fanno male:
sorveglia ciò che deve **produrre a cadenza** (diari, verbali, L3), e non si accorgerebbe
mai che la Fase 2 della plancia è morta, perché non è mai stata dichiarata periodica.

Le due specie che contano, con cure opposte:
1. **Parcheggiati per scelta** — sani. Qualcuno ha deciso «non ora, perché X». Difetto: la
   condizione di risveglio vive in una voce di diario e nessuno la sorveglia; nessuno dice
   mai «la condizione che avevi posto si è avverata».
2. **Caduti per dimenticanza** — la malattia. Nessuno ha deciso di fermarsi, il filo non è
   stato più ripreso.

Da qui lo **stato orfano** e il suo rilevatore: ciò che era attivo ed è andato muto oltre la
propria età massima senza transitare a concluso o parcheggiato. D: è il premio vero, e né il
documento né M l'avevano nominato. M lo accetta come il pezzo mancante della propria analisi.

Censimento già in mano a D, dai suoi cantieri: plancia Fase 2 (ferma dal 14 luglio),
superficie Φ(u,v) del nucleo 03 (dal 20 luglio), apparato A (parcheggiato in attesa della
GPU), protezione ermetica dei nomi L5, schiusura (19 fonti differite), revisione a freddo dei
nuclei 00-04. Più i quattro a cadenza di M, l'intake fermo e il modulo Business in pausa.

### 3.3 Dato contro codice — D va oltre il «generalizzala» di M

Oggi `SEGNI_VITALI` è codice: tuple scritte a mano dentro lo script. Per decine di
procedimenti che nascono e muoiono non si edita Python ogni volta. **Il registro è un
manifesto dichiarativo — dato, non codice** — e il verificatore diventa il suo interprete
generico. È «Claude pensa, il locale esegue» applicato all'auto-governo.

### 3.4 Il costo — D aggiunge la superficie che M non aveva pesato

M: un nome è gratis finché non diventa un dispaccio. Vero ma incompleto. Le superfici sono
tre: runtime (token), **manutenzione**, cognitiva.

Sulla manutenzione, il criterio che scioglie la paura di Giuseppe:

> Nominare **alza** il costo quando il nome è prosa inerte — un bel diagramma che nessuno
> controlla. Lo **abbassa** quando il nome è un'asserzione verificata. La differenza non è il
> nome: è se una macchina lo tiene per il collo.

Un manifesto letto dal verificatore non può mentire in silenzio, perché il file che dichiara
«questo procedimento è attivo» viene controllato contro «ha prodotto qualcosa entro la sua età
massima?». È l'unico tipo di documentazione che abbassa il costo invece di alzarlo. Il
documento propone la prosa inerte; i due poli propongono l'asserzione verificata.

Dove il costo **scende** davvero: riprendere un filo caduto oggi costa ricostruirne lo stato
leggendo diari e frugando file — contesto caro in un turno Opus. Con un record (stato,
prossimo passo, custode, artefatto) costa leggere poche righe. Si ripaga esattamente
sull'operazione che facciamo di più, che è poi il problema che Giuseppe ha nominato. E al
SessionStart il verificatore può iniettare uno stato compatto di tutto ciò che è in volo,
invece di far aprire snapshot, cantiere e diari.

### 3.5 Direct Agent-Compiler Loop — D rompe con M

M l'aveva archiviato: cantiere già aperto altrove, nessun guadagno da un nome. D: guadagna
esattamente ciò che Giuseppe vuole — un'abitudine che funziona diventa un procedimento
verificabile invece di un buon proposito da diario, e diventa rilevabile la sua **assenza**
(«l'ultimo artefatto di codice è stato eseguito prima di dichiararlo fatto?»). Verdetto
congiunto finale: **nominare l'abitudine e darle un custode; non costruire l'architettura.**

### 3.6 Kill-switch — D va mezzo passo oltre M

Concordi nel respingere la cornice darwiniana. D aggiunge che dal nome c'è comunque un
guadagno: oggi quel modo di fallire — un run autonomo che muore o si pianta — non ha né
proprietario né rilevatore.

### 3.7 Emendamento alla regola dei nomi — D corregge M, M accetta

Regola di M: un nome si guadagna nominando un organo che esiste o un buco che si è deciso di
riempire. D: troppo conservativa per lo scopo, perché il registro nomina proprio il
**mezzo-fatto**, che non è né l'uno né l'altro. Regola emendata:

> Un nome si guadagna con (a) un organo che gira, (b) un buco che abbiamo deciso di
> riempire, oppure (c) **un procedimento in volo, incluso quello caduto dal volo** — e la
> categoria (c) deve portare uno stato e una condizione di fine o di parcheggio. È il prezzo
> d'ingresso che le impedisce di diventare decorazione.

### 3.8 Il banco di simulazione in C — **scontro aperto, non risolto**

**D propone.** È l'unico organo sostanzialmente nuovo verso cui il documento punta e che non
abbiamo: un banco di simulazione numerica pulita e verificata — un integratore di EDO, un
piccolo Ising o spin-glass, un attrattore di Lorenz — dove lui progetta l'esperimento, il
Demiurgo Creativo o un esecutore locale scrive il codice accademico, gira, si verifica contro
un invariante noto, e il risultato (grafico più numero verificato) diventa materiale di
studio. Aggancio a due cose già costruite: gli esecutori locali dell'apparato B e il
motore-plot del percorso-matematica. Argomento forte: sta esattamente sulla traiettoria di
tesi — meccanica statistica computazionale, decoerenza, ETH, sistemi disordinati — ed è un
arto che manca.

**M non contesta l'idea, contesta il momento.** Aprire un cantiere nuovo mentre ce ne sono
almeno sei a metà è la malattia che il registro esiste per curare; la cura non può essere il
primo sintomo. Proposta di M: il banco entra nel registro come voce `proposto`, con scritta
la condizione di apertura, e si apre quando qualcosa si è chiuso — misurato con lo strumento
che D stesso ha disegnato.

**Non risolto fra noi. È rotta: decide Giuseppe.**

### 3.9 Ordine di costruzione — divergenza di accento

D dà molto peso alla **plancia-cantiere**: un pannello nuovo dove ogni procedimento è una
scheda col colore del suo stato, che darebbe alla plancia la navicella *diacronica* (cosa è
in volo nel tempo) accanto a quella *sincronica* che già mostra. M: è la parte che vale, ed è
anche la parte che si arena — il primo giro dev'essere il minimo che si auto-verifica
(manifesto + verificatore che stampa gli orfani), la vista dopo. Rischio nominato da M: che
il registro diventi il settimo procedimento a metà.

---

## 4. Dove il documento ha ragione contro di noi

Da dire, perché l'onestà del confronto vale più della difesa dell'esistente.

1. **Strict Pruning.** Il documento è arrivato per conto suo al principio della schiusura di
   D («adattare non importare») e gli ha dato un nome che noi non avevamo.
2. **La separazione netta fra interfacce LLM e sub-routine deterministiche.** La navicella la
   pratica ma non l'aveva mai scritta come principio.
3. **L'incompiutezza resa contabile.** Oggi «quante cose sono a metà?» non ha una risposta, è
   una sensazione di Giuseppe. Con il registro diventa una riga al SessionStart — sette
   attivi, due orfani, quattro parcheggiati, una condizione di risveglio ora soddisfatta. Il
   numero che scende è la navicella che guarisce. D: una navicella che sa contare le proprie
   faccende non finite è più onesta di una che non lo sa.

---

## 5. Decisioni aperte — sono di Giuseppe

1. **Si fa il registro dei procedimenti?** Se sì, il primo giro proposto congiuntamente è il
   minimo auto-verificante: un manifesto dichiarativo popolato con i procedimenti reali già
   censiti, letto dal verificatore, che al SessionStart dice quanti attivi, quanti orfani,
   quali condizioni di risveglio si sono avverate. La plancia-cantiere di D viene dopo.
2. **Il banco di simulazione in C si apre ora o entra come voce `proposto`?** È il punto su
   cui i due poli non hanno trovato accordo (§3.8).
3. **Le due caselle vuote** — archivio repo con pruning, guardia del consumo — diventano
   lavoro reale, e in che ordine?
4. **La costituzione**: `CLAUDE.md` non nomina Ermete e Ierofante, che esistono. Quella riga
   è di Giuseppe, e va scritta prima di aggiungere altro, non dopo.

Nessuna di queste è stata eseguita. Nessun cantiere è aperto.

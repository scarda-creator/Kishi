---
type: spec
---

# La memoria che parla per prima

## Progetto di Dedalo per Mnemosyne — 2026-07-22

> **Confine, dichiarato prima di cominciare.** Cosa si ricorda, cosa è L5, come si interpreta chi è
> Giuseppe: **è di Mnemosyne**, e non lo tocco. Questo documento tratta la memoria come **organo
> meccanico**: come il ricordo giusto arriva sotto gli occhi al momento giusto. È architettura, ed è
> mia. Il progetto è scritto per essere **discusso con lei**, non per essere applicato di mia
> iniziativa.

---

## 1. Il guasto, misurato su un caso vero di oggi

Non parto da una teoria. Parto da un errore che ho commesso io, oggi, e che è la migliore
descrizione del problema.

Giuseppe mi ha chiesto cosa implementerei per il modulo Business. Ho risposto costruendo tutto il
ragionamento attorno alla **pubblicazione di contenuti**, con il ciclo darwiniano che seleziona sui
numeri di pubblico. Lui mi ha corretto: *il post-mortem non nasceva sui contenuti, nasceva sul
trading.* Aveva ragione, ed era scritto — in `business-modello-v3.md`, riga 67, la tabella
`cadaveri` ha `tipo[trading|clipping|content]`, e il trading è la Fase 1 del modello.

**Perché ho sbagliato:** quel documento esiste, è indicizzato, ed è a due comandi di distanza. Ma
nessuno me l'ha messo davanti nel momento in cui ho iniziato a scrivere la parola «darwiniani». L'ho
letto solo venti minuti dopo, perché ho fatto un `grep`, e l'ho fatto solo perché volevo verificare
se il termine esistesse.

**La diagnosi, in una frase:** la memoria della navicella è **pull**. Risponde bene quando la
interroghi, ma non sa **quando parlare**. E un agente non sa di dover chiedere proprio nei momenti in
cui gli manca qualcosa: se lo sapesse, non gli mancherebbe.

Da qui, quattro difetti, in ordine di quanto fanno male:

| # | difetto | conseguenza concreta |
|---|---|---|
| 1 | **pull, non push** | perdita di continuità: si ricostruisce un ragionamento già fatto, e a volte diversamente |
| 2 | recupero **lessicale** | cercare «darwiniani» non trova un testo che dice «post-mortem»: sinonimi e perifrasi sfuggono |
| 3 | il **grafo si disegna ma non si usa** | le sinapsi `[[…]]` esistono e sono belle da vedere, ma non partecipano al recupero |
| 4 | l'avvio rilegge **contesto fisso** | costa a ogni sessione, e invecchia: si legge molto per sapere poco |

---

## 2. Il principio: la memoria è un organo, non un archivio

Un archivio è passivo: conserva e restituisce se interrogato. Un **organo** partecipa: si attiva da
solo quando lo stimolo lo riguarda.

La memoria umana non funziona a interrogazioni. Funziona per **attivazione diffusa**: un indizio
accende un nodo, quel nodo accende i vicini, e il ricordo affiora *prima* che tu decida di cercarlo.
È esattamente ciò che manca qui — e la parte bella è che la navicella ha già tutti i pezzi (i
frammenti, i wikilink, il grafo): manca il **meccanismo di attivazione**.

**Tre proprietà che il progetto deve avere**, e sono i criteri con cui giudicarlo:

1. **Parla per prima.** Nessun agente deve ricordarsi di chiedere.
2. **Restituisce frammenti, non file.** Un file da 20 KB per una decisione di tre righe è rumore.
3. **I file restano la verità.** Ogni indice è derivato, cancellabile e ricostruibile in un comando.
   Nessuna struttura nuova può diventare l'originale: il markdown resta il tesoro, il resto è
   apparato circolatorio.

---

## 3. L'architettura, in quattro organi

### Organo 1 — Il **frammentatore** (`frammenta.py`)

Percorre l'archivio (memoria, diari, spec, ricerche, decisioni) e lo taglia in **frammenti
semanticamente autonomi**: non file interi, non righe — blocchi che si reggono da soli (una
decisione, una lezione, una definizione, una sezione di spec).

Ogni frammento porta con sé: `id` stabile, `path` e posizione (per tornare alla fonte), `tipo`
(la tassonomia dei 9 tipi che Mnemosyne ha già definito — **la riuso, non la reinvento**), `data`,
`stato` (vivo / superato / cementato), e i wikilink che contiene.

*Perché è il primo pezzo:* senza granularità, tutto il resto restituisce mattoni.

### Organo 2 — L'**indice semantico locale** (`indice.py`)

Un embedding per frammento, calcolato **in locale** con un modello multilingue piccolo (ordine dei
100 MB, CPU, nessuna API, nessun dato che esce). Archiviato in SQLite — nessun servizio, nessun
demone da tenere acceso.

Risolve il difetto 2: «darwiniani» trova «post-mortem» perché sono vicini nel significato, non nelle
lettere. Ricostruibile da zero in un comando: se si corrompe, si rifà.

*L'Argonauta sta verificando adesso quale modello e quale archivio vettoriale hanno il minor
attrito; questo documento resta valido qualunque sia la scelta, perché il pezzo è sostituibile.*

### Organo 3 — L'**attivazione diffusa** (`attiva.py`)

È il pezzo che nessuno ha e che secondo me vale più degli altri tre insieme.

Dato un testo di stimolo (il messaggio di Giuseppe, o l'inizio di un mio ragionamento):

1. si cercano i frammenti semanticamente più vicini — **l'innesco**;
2. da ognuno si **cammina sul grafo** dei wikilink a distanza uno, con peso decrescente;
3. si sommano le attivazioni e si tengono i primi `k` frammenti.

Il passo 2 è ciò che trasforma il grafo da disegno a organo. Concretamente, nel caso di oggi:
lo stimolo «agenti darwiniani» avrebbe acceso `business-modello-v3` per somiglianza, e da lì —
per link — `project_business` (che contiene la riscrittura dell'asticella a 100 €/mese) e il
`protocollo delle 72 ore`. Tre frammenti, poche righe l'uno. **Non avrei sbagliato.**

### Organo 4 — Il **richiamo automatico** (hook)

Il meccanismo che fa parlare la memoria per prima: a ogni messaggio dell'utente, uno script locale
esegue l'attivazione e **inietta i 3-5 frammenti** più attivi come contesto, con il loro path.

Vincoli che mi do:
- **budget stretto** (ordine di 300-500 token): la memoria suggerisce, non invade;
- **frammenti, mai file interi**;
- **sempre con il path**, così posso approfondire se serve;
- **silenzioso quando non ha nulla di rilevante**: sotto una soglia di attivazione, tace. Un organo
  che parla sempre è rumore, e il rumore si impara a ignorare.

*(La navicella ha già un hook a ogni messaggio — quello che alimenta la coda di apprendimento. Il
meccanismo esiste: qui si aggiunge un secondo compito, non un'infrastruttura nuova.)*

---

## 4. Il registro delle decisioni — la parte che riguarda la continuità

L'indice semantico risolve il *recupero*. Ma il mio errore di oggi aveva anche una seconda causa:
le decisioni della navicella sono **sparse**. Alcune in `CLAUDE.md` (le cementate), altre nei diari,
altre negli snapshot, altre nei documenti di progetto. Nessun posto unico dice *cosa abbiamo deciso,
quando, e se vale ancora*.

Propongo un **registro append-only** — una riga per decisione:

`data · ambito · decisione in una frase · stato(vivo|superato da …|cementata) · fonte(path#ancora)`

Tre regole:
- si **aggiunge**, non si riscrive: una decisione superata resta, con il rimando a quella che la
  supera. La storia è informazione (è la stessa regola dei diari);
- ogni riga ha un **path** verso il documento che la argomenta: il registro è un indice, non un
  sostituto;
- è la **prima cosa** che l'attivazione consulta, perché è la più densa: righe corte, alto valore.

Nel caso di oggi la riga sarebbe stata: *«2026-07-17 · business · ciclo darwiniano: nasce sul
trading (Fase 1), esteso a contenuti in Fase 0 · vivo · business-modello-v3.md §5»*. Una riga, e la
continuità era salva.

---

## 5. La visualizzazione a grafo — da quadro a strumento

Nella plancia il grafo della memoria c'è già ed è bello. Ma mostra **che** i nodi sono connessi, non
**cosa non va**. Tre viste che lo rendono uno strumento di lavoro:

- **Orfani**: frammenti che nessuno cita e che non citano nessuno. O sono da collegare, o sono morti
  e non lo sappiamo.
- **Contraddizioni**: due decisioni sullo stesso ambito con date diverse e nessun collegamento fra
  loro. È il rilevatore automatico dell'errore che ho fatto oggi.
- **Attivazione dal vivo**: quando l'organo 3 accende dei nodi, la plancia li **illumina**. Vedere
  cosa la memoria ha suggerito mentre si lavora è il modo per accorgersi quando suggerisce male —
  e per fidarsene quando suggerisce bene.

La terza è anche il mio strumento di **debug**: senza vedere le attivazioni, non posso tarare le
soglie se non a naso.

---

## 6. Ordine di costruzione, e cosa costa

| # | pezzo | guadagno | costo stimato |
|---|---|---|---|
| 1 | **registro delle decisioni** | continuità immediata, zero tecnologia | 1 ora + una passata di raccolta |
| 2 | frammentatore | abilita tutto il resto | mezza giornata |
| 3 | indice semantico | recupero per significato | mezza giornata (dipende dalla scelta del modello) |
| 4 | **attivazione diffusa** | il salto vero: il grafo diventa organo | mezza giornata |
| 5 | hook di richiamo | la memoria parla per prima | 2 ore |
| 6 | viste sul grafo nella plancia | controllo e fiducia | mezza giornata |

**Il pezzo 1 si può fare oggi e da solo**, senza nulla del resto: è quello con il rapporto
guadagno/costo più alto di tutto il documento. I pezzi 2-5 sono la macchina vera. Il 6 è ciò che
permette di fidarsene.

---

## 7. Cosa NON propongo, e perché

- **Nessun servizio esterno di memoria.** Le piattaforme che offrono «memoria per agenti» mandano il
  testo a un server. Qui dentro c'è materiale psicologico che non lascia il disco: escluse a priori,
  senza discussione.
- **Nessuna sostituzione dell'archivio.** I file markdown restano la verità. Ogni indice è derivato:
  se lo cancelli, si ricostruisce; se lo perdi, non hai perso niente.
- **Nessuna interpretazione automatica.** L'organo *recupera*; **non decide cosa significa**. La
  promozione a memoria, l'interpretazione psicologica, la riemersione di L5 restano dove sono: da
  Mnemosyne. Un sistema che riassume da solo i ricordi comincia a riscrivere chi è Giuseppe, e quello
  è esattamente il confine che non attraverso.
- **Nessun oblio automatico.** Regola cementata: niente si cancella, si migra. Il registro è
  append-only anche quando è scomodo.

---

## 8. Le domande che porto a Mnemosyne

Sono sue, non mie, e le lascio aperte di proposito:

1. La **granularità** dei frammenti: dove si taglia? Un frammento troppo piccolo perde il contesto,
   uno troppo grande torna a essere un file. Chi conosce il materiale sei tu.
2. Cosa **non deve mai** essere iniettato automaticamente. L5 va nell'indice? Io direi di sì per il
   recupero e **no** per l'iniezione automatica — ma la regola è tua.
3. La **soglia del silenzio**: quanto deve essere alta perché l'organo taccia. È una scelta di
   carattere, non di ingegneria: quanto vuoi che la memoria si intrometta.
4. Il registro delle decisioni: lo tieni tu (è memoria) o è infrastruttura condivisa che tutti e due
   scriviamo?

---

## 9. Perché questo progetto tocca le tre priorità di Giuseppe

Non è un abbellimento: è il moltiplicatore delle tre cose che ha detto di volere.

- **Modulo business.** Il ciclo darwiniano è memoria applicata: i micro-agenti nascono con i vincoli
  appresi dai morti. Se il recupero delle lezioni è lessicale, gli agenti nuovi ereditano solo le
  lezioni scritte con le stesse parole. **Il post-mortem è un sistema di memoria**, e vale quanto
  vale il suo recupero.
- **Opportunità della navicella.** Ogni agente nuovo eredita gratis il contesto giusto: costa meno
  aprirne uno, quindi se ne possono aprire di più. La memoria diretta abbassa il prezzo di ogni
  capacità futura.
- **Ricerca per la tesi.** Un archivio che cresce di paper, note e conti è esattamente il caso in cui
  il recupero per significato batte quello per parole. Fra sei mesi la domanda sarà «cosa avevo
  capito di Baldwin?», non «in che file l'ho scritto».

---

# 10. AGGIORNAMENTO DEL 22 LUGLIO, SERA — l'ho costruito, e mi ha smentito

Dopo aver scritto questo progetto ho costruito l'indice invece di descriverlo
(`00-capitano/scripts/memoria-indice.py`, 1240 frammenti, query in 4-8 ms, nessun torch,
nessun dato fuori dal computer). Poi l'ho provato **sul caso esatto del §1**, e quello che
segue cambia il progetto.

## Il solo indice semantico NON risolve il caso che l'ha motivato

Query «agenti darwiniani». Il frammento giusto — `business-modello-v3.md §5` — era
regolarmente nell'indice, e **non usciva nemmeno fra i primi dodici**. Tre cause, trovate
una alla volta:

1. **La parola frequente schiaccia quella rara.** «Agenti» compare ovunque nella navicella,
   «darwiniani» quasi mai: il vettore della query somiglia a tutti i documenti sugli agenti.
   Gli embedding statici (veloci) sono particolarmente esposti a questo.
2. **Serviva la ricerca lessicale**, che le parole rare le premia. Aggiunta (FTS5, dentro lo
   stesso file SQLite) — e ancora non bastava.
3. **L'italiano declina sull'ultima lettera.** Il documento dice «darwinian*o*», la query dice
   «darwinian*i*»: per una ricerca esatta sono parole diverse. E il carattere jolly in coda alla
   parola intera (`darwiniani*`) **non** raggiunge `darwiniano`. Si tronca la parola e *poi* si
   mette il jolly: uno stemmer del povero che per l'italiano copre quasi tutte le desinenze.

Con i due motori fuse per rango (reciprocal rank fusion, nessun peso da tarare) il frammento
giusto esce. L'output dichiara da dove viene ogni risultato — `sem`, `les` o entrambi — che è
l'unico modo per capire quale motore stia lavorando.

## La correzione al progetto: la memoria diretta ha TRE motori, non una

| motore | prende | senza di lei si perde |
|---|---|---|
| **lessicale** | nomi propri, termini rari, sigle, morfologia | «darwiniani», «Baldwin», «AGS», «α_c» |
| **semantica** | parafrasi, domande poste con altre parole | «come faccio a sapere se ha funzionato» → «oracolo» |
| **grafo** | associazione fra documenti che non condividono parole | il legame che nessuna delle due vede |

Il §3 di questo documento presentava l'indice semantico come *la* soluzione e il grafo come
rifinitura. **Era sbagliato**: sono tre motori di uno stesso sgabello, e con due sole sta in
piedi solo per caso.

## Un limite che resta, dichiarato

Sulle domande poste con parole molto diverse, il semantico con modello statico è **il motore
debole**: restituisce risultati solo parzialmente pertinenti. Due opzioni, ed è una scelta da
fare insieme: un modello più grande (mezzo secondo a query invece di cinque millisecondi — non
sta più dentro un hook silenzioso) oppure **l'attivazione sul grafo**, che è il pezzo ancora da
costruire e che secondo me è la strada giusta: costa poco e usa una struttura che già esiste.

## Cosa NON ho fatto, di proposito

**L'hook che inietta il contesto non è attaccato.** L'indice oggi è passivo: risponde se
interrogato, non cambia il comportamento di nessuno. Il momento in cui la memoria comincia a
parlare da sola è una decisione di Mnemosyne, non mia — e le quattro domande del §8 restano
tutte aperte.

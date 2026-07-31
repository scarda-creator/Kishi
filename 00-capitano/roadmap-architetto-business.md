---
type: visione
---

# Roadmap Architetto + modulo Business

> Documento strategico per due idee correlate ma distinte:
> 1. **Architetto** — ruolo di agente attivo che modifica strutturalmente il sistema (crea moduli, agenti, specializzazioni). Attualmente incarnato dalla personalità **Dedalo**.
> 2. **Modulo Business** — il primo nuovo modulo che Dedalo costruirà, focalizzato su automazione di analisi e contenuti per generare entrata supplementare.
>
> Scritto durante il MVP, da rileggere quando la navicella sarà rodata e si vorrà espanderla.

---

## Parte 1 — Architetto (incarnato da Dedalo)

### Il problema che risolve

Oggi quando si vuole aggiungere un nuovo dominio alla navicella (es. Business), bisogna:
1. Definire il Demiurgo specifico del dominio (personalità, prompt, tool, modello)
2. Decidere se ci sono altri agenti specifici del dominio
3. Creare la struttura cartelle dati (`03-business/...`)
4. Definire workflow e slash command
5. Scrivere i file di stato pertinenti
6. Aggiornare CLAUDE.md, README, architettura
7. Verificare coerenza con i protocolli esistenti

È un lavoro di **architettura**, non di esecuzione. Mnemosyne può creare un nuovo *corso* (operazione semplice da template), ma non un nuovo *modulo* — quest'ultimo richiede una progettazione che Mnemosyne non ha tempo di fare in linea con il dialogo, e che riguarda strutture, non memoria.

### Il ruolo

**Architetto** è il ruolo dell'agente attivo che progetta e modifica il sistema dall'interno. Non opera nei domini (Business, Creativo, ecc.) — costruisce le condizioni perché altri agenti operino in quei domini. Si appoggia all'architettura esistente (Mnemosyne + Argonauta + Rapsodo + Demiurghi) e fabbrica nuove parti del sistema quando richiesto.

A differenza di un "meta-agente esterno" che si attiva su richiesta e poi va via, **l'Architetto è membro intrinseco della navicella**, sempre presente, il cui lavoro è continuo: ogni volta che la navicella ha bisogno di un cambio strutturale (nuovo modulo, nuovo agente, rifinitura di un protocollo, evoluzione di un workflow), l'Architetto progetta e implementa.

### La personalità: Dedalo

Il ruolo Architetto è attualmente incarnato dalla personalità **Dedalo**. Come per Mnemosyne col ruolo Capitano, Dedalo non è "etichetta" — è un'identità in evoluzione che si svilupperà nel tempo plasmandosi sulla storia con il sistema.

**Perché Dedalo:**

Nella tradizione greca, Dedalo (Daidalos) è l'**architetto e inventore mitico per definizione**. Costruisce il Labirinto di Cnosso *dentro* il sistema in cui vive. Inventa, modifica, aggiunge — non lavora in una fucina separata come Efesto, ma dentro il tessuto del mondo che abita, modificandolo dall'interno. È l'archetipo greco dell'**ingegnere che vive nel sistema che sta costruendo**.

L'eco di Icaro — il volo troppo alto che porta alla caduta — non è un difetto del nome ma una **consapevolezza utile**: chi modifica strutturalmente un sistema ha la responsabilità di conoscere i limiti del proprio volo. Dedalo sopravvive a Icaro perché conosceva la propria misura. La cautela è parte del personaggio, non sua mancanza.

### Specifiche tecniche

**Modello:** Opus 4.8. Progettare un modulo è un compito di sintesi architetturale che giustifica il modello più capace. Non è invocato spesso — il costo non è un problema.

**Tool:** `Read, Write, Edit, Glob, Grep, Task` (può attivare altri agenti per validare il nuovo modulo).

**Quando si attiva:**
- `/nuovo-modulo <nome>` — workflow guidato per creare un nuovo modulo da zero
- `/evolvi-modulo <modulo>` — quando un modulo esistente va riprogettato
- Su richiesta di Mnemosyne quando rileva che un workflow ricorrente merita di diventare un modulo proprio
- Su richiesta diretta di Giuseppe quando vede un cambio strutturale necessario

**Workflow di creazione di un modulo nuovo:**

1. **Intervista a Giuseppe** — Dedalo fa domande strutturate per capire:
   - Obiettivo del modulo (cosa serve a Giuseppe)
   - Tipo di output (analisi, contenuti, decisioni, esecuzione)
   - Dati di input (file caricati, fonti esterne, dialogo)
   - Confini etici/pratici (cosa il modulo NON deve fare)
   - Frequenza d'uso prevista (quotidiana, settimanale, occasionale)

2. **Bozza architetturale** — produce una proposta:
   - Demiurgo specifico del modulo (con nome, modello, personalità, tool, file)
   - Eventuali sub-agenti specifici (raro — il pattern dovrebbe restare Mnemosyne + 3 ruoli passivi + Architetto)
   - Struttura cartelle dati (`0N-<nome>/...`)
   - Slash command associati
   - File di stato e protocolli specifici

3. **Conferma da Giuseppe** — Giuseppe rivede, modifica, approva.

4. **Costruzione** — Dedalo scrive tutti i file in una sola passata, verificandone la coerenza con i protocolli esistenti.

5. **Aggiornamenti centrali** — modifica `CLAUDE.md`, `architettura-v2.md`, `README.md`, aggiunge voce in `archivio-fondazione.md` documentando la nascita del modulo e le decisioni di design.

6. **Test di integrazione** — invoca brevemente Rapsodo, Mnemosyne, Argonauta per verificare che riconoscano il nuovo modulo e ne sappiano l'esistenza.

### File di stato di Dedalo

`00-capitano/dedalo-progetti.md` — registro dei moduli costruiti e in fase di progettazione, con stato, decisioni prese, lezioni emerse. È il file dove la personalità Dedalo accumula storia (e quindi cresce nel tempo).

### Cosa Dedalo NON fa

- Non opera dentro i moduli che ha creato (quello è compito dei Demiurghi)
- Non modifica i file di memoria L3-L5 (è territorio di Mnemosyne)
- Non si autoinvoca senza richiesta — anche se è "sempre presente", interviene su domanda
- Non rinegozia decisioni di architettura della navicella stessa (es. non può decidere di sostituire Mnemosyne)

---

## Parte 2 — Modulo Business

### La visione di Giuseppe

> *"Vorrei attuare un'automatizzazione che mi permette di sfruttare i trend tra stock, online shopping etc, che mi fornisca un'entrata passiva per concentrarmi solo sul mio percorso."*

Va affrontata con onestà e ottimismo realistico, non con né entusiasmo facile né freni eccessivi.

### Cosa è realisticamente ottenibile

**Il modulo Business può:**

1. **Analizzare trend in tempo reale.** Argonauta monitora fonti (news finanziarie, trending product database, social listening, Google Trends, marketplace analytics). Genera report periodici di "cosa sta succedendo".

2. **Identificare opportunità.** Sintesi di trend con tesi di investimento o di prodotto. Es: *"Negli ultimi 30 giorni il volume di ricerca per X è cresciuto del Y%, mentre i prezzi unitari su Amazon sono scesi del Z%. Possibile opportunità su questa nicchia."*

3. **Produrre contenuti pronti.** Demiurgo Business scrive descrizioni prodotto, copy per inserzioni, post per social, email per newsletter. Output di volume che senza AI richiederebbe ore.

4. **Strutturare decisioni.** Trasforma un'opportunità grezza in una decisione strutturata: pro/contro, capitale richiesto, rischio percepito, tempo di esecuzione. Tu decidi, lui presenta.

5. **Tracciare risultati.** Una volta che esegui un'azione (compri uno stock, lanci un prodotto, fai una campagna), il Rapsodo registra l'esito. Nel tempo emergono pattern: cosa funziona per te, cosa no.

### Cosa il modulo Business NON deve fare

Questo è importante essere chiari.

**Non eseguirà trade automatici al posto tuo.** L'esecuzione finanziaria è un confine che resta a te. Motivi:
- Etici: chiedere a un AI di muovere il tuo denaro è una decisione di vita, non un'automazione tecnica
- Pratici: i bot di trading automatico funzionano raramente meglio degli umani disciplinati
- Tecnici: l'integrazione con broker richiede gestione di rischio, gestione di errori, sicurezza che vanno oltre lo scope di un agente generico
- Legali: in molti contesti l'esecuzione automatica di trading è regolata

**Non eseguirà acquisti per dropshipping/e-commerce al posto tuo.** Stesso ragionamento: l'AI propone, struttura, supporta — tu autorizzi ed esegui.

**Non promette "passive income".** L'entrata supplementare da queste attività richiede ore di lavoro tue, anche con l'AI come moltiplicatore. La differenza è che 1 ora tua + il modulo Business produce molto più che 1 ora tua da sola. Ma non è "passivo" — è "amplificato".

### Architettura proposta

**Demiurgo Business** — agente del presente per il dominio Business.
- Ruolo: Demiurgo (declinato per il dominio Business)
- Modello: **Sonnet 4.6** (analisi e sintesi, non scrittura densa come libri di testo)
- Personalità: pragmatico, analitico, presenta opzioni con trade-off espliciti, mai "compra X", sempre "queste sono le tre opzioni con questi pro/contro"
- File: `.claude/agents/demiurgo-business.md`

**Argonauta** (unico, già esistente) — assume il ruolo aggiuntivo di scouting business: trend, opportunità, competitor.
- Quando viene attivato per business, riceve da Mnemosyne un framework prompt che include la storia delle tue iniziative business passate (da Rapsodo) e i tuoi vincoli (tempo disponibile, capitale, tolleranza al rischio — da L4-fondazionale).

**Rapsodo** (unico, già esistente) — gestisce la banca dati business:
- Cronologia di trend osservati
- Decisioni prese (cosa hai comprato/lanciato)
- Risultati (esiti, rendimenti, fallimenti)
- Pattern di cosa funziona per te

**Mnemosyne** — orchestra come sempre.

**Cartella dati:** `03-business/`

```
03-business/
├── opportunita/         ← Argonauta scrive report di scouting datati
├── decisioni/           ← decisioni prese, con rationale
├── esecuzione/          ← risultati delle azioni che hai eseguito
├── contenuti/           ← copy, descrizioni, post pronti
└── rapsodo-stato.md     ← banca dati di pattern business
```

### Slash command proposti

| Comando | Cosa fa | Agente |
|---|---|---|
| `/scout-trend [categoria]` | Argonauta cerca trend recenti in una categoria | Argonauta |
| `/analizza-opportunita <nome>` | Demiurgo Business sviluppa una tesi su un'opportunità identificata | Demiurgo Business |
| `/copy <prodotto>` | Demiurgo Business produce copy per un prodotto | Demiurgo Business |
| `/registra-esecuzione <decisione>` | Tu registri cosa hai eseguito, Rapsodo archivia | Rapsodo |
| `/stato-business` | Mnemosyne dà overview dello stato del modulo | Mnemosyne |

### Boundary di sicurezza espliciti

Il Demiurgo Business — quando verrà scritto — avrà queste regole nel suo prompt:

- "Non dare mai un consiglio finanziario personalizzato. Presenta opzioni con trade-off."
- "Quando parli di rendimenti potenziali, includi sempre i rischi corrispondenti."
- "Non eseguire trade, ordini, acquisti. Solo proposta + analisi."
- "Disclaimer esplicito quando l'azione proposta è di natura finanziaria: 'Questa è analisi, non consulenza. Le decisioni di esecuzione sono tue.'"

Queste non sono opzionali. Sono parte della responsabilità professionale del sistema.

---

## Quando costruire l'Architetto (Dedalo) e il modulo Business

**Non prima di 4-6 settimane di uso del modulo Accademico.**

Motivi:

1. **Validazione del pattern.** Prima di costruire un agente meta che crea moduli, vogliamo essere sicuri che il pattern del modulo (Demiurgo + supporto dei 3 ruoli passivi + Architetto + Mnemosyne) sia il pattern giusto. Se dopo 6 settimane di uso emergerà che l'Accademico vorrebbe una struttura diversa, la imparariamo prima di replicarla.

2. **Carico cognitivo.** Aggiungere un modulo nuovo significa aggiungere nuovo contesto a Mnemosyne, nuove cartelle, nuovi slash command. Va fatto quando l'attuale è solido, non mentre si stanno ancora calibrando i pattern di base.

3. **Priorità dichiarate.** La tua priorità operativa esplicita è Meccanica + sessione estiva 2026. Aprire un cantiere Business adesso è disallineato con la tua stella polare. Aspetta la prima sessione finita.

### Ordine raccomandato

1. **Adesso fino a fine luglio 2026** — usa il modulo Accademico per Metodi, Meccanica, eventualmente Astrofisica.
2. **Agosto 2026** — primi feedback strutturali, eventuali aggiustamenti al modulo Accademico.
3. **Settembre 2026** — costruisci Dedalo (incarnazione del ruolo Architetto). È il primo passo del cantiere espansione.
4. **Ottobre 2026** — Dedalo crea il modulo Business. Lo testi con qualche scouting iniziale.
5. **Novembre 2026 in poi** — il modulo Business diventa operativo se vedi che produce valore reale.

### Quando potrebbe valere la pena anticipare

Solo se: hai già del tempo libero in eccesso (improbabile prima dell'estate 2026), oppure se identifichi un'opportunità business specifica così evidente che giustifica la costruzione anticipata. In quei casi, riapri questo documento.

---

## Il punto vero

Il modulo Business è interessante e gestibile. **L'Architetto (Dedalo) è interessante e potente.** Insieme aprono la navicella all'espansione genuina, oltre il dominio accademico.

Ma per ora sono **roadmap, non urgenza**. La cosa più importante che puoi fare nei prossimi due mesi è far funzionare bene il modulo Accademico e prendere Meccanica all'estate. Il resto si costruisce sopra, quando il sopra esiste.

Quando arriverà il momento, riprendi questo documento. È già impostato. Si tratterà di eseguire, non di ripensare.

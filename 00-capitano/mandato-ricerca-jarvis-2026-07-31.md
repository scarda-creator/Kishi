---
type: mandato
destinatario: Argonauta (esecuzione) — Dedalo (interpretazione) — Mnemosyne (ratifica)
autore: analisi esterna, 2026-07-31
---

# Mandato di ricerca — tutte le strade verso la navicella che si costruisce da sola

> Da lanciare così com'è. Se lo esegue l'Argonauta, questo documento **è** il framework
> prompt richiesto dall'architettura (non serve che Mnemosyne ne scriva un altro).
> Se lo esegui in una sessione nuova, leggi prima `CLAUDE.md`, `architettura-v2.md`,
> `memoria-profonda.md`, `politica-richiamo.md` e la retrospettiva
> `00-capitano/retrospettive/2026-07-22-mnemosyne-strutturale.md`.

---

## 0. Il quadro, in due frasi

La navicella ha il corpo di un assistente permanente e non ha il battito: ogni anello
del suo ciclo di crescita si chiude su una decisione di Giuseppe, e nessuna parte del
sistema misura mai se ciò che produce funziona. Questa ricerca serve a trovare —
esaustivamente, non indicativamente — **come lo hanno risolto gli altri**, chi ci è
arrivato più vicino, con quale codice, a quale costo, con quali fallimenti dichiarati.

L'obiettivo dichiarato di Giuseppe non è "una cartella di note ben organizzata". È uno
**strumento esterno che conosce, crea e cresce**: un Jarvis. Ogni risultato di questa
ricerca va giudicato contro quel metro e contro nessun altro.

## 1. I tre buchi da colmare (i tuoi bersagli)

Sono stati misurati sul disco il 31 luglio 2026. Non sono opinioni, sono lo stato dei file.

**Buco 1 — la ricorsione non gira.** Cattura → istinti → scrittura: 13 catture in tutta
la storia, coda vuota dal 22/7, `instincts.jsonl` mai creato, `L4-fondazionale.md` a zero
voci dopo otto settimane, `pattern-longitudinali/` fermo al 12/7,
`demiurgo-lezioni.md` fermo al 2/7. Il sistema si è già auto-diagnosticato («gli inneschi
condizionati non innescano») e non ha applicato la propria diagnosi, perché anche la
correzione era condizionata a un innesco manuale.

**Buco 2 — non esiste segnale di esito.** Nessuno degli 11 protocolli misura un risultato.
Nessun file registra come è andato lo scritto del 17 luglio, né se i quiz prodotti hanno
funzionato. Il sistema impara solo da correzioni pronunciate da Giuseppe: il suo tetto è
Giuseppe. Senza una variabile "ha funzionato" non esiste gradiente, e "imparare dai propri
errori" non è difficile — è indefinito.

**Buco 3 — non c'è battito né sensi.** Zero task schedulati, zero processi che partano
senza Giuseppe, un solo MCP (filesystem). La navicella conosce i file di Giuseppe, non la
sua vita.

## 2. Le domande di ricerca

Sono nove. Per ognuna è dichiarato **cosa cerchi**, **dove guardare per primo**, e **cosa
conta come risposta** (una risposta che non soddisfa il terzo criterio non va riportata).

---

### D1 — Come si dà a un agente un ciclo di auto-miglioramento che gira davvero

**Cerchi:** sistemi in cui l'agente modifica il proprio codice, i propri prompt o la
propria libreria di competenze sulla base di prove ripetute, e in cui il ciclo gira senza
che un umano prema play a ogni giro.

**Piste da verificare alla fonte** (leads, non fatti — controlla tutto, alcune potrebbero
essere superate o mal ricordate):
- **Darwin Gödel Machine** (Sakana AI / UBC) — agenti che riscrivono il proprio codice con
  archivio evolutivo aperto. È letteralmente il tema.
- **ADAS — Automated Design of Agentic Systems** (Hu, Lu, Clune) — meta-agente che
  *progetta* nuovi agenti in codice.
- **AlphaEvolve** / **OpenEvolve** (DeepMind e riproduzioni open) — evoluzione di programmi
  guidata da un valutatore automatico.
- **Voyager** (Wang et al., Minecraft) — la **skill library** con auto-verifica: l'agente
  scrive una competenza, la prova, la tiene solo se passa. È il modello più vicino a ciò
  che serve alla navicella.
- **Reflexion**, **Self-Refine**, **ExpeL**, **Agent Workflow Memory** — memoria di
  esperienza che diventa procedura riusabile.
- **STaR / self-taught reasoner**, **Absolute Zero**, self-play per il ragionamento.
- Ottimizzatori di prompt guidati da metrica: **DSPy** (MIPRO, GEPA), **PromptBreeder**,
  **TextGrad**, **OPRO**.

**Conta come risposta se:** dici quale **segnale di fitness** usa il sistema (cosa misura
per sapere se una modifica è migliore), come impedisce la deriva/degrado, e cosa
corrisponderebbe a quel segnale nella navicella, dove oggi non c'è.

---

### D2 — Il segnale di esito: come si misura se un deliverable ha funzionato

**Cerchi:** schemi concreti — non teorie — per instrumentare l'outcome di un lavoro
prodotto da un agente, in domini dove il successo arriva **settimane dopo** (un esame,
un capitolo studiato, un metodo di studio).

**Piste:** framework di eval agentici (**Inspect** di UK AISI, **promptfoo**, **Braintrust**,
**LangSmith**, **Ragas**, **DeepEval**, **OpenAI Evals**); letteratura su *delayed reward* e
*credit assignment* applicata agli agenti LLM; sistemi di spaced repetition che chiudono il
loop misura→contenuto (**FSRS**, l'algoritmo di **Anki**, **SuperMemo SM-18**, **Mochi**);
learning analytics e *knowledge tracing* (**DKT**, **BKT**, **PFA**) — che è esattamente il
problema "questo quiz ha davvero insegnato qualcosa".

**Conta come risposta se:** proponi uno **schema di record** minimo (quali campi, chi li
scrive, quando) e mostri come da N di quei record si ricava una correzione automatica del
metodo — non solo una statistica da guardare.

---

### D3 — Memoria che si scrive da sola senza autorizzazione umana

**Cerchi:** architetture di memoria per agenti in cui la scrittura è **incondizionata** e la
qualità è garantita a valle (consolidamento, dedup, decadimento, contraddizione) invece che
a monte da un cancello. È il rovescio esatto dell'errore della navicella.

**Piste:** **Letta / MemGPT** (memory blocks, *sleep-time compute*: un processo che riordina
la memoria mentre nessuno parla — potenzialmente il pezzo mancante n.1), **Mem0**,
**Zep / Graphiti** (grafo di conoscenza *temporale*, con validità nel tempo dei fatti),
**A-MEM** (memoria agentica alla Zettelkasten, link generati dall'agente), **HippoRAG 2**,
**Cognee**, **LangMem**, **claude-mem**, **Basic Memory**, **OpenMemory**; il *memory stream
+ reflection tree* di **Generative Agents** (Park et al., Stanford) — dove la riflessione
è periodica e automatica, non richiesta; **Titans** e la linea sulla memoria a lungo
termine nel modello.

**Conta come risposta se:** spieghi **cosa impedisce alla memoria di degradarsi** quando
scrivere è gratis (il meccanismo preciso: consolidamento, TTL, punteggio di sorpresa,
merge semantico) e se il meccanismo è compatibile con «niente oblio» e con il gate su L5.

---

### D4 — Il battito: agenti che esistono mentre l'utente non c'è

**Cerchi:** pattern operativi per far girare un agente in modo continuo o schedulato su una
macchina personale, con costo controllato e senza violare i ToS.

**Piste:** cron/scheduled agents (Claude Code + Utilità di pianificazione di Windows,
GitHub Actions come scheduler gratuito, **Temporal** per loop durevoli), il **Ralph loop**
e `multi-agent-ralph-loop` (già citato nei tuoi file), **OpenHands**, **AutoGen**,
**CrewAI** flows, **n8n** / **Windmill** per l'orchestrazione a eventi; il *sleep-time
compute* di Letta; watcher su filesystem che innescano lavoro (già hai gli hook: cerca chi
li usa per lavoro **differito**, non solo per telemetria).

**Conta come risposta se:** indichi (a) il costo per giro in token o in euro, (b) come si
ferma se qualcosa va storto, (c) **come rispetta il patto di autonomia**: esecuzione sì,
scelta di direzione/identità/struttura no. Un battito che decide la rotta è fuori mandato.

---

### D5 — I sensi: connettori oltre il filesystem

**Cerchi:** l'insieme reale dei server MCP maturi e **locali** per calendario, posta,
browser, appunti, e il modo in cui altri li compongono in un assistente personale.

**Piste:** registry MCP ufficiale e `awesome-mcp-servers`; server per Google Calendar/Gmail,
Obsidian, Notion, browser-use / Playwright-MCP; assistenti personali già assemblati:
**Khoj**, **Reor**, **SurfSense**, **Onyx**, **Perplexica**, **Leon**, **OpenAssistant**
successori, e i progetti di *lifelogging* locale (attenzione: il gate-privacy di Giuseppe
esclude tutto ciò che manda contesto a un cloud terzo — vedi il caso Wispr Flow già scartato).

**Conta come risposta se:** per ogni connettore dichiari licenza, se gira **interamente in
locale**, che dati escono dal computer, e quale organo della navicella diventerebbe più
intelligente avendolo.

---

### D6 — Come si tiene una costituzione allineata a un sistema che cambia

**Cerchi:** meccanismi con cui un progetto rileva **da solo** che la documentazione non
descrive più il codice — perché la navicella ha 8 agenti sul disco e 6 in costituzione, 17
comandi e 12 documentati, e se ne è accorta solo con una retrospettiva chiesta a mano.

**Piste:** *documentation drift detection*, *architecture decision records* (ADR) con lint,
`docs-as-tests` / **Vale**, **arch-unit** e *fitness functions* dell'architettura evolutiva
(Ford/Parsons/Kua), pre-commit hooks che falliscono su disallineamento, spec-driven
development (**Kiro**, **GitHub spec-kit**), e i pattern di gestione di `CLAUDE.md` /
subagents / skills nella documentazione ufficiale Anthropic.

**Conta come risposta se:** il meccanismo produce un **errore visibile a chi apre la
sessione**, non un report che qualcuno deve chiedere.

---

### D7 — L'economia: fare tutto questo senza pagare e senza rischiare il ban

**Cerchi:** la mappa aggiornata di ciò che è **consentito** e di ciò che costa zero.

**Piste:** i ToS ufficiali Anthropic sull'uso dell'abbonamento fuori dai client ufficiali
(la navicella ha già una scottatura qui: verifica **alla fonte primaria**, non su The
Register/WinBuzzer come è stato fatto il 25/7 — quel gate è ancora dichiarato "da confermare");
modelli locali per il lavoro di volume (**Ollama**, **llama.cpp**, **vLLM**, quantizzazioni
recenti, e cosa gira davvero sull'hardware di Giuseppe — misuralo, non stimarlo); router
(**LiteLLM**, **OmniRoute** già studiato); free tier reali e loro limiti effettivi.

**Conta come risposta se:** ogni affermazione sui ToS è ancorata a una **pagina ufficiale
Anthropic con data**, e ogni claim di prestazione locale a un benchmark su hardware
comparabile, non a un post entusiasta.

---

### D8 — Chi ha già costruito "la mia seconda mente" e come è finita

**Cerchi:** i post-mortem. Persone che hanno costruito un assistente personale persistente
per mesi e hanno scritto **cosa è collassato**: la memoria che è diventata rumore, il
sistema abbandonato dopo sei settimane, i costi esplosi, la manutenzione che ha superato il
beneficio.

**Piste:** blog di chi lavora in pubblico su second brain agentici, thread lunghi su
r/LocalLLaMA, r/ClaudeAI, Hacker News («Show HN: my personal AI»), la letteratura PKM
(Zettelkasten, *building a second brain*) sul perché i sistemi di note muoiono, e il
fenomeno delle *collector's fallacy* — raccogliere invece di usare.

**Conta come risposta se:** riporti **modalità di fallimento** con la causa dichiarata
dall'autore, e per ognuna dici se la navicella ha già quel sintomo. (Un candidato: il
rapporto 4:1 fra memoria su sé stessa e memoria su Giuseppe, e il 749/17 fra accademico e
personale.)

---

### D9 — La domanda aperta

Cerca **quello che non ho pensato**. Le otto domande sopra nascono da un'analisi esterna di
un pomeriggio: coprono i buchi visibili, non necessariamente i più importanti. Dedica
esplicitamente una parte del lavoro a cercare approcci che **rendono obsoleta la domanda**
invece di rispondervi — per esempio architetture in cui la memoria non è un file da
promuovere, o in cui l'agente non ha bisogno di una costituzione perché la struttura è nel
codice. Se trovi qualcosa che smonta un pezzo di questo mandato, quella è la scoperta più
preziosa del giro: riportala per prima.

---

## 3. Come cercare — metodo, non buona volontà

**Onde successive, non una lista sola.** Fai almeno tre passate. Prima passata: i termini
che ti ho dato. Seconda: i termini *nuovi* incontrati nella prima (nomi di tecniche, autori,
progetti citati). Terza: chi cita quei lavori — «cited by», issue, fork, discussioni. La
maggior parte delle cose utili sta alla seconda e terza onda; la prima trova solo ciò che
già sapevo.

**Cerca in inglese.** Le query in italiano su questi temi restituiscono traduzioni e
divulgazione. Formula query specifiche («self-improving agent skill library verification»)
prima che generiche («AI that learns»).

**Gerarchia delle fonti, dichiarata sempre.** Paper o documentazione ufficiale > repository
con codice leggibile > post tecnico dell'autore > articolo giornalistico. Un fatto
importante che poggia solo sul quarto livello si segnala come **non confermato**, come è
successo con il gate ToS.

**Datare tutto.** Per ogni progetto: ultimo commit, numero di manutentori, licenza, se è
ancora vivo. Un repo con 30k stelle e nessun commit da un anno è un cimitero elegante.

**Misurare, non stimare.** Dove c'è un numero (token, costo, latenza, occupazione), prendi
quello dichiarato dalla fonte e riportalo con la fonte. Dove non c'è, scrivi «non misurato»
invece di inventare un ordine di grandezza.

**Verifica ostile.** Per ogni candidato promettente, cerca esplicitamente le critiche: issue
aperte, «X doesn't work», ablation nei paper, il commento del tizio che l'ha provato e si è
arreso. Un candidato senza detrattori è un candidato non cercato bene.

## 4. Cosa scartare senza riportarlo

- Qualunque cosa richieda di mandare in cloud contenuto della navicella (gate-privacy, L5).
- Qualunque cosa a pagamento ricorrente non giustificata da un numero (zero-portafoglio).
- Qualunque cosa che violi i ToS Anthropic sull'abbonamento.
- Framework che sostituirebbero l'architettura invece di innestarsi in essa: la navicella
  non si riscrive su CrewAI. Cerca **organi**, non trapianti di scheletro.
- Elenchi di strumenti senza un giudizio. Se non sai dire *cosa cambierebbe nella navicella*,
  non è un risultato.

## 5. Il deliverable

Un file per ogni domanda, in `00-capitano/ricerche-argonauta/`:
`jarvis-D1-autoevoluzione.md` … `jarvis-D9-aperta.md`.

Ogni file, questa forma e nient'altro:

```
# D<n> — <titolo>
## Risposta in tre righe
   La cosa che ho trovato e che cambia qualcosa. Se non c'è, dillo qui.
## Candidati (ordinati per utilità reale, non per fama)
   Per ognuno: nome · link · licenza · ultimo commit · in una riga cosa fa ·
   in una riga cosa risolverebbe della navicella · costo · rischio · fonte del giudizio
## Il meccanismo, spiegato bene
   Come funziona davvero il candidato migliore. Prosa, non bullet. Se non l'hai capito,
   scrivilo — vale più di un riassunto che sembra una comprensione.
## Contro
   Critiche trovate, limiti dichiarati dagli autori, chi ci ha provato e ha smesso.
## Innesto proposto
   Quale file/script/hook della navicella toccherebbe. Cosa sostituirebbe.
   Quanto lavoro. Cosa si romperebbe.
## Non confermato
   Tutto ciò che poggia su fonte secondaria.
```

Poi **un solo file di sintesi**, `jarvis-sintesi-2026-XX-XX.md`, con:
- le **tre mosse** che, prese insieme, chiudono più buchi con meno lavoro (argomentate,
  non elencate);
- la **cosa che non farei**, con il motivo;
- ciò che questa ricerca ha **smentito** del mandato che stai leggendo.

## 6. Confini che non tocchi

Questa è ricerca. Non installi niente, non modifichi nessun file della navicella fuori da
`ricerche-argonauta/`, non decidi nulla. L'interpretazione è di Dedalo, la ratifica di
Mnemosyne, la rotta di Giuseppe. Se durante la ricerca ti accorgi che una cementata di
`CLAUDE.md` andrebbe rivista, **non proporre la revisione**: scrivi il fatto che l'ha resa
discutibile e passa oltre — proporre è di Dedalo.

## 7. Antipattern — se il tuo output ha questi, è da rifare

- Liste di strumenti senza giudizio, o con giudizio generico («potente», «popolare»,
  «da valutare»).
- «Si potrebbe considerare di…» — o l'hai capito abbastanza da dire cosa succede, o no.
- Numeri senza fonte.
- Un candidato per domanda, trovato alla prima ricerca. Nove domande × un risultato ovvio
  ciascuna è il fallimento tipico di questo mandato.
- Riassunti di abstract senza aver aperto il lavoro.
- Silenzio sui fallimenti: se una domanda non ha risposta utile, scriverlo è un risultato.
  Riempirla di contenuto plausibile è l'unico modo davvero grave di sbagliare questo lavoro.

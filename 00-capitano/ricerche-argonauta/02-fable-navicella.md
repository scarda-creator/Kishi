---
type: ricerca
---

# Ricerca Argonauta 02 — Claude Fable 5 e la navicella AgentsAI

Fondato: 2026-07-04
Ruolo: Argonauta (dimensione futuro — esplorazione della traiettoria della navicella)
Stato: ricerca completata

---

## Frame strategico

Domanda di partenza: dove, nell'architettura v2 a 4 agenti, un modello Fable-class
porta valore reale, e dove no? La ricerca parte dalle roadmap esistenti
(LLM locali, interfaccia grafica, Kishi, Business/Architetto) e dall'architettura
corrente (Capitano + Demiurgo Accademico su Opus 4.8; Rapsodo + Argonauta su Sonnet 4.6).

---

## 1 — Cos'è realmente Fable 5 (e cosa non è)

**Correzione critica della premessa:** il nome "Fable" è una convenzione di denominazione
Anthropic, non una descrizione funzionale. Claude Fable 5 non è una variante orientata
alla scrittura narrativa o creativa. È il **modello frontier di Anthropic a rilascio
generale** — la versione pubblica della classe Mythos (Mythos 5 è lo stesso modello
senza safety classifier, disponibile solo tramite Project Glasswing in accesso limitato).

**Specifiche verificate (fonte: Anthropic platform docs, giugno 2026):**

| Parametro | Valore |
|---|---|
| Model ID | `claude-fable-5` |
| Context window | 1M token (default) |
| Max output | 128k token per richiesta |
| Thinking | Adaptive thinking always on (non disattivabile) |
| Raw CoT | Mai restituito (solo summary o omesso) |
| Prezzo input | $10/MTok |
| Prezzo output | $50/MTok |
| Prezzo caching | sconto 90% su cache-hit input |
| Safety classifier | Sì (può restituire stop_reason: "refusal") |
| Max plan | Disponibile con usage credits dal 7 luglio 2026 |

**Differenza strutturale da Opus 4.8 e Sonnet 4.6:**

- Opus 4.8: $5/$25 per MTok. Pensiero profondo, orchestrazione, scrittura tecnica
  densa. Il modello più capace prima di Fable.
- Sonnet 4.6: $3/$15 per MTok. Veloce, solido su task strutturati. Ruoli leggeri.
- Fable 5: $10/$50 per MTok. **2x Opus** in costo. Progettato per task che richiedono
  lunghe sequenze autonome (ore, giorni), contesto fino a 1M token, ragionamento
  multi-passo sostenuto senza checkpoint umani frequenti.

**Benchmark chiave vs Opus 4.8 (fonte: TrueFoundry, luglio 2026):**

| Benchmark | Fable 5 | Opus 4.8 | Delta |
|---|---|---|---|
| SWE-bench Pro (coding) | 80.3% | 69.3% | +11 pp |
| Spatial reasoning | 38.6% | 14.5% | +24 pp |
| Legal reasoning | categoria-leading | barely passing | significativo |

Il vantaggio di Fable 5 cresce con la complessità e la durata del task. Su task brevi
o medi, l'edge rispetto a Opus 4.8 si restringe.

**Scrittura creativa — dato verificato:**

Il test comparativo (Noren, giugno 2026) mostra che Fable 5 produce "linee più
nette" di Sonnet e Opus su output grezzi. Però: "l'effetto voice profile è più grande
dell'effetto modello." Quando tutti e tre i modelli usano lo stesso profilo di voce
strutturato, Fable 5 e Sonnet 4.6 producono output quasi equivalenti. Conclusione:
la superiorità di Fable nella scrittura è un artefatto della sua capacità generale,
non una specializzazione creativa. Non esiste un vantaggio specifico per la narrativa
che giustifichi il suo costo rispetto agli altri modelli se l'output creativo è
il target.

---

## 2 — Mappa agente per agente

### Capitano / Mnemosyne (attuale: Opus 4.8)

**Funzioni core:** orchestrazione sessione, gestione memoria L1-L5, dialogo principale,
routing verso sub-agenti.

**Fable 5 aggiungerebbe:**
- Context window 1M token: vantaggio reale per sessioni molto lunghe con memoria
  profonda attiva. Se il Capitano deve tenere in mente L1+L2+L3 simultaneamente
  in una sessione intensiva, il contesto più ampio aiuta.
- Migliore ragionamento multi-passo su decisioni architetturali complesse (es.
  costruzione del modulo Business con Dedalo, quando arriverà).

**Dove è neutro o negativo:**
- La maggior parte delle sessioni Capitano è dialogo + routing: task medi, non
  long-horizon autonomi. Il vantaggio di Fable su task brevi è marginale rispetto
  a Opus 4.8.
- Il safety classifier di Fable introduce un nuovo tipo di errore (refusal) da
  gestire: Opus 4.8 non ha questo rischio nelle stesse situazioni.
- 2x costo per il ruolo più frequentemente invocato: impatto sul budget il più alto
  di tutti.

**Verdetto: NON sostituire Opus 4.8.** La finestra 1M è l'unico vantaggio reale per
questo ruolo, ma non giustifica il 2x di costo su task prevalentemente medi.
Upgrade possibile solo se sessioni con memoria espansa diventano sistematicamente
il caso d'uso dominante.

---

### Demiurgo Accademico (attuale: Opus 4.8)

**Funzioni core:** scrittura capitoli libro di testo, quiz, iterazione su feedback
di Giuseppe.

**Fable 5 aggiungerebbe:**
- Output fino a 128k token per richiesta: utile se un capitolo deve essere generato
  interamente in un singolo output senza interruzioni. Attualmente Opus 4.8 ha
  output limit più bassi.
- Context 1M: utile quando il Demiurgo deve leggere l'intero libro già scritto
  (tutti i capitoli) mentre scrive il successivo, per coerenza. Con un libro di
  fisica da 8-10 capitoli densi, questo diventa rilevante nella fase finale.

**Dove è neutro:**
- La scrittura densa in italiano su fisica teorica non è il benchmark dove Fable
  eccelle (i dati sono su coding, spatial reasoning, legal). Non ci sono dati
  pubblici che misurino "scrittura tecnica in italiano su meccanica quantistica" —
  la differenza rispetto a Opus 4.8 su questo task specifico è non quantificata.
- L'effetto voice profile: strutturare meglio il prompt del Demiurgo (stile, densità,
  antipattern) produce più valore di un upgrade modello.

**Verdetto: NON sostituire Opus 4.8 nel breve.** L'output 128k e la window 1M
diventano rilevanti quando il libro di testo sarà già avanzato (cap. 5+). Allora
vale rivalutare per task specifici di sintesi finale, non come modello base.
Il 2x di costo su un ruolo invocato frequentemente non si giustifica con l'uso
corrente.

---

### Rapsodo (attuale: Sonnet 4.6)

**Funzioni core:** gestione memoria storica, archiviazione, pre-classificazione,
reality check, riepilogo settimanale.

**Fable 5 aggiungerebbe:** nulla di misurabile per questi task. Sono task strutturati
e ripetitivi dove Sonnet 4.6 è già sovradimensionato rispetto alla complessità
intrinseca. Usare Fable 5 per classificare materiali o scrivere riepiloghi è
l'equivalente di usare un cacciavite da chirurgo per montare mobili IKEA.

**Verdetto: Spreco netto.** Non discutere ulteriormente.

---

### Argonauta (attuale: Sonnet 4.6)

**Funzioni core:** inventario fonti, mappa esercizi, scouting bibliografico su web.

**Fable 5 aggiungerebbe:**
- Contesto 1M: utile se il scouting implica l'analisi di paper molto lunghi o di
  interi volumi. Per la ricerca accademica su meccanica quantistica / decoerenza / ETH,
  leggere un paper da 80 pagine in un unico contesto senza chunking sarebbe un
  vantaggio reale.
- Ragionamento più profondo su connessioni cross-domain (utile per il quarto
  principio cognitivo di Giuseppe: sintesi cross-domain).

**Dove è neutro:**
- Il task di scouting tipico (trova paper, leggi abstract, sintetizza, salva findings)
  non è long-horizon né multi-giorno. Sonnet 4.6 lo regge.
- Il costo dell'Argonauta è già basso perché usa Sonnet; passare a Fable triplicherebbe
  il costo per task.

**Verdetto: Valore puntuale, non sistematico.** Fable 5 come modello base per
l'Argonauta non si giustifica. Ma esiste un caso d'uso specifico: scouting profondo
per la tesi (decoerenza + ETH + aggancio Marinari), dove il contesto 1M e il
ragionamento più profondo potrebbero ridurre il numero di iterazioni. Da valutare
come upgrade selettivo su singoli task, non come cambio permanente.

---

## 3 — Il caso creativo: gioco-fisica e Demiurgo Creativo

### Gioco-fisica (Godot, progetto post-Meccanica)

Il gioco narrativo in Godot ha due assi: coding (Godot + GDScript) e narrazione
(storia, dialoghi, logica narrativa). Fable 5 è superiore su entrambi, ma per
motivi diversi dalla scrittura creativa specializzata:

- **Coding**: +11pp su SWE-bench Pro rispetto a Opus 4.8. Per scrivere o debuggare
  GDScript complesso, implementare sistemi di gioco non banali, o fare refactoring
  di architettura ludica, Fable 5 ha un vantaggio reale e misurabile.
- **Narrazione**: la superiorità è quella del modello generale più capace, non di
  un'architettura narrativa specializzata. Non c'è evidenza che Fable 5 sia addestrato
  in modo specifico su fiction o game design.
- **Long-horizon**: se il Demiurgo Creativo deve scrivere uno script completo di
  un capitolo di gioco (dialoghi + eventi + logica + coerenza con i capitoli precedenti)
  in un singolo task autonomo, il context 1M e i 128k output token sono vantaggi
  strutturali, non marginali.

**Valutazione**: per il gioco-fisica, Fable 5 è la scelta corretta per task di
sviluppo complessi (non per ogni micro-task). Il pattern ideale: Fable 5 per le
sessioni di costruzione densa (scrivere un'intera area di gioco + logica + dialoghi
in una passata); Sonnet 4.6 per iterazioni veloci, quiz riusabili, flashcard.

### Demiurgo Creativo (previsto in architettura, non costruito)

Questo ruolo è il più allineato all'impiego di Fable 5. Motivazioni:

1. Il Demiurgo Creativo gestisce output che si estendono nel tempo (un gioco è un
   progetto da mesi, non da sessioni singole). Il long-horizon agentic è la forza
   fondamentale di Fable 5.

2. La coerenza narrativa su larga scala (cap. 3 coerente con cap. 1, sistema di
   gioco che evolve senza contraddizioni) beneficia della window 1M: il modello
   può tenere tutto il progetto in contesto.

3. Il Demiurgo Creativo non è invocato ogni giorno come il Demiurgo Accademico:
   è un ruolo per sessioni intensive, meno frequenti. Il costo 2x Opus si diluisce
   su un volume di token inferiore.

4. L'asse patto dataset-evoluzione / libertà creativa/artistica che Giuseppe ha
   esplicitato come secondo asse del progetto ha una qualità ambiziosa che merita
   il modello più capace — non per la "creatività" in senso stretto, ma perché
   costruire qualcosa di non ordinario richiede il modello con più capacità di
   mantenere una visione coerente su scala.

**Verdetto: Fable 5 è il modello naturale per il Demiurgo Creativo, quando verrà
costruito.** Non perché sia specializzato in narrativa (non lo è), ma perché il
long-horizon agentic, il contesto 1M, e il ceiling di capacità generale sono
esattamente ciò che serve per produrre qualcosa di non ordinario su scala.

---

## 4 — Rischi e costi

### Costo reale

Confronto diretto su un task medio (1k token input, 3k token output):

| Modello | Costo |
|---|---|
| Sonnet 4.6 | $0.003 + $0.045 = $0.048 |
| Opus 4.8 | $0.005 + $0.075 = $0.080 |
| Fable 5 | $0.010 + $0.150 = $0.160 |

Fable 5 è 2x Opus su ogni task. Su un uso moderato (scenario da ricerca 01-ai-locale:
3 MTok input + 0.5 MTok output su Opus → ~$27.50/mese), passare a Fable raddoppia
il costo a ~$55/mese. Su piano Max con usage credits post-7 luglio, questo è rilevante.

### Frammentazione dei modelli

La navicella ha già 2 tier: Opus (ruoli pesanti) + Sonnet (ruoli leggeri). Aggiungere
Fable come terzo tier introduce:
- Una nuova regola di routing ("quando Fable, quando Opus, quando Sonnet")
- Complessità nel CLAUDE.md e nelle spec agenti
- Rischio di deriva: ogni agente tende verso il modello più capace nel tempo,
  anche quando non serve

Giuseppe odia la complessità inutile. Un terzo tier modello è complessità solo se
porta valore reale e sistematico — non su task occasionali.

### Safety classifier e refusals

Fable 5 può restituire `stop_reason: "refusal"`. Opus 4.8 non ha questo comportamento
nelle stesse situazioni. Per la navicella questo significa:
- Ogni agente che usa Fable deve gestire il caso refusal (fallback su Opus o Sonnet)
- Aggiunge una classe di errore nuova che non esiste oggi
- Per il Demiurgo Creativo (se lavora su fisica narrativizzata, cosmologie, ecc.)
  il rischio di falsi positivi dal classifier è reale

### Coerenza di voce

Tre modelli diversi con stili e calibrazioni diverse che parlano a Giuseppe aumentano
il rischio di incoerenza percepita. Opus 4.8 e Sonnet 4.6 sono già calibrati sul
dataset Giuseppe attraverso l'uso. Fable 5 richiederebbe una fase di calibrazione
separata.

---

## 5 — Raccomandazione secca

**Fable 5 nella navicella: NO come sostituzione sistematica di alcun agente.**

Il modello attuale (Opus + Sonnet) è calibrato, stabile, e copre tutti i bisogni
correnti con buon rapporto qualità/costo. Fable 5 a 2x Opus è giustificabile solo
dove il long-horizon agentic e il context 1M producono un vantaggio strutturale,
non marginale.

**Sì puntuale, in due scenari:**

1. **Scouting profondo per la tesi** (decoerenza, ETH, aggancio Marinari): singoli
   task di ricerca che richiedono lettura e sintesi di corpus ampi in un passaggio
   unico. Fable 5 come modello per l'Argonauta su questo task specifico, non come
   modello base.

2. **Demiurgo Creativo (futuro)**: quando verrà costruito (roadmap: dopo Settembre
   2026, dopo Dedalo), Fable 5 è il modello naturale per sessioni intensive di
   costruzione del gioco-fisica. Non per ogni interazione, ma per le sessioni lunghe
   di architettura narrativa + codice + logica di gioco.

**Priorità nella roadmap complessiva:** bassa. Tutto il resto viene prima:

1. Meccanica (fine luglio 2026) — priorità operativa dichiarata
2. Rodare il modulo Accademico (luglio-agosto 2026)
3. Costruire Dedalo (settembre 2026)
4. Modulo Business (ottobre 2026)
5. Scouting profondo tesi con Fable (quando la tesi diventa operativa)
6. Demiurgo Creativo + gioco-fisica con Fable (post-sessione estiva)

Il rischio principale non è non usare Fable 5 — è usarlo in modo diffuso prima
di avere chiari i task dove batte davvero Opus 4.8. La complessità di routing
aggiunta a un sistema già funzionante non vale un vantaggio marginale.

---

## Fonti

- [Anthropic — Introducing Claude Fable 5 and Mythos 5](https://platform.claude.com/docs/en/about-claude/models/introducing-claude-fable-5-and-claude-mythos-5)
- [Anthropic — Claude Fable 5 and Mythos 5 news](https://www.anthropic.com/news/claude-fable-5-mythos-5)
- [TrueFoundry — Claude Fable 5: API, Benchmarks, Pricing](https://www.truefoundry.com/blog/claude-fable-5-api-benchmarks-pricing-how-to-use-it)
- [Noren — Claude Fable 5 Writing Test](https://usenoren.ai/blog/claude-fable-5-writing-test)
- [Noren — Claude Fable 5 Review](https://usenoren.ai/blog/claude-fable-5-review)
- [Anthropic Platform — Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- [Anthropic — Claude Fable landing page](https://www.anthropic.com/claude/fable)
- [BleepingComputer — Fable 5 and Max plan](https://www.bleepingcomputer.com/news/artificial-intelligence/claude-fable-5-isnt-permanently-leaving-subscriptions-anthropic-says/)
- [Medium — Claude Fable 5 overview](https://medium.com/data-science-collective/claude-fable-5-is-here-the-most-capable-ai-model-ever-made-safe-for-everyone-5014421b8764)

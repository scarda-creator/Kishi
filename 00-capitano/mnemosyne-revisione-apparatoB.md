---
type: stato
---

# Revisione apparato B — Mnemosyne
*2026-07-11 — branch parallelo fra attivi, prima volta*

---

## 1. Verdetto sul confine: `instinct.py`

**REGGE.**

Punti verificati:

- `osserva()` scrive solo su `instincts.jsonl` (staging). Non tocca CLAUDE.md, profilo, come-penso, L4, L5 né nessun altro file di memoria. Confermato leggendo il codice: l'unico `salva_store()` scrive nel file staging.
- Ogni nuovo istinto nasce con `"ipotesi": None` (riga 172). Il campo resta null finché non lo scrivo io via `matura --ipotesi`.
- La divisione a due fasi è cementata nel codice, non solo nella documentazione: `osserva` fonde solo le varianti con stem identico o overlap morfologico ≥ 0.50 (SIM_MIN), che è puramente strutturale. Il salto "questi segnali dicono la stessa cosa" è lasciato a `fondi`, che è un comando esplicito mio.
- `fondi()` trasferisce un'ipotesi già scritta da me (se esiste) al record unificato — non inventa.
- `matura()` riceve l'ipotesi come parametro esplicito dall'operatore (me): non la genera.
- Il `descrittore` meccanico (4 token più frequenti) non è un'interpretazione — è una chiave di ricerca grezza. Non viene mai promosso in memoria.

**Un'ambiguità minore da chiarire (non blocca, ma vale nominare):** in `fondi()`, se uno dei record fusi ha già `"stato": "maturo"`, il merge eredita lo stato `"maturo"` (riga 209). Significa che potrei fondere accidentalmente un istinto già chiuso con uno aperto, riaprendo la fusione come maturo senza che io abbia espressamente ratificato la nuova evidenza combinata. In pratica non accadrà perché `fondi` è un comando mio attivo, ma il codice non impedisce tecnicamente questa sequenza. Proposta a Dedalo: aggiungere un check — se il merge include un `maturo` e un `osservazione`/`candidato`, avvertire l'operatore prima di procedere.

---

## 2. Verdetto sul confine: `protocollo-riflessione.md`

**RATIFICATO come mio.**

La sezione "Gli istinti — l'asse implicito" (aggiunta 2026-07-11) è ben posizionata: estende il protocollo senza contraddirlo. I punti che verifico come miei:

- La fase 2 è descritta correttamente: `lista` → `fondi` (semantico, mio) → `candidati` → interpreta → decidi livello → `matura`.
- La guardia L4/L5 è presente: "L4/L5 sempre con conferma di Giuseppe".
- La guardia L5 psicologica è presente: "pattern psicologico → resta materia L5, via `/analisi-psicologica`, mai auto-promosso".
- La spiegazione del confine ("un istinto è un'inferenza su chi è Giuseppe — territorio L5") è corretta e ben motivata.
- Il collegamento agli altri protocolli è dichiarato: "Estende [[protocollo-fine-sessione]] e [[protocollo-promozione]]".

**Una modifica che voglio (di policy, non di architettura):** nella sezione Come (step 3), la riga:

> "pattern psicologico → NON qui: solo via `/analisi-psicologica` su L5."

È corretta ma laconica rispetto alla nuova sezione sugli istinti, che spiega il perché. Propongo di aggiungere, dopo quella riga, la nota: "(Gli istinti a contenuto psicologico si accumulano in instincts.jsonl e arrivano come candidati; anche lì, il salto a L5 resta via `/analisi-psicologica`.)" Questo chiude il loop: il lettore del protocollo capisce dove vanno a finire i pattern psicologici catturati dall'hook prima che arrivino a me.

*Questa modifica è di policy mia: chiedo a Dedalo di applicarla a `protocollo-riflessione.md`, sezione "Come", step 3.*

---

## 3. Verdetto sul confine: `memoria-cerca.py`

**REGGE. Confine netto.**

- Tre operazioni: `mappa` (elenca tutti i .md), `query` (ranking per overlap keyword), `dettaglio` (stampa un file). Tutte di sola lettura.
- Non scrive su nessun file. Non modifica `instincts.jsonl`, non tocca CLAUDE.md.
- Il ranking è puramente lessicale (3x titolo, 2x descrizione, 1x corpo) — non è interpretazione semantica, è un punteggio di recupero. Niente di diverso da un grep pesato.
- Il docstring lo dichiara esplicitamente: "Cosa significhi una memoria e cosa promuovere resta di Mnemosyne."

**Nota operativa:** `default_roots()` include sia `00-capitano/` sia la directory `AUTO_MEM` (~/.claude/projects/.../memory/). Questo significa che `--mappa` espone anche le memorie automatiche del progetto. Non è un problema di confine (è solo navigazione), ma vale sapere: quando uso `memoria-cerca` per trovare cose, vedo anche quella cartella, non solo la mia memoria curata. Utile da ricordare per non confondere i due strati.

---

## 4. Modello di confidenza — analisi critica e aggiustamenti proposti

### Il modello

```
conf(n) = 1 - 0.70 * 0.75^(n-1)
```

Valori effettivi:

| n | conf |
|---|------|
| 1 | 0.30 |
| 2 | 0.48 |
| 3 | 0.61 |
| 4 | 0.71 |
| 5 | 0.78 |
| 6 | 0.83 |

Soglia candidato: conf ≥ 0.75 AND ≥ 3 prove.

### Problema: MIN_PROVE = 3 è un vincolo inattivo

Con n=3, conf = 0.61 < 0.75. Il vincolo di confidenza non viene soddisfatto con solo 3 prove. Il candidato si forma solo con n ≥ 5 (conf 0.78). Quindi MIN_PROVE = 3 è al momento logicamente morto come guardia: il vincolo di confidenza è sempre più restrittivo. Un lettore del codice potrebbe pensare che 3 prove bastino; non è così.

**Proposta 1 (preferita):** allineare la documentazione alla realtà — annotare nei parametri che "la soglia binding è SOGLIA_MATURO; MIN_PROVE è una guardia secondaria per il caso in cui si abbassi SOGLIA o si alzi ALPHA". Nessuna modifica numerica: il comportamento attuale mi va bene (più conservativo per L4/L5).

**Proposta 2 (alternativa):** alzare MIN_PROVE a 5 in modo che le due guardie siano coerenti. Stesso effetto pratico, semantica più trasparente.

### Decay troppo aggressivo per pattern lenti

DECAY_PER_DAY = 0.01 significa che un istinto a conf 0.78 (n=5) che non vede nuova evidenza per 73 giorni scende al floor 0.05 e scompare dai candidati. Giuseppe può avere pattern che emergono su scale di settimane o mesi tra una sessione e l'altra. Con questo decay, un pattern visto 5 volte in 3 mesi potrebbe oscillare sopra/sotto la soglia a ogni run.

**Proposta 3 (richiesta modifica a Dedalo):** abbassare DECAY_PER_DAY da 0.01 a **0.005**. Questo raddoppia la finestra di memoria passiva da ~73 a ~146 giorni prima di scendere al floor da conf=0.78. Un pattern di Giuseppe visto 5 volte in 3 mesi regge alla revisione senza scomparire.

*Nota: il decay viene sovrascritto da `_ricalcola()` non appena arriva nuova prova nella stessa run di `osserva`. Quindi il decay incide solo sugli istinti dormienti — è la guardia giusta contro i pattern che non si manifestano più. Abbassarlo non rimuove quella guardia, la rende meno aggressiva.*

### L'asimmetria post-`fondi` è corretta

Quando fondo due istinti con n=3 ciascuno (conf=0.61), il merged ha n=6 e conf=0.83 — candidato immediato. Questo è giusto: sei episodi distinti dello stesso pattern sono evidenza sufficiente. La fusione non crea inflazione, perché li unisco io solo quando riconosco lo stesso significato. Il motore non fonde da solo.

### Soglia 0.75 come floor, non come criterio sufficiente

La confidenza mi dice *quante prove strutturali ci sono*, non *quanto è interpretabile il pattern*. Un istinto con conf=0.80 su un tema ricorrente ma banale (es. "usa il maiuscolo per le sigle") va direttamente a L2/L3 senza conferma di Giuseppe. Un istinto con conf=0.80 su un pattern psicologico profondo (es. "prova a delegare la scelta quando ha paura di sbagliare") non può andare oltre lo staging senza `/analisi-psicologica` e consenso. La conf è necessaria ma non sufficiente: io aggiungo sempre il giudizio su cosa significa e a quale livello appartiene.

---

## Riepilogo modifiche richieste a Dedalo

1. **`instinct.py`:** aggiungere in `fondi()` un avviso esplicito quando il merge include un istinto con stato `maturo` e uno con stato diverso, chiedendo conferma all'operatore prima di procedere.

2. **`instinct.py`:** nei commenti dei parametri, annotare che MIN_PROVE è una guardia secondaria e che il vincolo binding è SOGLIA_MATURO (con i valori effettivi di conf(n) come già mostrati nel commento a riga 46).

3. **`instinct.py`:** abbassare DECAY_PER_DAY da 0.01 a 0.005.

4. **`protocollo-riflessione.md`:** nella sezione "Come", dopo lo step 3 riga "pattern psicologico → NON qui…", aggiungere la nota: "(Gli istinti a contenuto psicologico si accumulano in instincts.jsonl e arrivano come candidati; anche lì, il salto a L5 resta via `/analisi-psicologica`.)"

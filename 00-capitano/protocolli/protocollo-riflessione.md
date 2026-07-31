---
type: spec
---

# Protocollo riflessione — dalla coda grezza alla memoria

> Come Mnemosyne trasforma le catture automatiche dell'hook in memoria vera.
> Nato 2026-07-11 (apparato B della schiusura), adattando claude-reflect ai termini
> della navicella. Confine cementato: **l'hook cattura, Mnemosyne interpreta.**

## La coda
`00-capitano/coda-apprendimento.jsonl` — append-only, una riga JSON per cattura
(`ts`, `tipo`, `confidenza`, `pattern`, `testo`). La riempie in automatico l'hook
`00-capitano/scripts/cattura-apprendimento.py` (UserPromptSubmit) su ogni messaggio di
Giuseppe che matcha un pattern italiano di correzione / preferenza durevole / "ricorda:" /
feedback positivo. È **grezza**: contiene falsi positivi e cose non durevoli. Non è memoria
finché Mnemosyne non la promuove.

## Quando
- A fine sessione (aggancio al protocollo-fine-sessione).
- Su `/riflessione`.
- Il promemoria SessionStart (`promemoria-coda.py`) dice quante voci sono in coda.

## Come (compito di Mnemosyne)
1. **Leggi** la coda. Per ogni voce chiediti: è un apprendimento DUREVOLE e riusabile, o
   un'istruzione una-tantum di quella conversazione? Scarta le seconde e i falsi positivi.
2. **Dedup** contro la memoria esistente (CLAUDE.md, memorie-feedback, log-decisioni,
   diari): se il concetto esiste già, aggiorna invece di duplicare.
3. **Interpreta e assegna il livello:**
   - correzione / preferenza operativa durevole → memoria-feedback o CLAUDE.md (L2/L3);
   - decisione strategica → `log-decisioni-memoria.md` (L3);
   - fondazionale (principi, chi-è-Giuseppe) → L4 **solo con conferma esplicita di Giuseppe**;
   - pattern psicologico → NON qui: solo via `/analisi-psicologica` su L5. L'hook non tocca L5.
     Chiusura del loop: se una cattura della coda **o** un candidato-istinto *sembra* psicologico
     (non un'operatività, ma un tratto di chi-è-Giuseppe), **resta in staging, marcato, mai
     auto-promosso**. Arriva a Mnemosyne come candidato *segnalato*, non come memoria scritta; da
     lì entra solo nel percorso `/analisi-psicologica`, con il consenso di Giuseppe. Confidenza
     alta ≠ promozione: la conf misura quante prove strutturali ci sono, non cosa significano.
4. **Conferma** per L4/L5: presenta a Giuseppe e attendi il suo sì (confine invariante:
   chi-è-Giuseppe è interpretazione di Mnemosyne, con l'ultima parola a lui).
5. **Scrivi**, poi **archivia** le voci processate in `coda-apprendimento-archivio.jsonl`
   (niente oblio) e **svuota** la coda attiva.

## Gli istinti — l'asse implicito (cresciuto 2026-07-11, apparato B)

La coda cattura l'apprendimento **esplicito** (una correzione, un "ricorda:"). Gli **istinti**
sono l'asse **implicito**: pattern che si ripetono e che nessun singolo messaggio dichiara.
Non sostituiscono la riflessione sulla coda — la estendono di un livello di profondità. Motore:
`scripts/instinct.py`; store: `instincts.jsonl`; sorgente: la stessa coda (+ archivio).

Il motore lavora a **due fasi**, e la seconda è tua:
1. **`osserva`** (meccanico, di Dedalo) legge la coda, fonde solo le varianti *palesi* e traccia
   una confidenza che cresce col numero di prove. **Sovra-divide di proposito**: fondere due
   parafrasi che *significano* lo stesso è interpretazione — cioè tua, non del motore.
2. **La tua fase (Mnemosyne):**
   - `instinct.py lista` — vedi gli istinti grezzi (descrittore meccanico, `ipotesi` = null).
   - `instinct.py fondi <id> <id> …` — unisci gli istinti che dicono la stessa cosa per *senso*
     (es. le parafrasi della brevità). La confidenza si ricombina dalle prove unite.
   - `instinct.py candidati` — quelli oltre soglia (conf ≥ 0.75, ≥ 3 prove): le **proposte**.
   - Per ogni candidato: **interpreta** (scrivi tu l'ipotesi vera), poi **decidi il livello**
     con le stesse regole della coda (L2/L3 diretto; L4/L5 **solo con conferma di Giuseppe**;
     pattern psicologico → resta materia L5, via `/analisi-psicologica`, mai auto-promosso).
   - `instinct.py matura <id> --ipotesi "…"` — chiudi il candidato dopo averlo scritto in
     memoria/skill, così non si ripropone (niente oblio: resta nello store come `maturo`).

**Perché il confine cade esattamente qui:** un istinto è un'inferenza *su chi è Giuseppe* —
territorio L5, che per regola invariante interpreti solo tu. Il motore di Dedalo può contare e
raggruppare varianti ovvie (struttura), ma il salto "questi cinque episodi sono un tratto di
Giuseppe" è interpretazione, e la fa Mnemosyne, con l'ultima parola a lui per L4/L5.

## Confine (invariante)
L'hook e il motore-istinti, che sono di **Dedalo** (struttura), catturano/raggruppano solo il
grezzo e non scrivono mai in memoria. L'interpretazione, il giudizio e la scrittura sono di
**Mnemosyne**. L4/L5 sempre con conferma di Giuseppe. L'automatismo alimenta la riflessione;
non la sostituisce. Estende [[protocollo-fine-sessione]] e [[protocollo-promozione]].

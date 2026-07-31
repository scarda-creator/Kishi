---
type: spec
---

# Protocollo /assorbi-cowork — estrazione dalle sessioni Cowork

> Definisce come estrarre contenuto sostantivo dalle sessioni Cowork passate di Giuseppe e portarlo nella pipeline di intake.
> Vincolo tecnico: il tool `session_info` MCP che legge le sessioni Cowork è disponibile **solo in Cowork desktop**, non in Claude Code. Quindi questo protocollo si esegue dentro una sessione Cowork, non in Claude Code.

---

## Trigger

Due vie:

1. **Esplicito** — Giuseppe apre una sessione Cowork e dice al Capitano-Cowork *"assorbi le ultime N sessioni"* (o un range temporale).
2. **Periodico** — ogni 2-4 settimane Giuseppe apre Cowork apposta per fare la passata. Niente di automatico finché non esiste un meccanismo cross-app.

---

## Procedura (eseguita dal Capitano dentro Cowork)

### Step 0 — Lista delle sessioni

Chiama `session_info.list_sessions(limit=N)` per ottenere la lista delle sessioni recenti, ordinate per data.

### Step 1 — Pre-filtro per rilevanza presumibile

Per ogni sessione, valutare il **titolo** e decidere se vale la pena leggerla. Criteri di rilevanza:

**Vale la pena leggere:**
- Titoli che suggeriscono riflessione personale o scelte strategiche ("Plan ...", "Decision on ...", "Thoughts on ...")
- Titoli su interessi paralleli concreti (progetti reali con specifiche)
- Titoli su dominio business / monetizzazione / futuro
- Titoli con riflessioni filosofiche / esistenziali / di coscienza
- Conversazioni che hanno prodotto file salvati su disco (cwd con outputs reali)

**Non vale la pena leggere:**
- Titoli puramente operativi ricorrenti (multipli "Weekly status update")
- Titoli di studio operativo che hanno solo prodotto file di studio (es. "Formula sheet for X exam") già coperti da altri strumenti
- Sessioni di pochi turni che chiaramente non hanno sostanza
- Titoli generici che suggeriscono test o esperimento ("New session", "Test something")

### Step 2 — Lettura mirata

Per le sessioni promosse alla lettura, chiamare `session_info.read_transcript(session_id, limit=15-30)` per leggere i punti chiave. Limit basso = lettura veloce, prima si vede se vale la pena approfondire.

### Step 3 — Estrazione e scrittura in intake/

Per ogni sessione che merita di entrare in memoria:

1. Identificare l'informazione sostantiva (domande di Giuseppe, risposte chiave, decisioni, pattern emersi)
2. Scrivere un file in `00-capitano/intake/` con questo formato:

```
00-capitano/intake/YYYY-cowork_<descrizione-breve>.md
```

Es: `2026-cowork_internet-income-method.md`

Contenuto del file:

```markdown
# [Cowork] <Titolo descrittivo>

**Fonte:** Sessione Cowork `local_<session-id>`
**Tipo:** estratto curato
**Estratto da:** sessione Cowork del YYYY-MM-DD
**Rilevanza presunta:** <P1 / P2>

---

## <sezione narrativa con il contenuto sostantivo>

(Sintesi della domanda di Giuseppe + sintesi delle risposte sostantive +
 patterns emergenti + collegamenti con la memoria esistente)

## Estrazione per il sistema

(Suggerimenti per la cernita: P1/P2, livelli di memoria proposti, candidati L4 se ce ne sono)

## Destino file originale

(CUSTODISCI verbatim / ELIMINA / SPOSTA / LASCIA in intake — proposta dell'estrattore al Rapsodo)
```

### Step 4 — Notifica a Giuseppe

Il Capitano-Cowork risponde sintetico:

```
[Mnemosyne · Cowork · assorbimento completato]
Esaminate 12 sessioni recenti.
- 3 promosse a intake/ (sostantive)
- 9 skippate (operative ricorrenti o senza sostanza nuova)

File creati in 00-capitano/intake/:
- 2026-cowork_<file1>.md (rilevanza presunta P1 per Business)
- 2026-cowork_<file2>.md (rilevanza presunta P1 per pattern personale)
- 2026-cowork_<file3>.md (rilevanza presunta P2 operativo)

Prossimo passo: apri Claude Code e fai /intake per la cernita disciplinata.
```

---

## Cosa NON fa questo protocollo

- **Non duplica sessioni già estratte.** Prima di scrivere un file di intake, verifica se esiste già un file corrispondente in `00-capitano/chat-archive/` o `00-capitano/intake/`. Se sì, skippa.
- **Non fa cernita finale.** Quella è di `/intake` in Claude Code col Rapsodo. Qui si fa solo estrazione + pre-filtro per rilevanza.
- **Non promuove a livelli di memoria.** Le suggerimenti P1/P2 e i livelli proposti sono *suggerimenti per il Rapsodo*, non decisioni finali.
- **Non legge sessioni di Claude.ai web, ChatGPT, ecc.** Solo sessioni Cowork. Per gli altri provider serve copy-paste manuale come per qualsiasi intake.

---

## Limitazioni tecniche note

1. **session_info funziona solo in Cowork.** Il comando `/assorbi-cowork` non può vivere nativamente in Claude Code. Va eseguito in Cowork.

2. **Le sessioni Cowork con titolo simile possono essere distinte solo leggendole.** "Weekly status update" appare più volte — vanno comunque ispezionate brevemente per capire se hanno contenuti diversi.

3. **Limiti di lettura.** Se una sessione ha 100+ turni, `read_transcript(limit=20)` mostra solo gli ultimi 20. Per sessioni dense può servire un'estrazione parziale, con nota che resta materiale non letto.

4. **Lingua e tono.** Le sessioni Cowork sono spesso in italiano misto a inglese. Mantenere l'italiano nel file di intake, segnalare in nota se la fonte era mista.

---

## Evoluzioni future

Quando Anthropic / Cowork esporrà session_info anche a Claude Code (o quando esisterà un meccanismo cross-app):
- `/assorbi-cowork` diventerà nativo in Claude Code, niente più necessità di aprire Cowork
- Potrà essere schedulato (Windows Task Scheduler ogni domenica)
- Stato delle sessioni già processate andrà tracciato in un file per evitare duplicati (es. `00-capitano/.assorbi-cowork-state.json` con lista session_id già visti)

Fino ad allora, la procedura manuale in Cowork ogni 2-4 settimane è sufficiente.

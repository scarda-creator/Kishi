---
type: spec
description: Tassonomia dei file di memoria della navicella — 9 tipi funzionali, stated|inferred, hook SessionStart
---

# Protocollo: tassonomia della memoria

Scritto da Mnemosyne. 2026-07-12.
Risponde al collaudo di `memoria-cerca.py --cheatsheet`: 92 file su 111 risultavano
"(senza tipo)" nel frontmatter, rendendo la cheatsheet cieca a SessionStart.

---

## 1. Criterio di tassonomia

Il criterio non è il livello di memoria (L1-L5 descrive la profondità, non la funzione
operativa), ma la **risposta alla domanda: cosa cerco quando apro una sessione?**

---

## 2. I 9 tipi funzionali

Applicati come campo `type:` nel frontmatter YAML di ogni file.

| Tipo | Domanda a cui risponde | File principali |
|------|------------------------|-----------------|
| `profilo` | Chi è Giuseppe, come pensa? | `profilo-giuseppe.md`, `come-penso.md` |
| `spec` | Com'è strutturata la navicella, come si fa X? | `architettura-v2.md`, `memoria-profonda.md`, tutti i protocolli |
| `stato` | Dove siamo adesso? | `snapshot-corrente.md`, `log-decisioni-memoria.md`, `parentesi-aperte.md` |
| `diario` | Chi sono io adesso (agenti attivi)? | `mnemosyne-diario.md`, `dedalo-diario.md` |
| `ricerca` | Cosa ho trovato fuori dalla navicella? | `ricerche-argonauta/`, `dedalo/ricerca-github/` |
| `visione` | Dove stiamo andando? | `roadmap-*.md`, `dedalo/*-visione*.md`, `oroboro-direzione.md` |
| `memoria` | Cosa so di Giuseppe in profondità (L3-L5)? | `memoria/L3-strategica.md`, tutto `memoria/L5-subconscio/` |
| `intake` | Cosa è entrato e non ancora elaborato? | tutto `intake/`, `intake-log/` |
| `archivio` | Cosa è già chiuso o storico? | `archivio-fondazione.md`, `chat-archive/`, `legacy/` |

### Regola di assegnazione

- Ogni file riceve **un solo tipo** — quello che descrive la sua funzione primaria.
- Se un file è a cavallo (es. un documento che è insieme spec e archivio), prevalge la
  funzione operativa corrente. Se non è più in uso attivo, è `archivio`.
- I file fuori da `00-capitano/` (moduli accademici, personali) non vanno tipizzati con
  questo schema: la cheatsheet serve la memoria della navicella, non il corpus accademico.
- I file nei `node_modules/` non vanno tipizzati — sono librerie esterne.

### Formato frontmatter

Minimale. Solo `type:`, opzionalmente `description:` se il titolo del file non è
self-explanatory.

```yaml
---
type: profilo
---
```

oppure

```yaml
---
type: memoria
source: inferred
description: Pattern emotivi — interpretazioni del Capitano
---
```

---

## 3. Distinzione stated | inferred

Adottata dallo spirito del pattern Graphify (archi EXTRACTED vs INFERRED). Applicata
selettivamente, non a tutti i file.

**Regola:**
- File `L5-subconscio/`: aggiungere `source: inferred` nel frontmatter. Sono per
  definizione interpretazioni del Capitano, mai dichiarazioni dirette di Giuseppe.
- File `L3-strategica.md` e `L4-fondazionale.md`: la distinzione vive **inline** nel
  testo, non nel frontmatter (ogni voce mescola stated e inferred — il frontmatter
  sarebbe fuorviante). Convenzione opzionale per le voci future: prefissare con
  `[stated]` o `[inferred]` le affermazioni non ovvie. Non retrofit retroattivo.
- File auto-memory (`~/.claude/projects/.../memory/`): già tipizzati dal sistema con
  `type: user|project|reference|feedback`. Non modificare.
- Tutti gli altri file: `source:` non necessario — il tipo funzionale basta.

**Semantica:**
- `stated` = Giuseppe ha dichiarato esplicitamente (data, nome, scelta).
- `inferred` = il Capitano ha dedotto da pattern comportamentali, tono, ricorrenze.

---

## 4. Policy hook SessionStart

**Decisione:** la cheatsheet (`--cheatsheet`, ~133 token) viene iniettata a SessionStart
al posto della mappa piena (~14KB). La mappa piena si usa solo su richiesta esplicita.

**Ragionamento:** la cheatsheet dice "cos'è disponibile e come cercarlo" — è
orientamento, non contenuto. Caricare ~14KB di mappa a ogni apertura sarebbe sprecare
contesto su un indice che non servirà tutto. La cheatsheet permette di approfondire
su richiesta con `--query` o `--dettaglio`.

**Cablaggio tecnico** (da Dedalo, non da Mnemosyne):
Aggiungere in `.claude/settings.json`, sezione `hooks.SessionStart`, il comando:
```json
{"type": "command", "command": "python C:/Users/ACER/Desktop/AgentsAI/00-capitano/scripts/memoria-cerca.py --cheatsheet"}
```
Verificare che non entri in conflitto con gli hook SessionStart già esistenti (hook
della plancia, cattura-apprendimento). Se c'è conflitto, accodare — non sostituire.

**Come leggere la cheatsheet a SessionStart:**
L'output mostra le categorie ordinate per numerosità (il motore conta i file). Le
categorie più numerose non sono necessariamente le più urgenti. Ordine di priorità
operativa per Mnemosyne (non di numerosità): `profilo` > `stato` > `diario` > `spec`.
Le categorie `archivio` e `intake`, pur numerose, non richiedono lettura a inizio
sessione se non c'è una ragione specifica.

---

## 5. Manutenzione

- Ogni nuovo file in `00-capitano/` va tipizzato al momento della creazione.
- La tassonomia può essere estesa (nuovo tipo) se emerge una categoria nuova con almeno
  5 file. Decisione di Mnemosyne; log in `log-decisioni-memoria.md`.
- Il motore (`memoria-cerca.py`) legge `type:` dal frontmatter YAML — nessuna modifica
  al codice richiesta per aggiungere nuovi tipi.

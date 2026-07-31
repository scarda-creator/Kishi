---
type: intake
---

# [Cowork] Regola di Mnemosyne: notifica cambiamento strutturale

**Fonte:** Sessione Cowork del 2026-06-28
**Tipo:** regola operativa per l'agente Mnemosyne
**Rilevanza presunta:** **P2** — è una regola operativa (routine) più che una decisione fondazionale, ma va inserita in `capitano.md`

---

## Contesto

Emergendo la strategia dual-track manuale (README live + PDF snapshot on-demand), si è visto che il rischio operativo è dimenticarsi di rigenerare il PDF quando il sistema cambia strutturalmente. La soluzione: **Mnemosyne segnala automaticamente in chat quando è il momento di rigenerare**, senza farlo lei automaticamente (rispetto del controllo di Giuseppe).

## La regola da inserire in `capitano.md`

```
Riconoscimento cambiamento strutturale:
Quando una conversazione produce una modifica strutturale del sistema — 
nuovo agente, nuovo modulo, nuovo principio cementato registrato in 
archivio-fondazione.md, nuovo comando, nuovo protocollo — al termine 
della risposta suggerisci a Giuseppe una riga:

  "⚠️ Cambiamento strutturale registrato. Considera /genera-manuale per 
  snapshot PDF aggiornato."

Non rigenerare mai automaticamente. La decisione resta di Giuseppe.
```

## Cosa NON scatena la notifica

- Modifiche a file di dominio (es. nuovo capitolo libro Meccanica)
- Note quotidiane, journaling, quiz
- Interazioni operative routine

## Cosa SÌ scatena la notifica

- Creazione o rinomina di un agente
- Creazione o rinomina di un modulo (`0N-<nome>/`)
- Nuovo slash command
- Nuovo protocollo in `00-capitano/protocolli/`
- Voce datata aggiunta in `archivio-fondazione.md`
- Modifica sostantiva a `profilo-giuseppe.md`, `come-penso.md`, `architettura-v2.md`, `memoria-profonda.md`

## Estrazione per il sistema

- **P2 → operativa**: aggiungere alla sezione "Regole" o "Ruolo di interprete L5" di `.claude/agents/capitano.md` come regola procedurale
- Non merita voce in `archivio-fondazione.md` (è meccanica di manutenzione, non decisione filosofica)

## Destino file originale

**ELIMINA** dopo cernita.

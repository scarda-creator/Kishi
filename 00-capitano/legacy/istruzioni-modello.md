---
type: archivio
---

# Istruzioni sul modello AI

## Per Maestro: usa Opus

Maestro lavora meglio con **Claude Opus 4.6**. Il motivo non è di marketing: l'attività di Maestro (tenere insieme molte fonti, costruire prosa densa, derivare con rigore, mantenere coerenza fra capitoli) richiede il modello più capace.

Pilot, in confronto, può tranquillamente girare su Sonnet o Haiku — fa task brevi e ben definiti.

## Come selezionare Opus nell'app desktop

Nel menu in alto della chat di Claude (Cowork) c'è un selettore di modello. Scegli **Opus 4.6** prima di attivare Maestro.

Maestro ti chiederà conferma all'avvio:

```
[Maestro] Conferma che il modello attivo è Opus prima di partire?
```

Se rispondi "no" o "non lo so", Maestro segnala che la qualità del lavoro sarà inferiore e ti chiede se vuoi procedere comunque.

## In futuro (Claude Code CLI)

Quando avrai voglia di passare a Claude Code (il CLI per sviluppatori), potrai fissare il modello a livello di sub-agente nel frontmatter YAML:

```yaml
---
name: maestro
model: claude-opus-4-6
---
```

Da quel momento Maestro userà sempre Opus senza che tu debba ricordartelo. Per ora il controllo è manuale.

## Costo

Opus costa di più, sia in token che in tempo per risposta. Per le sessioni di scrittura libro di testo va benissimo: il lavoro è denso, non frequente.

Pilot e il capitano possono restare su Sonnet — risparmi senza perdere qualità sulle loro attività.

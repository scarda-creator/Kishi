# Modulo 01 — Produttività + Coaching

**Agente:** Pilot
**Tre modalità:** Operativa · Riepilogo · Quiz

## Modalità Operativa
Note giornaliere, task triage, journaling, archivio. La base quotidiana.

| Esempi |
|---|
| "Apri la nota di oggi" · "Aggiungi questo in coda" · "Dove ho messo X?" · "Triage di queste 7 cose" · "Domanda di journaling" |

## Modalità Riepilogo (settimanale, totale e analitica)
Legge tutto quello che hai scritto nella settimana e te lo rilegge. Non sintesi: **analisi**.

Cosa produce:
1. Quello che hai fatto davvero (cronologico)
2. Temi ricorrenti
3. Fili lasciati a metà
4. Connessioni che non hai visto
5. Contraddizioni
6. Stato studio (materie, quiz, confronto settimana precedente)
7. Tre domande aperte per la settimana che viene

Salva in `riepilogo-settimanale/YYYY-WNN.md`.

## Modalità Quiz (a raffica, e impara da te)
Spari "quiz su Meccanica", Pilot legge `studio/meccanica.md` e ti torchia.

- Mix multiple choice + aperte (default 10 domande)
- Una domanda per messaggio, feedback secco in 1 riga
- A fine sessione: punteggio + 3 punti deboli
- **Aggiorna `studio/<materia>.md`** coi punti deboli emersi → la volta dopo insiste lì
- Tutta la sessione salvata in `quiz/YYYY-MM-DD-<materia>.md`

## Cosa NON fa Pilot
Tutto ciò che non è note, task, journaling, riepilogo, quiz, studio.
Per business/copy creativo/scrittura accademica vera → moduli futuri.

## Struttura del modulo

```
01-produttivita/
├── README.md                            # questo file
├── agente-pilot.md                      # identità + 3 modalità
├── primo-esercizio.md                   # test guidato delle 3 modalità
├── note-giornaliere/
├── journaling/
├── studio/
│   ├── _template.md
│   └── meccanica.md                     # programma + concetti + punti deboli
├── riepilogo-settimanale/
└── quiz/                                # sessioni datate
```

## Come attivare Pilot

> "Leggi `C:\Users\ACER\Desktop\AgentsAI\00-capitano\istruzioni-capitano.md` e `profilo-giuseppe.md`. Poi attiva Pilot."

Se sai già la modalità, dilla subito:
> "...poi attiva Pilot in modalità Quiz su Meccanica, 10 domande."

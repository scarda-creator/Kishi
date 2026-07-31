---
type: intake
---

# [Cowork] Workflow: come tarare studio/<corso>.md sugli esami reali

**Fonte:** Sessione Cowork del 2026-06-28
**Tipo:** pattern operativo per il ciclo di preparazione di un corso
**Rilevanza presunta:** **P2** — pattern operativo replicabile, non decisione fondazionale

---

## Contesto

Discussione operativa sulla preparazione del quiz di Geometria. Emergono due strade: quiz "a freddo sul programma" (generico) vs quiz "tarato sugli esami" (specifico del corso del docente). Giuseppe vuole il secondo — quello tarato. Si formalizza il workflow.

## Workflow operativo — 4 passi in Claude Code

```
1. /aggiungi-corso <Nome>              → crea struttura + studio vuoto
2. Carica 3-8 esami in banca-dati      → drag-drop manuale
3. /inventario <corso>                  → Argonauta cataloga
4. /mappa <corso>                       → Argonauta estrae tipi di esercizio ricorrenti
```

**Solo DOPO questi quattro passi**, si popola il file studio a due sezioni:

```
Mnemosyne, popola 01-personale/studio/<corso>.md con DUE sezioni distinte:

1. "Programma e teoria" — panoramica del programma
2. "Tipi di esercizio reali" — estratti DALLA MAPPA ESERCIZI

Sezione 2 NON include argomenti del programma che non compaiono nei miei 
esami. Quegli argomenti restano solo in sezione 1 (utili per orale).
Marca esplicitamente in sezione 1 ogni argomento "non visto in esercizi".
```

## Vantaggi del pattern

- **Quiz scritto** (`/quiz <corso>` con nota "solo sezione 2"): tarato sugli esami reali del docente, non generico
- **Quiz orale** (`/quiz <corso>` con nota "modalità orale, includi sezione 1"): include argomenti puramente teorici
- **Sedimentazione**: la mappa esercizi è riusabile per il libro di testo (Fase 3 workflow accademico)
- **Coerenza con divisione ruoli**: l'Argonauta produce la mappa (sedimentazione), il Demiurgo la usa quando serve

## Alternativa di massima fedeltà (quando non hai fiducia nel file studio)

Modalità "pesca-diretta": salta il file studio, il Demiurgo legge direttamente i PDF in banca-dati per ogni quiz. Più lenta per sessione, ma garantita — il quiz non può contenere niente che non sia letteralmente nei tuoi esami. Utile quando hai pochi esami e vuoi zero rischi di estrazione approssimata.

## Estrazione per il sistema

- **P2 → operativa**: da documentare come pattern operativo, non merita voce fondazionale
- **Da aggiungere al README** in "Flusso tipico per un nuovo corso" — arricchisce i passi esistenti con il pattern di popolamento studio a due sezioni
- **Da riflettere nell'agente-argonauta**: già fa mappa esercizi, questo pattern chiarisce che la mappa è consumata anche dal file studio, non solo dal libro di testo

## Destino file originale

**ELIMINA** dopo cernita.

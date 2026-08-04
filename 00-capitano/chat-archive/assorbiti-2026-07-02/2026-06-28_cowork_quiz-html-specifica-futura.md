---
type: intake
---

# [Cowork] Specifica futura di `/quiz-html <corso> [modalità]`

**Fonte:** Sessione Cowork del 2026-06-28
**Tipo:** roadmap tecnica emersa durante la generazione del primo quiz HTML
**Rilevanza presunta:** **P1** — pattern strutturale che verrà cementato come slash command

---

## Contesto

Il Demiurgo Accademico ha iniziato a generare quiz HTML standalone (v15 di Meccanica come riferimento estetico + engine). Attualmente si invocano in conversazione libera. Emerge il pattern comune che diventerà uno slash command dedicato dopo la validazione di 2+ quiz HTML funzionanti.

## Specifica cementanda

```
/quiz-html <corso> [modalità]
```

**Modalità:** `esercizi` (default) | `teoria` | `misto`

| Modalità | Contenuto | Uso |
|---|---|---|
| `esercizi` | Problem solving tipico dagli esami scritti | Preparazione scritto |
| `teoria` | Concetti, dimostrazioni, principi | Preparazione orale |
| `misto` | 50/50 esercizi + teoria | Studio generale |

**Pattern L1 + L2 obbligatorio per OGNI domanda:**
- **L1 — il perché**: motivazione, intuizione, principio sottostante
- **L2 — il come**: passaggio operativo, derivazione, applicazione

Sequenza L1 poi L2, non si passa alla successiva finché non hai risposto a entrambi.

**Per modalità `teoria`, sotto-modalità di interazione:**

| Sotto-modalità | UX | Quando |
|---|---|---|
| **Stecca** (default) | Timer soft, feedback secco, click veloce | Ripasso a raffica, tempi morti |
| **Lavagna** | Timer off, soluzione modello in LaTeX in overlay, autovalutazione onesta | Sessione dedicata con lavagna fisica |

Toggle Stecca/Lavagna in alto, cambia UX, contenuto invariato.

**Per modalità `teoria`, sei tipi di domanda:**
1. Concettuale multiple choice (stecca)
2. "Il teorema che dice..." — identificazione (stecca)
3. Sotto-domanda "e perché?" (L1+L2 obbligatorio)
4. Cloze dimostrazione — riempi passaggio mancante (stecca)
5. Ordinamento passaggi dimostrazione (stecca)
6. Lavagna dimostrazione completa (solo modalità Lavagna)

## Regole di cementazione

- **NON cementare come slash command finché non ci sono 2+ quiz HTML validati** (evita astrazione prematura)
- Reference esistenti: Quiz_Meccanica_v15.html (già in Desktop/Meccanica/), Quiz_Geometria_v1.html (in corso), Quiz_Meccanica_Orale_v1.html (in coda)
- La cementazione include: creazione `.claude/commands/quiz-html.md` + aggiornamento README + voce archivio-fondazione

## Estrazione per il sistema

- **P1 → L3-strategica**: specifica tecnica di lungo periodo, deve entrare nella memoria di orientamento
- Da riflettere anche in `02-accademico/demiurgo-lezioni.md` come pattern di nuovo formato deliverable (il Demiurgo lo aggiorna già quando genera quiz)

## Destino file originale

**ELIMINA** dopo cernita. L'informazione va in memoria.

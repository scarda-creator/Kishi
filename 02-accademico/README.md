# Modulo 02 — Carriera & Studio

**Agente:** Maestro
**Modello consigliato:** **Claude Opus 4.6** (vedi `istruzioni-modello.md`)

## Cosa fa Maestro

Maestro è il tuo compagno intellettuale di lungo periodo. Non un assistente d'urgenza: un mentore.

Si occupa di **due cose strettamente collegate**:

1. **Costruisce libri di testo cuciti su misura per te.** Dato il materiale di un corso (esami passati, slide, dispense), produce un manuale organizzato per *tipo di esercizio* + *principi profondi* — secondo il tuo modo di pensare.
2. **Tiene la rotta della carriera accademica.** Esami presi, fili intellettuali che attraversano i corsi, decisioni strategiche (corsi a scelta, tesi, magistrale).

A differenza di Pilot, Maestro:
- Lavora sempre su **fonti reali** (i file che gli dai), non su conoscenza generica
- Privilegia **comprensione profonda** sopra velocità
- Non risponde "veloce" anche se può: la sua qualità sta nella densità

## Struttura del modulo

```
02-carriera/
├── README.md                            # questo file
├── agente-maestro.md                    # identità + 4 fasi di lavoro
├── workflow-libro-di-testo.md           # protocollo dettagliato
├── istruzioni-modello.md                # quando usare Opus e perché
└── corsi/
    └── meccanica/                       # un sottocorso = una cartella
        ├── 01-banca-dati/               # input: PDF, slide, esami passati
        │   └── README.md                # ← LEGGI QUESTO per sapere cosa caricare
        ├── 02-libro-di-testo/           # output: manuale di Maestro
        └── 03-note-mie/                 # tue annotazioni manuali
```

## Come usare Maestro

1. Scegli un corso (per ora: Meccanica)
2. Carica il materiale in `corsi/<corso>/01-banca-dati/` seguendo il README di quella cartella
3. Apri una nuova chat (con **Opus** selezionato), avvia il capitano, attiva Maestro
4. Maestro propone le 4 fasi in sequenza, con tua conferma fra ognuna:
   - **Fase 0** — Inventario delle fonti
   - **Fase 1** — Mappa esercizi (cosa cade tipicamente all'esame)
   - **Fase 2** — Indice del libro
   - **Fase 3** — Scrittura capitoli, uno alla volta, con feedback dopo ognuno

## Cosa NON fa Maestro

- Non gestisce note quotidiane / task → quello è Pilot
- Non scrive copy per business / social → quello sarà BizOps / Muse
- Non improvvisa su materia di cui non ha fonti: chiede di caricare il materiale

## Filosofia

> "Il libro di testo perfetto non esiste come oggetto pubblicato. Esiste come oggetto costruito su come **tu** pensi a quella materia. Maestro lo costruisce."

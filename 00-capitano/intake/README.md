---
type: spec
---

# Intake — il punto di assorbimento della navicella

> Cartella dove Giuseppe lascia cadere **qualsiasi cosa** che vuole sia assorbita dalla navicella: estratti da altre chat AI, piani scritti altrove, screenshot, PDF, note random, link, fotografie di lavagne.
>
> La navicella la processa periodicamente (o su richiesta) classificando, estraendo, integrando nella memoria appropriata.

---

## Come si usa (per Giuseppe)

**Regola unica:** se trovi qualcosa che pensi possa servire alla navicella e non sai dove metterlo, mettilo qui. Senza pensare. Lo classifica lei dopo.

Formati accettati: `.md`, `.txt`, `.pdf`, `.png/jpg` (screenshot), `.json`, `.html` (chat esportate), file di qualsiasi tipo che contenga testo o immagine leggibile.

**Convenzione minima per il nome del file**, se hai voglia di metterla (non obbligatorio):
- `YYYY-MM-DD_<contesto>_<breve-descrizione>.<ext>`
- Esempi:
  - `2026-06-25_chatgpt_riflessione-su-tesi.md`
  - `2026-06-25_notion_piano-settimana-prossima.md`
  - `2026-06-25_lavagna_dimostrazione-cauchy.jpg`

Se metti solo il nome generico (es. `incolla-qui.md`), il sistema ci darà comunque un'occhiata.

## Come si usa (per gli agenti)

Quando Giuseppe invoca `/intake` (o automaticamente con un trigger periodico, vedi `protocolli/protocollo-intake.md`):

1. **Rapsodo** apre la cartella, classifica ogni file in P1 (sostantivo) o P2 (routine), estrae il contenuto rilevante
2. **Capitano** decide il livello di memoria appropriato per ogni estratto (L2, L3, L4 candidato, L5/pattern-longitudinali, L5/storica)
3. Ogni file processato viene spostato in `00-capitano/intake-processed/YYYY-MM-DD/` insieme a un file `intake-log-YYYY-MM-DD.md` che documenta cosa è stato fatto

Non si cancella mai nulla. L'originale resta in `intake-processed/`, gli estratti vivono nei file di memoria pertinenti.

---

## Esempi di cosa metterci

| Cosa | Esempio concreto |
|---|---|
| Estratti da altre chat AI | Conversazione con ChatGPT sulla tesi → copy-paste in `.md` |
| Piani scritti altrove | Schermata Notion del piano settimanale → screenshot |
| Documenti di studio esterni | PDF di un paper letto → drop diretto del file |
| Riflessioni personali | Note vocali trascritte, journaling fatto su carta digitalizzato |
| Conversazioni significative | Email importante, messaggio Whatsapp che vale, ecc. |
| Materiale visivo | Lavagne fotografate, schemi, mappe mentali a mano |

## Cosa NON è intake

- Materiali di studio per un corso specifico → vanno in `02-accademico/corsi/<corso>/01-banca-dati/`
- Materiali esterni che il Demiurgo deve leggere come fonti → `Materiali-studio/`
- Note giornaliere strutturate → `01-personale/note-giornaliere/`

Intake è per **cose che ancora non sai dove vanno**. È il punto di ingresso prima della classificazione.

---

## Stato della cartella

Vuota = navicella aggiornata.
Piena = c'è materiale da assorbire (Rapsodo lo segnala al prossimo `/intake` o al riepilogo settimanale).

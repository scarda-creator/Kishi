---
type: spec
tema: manutenzione-memoria
data: 2026-07-15
autore: Mnemosyne (su referto Rapsodo rapsodo-analisi-memoria-2026-07-15.md)
stato: PROPOSTA — attende go di Giuseppe sui tier direzionali
---

# Piano di pulizia della memoria — 2026-07-15

## Diagnosi in una riga
Lo spreco della navicella **non è duplicazione** (dedup reale ≈ 0): è **stratificazione
temporale non marcata** — visioni e ricerche pre-costruzione ancora tra i file vivi,
senza segnale che l'evento che le ha superate è già accaduto (la plancia è costruita).
Vincolo: niente oblio. Ogni azione è dedup/archiviazione/marcatura, **mai delete**.

---

## TIER 0 — Igiene pura (reversibile, nessuna direzione — eseguibile subito su "vai")

**A. Bug encoding della coda di apprendimento.**
`scripts/cattura-apprendimento.py` scrive `coda-apprendimento.jsonl` in doppia codifica
UTF-8 (mojibake: `cosÃ¬`, `Ã¨`). Fix: forzare `encoding="utf-8"` in scrittura + bonificare
le 3 righe esistenti. Poi processare la coda con `/riflessione` (compito standard di
Mnemosyne; l'hook di sessione lo richiede già). NB: una delle 3 catture è questa stessa
conversazione — la riflessione la assorbe.

**B. Indice gonfiato da `legacy/`.**
`scripts/memoria-cerca.py` riga 92 fa `rglob("*.md")` senza esclusioni → i 5 file v1 in
`00-capitano/legacy/` entrano nell'indice "122 voci" e possono affiorare in una `--query`
contraddicendo il CLAUDE.md attuale (es. `legacy/istruzioni-capitano.md`). Fix: 3 righe per
escludere `legacy/` e `scripts/node_modules/` dal rglob.

## TIER 1 — Archiviazione stratigrafica (marca lo strato; serve ok su "genesi chiusa")

Creare `00-capitano/archivio/` e MIGRARE (git mv, non delete) i file superati da eventi:

| File canonico (resta vivo) | File assorbibile → destinazione | KB |
|---|---|---|
| dedalo/plancia-blueprint.md | roadmap-interfaccia-grafica.md → archivio/genesi-plancia/ | 16 |
| CLAUDE.md + dedalo-diario.md | roadmap-architetto-business.md (Parte 1) → archivio/ | ~6 |
| (ramo dormiente) | roadmap-kishi-embodiment.md → archivio/rami-dormienti/ | 11.8 |
| MEMORY.md (da correggere) | project_navicella.md (dice 4 agenti, sono 6) → aggiornare o marcare superseded | ~2 |

Restano VIVI (differiti/futuri, non obsoleti, per il Rapsodo): `navicella2d-visione.md`,
`navicella-mobile-visione.md` (framing da correggere, vedi Tier 2), `ricerche-argonauta/03-navicella-2d.md`,
`02-fable-navicella.md` (è ricerca modelli, misclassificato come GUI). Stima migrabile: ~44KB, 8 file, tutto archiviazione.

## TIER 2 — Cicli aperti (DECISIONI di Giuseppe — Mnemosyne non le chiude)

1. **Tauri+Svelte vs React/FastAPI.** `roadmap-interfaccia-grafica.md` cementa Tauri+Svelte
   come "decisione netta"; la plancia è costruita in React/FastAPI. Nessun file ha chiuso il
   ciclo. → Cementare React/FastAPI come spec canonica e archiviare la roadmap Tauri?
2. **Framing "due relazioni" mobile/PC.** Giuseppe ha già corretto il 2026-07-13 in
   plancia-blueprint.md con "→ Mnemosyne ri-cementi in memoria". L'istruzione NON è stata
   propagata nei file di visione (`navicella2d-visione.md`, `navicella-mobile-visione.md`).
   → **Debito di Mnemosyne**: propagare la correzione già decisa (dentro mandato, non nuova
   direzione). Eseguibile su conferma.
3. **Kishi/tengrismo.** Le domande esplicite di `roadmap-kishi-embodiment.md` non hanno mai
   ricevuto risposta registrata. → Rispondere ora o archiviare il ramo come dormiente?

## Fuori perimetro (segnalato, non toccato)
- **Drift del registro agenti**: la lista di dispatch espone i nomi v1 (rapsodo-accademico/
  personale, argonauta-*, demiurgo-personale) mentre le def v2 (`rapsodo.md`, `argonauta.md`,
  `architetto.md`) esistono. È struttura/direzione → decisione di Giuseppe+Dedalo, non pulizia.

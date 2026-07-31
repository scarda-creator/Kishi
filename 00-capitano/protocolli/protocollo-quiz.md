---
type: spec
---

# Protocollo quiz — costruzione e verifica standardizzata

> Come la navicella costruisce un quiz per una materia, senza ripartire da zero
> ne' ri-guardare l'HTML di un corso precedente. Nato il 2026-07-07 dopo il
> secondo quiz (Geometria → Analisi Vettoriale): al secondo giro il pattern era
> chiaro, quindi va reso asset. Estende [[protocollo-corpus-pdf]].

## Principio guida — modulare ma non stantìo

Standardizzare le parti MECCANICHE (motore, schema dati, verifica), lasciare VIVE
le parti che devono adattarsi (contenuto, pedagogia, priorità sui punti deboli).
Il blueprint non è una gabbia: è un punto di partenza versionato e revisionabile.
Due regole anti-ossificazione:
1. **Aggiustamenti mirati sempre possibili** — a livello di singola domanda, di pool,
   di materia, e del percorso di studio. Non serve rifare tutto per cambiare poco.
2. **Il blueprint stesso evolve** — se una materia costringe a inventare fuori dal
   template (una figura, un tipo di interazione, un rendering nuovo), quello è un
   segnale di miglioramento del template, non un'eccezione da nascondere. Chi
   costruisce lo segnala; Mnemosyne (o Dedalo, quando si occupa di forma) aggiorna
   il template e ne alza la versione.

## Gli asset (dove vivono)

| Asset | Path | Chi lo tocca |
|---|---|---|
| Template motore (CSS+JS+KaTeX, senza dati) | `00-capitano/templates/quiz-template.html` | Mnemosyne / Dedalo (forma) |
| Verificatore automatico | `00-capitano/scripts/quiz_verifica.js` | Mnemosyne |
| Assemblatore frammenti | `00-capitano/scripts/quiz_assembla.js` | Mnemosyne |
| Estrazione testo corpus | `00-capitano/scripts/pdf_estrai_testo.py` | Mnemosyne |

**Architettura a frammenti (build grandi).** Ogni pool vive in `<corso>/banca-esercizi/frags/<id>.js`
come `Q.<id> = [...]` (fonte di verità). I Demiurghi costruiscono UN frammento ciascuno (nessuna
collisione sull'HTML, parallelizzabile a batch), poi Mnemosyne assembla:
`node 00-capitano/scripts/quiz_assembla.js <quiz.html> <frags-dir>` → verifica → deploy.
Un aggiustamento mirato = edita il frag del pool, riassembla, verifica, deploy.

Il template è la fonte di verità del motore. I quiz dei corsi sono ISTANZE del
template: NON si clona più l'HTML di un altro corso.

## Pipeline (ordine fisso)

1. **Corpus → testo** — Mnemosyne: `pdf_estrai_testo.py` sui PDF in `01-banca-dati`
   (vedi [[protocollo-corpus-pdf]]). Testo leggero in `_txt/`.
2. **Testo → mappa esercizi** — Argonauta (Read-only) legge i `.txt` in passate
   dimensionate e produce `banca-esercizi/bNN.md`; Mnemosyne fonde in
   `banca-esercizi/mappa-esercizi.md` (piano-pool: tipi, frequenza, priorità,
   trappole, teoremi). Incrociare con eventuale teoria/manuale del corso.
3. **Mappa → quiz** — Demiurgo Accademico: parte da `quiz-template.html`, riempie
   SOLO la zona dati (POOLS + Q) seguendo lo schema del template. Un pool per tipo
   di esercizio. Su corpora grandi, costruire pool per pool (status `todo`→`full`).
   **Densità target**: per un build COMPLETO, ≥30 domande per pool (banca vera, non
   campione). Un conteggio piccolo (~5) è accettabile SOLO per un build di collaudo
   che verifica il motore/blueprint; poi si densifica per pool via aggiustamento mirato.
4. **Verifica** — Mnemosyne: `node 00-capitano/scripts/quiz_verifica.js <quiz.html>`.
   Un build NON è finito finché la verifica non dà PASS (exit 0).
5. **Deploy** — pubblicazione su GitHub Pages (una repo per corso, vedi memoria
   sync GitHub). KaTeX è via CDN: compatibile con Pages. NON versionare `_txt/`.

## Composizione di ogni pool (standard — Giuseppe)

Densità target per un build completo: **30-35 unità per pool**. Ogni pool mescola TRE nature:
- **~metà concettuali**: comprensione teorica; distrattori = misconcezioni. Servono a capire.
- **~metà esercizi**: calcolo reale; la `sol` SPIEGA i passaggi (la strada) e cita il teorema.
- **≥2 "modus operandi"** per pool: domande sulla STRATEGIA di attacco dell'esercizio — qual è
  il primo passo, quale teorema/criterio invocare, in che ordine, come riconoscere il tipo. Non
  un calcolo: la procedura decisionale. È il meta-livello che insegna *come* si risolve.
- Includere **domande più complesse** (multi-passo, casi limite, combinazioni di più criteri),
  non solo il livello base.

Teoremi citati esplicitamente in ogni soluzione (regola dura, come in Geometria). Priorità sui
punti deboli dichiarati di Giuseppe → più esercizi e più graduati su quei pool.

## Schema dati (contratto — lo verifica lo script)

```
POOLS = [ { id, name, diff, status:'full'|'todo' } ]     // ordine = menu
Q.<id> = [ unit, ... ]
unit  = { pool, src, steps:[ step, ... ] }               // >1 step = domanda graduata
step  = { t, opts:[{x, c?}], hint, sol, cont? }
```
- `opts`: ≥2 opzioni, ESATTAMENTE una `c:true`. Distrattori = trabocchetti reali dai compiti.
- `hint`: punta all'errore, non ripete la domanda. `sol`: cita esplicitamente il
  teorema/criterio (regola dura del Demiurgo Accademico).
- `src`: origine (data del compito reale, o "tipo X · manuale").
- Matematica in LaTeX `$...$` / `$$...$$` (la rende KaTeX). Entità HTML solo per il
  testo (accenti). Stringhe a doppi apici → backslash raddoppiati.

## Verifica — cosa garantisce quiz_verifica.js

Sintassi JS · POOLS/Q ben formati · ogni pool `full` ≥ min domande (default 3) ·
ogni step ≥2 opzioni e 1 sola corretta · delimitatori `$` bilanciati · OGNI formula
LaTeX parsa senza errori KaTeX · KaTeX collegato nell'head. Exit 0 = PASS, 1 = FAIL.
Auto-installa KaTeX se assente. Uso: `node ... quiz_verifica.js <html> [--min N]`.

## Aggiustamenti mirati (il sistema che si aggiusta)

- **Singola domanda sbagliata/da affinare**: Edit diretto sul campo (t/opts/hint/sol),
  poi ri-verifica. Nessun rebuild.
- **Estendere un pool / passare un pool da `todo` a `full`**: dispatch mirato al
  Demiurgo su quel pool, poi verifica.
- **Ricalibrare sui punti deboli / sul percorso**: la mappa-esercizi e le priorità
  dei pool si aggiornano quando cambiano l'esame, il programma o i punti deboli
  dichiarati da Giuseppe. Il quiz segue.
- **Evolvere il motore**: modifica `quiz-template.html`, alza la versione, ri-verifica
  i quiz esistenti col medesimo script. I corsi ereditano il miglioramento al
  prossimo build (o via retrofit, se vale).

## Divisione del lavoro (invariante)

- **Mnemosyne**: pipeline, script, template, fusione mappa, verifica, deploy.
- **Argonauta**: lettura corpus + mappa esercizi (mai PDF grezzi, mai costruisce).
- **Demiurgo Accademico**: UNICO costruttore del contenuto nel template.
- **Dedalo** (quando convocato): forma/UX/estetica del template, evoluzioni audaci
  del motore.

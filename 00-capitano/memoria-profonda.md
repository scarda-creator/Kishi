---
type: spec
---

# Memoria profonda — spec dei 5 livelli

> Compagno di `architettura-v2.md`. Definisce in dettaglio cosa va in ogni livello, chi vi accede, come si promuove, come si migra.
> Principio cardine: **niente oblio**. Tutto si conserva. La stratificazione è per profondità di rilevanza, non per scadenza.

---

## I cinque livelli — definizione e contenuto

### L1 — Conversazione corrente
**Cos'è:** la chat in corso. Volatile per definizione.
**Volatilità:** ephemerale (fine sessione = svanita dal contesto attivo).
**Dove vive:** nel contesto di Claude Code mentre la sessione è aperta.
**Cosa contiene:** richieste, risposte, scambi che non hanno ancora superato la soglia per essere classificati altrove.

### L2 — Operativa
**Cos'è:** memoria della settimana in corso e poco più. Note quotidiane, journaling, materiali aggiunti, riepiloghi recenti.
**Volatilità:** settimanale.
**Dove vive:** 
- `01-personale/note-giornaliere/YYYY-MM-DD.md`
- `01-personale/journaling/YYYY-MM-DD.md`
- `01-personale/quiz/YYYY-MM-DD-<materia>.md`
- `01-personale/riepilogo-settimanale/YYYY-WNN.md`
- `02-accademico/corsi/<slug>/01-banca-dati/*`
**Cosa contiene:** fatti recenti, task triage, esercizi, materiali freschi, dialoghi di giornata.

### L3 — Strategica
**Cos'è:** memoria di mesi. Decisioni grandi, traiettoria, pattern longitudinali confermati nel medio periodo.
**Volatilità:** mensile (rilettura nel riepilogo mensile).
**Dove vive:** `00-capitano/memoria/L3-strategica.md` (file lungo, datato, append).
**Cosa contiene:**
- Decisioni accademiche prese (es. "marzo 2026: scelta corsi terzo anno Astrofisica + Geom Diff")
- Cambi di direzione (es. "aprile 2026: tema tesi consolidato su MQ sistemi complessi")
- Pattern di lavoro stabilizzati (es. "lavora meglio mattine + serata")
- Reality check storici (es. "Meccanica andava lenta a marzo, ripresa a maggio con metodo X")
- Eventi formativi di rilievo (es. "primo capitolo libro Metodi: feedback ricevuto: troppo formale, calibrato Y")

### L4 — Fondazionale cosciente
**Cos'è:** chi Giuseppe **dichiara** di essere. Identità articolata, valori espliciti, stella polare di lungo periodo.
**Volatilità:** annuale (cambia raramente, in modo consapevole).
**Dove vive:** 
- `00-capitano/profilo-giuseppe.md` (anagrafica, percorso, decisioni cementate)
- `00-capitano/come-penso.md` (modello cognitivo)
- `00-capitano/memoria/L4-fondazionale.md` (file di evoluzione: voci datate che aggiornano L4)
**Cosa contiene:**
- Identità ("studente di Fisica, II→III anno Sapienza")
- Valori dichiarati ("voglio una tesi che abbia un'idea forte")
- Decisioni cementate ("Meccanica non slitta a febbraio")
- Pattern cognitivi documentati ("first principles, non procedure")
- Visione di lungo periodo ("fisica teorica + meccanica statistica")

### L5 — Subconscio / analisi psicologica profonda
<!-- riservato -->
<!-- Contrassegnata da Dedalo il 2026-07-22, trovando il buco con una prova: il flag sulla
     cartella L5-subconscio regge, ma questa sezione — che DESCRIVE L5 — cita esempi
     psicologici su Giuseppe («paura di non essere all'altezza di certi mentori», «ritiro
     2-4 giorni dopo feedback critico») e usciva nell'iniezione automatica. La sezione resta
     leggibile da chiunque apra il file: smette solo di essere servita d'ufficio a un agente
     che non l'ha chiesta. Se Mnemosyne ritiene che la spec debba circolare intera, tolga
     questa riga: e' una riga sola, ed e' una decisione sua. -->
**Cos'è:** chi Giuseppe **è sotto la superficie**. Pattern emotivi, motivazioni inconsce, paure non nominate, drives profondi, conflitti interni. **Non è cestino — è substrato.**
**Volatilità:** lenta. Evolve nei mesi.
**Dove vive:**
```
00-capitano/memoria/L5-subconscio/
├── psicologica/             ← cuore vivo (interpretazione del Capitano)
│   ├── pattern-emotivi.md
│   ├── motivazioni-profonde.md
│   ├── paure-non-nominate.md
│   ├── conflitti-interni.md
│   └── osservazioni-emergenti.md
├── pattern-longitudinali/   ← osservazioni raw del Rapsodo non ancora interpretate
└── storica/                 ← L2/L3 vecchi archiviati, conservati per principio
```

**Cosa contiene psicologica/:**
- Pattern emotivi ricorrenti (es. ritiro 2-4 giorni dopo feedback critico accademico)
- Motivazioni profonde (perché vuole davvero la tesi forte: curiosità pura, riconoscimento, competizione...)
- Paure non nominate (paura di non essere all'altezza di certi mentori, ecc.)
- Drives (cosa lo accende, cosa lo svuota)
- Conflitti interni (ambizione vs sostenibilità, autonomia vs appartenenza)

**Cosa contiene pattern-longitudinali/:**
- Osservazioni raw del Rapsodo, non ancora interpretate. Es. "marzo: 3 disimpegni post-feedback negativo. aprile: 2 sessioni studio interrotte di lunedì."

**Cosa contiene storica/:**
- Contenuto L2 più vecchio di 6 mesi non promosso a L3/L4 e senza segnali psicologici. Archiviato per principio (niente oblio), non analizzato di routine.

---

## Accesso degli agenti

| Agente | L1 | L2 | L3 | L4 | L5/psicologica | L5/pattern | L5/storica |
|---|---|---|---|---|---|---|---|
| **Capitano** | RW | R | RW | RW | **RW (interprete)** | R | R |
| **Rapsodo** | RW | RW | R | R | — | **RW (osserva)** | — |
| **Demiurgo Accademico** | RW | RW | R | R | — | — | — |
| **Argonauta** | RW | R | R | R | **Filtrato dal Capitano** | — | — |
| **Oracolo (futuro)** | RW | RW | R | R | — | — | — |

**Filtrato dal Capitano** = l'Argonauta non legge direttamente i file di L5/psicologica. Riceve, ad ogni invocazione, un "framework prompt" che il Capitano costruisce includendo gli estratti rilevanti di L5/psicologica per il lavoro di traiettoria.

---

## Protocollo di promozione

### L1 → L2 (automatica)
- Le note che Giuseppe scrive nella giornata sono già in L2 (file su disco)
- Le risposte di sessione che sono fatti utili (decisioni operative) vengono archiviate dal Demiurgo o dal Rapsodo nelle cartelle pertinenti

### L2 → L3 (escalation del Rapsodo + decisione Capitano)
Trigger: il Rapsodo classifica P1 (sostantivo) un input. Esempi:
- Decisione presa esplicita
- Cambio di direzione
- Pattern visto N≥3 volte
- Contraddizione con il passato

Procedura:
1. Rapsodo prepara **dossier** (contenuto, criterio L3/L4, riferimento storico, novità)
2. Escala al Capitano
3. Capitano decide: L3 (strategica) o L4 (fondazionale candidato)
4. Se L3 → scrittura asincrona in `memoria/L3-strategica.md` con data e contesto
5. Loggato in `log-decisioni-memoria.md`

### L3 → L4 (mai automatica — richiede conferma)
Una decisione fondazionale non si fa al volo. Procedura:
1. Capitano segnala candidato L4 quando vede pattern stabile per mesi
2. Chiede a Giuseppe **in chat** o lascia **pending decision** in `log-decisioni-memoria.md` per la prossima sessione
3. Solo conferma esplicita di Giuseppe (in chat o tramite `/promuovi-l4 <tema>`) attiva la scrittura in `memoria/L4-fondazionale.md`
4. `profilo-giuseppe.md` viene aggiornato di conseguenza se rilevante

### L2/L3 → L5/storica (migrazione, mai cancellazione)
Trigger: contenuto in L2 più vecchio di **6 mesi** mai promosso e senza segnali psicologici.
Esecuzione: passata mensile del Capitano in background.
Esempio: nota giornaliera del 1 gennaio 2026, non riferita in nessun riepilogo successivo, nessun pattern → spostata in `L5/storica/2026-01/`.
Resta consultabile su richiesta esplicita o quando emerge rilevanza.

### Verso L5/psicologica (interpretazione del Capitano)
Trigger: Rapsodo segnala in `L5/pattern-longitudinali/` un pattern visto N≥3 volte.
Esecuzione: passata interpretativa del Capitano ogni **2-3 settimane** (su soglia di volume, non a calendario fisso).
Output: voce in `psicologica/<tema>.md`.

**Forma della voce in psicologica/**:
```markdown
## Pattern: <titolo conciso>
Osservato in: <quante sessioni / quando>
Pattern (descrizione raw): <cosa succede>
Possibile lettura (interpretazione del Capitano): <ipotesi onesta>
Affidabilità: bassa / media / media-alta / alta (N occorrenze coerenti)
Implicazioni per gli agenti: <eventuali>
Aggiornato: YYYY-MM-DD
Contestabile da: Giuseppe (`/correggi-l5 <tema>`)
```

---

## Riemersione da L5

Il Capitano legge L5 in modo selettivo, non lineare:

- **L5/psicologica/** → rilettura attiva ogni inizio sessione (passata veloce per richiamare framework su Giuseppe)
- **L5/pattern-longitudinali/** → letto periodicamente per identificare nuove voci da interpretare
- **L5/storica/** → letto **solo** quando il tema corrente richiama una sessione passata, su trigger associativo

**Riemersione associativa:**
Se in conversazione corrente emerge un tema che richiama L5/storica (es. Giuseppe parla di un esame e c'è una sessione di un anno fa con discussioni simili), il Capitano segnala: *"Questo richiama una sessione del 15 marzo 2026, vuoi che riemerga il contesto?"*. Mai forzato.

Comando esplicito: `/cosa-sai-su <tema>` invoca riemersione su richiesta.

---

## Memoria sensibile (salute mentale)

Vedi `protocolli/protocollo-memoria-sensibile.md` per dettagli.

Sintesi:
- Temi di salute mentale ricevono etichetta speciale alla classificazione
- **Non scendono mai automaticamente in L5/storica** — restano in L3 sempre disponibili
- Linguaggio del Capitano: diretto e responsabile, niente eufemismi, niente paternalismo
- Resta rispetto dei limiti di safety di base (no diagnosi cliniche, no incitamento a comportamenti dannosi)
- L5/psicologica/ è dove vivono le interpretazioni più sostantive su questi temi
- Privacy: la cartella `L5-subconscio/psicologica/` dovrebbe stare in `.gitignore` se la cartella AgentsAI viene mai sincronizzata altrove

---

## File snapshot — vista veloce per il Capitano

**`00-capitano/snapshot-corrente.md`** è un file compatto (≤2 pagine) che il Capitano aggiorna a fine sessione. Contiene:

```markdown
# Snapshot corrente — YYYY-MM-DD
Ultima sessione: <data>
Ultimo aggiornamento: YYYY-MM-DD HH:MM

## Stato presente
- Cosa Giuseppe ha in testa adesso (3 righe)
- Eventi recenti rilevanti (5 righe)

## Cosa è cambiato dall'ultima sessione
- Decisioni nuove
- Pattern segnalati
- Promozioni di memoria avvenute

## Pending decisions L4
- Candidati promossi che aspettano conferma di Giuseppe

## Salute della memoria
- L2: <N file> · ultimo aggiornamento
- L3: <N voci>
- L4: <N voci>
- L5/psicologica: <N pattern>
```

All'avvio sessione il Capitano legge questo invece di scorrere L1-L4 ogni volta. Risparmio cognitivo notevole.

---

## Log decisioni memoria

**`00-capitano/log-decisioni-memoria.md`** è append-only. Ogni riga = un evento:

```
2026-06-15 22:14 | RAPSODO escalation P1 | "decisione corsi terzo anno" | dossier id #042
2026-06-15 22:14 | CAPITANO promozione L3 | "decisione corsi terzo anno" | file L3-strategica.md aggiornato
2026-06-15 22:15 | CAPITANO candidato L4 | "tesi MQ sistemi complessi" | pending Giuseppe
2026-06-20 09:32 | GIUSEPPE conferma L4 | "/promuovi-l4 tesi MQ sistemi complessi" | profilo + L4-fondazionale aggiornati
2026-07-15 23:50 | CAPITANO interpretazione L5 | "pattern ritiro post-feedback" | psicologica/pattern-emotivi.md
2026-12-01 02:00 | CAPITANO migrazione L5/storica | 38 file L2 datati 2026-01..2026-05 | nessuna cancellazione
```

Tu puoi sempre verificare cosa è successo. Trasparenza completa.

---

## Comandi rilevanti per la memoria

### MVP (Fase 5 del refactor)

| Comando | Effetto |
|---|---|
| `/memoria-status` | Overview L1-L5: contatori, ultimi aggiornamenti, pending decisions |
| `/promuovi-l4 <tema>` | Conferma esplicita per promozione a fondazionale |
| `/analisi-psicologica [tema]` | Invoca passata interpretativa del Capitano su L5 |

### Roadmap post-MVP (non costruire ora)

Comandi previsti ma da implementare dopo le prime 2 settimane di uso reale, quando emergerà l'effettivo bisogno:

| Comando | Effetto |
|---|---|
| `/cosa-sai-su <tema>` | Capitano fa un riepilogo trasparente di tutta la memoria su un tema |
| `/correggi-l5 <tema>` | Contesta una voce in L5/psicologica/ — il Capitano rivede |
| `/dimentica-sessione` | Sessione corrente non viene archiviata nei file (resta solo in chat history Claude Code) |
| `/sigilla <tema>` | Marca un argomento come "non riprenderlo automaticamente" (resta in L5/storica, non riemerge senza richiesta esplicita) |
| `/riepilogo-mensile` | Capitano + Rapsodo producono analisi mensile profonda (richiede ≥4 settimane di dati) |

---

## Backup e recupero

`L4-fondazionale.md`, `profilo-giuseppe.md`, `come-penso.md`, `archivio-fondazione.md` sono i file più preziosi. Sono in git (la cartella AgentsAI dovrebbe essere git-versionata) — niente perdita possibile.

`L5/psicologica/` è il secondo strato più prezioso. **Niente sincronizzazione cloud automatica.** Resta locale.

`L5/storica/` può anche essere periodicamente esportato in archivi compressi se occupa troppo spazio — sempre con possibilità di riimport.

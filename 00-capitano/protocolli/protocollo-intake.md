---
type: spec
---

# Protocollo di intake — assorbimento di materiali esterni

> Definisce come la navicella processa la cartella `00-capitano/intake/` quando contiene file lasciati da Giuseppe.
> Trigger: comando esplicito `/intake` oppure passata automatica al riepilogo settimanale del Rapsodo.

---

## Principio cardine — distinzione fra memoria e rumore

Il principio "niente oblio" della navicella vale per la **memoria del sistema** (livelli L1-L5). **Non vale** per i file grezzi che passano dall'intake: copy-paste di chat, screenshot ridondanti, duplicati, materiale di passaggio.

L'intake fa **cernita**: dal file grezzo si estrae l'**informazione** che merita di entrare in memoria. L'informazione utile si conserva nella memoria (per sempre, secondo il principio). Il file grezzo può essere:
- Eliminato (la maggior parte dei casi — il file era un veicolo, l'informazione è ora in memoria)
- Spostato in una cartella più appropriata (Materiali-studio, banca-dati corso, chat-archive)
- Custodito verbatim solo se ha valore proprio oltre l'informazione estratta

Le decisioni di cernita sono **registrate nel log di processazione** (`intake-log/intake-log-YYYY-MM-DD.md`) — niente sparisce silenziosamente, ma niente si accumula come rumore.

---

## Trigger

Tre vie per attivare il protocollo:

1. **Esplicito** — Giuseppe digita `/intake` in Claude Code
2. **Periodico** — il Rapsodo, quando esegue il riepilogo settimanale (domenica sera o on-demand), controlla `intake/`; se ha contenuto, lo processa prima di scrivere il riepilogo
3. **On-demand intra-sessione** — qualsiasi agente che nota di avere `intake/` non vuota può segnalarlo al Capitano (`[Rapsodo → Capitano] intake/ contiene 3 file non processati`)

---

## Procedura

### Step 0 — Snapshot iniziale

Il Rapsodo legge `intake/`, conta i file, registra la lista. Se vuota: ritorna `[Rapsodo] intake vuota, niente da assorbire.` Fine.

Se piena: prosegue.

### Step 1 — Cernita per file

Per **ogni** file in `intake/` (escluso README.md):

1. **Apre il file** ed estrae il contenuto leggibile
   - `.md`, `.txt`: testo diretto
   - `.pdf`: estrai testo
   - `.png`, `.jpg`: OCR / vision per estrarre testo o descrivere
   - `.json`, `.html`: parse del contenuto significativo

2. **Cernita informazione per informazione.** Un singolo file può contenere 3 informazioni utili e 5 inutili — il Rapsodo le tratta separatamente. Per ogni unità di informazione:
   - **Vale la pena conservarla?** Criteri di utilità:
     - Decisione, intuizione, riflessione sostantiva
     - Pattern, contraddizione, evoluzione di pensiero
     - Materiale tecnico (formula, esercizio, schema) di valore durevole
     - Connessione con la traiettoria di Giuseppe (tesi, magistrale, percorso)
     - Stato emotivo significativo (per L5)
   - **Criteri di scarto:** ridondanza con materiale già in memoria, contenuto generico non personalizzato, screenshot casuali senza informazione nuova, materiale già coperto da fonti migliori.

3. **Classifica le informazioni utili** in P1 (sostantivo) o P2 (routine):
   - **P1**: decisione, emozione forte, pattern nuovo, riflessione profonda, contraddizione → escalation al Capitano per livello di memoria fine
   - **P2**: appunto operativo, dato di breve uso → diretto in L2

4. **Estrai e formula** il contenuto pronto per la memoria (sintesi 3-10 righe, citazioni testuali dove servono).

### Step 2 — Decisione sul destino del file originale

Per ogni file processato, il Rapsodo decide una delle quattro azioni:

| Azione | Quando | Cosa fare |
|---|---|---|
| **ELIMINA** | File era veicolo, l'informazione utile è già in memoria, nessun valore verbatim residuo | Cancella il file. Registra nel log cosa è stato eliminato e perché |
| **CUSTODISCI verbatim** | Il file ha valore proprio oltre l'informazione estratta (es. conversazione emotivamente densa, immagine di una dimostrazione, citazione che merita di essere riletta) | Sposta in `00-capitano/chat-archive/YYYY-MM-DD_<descrizione>.<ext>` |
| **SPOSTA verso modulo** | Il file è materiale di studio o fonte esterna | Sposta nella cartella appropriata: `02-accademico/corsi/<corso>/01-banca-dati/`, `02-accademico/corsi/<corso>/03-note-mie/`, o `Materiali-studio/` |
| **LASCIA in intake + flag DECISIONE** | Cernita dubbia, il Rapsodo vuole conferma di Giuseppe | Lascia il file in `intake/`, segnala nel log "richiede decisione di Giuseppe" |

Il **default è ELIMINA**. La conservazione è eccezione consapevole, non automatismo. Solo così evitiamo l'accumulo.

### Step 3 — Promozione delle informazioni utili (per i P1)

Il Capitano riceve i dossier P1 dal Rapsodo (vedi `protocollo-promozione.md`). Per ogni informazione P1:

1. Decide il livello finale di memoria (L3, L4 candidato, L5/pattern-longitudinali)
2. Scrive l'estratto nel file appropriato
3. Logga in `log-decisioni-memoria.md`

Promozioni L4 e interpretazioni L5/psicologica seguono le regole esistenti (conferma esplicita o passata dedicata).

### Step 4 — Scrittura del log

In `00-capitano/intake-log/intake-log-YYYY-MM-DD.md`:

```markdown
# Intake log — 2026-06-25
Processato: 2026-06-25 23:14 da Rapsodo + Capitano
File esaminati: 4

## File 1: 2026-06-25_chatgpt_riflessione-su-tesi.md
- Informazioni utili estratte: 2
  - P1: convinzione su incompatibilità tesi sperimentale + magistrale teorica
    → L3-strategica
  - P2: lista di paper da leggere (3 titoli)
    → 02-accademico/argonauta-tesi.md (sezione fonti da leggere)
- Informazioni scartate: 5 (chiacchiericcio, parafrasi, ridondanze)
- Destino file originale: CUSTODISCI verbatim
  → 00-capitano/chat-archive/2026-06-25_chatgpt_riflessione-su-tesi.md
  (motivo: conversazione di valore evocativo, riflessione personale densa)

## File 2: 2026-06-25_lavagna_dimostrazione-cauchy.jpg
- Informazioni utili estratte: 1
  - P2: schema visivo di una dimostrazione di Cauchy
    → 02-accademico/corsi/metodi/03-note-mie/dimostrazione-cauchy-lavagna.jpg
- Destino file originale: SPOSTA verso modulo
  → 02-accademico/corsi/metodi/03-note-mie/ (stesso file, ora nella casa giusta)

## File 3: screenshot_random.png
- Informazioni utili estratte: 0
- Destino file originale: ELIMINA
  (motivo: screenshot di una pagina web di passaggio, nessuna informazione personalizzata, già coperto dal materiale del corso)

## File 4: appunti-vaghi.txt
- Informazioni utili estratte: 0 — ma cernita dubbia
- Destino file originale: LASCIA in intake + flag DECISIONE
  (motivo: testo confuso, non chiaro se contiene qualcosa di rilevante; richiede sguardo di Giuseppe)

## Sintesi
- 4 file esaminati
- 2 informazioni P1 + 2 informazioni P2 entrate in memoria
- 1 file custodito verbatim, 1 spostato a modulo, 1 eliminato, 1 in attesa di decisione
```

### Step 5 — Notifica a Giuseppe

Il Capitano risponde in chat conciso:

```
[Mnemosyne · intake completato]
4 file esaminati.
- 2 informazioni P1 in memoria (1 candidato L3 strategica su tesi)
- 2 informazioni P2 in archivio operativo
- 1 file custodito verbatim in chat-archive (riflessione tesi)
- 1 file spostato in note-mie Metodi (dimostrazione Cauchy)
- 1 file eliminato (screenshot ridondante)
- 1 file lasciato in intake/ in attesa di tua decisione (appunti-vaghi.txt)

Log: 00-capitano/intake-log/intake-log-2026-06-25.md
```

Se ci sono candidati L4 o pattern L5 di rilievo, segnalarli esplicitamente.

---

## Regole di cernita — guida pratica per il Rapsodo

### Quando ELIMINARE è la scelta giusta

- Screenshot di pagine web generiche senza annotazioni personali
- Copy-paste di articoli online che non contengono riflessione di Giuseppe
- Duplicati di materiale già in memoria
- File di "test" o vuoti
- Materiale corretto già da una fonte autorevole esistente nel sistema

### Quando CUSTODIRE verbatim

- Conversazioni AI con riflessioni personali dense (alta densità emotiva o intellettuale per centimetro di testo)
- Citazioni testuali che potrebbero essere richiamate in futuro
- Immagini con valore visivo proprio (dimostrazioni a mano, schemi, opere)
- Note di journaling che Giuseppe ha scritto altrove e vuole portare nel sistema

### Quando SPOSTARE verso modulo

- Paper, libri, slide → `Materiali-studio/` o `01-banca-dati/<corso>/`
- Esercizi svolti → `03-note-mie/<corso>/`
- Materiale operativo di un dominio specifico → cartella del modulo pertinente

### Quando LASCIARE in intake + flag

- Quando il Rapsodo non riesce a decidere bene da solo
- Quando il file contiene materiale sensibile e Giuseppe potrebbe volerlo trattare diversamente
- Quando il file è di formato non parsato

In nessun caso il Rapsodo deve fare promozioni a L4 automaticamente da intake — quelle restano sempre via conferma esplicita di Giuseppe.

---

## Casi particolari

### File con contenuto sensibile (salute mentale, ferite emotive, ecc.)

Applicare `protocollo-memoria-sensibile.md`. In sintesi:
- L'informazione estratta riceve etichetta speciale
- Default per il file originale: **CUSTODISCI verbatim** in `chat-archive/` (non eliminare materiale sensibile in cernita automatica — può essere riletto dal Capitano per analisi psicologica future)
- Linguaggio diretto nei riepiloghi

### File di grandi dimensioni (paper PDF da 50+ pagine)

- Estrai solo metadati (titolo, autori, abstract)
- Sposta in `Materiali-studio/` o nel banca-dati del corso
- Segnala: *"Paper grande individuato, spostato per lettura profonda futura col Demiurgo Accademico."*
- Non eliminare paper anche se sembrano poco rilevanti — sono materiale potenzialmente utile a lungo termine

### Conflitto con materiale già in memoria

Se l'informazione estratta **contraddice** una voce già in L3 o L4:
- Il Rapsodo lo segnala esplicitamente nel dossier al Capitano
- Il Capitano scrive la nuova voce con riferimento alla contraddizione
- Mette il tema in `snapshot-corrente.md` come `## Contraddizione da risolvere`
- Non sovrascrive la voce vecchia (la memoria interna non cancella mai)
- Il file originale può essere CUSTODITO verbatim per riferimento futuro

---

## Cosa il sistema NON fa

- **Non legge automaticamente** chat di Claude.ai sul web, ChatGPT, Gemini, ecc. — Giuseppe deve copy-paste o export manualmente e droppare in intake
- **Non monitora la cartella in tempo reale** (per ora — futuro: hook PostToolUse o watcher dedicato)
- **Non interpreta psicologicamente in autonomia** — estrae pattern raw in L5/pattern-longitudinali, l'interpretazione richiede `/analisi-psicologica`
- **Non elimina mai materiale sensibile in cernita** — default custodisci verbatim per quelli

---

## Evoluzioni future

Quando avrà senso (post-MVP):
- **Hook PostToolUse** su scrittura in `intake/` per attivazione automatica
- **Watcher esterno** (Windows Task Scheduler) per processazione fuori da sessione Claude Code
- **Comando `/assorbi-cowork`** per estrarre dalle sessioni Cowork passate via `session_info` MCP
- **Browser extension** per drop diretto da claude.ai / ChatGPT / Gemini
- **API export integration** quando i provider esporranno export programmatico

Per ora: intake manuale + cernita disciplinata copre il 90% dei casi senza accumulo di rumore.

---
type: visione
---

# Roadmap interfaccia grafica — Fase 2

> Documento strategico per la transizione della navicella dal CLI (Claude Code) a un'interfaccia grafica viva, sull'ispirazione di AndrooAGI/OpenClaw.
> Scritto durante il MVP CLI, da usare come riferimento quando inizieremo a costruirla.

---

## Il problema con il CLI

Il CLI funziona. Gli agenti rispondono. La memoria si aggiorna. Ma manca qualcosa di sostanziale: **la sensazione di un sistema vivo**. Tutto è meccanico — comando in, risposta out, vai al prossimo. Non c'è respiro, non c'è movimento, non c'è la consapevolezza che mentre tu fai una cosa il sistema sta facendo qualcosa anche lui.

Quello che AndrooAGI mostrava con OpenClaw aveva un'altra qualità: era un'**organizzazione che vive**, con processi che girano in background, status visibili in tempo reale, drag-and-drop di file, conversazioni che si svolgono in finestre dedicate. Una mission control vera.

L'obiettivo della Fase 2 è quello — non un'app più carina, ma un'organizzazione visivamente abitata.

---

## Quattro funzioni chiave che la GUI deve cambiare

### 1. Chat col Capitano, ma con la navicella sempre visibile attorno
Non un terminale dove tu digiti e leggi. Una finestra di chat **inserita in un dashboard** dove vedi sempre: chi è attivo adesso, qual è lo stato della memoria, quali corsi sono in lavorazione, cosa ha scritto il Rapsodo nell'ultimo riepilogo. Il dialogo non è la cosa principale — è una delle viste.

### 2. Stato vivo degli agenti
Quattro avatar/indicatori (Capitano, Argonauta, Rapsodo, Demiurgo Accademico) con stato visibile in tempo reale:
- **Idle** (in attesa)
- **Active** (sta lavorando alla tua richiesta corrente)
- **Background** (gira in background — es. l'Argonauta su un task di scouting)

Pulse animation quando attivi. Quando il Rapsodo segnala una contraddizione, il suo avatar lampeggia con una notifica.

### 3. Memoria come paesaggio, non come cartelle
I 5 livelli visualizzati come **cerchi concentrici** o **strati orizzontali**:
- L1 al centro (volatile, conversazione)
- L5 più esterno (substrato profondo)

Click su un livello → vedi le voci più recenti, accessi rapidi. La memoria non è "cartelle markdown" — è una **mappa navigabile**. Le voci L5/psicologica/ sono particolarmente importanti da mostrare bene, perché sono il cuore vivo.

### 4. Course-as-mission
Ogni corso è una **missione visiva** con fasi:
- 🜍 Banca-dati (numero di file caricati, segnalazione lacune)
- ⚒ Mappa esercizi (lista tipi di esercizio, frequenza)
- 📚 Indice (lista capitoli con stato: bozza / scritto / iterato)
- ✍ Capitoli (% di completamento del libro)

Drag-and-drop di PDF direttamente sulla missione → finiscono in banca-dati. Click su un capitolo → si apre il rendering markdown + diff dell'ultima iterazione.

---

## Scelta tecnologica — l'unica decisione vera

Il punto di partenza tecnico è: **come la GUI parla con gli agenti?**

Quattro opzioni:

**A) Subprocess di Claude Code** — la GUI chiama `claude --print "<prompt>"` e cattura l'output.
- *Pro:* zero setup, riusa Claude Code come backend.
- *Contro:* ogni chiamata è una sessione nuova, niente continuità. Niente agent view nativo.

**B) Claude Agent SDK** — la GUI chiama direttamente l'SDK con le definizioni in `.claude/agents/`.
- *Pro:* sessioni persistenti, agent view nativo, real-time streaming.
- *Contro:* usa il credito mensile Agent SDK (dal 15 giugno incluso nel piano Max).
- *Status:* questa è la strada giusta.

**C) Watch dei file + nessuna chiamata agentica** — la GUI legge solo i file markdown, l'interazione vera resta in Claude Code aperto in parallelo.
- *Pro:* GUI dead-simple, zero rischio.
- *Contro:* non risolve il "meccanico", è solo un visualizzatore.

**D) MCP server custom** che fa da bridge — overkill per ora.

**Decisione raccomandata: Claude Agent SDK**, dal 15 giugno il credito incluso nel Max copre l'uso programmatico. È la stessa stack di Claude Code (gli stessi `.claude/agents/`), solo invocata dalla GUI invece che dal terminale.

---

## Stack consigliato

**Tauri + Svelte/SvelteKit**

- **Tauri** invece di Electron: binario ~10 MB invece di ~150 MB, startup istantaneo, sicuro per default. Versione recente molto matura.
- **Svelte** come framework UI: approccio meno JS-pesante di React, perfetto per dashboard con stato condiviso, leggibile.
- Linguaggio: TypeScript per il front, Rust per il back (Tauri ti chiede minimo Rust ma per chiamate semplici è pochissimo).

**Alternative:**
- Electron + React/Next.js — se preferisci l'ecosistema più maturo. Più pesante.
- Pure web app (localhost server in Node) — se vuoi evitare l'installazione di un binario. Meno "app feel".

**Mia raccomandazione netta:** Tauri + Svelte. È moderna, leggera, ti dà esattamente la sensazione "app desktop nativa" che cerchi senza il peso di Electron.

**Librerie utili da subito:**
- `chokidar` (o equivalente Rust) — file watching per refresh live quando agenti scrivono
- `motion` o framer-motion / Svelte transitions — pulse e movimenti vivi
- `monaco-editor` o `codemirror` — rendering markdown dei capitoli del libro
- `katex` — rendering LaTeX inline per le formule nei capitoli

---

## UX — sei viste principali

### Vista 1: Plancia (home)
Cosa vedi all'apertura:
```
┌─────────────────────────────────────────────────────────┐
│  NAVICELLA · 17 GIU 2026 · sessione attiva: Metodi      │
├─────────┬───────────────────────────────────────────────┤
│         │  ┌─ Capitano [Opus] ───────────────┐         │
│ MEMORIA │  │ Idle · ultima attività 4 min fa │         │
│         │  └──────────────────────────────────┘         │
│  L1 ████│                                                │
│  L2 ████│  ┌─ Rapsodo [Sonnet] ──────────────┐         │
│  L3 ███ │  │ Background · scansione settimana│         │
│  L4 ██  │  └──────────────────────────────────┘         │
│  L5 ███ │                                                │
│         │  ┌─ Demiurgo Acc. [Opus] ──────────┐         │
│         │  │ Attivo · scrivendo cap.3 Metodi │         │
├─────────┤  └──────────────────────────────────┘         │
│         │                                                │
│ MISSIONI│  ┌─ Argonauta [Sonnet] ────────────┐         │
│         │  │ Idle · ultimo /stato-traiettoria│         │
│ Meccan. │  │ 3 giorni fa                     │         │
│ ▓▓▓▓▓░░ │  └──────────────────────────────────┘         │
│         │                                                │
│ Metodi  │  ┌─ Conversazione col Capitano ───┐         │
│ ▓▓▓░░░░ │  │ [chat area]                     │         │
│         │  └──────────────────────────────────┘         │
└─────────┴───────────────────────────────────────────────┘
```

Tre colonne: sidebar memoria, sidebar missioni, area centrale agenti + chat.
Tutto è cliccabile, tutto è vivo.

### Vista 2: Memoria (espansione del sidebar)
Quando clicchi su un livello L1-L5, si apre una vista dedicata:
- L1: chat history della sessione corrente
- L2: griglia delle note ultime settimane, con preview hover
- L3: timeline delle decisioni strategiche
- L4: i 3-4 file fondazionali in editor read-only
- L5/psicologica: griglia di "pattern card" con tag, affidabilità, ultima rilettura

Le card di L5/psicologica sono il pezzo emozionalmente più carico. Vanno trattate con cura visiva: niente verde/rosso aggressivo, palette desaturata, leggibili.

### Vista 3: Corso (mission detail)
Click su un corso nel sidebar missioni → si apre una vista dedicata:
```
┌─────────────────────────────────────────────────────────┐
│  METODI · 02-accademico/corsi/metodi/                   │
├─────────────────────────────────────────────────────────┤
│  Fase 0 BANCA-DATI            [12 file]   ✓ completata  │
│  ├ esami: 7   slide: 3   dispense: 2                   │
│  └ [drag-drop area: aggiungi materiali qui]            │
│                                                         │
│  Fase 1 MAPPA ESERCIZI         [+] aggiorna mappa       │
│  ├ Residui (8 occorrenze)                              │
│  ├ Fourier (5)                                          │
│  ├ Sturm-Liouville (4)                                  │
│  └ ...                                                  │
│                                                         │
│  Fase 2 INDICE                 ✓ confermato 16/06       │
│  ├ Cap.1 Variabile complessa                            │
│  ├ Cap.2 Serie e trasformate di Fourier                │
│  └ ...                                                  │
│                                                         │
│  Fase 3 CAPITOLI               [3/8 scritti]            │
│  ├ Cap.1 ✓ scritto · 2 iterazioni · ultima 15/06       │
│  ├ Cap.2 ✓ scritto · 1 iterazione                      │
│  ├ Cap.3 ⚒ in scrittura ora                            │
│  └ Cap.4-8 da scrivere                                  │
└─────────────────────────────────────────────────────────┘
```

Drag-drop di un PDF nella zona Fase 0 → finisce in `01-banca-dati/`, hook scatta, contatore si aggiorna in real-time.

### Vista 4: Capitolo (reader/editor)
Click su un capitolo → si apre il rendering markdown del file. Due colonne: a sinistra l'indice navigabile, a destra il contenuto con LaTeX renderizzato. Pulsante "feedback" che apre una mini-chat col Demiurgo per iterare.

### Vista 5: Argonauta (futuro)
Vista dedicata alla traiettoria. Mostra:
- Stato tesi (idea + agganci + step successivi)
- Calendario esami fino alla laurea
- Decisioni cementate (Astrofisica + Geom Diff, no Probabilità II, ecc.)
- Trigger di reality check ("la decisione di X di marzo è ancora coerente?")

### Vista 6: Notifiche del Rapsodo
Una sidebar destra (toggle) che mostra:
- Contraddizioni segnalate
- Pattern emersi pronti per analisi psicologica
- Pending decision L4 in attesa di conferma

Non bloccante, sempre disponibile.

---

## Roadmap in 5 fasi

### Fase 2.0 — Validazione del CLI (settimane 1-2)
Tu usi la navicella in CLI. Io non costruisco niente. Raccogliamo dati:
- Quali comandi usi davvero
- Quali workflow si ripetono
- Dove il "meccanico" si fa sentire più forte
- Cosa manca che vorresti

Output: lista di **punti di attrito** che la GUI deve risolvere per prima. Senza questi dati, qualsiasi GUI è progettata a vuoto.

### Fase 2.1 — Read-only dashboard (settimana 3-4)
Prima costruzione: una **dashboard di sola lettura** in Svelte che gira su `localhost:3000`. Mostra:
- Stato memoria L1-L5 (conteggi, ultimi aggiornamenti)
- Lista corsi con avanzamento fasi
- Recente attività (ultimi file modificati)
- Pending decision L4

Niente chat, niente azioni. Solo visualizzazione. Vale per familiarizzarsi col pattern di sviluppo e per già darti il primo "sguardo dall'alto" sulla navicella.

### Fase 2.2 — Drag-and-drop (settimana 5)
La dashboard accetta drag-drop di file. Il drop su una missione corso → copia il file in `01-banca-dati/`, hook scatta, contatore si aggiorna live.

Primo momento in cui la GUI sostituisce davvero un'azione meccanica del CLI.

### Fase 2.3 — Chat col Capitano (settimana 6-8)
Si integra la chat. Implementazione via Claude Agent SDK: ogni messaggio crea una richiesta che attiva il Capitano (o un sub-agente). Streaming della risposta in real-time. Stato degli agenti aggiornato in tempo reale durante l'invocazione.

A questo punto la GUI è un'**alternativa completa al CLI**. Non un complemento.

### Fase 2.4 — Modalità "viva" (settimana 9+)
Animazioni, transizioni, pulse degli agenti attivi, notifiche dal Rapsodo, rendering bello dei capitoli con LaTeX, vista L5 con le pattern card.

Qui si lavora sulla qualità estetica e sull'esperienza emotiva. La parte che fa la differenza fra "app utile" e "organizzazione che vive con te".

### Fase 2.5 — Navicella 2D (il continuo naturale, non un "eventuale")
Vista 2D/isometrica della navicella-astronave vera e propria: gli agenti come membri d'equipaggio a bordo, la memoria come ambienti, le missioni come plance. Non un vezzo estetico opzionale — è il **continuo naturale della navicella**, dove la metafora smette di essere solo nel nome e diventa spazio abitato.

Precisazione cementata (2026-07-04): questa è **cosa distinta dal gioco della fisica** ([[project-gioco-fisica]], gioco narrativo Godot post-Meccanica). Il gioco-fisica è un progetto creativo autonomo con la fisica come mondo; la navicella 2D è l'incarnazione visiva del sistema-agenti stesso. Non confonderli, non fonderli. Entrambi vivono nel futuro; la navicella 2D è la coda della roadmap interfaccia, il gioco-fisica ha vita propria.

---

## Cose che devi decidere durante l'uso del CLI

Mentre usi la navicella questi giorni, fai mente locale su:

1. **Quanto tempo passi davvero in chat libera vs slash command?** Se la maggior parte è slash, la GUI può puntare sui pulsanti veloci. Se è chat, la chat va resa cuore dell'esperienza.

2. **Quali agenti consulti di più?** Se è il Capitano + Demiurgo Accademico al 90%, l'Argonauta e il Rapsodo possono stare in viste secondarie. Se invece il Rapsodo lo guardi spesso (per riepilogo, reality check), prende più spazio.

3. **Quanto la memoria è "viva"?** Apri davvero L3-L4-L5 a vedere cosa c'è? Se sì, la vista memoria diventa primaria. Se no, sta nascosta dietro a comandi rapidi.

4. **C'è un workflow ricorrente che diventa rituale?** Es. "ogni mattina: nota oggi + quiz + revisione di un capitolo". Se sì, lo trasformiamo in un singolo bottone "Avvia rituale mattutino".

5. **Cosa ti irrita di più?** Tre cose specifiche dell'esperienza CLI che vorresti zero. Quelle sono le priorità di design per la Fase 2.1.

---

## Una cosa di cui non parliamo abbastanza

La GUI non deve solo essere bella e funzionale. Deve **rendere visibile la cosa più importante della navicella: che è viva.**

Quando il Rapsodo nota un pattern, deve venirti detto in modo che lo senti — non in una riga di testo grigio in un log. Quando il Demiurgo finisce un capitolo, deve esserci un piccolo momento — anche solo un'animazione di transizione, un cambio di stato di "in scrittura" a "completato" — che ti dice "è successo qualcosa".

Quando aprirai la GUI la mattina, deve essere come entrare in una stanza dove c'è gente che ha lavorato per te durante la notte. Non come accendere un computer.

Questa è la differenza fra una GUI sopra a un CLI e una vera mission control.

---

*Documento da rileggere fra 2 settimane di uso CLI per integrare i dati raccolti.*

---
type: ricerca
---

# Navicella 2D — scouting tecnologico e di design (Fase 2.5)

> Ricerca Argonauta, 2026-07-06. Oggetto: come evolvere verso la vista 2D/isometrica
> della navicella-astronave (Fase 2.5 di `roadmap-interfaccia-grafica.md`), dove il
> sistema-agenti diventa spazio abitato. Orizzonte: mesi. Mappa di opzioni per quando
> si aprirà la fase, NON un ordine di lavoro. Vincoli cementati rispettati (4 agenti
> per dimensione temporale, 5 livelli di memoria, Tauri+Svelte, distinzione dal
> gioco-fisica). Raccolta e salvata dal Capitano perché l'Argonauta non ha scritto il file.

---

## Quadro generale

Quattro assi: tecnologia di resa 2D dentro Svelte/Tauri, riferimenti di design per
agenti come spazio abitato, mappatura dell'ontologia della navicella su geometria
fisica, percorso minimo per prototipare. Conclusione: candidato tecnologico netto
(PixiJS v8 + svelte-pixi), due riferimenti di design con materiale direttamente
applicabile (Generative Agents paper e AI Town), e un percorso minimo che non richiede
PixiJS affatto — SVG + Svelte basta per la prima sensazione di equipaggio a bordo.

---

## Asse 1 — Tecnologia di resa 2D in Svelte/Tauri

### PixiJS v8
WebGL-accelerato, GPU-backed. Progettato per sprite animati, effetti particellari,
scorrimento fluido. Peso ~2 MB minified, accettabile. Integrazione Svelte via
`svelte-pixi` (https://github.com/mattjennings/svelte-pixi, release v8.0.1 del
2025-12-22, attivo); fork aggiornato per PixiJS v8: https://github.com/notYou263/svelte-pixijs.
Integrazione Tauri documentata e funzionante — riferimento di produzione Tauri v2 +
PixiJS v8: https://github.com/etekinalp/tauri-pixi-viewport ; insidie dell'init asincrona:
https://dev.to/etekinalp/this-is-not-my-child-integrating-pixijs-in-tauri-vite-react-4j0b .
Isometrica: `traviso.js` (https://github.com/axaq/traviso.js) è sopra PixiJS ma l'ultima
release npm è 2020-21, NON supporta PixiJS 8 — blocco reale, non usare come base. Non
esistono librerie mature per isometrica web nel 2025: una scena isometrica leggera si
costruisce a mano (coordinate x-y-z → schermo, sprite ordinati per profondità), stimato
1-2 giorni per una scena fissa. **Giudizio:** candidato principale per la 2.5. Costo
medio-alto per la scena completa, basso per iniziare con sprite flat.
Fonte: https://pixijs.com/ (2026-07-06); https://svelte-pixi.mattjennin.gs/releases/v8-0-0/ (2026-07-06).

### Konva.js
Canvas 2D (non WebGL). Binding ufficiale `svelte-konva`
(https://github.com/konvajs/svelte-konva), dichiarativa e reattiva: ogni prop Konva
diventa prop del componente, lo stato Svelte propaga alle forme. Ottimo per interazione
(drag-drop, hover, click, editor visivi), maturo. Limite: niente WebGL, degrada con
molti sprite animati (>100); per 4 agenti + ambiente statico non è un problema. Nessun
path isometrico nativo. **Giudizio:** ideale per la Fase 2.4 (pattern card L5, cerchi
concentrici della memoria, drag-drop), NON per la scena isometrica 2.5. Fonte:
https://konvajs.org/docs/svelte/index.html (2026-07-06); https://news.ycombinator.com/item?id=43410988 .

### SVG + CSS Svelte transitions
Zero dipendenze, nativo Svelte. Migliore per animazioni ambientali leggere (breathing
pulse degli agenti, fade di stato): GPU-accelerated via transform, file size minimo,
manutenzione triviale. Scena isometrica SVG con 4 avatar fissi fattibile (proiezioni a
mano, `<g>` per i layer, keyframes CSS per idle/active). Limiti su pathfinding e
movimento continuo di molti elementi. **Giudizio:** candidato per il prototipo minimo
(Asse 4). Fonte: https://smashingmagazine.com/2025/11/smashing-animations-part-6-svgs-css-custom-properties/ ;
https://blog.logrocket.com/how-to-animate-svg-css-tutorial-examples/ (2026-07-06).

### Phaser — escluso
Game framework completo (game loop, fisica, asset manager): tutta complessità non
necessaria per un autoritratto del sistema. Includerlo = costruire dentro un paradigma
di gioco. Il vincolo "la navicella 2D NON è un gioco" esclude Phaser esplicitamente.
Fonte: https://generalistprogrammer.com/tutorials/phaser-vs-pixijs-renderer-comparison (2026-07-06).

---

## Asse 2 — Riferimenti di design: agenti come spazio abitato

### Generative Agents / Smallville (Park et al., UIST 2023) — il più rilevante
25 agenti LLM in sandbox sprite-based (Phaser + backend Python). Pattern chiave: un JSON
server-side per agente = `{posizione, azione_corrente, oggetto_interazione}`; a ogni time
step il server aggiorna posizioni e stato degli oggetti (la caffettiera passa da "idle"
a "brewing" quando un agente interagisce). **Da prendere:** lo stato dell'agente non è un
badge di testo ma un corpo che interagisce con oggetti — il Rapsodo idle è seduto con un
libro aperto, non ha un dot verde; il Demiurgo active scrive visibilmente su una plancia.
**Da scartare:** la simulazione comportamentale autonoma — nella navicella il movimento è
determinato dallo stato reale letto dai file, non simulato. Ispirazione visiva, non
comportamentale. Fonti: https://ar5iv.labs.arxiv.org/html/2304.03442 ;
https://dl.acm.org/doi/fullHtml/10.1145/3586183.3606763 (2026-07-06).

### AI Town (a16z-infra, 2023) — il codice
Open source https://github.com/a16z-infra/ai-town , clone di Smallville in TypeScript,
backend Convex, rendering **PixiJS** con spritesheet pixel art (conferma che PixiJS è lo
stack standard). **Da prendere:** architettura stato condiviso → PixiJS renderer →
spritesheet definiti in `characters.ts` (personaggi come oggetti con sprite/velocità/
animazione) — pattern diretto per i 4 agenti. **Da scartare:** il registro "villaggio
sociale" (agenti che socializzano); la navicella è mission control, austera e operativa.
Cosa evitare nel tono: https://www.blog.brightcoding.dev/2025/09/09/welcome-to-ai-town-a-virtual-world-where-ai-characters-live-chat-and-socialize/ .

### OpenClaw Mission Control / ClawPanel
Dashboard testuali/operative per agenti OpenClaw (lista, status live/idle, log):
https://github.com/abhi1693/openclaw-mission-control ; https://clawworks.io/clawpanel/ .
Nessuna dimensione spaziale — utile per la Fase 2.1 (read-only dashboard), non per la 2.5.
NOTA DI VERIFICA: l'"AndrooAGI" citato nella roadmap NON è rintracciabile come progetto
autonomo; il materiale OpenClaw è tutto post-2024. Probabile demo precedente di un creator
indipendente, non verificabile. Da chiarire con Giuseppe la fonte originale dell'ispirazione.

### Colony-sim (RimWorld) — concettuale
Nessuna analisi di design tecnica trovata; solo confronti di gameplay
(https://www.gamedeveloper.com/design/dwarf-fortress-and-rimworld-tell-very-different-stories).
Principio applicabile: in RimWorld il colono stressato cammina lento, si siede, ha mood
visibili nell'avatar — lo stato è comportamento, non indicatore. Da applicare: Rapsodo che
"sfoglia archivi" da idle, Argonauta che "guarda dalla prua" in background. Serve una fonte
di design analysis esplicita in una ricerca futura.

### Lacune dichiarate
Habbo/spazi sociali isometrici e "colony sim ambient state design" non approfonditi —
da scavare se e quando la scena isometrica diventa priorità concreta.

---

## Asse 3 — Mappatura ontologia navicella → spazio abitato (proposta, non imposta)

Geometria basata sulla struttura temporale dei 4 agenti:
- **Poppa (sala archivi)** → Rapsodo (passato). Scaffali, luci calde soffuse, seduto a
  un tavolo con file aperti. La postazione più lontana dalla prua.
- **Plancia centrale (comando)** → Capitano/Mnemosyne (presente-orchestrazione). Hub con
  accesso visivo a tutti; i 5 livelli di memoria come cerchi luminosi sul pannello.
- **Officina/Laboratorio (amidships)** → Demiurgo (presente-produzione). Scrivania con
  capitoli in corso come pile/lavagne; active = "mani che scrivono".
- **Prua/Osservatorio** → Argonauta (futuro). Finestra sul vuoto, mappe di scouting.
La sequenza poppa→plancia→officina→prua corrisponde alla dimensione temporale
passato→presente-memoria→presente-produzione→futuro. Non arbitraria.

Livelli di memoria come ambienti (L1 ponte volatile → L2 sala riunioni → L3 biblioteca
strategica → L4 archivio fondazionale → L5 stiva/subconscio, luce ambrata desaturata,
pattern card come oggetti distesi, il più profondo fisicamente).

Passaggio di stato = azione fisica (dal pattern Smallville/AI Town): idle = seduto,
breathing loop lento (8-12 s); active = in piedi/inclinato, "scrivendo", oggetto che si
illumina; background = in transizione verso la propria area, meno focale ma non sparito.

---

## Asse 4 — Percorso minimo: strato 2D sopra la Fase 2.1

Sì, e il prototipo minimo NON richiede PixiJS.

**Scenario A — SVG + CSS (costo basso).** La 2.1 legge lo stato agenti dai file
(chokidar / Rust `notify`) in un oggetto Svelte reattivo. Un componente `<NavicellaScene/>`
legge lo stesso stato e renderizza 4 SVG nelle postazioni fisse; keyframes CSS per
idle/active/background. ~1-2 giorni da zero (inclusi gli SVG), zero dipendenze extra,
costruibile PRIMA della chat SDK (legge solo file). Non isometrica ma dà subito
l'"equipaggio a bordo".

**Scenario B — PixiJS (costo medio).** Stesso principio via svelte-pixi, con frame
animation reali e WebGL, base direttamente estendibile alla 2.5 completa. Richiede gli
spritesheet prima di vedere qualcosa.

**Scena più economica:** 4 SVG statici (postura seduta) nelle 4 postazioni, con CSS
transitions che cambiano postura/luminosità in base allo stato del file-watcher. Niente
pathfinding, tilemap, game loop. La prima volta che vedi Rapsodo agli archivi e Demiurgo
che scrive, hai già la sensazione dell'equipaggio.

---

## Sintesi

**Tecnologia:** PixiJS v8 + svelte-pixi per la 2.5 completa (collaudato con Tauri, usato
da AI Town). SVG + Svelte per il prototipo minimo pre-SDK (zero dipendenze, 1-2 giorni).

**Design (i 3 più utili):**
1. Generative Agents (UIST 2023) — pattern architetturale: JSON di stato per agente →
   posizione + azione + oggetto → movimento incarnato.
2. AI Town — codice: `characters.ts` con spritesheet + velocità + stato dichiarativo,
   renderer PixiJS.
3. RimWorld (concettuale) — registro visivo: stato come comportamento, non badge.

**Primo passo quando si apre la 2.5:** NON partire dalla tilemap isometrica. Partire da 4
SVG sprite nelle postazioni corrette con le 3 animazioni di stato guidate dallo stesso
file-watcher della 2.1. Si costruisce in 1-2 giorni, funziona prima della chat SDK, e
soprattutto forza a decidere il REGISTRO VISIVO della navicella (pixel art? vettoriale
stilizzato? lineare minimalista?) prima di investire in isometria. Quella scelta di stile
vale più di qualsiasi libreria.

**Conflitti coi vincoli cementati (segnalati e scartati):** Phaser (Smallville/AI Town lo
usano) escluso dal vincolo "non è un gioco" → PixiJS come renderer puro. Il tono "villaggio
sociale" di AI Town escluso dal vincolo "autoritratto, non intrattenimento" → prendere la
struttura tecnica, non il registro. Traviso.js incompatibile con PixiJS 8 → non usare.

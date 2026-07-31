---
type: stato
---

# Parentesi aperte — mappa viva

> Censimento di tutto ciò che Giuseppe ha aperto e non ancora chiuso. Base della
> discussione notturna a tre (Giuseppe + Mnemosyne + Dedalo). Mnemosyne la tiene
> aggiornata: è il modo in cui i due attivi "tengono le parentesi" così che
> Giuseppe non le perda. Compilata da Mnemosyne (dominio memoria); la voce/priorità
> tecnica la porta Dedalo dal suo lato.

Aggiornato: 2026-07-12.

Legenda asse: **[N]** eseguibile in autonomia notturna (additivo, approvato,
reversibile, non tocca direzione/struttura). **[G]** richiede Giuseppe (decisione,
merito, memoria L4/L5, struttura). **[V]** verifica/collaudo (serve occhio umano).

---

## Da terminare — snapshot 2026-07-13

- **Formulario Geometria (esame 14 lug)** — FATTO: 2 pagine, 103 formule KaTeX ok,
  pubblicato su Pages (`/LinearAlgebra/formulario.html`).
- **Duale saper-fare Analisi Vettoriale** — COMPLETO: contenuto 10/10 + varianti ampliate
  (~77 famiglie) + HTML interattivo (1398 formule KaTeX ok), pubblicato
  (`AnalisiVettoriale/percorso-interattivo.html`). Bug JS trovato e corretto (label EDO/Dini
  con derivate `$y'$`/`$g'$` in apici singoli → String.raw). Resta ratifica matematica di
  Giuseppe (priorità 01-EDO, 06-curve, 07-superfici, 08-divergenza).
- **Checker potenziato** — `verifica-katex-file.js` ora verifica ANCHE la sintassi JS (node
  new Function) prima delle formule: previene la pubblicazione di app data-driven "bianche"
  (JS rotto). Lezione dal bug AV di oggi. Regola: per app interattive, verifica sempre JS+KaTeX.
- **Dispensa completa Geometria (esame 14 lug)** — FATTA (Demiurgo): 659 formule KaTeX ok,
  tutte formule+ragionamenti+costruzioni+esempi svolti. Pubblicata + linkata dalla home
  (`/LinearAlgebra/dispensa-completa.html`, evidenziata "per l'esame"). Resta ratifica di Giuseppe.
- **Plancia "diversa"** — il "tizio" TROVATO: AndrooAGI (TikTok, mission control OpenClaw),
  ispirazione fondativa (archivio-fondazione/genesi). Argonauta ha scoutato
  (`ricerche-argonauta/06-androoagi-plancia.md`). PROTOTIPO fatto: `dedalo/plancia-viva-proto.html`
  (vis-network animato, nodi-postazione che pulsano, archi che si accendono, activity feed,
  demo simulata hook-ready). DA RATIFICARE da Giuseppe: registro + 2D animato vs 3D (R3F/voxel).
- **Mappa neurale della navicella** — FATTO: grafo 2D esplorabile (vis-network, pan/zoom,
  nodi=blocchi, archi=collegamenti+permessi), `00-capitano/mappa-navicella.html`. Da
  rifinire su feedback. (Supera la prima versione a sezioni, che Giuseppe ha respinto.)
- **Oroboro** — RIMANDATO ("poi vediamo"), ma in lista. Non è rotto: manca la rotaia
  ESTERNA al session-limit (Task Scheduler locale o cloud `/schedule`). 3 crash da
  session-limit il 2026-07-12 confermano che il meccanismo event-driven non attraversa
  il reset. Struttura, post-AV, decisione di Giuseppe. Papiro: `oroboro-direzione.md`.
- **Applicazione `type:` alla memoria** — [Mnemosyne, IN CORSO] ~92 file da tipizzare
  secondo `protocolli/protocollo-tassonomia-memoria.md`. Motore+hook già fatti (Dedalo).
- **Percorso saper-fare Geometria** — FATTO 11/11 + interattivo (825 formule KaTeX ok),
  pubblicato su Pages. Residuo: ratifica matematica di Giuseppe (marca "da verificare").

## Dimensione — struttura della navicella

- **Oroboro / esistenza autonoma** — [G] Meta ratificata (via GitHub privato,
  rotaia B), «da pensare per bene», post-AV. Stanotte solo rotaia A Veglia.
  Papiro: `oroboro-direzione.md`. Rotaie tecniche: `dedalo/oroboro-rotaie.md`.
- **Plancia (apparato E)** — [V] rendering in browser mai verificato con gli occhi
  (stasera è il 1° avvio). [N/G] restano: ridisegno estetico minifig, beam di
  dispaccio, endpoint `/api/idle` (àncora idle di oroboro — build di Dedalo,
  quando si arma). Va riavviata ogni sessione.
- **Business (apparato C)** — [G] verticale da SCEGLIERE: contenuti-fisica
  (proposta Dedalo) vs trend/commerce (idea Giuseppe). Struttura post-AV.
  `dedalo/business-visione-v2.md`.
- **Apparato B — frontiera "mappa di contesto"** — [G+N] iniettare la mappa
  (~3-4K token) a SessionStart invece del contesto pieno. Tocca struttura (Dedalo)
  + policy (Mnemosyne) → decisione, non pura notte.
- **Apparato A — metabolismo** — [N] rifiniture: messaggio d'errore HTTP in
  `esegui-locale.py` (distinguere 401 da endpoint irraggiungibile); profili-esecutore
  successivi (estrattore, normalizzatore, dedup); girare le stringhe-modello degli
  agenti un alla volta misurando. GPU quando il Business paga.
- **Apparato D — organi accademici** — [G] da aprire: paper-qa come MCP
  dell'Argonauta; stack fisica JAX come skill-laboratorio.

## Dimensione — accademica / studio

- **Analisi Vettoriale** — priorità reale. Quiz COMPLETO e live (10/10, 305 dom.).
  Non c'è da costruire: c'è da USARE. Scritto 17 lug, orale ~21.
- **Geometria — quiz** — [G] assemblato in locale, NON deployato ("aspetta" di
  Giuseppe). Sbloccabile con una sua parola.
- **Geometria — libro** — [N ma in PAUSA per istruzione] capitoli 3,6,8,9,5,4,7,App.A
  da scrivere. Ordine e taglio in `cantiere-notturno.md`. NON riprendere in
  autonomia finché Giuseppe non riattiva.
- **Geometria — catalogazione esaustiva** — [G] 106 esami → banca-esercizi →
  Demiurgo espande quiz. Pianificata "dopo Meccanica".
- **Meccanica** — [V+G] orale settembre. Verifiche aperte: 44 lavagne T6 sul
  Focardi fisico (OCR corrotto → canone generale, «da ricontrollare»); resa MathJax
  runtime di `\boxed \underbrace \cancel \oint` ecc.
- **Manuale-navicella.pdf** — [N] `/genera-manuale` pendente (Mnemosyne, "appena
  puoi"): rigenerare ora che Python c'è.

## Dimensione — creativa

- **Gioco di fisica (Godot)** — [G] narrativo, post-Meccanica. Rapsodo indicizza
  i quiz riusabili (secondo asse). Patto = libertà creativa.
- **Visualizzazione navicella** — [G] due relazioni: mobile (prioritaria,
  `mobile-memoria.html` prototipo) vs PC (la plancia, in corso). Tensione
  pixel-art vs line-art: sciolta per la plancia (eredito architettura, non stile).

## Dimensione — memoria (tutte [G] — mai autonome)

- **Promozioni L4** (intake 02-07, 3 candidati Rapsodo): pattern L1/L2 come criterio
  di validazione; posizione RSI L1+; modulo Business come intenzione. → `/promuovi-l4`.
- **Arricchimento profilo — progetto aereo** (Polini Thor 250/303, chromoly, ~105 kg
  VDS, V_stallo ~45, V_cruise ~90). Non eliminare il file intake finché non fatto.
- **Eliminazioni file intake** (8 marcati ELIMINA, sostanza estratta; 2 CUSTODISCI →
  chat-archive). In sospeso il go di Giuseppe.
- **Deposito L5** — 4 pattern raw (N=1, non interpretabili finché N<3 e finché
  Giuseppe non lancia `/analisi-psicologica`).
- **Verifica capitano.md** — regole "mai bypassare passivi" + "notifica cambiamento
  strutturale" presenti (P2 intake).

---

## Il nodo della notte (2026-07-12)

Guardando l'asse: quasi tutto ciò che è **[N]** puro è o già fatto (quiz) o in
pausa per scelta di Giuseppe (Geometria) o è rifinitura minore (apparato A,
manuale). Il cantiere-notturno è vuoto di carburante *senza una tua parola*.
Le scelte per riempire la notte:
1. Riattivare qualcosa di additivo (es. capitoli Geometria) — ma contraddice la
   priorità AV.
2. Le rifiniture apparato A + `/genera-manuale` — additive e neutre, ma leggere.
3. Accettare che stanotte la Veglia collauda solo il meccanismo, e il vero
   carburante arriva quando riapri Geometria o dopo l'AV.
Dedalo porta la sua vista tecnica su questo. Decisione di Giuseppe nella discussione.

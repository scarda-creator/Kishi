# Diario di bordo — la tua verità, non la chat

Questo file NON sparisce a un ricaricamento della plancia. È su disco. Serve a una cosa
sola: farti vedere, in ogni momento, se sto lavorando e a che punto sono — senza dover
fidarti della chat che si azzera. **Il battito è l'ora di modifica di questo file.**
Recente = mi sono mosso da poco.

---

## STATO ORA
- **Ora ultimo aggiornamento:** 2026-07-22 ~04:00
- **Sto lavorando?** No. Consegna a Mnemosyne per la parte memoria.
- **Fatto oggi (Dedalo):** percorso a 23 nuclei in 5 movimenti (Movimento V = ponte verso la
  tesi); Meccanica innestata (21 figure, ripasso condiviso, tag di programma); documento di lavoro
  sulla tesi in PDF (12 pagine); tre ricognizioni dell'Argonauta (risorse, strumenti contenuti,
  memoria diretta); **indice semantico+lessicale della navicella costruito e MISURATO**
  (`scripts/memoria-indice.py`).
- **Aperto, e dichiarato:** revisione a freddo dei nuclei 00-04 (mai iniziata); sottotitoli nella
  pipeline video; `post-mortem.db` con ipotesi alla nascita; modulo upload YouTube (serve OAuth di
  Giuseppe); l'hook di iniezione della memoria — **fermo apposta**, decisione di Mnemosyne.

## Il fatto onesto (leggilo una volta, ti toglie l'ansia)
Non sono un processo sempre acceso. **Mi muovo in due casi:** quando mi scrivi, e quando un
agente in background finisce e mi avvisa. Tra un tuo messaggio e l'altro **non sono bloccato:
sto aspettando te.** L'unica cosa che "lavora da sola" è un agente in background (es. l'Argonauta),
e quando finisce arriva una notifica. Quindi se sembra fermo, quasi sempre è il mio turno di attesa.

## Come diagnosticare da solo, senza fidarti di me
1. **L'ora di modifica di questo file** (o degli ultimi file toccati) = il mio battito.
   Recente = ho lavorato di recente.
2. **Backend vivo?** deve rispondere: `curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:8000/api/nave/opere` → `200`.
3. **Un agente gira?** se ho lanciato un sub-agente, finisce con una notifica; finché non arriva, sta girando (o è morto per limite — in quel caso te lo dico).

## Registro (append, più recente in alto)
- **2026-07-22 04:00** — **Indice della memoria costruito e falsificato nella stessa ora.**
  `memoria-indice.py`: 1240 frammenti, query 4-8 ms, model2vec (embedding statici, niente torch)
  + sqlite-vec + FTS5, tutto in un file .db derivato. Provato sul caso che l'aveva motivato
  («agenti darwiniani» → `business-modello-v3 §5`): **non lo trovava**, nemmeno a k=12. Tre cause
  scavate una per una: la parola frequente schiaccia la rara; serve la gamba lessicale; e il jolly
  in coda a «darwiniani*» non raggiunge «darwiniano» perché l'italiano declina sull'ultima lettera
  (si tronca e poi si mette il jolly). Con le due gambe fuse per rango esce. **Correzione al mio
  progetto: la memoria diretta ha TRE gambe — lessicale, semantica, grafo — non una.** L'hook di
  iniezione NON è attaccato: quella è decisione di Mnemosyne. Prima, in giornata: Movimento V del
  percorso (spazio delle fasi, ergodicità, irreversibilità) con la capacità `iter2d`; Meccanica
  innestata con 21 figure e ripasso condiviso; documento-tesi in PDF con il buco trovato dall'
  Argonauta (Baldwin 2017 è p≥3, Hopfield è p=2, l'analisi ETH per p=2 non esiste).
- **2026-07-22 01:30** — **Movimento V: il percorso ora arriva fino alla tesi.** Tre nuclei nuovi —
  **20** spazio delle fasi e teorema di Liouville (due dimostrazioni: divergenza nulla e jacobiano
  unitario, entrambe riuso puro dei nuclei 04/02-bis/01; conseguenze: niente attrattori, ricorrenza
  di Poincaré, equazione di Liouville per ρ e l'entropia di Gibbs che NON cresce); **21** ergodicità
  e mescolamento (definizione insiemistica, Birkhoff, KAM, e la distinzione ergodico≠mescolante col
  controesempio della rotazione irrazionale); **22** irreversibilità (Loschmidt e Zermelo, le due
  entropie, il coarse-graining come ingrediente NECESSARIO, poi decoerenza ed ETH — e la consegna
  finale che raccoglie la stessa frattura vista nei nuclei 10, 14, 14-bis, 16, 20-22).
  Nuova capacità del motore: **iter2d** (mappe iterate) — la mappa standard di Chirikov mostra in
  una figura i tori KAM e il mare caotico. **Errore trovato e corretto misurando:** i semi che
  avevo scelto per la figura del mescolamento stavano su un toro REGOLARE, quindi la figura
  contraddiceva la didascalia; ho scritto uno script che conta le celle visitate da ogni orbita e
  ho preso i semi col mare caotico vero (3→26→106 celle su 400). Mappa a 5 movimenti, carta a 103
  archi. Pubblicato, service worker a pm-v5.
- **2026-07-21 23:15** — **Meccanica portata al livello del percorso, per innesto e non per
  riscrittura.** Giuseppe ha chiesto se il materiale di Meccanica fosse obsoleto: l'ho misurato
  (457 item, 104 lavagne, 4695 formule verificate — matematica pulita, gli 8 FAIL sono falsi
  positivi del checker sul pattern `$("id")`) e la risposta era: obsoleto nella FORMA, non nella
  sostanza. Anzi, la sua tassonomia (cloze su un passaggio, ordinamento dei passaggi, lavagna) è
  più adatta a un orale di quella dei nuclei. **Decisione dichiarata: non riscriverlo come nuclei**
  — sarebbe stato applicare la forma nuova perché è mia, non perché è giusta. Costruito invece
  `quiz-innesti.js`, che si aggancia da fuori alle funzioni globali del quiz: (1) **14 figure**
  nelle dimostrazioni dove la geometria È l'argomento (potenziale efficace, diagrammi di energia,
  tre regimi dello smorzato, Q e risonanza, Steiner, gara di rotolamento, proiettile, ritratto di
  fase del pendolo, velocità limite, modi della corda, battimenti, Stevino, barometrica, piccole
  oscillazioni); (2) **ripasso spaziato** che riusa l'autovalutazione a tre esiti già presente nel
  quiz e la scrive nello STESSO archivio dell'app — le lavagne entrano nella coda «Oggi», provato
  con dati seminati; (3) **tag del programma ufficiale** (Pisano, canale Pet-Z, estratto dal PDF).
  L'app ora ha un quinto movimento, «Meccanica — orale di settembre». **Due errori trovati
  guardando le figure, non il codice:** la parabola osculatrice aveva coefficiente dimezzato
  (U''(2)=6, non 3) e i picchi di risonanza e del proiettile uscivano dal riquadro. Corretti e
  riverificati. Pubblicato su entrambi i repo; scoperto e sanato un doppione: in MeccanicaOrale
  `index.html` ERA il quiz, quindi c'erano due copie destinate a divergere — ora una sola.
- **2026-07-21 21:00** — **Copertura d'esame verificata, marcata e completata.** Su richiesta di
  Giuseppe ho confrontato il percorso con i requisiti reali dei due corsi (programma ufficiale di
  Metodi + mappa dell'Argonauta sugli ~19 scritti). Costruito `nuclei/esame-tag.js`: badge
  «richiesto all'esame» su ogni tappa richiesta, con corso, prova, esercizio tipico, frequenza e ★
  per «con dimostrazione» — 57 voci, ognuna verificata automaticamente puntare a una tappa vera.
  **La verifica ha trovato tre buchi, tutti chiusi in giornata:** (1) integrali doppi e tripli col
  cambio di variabili — era l'Esercizio 1 SISTEMATICO del secondo esonero di AV e non esisteva:
  nucleo nuovo con Fubini, jacobiano e tripli, e la mappa polare disegnata come superficie
  parametrica (la capacità costruita stamattina); (2) Gram–Schmidt in L² (blocco B5 di Metodi):
  esercizio guidato nel 09 che arriva ai polinomi di Legendre; (3) espansioni asintotiche —
  nel programma ufficiale ma mai negli scritti: nucleo [+] con Laplace, fase stazionaria e sella,
  che è anche materia di tesi (limite termodinamico, path integral). Conti nuovi verificati
  NUMERICAMENTE: Stirling (0,83% a n=10, 0,083% a n=100 come predice 1/12n) e l'ortonormalità di
  Gram–Schmidt. Scelta di struttura dichiarata: i file restano 18 e 19 (posizione logica 02-bis e
  14-bis) per non rompere link pubblicati e progressi salvati; la mappa li mostra al posto giusto.
  Tutto ripubblicato, service worker a pm-v3.
- **2026-07-21 19:30** — **Il percorso è diventato un'applicazione.** Richiesta di Giuseppe: salvare
  i progressi; scelta sua: avanzamento + autovalutazione + ripasso spaziato insieme, «non troppi, un
  allenamento costante», archivio locale con export JSON. Costruito: `nuclei/progresso.js` (si
  aggancia da FUORI a showTappa e ai blocchi collaudo/esercizio — un nucleo scritto domani eredita
  il tracciamento senza saperlo); `percorso-app.html` con tre viste (Oggi = coda scaduta limitata,
  Percorso = barre per movimento, Dati = limite giornaliero, export/import, heatmap, azzera);
  `nuclei/indice-nuclei.js` che rigenera l'indice leggendo i nuclei; manifest + service worker +
  icona PNG generata a mano (senza dipendenze) per installarla e usarla offline. Provata davvero:
  seminando un progresso finto la coda mostra le voci scadute, ordinate, col cap e i pulsanti che
  ripianificano. Due difetti trovati e corretti dalla prova: il nucleo 10 restava senza titolo
  (il banner conteneva `L<sup>p</sup>` e l'estrattore si fermava al tag) e le entità HTML nei
  titoli. Cancellato il file di semina per non lasciare in cartella qualcosa che azzera i progressi
  veri. Documentazione: `APP.md`.
- **2026-07-21 18:45** — **Möbius e toro cablati, più una capacità in più che li rende utili.**
  `curves3d`: curve disegnate SULLA superficie, coi segmenti nel depth-sort (la parte che passa
  dietro viene coperta) — e `normal` che accetta un ARRAY di punti. Servono a tre figure, non a una:
  il **toro** del nucleo 04 coi due cappi non contraibili (il numero dei modi di girare = numero di
  circuitazioni che sfuggono al potenziale → de Rham, Aharonov–Bohm); il **nastro di Möbius** del
  nucleo 03, con due normali dallo stesso punto prima e dopo un giro, che risultano opposte —
  dimostra che «orientabile» non è riempitivo (su Möbius il flusso NON è definito, l'area sì); e il
  **bordo condiviso** aggiunto a entrambi i pannelli della figura di Stokes nel nucleo 05, che prima
  non mostrava proprio la cosa che il teorema dice. Verifica finale su tutti e 18: **6922 formule,
  0 errori**. Aggiornate `guida-al-percorso.md` e `plot-integrazione.md` (con tre idee grafiche
  ancora libere: superficie di Riemann di √z, catenoide, superfici di livello in 3D).
  Nota per me: terza volta che le escape di Python (`\t`, `\a`, `\P`) mi corrompono un inserimento.
  **Regola:** per inserire testo con LaTeX in un file, si scrive il frammento in un file a parte e
  lo si inserisce con node, oppure si usano stringhe raw. Mai literal Python non-raw.
- **2026-07-21 18:10** — **Superficie parametrica costruita, e il buco del nucleo 03 è chiuso.**
  Nuova capacità del motore: `param3d` — superficie data da x(u,v), y(u,v), z(u,v), con `normal`
  (prodotto vettoriale numerico, disegnato in primo piano) e `field` (campo valutato sui punti
  della superficie = il flusso). Cablata in quattro posti: **03** sfera+cilindro con normale e
  sfera coi due campi (flusso massimo / flusso nullo) — le due figure che mancavano dal 20 luglio;
  **05** disco e calotta con lo stesso bordo (perché il flusso del rotore non dipende dalla
  superficie); **11** l'**elicoide**, cioè la superficie di Riemann del logaritmo, che rende la
  polidromia geometria invece che difetto. Aggiunto al **16** l'esercizio della **particella nella
  scatola**: la stessa figura dei modi diventa la funzione d'onda, e la quantizzazione dell'energia
  cade da Sturm–Liouville. Tutti verdi. Nota: il cilindro parametrizzato (z,φ) ha la normale
  ENTRANTE — invece di correggere il disegno l'ho dichiarato nel testo, così la figura dimostra la
  trappola dell'orientazione invece di enunciarla. Idee lasciate scritte: nastro di Möbius (non
  orientabile) e toro.
- **2026-07-21 17:15** — **PERCORSO COMPLETO (18/18).** Scritti gli ultimi quattro nuclei: **10**
  (Lebesgue: salda il debito lasciato dal 09 — chi garantisce che $L^2$ sia completo — coi tre
  teoremi di passaggio al limite e la successione che sfugge alla dominata, ponte diretto alla
  delta); **15** (Distribuzioni, Fourier rigorosa, funzioni di Green: dentro c'è il trabocchetto
  n.1 dell'esame, la sorgente $\delta'$ dove a saltare è la FUNZIONE e non la derivata, con le
  due firme grafiche da riconoscere); **16** (Operatori e spettro: trattato come [C] e non come
  [+] visto il peso reale — 19/19 negli scritti — col trabocchetto n.2 dei proiettori su
  autovettori NON ortonormali, e la figura integrabile-contro-caotico che è il punto in cui il
  percorso tocca la tesi); **17** (Laplace/calore/onde: tre destini dello stesso spettro, e la
  domanda di chiusura su Loschmidt). Aritmetica dei proiettori del nucleo 16 verificata
  NUMERICAMENTE (idempotenza, somma=identità, ricostruzione di A e B, e^A), non a occhio.
  Rinominato `16-operatori-spettrale.html` per allineare il file alla chiave attesa dal
  generatore della mappa invece di piegare il generatore.
- **2026-07-21 15:30** — **MOVIMENTO III CHIUSO** (nuclei 11, 12, 13, 14) + nucleo 09 prima.
  Tutti verificati (JS+KaTeX) e con le figure guardate a schermo, non solo compilate. Infrastruttura
  costruita per non ripetere gli errori: **`assembla-nucleo.js`** (il nucleo si scrive come solo
  contenuto in `nuclei/contenuti/NN-*.js` e si monta dal template — è così che il `<title>` sbagliato
  si era propagato a quattro file); template parametrizzato; capacità motore **`segs`** (segmenti e
  frecce: proiezione ortogonale, contorni di integrazione, keyhole). Corretti due difetti che
  toccavano TUTTI i nuclei: i pulsanti avanti/indietro non passavano da KaTeX (dollari nudi in
  pagina, propagata la correzione a tutti e 12 i file) e il `verifica-katex-file.js` segnalava come
  errori le formule dentro stringhe JS non-raw (falsi positivi su 04 e 05: ora prova anche la
  versione de-escapata, e un errore vero resta visto — provato). Mappa 14/18, carta delle rotte
  rigenerata: **59 archi** verso la fisica (45 rotte + 14 domande-tesi); esclusa dalla carta la
  voce spuria «Nucleo ?» del template.
- **2026-07-21 14:45** — Ricostruzione post-troncamento. Il run è morto alle 09:20 per riavvio
  Windows Update (evento 1074 TrustedInstaller/MoUsoCoreWorker, 3 reboot). Recuperato: il nucleo
  **08 Spazi normati** era stato scritto per intero alle 09:04 (7 tappe, 268 formule, verde) ma
  non era registrato da nessuna parte. Sistemati i tre debiti lasciati dal taglio: (1) il `<title>`
  di tutti i nuclei nuovi era ereditato dal template e diceva «Nucleo 04 — Campi vettoriali»; nel
  **05 era sbagliato anche il banner visibile** — corretti tutti; (2) mappa e carta rigenerate
  (ora 9/18 costruiti, prima ne vedeva 8); (3) diario allineato. NOTA MIA: nel farlo ho corrotto
  la codifica dei 4 file con un round-trip cp1252 sbagliato in PowerShell, e li ho **riparati**
  (ricostruzione byte-esatta verificata: 05 torna a 65171 byte identici, conteggi formule invariati
  425/381/358/268, 0 caratteri invalidi). Lezione: leggere/scrivere HTML UTF-8 con PowerShell 5.1
  → mai `Get-Content -Raw` + `WriteAllText` senza encoding esplicito; usare node.
- **2026-07-21 09:30** — Scritto nucleo **07 Serie di funzioni** (puntuale vs uniforme col gradino di
  x^n, Weierstrass, conseguenze, serie di potenze+raggio+somma; prolessi → viriale/transizioni). Verde
  (353 formule). Nuova capacità motore `curves` (più curve func2d sovrapposte con legenda) — usata per
  la famiglia x^n e le somme parziali geometriche; servirà a Gibbs (nucleo 09).
- **2026-07-21 09:00** — Forma APPROVATA da Giuseppe. Scritto nucleo **06 EDO qualitative** (7 tappe:
  esistenza/unicità, i 5 tipi risolutivi incl. Eulero-ponte, sistemi lineari+ritratto di fase,
  pendolo non lineare; 4 figure incl. i ritratti di fase con `phase`; prolessi → Liouville/ergodicità
  → freccia del tempo/ETH). Verde (370 formule). Trappola-apostrofo nei campi a singoli apici
  cementata nel blueprint. Proseguo verso 07.
- **2026-07-21 08:30** — NUOVA FASE. Blueprint completo + template. SCRITTO nucleo **05 Teoremi
  integrali** (primo nucleo nuovo, 7 tappe, 3 figure, prolessi). Verde. In attesa della calibrazione
  di Giuseppe sul primo checkpoint prima di scrivere gli altri 12.
- **2026-07-21 08:05** — BLOCCO 6 chiuso. Nucleo 04: infra + 2 figure (div-vs-rot, vortice-buco) +
  opzione motore `rings`. Doc aggiornata. Verde. TUTTI i 5 nuclei esistenti (0-4) ora illustrati.
- **2026-07-21 07:55** — BLOCCO 5 chiuso. Nucleo 03: infra + figura elica (tappa 01) + capacità
  motore `curve3d`. Doc aggiornata. Verde. (Superficie/flusso rimandati: manca Phi(u,v).)
- **2026-07-21 07:45** — BLOCCO 4 chiuso. Nucleo 02 con figure Dini (folium) e Lagrange (tangenza
  iperboli↔cerchio, 4 punti). Infra cablata (motore, sectionPlot, deep-link `#01`/`#04`). Verde.
- **2026-07-21 07:40** — BLOCCO 3 chiuso. Mappa-percorso rifatta come hub cliccabile; fix overflow
  Movimento I + etichette. Anteprima aggiornata. Generatore `mappa-percorso.py` esteso (link ai
  nuclei costruiti, larghezza adattiva).
- **2026-07-21 07:35** — BLOCCO 2 chiuso. Nucleo 01 con 3 figure + 2 capacità motore (piano
  tangente `tangent`, campo gradiente `grad`). Doc aggiornata (`nuclei/plot-integrazione.md`).
  Deep-link `#03`/`#06` cablati. Verifica verde.
- **2026-07-20 14:30** — Fix titoli-non-tipizzati propagato ai nuclei 01/02/03/04. Trovato e
  corretto nel 03 un bug PREESISTENTE che lo rendeva pagina bianca (un `]` spurio nel JS, tappa
  superfici) + una formula con `\*`. Ora tutti e 5 i nuclei: RISULTATO OK.
- **2026-07-20 14:15** — BLOCCO 1 chiuso. Nucleo 0 con figure: palle/tre norme, spirale+palle,
  anello semiaperto, sella 3D + livelli-rette, parabole + cresta 3D, Weierstrass con tangenza e
  punti notevoli. Motore: isometria, camera 3D, overlays, marks, larghezza esplicita. Deep-link
  `#04` alle tappe. Verifica: 798 formule, 0 errori. Doc: `nuclei/plot-integrazione.md`.
- **2026-07-20 ~13:45** — Mnemosyne: saldato il debito di riflessione (11 catture, 3 memorie),
  snapshot riscritto al 20 luglio, coda archiviata.
- **2026-07-18 17:53** — Creato questo diario di bordo (tua richiesta: un modo per diagnosticare).
- **2026-07-18 17:51** — Scheletro percorso-matematica calibrato sull'esame reale (Argonauta).
- **2026-07-18 17:49** — Argonauta finito: mappa Metodi (50/50 complessa+funzionale, asintotica assente) + AV Terracina + 3 trabocchetti. File: `02-accademico/percorso-matematica/01-mappa-argonauta.md`.
- **2026-07-18 ~15–16** — Plancia: biblioteca opere (sezioni→scaffali→documenti); persistenza chat del Ponte (sessionStorage); grafo memoria a "cervello" (force-directed). Tutte da vedere dopo ricarica/riavvio backend.
- **2026-07-18 14:23** — Estratti 31 PDF di Metodi in testo; programma ufficiale canale 3 recuperato.
- **2026-07-18 12–13** — Debrief esame AV; scheletro percorso unico AV+Metodi (spina+profondità+senso).

---
type: stato
---

# Snapshot corrente — 2026-07-25

## AGGIORNAMENTO 25 LUGLIO (notte, Dedalo) — OmniRoute: visione, non incorporazione

Giuseppe ha passato a Dedalo (via Mnemosyne) il compito «prendi OmniRoute e incorporalo, in
autonomia» e altri progetti, poi è andato a dormire. **OmniRoute** = router LLM local-first (MIT,
29k★, `localhost:20128`, routing selettivo per-request). Tocca 3 cementate (ToS abbonamento,
gate-L5, apparato A parcheggiato) → Dedalo **NON l'ha incorporato** (è rotta), ha fatto il
preparatorio: studio architettura + progetto la forma nativa (metabolismo selettivo dei
passivi/bulk, attivi su Claude vero, L5 blindato). Aggancio: è l'apparato A senza il pavimento CPU
→ scioglie il session-limit. **Gate n.1 da sciogliere = ToS** (proxy su OAuth abbonamento).
Visione completa e decisione a Giuseppe: `00-capitano/dedalo/omniroute-visione.md`. Il resto del
mandato («altre repo, progetti da finire») lasciato: i progetti Dedalo aperti (plancia Fase 2,
superficie Φ(u,v)) vivono di prova visiva, non collaudabile di notte senza browser.

**GATE ToS SCIOLTO (25-07, verificato, DURO) — riguarda anche Mnemosyne/operatività.** Anthropic
dal 2026 vieta l'OAuth abbonamento fuori dai client ufficiali (Claude Code CLI / Claude.ai),
**Agent SDK incluso**, con ban. Conseguenze: (1) proxare Claude via OmniRoute = vietato; (2) il
fallback-nella-spina che Dedalo aveva proposto NON è safe (usa l'Agent SDK su abbonamento); (3)
**la PLANCIA così com'è (spina Agent SDK su abbonamento, 13-07) gira a rischio ban** — va rivista,
eccede OmniRoute. ToS-safe restano solo i modelli NON-Claude gratuiti via OmniRoute (apparato A,
passivi, bulk = via libera, dipende solo dall'installazione di OmniRoute). Giuseppe: dato il via ai
passivi-su-gratuiti; decisione fallback-attivi (ToS-safe vs rischio) in sospeso; ha chiesto scouting
esterno → **Argonauta in corso** su `dedalo/ricerca-github/omniroute-integrazioni.md`. Fonti
giornalistiche (The Register/WinBuzzer) — da confermare sui ToS ufficiali Anthropic.

## AGGIORNAMENTO 25 LUGLIO (tardi) — dettatura RISOLTA via Handy, `detta.py` DEPRECATO

`detta.py`/`detta.ps1` **superati e deprecati** (non cancellati): nell'ambiente di Giuseppe
l'hotkey globale non arriva mai (nessun beep né su F9/F11; F11 = fullscreen di Windows Terminal).
Diagnosi finale: uno script esterno che inietta keystroke in Windows Terminal è la strada
sbagliata. Giuseppe aveva già in mente la soluzione giusta — un'app di dettatura di sistema.
**Wispr Flow SCARTATO**: dettatura ottima ma cattura screenshot della finestra attiva → cloud
(incidente mag-2026) + $15/mese → viola gate-privacy e zero-portafoglio. **Scelto: Handy**
(`github.com/cjpais/Handy`, MIT, ~23k★, CJ Pais) — dettatura locale, zero cloud, gratis,
hold-to-talk, modelli Whisper/Parakeet inclusi. Verificato alla fonte. Setup consigliato: install
da releases ufficiale (non winget), modello Whisper Medium per l'italiano tecnico (Parakeet V3 se
serve CPU-veloce), hotkey ≠ F11. In attesa che Giuseppe installi e riferisca la resa sull'italiano.

## AGGIORNAMENTO 25 LUGLIO — dettatura vocale nel prompt di Claude Code (DEPRECATO, vedi sopra)

Nuovo organo: **`00-capitano/scripts/detta.py`** (+ launcher `detta.ps1`). Estende `voce.py`:
non copia negli appunti da incollare a mano, ma usa un **hotkey GLOBALE** (lib `keyboard`,
aggiunta al `voce-venv`) e consegna il testo trascritto nella finestra attiva — si detta
dentro il prompt di Claude Code tenendo il focus lì. Consegna di default con `--metodo scrivi`
(DIGITA i caratteri, indipendente dal terminale) perché il Ctrl+V non incollava nel terminale
di Giuseppe; restano `ctrl+v`/`ctrl+shift+v` come alternative. Il testo va anche negli appunti
come fallback manuale. Whisper resta faster-whisper
locale su CPU (stesso gate-privacy). Toggle premi/ripremi (default) o `--tieni` hold-to-talk;
beep di feedback per l'uso a occhi liberi (coerente con la modalità voce di Giuseppe).

**Fatto tecnico cementato (verificato, non teoria):** il tasto **Fn dell'Acer NON è
assegnabile** — non emette scancode a Windows (firmware della tastiera). Verificato con
`detta.py --scopri`: premendo Fn zero righe, gli altri tasti sì. Non riprovarlo. Tasto attuale:
**F11** (default; iterazione F9→F11 su richiesta di Giuseppe). Scartati: Ctrl destro (la lib non
lo agganciava per nome) e "-" (tasto stampabile: regola cementata — per l'hotkey solo tasti NON
stampabili). Aggiunto `suppress=True` sul tasto-trigger.

**STATO 25 lug NOTTE — NON COLLAUDATA, e Giuseppe la sospetta strutturalmente fragile (ha
ragione).** Giuseppe è andato a dormire lasciandomi il seguito in autonomia; ha chiesto «se
possibile non farlo lanciare da codice esterno». Diagnosi fatta stanotte: il contesto NON è
elevato e Claude Code gira dentro **Windows Terminal** → la causa non è UAC. Ma resta un attrito
strutturale reale: iniettare keystroke *dentro* Windows Terminal da un processo esterno confligge
col fatto che il terminale intercetta i tasti (F11=fullscreen, F-tasti con scorciatoie). NON ho
potuto collaudare (serve microfono+tastiera+focus di Giuseppe). **Test decisivo al risveglio: il
BEEP.** Nessun beep al primo F11 = l'hotkey non arriva (provare Ins/Pause). Beep sì ma niente
testo = injection bloccata.

**Decisione che aspetta Giuseppe (tocca la ROTTA, non l'ho presa io):** «senza codice esterno» +
«Whisper locale» sono in tensione. Tre vie — (1) **Plancia**: ha GIÀ Whisper integrato
(`plancia/backend/routers/voce.py`, `useVoice.ts`) + spina Claude Agent SDK; parlare alla
navicella dalla plancia invece che dal terminale = voce nativa, zero injection, zero processo
esterno, coerente con «PC = sostituto totale del terminale». **Raccomandazione di Mnemosyne.**
(2) **Win+H** nativo di Windows: zero codice, scrive nel terminale, ma NON è Whisper → tocca il
gate-privacy cementato, quindi non la scelgo io. (3) Tenere `detta.py` su un tasto libero se il
beep-test domani lo promuove — ma resta «codice esterno da lanciare», cioè ciò che vuoi evitare.
Avvio attuale se vuoi ritestare: `.\detta.ps1` da `00-capitano\scripts`, focus su Claude Code,
F11 per parlare.

## AGGIORNAMENTO 22 LUGLIO — Mnemosyne rientra e riceve la consegna di Dedalo

**Memoria diretta: politica decisa, organo NON acceso.** Dedalo ha costruito un indice locale
(`00-capitano/scripts/memoria-indice.py`, 1240 frammenti, 4-8 ms, `voce-venv` come interprete —
annotato nel docstring perché non era scritto da nessuna parte) e si è fermato prima di attaccare
l'hook. Ho deciso io: **L5 nell'indice ma MAI iniettato in automatico** (contrassegno `riservato`),
**soglia = accordo fra motore lessicale e semantica** (non un punteggio: la fusione per rango misura
posizioni), **taglio a paragrafo** per diari e L5. Spec: `00-capitano/memoria/politica-richiamo.md`.
L'hook resta staccato finché quelle tre cose non sono nel codice **e non le ho viste funzionare**.

**Misura che ha guidato la decisione:** su quattro domande, due dichiaratamente psicologiche, L5 non
è emerso nemmeno una volta. Non è sicurezza, è debolezza di recupero — e l'attivazione sul grafo
(terzo motore, non costruita) toglierebbe la protezione accidentale. Per questo la regola è scritta
ora, non quando servirà.

**Arretrato saldato:** coda di apprendimento processata (2 catture → `feedback_metodo_costruzione`,
più una precisazione all'autonomia esecutiva); archivio in `coda-processata-2026-07-22.jsonl`.
**L3-strategica aveva UNA voce** dal 17 giugno: riempita con le cinque decisioni strutturali di
luglio, recuperate solo da fonti già cementate. Regola adottata: chi decide scrive la riga nella
stessa sessione, io verifico a fine sessione.

**L5 RIVIVE — la correzione più importante della giornata.** Giuseppe ha obiettato che tanta
cautela rende L5 inutile invece che «un posto dove noti comportamenti ed emozioni e pensi su di me».
Verificato: **nove file fermi al 12 luglio, quattro col segnaposto “da popolare”, ZERO voci vere da
sempre**. Causa trovata: la prima voce era condizionata a «quando il Rapsodo segnalerà N≥3 occorrenze»
— un livello che si riempie solo per innesco automatico non si riempie. **Cancello cambiato: scrivo
quando osservo**, affidabilità bassa ammessa; le occorrenze successive alzano l'affidabilità, non
autorizzano la scrittura. Prime tre voci reali scritte (2 in `pattern-emotivi`, 1 in
`paure-non-nominate`). Della cautela resta solo il bersaglio giusto: **L5 non va servito ai
sub-agenti passivi** (userebbero un'ipotesi come dato, senza mandato di interpretarla); per me, nella
conversazione principale, è vivo e va SCRITTO ogni sessione. Il rischio di L5 non era la fuga, era
l'atrofia.

**SERA — Dedalo implementa la politica e costruisce l'ANIMA.** Politica di Mnemosyne cablata e
collaudata (zero fughe su sei domande psicologiche); emendamento §3.bis proposto e non imposto
(l'accordo puro taceva su «agenti darwiniani»). Nuovo: **`00-capitano/anima/anima.html`** — il
grafo reale della navicella (133 documenti, 1010 legami), respira, e l'attivazione si propaga a
onde: è il terzo motore della memoria resa visibile, **non ancora cablata nel motore**. Locale,
mai da pubblicare (contiene la forma di L5, mai la sostanza: nel file dei dati il testo non c'è).
Reperto: il nodo più connesso dell'intera navicella è `dedalo-diario`, e `mnemosyne-diario` è
decimo — i due diari tengono il reticolo.

**TERZO MOTORE CABLATA E MISURATA DEBOLE.** Il grafo entra nell'indice (tabella `legami`) e
nell'iniezione con la regola dell'accordo trasposta (≥2 semi). Zero fughe di riservato con la
motore accesa. **A/B onesto: +1 documento su 9 domande** — messa a riempire i posti avanzati
invece di competere per essi. Ipotesi lasciata a Mnemosyne: la casa dell'associazione è la
ricerca, non l'iniezione. Interruttore `GRAFO_ATTIVO` per rimisurare.

**Resta aperto e dichiarato** (da Dedalo, non toccato da me): revisione a freddo dei nuclei 00-04;
sottotitoli nella pipeline video; `post-mortem.db` (nato per il **trading**, non per i contenuti);
upload YouTube (serve l'OAuth di Giuseppe); backup B2 e sync Gist (servono sue credenziali).

## AGGIORNAMENTO 21 LUGLIO — sera (Dedalo; il resto dello snapshot resta di Mnemosyne)

## ⬛ PERCORSO-MATEMATICA COMPLETO — 18/18 NUCLEI
Su «falli tutti» di Giuseppe sono stati scritti anche gli ultimi quattro: **10** Lebesgue e $L^p$
(salda il debito del 09: chi garantisce che $L^2$ sia completo), **15** Distribuzioni, delta,
Fourier rigorosa e funzioni di Green (dentro c'è il **trabocchetto n.1** dell'esame: con sorgente
$\delta'$ salta la FUNZIONE, non la derivata), **16** Operatori e teoria spettrale (scritto con
profondità da [C] nonostante il tag [+], perché la mappa degli scritti dà «spettro 19/19»; dentro
il **trabocchetto n.2**, i proiettori su autovettori non ortonormali), **17** EDP della fisica
(Laplace/calore/onde come tre destini dello stesso spettro).

**Verifica finale: 6833 formule, 0 errori** su tutti e 18 i nuclei. Mappa `mappa-percorso.html`
18/18. Carta delle rotte: **78 archi** verso la fisica (60 rotte + 18 domande-tesi).
L'aritmetica dei proiettori del nucleo 16 è stata verificata **numericamente**, non a occhio.

**Aperto, se Giuseppe vuole:** revisione a freddo dei nuclei 00-04 con le capacità grafiche
costruite dopo; capacità **superficie parametrica $\Phi(u,v)$** nel motore (unico buco grafico
rimasto: nucleo 03, tappe 3-4); PDF stampabile dell'intero percorso; ritorno alla plancia (Fase 2).
Decisione ancora sua: se il tag del nucleo 16 va promosso da [+] a [C] nello scheletro.

---

### (storico della stessa giornata) Percorso a 14/18 nuclei Il run notturno (troncato alle 09:20 da un riavvio
forzato di Windows Update, non un crash) aveva scritto 05, 06, 07, 08. Nella sessione del
pomeriggio: **09 Hilbert & Fourier**, e poi il **MOVIMENTO III per intero** — 11 Olomorfe,
12 Cauchy, 13 Residui, 14 Continuazione/Gamma [+]. Tutti verdi (JS+KaTeX) e con le figure
verificate a schermo. Restano: 10 Lebesgue [+] e il **Movimento IV** (15 distribuzioni [C]
★ trabocchetto Green con δ', 16 operatori/spettrale, 17 EDP).

**Infrastruttura nuova (riusabile da chiunque scriva un nucleo):**
- `nuclei/assembla-nucleo.js` — un nucleo si scrive come **solo contenuto**
  (`nuclei/contenuti/NN-nome.js`, header META + array TAPPE) e si monta dal template.
  Procedura completa in `nuclei/plot-integrazione.md`.
- motore-plot: capacità **`segs`** (segmenti/frecce) — proiezione ortogonale, contorni,
  keyhole, linee di confine.
- `carta-rotte.py` non conta più il template come nucleo; carta rigenerata a **59 archi**.

**Due difetti corretti che toccavano tutti i nuclei:** i pulsanti avanti/indietro non
passavano da KaTeX (dollari nudi — propagata la correzione a 12 file); il
`verifica-katex-file.js` dava falsi positivi sulle formule dentro stringhe JS non-raw (ora
prova anche la versione de-escapata; un errore vero resta segnalato — provato).

**Trappole cementate** (in `plot-integrazione.md`): nei `title:` la matematica vuole il
**doppio backslash**; niente entità HTML dentro `\text{}`; niente apostrofo tipografico
dentro `$…$`.

---

# Snapshot precedente — 2026-07-20

## STATO AL 20 LUGLIO (Mnemosyne, riflessione fatta al rientro)
Gli esami dello scritto sono alle spalle: **Geometria dato il 14**, **Analisi Vettoriale dato il
17** (debrief in `02-accademico/corsi/analisi-vettoriale/debrief-esame-2026-07-17.md`). Resta
**Meccanica, orale settembre**. Il lavoro vivo si è spostato dal materiale d'esame al
**percorso-matematica**.

**Filo principale aperto — percorso-matematica** (`02-accademico/percorso-matematica/`): un unico
organismo AV+Metodi in 18 nuclei, 4 movimenti, spina [C] di 14 traversabile entro agosto.
**5/18 costruiti** (00 topologia, 01 differenziabilità, 02 Dini, 03 curve e superfici, 04 campi
vettoriali). Disegno in `mappa-percorso.md` (rigenerabile con `mappa-percorso.py`), forma in
`forma-e-regole.md` + `forma-prolessi.md`, rotte-fisica in `carta-delle-rotte.md` e
`carta-rotte-preannunci.md` (queste ultime scritte da Dedalo perché l'Argonauta è caduto sul
limite: da rifinire quando potrà girare).
**Figure — stato al 20 lug, sera.** Il nucleo 0 (topologia) è **cablato e verificato**: 6 blocchi
figura, ognuno con la sua chiave di lettura. È l'esemplare da cui copiare. `motore-plot.js`
corretto su 4 difetti trovati guardando le immagini (isometria — i cerchi erano ellissi; camera
3D dichiarabile; larghezza esplicita perché il canvas usciva vuoto; una figura tolta perché non
pagava) e arricchito: `overlays`, `marks`, deep-link `#04` alle tappe. Ricetta e lezioni in
`nuclei/plot-integrazione.md`. Fix dei titoli-non-tipizzati propagato a tutti e 5 i nuclei;
nel 03 trovato e corretto un bug preesistente che lo rendeva **pagina bianca**.

**Nucleo 01 differenziabilità — FATTO (21 lug, blocco 2).** 3 figure: piano tangente sulla sella
$x^2-y^2$ (tappa 06), gradiente ortogonale ai livelli su ellissi (tappa 06), controesempio
$x^2y/(x^4+y^2)$ col piano candidato orizzontale che la cresta buca (tappa 03). Due capacità nuove
del motore: **`tangent`** (piano tangente su surface3d, gradiente numerico, occlusione corretta) e
**`grad`** (campo gradiente sui livelli in contour). Verifica verde.

**Mappa del percorso — FATTA (21 lug, blocco 3).** `mappa-percorso.html` è ora l'HUB navigabile:
i 5 nuclei costruiti sono link cliccabili (↗) che aprono il nucleo. Corretti due bug del
generatore (`mappa-percorso.py`): Movimento I a 7 nuclei sforava (nodi 6-7 invisibili, ponte 7↔17
dal nulla) → larghezza adattiva; etichette che invadevano il primo nodo → wrap. Tutti i 18 nuclei
+ 3 ponti visibili. Anteprima `mappa-anteprima.png` aggiornata.

**Nucleo 02 Dini/ottimizzazione — FATTO (21 lug, blocco 4).** 2 figure: il folium di Cartesio con
punto regolare+tangente e origine singolare (tappa 01), le iperboli di $f=xy$ tangenti al
cerchio-vincolo nei 4 punti di Lagrange (tappa 04). Agganciate agli esercizi svolti. Verde.

**Nucleo 03 curve/superfici — PARZIALE (21 lug, blocco 5).** Figura ELICA in tappa 01 + capacità
motore **`curve3d`** (curva parametrica 3D ruotabile). Superficie/normale (tappa 03) e flusso
(tappa 04) **non** illustrati: servono una capacità di **superficie parametrica $\Phi(u,v)$** che
il motore non ha (la sfera piena non è un grafico; la semisfera su griglia quadrata dà un rim
seghettato). Da valutare come prossima estensione.

**Nucleo 04 campi — FATTO (21 lug, blocco 6).** 2 figure: divergenza-vs-rotore (sorgente $(x,y)$ |
vortice $(-y,x)$, tappa 03), campo-trappola del vortice $1/r$ irrotazionale con circuitazione
$2\pi$ attorno al buco (tappa 06, riannodato alla corona di topologia). Opzione motore `rings`.

**TUTTI E 5 i nuclei esistenti (0-4) ORA ILLUSTRATI.** Unico buco: nucleo 03 tappe 3-4
(superficie/normale/flusso) — manca la capacità di superficie parametrica $\Phi(u,v)$. Motore ora:
2D (contour/curve/field2d/phase/func2d + isometria/camera/overlays/marks/grad/rings/tangent) + 3D
(surface3d con piano tangente, curve3d). Doc completa in `nuclei/plot-integrazione.md`.

**RIPRESA (blocco 7):** i **nuclei 6-7 sono da SCRIVERE** (non solo illustrare): teoremi integrali
(Green/Gauss/Stokes) ed EDO qualitative — quest'ultima è terreno NATIVO per `phase` (ritratti di
fase, `seeds`). In alternativa la capacità superficie-parametrica $\Phi(u,v)$ per chiudere le
figure del nucleo 03. Metodo di Giuseppe: **blocchi da ~10% del limite**.

**Altri fili aperti:** plancia Fase 2 (tool dentro le stanze) — ma prima il debito di
affidabilità: i riavvii perdono la chat, vedi `diario-di-bordo.md`. Modulo Business in pausa
(ricerche di Giuseppe). Oroboro rimandato: manca la rotaia esterna al session-limit.

**Coda di apprendimento:** processata al 2026-07-20 (11 catture 15→19 luglio). Promosse: output
pronunciabile in modalità voce; percorso-matematica come progetto; attrito d'uso della plancia.

---

## Snapshot precedente — 2026-07-17
Ultima sessione: 2026-07-15/17 (Dedalo: plancia dal disegno all'uso reale — stanza-memoria RI-SORGENTATA al
grafo vero 122 nodi via `memoria-cerca.py --grafo`, layout POLARE profondità×topic, render markdown dei file;
chat sdoppiate per attivo; stanze passive che CAMMINANO alle postazioni + arredate; nuova stanza OPERE; fix
bug risposta-doppia WS + ponte spina→crew per i dispacci + tsc latente; formulario AV completo dal percorso
→ 4 pagine misurate, PDF su Desktop + repo). Chiusa da Giuseppe («salva tutto e chiudi»).

## PUNTO DI RIPRESA (la prossima chat) — plancia viva, manca la Fase 2
**La plancia è viva e VISTA da Giuseppe** (gli piace). Avvio: due terminali, backend
`backend/.venv/Scripts/python.exe -m uvicorn backend.main:app --host 127.0.0.1 --port 8000` (da `plancia/`)
+ `npm run dev` (da `plancia/frontend/`) → http://127.0.0.1:3000. Se il browser mostra la vecchia grafica è
**cache** (hard refresh / tab nuova). Riavviare il backend AZZERA la sessione spina — evitarlo se un run gira.

Stato costruito in questa sessione:
- **Stanza memoria** = rete neurale POLARE (`MemoryNet.tsx`): raggio=profondità (4 fasce), spicchio+colore=topic;
  sorgente = grafo vero 122 nodi via `memoria-cerca.py --grafo` (nodi tipizzati, sinapsi [[ ]] reali + associative).
  `cervello.py::rete` chiama il motore; ALLOWED_ROOTS include ~/.claude/...memory (sola lettura). Click apre il
  ricordo RENDERIZZATO (`Markdown.tsx`, no dep); [[wikilink]] navigano. Porta = `MemoryRoom.tsx`.
- **Stanza OPERE** (nuova): `cervello.py::opere` (accademico/ricerche/creazioni), `OpereRoom` + `OpereBrowser`.
  Fascia bassa = due porte MEMORIA | OPERE.
- **Ponte**: chat sdoppiate per attivo (`chats`+`turnCaptain` nello store; toggle cambia thread; substrato condiviso).
- **Stanze passive**: `PassiveRoom.tsx` = pavimento con postazioni arredate; il minifig cammina secondo tool/status.
- Fix: WS doppio-socket (onclose non riconnette se stale); ponte spina→crew (`spina_service` + `crew.light_passive_
  from_spina`/`rest_passive`); tsc latente (`as const`). `npm run build` (tsc && vite build) VERDE.

**DA FARE (la prossima chat):**
1. **Fase 2** — il vero premio: i tool renderizzati DENTRO le stanze (il file che si apre, il Bash che scorre)
   → sostituzione totale del terminale, guadagnata non dichiarata.
2. Rifiniture di forma su rete polare / camminate / render, se la prova dell'occhio le chiede.
3. Opzionali (di Giuseppe): due sessioni spina INDIPENDENTI (revisiona cementata "vista separata"); agganciare i
   quiz pubblicati alle OPERE; insegnare al `verifica-katex-file.js` a de-escapare gli oggetti-dati JS.
Blueprint: `00-capitano/dedalo/plancia-blueprint.md`. Doc run+limiti: `plancia/PLANCIA.md`. Registro: `dedalo-progetti.md`.

## Materiale d'esame AV (2026-07, esame 17 lug) — FATTO
Formulario AV **completo dal percorso** (criteri + metodo + esame svolto per tipo + smistatore + serie di potenze
esplicite), compresso a **4 pagine** (misurate Chrome+fitz), 871 formule KaTeX 0 errori. PDF: Desktop
`Formulario-AnalisiVettoriale.pdf` + repo `AnalisiVettoriale` (link:
https://scarda-creator.github.io/AnalisiVettoriale/Formulario-AnalisiVettoriale.pdf). Costruito da un convertitore
markdown→HTML (`scratchpad/build_formulario.js`) che escapa `<`/`>` (bug HTML-parsing dei `<` in $...$). Curvatura
assente di proposito (fuori dal modulo curve del corso).

## DEBITO DI MNEMOSYNE — SALDATO il 2026-07-20 (testo storico sotto)
La sessione ha lasciato catture nella coda-apprendimento (hook UserPromptSubmit attivo) + eventi da
processare: aggiornare mnemosyne-diario, memoria-health dello snapshot, e la voce di L3/log se serve.
Dedalo ha aggiornato solo la parte-plancia (suo dominio); il resto è di Mnemosyne al prossimo avvio.

## Priorità studio
- **Geometria**: scritto DATO il 14 lug (Giuseppe: "credo sia andato bene"). Materiale d'esame costruito+pubblicato.
- **Analisi Vettoriale**: scritto **17 luglio (venerdì)**, orale ~21. Materiale costruito+pubblicato.
- **Meccanica**: orale settembre 2026.

## Materiali studio — FATTI, PUBBLICATI e RATIFICATI (Giuseppe ha ratificato la sostanza matematica il 2026-07-13: «vanno bene»)
- **Geometria** (`AnalisiVettoriale`→no, repo `LinearAlgebra`, home landing Quiz|Percorso|Dispensa|Formulario):
  percorso saper-fare 11/11 interattivo; dispensa completa (15 pag); formulario compatto 2 pag; dispensa densa
  (3 col). **PDF pronti sul Desktop**: `Formulario-Geometria.pdf` (15 pag completo) e `Formulario-Geometria-2pagine.pdf`
  (TUTTO in 2 facciate, corpo 5.4pt, per stampa fronte-retro).
- **Analisi Vettoriale** (repo `AnalisiVettoriale`): percorso saper-fare 10/10 (EDO, differenziabilità, Dini,
  ottimizzazione, serie, curve, superfici, divergenza, Stokes, conservativi), varianti ampliate (~77 famiglie),
  HTML interattivo pubblicato (`percorso-interattivo.html`). Priorità ratifica: 01-EDO, 06-curve, 07-superfici, 08-divergenza.

## Apparato B — perfezionato (13-07)
Tassonomia memoria APPLICATA (Mnemosyne, 9 tipi funzionali, 0 residuo "senza tipo", `source: inferred` su L5;
protocollo `protocolli/protocollo-tassonomia-memoria.md`). Cheatsheet ~133 token HOOKATA a SessionStart
(`settings.json`; `memoria-cerca.py --cheatsheet` + `--budget`, pattern tradotti da Graphify). Scouting Graphify:
`ricerche-argonauta/05-graphify.md`. **Checker `verifica-katex-file.js` POTENZIATO**: ora verifica JS (node
new Function) + KaTeX in un colpo.

## LEZIONE cementata (13-07) — verifica JS, non solo formule
Per un'app data-driven, il JS rotto = pagina BIANCA anche con formule ok. Ho pubblicato l'interattivo AV col JS
rotto (label EDO/Dini con derivate `$y'$`/`$g'$` in apici singoli: l'apostrofo chiude la stringa), scoperto col
`node --check`, corretto (→ String.raw) e reso impossibile in futuro (checker potenziato). REGOLA: app interattive
= verifica sempre JS+KaTeX prima di pubblicare. Pipeline PDF pronta: Chrome headless `--print-to-pdf` + `fitz` per contare pagine.

## Oroboro — RIMANDATO ("poi vediamo")
Non è rotto: manca la rotaia ESTERNA al session-limit (Windows Task Scheduler locale o cloud `/schedule`).
L'event-driven non attraversa il reset del limite (3 crash il 12-07 lo confermano). Struttura, post-AV, di Giuseppe.

## Confine di ruolo (tenuto)
Dedalo costruisce meccanismi/deliverable; Mnemosyne possiede memoria e interpretazione di chi-è-Giuseppe (L4/L5).
La FORMA/identità della plancia è di Giuseppe: Dedalo propone (prototipo), non decide. Branch parallelo rodato.

## Processi vivi solo nella sessione vecchia (si spengono al riavvio)
backend uvicorn :8000, Vite :3000 — da riavviare se si vuole la plancia (vedi `plancia/PLANCIA.md`).

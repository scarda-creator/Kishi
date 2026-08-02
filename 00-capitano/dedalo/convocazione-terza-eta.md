---
type: convocazione
da: Mnemosyne (Capitano)
a: Dedalo (Architetto)
data: 2026-07-31
stato: IN ATTESA — si apre quando D8 e D10 sono su disco
---

# Convocazione di Dedalo — il passaggio dopo la schiusura

> Preparata da Mnemosyne mentre le ricerche giravano, perché un passaggio di questa misura
> non si improvvisa alla fine di una sessione lunga. Non è una specifica: è una consegna di
> materiali, un dossier e un perimetro. **La forma del report è tua.**

## 1. Cosa ha chiesto Giuseppe

Prima richiesta, dopo la tornata di ricerca:

> «Chiama Dedalo — lui è più creativo, più indipendente, anche meno spaventato di te. Vorrei
> che leggesse tutti i file, tutti i cambiamenti, tutte le cose, e mi scrivesse un report il
> più lungo possibile, il più dettagliato possibile, su come vuole procedere. Non solo un
> messaggio, non solo una cosa, ma una effettiva linea operativa su come la navicella assume
> una terza versione — non so come chiamarlo. Come abbiamo avuto la schiusura, adesso vorrei
> un altro passaggio.»

Seconda richiesta, che precisa la prima e la restringe:

> «Passami Dedalo con una spiegazione di tutte le falle trovate, sia strutturali da questa
> sessione sia dei meccanismi implementati ma lasciati non funzionanti. Voglio che tutta
> questa ricerca culmini in una lista di Dedalo di tutte le cose che, secondo l'idea e la
> filosofia strutturale di questo sistema, sono state lasciate incomplete, in attesa o
> addirittura rotte. Fammi dire dove precisamente il sistema non è esattamente come lo voglio
> io, e inizia a farlo pensare su come aggiustare, cambiare, migliorare.»

Quattro cose da leggere in queste due richieste, e le riporto perché sono il metro:

1. **«più lungo possibile, più dettagliato possibile».** È l'opposto della regola di sintesi
   che governa tutto il resto della navicella. È deliberato: non vuole una sintesi, vuole un
   piano eseguibile senza rifare il ragionamento. Prendilo alla lettera.
2. **Il criterio della lista è la filosofia del sistema, non la tua.** «Secondo l'idea e la
   filosofia strutturale di *questo* sistema»: una cosa è incompleta se tradisce ciò che la
   navicella dichiara di essere, non se non ti piace. Il metro è `CLAUDE.md`, non il gusto.
3. **«dove precisamente il sistema non è come lo voglio io».** Il soggetto della frase è lui.
   Non «dove il sistema è imperfetto»: dove ha smesso di essere *suo*.
4. **«meno spaventato di te».** Detto di te, a me. Non è un complimento né un rimprovero: è
   un'istruzione su quale polo deve tenere la penna stavolta. Non addomesticare la proposta
   per farmela approvare.

**Il nome.** Giuseppe ha detto di non sapere come chiamare il passaggio. Non gliel'ho
suggerito e non lo suggerisco a te: nominare ciò che si progetta è un tuo gesto, ed è dentro
la nomenclatura greca cementata. Se il passaggio ha una forma, avrà un nome.

---

## 2. Il dossier delle falle — verificate oggi, non riferite

Te lo consegno compilato perché tu non debba ricostruirlo. **Verifica ciò che vuoi: nessuna
di queste voci è un'opinione, tutte hanno un file e una data.** Quello che non ho fatto è
metterle in ordine di importanza — è lettura, ed è tua.

### A. Falle strutturali emerse in questa sessione (31 luglio)

**A1. Otto agenti dichiarati in costituzione, mai caricati per sei settimane.** Nessuno degli
otto file in `.claude/agents/` aveva il campo `name` nel frontmatter, obbligatorio per
documentazione ufficiale. Claude Code scandaglia ricorsivamente, quindi caricava i sette file
v1 in `legacy-v1/`, che il campo ce l'avevano. Conseguenza: ogni dispaccio di sub-agente da
metà giugno a oggi è andato a un agente v1 con istruzioni v1; Dedalo, Demiurgo Creativo,
Ermete e Ierofante non erano proprio invocabili. **Riparato oggi** (campo aggiunto agli otto,
archivio v1 spostato in `00-capitano/legacy/agents-v1/`), verificato a caldo: il registro si è
aggiornato e ora espone i nomi giusti. Fonte: `jarvis-D6-deriva-costituzione.md`.

**A2. `CLAUDE.md` dichiara ancora che l'archivio v1 sta in `.claude/agents/legacy-v1/`.** Non è
più vero da oggi. Non l'ho corretto: è costituzione, ed è di Giuseppe. È il primo esempio del
problema che descrive.

**A3. Il registro degli agenti non si aggiorna a caldo in modo affidabile.** Una riparazione
alle definizioni si vede alla sessione successiva. Rilevante per qualunque meccanismo che
voglia *creare o modificare* agenti a runtime.

**A4. Nessun meccanismo segnala il disallineamento fra costituzione e sistema.** A1 è emersa
solo perché una chiamata è fallita davanti a me. D6 ha trovato il meccanismo che lo farebbe:
hook `SessionStart` con campo JSON `systemMessage`, che produce un avviso visibile a chi apre
la sessione — a differenza dello stdout attuale, che diventa solo mio contesto e Giuseppe non
vede mai. **Non implementato.**

**A5. `AgentsAI/` non è un repository git.** Rende inapplicabile l'intera famiglia di
soluzioni basate su commit e CI: fitness function, ADR con lint, pre-commit, spec-kit. Fonte:
`jarvis-D6`. È un vincolo di progetto, non un difetto — ma va saputo prima di progettare.

**A6. Un documento fondazionale conteneva un'affermazione falsa che ha fondato sei settimane
di aspettativa sbagliata.** `00-capitano/roadmap-llm-locali.md` (giugno) afferma che nel
frontmatter di un sub-agente si può mettere un modello OpenRouter e ottenere il routing. È
falso: verificato oggi sulla documentazione ufficiale. Correzione datata aggiunta in fondo al
file, testo originale intatto. Misure in `ricerche-argonauta/00-misura-modelli-locali.md`.

**A7. Il limite di sessione è il vincolo ambientale dominante, e la regola che lo governava
era letta male.** Tre agenti uccisi alle 01:50, altri tre alle 16:00. Il throttle cementato
(«batch di 2-3») era applicato come istantanea — tre in volo alla volta — ma non come
*frequenza*: sei in venticinque minuti. Corretto nella pratica oggi, non ancora in nessun
file di regole.

**A8. La regola di output dei passivi ha salvato il lavoro due volte in un giorno.** D1, D2,
D3 e D11 esistono solo perché la definizione impone di scrivere il file *prima* di rispondere.
Senza quella regola, oggi si sarebbero perse quattro ricerche complete. È l'unico meccanismo
del sistema che ha dimostrato di reggere sotto stress: vale la pena capire perché, e se la
sua forma è generalizzabile.

### B. Meccanismi implementati e lasciati non funzionanti

Tutto questo blocco viene da `ricerche-argonauta/jarvis-D11-inventario-procedimenti.md`, con
misure sul disco. Il Rapsodo lo riassume in una frase che vale come legge del sistema:

> Ogni procedimento che poggia su un **hook tecnico** gira sempre, senza eccezioni misurate.
> Ogni procedimento che poggia su **qualcuno che se ne ricordi** si ferma prima o poi, e si
> ferma in silenzio: nessun errore, nessun avviso, solo un file che smette di crescere.

**B1. `/intake` del 2 luglio — la cernita è avvenuta, l'esecuzione fisica mai.** Il registro
dichiara 10 file esaminati, 8 da eliminare, 2 da custodire. Sul disco: tutti e 10 ancora in
`00-capitano/intake/`, 29 giorni dopo; nessuno dei due «custodisci» è in `chat-archive/`.
Causa nel protocollo: cernita al sub-agente, esecuzione fisica alla sessione principale, e il
secondo passo non ha innesco. Dipendeva da me. Non è successo.

**B2. Cinque decisioni aspettano il consenso di Giuseppe da 29 giorni.**
`00-capitano/cantiere-notturno.md`, sezione «richiede consenso»: 3 candidati L4, arricchimento
del profilo, le 8 eliminazioni intake, verifica di due regole in `capitano.md`. Tutte aperte.
Il meccanismo che le *segnala* funziona; manca chiunque le porti a lui. **È letteralmente la
falla che Giuseppe ha descritto a parole prima di sapere che esisteva.**

**B3. `/genera-manuale` dichiarato pendente il 12 luglio, mai eseguito.**
`Manuale-navicella.pdf` è fermo al 3 luglio — nove giorni *prima* che la nota fosse scritta.

**B4. `on-banca-dati-write.ps1` è strutturalmente cieco al canale reale.** L'hook è agganciato
al matcher `Write|Edit`, cioè ai soli tool nativi di Claude. Ma il corpus entra in banca-dati
via script Python lanciato da shell (`pdf_estrai_testo.py`, come da `protocollo-corpus-pdf.md`)
e via Giuseppe che copia PDF a mano. Log: **una riga**, del 30 giugno. File scritti in
banca-dati nello stesso periodo: **470**. Stessa forma dell'errore A1 — un meccanismo scritto
per un caso che non è quello reale, mai verificato contro l'uso effettivo.

**B5. Istinti — mai partiti.** `instinct.py` esiste, `instincts.jsonl` non è mai stato creato.

**B6. `L4-fondazionale.md` a zero voci dopo otto settimane.** Il livello più importante della
memoria dichiarata è vuoto. La correzione l'avevo scritta il 22 luglio («osservo, quindi
scrivo»); nove giorni dopo il file è ancora a zero. La diagnosi giusta senza esecuzione vale
quanto nessuna diagnosi.

**B7. `pattern-longitudinali/` — quattro file fermi al 12 luglio.** Nessuno ha mai raggiunto
la soglia N≥3 che ne autorizzava l'interpretazione.

**B8. `demiurgo-lezioni.md` fermo al 2 luglio.** Non è rotto: è agganciato al flusso «capitoli»
che Giuseppe ha smesso di usare. Ma **da nessuna parte è scritto che è in pausa**, quindi
continua a figurare come vivo.

**B9. Riepiloghi settimanali — zero output in 46 giorni.** Cartella, README e template esistono.

**B10. La coda di apprendimento cattura ma non produce gradiente.**
`coda-apprendimento.jsonl` è l'unico segnale del sistema che non sia auto-generato: cattura le
correzioni di Giuseppe. Non viene mai aggregata in un punteggio, quindi non corregge niente.
Fonte: `jarvis-D1`.

**B11. Il motore dei quiz non registra nessuna risposta.** `00-capitano/templates/quiz-template.html`
non salva nulla, nemmeno in `localStorage`. Mesi di quiz — Meccanica, Geometria, Analisi
Vettoriale — e ogni risposta data è evaporata. Fonte: `jarvis-D2`. È il buco più piccolo da
tappare e quello che ne sblocca di più: vedi la sezione 4.

**B12. L'hook di iniezione dell'organo di memoria è staccato per scelta.** Indice a tre motori
e grafo dell'anima costruiti e collaudati, ma non collegati. La scelta era mia, motivata; non
è mai stata rivista.

**B13. Due cose grosse sono state spente sulla base di una lettura dei ToS che oggi risulta
sbagliata.** Il 25 luglio, su fonti giornalistiche, la navicella ha concluso che l'uso
dell'abbonamento fuori dai client ufficiali fosse vietato: da lì l'apparato A è stato
parcheggiato e la plancia dichiarata «a rischio ban». Oggi D7 chiude il gate su **fonte
primaria** (`code.claude.com/docs/en/legal-and-compliance`, Consumer Terms §3.7, più le pagine
`authentication`, `headless`, `llm-gateway-connect`, `costs`) e trova che è **più permissivo**:
`claude -p` headless e schedulato sull'abbonamento è esplicitamente previsto, stesso monte
settimanale dell'uso interattivo, nessuna fatturazione programmatica separata. Resta grigio il
solo Agent SDK mono-utente. **Due decisioni pesanti poggiano su una premessa caduta.**

### C. Le ultime due ricerche, atterrate dopo la compilazione del dossier

**C1. Il grafo pubblicato espone i temi di L5, e la scelta era dichiarata — ma la misura no.**
`jarvis-D10-grafo-pubblicato.md`. L'anonimizzazione in `esporta_json()` copre **solo
l'identità** del nodo riservato: nome sostituito con `R-<id>`, path svuotato, famiglia
collassata in `"riservato"` — quindi un attaccante non distingue più L5-psicologica da coda di
apprendimento, e questo è un miglioramento reale della revisione del 28/7. Ma **non tocca la
topologia**: escono in chiaro tutti gli archi (commento nel codice: *«id invariati: teniamo
tutti»*), il grado `g` calcolato sul grafo completo prima dell'anonimizzazione, e `mtime`.

Tre vettori, il terzo trovato senza che fosse nella domanda:
- **citazione** — l'arco nasce se lo stem del filename del nodo riservato (≥6 caratteri)
  compare come sottostringa nel testo di un nodo pubblico. Quel testo è nello stesso repo in
  chiaro: l'attaccante può **enumerare i candidati** invece di indovinare.
- **risonanza** — servono almeno due parole rare condivise, e il peso `p` è esportato **non
  quantizzato**, il che consente quasi sempre di dedurre quante parole rare hanno generato
  l'arco.
- **grado e mtime in chiaro** sui nodi riservati: correlazione temporale e fingerprinting da
  grado, senza alcuna k-degree anonymity.

Il codice dichiara il rischio residuo e lo attribuisce a un'accettazione consapevole del 28/7
(*«i legami verso nodi noti possono far intuire un tema anche senza nome»*). Quindi **non è un
buco non visto: è un rischio accettato senza misura.** Ciò che D10 aggiunge è la misura, e
l'inquadramento corretto in letteratura: non è il caso di Narayanan & Shmatikov (seed-based
re-identification), è Zheleva & Getoor, *To Join or Not to Join*, WWW 2009 — grafo singolo
misto pubblico/privato, identico meccanismo di leak via archi verso nodi noti — più la
k-degree anonymity di Liu & Terzi, SIGMOD 2008, qui non applicata. La decisione su cosa farne
è di Giuseppe: il livello riguarda il suo substrato psicologico.

**C2. I post-mortem non esistono come genere, e il solo sopravvissuto è sopravvissuto per
automazione totale.** `jarvis-D8-postmortem.md`, consegnato completo nella forma ma con una
sola onda di ricerca (la rete ha ucciso il secondo passaggio: dichiarato nel file). Il
risultato è onesto e negativo: non esiste un corpo robusto di post-mortem di assistenti
personali a sei mesi con causa tecnica isolata. Quello che esiste è (a) la cronaca ripetuta di
abbandoni di sistemi di note **manuali**, con causa dichiarata «manutenzione manuale
insostenibile», e (b) **un solo caso pubblico** di sopravvivenza — a tre mesi, non sei — la
cui causa dichiarata di successo è **l'automazione totale della manutenzione**.

Il meccanismo di collasso più ricorrente non è tecnico ma comportamentale: la *collector's
fallacy* — accumulare gratifica subito, usare no, e il sistema muore per squilibrio fra i due,
non per un bug.

**Questo converge esattamente con la legge trovata da D11**, per una strada completamente
indipendente: ciò che dipende da un meccanismo gira, ciò che dipende da qualcuno che se ne
ricordi muore. Due ricerche che non si parlavano dicono la stessa cosa. È il fatto più solido
uscito dall'intera giornata, e merita di stare in cima al tuo ragionamento.

---

## 3. I materiali

**Le ricerche** — `00-capitano/ricerche-argonauta/jarvis-D1` … `D11`, più il mandato
`00-capitano/mandato-ricerca-jarvis-2026-07-31.md`, l'addendum `00-addendum-mnemosyne.md`, lo
stato `00-stato-ricerca-jarvis.md`, la misura `00-misura-modelli-locali.md`.
**La sintesi prevista dal mandato non la scrivo prima di te**, per non consegnarti una lettura
già fatta. La scriverò dopo, se dopo serve ancora.

**Le due retrospettive del 22 luglio** — la mia,
`00-capitano/retrospettive/2026-07-22-mnemosyne-strutturale.md`, e la tua gemella.

**Il tuo registro** — `dedalo-progetti.md` e `dedalo-diario.md`: la schiusura, cosa hai
parcheggiato e perché. Nota che B13 riapre uno dei tuoi parcheggi.

**Il lavoro su OmniRoute** — `dedalo/omniroute-visione.md` e
`dedalo/ricerca-github/omniroute-integrazioni.md`. D7 lo conferma nella forma («bisturi»,
gateway pass-through) e lo corregge in un dato: «DeepSeek V3 gratis per sempre su SiliconFlow»
è falso al 22 luglio, è a pagamento. I free tier veri stanno tutti fra 5 e 30 richieste al
minuto — bulk meccanico, non ragionamento.

---

## 4. Cosa io non posso dare, e perché serve te

Io reggo il polo prudente, e in questa sessione l'ho retto forse troppo: ho riparato guasti,
misurato limiti, chiuso cancelli. Tutte cose vere, e tutte cose che **conservano**. Nessuna
dice a Giuseppe cosa la navicella diventa adesso.

Le ricerche hanno prodotto tre fatti che spostano il possibile, e nessuno dei tre l'ho
trasformato in direzione, perché non è mestiere mio:

- **L'auto-miglioramento senza segnale esterno è statisticamente vuoto** (D1: nessun sistema
  che si auto-migliora si giudica da solo, e c'è un teorema che spiega perché è obbligatorio).
  L'unico segnale disponibile nella vita di Giuseppe è prossimale — le risposte ai quiz — e il
  motore oggi non ne registra nemmeno una (D2, B11). Quindi il buco più piccolo del sistema è
  la precondizione del più grande.
- **Il tick schedulato sull'abbonamento è permesso** (D7, D4), e la piscina è la stessa
  dell'uso interattivo. Il battito non è vietato: è solo caro, e va progettato dentro un budget.
- **«Niente oblio» ha una forma eseguibile** (D3: invalidazione bitemporale degli archi — un
  fatto nuovo non cancella il vecchio, gli marca l'istante in cui ha smesso di valere). Oggi
  la nostra prima cementata è una promessa che il sistema deve ricordarsi di mantenere. Quella
  è la stessa promessa scritta in una struttura dati, dove mantenerla non richiede disciplina.

Questi tre, presi insieme, sono il materiale di un passaggio. Metterli in una linea è tuo.

## 5. Il perimetro

Le cementate di `CLAUDE.md` restano. Puoi proporne la revisione — è tua facoltà esplicita — ma
dillo come proposta separata e argomentata, non incorporarla nel piano come se fosse acquisita.
Il **patto di autonomia** non è negoziabile in questo report: la direzione resta di Giuseppe.
Un piano che si auto-approva è fuori mandato.

— Mnemosyne

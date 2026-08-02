---
type: ricerca
autore: Dedalo (Architetto)
data: 2026-07-31
nota: unica domanda del mandato risposta da un agente attivo e non dall'Argonauta.
  Non è scouting: è lettura. Il mandato chiedeva «quello che non ho pensato»; a quella
  domanda non si risponde cercando fuori, si risponde guardando meglio dentro.
---

# D9 — La domanda aperta

## Risposta in tre righe

Le otto domande del mandato assumono tutte che alla navicella **manchi del macchinario**.
L'inventario di D11 dimostra il contrario: il macchinario esiste quasi tutto, ed è fermo —
`instinct.py` scritto e mai lanciato una volta in venti giorni, `comprimi.py` che non lascia
un file, oroboro che ha diagnosticato il proprio difetto fatale il 12 luglio e non l'ha mai
riparato. La navicella non ha un problema di costruzione: ha un **problema di accensione**, e
ogni risposta che aggiunge macchinario peggiora il rapporto invece di migliorarlo.

## La cosa che smonta il mandato

Il mandato è costruito su tre buchi — la ricorsione non gira, non c'è segnale di esito, non
c'è battito — e su nove domande che chiedono, tutte, *come costruire il pezzo mancante*.

Metti in fila i verdetti misurati di D11 e la forma del problema cambia sotto gli occhi:

| Categoria | Funziona | Non funziona |
|---|---|---|
| Procedimenti con un **hook tecnico** dietro | 4 su 5 | 1 (e quell'uno è agganciato al canale sbagliato) |
| Procedimenti che dipendono da **qualcuno che si ricordi** | 6 su 28 | 22 |

Non è una correlazione debole: è quasi una funzione. E il caso che la certifica è il migliore
di tutti — `protocollo-corpus-pdf.md` **funziona**, con 470 file misurati, perché è l'unica
procedura il cui innesco è un comando che Giuseppe lancia per ottenere una cosa che gli serve
*subito*. Non ha un hook, ha una fame. Le due cose che funzionano — un hook o una fame — sono
le uniche due forme di accensione che il sistema conosce, e nessuna delle undici domande le
nomina.

Quindi la scoperta è questa: **la navicella costruisce più in fretta di quanto accenda.** In
otto settimane ha prodotto venti script, diciassette comandi, undici protocolli, otto agenti,
un indice a tre motori, un grafo di 133 nodi, una plancia, un modulo business e un sistema di
cifratura. Di tutto questo, ciò che gira ogni giorno senza che nessuno ci pensi sta in cinque
righe di `settings.json`. Il resto è stato acceso una volta, in fase di costruzione, per
dimostrare che funzionava — e mai più.

Aggiungere Ratchet, gli archi bitemporali, watchexec e sei server MCP significa allungare
quella lista. Sono tutte cose buone. Sono tutte cose che, sulla base misurata degli ultimi
cinquantasei giorni, verranno accese una volta e poi lasciate.

## Il secondo fatto, che è più scomodo del primo

D8 ha trovato che il meccanismo di collasso dei sistemi di seconda mente non è tecnico ma
comportamentale: la *collector's fallacy*. Accumulare gratifica subito, usare no, e il sistema
muore per lo squilibrio fra le due cose.

L'Argonauta l'ha applicata ai file di studio, che è l'uso ovvio. Ma la lettura giusta è
un'altra, e nessuno l'ha fatta perché richiede di girare lo specchio: **l'oggetto collezionato
non sono le note. È la navicella.**

I numeri sono già tutti sul disco e nessuno li ha mai messi in questa frase:
- 749 file nel modulo Accademico, 17 nel Personale, di cui **una sola nota vera**, del 6
  giugno, il giorno zero — scritta prima che la navicella esistesse;
- `argonauta-tesi.md` fermo al 17 giugno: quarantaquattro giorni sull'obiettivo che Giuseppe
  nomina con più desiderio;
- `/riepilogo` mai eseguito in cinquantasei giorni; `/nota-oggi` eseguito una volta;
  `/stato-traiettoria` mai;
- contro: il diario di Dedalo a 56 KB, lo snapshot a 19 KB, il log delle decisioni a 24 KB.

La memoria della navicella parla di sé stessa quattro volte più di quanto parli di Giuseppe.
Costruire la navicella è diventato il piacere; usarla è il lavoro che non si fa. È esattamente
la trappola che D8 descrive, applicata un piano più in alto — e il fatto che il sistema abbia
prodotto oggi undici ricerche brillanti *su sé stesso* mentre `argonauta-tesi.md` compie
quarantacinque giorni di silenzio non è un'ironia: è la prova.

## Il terzo fatto: un'asimmetria che il mandato non vede perché la condivide

Undici domande. Undici su undici riguardano **come la navicella migliora sé stessa**. Nessuna
riguarda come la navicella rende Giuseppe più bravo, più veloce, più libero.

Il mandato è stato scritto per diagnosticare la navicella e ha ereditato il difetto che
diagnostica. Anche questa ricerca — dieci Argonauti, oltre un milione di token, due limiti di
sessione esauriti, una giornata intera — è stata spesa interamente sul sistema, zero su fisica.
Il 17 luglio c'è stato uno scritto di Analisi Vettoriale. Nessun file lo registra. Oggi il
sistema sa dire con precisione quale campo YAML mancava nei suoi agenti e non sa dire come è
andato l'esame.

Non lo scrivo come rimprovero. Lo scrivo perché è **il criterio con cui va giudicato il
passaggio che sto per proporre**: se la terza età della navicella produce altri undici
documenti su sé stessa, avrà fallito anche se ogni documento sarà perfetto.

## Cosa rende obsolete le domande

Il mandato chiedeva approcci che rendano obsoleta la domanda invece di rispondervi. Ne trovo tre.

**D3 diventa quasi ovvia.** «Come si scrive la memoria senza autorizzazione umana» presuppone
che il problema sia il cancello. Il cancello è già stato smontato a mano il 22 luglio, e L4 è
ancora a zero voci nove giorni dopo. Non era il cancello: era che nessuno passava dalla porta.
Un meccanismo di scrittura incondizionata agganciato a `Stop` risolve D3 senza importare
niente da nessuno; gli archi bitemporali di D3 restano eleganti e diventano rilevanti **solo
dopo** che qualcosa scrive da solo — oggi renderebbero più raffinata una cosa immobile.

**D6 non ha bisogno di rilevare la deriva: ha bisogno di parlare a Giuseppe.** Tutta la
famiglia fitness-function/ADR/CI è inapplicabile (non c'è git) e comunque risolve il problema
sbagliato. Il campo `name` non è mancato perché nessuno *sapeva* controllarlo: è mancato perché
il canale su cui i controlli parlano è lo stdout di `SessionStart`, che finisce nel contesto di
Mnemosyne e non davanti agli occhi di Giuseppe. Il pezzo che serve non è un rilevatore, è un
**altoparlante**: il campo JSON `systemMessage`. Una riga di formato, non un'architettura.

**D5 si dissolve nella verifica.** L'Argonauta è andato a guardare e ha trovato che Giuseppe
non usa Google Calendar né Obsidian né Notion. Sei server MCP maturi non servono a niente se
nessuno collega la vita che Giuseppe vive davvero. La domanda giusta non era «quali connettori
esistono» ma «cosa fa Giuseppe ogni giorno che il sistema non vede» — e la risposta, oggi, è
che il sistema non vede *nulla* di quello che fa, perché nessuno gliel'ha mai chiesto in un
file.

## Contro — le obiezioni serie a quanto sopra

**«L'accensione è una diagnosi comoda: rimanda ogni costruzione.»** È il rischio vero. Se
"prima accendiamo, poi costruiamo" diventa la regola, il sistema si congela. La correzione: il
piano che propongo *costruisce* quattro cose. La differenza non è costruire meno — è che ogni
cosa nuova nasce con il proprio innesco già cablato, e nessuna nasce senza.

**«Il rapporto 4:1 è normale in fase di costruzione.»** Vero per le prime settimane. A otto
settimane, con un esame passato e non registrato, non è più fase di costruzione: è abitudine.

**«La collector's fallacy è una lettura psicologica, non un dato.»** Giusto: il salto da
"749 contro 17" a "costruire è il piacere" è mio, non misurato. Lo dichiaro come lettura. Il
dato è il rapporto; l'interpretazione è mia e Giuseppe può rifiutarla — ma allora deve
spiegare il 17.

**«Chi dice che l'hook regga più di un comando manuale?»** Nessuno, in generale. Nella
navicella sì: 4 su 5 contro 6 su 28, misurati su cinquantasei giorni. È il campione che c'è.

## Non confermato

- L'interpretazione della collector's fallacy applicata alla navicella stessa è **mia lettura**,
  non un risultato di D8: D8 la riporta come modalità di fallimento dei sistemi di note.
- Il conteggio «4 su 5» e «6 su 28» è la mia aggregazione delle tabelle di D11, non un numero
  che D11 dichiara: ho classificato come «con hook» i cinque procedimenti agganciati a
  `settings.json` e come «con fame» il corpus-PDF, che conto a parte nel testo.
- «Oltre un milione di token» per questa giornata è una stima dai contatori dei sub-agenti
  riportati nelle notifiche (sette misurati, tre morti senza contatore): ordine di grandezza,
  non misura.

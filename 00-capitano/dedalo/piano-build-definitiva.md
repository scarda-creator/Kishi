---
type: piano
autore: Dedalo (Architetto)
data: 2026-08-12
oggetto: build definitiva delle risorse d'esame — mappa dell'intero prima di costruire
stato: in esecuzione
---

# La build definitiva — mappa dell'intero

Ordine di Giuseppe: perfezionare Meccanica, rendere **totale** il percorso di matematica per i
due scritti (larghezza degli argomenti, dettaglio teorico, esercizi), e chiudere con
l'automazione degli aggiustamenti. È l'ultimo lavoro di fino: da qui lui studia, quindi
**definitivo** vuol dire che non deve tornare a chiedere pezzi mancanti.

Le carenze da cui parte tutto sono misurate in `giudizio-risorse-esami.html` (12-08).

## I quattro cantieri, e in che ordine

| # | Cantiere | Perché in questa posizione | Esito atteso |
|---|---|---|---|
| 1 | **Quiz di Metodi** — 8 pool | L'esame più scoperto: zero strumenti a 28 giorni. La materia prima è pronta (mappa b01, 65 esercizi risolti b03) | ~240 unità, verifica PASS |
| 2 | **Produzione su Analisi Vettoriale** | Il difetto di gesto: 93% a scelta multipla. Colpisce la causa dichiarata della bocciatura | 30+ unità multi-passo nei 10 pool |
| 3 | **Percorso totale AV+Metodi** | Larghezza, teoria, esercizi. È il libro su cui studia, e oggi spiega ma non interroga | riequilibrio + esercizi nei nuclei vuoti |
| 4 | **Lavagne di Meccanica** | Orale a 29 giorni: promesse ~105, consegnate 34 | +~25, scelte per probabilità d'uscita |
| 5 | **Iperione** — misura automatica | Chiude il ciclo: creare, correggere, immagazzinare, migliorare | controllo al SessionStart |

## 1. Quiz di Metodi — gli 8 pool

Scheletro già scritto in `02-accademico/corsi/metodi-e-modelli/03-note-mie/Quiz_MetodiModelli_v1.html`
(istanza del template, POOLS dichiarati, tutti `todo`). I frammenti vivono in
`02-accademico/corsi/metodi-e-modelli/banca-esercizi/frags/<id>.js` come `Q.<id> = [...]`:
un Demiurgo per frammento, nessuna collisione, assemblaggio con `quiz_assembla.js`.

I pool nascono dalla frequenza reale negli appelli (passata b01, 9 appelli mappati), non dal
programma ufficiale — che promette espansioni asintotiche mai comparse in nessuno scritto.

| id | pool | frequenza reale | fonti |
|---|---|---|---|
| `green` | Funzione di Green, sorgente regolare | 4/9 | b01 §tipi, b03 Set 4 |
| `greendelta` | Green con sorgente δ e δ′ | 4/9 | b01, b03 Set 4, nucleo 15 |
| `polidrome` | Funzioni polidrome: tagli e integrali | 4/9 | b01, nuclei 11 e 14 |
| `matrici` | Funzioni di matrice via teorema spettrale | 5/9 | b01, b03 Set 1, nucleo 16 |
| `fourier` | Trasformata e serie di Fourier via residui | 5/9 | b01, b03 Set 3, nuclei 9 e 13 |
| `integrali` | Integrali reali per contorno | 5/9 | b01, nucleo 13 |
| `laurent` | Laurent, singolarità, residui | 3/9 | b01, nucleo 12 |
| `spettro` | Operatori differenziali, autofunzioni | 4/9 | b01, b03 Set 2, nucleo 16 |

Densità: 30 unità per pool secondo il protocollo — metà concettuali, metà esercizi, almeno due
di *modus operandi* (come si attacca il tipo), e le **trappole già catalogate** in b01 usate
come distrattori. Ogni soluzione cita il teorema.

## 2. Analisi Vettoriale — dal riconoscere al produrre

Non si rifà il quiz: si innestano unità **multi-passo** nei 10 frammenti esistenti, tre per
pool, sul modello delle 22 che già esistono. Ogni passo è un pezzo del conto che si scrive; la
correzione arriva dopo il tentativo. Più una **simulazione d'appello** a tempo, che oggi manca
del tutto.

## 3. Il percorso — cosa lo rende totale

Tre interventi, in ordine di resa:
1. **Riequilibrio verso ciò che esce**: un nucleo che tratti la funzione di Green *come tipo
   d'esame* (oggi la teoria è nel 15, ma il gesto no) e i tagli delle polidrome come procedura.
2. **Esercizi dove non ce ne sono**: nuclei 10, 20, 21, 22 hanno zero esercizi.
3. **Dettaglio teorico sui passaggi dati per scontati** nei nuclei 00–09, che sono di prima
   generazione e non hanno mai avuto la revisione a freddo.

## 4. Meccanica — le lavagne che contano

Non 105 per arrivare al numero: ~25 scelte per probabilità di essere chieste all'orale — i
teoremi che si *derivano* alla lavagna (König, momento angolare, Foucault, Keplero, d'Alembert,
Bernoulli, Steiner). Il criterio è la resa, non il conteggio.

## 5. Iperione — l'automazione degli aggiustamenti

Il ciclo che Giuseppe chiede — creare, correggere, immagazzinare, migliorare — oggi si spezza
sempre nello stesso punto: **nessuno misura ciò che è stato prodotto.** Iperione, che nel
disegno dei Titani è la telemetria, esce dai log di esecuzione e diventa l'occhio sulle opere:
conta le unità per pool, il rapporto fra riconoscere e produrre, la copertura dei tipi d'esame
reali, le promesse dichiarate contro quelle mantenute. Gira nel verificatore, accanto al
registro: così una risorsa che si degrada lo dice da sola, come un procedimento che si raffredda.

# Percorso saper-fare — Geometria (Algebra Lineare)

> **SOSTANZA DA VERIFICARE — generata in notte autonoma** (Dedalo, 2026-07-12). La correttezza
> matematica dei singoli blocchi va ratificata da svegli (Giuseppe / Demiurgo Accademico), come si
> fece con le lavagne Focardi. Questo file-guida (struttura, smistatore, note di percorso) è invece
> materiale d'architettura, non matematica da verificare.

Corso: Geometria per Fisici · docente Diverio · La Sapienza. Base: `02-libro-di-testo/01-mappa-esercizi.md`
(10 tipi ricorrenti, 106 compiti) e i capitoli 1–2 già scritti.

## Cos'è — e cosa NON è

Non è un quiz (non ti interroga) e non è il libro di testo (non ti ri-spiega la teoria da zero). È il
**gemello operativo**: distilla, per ciascun tipo d'esame, il *gesto* — come lo riconosci in cinque
secondi, perché il metodo funziona, come lo esegui senza esitare, un esame vero svolto per intero, le
varianti che l'hanno cambiato negli anni, e un collaudo per provartelo addosso. L'obiettivo è la
**fluenza procedurale**: non "so cos'è un autospazio" ma "vedo la matrice e la mano parte".

Dove esiste già un capitolo (sottospazi, diagonalizzabilità) il saper-fare ci si appoggia per il
*perché* e carica sul *fare*. Dove non esiste, porta lui il carico, ma resta più asciutto del capitolo.

## Struttura di ogni blocco (sei sezioni fisse)

1. **La firma** — riconoscerlo dal testo in cinque secondi: le parole-spia, gli oggetti-spia, cosa NON
   confondere con cosa. È la sezione che i materiali normali saltano, ed è quella che agli esami fa la
   differenza fra chi sa il metodo e chi sa *quando* usarlo.
2. **L'idea** — il principio first-principles su cui poggia tutto il metodo, in una riga, con la
   deduzione breve se è breve.
3. **La mossa** — il procedimento passo-passo, con le **Trappole** documentate inline, al passo esatto
   dove si cade (rif. esame reale).
4. **Un esame, per intero** — un problema vero della banca-dati, svolto con tutto il calcolo, fonte citata.
5. **Le varianti** — la famiglia di come il tipo è comparso negli anni, ciascuna in una-due righe.
6. **Collaudo** — uno-tre sotto-problemi reali, solo con la risposta per auto-verifica (non lo svolgimento).

## Lo smistatore — dal problema al saper-fare

Leggi il testo dell'esercizio e cerca l'oggetto-spia. La colonna destra è il file da aprire.

| Nel testo vedi… | È… | Saper-fare |
|---|---|---|
| `Span{...}`, `U∩W`, `U⊕W`, "è un sottospazio?", `dim(U+W)` | struttura lineare da montare/decidere | **01 · Sottospazi** |
| un sistema con un **parametro** (`k`, `t`, `a`) e "per quali valori… soluzioni" | Rouché–Capelli parametrico | **02 · Sistemi parametrici** |
| `f: V→W`, `ker`, `im`, "matrice associata", "cambio di base", un **operatore su polinomi** | applicazione lineare | **03 · Applicazioni lineari** |
| "è diagonalizzabile?", autovalori, `m.a.` vs `m.g.`, matrice `C` diagonalizzante | autostruttura | **04 · Diagonalizzabilità** |
| autovalore **ripetuto** e "non diagonalizzabile", `rk(A−λI)`, "sono simili?", blocchi | Jordan / non-diag | **05 · Jordan** |
| prodotto scalare da verificare def. positivo, "base ortonormale", Gram–Schmidt | metrica + ortogonalizzazione | **06 · Gram–Schmidt** |
| matrice **simmetrica** da diagonalizzare, "base ONB di autovettori", `W⊥` | teorema spettrale | **07 · Spettrale** |
| "segnatura", forma bilineare/quadratica, `α` parametro nella forma, vettore **isotropo** | segnatura | **08 · Segnatura** |
| `⟨A,B⟩=tr(AᵀB)`, "operatore simmetrico/autoaggiunto", "isometria", `T(A)=±Aᵀ` | operatori su matrici | **09 · Operatori simmetrici** |
| `z`, `z̄`, `M₂,₂(ℂ)`, "indipendenti su ℂ", `z²=±z̄²` | strutture su ℂ | **10 · Complessi** |
| rette/piani in `E³`/`R³`, distanze, rette sghembe | geometria analitica | **11 · E³** (raro dal 2017) |

Ambiguità frequenti risolte: *matrice simmetrica* → se va **diagonalizzata** è 07, se ci definisci una
*forma* e chiedi la **segnatura** è 08. *Operatore su polinomi* → se chiede ker/im è 03, se ci metti un
*prodotto scalare* e chiedi ortonormale è 06. *Sottoinsieme di matrici "è sottospazio?"* → è 01, ma se
la condizione è `det=0` o "diagonalizzabile" ricordati che la risposta è **no** (vedi 01, le trappole).

## Ordine consigliato di percorrenza

01 → 02 → 03 costruiscono il motore (montare spazi, risolvere sistemi, leggere applicazioni). 04 → 05
sono la coppia autostruttura (diagonalizzo / e quando non posso). 06 → 07 la coppia metrica
(ortogonalizzo / diagonalizzo ortogonalmente). 08 → 09 → 10 sono la **direzione attuale del corso**
(segnatura parametrica, operatori su matrici, strutture complesse: in salita costante 2019–2024, presenti
in tutti gli esami recenti — vanno saputi bene). 11 (E³) è uscito dal corpus dal 2017: ultimo, leggero,
solo per completezza storica.

## Stato di costruzione

**Percorso COMPLETO** — 11/11 saper-fare a terra (notte del 2026-07-12, con ripresa mattutina dopo un
reset di limite intercorso a SF08; nulla perso grazie alla persistenza incrementale). Tutti portano la
marca "SOSTANZA DA VERIFICARE": la correttezza matematica va ratificata da svegli (Giuseppe / Demiurgo
Accademico), come per le lavagne Focardi.

| File | Tipo mappa | Esame svolto (fonte) | Verifica |
|---|---|---|---|
| `01-sottospazi.md` | #1 | prova20240207 Es.2 | da ratificare |
| `02-sistemi-parametrici.md` | #4 | prova20190121 Es.1 (trap $k=\tfrac12$) | da ratificare |
| `03-applicazioni-lineari.md` | #5 | prova20190121 Es.2 | da ratificare |
| `04-diagonalizzabilita.md` | #2 | soluzioniesame20200204 Es.3 | da ratificare |
| `05-jordan.md` | #10 | prova20240207 Es.1 | da ratificare |
| `06-prodotto-scalare-gram-schmidt.md` | #3a | Prova23_01_23 Es.1 (trap gen. dipendenti; refuso OCR segnalato) | da ratificare |
| `07-teorema-spettrale.md` | #3b | soluzioniesame20200204 Es.5 | da ratificare |
| `08-segnatura.md` | #8 | 2024-07-09 Es.3 (segnatura parametrica) | da ratificare |
| `09-operatori-simmetrici.md` | #9 | Prova23_01_23 Es.5 | da ratificare |
| `10-complessi.md` | #6 | soluzioniesame20200204 Es.1 | da ratificare |
| `11-geometria-e3.md` | #7 | esempio ricostruito (E³ assente dal corpus post-2017) | da ratificare |

Priorità di ratifica suggerita: prima i tipi ad alta frequenza e in salita (08, 06, 07, 05, 04, 10), dove
un errore di segno/coefficiente pesa; 11 è storico e a bassa priorità. Punto già segnalato in `06`: refuso
OCR nella relazione di dipendenza dell'esame ufficiale (la base e il seguito sono coerenti col valore corretto).

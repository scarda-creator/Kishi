---
type: stato
---

# Cantiere notturno

> Spina dorsale della ripresa. Lista ordinata dei task pendenti con stato.
> Letto da Mnemosyne su "riprendi" e dal comando `/oroboro`.
> Regola di sicurezza: solo i task **AUTONOMI** possono essere eseguiti senza
> Giuseppe. Restano di Giuseppe le decisioni di **rotta** (cosa creare, dove
> andare) e di **merito**. La **gestione della memoria** — intake, promozioni L4,
> scritture L5, cernita — è invece autorità di Mnemosyne/Rapsodo (direttiva
> Giuseppe 2026-08-02): non è più "richiede consenso", è gestione dell'esistente.

Aggiornato: 2026-08-02

---

## Finestra oroboro attiva
<!-- Popolata da /oroboro dopo conferma: inizio, scadenza (inizio + 12h), trigger id -->
**CHIUSA al session-limit ~6:10, completamento diurno in corso (2026-07-12).**
Esito notte: SF01-07 completi + SF08 parziale prodotti da Dedalo prima che il
**session limit** spegnesse l'intera sessione (~6:10, reset 6:10). La ripresa
automatica NON è avvenuta — LEZIONE: il meccanismo event-driven usa il budget
corrente e **non attraversa il reset del session-limit** (era già annotato il
2026-07-02: "non attraversa il reset"; errore di diagnosi di Mnemosyne, che ieri
ha coperto la morte-da-standby col PC sveglio ma NON la morte-da-session-limit).
Serve un risvegliatore ESTERNO alla sessione (Windows Task Scheduler locale, o
rotaia B cloud `/schedule`) — struttura da progettare con Giuseppe, non stanotte.
Nessun lavoro perso (persistenza incrementale ha tenuto). Ripresa diurna: Dedalo
completa SF08-11 col budget tornato, poi Giuseppe convoca Dedalo alla plancia.
PC ancora sveglio (standby off — da ripristinare post-AV).

---

## AUTONOMI — additivi, già approvati (eseguibili senza conferma)

### Percorso saper-fare Geometria — TARGET AUTONOMO CORRENTE (2026-07-12)
Forma approvata da Giuseppe. NON un quiz: un percorso nel *saper fare* tutti gli
esercizi d'esame. Agente: Dedalo (Giuseppe lo ha voluto lui alla guida; sperimenta
il formato entro il perimetro). Materiale: `02-accademico/corsi/geometria/01-banca-dati/`
(esami, molti con soluzioni in `fwdesame4_soluzioni/`) + `02-libro-di-testo/01-mappa-esercizi.md`
(già esistente, punto di partenza) + capitoli 1-2 già scritti. Pipeline: estrarre
testo con `pdf_estrai_testo.py` PRIMA di leggere i PDF (protocollo cementato, no overflow).
Forma per ogni *tipo* ricorrente (~10-12 saper-fare che coprono i 106 compiti):
(1) riconoscimento — firma del problema; (2) idea first-principles; (3) procedimento
passo-passo coi trabocchetti; (4) un esame svolto per intero, calcolo incluso;
(5) varianti viste agli esami. Output in `02-accademico/corsi/geometria/03-percorso-saperfare/`,
un file per saper-fare, persistito appena fatto (i reset non perdono nulla).
**Ogni blocco porta la marca "SOSTANZA DA VERIFICARE — generata in notte autonoma"**
finché Giuseppe/Demiurgo Accademico non controlla la correttezza matematica (come
le lavagne Focardi). MathJax + verifica integrità da blueprint quiz.

### Quiz Meccanica orale — pool 2-11 (TARGET AUTONOMO CORRENTE)
Priorità corrente. Agente: Demiurgo Accademico. Build incrementale, un pool per
firing. **Prerequisito:** motore + pool 1 già atterrati e schema noto (altrimenti
non partire). File: `02-accademico/corsi/meccanica/03-note-mie/Quiz_Meccanica_Orale_v1.html`.
Fonti: Programma Pisano + Focardi (leggere le pagine pertinenti al pool, non tutto).
MathJax 3 via CDN. Sei tipi di domanda, toggle Stecca/Lavagna.
Motore + Pool 1 (grandezze + calcolo vettoriale) = FATTI (45 domande, 2026-07-03).

**FONTE FOCARDI — RISOLTO (2026-07-03):** il `_text.pdf` è una SCANSIONE OCR,
non un testo digitale. Tooling di lettura sbloccato (Python 3.12 + pymupdf estrae
il testo senza pdftoppm), MA lo strato di testo ha la MATEMATICA corrotta (prosa
integra, formule distrutte). Inutilizzabile come fonte di dimostrazioni canoniche.
Decisione: i pool dimostrativi (7, 8, 9, 11; e 3, 5, 10) si producono dal CANONE
GENERALE del Demiurgo — dimostrazioni universali (König, Steiner, Keplero,
d'Alembert) identiche in ogni libro — marcate "da ricontrollare sul Focardi",
Giuseppe verifica sulla copia fisica. Se servisse fedeltà stretta: caricare un
Focardi digitale pulito o trascrivere le prove specifiche. Palette: ricreata ex
novo (dark teal/cyan), NON la v15.

- [x] Pool 1 — Grandezze fisiche + calcolo vettoriale (45 domande)
- [x] Pool 2 — Cinematica del punto (37 domande)
- [x] Pool 3 — Cinematica relativa (Coriolis) (37 domande)
- [x] Pool 4 — Principi della dinamica + impulso (37 domande)
- [x] Pool 5 — Applicazioni della dinamica (oscillatore smorzato/forzato) (37 domande)
- [x] Pool 6 — Energia e lavoro (35 domande)
- [x] Pool 7 — Dinamica dei sistemi (CM, König, urti) (34 domande)
- [x] Pool 8 — Corpi rigidi (Steiner, rotolamento) (33 domande)
- [x] Pool 9 — Gravitazione (Keplero, potenziale efficace) (33 domande)
- [x] Pool 10 — Fluidi (Stevino, Archimede, Bernoulli) (33 domande)
- [x] Pool 11 — Onde (d'Alembert, Doppler) (32 domande) — QUIZ COMPLETO (391 domande totali, 2026-07-03)

### Libro Geometria — IN PAUSA dal 2026-07-02 (istruzione di Giuseppe)
Sospeso per dare priorità al quiz Meccanica. NON riprendere in autonomia finché
Giuseppe non lo riattiva esplicitamente. Ordine residuo quando riprende:
3 → 6 → 8 → 9 → 5 → 4 → 7 → App.A. Taglio lean, sezione 5 "Metodi" pesata forte.

- [x] Cap. 1 — Sottospazi vettoriali (scritto + controesempio corretto)
- [x] Cap. 2 — Diagonalizzabilità e autostruttura
- [ ] Cap. 3 — Prodotto scalare, Gram–Schmidt, Teorema spettrale
- [ ] Cap. 6 — Forme bilineari, segnatura, Sylvester
- [ ] Cap. 8 — Jordan, triangolarizzabilità, non-diagonalizzabilità
- [ ] Cap. 9 — Numeri complessi e strutture su ℂ
- [ ] Cap. 5 — Applicazioni lineari
- [ ] Cap. 4 — Sistemi lineari parametrici
- [ ] Cap. 7 — Operatori simmetrici e isometrie su spazi di matrici
- [ ] App. A — Geometria analitica E³ (leggera)

---

## MEMORIA — ESEGUITI da Mnemosyne (direttiva Giuseppe 2026-08-02)

La direttiva del 2026-08-02 («gli intake, L4 e tutti i passaggi sulla memoria gestiti da
Mnemosyne e dal Rapsodo; mia deve essere la rotta») toglie il cancello-consenso alle voci di
memoria. Chiuse in questo giro:

- [x] **Promozioni L4** dall'intake 2026-07-02 — evase con giudizio di merito. PROMOSSE (3 voci in
  `memoria/L4-fondazionale.md`, 2026-08-02): (1) velivolo monoposto come progetto concreto con
  specifiche; (2) criterio L1/L2 di validazione della comprensione; (3) grammatica
  videoludica/avventurosa come estetica-identità. SCARTATE con motivo: modulo Business come L4
  (resta L3 — già nella voce riframe 17/18, è direzione strategica non identità); posizione RSI L1+
  (già assorbita in L4/archivio, patto dataset-evoluzione 2026-06-26 — il framing RSI è vocabolario).
- [x] **Deposito L5** — 4 pattern raw depositati 2026-07-03 (consenso Giuseppe) in
  `L5/pattern-longitudinali/`: `traiettoria-avventura-strutturata`, `figure-storiche-domini`,
  `velivolo-liberta`, `pensiero-ingegneristico-trasversale`.
- [x] **Arricchimento profilo-giuseppe.md** con le specifiche del progetto aereo — FATTO 2026-08-02
  (voce "Velivolo monoposto ultraleggero" negli interessi paralleli, specifiche integrali). Fonte
  tecnica preservata in `chat-archive/assorbiti-2026-07-02/2026-cowork_progetto-aereo-monoposto.md`.
- [x] **Eliminazioni file intake** — RISOLTE per migrazione, non cancellazione (niente oblio).
  Verificato 2026-08-02: gli 8 file ELIMINA sono già in `chat-archive/assorbiti-2026-07-02/`; la
  cartella `intake/` è pulita. Nulla da cancellare.
- [x] **Verifica regola "mai bypassare passivi" + "notifica cambiamento strutturale" in
  `.claude/agents/capitano.md`** — mancavano entrambe; aggiunte 2026-08-02 (sezione "Regole
  strutturali").

## RESTA A GIUSEPPE — direzione / identità / merito (non memoria)

Queste non sono gestione della memoria: toccano il merito o la rotta. Restano sue.

- [ ] Calibrazione cap. 2 (Geometria): il sottocaso "operatore definito per ker/immagini"
  (`Geometria 2024-01-22`) è rimandato al cap. 5 come da indice. Il Demiurgo chiede se confermi lì
  o vuoi un cenno già al cap. 2. → decisione di merito di Giuseppe.

---

## Consuntivo ultima ripresa
<!-- Aggiornato a fine finestra oroboro o a fine sessione manuale -->

**2026-07-12 — Percorso saper-fare Geometria COMPLETATO (11/11)** in due tempi.
Notte (Dedalo, event-driven): SF01-07 completi + SF08 intero, fino al session-limit
~6:10. Ripresa diurna (budget tornato): SF09-11. File in
`02-accademico/corsi/geometria/03-percorso-saperfare/` (12 file, 00-percorso.md =
indice+smistatore). Dedalo ha osato dentro il perimetro: smistatore problema→saper-fare,
6ª sezione "Collaudo", ordine di ratifica per frequenza. DA VERIFICARE (marca su tutti,
correttezza matematica da ratificare Giuseppe/Demiurgo): priorità 08,06,07,05,04,10.
Due note di Dedalo: (1) SF06 segnala un refuso OCR nell'esame ufficiale, dipendenza
corretta `2v1-4v2+v3=0` (verificata al calcolo); (2) SF11 (E³) è esempio RICOSTRUITO
dal metodo canonico — E³ assente dal corpus post-2017 — dichiarato come tale, non
spacciato per banca-dati.
LEZIONE OROBORO (registrata anche in finestra + log): l'event-driven non attraversa
il reset del session-limit → serve un risvegliatore esterno (Task Scheduler locale o
rotaia B cloud). Falso negativo Glob osservato subito dopo scritture massive: verificare
sempre con `ls` prima di dichiarare perdite.

**2026-07-03 — Quiz orale Meccanica COMPLETATO** (catena manuale pool-per-pool via
Demiurgo Accademico, notifiche di completamento). Tutti gli 11 pool a terra:
391 domande, 44 dimostrazioni-lavagna T6. Distribuzione per pool ~40/30/30
(concettuale / dimostrazioni / identifica+perché). File:
`02-accademico/corsi/meccanica/03-note-mie/Quiz_Meccanica_Orale_v1.html`.

VERIFICA APERTA (non risolvibile senza copia fisica): tutto il canone fisico è
prodotto da conoscenza standard perché il Focardi OCR è corrotto. Ogni header di
pool e ogni `prov` di lavagna porta la marca "DA RICONTROLLARE SUL FOCARDI".
Priorità di ricontrollo: le 44 lavagne T6 (derivazioni — è lì che un errore di
segno/coefficiente pesa). → verifica di Giuseppe sulla copia fisica + doc a mano.

VERIFICA TECNICA (browser): controllare la resa MathJax di `\boxed`, `\underbrace`,
`\cancel`, `\oint`, `\vec\nabla\times`, `\begin{vmatrix}` — segnalati come
supportati dal preset tex-svg ma non verificati a runtime.

PENDENTE (Mnemosyne, "appena puoi"): `/genera-manuale` — rigenerare
Manuale-navicella.pdf ora che Python è disponibile (il "posto dove ricontrollare
come ottenere ogni cosa").

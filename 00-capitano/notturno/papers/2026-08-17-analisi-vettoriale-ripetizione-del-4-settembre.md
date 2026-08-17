# Analisi Vettoriale — ripetizione del 4 settembre

Run notturno del 2026-08-17, avviato 05:27 dall'Utilità di pianificazione.
**Stato: in corso** — sezioni 1 e 2 chiuse, sezione 3 in scrittura.

---

## 1. Il problema

La coda diceva: «verifica se la copertura del quiz corrisponde a ciò che gli esami chiedono
davvero, ed estendilo dove è scoperto». Il problema vero, sotto la formulazione, è un altro e
più stretto.

Il quiz AV esiste da luglio, 10 pool, 348 domande. È stato costruito **contro una mappa di
frequenze dichiarata** (`banca-esercizi/mappa-esercizi.md`), scritta dall'Argonauta a partire
da due passate di lettura (`b01.md` 2022-23, `b02.md` 2024-25) e dalla tassonomia A-H del
manuale `analvett.tex`. Quella mappa dice, per esempio, «EDO ~100%, superfici ~95%, serie
~65%, conservativi ~50%». Nessuno ha mai verificato quei numeri contro i testi.

E soprattutto: la mappa ragiona per **famiglie** (dieci pool = dieci famiglie), mentre il
compito d'esame non chiede famiglie, chiede **catene di sotto-punti**. Il fallimento del 17
luglio è stato diagnosticato da Giuseppe stesso in questi term(`debrief-esame-2026-07-17.md`):

> non ha portato il percorso abbastanza in profondità da capire davvero **tutti i tipi di
> esercizio e tutte le variazioni** possibili […] abbastanza procedura per *vedere* le
> varianti, non abbastanza comprensione per dominarle.

Quindi il buco da cercare non è «manca il pool X». I dieci pool ci sono tutti. Il buco è
**dentro** i pool: sotto-tipi che l'esame chiede sistematicamente e che il quiz sfiora o non
tocca. Un pool con 30 domande che coprono 8 sotto-tipi su 14 è formalmente «coperto» e
sostanzialmente scoperto — ed è esattamente la condizione che produce l'esito del 17 luglio.

Secondo problema, di calibrazione: il quiz distribuisce le domande in modo che **non
riflette** la frequenza reale. `curve` ha 53 domande, `serie` 30 — e agli esami le serie
compaiono più del doppio delle curve come esercizio autonomo.

---

## 2. Come ho ragionato

### 2.1 Rifare il conto delle frequenze, dai testi, non dalla mappa

Il testo estratto dei PDF esisteva già in `01-banca-dati/_txt/` (protocollo pipeline-corpus,
rispettato: non ho aperto un solo PDF). Ho letto **direttamente le tracce di 15 appelli**:
20220124, 20230210, 20230504, 20230621, 20230705, 20230907, 20240122, 20240209, 20240305,
20240619, 20240704, 20250116 (indice), 20250127, 20250214 (proposta feb25), 20250627, 20250721
(luglioAV). Sei appelli del 2022-23 (20220504, 20220622, 20220706, 20220907, 20230123) li ho
solo attraversati per indice: le loro tipologie erano già mappate in `b01.md` e il quiz le cita
in `src`. **Dichiaro il limite**: le frequenze sotto sono contate su 15 compiti letti per
intero, non su 21.

Frequenza misurata (compiti in cui la famiglia compare, su 15) contro frequenza dichiarata
nella mappa:

| Famiglia | mappa dichiarava | misurato | domande nel quiz |
|---|---|---|---|
| Gauss: volume + flusso | ~100% | **15/15** | 30 |
| Superfici: param. + area + bordo | ~95% | **15/15** | 32 |
| EDO / Cauchy qualitativo | ~100% | **14/15** | 52 |
| Serie e successioni di funzioni | ~65% | **12/15 (80%)** | 30 |
| Ottimizzazione libera e vincolata | ~85% | **11/15 (73%)** | 30 |
| Differenziabilità con parametro | ~55% | 8/15 (53%) | 31 |
| Campi conservativi / forme | ~50% | 8/15 (53%) | 30 |
| Stokes / circuitazione | ~80% | 8/15 — ma **mai autonomo** | 30 |
| Dini / funzioni implicite | ~45% | 6/15 (40%) | 30 |
| Curve: param. + integrali di linea | ~75% | **4/15 come esercizio autonomo** | 53 |

Due scoperte strutturali, che la mappa per famiglie non poteva vedere.

**(a) Stokes non è un esercizio: è la coda di un esercizio di superfici.** In nessuno dei 15
compiti Stokes compare da solo. Compare sempre come punto (v) o (vi) di un esercizio che parte
da «riconoscere che Σ è il sostegno di una superficie regolare». E quella catena —
*regolarità → versore normale con verso imposto → area → parametrizzazione del bordo (curva o
unione di curve) → rot F → circuitazione compatibile* — è **un esercizio intero da 6,5-7
punti in 8 compiti su 15: tutti e otto gli appelli dal settembre 2023 in poi**. È la forma più
stabile e più recente del compito, e vale il 10% del voto.

**(b) Le curve autonome sono la famiglia più sovra-rappresentata nel quiz.** 53 domande contro
4 apparizioni come esercizio a sé. Le curve *contano* eccome — ma contano come **sotto-passo**
(parametrizzare il bordo, verificare regolarità e semplicità di una γ data, calcolare un
lavoro), e in quel ruolo vivono dentro superfici, conservativi e Stokes.

### 2.2 Il criterio di estensione: sotto-tipi, non conteggi

Da qui la decisione di metodo. Non riequilibro i numeri (sarebbe cosmetica: togliere domande
a `curve` non insegna niente a nessuno, e cancellare lavoro buono è il contrario di quanto
chiesto — «non riscrivere ciò che già copre bene»). Estraggo invece dai 15 testi l'**elenco
dei sotto-tipi effettivamente richiesti**, ciascuno con la sua frequenza, e verifico uno per
uno se il quiz lo tocca. Dove non lo tocca, aggiungo.

Sotto-tipi ad alta frequenza estratti dai testi (la lista di lavoro completa, con l'esito
della verifica di copertura, sta nella sezione 3):

- **Volume per strati / sezioni** e coordinate adattate a domini traslati:
  `(x−z)²+y²≤4`, `(x−(1−z))²+y²≤(1−z)²`, `1+z² ≤ √(x²+y²) ≤ 3−z²`.
- **«Le tre superfici che compongono la frontiera»**: parametrizzarle tutte, individuare il
  bordo di ognuna, e calcolare il flusso **attraverso ciascun pezzo** — non solo il totale via
  Gauss. Sei apparizioni.
- **Bordo composto da più curve**: quattro archi (20240209), unione di archi sulla sfera
  ritagliata `0≤y≤x` (feb25).
- **Orientazione con terza componente NEGATIVA**: il segno da ribaltare rispetto alla
  parametrizzazione naturale (20240305, 20250127).
- **Convessità/concavità della soluzione EDO in un intorno di t₀**, derivando l'equazione senza
  risolverla. Quattro apparizioni.
- **Globalità per confronto con le soluzioni costanti** usate come barriere (l'unicità
  impedisce l'attraversamento). È *la* tecnica ricorrente per «provare che la soluzione è
  globale»: luglioAV, feb25, 20250127, 20240704, 20230907, 20240305.
- **Convergenza uniforme su intervalli assegnati**, con confronto sì/no fra intervalli:
  `[−2,2]` sì, `[2,+∞)` no, `[2,10]` sì. È la forma reale della domanda, molto più che la
  convergenza totale in astratto.
- **lim ∫fₙ**, incluso il taglio «provare che il limite è 0 **senza** calcolare l'integrale».
- **Serie di potenze mascherata da sostituzione**: `Σ logⁿ(x)/(n²+1)`, `Σ (arctan x²)ⁿ`.
  Raggio nella variabile sostituita, poi ritorno a x.
- **Derivata della somma**: `S′(1)` per scambio derivata-serie (20240619).
- **Max/min assoluti su insiemi NON compatti**: «esistono in ℝ²?» — no, e la prova è una
  restrizione illimitata (`F(0,y)=y³+1`). Cinque apparizioni; è la domanda-trappola.
- **Ottimizzazione vincolata su intersezione di due superfici** (sfera ∩ piano, cilindro ∩
  piano) con Lagrange a due vincoli.
- **Conservativi con parametro**, catena piena: per quali a è irrotazionale → primitive
  esplicite → circuitazione al variare di a (Green quando non conservativo). Tipo dominante.
- **Trovare la funzione incognita** perché il campo sia conservativo / la forma esatta:
  `f(y)` in 20230504, `Ψ(y)` in luglioAV. Sotto-tipo con richiesta invertita.
- **Dini: natura dei punti critici di g**, cioè g″ dove g′=0, e monotonia di g in un intorno.
  È la richiesta standard dell'Es.1 di gennaio-febbraio, non la retta tangente.
- **Dini in 3D**: `g(x,y)` da `f(x,y,z)=c`, più piano tangente al grafico di g.
- **Derivate direzionali come punto separato** dalla differenziabilità, al variare di α.
- **Differenziabilità in un punto diverso dall'origine**, con `√|·|` (20240619 Es.5).
- **Superficie di rotazione**: parametrizzare la rotazione di una γ attorno a un asse
  (20250127 Es.5) e poi applicare Gauss al solido che delimita.
- **Momento d'inerzia / massa di un solido** (20250627 Es.3.ii).

---

## 3. Cosa ho fatto

### 3.0 Un guasto trovato per strada: 64 accenti illeggibili

Verificando l'architettura del quiz ho scoperto che l'artefatto che Giuseppe legge conteneva
**64 punti in cui un accento appariva a schermo come `̀` letterale**: «la frontiera ∂V
`è` fatta di tre superfici». La causa: chi ha scritto
`banca-esercizi/frags/gauss.js` ha usato la convenzione `e\\u0300` (doppio backslash), che in
JavaScript produce la stringa letterale `è` invece del carattere `è`. Nessuna
normalizzazione a valle nell'engine, quindi il difetto arrivava intatto sullo schermo.

Perimetro accertato: **solo `gauss.js`, solo il quiz AV**. Metodi, Meccanica e Geometria sono
puliti (0 occorrenze), e negli altri nove frammenti AV pure. Un frammento scritto in una
passata con quella convenzione, mai riletto a schermo.

Riparato per composizione Unicode (lettera + combining → forma NFC): 64/64, zero residui,
`Q.gauss` ricarica 30 unità sotto Node. Il fix è nel **frammento**, non nell'HTML, perché è il
frammento la fonte di verità — l'HTML si rigenera.

*(seguono le estensioni dei pool — in corso)*

---

## 4. Perché così e non altrimenti

*(in corso)*

---

## 5. Cosa resta aperto

*(in corso)*

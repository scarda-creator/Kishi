# Mappa esercizi — Geometria (Algebra Lineare)
Corso: Geometria per Fisici · Dip. Matematica, La Sapienza · docente Diverio  
Generato: 2026-06-30 · base: inventario 28 file (7 esercizi, 6 esoneri/autovalutazioni, 13 esami, 2 soluzioni standalone)  
Calibrazione difficoltà e trabocchetti: `prova20190121.pdf`, `Prova23_01_23_sol.pdf`, `soluzioniesame20200204.pdf`

---

## Classifica per frequenza decrescente

| # | Tipo | Freq (/28) | Anni | Diff (1–5) | Concetti richiesti | Trabocchetti |
|---|------|-----------|------|-----------|-------------------|--------------|
| 1 | **Sottospazi vettoriali** — dim, somma, intersezione, decomposizione diretta | 19 | 2013–2024 | 2–3 | Formula di Grassmann; base di Span vs equazioni cartesiane; somma diretta U⊕W; complemento ortogonale U⊥; sottospazi affini | `{A : det A = 0}` non è sottospazio (non chiuso per somma — trabocchetto esplicito in prova20190121, Es. 3); `{A diagonalizzabile}` idem (somma di diag. può essere non-diag., stesso esame); in spazi non standard (M₂,₂, polinomi) applicare identica logica lineare |
| 2 | **Diagonalizzabilità e autostruttura** — autovalori, autovettori, m.a. vs m.g. | 19 | 2014–2024 | 3–4 | Polinomio caratteristico; test m.a. = m.g. per ogni λ; autospazi per matrici triangolari (autovalori sulla diagonale); base di autovettori; matrice diagonalizzante C | Fermarsi dopo m.a. = 2 senza calcolare m.g. (→ errore su diagonalizzabilità, soluzioniesame20200204 Es. 3); per tr = det = 0 e matrice ≠ 0: λ₁ = λ₂ = 0 → non diagonalizzabile, senza bisogno del polinomio (soluzioniesame20200204 Es. 4); non normalizzare se la consegna chiede base ONB |
| 3 | **Prodotto scalare / Gram–Schmidt / Teorema spettrale** | 14 | 2013–2024 | 3–4 | Verifica definitezza positiva (completamento quadrati o criteri di Sylvester); processo GS; complemento ortogonale W⊥; basi ONB; diagonalizzazione ortogonale per matrici simmetriche | Non verificare dim W prima del GS: se i generatori sono dipendenti (come in Prova23_01_23_sol Es. 1, dove 2v₁−2v₂+v₃=0), il GS va applicato a una base, non ai generatori; per prodotto scalare da valutazioni in n+1 punti: non degenerazione ↔ nodi distinti; confondere vettori ortogonali con ortonormali (dimenticare la normalizzazione finale) |
| 4 | **Sistemi lineari parametrici** (Rouché–Capelli) | 12 | 2013–2024 | 3 | Eliminazione di Gauss; rango di A e B al variare del parametro; individuazione dei valori critici via det A = 0; analisi caso per caso; struttura dello spazio affine delle soluzioni | Analizzare ogni valore critico separatamente: in prova20190121 Es. 1, per k = ½ il det si annulla ma rk(A) = 2 e rk(B) = 3 → sistema incompatibile (trabocchetto); fattorizzare male det A e perdere un valore critico; nella forma delle soluzioni, omettere la parte affine quando il sistema è compatibile ma non omogeneo |
| 5 | **Applicazioni lineari** — ker, im, matrice associata, cambio di base, composizione | 11 | 2013–2024 | 3–4 | Teorema del rango (dim ker + dim im = dim dominio); matrice di f in basi assegnate; cambio base P⁻¹AP; iniettività/suriettività; operatori differenziali su R[t]≤2 o C₂[t] (ker = EDO) | Errore di cambio base: confondere le colonne di [f]_B con f(eᵢ) in coordinate standard; per operatori differenziali (Prova23_01_23_sol Es. 4, Autov_23_11_21), il ker T si trova risolvendo (t+1)p''−2tp'+2p=0 come EDO, non con Gauss; confondere ker T con ker T² |
| 6 | **Numeri complessi e strutture su C** | 9 | 2019–2024 | 3 | Fattorizzazione z²−z̄² = (z+z̄)(z−z̄); indipendenza lineare su C vs su R; sottospazi di M₂,₂(C); spazi vettoriali su C come R-spazi | Non sviluppare (a+ib)² per coordinate ma fattorizzare; `{A : pA(λ) ha tutte le radici reali}` non è sottospazio (prova20190121 Es. 3 punto vii); `{A : C⁻¹AC triangolare}` = diagonalizzabile → non sottospazio (stesso esame, punto vi) |
| 7 | **Geometria analitica E³** — rette, piani, distanze | 7 | 2013–2016 | 2 | Equazioni cartesiane/parametriche di rette in R³; piano per retta+punto; distanza punto-piano; distanza tra rette sghembe (prodotto vettoriale); posizione reciproca (parallele, incidenti, sghembe) | Verificare sghembezza richiede non-parallelismo AND non-complanarità — due condizioni separate. **Assente dal 2017 in poi: priorità bassa per sessioni recenti** |
| 8 | **Forme bilineari / Segnatura / Sylvester** | 7 | 2016–2024 | 4 | Matrice di g rispetto a base; completamento quadrati; segnatura (p, q, r); indice di Witt; vettori isotropi (g(x,x)=0); analisi parametrica della segnatura al variare di α | Confondere ker della forma (g(x,·)=0 ∀y) con vettori isotropi (g(x,x)=0): sono condizioni diverse; per g parametrica, calcolare il rango prima della segnatura; in soluzioniesame20200204 Es. 5, g = 3x₁²+x₂²+x₃²+2x₁x₄ manca x₄² → non def. positiva; il vettore isotropo (0,0,0,1) si trova immediatamente senza calcoli pesanti |
| 9 | **Operatori simmetrici / isometrie su spazi di matrici** | 7 | 2013–2024 | 4 | Autoaggiunto rispetto a ⟨A,B⟩ = tr(AᵀB); proprietà tr(CD) = tr(DC) e tr(C) = tr(Cᵀ); isometria lineare ‖f(A)‖ = ‖A‖; operatori T(A) = ±Aᵀ, T(A) = AX | Simmetrico (autoaggiunto) ≠ isometria: proprietà distinte, vanno dimostrate separatamente (Prova23_01_23_sol Es. 5); espandere ⟨f(A),B⟩ senza usare ciclicità della traccia porta a calcoli inutilmente lunghi; non confondere simmetrica (Aᵀ=A) con hermitiana (Ā^T=A) in contesto complesso |
| 10 | **Jordan / Triangolarizzabilità / Non-diagonalizzabilità** | 6 | 2014–2024 | 4–5 | Rango di A−λI; confronto blocchi di Jordan via rk(A−λI)^k; triangolarizzabilità su C (sempre); forma canonica di Jordan 2×2 e 3×3 | Confondere triangolarizzabile (sempre su C) con diagonalizzabile; per confrontare due matrici non-diag. con stesso p.c.: usare rk(A−λI) e rk((A−λI)²), non solo il polinomio caratteristico (prova20240207); in ex_Fis8 e Esonero23_1_14: triangolarizzazione richiede base non ortogonale, non applicare GS |

---

## Trend temporali

**Geometria analitica E³ (rette/piani/distanze):** presente sistematicamente 2013–2016, un esercizio per prova (7 occorrenze in 7 prove). Zero occorrenze nei 13 esami 2019–2024. La scomparsa è netta e definitiva nel corpus disponibile.

**Numeri complessi + Forme bilineari/Segnatura in salita 2019–2024:** pressoché assenti fino al 2018. Dal 2019 in poi compaiono in modo stabile: in tutti e 5 gli esami 2022–2024 è presente almeno uno dei due tipi. Il formato emergente degli ultimi tre anni è la **segnatura parametrica** (rango e segnatura al variare di α): compare in geomefis24.1.22, Geometria 2024-01-22 e scritto Geometria 2024-07-09. Jordan/non-diagonalizzabilità cresce parallelamente: prova20240207 dedica un intero esercizio al confronto di blocchi di Jordan via rango.

---

## Note metodologiche

Le frequenze contano ogni file tra i 28. I 7 fogli di esercizi (ex_Fis2–8) contribuiscono ai tipi 1–5; escludendoli, la banca dati di soli esami+esoneri (21 file) conferma la stessa classifica di testa. Gap temporale nel corpus: 2017–2018, 2020–2021 (si veda inventario per dettaglio lacune).

---

## Priorità per il Demiurgo Accademico

I tre tipi a frequenza massima, da coprire per primi nel libro di testo:
1. Sottospazi vettoriali (freq 19) — base concettuale dell'intero corso e trabocchetto più frequente su strutture non standard (matrici, polinomi), dove la logica lineare va applicata esplicitamente.
2. Diagonalizzabilità e autostruttura (freq 19) — esercizio tecnico lungo che richiede gestione sistematica di m.a. vs m.g.; un errore a metà invalida tutto il finale.
3. Prodotto scalare / Gram–Schmidt / Teorema spettrale (freq 14) — sintesi di tre sotto-procedure concatenate (verifica definitezza, GS su base non su generatori, diagonalizzazione ortogonale); il trabocchetto sui generatori dipendenti è documentato e ricorrente.

Nota strategica per l'appello: geometria E³ è uscita dal corpus dal 2017 — nessuna voce da dedicarle nel libro. Segnatura parametrica, numeri complessi e Jordan sono in salita continua 2019–2024 e compaiono in tutti gli esami recenti: nonostante la frequenza media (6–9), vanno trattati con la stessa profondità dei tipi di testa perché rappresentano la direzione attuale del corso.

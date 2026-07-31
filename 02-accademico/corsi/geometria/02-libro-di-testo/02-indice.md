# Indice — Libro di testo Geometria (Algebra Lineare)
Corso: Geometria per Fisici · Dip. Matematica, La Sapienza · docente Diverio
Data: 2026-07-01 · confermato da Giuseppe

---

## Nota sull'adattamento dell'anatomia (indicazioni #1 e #2)
Matematica pura: la sezione "inquadramento" di ogni capitolo diventa **inquadramento algebrico/geometrico** — cosa cattura strutturalmente il concetto (perché quel sottospazio esiste, cosa misura la segnatura, cosa conserva un'isometria), zero agganci fisici forzati. La sezione esercizi/metodi è **pesata forte**: ogni capitolo produce una o più **ricette risolutive passo-passo** agganciate a un tipo della mappa, coi trabocchetti come punti di attenzione numerati dentro la ricetta stessa (non solo nella sezione 5 "trappole"). La colonna "Ricette" dichiara dove vive ogni schema.

---

## Struttura: 9 capitoli + 1 appendice

| # | Titolo | Argomenti principali | Diff | Tipi mappa coperti | Ricette risolutive concentrate |
|---|--------|---------------------|------|-------------------|-------------------------------|
| **1** | **Sottospazi vettoriali** | Chiusura per combinazioni lineari; Span vs equazioni cartesiane (le due rappresentazioni e il passaggio fra loro); Gauss e rango come motore di calcolo; base, dimensione; formula di Grassmann; somma diretta U⊕W; sottospazi su strutture non standard (M₂,₂, polinomi); sottospazi affini | 2–3 | **#1 Sottospazi** (freq 19); base tecnica per #4 | R1: da Span a base (Gauss). R2: da Span a cartesiane e ritorno. R3: dim(U+W), dim(U∩W) via Grassmann. R4: verifica U⊕W. R5: "è un sottospazio?" — test chiusura su det=0, diagonalizzabili, radici reali |
| **2** | **Diagonalizzabilità e autostruttura** | Polinomio caratteristico; autovalori, autospazi; molteplicità algebrica vs geometrica; criterio m.a.=m.g. per ogni λ; autospazi di matrici triangolari; matrice diagonalizzante C; calcolo di potenze Aⁿ; similarità | 3–4 | **#2 Diagonalizzabilità** (freq 19) | R1: procedura completa autovalori→autovettori→C. R2: test diagonalizzabilità m.a. vs m.g. (con lo stop-and-check). R3: Aⁿ per diagonalizzazione. R4: tr=det=0, A≠0 → non-diag. senza polinomio |
| **3** | **Prodotto scalare, Gram–Schmidt, Teorema spettrale** | Definitezza positiva (completamento quadrati / Sylvester); processo di Gram–Schmidt; complemento ortogonale W⊥; basi ortonormali; diagonalizzazione ortogonale di matrici simmetriche; prodotti scalari su spazi di funzioni/polinomi (integrali, valutazioni) | 3–4 | **#3 Prodotto scalare/GS/Spettrale** (freq 14) | R1: verifica definito positivo. R2: GS **su base, non su generatori** (controllo dipendenza prima). R3: W⊥ da base ortonormale. R4: teorema spettrale → base ONB di autovettori. R5: non degenerazione ↔ nodi distinti |
| **4** | **Sistemi lineari parametrici (Rouché–Capelli)** | Eliminazione di Gauss con parametro; rango di A e della completa B; valori critici via det A=0; analisi caso per caso; struttura affine dello spazio soluzioni; teorema di struttura | 3 | **#4 Sistemi parametrici** (freq 12) | R1: schema Rouché–Capelli parametrico. R2: individuazione valori critici (fattorizzazione del det). R3: forma soluzioni = particolare + omogenea. Punto d'attenzione: valore critico con rk(A)≠rk(B) → incompatibile |
| **5** | **Applicazioni lineari** | Teorema del rango; nucleo e immagine; matrice associata in basi assegnate; cambio di base P⁻¹AP; iniettività/suriettività; composizione G∘F; operatori differenziali su R[t]≤2 / C₂[t] | 3–4 | **#5 Applicazioni lineari** (freq 11) | R1: costruzione matrice associata in basi arbitrarie. R2: cambio base (colonne = f(eᵢ) **in coordinate della base d'arrivo**). R3: ker/im + Grassmann. R4: operatore differenziale → ker come EDO, non Gauss |
| **6** | **Forme bilineari, segnatura, Sylvester** | Matrice di g in una base; completamento quadrati; segnatura (p,q,r); indice di Witt; vettori isotropi; **segnatura parametrica** (rango e segnatura al variare di α); ker della forma vs vettori isotropi | 4 | **#8 Forme bilineari/Segnatura** (freq 7, **in salita**) | R1: matrice di g → segnatura per completamento quadrati. R2: segnatura parametrica (rango prima, poi indici). R3: ker(g) vs {g(x,x)=0}. R4: vettore isotropo per ispezione |
| **7** | **Operatori simmetrici e isometrie su spazi di matrici** | Prodotto scalare ⟨A,B⟩=tr(AᵀB); autoaggiunto; ciclicità e invarianza della traccia; isometrie lineari; operatori T(A)=±Aᵀ, T(A)=AX; simmetrica vs hermitiana | 4 | **#9 Operatori simmetrici/isometrie** (freq 7) | R1: autoaggiunto via ciclicità traccia (⟨f(A),B⟩=⟨A,f(B)⟩). R2: isometria via ‖f(A)‖=‖A‖ — **dimostrata separatamente** dall'autoaggiunto. R3: autovettori di T(A)=±Aᵀ |
| **8** | **Jordan, triangolarizzabilità, non-diagonalizzabilità** | Rango di (A−λI)ᵏ; confronto di blocchi di Jordan; triangolarizzabilità su C (sempre); forma di Jordan 2×2 e 3×3; distinzione triangolarizzabile / diagonalizzabile | 4–5 | **#10 Jordan/Triangolarizzabilità** (freq 6, **in salita**) | R1: confronto matrici non-diag. stesso p.c. via rk(A−λI) e rk((A−λI)²). R2: triangolarizzazione C⁻¹AC=T (base **non** ortogonale, niente GS). R3: struttura blocchi da molteplicità+rango |
| **9** | **Numeri complessi e strutture su ℂ** | Fattorizzazione z²−z̄²=(z+z̄)(z−z̄); equazioni su piano di Argand; indipendenza lineare su ℂ vs su ℝ; sottospazi di M₂,₂(ℂ); ℂ-spazi come ℝ-spazi; matrici complesse (simmetrica ≠ hermitiana) | 3 | **#6 Numeri complessi/strutture su ℂ** (freq 9, **in salita**) | R1: equazioni con coniugato per fattorizzazione, non per componenti. R2: indipendenza su ℂ vs ℝ. R3: "è sottospazio?" su M₂,₂(ℂ) (radici reali, similarità → no) |
| **App. A** | **Geometria analitica E³** (leggera) | Rette e piani (cartesiane/parametriche); piano per retta+punto; distanza punto-piano; rette sghembe e distanza; posizione reciproca | 2 | **#7 Geometria E³** (freq 7, **assente dal 2017**) | R1: piano per retta+punto. R2: distanza punto-piano. R3: sghembe (non-parallele AND non-complanari) |

---

## Logica della sequenza

**Blocco di testa (cap. 1–3) = i tre tipi a frequenza massima, scrivibili per primi.**
Cap. 1 è genuinamente fondante: introduce Gauss/rango/Grassmann come motore che tutto il resto riusa, quindi non ha dipendenze a monte e va scritto per primo. Cap. 2 (diagonalizzabilità) è autoconsistente sul caso "matrice data" — che è la stragrande maggioranza degli esercizi (`Compito 02_02_2016`, `Prova23_01_23_sol`); l'unico sottocaso "operatore definito da ker/immagini" (`Geometria 2024-01-22`) rimanda in avanti al cap. 5, e lo dichiaro esplicitamente nel capitolo. Cap. 3 chiude il blocco perché usa i sottospazi (cap. 1) e il teorema spettrale è la diagonalizzazione (cap. 2) applicata alle matrici simmetriche: cerniera naturale, non forzata.

**Blocco strumenti (cap. 4–5).** Sistemi parametrici e applicazioni lineari sono tecnicamente prerequisiti "leggeri" già anticipati come strumenti nei cap. 1–3 (Gauss in cap. 1, matrice associata richiamata in cap. 2). Li colloco qui, dopo il blocco di testa, perché il loro **valore d'esame specifico** non è la meccanica di base ma le sottigliezze: analisi parametrica caso-per-caso (cap. 4) e cambio base / operatori differenziali (cap. 5). Scelta consapevole: priorità di frequenza sopra la pedagogia stretta, con cross-reference espliciti all'indietro.

**Blocco avanzato / in salita (cap. 6–9).** Segnatura parametrica, operatori su spazi di matrici, Jordan, numeri complessi: è il cluster che la mappa segnala in crescita 2019–2024 e presente in tutti gli esami recenti. Ordinati per dipendenza concettuale: forme bilineari (cap. 6) generalizzano il prodotto scalare del cap. 3; operatori simmetrici su matrici (cap. 7) usano prodotto scalare + autoaggiunto; Jordan (cap. 8) è il "cosa fare quando la diagonalizzazione del cap. 2 fallisce"; i complessi (cap. 9) raccolgono i pattern algebrici trasversali. Trattati a profondità piena nonostante la frequenza media, come da nota strategica.

**Appendice A — E³.** Fuori dal corpus dal 2017. Un solo blocco compatto di ricette per copertura difensiva, staccato dal flusso principale per non pesare sulle sessioni recenti.

---

## Ordine di scrittura
1 → 2 → 3 (i tre di testa, subito) → poi 6 e 8 e 9 (i tre in salita, alto ROI per gli esami recenti) → poi 5 → 4 → 7 → App. A.

Motivo: dopo il blocco di testa, il valore marginale più alto è sul cluster in salita (segnatura/Jordan/complessi), che domina gli esami 2022–2024, prima degli strumenti che Giuseppe probabilmente già padroneggia dal biennio.

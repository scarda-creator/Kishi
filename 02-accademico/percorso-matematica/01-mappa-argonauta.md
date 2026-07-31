# Mappa Argonauta — Metodi e Modelli + Analisi Vettoriale

**Prodotto:** Argonauta Accademico  
**Data:** 2026-07-18  
**Fonti lette:** 18 scritti reali (2023-06 → 2026-02) + esame AV 20240704 + manifest AV  
**Output destinato a:** Demiurgo Accademico per la costruzione del percorso-matematica

---

## 1. VERDETTO SULLA DISCREPANZA

### La domanda
Il programma ufficiale canale 3 (Caprini + Esposito) dichiara:
> analisi complessa + espansioni asintotiche (Laplace, fase stazionaria, punto di sella)

Gli eserciziari caricati (Set 1-4) puntano a:
> spazi di Hilbert finito/infinito, Fourier, EDO

### Il verdetto — ricavato dagli 18 scritti reali

**Le espansioni asintotiche (Laplace, fase stazionaria, punto di sella) non compaiono mai in nessuno dei 18 scritti esaminati (2023-2026).**

Lo scritto di Caprini/Esposito è strutturato invariabilmente in 4 esercizi divisi in DUE macro-blocchi di peso quasi uguale:

| Blocco | Esercizi | Peso tipico |
|--------|----------|-------------|
| A — Analisi complessa | Es. 1 + Es. 2 | ~50% (13-15 pt su 30) |
| B — Analisi funzionale | Es. 3 + Es. 4 | ~50% (15-17 pt su 30) |

Gli scritti riportano esplicitamente, dal 2024 in poi, l'istruzione:  
"Gli esercizi di analisi complessa (1 e 2) e quelli di analisi funzionale (3 e 4) devono essere consegnati su fogli protocollo separati."

Il programma dichiarato (analisi complessa + asintotica) descrive solo il BLOCCO A, ignorando il BLOCCO B. La realtà d'esame è **50-50 tra analisi complessa e analisi funzionale** (Hilbert, Fourier, EDO, EDP).

**Ipotesi sul perché:** il programma ufficiale sul sito descrive le "novità" rispetto ad Analisi 2; la parte funzionale è considerata prerequisito da solidificare piuttosto che "novità", ma viene comunque valutata. In ogni caso: la verità è negli scritti reali.

---

## 2. MAPPA DEL TERRENO DI METODI — nuclei con peso

### BLOCCO A — Analisi Complessa (50%)

#### A1. Serie di Laurent + residui + integrale su curva
**Frequenza: 19/19 (100%) — in OGNI esame**

Struttura tipica dell'esercizio 1:
- Trovare la parte principale di Laurent di f(z) attorno a z = z₀
- Ricavarne il residuo
- Calcolare ∫_γ f(z) dz dove γ circonda z₀

Varianti osservate:
- Laurent in anelli distinti (0 < |z| < R₁ vs |z| > R₁): Scritto 20262001 Es. 1
- Funzione con polo di ordine alto (triplo, quarto): Scritto 20250623, 20250707
- Singolarità non isolata: Scritto 20240910 Es. 1 (z = 0 come accumulazione di poli)
- Laurent attorno a z₀ ≠ 0: Scritto 20262001
- Prodotto log(z)·polidroma: Scritto 20260212 Es. 1

Trabocchetto ricorrente: confondere polo di ordine n con singolarità eliminabile; espansione di Taylor al denominatore e lettura dell'ordine del polo prima di calcolare il residuo.

Fonti: tutti gli scritti, Es. 1 sistematicamente.

---

#### A2. Integrale reale via analisi complessa
**Frequenza: 19/19 (100%) — in OGNI esame**

Quattro sottotipi, ciascuno con tecnica propria:

**A2a. Integrale su (−∞, +∞) con semicerchio** — ~11/19
- Semicerchio nel semipiano superiore (Jordan per e^{ikz} con k>0) o inferiore (k<0)
- Funzioni razionali, f(x) sin(x) / f(x) cos(x)
- Fonti: Scritto 20240618 Es. 2 (x sin x / x²+1), Scritto 20240910 Es. 3, Scritto 20250120 Es. 3, Scritto 20250505 Es. 2, Scritto 20262001 Es. 2
- Trabocchetto: distinguere f(z) e^{iz} da f(z) e^{ikz}; dimostrazione che integrale su arco → 0 via Lemma di Jordan

**A2b. Funzione polidroma con branch point e keyhole/ferro di cavallo** — ~8/19
- Funzione con radice o potenza frazionaria, taglio sull'asse reale
- Percorso: due semirette sopra/sotto il taglio + due cerchi (grande → ∞, piccolo → 0)
- Raccordare le due determinazioni sopra/sotto taglio
- Fonti: Scritto 20240703 Es. 2, Scritto 20241106 Es. 2, Scritto 20250212 Es. 2, Scritto 20250120 Es. 2, Scritto 20250707 Es. 2
- Trabocchetto: errore nel valore della determinazione sopra vs sotto il taglio; dimenticare il fattore di fase e^{2πi·esponente} sotto il taglio

**A2c. Integrale trigonometrico** ∫₀²π R(cos θ, sin θ) dθ — ~5/19
- Sostituzione z = e^{iθ}, dθ = dz/(iz), contorno unitario
- Fonti: Scritto 20230704 Es. 2, Scritto 20240115 Es. 2, Scritto 20251105 Es. 2
- Trabocchetto: identificare i poli dentro |z|=1; la funzione spesso ha zeri di sin o cos dentro il cerchio

**A2d. Percorso rettangolare** — ~4/19
- Funzione con periodicità rettangolare nel piano complesso (es. cosh, sinh, e^z + e^{-z})
- Sfruttare la relazione tra γ₁ e γ₃ (in alto vs in basso) per ottenere K(1 + e^{-α})
- Fonti: Scritto 20240910 Es. 2, Scritto 20262001 Es. 2, Scritto 20260212 Es. 2

---

#### A3. Cauchy-Riemann, funzioni armoniche, coniugate
**Frequenza: ~10/19 — predominante negli scritti Caprini 2024-2026**

Struttura tipica:
- Verificare che u(x,y) è armonica (Δu = 0)
- Trovare v(x,y) armonica coniugata via CRE
- Esprimere f = u + iv come funzione di z

Fonti: Scritto 20240703 Es. 1, Scritto 20241106 Es. 1, Scritto 20250212 Es. 1

---

#### A4. Funzioni polidrome — analisi della determinazione
**Frequenza: ~12/19**

Struttura tipica:
- Definire la determinazione dato un taglio e un valore su un punto di riferimento
- Calcolare i valori della funzione sopra/sotto ogni parte del taglio e in punti specifici
- Calcolare il residuo in un polo, sapendo la determinazione ivi

Fonti: Scritto 20230620 Es. 2, Scritto 20230704 Es. 1, Scritto 20230908 Es. 2, Scritto 20231116 Es. 2, Scritto 20250623 Es. 2

---

### BLOCCO B — Analisi Funzionale (50%)

#### B1. Spettro di operatori — matriciali e differenziali
**Frequenza: 19/19 (100%) — in OGNI esame**

Due varianti principali che si alternano:

**B1a. Matrice: autovalori + proiettori + f(A)** — ~16/19
- Trovare autovalori (equazione caratteristica), autovettori
- Costruire proiettori P_i (ortogonali se autovettori ortonormali, altrimenti via cambio base)
- Applicare la rappresentazione spettrale: f(A) = Σ f(λᵢ) Pᵢ
- Funzioni di matrice: e^A, log A, cos(πA), A^n, sin(A)
- Caso degenere (autovalori ripetuti, matrice non diagonalizzabile): attenzione a costruire correttamente Pᵢ
- Fonti: Scritto 20230908 Es. 3, Scritto 20240115 Es. 3, Scritto 20240618 Es. 3, Scritto 20241106 Es. 3, Scritto 20250623 Es. 3, Scritto 20260212 Es. 3
- Trabocchetto ricorrente: quando gli autovettori NON sono ortonormali, Pᵢ ≠ |vᵢ⟩⟨vᵢ| ma occorre Pᵢ = S·P_i^{(D)}·S⁻¹

**B1b. Operatore differenziale su L²: autospettro** — ~10/19
- Operatore A = -i d/dx, -d²/dx², d²/dx² + c, con dominio e condizioni al bordo
- Trovare le autofunzioni (soluzioni dell'ODE Af = λf), determinare λ dalle condizioni al bordo
- Spettro discreto vs continuo; spettro su [0,1] vs su R (distribuzioni/onde piane)
- Autoaggiunzione: verifica via integrazione per parti + annullamento dei termini di bordo
- Fonti: Scritto 20230620 Es. 3, Scritto 20230908 Es. 4, Scritto 20240618 Es. 4, Scritto 20250120 Es. 4, Scritto 20250505 Es. 4, Scritto 20250707 Es. 3
- Trabocchetto: per λ = valore critico le due soluzioni dell'ODE diventano degeneri → caso speciale (es. soluzione xeˣ); verificare sempre quel caso separatamente

---

#### B2. Funzione di Green per ODE
**Frequenza: ~14/19**

Struttura tipica:
- ODE del 2° ordine (spesso equazione di Eulero: x²f'' + axf' + bf = j(x))
- Trovare f₁(x), f₂(x) soluzioni omogenee soddisfacenti ciascuna una CB separata
- Wronskiano W(x) = f₁f₂' − f₁'f₂
- G(x,y) = (1/a₂(y)W(y))[f₁(x)f₂(y)θ(y−x) + f₁(y)f₂(x)θ(x−y)]
- Integrazione con sorgente j (spesso δ(x−a) o δ'(x−a))

Variante con δ' (sorgente distribuzionale):
- Richiede integrazione per parti + condizioni di giunzione su [f] e [f']
- Fonti: Scritto 20230620 Es. 4, Scritto 20230704 Es. 4, Scritto 20231116 Es. 4, Scritto 20241106 Es. 4, Scritto 20250212 Es. 4

Trabocchetto ricorrente: dimenticare di verificare se il Wronskiano si annulla (caso degenere → funzione di Green non esiste); per Eulero: trovare le due soluzioni xᵅ con α da α(α−1) + aα + b = 0.

---

#### B3. Serie e trasformata di Fourier
**Frequenza: ~14/19**

**B3a. Serie di Fourier di una funzione definita a tratti** — ~10/19
- Calcolo coefficienti fₙ (forma esponenziale) o aₙ, bₙ (forma trigonometrica)
- Uso della convergenza nei punti di discontinuità (S(x₀) = ½[f(x₀⁺)+f(x₀⁻)])
- Dimostrazione di un'identità (es. Σ 1/n² = π²/6) valutando S in un punto
- Fonti: Scritto 20240115 Es. 4 (∑1/n²=π²/6), Scritto 20240703 Es. 3 (∑con e), Scritto 20250505 Es. 3, Scritto 20262001 Es. 4 (∑(-1)ⁿ/(2n+1)³)
- Trabocchetto: calcolo dei coefficienti per n=0 separatamente; integrare per parti due volte quando f(x) ha xⁿ nel numeratore

**B3b. Trasformata di Fourier via residui** — ~10/19
- f̂(k) = ∫ dx f(x) e^{-ikx}, chiudere nel semipiano k>0 vs k<0
- Antitrasformata e verifica della ricostruzione
- Connessione tra posizione dei poli (Im z) e decadimento di f̂(k)
- Fonti: Scritto 20230704 Es. 3, Scritto 20231116 Es. 3, Scritto 20240910 Es. 3, Scritto 20262001 Es. 2
- Trabocchetto: per k>0 chiudere in basso (senso orario → segno meno); per k<0 chiudere in alto; attenzione al segno del residuo

**B3c. Distribuzioni** — ~5/19
- δ(x) come limite di funzione (Scritto 20250120 Es. 3: limite di funzione cappello → f̂ → 1)
- Integrali con δ'(x−a) (più volte come sorgente in Green)
- Calcolo con δ(g(x)) = Σ δ(x−xᵢ)/|g'(xᵢ)|
- Fonti: Scritto 20262001 Es. 3 (integrali 2D con δ e δ')

---

#### B4. EDP via Fourier / separazione variabili
**Frequenza: ~9/19 — in forte crescita dal 2024 in poi**

Struttura tipica:
- PDE sulla semiretta (x∈R o x>0) o su intervallo → trasformata di Fourier in x → ODE in t
- PDE su intervallo con CB → separazione variabili → serie di coseni o seni
- Equazione del calore (∂_t u = ∂_xx u), delle onde (∂_tt u = c²∂_xx u), varianti con coefficienti t-dipendenti
- Fonti: Scritto 20250623 Es. 4 (PDE con Fourier), Scritto 20250707 Es. 4, Scritto 20251105 Es. 4, Scritto 20260212 Es. 4, Scritto 20262001 Es. 4 (equazione delle onde, corda fissata)
- Trabocchetto: per CB di Neumann (∂_x u|_{bordo}=0) usare coseni; per CB di Dirichlet usare seni; caso n=0 va trattato separatamente

---

#### B5. Gram-Schmidt in L², ortonormalizzazione
**Frequenza: ~4/19**

- Calcolo di prodotti scalari in L²([0,∞)) o su intervallo
- Procedura di Gram-Schmidt con 2-3 funzioni
- Fonti: Scritto 20250212 Es. 3

---

## 3. INVENTARIO TIPI DI ESERCIZIO — variazioni che Giuseppe sente di non dominare

In ordine di priorità (frequenza + difficoltà segnalata):

| # | Tipo | Freq. | Variazione critica / trabocchetto |
|---|------|-------|-----------------------------------|
| 1 | Laurent attorno z₀ + integrale su curva | 19/19 | Laurent in 2 anelli diversi; polo di ordine alto |
| 2 | Integrale reale con semicerchio (semipiano ±) | 19/19 | Chiusura giusta per k>0 vs k<0; Lemma Jordan |
| 3 | Autovalori + proiettori + f(A) (matrice) | 16/19 | Autovettori NON ortonormali → Pᵢ via S |
| 4 | Funzione di Green (Eulero + δ) | 14/19 | Sorgente δ' → integrazione per parti + giunzione |
| 5 | Trasformata di Fourier via residui | 10/19 | Segno polo in basso vs in alto per k>0/k<0 |
| 6 | Serie di Fourier a tratti + identità da somme | 10/19 | Caso n=0 separato; scegliere il punto giusto per l'identità |
| 7 | Integrale con keyhole / ferro di cavallo (polidroma) | 8/19 | Valore determinazione sotto taglio; fattore 2I vs altro |
| 8 | Operatore diff. su L² → autospettro | 10/19 | Caso λ critico degenerato; autoaggiunzione via bordo |
| 9 | EDP → separazione var. + Fourier serie | 9/19 | CB Neumann vs Dirichlet; caso n=0 |
| 10 | Cauchy-Riemann + armonica coniugata | 10/19 | Trovare ϕ(y) dalla seconda CRE; esprimere in z vs z̄ |
| 11 | Integrale rettangolare (e^z + e^{-z}) | 4/19 | Relazione tra γ₁ e γ₃; un solo residuo dentro |
| 12 | Percorso con arco non standard (settore angolare) | 4/19 | Uso della simmetria di rotazione di f(ze^{iθ}) |
| 13 | Funzione polidroma con log + radice | 3/19 | Doppia molteplicit à; Taylor di f attorno a z₀ reale |

---

## 4. PROGRAMMA DI ANALISI VETTORIALE — prof. Andrea Terracina

### Dati del corso
- 9 CFU, I semestre, II anno laurea triennale in Fisica (Sapienza)
- Docente: Andrea Terracina (Dipartimento di Matematica "G. Castelnuovo")
- Canale: per le lettere D-O (a.a. 2024-25, Moodle corso 18605); canale variabile per anno

### Programma (ricostruito da pagina personale + ricerche + esami reali)

**Parte I — Funzioni di più variabili**
1. Topologia di Rⁿ: aperto, chiuso, compatto, connesso
2. Limiti, continuità, funzioni continue su compatti
3. Derivate parziali, differenziabilità, gradiente, jacobiana
4. Catena di derivazione; differenziale totale; Dini (funzione implicita)
5. Derivate seconde, Hessiana, Schwarz; Formula di Taylor in più variabili
6. Estremi liberi (criteri su Hessiana); estremi vincolati (Lagrange)

**Parte II — Integrali multipli e geometria differenziale**
7. Integrali doppi e tripli; cambiamenti di variabili (coordinate polari, sferiche, cilindriche)
8. Curve in Rⁿ: parametrizzazione, lunghezza, integrale di linea (scalare e vettoriale)
9. Superfici in R³: parametrizzazione, versore normale, area, integrale di flusso
10. Campi vettoriali: grad, div, rot; forme differenziali chiuse ed esatte; potenziale
11. Teorema di Green (piano), Gauss (divergenza), Stokes — e applicazioni

**Parte III — Successioni e serie di funzioni**
12. Convergenza puntuale e uniforme di successioni di funzioni
13. Continuità, integrabilità, derivabilità del limite uniforme
14. Serie di funzioni: convergenza assoluta, uniforme, totale (Weierstrass); serie di potenze; raggio di convergenza

**Parte IV — Equazioni differenziali ordinarie**
15. Problema di Cauchy: esistenza e unicità (Picard-Lindelöf); prolungabilità della soluzione
16. EDO del 1° ordine: lineari, separabili, Bernoulli; equazioni autonome (ritratto di fase, equilibri, stabilità)
17. EDO del 2° ordine lineari a coefficienti costanti; equazioni di Eulero

### Modalità d'esame AV
Scritto (~4-5 esercizi, 30 punti), orale facoltativo per chi ha scritto sufficiente.

Gli esercizi del secondo esonero (disponibili in banca-dati) coprono sistematicamente:
- Es. 1: Integrali doppi/tripli con cambi di variabili e applicazioni geometriche (flusso, Gauss)
- Es. 2: Ottimizzazione (Lagrange, Hessiana) su domini
- Es. 3: Superfici + Stokes (trovare parametrizzazione, normale, bordo, calcolare circuitazione)
- Es. 4: Successioni di funzioni (convergenza puntuale e uniforme)
- Es. 5: EDO con Cauchy (separabile, autonoma) — analisi qualitativa + soluzione esplicita

Fonte esame letto: Scritto 20240704 (De Marchis + Terracina), confermato da Scritto 20250127.

### Testi
- Pagani-Salsa, *Analisi Matematica 2* (Zanichelli)
- Giusti, *Analisi Matematica 2*
- Rudin, *Principles of Mathematical Analysis* (per approfondimento)
- Dispense dei docenti su Moodle Sapienza

---

## 5. RISORSE AV — stato banca-dati

**Quello che C'È:**
- 30 esami del SECONDO ESONERO (2022-2025) con soluzioni, testo estratto in `_txt/`
- Formulario definitivo secondo esonero
- Libro di Analisi Vettoriale di Terracina (`analvett.pdf` + `.tex`)
- Esercizi su successioni e serie di funzioni

**Quello che MANCA:**
- Esami del PRIMO ESONERO (funzioni di più variabili, limiti, differenziabilità, ottimizzazione): non presenti nella banca-dati. Questo è il **UNICO buco di risorse da colmare** se Giuseppe intende costruire il percorso dal Movimento I in poi con esercizi reali di Terracina.

**Nota:** L'esame AV del luglio 2026 è già avvenuto (oggi), quindi il buco è rilevante solo per la spina del percorso-matematica, non per una preparazione imminente.

---

## 6. SOVRAPPOSIZIONI METODI / AV — agganci per l'organismo unico

| Nucleo | In AV | In Metodi | Aggancio / Nota |
|--------|-------|-----------|-----------------|
| EDO (separabili, Eulero, autonome) | Parte IV (completa) | B2 (funzione di Green per Eulero) | Eulero è il nucleo comune; AV lo introduce, Metodi lo usa con GF |
| Serie e successioni di funzioni | Parte III (rigore) | B3 (Fourier come sviluppo) | AV porta il rigore della conv. uniforme che Metodi presuppone |
| Serie di Fourier | In AV come strumento per EDP | B3a (coefficienti, identità) | La "stessa" serie; AV: come usarla; Metodi: perché funziona (Hilbert) |
| Spazi di Hilbert e L² | Implicito (L² via Fourier) | B1b (operatori su L²) | AV introduce il prodotto scalare in L²; Metodi lo formalizza |
| EDP (calore, onde, Laplace) | Cenni negli esami AV | B4 (Metodi sempre più spesso) | La EDP appare in entrambi; in Metodi via TdF o separazione variabili |
| Integrali di linea e flusso | Parte II (AV, core) | Assente | Esclusivo AV; ponte verso geometria differenziale |
| Analisi complessa | Assente in AV | Blocco A (50% esame) | Esclusivo Metodi; ma la convergenza delle serie di Laurent si aggancia alla Part III di AV |
| Teoremi Green/Gauss/Stokes | Parte II (AV, core) | Assente come esercizio | Esclusivo AV; ma il linguaggio di forme (Movimento III scheletro) è il ponte verso GD |
| Distribuzioni (δ, δ') | Assente in AV | B3c + B2 (sorgenti) | Esclusivo Metodi; AV non le affronta esplicitamente |
| Rappresentazione spettrale f(A) | Assente in AV | B1a (ogni esame) | Esclusivo Metodi; ma il teorema spettrale è il nucleo del Movimento IV scheletro |

**Tre agganci chiave per il percorso unificato:**
1. **Convergenza uniforme → Fourier → Hilbert:** la catena Part III AV → B3 Metodi → B1b Metodi è una progressione naturale, tutti i nodi si sostengono a vicenda. Va studiata come un'unica progressione, non come due corsi separati.
2. **EDO Eulero:** compare sia in AV (EDO del 2° ordine) che in Metodi (funzione di Green per Eulero). Studiarla una volta con rigore evita la ridondanza.
3. **EDP + Fourier:** Metodi (dal 2024 in poi) mette l'EDP sistematicamente nel quarto esercizio, richiedendo trasformata di Fourier in x. AV usa gli stessi strumenti nel secondo esonero. Il Movimento IV dello scheletro deve integrare questi due fili.

---

## Note sui docenti e la stabilità del programma

- Scritti 2023: "Angelo Esposito e Fabio Riccioni" (canale Pf-Z)
- Scritti 2024-2026: "Lorenzo Caprini e Angelo Esposito" (canale P-Z)
- Il cambio di Riccioni → Caprini (dal 2024) ha portato: più peso alle CRE e armonicità nell'Es. 1; più EDP nell'Es. 4. Il nucleo rimane invariato.
- Tutti gli scritti in banca-dati sono del canale corretto per Giuseppe (P-Z = da P a Z per cognome; Scarda = S).

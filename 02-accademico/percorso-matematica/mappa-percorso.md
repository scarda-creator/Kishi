# Disegno totale del percorso-matematica — orchestrazione

> Mappa d'insieme rigenerata da `mappa-percorso.py`. Stato ‘fatto’ = c'è il file nel nucleo. Spina [C] = traversabile entro agosto; [+] = oltre. Meccanica (settembre) resta un blocco a sé.

**Stato:** 23/23 nuclei costruiti. Core [C]: 16 · Deepening [+]: 4.

## Movimento I — Calcolo multivariabile e vettoriale  (cuore di Analisi Vettoriale)
- **1. Topologia di Rⁿ** [C] — ✓ fatto. limiti e continuità in più variabili: cosa vuol dire «vicino»
- **2. Differenziale** [C] — ✓ fatto. differenziabilità vera, gradiente, jacobiana, catena, Taylor
- **3. Dini + ottimizzazione** [C] — ✓ fatto. funzione implicita/inversa; Lagrange (moltiplicatori)
- **4. Integrali multipli** [C] — ✓ fatto. domini normali, Fubini, cambio di variabili (Es. 1 del 2º esonero)
- **5. Curve e superfici** [C] — ✓ fatto. parametrizzazioni; integrali su curve e superfici
- **6. Campi vettoriali** [C] — ✓ fatto. grad/div/rot; integrali di linea e flusso; conservativi
- **7. Teoremi integrali** [C] — ✓ fatto. Green/Gauss/Stokes → Stokes generalizzato (forme)
- **8. EDO qualitative** [C] — ✓ fatto. esistenza/unicità; ritratto di fase (il punto debole)

## Movimento II — Ponte: spazi di funzioni  (AV → Metodi)
- **9. Serie di funzioni** [C] — ✓ fatto. convergenza uniforme, Weierstrass, serie di potenze
- **10. Spazi normati** [C] — ✓ fatto. metrici/normati, completezza, Banach
- **11. Hilbert & Fourier** [C] — ✓ fatto. ortogonalità; Fourier come sviluppo ortogonale in L²; Gram–Schmidt
- **12. Lebesgue & Lᵖ** [+] — ✓ fatto. integrale di Lebesgue essenziale, spazi Lᵖ

## Movimento III — Analisi complessa  (cuore di Metodi)
- **13. Olomorfe** [C] — ✓ fatto. funzioni olomorfe, Cauchy–Riemann
- **14. Cauchy** [C] — ✓ fatto. teorema e formula di Cauchy; analiticità = serie di potenze
- **15. Residui** [C] — ✓ fatto. residui e integrazione per contorni (il cavallo da lavoro)
- **16. Continuazione & speciali** [+] — ✓ fatto. continuazione analitica; funzioni speciali (Gamma)
- **17. Asintotica** [+] — ✓ fatto. Laplace, fase stazionaria, punto di sella (programma ufficiale)

## Movimento IV — Funzionale e Metodi applicati  (gli strumenti della fisica)
- **18. Distribuzioni & Fourier** [C] — ✓ fatto. la delta; trasformata di Fourier rigorosa; temperate
- **19. Operatori & spettrale** [C] — ✓ fatto. Sturm–Liouville; funzioni di Green per EDO/EDP
- **20. EDP della fisica** [+] — ✓ fatto. Laplace / calore / onde con questi strumenti

## Movimento V — Ponte verso la tesi  (dal moto alla termodinamica)
- **21. Spazio delle fasi e Liouville** [T] — ✓ fatto. il flusso incomprimibile: niente attrattori, ricorrenza, densità
- **22. Ergodicità e mescolamento** [T] — ✓ fatto. medie temporali vs d'insieme; KAM, mare caotico, mixing
- **23. Irreversibilità** [T] — ✓ fatto. Loschmidt, coarse-graining, decoerenza ed ETH: la domanda di tesi

## I tre ponti AV↔Metodi (l'organismo unico)
- **8↔19**: EDO di Eulero: una volta, copre AV e prepara la Green di Metodi
- **9↔11**: conv. uniforme → Fourier → Hilbert: un filo unico
- **18↔11**: EDP + Fourier: cuce il 4° esercizio di Metodi e il 2° esonero AV

## Ordine d'orchestrazione consigliato
- Finire la **spina [C] del Mov. I** (manca: 1 topologia, 6 teoremi integrali, 7 EDO) — è il cuore AV.
- Poi **Mov. II** [C] (8–10) e **Mov. III** [C] (12–14): metà esame di Metodi (complessa).
- Poi **16** (distribuzioni/Fourier) e l'inizio del funzionale: l'altra metà di Metodi.
- I **[+]** (11, 15, 17, 18) proseguono oltre agosto, senza esame che preme.
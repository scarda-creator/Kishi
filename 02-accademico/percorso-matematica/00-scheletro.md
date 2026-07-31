# Percorso-matematica — lo scheletro (bozza Mnemosyne, 2026-07-18)

Percorso unico, capire-prima, **niente passaggio dato per scontato**, dal calcolo
multivariabile fino ad analisi funzionale e complessa. Unifica **Analisi Vettoriale +
Metodi**. Bozza da **ratificare o correggere** da Giuseppe prima che il Demiurgo riempia.

## Forma: spina + profondità + senso (i tre strati)
- **Spina** = linea principale, ogni nucleo dimostrato, in ordine di dipendenza. È ciò
  che si conclude entro agosto.
- **Profondità** = varianti, esercizi che mostrano tutte le modificazioni, approfondimenti.
  Agganciata a ciascun nucleo, si può continuare oltre agosto (nessuna urgenza d'esame).
- **Senso** (richiesta di Giuseppe, 2026-07-18) = per OGNI nucleo, oltre al rigore: il
  significato FISICO, una METAFORA che lo fa restare, e l'IDEA APERTA / connessione che tiene
  la mente in moto (verso la fisica, verso la tesi — ETH, decoerenza, stat mech). NON è
  decorazione: è il motivo per cui capisce invece di eseguire. È lo strato che rende il
  percorso SUO e fuori dal comune.
- Marcatura per nucleo: **[C] core-agosto** vs **[+] deepening (oltre)**.

**Analisi Vettoriale è di PRIMA CLASSE**, non un prerequisito "precedente e più semplice" da
sbrigare: è il Movimento I a pieno titolo, cucito nell'unico organismo con Metodi. Un percorso
totale, tutto insieme, per capire la matematica dietro a tutto.

## Meccanica (settembre) — a sé
Blocco proprio, protetto: NON dentro questa spina. Interleaving da pianificare a parte
(binario matematica lungo + finestra Meccanica intoccabile).

---

## Movimento I — Calcolo multivariabile e vettoriale  (cuore di Analisi Vettoriale)
1. [C] Topologia di Rⁿ: limiti, continuità in più variabili — *cosa vuol dire "vicino", e perché*.
2. [C] Differenziale in più variabili: differenziabilità (la definizione vera, non "esistono le
   parziali"), gradiente, jacobiana, catena, Taylor. *Perché differenziabile ≠ parziali esistono*.
3. [C] Dini (funzione implicita/inversa); ottimizzazione vincolata (Lagrange).
4. [C] Curve e superfici: parametrizzazioni, lunghezza, integrali su curve/superfici.
5. [C] Campi vettoriali: grad, div, rot; integrali di linea e di flusso; campi conservativi e potenziali.
6. [C] I teoremi integrali: Green, Gauss, Stokes — *uno solo*, lo Stokes generalizzato (forme).
   Vertice di AV e ponte alla geometria differenziale.
7. [C] EDO qualitative: esistenza/unicità, comportamento qualitativo (il punto debole segnalato).

## Movimento II — Ponte: successioni, spazi, e l'astrazione di "spazio di funzioni"
8. [C] Successioni/serie di funzioni, convergenza uniforme, serie di potenze (il rigore chiesto).
9. [C] Spazi metrici/normati, completezza, spazi di Banach.
10. [C] Spazi di Hilbert, ortogonalità; **serie di Fourier come sviluppo ortogonale** (*il perché di Fourier*).
11. [+] Integrale di Lebesgue essenziale (perché serve per L²), spazi Lᵖ.

## Movimento III — Analisi complessa  (cuore di Metodi)
12. [C] Funzioni olomorfe, Cauchy–Riemann — *il miracolo della derivabilità complessa*.
13. [C] Teorema e formula integrale di Cauchy; analiticità = serie di potenze.
14. [C] Residui e integrazione per contorni (il cavallo da lavoro della fisica).
15. [+] Continuazione analitica; funzioni speciali (Gamma, …).

## Movimento IV — Funzionale e Metodi applicati
16. [C] Distribuzioni (la delta, *perché*); trasformata di Fourier rigorosa; distribuzioni temperate.
17. [+] Operatori, idea spettrale, Sturm–Liouville, funzioni di Green per EDO/EDP.
18. [+] EDP della fisica (Laplace/calore/onde) con questi strumenti.

---

## Realismo agosto (guardrail di Mnemosyne)
La spina **[C]** (nuclei 1–10, 12–14, 16) è traversabile entro agosto se disciplinati sulla
profondità: ti porta alla comprensione vera delle idee portanti. La rigorizzazione COMPLETA di
tutta l'analisi funzionale+complessa da zero in ~6 settimane **non è realistica** e non serve:
i **[+]** proseguono oltre, senza esame che preme. La mappa serve proprio a tenere la linea.

## Stato risorse e fatti (aggiornato 2026-07-18)
- **Metodi — canale 3, docenti Caprini + Esposito** (CONFERMATO da Giuseppe). Calogero = solo un testo.
- **Risorse Metodi RICEVUTE**: 31 PDF in `metodi-e-modelli/` (libro, 4 eserciziari per topic,
  ~19 scritti 2023–2026, appunti+formulario) → **testo estratto** in `_txt/`. Pronte per l'Argonauta.
- **Programma ufficiale canale 3** = analisi complessa + asintotica (`programma-ufficiale.md`).
  ⚠ Discrepanza con gli eserciziari (funzionale/Hilbert/Fourier/EDO): la sciolgono gli scritti reali.
- **Analisi Vettoriale — prof. Andrea Terracina**. Ho molto materiale mio (saper-fare, formulario,
  quiz); mancano i **temi scritti di Terracina** e il suo **programma ufficiale**: l'Argonauta li
  recupera (pagina Sapienza) e segnala se gli scritti AV sono l'unico buco.

## Calibrazione sull'esame reale (Argonauta, 2026-07-18) — mappa piena: `01-mappa-argonauta.md`
**Verdetto Metodi (canale 3 Caprini/Esposito), da 18 scritti 2023–2026:** le espansioni
asintotiche del programma ufficiale **non compaiono MAI**. Lo scritto è **50/50 analisi complessa
+ analisi funzionale**, 4 esercizi su 2 fogli (complessa 1–2, funzionale 3–4). Quindi:
- **Movimento III (complessa) = metà esame di Metodi**, peso reale: Laurent+residui+integrale su γ
  (19/19), integrale reale via residui (19/19, 4 sottotipi), Cauchy–Riemann+armonica coniugata
  (in crescita con Caprini), funzioni polidrome/tagli.
- **Movimento IV (funzionale) = l'altra metà**: spettro di operatori (19/19), funzione di Green
  per EDO (δ e **δ'**), Fourier serie+trasformata, EDP per separazione (trend crescente).
- **Asintotica (Laplace, fase stazionaria, punto di sella)** → declassata a **[+]**: non è
  d'esame, ma è oro per la tesi (stat mech, integrali di cammino). Resta, fuori dalla spina d'agosto.

**I tre trabocchetti = ciò che probabilmente è costato lo scritto (targeting prioritario del "senso"):**
1. Green con sorgente **δ'** (integrazione per parti + condizioni di giunzione sui salti di f e f').
2. Proiettori spettrali con autovettori **non ortonormali** (cambio base esplicito, non |v⟩⟨v|).
3. Trasformata di Fourier: chiusura del contorno per k>0 vs k<0 e **segno del residuo**.

**AV Terracina (9 CFU, I sem):** I funzioni più variabili; II integrali multipli + forme +
Green/Gauss/Stokes; III successioni/serie di funzioni (conv. uniforme, Weierstrass, potenze);
IV EDO (Cauchy, separabili, Bernoulli, coeff. cost., Eulero, autonome/ritratto di fase).

**Tre ponti Metodi↔AV (l'organismo unico, non due corsi):**
1. **EDO di Eulero**: una volta sola, in profondità → copre AV e prepara la Green di Metodi.
2. **Conv. uniforme → Fourier → Hilbert**: un filo unico (la conv. uniforme di AV giustifica lo
   sviluppo di Fourier che vive in L² di Metodi). Insegnare come una catena, non a pezzi.
3. **EDP + Fourier**: il Movimento IV cuce esplicitamente il quarto esercizio di Metodi e gli
   strumenti del secondo esonero AV.

**Unico buco risorse:** mancano gli scritti del **primo esonero AV** (più variabili,
differenziabilità, ottimizzazione) — servono per la spina del Movimento I. Metodi: nessun buco.

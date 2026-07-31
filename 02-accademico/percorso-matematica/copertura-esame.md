# Copertura d'esame — cosa chiedono i due corsi, e dove sta nel percorso

Verifica fatta da Dedalo il 2026-07-21, su richiesta di Giuseppe («ci devono essere tutti»).
**Nessun requisito è inventato**: le fonti sono il programma ufficiale di Metodi
(`02-accademico/corsi/metodi-e-modelli/programma-ufficiale.md`) e la mappa dell'Argonauta
(`01-mappa-argonauta.md`), che ricostruisce il programma di AV (Terracina) e conta le frequenze
sugli ~19 scritti reali di Metodi 2023-2026.

Il tag in pagina è generato da `nuclei/esame-tag.js`: **57 requisiti mappati**, ognuno verificato
puntare a una tappa che esiste davvero (controllo automatico contro `nuclei-indice.json`).

---

## Verdetto — aggiornato il 2026-07-21, sera: i tre buchi sono CHIUSI

- **57 voci d'esame mappate e marcate** in pagina, ognuna verificata puntare a una tappa esistente.
- I tre buchi trovati nella verifica sono stati colmati lo stesso giorno:

| buco | rimedio | dove |
|---|---|---|
| Integrali doppi/tripli e cambio di variabili (AV, **Es.1 sistematico**) | **nucleo nuovo** — 4 tappe, 2 figure, Fubini + jacobiano + tripli in cilindriche/sferiche | `nuclei/18-integrali-multipli.html`, nel percorso come **Nucleo 02-bis** (Movimento I, dopo Dini) |
| Gram–Schmidt in $L^2$ (Metodi, B5, ~4/19) | **esercizio guidato** — da $\{1,x,x^2\}$ ai polinomi di Legendre, con l'aggancio a Sturm–Liouville | nucleo 09, tappa 02 |
| Espansioni asintotiche (programma ufficiale, mai negli scritti) | **nucleo nuovo `[+]`** — Laplace, fase stazionaria, punto di sella, Stirling | `nuclei/19-asintotica.html`, nel percorso come **Nucleo 14-bis** (Movimento III) |

**Il percorso è ora a 20 nuclei, 7295 formule verificate, 0 errori.**
Ogni conto nuovo è stato verificato **numericamente**, non a occhio: Stirling (errore 0,83% a
$n=10$ e 0,083% a $n=100$, come predice $1/12n$) e l'ortonormalità di Gram–Schmidt (norme = 1,
prodotti scalari incrociati = 0, $\lVert x^2-1/3Vert^2=8/45$).

### Una nota sulla numerazione
I due nuclei nuovi hanno **numero di file 18 e 19** ma **posizione logica 02-bis e 14-bis**: la
numerazione dei file è rimasta stabile di proposito, perché rinumerare tutto avrebbe rotto i link
già pubblicati, le chiavi dei progressi salvati e i riferimenti incrociati dentro i nuclei. La
**mappa** li mostra al posto giusto (`mappa-percorso.py` tiene la posizione, i file tengono
l'identità). È una scelta di struttura: preferire un numero un po' buffo a una rinumerazione che
rompe cose vive.

## Copertura per corso

### Analisi Vettoriale (Terracina) — 27 voci mappate
Parte I (topologia, differenziale, Dini, Taylor, estremi) → nuclei 00, 01, 02 ✔
Parte II.7 (integrali multipli, cambio di variabili) → **nucleo 02-bis** (file 18) ✔
Parte II.8-11 (curve, superfici, campi, teoremi integrali) → nuclei 03, 04, 05 ✔
Parte III (successioni e serie di funzioni) → nucleo 07 ✔
Parte IV (EDO, Cauchy, autonome, Eulero) → nucleo 06 ✔

Marcati con ★ (dimostrazione tipicamente richiesta): Green, Gauss, Stokes, Picard–Lindelöf,
limite uniforme (continuità/integrabilità/derivabilità), irrotazionale ⇏ conservativo,
convergenza puntuale vs uniforme.

### Metodi e Modelli (Caprini/Esposito, canale 3) — 30 voci mappate
**Blocco A — analisi complessa (~50%)** → nuclei 11, 12, 13 ✔
A1 Laurent + residui + integrale su curva **19/19**; A2 integrale reale per contorni **19/19**;
A3 Cauchy–Riemann e armoniche coniugate; A4 polidrome e determinazioni.
**Asintotica** (nel programma ufficiale, mai negli scritti) → **nucleo 14-bis** (file 19) ✔ — materia da orale.
**Blocco B — analisi funzionale (~50%)** → nuclei 08, 09, 15, 16, 17 ✔ (B5 Gram–Schmidt: nucleo 09, tappa 02)
B1 spettro **19/19**; B2 Green per EDO (trabocchetto δ′); B3 Fourier serie e trasformata;
B4 EDP per separazione.

---

## Come si legge il tag in pagina

Sull'intestazione della tappa compare un riquadro **«richiesto all'esame»** con:
- il **corso** (oro = Analisi Vettoriale, azzurro = Metodi);
- la **prova**: `scritto`, `orale` o `scritto+orale`;
- il **riferimento**: numero dell'esercizio tipico (`Es.3`) o del blocco (`A1`, `B2`);
- la **frequenza** dove è nota (`19/19` = in tutti gli scritti esaminati);
- **★** quando il punto è richiesto *con dimostrazione*;
- passando il mouse sul badge, la nota estesa con la voce di programma.

## Manutenzione
La mappa dei requisiti vive **in un posto solo**: l'array `REQ` in cima a `nuclei/esame-tag.js`.
Aggiungere un requisito = aggiungere una riga. Il controllo che ogni riga punti a una tappa
esistente si rifà con:

```bash
node -e "…"   # incluso nel passo di build; vedi APP.md
```

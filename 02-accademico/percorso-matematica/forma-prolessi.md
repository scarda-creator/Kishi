# Il dispositivo Prolessi + la Carta delle rotte (invenzione 2026-07-19)

Il **quarto strato** del percorso-matematica, oltre a rigore/profondità/senso.
Direttiva di Giuseppe (voce, 2026-07-19): rendere il percorso più utile, curioso,
interessante — con **rimandi e preannunci** al linguaggio della fisica che vedrà
(elettromagnetismo, meccanica statistica, meccanica quantistica). Voleva
qualcosa di **nuovo**, non l'elenco piatto "connessioni fisiche" già visto.

## Prolessi (per-nucleo)
Termine retorico = flash-forward. NON una metafora (vietate dalla forma-e-regole):
è un **dizionario rigoroso simbolo↔simbolo**. Blocco HTML `{t:'prolessi'}` nel motore
dei nuclei. Struttura dati:
```
{t:'prolessi', title:'...',
 oggetto: R`l'oggetto matematico imparato ORA, in una riga`,
 rotte:[ {dove:'Elettro-<br>magnetismo', txt:R`corrispondenza esatta`},
         {dove:'Meccanica<br>statistica', txt:R`...`},
         {dove:'Meccanica<br>quantistica', txt:R`...`} ],
 domanda: R`un interrogativo che il corso di fisica risolverà e lui non sa ancora,
            puntato alla tesi (ETH/decoerenza/stat mech); dove utile, "risposta in tasca"` }
```
Regole: corrispondenze VERE e verificabili; meglio 2 rotte vere che 3 forzate;
zero decorazione. La `domanda` si chiude col solo backtick (non `` `} ``).

Colpo che lo rende nuovo: la domanda aperta trasforma il tema del nucleo in fisica.
Esemplare nucleo 01 (differenziabilità, che parla di *quando fallisce*): «la fisica
ha un nome per il punto in cui l'energia libera smette di essere differenziabile?»
→ **transizione di fase** = non-analiticità di F. Il "buco" dei controesempi
promosso a fenomeno fisico, accanto alla tesi.

## Carta delle rotte (cumulativa)
Ogni Prolessi deposita un arco math-node → physics-node (EM/StatMech/QM/Tesi) su
una mappa che cresce nucleo dopo nucleo. È l'elemento "avanza come un gioco senza
essere un gioco": una vera mappa di dipendenze concettuali puntata sulla fisica.
Fonte dati: `carta-delle-rotte.md` (Argonauta). Vista aggregata da costruire dopo
che la carta è piena + Giuseppe ha approvato l'esemplare.

## Pipeline
Argonauta → carta-delle-rotte.md (banca dati preannunci, tutti i nuclei).
Demiurgo → scrive ogni nucleo col blocco prolessi (dalla carta o da conoscenza propria).
Mnemosyne → riconcilia le Prolessi con la carta; custodisce l'invenzione.

## Stato (agg. 2026-07-20, Dedalo)
- Nuclei con prolessi: 01 differenziabilità, 02 Dini/ottimizzazione, 03 curve/superfici, 04 campi vettoriali.
- **CARTA DELLE ROTTE COSTRUITA**: `carta-rotte.py` estrae le prolessi da tutti i nuclei e genera
  `carta-delle-rotte.md` (banca dati) + `carta-delle-rotte.html` (mappa bipartita nuclei↔fisica, archi
  colorati, domanda→tesi tratteggiata, hover con corrispondenza KaTeX). **Rigenerabile**: rilancia
  `python carta-rotte.py` dopo ogni nucleo nuovo e la mappa cresce. Stato attuale: 4 nuclei, 16 archi.
- **Verificatore nuclei**: `00-capitano/scripts/verifica-nucleo.js` (JS syntax via vm + KaTeX via katex);
  quiz_verifica.js NON va sui nuclei (cerca POOLS). Nucleo 04 verificato: OK (543 formule, 0 fallite).
- DA FARE: ratifica di Giuseppe sull'esemplare e sulla carta (è direzione — le vuole vedere: apri
  `carta-delle-rotte.html`). Argonauta può poi arricchire la carta con preannunci dei nuclei non ancora scritti.

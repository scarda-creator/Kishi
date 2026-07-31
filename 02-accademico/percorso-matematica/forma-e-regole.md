# Percorso-matematica — forma e regole (confermate da Giuseppe, 2026-07-18)

COS'È: una PIATTAFORMA INTERATTIVA di studio SILENZIOSO (come i percorsi saper-fare
esistenti), attraversabile dall'inizio alla fine, che avanza come un gioco senza essere
un gioco. NON è a voce, NON è una storia/favola. La voce serve a parlare con la navicella;
il percorso si studia leggendo e facendo.

VOCE / LINGUAGGIO
- Fisico, rigoroso, PRIMA DI TUTTO utile a passare l'esame.
- Linguaggio intelligente e creativo, ma ZERO fuffa e NIENTE metafore gratuite (la
  "collina al buio" è stata respinta). La creatività sta nel modo di pensare la
  matematica, non negli addobbi.

CONTENUTO — «non solo discorsi»
- Comprensione della GRAMMATICA MATEMATICA: notazione, formalismo, cosa significa ogni
  simbolo e perché.
- Spiegazioni ANCHE TRA LE FORMULE: derivazioni passo-passo, ogni passaggio motivato.
  Non prosa attorno alla matematica — la matematica lavorata, con la spiegazione dentro.
- ESERCIZI in cui è lui a fare (soste dove la strada passa il volante), con soluzione
  rivelabile e passaggi spiegati. **Per OGNI sezione un set SUFFICIENTE di esercizi
  DIFFICILI di livello d'esame** (non uno solo) — Giuseppe deve potersi allenare davvero
  per gli scritti (direttiva 2026-07-20). Attingere ai trabocchetti reali della mappa-argonauta.

VISUALIZZAZIONI (direttiva di Giuseppe, 2026-07-20): usare grafici 2D/3D e visualizzazioni
interattive — «le cose che solo la navicella può dare». È il vantaggio del medium: dove un
concetto ha una forma, MOSTRALA. Superfici $z=f(x,y)$ ruotabili, campi vettoriali, insiemi di
livello / curve di livello, ritratti di fase per le EDO, regioni (aperti/chiusi), il grafico del
controesempio (es. la sella $xy/(x^2+y^2)$). Via il blocco `plot` del motore
(`nuclei/motore-plot.js`), a costo zero (canvas, nessuna libreria esterna). Non è decorazione:
la visualizzazione deve chiarire il rigore, non sostituirlo.

I TRE STRATI per ogni nucleo: rigore (dimostrato) + profondità (varianti/trabocchetti
d'esame) + senso (significato fisico e connessioni; NON metafora-decorazione).

MIRA D'ESAME: calibrato sulla mappa reale (`01-mappa-argonauta.md`) — Metodi 50/50
complessa+funzionale coi tre trabocchetti; AV Terracina 4 blocchi. Unico organismo AV+Metodi.

COSTRUZIONE: riusare il motore interattivo esistente (percorso-interattivo saper-fare +
KaTeX), NON rifare HTML a mano; verificare sempre JS + KaTeX.

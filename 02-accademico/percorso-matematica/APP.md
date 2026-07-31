# L'app del percorso — come funziona e come si installa

Costruita da Dedalo il 2026-07-21 su richiesta di Giuseppe: *«un'applicazione dove salvo i
progressi»*, con avanzamento + autovalutazione + **ripasso spaziato**, poche carte al giorno, tutto
locale ed esportabile.

## I pezzi

| file | cosa fa |
|---|---|
| `percorso-app.html` | la casa: **Oggi** (coda di ripasso), **Percorso** (avanzamento), **Dati** (impostazioni, export/import) |
| `nuclei/progresso.js` | incluso in ogni nucleo: registra le tappe aperte e mette i pulsanti **so farlo / incerto / da rivedere** sotto ogni collaudo ed esercizio |
| `nuclei-indice.js/.json` | l'elenco dei nuclei e delle tappe, rigenerato da `nuclei/indice-nuclei.js` |
| `manifest.webmanifest`, `sw.js`, `icona.png` | la rendono **installabile** e utilizzabile **offline** |

L'archivio dei progressi è **una sola chiave** del browser: `pm-progresso-v1`. Nessun account,
nessun server, nessun costo.

## Come si usa

1. Apri `percorso-app.html` (o clicca «apri l'allenamento» dalla mappa).
2. Studia un nucleo normalmente. Sotto ogni **collaudo** e ogni **esercizio** trovi la riga *e tu?*:
   rispondi **so farlo**, **incerto** o **da rivedere**. Da lì nasce tutto.
3. Il giorno dopo, apri **Oggi**: trovi solo le voci scadute, al massimo quante ne hai deciso
   (default 10). Le valuti dall'app stessa, o apri la tappa col link.

**Il ritmo.** «so farlo» allontana la voce (1 → 3 → 7 → 16 → 35 → 75 giorni, modulati dalla
facilità); «incerto» la tiene corta; «da rivedere» la riporta a domani. È SM-2 semplificato a tre
esiti: la granularità fine è rumore quando ti valuti da solo.

## PUBBLICATA — 2026-07-21

Repo dedicato: **https://github.com/scarda-creator/PercorsoMatematica** (pubblico: GitHub Pages
non serve siti da repo privati sui piani gratuiti — se un giorno deve diventare privato, l'app va
ospitata altrove).

| indirizzo | cosa |
|---|---|
| https://scarda-creator.github.io/PercorsoMatematica/ | la home con le tre porte |
| https://scarda-creator.github.io/PercorsoMatematica/percorso-app.html | **l'app** (è questa che si installa) |
| https://scarda-creator.github.io/PercorsoMatematica/mappa-percorso.html | la mappa |

Sul **Desktop** c'è il collegamento `Percorso-matematica.url`, con icona
(`02-accademico/percorso-matematica/icona.ico`): apre direttamente l'app pubblicata.

### Installarla sul telefono
Apri l'indirizzo dell'app e scegli **«Aggiungi a schermata Home»** (iOS/Safari) o
**«Installa app»** (Android/Chrome). Da lì funziona **offline**: i nuclei visitati restano in cache.

### Ripubblicare dopo una modifica
```bash
# dalla cartella locale del percorso, copiando i file cambiati nel clone del repo
git -C <clone> add -A && git -C <clone> commit -m "..." && git -C <clone> push
```
I file pubblicati sono: `index.html`, `percorso-app.html`, `mappa-percorso.html`,
`carta-delle-rotte.html`, `nuclei-indice.js/.json`, `manifest.webmanifest`, `sw.js`, `icona.png`,
`nuclei/*.html`, `nuclei/motore-plot.js`, `nuclei/progresso.js`. **Non** sono pubblicati i sorgenti
di build (`nuclei/contenuti/`, `assembla-nucleo.js`, `indice-nuclei.js`) né la documentazione
interna: restano nella navicella.

> Nota sulla cache: `sw.js` ha una versione (`var VER = 'pm-v1'`). Se cambi i nuclei e vuoi che i
> dispositivi che l'hanno già installata prendano la versione nuova, **alza quel numero**,
> altrimenti continuano a servire la copia in cache.

## Portare i progressi da un dispositivo all'altro

I progressi sono per-browser. In **Dati** → *esporta JSON* si scarica un file
`percorso-progressi-AAAA-MM-GG.json`; sull'altro dispositivo, *importa JSON*. È anche il modo di
tenerli al sicuro: se svuoti i dati del sito, l'archivio se ne va.

## Dopo aver scritto un nucleo nuovo

```bash
node nuclei/assembla-nucleo.js nuclei/contenuti/NN-nome.js   # monta il nucleo
node nuclei/indice-nuclei.js                                  # aggiorna l'indice dell'app
python mappa-percorso.py && python carta-rotte.py             # mappa e carta
```
Il tracciamento è automatico: un nucleo nuovo eredita `progresso.js` dal template, senza altro da
fare. Se cambi la logica di scheduling, ricordati che vive in **due** posti (`nuclei/progresso.js`
e dentro `percorso-app.html`): è una duplicazione voluta, spiegata nel commento.

## Cosa NON fa, di proposito

- Non sincronizza da sola fra dispositivi (servirebbe un server o un token GitHub: si può
  aggiungere dopo, l'archivio è già un JSON pronto).
- Non genera domande nuove: allena ciò che i nuclei contengono già — collaudi ed esercizi.
- Non ti assegna un voto. Le due misure che mostra sono deliberatamente diverse: le **tappe aperte**
  dicono dove sei arrivato, le voci **«so farlo»** dicono dove reggi.

---
type: spec
autore: Dedalo
data: 2026-08-16
oggetto: il cancello esterno — quali modelli si collegano, e l'organo che impedisce il ban e la fuga di dati
stato: attivo
custode: Dedalo
---

# Il cancello esterno

Progetto deciso il 16 agosto sulla ricerca dell'Argonauta
(`00-capitano/ricerche-argonauta/omniroute-modelli-2026-08.md`) e sul gate ToS di Ierofante
(`00-capitano/ierofante/omniroute-gate-tos-2026-08.md`), che è la sua prima uscita da quando
esiste. Ordine di Giuseppe: OmniRoute è già installato, si scelgono i modelli, e **Temi prende
il ruolo di filtro** perché i ban arrivano su spike inusuali di richieste.

## 1. La decisione: cosa si collega

**Groq è il primo e per ora l'unico.** È l'unica convergenza piena fra i due agenti: Ierofante
lo dà verde perché l'uso automatizzato e agentico è riconosciuto **nel contratto** (§4.6) e il
non-training è default contrattuale, non promessa di marketing; l'Argonauta lo dà primo perché
ha i limiti migliori e il tool-calling confermato.

| modello | uso | limiti (16-08-2026) |
|---|---|---|
| `llama-3.3-70b-versatile` | il lavoro meccanico che richiede comprensione | 30 RPM · 1K RPD · 12K TPM · 128K ctx |
| `llama-3.1-8b-instant` | il volume: deduplica, conteggi, normalizzazione | 14.4K RPD, il tetto più alto |

Gli altri, e perché non oggi:
- **Cerebras** — privacy la più pulita di tutte, ma Ierofante lo blocca: il ToS leggibile vieta
  «any automated means to access the Service» e le API terms specifiche davano 404. Non si usa
  finché quel testo non si legge. Anche fosse verde, 5 RPM e 8K di contesto lo escludono dal
  testo lungo.
- **Gemini Flash** — l'unico con contesto da 1M, ma il ToS dice testualmente di non inviare
  informazioni personali e Google si addestra sui contenuti del free tier. Ammesso **solo** con
  payload completamente anonimo, e il cancello lo deve garantire meccanicamente, non per
  promessa.
- **Mistral** — 2 RPM: inutilizzabile in pipeline, a prescindere dal contratto irraggiungibile.
- **OpenRouter `:free`** — riserva. È passthrough e scarica su Giuseppe la politica dati dei
  provider sotto; il toggle anti-training va attivato a mano; e c'è una contraddizione aperta
  nel §4.1 del suo ToS.
- **Together, SambaNova, Cloudflare** — fuori: nessun free tier permanente, o limiti che li
  escludono.

## 2. Perché il filtro sta dentro Temi, e con quale forma

Temi è il guardiano di ciò che **entra** dal mondo (le fonti). Il cancello guarda ciò che
**esce**. È lo stesso confine percorso nei due sensi, e per questo non nasce un organo nuovo:
il ruolo si aggiunge a quello che c'è. Giuseppe l'ha chiesto così, ed è coerente con la regola
ratificata ad agosto — si nominano i procedimenti, non si creano agenti per nominarli.

Si tiene **l'architettura che Temi ha già**, e non è un dettaglio di stile: il catalogo è dato,
lo script è interprete, e il file non contiene codice come il codice non contiene la lista.
Quindi:

- `00-capitano/temi/cancello-esterno.md` — **il dato**: i provider, i loro tetti, il verdetto di
  Ierofante, i percorsi vietati, le parole che non escono. Si modifica qui quando cambia un
  limite, senza toccare una riga di Python.
- `00-capitano/scripts/temi.py` — **l'interprete**, che guadagna i comandi del cancello.
- `00-capitano/temi/chiamate-esterne.jsonl` — **la memoria delle chiamate**, append-only: una
  riga per chiamata, con istante, provider, modello, token stimati, esito. È ciò che rende la
  finestra scorrevole misurabile invece che sperata.

## 3. Le due domande a cui il cancello risponde

Sono due, e vanno tenute separate perché falliscono per ragioni diverse.

### (a) «Questo posso mandarlo fuori?» — il cancello dei dati

Tre livelli, in quest'ordine, e il primo che dice no chiude:

1. **Percorso.** Vietato tutto ciò che viene da `01-personale/`, `02-accademico/`,
   `00-capitano/memoria/`, e ogni file di livello L3, L4, L5. Non è una lista di sospetti: è
   una **whitelist rovesciata** — si dichiara cosa può uscire, e tutto il resto non esce.
2. **Contenuto.** Scansione locale delle parole che identificano Giuseppe («Scarda»,
   «Giuseppe», la sua mail, la matricola se compare) e dei marcatori di materiale d'esame. È il
   secondo livello perché un testo può essere in un percorso lecito e contenere lo stesso il suo
   nome.
3. **Dimensione.** Stima dei token prima dell'invio: sopra il tetto del modello si rifiuta
   invece di far fallire la chiamata a metà.

Il rifiuto deve **dire quale livello ha chiuso e perché**. Un cancello che dice solo «no» viene
aggirato dal primo che ha fretta — ed è esattamente il modo in cui un allarme diventa rumore.

### (b) «Posso mandarla adesso?» — il cancello del ritmo

Il dato che conta, e viene dalla ricerca: **429 è temporaneo e normale, la sospensione è ToS.**
Sono due cose diverse e il filtro serve a non trasformare mai la prima nella seconda.

- Finestra **scorrevole**, non fissa: il burst dopo il silenzio non accumula credito, quindi
  non si può «recuperare» il tempo non usato.
- Tetto operativo all'**80%** del limite dichiarato — 24 richieste al minuto su 30 per Groq.
  Il margine non è timidezza: è che il conteggio del provider e il nostro non coincidono mai
  esattamente.
- **Un solo contatore, condiviso fra processi paralleli.** È il punto in cui questa cosa si
  rompe davvero: due agenti che contano ciascuno per sé rispettano ognuno il tetto e insieme lo
  sfondano. Il contatore vive sul file, non in memoria.
- Dove il provider restituisce le intestazioni `x-ratelimit-remaining-*`, **valgono più del
  nostro conto**: si legge la verità del provider e si aggiorna la propria.
- Quando il tetto è raggiunto, si **aspetta**, non si fallisce: chi chiama riceve quanto deve
  dormire.

## 4. Le tre regole che vengono dai contratti, non dal buon senso

Da Ierofante, e sono la differenza fra un rallentamento e un account chiuso:

1. **Un solo account per provider.** Il divieto di registrare più account per aggirare i limiti
   è esplicito su Groq e su OpenRouter. È la strada che porta al ban vero.
2. **Chiavi mai condivise, mai in un repository.** La navicella si riversa su GitHub: la chiave
   sta nel Credential Manager come già fa la passphrase del riversamento, mai nei file.
3. **Nessun dato personale di Giuseppe verso provider gratuiti.** Per Gemini non è una nostra
   cautela: è una clausola scritta.

## 5. Cosa passa e cosa non passa il cancello

Passa fuori: estrazione da paper e fonti pubbliche, deduplica di liste anonime, normalizzazione
di formato su corpus non personale, classificazione grossolana su testo anonimo, conteggi.

Non passa, mai: qualunque file dei percorsi vietati, i materiali d'esame, gli output del
Rapsodo, e tutto ciò che è memoria. E **non passa la generazione sostanziale** — un'unità di
quiz, un capitolo, una decisione d'architettura — non per prudenza sui dati ma per la regola
cementata: Opus va dove nasce l'idea. Il cancello serve a liberare monte dal lavoro meccanico,
non a delegare il pensiero.

## 6. La cosa che va detta a Giuseppe, e che il cancello non risolve

Questo organo toglie il limite dalla metà meccanica. La metà che oggi lo ferma davvero è la
produzione — le unità di quiz, la scrittura densa, il giudizio — che resta su Opus per scelta
costituzionale. Il guadagno vero non è «niente più limite»: è che il monte smette di essere
speso per leggere, contare e riformattare, e resta intero per ciò che solo Opus sa fare.
L'altra leva, gratuita e non ancora tirata, è **quando** il monte si spende: oggi tutto mentre
Giuseppe guarda, e la finestra della notte buttata via perché il run delle 03:00 esegue una
voce sola e non ritenta dopo il reset.

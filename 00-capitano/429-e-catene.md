# Il 429 che fermava la navicella — diagnosi e correzione

**17 agosto 2026, Dedalo.** Chiuso e verificato.

## Il guasto

Due volte, il 16 e il 17, col ponte alzato: esaurito il monte Claude, il gateway
**riportava l'errore a Giuseppe** invece di scendere al modello successivo.

```
API Error: Request rejected (429) · [claude/claude-opus-5] [429]:
This request would exceed your account's rate limit. (reset after 58m 8s)
```

## Cosa non era

L'ipotesi ovvia — «il fallback è rotto» — è **falsa, e misurata**. Una catena con
due anelli garantiti guasti in testa (`groq/…` 404, `oc/gpt-5.2` 401) e un modello
vivo sotto risponde dal modello vivo, anche con la configurazione di default. Su
401 e 404 la discesa funziona. Il guasto era **specifico del 429**, e non stava
nelle catene: stava nei parametri globali di resilienza, che nessuno aveva aperto
perché la dashboard non li mostra accanto alle catene.

## Cosa era: la catena causale

Letta da `/api/resilience` e `/api/settings/combo-defaults`.

1. `failoverBeforeRetry` non compare nei default: vale falso. Al 429 il gateway
   **ririprova lo stesso modello** invece di scendere.
2. La connessione entra in cooldown, e qui il colpo mortale:
   `comboCooldownWait.enabled = true`, `maxWaitMs 90000`, `maxAttempts 5`,
   `budgetMs 300000`. La catena, trovando l'anello raffreddato, **si mette ad
   aspettare che guarisca** invece di usare quello sotto. Fino a cinque minuti.
3. `waitForCooldown.enabled = true`, `maxRetries 3`, `maxRetryWaitSec 30`: altre
   tre attese sullo stesso anello.
4. Bilancio esaurito → il 429 esce al client.

È una politica sensata per un rate limit di sessanta secondi. È una catastrofe per
un monte che torna fra **cinquantotto minuti**: si aspetta il massimo consentito,
si fallisce lo stesso, e il modello vivo un gradino sotto non viene mai interrogato.

Aggravante: `connectionCooldown.oauth.useUpstreamRetryHints = false`. Claude
**dice** quanto manca al reset; il gateway buttava via l'informazione e ripicchiava
con un backoff da 5 secondi su una porta che sapeva chiusa per un'ora.

## Il difetto di progetto, che era mio

`nav-ragiona` e `nav-scrive` avevano `claude-opus-5` e `claude-sonnet-5` ai posti
1 e 2. **Non sono due anelli: sono una quota sola.** Opus, Sonnet e Haiku stanno
sulla stessa connessione e sullo stesso monte dell'abbonamento. Un solo 429 ne
uccideva due insieme — tre dove sotto c'era anche Haiku.

Regola cementata in `catene.py`: **sotto un anello Claude non ci va mai un altro
anello Claude.** Il secondo posto appartiene sempre a una connessione diversa.
I panieri sono tre, non nove modelli: `claude/*`, `nvidia/*`, `gemini/*`.

## Cosa è stato scritto

`00-capitano/scripts/resilienza.py` (nuovo) — dichiara la resilienza come dato,
la applica, **e la rilegge**: un PATCH accettato e non applicato è il modo in cui
una correzione diventa una convinzione sbagliata.

| voce | prima | ora |
|---|---|---|
| `comboCooldownWait.enabled` | true | **false** — la catena non aspetta, scende |
| `waitForCooldown.enabled` | true | **false** — nessuna attesa sul tentativo |
| `connectionCooldown.oauth.useUpstreamRetryHints` | false | **true** — se dice 58m, gli si crede |
| `providerCooldown.enabled` | false | **true** — raffreddamento progressivo |

`00-capitano/scripts/catene.py` (modificato) — ogni catena ora porta la propria
configurazione (`failoverBeforeRetry: true`, `maxRetries 1`,
`disableSessionStickiness: true`), l'ordine alterna i panieri di quota, e
`--scrivi` rilegge dal gateway per confermare che sia rimasto scritto.

## Anelli caduti, rimossi

**Tutto groq è morto** fra il 16 e il 17: 404 su ogni modello. Non è un guasto dei
modelli — la connessione risulta `enabled: false`. Erano **sei anelli su
venticinque**, e uno era la **testa di `nav-estrae`**: quella catena girava su
gemini da un giorno senza che nessuno lo sapesse. Fuori anche
`nvidia/deepseek-v4-flash`, in timeout due giorni di fila.

Rientrano quando la connessione torna, non prima.

## Verifiche

```
nav-ragiona -> claude-opus-5             nav-estrae -> gemini-flash-lite-latest
nav-scrive  -> claude-opus-5             nav-cerca  -> claude-sonnet-5
nav-codice  -> claude-sonnet-5
verificato: tutte e 4 le correzioni sono scritte sul gateway
due anelli guasti in testa (404 + 401) -> 11.4s SCAVALCA, servito da gemini
```

## I tre punti aperti — chiusi il 17 agosto (pomeriggio)

### 1. `rateLimitProtection`: acceso su tutte e nove. La dashboard non c'entrava

Avevo scritto qui sopra che si accendeva solo a mano dalla dashboard. **Era
sbagliato, e in un modo che vale più della correzione.** Non esiste nessun toggle
nella dashboard: il campo non compare nella UI né nello schema di update dei
provider. Tutte le forme del PUT/PATCH erano condannate in partenza — la whitelist
di `src/shared/validation/schemas/provider.ts` semplicemente non contiene quel
campo, quindi il verbo e il payload non c'entravano nulla.

La rotta vera è **`POST /api/rate-limits {connectionId, enabled}}`** — trovata
guardando *cosa chiama il client*, non cosa dichiara lo spec: l'OpenAPI del
gateway pubblica `/api/rate-limits` come sola GET. E doveva per forza essere una
rotta a parte, perché fa due cose che il PUT non avrebbe mai fatto:
`enableRateLimitProtection()` accende il limitatore **in memoria**, e solo dopo
persiste il flag. Scrivere la colonna avrebbe dato un flag vero e un limitatore
spento: il peggiore dei tre esiti, perché si legge come fatto.

Cos'è, ora che è acceso: un limitatore per connessione (coda con `minTime` e
`reservoir`) che **impara i tetti veri dalle risposte del provider**
(`learnedRateLimits`, `parseRetryAfterFromBody`) e li ricarica al riavvio. Teia
dentro il gateway, spenta da sempre per il default della colonna
(`rate_limit_protection INTEGER DEFAULT 0`).

```
9/9 connessioni protezione=SI (riletto dal gateway, non dedotto dalla risposta)
claude: limitatore ATTIVO · le altre otto: armate, si istanziano al primo uso
```

Organo: `00-capitano/scripts/protezione-limiti.py` (`--accendi`, `--verifica`).

**La lezione, che è la stessa di ieri da un'altra faccia.** Ieri: un modello
elencato non è un modello disponibile. Oggi il gemello: **un endpoint non elencato
può essere vivo**. Dedurre «non si può» dal contratto invece di guardare
l'implementazione è lo stesso errore in specchio — e mi è costato una conclusione
sbagliata consegnata a Giuseppe come fatto.

### 2. La compressione del prompt: misurata, e si lascia spenta

Aperti tutti gli organi (`/api/settings/compression`, `/api/compression/rules`,
`/api/compression/preview`, `/api/compression/language-packs`). Stato: compressione
globale **spenta**, dodici motori, solo `caveman` col flag acceso (inerte, perché
il globale è off).

Misura su testo vero della navicella, via `preview` — non su testo d'esempio:

| campione | lite | standard | rtk | stacked | caveman | aggressive | ultra |
|---|---|---|---|---|---|---|---|
| messaggio di Giuseppe (it) | 0% | 0% | 0% | 0% | 0% | 0% | 11% |
| codice python (tool result) | 0% | 0% | 0% | 0% | 0% | 0% | 12% |
| nucleo HTML+LaTeX | 0% | 6% | 0% | 6% | 6% | 0% | 5% |
| lo stesso messaggio in inglese | 0% | — | — | — | — | — | **40%** |

Il verdetto è nei numeri e ha tre gambe:

1. **Sul nostro testo non c'è niente da togliere.** Quei motori tolgono *filler*:
   convenevoli, esitazioni, giri di parole, articoli. Il nostro contesto è codice,
   LaTeX e messaggi già asciutti. Il 40% sull'inglese misura quanto è prolissa la
   cortesia inglese, non quanto pesa il nostro lavoro.
2. **Non esiste un pack italiano** (en, zh, pt-BR, es, de, fr, ja, id). L'unico
   motore che morde l'italiano è `ultra`, che non ha regole per lingua e taglia a
   forza: rende l'11% e restituisce «che tu mi spiegassi» → «che spiegassi».
   Undici per cento non si paga con la grammatica di chi chiede.
3. **È la leva sbagliata.** Il monte si consuma in contesto riletto a ogni turno,
   che vive di prompt caching e di prefissi stabili. Il risparmio vero sta nel
   **non mandare** il contesto — routing per tipo di lavoro, testo estratto invece
   dei PDF interi — non nel limarlo del cinque per cento.

Organo: `00-capitano/scripts/compressione.py`, che rimisura invece di ricordare il
verdetto. Quando rimisurare: se arriva un pack italiano, se cominciamo a mandare
prosa inglese lunga, se si configura `llmlingua`.

### 3. Il ponte era giù, e la sua sonda era cieca

Alzato su ordine di Giuseppe, ma prima ho dovuto riparare la guardia: `ponte.py`
provava il gateway con `groq/llama-3.1-8b-instant`, e groq è morta fra il 16 e il
17. Diceva «gateway NON RISPONDE» mentre il gateway stava benissimo, e `--su` si
sarebbe rifiutato di alzare per un guasto inesistente. **Una sonda cablata su un
singolo modello misura la salute di quel modello e la spaccia per la salute del
sistema** — la stessa malattia di Teia il 13 agosto, in un altro organo. Ora prova
una fila di candidati gratuiti finché uno risponde.

```
gateway vivo: gemini-flash-lite-latest
cima della fila: chiesto claude-opus-5, servito claude-opus-5   <- nessun declassamento
PONTE SU
```

**La prova definitiva manca ed è onesto dirlo.** Non si è potuto fabbricare un 429
a comando: il free tier di gemini ha assorbito 30 richieste di fila senza cedere,
e i campi `rateLimitOverrides` / `quotaWindowThresholds` sono non documentati
(zero occorrenze nei bundle e nell'openapi). La correzione è stata dedotta dai
parametri veri e verificata su 404 e 401; il 429 la collauderà al prossimo monte
esaurito. Se ricapita, il colpevole non è più il fallback: sarà da guardare
`rateLimitProtection` e i panieri di quota.

## Una nota che riguarda Giuseppe, non il codice

Il `Connection refused` che ha visto insieme al 429 **non era un firewall**: era
mio. Una mia prova aveva deviato `ANTHROPIC_BASE_URL` su una porta di ascolto per
circa novanta secondi, per misurare se un `claude -p` legge `settings.json` senza
riavviare il terminale. Le impostazioni sono state ripristinate e verificate; ma
qualunque cosa sia partita in quella finestra ha trovato la porta chiusa. Il
risultato della prova, che almeno serve: **sì, legge — otto bussate, la prima su
`/v1/messages?beta=true`.** Nessun riavvio necessario.

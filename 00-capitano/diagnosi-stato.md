# Stato della diagnosi — Rapsodo, 2026-08-16

File prodotto: `00-capitano/diagnosi-procedimenti-2026-08-16.md`
HTML (`...-2026-08-16.html`): da fare PER ULTIMO, dal markdown.

## Famiglie
- [x] 0. Abstract + Metodo — scritto il 2026-08-16 (sessione 1)
- [x] 1. Gli agenti (8) — scritto il 2026-08-16 (chiave «ierofante» presente)
- [x] 2. Registro dei procedimenti + verificatore — scritto il 2026-08-16 (chiave «registro dei procedimenti» presente)
- [x] 3. Materiali di studio — scritto il 2026-08-16 (chiave «nuclei» presente)
- [x] 4. Memoria a 5 livelli + organi del richiamo — scritto il 2026-08-16 (chiave «cinque livelli» presente)
- [x] 5. Infrastrutture (plancia, Kishi, voce, anima, indice, Temi, apparati A/B) — scritto il 2026-08-16 (chiave «plancia» presente)
- [x] 6. Hook, comandi slash, script non citati — scritto il 2026-08-16
- [x] 7. Modulo Business — scritto il 2026-08-16 (chiave «ermete» presente; aggiornato con Ierofante 2 dispacci per OmniRoute)
- [x] 8. Patti e protocolli — scritto il 2026-08-16 (chiave «autonomia esecutiva» presente)
- [x] 9. Abbandonati e superati — scritto il 2026-08-16 (chiave «oroboro» presente; aggiunta categoria «mai nato per omonimia»)
- [x] 10. Documenti di visione e ricerche — scritto il 2026-08-16 (chiave «titanogenesi» presente)
- [x] 11. Procedimenti reali fuori dal registro — scritto il 2026-08-16
- [x] 12. Pattern trasversali + conclusioni operative — scritto il 2026-08-16 (chiave «pattern trasversal» presente)
- [x] 13. HTML impaginato — 00-capitano/diagnosi-procedimenti-2026-08-16.html

## In corso
COMPLETO. Tutte le famiglie 0-13 chiuse il 2026-08-16.

## Cosa so già e non ho ancora scritto — LEGGI QUESTO PER PRIMO
Misure già fatte, da non rifare:
- Dispacci agenti (Grep `"subagent_type"` su tutti i transcript):
  demiurgo-accademico 21 (5 sessioni) · argonauta 23 (5) · rapsodo 5 (3) ·
  architetto 4 (1 sola sessione, 12-08) · capitano 3 (3) · general-purpose 27 (4) ·
  **demiurgo-creativo 0 · ermete 0 · ierofante 0** (mai dispacciati).
  V1: argonauta-accademico 4, argonauta-personale 5, demiurgo-accademico(v1 incluso
  nei 21), rapsodo-personale/accademico 0.
- Invocazioni script (Grep `"command":"..."`): verifica-costituzione 33/11 sessioni ·
  quiz_verifica.js 24/5 · altri verificatori Rea (banco-plot-headless, verifica-nucleo,
  verifica-quiz-meccanica, innesta-lavagne) 31/3 · riversa.py 15/4 · uvicorn|npm run
  dev|vite 12/3 · teia.py 10 in UNA sola sessione (12-08) · pdf_estrai_testo+comprimi 8/6 ·
  temi.py 2/1 (12-08) · token_diagnostica.js 2/1 · raccolta-atti.py 2/1 (oggi).
- **`02-accademico/esiti/` NON ESISTE su disco.** Nessun `.jsonl` in tutto
  `02-accademico/`. La voce `raccolta-atti` osserva `02-accademico/esiti/atti.jsonl`.
- **Bug del verificatore:** `verifica-costituzione.py` righe 96-101 (`conto_registro`):
  se `eta_giorni` è None (artefatto inesistente) allora `fuori=False` e la voce viene
  contata come **attivo** nella riga di testa che Giuseppe legge. Un artefatto assente
  si traveste da procedimento sano. Il dettaglio esiste in `c4_registro` (righe 299-307)
  ma «procedimenti fermi» NON è in `URGENTI` (riga 375): non arriva a Giuseppe se c'è
  altro da dire.
- `plancia/backend/routers/voce.py` ESISTE (una prima glob troncata a 100 risultati me
  l'aveva fatto credere assente: attenzione a quel troncamento).
- `frags/edp.js` ESISTE, ma la voce `quiz-metodi-pool-edp` è `proposto` con sonda
  `manca:...edp.js`: la sonda oggi è FALSA, cioè il verificatore non sveglia nessuno e
  la voce resta «proposto» pur avendo il file. Quarta/quinta voce fuori sincrono.
- `CLAUDE.md` dichiara «quattro protocolli operativi»; su disco ce ne sono **11**.
- Nuclei del percorso-matematica su disco: **23** (00→22). Il registro chiude
  `percorso-matematica` con «18/18 nuclei». Registro fermo a una misura vecchia.
- `banca-fisica.md` (mio) punta a `02-accademico/corsi/meccanica/03-note-mie/Quiz_Meccanica_Orale_v1.html`
  che NON esiste più (il quiz è in `percorso-matematica/meccanica/`), e dichiara 391
  domande contro le 457 attuali. Ledger mio, fermo dal 03-07.
- `.claude/agents/` contiene 4 file `.md.bak-20260812` (architetto, demiurgo-creativo,
  ermete, ierofante) non ripuliti.
- `auto.log` del riversamento parte dal **2026-08-02**; il primo run (19:49) è fallito
  con `git push` exit 128; il run delle 20:00 dello stesso giorno è andato.
- Sessioni totali registrate: **19** file `.jsonl` di primo livello.

## Misure aggiunte dalla sessione 2026-08-16 (terza parte — famiglie 6-9)

- Settings.json hook confermati: SessionStart (6 script), UserPromptSubmit (cattura-apprendimento), Stop (fine-sessione). curl plancia in 6 tipi di hook — fail-safe (|| true), utilità zero se backend non gira.
- Comandi slash: 17 in .claude/commands/. Invocazioni non grep-abili dai .jsonl (si espandono in testo, non lasciano firma "command").
- CLAUDE.md dichiara 4 protocolli; su disco ce ne sono 11. Discrepanza non risolta.
- Ierofante: 2 dispacci il 16-08, per OmniRoute ToS check — primo uso reale, fuori dal modulo Business. Documento: 00-capitano/ierofante/omniroute-gate-tos-2026-08.md. Verdetti: 3 verdi/ambra, 3 rossi motivati.
- Ermete: ancora 0 dispacci dopo la riparazione del 12-08. Il modulo Business non ha mai avuto una sessione operativa.
- Patto sui ruoli: «costruzione → Dedalo» violato il 16-08 da Mnemosyne (due script nel cantiere pool). Rilevato da Giuseppe, non dal sistema.
- Categoria nuova in famiglia 9: «mai nato per omonimia» — coda-notturna.py (lotti esercizi) vs notturno/coda.md (manifesto scheduler). Ordine di Giuseppe del 15-08 finito nel primo; diagnosi mai partita di notte.

## Misure aggiunte dalla sessione 2026-08-16 (seconda parte — famiglie 3-5)

- Nuclei su disco: 23 (00-topologia → 22-irreversibilita), confermati da Glob. Tre file di supporto (_demo-plot, _banco-plot, _template) non sono nuclei. Registro fermo a 18.
- Quiz AV: 324 unità, 328 passi (dato da Mnemosyne/coordinatore). Rapporto passi/unità = 1,01 — quasi tutte single-step.
- Quiz Metodi: 341 passi su 248 unità (1,37), 77 multi-passo (31%). Meglio di AV.
- Temi: catalogo-fonti.md (75 fonti, 12-08), temi.py invocato 2 volte in 1 sessione (12-08). Ruolo cancello-esterno aggiunto il 16-08, non ancora meccanica costruita.
- Plancia: voce.py confermato su disco in `plancia/backend/routers/`. Avvii uvicorn/npm/vite: 12 in 3 sessioni. Fase-2 attiva nel registro.
- grafo-anima: 133 doc / 1010 legami, parcheggiato, 0 interrogazioni dal 25 luglio. Organo Crio lo ricostruisce ogni sera.
- L5/psicologica: 5 file su disco. L5/pattern-longitudinali: 5 file su disco.

## Misure aggiunte dalla sessione 2026-08-16

- Tutti e quattro i file `.bak-20260812` in `.claude/agents/` sono ancora presenti su disco (architetto, demiurgo-creativo, ermete, ierofante). Non ripuliti.
- `argonauta.md` e `rapsodo.md` hanno description NON quotata ma senza `: ` nel valore — nessun problema di parsing.
- `capitano.md` ha description non quotata ma non contiene `: ` — nessun problema.
- Confermato per lettura diretta: dopo la riparazione del 12-08, i tre agenti demiurgo-creativo/ermete/ierofante non hanno ancora 0 dispacci solo per il YAML rotto — hanno 0 dispacci anche dopo la riparazione. Sono stati rotti per 37/26 giorni e poi la pausa-studio ha fermato il sistema prima del loro utilizzo.
- `02-accademico/esiti/` — path non esistente confermato dal contesto del registro. `raccolta-atti.py` esiste su disco ma il suo path osservato (`atti.jsonl`) non esiste.
- `frags/edp.js` per metodi-e-modelli: file esistente al 16-08 (confermato dalla nota nel registro). La sonda `manca:...edp.js` nel registro è quindi falsa.

## Metodo di conteggio (per chi riprende)
- Invocazioni script: Grep su `C:\Users\ACER\.claude\projects\C--Users-ACER-Desktop-AgentsAI`
  con `"command":"[^\n]{0,400}?<nome>\.py`. Conta RIGHE-record = record di tool-use Bash.
  Stima per difetto: Task Scheduler e hook non compaiono.
  NB: il pattern ingenuo `"command":"[^"]*nome` NON funziona (il comando contiene `\"`).
- Dispacci agenti: `"subagent_type":"<nome>"`.
- Esistenza su disco: Glob. Nessun `stat` disponibile: niente byte né conteggio righe
  se non leggendo il file.
- Le sessioni `1d0f4adc` e `531b288a` hanno conteggi identici su quattro metriche
  indipendenti: quasi certamente la stessa sessione duplicata da un resume. Dove pesa,
  dichiarare entrambe le cifre.

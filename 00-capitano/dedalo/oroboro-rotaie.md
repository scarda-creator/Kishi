---
type: spec
---

# Oroboro — le rotaie (proposta di Dedalo)

> Scritto 2026-07-12 su convocazione di Mnemosyne (branch parallelo). Dominio: le
> ROTAIE tecniche (scheduling, permessi, àncora idle) sono mie; il TRENO (continuità,
> memoria, cosa eseguire) è di Mnemosyne. Questo è un design da proporre a Giuseppe,
> NON un build in autonomia (oroboro è decisione strutturale → patto di autonomia esecutiva).

---

## 1. Perché è fallito a luglio (2026-07-02)

Log: *"trigger cloud non raggiungono la sessione locale"*. L'errore era architetturale,
non di implementazione: si è provato a far sì che un **trigger cloud** (che gira su
infrastruttura Anthropic) **rientrasse in una sessione REPL locale** per eseguirvi lavoro.
È impossibile per costruzione — il cloud non ha una maniglia sul tuo REPL locale. La ricerca
dell'Argonauta (`04-esistenza-autonoma.md`) lo aveva già nominato: i due assi — *processo che
gira col laptop spento* e *sessione locale che si ri-arma* — sono **ortogonali** e vogliono
strumenti diversi. Confonderli è l'errore di luglio.

## 2. Cosa esiste DAVVERO in questo ambiente (verificato via schema dei tool)

Ho caricato gli schemi reali. Tre primitive, e una distinzione che cambia tutto:

- **`ScheduleWakeup`** — ri-sveglio **dentro questa sessione**, auto-pacing, ritardo
  clampato a [60s, 3600s]. È esattamente il "self-bind trigger orario" che il comando
  `oroboro.md` immaginava (`create_trigger`), ma nativo e funzionante. Ha persino un
  sentinel per il loop autonomo. **Muore se il laptop va in standby o la sessione chiude.**
- **`CronCreate/List/Delete`** — cron a 5 campi, MA lo schema dice a chiare lettere:
  *"Jobs live only in this Claude session — gone when Claude exits"* e *"durable: has no
  effect — session-only, in-memory"* e *"fire only while the REPL is idle"*. **Non è** il
  Claude Code Routines cloud della ricerca Argonauta. È un cron in-memoria che **muore col
  laptop** come ScheduleWakeup. Utile per cadenze fisse dentro una veglia, non per il sonno.
- **`/schedule` (skill)** — *questo* è il vero Routines cloud ("scheduled cloud agents that
  execute on a cron schedule"). Sopravvive al laptop spento. MA gira nel cloud: **vede solo
  un repo GitHub, non `C:\Users\ACER\Desktop\AgentsAI`**. Richiede la migrazione della
  memoria (esistenza-autonoma, non ratificata) + gate L5.

**Conseguenza netta:** nessuna primitiva locale sopravvive al sonno del laptop. Il "mentre
dormo" letterale ha solo due letture oneste, e sono due rotaie diverse.

## 3. Le due rotaie (trade-off locale vs cloud)

### Rotaia A — "Veglia" (laptop acceso, disponibile STANOTTE)
Motore: **ScheduleWakeup** in-sessione. Realizza il protocollo `oroboro.md` Passi 1–4
nativamente — si ri-arma a ogni ciclo, salta se Giuseppe è attivo, si ferma a fine finestra 12h.
- Regge: la gamba "self-rearm a ogni reset del limite" (era il cuore di oroboro).
- Non regge: il sonno. Serve **tenere il laptop sveglio** (Windows: presentation mode /
  `powercfg` / no-standby). Se il coperchio si chiude, muore.
- Prerequisito di **carburante**: il `cantiere-notturno.md` deve avere task AUTONOMI aperti.
  Oggi NON ne ha (quiz tutti fatti, Geometria in pausa). Senza carburante gira a vuoto.
- Costo: zero. Rischio: basso (additivo, reversibile, si auto-ferma).

### Rotaia B — "Sonno vero" (laptop spento, NON stanotte)
Motore: **/schedule** (Routines cloud) su **repo GitHub privato** con la memoria migrata.
- Regge: il laptop davvero spento. È la soluzione che l'Argonauta indicava per l'oroboro.
- Costo d'ingresso: migrazione memoria su GitHub (dominio di **Mnemosyne**, non mio) +
  ratifica di Giuseppe + **cancello L5** (mai in chiaro: `.gitignore` o git-crypt).
- Scrive solo sul repo, non sul disco locale → il lavoro prodotto va poi sincronizzato giù.
- Tempi: giorni, non una notte. È un pezzo dell'apparato E (esistenza autonoma).

### Dove entra la plancia (àncora idle)
Il backend plancia riceve gli hook e ha telemetria psutil: sa se c'è **attività recente**.
Diventa il sensore che risponde a *"Giuseppe è via?"* — sostituisce l'euristica fragile del
comando ("ultimo messaggio da ≥20 min") con un segnale reale (nessun hook da N minuti = idle).
Vale per entrambe le rotaie. Non è lo scheduler: è l'oracolo che lo scheduler interroga.

## 4. Proposta concreta

1. **Riscrivere `oroboro.md`** dalle primitive fantasma (`create_trigger`) a **ScheduleWakeup**
   (Rotaia A). È un aggiornamento di ~mezz'ora, ma è un build → lo propongo, non lo faccio ora.
2. **Rotaia A stanotte è possibile solo se** (a) Giuseppe tiene il laptop sveglio e (b) si
   riempie il cantiere di task autonomi veri. Entrambe sono decisioni sue (la (b) è *direzione*:
   quale lavoro additivo vale una notte). Senza, oroboro-stanotte non ha né gambe né benzina.
3. **Rotaia B è la vera risposta a "mentre dormo"**, e passa da Mnemosyne (migrazione memoria)
   + ratifica esistenza-autonoma + gate L5. Post-AV, non stanotte.
4. La plancia va promossa da visualizzazione a **sensore idle** (piccolo endpoint
   `/api/idle` che ritorna i minuti dall'ultimo hook). Build mio, quando si arma la rotaia.

## 5. La verità scomoda per stanotte
"Costruire/eseguire oroboro mentre dormo" stanotte richiederebbe: laptop-sveglio-forzato +
cantiere con carburante + accettare che al primo standby muore. Il ROI è basso a 5 giorni
dallo scritto di Analisi Vettoriale, per cui il materiale è già pronto e non serve produrre
nulla in autonomia. La rotaia giusta è B, e si posa dopo l'esame. Stanotte al massimo si
**prova** la Rotaia A a vuoto (validare che ScheduleWakeup ri-arma e si auto-ferma), ma è
un test di meccanismo, non lavoro utile — e va fatto da svegli, perché un loop notturno va
guardato la prima volta.

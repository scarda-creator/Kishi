---
type: visione
---

# Business v3 — il modello: volano + ecosistema darwiniano gated

> Design di Dedalo, 2026-07-17. EVOLVE `business-visione-v2.md` (il volano, il verticale-fisica, i
> confini onesti) integrando: il blueprint di Giuseppe (Ermete/Ierofante, micro-agenti darwiniani,
> post-mortem, protocollo 72h), la sua fonte reale (Conway-Research/automaton — survival-tier sì,
> wallet-cripto e codice auto-modificante no), e i due vincoli decisi in sessione:
> **abbonamento per operare la navicella, portafoglio ammesso per il business come capitale.**
> Questo è DESIGN, non build: nessun file-agente / db / codice finché Giuseppe non dice PROCEDI.

## 1. La tesi resta il volano
Contenuti a costo marginale ~0 → margine → GPU → metabolismo più economico → più contenuti. Il
Business è l'unico organo che **guadagna**; guadagnando toglie il soffitto a tutti gli altri. Frame
invariato dalla v2. Ciò che cambia è *come* lo orchestro e *con che soldi*.

## 2. Le due nature di spesa (corrette in sessione — il cuore del modello)
- **Operare la navicella** = solo abbonamento Pro. Il Business *produce* con strumenti a costo zero:
  Claude (già pagato) + compute locale. Nessuna API a pagamento per far girare la macchina.
- **Capitale del business** = il portafoglio di Giuseppe È ammesso, come investimento che punta a
  rientrare. MA oggi è quasi vuoto ("non ho i soldi, non posso ancora").

Da questi due fatti nasce il **phasing**, che è la spina del modello:

| Fase | Capitale disponibile | Carburanti accesi | Gate |
|------|----------------------|-------------------|------|
| **0 — Bootstrap** (ora) | ~0 | Solo a costo-zero: **contenuti** (verticale-fisica). Nessun capitale richiesto. | Nessuna spesa. Produzione su abbonamento + locale. |
| **1 — Primo margine** | il margine dei contenuti | Si aprono i carburanti che *richiedono* capitale (es. trading) con importi piccoli. | Ogni ciclo autorizzato a mano da Giuseppe (72h) + filtro Ierofante. |
| **2 — Capitale che cresce** | margine + ricavi | GPU, metabolismo economico, più micro-agenti darwiniani. | Le leve a pagamento (API/cloud/GPU) si accendono solo qui. |

Questo riconcilia tutto: il **trading non è escluso** (il capitale per il business è consentito), ma è
**phase-gated** dietro il bootstrap dei contenuti che produce il primo capitale. Content-first non per
ideologia: perché è l'unico carburante che parte da capitale zero *e* compone con la traiettoria.

## 3. Ermete — l'orchestratore semi-attivo
Terza classe, nuova: né attivo (non parla nella chat main) né passivo (non è un esecutore dispacciato).
Ha il controllo tecnico ed economico del modulo, istinto di crescita, e si interfaccia con Giuseppe
**ogni 72h** via `03-business/andamento-sistema.md`.
- **Modello — analisi di valore (richiesta dalla cementata "no Opus senza analisi"):** Ermete GENERA
  la strategia e i prompt-di-genesi dei micro-agenti, legge i post-mortem, decide cosa far nascere.
  È dove nasce l'idea → **Opus**. MA gira a **bassa frequenza** (cadenza 72h, non continuo) → non
  collide col throttle di Pro. I micro-agenti sotto di lui sono cheap (Sonnet o script). Proposta mia,
  ratifica tua perché tocca la model-economy.
- **Rapporto con me:** io progetto la struttura (sandbox, db, canali, la sua definizione), Ermete la
  opera giorno per giorno. Il business resta nel mio perimetro creativo — plasmo *cosa diventa* — ma il
  loop-di-denaro lo fa lui. (Punto sciolto in sessione: non mi ritiro dal Business come dominio, mi
  divido il lavoro.)

## 4. Ierofante — compliance (ruolo, non personalità)
Nome-ruolo come Rapsodo/Argonauta (Giuseppe: "tienilo"). Custode legale/fiscale. **Non** avvocato-finto
col veto cieco — **advisory con stop duri**:
- Analizza: originalità/copyright (per i contenuti e il clipping), soglie di fatturato per IVA/tasse,
  conformità di wallet e protocolli di trading.
- Enforcement come *gate di protocollo*: Ermete DEVE sottoporgli ogni piano prima del briefing 72h; un
  blocco di Ierofante arriva a Giuseppe **con le motivazioni**. L'autorità finale è di Giuseppe (è il suo
  portafoglio, il suo rischio) — può scavalcare Ierofante a occhi aperti, ma non di nascosto.
- **Modello:** checker/analizzatore, non generatore → Sonnet (pezzi meccanici anche locali).

## 5. L'ecosistema darwiniano + post-mortem
- **Cosa sono i micro-agenti (ambiguità del blueprint sciolta):** SCRIPT usa-e-getta con un
  prompt-di-genesi. L'intelligenza (quale far nascere, con che vincolo) sta in Ermete/Opus; lo script
  esegue (locale, o Sonnet dove serve ragionamento). Così restano cheap e coerenti con "Opus dove nasce
  l'idea".
- **`post-mortem.db` (SQLite locale)** — schema:
  - `cadaveri`(id, tipo[trading|clipping|content], genesi_prompt, creato_ts, morto_ts, esito[perdita|
    crash|chiuso], costo, ricavo, roi, causa_morte, log_ref)
  - `lezioni`(id, cadavere_id FK, vincolo_testo, categoria, riusato_n)
  - Genesi del nuovo micro-agente = query su `lezioni` per categoria → i vincoli appresi iniettati nel
    prompt-di-genesi. Impara dai morti.
- **Survival-tier (rubati ad automaton, l'unica gemma):** degradazione graceful per budget. Due assi:
  (a) budget-token di Pro — Ermete scala la propria attività sul limite-sessione residuo (non lavora
  pesante a finestra-5h quasi esaurita: è la regola-throttle resa automatica); (b) capitale — i
  micro-agenti ricevono tier di budget sul capitale disponibile.

## 6. Il protocollo delle 72 ore (fase di scarsità) — il livello di sicurezza
Ermete NON ha autonomia di spesa. Costruisce piani e micro-agenti, e si interfaccia con Giuseppe ogni
3 giorni. Nessun capitale né ciclo sbloccato senza autorizzazione manuale esplicita. È ciò che rende
accettabile il trading-con-capitale: **niente tocca il portafoglio senza il tuo sì per-ciclo** — che
è la risposta diretta a "non ho i soldi": non si può prosciugare il poco che c'è senza il tuo assenso.

## 7. Il verticale — proposta mia, decisione tua (invariata dalla v2)
**Contenuto fisica short-form**, carburante di Fase 0. Tre perché first-principles: autorità autentica
(sei un fisico vero — non falsificabile da una content-farm AI); compone invece di competere (fare
fisica approfondisce la tua traiettoria mentre rende); la materia prima esiste già (quiz, lavagne,
atlante — il Business distribuisce ciò che l'Accademico già genera). Il trading resta l'opzione di
Fase 1+ (capitale), non il punto di partenza.

## 8. Cosa NON importo da automaton
- Il **wallet-cripto autofinanziante**: usiamo il tuo portafoglio + il margine, non una cassa cripto
  autonoma.
- Il **codice auto-modificante del nucleo**: vietato (confine di Mnemosyne). MA dentro il **sandbox
  business** i micro-agenti possono mutare liberi — noti e reversibili (git), pareti del sandbox
  invalicabili. L'auto-mutazione di automaton vive *solo* dentro il recinto del business.

## 9. Le fondamenta strutturali (cosa costruirei, dopo PROCEDI)
- `.claude/agents/ermete.md` (semi-attivo, Opus, bassa frequenza) + `.claude/agents/nomos.md`
  (compliance, Sonnet, advisory-con-gate).
- `03-business/` come **sandbox murato** (isolamento reale da accademico/personale, non dichiarato):
  `opportunita/ · linea-editoriale/ · produzione/ · esecuzione/ · post-mortem.db · andamento-sistema.md
  · rapsodo-stato.md`.
- Comandi evoluti: `/scout-trend`, `/produci <formato>`, `/registra-esecuzione`, `/stato-business`.
- Produzione Fase 0 a costo zero: idea/hook/script = Dedalo; realizzazione = Demiurgo Business (Sonnet,
  entro abbonamento) + tagli meccanici su tool locali (OpenMontage/viral-reel-maker, lenti su CPU ma
  gratis). Niente API a pagamento.

## 10. Il gate temporale (reality-check di Mnemosyne, che onoro)
Progetto ora, costruisco la STRUTTURA al tuo PROCEDI. Ma l'ACCENSIONE vera (produrre+pubblicare) va
proporzionata a Meccanica (settembre): la tua stella polare viene prima. Io progetto la macchina; tu
decidi quando girare la chiave, e la chiave non deve mangiare l'estate dell'esame.

## Le decisioni che restano tue (di direttore)
1. **Il verticale** di Fase 0: fisica-contenuti (mia proposta forte) o altro.
2. **Ermete su Opus a bassa frequenza**: ratifica del modello (tocca la model-economy cementata).
3. **Ierofante**: nome tenuto; confermi il *potere* = advisory-con-stop-duri (non veto cieco)?
4. **Il phasing**: confermi trading in Fase 1 (quando c'è capitale dal margine), non subito?
5. **Il gate temporale**: struttura ora, accensione proporzionata a settembre.

---

## AGGIORNAMENTO 2026-07-17 — decisioni di Giuseppe, e la costruzione parte
Tutte le cinque decisioni sopra sono state prese. Registro le risposte e ciò che ho costruito.

- **Nomos → Ierofante** (definitivo). Potere confermato: advisory con stop duri, non veto cieco. Non un freno — chi legge la legge perché Ermete osi al sicuro. Def: `.claude/agents/ierofante.md`.
- **Ermete su Opus a bassa frequenza**: ratificato. Def: `.claude/agents/ermete.md`.
- **Trading in Fase 1** (quando il margine dei contenuti fa il primo capitale): confermato.
- **Attivazione — corretta da Giuseppe:** il manuale è il **LANCIO**. Giuseppe evoca Ermete in sessione e lo indirizza; da lì Ermete **corre autonomo**, senza chiedere il permesso a ogni passo. Nessun demone di sottofondo (protegge il limite di Pro), ma nessuna manina tirata a ogni mossa. L'unica cosa che resta autorizzata per-ciclo è spendere il *capitale* reale (Fase 1+); la produzione a costo-zero (Fase 0) è libera una volta lanciato.
- **Le tre pipeline di contenuti** (materia: `02-accademico/*/banca-esercizi`; motori: `03-business/produzione/`; coda: `03-business/coda-pubblicazione/` numerata+titolata; pubblicazione su TikTok/Reels resta di Giuseppe):
  1. **quiz-fisica** — COSTRUITO E PROVATO. `03-business/produzione/quiz-fisica/quiz_video.py`: spec (domanda+risposta LaTeX) → video 9:16 con intro/hook, formula, timer ad anello 5s, reveal col flash, teaser "Parte N+1". Costo zero: matplotlib (formula) + Pillow (frame) + PyAV (encode h264, niente ffmpeg). Forma scelta da Dedalo, da rifinire sotto la tua direzione.
  2. **clip-film** — meccanismo da costruire (yt-dlp + PySceneDetect/PyAV per i tagli da 1 min), MA cancello duro: nessuna fonte si tocca senza il verdetto PD scritto di Ierofante. "Famoso + copyright-free" è quasi un ossimoro — è il primo lavoro vero di Ierofante.
  3. **scifi** — meccanismo da costruire: testo (Sonnet) → narrazione con la voce locale Piper (`00-capitano/scripts/voce/`, zero costo) → spezzoni 1 min, parte 1→2.
- **Sandbox `03-business/`** creato: opportunita/ · linea-editoriale/ · produzione/{quiz-fisica,clip-film,scifi} · esecuzione/ · coda-pubblicazione/.
- **Da fare (dopo, al tuo comando):** post-mortem.db + i meccanismi clip-film e scifi + il wiring di Ermete che pilota le pipeline; aggiornare CLAUDE.md/architettura con la classe SEMI-ATTIVO e i due nuovi agenti.

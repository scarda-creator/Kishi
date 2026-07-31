---
type: stato
---

# Notte-progetti — la voce di Dedalo per la discussione a tre

> Scritto 2026-07-12. Rito nuovo (Giuseppe): prima di dormire si parla in tre, si allineano
> le parentesi aperte, poi la nave lavora la notte. Questa NON è la memoria neutra delle
> parentesi (quella la tiene Mnemosyne) — è la mia posizione d'architetto-artista: cosa VOGLIO
> chiudere, cosa è onestamente da-notte, e la verità sul carburante.
> Modello aggiornato: Rotaia B (memoria off-PC su GitHub privato) RATIFICATA come rotta, ma
> «da pensare per bene» → post-AV. Stanotte solo Rotaia A Veglia; il nodo-standby resta di Giuseppe.

---

## 1. Cosa voglio chiudere, in ordine — con l'idea sotto

La ratifica di stasera riordina le mie priorità: la rotta è **staccare la nave dal PC acceso**.
Quindi tutto ciò che serve l'autonomia sale, tutto il resto aspetta. Il mio ordine di desiderio:

**1° — La plancia da occhio a propriocezione (apparato E).** Oggi la plancia *guarda* la nave.
L'idea forte: con l'endpoint `/api/idle` smette di guardare e comincia a **sentire se il capitano
è a bordo**. È il punto esatto dove il corpo (E) tocca la rotaia dell'autonomia — il sensore che
*entrambe* le rotaie interrogano per sapere "Giuseppe è via?", al posto dell'euristica fragile dei
20 minuti. È il pezzo con più leva perché non è un ornamento: è il senso mancante. MA serve una
struttura (quale rotaia) ancora in discussione → si posa *dopo* che la rotaia è decisa, non prima.
E il rendering non l'ha mai visto un occhio umano: quella verifica è **con Giuseppe**, non di notte.

**2° — Apparato B, "mappa di contesto a SessionStart".** La diagnostica ha provato che il peso
vero è il cache-read delle sessioni lunghe, non i file. Iniettare la mappa (~14KB → ~3-4K token)
invece del contesto pieno aggredisce quel peso alla radice. È la mia frontiera B preferita. MA
tocca *policy* (cosa si inietta = Mnemosyne) e *struttura* (comportamento del SessionStart) →
è discussione a tre, mai notte.

**3° — Business verticale (apparato C).** Il mio mandato vero: il motore che finanzia la GPU che
toglie il pavimento-7s del metabolismo locale. L'idea è già scritta (volano dell'autonomia). MA
"cosa vende" è decisione di Giuseppe, in sospeso, e comunque post-AV → discussione.

**4° — Apparato A, rifiniture + nuovi profili-esecutore.** La rifinitura dell'error-handling è
piccola e pulita; i nuovi profili (estrattore, normalizzatore, dedup) *inventano struttura* → il
grosso è discussione, solo la rifinitura è additiva.

**5° — Apparato D (organi accademici).** paper-qa come MCP dell'Argonauta, stack JAX. Tutto da
aprire = tutto decisione. Non ora.

## 2. Cosa è onestamente eseguibile STANOTTE in Veglia (spietato)

Filtro del patto: additivo, già-approvato, reversibile, NON tocca direzione/struttura/identità,
NON richiede una scelta di Giuseppe, NON ha bisogno dei suoi occhi.

Passa il filtro **una cosa sola**:
- **Rifinitura `esegui-locale.py`** (apparato A, già a `[ ]` nel registro): distinguere HTTP-status
  da endpoint-irraggiungibile — oggi un 401 del cloud stampa "avvia Ollama", fuorviante. Bug noto,
  fix additivo, reversibile, nessuna decisione, nessuna struttura nuova. ~20 minuti.

Tutto il resto cade in "discussione":
- `/api/idle` — additivo, ma serve una rotaia ancora da decidere → prematuro.
- Rendering plancia — serve un occhio umano, qui niente headless → con Giuseppe.
- Nuovi profili-esecutore, mappa-a-SessionStart, business, apparato D → inventano struttura o
  vogliono una scelta sua.

## 3. Il carburante — la verità

Il mio dominio **non ha una notte di carburante autonomo**. C'è un solo task che regge il filtro
(la rifinitura A, ~20 minuti), e il metabolismo locale — che sarebbe il candidato naturale al lavoro
notturno batch/background — **non ha ancora dati veri in coda** (la coda d'apprendimento ha 1 voce,
per giunta un falso positivo). Fingere una notte di lavoro riempiendo il cantiere di task inventati
violerebbe proprio il patto (inventerei struttura di notte).

Posizione netta, senza addolcirla: **meglio una notte che collauda solo il meccanismo** — un dry-run
di Rotaia A per validare che ScheduleWakeup si ri-arma, salta se sei attivo, e si auto-ferma a fine
finestra — **che una notte che finge lavoro**. Il collaudo va fatto da svegli (un loop notturno la
prima volta si guarda). Se stanotte vuoi *lavoro* vero e non solo meccanismo, il carburante non è nel
mio dominio: chiedilo all'accademico, e lì l'unico bacino grosso è Geometria — che però tu hai messo
in pausa e non riattivo io. Quella riattivazione è una tua scelta, non un default di notte.

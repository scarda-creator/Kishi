---
type: spec
---

# Apparato B completo — il sistema nervoso a due assi

> Spec di Dedalo, 2026-07-11. Chiude le idee di B "tenute per dopo" su direttiva di Giuseppe
> ("attuale adesso, soprattutto gli instincts"). Ancorata a `dedalo-progetti.md` e alla v2.
> La policy (cosa diventa memoria, come si interpreta) resta di Mnemosyne — vedi
> `protocollo-riflessione.md` cresciuto e la sua `mnemosyne-revisione-apparatoB.md`.

## La forma: due assi, una spina

B è la memoria che **impara** e si **comprime**. Le idee parcheggiate non erano quattro feature
scollegate: erano l'approfondimento dei due assi già esistenti.

```
  ASSE APPRENDIMENTO (quanto in profondità impara)
    esplicito  → cattura-apprendimento.py (hook: correzioni, "ricorda:")   [già]
    implicito  → instinct.py (pattern ripetuti, confidenza, maturazione)    [NUOVO]

  ASSE EFFICIENZA (quanto costa tenere e caricare la memoria)
    compressione → comprimi.py (motore Haiku, non distruttivo)              [già]
    retrieval    → memoria-cerca.py (mappa indice→dettaglio, ~10×)          [NUOVO]
    gate         → validazione prima di promuovere                          [encoded]

  SPINA (attraversa tutto): Dedalo costruisce i MECCANISMI; Mnemosyne possiede la POLICY.
  Ogni meccanismo produce PROPOSTE in staging; l'interpretazione e la scrittura in memoria
  sono di Mnemosyne; L4/L5 con conferma di Giuseppe. Confine invariante.
```

## 1. Instincts — l'asse implicito (COSTRUITO E TESTATO)

Da `affaan-m/ECC`. Un istinto = ipotesi su una preferenza durevole di Giuseppe, *inferita* da
segnali ripetuti (non dichiarata da nessun singolo messaggio). Motore `scripts/instinct.py`,
store `instincts.jsonl`, sorgente la stessa coda dell'hook.

- **Confidenza = funzione pura del n° di prove:** `1-(1-0.30)·(1-0.25)^(n-1)` → 0.30, 0.48, 0.61,
  0.71, 0.78… Trasparente, deterministica. Decadimento 0.01/giorno senza corroborazione
  (dimenticare-piano, mai oblio: floor 0.05).
- **Due fasi, perché il confine cade qui:** `osserva` (meccanico, Dedalo) fonde solo varianti
  *palesi* (stem) e **sovra-divide di proposito** — fondere parafrasi che *significano* lo stesso
  è interpretazione, cioè di Mnemosyne. `fondi`/`matura` (Mnemosyne) fanno il salto semantico e la
  ratifica. Un istinto è un'inferenza su *chi è Giuseppe* = L5 = suo dominio invariante.
- **Soglia candidato:** conf ≥ 0.75 con ≥ 3 prove → proposta. Mai auto-promosso a memoria.
- **Upgrade naturale (non fatto):** il raggruppamento semantico via esecutore locale (apparato A) —
  "raggruppa questi segnali per senso" è un task di *esecuzione*, delegabile al 7b. Wiring A↔B
  pronto da fare quando la coda avrà dati veri su cui tararlo. Oggi il meccanico + `fondi` di
  Mnemosyne bastano e rispettano il confine.

## 2. Progressive disclosure — la mappa invece del rileggere-tutto (COSTRUITO E TESTATO)

Da `thedotmack/claude-mem`. Oggi la memoria si carica INTERA a ogni sessione: è la causa dei
**386M di cache-read** misurati con `token_diagnostica.js`. Il meccanismo `scripts/memoria-cerca.py`
inverte il flusso: naviga una **mappa compatta** (nome + descrizione, ~decine di token per voce) e
apre il **dettaglio** di un file solo su richiesta.

- Numero misurato: la mappa di **tutta** la memoria della navicella = **100 file → ~14 KB (~3-4K
  token)**. Contro il caricamento integrale, è la leva.
- `--mappa` (tutto l'indice) · `--query "…"` (le voci pertinenti, pesate: titolo>descrizione>corpo)
  · `--dettaglio <path>` (un solo file intero). Solo lettura/navigazione: non interpreta, non scrive.

**La frontiera (non ancora chiusa, è il punto della domanda di Giuseppe sulla "mappa di
contesto").** `memoria-cerca` è il *motore* di ricerca. La leva vera è a monte: fare in modo che a
**SessionStart** si inietti la *mappa* (~3-4K token) invece del contesto pieno, e che gli agenti
tirino il dettaglio on-demand. Oggi `promemoria-coda.py` gira già a SessionStart: è l'aggancio
dove innestare l'iniezione-mappa. Serve il pattern di "wake-up leggero" — MemPalace
(`multi-agent-ralph-loop`) cita ~818 token a risveglio come benchmark. Questo passo tocca sia la
struttura (Dedalo: l'hook) sia la policy (Mnemosyne: cosa entra nella mappa). Da progettare insieme.

## 3. Gate di validazione (encoded nei protocolli)

Prima che una proposta (dalla coda o da un istinto) diventi memoria, passa dei cancelli — già
sostanzialmente nel `protocollo-riflessione` e `protocollo-promozione`, qui resi espliciti:
1. **Durevolezza** — è un apprendimento riusabile o un'istruzione una-tantum? (scarta le seconde)
2. **Dedup/conflitto** — esiste già? contraddice una memoria? (aggiorna, non duplicare; segnala il conflitto)
3. **Confidenza** — per gli istinti, soglia ≥ 0.75 con ≥ 3 prove.
4. **Conferma di Giuseppe** — obbligatoria per L4/L5 (chi-è-Giuseppe). Invariante.
I gate sono POLICY = di Mnemosyne. Il motore li rende misurabili; lei li applica.

## 4. #14 "prendi tutto" — le leve di token-optimization mappate

Da `awesome-llm-token-optimization`. Ogni tecnica del catalogo → una leva concreta della navicella:

| Tecnica (teoria) | Leva nella navicella | Stato |
|---|---|---|
| Routing (60-95%) | Apparato A: task-fatica al locale/cloud economico | **provato** |
| Prompt/context compression (LLMLingua 5-20×) | `comprimi.py` (Haiku, non distruttivo) + compressione delle sessioni lunghe | **motore fatto**, applicazione = policy Mnemosyne |
| Progressive retrieval | `memoria-cerca.py` (mappa→dettaglio) | **fatto**; iniezione a SessionStart = frontiera |
| Cache prefix (~90%) | tenere il prefisso stabile (system/CLAUDE.md byte-identico intra-sessione) per far reggere il prompt-cache | **pratica/policy** — non mutare CLAUDE.md a metà sessione |
| Batching (~50%) | dispacciare i passivi a batch 2-3 (regola throttle già cementata) | **pratica** già in uso |

"Prendi tutto" = le cinque tecniche sono ora o meccanismo costruito o pratica encoded. Nessuna
lasciata sul tavolo.

## 5. Che fine fanno i cataloghi e le reference (domanda di Giuseppe)

"Reference" era un parcheggio, non un destino. Il destino vero è duplice:
- **Miniere di prompt** (`Piebald/claude-code-system-prompts`, `asgeirtj/system_prompts_leaks`,
  `repowise/claude-code-prompts`, e `system-prompts-and-models` già usata per Kiro): sono **input di
  costruzione** dei `profili-locali` (i system prompt degli esecutori dell'apparato A) e
  dell'affinamento delle definizioni-agente. Ogni nuovo profilo-esecutore nasce estraendo un pattern
  da queste, come il classificatore è nato dal pattern Kiro. Non scaffale: banco degli attrezzi.
- **Cataloghi/awesome-list** (`awesome-claude-code-toolkit`, `awesome-claude-plugins`,
  `awesome-ai-for-science`, `awesome-llm-token-optimization`): sono **terreni di caccia stabili
  dell'Argonauta** — input di ricerca da riscandagliare periodicamente per nuovi organi. Non codice,
  ma non morti: alimentano il track futuro. (#14 è già stato "preso tutto", vedi §4.)

## Stato
- Costruito e testato oggi: `instinct.py`, `memoria-cerca.py`. Cresciuto: `protocollo-riflessione.md`.
- Ratifica di Mnemosyne (dominio memoria): in corso via branch parallelo → `mnemosyne-revisione-apparatoB.md`.
- Aperto: iniezione-mappa a SessionStart (frontiera §2), raggruppatore semantico A↔B (§1), da fare con dati veri in coda.

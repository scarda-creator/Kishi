---
type: intake
---

# [Cowork] Regola strutturale: mai bypassare gli agenti passivi

**Fonte:** Sessione Cowork del 2026-06-28 (in corso)
**Tipo:** estratto curato — decisione strutturale
**Rilevanza presunta:** **P1** — principio operativo con valore permanente

---

## Contesto

Durante la lavorazione del corso Geometria, Mnemosyne (in Claude Code) ha proposto di eseguire personalmente l'inventario dei 28 PDF caricati in banca-dati, bypassando l'Argonauta. Motivazione tecnica: l'Argonauta era bloccato dall'errore "crediti usage per context 1M esauriti".

Giuseppe ha rifiutato: *"così però non va bene"*.

## La regola cementata

**Un agente attivo (Mnemosyne, Dedalo) non deve MAI eseguire il lavoro di un agente passivo (Argonauta, Rapsodo, Demiurgo) per aggirare un problema tecnico.**

Motivazione:

1. **Divisione dei ruoli**: Mnemosyne orchestra, non opera nei domini. Bypassando la triade temporale rompe la separazione delle funzioni cementata nell'architettura v2.

2. **Sedimentazione di prodotto**: gli agenti passivi crescono per accumulo del loro lavoro. Se un agente attivo lo fa al posto loro, quel pezzo di crescita non avviene. Domani non si potrebbe chiedere all'Argonauta *"ricordi l'inventario di Geometria?"* — non lo ha fatto lui.

3. **Coerenza col patto di scambio dataset-evoluzione**: il sistema si migliora *per sedimentazione* attraverso il lavoro degli agenti passivi. Bypassarli è aggirare il patto.

## Regola derivata: cambio modello al volo

Quando un agente passivo è bloccato per limite tecnico (context, crediti, ecc.), la soluzione corretta è:

1. **Cambiare il modello al volo** con `/model` a uno che non abbia quel limite (es. context 200K standard invece di 1M)
2. **Snellire il framework prompt** che l'orchestratore passa (spesso il limite è forzato da un prompt gonfio, non dal task in sé)
3. **Spezzare in batch** se anche 200K non basta

Mai la soluzione è: *"lo faccio io al posto suo"*.

## Estrazione per il sistema

- **P1 → L4 candidato**: questo è un principio strutturale che governa l'intera architettura. Da promuovere a L4 fondazionale con conferma di Giuseppe. Suggerisco `/promuovi-l4 mai bypassare agenti passivi`.
- **Da aggiungere ad `archivio-fondazione.md`** come voce datata: la decisione, il contesto (caso Geometria), la regola derivata sul cambio modello.
- **Da riflettere nelle regole di `capitano.md`**: aggiungere alla sezione "Regole assolute" una riga esplicita: *"Non eseguire mai il lavoro di un agente passivo per aggirare un problema tecnico. Cambio modello, snellimento framework, batch — mai bypass."*

## Destino file originale

**ELIMINA** dopo la cernita. L'informazione entra in memoria, non ha valore verbatim residuo.

---
type: spec
---

# Protocollo compressione — alleggerire il contesto con il modello leggero

> Come la navicella usa il compressore Haiku (apparato B della schiusura, 2026-07-11)
> per ridurre il peso del contesto. Motore: `00-capitano/scripts/comprimi.py` (di Dedalo,
> struttura). *Cosa* si comprime è policy di **Mnemosyne** (memoria). Confine invariante.

## Il fatto misurato
I file di memoria statici sono leggeri (CLAUDE.md ~9,6KB, snapshot ~8KB, MEMORY ~3,5KB).
Il peso reale (386M token di cache-read, diagnostica 07-11) viene dalle **sessioni lunghe**:
il contesto conversazionale che cresce turno dopo turno. La leva è comprimere le SESSIONI in
handoff, non i file statici (che sono già snelli).

## Il motore
`python 00-capitano/scripts/comprimi.py --modo {compressione|sintesi}` (default claude auto).
- **compressione**: riduzione NON distruttiva (~35-50%), tiene tutti i fatti; per log/archivi.
- **sintesi**: handoff lossy (Fatto/In corso/Prossimi/File); per far ripartire leggera la sessione.
Usa Haiku via `claude -p` — stesso account, costo di centesimi. `--archivio` salva l'originale
prima (niente oblio).

## Uso (compito di Mnemosyne)
1. **Handoff di sessione lunga**: quando una sessione è cresciuta molto (o prima di /oroboro
   o di un nuovo thread), passa l'estratto della sessione a `comprimi --modo sintesi` per
   generare un handoff denso; la sessione dopo riparte da quello invece di rileggere tutto.
   Complementa lo snapshot (curato a mano) e il Rapsodo: qui è compressione automatica ed economica.
2. **Compressione di archivi/log** verbosi con `--modo compressione` quando servono più snelli,
   sempre con `--archivio` per conservare l'originale (niente oblio).

## Confine (invariante)
Il motore è di Dedalo (struttura). *Cosa* comprimere, quando, e la scrittura in memoria sono di
Mnemosyne. Mai comprimere L4/L5 in automatico: lì la perdita non è accettabile e l'interpretazione
è sua. Estende [[protocollo-fine-sessione]] e [[protocollo-riflessione]].

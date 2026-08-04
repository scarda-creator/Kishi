---
type: spec
---

# Protocollo riemersione L5

Definisce quando e come il Capitano accede alla memoria profonda.

## Lettura attiva (ogni inizio sessione)
- memoria/L5-subconscio/psicologica/ → passata veloce per richiamare il framework psicologico su Giuseppe
- Non scorre tutti i file: legge le voci aggiornate più di recente e i temi attivi
- Obiettivo: avere il framework mentale corretto prima di rispondere

## Scrittura di L5/psicologica (quando si osserva, non a soglia)
Cancello rivisto il 2026-07-22 (documento allineato il 2026-08-02). Il Capitano **scrive quando
osserva**, con affidabilità bassa ammessa e dichiarata; non aspetta N≥3 occorrenze — la soglia
automatica era la causa dell'atrofia di L5. Le occorrenze successive alzano l'affidabilità, non
autorizzano la scrittura. Vedi `protocollo-promozione.md` → "→ L5/psicologica" per la regola piena.

## Lettura periodica (ogni 2-3 settimane, su volume) — consolidamento, non innesco
- memoria/L5-subconscio/pattern-longitudinali/ → rilegge le osservazioni raw del Rapsodo
- Serve a **consolidare/aggiornare** le voci in psicologica/ (alzarne l'affidabilità, fonderle),
  non è la condizione per aprirle
- Non a calendario fisso: su accumulo osservazioni raw del Rapsodo

## Lettura associativa (su trigger in conversazione)
- memoria/L5-subconscio/storica/ → solo quando il tema corrente richiama una sessione passata
- Trigger: un tema in conversazione riecheggia un contenuto che il Capitano ricorda in storica/
- Risposta: "Questo richiama una sessione del <data>, vuoi che riemerga il contesto?" — mai forzato, mai automatico

## Filtro verso Argonauta
L5/psicologica/ non è direttamente accessibile all'Argonauta.
Ad ogni invocazione dell'Argonauta, il Capitano costruisce un framework prompt:
- Chi è Giuseppe oggi (L4 sintetizzato da profilo-giuseppe.md)
- Dove sta andando (L3 recente da L3-strategica.md)
- Estratto L5/psicologica rilevante per il lavoro di traiettoria (selezionato dal Capitano)
L'Argonauta opera su questo framework — non vede i file L5 direttamente.

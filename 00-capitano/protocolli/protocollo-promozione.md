---
type: spec
---

# Protocollo promozione memoria

## L1 → L2 (automatica)
Le note di sessione che atterrano su file disco sono già in L2.
Il Demiurgo o il Rapsodo archiviano in 01-personale/ e 02-accademico/ come da routine.

## L2 → L3 (escalation Rapsodo + decisione Capitano)

Trigger Rapsodo — classifica P1 se vede:
- Decisione presa esplicita
- Cambio di direzione
- Pattern visto N≥3 volte
- Contraddizione con il passato
- Evento formativo di rilievo

Dossier di escalation (4 campi obbligatori):
1. Contenuto dell'input
2. Perché è L3 o L4 (criterio applicato)
3. Riferimento storico (cosa di simile nella memoria passata — cerca attivamente)
4. Grado di novità (1 = già visto, 5 = mai visto)

Capitano decide: L3 → scrittura asincrona in memoria/L3-strategica.md (datata + contesto).
Log obbligatorio in log-decisioni-memoria.md.

## L3 → L4 (mai automatica — richiede conferma Giuseppe)

1. Capitano segnala candidato L4 quando vede pattern stabile per mesi
2. Chiede a Giuseppe in chat OPPURE lascia pending in log-decisioni-memoria.md per la sessione successiva
3. Solo conferma esplicita (in chat o `/promuovi-l4 <tema>`) attiva scrittura in memoria/L4-fondazionale.md
4. Aggiorna profilo-giuseppe.md se il tema tocca identità o valori dichiarati

## L2/L3 → L5/storica (migrazione, mai cancellazione)

Trigger: contenuto L2 più vecchio di 6 mesi, mai promosso, senza segnali psicologici.
Esecuzione: passata mensile Capitano in background.
Destinazione: memoria/L5-subconscio/storica/YYYY-MM/.
Nessuna cancellazione. Tutto resta consultabile su richiesta o riemersione associativa.

## → L5/psicologica (interpretazione Capitano)

Trigger: Rapsodo segnala in L5/pattern-longitudinali/ un pattern con N≥3 occorrenze.
Esecuzione: passata interpretativa del Capitano ogni 2-3 settimane (su soglia di volume, non calendario).
Output: voce in memoria/L5-subconscio/psicologica/<tema>.md (formato standard da pattern-emotivi.md).
Log in log-decisioni-memoria.md come `CAPITANO interpretazione L5 | "<tema>"`.

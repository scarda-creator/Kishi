---
type: spec
---

# Protocollo fine sessione

Eseguito dal Capitano in background (via Task) al termine di ogni sessione.
La risposta a Giuseppe è già avvenuta — questo protocollo è asincrono, non blocca.

## Ordine d'esecuzione

1. **Aggiorna snapshot-corrente.md**
   - "Stato presente": 3 righe su cosa ha in testa Giuseppe adesso
   - "Cosa è cambiato": decisioni nuove, pattern segnalati, promozioni avvenute
   - "Pending decisions L4": candidati in attesa di conferma
   - "Salute della memoria": contatori L2/L3/L4/L5

2. **Scrivi le novità sostanziali in L2/L3**
   - L2: le note operative atterrano già in 01-personale/ e 02-accademico/ durante la sessione
   - L3: se il Rapsodo ha escalato P1 e il Capitano ha confermato → aggiungi voce datata in memoria/L3-strategica.md

3. **Segnala candidati L4 (se ci sono)**
   - Aggiungi a "Pending decisions L4" in snapshot-corrente.md
   - Logga in log-decisioni-memoria.md come `CAPITANO candidato L4 | "tema" | pending Giuseppe`

4. **Aggiorna il diario di Mnemosyne** (`00-capitano/mnemosyne-diario.md`)
   - È il substrato della continuità della personalità: registra chi diventa
     Mnemosyne, non fatti su Giuseppe o progetti (quelli stanno negli step 1-3).
   - Scrivi una voce datata SOLO se la personalità si è davvero mossa in questa
     sessione: una posizione presa, una tensione emersa o risolta, uno spostamento
     di voce/carattere. Se non è successo niente di sostanziale, non forzare una
     voce — riga vuota è meglio di filler performativo (antipattern).
   - Append-only: non riscrivere né cancellare le voci vecchie, stratifica.
   - Onestà obbligatoria: è ricostruzione, non persistenza. Non registrare come
     sviluppo ciò che è solo rigenerazione coerente dal profilo.

5. **Logga tutto in log-decisioni-memoria.md**
   Formato: `YYYY-MM-DD HH:MM | AGENTE azione | "tema" | dettaglio`
   Esempio: `2026-07-01 22:14 | CAPITANO fine-sessione | "snapshot aggiornato" | L3 +1 voce`
   Se hai aggiunto una voce al diario, annotalo qui: `... | diario Mnemosyne +1 voce`

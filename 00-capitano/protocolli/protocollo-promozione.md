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

## L3 → L4 (decisa e scritta dal Capitano — direttiva 2026-08-02)

Revisione del cancello: la promozione a L4 **non richiede più conferma di Giuseppe**. Direttiva
di Giuseppe del 2026-08-02: «gli intake, L4 e tutti i passaggi sulla memoria voglio che siano
gestiti da Mnemosyne e dal Rapsodo. Mia deve essere la rotta.» La gestione dell'esistente è del
Capitano; la rotta (cosa creare, dove andare) resta di Giuseppe. Registrata in
`log-decisioni-memoria.md` e `archivio-fondazione.md` (2026-08-02).

1. Capitano riconosce un candidato L4 (pattern stabile, fatto fondazionale su chi-è-Giuseppe, o
   principio che governa il sistema) — dagli intake del Rapsodo o dalla maturazione di L3.
2. Applica il criterio di merito: promuove solo ciò che regge come *fondazionale*, scarta con
   motivo ciò che è strategico (→ resta in L3) o operativo. **Un L4 gonfio è peggio di un L4 vuoto.**
3. Scrive la voce in `memoria/L4-fondazionale.md` (datata, con `source: stated | inferred`, e la
   fonte). Nessun gate di conferma.
4. Aggiorna `profilo-giuseppe.md` se il tema tocca identità o valori dichiarati.
5. Logga in `log-decisioni-memoria.md`. Se la promozione **contraddice** una voce esistente in
   L3/L4: la segnala in `snapshot-corrente.md` come `## Contraddizione da risolvere`, non
   sovrascrive.

## L2/L3 → L5/storica (migrazione, mai cancellazione)

Trigger: contenuto L2 più vecchio di 6 mesi, mai promosso, senza segnali psicologici.
Esecuzione: passata mensile Capitano in background.
Destinazione: memoria/L5-subconscio/storica/YYYY-MM/.
Nessuna cancellazione. Tutto resta consultabile su richiesta o riemersione associativa.

## → L5/psicologica (interpretazione Capitano)

Cancello rivisto il 2026-07-22 (la pratica aveva già smontato la soglia N≥3; documento allineato
il 2026-08-02). **Il Capitano scrive in L5/psicologica quando osserva**, non quando scatta una
soglia. Un livello che si riempie solo per innesco automatico (N≥3) non si riempie mai — era la
causa dell'atrofia di L5 (nove file fermi, zero voci vere) scoperta il 22 luglio.

Regola effettiva:
- Si scrive appena si osserva un comportamento/emozione/pattern che merita interpretazione,
  **affidabilità bassa ammessa** e dichiarata.
- Le occorrenze successive (N che cresce) **alzano l'affidabilità** della voce, non autorizzano
  la scrittura (che è già avvenuta).
- La passata interpretativa periodica (ogni 2-3 settimane su volume) resta utile per *consolidare*
  le voci raw del Rapsodo, non è la condizione per aprire L5.
- Output: voce in `memoria/L5-subconscio/psicologica/<tema>.md` (formato standard da
  `pattern-emotivi.md`: Pattern raw → Possibile lettura → Affidabilità → Implicazioni → Data →
  "Contestabile da Giuseppe"). Sempre marcata come interpretazione, non fatto.
- L5 non va servito ai sub-agenti passivi (userebbero un'ipotesi come dato).
- Log in `log-decisioni-memoria.md` come `CAPITANO interpretazione L5 | "<tema>"`.

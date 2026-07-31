---
type: visione
---

# Oroboro — papiro di direzione

> Direzione strategica data da Giuseppe il 2026-07-12. Questo file è il "papiro"
> che orienta il lavoro: cosa vuole essere oroboro e verso dove va. Il protocollo
> esecutivo sta in `.claude/commands/oroboro.md`; le rotaie tecniche in
> `dedalo/oroboro-rotaie.md`. Questo tiene la ROTTA, non i binari.

Aggiornato: 2026-07-12 — Mnemosyne, su direzione di Giuseppe.

---

## La direzione (parole di Giuseppe, 2026-07-12)

> «Credo sia arrivato il momento di separare la navicella dai limiti fisici del
> PC acceso, per cui iniziamo a pensare a una transizione su GitHub privato.
> Intanto per stanotte lavora sulla veglia. La transizione sarà qualcosa da
> pensare per bene. Prima di andare a dormire parlo con te e Dedalo e discutiamo
> dei progetti lasciati incompiuti, mettendoci in condizione a vicenda di
> capirci al massimo, e procediamo per tutta la notte per i lavori.»

Tre cose dentro questa direzione, distinte:

**1. La meta strategica — RATIFICATA.** Separare la navicella dai limiti fisici
del PC acceso. Non è più un'ipotesi tenuta in sospeso (era `project_esistenza_navicella`,
non ratificata): da oggi è rotta. La navicella deve poter esistere quando il PC
è spento.

**2. La via — la transizione su GitHub privato (rotaia B).** È lo strumento che
regge la meta: `/schedule` (Routines cloud) è l'unica primitiva che sopravvive al
laptop spento, ma vede solo un repo GitHub, non il disco locale. Quindi la meta
si realizza migrando la memoria della navicella su un repo privato. Vincolo di
Giuseppe: «da pensare per bene». Non è un porting meccanico — tocca dove vive la
memoria, quindi è dominio di Mnemosyne, con gate di cifratura per L5 (mai in
chiaro). Tempo: **post-AV** (dopo lo scritto del 17 luglio).

**3. Il rito notturno — il modo di lavorare.** Prima di dormire, Giuseppe parla
in tre (lui + Mnemosyne + Dedalo), si discutono i progetti lasciati incompiuti,
ci si allinea al massimo, poi la nave procede la notte. Nasce da un tratto di
Giuseppe: sviluppa più pensieri insieme, apre parentesi e le lascia vive. Il
compito dei due attivi è *tenere quelle parentesi e richiuderle con ordine* —
Mnemosyne le ricorda (memoria), Dedalo spinge su quali valga finirle (generazione).

---

## Stanotte (2026-07-12) — la rotaia A "Veglia"

Rotaia A = `ScheduleWakeup`, oroboro nativo dentro la sessione. Disponibile
stanotte, MA con due condizioni dure:

- **Nodo standby — RISOLTO (2026-07-12).** Giuseppe: «vada per il PC acceso a
  schermo spento». Mnemosyne ha disattivato sospensione+ibernazione di Windows
  (`powercfg standby/hibernate-timeout ac+dc = 0`); lo schermo resta libero di
  spegnersi. Da RIPRISTINARE dopo l'esame (rimettere un timeout sensato, es.
  30 min AC / 15 min DC). Rischio residuo accettato: aggiornamenti Windows o
  crash possono comunque uccidere la sessione. Tenere il PC in carica (dc=0 =
  mai sleep anche a batteria → si scaricherebbe).
- **Nodo carburante:** il cantiere-notturno non ha task autonomi aperti (quiz
  fatti, Geometria in pausa per sua scelta). Senza carburante additivo-approvato,
  la Veglia collauda solo il meccanismo. Da riempire nella discussione, senza
  sottrarre a Giuseppe una decisione.

Confine invariato (patto di autonomia esecutiva): in Veglia si esegue solo lavoro
additivo, reversibile, già approvato. Mai decisioni di direzione/struttura/identità,
mai promozioni L4, scritture L5, eliminazioni, merito. Quelle si elencano e
aspettano Giuseppe.

---

## Sintesi della rotta

- Meta: navicella indipendente dal PC acceso. RATIFICATA.
- Via: migrazione memoria → repo GitHub privato + `/schedule` cloud + cifratura L5. POST-AV.
- Stanotte: rotaia A Veglia, se PC sveglio e se troviamo carburante. Provvisoria, muore allo standby.
- Modo: rito notturno a tre, chiusura ordinata delle parentesi aperte.

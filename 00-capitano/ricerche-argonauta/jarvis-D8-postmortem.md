---
type: ricerca
autore: Argonauta
data: 2026-07-31
mandato: 00-capitano/mandato-ricerca-jarvis-2026-07-31.md (D8)
stato: bozza onda 1 — in arricchimento
---

# D8 — Chi ha già costruito "la mia seconda mente" e come è finita

## Risposta in tre righe

Non esiste un genere letterario robusto di "post-mortem di assistente personale a 6+ mesi"
con causa tecnica isolata: quello che si trova davvero sono (a) cronache di abbandoni
ripetuti di sistemi di note manuali prima ancora che arrivi un agente, con causa dichiarata
= manutenzione manuale insostenibile, e (b) un solo caso pubblico di sopravvivenza a 3 mesi
(non 6) la cui causa dichiarata di successo è l'automazione totale della manutenzione. Il
meccanismo di collasso più ricorrente e meglio descritto non è tecnico ma comportamentale:
la *collector's fallacy* — accumulare produce gratificazione immediata, l'uso no, e il
sistema muore per squilibrio fra i due, non per un bug.

## Candidati (ordinati per utilità reale)

**1. "COG" — Claude + Obsidian + Git, sesto tentativo di second brain**
· dev.to, autore huy_tieu · post singolo, non un repo con storia di commit verificabile
· licenza: n/a (post personale, non progetto open) · pubblicato 2026 (data esatta non
verificata alla fonte, dichiarata "dopo tre mesi di uso")
· Cosa fa: automatizza interamente la manutenzione di un vault Obsidian con Claude Code +
Git: classificazione automatica dei contenuti, sintesi mensile, zero tagging manuale.
· Cosa risolverebbe della navicella: è il caso più vicino nella forma (Claude + filesystem
Git-tracked) a ciò che la navicella già è — quindi la sua causa di sopravvivenza (vedi sotto)
è il candidato più diretto da confrontare.
· costo: non dichiarato (nessuna cifra su token/€) · rischio: fonte unica, non verificabile
in modo indipendente, N=1, orizzonte solo 3 mesi — sotto la soglia dei "6 mesi" richiesta dal
mandato per contare doppio.
· fonte del giudizio: post primario dell'autore (livello 3 della gerarchia — post tecnico
d'autore, non paper né repo con codice ispezionabile).

**2. Collector's fallacy — Zettelkasten Method (zettelkasten.de)**
· https://zettelkasten.de/posts/collectors-fallacy/ · non è software, è un saggio di
metodo · nessuna "versione" — riferimento stabile nella comunità PKM da anni, ripreso in
almeno 3 forum thread ancora attivi (forum.zettelkasten.de) che citano lo stesso saggio.
· Cosa fa: nomina e descrive il meccanismo psicologico per cui l'accumulo di note/materiale
sostituisce l'apprendimento reale.
· Cosa risolverebbe della navicella: è la lente più precisa per leggere il 749/17
(accademico/personale) e il 4:1 (sistema/Giuseppe) misurati dal Rapsodo — non come bug
tecnico ma come lo stesso squilibrio comportamentale descritto qui, riprodotto da un sistema
multi-agente invece che da un umano solo.
· costo: zero · rischio: nessuno, è un modello esplicativo non un artefatto da installare
· fonte: primaria (autore del blog, riferimento canonico citato da tutta la comunità
Zettelkasten anglofona).

**3. Letta / MemGPT — fallimento dichiarato della memoria auto-editing**
· https://github.com/letta-ai/letta · licenza non verificata con certezza in questa onda
(dichiarata Apache-2.0 da comparativi terzi, da confermare alla fonte) · progetto attivo,
release nightly su PyPI — non un cimitero.
· Cosa fa: memoria a blocchi con self-editing via tool call del modello stesso.
· Cosa risolverebbe della navicella: è il candidato già segnalato in D3 del mandato; qui
rileva per il **contro** dichiarato — "se il modello non chiama il tool di salvataggio, la
memoria è persa per sempre" e il costo di inferenza cresce perché ogni scrittura richiede un
turno di ragionamento+tool call in più.
· costo: più alto di una memoria passiva (ogni scrittura è un turno LLM aggiuntivo) ·
rischio: dipendenza dalla affidabilità del modello nel decidere di scrivere — rischio opposto
a quello della navicella (che ha troppi cancelli umani, non troppa fiducia nel modello)
· fonte del giudizio: comparativi di terze parti (vectorize.io, tokenmix.ai, evermind.ai —
livello 3/4, non issue GitHub dirette né documentazione ufficiale Letta: **da verificare alla
fonte primaria in un'onda successiva**, segnalato esplicitamente sotto in "Non confermato".

## Il meccanismo, spiegato bene

Il caso COG e il saggio sulla collector's fallacy raccontano la stessa storia da due lati.
La fallacia spiega perché un sistema di note manuale collassa: ogni atto di salvataggio dà
una ricompensa immediata e a basso costo (il file esiste, sembra progresso), mentre l'atto
che genera valore reale — rileggere, collegare, usare — costa sforzo e non dà nessuna
ricompensa immediata, quindi viene sistematicamente rimandato. Il sistema cresce in volume
(si accumula) e si svuota in utilità (nessuno lo riapre), finché il costo percepito di
riordinarlo supera il beneficio di tenerlo, e viene abbandonato — non con una decisione
esplicita, ma per lento disuso, esattamente come nei cinque tentativi falliti dell'autore di
COG (Notion, Obsidian+20 plugin, app React, di nuovo Notion, ognuno morto entro 1 mese per lo
stesso ciclo: entusiasmo iniziale → cattura di molte note → l'organizzazione manuale diventa
opprimente → abbandono). La sesta versione non ha risolto il problema rendendo l'umano più
disciplinato: lo ha risolto rimuovendo l'umano dal loop di manutenzione. Non tag manuali, non
cartelle da riordinare a mano: un agente che classifica, comprime e sintetizza senza che
nessuno gli dica di farlo in quel momento. La causa dichiarata di sopravvivenza a 3 mesi non
è "più struttura", è "meno punti in cui serve che un umano se ne ricordi" — il rovescio esatto
del pattern che il Rapsodo ha appena misurato nella navicella (D11: sette procedimenti su
undici si fermano proprio nel punto in cui dipendono da un umano che se ne ricordi, mai da un
hook tecnico che gira per costruzione).

## Contro

- Il caso COG è una fonte sola, non verificabile con un repo pubblico ispezionabile, N=1,
  a 3 mesi non 6+: non soddisfa pienamente il criterio del mandato ("chi ha superato i sei
  mesi"). Va trattato come indizio forte, non conferma — riportato comunque perché è il
  candidato strutturalmente più vicino trovato finora, non perché soddisfi la soglia.
- Letta/MemGPT: le critiche trovate finora vengono da comparativi commerciali di terze parti
  (vectorize, tokenmix, evermind — tutti prodotti concorrenti con incentivo a criticare
  Letta), non da issue GitHub dirette o da un utente che scrive "ho smesso di usarlo perché".
  Onda successiva: issue GitHub dirette di letta-ai/letta, r/LocalLLaMA per esperienze
  dirette.
- La collector's fallacy è un modello psicologico applicato a note manuali umane, non
  verificato empiricamente su un sistema multi-agente autonomo come la navicella —
  l'estensione al caso della navicella è un'inferenza dell'Argonauta, non un fatto trovato
  alla fonte.

## Innesto proposto

Nessuno — sezione di ricerca, non di costruzione (fuori mandato per l'Argonauta).

## Non confermato

- Data esatta di pubblicazione del post COG.
- Licenza precisa di Letta (dichiarata da fonti terze, non verificata sul repo).
- Se le critiche a Letta trovate finora sono confermate anche da fonti primarie (issue
  GitHub, changelog, thread di utenti reali) — cercato finora solo su aggregatori commerciali
  terzi.

## Confronto coi sintomi della navicella (misura Rapsodo, D11 + dispaccio Mnemosyne)

| Sintomo navicella (misurato) | Trovato finora | Verdetto |
|---|---|---|
| ~4:1 memoria-sul-sistema vs memoria-su-Giuseppe | Nessun caso con questa metrica esatta trovato. La collector's fallacy descrive lo squilibrio qualitativo (accumulo vs uso) ma nessuna fonte misura il rapporto sistema/persona come fa il Rapsodo. | **la navicella ha il sintomo — nessun precedente diretto trovato, solo analogia strutturale** |
| 749 file accademico vs 17 personale, di cui 1 vera | Stesso pattern del "graveyard of stale notes" citato per i tentativi falliti di second brain (volume alto, uso reale basso), ma senza uno split per dominio comparabile in nessuna fonte trovata. | **la navicella ha il sintomo — confermato dal pattern generale, non da un numero equivalente altrove** |
| livelli di memoria dichiarati vivi, zero voci dopo 8 settimane | Letta: "se il modello non chiama il tool di salvataggio, la memoria è persa per sempre" — causa diversa (l'agente non scrive) da quella della navicella (l'umano non promuove), stesso esito: livello dichiarato vuoto. | **la navicella ha il sintomo — causa diversa, esito identico** |
| 20+ script costruiti, molti mai richiamati | Analogo diretto ai "20 plugin Obsidian" abbandonati entro un mese nel caso COG: complessità costruita supera la capacità/volontà di richiamarla. | **la navicella ha il sintomo — precedente diretto trovato (COG, tentativo 2)** |
| autodiagnosi del 22/7 mai applicata | Non ancora trovato un caso equivalente esplicito ("il sistema si è diagnosticato da solo e nessuno ha agito"). Onda successiva mirata. | **da approfondire** |
| 8 agenti mai caricati per un campo mancante, 6 settimane, nessuno se n'è accorto | Non ancora trovato un parallelo diretto. Più vicino concettualmente a "documentation drift" (D6) che a un post-mortem PKM. | **da approfondire, probabilmente fuori scope D8** |
| ogni procedimento che dipende da "qualcuno che se ne ricordi" si ferma in silenzio | Questo è il fulcro causale di tutti i fallimenti PKM trovati finora (collector's fallacy, i 5 tentativi COG) e la ragione dichiarata di sopravvivenza del 6° tentativo. | **la navicella ha il sintomo — è il pattern più confermato di tutta la ricerca finora** |

---

*Onda 1 completata (fonti: dev.to COG, zettelkasten.de collector's fallacy, comparativi
Letta/MemGPT terzi). Onda 2 in corso: r/LocalLLaMA e r/ClaudeAI diretti, HN "Show HN: my
personal AI" con thread di commenti, ricerca mirata su "chi ha superato i 6 mesi e perché",
verifica primaria Letta/GitHub issues, Building a Second Brain (Tiago Forte) critiche
pubbliche.*

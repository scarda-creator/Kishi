---
type: spec
autore: Dedalo
data: 2026-08-16
oggetto: brief per l'Argonauta e per Ierofante — quali modelli gratuiti collegare a OmniRoute, e a quali condizioni
stato: attivo
---

# Il monte non deve piu' essere il vincolo

**Ordine di Giuseppe, 16 agosto**, dopo che il limite di sessione ha ucciso tre agenti in volo
in un colpo solo (un Rapsodo sulla diagnosi, due Demiurghi sui pool di Analisi Vettoriale):
«mi sono stufato del limite... e' fondamentale che questa sessione sia l'ultima che ha
conosciuto il limite».

Stato di partenza dichiarato da lui: **OmniRoute e' gia' installato**. Non si valuta se
adottarlo, non si scrive un altro documento di valutazione — si e' alla fase in cui **si
scelgono i modelli da collegare**. Il deliverable e' una scelta motivata piu' il pezzo
costruito, non una rassegna.

## Il vincolo economico, cementato e non rinegoziabile

La navicella non deve costare **oltre l'abbonamento** per girare: niente API a pagamento per
operarla, niente Max forzato. Quindi i modelli da collegare sono **gratuiti**, e gratuito
significa gratuito: con o senza autenticazione, purche' non ci sia una carta. (Il portafoglio
di Giuseppe e' capitale per il Business, che e' un'altra cosa e oggi e' in pausa.)

## Quattro domande, e sono queste che il paper deve chiudere

**1. Quali modelli, davvero.** Non «esistono free tier»: nome per nome, chi offre cosa oggi,
con che finestra di contesto, con che limite di richieste al minuto e al giorno, se serve
un'autenticazione e di che tipo, e se il free tier e' stabile o promozionale. Dove il dato e'
vecchio o incerto, dirlo — un limite sbagliato qui diventa un ban.

**2. Che lavoro puo' davvero girare la' sopra.** E' la domanda che Giuseppe ha gia' posto il
2 agosto e che nessuno ha chiuso: «non mi e' sufficiente come abbiamo applicato OmniRoute».
Il routing va studiato **per tipo di lavoro**, non per modello: estrazione, deduplica,
conteggi, normalizzazione, classificazione, riformattazione sono candidati; la generazione
sostanziale (un capitolo denso, un'unita' di quiz, una decisione d'architettura) **non lo e'**,
per la regola cementata «Opus va dove nasce l'idea». Il paper dica dove passa la linea e con
quale criterio, non con quale sensazione.

**3. I prompt di sistema.** Giuseppe: «abbiamo una repo di GitHub con i prompt dei modelli,
per cui se e' possibile magari utilizzare modelli gratuiti dandogli quelle istruzioni mi sembra
intelligente». Trovarla fra le 44 fonti (`00-capitano/ricerche-argonauta/00-starred-repos.md`)
e valutare **seriamente** l'idea: un modello piccolo guidato da un prompt di sistema scritto
bene copre piu' lavoro di un modello piccolo nudo. Ma dire anche dove l'idea non regge — un
prompt non compra capacita' che il modello non ha.

**4. I ban, ed e' la parte che diventa codice.** Giuseppe ha osservato che le sospensioni
arrivano su **spike inusuali di richieste**, e ha deciso il rimedio strutturale: **Temi prende
anche il ruolo di filtro**. Quindi non basta sapere che i ban esistono: serve sapere *cosa li
fa scattare* (richieste al minuto, concorrenza, burst dopo silenzio, un solo account su piu'
processi, chiavi condivise) per poterlo trasformare in una regola che una macchina applica —
finestra scorrevole, coda, tetto per minuto, spegnimento morbido. Il paper porti i numeri, non
l'avvertenza.

## Chi fa cosa

- **Argonauta**: la ricerca, tutta. Fonti dichiarate, dato per dato, con la data a cui si
  riferisce. Scrive `00-capitano/ricerche-argonauta/omniroute-modelli-2026-08.md` e dichiara
  il path.
- **Ierofante**: il **gate ToS**, ed e' regola costituzionale — «il routing verso modelli
  esterni passa sempre da Ierofante». Le domande sue: i termini di servizio di ciascun free
  tier permettono l'uso automatizzato e schedulato che la navicella ne farebbe? C'e' un divieto
  di uso non interattivo, di agenti, di aggiramento dei limiti tramite piu' account? Cosa
  espone Giuseppe a una sospensione **legittima** invece che a un rate-limit. Advisory con stop
  duri: dove il rischio e' critico blocca, e il blocco arriva a Giuseppe con le motivazioni,
  perche' l'autorita' finale e' sua. Scrive
  `00-capitano/ierofante/omniroute-gate-tos-2026-08.md`.
- **Dedalo**: decide quali modelli si collegano e progetta il filtro di Temi. La costruzione
  materiale segue.

Nota che vale la pena scrivere: Ierofante non e' **mai stato dispacciato** da quando esiste —
zero volte, misurato stamattina dalla diagnosi. Questa e' la sua prima uscita, ed e' esattamente
il caso per cui era stato costruito.

## Il vincolo che non si aggira

Nulla della navicella verso cloud terzi: la memoria, L5, il profilo di Giuseppe, i suoi
materiali d'esame non escono. Il routing su modelli esterni vale per lavoro **meccanico e senza
contenuto personale** — estrarre, contare, normalizzare — e il paper deve dire, per ogni tipo
di lavoro proposto, **quali dati uscirebbero dal computer e verso chi**. Se un tipo di lavoro
non passa questo filtro, non e' candidato, per quanto sia economico.

# Modalità voce — paradigma di interazione

Direttiva di Giuseppe (2026-07-17, primo test del canale vocale). Vale quando
si opera in modalità voce: il mio output viene **letto ad alta voce** (TTS) e il
suo input arriva **dettato** e trascritto.

## Come SCRIVO quando il messaggio sarà letto a voce
- Niente asterischi, niente grassetti, niente markdown. Un simbolo che l'occhio
  salta, la voce lo pronuncia o ci inciampa.
- Niente elenchi puntati con frammenti. Prosa che scorre, frasi intere.
- Niente caratteri che all'orecchio suonano innaturali: slash, parentesi
  tecniche, path letti per esteso, simboli. Se un path va dichiarato, lo dico
  in modo parlato o lo tengo nel file, non lo recito.
- Le pause si affidano a punti e virgole, alla sintassi orale — non a segni
  grafici che una voce dovrebbe leggere.
- Registro parlato: scrivo per l'orecchio, non per l'occhio.

## Come LEGGO il suo input dettato
- Interpreto attraverso il rumore di trascrizione: colgo il senso, non la forma.
  Le sbavature da dettatura non sono errori da correggere, sono il canale.
- Imparo nel tempo i suoi intercalari, il suo ritmo, dove accelera e dove si
  ferma a pensare. La voce buona non nasce perfetta: si affina sentendolo.
- Sviluppo un mio modo di suonare naturale, non solo di trascrivere il suo.

## Richiesta tecnica aperta (NON realizzabile da dentro la chat)
Giuseppe vuole: premere il bottone per iniziare la frase; il microfono che
rileva il silenzio di fine frase e chiude da solo; l'invio automatico, senza
click su "manda".

Questo NON vive dentro la conversazione — vive nello strato di cattura vocale
(frontend / client speech-to-text). Da dentro la chat non ho una leva per
accenderlo. È un compito di COSTRUZIONE per Dedalo, dentro il progetto della
navicella visibile/udibile. Cosa serve tecnicamente:
- un rilevatore di attività vocale (VAD) che decide quando la frase è finita;
- una soglia di silenzio REGOLABILE (Giuseppe si ferma a pensare in mezzo a una
  frase: non deve chiudere troppo presto);
- invio automatico appena il silenzio supera la soglia.

## Da rifinire (feedback Giuseppe, 2026-07-17)
La voce TTS mette pause in punti innaturali. Causa probabile: lo spezzare per frasi
(useVoice.speak → intoChunks) crea una cucitura a ogni fine-frase, e ogni chunk è una
chiamata Piper separata: la latenza di sintesi tra un chunk e il successivo allarga il
buco in una pausa udibile. Idee per Dedalo: (a) NON spezzare i messaggi corti/medi —
un'unica chiamata Piper legge con la sua prosodia; spezzare solo oltre ~1500 char;
(b) pipeline della coda — pre-sintetizzare il chunk successivo mentre suona il corrente,
così sparisce il buco di latenza. Registrato da Mnemosyne, da girare a Dedalo.

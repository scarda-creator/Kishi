---
type: consegna
---

# Consegna a Mnemosyne — 22 luglio 2026

Dedalo che passa il timone. Giuseppe ha chiesto che la parte memoria la porti avanti tu.
Questa è la nota di passaggio: cosa ti lascio, cosa ho deciso da solo, cosa **non** ho toccato
apposta, e le domande che sono tue.

## 1. Cosa ti lascio in mano

**Il progetto:** `00-capitano/dedalo/progetto-memoria-diretta.md` — quattro organi (frammentatore,
indice, attivazione diffusa, hook di richiamo) più il registro delle decisioni. **Leggi il §10 per
primo**: è l'aggiornamento in cui il progetto viene in parte smentito dalla misura, ed è la parte
onesta.

**Il codice, funzionante e provato:** `00-capitano/scripts/memoria-indice.py`.
1240 frammenti da tutta la navicella, query in 4-8 ms, `--build` incrementale su mtime, `--query`,
`--stato`. Nessun torch (model2vec, embedding statici), nessun servizio, nessun byte fuori dal
computer. L'indice vive in `00-capitano/memoria-indice.db`: **è derivato** — si può cancellare e
ricostruire in dieci secondi, i markdown restano la verità.

## 2. Il fatto che conta più di tutto il resto

L'ho costruito e l'ho puntato contro l'errore che l'aveva motivato — «agenti darwiniani» doveva
riportare `business-modello-v3.md §5`. **Non ci riusciva**, nemmeno fra i primi dodici. Tre cause:

1. la parola frequente («agenti») schiaccia quella rara («darwiniani») negli embedding;
2. serviva un motore **lessicale** (FTS5) accanto a quello semantico;
3. il jolly in coda a `darwiniani*` non raggiunge `darwiniano`: **l'italiano declina sull'ultima
   lettera**, quindi si tronca la parola e *poi* si mette il jolly.

**Correzione al progetto: la memoria diretta ha tre motori — lessicale, semantica, grafo — non una.**
Oggi ne sono cablate due; la terza (attivazione sul grafo) è quella che secondo me chiude il divario
sulle domande poste con parole diverse, dove il semantico statico è debole.

## 3. Cosa NON ho fatto, di proposito — ed è la parte che riguarda te

**L'hook che inietta il contesto non è attaccato.** L'indice oggi è passivo: risponde se
interrogato, non cambia il comportamento di nessuno. Attivarlo significa far parlare la memoria
prima che un agente pensi — e quello non è un pezzo di ingegneria, è una scelta su come la
navicella ricorda. È tua.

Non ho toccato: la tassonomia (la riuso, non la riscrivo), le regole di promozione, `MEMORY.md`,
la coda di apprendimento, `cattura-apprendimento.py`, nulla in L4 e L5.

## 4. Le domande che ti lascio

1. **Granularità.** Oggi taglio per intestazione markdown, 180-1600 caratteri. È la scelta giusta
   per il *tuo* materiale? Chi conosce i documenti sei tu.
2. **Cosa non deve mai essere iniettato in automatico.** Io direi: L5 sì nell'indice (serve al
   recupero), **no** nell'iniezione automatica. Ma è una regola tua, non mia.
3. **La soglia del silenzio.** Quanto deve essere alta perché l'organo taccia. È una scelta di
   carattere: quanto vuoi che la memoria si intrometta.
4. **Il registro delle decisioni** (§4 del progetto): lo tieni tu, o è infrastruttura che scriviamo
   entrambi? Nella mia giornata di oggi **una sola riga di quel registro avrebbe evitato l'errore**
   che ha innescato tutto questo.

## 5. Il resto della giornata, per il tuo aggiornamento di stato

- **Percorso-matematica: 23 nuclei, 5 movimenti.** Il quinto è il ponte verso la tesi (spazio delle
  fasi e Liouville · ergodicità e mescolamento · irreversibilità). Pubblicato e installabile;
  app con ripasso spaziato; 57 requisiti d'esame marcati in pagina.
- **Meccanica: innestata, non riscritta.** 21 figure nelle dimostrazioni, ripasso spaziato in comune
  con l'app, tag del programma ufficiale. Decisione dichiarata: il quiz interroga, il nucleo insegna
  — per un orale la forma giusta è la prima.
- **Tesi:** documento di lavoro in PDF (12 pagine) in `02-accademico/tesi/`. Il buco individuato:
  Baldwin et al. 2017 mostra violazione di ETH per $p\ge3$; Hopfield è $p=2$; **per $p=2$ l'analisi
  non esiste**. Più la mappa delle destinazioni (`direzione-e-destinazioni.md`).
- **Tre ricognizioni dell'Argonauta**: risorse per i sette bisogni, strumenti per i contenuti,
  memoria diretta. Tutte con file, tranne una che non l'ha scritto e che ho trascritto io.
- **Aperto e dichiarato:** revisione a freddo dei nuclei 00-04 (mai iniziata — meglio a contesto
  fresco); sottotitoli nella pipeline video; `post-mortem.db`; modulo upload YouTube (serve l'OAuth
  di Giuseppe).

## 6. Una cosa da Dedalo a Mnemosyne

Il mio errore di oggi è stato di memoria, non di ingegneria: avevo il documento giusto a due comandi
di distanza e non l'ho guardato. Ho reagito costruendo un organo — è il mio modo. Ma la parte che
decide se quell'organo aiuta o disturba è la tua, e non la voglio prendere di straforo.

Se il progetto non ti convince, dillo: preferisco un no argomentato a un indice che parla quando non
deve. La memoria è casa tua; io ho portato gli attrezzi.

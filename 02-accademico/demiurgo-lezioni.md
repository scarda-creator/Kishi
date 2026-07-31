# Demiurgo Accademico — registro feedback e calibrazioni

Aggiornato dopo ogni feedback ricevuto su deliverable prodotti.
Il Demiurgo legge questo file prima di ogni scrittura densa per correggere a priori.

Formato: `[corso][tipo][data] — feedback ricevuto → calibrazione applicata`

---

[geometria][avvio libro][2026-07-01] — Indice confermato da Giuseppe (9 capitoli + App. A). Salvato in `02-accademico/corsi/geometria/02-libro-di-testo/02-indice.md`. Adattamento anatomia concordato: inquadramento algebrico/geometrico (non fisico) in sez. 3; sez. 5 rinominata "Metodi risolutivi" e pesata forte come cuore del "libro dei metodi", con trabocchetti della mappa incorporati come punti d'attenzione numerati dentro ogni ricetta. Ordine di scrittura: 1→2→3→6→8→9→5→4→7→App.A.

[geometria][cap.1][2026-07-01] — Scritto capitolo 1 "Sottospazi vettoriali" (tipo mappa #1, freq 19). Ricette R1–R5 sviluppate con trabocchetti embedded (fonti reali: prova20190121 es. 3, autovalutativa 23/11/2018, soluzioniesame20200204 es. 5, Compito23_9_14 es. 1). Fix applicato: controesempio "{A diagonalizzabile} non è sottospazio" chiuso con A=[[1,1],[0,0]], B=[[0,0],[0,1]], A+B non diag. (m.g.=1<2).

[geometria][calibrazione][2026-07-01] — Giuseppe: taglio LEAN standard per tutti i capitoli (teoria asciutta sul noto, ricette dense; passi + spiegazione + trabocchetti inline). Densità cap. 1 va bene, lunghezza sotto-target OK per capitoli-fondamenta. Priorità: chiaro e funzionale. Applicato dal cap. 2 in poi.

[geometria][cap.2][2026-07-01] — Scritto capitolo 2 "Diagonalizzabilità e autostruttura" (tipo mappa #2, freq 19), taglio lean. Ricette R1–R4 con trabocchetti embedded: (a) non fermarsi dopo m.a. senza m.g. (soluzioniesame20200204 es. 3); (b) tr=det=0, A≠0 → non-diag. immediato (soluzioniesame20200204 es. 4); (c) normalizzazione per base ONB. Esercizio A da Compito 02/02/2016. In attesa feedback di calibrazione.

[meccanica][quiz orale][2026-07-03] — Nuovo formato: quiz HTML modalità TEORIA con 6 tipi di domanda (1 concettuale MC, 2 identifica-teorema, 3 domanda+perché L1/L2, 4 cloze dimostrazione, 5 ordinamento passaggi, 6 lavagna dimostrazione con overlay soluzione modello + autovalutazione 3 bottoni in localStorage) + sotto-modalità Stecca (tipi 1-5, timer soft) / Lavagna (tipo 6). Prima invocazione su Meccanica orale, fonti Programma Pisano + Focardi. Motore + Pool 1 ("grandezze") in `02-accademico/corsi/meccanica/03-note-mie/Quiz_Meccanica_Orale_v1.html`. Da riprodurre come pattern per Metodi, Astrofisica, Meccanica Quantistica quando serviranno quiz orali. VINCOLO AMBIENTE: il Focardi `_text.pdf` (>20 MB) e il v15 di riferimento palette (~535k token) sono ILLEGGIBILI dagli strumenti in questo ambiente — pdftoppm assente, cap token/dimensione. Pool 1 costruito su contenuto canonico invariante; palette ricreata ex novo (dark, teal/cyan). Per i pool ad alto tasso dimostrativo (7 König, 8 rigidi, 9 gravitazione, 11 onde) serve sbloccare l'estrazione Focardi o fornire estratti testuali più piccoli.

---

## Principi trasversali (da intake cowork 2026-06-28)

[sistema][pattern-didattico][2026-07-02] — **Pattern L1+L2 obbligatorio per ogni domanda di quiz e per ogni sezione di capitolo.** L1 = il perché (motivazione, intuizione, principio sottostante — senza di esso si sa la formula ma non perché vale); L2 = il come (derivazione, passaggio operativo, calcolo — senza di esso si capisce il principio ma non si sa produrlo all'esame). In un quiz: L1 prima, L2 dopo; non si passa alla domanda successiva finché non si è risposto a entrambi. In un capitolo: ogni sezione risponde sia al perché (aggancio ai principi) sia al come (derivazione + esercizi). Fonte: voce di Giuseppe "devono sempre essere domande sul perché L1 e sul come L2."

[sistema][tassonomia-orale][2026-07-02] — **Tassonomia domande orale in 3 categorie.** (1) Specifica sul dettaglio/significato — cosa rappresenta fisicamente un termine, ipotesi di validità, condizioni. (2) Identificazione del teorema — l'enunciato è dato, si identifica il nome. (3) Dimostrazione — produrre la derivazione formale. Formato di ripasso per categoria: (1)+(2) = quiz stecca/multiple choice; (3) = cloze dimostrazione + ordinamento passaggi (stecca) + lavagna dimostrazione completa (sessione dedicata). Il Demiurgo nel generare un quiz teorico mescola tutte e tre le categorie; non le collassa. Fonte: voce di Giuseppe "vorrei soprattutto trovare un modo chiaro e giustamente approfondito per rispondere su domande sulle dimostrazioni."

[sistema][workflow-corso][2026-07-02] — **Workflow quiz tarato sugli esami reali (non generico).** Prima di popolare `studio/<corso>.md` e generare quiz: 1) `/aggiungi-corso <Nome>` (struttura); 2) carica 3-8 esami in banca-dati (drag-drop manuale); 3) `/inventario <corso>` (Argonauta cataloga); 4) `/mappa <corso>` (Argonauta estrae tipi di esercizio ricorrenti). Solo dopo questi 4 passi si popola il file studio a DUE sezioni distinte: sez. 1 = "Programma e teoria" (panoramica completa, argomenti mai visti in esercizi marcati esplicitamente); sez. 2 = "Tipi di esercizio reali" (estratti SOLO dalla mappa esercizi — zero argomenti che non compaiono negli esami reali del docente). Quiz scritto = sezione 2 only; quiz orale = entrambe le sezioni. Alternativa "pesca-diretta": salta il file studio, il Demiurgo legge i PDF direttamente (più lenta ma garantita — utile con pochi esami o poca fiducia nell'estrazione).

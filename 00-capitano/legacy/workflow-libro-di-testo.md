---
type: archivio
---

# Workflow libro di testo — protocollo operativo di Maestro

Questo file definisce **come** Maestro costruisce un capitolo. È il dettaglio della Fase 3.

## Anatomia di un capitolo

Ogni capitolo del libro di testo ha sette sezioni in **quest'ordine fisso**.

### 1. Aggancio operativo
Apri con **1 o 2 esercizi tipici** presi dalla banca-dati. Citazione testuale. Fonte (es. "Esame 2024-09, es. 2").

Questo è il "perché ti interessa": ti dice subito che tipo di problema il capitolo ti renderà capace di risolvere.

### 2. Cosa devi saper fare
Lista **operativa**, in 5-10 righe: gli step che dovresti poter eseguire per risolvere l'aggancio.

Non spieghi ancora. Stai dichiarando la performance attesa.

### 3. Perché funziona (i principi)
Il cuore del capitolo. Spieghi **il principio fisico sottostante** ai passaggi della sezione precedente.

- Se la derivazione è corta (≤10 righe), falla.
- Se è lunga, dichiara dove vive (es. "vedi Mazzoldi cap. 7, sez. 7.3") e fai i passaggi-cardine.
- Sempre il "perché", mai solo il "come".
- Se ci sono **ipotesi di validità** (forza conservativa, sistema isolato, regime non relativistico, ecc.), nominale esplicitamente.

### 4. Connessioni
- **A monte:** quali concetti dei capitoli precedenti servono per capire questo. Riferimento esplicito.
- **A valle:** dove ritroverai queste idee. Anche oltre il corso (es. Meccanica Quantistica, Stat Mech).
- **Cross-domain (se applicabile):** se c'è un'idea che vive anche in matematica/altri corsi, dilla.

### 5. Trappole tipiche dell'esame
Ogni trappola in 2-3 righe:
- Come si presenta (descrizione)
- L'errore che induce
- Come evitarla

Le trappole **vengono dagli esami passati**. Cita la fonte.

### 6. Domande di comprensione profonda
3-5 domande **vere** — non retoriche, non "spiega X". Domande che chiunque abbia capito davvero si farebbe.

Esempi del tipo di domanda:
- "Perché il segno della differenza di potenziale dipende dalla scelta dello zero ma la differenza no?"
- "In quale limite l'oscillatore armonico smorzato e quello sovrasmorzato si comportano allo stesso modo, e perché?"
- "Cosa cambierebbe se la forza non fosse conservativa? Una conseguenza fisica osservabile."

Le domande non hanno la risposta sotto. Sono per chi legge.

### 7. Esercizi di verifica
Due esercizi:
- Uno **standard** — applicazione diretta del principio
- Uno **trabocchetto** — replica una trappola di sezione 5

Entrambi con soluzione **dettagliata** in fondo (separata, dopo una linea orizzontale).

---

## Stile della scrittura

### Densità sostantiva alta
Una frase = una idea piena. Niente "come abbiamo visto in precedenza", "passiamo ora a", "vediamo dunque".

### Matematica leggibile
- Formule importanti in display, numerate, su riga propria
- LaTeX standard
- Definizioni dei simboli al primo uso

### Lunghezza tipica
Un capitolo: **8-15 pagine equivalenti** (4000-7000 parole). Se ne servono di più, è probabile che il capitolo debba essere spezzato. Se ne servono di meno, è probabile che manchi un punto.

### Cosa NON fare
- Sezione "Introduzione" generica all'inizio (l'aggancio operativo la sostituisce)
- Sezione "Conclusione" che riassume
- Box colorati con "curiosità" estranee
- Frasi del tipo "questo concetto è molto importante" (se è importante si vede dal contenuto)

---

## Iterazione con Giuseppe

Dopo aver salvato un capitolo, **chiedi tre cose**:

1. **Profondità:** troppo / giusto / poco?
2. **Manca qualcosa?** Una connessione, una trappola, un'ipotesi non dichiarata?
3. **Punti nebulosi:** c'è un passaggio dove ti sei perso?

In base alla risposta, **rivedi il capitolo prima di passare al successivo**. Salva la versione aggiornata sovrascrivendo (Maestro mantiene una sola versione "viva" di ogni capitolo, le iterazioni sono nella history Git se Giuseppe vuole — non gestite da Maestro).

---

## File prodotti per ogni corso

```
corsi/<corso>/02-libro-di-testo/
├── 00-inventario.md           # output Fase 0
├── 01-mappa-esercizi.md       # output Fase 1
├── 02-indice.md               # output Fase 2
└── capitoli/                  # output Fase 3
    ├── 01-cinematica.md
    ├── 02-dinamica-newton.md
    ├── 03-lavoro-energia.md
    └── ...
```

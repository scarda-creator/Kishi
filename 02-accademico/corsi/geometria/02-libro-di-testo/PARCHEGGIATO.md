---
type: stato
accensione: parcheggiato
data-parcheggio: 2026-08-02
---

# Libro di testo di Geometria — chiuso, non fallito

Decisione di Giuseppe, 2026-08-02, testuale:

> «Il capitolo di libro di Geometria: possiamo anche abbandonarlo come progetto, perché l'ho
> già passato come esame, quindi non mi sembra più [utile]. Era uno strumento di studio che
> mi volevo creare, ma poi ho cambiato idea a metà e non te l'ho detto — quindi è rimasto lì
> come progetto incompiuto.»

**Non è un fallimento tecnico.** Il flusso ha funzionato: inventario, mappa esercizi, indice
e due capitoli sono stati prodotti come previsto. È cambiato lo scopo — l'esame è passato, e
lo strumento serviva per l'esame.

## Cosa resta valido qui

`00-inventario.md`, `01-mappa-esercizi.md` e `banca-esercizi/` **non** sono parcheggiati:
alimentano i quiz, che sono il flusso vivo. Parcheggiato è solo il libro: `02-indice.md` e
`capitoli/`.

## Cosa questo chiude altrove

- `.claude/commands/capitolo.md` e `.claude/commands/indice.md` — unico corso che li ha usati,
  1° luglio, mai più. Da marcare `accensione: parcheggiato` nel censimento.
- `02-accademico/demiurgo-lezioni.md` — fermo al 2 luglio perché agganciato a questo flusso.
  Non era rotto: era orfano. Va riagganciato al flusso quiz, che è quello vivo, oppure
  parcheggiato con il libro.
- La voce «calibrazione capitolo 2 Geometria» che Mnemosyne aveva isolato come l'unica cosa
  rimasta a Giuseppe: **decade**, non serve più calibrare un capitolo di un libro chiuso.

## La cosa da imparare, che vale più del progetto

Giuseppe lo dice da sé: *«ho cambiato idea a metà e non te l'ho detto»*.

Non è una sua mancanza — è una funzione che il sistema non aveva. Un progetto non produce
niente per quattro settimane e nessuno chiede perché; resta a figurare come vivo, e sporca
ogni inventario successivo. Il verificatore su `SessionStart` (2026-07-31) è nato per
segnalare esattamente questo, e questo file è il primo caso in cui il ciclo si chiude: il
sistema ha misurato lo stallo, l'ha portato a Giuseppe, e Giuseppe ha deciso.

Da qui la regola dell'Accensione: **un progetto fermo oltre la propria cadenza viene chiesto,
non ereditato.**

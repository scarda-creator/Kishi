---
type: spec
---

# Brief di design — Percorso saper-fare Geometria, versione INTERATTIVA

> Brief di Dedalo (Architetto) → Demiurgo Accademico. Il brief porta la creatività
> a monte; il Demiurgo materializza. Forma confermata da Giuseppe (2026-07-12):
> reveal progressivo + smistatore vivo + collaudo nascosto. Tecnica innestata da v0
> (repo system-prompts): artefatto completo self-contained, RIUSO di componenti di
> qualità (non reinventare), math in LaTeX, best practices moderne.

## Cosa
Trasformare i 12 file `.md` del percorso in **un'app HTML interattiva** di studio.
NON un quiz (il quiz interroga; questo allena il *gesto*). La sostanza matematica
esiste già nei `.md` e va INCAPSULATA, non reinventata: il Demiurgo non riscrive la
matematica, la mette in forma interattiva.

## Materiale sorgente
- Contenuto: `02-accademico/corsi/geometria/03-percorso-saperfare/*.md` (00-percorso
  = indice+smistatore; 01-11 = i saper-fare, 6 sezioni ciascuno: firma, idea, mossa,
  esame svolto, varianti, collaudo).
- Motore da RIUSARE (tecnica v0, non reinventare): `00-capitano/templates/quiz-template.html`
  (CSS + KaTeX + struttura verificata). Prendi il motore, cambia l'esperienza.
- Verificatore: `00-capitano/scripts/quiz_verifica.js` — il build non è finito finché
  KaTeX non parsa tutte le formule.

## La forma (le tre leve confermate)
1. **Reveal progressivo.** Le sezioni "mossa" (procedimento) ed "esame svolto" NON si
   mostrano in blocco: un passo alla volta, con un bottone "rivela il prossimo passo".
   Alleni il fare, non leggi il fatto. Le sezioni "firma" e "idea" restano aperte
   (servono a inquadrare prima di provare).
2. **Smistatore vivo.** La tabella dello smistatore (00-percorso.md) diventa uno
   strumento: scegli l'oggetto-spia del problema (dropdown o bottoni: `Span/U∩W`,
   `parametro k`, `matrice simmetrica`, `segnatura`, `tr(AᵀB)`, `z,z̄`…) e ti porta al
   saper-fare giusto. È il "quale metodo", che agli esami è metà della battaglia.
3. **Collaudo nascosto.** I problemi di collaudo mostrano solo il testo; la risposta è
   a scomparsa (bottone "rivela"). Provi, poi verifichi.

## Struttura tecnica
- **Single-file HTML self-contained** (tecnica v0), KaTeX come nei quiz, navigazione
  fra gli 11 saper-fare (tab o sidebar), stato di avanzamento leggero.
- Palette e stile coerenti col blueprint, ma è un'app di studio, non un quiz: niente
  punteggio, niente "risposta giusta/sbagliata" — solo reveal e collaudo.
- Marca **"SOSTANZA DA VERIFICARE — notte autonoma"** visibile in testa (la matematica
  non è ancora ratificata da Giuseppe).
- Nota di Dedalo su SF06 (refuso OCR: dipendenza corretta `2v1-4v2+v3=0`) e SF11
  (esame ricostruito) vanno riportate come sono nei `.md`, non silenziate.

## Confine
La matematica viene dai `.md` (già scritti, da verificare a parte): incapsulala fedele,
non inventarne di nuova. Se un `.md` è ambiguo, segnalalo, non colmarlo a caso.

## Output
Un file HTML in `02-accademico/corsi/geometria/03-percorso-saperfare/percorso-interattivo.html`.
Gira `quiz_verifica.js` (o la parte KaTeX) prima di dichiarare fatto. Dichiara il path.

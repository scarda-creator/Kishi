# Template corso

Cartella-stampo usata per creare un nuovo corso dentro `corsi/`.

## Come si usa

Quando vuoi aggiungere un corso (es. "Astrofisica"), in chat scrivi:

> "Capitano, crea un nuovo corso chiamato **Astrofisica**."

Il capitano:
1. Crea `corsi/astrofisica/` con le tre sottocartelle
2. Copia i README da questo template
3. Sostituisce `{NOME CORSO}` con `Astrofisica`
4. Crea anche `01-produttivita/studio/astrofisica.md` per Pilot (versione minima)
5. La plancia rileverà automaticamente il nuovo corso al prossimo Reload

## Slug delle cartelle

Il nome della cartella deve essere in **slug**: tutto minuscolo, parole separate da `-`.
- "Astrofisica" → `astrofisica`
- "Meccanica Quantistica" → `meccanica-quantistica`
- "Geometria Differenziale" → `geometria-differenziale`

## Non toccare questa cartella

Non caricare materiale qui dentro. È solo lo stampo.

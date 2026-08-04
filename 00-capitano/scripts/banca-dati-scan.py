#!/usr/bin/env python
"""banca-dati-scan.py — accorgersi del materiale nuovo, da qualunque canale arrivi.

Accensione, 2026-08-02. Sostituisce `.claude/hooks/on-banca-dati-write.ps1`, che era
agganciato a `PostToolUse` con matcher `Write|Edit`: vedeva solo i file scritti dai tool
nativi di Claude. Ma in banca-dati il materiale entra da altre due strade — lo script
`pdf_estrai_testo.py` lanciato da shell, e Giuseppe che copia i PDF a mano da Esplora File.
Misura del 31/7: 1 riga di log contro 470 file realmente scritti.

La correzione non e' un hook migliore: e' cambiare il tipo di controllo. Invece di
ascoltare un evento (che passa da un solo canale), si confronta lo STATO del disco con
quello dell'ultima passata. Qualunque canale usi il file, lo stato cambia.

Uso:
  python banca-dati-scan.py            # modo hook: silenzioso se non c'e' nulla di nuovo
  python banca-dati-scan.py --umano    # riepilogo leggibile
  python banca-dati-scan.py --azzera   # ricostruisce il manifesto senza segnalare nulla
"""
import io
import json
import os
import sys
from datetime import datetime

HERE = os.path.dirname(os.path.abspath(__file__))
NAV = os.path.abspath(os.path.join(HERE, "..", ".."))
ACCADEMICO = os.path.join(NAV, "02-accademico")
MANIFESTO = os.path.join(ACCADEMICO, ".banca-dati-visti.json")
PENDING = os.path.join(ACCADEMICO, ".pending-inventory.log")

# Il testo estratto e' derivato, non fonte: conta come volume ma non va segnalato
# uno per uno all'Argonauta, che deve sapere dei MATERIALI nuovi.
DERIVATI = ("_txt",)
IGNORA_EXT = {".sha1", ".tmp", ".part"}


def scandisci():
    """{path relativo: dimensione} di tutto cio' che sta in una 01-banca-dati/."""
    visti = {}
    corsi = os.path.join(ACCADEMICO, "corsi")
    if not os.path.isdir(corsi):
        return visti
    for corso in sorted(os.listdir(corsi)):
        base = os.path.join(corsi, corso, "01-banca-dati")
        if not os.path.isdir(base):
            continue
        for root, dirs, files in os.walk(base):
            dirs[:] = [d for d in dirs if not d.startswith(".")]
            for f in files:
                if f.startswith(".") or os.path.splitext(f)[1].lower() in IGNORA_EXT:
                    continue
                p = os.path.join(root, f)
                try:
                    visti[os.path.relpath(p, NAV).replace("\\", "/")] = os.path.getsize(p)
                except OSError:
                    pass
    return visti


def carica():
    try:
        with io.open(MANIFESTO, encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return {}


def salva(d):
    with io.open(MANIFESTO, "w", encoding="utf-8") as f:
        json.dump(d, f, ensure_ascii=False, indent=0, sort_keys=True)


def corso_di(rel):
    parti = rel.split("/")
    return parti[2] if len(parti) > 2 else "?"


def derivato(rel):
    return any(("/%s/" % d) in rel for d in DERIVATI)


def main():
    ora = scandisci()
    prima = carica()

    if "--azzera" in sys.argv:
        salva(ora)
        sys.stdout.write("manifesto ricostruito su %d file, nessuna segnalazione\n" % len(ora))
        return

    nuovi = [r for r in ora if r not in prima]
    cambiati = [r for r in ora if r in prima and prima[r] != ora[r]]
    spariti = [r for r in prima if r not in ora]

    if nuovi:
        with io.open(PENDING, "a", encoding="utf-8") as f:
            for rel in sorted(nuovi):
                f.write("%s | %s\n" % (datetime.now().strftime("%Y-%m-%d %H:%M"), rel))
    salva(ora)

    fonti = [r for r in nuovi if not derivato(r)]
    deriv = len(nuovi) - len(fonti)

    if "--umano" in sys.argv:
        sys.stdout.write("banca dati: %d file totali\n" % len(ora))
        sys.stdout.write("  nuovi: %d (di cui %d materiali veri, %d testo estratto)\n"
                         % (len(nuovi), len(fonti), deriv))
        sys.stdout.write("  modificati: %d | spariti: %d\n" % (len(cambiati), len(spariti)))
        per_corso = {}
        for r in fonti:
            per_corso[corso_di(r)] = per_corso.get(corso_di(r), 0) + 1
        for c, n in sorted(per_corso.items(), key=lambda x: -x[1]):
            sys.stdout.write("  - %s: %d materiali nuovi\n" % (c, n))
        for r in sorted(fonti)[:20]:
            sys.stdout.write("      %s\n" % r)
        return

    if not fonti:
        return                                    # silenzio: nessun materiale nuovo

    per_corso = {}
    for r in fonti:
        per_corso[corso_di(r)] = per_corso.get(corso_di(r), 0) + 1
    riga = ", ".join("%s (%d)" % (c, n) for c, n in
                     sorted(per_corso.items(), key=lambda x: -x[1]))
    sys.stdout.write("Banca dati: %d materiali nuovi dall'ultima passata — %s. "
                     "Se serve, `/inventario <corso>`.\n" % (len(fonti), riga))


if __name__ == "__main__":
    try:
        main()
    except Exception:
        pass

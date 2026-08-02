#!/usr/bin/env python
"""fine-sessione.py — il verbale che chiude ogni sessione.

Nasce dall'Accensione (2026-07-31). `protocollo-fine-sessione.md` dichiara «eseguito dal
Capitano al termine di ogni sessione»; il log delle decisioni e il diario di Mnemosyne
erano fermi da nove giorni. Il protocollo non era rotto: non aveva un innesco. Questo
script e' l'innesco, agganciato allo hook `Stop`.

CONFINE COSTITUZIONALE — leggere prima di modificare.
Questo script scrive FATTI, non interpretazione. Registra quali file sono cambiati,
quanto e' cresciuta la coda, cosa e' rimasto in sospeso. NON scrive nel diario di
Mnemosyne, NON scrive in L4, NON giudica la sessione. Quella e' identita', e l'identita'
non si automatizza: il patto dice mani libere, rotta no. Il verbale e' il materiale
grezzo che un agente attivo interpreta all'apertura successiva, quando c'e' una persona
a farlo.

Uso:
  python fine-sessione.py            # modo hook: legge JSON su stdin, tace su stdout
  python fine-sessione.py --prova    # scrive il verbale e lo stampa
"""
import io
import json
import os
import sys
from datetime import datetime, timedelta

HERE = os.path.dirname(os.path.abspath(__file__))
NAV = os.path.abspath(os.path.join(HERE, "..", ".."))
VERBALI = os.path.join(NAV, "00-capitano", "verbali")
CODA = os.path.join(NAV, "00-capitano", "coda-apprendimento.jsonl")

# Rumore: cose che cambiano da sole o in massa e non dicono nulla su cosa e' successo.
SALTA_DIR = {".git", "node_modules", "__pycache__", "voce-venv", ".venv", "_txt",
             "verbali", "tool-results"}
SALTA_EXT = {".pyc", ".pyo", ".db", ".sha1", ".log", ".enc", ".png", ".jpg", ".pdf"}
# Oltre questa soglia si scrive il conteggio invece dell'elenco: una passata di corpus
# produce centinaia di file e sommergerebbe il verbale.
MAX_ELENCO = 40


def ultimo_verbale():
    """mtime dell'ultimo verbale, come inizio della finestra da raccontare."""
    if not os.path.isdir(VERBALI):
        return None
    ts = None
    for f in os.listdir(VERBALI):
        if f.endswith(".md") and not f.startswith("_"):
            m = os.path.getmtime(os.path.join(VERBALI, f))
            ts = m if ts is None else max(ts, m)
    return ts


def file_cambiati(dopo):
    out = []
    for root, dirs, files in os.walk(NAV):
        dirs[:] = [d for d in dirs if d not in SALTA_DIR and not d.startswith(".claude/")]
        if any(part in SALTA_DIR for part in root.replace("\\", "/").split("/")):
            continue
        for f in files:
            if os.path.splitext(f)[1].lower() in SALTA_EXT:
                continue
            p = os.path.join(root, f)
            try:
                m = os.path.getmtime(p)
            except OSError:
                continue
            if m > dopo:
                out.append((m, os.path.relpath(p, NAV).replace("\\", "/")))
    out.sort(reverse=True)
    return out


def voci_coda(dopo):
    """Quante catture sono entrate in coda nella finestra, e quante restano da processare."""
    if not os.path.exists(CODA):
        return 0, 0
    nuove = totali = 0
    try:
        with io.open(CODA, encoding="utf-8", errors="replace") as f:
            for riga in f:
                riga = riga.strip()
                if not riga:
                    continue
                totali += 1
                try:
                    ts = json.loads(riga).get("ts") or json.loads(riga).get("timestamp")
                    if ts and datetime.fromisoformat(str(ts).replace("Z", "+00:00")).timestamp() > dopo:
                        nuove += 1
                except Exception:
                    pass
    except OSError:
        return 0, 0
    return nuove, totali


def main():
    ctx = {}
    if not sys.stdin.isatty():
        try:
            ctx = json.loads(sys.stdin.read() or "{}")
        except Exception:
            ctx = {}

    ora = datetime.now()
    dopo = ultimo_verbale()
    if dopo is None:
        dopo = (ora - timedelta(hours=12)).timestamp()   # prima esecuzione: guarda indietro 12h

    cambiati = file_cambiati(dopo)
    if not cambiati:
        return                                            # sessione senza scritture: niente verbale

    nuove, totali = voci_coda(dopo)
    finestra = datetime.fromtimestamp(dopo)

    righe = []
    righe.append("---")
    righe.append("type: verbale")
    righe.append("data: %s" % ora.strftime("%Y-%m-%d %H:%M"))
    righe.append("finestra-da: %s" % finestra.strftime("%Y-%m-%d %H:%M"))
    if ctx.get("session_id"):
        righe.append("sessione: %s" % ctx["session_id"])
    righe.append("generato-da: fine-sessione.py (hook Stop)")
    righe.append("---")
    righe.append("")
    righe.append("# Verbale — %s" % ora.strftime("%d/%m/%Y %H:%M"))
    righe.append("")
    righe.append("> Fatti, non interpretazione. Chi apre la prossima sessione legge qui")
    righe.append("> cosa e' successo davvero, e decide lui cosa significa.")
    righe.append("")
    righe.append("## Scritture (%d file dal %s)" % (len(cambiati), finestra.strftime("%d/%m %H:%M")))
    righe.append("")
    if len(cambiati) > MAX_ELENCO:
        per_cartella = {}
        for _m, rel in cambiati:
            per_cartella.setdefault(rel.split("/")[0], 0)
            per_cartella[rel.split("/")[0]] += 1
        for c, n in sorted(per_cartella.items(), key=lambda x: -x[1]):
            righe.append("- `%s/` — %d file" % (c, n))
        righe.append("")
        righe.append("I 15 piu' recenti:")
        for _m, rel in cambiati[:15]:
            righe.append("- `%s`" % rel)
    else:
        for m, rel in cambiati:
            righe.append("- `%s` (%s)" % (rel, datetime.fromtimestamp(m).strftime("%H:%M")))
    righe.append("")
    righe.append("## Coda di apprendimento")
    righe.append("")
    righe.append("- catture nuove in questa finestra: **%d**" % nuove)
    righe.append("- totale in coda, da processare: **%d**" % totali)
    if totali:
        righe.append("- da svuotare con `/riflessione`")
    righe.append("")
    righe.append("## Da interpretare (non lo fa questo script)")
    righe.append("")
    righe.append("- che cosa di queste scritture merita una voce in L3?")
    righe.append("- e' emerso qualcosa che vale una voce di diario?")
    righe.append("- e' rimasto qualcosa in sospeso che nessun file registra?")

    testo = "\n".join(righe) + "\n"
    if not os.path.isdir(VERBALI):
        os.makedirs(VERBALI)
    out = os.path.join(VERBALI, ora.strftime("%Y-%m-%d-%H%M") + ".md")
    with io.open(out, "w", encoding="utf-8") as f:
        f.write(testo)

    if "--prova" in sys.argv:
        sys.stdout.write(testo)
        sys.stdout.write("\n--> scritto in %s\n" % out)


if __name__ == "__main__":
    try:
        main()
    except Exception:
        pass                                              # mai bloccare la chiusura di sessione

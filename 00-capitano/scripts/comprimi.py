#!/usr/bin/env python3
"""
comprimi.py — compressore a modello leggero della navicella.

Apparato B (sistema nervoso), compressione. Nato adattando claude-remember
(Digital-Process-Tools): usa `claude -p --model haiku` (STESSO account, nessuna key
separata) per comprimere testo con un modello economico — il principio dell'apparato A
applicato: lavoro meccanico al modello leggero, non a Opus.

Due modalità:
  compressione  (default) — massima riduzione NON distruttiva: tiene tutti i fatti,
                 numeri, path, nomi; toglie articoli/riempitivi; stile appunti. Reversibile
                 nel senso: nessuna informazione persa, solo forma più densa.
  sintesi       — riassunto LOSSY per handoff di sessione: preserva decisioni, stato,
                 prossimi passi; scarta il resto. Per far ripartire leggera la sessione dopo.

Niente oblio: con --archivio salva l'originale PRIMA di sostituirlo.

Uso:
  echo "testo" | python comprimi.py [--modo compressione|sintesi] [--modello haiku]
  python comprimi.py --in FILE [--out FILE] [--archivio FILE] [--modo ...]

NB: cosa comprimere (memoria, sessioni) e' policy di Mnemosyne. Questo e' solo il motore.
"""
import sys
import os
import argparse
import subprocess
import shutil
from datetime import datetime

PROMPT_COMPRESSIONE = (
    "Comprimi il testo al massimo SENZA perdere informazione. Regole:\n"
    "- Tieni TUTTI i fatti, riferimenti, verbi, relazioni, numeri, date, path, nomi propri. Zero perdita.\n"
    "- Togli articoli, preposizioni ovvie, riempitivi, connettori di prosa.\n"
    "- Forma piu' corta che preserva lo stesso significato; stile appunti tecnici, non prosa.\n"
    "- Raggruppa voci sullo stesso soggetto in una sola. Punto e virgola per separare fatti.\n"
    "- Mantieni l'ordine cronologico se presente.\n"
    "Niente preamboli, niente commenti. Solo l'output compresso.\n\nTesto:\n"
)
PROMPT_SINTESI = (
    "Riassumi il testo come HANDOFF di sessione, in italiano, denso e breve. Preserva:\n"
    "- lo STATO attuale (cosa e' fatto, cosa e' in corso), le DECISIONI prese, i PROSSIMI passi,\n"
    "  i path/file toccati, i numeri e i nomi che servono a riprendere.\n"
    "Scarta il resto (ragionamenti intermedi, cortesie, ripetizioni).\n"
    "Niente preamboli. Solo il riassunto.\n\nTesto:\n"
)


def comprimi(testo: str, modo: str, modello: str, claude_path: str) -> str:
    # Tutto via STDIN: il wrapper .cmd di Windows tronca gli argomenti lunghi/multi-riga.
    prompt = (PROMPT_SINTESI if modo == "sintesi" else PROMPT_COMPRESSIONE) + testo
    try:
        r = subprocess.run(
            [claude_path, "-p", "--model", modello],
            input=prompt,
            capture_output=True, text=True, timeout=180, encoding="utf-8",
        )
    except FileNotFoundError:
        sys.exit("Errore: 'claude' CLI non trovato. Passa --claude col percorso, o mettilo su PATH.")
    except subprocess.TimeoutExpired:
        sys.exit("Errore: timeout della chiamata a claude.")
    if r.returncode != 0:
        sys.exit("Errore claude (rc=%d): %s" % (r.returncode, (r.stderr or "").strip()[:300]))
    return (r.stdout or "").strip()


def main():
    for stream in (sys.stdout, sys.stderr):
        try:
            stream.reconfigure(encoding="utf-8")
        except Exception:
            pass
    ap = argparse.ArgumentParser()
    ap.add_argument("--in", dest="inp", help="file di input (default: stdin)")
    ap.add_argument("--out", dest="out", help="file di output (default: stdout)")
    ap.add_argument("--archivio", help="salva l'originale qui prima di sostituire (niente oblio)")
    ap.add_argument("--modo", choices=["compressione", "sintesi"], default="compressione")
    ap.add_argument("--modello", default="haiku")
    ap.add_argument("--claude", dest="claude_path", default=None,
                    help="percorso di claude (default: auto — claude.cmd/claude su PATH o npm)")
    a = ap.parse_args()

    if not a.claude_path:
        cand = [shutil.which("claude.cmd"), shutil.which("claude"),
                os.path.expanduser("~/AppData/Roaming/npm/claude.cmd")]
        a.claude_path = next((c for c in cand if c and os.path.exists(c)), "claude")

    if a.inp:
        with open(a.inp, encoding="utf-8") as f:
            testo = f.read()
    else:
        testo = sys.stdin.read()
    if not testo.strip():
        sys.exit("Input vuoto.")

    if a.archivio and a.inp:
        os.makedirs(os.path.dirname(a.archivio) or ".", exist_ok=True)
        shutil.copy2(a.inp, a.archivio)

    out = comprimi(testo, a.modo, a.modello, a.claude_path)

    orig = len(testo)
    comp = len(out)
    ratio = (100 * comp / orig) if orig else 0
    sys.stderr.write("comprimi[%s/%s]: %d -> %d char (%.0f%%)\n" % (a.modo, a.modello, orig, comp, ratio))

    if a.out:
        with open(a.out, "w", encoding="utf-8") as f:
            f.write(out + "\n")
    else:
        print(out)


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""
promemoria-coda.py — hook SessionStart della navicella.

Se in coda-apprendimento.jsonl ci sono catture non ancora processate, stampa UNA
riga di promemoria (così Mnemosyne/Giuseppe le vedono a inizio sessione e la coda
non marcisce). Minimale di proposito: una riga sola, solo se c'è qualcosa.
Parte dell'apparato B (auto-apprendimento). Non blocca mai.
"""
import sys
from pathlib import Path

CODA = Path(__file__).resolve().parent.parent / "coda-apprendimento.jsonl"


def main() -> int:
    try:
        if not CODA.exists():
            return 0
        n = sum(1 for ln in CODA.read_text(encoding="utf-8").splitlines() if ln.strip())
        if n > 0:
            print(f"[navicella] {n} apprendimenti grezzi in coda "
                  f"(00-capitano/coda-apprendimento.jsonl) — Mnemosyne li processi con la riflessione di fine sessione.")
    except Exception as e:
        print(f"promemoria-coda: {e}", file=sys.stderr)
    return 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except Exception:
        sys.exit(0)

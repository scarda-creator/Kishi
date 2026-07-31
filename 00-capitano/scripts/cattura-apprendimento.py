#!/usr/bin/env python3
"""
cattura-apprendimento.py — hook UserPromptSubmit della navicella.

Apparato B (sistema nervoso), auto-apprendimento. Nato adattando claude-reflect
(BayramAnnakov) ai termini della navicella. Cattura AUTOMATICAMENTE le correzioni,
le preferenze durevoli e i marcatori "ricorda:" nei messaggi di Giuseppe, e li
accoda GREZZI in una coda di staging. NON scrive in memoria: l'interpretazione e la
promozione a L2-L5 restano di Mnemosyne (confine cementato: chi-è-Giuseppe è suo).

Contratto Claude Code: legge JSON da stdin con campo "prompt". Non blocca mai
(exit 0 su qualunque errore). Silenzioso di proposito (nessun stdout) per non
gonfiare il contesto a ogni turno — la coda è il record, Mnemosyne la sfoglia.

Coda: 00-capitano/coda-apprendimento.jsonl (append-only, una riga JSON per cattura).
"""
import sys
import os
import re
import json
from datetime import datetime, timezone
from pathlib import Path

CODA = Path(__file__).resolve().parent.parent / "coda-apprendimento.jsonl"
MAX_LEN = 500  # le correzioni vere sono corte; oltre, solo se c'è "ricorda"

# Pattern in ITALIANO. (regex, tipo, confidenza). Ordine = priorita' decrescente.
PATTERNS = [
    (r"\bricord(?:a|ati|iamoci)\b\s*[:,]", "esplicito", 0.95),
    (r"\b(?:no,|nope|sbagliat\w*|non\s+è\s+(?:così|giusto|corretto|vero)|ti\s+sbagli|"
     r"in\s+realtà|invece\b|correggi|non\s+(?:usare|fare|voglio|mi)|evita\b|"
     r"fermo\b|fermati\b|non\s+intendevo|hai\s+capito\s+male)\b", "correzione", 0.85),
    (r"\b(?:d['’]ora\s+in\s+(?:poi|avanti)|da\s+(?:adesso|ora)|ogni\s+volta|"
     r"per\s+il\s+futuro|in\s+futuro|d['’]ora\s+in\s+poi|sempre\s+che|"
     r"voglio\s+che\s+tu|preferisco\s+che|inscriviti|cementa)\b", "preferenza", 0.80),
    (r"\b(?:perfetto|esatto|ottimo|bravo|ben\s+fatto|mi\s+piace|così\s+va\s+bene|"
     r"giusto\s+così|proprio\s+così|sì\s+bravo)\b", "positivo", 0.70),
]


def includi(prompt: str) -> bool:
    p = prompt.strip()
    if not p:
        return False
    # scarta contenuto di sistema / tool / comandi
    if p.startswith("<") or p.startswith("/") or p.startswith("!"):
        return False
    low = p.lower()
    if "local-command" in low or "system-reminder" in low or "task-notification" in low:
        return False
    if len(p) > MAX_LEN and "ricord" not in low:
        return False
    return True


def rileva(prompt: str):
    low = prompt.lower()
    best = None
    for rgx, tipo, conf in PATTERNS:
        if re.search(rgx, low):
            if best is None or conf > best[1]:
                best = (tipo, conf, rgx)
    return best  # (tipo, confidenza, pattern) o None


def main() -> int:
    raw = sys.stdin.read()
    if not raw:
        return 0
    try:
        data = json.loads(raw)
    except Exception:
        return 0
    prompt = data.get("prompt") or data.get("message") or data.get("text")
    if not prompt or not isinstance(prompt, str):
        return 0
    if not includi(prompt):
        return 0
    hit = rileva(prompt)
    if not hit:
        return 0
    tipo, conf, pattern = hit
    item = {
        "ts": datetime.now(timezone.utc).astimezone().isoformat(timespec="seconds"),
        "tipo": tipo,
        "confidenza": conf,
        "pattern": pattern,
        "testo": prompt.strip()[:MAX_LEN],
    }
    try:
        CODA.parent.mkdir(parents=True, exist_ok=True)
        with open(CODA, "a", encoding="utf-8") as f:
            f.write(json.dumps(item, ensure_ascii=False) + "\n")
    except Exception as e:
        print(f"cattura-apprendimento: {e}", file=sys.stderr)
    return 0  # mai bloccare, nessun stdout


if __name__ == "__main__":
    try:
        sys.exit(main())
    except Exception as e:
        print(f"cattura-apprendimento errore: {e}", file=sys.stderr)
        sys.exit(0)

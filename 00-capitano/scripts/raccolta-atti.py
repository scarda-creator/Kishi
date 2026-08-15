#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""raccolta-atti.py — Dedalo, 2026-08-14

Perche' esiste. I quiz tracciano ogni risposta dal 31 luglio, ma
`02-accademico/esiti/` e' rimasta vuota per due settimane. Il difetto non era il
tracciamento: era la CONSEGNA. Il quiz gira in una pagina statica, non puo'
scrivere su disco, quindi offre un bottone che scarica un `.jsonl` nei Download —
e li' il file restava, perche' nessuno aveva detto a Giuseppe che andava spostato.
Un dato che esiste ma non arriva e' come un dato che non esiste: la navicella
giudicava la sua preparazione per sentito dire.

Cosa fa: pesca i `quiz-attempts-*.jsonl` dai posti dove un browser li lascia,
li deposita in `02-accademico/esiti/`, DEDUPLICA (rilanciarlo non raddoppia
niente: si puo' cliccare "esporta" ogni volta senza pensarci) e stampa il quadro
per pool. A Giuseppe resta un click solo.

Uso:
  python raccolta-atti.py            raccoglie e stampa il quadro
  python raccolta-atti.py --quadro   solo il quadro di cio' che e' gia' entrato
  python raccolta-atti.py --zitto    raccoglie; stampa solo se e' entrato qualcosa
                                     (forma adatta a un hook di avvio)
"""
import json
import os
import sys
from pathlib import Path

CASA = Path(__file__).resolve().parents[2]          # .../AgentsAI
ESITI = CASA / "02-accademico" / "esiti"
ARCHIVIO = ESITI / "atti.jsonl"                     # deposito unico, append-only

# Dove un browser lascia cadere un download su questa macchina.
CACCIA = [
    Path.home() / "Downloads",
    Path.home() / "Desktop",
    Path.home() / "Documents",
]
MODELLO = "quiz-attempts-*.jsonl"


def impronta(rec):
    """Identita' di un tentativo. Il timestamp da solo non basta (due risposte
    possono cadere nello stesso millisecondo su pool diversi), il record intero
    e' troppo (un campo aggiunto in futuro sdoppierebbe tutto lo storico)."""
    return (rec.get("ts"), rec.get("corso"), rec.get("pool"), rec.get("ui"), rec.get("si"))


def leggi_archivio():
    if not ARCHIVIO.exists():
        return [], set()
    righe, viste = [], set()
    with ARCHIVIO.open(encoding="utf-8") as f:
        for r in f:
            r = r.strip()
            if not r:
                continue
            try:
                rec = json.loads(r)
            except json.JSONDecodeError:
                continue
            righe.append(rec)
            viste.add(impronta(rec))
    return righe, viste


def raccogli():
    ESITI.mkdir(parents=True, exist_ok=True)
    _, viste = leggi_archivio()
    nuovi, sorgenti = [], []
    for dove in CACCIA:
        if not dove.is_dir():
            continue
        for f in sorted(dove.glob(MODELLO)):
            presi = 0
            try:
                with f.open(encoding="utf-8") as fh:
                    for r in fh:
                        r = r.strip()
                        if not r:
                            continue
                        try:
                            rec = json.loads(r)
                        except json.JSONDecodeError:
                            continue
                        imp = impronta(rec)
                        if imp in viste:
                            continue
                        viste.add(imp)
                        rec["_origine"] = f.name
                        nuovi.append(rec)
                        presi += 1
            except OSError as e:
                print("  ! non leggibile: %s (%s)" % (f.name, e))
                continue
            if presi:
                sorgenti.append((f.name, presi))
    if nuovi:
        with ARCHIVIO.open("a", encoding="utf-8") as out:
            for rec in nuovi:
                out.write(json.dumps(rec, ensure_ascii=False) + "\n")
    return nuovi, sorgenti


def quadro():
    righe, _ = leggi_archivio()
    if not righe:
        print("ATTI: nessun tentativo depositato.")
        print("      Nel quiz, in basso a destra, c'e' un bottone «esporta N risposte».")
        print("      Cliccalo a fine sessione: il resto lo fa questo script da solo.")
        return
    per_corso = {}
    for rec in righe:
        corso = (rec.get("corso") or "?").strip()
        pool = rec.get("pool") or "-"
        d = per_corso.setdefault(corso, {})
        v = d.setdefault(pool, {"n": 0, "ok": 0})
        v["n"] += 1
        # `esito` e' il campo della traccia; assente nelle lavagne (autovalutazione)
        if rec.get("esito") in (True, 1, "ok", "giusta"):
            v["ok"] += 1
    date = sorted(r.get("ts", "") for r in righe if r.get("ts"))
    print("ATTI: %d tentativi depositati" % len(righe), end="")
    if date:
        print("  (dal %s al %s)" % (date[0][:10], date[-1][:10]))
    else:
        print()
    for corso, pools in sorted(per_corso.items()):
        print("\n  %s" % corso[:70])
        for pool, v in sorted(pools.items(), key=lambda kv: -kv[1]["n"]):
            pct = (100.0 * v["ok"] / v["n"]) if v["n"] else 0.0
            barra = "%3d%%" % pct if v["ok"] else "   -"
            print("    %-16s %4d tentativi   %s" % (pool, v["n"], barra))


def main():
    argv = sys.argv[1:]
    # --da <cartella>: caccia anche altrove (se il browser scarica in un posto suo,
    # e per collaudare lo script senza sporcare i Download veri)
    if "--da" in argv:
        i = argv.index("--da")
        if i + 1 < len(argv):
            CACCIA.insert(0, Path(argv[i + 1]))
            del argv[i:i + 2]
    arg = argv[0] if argv else ""
    if arg == "--quadro":
        quadro()
        return
    nuovi, sorgenti = raccogli()
    if arg == "--zitto":
        if nuovi:
            print("ATTI: %d nuovi tentativi raccolti da %d file."
                  % (len(nuovi), len(sorgenti)))
        return
    if nuovi:
        print("Raccolti %d nuovi tentativi:" % len(nuovi))
        for nome, n in sorgenti:
            print("  + %-52s %4d" % (nome[:52], n))
        print()
    else:
        print("Nessun file nuovo da raccogliere.\n")
    quadro()


if __name__ == "__main__":
    main()

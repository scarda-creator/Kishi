#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""coda-notturna.py — Dedalo, 2026-08-16

Perche' esiste. Giuseppe vuole lasciare la macchina accesa tutta la notte a
produrre esercizi, e il limite di sessione uccide gli agenti a meta' lavoro (tre
volte fra il 13 e il 15 agosto). Ogni volta che e' successo, il lavoro perso non
era il testo: era **sapere a che punto eravamo**. Questa coda tiene quel punto
fuori dalla sessione, su disco.

Il principio, ed e' l'unica cosa che la rende diversa da una lista di cose da fare:
**la coda non ricorda, misura**. Ogni volta che la si interroga riconta le unita'
davvero presenti nei file e ricalcola cosa manca. Un lotto prodotto sparisce da
solo; un lotto perso torna da solo. Non esiste uno stato da tenere sincronizzato,
quindi non esiste uno stato che possa mentire — che e' il difetto che ho gia'
pagato tre volte con il registro dei procedimenti.

Ordine: per **frequenza d'esame**, non alfabetico. Se la notte non basta, quel che
resta indietro e' il tipo meno probabile.

Uso:
  python coda-notturna.py                 il quadro: quanto manca, per pool
  python coda-notturna.py --prossimo      il prossimo lotto da dispacciare (1 riga)
  python coda-notturna.py --json          tutta la coda in JSON
"""
import io
import json
import os
import re
import sys
from collections import Counter

CASA = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
PM = os.path.join(CASA, "02-accademico", "percorso-matematica")
FRAGS = os.path.join(CASA, "02-accademico", "corsi", "metodi-e-modelli",
                     "banca-esercizi", "frags")
# I frammenti di Analisi Vettoriale esistono dal 7-8 luglio; la prima stesura di
# questa coda li dava per assenti e contava le sole unita' montate nell'HTML.
# Effetto: un lotto appena scritto risultava inesistente finche' non veniva
# assemblato — cioe' la coda mentiva proprio nel momento in cui serve.
# (Mnemosyne, 2026-08-16)
FRAGS_AV = os.path.join(CASA, "02-accademico", "corsi", "analisi-vettoriale",
                        "banca-esercizi", "frags")
SOGLIA = 50
LOTTO = 20          # unita' per dispaccio: quanto un Demiurgo produce senza morire

# I pool, in ordine di FREQUENZA D'ESAME (prima quelli che escono sempre).
# La fonte e' la mappa degli esercizi di ciascun corso; dove la mappa non c'e'
# ancora, l'ordine e' quello di comparsa nei pool, che e' gia' per priorita'.
# Analisi Vettoriale davanti (Mnemosyne, 16-08): la ragione che metteva Metodi
# per primo era `edp` a zero, e la notte del 15 `edp` e' arrivato a 30. Restano le
# date, e dicono il contrario — AV il 4 settembre, e per giunta ripetizione di uno
# scritto non superato; Metodi il 9.
MATERIE = [
    {
        "nome": "analisi-vettoriale", "quando": "2026-09-04",
        "quiz": os.path.join(PM, "analisi-vettoriale", "Quiz_AnalisiVettoriale_v1.html"),
        "frag": FRAGS_AV,
        "ordine": ["edo", "curve", "superfici", "gauss", "stokes", "conserv",
                   "diff", "dini", "ottim", "serie"],
    },
    {
        "nome": "metodi", "quando": "2026-09-09",
        "quiz": os.path.join(PM, "metodi", "Quiz_MetodiModelli_v1.html"),
        "frag": FRAGS,
        # edp per primo: e' l'esercizio 4 negli ULTIMI SEI APPELLI su sei, e sta a zero
        "ordine": ["edp", "fourier", "integrali", "laurent", "polidrome", "matrici",
                   "spettro", "green", "greendelta"],
    },
]
# Falsi positivi: nel commento che documenta lo schema c'e' un'unita' d'esempio.
FANTASMI = {"slug", "esempio"}


def conta_unita(materia):
    """Conta le unita' per pool: prima nei frammenti sorgente, poi nel quiz montato.
    Il massimo fra i due e' la verita' — un frammento appena scritto non e' ancora
    montato, e un pool montato tempo fa puo' non avere piu' il frammento."""
    tot = Counter()
    if materia["frag"] and os.path.isdir(materia["frag"]):
        for f in os.listdir(materia["frag"]):
            if not f.endswith(".js"):
                continue
            testo = io.open(os.path.join(materia["frag"], f), encoding="utf-8",
                            errors="replace").read()
            n = len(re.findall(r"[\"']?pool[\"']?\s*:\s*[\"'](\w+)[\"']", testo))
            tot[f[:-3]] = max(tot[f[:-3]], n)
    if os.path.isfile(materia["quiz"]):
        testo = io.open(materia["quiz"], encoding="utf-8", errors="replace").read()
        for slug, n in Counter(re.findall(
                r"[\"']?pool[\"']?\s*:\s*[\"'](\w+)[\"']", testo)).items():
            if slug not in FANTASMI:
                tot[slug] = max(tot[slug], n)
    return tot


def coda():
    fuori = []
    for m in MATERIE:
        n = conta_unita(m)
        for pool in m["ordine"]:
            ho = n.get(pool, 0)
            manca = max(0, SOGLIA - ho)
            if not manca:
                continue
            fuori.append({
                "materia": m["nome"], "quando": m["quando"], "pool": pool,
                "ho": ho, "manca": manca,
                "lotto": min(LOTTO, manca),
                "file": (os.path.join(m["frag"], pool + ".js") if m["frag"]
                         else m["quiz"]),
            })
    return fuori


def stazionamento():
    """I lotti scritti ma non ancora innestati.

    Il buco che questa coda aveva: misura i frammenti, quindi un lotto consegnato
    da un Demiurgo e non ancora cucito nel frammento **non esiste** per lei. E'
    precisamente lo stato in cui il limite di sessione ci ha colti tre volte fra
    il 13 e il 15 agosto — il lavoro c'era, su disco, e chi riprendeva non lo
    vedeva e lo rifaceva. Anche qui non si ricorda: si guarda la cartella.
    (Dedalo, 16-08)"""
    d = os.path.join(CASA, "00-capitano", "lotti")
    if not os.path.isdir(d):
        return []
    fuori = []
    for f in sorted(os.listdir(d)):
        if not f.endswith(".js"):
            continue
        testo = io.open(os.path.join(d, f), encoding="utf-8", errors="replace").read()
        n = len(re.findall(r"[\"']?pool[\"']?\s*:\s*[\"'](\w+)[\"']", testo))
        chiuso = testo.rstrip().endswith("];")
        fuori.append({"file": f, "unita": n, "completo": chiuso})
    return fuori


def diagnosi():
    """La diagnosi dei procedimenti (mandato di Giuseppe, 16-08) e' un lavoro di
    Rapsodo che sta nella stessa coda: dura piu' di una sessione e va ripreso dove
    si e' fermato. Anche qui non si ricorda, si misura — leggendo quali famiglie il
    paper ha gia' coperto invece di fidarsi di un flag."""
    paper = os.path.join(CASA, "00-capitano", "diagnosi-procedimenti-2026-08-16.md")
    stato = os.path.join(CASA, "00-capitano", "diagnosi-stato.md")
    if not os.path.isfile(paper):
        return {"stato": "non iniziata", "fatte": [], "restano": FAMIGLIE,
                "paper": paper, "nota": stato}
    testo = io.open(paper, encoding="utf-8", errors="replace").read().lower()
    fatte = [f for f in FAMIGLIE if f["chiave"] in testo]
    restano = [f for f in FAMIGLIE if f not in fatte]
    return {"stato": "in corso" if restano else "completa",
            "fatte": fatte, "restano": restano, "paper": paper, "nota": stato,
            "righe": testo.count("\n")}


# Le famiglie che il paper deve coprire (mandato ampliato del 16-08: analisi TOTALE,
# non solo cio' che ha un nome nel registro). `chiave` e' una parola che compare di
# sicuro nella sezione, e serve solo a capire se quella parte e' gia' stata scritta.
FAMIGLIE = [
    {"nome": "agenti (tutti e otto)", "chiave": "ierofante"},
    {"nome": "architettura v2 e memoria a 5 livelli", "chiave": "cinque livelli"},
    {"nome": "materiali di studio (quiz, nuclei, lavagne, dispense)", "chiave": "nuclei"},
    {"nome": "apparati e infrastrutture (plancia, anima, indice, Temi, Kishi)", "chiave": "plancia"},
    {"nome": "modulo Business", "chiave": "ermete"},
    {"nome": "patti e protocolli", "chiave": "autonomia esecutiva"},
    {"nome": "abbandonati e superati (v1, C.N.A.C., Oroboro, Coeo)", "chiave": "oroboro"},
    {"nome": "documenti di visione e ricerche", "chiave": "titanogenesi"},
    {"nome": "procedimenti del registro", "chiave": "registro dei procedimenti"},
    {"nome": "pattern trasversali", "chiave": "pattern trasversal"},
]


def main():
    d = diagnosi()
    if "--diagnosi" in sys.argv:
        print("DIAGNOSI: %s" % d["stato"])
        if d["stato"] != "non iniziata":
            print("  paper: %s (%d righe)" % (d["paper"], d.get("righe", 0)))
        for f in d["fatte"]:
            print("   fatta   %s" % f["nome"])
        for f in d["restano"]:
            print("   RESTA   %s" % f["nome"])
        print("  stato scritto da chi lavora: %s" % d["nota"])
        return
    c = coda()
    if "--json" in sys.argv:
        print(json.dumps(c, ensure_ascii=False, indent=1))
        return
    if "--prossimo" in sys.argv:
        if not c:
            print("CODA VUOTA: ogni pool ha raggiunto la soglia di %d." % SOGLIA)
            return
        p = c[0]
        print("%s | pool %s | ne ha %d, ne mancano %d | lotto da %d | %s"
              % (p["materia"], p["pool"], p["ho"], p["manca"], p["lotto"], p["file"]))
        return
    if not c:
        print("CODA VUOTA: ogni pool ha raggiunto la soglia di %d." % SOGLIA)
        return
    per_materia = {}
    for p in c:
        per_materia.setdefault((p["materia"], p["quando"]), []).append(p)
    tot = 0
    for (mat, quando), righe in per_materia.items():
        somma = sum(r["manca"] for r in righe)
        tot += somma
        print("\n=== %s (scritto %s) — mancano %d unita'" % (mat, quando, somma))
        for r in righe:
            print("   %-12s ha %2d   mancano %2d   %s"
                  % (r["pool"], r["ho"], r["manca"], "<-- prossimo" if r is c[0] else ""))
    print("\nTOTALE DA PRODURRE: %d unita' — circa %d dispacci da %d."
          % (tot, (tot + LOTTO - 1) // LOTTO, LOTTO))
    s = stazionamento()
    if s:
        print("\n--- IN STAZIONAMENTO: scritti, non ancora innestati ---")
        for x in s:
            print("   %-42s %2d unita'%s" % (x["file"], x["unita"],
                  "" if x["completo"] else "   [INCOMPLETO: manca la chiusura ];]"))
        print("   innesta con: node 00-capitano/scripts/lotto_innesta.js <frag> 00-capitano/lotti/<file>")
    print("\n--- e nella stessa coda, in parallelo (custode Rapsodo, non Demiurgo) ---")
    print("diagnosi dei procedimenti: %s — %d famiglie su %d coperte"
          % (d["stato"], len(d["fatte"]), len(FAMIGLIE)))
    if d["restano"]:
        print("   prima che resta: %s" % d["restano"][0]["nome"])
    print("   dettaglio con --diagnosi")


if __name__ == "__main__":
    main()

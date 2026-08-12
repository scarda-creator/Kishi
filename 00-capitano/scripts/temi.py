#!/usr/bin/env python
"""temi.py - il motore della libreria delle fonti. Dedalo, 2026-08-12.

Perche' esiste: la schiusura delle 44 fonti si arenava a ogni giro perche' mancava
la casa. Una fonte data, letta una volta e finita in un documento di ricerca non e'
archiviata: e' persa, perche' nessuno puo' interrogarla. Temi e' quel posto.

Il catalogo (00-capitano/temi/catalogo-fonti.md) e' DATO; questo script e' il suo
interprete - stessa divisione del registro dei procedimenti. Il file non contiene
codice e il codice non contiene la lista.

Uso:
  temi.py --cerca "spin ETH"       cosa ho gia' su questo tema (prima di ricostruire)
  temi.py --aggiungi <url> [--verdetto v] [--apparato X] [--tag a,b] [--nota "..."]
  temi.py --elenco [--verdetto differita] [--apparato D]
  temi.py --stato                  conteggio per verdetto e per apparato
  temi.py --coda                   le differite e le influenti: la promessa da mantenere

Regola di Strict Pruning: quando una fonte entra e' `da-potare`. Diventa `usata` solo
quando qualcosa di suo e' stato ADATTATO in codice nostro - mai per averla clonata.
"""
import io
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
NAV = os.path.abspath(os.path.join(HERE, "..", ".."))
CATALOGO = os.path.join(NAV, "00-capitano", "temi", "catalogo-fonti.md")

VERDETTI = ("usata", "influente", "differita", "marginale", "da-potare")
CAMPI = ("nome", "url", "verdetto", "apparato", "tag", "nota")


def leggi():
    if not os.path.exists(CATALOGO):
        sys.exit("catalogo assente: %s" % CATALOGO)
    with io.open(CATALOGO, encoding="utf-8", errors="replace") as f:
        testo = f.read()
    blocco = re.search(r"```dati\r?\n(.*?)```", testo, re.S)
    if not blocco:
        sys.exit("catalogo senza blocco ```dati")
    fonti = []
    for riga in blocco.group(1).splitlines():
        riga = riga.strip()
        if not riga or riga.startswith("#"):
            continue
        campi = [c.strip() for c in riga.split("|")]
        if len(campi) < 6:
            continue
        fonti.append(dict(zip(CAMPI, campi[:6])))
    return testo, fonti


def scrivi(testo, riga_nuova):
    """Inserisce in coda al blocco dati, senza toccare il resto del documento."""
    def sostituisci(m):
        return "```dati\n" + m.group(1).rstrip("\n") + "\n" + riga_nuova + "\n```"
    nuovo = re.sub(r"```dati\r?\n(.*?)```", sostituisci, testo, count=1, flags=re.S)
    with io.open(CATALOGO, "w", encoding="utf-8") as f:
        f.write(nuovo)


def arg(nome, default=None):
    if nome in sys.argv:
        i = sys.argv.index(nome)
        if i + 1 < len(sys.argv):
            return sys.argv[i + 1]
    return default


def mostra(f, largo=False):
    testa = "%-46s %-10s %-2s" % (f["nome"][:46], f["verdetto"], f["apparato"])
    if largo:
        return testa + "\n    " + f["nota"] + "\n    tag: " + f["tag"] + "  " + f["url"]
    return testa + "  " + f["nota"][:60]


def cmd_cerca(fonti, query):
    """Cerca in nome, tag e nota. Ordina per numero di termini trovati: una fonte
    che risponde a due parole della domanda vale piu' di una che ne risponde a una."""
    termini = [t.lower() for t in re.split(r"[\s,]+", query) if len(t) > 1]
    esiti = []
    for f in fonti:
        testo = (f["nome"] + " " + f["tag"] + " " + f["nota"]).lower()
        punti = sum(1 for t in termini if t in testo)
        if punti:
            esiti.append((punti, f))
    if not esiti:
        print("nessuna fonte per: %s" % query)
        print("(se e' un buco vero, e' materia dell'Argonauta: cercare fuori)")
        return
    esiti.sort(key=lambda e: -e[0])
    print("%d fonti per «%s» - dal piu' pertinente:\n" % (len(esiti), query))
    for punti, f in esiti:
        print(mostra(f, largo=True))
        print()


def cmd_aggiungi(testo, fonti, url):
    nome = re.sub(r"^https?://(www\.)?github\.com/", "", url.rstrip("/"))
    for f in fonti:
        if f["url"] == url or f["nome"] == nome:
            print("gia' in catalogo: %s [%s]" % (f["nome"], f["verdetto"]))
            print("  %s" % f["nota"])
            return
    riga = " | ".join([
        nome,
        url,
        arg("--verdetto", "da-potare"),
        arg("--apparato", "-"),
        arg("--tag", "da-classificare"),
        arg("--nota", "entrata il giorno in cui Giuseppe l'ha data; da potare"),
    ])
    scrivi(testo, riga)
    print("aggiunta: %s" % nome)
    print("  verdetto: %s   (diventa `usata` solo quando qualcosa di suo e' adattato in codice nostro)"
          % arg("--verdetto", "da-potare"))


def cmd_elenco(fonti):
    v, a = arg("--verdetto"), arg("--apparato")
    sel = [f for f in fonti
           if (not v or f["verdetto"] == v) and (not a or f["apparato"] == a)]
    for f in sorted(sel, key=lambda f: (f["verdetto"], f["apparato"], f["nome"])):
        print(mostra(f))
    print("\n%d fonti" % len(sel))


def cmd_stato(fonti):
    per_v, per_a = {}, {}
    for f in fonti:
        per_v[f["verdetto"]] = per_v.get(f["verdetto"], 0) + 1
        per_a[f["apparato"]] = per_a.get(f["apparato"], 0) + 1
    print("Temi - %d fonti in catalogo\n" % len(fonti))
    for v in VERDETTI:
        if per_v.get(v):
            print("  %-10s %3d" % (v, per_v[v]))
    print("\n  per apparato: " + "  ".join("%s=%d" % (k, per_a[k]) for k in sorted(per_a)))
    coda = per_v.get("differita", 0) + per_v.get("influente", 0) + per_v.get("da-potare", 0)
    print("\n  in coda (differite + influenti + da potare): %d" % coda)
    print("  e' la promessa da mantenere: `temi.py --coda` per vederla in faccia.")


def cmd_coda(fonti):
    """Il controllo scomodo: cio' che e' stato messo 'per dopo'. Parcheggiare e'
    legittimo, ma e' anche il travestimento con cui una buona idea muore."""
    coda = [f for f in fonti if f["verdetto"] in ("differita", "influente", "da-potare")]
    for ap in sorted(set(f["apparato"] for f in coda)):
        gruppo = [f for f in coda if f["apparato"] == ap]
        print("\n[apparato %s] %d fonti" % (ap, len(gruppo)))
        for f in sorted(gruppo, key=lambda f: f["nome"]):
            print("  %-44s %-10s %s" % (f["nome"][:44], f["verdetto"], f["nota"][:52]))
    print("\n%d fonti aspettano. Una coda che nessuno guarda e' un cimitero." % len(coda))


def main():
    testo, fonti = leggi()
    if "--cerca" in sys.argv:
        cmd_cerca(fonti, arg("--cerca", ""))
    elif "--aggiungi" in sys.argv:
        cmd_aggiungi(testo, fonti, arg("--aggiungi", ""))
    elif "--elenco" in sys.argv:
        cmd_elenco(fonti)
    elif "--coda" in sys.argv:
        cmd_coda(fonti)
    else:
        cmd_stato(fonti)


if __name__ == "__main__":
    main()

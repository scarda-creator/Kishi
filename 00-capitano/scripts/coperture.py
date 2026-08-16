#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""coperture.py — che cosa un pool copre GIA', in forma compatta.

Perche' esiste (Mnemosyne, 2026-08-16). Un Demiurgo che deve aggiungere venti
unita' a un pool deve sapere due cose: quali esercizi ci sono gia' (per non
ripeterli) e con che taglio sono scritti. Farglielo scoprire leggendo il
frammento costa 40k token di sola lettura, ogni volta, per ogni pool.

Questo script estrae la sola cosa che serve — provenienza (`src`) e apertura di
ogni unita' — e la scrive in un indice che entra in un brief. Non interpreta:
legge il file e riporta.

Uso:
  python coperture.py                     tutti i pool delle due materie
  python coperture.py <pool> [<pool>...]  solo quelli chiesti (a schermo)
  python coperture.py --scrivi            rigenera 00-capitano/dedalo/coperture-attuali.md
"""
import io
import os
import re
import sys

CASA = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
FRAGS = {
    "metodi": os.path.join(CASA, "02-accademico", "corsi", "metodi-e-modelli",
                           "banca-esercizi", "frags"),
    "analisi-vettoriale": os.path.join(CASA, "02-accademico", "corsi",
                                       "analisi-vettoriale", "banca-esercizi", "frags"),
}
USCITA = os.path.join(CASA, "00-capitano", "dedalo", "coperture-attuali.md")
# Un file per pool, oltre all'indice unico: un Demiurgo che lavora su `edo` non
# deve pagare 68 KB per leggere anche i diciannove pool che non lo riguardano.
USCITA_DIR = os.path.join(CASA, "00-capitano", "dedalo", "coperture")

# Un'unita' comincia con `{ pool:"..."`. Da li' fino alla prossima, si prendono
# il src e il primo testo di domanda.
#
# Le chiavi vanno accettate ANCHE fra virgolette. Meta' dei frammenti di Analisi
# Vettoriale (`diff`, `dini`, `ottim`) sono in forma JSON — `"pool": "diff"` —
# perche' passati da un round-trip di assemblaggio. La prima stesura di questo
# script pretendeva la chiave nuda e su quei tre file dichiarava `0 unita'`
# invece di fallire: 91 unita' esistenti date per assenti, nel file che un
# Demiurgo legge proprio per sapere cosa NON riscrivere. (Dedalo, 16-08)
RE_UNITA = re.compile(r'\{\s*["\']?pool["\']?\s*:\s*["\'](\w+)["\']', re.S)
RE_SRC = re.compile(r'["\']?src["\']?\s*:\s*["\']([^"\']*)["\']')
RE_T = re.compile(r'(?:"t"|\'t\'|\bt)\s*:\s*"((?:[^"\\]|\\.)*)"')


def pulisci(s, n=110):
    s = re.sub(r'&[a-zA-Z]+;', '', s)
    s = re.sub(r'\\\\', '\\\\', s)
    s = re.sub(r'\s+', ' ', s).strip()
    return s[:n] + ("..." if len(s) > n else "")


class NonSoLeggere(Exception):
    """Il frammento ha corpo ma non se ne ricava un'unita'.

    Esiste perche' il modo in cui questo script ha gia' sbagliato una volta e'
    stato dichiarare `0 unita'` su file da 30 KB. Un pool davvero vuoto e un
    pool che non so leggere devono avere due esiti diversi, altrimenti la misura
    e' peggio dell'assenza di misura: e' un'asserzione falsa che qualcuno usa.
    """


def leggi(percorso):
    testo = io.open(percorso, encoding="utf-8", errors="replace").read()
    tagli = [m.start() for m in RE_UNITA.finditer(testo)] + [len(testo)]
    if len(tagli) == 1 and len(testo) > 2000:
        raise NonSoLeggere(
            "%s: %d byte e nessuna unita' riconosciuta. La forma del file non e' "
            "quella che questo script sa leggere — NON e' un pool vuoto."
            % (os.path.basename(percorso), len(testo)))
    fuori = []
    for i in range(len(tagli) - 1):
        blocco = testo[tagli[i]:tagli[i + 1]]
        src = RE_SRC.search(blocco)
        t = RE_T.search(blocco)
        passi = len(RE_T.findall(blocco))
        fuori.append({
            "src": src.group(1) if src else "(senza src)",
            "apre": pulisci(t.group(1)) if t else "(senza testo)",
            "passi": passi,
        })
    return fuori


def righe_pool(materia, pool):
    percorso = os.path.join(FRAGS[materia], pool + ".js")
    if not os.path.isfile(percorso):
        return ["  (nessun frammento su disco)"]
    try:
        u = leggi(percorso)
    except NonSoLeggere as e:
        # Rumoroso e fatale, di proposito: un indice sbagliato manda un Demiurgo
        # a riscrivere unita' esistenti, e costa piu' di non averlo affatto.
        sys.stderr.write("ERRORE DI LETTURA — %s\n" % e)
        sys.exit(1)
    out = ["  %d unita', %d passi totali" % (len(u), sum(x["passi"] for x in u))]
    for i, x in enumerate(u, 1):
        out.append("  %2d. [%s] (%d passi) %s" % (i, x["src"], x["passi"], x["apre"]))
    return out


def main():
    scrivi = "--scrivi" in sys.argv
    chiesti = [a for a in sys.argv[1:] if not a.startswith("--")]
    blocchi = []
    for materia, dirf in FRAGS.items():
        if not os.path.isdir(dirf):
            continue
        for f in sorted(os.listdir(dirf)):
            if not f.endswith(".js"):
                continue
            pool = f[:-3]
            if chiesti and pool not in chiesti:
                continue
            corpo = "### %s / %s\n" % (materia, pool) + "\n".join(righe_pool(materia, pool))
            blocchi.append(corpo)
            if scrivi:
                if not os.path.isdir(USCITA_DIR):
                    os.makedirs(USCITA_DIR)
                io.open(os.path.join(USCITA_DIR, "%s-%s.md" % (materia, pool)),
                        "w", encoding="utf-8").write(
                    "# Cosa copre gia' il pool `%s` (%s)\n\n"
                    "Misura generata da `coperture.py`. Serve a NON riscrivere cio' che c'e'.\n"
                    "Ogni riga: numero, provenienza, quanti passi, apertura della prima domanda.\n\n"
                    % (pool, materia) + corpo + "\n")
    testo = "\n\n".join(blocchi)
    if scrivi:
        io.open(USCITA, "w", encoding="utf-8").write(
            "---\ntype: spec\nautore: Mnemosyne (generato da coperture.py)\n"
            "data: 2026-08-16\noggetto: cosa ogni pool copre gia', per non farlo riscoprire a ogni dispaccio\n---\n\n"
            "# Coperture attuali\n\nRigenerare con `python 00-capitano/scripts/coperture.py --scrivi`.\n"
            "Non modificare a mano: e' una misura, non un documento.\n\n" + testo + "\n")
        print("scritto: %s (%d caratteri)" % (USCITA, len(testo)))
    else:
        print(testo)


if __name__ == "__main__":
    main()

#!/usr/bin/env python
"""stato-studente.py — il modello vivo di dove sta Giuseppe, non di cosa abbiamo costruito.

Accensione, 2026-08-02. Il difetto piu' grave trovato dall'audit non e' un procedimento
rotto: e' che la navicella ha un modello dettagliato del proprio lavoro e nessun modello
della vita di Giuseppe. Non sapeva che avesse bocciato Analisi Vettoriale il 17/7, benche'
ne avessero parlato in piu' conversazioni; non conosceva una sola data d'esame; e ha creduto
che avesse finito il percorso-matematica perche' i file esistevano.

REGOLA FONDATIVA, dalla correzione di Giuseppe del 2026-08-02:
**si impara dagli ATTI, mai dalle PRESENZE.**
Una risposta data a una domanda e' un atto. Un file che esiste non lo e'. Un pool aperto non
e' un pool fatto. Ogni volta che questo script riporta un numero, deve poter dire da quale
atto viene — e dove ha solo una presenza, lo dichiara come tale invece di contarla.

Sorgenti:
  - `02-accademico/calendario-esami.md`  (date e esiti: dichiarati da Giuseppe = atti)
  - `02-accademico/esiti/*.jsonl`        (tentativi esportati dai quiz = atti)
  - il disco                              (materiale disponibile = PRESENZA, mai studio)

Uso:
  python stato-studente.py            # riga breve per SessionStart
  python stato-studente.py --scrivi   # rigenera 02-accademico/stato-studente.md
  python stato-studente.py --umano    # stampa il rapporto
"""
import io
import json
import os
import re
import sys
from datetime import date, datetime

HERE = os.path.dirname(os.path.abspath(__file__))
NAV = os.path.abspath(os.path.join(HERE, "..", ".."))
ACC = os.path.join(NAV, "02-accademico")
CAL = os.path.join(ACC, "calendario-esami.md")
ESITI = os.path.join(ACC, "esiti")
FUORI = os.path.join(ACC, "stato-studente.md")

OGGI = date.today()


def leggi(p):
    try:
        return io.open(p, encoding="utf-8").read()
    except OSError:
        return ""


def righe_tabella(testo, colonne_attese):
    """Estrae le righe di ogni tabella markdown con il numero di colonne atteso."""
    out = []
    for r in testo.splitlines():
        r = r.strip()
        if not r.startswith("|") or set(r) <= set("|-: "):
            continue
        celle = [c.strip() for c in r.strip("|").split("|")]
        if len(celle) == colonne_attese and celle[0].lower() not in ("data",):
            out.append(celle)
    return out


def calendario():
    """(futuri, passati) — entrambi ATTI: dichiarati da Giuseppe."""
    t = leggi(CAL)
    futuri, passati = [], []
    for c in righe_tabella(t, 5):
        try:
            d = datetime.strptime(c[0], "%Y-%m-%d").date()
        except ValueError:
            continue
        voce = {"data": d, "corso": c[1], "prova": c[2], "campo4": c[3], "note": c[4]}
        # la tabella dei precedenti ha "esito" al posto di "stato"
        if d < OGGI or c[3].lower() in ("superato", "non superato"):
            voce["esito"] = c[3]
            passati.append(voce)
        else:
            voce["stato"] = c[3]
            futuri.append(voce)
    futuri.sort(key=lambda v: v["data"])
    passati.sort(key=lambda v: v["data"], reverse=True)
    return futuri, passati


def tentativi():
    """Atti veri: ogni record e' una risposta data. Aggregati per corso e pool."""
    per_corso = {}
    if not os.path.isdir(ESITI):
        return per_corso
    for fn in os.listdir(ESITI):
        if not fn.endswith(".jsonl"):
            continue
        for riga in leggi(os.path.join(ESITI, fn)).splitlines():
            riga = riga.strip()
            if not riga:
                continue
            try:
                r = json.loads(riga)
            except ValueError:
                continue
            corso = (r.get("corso") or "?").strip()
            pool = r.get("pool") or "?"
            d = per_corso.setdefault(corso, {})
            p = d.setdefault(pool, {"tentativi": 0, "primi": 0, "primi_ok": 0})
            p["tentativi"] += 1
            if r.get("primo"):
                p["primi"] += 1
                if r.get("esito"):
                    p["primi_ok"] += 1
    return per_corso


def _domande_nel_quiz(percorso):
    """(pool, domande) leggendo il montato.

    In giro ci sono due motori: quello a frammenti (`var POOLS = [...]` + unita' JSON con
    `"pool"` e `"opts"`, usato da Geometria/AV/Metodi) e quello dell'orale di Meccanica
    (`POOLS = {chiave: {...status:"full"}}` con domande `q:"..."`). Si contano entrambi e si
    prende il massimo, invece di privilegiare un motore e dare zero sull'altro: un contatore
    che va a zero quando cambia la forma del file e' peggio di nessun contatore, perche' lo
    zero sembra un'assenza reale.

    Se il file c'e' ma non si riesce a leggerlo si torna (0, 0), e si vede.
    """
    t = leggi(percorso)
    if not t:
        return 0, 0
    # i template portano un blocco di istruzioni per il Demiurgo con un'unita' di esempio:
    # contarla gonfia il totale e lo fa divergere da quello di quiz_verifica.js
    t = re.sub(r"<!--.*?-->", "", t, flags=re.S)
    t = re.sub(r"/\*.*?\*/", "", t, flags=re.S)
    pool = max(
        len(set(re.findall(r'"?pool"?\s*:\s*"([^"]+)"', t))),
        len(re.findall(r'"?status"?\s*:\s*"', t)),
    )
    dom = max(
        len(re.findall(r'"?opts"?\s*:', t)),
        len(re.findall(r'\bq\s*:\s*"', t)),
    )
    return pool, dom


def quiz_montati(slug_corsi):
    """I quiz montati NON stanno piu' dentro la cartella del corso.

    Dal 2026-08-12 vivono nel percorso unico, che e' l'unico accesso di Giuseppe
    (`02-accademico/percorso-matematica/<cartella>/Quiz_*.html`); la cartella del corso
    tiene solo le sorgenti. Vedi `corsi/metodi-e-modelli/03-note-mie/DOVE-VIVE-IL-QUIZ.md`.

    Un contatore che guarda dove le cose non stanno piu' non e' un contatore: e' una
    presenza mancata scambiata per assenza. Il 15/08 questo ha fatto risultare Metodi e
    Modelli il corso piu' scoperto della sessione mentre era il secondo piu' coperto.

    Le cartelle del percorso non ripetono lo slug del corso (`metodi` per
    `metodi-e-modelli`): si accoppia per prefisso, sul match piu' lungo, senza tabella di
    alias da tenere aggiornata a mano.
    """
    out = {}
    base = os.path.join(ACC, "percorso-matematica")
    if not os.path.isdir(base):
        return out
    for cartella in sorted(os.listdir(base)):
        d = os.path.join(base, cartella)
        if not os.path.isdir(d) or cartella.startswith(("_", ".")):
            continue
        quiz = sorted(f for f in os.listdir(d)
                      if f.startswith("Quiz_") and f.endswith(".html"))
        if not quiz:
            continue
        cand = [c for c in slug_corsi if c == cartella
                or c.startswith(cartella) or cartella.startswith(c)]
        corso = max(cand, key=len) if cand else cartella
        v = out.setdefault(corso, {"quiz": 0, "pool": 0, "domande": 0, "dove": []})
        for f in quiz:
            p, dm = _domande_nel_quiz(os.path.join(d, f))
            v["quiz"] += 1
            v["pool"] += p
            v["domande"] += dm
            v["dove"].append("percorso-matematica/%s/%s" % (cartella, f))
    return out


def materiale():
    """PRESENZE, non atti. Riportato separatamente e mai contato come studio."""
    out = {}
    corsi = os.path.join(ACC, "corsi")
    if not os.path.isdir(corsi):
        return out
    slug = [c for c in sorted(os.listdir(corsi))
            if os.path.isdir(os.path.join(corsi, c)) and not c.startswith("_")]
    montati = quiz_montati(slug)
    for c in slug:
        base = os.path.join(corsi, c)
        n = 0
        quiz = dict(montati.get(c, {"quiz": 0, "pool": 0, "domande": 0, "dove": []}))
        for root, dirs, files in os.walk(base):
            dirs[:] = [d for d in dirs if d not in ("_txt", "__pycache__")]
            for f in files:
                n += 1
                # residui non ancora migrati nel percorso: si contano, ma si dice dove sono
                if f.startswith("Quiz_") and f.endswith(".html"):
                    p, dm = _domande_nel_quiz(os.path.join(root, f))
                    quiz["quiz"] += 1
                    quiz["pool"] += p
                    quiz["domande"] += dm
                    quiz["dove"].append(os.path.relpath(os.path.join(root, f), ACC)
                                        .replace("\\", "/"))
        out[c] = {"file": n, "quiz": quiz["quiz"], "pool": quiz["pool"],
                  "domande": quiz["domande"], "dove": quiz["dove"]}
    return out


def rapporto():
    futuri, passati = calendario()
    att = tentativi()
    mat = materiale()
    R = []

    R.append("---")
    R.append("type: stato")
    R.append("accensione: hook")
    R.append("aggiornato: %s" % OGGI.isoformat())
    R.append("generato-da: 00-capitano/scripts/stato-studente.py")
    R.append("---")
    R.append("")
    R.append("# Dove sta Giuseppe")
    R.append("")
    R.append("> Rigenerato automaticamente. **Si impara dagli atti, mai dalle presenze**: "
             "gli esami e le risposte ai quiz sono atti; i file su disco no, e sono "
             "riportati a parte come materiale disponibile.")
    R.append("")

    R.append("## Prossimi esami")
    R.append("")
    if not futuri:
        R.append("Nessun esame in calendario. Se non è vero, il calendario è vecchio: "
                 "`02-accademico/calendario-esami.md`.")
    else:
        R.append("| giorni | data | corso | prova | note |")
        R.append("|---:|---|---|---|---|")
        for v in futuri:
            g = (v["data"] - OGGI).days
            R.append("| **%d** | %s | %s | %s | %s |"
                     % (g, v["data"].isoformat(), v["corso"], v["prova"], v["note"]))
        R.append("")
        primo = futuri[0]
        g = (primo["data"] - OGGI).days
        R.append("Il prossimo è **%s** fra **%d giorni**." % (primo["corso"], g))
        if len(futuri) > 1:
            arco = (futuri[-1]["data"] - futuri[0]["data"]).days
            R.append("Tutti e %d stanno in **%d giorni**." % (len(futuri), arco))
    R.append("")

    if passati:
        R.append("## Precedenti")
        R.append("")
        R.append("| data | corso | esito | causa dichiarata |")
        R.append("|---|---|---|---|")
        for v in passati:
            R.append("| %s | %s | **%s** | %s |"
                     % (v["data"].isoformat(), v["corso"], v.get("esito", "?"), v["note"]))
        R.append("")

    R.append("## Prove raccolte — gli atti")
    R.append("")
    if not att:
        R.append("**Nessuna.** I quiz tracciano le risposte dal 31 luglio, ma nessun file di "
                 "tentativi è ancora arrivato in `02-accademico/esiti/`.")
        R.append("")
        R.append("Finché questa sezione resta vuota, ogni giudizio su dove Giuseppe è debole "
                 "viene da ciò che *dichiara*, non da ciò che *fa* — ed è esattamente il "
                 "limite che l'Accensione esiste per superare.")
    else:
        for corso, pools in sorted(att.items()):
            tot = sum(p["tentativi"] for p in pools.values())
            primi = sum(p["primi"] for p in pools.values())
            ok = sum(p["primi_ok"] for p in pools.values())
            perc = (100.0 * ok / primi) if primi else 0.0
            R.append("### %s" % corso)
            R.append("")
            R.append("%d risposte, %d primi tentativi, **%.0f%% giusti al primo colpo**."
                     % (tot, primi, perc))
            R.append("")
            R.append("| pool | primi tentativi | giusti al primo | tasso |")
            R.append("|---|---:|---:|---:|")
            for pool, p in sorted(pools.items(),
                                  key=lambda x: (x[1]["primi_ok"] / x[1]["primi"])
                                  if x[1]["primi"] else 1.0):
                t = (100.0 * p["primi_ok"] / p["primi"]) if p["primi"] else 0.0
                segno = " ⚠" if p["primi"] >= 8 and t < 60 else ""
                R.append("| %s | %d | %d | %.0f%%%s |" % (pool, p["primi"], p["primi_ok"], t, segno))
            R.append("")
            deboli = [pool for pool, p in pools.items()
                      if p["primi"] >= 8 and (p["primi_ok"] / p["primi"]) < 0.6]
            if deboli:
                R.append("**Pool da rinforzare** (almeno 8 tentativi, sotto il 60%%): %s."
                         % ", ".join(sorted(deboli)))
                R.append("")

    R.append("## Materiale disponibile — presenze, non studio")
    R.append("")
    R.append("| corso | file | quiz | pool | domande |")
    R.append("|---|---:|---:|---:|---:|")
    for c, m in sorted(mat.items(), key=lambda x: -x[1]["file"]):
        R.append("| %s | %d | %d | %d | %d |"
                 % (c, m["file"], m["quiz"], m["pool"], m["domande"]))
    R.append("")
    dove = [(c, p) for c, m in sorted(mat.items()) for p in m["dove"]]
    if dove:
        R.append("Dove stanno i quiz montati (il contatore li cerca lì, non nella cartella "
                 "del corso — dal 12 agosto è quello l'unico accesso di Giuseppe):")
        R.append("")
        for c, p in dove:
            R.append("- `%s` — %s" % (p, c))
        R.append("")
    R.append("Questi numeri dicono cosa **esiste**, non cosa Giuseppe ha studiato. "
             "Il 2 agosto il percorso-matematica risultava «18 su 18» perché i file c'erano: "
             "li aveva aperti per guardarli. Da allora nessuna presenza viene contata come atto.")
    R.append("")
    return "\n".join(R) + "\n", futuri, att


def main():
    testo, futuri, att = rapporto()

    if "--scrivi" in sys.argv or "--umano" in sys.argv:
        with io.open(FUORI, "w", encoding="utf-8") as f:
            f.write(testo)
        if "--umano" in sys.argv:
            sys.stdout.write(testo)
        else:
            sys.stdout.write("scritto: %s\n" % os.path.relpath(FUORI, NAV))
        return

    # modo hook: una riga, solo se c'e' qualcosa che stringe
    if not futuri:
        return
    p = futuri[0]
    g = (p["data"] - OGGI).days
    if g > 45:
        return
    prove = "nessuna prova raccolta" if not att else "%d risposte raccolte" % sum(
        x["tentativi"] for c in att.values() for x in c.values())
    sys.stdout.write("Studente: %s fra %d giorni (%s) — %s. Stato: 02-accademico/stato-studente.md\n"
                     % (p["corso"], g, p["data"].isoformat(), prove))


if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        if "--umano" in sys.argv:
            raise

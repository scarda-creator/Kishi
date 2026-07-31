r"""anima-grafo.py — estrae il tessuto connettivo della navicella. Dedalo, 2026-07-22.

COSA FA: legge l'indice della memoria e i documenti, e ne ricava un GRAFO — nodi (i
documenti) e archi (i legami). Poi lo scrive in `anima-dati.js`, che la pagina `anima.html`
accende.

PERCHE': l'anima di questa navicella non sono i suoi file, sono i legami fra i suoi file.
Un archivio ha documenti; una mente ha associazioni. Finche' la memoria aveva solo il motore
lessicale e quello semantico, sapeva CERCARE ma non sapeva ANDARE PER ASSOCIAZIONE — e la
prova e' che «cosa teme quando costruisce» non arrivava a L5, perche' L5 non usa quelle
parole. Il grafo e' il terzo motore: raggiunge per collegamento cio' che le parole non
raggiungono.

TRE TIPI DI LEGAME, e vogliono dire cose diverse:
  · citazione — A nomina B (un path, un titolo). E' il legame che qualcuno ha SCRITTO.
  · risonanza — A e B condividono parole rare (sotto il 2% del corpus). Nessuno l'ha
    scritto: e' emerso. Sono i legami che la navicella non sa di avere.
  · sangue     — A e B stanno nella stessa cartella. Il piu' debole: parentela, non affinita'.

CONFINE: legge, non scrive niente nella memoria. Il riservato NON viene nascosto qui —
questa pagina la guarda Giuseppe sul suo computer, e la politica di Mnemosyne riguarda
l'iniezione automatica verso gli agenti passivi, non lo sguardo di chi possiede la memoria.
I nodi riservati sono marcati, e la pagina li disegna come tali. Nulla di tutto questo
lascia il computer: nessuna pubblicazione, nessuna rete.

USO:   .\voce-venv\Scripts\python.exe anima-grafo.py
"""
import argparse, io, json, os, re, sqlite3, unicodedata
from collections import defaultdict
from pathlib import Path

RADICE = Path(__file__).resolve().parents[2]
DB = RADICE / "00-capitano" / "memoria-indice.db"
USCITA = RADICE / "00-capitano" / "anima" / "anima-dati.js"

VUOTE = {"della", "delle", "dello", "degli", "quando", "come", "cosa", "questo", "questa",
         "quello", "quella", "sono", "essere", "avere", "fare", "molto", "anche", "perche",
         "dove", "quale", "quali", "tutto", "tutti", "solo", "senza", "dopo", "prima",
         "ancora", "sempre", "nella", "nello", "quindi", "percio", "allora", "mentre",
         "ogni", "altro", "altra", "altri", "altre", "stesso", "stessa", "dentro", "verso"}


def normale(s):
    """minuscolo e senza accenti: per confrontare parole, non per mostrarle."""
    s = unicodedata.normalize("NFD", s.lower())
    return "".join(c for c in s if unicodedata.category(c) != "Mn")


def carica():
    con = sqlite3.connect(DB)
    righe = con.execute("""SELECT path, COUNT(*), SUM(LENGTH(testo)), MAX(riservato), MAX(mtime)
                           FROM frammenti GROUP BY path""").fetchall()
    testi = defaultdict(str)
    for path, testo in con.execute("SELECT path, testo FROM frammenti"):
        testi[path] += " " + testo
    con.close()
    # Le code di apprendimento NON sono nell'indice dei .md: le aggiungo come documenti,
    # cosi' entrano nel grafo come nodi con i loro legami reali (poi anonimizzate nell'export
    # per il remoto). ris=1: sensibili. Cosi' il cervello e' completo — L5 E code.
    for cfile in RADICE.glob("00-capitano/**/coda-*.jsonl"):
        rel = str(cfile.relative_to(RADICE)).replace("\\", "/")
        testo = cfile.read_text(encoding="utf-8", errors="ignore")
        if testo.strip():
            righe.append((rel, testo.count(chr(10)) + 1, len(testo), 1, int(cfile.stat().st_mtime)))
            testi[rel] = testo
    return righe, testi


def famiglia(path):
    """A che parte dell'anima appartiene un documento. L'ordine conta: il primo che risponde."""
    p = path.replace("\\", "/")
    if "coda-" in p and p.endswith(".jsonl"):     return "coda"
    if "L5-subconscio" in p:                      return "subconscio"
    if "/memoria/" in p or "memoria-profonda" in p: return "memoria"
    if "diario" in p:                             return "diario"
    if "protocolli/" in p:                        return "protocollo"
    if "/dedalo" in p:                            return "officina"
    if p.startswith("02-accademico/tesi"):        return "tesi"
    if p.startswith("02-accademico"):             return "studio"
    if p.startswith("03-business") or "business" in p: return "business"
    if p.startswith("01-personale"):              return "personale"
    return "navicella"


def esporta_json(nodi, fuori, path_out, mappa_out=None):
    """Grafo per il riversamento su GitHub. I nodi sensibili (L5 subconscio + code +
    riservati) NON vengono esclusi ma ANONIMIZZATI — etichetta 'R-<id>', nome/path/famiglia
    nascosti — cosi' il grafo viaggia COMPLETO (tutti i nodi e tutti i legami) senza rivelare
    nomi ne' contenuti. La corrispondenza etichetta->nome-vero va in `mappa_out`, che il
    riversamento cifra (mappa-grafo.enc): si svela solo con la passphrase, in locale.
    Rischio residuo accettato da Giuseppe (28-07): i legami verso nodi noti possono far
    intuire un tema anche senza nome. Revisione del cancello 3, ratificata da Mnemosyne."""
    def sensibile(nd):
        return nd["fam"] in ("subconscio", "coda") or nd["ris"]

    mappa, export = {}, []
    for nd in nodi:
        if sensibile(nd):
            etich = f"R-{nd['id']}"
            mappa[etich] = {"nome": nd["nome"], "path": nd["path"], "fam": nd["fam"]}
            export.append({"id": nd["id"], "nome": etich, "path": "",
                           "fam": "riservato", "g": nd["g"], "mtime": nd["mtime"]})
        else:
            export.append({"id": nd["id"], "path": nd["path"], "nome": nd["nome"],
                           "fam": nd["fam"], "g": nd["g"], "mtime": nd["mtime"]})
    archi = [{"a": e["a"], "b": e["b"], "p": e["p"]} for e in fuori]  # id invariati: teniamo tutti
    meta = {"nodi": len(export), "archi": len(archi), "riservati_anonimi": len(mappa),
            "nota": "grafo remoto: nodi riservati (L5+code) anonimizzati; nomi in mappa-grafo.enc"}
    Path(path_out).parent.mkdir(parents=True, exist_ok=True)
    io.open(path_out, "w", encoding="utf-8").write(
        json.dumps({"meta": meta, "nodi": export, "archi": archi}, ensure_ascii=False))
    if mappa_out:
        Path(mappa_out).parent.mkdir(parents=True, exist_ok=True)
        io.open(mappa_out, "w", encoding="utf-8").write(json.dumps(mappa, ensure_ascii=False))
    print(f"  grafo.json: {len(export)} nodi ({len(mappa)} riservati anonimi), "
          f"{len(archi)} legami -> {path_out}")


def main(json_out=None, mappa_out=None):
    righe, testi = carica()
    nodi = []
    indice = {}
    for path, n, car, ris, mt in righe:
        indice[path] = len(nodi)
        nodi.append({
            "id": len(nodi), "path": path,
            "nome": Path(path).stem,
            "fam": famiglia(path), "n": n, "car": int(car or 0),
            "ris": int(ris or 0), "mtime": mt,
        })

    # ---- legame 1: CITAZIONE. A nomina il nome di B (>=6 caratteri, per non pescare rumore)
    nomi = {}
    for nd in nodi:
        chiave = normale(nd["nome"])
        if len(chiave) >= 6:
            nomi.setdefault(chiave, nd["id"])
    archi = defaultdict(lambda: defaultdict(float))
    for nd in nodi:
        corpo = normale(testi[nd["path"]])
        for chiave, altro in nomi.items():
            if altro != nd["id"] and chiave in corpo:
                a, b = sorted((nd["id"], altro))
                archi[a][b] = max(archi[a][b], 1.0)

    # ---- legame 2: RISONANZA. parole rare condivise (sotto il 2% dei documenti)
    presenza = defaultdict(set)
    for nd in nodi:
        for t in set(re.findall(r"[a-zà-ú]{6,}", normale(testi[nd["path"]]))):
            if t not in VUOTE:
                presenza[t].add(nd["id"])
    tetto = max(3, len(nodi) // 50)
    for t, chi in presenza.items():
        if 2 <= len(chi) <= tetto:                       # rara ma non unica: e' un legame
            chi = sorted(chi)
            for i in range(len(chi)):
                for j in range(i + 1, len(chi)):
                    archi[chi[i]][chi[j]] += 0.34        # tre parole rare = un legame pieno

    # ---- legame 3: SANGUE. stessa cartella, legame debole
    per_cartella = defaultdict(list)
    for nd in nodi:
        per_cartella[str(Path(nd["path"]).parent)].append(nd["id"])
    for gruppo in per_cartella.values():
        if len(gruppo) > 14:                             # cartelle enormi: la parentela non dice nulla
            continue
        for i in range(len(gruppo)):
            for j in range(i + 1, len(gruppo)):
                a, b = sorted((gruppo[i], gruppo[j]))
                archi[a][b] += 0.18

    fuori = []
    for a, vicini in archi.items():
        for b, p in vicini.items():
            if p >= 0.5:                                 # sotto questa soglia e' rumore, non memoria
                fuori.append({"a": a, "b": b, "p": round(min(p, 3.0), 2)})

    # gradi: quanto un nodo e' connesso. Serve alla pagina per dare peso.
    grado = defaultdict(float)
    for e in fuori:
        grado[e["a"]] += e["p"]; grado[e["b"]] += e["p"]
    for nd in nodi:
        nd["g"] = round(grado[nd["id"]], 2)

    # I legami non restano solo nel file per il browser: entrano NELL'INDICE, cosi' il motore
    # della memoria puo' camminarci sopra senza dipendere da una pagina web. Il quadro e
    # l'organo leggono lo stesso tessuto — e' la differenza fra dipingere un'anima e averla.
    con = sqlite3.connect(DB)
    con.execute("DROP TABLE IF EXISTS legami")
    con.execute("CREATE TABLE legami(a TEXT, b TEXT, p REAL)")
    con.executemany("INSERT INTO legami(a,b,p) VALUES(?,?,?)",
                    [(nodi[e["a"]]["path"], nodi[e["b"]]["path"], e["p"]) for e in fuori])
    con.execute("CREATE INDEX IF NOT EXISTS i_legami_a ON legami(a)")
    con.execute("CREATE INDEX IF NOT EXISTS i_legami_b ON legami(b)")
    con.commit(); con.close()

    USCITA.parent.mkdir(parents=True, exist_ok=True)
    io.open(USCITA, "w", encoding="utf-8").write(
        "// generato da anima-grafo.py — non modificare a mano\n"
        "const ANIMA = " + json.dumps({"nodi": nodi, "archi": fuori}, ensure_ascii=False) + ";\n")

    isolati = sum(1 for nd in nodi if nd["g"] == 0)
    print(f"anima: {len(nodi)} nodi, {len(fuori)} legami, {isolati} isolati -> {USCITA.name}")
    fam = defaultdict(int)
    for nd in nodi:
        fam[nd["fam"]] += 1
    print("  " + " · ".join(f"{k}:{v}" for k, v in sorted(fam.items(), key=lambda x: -x[1])))

    if json_out:
        esporta_json(nodi, fuori, json_out, mappa_out)


if __name__ == "__main__":
    ap = argparse.ArgumentParser(description="Genera l'anima (grafo dei legami della memoria).")
    ap.add_argument("--json", metavar="PATH",
                    help="scrive ANCHE il grafo per il riversamento remoto (nodi riservati anonimi).")
    ap.add_argument("--mappa", metavar="PATH",
                    help="scrive la mappa etichetta->nome-vero (da cifrare in mappa-grafo.enc).")
    a = ap.parse_args()
    main(a.json, a.mappa)

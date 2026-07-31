#!/usr/bin/env python3
"""
memoria-cerca.py — retrieval a indice->dettaglio della memoria (apparato B, asse efficienza).

Nato adattando la "progressive disclosure" di thedotmack/claude-mem: invece di caricare TUTTA
la memoria nel contesto a ogni sessione (i 386M di cache-read misurati con token_diagnostica),
si naviga una MAPPA compatta (nome + descrizione, ~decine di token per voce) e si apre il
DETTAGLIO di un file solo su richiesta. E' il meccanismo dietro la "mappa di contesto" invece
del "rileggo tutto".

Esteso 2026-07-12 (Dedalo) traducendo due pattern da Graphify-Labs/graphify (schiusura):
  - --cheatsheet : riassunto ULTRA-compatto (~150 token) per categorie, da iniettare a
    SessionStart al posto della mappa piena. Chiude la frontiera "mappa di contesto a
    SessionStart" dell'apparato B (il motore c'era, mancava il formato minimale + il hook).
  - --budget N   : il retrieval accumula voci fino a un budget di token invece di un top-N
    fisso (query e mappa). "Quanto contesto voglio", non "quante voci".

CONFINE: questo LEGGE la memoria, la conta e la formatta. Non interpreta, non scrive, non
decide cosa e' vero. QUALI categorie contino, cosa entri nella cheatsheet e cosa vada
tipizzato 'stated' vs 'inferred' e' POLICY di Mnemosyne. Il motore e' di Dedalo, la policy
sua. Il hook a SessionStart e' una decisione di come la memoria si carica: la posa Mnemosyne.

Uso:
  python memoria-cerca.py --mappa                     # l'indice compatto di tutta la memoria
  python memoria-cerca.py --cheatsheet                # riassunto ~150 token per SessionStart
  python memoria-cerca.py --query "ETH tesi Marinari" # le voci piu' pertinenti (compatte)
  python memoria-cerca.py --dettaglio <path>          # apre un solo file per intero
Opzioni: --root DIR (ripetibile) --n 8 (quante voci) --budget TOKEN (taglio a budget).
"""
import sys
import re
import argparse
from pathlib import Path

BASE = Path(__file__).resolve().parent.parent          # 00-capitano/
NAVE = BASE.parent                                       # radice navicella
AUTO_MEM = Path.home() / ".claude" / "projects" / "C--Users-ACER-Desktop-AgentsAI" / "memory"

STOP = set("""il lo la i gli le un uno una di a da in con su per tra fra e o ma se che chi cui non
del della dei degli delle al alla nel nella sul come cosa e' è la lo di per""".split())


def default_roots():
    r = [BASE]
    if AUTO_MEM.exists():
        r.append(AUTO_MEM)
    return r


def stem(w):
    return w[:4] if len(w) >= 4 else w


def kw(testo):
    return {stem(t) for t in re.findall(r"[a-zàèéìòóù]{3,}", (testo or "").lower()) if t not in STOP}


def _frontmatter_block(testo):
    m = re.search(r"^---\s*$(.*?)^---\s*$", testo, re.S | re.M)
    return m.group(1) if m else ""


def frontmatter_desc(testo):
    """Estrae 'description:' dal frontmatter YAML, o la prima riga non-vuota/non-heading."""
    blocco = _frontmatter_block(testo)
    if blocco:
        d = re.search(r"^\s*description:\s*(.+)$", blocco, re.M)
        if d:
            return d.group(1).strip().strip('"').strip("'")
    for line in testo.splitlines():
        s = line.strip()
        if s and not s.startswith("#") and not s.startswith("---"):
            return s[:160]
    return ""


def frontmatter_field(testo, campo):
    """Estrae un campo dal frontmatter YAML, anche annidato (es. 'type:' dentro 'metadata:')."""
    blocco = _frontmatter_block(testo)
    d = re.search(r"^\s*%s:\s*(.+)$" % re.escape(campo), blocco, re.M)
    return d.group(1).strip().strip('"').strip("'") if d else ""


def stima_token(s):
    """Stima grezza dei token: ~1 ogni 4 caratteri (regola pratica, non esatta)."""
    return max(1, len(s) // 4)


def raccogli(roots):
    voci = []
    for root in roots:
        for p in sorted(Path(root).rglob("*.md")):
            try:
                testo = p.read_text(encoding="utf-8", errors="ignore")
            except Exception:
                continue
            voci.append({"path": p, "desc": frontmatter_desc(testo),
                         "titolo": p.stem, "testo": testo,
                         "tipo": frontmatter_field(testo, "type") or "(senza tipo)"})
    return voci


def riga_compatta(v):
    rel = v["path"]
    try:
        rel = v["path"].relative_to(NAVE)
    except ValueError:
        try:
            rel = v["path"].relative_to(Path.home())
            rel = Path("~") / rel
        except ValueError:
            pass
    d = v["desc"] or "(nessuna descrizione)"
    return "%-52s  %s" % (str(rel), d[:100])


def _emetti(righe, budget, n):
    """Emette le righe rispettando un budget di token (se dato) o un tetto di n voci."""
    tok = 0
    emesse = 0
    for r in righe:
        if budget is not None and tok + stima_token(r) > budget:
            print("  …(+%d voci oltre il budget; alza --budget o usa --dettaglio)" % (len(righe) - emesse))
            break
        if budget is None and emesse >= n:
            break
        print(r)
        tok += stima_token(r)
        emesse += 1


def mappa(roots, n, budget=None):
    voci = raccogli(roots)
    print("MAPPA DELLA MEMORIA — %d voci (naviga; apri col --dettaglio <path>)\n" % len(voci))
    _emetti([riga_compatta(v) for v in voci], budget, n if n else len(voci))


def cheatsheet(roots, budget=150):
    """Riassunto ultra-compatto per categorie, ~budget token, per SessionStart.
    Il motore conta e formatta; QUALI categorie e cosa evidenziare e' policy di Mnemosyne."""
    voci = raccogli(roots)
    cats = {}
    for v in voci:
        cats.setdefault(v["tipo"], []).append(v)
    testa = "MEMORIA: %d voci, %d categorie — approfondisci con --mappa o --query «...»" % (len(voci), len(cats))
    righe = [testa]
    tot = stima_token(testa)
    ordinate = sorted(cats, key=lambda c: -len(cats[c]))
    for i, cat in enumerate(ordinate):
        titoli = ", ".join(v["titolo"] for v in cats[cat][:3])
        r = "• %s (%d): %s%s" % (cat, len(cats[cat]), titoli, "…" if len(cats[cat]) > 3 else "")
        if tot + stima_token(r) > budget:
            righe.append("• …(+%d categorie) — --mappa per tutto" % (len(ordinate) - i))
            break
        righe.append(r)
        tot += stima_token(r)
    print("\n".join(righe))


def query(roots, q, n, budget=None):
    qk = kw(q)
    voci = raccogli(roots)
    for v in voci:
        # pesi: titolo e descrizione contano piu' del corpo
        st = kw(v["titolo"]); sd = kw(v["desc"]); sb = kw(v["testo"])
        v["score"] = 3 * len(qk & st) + 2 * len(qk & sd) + len(qk & sb)
    hit = [v for v in voci if v["score"] > 0]
    hit.sort(key=lambda v: -v["score"])
    if not hit:
        print("(nessuna voce pertinente per: %s)" % q); return
    print("PERTINENTI a «%s» — %d voci (apri col --dettaglio <path>)\n" % (q, len(hit)))
    _emetti(["[%2d] %s" % (v["score"], riga_compatta(v)) for v in hit], budget, n)


def _slug(s):
    return re.sub(r"\.md$", "", (s or "").strip().lower()).lstrip("/")


# Profondità della memoria: dal nucleo (chi è Giuseppe) alla cronaca (ciò che è passato).
# Mappa categoria -> (ordine, etichetta). E' un DEFAULT trasparente: quale categoria stia a
# quale profondità è policy di Mnemosyne (che possiede l'interpretazione della memoria) —
# qui il motore la espone e la rende ratificabile, non la decide come verità.
DEPTH_MAP = {
    "user": (0, "nucleo"), "profilo": (0, "nucleo"),
    "feedback": (1, "fondamenta"), "visione": (1, "fondamenta"), "project": (1, "fondamenta"),
    "spec": (2, "sapere"), "reference": (2, "sapere"), "ricerca": (2, "sapere"),
    "memoria": (2, "sapere"), "intake": (2, "sapere"),
    "archivio": (3, "cronaca"), "diario": (3, "cronaca"), "stato": (3, "cronaca"),
    "(senza tipo)": (3, "cronaca"),
}
DEPTH_LABELS = ["nucleo", "fondamenta", "sapere", "cronaca"]


def grafo(roots):
    """Emette il grafo della memoria in JSON: nodi = voci (tipizzate), sinapsi = link [[ ]]
    reali + archi associativi per sovrapposizione di parole-chiave (top-2 per nodo). E' il
    motore della 'stanza della memoria' della plancia: espone, non interpreta."""
    import json
    voci = raccogli(roots)
    nodes, kws = [], []
    slug_to_id = {}
    for v in voci:
        nid = v["path"].as_posix()
        rel = nid.lower()
        sensitive = "l5-subconscio/psicologica" in rel
        d_ord, d_lab = (0, "nucleo") if sensitive else DEPTH_MAP.get(v["tipo"], (2, "sapere"))
        nodes.append({"id": nid, "name": v["titolo"], "topic": v["tipo"], "category": v["tipo"],
                      "depth": d_ord, "depth_label": d_lab,
                      "desc": (v["desc"] or "")[:160], "sensitive": sensitive})
        slug_to_id.setdefault(_slug(v["titolo"]), nid)
        nm = frontmatter_field(v["testo"], "name")
        if nm:
            slug_to_id.setdefault(_slug(nm), nid)
        kws.append((nid, kw(v["titolo"] + " " + (v["desc"] or ""))))

    edge = {}  # coppia non orientata -> kind ('link' vince su 'assoc')
    def add(a, b, kind):
        if a == b:
            return
        key = tuple(sorted((a, b)))
        if edge.get(key) == "link":
            return
        edge[key] = "link" if (kind == "link" or edge.get(key) == "link") else kind

    for v in voci:
        src = v["path"].as_posix()
        for m in re.finditer(r"\[\[([^\]|#]+)", v["testo"]):
            tgt = slug_to_id.get(_slug(m.group(1)))
            if tgt:
                add(src, tgt, "link")

    for i, (idi, ki) in enumerate(kws):
        sims = []
        for j, (idj, kj) in enumerate(kws):
            if i == j:
                continue
            ov = len(ki & kj)
            if ov >= 3:
                sims.append((ov, idj))
        sims.sort(reverse=True)
        for _ov, idj in sims[:2]:
            add(idi, idj, "assoc")

    links = [{"source": a, "target": b, "kind": k} for (a, b), k in edge.items()]
    print(json.dumps({"nodes": nodes, "links": links}, ensure_ascii=False))


def dettaglio(path):
    p = Path(path.replace("~", str(Path.home()), 1)) if path.startswith("~") else Path(path)
    if not p.is_absolute() and not p.exists():
        cand = NAVE / path
        if cand.exists():
            p = cand
    if not p.exists():
        print("File non trovato: %s" % path); return
    print(p.read_text(encoding="utf-8", errors="ignore"))


def main():
    for s in (sys.stdout, sys.stderr):
        try:
            s.reconfigure(encoding="utf-8")
        except Exception:
            pass
    ap = argparse.ArgumentParser()
    ap.add_argument("--mappa", action="store_true")
    ap.add_argument("--cheatsheet", action="store_true")
    ap.add_argument("--grafo", action="store_true")
    ap.add_argument("--query")
    ap.add_argument("--dettaglio")
    ap.add_argument("--root", action="append")
    ap.add_argument("--n", type=int, default=8)
    ap.add_argument("--budget", type=int, default=None)
    a = ap.parse_args()
    roots = [Path(r) for r in a.root] if a.root else default_roots()
    if a.dettaglio:
        dettaglio(a.dettaglio)
    elif a.grafo:
        grafo(roots)
    elif a.cheatsheet:
        cheatsheet(roots, budget=a.budget if a.budget else 150)
    elif a.query:
        query(roots, a.query, a.n, a.budget)
    else:
        mappa(roots, a.n, a.budget)


if __name__ == "__main__":
    main()

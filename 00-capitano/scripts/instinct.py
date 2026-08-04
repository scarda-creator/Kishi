#!/usr/bin/env python3
"""
instinct.py — motore degli istinti della navicella (apparato B, asse apprendimento).

Nato adattando l'idea "instincts" di affaan-m/ECC ai termini della navicella: dai segnali
IMPLICITI e ripetuti si forma un'IPOTESI con una CONFIDENZA che cresce con le prove e, oltre
soglia, MATURA in una regola. Estende l'apprendimento esplicito di cattura-apprendimento.py
(correzioni una-tantum) all'apprendimento implicito (pattern ricorrenti).

CONFINE CEMENTATO (invariante): questo motore RAGGRUPPA e CONTA — meccanico, struttura di
Dedalo. NON scrive mai in memoria e NON interpreta chi-e-Giuseppe. Deposita ipotesi in
staging (instincts.jsonl). L'interpretazione, il nome dell'ipotesi e la promozione a
memoria/skill sono di MNEMOSYNE (L4/L5 con conferma di Giuseppe). Vedi protocollo-riflessione.md.

DUE FASI (perche' il confine cade proprio qui):
  FASE 1 (Dedalo, meccanico): `osserva` fonde solo le varianti PALESI (stem: preamboli==preambolo)
    e traccia la confidenza dentro un cluster. Sovra-divide di proposito: fondere parafrasi
    ("breve" col senso di "taglia i preamboli") e' INTERPRETAZIONE = di Mnemosyne, non del motore.
  FASE 2 (Mnemosyne): `fondi` unisce gli istinti che *significano* lo stesso; la confidenza si
    ricombina dalle prove unite; oltre soglia diventano `candidato`. `matura` li chiude dopo la
    ratifica in memoria (cosi' non si ripropongono).

Uso:
  python instinct.py osserva                          # ingerisce la coda, aggiorna gli istinti
  python instinct.py lista [--stato S]                # elenca gli istinti
  python instinct.py fondi inst-0001 inst-0003 ...    # Mnemosyne: unisce istinti che dicono lo stesso
  python instinct.py candidati                         # istinti maturi da ratificare (proposte)
  python instinct.py matura inst-0001 [--ipotesi "…"] # Mnemosyne: ratificato -> chiuso

Store: 00-capitano/instincts.jsonl. Segnali: coda-apprendimento.jsonl(+ -archivio.jsonl).
"""
import sys
import re
import json
import argparse
from datetime import datetime, timezone
from pathlib import Path

BASE = Path(__file__).resolve().parent.parent
STORE = BASE / "instincts.jsonl"
CODA = BASE / "coda-apprendimento.jsonl"
CODA_ARCH = BASE / "coda-apprendimento-archivio.jsonl"

# modello di confidenza: funzione PURA del numero di prove (trasparente, deterministico)
CONF_BASE = 0.30          # 1 prova
ALPHA = 0.25             # conf(n) = 1 - (1-CONF_BASE)*(1-ALPHA)^(n-1) -> 0.30,0.48,0.61,0.71,0.78,...
DECAY_PER_DAY = 0.005    # dimenticare-piano: ~146 gg di finestra passiva. Giuseppe ha pattern
#   lenti -> decadimento mite (tarato da Mnemosyne, 07-11). Mai oblio: conf floor 0.05.
SIM_MIN = 0.50           # overlap coefficient minimo per fondere varianti PALESI in `osserva`
SOGLIA_MATURO = 0.75     # guardia BINDING: conf>=0.75 <=> n>=5 prove. E' questa che decide.
MIN_PROVE = 3            # guardia SECONDARIA (floor), NON basta da sola: a n=3 conf=0.61<0.75.
#   conf(n): 1->0.30  2->0.48  3->0.61  4->0.71  5->0.78  => candidato di fatto da n=5.
#   (annotato da Mnemosyne, 07-11: il vincolo vero e' la confidenza, non il conteggio prove.)

STOP = set("""il lo la i gli le un uno una di a da in con su per tra fra e o ma se che chi cui
non piu meno molto poco come cosa quando dove perche mi ti ci vi si ne del dello della dei degli
delle al allo alla ai agli alle dal dallo dalla nel nello nella sul sullo sulla ho hai ha sii
abbiamo avete hanno sono sei siamo siete essere fare fai fatto voglio vuoi puoi devo devi questo
questa quello quella qui qua vai sempre mai ora adesso poi gia anche solo tutto tutti tutte non""".split())


def ora():
    return datetime.now(timezone.utc).astimezone().isoformat(timespec="seconds")


def parse_ts(s):
    try:
        return datetime.fromisoformat(s)
    except Exception:
        return datetime.now(timezone.utc).astimezone()


def stem(w):
    return w[:4] if len(w) >= 4 else w


def tokens_raw(testo):
    return [t for t in re.findall(r"[a-zàèéìòóù]{3,}", (testo or "").lower()) if t not in STOP]


def kw_set(testo):
    return {stem(t) for t in tokens_raw(testo)}


def overlap(a, b):
    a, b = set(a), set(b)
    if not a or not b:
        return 0.0
    return len(a & b) / min(len(a), len(b))


def conf_da_prove(n):
    return round(1.0 - (1.0 - CONF_BASE) * (1.0 - ALPHA) ** (max(1, n) - 1), 4)


def descrittore(evidenza):
    freq = {}
    for e in evidenza:
        for t in set(tokens_raw(e.get("testo", ""))):
            freq[t] = freq.get(t, 0) + 1
    top = sorted(freq, key=lambda w: (-freq[w], w))[:4]
    return " / ".join(top) if top else "(segnale)"


def chiave_prova(seg):
    return (seg.get("ts", ""), (seg.get("testo", "") or "")[:80])


def carica_store():
    if not STORE.exists():
        return []
    return [json.loads(l) for l in STORE.read_text(encoding="utf-8").splitlines() if l.strip()]


def salva_store(istinti):
    STORE.write_text("".join(json.dumps(x, ensure_ascii=False) + "\n" for x in istinti), encoding="utf-8")


def fonti_segnali():
    """Tutte le code, viva e storiche.

    Accensione 2026-08-02: `CODA_ARCH` puntava a `coda-apprendimento-archivio.jsonl`,
    un file che nessun procedimento ha mai creato — le code svuotate da /riflessione si
    chiamano `coda-processata-<data>.jsonl`. Il motore leggeva quindi solo la coda viva
    e perdeva tutto lo storico: stessa famiglia dell'hook banca-dati puntato al canale
    sbagliato. Ora si prende ogni coda che esiste davvero.
    """
    f = [CODA, CODA_ARCH]
    f += sorted(BASE.glob("coda-processata-*.jsonl"))
    return f


def leggi_segnali():
    seg = []
    for f in fonti_segnali():
        if f.exists():
            for l in f.read_text(encoding="utf-8").splitlines():
                if l.strip():
                    try:
                        seg.append(json.loads(l))
                    except Exception:
                        pass
    return seg


def matura_check(ist):
    if ist["stato"] == "osservazione" and ist["confidenza"] >= SOGLIA_MATURO and len(ist["evidenza"]) >= MIN_PROVE:
        ist["stato"] = "candidato"
        return True
    return False


def _ricalcola(ist):
    ist["evidenza"].sort(key=lambda e: e.get("ts", ""))
    ist["confidenza"] = conf_da_prove(len(ist["evidenza"]))
    ist["descrittore"] = descrittore(ist["evidenza"])
    ist["_kw"] = sorted({s for e in ist["evidenza"] for s in kw_set(e.get("testo", ""))})
    ist["aggiornato"] = ora()


def osserva():
    istinti = carica_store()
    # decadimento di chi non e' stato corroborato di recente
    for ist in istinti:
        giorni = max(0.0, (datetime.now(timezone.utc).astimezone() - parse_ts(ist["aggiornato"])).total_seconds() / 86400.0)
        ist["confidenza"] = round(max(0.05, ist["confidenza"] - DECAY_PER_DAY * giorni), 4)
    viste = {chiave_prova(p) for ist in istinti for p in ist["evidenza"]}

    nuovi = corrob = promossi = 0
    for seg in leggi_segnali():
        if chiave_prova(seg) in viste:
            continue
        viste.add(chiave_prova(seg))
        kw = kw_set(seg.get("testo", ""))
        if not kw:
            continue
        prova = {"ts": seg.get("ts"), "testo": seg.get("testo"), "tipo": seg.get("tipo")}
        best, best_s = None, 0.0
        for ist in istinti:
            s = overlap(kw, ist.get("_kw", []))
            if s > best_s:
                best, best_s = ist, s
        if best and best_s >= SIM_MIN:
            best["evidenza"].append(prova)
            _ricalcola(best)
            corrob += 1
        else:
            ist = {"id": "inst-%04d" % (len(istinti) + 1), "descrittore": descrittore([prova]),
                   "ipotesi": None, "evidenza": [prova], "confidenza": CONF_BASE,
                   "stato": "osservazione", "_kw": sorted(kw), "creato": ora(), "aggiornato": ora()}
            istinti.append(ist)
            nuovi += 1

    for ist in istinti:
        promossi += 1 if matura_check(ist) else 0
    salva_store(istinti)
    print("osserva: %d istinti nuovi | %d corroborati | %d -> candidato | %d totali"
          % (nuovi, corrob, promossi, len(istinti)))
    if promossi:
        print(">> candidati da ratificare: `python instinct.py candidati`, poi /riflessione")


def lista(stato):
    istinti = carica_store()
    if stato:
        istinti = [i for i in istinti if i["stato"] == stato]
    if not istinti:
        print("(nessun istinto)"); return
    for i in sorted(istinti, key=lambda x: -x["confidenza"]):
        print("%-9s conf=%.2f prove=%d [%s]  %s :: %s"
              % (i["id"], i["confidenza"], len(i["evidenza"]), i["stato"], i["descrittore"], i["ipotesi"] or "[da interpretare]"))


def fondi(ids):
    istinti = carica_store()
    target = [i for i in istinti if i["id"] in ids]
    if len(target) < 2:
        print("Servono >=2 id esistenti. Trovati: %s" % [i["id"] for i in target]); return
    resto = [i for i in istinti if i["id"] not in ids]
    ev, viste = [], set()
    for t in target:
        for e in t["evidenza"]:
            if chiave_prova(e) not in viste:
                viste.add(chiave_prova(e)); ev.append(e)
    ipotesi = next((t["ipotesi"] for t in target if t.get("ipotesi")), None)
    # Mnemosyne (07-11): il merge NON eredita 'maturo' in silenzio. Un istinto gia' ratificato
    # che viene rifuso torna in valutazione, perche' l'evidenza combinata e' nuova e va ri-esaminata.
    era_maturo = [t["id"] for t in target if t["stato"] == "maturo"]
    merged = {"id": min(t["id"] for t in target), "ipotesi": ipotesi, "evidenza": ev,
              "stato": "osservazione", "creato": min(t["creato"] for t in target)}
    _ricalcola(merged)
    matura_check(merged)
    resto.append(merged)
    salva_store(resto)
    print("fondi: %s -> %s (conf=%.2f, %d prove, stato=%s)"
          % (", ".join(ids), merged["id"], merged["confidenza"], len(ev), merged["stato"]))
    if era_maturo:
        print("ATTENZIONE: %s era gia' 'maturo'. Il merge lo ha riportato a '%s': riesamina "
              "l'evidenza unita e ri-ratifica con `matura` se regge." % (", ".join(era_maturo), merged["stato"]))


def candidati():
    istinti = [i for i in carica_store() if i["stato"] == "candidato"]
    if not istinti:
        print("(nessun candidato: nessun istinto ha conf>=%.2f con >=%d prove)" % (SOGLIA_MATURO, MIN_PROVE)); return
    print("PROPOSTE per Mnemosyne (interpreta l'ipotesi, ratifica in memoria/skill; L4/L5 con Giuseppe):\n")
    for i in sorted(istinti, key=lambda x: -x["confidenza"]):
        print("- %s (conf=%.2f, %d prove) %s" % (i["id"], i["confidenza"], len(i["evidenza"]), i["descrittore"]))
        for e in i["evidenza"][:5]:
            print("    · %s" % (e.get("testo", "")[:100]))
        print()


def matura(idv, ipotesi):
    istinti = carica_store()
    found = False
    for i in istinti:
        if i["id"] == idv:
            i["stato"] = "maturo"; i["aggiornato"] = ora()
            if ipotesi:
                i["ipotesi"] = ipotesi
            found = True
    salva_store(istinti)
    print("matura: %s -> maturo%s" % (idv, "" if found else " (ID NON TROVATO)"))


def main():
    for s in (sys.stdout, sys.stderr):
        try:
            s.reconfigure(encoding="utf-8")
        except Exception:
            pass
    ap = argparse.ArgumentParser()
    sub = ap.add_subparsers(dest="cmd", required=True)
    sub.add_parser("osserva")
    pl = sub.add_parser("lista"); pl.add_argument("--stato")
    pf = sub.add_parser("fondi"); pf.add_argument("ids", nargs="+")
    sub.add_parser("candidati")
    pm = sub.add_parser("matura"); pm.add_argument("id"); pm.add_argument("--ipotesi")
    a = ap.parse_args()
    {"osserva": lambda: osserva(),
     "lista": lambda: lista(a.stato),
     "fondi": lambda: fondi(a.ids),
     "candidati": lambda: candidati(),
     "matura": lambda: matura(a.id, a.ipotesi)}[a.cmd]()


if __name__ == "__main__":
    main()

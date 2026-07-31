#!/usr/bin/env python3
"""
tag-esami-av.py — driver di metabolismo dell'apparato A sul corpus di Analisi Vettoriale.

Principio (legge inscritta 2026-07-13): il locale PRODUCE, non canonizza. Questo driver
delega il grunt-work (taggare gli esercizi d'esame nei 10 pool) a un esecutore LOCALE via
esegui-locale.py — 0 token Claude — e deposita il frutto in STAGING (00-capitano/esiti-locali/).
L'ingestione in memoria è protocollo di Mnemosyne: qui non si scrive nulla nella memoria vera.

Doppio scopo:
  1) provare sul campo che il metabolismo locale lavora (latenza, correttezza);
  2) far crescere la memoria: l'indice esame->esercizio->pool è un artefatto nuovo che la
     navicella non aveva (distribuzione REALE degli esercizi sul corpus, non stima).

Metro di correttezza incorporato: le frequenze dei pool ricavate dai tag vengono confrontate
con le frequenze ATTESE della mappa (banca-esercizi/mappa-esercizi.md). Vicine = tagga bene.

Uso:
  python tag-esami-av.py               # tutto il corpus (batch/background, CPU lenta)
  python tag-esami-av.py --limit 3     # smoke test veloce sui primi 3
  python tag-esami-av.py --modello qwen2.5:7b   # se il 14b non è scaricato
"""
import sys, os, json, time, argparse, subprocess, re
from pathlib import Path

BASE = Path(__file__).resolve().parents[2]                      # ...\AgentsAI
ESEGUI = Path(__file__).resolve().parent / "esegui-locale.py"
EXAMS = BASE / "02-accademico/corsi/analisi-vettoriale/01-banca-dati/_txt/Esami passati secondo esonero"
STAGING = BASE / "00-capitano/esiti-locali"
POOL_NOMI = {
    1:"EDO/Cauchy", 2:"Superfici+area/flusso", 3:"Curve+integrali di linea",
    4:"Divergenza/Gauss", 5:"Stokes", 6:"Ottimizzazione", 7:"Serie/successioni",
    8:"Conservativi", 9:"Differenziabilità", 10:"Dini/implicite", 0:"altro",
}
# frequenze attese dalla mappa-esercizi.md (quota di compiti in cui il pool appare)
ATTESE = {1:1.00, 2:0.95, 3:0.75, 4:1.00, 5:0.80, 6:0.85, 7:0.65, 8:0.50, 9:0.55, 10:0.45}


def estrai_json(testo: str):
    """Il modello locale dovrebbe dare JSON puro; tollera code fence o testo attorno."""
    testo = testo.strip()
    if testo.startswith("```"):
        testo = re.sub(r"^```[a-zA-Z]*\n?|\n?```$", "", testo).strip()
    try:
        return json.loads(testo)
    except Exception:
        pass
    i, j = testo.find("{"), testo.rfind("}")
    if i != -1 and j != -1 and j > i:
        try:
            return json.loads(testo[i:j+1])
        except Exception:
            return None
    return None


def tagga_file(f: Path, modello: str, endpoint: str):
    cmd = [sys.executable, str(ESEGUI), "--profilo", "taggatore-esercizi-av",
           "--in", str(f), "--json", "--modello", modello, "--endpoint", endpoint,
           "--max-tokens", "400", "--timeout", "200"]
    t0 = time.time()
    p = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="replace")
    dt = time.time() - t0
    if p.returncode != 0:
        return {"errore": (p.stderr or p.stdout or "").strip()[:300]}, dt
    parsed = estrai_json(p.stdout)
    if parsed is None:
        return {"errore": "output non-JSON", "raw": p.stdout.strip()[:300]}, dt
    return parsed, dt


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--limit", type=int, default=0)
    ap.add_argument("--tutti", action="store_true", help="includi anche i file di soluzioni (lenti, sconsigliato su CPU)")
    ap.add_argument("--modello", default="qwen2.5:7b")   # il 14b è impraticabile in batch su CPU
    ap.add_argument("--endpoint", default="http://localhost:11434/v1/chat/completions")
    a = ap.parse_args()
    for s in (sys.stdout, sys.stderr):
        try: s.reconfigure(encoding="utf-8")
        except Exception: pass

    if not EXAMS.exists():
        sys.exit(f"Corpus non trovato: {EXAMS}")
    def is_testo_esame(p: Path) -> bool:
        # tieni solo gli ENUNCIATI d'esame: scarta soluzioni (troppo lunghe per CPU) e
        # le raccolte di esercizi che non sono compiti veri. Basta l'enunciato per taggare.
        n = p.name.lower()
        if "oluzion" in n or "_sol" in n or n.endswith("sol.txt"):
            return False
        if "esercizi su successioni" in n:
            return False
        return True

    files = sorted(p for p in EXAMS.glob("*.txt") if not p.name.endswith(".sha1"))
    if not a.tutti:
        files = [p for p in files if is_testo_esame(p)]
    if a.limit:
        files = files[:a.limit]
    STAGING.mkdir(parents=True, exist_ok=True)
    jsonl = STAGING / "av-tag-esercizi.jsonl"

    print(f"[metabolismo] {len(files)} documenti · modello {a.modello} · endpoint {a.endpoint}")
    risultati, tempi, errori = [], [], 0
    with open(jsonl, "w", encoding="utf-8") as out:
        for k, f in enumerate(files, 1):
            tag, dt = tagga_file(f, a.modello, a.endpoint)
            tempi.append(dt)
            rec = {"file": f.name, "sec": round(dt, 1), **tag}
            out.write(json.dumps(rec, ensure_ascii=False) + "\n"); out.flush()
            risultati.append(rec)
            if "errore" in tag:
                errori += 1
                print(f"  {k}/{len(files)} {f.name[:42]:42}  {dt:6.1f}s  ERRORE: {tag['errore'][:80]}")
                # se il primo fallisce per endpoint spento, è inutile continuare
                if k == 1 and "raggiungibile" in tag["errore"]:
                    print("  -> endpoint spento: interrompo. Avvia Ollama e rilancia.")
                    break
            else:
                n = len(tag.get("esercizi", []))
                print(f"  {k}/{len(files)} {f.name[:42]:42}  {dt:6.1f}s  {n} esercizi taggati")

    # ---- aggregazione: frequenza pool (presenza per documento) vs attese ----
    validi = [r for r in risultati if "esercizi" in r]
    presenza = {p: 0 for p in POOL_NOMI}
    for r in validi:
        pools_doc = set()
        for e in r["esercizi"]:
            pools_doc.add(e.get("primario", 0))
            pools_doc.update(e.get("secondari", []) or [])
        for p in pools_doc:
            if p in presenza:
                presenza[p] += 1
    nd = max(len(validi), 1)

    righe = ["# Metabolismo locale — tag esercizi Analisi Vettoriale",
             "",
             "> Artefatto in STAGING prodotto dall'esecutore locale (apparato A). 0 token Claude.",
             "> Il locale produce; l'ingestione in memoria è di Mnemosyne (confine di ruolo).",
             "",
             f"- Documenti processati: {len(validi)}/{len(files)}  ·  errori: {errori}",
             f"- Modello: {a.modello} (locale)  ·  latenza media: {sum(tempi)/max(len(tempi),1):.1f}s/doc"
             f"  ·  totale: {sum(tempi):.0f}s",
             "",
             "## Frequenza dei pool: locale vs atteso (metro di correttezza)",
             "",
             "| Pool | Famiglia | Osservato | Atteso | Δ |",
             "|---|---|---|---|---|"]
    for p in [1,2,3,4,5,6,7,8,9,10,0]:
        if p == 0 and presenza[p] == 0:
            continue
        oss = presenza[p] / nd
        att = ATTESE.get(p)
        att_s = f"{att:.0%}" if att is not None else "—"
        delta = f"{oss-att:+.0%}" if att is not None else "—"
        righe.append(f"| {p} | {POOL_NOMI[p]} | {oss:.0%} | {att_s} | {delta} |")
    righe += ["", "## Indice dettaglio (esame → esercizio → pool)", ""]
    for r in validi:
        parti = []
        for e in r["esercizi"]:
            sec = e.get("secondari") or []
            parti.append(f"es{e.get('n','?')}={e.get('primario','?')}"
                         + (f"(+{'+'.join(map(str, sec))})" if sec else ""))
        righe.append(f"- **{r['file']}** — " + ", ".join(parti))
    (STAGING / "av-tag-esercizi.md").write_text("\n".join(righe) + "\n", encoding="utf-8")

    print(f"\n[fatto] staging: {jsonl.name} + av-tag-esercizi.md in {STAGING}")
    if errori == 0 and validi:
        print("[metro] confronta la colonna Δ nel .md: vicino a 0 = il locale tagga bene.")


if __name__ == "__main__":
    main()

#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""sonda-modelli.py — quali modelli rispondono DAVVERO. Dedalo, 2026-08-16.

Perche' esiste. Il gateway pubblica centinaia di modelli e Giuseppe non ha modo di
sapere quali funzionino: la dashboard li elenca tutti uguali, il test di connessione
dice `active` anche quando ogni singolo modello risponde 401 (misurato oggi su
OpenCode), e l'unico modo per scoprirlo e' provarne uno alla volta a mano. Cosi'
una catena finisce per contenere modelli morti e nessuno se ne accorge: risponde il
ripiego, e stai usando un modello piu' debole per sempre.

Questa sonda interroga ogni modello con una richiesta vera e minima, e scrive
l'esito su file. Tre categorie, e la terza e' quella che nessuno guarda:
  vivo   risponde con del testo
  morto  errore esplicito (401, 404, quota) — almeno lo dice
  muto   risponde 200, consuma token, e non produce testo. E' il caso peggiore:
         non fallisce, spende, e sembra funzionare.

E' **ripartibile**: gli esiti gia' scritti non si rifanno. Se il limite di sessione
o un rate limit la interrompono, si rilancia e riprende. E' rallentata di proposito
(vedi PAUSA): una sonda che spara 112 richieste in dieci secondi e' esattamente lo
spike che fa scattare le sospensioni che vogliamo evitare.

Uso:
  sonda-modelli.py --prefissi nvidia,gemini      prova quei provider
  sonda-modelli.py --prefissi nvidia --pausa 2   piu' lenta (secondi fra richieste)
  sonda-modelli.py --esiti                       il riepilogo di cio' che si e' gia' provato
  sonda-modelli.py --vivi nvidia                 solo i modelli vivi di un provider
"""
import io
import json
import os
import sys
import time

try:
    from urllib.request import Request, urlopen
    from urllib.error import URLError, HTTPError
except ImportError:
    from urllib2 import Request, urlopen, URLError, HTTPError

BASE = "http://localhost:20128"
CASA = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
SEGRETO = os.path.join(os.path.expanduser("~"), ".claude", "navicella-ponte.json")
ESITI = os.path.join(CASA, "00-capitano", "temi", "modelli-che-rispondono.jsonl")
PAUSA = 1.5      # secondi fra due richieste: sotto i 40/min di NVIDIA con margine


def chiave():
    if not os.path.isfile(SEGRETO):
        sys.exit("Chiave assente. Prima: ponte.py --chiave sk-...")
    return json.loads(io.open(SEGRETO, encoding="utf-8").read())["gateway_key"]


def gia_provati():
    """Gli esiti su disco. E' cio' che rende la sonda ripartibile: non si ricorda
    a che punto era, riconta cosa c'e' gia' scritto."""
    fuori = {}
    if os.path.isfile(ESITI):
        for riga in io.open(ESITI, encoding="utf-8", errors="replace"):
            riga = riga.strip()
            if not riga:
                continue
            try:
                r = json.loads(riga)
                fuori[r["modello"]] = r
            except ValueError:
                pass
    return fuori


def elenco_modelli(prefissi):
    req = Request(BASE + "/v1/models", headers={
        "x-api-key": chiave(), "User-Agent": "navicella-sonda/1.0"})
    dati = json.loads(urlopen(req, timeout=30).read().decode("utf-8", "replace"))
    fuori = []
    for m in dati.get("data", []):
        mid = m.get("id", "")
        if any(mid.startswith(p + "/") for p in prefissi):
            fuori.append(mid)
    return sorted(set(fuori))


def prova(modello, k):
    corpo = json.dumps({"model": modello, "max_tokens": 24,
                        "messages": [{"role": "user", "content": "Scrivi: vivo"}]
                        }).encode("utf-8")
    req = Request(BASE + "/v1/messages", data=corpo, headers={
        "Content-Type": "application/json", "anthropic-version": "2023-06-01",
        "x-api-key": k, "User-Agent": "navicella-sonda/1.0"})
    try:
        d = json.loads(urlopen(req, timeout=25).read().decode("utf-8", "replace"))
        blocchi = d.get("content", [])
        testo = "".join(b.get("text", "") for b in blocchi).strip()
        u = d.get("usage", {}) or {}
        # Il gateway, quando l'upstream non produce nulla, restituisce la STRINGA
        # "(empty response)" dentro un blocco di testo. La prima stesura la contava
        # come risposta: un segnaposto scambiato per contenuto, e tre modelli morti
        # promossi a vivi. Se non si guarda cosa c'e' scritto, "non vuoto" non
        # significa "ha risposto". (corretto il 16-08)
        if testo.lower().strip("()[]. ") in ("empty response", "no response", "null", ""):
            return {"stato": "muto", "risposta": testo[:40],
                    "out": u.get("output_tokens")}
        if testo:
            return {"stato": "vivo", "risposta": testo[:60],
                    "out": u.get("output_tokens")}
        # Blocchi presenti ma nessun testo: ha consumato il tetto ragionando. NON e'
        # morto — con un tetto normale risponderebbe. Categoria a se', perche'
        # confonderlo con un guasto fa scartare modelli buoni.
        if blocchi:
            return {"stato": "ragiona", "risposta": "[ha speso il tetto pensando]",
                    "out": u.get("output_tokens")}
        return {"stato": "muto", "risposta": "", "out": u.get("output_tokens")}
    except HTTPError as e:
        testo = e.read()[:200].decode("utf-8", "replace").replace("\n", " ")
        return {"stato": "morto", "codice": e.code, "errore": testo}
    except URLError as e:
        # Un timeout non e' un modello morto: e' un modello che non ha risposto in
        # 25 secondi a una domanda da due parole. Per i nostri usi e' inservibile
        # lo stesso, ma va marcato per quello che e' — altrimenti fra un mese
        # qualcuno lo riprova credendo che sia rotto.
        return {"stato": "morto", "errore": "lento o irraggiungibile: %s" % e.reason}
    except Exception as e:                                    # noqa
        return {"stato": "morto", "errore": "%s" % e}


def scandaglia(prefissi, pausa):
    k = chiave()
    fatti = gia_provati()
    modelli = elenco_modelli(prefissi)
    da_fare = [m for m in modelli if m not in fatti]
    print("%d modelli con questi prefissi, %d gia' provati, %d da provare"
          % (len(modelli), len(modelli) - len(da_fare), len(da_fare)))
    conto = {"vivo": 0, "morto": 0, "muto": 0, "ragiona": 0}
    with io.open(ESITI, "a", encoding="utf-8") as f:
        for i, m in enumerate(da_fare, 1):
            r = prova(m, k)
            r["modello"] = m
            r["quando"] = time.strftime("%Y-%m-%dT%H:%M:%S")
            testo = json.dumps(r, ensure_ascii=False)
            f.write(testo if isinstance(testo, type(u"")) else testo.decode("utf-8"))
            f.write(u"\n")
            f.flush()          # su disco subito: il limite puo' arrivare al prossimo giro
            conto[r["stato"]] = conto.get(r["stato"], 0) + 1
            print("  %3d/%d  %-9s %-46s %s"
                  % (i, len(da_fare), r["stato"], m,
                     r.get("risposta", r.get("errore", ""))[:44]))
            time.sleep(pausa)
    print("\nvivi %d   morti %d   muti %d" % (conto["vivo"], conto["morto"], conto["muto"]))


def riepilogo(solo_vivi_di=None):
    fatti = gia_provati()
    if not fatti:
        return print("Nessun esito ancora. Lancia: sonda-modelli.py --prefissi nvidia,gemini")
    if solo_vivi_di:
        vivi = sorted(m for m, r in fatti.items()
                      if r["stato"] == "vivo" and m.startswith(solo_vivi_di + "/"))
        print("%d modelli vivi con prefisso %s:" % (len(vivi), solo_vivi_di))
        for m in vivi:
            print("   %s" % m)
        return
    per_prefisso = {}
    for m, r in fatti.items():
        p = m.split("/")[0]
        per_prefisso.setdefault(p, {"vivo": 0, "morto": 0, "muto": 0, "ragiona": 0})
        per_prefisso[p][r["stato"]] += 1
    print("%-14s %6s %8s %6s %6s" % ("provider", "vivi", "ragiona", "morti", "muti"))
    for p in sorted(per_prefisso):
        c = per_prefisso[p]
        print("%-14s %6d %8d %6d %6d" % (p, c["vivo"], c.get("ragiona",0), c["morto"], c["muto"]))
    print("\nDettaglio dei vivi: sonda-modelli.py --vivi <provider>")
    print("Esiti grezzi: %s" % ESITI)


if __name__ == "__main__":
    a = sys.argv[1:]
    if "--vivi" in a:
        riepilogo(a[a.index("--vivi") + 1])
    elif "--prefissi" in a:
        p = [x.strip() for x in a[a.index("--prefissi") + 1].split(",") if x.strip()]
        pausa = float(a[a.index("--pausa") + 1]) if "--pausa" in a else PAUSA
        scandaglia(p, pausa)
    else:
        riepilogo()

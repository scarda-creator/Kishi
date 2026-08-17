#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""compressione.py — misura quanto la compressione del gateway farebbe risparmiare
alla navicella, su testo vero della navicella. Dedalo, 2026-08-17.

PERCHE' ESISTE. OmniRoute ha dodici motori di compressione del prompt e Giuseppe
voleva capire se accenderli allunga il monte. La domanda non si risponde leggendo
la documentazione dei motori: si risponde passando **il nostro testo** dentro
`/api/compression/preview` e leggendo i token risparmiati. Questo script fa quello,
ed e' ripetibile: quando cambia il nostro materiale o una versione del gateway, si
rimisura invece di ricordarsi il verdetto.

LA MISURA DEL 17 AGOSTO 2026 (gateway acceso, stato `enabled: false`):

  campione                        lite  standard  rtk  stacked  caveman  aggr.  ultra
  messaggio di Giuseppe (it)        0%       0%    0%      0%       0%     0%    11%
  codice python (tool result)       0%       0%    0%      0%       0%     0%    12%
  nucleo HTML+LaTeX (tool result)   0%       6%    0%      6%       6%     0%     5%
  messaggio in inglese              0%       -     -       -        -      -     40%

VERDETTO: **si lascia spenta.** Tre ragioni, in ordine di peso.

  1. Sul nostro testo non c'e' niente da togliere. I motori `lite/standard/caveman`
     lavorano per regole di *filler*: convenevoli, esitazioni, giri di parole,
     articoli. Il nostro contesto e' codice, LaTeX e messaggi gia' asciutti — la
     resa e' 0-6%. Il 40% sull'inglese cortese misura quanto sono prolisse le
     frasi di cortesia, non quanto pesa il nostro lavoro.
  2. **Non esiste un language pack italiano.** Le lingue sono en, zh, pt-BR, es,
     de, fr, ja, id (`/api/compression/language-packs`). L'unico motore che morde
     l'italiano e' `ultra`, che non ha regole per lingua: taglia articoli e
     pronomi a forza. Rende l'11% e restituisce «che tu mi spiegassi» come «che
     spiegassi». Undici per cento non si paga con la grammatica di chi chiede.
  3. La leva sbagliata. Il monte di Claude Code si consuma soprattutto in
     **contesto riletto a ogni turno**, che vive di prompt caching: un prefisso
     stabile si paga a tariffa di cache. Riscrivere i messaggi a monte lavora
     contro quella stabilita' per guadagnare pochi punti percentuali sul testo.
     Il risparmio vero sta nel **non mandare** il contesto (routing per tipo di
     lavoro, materiale estratto invece che PDF interi), non nel comprimerlo.

Cosa cambierebbe il verdetto, cioe' quando rimisurare:
  - se arriva un language pack italiano (rileggi `/api/compression/language-packs`);
  - se la navicella comincia a mandare al gateway prosa lunga in inglese;
  - se si accende `llmlingua` o un motore a modello, che qui non e' configurato.

USO
    python 00-capitano/scripts/compressione.py            # stato + misura
    python 00-capitano/scripts/compressione.py --stato    # solo la configurazione
"""
import glob
import json
import sys

try:
    from urllib.request import Request, urlopen
    from urllib.error import URLError, HTTPError
except ImportError:
    from urllib2 import Request, urlopen, URLError, HTTPError

BASE = "http://localhost:20128"
PASSWORD = "4110"
MODI = ["lite", "standard", "rtk", "stacked", "caveman", "aggressive", "ultra"]


def entra():
    req = Request(BASE + "/api/auth/login",
                  data=json.dumps({"password": PASSWORD}).encode("utf-8"),
                  headers={"Content-Type": "application/json"})
    try:
        return urlopen(req, timeout=30).headers.get("Set-Cookie", "").split(";")[0]
    except URLError as e:
        sys.exit("gateway irraggiungibile: %s" % e.reason)


def api(percorso, metodo="GET", corpo=None, cookie=None):
    dati = json.dumps(corpo).encode("utf-8") if corpo is not None else None
    req = Request(BASE + percorso, data=dati)
    req.get_method = lambda: metodo
    req.add_header("Content-Type", "application/json")
    if cookie:
        req.add_header("Cookie", cookie)
    try:
        return json.loads(urlopen(req, timeout=90).read().decode("utf-8", "replace") or "{}")
    except HTTPError as e:
        return {"_errore": "%s %s" % (e.code, e.read()[:200].decode("utf-8", "replace"))}
    except URLError as e:
        sys.exit("gateway irraggiungibile: %s" % e.reason)


def leggi(percorso, limite=6000):
    try:
        return open(percorso, encoding="utf-8", errors="replace").read()[:limite]
    except Exception:
        return ""


def campioni():
    """Testo vero: un messaggio come li scrive Giuseppe, del codice, un nucleo."""
    c = [(u"messaggio di Giuseppe (it)",
          u"Ciao, avrei bisogno per favore che tu mi spiegassi in modo molto chiaro il "
          u"teorema della divergenza, magari partendo dai primi principi e senza saltare "
          u"i passaggi. Vorrei capire davvero perche' il flusso attraverso la superficie "
          u"chiusa e' uguale all'integrale della divergenza sul volume, non solo la "
          u"formula. Grazie mille, sei sempre molto d'aiuto.")]
    cod = leggi("00-capitano/scripts/catene.py")
    if cod:
        c.append((u"codice python (tool result)", cod))
    nuclei = sorted(glob.glob("02-accademico/percorso-matematica/nuclei/*.html"))
    if len(nuclei) > 2:
        c.append((u"nucleo HTML+LaTeX (tool result)", leggi(nuclei[2])))
    return c


def stato(cookie):
    s = api("/api/settings/compression", cookie=cookie)
    lp = api("/api/compression/language-packs", cookie=cookie)
    accesi = [k for k, v in (s.get("engines") or {}).items() if v.get("enabled")]
    print("compressione globale: %s (defaultMode=%s)" % (
        "ACCESA" if s.get("enabled") else "spenta", s.get("defaultMode")))
    print("motori con flag acceso: %s" % (", ".join(accesi) or "nessuno"))
    print("lingue con pack di regole: %s" % ", ".join(lp.get("languages", [])))
    print("italiano fra le lingue: %s" % ("SI" if "it" in lp.get("languages", []) else "NO"))
    return s


def misura(cookie):
    print("\n%-34s %s" % ("campione", "  ".join("%-10s" % m for m in MODI)))
    for nome, testo in campioni():
        celle = []
        for modo in MODI:
            d = api("/api/compression/preview", "POST",
                    {"messages": [{"role": "user", "content": testo}], "mode": modo},
                    cookie=cookie)
            celle.append("ERR" if "_errore" in d else "%s%%" % d.get("savingsPct", 0))
        print("%-34s %s" % (nome, "  ".join("%-10s" % c for c in celle)))


if __name__ == "__main__":
    ck = entra()
    stato(ck)
    if "--stato" not in sys.argv:
        misura(ck)

#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""protezione-limiti.py — accende la protezione dai rate limit su tutte le
connessioni del gateway, e la rilegge. Dedalo, 2026-08-17.

COS'E'. `rateLimitProtection` e' la funzione con cui OmniRoute **rallenta da solo**
avvicinandosi al limite di un provider invece di correre contro il muro: e' un
limitatore per connessione (coda con `minTime` e `reservoir`) che impara i tetti
veri dalle risposte del provider (`learnedRateLimits`, `parseRetryAfterFromBody`)
e li rimette in piedi al riavvio. E' esattamente il compito descritto per Teia,
gia' costruito dentro il gateway e mai acceso: era **spento su tutte e nove** le
connessioni, default della colonna DB `rate_limit_protection INTEGER DEFAULT 0`.

PERCHE' NON SI ACCENDEVA, cioe' l'errore che ho fatto il 17 agosto. Avevo provato
`PUT /api/providers/{id}` («No valid fields to update»), `PATCH` (405), e il PUT
dell'oggetto intero (accettato, non scritto), e ne avevo concluso «si accende solo
a mano nella dashboard». Sbagliato due volte:

  1. Lo schema di update dei provider (`ProviderConnectionCreate`, e la whitelist
     vera in `src/shared/validation/schemas/provider.ts`) **non contiene** quel
     campo: nessuna forma di quella chiamata poteva funzionare. Non era un
     problema di verbo o di payload.
  2. La rotta giusta e' un'altra, e non e' nell'OpenAPI del gateway (che dichiara
     `/api/rate-limits` come sola GET). L'ho trovata guardando cosa fa la
     dashboard: **POST /api/rate-limits {connectionId, enabled}**.

E c'e' una ragione per cui doveva essere una rotta separata, che il PUT non
avrebbe comunque coperto: quel POST fa **due** cose — `enableRateLimitProtection()`
accende il limitatore **in memoria**, e solo dopo persiste il flag nel DB. Scrivere
la colonna e basta avrebbe dato un flag vero e un limitatore spento fino al
riavvio: la peggiore delle tre, perche' e' quella che si legge come fatta.

Nota di metodo, che e' la lezione vera: il campo era assente dallo spec e assente
dalla UI in `src/`, e da li' avevo dedotto «non si puo' da API». La deduzione era
sbagliata perche' **guardavo il contratto invece dell'implementazione**. Un
endpoint non elencato puo' esistere; e' il gemello di quello che avevo gia'
imparato sui modelli (un modello elencato non e' un modello disponibile). Si
guarda chi lo chiama, non chi lo dichiara.

USO
    python 00-capitano/scripts/protezione-limiti.py            # mostra
    python 00-capitano/scripts/protezione-limiti.py --accendi  # applica e rilegge
    python 00-capitano/scripts/protezione-limiti.py --verifica  # solo controllo
"""
import json
import sys

try:
    from urllib.request import Request, urlopen
    from urllib.error import URLError, HTTPError
except ImportError:
    from urllib2 import Request, urlopen, URLError, HTTPError

BASE = "http://localhost:20128"
PASSWORD = "4110"


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
    req.add_header("User-Agent", "navicella-protezione-limiti/1.0")
    if cookie:
        req.add_header("Cookie", cookie)
    try:
        r = urlopen(req, timeout=40)
        return json.loads(r.read().decode("utf-8", "replace") or "{}")
    except HTTPError as e:
        sys.exit("%s %s -> HTTP %s: %s" % (metodo, percorso, e.code,
                                           e.read()[:300].decode("utf-8", "replace")))
    except URLError as e:
        sys.exit("gateway irraggiungibile: %s" % e.reason)


def connessioni(cookie):
    return api("/api/providers", cookie=cookie).get("connections", [])


def mostra(cookie):
    stato = {c.get("connectionId"): c
             for c in api("/api/rate-limits", cookie=cookie).get("connections", [])}
    spente = 0
    for c in connessioni(cookie):
        acceso = bool(c.get("rateLimitProtection"))
        spente += 0 if acceso else 1
        run = stato.get(c["id"], {})
        vivo = "limitatore attivo" if run.get("active") else "limitatore in attesa del primo uso"
        print("  %-15s protezione=%-5s  %s" % (c.get("provider"), "SI" if acceso else "NO",
                                               vivo if acceso else "-"))
    return spente


def accendi(cookie):
    fatte = 0
    for c in connessioni(cookie):
        if c.get("rateLimitProtection"):
            continue
        api("/api/rate-limits", "POST",
            {"connectionId": c["id"], "enabled": True}, cookie=cookie)
        fatte += 1
        print("  acceso: %s" % c.get("provider"))
    # La rilettura non e' cerimonia: il PUT dei provider rispondeva 200 senza
    # scrivere nulla, e senza rileggere ci avrei creduto.
    spente = mostra(cookie)
    if spente:
        sys.exit("ATTENZIONE: %d connessioni risultano ancora spente dopo l'accensione" % spente)
    print("accese %d connessioni; verificato: nessuna spenta." % fatte)


if __name__ == "__main__":
    ck = entra()
    if "--accendi" in sys.argv:
        accendi(ck)
    else:
        spente = mostra(ck)
        if "--verifica" in sys.argv and spente:
            sys.exit("%d connessioni senza protezione" % spente)

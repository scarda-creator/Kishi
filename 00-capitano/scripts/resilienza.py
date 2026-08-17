#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""resilienza.py — perche' il 429 fermava la navicella, e cosa lo impedisce. Dedalo, 2026-08-17.

IL GUASTO. Il 16 e il 17 agosto, col ponte alzato, Giuseppe ha esaurito il monte
Claude e il gateway gli ha **riportato in faccia** l'errore invece di passare al
modello successivo:

    API Error: Request rejected (429) - [claude/claude-opus-5] [429]:
    This request would exceed your account's rate limit. (reset after 58m 8s)

Cioe' esattamente cio' che le catene esistono per impedire. Due volte.

COSA SI E' MISURATO PRIMA DI TOCCARE NULLA. Il sospetto ovvio era «il fallback e'
rotto». E' falso: una catena con due anelli garantiti guasti in testa
(`groq/...` che da' 404, `oc/gpt-5.2` che da' 401) e claude-haiku sotto **ha
risposto da haiku**, con la configurazione di default. Su 401 e 404 la catena
scavalca benissimo. Quindi il guasto e' specifico del 429, e non sta nelle catene:
sta nei parametri globali di resilienza, che nessuno aveva mai aperto.

LA CATENA CAUSALE, letta da `/api/resilience` e `/api/settings/combo-defaults`:

  1. `failoverBeforeRetry` non compare nei default delle catene: vale falso.
     Al 429 il gateway **ririprova lo stesso modello** invece di scendere.
  2. La connessione va in cooldown, e qui sta il colpo mortale:
     `comboCooldownWait.enabled = true`, `maxWaitMs 90000`, `maxAttempts 5`,
     `budgetMs 300000`. La catena, trovando l'anello in cooldown, **si mette ad
     aspettare che si liberi** invece di usare l'anello sotto. Fino a cinque
     minuti di bilancio.
  3. `waitForCooldown.enabled = true`, `maxRetries 3`, `maxRetryWaitSec 30`: altre
     tre attese sullo stesso anello.
  4. Bilancio esaurito -> il 429 esce al client.

E' una politica sensata per un rate limit di sessanta secondi: aspetta un attimo e
riprova, cosi' non sprechi il modello buono. E' una catastrofe per un monte che
torna fra **cinquantotto minuti**: si aspetta il massimo consentito, si fallisce
lo stesso, e nel frattempo il modello vivo che stava un gradino sotto non e' mai
stato interrogato.

C'e' un aggravante letto nella stessa risposta: `connectionCooldown.oauth.
useUpstreamRetryHints = false`. Claude e' una connessione oauth e **dice** quanto
manca al reset ("58m 8s"); il gateway butta via l'informazione e usa il proprio
backoff da 5 secondi. Quindi ripicchia su una porta che sa chiusa per un'ora.

COSA CAMBIA QUESTO FILE, e perche' ogni voce.

  comboCooldownWait.enabled -> false
      La correzione centrale. Una catena non aspetta mai un anello raffreddato:
      scende. Aspettare e' la negazione di cio' per cui una catena esiste.

  waitForCooldown.enabled -> false
      Stessa ragione un gradino piu' in basso: nessuna attesa sul singolo
      tentativo. Se questo anello non puo' servire ora, ce n'e' un altro.

  connectionCooldown.oauth.useUpstreamRetryHints -> true
      Quando Claude dichiara «58 minuti», gli si crede. La connessione resta
      fredda per il tempo vero invece di essere ritentata ogni pochi secondi.
      Effetto collaterale desiderato: si smette di bussare a una porta chiusa,
      che e' anche il modo di non peggiorare la propria posizione col provider.

  providerCooldown.enabled -> true (5s -> 300s)
      Il raffreddamento progressivo per provider era spento. Acceso, un provider
      che sta fallendo viene messo da parte per un tempo crescente invece di
      essere ripescato a ogni richiesta.

Cio' che NON si tocca, e va detto: `requestQueue` (60 richieste al minuto, 6
concorrenti) resta com'e'. E' la valvola che impedisce alla navicella di sparare
raffiche, e non c'entra col guasto.

RIMANE UNA COSA CHE QUESTO FILE NON PUO' FARE. `rateLimitProtection` e' falso su
tutte e nove le connessioni: e' la funzione che rallenta da sola avvicinandosi al
limite — esattamente il compito che Giuseppe ha descritto per Teia, gia' costruito
dentro il gateway e mai acceso. Si accende per connessione, non qui; ci pensa
`catene.py --protezione`.

Uso:
  resilienza.py            mostra la configurazione viva, voce per voce
  resilienza.py --applica  scrive le correzioni qui sopra
  resilienza.py --verifica rilegge e conferma che siano rimaste scritte
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

# Le correzioni, come dato. Ogni voce e' un percorso dentro il documento di
# configurazione e il valore che deve avere. Tenerle qui invece che in una serie
# di chiamate significa che `--verifica` puo' controllarle una per una senza
# ripetere la conoscenza.
CORREZIONI = [
    (("comboCooldownWait", "enabled"), False,
     u"la catena non aspetta un anello raffreddato: scende"),
    (("waitForCooldown", "enabled"), False,
     u"nessuna attesa sul singolo tentativo"),
    (("connectionCooldown", "oauth", "useUpstreamRetryHints"), True,
     u"se Claude dice 58 minuti, gli si crede"),
    (("providerCooldown", "enabled"), True,
     u"raffreddamento progressivo per provider, era spento"),
]


def api(percorso, metodo="GET", corpo=None, cookie=None):
    dati = json.dumps(corpo).encode("utf-8") if corpo is not None else None
    req = Request(BASE + percorso, data=dati)
    req.get_method = lambda: metodo
    req.add_header("Content-Type", "application/json")
    req.add_header("User-Agent", "navicella-resilienza/1.0")
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


def entra():
    req = Request(BASE + "/api/auth/login",
                  data=json.dumps({"password": PASSWORD}).encode("utf-8"),
                  headers={"Content-Type": "application/json"})
    try:
        return urlopen(req, timeout=30).headers.get("Set-Cookie", "").split(";")[0]
    except URLError as e:
        sys.exit("gateway irraggiungibile: %s" % e.reason)


def pesca(doc, percorso):
    """Il valore in fondo al percorso, o la sentinella se il ramo non esiste.

    Previene il guasto peggiore di uno script di configurazione: dichiarare
    'applicato' un valore finito in un ramo che il server non ha, e quindi
    ignorato in silenzio."""
    x = doc
    for p in percorso:
        if not isinstance(x, dict) or p not in x:
            return u"(assente)"
        x = x[p]
    return x


def innesta(doc, percorso, valore):
    x = doc
    for p in percorso[:-1]:
        x = x.setdefault(p, {})
    x[percorso[-1]] = valore


def mostra(cookie=None):
    ck = cookie or entra()
    d = api("/api/resilience", cookie=ck)
    print(u"configurazione viva del gateway:\n")
    for percorso, atteso, perche in CORREZIONI:
        ora = pesca(d, percorso)
        segno = "ok " if ora == atteso else "DA CAMBIARE"
        print(u"  %-11s %-52s = %-9s  (deve essere %s)" %
              (segno, ".".join(percorso), ora, atteso))
        print(u"              %s" % perche)
    cw = d.get("comboCooldownWait", {})
    print(u"\n  per contesto, quanto si aspettava prima di arrendersi:")
    print(u"    fino a %s ms per tentativo, %s tentativi, bilancio %s ms"
          % (cw.get("maxWaitMs"), cw.get("maxAttempts"), cw.get("budgetMs")))
    return d


def applica():
    ck = entra()
    d = api("/api/resilience", cookie=ck)
    da_fare = [(p, v, w) for p, v, w in CORREZIONI if pesca(d, p) != v]
    if not da_fare:
        print(u"gia' tutto a posto: nessuna correzione da scrivere.")
        return
    modifica = {}
    for percorso, valore, _ in da_fare:
        innesta(modifica, percorso, valore)
        print(u"scrivo  %-52s -> %s" % (".".join(percorso), valore))
    api("/api/resilience", "PATCH", modifica, ck)
    # Non ci si fida della 200: si rilegge. Un PATCH accettato e non applicato e'
    # il modo in cui una correzione diventa una convinzione sbagliata.
    verifica(ck)


def verifica(cookie=None):
    ck = cookie or entra()
    d = api("/api/resilience", cookie=ck)
    guasti = [(p, v, pesca(d, p)) for p, v, _ in CORREZIONI if pesca(d, p) != v]
    if not guasti:
        print(u"\nverificato: tutte e %d le correzioni sono scritte sul gateway." % len(CORREZIONI))
        return 0
    print(u"\nNON APPLICATE (il gateway ha accettato ma non ha scritto):")
    for percorso, atteso, ora in guasti:
        print(u"   %-52s = %s, doveva essere %s" % (".".join(percorso), ora, atteso))
    return 1


if __name__ == "__main__":
    a = sys.argv[1:]
    if "--applica" in a:
        applica()
    elif "--verifica" in a:
        sys.exit(verifica())
    else:
        mostra()

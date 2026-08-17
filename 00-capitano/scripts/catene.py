#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""catene.py — le catene di modelli della navicella. Dedalo, 2026-08-16.

Perche' esiste, e perche' e' codice invece che click nella dashboard. Una
configurazione fatta a mano nell'interfaccia non e' ricostruibile: nessuno sa piu'
perche' un modello sta al terzo posto invece che al quinto, e se il gateway va
perso si riparte da zero. Qui le catene sono **dato dichiarato**, con la ragione
scritta accanto, e questo script le spinge sul gateway. Si rilancia e tornano
identiche.

Il principio, ed e' la richiesta di Giuseppe del 16 agosto: **le catene non si
ordinano solo per potenza, ma per scopo.** Un modello ottimo per il codice puo'
essere mediocre per la scrittura densa; un modello piccolo con un buon prompt di
sistema batte un modello medio senza. Quindi ogni catena ha il suo ordine **e il
suo prompt di sistema**.

La lezione che ha dato forma a questo file, e che va letta prima di aggiungere un
modello: **un modello elencato non e' un modello disponibile.** Il gateway pubblica
centinaia di voci `oc/` — GPT-5.x, Gemini 3.x, Grok, Kimi, GLM, e persino Claude —
e la prima stesura di queste catene le usava. Provate una per una, rispondono tutte
401: la connessione OpenCode risulta ATTIVA nella dashboard e non eroga nulla.
Quindi qui entra solo cio' che ha risposto a una richiesta vera, e ogni scarto sta
scritto sotto col motivo. Si aggiunge un modello dopo averlo interrogato, mai
dopo averlo letto in un elenco.

La seconda lezione, del 17 agosto, e' costata a Giuseppe due blocchi di lavoro e
ha cambiato l'ORDINE di ogni catena: **un anello non e' un modello, e' una
quota.** claude-opus-5, claude-sonnet-5 e claude-haiku stanno sulla stessa
connessione e sullo stesso monte dell'abbonamento. Metterne due in cima, come
faceva la prima stesura, significa che al primo 429 la catena perde due anelli
nello stesso istante — e tre, se sotto c'e' anche haiku. Da qui la regola:
**sotto un anello Claude non ci va mai un altro anello Claude.** Il secondo posto
di ogni catena appartiene a una connessione diversa, sempre.

Uso:
  catene.py --stato       cosa c'e' oggi sul gateway
  catene.py --scrivi      crea/aggiorna tutte le catene, con la loro configurazione
  catene.py --prova       interroga ogni catena e riporta chi ha risposto davvero
  catene.py --diagnosi    interroga OGNI anello: scova le teste morte e i modelli muti
  catene.py --protezione  accende rateLimitProtection su ogni connessione
"""
import io
import json
import os
import sys

try:
    from urllib.request import Request, urlopen
    from urllib.error import URLError, HTTPError
except ImportError:
    from urllib2 import Request, urlopen, URLError, HTTPError

BASE = "http://localhost:20128"
SEGRETO = os.path.join(os.path.expanduser("~"), ".claude", "navicella-ponte.json")
PASSWORD = "4110"

# --- lo stile della navicella, che ogni prompt di sistema porta con se' ---------
# Serve perche' i modelli sotto Claude non hanno letto CLAUDE.md: senza questo,
# un llama risponde con "Certo!" e i bullet gonfi che Giuseppe rifiuta.
STILE = (
    "Scrivi in italiano. Mai aprire con 'Certo', 'Ottima domanda', 'Ecco a te'. "
    "Mai ripetere la domanda, mai chiudere con un riepilogo di cio' che si e' appena "
    "letto. Niente emoji, grassetti parsimoniosi, niente bullet con frasi monche. "
    "Prima l'architettura in una o due frasi, poi il merito. Sempre il perche' sotto "
    "la formula. Se non sai, dillo: mai inventare. Sintesi sopra esaustivita'."
)

# --- cosa e' stato PROVATO e SCARTATO, il 16-08-2026 ---------------------------
# Va tenuto scritto, altrimenti fra un mese qualcuno rimette in catena un modello
# che non risponde, guardando l'elenco invece dell'esito.
#
#   tutto `oc/*`            401 "Missing API key". La connessione OpenCode risulta
#                           ATTIVA nella dashboard, con testStatus 'active', e non
#                           eroga nulla. Centinaia di modelli (GPT-5.x, Gemini 3.x,
#                           Grok, Kimi, GLM) sono voci di catalogo, non capacita'.
#                           Finche' quella connessione non e' riparata, non entrano.
#   oc/*-high, -low, ...    "Model ... is not supported": i suffissi di sforzo non
#                           esistono su questa via.
#   groq/openai/gpt-oss-20b risposta VUOTA con 32 token consumati. Idem il 120b.
#                           E' il caso peggiore: non fallisce, spende e non dice.
#   groq/qwen/qwen3.6-27b   risponde ma perde il proprio <think> dentro il testo:
#                           inutilizzabile finche' non si filtra a valle.
#   nvidia/poolside/laguna-xs-2.1  INCOSTANTE: risponde entro 25s alla sonda e va in
#                           timeout a 45s nella diagnosi delle catene. Un anello che
#                           passa a volte e' peggio di uno morto: il guasto si
#                           presenta a caso e nessuno lo riproduce.
#   nvidia/nemotron-3-super-120b  risponde, ma versa il proprio ragionamento nel testo
#                           ("Okay, the user asked me to..."). Usabile solo dove
#                           l'uscita viene riletta da qualcuno, non in automatico.
#   hy3-free                risposta vuota. E' il ripiego di default del gateway
#                           quando una catena non e' dichiarata: il motivo per cui
#                           queste catene esistono.
#   tutto `groq/*`          CADUTO fra il 16 e il 17 agosto: 404 su ogni modello,
#                           llama-3.3-70b e llama-3.1-8b compresi. La connessione
#                           risulta `enabled: false` in /api/rate-limits: non e' un
#                           guasto dei modelli, e' la connessione spenta. Erano SEI
#                           anelli su venticinque, e uno era la testa di nav-estrae.
#                           Rientrano quando la connessione torna, non prima.
#   nvidia/deepseek-v4-flash-0731  timeout, due volte, in due giorni. Stessa regola
#                           di laguna: un anello incostante e' peggio di uno morto.
#
# Verificati vivi il 17-08: claude-opus-5, claude-sonnet-5, claude-haiku-4-5-20251001,
# nvidia/nvidia/nemotron-3-ultra-550b-a55b, nvidia/z-ai/glm-5.2,
# gemini/gemini-flash-lite-latest. Rispondono ma versano il ragionamento nel testo,
# quindi usabili solo in coda: nemotron-3-super-120b, nemotron-3.5-lightning-30b.
#
# LE QUOTE, che contano piu' dei nomi. claude-opus-5 / claude-sonnet-5 /
# claude-haiku-4-5 = UNA sola quota (l'abbonamento di Giuseppe). nvidia/* = una
# seconda. gemini/* = una terza. Sono tre panieri, non nove modelli: l'ordine di
# ogni catena qui sotto alterna i panieri apposta.

# --- la configurazione di ogni catena, ed e' la correzione del 17 agosto -------
# Nessuna di queste manopole era impostata: le catene giravano coi default del
# gateway, e i default sono "aspetta che l'anello guarisca" invece di "usa quello
# sotto". Vedi resilienza.py per la catena causale completa.
CONFIGURAZIONE = {
    # La manopola centrale: al primo errore SCENDI, non ririprovare lo stesso.
    # Con essa a falso, un 429 con reset a un'ora veniva ritentato sul posto fino
    # a esaurire il bilancio, e poi riportato al client. E' il guasto del 16-17/08.
    "failoverBeforeRetry": True,
    # Un solo tentativo per anello: se questo non serve ora, ce n'e' un altro sotto.
    # Ritentare ha senso quando i modelli scarseggiano; qui scarseggia il tempo.
    "maxRetries": 1,
    "retryDelayMs": 1500,
    # Fra un anello e il successivo non si aspetta: la discesa dev'essere gratis.
    "fallbackDelayMs": 0,
    # L'affinita' di sessione tiene le richieste sullo stesso anello per riusare la
    # cache del prompt. E' un guadagno reale finche' l'anello e' vivo, e una zavorra
    # quando e' esaurito: si resta appiccicati al modello che ha appena detto 429.
    "disableSessionStickiness": True,
}

CATENE = [
    {
        "nome": "nav-ragiona",
        "perche": "architettura, giudizio, decisioni: e' il lavoro dei due poli attivi. "
                  "La testa e' il modello piu' capace disponibile. Sotto NON c'e' piu' "
                  "claude-sonnet, che condivideva la quota di opus e cadeva insieme a "
                  "lui: il secondo anello e' il piu' grosso modello di un'altra "
                  "connessione, e sonnet scala al terzo posto come rientro se il monte "
                  "e' tornato.",
        "modelli": ["claude-opus-5",
                    "nvidia/nvidia/nemotron-3-ultra-550b-a55b",
                    "claude-sonnet-5",
                    "nvidia/z-ai/glm-5.2",
                    "gemini/gemini-flash-lite-latest"],
        "prompt": "Sei l'intelligenza di una navicella personale che assiste uno studente "
                  "di Fisica. Il tuo compito qui e' ragionare su architettura e decisioni: "
                  "porta il quadro prima del dettaglio, motiva in funzione della traiettoria "
                  "e non del task di oggi, e di' no quando e' giusto, con argomento. " + STILE,
    },
    {
        "nome": "nav-scrive",
        "perche": "scrittura densa accademica: capitoli, derivazioni, unita' di quiz. "
                  "La qualita' conta piu' della velocita', quindi la testa e' alta. "
                  "Stesso rimescolamento di nav-ragiona: due anelli Claude di fila "
                  "erano un anello solo travestito da due.",
        "modelli": ["claude-opus-5",
                    "nvidia/nvidia/nemotron-3-ultra-550b-a55b",
                    "claude-sonnet-5",
                    "nvidia/z-ai/glm-5.2",
                    "gemini/gemini-flash-lite-latest"],
        "prompt": "Scrivi materiale di studio per un esame universitario di Fisica o "
                  "Matematica. Ogni affermazione numerica va derivata, non citata a "
                  "memoria: se ricalcoli un coefficiente e non torna con la fonte, "
                  "dichiaralo invece di allinearti. LaTeX con $...$. " + STILE,
    },
    {
        "nome": "nav-codice",
        "perche": "codice e script. La testa DOVREBBE essere un modello specializzato "
                  "e ora ce ne sono due, trovati provando: glm-5.2 e "
                  "laguna di poolside, entrambi via NVIDIA. Claude resta in testa finche' "
                  "non si misura che uno dei due lo batte sul codice della navicella. "
                  "Qui l'alternanza c'era gia' per fortuna, non per progetto: ora e' "
                  "voluta, e deepseek esce perche' va in timeout.",
        "modelli": ["claude-sonnet-5", "nvidia/z-ai/glm-5.2",
                    "claude-opus-5",
                    "nvidia/nvidia/nemotron-3-ultra-550b-a55b",
                    "gemini/gemini-flash-lite-latest"],
        "prompt": "Scrivi codice per la navicella. Solo libreria standard salvo indicazione "
                  "contraria. Ogni funzione porta scritto **quale guasto previene**, non "
                  "cosa fa. Il codice deve fallire chiuso: se non puo' garantire il "
                  "risultato, non deve scrivere nulla. " + STILE,
    },
    {
        "nome": "nav-estrae",
        "perche": "il lavoro meccanico che oggi brucia il monte: estrarre, contare, "
                  "deduplicare, normalizzare. Qui la testa e' il modello piu' economico, "
                  "perche' la risposta giusta e' verificabile e non serve potenza. La "
                  "vecchia testa (groq/llama-3.1-8b) e' caduta col resto di groq: la "
                  "catena girava gia' su gemini senza che nessuno lo sapesse. Lightning "
                  "scende in fondo perche' versa il proprio ragionamento nel testo, e "
                  "qui l'uscita non la rilegge nessuno.",
        "modelli": ["gemini/gemini-flash-lite-latest",
                    "nvidia/z-ai/glm-5.2",
                    "claude-haiku-4-5-20251001",
                    "nvidia/nvidia/nemotron-3.5-lightning-30b-a3b"],
        "prompt": "Estrai e riporta fedelmente. Non interpretare, non riassumere se non "
                  "richiesto, non aggiungere nulla che non sia nel testo di partenza. Se "
                  "un dato manca, scrivi che manca invece di dedurlo. Rispondi solo con "
                  "cio' che e' stato chiesto, senza cornice.",
    },
    {
        "nome": "nav-cerca",
        "perche": "ricerca e lettura di molto materiale: servirebbe una finestra molto "
                  "grande (gemini-3.1-pro, 1M) ma non e' erogabile oggi; si tiene un "
                  "modello medio-alto finche' non si collega un provider a contesto lungo.",
        "modelli": ["claude-sonnet-5",
                    "nvidia/nvidia/nemotron-3-ultra-550b-a55b",
                    "gemini/gemini-flash-lite-latest",
                    "claude-haiku-4-5-20251001",
                    "nvidia/nvidia/nemotron-3-super-120b-a12b"],
        "prompt": "Cerchi e riporti fonti. Ogni dato porta la sua fonte e la data a cui si "
                  "riferisce. Dove non hai potuto verificare, scrivilo esplicitamente: un "
                  "'probabilmente' senza fonte vale zero. " + STILE,
    },
]


def chiave():
    if not os.path.isfile(SEGRETO):
        sys.exit("Chiave assente. Prima: ponte.py --chiave sk-...")
    return json.loads(io.open(SEGRETO, encoding="utf-8").read())["gateway_key"]


def api(percorso, metodo="GET", corpo=None, cookie=None):
    dati = json.dumps(corpo).encode("utf-8") if corpo is not None else None
    req = Request(BASE + percorso, data=dati)
    req.get_method = lambda: metodo
    req.add_header("Content-Type", "application/json")
    req.add_header("User-Agent", "navicella-catene/1.0")
    if cookie:
        req.add_header("Cookie", cookie)
    try:
        r = urlopen(req, timeout=30)
        return json.loads(r.read().decode("utf-8", "replace") or "{}"), r.headers
    except HTTPError as e:
        sys.exit("%s %s -> HTTP %s: %s" % (metodo, percorso, e.code,
                                           e.read()[:300].decode("utf-8", "replace")))
    except URLError as e:
        sys.exit("gateway irraggiungibile: %s" % e.reason)


def entra():
    """Il gateway autentica la gestione con un cookie di sessione, non con la chiave
    dei modelli: sono due porte diverse e vanno tenute distinte."""
    _, h = api("/api/auth/login", "POST", {"password": PASSWORD})
    c = h.get("Set-Cookie", "")
    return c.split(";")[0] if c else None


def interroga(modello, k):
    corpo = json.dumps({"model": modello, "max_tokens": 200,
                        "messages": [{"role": "user", "content": "Scrivi la parola: vivo"}]
                        }).encode("utf-8")
    req = Request(BASE + "/v1/messages", data=corpo, headers={
        "Content-Type": "application/json", "anthropic-version": "2023-06-01",
        "x-api-key": k, "User-Agent": "navicella-catene/1.0"})
    try:
        d = json.loads(urlopen(req, timeout=45).read().decode("utf-8", "replace"))
        blocchi = d.get("content", [])
        testo = "".join(b.get("text", "") for b in blocchi).strip()
        # Un modello che emette solo un blocco di ragionamento NON e' muto: e'
        # vivo e ha speso il tetto pensando. Chiamarlo muto e' misurare la
        # grandezza sbagliata — errore commesso il 16-08 con max_tokens=24.
        if not testo and blocchi:
            testo = "[solo ragionamento, %d blocchi]" % len(blocchi)
        return d.get("model"), testo
    except Exception as e:                                        # noqa
        return None, "%s" % e


def scrivi():
    ck = entra()
    esistenti = {c["name"]: c["id"] for c in api("/api/combos", cookie=ck)[0]["combos"]}
    for cat in CATENE:
        config = dict(CONFIGURAZIONE)
        config["systemPrompt"] = cat["prompt"]
        corpo = {"models": cat["modelli"], "strategy": "priority", "config": config}
        if cat["nome"] in esistenti:
            api("/api/combos/" + esistenti[cat["nome"]], "PUT", corpo, ck)
            print("aggiornata  %-14s %d modelli" % (cat["nome"], len(cat["modelli"])))
        else:
            corpo["name"] = cat["nome"]
            api("/api/combos", "POST", corpo, ck)
            print("creata      %-14s %d modelli" % (cat["nome"], len(cat["modelli"])))
    # Si rilegge: un PUT accettato e non applicato lascerebbe credere che il
    # failover sia acceso mentre non lo e' — ed e' esattamente l'illusione che e'
    # costata a Giuseppe due blocchi di lavoro.
    print()
    manca = 0
    for c in api("/api/combos", cookie=ck)[0]["combos"]:
        if c["name"] not in {x["nome"] for x in CATENE}:
            continue
        cfg = c.get("config") or {}
        # Il gateway scarta i valori falsi quando salva: `fallbackDelayMs: 0` non
        # riappare mai. Non e' un guasto — zero e' gia' il suo default — ma un
        # verificatore che lo ignora griderebbe al lupo a ogni scrittura. Quindi
        # assente e falso valgono uguale, e cio' che conta davvero (failover,
        # stickiness) viene comunque controllato per identita'.
        assenti = [k for k, v in CONFIGURAZIONE.items()
                   if cfg.get(k) != v and not (v in (0, False) and k not in cfg)]
        manca += len(assenti)
        print("  %-14s configurazione %s" % (
            c["name"], "scritta" if not assenti else "INCOMPLETA: manca %s" % ", ".join(assenti)))
    if manca:
        print("\nATTENZIONE: il gateway ha accettato ma non ha scritto tutto.")


def protezione():
    """Accende `rateLimitProtection` su ogni connessione.

    Che cos'e', e perche' e' importante piu' di quanto sembri: e' la funzione che
    rallenta da sola avvicinandosi al limite di una connessione, invece di correre
    contro il muro e prendere il 429. E' il compito che Giuseppe ha descritto per
    Teia — la guardia dei token — e si scopre che esiste gia' dentro il gateway, ed
    era spenta su tutte e nove le connessioni."""
    ck = entra()
    d, _ = api("/api/rate-limits", cookie=ck)
    fatte, saltate = [], []
    for c in d.get("connections", []):
        if c.get("rateLimitProtection"):
            continue
        ident = c.get("connectionId")
        try:
            api("/api/providers/" + ident, "PATCH", {"rateLimitProtection": True}, ck)
            fatte.append(c.get("provider"))
        except SystemExit as e:                                       # api() esce
            saltate.append((c.get("provider"), "%s" % e))
    d2, _ = api("/api/rate-limits", cookie=ck)
    for c in d2.get("connections", []):
        print("  %-16s protezione %s" % (c.get("provider"),
                                         "ACCESA" if c.get("rateLimitProtection") else "spenta"))
    if saltate:
        print("\nnon accese: %s" % ", ".join("%s (%s)" % s for s in saltate))


def stato():
    ck = entra()
    for c in api("/api/combos", cookie=ck)[0]["combos"]:
        m = [x.get("model") for x in c.get("models", [])]
        p = (c.get("config") or {}).get("systemPrompt")
        print("%-14s %s" % (c["name"], " -> ".join(m) or "(vuota)"))
        print("               prompt di sistema: %s" % ("si', %d caratteri" % len(p) if p else "NO"))


def prova():
    k = chiave()
    for cat in CATENE:
        servito, testo = interroga(cat["nome"], k)
        print("%-14s -> %-32s %r" % (cat["nome"], servito or "FALLITA", testo[:60]))


def diagnosi():
    """Interroga OGNI anello di OGNI catena, uno per uno.

    Perche' esiste, e perche' non basta `--prova`. Una catena che risponde non dice
    nulla sulla propria salute: se la testa e' morta, il ripiego risponde lo stesso e
    tutto sembra a posto — semplicemente stai usando un modello piu' debole di quello
    che credevi, per sempre, senza saperlo. Il 16 agosto e' successo esattamente
    questo su due catene su cinque.

    E c'e' un motivo piu' duro. Il gateway ha un proprio test di connessione, e quel
    test **mente**: su OpenCode dichiarava `valid: true, diagnosis: ok` mentre ogni
    singolo modello rispondeva 401. Un pallino verde nella dashboard non e' una prova;
    l'unica prova e' una richiesta vera a quel modello. Questo comando la fa."""
    k = chiave()
    morti = []
    for cat in CATENE:
        print("\n%s" % cat["nome"])
        for i, m in enumerate(cat["modelli"]):
            servito, testo = interroga(m, k)
            if servito is None:
                stato_ = "MORTO      %s" % testo.split("\n")[0][:90]
                morti.append((cat["nome"], m))
            elif not testo:
                stato_ = "MUTO       risponde ma non produce testo (spende e non dice)"
                morti.append((cat["nome"], m))
            else:
                stato_ = "vivo       %r" % testo[:40]
            print("  %d. %-34s %s" % (i + 1, m, stato_))
    print("\n" + ("-" * 60))
    if not morti:
        return print("Tutti gli anelli rispondono.")
    print("ANELLI DA SOSTITUIRE: %d" % len(morti))
    for c, m in morti:
        print("   %-14s %s" % (c, m))
    teste = [(c, m) for c, m in morti
             if any(x["nome"] == c and x["modelli"][0] == m for x in CATENE)]
    if teste:
        print("\nE fra questi %d sono TESTE di catena: quella catena sta girando su un\n"
              "modello piu' debole di quello per cui e' stata disegnata." % len(teste))


if __name__ == "__main__":
    a = sys.argv[1:]
    if "--scrivi" in a:
        scrivi()
    elif "--protezione" in a:
        protezione()
    elif "--prova" in a:
        prova()
    elif "--diagnosi" in a:
        diagnosi()
    else:
        stato()

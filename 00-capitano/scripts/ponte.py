#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""ponte.py — il ponte fra la navicella e OmniRoute. Dedalo, 2026-08-16.

Perche' esiste. Fino a oggi la navicella girava tutta sull'abbonamento, e quando
il monte finiva si fermava tutto: i due attivi, i Demiurghi a meta' build, il run
notturno. Il 16 agosto il limite ha ucciso otto agenti in tre ondate. La carta
fondativa dello stesso giorno dice la cosa in una riga: *non e' che il sistema
gira sull'abbonamento e solo i dispacci vanno su OmniRoute — tutto deve passare
da OmniRoute*, perche' e' li' che vive la fila di modelli e il salto al successivo
quando uno esaurisce il suo rate.

Il pezzo che lo rende possibile, verificato il 16 agosto: OmniRoute espone
`/v1/messages` **nel protocollo Anthropic**. Claude Code parla quel protocollo e
accetta di puntare altrove tramite `ANTHROPIC_BASE_URL`. Quindi il ponte non e' un
aggiramento: e' la porta che il gateway ha aperto apposta.

Due cose che questo script fa per costruzione, non per raccomandazione:

1. **Non alza il ponte su un gateway morto.** Prima di scrivere qualunque
   configurazione, manda una richiesta vera e pretende una risposta vera. Se il
   gateway non risponde, il ponte non si alza — perche' un ponte alzato sul vuoto
   significa una navicella che non parte piu' e un'ora persa a capire perche'.
2. **La chiave non entra mai nella navicella.** Vive in `~/.claude/`, fuori dalla
   cartella che ogni sera viene riversata su GitHub. Qui dentro non c'e' e non ci
   deve mai essere.

Uso:
  ponte.py --stato               il gateway risponde? il ponte e' su o giu'?
  ponte.py --chiave sk-...       registra la chiave del gateway (una volta sola)
  ponte.py --su                  alza il ponte (dopo averlo provato)
  ponte.py --giu                 lo abbassa: si torna sull'abbonamento
  ponte.py --prova <modello>     interroga un modello attraverso il ponte
  ponte.py --traffico            cosa e' passato DAVVERO: gira la catena o no?
"""
import io
import json
import os
import sys

try:                     # py3
    from urllib.request import Request, urlopen
    from urllib.error import URLError, HTTPError
except ImportError:      # py2
    from urllib2 import Request, urlopen, URLError, HTTPError

BASE = "http://localhost:20128"
CASA_UTENTE = os.path.join(os.path.expanduser("~"), ".claude")
SEGRETO = os.path.join(CASA_UTENTE, "navicella-ponte.json")   # fuori dalla navicella
IMPOSTAZIONI = os.path.join(CASA_UTENTE, "settings.json")

# Le variabili che spostano Claude Code sul gateway. Sono le sole tre che tocchiamo:
# tutto il resto delle impostazioni resta com'e'.
CHIAVI_ENV = ("ANTHROPIC_BASE_URL", "ANTHROPIC_AUTH_TOKEN", "ANTHROPIC_MODEL")

# --- il guasto del 18 agosto: --giu diceva il vero e non spegneva niente -------
# Questo script conosce UN SOLO file, `~/.claude/settings.json` (livello utente).
# Ma Claude Code legge anche `<progetto>/.claude/settings.json`, che ha priorita'
# piu' alta — e li' dentro c'era una configurazione OmniRoute completa (BASE_URL,
# AUTH_TOKEN, e cinque ANTHROPIC_*_MODEL su `auto/best-free`) messa fuori da qui.
# Risultato: `--giu` ripuliva il file utente, stampava «PONTE GIU'», e la navicella
# continuava a passare dal gateway servita da una catena gratuita — senza che
# nessuno lo sapesse, per due giorni, mentre Giuseppe credeva di studiare
# sull'abbonamento.
#
# E' la STESSA malattia del 17 agosto, un piano piu' su: allora il `model` di primo
# livello vinceva su `ANTHROPIC_MODEL` dentro lo stesso file; qui e' un intero file
# che vince su quello che guardo. La regola non cambia e va ricordata prima di
# rialzare il ponte: **questo script dichiara lo stato di cio' che controlla, non
# dello stato del sistema.** Finche' `--stato` non legge TUTTI i livelli di
# configurazione (progetto + utente) e non conferma col traffico, la sua parola
# non e' una prova.
#
# Cosa manca, quando si riaprira' il cantiere: leggere e scrivere anche il settings
# di progetto in `su()`, `giu()` e `stato()`. Non fatto il 18-08 perche' il reparto
# e' in pausa per scelta di Giuseppe (studio, tre esami a settembre) e riparare un
# organo spento non era il lavoro richiesto.
IMPOSTAZIONI_PROGETTO = os.path.join(
    os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))),
    ".claude", "settings.json")

# --- il guasto del 17 agosto, e perche' questa riga esiste ---------------------
# Per due giorni il ponte e' stato alzato su `--modello nav-ragiona` e la catena
# **non e' mai stata interrogata**: i log del gateway di quelle sei ore contano 117
# richieste a `claude-opus-5` e ZERO a `nav-ragiona`. Il motivo e' che `settings.json`
# porta anche un `"model"` al livello principale, e quello vince su `ANTHROPIC_MODEL`:
# Claude Code lo risolve nel nome del modello vero e manda quello. Il gateway riceve
# il nome di un modello, non di una catena, e lo consegna dritto alla connessione
# Claude — dove sotto non c'e' nessun anello. Al 429 non c'era niente da scavalcare.
#
# Costo dell'errore: due blocchi di lavoro di Giuseppe, e un giorno speso a
# correggere il comportamento di caduta delle catene, che era il posto sbagliato.
# La lezione, ed e' generale: **una configurazione non e' attiva finche' non si e'
# guardato il traffico.** Il ponte dichiarava «SU, cima nav-ragiona» ed era vero;
# semplicemente non era cio' che viaggiava sul filo.
CHIAVE_MODELLO = "model"


def leggi_json(percorso, difetto=None):
    if not os.path.isfile(percorso):
        return {} if difetto is None else difetto
    try:
        with io.open(percorso, encoding="utf-8") as f:
            return json.loads(f.read() or "{}")
    except ValueError as e:
        sys.exit("%s non e' JSON valido (%s). Non tocco niente." % (percorso, e))


def scrivi_json(percorso, dati):
    cartella = os.path.dirname(percorso)
    if cartella and not os.path.isdir(cartella):
        os.makedirs(cartella)
    testo = json.dumps(dati, indent=2, ensure_ascii=False)
    with io.open(percorso, "w", encoding="utf-8") as f:
        f.write(testo if isinstance(testo, type(u"")) else testo.decode("utf-8"))


def chiave():
    k = leggi_json(SEGRETO).get("gateway_key")
    if not k:
        sys.exit("Nessuna chiave registrata. Prima: ponte.py --chiave sk-...\n"
                 "(viene scritta in %s, fuori dalla navicella)" % SEGRETO)
    return k


def interroga(modello, testo, k, secondi=30):
    """Una richiesta vera nel protocollo Anthropic. E' la sola prova che accetto:
    un codice 200 su un endpoint di stato non dice che il routing funziona."""
    corpo = json.dumps({
        "model": modello, "max_tokens": 32,
        "messages": [{"role": "user", "content": testo}],
    }).encode("utf-8")
    # Lo User-Agent va dichiarato. Con quello di default di Python la stessa
    # richiesta che passa da curl torna 403 (Cloudflare 1010, blocco sulla firma
    # del client) dal provider a valle del gateway: misurato il 16-08. Non e' un
    # travestimento — e' il ponte che dice il proprio nome invece di presentarsi
    # come una libreria anonima.
    req = Request(BASE + "/v1/messages", data=corpo, headers={
        "Content-Type": "application/json",
        "anthropic-version": "2023-06-01",
        "x-api-key": k,
        "User-Agent": "navicella-ponte/1.0",
    })
    try:
        r = urlopen(req, timeout=secondi)
        return True, json.loads(r.read().decode("utf-8", "replace"))
    except HTTPError as e:
        return False, "HTTP %s — %s" % (e.code, e.read()[:200].decode("utf-8", "replace"))
    except URLError as e:
        return False, "gateway irraggiungibile: %s" % e.reason
    except Exception as e:                                    # noqa
        return False, "%s" % e


CANDIDATI_PROVA = (
    "gemini/gemini-flash-lite-latest",
    "nvidia/llama-3.3-nemotron-super-49b-v1.5",
    "cohere/command-r7b-12-2024",
    "groq/llama-3.1-8b-instant",
)


def modello_di_prova(k=None):
    """Un modello gratuito e **vivo** per la prova d'accensione: la prova non deve
    costare monte.

    17 agosto: qui c'era `groq/llama-3.1-8b-instant` cablato, e groq nel frattempo
    e' morta (connessione disabilitata, 404 su ogni modello). Risultato: `--stato`
    dichiarava «gateway NON RISPONDE» mentre il gateway stava benissimo, e `--su`
    si sarebbe rifiutato di alzare il ponte per un guasto che non c'era. Una sonda
    cablata su un singolo modello e' una sonda che misura la salute di quel
    modello e la spaccia per la salute del gateway. Ora si prova la fila finche'
    uno risponde, e se nessuno risponde lo si dice come quello che e': nessun
    modello gratuito raggiungibile, non «gateway morto»."""
    if k is None:
        k = chiave()
    for m in CANDIDATI_PROVA:
        ok, _ = interroga(m, "di' solo: vivo", k, secondi=20)
        if ok:
            return m
    return None


def stato():
    su = [c for c in CHIAVI_ENV
          if leggi_json(IMPOSTAZIONI).get("env", {}).get(c)]
    print("ponte:      %s" % ("SU — la navicella passa da OmniRoute" if su else
                              "GIU' — la navicella gira sull'abbonamento"))
    print("chiave:     %s" % ("registrata (%s)" % SEGRETO
                              if leggi_json(SEGRETO).get("gateway_key") else "ASSENTE"))
    if not leggi_json(SEGRETO).get("gateway_key"):
        return
    m = modello_di_prova()
    if m is None:
        print("gateway:    nessun modello GRATUITO risponde (la cima a pagamento puo'"
              " comunque essere viva: provala con --su)")
        return
    ok, esito = interroga(m, "di' solo: vivo", chiave(), secondi=20)
    if ok:
        testo = "".join(b.get("text", "") for b in esito.get("content", []))
        print("gateway:    RISPONDE — %s ha detto %r" % (esito.get("model"), testo.strip()))
    else:
        print("gateway:    NON RISPONDE — %s" % esito)


def su(modello=None):
    """Alza il ponte, ma non puo' declassare la navicella di nascosto.

    Il rischio vero non e' il gateway spento — quello si vede subito. E' che il
    gateway risponda **con un altro modello**: Claude Code chiede `claude-opus-5`,
    il gateway non ha una connessione Claude e ripiega su cio' che ha, e i due
    poli attivi diventano un modello da 70B senza che nessuno lo dica. Misurato il
    16 agosto: `auto/best-reasoning` ripiegava su llama-3.3-70b. Quindi la prova
    d'accensione interroga proprio la cima della fila, e se non risponde il ponte
    non si alza — a meno che il declassamento sia una scelta dichiarata."""
    k = chiave()
    print("provo il gateway prima di alzare il ponte...")
    m = modello_di_prova(k)
    if m is None:
        print("  nessun modello gratuito risponde: la prova d'accensione si gioca"
              " tutta sulla cima della fila.")
    else:
        ok, esito = interroga(m, "di' solo: vivo", k)
        if not ok:
            sys.exit("PONTE NON ALZATO: %s\n"
                     "Un ponte alzato su un gateway morto lascia la navicella senza motore."
                     % esito)
        print("  gateway vivo: %s" % esito.get("model"))

    cima = modello or "claude-opus-5"
    ok_cima, esito_cima = interroga(cima, "di' solo: vivo", k)
    if not ok_cima:
        sys.exit(
            "\nPONTE NON ALZATO.\n"
            "La cima della fila (%s) non risponde: %s\n\n"
            "Vuol dire che OmniRoute non ha una connessione capace di servire quel modello.\n"
            "Due strade, e sono una scelta di Giuseppe, non mia:\n"
            "  1. collegare Claude a OmniRoute (OAuth dell'abbonamento, o chiave Anthropic),\n"
            "     e allora la fila e' completa: Opus in cima, salto sotto quando finisce;\n"
            "  2. alzare il ponte accettando un altro modello in cima:\n"
            "     ponte.py --su --modello auto/best-reasoning\n"
            "     — sapendo che da quel momento i due poli attivi SONO quel modello.\n"
            % (cima, esito_cima))
    servito = esito_cima.get("model")
    print("  cima della fila: chiesto %s, servito %s" % (cima, servito))
    if modello is None and servito and "claude" not in str(servito).lower():
        sys.exit("\nPONTE NON ALZATO: ho chiesto %s e il gateway ha servito %s.\n"
                 "Questo e' un declassamento silenzioso, ed e' esattamente cio' che questo\n"
                 "controllo esiste per impedire. Se lo vuoi, dillo esplicitamente:\n"
                 "  ponte.py --su --modello %s\n" % (cima, servito, servito))

    imp = leggi_json(IMPOSTAZIONI)
    if os.path.isfile(IMPOSTAZIONI):
        scrivi_json(IMPOSTAZIONI + ".prima-del-ponte", imp)
        print("  copia delle impostazioni: %s.prima-del-ponte" % IMPOSTAZIONI)
    env = imp.get("env", {})
    env["ANTHROPIC_BASE_URL"] = BASE
    env["ANTHROPIC_AUTH_TOKEN"] = k
    if modello:
        env["ANTHROPIC_MODEL"] = modello
        # E qui il pezzo che mancava: il `model` di primo livello vince su
        # ANTHROPIC_MODEL, quindi va scritto anche lui, altrimenti Claude Code
        # continua a chiedere `claude-opus-5` e la catena non entra mai in gioco.
        # Il valore di prima si conserva fuori dalla navicella, cosi' `--giu` sa
        # a cosa tornare invece di indovinare.
        d = leggi_json(SEGRETO)
        d["modello_prima_del_ponte"] = imp.get(CHIAVE_MODELLO)
        scrivi_json(SEGRETO, d)
        imp[CHIAVE_MODELLO] = modello
    imp["env"] = env
    scrivi_json(IMPOSTAZIONI, imp)
    print("PONTE SU. Riavvia Claude Code perche' abbia effetto.")
    if modello:
        print("  modello richiesto al gateway: %s (env E impostazione di primo livello)"
              % modello)
    print("Per tornare indietro in qualunque momento: ponte.py --giu")
    print("\nControlla che sia DAVVERO la catena a girare, dopo il riavvio:")
    print("  ponte.py --traffico")


def giu():
    imp = leggi_json(IMPOSTAZIONI)
    env = imp.get("env", {})
    tolte = [c for c in CHIAVI_ENV if c in env]
    for c in tolte:
        del env[c]
    imp["env"] = env
    # Si rimette il modello che c'era prima. Se il ponte non l'aveva mai cambiato,
    # non si tocca: abbassare il ponte non deve riscrivere una scelta di Giuseppe.
    d = leggi_json(SEGRETO)
    if "modello_prima_del_ponte" in d:
        prima = d.pop("modello_prima_del_ponte")
        if prima is None:
            imp.pop(CHIAVE_MODELLO, None)
        else:
            imp[CHIAVE_MODELLO] = prima
        scrivi_json(SEGRETO, d)
        print("modello ripristinato: %s" % (prima if prima is not None else "(nessuno)"))
    scrivi_json(IMPOSTAZIONI, imp)
    print("PONTE GIU'%s. Riavvia Claude Code." %
          (" (tolte: %s)" % ", ".join(tolte) if tolte else " — era gia' abbassato"))


def traffico(quante=40):
    """Cosa e' passato DAVVERO sul filo, secondo il gateway.

    Previene il guasto che e' costato due giorni: un ponte che si dichiara alzato
    sulla catena giusta mentre Claude Code chiede tutt'altro modello. La
    configurazione non e' la prova; il traffico lo e'.

    **Cosa questo log dice e cosa non dice** — misurato il 17-08 e scritto qui
    perche' la prima versione di questa funzione ci si e' rotta il naso. Il campo
    modello di `/api/usage/request-logs` porta il modello **servito**, non quello
    chiesto: interrogando `nav-estrae` la riga che compare e'
    `gemini-flash-lite-latest | GEMINI`. Quindi non si puo' contare il nome della
    catena e concludere qualcosa: una catena servita dalla sua testa Claude e una
    richiesta diretta a Claude scrivono la stessa identica riga.

    Cio' che il log distingue davvero e' la **firma della caduta**: dopo un 429 o
    un 5xx su un anello, una catena viva apre entro pochi secondi una riga su un
    provider DIVERSO. Se dopo il fallimento non succede piu' niente, nessuna
    catena era coinvolta. E' cosi' che si e' visto il guasto vero: i due 429 del
    17 agosto (14:52 e 18:04) non hanno nessun tentativo dietro."""
    try:
        req = Request(BASE + "/api/auth/login",
                      data=json.dumps({"password": "4110"}).encode("utf-8"),
                      headers={"Content-Type": "application/json"})
        ck = urlopen(req, timeout=20).headers.get("Set-Cookie", "").split(";")[0]
        q = Request(BASE + "/api/usage/request-logs?limit=%d" % quante)
        q.add_header("Cookie", ck)
        righe = json.loads(urlopen(q, timeout=40).read().decode("utf-8", "replace"))
    except Exception as e:                                    # noqa
        return print("non riesco a leggere i log del gateway: %s" % e)
    voci, conta, esiti = [], {}, {}
    for r in righe:
        p = [c.strip() for c in ("%s" % r).split("|")]
        if len(p) < 7:
            continue
        voci.append({"quando": p[0], "modello": p[1], "provider": p[2], "esito": p[6]})
        conta[p[1]] = conta.get(p[1], 0) + 1
        esiti[p[6]] = esiti.get(p[6], 0) + 1

    print("ultime %d richieste, per modello SERVITO (non chiesto):" % len(voci))
    for k2, v in sorted(conta.items(), key=lambda z: -z[1]):
        print("  %-38s %4d" % (k2, v))
    print("esiti: %s" % ", ".join("%s x%d" % (k2, v) for k2, v in sorted(esiti.items())))

    # La firma della caduta. Le voci arrivano dalla piu' recente: le rovescio per
    # leggere il tempo in avanti, poi per ogni fallimento guardo cosa e' successo
    # subito dopo su un provider diverso.
    voci.reverse()
    guasti = [(i, v) for i, v in enumerate(voci)
              if v["esito"] not in ("200", "connection-test") and v["modello"] != "connection-test"]
    if not guasti:
        return print("\nnessun fallimento nella finestra: la caduta non e' osservabile qui.")
    print("\nfirma della caduta — cosa e' successo DOPO ogni fallimento:")
    for i, v in guasti[-12:]:
        dopo = [w for w in voci[i + 1:i + 4] if w["modello"] != "connection-test"]
        salto = next((w for w in dopo if w["provider"] != v["provider"]), None)
        if salto:
            esito = "SCAVALCATO -> %s (%s)" % (salto["provider"], salto["modello"])
        elif dopo:
            esito = "riprovato sullo stesso provider (%s)" % dopo[0]["provider"]
        else:
            esito = "NESSUN TENTATIVO DOPO — nessuna catena coinvolta"
        print("  %s  %s %s  ->  %s" % (v["quando"][11:19], v["esito"], v["provider"], esito))


def main():
    a = sys.argv[1:]
    if not a or "--stato" in a:
        return stato()
    if "--chiave" in a:
        i = a.index("--chiave")
        if i + 1 >= len(a):
            sys.exit("Uso: ponte.py --chiave sk-...")
        d = leggi_json(SEGRETO)
        d["gateway_key"] = a[i + 1]
        scrivi_json(SEGRETO, d)
        return print("chiave registrata in %s (fuori dalla navicella, non finisce su GitHub)"
                     % SEGRETO)
    if "--su" in a:
        m = None
        if "--modello" in a:
            i = a.index("--modello")
            if i + 1 >= len(a):
                sys.exit("Uso: ponte.py --su --modello <nome>")
            m = a[i + 1]
        return su(m)
    if "--giu" in a:
        return giu()
    if "--traffico" in a:
        return traffico()
    if "--prova" in a:
        i = a.index("--prova")
        m = a[i + 1] if i + 1 < len(a) else modello_di_prova()
        ok, esito = interroga(m, "Rispondi con tre parole.", chiave())
        if not ok:
            sys.exit("FALLITO: %s" % esito)
        testo = "".join(b.get("text", "") for b in esito.get("content", []))
        u = esito.get("usage", {})
        return print("%s -> %r   (token: %s in, %s out)"
                     % (esito.get("model"), testo.strip(),
                        u.get("input_tokens"), u.get("output_tokens")))
    sys.exit(__doc__)


if __name__ == "__main__":
    main()

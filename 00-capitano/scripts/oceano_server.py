#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""oceano_server.py - la bocca di Oceano. Dedalo, 2026-08-22.

Cos'e': un ricevitore minuscolo che sta in ascolto sulla rete di casa e accetta
quello che Giuseppe gli versa dal telefono - un vocale, un testo, un pensiero -
e lo depone in `00-capitano/intake/in-arrivo/`. Da li' lo raccoglie `oceano.py`
al successivo SessionStart.

Perche' con la sola libreria standard (Dedalo, 22-08): perche' un organo che
chiede di essere acceso prima di servire muore di disuso - e' successo a
`detta.py`, ed e' il motivo per cui Oceano NON vive dentro la plancia, che
pretende due server avviati a mano. Qui: nessuna dipendenza, nessun venv,
nessun pip. Parte con il python di sistema e basta, quindi puo' stare in un
task che lo rialza da solo al logon.

Perche' 0.0.0.0 e non 127.0.0.1: il telefono deve poterlo raggiungere. La
plancia ascolta su 127.0.0.1 e per questo dal telefono e' irraggiungibile
perfino stando in casa sullo stesso WiFi. Qui si ascolta su tutte le
interfacce, ma SOLO in rete locale: nessuna porta aperta su internet, nessun
servizio esterno, nessun costo. Coerente col patto: la navicella non spende
oltre l'abbonamento.

Sulla privacy: qui puo' passare materia personale (Giuseppe l'ha dichiarato -
idee di progetto E pensieri). Per questo l'audio non lascia mai la macchina:
la trascrizione la fa Whisper in locale, dopo, dentro `oceano.py`. Questo
processo non parla con nessuno e non tiene log del contenuto.

Uso:
  oceano_server.py                gira sulla porta 8077
  oceano_server.py --porta 9000   altra porta
  oceano_server.py --indirizzo    stampa l'URL da aprire sul telefono e esce
"""
import argparse
import io
import json
import os
import re
import socket
import sys
from datetime import datetime
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

QUI = os.path.dirname(os.path.abspath(__file__))
RADICE = os.path.dirname(os.path.dirname(QUI))
IN_ARRIVO = os.path.join(RADICE, "00-capitano", "intake", "in-arrivo")
PAGINA = os.path.join(RADICE, "00-capitano", "oceano", "index.html")
MAX_BYTE = 40 * 1024 * 1024          # 40 MB: un vocale lunghissimo sta in molto meno

SICURO = re.compile(r"[^a-zA-Z0-9._-]")
DIARIO = os.path.join(RADICE, "00-capitano", "intake", "oceano.log")


def annota(riga):
    """Scrive nel diario di Oceano. Non solleva mai: se anche il log fallisce,
    il servizio deve continuare a ricevere - perdere una nota di Giuseppe e'
    peggio che perdere una riga di log."""
    try:
        os.makedirs(os.path.dirname(DIARIO), exist_ok=True)
        with io.open(DIARIO, "a", encoding="utf-8") as f:
            f.write("%s | %s\n" % (datetime.now().strftime("%Y-%m-%d %H:%M:%S"), riga))
    except Exception:                                            # noqa
        pass


def dillo(riga):
    """print che non esplode quando non c'e' una console (pythonw)."""
    try:
        if sys.stdout is not None:
            print(riga, flush=True)
    except Exception:                                            # noqa
        pass


def ip_locale():
    """L'IP con cui il PC si affaccia sulla rete di casa. Si apre un socket
    verso l'esterno senza mandare nulla: e' il modo che funziona anche con piu'
    schede di rete, dove gethostbyname restituisce spesso 127.0.0.1."""
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(("8.8.8.8", 80))
        return s.getsockname()[0]
    except Exception:                                            # noqa
        return "127.0.0.1"
    finally:
        s.close()


def deponi(dati, nome_originale, tipo):
    """Scrive il file in in-arrivo con un nome che porta data e provenienza.
    Non sovrascrive mai: se il nome esiste, aggiunge un contatore."""
    os.makedirs(IN_ARRIVO, exist_ok=True)
    stampo = datetime.now().strftime("%Y-%m-%d-%H%M%S")
    pulito = SICURO.sub("_", nome_originale or "nota")[:60]
    base = "%s__%s__%s" % (stampo, tipo, pulito)
    via = os.path.join(IN_ARRIVO, base)
    n = 1
    while os.path.exists(via):
        radice_nome, est = os.path.splitext(base)
        via = os.path.join(IN_ARRIVO, "%s-%d%s" % (radice_nome, n, est))
        n += 1
    with open(via, "wb") as f:
        f.write(dati)
    return via


class Bocca(BaseHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def log_message(self, formato, *args):
        """Silenzio sul contenuto: si annota solo il verbo e l'esito, mai cosa
        e' passato. Qui dentro puo' esserci materia L5.

        Su FILE e non su stderr (Dedalo, 22-08, dopo averlo rotto): lanciato da
        `pythonw` questo processo non ha console, `sys.stderr` e' None, e
        scriverci solleva un'eccezione DENTRO la gestione della richiesta - il
        server resta in ascolto ma non risponde a nessuno. Sintomo perfido:
        netstat dice LISTENING e curl riceve zero. Un organo che deve girare in
        sottofondo non puo' dipendere da una console che non esiste."""
        annota("%s" % (formato % args))

    def _rispondi(self, codice, corpo, tipo="application/json; charset=utf-8"):
        grezzo = corpo if isinstance(corpo, bytes) else corpo.encode("utf-8")
        self.send_response(codice)
        self.send_header("Content-Type", tipo)
        self.send_header("Content-Length", str(len(grezzo)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(grezzo)

    def do_GET(self):
        via = self.path.split("?")[0]
        if via in ("/", "/index.html"):
            if not os.path.exists(PAGINA):
                return self._rispondi(500, "La pagina di Oceano non esiste: " + PAGINA, "text/plain; charset=utf-8")
            with io.open(PAGINA, "rb") as f:
                return self._rispondi(200, f.read(), "text/html; charset=utf-8")
        if via == "/salute":
            return self._rispondi(200, json.dumps({"vivo": True, "in_arrivo": IN_ARRIVO}))
        return self._rispondi(404, json.dumps({"errore": "non trovato"}))

    def do_POST(self):
        if self.path.split("?")[0] != "/versa":
            return self._rispondi(404, json.dumps({"errore": "non trovato"}))
        try:
            quanto = int(self.headers.get("Content-Length") or 0)
        except ValueError:
            return self._rispondi(400, json.dumps({"errore": "lunghezza illeggibile"}))
        if quanto <= 0:
            return self._rispondi(400, json.dumps({"errore": "corpo vuoto"}))
        if quanto > MAX_BYTE:
            return self._rispondi(413, json.dumps({"errore": "troppo grande"}))

        dati = self.rfile.read(quanto)
        tipo_dichiarato = (self.headers.get("X-Oceano-Tipo") or "").strip().lower()
        nome = (self.headers.get("X-Oceano-Nome") or "").strip()

        if tipo_dichiarato == "testo":
            via = deponi(dati, (nome or "nota") + ".txt", "testo")
        else:
            # l'estensione la detta il browser del telefono: webm su Android,
            # mp4/m4a su iOS. Non la si forza: ci pensa Whisper dopo.
            est = ".webm"
            ct = (self.headers.get("Content-Type") or "").lower()
            if "mp4" in ct or "m4a" in ct:
                est = ".m4a"
            elif "ogg" in ct:
                est = ".ogg"
            elif "wav" in ct:
                est = ".wav"
            via = deponi(dati, (nome or "vocale") + est, "voce")

        self.log_message("versato %d byte -> %s", quanto, os.path.basename(via))
        return self._rispondi(200, json.dumps({"ok": True, "nome": os.path.basename(via)}))


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--porta", type=int, default=8077)
    p.add_argument("--indirizzo", action="store_true",
                   help="stampa l'URL da aprire sul telefono e esce")
    a = p.parse_args()

    url = "http://%s:%d/" % (ip_locale(), a.porta)
    if a.indirizzo:
        print(url)
        return

    os.makedirs(IN_ARRIVO, exist_ok=True)
    dillo("Oceano ascolta.")
    dillo("  dal telefono, sullo stesso WiFi:  %s" % url)
    dillo("  deposita in:                      %s" % IN_ARRIVO)
    dillo("  ferma con Ctrl+C")
    annota("acceso su %s" % url)
    ThreadingHTTPServer(("0.0.0.0", a.porta), Bocca).serve_forever()


if __name__ == "__main__":
    main()

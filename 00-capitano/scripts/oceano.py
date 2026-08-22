#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""oceano.py - il flusso di Oceano: da cio' che Giuseppe ha versato al grezzo. Dedalo, 2026-08-22.

Cosa fa: raccoglie quello che sta in `00-capitano/intake/in-arrivo/` (ci arriva
dal telefono via `oceano_server.py`, o ce lo si lascia cadere a mano), trascrive
gli audio con Whisper in locale, deposita ogni voce come nota grezza in
`00-capitano/intake/grezzo/` e sposta l'originale in `assorbiti/`.

Perche' al SessionStart e non in un servizio che gira sempre: perche' e' il
pattern che nella navicella funziona gia' - `raccolta-atti.py` pesca cosi' gli
esiti dei quiz dai Download. Nessun processo da ricordarsi di accendere, e la
raccolta avviene nel momento esatto in cui serve: quando una sessione comincia
e qualcuno sta per leggere.

**Cosa questo script NON fa, ed e' deliberato.** Non decide dove va una nota.
Giuseppe ha dichiarato che qui dentro finiranno sia idee di progetto sia
pensieri personali: le prime diventano lavoro, i secondi sono materia L5 che per
regola cementata non va mai servita ai sub-agenti passivi e la interpreta solo
Mnemosyne. Distinguerle richiede giudizio, e il giudizio non e' di uno script.
Qui si deposita e si segnala; lo smistamento e' del Rapsodo (pre-classifica) e
di Mnemosyne (interpretazione). **Nel dubbio, custodia e non coda**: eseguire
un pensiero personale come se fosse un compito e' il danno peggiore che questo
organo possa fare.

Niente oblio: l'originale non si cancella mai, si sposta in `assorbiti/`.

Uso:
  oceano.py              raccoglie e trascrive (silenzioso se non c'e' nulla)
  oceano.py --zitto      come sopra, ma tace del tutto se la bocca e' vuota
  oceano.py --secco      dice cosa farebbe senza toccare niente
"""
import argparse
import io
import os
import shutil
import sys
from datetime import datetime

QUI = os.path.dirname(os.path.abspath(__file__))
RADICE = os.path.dirname(os.path.dirname(QUI))
INTAKE = os.path.join(RADICE, "00-capitano", "intake")
IN_ARRIVO = os.path.join(INTAKE, "in-arrivo")
GREZZO = os.path.join(INTAKE, "grezzo")
ASSORBITI = os.path.join(INTAKE, "assorbiti")
VENV = os.path.join(QUI, "voce-venv", "Scripts", "python.exe")

AUDIO = (".webm", ".m4a", ".mp4", ".ogg", ".wav", ".mp3", ".opus", ".aac", ".flac")
TESTO = (".txt", ".md")


def trascrivi(via_audio):
    """Whisper in locale, nel venv che esiste gia' (`voce-venv`). L'audio non
    lascia mai la macchina: qui puo' passare materia personale, e il gate-privacy
    della navicella e' cementato. Ritorna (testo, errore)."""
    codice = (
        "import sys\n"
        "from faster_whisper import WhisperModel\n"
        "m = WhisperModel('small', device='cpu', compute_type='int8')\n"
        "seg, _ = m.transcribe(sys.argv[1], language='it', vad_filter=True)\n"
        "sys.stdout.write(' '.join(s.text.strip() for s in seg))\n"
    )
    import subprocess
    if not os.path.exists(VENV):
        return None, "manca il venv di Whisper: " + VENV
    try:
        r = subprocess.run([VENV, "-c", codice, via_audio],
                           capture_output=True, timeout=900)
        if r.returncode != 0:
            return None, (r.stderr.decode("utf-8", "replace").strip().split("\n") or [""])[-1][:200]
        return r.stdout.decode("utf-8", "replace").strip(), None
    except Exception as e:                                       # noqa
        return None, str(e)[:200]


def deponi_grezzo(testo, nome_originale, tipo, errore=None):
    os.makedirs(GREZZO, exist_ok=True)
    stampo = datetime.now().strftime("%Y-%m-%d-%H%M%S")
    via = os.path.join(GREZZO, "%s__%s.md" % (stampo, tipo))
    n = 1
    while os.path.exists(via):
        via = os.path.join(GREZZO, "%s__%s-%d.md" % (stampo, tipo, n)); n += 1
    testa = [
        "---",
        "type: intake-grezzo",
        "origine: oceano",
        "forma: %s" % tipo,
        "versato: %s" % nome_originale,
        "raccolto: %s" % datetime.now().strftime("%Y-%m-%d %H:%M"),
        "smistato: no        # lo fa il Rapsodo; nel dubbio custodia, non coda",
        "---",
        "",
    ]
    if errore:
        testa += ["> **Non trascritto.** " + errore,
                  "> L'originale e' al sicuro in assorbiti/ e si puo' riprovare.", ""]
    with io.open(via, "w", encoding="utf-8") as f:
        f.write("\n".join(testa) + (testo or "") + "\n")
    return via


def avvisa_se_indirizzo_cambiato():
    """Il PC e' un portatile e gira fra reti diverse: l'IP cambia, e un indirizzo
    scritto a mano nel telefono smette di funzionare senza dire niente.

    Due difese. La prima e' il nome: `laptop-....local` non cambia mai e Windows
    lo pubblica da solo (verificato il 22-08) - e' l'indirizzo da tenere sul
    telefono. La seconda e' questa riga: se il numero cambia, lo si dice UNA
    volta, perche' su Android la risoluzione .local nel browser non e' garantita
    e in quel caso serve il numero aggiornato senza doverlo andare a cercare.

    Si tace quando nulla e' cambiato: un avviso che compare sempre non lo legge
    piu' nessuno."""
    import socket
    memoria = os.path.join(INTAKE, ".ultimo-indirizzo")
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(("8.8.8.8", 80)); ip = s.getsockname()[0]
    except Exception:                                            # noqa
        return
    finally:
        s.close()
    try:
        vecchio = io.open(memoria, encoding="utf-8").read().strip()
    except Exception:                                            # noqa
        vecchio = ""
    if ip == vecchio:
        return
    try:
        os.makedirs(INTAKE, exist_ok=True)
        io.open(memoria, "w", encoding="utf-8").write(ip)
    except Exception:                                            # noqa
        pass
    nome = socket.gethostname().lower()
    if vecchio:
        print("[oceano] rete cambiata. Dal telefono: http://%s.local:8077  "
              "(se il nome non va: http://%s:8077)" % (nome, ip))
    else:
        print("[oceano] bocca raggiungibile da: http://%s.local:8077  "
              "(oppure http://%s:8077)" % (nome, ip))


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--zitto", action="store_true")
    p.add_argument("--secco", action="store_true")
    a = p.parse_args()

    if not a.secco:
        avvisa_se_indirizzo_cambiato()

    if not os.path.isdir(IN_ARRIVO):
        if not a.zitto:
            print("[oceano] la bocca non esiste ancora: %s" % IN_ARRIVO)
        return

    roba = sorted(f for f in os.listdir(IN_ARRIVO)
                  if os.path.isfile(os.path.join(IN_ARRIVO, f)))
    if not roba:
        if not a.zitto:
            print("[oceano] niente da raccogliere.")
        return

    if a.secco:
        print("[oceano] farei questo:")
        for f in roba:
            est = os.path.splitext(f)[1].lower()
            come = "trascrivo" if est in AUDIO else ("prendo il testo" if est in TESTO else "non so leggerlo")
            print("   %-46s -> %s" % (f[:46], come))
        return

    os.makedirs(ASSORBITI, exist_ok=True)
    fatte, muti = 0, 0
    for f in roba:
        via = os.path.join(IN_ARRIVO, f)
        est = os.path.splitext(f)[1].lower()
        errore = None
        if est in TESTO:
            testo = io.open(via, encoding="utf-8", errors="replace").read().strip()
            tipo = "testo"
        elif est in AUDIO:
            testo, errore = trascrivi(via)
            tipo = "voce"
            if errore:
                muti += 1
        else:
            testo, errore, tipo = None, "formato che non so leggere (%s)" % est, "ignoto"
            muti += 1
        deponi_grezzo(testo, f, tipo, errore)
        shutil.move(via, os.path.join(ASSORBITI, f))
        fatte += 1

    print("[oceano] raccolte %d voci -> 00-capitano/intake/grezzo/%s"
          % (fatte, "  (%d senza testo, originali salvi)" % muti if muti else ""))
    print("[oceano] da smistare: il Rapsodo pre-classifica, L5 resta di Mnemosyne.")


if __name__ == "__main__":
    main()

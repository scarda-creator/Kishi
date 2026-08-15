#!/usr/bin/env python
"""teia.py - la guardia del consumo. Dedalo, 2026-08-12.

Perche' esiste, e la data dice tutto: il 12 agosto due Demiurghi sono morti a
meta' build per il limite di sessione, uno dopo l'altro, senza che nessuno lo
avesse visto arrivare. Iperione (`token_diagnostica.js`) misura BENE il passato -
chi brucia, su quale modello - ma nessuno sapeva rispondere alla sola domanda
che conta prima di lanciare un lavoro: **quanto ne resta adesso**.

Teia risponde a tre domande, e a nessun'altra:
  --ora          quanto ho consumato nella finestra corrente, e quanto resta
  --preventivo   questo lavoro entra in cio' che resta? (costo medio misurato)
  --storia       le finestre passate: dove il limite e' stato toccato davvero

La soglia NON e' inventata: e' la piu' alta finestra di consumo mai raggiunta
prima di un blocco. Si misura, non si dichiara - stessa regola del registro dei
procedimenti e dell'indice del percorso.

Nota di ruolo: Teia *misura e avverte*. Non decide di spostare lavoro su modelli
esterni: quella e' una scelta che passa da Ierofante per il gate ToS (proxare
Claude su abbonamento e' vietato; i modelli non-Claude gratuiti sono liberi).
"""
import io
import json
import os
import sys
import glob
from datetime import datetime, timedelta, timezone

CASA = os.path.join(os.path.expanduser("~"), ".claude", "projects")
PROGETTO = "C--Users-ACER-Desktop-AgentsAI"
FINESTRA_H = 5           # la finestra rolling del piano
ORIZZONTE_GIORNI = 45    # quanto indietro guardare per stimare la soglia


def eventi():
    """(istante, output, modello, e' sub-agente) per ogni messaggio con usage."""
    fuori = []
    radice = os.path.join(CASA, PROGETTO)
    if not os.path.isdir(radice):
        sys.exit("cartella dei transcript non trovata: %s" % radice)
    limite = datetime.now(timezone.utc) - timedelta(days=ORIZZONTE_GIORNI)
    for percorso in glob.glob(os.path.join(radice, "**", "*.jsonl"), recursive=True):
        try:
            with io.open(percorso, encoding="utf-8", errors="replace") as f:
                for riga in f:
                    riga = riga.strip()
                    if not riga or '"usage"' not in riga:
                        continue
                    try:
                        d = json.loads(riga)
                    except ValueError:
                        continue
                    msg = d.get("message") or {}
                    uso = msg.get("usage") or {}
                    out = uso.get("output_tokens") or 0
                    ts = d.get("timestamp")
                    if not out or not ts:
                        continue
                    try:
                        t = datetime.strptime(ts, "%Y-%m-%dT%H:%M:%S.%fZ").replace(tzinfo=timezone.utc)
                    except ValueError:
                        continue
                    if t < limite:
                        continue
                    fuori.append((t, out, (msg.get("model") or "?"), bool(d.get("isSidechain"))))
        except OSError:
            continue
    fuori.sort(key=lambda e: e[0])
    return fuori


def finestre(ev):
    """Consumo in ogni finestra scorrevole di FINESTRA_H ore, campionata sugli
    eventi stessi: la punta massima e' la miglior stima del tetto reale."""
    durata = timedelta(hours=FINESTRA_H)
    picchi, i = [], 0
    somma = 0
    for j, (t, out, _, _) in enumerate(ev):
        somma += out
        while ev[i][0] < t - durata:
            somma -= ev[i][1]
            i += 1
        picchi.append((t, somma))
    return picchi


def umano(n):
    return "%.1fM" % (n / 1e6) if n >= 1e6 else "%.0fk" % (n / 1e3)


def barra(frazione, largo=34):
    pieni = max(0, min(largo, int(round(frazione * largo))))
    return "[" + "#" * pieni + "." * (largo - pieni) + "]"


BLOCCHI = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                       "..", "memoria", "blocchi-limite.jsonl")


def blocchi_osservati():
    """I blocchi VERI, annotati quando sono successi. Sono l'unica evidenza che
    non mente: la punta storica di output non e' la grandezza che il limite
    conta (il 13-08 il limite e' scattato a 176k mentre la punta storica era
    873k - un fattore cinque di ottimismo)."""
    fuori = []
    try:
        with io.open(BLOCCHI, encoding="utf-8") as f:
            for riga in f:
                riga = riga.strip()
                if not riga:
                    continue
                d = json.loads(riga)
                t = datetime.strptime(d["quando"], "%Y-%m-%dT%H:%M:%SZ").replace(tzinfo=timezone.utc)
                fuori.append((t, d.get("agenti"), d.get("contesto", "")))
    except (OSError, ValueError, KeyError):
        pass
    return fuori


def soglia(picchi):
    """Con blocchi osservati: il consumo misurato al momento del blocco piu'
    BASSO, scontato del 15%. Senza: la punta storica, dichiarata inaffidabile.
    Conservativo di proposito - una guardia che sbaglia deve sbagliare fermando,
    non lasciando partire una build che morira' a meta'."""
    obs = blocchi_osservati()
    if obs and picchi:
        letture = []
        for t, _, _ in obs:
            vicini = [s for tp, s in picchi if abs((tp - t).total_seconds()) < 3600]
            if vicini:
                letture.append(max(vicini))
        if letture:
            return int(min(letture) * 0.85)
    return max((s for _, s in picchi), default=0)


def cmd_ora(ev, picchi):
    if not ev:
        print("nessun evento nell'orizzonte: Teia non ha nulla da misurare.")
        return
    tetto = soglia(picchi)
    adesso = datetime.now(timezone.utc)
    # La finestra NON scorre: si azzera a un orario che il runtime dichiara nel
    # messaggio di blocco ("resets 11:20pm"). Contare le ultime 5 ore a ritroso
    # teneva dentro il consumo gia' azzerato e dava ROSSO perpetuo - cioe' la
    # guardia inutile che suona sempre. Si conta dall'ultimo reset noto in poi.
    inizio = adesso - timedelta(hours=FINESTRA_H)
    obs = blocchi_osservati()
    if obs:
        ultimo_blocco = max(t for t, _, _ in obs)
        reset = ultimo_blocco + timedelta(minutes=10)   # il reset segue di poco il blocco
        if reset < adesso:
            inizio = max(inizio, reset)
    corrente = sum(o for t, o, _, _ in ev if t > inizio)
    resta = max(0, tetto - corrente)
    frazione = corrente / tetto if tetto else 0
    print("TEIA - finestra di %d ore\n" % FINESTRA_H)
    print("  consumato   %8s   %s %3d%%" % (umano(corrente), barra(frazione), round(frazione * 100)))
    obs = blocchi_osservati()
    fonte = ("dal blocco reale piu' basso, meno 15%% di margine (%d blocchi osservati)" % len(obs)
             if obs else "punta storica: nessun blocco osservato, stima ottimista")
    print("  soglia      %8s   (%s)" % (umano(tetto), fonte))
    print("  margine     %8s\n" % umano(resta))
    ultimo = ev[-1][0]
    print("  ultimo evento: %s UTC" % ultimo.strftime("%H:%M"))
    if frazione >= 0.85:
        print("\n  ROSSO - non lanciare build lunghe: si spegneranno a meta'.")
    elif frazione >= 0.6:
        print("\n  GIALLO - un lavoro grande per volta, e salva spesso.")
    else:
        print("\n  VERDE - c'e' margine per una build a piu' agenti.")
    return resta


def dispacci(ev, pausa_min=10):
    """Il costo di UN dispaccio, non di un messaggio. I sub-agenti girano dentro
    la stessa sessione del main, quindi non li separa il sessionId: li separa il
    silenzio. Eventi sidechain consecutivi con meno di `pausa_min` minuti di
    distanza sono lo stesso lavoro; un buco piu' lungo apre un dispaccio nuovo.
    Misura grezza ma onesta - e comunque meglio della mediana per messaggio, che
    dava 0 perche' la maggior parte dei messaggi di un agente e' minuscola."""
    blocchi, corrente, ultimo = [], 0, None
    for t, out, _, sub in ev:
        if not sub:
            continue
        if ultimo is not None and (t - ultimo) > timedelta(minutes=pausa_min):
            blocchi.append(corrente)
            corrente = 0
        corrente += out
        ultimo = t
    if corrente:
        blocchi.append(corrente)
    blocchi = [b for b in blocchi if b > 5000]      # scarta i frammenti di rumore
    if not blocchi:
        return None
    blocchi.sort()
    return {"n": len(blocchi), "mediana": blocchi[len(blocchi) // 2],
            "max": blocchi[-1], "min": blocchi[0]}


def cmd_preventivo(ev, picchi, agenti, unita_per_agente):
    """Un frammento di quiz da ~30 unita' e' il lavoro-tipo della navicella:
    lo si misura sui frammenti gia' costruiti invece di indovinarlo."""
    resta = cmd_ora(ev, picchi)
    c = dispacci(ev)
    print("\n--- preventivo -----------------------------------------")
    if not c:
        print("  nessun dispaccio misurato: impossibile stimare onestamente.")
        return
    per_agente = c["mediana"]
    stima = per_agente * agenti
    print("  dispacci misurati: %d   mediano %s   piu' caro %s"
          % (c["n"], umano(c["mediana"]), umano(c["max"])))
    print("  stima per %d agenti in parallelo: %s" % (agenti, umano(stima)))
    if resta and stima > resta:
        entrano = int(resta // per_agente)
        print("\n  NON ENTRA nel margine (%s)." % umano(resta))
        print("  Lancia %d agenti invece di %d, oppure rimanda."
              % (max(1, entrano), agenti))
    else:
        print("\n  Entra nel margine (%s)." % umano(resta or 0))
        print("  Nel caso peggiore misurato (%s a testa) ne reggi %d."
              % (umano(c["max"]), int((resta or 0) // c["max"]) if c["max"] else 0))


def cmd_storia(picchi):
    if not picchi:
        print("nessuna finestra da mostrare.")
        return
    tetto = soglia(picchi)
    per_giorno = {}
    for t, s in picchi:
        g = t.strftime("%Y-%m-%d")
        per_giorno[g] = max(per_giorno.get(g, 0), s)
    print("TEIA - punta di consumo per giorno (finestra %dh)\n" % FINESTRA_H)
    for g in sorted(per_giorno)[-14:]:
        s = per_giorno[g]
        segno = "  <- il tetto" if s == tetto else ""
        print("  %s  %8s  %s%s" % (g, umano(s), barra(s / tetto if tetto else 0, 26), segno))
    print("\n  La punta piu' alta e' la soglia usata da --ora. Se un giorno il")
    print("  limite scatta piu' in basso, quel giorno diventa la nuova verita'.")


def main():
    ev = eventi()
    pic = finestre(ev)
    if "--storia" in sys.argv:
        cmd_storia(pic)
    elif "--preventivo" in sys.argv:
        n = 2
        if "--agenti" in sys.argv:
            i = sys.argv.index("--agenti")
            if i + 1 < len(sys.argv):
                n = int(sys.argv[i + 1])
        cmd_preventivo(ev, pic, n, 30)
    else:
        cmd_ora(ev, pic)


if __name__ == "__main__":
    main()

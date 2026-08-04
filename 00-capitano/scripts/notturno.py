#!/usr/bin/env python
"""notturno.py — la navicella lavora mentre Giuseppe non c'e'.

Accensione, 2026-08-02. Chiude il buco che oroboro aveva diagnosticato il 12 luglio e mai
riparato: «l'event-driven non attraversa il reset del limite di sessione, serve un
risvegliatore esterno, struttura da progettare». Il risvegliatore e' l'Utilita' di
pianificazione di Windows; questo script e' cio' che essa sveglia.

E' consentito: `claude -p` headless e schedulato sull'abbonamento e' esplicitamente previsto
dalla documentazione ufficiale (verificato su fonte primaria il 31/7/2026, jarvis-D7-economia).
Consuma lo stesso monte dell'uso interattivo — e Giuseppe ha dichiarato che trovare il limite
esaurito al risveglio non e' un guasto ma la prova che la notte e' stata usata.

IL CONFINE, CABLATO E NON SOLO SCRITTO
  Esegue **solo** voci presenti in `00-capitano/notturno/coda.md`. Non ne aggiunge, non
  decide cosa fare. Dentro una voce l'autonomia e' piena: legge, scrive, ripara, modifica
  codice. La rotta e' la coda; le mani sono libere.

DUE INTERRUTTORI
  - un file `00-capitano/notturno/STOP`: se esiste, il run termina prima di qualunque azione;
  - `--max-voci N`: quante voci per notte (default 1).

IL DELIVERABLE
  Non un log: un **paper**. Problema, ragionamento, soluzione, e perche' quella soluzione e
  non un'altra. In chiaro ma identitario — lo scrive qualcuno con una voce, non un
  generatore di rapporti. Forma richiesta da Giuseppe il 2026-08-02.

Uso:
  python notturno.py                 # esegue la prima voce non spuntata
  python notturno.py --max-voci 2
  python notturno.py --secco         # mostra cosa farebbe, non chiama Claude
"""
import argparse
import io
import os
import re
import subprocess
import sys
from datetime import datetime

HERE = os.path.dirname(os.path.abspath(__file__))
NAV = os.path.abspath(os.path.join(HERE, "..", ".."))
BASE = os.path.join(NAV, "00-capitano", "notturno")
CODA = os.path.join(BASE, "coda.md")
STOP = os.path.join(BASE, "STOP")
PAPERS = os.path.join(BASE, "papers")
LOG = os.path.join(BASE, "run.log")


def leggi(p):
    try:
        return io.open(p, encoding="utf-8").read()
    except OSError:
        return ""


def logga(msg):
    with io.open(LOG, "a", encoding="utf-8") as f:
        f.write("%s | %s\n" % (datetime.now().strftime("%Y-%m-%d %H:%M:%S"), msg))


def voci_aperte(testo):
    """Ogni blocco che inizia con '- [ ]' fino al prossimo '- [' o fine."""
    out = []
    righe = testo.splitlines()
    i = 0
    while i < len(righe):
        if righe[i].lstrip().startswith("- [ ]"):
            inizio = i
            corpo = [righe[i]]
            i += 1
            while i < len(righe) and not righe[i].lstrip().startswith("- ["):
                corpo.append(righe[i])
                i += 1
            out.append((inizio, "\n".join(corpo).strip()))
        else:
            i += 1
    return out


def titolo_di(voce):
    m = re.search(r"\*\*(.+?)\*\*", voce)
    return (m.group(1) if m else voce[:60]).strip().rstrip(".")


def slug(s):
    s = re.sub(r"[^a-zA-Z0-9]+", "-", s.lower()).strip("-")
    return s[:50] or "voce"


def claude_exe():
    """Percorso esplicito a claude.exe.

    L'Utilita' di pianificazione non eredita il PATH della shell di Giuseppe: cercare
    'claude' e basta funziona dal terminale e fallisce di notte, che e' il momento in cui
    serve. Si prova il percorso noto, poi il PATH, poi si lascia il nome nudo perche'
    l'errore sia esplicito nel log invece che silenzioso.
    """
    noti = [
        os.path.expandvars(r"%APPDATA%\npm\node_modules\@anthropic-ai\claude-code\bin\claude.exe"),
        os.path.expandvars(r"%APPDATA%\npm\claude.cmd"),
        os.environ.get("CLAUDE_CODE_EXECPATH", ""),
    ]
    for p in noti:
        if p and os.path.exists(p):
            return p
    from shutil import which
    return which("claude") or "claude"


def brief(voce, quando):
    """Il prompt del run notturno. Carica identita' e stato: il criterio della riparazione
    non e' 'la soluzione giusta' ma 'quella che avrebbe scelto Giuseppe'."""
    return """Sei la navicella di Giuseppe Scarda, e stai lavorando di notte mentre lui non c'e'.
Questo run e' partito da solo, dall'Utilita' di pianificazione: nessuno ti sta guardando.

Leggi PRIMA, per sapere chi sei e per chi lavori:
- `CLAUDE.md` (costituzione)
- `00-capitano/dedalo/accensione-carta.md` (le direttive di Giuseppe del 2 agosto: e' il
  documento che governa questo run — leggilo per intero)
- `00-capitano/profilo-giuseppe.md`, `00-capitano/come-penso.md`,
  `00-capitano/memoria/L4-fondazionale.md`
- `02-accademico/stato-studente.md` (dove sta davvero, e quanto manca agli esami)

## Il tuo compito, questa notte

%s

## Come lavori

Hai autonomia PIENA dentro questo compito: leggi quello che ti serve, scrivi file, modifica
il codice della navicella, ripara cio' che trovi rotto lungo la strada. Non chiedere permesso
a nessuno: non c'e' nessuno da chiedere.

Il criterio non e' «la soluzione corretta» ma **«la soluzione che avrebbe scelto Giuseppe»**.
Per questo hai il suo profilo e il suo modello cognitivo: usali come si usa un committente
assente, non come contorno. Se due strade sono equivalenti tecnicamente, scegli quella che
somiglia a come pensa lui.

Quello che NON fai: non aggiungi voci alla coda notturna, non decidi cosa la navicella deve
diventare, non modifichi `CLAUDE.md`. La rotta resta sua. Se durante il lavoro ti accorgi che
una decisione di rotta andrebbe presa, **scrivila nel paper come questione aperta** e va'
avanti con il resto.

## Il deliverable

**PRIMISSIMA COSA, prima di leggere qualunque file:** crea `%s` con il titolo del compito,
la data, e la riga «run iniziato, in corso». Poi riscrivilo per intero ogni volta che porti a
casa un pezzo di ragionamento — non alla fine.

Non e' pedanteria: il primo run notturno, il 2 agosto, e' morto sul limite di sessione dopo
nove minuti **senza aver scritto una riga**, perche' stava ancora leggendo. Un paper parziale
vale infinitamente piu' di nessun paper. Se muori a meta', chi legge deve trovare fin dove sei
arrivato.

Un **paper**, non un log. Struttura:

1. **Il problema** — qual era davvero, non come era formulato nella coda.
2. **Come ho ragionato** — il percorso, comprese le strade scartate e perche'.
3. **Cosa ho fatto** — i file toccati, con i path, e cosa fa ora il sistema che prima non faceva.
4. **Perche' cosi' e non altrimenti** — la giustificazione della scelta. E' la sezione che
   Giuseppe ha chiesto esplicitamente: vuole vedere come hai pensato, non solo cosa hai fatto.
5. **Cosa resta aperto** — incluse le questioni di rotta che non ti competono.

Scrivi come scrive la navicella: niente preamboli, niente «Certo!», niente conclusioni che
riassumono il corpo, niente emoji. Italiano. Denso. Se non sai una cosa, dillo.

Alla fine, rispondi in chat con 5 righe di estratto e il path del paper.

(run del %s)
""" % (voce, "{PAPER}", quando)


def esegui(voce, indice, secco=False):
    quando = datetime.now().strftime("%Y-%m-%d %H:%M")
    nome = "%s-%s.md" % (datetime.now().strftime("%Y-%m-%d"), slug(titolo_di(voce)))
    paper = os.path.join(PAPERS, nome)
    rel = os.path.relpath(paper, NAV).replace("\\", "/")
    prompt = brief(voce, quando).replace("{PAPER}", rel)

    if secco:
        sys.stdout.write("--- VOCE %d ---\n%s\n\n--- PAPER ---\n%s\n\n--- BRIEF (%d caratteri) ---\n%s\n"
                         % (indice, titolo_di(voce), rel, len(prompt), prompt[:1200]))
        return None

    if not os.path.isdir(PAPERS):
        os.makedirs(PAPERS)

    logga("START | %s" % titolo_di(voce))
    try:
        p = subprocess.run(
            [claude_exe(), "-p", prompt, "--permission-mode", "bypassPermissions"],
            cwd=NAV, capture_output=True, text=True, encoding="utf-8",
            errors="replace", timeout=60 * 90)
        coda_out = (p.stdout or "")[-2000:]
        logga("END   | rc=%s | paper %s | %s" % (
            p.returncode, "scritto" if os.path.exists(paper) else "ASSENTE",
            coda_out.replace("\n", " ")[:300]))
        return os.path.exists(paper), rel, coda_out
    except FileNotFoundError:
        logga("ERRORE | 'claude' non trovato sul PATH del servizio di pianificazione")
        return False, rel, "claude non trovato sul PATH"
    except subprocess.TimeoutExpired:
        logga("TIMEOUT | 90 minuti | %s" % titolo_di(voce))
        return os.path.exists(paper), rel, "timeout a 90 minuti"


def spunta(testo, riga_indice, rel):
    righe = testo.splitlines()
    righe[riga_indice] = righe[riga_indice].replace("- [ ]", "- [x]", 1)
    righe[riga_indice] += "  \n  → fatto il %s: `%s`" % (
        datetime.now().strftime("%Y-%m-%d"), rel)
    return "\n".join(righe) + "\n"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--max-voci", type=int, default=1)
    ap.add_argument("--secco", action="store_true")
    a = ap.parse_args()

    if os.path.exists(STOP):
        logga("FERMATO | file STOP presente")
        sys.stdout.write("STOP presente: non faccio nulla.\n")
        return

    for n in range(a.max_voci):
        testo = leggi(CODA)
        aperte = voci_aperte(testo)
        if not aperte:
            logga("coda vuota")
            sys.stdout.write("Coda vuota: niente da fare. "
                             "Riempila durante una sessione con Giuseppe.\n")
            return
        riga, voce = aperte[0]
        esito = esegui(voce, n + 1, a.secco)
        if a.secco:
            return
        fatto, rel, out = esito
        if fatto:
            io.open(CODA, "w", encoding="utf-8").write(spunta(testo, riga, rel))
            sys.stdout.write("fatto: %s -> %s\n" % (titolo_di(voce), rel))
        else:
            sys.stdout.write("NON completato: %s (vedi run.log)\n" % titolo_di(voce))
            return                                   # non insistere sulla voce successiva


if __name__ == "__main__":
    main()

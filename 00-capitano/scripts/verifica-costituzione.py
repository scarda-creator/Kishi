#!/usr/bin/env python
"""verifica-costituzione.py — l'altoparlante della navicella.

Nasce dall'Accensione (2026-07-31). Il campo `name` mancante negli agenti v2 non e'
mancato perche' nessuno sapesse controllarlo: e' mancato perche' i controlli parlavano
allo stdout, che diventa contesto di Mnemosyne e non arriva mai davanti agli occhi di
Giuseppe. Questo script usa `systemMessage`, che il harness mostra ALL'UTENTE.

Agganciato a SessionStart. Tace quando tutto e' a posto: il silenzio e' il caso normale,
altrimenti diventa rumore e si smette di leggerlo.

Contratto di output (documentazione ufficiale Claude Code, letta il 31/7/2026):
  - `systemMessage`  (top-level) -> avviso mostrato a GIUSEPPE. Max 5 righe.
  - `hookSpecificOutput.additionalContext` -> dettaglio completo per Mnemosyne/Dedalo.
Stdout deve contenere SOLO il JSON. Exit 0 sempre: un controllo che rompe la sessione
sarebbe peggio del problema che segnala.

Uso:
  python verifica-costituzione.py           # modo hook (JSON su stdout)
  python verifica-costituzione.py --umano   # modo leggibile, per lanciarlo a mano
"""
import io
import json
import os
import re
import sys
from datetime import datetime, timezone

HERE = os.path.dirname(os.path.abspath(__file__))
NAV = os.path.abspath(os.path.join(HERE, "..", ".."))          # Desktop/AgentsAI
AGENTI = os.path.join(NAV, ".claude", "agents")
COMANDI = os.path.join(NAV, ".claude", "commands")
SETTINGS = os.path.join(NAV, ".claude", "settings.json")
CLAUDEMD = os.path.join(NAV, "CLAUDE.md")
CANTIERE = os.path.join(NAV, "00-capitano", "cantiere-notturno.md")
INTAKE = os.path.join(NAV, "00-capitano", "intake")
REGISTRO = os.path.join(NAV, "00-capitano", "dedalo", "registro-procedimenti.md")

OGGI = datetime.now(timezone.utc)


# --- REGISTRO DEI PROCEDIMENTI --------------------------------------------
# Fino al 12-08-2026 la lista dei procedimenti sorvegliati era QUI, hardcoded
# (la vecchia tabella SEGNI_VITALI: verbali, L3, log-decisioni, diario). Non
# reggeva la scala: per decine di fili che nascono e muoiono non si edita Python
# ogni volta. Ora la lista e' DATO - il manifesto scritto dai due attivi - e
# questo script ne e' l'interprete.
#
# La divisione del lavoro e' il cuore del meccanismo:
#   il manifesto dichiara l'INTENZIONE   (attivo / cadenza / parcheggiato / proposto)
#   il disco dichiara la REALTA'         (quando l'artefatto e' stato toccato)
#   lo script calcola lo STATO DERIVATO  (orfano / scaduto) confrontandole.
# Nessuno scrive «orfano» a mano: e' cosi' che il registro non puo' mentire in
# silenzio, ed e' la sola forma di documentazione che abbassa il costo di
# manutenzione invece di alzarlo.


def leggi_registro():
    """Estrae le voci dal blocco ```dati del manifesto.
    Riga: nome | intenzione | custode | eta_max | path osservato | fine o condizione"""
    testo = leggi(REGISTRO)
    if not testo:
        return []
    blocco = re.search(r"```dati\r?\n(.*?)```", testo, re.S)
    if not blocco:
        return []
    voci = []
    for riga in blocco.group(1).splitlines():
        riga = riga.strip()
        if not riga or riga.startswith("#"):
            continue
        campi = [c.strip() for c in riga.split("|")]
        if len(campi) < 6:
            continue
        try:
            massimo = int(campi[3])
        except ValueError:
            massimo = None                      # '-' : dorme legittimamente
        voci.append({"nome": campi[0], "intenzione": campi[1], "custode": campi[2],
                     "massimo": massimo, "path": campi[4], "nota": campi[5]})
    return voci


def conto_registro():
    """La riga che Giuseppe guarda: quanti fili, e quanti sono freddi.
    Il numero che scende e' la navicella che guarisce."""
    voci = leggi_registro()
    if not voci:
        return None
    c = {"attivo": 0, "orfano": 0, "scaduto": 0, "parcheggiato": 0, "proposto": 0,
         "concluso": 0}
    for v in voci:
        if v["massimo"] is None:
            c[v["intenzione"]] = c.get(v["intenzione"], 0) + 1
            continue
        eta = eta_giorni(os.path.join(NAV, v["path"]))
        fuori = eta is not None and eta > v["massimo"]
        if v["intenzione"] == "attivo":
            c["orfano" if fuori else "attivo"] += 1
        elif v["intenzione"] == "cadenza" and fuori:
            c["scaduto"] += 1
    # separatore ASCII di proposito: questa riga finisce nella console di Windows,
    # dove un carattere fuori dalla codepage arriva a Giuseppe come mojibake.
    return ("registro: %d attivi | %d ORFANI | %d cadenze scadute | %d parcheggiati | "
            "%d proposti | %d conclusi" % (c["attivo"], c["orfano"], c["scaduto"],
                                           c["parcheggiato"], c["proposto"], c["concluso"]))


def leggi(path):
    try:
        with io.open(path, encoding="utf-8", errors="replace") as f:
            return f.read()
    except OSError:
        return ""


def eta_giorni(path):
    """Eta' in giorni del file, o del file piu' recente se e' una cartella.
    None se non esiste o se una cartella non contiene nulla di utile."""
    if not os.path.exists(path):
        return None
    if os.path.isdir(path):
        recente = None
        for root, _dirs, files in os.walk(path):
            for f in files:
                if f.startswith(".") or f.lower() in ("readme.md",):
                    continue
                if f.startswith("_"):          # i template non contano come output
                    continue
                m = os.path.getmtime(os.path.join(root, f))
                recente = m if recente is None else max(recente, m)
        if recente is None:
            return None
        ts = recente
    else:
        ts = os.path.getmtime(path)
    return (OGGI - datetime.fromtimestamp(ts, timezone.utc)).total_seconds() / 86400.0


# --- CONTROLLI ------------------------------------------------------------

def c1_agenti_caricabili():
    """Il controllo che sarebbe servito il 16 giugno.
    Un agente senza `name` non viene caricato dal runtime, in silenzio."""
    problemi = []
    if not os.path.isdir(AGENTI):
        return ["cartella .claude/agents/ assente"]
    for fn in sorted(os.listdir(AGENTI)):
        if not fn.endswith(".md"):
            continue
        p = os.path.join(AGENTI, fn)
        if os.path.isdir(p):
            continue
        testa = leggi(p)[:800]
        m = re.search(r"^name:\s*(\S+)\s*$", testa, re.M)
        atteso = fn[:-3]
        if not m:
            problemi.append("agente %s: manca il campo `name` -> NON viene caricato" % fn)
        elif m.group(1).strip() != atteso:
            problemi.append("agente %s: name='%s' non corrisponde al file" % (fn, m.group(1)))
        # Il controllo che sarebbe servito il 12 agosto: il frontmatter e' YAML, e
        # un valore scalare NON quotato che contiene ": " lo rompe. Il runtime
        # scarta la definizione in silenzio (4 agenti su 8 invisibili, fra cui
        # Dedalo). Regola: description sempre fra virgolette doppie.
        d = re.search(r"^description:[ \t]*(.*)$", testa, re.M)
        if d:
            val = d.group(1).strip()
            if not (val.startswith('"') or val.startswith("'") or val.startswith("|")
                    or val.startswith(">")) and ": " in val:
                problemi.append("agente %s: description non quotata e contiene ': ' -> "
                                "frontmatter YAML rotto, NON viene caricato" % fn)
    # sotto-cartelle dentro agents/: il runtime le scandaglia, e archivi vecchi
    # possono rubare il nome agli agenti veri (successo il 16/6 con legacy-v1).
    for d in sorted(os.listdir(AGENTI)):
        if os.path.isdir(os.path.join(AGENTI, d)):
            problemi.append(
                "in .claude/agents/ c'e' la sottocartella '%s': viene scandagliata, "
                "puo' rubare i nomi agli agenti veri" % d)
    return problemi


def c2_costituzione_allineata():
    """CLAUDE.md nomina file che devono esistere. E viceversa."""
    problemi = []
    testo = leggi(CLAUDEMD)
    if not testo:
        return ["CLAUDE.md illeggibile o assente"]
    for rel in sorted(set(re.findall(r"`([^`\s]+\.(?:md|py|js|json|ps1))`", testo))):
        if rel.startswith("."):
            cand = os.path.join(NAV, rel)
        else:
            cand = os.path.join(NAV, rel)
        if not os.path.exists(cand) and "/" in rel.replace("\\", "/"):
            problemi.append("CLAUDE.md cita `%s`, che non esiste su disco" % rel)
    # agenti su disco non nominati in costituzione. La costituzione li chiama per
    # RUOLO ("Demiurgo Accademico"), il file per slug ("demiurgo-accademico"):
    # confronto minuscolo, con i trattini sciolti in spazi.
    basso = testo.lower()
    if os.path.isdir(AGENTI):
        for fn in sorted(os.listdir(AGENTI)):
            if not fn.endswith(".md"):
                continue
            slug = fn[:-3].lower()
            if slug not in basso and slug.replace("-", " ") not in basso:
                problemi.append("agente '%s' esiste ma CLAUDE.md non lo nomina mai" % fn[:-3])
    return problemi


def c3_hook_cablati():
    """Ogni script agganciato in settings.json deve esistere."""
    problemi = []
    raw = leggi(SETTINGS)
    if not raw:
        return ["settings.json illeggibile"]
    for path in set(re.findall(r'([A-Za-z]:\\\\[^"]+?\.(?:py|ps1|js))', raw)):
        vero = path.replace("\\\\", "\\")
        if not os.path.exists(vero):
            problemi.append("settings.json aggancia uno script inesistente: %s"
                            % os.path.basename(vero))
    return problemi


def c4_registro():
    """Confronta l'intenzione dichiarata nel manifesto con l'eta' reale dell'artefatto.
    Qui nascono gli stati derivati: orfano (un attivo andato muto) e scaduto (cadenza
    mancata). L'orfano e' la malattia che Giuseppe ha nominato - un filo che nessuno ha
    deciso di fermare e che nessun meccanismo, prima di oggi, sorvegliava."""
    voci = leggi_registro()
    if not voci:
        return ["registro dei procedimenti illeggibile o vuoto: 00-capitano/dedalo/"
                "registro-procedimenti.md (il conto degli orfani non gira)"]
    problemi = []
    for v in voci:
        if v["massimo"] is None:
            # dorme per scelta: l'unico obbligo e' che la condizione sia scritta,
            # altrimenti «parcheggiato» e' solo un modo elegante di dire «dimenticato»
            if v["intenzione"] in ("parcheggiato", "proposto") and len(v["nota"]) < 12:
                problemi.append("%s: %s senza condizione di risveglio/apertura scritta"
                                % (v["nome"], v["intenzione"]))
            continue
        pieno = os.path.join(NAV, v["path"])
        eta = eta_giorni(pieno)
        if eta is None:
            # due casi diversi che non vanno confusi: il path sbagliato rende il
            # controllo cieco (colpa nostra), la cartella vuota e' un dato vero
            if os.path.exists(pieno):
                problemi.append("%s: nessun output finora in %s (custode %s)"
                                % (v["nome"], v["path"], v["custode"]))
            else:
                problemi.append("%s: l'artefatto osservato non esiste (%s) - controllo cieco"
                                % (v["nome"], v["path"]))
        elif eta > v["massimo"]:
            if v["intenzione"] == "attivo":
                problemi.append("ORFANO %s: dichiarato attivo, muto da %d giorni "
                                "(soglia %d, custode %s)"
                                % (v["nome"], int(eta), v["massimo"], v["custode"]))
            elif v["intenzione"] == "cadenza":
                problemi.append("%s: fermo da %d giorni (cadenza dichiarata: %d)"
                                % (v["nome"], int(eta), v["massimo"]))
    return problemi


def c5_in_attesa_di_giuseppe():
    """Il controllo che da solo ripaga lo script: cosa aspetta una sua parola,
    e da quanto. Il 31/7 rispondeva: cinque cose, ventinove giorni."""
    problemi = []
    testo = leggi(CANTIERE)
    if testo:
        blocco = re.split(r"^#+\s*.*consenso.*$", testo, flags=re.M | re.I)
        if len(blocco) > 1:
            voci = re.findall(r"^\s*[-*]\s+(.{10,120})", blocco[1], re.M)
            eta = eta_giorni(CANTIERE)
            if voci:
                problemi.append("%d decisioni aspettano una tua parola (cantiere-notturno, "
                                "fermo da %d giorni)" % (len(voci), int(eta or 0)))
    if os.path.isdir(INTAKE):
        # il README della cartella e' la sua spec, non materiale da processare
        n = len([f for f in os.listdir(INTAKE)
                 if f.endswith(".md") and f.lower() != "readme.md"])
        if n:
            eta = eta_giorni(INTAKE)
            problemi.append("intake: %d file non processati (il piu' recente ha %d giorni)"
                            % (n, int(eta or 0)))
    return problemi


CONTROLLI = [
    ("agenti non caricabili", c1_agenti_caricabili),
    ("costituzione disallineata", c2_costituzione_allineata),
    ("hook rotti", c3_hook_cablati),
    ("procedimenti fermi", c4_registro),
    ("in attesa di te", c5_in_attesa_di_giuseppe),
]

# Quello che finisce davanti agli occhi di Giuseppe: solo le categorie che
# richiedono lui, o che rompono il sistema in silenzio. Il resto va nel dettaglio.
URGENTI = {"agenti non caricabili", "hook rotti", "in attesa di te"}


def main():
    esiti = []
    for nome, fn in CONTROLLI:
        try:
            esiti.append((nome, fn()))
        except Exception as e:                      # un controllo rotto non rompe la sessione
            esiti.append((nome, ["controllo '%s' fallito: %s" % (nome, e)]))

    urgenti = [(n, p) for n, p in esiti if p and n in URGENTI]
    tutti = [(n, p) for n, p in esiti if p]

    conto = conto_registro()

    if "--umano" in sys.argv:
        if conto:
            sys.stdout.write(conto + "\n")
        if not tutti:
            sys.stdout.write("Costituzione allineata: nessun problema rilevato.\n")
            return
        for nome, probs in tutti:
            sys.stdout.write("\n[%s]\n" % nome.upper())
            for p in probs:
                sys.stdout.write("  - %s\n" % p)
        return

    if not tutti:
        return                                       # silenzio: il caso normale

    # --- messaggio per Giuseppe: massimo 5 righe, le cose che richiedono lui ---
    righe = []
    for nome, probs in (urgenti or tutti):
        for p in probs:
            righe.append("- " + p)
    # il conto apre il messaggio: e' il numero che deve scendere, e vederlo
    # scendere e' il solo modo in cui un registro resta vivo invece che temuto
    capo = [conto] if conto else []
    posti = 4 - len(capo)                     # 5 righe totali, intestazione compresa
    if len(righe) > posti:
        extra = len(righe) - (posti - 1)
        righe = righe[:posti - 1]
        righe.append("- e %s (`python 00-capitano/scripts/verifica-costituzione.py --umano`)"
                     % ("un'altra segnalazione" if extra == 1
                        else "altre %d segnalazioni" % extra))
    righe = capo + righe

    # --- dettaglio completo per l'agente attivo ---
    dett = ["VERIFICA COSTITUZIONE (SessionStart, %s):" % OGGI.strftime("%Y-%m-%d %H:%M UTC")]
    if conto:
        dett.append("  " + conto)
    for nome, probs in tutti:
        dett.append("  [%s]" % nome)
        for p in probs:
            dett.append("    - %s" % p)

    out = {
        "systemMessage": "Navicella — controlli non superati:\n" + "\n".join(righe),
        "hookSpecificOutput": {
            "hookEventName": "SessionStart",
            "additionalContext": "\n".join(dett),
        },
    }
    sys.stdout.write(json.dumps(out, ensure_ascii=False))


if __name__ == "__main__":
    try:
        main()
    except Exception:
        pass                                          # mai rompere l'avvio di sessione

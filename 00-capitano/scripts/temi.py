#!/usr/bin/env python
"""temi.py - il motore della libreria delle fonti. Dedalo, 2026-08-12.

Perche' esiste: la schiusura delle 44 fonti si arenava a ogni giro perche' mancava
la casa. Una fonte data, letta una volta e finita in un documento di ricerca non e'
archiviata: e' persa, perche' nessuno puo' interrogarla. Temi e' quel posto.

Il catalogo (00-capitano/temi/catalogo-fonti.md) e' DATO; questo script e' il suo
interprete - stessa divisione del registro dei procedimenti. Il file non contiene
codice e il codice non contiene la lista.

Uso:
  temi.py --cerca "spin ETH"       cosa ho gia' su questo tema (prima di ricostruire)
  temi.py --aggiungi <url> [--verdetto v] [--apparato X] [--tag a,b] [--nota "..."]
  temi.py --elenco [--verdetto differita] [--apparato D]
  temi.py --stato                  conteggio per verdetto e per apparato
  temi.py --coda                   le differite e le influenti: la promessa da mantenere

Regola di Strict Pruning: quando una fonte entra e' `da-potare`. Diventa `usata` solo
quando qualcosa di suo e' stato ADATTATO in codice nostro - mai per averla clonata.
"""
import io
import json
import os
import re
import sys
import time

HERE = os.path.dirname(os.path.abspath(__file__))
NAV = os.path.abspath(os.path.join(HERE, "..", ".."))
CATALOGO = os.path.join(NAV, "00-capitano", "temi", "catalogo-fonti.md")
CANCELLO = os.path.join(NAV, "00-capitano", "temi", "cancello-esterno.md")
CHIAMATE = os.path.join(NAV, "00-capitano", "temi", "chiamate-esterne.jsonl")

VERDETTI = ("usata", "influente", "differita", "marginale", "da-potare")
CAMPI = ("nome", "url", "verdetto", "apparato", "tag", "nota")


def leggi():
    if not os.path.exists(CATALOGO):
        sys.exit("catalogo assente: %s" % CATALOGO)
    with io.open(CATALOGO, encoding="utf-8", errors="replace") as f:
        testo = f.read()
    blocco = re.search(r"```dati\r?\n(.*?)```", testo, re.S)
    if not blocco:
        sys.exit("catalogo senza blocco ```dati")
    fonti = []
    for riga in blocco.group(1).splitlines():
        riga = riga.strip()
        if not riga or riga.startswith("#"):
            continue
        campi = [c.strip() for c in riga.split("|")]
        if len(campi) < 6:
            continue
        fonti.append(dict(zip(CAMPI, campi[:6])))
    return testo, fonti


def scrivi(testo, riga_nuova):
    """Inserisce in coda al blocco dati, senza toccare il resto del documento."""
    def sostituisci(m):
        return "```dati\n" + m.group(1).rstrip("\n") + "\n" + riga_nuova + "\n```"
    nuovo = re.sub(r"```dati\r?\n(.*?)```", sostituisci, testo, count=1, flags=re.S)
    with io.open(CATALOGO, "w", encoding="utf-8") as f:
        f.write(nuovo)


def arg(nome, default=None):
    if nome in sys.argv:
        i = sys.argv.index(nome)
        if i + 1 < len(sys.argv):
            return sys.argv[i + 1]
    return default


def mostra(f, largo=False):
    testa = "%-46s %-10s %-2s" % (f["nome"][:46], f["verdetto"], f["apparato"])
    if largo:
        return testa + "\n    " + f["nota"] + "\n    tag: " + f["tag"] + "  " + f["url"]
    return testa + "  " + f["nota"][:60]


def cmd_cerca(fonti, query):
    """Cerca in nome, tag e nota. Ordina per numero di termini trovati: una fonte
    che risponde a due parole della domanda vale piu' di una che ne risponde a una."""
    termini = [t.lower() for t in re.split(r"[\s,]+", query) if len(t) > 1]
    esiti = []
    for f in fonti:
        testo = (f["nome"] + " " + f["tag"] + " " + f["nota"]).lower()
        punti = sum(1 for t in termini if t in testo)
        if punti:
            esiti.append((punti, f))
    if not esiti:
        print("nessuna fonte per: %s" % query)
        print("(se e' un buco vero, e' materia dell'Argonauta: cercare fuori)")
        return
    esiti.sort(key=lambda e: -e[0])
    print("%d fonti per «%s» - dal piu' pertinente:\n" % (len(esiti), query))
    for punti, f in esiti:
        print(mostra(f, largo=True))
        print()


def cmd_aggiungi(testo, fonti, url):
    nome = re.sub(r"^https?://(www\.)?github\.com/", "", url.rstrip("/"))
    for f in fonti:
        if f["url"] == url or f["nome"] == nome:
            print("gia' in catalogo: %s [%s]" % (f["nome"], f["verdetto"]))
            print("  %s" % f["nota"])
            return
    riga = " | ".join([
        nome,
        url,
        arg("--verdetto", "da-potare"),
        arg("--apparato", "-"),
        arg("--tag", "da-classificare"),
        arg("--nota", "entrata il giorno in cui Giuseppe l'ha data; da potare"),
    ])
    scrivi(testo, riga)
    print("aggiunta: %s" % nome)
    print("  verdetto: %s   (diventa `usata` solo quando qualcosa di suo e' adattato in codice nostro)"
          % arg("--verdetto", "da-potare"))


def cmd_elenco(fonti):
    v, a = arg("--verdetto"), arg("--apparato")
    sel = [f for f in fonti
           if (not v or f["verdetto"] == v) and (not a or f["apparato"] == a)]
    for f in sorted(sel, key=lambda f: (f["verdetto"], f["apparato"], f["nome"])):
        print(mostra(f))
    print("\n%d fonti" % len(sel))


def cmd_stato(fonti):
    per_v, per_a = {}, {}
    for f in fonti:
        per_v[f["verdetto"]] = per_v.get(f["verdetto"], 0) + 1
        per_a[f["apparato"]] = per_a.get(f["apparato"], 0) + 1
    print("Temi - %d fonti in catalogo\n" % len(fonti))
    for v in VERDETTI:
        if per_v.get(v):
            print("  %-10s %3d" % (v, per_v[v]))
    print("\n  per apparato: " + "  ".join("%s=%d" % (k, per_a[k]) for k in sorted(per_a)))
    coda = per_v.get("differita", 0) + per_v.get("influente", 0) + per_v.get("da-potare", 0)
    print("\n  in coda (differite + influenti + da potare): %d" % coda)
    print("  e' la promessa da mantenere: `temi.py --coda` per vederla in faccia.")


def cmd_coda(fonti):
    """Il controllo scomodo: cio' che e' stato messo 'per dopo'. Parcheggiare e'
    legittimo, ma e' anche il travestimento con cui una buona idea muore."""
    coda = [f for f in fonti if f["verdetto"] in ("differita", "influente", "da-potare")]
    for ap in sorted(set(f["apparato"] for f in coda)):
        gruppo = [f for f in coda if f["apparato"] == ap]
        print("\n[apparato %s] %d fonti" % (ap, len(gruppo)))
        for f in sorted(gruppo, key=lambda f: f["nome"]):
            print("  %-44s %-10s %s" % (f["nome"][:44], f["verdetto"], f["nota"][:52]))
    print("\n%d fonti aspettano. Una coda che nessuno guarda e' un cimitero." % len(coda))


# ---------------------------------------------------------------------------
# CANCELLO ESTERNO — comandi --puo-uscire, --posso-mandare, --registra, --cancello
# ---------------------------------------------------------------------------

def leggi_cancello():
    """Legge cancello-esterno.md e ritorna i dati strutturati.
    Tiene il dato separato dal codice: quando un limite cambia si modifica
    il file, non lo script."""
    if not os.path.exists(CANCELLO):
        sys.exit("cancello assente: %s" % CANCELLO)
    with io.open(CANCELLO, encoding="utf-8", errors="replace") as f:
        testo = f.read()
    blocco = re.search(r"```dati\r?\n(.*?)```", testo, re.S)
    if not blocco:
        sys.exit("cancello-esterno.md senza blocco ```dati")
    dati = {"providers": {}, "percorsi_vietati": [], "parole_blocco": []}
    for riga in blocco.group(1).splitlines():
        riga = riga.strip()
        if not riga or riga.startswith("#"):
            continue
        campi = [c.strip() for c in riga.split("|")]
        if not campi:
            continue
        tipo = campi[0]
        if tipo == "provider" and len(campi) >= 8:
            nome = campi[1]
            try:
                rpm = int(campi[3])
                rpd = int(campi[4])
                tpm = int(campi[5])
                ctx_k = int(campi[6])
            except (ValueError, IndexError):
                rpm = rpd = tpm = ctx_k = 0
            dati["providers"][nome] = {
                "stato": campi[2],
                "rpm": rpm,
                "rpd": rpd,
                "tpm": tpm,
                "ctx_k": ctx_k,
                "motivo": campi[7] if len(campi) > 7 else "",
            }
        elif tipo == "percorso-vietato" and len(campi) >= 3:
            dati["percorsi_vietati"].append((campi[1], campi[2]))
        elif tipo == "parola-blocco" and len(campi) >= 3:
            dati["parole_blocco"].append((campi[1], campi[2]))
    return dati


def _parse_iso(ts_str):
    """Converte stringa ISO 8601 (senza fuso) in timestamp Unix.
    Formato fisso — quello che scriviamo noi — cosi' non serve dateutil."""
    ts_str = ts_str.rstrip("Z").split(".")[0]
    try:
        t = time.strptime(ts_str, "%Y-%m-%dT%H:%M:%S")
        return time.mktime(t)
    except (ValueError, TypeError):
        return None


def _leggi_chiamate_finestra(provider, adesso, finestra):
    """Legge il JSONL e ritorna i timestamp delle chiamate al provider
    negli ultimi <finestra> secondi.
    Lettura da file (non da memoria) cosi' due processi paralleli
    vedono lo stesso stato e non sfondano insieme il tetto."""
    if not os.path.exists(CHIAMATE):
        return []
    soglia = adesso - finestra
    timestamps = []
    try:
        with io.open(CHIAMATE, encoding="utf-8", errors="replace") as f:
            for riga in f:
                riga = riga.strip()
                if not riga:
                    continue
                try:
                    rec = json.loads(riga)
                    if rec.get("provider") != provider:
                        continue
                    ts = _parse_iso(rec.get("ts", ""))
                    if ts and ts >= soglia:
                        timestamps.append(ts)
                except (ValueError, KeyError):
                    continue
    except Exception:
        return []
    return timestamps


def _args_dopo(nome, n):
    """Raccoglie n argomenti posizionali dopo il flag <nome>.
    Permette comandi multi-argomento senza un parser di opzioni esterno."""
    if nome in sys.argv:
        i = sys.argv.index(nome)
        vals = sys.argv[i + 1:i + 1 + n]
        if len(vals) == n:
            return vals
    return None


def cmd_puo_uscire(percorso, cancello):
    """Tre livelli in ordine; il primo che dice no chiude con codice 1.
    Un rifiuto vago viene aggirato, uno che dice quale livello ha chiuso
    e perche' no."""
    percorso_norm = percorso.replace("\\", "/")

    # --- Livello (a): percorso ---
    for prefisso, motivo in cancello["percorsi_vietati"]:
        pref_norm = prefisso.replace("\\", "/")
        if pref_norm in percorso_norm:
            print("RIFIUTATO")
            print("Livello: percorso")
            print("Ragione: il percorso contiene '%s' — %s" % (prefisso, motivo))
            sys.exit(1)

    # Marcatori di livello L3/L4/L5 nel nome file o nella struttura del percorso:
    # un file di identita' spostato non bypassa il cancello per nome neutro.
    nome_file = os.path.basename(percorso)
    parti = percorso_norm.split("/")
    for liv in ("L3", "L4", "L5"):
        if ("-" + liv + ".") in nome_file or ("_" + liv + "_") in nome_file:
            print("RIFIUTATO")
            print("Livello: percorso")
            print("Ragione: il file porta il marcatore %s nel nome" % liv)
            sys.exit(1)
        if liv in parti:
            print("RIFIUTATO")
            print("Livello: percorso")
            print("Ragione: il percorso attraversa la directory '%s'" % liv)
            sys.exit(1)

    # --- Lettura del file (serve a livello b e c) ---
    if not os.path.exists(percorso):
        print("RIFIUTATO")
        print("Livello: percorso")
        print("Ragione: file non trovato")
        sys.exit(1)
    try:
        with io.open(percorso, encoding="utf-8", errors="replace") as f:
            contenuto = f.read()
    except Exception as e:
        print("RIFIUTATO")
        print("Livello: percorso")
        print("Ragione: impossibile leggere il file — %s" % e)
        sys.exit(1)

    # --- Livello (b): contenuto ---
    for parola, motivo in cancello["parole_blocco"]:
        if parola in contenuto:
            print("RIFIUTATO")
            print("Livello: contenuto")
            print("Ragione: il testo contiene '%s' — %s" % (parola, motivo))
            sys.exit(1)

    # --- Livello (c): dimensione ---
    # Stima grossolana: 1 token ~ 4 caratteri.
    # Previene l'invio di file che troncherebbero a meta' sul modello.
    token_stimati = len(contenuto) // 4
    ctx_verde = [p["ctx_k"] for p in cancello["providers"].values()
                 if p["stato"] == "VERDE" and p["ctx_k"] > 0]
    if ctx_verde:
        ctx_min_k = min(ctx_verde)
        ctx_min = ctx_min_k * 1000
        if token_stimati > ctx_min:
            print("RIFIUTATO")
            print("Livello: dimensione")
            print("Ragione: stima %d token supera il contesto del provider piu' piccolo (%dK)"
                  % (token_stimati, ctx_min_k))
            sys.exit(1)

    print("AMMESSO")
    print("Token stimati: ~%d" % token_stimati)
    sys.exit(0)


def cmd_posso_mandare(provider, cancello):
    """Finestra scorrevole a 80%% del limite dichiarato; contatore sul file
    cosi' due processi paralleli non sfondano insieme il tetto."""
    if provider not in cancello["providers"]:
        print("RIFIUTATO")
        print("Ragione: provider '%s' non in cancello-esterno.md" % provider)
        sys.exit(1)
    info = cancello["providers"][provider]
    if info["stato"] != "VERDE":
        print("RIFIUTATO")
        print("Ragione: provider '%s' stato=%s" % (provider, info["stato"]))
        print("Motivo: %s" % info["motivo"])
        sys.exit(1)
    rpm = info["rpm"]
    if rpm <= 0:
        print("RIFIUTATO")
        print("Ragione: limite RPM non definito per '%s'" % provider)
        sys.exit(1)

    tetto = int(rpm * 0.8)  # 80%: il conteggio del provider e il nostro non coincidono mai
    adesso = time.time()
    finestra = 60.0
    chiamate = _leggi_chiamate_finestra(provider, adesso, finestra)
    conteggio = len(chiamate)

    if conteggio < tetto:
        rimaste = tetto - conteggio
        print("AMMESSO")
        print("Provider: %s  (RPM dichiarato: %d  tetto operativo: %d)"
              % (provider, rpm, tetto))
        print("Finestra 60s: %d/%d  rimaste: %d" % (conteggio, tetto, rimaste))
        sys.exit(0)
    else:
        if chiamate:
            ts_piu_vecchia = min(chiamate)
            attesa = finestra - (adesso - ts_piu_vecchia)
            attesa = max(1, int(attesa) + 1)
        else:
            attesa = 1
        print("ATTENDERE")
        print("Provider: %s  tetto operativo raggiunto (%d/%d nel minuto)"
              % (provider, conteggio, tetto))
        print("Secondi da attendere: %d" % attesa)
        sys.exit(1)


def cmd_registra(provider, modello, token_str, esito):
    """Append-only al JSONL; usa un lock file per evitare scritture
    concorrenti che corrompono la finestra scorrevole.
    Se il lock e' stantio (> 5 secondi) viene rimosso: previene deadlock
    da crash del processo che lo teneva."""
    try:
        token_n = int(token_str)
    except ValueError:
        token_n = 0
    adesso_str = time.strftime("%Y-%m-%dT%H:%M:%S")
    record = json.dumps({
        "ts": adesso_str,
        "provider": provider,
        "modello": modello,
        "token": token_n,
        "esito": esito,
    }, ensure_ascii=False)

    lock = CHIAMATE + ".lock"
    max_tentativi = 20
    for _ in range(max_tentativi):
        # Rimuove lock stantio (da crash) cosi' non blocca per sempre
        if os.path.exists(lock):
            try:
                eta = time.time() - os.path.getmtime(lock)
                if eta > 5:
                    os.remove(lock)
            except OSError:
                pass
        try:
            fd = os.open(lock, os.O_CREAT | os.O_EXCL | os.O_WRONLY)
            os.close(fd)
            break
        except OSError:
            time.sleep(0.05)
    else:
        sys.exit("impossibile acquisire il lock per scrivere su chiamate-esterne.jsonl")

    try:
        with io.open(CHIAMATE, "a", encoding="utf-8") as f:
            f.write(record + "\n")
    finally:
        try:
            os.remove(lock)
        except OSError:
            pass

    print("registrato: %s  %s  %d token  [%s]  %s"
          % (adesso_str, provider, token_n, esito, modello))


def cmd_cancello_stato(cancello):
    """Quadro del cancello: stato di ogni provider e chiamate nella finestra corrente."""
    adesso = time.time()
    finestra = 60.0
    print("Cancello esterno — %s\n" % time.strftime("%Y-%m-%dT%H:%M:%S"))
    print("Provider VERDE (ammessi):")
    for nome in sorted(cancello["providers"]):
        info = cancello["providers"][nome]
        if info["stato"] != "VERDE":
            continue
        chiamate = _leggi_chiamate_finestra(nome, adesso, finestra)
        tetto = int(info["rpm"] * 0.8)
        rimaste = max(0, tetto - len(chiamate))
        print("  %-22s  finestra: %2d/%2d  rimaste: %2d  (RPM %d)"
              % (nome, len(chiamate), tetto, rimaste, info["rpm"]))
    print("\nProvider non ammessi:")
    for nome in sorted(cancello["providers"]):
        info = cancello["providers"][nome]
        if info["stato"] == "VERDE":
            continue
        print("  %-22s  %-12s  %s" % (nome, info["stato"], info["motivo"][:55]))
    print("\nPercorsi vietati:")
    for pref, motivo in cancello["percorsi_vietati"]:
        print("  %-35s %s" % (pref, motivo))
    print("\nParole bloccate: %s" % ", ".join(p for p, _ in cancello["parole_blocco"]))
    if os.path.exists(CHIAMATE):
        n_righe = sum(1 for _ in io.open(CHIAMATE, encoding="utf-8", errors="replace"))
        print("\nLog chiamate: %d righe  (%s)" % (n_righe, CHIAMATE))
    else:
        print("\nLog chiamate: assente (nessuna chiamata ancora registrata)")


def main():
    # Comandi del cancello (non richiedono il catalogo fonti)
    if "--puo-uscire" in sys.argv:
        cmd_puo_uscire(arg("--puo-uscire", ""), leggi_cancello())
    elif "--posso-mandare" in sys.argv:
        cmd_posso_mandare(arg("--posso-mandare", ""), leggi_cancello())
    elif "--registra" in sys.argv:
        vals = _args_dopo("--registra", 4)
        if not vals:
            sys.exit("uso: temi.py --registra <provider> <modello> <token> <esito>")
        cmd_registra(*vals)
    elif "--cancello" in sys.argv:
        cmd_cancello_stato(leggi_cancello())
    # Comandi del catalogo fonti
    elif "--cerca" in sys.argv:
        testo, fonti = leggi()
        cmd_cerca(fonti, arg("--cerca", ""))
    elif "--aggiungi" in sys.argv:
        testo, fonti = leggi()
        cmd_aggiungi(testo, fonti, arg("--aggiungi", ""))
    elif "--elenco" in sys.argv:
        testo, fonti = leggi()
        cmd_elenco(fonti)
    elif "--coda" in sys.argv:
        testo, fonti = leggi()
        cmd_coda(fonti)
    else:
        testo, fonti = leggi()
        cmd_stato(fonti)


if __name__ == "__main__":
    main()

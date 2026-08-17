#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""oroboro.py — il ciclo che non si ferma. Dedalo, 2026-08-16.

Che cos'e', nelle parole di Giuseppe della carta fondativa del 16 agosto:
«Oroboro deve essere il sistema che gestisce il continuo riavvio della prossima
task. Questo deve superare i limiti della sessione, deve superare problemi di
token, deve essere lo strumento di continuita' fra sistemi staccati; deve essere
quindi colui che gestisce questa coda e che gestisce il riavvio effettivo della
navicella nelle sue operazioni.»

Perche' non esisteva ancora, ed e' un difetto misurabile. `notturno.py` esegue
**una voce sola** e finisce: un colpo alle 03:00, nessun ritentativo. Nel log dei
run, cinque volte su nove il colpo e' morto sul limite di sessione entro pochi
secondi — e da li' fino al mattino la macchina e' rimasta accesa a non fare
niente. La notte ha otto ore; ne usavamo una frazione, e solo quando il caso
voleva che il monte fosse pieno.

Le tre cose che questo ciclo fa e che il colpo singolo non faceva:

**1. Attraversa la coda invece di assaggiarla.** Finita una voce, la spunta e
passa alla successiva. Non ricorda a che punto era: **rilegge la coda ogni giro**,
quindi se Giuseppe aggiunge una voce mentre dorme, il ciclo la trova.

**2. Aspetta il reset invece di morire.** Il messaggio d'errore del limite
contiene l'ora in cui il monte si riazzera — e' un dato che il runtime ci mette
dentro, e ad agosto abbiamo pagato tre volte per non averlo letto (Teia misurava
una finestra scorrevole inventata invece di leggere l'ora dichiarata). Qui la si
legge, si dorme fino a quel momento, e si **riprende la stessa voce**, non la
successiva: una voce interrotta e' un lavoro a meta', non un lavoro fatto.

**3. Non decide.** Esegue soltanto cio' che sta nella coda, nell'ordine della
coda. Non aggiunge voci, non riordina, non sceglie cosa vale la pena fare. E' la
regola costituzionale scritta in coda.md e vale qui identica: **le mani sono
libere, la rotta no** — e la rotta, qui, e' la coda.

Come si ferma: si crea il file `00-capitano/notturno/STOP`, oppure scade il
budget di ore. Entrambe le vie lasciano lo stato pulito.

Uso:
  oroboro.py                      gira fino a coda vuota o 8 ore
  oroboro.py --ore 3              budget diverso
  oroboro.py --secco              dice cosa farebbe, senza fare niente
  oroboro.py --stato              a che punto e' la coda
"""
import io
import os
import re
import sys
import time
from datetime import datetime, timedelta

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import notturno as N                                            # noqa: E402

DIARIO = os.path.join(N.BASE, "oroboro.log")
ORE_DI_DEFAULT = 8.0
MARGINE_RESET = 120          # secondi di margine dopo l'ora dichiarata di reset
RIPOSO_FRA_VOCI = 20         # secondi fra una voce e l'altra: non e' timidezza, e'
                             # che due sessioni attaccate contano come un picco


def annota(msg):
    riga = "%s | %s" % (datetime.now().strftime("%Y-%m-%d %H:%M:%S"), msg)
    with io.open(DIARIO, "a", encoding="utf-8") as f:
        f.write(riga + u"\n")
    print(riga)
    sys.stdout.flush()


def ora_di_reset(testo):
    """Estrae dall'errore l'ora in cui il monte si riazzera.

    Il runtime scrive «resets 4:20pm (Europe/Rome)» dentro il messaggio: il dato
    e' li' da sempre. La prima guardia dei token, ad agosto, lo ignorava e
    stimava una finestra scorrevole — misurando con cura una grandezza sbagliata,
    tre volte di fila. Qui si legge quello che c'e' scritto.

    Ritorna un datetime nel futuro, oppure None se il testo non parla di limite."""
    if not testo:
        return None
    basso = testo.lower()
    # Si riconosce SOLO la formula che emette il runtime. La prima stesura
    # accettava anche la parola italiana «limite», e "tutto bene, nessun limite"
    # veniva letta come un blocco: gli agenti della navicella scrivono in italiano
    # e del limite parlano di continuo, quindi il ciclo si sarebbe addormentato a
    # ogni menzione. Costo potenziale: una notte intera passata a dormire.
    if not any(s in basso for s in ("session limit", "usage limit",
                                    "limite di sessione", "rate limit")):
        return None
    m = re.search(r"resets?\s+(\d{1,2})(?::(\d{2}))?\s*(am|pm)?", testo, re.I)
    if not m:
        # limite dichiarato ma senza ora: si aspetta un'ora, che e' meglio di
        # ritentare subito e bruciare il tentativo.
        return datetime.now() + timedelta(hours=1)
    ora = int(m.group(1))
    minuti = int(m.group(2) or 0)
    meridiano = (m.group(3) or "").lower()
    if meridiano == "pm" and ora != 12:
        ora += 12
    elif meridiano == "am" and ora == 12:
        ora = 0
    ora = ora % 24
    adesso = datetime.now()
    bersaglio = adesso.replace(hour=ora, minute=minuti, second=0, microsecond=0)
    if bersaglio <= adesso:
        bersaglio += timedelta(days=1)
    return bersaglio


def dormi_fino(quando, scadenza):
    """Dorme fino al reset, ma non oltre la fine del budget: se il monte torna
    dopo che il turno e' finito, non ha senso restare svegli."""
    secondi = (quando - datetime.now()).total_seconds() + MARGINE_RESET
    if secondi <= 0:
        return True
    if datetime.now() + timedelta(seconds=secondi) > scadenza:
        annota("Il reset (%s) cade oltre la fine del turno. Chiudo qui."
               % quando.strftime("%H:%M"))
        return False
    annota("LIMITE | dormo %d minuti, fino alle %s piu' due di margine"
           % (secondi / 60, quando.strftime("%H:%M")))
    # a fette, cosi' lo STOP viene visto anche durante l'attesa
    finito = time.time() + secondi
    while time.time() < finito:
        if os.path.exists(N.STOP):
            annota("STOP durante l'attesa del reset.")
            return False
        time.sleep(min(60, finito - time.time()))
    return True


def prima_voce():
    """La prima voce non spuntata. Si rilegge la coda ogni volta, di proposito:
    e' cosi' che una voce aggiunta durante la notte viene raccolta."""
    testo = N.leggi(N.CODA)
    aperte = N.voci_aperte(testo)
    return (testo, aperte[0]) if aperte else (testo, None)


def stato():
    testo = N.leggi(N.CODA)
    aperte = N.voci_aperte(testo)
    print("voci aperte nella coda: %d" % len(aperte))
    for i, (_, v) in enumerate(aperte, 1):
        print("  %d. %s" % (i, N.titolo_di(v)))
    if os.path.exists(N.STOP):
        print("\nATTENZIONE: esiste il file STOP — il ciclo si fermerebbe subito.")


def ponte_e_gateway():
    """Se il ponte e' alzato, il gateway diventa l'unico motore: senza di lui ogni
    `claude -p` fallisce all'istante.

    Perche' esiste questo controllo (domanda di Giuseppe, 17-08): col ponte su, il
    pericolo per la notte non e' piu' il limite di sessione — e' che OmniRoute non
    stia girando. In quel caso il ciclo brucerebbe quindici voci in due minuti
    scrivendo quindici fallimenti, e al risveglio la coda sarebbe intatta ma il
    turno perso. Meglio non partire affatto e dirlo.

    **Si interroga la stessa porta, con le stesse credenziali e sullo stesso
    percorso che usera' la sessione notturna.** La prima stesura chiedeva
    `/v1/models` senza chiave: quella richiesta non riceve un 401, resta appesa
    finche' non scade il timeout, e il ciclo concludeva «gateway spento» con il
    gateway acceso e funzionante (misurato stanotte, 17-08 00:04). Era il difetto
    di sempre in forma nuova — una guardia che misura una grandezza vicina a
    quella giusta e riporta con sicurezza l'esito sbagliato. Qui si manda una
    richiesta vera al modello dichiarato in ANTHROPIC_MODEL: e' l'unica prova che
    valga, ed e' la stessa lezione del pallino verde della dashboard.

    Ritorna (ponte_alzato, dettaglio): `dettaglio` e' la stringa da scrivere nel
    diario — chi ha servito, oppure perche' non ha servito. `None` significa
    gateway muto. Se il ponte e' giu', il gateway non c'entra e non lo si
    interroga."""
    impostazioni = os.path.join(os.path.expanduser("~"), ".claude", "settings.json")
    import json
    try:
        env = json.loads(io.open(impostazioni, encoding="utf-8").read()).get("env", {})
    except Exception:                                            # noqa
        return False, None
    base = env.get("ANTHROPIC_BASE_URL")
    if not base:
        return False, None
    corpo = json.dumps({"model": env.get("ANTHROPIC_MODEL") or "nav-ragiona",
                        "max_tokens": 200,
                        "messages": [{"role": "user", "content": "Scrivi: vivo"}]
                        }).encode("utf-8")
    try:
        from urllib.request import Request, urlopen
        req = Request(base.rstrip("/") + "/v1/messages", data=corpo, headers={
            "Content-Type": "application/json", "anthropic-version": "2023-06-01",
            "x-api-key": env.get("ANTHROPIC_AUTH_TOKEN", ""),
            "User-Agent": "navicella-oroboro/1.0"})
        d = json.loads(urlopen(req, timeout=60).read().decode("utf-8", "replace"))
        # Basta che abbia servito un modello: un'uscita senza testo qui non e' un
        # guasto, e' un modello che ha speso il tetto ragionando — e per la notte
        # l'unica domanda e' se la catena eroga.
        if d.get("model") or d.get("content"):
            return True, "servito da %s" % (d.get("model") or "?")
        return True, None
    except Exception as e:                                       # noqa
        # Il motivo finisce nel diario: «spento» senza il perche' costa a Giuseppe
        # la mattina dopo passata a indovinare quale pezzo manca.
        annota("  la prova al gateway e' fallita: %s" % (u"%s" % e)[:160])
        return True, None


def gira(ore, secco):
    scadenza = datetime.now() + timedelta(hours=ore)
    annota("=" * 60)
    annota("OROBORO parte. Budget %.1f ore, fino alle %s."
           % (ore, scadenza.strftime("%H:%M")))

    alzato, dettaglio = ponte_e_gateway()
    if alzato and not dettaglio:
        annota("PONTE ALZATO MA GATEWAY SPENTO. Non parto.")
        annota("  Ogni sessione fallirebbe all'istante e il turno andrebbe perso a vuoto.")
        annota("  Rimedi: accendere OmniRoute, oppure `ponte.py --giu` per tornare")
        annota("  sull'abbonamento — e in quel caso il limite torna a essere il vincolo,")
        annota("  che questo ciclo sa gestire.")
        return
    annota("ponte: %s" % ("ALZATO, %s" % dettaglio if alzato else
                          "giu' — si gira sull'abbonamento, col limite gestito"))
    fatte, fallite = 0, 0

    while datetime.now() < scadenza:
        if os.path.exists(N.STOP):
            annota("STOP trovato. Mi fermo.")
            break
        testo, voce = prima_voce()
        if voce is None:
            annota("CODA VUOTA. Non c'e' altro da fare, e non e' compito mio inventarlo.")
            break
        riga, corpo = voce
        titolo = N.titolo_di(corpo)
        annota("VOCE  | %s" % titolo)

        if secco:
            annota("  (--secco: non eseguo)")
            break

        esito = N.esegui(corpo, riga)
        if esito is None:
            break
        ok, rel, uscita = esito

        reset = ora_di_reset(uscita)
        if reset is not None:
            annota("  limite di sessione durante «%s»" % titolo)
            if not dormi_fino(reset, scadenza):
                break
            annota("  monte tornato: **riprendo la stessa voce**, non la successiva.")
            continue                       # NON si spunta: il lavoro non e' finito

        if ok:
            N.spunta(N.leggi(N.CODA), riga, rel)
            fatte += 1
            annota("  CHIUSA | paper: %s" % rel)
        else:
            fallite += 1
            annota("  FALLITA senza limite: %s" % (uscita or "").replace("\n", " ")[:200])
            annota("  la lascio aperta e passo oltre: un fallimento che si ripete subito\n"
                   "  si ripete uguale, e brucerebbe il turno su una sola voce.")
            # per non riprovarla all'infinito, si esce se e' la sola rimasta
            _, ancora = prima_voce()
            if ancora and N.titolo_di(ancora[1]) == titolo:
                annota("  ed e' l'unica voce aperta: chiudo il turno.")
                break

        time.sleep(RIPOSO_FRA_VOCI)

    annota("OROBORO chiude. Voci chiuse: %d. Fallite: %d. Restano aperte: %d."
           % (fatte, fallite, len(N.voci_aperte(N.leggi(N.CODA)))))
    annota("=" * 60)


if __name__ == "__main__":
    a = sys.argv[1:]
    if "--stato" in a:
        stato()
    else:
        ore = float(a[a.index("--ore") + 1]) if "--ore" in a else ORE_DI_DEFAULT
        gira(ore, "--secco" in a)

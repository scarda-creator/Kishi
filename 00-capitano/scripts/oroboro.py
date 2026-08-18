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


def ponte_alzato():
    """Il ciclo notturno NON gira sul ponte. Mai. Ordine di Giuseppe, 18-08:
    «il ponte deve rimanere giu'».

    Cosa faceva prima e perche' e' cambiato: la stesura del 17-08 accettava il
    ponte se lo trovava alzato, e si limitava a controllare che il gateway
    rispondesse. Cioe' se qualcuno lasciava il ponte su per distrazione, la notte
    ci girava sopra senza che nessuno l'avesse deciso — ed e' successo davvero:
    il run del 18-08 alle 03:00 ha lavorato su nvidia/nemotron perche' il ponte
    non era ancora stato abbassato. Un automatismo che sfrutta una configurazione
    residua sta scegliendo al posto di Giuseppe. Ora, se il ponte e' su, non si
    parte e lo si dice: e' una situazione anomala rispetto alla decisione in
    vigore, e va vista da lui, non aggirata di notte.

    **Si guardano ENTRAMBI i livelli.** Lezione del 18-08 pagata cara: il settings
    di PROGETTO vince su quello utente, e `ponte.py --giu` puliva solo il secondo.
    Per due giorni tutto e' passato dal gateway mentre lo si credeva spento,
    perche' lo strumento guardava un file solo. Una guardia che controlla meta'
    dei posti da cui la cosa puo' arrivare non e' una guardia.

    Non si interroga il gateway: non ci si gira sopra, quindi se erogo o no non
    e' piu' una domanda di questo ciclo.

    Ritorna (alzato, dove): `dove` e' il file in cui si e' trovata la traccia."""
    import json
    radice = os.path.dirname(os.path.dirname(HERE))
    posti = [os.path.join(os.path.expanduser("~"), ".claude", "settings.json"),
             os.path.join(radice, ".claude", "settings.json"),
             os.path.join(radice, ".claude", "settings.local.json")]
    for p in posti:
        try:
            env = json.loads(io.open(p, encoding="utf-8").read()).get("env", {})
        except Exception:                                        # noqa
            continue
        if env.get("ANTHROPIC_BASE_URL") or env.get("ANTHROPIC_AUTH_TOKEN") or \
           any(k.startswith("ANTHROPIC_") and k.endswith("_MODEL") for k in env):
            return True, p
    return False, None


def gira(ore, secco):
    scadenza = datetime.now() + timedelta(hours=ore)
    annota("=" * 60)
    annota("OROBORO parte. Budget %.1f ore, fino alle %s."
           % (ore, scadenza.strftime("%H:%M")))

    alzato, dove = ponte_alzato()
    if alzato:
        annota("PONTE ALZATO. Non parto.")
        annota("  La decisione in vigore (Giuseppe, 18-08) e' che si gira")
        annota("  sull'abbonamento e il ponte resta giu'. Trovata traccia in:")
        annota("  %s" % dove)
        annota("  Non aggiro la cosa di notte: abbassalo con `ponte.py --giu`")
        annota("  (che pulisce il settings utente) e controlla anche quello di")
        annota("  progetto, perche' vince sul primo.")
        return
    annota("ponte: giu' — si gira sull'abbonamento, col limite gestito")
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

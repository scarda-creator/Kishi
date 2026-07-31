r"""memoria-indice.py — indice semantico locale della navicella. Dedalo, 2026-07-22.

COSA FA: taglia i documenti della navicella in frammenti, ne calcola l'embedding e li
mette in un indice SQLite. Da quel momento si puo' cercare PER SIGNIFICATO invece che
per parole: «agenti darwiniani» trova un testo che dice «post-mortem», che era
esattamente il ricordo che mi era sfuggito il 22 luglio.

PERCHE' COSI': niente torch, niente servizi, niente rete dopo il primo avvio.
model2vec usa embedding STATICI (una tabella di consultazione, nessuna rete neurale a
runtime): una query costa millisecondi, e l'indice puo' vivere dentro un hook sincrono
senza che nessuno se ne accorga.

CONFINE: questo file COSTRUISCE e INTERROGA un indice derivato. Non decide cosa si
ricorda, non interpreta, non cancella niente: i markdown restano la verita', l'indice
si puo' buttare e rifare con un comando. La politica della memoria e' di Mnemosyne.

USO — attenzione all'interprete: sqlite_vec e model2vec NON sono nel Python di sistema,
stanno in 00-capitano/scripts/voce-venv. Quindi si lancia cosi' (Mnemosyne, 22 luglio:
verificato, e annotato perche' uno script che nessuno sa piu' lanciare e' un ricordo perso):

    .\voce-venv\Scripts\python.exe memoria-indice.py --build
    .\voce-venv\Scripts\python.exe memoria-indice.py --query "..."

    python memoria-indice.py --build          costruisce/aggiorna l'indice (incrementale)
    python memoria-indice.py --query "..."    cerca per significato
    python memoria-indice.py --stato          dice cosa c'e' dentro
"""
import argparse, os, re, sqlite3, struct, sys, time
from pathlib import Path

RADICE = Path(__file__).resolve().parents[2]          # ...\AgentsAI
DB = RADICE / "00-capitano" / "memoria-indice.db"
MODELLO = "minishlab/potion-multilingual-128M"

# Dove guardare. Sono i posti dove vive il pensiero della navicella, non i dati grezzi.
CARTELLE = [
    "00-capitano", "01-personale", "02-accademico/tesi",
    "02-accademico/percorso-matematica", "03-business", "moduli-futuri",
]
ESCLUDI = re.compile(r"(venv|node_modules|__pycache__|\.git|legacy|chat-archive|"
                     r"01-banca-dati|02-libro-di-testo|_txt|coda-pubblicazione)", re.I)

MIN_CAR = 180        # sotto questa soglia un frammento non dice abbastanza
MAX_CAR = 1600       # sopra, si spezza: un mattone non e' un ricordo

# Materiale RISERVATO: interpretazione psicologica, non fatto. Sta nell'indice ed e'
# raggiungibile da Mnemosyne, ma NON entra mai nell'iniezione automatica verso i sub-agenti
# passivi: un Demiurgo che scrive un nucleo tratterebbe un'ipotesi come dato, senza avere il
# mandato di interpretarla. Politica di Mnemosyne, 2026-07-22, §2 e §2.bis di
# 00-capitano/memoria/politica-richiamo.md. Il flag sta nel DATO perche' una regola nel dato
# regge a un riavvio, una buona intenzione no.
RISERVATO = re.compile(r"L5-subconscio", re.I)

# Contrassegno per SEZIONE, non solo per cartella. Trovato provando (Dedalo, 22 luglio): il
# flag sulla cartella regge, ma la sostanza psicologica sfuggiva lo stesso attraverso i
# documenti che *descrivono* L5 — la spec memoria-profonda.md cita esempi di paure e ritiri.
# Chi custodisce un documento puo' quindi scrivere <!-- riservato --> dentro una sezione:
# quella sezione smette di essere iniettabile, il resto del file no. Lo strumento e' mio,
# l'uso e' di Mnemosyne.
MARCA_RISERVATO = re.compile(r"<!--\s*riservato\s*-->", re.I)

# Testi NARRATIVI: qui un'intestazione e' un'intera sessione, non un'idea. Il taglio secco a
# MAX_CAR spezzava a meta' frase e produceva un secondo frammento orfano che non diceva piu'
# di che sessione parlasse. Direttiva di Mnemosyne (§1): tagliare al confine di PARAGRAFO e
# ripetere il titolo in testa a ogni pezzo.
NARRATIVI = re.compile(r"(diario|L5-subconscio)", re.I)


def taglia(corpo: str, morbido: bool):
    """Spezza un corpo troppo lungo. morbido=True: mai a meta' frase, si cerca il confine
    di paragrafo (riga vuota) piu' vicino sotto il limite; se non c'e', il fine-riga."""
    if len(corpo) <= MAX_CAR:
        return [corpo]
    if not morbido:
        return [corpo[i:i + MAX_CAR] for i in range(0, len(corpo), MAX_CAR)]
    pezzi, resto = [], corpo
    while len(resto) > MAX_CAR:
        finestra = resto[:MAX_CAR]
        taglio = finestra.rfind("\n\n")
        if taglio < MIN_CAR:                       # nessun paragrafo utile: ripiego sul rigo
            taglio = finestra.rfind("\n")
        if taglio < MIN_CAR:                       # nemmeno quello: taglio secco, ultima spiaggia
            taglio = MAX_CAR
        pezzi.append(resto[:taglio].strip())
        resto = resto[taglio:].lstrip()
    if resto.strip():
        pezzi.append(resto.strip())
    return pezzi


def frammenta(testo: str, path: str):
    """Taglia per intestazioni markdown. Un frammento = una sezione che si regge da sola."""
    morbido = bool(NARRATIVI.search(path))
    righe = testo.split("\n")
    blocchi, corrente, titolo = [], [], ""
    def chiudi():
        corpo = "\n".join(corrente).strip()
        if len(corpo) >= MIN_CAR:
            for pezzo in taglia(corpo, morbido):
                blocchi.append((titolo, pezzo))
    for r in righe:
        m = re.match(r"^(#{1,4})\s+(.*)$", r)
        if m:
            chiudi()
            titolo, corrente = m.group(2).strip(), []
        else:
            corrente.append(r)
    chiudi()
    if not blocchi:                                    # documento senza intestazioni
        corpo = testo.strip()
        if len(corpo) >= MIN_CAR:
            blocchi = [("", p) for p in taglia(corpo, morbido)]
    return blocchi


def apri_db():
    import sqlite_vec
    con = sqlite3.connect(DB)
    con.enable_load_extension(True)
    sqlite_vec.load(con)
    con.enable_load_extension(False)
    con.execute("""CREATE TABLE IF NOT EXISTS frammenti(
        id INTEGER PRIMARY KEY, path TEXT, titolo TEXT, testo TEXT, mtime REAL,
        riservato INTEGER DEFAULT 0)""")
    # Migrazione di un indice vecchio: manca la colonna del contrassegno. L'indice e' derivato,
    # quindi non si migrano i dati — si aggiunge la colonna e si azzerano gli mtime, cosi' il
    # prossimo --build ricalcola tutto (dieci secondi) con il contrassegno giusto.
    if "riservato" not in {r[1] for r in con.execute("PRAGMA table_info(frammenti)")}:
        con.execute("ALTER TABLE frammenti ADD COLUMN riservato INTEGER DEFAULT 0")
        con.execute("UPDATE frammenti SET mtime = 0")
        con.commit()
    # Ricerca LESSICALE accanto a quello semantico. Misurato il 22 luglio: da solo
    # l'embedding statico NON trova «agenti darwiniani» -> il frammento giusto, perche'
    # la parola rara viene schiacciata da quella frequente. Il lessicale la prende al volo.
    con.execute("""CREATE VIRTUAL TABLE IF NOT EXISTS testi USING fts5(
        titolo, testo, content='frammenti', content_rowid='id', tokenize='unicode61')""")
    return con


def carica_modello():
    from model2vec import StaticModel
    return StaticModel.from_pretrained(MODELLO)


def build():
    t0 = time.time()
    con = apri_db()
    mod = carica_modello()
    dim = len(mod.encode(["prova"])[0])
    con.execute(f"CREATE VIRTUAL TABLE IF NOT EXISTS vettori USING vec0(id INTEGER PRIMARY KEY, emb float[{dim}])")

    noti = {r[0]: r[1] for r in con.execute("SELECT path, MAX(mtime) FROM frammenti GROUP BY path")}
    file_visti, nuovi, testi, meta = set(), 0, [], []

    for cart in CARTELLE:
        base = RADICE / cart
        if not base.exists():
            continue
        for p in base.rglob("*.md"):
            sp = str(p)
            if ESCLUDI.search(sp):
                continue
            rel = str(p.relative_to(RADICE))
            file_visti.add(rel)
            mt = p.stat().st_mtime
            if noti.get(rel, 0) >= mt:                 # gia' indicizzato e non toccato
                continue
            con.execute("DELETE FROM testi WHERE rowid IN (SELECT id FROM frammenti WHERE path=?)", (rel,))
            con.execute("DELETE FROM vettori WHERE id IN (SELECT id FROM frammenti WHERE path=?)", (rel,))
            con.execute("DELETE FROM frammenti WHERE path=?", (rel,))
            try:
                testo = p.read_text(encoding="utf-8", errors="ignore")
            except Exception:
                continue
            for titolo, corpo in frammenta(testo, rel):
                testi.append(f"{titolo}\n{corpo}")
                meta.append((rel, titolo, corpo, mt))
                nuovi += 1

    # file spariti: via anche dall'indice (l'indice e' derivato, non e' un archivio)
    for rel in list(noti):
        if rel not in file_visti:
            con.execute("DELETE FROM vettori WHERE id IN (SELECT id FROM frammenti WHERE path=?)", (rel,))
            con.execute("DELETE FROM frammenti WHERE path=?", (rel,))

    if testi:
        embs = mod.encode(testi)
        for (rel, titolo, corpo, mt), e in zip(meta, embs):
            cur = con.execute(
                "INSERT INTO frammenti(path,titolo,testo,mtime,riservato) VALUES(?,?,?,?,?)",
                (rel, titolo, corpo, mt,
                 1 if (RISERVATO.search(rel) or MARCA_RISERVATO.search(corpo)) else 0))
            con.execute("INSERT INTO vettori(id, emb) VALUES(?,?)",
                        (cur.lastrowid, struct.pack(f"{len(e)}f", *e)))
            con.execute("INSERT INTO testi(rowid, titolo, testo) VALUES(?,?,?)",
                        (cur.lastrowid, titolo, corpo))
    con.commit()
    tot = con.execute("SELECT COUNT(*) FROM frammenti").fetchone()[0]
    print(f"indice: {tot} frammenti ({nuovi} nuovi/aggiornati) in {time.time()-t0:.1f}s -> {DB.name}")


def query(q: str, k: int = 5):
    """Ibrida: semantica (parafrasi) + lessicale (termini rari), fuse per rango.

    La fusione e' reciprocal rank fusion: ogni lista contribuisce 1/(60+rango). Nessun
    peso da tarare a mano, e una lista non puo' zittire l'altra."""
    con = apri_db()
    mod = carica_modello()
    e = mod.encode([q])[0]
    t0 = time.time()
    sem = con.execute("""
        SELECT f.id FROM vettori v JOIN frammenti f ON f.id = v.id
        WHERE v.emb MATCH ? AND k = ? ORDER BY v.distance""",
        (struct.pack(f"{len(e)}f", *e), k * 3)).fetchall()

    # Radice + jolly, ed e' piu' sottile di quanto sembri. L'italiano declina sull'ULTIMA
    # lettera: «darwiniano» vs «darwiniani». Un jolly in coda alla parola intera
    # («darwiniani*») NON raggiunge «darwiniano» — misurato il 22 luglio, il frammento
    # giusto restava fuori dai primi dodici. Si tronca di due caratteri e poi si mette il
    # jolly: e' uno stemmer del povero, ma per l'italiano copre quasi tutte le desinenze.
    def radice(t):
        return (t[:-2] if len(t) >= 6 else t) + "*"
    termini = " OR ".join(radice(t) for t in re.findall(r"\w{4,}", q.lower()))
    les = []
    if termini:
        try:
            les = con.execute("SELECT rowid FROM testi WHERE testi MATCH ? ORDER BY rank LIMIT ?",
                              (termini, k * 3)).fetchall()
        except sqlite3.OperationalError:
            les = []

    punteggi = {}
    for lista, etichetta in ((sem, "sem"), (les, "les")):
        for rango, (fid,) in enumerate(lista):
            d = punteggi.setdefault(fid, {"p": 0.0, "da": set()})
            d["p"] += 1.0 / (60 + rango)
            d["da"].add(etichetta)

    ordine = sorted(punteggi.items(), key=lambda x: -x[1]["p"])[:k]
    dt = (time.time() - t0) * 1000
    print(f'"{q}"  —  {len(ordine)} risultati in {dt:.1f} ms\n')
    for fid, info in ordine:
        path, titolo, testo, ris = con.execute(
            "SELECT path, titolo, testo, riservato FROM frammenti WHERE id=?", (fid,)).fetchone()
        prima = " ".join(testo.split())[:150]
        print(f"  [{info['p']:.4f} {'+'.join(sorted(info['da']))}]{' [RISERVATO]' if ris else ''} {path}"
              + (f"  §{titolo}" if titolo else ""))
        print(f"        {prima}…\n")


# Tetto duro dell'iniezione. Non e' una preferenza: e' quanto contesto la memoria puo' rubare
# a un agente prima di diventare rumore. Politica di Mnemosyne §3.
GRAFO_ATTIVO = True   # interruttore delil terzo motore: serve a poterla SPEGNERE e misurare
INIEZIONE_MAX_FRAMMENTI = 3
INIEZIONE_MAX_CARATTERI = 1200

# Parole di servizio: lunghe abbastanza da passare il filtro dei 4 caratteri, ma non dicono
# di cosa si parla. Contarle come "termine di contenuto" farebbe passare qualunque cosa.
VUOTE = {"della", "delle", "dello", "degli", "quando", "come", "cosa", "questo", "questa",
         "quello", "quella", "sono", "essere", "avere", "fare", "molto", "anche", "perche",
         "perché", "dove", "quale", "quali", "tutto", "tutti", "solo", "gia", "già", "piu",
         "più", "meno", "senza", "dopo", "prima", "ancora", "sempre", "mai", "nella", "nello"}


def iniezione(q: str):
    """Cosa la memoria direbbe a un agente PRIMA che pensi. Due regole, entrambe di Mnemosyne:

    1. Il RISERVATO non passa mai. Non e' filtrato dopo, e' escluso dalla domanda.
    2. La soglia e' l'ACCORDO, non il punteggio. Un frammento passa solo se lo trovano
       ENTRAMBE i motori — il senso e le parole devono indicare lo stesso posto. Il punteggio
       fuso non serve a questo: misura una posizione in classifica, non una pertinenza, e
       tararci sopra una soglia significa tarare il caso.

    Se non passa niente, questa funzione NON scrive «nessun risultato». Tace."""
    con = apri_db()
    mod = carica_modello()
    e = mod.encode([q])[0]
    k = 12
    sem = con.execute("""
        SELECT f.id FROM vettori v JOIN frammenti f ON f.id = v.id
        WHERE v.emb MATCH ? AND k = ? AND f.riservato = 0 ORDER BY v.distance""",
        (struct.pack(f"{len(e)}f", *e), k)).fetchall()

    def radice(t):
        return (t[:-2] if len(t) >= 6 else t) + "*"
    termini = " OR ".join(radice(t) for t in re.findall(r"\w{4,}", q.lower()))
    les = []
    if termini:
        try:
            les = con.execute("""SELECT t.rowid FROM testi t JOIN frammenti f ON f.id = t.rowid
                                 WHERE testi MATCH ? AND f.riservato = 0
                                 ORDER BY rank LIMIT ?""", (termini, k)).fetchall()
        except sqlite3.OperationalError:
            les = []

    insieme_sem = {f for (f,) in sem}
    accordo = [f for (f,) in les if f in insieme_sem]          # <- la soglia di Mnemosyne

    # ECCEZIONE DELLA PAROLA RARA — misurata, non supposta (Dedalo, 22 luglio).
    # L'accordo come AND si e' rivelato sbagliato proprio sul caso che ha fatto nascere
    # l'organo: «agenti darwiniani» dava accordo ZERO. Il lessicale metteva il frammento
    # giusto al posto 0; il semantico inseguiva «agenti» e andava altrove. Pretendere che
    # entrambi i motori siano d'accordo cancella il caso in cui UNA SOLA ha ragione — ed e'
    # il caso della parola rara, cioe' quando la memoria vale di piu'.
    # La cura non introduce un peso da tarare a mano: la rarita' e' un fatto contabile.
    # «agenti» sta in 298 frammenti, «darwiniani» in 17. Un termine che compare in meno del
    # 2% del corpus e' un'impronta digitale: se il lessicale lo mette in cima, e' li'.
    if not accordo:
        tot = con.execute("SELECT COUNT(*) FROM frammenti").fetchone()[0]
        soglia_raro = max(5, tot // 50)                        # 2% del corpus, non un numero magico
        rari = []
        for t in re.findall(r"\w{4,}", q.lower()):
            n = con.execute("SELECT COUNT(*) FROM testi WHERE testi MATCH ?", (radice(t),)).fetchone()[0]
            if 0 < n <= soglia_raro:
                rari.append(radice(t))
        # Ma la rarita' DA SOLA rende ciarlieri: misurato subito dopo, «ricetta della
        # carbonara» ha cominciato a parlare (silenzio crollato da 3/10 a 1/10) perche'
        # «ricetta» e' rara nella navicella e qualche frammento la nomina di sfuggita.
        # Il discriminante e' nel confronto fra i due casi: in «agenti darwiniani» il
        # frammento contiene ENTRAMBE le parole della domanda, nella carbonara solo una —
        # la parola rara c'e', il tema no. Quindi: la parola rara apre la porta, ma serve
        # un secondo termine di contenuto nello stesso frammento per entrare.
        if rari:
            contenuto = [radice(t) for t in re.findall(r"\w{4,}", q.lower())
                         if t not in VUOTE]
            for fid, in les[:3]:                               # solo la cima: non e' una rete a strascico
                testo = con.execute("SELECT testo FROM frammenti WHERE id=?", (fid,)).fetchone()[0].lower()
                if not any(r.rstrip("*") in testo for r in rari):
                    continue
                if sum(1 for c in contenuto if c.rstrip("*") in testo) >= 2:
                    accordo.append(fid)

    if not accordo:
        return ""                                              # il silenzio resta il default

    # ── TERZO MOTORE: il grafo ───────────────────────────────────────────────────────
    # Le due motori cercano. Questa ASSOCIA: dai documenti gia' accettati cammina di un passo
    # sui legami (tabella `legami`, costruita da anima-grafo.py) e raccoglie cio' che sta
    # vicino a piu' d'uno di loro. E' il motore che raggiunge cio' che non condivide le parole
    # della domanda — il caso su cui Mnemosyne ha misurato che le altre due falliscono.
    #
    # La regola d'ingresso e' la sua, trasposta: non un punteggio, ma un ACCORDO. Un documento
    # entra solo se e' legato ad ALMENO DUE documenti gia' accettati. Un vicino solo e' una
    # coincidenza; due sono un contesto. E il riservato resta escluso qui come altrove: il
    # grafo e' proprio la via per cui L5 tornerebbe a galla di straforo, ed e' chiusa nel dato.
    if GRAFO_ATTIVO and len(accordo) < INIEZIONE_MAX_FRAMMENTI:
        semi = {con.execute("SELECT path FROM frammenti WHERE id=?", (f,)).fetchone()[0]
                for f in accordo}
        conta = {}
        for s in semi:
            for altro, p in con.execute(
                    "SELECT b, p FROM legami WHERE a=? UNION ALL SELECT a, p FROM legami WHERE b=?",
                    (s, s)):
                if altro in semi:
                    continue
                d = conta.setdefault(altro, [0, 0.0])
                d[0] += 1; d[1] += p
        vicini = sorted((v for v in conta.items() if v[1][0] >= 2),
                        key=lambda x: (-x[1][0], -x[1][1]))
        for path, _ in vicini:
            if len(accordo) >= INIEZIONE_MAX_FRAMMENTI:
                break
            # dal documento vicino si prende il frammento che meglio risponde alla domanda,
            # non il primo che capita: l'associazione porta al documento, le parole al punto.
            try:
                riga = con.execute("""SELECT t.rowid FROM testi t JOIN frammenti f ON f.id=t.rowid
                                      WHERE testi MATCH ? AND f.path=? AND f.riservato=0
                                      ORDER BY rank LIMIT 1""", (termini, path)).fetchone()
            except sqlite3.OperationalError:
                riga = None
            if riga is None:
                riga = con.execute(
                    "SELECT id FROM frammenti WHERE path=? AND riservato=0 ORDER BY LENGTH(testo) DESC LIMIT 1",
                    (path,)).fetchone()
            if riga and riga[0] not in accordo:
                accordo.append(riga[0])

    fuori, spesi = [], 0
    for fid in accordo[:INIEZIONE_MAX_FRAMMENTI]:
        path, titolo, testo = con.execute(
            "SELECT path, titolo, testo FROM frammenti WHERE id=?", (fid,)).fetchone()
        testo = " ".join(testo.split())
        intestazione = f"{path}" + (f" §{titolo}" if titolo else "") + "\n"
        # Il tetto conta TUTTO cio' che l'agente riceve, intestazioni comprese: misurato,
        # contandolo sul solo corpo si sforava di 350 B senza accorgersene.
        resta = INIEZIONE_MAX_CARATTERI - spesi - len(intestazione)
        if resta < 80:
            break
        if len(testo) > resta:
            testo = testo[:resta] + "…"
        spesi += len(intestazione) + len(testo)
        fuori.append(intestazione + testo)
    return "\n\n".join(fuori)


def stato():
    con = apri_db()
    tot = con.execute("SELECT COUNT(*) FROM frammenti").fetchone()[0]
    file = con.execute("SELECT COUNT(DISTINCT path) FROM frammenti").fetchone()[0]
    print(f"{tot} frammenti da {file} documenti · {DB.stat().st_size/1e6:.1f} MB")
    for p, n in con.execute("SELECT path, COUNT(*) c FROM frammenti GROUP BY path ORDER BY c DESC LIMIT 8"):
        print(f"  {n:3d}  {p}")


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--build", action="store_true")
    ap.add_argument("--query")
    ap.add_argument("--stato", action="store_true")
    ap.add_argument("--iniezione", help="cosa direbbe la memoria a un agente (tace se non e' sicura)")
    ap.add_argument("-k", type=int, default=5)
    a = ap.parse_args()
    if a.build:        build()
    elif a.query:      query(a.query, a.k)
    elif a.iniezione:  print(iniezione(a.iniezione), end="")
    elif a.stato:      stato()
    else:              ap.print_help()

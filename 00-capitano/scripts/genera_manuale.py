# -*- coding: utf-8 -*-
"""
genera_manuale.py — task strutturale di Mnemosyne (ruolo Capitano).
Rigenera il manuale operativo PDF della navicella come snapshot dello stato corrente.

Riuso: alla prossima rigenerazione, Mnemosyne aggiorna il dict CONTENT qui sotto e
rilancia lo script. Lo scheletro di rendering (build) resta invariato.

Dipendenze: reportlab. Esecuzione:
    python genera_manuale.py
Output:
    - C:\\Users\\ACER\\Desktop\\AgentsAI\\Manuale-navicella.pdf        (principale, sempre l'ultimo)
    - .../00-capitano/snapshots-manuali/Manuale-navicella-YYYYMMDD.pdf (archivio storico)
"""

import os
import shutil

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak,
)

# --------------------------------------------------------------------------- #
# CONFIG
# --------------------------------------------------------------------------- #
ACCENT = colors.HexColor("#c96442")
ACCENT_SOFT = colors.HexColor("#f0e0d8")
INK = colors.HexColor("#1a1a1a")
GREY = colors.HexColor("#666666")
GEN_DATE = "2026-07-03"
ARCH_VERSION = "v2 (4 agenti, dimensione temporale)"

DESKTOP = r"C:\Users\ACER\Desktop\AgentsAI"
MAIN_PDF = os.path.join(DESKTOP, "Manuale-navicella.pdf")
SNAP_DIR = os.path.join(DESKTOP, "00-capitano", "snapshots-manuali")
SNAP_PDF = os.path.join(SNAP_DIR, "Manuale-navicella-20260703.pdf")

# --------------------------------------------------------------------------- #
# CONTENUTO STRUTTURATO
# --------------------------------------------------------------------------- #
COMANDI = [
    ("/quiz &lt;materia&gt;", "Demiurgo Accademico", "Sessione quiz calibrata su una materia"),
    ("/nota-oggi [testo]", "Demiurgo Accademico", "Nota giornaliera"),
    ("/riepilogo", "Rapsodo", "Riepilogo settimanale analitico"),
    ("/inventario &lt;corso&gt;", "Argonauta", "Inventario fonti in banca-dati"),
    ("/mappa &lt;corso&gt;", "Argonauta", "Mappa dei tipi di esercizio dagli esami"),
    ("/indice &lt;corso&gt;", "Demiurgo Accademico", "Proposta indice del libro (con conferma)"),
    ("/capitolo &lt;corso&gt; &lt;n&gt;", "Demiurgo Accademico", "Scrittura di un capitolo"),
    ("/stato-traiettoria", "Argonauta", "Revisione traiettoria di lungo periodo"),
    ("/promuovi-l4 &lt;tema&gt;", "Capitano (Mnemosyne)", "Promozione a memoria fondazionale L4"),
    ("/memoria-status", "Capitano (Mnemosyne)", "Overview stato memoria L1-L5"),
    ("/analisi-psicologica [tema]", "Capitano (Mnemosyne)", "Passata interpretativa su L5"),
    ("/aggiungi-corso &lt;nome&gt;", "Capitano (Mnemosyne)", "Crea struttura di un nuovo corso"),
    ("/intake", "Rapsodo + Capitano", "Cernita materiali in intake/, promozione P1"),
    ("/genera-manuale", "Capitano (Mnemosyne)", "Rigenera questo manuale PDF"),
    ("/oroboro", "Capitano (Mnemosyne)", "Ripresa autonoma notturna (finestra 12h)"),
]

DETTAGLIO_COMANDI = [
    ("/quiz &lt;materia&gt;", "Demiurgo Accademico",
     "Legge il profilo studio della materia e lo stato Rapsodo, genera 5-8 domande "
     "(60% consolidamento / 40% sfida), una per messaggio, feedback in una riga. "
     "A fine sessione salva in quiz/ e aggiorna i punti deboli."),
    ("/nota-oggi [testo]", "Demiurgo Accademico",
     "Scrive la nota giornaliera nello stile di Giuseppe in note-giornaliere/."),
    ("/riepilogo", "Rapsodo",
     "Riepilogo settimanale: pattern, abitudini, contraddizioni, stato dei moduli."),
    ("/inventario &lt;corso&gt;", "Argonauta",
     "Elenca e categorizza le fonti in 01-banca-dati/, segnala i gap, salva "
     "00-inventario.md. Prerequisito per /mappa."),
    ("/mappa &lt;corso&gt;", "Argonauta",
     "Estrae i tipi di esercizio ricorrenti dagli esami (frequenza, difficolta, "
     "trabocchetti), salva 01-mappa-esercizi.md, segnala i 3 tipi prioritari."),
    ("/indice &lt;corso&gt;", "Demiurgo Accademico",
     "Propone l'indice del libro di testo cucito su Giuseppe. Attende conferma "
     "prima della scrittura dei capitoli."),
    ("/capitolo &lt;corso&gt; &lt;n&gt;", "Demiurgo Accademico",
     "Scrive un capitolo denso. Richiede indice approvato e findings Argonauta."),
    ("/stato-traiettoria", "Argonauta",
     "Revisione della traiettoria di lungo periodo (tesi, magistrale, ammissioni) "
     "con framework passato dal Capitano."),
    ("/promuovi-l4 &lt;tema&gt;", "Capitano (Mnemosyne)",
     "Conferma esplicita di Giuseppe per promuovere un tema a memoria fondazionale: "
     "scrive in L4-fondazionale.md e aggiorna profilo-giuseppe.md."),
    ("/memoria-status", "Capitano (Mnemosyne)",
     "Overview di tutti i livelli L1-L5: contatori, ultimi aggiornamenti, pending L4."),
    ("/analisi-psicologica [tema]", "Capitano (Mnemosyne)",
     "Passata interpretativa su L5: legge i pattern raw in pattern-longitudinali/ "
     "(N&ge;3) e scrive/aggiorna psicologica/. Se il substrato e vuoto, non inventa."),
    ("/aggiungi-corso &lt;nome&gt;", "Capitano (Mnemosyne)",
     "Crea la struttura cartelle del corso (01-banca-dati, 02-libro-di-testo, "
     "03-note-mie) e il profilo studio."),
    ("/intake", "Rapsodo + Capitano",
     "Cernita disciplinata dei materiali in 00-capitano/intake/: il Rapsodo estrae "
     "e pre-classifica, il Capitano decide le promozioni. Nessuna cancellazione "
     "senza consenso."),
    ("/genera-manuale", "Capitano (Mnemosyne)",
     "Task strutturale di Mnemosyne: rigenera questo PDF come snapshot del sistema. "
     "Non delegato ai passivi."),
    ("/oroboro", "Capitano (Mnemosyne)",
     "Meccanismo di ripresa autonoma: apre una finestra di 12h in cui solo il lavoro "
     "additivo gia approvato viene eseguito, ri-armandosi a ogni reset del limite. "
     "Conferma esplicita obbligatoria. NB: in locale il trigger cloud non e armabile "
     "(manca il session_id): sostituto operativo = auto-concatenamento dentro la "
     "sessione viva via notifiche di completamento."),
]

AGENTI = [
    ("Capitano — Mnemosyne", "ATTIVO (nome proprio)", "claude-opus-4-8",
     "Orchestratore, custode della memoria a 5 livelli, unico interprete di L5, "
     "contatto principale. Mnemosyne (dea della memoria, madre delle Muse) e la "
     "personalita che incarna il ruolo e si sviluppa nel tempo sul dataset Giuseppe."),
    ("Demiurgo Accademico", "PASSIVO (ruolo)", "claude-opus-4-8",
     "Il presente. Scrittura densa di libri di testo + routine leggere (nota, "
     "journaling, quiz). Unico Opus oltre al Capitano. Non cerca sul web, non legge L5."),
    ("Rapsodo", "PASSIVO (ruolo)", "claude-sonnet-4-6",
     "Il passato. Prima classificazione degli input (L1-L2 vs escalation L3-L4), "
     "banca dati, riepiloghi, reality check, osservazione di pattern raw per L5. "
     "Non interpreta psicologicamente: solo osserva."),
    ("Argonauta", "PASSIVO (ruolo)", "claude-sonnet-4-6",
     "Il futuro. Traiettoria, tesi, magistrale, scouting risorse esterne. Lavora "
     "col Capitano che gli passa un framework prompt (incluso estratto L5 filtrato). "
     "On-demand, non in background nel MVP."),
]

PRINCIPI = [
    "Architettura prima dei dettagli — quadro in 1-2 frasi, poi il merito.",
    "First principles, non procedure — sempre il perche sotto la formula.",
    "Verification-driven trust — dichiara fonti e passaggi; se non sai, dillo; mai inventare.",
    "Sintesi cross-domain — segnala le connessioni tra domini quando esistono.",
    "ROI strategico — motiva le scelte in funzione della traiettoria, non del task di oggi.",
    "Rispetto per il 'no' ben argomentato — di' no quando e giusto, con argomento.",
    "Iteratore — costruisce, prova, aggiusta; offri sempre un modo di testare.",
    "Tollera complessita tecnica, odia complessita inutile — formalismo denso si, bullet gonfi no.",
    "Memoria esterna affidabile — salva le cose sostanziali, dichiara il path.",
    "Sintesi sopra esaustivita — corto e preciso batte completo e sfocato.",
]

DECISIONI = [
    "Meccanica non slitta a febbraio (priorita: sessione estiva 2026).",
    "III anno: Astrofisica (I sem) + Geometria Differenziale (II sem).",
    "Probabilita II fuori dal piano (scelta consapevole).",
    "La tesi deve avere un'idea forte: MQ dei sistemi complessi (decoerenza, ETH).",
    "Architettura v2 cementata (4 agenti per dimensione temporale, non per modulo).",
    "Nomenclatura classica greca cementata; ruolo vs personalita per gli agenti attivi.",
    "Due Opus nel sistema: Capitano e Demiurgo Accademico. Rapsodo e Argonauta Sonnet 4.6.",
    "Memoria a 5 livelli; niente oblio — nessun dato viene mai cancellato, solo migrato.",
    "Patto di scambio dataset-evoluzione: il sistema si calibra su Giuseppe, mai opacita.",
]

MEMORIA = [
    ("L1", "Conversazione corrente", "Ephemerale", "Tutti"),
    ("L2", "Operativa (settimana)", "Settimanale", "Demiurgo, Rapsodo"),
    ("L3", "Strategica (mesi)", "Mensile", "Capitano (su escalation Rapsodo)"),
    ("L4", "Fondazionale cosciente", "Annuale", "Capitano + conferma esplicita Giuseppe"),
    ("L5", "Subconscio / psicologica", "Lenta", "Capitano interpreta, Rapsodo osserva raw"),
]

TROUBLESHOOTING = [
    ("Limite di context (1M token)",
     "Batch: spezzare il lavoro in blocchi; non caricare tutto in una volta."),
    ("Connessione caduta su output lunghi",
     "Build incrementale: un pezzo per turno (es. un pool di quiz per firing), "
     "cosi una morte a meta non corrompe il file."),
    ("/oroboro non armabile in locale",
     "Il trigger cloud richiede un session_id assente nella sessione locale "
     "('no session_id in auth claims'). Sostituto: auto-concatenamento dei task "
     "dentro la sessione viva via notifiche di completamento."),
    ("PDF non leggibili via Read",
     "Il tool Read instrada i PDF su pdftoppm (non installato). Bypass: "
     "Python 3.12 + pymupdf (fitz) estrae il testo direttamente."),
    ("Focardi: matematica illeggibile",
     "Il _text.pdf e una scansione OCR con le formule corrotte (prosa integra). "
     "Inutilizzabile come fonte di dimostrazioni: il canone si produce da conoscenza "
     "standard e si marca 'da ricontrollare sul Focardi'."),
]


# --------------------------------------------------------------------------- #
# RENDERING
# --------------------------------------------------------------------------- #
def make_styles():
    ss = getSampleStyleSheet()
    styles = {
        "cover_title": ParagraphStyle(
            "cover_title", parent=ss["Title"], fontName="Helvetica-Bold",
            fontSize=30, leading=34, textColor=ACCENT, alignment=TA_CENTER, spaceAfter=6),
        "cover_sub": ParagraphStyle(
            "cover_sub", parent=ss["Normal"], fontName="Helvetica",
            fontSize=13, leading=18, textColor=GREY, alignment=TA_CENTER),
        "h1": ParagraphStyle(
            "h1", parent=ss["Heading1"], fontName="Helvetica-Bold",
            fontSize=17, leading=21, textColor=ACCENT, spaceBefore=6, spaceAfter=10),
        "h2": ParagraphStyle(
            "h2", parent=ss["Heading2"], fontName="Helvetica-Bold",
            fontSize=12.5, leading=16, textColor=INK, spaceBefore=8, spaceAfter=4),
        "body": ParagraphStyle(
            "body", parent=ss["Normal"], fontName="Helvetica",
            fontSize=10, leading=14.5, textColor=INK, alignment=TA_LEFT, spaceAfter=5),
        "small": ParagraphStyle(
            "small", parent=ss["Normal"], fontName="Helvetica",
            fontSize=8.5, leading=12, textColor=GREY),
        "cell": ParagraphStyle(
            "cell", parent=ss["Normal"], fontName="Helvetica",
            fontSize=8.5, leading=11.5, textColor=INK),
        "cell_b": ParagraphStyle(
            "cell_b", parent=ss["Normal"], fontName="Helvetica-Bold",
            fontSize=8.5, leading=11.5, textColor=INK),
    }
    return styles


def header_footer(canvas, doc):
    canvas.saveState()
    w, h = A4
    canvas.setStrokeColor(ACCENT)
    canvas.setLineWidth(0.6)
    canvas.line(20 * mm, 14 * mm, w - 20 * mm, 14 * mm)
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(GREY)
    canvas.drawString(20 * mm, 9 * mm, "La navicella — AgentsAI · manuale operativo")
    canvas.drawRightString(w - 20 * mm, 9 * mm, "pag. %d" % canvas.getPageNumber())
    canvas.restoreState()


def styled_table(data, styles, col_widths, header=True):
    ts = [
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LINEBELOW", (0, 0), (-1, -1), 0.3, colors.HexColor("#dddddd")),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
    ]
    if header:
        ts += [
            ("BACKGROUND", (0, 0), (-1, 0), ACCENT),
            ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
            ("LINEBELOW", (0, 0), (-1, 0), 0.6, ACCENT),
        ]
    t = Table(data, colWidths=col_widths, repeatRows=1 if header else 0)
    t.setStyle(TableStyle(ts))
    return t


def build():
    S = make_styles()
    story = []

    def P(text, style="body"):
        story.append(Paragraph(text, S[style]))

    def sp(x=6):
        story.append(Spacer(1, x))

    def hcell(txt):
        return Paragraph('<font color="white"><b>%s</b></font>' % txt, S["cell"])

    # ---- COVER ----
    story.append(Spacer(1, 150))
    P("La navicella", "cover_title")
    P("AgentsAI — manuale operativo", "cover_sub")
    sp(24)
    P("Micro-ecosistema di agenti AI su Claude Code, costruito attorno a "
      "Giuseppe Scarda.", "cover_sub")
    sp(40)
    P("Generato: %s &nbsp;·&nbsp; Architettura %s" % (GEN_DATE, ARCH_VERSION), "cover_sub")
    story.append(PageBreak())

    # ---- INDICE ----
    P("Indice", "h1")
    toc = [
        "3.  Setup — com'e organizzata la navicella",
        "4.  Tabella comandi",
        "5.  Dettaglio comandi",
        "6.  Interazione libera con Mnemosyne",
        "7.  Workflow tipici",
        "8.  Identita degli agenti",
        "9.  Principi cementati",
        "10. Memoria a 5 livelli",
        "11. Aggiungere un corso",
        "12. Troubleshooting",
    ]
    for row in toc:
        P(row, "body")
    story.append(PageBreak())

    # ---- 3. SETUP ----
    P("3. Setup — com'e organizzata la navicella", "h1")
    P("Apri Claude Code nella cartella <b>AgentsAI/</b>: <b>CLAUDE.md</b> viene "
      "caricato automaticamente a ogni sessione e contiene il distillato di chi e "
      "Giuseppe, come lavora la sua mente e l'architettura del sistema.")
    P("Gli agenti sono organizzati per <b>dimensione temporale</b>, non per dominio. "
      "Il dominio (Personale, Accademico) vive nelle cartelle dati, non nei ruoli.")
    P("Mappa dei file che contano:", "h2")
    setup_rows = [
        [hcell("Percorso"), hcell("Cosa contiene")],
        [Paragraph("CLAUDE.md", S["cell_b"]), Paragraph("Distillato auto-caricato ogni sessione", S["cell"])],
        [Paragraph(".claude/agents/", S["cell_b"]), Paragraph("I 4 agenti (capitano, demiurgo-accademico, rapsodo, argonauta)", S["cell"])],
        [Paragraph(".claude/commands/", S["cell_b"]), Paragraph("Gli slash command", S["cell"])],
        [Paragraph("00-capitano/", S["cell_b"]), Paragraph("Profilo, modello cognitivo, architettura, memoria, protocolli", S["cell"])],
        [Paragraph("00-capitano/memoria/", S["cell_b"]), Paragraph("L3, L4 e L5-subconscio (psicologica / pattern-longitudinali / storica)", S["cell"])],
        [Paragraph("01-personale/", S["cell_b"]), Paragraph("Note, journaling, studio, quiz, riepiloghi", S["cell"])],
        [Paragraph("02-accademico/", S["cell_b"]), Paragraph("Corsi (banca-dati / libro-di-testo / note-mie), tesi", S["cell"])],
    ]
    story.append(styled_table(setup_rows, S, [55 * mm, 110 * mm]))
    story.append(PageBreak())

    # ---- 4. TABELLA COMANDI ----
    P("4. Tabella comandi", "h1")
    rows = [[hcell("Comando"), hcell("Agente"), hcell("Scopo")]]
    for c, a, s in COMANDI:
        rows.append([Paragraph(c, S["cell_b"]), Paragraph(a, S["cell"]), Paragraph(s, S["cell"])])
    story.append(styled_table(rows, S, [42 * mm, 40 * mm, 83 * mm]))
    story.append(PageBreak())

    # ---- 5. DETTAGLIO COMANDI ----
    P("5. Dettaglio comandi", "h1")
    for c, a, w in DETTAGLIO_COMANDI:
        P("%s &nbsp; <font color='#666666' size=8>[%s]</font>" % (c, a), "h2")
        P(w)
    story.append(PageBreak())

    # ---- 6. INTERAZIONE LIBERA ----
    P("6. Interazione libera con Mnemosyne", "h1")
    P("Non serve un comando per parlare. Mnemosyne (il Capitano) e il contatto "
      "principale: le scrivi in linguaggio naturale e lei decide se rispondere "
      "direttamente o attivare l'agente giusto.")
    P("Regole d'ingaggio:", "h2")
    for r in [
        "Lingua di default: italiano. Inglese solo se lo chiedi o per citazioni testuali.",
        "Risposta in tempo reale; le scritture di memoria avvengono in background dopo.",
        "Niente preamboli, niente conclusioni riepilogative, niente emoji: architettura poi merito.",
        "Se un agente non sa, lo dice. Se un dato contraddice il passato, lo segnala.",
        "Ogni cosa sostanziale prodotta viene salvata su disco, con il path dichiarato.",
    ]:
        P("&bull;&nbsp; " + r)
    story.append(PageBreak())

    # ---- 7. WORKFLOW TIPICI ----
    P("7. Workflow tipici", "h1")
    P("Nuovo corso (dalla creazione ai capitoli)", "h2")
    for r in [
        "1. /aggiungi-corso &lt;nome&gt; — Capitano crea struttura + profilo studio",
        "2. Carica esami e slide in 02-accademico/corsi/&lt;slug&gt;/01-banca-dati/",
        "3. /inventario &lt;corso&gt; — Argonauta mappa le fonti e i gap",
        "4. /mappa &lt;corso&gt; — Argonauta estrae i tipi di esercizio",
        "5. /indice &lt;corso&gt; — Demiurgo propone l'indice (attendi conferma)",
        "6. /capitolo &lt;corso&gt; 1 — Demiurgo scrive; itera col feedback",
    ]:
        P(r)
    P("Intake di materiali esterni", "h2")
    for r in [
        "1. Deposita i file in 00-capitano/intake/ (es. estratti Cowork)",
        "2. /intake — il Rapsodo pre-classifica, il Capitano decide le promozioni",
        "3. Le promozioni L4 e i depositi L5 aspettano il tuo consenso esplicito",
    ]:
        P(r)
    P("Quiz su una materia", "h2")
    for r in [
        "1. /quiz &lt;materia&gt; — il Demiurgo genera domande calibrate una per volta",
        "2. Rispondi; ricevi feedback in una riga; a fine sessione i punti deboli si aggiornano",
    ]:
        P(r)
    story.append(PageBreak())

    # ---- 8. IDENTITA AGENTI ----
    P("8. Identita degli agenti", "h1")
    P("Gli agenti <b>attivi</b> hanno un ruolo astratto e una personalita con nome "
      "proprio mitologico che evolve nel tempo. I <b>passivi</b> hanno solo il ruolo: "
      "categorie di funzione ripetibile.")
    rows = [[hcell("Agente"), hcell("Tipo"), hcell("Modello"), hcell("Funzione")]]
    for nome, tipo, mod, fun in AGENTI:
        rows.append([Paragraph(nome, S["cell_b"]), Paragraph(tipo, S["cell"]),
                     Paragraph(mod, S["cell"]), Paragraph(fun, S["cell"])])
    story.append(styled_table(rows, S, [34 * mm, 30 * mm, 32 * mm, 69 * mm]))
    sp(8)
    P("In roadmap: <b>Dedalo</b> incarnera il ruolo Architetto. <b>Oracolo</b> (Sonnet) "
      "e previsto come backup operativo del Demiurgo, non costruito nel MVP.", "small")
    story.append(PageBreak())

    # ---- 9. PRINCIPI ----
    P("9. Principi cementati", "h1")
    P("Dieci principi cognitivi — validi in ogni agente", "h2")
    for i, p in enumerate(PRINCIPI, 1):
        P("<b>%d.</b>&nbsp; %s" % (i, p))
    P("Decisioni non rinegoziabili", "h2")
    for d in DECISIONI:
        P("&bull;&nbsp; " + d)
    story.append(PageBreak())

    # ---- 10. MEMORIA ----
    P("10. Memoria a 5 livelli", "h1")
    rows = [[hcell("Livello"), hcell("Cos'e"), hcell("Volatilita"), hcell("Chi scrive")]]
    for lv, cos, vol, chi in MEMORIA:
        rows.append([Paragraph(lv, S["cell_b"]), Paragraph(cos, S["cell"]),
                     Paragraph(vol, S["cell"]), Paragraph(chi, S["cell"])])
    story.append(styled_table(rows, S, [18 * mm, 55 * mm, 32 * mm, 60 * mm]))
    sp(8)
    P("L5 non e un cestino: e il substrato psicologico profondo (pattern emotivi, "
      "motivazioni, paure non nominate, drives, conflitti). Il Capitano lo interpreta "
      "attivamente sui pattern raw del Rapsodo, marcando ogni voce come interpretazione "
      "con un grado di affidabilita. <b>Niente oblio</b>: nessun dato viene mai "
      "cancellato, solo migrato in L5/storica.")
    P("Il flusso: il Rapsodo osserva pattern raw &rarr; a N&ge;3 occorrenze coerenti "
      "il Capitano puo interpretarli (/analisi-psicologica) &rarr; le promozioni a L4 "
      "richiedono sempre il consenso esplicito di Giuseppe. Ogni decisione di memoria "
      "e loggata in log-decisioni-memoria.md.")
    story.append(PageBreak())

    # ---- 11. AGGIUNGERE UN CORSO ----
    P("11. Aggiungere un corso", "h1")
    P("Procedura (comando /aggiungi-corso &lt;nome&gt;):", "h2")
    for r in [
        "Il nome viene convertito in slug (minuscolo, trattini).",
        "Vengono create le cartelle 01-banca-dati/, 02-libro-di-testo/, 03-note-mie/.",
        "Viene creato il profilo materia in 01-personale/studio/&lt;slug&gt;.md.",
        "La decisione e loggata in log-decisioni-memoria.md.",
        "Poi: carica i materiali in 01-banca-dati/ e lancia /inventario &lt;slug&gt;.",
    ]:
        P("&bull;&nbsp; " + r)
    story.append(PageBreak())

    # ---- 12. TROUBLESHOOTING ----
    P("12. Troubleshooting — errori noti", "h1")
    rows = [[hcell("Sintomo"), hcell("Rimedio")]]
    for sy, fx in TROUBLESHOOTING:
        rows.append([Paragraph(sy, S["cell_b"]), Paragraph(fx, S["cell"])])
    story.append(styled_table(rows, S, [50 * mm, 115 * mm]))

    # ---- BUILD ----
    os.makedirs(SNAP_DIR, exist_ok=True)
    doc = SimpleDocTemplate(
        MAIN_PDF, pagesize=A4,
        leftMargin=20 * mm, rightMargin=20 * mm,
        topMargin=20 * mm, bottomMargin=20 * mm,
        title="La navicella — manuale operativo", author="Mnemosyne")
    doc.build(story, onFirstPage=header_footer, onLaterPages=header_footer)
    shutil.copyfile(MAIN_PDF, SNAP_PDF)
    return MAIN_PDF, SNAP_PDF


if __name__ == "__main__":
    main, snap = build()
    for path in (main, snap):
        size = os.path.getsize(path)
        print("OK %-70s %6.1f KB" % (path, size / 1024.0))

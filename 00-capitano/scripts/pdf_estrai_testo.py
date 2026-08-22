#!/usr/bin/env python3
"""
pdf_estrai_testo.py — Preprocessore di intake per corpora PDF della navicella.

Perche' esiste: il tool di lettura PDF degli agenti rende ogni pagina come
IMMAGINE, pesantissima in token. Leggere ~12 PDF fa sfondare il contesto
(errore "1M context required"). Estrarre il testo FUORI dal contesto in file
.txt leggeri permette agli agenti di leggere il contenuto a costo minimo, molte
decine di esami per passata invece di pochi.

Cosa fa:
  - Estrae il testo di ogni PDF sotto <src_dir> (ricorsivo) via PyMuPDF.
  - Scrive un .txt gemello sotto <out_dir>, preservando la struttura relativa.
  - Riconosce i PDF-scansione (poco/niente testo estraibile): li marca nel
    manifest come [SCAN/OCR] invece di produrre file vuoti ingannevoli.
  - Salta i file gia' estratti e invariati (idempotente): rilanciarlo costa poco.
  - Scrive un manifest.md leggibile con conteggi e la lista scansioni.

Uso:
  python pdf_estrai_testo.py <src_dir> <out_dir>
Esempio:
  python pdf_estrai_testo.py \\
    02-accademico/corsi/geometria/01-banca-dati \\
    02-accademico/corsi/geometria/01-banca-dati/_txt

Soglia scansione: un documento con meno di SCAN_CHAR_THRESHOLD caratteri di
testo estratto e' considerato scansione (candidato OCR).
"""
import sys
import os
import hashlib
from pathlib import Path

try:
    import fitz  # PyMuPDF
except ImportError:
    sys.exit("PyMuPDF non installato. Esegui: pip install pymupdf")

SCAN_CHAR_THRESHOLD = 120  # caratteri totali sotto cui il PDF e' considerato scansione


def sha1(path: Path) -> str:
    h = hashlib.sha1()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(1 << 16), b""):
            h.update(chunk)
    return h.hexdigest()


_CTRL = {c: None for c in range(32) if c not in (9, 10, 13)}
_CTRL[0x7F] = None


def ripulisci(t: str) -> str:
    """Toglie i caratteri di controllo (NUL in testa) dal testo estratto.

    Un solo NUL basta a far classificare il file come BINARIO da grep/ripgrep:
    il file esiste, e' leggibile a occhio, ma sparisce da ogni ricerca della
    navicella (Grep, memoria-indice, le passate dell'Argonauta). E' successo su
    20220706ScrittoSoluzioni.txt di Analisi Vettoriale, invisibile per un NUL
    solo. Si toglie qui, all'origine, non a valle."""
    return t.translate(_CTRL)


def estrai(pdf: Path, out_txt: Path):
    """Ritorna (n_pagine, n_char, testo). Non scrive nulla."""
    doc = fitz.open(pdf)
    parti = []
    for i, page in enumerate(doc):
        t = page.get_text("text")
        parti.append(f"\n\n===== PAGINA {i + 1} =====\n{t}")
    doc.close()
    testo = ripulisci("".join(parti).strip())
    return len(parti), len(testo), testo


def main():
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    src = Path(sys.argv[1]).resolve()
    out = Path(sys.argv[2]).resolve()
    if not src.is_dir():
        sys.exit(f"src_dir inesistente: {src}")
    out.mkdir(parents=True, exist_ok=True)

    pdfs = sorted(p for p in src.rglob("*.pdf") if out not in p.parents)
    estratti, scansioni, saltati, errori = [], [], [], []

    for pdf in pdfs:
        rel = pdf.relative_to(src)
        dest = out / rel.with_suffix(".txt")
        dest.parent.mkdir(parents=True, exist_ok=True)
        stamp = dest.with_suffix(".txt.sha1")
        cur = sha1(pdf)
        if stamp.exists() and stamp.read_text().strip() == cur and dest.exists():
            saltati.append(str(rel))
            continue
        try:
            npag, nchar, testo = estrai(pdf, dest)
        except Exception as e:  # PDF corrotto/protetto
            errori.append(f"{rel} — {type(e).__name__}: {e}")
            continue
        if nchar < SCAN_CHAR_THRESHOLD:
            dest.write_text(
                f"[SCAN/OCR] {rel}\n{npag} pagine, {nchar} caratteri estratti "
                f"(sotto soglia {SCAN_CHAR_THRESHOLD}): probabile scansione-immagine, "
                f"testo non affidabile. Richiede OCR o lettura manuale.\n",
                encoding="utf-8",
            )
            scansioni.append(f"{rel} ({npag} pag, {nchar} char)")
        else:
            dest.write_text(testo, encoding="utf-8")
            estratti.append(f"{rel} ({npag} pag, {nchar} char)")
        stamp.write_text(cur)

    manifest = out / "manifest.md"
    with open(manifest, "w", encoding="utf-8") as f:
        f.write(f"# Manifest estrazione testo\n\nSorgente: `{src}`\n\n")
        f.write(f"- PDF trovati: {len(pdfs)}\n")
        f.write(f"- Estratti (testo utile): {len(estratti)}\n")
        f.write(f"- Scansioni/OCR necessario: {len(scansioni)}\n")
        f.write(f"- Saltati (invariati): {len(saltati)}\n")
        f.write(f"- Errori: {len(errori)}\n\n")
        if scansioni:
            f.write("## Scansioni (richiedono OCR/lettura manuale)\n")
            for s in scansioni:
                f.write(f"- {s}\n")
            f.write("\n")
        if errori:
            f.write("## Errori\n")
            for e in errori:
                f.write(f"- {e}\n")
            f.write("\n")
        f.write("## Estratti\n")
        for e in estratti:
            f.write(f"- {e}\n")

    print(f"PDF: {len(pdfs)} | estratti: {len(estratti)} | "
          f"scansioni: {len(scansioni)} | saltati: {len(saltati)} | errori: {len(errori)}")
    print(f"Manifest: {manifest}")
    if scansioni:
        print("Scansioni (OCR):")
        for s in scansioni:
            print("  -", s)


if __name__ == "__main__":
    main()

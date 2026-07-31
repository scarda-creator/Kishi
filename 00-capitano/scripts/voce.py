#!/usr/bin/env python
"""
voce.py - organo di dettatura vocale della navicella.

Parli, Whisper trascrive in locale, il testo finisce negli appunti: incolli
con Ctrl+V dove vuoi (terminale, plancia, ovunque). Push-to-talk:
  INVIO  -> inizia a registrare
  INVIO  -> ferma e trascrive

Perche cosi (Dedalo, 2026-07-17):
  - faster-whisper LOCALE su CPU: zero spesa oltre l'abbonamento, zero rete,
    la voce non lascia la macchina (coerente col gate-privacy della navicella).
  - nessun ffmpeg: l'audio si registra direttamente in memoria (numpy) e si
    passa al modello, niente file intermedi da decodificare.
  - prezzo: latenza CPU (no GPU sull'Acer). Per push-to-talk e' tollerabile.
    Se troppo lento: --model base. Se poco accurato: --model small (default).
"""
import argparse
import sys
import threading

import numpy as np
import sounddevice as sd

SAMPLE_RATE = 16000  # Whisper lavora a 16 kHz mono


def registra():
    """Registra dal microfono finche l'utente non preme INVIO.

    Ritorna un array float32 mono a 16 kHz (quello che il modello si aspetta).
    """
    frames = []

    def callback(indata, _n, _t, status):
        if status:
            print(f"  [audio] {status}", file=sys.stderr)
        frames.append(indata.copy())

    print("  registrazione... [INVIO per fermare]", flush=True)
    with sd.InputStream(samplerate=SAMPLE_RATE, channels=1,
                        dtype="float32", callback=callback):
        input()  # blocca il thread principale fino al secondo INVIO
    if not frames:
        return np.zeros(0, dtype=np.float32)
    return np.concatenate(frames, axis=0).flatten()


def main():
    ap = argparse.ArgumentParser(description="Dettatura vocale locale (Whisper).")
    ap.add_argument("--model", default="small",
                    help="tiny|base|small|medium (default: small). Piu grande = piu accurato, piu lento.")
    ap.add_argument("--lang", default="it", help="lingua (default: it). 'auto' per rilevarla.")
    ap.add_argument("--no-clip", action="store_true", help="non copiare negli appunti, stampa e basta.")
    args = ap.parse_args()

    print(f"Carico Whisper ({args.model})... la prima volta lo scarica (~1 volta).", flush=True)
    from faster_whisper import WhisperModel
    model = WhisperModel(args.model, device="cpu", compute_type="int8")

    copia = None
    if not args.no_clip:
        try:
            import pyperclip
            copia = pyperclip.copy
        except Exception:
            print("  (pyperclip assente: stampo soltanto, niente appunti)")

    lang = None if args.lang == "auto" else args.lang
    print("Pronto. INVIO per parlare, poi INVIO per trascrivere. Ctrl+C per uscire.\n", flush=True)

    while True:
        try:
            input("[INVIO per parlare] ")
        except (KeyboardInterrupt, EOFError):
            print("\nchiudo.")
            break
        try:
            audio = registra()
        except KeyboardInterrupt:
            print("\nchiudo.")
            break
        if audio.size == 0:
            print("  (niente audio)\n")
            continue

        print("  trascrivo...", flush=True)
        segments, _info = model.transcribe(audio, language=lang, vad_filter=True)
        testo = " ".join(s.text.strip() for s in segments).strip()
        if not testo:
            print("  (silenzio)\n")
            continue

        if copia:
            try:
                copia(testo)
                coda = "  -> copiato negli appunti (Ctrl+V per incollare)"
            except Exception:
                coda = "  (copia negli appunti fallita)"
        else:
            coda = ""
        print(f"\n  {testo}\n{coda}\n")


if __name__ == "__main__":
    main()

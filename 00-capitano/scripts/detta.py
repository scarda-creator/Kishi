#!/usr/bin/env python
"""
detta.py - dettatura vocale che scrive DIRETTAMENTE nella finestra attiva.

Differenza da voce.py: voce.py ti mette il testo negli appunti e tu incolli a
mano. Qui l'hotkey e' GLOBALE (funziona anche mentre il focus e' su Claude Code
nel terminale): premi il tasto, parli, ripremi, e il testo compare da solo nel
prompt dove stai scrivendo. Whisper gira sempre in locale (faster-whisper CPU):
zero rete, la voce non lascia la macchina.

USO push-to-talk (default: toggle su F9):
  premi F9  -> inizia a registrare   (beep acuto)
  premi F9  -> ferma, trascrive, scrive nel prompt attivo   (beep grave)
  Non premo INVIO al posto tuo: rileggi e invii tu.

Perche' un tasto che NON scrive un carattere (F9, Ins, Ctrl destro) e non uno
stampabile (come "-"): un tasto stampabile usato come hotkey globale o inserisce
il suo carattere nel prompt, o va soppresso (e allora non lo puoi piu' digitare a
mano), e se un testo dettato lo contiene fa ripartire la registrazione da solo.

Sul tasto Fn (Dedalo/Mnemosyne, 2026-07-25):
  Il Fn di molti portatili (Acer incluso) e' gestito dal firmware della tastiera
  e NON emette uno scancode a Windows: nessun software puo' assegnarlo da solo.
  Per verificarlo sul TUO Acer:  python detta.py --scopri  e schiaccia Fn.
  Se non stampa niente, il Fn non e' assegnabile: scegli un altro tasto con
  --tasto (consiglio: "right ctrl").

Esempi:
  python detta.py                      # toggle su CTRL DESTRO (default)
  python detta.py --tasto f9           # toggle su F9
  python detta.py --tieni --tasto f9   # HOLD: tieni premuto F9 e parla, rilascia
  python detta.py --scopri             # diagnostica: che tasto emette cosa
  python detta.py --no-incolla         # solo appunti, niente auto-paste
"""
import argparse
import sys
import threading
import time

import numpy as np
import sounddevice as sd

try:
    import winsound

    def beep(su=True):
        winsound.Beep(880 if su else 440, 120)
except Exception:  # non-Windows: niente beep
    def beep(su=True):
        pass

SAMPLE_RATE = 16000  # Whisper lavora a 16 kHz mono


def scopri():
    """Diagnostica: stampa nome e scancode di ogni tasto premuto.

    Serve a scoprire empiricamente se il Fn (o qualunque tasto) emette uno
    scancode intercettabile su QUESTA macchina. ESC per uscire.
    """
    import keyboard
    print("Premi i tasti che vuoi testare (schiaccia il Fn!). ESC per uscire.\n",
          flush=True)

    def on_key(e):
        if e.event_type == "down":
            print(f"  tasto: {e.name!r:20}  scancode: {e.scan_code}", flush=True)

    keyboard.hook(on_key)
    keyboard.wait("esc")
    print("\nchiudo la diagnostica.")


class Dettatore:
    def __init__(self, model, lang, incolla, metodo):
        self.model = model
        self.lang = lang
        self.incolla = incolla
        self.metodo = metodo
        self.stream = None
        self.frames = []
        self.registrando = False
        self.lock = threading.Lock()

    def _callback(self, indata, _n, _t, status):
        if status:
            print(f"  [audio] {status}", file=sys.stderr)
        self.frames.append(indata.copy())

    def start(self):
        with self.lock:
            if self.registrando:
                return
            self.frames = []
            self.stream = sd.InputStream(samplerate=SAMPLE_RATE, channels=1,
                                         dtype="float32", callback=self._callback)
            self.stream.start()
            self.registrando = True
        beep(su=True)
        print("  registrazione...", flush=True)

    def stop_e_trascrivi(self):
        with self.lock:
            if not self.registrando:
                return
            self.stream.stop()
            self.stream.close()
            self.stream = None
            self.registrando = False
            frames = self.frames
            self.frames = []
        beep(su=False)

        if not frames:
            print("  (niente audio)\n", flush=True)
            return
        audio = np.concatenate(frames, axis=0).flatten()

        print("  trascrivo...", flush=True)
        segments, _info = self.model.transcribe(audio, language=self.lang,
                                                 vad_filter=True)
        testo = " ".join(s.text.strip() for s in segments).strip()
        if not testo:
            print("  (silenzio)\n", flush=True)
            return
        print(f"  -> {testo}\n", flush=True)
        self._consegna(testo)

    def _consegna(self, testo):
        import keyboard
        # negli appunti in ogni caso: fallback manuale sempre disponibile
        try:
            import pyperclip
            pyperclip.copy(testo)
        except Exception:
            pass
        if not self.incolla:
            print("  (in appunti: incolla a mano)", flush=True)
            return
        # piccola pausa: lascia che il tasto trigger (se e' un modificatore come
        # ctrl destro) sia del tutto rilasciato prima di simulare la tastiera
        time.sleep(0.2)
        try:
            if self.metodo == "scrivi":
                # DIGITA i caratteri nella finestra attiva: indipendente da come
                # il terminale gestisce l'incolla. delay basso = niente perdite.
                keyboard.write(testo, delay=0.008)
            elif self.metodo == "ctrl+shift+v":
                keyboard.send("ctrl+shift+v")
            else:  # ctrl+v
                keyboard.send("ctrl+v")
        except Exception as e:
            # se l'iniezione fallisce, il testo resta negli appunti (fallback)
            print(f"  [consegna fallita: {e}] -> testo negli appunti, incolla a mano",
                  flush=True)

    def toggle(self):
        if self.registrando:
            self.stop_e_trascrivi()
        else:
            self.start()


def main():
    ap = argparse.ArgumentParser(description="Dettatura vocale globale (Whisper locale).")
    ap.add_argument("--tasto", default="f11",
                    help='tasto push-to-talk (default: f11). Es: f9, pause, insert, "right ctrl".')
    ap.add_argument("--tieni", action="store_true",
                    help="modalita' HOLD: tieni premuto per registrare, rilascia per trascrivere.")
    ap.add_argument("--model", default="small",
                    help="tiny|base|small|medium (default: small).")
    ap.add_argument("--lang", default="it", help="lingua (default: it). 'auto' per rilevarla.")
    ap.add_argument("--no-incolla", action="store_true",
                    help="non consegnare da solo: metti solo negli appunti.")
    ap.add_argument("--metodo", default="scrivi",
                    choices=["scrivi", "ctrl+v", "ctrl+shift+v"],
                    help="come consegna il testo: 'scrivi' digita i caratteri (default, "
                         "va ovunque); 'ctrl+v'/'ctrl+shift+v' incollano dagli appunti.")
    ap.add_argument("--scopri", action="store_true",
                    help="diagnostica tasti (scopri se il Fn emette uno scancode).")
    args = ap.parse_args()

    if args.scopri:
        scopri()
        return

    import keyboard

    print(f"Carico Whisper ({args.model})... la prima volta lo scarica.", flush=True)
    from faster_whisper import WhisperModel
    model = WhisperModel(args.model, device="cpu", compute_type="int8")

    lang = None if args.lang == "auto" else args.lang
    d = Dettatore(model, lang, incolla=not args.no_incolla, metodo=args.metodo)

    # suppress=True: il tasto-trigger viene "mangiato" e NON arriva al terminale
    # ospite (in Windows Terminal F11=fullscreen, altri F-tasti hanno scorciatoie).
    if args.tieni:
        keyboard.on_press_key(args.tasto, lambda _e: d.start(), suppress=True)
        keyboard.on_release_key(args.tasto, lambda _e: d.stop_e_trascrivi(), suppress=True)
        modo = f"TIENI PREMUTO [{args.tasto}] e parla, rilascia per trascrivere"
    else:
        keyboard.add_hotkey(args.tasto, d.toggle, suppress=True)
        modo = f"premi [{args.tasto}] per parlare, ripremi per trascrivere"

    print(f"\nPronto. {modo}.\nIl testo viene incollato nella finestra attiva "
          f"(tieni il focus su Claude Code). Ctrl+C qui per uscire.\n", flush=True)
    try:
        keyboard.wait()  # blocca finche' non chiudi
    except KeyboardInterrupt:
        print("\nchiudo.")


if __name__ == "__main__":
    main()

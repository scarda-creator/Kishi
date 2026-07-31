#!/usr/bin/env python3
"""
esegui-locale.py — motore degli esecutori locali della navicella.

Apparato A (metabolismo). Principio: Claude pensa, il locale esegue. Questo script
delega un task STRETTO a un modello locale (Ollama) o a un endpoint OpenAI-compatibile
(OpenRouter, LM Studio), configurato con un PROFILO — un system prompt cesellato per quel
compito (in 00-capitano/profili-locali/). Zero token Claude: il lavoro delegabile non lo tocca.

Uso:
  echo "<input>" | python esegui-locale.py --profilo classificatore-task [--json]
  python esegui-locale.py --profilo estrattore --in FILE --out FILE
Opzioni: --modello (default qwen2.5:14b) --endpoint (default Ollama localhost:11434).

Ready-to-activate: appena Giuseppe avvia Ollama con un modello, funziona. Se l'endpoint
non risponde, lo dice con chiarezza (non blocca la navicella).
"""
import sys
import os
import json
import argparse
import urllib.request
import urllib.error
from pathlib import Path

PROFILI_DIR = Path(__file__).resolve().parent.parent / "profili-locali"
DEFAULT_ENDPOINT = "http://localhost:11434/v1/chat/completions"  # Ollama OpenAI-compatibile
DEFAULT_MODEL = "qwen2.5:14b"


def carica_profilo(nome: str) -> str:
    p = Path(nome)
    if not p.exists():
        p = PROFILI_DIR / (nome if nome.endswith(".md") else nome + ".md")
    if not p.exists():
        sys.exit(f"Profilo non trovato: {nome} (cercato in {PROFILI_DIR})")
    testo = p.read_text(encoding="utf-8")
    # se il profilo ha frontmatter/markdown, usa tutto come system prompt: va bene.
    return testo.strip()


def chiama(endpoint: str, model: str, system: str, user: str, want_json: bool,
           max_tokens: int = 512, timeout: int = 180) -> str:
    payload = {
        "model": model,
        "messages": [
            {"role": "system", "content": system},
            {"role": "user", "content": user},
        ],
        "stream": False,
        "temperature": 0,
        "max_tokens": max_tokens,   # tetto: task stretto, evita generazione a ruota su CPU
    }
    if want_json:
        payload["response_format"] = {"type": "json_object"}
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(endpoint, data=data,
                                 headers={"Content-Type": "application/json"})
    key = os.environ.get("OPENROUTER_API_KEY") or os.environ.get("LLM_API_KEY")
    if key:
        req.add_header("Authorization", "Bearer " + key)
    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            body = json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        # L'endpoint C'È e ha risposto, ma con un errore HTTP (auth, modello mancante,
        # payload rifiutato). NON è "Ollama spento" — distinguere è il punto.
        dettaglio = ""
        try:
            dettaglio = e.read().decode("utf-8", "replace")[:400]
        except Exception:
            pass
        hint = {401: "chiave API mancante/errata (OPENROUTER_API_KEY nel registro User)",
                403: "accesso negato dall'endpoint",
                404: f"modello '{model}' non trovato su questo endpoint (ollama pull {model}?)",
                429: "rate limit dell'endpoint"}.get(e.code, "vedi il corpo della risposta")
        sys.exit(f"Errore HTTP {e.code} da {endpoint}: {hint}. {dettaglio}")
    except urllib.error.URLError as e:
        # L'endpoint NON risponde proprio: qui sì che il locale è spento/irraggiungibile.
        sys.exit(f"Endpoint non raggiungibile ({endpoint}): {e.reason}. "
                 f"Avvia Ollama ('ollama serve' + 'ollama pull {model}') o passa --endpoint.")
    except (TimeoutError, OSError) as e:
        # La chiamata è partita ma non è tornata entro il timeout: modello troppo lento su
        # questa macchina per l'input. Messaggio pulito, niente traceback.
        sys.exit(f"Timeout dopo {timeout}s verso {endpoint} (modello '{model}'): {e}. "
                 f"Su CPU questo modello è troppo lento per l'input: usane uno più piccolo o alza --timeout.")
    try:
        return body["choices"][0]["message"]["content"].strip()
    except Exception:
        return json.dumps(body)[:500]


def main():
    for s in (sys.stdout, sys.stderr):
        try:
            s.reconfigure(encoding="utf-8")
        except Exception:
            pass
    ap = argparse.ArgumentParser()
    ap.add_argument("--profilo", required=True, help="nome o path del profilo (system prompt)")
    ap.add_argument("--in", dest="inp")
    ap.add_argument("--out", dest="out")
    ap.add_argument("--modello", default=DEFAULT_MODEL)
    ap.add_argument("--endpoint", default=DEFAULT_ENDPOINT)
    ap.add_argument("--json", action="store_true", help="forza output JSON")
    ap.add_argument("--max-tokens", type=int, default=512, dest="max_tokens")
    ap.add_argument("--timeout", type=int, default=180)
    a = ap.parse_args()

    system = carica_profilo(a.profilo)
    user = open(a.inp, encoding="utf-8").read() if a.inp else sys.stdin.read()
    if not user.strip():
        sys.exit("Input vuoto.")

    out = chiama(a.endpoint, a.modello, system, user, a.json, a.max_tokens, a.timeout)
    if a.out:
        Path(a.out).write_text(out + "\n", encoding="utf-8")
    else:
        print(out)


if __name__ == "__main__":
    main()

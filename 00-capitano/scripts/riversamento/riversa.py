#!/usr/bin/env python
"""riversa.py - riversa la navicella sul repo GitHub privato (strato dati).

Assembla nel repo: L1-L4 in chiaro + L5 cifrato (L5.enc) + [grafo: aggancio da
collegare], poi git add/commit/push. La cifratura di L5 usa cifra_l5.py
(Argon2id + XChaCha20-Poly1305, libsodium).

Cancello di Mnemosyne (memoria/cancello-L5-cifratura.md) implementato qui:
  - L5 = la cartella `00-capitano/memoria/L5-subconscio/` (criterio source:inferred
    di Mnemosyne, non una scelta di Dedalo): cifrata, MAI copiata in chiaro.
  - passphrase L5 da getpass, mai salvata, mai da CLI.
  - il grafo pubblicato escludera' i nodi L5 (step da collegare al generatore).

Cosa esporre in chiaro (INCLUDE) e' un DEFAULT affinabile da Mnemosyne, non un
verdetto di Dedalo: la lista precisa di cosa la memoria mostra e' dominio suo.

Uso:
  python riversa.py --repo <path-repo-locale> [--message "..."] [--no-push]
  python riversa.py --self-test
"""
import argparse
import fnmatch
import os
import shutil
import subprocess
import sys
from getpass import getpass

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import cifra_l5  # noqa: E402

# --- CONFIG (default affinabili) ---
NAVICELLA = os.path.abspath(os.path.join(HERE, "..", "..", ".."))  # Desktop/AgentsAI
L5_REL = os.path.join("00-capitano", "memoria", "L5-subconscio")
INCLUDE = ["00-capitano", "01-personale", "02-accademico"]
EXCLUDE = ["*venv*", "node_modules", "__pycache__", ".git", "*.enc",
           "L5-subconscio", ".env", "*.key", "*.pem", "*.pyc", "*.log",
           # code di apprendimento: catture grezze dei prompt di Giuseppe,
           # materiale sensibile (L5-adjacent) - MAI in chiaro sul remoto.
           "coda-*.jsonl",
           # anima locale (anima-dati.js) contiene la FORMA di L5: mai in chiaro.
           # Il grafo pulito per il remoto e' generato a parte (grafo.json).
           "anima",
           # modelli voce (Piper .onnx): pesanti (~60MB) e inutili in viaggio.
           "*.onnx"]
MAX_FILE_MB = 95  # GitHub rifiuta i file > 100 MB: i piu' grandi (es. libri PDF) vengono
                  # saltati dal riversamento in chiaro (restano in locale nella navicella).

# Credential Manager di Windows (via keyring/DPAPI): dove --auto legge la passphrase.
# Analisi 31-07: DPAPI protegge da furto disco e altri utenti; non da malware nel
# contesto utente, ma L5 e' gia' in chiaro sul disco -> nessun vettore nuovo. Gate-privacy
# tenuto: la passphrase resta locale, mai sul repo.
KR_SERVICE = "navicella-riversamento"
KR_USER = "L5"


def _excluded(name: str) -> bool:
    return any(fnmatch.fnmatch(name, pat) for pat in EXCLUDE)


def sync_chiaro(navicella: str, repo: str, include) -> int:
    """Copia L1-L4 (le cartelle include) nel repo, potando le esclusioni e L5."""
    n = 0
    for inc in include:
        base = os.path.join(navicella, inc)
        if not os.path.isdir(base):
            continue
        for root, dirs, files in os.walk(base):
            dirs[:] = [d for d in dirs if not _excluded(d)]  # pota in-place
            for f in files:
                if _excluded(f):
                    continue
                src = os.path.join(root, f)
                if os.path.getsize(src) > MAX_FILE_MB * 1024 * 1024:
                    print(f"  [saltato >{MAX_FILE_MB}MB] {os.path.relpath(src, navicella)}")
                    continue
                rel = os.path.relpath(src, navicella)
                dst = os.path.join(repo, rel)
                os.makedirs(os.path.dirname(dst), exist_ok=True)
                shutil.copy2(src, dst)
                n += 1
    return n


def cifra_l5_step(navicella: str, repo: str, passphrase: bytes) -> bool:
    src = os.path.join(navicella, L5_REL)
    if not os.path.isdir(src):
        print("  L5: cartella assente, salto")
        return False
    cifra_l5.cifra(src, os.path.join(repo, "L5.enc"), passphrase)
    print("  L5: cifrato -> L5.enc")
    return True


def cifra_code_step(navicella: str, repo: str, passphrase: bytes, include) -> bool:
    """Cifra le code di apprendimento (coda-*.jsonl) in un blob coda.enc.

    Le code sono i prompt grezzi di Giuseppe (materia dell'auto-apprendimento):
    L5-adjacent -> mai in chiaro sul remoto, ma cifrate VIAGGIANO (patto
    dataset-evoluzione: dammi tutto e resta memoria). Nel grafo restano i loro
    nodi e legami (calcolati in locale sui file in chiaro); qui si cifra solo il
    CONTENUTO. Stessa passphrase di L5 -> una sola digitazione."""
    import tempfile
    files = []
    for inc in include:
        base = os.path.join(navicella, inc)
        if not os.path.isdir(base):
            continue
        for root, _, fs in os.walk(base):
            for f in fs:
                if fnmatch.fnmatch(f, "coda-*.jsonl"):
                    files.append(os.path.join(root, f))
    if not files:
        print("  code: nessuna, salto")
        return False
    tmp = tempfile.mkdtemp()
    try:
        staging = os.path.join(tmp, "coda")
        os.makedirs(staging)
        for src in files:
            shutil.copy2(src, os.path.join(staging, os.path.basename(src)))
        cifra_l5.cifra(staging, os.path.join(repo, "coda.enc"), passphrase)
        print(f"  code: {len(files)} file cifrati -> coda.enc")
        return True
    finally:
        shutil.rmtree(tmp, ignore_errors=True)


def grafo_step(navicella: str, repo: str, passphrase: bytes):
    """Genera repo/grafo.json (grafo COMPLETO, nodi riservati L5+code anonimizzati) e
    repo/mappa-grafo.enc (la corrispondenza etichetta->nome-vero, CIFRATA). Rigenera prima
    l'indice dai file attuali. Il grafo nasce in locale sui file in chiaro; sul remoto i nodi
    L5/code sono muti (R-<id>), e i loro nomi vivono solo nel blob cifrato, aperto in locale
    con la passphrase. Revisione del cancello 3 (28-07): il cervello viaggia COMPLETO, protetto."""
    import tempfile
    scripts = os.path.join(navicella, "00-capitano", "scripts")
    gen = os.path.join(scripts, "anima-grafo.py")
    idx = os.path.join(scripts, "memoria-indice.py")
    if not os.path.isfile(gen):
        print("  grafo: generatore assente, salto")
        return
    cap = dict(capture_output=True, text=True)
    tmp = tempfile.mkdtemp()
    try:
        if os.path.isfile(idx):
            subprocess.run([sys.executable, idx, "--build"], check=True, **cap)
        mappa_json = os.path.join(tmp, "mappa", "mappa-grafo.json")
        subprocess.run([sys.executable, gen, "--json", os.path.join(repo, "grafo.json"),
                        "--mappa", mappa_json], check=True, **cap)
        # cifra la mappa dei nomi veri: mai in chiaro sul remoto
        cifra_l5.cifra(os.path.dirname(mappa_json),
                       os.path.join(repo, "mappa-grafo.enc"), passphrase)
        print("  grafo: grafo.json (riservati anonimi) + mappa-grafo.enc cifrata")
    except Exception as e:
        print(f"  grafo: salto ({e})")
    finally:
        shutil.rmtree(tmp, ignore_errors=True)


def git_step(repo: str, message: str, push: bool):
    def git(*a):
        return subprocess.run(["git", "-C", repo, *a], check=True,
                              capture_output=True, text=True)
    git("add", "-A")
    st = subprocess.run(["git", "-C", repo, "status", "--porcelain"],
                        capture_output=True, text=True)
    if not st.stdout.strip():
        print("  git: niente da committare")
        return
    git("commit", "-m", message)
    print(f"  git: commit '{message}'")
    if push:
        git("push")
        print("  git: push OK")
    else:
        print("  git: push saltato (--no-push)")


def _audit_repo(repo):
    """Audit di sicurezza AUTOMATICO prima del push — sostituisce il controllo manuale che
    Dedalo faceva a mano. Verifica i cancelli critici; se uno cade, il push si abortisce e
    resta solo il commit locale. Nell'automatismo e' l'unica rete: niente occhio umano."""
    problemi = []
    for root, dirs, files in os.walk(repo):
        if ".git" in root:
            continue
        for d in dirs:
            if d in ("L5-subconscio", "anima"):
                problemi.append(f"'{d}' in chiaro nel repo")
        for f in files:
            if fnmatch.fnmatch(f, "coda-*.jsonl"):
                problemi.append(f"coda in chiaro: {f}")
    for f in ["L5.enc", "coda.enc", "grafo.json", "mappa-grafo.enc"]:
        if not os.path.isfile(os.path.join(repo, f)):
            problemi.append(f"blob atteso mancante: {f}")
    gj = os.path.join(repo, "grafo.json")
    if os.path.isfile(gj):
        with open(gj, encoding="utf-8") as fh:
            if "L5-subconscio" in fh.read():
                problemi.append("grafo.json espone un path L5")
    return (not problemi, problemi)


def riversa(navicella, repo, passphrase, message, push, include=INCLUDE):
    print(f"Riverso {navicella} -> {repo}")
    # pulizia del chiaro precedente (evita residui di file rinominati/cancellati)
    for inc in include:
        p = os.path.join(repo, inc)
        if os.path.isdir(p):
            shutil.rmtree(p, ignore_errors=True)
    n = sync_chiaro(navicella, repo, include)
    print(f"  chiaro: {n} file (L1-L4)")
    cifra_l5_step(navicella, repo, passphrase)
    cifra_code_step(navicella, repo, passphrase, include)
    grafo_step(navicella, repo, passphrase)
    if os.path.isdir(os.path.join(repo, ".git")):
        if push:
            ok, problemi = _audit_repo(repo)
            if not ok:
                print("  AUDIT PRE-PUSH FALLITO -> push ABORTITO (resta il commit locale):")
                for p in problemi:
                    print(f"    - {p}")
                git_step(repo, message, push=False)
                return
            print("  audit pre-push: OK")
        git_step(repo, message, push)
    else:
        print("  git: repo non inizializzato, salto (solo assemblaggio)")


def _self_test() -> bool:
    import tempfile
    d = tempfile.mkdtemp()
    try:
        nav = os.path.join(d, "nav")
        # finta navicella: un file pubblico + un file L5 segreto
        pub = os.path.join(nav, "00-capitano", "memoria")
        os.makedirs(pub)
        with open(os.path.join(pub, "pubblico.md"), "w", encoding="utf-8") as f:
            f.write("decisione operativa L3\n")
        l5 = os.path.join(nav, L5_REL, "psicologica")
        os.makedirs(l5)
        with open(os.path.join(l5, "segreto.md"), "w", encoding="utf-8") as f:
            f.write("PAROLA_SEGRETA_PSICHE\n")
        # una coda di apprendimento (grezza): deve finire CIFRATA, mai in chiaro
        with open(os.path.join(nav, "00-capitano", "coda-apprendimento.jsonl"),
                  "w", encoding="utf-8") as f:
            f.write('{"testo": "PROMPT_GREZZO_SEGRETO"}\n')
        # una cartella da escludere (deve NON finire nel repo)
        os.makedirs(os.path.join(nav, "00-capitano", "scripts", "voce-venv"))
        with open(os.path.join(nav, "00-capitano", "scripts", "voce-venv", "x.py"),
                  "w", encoding="utf-8") as f:
            f.write("junk\n")

        repo = os.path.join(d, "repo")
        os.makedirs(repo)
        subprocess.run(["git", "-C", repo, "init", "-q"], check=True)
        subprocess.run(["git", "-C", repo, "config", "user.email", "t@t"], check=True)
        subprocess.run(["git", "-C", repo, "config", "user.name", "t"], check=True)

        riversa(nav, repo, b"pw-test", "test", push=False,
                include=["00-capitano"])

        # verifiche
        pub_ok = os.path.isfile(os.path.join(repo, "00-capitano", "memoria", "pubblico.md"))
        enc_ok = os.path.isfile(os.path.join(repo, "L5.enc"))
        coda_enc_ok = os.path.isfile(os.path.join(repo, "coda.enc"))
        l5_clear = os.path.isdir(os.path.join(repo, L5_REL))
        coda_clear = False
        leak = False
        for root, _, files in os.walk(repo):
            if ".git" in root:
                continue
            for fn in files:
                if fnmatch.fnmatch(fn, "coda-*.jsonl"):
                    coda_clear = True
                try:
                    with open(os.path.join(root, fn), "rb") as fh:
                        data = fh.read()
                        if (b"PAROLA_SEGRETA_PSICHE" in data
                                or b"PROMPT_GREZZO_SEGRETO" in data):
                            leak = True
                except Exception:
                    pass
        venv_ok = not os.path.exists(os.path.join(repo, "00-capitano", "scripts", "voce-venv"))

        print("1) L1-L4 copiati in chiaro:        ", "OK" if pub_ok else "FALLITO")
        print("2) L5.enc prodotto:                ", "OK" if enc_ok else "FALLITO")
        print("3) coda.enc prodotto:              ", "OK" if coda_enc_ok else "FALLITO")
        print("4) L5 NON in chiaro nel repo:      ", "OK" if not l5_clear else "FALLITO")
        print("5) code NON in chiaro nel repo:    ", "OK" if not coda_clear else "FALLITO")
        print("6) segreti (L5 + grezzo) assenti:  ", "OK" if not leak else "FALLITO")
        print("7) esclusioni (venv) rispettate:   ", "OK" if venv_ok else "FALLITO")
        return (pub_ok and enc_ok and coda_enc_ok and not l5_clear
                and not coda_clear and not leak and venv_ok)
    finally:
        shutil.rmtree(d, ignore_errors=True)


def main():
    ap = argparse.ArgumentParser(description="Riversa la navicella sul repo privato.")
    ap.add_argument("--self-test", action="store_true")
    ap.add_argument("--imposta-passphrase", action="store_true",
                    help="salva la passphrase L5 nel Credential Manager di Windows (una volta).")
    ap.add_argument("--auto", action="store_true",
                    help="legge la passphrase dal Credential Manager e riversa+push senza chiedere nulla.")
    ap.add_argument("--repo", help="path del repo GitHub privato (working copy locale).")
    ap.add_argument("--navicella", default=NAVICELLA, help="radice navicella (default: auto).")
    ap.add_argument("--message", default="riversamento", help="messaggio di commit.")
    ap.add_argument("--no-push", action="store_true", help="commit locale, niente push.")
    args = ap.parse_args()

    if args.self_test:
        sys.exit(0 if _self_test() else 1)
    if args.imposta_passphrase:
        import keyring
        pw = getpass("Passphrase L5 da salvare nel Credential Manager: ")
        if pw != getpass("Ripeti: "):
            print("Le passphrase non coincidono."); sys.exit(1)
        keyring.set_password(KR_SERVICE, KR_USER, pw)
        print("Passphrase salvata nel Credential Manager (DPAPI). L'automatismo la usera' "
              "senza chiedertela. Per rimuoverla: cancella la voce in Gestione credenziali.")
        return
    if not args.repo:
        ap.error("--repo richiesto (oppure --self-test / --imposta-passphrase)")
    if args.auto:
        import keyring
        stored = keyring.get_password(KR_SERVICE, KR_USER)
        if not stored:
            print("Passphrase non impostata nel Credential Manager. "
                  "Esegui prima: riversa.py --imposta-passphrase", file=sys.stderr)
            sys.exit(1)
        pw = stored.encode("utf-8")
        riversa(args.navicella, args.repo, pw, args.message, push=True)
    else:
        pw = getpass("Passphrase L5 (NON viene salvata): ").encode("utf-8")
        riversa(args.navicella, args.repo, pw, args.message, push=not args.no_push)


if __name__ == "__main__":
    main()

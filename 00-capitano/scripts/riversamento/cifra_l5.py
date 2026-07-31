#!/usr/bin/env python
"""cifra_l5.py - cifratura di L5 per il riversamento remoto (repo GitHub privato).

Standard (libsodium via PyNaCl): Argon2id deriva la chiave dalla passphrase +
XChaCha20-Poly1305 (authenticated encryption: cifra E rileva manomissioni).
NIENTE crypto custom (vedi memoria/cancello-L5-cifratura.md per il perche').

Cancello di Mnemosyne - vincoli non negoziabili implementati qui:
  - la passphrase NON viene MAI salvata: si digita al momento (getpass), MAI da
    argomento CLI (finirebbe nella shell history / ps), mai su file, mai nel repo.
  - la sostanza di L5 e' cifrata PRIMA del push; sul repo c'e' solo il blob .enc.
  - la chiave vive solo nella testa di Giuseppe + in RAM per l'istante dell'uso.
  - il salt e il nonce stanno in chiaro nel file (e' corretto: sono pubblici; e'
    la chiave che deve restare segreta).

Uso:
  python cifra_l5.py cifra   <cartella_L5> <out.enc>
  python cifra_l5.py decifra <in.enc> <cartella_dest>
  python cifra_l5.py --self-test
"""
import argparse
import io
import os
import sys
import tarfile
from getpass import getpass

import nacl.pwhash
import nacl.bindings as b
import nacl.utils

MAGIC = b"L5ENC\x01"  # 6 byte: formato + versione
SALTBYTES = nacl.pwhash.argon2id.SALTBYTES                    # 16
NONCEBYTES = b.crypto_aead_xchacha20poly1305_ietf_NPUBBYTES   # 24
KEYBYTES = b.crypto_aead_xchacha20poly1305_ietf_KEYBYTES      # 32
OPS = nacl.pwhash.argon2id.OPSLIMIT_MODERATE
MEM = nacl.pwhash.argon2id.MEMLIMIT_MODERATE


def _key(passphrase: bytes, salt: bytes) -> bytes:
    return nacl.pwhash.argon2id.kdf(KEYBYTES, passphrase, salt,
                                    opslimit=OPS, memlimit=MEM)


def _tar_dir(path: str) -> bytes:
    buf = io.BytesIO()
    with tarfile.open(fileobj=buf, mode="w") as tar:
        tar.add(path, arcname=os.path.basename(path.rstrip("/\\")))
    return buf.getvalue()


def _untar(data: bytes, dest: str):
    buf = io.BytesIO(data)
    with tarfile.open(fileobj=buf, mode="r") as tar:
        try:
            tar.extractall(dest, filter="data")  # py3.12+: hardening
        except TypeError:
            tar.extractall(dest)  # blob e' nostro (cifrato con la nostra chiave)


def cifra(src_dir: str, out_path: str, passphrase: bytes):
    plain = _tar_dir(src_dir)
    salt = nacl.utils.random(SALTBYTES)
    nonce = nacl.utils.random(NONCEBYTES)
    key = _key(passphrase, salt)
    header = MAGIC + salt + nonce  # autenticato come AAD
    ct = b.crypto_aead_xchacha20poly1305_ietf_encrypt(plain, header, nonce, key)
    with open(out_path, "wb") as f:
        f.write(header + ct)


def decifra(in_path: str, dest_dir: str, passphrase: bytes):
    with open(in_path, "rb") as f:
        blob = f.read()
    if blob[:len(MAGIC)] != MAGIC:
        raise ValueError("formato non riconosciuto")
    off = len(MAGIC)
    salt = blob[off:off + SALTBYTES]; off += SALTBYTES
    nonce = blob[off:off + NONCEBYTES]; off += NONCEBYTES
    ct = blob[off:]
    header = MAGIC + salt + nonce
    key = _key(passphrase, salt)
    plain = b.crypto_aead_xchacha20poly1305_ietf_decrypt(ct, header, nonce, key)
    _untar(plain, dest_dir)


def _self_test() -> bool:
    import tempfile
    import shutil
    d = tempfile.mkdtemp()
    try:
        src = os.path.join(d, "L5"); os.mkdir(src)
        with open(os.path.join(src, "a.md"), "w", encoding="utf-8") as f:
            f.write("segreto psicologico aeiou accentate: àèìòù\n")
        os.mkdir(os.path.join(src, "sub"))
        with open(os.path.join(src, "sub", "b.md"), "w", encoding="utf-8") as f:
            f.write("paura non nominata\n")
        enc = os.path.join(d, "L5.enc")
        pw = b"passphrase-di-prova"
        cifra(src, enc, pw)

        out = os.path.join(d, "out")
        decifra(enc, out, pw)
        r = os.path.join(out, "L5")
        a = open(os.path.join(r, "a.md"), encoding="utf-8").read()
        bb = open(os.path.join(r, "sub", "b.md"), encoding="utf-8").read()
        ok1 = (a == "segreto psicologico aeiou accentate: àèìòù\n"
               and bb == "paura non nominata\n")

        try:
            decifra(enc, os.path.join(d, "out2"), b"passphrase-sbagliata")
            ok2 = False
        except Exception:
            ok2 = True

        blob = open(enc, "rb").read()
        ok3 = b"paura" not in blob and b"segreto" not in blob

        print("1) round-trip (decifra == originale):", "OK" if ok1 else "FALLITO")
        print("2) passphrase sbagliata rifiutata:   ", "OK" if ok2 else "FALLITO")
        print("3) plaintext assente dal blob cifrato:", "OK" if ok3 else "FALLITO")
        return ok1 and ok2 and ok3
    finally:
        shutil.rmtree(d, ignore_errors=True)


def main():
    ap = argparse.ArgumentParser(description="Cifratura L5 (Argon2id + XChaCha20-Poly1305).")
    ap.add_argument("--self-test", action="store_true", help="verifica interna e esce.")
    sub = ap.add_subparsers(dest="cmd")
    c = sub.add_parser("cifra"); c.add_argument("src"); c.add_argument("out")
    de = sub.add_parser("decifra"); de.add_argument("inp"); de.add_argument("dest")
    args = ap.parse_args()

    if args.self_test:
        sys.exit(0 if _self_test() else 1)
    if args.cmd == "cifra":
        pw = getpass("Passphrase L5 (NON viene salvata): ").encode("utf-8")
        pw2 = getpass("Ripeti passphrase: ").encode("utf-8")
        if pw != pw2:
            print("Le passphrase non coincidono."); sys.exit(1)
        cifra(args.src, args.out, pw)
        print(f"Cifrato -> {args.out}")
    elif args.cmd == "decifra":
        pw = getpass("Passphrase L5: ").encode("utf-8")
        decifra(args.inp, args.dest, pw)
        print(f"Decifrato -> {args.dest}")
    else:
        ap.print_help()


if __name__ == "__main__":
    main()

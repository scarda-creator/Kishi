# Navicella — dati (Kishi)

Repository **PRIVATO**. Riversamento dello strato dati della navicella di Giuseppe Scarda.

## Cosa contiene
- **L1–L4** (biblioteca, memoria operativa, diari, documenti/opere): in chiaro.
- **`L5.enc`** — substrato psicologico (L5), cifrato (Argon2id + XChaCha20-Poly1305, libsodium).
- **`coda.enc`** — code di apprendimento (i prompt grezzi), cifrate con la stessa passphrase.
- **`grafo.json`** — il cervello COMPLETO: nodi e legami di tutta la memoria. I nodi riservati
  (L5 e code) compaiono anonimi (`R-<id>`); i loro nomi veri sono in `mappa-grafo.enc`.
- **`mappa-grafo.enc`** — la corrispondenza `R-<id>` → nome vero, cifrata. Si apre in locale con
  la passphrase: solo allora i nodi riservati del grafo prendono un nome.

La chiave **non è qui**: vive solo nel dispositivo di Giuseppe e si digita al momento dell'uso.

## Come accedere
- **L1–L4** e **`grafo.json`**: si leggono/navigano direttamente, anche dal telefono via app GitHub.
  Il grafo è completo ovunque; i nodi `R-<id>` restano muti finché non svelati.
- **L5 / code / mappa dei nomi**: si decifrano sul PC con
  `00-capitano/scripts/riversamento/cifra_l5.py decifra <blob> <cartella>` (chiede la passphrase).

Aggiornato da `riversa.py`. **Non rendere pubblico questo repository.**

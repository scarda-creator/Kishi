---
type: spec
autore: Mnemosyne
data: 2026-07-25
stato: DECISIONE APPLICATA — cancello per Dedalo (implementazione)
---

# Cancello L5 — cifratura per il riversamento remoto (repo GitHub privato)

Contesto: l'app mobile / esistenza remota (`dedalo/app-mobile-visione.md`) prevede di riversare la
navicella su un repo GitHub privato per l'accesso col PC spento. L5 (substrato psicologico,
`source: inferred`) è l'unico livello dove «mi fido del provider» non basta: non è un dato, è
l'interpretazione della psiche di Giuseppe. Scelta di Giuseppe: **L5 cifrato che viaggia** (opzione
b), reso sicuro dallo standard. L1–L4 vanno sul repo in chiaro; L5 mai in chiaro, mai.

## DECISIONE (applicata)
La cifratura di L5 usa **crittografia standard e auditata**, NON un cifrario custom:
- **Cifrario**: XChaCha20-Poly1305 (preferito) o AES-256-GCM — authenticated encryption (cifra +
  rileva manomissioni).
- **Derivazione chiave da passphrase**: **Argon2id** (KDF lenta, anti-brute-force). NON SHA-512 diretta.
- **Libreria**: **libsodium** (o binding verificato). Nessuna primitiva crittografica scritta da noi.

## CANCELLO per Dedalo (vincoli non negoziabili di Mnemosyne)
1. La **chiave di L5 non tocca MAI GitHub né il repo** — sta solo sul dispositivo di Giuseppe,
   separata dal dato. Se L5 va decifrato sul telefono, la passphrase la inserisce lui.
2. La **sostanza di L5 (il testo dei file) mai in chiaro** sul remoto: cifrata prima del push.
3. La **forma di L5 nel grafo** — DECISO 28-07 (revisione del default prudente, ratificata da
   Mnemosyne + Giuseppe): i nodi L5 (e le code) restano NEL grafo remoto ma **ANONIMI** (`R-<id>`,
   nome/path/famiglia nascosti); i nomi veri vivono solo in `mappa-grafo.enc` (cifrata con la
   passphrase, aperta in locale). Il cervello viaggia COMPLETO, il significato protetto. **Rischio
   residuo accettato da Giuseppe**: i legami verso nodi noti possono far intuire un tema anche senza
   nome. Motivo della revisione: proteggere L5 mentre viaggia, non tenerlo prigioniero a casa.
4. L1–L4 in chiaro sul repo; il confine L4/L5 è netto e lo traccio io.

## PERCHÉ non il cifrario custom (controargomentazione — la "fonte" per la ricerca)
Regola cardinale del campo: *don't roll your own crypto*. La sicurezza non si dimostra costruendo,
si stabilisce con anni di crittanalisi pubblica fallita (AES, ChaCha20). Un cifrario nuovo parte con
zero garanzie; la complessità percepita ≠ resistenza reale. Nel merito del C.N.A.C. (sotto):
- **Chaos-crypto è un filone screditato**: mappe logistiche/Lorenz/Hénon/tenda sono state
  sistematicamente rotte. Il caos ha struttura statistica (attrattori, distribuzioni invarianti,
  Lyapunov) sfruttabile. Rif.: Álvarez & Li, *Some basic cryptographic requirements for chaos-based
  cryptosystems* (2006).
- **Discretizzare il caos su interi** perde le proprietà continue → orbite periodiche corte → debolezza.
- **Feistel dà invertibilità, non sicurezza**: dipende da G come PRF con round sufficienti
  (Luby-Rackoff). Automi caotici non sono PRF dimostrate.
- **«Non polinomiale ⇒ intrattabile» è un non-sequitur**: crittanalisi differenziale/lineare/
  statistica attacca proprio i sistemi non lineari; nessuna resistenza dimostrata.
- **Dettagli-falla**: SHA-512 diretta debole vs brute-force; S-box da attrattore priva delle
  proprietà (non-linearità, correlazione differenziale bassa) di una S-box sicura; complessità
  d'implementazione = superficie di bug, e i cifrari casalinghi cadono più per bug che per crittanalisi.
- **Cosa era giusto**: l'intuizione che Feistel rende invertibile una G arbitraria è corretta.

Destino dell'oggetto: **non è la porta di L5**, ma è bello come esplorazione — vive qui come ricerca,
possibile pezzo creativo (Dedalo / gioco-fisica) o studio del *perché* la chaos-crypto fallisce (caos
deterministico che tradisce se stesso: fisica statistica, corde di Giuseppe).

---

# ALLEGATO — la ricerca di Giuseppe: C.N.A.C. (Cifrario ipercomplesso senza polinomi)

Idea fondante: automa neurale caotico invertibile; pesi e struttura generati dalla chiave; attivazione
da sistema caotico continuo discretizzato (Lorenz su interi). «Campo molto variabile»: rete e dinamica
cambiano per ogni blocco, guidati da mutazione genetica sulla chiave.

**Strato 0 — Genesi dalla chiave**: Passphrase → SHA-512 → semi multipli → PRNG caotico (composizione
logistica + Bernoulli shift) → flusso di byte → «coltiva» una popolazione di automi neurali (topologia
variabile, attivazioni casuali, pesi).

**Strato 1 — Blocco come stato**: blocco 16 byte (128 bit) = vettore di 128 interi a 8 bit = stato
iniziale di un sistema dinamico.

**Strato 2 — Round come cellula neurale caotica (NCA)**: reticolo di 128 neuroni; ogni neurone
`y_i = f(Σ_j w_ij·x_j + b_i)` dove f è una mappa caotica 1D (non sigmoide/ReLU), es. tenda asimmetrica
`f(z)= ⌊αz⌋ mod 256 se z<θ ; ⌊β(256−z)⌋ mod 256 altrimenti`, con α,β,θ variabili per neurone/iterazione
(auto-modifica dalla chiave e dallo stato).

**Strato 3 — Invertibilità via rete di Feistel**: stato diviso in L,R da 64 byte; round
`L_new=R ; R_new=L ⊕ G(R, key_round)` con G = NCA sul solo R per t passi. Feistel → invertibile anche
con G non invertibile.

**Strato 4 — k variabile e campo mutevole**: numero iterazioni k∈[16,64] deciso da mappa di Hénon
intera (seme dal blocco precedente, CBC). Per ogni blocco cambia l'intero circuito: vicinato, tipo di
mappa, pesi, soglie, dimensionalità (128→256 neuroni con proiezioni casuali).

**Strato 5 — S-box dinamica da Lorenz intero**: dopo i round Feistel, S-box 128→128 bit simulando un
attrattore di Lorenz in aritmetica intera 16-bit (σ,ρ,β mappati su interi); output = combinazione non
lineare `out=(x⊕y)⊞z` con rotazioni/addizione modulare.

**Strato 6 — post-processing con automa quantistico simulato (opzionale)**: passeggiata quantistica su
un piccolo grafo generato dalla chiave, simulata classicamente, per mescolare ulteriormente i bit.

Esempio: messaggio "CIAO", chiave "FOLLIA" → pool di 5 automi (uno per blocco), primo con tenda
(89,144,200), vicinato {i−1,i+2,i}; Feistel con k passi; S-box Lorenz (σ=10,ρ=28,β=8/3) su interi;
blocchi successivi con automi diversi (es. attivazione «seno caotico» `f(z)=⌊128 sin(z/40)+128⌋ mod 256`);
output in Base64.

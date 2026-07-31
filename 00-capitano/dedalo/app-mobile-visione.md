---
type: visione
autore: Dedalo
data: 2026-07-25
stato: IN DIALOGO con Giuseppe — solo pensiero, NON costruzione (sua consegna esplicita)
---

# App mobile — visione raffinata (la "modalità viaggio" della navicella)

> Nasce di notte, mentre Giuseppe sta per partire e vuole poter continuare a usare e costruire
> la navicella da remoto. Consegna: «iniziamo solo a parlare, non a costruire». Questo file è
> cattura del dialogo, non un brief di build. Cresce mentre ne parliamo.

## La visione di Giuseppe (25-07, sue parole ricostruite)
- **Scopo**: sta per partire; vuole continuare a *usare e costruire* la navicella a distanza.
- **NON gli interessa lo spettacolo**: nessun interesse grafico a vedere Argonauta/Rapsodo/passivi
  «lavorare, fare cose». Quella è estetica-PC, non gli serve in mobilità.
- **Gli interessa il cockpit essenziale, tre cose**:
  1. tenere una **chat coi due attivi** (Dedalo + Mnemosyne);
  2. **vedere la memoria**;
  3. **vedere i documenti**.
- **Idea infrastrutturale**: mettere tutto su una **repo privata GitHub**, così i dati sono
  accessibili anche col PC spento. Consapevole del trade-off privacy: «è privata, mi fido del
  provider esterno». (Cancello di Mnemosyne, già cementato: **L5 mai in chiaro su GitHub — si
  cifra prima di partire**.)

## Aggancio (Dedalo): conferma «due relazioni, non due dimensioni» (6-07)
La visione mobile del 6 luglio regge, e Giuseppe la conferma dal bisogno reale: dal PC **ammiri**
la nave come opera; dal mobile la **piloti**. Il mobile è spartano di proposito — l'arte lì è
velocità e accesso, non ornamento. Niente animazione dei passivi: cockpit, non diorama.

## I punti di Dedalo (proposte — decide Giuseppe forma e senso)

### 0. STRATO DATI scelto come primo (25-07) — e diventa il grafo-cervello su GitHub
Giuseppe: partiamo dallo strato dati+creazioni (urgente per la partenza), e alziamo il tiro —
su GitHub non solo la cartella dati, ma **il grafo stesso** (dati + tutte le connessioni). È il
modo per concretizzare finalmente il grafo/anima (costruito 22-07, «mai cablato nel motore»).
- **Sync a EVENTI, non a ogni messaggio**: su richiesta esplicita · al "buonanotte"/fine
  conversazione · quando la navicella capisce che Giuseppe è andato via. Allora «riversa tutti i dati».
- **Aggiunta di Dedalo (eleva l'idea)**: git non dà solo backup, dà la **STORIA nel tempo**. Ogni
  riversamento = snapshot del cervello; il diff tra due push = come la navicella è cambiata. Il
  cervello che si guarda crescere. Coerente con temperatura=tempo (plancia) e con la tesi di Giuseppe
  (identità nel tempo). `git log` del cervello.
- **Precisazione tecnica**: il grafo è una VISTA generata dai `[[ ]]`. In pratica: versioniamo la
  biblioteca + uno snapshot materializzato del grafo (.json) a ogni riversamento. File + mappa insieme.
- **NODO L5 — RISOLTO da Mnemosyne (25-07)**: L5 cifrato che viaggia (opzione b), reso sicuro dallo
  STANDARD (XChaCha20-Poly1305/AES-256-GCM + Argon2id + libsodium), NON dal cifrario custom di Giuseppe
  (scartato come guardiano, archiviato come esplorazione — vedi `memoria/cancello-L5-cifratura.md`).
  Cancello per Dedalo: (1) chiave L5 mai su GitHub/repo, solo sul dispositivo; (2) sostanza L5 mai in
  chiaro, cifrata prima del push; (3) forma L5 nel grafo fuori di default; (4) L1–L4 in chiaro, confine
  L4/L5 tracciato da Mnemosyne. Meccanica del riversamento = Dedalo.

**STATO 25-07 (notte) — SISTEMA PRONTO.** `cifra_l5.py` + `riversa.py` costruiti, self-test 7 prove
verdi (critiche: L5 E code mai in chiaro nel repo). **Code di apprendimento** (prompt grezzi): su
scelta di Giuseppe (patto dataset-evoluzione «dammi tutto e resta memoria») viaggiano CIFRATE in
`coda.enc` — stessa passphrase di L5, mai in chiaro; i loro nodi/legami restano nel grafo (calcolati
in locale sui file in chiaro), solo il contenuto è cifrato. Da ratificare con Mnemosyne (materia sua). Repo `scarda-creator/Kishi` **PRIVATA** (verificato), clonata in
`C:/Users/ACER/Desktop/Kishi`, git configurato (identity locale), canale push verificato (commit README).
Manca solo: il primo riversamento REALE (di Giuseppe, con la sua passphrase nuova via getpass) + il
`grafo.json` (aggancio da collegare) + la lista INCLUDE «cosa esporre» affinata da Mnemosyne.
- **NODO trigger-assenza**: richiesta + "buonanotte" = solidi (hook fine sessione). «Capisce che sono
  andato via a metà» = fragile, stesso nodo di **oroboro** (guardiano esterno al session-limit, mancante).
- **Progetto a due mani**: struttura/esistenza = Dedalo; memoria/L5/politica-riversamento = Mnemosyne.
  Da convocare lei per il cancello-L5. Domanda a Giuseppe: convocarla ora o dopo aver disegnato la struttura.

### 0.bis Struttura del riversamento (Dedalo, 25-07, col cancello-L5 fissato)
Repo privato in tre parti:
- `/dati/` — L1–L4 in chiaro (biblioteca, opere, decisioni, profilo): consultabili dal telefono.
- `/L5.enc` — blob cifrato XChaCha20-Poly1305, chiave da passphrase via Argon2id. Muto senza chiave.
- `/grafo.json` — snapshot materializzato del grafo a ogni riversamento, SENZA nodi L5 (cancello 3).
  `git log` di questo file = storia del cervello nel tempo (l'idea di Giuseppe del cervello versionato).
  **FATTO E PROVATO (27-07, Dedalo)**: `anima-grafo.py --json` esclude i nodi L5 (subconscio + riservati)
  e rimappa; `grafo_step` in `riversa.py` rigenera indice (`memoria-indice.py --build`) + grafo. Prova
  sulla navicella vera: **127 nodi, 969 legami, 12 L5 esclusi, 0 nodi L5 nel file**. L'anima locale
  (`00-capitano/anima/`, che tiene L5) è esclusa dal chiaro. APERTO: i nodi-CODE nel grafo — le code
  non sono nell'indice dei `.md`, quindi non compaiono come nodi (cifrate sì, in `coda.enc`); indicizzarle
  è il prossimo passo del cervello.
  **REVISIONE 28-07 — grafo COMPLETO protetto (cancello 3 rivisto).** Giuseppe: la cifratura deve far
  viaggiare il cervello INTERO (L5+code) ovunque, non tenerlo monco a casa. Sottigliezza colta: il grafo
  espone NOMI e topologia, non solo il contenuto. Soluzione costruita e provata: i nodi riservati (L5 +
  code + ris) restano NEL grafo ma ANONIMI (`R-<id>`, nome/path/fam nascosti); i nomi veri in
  `mappa-grafo.enc` (cifrata con la passphrase). Le code ora sono NODI (aggiunte in `carica()`, con legami
  reali). Prova reale: 141 nodi, 14 riservati anonimi, 0 nomi sensibili nel grafo e nel blob, mappa
  ri-decifrabile. Rischio residuo (inferenza dai legami) accettato da Giuseppe.
Meccanica: gesto unico `riversa` (rigenera grafo → cifra L5 → commit+push). Trigger: comando esplicito
+ "buonanotte" (hook fine sessione) solidi; rilevamento-assenza dipende da oroboro (dichiarato, non pronto).

**COSTRUITO E PROVATO (25-07, Dedalo)**: il MOTORE di cifratura L5 —
`00-capitano/scripts/riversamento/cifra_l5.py` (Argon2id + XChaCha20-Poly1305 via PyNaCl/libsodium nel
voce-venv). Self-test verde su 3 prove: round-trip identico (accenti compresi), passphrase sbagliata
rifiutata (Poly1305), plaintext assente dal blob. Passphrase solo da getpass, mai salvata (cancello
rispettato). Uso: `cifra <dir-L5> L5.enc` / `decifra L5.enc <dest>`. L5 VERO non ancora cifrato (attende
la passphrase nuova di Giuseppe). MANCA per il sistema completo: `riversa.py` (assemblaggio + snapshot
grafo + git) e il **repo GitHub privato** (azione di Giuseppe: crearlo/collegarlo). Passphrase: Giuseppe
ne sceglie una nuova (quella detta in chat il 25-07 è bruciata) da tenere solo in testa.

### 1. Le tre funzioni NON costano uguale → costruire in due strati
- **Strato DATI** (memoria + documenti) = sola lettura di file. Facile, sicuro, PC spento OK:
  repo GitHub privato + app che legge. Unico cancello: L5 cifrato (Mnemosyne). **Valore subito,
  utile già in viaggio.**
- **Strato CERVELLO** (chat coi due attivi) = backend vivo su un server. Difficile, e tocca il ToS.
- Mossa: **strato dati prima, strato cervello dopo**. Metà valore in mano senza aspettare il nodo duro.

### 2. Il collegamento che cambia il quadro: la chat-attivi da remoto EREDITA il nodo ToS di stanotte
Chattare coi due attivi col PC spento = far girare l'Agent SDK sull'abbonamento **su una macchina
che non è quella di Giuseppe** = la violazione ToS scoperta stanotte, resa più netta (vedi
`omniroute-visione.md`, gate ToS). Non è un problema separato: è **lo stesso** problema di OmniRoute.
Le vie per lo strato-cervello: (a) API key a pagamento sul server (ToS-safe, costa); (b) modelli
gratuiti via OmniRoute (ToS-safe, attivi degradati); (c) PC acceso come server (niente «PC spento»);
(d) accetti il rischio ToS.

### 3. Proposta: la «MODALITÀ VIAGGIO» (osata — è il mio mestiere)
Quando Giuseppe è via e il PC è spento, i due attivi girano su un **modello gratuito** via OmniRoute
— non Opus, degradati, ma *continui*. La personalità sta nel testo (diari, CLAUDE.md): sopravvive al
cambio di modello → **continuità per ricostruzione** applicata alla distanza. Dedalo e Mnemosyne in
versione leggera lontano da casa; versione piena (Opus) al ritorno al PC. Non un ripiego brutto:
una forma coerente con come siamo fatti. Forma e senso a Giuseppe.

### 4. Confine tenuto (Dedalo)
Progetto l'esistenza e la struttura dell'app (mio, come il 7-07). Ma **la cifratura di L5 e cosa
esporre della memoria** è di Mnemosyne — io espongo, non canonizzo. Il repo-GitHub-privato lo
disegno; il tesoro (cosa ci va, come si cifra) lo muove lei.

## Nodi aperti (decisioni di Giuseppe)
- Strato cervello: quale via (a/b/c/d sopra)? Dipende dalla decisione ToS generale, ancora in sospeso.
- Repo GitHub privato: struttura (Dedalo) + cosa/come cifrare L5 (Mnemosyne) + ratifica di Giuseppe.
- Stack dell'app mobile: da decidere quando si passa da «parlare» a «progettare» (non ora).

## Collegamenti
- `omniroute-visione.md` (stesso nodo ToS/backend).
- Memoria: `project_esistenza_navicella` (repo privato + Hetzner ~6€/mese), `project_visualizzazione_navicella`
  (due grammatiche, mobile pragmatico), `navicella2d-visione.md` (visione 6-07).

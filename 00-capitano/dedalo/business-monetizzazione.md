---
type: visione
---

# Business — monetizzazione reale (il piano da 100€, tarato a ~200€)

> Correzione di rotta di Dedalo, 2026-07-18, dopo un mio errore di inquadramento: avevo
> misurato il business contro GPU/API-frontier (la luna) invece che contro l'asticella vera
> di Giuseppe — **~100€/mese per pagarsi il Max e lavorare meglio.** Questo documento ridefinisce
> il modulo su QUELLA cifra. Rimpiazza il frame "volano verso la GPU" di `business-modello-v3.md`
> come obiettivo primario (i meccanismi restano validi; cambia il bersaglio).

## Il bersaglio, con margine anti-fallimento
Il bisogno reale: **100€/mese** (abbonamento Max). Ma i ricavi da creator/vendite floppano a
mesi alterni, quindi si **mira a ~200€ nominali** distribuiti su più flussi, così che anche con
la metà che fallisce il netto resti ≈ 100€. Nessun singolo flusso deve reggere da solo i 100€:
la resilienza è nella diversificazione, non nella scommessa su un canale.

## I flussi (dal più diretto/sicuro al più incerto)
| # | Flusso | Come | Stima/mese | Rischio |
|---|--------|------|-----------|---------|
| 1 | **Vendita materiali di studio** | Pacchi-esame (quiz + formulario + dispense per corso) a 4-6€ su Gumroad/Payhip/Ko-fi (gratis, fee solo sul venduto). ~30 vendite = 120-150€. | 80-150€ | Basso |
| 2 | **Ripetizioni** | La presenza-fisica porta studenti; 2-4 ore/mese a 15-20€. | 30-80€ | Basso |
| 3 | **Affiliazione** | Link (libri fisica, tool) in bio/descrizioni. | 10-30€ | Basso, marginale |
| 4 | **Micro-supporto** | Ko-fi/Patreon dalla presenza scifi + fisica. | 10-40€ | Incerto |

Somma nominale ~130-300€ → **target operativo ~200€**, con pavimento realistico ≈ 100€ anche in
un mese fiacco. Il flusso 1 è la spina: usa ciò che la navicella **già produce**, non richiede
virale, zero rischio ban, zero capitale.

## Il ruolo delle 3 pipeline di contenuti (correzione chiave)
NON sono il ricavo — l'ad-share TikTok per un piccolo creator è centesimi. Sono l'**imbuto** e la
**vetrina**:
- **quiz-fisica** → gancio + "materiale completo nel link" (porta al flusso 1);
- **scifi** → costruisce audience/brand (porta al flusso 4 e alla riconoscibilità);
- **clip-film** → il più a rischio (Content ID anche su PD): **secondario**, non pilastro.
Il contenuto costruisce il pubblico; il pubblico compra i materiali e prende ripetizioni. Lì è il
denaro di una presenza-fisica autentica, non nei centesimi pubblicitari.

## Costo e setup (zero portafoglio per avviare)
- Storefront gratis (Gumroad/Payhip/Ko-fi): nessun costo fisso, trattengono solo sul venduto.
- Setup manuale una-tantum: **1 account TikTok fisica** (il forte) + **1 storefront**. Nessun
  proxy, nessun account-farm, nessun hosting a pagamento.
- Poi la navicella **produce e aggiorna i prodotti** e i contenuti-imbuto. Il ricavo è il primo
  capitale (Fase 1): da lì eventualmente il Max, e solo molto dopo le leve grandi.

## Cosa serve costruire (meccanismi)
- [x] `03-business/produzione/prodotti/impacchetta.py` — impacchetta i materiali di un corso
      (quiz + formulario + dispense + lavagne) in un prodotto vendibile (zip + scheda-listing con
      titolo/descrizione/prezzo). Trasforma "produciamo materiale" in "abbiamo prodotti".
- [ ] Generatore del "piano di pubblicazione" (titolo/caption/hashtag/data) per lo scheduler nativo.
- [ ] Iscrizione di Ermete/Ierofante in CLAUDE.md/architettura (classe SEMI-ATTIVO) — al prossimo riavvio.

## Onestà finale
Questo è realistico e coerente con chi sei: la navicella-strumento per la tua carriera da fisico,
e un motore modesto che ti paga il Max per lavorarci meglio. Non è la luna — è il gradino giusto.

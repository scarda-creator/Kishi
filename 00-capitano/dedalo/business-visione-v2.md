---
type: visione
---

# Business v2 — l'organo che chiude il ciclo dell'autonomia

> Visione di Dedalo, 2026-07-11. EVOLVE `roadmap-architetto-business.md` (MVP), non la sostituisce:
> di quella tengo la saggezza (confini etici, onestà sul "non è passivo", Dedalo che conosce la sua
> misura). La riscrivo perché tre cose sono cambiate: apparato A provato, tesi dell'autonomia (v2),
> e le fonti di produzione contenuti (OpenMontage, viral-reel-maker). "Cosa vende" resta di Giuseppe.

## Cosa è cambiato dalla roadmap MVP

1. **Apparato A è provato.** Produrre (trascrivere, tagliare reel, generare varianti, copy, caption)
   costa ~0 token Claude sul locale/cloud economico. Il "moltiplicatore" della vecchia roadmap non è
   più marginale: è un **costo marginale di produzione quasi-zero**. È la leva che rende un business
   di contenuti sensato per un singolo studente.
2. **La tesi dell'autonomia (v2).** Ogni altro apparato SPENDE (token, tempo di Giuseppe). Il Business
   è il primo che **guadagna**, e ciò che guadagna — una GPU — rimuove il soffitto (i 7s su CPU) che
   ho misurato oggi su *tutti* gli altri. Non è un modulo-collaterale: è l'organo che chiude il ciclo.
3. **Le fonti di produzione.** OpenMontage (studio video agentico, 52 tool, 500+ skill),
   viral-reel-maker (long→9:16), il playbook Packt di monetizzazione, baobuildbuddy (assistente
   verticale). La vecchia roadmap si fermava a "trend + copy"; le fonti abilitano produzione piena.

## L'idea forte (non ordinaria): il volano

```
   costo marginale ~0 (apparato A)
        │  produci contenuti a costo quasi-nullo
        ▼
   margine ──────────►  GPU  ──────────►  metabolismo più veloce/economico
        ▲                                        │
        └──────────  più/meglio contenuti  ◄─────┘  (produzione più rapida)
```

Il Business finanzia l'autonomia che rende il Business più economico. È il **primo loop
auto-rinforzante** della navicella: si paga da sé, e pagandosi accelera tutto il resto (asse I,
autonomia-dal-bisogno). Questa è la cornice che nessuna singola fonte conteneva — è la sintesi.

## L'architettura: uno studio di produzione a tre strati (le fonti mappate)

**Strato 1 — INTELLIGENCE (cosa fare).** Argonauta scouta domanda/trend (comando `/scout-trend`
della roadmap MVP + `last30days-skill` per la ricerca social). Non "cosa comprare", ma *quale
contenuto è richiesto ora*. Segnali, non ordini.

**Strato 2 — DECISIONE + PRODUZIONE (cosa e come).** Qui cade la lezione dell'apparato A applicata
al contenuto — ed è il cuore tecnico:
- La **spina creativa** (l'idea, l'hook, lo script, l'angolo) resta di **Dedalo/Opus**: è dove nasce
  l'idea (regola cementata). Il Demiurgo Business esegue su brief ricchi (come il Creativo).
- Le parti **meccaniche** (trascrizione, taglio reel 9:16, varianti thumbnail, caption, riformato,
  descrizioni multiple) vanno **locale/cloud-economico** via `esegui-locale.py`, pilotando i tool di
  OpenMontage e viral-reel-maker. **Il metabolismo È il margine.**
- Modello del Demiurgo Business: rivedo la roadmap MVP. Non "Sonnet perché è analisi": la
  creatività è a monte (Dedalo), la produzione è meccanica (locale) → il Demiurgo Business è un
  *orchestratore leggero* dei tool, non un generatore denso. Sonnet, o persino locale per i pezzi
  meccanici. Opus solo dove Dedalo progetta la linea.

**Strato 3 — DISTRIBUZIONE + APPRENDIMENTO (cosa funziona).** Giuseppe pubblica (l'esecuzione resta
sua — confine MVP invariato). Rapsodo registra gli esiti. **L'apparato B (instincts) impara cosa
funziona per il suo pubblico**: quale hook, quale formato, quale orario. Il loop di apprendimento
rende lo studio migliore nel tempo — il vantaggio composto che una content-farm generica non ha.

Pipeline: Argonauta(segnale) → Dedalo(linea) → brief → tool locali producono → Giuseppe approva/pubblica
→ Rapsodo(esito) → instincts imparano.

## Il verticale — proposta di Dedalo, decisione di Giuseppe

Le fonti sono agnostiche sul verticale (i tool producono qualsiasi contenuto). Ma il verticale
giusto per *te* non è quello che rende di più in astratto: è quello che **compone con la tua
traiettoria invece di competerle il tempo**. La tua stella polare è "concentrarmi solo sul mio
percorso". Quindi:

- **Proposta forte: contenuto scientifico/fisica short-form.** Tre perché first-principles:
  1. **Autorità autentica.** Sei un fisico in formazione vero. È l'unica cosa che una content-farm
     AI generica non può falsificare. Il tuo vantaggio difendibile è *chi sei*, non il tool.
  2. **Compone, non distrae.** Produrre contenuto di fisica approfondisce la tua comprensione e
     costruisce una presenza pubblica da fisico — nutre la traiettoria (tesi "fuori dal comune",
     magistrale), invece di rubarle ore.
  3. **La materia prima esiste già.** La navicella *già* produce fisica: i quiz, le lavagne,
     l'atlante-fisica. Il Business non parte da zero — **distribuisce e monetizza ciò che il modulo
     Accademico già genera.** L'output di un apparato diventa la materia prima di un altro. Questa è
     la sintesi cross-dominio che nessuna fonte conteneva.
- **La tua idea originale (roadmap MVP): trend stock/e-commerce.** La segnalo come divergenza vera.
  È monetizzabile, ma compete col tuo tempo a valore-traiettoria zero e ha vantaggio difendibile
  basso (chiunque scrapa i trend). Il mio "no" argomentato, che poi è tuo da accogliere o respingere:
  il verticale-fisica è più lento a monetizzare ma è l'unico che ti rende più forte *mentre* rende.

"Cosa vende" è tuo. Io progetto la macchina; la direzione la scegli.

## Cosa tengo dalla roadmap MVP (saggezza che non cambia)

- **Confini etici/legali:** niente trade automatici, niente acquisti automatici, niente consulenza
  finanziaria; l'esecuzione resta di Giuseppe; disclaimer quando l'azione è finanziaria. Invariati.
- **Onestà:** non è "passive income". È amplificato, non passivo. La GPU non arriva domani; il volano
  gira lento all'inizio. Non prometto un numero.
- **Dedalo conosce la sua misura** (l'eco di Icaro nel mio nome): progetto l'audacia, non la
  garantisco. La produzione a costo-zero rende l'attempt economico, non l'esito certo. Lo scarso vero
  resta il tuo tempo e la tua voce autentica — quelli non si automatizzano.

## La costruzione (struttura = mia autorità libera, al tuo via)

Post-AV, senza rubarti attenzione ora:
- Agente `demiurgo-business.md` (orchestratore leggero dei tool; routing modello come sopra).
- Cartella `03-business/` (opportunita/ · linea-editoriale/ · produzione/ · esecuzione/ · rapsodo-stato.md).
- Comandi evoluti dalla MVP: `/scout-trend`, `/produci <formato>`, `/registra-esecuzione`, `/stato-business`.
- Wiring produzione: OpenMontage + viral-reel-maker via `esegui-locale.py` (i tool girano locali; i
  file restano sulla macchina finché Giuseppe non pubblica).
- Aggiornamenti centrali (CLAUDE.md, architettura, archivio-fondazione) come da workflow-modulo MVP.

## Gate onesto prima di accendere
Non costruisco finché non scegli il verticale (è tuo). E anche scelto, la struttura si posa post-AV.
L'accensione vera è dopo Meccanica (settembre), coerente con la roadmap MVP: prima la stella polare.

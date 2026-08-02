---
type: visione
---

# Roadmap LLM locali — verso una navicella senza dipendenze esterne

> Documento strategico per la transizione dei modelli AI da cloud (Claude API) a local (modelli open-source che girano sul tuo PC).
> Obiettivo finale: navicella **completamente locale**, senza dipendenze da Anthropic o altri provider.
> Scritto durante il MVP cloud-based, da rileggere quando si valuteranno opzioni hardware o nuovi modelli.

---

## Il quadro onesto, giugno 2026

La cosa più importante da capire subito: **i frontier model (Claude Opus 4.8, GPT-5, Gemini Ultra) non sono replicabili localmente nel 2026.** Richiedono cluster di GPU da decine di migliaia di euro e sono in continuo aggiornamento da team di centinaia di persone.

I modelli open-source migliori del momento — Llama 4, Qwen 3, DeepSeek V3/R1, Mistral Large — sono diventati molto buoni, ma c'è una **regola pratica solida**: il miglior modello locale che gira su hardware consumer è all'incirca **un anno indietro rispetto al miglior modello cloud del momento**. Quindi quello che gira sul tuo PC oggi sarebbe stato lo stato dell'arte di metà 2025, non di adesso.

Per la navicella questo significa: un Demiurgo Accademico locale che scrive un capitolo di Meccanica Quantistica produrrà qualità simile a Claude Sonnet 4.6 (forse meglio in certi domini, peggio in altri), ma **non** simile a Claude Opus 4.8.

Questo non significa che locale sia inutile. Significa che la transizione va pensata per gradi, con i compiti giusti delegati al locale quando il locale basta.

---

## Cosa serve davvero per girare local — l'hardware

La metrica che conta è la **VRAM della GPU** (memoria video). Più grande è il modello, più VRAM serve. Regola spannometrica:

| Modello | VRAM in 4-bit | VRAM in 8-bit | Hardware tipico (2026) |
|---|---|---|---|
| 7-13B params | 6-10 GB | 10-16 GB | RTX 4060+, anche laptop |
| 30B params | 18-22 GB | 32-38 GB | RTX 4090/5090 |
| 70B params | 40-45 GB | 80+ GB | dual GPU o server class |
| 200B+ params | 100+ GB | impraticabile su consumer | non locale per ora |

Il tuo PC attuale (Acer notebook) probabilmente **non ha una GPU dedicata sufficiente per modelli oltre i 13B**. Se vuoi davvero puntare al locale, l'investimento minimo serio è:

- **Setup desktop** con RTX 5090 (32GB VRAM): ~3000-3500 EUR totale. Permette modelli fino a 30B comodi, 70B in quantizzazione spinta.
- **Setup workstation** con dual RTX 5090 o RTX 6000 Ada (48GB): ~6000+ EUR. Permette 70B comodi.
- **Server casalingo** con 4x GPU (a 96+ GB totali): 10.000+ EUR. Permette davvero tutto fino ai modelli mid-frontier.

Non sto suggerendo di comprare nulla adesso. Sto dicendo che la decisione locale è una **decisione hardware grossa**, e va valutata se il guadagno percepito (autonomia, privacy, no API cost) supera il costo.

---

## I tre modelli locali che vale la pena tenere d'occhio nel 2026

I nomi e versioni evolvono velocemente, ma le famiglie di riferimento per chi vuole costruire un sistema agentico locale sono:

**Llama 4** (Meta) — la famiglia più matura nel general purpose. Disponibile in taglie da 17B a 400B+. Le versioni 30-70B sono il sweet spot per uso locale serio. Ben supportata da ogni tool.

**Qwen 3** (Alibaba) — molto forte su ragionamento e codice, spesso supera Llama a parità di taglia. Le versioni 30B+ sono notevoli su task tecnici (utile per il Demiurgo Accademico).

**DeepSeek R1 / V3** — modelli di reasoning, eccellenti su matematica e fisica. La fascia 30-70B è particolarmente forte sui contenuti che ti interessano (deduzioni, derivazioni). Vale la pena considerarli per il Demiurgo Accademico.

**Cosa cercare quando valuti un nuovo modello:**
- Quantizzazione disponibile (Q4_K_M, Q8 sono i formati comuni in `gguf`)
- Benchmark MMLU, GPQA, MATH (per task tecnici), HumanEval (per codice)
- Supporto tool use / function calling (necessario per agenti che chiamano altri agenti)
- Context window (almeno 32K, idealmente 128K+)

---

## I tool per far girare modelli locali

In ordine di facilità per un principiante:

**Ollama** ([ollama.com](https://ollama.com)) — il più facile. Un comando per scaricare un modello, un altro per usarlo. Linea di comando. Ottima base.

```
ollama pull llama4:70b
ollama run llama4:70b
```

**LM Studio** ([lmstudio.ai](https://lmstudio.ai)) — interfaccia grafica. Browser di modelli, chat integrata, configurazione facile. Buono per esplorare prima di passare a setup programmatico.

**llama.cpp** — il backend C++ che sta sotto a quasi tutto. Tecnico ma estremamente performante. Direttamente utile solo se vuoi spingerti oltre i tool sopra.

**vLLM** — per inferenza production-grade. Esagerato per un setup personale, ma utile da sapere che esiste se la navicella crescerà.

---

## OpenRouter — il ponte fra cloud e locale

[OpenRouter](https://openrouter.ai) è il pezzo che probabilmente più ti interessa. È un **proxy unificato** che ti permette di:

- Chiamare Claude, GPT, Gemini, Llama, Qwen, ecc. tutti tramite una sola API
- Sostituire un modello con un altro cambiando una stringa
- Pagare a consumo per i modelli cloud
- Configurare modelli locali (via Ollama) come endpoint

Per la navicella questo significa: nel `frontmatter` di un sub-agente Claude Code puoi mettere

```yaml
model: anthropic/claude-opus-4-8
```

oggi, e domani sostituirlo con

```yaml
model: meta/llama-4-70b
```

o con un modello locale, senza riscrivere nient'altro. È l'astrazione che ti permette di sperimentare senza commit hardware o di codice.

---

## Migrazione a fasi — la mia raccomandazione

**Fase 0 — Stato attuale (giugno 2026).** Cloud totale. Capitano + Demiurgo Accademico su Opus 4.8, Rapsodo + Argonauta su Sonnet 4.6. Tutto via Claude Code + Agent SDK. Costo: incluso nel piano Max.

**Fase 1 — Sperimentazione locale (3-6 mesi).** Installi Ollama sul tuo PC corrente. Scarichi un modello 7-13B (Llama 4 Scout o equivalente). Lo usi solo per task leggerissime: classificazione di input (il filtro P1/P2 del Rapsodo), generazione di template, conversazioni di prova. Vedi quanto va male / bene. Costo: zero (modelli gratis), solo tempo.

**Fase 2 — Setup desktop dedicato (6-12 mesi).** Quando hai dati reali sulla performance locale, decidi se vale la pena un setup hardware serio. Se sì: build PC desktop con RTX 5090. Modelli fino a 30B comodi, 70B con sacrificio di velocità. Puoi spostare il Rapsodo e/o l'Argonauta in locale, lasciando Capitano + Demiurgo Accademico in cloud.

**Fase 3 — Ibrido stabile (12-24 mesi).** Architettura ibrida: agenti pesanti (Capitano per memoria profonda, Demiurgo Accademico per scrittura densa) restano cloud. Tutto il resto è locale. Il sistema continua a funzionare se la connessione cade — degrada solo nelle funzionalità avanzate.

**Fase 4 — Locale puro (24+ mesi).** Quando i modelli locali raggiungono Opus 4.8-equivalent (probabile fra 18-24 mesi), si valuta lo spostamento completo. La navicella diventa indipendente da Anthropic.

---

## Cosa puoi fare adesso senza investire

Tre azioni semplici nei prossimi giorni:

1. **Installa Ollama** e scarica `llama4:7b` o `qwen3:14b`. Costo: zero, ~30 minuti di setup. Provi a fargli classificare dei tuoi input (gli mandi 10 messaggi tipo che potrebbero arrivare alla navicella e gli chiedi di taggarli P1/P2). Vedi se ha senso.

2. **Crea un account OpenRouter** e prova ad alternare modelli su una stessa richiesta (es. fagli scrivere una breve sintesi di un argomento prima con Claude, poi con Llama, poi con Qwen). Confronta. Ti fa farti un'idea concreta del gap.

3. **Monitora le release** dei modelli open source. Hugging Face leaderboard, blog di Meta/Alibaba/DeepSeek, /r/LocalLLaMA su Reddit. Ogni 3 mesi succede qualcosa di significativo.

Questi tre passi ti danno **dati reali** per decidere quando e come fare investimenti hardware seri. Senza dati, qualsiasi roadmap locale è speculazione.

---

## Il punto vero

La navicella locale è un **obiettivo a lungo termine ragionevole**, non un'urgenza tecnica. Il piano Max che hai oggi copre tutto quello che ti serve per i prossimi 12-24 mesi senza problemi di costo. Il vantaggio competitivo del cloud (Opus 4.8 e successori) resterà significativo per almeno questo orizzonte.

Quello che ha senso fare adesso: **familiarizzare con l'ecosistema locale senza dipenderci.** Sperimentare con Ollama, capire i tool, leggere benchmark. Quando arriverà il momento giusto (un modello locale che davvero ti basta + hardware che te lo permette + abbastanza tempo per il setup), avrai già la base mentale per fare la transizione in modo informato invece che reattivo.

L'autonomia totale è un valore. Ma è un valore che si costruisce nel tempo, non un interruttore da girare.

---

## CORREZIONE — Mnemosyne, 2026-07-31

Due affermazioni di questo documento sono **false** e vanno lette come superate. Il testo
resta integro (niente oblio): questa nota lo annulla dove serve.

**1. La sezione «OpenRouter — il ponte fra cloud e locale» è tecnicamente sbagliata.**
Dice che nel frontmatter di un sub-agente Claude Code si può scrivere
`model: meta/llama-4-70b` e ottenere il routing via OpenRouter. Non è così. Verificato
sulla documentazione ufficiale il 31/7/2026 (`code.claude.com/docs/en/model-config` e
`/sub-agents`): il campo `model` accetta un alias (`sonnet`, `opus`, `haiku`, …) o un nome
di modello Anthropic, oppure un identificatore di Bedrock / Microsoft Foundry / Google
Cloud Agent Platform — tutti backend che servono **modelli Anthropic**. Non esiste routing
per-sub-agente verso un modello non-Anthropic. La nota ufficiale è esplicita:
«`ANTHROPIC_BASE_URL` changes where requests are sent, **not which model answers them**».
Un gateway si può interporre, ma è **di sessione**, non di agente, e vale per tutti.

Questa frase è l'origine dell'aspettativa «delego i passivi ai modelli gratuiti e non
esaurisco il limite». Non è ottenibile in quella forma. Misure e fonti in
`00-capitano/ricerche-argonauta/00-misura-modelli-locali.md`.

**2. «Il piano Max che hai oggi» — non è il piano in uso.** Il documento è di giugno e
assume un piano che la navicella non ha. Il vincolo reale è il limite di sessione di un
abbonamento Pro, che il 31/7 ha ucciso tre Argonauti in volo.

**Cosa di questo documento resta valido:** la gerarchia hardware (VRAM per taglia di
modello), la regola «il locale è circa un anno indietro», la logica delle fasi. Il dato
mancante, ora misurato: questa macchina non ha GPU discreta (Intel Core 5 120U, grafica
integrata), e `qwen2.5:7b` gira a **5,52 token/s** in generazione e **14,13 token/s** in
lettura. Siamo sotto la Fase 1, non dentro.

**Dove il discorso continua davvero:** `00-capitano/dedalo/omniroute-visione.md` (25/7),
che ha già raggiunto la conclusione giusta per altra via — Claude solo nel CLI ufficiale,
OmniRoute per i soli provider gratuiti **non-Claude**, che sono cloud e quindi non hanno
il pavimento CPU misurato qui.

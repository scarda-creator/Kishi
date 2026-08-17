---
tipo: ricerca-operativa
autore: Argonauta
data: 2026-08-16
oggetto: Lista ordinata di provider da collegare a OmniRoute — tre livelli di potenza
basato-su:
  - omniroute-catalogo-provider.md (Dedalo, 16-08-2026)
  - omniroute-modelli-2026-08.md (Argonauta, 16-08-2026)
  - omniroute-gate-tos-2026-08.md (Ierofante, 16-08-2026)
  - CARTA-FONDATIVA §9 (16-08-2026)
---

# OmniRoute — cosa collegare (lista operativa)

**Stato attuale gateway (16-08-2026):** `opencode` attivo (Kimi / GLM / Qwen) +
`groq` attivo (16 modelli, inclusi llama-3.3-70b-versatile e llama-3.1-8b-instant).
Buco: livello alto vuoto — `claude-opus-5` restituisce 401, nessuna connessione
Claude attiva.

L'ordine sotto è quello in cui vale la pena aprire la dashboard.

---

## PRIORITÀ ZERO — Riparare la cima prima di tutto il resto

**Provider da cercare in dashboard:** `claude` (voce "Claude Code")

**Tipo:** OAuth — login con l'account Anthropic di Giuseppe.

**Abbonamento necessario:** Pro ($20/mese) o Max ($100-200/mese).
Giuseppe ha già Pro. Costo aggiuntivo: zero.

**Come funziona:** il provider `claude` in OmniRoute si autentica con le credenziali
dell'account Anthropic esistente, non con una chiave API separata. Una volta connesso,
OmniRoute instrada le richieste verso Claude Sonnet/Opus attraverso il gateway invece
di colpire direttamente il limite di sessione.

**Attenzione al nome in dashboard:** nel catalogo esistono due entry con id `claude`:
"Claude (Pollinations)" e "Claude Code". Scegliere "Claude Code". Pollinations è un
proxy gratuito non ufficiale — non è l'abbonamento. Cercarlo per etichetta, non solo
per id.

**Questo risolve il 401 su claude-opus-5 e rimette la cima al suo posto.**

---

## LIVELLO ALTO — Opus equivalente

Fascia per generazione densa, ragionamento complesso, decisioni architetturali.
"Opus va dove nasce l'idea" vale qui. Il fallback scatta quando il livello alto
raggiunge il suo tetto — OmniRoute passa al livello medio senza interrompere.

### 1. `claude` — Claude Code (OAuth)
- **Abbonamento:** Pro ($20/mese) già attivo
- **Costo extra:** zero
- **Livello della fila:** ALTO — modello primario della cima
- **Modelli esposti:** Claude Sonnet 4.6 come base; Opus 4.8 dipende dal piano
- **Verdetto ToS:** il gateway usa le credenziali dell'abbonamento — stesso regime
  dell'uso interattivo, nessuna clausola separata da verificare
- **Gesto nella dashboard:** cerca "Claude Code", clicca OAuth, autentica con
  l'account Anthropic

### 2. `codex` — OpenAI Codex (OAuth)
- **Abbonamento:** ChatGPT Plus ($20/mese) oppure accesso Codex separato (prezzo
  da verificare su platform.openai.com — non confermato su fonte primaria al 16-08)
- **Giuseppe lo ha:** da verificare — se ha ChatGPT Plus, probabilmente sì
- **Costo extra:** $20/mese se non ce l'ha
- **Livello della fila:** ALTO — GPT-5 Codex e GPT-OSS 120B sono competitivi con Opus
- **Nota incertezza:** non ho verificato il flusso OAuth specifico di Codex su fonte
  primaria OpenAI al 16-08-2026. Potrebbe richiedere conferma separata nel pannello
  OpenAI. Dichiarare a Dedalo per verifica prima dell'attivazione.
- **Verdetto ToS:** non verificato da Ierofante — priorità seconda rispetto a `claude`

### 3. `grok-cli` — Grok Build (OAuth)
- **Abbonamento:** X Premium+ (~$22/mese) o accesso sviluppatori xAI separato
- **Giuseppe lo ha:** da verificare
- **Costo extra:** ~$22/mese se non ce l'ha
- **Livello della fila:** ALTO — Grok 4 è competitivo con Opus per reasoning
- **Note:** `xai-oauth` è un secondo provider OAuth di xAI nello stesso catalogo.
  Probabilmente lo stesso abbonamento con flusso alternativo — connettere uno solo
  dei due per evitare duplicazione.
- **Verdetto ToS:** non verificato da Ierofante

### 4. `devin-cli` — Devin CLI (OAuth)
- **Abbonamento:** Devin (Cognition) parte da ~$500/mese
- **Fuori perimetro economico:** non collegare. Lo includo per completezza e per
  evitare che sembri un'opportunità mancata.

### 5. `ghe-copilot` — GitHub Enterprise Copilot (OAuth)
- **Abbonamento:** GitHub Enterprise — prezzi aziendali, non disponibile per studenti
- **Fuori perimetro:** non collegare. Giuseppe potrebbe avere accesso a GitHub
  Copilot via GitHub Education (il programma studenti Sapienza vale la pena
  verificare su education.github.com) — ma quello sarebbe `github` o `copilot`,
  non `ghe-copilot`.

---

## LIVELLO MEDIO — Sonnet equivalente

Questo è il buco principale dopo la cima. Groq `llama-3.3-70b-versatile` esiste
già (1.000 RPD) ma si esaurisce sotto carico. Serve ridondanza e almeno un provider
con modelli capaci e quota indipendente da Groq.

### OAuth con piano gratuito reale

#### 6. `cursor` — Cursor IDE (OAuth)
- **Abbonamento:** piano Hobby = gratuito; Pro = $20/mese
- **Giuseppe lo ha:** il gratuito è accessibile subito, senza carta
- **Costo extra:** zero per Hobby
- **Livello della fila:** MEDIO — Cursor instrada verso Claude Sonnet 4.6 e
  GPT-4o (il routing è trasparente, dipende dal piano)
- **Limite noto:** il piano gratuito ha quote mensili basse. I numeri esatti non sono
  stati verificati su fonte primaria Cursor al 16-08-2026 — verificare
  cursor.com/pricing prima di fare affidamento come livello stabile
- **Verdetto ToS:** non verificato da Ierofante per uso automatizzato. Prima di
  usare in pipeline schedulate, Ierofante deve leggere cursor.com/terms
- **Gesto:** cerca "Cursor IDE" nella dashboard, OAuth con account Cursor

#### 7. `windsurf` — Windsurf IDE (OAuth)
- **Abbonamento:** piano gratuito dichiarato; Pro = ~$10-15/mese (prezzo da
  verificare — Windsurf è stata acquisita da OpenAI nel 2025, i termini potrebbero
  essere cambiati)
- **Giuseppe lo ha:** piano gratuito accessibile subito
- **Costo extra:** zero per il free tier
- **Livello della fila:** MEDIO — Windsurf espone frontier models (Claude, GPT,
  Gemini) ma il routing dipende dal piano e non è deterministico
- **Limite noto:** quote mensili basse sul piano gratuito (non verificato su fonte
  primaria al 16-08-2026)
- **Nota strutturale:** l'acquisizione OpenAI potrebbe avere mutato i termini e
  i modelli esposti. Verificare windsurf.com/pricing
- **Verdetto ToS:** non verificato da Ierofante

#### 8. `kimi-coding` — Kimi Code CLI (OAuth)
- **Abbonamento:** Kimi (Moonshot) ha piano gratuito; il CLI specifico potrebbe
  richiedere registrazione separata su kimi.com
- **Costo extra:** probabilmente zero, ma non verificato su fonte primaria al 16-08
- **Livello della fila:** MEDIO — Kimi K2 e K3 hanno contesto 1M, competitivi con
  Sonnet per coding e task strutturati
- **Nota ridondanza:** `opencode` già connette Kimi tramite chiave. `kimi-coding` è
  utile solo se aumenta le quote disponibili rispetto al canale opencode. Da
  valutare dopo aver misurato quanto opencode esaurisce Kimi nel lavoro reale.
- **Verdetto ToS:** non verificato da Ierofante

#### 9. `zed-hosted` — Zed Hosted (OAuth)
- **Abbonamento:** Zed editor ha piano gratuito con AI limitata
- **Costo extra:** zero per il tier base
- **Livello della fila:** MEDIO — Zed usa Claude come backend principale (partnership
  Anthropic dichiarata)
- **Nota incertezza:** non è chiaro se `zed-hosted` in OmniRoute esponga solo
  capacità di editing o anche generazione testuale generica. Flusso OAuth non
  verificato su fonte primaria al 16-08-2026.

#### 10. `trae` — Trae AI (OAuth)
- **Abbonamento:** ByteDance Trae — piano gratuito dichiarato (prodotto lanciato
  nel 2025, status non consolidato)
- **Costo extra:** zero se il free tier è ancora attivo
- **Livello della fila:** MEDIO — modelli non noti con precisione, da verificare
  su trae.ai prima di connettere
- **Nota:** prodotto cinese (ByteDance). Vale lo stesso avvertimento geopolitico
  dei provider cinesi nella sezione "Cosa non collegare" — per task anonimi può
  funzionare, non per nessun contenuto di Giuseppe

#### 11. `kiro` — Kiro AI (OAuth)
- **Abbonamento:** Amazon Kiro — piano gratuito in preview (prodotto 2025)
- **Costo extra:** zero in preview; da verificare su kiro.dev
- **Livello della fila:** MEDIO — backend incerto; Amazon Kiro usa modelli Anthropic
  e Amazon Bedrock
- **Nota:** prodotto Amazon, launched mid-2025. Status del free tier da verificare
  prima di connettere come livello stabile

### Gratuiti con chiave (oltre a Groq)

#### 12. `github-models` — GitHub Models (chiave API, account GitHub gratuito)
- **Come:** API key gratuita su github.com/marketplace/models — basta un account
  GitHub, nessuna carta
- **Costo:** zero
- **Livello della fila:** MEDIO — GPT-4o, Llama 4, Phi-4, Mistral disponibili;
  GPT-4o è Sonnet-equivalente per capacità
- **Limiti (dati da conoscenza al taglio agosto 2025, non verificati su fonte
  primaria al 16-08-2026):** free tier con rate limit moderati per modelli premium;
  quota più alta per modelli open-weight. Verificare docs.github.com/en/github-models
  per i limiti attuali prima di configurare
- **Tool-calling:** supportato per GPT-4o (dichiarato in docs GitHub Models)
- **Privacy:** soggetto a Microsoft/GitHub privacy policy — per task anonimi è
  accettabile; non inviare dati personali
- **Perché è il candidato migliore per il livello medio tra i gratuiti con chiave:**
  è un servizio contrattualizzato (Microsoft), stabile, non promozionale. GPT-4o è
  un modello capace, non solo veloce.
- **Verdetto ToS:** non verificato da Ierofante al 16-08-2026. Priorità alta per
  Ierofante prima di attivare in pipeline automatizzate.
- **Gesto:** crea API key su github.com/settings/tokens, aggiungi provider
  `github-models` in OmniRoute con quella chiave

#### 13. `openrouter` — OpenRouter `:free` (chiave API gratuita)
- **Come:** chiave API su openrouter.ai, nessuna carta
- **Costo:** zero (50 RPD senza crediti; 1.000 RPD con $10 una-tantum — ma $10 è
  un pagamento, fuori dal vincolo della navicella)
- **Livello della fila:** MEDIO/LEGGERO — 28+ modelli con suffisso `:free`, inclusi
  DeepSeek R1, Llama 4 Scout, Qwen3 Coder 480B. La lista cambia senza preavviso.
- **Limiti:** 20 RPM, 50 RPD — troppo basso per uso regolare. Utile solo come
  ultimo fallback nella coda, non come livello primario
- **Verdetto Ierofante:** AMBRA. Due condizioni da soddisfare prima di attivare:
  (1) toggle "Allow routing to providers that may train on your data" → OFF nelle
  impostazioni account OpenRouter; (2) risolvere la discrepanza ToS Section 4.1
  (il testo richiede crediti ma i :free models esistono senza). Non attivare prima
  che entrambe siano risolte.
- **Gesto quando pronto:** aggiungi provider `openrouter` in OmniRoute, configura
  come fallback di ultimo livello

---

## LIVELLO LEGGERO — Haiku equivalente

### Già attivi (non toccare)
- `groq` → `llama-3.1-8b-instant` (RPD 14.400 — il tetto più alto tra tutti i
  provider gratuiti analizzati)
- `opencode` → Kimi / GLM / Qwen

### Da aggiungere

#### 14. `pollinations` — Pollinations AI (zero chiave, zero costo)
- **Come:** nessuna autenticazione — zero configurazione
- **Costo:** zero
- **Livello della fila:** LEGGERO — utile solo per task di volume con contenuto
  completamente anonimo, dove la perdita della risposta è accettabile
- **Modelli esposti:** Gemini Flash, Claude via Pollinations, OpenAI via Pollinations.
  Attenzione: Pollinations aggrega proxy non ufficiali di provider terzi. La
  disponibilità e la qualità non sono garantite.
- **Privacy:** SCONOSCIUTA. Il testo del prompt transita attraverso Pollinations
  prima di arrivare al modello finale. Non inviare nulla che non sia completamente
  anonimo.
- **Tool-calling:** non verificato
- **Verdetto ToS:** non verificato da Ierofante. Non usare per task critici.

#### 15. `huggingchat` — HuggingChat (account HuggingFace gratuito)
- **Come:** account HuggingFace gratuito (accesso via OAuth)
- **Costo:** zero
- **Livello della fila:** LEGGERO — buono per classificazione e normalizzazione
  su testo anonimo
- **Modelli esposti:** Llama, Mistral, DeepSeek e altri modelli open-weight ospitati
  su HuggingFace Inference
- **Limiti:** quota non pubblicata chiaramente; si esaurisce rapidamente per uso
  intensivo
- **Tool-calling:** parziale, dipende dal modello
- **Privacy:** HuggingFace pro policy — per uso non-personale accettabile
- **Verdetto ToS:** non verificato da Ierofante per uso automatizzato

---

## COSA NON COLLEGARE

### Vietati da Ierofante (stop duro — già verificati)

| Provider ID | Motivo |
|---|---|
| `duckduckgo-web` | ToS vieta "automated querying" in testo esplicito. Sanzione = ban IP, colpisce anche l'uso umano di Giuseppe su duck.ai |
| `felo-web` | Esiste API ufficiale su openapi.felo.ai. Usare la web interface in automatico è aggiramento deliberato del canale contrattuale (§7-6, §7-8, §7-9 ToS Felo) |
| `veoaifree-web` | Wrapper non ufficiale di Google Veo + ToS vieta "automated bots or scripts". Doppio rischio: ban IP + instabilità upstream dipendente da Google |

Il rischio di questi tre non è perdere un nodo nel router. È il ban dell'IP di casa.

### Provider `-web` — pattern sistematico da evitare

Tutti i provider con etichetta "(web)", "(Web)", "(BizChat)", "(Subscription) web"
nel catalogo pilotano interfacce browser via automazione. Il verdetto è strutturalmente
identico ai tre sopra — bot che imitano click umani su servizi non progettati per uso
programmatico.

| Provider ID | Etichetta |
|---|---|
| `blackbox-web` | Blackbox Web (Subscription) |
| `chatgpt-web` | ChatGPT Web (Plus/Pro) |
| `copilot-m365-web` | Microsoft 365 Copilot (BizChat) |
| `copilot-pro` | Copilot Pro (web) |
| `copilot-web` | Microsoft Copilot Web |
| `deepseek-web` | DeepSeek Web |
| `gemini-web` | Gemini Web (Free) |
| `grok-web` | Grok Web (Subscription) |
| `hailuo-web` | Hailuo Web (MiniMax) |
| `kimi-web` | Kimi Web |
| `muse-spark-web` | Muse Spark Web (Meta AI) |
| `notion-web` | Notion AI Web (Unofficial/Experimental) |
| `perplexity-web` | Perplexity Web (Pro/Max) |
| `poe-web` | Poe Web (Subscription) |
| `qwen-web` | Qwen Web (Free) |

Regola operativa: se l'etichetta contiene "(web)", "(Web)", "(Unofficial)" o
"(Experimental)" — non connettere senza un verdetto Ierofante separato.

### Aggregatori e rivenditori opachi

Questi provider aggiungono un layer tra OmniRoute e il modello reale senza un
contratto verificabile con i provider sottostanti.

| Provider ID | Etichetta | Problema |
|---|---|---|
| `adapta-claude` | Claude Sonnet 4.6 (via Adapta) | Chi è Adapta? Che contratto ha con Anthropic? Non verificabile. |
| `adapta-deepseek` | DeepSeek R2 (via Adapta) | Stessa categoria |
| `adapta-gemini` | Gemini 2.5 Pro (via Adapta) | Stessa categoria |
| `adapta-gpt` | GPT-5 (via Adapta) | Stessa categoria |
| `adapta-web` | Adapta One Web | Anche il pattern -web |
| `adapta-one` | Adapta ONE (Auto) | Auto-routing verso adapter non verificati |
| `aimlapi` | AI/ML API | Aggregatore commerciale, trasparenza contrattuale non verificata |
| `inner-ai` | Inner.ai (Subscription) | Aggregatore, aggiunge layer opaco e richiede abbonamento separato |
| `g4f-gemini` | g4f.space — Gemini | g4f (GPT4Free) ha storia documentata di aggiramento ToS dei provider. Non usare. |
| `g4f-groq` | g4f.space — Groq | Stessa categoria |
| `g4f-nvidia` | g4f.space — NVIDIA | Stessa categoria |
| `g4f-ollama` | g4f.space — Ollama | Stessa categoria |
| `g4f-pollinations` | g4f.space — Pollinations | Stessa categoria |
| `agentrouter` | AgentRouter | Routing automatico non trasparente — non verificato |
| `orcarouter` | OrcaRouter | Stessa categoria |
| `nara` | NaraRouter | Stessa categoria |

### Free tier solo promozionale (scadono e non sono gratuiti permanenti)

| Provider ID | Problema |
|---|---|
| `together` | $100 crediti iniziali, non free tier permanente. Ierofante: fuori perimetro economico |
| `deepinfra` | Trial iniziale, non tier gratuito permanente confermato al 16-08 |
| `hyperbolic` | Free credits at sign-up, non tier permanente confermato |
| `fireworks` | Free trial; modelli a pagamento |
| `novita` | Free credits iniziali, struttura a pagamento |
| `lambda-ai` | Free credits iniziali, non tier permanente |

### Provider con giurisdizione problematica per i dati di Giuseppe

Non è un divieto assoluto, ma vale la dichiarazione esplicita: i provider cinesi
sono soggetti a leggi sulla ritenzione dei dati (Cybersecurity Law, Data Security
Law) che possono essere incompatibili con la riservatezza della navicella anche per
contenuto anonimo. Non usare per nessun contenuto senza verifica esplicita di policy
e giurisdizione.

Tra questi: `alibaba`, `alibaba-cn`, `baidu`, `baichuan`, `doubao`, `hunyuan`,
`minimax-cn`, `qwen-cloud` (il cloud cinese, diverso da Groq che serve qwen
dall'infrastruttura US), `glm-cn`, `codebuddy-cn`, `ant-ling`.

`opencode` già connette Kimi, GLM, Qwen — queste connessioni esistono e sono
accettate. Il punto qui è non aggiungere ulteriori provider cinesi senza riflessione.

### Provider enterprise non pertinenti per Giuseppe

| Provider ID | Etichetta | Perché escludere |
|---|---|---|
| `devin-cli` | Devin CLI | ~$500/mese — fuori perimetro |
| `ghe-copilot` | GitHub Enterprise Copilot | Enterprise plan — fuori perimetro |
| `gitlab-duo` | GitLab Duo | GitLab Premium/Ultimate — fuori perimetro |
| `copilot-m365` | Microsoft 365 Copilot | M365 Business — fuori perimetro |
| `amazon-q` | Amazon Q | AWS enterprise — fuori perimetro |

---

## Schema della fila (come va costruita)

Obiettivo: tre livelli, fallback automatico quando il livello superiore esaurisce.

```
ALTO (Opus)
  └─ claude (OAuth, Pro già pagato) — PRIORITÀ ZERO, connettere subito
  └─ codex (OAuth, Plus a $20 se disponibile)
  └─ grok-cli (OAuth, X Premium+ se disponibile)

MEDIO (Sonnet)
  ├─ github-models (chiave API GitHub, gratuita) — priorità alta
  ├─ groq → llama-3.3-70b-versatile (già connesso)
  └─ cursor o windsurf (OAuth, free tier, quote basse — come backup)

LEGGERO (Haiku)
  ├─ groq → llama-3.1-8b-instant (già connesso, RPD 14.400)
  ├─ opencode → Kimi/GLM/Qwen (già connesso)
  └─ openrouter :free (AMBRA — solo last-resort, toggle training OFF prima)
```

I due gesti con maggiore impatto, nell'ordine:
1. Connettere `claude` (OAuth Claude Code) — risolve il 401, rimette la cima
2. Connettere `github-models` (chiave API GitHub) — riempie il buco del livello
   medio con un provider contrattualizzato e capace

---

## Verifiche ancora mancanti

Da completare prima di usare in pipeline automatizzate:

- **Ierofante su `github-models`:** verdetto ToS per uso automatizzato non emesso
- **Ierofante su `codex`:** flusso OAuth e ToS per uso agentico
- **Ierofante su `cursor`:** ToS per uso automatizzato (non solo interattivo)
- **Ierofante su `windsurf`:** ToS dopo acquisizione OpenAI 2025
- **Limiti esatti `github-models`:** verificare docs.github.com/en/github-models
  (i numeri nella mia base di conoscenza sono al taglio agosto 2025, non al 16-08-2026)
- **Status `kiro`:** Amazon Kiro era in preview mid-2025, verificare se il free
  tier è ancora attivo su kiro.dev
- **Status `trae`:** ByteDance Trae, verificare piano gratuito su trae.ai
- **Status `windsurf`:** prezzi e modelli esposti dopo acquisizione OpenAI
- **Limiti `cursor` Hobby:** verificare cursor.com/pricing

---

*Fonti: omniroute-catalogo-provider.md (Dedalo, 16-08-2026), omniroute-modelli-2026-08.md
(Argonauta, 16-08-2026), omniroute-gate-tos-2026-08.md (Ierofante, 16-08-2026),
CARTA-FONDATIVA §9 (16-08-2026). Dati su abbonamenti e limiti di Cursor, Windsurf,
GitHub Models, xAI, Kiro, Trae: base di conoscenza al taglio agosto 2025 — da
verificare su fonte primaria prima di attivare ciascun provider.*

*Questo file non va letto: va eseguito in ordine. Il lavoro finisce quando la fila
ha tre livelli con almeno due provider per livello.*

---
type: visione
autore: Dedalo
data: 2026-07-25
stato: PROPOSTA — la decisione di incorporazione è di Giuseppe (tocca la rotta)
---

# OmniRoute — visione di incorporazione

> Passato da Giuseppe a Dedalo di notte («prendi omniroute e incorporalo … in autonomia»),
> mentre dormiva. L'incorporazione vera **tocca tre cementate** → non l'ho eseguita: ho fatto
> tutto il preparatorio (studio + progetto) e lascio la decisione a te. Metodo del patto:
> le mani libere, la rotta no.

## Cos'è (dato)
`diegosouzapw/OmniRoute` — AI gateway **local-first**, MIT, ~29k stars, TypeScript, aggiornato
in continuo (push poche ore fa). Un **proxy locale** (`localhost:20128`) che espone un endpoint
Anthropic- e OpenAI-compatibile e instrada le richieste verso 290+ provider (90+ gratuiti, 40+
permanenti). Gira 100% sulla tua macchina, zero telemetria, chiavi cifrate at-rest (AES-256).
Non ho clonato i 322 MB: per progettare serve l'architettura, non il disco pieno; il clone si fa
se e quando decidi di costruire.

## Il punto di integrazione (dato — è ciò che rende la cosa reale)
- Si aggancia a Claude Code via **`ANTHROPIC_BASE_URL=http://localhost:20128/v1`** + una chiave
  generata nel suo dashboard. Helper `omniroute setup-claude-code`.
- **Routing selettivo per-request**: header `X-Route-Model` (forza il modello), `X-OmniRoute-Budget`
  (tetto USD per richiesta), regole task-aware, allowlist di provider per step.
- **Combo**: catene di fallback che scivolano da sole a quota esaurita. Il loro esempio parte da
  `claude-opus (subscription — use fully)` e degrada verso backup economici/gratuiti; esiste un
  provider `claude-sonnet FREE unlimited`.
- **Auth verso Claude**: o API key Anthropic (a pagamento) o **OAuth web-login dell'abbonamento**.
  È il perno — e il rischio (sotto).

## I tre agganci alla traiettoria (lettura mia — proposta)
1. **Scioglie il vincolo vero: il session-limit.** Il collo di bottiglia della navicella non è il
   denaro, è il budget-sessione dell'abbonamento — è ciò che tronca i run lunghi ed è il motivo per
   cui oroboro fallisce. Deviare i lavori pesanti-non-sensibili su modelli gratuiti **conserva il
   budget Claude per dove nasce l'idea**. Questo è il guadagno che nessuna delle obiezioni vede.
2. **Serve lo zero-portafoglio invece di minacciarlo.** 90+ provider gratuiti: la navicella gira
   di più senza spendere oltre l'abbonamento (patto rispettato, anzi esteso).
3. **È l'apparato A senza il motivo per cui l'avevo spento.** Il 13-07 ho parcheggiato l'apparato A
   con un argomento hardware preciso: «il pavimento 7s è la CPU». OmniRoute è cloud-gratis: **niente
   pavimento CPU**. Riapre esattamente ciò che avevo chiuso, e per una ragione che oggi non vale più.

## La forma nativa che propongo (progetto — mia)
Non `ANTHROPIC_BASE_URL` su tutto: sarebbe l'accetta, degraderebbe anche gli attivi (l'idea densa).
Il bisturi del routing selettivo permette la forma giusta, che ricalca la filosofia già cementata:

| Chi | Modello oggi | Con OmniRoute |
|-----|--------------|----------------|
| Attivi: Mnemosyne, Dedalo, Accademico | Opus 4.8 (dove NASCE l'idea) | **Claude vero, intoccati** (`X-Route-Model` forza Opus) |
| Passivi leggeri: Argonauta, Rapsodo | Sonnet 4.6 | deviabili su gratis di qualità (test A/B) |
| Bulk/classificazione (ex-apparato A) | — | gratis, senza pavimento CPU |
| **Qualunque task L5-adjacent** | — | **mai fuori dalla macchina** (allowlist locale/Claude) |

È «Opus dove nasce l'idea» + «Claude pensa, il gratis esegue» + i due tier dell'apparato A
(privato / esterno-mai-L5), unificati da un solo router. La mappa esiste già in testa alla
navicella: OmniRoute la eseguirebbe.

## I rischi e le cementate che tocca (onesto — sono i cancelli)
1. **ToS dell'abbonamento — IL GATE.** Interporre un proxy di terzi tra la navicella e Claude
   usando l'OAuth dell'abbonamento potrebbe violare i termini d'uso di Anthropic. Non sono un
   legale: lo dichiaro come **rischio da sciogliere PRIMA di ogni prova**. Se il ToS lo vieta,
   l'incorporazione muore qui — o si usa OmniRoute solo per i provider *non-Claude* (i gratis),
   lasciando Claude in diretta.
2. **Gate-privacy L5.** Un passivo che tocca L5 non deve mai deviare fuori. Configurabile con le
   allowlist per-task, ma va blindato: è dominio di Mnemosyne, non lo decido io.
3. **Qualità del pensiero.** Un passivo su modello gratuito scadente abbassa la resa. Il Creativo
   è già «Sonnet provvisorio sotto scommessa»: deviarlo è un'altra scommessa, da misurare A/B, non
   da dare per buona.
4. **Apparato A parcheggiato = rotta.** Riaccenderlo è la decisione di fondo, e l'ha parcheggiato
   Giuseppe: «non riaccendere senza nuova direttiva». Questa visione È la richiesta di direttiva.
5. **Dipendenza operativa.** Un servizio in più da tenere vivo (`localhost:20128`), 322 MB, update
   frequenti. Peso di manutenzione da mettere sul piatto.

## Decisione che aspetta Giuseppe + raccomandazione di Dedalo
Raccomando (proposta, con forza, ma decidi tu): **una prova mirata**, non un adozione globale.
Ordine:
1. **Sciogli il ToS** (il gate 1). Finché non è chiaro, non si tocca il routing di Claude.
2. Se ok: OmniRoute come **metabolismo selettivo dei soli passivi/bulk**, L5 blindato, attivi su
   Claude vero. Misura A/B la qualità prima di fidarti (la lezione del 22: finito = ciò che ha
   provato a smentirsi).
3. Se il ToS blocca Claude-via-proxy: usa OmniRoute **solo per i provider gratuiti non-Claude**,
   come esecutori dei bulk — è comunque l'apparato A senza pavimento CPU, e non tocca l'abbonamento.

Questo è il pezzo che scioglie il session-limit, il vincolo vero. Ma è rotta, e la rotta è tua.

---

## AGGIORNAMENTO 25-07 (notte) — Gate ToS SCIOLTO, ed è duro. Correzione a me stesso.

Ho verificato il gate n.1. Esito (fonti giornalistiche convergenti, The Register cita un chiarimento
ufficiale Anthropic — **da confermare sui ToS ufficiali**, ma il rischio è troppo alto per ignorarlo):
- Dal 2026 Anthropic **vieta l'uso dei token OAuth dell'abbonamento (Free/Pro/Max) fuori dai due
  client ufficiali** (Claude Code CLI sulla propria macchina, Claude.ai). Ondate di ban da gen-2026.
- Le fonti includono **esplicitamente l'Agent SDK** tra gli usi non permessi dell'OAuth abbonamento.
- Permesso e sicuro: Claude Code CLI ufficiale sulla propria macchina; oppure API key a pagamento.

**Due conseguenze pesanti:**
1. **La mia proposta "fallback nella spina" NON è ToS-safe** come avevo scritto sopra: la spina usa
   l'Agent SDK sull'abbonamento — proprio ciò che è citato come vietato. Mi correggo.
2. **La PLANCIA stessa, così com'è (spina Agent SDK su abbonamento, verificata il 13-07), gira su una
   configurazione a rischio ban.** Le regole sono cambiate dopo la costruzione. Va rivista — è un
   problema che eccede OmniRoute e riguarda l'operatività della navicella. Segnalato a Giuseppe.

**Cosa resta realmente ToS-safe:** i modelli **NON-Claude** (i gratuiti) via OmniRoute non toccano
Anthropic → apparato A, passivi, bulk: via libera. Il "sogno" (navicella che cambia solo modello al
limite restando sull'abbonamento) non è ottenibile automatico+gratis+sicuro insieme: o ToS-safe
(Claude solo nel CLI ufficiale, al limite si continua su modello gratuito = cambio di superficie,
non invisibile), o invisibile-ovunque ma a rischio ban. Decisione di Giuseppe, in sospeso.

**In corso:** Argonauta scouta come altri sistemi agentici operano OmniRoute e gestiscono il nodo
ToS/fallback → `dedalo/ricerca-github/omniroute-integrazioni.md`. Al ritorno, Dedalo interpreta.

## AGGIORNAMENTO 25-07 (notte) — findings Argonauta INTERPRETATI (Dedalo)
Report grezzo: `dedalo/ricerca-github/omniroute-integrazioni.md`. Cosa cambia nelle decisioni:
- **Il fallback invisibile A CALDO è anti-pattern, non solo problema-ToS.** Pattern consolidato in
  tutti i sistemi: modello assegnato al TIPO di agente *prima* che la sessione parta, mai cambiato
  a metà (i frontier LLM degradano continuando thread altrui — discussione LiteLLM). → **Conferma
  la "modalità viaggio"**: modello per SUPERFICIE deciso all'avvio (PC=Opus/CLI ufficiale;
  viaggio=gratuito), non fallback a caldo. La ricerca converge sulla proposta di Dedalo.
- **Cablaggio per-agente = banale**: si cambia il nome-modello nel config del proxy, zero
  refactoring dell'agente. Apparato A/passivi accendibili «in un pomeriggio» appena OmniRoute gira.
- **Modelli concreti che reggono il tool-calling**: DeepSeek V3 via **SiliconFlow gratis-per-sempre**
  (senza i limiti OpenRouter: 50 req/giorno) → candidato per passivi + apparato A + modalità-viaggio.
- **Trappola da evitare**: il provider "Claude Web" di OmniRoute (cookie sessione) = stesso ban,
  zero disclaimer nella loro wiki. Claude SOLO nel CLI ufficiale, mai dentro OmniRoute.
- **ToS non più "da confermare"**: inchiodato su 4 fonti indipendenti (feb-2026, enforcement apr-2026).

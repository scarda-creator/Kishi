---
type: misura
allegato-a: 00-capitano/mandato-ricerca-jarvis-2026-07-31.md
autore: Mnemosyne (Capitano)
data: 2026-07-31
nota: materiale di partenza per D7 (economia). Numeri misurati, non stimati.
---

# Perché gli Argonauti non possono girare su modelli gratuiti

Domanda di Giuseppe, 31 luglio: com'è possibile aver esaurito il limite di sessione
invece di delegare gli agenti a modelli gratuiti. Tre strati di risposta, tutti verificati.

## 1. Il knob non esiste

Documentazione ufficiale Claude Code, letta il 31/7/2026:

- `code.claude.com/docs/en/model-config` — il `model` accetta un **alias**
  (`default`, `sonnet`, `opus`, `haiku`, `sonnet[1m]`, `opus[1m]`, `opusplan`) oppure un
  **nome di modello**: nome Anthropic API, ARN di inference profile Bedrock, deployment
  Microsoft Foundry, version name di Google Cloud Agent Platform. Sono tutti backend che
  **servono modelli Anthropic**. Nessuna voce per un endpoint OpenAI-compatible arbitrario.
- Stessa pagina, nota testuale: «`ANTHROPIC_BASE_URL` changes where requests are sent,
  **not which model answers them**.»
- `code.claude.com/docs/en/sub-agents` — il campo `model` nel frontmatter di un subagent
  segue le stesse regole; la leva di risparmio documentata è una sola: «Control costs by
  routing tasks to faster, cheaper models like **Haiku**.»

Esiste una via tecnica — un gateway (tipo LiteLLM) dietro `ANTHROPIC_BASE_URL`, dove
Claude Code passa la stringa del modello senza controllarla (documentato: la validazione
del nome «runs only on the Anthropic API») — ma è **di sessione, non di agente**. Vale per
tutta la navicella, Mnemosyne compresa, e richiede credenziali proprie del gateway al posto
dell'autenticazione ad abbonamento. Non è «delegare i passivi ai modelli gratuiti»: è
spegnere la navicella e riaccenderla altrove.

**Conclusione dello strato 1: non si può mandare un singolo sub-agente su Ollama. È tutto
o niente, e il tutto costa l'abbonamento che già paghiamo.**

## 2. L'hardware lo esclude comunque

Macchina misurata il 31/7:

| Voce | Valore |
|------|--------|
| CPU | Intel Core 5 120U |
| RAM | 31,7 GB |
| GPU | Intel Graphics integrata, 2,0 GB dichiarati — **nessuna GPU discreta** |
| Ollama | installato, con `qwen2.5:14b`, `qwen2.5:7b`, `deepseek-r1:7b` |

Benchmark reale eseguito (`ollama run qwen2.5:7b --verbose`, prompt breve):

| Metrica | Misura |
|---------|--------|
| prompt eval rate | **14,13 token/s** |
| eval rate (generazione) | **5,52 token/s** |
| load duration | 16,2 s |

Confronto con il consumo reale di un Argonauta, dai contatori di sessione:

| Argonauta | Token consumati | Durata reale |
|-----------|-----------------|--------------|
| D1 auto-evoluzione | 102.259 | 5,6 min |
| D2 segnale di esito | 108.796 | 6,7 min |
| D3 memoria autoscrivente | 106.740 | 4,7 min |

A 14,13 token/s di sola lettura, i circa 105.000 token di input di un Argonauta
richiederebbero **oltre due ore di solo prompt processing**, prima di generare una riga.
Dieci domande di ricerca sarebbero giorni di macchina accesa. Su Sonnet sono stati minuti.

## 3. La qualità lo esclude una terza volta

Al modello locale è stata posta una domanda al centro di D1 — cosa distingue una skill
library con verifica da una senza. `qwen2.5:7b` ha risposto parlando di una biblioteca di
contenuti validata da **esperti umani prima della pubblicazione**, con gestione degli
accessi e versionamento. Ha frainteso il termine nel suo senso agentico e non se n'è
accorto.

È il modo di sbagliare peggiore per questo mandato: non un rifiuto, una risposta
plausibile e falsa. Un file di ricerca scritto così sarebbe indistinguibile da uno buono
senza rileggere ogni fonte a mano — il costo del controllo supererebbe il risparmio.

## 4. Perché il limite è saltato, senza mistero

Sei Argonauti lanciati fra le 01:25 e le 01:50. Tre misurati a 318.000 token complessivi,
tre morti in volo dopo aver consumato una quota non registrata, più il contesto della
sessione principale. Non è stato un evento anomalo: è aritmetica. La regola cementata
(«fan-out a batch di 2-3») è stata rispettata come istantanea ma non come **frequenza** —
tre in volo alla volta, sì, ma sei in venticinque minuti.

Correzione derivata, applicata subito: il file di stato `00-stato-ricerca-jarvis.md`
tiene la ripresa, e il throttle va letto come tre in volo **e** una pausa fra i batch.

## 5. La leva che esiste davvero

Non i modelli gratuiti: **Haiku**, che è sull'abbonamento ed è la leva di risparmio
dichiarata dalla documentazione. Il lavoro dell'Argonauta — giudizio, verifica ostile,
gerarchia delle fonti — non ci sta. Ma le passate meccaniche sì: estrazione testo,
deduplica di candidati, controllo che un repo sia vivo, normalizzazione di elenchi.

È la stessa distinzione già cementata come «Claude pensa, locale esegue», applicata un
gradino più in alto: non locale contro Claude, ma **il modello giusto per il tipo di
lavoro**. Il locale resta utile per ciò che non è ragionamento — leggere PDF, contare,
convertire — dove i 14 token/s non sono un collo di bottiglia perché non c'è nulla da
capire.

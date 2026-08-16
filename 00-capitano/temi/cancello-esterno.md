---
type: cancello
custode: Dedalo (Architetto)
nato: 2026-08-16
oggetto: "Il cancello esterno — provider ammessi, tetti operativi, percorsi e parole vietate."
motore: "00-capitano/scripts/temi.py  (--puo-uscire, --posso-mandare, --registra, --cancello)"
---

# Il cancello esterno — dato dichiarativo

Questo file è il dato; `temi.py` è il suo interprete. Quando un limite cambia,
si modifica qui — non si tocca una riga di Python. Stessa divisione del catalogo
delle fonti: il file non contiene codice, il codice non contiene la lista.

**Come si usa.** Ogni chiamata verso l'esterno passa due domande:

1. «Questo posso mandarlo fuori?» — `temi.py --puo-uscire <file>` applica tre livelli
   in ordine (percorso, contenuto, dimensione); il primo che dice no chiude.
2. «Posso mandarla adesso?» — `temi.py --posso-mandare <provider>` conta le chiamate
   nell'ultima finestra di 60 secondi e risponde AMMESSO o ATTENDERE con i secondi.

La chiamata va registrata con `temi.py --registra <provider> <modello> <token> <esito>`
perché la finestra scorrevole misura da quel log, non dalla memoria del processo.
`temi.py --cancello` mostra il quadro corrente.

**Verdetti provider.** `VERDE` = ammesso; `AMBRA` = condizionato (condizione nel
motivo); `ROSSO` = vietato; `ROSSO-COND` = vietato fino a verifica (condizione nel
motivo). Un divieto senza motivo viene riaperto dal primo che ha fretta.

**Nota sui limiti Groq.** I valori nel blocco dati sono quelli del piano gratuito
misurati il 16-08-2026 per `llama-3.3-70b-versatile` (30 RPM · 1K RPD · 12K TPM ·
128K ctx). `llama-3.1-8b-instant` ha un tetto RPD più alto (14.4K) ma non ha un
RPM distinto: per semplicità il cancello applica il limite più restrittivo al provider
nel suo insieme. `gpt-oss-120b`, `whisper-large-v3` e `whisper-large-v3-turbo` sono
disponibili su Groq ma i loro limiti specifici non erano misurati il 16-08; usare
queste varianti richiede una riga separata quando i limiti sono noti.

**Percorsi vietati.** La regola è una whitelist rovesciata: si dichiara cosa non
può uscire, e basta. I file di livello L3/L4/L5 sono vietati anche se non cadono
nei prefissi elencati — il codice li riconosce dal marcatore nel nome file o nella
struttura del percorso.

---

Campi provider:       `provider | nome | stato | rpm | rpd | tpm | ctx_k | motivo`
Campi percorso:       `percorso-vietato | prefisso | motivo`
Campi parola-blocco:  `parola-blocco | valore | motivo`

```dati
provider | groq | VERDE | 30 | 1000 | 12000 | 128 | uso agentico riconosciuto nel contratto §4.6; non-training default contrattuale; modelli attivi: llama-3.3-70b-versatile / llama-3.1-8b-instant / gpt-oss-120b / whisper-large-v3 / whisper-large-v3-turbo
provider | duckduckgo-web | ROSSO | 0 | 0 | 0 | 0 | ToS vieta l'accesso automatizzato; il ban colpisce l'IP di casa e toglie anche l'uso umano
provider | felo-web | ROSSO | 0 | 0 | 0 | 0 | ToS vieta l'accesso automatizzato; rischio ban IP di casa
provider | veoaifree-web | ROSSO | 0 | 0 | 0 | 0 | ToS vieta l'accesso automatizzato; rischio ban IP di casa
provider | cerebras | ROSSO-COND | 5 | 0 | 0 | 8 | ToS leggibile vieta accesso automatizzato; API terms specifiche davano 404 il 16-08; riaprire solo quando il testo e' leggibile e non vieta l'uso agentico
provider | gemini | AMBRA | 0 | 0 | 0 | 1000 | ammesso solo con payload integralmente anonimo (verificato da --puo-uscire); Google si addestra sui contenuti del piano gratuito; limiti API non verificati il 16-08
percorso-vietato | 01-personale/ | dati personali
percorso-vietato | 02-accademico/ | materiale accademico personale
percorso-vietato | 00-capitano/memoria/ | memoria L3-L5 della navicella
parola-blocco | Scarda | cognome
parola-blocco | Giuseppe | nome
parola-blocco | giuse.scarda@gmail.com | indirizzo mail
```

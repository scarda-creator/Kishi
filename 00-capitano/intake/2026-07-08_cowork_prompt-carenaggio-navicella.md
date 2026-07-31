---
type: intake
---

# Prompt per Mnemosyne — carenaggio della navicella

> Origine: sessione Cowork con Fable, 2026-07-08. Analisi esterna della cartella
> AgentsAI. Da incollare a Mnemosyne in Claude Code. Dopo l'uso, questo file segue
> il normale flusso di intake.

---

Mnemosyne, questo è un ordine di carenaggio: manutenzione dello scafo, non riprogettazione. Un'analisi esterna (Fable, via Cowork, 2026-07-08) ha ispezionato l'intera cartella e ha trovato la navicella architettonicamente solida ma con quattro punti di manutenzione. Vincoli assoluti: nessuna cementata si rinegozia, nessun ruolo si rinomina, nessun agente si aggiunge o rimuove, niente oblio — ogni contenuto migra, mai cancellato. Procedi in due tempi: prima un rapporto con le proposte, poi esecuzione solo su mio ok esplicito, registrando tutto in `log-decisioni-memoria.md`.

**1. Messa in sicurezza della memoria (priorità massima).** La cartella non è sotto version control né backup: 236 MB di memoria dichiarata insostituibile vivono su un singolo disco. Proponi un piano: `git init` con `.gitignore` che escluda solo artefatti rigenerabili (`node_modules`, output di build — NON i PDF di banca-dati, che sono memoria), più un remote privato o una copia periodica esterna. La premessa "nessuna informazione viene mai cancellata" oggi non è garantita da nulla: questo la rende vera.

**2. Audit di coerenza anti-drift.** Confronta CLAUDE.md, README.md, `architettura-v2.md` e le definizioni in `.claude/agents/` e lista ogni discrepanza. Due già note: `capitano.md` dice "Dedalo non costruito nel MVP" e il README dà Dedalo "in roadmap" — entrambi falsi dal 2026-07-06; la tabella agenti del README non include architetto e demiurgo-creativo. Trova le altre. Un sistema di memoria che si contraddice sui propri fatti fondativi mina il verification-driven trust.

**3. Dieta del CLAUDE.md.** Il file sta diventando archivio invece che distillato: la voce sull'attivazione di Dedalo occupa venti righe che duplicano `architettura-v2.md` e il diario. Proponi una versione dove ogni cementata è enunciato di 1-3 righe più puntatore al file di dettaglio. Il contenuto rimosso migra (non si cancella) nei file di destino. Obiettivo: il CLAUDE.md torna a essere la vista compressa che ogni sessione può permettersi di caricare per intero.

**4. Congelamento dichiarato del meta-lavoro.** Le quattro roadmap e le due visioni di Dedalo restano vive, ma proponi per ciascuna una riga esplicita "CONGELATA FINO A: <evento>" (le date "da rileggere quando" già presenti diventano vincolo, non auspicio). Verifica inoltre che `cantiere-notturno.md` (aggiornato al 2026-07-02) rifletta la priorità operativa corrente — scritto di Analisi Vettoriale, 17 luglio — e non priorità superate. Fino all'esame, nessun task AUTONOMO di natura meta-strutturale: solo lavoro accademico e questo carenaggio.

Al termine del rapporto dammi una stima del costo in sessioni di ciascun punto, così decido io l'ordine. Il punto 1 non è negoziabile nel merito, solo nel come.

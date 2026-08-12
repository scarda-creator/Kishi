---
type: catalogo
custode: Dedalo (Architetto)
nato: 2026-08-12
oggetto: Temi — la libreria delle fonti della navicella. Dato dichiarativo, interrogabile.
motore: 00-capitano/scripts/temi.py  (--cerca, --aggiungi, --elenco, --stato, --coda)
---

# Temi — catalogo delle fonti

La casa che alla schiusura è sempre mancata. Finché non esisteva, ogni fonte che Giuseppe
dava finiva in un documento di ricerca, veniva letta una volta e poi si perdeva: non perché
qualcuno la buttasse, ma perché **non c'era un posto dove chiederle**. Un archivio che non si
interroga è un cassetto.

**Come si usa.** Giuseppe dà un indirizzo, io lo registro con `temi.py --aggiungi`: entra come
`da-potare` e non si perde più. Quando progetto qualcosa chiedo `temi.py --cerca <parola>` e
so cosa ho già, invece di ripartire da zero — è il risparmio vero, perché ri-derivare da capo
costa più di leggere.

**Strict Pruning, il metodo.** Quando una fonte entra, quasi tutto è spazzatura: test, binari,
codice volatile, impalcature. Si tiene solo il nucleo algoritmico, la libreria utile,
l'architettura matematica. Non si importa: si **adatta** — un architetto ridisegna la stanza
attorno a chi ci vive, non trasloca mobili altrui.

## Verdetti
- `usata` — tradotta in codice della navicella (adattata, non clonata).
- `influente` — ha plasmato una decisione, senza diventare codice.
- `differita` — destinata a un apparato non ancora aperto. In coda, **non** scartata.
- `marginale` — reference o fuori scope: si consulta, non si integra.
- `da-potare` — entrata da poco, non ancora valutata. È lo stato di ingresso.

## Apparati
`A` metabolismo/routing · `B` memoria · `C` business · `D` accademico e scientifico ·
`E` corpo, gioco, interfaccia · `-` nessuno.

---

## Fonti

Campi: `nome | url | verdetto | apparato | tag | cosa serve o perché no`.

```dati
BayramAnnakov/claude-reflect | https://github.com/BayramAnnakov/claude-reflect | usata | B | memoria,apprendimento,hook | e' diventata cattura-apprendimento.py + promemoria-coda.py; pattern in italiano, coda di staging
Digital-Process-Tools/claude-remember | https://github.com/Digital-Process-Tools/claude-remember | usata | B | memoria,compressione | e' diventata comprimi.py; modi compressione/sintesi con archivio (niente oblio)
NadirRouter/NadirClaw | https://github.com/NadirRouter/NadirClaw | usata | A | routing,openrouter,costi | design del router + ponte OpenRouter; mappa di routing dai dati, non regola fissa
alisorcorp/ask-local | https://github.com/alisorcorp/ask-local | usata | A | esecutori-locali,privacy | motore di esegui-locale.py; il file resta locale, torna solo la risposta
getagentseal/codeburn | https://github.com/getagentseal/codeburn | usata | A | token,diagnostica | ispirazione di token_diagnostica.js; riscritto nativo sui nostri JSONL
x1xhlol/system-prompts-and-models-of-ai-tools | https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools | usata | A | prompt,pattern | ha dato il profilo classificatore-task.md (pattern Kiro)
nateherkai/token-dashboard | https://github.com/nateherkai/token-dashboard | influente | A | token,analytics | ha confermato l'approccio JSONL->analytics; codeburn ha vinto come riferimento
li195111/claude-token-analyzer | https://github.com/li195111/claude-token-analyzer | influente | A | token,sprechi | tassonomia di 6 anomalie di spreco token: base per Teia
ypollak2/llm-router | https://github.com/ypollak2/llm-router | influente | A | routing,quota | concetto di quota protection: preservare la quota Claude dai task banali
thedotmack/claude-mem | https://github.com/thedotmack/claude-mem | influente | B | memoria,retrieval | progressive disclosure nel retrieval (~10x saving); segnato per evoluzione
affaan-m/ECC | https://github.com/affaan-m/ECC | influente | B | istinti,apprendimento | instincts: pattern impliciti con confidenza, instinct->skill
multi-agent-ralph-loop | (nome parziale nei findings) | influente | B | benchmark,memoria | benchmark MemPalace 4-layer, wake-up ~818 token: metro di paragone
rohitg00/awesome-claude-code-toolkit | https://github.com/rohitg00/awesome-claude-code-toolkit | influente | - | catalogo,agenti,hook | 135 agenti, 20 hook, MCP: mappa da consultare prima di progettare
awesome-llm-token-optimization | (nome parziale nei findings) | influente | A | token,teoria | cache+routing+batch+compressione: cornice teorica del risparmio
calesthio/OpenMontage | https://github.com/calesthio/OpenMontage | differita | C | video,agenti | studio di produzione video agentico (52 tool): braccio contenuti del business
DennisWei9898/viral-reel-maker | https://github.com/DennisWei9898/viral-reel-maker | differita | C | video,reel | long-video -> reel 9:16 brandizzati
PacktPublishing/Passive-Income-with-GenAI | (titolo abbreviato nei findings) | differita | C | monetizzazione | playbook di monetizzazione GenAI: materiale, non codice
d4551/baobuildbuddy | https://github.com/d4551/baobuildbuddy | differita | C | carriera,gamedev | assistente carriera industria videogiochi: ponte business/gioco
psi-oss/get-physics-done | https://github.com/psi-oss/get-physics-done | differita | D | fisica,agente | agente fisico dentro Claude Code: valutare collisione coi workflow accademici nostri
google-labs-code/stitch-skills | https://github.com/google-labs-code/stitch-skills | differita | - | skills,standard | Agent Skills open standard: futuro-proofing delle skill
Dicklesworthstone/model_guided_research | https://github.com/Dicklesworthstone/model_guided_research | differita | D | matematica,DL | 11 strutture matematiche esotiche + deep learning: studio avanzato post-base
Nebius-Academy/ai-in-math-course | https://github.com/Nebius-Academy/ai-in-math-course | differita | D | matematica,corso | corso AI-in-math livello magistrale
vinsis/math-and-ml-notes | https://github.com/vinsis/math-and-ml-notes | differita | D | matematica,ML,note | note ML in notebook: lettura leggera
ai4s-research/awesome-ai-for-science | https://github.com/ai4s-research/awesome-ai-for-science | differita | D | directory,scienza | hub di aggiornamento AI-for-science
hi-godot/godot-ai | https://github.com/hi-godot/godot-ai | differita | E | godot,MCP,gioco | MCP Godot, 120 operazioni: braccio del Demiurgo Creativo sul gioco
HubDev-AI/godot-ai-builder | https://github.com/HubDev-AI/godot-ai-builder | differita | E | godot,checkpoint | Director Protocol a checkpoint: pattern per build multi-sessione
Donchitos/Claude-Code-Game-Studios | https://github.com/Donchitos/Claude-Code-Game-Studios | differita | E | agenti,workflow | 49 agenti in gerarchia da studio: vocabolario di workflow
CoplayDev/unity-mcp | https://github.com/CoplayDev/unity-mcp | differita | E | unity,MCP | conferma il pattern MCP-bridge per game engine (target nostro = Godot)
isaac-mason/sketches | https://github.com/isaac-mason/sketches | differita | E | fisica,gioco,demo | sketch physics/game-ai: banco di riferimento per il design
bocaletto-luca/Videogames-Database | https://github.com/bocaletto-luca/Videogames-Database | differita | E | dati,giochi | dati strutturati sui giochi: fondamenta dati del gioco
giulio333/ClaudeLens | https://github.com/giulio333/ClaudeLens | differita | E | UI,desktop | esplora i dati Claude locali: candidato per l'interfaccia
textcortex/claude-code-sandbox | https://github.com/textcortex/claude-code-sandbox | differita | E | sandbox,docker | (archiviata) Claude Code in Docker: serve quando gli esecutori girano codice generato
TencentCloud/CubeSandbox | https://github.com/TencentCloud/CubeSandbox | differita | E | sandbox,agenti | sandbox leggera per agenti: stessa esigenza, quando arrivera'
Piebald-AI/claude-code-system-prompts | https://github.com/Piebald-AI/claude-code-system-prompts | marginale | - | reference,prompt | miniera di pattern dai prompt, non codice da integrare
asgeirtj/system_prompts_leaks | https://github.com/asgeirtj/system_prompts_leaks | marginale | - | reference,prompt | prompt estratti: materiale di studio
repowise-dev/claude-code-prompts | https://github.com/repowise-dev/claude-code-prompts | marginale | - | reference,prompt | template di prompt multi-agente
composio-community/awesome-claude-plugins | https://github.com/composio-community/awesome-claude-plugins | marginale | - | reference,plugin | lista di plugin: da consultare, non integrare
golutra/golutra | https://github.com/golutra/golutra | marginale | - | orchestrazione | abbiamo gia' la nostra orchestrazione a otto agenti
MikeO-AI/claude-context-local | https://github.com/MikeO-AI/claude-context-local | marginale | B | contesto,postgres | si sovrappone alla memoria che abbiamo gia'
caiovicentino/claude-call | https://github.com/caiovicentino/claude-call | marginale | - | voce,terminale | interfaccia vocale al terminale: fuori scope (abbiamo Handy + plancia)
vxcontrol/pentagi | https://github.com/vxcontrol/pentagi | marginale | - | sicurezza | pentesting autonomo: irrilevante per la navicella
mvanhorn/last30days-skill | https://github.com/mvanhorn/last30days-skill | marginale | - | ricerca,social | ricerca su Reddit/X/HN: possibile tool futuro dell'Argonauta
GoDiao/Free-Way | https://github.com/GoDiao/Free-Way | marginale | A | gateway,gratuiti | gateway 14+ provider gratuiti: scartato, usiamo la chiave diretta
slyfox1186/claude-code-openrouter | https://github.com/slyfox1186/claude-code-openrouter | marginale | A | openrouter,MCP | alternativa scartata: chiave diretta nello script
QuSpin/QuSpin | https://github.com/QuSpin/QuSpin | differita | D | spin,ETH,esatta-diagonalizzazione,tesi | catene di spin quantistiche, diagonalizzazione esatta: e' IL ferro del mestiere per ETH e sistemi disordinati
netket/netket | https://github.com/netket/netket | differita | D | quantum,many-body,ML,tesi | many-body quantistico con reti neurali: seconda gamba della traiettoria di tesi
dynamiqs/dynamiqs | https://github.com/dynamiqs/dynamiqs | differita | D | open-quantum,decoerenza,tesi | dinamica di sistemi quantistici aperti in JAX: la decoerenza e' il tema di tesi dichiarato
patrick-kidger/diffrax | https://github.com/patrick-kidger/diffrax | differita | D | EDO,solver,JAX | solver di equazioni differenziali in JAX: base del banco di simulazione
patrick-kidger/equinox | https://github.com/patrick-kidger/equinox | differita | D | JAX,librerie | reti neurali in JAX: compagno di diffrax
jax-md/jax-md | https://github.com/jax-md/jax-md | differita | D | dinamica-molecolare,JAX | dinamica molecolare differenziabile: sistemi disordinati
MilesCranmer/PySR | https://github.com/MilesCranmer/PySR | differita | D | regressione-simbolica | scoperta simbolica di leggi da dati: fisica computazionale
WassimTenachi/PhySO | https://github.com/WassimTenachi/PhySO | differita | D | regressione-simbolica,fisica | regressione simbolica con vincoli dimensionali fisici
thunil/Physics-Based-Deep-Learning | https://github.com/thunil/Physics-Based-Deep-Learning | differita | D | fisica,DL,libro | libro-risorsa su deep learning basato sulla fisica
AI4Phys/Awesome-AI-for-Physics | https://github.com/AI4Phys/Awesome-AI-for-Physics | differita | D | directory,fisica | hub di aggiornamento AI-per-la-fisica
SakanaAI/AI-Scientist-v2 | https://github.com/SakanaAI/AI-Scientist-v2 | differita | D | ricerca-autonoma | pipeline di ricerca autonoma: riferimento per il metodo, non per l'uso
future-house/paper-qa | https://github.com/future-house/paper-qa | differita | D | paper,RAG | domande e risposte su paper scientifici: braccio dell'Argonauta accademico
d2l-ai/d2l-en | https://github.com/d2l-ai/d2l-en | differita | D | DL,libro | Dive into Deep Learning: manuale interattivo
mrdbourke/pytorch-deep-learning | https://github.com/mrdbourke/pytorch-deep-learning | differita | D | DL,corso | corso PyTorch pratico
wdphy16/stat-mech-van | https://github.com/wdphy16/stat-mech-van | da-potare | D | stat-mech,variational-mc,reti-neurali,pytorch,tesi | codice del paper VAN (variational autoregressive networks) per stat mech; incrocio diretto ML+stat mech; complementa NetKet con approccio VAE-PyTorch su catene di spin e modelli di Ising
JoseMillnitz/LLM-ISLAND | https://github.com/JoseMillnitz/LLM-ISLAND | da-potare | - | coding-standard | 4 stelle, zero topics, standard personale per AI coding; irrilevante per la navicella e per la fisica
newton-physics/newton | https://github.com/newton-physics/newton | da-potare | - | fisica-classica,simulazione,robotica,GPU-NVIDIA | motore fisica classica GPU per robotica (NVIDIA Warp); non tocca stat mech o quantum; richiede GPU NVIDIA assente; irrilevante per tesi
PolymathicAI/the_well | https://github.com/PolymathicAI/the_well | da-potare | D | dataset,fisica,simulazione,MHD,fluid-dynamics,ML | 15TB dataset fisici (MHD, fluidi, bio) da Flatiron/Cambridge/Los Alamos; base dati per physics-informed ML quando la tesi entra nella fase computazionale
diegosouzapw/OmniRoute | https://github.com/diegosouzapw/OmniRoute | da-potare | A | gateway,routing,token-compressione,proxy,multi-provider | gateway 330+ provider con compressione token 15-95% (12 engine composable); piu' completo di NadirClaw gia' USATA; va confrontato prima di sostituire
tirth8205/code-review-graph | https://github.com/tirth8205/code-review-graph | da-potare | A | graphRAG,MCP,AST,token-saving,code-intelligence | grafo AST del codice + 30 tool MCP; darebbe all'Argonauta o al Demiurgo una mappa strutturale della navicella senza rileggere tutto ogni sessione
likec4/likec4 | https://github.com/likec4/likec4 | da-potare | - | architettura,diagrammi,C4 | visualizzazione architettura software live da codice (modello C4); utile per documentare la navicella ma nessun apparato lo richiede ora
ComposioHQ/awesome-claude-skills | https://github.com/ComposioHQ/awesome-claude-skills | da-potare | - | reference,skills,claude,MCP | directory Claude Skills curata da Composio HQ; si sovrappone a composio-community/awesome-claude-plugins gia' in catalogo (marginale); stesso verdetto atteso
oblien/openship | https://github.com/oblien/openship | da-potare | - | deployment,self-hosted,agenti | piattaforma deploy self-hosted per agenti AI; funzione precisa non verificata (README non letto); nessun cantiere aperto lo richiede ora
DioxusLabs/dioxus | https://github.com/DioxusLabs/dioxus | da-potare | E | UI,Rust,cross-platform,desktop,mobile | framework React-like in Rust per web/desktop/mobile; candidato plancia alternativo a HTML+WebSocket; costo: richiede Rust non presente nello stack di Giuseppe
dottxt-ai/outlines | https://github.com/dottxt-ai/outlines | da-potare | A | output-strutturati,JSON,schema,LLM | libreria per generazione strutturata (JSON, regex, schema) da LLM; potrebbe rafforzare l'affidabilita' delle risposte degli agenti quando devono rispettare un formato preciso
koala73/worldmonitor | https://github.com/koala73/worldmonitor | da-potare | - | OSINT,dashboard,news,geopolitica | OSINT e monitoraggio geopolitico in tempo reale; irrilevante per navicella e tesi
ripienaar/free-for-dev | https://github.com/ripienaar/free-for-dev | da-potare | - | reference,infra,free-tier | lista servizi gratuiti per sviluppatori; gia' analizzata il 2026-07-21 (05-nuove-stelle.md): consultare prima di pagare qualcosa, non integrare
canopyai/Orpheus-TTS | https://github.com/canopyai/Orpheus-TTS | da-potare | E | TTS,voce,locale,emozione,llama | TTS locale su Llama-3b, latenza 200ms, controllo emozione; candidato per il pipeline voce quando si apre quel cantiere; gia' analizzata il 2026-07-21 (05-nuove-stelle.md)
coqui-ai/TTS | https://github.com/coqui-ai/TTS | da-potare | - | TTS,voce,abbandonato | toolkit TTS abbandonato (Coqui-AI chiusa 2024, ultimo commit significativo dicembre 2023); Orpheus-TTS la sostituisce come referenza; irrilevante
HBAI-Ltd/Toonflow-app | https://github.com/HBAI-Ltd/Toonflow-app | da-potare | C | video,animazione,AI-video,business | storie/script a cortometraggi animati; candidato pipeline video business; limitato da costi API video generation (Sora ecc.); gia' analizzata il 2026-07-21 (05-nuove-stelle.md)
Conway-Research/automaton | https://github.com/Conway-Research/automaton | da-potare | A | agente,autonomia,self-financing,survival-tiers,loop-continuo | agente auto-replicante con wallet Ethereum e survival tiers; pattern architetturale per l'esistenza autonoma della navicella; gia' analizzata in dettaglio il 2026-07-17 (04-nuova-stella.md)
```

## Note di manutenzione

- Il catalogo è **dato**: lo legge `temi.py`. Aggiungere una fonte a mano è possibile, ma
  `--aggiungi` garantisce il formato.
- Una fonte non si cancella mai: cambia verdetto. `marginale` è già il modo onesto di dire
  «non la useremo», e resta scritto perché non la si rivaluti tre volte.
- `differita` è una promessa: chi la scrive accetta che `temi.py --coda` gliela rimetta
  davanti. Una coda che nessuno guarda è un cimitero, ed è il rischio che questo catalogo
  esiste per evitare.
- Fedeltà, dichiarata: delle sei `usata` conosco il sorgente perché le ho lette; delle altre
  il giudizio poggia sui findings dell'Argonauta, cioè su seconda mano. Prima di costruire
  sopra una `differita`, va letta davvero.
- Due nomi sono parziali (`multi-agent-ralph-loop`, `awesome-llm-token-optimization`): erano
  citati senza indirizzo completo nei findings. Non li ho inventati: restano da completare.

## Nota sull'ingresso del 12-08 (Dedalo, verificata)

Le 17 stelle attuali dell'account sono entrate come `da-potare`. L'Argonauta ha concluso
«cleanup completo, zero sovrapposizione con luglio»: **corretto solo a metà, e l'ho
verificato riga per riga.** Le 36 stelle censite l'11 luglio (`00-starred-repos.md`) non
compaiono più. Ma cinque delle 17 attuali — Conway-Research/automaton, HBAI-Ltd/Toonflow-app,
canopyai/Orpheus-TTS, coqui-ai/TTS, ripienaar/free-for-dev — sono esattamente le stelle
aggiunte a fine luglio e già censite in `04-nuova-stella.md` e `05-nuove-stelle.md`.

Quindi non è un radar azzerato: è una **potatura delle stelle più vecchie**, con le più
recenti rimaste al loro posto. La differenza conta, perché «ha cambiato direzione» e «ha
fatto pulizia» portano a decisioni opposte sul catalogo. Le fonti già in catalogo restano:
sei sono diventate codice, e una fonte metabolizzata non ha più bisogno della stella.

Resta una domanda che solo Giuseppe può sciogliere: se quella potatura l'ha fatta lui. In
caso contrario andrebbe guardato l'account, non il catalogo.

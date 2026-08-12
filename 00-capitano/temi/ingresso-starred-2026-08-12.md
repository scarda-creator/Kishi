---
tipo: ingresso-stelle
data: 2026-08-12
agente: Argonauta
fonte: API GitHub pubblica — https://api.github.com/users/scarda-creator/starred?per_page=100&page=1
---

# Ingresso stelle GitHub — 2026-08-12

## Intestazione onesta

| | |
|---|---|
| Stelle account scarda-creator oggi | **17** |
| Gia' in catalogo | **0** |
| Nuove (da catalogare) | **17** |
| Non valutate | **1** (wdphy16/stat-mech-van: README 404, classificata da descrizione API e topics del paper) |
| Ora ricognizione | ora esatta non disponibile (sessione agente) |

**Fonte verificata:** API pubblica `scarda-creator/starred`, una pagina da 100, pagina 2 vuota. Nessuna autenticazione = solo stelle pubbliche visibili.

**Segnale critico — cleanup completo.** Le 43 stelle censite tra luglio 11 e luglio 21 (documentate in `00-starred-repos.md`, `04-nuova-stella.md`, `05-nuove-stelle.md`) non sono piu' presenti nell'elenco. Zero sovrapposizioni. Giuseppe ha rimosso tutte le stelle vecchie e ne ha aggiunte 17 completamente diverse. Le 17 attuali sono tutte posteriori al 21 luglio.

**Impatto sul catalogo:** le ~36 fonti del catalogo che provenivano dalla lista stelle di luglio (tutte le `usata`, le `influente`, molte `differita` e `marginale`) non sono piu' stellate. Non e' un segnale di rifiuto — le usate sono gia' diventate codice — ma e' un cambio di direzione del radar di Giuseppe che vale leggere. Le fonti in catalogo restano, il verdetto non cambia.

**Repos stellate in luglio ma non in catalogo, ora sparite (5):** Conway-Research/automaton, iriseye931-ai/blockhouse, ripienaar/free-for-dev, canopyai/Orpheus-TTS, coqui-ai/TTS, abhinavssram/STT-deepgram-twillio, HBAI-Ltd/Toonflow-app — di queste, Conway, ripienaar, Orpheus-TTS, coqui-ai/TTS e Toonflow sono ora nelle nuove stelle (erano ancora stellate a luglio 21, sparite poi). Blockhouse e abhinavssram/STT-deepgram-twillio sono sparite senza entrare nel catalogo ne' nelle nuove stelle.

---

## Righe pronte per il catalogo

```dati
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

---

## Le tre che valgono di piu' per la sua traiettoria

Solo 2 delle 17 stelle sono fisiche in senso stretto; la terza e' la piu' rilevante per la navicella che sorregge la fisica. Lo dico esplicitamente invece di fingere parita'.

---

**1. wdphy16/stat-mech-van — il piu' diretto**

E' il codice di un paper specifico sull'applicazione di reti neurali autoregressivi variazionali (VAN) alla meccanica statistica. Topics: `autoregressive-neural-networks`, `statistical-physics`, `variational-monte-carlo`, `pytorch`. Questo e' esattamente l'incrocio che Giuseppe sta costruendo: ML applicato a sistemi fisici complessi. Non e' una libreria generica — e' il codice di un esperimento pubblicato, leggibile come studio di caso. Complementa NetKet (gia' in catalogo, approccio JAX/NQS) con un approccio diverso su PyTorch. Per un fisico che vuole capire come si applicano le reti autoregressivi a distribuzioni di Boltzmann e a catene di spin, questo e' il posto piu' concreto dove iniziare.

---

**2. PolymathicAI/the_well — il giacimento**

15TB di dataset di simulazioni fisiche prodotti da Flatiron Institute, Cambridge, Los Alamos, NYU, Berkeley. Sedici dataset che coprono MHD astrofisica, dinamica dei fluidi, scattering acustico, sistemi biologici. Formato PyTorch DataLoader. Non e' stat mech quantistica — e' un livello piu' classico/continuo — ma e' il riferimento di fatto per physics-informed ML con dati reali di simulazione. Quando la tesi entrera' nella fase in cui si vogliono testare metodi su dati non giocattolo, questo e' il posto. Le istituzioni mantenitrici (Flatiron = sede di molti dei paper su sistemi many-body piu' citati) danno garanzie di qualita' dei dati.

---

**3. diegosouzapw/OmniRoute — il piu' utile per la navicella**

Non e' fisica, ma e' il piu' alto impatto operativo: un gateway con compressione token integrata (12 engine composable, 15-95% di riduzione dichiarata) che supporta 330+ provider. NadirClaw e' gia' USATA nella navicella per il routing, ma senza compressione propria. OmniRoute la includeva gia' nel design. Con il patto "la navicella non deve costare oltre l'abbonamento Pro per girare", ogni punto percentuale di risparmio token e' direttamente stabilita'. Va confrontata con NadirClaw sul campo prima di qualsiasi sostituzione — ma e' la stella con il piu' alto potenziale di cambiamento operativo immediato.

---

## Note di lettura

- **wdphy16/stat-mech-van**: README non raggiungibile via URL grezzo (404), classificata dai topics API e dalla descrizione del paper. Prima di usarla: leggerla dalla pagina GitHub principale.
- **oblien/openship**: descrizione troppo vaga senza README. Ho evitato di classificarla in un apparato preciso.
- **Findings gia' esistenti** su 5 repos (Conway, ripienaar, Orpheus-TTS, coqui-ai/TTS, Toonflow): consultare i file `04-nuova-stella.md` e `05-nuove-stelle.md` in `00-capitano/dedalo/ricerca-github/` prima di decidere il verdetto finale.

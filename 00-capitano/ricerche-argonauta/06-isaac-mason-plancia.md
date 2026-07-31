---
tipo: ricerca-argonauta
data: 2026-07-13
stato: interrotto-per-correzione
redirect: 06-androoagi-plancia.md
---

# isaac-mason/sketches — nota di reindirizzamento

La ricerca su questo repo e' stata interrotta a meta' su correzione di Dedalo.
L'ispirazione originale della plancia della navicella e' AndrooAGI (OpenClaw mission control),
non isaac-mason. Vedere `06-androoagi-plancia.md`.

---

## Dati raccolti prima della correzione (sintesi parziale)

**Repo:** https://github.com/isaac-mason/sketches  
**Stack confermato:** Three.js 0.183, React Three Fiber 9.x (@react-three/fiber), @react-three/drei,
Rapier3D (@react-three/rapier + @dimforge/rapier3d-compat), D3.js 7.x, TypeScript, Vite.  
**Licenza:** MIT  
**Struttura:** monorepo pnpm, ogni sketch e' un pacchetto indipendente in `sketches/`

**Sketch principali rilevanti per "cervello vivo":**

| Sketch | Cosa fa | Rilevanza plancia |
|---|---|---|
| d3/force-directed-graph | grafo di forze D3 renderizzato via R3F in 3D | alta — grafo memoria animato |
| boids | flocking (comportamento sciame) GPU | alta — particelle/sinapsi vive |
| rapier/* | fisica rigida 3D (veicoli, articolazioni, molle) | media — fisica oggetti UI |
| threejs-journey/18-1,2-particles | sistemi di particelle GPU | alta — effetto sinapsi |
| threejs-journey/19-galaxy-generator | galassia procedurale via shader | media — estetica cosmica |
| threejs-journey/29-animated-galaxy | galassia animata | media |
| postprocessing/emissive-bloom | bloom emissivo | alta — effetto "accensione" |
| tsl/* | Three.js Shader Language | media — shader custom |
| glsl-shaders-from-scratch/raymarching | raymarching distanza | bassa per plancia, alta per tesi |
| nature/grass, grass-2 | erba 3D procedurale | bassa |

**Valutazione rapida:** isaac-mason e' una sandbox didattica/personale di alta qualita',
non un framework riusabile. I singoli sketch (D3 force graph + R3F, particle system, bloom)
sono tecniche estraibili; il repo stesso non si forka, si studia per pattern.

Per la plancia navicella, il vero punto di riferimento ispirazionale rimane AndrooAGI.
Isaac-mason puo' diventare sorgente di *tecniche* specifiche se la decisione di Dedalo
porta verso 3D/R3F — ma e' un "come", non un "cosa".

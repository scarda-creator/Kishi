# Come cablare le visualizzazioni in un nucleo (motore-plot.js)

Il modulo `nuclei/motore-plot.js` dà grafici 2D/3D a costo zero, canvas puro, zero dipendenze.
Costruito da Dedalo il 2026-07-20, **rivisto lo stesso giorno dopo la prova dell'occhio sul
nucleo 0** (vedi «Cosa ha insegnato il primo cablaggio», in fondo: sono correzioni, non
rifiniture).

Esemplare di riferimento: **`00-topologia.html`** — sei blocchi figura cablati e verificati.
Banco di prova per vedere le figure isolate: `_banco-plot.html`.

## Le TRE aggiunte al motore di un nucleo

**1. Includere il modulo** nel `<head>`, dopo KaTeX:
```html
<script src="motore-plot.js"></script>
```

**2. Aggiungere il caso `plot`** al renderer delle sezioni, e — se non c'è già — il typeset
dei titoli:
```js
else if(b.t==='plot')      m.appendChild(sectionPlot(b));
});
/* i titoli di sezione contengono formule: senza questo si leggono i dollari nudi */
Array.prototype.forEach.call(m.querySelectorAll('section.section > h3'), typeset);
```

**3. Copiare `sectionPlot` e il suo CSS** da `00-topologia.html` (cerca `--- blocchi figura ---`).
Non riscriverli: la funzione contiene due dettagli che costano un giro di debug —
`s.w` esplicito e il typeset di `intro`/`leggi`.

## Anatomia di un blocco figura

```js
{t:'plot', title:'…',            // può contenere $formule$
 intro:'…',                       // una frase: cosa stai guardando
 plots:[ {…spec…}, {…spec…} ],    // uno o due; con due, affiancati
 leggi:'…'}                       // OBBLIGATORIO: cosa dice la figura
```
`leggi` non è una didascalia: è il blocco in cui la figura **diventa argomento**. È il posto
dove si mette la deduzione che la figura rende ovvia, l'errore d'esame che smaschera, e il
rimando in avanti. Una figura senza `leggi` è decorazione, e va tolta.

## I kind

```js
{kind:'surface3d', f:'x*y/(x*x+y*y+1e-9)', xr:[-2,2], yr:[-2,2], n:40}   // z=f(x,y), RUOTABILE
{kind:'contour',   f:'x*x+y*y', xr:[-2,2], yr:[-2,2], levels:[0.25,1,2]} // curve di livello
{kind:'field2d',   fx:'-y', fy:'x', xr:[-2,2], yr:[-2,2], n:14}          // campo vettoriale
{kind:'phase',     fx:'y', fy:'-sin(x)-0.2*y', xr:[-6,6], yr:[-3,3], seeds:[[-4,.5]]}  // EDO
{kind:'func2d',    f:'sin(x)/x', xr:[-12,12]}                            // y=f(x)
{kind:'curve',     x:'cos(t)', y:'sin(2*t)', tr:[0,6.29]}                // parametrica
```
Le formule sono stringhe JS con le funzioni di `Math` nude (`sin`, `cos`, `exp`, `sqrt`,
`hypot`, `PI`…). Denominatori che si annullano: aggiungi `+1e-9`.

### Opzioni comuni
| opzione | effetto |
|---|---|
| `w`, `height` | dimensioni in px. **`w` va sempre dichiarato** (lo fa `sectionPlot`) |
| `title` | didascalia sotto il canvas — **testo semplice**, il canvas non rende HTML né LaTeX |
| `equal` | scala isometrica. Default `true` per contour/curve/field2d/phase |
| `ticks:false` | toglie i numeri sugli assi |

### Sovrapporre più funzioni (`overlays`) — solo `contour`
```js
{kind:'contour', f:'hypot(x,y)', levels:[1], col:'#5eead4', label:'euclidea', …,
 overlays:[{f:'abs(x)+abs(y)', levels:[1], col:'#d8a13a', label:'taxi'},
           {f:'max(abs(x),abs(y))', levels:[1], col:'#b98cff', label:'sup', dash:true, width:2.6}]}
```
`label` alimenta la legenda in alto; `dash:true` per ciò che è **escluso** o ipotetico.
È il modo per mettere un vincolo insieme ai livelli — cioè per far vedere Lagrange.

### Cammini circolari di riferimento (`rings`) — kind 2D
```js
rings:[{r:1.3, x:0, y:0, col:'#ff9b6b', width:2.4, dash:false, label:'…'}]
```
Disegna cerchi di raggio `r` centrati in `(x,y)` (default origine). Nati per la **circuitazione**:
un cammino chiuso su un campo (`field2d`) attorno a un punto — es. il vortice $(-y/r^2,x/r^2)$
attorno al buco. Aggiunto 2026-07-21 (nucleo 04). Combinabile con `marks` (il buco escluso =
`{hollow:true}`).

### Punti notevoli (`marks`) — kind 2D
```js
marks:[{x:0, y:0, label:'min f=0', col:'#ffffff'},
       {x:0.7071, y:-0.7071, label:'max f=3/2', col:'#d8a13a', left:true, up:true}]
```
`left`/`up` spostano l'etichetta se copre la curva. `hollow:true` per un punto **escluso**.

### Piano tangente su una superficie (`tangent`) — kind `surface3d`
```js
{kind:'surface3d', f:'x*x-y*y', xr:[-1.6,1.6], yr:[-1.6,1.6], n:42,
 tangent:{x0:0.7, y0:0.5, span:0.66}}   // piano azzurro tangente in (x0,y0)
```
Il gradiente è calcolato **numericamente** da `f` (nessuna derivata da passare). Il piano è un
patch traslucido di lato `2*span` centrato nel punto, e i suoi quad entrano nello **stesso**
depth-sort della superficie: l'occlusione è corretta (dove la superficie sta davanti, copre il
piano). Il punto di tangenza è segnato in bianco. È l'immagine che definisce la differenziabilità
(il grafico incollato al piano vicino al punto) e serve anche a mostrare che un piano tangente
**non** esiste: metti `tangent` nel punto critico (es. origine con `∇g=0`) e la superficie che
si stacca dice tutto. Aggiunto 2026-07-21, cablato nel nucleo 01 (tappe 03 e 06).

### Campo gradiente sui livelli (`grad`) — kind `contour`
```js
{kind:'contour', f:'0.5*x*x+y*y', levels:[…], grad:{fx:'x', fy:'2*y', label:'grad f', n:11}}
```
Disegna le frecce di $(f_x,f_y)$ **sopra** le curve di livello: la perpendicolarità
gradiente⊥livello e la direzione di massima salita in **una sola** figura. `fx`,`fy` sono
analitici (stringhe JS). `label` va in legenda. Aggiunto 2026-07-21.

### Curva parametrica 3D (`curve3d`)
```js
{kind:'curve3d', x:'cos(t)', y:'sin(t)', z:'t/2.2', tr:[0,12.566], yaw:0.6, pitch:0.85,
 col:'#b98cff', mark3d:{x:1,y:0,z:0}}   // ruotabile (trascina), riusa la camera di surface3d
```
`x`,`y`,`z` sono stringhe in `t` (Math nude). `mark3d` segna un punto. Disegna due assi leggeri di
riferimento dal piano base. Aggiunto 2026-07-21 (nucleo 03, elica). **Lezione dalla prova
d'occhio:** una curva 3D *ripida* (es. l'elica vera $c=1$, che sale $2\pi$ con raggio 1) vista di
taglio sembra un'onda piana; serve `pitch` alto (~0.85) e ≥2 giri perché i coil si leggano come
anelli. Se comprimi `z` per leggibilità (`z:'t/2.2'`), **dillo nel testo** — stai disegnando
un'elica di passo diverso da quella dell'esercizio. Le superfici non-grafico (sfera piena) e i
bordi su griglia quadrata (semisfera → rim seghettato) restano fuori portata: servono una capacità
di *superficie parametrica* $\Phi(u,v)$, non ancora costruita.

### Camera 3D (`yaw`, `pitch`, `zscale`)
I default (`yaw:0.7, pitch:0.5`) nascondono le selle: **scegli l'angolo, non subirlo.**
Valori che hanno funzionato: sella $xy/(x^2+y^2)$ → `yaw:0.9, pitch:0.95, zscale:1.15`
(dall'alto, si vedono i quattro lobi); cresta $x^2y/(x^4+y^2)$ → `yaw:1.15, pitch:0.85`.
`zscale` sotto 1.6 sgonfia le montagne finte.

## Regola d'uso
La visualizzazione **chiarisce il rigore, non lo sostituisce**: un plot dove il concetto ha
una forma (la sella del limite che non esiste, la tangenza dell'ottimo vincolato, il ritratto
di fase, il bordo incluso o escluso). Non decorazione — evidenza.

---

## Cosa ha insegnato il primo cablaggio (nucleo 0, 2026-07-20)

Quattro difetti trovati **guardando le figure**, non leggendo il codice. Chrome headless
`--screenshot` sul nucleo (i deep-link `00-topologia.html#04` aprono la tappa) e poi l'occhio.

1. **I cerchi erano ellissi.** Il canvas non era isometrico: nel nucleo dove la figura deve
   dire *distanza*, le palle euclidee uscivano schiacciate. Da qui `equal` + il riquadro che
   si adatta alla figura invece di lasciare bande vuote. Una figura metrica non isometrica
   **mente**, e mente in modo che lo studente non può accorgersi.
2. **Le superfici 3D erano montagne illeggibili.** L'angolo di camera di default guardava la
   sella di taglio. Da qui `yaw`/`pitch`/`zscale`.
3. **Il canvas usciva vuoto** quando il contenitore non era ancora nel DOM: `host.clientWidth`
   vale 0 e la larghezza va a zero. Da qui `spec.w` obbligatorio.
4. **Una figura non guadagnava il suo posto** ($x^3/(x^2+y^2)$ per la continuità: una tovaglia
   che non mostrava l'appiattimento). Tolta. Meglio cinque figure che pagano di sei con una
   che riempie.

Difetto preesistente scoperto per strada, **valido per tutti i nuclei**: i titoli di sezione
non passavano da KaTeX, quindi si leggevano i dollari nudi (`$\dfrac{xy}{x^2+y^2}$`).
Corretto nel nucleo 0 con la riga di typeset al punto 2. **Da propagare agli altri quattro
nuclei già scritti.**

---

## Aggiunte del 2026-07-21 (nuclei 09 e Movimento III)

### `segs` — segmenti retti (kind 2D)
```js
segs:[{x1:0, y1:0, x2:1.9, y2:2.2, col:'#4c8dff', arrow:true, width:2.6,
       label:'f', lx:0.75, ly:1.5, dash:false}]
```
Nato per la **geometria di Hilbert** (vettore, proiezione, errore ortogonale): serviva un
disegno in cui l'ortogonalità fosse un **angolo retto** e non una formula. `arrow:true` mette
la punta in `(x2,y2)`; `lx`/`ly` posizionano l'etichetta (default: punto medio). Combinabile
con `rings` e `marks`: il contorno **keyhole** del nucleo 13 è due `rings` + tre `segs`, e la
retta verticale «|x|=1» del nucleo 14 è un `segs` tratteggiato.

Usi già cablati: nucleo 09 (proiezione ortogonale), nucleo 11 (il taglio come segmento spesso),
nucleo 13 (diametro del semicerchio, keyhole), nucleo 14 (confine del raggio di convergenza).

### `curve` per un arco di contorno
`{kind:'curve', x:'1.55*cos(t)', y:'1.55*sin(t)', tr:[0,3.14159]}` dà la **semicirconferenza**:
è il modo per disegnare i contorni d'integrazione del nucleo 13 senza aggiungere capacità.

### Funzioni speciali dentro una stringa-formula
Il motore conosce solo `Math`. Per Γ (nucleo 14) si usa **ricorrenza + Stirling** in una sola
espressione: `Gamma(x) = G(x+8)/(x(x+1)...(x+7))` con `G(y)=sqrt(2π/y)(y/e)^y(1+1/12y+1/288y²)`.
Precisione verificata numericamente: errore ~5·10⁻⁶ sui fattoriali e su Γ(1/2)=√π.
**Regola:** una formula approssimata va **misurata** contro valori noti prima di pubblicarla,
non stimata a occhio.

---

## Come si scrive un nucleo nuovo (dal 2026-07-21)

Non si copia più un nucleo esistente: si scrive **solo il contenuto** e si assembla.

1. `nuclei/contenuti/NN-nome.js` — header `/*META {…} META*/` (nn, file, titolo, nome, banner)
   seguito dal corpo dell'array `TAPPE`.
2. `node assembla-nucleo.js contenuti/NN-nome.js` → scrive `NN-nome.html` dal template.
3. `node ../../../00-capitano/scripts/verifica-katex-file.js NN-nome.html` → JS + KaTeX.
4. **Prova dell'occhio** su ogni figura nuova: Chrome headless `--screenshot` sul deep-link
   della tappa (`file:///…/NN-nome.html#03`), poi guardare davvero l'immagine.
5. `python ../mappa-percorso.py` e `python ../carta-rotte.py` per rigenerare mappa e carta.

### Tre trappole scoperte scrivendo il Movimento III
- **`title:` con un solo backslash.** I titoli dei blocchi sono stringhe `'...'`, non `R\`...\``:
  `title:'... $f-Pf\perp V$'` perde il backslash e in pagina si legge `f-PfperpV`. Il checker
  **non** lo vede (KaTeX compila «perpV» come testo). Nei titoli: `\perp`, sempre doppio.
- **Entità HTML dentro `\text{}`.** `\text{sull&rsquo;arco}` è un errore KaTeX vero: dentro la
  matematica servono caratteri, non entità. (Questo il checker lo vede.)
- **Apostrofo tipografico dentro `$…$`.** `$f’(z_0)$` fa scattare lo strict-mode di KaTeX:
  usare `'` normale o riformulare fuori dalla matematica.

---

## `param3d` — superficie parametrica $\Phi(u,v)$ (2026-07-21, sera)

Il buco che restava dal 20 luglio. `surface3d` disegna solo **grafici** $z=f(x,y)$: niente sfere,
cilindri, tori, elicoidi — e infatti il nucleo 03 era rimasto senza le figure di superficie e
flusso. Ora la superficie è data da **tre funzioni di due parametri**:

```js
{kind:'param3d', x:'sin(u)*cos(v)', y:'sin(u)*sin(v)', z:'cos(u)',
 ur:[0,3.14159], vr:[0,6.28319], nu:24, nv:34, yaw:0.7, pitch:0.35, alpha:0.86,
 normal:{u0:0.95, v0:0.8, len:0.85},           // normale numerica Phi_u x Phi_v nel punto
 field:{fx:'x', fy:'y', fz:'z', nu:6, nv:12, len:0.42, col:'#e0a94a'}}  // campo sulla superficie
```

- `normal` calcola $\Phi_u\times\Phi_v$ **numericamente** (nessuna derivata da passare) e la disegna
  sempre in primo piano, col punto di applicazione segnato.
- `field` valuta un campo $\mathbf F(x,y,z)$ nei punti della maglia e disegna le frecce nel
  depth-sort dei quad: è la figura del **flusso**.
- `alpha` regola l'opacità dei quad (utile quando servono le frecce che entrano).
- La tinta segue la quota $z$, come `surface3d`, per continuità visiva col resto del percorso.

**Dove è cablata:** nucleo 03 (sfera con normale + cilindro; sfera con campo radiale e con campo
costante), nucleo 05 (disco e calotta con lo stesso bordo — Stokes), nucleo 11 (**elicoide** =
superficie di Riemann del logaritmo).

**Regalo inatteso.** Il cilindro parametrizzato come $(u,v)=(z,\varphi)$ ha $\Phi_u\times\Phi_v$
**entrante**: la figura dimostra da sola la trappola dell'orientazione, invece di enunciarla. Un
difetto apparente del disegno che, dichiarato, vale più di un paragrafo.

### `curves3d` — curve disegnate SULLA superficie (stessa sessione)
```js
curves3d:[{x:'3.04*cos(t)', y:'3.04*sin(t)', z:'0*t', tr:[0,6.28319], col:'#ff9b6b', width:3.2}]
```
Ogni segmento entra nel **depth-sort** insieme ai quad: la parte di curva che passa dietro viene
coperta dalla superficie. È la differenza fra «una curva sopra il disegno» e «una curva sulla
figura». Serve ai **cammini chiusi** (i due cappi del toro) e ai **bordi** (il cerchio condiviso da
disco e calotta in Stokes: senza, la figura non mostrava proprio la cosa che il teorema dice).

`normal` accetta anche un **array** di punti (`[{u0,v0,len,col}, …]`): nato per il nastro di
Möbius, dove il senso della figura è confrontare la normale in due punti dello stesso giro.

### Le due idee, ora cablate
- **Nastro di Möbius** → nucleo 03, tappa 04: due normali dallo stesso punto, prima e dopo un giro,
  che risultano **opposte**. Dimostra che «orientabile» non è una parola di riempimento: su Möbius
  il flusso **non è definito**, mentre l'area sì (usa il modulo).
- **Toro** → nucleo 04, tappa 06: i **due** cappi non contraibili, contro l'unico buco della corona.
  Il numero dei modi di girare è il numero di circuitazioni indipendenti che sfuggono al potenziale
  — de Rham (nucleo 05), Aharonov–Bohm, vortici quantizzati.

### Idee ancora libere
- **Superficie di Riemann di $\sqrt z$** (due fogli incollati) accanto all'elicoide del nucleo 11.
- **Sella e catenoide** per il nucleo 01 (curvatura, punti sella in dimensione superiore).
- Una **famiglia di superfici di livello** $f(x,y,z)=c$ per il gradiente in 3D (nucleo 04).

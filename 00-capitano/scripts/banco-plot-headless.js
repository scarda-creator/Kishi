/* banco-plot-headless.js — Dedalo, 2026-08-14
 *
 * Il buco che chiude: `verifica-nucleo.js` prova che il JS compila e che le formule
 * KaTeX rendono. Nessuno dei due prova che una FIGURA si disegni: uno spec con un
 * `kind` inesistente, un'espressione che ritorna NaN o un parametro fuori range
 * passano ogni controllo di sintassi e lasciano un canvas nero. Questo banco esegue
 * davvero il motore contro un canvas finto e conta le primitive di disegno.
 *
 * Metrica: fill + stroke + segmenti (lineTo, arc). Contare i soli `stroke` sarebbe
 * sbagliato — una curva 3D e' UN path con 400 lineTo e un solo stroke, e verrebbe
 * dichiarata vuota mentre e' la figura piu' densa della pagina.
 *
 * Uso:
 *   node banco-plot-headless.js <nucleo.html> [altri.html ...]
 *   node banco-plot-headless.js --tutti          (tutti i nuclei del percorso)
 * Esce 1 se almeno una figura non disegna.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const NUCLEI = 'C:/Users/ACER/Desktop/AgentsAI/02-accademico/percorso-matematica/nuclei';
const MOTORE = path.join(NUCLEI, 'motore-plot.js');
const SOGLIA = 40; // primitive sotto le quali una figura e' di fatto vuota

/* ---------- finto DOM: registra le primitive invece di dipingerle ---------- */
function mkCtx(rec) {
  const noop = () => {};
  const CONTA = ['fill', 'stroke', 'fillRect', 'fillText', 'moveTo', 'lineTo', 'arc',
                 'beginPath', 'closePath', 'bezierCurveTo', 'quadraticCurveTo'];
  return new Proxy({}, {
    get(t, p) {
      if (p === 'measureText') return () => ({ width: 10 });
      if (p === 'createLinearGradient' || p === 'createRadialGradient')
        return () => ({ addColorStop: noop });
      if (typeof p === 'string' && CONTA.includes(p)) return () => { rec[p] = (rec[p] || 0) + 1; };
      return typeof t[p] === 'undefined' ? noop : t[p];
    },
    set(t, p, v) { t[p] = v; return true; }
  });
}
function mkEl(rec) {
  const el = {
    style: {}, children: [], width: 0, height: 0, dataset: {},
    appendChild(c) { this.children.push(c); return c; },
    addEventListener() {}, removeEventListener() {},
    getContext() { return mkCtx(rec); },
    getBoundingClientRect() { return { left: 0, top: 0, width: 600, height: 400 }; },
    setAttribute() {}, insertAdjacentHTML() {}, querySelector() { return null; },
    remove() {}, focus() {}
  };
  Object.defineProperty(el, 'innerHTML', { get() { return ''; }, set() {} });
  Object.defineProperty(el, 'textContent', { get() { return ''; }, set() {} });
  return el;
}
function caricaMotore(rec) {
  const sandbox = {
    window: { devicePixelRatio: 1, addEventListener() {}, requestAnimationFrame() {} },
    document: { createElement: () => mkEl(rec), addEventListener() {}, body: mkEl(rec) },
    console, Math, requestAnimationFrame() {}
  };
  sandbox.window.document = sandbox.document;
  sandbox.self = sandbox.window;
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(MOTORE, 'utf8'), sandbox, { filename: 'motore-plot.js' });
  const PM = sandbox.window.PM_Plot || sandbox.PM_Plot;
  if (!PM) throw new Error('PM_Plot non esposto dal motore');
  return PM;
}

/* ---------- estrazione degli spec dai nuclei ----------
 * Ogni blocco figura e' `{t:'plot', ..., plots:[ {kind:...}, ... ]}`. Prendo il
 * testo fra `plots:[` e la parentesi quadra che lo bilancia (le graffe annidate
 * degli spec impediscono un regex ingenuo), poi lo valuto: dentro ci sono solo
 * letterali. Salto le stringhe per non contare parentesi che stanno nei titoli. */
function estraiSpec(src) {
  const out = [];
  let i = 0;
  while ((i = src.indexOf('plots:[', i)) !== -1) {
    let j = i + 'plots:'.length, dep = 0, str = null, esc = false, fine = -1;
    for (; j < src.length; j++) {
      const c = src[j];
      if (esc) { esc = false; continue; }
      if (c === '\\') { esc = true; continue; }
      if (str) { if (c === str) str = null; continue; }
      if (c === '"' || c === "'" || c === '`') { str = c; continue; }
      if (c === '[' || c === '{') dep++;
      else if (c === ']' || c === '}') { dep--; if (dep === 0) { fine = j; break; } }
    }
    if (fine === -1) break;
    const blob = src.slice(i + 'plots:'.length, fine + 1);
    try {
      const arr = vm.runInNewContext('(' + blob + ')', { Math });
      if (Array.isArray(arr)) out.push(...arr.filter(s => s && s.kind));
    } catch (e) { out.push({ __rotto: e.message, kind: '??' }); }
    i = fine;
  }
  return out;
}

/* ---------- collaudo ---------- */
function collauda(file) {
  const nome = path.basename(file);
  const specs = estraiSpec(fs.readFileSync(file, 'utf8'));
  if (!specs.length) { console.log('  --   | ' + nome + ' — nessuna figura'); return { ok: 0, ko: 0 }; }
  let ok = 0, ko = 0;
  console.log('\n== ' + nome + ' — ' + specs.length + ' figure');
  for (const spec of specs) {
    const et = (spec.kind + (spec.title ? ' · ' + String(spec.title).slice(0, 46) : '')).slice(0, 64);
    if (spec.__rotto) { console.log('  ERR  | ' + et.padEnd(64) + ' spec illeggibile: ' + spec.__rotto); ko++; continue; }
    const rec = {};
    try {
      const PM = caricaMotore(rec);
      PM.render(mkEl(rec), spec);
      // fillRect va contato: `iter2d` dipinge ogni punto dell'orbita cosi', e senza
      // di lui cinque figure vive del nucleo 21 risultavano mute (falso allarme 14-08).
      const tot = (rec.fill || 0) + (rec.stroke || 0) + (rec.lineTo || 0) + (rec.arc || 0)
                + (rec.fillRect || 0);
      if (tot > SOGLIA) { console.log('  OK   | ' + et.padEnd(64) + ' primitive=' + tot); ok++; }
      else { console.log(' VUOTO | ' + et.padEnd(64) + ' primitive=' + tot); ko++; }
    } catch (e) { console.log('  ERR  | ' + et.padEnd(64) + ' ' + e.message); ko++; }
  }
  return { ok, ko };
}

let files = process.argv.slice(2);
if (!files.length || files[0] === '--tutti')
  files = fs.readdirSync(NUCLEI).filter(f => /^\d\d-.*\.html$/.test(f)).map(f => path.join(NUCLEI, f));

let OK = 0, KO = 0;
for (const f of files) { const r = collauda(f); OK += r.ok; KO += r.ko; }
console.log('\nRISULTATO: ' + OK + ' figure disegnate, ' + KO + ' mute');
process.exit(KO ? 1 : 0);

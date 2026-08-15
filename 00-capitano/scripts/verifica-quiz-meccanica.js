/* verifica-quiz-meccanica.js — Dedalo, 2026-08-14
 *
 * Perche' esiste: `quiz_verifica.js` e' tarato sul template nuovo (KaTeX in head,
 * unita' con `steps` e `c:true`) e su questo quiz da' FAIL a prescindere — lo dava
 * identico anche prima di toccarlo. Risultato: il quiz su cui Giuseppe prepara
 * l'orale di Meccanica, 457 domande, era l'unico materiale di studio senza collaudo.
 * Questo verificatore parla il formato vecchio: banca `Q.<pool>`, tipi 1-6, MathJax.
 *
 * Controlla:
 *   1. la banca si esegue (sintassi JS dei dati);
 *   2. ogni domanda ha i campi che il suo `type` pretende;
 *   3. i tipi a scelta multipla hanno un `correct` dentro il numero di opzioni;
 *   4. delimitatori `$` bilanciati in ogni campo di testo;
 *   5. ogni formula passa il parser KaTeX. MathJax e' piu' permissivo, quindi un
 *      errore qui e' un sospetto da guardare, non per forza una rottura: il conto
 *      viene stampato separato dagli errori duri.
 *
 * Uso: node verifica-quiz-meccanica.js [percorso.html]   (default: il quiz montato)
 * Exit 1 se ci sono errori duri.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const CASA = path.resolve(__dirname, '..', '..');
const QUIZ = process.argv[2] || path.join(CASA, '02-accademico', 'percorso-matematica',
                                          'meccanica', 'Quiz_Meccanica_Orale_v1.html');
let katex = null;
try { katex = require(path.join(__dirname, 'node_modules', 'katex')); } catch (e) {
  try { katex = require('katex'); } catch (e2) { /* si prosegue senza */ }
}

const html = fs.readFileSync(QUIZ, 'utf8');
const a = html.indexOf('const Q = {};'), b = html.indexOf('const TYPE_LABEL');
if (a < 0 || b < 0) { console.log('x banca non trovata (delimitatori)'); process.exit(1); }
const sb = {}; vm.createContext(sb);
try { vm.runInContext(html.slice(a, b) + '\n;globalThis.__Q=Q;', sb); }
catch (e) { console.log('x la banca non gira: ' + e.message); process.exit(1); }
const Q = sb.__Q;

const CAMPI = { 1: ['q', 'options', 'correct'], 2: ['q'], 3: ['q', 'l1', 'l2'],
                4: ['q', 'pre', 'accept', 'post'], 5: ['q', 'steps'], 6: ['q', 'model'] };
const err = [], sospetti = [];
let nDom = 0, nForm = 0;

function testo(v, out) {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach(x => testo(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach(x => testo(x, out));
}
function formule(s) {
  const out = [];
  // prima i display, poi gli inline su cio' che resta
  let resto = s.replace(/\$\$([\s\S]+?)\$\$/g, (m, f) => { out.push(f); return ' '; });
  resto.replace(/\$([^$]+)\$/g, (m, f) => { out.push(f); return ' '; });
  return out;
}

for (const pool of Object.keys(Q)) {
  Q[pool].forEach((d, i) => {
    nDom++;
    const dove = pool + '#' + (i + 1) + ' «' + String(d.topic || '?').slice(0, 40) + '»';
    const attesi = CAMPI[d.type];
    if (!attesi) { err.push(dove + ': type sconosciuto (' + d.type + ')'); return; }
    for (const c of attesi) if (d[c] === undefined || d[c] === '')
      err.push(dove + ': manca il campo `' + c + '` richiesto dal type ' + d.type);
    if (Array.isArray(d.options)) {
      if (d.options.length < 2) err.push(dove + ': meno di 2 opzioni');
      if (typeof d.correct !== 'number' || d.correct < 0 || d.correct >= d.options.length)
        err.push(dove + ': `correct` fuori dalle opzioni');
    }
    const pezzi = []; testo(d, pezzi);
    for (const s of pezzi) {
      const n = (s.match(/(?<!\$)\$(?!\$)/g) || []).length;
      const nn = (s.match(/\$\$/g) || []).length;
      if (n % 2) err.push(dove + ': $ inline dispari in un campo');
      if (nn % 2) err.push(dove + ': $$ display dispari in un campo');
      if (katex) for (const f of formule(s)) {
        nForm++;
        try { katex.renderToString(f, { throwOnError: true, strict: false }); }
        catch (e) { sospetti.push(dove + ': ' + String(e.message).slice(0, 90)); }
      }
    }
  });
}

const n6 = Object.values(Q).reduce((s, arr) => s + arr.filter(d => d.type === 6).length, 0);
console.log('== verifica-quiz-meccanica ==  ' + path.basename(QUIZ));
console.log('pool: ' + Object.keys(Q).length + ' | domande: ' + nDom + ' | lavagne: ' + n6
            + ' | formule testate: ' + nForm + (katex ? '' : ' (KaTeX assente: non testate)'));
if (sospetti.length) {
  console.log('\nSOSPETTI KaTeX (' + sospetti.length + ') — MathJax puo\' accettarli lo stesso:');
  sospetti.slice(0, 15).forEach(s => console.log('  ~ ' + s));
  if (sospetti.length > 15) console.log('  ~ ... e altri ' + (sospetti.length - 15));
}
if (err.length) {
  console.log('\nERRORI (' + err.length + '):');
  err.slice(0, 25).forEach(s => console.log('  x ' + s));
  console.log('\nRISULTATO: FAIL');
  process.exit(1);
}
console.log('\nRISULTATO: PASS');

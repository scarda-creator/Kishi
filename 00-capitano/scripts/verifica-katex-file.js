// verifica-katex-file.js — verifica che ogni formula KaTeX di un file HTML/MD parsi.
// Uso: node verifica-katex-file.js <path>   (eseguire da 00-capitano/scripts/, dove c'è node_modules/katex)
// Estrae le formule delimitate da \( \), \[ \], $$ $$ (esclude <script>/<style>) e le rende con throwOnError.
const katex = require('katex');
const fs = require('fs');

const file = process.argv[2];
if (!file) { console.error('manca il path del file'); process.exit(2); }
let html = fs.readFileSync(file, 'utf8');
// tengo il <script> (i dati dei saper-fare vivono lì), tolgo solo <style>
const body = html.replace(/<style[\s\S]*?<\/style>/gi, '');

// --- controllo sintassi JS degli <script> inline: se rotta, l'app non parte (pagina bianca) ---
// va PRIMA delle formule: una app data-driven col JS rotto non renderizza nulla, KaTeX-ok o no.
let jsFail = 0;
for (const s of (html.match(/<script>([\s\S]*?)<\/script>/gi) || [])) {
  try { new Function(s.replace(/<\/?script>/gi, '')); }
  catch (e) { jsFail++; console.log('JS SYNTAX FAIL: ' + String(e.message).slice(0, 110)); }
}
if (jsFail) { console.log('\n>>> ' + jsFail + ' script con errore di sintassi — l\'app NON parte. Correggi il JS prima delle formule.'); process.exit(2); }

function decode(s) {
  return s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
          .replace(/&quot;/g, '"').replace(/&#39;/g, "'");
}

const formule = [];
let m;
// 1) display $$...$$ prima, poi li rimuovo per non spezzarli col single-$
const dd = /\$\$([\s\S]*?)\$\$/g;
while ((m = dd.exec(body)) !== null) formule.push({ f: decode(m[1]).trim(), disp: true, tag: '$$' });
const resto = body.replace(/\$\$[\s\S]*?\$\$/g, ' ');
// 2) \(...\) e \[...\]
for (const [re, disp, tag] of [
  [/\\\(([\s\S]*?)\\\)/g, false, '\\(\\)'],
  [/\\\[([\s\S]*?)\\\]/g, true, '\\[\\]'],
]) { while ((m = re.exec(resto)) !== null) formule.push({ f: decode(m[1]).trim(), disp, tag }); }
// 3) inline $...$ (single dollar) sul resto
const si = /\$([^$\n]+?)\$/g;
while ((m = si.exec(resto)) !== null) {
  const f = decode(m[1]).trim();
  if (!f || /(right|left|delimiters|display|throwOnError|renderMathIn)\s*:/.test(f)) continue; // scarta config auto-render
  formule.push({ f, disp: false, tag: '$' });
}

// Le formule dentro gli oggetti-dati JS possono stare in stringhe NON raw ('...' o "..."),
// dove il sorgente scrive \\int per ottenere \int a runtime. Il testo estratto qui è quello
// del sorgente, quindi va provato ANCHE de-escapato: se la versione de-escapata compila, la
// formula è corretta e il fallimento sarebbe un falso positivo. (Il caso opposto — formula
// che compila solo col doppio backslash — resta segnalato.)
function compila(f, disp) {
  try { katex.renderToString(f, { throwOnError: true, displayMode: disp }); return null; }
  catch (e) { return e; }
}

let fail = 0;
for (const { f, disp, tag } of formule) {
  if (!f) continue;
  let e = compila(f, disp);
  if (e && /\\\\/.test(f)) { const g = f.replace(/\\\\/g, '\\'); if (!compila(g, disp)) e = null; }
  if (e) { fail++; console.log(`FAIL [${tag}] "${f.slice(0, 70)}" -> ${String(e.message).slice(0, 90)}`); }
}
console.log(`\nFormule testate: ${formule.length}  fallite: ${fail}`);
process.exit(fail > 0 ? 1 : 0);

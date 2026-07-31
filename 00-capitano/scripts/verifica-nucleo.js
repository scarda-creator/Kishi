/* verifica-nucleo.js — verificatore dei nuclei del percorso-matematica (Dedalo, 2026-07-20).
 * quiz_verifica.js e' per i QUIZ (POOLS/Q). I nuclei hanno TAPPE[] e le formule dentro i dati,
 * quindi serve un controllo diverso:
 *   1) SINTASSI JS degli script inline (vm.Script, non esegue) — becca le stringhe rotte
 *      (la pagina bianca nasce da li').
 *   2) KaTeX: estrae ogni $...$ e $$...$$ e prova katex.renderToString(throwOnError).
 * Uso:  node verifica-nucleo.js <file.html>
 */
const fs = require('fs');
const vm = require('vm');
let katex;
try { katex = require('katex'); } catch (e) { katex = null; }

const file = process.argv[2];
if (!file) { console.error('uso: node verifica-nucleo.js <file.html>'); process.exit(2); }
const html = fs.readFileSync(file, 'utf8');
const errs = [];

// 1) sintassi JS degli script inline (senza src)
const scripts = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1]);
let nScript = 0;
scripts.forEach((s, i) => {
  if (!s.trim()) return;
  nScript++;
  try { new vm.Script(s); }
  catch (e) { errs.push(`JS inline #${i + 1}: ${e.message.split('\n')[0]}`); }
});

// 2) KaTeX — estrai $$...$$ prima, poi $...$ (dal testo residuo)
const formulas = [];
let rest = html.replace(/\$\$([\s\S]+?)\$\$/g, (_, f) => { formulas.push(['$$', f]); return ' '; });
// inline: salta i frammenti con '\\' (a-capo) = quasi sempre un display mal-tagliato, non math inline
rest.replace(/\$([^$\n]+?)\$/g, (_, f) => { if (!f.includes('\\\\')) formulas.push(['$', f]); return ' '; });
let kfail = 0;
if (katex) {
  formulas.forEach(([d, f]) => {
    try { katex.renderToString(f, { throwOnError: true, displayMode: d === '$$' }); }
    catch (e) { kfail++; if (kfail <= 15) errs.push(`KaTeX «${f.slice(0, 55)}» -> ${e.message.split('\n')[0]}`); }
  });
}

console.log(`== verifica-nucleo == ${file.split(/[\\/]/).pop()}`);
console.log(`script inline: ${nScript} | formule KaTeX: ${formulas.length} ${katex ? `testate, ${kfail} fallite` : '(katex assente, non testate)'}`);
if (errs.length) {
  console.log(`\nERRORI (${errs.length}):`);
  errs.forEach(e => console.log('  x ' + e));
  console.log('\nRISULTATO: FAIL');
  process.exit(1);
}
console.log('RISULTATO: OK');

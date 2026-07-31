/* assembla-nucleo.js — monta un nucleo dal template + un file di contenuto.
 * Dedalo, 2026-07-21. Nasce dopo il nucleo 09: l'impalcatura (CSS, renderer, nav,
 * deep-link) è identica in tutti i nuclei, e ricopiarla a mano è il modo in cui
 * si propagano i difetti (il <title> di «Nucleo 04» finito in quattro nuclei).
 *
 * Uso:  node assembla-nucleo.js contenuti/11-olomorfe.js
 *
 * FORMATO del file di contenuto — un header JSON in commento, poi il corpo
 * dell'array TAPPE come TESTO (non viene eseguito qui: contiene R`...`, e
 * leggerlo come testo evita ogni problema di quoting):
 *
 *   /*META
 *   { "nn":"11", "file":"11-olomorfe.html", "titolo":"…", "nome":"…", "banner":"…" }
 *   META* /
 *   { num:'00', title:'…', meta:'…', blocchi:[ … ]},
 *   …
 *
 * La verifica (KaTeX + JS) resta un passo separato: verifica-katex-file.js.
 */
const fs = require('fs');
const path = require('path');

const src = process.argv[2];
if (!src) { console.error('uso: node assembla-nucleo.js <file-contenuto.js>'); process.exit(1); }

const dir = __dirname;
const raw = fs.readFileSync(path.resolve(src), 'utf8');
const m = raw.match(/\/\*META([\s\S]*?)META\*\//);
if (!m) { console.error('header /*META … META*/ non trovato in ' + src); process.exit(1); }

let C;
try { C = JSON.parse(m[1]); }
catch (e) { console.error('header META non è JSON valido: ' + e.message); process.exit(1); }
for (const k of ['nn', 'file', 'titolo', 'nome', 'banner']) {
  if (!C[k]) { console.error('manca il campo META: ' + k); process.exit(1); }
}
const tappe = raw.slice(m.index + m[0].length);

let out = fs.readFileSync(path.join(dir, '_template-nucleo.html'), 'utf8');
out = out.split('__TITLE__').join(C.titolo)
         .split('__BANNER__').join(C.banner)
         .split('__NOME__').join(C.nome)
         .split('__FILE__').join(C.file)
         .split('__NN__').join(C.nn)
         /* funzione come sostituto: altrimenti le sequenze $&, $', $` DENTRO la
            matematica verrebbero interpretate da String.replace come riferimenti
            al match (e il contenuto uscirebbe silenziosamente corrotto). */
         .replace('/*__TAPPE__*/', function(){ return tappe; });

const rimasti = (out.match(/__[A-Z]+__/g) || []);
if (rimasti.length) { console.error('placeholder non risolti: ' + rimasti.join(',')); process.exit(1); }

fs.writeFileSync(path.join(dir, C.file), out);
console.log('scritto ' + C.file + '  (' + out.length + ' byte)');

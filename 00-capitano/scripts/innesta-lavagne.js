/* innesta-lavagne.js — Dedalo, 2026-08-14
 *
 * Il quiz di Meccanica e' un monolite (451 item in un solo HTML), non ha i
 * frammenti come Metodi. Per aggiungerci lavagne senza che piu' Demiurghi si
 * pestino i piedi sullo stesso file, ognuno scrive il proprio frammento in
 * `banca-esercizi/lavagne-nuove/<nome>.js` come `LAV.<pool> = [ ... ]`, e questo
 * script li innesta uno per uno in coda al pool giusto.
 *
 * Garanzie, in quest'ordine:
 *   1. valuta ogni frammento in una sandbox — un frammento con la sintassi rotta
 *      si ferma qui e non tocca il monolite;
 *   2. copia di sicurezza del monolite prima di scrivere;
 *   3. rilegge il risultato e lo riesegue: se il file montato non gira, RIPRISTINA
 *      la copia. Il quiz e' l'unico accesso allo studio: non lo si lascia rotto.
 *   4. salta le lavagne il cui `topic` esiste gia' (rilanciarlo non duplica).
 *
 * Uso:  node innesta-lavagne.js [--prova]
 *       --prova: dice cosa farebbe, non scrive nulla.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const CASA = path.resolve(__dirname, '..', '..');
const QUIZ = path.join(CASA, '02-accademico', 'percorso-matematica', 'meccanica',
                       'Quiz_Meccanica_Orale_v1.html');
const FRAG = path.join(CASA, '02-accademico', 'corsi', 'meccanica', 'banca-esercizi', 'lavagne-nuove');
const PROVA = process.argv.includes('--prova');

/* --- lettura del monolite: la banca vive fra `const Q = {};` e `const TYPE_LABEL` --- */
function bancaDi(html) {
  const a = html.indexOf('const Q = {};');
  const b = html.indexOf('const TYPE_LABEL');
  if (a < 0 || b < 0) throw new Error('delimitatori della banca non trovati nel quiz');
  const sb = {};
  vm.createContext(sb);
  vm.runInContext(html.slice(a, b) + '\n;globalThis.__Q = Q;', sb);
  return sb.__Q;
}

/* --- serializzazione di una lavagna nello stile del file --- */
function serializza(o) {
  const s = v => JSON.stringify(v);   // gestisce escape e backslash come si deve
  return '\n{type:6, topic:' + s(o.topic) + ',\n q:' + s(o.q) + ',\n prov:' + s(o.prov) +
         ',\n model:' + s(o.model) + '},\n';
}

/* --- carica i frammenti --- */
if (!fs.existsSync(FRAG)) { console.log('nessuna cartella ' + FRAG); process.exit(0); }
const file = fs.readdirSync(FRAG).filter(f => f.endsWith('.js')).sort();
if (!file.length) { console.log('nessun frammento da innestare.'); process.exit(0); }

const LAV = {};
for (const f of file) {
  // Ogni frammento riceve un LAV VUOTO e poi si fonde: due frammenti che
  // dichiarassero lo stesso pool (`LAV.rigidi = [...]` in entrambi) si
  // sovrascriverebbero in silenzio se condividessero l'oggetto. Qui si sommano.
  const mio = {};
  const sb = { LAV: mio };
  vm.createContext(sb);
  try {
    vm.runInContext(fs.readFileSync(path.join(FRAG, f), 'utf8'), sb, { filename: f });
    for (const pool of Object.keys(mio)) {
      if (!Array.isArray(mio[pool])) { console.log('  ! ' + f + ': LAV.' + pool + ' non e un array, salto'); continue; }
      if (LAV[pool]) console.log('  ~ ' + pool + ' dichiarato anche altrove: sommo invece di sovrascrivere');
      LAV[pool] = (LAV[pool] || []).concat(mio[pool]);
    }
    console.log('  letto  ' + f);
  } catch (e) {
    console.log('  ROTTO  ' + f + ' — ' + e.message);
    console.log('\nInnesto annullato: nessun frammento entra finche\' uno non gira.');
    process.exit(1);
  }
}

/* --- innesto --- */
let html = fs.readFileSync(QUIZ, 'utf8');
const banca = bancaDi(html);
let messe = 0, saltate = 0;

for (const pool of Object.keys(LAV)) {
  if (!banca[pool]) { console.log('  ! pool inesistente nel quiz: ' + pool); continue; }
  const gia = new Set(banca[pool].map(q => (q.topic || '').trim().toLowerCase()));
  const inizio = html.indexOf('Q.' + pool + ' = [');
  if (inizio < 0) { console.log('  ! pool non trovato nel sorgente: ' + pool); continue; }
  // fine del pool: la prima riga `];` a inizio riga dopo l'apertura
  const fine = html.indexOf('\n];', inizio);
  if (fine < 0) { console.log('  ! chiusura del pool non trovata: ' + pool); continue; }
  let blocco = '';
  for (const lav of LAV[pool]) {
    if (gia.has((lav.topic || '').trim().toLowerCase())) {
      console.log('  = gia presente, salto: ' + lav.topic); saltate++; continue;
    }
    for (const campo of ['topic', 'q', 'prov', 'model']) {
      if (!lav[campo]) throw new Error('lavagna senza campo ' + campo + ' nel pool ' + pool);
    }
    blocco += serializza(lav);
    console.log('  + ' + pool.padEnd(13) + ' ' + lav.topic);
    messe++;
  }
  if (blocco) {
    // L'ultimo oggetto del pool puo' non avere la virgola dopo la graffa: senza
    // questo controllo il primo innesto produce `}\n{type:6...}` e il file non gira.
    const prima = html.slice(0, fine).replace(/\s+$/, '');
    const sep = /[}\]]$/.test(prima) ? ',' : '';
    html = prima + sep + '\n' + blocco + html.slice(fine);
  }
}

if (!messe) { console.log('\nNiente da innestare (' + saltate + ' gia presenti).'); process.exit(0); }
if (PROVA) { console.log('\n--prova: ' + messe + ' lavagne sarebbero entrate. Nulla scritto.'); process.exit(0); }

/* --- scrittura con rete di sicurezza --- */
const backup = QUIZ + '.pre-innesto.bak';
fs.copyFileSync(QUIZ, backup);
fs.writeFileSync(QUIZ, html, 'utf8');
try {
  const dopo = bancaDi(fs.readFileSync(QUIZ, 'utf8'));
  const n6 = Object.values(dopo).reduce((s, a) => s + a.filter(q => q.type === 6).length, 0);
  const ntot = Object.values(dopo).reduce((s, a) => s + a.length, 0);
  console.log('\nMontato: ' + ntot + ' domande, ' + n6 + ' lavagne. (+' + messe + ')');
  console.log('Copia di sicurezza: ' + path.basename(backup));
} catch (e) {
  fs.copyFileSync(backup, QUIZ);
  console.log('\nIL MONTATO NON GIRA (' + e.message + ') — quiz RIPRISTINATO dalla copia.');
  process.exit(1);
}

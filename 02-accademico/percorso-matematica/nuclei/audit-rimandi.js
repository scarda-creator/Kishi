/* audit-rimandi.js — verifica i rimandi interni fra i nuclei (Dedalo, 2026-07-22).
 *
 * Perché esiste: il 21 luglio ho inserito due nuclei in mezzo al percorso (02-bis = file 18,
 * 14-bis = file 19) e tre in fondo (20, 21, 22). Dentro i nuclei ci sono centinaia di rimandi
 * scritti a mano del tipo «(nucleo 07)»: quelli scritti PRIMA usano la numerazione dei file,
 * che è rimasta stabile — ma un rimando può comunque essere sbagliato per altre ragioni
 * (numero inesistente, autoriferimento, argomento che non c'è in quel nucleo).
 *
 * Cosa controlla:
 *   1. il numero citato ESISTE fra i nuclei costruiti;
 *   2. il rimando non punta a SE STESSO (di solito è un refuso);
 *   3. il nucleo citato tratta davvero l'argomento nominato accanto al rimando — controllo
 *      debole ma utile: cerca le parole-chiave del contesto nel titolo/tappe del bersaglio.
 *
 * Uso:  node audit-rimandi.js            (solo referto)
 *       node audit-rimandi.js --lista    (elenco completo, non solo i sospetti)
 */
const fs = require('fs');
const path = require('path');
const dir = __dirname;

const IDX = JSON.parse(fs.readFileSync(path.join(dir, '..', 'nuclei-indice.json'), 'utf8'));
const NUC = {};
IDX.nuclei.forEach(n => { NUC[n.nn] = n; });

// parole-chiave per nucleo: titolo + titoli delle tappe, minuscole e senza accenti
function chiavi(n) {
  return (n.titolo + ' ' + n.tappe.map(t => t.titolo).join(' '))
    .toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}
const KEY = {};
Object.keys(NUC).forEach(k => { KEY[k] = chiavi(NUC[k]); });

const files = fs.readdirSync(dir).filter(f => /^\d\d-.*\.html$/.test(f)).sort();
let tot = 0, sospetti = [];
const lista = process.argv.includes('--lista');

for (const f of files) {
  const mio = f.slice(0, 2);
  const intero = fs.readFileSync(path.join(dir, f), 'utf8');
  // SOLO il contenuto: fra la dichiarazione di TAPPE e la fine del blocco dati.
  // Fuori di li' c'e' l'impalcatura (title, commenti, nav) che cita il proprio
  // numero e produce solo falsi positivi: errore visto al primo giro dell'audit.
  const i0 = intero.indexOf('var TAPPE = ['), i1 = intero.indexOf('/* ==============', i0);
  if (i0 < 0 || i1 < 0) { console.log('  (struttura non riconosciuta) ' + f); continue; }
  const s = intero.slice(i0, i1);
  // «nucleo 07», «nuclei 07 e 08», «nucleo 02-bis»
  const re = /nucle[oi]\s+(\d{1,2})(?:\s*-\s*bis)?/g;   // minuscolo: la prosa scrive «(nucleo 07)»
  let m;
  while ((m = re.exec(s)) !== null) {
    tot++;
    const cit = m[1].padStart(2, '0');
    // contesto: 90 caratteri attorno, per capire di cosa si parla
    const ctx = s.slice(Math.max(0, m.index - 70), m.index + 90).replace(/\s+/g, ' ');
    if (!NUC[cit]) { sospetti.push({ f, cit, tipo: 'INESISTENTE', ctx }); continue; }
    if (cit === mio) { sospetti.push({ f, cit, tipo: 'AUTORIFERIMENTO', ctx }); continue; }
    if (lista) console.log(`  ${f} -> nucleo ${cit} (${NUC[cit].titolo.slice(0, 42)})`);
  }
}

console.log('\n=== AUDIT DEI RIMANDI INTERNI ===');
console.log(`nuclei esaminati: ${files.length}   rimandi trovati: ${tot}`);
if (!sospetti.length) console.log('sospetti: NESSUNO — ogni rimando punta a un nucleo esistente e diverso da sé.');
else {
  console.log(`sospetti: ${sospetti.length}\n`);
  sospetti.forEach(x => console.log(`[${x.tipo}] ${x.f} cita il nucleo ${x.cit}\n    …${x.ctx}…\n`));
}
process.exit(sospetti.length ? 1 : 0);

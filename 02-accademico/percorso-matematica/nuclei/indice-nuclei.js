/* indice-nuclei.js — costruisce nuclei-indice.json leggendo i nuclei stessi.
 * Uso: node indice-nuclei.js
 * L'app (percorso-app.html) legge quel file per sapere quali nuclei esistono,
 * quante tappe hanno e come si chiamano. Rigenerarlo dopo ogni nucleo nuovo.
 */
const fs = require('fs');
const path = require('path');
const dir = __dirname;

const MOVIMENTI = {
  '00': 1, '01': 1, '02': 1, '03': 1, '04': 1, '05': 1, '06': 1,
  '07': 2, '08': 2, '09': 2, '10': 2,
  '11': 3, '12': 3, '13': 3, '14': 3,
  '15': 4, '16': 4, '17': 4,
  '18': 1, '19': 3,
  '20': 6, '21': 6, '22': 6
};
// materiali che non sono nuclei ma entrano nell'app (stessa coda di ripasso)
// I titoli qui NON dichiarano numeri a memoria: li conta lo script sul file vero
// (vedi conta()). Fino al 12-08-2026 questa voce prometteva «457 domande e 103
// dimostrazioni» mentre il file ne aveva 451 e 34, e per giunta puntava a una
// cartella che dentro il percorso non esisteva: l'app apriva un link rotto.
function conta(rel) {
  try {
    const s = fs.readFileSync(path.join(dir, '..', rel), 'utf8');
    const dom = (s.match(/^\s*q\s*:/gm) || []).length;
    const lav = (s.match(/^\s*steps\s*:/gm) || []).length;
    // un'unità = un `src`. Il quiz montato è JSON compatto ("src":...), il
    // frammento sorgente è JS (src:...): il conteggio deve reggere entrambi.
    const uni = (s.match(/["']?src["']?\s*:/g) || []).length;
    return { dom, lav, uni };
  } catch (e) { return null; }
}
const MECC = conta('meccanica/Quiz_Meccanica_Orale_v1.html');
const AV   = conta('analisi-vettoriale/Quiz_AnalisiVettoriale_v1.html');
const MET  = conta('metodi/Quiz_MetodiModelli_v1.html');

const MATERIALI_ESTERNI = [
  { nn: '90', file: 'meccanica/Quiz_Meccanica_Orale_v1.html', mov: 5,
    titolo: MECC
      ? `Meccanica — ${MECC.dom} domande e ${MECC.lav} dimostrazioni per l’orale`
      : 'Meccanica — quiz per l’orale (file non trovato)',
    tappe: [
      {num:'01',titolo:'Grandezze e calcolo vettoriale'},{num:'02',titolo:'Cinematica del punto'},
      {num:'03',titolo:'Cinematica relativa'},{num:'04',titolo:'Principi della dinamica'},
      {num:'05',titolo:'Applicazioni della dinamica'},{num:'06',titolo:'Energia e lavoro'},
      {num:'07',titolo:'Dinamica dei sistemi'},{num:'08',titolo:'Corpi rigidi'},
      {num:'09',titolo:'Gravitazione'},{num:'10',titolo:'Fluidi'},{num:'11',titolo:'Onde'}
    ]},
  { nn: '89', file: 'analisi-vettoriale/Quiz_AnalisiVettoriale_v1.html', mov: 1,
    titolo: AV
      ? `Analisi Vettoriale — ${AV.uni} esercizi sui 10 tipi dello scritto`
      : 'Analisi Vettoriale — quiz dello scritto (file non trovato)',
    tappe: [
      {num:'01',titolo:'EDO e problema di Cauchy'},{num:'02',titolo:'Superfici: parametrizzazione, area, bordo'},
      {num:'03',titolo:'Curve e integrali di linea'},{num:'04',titolo:'Volume e flusso (Gauss)'},
      {num:'05',titolo:'Stokes e circuitazione'},{num:'06',titolo:'Ottimizzazione e Lagrange'},
      {num:'07',titolo:'Serie e successioni di funzioni'},{num:'08',titolo:'Campi conservativi'},
      {num:'09',titolo:'Differenziabilità con parametro'},{num:'10',titolo:'Funzioni implicite (Dini)'}
    ]},
  { nn: '91', file: 'metodi/Quiz_MetodiModelli_v1.html', mov: 4,
    titolo: MET && MET.uni
      ? `Metodi e Modelli — ${MET.uni} esercizi sugli 8 tipi che escono davvero`
      : 'Metodi e Modelli — quiz dello scritto (in costruzione)',
    tappe: [
      {num:'01',titolo:'Funzione di Green (sorgente regolare)'},{num:'02',titolo:'Green con δ e δ′'},
      {num:'03',titolo:'Funzioni polidrome: tagli e integrali'},{num:'04',titolo:'Funzioni di matrice (spettrale)'},
      {num:'05',titolo:'Fourier via residui'},{num:'06',titolo:'Integrali reali per contorno'},
      {num:'07',titolo:'Laurent, singolarità, residui'},{num:'08',titolo:'Operatori: autofunzioni e spettro'}
    ]}
];

const NOMI_MOV = {
  1: 'Calcolo multivariabile e vettoriale',
  2: 'Ponte: spazi di funzioni',
  3: 'Analisi complessa',
  4: 'Funzionale e Metodi applicati',
  5: 'Meccanica — orale di settembre',
  6: 'Ponte verso la tesi — dal moto alla termodinamica'
};

const out = [];
for (const f of fs.readdirSync(dir).sort()) {
  const m = f.match(/^(\d\d)-.*\.html$/);
  if (!m) continue;
  const nn = m[1];
  const s = fs.readFileSync(path.join(dir, f), 'utf8');
  // [\s\S] e non [^<]: alcuni banner contengono tag dentro il titolo (es. L<sup>p</sup>)
  const ban = s.match(/<div class="banner">[\s\S]*?Nucleo <b>([\s\S]*?)<\/b>/);
  const ENT = { '&mdash;': '—', '&ndash;': '–', '&laquo;': '«', '&raquo;': '»', '&amp;': '&',
                '&rsquo;': '’', '&nbsp;': ' ', '&#8319;': 'ⁿ', '&agrave;': 'à', '&egrave;': 'è' };
  const titolo = ban
    ? ban[1].replace(/<[^>]+>/g, '')
            .replace(/&[a-z]+;|&#\d+;/g, function (e) { return ENT[e] !== undefined ? ENT[e] : e; })
            .replace(/\s+/g, ' ').trim()
    : 'Nucleo ' + nn;
  const tappe = [];
  const re = /\{\s*num:'(\d\d)',\s*title:'((?:[^'\\]|\\.)*)'/g;
  let t;
  while ((t = re.exec(s)) !== null) tappe.push({ num: t[1], titolo: t[2].replace(/\\'/g, "'") });
  out.push({ nn, file: 'nuclei/' + f, titolo, mov: MOVIMENTI[nn] || 0, tappe });
}

for (const m of MATERIALI_ESTERNI) out.push(m);

const dati = { generato: new Date().toISOString().slice(0, 10), movimenti: NOMI_MOV, nuclei: out };
fs.writeFileSync(path.join(dir, '..', 'nuclei-indice.json'), JSON.stringify(dati, null, 1));
// versione .js: l'app deve poter girare anche aperta come FILE locale, dove fetch()
// di un .json e' bloccato dal browser. Uno <script> invece si carica sempre.
fs.writeFileSync(path.join(dir, '..', 'nuclei-indice.js'), 'window.PM_INDICE=' + JSON.stringify(dati) + ';\n');
console.log('nuclei-indice.json: ' + out.length + ' nuclei, ' +
  out.reduce((a, n) => a + n.tappe.length, 0) + ' tappe');

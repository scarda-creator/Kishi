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
const MATERIALI_ESTERNI = [
  { nn: '90', file: 'meccanica/Quiz_Meccanica_Orale_v1.html', mov: 5,
    titolo: 'Meccanica — 457 domande e 103 dimostrazioni per l’orale',
    tappe: [
      {num:'01',titolo:'Grandezze e calcolo vettoriale'},{num:'02',titolo:'Cinematica del punto'},
      {num:'03',titolo:'Cinematica relativa'},{num:'04',titolo:'Principi della dinamica'},
      {num:'05',titolo:'Applicazioni della dinamica'},{num:'06',titolo:'Energia e lavoro'},
      {num:'07',titolo:'Dinamica dei sistemi'},{num:'08',titolo:'Corpi rigidi'},
      {num:'09',titolo:'Gravitazione'},{num:'10',titolo:'Fluidi'},{num:'11',titolo:'Onde'}
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

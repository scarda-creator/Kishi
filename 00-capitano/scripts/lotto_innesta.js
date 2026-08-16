#!/usr/bin/env node
"use strict";
/*
 * lotto_innesta.js — innesta un lotto nuovo in coda a un frammento-pool esistente.
 *
 * Perche' esiste (Mnemosyne, 2026-08-16). Un frammento maturo pesa 150 KB. Far
 * riscrivere quel file a un Demiurgo per aggiungerci venti unita' costa piu' token
 * della produzione stessa, e mette a rischio le unita' gia' buone. Quindi il
 * Demiurgo scrive SOLO le unita' nuove in un file di stazionamento, e questo
 * script le innesta.
 *
 * L'innesto e' TESTUALE, non un round-trip JSON: i commenti del frammento (che
 * documentano quali coefficienti sono stati ricalcolati) sopravvivono. Il file
 * viene poi eseguito in una vm per validarlo; se non gira, si ripristina il
 * backup e si esce con rc=1. Un innesto o riesce o non e' avvenuto.
 *
 * Uso:
 *   node lotto_innesta.js <frags-dir>/<pool>.js <staging>/<pool>-lotto.js
 *   node lotto_innesta.js ... --dry        non scrive, dice solo cosa farebbe
 */
const fs = require("fs"), vm = require("vm"), path = require("path");

const argv = process.argv.slice(2).filter(a => a !== "--dry");
const DRY = process.argv.includes("--dry");
const [fragPath, lottoPath] = argv;
if (!fragPath || !lottoPath) {
  console.error("Uso: node lotto_innesta.js <frag.js> <lotto.js> [--dry]");
  process.exit(2);
}
for (const p of [fragPath, lottoPath]) {
  if (!fs.existsSync(p)) { console.error("Non trovato: " + p); process.exit(2); }
}

const pool = path.basename(fragPath, ".js");

// --- conta le unita' di un sorgente eseguendolo (la sola misura che non mente) ---
function unita(testo, id, etichetta) {
  const c = { Q: {}, Math, JSON, console: { log() {} } };
  vm.createContext(c);
  try { new vm.Script(testo).runInContext(c); }
  catch (e) { console.error("SINTASSI ROTTA in " + etichetta + ": " + e.message.split("\n")[0]); process.exit(1); }
  const arr = c.Q[id];
  if (!Array.isArray(arr)) {
    const chiavi = Object.keys(c.Q);
    console.error(etichetta + ": non definisce Q." + id + " come array. Chiavi trovate: " +
      (chiavi.length ? chiavi.join(", ") : "(nessuna)"));
    process.exit(1);
  }
  return arr;
}

const fragTesto = fs.readFileSync(fragPath, "utf8");
const lottoTesto = fs.readFileSync(lottoPath, "utf8");
const prima = unita(fragTesto, pool, path.basename(fragPath));
const nuove = unita(lottoTesto, pool, path.basename(lottoPath));

/* --- maschera del codice ---------------------------------------------------
 * Cercare `Q.<pool>` con un indexOf crudo inciampa nel commento di testata: il
 * brief chiede al Demiurgo di scrivere in testa da dove vengono le unita', e se
 * quel commento nomina `Q.edp = [ ... ]` il ritaglio parte dalla parentesi
 * sbagliata. L'innesto se ne accorgeva (fallisce chiuso, non corrompe) ma
 * diceva "sintassi rotta", mandando chi legge a cercare l'errore dove non e'.
 * Qui si costruisce una copia lunga uguale in cui commenti e stringhe sono
 * spazi: gli indici restano validi sull'originale, ma le ricerche vedono solo
 * codice. (Dedalo, 16-08) */
function mascheraCodice(s) {
  const m = s.split("");
  let i = 0;
  while (i < s.length) {
    const c = s[i], d = s[i + 1];
    if (c === "/" && d === "*") {
      const fine = s.indexOf("*/", i + 2);
      const stop = fine < 0 ? s.length : fine + 2;
      for (let k = i; k < stop; k++) if (m[k] !== "\n") m[k] = " ";
      i = stop; continue;
    }
    if (c === "/" && d === "/") {
      let stop = s.indexOf("\n", i); if (stop < 0) stop = s.length;
      for (let k = i; k < stop; k++) m[k] = " ";
      i = stop; continue;
    }
    if (c === '"' || c === "'" || c === "`") {
      let k = i + 1;
      while (k < s.length) {
        if (s[k] === "\\") { k += 2; continue; }
        if (s[k] === c) break;
        k++;
      }
      for (let j = i; j <= Math.min(k, s.length - 1); j++) if (m[j] !== "\n") m[j] = " ";
      i = k + 1; continue;
    }
    i++;
  }
  return m.join("");
}

// --- ritaglia dal lotto il solo contenuto dell'array ---
const mask = mascheraCodice(lottoTesto);
const iQ = mask.indexOf("Q." + pool);
if (iQ < 0) {
  console.error("Il lotto non contiene l'assegnazione Q." + pool + " fuori dai commenti.\n" +
    "Il nome dentro Q.<nome> deve coincidere col frammento di destinazione (" + pool + ").");
  process.exit(1);
}
const apre = mask.indexOf("[", iQ);
if (apre < 0) { console.error("Nessuna quadra aperta dopo Q." + pool + "."); process.exit(1); }
// quadra bilanciata, contata sulla maschera: le quadre dentro le formule LaTeX
// (che sono stringhe) non contano.
let liv = 0, chiude = -1;
for (let k = apre; k < mask.length; k++) {
  if (mask[k] === "[") liv++;
  else if (mask[k] === "]") { liv--; if (liv === 0) { chiude = k; break; } }
}
if (chiude < 0) { console.error("Quadra dell'array mai chiusa nel lotto."); process.exit(1); }

/* --- idempotenza -----------------------------------------------------------
 * Il file di stazionamento e' CUMULATIVO: quando si richiama un Demiurgo per un
 * rincalzo, lui aggiunge in coda allo stesso file, che quindi ricontiene le
 * unita' gia' innestate. Ricucirlo tutto le duplica — successo il 16 agosto su
 * `edo`, 49+20=69 con diciassette doppioni, salvato solo dal backup.
 * La cura non e' ricordarsi di tagliare a mano: e' che l'innesto riconosca cio'
 * che ha gia' dentro e lo salti. Firma di un'unita': provenienza + apertura
 * della prima domanda. (Dedalo, 16-08) */
function firma(u) {
  const t = (u && u.steps && u.steps[0] && u.steps[0].t) || "";
  return ((u && u.src) || "") + " || " + t.replace(/\s+/g, " ").slice(0, 140);
}

// spezza il corpo dell'array nei suoi elementi di primo livello, usando la
// maschera (le graffe dentro le stringhe LaTeX non contano)
function elementi(testo, maskTesto, da, a) {
  const fuori = [];
  let liv = 0, inizio = da;
  for (let k = da; k < a; k++) {
    const c = maskTesto[k];
    if (c === "{" || c === "[" || c === "(") liv++;
    else if (c === "}" || c === "]" || c === ")") liv--;
    else if (c === "," && liv === 0) { fuori.push(testo.slice(inizio, k)); inizio = k + 1; }
  }
  const ultimo = testo.slice(inizio, a);
  if (ultimo.trim()) fuori.push(ultimo);
  return fuori;
}

const pezzi = elementi(lottoTesto, mask, apre + 1, chiude);
if (pezzi.length !== nuove.length) {
  console.error("Non riesco ad allineare il testo alle unita' (" + pezzi.length +
    " blocchi contro " + nuove.length + " unita' eseguite). Innesto annullato.");
  process.exit(1);
}
const gia = new Set(prima.map(firma));
const tieni = [];
let saltate = 0;
pezzi.forEach((p, i) => {
  if (gia.has(firma(nuove[i]))) saltate++;
  else tieni.push(p.trim().replace(/,$/, ""));
});
if (saltate) console.log("gia' presenti, saltate: " + saltate + " unita'");
if (!tieni.length) {
  console.log(pool.padEnd(12) + "niente da innestare: tutte le " + nuove.length +
    " unita' del lotto sono gia' nel frammento (" + prima.length + " totali).");
  process.exit(0);
}
let corpo = tieni.join(",\n\n  ");
// il commento di testata del lotto (prima di Q.<pool>) va conservato: dice da dove
// vengono le unita' e cosa e' stato ricalcolato.
const testata = lottoTesto.slice(0, iQ).trim();

// --- punto d'innesto nel frammento: l'ultima quadra chiusa CHE SIA CODICE ---
// (stessa ragione di sopra: un commento in coda che contiene "]" sposterebbe il
// taglio dentro la prosa)
const fine = mascheraCodice(fragTesto).lastIndexOf("]");
if (fine < 0) { console.error("Frammento senza array."); process.exit(1); }
let testa = fragTesto.slice(0, fine).replace(/\s+$/, "");
if (!testa.endsWith(",")) testa += ",";
const coda = fragTesto.slice(fine);

const marcatore = "\n\n  /* ===== lotto innestato il " +
  new Date().toISOString().slice(0, 10) + " — " + tieni.length + " unita' =====\n" +
  (testata ? testata.replace(/^\/\*|\*\/$/g, "").trim() + "\n" : "") + "  ===== */\n\n";

const fuso = testa + marcatore + "  " + corpo + "\n" + coda;

// --- validazione prima di toccare il disco ---
const dopo = unita(fuso, pool, "risultato dell'innesto");
if (dopo.length !== prima.length + tieni.length) {
  console.error("CONTEGGIO INCOERENTE: " + prima.length + " + " + tieni.length +
    " != " + dopo.length + ". Innesto annullato.");
  process.exit(1);
}

console.log(pool.padEnd(12) + prima.length + " + " + tieni.length + " = " + dopo.length + " unita'");
if (DRY) { console.log("--dry: nulla scritto."); process.exit(0); }

// Backup fuori dalla cartella dei frammenti, e datato: un `.bak` fisso accanto al
// frammento si sovrascrive al secondo innesto (perdendo lo stato buono precedente)
// e sporca la cartella che quiz_assembla e coperture.py scandiscono.
// Ancorato a __dirname (00-capitano/scripts), non risalendo dal frammento: la
// risalita a tentoni si rompe appena una materia sta a una profondita' diversa.
const dirBak = path.join(__dirname, "..", "lotti", "backup");
fs.mkdirSync(dirBak, { recursive: true });
const stampa = new Date().toISOString().replace(/[-:T]/g, "").slice(0, 14);
const bak = path.join(dirBak, pool + "-" + stampa + ".js");
fs.writeFileSync(bak, fragTesto);
fs.writeFileSync(fragPath, fuso);
console.log("innestato -> " + fragPath);
console.log("backup    -> " + bak);

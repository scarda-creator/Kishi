#!/usr/bin/env node
"use strict";
/*
 * quiz_verifica.js — verifica automatica dei quiz della navicella.
 *
 * Perche' esiste: ogni quiz e' un HTML con motore JS + dati (POOLS, Q) + formule
 * KaTeX. Verificarlo a mano (sintassi, integrita' dati, formule) e' lento e
 * fragile. Questo script fa tutto in un colpo e restituisce un exit code:
 *   0 = PASS, 1 = FAIL. Adatto a un check pre-deploy.
 *
 * Cosa controlla:
 *   1. Sintassi JS di tutti gli <script> inline (vm.Script, non esegue il DOM).
 *   2. Integrita' dati: POOLS ben formato; ogni pool status:'full' e' non vuoto;
 *      ogni step ha >=2 opzioni ed ESATTAMENTE una corretta (c:true).
 *   3. Delimitatori $ bilanciati in ogni campo di testo.
 *   4. Ogni formula LaTeX ($...$ e $$...$$) parsa senza errori KaTeX.
 *
 * Uso:
 *   node 00-capitano/scripts/quiz_verifica.js <percorso-quiz.html>
 *   opzioni: --min N  (minimo domande per pool 'full', default 3)
 *
 * KaTeX: se manca, viene installato in automatico in scripts/node_modules.
 */

const path = require("path");
const cp = require("child_process");
const SCRIPT_DIR = __dirname;

// --- KaTeX va richiesto PER PRIMO (evita un glitch di load dell'UMD in node) ---
function loadKatex() {
  try { return require("katex"); }
  catch (e) {
    process.stderr.write("[setup] KaTeX assente: installo katex@0.16.9 in " + SCRIPT_DIR + " ...\n");
    cp.execSync("npm install katex@0.16.9 --no-save --no-audit --no-fund --silent", { cwd: SCRIPT_DIR, stdio: "inherit" });
    return require(path.join(SCRIPT_DIR, "node_modules", "katex"));
  }
}
const katex = loadKatex();
const fs = require("fs");
const vm = require("vm");

// ---------------------------------------------------------------- args
const args = process.argv.slice(2);
let file = null, minPerPool = 3;
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--min") { minPerPool = parseInt(args[++i], 10) || 3; }
  else if (!file) { file = args[i]; }
}
if (!file) { console.error("Uso: node quiz_verifica.js <quiz.html> [--min N]"); process.exit(2); }
if (!fs.existsSync(file)) { console.error("File non trovato: " + file); process.exit(2); }

const html = fs.readFileSync(file, "utf8");
const errors = [];
const warns = [];
function err(m) { errors.push(m); }
function warn(m) { warns.push(m); }

// ---------------------------------------------------------------- 1. inline JS
const reScript = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi;
let m, code = "", nScripts = 0;
while ((m = reScript.exec(html))) {
  nScripts++;
  try { new vm.Script(m[1], { filename: "inline" + nScripts + ".js" }); }
  catch (e) { err("Sintassi JS script #" + nScripts + ": " + e.message.split("\n")[0]); }
  code += "\n;" + m[1];
}
if (nScripts === 0) err("Nessuno <script> inline trovato.");

// ---------------------------------------------------------------- 2. run + dati
let POOLS = null, Q = null;
if (errors.length === 0) {
  const noop = function () {};
  const el = new Proxy({}, { get: (t, p) => {
    if (p === "style") return {};
    if (p === "classList") return { add: noop, remove: noop, toggle: noop, contains: () => false };
    if (["appendChild", "addEventListener", "setAttribute", "removeAttribute", "focus", "scrollIntoView", "scrollTo"].includes(p)) return noop;
    if (["innerHTML", "textContent", "value"].includes(p)) return "";
    return el;
  }, set: () => true });
  const document = { getElementById: () => el, querySelector: () => el, querySelectorAll: () => [], createElement: () => el, addEventListener: noop, body: el, documentElement: el };
  const ctx = { document, console, Math, JSON, Object, Array, setTimeout: noop, renderMathInElement: noop, addEventListener: noop, scrollTo: noop };
  ctx.window = ctx;
  try {
    vm.createContext(ctx);
    new vm.Script(code).runInContext(ctx);
    POOLS = ctx.POOLS; Q = ctx.Q;
  } catch (e) { err("Errore di esecuzione JS: " + e.message.split("\n")[0]); }
}

// ---------------------------------------------------------------- 3. schema
let nUnits = 0, nSteps = 0, nOpts = 0;
function mathSegs(s) {
  const out = []; if (!s) return out;
  const re = /\$\$([\s\S]+?)\$\$|\$([^$]+?)\$/g; let mm;
  while ((mm = re.exec(s))) out.push([mm[1] !== undefined, mm[1] !== undefined ? mm[1] : mm[2]]);
  return out;
}
let nFormulas = 0, nMathFail = 0;
function checkText(where, s) {
  if (!s) return;
  if (((s.match(/\$/g) || []).length) % 2) err(where + ": delimitatori $ dispari (sbilanciati).");
  for (const [disp, tex] of mathSegs(s)) {
    nFormulas++;
    try { katex.renderToString(tex, { displayMode: disp, throwOnError: true, strict: false }); }
    catch (e) { nMathFail++; err(where + ": LaTeX non valido  $" + tex.slice(0, 60) + "$  -> " + e.message.split("\n")[0]); }
  }
}

if (Array.isArray(POOLS) && Q && typeof Q === "object") {
  const ids = new Set();
  for (const p of POOLS) {
    if (!p || !p.id) { err("POOLS: elemento senza id."); continue; }
    if (ids.has(p.id)) err("POOLS: id duplicato '" + p.id + "'.");
    ids.add(p.id);
    checkText("POOLS['" + p.id + "'].name", p.name);
    const arr = Q[p.id] || [];
    if (p.status === "full" && arr.length < minPerPool)
      err("Pool '" + p.id + "' e' 'full' ma ha " + arr.length + " domande (min " + minPerPool + ").");
    if (p.status !== "full" && arr.length > 0)
      warn("Pool '" + p.id + "' e' '" + p.status + "' ma ha gia' " + arr.length + " domande: promuovilo a 'full'?");
    for (const u of arr) {
      nUnits++;
      const steps = u.steps || [];
      if (steps.length === 0) err("Pool '" + p.id + "': unit senza steps (src=" + (u.src || "?") + ").");
      for (let si = 0; si < steps.length; si++) {
        const st = steps[si]; nSteps++;
        const tag = "Pool '" + p.id + "' unit " + nUnits + " step " + (si + 1);
        const opts = st.opts || [];
        nOpts += opts.length;
        if (opts.length < 2) err(tag + ": <2 opzioni.");
        const nC = opts.filter(o => o && o.c).length;
        if (nC !== 1) err(tag + ": opzioni corrette = " + nC + " (deve essere 1).");
        checkText(tag + ".t", st.t);
        checkText(tag + ".hint", st.hint);
        checkText(tag + ".sol", st.sol);
        opts.forEach((o, oi) => checkText(tag + ".opt" + (oi + 1), o && o.x));
      }
    }
  }
  // chiavi di Q senza pool dichiarato
  for (const k of Object.keys(Q)) if (!ids.has(k)) warn("Q ha la chiave '" + k + "' non presente in POOLS.");
} else if (errors.length === 0) {
  err("POOLS o Q non definiti/estraibili dallo script.");
}

// ---------------------------------------------------------------- report
const katexInHead = /katex(@[\d.]+)?\/dist\/katex\.min\.(css|js)/.test(html) || /renderMathInElement/.test(html);
console.log("== quiz_verifica ==  " + path.basename(file));
console.log("script inline: " + nScripts + " | pool: " + (POOLS ? POOLS.length : "?") +
            " | domande(unit): " + nUnits + " | step: " + nSteps + " | opzioni: " + nOpts);
console.log("formule KaTeX: " + nFormulas + " testate, " + nMathFail + " fallite | KaTeX collegato: " + (katexInHead ? "si" : "NO"));
if (!katexInHead) warn("KaTeX non sembra incluso nell'<head>: le formule non verranno renderizzate nel browser.");
if (warns.length) { console.log("\nAVVISI (" + warns.length + "):"); warns.forEach(w => console.log("  ~ " + w)); }
if (errors.length) {
  console.log("\nERRORI (" + errors.length + "):");
  errors.slice(0, 50).forEach(e => console.log("  x " + e));
  if (errors.length > 50) console.log("  ... e altri " + (errors.length - 50));
  console.log("\nRISULTATO: FAIL");
  process.exit(1);
}
console.log("\nRISULTATO: PASS");
process.exit(0);

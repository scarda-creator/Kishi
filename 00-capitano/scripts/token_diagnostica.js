#!/usr/bin/env node
"use strict";
/*
 * token_diagnostica.js — misura dove la navicella brucia token.
 *
 * Apparato A (metabolismo), passo zero: non si ottimizza al buio. Legge i
 * transcript JSONL locali di Claude Code (nessun dato esce dalla macchina) e
 * aggrega il consumo per MODELLO, per SESSIONE e per SUB-AGENTE. Serve a
 * decidere cosa delegare a modelli economici/locali (router, ask-local).
 *
 * Uso:
 *   node 00-capitano/scripts/token_diagnostica.js [projectDir] [--top N]
 * Default projectDir: ~/.claude/projects/C--Users-ACER-Desktop-AgentsAI
 */
const fs = require("fs");
const path = require("path");
const os = require("os");

const args = process.argv.slice(2);
let dir = null, top = 12;
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--top") top = parseInt(args[++i], 10) || 12;
  else if (!dir) dir = args[i];
}
if (!dir) dir = path.join(os.homedir(), ".claude", "projects", "C--Users-ACER-Desktop-AgentsAI");
if (!fs.existsSync(dir)) { console.error("Cartella progetti non trovata: " + dir); process.exit(2); }

function walk(d, out) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith(".jsonl")) out.push(p);
  }
  return out;
}
const files = walk(dir, []);

function blank() { return { in: 0, out: 0, cacheW: 0, cacheR: 0, msgs: 0 }; }
function add(acc, u) {
  acc.in += u.input_tokens || 0;
  acc.out += u.output_tokens || 0;
  acc.cacheW += u.cache_creation_input_tokens || 0;
  acc.cacheR += u.cache_read_input_tokens || 0;
  acc.msgs += 1;
}
const byModel = {}, bySession = {}, byKind = { main: blank(), subagent: blank() };
let total = blank(), lines = 0, parsed = 0;

for (const f of files) {
  const isSub = f.includes(path.sep + "subagents" + path.sep);
  const sessionId = path.basename(f, ".jsonl");
  let data;
  try { data = fs.readFileSync(f, "utf8"); } catch (e) { continue; }
  for (const line of data.split("\n")) {
    if (!line.trim()) continue;
    lines++;
    let o; try { o = JSON.parse(line); } catch (e) { continue; }
    const msg = o.message || o;
    const u = msg && msg.usage;
    if (!u) continue;
    parsed++;
    const model = (msg.model || o.model || "sconosciuto").replace(/^claude-/, "");
    (byModel[model] = byModel[model] || blank());
    add(byModel[model], u);
    (bySession[sessionId] = bySession[sessionId] || blank());
    add(bySession[sessionId], u);
    add(byKind[isSub ? "subagent" : "main"], u);
    add(total, u);
  }
}

function fmt(n) { return n.toLocaleString("it-IT"); }
function billable(a) { return a.in + a.out + a.cacheW; } // cache-read è scontato ~90%
function line(name, a, w) {
  console.log("  " + String(name).padEnd(w) +
    " out:" + fmt(a.out).padStart(11) +
    "  in:" + fmt(a.in).padStart(11) +
    "  cacheR:" + fmt(a.cacheR).padStart(12) +
    "  msg:" + fmt(a.msgs).padStart(6));
}

console.log("== token_diagnostica ==  " + files.length + " file JSONL · " + fmt(lines) + " righe · " + fmt(parsed) + " messaggi con usage\n");
console.log("PER MODELLO (chi genera, e quindi chi pesa sul limite):");
const models = Object.entries(byModel).sort((a, b) => billable(b[1]) - billable(a[1]));
for (const [m, a] of models) line(m, a, 26);

console.log("\nMAIN vs SUB-AGENTI:");
line("main (Mnemosyne/Dedalo)", byKind.main, 26);
line("sub-agenti (Demiurgo/…)", byKind.subagent, 26);

console.log("\nTOP " + top + " SESSIONI per token di output:");
const sess = Object.entries(bySession).sort((a, b) => b[1].out - a[1].out).slice(0, top);
for (const [s, a] of sess) line(s.slice(0, 22), a, 26);

console.log("\nTOTALE:");
line("tutto", total, 26);
const cr = total.cacheR, base = total.in + total.cacheR;
console.log("\nCache-read: " + fmt(cr) + " token letti da cache (" +
  (base ? Math.round(100 * cr / base) : 0) + "% dell'input totale) — già scontati, è la parte sana.");
console.log("Segnale per l'apparato A: l'output degli Opus è la voce che pesa di più sul limite; è lì che il routing verso modelli economici/locali produce il risparmio maggiore.");

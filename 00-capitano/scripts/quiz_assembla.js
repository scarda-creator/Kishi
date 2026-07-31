#!/usr/bin/env node
"use strict";
/*
 * quiz_assembla.js — assembla un quiz della navicella dai suoi frammenti-pool.
 *
 * Architettura a frammenti: ogni pool vive in <frags-dir>/<id>.js come
 *   Q.<id> = [ ...unità... ];
 * (fonte di verità). Questo script fonde i frammenti dentro l'HTML del quiz,
 * che diventa l'artefatto assemblato. Robusto: esegue lo script del quiz per
 * leggere POOLS/Q, sovrascrive i pool con i frammenti trovati, e riemette la
 * zona-dati come JSON (round-trip esecuzione→JSON: i backslash LaTeX e gli
 * helper eventuali vengono risolti a stringhe corrette).
 *
 * Uso:
 *   node 00-capitano/scripts/quiz_assembla.js <quiz.html> <frags-dir> [--min N]
 * Poi verificare sempre con quiz_verifica.js.
 *
 * Regole:
 *   - Un frammento con < N unità (default 8) viene SCARTATO (probabile v1 di
 *     collaudo o build fallito a metà): il pool resta come nell'HTML.
 *   - I pool con frammento valido passano a status 'full'.
 *   - Helper eventuali usati nei dati (es. M(), V() del quiz Geometria) sono
 *     stubbabili: qui M/V ritornano il loro output se definiti nello script;
 *     se il quiz li definisce, vengono eseguiti nativamente.
 */
const fs=require("fs"), vm=require("vm"), path=require("path");

const args=process.argv.slice(2);
let quiz=null, fragsDir=null, min=8;
for(let i=0;i<args.length;i++){
  if(args[i]==="--min"){ min=parseInt(args[++i],10)||8; }
  else if(!quiz){ quiz=args[i]; }
  else if(!fragsDir){ fragsDir=args[i]; }
}
if(!quiz||!fragsDir){ console.error("Uso: node quiz_assembla.js <quiz.html> <frags-dir> [--min N]"); process.exit(2); }
if(!fs.existsSync(quiz)){ console.error("Quiz non trovato: "+quiz); process.exit(2); }
if(!fs.existsSync(fragsDir)){ console.error("Cartella frammenti non trovata: "+fragsDir); process.exit(2); }

// --- DOM stub per eseguire lo script del quiz ---
const noop=function(){};
const el=new Proxy({},{get:(t,p)=>{ if(p==="style")return {}; if(p==="classList")return {add:noop,remove:noop,toggle:noop,contains:()=>false}; if(["appendChild","addEventListener","setAttribute","removeAttribute"].includes(p))return noop; if(["innerHTML","textContent","value"].includes(p))return ""; return el; }, set:()=>true});
const document={getElementById:()=>el,querySelector:()=>el,querySelectorAll:()=>[],createElement:()=>el,addEventListener:noop,body:el,documentElement:el};
function freshCtx(){ const c={document,console,Math,JSON,Object,Array,setTimeout:noop,renderMathInElement:noop,addEventListener:noop,scrollTo:noop}; c.window=c; return c; }

const html=fs.readFileSync(quiz,"utf8");
const m=html.match(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/i);
if(!m){ console.error("Nessuno <script> inline nel quiz."); process.exit(2); }
const ctx=freshCtx(); vm.createContext(ctx); new vm.Script(m[1]).runInContext(ctx);
const POOLS=ctx.POOLS, Q=ctx.Q;
if(!Array.isArray(POOLS)||!Q){ console.error("POOLS/Q non estraibili dal quiz."); process.exit(2); }

// --- carica i frammenti ---
const frags=fs.readdirSync(fragsDir).filter(f=>f.endsWith(".js"));
for(const f of frags){
  const id=path.basename(f,".js");
  try{
    const t=fs.readFileSync(path.join(fragsDir,f),"utf8");
    const c=freshCtx(); c.Q={}; c.M=ctx.M; c.V=ctx.V; // eredita eventuali helper
    vm.createContext(c); new vm.Script(t).runInContext(c);
    const arr=c.Q[id];
    if(Array.isArray(arr) && arr.length>=min){ Q[id]=arr; console.log("frag OK       "+id.padEnd(13)+arr.length+" unità"); }
    else { console.log("frag SCARTATO "+id.padEnd(13)+"("+(Array.isArray(arr)?arr.length+" < min "+min:"array assente")+")"); }
  }catch(e){ console.log("frag ERRORE   "+id.padEnd(13)+e.message.split("\n")[0]); }
}

// pool con dati → 'full'
POOLS.forEach(p=>{ if((Q[p.id]||[]).length>0) p.status="full"; });
let tot=0; POOLS.forEach(p=>tot+=(Q[p.id]||[]).length);
console.log("TOTALE unità: "+tot+" su "+POOLS.length+" pool");

// --- riassembla la zona-dati ---
const iP=html.indexOf("var POOLS = [");
const iEng=html.indexOf("var S = {");
if(iP<0||iEng<0){ console.error("Ancore zona-dati non trovate (var POOLS = [ ... var S = {). Assemblaggio annullato."); process.exit(3); }
const head=html.slice(0,iP);
const tail=html.slice(iEng);
const dataZone="var POOLS = "+JSON.stringify(POOLS,null,1)+";\n\nvar Q = "+JSON.stringify(Q)+";\n\n";
const out=head+dataZone+"/* ===== ENGINE ===== */\n"+tail;
fs.writeFileSync(quiz,out);
console.log("assemblato: "+out.length+" bytes -> "+quiz);
console.log("Ora verifica: node 00-capitano/scripts/quiz_verifica.js \""+quiz+"\"");

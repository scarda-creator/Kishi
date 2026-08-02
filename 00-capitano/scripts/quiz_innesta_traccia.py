#!/usr/bin/env python
"""quiz_innesta_traccia.py — innesta il tracciamento delle risposte in un quiz gia' pubblicato.

Accensione, 2026-07-31. Il template ora traccia; i quiz gia' su GitHub Pages sono file
HTML autonomi e vanno innestati uno per uno. Questo script lo fa in modo idempotente,
cosi' vale anche per i quiz futuri nati prima della patch.

Riconosce due famiglie di motore:
  - "template"  — il motore di `00-capitano/templates/quiz-template.html`
                  (funzione `answer(btn, opt, st)`, stato in `S`)
  - "meccanica" — il motore a 6 tipi di domanda di Quiz_Meccanica_Orale_v1
                  (stato in `state`, avanzamento via `nextQ()`/`finish()`)

Nella famiglia "meccanica" il punto d'aggancio e' uno solo — l'avanzamento — e l'esito si
deduce dalla variazione di `state.correctCount`. Cosi' tutti e sei i tipi di domanda sono
coperti senza toccare sei renderer diversi.

Uso:
  python quiz_innesta_traccia.py <file.html> [altri.html ...]
  python quiz_innesta_traccia.py --tutti          # tutti i Quiz_*.html di 02-accademico
  python quiz_innesta_traccia.py --verifica <f>   # dice solo cosa farebbe
"""
import io
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
NAV = os.path.abspath(os.path.join(HERE, "..", ".."))

MARCA = "/* TRACCIA innestata"

BLOCCO = r"""
%s (quiz_innesta_traccia.py) — il quiz ricorda le risposte. */
var TRACCIA = (function(){
  var CHIAVE = 'navicella.quiz.attempts.v1';
  var attivo = true;
  try { window.localStorage.setItem('__t','1'); window.localStorage.removeItem('__t'); }
  catch(e){ attivo = false; }
  function leggi(){
    if(!attivo) return [];
    try { return JSON.parse(window.localStorage.getItem(CHIAVE)||'[]'); } catch(e){ return []; }
  }
  function scrivi(a){
    if(!attivo) return;
    try { window.localStorage.setItem(CHIAVE, JSON.stringify(a)); } catch(e){}
  }
  function registra(rec){
    if(!attivo) return;
    var a = leggi();
    rec.ts = new Date().toISOString();
    rec.corso = (document.title||'').trim();
    a.push(rec);
    if(a.length > 5000) a = a.slice(-5000);
    scrivi(a);
    aggiornaBottone();
  }
  function esporta(){
    var a = leggi(); if(!a.length) return;
    var jsonl = a.map(function(r){ return JSON.stringify(r); }).join('\n')+'\n';
    var url = URL.createObjectURL(new Blob([jsonl], {type:'application/x-ndjson'}));
    var nome = 'quiz-attempts-'+(document.title||'quiz').replace(/[^A-Za-z0-9]+/g,'-')
             + '-' + new Date().toISOString().slice(0,10) + '.jsonl';
    var el = document.createElement('a');
    el.href = url; el.download = nome; document.body.appendChild(el); el.click();
    document.body.removeChild(el); URL.revokeObjectURL(url);
  }
  function svuota(){
    if(!confirm('Cancellare i tentativi salvati in questo browser?')) return;
    scrivi([]); aggiornaBottone();
  }
  function aggiornaBottone(){
    var b = document.getElementById('tracciaBtn'); var n = leggi().length;
    if(!b){
      if(!n) return;
      b = document.createElement('div'); b.id='tracciaBtn';
      b.style.cssText='position:fixed;right:14px;bottom:14px;z-index:9999;'
        +'font:600 13px/1.2 system-ui,sans-serif;display:flex;gap:6px;align-items:center;'
        +'background:#1f2937;color:#fff;padding:8px 12px;border-radius:10px;'
        +'box-shadow:0 2px 10px rgba(0,0,0,.25);cursor:pointer;opacity:.92';
      b.title='Scarica i tentativi come .jsonl da consegnare alla navicella';
      b.onclick=esporta; document.body.appendChild(b);
      var x=document.createElement('span'); x.textContent='×';
      x.style.cssText='margin-left:6px;opacity:.6;padding:0 3px'; x.title='Svuota';
      x.onclick=function(ev){ ev.stopPropagation(); svuota(); };
      b.appendChild(x);
    }
    if(!n){ b.remove(); return; }
    if(b.firstChild && b.firstChild.nodeType===3) b.firstChild.nodeValue='↓ esporta '+n+' risposte';
    else b.insertBefore(document.createTextNode('↓ esporta '+n+' risposte'), b.firstChild);
  }
  var ultimoGiusto = 0, ultimoVisto = null;
  /* famiglia "meccanica": un solo aggancio, l'esito dalla variazione di correctCount */
  function daStato(st, q){
    if(!st) return;
    var chiave = (q && (q._pool||'?')) + '::' + st.idx;
    if(chiave === ultimoVisto) return;              // gia' registrato questo passo
    ultimoVisto = chiave;
    var giusto = (st.correctCount||0) > ultimoGiusto;
    ultimoGiusto = st.correctCount||0;
    registra({ pool: (q && q._pool) || null, ui: st.idx, si: 0,
               esito: giusto, primo: true, tipo: (q && q.type) || null });
  }
  return { registra:registra, esporta:esporta, daStato:daStato,
           conta:function(){ return leggi().length; }, aggiorna:aggiornaBottone };
})();
""" % MARCA


def famiglia(testo):
    if "function answer(btn, opt, st)" in testo and "var S = { units:[]" in testo:
        return "template"
    if "state.correctCount" in testo and re.search(r"function nextQ\(\)", testo):
        return "meccanica"
    return None


def innesta(path, solo_verifica=False):
    testo = io.open(path, encoding="utf-8").read()
    nome = os.path.basename(path)
    if MARCA in testo or "var TRACCIA" in testo:
        return "%s: gia' innestato, salto" % nome
    fam = famiglia(testo)
    if not fam:
        return "%s: FAMIGLIA NON RICONOSCIUTA, non tocco nulla" % nome

    if fam == "template":
        ancora = "var S = { units:[], ui:0, si:0, correct:0, total:0, answered:false };"
        if ancora not in testo:
            return "%s: ancora di stato non trovata" % nome
        nuovo = testo.replace(ancora, ancora + "\n" + BLOCCO, 1)
        chiamata = (
            "function answer(btn, opt, st){\n"
            "  TRACCIA.registra({ pool: S.poolId, ui: S.ui, si: S.si,\n"
            "                     esito: !!opt.c, primo: !S.answered,\n"
            "                     hint: document.getElementById('qhint')"
            ".classList.contains('show') });\n")
        if "function answer(btn, opt, st){\n" not in nuovo:
            return "%s: firma di answer() diversa dall'attesa" % nome
        nuovo = nuovo.replace("function answer(btn, opt, st){\n", chiamata, 1)

    else:  # meccanica
        m = re.search(r"^function nextQ\(\)\s*\{", testo, re.M)
        if not m:
            return "%s: nextQ() non trovata" % nome
        nuovo = testo[:m.start()] + BLOCCO + "\n" + testo[m.start():]
        nuovo = re.sub(
            r"(function nextQ\(\)\s*\{)",
            r"\1\n  try{ TRACCIA.daStato(state, state.queue && state.queue[state.idx]); }catch(e){}",
            nuovo, count=1)
        nuovo = re.sub(
            r"(function finish\(\)\s*\{)",
            r"\1\n  try{ TRACCIA.daStato(state, state.queue && state.queue[state.idx]); }catch(e){}",
            nuovo, count=1)

    if solo_verifica:
        return "%s: [%s] innesterei %+d caratteri" % (nome, fam, len(nuovo) - len(testo))

    with io.open(path + ".pre-traccia.bak", "w", encoding="utf-8") as f:
        f.write(testo)                                   # niente oblio, anche qui
    with io.open(path, "w", encoding="utf-8") as f:
        f.write(nuovo)
    return "%s: [%s] innestato (+%d caratteri, backup .pre-traccia.bak)" % (
        nome, fam, len(nuovo) - len(testo))


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    verifica = "--verifica" in sys.argv
    if "--tutti" in sys.argv:
        args = []
        for root, _d, files in os.walk(os.path.join(NAV, "02-accademico")):
            for f in files:
                if f.startswith("Quiz_") and f.endswith(".html"):
                    args.append(os.path.join(root, f))
    if not args:
        sys.stdout.write(__doc__)
        return
    for p in sorted(args):
        sys.stdout.write(innesta(p, verifica) + "\n")


if __name__ == "__main__":
    main()

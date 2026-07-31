#!/usr/bin/env python
"""
carta-rotte.py - costruisce la CARTA DELLE ROTTE del percorso-matematica.

Legge le prolessi da tutti i nuclei (nuclei/*.html), estrae ogni arco
math-node -> physics-node, e produce:
  - carta-delle-rotte.md   (banca dati leggibile, tutti gli archi)
  - carta-delle-rotte.html (mappa visiva bipartita: nuclei <-> fisica, archi
    colorati per destinazione, hover con la corrispondenza in KaTeX)
Rigenerabile: cresce da sé quando si aggiunge un nucleo. Dedalo, 2026-07-20.

Uso:  python carta-rotte.py
"""
import glob
import html as _html
import json
import os
import re

DIR = os.path.dirname(os.path.abspath(__file__))
NUC = os.path.join(DIR, "nuclei")

# destinazioni canoniche (colonna fisica) + colore
DEST = [
    ("Elettromagnetismo", "#e0a94a"),
    ("Meccanica classica", "#5ac8fa"),
    ("Meccanica statistica", "#8bd450"),
    ("Meccanica quantistica", "#b98cff"),
    ("Tesi", "#ff6b6b"),
]
COLORE = {d: c for d, c in DEST}


def canon(dove):
    d = re.sub(r"<br\s*/?>", " ", dove).strip().lower()
    if "elettro" in d:
        return "Elettromagnetismo"
    if "statistica" in d:
        return "Meccanica statistica"
    if "quantistica" in d:
        return "Meccanica quantistica"
    if "classica" in d or "meccanica" in d:
        return "Meccanica classica"
    return dove.strip()


def raw(block, name):
    m = re.search(name + r"\s*:\s*R`([^`]*)`", block)
    return m.group(1).strip() if m else ""


def topic(fname):
    base = re.sub(r"^\d+[-_]?", "", fname.replace(".html", ""))
    return base.replace("-", " ").strip().capitalize()


def estrai(path):
    txt = open(path, encoding="utf-8").read()
    if "prolessi" not in txt:
        return None
    fname = os.path.basename(path)
    num = re.match(r"(\d+)", fname)
    oggetto = raw(txt, "oggetto")
    domanda = raw(txt, "domanda")
    rotte = []
    for m in re.finditer(
        r"\{\s*dove\s*:\s*(?:'([^']*)'|R`([^`]*)`)\s*,\s*txt\s*:\s*R`([^`]*)`\s*\}", txt):
        dove = m.group(1) if m.group(1) is not None else m.group(2)
        rotte.append({"dest": canon(dove), "txt": m.group(3).strip()})
    return {"num": num.group(1) if num else "?", "topic": topic(fname),
            "oggetto": oggetto, "rotte": rotte, "domanda": domanda}


def scrivi_md(nuclei):
    out = ["# Carta delle rotte — percorso-matematica",
           "",
           "> Banca dati degli archi math→fisica, estratti dalle prolessi dei nuclei "
           "(rigenerata da `carta-rotte.py`). Ogni nucleo deposita le sue rotte + una domanda "
           "aperta puntata alla tesi. Fonte di verità: i nuclei stessi.", ""]
    for n in nuclei:
        out.append(f"## Nucleo {n['num']} — {n['topic']}")
        if n["oggetto"]:
            out.append(f"**Oggetto:** {n['oggetto']}")
        out.append("")
        for r in n["rotte"]:
            out.append(f"- **→ {r['dest']}**: {r['txt']}")
        if n["domanda"]:
            out.append(f"- **→ Tesi (domanda aperta):** {n['domanda']}")
        out.append("")
    open(os.path.join(DIR, "carta-delle-rotte.md"), "w", encoding="utf-8").write("\n".join(out))


def scrivi_html(nuclei):
    data = json.dumps(nuclei, ensure_ascii=False)
    dests = json.dumps(DEST, ensure_ascii=False)
    doc = """<!doctype html><html lang="it"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Carta delle rotte — percorso-matematica</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>
<style>
 :root{--bg:#0d0b18;--pro:#b98cff;--ink:#e9e6f2;--dim:#8b86a0;--panel:#16132a;}
 *{box-sizing:border-box} body{margin:0;background:var(--bg);color:var(--ink);
   font-family:Georgia,'Times New Roman',serif}
 header{padding:26px 30px 6px} h1{margin:0;font-size:26px;color:var(--pro)}
 .sub{color:var(--dim);font-size:14px;margin-top:6px;max-width:760px;line-height:1.5}
 #wrap{display:flex;gap:0;align-items:flex-start;flex-wrap:wrap}
 svg{width:100%;height:auto;max-width:1160px} .lab{font-family:Georgia,serif}
 .node{cursor:pointer} .node rect{transition:.15s}
 .arc{fill:none;stroke-width:2.4;opacity:.42;transition:.15s;cursor:pointer}
 .arc.hot{opacity:1;stroke-width:4}
 .arc.dim{opacity:.08}
 #tip{position:fixed;max-width:420px;background:var(--panel);border:1px solid #2c2748;
   border-radius:10px;padding:12px 14px;font-size:14.5px;line-height:1.5;pointer-events:none;
   opacity:0;transition:opacity .12s;z-index:9;box-shadow:0 8px 30px #0009}
 #tip .d{font-family:Georgia;font-weight:bold;font-size:12px;letter-spacing:.06em;
   text-transform:uppercase;margin-bottom:6px}
 .legend{display:flex;gap:16px;flex-wrap:wrap;padding:6px 30px 22px;color:var(--dim);font-size:13px}
 .legend b{display:inline-block;width:22px;height:4px;border-radius:2px;margin-right:6px;vertical-align:middle}
 b{color:var(--ink)}
</style></head><body>
<header><h1>Carta delle rotte</h1>
<div class="sub">Ogni concetto di matematica che impari apre un arco verso la fisica che verrà —
elettromagnetismo, meccanica, statistica, quantistica — e una domanda aperta punta alla tesi.
La mappa cresce nucleo dopo nucleo. <i>Passa sopra un arco per leggere la corrispondenza.</i></div></header>
<div id="wrap"><svg id="map" viewBox="0 0 1160 HHH" preserveAspectRatio="xMidYMin meet"></svg></div>
<div class="legend" id="legend"></div>
<div id="tip"></div>
<script>
var NUCLEI=DATA, DEST=DESTS;
var LX=280, RX=880, TOP=70, GAPN=Math.max(96,(760)/Math.max(1,NUCLEI.length)), GAPD=120;
var svg=document.getElementById('map'), tip=document.getElementById('tip');
function pos(i,n,gap,x){ return {x:x, y:TOP + i*gap + gap/2}; }
var nY=NUCLEI.map(function(_,i){return pos(i,NUCLEI.length,GAPN,LX).y;});
var dY=DEST.map(function(_,i){return pos(i,DEST.length,GAPD,RX).y;});
var H=Math.max(TOP+NUCLEI.length*GAPN, TOP+DEST.length*GAPD)+40;
svg.setAttribute('viewBox','0 0 1160 '+H);
function esc(s){return s;}
// archi
var arcs=[];
NUCLEI.forEach(function(n,ni){
  var routes=n.rotte.slice();
  if(n.domanda) routes.push({dest:'Tesi', txt:n.domanda, open:true});
  routes.forEach(function(r){
    var di=DEST.findIndex(function(d){return d[0]===r.dest;});
    if(di<0) return;
    var col=DEST[di][1], y1=nY[ni], y2=dY[di];
    var mx=(LX+RX)/2;
    var p=document.createElementNS('http://www.w3.org/2000/svg','path');
    p.setAttribute('d','M '+LX+' '+y1+' C '+mx+' '+y1+' '+mx+' '+y2+' '+RX+' '+y2);
    p.setAttribute('class','arc'+(r.open?' open':'')); p.setAttribute('stroke',col);
    if(r.open) p.setAttribute('stroke-dasharray','7 5');
    p.dataset.ni=ni; p.dataset.dest=r.dest; p.dataset.txt=r.txt;
    p.addEventListener('mousemove',showTip); p.addEventListener('mouseleave',hideTip);
    svg.appendChild(p); arcs.push(p);
  });
});
// nodi matematica (sinistra)
NUCLEI.forEach(function(n,ni){ node(LX, nY[ni], 'N'+n.num+' · '+n.topic, '#221c3e', var_pro(), 'left', ni); });
// nodi fisica (destra)
DEST.forEach(function(d,di){ node(RX, dY[di], d[0], '#1a1730', d[1], 'right', -1); });
function var_pro(){return getComputedStyle(document.documentElement).getPropertyValue('--pro').trim();}
function node(x,y,label,fill,stroke,side,ni){
  var g=document.createElementNS('http://www.w3.org/2000/svg','g'); g.setAttribute('class','node');
  var w=Math.min(300, 40+label.length*8.2), h=40;
  var rx = side==='left'? x-w : x;
  var rct=document.createElementNS('http://www.w3.org/2000/svg','rect');
  rct.setAttribute('x',rx);rct.setAttribute('y',y-h/2);rct.setAttribute('width',w);rct.setAttribute('height',h);
  rct.setAttribute('rx',10);rct.setAttribute('fill',fill);rct.setAttribute('stroke',stroke);rct.setAttribute('stroke-width',1.6);
  var t=document.createElementNS('http://www.w3.org/2000/svg','text');
  t.setAttribute('x',rx+w/2);t.setAttribute('y',y+5);t.setAttribute('text-anchor','middle');
  t.setAttribute('class','lab');t.setAttribute('fill','#e9e6f2');t.setAttribute('font-size','14.5');t.textContent=label;
  g.appendChild(rct);g.appendChild(t);svg.appendChild(g);
  if(ni>=0){ g.addEventListener('mouseenter',function(){highlight(ni);}); g.addEventListener('mouseleave',clearHi); }
}
function highlight(ni){ arcs.forEach(function(a){ a.classList.toggle('hot', +a.dataset.ni===ni); a.classList.toggle('dim', +a.dataset.ni!==ni); }); }
function clearHi(){ arcs.forEach(function(a){ a.classList.remove('hot','dim'); }); }
function showTip(e){ var a=e.currentTarget; a.classList.add('hot');
  tip.innerHTML='<div class="d" style="color:'+a.getAttribute('stroke')+'">→ '+a.dataset.dest+'</div>'+a.dataset.txt;
  if(window.renderMathInElement) renderMathInElement(tip,{delimiters:[{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}]});
  tip.style.opacity=1; var x=Math.min(e.clientX+16, innerWidth-440), y=Math.min(e.clientY+14, innerHeight-160);
  tip.style.left=x+'px'; tip.style.top=y+'px'; }
function hideTip(e){ e.currentTarget.classList.remove('hot'); tip.style.opacity=0; }
// legenda
var leg=document.getElementById('legend');
DEST.forEach(function(d){ var s=document.createElement('span'); s.innerHTML='<b style="background:'+d[1]+'"></b>'+d[0]; leg.appendChild(s); });
var so=document.createElement('span'); so.innerHTML='<b style="background:#ff6b6b;height:0;border-top:2px dashed #ff6b6b"></b>domanda aperta → tesi'; leg.appendChild(so);
</script></body></html>"""
    doc = doc.replace("DATA", data).replace("DESTS", dests).replace("HHH", "900")
    open(os.path.join(DIR, "carta-delle-rotte.html"), "w", encoding="utf-8").write(doc)


def main():
    files = [f for f in sorted(glob.glob(os.path.join(NUC, "*.html")))
             if not os.path.basename(f).startswith("_")]   # esclude _template-nucleo.html
    nuclei = [n for n in (estrai(f) for f in files) if n]
    scrivi_md(nuclei)
    scrivi_html(nuclei)
    tot = sum(len(n["rotte"]) + (1 if n["domanda"] else 0) for n in nuclei)
    print(f"Carta delle rotte: {len(nuclei)} nuclei, {tot} archi ({sum(len(n['rotte']) for n in nuclei)} rotte + "
          f"{sum(1 for n in nuclei if n['domanda'])} domande-tesi)")
    for n in nuclei:
        print(f"  N{n['num']} {n['topic']}: {len(n['rotte'])} rotte" + (" +tesi" if n["domanda"] else ""))
    print("-> carta-delle-rotte.md + carta-delle-rotte.html")


if __name__ == "__main__":
    main()

#!/usr/bin/env python
"""
mappa-percorso.py - il DISEGNO TOTALE del percorso-matematica.

Una mappa sola dell'intero percorso da cui orchestrare: i 4 Movimenti, tutti i
nuclei (dallo scheletro), stato fatto/da-fare (rilevato dai file), marca [C] core-
agosto vs [+] deepening, la spina sequenziale, i tre ponti AV<->Metodi, e i pesi
d'esame. Rigenerabile: lo stato "fatto" si aggiorna da solo dai file nei nuclei/.

Output: mappa-percorso.html (visiva) + mappa-percorso.md (orchestrazione).
Dedalo, 2026-07-20.  Uso:  python mappa-percorso.py
"""
import glob
import json
import os
import re

DIR = os.path.dirname(os.path.abspath(__file__))
NUC = os.path.join(DIR, "nuclei")

# I 4 Movimenti (dallo scheletro)
MOV = [
    ("I", "Calcolo multivariabile e vettoriale", "cuore di Analisi Vettoriale", "#8bd450"),
    ("II", "Ponte: spazi di funzioni", "AV → Metodi", "#5ac8fa"),
    ("III", "Analisi complessa", "cuore di Metodi", "#b98cff"),
    ("IV", "Funzionale e Metodi applicati", "gli strumenti della fisica", "#e0a94a"),
    ("V", "Ponte verso la tesi", "dal moto alla termodinamica", "#ff6b6b"),
]

# I nuclei: (mov, id_scheletro, titolo breve, tag C/+, chiave-topic per rilevare se e' costruito, desc)
NUCLEI = [
    (1, 1, "Topologia di Rⁿ", "C", "topolog", "limiti e continuità in più variabili: cosa vuol dire «vicino»"),
    (1, 2, "Differenziale", "C", "differenziab", "differenziabilità vera, gradiente, jacobiana, catena, Taylor"),
    (1, 3, "Dini + ottimizzazione", "C", "dini", "funzione implicita/inversa; Lagrange (moltiplicatori)"),
    (1, 4, "Integrali multipli", "C", "integrali-mult", "domini normali, Fubini, cambio di variabili (Es. 1 del 2º esonero)"),
    (1, 5, "Curve e superfici", "C", "curve", "parametrizzazioni; integrali su curve e superfici"),
    (1, 6, "Campi vettoriali", "C", "campi", "grad/div/rot; integrali di linea e flusso; conservativi"),
    (1, 7, "Teoremi integrali", "C", "teoremi-integr", "Green/Gauss/Stokes → Stokes generalizzato (forme)"),
    (1, 8, "EDO qualitative", "C", "edo-qual", "esistenza/unicità; ritratto di fase (il punto debole)"),
    (2, 9, "Serie di funzioni", "C", "serie-funz", "convergenza uniforme, Weierstrass, serie di potenze"),
    (2, 10, "Spazi normati", "C", "spazi-norm", "metrici/normati, completezza, Banach"),
    (2, 11, "Hilbert & Fourier", "C", "hilbert", "ortogonalità; Fourier come sviluppo ortogonale in L²; Gram–Schmidt"),
    (2, 12, "Lebesgue & Lᵖ", "+", "lebesgue", "integrale di Lebesgue essenziale, spazi Lᵖ"),
    (3, 13, "Olomorfe", "C", "olomorf", "funzioni olomorfe, Cauchy–Riemann"),
    (3, 14, "Cauchy", "C", "cauchy", "teorema e formula di Cauchy; analiticità = serie di potenze"),
    (3, 15, "Residui", "C", "residu", "residui e integrazione per contorni (il cavallo da lavoro)"),
    (3, 16, "Continuazione & speciali", "+", "continuazione", "continuazione analitica; funzioni speciali (Gamma)"),
    (3, 17, "Asintotica", "+", "asintotica", "Laplace, fase stazionaria, punto di sella (programma ufficiale)"),
    (4, 18, "Distribuzioni & Fourier", "C", "distribuzion", "la delta; trasformata di Fourier rigorosa; temperate"),
    (4, 19, "Operatori & spettrale", "C", "operatori-spettr", "Sturm–Liouville; funzioni di Green per EDO/EDP"),
    (4, 20, "EDP della fisica", "+", "edp", "Laplace / calore / onde con questi strumenti"),
    (5, 21, "Spazio delle fasi e Liouville", "T", "spazio-fasi", "il flusso incomprimibile: niente attrattori, ricorrenza, densità"),
    (5, 22, "Ergodicità e mescolamento", "T", "ergodicita", "medie temporali vs d'insieme; KAM, mare caotico, mixing"),
    (5, 23, "Irreversibilità", "T", "irreversibilita", "Loschmidt, coarse-graining, decoerenza ed ETH: la domanda di tesi"),
]

# I tre ponti AV<->Metodi (dallo scheletro): (id_a, id_b, etichetta)
PONTI = [
    (8, 19, "EDO di Eulero: una volta, copre AV e prepara la Green di Metodi"),
    (9, 11, "conv. uniforme → Fourier → Hilbert: un filo unico"),
    (18, 11, "EDP + Fourier: cuce il 4° esercizio di Metodi e il 2° esonero AV"),
]


def costruiti():
    """nomi-file dei nuclei gia' scritti (dai file nuclei/NN-*.html, esclusi i temporanei _*)."""
    return [os.path.basename(p) for p in glob.glob(os.path.join(NUC, "*.html"))
            if not os.path.basename(p).startswith("_")]


def build_data():
    files = costruiti()
    out = []
    for mov, sid, tit, tag, key, desc in NUCLEI:
        match = next((f for f in files if key in f.lower()), None)
        out.append({"mov": mov, "id": sid, "t": tit, "tag": tag, "desc": desc,
                    "done": match is not None,
                    "file": ("nuclei/" + match) if match else None})
    return out


def scrivi_md(data):
    L = ["# Disegno totale del percorso-matematica — orchestrazione", "",
         "> Mappa d'insieme rigenerata da `mappa-percorso.py`. Stato ‘fatto’ = c'è il file nel nucleo. "
         "Spina [C] = traversabile entro agosto; [+] = oltre. Meccanica (settembre) resta un blocco a sé.", ""]
    fatti = sum(1 for n in data if n["done"])
    L.append(f"**Stato:** {fatti}/{len(data)} nuclei costruiti. "
             f"Core [C]: {sum(1 for n in data if n['tag']=='C')} · Deepening [+]: {sum(1 for n in data if n['tag']=='+')}.")
    L.append("")
    for i, (rom, nome, sub, _c) in enumerate(MOV, 1):
        L.append(f"## Movimento {rom} — {nome}  ({sub})")
        for n in [x for x in data if x["mov"] == i]:
            stato = "✓ fatto" if n["done"] else ("○ da fare" if n["tag"] == "C" else "· oltre")
            L.append(f"- **{n['id']}. {n['t']}** [{n['tag']}] — {stato}. {n['desc']}")
        L.append("")
    L.append("## I tre ponti AV↔Metodi (l'organismo unico)")
    for a, b, e in PONTI:
        L.append(f"- **{a}↔{b}**: {e}")
    L.append("")
    L.append("## Ordine d'orchestrazione consigliato")
    L.append("- Finire la **spina [C] del Mov. I** (manca: 1 topologia, 6 teoremi integrali, 7 EDO) — è il cuore AV.")
    L.append("- Poi **Mov. II** [C] (8–10) e **Mov. III** [C] (12–14): metà esame di Metodi (complessa).")
    L.append("- Poi **16** (distribuzioni/Fourier) e l'inizio del funzionale: l'altra metà di Metodi.")
    L.append("- I **[+]** (11, 15, 17, 18) proseguono oltre agosto, senza esame che preme.")
    open(os.path.join(DIR, "mappa-percorso.md"), "w", encoding="utf-8").write("\n".join(L))


def scrivi_html(data):
    doc = """<!doctype html><html lang="it"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Disegno totale — percorso-matematica</title>
<style>
 :root{--bg:#0d0b18;--ink:#e9e6f2;--dim:#8b86a0;--pro:#b98cff;--panel:#16132a;--done:#8bd450;}
 *{box-sizing:border-box} body{margin:0;background:var(--bg);color:var(--ink);
   font-family:Georgia,'Times New Roman',serif}
 header{padding:24px 30px 4px} h1{margin:0;font-size:25px;color:var(--pro)}
 .sub{color:var(--dim);font-size:13.5px;margin-top:6px;max-width:800px;line-height:1.5}
 svg{width:100%;height:auto;max-width:1400px;display:block}
 .mv{fill:#12101f} .mvlab{fill:#c9c4dc;font-size:13px;font-style:italic}
 .mvrom{fill:var(--pro);font-size:22px;font-weight:bold;font-family:Georgia}
 .node{cursor:pointer}
 .arc{fill:none;stroke:#3a3358;stroke-width:2}
 .ponte{fill:none;stroke:#ff9b6b;stroke-width:2;stroke-dasharray:6 5;opacity:.7}
 .lab{font-family:Georgia}
 #tip{position:fixed;max-width:340px;background:var(--panel);border:1px solid #2c2748;border-radius:10px;
   padding:11px 13px;font-size:14px;line-height:1.45;pointer-events:none;opacity:0;transition:.12s;z-index:9;
   box-shadow:0 8px 30px #0009}
 .legend{display:flex;gap:18px;flex-wrap:wrap;padding:8px 30px 26px;color:var(--dim);font-size:13px;align-items:center}
 .legend i{font-style:normal} .sw{display:inline-block;width:16px;height:16px;border-radius:5px;margin-right:6px;vertical-align:-3px;border:2px solid}
</style></head><body>
<header><h1>Il percorso, per intero <a href="percorso-app.html" style="font-size:.5em;font-weight:400;color:#8fb0ff;text-decoration:none;vertical-align:middle">&#9654; apri l'allenamento</a></h1>
<div class="sub">I cinque Movimenti: da Analisi Vettoriale ad Analisi Funzionale e Complessa come un solo
organismo, e il ponte finale verso la tesi. <b>Pieno</b> = costruito, <b>vuoto</b> = da fare, <b>tratteggiato</b> = deepening oltre agosto.
Le linee arancioni sono i tre ponti AV↔Metodi. Passa sopra un nucleo per il dettaglio;
<b>clicca un nucleo costruito</b> (↗) per aprirlo.</div></header>
<svg id="map"></svg>
<div class="legend" id="legend"></div>
<div id="tip"></div>
<script>
var NUCLEI=DATA, MOV=MOVS, PONTI=PONTIS;
var PADL=210, COLW=250, ROWH=150, TOP=30;
var svg=document.getElementById('map'), tip=document.getElementById('tip');
var byId={}; // id -> {x,y}
var maxlen=Math.max.apply(null, MOV.map(function(_,mi){return NUCLEI.filter(function(n){return n.mov===mi+1;}).length;}));
var W=PADL + maxlen*COLW + 30;   // adattiva: il Movimento più lungo (7 nuclei) deve starci tutto
var H=TOP + MOV.length*ROWH + 20;
svg.setAttribute('viewBox','0 0 '+W+' '+H); svg.setAttribute('preserveAspectRatio','xMidYMin meet');
function el(t,a){var e=document.createElementNS('http://www.w3.org/2000/svg',t);for(var k in a)e.setAttribute(k,a[k]);return e;}
// bande dei movimenti
MOV.forEach(function(m,mi){
  var y=TOP+mi*ROWH;
  svg.appendChild(el('rect',{x:10,y:y,width:W-20,height:ROWH-14,rx:12,'class':'mv'}));
  svg.appendChild(el('text',{x:24,y:y+34,'class':'mvrom'})).textContent='Mov. '+m[0];
  // etichetta su due righe, spezzata alla parola, per non invadere il primo nodo
  var words=m[1].split(' '), line1='', line2='';
  words.forEach(function(wd){ if((line1+' '+wd).trim().length<=18 && !line2) line1=(line1+' '+wd).trim(); else line2=(line2+' '+wd).trim(); });
  var l=el('text',{x:24,y:y+56,'class':'mvlab'}); l.textContent=line1; svg.appendChild(l);
  if(line2){ var l2=el('text',{x:24,y:y+73,'class':'mvlab'}); l2.textContent=line2; svg.appendChild(l2); }
  var s=el('text',{x:24,y:y+(line2?92:73),'class':'mvlab'}); s.setAttribute('fill','#6f6a86'); s.setAttribute('font-size','11'); s.textContent=m[2]; svg.appendChild(s);
});
// nodi
NUCLEI.forEach(function(n){
  var idxInMov=NUCLEI.filter(function(x){return x.mov===n.mov && x.id<=n.id;}).length-1;
  var x=PADL+idxInMov*COLW, y=TOP+(n.mov-1)*ROWH + (ROWH-14)/2;
  byId[n.id]={x:x,y:y,w:COLW-40};
  var w=COLW-40, h=52, col=MOV[n.mov-1][3];
  var g=el('g',{'class':'node'});
  var r=el('rect',{x:x,y:y-h/2,width:w,height:h,rx:11});
  r.setAttribute('fill', n.done? col : '#181530');
  r.setAttribute('fill-opacity', n.done? '0.22':'1');
  r.setAttribute('stroke', col);
  r.setAttribute('stroke-width', n.tag==='C'? '2':'1.6');
  if(n.tag==='+') r.setAttribute('stroke-dasharray','6 4');
  g.appendChild(r);
  var num=el('text',{x:x+16,y:y+5,'class':'lab',fill:col,'font-size':'17','font-weight':'bold'}); num.textContent=n.id; g.appendChild(num);
  var t=el('text',{x:x+38,y:y+2,'class':'lab',fill:'#e9e6f2','font-size':'14'}); t.textContent=n.t; g.appendChild(t);
  var st=el('text',{x:x+38,y:y+19,'class':'lab','font-size':'11'});
  st.setAttribute('fill', n.done? col : '#6f6a86');
  st.textContent = n.done? '✓ costruito' : (n.tag==='C'? 'da fare' : 'oltre agosto');
  g.appendChild(st);
  g.addEventListener('mousemove',function(e){ showTip(e,n,col); });
  g.addEventListener('mouseleave',hideTip);
  if(n.done && n.file){                              // nucleo costruito = link cliccabile
    var open=el('text',{x:x+w-15,y:y-h/2+19,'class':'lab',fill:col,'font-size':'15','text-anchor':'middle'}); open.textContent='↗'; g.appendChild(open);
    var a=el('a',{}); a.setAttributeNS('http://www.w3.org/1999/xlink','href',n.file); a.setAttribute('href',n.file);
    a.appendChild(g); svg.appendChild(a);
  } else { svg.appendChild(g); }
});
// spina: frecce sequenziali entro ogni movimento
MOV.forEach(function(_,mi){
  var ns=NUCLEI.filter(function(n){return n.mov===mi+1;}).sort(function(a,b){return a.id-b.id;});
  for(var i=0;i<ns.length-1;i++){ var A=byId[ns[i].id],B=byId[ns[i+1].id];
    svg.appendChild(el('path',{d:'M '+(A.x+A.w)+' '+A.y+' L '+B.x+' '+B.y,'class':'arc'})); }
});
// ponti AV<->Metodi (archi tratteggiati arancioni)
PONTI.forEach(function(p){ var A=byId[p[0]],B=byId[p[1]]; if(!A||!B) return;
  var mx=(A.x+B.x)/2, my=(A.y+B.y)/2-70;
  svg.appendChild(el('path',{d:'M '+(A.x+A.w/2)+' '+A.y+' Q '+mx+' '+my+' '+(B.x+B.w/2)+' '+B.y,'class':'ponte'}));
});
function showTip(e,n,col){
  tip.innerHTML='<div style="font-weight:bold;color:'+col+';margin-bottom:4px">'+n.id+'. '+n.t+' &nbsp;<span style="font-size:11px;color:#8b86a0">['+n.tag+']</span></div>'+n.desc;
  tip.style.opacity=1; tip.style.left=Math.min(e.clientX+15,innerWidth-360)+'px'; tip.style.top=Math.min(e.clientY+14,innerHeight-130)+'px';
}
function hideTip(){ tip.style.opacity=0; }
// legenda
var leg=document.getElementById('legend');
[['sw','background:#8bd45044;border-color:#8bd450','costruito'],
 ['sw','background:#181530;border-color:#8b86a0','da fare (core [C])'],
 ['sw','background:#181530;border-color:#8b86a0;border-style:dashed','deepening [+], oltre agosto']].forEach(function(x){
  var s=document.createElement('span'); s.innerHTML='<span class="sw" style="'+x[1]+'"></span><i>'+x[2]+'</i>'; leg.appendChild(s);});
var pp=document.createElement('span'); pp.innerHTML='<span class="sw" style="background:none;border:none;border-top:2px dashed #ff9b6b;height:0;width:22px"></span><i>ponte AV↔Metodi</i>'; leg.appendChild(pp);
</script></body></html>"""
    doc = (doc.replace("DATA", json.dumps(data, ensure_ascii=False))
              .replace("MOVS", json.dumps(MOV, ensure_ascii=False))
              .replace("PONTIS", json.dumps(PONTI, ensure_ascii=False)))
    open(os.path.join(DIR, "mappa-percorso.html"), "w", encoding="utf-8").write(doc)


def main():
    data = build_data()
    scrivi_md(data)
    scrivi_html(data)
    fatti = sum(1 for n in data if n["done"])
    print(f"Disegno totale: {len(data)} nuclei ({fatti} costruiti), {len(MOV)} movimenti, {len(PONTI)} ponti.")
    print("-> mappa-percorso.html + mappa-percorso.md")


if __name__ == "__main__":
    main()

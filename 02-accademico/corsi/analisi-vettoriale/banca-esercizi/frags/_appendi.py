"""Appende _ext.js in coda al frammento del pool indicato e verifica.
Uso: python _appendi.py <pool>   (dalla cartella frags)
Nato nel run notturno 2026-08-22: gli aggiustamenti mirati ai pool si fanno
sul frammento, che resta la fonte di verita', non sull'HTML assemblato."""
import os, subprocess, sys
pool = sys.argv[1]
ext = open('_ext.js', encoding='utf-8').read()
assert f'Q.{pool} =' in ext, f'_ext.js non estende Q.{pool}'
with open(f'{pool}.js', 'a', encoding='utf-8') as f:
    f.write('\n\n' + ext)
os.remove('_ext.js')
js = ("const Q={};eval(require('fs').readFileSync('%s.js','utf8'));"
      "const A=Q['%s'];let bad=0;"
      "A.forEach((u,i)=>{if(!u.pool||!u.src||!u.steps)   {console.log('ERR meta',i);bad++;}"
      "u.steps.forEach((s,j)=>{const c=s.opts.filter(o=>o.c).length;"
      "if(c!==1||s.opts.length<2){console.log('ERR opts',i,j,c);bad++;}"
      "if(!s.hint||!s.sol){console.log('ERR hint/sol',i,j);bad++;}});});"
      "console.log('%s:',A.length,'unita, errori:',bad);") % (pool, pool, pool)
subprocess.run(['node', '-e', js], check=True)

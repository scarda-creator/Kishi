# Cosa copre gia' il pool `green` (metodi)

Misura generata da `coperture.py`. Serve a NON riscrivere cio' che c'e'.
Ogni riga: numero, provenienza, quanti passi, apertura della prima domanda.

### metodi / green
  33 unita', 42 passi totali
   1. [tipo &middot; b01] (1 passi) La funzione di Green $G(x,\xi)$ di un problema ai limiti $\mathcal{L}u=f$ definita da:
   2. [tipo &middot; b01] (1 passi) MODUS OPERANDI. Davanti a costruire la Green di $\mathcal{L}u=f$ su $[a,b]$ con date BC omogenee, il PRIMO pas...
   3. [20230620 Es.4] (1 passi) L'equazione $x^2u''+xu'-u=f$ del tipo:
   4. [tipo &middot; b01] (1 passi) Il Wronskiano $W(u_1,u_2)=u_1u_2'-u_1'u_2$ di due soluzioni serve a stabilire che esse:
   5. [tipo &middot; b01] (1 passi) Per l'<b>identit di Abel</b>, il Wronskiano di due soluzioni di $u''+P(x)u'+Q(x)u=0$:
   6. [20230620 Es.4] (2 passi) Base $\{x,\,1/x\}$ dell'omogenea di Eulero. Il Wronskiano $W(x,1/x)$ vale:
   7. [tipo &middot; b01] (1 passi) Nella struttura $G(x,\xi)=c\,u_1(x_{<})u_2(x_{>})$ con $x_{<}=\min(x,\xi)$, la CONTINUIT di $G$ in $x=\xi$:
   8. [tipo &middot; b01] (1 passi) Integrando $\mathcal{L}G=a_2(x)G''+a_1G'+a_0G=\delta(x-\xi)$ su $[\xi^-,\xi^+]$, le condizioni di raccordo per...
   9. [tipo &middot; b01] (1 passi) MODUS OPERANDI. PRIMA di costruire la Green conviene verificare se ESISTE. Il test decisivo :
  10. [20230620 Es.4] (2 passi) TRAPPOLA. Stessa Eulero su $[1,2]$ ma con BC miste $u(1)+3u'(1)=0$ e $u(2)-6u'(2)=0$. La soluzione omogenea $u...
  11. [20230620 Es.4] (1 passi) Con le BC di Dirichlet $u(1)=u(2)=0$ (non miste) la stessa Eulero HA Green perch:
  12. [tipo &middot; b01] (1 passi) Per un operatore in forma di <b>Sturm-Liouville</b> $\mathcal{L}u=(p(x)u')'+q(x)u$, la Green SIMMETRICA:
  13. [tipo &middot; b01] (1 passi) In forma Sturm-Liouville $(pu')'+qu=\delta(x-\xi)$, il salto corretto della derivata :
  14. [Set 4 es.9] (1 passi) Nel prodotto $u=\int G(x,\xi)f(\xi)\,d\xi$, la funzione di Green va integrata:
  15. [20241106 Es.4] (1 passi) L'operatore radiale $u''+\frac{2}{x}u'-\frac{\ell(\ell+1)}{x^2}u$ ha base omogenea:
  16. [tipo &middot; b01] (1 passi) Un problema $-u''=f$ su $[0,1]$, $u(0)=u(1)=0$: quale segno ha il salto $[G']$?
  17. [Set 4 es.10] (1 passi) La Green di $-u''+u=f$ su tutta la retta con $u\to0$ a $\pm\infty$ :
  18. [tipo &middot; b01] (1 passi) MODUS OPERANDI. Dopo aver calcolato una candidata $G(x,\xi)$, i controlli rapidi da fare sono:
  19. [tipo &middot; b01] (1 passi) Nel problema $\mathcal{L}u=f$ risolto via Green, la parte OMOGENEA della soluzione generale:
  20. [20240703 Es.4] (1 passi) Se una soluzione dell'omogenea $f_1(x)=\tan x$ nota, la seconda si trova con:
  21. [tipo &middot; b01] (1 passi) Se la sorgente $\xi$ della Green cadesse ESATTAMENTE su un estremo (es. $\xi=a$):
  22. [tipo &middot; b01] (3 passi) Costruisci la Green di $-u''=f$ su $[0,1]$, $u(0)=u(1)=0$. I due rami (soluzioni di $u''=0$ adattate al bordo)...
  23. [20230620 Es.4] (2 passi) Metodo diretto per $x^2u''+xu'-u=x^2$ su $[1,2]$, $u(1)=u(2)=0$. Una soluzione particolare $u_p=Ax^2$ ha:
  24. [20240910 Es.4] (2 passi) Eulero non-omogenea $x^3u''+2x^2u'-2xu=x^3+1$ su $[1,\infty)$. Dividendo per $x$ si ottiene Eulero con caratte...
  25. [20241106 Es.4] (2 passi) Costruisci la Green radiale di $u''+\frac{2}{x}u'-\frac{\ell(\ell+1)}{x^2}u=\delta(x-a)$ su $(0,\infty)$, $u\t...
  26. [Set 4 es.6] (1 passi) Costante coefficienti: la Green di $u''-3u'+2u=f$ su $[0,2]$, $u(0)=u(2)=0$, parte dalla base:
  27. [Set 4 es.9] (2 passi) Eulero $x^2u''-2xu'+2u=x^{\lambda}$ ($\lambda>3$). Base omogenea e Wronskiano:
  28. [tipo &middot; b01] (1 passi) Caso di RISONANZA: se la sorgente $x^{\lambda}$ ha $\lambda$ uguale a una radice della caratteristica di Euler...
  29. [Set 4 es.2] (1 passi) Coefficienti costanti $u''-4u=f$ su $[0,1]$, $u(0)=u(1)=0$. La base omogenea :
  30. [20230620 Es.4] (1 passi) Perch con BC di Dirichlet il segno di $W=6/x$ non mai zero su $[1,2]$?
  31. [tipo &middot; b01] (2 passi) Problema completo: $-u''=f$ su $[0,\pi]$, $u(0)=u(\pi)=0$, con $f(x)=\sin x$. Prima si verifica l'esistenza de...
  32. [tipo &middot; b01] (1 passi) Un operatore $\mathcal{L}u=a_2(x)u''+\dots$ con $a_2(x_0)=0$ in un punto INTERNO $x_0\in(a,b)$:
  33. [tipo &middot; b01] (1 passi) Riepilogo-strategia: per un problema ai limiti $\mathcal{L}u=f$ con sorgente REGOLARE, l'ordine corretto delle...

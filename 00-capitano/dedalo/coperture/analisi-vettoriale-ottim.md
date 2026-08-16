# Cosa copre gia' il pool `ottim` (analisi-vettoriale)

Misura generata da `coperture.py`. Serve a NON riscrivere cio' che c'e'.
Ogni riga: numero, provenienza, quanti passi, apertura della prima domanda.

### analisi-vettoriale / ottim
  30 unita', 37 passi totali
   1. [20250116 Es.2 · Weierstrass] (1 passi) Per cercare max e min ASSOLUTI di $f$ continua su $D=\{3x^2+4y^2\le 9\}$, cosa garantisce la loro ESISTENZA pr...
   2. [tipo D · manuale · Fermat] (1 passi) Sia $f$ differenziabile e $P_0$ un punto INTERNO al dominio. Quale relazione lega \"$P_0$ è di estremo locale\...
   3. [20250127 Es.2 · Hessiana] (1 passi) In un punto critico di $f(x,y)$ hai $\det H>0$ e $f_{xx}>0$. Come lo classifichi?
   4. [20250127 Es.2 · sella] (1 passi) In un punto critico si ha $\det H<0$. Che punto è, e conta il segno di $f_{xx}$?
   5. [tipo D · manuale · TRAPPOLA] (1 passi) In un punto critico sai solo che $\det H>0$. Puoi concludere che è un minimo?
   6. [tipo D · manuale · degenere] (1 passi) In un punto critico risulta $\det H=0$. Cosa dice il test dell'Hessiana?
   7. [20230504 Es.5 · Lagrange] (1 passi) Sul vincolo $g(x,y)=c$, cosa impone geometricamente la condizione dei moltiplicatori $\nabla f=\lambda\nabla g...
   8. [20230504 Es.5 · Lagrange 2D] (1 passi) In 2D, la condizione $\nabla f=\lambda\nabla g$ si riscrive senza il moltiplicatore come:
   9. [tipo D · manuale · necessaria vs sufficiente] (1 passi) Risolvendo il sistema di Lagrange trovi 4 candidati. Cosa sono, di per sé?
  10. [20230621 · punto critico fuori dominio] (1 passi) Il sistema $\nabla f=0$ dà il candidato interno $P=(3,0)$, ma il dominio è $D=\{2x^2+y^2\le 1\}$. $P$ va inser...
  11. [20230504 Es.5 · confronto interno/bordo] (1 passi) Devi trovare max e min ASSOLUTI di $f$ continua sul compatto $D$. Quali insiemi di candidati devi mettere in g...
  12. [tipo D · manuale · TRAPPOLA bordo] (1 passi) Su $D=\{x^2+y^2\le 1\}$ trovi che $f=x+y$ non ha punti critici interni ($\nabla f=(1,1)\ne 0$). Che concludi?
  13. [tipo D · manuale · coercività] (1 passi) $f$ è continua su tutto $\mathbb{R}^2$ (nessun bordo) e $f(x,y)\to+\infty$ quando $\|(x,y)\|\to\infty$. Cosa p...
  14. [tipo D · manuale · Hessiana 3D] (1 passi) In un punto critico di $f(x,y,z)$ hai $\det H>0$. Basta per concludere \"minimo\"?
  15. [20230210 Es.2 · regolarità vincolo] (1 passi) Il teorema di Lagrange scrive $\nabla f=\lambda\nabla g$ nei punti del vincolo $g=c$. Quale ipotesi sul vincol...
  16. [tipo D · manuale · classificazione] (2 passi) Trova i punti critici di $f(x,y)=x^3-3x+y^2$.
  17. [tipo D · manuale · classificazione] (3 passi) I punti critici di $f(x,y)=x^3+y^3-3xy$ sono:
  18. [20250127 Es.2] (2 passi) Sia $f(x,y)=x^2-2xy+y^3+1$. Nel punto critico $(0,0)$ l'Hessiana ha $\det H=-4<0$. Che punto è?
  19. [20230504 Es.5] (2 passi) Estremi assoluti di $F(x,y)=x^2+y^2-5y$ su $D=\{1\le x^2+y^2\le 16\}$. Primo passo: il punto critico interno.
  20. [tipo D · manuale · Lagrange] (1 passi) Estremi di $f(x,y)=xy$ sul vincolo $g=x^2+y^2=1$. Lagrange $\nabla f=\lambda\nabla g$ dà:
  21. [20230705 Es.2 · Lagrange 3D] (2 passi) Estremi di $f(x,y,z)=4-z$ sulla curva $\Gamma=\{x^2+y^2=8,\;x+y+z=1\}$. Come riduci il problema?
  22. [20250721 Es.1] (1 passi) Per $F(x,y,z)=x^2 e^{yz}$: dal sistema $\nabla F=0$ risulta che TUTTI i punti $(0,y,z)$ sono critici. Qual è i...
  23. [tipo D · manuale · degenere min] (1 passi) Classifica l'origine per $f(x,y)=x^4+y^4$. L'Hessiana in $(0,0)$ è nulla ($\det H=0$).
  24. [tipo D · manuale · TRAPPOLA degenere] (1 passi) Per $f(x,y)=x^2-y^4$ l'Hessiana in $(0,0)$ è $\mathrm{diag}(2,0)$, semidefinita positiva ($\det H=0$). Che pun...
  25. [tipo D · manuale · Lagrange ellisse] (1 passi) Estremi di $f(x,y)=x$ sul vincolo $g=x^2+4y^2=4$. Lagrange dà:
  26. [tipo D · manuale · sella] (1 passi) Classifica l'unico punto critico di $f(x,y)=x^2-y^2$.
  27. [tipo D · manuale · assoluti su disco] (1 passi) Max e min ASSOLUTI di $f(x,y)=xy$ su $D=\{x^2+y^2\le 1\}$. Interno: $\nabla f=0$ dà $(0,0)$, una sella con $f=...
  28. [tipo D · manuale · min quadratica] (1 passi) Classifica l'unico punto critico di $f(x,y)=x^2+xy+y^2$.
  29. [20220504 Es.2 · assoluti 3D vincolati] (2 passi) Estremi assoluti di $f(x,y,z)=x^2+y^2-z^2$ su $D=\{x^4+y^4+2z^4\le 1\}$. Il punto critico interno è $O=(0,0,0)...
  30. [20240209 Es.2 · critici liberi 3D] (1 passi) Per $f(x,y,z)=2x^3+yx^2+y^2z-9z$, quante equazioni scalari impone $\nabla f=0$ e cosa sono?

# Saper-fare 06 · Prodotto scalare e Gram–Schmidt

> **SOSTANZA DA VERIFICARE — generata in notte autonoma** (Dedalo, 2026-07-12). Correttezza matematica
> da ratificare da svegli (Giuseppe / Demiurgo Accademico). *Nota di verifica interna: nell'esame svolto
> ho ricalcolato la relazione di dipendenza dei generatori e la riporto corretta — vedi il flag lì.*
> Tipo mappa #3 (parte a) · freq 14/28 · diff 3–4/5 · 2013–2024.

## La firma

Ti danno un **prodotto scalare** (spesso non canonico: pesi diversi, termini misti, o definito su polinomi
per valutazioni) e ti chiedono di (a) **verificare che è definito positivo**, e/o (b) trovare una **base
ortonormale** di un sottospazio $W$ via Gram–Schmidt, e/o (c) un **complemento ortogonale** $W^\perp$.
Parole-spia: *prodotto scalare definito positivo, base ortonormale, ortogonalizzare, $W^\perp$*.

Cosa NON confondere: se la matrice è **simmetrica e va diagonalizzata ortogonalmente** (autovettori
ortonormali), è il saper-fare 07. Se invece ti danno una forma e chiedono la **segnatura** (che può essere
non definita positiva), è il 08. Qui il prodotto è definito positivo (una *metrica* vera) e il gioco è
ortogonalizzare.

## L'idea

Un prodotto scalare $\langle\cdot,\cdot\rangle$ è definito positivo se $\langle X,X\rangle>0$ per ogni
$X\neq0$. Due modi di verificarlo: **completamento dei quadrati** (riscrivi la forma quadratica come somma di
quadrati indipendenti — se tutti i coefficienti sono positivi, è definita positiva) oppure i **criteri di
Sylvester** (tutti i minori principali di testa della matrice $>0$).

**Gram–Schmidt** trasforma una base qualunque $v_1,\dots,v_k$ in una **ortogonale** $w_1,\dots,w_k$
sottraendo, a ogni passo, le proiezioni sui precedenti:
$$w_i=v_i-\sum_{j<i}\frac{\langle v_i,w_j\rangle}{\langle w_j,w_j\rangle}\,w_j,\qquad\text{poi}\quad u_i=\frac{w_i}{\sqrt{\langle w_i,w_i\rangle}}.$$
Funziona perché a ogni passo togli da $v_i$ tutto ciò che "vive" nello spazio già ortogonalizzato, lasciando
la componente perpendicolare. Le **norme si calcolano col prodotto scalare dato**, non con quello canonico.

## La mossa

1. **Definito positivo?** Scrivi la forma quadratica $\langle X,X\rangle$ e **completa i quadrati** finché è
   somma di quadrati di combinazioni indipendenti. Tutti i coefficienti $>0$ ⇒ definito positivo.
2. **Prima di ortogonalizzare, trova una vera base di $W$.** Se ti danno dei *generatori*, controlla che
   siano indipendenti: se sono in numero maggiore di $\dim W$, **scartale la ridondanza**.
   > **Trappola** (la firma del tipo, `Prova23_01_23_sol` Es.1): applicare Gram–Schmidt ai *generatori*
   > quando sono **dipendenti** produce un $w_i=0$ a metà processo e manda tutto in errore. Verifica prima la
   > dipendenza, poi ortogonalizza una **base**.
3. **Gram–Schmidt** con la formula sopra, usando **sempre il prodotto scalare assegnato** per proiezioni e
   norme.
   > **Trappola**: ortogonale $\neq$ ortonormale. Se la consegna chiede ONB, **normalizza** ogni $w_i$
   > dividendo per $\sqrt{\langle w_i,w_i\rangle}$. Dimenticare la normalizzazione finale è l'errore più
   > frequente qui.
4. **$W^\perp$:** $q\in W^\perp\iff\langle q,w\rangle=0$ per ogni generatore $w$ di $W$. Sono equazioni
   lineari in $q$: risolvile. Per polinomi con prodotto per valutazioni, $\langle p,q\rangle=\sum p(a_i)q(a_i)$.

## Un esame, per intero

**Prova 23/01/2023, Es. 1** (`Prova23_01_23_sol`, ufficiale). In $\mathbb{R}^3$ con
$\langle X,Y\rangle=x_1y_1+3x_2y_2+2x_3y_3+2x_2y_3+2x_3y_2$: (i) verificare definito positivo; (ii) base
ortonormale di $W=\operatorname{Span}\{v_1,v_2,v_3\}$ con $v_1=(1,2,-2),\ v_2=(0,1,0),\ v_3=(-2,0,4)$.

**(i)** La forma quadratica è
$$\langle X,X\rangle=x_1^2+3x_2^2+2x_3^2+4x_2x_3=x_1^2+\underbrace{x_2^2}_{}+2\underbrace{(x_2+x_3)^2}_{}.$$
(Verifica: $2(x_2+x_3)^2=2x_2^2+4x_2x_3+2x_3^2$; sommando $x_2^2$ dà $3x_2^2+4x_2x_3+2x_3^2$. ✓) Somma di
quadrati a coefficienti positivi, nulla solo per $X=0$: **definito positivo**.

**(ii)** *Dipendenza dei generatori.* $v_3=-2v_1+4v_2$ (verifica: $-2v_1=(-2,-4,4)$, $+4v_2=(0,4,0)$, somma
$(-2,0,4)=v_3$ ✓), quindi i tre sono dipendenti e $\dim W=2$: una base è $\{v_1,v_2\}$.
> **Flag di verifica.** Il testo ufficiale scrive la relazione come "$2v_1-2v_2+v_3=0$", ma il calcolo dà
> $2v_1-4v_2+v_3=0$ (cioè $v_3=-2v_1+4v_2$); la base $\{v_1,v_2\}$ e tutto il seguito dell'esame ufficiale
> sono coerenti con **questa**. Probabile refuso OCR nella riga della relazione. Da ricontrollare.

*Gram–Schmidt su $\{v_1,v_2\}$.* Prendo $w_1=v_2$. Calcolo $\langle v_1,v_2\rangle=6-4=2$ e
$\langle v_2,v_2\rangle=3$. Allora
$$w_2=v_1-\frac{\langle v_1,v_2\rangle}{\langle v_2,v_2\rangle}v_2=v_1-\tfrac23 v_2=\left(1,\tfrac43,-2\right).$$
Norme: $\langle w_1,w_1\rangle=3$; $\langle w_2,w_2\rangle=1+3\cdot\tfrac{16}{9}+2\cdot4+4\cdot\tfrac43\cdot(-2)=1+\tfrac{16}{3}+8-\tfrac{32}{3}=\tfrac{11}{3}$.
**Base ortonormale:**
$$u_1=\frac{1}{\sqrt3}\,(0,1,0),\qquad u_2=\sqrt{\tfrac{3}{11}}\left(1,\tfrac43,-2\right)=\frac{\sqrt3}{\sqrt{11}}\left(1,\tfrac43,-2\right).\qquad\blacksquare$$

## Le varianti

- **Prodotto scalare per valutazioni su polinomi** (`prova20190121` Es.4): $\langle p,q\rangle=p(0)q(0)+p(1)q(1)+p(2)q(2)$
  su $\mathbb{R}[x]_{\le2}$, con $U=\{p(1)=0\}$, $V=\{p(2)=0\}$. Qui $W=U\cap V=\operatorname{Span}\{(x-1)(x-2)\}$
  (Ruffini), $\dim(U+V)=3$, e $W^\perp$: poiché $\langle(x-1)(x-2),q\rangle=2q(0)$, si ha $W^\perp=\{q:q(0)=0\}=\operatorname{Span}\{x,x^2\}$.
  Nota il ponte col saper-fare 01 (Grassmann) e col fatto che *non degenerazione ↔ nodi distinti*.
- **Verifica definitezza con Sylvester**: quando il completamento dei quadrati è scomodo, controlla che tutti
  i minori principali di testa della matrice del prodotto siano positivi.

## Collaudo

1. In $\mathbb{R}^2$ con $\langle X,Y\rangle=2x_1y_1+x_2y_2$: ortonormalizza $v_1=(1,0),v_2=(1,1)$. *(Risposta:
   $u_1=(1/\sqrt2,0)$, $w_2=v_2-\langle v_2,u_1\rangle$-proiezione $=(0,1)$, $u_2=(0,1)$.)*
2. Nell'esame svolto, perché non si applica GS direttamente a $v_1,v_2,v_3$? *(Risposta: sono dipendenti,
   $\dim W=2$; GS sui tre darebbe un vettore nullo.)*
3. La forma $\langle X,X\rangle=x_1^2-x_2^2$ è un prodotto scalare definito positivo? *(Risposta: no —
   $X=(0,1)$ dà $-1<0$; è indefinita, materia del saper-fare 08.)*

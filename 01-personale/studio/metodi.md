# Studio — Metodi (Matematici della Fisica)

## Contesto
- Corso: Metodi (Matematici della Fisica)
- CdL: Fisica, Sapienza
- Stato: *(da compilare — anno, sessione target, prerequisiti già acquisiti)*

## Programma generale

1. **Funzioni di variabile complessa** — analiticità, equazioni di Cauchy-Riemann, integrazione complessa, teorema di Cauchy, formula integrale, sviluppi in serie (Taylor, Laurent), singolarità, residui, applicazione al calcolo di integrali reali
2. **Serie di Fourier** — convergenza puntuale e in L², fenomeno di Gibbs, derivazione e integrazione termine a termine
3. **Trasformata di Fourier** — proprietà, teorema di Parseval, convoluzione, applicazioni
4. **Trasformata di Laplace** — proprietà, antitrasformata, applicazioni alle ODE con condizioni iniziali
5. **Distribuzioni** — delta di Dirac, distribuzioni temperate, derivata distribuzionale, supporto, convoluzione
6. **ODE lineari** — equazioni omogenee e non omogenee, problemi di Sturm-Liouville, autovalori e autofunzioni
7. **Funzioni speciali** — Bessel, Legendre, Hermite, Laguerre — proprietà, relazioni di ricorrenza, ortogonalità
8. **Spazi di Hilbert** — base ortonormale, completezza, identità di Parseval, sistemi ortogonali completi
9. **Operatori lineari** — autoaggiunti, limitati e non limitati, spettro, operatori compatti (intro)
10. **PDE classiche** — equazione del calore, dell'onda, di Laplace; metodo di separazione delle variabili

## Concetti chiave (Pilot pesca da qui)

### Variabile complessa
- Analiticità ↔ Cauchy-Riemann (∂u/∂x = ∂v/∂y, ∂u/∂y = -∂v/∂x)
- Teorema di Cauchy: ∮f dz = 0 se f analitica e dominio semplicemente connesso
- Formula integrale di Cauchy: f(z₀) = (1/2πi) ∮ f(z)/(z-z₀) dz
- Serie di Laurent: parte principale + parte regolare; ordine del polo
- Teorema dei residui: ∮ f dz = 2πi · Σ Res(f, z_k)
- Lemma di Jordan, integrali tipo ∫_{-∞}^{∞} R(x)e^{iax} dx

### Fourier
- Coefficienti c_n = (1/T) ∫ f(t) e^{-i 2π n t/T} dt
- Convergenza: puntuale (sotto Dirichlet), uniforme (con condizioni), in L² (Parseval)
- Trasformata: F̂(k) = ∫ f(x) e^{-ikx} dx (convenzione a scelta)
- Parseval: ∫|f|² dx = (1/2π) ∫|F̂|² dk
- Convoluzione: F(f∗g) = F̂(f) · F̂(g)

### Laplace
- L[f](s) = ∫₀^∞ f(t) e^{-st} dt
- Proprietà: linearità, traslazione, derivazione, integrazione, convoluzione
- L[f'](s) = sL[f] - f(0); L[f''](s) = s²L[f] - sf(0) - f'(0)
- Antitrasformata via tabelle + frazioni parziali; formula di Bromwich

### Distribuzioni
- Delta di Dirac: ⟨δ, φ⟩ = φ(0); ∫δ(x)f(x) dx = f(0)
- Derivata distribuzionale: ⟨T', φ⟩ = -⟨T, φ'⟩
- δ'(x), parte principale di 1/x, distribuzioni di Heaviside H(x)
- Trasformate di distribuzioni temperate

### ODE e Sturm-Liouville
- Problema regolare: (py')' + (q + λw)y = 0 con condizioni al contorno
- Operatore autoaggiunto: autovalori reali, autofunzioni ortogonali rispetto al peso w
- Sviluppo in serie di autofunzioni
- Funzione di Green per problemi non omogenei

### Funzioni speciali
- Bessel J_n(x): equazione, relazioni di ricorrenza, zeri, ortogonalità
- Legendre P_n(x): equazione (1-x²)y'' - 2xy' + n(n+1)y = 0; ortogonali in [-1,1]
- Hermite H_n(x): pesi e^{-x²}; legame con oscillatore armonico quantistico
- Laguerre L_n(x): legame con atomo di idrogeno

### Spazi di Hilbert
- Base ortonormale {e_n}; sviluppo f = Σ ⟨f, e_n⟩ e_n
- Identità di Parseval: ||f||² = Σ |⟨f, e_n⟩|²
- Completezza ⇔ Σ |⟨f, e_n⟩|² = ||f||²
- Esempi: L²[-π, π] con base di Fourier; L²(ℝ) con base di Hermite

### Operatori
- Autoaggiunto: ⟨Af, g⟩ = ⟨f, Ag⟩
- Spettro: σ(A) (puntuale, continuo, residuo)
- Operatore compatto + autoaggiunto → spettro puntuale numerabile, autovalori convergenti a 0

### PDE
- Separazione variabili: u(x,t) = X(x)T(t) → ODE separate
- Calore: u_t = α u_xx (parabolica)
- Onda: u_tt = c² u_xx (iperbolica)
- Laplace: ∇²u = 0 (ellittica)

## Formule da sapere a memoria
- Cauchy-Riemann: u_x = v_y, u_y = -v_x
- Residuo polo semplice z₀: Res = lim_{z→z₀} (z-z₀) f(z)
- Residuo polo ordine n: Res = (1/(n-1)!) lim_{z→z₀} d^{n-1}/dz^{n-1} [(z-z₀)^n f(z)]
- L[1] = 1/s; L[t^n] = n!/s^{n+1}; L[e^{at}] = 1/(s-a)
- L[sin ωt] = ω/(s²+ω²); L[cos ωt] = s/(s²+ω²)
- ∫δ(x-a) f(x) dx = f(a)
- Parseval (Fourier): ||f||² = Σ |c_n|² · T (con convenzione)

## Errori tipici dell'esame
- **Residui con poli di ordine > 1:** dimenticare il fattore (n-1)! o saltare le derivate
- **Lemma di Jordan:** applicarlo dove non vale (semicerchi superiore vs inferiore in base al segno del coefficiente di i)
- **Convenzioni Fourier:** mescolare segni e fattori 2π — scegli una convenzione e tienila tutto l'esame
- **Distribuzioni:** trattare δ come una funzione ordinaria
- **Sturm-Liouville:** non riconoscere il peso w
- **Funzioni speciali:** confondere ortogonalità in dominî e pesi diversi
- **Separazione variabili:** condizioni al contorno non omogenee senza traslazione

## Stato attuale
- Sto lavorando su: *(da compilare)*
- Cosa ho chiaro: *(da compilare)*
- Cosa è in dubbio: *(da compilare)*

## Punti deboli emersi
*Pilot aggiorna dopo ogni quiz. Vuoto al primo quiz.*

## Risorse
- *(aggiungere testo di riferimento — Cicogna è classico a Sapienza)*

## Storico quiz
*Pilot aggiunge una riga per ogni sessione.*

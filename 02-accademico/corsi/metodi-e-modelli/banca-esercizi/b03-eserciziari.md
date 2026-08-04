---
type: ricerca
passata: b03
corso: metodi-e-modelli
finestra: eserciziari Set 1-4 + More problems
data: 2026-08-02
---

# b03 — Censimento eserciziari Metodi e Modelli (Esposito)

## Struttura generale dei file

| File | Esercizi | Soluzioni | Lingua | Data |
|---|---|---|---|---|
| Set 1 - Finite dimension.txt | 13 | sì, tutte | italiano | mag 2025 |
| Set 2 - Infinite dimension.txt | 12 | sì, tutte | italiano | feb 2025 |
| Set 3 - Fourier analysis.txt | 8 | sì, tutte | italiano | giu 2025 |
| Set 4 - Differential equations.txt | 11 | sì, tutte | italiano | giu 2025 |
| More problems.txt | 21 | sì, tutte | italiano | giu 2025 |
| **Totale** | **65** | **65/65** | — | — |

Tutti i Set seguono la stessa struttura: sezione ESERCIZI → sezione SOLUZIONI. Nessun Set è diviso in sotto-sezioni tematiche interne. Tutti prodotti da Angelo Esposito (docente del corso), a eccezione di More problems (vedi §6).

---

## Set 1 — Spazi di Hilbert finito-dimensionali (13 esercizi)

### Censimento per tipo

| Tipo | Istanze | Concetti richiesti | Difficoltà |
|---|---|---|---|
| Gram-Schmidt su R³/C³ + proiettori Pi = \|ei⟩⟨ei\| | 2 | base ortonormale, PiPj = δij Pi, ΣPi = 1 | 2 |
| Proprietà dei proiettori | 2 | P² = P, autovalori 0/1, dim autospazio = 1 per P di rango 1 | 2 |
| Levi-Civita e identità vettoriali | 1 | ϵijk, doppio prodotto vettore, identità di Jacobi | 2 |
| Gell-Mann come base di Mat_H(3) | 1 | dipendenza lineare di 9 matrici, decomposizione esplicita M = ... | 3 |
| Diagonalizzazione 2×2 (3 matrici: A, B reale non sim., C) | 3 | polinomio caratteristico, autovettori, S = [v₊ v₋], DA = S⁻¹AS | 3 |
| Diagonalizzazione 3×3 hermitiana, matrice S unitaria | 1 | λ₁=0, λ₂=1, λ₃=2; S†S = 1 | 3 |
| Diagonalizzazione simultanea matrici commutanti (2 casi) | 2 | [A,B]=0; caso 2×2 e caso 3×3 con autovalore degenere α₂=α₃ | 4 |
| e^{At} matrice non diagonalizzabile (Jordan), Cayley-Hamilton | 1 | p(λ) = (λ-α)³, resto R(z) = a₀+a₁z+a₂z², f^{(k)}(α) = R^{(k)}(α) | 5 |
| e^{iθn̂·σ} via Cayley-Hamilton | 1 | autovalori ±1, R(z) lineare, cos θ 1 + i sin θ (n̂·σ) | 4 |
| log A, A^{3/2} via rappresentazione spettrale con branch cut | 1 | proiettori non ortogonali Pi = S·P_i^{(D)}·S⁻¹, autovalori complessi λ₂=√2 e^{iπ/4}, branch cut asse reale positivo | 5 |
| Stabilità equilibri Lagrangiani + piccole oscillazioni | 1 | gradiente potenziale, Hessiana, autovalori positivi, cos(A^{1/2}t) via spettro | 5 |

### Istanze concrete riusabili

**Gram-Schmidt R³:** v₁=(1,2,0), v₂=(1,1,1), v₃=(0,2,3). Soluzione: e₁=1/√5(1,2,0), e₂=1/√30(2,-1,5), e₃=1/√6(-2,1,1). Proiettori P₁, P₂, P₃ espliciti.

**Gram-Schmidt C³:** v₁=(1,0,i), v₂=(1,1,0), v₃=(0,1-i,0). Soluzione con notazione di Dirac; proiettori Pi = |ei⟩⟨ei|.

**Diagonalizzazione 2×2:**
- A=[[1,1],[2,3]]: λ±=2±√3, S con autovettori v±^T=(-1∓√3/2, 1)
- B=[[3,i],[-i,7]]: λ±=5±√5
- C=[[0,1],[2,-1]]: λ₊=1, λ₋=-2

**Diagonalizzazione 3×3 hermitiana:** A=[[1,0,i],[0,1,0],[-i,0,1]], autovalori 0,1,2; e₁=1/√2(-i,0,1), e₂=(0,1,0), e₃=1/√2(i,0,1).

**e^{At} Jordan:** A=[[α,1,1],[0,α,1],[0,0,α]]. Risultato: e^{αt}[[1,t,t(2+t)/2],[0,1,t],[0,0,1]]. Due metodi: Cayley-Hamilton (R quadratico) e pattern diretto su Aⁿ.

**e^{iθn̂·σ} = cosθ·1 + i sinθ·(n̂·σ):** autovalori ±1, R(z) = a₀+a₁z.

**log A, A^{3/2} con branch cut:** A=[[2,1,-i,-1+i],[0,1,-i,0],[0,0,-2i,1+i]] (matrice 3×3 con autovalori λ₁=2, λ₂=1+i, λ₃=1-i). Proiettori non ortogonali; log λ₁=log2, log λ₂=½log2+iπ/4, log λ₃=½log2+i7π/4.

**Lagrangiana:** V = -11x²/4 + (√3/2)xy - 9y²/4 + x⁴/2 + x²y² + y⁴/2. Equilibri: x₁=(0,0), x₂,±=(±3/2, ∓√3/2), x₃,±=(±1/√2, ±√(3/2)). Stabili: solo x₂,±. Piccole oscillazioni: δ̈x = -A₂·δx con A₂=[[19/2,-5√3/2],[-5√3/2, 9/2]], autovalori λ₁=2, λ₂=12.

---

## Set 2 — Spazi di Hilbert infinito-dimensionali (12 esercizi)

### Censimento per tipo

| Tipo | Istanze | Concetti richiesti | Difficoltà |
|---|---|---|---|
| Appartenenza a L² (5 funzioni × 3 domini) | 1 | convergenza integrale, singolarità α>-1/2, decadimento all'∞ α<-1/2 | 3 |
| Prodotti scalari cos/sin in L²[-a/2,a/2] | 1 | formule di Werner, <cn|cm>=a/2·δnm, <cn|sm>=0 | 2 |
| Espansione in polinomi di Legendre (3 funzioni) | 1 | cn=<Pn|f>/<Pn|Pn>, simmetria pari/dispari, limite r→∞ per e^{ikrx} | 3 |
| ∇²(1/r)=-4πδ³(r) e ∇ᵢ∇ⱼ(1/r) | 1 | regolarizzazione ε, cambio variabile r²=ε²u/(1-u), limite distribuzione | 4 |
| Integrali con δ(f(x)) composita (4 integrali) | 1 | δ(f)=Σδ(x-xn)/\|f'(xn)\|, zeri di sin x, cos x, eλx sin x | 3 |
| Integrali con δ'(x) (3 integrali) | 1 | IBP, cambio variabili x²-1=y, derivazione del prodotto | 3 |
| Identità distributiva δ'(x)f(x) | 1 | derivata di δ(x)f(x)=δ(x)f(0), funzione di prova ϕ | 3 |
| ∫e^{iyx}dx = 2πδ(y) | 1 | limite L→∞, 2sin(Ly)/y, Ly=u, ∫sin u/u du = π | 3 |
| Gaussiana: saturazione Heisenberg (2 sotto-casi) | 1 | ΔX·ΔP=1/4, dipendenza lineare ΔX|ψ⟩ e ΔP|ψ⟩, caso saturo e non saturo | 3 |
| Operatori ladder su ℓ², spettro (E-, E+) | 1 | E- privo di spettro, E+ con autovalori \|λ\|<1, serie convergente | 4 |
| Momento angolare Lz = -i∂φ, autofunzioni | 1 | periodicità 2π, m∈Z, ψm=e^{imφ}/√(2π) | 3 |
| Op. non hermitiano a=(iP+X)/√2, autofunzioni α∈C | 1 | sep. variabili, ψα(x)=ψ₀e^{√2αx - x²/2}, saturazione per ogni α∈C | 4 |

### Istanze concrete riusabili

**Appartenenza a L²:**
- f₁(x)=(x-1/3)^α: L²[0,1] per α>-1/2; mai in L²[0,∞) o L²(R)
- f₃(x)=e^{αx}: L²[0,1] sempre; L²[0,∞) per α<0; mai in L²(R)
- f₄(x)=(x³-1)^α: L²[0,∞) e L²(R) per -1/2 < α < -1/6

**Legendre:** f₁(x)=x√(1-x²): c₀=0, c₁=3π/16, c₂=0, c₃=-7π/64. f₂(x)=1/(1+x²): c₀=π/4, c₁=0, c₂=5/2(3-π), c₃=0.

**Integrali con δ composita:**
- I₁=∫₀^∞ δ(x²-1)eˣ dx = e/2
- I₂=∫₋₁^4 δ(sin x)cos x dx = 0
- I₃=∫_{π/4}^∞ δ(cos x)2^{-x} dx = 2^{π/2}/(2^π-1)
- I₄=Σ_{n>0} nπe^{-λnπ} = πe^{λπ}/(1-e^{λπ})² per λ>0

**Gaussiana saturazione:** ψ(x)=√(α/√π)e^{-α²(x-x₀)²/2 + ip₀x}: ⟨ΔX²⟩=1/(2α²), ⟨ΔP²⟩=α²/2, prodotto=1/4. ΔP|ψ⟩=iα²·ΔX|ψ⟩ (linearmente dipendenti).

---

## Set 3 — Analisi di Fourier (8 esercizi)

### Censimento per tipo

| Tipo | Istanze | Concetti richiesti | Difficoltà |
|---|---|---|---|
| Derivata di serie Fourier come matrici su coefficienti | 1 | A = [[0,DN],[-DN,0]], B = A² = -diag(n²) ⊗ 1₂, base trigonometrica | 3 |
| Serie Fourier e^{ax}, somme numeriche (s1, s2, s3) | 1 | fn via integrale, valutazione in x=0/π, Dirichlet; s2=π/a·coth(πa); s3 via prodotto scalare | 4 |
| Serie Fourier 3 funzioni + Dini/Dirichlet | 1 | 1+sin²x triviale; f₂ a tratti con due discontinuità; f₃ mezza-sinusoide | 3 |
| FT di integrali (convoluzione con θ, Gaussiana*Lorentziana) | 1 | F[g₁]=F[f]·(πδ(k)-iP(1/k)); F[g₂]=π^{3/2}e^{-\|k\|-k²/4} | 4 |
| Scaling: Δx·Δk invariante da L | 1 | cambio variabile, ĝ(kL)=f̂(k)/L | 2 |
| Decadimento esponenziale FT via posizione poli | 1 | Im(x±ᵢ), chiusura semipiano superiore/inferiore, verifica con Lorentziana f(k)=πe^{-a\|k\|}/a | 4 |
| FT di 3 funzioni via residui | 1 | sin(x)e^{-x²}: completamento quadrato Gaussiana; x/(1+x²)²: polo doppio, residuo con derivata; cos(ax)/(x²+b²): 3 casi in k | 4 |
| Trasformata di Laplace di 4 funzioni | 1 | sin(t)cos(3t) via Eulero; te^{2t}cos(t) via Feynman; e^{-t²/2} via error function; ∫₀ᵗ t'²e^{t-t'}dt' via convoluzione | 4 |

### Istanze concrete riusabili

**Serie Fourier e^{ax}:** fn = √(2/π)(-1)ⁿ sinh(aπ)/(a-in). Somme: s₁=1/(2a)[π/sinh(πa)-1/a]; s₂=π/a·cosh(πa)/sinh(πa); s₃=π/(a+b)·sinh[(a+b)π]/(sinh(aπ)sinh(bπ)).

**FT via residui (3 funzioni):**
- f₁=sin(x)e^{-x²}: f̂₁=√π/(2i)[e^{-(k-1)²/4} - e^{-(k+1)²/4}]
- f₂=x/(1+x²)²: poli doppi ±i; f̂₂=-iπk e^{-|k|}/4
- f₃=cos(ax)/(x²+b²): f̂₃=π/(2b)[e^{-b|k-a|}+e^{-b|a+k|}] (3 regioni in k)

**Trasformata di Laplace:**
- F₁(s)=2/(s²+16)-1/(s²+4), Re s>0
- F₂(s)=[(s-2)²-1]/[(s-2)²+1]², Re s>2
- F₃(s)=√(π/2)e^{s²/2}[1-erf(s/√2)], Re s qualsiasi
- F₄(s)=1/[s²(s-1)], Re s>1

---

## Set 4 — Equazioni differenziali (11 esercizi)

### Censimento per tipo

| Tipo | Istanze | Concetti richiesti | Difficoltà |
|---|---|---|---|
| ODE I ordine, sep. variabili, condizioni L² | 1 (3 sub) | a₁f'+a₀f=0; condizioni su α per L²; eq. con sin x, x^{-α}, tan(αx) | 2-3 |
| ODE II ordine non-omogenea, var. costanti (5 sub) | 1 | Wronskiano, fp = ∫j(y)/(a₂W)[f₁f₂... ]dy; eq. di Eulero xα con xα | 3-4 |
| ODE con BC, autovalori λ (3 sub) | 1 | λn=iπn; λn=(2n+1)/2; eq. Eulero, 2^{√λ²}=1, λn=i2πn/log2 | 4 |
| Equazione del calore su retta infinita, IC Gaussiana | 1 | T(t,x)=∫K(x-y)T₀(y)dy; allargamento σ→√(σ²+2κt) | 3 |
| Equazione delle onde, propagazione unidirezionale | 1 | g±(x)=½[h(x)±1/cs∫v]; v(x)=-csh'(x) → g+=0; f(t,x)=h(x-cst) | 3 |
| Eq. calore sbarra finita, 2 set di BC | 1 (2 sub) | sin³x=3/4 sin x-1/4 sin 3x; BC miste: λn=-κ(1/2+n)²; c₁=3/4, c₃=-1/4 | 3 |
| Equazione diffusione-avvezione | 1 | cambio variabili x'=x-ut → eq. del calore; f(t,x)=γe^{-(x-ut)²/...}/... | 3 |
| Equazione del calore 2D, condizioni ai bordi | 1 | sep. in 3 fasi T·X·Y; sin[n(π-x)/2]; c₂,₄=-1, c₆,₁₀=1 | 4 |
| Funzioni di Green per ODE (2 sub) | 2 | G(x,y) sep. in θ(x-y)/θ(y-x); eq. Eulero f₁=x+x², f₂=x-x²; eq. costante e^{3x}/xe^{3x} | 4-5 |
| IVP via trasformata di Laplace (2 sub) | 2 | s²X+X=1/s²; poli s=0 doppio, ±i; residui; x(t)=t-sin t | 3-4 |
| Funzione di Green per operatori PDE (calore, Schrödinger) | 2 | G(ω,q) in spazio Fourier; polo ω=iκq²; GR=e^{-x²/(4κt)}/√(4πκt)·θ(t); GR Schrödinger con parte principale | 4-5 |

### Istanze concrete riusabili

**Equazione di Eulero con bc:** x²f''-2xf'+2f=xλ (λ>2): f₁=x², f₂=x, W=-x², fp=xλ/[(λ-2)(λ-3)].

**Calore 2D:** ∂tf=D(∂²xf+∂²yf), f(t,±π,±π)=0, f(0,x,y)=sin(x)sin(2y)+sin(3x)sin(5y). Soluzione: f=e^{-5Dt}sin(x)sin(2y)+e^{-34Dt}sin(3x)sin(5y).

**GF per ODE (Eulero):** G(x,y)=-[(1+y)/(2y³)](x-x²)θ(x-y) - [(1-y)/(2y³)](x+x²)θ(y-x). Soluzione: f(x)=-x/2+x³/2.

**GF nucleo del calore:** ∂tG-κ∂²xG=δ(t)δ(x); GR(t,x)=e^{-x²/(4κt)}/√(4πκt)·θ(t).

**IVP via Laplace:** ẍ+x=t, x(0)=ẋ(0)=0: X(s)=1/[s²(s²+1)]; x(t)=t-sin t (polo doppio s=0, poli semplici ±i).

---

## More problems — esercizi di Mastropietro (21 esercizi)

### Natura del file
**Aggiunta eterogenea**, non un quinto Set tematico. Il file dichiara esplicitamente: "esercizi proposti dal Prof. Mastropietro" — docente diverso da Esposito. La copertura è trasversale a tutti e 4 i Set principali. Lo stile è più diretto (testi brevi, senza contesto fisico esteso). Presenta un errore di numerazione: due esercizi chiamati "Esercizio 20" nelle soluzioni (il secondo è il propagatore bosonico, che corrisponde all'Ex 21 del testo).

### Censimento per tipo

| Tipo | Istanze | Concetti | Diff |
|---|---|---|---|
| Serie Fourier (f=x, convergenza) | 1 | bn=2(-1)^{n+1}/n·√π, discontinuità in x=±π | 2 |
| Equazione del calore varianti (standard, coeff. t, +u) | 3 | e^{-n²t} / e^{-n²t²/2} / e^{-(n²+1)t}; IC sin³x e x(π-x) | 2-3 |
| Equazione delle onde e inomogenea | 2 | cosh(nt)sin(nx); FT per up, aggiustamento CI per uom | 3-4 |
| FT di funzioni speciali | 3 | sgn(x)e^{-\|x\|}: f̂=-2ik/(1+k²); δ(x) IC; cos(πx/2)/(x²-1) con poli reali e PV | 3-4 |
| PDE con estensione per simmetria di parità | 1 | u(t,x)=u(t,-x), estensione su tutto R, ∂xu\|_{x=0}=0 | 3 |
| Proiezione + proiettore finito-dim. | 2 | Gram-Schmidt su v₁=(1,0,0), v₂=(3,0,-4); Pu=|u⟩⟨u| con u=(0,1,1) | 2 |
| e^{tA} (non-diag. e diag.) | 2 | Taylor diretto Aⁿ=[[1,2n],[0,1]]; spettrale con S, λ₁=-2/λ₂=4 | 3 |
| log A 3×3 | 1 | λ₁=1, λ₂=λ₃=3; proiettori ortogonali; log A=log3·[[1/2,0,1/2],[0,1,0],[1/2,0,1/2]] | 3 |
| Matrice dalla sua azione su base | 1 | Aij=⟨i|A|j⟩; A|1⟩=|2⟩+|3⟩ → A=[[0,1,1],[1,0,1],[1,1,0]] | 2 |
| A sinh(A) con A²=α²1 | 1 | Taylor sinh, A sinh(A)=α sinh(α)·1 | 3 |
| ODE con δ(t-4) in distribuzione | 1 | salto x(4+)-x(4-)=1; x(t)=(e⁴+A)e^{-t} per t>4 | 3 |
| PDE ∂tu-∂²xu=δ(x)δ(t-1), u(0,x)=0 | 1 | FT in x, ODE in t con δ(t-1); u=θ(t-1)e^{-x²/(4(t-1))}/[2√π√(t-1)] | 4 |
| GF propagatore fermionico ∂t+i∂x | 1 | G(ω,q)=i/(ω-iq); G(t,x)=1/(2π(t+ix)) | 5 |
| GF propagatore bosonico ∂²t-∂²x+m², iε | 1 | poli ω=±√(q²+m²); GR, GA, GF con prescrizione iε diversa | 5 |

### Istanze concrete riusabili

**e^{tA} non-diag (Ex 13):** A=[[1,2],[0,1]], Aⁿ=[[1,2n],[0,1]], etA=eᵗ[[1,2t],[0,1]].

**e^{tA} diag (Ex 14):** A=[[3,5],[1,-1]], λ₁=-2, λ₂=4; etA=1/6[[e^{-2t}+5e^{4t}, -5e^{-2t}+5e^{4t}],[-e^{-2t}+e^{4t}, 5e^{-2t}+e^{4t}]].

**A sinh(A) (Ex 17):** A=[[0,1],[α²,0]], A²=α²1; A sinh(A)=α sinh(α)·1.

**FT sgn(x)e^{-|x|} (Ex 7):** f̂(k)=-2ik/(1+k²).

**Propagatore bosonico (Ex 21):** Ĝ(ω,q)=-1/(ω²-q²-m²). GR: polo spostato (ω+iε)² → entrambi i poli nel semipiano inferiore; GA: (ω-iε)²; GF: ω²-q²-m²+iε → oscillazioni e^{±i√(q²+m²)t}.

---

## Copertura degli argomenti del corso

### Argomenti coperti in abbondanza (>30 domande generabili)

| Argomento | Situazione |
|---|---|
| Spazi di Hilbert finito-dim. + funzioni di matrice | 13+5 = 18 istanze dirette; con variazioni di parametri → pool abbondante |
| Distribuzioni, δ di Dirac | 8 istanze dirette (integrali con δ composita, δ', identità, regolarizzazione) |
| Serie di Fourier | 6 istanze dirette (calcolo coefficienti, convergenza, somme di serie) |
| Trasformata di Fourier | 8+ istanze (convoluzione, poli, FT di funzioni elementari e speciali) |
| PDE per separazione di variabili | 15+ istanze (calore, onde, 2D, non-autonoma, inomogenea) |
| Funzioni di Green per ODE | 4 istanze complete (Eulero, costanti, Wronskiano) |

### Argomenti coperti ma non abbondanti (10-20 domande)

| Argomento | Situazione |
|---|---|
| Spazi L², appartenenza, operatori su L² | 12 esercizi Set 2, sufficienti |
| Trasformata di Laplace | 4 istanze (sufficienti ma non ridondanti) |
| Funzioni di Green per PDE | 5 istanze (nucleo calore, Schrödinger, propagatori fisici) |
| Polinomi ortogonali | solo Legendre, 1 esercizio con 3 sub-casi |

### Gap critici — materiale esterno necessario

| Argomento | Gap |
|---|---|
| **Espansioni asintotiche** (Laplace, fase stazionaria, punto di sella) | **ZERO esercizi** in tutto il corpus. È il gap più grave. Serve materiale da PPZ vol.2, Calogero o fonti esterne. |
| **Serie di Laurent** | **ZERO esercizi espliciti**. Le FT usano poli senza calcolare sviluppi di Laurent. |
| **Singolarità isolate classificate** (rimovibili, poli ordine n, essenziali) | **ZERO esercizi autonomi**. Poli semplici e doppi appaiono solo come strumenti nelle FT. |
| **Funzioni polidrome e tagli di ramo** | Solo un accenno in Set 1 Ex 12 (branch cut per log A, A^{3/2}). Zero esercizi sulla teoria delle funzioni polidrome o sui tagli come argomento analitico autonomo. |
| **Sturm-Liouville come framework** | **ZERO esercizi espliciti**. Set 4 Ex 3 tocca autovalori con BC ma non formalizza teoria S-L (operatore autoaggiunto, peso, teorema degli autovalori reali). |
| **Integrali reali via residui (standalone)** | Assenti come esercizi autonomi (tipo ∫sin x/x dx, ∫1/(1+x⁴)dx). Residui appaiono solo internamente al calcolo di FT. |

---

## Verdetto per Mnemosyne

**Per quali argomenti gli eserciziari bastano da soli per un pool di ~30 domande:**
- Spazi di Hilbert finito-dim. e funzioni di matrice: sì, abbondantemente
- Distribuzioni e δ di Dirac: sì
- Serie e trasformate di Fourier: sì
- Laplace transform: sì, a fatica (4 istanze → con variazioni di parametri → 20-25 domande)
- PDE per separazione di variabili: sì, abbondantemente
- Funzioni di Green (ODE + PDE): sì, se si includono More problems

**Per quali argomenti NO — richiedono scouting di materiale esterno:**
- **Espansioni asintotiche**: nulla. Prima di costruire pool su questo argomento, il Demiurgo non ha input. Necessario acquisire da PPZ vol. 2 cap. asintotici, o dispense Calogero.
- **Analisi complessa pura** (serie di Laurent, classificazione singolarità, integrali reali via residui, funzioni polidrome): materiale esterno obbligatorio.
- **Sturm-Liouville**: materiale esterno obbligatorio.

**Proporzione copertura:** su 12 argomenti della lista target, gli eserciziari coprono bene 7, parzialmente 2, non coprono 3 (asintotici, analisi complessa pura, Sturm-Liouville). I 3 gap sono esattamente gli argomenti che emergono dagli scritti d'esame come pool a parte — le passate b01/b02 diranno se compaiono agli esami; se sì, il materiale di addestramento deve essere importato.

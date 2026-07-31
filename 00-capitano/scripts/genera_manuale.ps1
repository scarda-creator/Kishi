# genera_manuale.ps1 — generatore del manuale operativo della navicella
# Autore strutturale: Mnemosyne (Capitano). Task di auto-rappresentazione.
#
# Python è assente su questo sistema (solo stub MS Store, niente reportlab), quindi
# il rendering HTML->PDF usa Microsoft Edge in modalità headless (--print-to-pdf),
# senza dipendenze da installare. Chrome è fallback automatico se Edge manca.
#
# Contenuto curato: 00-capitano/scripts/manuale-content.html (Mnemosyne lo riscrive
# ad ogni rigenerazione con lo stato aggiornato). Questo script si occupa solo del
# rendering e dell'archiviazione dello snapshot datato.
#
# Uso:  powershell -ExecutionPolicy Bypass -File genera_manuale.ps1

$ErrorActionPreference = 'Stop'

$root      = 'C:\Users\ACER\Desktop\AgentsAI'
$srcHtml   = Join-Path $root '00-capitano\scripts\manuale-content.html'
$mainPdf   = Join-Path $root 'Manuale-navicella.pdf'
$snapDir   = Join-Path $root '00-capitano\snapshots-manuali'
$stamp     = Get-Date -Format 'yyyyMMdd'
$snapPdf   = Join-Path $snapDir "Manuale-navicella-$stamp.pdf"

if (-not (Test-Path $srcHtml)) { throw "Sorgente HTML non trovato: $srcHtml" }
if (-not (Test-Path $snapDir)) { New-Item -ItemType Directory -Path $snapDir | Out-Null }

# Trova un renderer Chromium (Edge preferito, poi Chrome)
$candidates = @(
  'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe',
  'C:\Program Files\Microsoft\Edge\Application\msedge.exe',
  'C:\Program Files\Google\Chrome\Application\chrome.exe',
  'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe'
)
$browser = $candidates | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $browser) { throw "Nessun browser Chromium trovato (Edge/Chrome) per il rendering PDF." }

# URI file:// dalla sorgente
$uri = ([System.Uri]$srcHtml).AbsoluteUri

# Rendering headless -> PDF principale
if (Test-Path $mainPdf) { Remove-Item $mainPdf -Force }
& $browser --headless --disable-gpu --no-pdf-header-footer `
  "--print-to-pdf=$mainPdf" $uri | Out-Null

# Piccola attesa e verifica
$deadline = (Get-Date).AddSeconds(30)
while (-not (Test-Path $mainPdf) -and (Get-Date) -lt $deadline) { Start-Sleep -Milliseconds 300 }
if (-not (Test-Path $mainPdf)) { throw "Il PDF non è stato generato entro il timeout." }

# Copia snapshot datato
Copy-Item $mainPdf $snapPdf -Force

# Report
$kb = [math]::Round((Get-Item $mainPdf).Length / 1KB, 1)
Write-Output "RENDERER: $browser"
Write-Output "MAIN:     $mainPdf"
Write-Output "SNAPSHOT: $snapPdf"
Write-Output "SIZE_KB:  $kb"

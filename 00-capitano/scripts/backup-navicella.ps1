# backup-navicella.ps1 — backup cifrato fuori sede della navicella. Dedalo, 2026-07-22.
#
# Cosa fa: restic cifra TUTTO in locale (AES-256-GCM) e manda al remoto solo testo cifrato.
# La chiave non lascia mai questo computer: il vincolo su L5 è rispettato per costruzione,
# non per promessa del fornitore.
#
# PRIMA VOLTA — tre passi, una volta sola:
#   1. installare restic:            winget install restic.restic
#   2. creare un account Backblaze B2 (gratuito, 10 GB), un bucket, e una chiave applicativa
#   3. compilare le quattro variabili qui sotto, poi lanciare:   .\backup-navicella.ps1 -Init
#
# POI, ogni volta (o dall'Utilità di pianificazione):   .\backup-navicella.ps1
#
# NOTA: la password del repository restic è la chiave di tutto. Se la perdi, i backup sono
# illeggibili — non esiste recupero, ed è esattamente ciò che li rende sicuri. Scrivila
# in un posto che non sia questo computer.

param([switch]$Init, [switch]$Verifica, [switch]$Lista)

# ---------------------------------------------------------------- configurazione
$BUCKET   = "CAMBIAMI-nome-bucket"          # es. navicella-backup
$env:B2_ACCOUNT_ID  = "CAMBIAMI-keyID"      # dalla chiave applicativa B2
$env:B2_ACCOUNT_KEY = "CAMBIAMI-appKey"
$env:RESTIC_PASSWORD = "CAMBIAMI-password-lunga-del-repository"

$SORGENTE = "C:\Users\ACER\Desktop\AgentsAI"
$REPO     = "b2:$BUCKET"

# Cosa NON finisce nel backup: roba rigenerabile o enorme. I contenuti veri (memoria,
# nuclei, ricerche, script) pesano poco; i PDF dei libri di testo no.
$ESCLUDI = @(
  "--exclude", "**/node_modules",
  "--exclude", "**/.venv",
  "--exclude", "**/__pycache__",
  "--exclude", "**/*.pdf",
  "--exclude", "**/02-libro-di-testo/**",
  "--exclude", "**/01-banca-dati/**",
  "--exclude", "**/dist",
  "--exclude", "**/.git/objects"
)
# ------------------------------------------------------------------------------

if ($BUCKET -like "CAMBIAMI*") {
  Write-Host "Configurazione non compilata: apri lo script e riempi le quattro variabili in cima." -ForegroundColor Yellow
  Write-Host "Servono: nome del bucket B2, keyID, applicationKey, e una password per il repository."
  exit 1
}

if (-not (Get-Command restic -ErrorAction SilentlyContinue)) {
  Write-Host "restic non e' installato. Esegui:  winget install restic.restic" -ForegroundColor Yellow
  exit 1
}

if ($Init) {
  Write-Host "Inizializzo il repository cifrato su $REPO ..."
  restic -r $REPO init
  exit $LASTEXITCODE
}

if ($Lista)    { restic -r $REPO snapshots; exit $LASTEXITCODE }
if ($Verifica) { restic -r $REPO check --read-data-subset=5%; exit $LASTEXITCODE }

$inizio = Get-Date
Write-Host "Backup della navicella verso $REPO ..."
restic -r $REPO backup $SORGENTE @ESCLUDI --tag navicella
if ($LASTEXITCODE -ne 0) { Write-Host "BACKUP FALLITO" -ForegroundColor Red; exit 1 }

# Politica di conservazione: gli ultimi 7 giorni, 4 settimane, 12 mesi. Restic deduplica,
# quindi tenere piu' snapshot costa pochissimo.
restic -r $REPO forget --tag navicella --keep-daily 7 --keep-weekly 4 --keep-monthly 12 --prune

$durata = (Get-Date) - $inizio
Write-Host ("Fatto in {0:mm\:ss}. Per vedere gli snapshot:  .\backup-navicella.ps1 -Lista" -f $durata) -ForegroundColor Green

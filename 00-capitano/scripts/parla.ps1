# parla.ps1 - avvia la dettatura vocale della navicella.
# Uso:  .\parla.ps1            (modello small, italiano)
#       .\parla.ps1 --model base
#       .\parla.ps1 --lang auto
# Lancialo in un terminale PowerShell normale (serve la tastiera per il push-to-talk).
$py = Join-Path $PSScriptRoot "voce-venv\Scripts\python.exe"
$script = Join-Path $PSScriptRoot "voce.py"
& $py $script @args

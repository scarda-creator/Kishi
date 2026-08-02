# riversa-auto.ps1 - riversamento automatico della navicella (chiamato dal Task Scheduler).
# Legge la passphrase dal Credential Manager (via riversa.py --auto), riversa e pusha.
# Scrive un log in auto.log per sapere com'e' andato ogni giro.
$ErrorActionPreference = "Continue"
$dir    = Split-Path -Parent $MyInvocation.MyCommand.Path
$py     = Join-Path $dir "..\voce-venv\Scripts\python.exe"
$script = Join-Path $dir "riversa.py"
$log    = Join-Path $dir "auto.log"
$repo   = "C:\Users\ACER\Desktop\Kishi"

"$(Get-Date -Format 'yyyy-MM-dd HH:mm') --- avvio riversamento automatico" | Add-Content $log
& $py $script --repo $repo --auto *>> $log
"$(Get-Date -Format 'yyyy-MM-dd HH:mm') --- fine (exit $LASTEXITCODE)`n" | Add-Content $log

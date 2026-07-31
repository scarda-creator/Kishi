# detta.ps1 - dettatura vocale che scrive nella finestra attiva (Claude Code).
# Uso:  .\detta.ps1                     (toggle su F9, italiano)
#       .\detta.ps1 --tasto f8
#       .\detta.ps1 --tieni             (tieni premuto F9 e parla)
#       .\detta.ps1 --scopri            (scopri se il Fn e' assegnabile)
# Lancialo in un terminale PowerShell separato da Claude Code, poi torna col
# focus su Claude Code: l'hotkey e' globale e il testo appare nel suo prompt.
$py = Join-Path $PSScriptRoot "voce-venv\Scripts\python.exe"
$script = Join-Path $PSScriptRoot "detta.py"
& $py $script @args

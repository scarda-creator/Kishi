# arma-notturno.ps1 - registra il risvegliatore esterno della navicella.
#
# Accensione, 2026-08-02. Oroboro aveva scritto il 12 luglio: l'event-driven non attraversa
# il reset del limite di sessione, serve un risvegliatore esterno, struttura da progettare.
# Questa e' la struttura. L'Utilita' di pianificazione di Windows sopravvive a tutto - al
# reset del limite, alla chiusura del terminale, al riavvio - perche' e' fuori dal processo
# che deve svegliare.
#
# Uso (PowerShell, come utente normale - NON serve amministratore):
#   .\arma-notturno.ps1            arma alle 03:00
#   .\arma-notturno.ps1 -Ora 05:30
#   .\arma-notturno.ps1 -Disarma
#   .\arma-notturno.ps1 -Stato
#
# Interruttori a caldo, senza toccare l'attivita' pianificata:
#   crea  00-capitano\notturno\STOP   -> il run termina prima di qualunque azione
#   togli quel file                   -> riprende la notte dopo

param(
    [string]$Ora = "03:00",
    [switch]$Disarma,
    [switch]$Stato
)

$ErrorActionPreference = "Stop"
$Nome    = "Navicella - run notturno"
$Nav     = Split-Path (Split-Path $PSScriptRoot -Parent) -Parent
$Script  = Join-Path $PSScriptRoot "notturno.py"
$Python  = "$env:LOCALAPPDATA\Programs\Python\Python312\python.exe"

if ($Stato) {
    $t = Get-ScheduledTask -TaskName $Nome -ErrorAction SilentlyContinue
    if (-not $t) { "Non armato."; exit 0 }
    $i = Get-ScheduledTaskInfo -TaskName $Nome
    "Armato.  stato: $($t.State)"
    "  prossimo run : $($i.NextRunTime)"
    "  ultimo run   : $($i.LastRunTime)  esito: $($i.LastTaskResult)"
    $stop = Join-Path $Nav "00-capitano\notturno\STOP"
    if (Test-Path $stop) { "  ATTENZIONE: file STOP presente - il run non fara' nulla." }
    exit 0
}

if ($Disarma) {
    if (Get-ScheduledTask -TaskName $Nome -ErrorAction SilentlyContinue) {
        Unregister-ScheduledTask -TaskName $Nome -Confirm:$false
        "Disarmato."
    } else { "Non era armato." }
    exit 0
}

if (-not (Test-Path $Python)) { throw "Python non trovato: $Python" }
if (-not (Test-Path $Script)) { throw "notturno.py non trovato: $Script" }

$azione   = New-ScheduledTaskAction -Execute $Python -Argument "`"$Script`"" -WorkingDirectory $Nav
$trigger  = New-ScheduledTaskTrigger -Daily -At $Ora

# StartWhenAvailable: se il portatile era spento all'ora prevista, il run parte appena si
# accende invece di saltare la notte. RunOnlyIfNetworkAvailable: senza rete claude non parte
# e brucerebbe un tentativo per niente.
$opzioni = New-ScheduledTaskSettingsSet `
    -StartWhenAvailable `
    -RunOnlyIfNetworkAvailable `
    -DontStopIfGoingOnBatteries `
    -AllowStartIfOnBatteries `
    -ExecutionTimeLimit (New-TimeSpan -Hours 2) `
    -MultipleInstances IgnoreNew

Register-ScheduledTask -TaskName $Nome -Action $azione -Trigger $trigger `
    -Settings $opzioni -Description "Esegue la prima voce di 00-capitano\notturno\coda.md e lascia un paper in notturno\papers\." -Force | Out-Null

"Armato: ogni giorno alle $Ora."
"  coda   : 00-capitano\notturno\coda.md"
"  papers : 00-capitano\notturno\papers\"
"  log    : 00-capitano\notturno\run.log"
"  stop   : crea il file 00-capitano\notturno\STOP"

<#
Invoke the Node-based CI test orchestrator on Windows PowerShell
#>
Set-StrictMode -Version Latest
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Push-Location (Join-Path $ScriptDir '..') | Out-Null

Write-Host "Running CI test orchestrator (node backend/scripts/run-tests.js)..."

if (-not $env:SKIP_BUILD) { $env:SKIP_BUILD = "" }

node backend/scripts/run-tests.js $args

Pop-Location

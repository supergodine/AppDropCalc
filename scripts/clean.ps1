<#
Stop and remove containers and volumes used for CI testing (PowerShell)
#>
Set-StrictMode -Version Latest
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Push-Location (Join-Path $ScriptDir '..') | Out-Null

Write-Host "Stopping and removing docker-compose.test.yml containers and volumes..."
docker-compose -f docker-compose.test.yml down -v --remove-orphans

Write-Host "Removing test image 'appdropcalc-backend:test' (if exists)..."
try { docker image rm appdropcalc-backend:test } catch { }

Pop-Location

Write-Host "Clean complete."

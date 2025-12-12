<#
Deploy backend to Fly (PowerShell)
Usage:
  $env:FLY_APP_NAME='your-app'; $env:FLY_API_TOKEN='token'; ./scripts/deploy-fly.ps1
#>
Set-StrictMode -Version Latest
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Push-Location (Join-Path $ScriptDir '..') | Out-Null

if (-not $env:FLY_APP_NAME) {
  Write-Error "FLY_APP_NAME not set. Set environment variable or pass as param."
  Exit 1
}
if (-not $env:FLY_API_TOKEN) {
  Write-Error "FLY_API_TOKEN not set. Export your Fly API token to proceed."
  Exit 1
}

if (-not (Get-Command flyctl -ErrorAction SilentlyContinue)) {
  Write-Host "flyctl not found. Please install flyctl (https://fly.io/docs/hands-on/install-flyctl/)."
  Exit 1
}

Write-Host "Deploying backend to Fly app: $env:FLY_APP_NAME"
flyctl deploy --app $env:FLY_APP_NAME --remote-only

Write-Host "Deploy triggered. Fly will run release_command (migrations) if configured in fly.toml."

Pop-Location

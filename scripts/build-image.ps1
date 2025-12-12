<#
Build backend test image for Windows PowerShell
#>
Set-StrictMode -Version Latest
Write-Host "Building backend test image 'appdropcalc-backend:test'..."
dockeR build -f backend/Dockerfile.test -t appdropcalc-backend:test .
if ($LASTEXITCODE -ne 0) { throw "docker build failed" }
Write-Host "Image built: appdropcalc-backend:test"

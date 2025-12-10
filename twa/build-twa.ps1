# PowerShell script to prepare and build a TWA using Bubblewrap (requires local Java, Android SDK, npm/npx)
# WARNING: This script attempts to automate bubblewrap tooling but assumes a proper Android build environment
# Set these environment variables before running to avoid interactive prompts:
# $env:TWA_KEYSTORE_PASS, $env:TWA_KEY_ALIAS_PASS

param(
    [string]$ManifestUrl = 'https://app-drop-calc.vercel.app/manifest.webmanifest',
    [string]$AppName = 'DropCalc',
    [string]$PackageId = 'app.dropcalc.calculadora',
    [string]$LauncherName = 'DropCalc',
    [string]$OutputDir = 'twa-project'
)

function Check-Command($cmd) {
    $which = Get-Command $cmd -ErrorAction SilentlyContinue
    return $which -ne $null
}

Write-Host "Preparing TWA build for manifest: $ManifestUrl"

# Prereqs
$prereqs = @{ java='keytool'; npm='npm'; npx='npx' }
foreach ($k in $prereqs.Keys) {
    if (-not (Check-Command $prereqs[$k])) {
        Write-Error "Prerequisite missing: $k (command '${prereqs[$k]}') not found in PATH. Please install Java JDK and Node.js, and Android SDK/Gradle for building the .aab."
        exit 1
    }
}

# Create output dir
if (-Not (Test-Path $OutputDir)) { New-Item -ItemType Directory -Path $OutputDir | Out-Null }

Push-Location $OutputDir

# Generate keystore if not exists
$keystore = "dropcalc-keystore.jks"
$storepass = $env:TWA_KEYSTORE_PASS
$aliaspass = $env:TWA_KEY_ALIAS_PASS
if (-not $storepass) { $storepass = 'changeit' }
if (-not $aliaspass) { $aliaspass = $storepass }

if (-Not (Test-Path $keystore)) {
    Write-Host "Generating keystore $keystore (password from TWA_KEYSTORE_PASS or default 'changeit')"
    & keytool -genkeypair -v -keystore $keystore -alias dropcalc -keyalg RSA -keysize 2048 -validity 10000 -storepass $storepass -keypass $aliaspass -dname "CN=DropCalc, OU=DropCalc, O=DropCalc, L=Unknown, S=Unknown, C=BR" | Out-Null
    if ($LASTEXITCODE -ne 0) { Write-Error "keytool failed to generate keystore"; Pop-Location; exit 1 }
} else {
    Write-Host "Keystore already exists: $keystore"
}

# Bubblewrap init command (will be executed via npx)
$initCmd = "npx @bubblewrap/cli init --manifest=$ManifestUrl --applicationId=$PackageId --name=\"$AppName\" --launcherName=\"$LauncherName\" --display=standalone --orientation=portrait"
Write-Host "Running: $initCmd"

# Run bubblewrap init (may still prompt on some systems)
iex $initCmd
if ($LASTEXITCODE -ne 0) { Write-Error "bubblewrap init failed. Ensure @bubblewrap/cli is available and Android SDK/Gradle are installed."; Pop-Location; exit 1 }

# Build the project
Write-Host "Running bubblewrap build"
iex "npx @bubblewrap/cli build"
if ($LASTEXITCODE -ne 0) { Write-Error "bubblewrap build failed. Check Android SDK/Gradle configuration."; Pop-Location; exit 1 }

# Attempt to locate generated AAB
$aab = Get-ChildItem -Path . -Recurse -Include *.aab -ErrorAction SilentlyContinue | Select-Object -First 1
if ($aab) {
    Write-Host "AAB generated at: $($aab.FullName)"
} else {
    Write-Warning "No .aab found. Build might have failed or Gradle did not produce an AAB in this environment."    
}

Pop-Location

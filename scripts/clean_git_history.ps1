<#
PowerShell script: clean_git_history.ps1
Purpose: Interactive, safe helper to perform a git-history cleanup using git-filter-repo.
 - Creates a mirror clone
 - Runs git-filter-repo with paths and replace-text
 - Writes logs and runs post-clean validation
 - DOES NOT execute git push --force automatically (it prints the commands)

Usage (PowerShell):
  .\clean_git_history.ps1

Run this from the repository root. The script will create a working folder next to the repo.
Requirements:
  - git in PATH
  - python + pip
  - git-filter-repo (install with `pip install git-filter-repo`)

#> 

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

function Write-Log {
    param([string]$msg)
    $t = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
    Write-Host "[$t] $msg"
}

function Check-Tool {
    param([string]$cmd, [string]$name)
    try {
        & $cmd --version > $null 2>&1
        return $true
    } catch {
        Write-Log "WARNING: $name not found or --version failed."
        return $false
    }
}

Write-Host "=== Git history cleanup helper (git-filter-repo) ===`n"

# Check prerequisites
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "ERROR: git not found in PATH. Install git and retry." -ForegroundColor Red
    exit 1
}

# Find python executable (try 'python' then 'python3')
$pyCmd = Get-Command python -ErrorAction SilentlyContinue
if (-not $pyCmd) { $pyCmd = Get-Command python3 -ErrorAction SilentlyContinue }
if (-not $pyCmd) {
    Write-Log "ERROR: Python not found in PATH. Install Python 3 and pip before continuing."
    exit 1
}
$pythonExe = $pyCmd.Name

$filterRepoOK = $false
try { & $pythonExe -c "import git_filter_repo; print('ok')" > $null 2>&1; $filterRepoOK = $true } catch {}
if (-not $filterRepoOK) {
    Write-Log "git-filter-repo not detected in Python environment."
    Write-Host "Install it with: `n  pip install --user git-filter-repo`nThen re-run this script." -ForegroundColor Yellow
    $answer = Read-Host "Do you want the script to attempt to install git-filter-repo now? (Y/N)"
    if ($answer -match '^[Yy]') {
        Write-Log "Attempting: pip install --user git-filter-repo"
        & $pythonExe -m pip install --user git-filter-repo
        try { & $pythonExe -c "import git_filter_repo; print('ok')" > $null 2>&1; $filterRepoOK = $true } catch {}
        if (-not $filterRepoOK) { Write-Log "Automatic install failed; please install manually and re-run."; exit 1 }
    } else {
        Write-Log "Aborting. Install git-filter-repo and re-run."; exit 1
    }
}

Write-Log "git-filter-repo detected."

# Resolve repo remote URL
try {
    $originUrl = (git remote get-url origin) -replace '\r|\n',''
} catch {
    $originUrl = ''
}
if (-not $originUrl) {
    $originUrl = Read-Host "Enter repository clone URL (SSH or HTTPS)"
}

# Working folder name
$ts = Get-Date -Format yyyyMMdd_HHmmss
$base = Join-Path (Get-Location) "repo-clean-$ts"
if (Test-Path $base) { Write-Log "Target folder $base already exists. Exiting."; exit 1 }

Write-Host "Mirror clone will be created at: $base`nRemote: $originUrl`n"

$confirm = Read-Host "Proceed to create mirror clone and run filter (this will only modify the mirror clone, not your origin). Type YES to continue"
if ($confirm -ne 'YES') { Write-Log "Aborted by user."; exit 0 }

New-Item -ItemType Directory -Path $base | Out-Null

Push-Location $base
try {
    Write-Log "Cloning mirror..."
    git clone --mirror $originUrl . 2>&1 | Tee-Object -FilePath (Join-Path $base 'clone.log')
} catch {
    Write-Log "git clone --mirror failed: $_"; Pop-Location; exit 1
}

# Copy support files (paths-to-remove.txt and replacements.txt) from repo scripts folder if present
$scriptDir = Join-Path (Split-Path -Parent $MyInvocation.MyCommand.Definition) ""
$repoRoot = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Definition)
$supportDir = Join-Path $repoRoot 'scripts'

if (-not (Test-Path (Join-Path $supportDir 'paths-to-remove.txt'))) {
    Write-Log "ERROR: support file paths-to-remove.txt not found in $supportDir"; Pop-Location; exit 1
}

Copy-Item -Path (Join-Path $supportDir 'paths-to-remove.txt') -Destination (Join-Path $base 'paths-to-remove.txt') -Force
Copy-Item -Path (Join-Path $supportDir 'replacements.txt') -Destination (Join-Path $base 'replacements.txt') -Force

Write-Log "Preparing git-filter-repo arguments from paths-to-remove.txt"
$paths = Get-Content -Path (Join-Path $base 'paths-to-remove.txt') | Where-Object { $_ -and -not ($_ -match '^#') } | ForEach-Object { $_.Trim() }
$literalPaths = @()
$globPaths = @()
foreach ($p in $paths) {
    if ($p -match '[*?]') { $globPaths += $p } else { $literalPaths += $p }
}

$filterCmd = @('git', 'filter-repo')

if ($literalPaths.Count -gt 0) {
    # write to a temporary file to pass to --paths-from-file
    $literalFile = Join-Path $base 'paths-literal.txt'
    $literalPaths | Out-File -FilePath $literalFile -Encoding utf8
    $filterCmd += @('--paths-from-file', $literalFile)
    $filterCmd += '--invert-paths'
}

foreach ($g in $globPaths) { $filterCmd += @('--path-glob', $g) }

# replace-text
$filterCmd += @('--replace-text', (Join-Path $base 'replacements.txt'))

# force: allow operation in mirror
$filterCmd += @('--force')

Write-Log "Running git-filter-repo (this can take time). Output will go to filter-repo.log"
$filterLog = Join-Path $base 'filter-repo.log'
$filterCmdLine = $filterCmd -join ' '
Write-Log "Command: $filterCmdLine"

try {
    # Run and tee output
    & $filterCmd 2>&1 | Tee-Object -FilePath $filterLog
} catch {
    Write-Log "git-filter-repo failed: $_"; Pop-Location; exit 1
}

Write-Log "git-filter-repo finished. Generating validations..."

# Validation: search for APP_USR-, Bearer APP_USR, MercadoPago occurrences
$validationLog = Join-Path $base 'validation.log'
"Validation run at $(Get-Date)" | Out-File -FilePath $validationLog -Encoding utf8

Write-Log "Searching for APP_USR- occurrences in rewritten history (may be slow)"
try {
    git rev-list --all | ForEach-Object { git grep -n --fixed-strings 'APP_USR-' $_ } 2>> $validationLog | Tee-Object -FilePath $validationLog -Append
} catch {}

Write-Log "Searching for 'Bearer APP_USR' occurrences"
try { git rev-list --all | ForEach-Object { git grep -n --fixed-strings 'Bearer APP_USR' $_ } 2>> $validationLog | Tee-Object -FilePath $validationLog -Append } catch {}

Write-Log "Listing any references to removed paths in the new history"
try { git log --all --name-only --pretty=format:%H | Select-Object -Unique | Select-String -Pattern 'android/android.keystore|tmp_app_auth.js|build-responses.txt' 2>> $validationLog | Tee-Object -FilePath $validationLog -Append } catch {}

Write-Host "`nValidation summary saved to: $validationLog`n"

Write-Host "IMPORTANT: The mirror clone at:`n  $base`ncontains the rewritten history. The original remote is untouched until you push.`n" -ForegroundColor Yellow

Write-Host "To force-push the rewritten history to origin run (example):`n" -ForegroundColor Cyan
Write-Host "  cd '$base'" -ForegroundColor White
Write-Host "  git remote set-url --push origin $originUrl" -ForegroundColor White
Write-Host "  git push --force origin --all" -ForegroundColor White
Write-Host "  git push --force origin --tags" -ForegroundColor White

$pushConfirm = Read-Host "Do you want me to PRINT the exact push commands again? (yes/no)"
if ($pushConfirm -match '^[Yy]') {
    Write-Host "# Push commands (do NOT run unless you understand consequences):" -ForegroundColor Red
    Write-Host "cd '$base'"
    Write-Host "git remote set-url --push origin $originUrl"
    Write-Host "git push --force origin --all"
    Write-Host "git push --force origin --tags"
}

Write-Host "Script finished. Logs: clone.log, filter-repo.log, validation.log in $base" -ForegroundColor Green

Pop-Location

# End of script

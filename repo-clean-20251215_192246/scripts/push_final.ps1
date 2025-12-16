<#
push_final.ps1

Safely perform the final destructive force-push from a cleaned mirror repository.

USAGE (manual):
  - Open PowerShell and `cd` into the mirror repository directory (the cleaned --mirror folder), for example:
      Set-Location 'C:\path\to\repo-clean-YYYYMMDD_HHMMSS'
  - Run with:
      powershell -ExecutionPolicy Bypass -File .\push_final.ps1

RULES:
  - If `origin` remote does not exist the script will add:
      git remote add origin https://github.com/supergodine/AppDropCalc.git
  - The script will list branches and tags that will be affected and display a clear destructive warning.
  - You must type exactly: PUSH  (case-sensitive) to proceed.
  - If you type anything else the script will abort and nothing will be pushed.

LOGS:
  - A summary log `push_final.log` will be written in the current directory containing timestamp, branches/tags and result.

#>

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

function Write-LogLine {
    param([string]$file, [string]$text)
    $text | Out-File -FilePath $file -Encoding utf8 -Append
}

function Exit-Abort {
    param([string]$msg)
    Write-Host $msg -ForegroundColor Yellow
    exit 1
}

# Determine working directory and log path
$cwd = Get-Location
$logFile = Join-Path $cwd.Path 'push_final.log'

Write-Host "Running push_final.ps1 in folder: $($cwd.Path)" -ForegroundColor Cyan

# Ensure we are in a git repository (bare mirror or worktree)
try {
    git rev-parse --git-dir > $null 2>&1
} catch {
    Exit-Abort "ERROR: This directory does not appear to be a git repository. Run the script from the mirror folder."
}

# Check for origin remote
$originUrl = $null
try {
    $originUrl = (git remote get-url origin) -replace "\r|\n", ''
    Write-Host "Found existing remote 'origin' -> $originUrl"
} catch {
    Write-Host "Remote 'origin' not found. Will add origin -> https://github.com/supergodine/AppDropCalc.git"
    git remote add origin https://github.com/supergodine/AppDropCalc.git
    $originUrl = 'https://github.com/supergodine/AppDropCalc.git'
}

# List branches and tags that will be affected
$branches = git for-each-ref refs/heads --format='%(refname:short)' | Sort-Object
$tags = git for-each-ref refs/tags --format='%(refname:short)' | Sort-Object

Write-Host "\nBranches that WILL be pushed (and overwritten remotely):" -ForegroundColor Red
if ($branches) { $branches | ForEach-Object { Write-Host " - $_" } } else { Write-Host " - (no branches found)" }

Write-Host "\nTags that WILL be pushed (and overwritten remotely):" -ForegroundColor Red
if ($tags) { $tags | ForEach-Object { Write-Host " - $_" } } else { Write-Host " - (no tags found)" }

Write-Host "\n***** IMPORTANT WARNING *****" -ForegroundColor Red
Write-Host "This operation will FORCE-REPLACE the remote history on 'origin'." -ForegroundColor Red
Write-Host "This is destructive and may invalidate other clones. Ensure you have backups." -ForegroundColor Red
Write-Host "Type exactly PUSH (uppercase) to proceed, or anything else to abort." -ForegroundColor Yellow

$confirm = Read-Host "Type confirmation"
if ($confirm -ne 'PUSH') {
    Write-Host "User did not confirm with PUSH. Aborting without changes." -ForegroundColor Yellow
    # write log entry
    $ts = Get-Date -Format o
    "Timestamp: $ts" | Out-File -FilePath $logFile -Encoding utf8 -Append
    "Action: ABORTED_BY_USER" | Out-File -FilePath $logFile -Encoding utf8 -Append
    "Branches: $($branches -join ', ')" | Out-File -FilePath $logFile -Encoding utf8 -Append
    "Tags: $($tags -join ', ')" | Out-File -FilePath $logFile -Encoding utf8 -Append
    exit 0
}

# Proceed with push
$start = Get-Date
"Timestamp Start: $($start.ToString('o'))" | Out-File -FilePath $logFile -Encoding utf8
"Origin: $originUrl" | Out-File -FilePath $logFile -Encoding utf8 -Append
"Branches: $($branches -join ', ')" | Out-File -FilePath $logFile -Encoding utf8 -Append
"Tags: $($tags -join ', ')" | Out-File -FilePath $logFile -Encoding utf8 -Append

Write-Host "Executing force-push of branches..." -ForegroundColor Cyan
try {
    git push --force --prune origin 'refs/heads/*' 2>&1 | Tee-Object -FilePath push_heads.log
    $headsExit = $LASTEXITCODE
} catch {
    $headsExit = 1
}

Write-Host "Executing force-push of tags..." -ForegroundColor Cyan
try {
    git push --force --prune origin 'refs/tags/*' 2>&1 | Tee-Object -FilePath push_tags.log
    $tagsExit = $LASTEXITCODE
} catch {
    $tagsExit = 1
}

$end = Get-Date
"Timestamp End: $($end.ToString('o'))" | Out-File -FilePath $logFile -Encoding utf8 -Append

# Append push logs to final log
"\n--- push_heads.log ---" | Out-File -FilePath $logFile -Encoding utf8 -Append
Get-Content push_heads.log | Out-File -FilePath $logFile -Encoding utf8 -Append
"\n--- push_tags.log ---" | Out-File -FilePath $logFile -Encoding utf8 -Append
Get-Content push_tags.log | Out-File -FilePath $logFile -Encoding utf8 -Append

if ($headsExit -eq 0 -and $tagsExit -eq 0) {
    Write-Host "HISTÓRICO REMOTO ATUALIZADO COM SUCESSO" -ForegroundColor Green
    "Result: SUCCESS" | Out-File -FilePath $logFile -Encoding utf8 -Append
} else {
    Write-Host "ERROR: One or more push operations failed. Check push_heads.log and push_tags.log" -ForegroundColor Red
    "Result: FAILURE" | Out-File -FilePath $logFile -Encoding utf8 -Append
}

Write-Host "Push operation complete. Log written to: $logFile" -ForegroundColor Cyan

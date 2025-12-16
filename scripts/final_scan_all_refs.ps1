# Final repo-wide scan for sensitive tokens and file presence
$logApp = "$(Resolve-Path .\scripts)\final_scan_APP_USR.log"
$logBearer = "$(Resolve-Path .\scripts)\final_scan_BEARER_APP_USR.log"
$logFile = "$(Resolve-Path .\scripts)\final_scan_tmp_app_auth.log"

# Initialize logs
"Start time: $(Get-Date -Format o)" | Out-File -FilePath $logApp -Encoding utf8
"Start time: $(Get-Date -Format o)" | Out-File -FilePath $logBearer -Encoding utf8
"Start time: $(Get-Date -Format o)" | Out-File -FilePath $logFile -Encoding utf8

Write-Host "Listing total commits to scan..."
$commits = git rev-list --all
Write-Host "Commits found: $($commits.Count)"

# Scan for APP_USR-
Write-Host "Scanning commits for literal 'APP_USR-'..."
foreach ($c in $commits) {
    $out = git grep -n --fixed-strings 'APP_USR-' $c 2>$null
    if ($out) {
        foreach ($line in $out) { "$c`: $line" | Out-File -FilePath $logApp -Append -Encoding utf8 }
    }
}

# If only header present, write NO_MATCHES
if ((Get-Content $logApp -Raw).Trim().Length -le 0 -or ((Get-Content $logApp -Raw).Trim() -match '^Start time:')) {
    "NO_MATCHES_APP_USR" | Out-File -FilePath $logApp -Append -Encoding utf8
    Write-Host "No APP_USR- occurrences found across all refs."
} else {
    Write-Host "APP_USR- occurrences appended to $logApp"
}

# Scan for 'Bearer APP_USR-'
Write-Host "Scanning commits for literal 'Bearer APP_USR-'..."
foreach ($c in $commits) {
    $out = git grep -n --fixed-strings 'Bearer APP_USR-' $c 2>$null
    if ($out) {
        foreach ($line in $out) { "$c`: $line" | Out-File -FilePath $logBearer -Append -Encoding utf8 }
    }
}
if ((Get-Content $logBearer -Raw).Trim().Length -le 0 -or ((Get-Content $logBearer -Raw).Trim() -match '^Start time:')) {
    "NO_MATCHES_BEARER_APP_USR" | Out-File -FilePath $logBearer -Append -Encoding utf8
    Write-Host "No 'Bearer APP_USR-' occurrences found across all refs."
} else {
    Write-Host "Bearer occurrences appended to $logBearer"
}

# Scan for file name tmp_app_auth.js in trees
Write-Host "Scanning commits for file name 'tmp_app_auth.js' in trees..."
foreach ($c in $commits) {
    $files = git ls-tree -r $c --name-only 2>$null
    if ($files -and ($files -match 'tmp_app_auth.js')) {
        # get matching lines
        foreach ($f in $files) { if ($f -eq 'tmp_app_auth.js') { "$c`: $f" | Out-File -FilePath $logFile -Append -Encoding utf8 } }
    }
}
if ((Get-Content $logFile -Raw).Trim().Length -le 0 -or ((Get-Content $logFile -Raw).Trim() -match '^Start time:')) {
    "NO_MATCHES_TMP_FILE" | Out-File -FilePath $logFile -Append -Encoding utf8
    Write-Host "tmp_app_auth.js not found in any commit tree."
} else {
    Write-Host "File matches appended to $logFile"
}

"End time: $(Get-Date -Format o)" | Out-File -FilePath $logApp -Append -Encoding utf8
"End time: $(Get-Date -Format o)" | Out-File -FilePath $logBearer -Append -Encoding utf8
"End time: $(Get-Date -Format o)" | Out-File -FilePath $logFile -Append -Encoding utf8

Write-Host "Logs written to:`n $logApp`n $logBearer`n $logFile"
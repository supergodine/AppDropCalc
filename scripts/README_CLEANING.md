Git history cleaning helper (git-filter-repo)

Overview
--------
This folder contains helper files to safely remove sensitive files and tokens from the Git history using `git-filter-repo`.

Files
- `clean_git_history.ps1` - PowerShell interactive script. It:
  - creates a `--mirror` clone
  - runs `git-filter-repo` using `paths-to-remove.txt` and `replacements.txt`
  - writes logs: `clone.log`, `filter-repo.log`, `validation.log`
  - prints the push commands (it WILL NOT execute `git push --force`)
- `paths-to-remove.txt` - list of literal paths and globs to delete from history
- `replacements.txt` - replacement rules for `--replace-text` to redact token-like strings

Before running
-----------
1. Install prerequisites: `git`, `python3`, `pip`.
2. Install `git-filter-repo`: `pip install --user git-filter-repo`.
3. From repository root, run in PowerShell (as the user who will push):

    powershell -ExecutionPolicy Bypass -File .\scripts\clean_git_history.ps1

Notes
-----
- The script is interactive and will ask for confirmation. It will not perform the final push.
- Review `paths-to-remove.txt` and `replacements.txt` before running. Adjust regexes carefully.

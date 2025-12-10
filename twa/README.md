TWA build helper

This folder contains a PowerShell helper to initialize and build a Trusted Web Activity (TWA) Android project using Bubblewrap.

Prerequisites (must be installed on the machine where you run the script):
- Node.js and npm (npx)
- Java JDK (keytool available in PATH)
- Android SDK & command-line tools (Gradle should be available via Bubblewrap/Android SDK)
- @bubblewrap/cli (will be invoked via npx)

How to run (PowerShell):

1. (Optional) set keystore password env vars to avoid interactive prompts:

```powershell
$env:TWA_KEYSTORE_PASS = 'your-keystore-password'
$env:TWA_KEY_ALIAS_PASS = 'your-key-alias-password'
```

2. From repo root run:

```powershell
cd twa
./build-twa.ps1
```

Notes:
- The script will generate a keystore named `dropcalc-keystore.jks` if none exists (uses password from env var or default 'changeit').
- After `bubblewrap init` you must host the generated `assetlinks.json` (replace the fingerprint) at `https://app-drop-calc.vercel.app/.well-known/assetlinks.json`.
- If you need a fully non-interactive build, ensure all prerequisites and environment variables are set and Bubblewrap flags are supported in your version.

Assetlinks template:
- A template `frontend/public/.well-known/assetlinks.json.template` was added; replace the placeholder fingerprint with the SHA-256 fingerprint of the keystore certificate.

If you want, I can try to run the PowerShell script here, but building an .aab requires Android SDK/Gradle/Java installed in this environment; if they are not present the build will fail. See next steps in the final message.

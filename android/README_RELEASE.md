# Android / TWA Release Checklist (Play Store)

This file documents the exact, reproducible steps to prepare, build and upload a TWA-generated Android App Bundle (.aab) to Google Play. Follow carefully.

## Key principles
- Never commit keystore files or secrets to the repository. Keep them outside the repo (e.g. `../keystore/android.keystore`) and protect with OS file permissions / secrets manager.
- Use Play App Signing (recommended). Create an upload key locally and keep only the upload key outside the repo.
- Verify privacy policy and Data Safety form before upload.

## Files of interest
- `twa-manifest-final.json` — Bubblewrap manifest used for `bubblewrap build`.
  - NOTE: `signingKey.path` intentionally points to a path OUTSIDE the repo: `../keystore/android.keystore`.
- `temp-manifest.json`, `twa-manifest.json` — other intermediary manifests.

## Prerequisites (local machine)
- Java (LTS recommended: 17) installed and `java` in PATH.
- Android SDK installed; set `ANDROID_SDK_ROOT` / `ANDROID_HOME`.
- `bubblewrap` CLI installed globally: `npm install -g @bubblewrap/cli` or use `npx @bubblewrap/cli`.
- Ensure `keytool` (JDK) is available.

## 1) Generate an upload key (if you don't have one)
Run locally and NEVER commit the keystore.

```powershell
cd C:\Users\DIEGO\Desktop\calculadora\android
mkdir ..\keystore    # create directory outside repo
keytool -genkeypair -v -keystore ..\keystore\android.keystore -alias dropcalc -keyalg RSA -keysize 2048 -validity 10000
# follow prompts and set a secure password
```

Store the generated keystore in a secure location (the path referenced in `twa-manifest-final.json` is `../keystore/android.keystore`).

## 2) Validate TWA manifest and web assets
- Verify `twa-manifest-final.json` fields:
  - `host.url` must be the canonical HTTPS origin of your PWA (e.g. `https://dropcalc.vercel.app`).
  - `webManifestUrl` must be reachable and `start_url` consistent.
  - `iconUrl` and `maskableIconUrl` must be HTTPS and accessible.

Test accessibility:
```powershell
# from a machine with internet access
curl -I https://dropcalc.vercel.app/manifest.json
curl -I https://dropcalc.vercel.app/icon-192x192.png
```

## 3) Initialize Bubblewrap (one-time)
Start a simple HTTP server to serve the `temp-manifest.json` if you use a local manifest.

```powershell
cd C:\Users\DIEGO\Desktop\calculadora\android
# optional: serve the manifest locally
python -m http.server 8000
# then
bubblewrap init --manifest http://127.0.0.1:8000/temp-manifest.json
```

This creates the Android project scaffold used by `bubblewrap build`.

## 4) Build AAB (release)
From the android directory where Bubblewrap scaffold exists:

```powershell
cd C:\Users\DIEGO\Desktop\calculadora\android
# Build bundle (this uses the signingKey referenced in twa-manifest-final.json)
bubblewrap build --target=bundle
# Generated AAB: app/build/outputs/bundle/release/app-release.aab
```

If Bubblewrap asks for keystore path or alias, point it to `..\keystore\android.keystore` and use the alias `dropcalc`.

## 5) Play Console — recommended steps
1. Create new app in Play Console.
2. Upload the `.aab` file generated above.
3. Opt-in to Play App Signing (recommended). If enabled, you will upload an *upload key* (the keystore we generated). Keep the upload key safe.
4. Fill in `App Content` / `Data Safety` form accurately. Document all data collection practices.
5. Provide `Privacy Policy` URL — ensure the policy page is reachable over HTTPS (e.g. `https://dropcalc.vercel.app/privacy-policy.html`).
6. Add screenshots, feature graphic, category, contact email and URL.
7. Set target audience, content rating questionnaire, and any required disclosures.
8. Review manifest permissions — remove unnecessary ones.

## 6) Data Safety / Privacy checklist (minimum)
- Privacy Policy page hosted on your domain and linked in app listing.
- Data Safety form completed with accurate categories: e.g., Payments, Account info (if any), Device or other identifiers, Notifications (if used).
- If collecting personal or financial data, mark as collected and encrypted in transit/storage and provide justification.
- If using third-party services (e.g. Mercado Pago) ensure tokens are stored server-side and not in client.

## 7) Permissions & Manifest
- Do not request sensitive permissions unless required. For a PWA/TWA typically only `INTERNET` is required and optional `NOTIFICATIONS`.
- If using Location, explain it in privacy policy and only enable `locationDelegation` if necessary.

## 8) Testing
- Install the generated `app-release.aab` via internal test track in Play Console.
- Test installs on devices with Android 11/12/13/14 where possible.
- Validate deep links, service worker behavior, offline fallback, push notifications (if enabled).

## 9) Post-upload actions
- Rotate any credentials that were exposed previously (done separately).
- Communicate to collaborators to reclone repository after history rewrite.

## 10) Quick pre-publish checklist
- [ ] `twa-manifest-final.json` points to correct host and icons (HTTPS).
- [ ] Keystore exists outside repo at `../keystore/android.keystore` and is valid.
- [ ] `app-release.aab` built and tested.
- [ ] Privacy Policy hosted and reachable via HTTPS.
- [ ] Data Safety form completed in Play Console.
- [ ] No secrets or keystores in repository (scan with `git grep` for `APP_USR-` etc.).

---

If you want, I can:
- a) Run a final repository scan for common secret patterns (`APP_USR-`, `Bearer`, `.keystore`, etc.) and list findings; or
- b) Try to run `bubblewrap build --target=bundle` here (only if you confirm local SDK/JDK availability and that you want me to attempt a local build in this environment), or
- c) Generate the exact Play Console checklist and a ready-to-send message to testers/colleagues.

Which of the above shall I do next? (a / b / c)
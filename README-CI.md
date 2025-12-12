# CI Test Runner — README

This document explains how to run the full CI test flow locally and in CI. The flow starts a Docker Postgres instance, builds a backend image with dependencies preinstalled, runs TypeORM migrations and executes the full Jest test suite (including integration and DB tests), and finally tears down containers and volumes.

Files involved
- `docker-compose.test.yml` — compose file defining `db` (Postgres) and `backend` (prebuilt image `appdropcalc-backend:test`).
- `backend/Dockerfile.test` — Dockerfile used to build the backend image with `npm ci` (cached in image layers).
- `backend/scripts/run-tests.js` — Node orchestrator that builds the image (unless `SKIP_BUILD=true`), starts containers, waits for DB, runs migrations and tests, and tears down.
- `backend/scripts/wait-for-db.js` — small helper to poll Postgres until it becomes available.
- `backend/package.json` — `test:ci` script runs the orchestrator.

Prerequisites
- Docker and docker-compose installed and running. On Windows, Docker Desktop with WSL2 backend recommended.
- Node.js (for `npm run test:ci` which invokes the node orchestrator). The orchestrator uses the host's `docker` CLI.

Local usage

1) From project root — build image + run tests (recommended):

Linux/macOS (bash):
```bash
cd backend
npm run test:ci
```

Windows PowerShell:
```powershell
cd backend
npm run test:ci
```

The orchestrator will:
- Build `appdropcalc-backend:test` from `backend/Dockerfile.test` (this installs `npm ci` into the image; fast on subsequent runs due to Docker layer cache).
- Start `db` and `backend` services via `docker-compose.test.yml`.
- Execute `wait-for-db.js` inside the backend container to ensure Postgres is ready.
- Run migrations via `npm run typeorm:migration:run` inside backend container.
- Run Jest (full suite) inside backend container.
- Tear down containers and volumes when finished.

2) If you already built the image and want to skip rebuilding:

```bash
cd backend
export SKIP_BUILD=true   # bash
setx SKIP_BUILD true     # powershell (or use $env:SKIP_BUILD = 'true' for current session)
npm run test:ci
```

CI (GitHub Actions)
- The provided workflow `.github/workflows/test.yml` builds the backend image with Docker Buildx and caches build layers using GitHub Actions cache, then runs `npm run test:ci` with `SKIP_BUILD=true` so the prebuilt image is used.

Troubleshooting
- Docker permissions: ensure your user can run `docker` and `docker-compose`. On Linux you might need to add your user to the `docker` group or run the commands with `sudo`.
- Ports in use: `docker-compose.test.yml` maps Postgres to host `5432`. If your host already runs Postgres on `5432`, stop it for the test or change the port mapping in `docker-compose.test.yml` (and update `wait-for-db`/`DATABASE_URL` accordingly).
- Rebuild image from scratch: if you need a clean image, run:
  ```bash
  docker build -f backend/Dockerfile.test -t appdropcalc-backend:test .
  ```
- Reset volumes (delete DB data):
  ```bash
  docker-compose -f docker-compose.test.yml down -v
  ```
- If the tests fail inside CI, inspect test logs and upload artifacts. The workflow attempts to upload `backend/coverage` on failure — adapt that path if you use another reporter.

Run only unit tests locally
- The backend Jest config is optimized for local fast runs by excluding DB/integration tests by default. From `backend` run:

```markdown
# CI Test Runner — README

This document explains how to run the full CI test flow locally and in CI. The flow starts a Docker Postgres instance, builds a backend image with dependencies preinstalled, runs TypeORM migrations and executes the full Jest test suite (including integration and DB tests), and finally tears down containers and volumes.

Files involved
- `docker-compose.test.yml` — compose file defining `db` (Postgres) and `backend` (prebuilt image `appdropcalc-backend:test`).
- `backend/Dockerfile.test` — Dockerfile used to build the backend image with `npm ci` (cached in image layers).
- `backend/scripts/run-tests.js` — Node orchestrator that builds the image (unless `SKIP_BUILD=true`), starts containers, waits for DB, runs migrations and tests, and tears down.
- `backend/scripts/wait-for-db.js` — small helper to poll Postgres until it becomes available.
- `backend/package.json` — `test:ci` script runs the orchestrator.
- `Makefile` — convenience targets to run build/test/clean tasks from the repository root.
- `scripts/` — convenience shell and PowerShell wrappers for building image, running CI flow and cleaning resources (`build-image.sh|ps1`, `test-ci.sh|ps1`, `clean.sh|ps1`).

Prerequisites
- Docker and docker-compose installed and running. On Windows, Docker Desktop with WSL2 backend recommended.
- Node.js (for `npm run test:ci` which invokes the node orchestrator). The orchestrator uses the host's `docker` CLI.

Usage (Makefile)

From project root you can use the provided `Makefile` targets. Examples (Linux/macOS):

```bash
make build-test-image     # builds appdropcalc-backend:test
make test-ci              # runs the full pipeline (invokes ./scripts/test-ci.sh)
make test-unit            # runs only unit tests (no Docker)
make test-integration     # runs only integration tests (needs Docker)
make clean                # remove containers, volumes and test image
```

On Windows you can run the equivalent PowerShell helpers under `scripts/` (or use `make` if available):

```powershell
./scripts/build-image.ps1
./scripts/test-ci.ps1
./scripts/clean.ps1
```

Notes about the convenience scripts
- `scripts/test-ci.sh` / `scripts/test-ci.ps1` simply call the Node orchestrator `backend/scripts/run-tests.js` from the repository root and pass through any arguments.
- `scripts/build-image.(sh|ps1)` builds `appdropcalc-backend:test` using `backend/Dockerfile.test`.
- `scripts/clean.(sh|ps1)` brings down compose services in `docker-compose.test.yml` and removes the test image.

Local usage — full flow (recommended)

From project root (shell):

```bash
make test-ci
```

Or using the script directly:

```bash
./scripts/test-ci.sh
```

The orchestrator will:
- Build `appdropcalc-backend:test` from `backend/Dockerfile.test` (this installs `npm ci` into the image; fast on subsequent runs due to Docker layer cache), unless `SKIP_BUILD=true`.
- Start `db` and `backend` services via `docker-compose.test.yml`.
- Wait for Postgres to be ready.
- Run migrations via `npm run typeorm:migration:run` inside the backend container.
- Run Jest (full suite) inside the backend container.
- Tear down containers and volumes when finished.

Skipping a rebuild

If you already built the image and want to skip rebuilding:

```bash
export SKIP_BUILD=true   # bash/macOS
setx SKIP_BUILD true     # Windows persistent; or use $env:SKIP_BUILD = 'true' in PowerShell session
make test-ci
```

CI (GitHub Actions)
- The included workflow `.github/workflows/test.yml` builds the backend image with Docker Buildx and caches build layers using GitHub Actions cache, then runs `npm run test:ci` with `SKIP_BUILD=true` so the prebuilt image is used.

Troubleshooting
- Docker permissions: ensure your user can run `docker` and `docker-compose`. On Linux you might need to add your user to the `docker` group or run the commands with `sudo`.
- Ports in use: `docker-compose.test.yml` maps Postgres to host `5432`. If your host already runs Postgres on `5432`, stop it for the test or change the port mapping in `docker-compose.test.yml` (and update `wait-for-db`/`DATABASE_URL` accordingly).
- Rebuild image from scratch: if you need a clean image, run:
  ```bash
  docker build -f backend/Dockerfile.test -t appdropcalc-backend:test .
  ```
- Reset volumes (delete DB data):
  ```bash
  docker-compose -f docker-compose.test.yml down -v
  ```
- If the tests fail inside CI, inspect test logs and upload artifacts. The workflow attempts to upload `backend/coverage` on failure — adapt that path if you use another reporter.

Run only unit tests locally
- The backend Jest config is optimized for local fast runs by excluding DB/integration tests by default. From `backend` run:

```bash
npm test
```

Run only integration tests locally (requires DB)
- Build image and run DB, then exec into backend container and run the integration specs:

```bash
make build-test-image
docker-compose -f docker-compose.test.yml up -d db backend
docker-compose -f docker-compose.test.yml exec -T backend sh -c "npm run typeorm:migration:run && npx jest --runInBand --testRegex '.*(\.pg\.spec|\.db\.spec|\.integration\.spec)\\.ts$'"
docker-compose -f docker-compose.test.yml down -v
```

Contact / Improvements
- If you'd like, I can further optimize by producing a multi-stage image and caching compiled TypeScript output, or by adding a dedicated `runner` service so CI runs inside a container without invoking the host's docker CLI.

```

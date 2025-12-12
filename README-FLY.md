# Deploying the backend to Fly

This file explains how to deploy the `backend` service to Fly.io and how the repository is set up to support that.

Prerequisites
- `flyctl` installed (https://fly.io/docs/hands-on/install-flyctl/)
- Fly account and `FLY_API_TOKEN` (set in environment or GitHub secrets)
- An app created on Fly (or you'll create one during the process)

Quick local deploy

1. Login and create app (one-time):

```bash
flyctl auth login
flyctl apps create <your-app-name> --region gru
```

2. Set required secrets (example):

```bash
flyctl secrets set DATABASE_URL="postgres://user:pass@host:5432/db" JWT_SECRET="your_jwt_secret"
```

3. Deploy (this repository includes `fly.toml` at the repo root):

```bash
export FLY_APP_NAME=<your-app-name>
export FLY_API_TOKEN=<your-token>
./scripts/deploy-fly.sh
```

Notes
- `fly.toml` contains a `release_command` that runs `npm run typeorm:migration:run` during deploy. That ensures TypeORM migrations execute automatically as part of the deployment lifecycle.
- The GitHub Actions workflow `.github/workflows/deploy-fly.yml` is configured to run on push to `main` and via manual trigger. It uses repository secrets `FLY_API_TOKEN` and `FLY_APP_NAME`.

Security
- Do not store secrets in the repo. Use `flyctl secrets set` or GitHub repository secrets.

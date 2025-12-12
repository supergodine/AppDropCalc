#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

if [ -z "${FLY_APP_NAME-}" ]; then
  echo "Error: FLY_APP_NAME not set. Export FLY_APP_NAME or pass as first argument."
  echo "Usage: FLY_APP_NAME=my-app ./scripts/deploy-fly.sh"
  exit 1
fi

if [ -z "${FLY_API_TOKEN-}" ]; then
  echo "Error: FLY_API_TOKEN not set. Export your Fly API token as FLY_API_TOKEN."
  exit 1
fi

echo "Deploying backend to Fly app: $FLY_APP_NAME"

# Ensure flyctl is available
if ! command -v flyctl >/dev/null 2>&1; then
  echo "flyctl not found. Attempting to install flyctl..."
  curl -L https://fly.io/install.sh | sh
  export PATH="$HOME/.fly/bin:$PATH"
fi

echo "Running: flyctl deploy --app $FLY_APP_NAME --remote-only"
flyctl deploy --app "$FLY_APP_NAME" --remote-only

echo "Deploy triggered. Fly will run release_command (migrations) if configured in fly.toml."

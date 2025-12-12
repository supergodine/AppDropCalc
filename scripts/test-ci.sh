#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "Running CI test orchestrator (node backend/scripts/run-tests.js)..."

# Allow overriding SKIP_BUILD externally
if [ -z "${SKIP_BUILD-}" ]; then
  export SKIP_BUILD=
fi

node backend/scripts/run-tests.js "$@"

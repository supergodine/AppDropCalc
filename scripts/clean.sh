#!/usr/bin/env bash
set -euo pipefail

echo "Stopping and removing containers and volumes from docker-compose.test.yml..."
docker-compose -f docker-compose.test.yml down -v --remove-orphans || true

echo "Removing test image 'appdropcalc-backend:test' (if exists)..."
docker image rm appdropcalc-backend:test || true

echo "Clean complete."

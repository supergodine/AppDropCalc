#!/usr/bin/env bash
set -euo pipefail
echo "Building backend test image 'appdropcalc-backend:test'..."
docker build -f backend/Dockerfile.test -t appdropcalc-backend:test .
echo "Image built: appdropcalc-backend:test"

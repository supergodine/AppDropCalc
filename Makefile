SHELL:=/bin/bash
.PHONY: build-test-image test-ci test-unit test-integration clean

# Build backend test image used by docker-compose.test.yml
build-test-image:
	docker build -f backend/Dockerfile.test -t appdropcalc-backend:test .

# Run full CI-style pipeline (build image + docker-compose + run-tests.js)
# By default this uses the shell script. On Windows you can run the PS1 directly.
test-ci:
	./scripts/test-ci.sh

# Run only unit tests (fast, no Docker)
test-unit:
	cd backend && npm test

# Run only integration tests (requires Docker + Postgres)
test-integration:
	./scripts/build-image.sh
	docker-compose -f docker-compose.test.yml up -d db backend
	docker-compose -f docker-compose.test.yml exec -T backend sh -c "npm run typeorm:migration:run && npx jest --runInBand --testRegex '.*(\.pg\.spec|\.db\.spec|\.integration\.spec)\\.ts$'"
	docker-compose -f docker-compose.test.yml down -v

# Remove containers, volumes and the test image
clean:
	./scripts/clean.sh

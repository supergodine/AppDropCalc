const { spawnSync } = require('child_process');
const path = require('path');

function run(cmd, args, opts = {}) {
  console.log('> ' + [cmd].concat(args || []).join(' '));
  const r = spawnSync(cmd, args, { stdio: 'inherit', shell: false, ...opts });
  if (r.status !== 0) {
    throw new Error(`${cmd} ${args.join(' ')} failed with exit ${r.status}`);
  }
}

async function main() {
  try {
    const repoRoot = path.resolve(__dirname, '..', '..');
    const composeFile = path.resolve(repoRoot, 'docker-compose.test.yml');

    // Build backend image unless explicitly skipped
    if (!process.env.SKIP_BUILD) {
      console.log('Building backend image (appdropcalc-backend:test)');
      run('docker', ['build', '-f', path.join(repoRoot, 'backend', 'Dockerfile.test'), '-t', 'appdropcalc-backend:test', repoRoot]);
    } else {
      console.log('SKIP_BUILD set — skipping image build');
    }

    // Start db and backend containers
    run('docker-compose', ['-f', composeFile, 'up', '-d', 'db', 'backend']);

    // Wait for DB inside backend container (use the container's internal hostname 'db')
    run('docker-compose', ['-f', composeFile, 'exec', '-T', 'backend', 'sh', '-c', "DATABASE_URL=postgres://postgres:postgres@db:5432/dropcalc_test node ./scripts/wait-for-db.js" ], { cwd: path.join(repoRoot, 'backend') });

    // Run migrations inside backend container
    run('docker-compose', ['-f', composeFile, 'exec', '-T', 'backend', 'sh', '-c', "DATABASE_URL=postgres://postgres:postgres@db:5432/dropcalc_test npm run typeorm:migration:run" ], { cwd: path.join(repoRoot, 'backend') });

    // Run full test suite inside backend container
    run('docker-compose', ['-f', composeFile, 'exec', '-T', 'backend', 'sh', '-c', "DATABASE_URL=postgres://postgres:postgres@db:5432/dropcalc_test npx jest --runInBand --testRegex '.*\\.spec\\.ts$'" ], { cwd: path.join(repoRoot, 'backend') });

    // Tear down
    run('docker-compose', ['-f', composeFile, 'down', '-v']);

    console.log('\nAll steps completed successfully');
    process.exit(0);
  } catch (err) {
    console.error('\nError during test run:', err);
    try {
      const repoRoot = path.resolve(__dirname, '..', '..');
      const composeFile = path.resolve(repoRoot, 'docker-compose.test.yml');
      spawnSync('docker-compose', ['-f', composeFile, 'down', '-v'], { stdio: 'inherit' });
    } catch (e) {}
    process.exit(1);
  }
}

main();

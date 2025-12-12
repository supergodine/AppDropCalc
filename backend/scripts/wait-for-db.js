#!/usr/bin/env node
const { Client } = require('pg');

const DATABASE_URL = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/dropcalc_test';
const TIMEOUT_MS = parseInt(process.env.WAIT_FOR_DB_TIMEOUT || '60000', 10);
const INTERVAL_MS = 1000;

async function waitForDb() {
  const start = Date.now();
  while (Date.now() - start < TIMEOUT_MS) {
    try {
      const client = new Client({ connectionString: DATABASE_URL });
      await client.connect();
      await client.query('SELECT 1');
      await client.end();
      console.log('[wait-for-db] Postgres is available');
      return process.exit(0);
    } catch (err) {
      process.stdout.write('.');
      await new Promise((r) => setTimeout(r, INTERVAL_MS));
    }
  }
  console.error('\n[wait-for-db] Timeout waiting for Postgres');
  process.exit(1);
}

waitForDb();

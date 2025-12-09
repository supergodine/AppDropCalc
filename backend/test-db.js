const { Client } = require('pg');
const connectionString = process.env.DATABASE_URL || process.env.CONNECTION_STRING || '';
if (!connectionString) {
  console.error('Please set DATABASE_URL in environment to run this test.');
  process.exit(1);
}
const client = new Client({
  connectionString,
  ssl: { rejectUnauthorized: false }
});
client.connect()
  .then(() => {
    console.log('Conexão OK!');
    return client.end();
  })
  .catch(err => {
    console.error('Erro de conexão:', err);
  });

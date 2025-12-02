const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgresql://diego:P6XhjDqhdOIgPcTCG7WKJjmjVFYYwr9M@dpg-d4kphmgdl3ps73fk0ci0-a.oregon-postgres.render.com/appdb_xyim',
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

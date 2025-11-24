"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
require('dotenv').config();
const dataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    logging: true,
});
async function testDatabaseConnection() {
    try {
        await dataSource.initialize();
        console.log('✅ Conectado ao PostgreSQL com sucesso!');
        await dataSource.destroy();
        process.exit(0);
    }
    catch (error) {
        console.error('❌ Falha ao conectar ao PostgreSQL:', error);
        process.exit(1);
    }
}
testDatabaseConnection();
//# sourceMappingURL=connection-test.js.map
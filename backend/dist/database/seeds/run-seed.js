"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runSeed = runSeed;
const typeorm_1 = require("typeorm");
const preset_seed_1 = require("./preset-seed");
const admin_seed_1 = require("./admin-seed");
async function createDataSource() {
    const dataSource = new typeorm_1.DataSource({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        host: process.env.DATABASE_HOST || 'localhost',
        port: parseInt(process.env.DATABASE_PORT) || 5432,
        username: process.env.DATABASE_USERNAME || 'postgres',
        password: process.env.DATABASE_PASSWORD || 'postgres123',
        database: process.env.DATABASE_NAME || 'dropcalc',
        entities: [
            'src/modules/**/entities/*.entity.ts',
            'dist/modules/**/entities/*.entity.js',
        ],
        synchronize: true,
        logging: false,
    });
    return dataSource;
}
async function runSeed() {
    console.log('🌱 Iniciando processo de seed...');
    const dataSource = await createDataSource();
    try {
        await dataSource.initialize();
        console.log('✅ Conexão com banco estabelecida');
        await (0, admin_seed_1.seedAdmin)(dataSource);
        await (0, preset_seed_1.seedPresets)(dataSource);
        console.log('🎉 Todos os seeds foram executados com sucesso!');
    }
    catch (error) {
        console.error('❌ Erro durante execução dos seeds:', error);
        process.exit(1);
    }
    finally {
        await dataSource.destroy();
        console.log('🔌 Conexão com banco encerrada');
    }
}
if (require.main === module) {
    runSeed();
}
//# sourceMappingURL=run-seed.js.map
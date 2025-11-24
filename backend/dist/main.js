"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const data_source_1 = require("./database/data-source");
async function testDatabaseConnectionAndMigrate() {
    try {
        await data_source_1.AppDataSource.initialize();
        console.log('✅ Conectado ao PostgreSQL com sucesso!');
        await data_source_1.AppDataSource.runMigrations();
        console.log('✅ Migrações executadas com sucesso!');
        await data_source_1.AppDataSource.destroy();
    }
    catch (error) {
        console.error('❌ Falha ao conectar ou migrar o banco:', error);
        process.exit(1);
    }
}
async function bootstrap() {
    await testDatabaseConnectionAndMigrate();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const expressApp = app.getHttpAdapter().getInstance();
    expressApp.set('trust proxy', 1);
    app.use((req, res, next) => {
        const allowedOrigins = [
            'https://app-drop-calc.vercel.app',
            'https://dropcalc-front.vercel.app',
            'http://localhost:5173',
        ];
        const origin = req.headers.origin;
        if (allowedOrigins.includes(origin)) {
            res.header('Access-Control-Allow-Origin', origin);
        }
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept, Cache-Control');
        res.header('Access-Control-Allow-Credentials', 'true');
        if (req.method === 'OPTIONS') {
            res.status(200).end();
            return;
        }
        next();
    });
    app.enableCors({
        origin: [
            'https://app-drop-calc.vercel.app',
            'https://dropcalc-front.vercel.app',
            'http://localhost:5173',
        ],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Cache-Control'],
        credentials: true,
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Calculadora de Preços API')
        .setDescription('API para calculadora de preços de dropshipping')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    await app.listen(process.env.PORT || 3000, '0.0.0.0');
    console.log('🚀 Backend rodando!');
}
bootstrap();
//# sourceMappingURL=main.js.map
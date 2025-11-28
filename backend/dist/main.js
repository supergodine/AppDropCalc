"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const data_source_1 = require("./database/data-source");
const common_1 = require("@nestjs/common");
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
    app.getHttpAdapter().getInstance().set('trust proxy', 1);
    const allowedOrigins = [
        'https://app-drop-calc.vercel.app',
        'https://dropcalc-front.vercel.app',
        'http://localhost:5173',
    ];
    app.enableCors({
        origin: function (origin, callback) {
            if (!origin)
                return callback(null, true);
            if (allowedOrigins.indexOf(origin) !== -1) {
                callback(null, true);
            }
            else {
                console.log('❌ Blocked by CORS:', origin);
                callback(new Error('Not allowed by CORS'));
            }
        },
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: [
            'Origin',
            'X-Requested-With',
            'Content-Type',
            'Accept',
            'Authorization',
            'Access-Control-Allow-Headers',
            'Access-Control-Request-Headers',
            'Access-Control-Allow-Origin',
            'Cache-Control'
        ],
        exposedHeaders: ['Authorization'],
        credentials: true,
        preflightContinue: false,
        optionsSuccessStatus: 204
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Calculadora de Preços API')
        .setDescription('API para calculadora de preços de dropshipping')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    const port = process.env.PORT || 3000;
    await app.listen(port, '0.0.0.0');
    console.log('🚀 Backend rodando na porta:', port);
    console.log('📋 CORS configurado para origins:', allowedOrigins);
    console.log('🔗 Swagger: http://localhost:' + port + '/api/docs');
}
bootstrap();
//# sourceMappingURL=main.js.map
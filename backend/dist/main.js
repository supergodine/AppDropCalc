/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.controller.ts":
/*!*******************************!*\
  !*** ./src/app.controller.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./src/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    getHealth() {
        return this.appService.getHealth();
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Health check da API' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('health'),
    (0, swagger_1.ApiOperation)({ summary: 'Status da aplicação' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getHealth", null);
exports.AppController = AppController = __decorate([
    (0, swagger_1.ApiTags)('app'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./src/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./src/app.service.ts");
const calc_module_1 = __webpack_require__(/*! ./calc/calc.module */ "./src/calc/calc.module.ts");
const auth_module_1 = __webpack_require__(/*! ./modules/auth/auth.module */ "./src/modules/auth/auth.module.ts");
const users_module_1 = __webpack_require__(/*! ./modules/users/users.module */ "./src/modules/users/users.module.ts");
const exchange_module_1 = __webpack_require__(/*! ./modules/exchange/exchange.module */ "./src/modules/exchange/exchange.module.ts");
const database_config_1 = __webpack_require__(/*! ./config/database.config */ "./src/config/database.config.ts");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: process.env.NODE_ENV === 'production'
                    ? ['.env.production']
                    : ['.env', '.env.local', '.env.development'],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useClass: database_config_1.DatabaseConfig,
                inject: [database_config_1.DatabaseConfig],
            }),
            calc_module_1.CalcModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            exchange_module_1.ExchangeModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ }),

/***/ "./src/app.service.ts":
/*!****************************!*\
  !*** ./src/app.service.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = class AppService {
    getHello() {
        return 'DropCalc API - Calculadora de Precificação para Dropshipping 🚀';
    }
    getHealth() {
        return {
            status: 'ok',
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
            environment: process.env.NODE_ENV || 'development',
            version: '1.0.0',
            message: 'DropCalc API está funcionando perfeitamente!',
        };
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ }),

/***/ "./src/calc/calc.controller.ts":
/*!*************************************!*\
  !*** ./src/calc/calc.controller.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExchangeController = exports.CalcController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const calc_service_1 = __webpack_require__(/*! ./calc.service */ "./src/calc/calc.service.ts");
const exchange_service_1 = __webpack_require__(/*! ../exchange/exchange.service */ "./src/exchange/exchange.service.ts");
let CalcController = class CalcController {
    constructor(calcService) {
        this.calcService = calcService;
    }
    async calcular(dados) {
        return await this.calcService.calcularPrecoIdeal(dados);
    }
    getPlatforms() {
        return this.calcService.getPlatforms();
    }
    getGateways() {
        return this.calcService.getGateways();
    }
};
exports.CalcController = CalcController;
__decorate([
    (0, common_1.Post)('calcular'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof calc_service_1.CalculationDto !== "undefined" && calc_service_1.CalculationDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], CalcController.prototype, "calcular", null);
__decorate([
    (0, common_1.Get)('platforms'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CalcController.prototype, "getPlatforms", null);
__decorate([
    (0, common_1.Get)('gateways'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CalcController.prototype, "getGateways", null);
exports.CalcController = CalcController = __decorate([
    (0, common_1.Controller)('calc'),
    __metadata("design:paramtypes", [typeof (_a = typeof calc_service_1.CalcService !== "undefined" && calc_service_1.CalcService) === "function" ? _a : Object])
], CalcController);
let ExchangeController = class ExchangeController {
    constructor(exchangeService) {
        this.exchangeService = exchangeService;
    }
    async getCurrencies() {
        return await this.exchangeService.getSupportedCurrencies();
    }
    async getExchangeRate(from, to) {
        const rate = await this.exchangeService.getCurrentRate(from, to);
        return { from, to, rate, timestamp: new Date().toISOString() };
    }
};
exports.ExchangeController = ExchangeController;
__decorate([
    (0, common_1.Get)('currencies'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExchangeController.prototype, "getCurrencies", null);
__decorate([
    (0, common_1.Get)('rate/:from/:to'),
    __param(0, (0, common_1.Param)('from')),
    __param(1, (0, common_1.Param)('to')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ExchangeController.prototype, "getExchangeRate", null);
exports.ExchangeController = ExchangeController = __decorate([
    (0, common_1.Controller)('exchange'),
    __metadata("design:paramtypes", [typeof (_c = typeof exchange_service_1.ExchangeService !== "undefined" && exchange_service_1.ExchangeService) === "function" ? _c : Object])
], ExchangeController);


/***/ }),

/***/ "./src/calc/calc.module.ts":
/*!*********************************!*\
  !*** ./src/calc/calc.module.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CalcModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const calc_controller_1 = __webpack_require__(/*! ./calc.controller */ "./src/calc/calc.controller.ts");
const calc_service_1 = __webpack_require__(/*! ./calc.service */ "./src/calc/calc.service.ts");
const exchange_service_1 = __webpack_require__(/*! ../exchange/exchange.service */ "./src/exchange/exchange.service.ts");
let CalcModule = class CalcModule {
};
exports.CalcModule = CalcModule;
exports.CalcModule = CalcModule = __decorate([
    (0, common_1.Module)({
        controllers: [calc_controller_1.CalcController, calc_controller_1.ExchangeController],
        providers: [calc_service_1.CalcService, exchange_service_1.ExchangeService],
        exports: [calc_service_1.CalcService, exchange_service_1.ExchangeService],
    })
], CalcModule);


/***/ }),

/***/ "./src/calc/calc.service.ts":
/*!**********************************!*\
  !*** ./src/calc/calc.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CalcService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const exchange_service_1 = __webpack_require__(/*! ../exchange/exchange.service */ "./src/exchange/exchange.service.ts");
let CalcService = class CalcService {
    constructor(exchangeService) {
        this.exchangeService = exchangeService;
        this.platforms = [
            {
                id: 'shopify',
                nome: 'Shopify',
                taxa: 2.9,
                adicional: 0.30,
                descricao: 'E-commerce completo com apps e temas',
                tipo: 'ECOMMERCE'
            },
            {
                id: 'nuvemshop',
                nome: 'Nuvemshop',
                taxa: 2.0,
                adicional: 0.49,
                descricao: 'Plataforma brasileira de e-commerce',
                tipo: 'ECOMMERCE'
            },
            {
                id: 'woocommerce',
                nome: 'WooCommerce',
                taxa: 0,
                adicional: 0,
                descricao: 'Plugin WordPress gratuito',
                tipo: 'ECOMMERCE'
            },
            {
                id: 'mercadolivre',
                nome: 'Mercado Livre',
                taxa: 16,
                adicional: 0,
                descricao: 'Maior marketplace da América Latina',
                tipo: 'MARKETPLACE'
            },
            {
                id: 'amazon',
                nome: 'Amazon Brasil',
                taxa: 15,
                adicional: 0,
                descricao: 'Marketplace global',
                tipo: 'MARKETPLACE'
            },
            {
                id: 'shopee',
                nome: 'Shopee',
                taxa: 10,
                adicional: 0,
                descricao: 'Marketplace asiático em crescimento',
                tipo: 'MARKETPLACE'
            }
        ];
        this.gateways = [
            {
                id: 'stripe',
                nome: 'Stripe',
                taxa: 2.9,
                adicional: 0.30,
                descricao: 'Gateway internacional líder',
                metodosPagamento: ['cartao', 'pix', 'boleto']
            },
            {
                id: 'mercadopago',
                nome: 'Mercado Pago',
                taxa: 4.99,
                adicional: 0,
                descricao: 'Gateway brasileiro do Mercado Livre',
                metodosPagamento: ['cartao', 'pix', 'boleto']
            },
            {
                id: 'paypal',
                nome: 'PayPal',
                taxa: 3.9,
                adicional: 0.60,
                descricao: 'Gateway global tradicional',
                metodosPagamento: ['cartao', 'paypal']
            },
            {
                id: 'pagseguro',
                nome: 'PagSeguro',
                taxa: 4.99,
                adicional: 0,
                descricao: 'Gateway brasileiro do UOL',
                metodosPagamento: ['cartao', 'pix', 'boleto']
            },
            {
                id: 'stone',
                nome: 'Stone',
                taxa: 3.99,
                adicional: 0,
                descricao: 'Fintech brasileira moderna',
                metodosPagamento: ['cartao', 'pix']
            },
            {
                id: 'cielo',
                nome: 'Cielo',
                taxa: 4.5,
                adicional: 0,
                descricao: 'Tradicional adquirente brasileiro',
                metodosPagamento: ['cartao', 'boleto']
            }
        ];
    }
    async calcularPrecoIdeal(dados) {
        const { precoFornecedor, frete = 0, margemDesejada, custoFixo = 0, moedaBase, moedaDestino, plataforma, gateway } = dados;
        const taxaCambio = moedaBase === moedaDestino
            ? 1
            : await this.exchangeService.getCurrentRate(moedaBase, moedaDestino);
        const plataformaData = this.platforms.find(p => p.id === plataforma);
        const gatewayData = this.gateways.find(g => g.id === gateway);
        if (!plataformaData) {
            throw new Error(`Plataforma não encontrada: ${plataforma}`);
        }
        if (!gatewayData) {
            throw new Error(`Gateway não encontrado: ${gateway}`);
        }
        const custoTotal = precoFornecedor + frete + custoFixo;
        const custoTotalBRL = custoTotal * taxaCambio;
        const taxaPlataforma = plataformaData.taxa;
        const taxaGateway = gatewayData.taxa;
        const adicionalPlataforma = plataformaData.adicional;
        const adicionalGateway = gatewayData.adicional;
        const taxaTotal = taxaPlataforma + taxaGateway;
        const precoVenda = (custoTotalBRL + adicionalPlataforma + adicionalGateway) /
            (1 - ((taxaTotal + margemDesejada) / 100));
        const valorTaxaPlataforma = precoVenda * (taxaPlataforma / 100);
        const valorTaxaGateway = precoVenda * (taxaGateway / 100);
        const lucroLiquido = precoVenda - custoTotalBRL - valorTaxaPlataforma - valorTaxaGateway - adicionalPlataforma - adicionalGateway;
        const roasMinimo = parseFloat((100 / (margemDesejada || 10)).toFixed(2));
        return {
            custoTotal: custoTotalBRL,
            taxaCambio,
            precoVenda: parseFloat(precoVenda.toFixed(2)),
            lucroLiquido: parseFloat(lucroLiquido.toFixed(2)),
            roasMinimo,
            breakdown: {
                custoFornecedor: precoFornecedor * taxaCambio,
                frete: frete * taxaCambio,
                custoFixo: custoFixo * taxaCambio,
                taxaPlataforma: valorTaxaPlataforma,
                taxaGateway: valorTaxaGateway,
                margem: lucroLiquido
            }
        };
    }
    getPlatforms() {
        return this.platforms;
    }
    getGateways() {
        return this.gateways;
    }
};
exports.CalcService = CalcService;
exports.CalcService = CalcService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof exchange_service_1.ExchangeService !== "undefined" && exchange_service_1.ExchangeService) === "function" ? _a : Object])
], CalcService);


/***/ }),

/***/ "./src/config/database.config.ts":
/*!***************************************!*\
  !*** ./src/config/database.config.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseConfig = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let DatabaseConfig = class DatabaseConfig {
    constructor(configService) {
        this.configService = configService;
    }
    createTypeOrmOptions() {
        const isProduction = this.configService.get('NODE_ENV') === 'production';
        return {
            type: 'postgres',
            url: this.configService.get('DATABASE_URL'),
            host: this.configService.get('DB_HOST'),
            port: Number(this.configService.get('DB_PORT')),
            username: this.configService.get('DB_USERNAME'),
            password: this.configService.get('DB_PASSWORD'),
            database: this.configService.get('DB_NAME'),
            entities: [__dirname + '/../modules/**/*.entity.{ts,js}'],
            migrations: [__dirname + '/../database/migrations/*.{ts,js}'],
            synchronize: !isProduction,
            logging: true,
            ssl: isProduction ? { rejectUnauthorized: false } : false,
        };
    }
};
exports.DatabaseConfig = DatabaseConfig;
exports.DatabaseConfig = DatabaseConfig = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], DatabaseConfig);


/***/ }),

/***/ "./src/database/data-source.ts":
/*!*************************************!*\
  !*** ./src/database/data-source.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppDataSource = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ../modules/users/entities/user.entity */ "./src/modules/users/entities/user.entity.ts");
const calculation_entity_1 = __webpack_require__(/*! ../modules/calculations/entities/calculation.entity */ "./src/modules/calculations/entities/calculation.entity.ts");
const preset_platform_entity_1 = __webpack_require__(/*! ../modules/presets/entities/preset-platform.entity */ "./src/modules/presets/entities/preset-platform.entity.ts");
const gateway_entity_1 = __webpack_require__(/*! ../modules/presets/entities/gateway.entity */ "./src/modules/presets/entities/gateway.entity.ts");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [user_entity_1.User, calculation_entity_1.Calculation, preset_platform_entity_1.PresetPlatform, gateway_entity_1.Gateway],
    migrations: [__dirname + '/migrations/*.{ts,js}'],
    synchronize: false,
    logging: true,
});


/***/ }),

/***/ "./src/exchange/exchange.service.ts":
/*!******************************************!*\
  !*** ./src/exchange/exchange.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExchangeService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const axios_1 = __webpack_require__(/*! axios */ "axios");
let ExchangeService = class ExchangeService {
    constructor() {
        this.FRANKFURTER_BASE_URL = 'https://api.frankfurter.app';
        this.RESTCOUNTRIES_URL = 'https://restcountries.com/v3.1/all';
    }
    async getCurrentRate(from, to) {
        try {
            const response = await axios_1.default.get(`${this.FRANKFURTER_BASE_URL}/latest?from=${from}&to=${to}`);
            const rate = response.data.rates[to];
            if (!rate) {
                throw new common_1.HttpException(`Taxa de câmbio não encontrada para ${from}/${to}`, common_1.HttpStatus.NOT_FOUND);
            }
            return rate;
        }
        catch (error) {
            if (error.response?.status === 404) {
                throw new common_1.HttpException(`Moeda não suportada: ${from} ou ${to}`, common_1.HttpStatus.BAD_REQUEST);
            }
            throw new common_1.HttpException('Erro ao buscar taxa de câmbio', common_1.HttpStatus.SERVICE_UNAVAILABLE);
        }
    }
    async getSupportedCurrencies() {
        try {
            const frankfurterResponse = await axios_1.default.get(`${this.FRANKFURTER_BASE_URL}/currencies`);
            const supportedCodes = Object.keys(frankfurterResponse.data);
            const countriesResponse = await axios_1.default.get(this.RESTCOUNTRIES_URL);
            const countries = countriesResponse.data;
            const currencyMap = new Map();
            countries.forEach(country => {
                if (country.currencies) {
                    Object.entries(country.currencies).forEach(([code, details]) => {
                        if (supportedCodes.includes(code) && !currencyMap.has(code)) {
                            currencyMap.set(code, {
                                code,
                                name: details.name,
                                symbol: details.symbol
                            });
                        }
                    });
                }
            });
            const mainCurrencies = [
                { code: 'USD', name: 'US Dollar', symbol: '$' },
                { code: 'EUR', name: 'Euro', symbol: '€' },
                { code: 'BRL', name: 'Brazilian Real', symbol: 'R$' },
                { code: 'GBP', name: 'British Pound', symbol: '£' },
                { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
                { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
                { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$' },
                { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
                { code: 'CHF', name: 'Swiss Franc', symbol: 'Fr' },
                { code: 'SEK', name: 'Swedish Krona', symbol: 'kr' }
            ];
            mainCurrencies.forEach(currency => {
                if (supportedCodes.includes(currency.code)) {
                    currencyMap.set(currency.code, currency);
                }
            });
            return Array.from(currencyMap.values()).sort((a, b) => a.code.localeCompare(b.code));
        }
        catch (error) {
            return [
                { code: 'USD', name: 'US Dollar', symbol: '$' },
                { code: 'EUR', name: 'Euro', symbol: '€' },
                { code: 'BRL', name: 'Brazilian Real', symbol: 'R$' },
                { code: 'GBP', name: 'British Pound', symbol: '£' },
                { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
                { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' }
            ];
        }
    }
    async getHistoricalRate(from, to, date) {
        try {
            const response = await axios_1.default.get(`${this.FRANKFURTER_BASE_URL}/${date}?from=${from}&to=${to}`);
            return response.data.rates[to];
        }
        catch (error) {
            throw new common_1.HttpException('Erro ao buscar taxa histórica', common_1.HttpStatus.SERVICE_UNAVAILABLE);
        }
    }
};
exports.ExchangeService = ExchangeService;
exports.ExchangeService = ExchangeService = __decorate([
    (0, common_1.Injectable)()
], ExchangeService);


/***/ }),

/***/ "./src/modules/auth/auth.controller.ts":
/*!*********************************************!*\
  !*** ./src/modules/auth/auth.controller.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/modules/auth/auth.service.ts");
const forgot_password_dto_1 = __webpack_require__(/*! ./dto/forgot-password.dto */ "./src/modules/auth/dto/forgot-password.dto.ts");
const mail_service_1 = __webpack_require__(/*! ./mail.service */ "./src/modules/auth/mail.service.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! ./guards/jwt-auth.guard */ "./src/modules/auth/guards/jwt-auth.guard.ts");
const local_auth_guard_1 = __webpack_require__(/*! ./guards/local-auth.guard */ "./src/modules/auth/guards/local-auth.guard.ts");
const signup_dto_1 = __webpack_require__(/*! ./dto/signup.dto */ "./src/modules/auth/dto/signup.dto.ts");
const login_dto_1 = __webpack_require__(/*! ./dto/login.dto */ "./src/modules/auth/dto/login.dto.ts");
const auth_response_dto_1 = __webpack_require__(/*! ./dto/auth-response.dto */ "./src/modules/auth/dto/auth-response.dto.ts");
let AuthController = class AuthController {
    constructor(authService, mailService) {
        this.authService = authService;
        this.mailService = mailService;
    }
    async forgotPassword(body) {
        const token = Math.random().toString(36).substring(2) + Date.now();
        await this.mailService.sendPasswordRecovery(body.email, token);
        return { message: 'E-mail de recuperação enviado, se o e-mail existir.' };
    }
    async signUp(signUpDto) {
        return this.authService.signUp(signUpDto);
    }
    async login(req) {
        console.log('🚀 Login controller chamado');
        console.log('📝 Dados do usuário:', req.user);
        try {
            const result = await this.authService.login(req.user);
            console.log('✅ Login service retornou:', result);
            return result;
        }
        catch (error) {
            console.error('❌ Erro no login service:', error);
            throw error;
        }
    }
    async testLogin(loginDto) {
        console.log('🧪 Test login chamado com:', loginDto);
        try {
            const user = await this.authService.findUserByEmail(loginDto.email);
            let debugInfo = { email: loginDto.email };
            if (!user) {
                debugInfo.found = false;
                return {
                    success: false,
                    message: 'Usuário não encontrado',
                    debug: debugInfo
                };
            }
            debugInfo.found = true;
            debugInfo.userId = user.id;
            debugInfo.status = user.status;
            debugInfo.passwordHash = user.passwordHash;
            debugInfo.senhaEnviada = loginDto.password;
            const isPasswordValid = user.passwordHash ? await this.authService.comparePassword(loginDto.password, user.passwordHash) : false;
            debugInfo.senhaValida = isPasswordValid;
            if (!isPasswordValid) {
                return {
                    success: false,
                    message: 'Senha inválida',
                    debug: debugInfo
                };
            }
            if (user.status !== 'active') {
                return {
                    success: false,
                    message: 'Usuário não está ativo',
                    debug: debugInfo
                };
            }
            const result = await this.authService.login(user);
            return {
                success: true,
                message: 'Login realizado com sucesso',
                data: result,
                debug: debugInfo
            };
        }
        catch (error) {
            console.error('❌ Erro no test login:', error);
            return {
                success: false,
                message: error.message,
                debug: {
                    error: error.message,
                    stack: error.stack
                }
            };
        }
    }
    async getProfile(req) {
        return {
            user: req.user,
            message: 'Perfil carregado com sucesso',
        };
    }
    async refresh(req) {
        return this.authService.refresh(req.user);
    }
    async logout(req) {
        return {
            message: 'Logout realizado com sucesso',
            timestamp: new Date().toISOString(),
        };
    }
    async createAdmin() {
        return this.authService.createAdminUser();
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('forgot-password'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Solicitar recuperação de senha (envio de e-mail)' }),
    (0, swagger_1.ApiBody)({ type: forgot_password_dto_1.ForgotPasswordDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof forgot_password_dto_1.ForgotPasswordDto !== "undefined" && forgot_password_dto_1.ForgotPasswordDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Post)('signup'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Criar nova conta de usuário' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Usuário criado com sucesso',
        type: auth_response_dto_1.AuthResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Dados inválidos ou email já existe',
    }),
    (0, swagger_1.ApiBody)({ type: signup_dto_1.SignUpDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof signup_dto_1.SignUpDto !== "undefined" && signup_dto_1.SignUpDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], AuthController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Login com email e senha' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Login realizado com sucesso',
        type: auth_response_dto_1.AuthResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Credenciais inválidas',
    }),
    (0, swagger_1.ApiBody)({ type: login_dto_1.LoginDto }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('test-login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Teste de login direto (sem guard)' }),
    (0, swagger_1.ApiBody)({ type: login_dto_1.LoginDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof login_dto_1.LoginDto !== "undefined" && login_dto_1.LoginDto) === "function" ? _g : Object]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], AuthController.prototype, "testLogin", null);
__decorate([
    (0, common_1.Get)('profile'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obter perfil do usuário autenticado' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Perfil do usuário',
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Token inválido ou expirado',
    }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Post)('refresh'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Renovar token de acesso' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Token renovado com sucesso',
        type: auth_response_dto_1.AuthResponseDto,
    }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], AuthController.prototype, "refresh", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Logout do usuário' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Logout realizado com sucesso',
    }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Post)('create-admin'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Criar usuário administrador (apenas primeira vez)' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Administrador criado com sucesso',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "createAdmin", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object, typeof (_b = typeof mail_service_1.MailService !== "undefined" && mail_service_1.MailService) === "function" ? _b : Object])
], AuthController);


/***/ }),

/***/ "./src/modules/auth/auth.module.ts":
/*!*****************************************!*\
  !*** ./src/modules/auth/auth.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./src/modules/auth/auth.controller.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/modules/auth/auth.service.ts");
const mail_service_1 = __webpack_require__(/*! ./mail.service */ "./src/modules/auth/mail.service.ts");
const users_module_1 = __webpack_require__(/*! ../users/users.module */ "./src/modules/users/users.module.ts");
const user_entity_1 = __webpack_require__(/*! ../users/entities/user.entity */ "./src/modules/users/entities/user.entity.ts");
const jwt_strategy_1 = __webpack_require__(/*! ./strategies/jwt.strategy */ "./src/modules/auth/strategies/jwt.strategy.ts");
const local_strategy_1 = __webpack_require__(/*! ./strategies/local.strategy */ "./src/modules/auth/strategies/local.strategy.ts");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
            users_module_1.UsersModule,
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.registerAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    secret: configService.get('JWT_SECRET'),
                    signOptions: {
                        expiresIn: configService.get('JWT_EXPIRATION', '7d'),
                    },
                }),
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy, local_strategy_1.LocalStrategy, mail_service_1.MailService],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);


/***/ }),

/***/ "./src/modules/auth/auth.service.ts":
/*!******************************************!*\
  !*** ./src/modules/auth/auth.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
const user_entity_1 = __webpack_require__(/*! ../users/entities/user.entity */ "./src/modules/users/entities/user.entity.ts");
const auth_response_dto_1 = __webpack_require__(/*! ./dto/auth-response.dto */ "./src/modules/auth/dto/auth-response.dto.ts");
let AuthService = class AuthService {
    async findUserByEmail(email) {
        return await this.userRepository.findOne({ where: { email } });
    }
    async comparePassword(password, hash) {
        return await bcrypt.compare(password, hash);
    }
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async signUp(signUpDto) {
        const { email, password, ...userData } = signUpDto;
        const existingUser = await this.userRepository.findOne({
            where: { email },
        });
        if (existingUser) {
            throw new common_1.ConflictException('Email já está em uso');
        }
        if (!password || password.length < 8) {
            throw new common_1.BadRequestException('A senha deve ter pelo menos 8 caracteres');
        }
        const saltRounds = 12;
        const passwordHash = await bcrypt.hash(password, saltRounds);
        const user = this.userRepository.create({
            ...userData,
            email,
            passwordHash,
            status: user_entity_1.UserStatus.ACTIVE,
        });
        const savedUser = await this.userRepository.save(user);
        console.log('✅ Usuário criado:', savedUser.email, 'Status:', savedUser.status);
        return this.generateAuthResponse(savedUser, 'Conta criada com sucesso');
    }
    async validateUser(email, password) {
        console.log('🔍 Validando usuário:', email);
        const user = await this.userRepository.findOne({
            where: { email },
        });
        console.log('👤 Usuário encontrado:', user ? 'Sim' : 'Não');
        if (!user || !user.passwordHash) {
            console.log('❌ Usuário não encontrado ou sem senha');
            return null;
        }
        const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
        console.log('🔑 Senha válida:', isPasswordValid);
        if (!isPasswordValid) {
            console.log('❌ Senha inválida');
            return null;
        }
        await this.userRepository.update(user.id, {
            lastLoginAt: new Date(),
        });
        console.log('✅ Login validado com sucesso');
        return user;
    }
    async login(user) {
        if (user.email === 'massuplas@gmail.com') {
            user.plan = user_entity_1.UserPlan.PREMIUM;
            user.role = user_entity_1.UserRole.ADMIN;
        }
        if (user.googleId) {
            if (!user.email || !user.googleId) {
                throw new common_1.UnauthorizedException('Usuário Google inválido');
            }
        }
        else {
            if (user.status !== 'active') {
                throw new common_1.UnauthorizedException('Usuário inativo');
            }
        }
        const payload = { sub: user.id, email: user.email };
        const accessToken = this.jwtService.sign(payload);
        return {
            accessToken,
            tokenType: 'Bearer',
            expiresIn: 604800,
            message: 'Login realizado com sucesso',
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                currencyDefault: user.currencyDefault,
                country: user.country,
                plan: user.plan,
                status: user.status,
                role: user.role,
                createdAt: user.createdAt,
                calculationsCount: 0
            },
        };
    }
    async validateGoogleUser(googleProfile) {
        const { id: googleId, emails, name, photos } = googleProfile;
        const email = emails[0]?.value;
        if (!email) {
            throw new common_1.BadRequestException('Email não encontrado no perfil Google');
        }
        let user = await this.userRepository.findOne({
            where: [{ email }, { googleId }],
        });
        if (user) {
            if (!user.googleId) {
                user.googleId = googleId;
            }
            if (!user.avatar && photos?.[0]?.value) {
                user.avatar = photos[0].value;
            }
            user.lastLoginAt = new Date();
            return await this.userRepository.save(user);
        }
        user = this.userRepository.create({
            email,
            name: name?.givenName + ' ' + name?.familyName || email.split('@')[0],
            googleId,
            avatar: photos?.[0]?.value,
            lastLoginAt: new Date(),
        });
        return await this.userRepository.save(user);
    }
    async handleGoogleLogin(googleUser) {
        const { id, email, name } = googleUser;
        let user = await this.userRepository.findOne({
            where: { email },
        });
        if (user) {
            user.lastLoginAt = new Date();
            await this.userRepository.save(user);
        }
        else {
            user = this.userRepository.create({
                email,
                name: name || email.split('@')[0],
                googleId: id,
                lastLoginAt: new Date(),
            });
            user = await this.userRepository.save(user);
        }
        const payload = { sub: user.id, email: user.email };
        const accessToken = this.jwtService.sign(payload);
        return {
            accessToken,
            tokenType: 'Bearer',
            expiresIn: 604800,
            message: 'Login realizado com sucesso',
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                currencyDefault: user.currencyDefault,
                country: user.country,
                plan: user.plan,
                status: user.status,
                role: user.role,
                createdAt: user.createdAt,
                calculationsCount: 0
            },
        };
    }
    async refresh(user) {
        const currentUser = await this.userRepository.findOne({
            where: { id: user.id },
        });
        if (!currentUser) {
            throw new common_1.UnauthorizedException('Usuário não encontrado');
        }
        return this.generateAuthResponse(currentUser, 'Token renovado com sucesso');
    }
    generateAuthResponse(user, message) {
        const payload = {
            sub: user.id,
            email: user.email,
            role: user.role,
            plan: user.plan,
        };
        const accessToken = this.jwtService.sign(payload);
        return {
            accessToken,
            tokenType: 'Bearer',
            expiresIn: 7 * 24 * 60 * 60,
            user: new auth_response_dto_1.UserResponseDto(user),
            message,
        };
    }
    async canCreateCalculation(userId) {
        const user = await this.userRepository.findOne({
            where: { id: userId },
        });
        if (!user) {
            return false;
        }
        return user.canCreateCalculation() && user.isPlanActive();
    }
    async incrementCalculationCount(userId) {
        await this.userRepository.increment({ id: userId }, 'calculationsCount', 1);
    }
    async findUserById(id) {
        return this.userRepository.findOne({
            where: { id },
        });
    }
    async createAdminUser() {
        const existingAdmin = await this.userRepository.findOne({
            where: { email: 'comercial@calientabeauty.com' }
        });
        if (existingAdmin) {
            if (existingAdmin.role !== user_entity_1.UserRole.ADMIN) {
                existingAdmin.role = user_entity_1.UserRole.ADMIN;
                await this.userRepository.save(existingAdmin);
                return {
                    message: 'Usuário existente promovido a administrador',
                    created: false
                };
            }
            return {
                message: 'Usuário administrador já existe',
                created: false
            };
        }
        const saltRounds = 12;
        const passwordHash = await bcrypt.hash('001266', saltRounds);
        const adminUser = this.userRepository.create({
            name: 'Administrador',
            email: 'comercial@calientabeauty.com',
            passwordHash,
            role: user_entity_1.UserRole.ADMIN,
            plan: user_entity_1.UserPlan.PREMIUM,
            status: user_entity_1.UserStatus.ACTIVE,
            currencyDefault: 'BRL',
            country: 'BR',
            calculationsCount: 0,
        });
        await this.userRepository.save(adminUser);
        return {
            message: 'Usuário administrador criado com sucesso! Email: comercial@calientabeauty.com, Senha: 001266',
            created: true
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], AuthService);


/***/ }),

/***/ "./src/modules/auth/dto/auth-response.dto.ts":
/*!***************************************************!*\
  !*** ./src/modules/auth/dto/auth-response.dto.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthResponseDto = exports.UserResponseDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class UserResponseDto {
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.currencyDefault = user.currencyDefault;
        this.country = user.country;
        this.plan = user.plan;
        this.status = user.status;
        this.role = user.role;
        this.avatar = user.avatar;
        this.calculationsCount = user.calculationsCount;
        this.createdAt = user.createdAt;
    }
}
exports.UserResponseDto = UserResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID único do usuário',
        example: 'uuid-v4-string',
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nome do usuário',
        example: 'João Silva',
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Email do usuário',
        example: 'joao@exemplo.com',
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Moeda padrão',
        example: 'BRL',
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "currencyDefault", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'País do usuário',
        example: 'BR',
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Plano do usuário',
        example: 'free',
        enum: ['free', 'pro', 'premium'],
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "plan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Status da conta',
        example: 'active',
        enum: ['active', 'inactive', 'suspended'],
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Função do usuário',
        example: 'user',
        enum: ['user', 'admin'],
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'URL do avatar',
        example: 'https://example.com/avatar.jpg',
        required: false,
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "avatar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Número de cálculos realizados',
        example: 25,
    }),
    __metadata("design:type", Number)
], UserResponseDto.prototype, "calculationsCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Data de criação da conta',
        example: '2024-01-15T10:30:00Z',
    }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UserResponseDto.prototype, "createdAt", void 0);
class AuthResponseDto {
    constructor() {
        this.tokenType = 'Bearer';
    }
}
exports.AuthResponseDto = AuthResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Token de acesso JWT',
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    }),
    __metadata("design:type", String)
], AuthResponseDto.prototype, "accessToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tipo do token',
        example: 'Bearer',
        default: 'Bearer',
    }),
    __metadata("design:type", String)
], AuthResponseDto.prototype, "tokenType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tempo de expiração do token em segundos',
        example: 604800,
    }),
    __metadata("design:type", Number)
], AuthResponseDto.prototype, "expiresIn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Dados do usuário autenticado',
        type: () => UserResponseDto,
    }),
    __metadata("design:type", UserResponseDto)
], AuthResponseDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Mensagem de sucesso',
        example: 'Login realizado com sucesso',
    }),
    __metadata("design:type", String)
], AuthResponseDto.prototype, "message", void 0);


/***/ }),

/***/ "./src/modules/auth/dto/forgot-password.dto.ts":
/*!*****************************************************!*\
  !*** ./src/modules/auth/dto/forgot-password.dto.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ForgotPasswordDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class ForgotPasswordDto {
}
exports.ForgotPasswordDto = ForgotPasswordDto;
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], ForgotPasswordDto.prototype, "email", void 0);


/***/ }),

/***/ "./src/modules/auth/dto/login.dto.ts":
/*!*******************************************!*\
  !*** ./src/modules/auth/dto/login.dto.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class LoginDto {
}
exports.LoginDto = LoginDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Email do usuário',
        example: 'joao@exemplo.com',
        format: 'email',
    }),
    (0, class_validator_1.IsEmail)({}, { message: 'Email deve ter um formato válido' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email é obrigatório' }),
    __metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Senha do usuário',
        example: 'MinhaSenh@123',
    }),
    (0, class_validator_1.IsString)({ message: 'Senha deve ser uma string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Senha é obrigatória' }),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);


/***/ }),

/***/ "./src/modules/auth/dto/signup.dto.ts":
/*!********************************************!*\
  !*** ./src/modules/auth/dto/signup.dto.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignUpDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class SignUpDto {
    constructor() {
        this.currencyDefault = 'BRL';
        this.country = 'BR';
    }
}
exports.SignUpDto = SignUpDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nome completo do usuário',
        example: 'João Silva',
        minLength: 2,
        maxLength: 100,
    }),
    (0, class_validator_1.IsString)({ message: 'Nome deve ser uma string' }),
    (0, class_validator_1.MinLength)(2, { message: 'Nome deve ter pelo menos 2 caracteres' }),
    (0, class_validator_1.MaxLength)(100, { message: 'Nome deve ter no máximo 100 caracteres' }),
    __metadata("design:type", String)
], SignUpDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Email do usuário',
        example: 'joao@exemplo.com',
        format: 'email',
    }),
    (0, class_validator_1.IsEmail)({}, { message: 'Email deve ter um formato válido' }),
    __metadata("design:type", String)
], SignUpDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Senha do usuário',
        example: 'MinhaSenh@123',
        minLength: 8,
        maxLength: 100,
    }),
    (0, class_validator_1.IsString)({ message: 'Senha deve ser uma string' }),
    (0, class_validator_1.MinLength)(8, { message: 'Senha deve ter pelo menos 8 caracteres' }),
    (0, class_validator_1.MaxLength)(100, { message: 'Senha deve ter no máximo 100 caracteres' }),
    __metadata("design:type", String)
], SignUpDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Moeda padrão do usuário',
        example: 'BRL',
        default: 'BRL',
        enum: ['BRL', 'USD', 'EUR', 'ARS', 'CLP', 'COP', 'MXN'],
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['BRL', 'USD', 'EUR', 'ARS', 'CLP', 'COP', 'MXN'], {
        message: 'Moeda deve ser uma das suportadas',
    }),
    __metadata("design:type", String)
], SignUpDto.prototype, "currencyDefault", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'País do usuário',
        example: 'BR',
        default: 'BR',
        enum: ['BR', 'US', 'AR', 'CL', 'CO', 'MX', 'UY', 'PE'],
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['BR', 'US', 'AR', 'CL', 'CO', 'MX', 'UY', 'PE'], {
        message: 'País deve ser um dos suportados',
    }),
    __metadata("design:type", String)
], SignUpDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Telefone do usuário (opcional)',
        example: '+5511999999999',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20, { message: 'Telefone deve ter no máximo 20 caracteres' }),
    __metadata("design:type", String)
], SignUpDto.prototype, "phone", void 0);


/***/ }),

/***/ "./src/modules/auth/guards/jwt-auth.guard.ts":
/*!***************************************************!*\
  !*** ./src/modules/auth/guards/jwt-auth.guard.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
};
exports.JwtAuthGuard = JwtAuthGuard;
exports.JwtAuthGuard = JwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);


/***/ }),

/***/ "./src/modules/auth/guards/local-auth.guard.ts":
/*!*****************************************************!*\
  !*** ./src/modules/auth/guards/local-auth.guard.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalAuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let LocalAuthGuard = class LocalAuthGuard extends (0, passport_1.AuthGuard)('local') {
};
exports.LocalAuthGuard = LocalAuthGuard;
exports.LocalAuthGuard = LocalAuthGuard = __decorate([
    (0, common_1.Injectable)()
], LocalAuthGuard);


/***/ }),

/***/ "./src/modules/auth/mail.service.ts":
/*!******************************************!*\
  !*** ./src/modules/auth/mail.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MailService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ../users/entities/user.entity */ "./src/modules/users/entities/user.entity.ts");
const nodemailer = __webpack_require__(/*! nodemailer */ "nodemailer");
let MailService = class MailService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async sendPasswordRecovery(email, token) {
        const user = await this.userRepository.findOne({ where: { email } });
        if (!user) {
            throw new common_1.NotFoundException('Usuário não encontrado');
        }
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });
        const recoveryUrl = `${process.env.FRONTEND_URL || 'https://app-drop-calc-matcqzw7v.vercel.app'}/reset-password?token=${token}`;
        await transporter.sendMail({
            from: `DropCalc <${process.env.SMTP_USER}>`,
            to: email,
            subject: 'Recuperação de senha - DropCalc',
            html: `<p>Olá,</p><p>Recebemos uma solicitação para redefinir sua senha. Clique no link abaixo para continuar:</p><p><a href="${recoveryUrl}">${recoveryUrl}</a></p><p>Se você não solicitou, ignore este e-mail.</p>`
        });
    }
};
exports.MailService = MailService;
exports.MailService = MailService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], MailService);


/***/ }),

/***/ "./src/modules/auth/strategies/jwt.strategy.ts":
/*!*****************************************************!*\
  !*** ./src/modules/auth/strategies/jwt.strategy.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const auth_service_1 = __webpack_require__(/*! ../auth.service */ "./src/modules/auth/auth.service.ts");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(configService, authService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('JWT_SECRET'),
        });
        this.configService = configService;
        this.authService = authService;
    }
    async validate(payload) {
        const user = await this.authService.findUserById(payload.sub);
        if (!user) {
            throw new common_1.UnauthorizedException('Usuário não encontrado');
        }
        if (user.status !== 'active') {
            throw new common_1.UnauthorizedException('Conta inativa');
        }
        return user;
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _b : Object])
], JwtStrategy);


/***/ }),

/***/ "./src/modules/auth/strategies/local.strategy.ts":
/*!*******************************************************!*\
  !*** ./src/modules/auth/strategies/local.strategy.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_local_1 = __webpack_require__(/*! passport-local */ "passport-local");
const auth_service_1 = __webpack_require__(/*! ../auth.service */ "./src/modules/auth/auth.service.ts");
let LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    constructor(authService) {
        super({
            usernameField: 'email',
            passwordField: 'password',
        });
        this.authService = authService;
    }
    async validate(email, password) {
        const user = await this.authService.validateUser(email, password);
        if (!user) {
            throw new common_1.UnauthorizedException('Credenciais inválidas');
        }
        return user;
    }
};
exports.LocalStrategy = LocalStrategy;
exports.LocalStrategy = LocalStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], LocalStrategy);


/***/ }),

/***/ "./src/modules/calculations/entities/calculation.entity.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/calculations/entities/calculation.entity.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Calculation = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ../../users/entities/user.entity */ "./src/modules/users/entities/user.entity.ts");
const preset_platform_entity_1 = __webpack_require__(/*! ../../presets/entities/preset-platform.entity */ "./src/modules/presets/entities/preset-platform.entity.ts");
const gateway_entity_1 = __webpack_require__(/*! ../../presets/entities/gateway.entity */ "./src/modules/presets/entities/gateway.entity.ts");
let Calculation = class Calculation {
    getROAS() {
        if (this.adsCostFixed <= 0 && this.adsCostPercent <= 0)
            return 0;
        const adsCost = this.adsCostFixed + (this.finalPrice * this.adsCostPercent / 100);
        return adsCost > 0 ? this.finalPrice / adsCost : 0;
    }
    getProfitMargin() {
        const totalCost = this.resultBreakdown?.totalCost || 0;
        return this.finalPrice > 0 ? ((this.finalPrice - totalCost) / this.finalPrice) * 100 : 0;
    }
    isRecent() {
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        return this.createdAt > oneWeekAgo;
    }
};
exports.Calculation = Calculation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Calculation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Calculation.prototype, "productName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Calculation.prototype, "supplierPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10 }),
    __metadata("design:type", String)
], Calculation.prototype, "supplierCurrency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10 }),
    __metadata("design:type", String)
], Calculation.prototype, "sellCurrency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 4 }),
    __metadata("design:type", Number)
], Calculation.prototype, "exchangeRate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Calculation.prototype, "freight", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Calculation.prototype, "fixedCostPerUnit", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Calculation.prototype, "marginPercent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Calculation.prototype, "markupPercent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Calculation.prototype, "adsCostPercent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Calculation.prototype, "adsCostFixed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Calculation.prototype, "finalPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], Calculation.prototype, "resultBreakdown", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Calculation.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', array: true, default: '{}' }),
    __metadata("design:type", Array)
], Calculation.prototype, "tags", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Calculation.prototype, "weight", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], Calculation.prototype, "dimensions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], Calculation.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Calculation.prototype, "isFavorite", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Calculation.prototype, "isArchived", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Calculation.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Calculation.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", typeof (_c = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _c : Object)
], Calculation.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], Calculation.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => preset_platform_entity_1.PresetPlatform, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'platformId' }),
    __metadata("design:type", typeof (_d = typeof preset_platform_entity_1.PresetPlatform !== "undefined" && preset_platform_entity_1.PresetPlatform) === "function" ? _d : Object)
], Calculation.prototype, "platform", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', nullable: true }),
    __metadata("design:type", String)
], Calculation.prototype, "platformId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => gateway_entity_1.Gateway, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'gatewayId' }),
    __metadata("design:type", typeof (_e = typeof gateway_entity_1.Gateway !== "undefined" && gateway_entity_1.Gateway) === "function" ? _e : Object)
], Calculation.prototype, "gateway", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', nullable: true }),
    __metadata("design:type", String)
], Calculation.prototype, "gatewayId", void 0);
exports.Calculation = Calculation = __decorate([
    (0, typeorm_1.Entity)('calculations')
], Calculation);


/***/ }),

/***/ "./src/modules/exchange/exchange.controller.ts":
/*!*****************************************************!*\
  !*** ./src/modules/exchange/exchange.controller.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExchangeController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const exchange_service_1 = __webpack_require__(/*! ./exchange.service */ "./src/modules/exchange/exchange.service.ts");
let ExchangeController = class ExchangeController {
    constructor(exchangeService) {
        this.exchangeService = exchangeService;
    }
    async getRate(from, to) {
        const rate = await this.exchangeService.getExchangeRate(from, to);
        return {
            from,
            to,
            rate,
            timestamp: new Date().toISOString(),
        };
    }
    getSupportedCurrencies() {
        return {
            currencies: this.exchangeService.getSupportedCurrencies(),
            message: 'Moedas suportadas carregadas',
        };
    }
    async getMultipleRates(base, targets) {
        const targetArray = targets.split(',').map(t => t.trim());
        const rates = await this.exchangeService.getMultipleRates(base, targetArray);
        return {
            base,
            rates,
            timestamp: new Date().toISOString(),
        };
    }
};
exports.ExchangeController = ExchangeController;
__decorate([
    (0, common_1.Get)('rate'),
    (0, swagger_1.ApiOperation)({ summary: 'Obter taxa de câmbio entre duas moedas' }),
    (0, swagger_1.ApiQuery)({ name: 'from', description: 'Moeda de origem', example: 'USD' }),
    (0, swagger_1.ApiQuery)({ name: 'to', description: 'Moeda de destino', example: 'BRL' }),
    __param(0, (0, common_1.Query)('from')),
    __param(1, (0, common_1.Query)('to')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ExchangeController.prototype, "getRate", null);
__decorate([
    (0, common_1.Get)('currencies'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar moedas suportadas' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExchangeController.prototype, "getSupportedCurrencies", null);
__decorate([
    (0, common_1.Get)('multiple'),
    (0, swagger_1.ApiOperation)({ summary: 'Obter múltiplas taxas de câmbio' }),
    (0, swagger_1.ApiQuery)({ name: 'base', description: 'Moeda base', example: 'USD' }),
    (0, swagger_1.ApiQuery)({ name: 'targets', description: 'Moedas de destino (separadas por vírgula)', example: 'BRL,EUR,ARS' }),
    __param(0, (0, common_1.Query)('base')),
    __param(1, (0, common_1.Query)('targets')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ExchangeController.prototype, "getMultipleRates", null);
exports.ExchangeController = ExchangeController = __decorate([
    (0, swagger_1.ApiTags)('exchange'),
    (0, common_1.Controller)('exchange'),
    __metadata("design:paramtypes", [typeof (_a = typeof exchange_service_1.ExchangeService !== "undefined" && exchange_service_1.ExchangeService) === "function" ? _a : Object])
], ExchangeController);


/***/ }),

/***/ "./src/modules/exchange/exchange.module.ts":
/*!*************************************************!*\
  !*** ./src/modules/exchange/exchange.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExchangeModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
const exchange_controller_1 = __webpack_require__(/*! ./exchange.controller */ "./src/modules/exchange/exchange.controller.ts");
const exchange_service_1 = __webpack_require__(/*! ./exchange.service */ "./src/modules/exchange/exchange.service.ts");
let ExchangeModule = class ExchangeModule {
};
exports.ExchangeModule = ExchangeModule;
exports.ExchangeModule = ExchangeModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule],
        controllers: [exchange_controller_1.ExchangeController],
        providers: [exchange_service_1.ExchangeService],
        exports: [exchange_service_1.ExchangeService],
    })
], ExchangeModule);


/***/ }),

/***/ "./src/modules/exchange/exchange.service.ts":
/*!**************************************************!*\
  !*** ./src/modules/exchange/exchange.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ExchangeService_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExchangeService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
let ExchangeService = ExchangeService_1 = class ExchangeService {
    constructor(httpService, configService) {
        this.httpService = httpService;
        this.configService = configService;
        this.logger = new common_1.Logger(ExchangeService_1.name);
        this.cache = {};
        this.CACHE_TTL = 60 * 60 * 1000;
    }
    async getExchangeRate(from, to) {
        if (from === to) {
            return 1.0;
        }
        const cacheKey = `${from}_${to}`;
        const cached = this.getCachedRate(cacheKey);
        if (cached) {
            this.logger.debug(`Taxa de câmbio ${from}/${to} obtida do cache: ${cached}`);
            return cached;
        }
        try {
            const rate = await this.fetchExchangeRate(from, to);
            this.setCachedRate(cacheKey, rate);
            this.logger.log(`Taxa de câmbio ${from}/${to} obtida: ${rate}`);
            return rate;
        }
        catch (error) {
            this.logger.error(`Erro ao obter taxa de câmbio ${from}/${to}:`, error);
            const inverseKey = `${to}_${from}`;
            const inverseRate = this.getCachedRate(inverseKey);
            if (inverseRate) {
                const rate = 1 / inverseRate;
                this.logger.warn(`Usando taxa inversa para ${from}/${to}: ${rate}`);
                return rate;
            }
            throw new common_1.ServiceUnavailableException('Serviço de câmbio temporariamente indisponível. Tente novamente em alguns minutos.');
        }
    }
    async getMultipleRates(base, targets) {
        const rates = {};
        for (const target of targets) {
            try {
                rates[target] = await this.getExchangeRate(base, target);
            }
            catch (error) {
                this.logger.warn(`Falha ao obter taxa ${base}/${target}:`, error);
                rates[target] = null;
            }
        }
        return rates;
    }
    getSupportedCurrencies() {
        return [
            'USD',
            'EUR',
            'BRL',
            'ARS',
            'CLP',
            'COP',
            'MXN',
            'UYU',
            'PEN',
            'GBP',
            'CAD',
            'AUD',
            'JPY',
            'CNY',
        ];
    }
    async fetchExchangeRate(from, to) {
        try {
            return await this.fetchFromOpenExchangeRates(from, to);
        }
        catch (error) {
            this.logger.warn('OpenExchangeRates falhou, tentando ExchangeRate-API');
        }
        try {
            return await this.fetchFromExchangeRateAPI(from, to);
        }
        catch (error) {
            this.logger.warn('ExchangeRate-API falhou, tentando European Central Bank');
        }
        if (from === 'EUR' || to === 'EUR') {
            try {
                return await this.fetchFromECB(from, to);
            }
            catch (error) {
                this.logger.error('Todas as APIs de câmbio falharam');
            }
        }
        throw new common_1.ServiceUnavailableException('Nenhuma API de câmbio disponível');
    }
    async fetchFromOpenExchangeRates(from, to) {
        const apiKey = this.configService.get('EXCHANGE_API_KEY');
        if (!apiKey) {
            throw new Error('EXCHANGE_API_KEY não configurada');
        }
        const url = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}&base=USD&symbols=${from},${to}`;
        const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
        const data = response.data;
        if (!data.rates) {
            throw new Error('Resposta inválida da OpenExchangeRates');
        }
        const fromRate = from === 'USD' ? 1 : data.rates[from];
        const toRate = to === 'USD' ? 1 : data.rates[to];
        if (!fromRate || !toRate) {
            throw new Error(`Taxa não encontrada para ${from}/${to}`);
        }
        return toRate / fromRate;
    }
    async fetchFromExchangeRateAPI(from, to) {
        const url = `https://api.exchangerate-api.com/v4/latest/${from}`;
        const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
        const data = response.data;
        if (!data.rates || !data.rates[to]) {
            throw new Error(`Taxa não encontrada para ${from}/${to}`);
        }
        return data.rates[to];
    }
    async fetchFromECB(from, to) {
        if (from !== 'EUR' && to !== 'EUR') {
            throw new Error('ECB suporta apenas EUR como base ou destino');
        }
        const url = 'https://api.exchangerate.host/latest?base=EUR';
        const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
        const data = response.data;
        if (!data.rates) {
            throw new Error('Resposta inválida do ECB');
        }
        if (from === 'EUR') {
            return data.rates[to] || 1;
        }
        else {
            return 1 / (data.rates[from] || 1);
        }
    }
    getCachedRate(key) {
        const cached = this.cache[key];
        if (!cached)
            return null;
        const now = Date.now();
        if (now - cached.timestamp > cached.ttl) {
            delete this.cache[key];
            return null;
        }
        return cached.rate;
    }
    setCachedRate(key, rate) {
        this.cache[key] = {
            rate,
            timestamp: Date.now(),
            ttl: this.CACHE_TTL,
        };
    }
    clearExpiredCache() {
        const now = Date.now();
        Object.keys(this.cache).forEach(key => {
            const cached = this.cache[key];
            if (now - cached.timestamp > cached.ttl) {
                delete this.cache[key];
            }
        });
    }
    async convertAmount(amount, from, to) {
        const rate = await this.getExchangeRate(from, to);
        return Number((amount * rate).toFixed(2));
    }
};
exports.ExchangeService = ExchangeService;
exports.ExchangeService = ExchangeService = ExchangeService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object])
], ExchangeService);


/***/ }),

/***/ "./src/modules/presets/entities/gateway.entity.ts":
/*!********************************************************!*\
  !*** ./src/modules/presets/entities/gateway.entity.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Gateway = exports.GatewayType = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var GatewayType;
(function (GatewayType) {
    GatewayType["CREDIT_CARD"] = "credit_card";
    GatewayType["DEBIT_CARD"] = "debit_card";
    GatewayType["PIX"] = "pix";
    GatewayType["BOLETO"] = "boleto";
    GatewayType["PAYPAL"] = "paypal";
    GatewayType["DIGITAL_WALLET"] = "digital_wallet";
    GatewayType["CRYPTO"] = "crypto";
    GatewayType["OTHER"] = "other";
})(GatewayType || (exports.GatewayType = GatewayType = {}));
let Gateway = class Gateway {
    getFeeForPaymentType(amount, paymentType, isInternational = false) {
        let percent = this.feePercent;
        let fixed = this.fixedFee;
        if (this.feeStructure && this.feeStructure[paymentType]) {
            const typeConfig = this.feeStructure[paymentType];
            if (typeConfig && typeof typeConfig === 'object') {
                percent = typeConfig.percent || percent;
                fixed = typeConfig.fixed || fixed;
            }
        }
        if (isInternational && this.feeStructure?.international) {
            percent += this.feeStructure.international.percent;
            fixed += this.feeStructure.international.fixed;
        }
        const total = (amount * percent / 100) + fixed;
        return { percent, fixed, total };
    }
    supportsPaymentType(type) {
        return this.supportedTypes.includes(type);
    }
    supportsCountry(country) {
        return this.supportedCountries.length === 0 ||
            this.supportedCountries.includes(country.toUpperCase());
    }
    supportsCurrency(currency) {
        return this.supportedCurrencies.length === 0 ||
            this.supportedCurrencies.includes(currency.toUpperCase());
    }
    getDisplayName() {
        return this.name;
    }
};
exports.Gateway = Gateway;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Gateway.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Gateway.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, unique: true }),
    __metadata("design:type", String)
], Gateway.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Gateway.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, default: 'credit_card' }),
    __metadata("design:type", String)
], Gateway.prototype, "primaryType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Gateway.prototype, "supportedTypes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Gateway.prototype, "feePercent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Gateway.prototype, "fixedFee", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, default: 'BRL' }),
    __metadata("design:type", String)
], Gateway.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', array: true, default: '{}' }),
    __metadata("design:type", Array)
], Gateway.prototype, "supportedCountries", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', array: true, default: '{}' }),
    __metadata("design:type", Array)
], Gateway.prototype, "supportedCurrencies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], Gateway.prototype, "feeStructure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], Gateway.prototype, "processingTimes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Gateway.prototype, "websiteUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Gateway.prototype, "logoUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], Gateway.prototype, "integrationConfig", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Gateway.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Gateway.prototype, "isCustom", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Gateway.prototype, "usageCount", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Gateway.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Gateway.prototype, "updatedAt", void 0);
exports.Gateway = Gateway = __decorate([
    (0, typeorm_1.Entity)('gateways')
], Gateway);


/***/ }),

/***/ "./src/modules/presets/entities/preset-platform.entity.ts":
/*!****************************************************************!*\
  !*** ./src/modules/presets/entities/preset-platform.entity.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PresetPlatform = exports.PlatformType = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var PlatformType;
(function (PlatformType) {
    PlatformType["ECOMMERCE"] = "ecommerce";
    PlatformType["MARKETPLACE"] = "marketplace";
    PlatformType["SOCIAL"] = "social";
    PlatformType["CUSTOM"] = "custom";
})(PlatformType || (exports.PlatformType = PlatformType = {}));
let PresetPlatform = class PresetPlatform {
    getTotalFeeForAmount(amount, country) {
        let percentFee = this.feePercent;
        if (country && this.additionalFees?.countryFees?.[country]) {
            percentFee = this.additionalFees.countryFees[country];
        }
        return (amount * percentFee / 100) + this.fixedFee;
    }
    supportsCountry(country) {
        return this.supportedCountries.length === 0 ||
            this.supportedCountries.includes(country.toUpperCase());
    }
    getDisplayName() {
        return this.name;
    }
    hasVolumeDiscounts() {
        return this.additionalFees?.volumeDiscounts &&
            this.additionalFees.volumeDiscounts.length > 0;
    }
};
exports.PresetPlatform = PresetPlatform;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PresetPlatform.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], PresetPlatform.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, unique: true }),
    __metadata("design:type", String)
], PresetPlatform.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PresetPlatform.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, default: 'ecommerce' }),
    __metadata("design:type", String)
], PresetPlatform.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], PresetPlatform.prototype, "feePercent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], PresetPlatform.prototype, "fixedFee", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, default: 'BRL' }),
    __metadata("design:type", String)
], PresetPlatform.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', array: true, default: '{}' }),
    __metadata("design:type", Array)
], PresetPlatform.prototype, "supportedCountries", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PresetPlatform.prototype, "websiteUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PresetPlatform.prototype, "logoUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], PresetPlatform.prototype, "additionalFees", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], PresetPlatform.prototype, "integrationConfig", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], PresetPlatform.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], PresetPlatform.prototype, "isCustom", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], PresetPlatform.prototype, "usageCount", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], PresetPlatform.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], PresetPlatform.prototype, "updatedAt", void 0);
exports.PresetPlatform = PresetPlatform = __decorate([
    (0, typeorm_1.Entity)('preset_platforms')
], PresetPlatform);


/***/ }),

/***/ "./src/modules/users/entities/user.entity.ts":
/*!***************************************************!*\
  !*** ./src/modules/users/entities/user.entity.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = exports.UserRole = exports.UserStatus = exports.UserPlan = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
var UserPlan;
(function (UserPlan) {
    UserPlan["FREE"] = "free";
    UserPlan["PRO"] = "pro";
    UserPlan["PREMIUM"] = "premium";
})(UserPlan || (exports.UserPlan = UserPlan = {}));
var UserStatus;
(function (UserStatus) {
    UserStatus["ACTIVE"] = "active";
    UserStatus["INACTIVE"] = "inactive";
    UserStatus["SUSPENDED"] = "suspended";
})(UserStatus || (exports.UserStatus = UserStatus = {}));
var UserRole;
(function (UserRole) {
    UserRole["USER"] = "user";
    UserRole["ADMIN"] = "admin";
})(UserRole || (exports.UserRole = UserRole = {}));
let User = class User {
    canCreateCalculation() {
        if (this.plan === UserPlan.FREE) {
            return this.calculationsCount < 50;
        }
        return true;
    }
    isPlanActive() {
        if (this.plan === UserPlan.FREE)
            return true;
        if (!this.planExpiresAt)
            return false;
        return new Date() < this.planExpiresAt;
    }
    isAdmin() {
        return this.role === UserRole.ADMIN;
    }
    getDisplayName() {
        return this.name || this.email.split('@')[0];
    }
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], User.prototype, "passwordHash", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, default: 'BRL' }),
    __metadata("design:type", String)
], User.prototype, "currencyDefault", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 5, default: 'BR' }),
    __metadata("design:type", String)
], User.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, default: 'free' }),
    __metadata("design:type", String)
], User.prototype, "plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, default: 'active' }),
    __metadata("design:type", String)
], User.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, default: 'user' }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "googleId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], User.prototype, "bio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "preferences", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], User.prototype, "lastLoginAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "calculationsCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], User.prototype, "planExpiresAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], User.prototype, "updatedAt", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)('users')
], User);


/***/ }),

/***/ "./src/modules/users/users.controller.ts":
/*!***********************************************!*\
  !*** ./src/modules/users/users.controller.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! ../auth/guards/jwt-auth.guard */ "./src/modules/auth/guards/jwt-auth.guard.ts");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./src/modules/users/users.service.ts");
let UsersController = class UsersController {
    async createAdminUser() {
        const user = await this.usersService.createAdminUser();
        return {
            id: user.id,
            email: user.email,
            name: user.name,
            plan: user.plan,
            role: user.role,
            status: user.status,
        };
    }
    constructor(usersService) {
        this.usersService = usersService;
    }
    async getProfile(req) {
        const user = await this.usersService.findById(req.user.sub);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return {
            id: user.id,
            email: user.email,
            name: user.name,
        };
    }
    async getAllUsers() {
        return this.usersService.findAll();
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)('create-admin'),
    (0, swagger_1.ApiOperation)({ summary: 'Criar usuário admin Diego (temporário)' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createAdminUser", null);
__decorate([
    (0, common_1.Get)('profile'),
    (0, swagger_1.ApiOperation)({ summary: 'Obter perfil completo do usuário' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Get)('list'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os usuários (admin)' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllUsers", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiTags)('users'),
    (0, common_1.Controller)('users'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], UsersController);


/***/ }),

/***/ "./src/modules/users/users.module.ts":
/*!*******************************************!*\
  !*** ./src/modules/users/users.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const user_entity_1 = __webpack_require__(/*! ./entities/user.entity */ "./src/modules/users/entities/user.entity.ts");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./src/modules/users/users.service.ts");
const users_controller_1 = __webpack_require__(/*! ./users.controller */ "./src/modules/users/users.controller.ts");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User])],
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService],
        exports: [users_service_1.UsersService],
    })
], UsersModule);


/***/ }),

/***/ "./src/modules/users/users.service.ts":
/*!********************************************!*\
  !*** ./src/modules/users/users.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ./entities/user.entity */ "./src/modules/users/entities/user.entity.ts");
const user_entity_2 = __webpack_require__(/*! ./entities/user.entity */ "./src/modules/users/entities/user.entity.ts");
const user_entity_3 = __webpack_require__(/*! ./entities/user.entity */ "./src/modules/users/entities/user.entity.ts");
let UsersService = class UsersService {
    async createAdminUser() {
        const email = 'massuplas@gmail.com';
        const name = 'Diego';
        const password = '01659760';
        const passwordHash = await bcrypt.hash(password, 12);
        let user = await this.userRepository.findOne({ where: { email } });
        if (user)
            return user;
        user = this.userRepository.create({
            name,
            email,
            passwordHash,
            plan: user_entity_2.UserPlan.PREMIUM,
            role: user_entity_2.UserRole.ADMIN,
            status: user_entity_3.UserStatus.ACTIVE,
            country: 'BR',
            currencyDefault: 'BRL',
            phone: null,
            planExpiresAt: null,
        });
        return await this.userRepository.save(user);
    }
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async findById(id) {
        return this.userRepository.findOne({
            where: { id },
        });
    }
    async findByEmail(email) {
        return this.userRepository.findOne({
            where: { email },
        });
    }
    async findAll() {
        return this.userRepository.find({
            select: ['id', 'email', 'name', 'createdAt', 'updatedAt'],
            order: { createdAt: 'DESC' },
        });
    }
    async updateProfile(id, updateData) {
        await this.userRepository.update(id, updateData);
        return this.findById(id);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UsersService);


/***/ }),

/***/ "@nestjs/axios":
/*!********************************!*\
  !*** external "@nestjs/axios" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@nestjs/axios");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
const data_source_1 = __webpack_require__(/*! ./database/data-source */ "./src/database/data-source.ts");
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
    app.use((req, res, next) => {
        if (req.method === 'OPTIONS') {
            res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept, Cache-Control, X-Requested-With, Origin, Referer, User-Agent, Access-Control-Allow-Origin');
            res.header('Access-Control-Allow-Credentials', 'true');
            return res.sendStatus(200);
        }
        next();
    });
    app.enableCors({
        origin: function (origin, callback) {
            const allowed = [
                "https://app-drop-calc.vercel.app",
                "https://dropcalc-front.vercel.app",
                "https://*.vercel.app",
                "http://localhost:5173"
            ];
            if (!origin || allowed.includes(origin) || /https:\/\/.+\.vercel\.app$/.test(origin)) {
                callback(null, true);
            }
            else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Accept",
            "Cache-Control",
            "X-Requested-With",
            "Origin",
            "Referer",
            "User-Agent",
            "Access-Control-Allow-Origin"
        ],
        credentials: true,
        preflightContinue: false,
        optionsSuccessStatus: 200,
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Calculadora de Preços API')
        .setDescription('API para calculadora de preços de dropshipping')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    await app.listen(process.env.PORT || 3000, "0.0.0.0");
    console.log("🚀 Backend rodando!");
    console.log("🌐 CORS habilitado para:", [
        "https://app-drop-calc.vercel.app",
        "https://dropcalc-front.vercel.app",
        "https://*.vercel.app",
    ]);
}
bootstrap();

})();

/******/ })()
;
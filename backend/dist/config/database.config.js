"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConfig = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const user_entity_1 = require("../modules/users/entities/user.entity");
const calculation_entity_1 = require("../modules/calculations/entities/calculation.entity");
const preset_platform_entity_1 = require("../modules/presets/entities/preset-platform.entity");
const gateway_entity_1 = require("../modules/presets/entities/gateway.entity");
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
            entities: [user_entity_1.User, calculation_entity_1.Calculation, preset_platform_entity_1.PresetPlatform, gateway_entity_1.Gateway],
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
    __metadata("design:paramtypes", [config_1.ConfigService])
], DatabaseConfig);
//# sourceMappingURL=database.config.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const dotenv = require("dotenv");
dotenv.config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [
        require('../modules/users/entities/user.entity').User,
        require('../modules/calculations/entities/calculation.entity').Calculation,
        require('../modules/presets/entities/preset-platform.entity').PresetPlatform,
        require('../modules/presets/entities/gateway.entity').Gateway,
    ],
    migrations: [
        __dirname + '/../migrations/*.{js,ts}',
    ],
    synchronize: false,
    logging: true,
    ssl: process.env.NODE_ENV === 'production'
        ? { rejectUnauthorized: false }
        : false,
});
//# sourceMappingURL=data-source.js.map
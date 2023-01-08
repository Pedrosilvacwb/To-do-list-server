"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const path_1 = __importDefault(require("path"));
require("dotenv/config");
const nodeEnv = process.env.NODE_ENV;
const AppDataSource = nodeEnv === 'production'
    ? new typeorm_1.DataSource({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        entities: [path_1.default.join(__dirname, './entities/**.{js,ts}')],
        migrations: [path_1.default.join(__dirname, './migrations/**{js,ts}')],
    })
    : new typeorm_1.DataSource({
        type: 'postgres',
        host: process.env.PGHOST,
        port: +process.env.PGPORT,
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        logging: true,
        synchronize: false,
        entities: [path_1.default.join(__dirname, './entities/**.{js,ts}')],
        migrations: [path_1.default.join(__dirname, './migrations/**{js,ts}')],
    });
exports.default = AppDataSource;
//# sourceMappingURL=data-source.js.map
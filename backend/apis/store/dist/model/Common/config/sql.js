"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = exports.mysql = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
exports.mysql = mysql2_1.default;
const getConfig = (type, allowMultipleStatements) => {
    const config = {
        store: {
            host: 'localhost',
            user: process.env.DB_USER_STORE,
            password: process.env.PASSWORD_STORE,
            database: process.env.DATA_BASE_NAME_STORE,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
        },
        multipleStatements: true,
    };
    return config[type];
};
exports.getConfig = getConfig;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = exports.mysql = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
exports.mysql = mysql2_1.default;
const constant_1 = require("../../repos/constant");
const getConfig = (type, allowMultipleStatements) => {
    const storeProprety = 'REMOTE';
    const config = {
        store: {
            host: constant_1.DATA_BASE.STORE[`${storeProprety}`].HOST,
            user: constant_1.DATA_BASE.STORE[`${storeProprety}`].USER,
            password: constant_1.DATA_BASE.STORE[`${storeProprety}`].PASSWORD,
            database: constant_1.DATA_BASE.STORE[`${storeProprety}`].DATABASE,
            waitForConnections: true,
            connectionLimit: 50,
            queueLimit: 0,
            multipleStatements: true,
        },
    };
    return config[type];
};
exports.getConfig = getConfig;

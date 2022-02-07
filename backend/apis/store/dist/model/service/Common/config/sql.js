"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = exports.mysql = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
exports.mysql = mysql2_1.default;
const constant_1 = require("../../../repos/constant");
const getConfig = (type, allowMultipleStatements) => {
    const whichHostForDataBase = process.env.HOST_FOR_DATA_BASE
        ? process.env.HOST_FOR_DATA_BASE
        : 'LOCAL';
    const config = {
        store: {
            host: constant_1.DATA_BASE.STORE[`${whichHostForDataBase}`].HOST,
            user: constant_1.DATA_BASE.STORE[`${whichHostForDataBase}`].USER,
            password: constant_1.DATA_BASE.STORE[`${whichHostForDataBase}`].PASSWORD,
            database: constant_1.DATA_BASE.STORE[`${whichHostForDataBase}`].DATABASE,
            waitForConnections: true,
            connectionLimit: 50,
            queueLimit: 0,
            multipleStatements: true,
        },
    };
    return config[type];
};
exports.getConfig = getConfig;

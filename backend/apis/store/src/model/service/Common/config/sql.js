"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.getConfig = exports.mysql = void 0;
/**************************SQL**************************/
// eslint-disable-next-line @typescript-eslint/no-var-requires
//  yarn add mysql2 --save
var mysql2_1 = __importDefault(require("mysql2"));
exports.mysql = mysql2_1["default"];
var getConfig = function (type, allowMultipleStatements) {
    //todo: type it
    var config = {
        store: {
            host: 'localhost',
            user: process.env.DB_USER_STORE,
            password: process.env.PASSWORD_STORE,
            database: process.env.DATA_BASE_NAME_STORE,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        },
        // //Turn it false for security reason when not needed.
        // multipleStatements: allowMultipleStatements ? true : false,
        multipleStatements: true
    };
    return config[type];
};
exports.getConfig = getConfig;

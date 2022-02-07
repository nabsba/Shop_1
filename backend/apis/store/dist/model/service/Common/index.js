"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatorSQL = exports.stringFromKeysObject = exports.getConfig = exports.mysql = exports.generateObjectAsOneStringKeyValue = exports.deletePropretyFromObject = void 0;
const sql_1 = require("./config/sql");
Object.defineProperty(exports, "mysql", { enumerable: true, get: function () { return sql_1.mysql; } });
Object.defineProperty(exports, "getConfig", { enumerable: true, get: function () { return sql_1.getConfig; } });
const sql_2 = require("./logic/database/sql");
Object.defineProperty(exports, "generatorSQL", { enumerable: true, get: function () { return sql_2.generatorSQL; } });
const object_1 = require("./logic/functions/object");
Object.defineProperty(exports, "deletePropretyFromObject", { enumerable: true, get: function () { return object_1.deletePropretyFromObject; } });
Object.defineProperty(exports, "generateObjectAsOneStringKeyValue", { enumerable: true, get: function () { return object_1.generateObjectAsOneStringKeyValue; } });
Object.defineProperty(exports, "stringFromKeysObject", { enumerable: true, get: function () { return object_1.stringFromKeysObject; } });

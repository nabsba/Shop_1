"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTableDefinition = exports.DATA_BASE = exports.queryDataBase = exports.resultTemplate = void 0;
const queryDB_1 = require("./queryDB");
Object.defineProperty(exports, "queryDataBase", { enumerable: true, get: function () { return queryDB_1.queryDataBase; } });
Object.defineProperty(exports, "resultTemplate", { enumerable: true, get: function () { return queryDB_1.resultTemplate; } });
const tableDefinition_1 = require("./tableDefinition");
Object.defineProperty(exports, "DATA_BASE", { enumerable: true, get: function () { return tableDefinition_1.DATA_BASE; } });
Object.defineProperty(exports, "getTableDefinition", { enumerable: true, get: function () { return tableDefinition_1.getTableDefinition; } });

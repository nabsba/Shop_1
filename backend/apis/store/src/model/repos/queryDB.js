"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.queryDataBase = exports.resultTemplate = void 0;
var sql_1 = require("../Common/config/sql");
var constant_1 = require("../../Common/constant");
var function_1 = require("../../Common/function");
exports.resultTemplate = {
    state: false,
    data: null,
    serverError: false,
    errorMessage: '',
    errorCodeSql: ''
};
var queryDataBase = function (sql, allowMultipleStatements, Type) { return __awaiter(void 0, void 0, void 0, function () {
    var result, promisePool, type, config, pool, query, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                result = __assign({}, exports.resultTemplate);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, 4, 5]);
                //Connection
                allowMultipleStatements = allowMultipleStatements || undefined;
                type = Type ? Type : 'store';
                config = (0, sql_1.getConfig)(type, allowMultipleStatements);
                pool = sql_1.mysql.createPool(config);
                promisePool = pool.promise();
                return [4 /*yield*/, promisePool.query(sql)];
            case 2:
                query = _a.sent();
                result.state =
                    query[0].length || (query[0] && query[0].affectedRows) || (query[0] && query[0].insertId)
                        ? true
                        : false;
                result.data = query[0];
                result.serverError = false;
                return [3 /*break*/, 5];
            case 3:
                error_1 = _a.sent();
                (0, function_1.logMessage)("".concat((0, constant_1.ERROR_LOG_ASYNC_MESSAGE)('repos/queryDB', 'queryDataBase'), ",\n\t\t\t").concat(error_1));
                result.state = false;
                result.serverError = true;
                result.errorMessage = error_1.sqlMessage ? error_1.sqlMessage : ' ';
                result.errorCodeSql = error_1.code ? error_1.code : '';
                return [3 /*break*/, 5];
            case 4: return [2 /*return*/, result];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.queryDataBase = queryDataBase;

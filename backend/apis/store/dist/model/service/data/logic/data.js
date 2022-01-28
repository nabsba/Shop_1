"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlePostData = exports.handleGetData = void 0;
const Common_1 = require("../../Common");
const repos_1 = require("../../repos");
const constant_1 = require("../../repos/constant");
const sql_1 = require("../../Common/tools/database/sql");
const constant_2 = require("./constant");
const constant_3 = require("../../../Common/constant");
const function_1 = require("../../../Common/function");
const filterObject = (object, type, mode) => {
    if (mode === 'select' || mode === 'pagination') {
        switch (type) {
            case 'account':
                object.map((obj) => (0, Common_1.deletePropretyFromObject)(obj, ['password']));
                break;
            default:
                object;
        }
    }
    return object;
};
const handlePostData = (objectSql) => __awaiter(void 0, void 0, void 0, function* () {
    let result = Object.assign({}, repos_1.resultTemplate);
    try {
        const sql = Common_1.generatorSQL.custom(objectSql);
        result = yield (0, repos_1.queryDataBase)(sql);
        if (result.state && result.data) {
            result.data = filterObject(result.data, objectSql.type, objectSql.mode);
        }
    }
    catch (error) {
        (0, function_1.logMessage)(`${(0, constant_3.ERROR_LOG_ASYNC_MESSAGE)('managerData', 'handlePostData')}, error`);
    }
    finally {
        return result;
    }
});
exports.handlePostData = handlePostData;
const handleGetData = (type, id) => __awaiter(void 0, void 0, void 0, function* () {
    let result = Object.assign({}, repos_1.resultTemplate);
    try {
        let sql = '';
        console.log(type, id);
        switch (type) {
            case constant_2.DATA_TYPE.PRODUCT_DETAIL_BY_ID:
                sql = sql_1.generatorSQLSpecialCase.informationProduct(Number(id));
                result = yield (0, repos_1.queryDataBase)(sql);
                break;
            case constant_2.DATA_TYPE.INFORMATION_DATA_BASE:
                sql = Common_1.generatorSQL.custom(constant_1.SQL_SELECT[type]);
                result = yield (0, repos_1.queryDataBase)(sql);
                break;
            default:
                null;
        }
    }
    catch (error) {
        (0, function_1.logMessage)(`${(0, constant_3.ERROR_LOG_ASYNC_MESSAGE)('managerData', 'handleGetData')}, error`);
    }
    finally {
        return result;
    }
});
exports.handleGetData = handleGetData;

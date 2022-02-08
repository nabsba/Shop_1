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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlePostData = exports.handleGetData = void 0;
const Common_1 = require("../../Common");
const repos_1 = require("../../../repos");
const sql_1 = require("../../Common/logic/database/sql");
const constant_1 = require("../constant");
const path_1 = __importDefault(require("path"));
const lodash_1 = __importDefault(require("lodash"));
const constant_2 = require("../../Common/constant");
const function_1 = require("../../Common/logic/functions/function");
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
const filterDatas = (products) => {
    switch (products[0].type) {
        case 'shoes':
            let concatRowsByTheirColorsAndConcatSizes = lodash_1.default.uniqWith(products, (pre, cur) => {
                if (pre.product_has_color_id == cur.product_has_color_id) {
                    cur.size = cur.size + ',' + pre.size;
                    return true;
                }
                return false;
            });
            concatRowsByTheirColorsAndConcatSizes.map((prod) => {
                const fs = require('fs');
                const length = fs.readdirSync(path_1.default.join(__dirname +
                    `../../../../../../../../asset/image/product/${prod.type}/medium/${prod.colorName}/${prod.name.replace(/\s/g, '')}`)).length;
                prod.numberOfPics = length;
                prod.quantityWished = 1;
                prod.size = prod.size
                    .split(',')
                    .map(Number)
                    .sort((a, b) => {
                    return a - b;
                });
                prod.sizeWished = prod.size[0];
            });
            return concatRowsByTheirColorsAndConcatSizes;
        default:
            return products;
    }
};
const handlePostData = (objectSql) => __awaiter(void 0, void 0, void 0, function* () {
    let result = Object.assign({}, repos_1.resultTemplate);
    try {
        const sql = Common_1.generatorSQL.custom(objectSql);
        result = yield (0, repos_1.queryDataBase)(sql);
    }
    catch (error) {
        (0, function_1.logMessage)(`${(0, constant_2.ERROR_LOG_ASYNC_MESSAGE)('managerData', 'handlePostData')}, ${error}`);
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
        switch (type) {
            case constant_1.DATA_TYPE.PRODUCT_DETAIL_BY_ID:
                sql = sql_1.generatorSQLSpecialCase.informationProduct(Number(id));
                result = yield (0, repos_1.queryDataBase)(sql);
                if (result.data && result.data.length > 0) {
                    result.data = filterDatas(result.data);
                }
                break;
            case constant_1.DATA_TYPE.PRODUCTS_ARRIVING: {
                sql = sql_1.generatorSQLSpecialCase.firstArriving();
                result = yield (0, repos_1.queryDataBase)(sql);
                if (result.data && result.data.length > 0) {
                    result.data = filterDatas(result.data);
                }
                break;
            }
            default:
                null;
        }
    }
    catch (error) {
        (0, function_1.logMessage)(`${(0, constant_2.ERROR_LOG_ASYNC_MESSAGE)('managerData', 'handleGetData')}, ${error}`);
    }
    finally {
        return result;
    }
});
exports.handleGetData = handleGetData;

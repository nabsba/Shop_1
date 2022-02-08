"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTableDefinition = exports.SQL_SELECT = exports.DATA_BASE = void 0;
exports.DATA_BASE = {
    STORE: {
        LOCAL: {
            HOST: process.env.HOST_DATABASE_LOCAL,
            USER: process.env.DB_USER_STORE_LOCAL,
            PASSWORD: process.env.PASSWORD_STORE_LOCAL,
            DATABASE: process.env.DATA_BASE_NAME_STORE_LOCAL,
        },
        REMOTE: {
            HOST: process.env.HOST_DATABASE_REMOTE,
            USER: process.env.DB_USER_STORE_REMOTE,
            PASSWORD: process.env.PASSWORD_STORE_REMOTE,
            DATABASE: process.env.DATA_BASE_NAME_STORE_REMOTE,
        },
    },
};
exports.SQL_SELECT = {
    INFORMATION_DATA_BASE_PART_ONE: {
        type: 'color',
        mode: 'select',
        object: ['color_id', 'colorName'],
        condition: {
            key: 'active',
            value: 1,
        },
    },
    INFORMATION_DATA_BASE_PART_TWO: {
        type: 'size',
        mode: 'select',
        object: ['size_id', 'size'],
        condition: {
            key: 'active',
            value: 1,
        },
    },
};
const TABLE_DEFINITION = {
    product: {
        table: 'product',
        dataBase: 'store',
    },
    color: {
        table: 'color',
        dataBase: 'store',
    },
    size: {
        table: 'size',
        dataBase: 'store',
    },
};
const getTableDefinition = (type) => TABLE_DEFINITION[type];
exports.getTableDefinition = getTableDefinition;

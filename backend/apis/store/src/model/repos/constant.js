"use strict";
exports.__esModule = true;
exports.getTableDefinition = exports.SQL_SELECT = exports.DATA_BASE = void 0;
//Note: add password through process.env
exports.DATA_BASE = {};
exports.SQL_SELECT = {
    INFORMATION_DATA_BASE_PART_ONE: {
        type: 'color',
        mode: 'select',
        object: ['color_id', 'colorName'],
        condition: { key: 'active', value: 1 }
    },
    INFORMATION_DATA_BASE_PART_TWO: {
        type: 'size',
        mode: 'select',
        object: ['size_id', 'size'],
        condition: { key: 'active', value: 1 }
    }
};
var TABLE_DEFINITION = {
    product: {
        table: 'product',
        dataBase: 'store'
    },
    color: {
        table: 'color',
        dataBase: 'store'
    },
    size: {
        table: 'size',
        dataBase: 'store'
    }
};
var getTableDefinition = function (type) { return TABLE_DEFINITION[type]; };
exports.getTableDefinition = getTableDefinition;

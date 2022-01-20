"use strict";
exports.__esModule = true;
exports.generatorSQLSpecialCase = exports.generatorSQL = void 0;
var __1 = require("../..");
var repos_1 = require("../../../repos");
var sqlValuesToInsert = function (object, keys, sqlOperation) {
    var columns = [];
    keys.map(function (key) {
        var type = typeof object[key];
        var value = type === 'string' ? "\"".concat(object[key], "\"") : object[key];
        if (sqlOperation === 'update')
            return columns.push("".concat(key, "=").concat(value));
        return columns.push("".concat(value));
    });
    return columns.toString();
};
var generatorSQLSpecialCase = {
    informationProduct: function (id) {
        return "SELECT product.product_id,product.name, product.price, product_has_color.color_id, style.category, \nproduct.type, style.description, style.gender,\nproduct_has_color.product_has_color_id, color.colorName, product_color_has_size.size_id, size.size\nFROM product\nINNER JOIN product_has_color ON product.product_id=product_has_color.product_id\nINNER JOIN style ON product.product_id=style.product_id\nINNER JOIN color on product_has_color.color_id=color.color_id\nINNER JOIN product_color_has_size on product_has_color.color_id=product_color_has_size.product_has_color_id\nINNER JOIN size on product_color_has_size.size_id=size.size_id\nwhere product_has_color.product_id=".concat(id, ";\n");
    },
    getAllSizesOfProduct: function (id) {
        return "select * from product_color_has_size where product_has_color_id=".concat(Number(id), ";");
    },
    firstArriving: function () {
        return 'SELECT product.product_id,product.name, product_has_color.color_id, style.category, product.type, style.description, style.gender, product_has_color.product_has_color_id, color.colorName, product_color_has_size.size_id, size.size FROM product INNER JOIN product_has_color ON product.product_id=product_has_color.product_id INNER JOIN style ON product.product_id=style.product_id INNER JOIN color on product_has_color.color_id=color.color_id INNER JOIN product_color_has_size on product_has_color.color_id=product_color_has_size.product_has_color_id INNER JOIN size on product_color_has_size.size_id=size.size_id order by product_id desc limit 30;';
    }
};
exports.generatorSQLSpecialCase = generatorSQLSpecialCase;
var generatorSQL = {
    custom: function (object) {
        if (object.sql)
            return object.sql;
        var typeOfObject = typeof object.object;
        var tableDefinition = (0, repos_1.getTableDefinition)(object.type);
        var columns = Array.isArray(object.object)
            ? object.object.join()
            : (0, __1.stringFromKeysObject)(object.object);
        var values = typeOfObject === 'object'
            ? sqlValuesToInsert(object.object, Object.keys(object.object), 'insert')
            : object;
        var ID = object.ID ? object.ID : undefined;
        var condition = object.condition ? object.condition : undefined;
        var sql = object.mode === 'delete' || object.mode === 'pagination'
            ? generatorSQL[object.mode](tableDefinition, condition)
            : generatorSQL[object.mode](tableDefinition, columns, values, condition, ID);
        return sql;
    },
    // reminder: condition 'where' doesn't work with insert
    insert: function (tableDefinition, columns, values) {
        var sql = "INSERT INTO ".concat(tableDefinition.table, " (").concat(columns, ") VALUES(").concat(values, ");");
        return sql;
    },
    update: function (tableDefinition, columns, values, condition, ID) {
        var setOfColumnValue = (0, __1.generateObjectAsOneStringKeyValue)(columns.split(','), values.split(','));
        var sql;
        if (tableDefinition && !condition) {
            sql = "update ".concat(tableDefinition.table, " set ").concat(setOfColumnValue, " WHERE ").concat(tableDefinition.foreignKey, "=").concat(ID, ";");
        }
        else {
            sql = "update ".concat(tableDefinition.table, " set ").concat(setOfColumnValue, " WHERE ").concat(condition.key, "= ").concat(typeof condition.value === 'string' ? "".concat(condition.value) : condition.value, ";");
        }
        return sql;
    },
    select: function (tableDefinition, columns, values, condition) {
        var sql;
        if (condition) {
            sql = "SELECT ".concat(columns ? columns : '*', " from ").concat(tableDefinition.table, " WHERE ").concat(condition.key, "=").concat(typeof condition.value === 'string' ? "\"".concat(condition.value, "\"") : condition.value, ";");
        }
        else {
            sql = "SELECT ".concat(columns ? columns : '*', " from ").concat(tableDefinition.table, ";");
        }
        return sql;
    },
    "delete": function (tableDefinition, condition) {
        var sql;
        if (condition) {
            sql = "DELETE FROM ".concat(tableDefinition.table, " WHERE ").concat(condition.key, "=").concat(typeof condition.value === 'string' ? "\"".concat(condition.value, "\"") : condition.value, ";");
        }
        return sql;
    },
    pagination: function (tableDefinition, condition) {
        var sql;
        if (condition && condition.key) {
            sql = "select * from ".concat(tableDefinition.table, " WHERE ").concat(condition.key, " > ").concat(typeof condition.value === 'string' ? "\"".concat(condition.value, "\"") : condition.value, " order by id ").concat(condition.paginationOrderType ? condition.paginationOrderType : 'asc', " limit ").concat(condition.pagination ? condition.pagination : 100, ";");
        }
        else {
            sql = "select * from ".concat(tableDefinition.table, " order by id ").concat(condition.paginationOrderType, " limit ").concat(condition.pagination ? condition.pagination : 100, ";");
        }
        return sql;
    }
};
exports.generatorSQL = generatorSQL;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatorSQLSpecialCase = exports.generatorSQL = void 0;
const __1 = require("../..");
const repos_1 = require("../../../repos");
const sqlValuesToInsert = (object, keys, sqlOperation) => {
    const columns = [];
    keys.map((key) => {
        const type = typeof object[key];
        const value = type === 'string' ? `"${object[key]}"` : object[key];
        if (sqlOperation === 'update')
            return columns.push(`${key}=${value}`);
        return columns.push(`${value}`);
    });
    return columns.toString();
};
const generatorSQLSpecialCase = {
    informationProduct: (id) => `SELECT product.product_id,product.name, product.price, product_has_color.color_id, style.category, 
product.type, style.description, style.gender,
product_has_color.product_has_color_id, color.colorName, product_color_has_size.size_id, size.size
FROM product
INNER JOIN product_has_color ON product.product_id=product_has_color.product_id
INNER JOIN style ON product.product_id=style.product_id
INNER JOIN color on product_has_color.color_id=color.color_id
INNER JOIN product_color_has_size on product_has_color.color_id=product_color_has_size.product_has_color_id
INNER JOIN size on product_color_has_size.size_id=size.size_id
where product_has_color.product_id=${id};
`,
    firstArriving: () => 'SELECT product.product_id,product.name, product_has_color.color_id, style.category, product.type, style.description, style.gender, product_has_color.product_has_color_id, color.colorName, product_color_has_size.size_id, size.size FROM product INNER JOIN product_has_color ON product.product_id=product_has_color.product_id INNER JOIN style ON product.product_id=style.product_id INNER JOIN color on product_has_color.color_id=color.color_id INNER JOIN product_color_has_size on product_has_color.color_id=product_color_has_size.product_has_color_id INNER JOIN size on product_color_has_size.size_id=size.size_id order by product_id desc limit 30;',
};
exports.generatorSQLSpecialCase = generatorSQLSpecialCase;
const generatorSQL = {
    custom: (object) => {
        if (object.sql)
            return object.sql;
        const typeOfObject = typeof object.object;
        const tableDefinition = (0, repos_1.getTableDefinition)(object.type);
        const columns = Array.isArray(object.object)
            ? object.object.join()
            : (0, __1.stringFromKeysObject)(object.object);
        const values = typeOfObject === 'object'
            ? sqlValuesToInsert(object.object, Object.keys(object.object), 'insert')
            : object;
        const ID = object.ID ? object.ID : undefined;
        const condition = object.condition ? object.condition : undefined;
        const sql = object.mode === 'delete' || object.mode === 'pagination'
            ? generatorSQL[object.mode](tableDefinition, condition)
            : generatorSQL[object.mode](tableDefinition, columns, values, condition, ID);
        return sql;
    },
    insert: (tableDefinition, columns, values) => {
        const sql = `INSERT INTO ${tableDefinition.table} (${columns}) VALUES(${values});`;
        return sql;
    },
    update: (tableDefinition, columns, values, condition, ID) => {
        const setOfColumnValue = (0, __1.generateObjectAsOneStringKeyValue)(columns.split(','), values.split(','));
        let sql;
        if (tableDefinition && !condition) {
            sql = `update ${tableDefinition.table} set ${setOfColumnValue} WHERE ${tableDefinition.foreignKey}=${ID};`;
        }
        else {
            sql = `update ${tableDefinition.table} set ${setOfColumnValue} WHERE ${condition.key}= ${typeof condition.value === 'string' ? `${condition.value}` : condition.value};`;
        }
        return sql;
    },
    select: (tableDefinition, columns, values, condition) => {
        let sql;
        if (condition) {
            sql = `SELECT ${columns ? columns : '*'} from ${tableDefinition.table} WHERE ${condition.key}=${typeof condition.value === 'string' ? `"${condition.value}"` : condition.value};`;
        }
        else {
            sql = `SELECT ${columns ? columns : '*'} from ${tableDefinition.table};`;
        }
        return sql;
    },
    delete: (tableDefinition, condition) => {
        let sql;
        if (condition) {
            sql = `DELETE FROM ${tableDefinition.table} WHERE ${condition.key}=${typeof condition.value === 'string' ? `"${condition.value}"` : condition.value};`;
        }
        return sql;
    },
    pagination: (tableDefinition, condition) => {
        let sql;
        if (condition && condition.key) {
            sql = `select * from ${tableDefinition.table} WHERE ${condition.key} > ${typeof condition.value === 'string' ? `"${condition.value}"` : condition.value} order by id ${condition.paginationOrderType ? condition.paginationOrderType : 'asc'} limit ${condition.pagination ? condition.pagination : 100};`;
        }
        else {
            sql = `select * from ${tableDefinition.table} order by id ${condition.paginationOrderType} limit ${condition.pagination ? condition.pagination : 100};`;
        }
        return sql;
    },
};
exports.generatorSQL = generatorSQL;

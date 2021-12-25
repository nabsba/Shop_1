import { generateObjectAsOneStringKeyValue, stringFromKeysObject, TObjectSql } from '../..';
import { getTableDefinition } from '../../../repos';

const sqlValuesToInsert = (object: any, keys: string[], sqlOperation: string) => {
  const columns: string[] = [];
  keys.map((key: string) => {
    const type = typeof object[key];
    const value = type === 'string' ? `"${object[key]}"` : object[key];
    if (sqlOperation === 'update') return columns.push(`${key}=${value}`);
    return columns.push(`${value}`);
  });
  return columns.toString();
};

const generatorSQL: { [key: string]: any } = {
  custom: (object: TObjectSql) => {
    if (object.sql) return object.sql;
    const typeOfObject = typeof object.object;
    const tableDefinition = getTableDefinition(object.type);
    const columns = Array.isArray(object.object)
      ? object.object.join()
      : stringFromKeysObject(object.object);
    const values =
      typeOfObject === 'object'
        ? sqlValuesToInsert(object.object, Object.keys(object.object), 'insert')
        : object;
    const ID = object.ID ? object.ID : undefined;
    const condition = object.condition ? object.condition : undefined;
    const sql =
      object.mode === 'delete' || object.mode === 'pagination'
        ? generatorSQL[object.mode](tableDefinition, condition)
        : generatorSQL[object.mode](tableDefinition, columns, values, condition, ID);
    return sql;
  },
  // reminder: condition 'where' doesn't work with insert
  insert: (tableDefinition: any, columns: any, values: any) => {
    const sql = `INSERT INTO ${tableDefinition.table} (${columns}) VALUES(${values});`;
    return sql;
  },
  update: (
    tableDefinition: any,
    columns: any,
    values: any,
    condition: { key: string; value: string; pagination?: string | number } | undefined,
    ID: number | string | undefined,
  ) => {
    const setOfColumnValue = generateObjectAsOneStringKeyValue(
      columns.split(','),
      values.split(','),
    );
    let sql: string;
    if (tableDefinition && !condition) {
      sql = `update ${tableDefinition.table} set ${setOfColumnValue} WHERE ${tableDefinition.foreignKey}=${ID};`;
    } else {
      sql = `update ${tableDefinition.table} set ${setOfColumnValue} WHERE ${condition!.key}= ${
        typeof condition!.value === 'string' ? `${condition!.value}` : condition!.value
      };`;
    }
    return sql;
  },
  select: (
    tableDefinition: any,
    columns: any,
    values: any,
    condition: { key: string; value: string; pagination?: string | number } | undefined,
  ) => {
    let sql;
    if (condition) {
      sql = `SELECT ${columns ? columns : '*'} from ${tableDefinition.table} WHERE ${
        condition.key
      }=${typeof condition.value === 'string' ? `"${condition.value}"` : condition.value};`;
    } else {
      sql = `SELECT ${columns ? columns : '*'} from ${tableDefinition.table};`;
    }
    return sql;
  },
  delete: (
    tableDefinition: any,
    condition: { key: string; value: string; pagination?: string | number } | undefined,
  ) => {
    let sql;
    if (condition) {
      sql = `DELETE FROM ${tableDefinition.table} WHERE ${condition.key}=${
        typeof condition.value === 'string' ? `"${condition.value}"` : condition.value
      };`;
    }
    return sql;
  },
  pagination: (
    tableDefinition: any,
    condition:
      | { key: string; value: string; pagination?: number; paginationOrderType: string }
      | undefined,
  ) => {
    console.log('pagination ', tableDefinition!.table);
    let sql;
    if (condition && condition.key) {
      sql = `select * from ${tableDefinition!.table} WHERE ${condition.key} > ${
        typeof condition.value === 'string' ? `"${condition.value}"` : condition.value
      } order by id ${
        condition.paginationOrderType ? condition.paginationOrderType : 'asc'
      } limit ${condition.pagination ? condition.pagination : 100};`;
    } else {
      sql = `select * from ${tableDefinition!.table} order by id ${
        condition!.paginationOrderType
      } limit ${condition!.pagination ? condition!.pagination : 100};`;
    }
    return sql;
  },
};

export { generatorSQL };

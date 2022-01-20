import { generateObjectAsOneStringKeyValue, stringFromKeysObject, TObjectSql } from '../..';
import { getTableDefinition } from '../../../repos';

// const products = ['venture', 'waffle', 'zion', 'verona', 'exclusion', 'zoomx', 'nikeairtuned'];
// const sql = (name: string) =>
//   `START transaction; INSERT INTO product (name, type, price) values ('${name}', 'shoes', 150); INSERT INTO style (category, description, product_id, gender) values ('classics', 'perfect for a night out on the town ', LAST_INSERT_ID(), 'men'); INSERT INTO product_has_color (product_id, color_id) values ((select product_id from style where style_id=LAST_INSERT_ID()), 3); INSERT INTO product_color_has_size (product_has_color_id, size_id) values (LAST_INSERT_ID(), 3 ); COMMIT;`;
// const populate = async () => {
//   try {
//     Promise.all(
//       products.map(async (product) => {
//         console.log(sql(product));
//         const query = await queryDataBase(sql(product));
//       }),
//     );
//   } catch (error) {}
// };

// populate();
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

const generatorSQLSpecialCase = {
  informationProduct: (id: number) =>
    `SELECT product.product_id,product.name, product.price, product_has_color.color_id, style.category, 
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
  firstArriving: () =>
    'SELECT product.product_id,product.name, product_has_color.color_id, style.category, product.type, style.description, style.gender, product_has_color.product_has_color_id, color.colorName, product_color_has_size.size_id, size.size FROM product INNER JOIN product_has_color ON product.product_id=product_has_color.product_id INNER JOIN style ON product.product_id=style.product_id INNER JOIN color on product_has_color.color_id=color.color_id INNER JOIN product_color_has_size on product_has_color.color_id=product_color_has_size.product_has_color_id INNER JOIN size on product_color_has_size.size_id=size.size_id order by product_id desc limit 30;',
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

export { generatorSQL, generatorSQLSpecialCase };

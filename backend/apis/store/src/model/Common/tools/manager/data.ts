import { deletePropretyFromObject, generatorSQL, Result, TObjectSql } from '../..';
import { getTableDefinition, queryDataBase, resultTemplate } from '../../../repos';

const filterObject = (object: any, type: string, mode: string) => {
  if (mode === 'select' || mode === 'pagination') {
    switch (type) {
      case 'account':
        object.map((obj: any) => deletePropretyFromObject(obj, ['password']));
        break;
      default:
        object;
    }
  }
  return object;
};

const handleObject = async (objectSql: TObjectSql) => {
  let result: Result = { ...resultTemplate };
  try {
    console.log(objectSql);
    const sql = generatorSQL.custom(objectSql);
    result = await queryDataBase(sql);
    if (result.state && result.data) {
      result.data = filterObject(result.data, objectSql.type, objectSql.mode);
    }
  } catch (error) {
    console.log('file: data.ts, method: handleObject, error: ', error);
  } finally {
    return result;
  }
};

export { handleObject };

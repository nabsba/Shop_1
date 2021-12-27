import { deletePropretyFromObject, generatorSQL, Result, TObjectSql } from '../../Common';
import { getTableDefinition, queryDataBase, resultTemplate } from '../../repos';
import { SQL_SELECT } from '../../repos/constant';
import { generatorSQLSpecialCase } from '../../Common/tools/database/sql';
import { ERROR_LOG_ASYNC_MESSAGE } from '../../../Commun/constant';

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

const handlePostData = async (objectSql: TObjectSql): Promise<Result> => {
  let result: Result = { ...resultTemplate };
  try {
    const sql = generatorSQL.custom(objectSql);
    result = await queryDataBase(sql);

    if (result.state && result.data) {
      result.data = filterObject(result.data, objectSql.type, objectSql.mode);
    }
  } catch (error) {
    console.log(ERROR_LOG_ASYNC_MESSAGE('managerData', 'handlePostData'), error);
    console.log('file: data.ts, method: handlePostData, error: ', error);
  } finally {
    return result;
  }
};

const handleGetData = async (type: string, id: string): Promise<Result> => {
  let result: Result = { ...resultTemplate };
  try {
    let sql = '';
    switch (type) {
      case 'product':
        sql = generatorSQLSpecialCase.informationProduct(Number(id));
        result = await queryDataBase(sql);
        break;
      case 'informationColor':
        sql = generatorSQL.custom(SQL_SELECT[type]);
        result = await queryDataBase(sql);
        break;
      default:
        null;
    }
  } catch (error) {
    console.log(ERROR_LOG_ASYNC_MESSAGE('managerData', 'handleGetData'), error);
  } finally {
    return result;
  }
};

export { handleGetData, handlePostData };

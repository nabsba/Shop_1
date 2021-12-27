import { deletePropretyFromObject, generatorSQL, Result, TObjectSql } from '../../../Common';
import { getTableDefinition, queryDataBase, resultTemplate } from '../../../repos';
import { SQL_SELECT } from '../../../repos/constant';
import { generatorSQLSpecialCase } from '../../../Common/tools/database/sql';
import { DATA_TYPE } from '../constant';
import { ERROR_LOG_ASYNC_MESSAGE } from '../../../../Common/constant';
import { logMessage } from '../../../../Common/function';

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
    logMessage(`${ERROR_LOG_ASYNC_MESSAGE('managerData', 'handlePostData')}, ${error}`);
  } finally {
    return result;
  }
};
const handleGetData = async (type: string, id: string | null): Promise<Result> => {
  let result: Result = { ...resultTemplate };
  try {
    let sql = '';
    switch (type) {
      case DATA_TYPE.PRODUCT_DETAIL_BY_ID:
        sql = generatorSQLSpecialCase.informationProduct(Number(id));
        result = await queryDataBase(sql);
        break;
      case DATA_TYPE.INFORMATION_DATA_BASE:
        sql = generatorSQL.custom(SQL_SELECT[`${type}_PART_ONE`]);
        result = await queryDataBase(sql);
        sql = generatorSQL.custom(SQL_SELECT[`${type}_PART_TWO`]);
        const result2 = await queryDataBase(sql);
        result.data = {
          color: result.data,
          size: result2.data,
        };
        break;
      default:
        null;
    }
  } catch (error) {
    logMessage(`${ERROR_LOG_ASYNC_MESSAGE('managerData', 'handleGetData')}, ${error}`);
  } finally {
    return result;
  }
};

export { handleGetData, handlePostData };

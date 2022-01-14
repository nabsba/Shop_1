import { deletePropretyFromObject, generatorSQL, Result, TObjectSql } from '../../../Common';
import { getTableDefinition, queryDataBase, resultTemplate } from '../../../repos';
import { SQL_SELECT } from '../../../repos/constant';
import { generatorSQLSpecialCase } from '../../../Common/tools/database/sql';
import { DATA_TYPE } from '../constant';
import { ERROR_LOG_ASYNC_MESSAGE } from '../../../../Common/constant';
import { logMessage } from '../../../../Common/function';
import { type } from 'os';
import path from 'path';
import _ from 'lodash';

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
const filterDatas = (products: any[]) => {
  switch (products[0].type) {
    case 'shoes':
      let concatRowsByTheirColorsAndConcatSizes = _.uniqWith(products, (pre, cur) => {
        if (pre.product_has_color_id == cur.product_has_color_id) {
          cur.size = cur.size + ',' + pre.size;
          return true;
        }
        return false;
      });
      concatRowsByTheirColorsAndConcatSizes.map((prod) => {
        const fs = require('fs');
        const length = fs.readdirSync(
          path.join(
            __dirname +
              `../../../../../../../../asset/image/product/${prod.type}/medium/${
                prod.colorName
              }/${prod.name.replace(/\s/g, '')}`,
          ),
        ).length;
        prod.numberOfPics = length;
        prod.quantityWished = 1;
        prod.size = prod.size
          .split(',')
          .map(Number)
          .sort((a: number, b: number) => {
            return a - b;
          });
        prod.sizeWished = prod.size[0];
      });
      return concatRowsByTheirColorsAndConcatSizes;
    default:
      return products;
  }
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
        if (result.data && result.data.length > 0) {
          result.data = filterDatas(result.data);
        }
        break;
      case DATA_TYPE.PRODUCTS_ARRIVING: {
        sql = generatorSQLSpecialCase.firstArriving();
        result = await queryDataBase(sql);
        if (result.data && result.data.length > 0) {
          result.data = filterDatas(result.data);
        }
        break;
      }

      case DATA_TYPE.PRODUCT_DETAIL_ALL_SIZE_BY_ID:
        sql = generatorSQLSpecialCase.getAllSizesOfProduct(Number(id));
        result = await queryDataBase(sql);
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

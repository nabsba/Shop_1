import { mysql, getConfig } from './config/sql';
import { generatorSQL, generatorSQLSpecialCase } from './tools/database/sql';
import {
  deletePropretyFromObject,
  generateObjectAsOneStringKeyValue,
  stringFromKeysObject,
} from './tools/function/object';
import { checkIfObject, handleObject, getObject, getObjectByID } from './tools/manager/data';
import { Result, SQLParameter, TFolderPath, TObjectSql } from './type/type';

export {
  checkIfObject,
  handleObject,
  getObject,
  getObjectByID,
  deletePropretyFromObject,
  generateObjectAsOneStringKeyValue,
  mysql,
  getConfig,
  stringFromKeysObject,
  generatorSQL,
  generatorSQLSpecialCase,
};
export type { Result, TFolderPath, SQLParameter, TObjectSql };

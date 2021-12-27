import { mysql, getConfig } from './config/sql';
import { generatorSQL } from './tools/database/sql';
import {
  deletePropretyFromObject,
  generateObjectAsOneStringKeyValue,
  stringFromKeysObject,
} from './tools/function/object';

import { Result, SQLParameter, TFolderPath, TObjectSql } from './type/type';

export {
  deletePropretyFromObject,
  generateObjectAsOneStringKeyValue,
  mysql,
  getConfig,
  stringFromKeysObject,
  generatorSQL,
};
export type { Result, TFolderPath, SQLParameter, TObjectSql };

import { mysql, getConfig } from './config/sql';
import { generatorSQL } from './logic/database/sql';
import {
  deletePropretyFromObject,
  generateObjectAsOneStringKeyValue,
  stringFromKeysObject,
} from './logic/functions/object';

import { Result, SQLParameter, TFolderPath, TObjectSql } from './type';

export {
  deletePropretyFromObject,
  generateObjectAsOneStringKeyValue,
  mysql,
  getConfig,
  stringFromKeysObject,
  generatorSQL,
};
export type { Result, TFolderPath, SQLParameter, TObjectSql };

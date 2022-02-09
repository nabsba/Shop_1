/**************************SQL**************************/
// eslint-disable-next-line @typescript-eslint/no-var-requires
//  yarn add mysql2 --save
import mysql from 'mysql2';
import { DATA_BASE } from '../../../repos/constant';

const getConfig = (type: string, allowMultipleStatements: boolean | undefined) => {
  const whichHostForDataBase = process.env.HOST_FOR_DATA_BASE
    ? process.env.HOST_FOR_DATA_BASE
    : 'LOCAL';
  const config: { [key: string]: {} } = {
    store: {
      host: DATA_BASE.STORE[`${whichHostForDataBase}`].HOST,
      user: DATA_BASE.STORE[`${whichHostForDataBase}`].USER,
      password: DATA_BASE.STORE[`${whichHostForDataBase}`].PASSWORD,
      database: DATA_BASE.STORE[`${whichHostForDataBase}`].DATABASE,
      waitForConnections: true,
      connectionLimit: 50,
      queueLimit: 0,
      multipleStatements: true,
    },
  };
  return config[type];
};
export { mysql, getConfig };

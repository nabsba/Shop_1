/**************************SQL**************************/
// eslint-disable-next-line @typescript-eslint/no-var-requires
//  yarn add mysql2 --save
import mysql from 'mysql2';
import { DATA_BASE } from '../../repos/constant';

const getConfig = (type: string, allowMultipleStatements: boolean | undefined) => {
  //todo: type it
  const config: { [key: string]: {} } = {
    store: {
      host: 'localhost',
      user: process.env.DB_USER_STORE,
      password: process.env.PASSWORD_STORE,
      database: process.env.DATA_BASE_NAME_STORE,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    },

    // //Turn it false for security reason when not needed.
    // multipleStatements: allowMultipleStatements ? true : false,
    multipleStatements: true,
  };
  return config[type];
};
export { mysql, getConfig };

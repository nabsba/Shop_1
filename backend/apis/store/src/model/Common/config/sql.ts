/**************************SQL**************************/
// eslint-disable-next-line @typescript-eslint/no-var-requires
//  yarn add mysql2 --save
import mysql from 'mysql2';
import { DATA_BASE } from '../../repos/constant';



const getConfig = (type: string, allowMultipleStatements: boolean | undefined) => {
  //todo: type it
	const storeProprety = "REMOTE";
  const config: { [key: string]: {} } = {
    store: {
      host: DATA_BASE.STORE[`${storeProprety}`].HOST,
      user: DATA_BASE.STORE[`${storeProprety}`].USER,
      password: DATA_BASE.STORE[`${storeProprety}`].PASSWORD,
      database:DATA_BASE.STORE[`${storeProprety}`].DATABASE,
      waitForConnections: true,
      connectionLimit: 50,
      queueLimit: 0,
      multipleStatements: true,
    },
  };
  return config[type];
};
export { mysql, getConfig };

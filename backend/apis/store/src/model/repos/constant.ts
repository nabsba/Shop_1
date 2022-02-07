import { TObjectSql } from '../service/Common';

type TTableDefintion = {
  [key: string]: {
    table: string;
    dataBase: string;
  };
};
type TDataBase = {
  [key: string]: {
    [key: string]: {
      HOST: string | undefined;
      USER: string | undefined;
      PASSWORD: string | undefined;
      DATABASE: string | undefined;
    };
  };
};

//Note: add password through process.env
export const DATA_BASE: TDataBase = {
  STORE: {
    LOCAL: {
      HOST: process.env.HOST_DATABASE_LOCAL,
      USER: process.env.DB_USER_STORE_LOCAL,
      PASSWORD: process.env.PASSWORD_STORE_LOCAL,
      DATABASE: process.env.DATA_BASE_NAME_STORE_LOCAL,
    },
    REMOTE: {
      HOST: process.env.HOST_DATABASE_REMOTE,
      USER: process.env.DB_USER_STORE_REMOTE,
      PASSWORD: process.env.PASSWORD_STORE_REMOTE,
      DATABASE: process.env.DATA_BASE_NAME_STORE_REMOTE,
    },
  },
};
export const SQL_SELECT: {
  [key: string]: TObjectSql;
} = {
  INFORMATION_DATA_BASE_PART_ONE: {
    type: 'color',
    mode: 'select',
    object: ['color_id', 'colorName'],
    condition: {
      key: 'active',
      value: 1,
    },
  },
  INFORMATION_DATA_BASE_PART_TWO: {
    type: 'size',
    mode: 'select',
    object: ['size_id', 'size'],
    condition: {
      key: 'active',
      value: 1,
    },
  },
};

const TABLE_DEFINITION: TTableDefintion = {
  product: {
    table: 'product',
    dataBase: 'store',
  },
  color: {
    table: 'color',
    dataBase: 'store',
  },
  size: {
    table: 'size',
    dataBase: 'store',
  },
};

export const getTableDefinition = (type: string) => TABLE_DEFINITION[type];

import { TObjectSql } from '../Common';

type TTableDefintion = {
  [key: string]: {
    table: string;
    dataBase: string;
  };
};
type TDataBase = {
  [key: string]: {
    name: string | undefined;
    password: string | undefined;
  };
};

//Note: add password through process.env
export const DATA_BASE: TDataBase = {};
export const SQL_SELECT: { [key: string]: TObjectSql } = {
  INFORMATION_DATA_BASE_PART_ONE: {
    type: 'color',
    mode: 'select',
    object: ['color_id', 'name'],
    condition: { key: 'active', value: 1 },
  },
  INFORMATION_DATA_BASE_PART_TWO: {
    type: 'size',
    mode: 'select',
    object: ['size_id', 'size'],
    condition: { key: 'active', value: 1 },
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

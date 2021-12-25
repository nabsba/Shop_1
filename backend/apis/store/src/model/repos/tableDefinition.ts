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

export const DATA_BASE: TDataBase = {};
const TABLE_DEFINITION: TTableDefintion = {
  product: {
    table: 'product',
    dataBase: 'store',
  },
};

export const getTableDefinition = (type: string) => TABLE_DEFINITION[type];

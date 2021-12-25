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
  account: {
    table: 'account',
    dataBase: 'tnwc',
  },
  code: {
    table: 'code',
    dataBase: 'tnwc',
  },
  form: {
    table: 'form',
    dataBase: 'tnwc',
  },
  room: {
    table: 'room', // ['user_one', 'user_two'],
    dataBase: 'tnwc',
  },
  roomMessage: {
    table: 'room_message', //['chat_id', 'user_id'],
    dataBase: 'tnwc',
  },
};

export const getTableDefinition = (type: string) => TABLE_DEFINITION[type];

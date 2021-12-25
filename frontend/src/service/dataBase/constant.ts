import { TObjectSql } from './type';

const OBJECT_SQL: { [key: string]: TObjectSql } = {
	ALL_SHOES: {
		type: 'product',
		mode: 'select',
		object: {},
	},
};

export { OBJECT_SQL };

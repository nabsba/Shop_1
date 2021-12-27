import { TObjectSql } from './type';

const SQL = {
	COUNT: (table: string): string => `SELECT COUNT(*) FROM ${table};`,
};
const SQL_OBJECT: { [key: string]: TObjectSql } = {
	ALL_SHOES: {
		type: 'product',
		mode: 'select',
		object: {},
		sql: 'SELECT product.product_id,product.name, color_id FROM product INNER JOIN product_has_color ON product.product_id=product_has_color.product_id order by product_id desc limit 10;',
	},
};

const REDUCER = {
	NAME: 'INFORMATION_DATA_BASE',
	END_POINT_INFORMATION_DATA_BASE: 'INFORMATION_DATA_BASE',
};
export { SQL_OBJECT, REDUCER, SQL };

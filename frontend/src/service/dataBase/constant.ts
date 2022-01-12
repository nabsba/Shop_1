import { TObjectSql } from './type';

const SQL = {
	COUNT: (table: string): string => `SELECT COUNT(*) FROM ${table};`,
};
const SQL_OBJECT: { [key: string]: TObjectSql } | any = {
	ALL_SHOES: {
		type: 'product',
		mode: 'select',
		object: {},
		// sql: 'SELECT product.product_id,product.name, product.type, product.price, color_id FROM product INNER JOIN product_has_color ON product.product_id=product_has_color.product_id order by product_id desc limit 20;',
		sql: 'SELECT product.product_id,product.name, product_has_color.color_id, style.category, product.type, style.description, style.gender, product_has_color.product_has_color_id, color.colorName, product_color_has_size.size_id, size.size FROM product INNER JOIN product_has_color ON product.product_id=product_has_color.product_id INNER JOIN style ON product.product_id=style.product_id INNER JOIN color on product_has_color.color_id=color.color_id INNER JOIN product_color_has_size on product_has_color.color_id=product_color_has_size.product_has_color_id INNER JOIN size on product_color_has_size.size_id=size.size_id order by product_id desc limit 30;',
	},
	PRODUCTS_PER_TYPE_AND_GENDER: (type: string, gender: string) => {
		return {
			type: 'product',
			mode: 'select',
			object: {},
			sql: `SELECT product.product_id, product.name, product.price, product.type, style.gender, color.colorName FROM product 
INNER JOIN product_has_color ON product.product_id=product_has_color.product_id AND product.type="${type}" 
INNER JOIN style on style.gender="${gender}" and product.product_id=style.product_id 
INNER JOIN color on product_has_color.color_id=color.color_id
order by product_id desc limit 20;`,
		};
	},
};

const DATA_TYPE = {
	PRODUCT_DETAIL_BY_ID: 'PRODUCT_DETAIL_BY_ID',
	PRODUCT_DETAIL_ALL_SIZE_BY_ID: 'PRODUCT_DETAIL_ALL_SIZE_BY_ID',
	PRODUCTS_ARRIVING: 'PRODUCTS_ARRIVING',
};
const REDUCER = {
	NAME: 'INFORMATION_DATA_BASE',
};
export { SQL_OBJECT, REDUCER, SQL, DATA_TYPE };

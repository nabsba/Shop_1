import { TObjectSql } from './type';

const SQL = {
	COUNT: (table: string): string => `SELECT COUNT(*) FROM ${table};`,
};
const SQL_OBJECT:
	| {
			[key: string]: TObjectSql;
	  }
	| any = {
	ALL_SHOES: {
		type: 'product',
		mode: 'select',
		object: {},
		sql: 'SELECT product.product_id,product.name, product_has_color.color_id, style.category, product.type, style.description, style.gender, product_has_color.product_has_color_id, color.colorName, product_color_has_size.size_id, size.size FROM product INNER JOIN product_has_color ON product.product_id=product_has_color.product_id INNER JOIN style ON product.product_id=style.product_id INNER JOIN color on product_has_color.color_id=color.color_id INNER JOIN product_color_has_size on product_has_color.color_id=product_color_has_size.product_has_color_id INNER JOIN size on product_color_has_size.size_id=size.size_id order by product_id desc limit 30;',
	},
	PRODUCTS_PER_TYPE_AND_GENDER: (
		type: string,
		gender: string,
		pagination?: string,
	) => {
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
	PRODUCTS_FILTERED: (preference: any, type: string, gender: string) => {
		const categories = Object.keys(preference);
		const tablesLength = categories.length;
		const conditions: string[] = [];
		const isSizeRequired = categories.indexOf('size') > -1;

		categories.map((category, index) => {
			const elementsSelected = preference[category].selection.length;
			conditions.push(
				'(' +
					preference[category].selection.map(
						(value: string | number | boolean, index2: number) => {
							return `${TABLES_PER_CATEGORY_FILTERING[category]}.${
								category === 'color' ? 'colorName' : category
							}=${typeof value === 'string' ? `"${value}"` : value} ${
								index2 < elementsSelected - 1 ? 'or ' : ' '
							}`;
						},
					) +
					`)${index < tablesLength - 1 ? 'AND ' : ''}`,
			);
		});
		let conditionString = `${conditions.map((condition) => condition)}`;
		conditionString = conditionString.replace(/,/g, '');

		const sql = `SELECT product.product_id,product.name, product_has_color.color_id, ${
			isSizeRequired ? 'size.size, product_color_has_size.size_id,' : ''
		} style.category, product.type, product.price, style.description, style.gender, product_has_color.product_has_color_id, color.colorName FROM product
		 INNER JOIN product_has_color ON product.product_id=product_has_color.product_id  AND product.type="${type}" 
		 INNER JOIN style ON product.product_id=style.product_id AND style.gender="${gender}" ${
			isSizeRequired
				? 'INNER JOIN product_color_has_size on product_has_color.color_id=product_color_has_size.product_has_color_id INNER JOIN size on product_color_has_size.size_id=size.size_id'
				: ''
		}
		 INNER JOIN color on product_has_color.color_id=color.color_id 
	 ${
			conditionString && `where ${conditionString}`
		} order by product_id desc limit 30;`;
		return {
			type: 'product',
			mode: 'select',
			object: {},
			sql: sql,
		};
	},
};

const DATA_TYPE = {
	PRODUCT_DETAIL_BY_ID: 'PRODUCT_DETAIL_BY_ID',
	PRODUCT_DETAIL_ALL_SIZE_BY_ID: 'PRODUCT_DETAIL_ALL_SIZE_BY_ID',
	PRODUCTS_ARRIVING: 'PRODUCTS_ARRIVING',
};

const TABLES_PER_CATEGORY_FILTERING: {
	[key: string]: string;
} = {
	color: 'color',
	price: 'product',
	type: 'product',
	category: 'style',
	gender: 'style',
	size: 'size',
};
const REDUCER = {
	NAME: 'INFORMATION_DATA_BASE',
};
export { SQL_OBJECT, REDUCER, SQL, DATA_TYPE, TABLES_PER_CATEGORY_FILTERING };

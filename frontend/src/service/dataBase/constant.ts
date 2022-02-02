import { TObjectSql } from './type';

const SQL = {
	COUNT: (table: string): string => `SELECT COUNT(*) FROM ${table};`,
};
const SQL_OBJECT:
	| {
			[key: string]: TObjectSql;
	  }
	| any = {
	PRODUCTS_FILTERED: (
		preference: any,
		type: string,
		gender: string,
		pagination?: number,
	) => {
		const categories = Object.keys(preference);
		const tablesLength = categories.length;
		const conditions: string[] = [];
		const isSizeRequired = categories.indexOf('size') > -1;
		categories.map((category, index) => {
			const elementsSelected = preference[category].length;
			conditions.push(
				'(' +
					preference[category].map(
						(value: string | number | boolean, index2: number) => {
							const generateConditionForPrice = (arrayObject: any[]) => {
								if (arrayObject.length > 1) {
									return `${arrayObject[0]} AND product.price <= ${arrayObject[1]} `;
								} else {
									return `0 AND product.price <= ${arrayObject[0]} `;
								}
							};

							const extractNumberFromStringToArrayIfPrice =
								category === 'price' && typeof value === 'string'
									? value.match(/\d+/g)
									: false;

							const valuePrice = extractNumberFromStringToArrayIfPrice
								? generateConditionForPrice(
										extractNumberFromStringToArrayIfPrice,
								  )
								: false;

							return `${TABLES_PER_CATEGORY_FILTERING[category]}.${
								category === 'color' ? 'colorName' : category
							}${category === 'price' ? '>=' : '='}${
								typeof value === 'string'
									? `${category === 'price' ? valuePrice : `"${value}"`}`
									: value
							} ${index2 < elementsSelected - 1 ? 'or ' : ' '}`;
						},
					) +
					`)${index < tablesLength - 1 ? 'AND ' : ''}`,
			);
		});
		let conditionString = `${conditions.map((condition) => condition)}`;
		conditionString = conditionString.replace(/,/g, '');

		// const sql = `SELECT SQL_CALC_FOUND_ROWS product.product_id,product.name, product_has_color.color_id, ${
		// 	isSizeRequired ? 'size.size, product_color_has_size.size_id,' : ''
		// } style.category, product.type, product.price, style.description, style.gender, product_has_color.product_has_color_id, color.colorName FROM product
		// 	 INNER JOIN product_has_color ON product.product_id=product_has_color.product_id AND product.type="${type}"
		// 	 INNER JOIN style ON product.product_id=style.product_id AND style.gender="${gender}" ${
		// 	isSizeRequired
		// 		? 'INNER JOIN product_color_has_size on product_has_color.color_id=product_color_has_size.product_has_color_id INNER JOIN size on product_color_has_size.size_id=size.size_id'
		// 		: ''
		// }
		// 	 INNER JOIN color on product_has_color.color_id=color.color_id
		//  ${conditionString && `where ${conditionString}`} AND   product.product_id > ${
		// 	pagination
		// 		? typeof pagination === 'string'
		// 			? `"${pagination}"`
		// 			: pagination
		// 		: 0
		// } order by product_id asc limit 10;
		// 	SELECT FOUND_ROWS();`;

		const sql = `SELECT SQL_CALC_FOUND_ROWS product.product_id, product.name, product_has_color.color_id, ${
			isSizeRequired ? 'size.size, produit_color_has_size.size_id,' : ''
		} style.category, product.type, product.price, style.description, style.gender, product_has_color.product_has_color_id, color.colorName FROM product 
			 INNER JOIN product_has_color ON product.product_id=product_has_color.product_id AND product.type="${type}"
			 INNER JOIN style ON product.product_id=style.product_id AND style.gender="${gender}" ${
			isSizeRequired
				? 'INNER JOIN product_color_has_size  on product_has_color.color_id=produit_color_has_size.product_has_color_id INNER JOIN size on produit_color_has_size.size_id=size.size_id'
				: ''
		}
			 INNER JOIN color on product_has_color.color_id=color.color_id
		 ${conditionString && `where ${conditionString}`} AND product.product_id > ${
			pagination
				? typeof pagination === 'string'
					? `"${pagination}"`
					: pagination
				: 0
		} group by product.product_id  order by product_id asc limit 15;
			SELECT FOUND_ROWS();`;

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

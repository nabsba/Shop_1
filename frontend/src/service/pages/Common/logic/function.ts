import { TColor, TNewObjectWithMatchingColor, TProduct } from '../type';

const generateNewArrayWithMatchingColor = (
	tableColor: TColor[],
	products: TProduct[],
): TNewObjectWithMatchingColor[] => {
	const newArray: {
		color: string;
		product_id: number;
		name: string;
		color_id: number;
	}[] = [];
	tableColor.map((row: TColor) => {
		products.map((product: TProduct) => {
			if (row.color_id === product.color_id) {
				newArray.push({ ...product, color: row.name });
			}
		});
	});
	return newArray;
};

export { generateNewArrayWithMatchingColor };

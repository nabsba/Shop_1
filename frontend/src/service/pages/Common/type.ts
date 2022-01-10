type TColor = {
	color_id: number;
	name: string;
};
type TProduct = {
	product_id: number;
	name: string;
	color_id: number;
};

type TNewObjectWithMatchingColor = {
	product_id: number;
	name: string;
	color_id: number;
	color: string;
};
export type { TColor, TProduct, TNewObjectWithMatchingColor };

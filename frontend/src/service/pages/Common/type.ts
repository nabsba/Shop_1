type TColor = {
	color_id: number;
	name: string;
};
type TSize = {
	size_id: number;
	size: number;
};

type TProduct = {
	product_id: number;
	name: string;
	color_id: number;
	gender: string;
	price: number;
};
type TProductDetails = {
	product_id: number;
	name: string;
	colorName: string;
	color_id: number;
	price: number;
	category: string;
	description: string;
	gender: string;
	product_has_color_id: number;
	numberOfPics: number | string;
	sizesID: any[];
	size: number[];
	type: string;
	quantityWished: number;
	sizeWished: number;
};

type TInfosTemplate = {
	type: string;
	errorCode: number;
};
// type TPagesInformationsReducer = {
// 	historyTree: { path: string; title: string }[];
// };

export type {
	TColor,
	TProduct,
	TProductDetails,
	TSize,
	TInfosTemplate,
	// TPagesInformationsReducer,
};

import THeaderProduct from '../../../component/tree/organism/divers/headerProduct/type';
import TFooter from '../../../component/tree/organism/footer/type';
import TNavigationHeader from '../../../component/tree/organism/navigation/type';
import { TProductDetails } from '../Common/type';

type TProducts = {
	navigationHeader: TNavigationHeader;
	footer: TFooter;
	headerProduct: THeaderProduct;
	articleGroupOriginal: {
		list: any[];
		display: boolean;
	};
	filteringCategories: any;
};

type TProductsReducer = {
	productsDataPage: TProducts;
	productsFiltered: {
		pending: boolean;
		serverError: boolean;
		filteringCategories: {
			[key: string]: any[];
		};
		doesClientFilterNewProducts: boolean;
		type: string;
		gender: string;
	};
	products: TProductDetails[];
	totalRows: number;
	doWeGetMoreProducts: boolean;
};

export default TProducts;

export type { TProductsReducer };

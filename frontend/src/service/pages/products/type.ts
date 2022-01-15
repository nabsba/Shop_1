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
	pending: boolean;
	error: boolean;
	products: TProducts;
	data: {
		products: TProductDetails[];
		type: string;
		gender: string;
	};
};

export default TProducts;

export type { TProductsReducer };

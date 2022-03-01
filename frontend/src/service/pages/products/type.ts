import { TParagraph } from '../../../component/tree/atom/paragraph/type';
import TArticleGroupOriginal from '../../../component/tree/organism/articleGroup/articleGroupOriginal/type';
import THeaderProduct from '../../../component/tree/organism/divers/headerProduct/type';
import TFilterProduct from '../../../component/tree/organism/filterProduct/type';
import TFooter from '../../../component/tree/organism/footer/type';
import TNavigationHeader from '../../../component/tree/organism/navigation/type';
import { TInfosTemplate, TProductDetails } from '../Common/type';

type TProducts = {
	navigationHeader: TNavigationHeader;
	footer: TFooter;
	headerProduct: THeaderProduct;
	articleGroupOriginal: TArticleGroupOriginal;
	filterProduct: TFilterProduct;
	infosTemplate: TInfosTemplate;
	paragraph: TParagraph;
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
		doWedisplayFilteringComponent: boolean;
	};
	products: TProductDetails[];
	totalRows: number;
	isUserHasScrolled: boolean;
};

export default TProducts;

export type { TProductsReducer };

import TPubVariant1 from '../../component/tree/molecule/banner/pubVariant1/type';
import TFooter from '../../component/tree/organism/footer/type';
import TNavigationHeader from '../../component/tree/organism/navigation/type';
import { TProductDetails } from '../pages/Common/type';
import TProduct from '../pages/product/type';
import TProducts from '../pages/products/type';

export type TReducers = {
	dataPages: {
		home: {
			navigationHeader: TNavigationHeader;
			footer: TFooter;
			sliderOriginalData: {
				list: { src: string; alt: string }[];
				className: string;
			};
			sliderVariant1: {
				list: [];
				title: string;
				display: boolean;
			};
			pubVariant1: TPubVariant1[];
		};

		data: any;
	};
	dataProducts: {
		pending: false;
		error: false;
		products: TProducts;
		data: {
			products: TProductDetails[];
		};
	};
	dataProduct: {
		pending: false;
		error: false;
		product: TProduct;
		data: {
			product: TProductDetails[];
			productSelected: TProductDetails;
		};
	};
};

import TPubVariant1 from '../../component/tree/molecule/banner/pubVariant1/type';
import TFooter from '../../component/tree/organism/footer/type';
import TNavigationHeader from '../../component/tree/organism/navigation/type';
import { TBagReducer } from '../pages/bag/type';
import { TProductReducer } from '../pages/product/type';
import { TProductsReducer } from '../pages/products/type';

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
	dataProducts: TProductsReducer;
	dataProduct: TProductReducer;
	dataBag: TBagReducer;
};

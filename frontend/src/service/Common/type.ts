import TPubVariant1 from '../../component/tree/molecule/banner/pubVariant1/type';
import TFooter from '../../component/tree/organism/footer/type';
import TNavigationHeader from '../../component/tree/organism/navigation/type';
import TProducts from '../../component/tree/page/products/type';

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
			products: [];
		};
	};
	informationDataBaseStore: {
		error: boolean;
		pending: boolean;
		color?: { color_id: number; name: string }[];
		size?: { size_id: number; size: number }[];
	};
};

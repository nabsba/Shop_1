import TFooter from '../../component/tree/organism/footer/type';
import TNavigationHeader from '../../component/tree/organism/navigation/type';

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
		};

		data: any;
	};
	informationDataBaseStore: {
		error: boolean;
		pending: boolean;
		color?: { color_id: number; name: string }[];
		size?: { size_id: number; size: number }[];
	};
};

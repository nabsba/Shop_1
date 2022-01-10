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
		};
		data: any;
	};
	informationDataBaseStore: Record<string, unknown>;
};

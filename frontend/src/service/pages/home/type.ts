import TPubVariant1 from '../../../component/tree/molecule/banner/pubVariant1/type';
import TFooter from '../../../component/tree/organism/footer/type';
import TNavigationHeader from '../../../component/tree/organism/navigation/type';
export type THome = {
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
type THomeReducer = {
	pending: boolean;
	error: boolean;
	home: THome;
	data: any;
};

export default THomeReducer;

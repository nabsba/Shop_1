import TPubVariant1 from '../../molecule/banner/pubVariant1/type';
import TFooter from '../../organism/footer/type';
import TNavigationHeader from '../../organism/navigation/type';
import TSliderOriginal from '../../organism/slider/sliderOriginal/type';

type TEridanus = {
	navigationHeader: TNavigationHeader;
	footer: TFooter;
	sliderOriginal: TSliderOriginal;
	sliderVariant1: { list: any[]; title: string; display: boolean };
	pubVariant1: TPubVariant1[];
};
export default TEridanus;

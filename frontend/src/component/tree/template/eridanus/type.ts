import TFooter from '../../organism/footer/type';
import TNavigationHeader from '../../organism/navigation/type';
import TSliderOriginal from '../../organism/slider/sliderOriginal/type';

type TEridanus = {
	navigationHeader: TNavigationHeader;
	footer: TFooter;
	sliderOriginal: TSliderOriginal;
	sliderVariant1: { list: any[]; title: string; display: boolean };
};
export default TEridanus;

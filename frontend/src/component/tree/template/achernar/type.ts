import TArticleGroupBag from '../../organism/articleGroup/articleGroupBag/type';
import TFooter from '../../organism/footer/type';
import TNavigationHeader from '../../organism/navigation/type';

type TAchernar = {
	navigationHeader: TNavigationHeader;
	footer: TFooter;
	articleGroupBag: TArticleGroupBag;
	sliderVariant1: { list: { src: string; alt: string }[] };
};
export default TAchernar;

import TArticleGroupOriginal from '../../organism/articleGroup/articleGroupOriginal/type';
import THeaderProduct from '../../organism/divers/headerProduct/type';
import TFilterProduct from '../../organism/filterProduct/type';
import TFooter from '../../organism/footer/type';
import TNavigationHeader from '../../organism/navigation/type';

type TCassiopeia = {
	navigationHeader: TNavigationHeader;
	footer: TFooter;
	headerProduct: THeaderProduct;
	articleGroupOriginal: TArticleGroupOriginal;
	filteringCategories: TFilterProduct[];
};
export default TCassiopeia;

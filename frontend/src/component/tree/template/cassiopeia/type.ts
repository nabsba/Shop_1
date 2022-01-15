import THeaderProduct from '../../organism/divers/headerProduct/type';
import TFooter from '../../organism/footer/type';
import TNavigationHeader from '../../organism/navigation/type';

type TCassiopeia = {
	navigationHeader: TNavigationHeader;
	footer: TFooter;
	headerProduct: THeaderProduct;
	articleGroupOriginal: any;
	filteringCategories: any[];
};
export default TCassiopeia;

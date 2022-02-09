import { TInfosTemplate } from '../../../../service/pages/Common/type';
import TPub from '../../molecule/banner/pub/type';
import TButtonVariant1 from '../../molecule/button/variant1/type';
import TSelectSize from '../../molecule/selectSize/type';
import TDescriptionProduct from '../../organism/descriptionProduct/type';
import TFooter from '../../organism/footer/type';
import TNavigationHeader from '../../organism/navigation/type';
import TSliderVariant2 from '../../organism/slider/sliderVariant2/type';

type TVega = {
	navigationHeader: TNavigationHeader;
	footer: TFooter;
	sliderVariant2: TSliderVariant2;
	butttonVariant1: TButtonVariant1;
	descriptionProduct: TDescriptionProduct;
	pub: TPub;
	selectSize: TSelectSize;
	pending: boolean;
	errorServer: boolean;
	infosTemplate: TInfosTemplate;
};
export default TVega;

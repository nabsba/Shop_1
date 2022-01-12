import TPub from '../../../component/tree/molecule/banner/pub/type';
import TButtonVariant1 from '../../../component/tree/molecule/button/variant1/type';
import TSelectSize from '../../../component/tree/molecule/selectSize/type';
import TDescriptionProduct from '../../../component/tree/organism/descriptionProduct/type';
import TFooter from '../../../component/tree/organism/footer/type';
import TNavigationHeader from '../../../component/tree/organism/navigation/type';
import TSliderVariant2 from '../../../component/tree/organism/slider/sliderVariant2/type';

type TProduct = {
	navigationHeader: TNavigationHeader;
	footer: TFooter;
	sliderVariant2Data: TSliderVariant2;
	butttonVariant1: TButtonVariant1;
	descriptionProductData: TDescriptionProduct;
	pub: TPub;
	selectSizeData: TSelectSize;
};

export default TProduct;

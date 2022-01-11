import THeaderProduct from '../../../component/tree/organism/divers/headerProduct/type';
import TFooter from '../../../component/tree/organism/footer/type';
import TNavigationHeader from '../../../component/tree/organism/navigation/type';

type TProducts = {
	navigationHeader: TNavigationHeader;
	footer: TFooter;
	headerProduct: THeaderProduct;
	articleGroupOriginal: {
		list: any[];
		display: boolean;
	};
};

export default TProducts;

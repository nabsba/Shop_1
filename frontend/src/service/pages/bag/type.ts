import TArticleGroupBag from '../../../component/tree/organism/articleGroup/articleGroupBag/type';
import TFooter from '../../../component/tree/organism/footer/type';
import TNavigationHeader from '../../../component/tree/organism/navigation/type';
import { TProductDetails } from '../Common/type';

type TBag = {
	navigationHeader: TNavigationHeader;
	footer: TFooter;
	articleGroupBagData: TArticleGroupBag;
};

type TBagReducer = {
	pending: boolean;
	error: boolean;
	bag: TBag;
	products: TProductDetails[];
	totalPriceOfTheBag: number;
	numberOfItemsInTheBag: number;
};

export default TBag;
export type { TBagReducer };

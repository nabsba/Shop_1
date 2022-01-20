import { TProductDetails } from '../../../../../service/pages/Common/type';

type TArticleGroupBag = {
	totalPriceOfTheBag: number;
	products: TProductDetails[];
	display: boolean;
};
export default TArticleGroupBag;

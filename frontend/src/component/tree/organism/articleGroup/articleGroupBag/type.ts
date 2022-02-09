import { TProductDetails } from '../../../../../service/pages/Common/type';

type TArticleGroupBag = {
	totalPriceOfTheBag: number;
	products: TProductDetails[];
	display: boolean;
	labels: {
		price: string;
		totalPrice: string;
		emptyBag: string;
		devise: string;
		color: string;
		quantity: string;
		size: string;
		type: string;
	};
};
export default TArticleGroupBag;

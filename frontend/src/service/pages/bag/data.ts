import { CURRENCY } from '../Common/constant';
import { footer, navigationHeader } from '../Common/data';
import TBag from './type';

const bagData: TBag = {
	navigationHeader,
	footer,
	articleGroupBagData: {
		products: [],
		display: false,
		totalPriceOfTheBag: 0,
		labels: {
			price: 'Price',
			totalPrice: 'Total price',
			emptyBag: 'Empty bag',
			devise: CURRENCY.UK,
			color: 'Color',
			quantity: 'Quantity',
			size: 'Size',
			type: 'Type',
		},
	},
	sliderVariant1Data: {
		list: [
			{ src: 'product/shoes/medium/blue/airzoom/airzoom_1', alt: 'air zoom' },
			{ src: 'product/shoes/medium/blue/airzoom/airzoom_1', alt: 'air zoom' },
			{ src: 'product/shoes/medium/blue/airzoom/airzoom_1', alt: 'air zoom' },
			{ src: 'product/shoes/medium/blue/airzoom/airzoom_1', alt: 'air zoom' },
			{ src: 'product/shoes/medium/blue/airzoom/airzoom_1', alt: 'air zoom' },
			{ src: 'product/shoes/medium/blue/airzoom/airzoom_1', alt: 'air zoom' },
			{ src: 'product/shoes/medium/blue/airzoom/airzoom_1', alt: 'air zoom' },
			{ src: 'product/shoes/medium/blue/airzoom/airzoom_1', alt: 'air zoom' },
		],
	},
};

export default bagData;

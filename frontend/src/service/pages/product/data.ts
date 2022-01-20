import { footer, navigationHeader } from '../Common/data';
import TProduct from './type';

const productData: TProduct = {
	navigationHeader,
	footer,
	sliderVariant2Data: {
		list: [],
		display: false,
	},
	butttonVariant1: 'buy',
	descriptionProductData: {
		menusDescription: ['description', 'detail', 'review'],
		descriptionData: {
			description: {
				title: '',
				text: '',
			},
			detail: {
				title: '',
				list: [''],
			},
			review: [
				{
					title: 'Great purchase! no regrets',
					list: [1, 1, 1, 1, 0],
					text: "From boot camp in the park to bodyweight exercises at the campground, these men's Reebok training shoes take you out of your routine and help make fitness fun wherever you are. Floatride Energy Foam in the forefoot gives you a lightweight feel and responsive ride. Raised lugs for better traction on any surface.",
				},
				{
					title: 'Faboulous',
					list: [1, 1, 1, 1, 1],
					text: "From boot camp in the park to bodyweight exercises at the campground, these men's Reebok training shoes take you out of your routine and help make fitness fun wherever you are.",
				},
			],
		},
	},
	pub: 'Pair up with us and get 20% OFF',
	selectSizeData: {
		sizes: [7, 8, 9, 10, 11, 12, 13],
		title: 'Select size',
	},
};

export default productData;

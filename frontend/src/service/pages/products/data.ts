import { filteringCategories, footer, navigationHeader } from '../Common/data';
import TProducts from './type';

const productsData: TProducts = {
	navigationHeader,
	footer,
	headerProduct: {
		h2: 'Men',
		list: ['Classic', 'Running', 'Lifestyle', 'hiking', 'basketball'],
		doWeDisplayHideNotice: true,
	},
	articleGroupOriginal: {
		list: [],
		display: false,
	},
	filteringCategories,
};

export default productsData;

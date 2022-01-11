import { footer, navigationHeader } from '../Common/data';
import TProducts from './type';

const productsData: TProducts = {
	navigationHeader,
	footer,
	headerProduct: {
		h2: 'Men',
		list: ['Classic', 'Running', 'Lifestyle', 'hiking', 'basketball'],
	},
	articleGroupOriginal: {
		list: [],
		display: false,
	},
};

export default productsData;

import { ERROR_CODE } from '../../Common/constant';
import { filteringCategories, footer, navigationHeader } from '../Common/data';
import TProducts from './type';

const productsData: TProducts = {
	navigationHeader,
	footer,
	headerProduct: {
		h2: 'Men',
		list: ['Classic', 'Running', 'Lifestyle', 'hiking', 'basketball'],
		doWedisplayFilteringComponent: false,
	},
	articleGroupOriginal: {
		list: [],
		pending: false,
		infosTemplate: {
			type: 'products',
			errorCode: ERROR_CODE.FETCH_PRODUCTS,
		},
	},
	filterProduct: {
		filteringCategories,
	},
	infosTemplate: {
		type: 'products',
		errorCode: ERROR_CODE.FETCH_PRODUCTS,
	},
};

export default productsData;

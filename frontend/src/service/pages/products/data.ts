import { ERROR_BOUNDARY } from '../../Common/constant';
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
			type: ERROR_BOUNDARY.FETCH_PRODUCTS.type,
			errorCode: ERROR_BOUNDARY.FETCH_PRODUCTS.code,
		},
	},
	filterProduct: {
		filteringCategories,
	},
	infosTemplate: {
		type: ERROR_BOUNDARY.FETCH_PRODUCTS.type,
		errorCode: ERROR_BOUNDARY.FETCH_PRODUCTS.code,
	},
	paragraph: 'No products available with those criterias...',
};

export default productsData;

import { TBagReducer } from '../pages/bag/type';
// import { TPagesInformationsReducer } from '../pages/Common/type';
import THomeReducer from '../pages/home/type';
import { TProductReducer } from '../pages/product/type';
import { TProductsReducer } from '../pages/products/type';

export type TReducers = {
	dataHome: THomeReducer;
	dataProducts: TProductsReducer;
	dataProduct: TProductReducer;
	dataBag: TBagReducer;
	// pagesInformations: TPagesInformationsReducer;
};

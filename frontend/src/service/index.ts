import reducers from './Common/reducer';
import { TReducers } from './Common/type';
import { CURRENCY } from './pages/Common/constant';
import { fetchProductsByTypeAndGender } from './pages/products/dataManagment/reducer';
import { DATA_TYPE_SERVICE_WORKER } from './wpa/serviceWorker/data';

export {
	DATA_TYPE_SERVICE_WORKER,
	reducers,
	fetchProductsByTypeAndGender,
	CURRENCY,
};
export type { TReducers };

import reducers from './Common/reducer';
import { TReducers } from './Common/type';
import { CURRENCY } from './pages/Common/constant';
import { fetchProductsFiltered } from './pages/products/dataManagment/reducer';
import { DATA_TYPE_SERVICE_WORKER } from './wpa/serviceWorker/data';

export { DATA_TYPE_SERVICE_WORKER, reducers, CURRENCY, fetchProductsFiltered };
export type { TReducers };

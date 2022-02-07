import { TInfoDevice } from '../device/type';
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
	infoDevice: TInfoDevice;
	// pagesInformations: TPagesInformationsReducer;
};

export type Result = {
	state: boolean;
	data: any;
	errorCodeServer: string;
	serverError: boolean;
	errorMessage: string;
	errorCodeSql: string;
};

export type CacheOption = {
	mode: string;
	cache: string | undefined;
	credentials: string;
};

export type IndexDBDataBase = {
	name: string;
	version: number;
	store: string;
};
export type IndexDBTransaction = {
	stores: string[];
	mode: string;
};

export type TAnyValues =
	| string
	| number
	| boolean
	| null
	| undefined
	| Record<string, unknown>;

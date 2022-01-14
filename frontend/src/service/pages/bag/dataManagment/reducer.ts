import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ERROR_LOG_ASYNC_MESSAGE } from '../../../../Common/constant';
import { logMessage } from '../../../../Common/function';
import {
	createDBIndexDB,
	removeDataFromIndexDB,
} from '../../../Common/indexDB/function';
import { getAllDatas } from '../../../wpa/indexDB/commun';
import { TProductDetails } from '../../Common/type';
import * as dataBackup from '../../datas/backup/data.json';

import { INDEX_DB, REDUCER } from '../constant';
import bagData from '../data';
import { TBagReducer } from '../type';
import bagWebWorker from '../webWorker/function.worker';

const workerBag = new (bagWebWorker as any)();

const initialState: TBagReducer = {
	pending: false,
	error: false,
	bag: bagData,
	products: [],
	totalPriceOfTheBag: 0,
	numberOfItemsInTheBag: 0,
};
export const getBagInformations = createAsyncThunk(REDUCER.NAME, async () => {
	try {
		const products = await getAllDatas(
			INDEX_DB.DATABASE_BAG,
			INDEX_DB.VERSION,
			INDEX_DB.STORE_PRODUCTS,
		);
		return products;
	} catch (error) {
		logMessage(`${ERROR_LOG_ASYNC_MESSAGE('bag/reducer', 'getBagInformations')},
			${error}`);
	}
});

const data = createSlice({
	name: REDUCER.NAME,
	initialState,
	reducers: {
		addNewproductToTheBag: (state, action: { payload: TProductDetails }) => {
			state.products.push(action.payload);
			workerBag.postMessage({
				type: INDEX_DB.ON_MESSAGE.UPDATE_BAG_ADD_NEW_PRODUCT,
				data: action.payload,
			});
			state.totalPriceOfTheBag = state.products.reduce(
				(n, { price, quantityWished }) => n + price * quantityWished,
				0,
			);
			state.numberOfItemsInTheBag = state.products.length;
		},
		removeProductFromTheBag: (state, action: { payload: number }) => {
			removeDataFromIndexDB(
				INDEX_DB.DATABASE_BAG,
				INDEX_DB.VERSION,
				INDEX_DB.STORE_PRODUCTS,
				action.payload,
			);
			state.products = state.products.filter(
				(product) => product.product_id !== action.payload,
			);
			state.totalPriceOfTheBag = state.products.reduce(
				(n, { price, quantityWished }) => n + price * quantityWished,
				0,
			);
			state.numberOfItemsInTheBag = state.products.length;
		},
		updatePropretyOfProduct: (
			state,
			action: {
				payload: { id: number; proprety: string; value: number | string };
			},
		) => {
			state.products.map((product: TProductDetails) => {
				if (product.product_id === action.payload.id) {
					switch (action.payload.proprety) {
						case 'quantity':
							product.quantityWished = Number(action.payload.value);
							state.totalPriceOfTheBag = state.products.reduce(
								(n, { price, quantityWished }) => n + price * quantityWished,
								0,
							);
							break;
						case 'size':
							product.sizeWished = Number(action.payload.value);
							break;
					}
				}
			});
		},
		initDatabase: (state, action: { payload: { type: string } }) => {
			switch (action.payload.type) {
				case INDEX_DB.ON_MESSAGE.INIT_BAG:
					createDBIndexDB(
						INDEX_DB.DATABASE_BAG,
						INDEX_DB.VERSION,
						INDEX_DB.STORE_PRODUCTS,
						INDEX_DB.KEYS.STORE_PRODUCTS,
					);
					break;
				default:
					return;
			}
		},
	},
	extraReducers: (builder) => {
		builder.addCase(
			getBagInformations.fulfilled,
			/*eslint-disable-next-line  @typescript-eslint/no-explicit-any*/
			(state, action: { payload: any }) => {
				state.pending = false;
				if (action.payload.error) {
					state.error = true;
				} else {
					state.products = action.payload;
					state.numberOfItemsInTheBag = action.payload.length;
					state.totalPriceOfTheBag = (() => {
						let total = 0;
						state.products.map((product: TProductDetails) => {
							total = total + product.quantityWished * product.price;
						});
						return total;
					})();
				}
			},
		);
		builder.addCase(getBagInformations.rejected, (state) => {
			state.pending = false;
			state.error = true;
		});
		builder.addCase(getBagInformations.pending, (state) => {
			state.pending = true;
		});
	},
});

const dataBag = data.reducer;

const {
	addNewproductToTheBag,
	updatePropretyOfProduct,
	initDatabase,
	removeProductFromTheBag,
} = data.actions;

export default dataBag;
export {
	dataBackup,
	addNewproductToTheBag,
	updatePropretyOfProduct,
	initDatabase,
	removeProductFromTheBag,
};

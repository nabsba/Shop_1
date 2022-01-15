import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
	resultTemplate,
	serverPost,
} from '../../../../bridge/common/requestServer';
import URL_ADDRESSES from '../../../../bridge/url';
import { ERROR_LOG_ASYNC_MESSAGE } from '../../../../Common/constant';
import { logMessage } from '../../../../Common/function';
import { Result } from '../../../../Common/type/type';
import { SQL_OBJECT } from '../../../dataBase/constant';
import * as dataBackup from '../../datas/backup/data.json';
import _ from 'lodash';
import productsData from '../data';
import { REDUCER } from '../constant';

// Those which are imported from home are those who the admin cannot update from his pannel.

const initialState = {
	pending: false,
	error: false,
	products: productsData,
	data: {
		products: [],
		type: '',
		gender: '',
	},
};
export const fetchProductsByTypeAndGender = createAsyncThunk(
	REDUCER.NAME,
	async ({ type, gender }: { type: string; gender: string }) => {
		let result: Result = { ...resultTemplate };
		try {
			const objectSql = SQL_OBJECT.PRODUCTS_PER_TYPE_AND_GENDER(type, gender);
			result = await serverPost(URL_ADDRESSES.data.postData, objectSql);
			if (result.data) {
				result.data.products = _.uniqBy(result.data, 'product_id');
				result.data.type = type;
				result.data.gender = gender;
			}
			return result;
		} catch (error) {
			logMessage(`${ERROR_LOG_ASYNC_MESSAGE(
				'dataManagment/reducer',
				'fetchProductsByTypeAndGender',
			)},
			${error}`);
		}
	},
);
export const fetchProductsFiltered = createAsyncThunk(
	`${REDUCER.NAME}/fetchProductsFiltered`,
	async ({ preference, type, gender }: any) => {
		let result: Result = { ...resultTemplate };
		try {
			const objectSql = SQL_OBJECT.PRODUCTS_FILTERED(preference, type, gender);
			result = await serverPost(URL_ADDRESSES.data.filterData, {
				objectSql,
				type: 'filter',
			});
			return result;
		} catch (error) {
			logMessage(`${ERROR_LOG_ASYNC_MESSAGE(
				'dataManagment/reducer',
				'fetchProductsFiltered',
			)},
			${error}`);
		}
	},
);

const data = createSlice({
	name: REDUCER.NAME,
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(
			fetchProductsByTypeAndGender.fulfilled,
			/*eslint-disable-next-line  @typescript-eslint/no-explicit-any*/
			(state, action: { payload: any }) => {
				state.pending = false;
				if (action.payload.error) {
					state.error = true;
				} else {
					state.data.products = action.payload.data.products;
					state.data.type = action.payload.data.type;
					state.data.gender = action.payload.data.gender;
				}
			},
		);
		builder.addCase(fetchProductsByTypeAndGender.rejected, (state) => {
			state.pending = false;
			state.error = true;
		});
		builder.addCase(fetchProductsByTypeAndGender.pending, (state) => {
			state.pending = true;
		});
		builder.addCase(
			fetchProductsFiltered.fulfilled,
			/*eslint-disable-next-line  @typescript-eslint/no-explicit-any*/
			(state, action: { payload: any }) => {
				// Add user to the state array
				state.pending = false;
				if (action.payload.error) {
					state.error = true;
				} else {
					state.data.products = action.payload.data;
				}
			},
		);
	},
});

const dataProducts = data.reducer;

export default dataProducts;
export { dataBackup };

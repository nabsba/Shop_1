import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
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
import { TProductsReducer } from '../type';

// Those which are imported from home are those who the admin cannot update from his pannel.

//todo: refactor state {productsByTypeAndGender: {...}, productsDataPage: {..}, productsFilterStatus: {..}}
const initialState: TProductsReducer = {
	productsDataPage: productsData,
	productsFiltered: {
		pending: false,
		serverError: false,
		filteringCategories: {},
		doesClientFilterNewProducts: false,
		type: '',
		gender: '',
	},
	products: [],
	totalRows: 0,
};

export const fetchProductsFiltered = createAsyncThunk(
	`${REDUCER.NAME}/fetchProductsFiltered`,
	async ({ preference, type, gender, pagination = null, isFetchDueToScroll  }: any) => {
		let result: Result = { ...resultTemplate };
	
		try {
			const objectSql = SQL_OBJECT.PRODUCTS_FILTERED(
				preference,
				type,
				gender,
				pagination,
			);
			result = await serverPost(URL_ADDRESSES.data.filterData, { objectSql });
			result.data.isFetchDueToScroll = isFetchDueToScroll;
			result.data.type = type;
			result.data.gender = gender;
		} catch (error) {
			logMessage(`${ERROR_LOG_ASYNC_MESSAGE(
				'dataManagment/reducer',
				'fetchProductsFiltered',
			)},
			${error}`);
		} finally {
			return result;
		}
	},
);

const data = createSlice({
	name: REDUCER.NAME,
	initialState,
	reducers: {
		updateFilteringCategories: (state, action: { payload: any }) => {
			state.productsFiltered.doesClientFilterNewProducts = true;
			state.productsFiltered.filteringCategories = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(
			fetchProductsFiltered.fulfilled,
			/*eslint-disable-next-line  @typescript-eslint/no-explicit-any*/
			(state, action: { payload: any }) => {
				state.productsFiltered.pending = false;
				if (action.payload.serverError) {
					state.productsFiltered.serverError = true;
				} else {
					state.products = action.payload.data.isFetchDueToScroll
						? 
						 [...state.products, ...action.payload.data[0]] : action.payload.data[0];
						 state.products = _.uniqBy(
					state.products,
						'product_id',
					);
					state.totalRows = action.payload.data[1][0]['FOUND_ROWS()'];
						state.productsFiltered.type = action.payload.data.type;
						state.productsFiltered.gender = action.payload.data.gender;
				}
			},
		);
		builder.addCase(fetchProductsFiltered.rejected, (state) => {
			state.productsFiltered.pending = false;
			state.productsFiltered.serverError = true;
		});
		builder.addCase(fetchProductsFiltered.pending, (state) => {
			state.productsFiltered.pending = true;
		});
	},
});

const dataProducts = data.reducer;
const { updateFilteringCategories } = data.actions;
export default dataProducts;
export { dataBackup, updateFilteringCategories };

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
	resultTemplate,
	serverGet,
	serverPost,
} from '../../../../bridge/common/requestServer';
import URL_ADDRESSES from '../../../../bridge/url';
import { ERROR_LOG_ASYNC_MESSAGE } from '../../../../Common/constant';
import { logMessage } from '../../../../Common/function';
import { Result } from '../../../../Common/type/type';
import { DATA_TYPE } from '../../../dataBase/constant';
import * as dataBackup from '../../datas/backup/data.json';
import _ from 'lodash';
import productData from '../data';
import { REDUCER } from '../constant';
import { TProductDetails } from '../../Common/type';

// Those which are imported from home are those who the admin cannot update from his pannel.

const initialState = {
	pending: false,
	error: false,
	product: productData,
	data: {
		product: [],
		productSelected: {},
	},
};

export const fetchProductByID = createAsyncThunk(
	REDUCER.NAME,
	async (id: number | string) => {
		let result: Result = { ...resultTemplate };
		try {
			result = await serverGet(
				URL_ADDRESSES.data.getData(DATA_TYPE.PRODUCT_DETAIL_BY_ID, id),
			);
			return result;
		} catch (error) {
			logMessage(`${ERROR_LOG_ASYNC_MESSAGE(
				'dataManagment/reducer',
				'fetchProductByID',
			)},
			${error}`);
		}
	},
);
const data = createSlice({
	name: REDUCER.NAME,
	initialState,
	reducers: {
		updateProductSelected: (state, action: { payload: TProductDetails }) => {
			state.data.productSelected = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(
			fetchProductByID.fulfilled,
			/*eslint-disable-next-line  @typescript-eslint/no-explicit-any*/
			(state, action: { payload: any }) => {
				state.pending = false;
				if (action.payload.error) {
					state.error = true;
				} else {
					state.data.product = action.payload.data;
					state.data.productSelected = action.payload.data[0];
				}
			},
		);
		builder.addCase(fetchProductByID.rejected, (state) => {
			state.pending = false;
			state.error = true;
		});
		builder.addCase(fetchProductByID.pending, (state) => {
			state.pending = true;
		});
	},
});
const dataProduct = data.reducer;

const { updateProductSelected } = data.actions;
export default dataProduct;
export { dataBackup, updateProductSelected };

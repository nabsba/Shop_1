import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
	URL_ADDRESSES,
	ERROR_LOG_ASYNC_MESSAGE,
} from '../../../Common/constant';
import { DATA_TYPE } from '../../../dataBase/constant';
import * as dataBackup from '../../datas/backup/data.json';
import productData from '../data';
import { REDUCER } from '../constant';
import { TProductDetails } from '../../Common/type';
import { TProductReducer } from '../type';
import { Result } from '../../../Common/type';
import { logMessage } from '../../../Common/logic/funtions';
import { resultTemplate, serverGet } from '../../../Common/logic/requestServer';

// Those which are imported from home are those who the admin cannot update from his pannel.

const initialState: TProductReducer = {
	state: false,
	pending: false,
	errorServer: false,
	product: productData,
	data: {
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
				if (action.payload.serverError) {
					state.errorServer = true;
				} else {
					if (action.payload.state) {
						state.state = action.payload.state;
						state.data.productSelected = action.payload.data[0];
					} else {
						state.state = false;
					}
				}
			},
		);
		builder.addCase(fetchProductByID.rejected, (state) => {
			state.pending = false;
			state.errorServer = true;
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

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
	resultTemplate,
	serverGet,
} from '../../../../bridge/common/requestServer';
import URL_ADDRESSES from '../../../../bridge/url';
import { ERROR_LOG_ASYNC_MESSAGE } from '../../../../Common/constant';
import { logMessage } from '../../../../Common/function';
import { Result } from '../../../../Common/type/type';
import { DATA_TYPE } from '../../../dataBase/constant';
import * as dataBackup from '../../datas/backup/data.json';
import homeData from '../data';
import _ from 'lodash';
import { REDUCER } from '../constant';
import THomeReducer from '../type';

// Those which are imported from home are those who the admin cannot update from his pannel.

const initialState: THomeReducer = {
	pending: false,
	error: false,
	home: homeData,
	data: {
		newArriving: [],
	},
};
export const fetchFirstProducts = createAsyncThunk(REDUCER.NAME, async () => {
	let result: Result = { ...resultTemplate };
	try {
		result = await serverGet(
			URL_ADDRESSES.data.getData(DATA_TYPE.PRODUCTS_ARRIVING, null),
		);
		if (result.data) {
			result.data = _.uniqBy(result.data, 'product_id');
		}

		return result;
	} catch (error) {
		logMessage(`${ERROR_LOG_ASYNC_MESSAGE(
			'dataManagment/reducer',
			'fetchFirstProducts',
		)},
			${error}`);
	}
});

const data = createSlice({
	name: REDUCER.NAME,
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(
			fetchFirstProducts.fulfilled,
			/*eslint-disable-next-line  @typescript-eslint/no-explicit-any*/
			(state, action: { payload: any }) => {
				// Add user to the state array
				state.pending = false;
				if (action.payload.serverError) {
					state.error = true;
				} else {
					state.data.newArriving = action.payload.data;
				}
			},
		);
		builder.addCase(fetchFirstProducts.rejected, (state) => {
			state.pending = false;
			state.error = true;
		});
		builder.addCase(fetchFirstProducts.pending, (state) => {
			state.pending = true;
		});
	},
});
const dataHome = data.reducer;

export default dataHome;
export { dataBackup };

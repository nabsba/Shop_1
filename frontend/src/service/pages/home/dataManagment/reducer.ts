import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
	URL_ADDRESSES,
	ERROR_LOG_ASYNC_MESSAGE,
} from '../../../Common/constant';
import { DATA_TYPE } from '../../../dataBase/constant';
import * as dataBackup from '../../datas/backup/data.json';
import homeData from '../data';
import { REDUCER } from '../constant';
import THomeReducer from '../type';
import { logMessage } from '../../../Common/logic/funtions';
import { Result } from '../../../Common/type';
import { resultTemplate, serverGet } from '../../../Common/logic/requestServer';

// Those which are imported from home are those who the admin cannot update from his pannel.

const initialState: THomeReducer = {
	pending: false,
	error: false,
	home: homeData,
	data: {
		newArriving: [],
	},
};
export const fetchFirstProductsFromDataBase = createAsyncThunk(
	REDUCER.NAME,
	async () => {
		let result: Result = { ...resultTemplate };
		try {
			result = await serverGet(
				URL_ADDRESSES.data.getData(DATA_TYPE.PRODUCTS_ARRIVING, null),
			);
			return result;
		} catch (error) {
			logMessage(`${ERROR_LOG_ASYNC_MESSAGE(
				'dataManagment/reducer',
				'fetchFirstProductsFromDataBase',
			)},
			${error}`);
			result.state = false;
			result.serverError = true;
		}
	},
);

const data = createSlice({
	name: REDUCER.NAME,
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(
			fetchFirstProductsFromDataBase.fulfilled,
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
		builder.addCase(fetchFirstProductsFromDataBase.rejected, (state) => {
			state.pending = false;
			state.error = true;
		});
		builder.addCase(fetchFirstProductsFromDataBase.pending, (state) => {
			state.pending = true;
		});
	},
});
const dataHome = data.reducer;

export default dataHome;
export { dataBackup };

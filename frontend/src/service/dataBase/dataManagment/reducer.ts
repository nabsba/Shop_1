// Those which are imported from home are those who the admin cannot update from his pannel.
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
	resultTemplate,
	serverGet,
} from '../../../bridge/common/requestServer';
import URL_ADDRESSES from '../../../bridge/url';
import { ERROR_LOG_ASYNC_MESSAGE } from '../../../Common/constant';
import { logMessage } from '../../../Common/function';
import { Result } from '../../../Common/type/type';
import { REDUCER } from '../constant';
import * as informationDataBaseBackUp from '../backup/informationDataBase.json';

const initialState = {
	pending: false,
	error: false,
	color: [],
	size: [],
};
export const fetchInformationDatabaseStore = createAsyncThunk(
	REDUCER.NAME,
	async () => {
		let result: Result = { ...resultTemplate };
		try {
			result = await serverGet(
				URL_ADDRESSES.data.getData(
					REDUCER.END_POINT_INFORMATION_DATA_BASE,
					null,
				),
			);
			result.data = false
				? result.data
				: JSON.parse(JSON.stringify(informationDataBaseBackUp));
			return result;
		} catch (error) {
			logMessage(`${ERROR_LOG_ASYNC_MESSAGE(
				'dataBase/reducer',
				'fetchInformationDatabaseStore',
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
			fetchInformationDatabaseStore.fulfilled,
			/*eslint-disable-next-line  @typescript-eslint/no-explicit-any*/
			(state, action: { payload: any }) => {
				state.pending = false;
				state.color = action.payload.data.color;
				state.size = action.payload.data.size;
			},
		);
		builder.addCase(fetchInformationDatabaseStore.rejected, (state) => {
			state.pending = false;
		});
		builder.addCase(fetchInformationDatabaseStore.pending, (state) => {
			state.pending = true;
		});
	},
});
const informationDataBaseStore = data.reducer;

export { informationDataBaseStore };
export default fetchInformationDatabaseStore;

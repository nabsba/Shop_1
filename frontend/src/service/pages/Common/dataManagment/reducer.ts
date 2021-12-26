import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
	resultTemplate,
	serverGet,
	serverPost,
} from '../../../../bridge/common/requestServer';
import URL_ADDRESSES from '../../../../bridge/url';
import { Result } from '../../../../Common/type/type';
import { OBJECT_SQL } from '../../../dataBase/constant';
import * as dataBackup from '../../datas/backup/data.json';

// Those which are imported from home are those who the admin cannot update from his pannel.

const initialState = {
	home: {
		allShoes: {
			pending: true,
			state: false,
			data: {},
			error: '',
			errorServer: '',
		},
	},
};
export const fetchFirstProducts = createAsyncThunk('dataPages', async () => {
	let result: Result = { ...resultTemplate };
	try {
		const objectSql = OBJECT_SQL.ALL_SHOES;
		result = await serverPost(URL_ADDRESSES.data.postObject, objectSql);
		return result;
	} catch (error) {
		console.log(
			'*** file: redux/midleware, method: fetchDataPages, error: ',
			error,
		);
	}
});

const data = createSlice({
	name: 'dataPages',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(
			fetchFirstProducts.fulfilled,
			/*eslint-disable-next-line  @typescript-eslint/no-explicit-any*/
			(state, action: { payload: any }) => {
				console.log(action.payload);
				// Add user to the state array
				state.home.allShoes.state = true;
				state.home.allShoes.data = action.payload;
			},
		);
		builder.addCase(fetchFirstProducts.rejected, (state) => {
			state.home.allShoes.state = false;
			state.home.allShoes.pending = false;
		});
		builder.addCase(fetchFirstProducts.pending, (state) => {
			state.home.allShoes.state = false;
			state.home.allShoes.pending = true;
		});
	},
});
const dataPages = data.reducer;

export default dataPages;
export { dataBackup };

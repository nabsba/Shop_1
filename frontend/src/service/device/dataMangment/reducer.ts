import { createSlice } from '@reduxjs/toolkit';
import { TInfoDevice } from '../type';

const initialState = {
	size: 0,
};

const data0 = createSlice({
	name: 'sizeOfElementForm',
	initialState: initialState,
	reducers: {
		getSizeOfElement: (state: { size: number }) => state,
		updateSizeOfElement: (
			state: { size: number },
			action: { payload: number },
		) => {
			state.size = action.payload;
		},
	},
});
const initialStateInfoDevice: TInfoDevice = {
	isHover: false,
	isWebWorker: false,
	isServiceWorker: false,
	isWebService: false,
	isIndexDB: false,
	storageClient: {
		used: 0,
		available: 0,
	},
	modeChosen: 'light',
};
const data = createSlice({
	name: 'infoDevice',
	initialState: initialStateInfoDevice,
	reducers: {
		getInfoDevice: (state: TInfoDevice) => state,
		updateInfoDevice: (state, action: { payload: TInfoDevice }) => {
			state.isHover = action.payload.isHover;
			state.isWebService = action.payload.isWebService;
			state.isServiceWorker = action.payload.isServiceWorker;
			state.isIndexDB = action.payload.isServiceWorker;
		},
		updateModeChosen: (state, action: { payload: string }) => {
			state.modeChosen = action.payload;
		},
	},
});

const sizeOfElement = data0.reducer;
const infoDevice = data.reducer;
const { getSizeOfElement, updateSizeOfElement } = data0.actions;
const { getInfoDevice, updateInfoDevice, updateModeChosen } = data.actions;

export {
	sizeOfElement,
	infoDevice,
	getSizeOfElement,
	updateSizeOfElement,
	getInfoDevice,
	updateInfoDevice,
	updateModeChosen,
};

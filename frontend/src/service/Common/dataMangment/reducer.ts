import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import dataHome from '../../pages/home/dataManagment/reducer';
import dataProducts from '../../pages/products/dataManagment/reducer';
import dataProduct from '../../pages/product/dataManagment/reducer';
import dataBag from '../../pages/bag/dataManagment/reducer';
import { infoDevice } from '../../device/dataMangment/reducer';

const reducer = combineReducers({
	dataHome,
	dataProducts,
	dataProduct,
	dataBag,
	infoDevice,
	// pagesInformations,
});

const reducers = configureStore({
	reducer,
});

export default reducers;

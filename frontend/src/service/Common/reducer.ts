import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import dataPages from '../pages/home/dataManagment/reducer';
import dataProducts from '../pages/products/dataManagment/reducer';
import dataProduct from '../pages/product/dataManagment/reducer';
import dataBag from '../pages/bag/dataManagment/reducer';
// allReducers
// import { persistReducer } from "redux-persist";
// tell to redux you want want to use your storage as default
// import storage from "redux-persist/lib/storage";
// or session storage: diff between them; if the user closes his windows
// all datas are deleted but with local storage they are saved.
// import sessionStorage from "redux-persist/lib/storage";
// Will define which reducer we want then to be persisted.
const reducer = combineReducers({
	dataPages,
	dataProducts,
	dataProduct,
	dataBag,
});

const reducers = configureStore({
	reducer,
});

export default reducers;

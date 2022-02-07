import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './component/Common/css/share.css';
import './component/Common/css/variable.css';
import { useDispatch, useSelector } from 'react-redux';
import { Bag, Home, Product, Products } from './component/tree/page';
import { fetchFirstProducts } from './service/pages/home/dataManagment/reducer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { INDEX_DB } from './service/pages/bag/constant';
import {
	initDatabase,
	getBagInformations,
} from './service/pages/bag/dataManagment/reducer';
import { PaletteMode } from '@mui/material';
import { TReducers } from './service';
import { TInfoDevice } from './service/device/type';
import { updateInfoDevice } from './service/device/dataMangment/reducer';

// mui.com/customization/dark-mode
export const getDesignTokens = (
	mode: PaletteMode | string,
): Record<string, unknown> => ({
	palette: {
		mode,
		...(mode === 'light'
			? {
					// palette values for light mode
					primary: {
						light: '#9B3333',
						main: '#830101',
						dark: '#5B0000',
					},
					secondary: {
						light: '#f4f4f4',
						main: '#d6d6d6',
						dark: '#a9a9a9',
					},
					neutral: {
						light: '#ffffff',
						main: '#a9a9a9',
						dark: '#000000',
					},
			  }
			: {
					// palette values for dark mode
					neutral: {
						light: '#1F2128',
						main: '#a9a9a9',
						dark: '#ffffff',
					},
			  }),
	},
	typography: {
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
	},
});

const App: React.FC = () => {
	const {
		infoDevice: { modeChosen },
	} = useSelector((state: TReducers) => state);
	const dispatch = useDispatch();
	// // Check storage of the client.
	// let storage: { used: number | undefined; available: number | undefined } = {
	// 	used: 0,
	// 	available: 0,
	// };
	// if ('storage' in navigator && 'estimate' in navigator.storage) {
	// 	navigator.storage.estimate().then(({ usage, quota }) => {
	// 		storage = { used: usage, available: quota };
	// 	});
	// }
	// // Check if the browser support the hover.
	// const isHoverSupported = !matchMedia('(hover: none)').matches;
	// // Check if the browser support webworker (We will also need this information to fetchDashboard)
	// const isBrowserSupportWebWorker = typeof Worker !== 'undefined';
	// const isBrowserSupportServiceWorker = 'serviceWorker' in navigator;
	// https://caniuse.com/?search=indexDB
	const isIndexDbSupported = true;
	useEffect(() => {
		// Not needed
		// const infoDevice: TInfoDevice = {
		// 	isHover: isHoverSupported,
		// 	isWebWorker: isBrowserSupportWebWorker,
		// 	isServiceWorker: isBrowserSupportServiceWorker,
		// 	isWebService: false,
		// 	isIndexDB: isIndexDbSupported,
		// 	storageClient: storage,
		// 	modeChosen,
		// };
		// dispatch(updateInfoDevice(infoDevice));
		dispatch(initDatabase({ type: INDEX_DB.ON_MESSAGE.INIT_BAG }));
		dispatch(getBagInformations());
		dispatch(fetchFirstProducts());
	}, [
		dispatch,
		// isBrowserSupportServiceWorker,
		// isBrowserSupportWebWorker,
		// isHoverSupported,
		isIndexDbSupported,
		modeChosen,
		// storage,
	]);
	return (
		<ThemeProvider theme={createTheme(getDesignTokens(modeChosen))}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/products/:type/:gender" element={<Products />} />
					<Route path="/product/:type/:gender/:id" element={<Product />} />
					<Route path="/bag" element={<Bag />} />
					<Route path="*" element={<Home />} />
					{/* <Route path="/test/:id " element={<Home />} /> */}
					{/* <ErrorServer />
				</Route>
				<Route path="*">
					<ErrorPath /> */}
					{/* </Route> */}
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
};
// (App as any).whyDidYouRender = true;
export default App;

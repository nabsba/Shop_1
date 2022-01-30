import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './component/Common/css/share.css';
import './component/Common/css/variable.css';
import { useDispatch } from 'react-redux';
import { Bag, Home, Product, Products } from './component/tree/page';
import { fetchFirstProducts } from './service/pages/home/dataManagment/reducer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { INDEX_DB } from './service/pages/bag/constant';
import {
	initDatabase,
	getBagInformations,
} from './service/pages/bag/dataManagment/reducer';
import { PaletteMode } from '@mui/material';

// mui.com/customization/dark-mode
export const getDesignTokens = (
	mode: PaletteMode,
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
const theme = createTheme(getDesignTokens('dark'));

const App: React.FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(initDatabase({ type: INDEX_DB.ON_MESSAGE.INIT_BAG }));
		dispatch(getBagInformations());
		dispatch(fetchFirstProducts());
	}, [dispatch]);

	return (
		<ThemeProvider theme={theme}>
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

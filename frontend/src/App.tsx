import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './component/Common/css/share.css';
import './component/Common/css/variable.css';
import { useDispatch, useSelector } from 'react-redux';
import { Bag, Home, Product, Products } from './component/tree/page';
import { fetchFirstProductsFromDataBase } from './service/pages/home/dataManagment/reducer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { INDEX_DB } from './service/pages/bag/constant';
import {
	initDatabaseInIndexDB,
	getBagInformationsFromIndexDB,
} from './service/pages/bag/dataManagment/reducer';
import { PaletteMode } from '@mui/material';
import { TReducers } from './service';
import { ErrorBoundary } from 'react-error-boundary';
import { ERROR_BOUNDARY } from './service/Common/constant';
import { Whirlpool } from './component/tree/template';
import { footer, navigationHeader } from './service/pages/Common/data';

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
						dark: '#464646',
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
const ROUTES = [
	{
		path: '/',
		errorBoundaryFallback: {
			type: ERROR_BOUNDARY.FETCH_PRODUCTS.type,
			code: ERROR_BOUNDARY.FETCH_PRODUCTS.code,
		},
		component: <Home />,
	},
	{
		path: '/home',
		errorBoundaryFallback: {
			type: ERROR_BOUNDARY.FETCH_PRODUCTS.type,
			code: ERROR_BOUNDARY.FETCH_PRODUCTS.code,
		},
		component: <Home />,
	},
	{
		path: '/products/:type/:gender',
		errorBoundaryFallback: {
			type: ERROR_BOUNDARY.FETCH_PRODUCTS.type,
			code: ERROR_BOUNDARY.FETCH_PRODUCTS.code,
		},
		component: <Products />,
	},
	{
		path: '/product/:type/:gender/:id',
		errorBoundaryFallback: {
			type: ERROR_BOUNDARY.FETCH_PRODUCT.type,
			code: ERROR_BOUNDARY.FETCH_PRODUCT.code,
		},
		component: <Product />,
	},
	{
		path: '/bag',
		errorBoundaryFallback: {
			type: ERROR_BOUNDARY.FETCH_PRODUCT.type,
			code: ERROR_BOUNDARY.FETCH_PRODUCT.code,
		},
		component: <Bag />,
	},
	{
		path: '*',
		errorBoundaryFallback: {
			type: ERROR_BOUNDARY.FETCH_PRODUCTS.type,
			code: ERROR_BOUNDARY.FETCH_PRODUCTS.code,
		},
		component: <Home />,
	},
];
const displayRoute = (object: {
	path: string;
	errorBoundaryFallback: { type: string; code: number };
	component: any;
}) => (
	<Route
		key={object.path}
		path={object.path}
		element={
			<ErrorBoundary
				fallbackRender={() => (
					<Whirlpool
						data={{
							navigationHeader: navigationHeader,
							footer: footer,
							errorBoundary: object.errorBoundaryFallback,
						}}
					/>
				)}
			>
				{object.component}
			</ErrorBoundary>
		}
	/>
);
const App: React.FC = () => {
	const {
		infoDevice: { modeChosen },
	} = useSelector((state: TReducers) => state);
	const dispatch = useDispatch();
	const isIndexDbSupported = true;
	useEffect(() => {
		dispatch(initDatabaseInIndexDB({ type: INDEX_DB.ON_MESSAGE.INIT_BAG }));
		dispatch(getBagInformationsFromIndexDB());
		dispatch(fetchFirstProductsFromDataBase());
	}, [dispatch, isIndexDbSupported, modeChosen]);

	return (
		<ThemeProvider theme={createTheme(getDesignTokens(modeChosen))}>
			<BrowserRouter>
				<Routes>{ROUTES.map((route) => displayRoute(route))}</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
};
// (App as any).whyDidYouRender = true;
export default App;

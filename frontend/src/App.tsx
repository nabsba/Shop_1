import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './component/common/css/share.css';
import { useDispatch } from 'react-redux';
import { Home, Product, Products } from './component/tree/page';
import { fetchFirstProducts } from './service/pages/Common/dataManagment/reducer';
import fetchInformationDatabase from './service/dataBase/dataManagment/reducer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './component/Common/css/share.css';
// Reminder: https://medium.com/@jenniferdobak/react-router-vs-switch-components-2af3a9fc72e

const theme = createTheme({
	// palette: {
	// 	mode: 'dark',
	// },
	palette: {
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
	},
});

const App: React.FC = () => {
	const [HomeComponent, setHomeComponent] = useState<React.ReactNode>();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchInformationDatabase());
		dispatch(fetchFirstProducts());
	}, [dispatch]);

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/product/:type/:gender" element={<Products />} />
					<Route path="/product/:type/:gender/:id" element={<Product />} />
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

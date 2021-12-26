import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './component/common/css/share.css';
import { useDispatch } from 'react-redux';
import { Home } from './component/tree/page';
import { fetchFirstProducts } from './service/pages/Common/dataManagment/reducer';

// Reminder: https://medium.com/@jenniferdobak/react-router-vs-switch-components-2af3a9fc72e

const App: React.FC = () => {
	const [HomeComponent, setHomeComponent] = useState<React.ReactNode>();
	const dispatch = useDispatch();

	useEffect(() => {
		console.log('fired');
		dispatch(fetchFirstProducts());
	}, [dispatch]);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/test/:id " element={<Home />} />
				{/* <ErrorServer />
				</Route>
				<Route path="*">
					<ErrorPath /> */}
				{/* </Route> */}
			</Routes>
		</BrowserRouter>
	);
};
// (App as any).whyDidYouRender = true;
export default App;

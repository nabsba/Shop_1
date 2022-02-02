// import './wdyr'; // why did you render
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { LOG_MESSAGE } from './service/Common/constant';

import './component/Common/css/share.css';
import { DATA_TYPE_SERVICE_WORKER, reducers } from './service';
import { logMessage } from './service/Common/funtions';

if (
	'serviceWorker' in navigator &&
	process.env.REACT_APP_DEVELOPMENT === 'false'
) {
	// Use the window load event to keep the page load performant
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('./service-worker.js')
			.then(function (registration) {
				logMessage(LOG_MESSAGE.SERVICE_WORKER_SUCCESS);
				console.log('Service Worker Registered', registration);
			})
			.catch(function () {
				logMessage(LOG_MESSAGE.SERVICE_WORKER_FAILED);
			});
	});
	navigator.serviceWorker.ready.then((registration) => {
		// Skip waiting ensures that any new versions of a service worker will take over the page and become activated immediately.
		if (registration && registration.active) {
			registration.active.postMessage(DATA_TYPE_SERVICE_WORKER.SKIP_WAITING);
		}
	});
}

const rootElement = document.getElementById('root');

ReactDOM.render(
	<Provider store={reducers}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,

	rootElement,
);

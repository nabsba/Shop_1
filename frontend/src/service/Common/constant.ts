const ERROR_LOG_ASYNC_MESSAGE = (path: string, method: string): string =>
	`*** file: ${path}, method: ${method}, error: `;

const LOG_MESSAGE = {
	SERVICE_WORKER_SUCCESS: 'SERVICE WORKER SUCCESS REGISTRATION',
	SERVICE_WORKER_FAILED: 'SERVICE WORKER FAILED REGISTRATION',
};

const ADMINISTRATION = {
	EMAIL: 'admin@example.com',
};
const ERROR_CODE = {
	FETCH_PRODUCTS: 100,
	SLIDER: 200,
};
// Local server
const URL_ADDRESS = 'https://localhost:3001';
// Heroku
// const URL_ADDRESS = `https://shop-ns.herokuapp.com`;
// fake api server
// do not forget to write: npx json-server db.json --routes routes.json
// const URL_ADDRESS = 'http://localhost:3000';

const URL_ADDRESSES: {
	default: string;
	data: {
		postData: string;
		getData: (type: string, id: number | string | null) => string;
		filterData: string;
	};
	fileManager: {
		default: string;
		image: { load: (name: string) => string; url: string };
	};
} = {
	default: URL_ADDRESS,
	data: {
		postData: `${URL_ADDRESS}/data`,
		getData: (type: string, id = null) => `${URL_ADDRESS}/data/${type}/${id}`,
		filterData: `${URL_ADDRESS}/data/filterData`,
	},
	fileManager: {
		default: `${URL_ADDRESS}/fileManager/file`,
		image: {
			load: (path: string) => `${URL_ADDRESS}/fileManager/image/${path}`,
			url: ``,
		},
	},
};

export default URL_ADDRESSES;

export { ERROR_LOG_ASYNC_MESSAGE, LOG_MESSAGE, ADMINISTRATION, ERROR_CODE };

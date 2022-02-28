const ERROR_LOG_ASYNC_MESSAGE = (path: string, method: string): string =>
	`*** file: ${path}, method: ${method}, error: `;

const LOG_MESSAGE = {
	SERVICE_WORKER_SUCCESS: 'SERVICE WORKER SUCCESS REGISTRATION',
	SERVICE_WORKER_FAILED: 'SERVICE WORKER FAILED REGISTRATION',
};

const ADMINISTRATION = {
	EMAIL: 'admin@example.com',
};
const ERROR_BOUNDARY = {
	FETCH_PRODUCTS: { type: 'Products', code: 100 },
	SLIDER: { type: 'Sliders', code: 200 },
	FETCH_PRODUCT: { type: 'Products', code: 300 },
	BAG: { type: 'Bag', code: 400 },
};
// Local server
const URL_ADDRESS: { [key: string]: string } = {
	LOCAL: 'http://localhost:3001',
	LOCAL_HTTPS: 'https://localhost:3001',
	HEROKU: 'https://shop-ns.herokuapp.com',
	CENTOS: 'www.yourdomainname.com',
	// Reminder: active the self api, write: npx json-server db.json --routes routes.json
	SELF_API: 'http://localhost:3000',
	NAMECHEAP: 'www.yourdomainame.com',
};

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
	default: URL_ADDRESS[process.env.HOST ? process.env.HOST : 'LOCAL'],
	data: {
		postData: `${
			URL_ADDRESS[process.env.HOST ? process.env.HOST : 'LOCAL']
		}/data`,
		getData: (type: string, id = null) =>
			`${
				URL_ADDRESS[process.env.HOST ? process.env.HOST : 'LOCAL']
			}/data/${type}/${id}`,
		filterData: `${
			URL_ADDRESS[process.env.HOST ? process.env.HOST : 'LOCAL']
		}/data/filterData`,
	},
	fileManager: {
		default: `${
			URL_ADDRESS[process.env.HOST ? process.env.HOST : 'LOCAL']
		}/fileManager/file`,
		image: {
			load: (path: string) =>
				`${
					URL_ADDRESS[process.env.HOST ? process.env.HOST : 'LOCAL']
				}/fileManager/image/${path}`,
			url: ``,
		},
	},
};

export {
	ERROR_LOG_ASYNC_MESSAGE,
	LOG_MESSAGE,
	ADMINISTRATION,
	ERROR_BOUNDARY,
	URL_ADDRESSES,
};

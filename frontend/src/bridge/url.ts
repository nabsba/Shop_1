// Local server
const URL_ADDRESS = 'https://localhost:3001';
// fake api server
// do not forget to write: npx json-server db.json --routes routes.json
// const URL_ADDRESS = 'http://localhost:3000';

const URL_ADDRESSES: {
	default: string;
	data: {
		postData: string;
		getData: (type: string, id: number | null) => string;
	};
} = {
	default: URL_ADDRESS,
	data: {
		postData: `${URL_ADDRESS}/data`,
		getData: (type: string, id = null) => `${URL_ADDRESS}/data/${type}/${id}`,
	},
};

export default URL_ADDRESSES;

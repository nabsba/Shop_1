// Local server
const URL_ADDRESS = 'https://localhost:3001';
// fake api server
// do not forget to write: npx json-server db.json --routes routes.json
// const URL_ADDRESS = 'http://localhost:3000';

const URL_ADDRESSES: {
	default: string;

	data: {
		postObject: string;
	};
} = {
	default: URL_ADDRESS,
	data: {
		postObject: `${URL_ADDRESS}/data`,
	},
};

export default URL_ADDRESSES;

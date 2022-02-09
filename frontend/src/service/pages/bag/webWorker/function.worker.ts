import {
	addDataToIndexDB,
	getAllDatas,
} from '../../../Common/indexDB/function';
import { INDEX_DB } from '../constant';

const bagWebWorker: Worker = self as any;

bagWebWorker.addEventListener(
	'message',
	async (event: { data: { type: string; data: any } }) => {
		switch (event.data.type) {
			case INDEX_DB.ON_MESSAGE.INIT_BAG:
				const getAll = await getAllDatas(
					INDEX_DB.DATABASE_BAG,
					INDEX_DB.VERSION,
					INDEX_DB.STORE_PRODUCTS,
				);
				bagWebWorker.postMessage({
					type: INDEX_DB.ON_MESSAGE.INIT_BAG,
					data: getAll,
				});
				console.log(getAll);

				return getAll;
			case INDEX_DB.ON_MESSAGE.UPDATE_BAG_ADD_NEW_PRODUCT:
				await addDataToIndexDB(
					INDEX_DB.DATABASE_BAG,
					INDEX_DB.VERSION,
					INDEX_DB.STORE_PRODUCTS,
					event.data.data,
				);
				return;
			default:
				bagWebWorker.postMessage('Patronus');
				return;
		}
	},
);
export default bagWebWorker;

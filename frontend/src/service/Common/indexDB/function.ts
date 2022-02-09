import { openDB } from 'idb';

const createDBIndexDB = (
	database: string,
	version: number,
	store: string,
	ref?: string,
): boolean => {
	const dataB = openDB(database, version, {
		upgrade(db) {
			db.createObjectStore(
				store,
				ref ? { keyPath: ref } : { autoIncrement: true },
			);
		},
	});
	const result = Boolean(dataB);
	return result;
};
const addDataToIndexDB = async (
	database: string,
	version: number,
	store: string,
	data: Record<string, unknown>,
): Promise<void> => {
	const db = await openDB(database, version);
	try {
		db.add(store, data);
	} catch (error) {
		console.log(
			'*** file: webworker/commun, method:addDataToIndexDB , error: ',
			error,
		);
	} finally {
		db.close();
	}
};
const getAllDatas = async (
	database: string,
	version: number,
	store: string,
): Promise<any[] | undefined> => {
	const db = await openDB(database, version);
	try {
		const datas = await db.getAll(store);
		return datas;
	} catch (error) {
		// Need to close the DB before deleting.
		db.close();
		// We delete the database if there is no store as it gets created automatically when we check in.
		// await deleteDB(database, {
		// 	blocked() {
		// 		// 	// …
		// 	},
		// });
		console.log(
			'*** file: webworker/commun, method: getAllData, error: ',
			error,
		);
	}
};
const getDataFromID = async (
	database: string,
	version: number,
	store: string,
	ID: string | number,
): Promise<void> => {
	try {
		const db = await openDB(database, version);
		const data = await db.get(store, ID);
		return data;
	} catch (error) {
		console.log(
			'*** file: webworker/commun, method: getAllData, error: ',
			error,
		);
	}
};
const getAllKeys = async (
	database: string,
	version: number,
	store: string,
): Promise<IDBValidKey[] | undefined> => {
	try {
		const db = await openDB(database, version);
		const allKeys = await db.getAllKeys(store);
		return allKeys;
	} catch (error) {
		console.log(
			'*** file: webworker/getAllKey, method: getAllKey, error: ',
			error,
		);
	} finally {
	}
};
const updateData = async (
	database: string,
	version: number,
	store: string,
	data: Record<string, unknown>,
): Promise<void> => {
	const db = await openDB(database, version);
	try {
		db.put(store, data);
	} catch (error) {
		console.log(
			'*** file: webworker/updateData, method:updateData, error: ',
			error,
		);
	} finally {
		db.close();
	}
};
const removeDataFromIndexDB = async (
	database: string,
	version: number,
	store: string,
	id: string | number,
): Promise<void> => {
	try {
		const db = await openDB(database, version);
		const transaction = db.transaction([store], 'readwrite');
		transaction.objectStore(store).delete(id);
	} catch (error) {
		console.log(error);
	}
};

export {
	createDBIndexDB,
	addDataToIndexDB,
	getAllDatas,
	getDataFromID,
	getAllKeys,
	updateData,
	removeDataFromIndexDB,
};

import { ERROR_LOG_ASYNC_MESSAGE } from '../../../Common/constant';
import { logMessage } from '../../../Common/logic/funtions';
import { addDataToIndexDB, createDBIndexDB } from '../commun';

const addDashboardUserToIDB = async (
	dashboard: Record<string, unknown>,
): Promise<void> => {
	try {
		const database = 'dashboard';
		const store = 'dashboard';
		const isItCreated = createDBIndexDB(database, 1, store);
		if (isItCreated) {
			await addDataToIndexDB(database, 1, store, dashboard);
		} else {
			throw 'Dashboard has not been created yet.';
		}
	} catch (error) {
		logMessage(`${ERROR_LOG_ASYNC_MESSAGE(
			'indexDB/dashboard',
			'addDashboardUserToIDB',
		)},
			${error}`);
	}
};

export { addDashboardUserToIDB };

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOG_MESSAGE = exports.ERROR_LOG_ASYNC_MESSAGE = void 0;
const LOG_MESSAGE = {
    REDIS_ON_SUCCESS: 'SUCCESS CONNECTION',
    REDIS_ON_ERROR: 'FAILED TO CONNECT (MAKE SURE YOUR SERVER IS STARTED) OR TROUBLE SHOT THE FOLLOWING ERROR: ',
    SERVER_ON: 'SERVER ON LISTENING PORT: ',
};
exports.LOG_MESSAGE = LOG_MESSAGE;
const ERROR_LOG_ASYNC_MESSAGE = (path, method) => `*** file: ${path}, method: ${method}, error: `;
exports.ERROR_LOG_ASYNC_MESSAGE = ERROR_LOG_ASYNC_MESSAGE;

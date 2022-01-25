"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOG_MESSAGE = exports.ERROR_LOG_ASYNC_MESSAGE = void 0;
const ERROR_LOG_ASYNC_MESSAGE = (path, method) => `*** file: ${path}, method: ${method}, error: `;
exports.ERROR_LOG_ASYNC_MESSAGE = ERROR_LOG_ASYNC_MESSAGE;
const LOG_MESSAGE = {
    SERVER_ON: 'SERVER ON LISTENING PORT: ',
};
exports.LOG_MESSAGE = LOG_MESSAGE;

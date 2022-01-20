"use strict";
exports.__esModule = true;
exports.LOG_MESSAGE = exports.ERROR_LOG_ASYNC_MESSAGE = void 0;
var ERROR_LOG_ASYNC_MESSAGE = function (path, method) {
    return "*** file: ".concat(path, ", method: ").concat(method, ", error: ");
};
exports.ERROR_LOG_ASYNC_MESSAGE = ERROR_LOG_ASYNC_MESSAGE;
var LOG_MESSAGE = {
    SERVER_ON: 'SERVER ON LISTENING PORT: '
};
exports.LOG_MESSAGE = LOG_MESSAGE;

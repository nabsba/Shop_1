"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = __importDefault(require("redis"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const express_session_1 = __importDefault(require("express-session"));
const constant_1 = require("../constant");
const function_1 = require("../../../Common/function");
const redisStore = (0, connect_redis_1.default)(express_session_1.default);
const redisClient = redis_1.default.createClient({
    port: 6379,
    host: 'localhost',
    no_ready_check: true,
});
redisClient.auth(process.env.REDIS_PASSWORD);
const redisConfig = {
    store: new redisStore({
        client: redisClient,
    }),
    secret: 'mySect',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 1000 * 60 * 60 * 24,
    },
};
redisClient.on('connect', () => {
    (0, function_1.logMessage)(constant_1.LOG_MESSAGE.REDIS_ON_SUCCESS);
});
redisClient.on('err', (error) => {
    (0, function_1.logMessage)(`${constant_1.LOG_MESSAGE.REDIS_ON_ERROR}, ${error}`);
});

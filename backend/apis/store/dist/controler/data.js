"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
const express_1 = __importDefault(require("express"));
const service_1 = require("../model/service");
const router = (0, express_1.default)();
exports.data = router;
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, service_1.handlePostData)(req.body);
    res.send(result);
}));
router.get('/:type/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { type, id } = req.params;
    const result = yield (0, service_1.handleGetData)(type, id);
    res.send(result);
}));
router.post('/filterData', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { objectSql } = req.body;
    const result = yield (0, service_1.handlePostData)(objectSql);
    res.send(result);
}));

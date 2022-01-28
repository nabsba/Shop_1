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
exports.fileManager = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const repos_1 = require("../model/repos");
const function_1 = require("../model/service/fileSystem/logic/function");
const router = (0, express_1.default)();
exports.fileManager = router;
router.get('/image/product/:type/:sizePic/:colorFolder/:nameProduct/:namePic', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { type, colorFolder, nameProduct, namePic, sizePic } = req.params;
    const pathFile = path_1.default.join(__dirname +
        `../../../../../asset/image/product/${type}/${sizePic}/${colorFolder}/${nameProduct}/`);
    const extension = (0, function_1.getExtensionOfFile)(pathFile, namePic);
    res.sendFile(pathFile + namePic + `.${extension}`);
}));
router.get('/image/product/:type/:sizePic/general/:namePic', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { type, namePic, sizePic } = req.params;
    const pathFile = path_1.default.join(__dirname + `../../../../../asset/image/product/${type}/${sizePic}/general/`);
    const extension = (0, function_1.getExtensionOfFile)(pathFile, namePic);
    res.sendFile(pathFile + namePic + `.${extension}`);
}));
router.get('/numberOfPic/:type/:sizePic/:colorFolder/:nameProduct', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { type, colorFolder, nameProduct, sizePic } = req.params;
    const result = Object.assign({}, repos_1.resultTemplate);
    const fs = require('fs');
    const length = fs.readdirSync(path_1.default.join(__dirname +
        `../../../../../asset/image/product/${type}/${sizePic}/${colorFolder}/${nameProduct}`)).length;
    result.data = { length };
    res.send(result);
}));

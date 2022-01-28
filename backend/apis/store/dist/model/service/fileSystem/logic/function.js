"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExtensionOfFile = void 0;
const fs_1 = __importDefault(require("fs"));
function getExtensionOfFile(rootDir, entry) {
    const files = fs_1.default.readdirSync(rootDir);
    const filename = files.find((file) => {
        return file.includes(entry);
    });
    const extension = filename ? filename.split('.').pop() : null;
    return extension;
}
exports.getExtensionOfFile = getExtensionOfFile;

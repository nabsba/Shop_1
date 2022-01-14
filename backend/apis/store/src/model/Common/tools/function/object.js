"use strict";
exports.__esModule = true;
exports.stringFromKeysObject = exports.generateObjectAsOneStringKeyValue = exports.deletePropretyFromObject = void 0;
var deletePropretyFromObject = function (object, propreties) {
    // eslint-disable-next-line no-param-reassign
    propreties.map(function (proprety) { return delete object[proprety]; });
    return object;
};
exports.deletePropretyFromObject = deletePropretyFromObject;
var generateObjectAsOneStringKeyValue = function (keys, values) {
    var array = [];
    keys.map(function (key, index) {
        array.push(typeof values[index] === 'string' ? "".concat(key, "=") + "".concat(values[index]) : values[index]);
    });
    return array.join(',');
};
exports.generateObjectAsOneStringKeyValue = generateObjectAsOneStringKeyValue;
var stringFromKeysObject = function (object) { return Object.keys(object).toString(); };
exports.stringFromKeysObject = stringFromKeysObject;

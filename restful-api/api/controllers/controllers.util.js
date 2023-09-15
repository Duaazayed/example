"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optsCallback = exports.defaultCallback = void 0;
const defaultCallback = (req, res) => (err, data) => {
    if (err) {
        res.send(err);
    }
    res.json(data);
};
exports.defaultCallback = defaultCallback;
const optsCallback = (req, res) => (options) => (err) => {
    if (err) {
        res.send(err);
    }
    res.json(options);
};
exports.optsCallback = optsCallback;

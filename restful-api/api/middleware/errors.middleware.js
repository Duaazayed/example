"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error500 = exports.error404 = void 0;
const error404 = (req, res, next) => {
    next({ message: 'Not Found', status: 404 });
};
exports.error404 = error404;
/**
 * Handle req that would produce a 500 status code and respons accordingly.
 */
const error500 = (error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
};
exports.error500 = error500;

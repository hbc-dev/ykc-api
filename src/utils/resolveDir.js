const { lstatSync, readdirSync } = require("fs");
const { join, resolve } = require("path");
const APIError = require("./APIError");

/**
 * @typedef ResolvePathOption
 * @prop {boolean} returnContent Return the content of the directory
 */

/**
 * The information of the directory
 * @typedef ReturnPath
 * @prop {string} path The complete path of the directory
 * @prop {Array<string>} content The content of the directory
 */

/**
 * Resolve and give some information about
 * @param {string} path 
 * @param {ResolvePathOption} options
 * @return {ReturnPath}
 */
module.exports = function resolveDir(path, options = {}) {
    if (typeof path !== "string")
        throw new APIError('The path param must be a string');

    path = resolve(path);
    let isFile = lstatSync(path).isFile();
    
    if (isFile) throw new APIError(`The path must be a directory`);

    let {returnContent = false, absolutePath = true} = options;
    return {
        content: returnContent ? readdirSync(path) : null,
        path
    }
}
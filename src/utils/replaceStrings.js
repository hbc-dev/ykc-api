const APIError = require("./APIError")

/**
 * Replace strings in any text
 * @param {string} text 
 * @param {Object<string, string>} replace 
 * @returns {string}
 */
module.exports = function replaceStrings(text, replace) {
    if (typeof text !== 'string')
        throw new APIError(`The text param must be a string`);
    if (replace && (typeof replace !== "object" || Array.isArray(replace)))
        throw new APIError(`The replace param must be a object`);

    for (let placeholder of Object.keys(replace)) {
        let reg = new RegExp(placeholder, 'gm');

        text = text.replace(reg, replace[placeholder]);
    }

    return text;
}
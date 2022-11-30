/**
 * @typedef CheckKeysResponse
 * @prop {boolean} ok
 * @prop {Object<string, any> | string} value
 */

/**
 * Check the keys of an object and return an error if the keys are not equal
 * @param {Object<string, any>} object The object to check
 * @param {Object<string, any>} scheme The scheme to compare with the object
 * @return {CheckKeysResponse}
 */
module.exports = function checkKeys(object, scheme = {}) {
    let schemeKeys = Object.keys(scheme);
    let objectKeys = Object.keys(object);
    let MissingParams = [...schemeKeys];
    let toCompare = [];

    for (let key of objectKeys) {
        if (schemeKeys.includes(key)) {
            toCompare.push(key);
            MissingParams.splice(MissingParams.indexOf(key), 1);
        }
    }

    if (toCompare.length !== schemeKeys.length)
        return {ok: false, value: `Missing parameters: ${MissingParams.join(', ')}`};

    else return {ok: true, value: object};
}
const APIError = require("../utils/APIError");
const TYPES = ['get', 'post', 'put', 'delete']

class Route {
    constructor(options = {}) {
        let {name, route, action = () => {}, type = 'get'} = options;

        if (!name || typeof name !== 'string')
            throw new APIError(`The property name must be a string`);
        if (route && typeof route !== 'string')
            throw new APIError(`The property route must be a string`);
        if (type && typeof type !== 'string' && !TYPES.includes(type))
            throw new APIError(`The property type must be a string. Also, the type could not be exists`);
        if (action && typeof action !== 'function')
            throw new APIError(`The property action must be a function`);
        
        Object.defineProperties(this, {
            name: {
                writable: false,
                enumerable: true,
                value: name
            },
            route: {
                writable: false,
                enumerable: true,
                value: route
            },
            action: {
                writable: false,
                enumerable: true,
                value: action
            },
            type: {
                writable: false,
                enumerable: true,
                value: type
            }
        });
    }
}

module.exports = {Route};
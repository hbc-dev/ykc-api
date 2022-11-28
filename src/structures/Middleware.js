class Middleware {
    constructor(options = {}) {
        let {name, route, action = () => {}} = options;

        if (!name || typeof name !== 'string')
            throw new APIError(`The property name must be a string`);
        if (route && typeof route !== 'string')
            throw new APIError(`The property route must be a string`);
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
            }
        });
    }
}

module.exports = {
    Middleware
}
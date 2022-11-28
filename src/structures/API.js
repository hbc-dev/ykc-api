const handleFiles = require('../utils/handleFiles');
const express = require('express');
const APIError = require('../utils/APIError');

class API {
    constructor({routesPath, middlewarePath, app} = {}) {
        Object.defineProperties(this, {
            routes: {
                writable: false,
                enumerable: true,
                value: routesPath ? handleFiles(routesPath) : new Map()
            },
            middleware: {
                writable: false,
                enumerable: true,
                value: middlewarePath ? handleFiles(middlewarePath) : new Map()
            },
            App: {
                writable: false,
                value: app ?? express()
            }
        });
    }

    // TODO: add path option
    enableRoutes({exclude = []} = {}) {
        if (!Array.isArray(exclude)) throw new APIError(`The exclude property must be an array`);

        for (let {name, route, action, type} of this.routes.values()) {
            if (exclude.includes(name) || exclude.includes(route)) continue;

            this.App[type](route ?? '/'+name, (req, res) => action({request: req, response: res}));
        }

        return this;
    }

    // TODO: add path option
    enableMiddleware({exclude = []} = {}) {
        if (!Array.isArray(exclude)) throw new APIError(`The exclude property must be an array`);
    
        for (let {name, route, action} of this.middleware.values()) {
            if (exclude.includes(name) || exclude.includes(route)) continue;

            this.App.use(route ?? '/'+name, (request, response, next) => action({request, response, next}));
        }

        return this;
    }

    connect(port, callback) {
        this.App.listen(port, callback);
    }
}

module.exports = {
    API
}
const handleFiles = require('../utils/handleFiles');
const express = require('express');
const APIError = require('../utils/APIError');

class API {
    constructor({routesPath, app} = {}) {
        Object.defineProperties(this, {
            routes: {
                writable: false,
                enumerable: true,
                value: routesPath ? handleFiles(routesPath) : new Map()
            },
            App: {
                writable: false,
                value: app ?? express()
            }
        });
    }

    enableRoutes({exclude = []} = {}) {
        if (!Array.isArray(exclude)) throw new APIError(`The exclude property must be an array`);

        for (let {name, route, action, type} of this.routes.values()) {
            if (exclude.includes(name) || exclude.includes(route)) continue;

            this.App[type](route ?? '/'+name, (req, res) => action({request: req, response: res}));
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
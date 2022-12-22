const { randomBytes } = require('crypto');
const APIError = require('../utils/APIError');

class RawAccount {
    constructor({mail, username, language = 'es'}) {
        if (typeof mail !== 'string') throw new APIError('The mail property must be a string');
        if (typeof username !== 'string') throw new APIError('The username property must be a string');
        if (typeof language !== 'string') throw new APIError('The language property must be a string');

        let id = randomBytes(8).toString('hex');
        let createdAt = new Date().getTime().toString();
        let token = Buffer.from(id).toString("base64") +
            Buffer.from(createdAt).toString("base64") +
            randomBytes(16).toString("base64");

        Object.defineProperties(this, {
            mail: {
                writable: false,
                enumerable: true,
                value: mail
            },
            username: {
                writable: false,
                enumerable: true,
                value: username
            },
            language: {
                writable: false,
                enumerable: true,
                value: language
            },
            id: {
                writable: false,
                enumerable: true,
                value: id
            },
            createdAt: {
                writable: false,
                enumerable: true,
                value: createdAt
            },
            token: {
                writable: false,
                enumerable: true,
                value: token
            }
        });
    }
}

module.exports = {RawAccount};
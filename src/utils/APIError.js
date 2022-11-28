module.exports = class APIError extends Error {
    constructor(...args) {
        super(args);

        this.name = '[API Error]';
    }
}
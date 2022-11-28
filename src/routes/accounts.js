const { Route } = require("../structures/Route");

module.exports = new Route({
    name: 'accounts',
    route: '/oauth/accounts',
    action: ({response}) => {
        response.jsonp({message: 'Hello world!'});
    }
});
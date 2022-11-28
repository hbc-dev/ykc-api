const {Route} = require('../structures/Route');
const json = require("../data/json/general.json");

module.exports = new Route({
    name: 'oauth',
    route: '/oauth',
    type: 'get',
    action: ({response, request}) => {
        let {query} = request;

        if (query?.username !== process.env.NAME || query?.password !== process.env.PASSWORD)
            return response.status(502).jsonp({message: 'The name or the password are wrong'});

        else response.jsonp(json);
    }
});
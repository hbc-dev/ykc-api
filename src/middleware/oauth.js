const {Middleware} = require('../structures/Middleware');
const json = require("../data/json/general.json");

module.exports = new Middleware({
    name: 'oauth',
    route: '/oauth',
    action: ({response, request, next}) => {
        let {query} = request;

        if (query?.password !== process.env.PASSWORD)
            return response.status(502).jsonp({message: 'The name or the password are wrong'});

        else next();
    }
});
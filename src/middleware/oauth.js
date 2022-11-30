const {Middleware} = require('../structures/Middleware');
const json = require("../data/json/general.json");

module.exports = new Middleware({
    name: 'oauth',
    route: '/oauth',
    action: ({response, request, next}) => {
        let {body} = request;

        if (body?.token !== process.env.TOKEN)
            return response.status(401).jsonp({message: 'This token is invalid'});

        else next();
    }
});
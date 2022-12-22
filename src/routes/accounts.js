const { Route } = require("../structures/Route");
const manager = require('../data/manager');

module.exports = new Route({
    name: 'accounts',
    route: '/oauth/accounts/:id?',
    type: 'get',
    action: ({response, request}) => {
        manager.src = 'accounts';
        let {params, query} = request;

        if (params.id) {
            let getter = manager.get(
                [
                    "Accounts",
                    {
                        id: params.id
                    }
                ]
            )

            return response.status(200).json(getter);
        } else {
            let getter = manager.all(["Accounts"]);
            let {limit} = query;

            if (!isNaN(parseInt(limit)))
                getter.length = Math.min(getter.length, parseInt(limit));

            return response.status(200).json(getter)
        }
    }
});
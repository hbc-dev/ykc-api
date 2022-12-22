const {Route} = require('../structures/Route');
const manager = require('../data/manager');
const {RawAccount} = require('../structures/RawAccount');
const Notify = require('../utils/Notify');
const checkKeys = require("../utils/checkKeys");
const scheme = require('../data/json/schemes.json').login;

module.exports = new Route({
    name: 'login',
    route: '/oauth/login',
    action: ({request, response, cache}) => {
        let { body } = request;
        let checkedBody = checkKeys(body, scheme);

        if (!checkedBody.ok) return response.status(502).json({message: checkedBody.value});

        manager.src = 'accounts'
        let CachedLogins = cache.get('logins');
        let getter;

        if (body?.userToken) getter = manager.get([
            "Accounts",
            {
                token: body.userToken
            }
        ]);

        else if (body?.mail && body?.password) getter = manager.get([
            "Accounts",
            {
                mail: body.mail,
                password: body.password
            }
        ]);

        if (!getter) return response.status(400).send({message: `The account doesn't exists`});
        let logedIn = CachedLogins.has(getter.id);

        if (logedIn) return response.status(401).send({message: `${getter.username} is already logged in`});
        else {
            CachedLogins.set(getter.id, new RawAccount(getter));
            
            let configuration = manager.get([
                "Configuration",
                {
                    id: getter.id,
                }
            ]);

            // Notify({
            //     mail: getter.mail,
            //     context: 'LOGIN_NOTIFICATION',
            //     enabled: configuration.NOTIFICATIONS,
            //     subject: 'YKC - Nuevo inicio de sesión',
            //     replace: {
            //         "{username}" : getter.username,
            //         "{DiscordUserId}" : body.DiscordUserId,
            //         "{DiscordUsername}" : body.DiscordUsername
            //     }
            // });

            return response.status(200).send(new RawAccount(getter));
        }
    }
});
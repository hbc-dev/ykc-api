const { Route } = require("../structures/Route");
const manager = require('../data/manager');
const sendMail = require('../utils/sendMail');
const checkKeys = require('../utils/checkKeys');
const { RawAccount } = require('../structures/RawAccount');
const Notify = require("../utils/Notify");
const scheme = require('../data/json/schemes.json').createAccount;

module.exports = new Route({
    name: 'createAccount',
    route: '/oauth/accounts/create',
    type: 'post',
    action: ({response, request, cache}) => {
        manager.src = "accounts";

        let {body, query} = request;
        let inCache = cache.get(body.mail);

        if (inCache && query.code) {
            let checkedQuery = checkKeys(query, {code: 'xxx'});

            if (!checkedQuery.ok) return response.status(502).json({message: checkedQuery.value});
            if (query.code !== inCache.code) return response.status(400).json({message: `The code isn't equal`, code: inCache.code});

            let account = new RawAccount(inCache);
            let configuration = {id: account.id, ...body.configuration ?? {}}

            manager.insert(["Accounts", {password: inCache.password, ...account}]);
            manager.insert(["Configuration", configuration]);
            cache.delete(body.mail);
            cache.get('logins').set(account.id, account);

            return response.status(201).json(account);
        }
        
        let checkedBody = checkKeys(body, scheme);
        if (!checkedBody.ok) return response.status(502).json({message: checkedBody.value});
        if (inCache) return response.status(202).json({message: 'This mail is in the queue already'})

        let existsAccount = manager.get(
            [
                "Accounts",
                {
                    mail: body.mail
                }
            ]
        );
        
        if (existsAccount) return response.status(409).json({message: 'The account already exists'});
        else {
            let {username, password, language, mail} = body;
            let code = Math.floor(Math.random() * (6000 - 1000 + 1) + 1000).toString();

            cache.set(mail, {
                username, password, language, mail, code
            });

            Notify({
                mail,
                context: 'VERIFICATION_CODE',
                enabled: true,
                subject: `YKC - Código de verificación`,
                replace: {
                    "{username}" : username,
                    "{code}" : code
                }
            });

            response.status(200).send({code});
            setTimeout(() => {
                if (cache.has(mail)) cache.delete(mail);
            }, 180000);
        }
    }
});
const sendMail = require("./sendMail");
const APIError = require('./APIError');
const replaceStrings = require('./replaceStrings');

/**
 * @typedef {"LOGIN_NOTIFICATION" | "VERIFICATION_CODE"} NotifyContext
 */

/**
 * @typedef NotifyOptions
 * @prop {string} mail The mail to send this notification
 * @prop {NotifyContext} context The context to send the information
 * @prop {boolean} enabled The type of notification
 * @prop {string} subject The subject of the notification
 * @prop {Object<string, string>} replace The strings to replace
 */

/**
 * Notify users
 * @param {NotifyOptions & Object<string, any>} options The mail to send the notification
 */
function Notify(options = {}) {
    let {mail, context, enabled, subject = 'YKC', replace} = options;

    if (!mail && typeof mail !== 'string')
        throw new APIError(`The mail property must be a string`);
    if (typeof enabled !== 'boolean')
        throw new APIError(`The enabled property must be a boolean`);
    if (typeof context !== 'string')
        throw new APIError(`The context property must be a string`);
    if (subject && typeof subject !== 'string')
        throw new APIError(`The subject property must be a string`);
    if (!enabled) return false

    try {
        let Notification = require(`../data/html/${context}.js`);
        if (replace) Notification = replaceStrings(Notification, replace);

        sendMail({
            subject,
            to: mail,
            html: Notification
        });
    } catch(e) {return false}; 
}

module.exports = Notify;
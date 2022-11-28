const { response } = require('express');
const {Route} = require('../structures/Route');

module.exports = new Route({
    name: 'main',
    route: '/',
    action: ({response}) => {
        response.redirect('https://discord.gg/yokaiworld')
    }
});
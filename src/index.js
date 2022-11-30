require('dotenv').config({path: '../.env'});

const express = require('express');
const {API} = require('./structures/API');
const ykc_api = new API({
    routesPath: './routes',
    middlewarePath: './middleware',
    enableBody: true
});

ykc_api
.enableMiddleware()
.enableRoutes()
.connect(3000, () => {
    console.log(`Go here: http://localhost:3000/`);
});
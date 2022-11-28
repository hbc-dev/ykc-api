require('dotenv').config({path: '../.env'});

const resolveDir = require('./utils/resolveDir');

const {API} = require('./structures/API');
const ykc_api = new API({
    routesPath: './routes'
});

ykc_api.enableRoutes().connect(0, () => {
    console.log(`Go here: http://localhost:xxx/`);
});
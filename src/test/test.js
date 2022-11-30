require('dotenv').config({path: '../../.env'});

const axios = require('axios');

axios.get("http://localhost:3000/oauth/accounts/6a2374e4b8945c48", {
    data: {token: 'ykc'}
})
.then(async ({data}) => console.log(data))
.catch(error => console.log(error));
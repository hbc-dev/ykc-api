require('dotenv').config({path: '../../.env'});

const axios = require('axios');

axios.get("http://localhost:3000/oauth/login", {
    data: {
        token: 'ykc',
        mail: 'hugobanos@neutrones.es',
        password: 'ykc',
        DiscordUsername: "167#0353",
        DiscordUserId: "702481362904678521"
    }
})
.then(async ({data}) => console.log(data))
.catch(error => console.log(error));
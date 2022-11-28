const { resolve } = require('path');
const {ManagerConfig} = require('sqliteplus')

const GameConfiguration = new ManagerConfig({
    defaultFileStorage: resolve(__dirname, 'database'),
});

GameConfiguration.addDatabase('accounts', {
    createIfNotExists: true,
    models: [
        [
            "Accounts",
            {
                username: null,
                password: null,
                mail: null,
                createdAt: null,
                token: null,
                id: null,
                language: 'es',
                games: {
                    game_1: null,
                    game_2: null,
                    game_3: null
                }
            },
            {
                createIfNotExists: true
            }
        ],
        [
            "Configuration",
            {
                id: null,
                NOTICES: false,
                NOTIFICATIONS: false
            },
            {
                createIfNotExists: true
            }
        ]
    ]
});

GameConfiguration.addDatabase('games', {
    createIfNotExists: true,
    models: [
        [
            "Inventory",
            {
                gameId: null,
                objectId: null,
                count: 0,
                achievedAt: null
            },
            {
                createIfNotExists: true
            }
        ]
    ]
});

module.exports = GameConfiguration
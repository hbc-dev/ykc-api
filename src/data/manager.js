const { resolve } = require("path");
const { DatabaseManager } = require("sqliteplus");

const Manager = new DatabaseManager({
    file: true,
    configPath: resolve(__dirname, "./configuration.js")
});

module.exports = Manager;
const { readdirSync } = require('fs');
const { resolve } = require('path');
const resolveDir = require('./resolveDir');

/**
 * Collect all content of the files ends with .js in a small cache
 * @param {string} path 
 * @return {Map<string>}
 */
module.exports = function handleFiles(path) {
    path = resolveDir(path).path;

    let files = readdirSync(path).filter(file => file.endsWith('.js'));
    
    let cache = new Map();
    for (let file of files) {
        let name = file.split(/\.js$/gm)[0];
        let pathOfFile = resolve(path, file);

        cache.set(name, require(pathOfFile))
    }

    return cache;
}
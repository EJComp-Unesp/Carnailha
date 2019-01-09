let express = require(`express`);
const config = require(`./config`);
let router = express.Router();
let authenticate = require(`../controller/oauth2`).authenticate;
module.exports = (app) => {
    var normalizedPath = require(`path`).join(__dirname, `../routes/${config.APP.version}`);
    require(`fs`).readdirSync(normalizedPath).forEach(function(file) {
        require(`../routes/${config.APP.version}/${file}`)(router, authenticate);
    });

    app.use(`/api/${config.APP.version}`, router);
}
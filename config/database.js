let mongoose = require('mongoose');
const config = require('./config');
const { DB: { host, port, name } } = config;
mongoose.connect(
    `mongodb://${host}:${port}/${name}`,
    {useNewUrlParser: true}
);

module.exports = mongoose;

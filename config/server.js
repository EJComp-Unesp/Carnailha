const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const config = require('./config');
let app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors({origin: '*'}));
//Serves a static directory to get images
app.use('/uploads', express.static(config.UPLOAD_FOLDER));

app.listen(config.APP.port, function(err){
    if(err) console.log(err);
    console.log(`Listening on ${config.APP.port}!`);
});

module.exports = app;
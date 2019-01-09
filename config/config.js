//Diferenciet test and dev envs

const config = {
    APP: {
        port: process.env.PORT || 5000,
        version: 'v1'
    },
    DB: {
        host: 'carnailha_admin:carna123@ds151943.mlab.com',
        port: 51943,
        name: 'carnailha'
    },
    MESSAGE_FILE: 'messages_ptBR.json',
    UPLOAD_FOLDER: './uploads'
};

module.exports = config;

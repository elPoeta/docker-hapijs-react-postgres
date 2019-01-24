
const Path = require('path');
const ConfigServer = require('./configServer');

const Server = new ConfigServer({
    port: parseInt(process.env.PORT) || 5000,
    host: process.env.HOST || '0.0.0.0',
    routes: {
        files: {
            relativeTo: Path.join(__dirname, '../public')
        },
        cors: { origin: ['http://localhost:4000'] }
    },
    app: {}
});

Server.init();
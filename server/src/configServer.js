const Hapi = require('hapi');

class ConfigServer {
    constructor(args) {
        this.server = Hapi.server(args);
    }

    async init() {
        try {
            await this.server.register([
                /*    {
                        plugin: require('inert')
                    }, */
                {
                    plugin: require('./routes/api')
                }
            ]);
            //  await this.routing();
            await this.server.start();
            console.log(`Server Hapi running on: ${this.server.info.uri}`);
        } catch (err) {
            console.error(`Hapi error starting server ${err.message}`);
            process.exit(1);
        }
    }
    /*
        async routing() {
            this.server.route({
                method: 'GET',
                path: '/{param*}',
                handler: {
                    directory: {
                        path: '../../public',
                        redirectToSlash: true,
                        index: true,
                    }
                }
            }); 
        } */
}
module.exports = ConfigServer;
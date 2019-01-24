const peopleDb = require('../db/peopleDb');
const Joi = require('joi');
module.exports = {
    name: "ApiPlugin",
    register: async (server, options) => {

        server.route([
            {
                method: "GET",
                path: "/api/peoples",
                handler: async (request, h) => {

                    const peoples = await peopleDb.findAllPeople();
                    if (peoples) {
                        return { peoples };
                    }
                    return { peoples: [] };
                }
            },
            {
                method: "GET",
                path: "/api/people/{id}",
                handler: async (request, h) => {
                    const id = request.params.id;
                    if (!isNaN(id)) {
                        const people = await peopleDb.findPeopleById(id);
                        console.log(people);
                        if (people) {
                            return { people };
                        }
                        return { people: {} };
                    }
                    return h.response('Bad Request').code(400);
                }
            },
            {
                method: "POST",
                path: "/api/people/insert",
                config: {
                    handler: async (request, h) => {
                        //  console.log(request.payload);
                        try {

                            const newPeople = await peopleDb.insertPeople(request.payload);
                            return h.response({ msg: 'Created', people: newPeople }).code(201);

                        } catch (error) {
                            console.log('post ::  ', error);
                        }
                        return h.response('Not Created').code(400);
                    },
                    validate: {
                        payload: {
                            firstName: Joi.string().required(),
                            email: Joi.string().email({ minDomainAtoms: 2 }).required()
                        }
                    }
                }

            },
            {
                method: "PUT",
                path: "/api/people/update",
                config: {
                    handler: async (request, h) => {
                        console.log(request.payload);
                        try {

                            const updPeople = await peopleDb.updatePeople(request.payload);
                            return h.response({ msg: 'Modified', people: updPeople }).code(200);

                        } catch (error) {
                            console.log('put ::  ', error);
                        }
                        return h.response('Not Updated').code(400);

                    },
                    validate: {
                        payload: {
                            id: Joi.number().integer().required(),
                            firstName: Joi.string().required(),
                            email: Joi.string().email({ minDomainAtoms: 2 }).required()
                        }
                    }
                }
            }
        ]);
    }
}


/*
module.exports = {
    name: "ApiPlugin",
    register: async (server, options) => {

        server.route([
            {
                method: "GET",
                path: "/api/test",
                handler: async (request, h) => {

                    return { test: [{ id: 1, name: "leonardo" }, { id: 2, name: "elpoeta" }] }
                }
            }
        ]);
    }
}

*/
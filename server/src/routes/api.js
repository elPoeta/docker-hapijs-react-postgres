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
                        try {

                            const newPeople = await peopleDb.insertPeople(request.payload);

                            return h.response({ msg: 'Created', people: newPeople }).code(201);

                        } catch (error) {
                            console.log('post ::  ', error);
                        }
                        return h.response({ msg: 'Not Created' }).code(400);
                    },
                    validate: {
                        payload: {
                            first_name: Joi.string().required(),
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
                            first_name: Joi.string().required(),
                            email: Joi.string().email({ minDomainAtoms: 2 }).required()
                        }
                    }
                }
            },
            {
                method: "DELETE",
                path: "/api/people/delete/{id}",
                handler: async (request, h) => {

                    try {
                        if (!isNaN(request.params.id)) {
                            const delPeople = await peopleDb.deletePeople(request.params.id);
                            const people = await delPeople;

                            return h.response({ msg: 'Deleted', people }).code(202);
                        }
                        return h.response('Not Deleted').code(400);
                    } catch (error) {
                        console.log('Delete :: ', error);
                    }

                    return h.response('Not Deleted').code(400);
                },

            }

        ]);
    }
}

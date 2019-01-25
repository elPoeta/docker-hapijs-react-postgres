const pool = require('./connection');

class PeopleDb {

    static async findAllPeople() {
        let client = await pool.connect();

        try {
            const people = await client.query('SELECT * FROM people', []);
            return people.rows;
        } catch (error) {
            return new Error('error');
        }
        finally {

            await client.release();
        }
    }

    static async findPeopleById(id) {
        let client = await pool.connect();
        try {

            const people = await client.query('SELECT * FROM people WHERE id = $1', [id]);

            return people.rows[0];
        }
        catch (error) {
            return new Error('error');
        }
        finally {

            await client.release();
        }
    }

    static async insertPeople(newPeople) {
        let client = await pool.connect();
        try {

            const people = await client.query('INSERT INTO people (first_name, email) VALUES($1,$2) RETURNING *', [newPeople.first_name, newPeople.email]);

            return people.rows[0];

        }
        catch (error) {

            return new Error('error');
        }
        finally {

            await client.release();
        }
    }

    static async updatePeople(updPeople) {
        let client = await pool.connect();
        try {

            const people = await client.query('UPDATE people SET first_name=($1), email=($2) WHERE id=($3) RETURNING *', [updPeople.first_name, updPeople.email, updPeople.id]);

            return people.rows[0];

        }
        catch (error) {
            return new Error('error');
        }
        finally {

            await client.release();
        }
    }
}

module.exports = PeopleDb;

import React, { Component } from 'react'
import AddPeople from './AddPeople';

class Peoples extends Component {

    state = {
        peoples: []
    }
    async componentDidMount() {
        const response = await fetch('http://0.0.0.0:5000/api/peoples');
        const data = await response.json();
        const peoples = data.peoples;
        this.setState({ peoples })
    }
    addPeople = async people => {
        try {
            const response = await fetch('http://0.0.0.0:5000/api/people/insert',
                {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    },
                    body: JSON.stringify(people),

                });
            if (await response.status === 201) {
                const data = await response.json();
                const peoples = [...this.state.peoples, data.people];
                this.setState({ peoples });
            }

        } catch (error) {
            console.log('error', error);
        }
    }
    render() {
        const peoples = this.state.peoples.map(people => {
            return (
                <div key={people.id}>
                    <span>Name: {people.first_name}  ||  e-mail: {people.email}</span>
                </div>
            )
        });
        return (
            <div className="container">
                <AddPeople addPeople={this.addPeople} />
                <br />
                <hr />
                <br />
                {peoples}
            </div>
        )
    }
}

export default Peoples;
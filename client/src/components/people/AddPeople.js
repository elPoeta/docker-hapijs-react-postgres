import React, { Component } from 'react'

class AddPeople extends Component {


    state = {
        first_name: '',
        email: ''
    }

    handleAddPeopleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    }

    handleAddPeopleSubmit = e => {
        e.preventDefault();
        this.props.addPeople(this.state);
        this.setState(
            {
                first_name: '',
                email: ''
            });
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleAddPeopleSubmit}>
                    <div className="input-field col s2 ">
                        <label htmlFor="firstName">Name</label>
                        <br />
                        <input type="text" name="firstName" id="first_name" onChange={this.handleAddPeopleChange} value={this.state.first_name} />
                    </div>
                    <div className="input-field col s2 ">
                        <label htmlFor="email">e-mail</label>
                        <br />
                        <input type="email" name="email" id="email" onChange={this.handleAddPeopleChange} value={this.state.email} />
                    </div>
                    <button className="waves-effect waves-light btn">Add</button>
                </form>
            </div>
        )
    }
}

export default AddPeople;

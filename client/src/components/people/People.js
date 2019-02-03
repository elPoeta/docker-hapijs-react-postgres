import React, { Component } from 'react'
import AddPeople from './AddPeople';
import { connect } from 'react-redux';
import { getPeoples, createPeople, deletePeople, editPeople } from '../../reducers/actions/actions';
import Spinner from '../spinner/spinner';
import './People.css';

class Peoples extends Component {
    state = {
        edit: false,
        id: "",
        first_name: "",
        email: ""
    }
    componentDidMount() {

        this.props.getPeoples();
    }
    addPeople = people => {

        this.props.createPeople(people);
    }

    handleDeletePeople = id => {

        this.props.deletePeople(id);
    }
    handleClickEdit = people => {

        this.setState(prevSate => {
            return {
                edit: !prevSate.edit,
                id: people.id,
                first_name: people.first_name,
                email: people.email
            }
        })
    }
    handleEditPeopleChange = e => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleOnClickUpdate = e => {
        e.preventDefault();

        const people = {
            id: this.state.id,
            first_name: this.state.first_name,
            email: this.state.email
        }

        this.setState(prevSate => {
            return {
                edit: !prevSate.edit,
                id: "",
                first_name: "",
                email: ""
            }
        })
        this.props.editPeople(people);
    }
    render() {

        if (this.props.error) {
            return <p>Sorry! There was an error loading the peoples</p>;
        }

        if (this.props.isFetching) {
            //return <p>Loading…</p>;
            return <Spinner />
        }
        const peoples = this.props.peoples.map(people => {
            return (

                <ul className="collection container" key={people.id}>
                    <li className="collection-item avatar">
                        <i className="material-icons circle" onClick={() => this.handleClickEdit(people)}>edit</i>
                        {!this.state.edit || people.id !== this.state.id
                            ? <div>
                                <span className="title">{people.first_name}</span>
                                <p>{people.email}</p>
                            </div>
                            : <div>
                                <input type="text" name="first_name" id="first_name" onChange={this.handleEditPeopleChange} value={this.state.first_name} required />

                                <br />
                                <input type="email" name="email" id="email" onChange={this.handleEditPeopleChange} value={this.state.email} required />
                                <button className="waves-effect waves-light btn" onClick={this.handleOnClickUpdate}>Update</button>

                            </div>


                        }

                        <span href="#" className="secondary-content" onClick={() => this.handleDeletePeople(people.id)}><i className="material-icons">delete_forever</i></span>
                    </li>
                </ul>



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

const mapStateToProps = state => {
    return {
        peoples: state.peoples,
        isFetching: state.isFetching,
        error: state.error
    };
};


export default connect(mapStateToProps, { getPeoples, createPeople, deletePeople, editPeople })(Peoples);



import React, { Component } from 'react'
import AddPeople from './AddPeople';
import { connect } from 'react-redux';
import { getPeoples, createPeople, deletePeople } from '../../reducers/actions/actions';
import Spinner from '../spinner/spinner';
import './People.css';

class Peoples extends Component {

    componentDidMount() {

        this.props.getPeoples();
    }
    addPeople = people => {

        this.props.createPeople(people);
    }

    handleDeletePeople = id => {

        this.props.deletePeople(id);
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
                        <i className="material-icons circle">edit</i>
                        <span className="title">{people.first_name}</span>
                        <p>{people.email}</p>
                        <span href="#" className="secondary-content" onClick={() => this.handleDeletePeople(people.id)}><i className="material-icons">delete_forever</i></span>
                    </li>
                </ul>



            )
        });
        return (
            <div className="container">
                <AddPeople
                    addPeople={this.addPeople}
                />
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


export default connect(mapStateToProps, { getPeoples, createPeople, deletePeople })(Peoples);



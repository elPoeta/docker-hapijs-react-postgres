import React, { Component } from 'react'
import AddPeople from './AddPeople';
import { connect } from 'react-redux';
import { peoplesFetchData } from '../../reducers/actions/FetchPeoples'

class Peoples extends Component {

    componentDidMount() {
        this.props.fetchPeoples('http://0.0.0.0:5000/api/peoples');
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the peoples</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        const peoples = this.props.peoples.map(people => {
            return (

                <ul className="collection container" key={people.id}>
                    <li className="collection-item avatar">
                        <i className="material-icons circle">edit</i>
                        <span className="title">{people.first_name}</span>
                        <p>{people.email}</p>
                        <span href="#" className="secondary-content"><i className="material-icons">delete_forever</i></span>
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


const mapStateToProps = (state) => {
    return {
        peoples: state.peoples,
        hasErrored: state.peoplesHasErrored,
        isLoading: state.peoplesIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPeoples: url => dispatch(peoplesFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Peoples);
import * as types from '../constants/types';

export const createPeopleHasErrored = bool => {
    return {
        type: types.CREATE_PEOPLE_HAS_ERRORED,
        hasErrored: bool
    };
}

export const createPeople = people => {
    console.log('create:: ', people);
    return {
        type: types.CREATE_PEOPLE,
        people
    };
}

export const createPeopleFetchData = people => dispatch => {
    fetch('http://0.0.0.0:5000/api/people/insert',
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(people),

        })
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            return response;
        })
        .then(response => response.json())
        .then(people => {
            console.log('dispatch people :: ', people);
            return dispatch(createPeople(people.people))
        })
        .catch(() => dispatch(createPeopleHasErrored(true)));
};

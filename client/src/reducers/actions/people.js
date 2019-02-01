import * as types from '../constants/types';
console.log(types)
const API_URL_BASE = "http://0.0.0.0:5000/api";

export const isLoading = bool => {
    return {
        type: types.IS_LOADING,
        isLoading: bool
    };
}
export const hasError = bool => {
    return {
        type: types.HAS_ERROR,
        hasError: bool
    };
}

export const getPeoplesFetch = (txt) => dispatch => {
    console.log('init disptcch', txt)
    dispatch(isLoading(true));

    fetch(`${API_URL_BASE}/peoples`)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            dispatch(isLoading(false));
            console.log('response', response);
            return response;
        })
        .then(response => response.json())
        .then(data => {
            console.log('data :: ', data)
            dispatch(getPeoplesSuccess(data.peoples))
        })
        .catch(() => dispatch(hasError(true)))


}


export const getPeoplesSuccess = peoples => {
    return {
        type: types.GET_PEOPLES_SUCCESS,
        peoples
    };
}

export const createPeople = people => dispatch => {

    fetch(`${API_URL_BASE}/peoples/insert`,
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
        .then(data => {
            dispatch(createPeopleSuccess(data.people));
            //history.push("/");
        })
        .catch(() => dispatch(hasError(true)))
}

export const createPeopleSuccess = people => {
    return {
        type: "CREATE_PEOPLE_SUCCESS",
        people
    };
}

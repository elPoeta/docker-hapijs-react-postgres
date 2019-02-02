import * as types from '../constants/types';

const API_URL_BASE = "http://0.0.0.0:5000/api";

export const getPeoples = () => dispatch => {

  dispatch({ type: types.IS_LOADING });
  fetch(`${API_URL_BASE}/peoples`)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      console.log('response', response);
      return response;
    })
    .then(response => response.json())
    .then(data => {
      console.log('data :: ', data)
      dispatch({ type: types.GET_PEOPLES_SUCCESS, payload: data.peoples });
    })
    .catch(error => dispatch({ type: types.HAS_ERROR, payload: error }));
}

export const createPeople = people => dispatch => {

  dispatch({ type: types.IS_LOADING });
  fetch(`${API_URL_BASE}/people/insert`,
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
      console.log('response', response);
      return response;
    })
    .then(response => response.json())
    .then(data => {
      console.log('data :: ', data)
      dispatch({ type: types.CREATE_PEOPLE_SUCCESS, payload: data.people });
    })
    .catch(error => dispatch({ type: types.HAS_ERROR, payload: error }));
}


import * as types from '../constants/types';
/*
export const IS_FETCHING = 'IS_FETCHING';
export const DOGS_FETCHED = 'DOGS_FETCHED';
export const ERROR_FETCHING_DOGS = 'ERROR_FETCHING_DOGS';
*/
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

/*
export const getPeoples = () => {


  const dogs = axios.get('https://dog.ceo/api/breeds/list/all');
  return dispatch => {
    dispatch({ type: types.IS_LOADING });
    dogs
      .then(({ data }) => {
        dispatch({ type: types.GET_PEOPLES_SUCCESS, payload: data.message });
      })
      .catch(error => {
        dispatch({ type: types.HAS_ERROR, payload: error });
      });
  };
};
*/


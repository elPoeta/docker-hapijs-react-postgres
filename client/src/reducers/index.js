import { combineReducers } from "redux";
import peopleReducer from "./peopleReducer";


export default combineReducers({
    peopleReducer
});




/*
import { combineReducers } from 'redux';
import { peoples, peoplesHasErrored, peoplesIsLoading } from './FetchPeoplesReducer';
import { createPeople, createPeopleHasErrored } from './CreatePeopleReducer';

export default combineReducers({
    peoples,
    peoplesHasErrored,
    peoplesIsLoading,
    createPeople,
    createPeopleHasErrored
});
*/
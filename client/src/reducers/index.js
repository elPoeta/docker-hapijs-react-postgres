import { combineReducers } from 'redux';
import { peoples, peoplesHasErrored, peoplesIsLoading } from './FetchPeoplesReducer';

export default combineReducers({
    peoples,
    peoplesHasErrored,
    peoplesIsLoading
});
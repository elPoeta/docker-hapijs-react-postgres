import { combineReducers } from 'redux';
import { peopleReducer } from './reducer';

const RootReducer = combineReducers({
    peoples: peopleReducer,
})

export default RootReducer;
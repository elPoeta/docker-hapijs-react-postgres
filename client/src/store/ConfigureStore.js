import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const initialState = {
    peoples: []
}

const configureStore = () => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}

export default configureStore;
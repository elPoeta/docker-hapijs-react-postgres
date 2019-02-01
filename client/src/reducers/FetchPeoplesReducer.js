import * as types from './constants/types';

export const peoplesHasErrored = (state = false, action) => {
    switch (action.type) {
        case types.PEOPLES_HAS_ERRORED:
            return action.hasErrored;

        default:
            return state;
    }
}

export const peoplesIsLoading = (state = false, action) => {
    switch (action.type) {
        case types.PEOPLES_IS_LOADING:
            return action.isLoading;

        default:
            return state;
    }
}

export const peoples = (state = [], action) => {
    switch (action.type) {
        case types.FETCH_PEOPLES:
            return action.peoples;

        default:
            return state;
    }
}
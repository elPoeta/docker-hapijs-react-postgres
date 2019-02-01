import * as types from '../constants/types';

export const peoplesHasErrored = bool => {
    return {
        type: types.PEOPLES_HAS_ERRORED,
        hasErrored: bool
    };
}

export const peoplesIsLoading = bool => {
    return {
        type: types.PEOPLES_IS_LOADING,
        isLoading: bool
    };
}

export const fetchPeoples = peoples => {
    return {
        type: types.FETCH_PEOPLES,
        peoples
    };
}

export const peoplesFetchData = url => dispatch => {
    dispatch(peoplesIsLoading(true));

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            dispatch(peoplesIsLoading(false));

            return response;
        })
        .then(response => response.json())
        .then(peoples => dispatch(fetchPeoples(peoples.peoples)))
        .catch(() => dispatch(peoplesHasErrored(true)));
};

import * as types from './constants/types';

const initialState = {
    peoples: [],
    people: {},
    isLoading: false,
    hasError: false
};

const fetch = (state = initialState, action) => {
    switch (action.type) {

        case types.GET_PEOPLES_SUCCESS: {
            console.log('action :: ', action)
            return { peoples: action.peoples };
        }


        case types.CREATE_PEOPLE_SUCCESS:
            return {
                ...state,
                ...action.people
            };
        /*
         case types.EDIT_PEOPLE_SUCCESS:
             return {
                 ...state,
                 ...action.people
             };
     
         case types.DELETE_PEOPLE_SUCCESS:
             return state;
      */
        default: {
            console.log('default ', action)
            return state;
        }

    }
}

export default fetch;
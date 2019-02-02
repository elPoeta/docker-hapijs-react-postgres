import * as types from './constants/types';

const initialState = {
    peoples: [],
    isFetching: false,
    success: false,
    error: null
};

export const rootReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case types.GET_PEOPLES_SUCCESS:
            console.log('peoples :: ', action.payload);
            return {
                ...state,
                success: true,
                isFetching: false,
                peoples: action.payload
            };
        case types.CREATE_PEOPLE_SUCCESS:
            console.log('peoples :: ', action.payload);
            return {
                ...state,
                success: true,
                isFetching: false,
                peoples: [...state.peoples, action.payload]
            };
        case types.DELETE_PEOPLE_SUCCESS:
            return {
                ...state,
                success: true
            }
        case types.IS_FETCHING:
            return { ...state, isFetching: true };
        case types.HAS_ERROR:
            return { ...state, isFetching: false, error: action.payload };
        default:
            return state;
    }
};
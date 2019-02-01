import * as types from './constants/types';

const initialState = {
    peoples: [],
    isLoading: false,
    success: false,
    error: null
};

export const rootReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case types.IS_LOADING:
            return { ...state, isLoading: true };
        case types.GET_PEOPLES_SUCCESS:
            console.log('peoples :: ', action.payload);
            return {
                ...state,
                success: true,
                isLoading: false,
                peoples: action.payload
            };
        case types.HAS_ERROR:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state;
    }
};
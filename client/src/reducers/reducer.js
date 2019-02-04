import * as types from './constants/types';

const initialState = {
    peoples: [],
    isFetching: false,
    success: false,
    error: null
};

export const peopleReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case types.GET_PEOPLES_SUCCESS:

            return {
                ...state,
                success: true,
                isFetching: false,
                peoples: action.payload
            };
        case types.CREATE_PEOPLE_SUCCESS:

            return {
                ...state,
                success: true,
                isFetching: false,
                peoples: [...state.peoples, action.payload]
            };
        case types.EDIT_PEOPLE_SUCCESS:
            {
                const peopleIndex = state.peoples.findIndex(p => p.id === action.payload.id);
                const peoples = [...state.peoples];
                peoples[peopleIndex] = action.payload;
                return {
                    ...state,
                    success: true,
                    isFetching: false,
                    peoples: peoples
                };
            }

        case types.DELETE_PEOPLE_SUCCESS:
            return {
                ...state,
                success: true,
                isFetching: false,
                peoples: [...state.peoples.filter(p => p.id !== action.payload)]

            }
        case types.IS_FETCHING:
            return { ...state, isFetching: true };
        case types.HAS_ERROR:
            return { ...state, isFetching: false, error: action.payload };
        default:
            return state;
    }
};
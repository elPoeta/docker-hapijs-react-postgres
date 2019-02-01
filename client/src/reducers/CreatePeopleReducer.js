import * as types from './constants/types';

export const createPeopleHasErrored = (state = false, action) => {
    switch (action.type) {
        case types.CREATE_PEOPLE_HAS_ERRORED:
            return action.createPeopleHasErrored;

        default:
            return state;
    }
}

export const createPeople = (state = {}, action) => {
    switch (action.type) {
        case types.CREATE_PEOPLE: {
            console.log('state :: ', state);
            const peoples = { ...state, peoples: [...state.peoples, action.createPeople] }
            console.log('new state :: ', peoples);
            return { ...state, peoples: [...state.peoples, action.createPeople] };
        }


        default:
            return state;
    }
}
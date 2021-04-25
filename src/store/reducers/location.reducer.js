import { LocationActions } from "../types/location.types";

const INITIAL_STATE = {
    location: {}
}

const locationReducer = (state = INITIAL_STATE, action) => {

    switch(action.type){
        case LocationActions.GET_USER_LOCATION_SUCCESS:
            return{
                ...state,
                location: action.payload
            }
        default:
            return state;
    }
};

export default locationReducer;
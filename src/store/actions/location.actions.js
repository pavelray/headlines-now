import { LocationActions } from "../types/location.types";

/**
 * Get User Location from IP Address
 * This method is used to find the User Location
 */
export const getUserLocation = () => ({
    type: LocationActions.GET_USER_LOCATION
});

export const getUserLocationSuccess = (location) => ({
    type: LocationActions.GET_USER_LOCATION_SUCCESS,
    payload: location
});
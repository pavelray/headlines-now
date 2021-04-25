import { createSelector } from "reselect";

const selectLocation = state => state.location;

export const selectUserCountry = createSelector(
    [selectLocation],
    location => location.country_code
);

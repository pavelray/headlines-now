import { all, takeLatest, call, put } from "redux-saga/effects";
import  getLocation from "../../apis/location.api";
import { getUserLocationSuccess } from "../actions/location.actions";
import { LocationActions } from "../types/location.types";

export function* getUserLocation() {
  try {
    const response = yield getLocation.get('/');
    if (response?.data) {
      yield put(getUserLocationSuccess(response.data));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchGetUserLocation() {
  yield takeLatest(LocationActions.GET_USER_LOCATION, getUserLocation);
}

export function* locationSagas() {
  yield all([
    call(watchGetUserLocation)
  ]);
}
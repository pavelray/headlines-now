import { all, takeLatest, call, put } from "redux-saga/effects";
import newsApi from "../../apis/news.api";
import { NEWS_API_KEY } from "../../utility/constants";
import { getNewsSuccess } from "../actions/news.actions";
import NewsActions from "../types/news.types";

export function* getNewsByCountry({payload: {countryCode, pageNumber}}) {
  try {
    const params = `?country=${countryCode}&page=${pageNumber}&apiKey=${NEWS_API_KEY}`;
    const response = yield newsApi.get(`/top-headlines${params}`);
    if (response?.data) {
      yield put(getNewsSuccess(response.data));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchGetNewsByCountry() {
  yield takeLatest(NewsActions.GET_NEWS_BY_COUNTRY, getNewsByCountry);
}

export function* newsSagas() {
  yield all([
    call(watchGetNewsByCountry)
  ]);
}
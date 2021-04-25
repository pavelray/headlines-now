/**
    Call all Saga files
 */
import {all,call} from 'redux-saga/effects';
import { locationSagas } from './sagas/location.sagas';
import { newsSagas } from './sagas/news.sagas';

export default function* rootSaga(){
    yield all(
        [
            call(locationSagas),
            call(newsSagas)
        ],
    )
}
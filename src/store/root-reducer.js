import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import locationReducer from './reducers/location.reducer';
import newsReducer from './reducers/news.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['location']
}

const rootReducer = combineReducers({
    location: locationReducer,
    headlines: newsReducer
});


export default persistReducer(persistConfig, rootReducer);
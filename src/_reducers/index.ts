import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import alertReducer from './alert.reducer'
import usersReducer from './users.reducer'
import settingsReducer from './settings.reducer'

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
    blacklist: ['alertReducer', 'usersReducer']
}

const rootReducer = combineReducers({
    alertReducer,
    usersReducer,
    settingsReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer as any)

export default persistedReducer;
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import reducers from '../reducers'
import navMiddleware from '../middlewares/navMiddleware'

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['nav']
}

const pReducer = persistReducer(persistConfig, reducers)

export const store = createStore(pReducer, applyMiddleware(navMiddleware, ReduxThunk))
export const persistor = persistStore(store)

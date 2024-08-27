import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'

import { switchSlice } from './reducers'
import storage from 'redux-persist/lib/storage'

const reducer = combineReducers({
  switch: switchSlice.reducer,
})

const persistConfig = {
  key: 'config',
  storage,
  whitelist: ['switch'],
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)

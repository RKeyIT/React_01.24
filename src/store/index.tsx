import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { gameReducer } from './gameSlice'
import { configReducer } from './configSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { loaderReducer } from './loaderSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { persistorReducer } from './persistorSlice'

const rootReducer = combineReducers({
  loader: loaderReducer,
  config: configReducer,
  game: gameReducer,
  persistor: persistorReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['persistor']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

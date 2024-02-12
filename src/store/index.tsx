import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { gameReducer } from "./gameSlice";
import { configReducer } from "./configSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({
    config: configReducer,
    game: gameReducer,
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector 
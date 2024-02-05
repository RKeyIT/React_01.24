import { useReducer } from "react";
import { IGameContext, PageNames, useGameContext } from "../context/GameContext";

const initialState = useGameContext()

const reducer = (state: IGameContext, action: PageNames) => {
    return {
        ...state,
        currentPage: action
    }
}

export const useNavReducer = () => useReducer(reducer, initialState)
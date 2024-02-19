import { createSlice } from "@reduxjs/toolkit";
import { fetchGameData } from "./gameSlice";

interface ICategoriesCount {
    [key: string]: number
}

interface IDifficultiesCount {
    easy: number
    medium: number
    hard: number
}

interface ITypeCount {
    boolean: number,
    multiple: number
}

interface IPersistorState {
    OverallQuestionCount: number
    OverallTimeSpent: number
    CorrectAnswerCount: number
    CorrectAnswerPercentage: number
    CategoriesCount: ICategoriesCount
    DifficultiesCount: IDifficultiesCount
    TypeCount: ITypeCount
}

const initialState: IPersistorState = {
    OverallQuestionCount: 0,
    OverallTimeSpent: 0,
    CorrectAnswerCount: 0,
    CorrectAnswerPercentage: 0,
    CategoriesCount: {},
    DifficultiesCount: {
        easy: 0,
        medium: 0,
        hard: 0,
    },
    TypeCount: {
        boolean: 0,
        multiple: 0,
    }
}

const persistorSlice = createSlice({
    name: 'persistorSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchGameData.pending, (state) => {
            state.CategoriesCount['SOME FIELD'] = 0
        })
    },
})

export const persistorReducer = persistorSlice.reducer
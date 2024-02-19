import { createSlice } from "@reduxjs/toolkit";
import { ICollectionActionPayloadItem } from "../global.types";

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

interface IPersistedDataActionPayload {
    questionCollection: ICollectionActionPayloadItem[], 
    player_answers: boolean[], 
    timerCounter: number,
}

interface IPersistorState {
    OverallQuestionCount: number
    OverallTimeSpent: number
    CorrectAnswerCount: number
    CorrectAnswerPercentage: number | string
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
    name: 'persistor',
    initialState,
    reducers: {
        persistData: (state, action) => {
            const {
                questionCollection, player_answers, timerCounter
            } = action.payload as IPersistedDataActionPayload

            const getPercentage = (a: number, b: number) => parseFloat((100 / a * b).toFixed(2)) + '%'

            state.OverallQuestionCount += questionCollection.length
            state.OverallTimeSpent += timerCounter
            state.CorrectAnswerCount += player_answers.filter((el: boolean) => el).length
            state.CorrectAnswerPercentage = getPercentage(state.OverallQuestionCount, state.CorrectAnswerCount)

            questionCollection.forEach((element, index) => {
                const { category, difficulty, type } = element

                if (player_answers[index]) {
                    state.CategoriesCount[category]
                        ? state.CategoriesCount[category]++
                        : state.CategoriesCount[category] = 1

                    state.DifficultiesCount[difficulty]++
                    state.TypeCount[type]++
                }
            });

        } 
    },
})

export const persistorReducer = persistorSlice.reducer
export const { persistData } = persistorSlice.actions
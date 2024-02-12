import { createSlice } from "@reduxjs/toolkit";
import { QuizCategories, QuizDifficulties, QuizTime, QuizType } from "../global.types";

const initialState = {
    questionAmount: 5,
    category: QuizCategories.ANY.id,
    difficulty: QuizDifficulties.ANY.id,
    type: QuizType.ANY.id,
    time: QuizTime.ANY.id,
    minQuestionsCount: 5,
    maxQuestionsCount: 15,
}

const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        amountAC: (state, action) => { state.questionAmount = action.payload },
        categoryAC: (state, action) => { state.category = action.payload },
        difficultyAC: (state, action) => { state.difficulty = action.payload },
        typeAC: (state, action) => { state.type = action.payload },
        timeAC: (state, action) => { state.time = action.payload },
        resetAC: (state) => { state = initialState }
    }
})

export const configReducer = configSlice.reducer

export const { amountAC, categoryAC, difficultyAC, resetAC, timeAC, typeAC } = configSlice.actions
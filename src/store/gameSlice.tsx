import { createSlice } from "@reduxjs/toolkit";

interface ICollectionActionPayloadItem {
    // type: 'boolean' | 'multiple',
    // difficulty: "easy" | "medium" | "hard",    
    type: string,
    difficulty: string,
    category: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}

interface IState {
    questionCollection: ICollectionActionPayloadItem[]
    currentIndex: number
    question: string
    correct_answer: string
    incorrect_answers: string[]
}

const initialState: IState = {
    questionCollection: [],
    currentIndex: 0,
    question: '',
    correct_answer: '',
    incorrect_answers: [''],
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        collectionAC: (state, action) => { state.questionCollection = action.payload },
        indexAC: (state, action) => { state.currentIndex = action.payload },
        questionAC: (state, action) => { state.question = action.payload },
        correctAC: (state, action) => { state.correct_answer = action.payload },
        incorrectAC: (state, action) => { state.incorrect_answers = action.payload },
        resetAC: (state) => { state = initialState }
    }
})

export const gameReducer = gameSlice.reducer

export const { collectionAC, indexAC, correctAC, incorrectAC, questionAC, resetAC } = gameSlice.actions
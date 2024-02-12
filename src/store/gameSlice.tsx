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
        collection: (state, action) => { state.questionCollection = action.payload },
        index: (state, action) => { state.currentIndex = action.payload },
        question: (state, action) => { state.question = action.payload },
        correct: (state, action) => { state.correct_answer = action.payload },
        incorrect: (state, action) => { state.incorrect_answers = action.payload },
        reset: (state) => { state = initialState }
    }
})

export const gameReducer = gameSlice.reducer

export const { collection, index, correct, incorrect, question, reset } = gameSlice.actions
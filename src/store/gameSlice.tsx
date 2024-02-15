import { createSlice } from '@reduxjs/toolkit'

interface ICollectionActionPayloadItem {
  // type: 'boolean' | 'multiple',
  // difficulty: "easy" | "medium" | "hard",
  type: string
  difficulty: string
  category: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

interface IState {
  isGameStarted: boolean
  timeResult: number,
  questionCollection: ICollectionActionPayloadItem[]
  currentIndex: number
  question: string
  correct_answer: string
  incorrect_answers: string[]
  player_answers: boolean[] | null[]
}

const initialState: IState = {
  isGameStarted: false,
  timeResult: 0,
  questionCollection: [],
  currentIndex: 0,
  question: '',
  correct_answer: '',
  incorrect_answers: [],
  player_answers: []
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    saveTimeResult: (state, action) => { state.timeResult = action.payload  },
    startGameAC: (state) => { state.isGameStarted = true }, 
    closeGameAC: (state) => { state.isGameStarted = false },
    indexAC: (state) => {
      state.currentIndex += 1
    },
    questionAC: (state, action) => {
      state.question = action.payload
    },
    correctAC: (state, action) => {
      state.correct_answer = action.payload
    },
    incorrectAC: (state, action) => {
      state.incorrect_answers = action.payload
    },
    resetGameAC: () => ({ ...initialState }),
    collectionAC: (state, action) => {
      state.questionCollection = action.payload
      state.currentIndex = 0
      state.question = state.questionCollection[0].question
      state.correct_answer = state.questionCollection[0].correct_answer
      state.incorrect_answers = state.questionCollection[0].incorrect_answers
      state.player_answers.length = state.questionCollection.length
      state.player_answers.fill(null!)
    },
    answerAC: (state, action) => {
      state.player_answers[state.currentIndex] = action.payload
    }
  }
})

export const gameReducer = gameSlice.reducer

export const { 
  collectionAC, indexAC, correctAC,
  incorrectAC, questionAC, resetGameAC,
  answerAC, startGameAC, closeGameAC,
  saveTimeResult
} = gameSlice.actions

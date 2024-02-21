import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { QuizCategories, QuizDifficulties, QuizType } from '../global.contsants'
import { ICollectionActionPayloadItem } from '../global.types'

interface IState {
  isGameStarted: boolean
  timeResult: number
  questionCollection: ICollectionActionPayloadItem[]
  currentIndex: number
  question: string
  correct_answer: string
  incorrect_answers: string[]
  player_answers: boolean[] | null[]
}

interface IParameters {
  questionAmount: number
  category?: string
  difficulty?: string
  type?: string
}

export const fetchGameData = createAsyncThunk(
  'config/dataFetching',
  async (params: IParameters, thunkAPI) => {
    // Request example: https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple
    const { questionAmount, category, difficulty, type } = params
    let baseURL = `https://opentdb.com/api.php?amount=${questionAmount}`

    if (category !== QuizCategories.ANY.id) baseURL += `&category=${category}`
    if (difficulty !== QuizDifficulties.ANY.id) baseURL += `&difficulty=${difficulty}`
    if (type !== QuizType.ANY.id) baseURL += `&type=${type}`

    const response = await fetch(baseURL)
    const data = await response.json()

    if (response.status < 200 || response.status >= 300) {
      console.error('REJECTED with status:', response.status)
      thunkAPI.rejectWithValue(data)
    }

    // There is an array of collection with question and answers (data.results)
    return data.results
  }
)

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
    saveTimeResult: (state, action) => {
      state.timeResult = action.payload
    },
    setGameStartAsTrueAC: (state) => {
      state.isGameStarted = true
    },
    setGameStartAsFalseAC: (state) => {
      state.isGameStarted = false
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
    setAnswerAndNextIndex: (state, action) => {
      state.player_answers[state.currentIndex] = action.payload === state.correct_answer
      state.currentIndex += 1

      if (state.currentIndex === state.questionCollection.length) {
        state.isGameStarted = false
        return
      }

      state.question = state.questionCollection[state.currentIndex].question
      state.correct_answer = state.questionCollection[state.currentIndex].correct_answer
      state.incorrect_answers = state.questionCollection[state.currentIndex].incorrect_answers
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGameData.fulfilled, (state, action) => {
      state.questionCollection = action.payload
      state.currentIndex = 0
      state.question = state.questionCollection[0].question
      state.correct_answer = state.questionCollection[0].correct_answer
      state.incorrect_answers = state.questionCollection[0].incorrect_answers
      state.player_answers.length = state.questionCollection.length
      state.player_answers.fill(null!)
    })
  }
})

export const gameReducer = gameSlice.reducer

export const {
  collectionAC,
  resetGameAC,
  setAnswerAndNextIndex,
  setGameStartAsTrueAC,
  setGameStartAsFalseAC,
  saveTimeResult
} = gameSlice.actions

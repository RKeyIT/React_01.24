import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { QuizCategories, QuizDifficulties, QuizType } from '../global.contsants'

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
  timeResult: number
  questionCollection: ICollectionActionPayloadItem[]
  currentIndex: number
  question: string
  correct_answer: string
  incorrect_answers: string[]
  player_answers: boolean[] | null[]
}

interface IParameters {
  questionAmount: number,
  category?: string,
  difficulty?: string,
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
      return thunkAPI.rejectWithValue(data)
    }

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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGameData.pending, (state, action) => {
      console.log('Fetching...', action)
    })
    builder.addCase(fetchGameData.rejected, (state, action) => {
      console.log('Rejected...', action)
    })
    builder.addCase(fetchGameData.fulfilled, (state, action) => {
      console.log('Fulfilled...', action)
      state.questionCollection = action.payload
    })
  }
})

export const gameReducer = gameSlice.reducer

export const {
  collectionAC,
  indexAC,
  correctAC,
  incorrectAC,
  questionAC,
  resetGameAC,
  answerAC,
  setGameStartAsTrueAC,
  setGameStartAsFalseAC,
  saveTimeResult
} = gameSlice.actions

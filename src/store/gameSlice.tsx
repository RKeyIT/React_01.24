import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { QuizCategories, QuizDifficulties, QuizType } from '../global.contsants'
import { ICollection } from '../global.types'
import { decode } from 'html-entities'
import { bool, mix1, mix2, mult } from '../MOCKDATA'

interface IState {
  isGameStarted: boolean
  isMockGame: boolean
  timeResult: number
  questionCollection: ICollection[]
  currentIndex: number
  question: string
  correct_answer: string
  incorrect_answers: string[]
  possible_answers: string[]
  player_answers: boolean[] | null[]
}

interface IParameters {
  questionAmount: number
  category?: string
  difficulty?: string
  type?: string
}

const MOCK_DATA = [bool, mult, mix1, mix2]
const GET_MOCK_COLLECTION = () => MOCK_DATA[Math.round(Math.random() * 3)].results as ICollection[]
const MOCK_COLLECTION = GET_MOCK_COLLECTION()
const MOCK_QUESTION = decode(MOCK_COLLECTION[0].question)
const MOCK_CORRECT_ANSWER = decode(MOCK_COLLECTION[0].correct_answer)
const MOCK_INCORRECT_ANSWERS = MOCK_COLLECTION[0].incorrect_answers.map(el => decode(el))

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

    return data.results
  }
)

const initialState: IState = {
  isGameStarted: false,
  isMockGame: true,
  timeResult: 0,
  questionCollection: MOCK_COLLECTION,
  currentIndex: 0,
  question: MOCK_QUESTION,
  correct_answer: MOCK_CORRECT_ANSWER,
  incorrect_answers: MOCK_INCORRECT_ANSWERS,
  possible_answers: [MOCK_CORRECT_ANSWER, ...MOCK_INCORRECT_ANSWERS].sort(() => Math.random() - 0.5),
  player_answers: new Array().fill(null, 0, MOCK_COLLECTION.length),
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    saveTimeResult: (state, action) => { state.timeResult = action.payload },
    setGameStartAsTrueAC: (state) => { state.isGameStarted = true },
    setGameStartAsFalseAC: (state) => { state.isGameStarted = false },
    resetGameAC: () => ({ ...initialState }),
    mockGameOff: (state) => { state.isMockGame = false },
    collectionAC: (state, action) => {
      state.questionCollection = action.payload
      state.currentIndex = 0
      state.question = state.questionCollection[0].question
      state.correct_answer = state.questionCollection[0].correct_answer
      state.incorrect_answers = state.questionCollection[0].incorrect_answers
      state.possible_answers = [state.correct_answer, ...state.incorrect_answers]
      state.player_answers.length = state.questionCollection.length
      state.player_answers.fill(null!)
    },
    setPlayerAnswerAC: (state, action) => {
      state.player_answers[state.currentIndex] = action.payload === state.correct_answer
      state.currentIndex += 1

      if (state.currentIndex === state.questionCollection.length) {
        state.isGameStarted = false
        return
      }

      state.question = state.questionCollection[state.currentIndex].question
      state.correct_answer = state.questionCollection[state.currentIndex].correct_answer
      state.incorrect_answers = state.questionCollection[state.currentIndex].incorrect_answers
      state.possible_answers = [state.correct_answer, ...state.incorrect_answers]
    }
  },
  extraReducers: (builder) => {
    const decodeData = (collections: ICollection[]) =>
      collections.map((collection: ICollection) => ({
        ...collection,
        correct_answer: decode(collection.correct_answer),
        incorrect_answers: collection.incorrect_answers.map((el) => decode(el)),
        question: decode(collection.question)
      }))

    const setupNewState = (state: IState, payload: ICollection[]) => {
      state.questionCollection = payload
      state.currentIndex = 0
      state.question = state.questionCollection[0].question
      state.correct_answer = state.questionCollection[0].correct_answer
      state.incorrect_answers = state.questionCollection[0].incorrect_answers
      state.possible_answers = [state.correct_answer, ...state.incorrect_answers].sort(() => Math.random() - 0.5)
      state.player_answers.length = state.questionCollection.length
      state.player_answers.fill(null!)
    }

    builder.addCase(fetchGameData.rejected, (state) => {
      state.isMockGame = true

      const MOCK_DATA = GET_MOCK_COLLECTION()

      setupNewState(state, decodeData(MOCK_DATA))
    })
    builder.addCase(fetchGameData.fulfilled, (state, action) => {
      state.isMockGame = false

      setupNewState(state, decodeData(action.payload))
    })
  }
})

export const gameReducer = gameSlice.reducer

export const {
  collectionAC,
  resetGameAC,
  setPlayerAnswerAC,
  setGameStartAsTrueAC,
  setGameStartAsFalseAC,
  saveTimeResult,
  mockGameOff
} = gameSlice.actions

import { createSlice } from '@reduxjs/toolkit'
import { ICollection } from '../global.types'
import { saveTimeResult } from './gameSlice'

interface ICategoriesCount {
  [key: string]: number
}

interface IDifficultiesCount {
  easy: number
  medium: number
  hard: number
}

interface ITypeCount {
  boolean: number
  multiple: number
}

interface IPersistedDataActionPayload {
  questionCollection: ICollection[]
  player_answers: boolean[]
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
    hard: 0
  },
  TypeCount: {
    boolean: 0,
    multiple: 0
  }
}

const persistorSlice = createSlice({
  name: 'persistor',
  initialState,
  reducers: {
    persistData: (state, action) => {
      const { questionCollection, player_answers } = action.payload as IPersistedDataActionPayload

      const getPercentage = (a: number, b: number) => parseFloat(((100 / a) * b).toFixed(2)) + '%'

      state.OverallQuestionCount += questionCollection.length
      state.CorrectAnswerCount += player_answers.filter((el: boolean) => el).length
      state.CorrectAnswerPercentage = getPercentage(
        state.OverallQuestionCount,
        state.CorrectAnswerCount
      )

      questionCollection.forEach((element) => {
        const { category, difficulty, type } = element

        state.CategoriesCount[category]
          ? state.CategoriesCount[category]++
          : (state.CategoriesCount[category] = 1)

        state.DifficultiesCount[difficulty]++
        state.TypeCount[type]++
      })
    },
    resetPersistor: () => ({ ...initialState })
  },
  extraReducers: (builder) => {
    builder.addCase(saveTimeResult, (state, action) => {
      state.OverallTimeSpent += action.payload
    })
  }
})

export const persistorReducer = persistorSlice.reducer
export const { persistData, resetPersistor } = persistorSlice.actions

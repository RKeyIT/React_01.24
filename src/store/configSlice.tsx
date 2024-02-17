import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { QuizCategories, QuizDifficulties, QuizTime, QuizType } from '../global.contsants'

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

const resetableState = {
  questionAmount: 5,
  category: QuizCategories.ANY.id,
  difficulty: QuizDifficulties.ANY.id,
  type: QuizType.ANY.id,
  time: QuizTime.one.id,
}

const initialState = {
  ...resetableState,
  minQuestionsCount: 5,
  maxQuestionsCount: 15,
}


const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    amountAC: (state, action) => {
      state.questionAmount = action.payload
    },
    categoryAC: (state, action) => {
      state.category = action.payload
    },
    difficultyAC: (state, action) => {
      state.difficulty = action.payload
    },
    typeAC: (state, action) => {
      state.type = action.payload
    },
    timeAC: (state, action) => {
      state.time = action.payload
    },
    resetConfigAC: (state) => ({ ...state, ...resetableState })
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGameData.pending, (state, action) => {})
    builder.addCase(fetchGameData.rejected, (state, action) => {})
    builder.addCase(fetchGameData.fulfilled, (state, action) => {})
  }
})

export const configReducer = configSlice.reducer

export const { amountAC, categoryAC, difficultyAC, resetConfigAC, timeAC, typeAC } =
  configSlice.actions

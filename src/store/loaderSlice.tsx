import { createSlice } from '@reduxjs/toolkit'
import { fetchGameData } from './gameSlice'

const loaderSlice = createSlice({
  name: 'loader',
  initialState: { isLoadingSomething: false },
  reducers: {},
  extraReducers: (builder) => {
    // SECTION - Data fetching section
    builder.addCase(fetchGameData.pending, (state) => {
      state.isLoadingSomething = true
    })
    builder.addCase(fetchGameData.rejected, (state) => {
      state.isLoadingSomething = false
    })
    builder.addCase(fetchGameData.fulfilled, (state) => {
      state.isLoadingSomething = false
    })
    // !SECTION
  }
})

export const loaderReducer = loaderSlice.reducer

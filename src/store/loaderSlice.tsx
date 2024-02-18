import { createSlice } from "@reduxjs/toolkit";
import { fetchGameData } from "./gameSlice";

const loaderSlice = createSlice({
    name: 'loader',
    initialState: { isLoadedSomething: false },
    reducers: {},
    extraReducers: (builder) => {
        // SECTION - Data fetching section
        builder.addCase(fetchGameData.pending, (state) => {
            state.isLoadedSomething = true
        })
        builder.addCase(fetchGameData.rejected, (state) => {
            state.isLoadedSomething = false
        })
        builder.addCase(fetchGameData.fulfilled, (state) => {
            state.isLoadedSomething = false
        })
        // !SECTION
    }
})

export const loaderReducer = loaderSlice.reducer
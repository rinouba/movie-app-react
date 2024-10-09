import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dataSearch: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    searchMovie: (state,action) => {
      state.dataSearch = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { searchMovie } = counterSlice.actions

export default counterSlice.reducer
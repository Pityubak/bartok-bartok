import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  index: 0,
  selected: 0,
  bottom: 0,
}

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    changeIndex: (state, action) => {
      state.index = action.payload
    },
    changeSelected: (state, action) => {
      state.selected = action.payload
    },
    changeBottom: (state, action) => {
      state.selected = action.payload
    },
  },
})

export const menuReducer = menuSlice.reducer
export const { changeIndex, changeSelected, changeBottom } = menuSlice.actions

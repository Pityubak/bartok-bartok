import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  darkMode: false,
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme: (state, action) => {
      state.darkMode = action.payload
    },
  },
})

export const themeReducer = themeSlice.reducer
export const { switchTheme } = themeSlice.actions
